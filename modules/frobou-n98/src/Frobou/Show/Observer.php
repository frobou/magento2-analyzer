<?php

declare(strict_types=1);

namespace Frobou\Show;

use Frobou\Show\Observer\ObserverHelper;
use Magento\Framework\Console\Cli;
use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Observer List Command
 *
 * Este comando lista todos os observers do Magento 2, permitindo filtrar por módulo
 * e outros critérios como dispatch, nome do observer e classe.
 * 
 * Exemplos de uso:
 * - Listar todos os observers: frobou:show:observer
 * - Filtrar por módulo: frobou:show:observer Magento_Catalog
 * - Filtrar com padrão: frobou:show:observer "{{Magento:Model:Block}}"
 * - Incluir desabilitados: frobou:show:observer -i
 * - Copiar GUI: frobou:show:observer -g
 */
class Observer extends AbstractMagentoCommand
{
    // Constantes para argumentos e opções
    private const NAME_SPACE = 'module-name|filter-pattern';
    private const INCLUDE_OPTION = 'include-disabled';
    private const COPY_OPTION = 'copy-gui';
    
    // Constantes para caminhos e arquivos
    private const GUI_ASSETS_PATH = 'pub/gui';
    private const OBSERVERS_JSON_FILE = 'assets/ma-observers.json';
    private const MULTI_PATTERN_PREFIX = '{{';

    private ObserverHelper $observerHelper;

    /**
     * Configura o comando com suas opções e argumentos
     *
     * @return void
     */
    protected function configure(): void
    {
        $this
            ->setName('frobou:show:observer')
            ->setDescription('Lista os observers do Magento 2')
            ->setDefinition([
                new InputArgument(
                    self::NAME_SPACE,
                    InputArgument::OPTIONAL,
                    'Nome do módulo ou padrão de filtro (ex: {{Magento:Model:Block}})',
                    null
                ),
                new InputOption(
                    self::INCLUDE_OPTION,
                    '-i',
                    InputOption::VALUE_NONE,
                    'Incluir módulos desabilitados na listagem'
                ),
                new InputOption(
                    self::COPY_OPTION,
                    '-g',
                    InputOption::VALUE_NONE,
                    'Copiar interface gráfica para /pub'
                )
            ]);
    }

    /**
     * Injeta as dependências necessárias
     *
     * @param ObserverHelper $observerHelper Helper para manipulação de observers
     * @return void
     */
    public function inject(ObserverHelper $observerHelper): void
    {
        $this->observerHelper = $observerHelper->setApplication($this->getApplication());
    }

    /**
     * Executa o comando
     *
     * @param InputInterface $input Interface de entrada
     * @param OutputInterface $output Interface de saída
     * @return int Código de retorno
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        try {
            if (!$this->initializeMagento($output)) {
                return Cli::RETURN_FAILURE;
            }

            $this->validateInput($input);
            $observerList = $this->getFilteredObserverList($input);
            
            if ($input->getOption(self::COPY_OPTION)) {
                $this->copyGuiAssets($observerList);
            }

            $this->createOutput($observerList, $output);
            return Cli::RETURN_SUCCESS;
        } catch (\InvalidArgumentException $e) {
            $output->writeln(sprintf('<error>Erro de validação: %s</error>', $e->getMessage()));
            return Cli::RETURN_FAILURE;
        } catch (\Exception $e) {
            $output->writeln(sprintf('<error>Erro inesperado: %s</error>', $e->getMessage()));
            return Cli::RETURN_FAILURE;
        }
    }

    /**
     * Valida os parâmetros de entrada
     *
     * @param InputInterface $input Interface de entrada
     * @throws \InvalidArgumentException
     */
    private function validateInput(InputInterface $input): void
    {
        $moduleName = $input->getArgument(self::NAME_SPACE);
        if ($moduleName && !$this->isValidModuleName($moduleName)) {
            throw new \InvalidArgumentException(
                'Nome do módulo inválido. Use um nome de módulo válido ou um padrão no formato {{module:dispatch:observer}}'
            );
        }
    }

    /**
     * Verifica se o nome do módulo é válido
     *
     * @param string $moduleName Nome do módulo ou padrão
     * @return bool
     */
    private function isValidModuleName(string $moduleName): bool
    {
        if (substr($moduleName, 0, 2) === self::MULTI_PATTERN_PREFIX) {
            return $this->isValidMultiPattern($moduleName);
        }
        return true; // Aceita qualquer string para busca por regex
    }

    /**
     * Verifica se o padrão múltiplo é válido
     *
     * @param string $pattern Padrão a ser validado
     * @return bool
     */
    private function isValidMultiPattern(string $pattern): bool
    {
        // Aceita padrões como {{mod:disp:obs}}, mesmo que algum campo esteja vazio
        $criteria = explode(':', substr($pattern, 2));
        return count($criteria) >= 1 && count($criteria) <= 3;
    }

