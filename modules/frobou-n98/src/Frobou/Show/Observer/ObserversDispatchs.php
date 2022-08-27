<?php


namespace Frobou\Show\Observer;


class ObserversDispatchs
{

    private $observers = [];
    private $baseFolder;

    public function searchForDispatchs($baseFolder)
    {
        $this->baseFolder = $baseFolder;
//        foreach ($baseFolder as $value) {
//            $this->find($value['path'], $value['module']);
//        }
        foreach (['vendor/', 'app/code/'] as $value) {
            $this->find($baseFolder . '/' . $value);
        }
        return $this->arrange($this->observers);
    }

    private function find($folder, $module = '')
    {
        $files = scandir($folder);
        foreach ($files as $file) {
            if (in_array($file, ['.', '..', '.git'])) {
                continue;
            }
            $target = $folder . $file;
            if (is_file($target)) {
                $fileExtension = pathinfo($target)['extension'] ?? '';
                if (strtolower($fileExtension) === 'php' && strpos($target, 'Test.php') === false) {
                    $match = $this->match($target);
                    if (!empty($match)) {
//                        $this->observers[] = [$module, $match];
                        $this->observers[] = $match;
                    }
                }
            } else {
                $this->find($target . '/', $module);
            }
        }
    }

    private function match($file)
    {
        $pattern = '/.+->dispatch\([\n\r]{0,}.{0,1}[\']([\w.]{0,})/mi';
        preg_match_all($pattern, file_get_contents($file), $matches, PREG_SET_ORDER);
        $dispatchs = [];
        if (!empty($matches)) {
            foreach ($matches as $match) {
                $dispatchs[] = ['file' => str_ireplace($this->baseFolder, '', $file), 'name' => $match[1]];
            }
        }
        return $dispatchs;
    }

    private function arrange(array $observers)
    {
        $observer = [];
//        foreach ($observers as $observ) {
//            $values = [];
//            foreach ($observ[1] as $item) {
//                $values[$observ[0]][] = $item;
//            }
//            $observer[] = $values;
//        }
        foreach ($observers as $observ) {
            foreach ($observ as $item) {
                $observer[] = $item;
            }
        }
        return $observer;
    }

}
