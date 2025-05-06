<?php

declare(strict_types=1);

namespace Frobou\Show\Helper;

use N98\Magento\Application;
use Exception;
use SimpleXMLElement;

abstract class BaseHelper
{
    /**
     * @var Application
     */
    protected Application $_application;

    /**
     * Define a aplicação Magento
     *
     * @param Application $application
     * @return self
     */
    public function setApplication(Application $application): self
    {
        $this->_application = $application;
        return $this;
    }

    /**
     * Obtém a configuração do Magento
     *
     * @return array
     * @throws Exception
     */
    protected function getConfig(): array
    {
        $configPath = $this->_application->getMagentoRootFolder() . '/app/etc/config.php';
        
        if (!file_exists($configPath)) {
            throw new Exception('Arquivo de configuração não encontrado: ' . $configPath);
        }

        $config = include $configPath;
        
        if (!is_array($config)) {
            throw new Exception('Configuração inválida: arquivo não retornou um array');
        }

        return $config;
    }

    /**
     * Copia uma pasta mantendo arquivos específicos
     *
     * @param string $src Caminho de origem
     * @param string $dst Caminho de destino
     * @param array $mantain Lista de arquivos para manter
     * @return void
     */
    protected function copyFolder(string $src, string $dst, array $mantain): void
    {
        if (!is_dir($src)) {
            throw new Exception("Diretório de origem não existe: {$src}");
        }

        $dir = opendir($src);
        if ($dir === false) {
            throw new Exception("Não foi possível abrir o diretório: {$src}");
        }

        @mkdir($dst, 0755, true);

        while (($file = readdir($dir)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            $srcPath = $src . '/' . $file;
            $dstPath = $dst . '/' . $file;

            if (is_dir($srcPath)) {
                $this->copyFolder($srcPath, $dstPath, $mantain);
                continue;
            }

            $configFile = 'ma-gui-config.json';
            if ($file === $configFile && !file_exists($dstPath)) {
                $key = array_search($configFile, $mantain);
                if ($key !== false) {
                    unset($mantain[$key]);
                }
            }

            if (!in_array($file, $mantain, true)) {
                copy($srcPath, $dstPath);
            }
        }

        closedir($dir);
    }

    /**
     * Obtém a lista de módulos
     *
     * @param bool $includeDisabled Incluir módulos desativados
     * @return array
     */
    protected function getModules(bool $includeDisabled = false): array
    {
        $modulesInConfig = (new ConfigDotPhpHelper($this->getConfig()))->getModules($includeDisabled);
        $moduleList = (new VendorHelper($this->_application))->getModules();
        $modules = [];

        foreach ($moduleList['modules'] as $value) {
            $modules = array_merge($modules, $this->readModuleXml($value));
        }

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
     * Lê o arquivo module.xml de um módulo
     *
     * @param string $data Caminho do módulo
     * @return array
     */
    private function readModuleXml(string $data): array
    {
        $result = [];
        $basePath = $data . DIRECTORY_SEPARATOR;
        $path = $basePath . 'etc/module.xml';

        if (!file_exists($path)) {
            return [];
        }

        try {
            $xml = simplexml_load_file($path);
            if ($xml === false) {
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
            return [];
        }

        return $result;
    }
}
