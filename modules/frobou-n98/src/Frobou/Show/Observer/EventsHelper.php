<?php

namespace Frobou\Show\Observer;

use N98\Magento\Application;
use SimpleXMLElement;
use ReflectionClass;
use Exception;

class EventsHelper
{
    /**
     * @var Application
     */
    private Application $application;

    /**
     * @var array<string>
     */
    private array $diPaths = ['etc', 'etc/adminhtml', 'etc/frontend'];

    /**
     * EventsHelper constructor.
     * @param Application $application
     */
    public function __construct(Application $application)
    {
        $this->application = $application;
    }

    /**
     * Obtém os observadores de uma lista de módulos
     * 
     * @param array $modulesList Lista de módulos para analisar
     * @return array{observers: array, totals: int} Array contendo os observadores e o total
     */
    public function getObservers(array $modulesList): array
    {
        $totalObservers = 0;
        $observers = [];

        foreach ($modulesList as $module) {
            $moduleObservers = $this->processModuleObservers($module);
            if (!empty($moduleObservers)) {
                $observers[$module['module']] = $moduleObservers;
                $totalObservers += count($moduleObservers);
            }
        }

        return [
            'observers' => $observers,
            'totals' => $totalObservers
        ];
    }

    /**
     * Processa os observadores de um módulo específico
     * 
     * @param array $module Informações do módulo
     * @return array
     */
    private function processModuleObservers(array $module): array
    {
        $moduleObservers = [];

        foreach ($this->diPaths as $path) {
            $file = $module['path'] . $path . DIRECTORY_SEPARATOR . 'events.xml';
            if (!file_exists($file)) {
                continue;
            }

            $xml = $this->loadXmlFile($file);
            if (!$xml) {
                continue;
            }

            foreach ($xml->event as $event) {
                if (!$event->observer) {
                    continue;
                }

                $observerData = $this->processObserver($event, $module, $path);
                if ($observerData) {
                    $moduleObservers[] = $observerData;
                }
            }
        }

        return $moduleObservers;
    }

    /**
     * Carrega um arquivo XML
     * 
     * @param string $file Caminho do arquivo
     * @return SimpleXMLElement|null
     */
    private function loadXmlFile(string $file): ?SimpleXMLElement
    {
        try {
            return simplexml_load_file($file);
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Processa um observador individual
     * 
     * @param SimpleXMLElement $event Elemento XML do evento
     * @param array $module Informações do módulo
     * @param string $path Caminho do arquivo
     * @return array|null
     */
    private function processObserver(SimpleXMLElement $event, array $module, string $path): ?array
    {
        $instance = (string)$event->observer->attributes()['instance'];
        if (!$instance) {
            return null;
        }

        try {
            $reflectionClass = new ReflectionClass($instance);
            $line = $reflectionClass->getMethod('execute')->getStartLine();
            $filename = $this->normalizeFilePath($reflectionClass->getFileName());
        } catch (Exception $e) {
            // VirtualType ou classe não encontrada
            $filename = false;
            $line = false;
        }

        return [
            'active' => $module['active'],
            'dispatch' => (string)$event->attributes()['name'],
            'observerName' => (string)$event->observer->attributes()['name'],
            'observerClass' => $instance,
            'line' => $line,
            'file' => $filename,
            'from' => $path
        ];
    }

    /**
     * Normaliza o caminho do arquivo removendo o diretório raiz do Magento
     * 
     * @param string|false $filePath Caminho do arquivo
     * @return string|false
     */
    private function normalizeFilePath($filePath)
    {
        if (!$filePath) {
            return false;
        }

        return str_ireplace(
            htmlentities($this->application->getMagentoRootFolder()),
            '',
            $filePath
        );
    }
}
