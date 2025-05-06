<?php

namespace Frobou\Show\Rewrite;

use Frobou\Show\Helper\BaseHelper;
use Frobou\Show\Helper\ConfigDotPhpHelper;
use Frobou\Show\Helper\VendorHelper;
use Exception;
use SimpleXMLElement;

class RewriteHelper extends BaseHelper
{
    /**
     * Obtém os rewrites dos módulos
     *
     * @param bool $includeDisabled Se deve incluir módulos desabilitados
     * @return array|null Array com os rewrites ou null em caso de erro
     * @throws Exception Se houver erro ao processar os módulos
     */
    public function getRewrites(bool $includeDisabled = false): ?array
    {
        try {
            $configHelper = new ConfigDotPhpHelper($this->getConfig());
            $vendorHelper = new VendorHelper($this->_application);
            
            $modulesInConfig = $configHelper->getModules($includeDisabled);
            $moduleList = $vendorHelper->getModules();
            
            if (!isset($moduleList['modules']) || !is_array($moduleList['modules'])) {
                throw new Exception('Lista de módulos inválida');
            }

            $modules = [];
            foreach ($moduleList['modules'] as $value) {
                $moduleData = $this->readModuleXml($value);
                if (!empty($moduleData)) {
                    $modules = array_merge($modules, $moduleData);
                }
            }

            $orderedModules = [];
            foreach ($modulesInConfig as $key => $value) {
                if (!isset($modules[$key])) {
                    continue;
                }
                
                $orderedModules[] = [
                    'module' => $key,
                    'path' => $modules[$key]['path'],
                    'active' => $modulesInConfig[$key]['active']
                ];
            }

            return (new DiHelper($this->_application))->getRewrites($orderedModules);
        } catch (Exception $e) {
            // Log do erro poderia ser adicionado aqui
            throw new Exception('Erro ao obter rewrites: ' . $e->getMessage());
        }
    }

    /**
     * Lê o arquivo module.xml de um módulo
     *
     * @param string $data Caminho do módulo
     * @return array Array com informações do módulo ou array vazio em caso de erro
     */
    private function readModuleXml(string $data): array
    {
        $result = [];
        $basePath = rtrim($data, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;
        $path = $basePath . 'etc/module.xml';

        if (!file_exists($path)) {
            return [];
        }

        try {
            $xml = simplexml_load_file($path);
            if (!$xml instanceof SimpleXMLElement) {
                return [];
            }

            $name = (string)$xml->module->attributes()['name'];
            if (empty($name)) {
                return [];
            }

            $result[$name] = [
                'path' => $basePath
            ];
        } catch (Exception $e) {
            // Log do erro poderia ser adicionado aqui
            return [];
        }

        return $result;
    }

    /**
     * Copia os arquivos do GUI para o destino especificado
     *
     * @param string $destination Caminho de destino
     * @return void
     * @throws Exception Se houver erro ao copiar os arquivos
     */
    public function doCopy(string $destination): void
    {
        $src = dirname(__FILE__);
        $guiPath = $src . '/../../../../../frobou-gui';
        
        if (!is_dir($guiPath)) {
            throw new Exception('Diretório de origem não encontrado: ' . $guiPath);
        }

        $this->copyFolder(
            $guiPath,
            $destination,
            ['ma-observers.json', 'ma-plugins.json', 'ma-gui-config.json']
        );
    }
}
