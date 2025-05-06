<?php

declare(strict_types=1);

namespace Frobou\Show\Observer;

use Frobou\Show\Helper\BaseHelper;
use N98\Magento\Application;
use Exception;

class ObserverHelper extends BaseHelper
{
    /**
     * Obtém a lista de observers do Magento
     *
     * @param bool $includeDisabled Incluir observers de módulos desativados
     * @return array{
     *     dispatchs: array,
     *     dispatchs_count: int,
     *     ...mixed
     * }
     * @throws Exception
     */
    public function getObservers(bool $includeDisabled = false): array
    {
        $modulesList = $this->getModules($includeDisabled);
        $eventsHelper = new EventsHelper($this->_application);
        $observersDispatchs = new ObserversDispatchs();
        
        $observers = $eventsHelper->getObservers($modulesList);
        $dispatchs = $observersDispatchs->searchForDispatchs($this->_application->getMagentoRootFolder());
        
        return [
            ...$observers,
            'dispatchs' => $dispatchs,
            'dispatchs_count' => count($dispatchs)
        ];
    }

    /**
     * Copia os arquivos necessários para o destino especificado
     *
     * @param string $destination Caminho de destino
     * @throws Exception
     */
    public function doCopy(string $destination): void
    {
        $src = dirname(__FILE__);
        $this->copyFolder(
            $src . '/../../../../../frobou-gui',
            $destination,
            ['ma-plugins.json', 'ma-rewrites.json', 'ma-gui-config.json']
        );
    }
}
