<?php

namespace Frobou\Show\Helper;

use N98\Magento\Application;

class VendorHelper
{
    private const EXCLUDED_FOLDERS = ['.', '..', '.htaccess'];
    private const MODULE_PATHS = ['app/code', 'vendor'];
    private const MODULE_REGISTRATION_FILE = 'registration.php';
    private const MODULE_CONFIG_FILE = 'etc/module.xml';

    /**
     * @var Application
     */
    private Application $application;

    /**
     * @var array<string>
     */
    private array $moduleFolder = [];

    /**
     * @var array<string>
     */
    private array $otherFolder = [];

    /**
     * VendorHelper constructor.
     * @param Application $application
     */
    public function __construct(Application $application)
    {
        $this->application = $application;
    }

    /**
     * Verifica se um diretório é um módulo Magento
     * @param string $folder Caminho do diretório
     * @return void
     */
    private function isModuleFolder(string $folder): void
    {
        $registrationFile = $folder . DIRECTORY_SEPARATOR . self::MODULE_REGISTRATION_FILE;
        
        if (!file_exists($registrationFile)) {
            $this->scanSubdirectories($folder);
            return;
        }

        $fileContent = file_get_contents($registrationFile);
        $isModule = strpos($fileContent, '::MODULE') !== false;
        
        if ($isModule && file_exists($folder . DIRECTORY_SEPARATOR . self::MODULE_CONFIG_FILE)) {
            $this->moduleFolder[] = $folder;
        } else {
            $this->otherFolder[] = $folder;
        }
    }

    /**
     * Escaneia subdiretórios recursivamente
     * @param string $folder Caminho do diretório
     * @return void
     */
    private function scanSubdirectories(string $folder): void
    {
        if (!is_dir($folder)) {
            return;
        }

        $folders = array_filter(
            scandir($folder),
            fn($item) => !in_array($item, self::EXCLUDED_FOLDERS)
        );

        foreach ($folders as $subFolder) {
            $subFolderPath = $folder . DIRECTORY_SEPARATOR . $subFolder;
            if (is_dir($subFolderPath)) {
                $this->isModuleFolder($subFolderPath);
            }
        }
    }

    /**
     * Retorna todos os módulos encontrados
     * @return array{modules: array<string>, other: array<string>}
     */
    public function getModules(): array
    {
        $this->moduleFolder = [];
        $this->otherFolder = [];

        foreach (self::MODULE_PATHS as $modulePath) {
            $path = $this->application->getMagentoRootFolder() . DIRECTORY_SEPARATOR . $modulePath;
            
            if (!is_dir($path)) {
                continue;
            }

            $this->scanModulePath($path);
        }

        return [
            'modules' => $this->moduleFolder,
            'other' => $this->otherFolder,
        ];
    }

    /**
     * Escaneia um caminho de módulo específico
     * @param string $path Caminho do módulo
     * @return void
     */
    private function scanModulePath(string $path): void
    {
        $folders = array_filter(
            scandir($path),
            fn($item) => !in_array($item, self::EXCLUDED_FOLDERS)
        );

        foreach ($folders as $mainFolder) {
            $subPath = $path . DIRECTORY_SEPARATOR . $mainFolder;
            
            if (!is_dir($subPath)) {
                continue;
            }

            $subFolders = array_filter(
                scandir($subPath),
                fn($item) => !in_array($item, self::EXCLUDED_FOLDERS)
            );

            foreach ($subFolders as $subFolder) {
                $folder = $subPath . DIRECTORY_SEPARATOR . $subFolder;
                $this->isModuleFolder($folder);
            }
        }
    }
}
