<?php

namespace Frobou\Show\Rewrite;

use N98\Magento\Application;
use SimpleXMLElement;
use ReflectionClass;
use Exception;

class DiHelper
{
    private const DI_PATHS = ['etc', 'etc/adminhtml', 'etc/frontend'];
    private const XML_FILE = 'di.xml';

    /**
     * @var Application
     */
    private $_application;

    /**
     * DiHelper constructor.
     * @param Application $application
     */
    public function __construct(Application $application)
    {
        $this->_application = $application;
    }

    /**
     * Get all rewrites from modules
     * 
     * @param array $modulesList List of modules to check for rewrites
     * @return array{rewrites: array, totals: int} Array containing rewrites and total count
     */
    public function getRewrites(array $modulesList): array
    {
        $totalRewrites = 0;
        $rewrites = [];

        foreach ($modulesList as $module) {
            $moduleRewrites = $this->processModuleRewrites($module);
            if (!empty($moduleRewrites)) {
                $rewrites[$module['module']] = $moduleRewrites;
                $totalRewrites += count($moduleRewrites);
            }
        }

        return [
            'rewrites' => $rewrites,
            'totals' => $totalRewrites
        ];
    }

    /**
     * Process rewrites for a single module
     * 
     * @param array $module Module information
     * @return array
     */
    private function processModuleRewrites(array $module): array
    {
        $moduleRewrites = [];

        foreach (self::DI_PATHS as $path) {
            $xmlFile = $module['path'] . $path . DIRECTORY_SEPARATOR . self::XML_FILE;
            
            if (!file_exists($xmlFile)) {
                continue;
            }

            $xml = $this->loadXmlFile($xmlFile);
            if (!$xml || !$xml->preference) {
                continue;
            }

            foreach ($xml->preference as $preference) {
                $rewrite = $this->processPreference($preference, $module['active'], $path);
                if ($rewrite) {
                    $moduleRewrites[] = $rewrite;
                }
            }
        }

        return $moduleRewrites;
    }

    /**
     * Load XML file safely
     * 
     * @param string $filePath
     * @return SimpleXMLElement|null
     */
    private function loadXmlFile(string $filePath): ?SimpleXMLElement
    {
        try {
            return simplexml_load_file($filePath);
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Process a single preference node
     * 
     * @param SimpleXMLElement $preference
     * @param bool $isActive
     * @param string $path
     * @return array|null
     */
    private function processPreference(SimpleXMLElement $preference, bool $isActive, string $path): ?array
    {
        $for = (string)$preference->attributes()['for'];
        $type = (string)$preference->attributes()['type'];

        try {
            $forInstance = new ReflectionClass($for);
            $typeInstance = new ReflectionClass($type);

            $forClassFile = $this->getRelativePath($forInstance->getFileName());
            $typeClassFile = $this->getRelativePath($typeInstance->getFileName());

            return [
                'active' => $isActive,
                'type' => $forInstance->isInterface() ? 'Interface' : 'Class',
                'forFile' => $forClassFile,
                'typeFile' => $typeClassFile,
                'forClass' => $forInstance->getName(),
                'typeClass' => $typeInstance->getName(),
                'from' => $path
            ];
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Get relative path from Magento root
     * 
     * @param string $absolutePath
     * @return string|false
     */
    private function getRelativePath(string $absolutePath)
    {
        return str_ireplace(
            htmlentities($this->_application->getMagentoRootFolder()),
            '',
            $absolutePath
        );
    }
}