    /**
     * Inicializa o ambiente Magento
     *
     * @param OutputInterface $output Interface de saída
     * @return bool
     */
    private function initializeMagento(OutputInterface $output): bool
    {
        try {
            $this->detectMagento($output);
            if (!$this->initMagento()) {
                $output->writeln('<error>Execute o comando no diretório do Magento</error>');
                return false;
            }
            return true;
        } catch (\Exception $e) {
            $output->writeln(sprintf('<error>Erro ao inicializar Magento: %s</error>', $e->getMessage()));
            return false;
        }
    }

    /**
     * Obtém a lista de observers filtrada conforme os parâmetros de entrada
     *
     * @param InputInterface $input Interface de entrada
     * @return array
     * @throws \Exception
     */
    private function getFilteredObserverList(InputInterface $input): array
    {
        $observerList = $this->observerHelper->getObservers($input->getOption(self::INCLUDE_OPTION));
        $moduleName = $input->getArgument(self::NAME_SPACE);

        if (!$moduleName) {
            return $observerList;
        }

        return $this->filterObserverList($moduleName, $observerList);
    }

    /**
     * Filtra a lista de observers com base no nome do módulo ou padrão
     *
     * @param string $moduleName Nome do módulo ou padrão de filtro
     * @param array $observerList Lista completa de observers
     * @return array Lista filtrada
     * @throws \Exception
     */
    private function filterObserverList(string $moduleName, array $observerList): array
    {
        if (substr($moduleName, 0, 2) === self::MULTI_PATTERN_PREFIX) {
            return $this->filterByMultiPattern($moduleName, $observerList);
        }

        return $this->filterByModuleName($moduleName, $observerList);
    }

    /**
     * Filtra observers por nome do módulo usando expressão regular
     *
     * @param string $moduleName Nome do módulo ou padrão regex
     * @param array $observerList Lista de observers
     * @return array
     * @throws \Exception
     */
    private function filterByModuleName(string $moduleName, array $observerList): array
    {
        $moduleList = [];
        $totals = 0;
        
        foreach ($observerList['observers'] as $key => $observers) {
            if (preg_match("/$moduleName/i", $key) && !empty($observers)) {
                $moduleList[$key] = $observers;
                $totals++;
            }
        }

        if (empty($moduleList)) {
            throw new \Exception(sprintf('Módulo ou regex pattern não encontrado: %s', $moduleName));
        }

        return [
            'observers' => $moduleList,
            'totals' => $totals
        ];
    }

    /**
     * Filtra observers usando múltiplos critérios
     *
     * @param string $pattern Padrão de filtro no formato {{module:dispatch:observer}}
     * @param array $observerList Lista de observers
     * @return array Lista filtrada
     * @throws \Exception
     */
    private function filterByMultiPattern(string $pattern, array $observerList): array
    {
        $criteria = explode(':', substr($pattern, 2));
        if ((empty($criteria[0]) && empty($criteria[1]) && empty($criteria[2]))) {
            // Nenhum filtro, retorna todos
            return [
                'observers' => $observerList['observers'],
                'totals' => $this->countTotalObservers($observerList['observers'])
            ];
        }
        $list = $this->filterByModule($criteria[0] ?? '', $observerList['observers']);
        $list = $this->filterByDispatch($criteria[1] ?? '', $list);
        $list = $this->filterByObserver($criteria[2] ?? '', $list);

        if (empty($list)) {
            throw new \Exception(sprintf('Nenhum observer encontrado para o padrão: %s', $pattern));
        }

        return [
            'observers' => $list,
            'totals' => $this->countTotalObservers($list)
        ];
    }

    /**
     * Filtra observers por módulo
     *
     * @param string $modulePattern Padrão do nome do módulo
     * @param array $observers Lista de observers
     * @return array
     */
    private function filterByModule(string $modulePattern, array $observers): array
    {
        if (empty($modulePattern)) {
            return $observers;
        }

        return array_filter(
            $observers,
            fn($key) => (bool)preg_match("/$modulePattern/i", $key),
            ARRAY_FILTER_USE_KEY
        );
    }

    /**
     * Filtra observers por dispatch
     *
     * @param string $pattern Padrão do nome do dispatch
     * @param array $observers Lista de observers
     * @return array
     */
    private function filterByDispatch(string $pattern, array $observers): array
    {
        return $this->searchInObservers($pattern, $observers, 'dispatch');
    }

    /**
     * Filtra observers por nome do observer
     *
     * @param string $pattern Padrão do nome do observer
     * @param array $observers Lista de observers
     * @return array
     */
    private function filterByObserver(string $pattern, array $observers): array
    {
        return $this->searchInObservers($pattern, $observers, 'observerName');
    }

