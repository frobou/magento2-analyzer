<?php

namespace Frobou\Show\Plugin;

use ReflectionClass;
use ReflectionMethod;
use Exception;

class PluginTypesHelper
{
    private const PLUGIN_METHOD_PREFIXES = ['after', 'before', 'around'];

    /**
     * Processa e retorna os tipos de plugins
     *
     * @param array $plugins Lista de plugins para processar
     * @return array Array contendo plugins processados e totais
     */
    public function getTypes(array $plugins): array
    {
        $result = [];
        foreach ($plugins['pluginList'] as $key => $value) {
            foreach ($value as $plugin) {
                if (!isset($result[$key])) {
                    $result[$key] = [];
                }
                $result[$key][] = $this->getPluginClassMethods($plugin);
            }
        }
        return [
            'plugins' => $result,
            'totals' => $plugins['totals']
        ];
    }

    /**
     * Obtém os métodos de uma classe de plugin
     *
     * @param array $plugin Dados do plugin
     * @return array Métodos do plugin organizados por tipo
     */
    private function getPluginClassMethods(array $plugin): array
    {
        $types = [];
        
        if ($plugin['disabled']) {
            $types['disabled'] = [$plugin];
            return $types;
        }

        try {
            $refClass = new ReflectionClass($plugin['pluginClass']);
            $methods = $refClass->getMethods();
            
            foreach ($methods as $method) {
                $methodName = $method->getName();
                $prefix = $this->findPluginMethodPrefix($methodName);
                
                if ($prefix) {
                    $types[$prefix][] = $this->createPluginMethodInfo($plugin, $method);
                }
            }
        } catch (Exception $e) {
            $types['error'] = [
                'message' => "Erro ao processar plugin {$plugin['pluginClass']}: " . $e->getMessage(),
                'plugin' => $plugin
            ];
        }

        return $types;
    }

    /**
     * Encontra o prefixo do método do plugin
     *
     * @param string $methodName Nome do método
     * @return string|null Prefixo encontrado ou null
     */
    private function findPluginMethodPrefix(string $methodName): ?string
    {
        foreach (self::PLUGIN_METHOD_PREFIXES as $prefix) {
            if (stripos($methodName, $prefix) === 0) {
                return $prefix;
            }
        }
        return null;
    }

    /**
     * Cria informações do método do plugin
     *
     * @param array $plugin Dados do plugin
     * @param ReflectionMethod $method Método refletido
     * @return array Informações do método
     */
    private function createPluginMethodInfo(array $plugin, ReflectionMethod $method): array
    {
        return [
            'active' => $plugin['active'],
            'name' => $method->getName(),
            'className' => $plugin['pluginClass'],
            'line' => $method->getStartLine(),
            'file' => $plugin['pluginFile'],
            'origin' => $this->getReferenceClassMethods($plugin, $method->getName())
        ];
    }

    /**
     * Obtém os métodos da classe de referência
     *
     * @param array $plugin Dados do plugin
     * @param string $pluginMethod Nome do método do plugin
     * @return array Informações do método de referência
     */
    private function getReferenceClassMethods(array $plugin, string $pluginMethod): array
    {
        $methodToFind = $this->extractOriginalMethodName($pluginMethod);
        
        try {
            $refClass = new ReflectionClass($plugin['className']);
            $methods = $refClass->getMethods();
            
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
        } catch (Exception $e) {
            return [
                'name' => $pluginMethod,
                'className' => $plugin['className'],
                'line' => 0,
                'file' => $plugin['classFile'],
                'error' => 'Classe base não encontrada: ' . $e->getMessage()
            ];
        }

        return [];
    }

    /**
     * Extrai o nome original do método do nome do método do plugin
     *
     * @param string $pluginMethod Nome do método do plugin
     * @return string Nome original do método
     */
    private function extractOriginalMethodName(string $pluginMethod): string
    {
        foreach (self::PLUGIN_METHOD_PREFIXES as $prefix) {
            if (stripos($pluginMethod, $prefix) === 0) {
                return lcfirst(substr($pluginMethod, strlen($prefix)));
            }
        }
        return $pluginMethod;
    }
}
