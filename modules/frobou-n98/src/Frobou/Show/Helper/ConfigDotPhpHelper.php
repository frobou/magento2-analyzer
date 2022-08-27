<?php

namespace Frobou\Show\Helper;

class ConfigDotPhpHelper
{

    private $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    public function getModules($includeDisabled = false)
    {
        $modules = $this->config['modules'];

        $list = [];
        foreach ($modules as $key => $value) {
            if ($includeDisabled || $value === 1) {
                $list[$key] = [
                    'active' => $value
                ];
/*                $module = new \stdClass();
                $module->name = $key;
                $module->active = $value;
                $list[] = $module;*/
            }
        }
        return $list;
    }

    public function getModule($name, $list) {
        $module = array_filter($list, function ($value) use ($name) {
            return $value->name === $name;
        });
        return count($module) === 1 ? array_values($module)[0] : false;
    }

    public function getDisabledModules()
    {
        $modules = $this->getConfig()['modules'];
        $list = [];
        foreach ($modules as $key => $module) {
            if ($module === 0) {
                $list[] = $key;
            }
        }
        return $list;
    }

}
