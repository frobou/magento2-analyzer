<?php

namespace Frobou\Show;

use Frobou\Show\Observer\ObserverHelper;
use Magento\Framework\Console\Cli;
use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class Observer extends AbstractMagentoCommand
{
    const NAME_SPACE = 'module-name|filter-pattern';
    const INCLUDE_OPTION = 'include-disabled';
    const COPY_OPTION = 'copy-gui';

    /**
     * @var ObserverHelper
     */
    private $observerHelper;

    protected function configure()
    {
        $this
            ->setName('frobou:show:observer')
            ->setDescription('Lista os observers')
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
     * @param ObserverHelper $observerHelper
     */
    public function inject(ObserverHelper $observerHelper)
    {
        $this->observerHelper = $observerHelper->setApplication($this->getApplication());
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

        $observerList = $this->observerHelper->getObservers($includeDisabled);

        if ($copyGui) {
            $destination = $this->getApplication()->getMagentoRootFolder() . DIRECTORY_SEPARATOR . 'pub/gui';
            $this->observerHelper->doCopy($destination);
            file_put_contents(
                $destination . DIRECTORY_SEPARATOR . 'assets/ma-observers.json',
                json_encode($observerList)
            );
        }

        if ($moduleName) {
            $hasMulti = substr($moduleName, 0, 2) === '{{';
            if ($hasMulti) {
                $observerList = $this->filterByMulti(explode(':', substr($moduleName, 2)), $observerList);
                if (!count($observerList['observers'])) {
                    $output->writeln("- <error>Multi pattern não encontrado: [{$moduleName}]</error>");
                    return Cli::RETURN_FAILURE;
                }
            } else {
                $moduleList = [];
                $totals = 0;
                foreach ($observerList['observers'] as $key => $observer) {
                    preg_match("/$moduleName/i", $key, $matches);
                    if ($matches && !empty($observer)) {
                        $moduleList[$key] = $observer;
                        $totals += count($observer);
                    }
                }
                if (empty($moduleList)) {
                    $output->writeln("- <error>Módulo ou regex pattern não encontrado: [{$moduleName}]</error>");
                    return Cli::RETURN_FAILURE;
                }
                $observerList['observers'] = $moduleList;
                $observerList['totals'] = $totals;
            }
        }

        unset($observerList['dispatchs'], $observerList['dispatchs_count']);
        $this->createOutput($observerList, $output);
        return 1;
    }

    private function filterByMulti(array $data, array $observerList)
    {
        /*
         * padrao de pesquisa
         * {{mage.+_cms$:before:before:delete:1
         * remover o {{ da string
         * separar em partes, por :
         * cada parte significa um campo de pesquisa
         * se nao usar um campo, use ::valor
         */
        $list = $observerList['observers'];
        /* chave que contem o termo ou regex para o nome do modulo */
        if (isset($data[0]) && !empty($data[0])) {
            $list = array_filter(
                $observerList['observers'],
                function ($key) use ($data) {
                    preg_match("/$data[0]/i", $key, $matches);
                    return !empty($matches);
                },
                ARRAY_FILTER_USE_KEY
            );
        }
        /* chave que contem o status ativo */
        if (isset($data[4]) && !empty($data[4])) {
            $innerList = [];
            foreach ($list as $key => $value) {
                $inner = [];
                foreach ($value as $observer) {
                    if ($observer['active'] === intval($data[4])) {
                        $inner[] = $observer;
                    }
                }
                if (count($inner)) {
                    $innerList[$key] = $inner;
                }
            }
            $list = $innerList;
        }
        /* chave que contem o termo ou regex usado para o dispatch */
        if (isset($data[1]) && !empty($data[1])) {
            $list = $this->search($data[1], $list, 'dispatch');
        }
        /* chave que contem o termo ou regex usado para o observerName */
        if (isset($data[2]) && !empty($data[2])) {
            $list = $this->search($data[2], $list, 'observerName');
        }
        /* chave que contem o termo ou regex usado para o observerClass */
        if (isset($data[3]) && !empty($data[3])) {
            $list = $this->search($data[3], $list, 'observerClass');
        }
        $observerList['observers'] = $list;
        // TODO: contar a quantidade de observers, nao de modulos
        $observerList['totals'] = count($list);
        return $observerList;
    }

    private function search($pattern, $list, $objectKey)
    {
        $innerList = [];
        foreach ($list as $key => $value) {
            $inner = [];
            foreach ($value as $observer) {
                preg_match("/$pattern/i", $observer[$objectKey], $matches);
                if (!empty($matches)) {
                    $inner[] = $observer;
                }
            }
            if (count($inner)) {
                $innerList[$key] = $inner;
            }
        }
        return $innerList;
    }

    private function createOutput($observerList, $output)
    {
        $output->writeln('----------BEGIN');
        $total = 0;
        foreach ($observerList['observers'] as $moduleName => $observers) {
            $output->writeln("Observers found for <question>$moduleName</question>:");
            foreach ($observers as $observer) {
                $total++;
                $output->writeln(
                    "> {$observer['dispatch']} | from <comment>{$observer['from']}</comment> | <comment>{$observer['observerClass']}:{$observer['line']}</comment>"
                );
            }
            $output->writeln('----------');
        }
        $modules = count($observerList['observers']);
        $output->writeln("Found <info>{$modules}</info> Modules with <info>{$total}</info> Observers");
        $output->writeln('----------END');
    }

}
