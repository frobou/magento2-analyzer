<?php
/**
 * Copyright © Frobou Tec. All rights reserved.
 */

declare(strict_types=1);

namespace Frobou\Show;

use Exception;
use Magento\Developer\Model\Di\PluginListFactory;
use Magento\Framework\Config\ScopeInterface;
use ReflectionClass;
use ReflectionException;

class PluginReader
{
    const ALLOWED_AREA = [
        'global',
        'frontend',
        'adminhtml',
        'doc',
        'crontab',
        'webapi_rest',
        'webapi_soap',
        'graphql'
    ];

    const ALLOWED_FILTERS = [
        'grep',
        'area'
    ];

    /**
     * @var ScopeInterface
     */
    private $scope;

    /**
     * @var PluginListFactory
     */
    private $pluginListFactory;

    /**
     * @var array
     */
    private $filters = [];

    /**
     * @param ScopeInterface $scope
     * @param PluginListFactory $pluginList
     */
    public function __construct(
        ScopeInterface $scope,
        PluginListFactory $pluginList
    ) {
        $this->scope = $scope;
        $this->pluginListFactory = $pluginList;
    }

    /**
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function addFilter(string $key, $value): void
    {
        if (!in_array($key, self::ALLOWED_FILTERS)) {
            return;
        }

        $this->filters[$key] = $value;
    }

    /**
     * @param string $key
     * @return bool
     */
    public function hasFilter(string $key): bool
    {
        return array_key_exists($key, $this->filters);
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function getFilter(string $key)
    {
        return $this->filters[$key];
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getSubjects(): array
    {
        $result = [];

        foreach ($this->getSubjectsClasses() as $subject) {
            if (!isset($result[$subject])) {
                $result[$subject] = [
                    'subject' => $subject,
                    'wrappers' => []
                ];
            }

            $listedWrappers = [];

            $areas = $this->hasFilter('area')
                ? $this->getFilter('area')
                : self::ALLOWED_AREA;

            foreach ($areas as $area) {
                if (!isset($result[$subject]['wrappers'][$area])) {
                    $result[$subject]['wrappers'][$area] = [];
                }

                $this->scope->setCurrentScope($area);
                $cleanPluginList = $this->pluginListFactory->create();
                $wrappers = $cleanPluginList->getPluginsListByClass($subject);

                foreach ($wrappers as $position => $positionWrappers) {
                    if (empty($positionWrappers)) {
                        continue;
                    }

                    if (!isset($result[$subject]['wrappers'][$area][$position])) {
                        $result[$subject]['wrappers'][$area][$position] = [];
                    }

                    foreach ($positionWrappers as $pluginClass => $methods) {
                        $listedWrappersKey = sha1(
                            $position .
                            $pluginClass .
                            implode(',', $methods)
                        );

                        if (in_array($listedWrappersKey, $listedWrappers)) {
                            continue;
                        }

                        $result[$subject]['wrappers'][$area][$position][$pluginClass] = $methods;
                        $listedWrappers[] = $listedWrappersKey;
                    }

                    ksort($result[$subject]['wrappers'][$area][$position]);
                }
            }
        }

        return $result;
    }

    /**
     * @return array
     * @throws Exception
     */
    private function getSubjectsClasses(): array
    {
        $pluginListReflect = $this->pluginListFactory->create();

        try {
            $reflector = new ReflectionClass($pluginListReflect);
        } catch (ReflectionException $e) {
            throw new Exception($e->getMessage());
        }

        $method = $reflector->getMethod('_loadScopedData');
        $method->setAccessible(true);
        $method->invoke($pluginListReflect);

        $property = $reflector->getProperty('_data');
        $property->setAccessible(true);

        $subjects = $property->getValue($pluginListReflect);
        $subjects = array_keys($subjects);
        sort($subjects);

        // Filter by grep
        if ($this->hasFilter('grep')) {
            $subjects = array_filter($subjects, function ($subject) {
                return strstr($subject, $this->getFilter('grep'));
            });
        }

        return $subjects;
    }
}
