<?php

namespace Frobou\Show;

use Frobou\Show\Rewrite\RewriteHelper;
use Magento\Framework\Console\Cli;
use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class Rewrite extends AbstractMagentoCommand
{
    const NAME_SPACE = 'module-name|filter-pattern';
    const INCLUDE_OPTION = 'include-disabled';
    const COPY_OPTION = 'copy-gui';

    /**
     * @var RewriteHelper
     */
    private $rewriteHelper;

    protected function configure()
    {
        $this
            ->setName('frobou:show:rewrite')
            ->setDescription('Lista os rewrites')
            ->setDefinition([
                                new InputArgument(
                                    self::NAME_SPACE,
                                    InputArgument::OPTIONAL,
                                    'Get only for the passed module',
                                    null
                                ),
                                new InputOption(
                                    self::INCLUDE_OPTION,
                                    '-i',
                                    InputOption::VALUE_NONE,
                                    'Include Disabled Modules'
                                ),
                                new InputOption(
                                    self::COPY_OPTION,
                                    '-g',
                                    InputOption::VALUE_NONE,
                                    'Copy gui to /pub'
                                )
                            ]);
    }

    /**
     * @param RewriteHelper $rewriteHelper
     */
    public function inject(RewriteHelper $rewriteHelper)
    {
        $this->rewriteHelper = $rewriteHelper->setApplication($this->getApplication());
    }

    /**
     * @param \Symfony\Component\Console\Input\InputInterface $input
     * @param \Symfony\Component\Console\Output\OutputInterface $output
     * @return int|void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->detectMagento($output);
        if (!$this->initMagento()) {
            $output->writeln('<error>' . 'Run on the magento directory' . '</error>');
            return Cli::RETURN_FAILURE;
        }
        $moduleName = $input->getArgument(self::NAME_SPACE);
        $includeDisabled = $input->getOption(self::INCLUDE_OPTION);
        $copyGui = $input->getOption(self::COPY_OPTION);

        $rewriteList = $this->rewriteHelper->getRewrites($includeDisabled);

        if ($copyGui) {
            $destination = $this->getApplication()->getMagentoRootFolder() . DIRECTORY_SEPARATOR . 'pub/gui';
            $this->rewriteHelper->doCopy($destination);
            file_put_contents($destination . DIRECTORY_SEPARATOR . 'assets/ma-rewrites.json', json_encode($rewriteList));
        }

        if ($moduleName) {
            $hasMulti = substr($moduleName, 0, 2) === '{{';
            if ($hasMulti) {
                try {
                    $rewriteList = $this->filterByMulti(explode(':', substr($moduleName, 2)), $rewriteList);
                } catch (\Exception $exception) {
                    $output->writeln("- <error>{$exception->getMessage()}</error>");
                    return Cli::RETURN_FAILURE;
                }
                if (!count($rewriteList['rewrites'])) {
                    $output->writeln("- <error>Multi pattern não encontrado: {$moduleName}</error>");
                    return Cli::RETURN_FAILURE;
                }
            } else {
                $moduleList = [];
                $totals = 0;
                foreach ($rewriteList['rewrites'] as $key => $rewrites) {
                    preg_match("/$moduleName/i", $key, $matches);
                    if ($matches && !empty($rewrites)) {
                        $moduleList[$key] = $rewrites;
                        $totals++;
                    }
                }
                if (empty($moduleList)) {
                    $output->writeln("- <error>Módulo ou regex pattern não encontrado: {$moduleName}</error>");
                    return Cli::RETURN_FAILURE;
                }
                $rewriteList['rewrites'] = $moduleList;
                $rewriteList['totals'] = $totals;
            }
        }
        $this->createOutput($rewriteList, $output);
        return 1;
    }

    private function filterByMulti(array $data, array $rewriteList)
    {
        $list = $rewriteList['rewrites'];

        /* chave que contem o termo ou regex para o nome do modulo */
        if (isset($data[0]) && !empty($data[0])) {
            $list = array_filter(
                $rewriteList['rewrites'],
                function ($key) use ($data) {
                    preg_match("/$data[0]/i", $key, $matches);
                    return !empty($matches);
                },
                ARRAY_FILTER_USE_KEY
            );
        }

        /* chave que contem o metodo */
        if (isset($data[1]) && !empty($data[1])) {
            $list = $this->search($data[1], $list, 'forClass');
        }

        /* chave que contem a forClass */
        if (isset($data[2]) && !empty($data[2])) {
            $list = $this->search($data[2], $list, 'typeClass');
        }

        $rewriteList['rewrites'] = $list;
        // TODO: contar a quantidade de plugins, nao de modulos
        $rewriteList['totals'] = count($list);
        return $rewriteList;
    }

    private function search($pattern, $list, $objectKey)
    {
        $innerList = [];
        foreach ($list as $key => $value) {
            $inner = [];
            foreach ($value as $rewrite) {
                preg_match("/$pattern/i", $rewrite[$objectKey], $matches);
                if (!empty($matches)) {
                    $inner[] = $rewrite;
                }
            }
            if (count($inner)) {
                $innerList[$key] = $inner;
            }
        }
        return $innerList;
    }

    private function createOutput($rewriteList, $output)
    {
        $output->writeln('----------BEGIN');
        $total = 0;
        foreach ($rewriteList['rewrites'] as $moduleName => $rewrites) {
            $output->writeln("Rewrites found on <question>$moduleName</question>:");
            foreach ($rewrites as $rewrite) {
                $total++;
                $output->writeln(
                    "> {for <comment>{$rewrite['forClass']}</comment> | <comment>{$rewrite['typeClass']}</comment> }"
                );
            }
            $output->writeln('----------');
        }
        $modules = count($rewriteList['rewrites']);
        $output->writeln("Found <info>{$modules}</info> Modules with <info>{$total}</info> Rewrites");
        $output->writeln('----------END');
    }

}
