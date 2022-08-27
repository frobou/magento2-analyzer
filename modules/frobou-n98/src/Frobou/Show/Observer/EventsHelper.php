<?php


namespace Frobou\Show\Observer;


class EventsHelper
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
    public function getObservers($modulesList)
    {
        $ct = 0;
        $observer = [];
        foreach ($modulesList as $module) {
            foreach ($this->diPaths as $path) {
                $file = $module['path'] . $path . DIRECTORY_SEPARATOR . 'events.xml';
                if (file_exists($file)) {
                    /**
                     * @var SimpleXMLElement xml
                     */
                    $xml = simplexml_load_file($file);
                    foreach ($xml->event as $value) {
                        if ($value->observer) {
                            if (!isset($observer[$module['module']])) {
                                $observer[$module['module']] = [];
                            }
                            $instance = (string)$value->observer->attributes()['instance'];
                            try {
                                $reflectionClass = new \ReflectionClass($instance);
                                $line = $reflectionClass->getMethod('execute')->getStartLine();
                                $filename = $reflectionClass->getFileName();
                                $filename = str_ireplace(
                                    htmlentities($this->_application->getMagentoRootFolder()),
                                    '',
                                    $filename
                                );
                            } catch (\Exception $exception) {
                                //TODO: se der exception é porque é um virtualtype
                                $filename = false;
                                $line = false;
                            }
                            if ($instance) {
                                $ct++;
                                array_push($observer[$module['module']],
                                           [
                                        'active' => $module['active'],
                                        'dispatch' => (string)$value->attributes()['name'],
                                        'observerName' => (string)$value->observer->attributes()['name'],
                                        'observerClass' => $instance,
                                        'line' => $line,
//                                        'disabled' => (bool)$value->plugin->attributes()['disabled'],
                                        'file' => $filename,
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
            'observers' => $observer,
            'totals' => $ct
        ];
    }

}