    /**
     * Busca um padrão nos observers
     *
     * @param string $pattern Padrão a ser buscado
     * @param array $observers Lista de observers
     * @param string $field Campo a ser buscado
     * @return array
     */
    private function searchInObservers(string $pattern, array $observers, string $field): array
    {
        if (empty($pattern)) {
            return $observers;
        }

        $filtered = [];
        foreach ($observers as $key => $value) {
            $matching = array_filter(
                $value,
                fn($observer) => (bool)preg_match("/$pattern/i", $observer[$field])
            );
            if (!empty($matching)) {
                $filtered[$key] = array_values($matching);
            }
        }

        return $filtered;
    }

    /**
     * Conta o número total de observers em uma lista
     *
     * @param array $observers Lista de observers
     * @return int
     */
    private function countTotalObservers(array $observers): int
    {
        return array_sum(array_map('count', $observers));
    }

    /**
     * Copia os assets da interface gráfica
     *
     * @param array $observerList Lista de observers
     * @return void
     */
    private function copyGuiAssets(array $observerList): void
    {
        $destination = $this->getApplication()->getMagentoRootFolder() . 
            DIRECTORY_SEPARATOR . self::GUI_ASSETS_PATH;
        
        $this->observerHelper->doCopy($destination);
        
        $jsonPath = $destination . DIRECTORY_SEPARATOR . self::OBSERVERS_JSON_FILE;
        file_put_contents($jsonPath, json_encode($observerList));
    }

    /**
     * Gera a saída formatada dos observers encontrados
     *
     * @param array $observerList Lista de observers
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function createOutput(array $observerList, OutputInterface $output): void
    {
        $this->outputHeader($output);
        
        $totalObservers = 0;
        foreach ($observerList['observers'] as $moduleName => $observers) {
            $this->outputModuleSection($moduleName, $observers, $output, $totalObservers);
        }
        
        $this->outputFooter($observerList, $totalObservers, $output);
    }

    /**
     * Exibe o cabeçalho da saída
     *
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputHeader(OutputInterface $output): void
    {
        $output->writeln([
            '',
            sprintf('<fg=cyan>┌%s┐</>', str_repeat('─', 78)),
            sprintf('<fg=cyan>│</><fg=green> %-76s</><fg=cyan>│</>', 'Listagem de Observers'),
            sprintf('<fg=cyan>└%s┘</>', str_repeat('─', 78)),
            ''
        ]);
    }

    /**
     * Exibe a seção de um módulo
     *
     * @param string $moduleName Nome do módulo
     * @param array $observers Lista de observers do módulo
     * @param OutputInterface $output Interface de saída
     * @param int &$totalObservers Contador total de observers
     * @return void
     */
    private function outputModuleSection(string $moduleName, array $observers, OutputInterface $output, int &$totalObservers): void
    {
        $output->writeln([
            '',
            sprintf('<fg=yellow>Módulo: %s</>', $moduleName),
            ''
        ]);
        foreach ($observers as $observer) {
            $totalObservers++;
            $this->outputObserverInfo($observer, $output);
            $output->writeln(['']); // Linha em branco entre observers
        }
        $output->writeln([
            str_repeat('-', 60),
            ''
        ]);
    }

    /**
     * Exibe o rodapé da saída
     *
     * @param array $observerList Lista de observers
     * @param int $totalObservers Total de observers
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputFooter(array $observerList, int $totalObservers, OutputInterface $output): void
    {
        $totalModules = count($observerList['observers']);
        $output->writeln([
            '',
            sprintf('<fg=cyan>┌%s┐</>', str_repeat('─', 78)),
            sprintf('<fg=cyan>│</><fg=green> %-76s</><fg=cyan>│</>', sprintf('Total: %d módulo(s) com %d observer(s)', $totalModules, $totalObservers)),
            sprintf('<fg=cyan>└%s┘</>', str_repeat('─', 78)),
            ''
        ]);
    }

    /**
     * Exibe informações detalhadas de um observer
     *
     * @param array $observer Informações do observer
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputObserverInfo(array $observer, OutputInterface $output): void
    {
        $status = $observer['active'] ? '<info>Ativo</info>' : '<comment>Inativo</comment>';
        $output->writeln([
            sprintf('Dispatch: %s', $observer['dispatch']),
            sprintf('Observer: %s', $observer['observerName']),
            sprintf('Classe:   %s', $observer['observerClass']),
            sprintf('Arquivo:  %s', $observer['file'] ?: 'N/A'),
            sprintf('Linha:    %s', $observer['line'] ?: '0'),
            sprintf('Status:   %s', $status),
        ]);
    }
}
