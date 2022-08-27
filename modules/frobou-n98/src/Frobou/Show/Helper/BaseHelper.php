<?php

namespace Frobou\Show\Helper;

use N98\Magento\Application;

abstract class BaseHelper
{

    /**
     * @var Application
     */
    protected $_application;

    /**
     * @param Application $_application
     * @return $this
     */
    public function setApplication(Application $application)
    {
        $this->_application = $application;
        return $this;
    }

    /**
     * @return mixed
     * @throws \Exception
     */
    protected function getConfig()
    {
        $config = include $this->_application->getMagentoRootFolder() . '/app/etc/config.php';
        if (!$config) {
            throw new \Exception('erro');
        }
        return $config;
    }

    /**
     * @param $src
     * @param $dst
     */
    protected function copyFolder($src, $dst, $mantain)
    {
        $dir = opendir($src);
        @mkdir($dst);
        while (false !== ($file = readdir($dir))) {
            if (($file != '.') && ($file != '..')) {
                if (is_dir($src . '/' . $file)) {
                    $this->copyFolder($src . '/' . $file, $dst . '/' . $file, $mantain);
                } else {
                    $configFile = 'ma-gui-config.json';
                    if ($file === $configFile && !file_exists($dst . '/' . $file)) {
                        unset($mantain[array_search('ma-gui-config.json', $mantain)]);
                    }
                    if (!in_array($file, $mantain)) {
                        copy($src . '/' . $file, $dst . '/' . $file);
                    }
                }
            }
        }
        closedir($dir);
    }

    protected function getModules($includeDisabled = false)
    {
        $modulesInConfig = (new ConfigDotPhpHelper($this->getConfig()))->getModules($includeDisabled);
        $moduleList = (new VendorHelper($this->_application))->getModules();
        $modules = [];
        foreach ($moduleList['modules'] as $value) {
            $modules = array_merge($modules, $this->readModuleXml($value));
        }
        $orderedModules = [];
        foreach ($modulesInConfig as $key => $value) {
            $orderedModules[] = [
                'module' => $key,
                'path' => $modules[$key]['path'],
                'active' => $modulesInConfig[$key]['active']
            ];
        }
        return $orderedModules;
    }

    /**
     * @param $data
     * @return array|null
     */
    private function readModuleXml($data)
    {
        $result = [];
        $basePath = $data . DIRECTORY_SEPARATOR;
        $path = $basePath . 'etc/module.xml';
        $name = null;
        try {
            $name = (string)simplexml_load_file($path)->module->attributes()['name'];
        } catch (\Exception $e) {
            return [];
        }
        if (!$name) {
            // TODO: retornar alguma coisa de util
            return null;
        }
        $result[$name] = [
            'path' => $basePath
        ];
        return $result;
    }

}
