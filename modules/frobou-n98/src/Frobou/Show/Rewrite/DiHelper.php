<?php

namespace Frobou\Show\Rewrite;

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
    public function getRewrites($modulesList)
    {
        $ct = 0;
        $rewrites = [];
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
                    if ($xml->preference) {
                        if (!isset($rewrites[$module['module']])) {
                            $rewrites[$module['module']] = [];
                        }
                        foreach ($xml->preference as $value) {
                            $for = (string)$value->attributes()['for'];
                            $type = (string)$value->attributes()['type'];
                            try {
                                $forInstance = new \ReflectionClass($for);
                                $forClassFile = $forInstance->getFileName();
                                $forClassFile = str_ireplace(htmlentities($this->_application->getMagentoRootFolder()), '', $forClassFile);

                                $typeInstance = new \ReflectionClass($type);
                                $typeClassFile = $typeInstance->getFileName();
                                $typeClassFile = str_ireplace(htmlentities($this->_application->getMagentoRootFolder()), '', $typeClassFile);
                            } catch (\Exception $exception) {
                                $forClassFile = false;
                                $typeClassFile = false;
                            }
                            $ct++;
                            array_push($rewrites[$module['module']],
                                [
                                    'active' => $module['active'],
                                    'type' => $forInstance->isInterface() ? 'Interface' : 'Class',
                                    'forFile' => $forClassFile,
                                    'typeFile' => $typeClassFile,
                                    'forClass' => $forInstance->getName(),
                                    'typeClass' => $typeInstance->getName(),
                                    'from' => $path
                                ]
                            );
                        }
                    }
                }
            }
        }
        return [
            'rewrites' => $rewrites,
            'totals' => $ct
        ];
    }

}
