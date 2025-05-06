<?php

declare(strict_types=1);

namespace Frobou\Show;

use Frobou\Show\Rewrite\RewriteHelper;
use Magento\Framework\Console\Cli;
use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Rewrite List Command
 *
 * Este comando lista todos os rewrites do Magento 2, permitindo filtrar por módulo
 * e outros critérios como classe base e classe que faz o rewrite.
 * 
 * Exemplos de uso:
 * - Listar todos os rewrites: frobou:show:rewrite
 * - Filtrar por módulo: frobou:show:rewrite Magento_Catalog
 * - Filtrar com padrão: frobou:show:rewrite "{{Magento:Model:Block}}"
 * - Incluir desabilitados: frobou:show:rewrite -i
 * - Copiar GUI: frobou:show:rewrite -g
 */
class Rewrite extends AbstractMagentoCommand
{
    // Constantes para argumentos e opções
    private const NAME_SPACE = 'module-name|filter-pattern';
    private const INCLUDE_OPTION = 'include-disabled';
    private const COPY_OPTION = 'copy-gui';
    
    // Constantes para caminhos e arquivos
    private const GUI_ASSETS_PATH = 'pub/gui';
    private const REWRITES_JSON_FILE = 'assets/ma-rewrites.json';
    private const MULTI_PATTERN_PREFIX = '{{';

    private RewriteHelper $rewriteHelper;

