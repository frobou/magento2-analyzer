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
use ReflectionMethod;
use ReflectionProperty;

/**
 * Class PluginReader
 * @package Frobou\Show
 */
class PluginReader
{
    private const ALLOWED_AREA = [
        'global',
        'frontend',
        'adminhtml',
        'doc',
        'crontab',
        'webapi_rest',
        'webapi_soap',
        'graphql'
    ];

    private const ALLOWED_FILTERS = [
        'grep',
        'area'
    ];

    /**
     * @var ScopeInterface
     */
    private ScopeInterface $scope;

    /**
     * @var PluginListFactory
     */
    private PluginListFactory $pluginListFactory;

    /**
     * @var array<string, mixed>
     */
    private array $filters = [];

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
        if (!in_array($key, self::ALLOWED_FILTERS, true)) {
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
        return isset($this->filters[$key]);
    }

    /**
     * @param string $key
     * @return mixed
     * @throws Exception
     */
    public function getFilter(string $key)
    {
        if (!$this->hasFilter($key)) {
            throw new Exception(sprintf('Filter "%s" not found', $key));
        }

        return $this->filters[$key];
    }

    /**
     * @return array<string, array{subject: string, wrappers: array<string, array<string, array<string, array<string>>>>}>
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
                ? (array)$this->getFilter('area')
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
                        $listedWrappersKey = hash(
                            'sha256',
                            $position . $pluginClass . implode(',', $methods)
                        );

                        if (in_array($listedWrappersKey, $listedWrappers, true)) {
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
     * @return array<string>
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

        $subjects = array_keys($property->getValue($pluginListReflect));
        sort($subjects);

        if ($this->hasFilter('grep')) {
            $grepFilter = $this->getFilter('grep');
            $subjects = array_filter($subjects, function ($subject) use ($grepFilter) {
                return str_contains($subject, (string)$grepFilter);
            });
        }

        return $subjects;
    }
}
