<?php

namespace Frobou\Show\Observer;

use Frobou\Show\Helper\BaseHelper;
use N98\Magento\Application;

class ObserverHelper extends BaseHelper
{

    /**
     * @param false $includeDisabled
     * @param null $moduleName
     * @param null $copyGui
     * @return array|null
     * @throws \Exception
     */
    public function getObservers($includeDisabled = false)
    {
        $modulesList = $this->getModules($includeDisabled);
        $observers = (new EventsHelper($this->_application))->getObservers($modulesList);
        $dispatchs = (new ObserversDispatchs())->searchForDispatchs($this->_application->getMagentoRootFolder());
        $observers['dispatchs'] = $dispatchs;
        $observers['dispatchs_count'] = count($dispatchs);
        return $observers;
    }

    public function doCopy($destination)
    {
        $src = dirname(__FILE__);
        $this->copyFolder(
            $src . '/../../../../../frobou-gui',
            $destination,
            ['ma-plugins.json', 'ma-rewrites.json', 'ma-gui-config.json']
        );
    }

}
