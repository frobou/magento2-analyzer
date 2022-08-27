<?php

namespace Frobou\Show\Helper;

use N98\Magento\Application;

class VendorHelper
{

    /**
     * @var Application
     */
    private $_application;

    /**
     * @var string[]
     */
    protected $modulePath = ['app/code', 'vendor'];

    /**
     * @var array
     */
    protected $moduleFolder = [];

    /**
     * @var array
     */
    protected $otherFolder = [];

    /**
     * VendorHelper constructor.
     * @param Application $application
     */
    public function __construct($application)
    {
        $this->_application = $application;
    }

    /**
     * @param $folder
     */
    private function isModuleFolder($folder)
    {
        $target = $folder . DIRECTORY_SEPARATOR . 'registration.php';
        if (file_exists($target)) {
            $fileContent = file_get_contents($target);
            $isModule = preg_match('/::MODULE/', $fileContent);
            if ($isModule && file_exists($folder . '/etc/module.xml')) {
                array_push($this->moduleFolder, $folder);
            } else {
                array_push($this->otherFolder, $folder);
            }
        } else {
            if (is_dir($folder)) {
                $allFolders = scandir($folder);
                $mainFolders = array_filter(array_map([$this, 'clearFolders'], $allFolders));
                foreach ($mainFolders as $mainFolder) {
                    if (is_dir($folder.DIRECTORY_SEPARATOR.$mainFolder)) {
                        $this->isModuleFolder($folder.DIRECTORY_SEPARATOR.$mainFolder);
                    }
                }
            }
        }
    }

    /**
     * @return array
     */
    public function getModules()
    {
        foreach ($this->modulePath as $modulePath) {
            $path = $this->_application->getMagentoRootFolder() . '/' . $modulePath;
            if (is_dir($path)) {
                $allFolders = scandir($path);
                $mainFolders = array_filter(array_map([$this, 'clearFolders'], $allFolders));
                foreach ($mainFolders as $mainFolder) {
                    $subPath = $path . DIRECTORY_SEPARATOR . $mainFolder;
                    if (is_dir($subPath)) {
                        $allSubFolders = scandir($subPath);
                        $subFolders = array_filter(array_map([$this, 'clearFolders'], $allSubFolders));
                        foreach ($subFolders as $subFolder) {
                            $folder = $subPath . DIRECTORY_SEPARATOR . $subFolder;
                            $this->isModuleFolder($folder);
                        }
                    }
                }
            }
        }
        return [
            'modules' => $this->moduleFolder,
            'other' => $this->otherFolder,
        ];
    }

    /**
     * @param $path
     * @return mixed|null
     */
    private function clearFolders($path)
    {
        return !in_array($path, ['.', '..', '.htaccess']) ? $path : null;
    }

}
