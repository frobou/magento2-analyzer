<?php

declare(strict_types=1);

namespace Frobou\Show\Observer;

class ObserversDispatchs
{
    private const EXCLUDED_DIRS = ['.', '..', '.git'];
    private const SEARCH_PATHS = ['vendor/', 'app/code/'];
    private const DISPATCH_PATTERN = '/.+->dispatch\([\n\r]{0,}.{0,1}[\']([\w.]{0,})/mi';

    /**
     * @var array<int, array{file: string, name: string}>
     */
    private array $observers = [];

    /**
     * @var string
     */
    private string $baseFolder;

    /**
     * Procura por dispatches em arquivos PHP
     *
     * @param string $baseFolder Caminho base para busca
     * @return array<int, array{file: string, name: string}>
     */
    public function searchForDispatchs(string $baseFolder): array
    {
        $this->baseFolder = $baseFolder;
        
        foreach (self::SEARCH_PATHS as $path) {
            $this->find($baseFolder . '/' . $path);
        }
        
        return $this->arrange($this->observers);
    }

    /**
     * Busca recursivamente por arquivos PHP
     *
     * @param string $folder Pasta para buscar
     */
    private function find(string $folder): void
    {
        if (!is_dir($folder)) {
            return;
        }

        $files = scandir($folder);
        foreach ($files as $file) {
            if (in_array($file, self::EXCLUDED_DIRS, true)) {
                continue;
            }

            $target = $folder . $file;
            if (is_file($target)) {
                $this->processFile($target);
            } else {
                $this->find($target . '/');
            }
        }
    }

    /**
     * Processa um arquivo PHP em busca de dispatches
     *
     * @param string $file Caminho do arquivo
     */
    private function processFile(string $file): void
    {
        $fileExtension = pathinfo($file)['extension'] ?? '';
        if (strtolower($fileExtension) === 'php' && strpos($file, 'Test.php') === false) {
            $matches = $this->match($file);
            if (!empty($matches)) {
                $this->observers = array_merge($this->observers, $matches);
            }
        }
    }

    /**
     * Procura por padrões de dispatch no arquivo
     *
     * @param string $file Caminho do arquivo
     * @return array<int, array{file: string, name: string}>
     */
    private function match(string $file): array
    {
        $content = file_get_contents($file);
        if ($content === false) {
            return [];
        }

        preg_match_all(self::DISPATCH_PATTERN, $content, $matches, PREG_SET_ORDER);
        $dispatchs = [];
        
        foreach ($matches as $match) {
            $dispatchs[] = [
                'file' => str_ireplace($this->baseFolder, '', $file),
                'name' => $match[1]
            ];
        }

        return $dispatchs;
    }

    /**
     * Organiza os observers encontrados
     *
     * @param array<int, array{file: string, name: string}> $observers
     * @return array<int, array{file: string, name: string}>
     */
    private function arrange(array $observers): array
    {
        $result = [];
        foreach ($observers as $observer) {
            foreach ($observer as $item) {
                $result[] = $item;
            }
        }
        return $result;
    }
}
