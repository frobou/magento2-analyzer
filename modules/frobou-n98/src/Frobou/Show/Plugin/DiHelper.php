<?php

declare(strict_types=1);

namespace Frobou\Show\Plugin;

use N98\Magento\Application;
use SimpleXMLElement;
use ReflectionClass;
use Exception;

class DiHelper
{

    /**
     * @var Application
     */
    private Application $_application;

    /**
     * @var array<string>
     */
    private array $diPaths = ['etc', 'etc/adminhtml', 'etc/frontend'];

    /**
     * DiHelper constructor.
     * @param Application $application
     */
    public function __construct(Application $application)
    {
        $this->_application = $application;
    }

    /**
     * Obtém os plugins de uma lista de módulos
     * 
     * @param array $modulesList Lista de módulos para analisar
     * @return array{pluginList: array, totals: int} Array contendo os plugins e o total
     */
    public function getPlugins(array $modulesList): array
    {
        $totalPlugins = 0;
        $plugins = [];

        foreach ($modulesList as $module) {
            $modulePlugins = $this->processModulePlugins($module);
            if (!empty($modulePlugins)) {
                $plugins[$module['module']] = $modulePlugins;
                $totalPlugins += count($modulePlugins);
            }
        }

        return [
            'pluginList' => $plugins,
            'totals' => $totalPlugins
        ];
    }

    /**
     * Processa os plugins de um módulo específico
     * 
     * @param array $module Informações do módulo
     * @return array
     */
    private function processModulePlugins(array $module): array
    {
        $modulePlugins = [];

        foreach ($this->diPaths as $path) {
            $file = $module['path'] . $path . DIRECTORY_SEPARATOR . 'di.xml';
            if (!file_exists($file)) {
                continue;
            }

            $xml = $this->loadXmlFile($file);
            if (!$xml) {
                continue;
            }

            foreach ($xml->type as $value) {
                if (!$value->plugin) {
                    continue;
                }

                $pluginData = $this->processPlugin($value, $module, $path);
                if ($pluginData) {
                    $modulePlugins[] = $pluginData;
                }
            }
        }

        return $modulePlugins;
    }

    /**
     * Carrega um arquivo XML
     * 
     * @param string $file Caminho do arquivo
     * @return SimpleXMLElement|null
     */
    private function loadXmlFile(string $file): ?SimpleXMLElement
    {
        try {
            return simplexml_load_file($file);
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Processa um plugin individual
     * 
     * @param SimpleXMLElement $value Elemento XML do plugin
     * @param array $module Informações do módulo
     * @param string $path Caminho do arquivo
     * @return array|null
     */
    private function processPlugin(SimpleXMLElement $value, array $module, string $path): ?array
    {
        $type = (string)$value->plugin->attributes()['type'];
        if (!$type) {
            return null;
        }

        try {
            $classInstance = new ReflectionClass((string)$value->attributes()['name']);
            $pluginInstance = new ReflectionClass($type);
            
            $classFile = $this->normalizeFilePath($classInstance->getFileName());
            $pluginFile = $this->normalizeFilePath($pluginInstance->getFileName());
        } catch (Exception $e) {
            $classFile = false;
            $pluginFile = false;
        }

        return [
            'active' => $module['active'],
            'className' => (string)$value->attributes()['name'],
            'pluginName' => (string)$value->plugin->attributes()['name'],
            'pluginFile' => $pluginFile,
            'pluginClass' => $type,
            'classFile' => $classFile,
            'disabled' => (string)$value->plugin->attributes()['disabled'] === 'true',
            'from' => $path
        ];
    }

    /**
     * Normaliza o caminho do arquivo removendo o diretório raiz do Magento
     * 
     * @param string|false $filePath Caminho do arquivo
     * @return string|false
     */
    private function normalizeFilePath($filePath)
    {
        if (!$filePath) {
            return false;
        }

        return str_ireplace(
            htmlentities($this->_application->getMagentoRootFolder()),
            '',
            $filePath
        );
    }

}