    /**
     * Configura o comando com suas opções e argumentos
     *
     * @return void
     */
    protected function configure(): void
    {
        $this
            ->setName('frobou:show:rewrite')
            ->setDescription('Lista os rewrites do Magento 2')
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
     * @param RewriteHelper $rewriteHelper Helper para manipulação de rewrites
     * @return void
     */
    public function inject(RewriteHelper $rewriteHelper): void
    {
        $this->rewriteHelper = $rewriteHelper->setApplication($this->getApplication());
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
            $rewriteList = $this->getFilteredRewriteList($input);
            
            if ($input->getOption(self::COPY_OPTION)) {
                $this->copyGuiAssets($rewriteList);
            }

            $this->createOutput($rewriteList, $output);
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
                'Nome do módulo inválido. Use um nome de módulo válido ou um padrão no formato {{module:forClass:typeClass}}'
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
     * Obtém a lista de rewrites filtrada conforme os parâmetros de entrada
     *
     * @param InputInterface $input Interface de entrada
     * @return array
     * @throws \Exception
     */
    private function getFilteredRewriteList(InputInterface $input): array
    {
        $rewriteList = $this->rewriteHelper->getRewrites($input->getOption(self::INCLUDE_OPTION));
        $moduleName = $input->getArgument(self::NAME_SPACE);

        if (!$moduleName) {
            return $rewriteList;
        }

        return $this->filterRewriteList($moduleName, $rewriteList);
    }

    /**
     * Filtra a lista de rewrites com base no nome do módulo ou padrão
     *
     * @param string $moduleName Nome do módulo ou padrão de filtro
     * @param array $rewriteList Lista completa de rewrites
     * @return array Lista filtrada
     * @throws \Exception
     */
    private function filterRewriteList(string $moduleName, array $rewriteList): array
    {
        if (substr($moduleName, 0, 2) === self::MULTI_PATTERN_PREFIX) {
            return $this->filterByMultiPattern($moduleName, $rewriteList);
        }

        return $this->filterByModuleName($moduleName, $rewriteList);
    }

    /**
     * Filtra rewrites por nome do módulo usando expressão regular
     *
     * @param string $moduleName Nome do módulo ou padrão regex
     * @param array $rewriteList Lista de rewrites
     * @return array
     * @throws \Exception
     */
    private function filterByModuleName(string $moduleName, array $rewriteList): array
    {
        $moduleList = [];
        $totals = 0;
        
        foreach ($rewriteList['rewrites'] as $key => $rewrites) {
            if (preg_match("/$moduleName/i", $key) && !empty($rewrites)) {
                $moduleList[$key] = $rewrites;
                $totals++;
            }
        }

        if (empty($moduleList)) {
            throw new \Exception(sprintf('Módulo ou regex pattern não encontrado: %s', $moduleName));
        }

        return [
            'rewrites' => $moduleList,
            'totals' => $totals
        ];
    }

    /**
     * Filtra rewrites usando múltiplos critérios
     *
     * @param string $pattern Padrão de filtro no formato {{module:forClass:typeClass}}
     * @param array $rewriteList Lista de rewrites
     * @return array Lista filtrada
     * @throws \Exception
     */
    private function filterByMultiPattern(string $pattern, array $rewriteList): array
    {
        $criteria = explode(':', substr($pattern, 2));
        if ((empty($criteria[0]) && empty($criteria[1]) && empty($criteria[2]))) {
            // Nenhum filtro, retorna todos
            return [
                'rewrites' => $rewriteList['rewrites'],
                'totals' => $this->countTotalRewrites($rewriteList['rewrites'])
            ];
        }
        $list = $this->filterByModule($criteria[0] ?? '', $rewriteList['rewrites']);
        $list = $this->filterByForClass($criteria[1] ?? '', $list);
        $list = $this->filterByTypeClass($criteria[2] ?? '', $list);

        if (empty($list)) {
            throw new \Exception(sprintf('Nenhum rewrite encontrado para o padrão: %s', $pattern));
        }

        return [
            'rewrites' => $list,
            'totals' => $this->countTotalRewrites($list)
        ];
    }

    /**
     * Filtra rewrites por módulo
     *
     * @param string $modulePattern Padrão do nome do módulo
     * @param array $rewrites Lista de rewrites
     * @return array
     */
    private function filterByModule(string $modulePattern, array $rewrites): array
    {
        if (empty($modulePattern)) {
            return $rewrites;
        }

        return array_filter(
            $rewrites,
            fn($key) => (bool)preg_match("/$modulePattern/i", $key),
            ARRAY_FILTER_USE_KEY
        );
    }

    /**
     * Filtra rewrites por classe base
     *
     * @param string $pattern Padrão do nome da classe base
     * @param array $rewrites Lista de rewrites
     * @return array
     */
    private function filterByForClass(string $pattern, array $rewrites): array
    {
        return $this->searchInRewrites($pattern, $rewrites, 'forClass');
    }

    /**
     * Filtra rewrites por classe que faz o rewrite
     *
     * @param string $pattern Padrão do nome da classe
     * @param array $rewrites Lista de rewrites
     * @return array
     */
    private function filterByTypeClass(string $pattern, array $rewrites): array
    {
        return $this->searchInRewrites($pattern, $rewrites, 'typeClass');
    }

    /**
     * Busca um padrão nos rewrites
     *
     * @param string $pattern Padrão a ser buscado
     * @param array $rewrites Lista de rewrites
     * @param string $field Campo a ser buscado
     * @return array
     */
    private function searchInRewrites(string $pattern, array $rewrites, string $field): array
    {
        if (empty($pattern)) {
            return $rewrites;
        }

        $filtered = [];
        foreach ($rewrites as $key => $value) {
            $matching = array_filter(
                $value,
                fn($rewrite) => (bool)preg_match("/$pattern/i", $rewrite[$field])
            );
            if (!empty($matching)) {
                $filtered[$key] = array_values($matching);
            }
        }

        return $filtered;
    }

    /**
     * Conta o número total de rewrites em uma lista
     *
     * @param array $rewrites Lista de rewrites
     * @return int
     */
    private function countTotalRewrites(array $rewrites): int
    {
        return array_sum(array_map('count', $rewrites));
    }

    /**
     * Copia os assets da interface gráfica
     *
     * @param array $rewriteList Lista de rewrites
     * @return void
     */
    private function copyGuiAssets(array $rewriteList): void
    {
        $destination = $this->getApplication()->getMagentoRootFolder() . 
            DIRECTORY_SEPARATOR . self::GUI_ASSETS_PATH;
        
        $this->rewriteHelper->doCopy($destination);
        
        $jsonPath = $destination . DIRECTORY_SEPARATOR . self::REWRITES_JSON_FILE;
        file_put_contents($jsonPath, json_encode($rewriteList));
    }

    /**
     * Gera a saída formatada dos rewrites encontrados
     *
     * @param array $rewriteList Lista de rewrites
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function createOutput(array $rewriteList, OutputInterface $output): void
    {
        $this->outputHeader($output);
        
        $totalRewrites = 0;
        foreach ($rewriteList['rewrites'] as $moduleName => $rewrites) {
            $this->outputModuleSection($moduleName, $rewrites, $output, $totalRewrites);
        }
        
        $this->outputFooter($rewriteList, $totalRewrites, $output);
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
            sprintf('<fg=cyan>│</><fg=green> %-76s</><fg=cyan>│</>', 'Listagem de Rewrites'),
            sprintf('<fg=cyan>└%s┘</>', str_repeat('─', 78)),
            ''
        ]);
    }

    /**
     * Exibe a seção de um módulo
     *
     * @param string $moduleName Nome do módulo
     * @param array $rewrites Lista de rewrites do módulo
     * @param OutputInterface $output Interface de saída
     * @param int &$totalRewrites Contador total de rewrites
     * @return void
     */
    private function outputModuleSection(string $moduleName, array $rewrites, OutputInterface $output, int &$totalRewrites): void
    {
        $output->writeln([
            '',
            sprintf('<fg=yellow>Módulo: %s</>', $moduleName),
            ''
        ]);
        foreach ($rewrites as $rewrite) {
            $totalRewrites++;
            $this->outputRewriteInfo($rewrite, $output);
            $output->writeln(['']); // Linha em branco entre rewrites
        }
        $output->writeln([
            str_repeat('-', 60),
            ''
        ]);
    }

    /**
     * Exibe o rodapé da saída
     *
     * @param array $rewriteList Lista de rewrites
     * @param int $totalRewrites Total de rewrites
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputFooter(array $rewriteList, int $totalRewrites, OutputInterface $output): void
    {
        $totalModules = count($rewriteList['rewrites']);
        $output->writeln([
            '',
            sprintf('<fg=cyan>┌%s┐</>', str_repeat('─', 78)),
            sprintf('<fg=cyan>│</><fg=green> %-76s</><fg=cyan>│</>', sprintf('Total: %d módulo(s) com %d rewrite(s)', $totalModules, $totalRewrites)),
            sprintf('<fg=cyan>└%s┘</>', str_repeat('─', 78)),
            ''
        ]);
    }

    /**
     * Exibe informações detalhadas de um rewrite
     *
     * @param array $rewrite Informações do rewrite
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputRewriteInfo(array $rewrite, OutputInterface $output): void
    {
        $status = $rewrite['active'] ? '<info>Ativo</info>' : '<comment>Inativo</comment>';
        $type = $rewrite['type'] === 'interface' ? '<info>Interface</info>' : '<comment>Classe</comment>';
        $output->writeln([
            sprintf('Tipo:            %s', $type),
            sprintf('Classe Base:     %s', $rewrite['forClass'] ?? 'N/A'),
            sprintf('Classe Rewrite:  %s', $rewrite['typeClass'] ?? 'N/A'),
            sprintf('Arquivo Base:    %s', $rewrite['forFile'] ?? 'N/A'),
            sprintf('Arquivo Rewrite: %s', $rewrite['typeFile'] ?? 'N/A'),
            sprintf('Status:          %s', $status),
        ]);
    }
}
