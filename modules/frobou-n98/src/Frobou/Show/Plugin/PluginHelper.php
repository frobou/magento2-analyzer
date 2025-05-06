<?php

namespace Frobou\Show\Plugin;

use Frobou\Show\Helper\BaseHelper;
use Frobou\Show\Helper\ConfigDotPhpHelper;
use Frobou\Show\Helper\VendorHelper;
use Exception;

class PluginHelper extends BaseHelper
{
    private const MODULE_XML_PATH = 'etc/module.xml';
    private const GUI_FILES = ['ma-observers.json', 'ma-rewrites.json', 'ma-gui-config.json'];

    /**
     * Obtém a lista de plugins do sistema
     *
     * @param bool $includeDisabled Se deve incluir plugins desabilitados
     * @return array|null Lista de plugins encontrados
     * @throws Exception Quando ocorre erro ao processar os plugins
     */
    public function getPlugins(bool $includeDisabled = false): ?array
    {
        try {
            $modulesInConfig = (new ConfigDotPhpHelper($this->getConfig()))->getModules($includeDisabled);
            $moduleList = (new VendorHelper($this->_application))->getModules();
            
            if (empty($moduleList['modules'])) {
                return null;
            }

            $modules = [];
            foreach ($moduleList['modules'] as $value) {
                $moduleData = $this->readModuleXml($value);
                if (!empty($moduleData)) {
                    $modules = array_merge($modules, $moduleData);
                }
            }

            $orderedModules = $this->orderModules($modulesInConfig, $modules);
            $plugins = (new DiHelper($this->_application))->getPlugins($orderedModules);
            
            return (new PluginTypesHelper($this->_application))->getTypes($plugins);
        } catch (Exception $e) {
            throw new Exception("Erro ao obter plugins: " . $e->getMessage(), 0, $e);
        }
    }

    /**
     * Lê o arquivo module.xml de um módulo
     *
     * @param string $data Caminho do módulo
     * @return array|null Dados do módulo
     */
    private function readModuleXml(string $data): ?array
    {
        $basePath = rtrim($data, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;
        $path = $basePath . self::MODULE_XML_PATH;

        if (!file_exists($path)) {
            return null;
        }

        try {
            $xml = simplexml_load_file($path);
            if (!$xml || !isset($xml->module)) {
                return null;
            }

            $name = (string)$xml->module->attributes()['name'];
            if (empty($name)) {
                return null;
            }

            return [
                $name => [
                    'path' => $basePath
                ]
            ];
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Ordena os módulos conforme configuração
     *
     * @param array $modulesInConfig Módulos na configuração
     * @param array $modules Módulos encontrados
     * @return array Módulos ordenados
     */
    private function orderModules(array $modulesInConfig, array $modules): array
    {
        $orderedModules = [];
        foreach ($modulesInConfig as $key => $value) {
            if (isset($modules[$key])) {
                $orderedModules[] = [
                    'module' => $key,
                    'path' => $modules[$key]['path'],
                    'active' => $value['active']
                ];
            }
        }
        return $orderedModules;
    }

    /**
     * Copia os arquivos GUI para o destino especificado
     *
     * @param string $destination Diretório de destino
     * @return void
     * @throws Exception Quando ocorre erro na cópia
     */
    public function doCopy(string $destination): void
    {
        $src = dirname(__FILE__);
        $this->copyFolder(
            $src . '/../../../../../frobou-gui',
            $destination,
            self::GUI_FILES
        );
    }
}
