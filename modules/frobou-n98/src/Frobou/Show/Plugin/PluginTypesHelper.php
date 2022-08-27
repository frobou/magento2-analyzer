<?php

namespace Frobou\Show\Plugin;

class PluginTypesHelper
{

    public function getTypes($plugins)
    {
        $result = [];
        foreach ($plugins['pluginList'] as $key => $value) {
            foreach ($value as $plugin) {
                if (!isset($result[$key])) {
                    $result[$key] = [];
                }
                array_push($result[$key], $this->getPluginClassMethods($plugin));
            }
        }
        return [
            'plugins' => $result,
            'totals' => $plugins['totals']
        ];
    }

    private function getPluginClassMethods($plugin)
    {
        /* TODO
          Class Magento\AdvancedCheckout\Model\AreProductsSalableForRequestedQty does not exist
        em vendor/magento/module-inventory-advanced-checkout/etc/di.xml
        */
        $types = [];
        $prefix = implode('|', [' after', ' before', ' around']);
        if ($plugin['disabled']) {
            if (!isset($types['disabled'])) {
                $types['disabled'] = [];
            }
            array_push($types['disabled'], $plugin);
        } else {
            $ref_class = new \ReflectionClass($plugin['pluginClass']);
            $methods = $ref_class->getMethods();
            foreach ($methods as $method) {
                preg_match('/' . $prefix . '/', ' ' . $method->getName(), $matches);
                if (isset($matches[0])) {
                    $key = trim($matches[0]);
                    if (!isset($types[$key])) {
                        $types[$key] = [];
                    }
                    array_push($types[$key], [
                        'active' => $plugin['active'],
                        'name' => $method->getName(),
                        'className' => $plugin['pluginClass'],
                        'line' => $method->getStartLine(),
                        'file' => $plugin['pluginFile'],
                        'origin' => $this->getReferenceClassMethods($plugin, $key, $method->getName())
                    ]);
                }
            }
        }
        return $types;
    }

    private function getReferenceClassMethods($plugin, $type, $pluginMethod)
    {
        $methodToFind = lcfirst(str_replace($type, '', $pluginMethod));
        try {
            $ref_class = new \ReflectionClass($plugin['className']);
        } catch (\Exception $e) {
            return [
                'name' => $pluginMethod,
                'className' => $plugin['className'],
                'line' => 0,
                'file' => $plugin['classFile'],
                'error' => 'Base class not found'
            ];
        }
        $methods = $ref_class->getMethods();
        foreach ($methods as $method) {
            if (strtolower($method->getName()) === strtolower($methodToFind)) {
                return [
                    'name' => $method->getName(),
                    'className' => $plugin['className'],
                    'line' => $method->getStartLine(),
                    'file' => $plugin['classFile']
                ];
            }
        }
        return [];
    }

}
