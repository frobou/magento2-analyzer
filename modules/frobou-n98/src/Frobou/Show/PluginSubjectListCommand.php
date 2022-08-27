<?php
/**
 * Copyright © Frobou Tec. All rights reserved.
 */

declare(strict_types=1);

namespace Frobou\Show;

use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class PluginSubjectListCommand extends AbstractMagentoCommand
{
    /**
     * @var PluginReader
     */
    private $pluginReader;

    /**
     * @param PluginReader
     */
    public function inject(
        PluginReader $pluginReader
    ) {
        $this->pluginReader = $pluginReader;
    }

    /**
     * @inheritDoc
     */
    protected function configure()
    {
        $this->setName('frobou:plugins:list-subjects');
        $this->setDescription('List plugins from subjects point of view');

        $this->addOption(
            'grep',
            'g',
            InputOption::VALUE_OPTIONAL,
            'Filter subject classes by grep'
        );

        $this->addOption(
            'area',
            'a',
            InputOption::VALUE_OPTIONAL | InputOption::VALUE_IS_ARRAY,
            'Filter subject classes by area ('. implode(', ', PluginReader::ALLOWED_AREA) .')'
        );
    }

    /**
     * @inheritDoc
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->detectMagento($output);

        if (!$this->initMagento()) {
            return;
        }

        if ($grep = $input->getOption('grep')) {
            $this->pluginReader->addFilter('grep', $grep);
        }

        if ($area = $input->getOption('area')) {
            $this->pluginReader->addFilter('area', $area);
        }

        $subjects = $this->pluginReader->getSubjects();

        foreach ($subjects as $subject) {
            $output->writeln('');
            $output->writeln('<info>'. $subject['subject'] .'</info>');

            foreach ($subject['wrappers'] as $area => $wrappers) {
                if ($this->isArrayDeepEmpty($wrappers)) {
                    continue;
                }

                $output->writeln('    <comment>'. $area.'</comment>');

                foreach ($wrappers as $position => $wrapperInstances) {
                    if ($this->isArrayDeepEmpty($wrapperInstances)) {
                        continue;
                    }

                    $output->writeln('        <fg=magenta>'. $position.'</>');

                    foreach ($wrapperInstances as $wrapperInstance => $methods) {
                        foreach ($methods as $method) {
                            $output->writeln('            - '. $wrapperInstance .' <comment>@</comment> '. $position . ucfirst($method));
                        }
                    }
                }
            }

            $output->writeln('');
        }
    }

    /**
     * @param array $array
     * @return bool
     */
    private function isArrayDeepEmpty(array $array): bool
    {
        foreach ($array as $value) {
            if (is_array($value)) {
                if (!$this->isArrayDeepEmpty($value)) {
                    return false;
                }
            }

            if (!empty($value)) {
                return false;
            }
        }

        return true;
    }
}
