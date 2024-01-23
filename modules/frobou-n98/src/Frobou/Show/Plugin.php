<?php

namespace Frobou\Show;

use Frobou\Show\Plugin\PluginHelper;
use Magento\Framework\Console\Cli;
use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class Plugin extends AbstractMagentoCommand
{
    const NAME_SPACE = 'module-name|filter-pattern';
    const INCLUDE_OPTION = 'include-disabled';
    const COPY_OPTION = 'copy-gui';

    /**
     * @var PluginHelper
     */
    private $pluginHelper;

    protected function configure()
    {
        $this
            ->setName('frobou:show:plugin')
            ->setDescription('Lista os plugins')
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
     * @param PluginHelper $pluginHelper
     */
    public function inject(PluginHelper $pluginHelper)
    {
        $this->pluginHelper = $pluginHelper->setApplication($this->getApplication());
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

        $pluginList = $this->pluginHelper->getPlugins($includeDisabled);

        if ($copyGui) {
            $destination = $this->getApplication()->getMagentoRootFolder() . DIRECTORY_SEPARATOR . 'pub/gui';
            $this->pluginHelper->doCopy($destination);
            file_put_contents($destination . DIRECTORY_SEPARATOR . 'assets/ma-plugins.json', json_encode($pluginList));
        }

        if ($moduleName) {
            $hasMulti = substr($moduleName, 0, 2) === '{{';
            if ($hasMulti) {
                try {
                    $pluginList = $this->filterByMulti(explode(':', substr($moduleName, 2)), $pluginList);
                } catch (\Exception $exception) {
                    $output->writeln("- <error>{$exception->getMessage()}</error>");
                    return Cli::RETURN_FAILURE;
                }
                if (!count($pluginList['plugins'])) {
                    $output->writeln("- <error>Multi pattern não encontrado: {$moduleName}</error>");
                    return Cli::RETURN_FAILURE;
                }
            } else {
                $moduleList = [];
                $totals = 0;
                foreach ($pluginList['plugins'] as $key => $plugins) {
                    preg_match("/$moduleName/i", $key, $matches);
                    if ($matches && !empty($plugins)) {
                        $moduleList[$key] = $plugins;
                        $totals++;
                    }
                }
                if (empty($moduleList)) {
                    $output->writeln("- <error>Módulo ou regex pattern não encontrado: {$moduleName}</error>");
                    return Cli::RETURN_FAILURE;
                }
                $pluginList['plugins'] = $moduleList;
                $pluginList['totals'] = $totals;
            }
        }
        $this->createOutput($pluginList, $output);
        return 1;
    }

    private function filterByMulti(array $data, array $pluginList)
    {
        $list = $pluginList['plugins'];

        /* chave que contem o termo ou regex para o nome do modulo */
        if (isset($data[0]) && !empty($data[0])) {
            $list = array_filter(
                $pluginList['plugins'],
                function ($key) use ($data) {
                    preg_match("/$data[0]/i", $key, $matches);
                    return !empty($matches);
                },
                ARRAY_FILTER_USE_KEY
            );
        }

        /* chave que contem o tipo do plugin */
        if (isset($data[3]) && !empty($data[3])) {
            $validTypes = ['after', 'before', 'around'];
            $types = explode('-', $data[3]);
            foreach ($types as $type) {
                if (!in_array($type, $validTypes)) {
                    throw new \Exception("Type called '[{$type}]' not allowed");
                }
            }
            $innerList = [];
            foreach ($list as $key => $value) {
                $innerList[$key] = [];
                foreach ($types as $type) {
                    $plug = [];
                    foreach ($value as $plugin) {
                        if (!empty($plugin[$type])) {
                            $plug[] = [$type => $plugin[$type]];
                        }
                    }
                    if (!empty($plug)) {
                        $innerList[$key] = $plug;
                    }
                }
                if (empty($innerList[$key])) {
                    unset($innerList[$key]);
                }
            }
            $list = $innerList;
        }

        /* chave que contem o status ativo */
        if (isset($data[4]) && !empty($data[4])) {
            $innerList = [];
            foreach ($list as $key => $value) {
                $innerList[$key] = [];
                foreach ($value as $plugins) {
                    foreach ($plugins as $type => $plugin) {
                        $out = array_filter($plugin, function ($p) use ($data) {
                            return $p['active'] === intval($data[4]);
                        });
                        if (count($out)) {
                            $innerList[$key][] = [$type => $out];
                        }
                    }
                }
                if (empty($innerList[$key])) {
                    unset($innerList[$key]);
                }
            }
            $list = $innerList;
        }

        /* chave que contem o metodo */
        if (isset($data[1]) && !empty($data[1])) {
            $list = $this->search($data[1], $list, 'name');
        }

        /* chave que contem a classe base */
        if (isset($data[2]) && !empty($data[2])) {
            $list = $this->search($data[2], $list, 'className');
        }

        $pluginList['plugins'] = $list;
        // TODO: contar a quantidade de plugins, nao de modulos
        $pluginList['totals'] = count($list);
        return $pluginList;
    }

    private function search($pattern, $list, $objectKey)
    {
        $innerList = [];
        foreach ($list as $key => $value) {
            $innerList[$key] = [];
            foreach ($value as $plugins) {
                foreach ($plugins as $type => $plugin) {
                    $out = array_filter($plugin, function ($p) use ($pattern, $objectKey) {
                        preg_match("/$pattern/i", $p['origin'][$objectKey], $matches);
                        return !empty($matches);
                    });
                    if (count($out)) {
                        $innerList[$key][] = [$type => $out];
                    }
                }
            }
            if (empty($innerList[$key])) {
                unset($innerList[$key]);
            }
        }
        return $innerList;
    }

    private function createOutput($pluginList, $output)
    {
        $output->writeln('----------BEGIN');
        $total = 0;
        foreach ($pluginList['plugins'] as $moduleName => $plugin) {
            $output->writeln("Plugins found for <question>$moduleName</question>:");
            foreach ($plugin as $perType) {
                foreach ($perType as $type => $plugins) {
                    $output->writeln("- <info>$type</info>");
                    foreach ($plugins as $plugin) {
                        $total++;
                        if (isset($plugin['origin']['name'])) {
                            $classFile = 'app/code/' . str_replace(
                                    '\\',
                                    DIRECTORY_SEPARATOR,
                                    $plugin['className']
                                ) . '.php';
                            $output->writeln(
                                "> {$plugin['origin']['name']} | <comment>{$classFile}:{$plugin['line']}</comment>"
                            );
                        } else {
                            $output->writeln("- <error>Erro mostrando {$plugin['className']}</error>");
                        }
                    }
                        $output->writeln('----------');
                }
            }
        }
        $modules = count($pluginList['plugins']);
        $output->writeln("Found <info>{$modules}</info> Modules with <info>{$total}</info> Plugins");
        $output->writeln('----------END');
    }

}
