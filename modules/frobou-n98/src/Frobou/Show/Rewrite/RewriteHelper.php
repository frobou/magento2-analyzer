<?php

namespace Frobou\Show\Rewrite;

use Frobou\Show\Helper\BaseHelper;
use Frobou\Show\Helper\ConfigDotPhpHelper;
use Frobou\Show\Helper\VendorHelper;

class RewriteHelper extends BaseHelper
{

    /**
     * @param false $includeDisabled
     * @param null $moduleName
     * @param null $copyGui
     * @return array|null
     * @throws \Exception
     */
    public function getRewrites($includeDisabled = false)
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
        return (new DiHelper($this->_application))->getRewrites($orderedModules);
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

    public function doCopy($destination)
    {
        $src = dirname(__FILE__);
        $this->copyFolder(
            $src . '/../../../../../frobou-gui',
            $destination,
            ['ma-observer.json', 'ma-plugins.json', 'ma-gui-config.json']
        );
    }

}
