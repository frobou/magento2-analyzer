<?php

namespace Frobou\Show\Helper;

/**
 * Helper class for handling module configuration
 */
class ConfigDotPhpHelper
{
    /**
     * @var array
     */
    private array $config;

    /**
     * @param array $config Configuration array
     */
    public function __construct(array $config)
    {
        $this->config = $config;
    }

    /**
     * Get list of modules with their status
     * 
     * @param bool $includeDisabled Whether to include disabled modules
     * @return array<string, array{active: int}>
     */
    public function getModules(bool $includeDisabled = false): array
    {
        if (!isset($this->config['modules']) || !is_array($this->config['modules'])) {
            return [];
        }

        $modules = $this->config['modules'];
        $list = [];
        
        foreach ($modules as $key => $value) {
            if ($includeDisabled || $value === 1) {
                $list[$key] = [
                    'active' => $value
                ];
            }
        }
        
        return $list;
    }

    /**
     * Get a specific module by name
     * 
     * @param string $name Module name
     * @param array $list List of modules
     * @return array{active: int}|false
     */
    public function getModule(string $name, array $list)
    {
        return $list[$name] ?? false;
    }

    /**
     * Get list of disabled modules
     * 
     * @return array<string>
     */
    public function getDisabledModules(): array
    {
        if (!isset($this->config['modules']) || !is_array($this->config['modules'])) {
            return [];
        }

        $modules = $this->config['modules'];
        $list = [];
        
        foreach ($modules as $key => $module) {
            if ($module === 0) {
                $list[] = $key;
            }
        }
        
        return $list;
    }
}
