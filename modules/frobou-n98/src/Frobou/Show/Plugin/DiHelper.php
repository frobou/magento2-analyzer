<?php

namespace Frobou\Show\Plugin;

use N98\Magento\Application;
use SimpleXMLElement;

class DiHelper
{

    /**
     * @var Application
     */
    private $_application;

    /**
     * @var string[]
     */
    private $diPaths = ['etc', 'etc/adminhtml', 'etc/frontend'];

    /**
     * DiHelper constructor.
     * @param Application $application
     */
    public function __construct($application)
    {
        $this->_application = $application;
    }


    /**
     * @param $modulesList
     * @return array
     */
    public function getPlugins($modulesList)
    {
        $ct = 0;
        $plugins = [];
        foreach ($modulesList as $module) {
            foreach ($this->diPaths as $path) {
                $file = $module['path'] . $path . DIRECTORY_SEPARATOR . 'di.xml';
                if (file_exists($file)) {
                    /**
                     * @var SimpleXMLElement xml
                     */
                    $xml = simplexml_load_file($file);
                    // TODO: validar se precisa de virtualtype
/*                    $virtualTypes = [];
                    foreach ($xml->xpath('virtualType') as $virtual) {
                        if ($virtual->attributes()['type']) {
                            var_dump($virtual->attributes()['type']);
                        }
                    }*/
                    foreach ($xml->type as $value) {
                        if ($value->plugin) {
                            if (!isset($plugins[$module['module']])) {
                                $plugins[$module['module']] = [];
                            }
                            /*
                             * isso foi encontrado em vendor/magento/module-backend/etc/adminhtml/di.xml
                                <type name="Magento\Framework\App\Action\Action">
                                    <plugin name="storeCheck" disabled="true" />
                                </type>
                             */
                            $type = (string)$value->plugin->attributes()['type'];
                            try {
                                $classInstance = new \ReflectionClass((string)$value->attributes()['name']);
                                $pluginInstance = new \ReflectionClass($type);
                                $classFile = $classInstance->getFileName();
                                $classFile = str_ireplace(htmlentities($this->_application->getMagentoRootFolder()), '', $classFile);
                                $pluginFile = $pluginInstance->getFileName();
                                $pluginFile = str_ireplace(htmlentities($this->_application->getMagentoRootFolder()), '', $pluginFile);
                            } catch (\Exception $exception) {
                                $classFile = false;
                                $pluginFile = false;
                            }
                            if ($type) {
                                $ct++;
                                array_push($plugins[$module['module']],
                                    [
                                        'active' => $module['active'],
                                        'className' => (string)$value->attributes()['name'],
                                        'pluginName' => (string)$value->plugin->attributes()['name'],
                                        'pluginFile' => $pluginFile,
                                        'pluginClass' => $type,
                                        'classFile' => $classFile,
                                        'disabled' => (string)$value->plugin->attributes()['disabled'] === 'true',
                                        'from' => $path
                                    ]
                                );
                            }
                        }
                    }
                }
            }
        }
        return [
            'pluginList' => $plugins,
            'totals' => $ct
        ];
    }

}
