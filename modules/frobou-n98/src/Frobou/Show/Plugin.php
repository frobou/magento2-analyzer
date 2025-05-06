<?php

declare(strict_types=1);

namespace Frobou\Show;

use Frobou\Show\Plugin\PluginHelper;
use Magento\Framework\Console\Cli;
use N98\Magento\Command\AbstractMagentoCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Plugin List Command
 *
 * Este comando lista todos os plugins do Magento 2, permitindo filtrar por módulo
 * e outros critérios como tipo de plugin, status e métodos.
 * 
 * Exemplos de uso:
 * - Listar todos os plugins: frobou:show:plugin
 * - Filtrar por módulo: frobou:show:plugin Magento_Catalog
 * - Filtrar com padrão: frobou:show:plugin "{{Magento:save:Model:after-before:1}}"
 * - Incluir desabilitados: frobou:show:plugin -i
 * - Copiar GUI: frobou:show:plugin -g
 */
class Plugin extends AbstractMagentoCommand
{
    // Constantes para argumentos e opções
    private const NAME_SPACE = 'module-name|filter-pattern';
    private const INCLUDE_OPTION = 'include-disabled';
    private const COPY_OPTION = 'copy-gui';
    
    // Constantes para tipos de plugin
    private const VALID_PLUGIN_TYPES = ['after', 'before', 'around'];
    
    // Constantes para caminhos e arquivos
    private const GUI_ASSETS_PATH = 'pub/gui';
    private const PLUGINS_JSON_FILE = 'assets/ma-plugins.json';
    private const MULTI_PATTERN_PREFIX = '{{';

    /**
     * @var PluginHelper
     */
    private PluginHelper $pluginHelper;

    /**
     * Configura o comando com suas opções e argumentos
     *
     * @return void
     */
    protected function configure(): void
    {
        $this
            ->setName('frobou:show:plugin')
            ->setDescription('Lista os plugins do Magento 2')
            ->setDefinition([
                new InputArgument(
                    self::NAME_SPACE,
                    InputArgument::OPTIONAL,
                    'Nome do módulo ou padrão de filtro (ex: {{Magento:save:Model:after-before:1}})',
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
     * @param PluginHelper $pluginHelper Helper para manipulação de plugins
     * @return void
     */
    public function inject(PluginHelper $pluginHelper): void
    {
        $this->pluginHelper = $pluginHelper->setApplication($this->getApplication());
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
            $pluginList = $this->getFilteredPluginList($input);
            
            if ($input->getOption(self::COPY_OPTION)) {
                $this->copyGuiAssets($pluginList);
            }

            $this->createOutput($pluginList, $output);
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
                'Nome do módulo inválido. Use um nome de módulo válido ou um padrão no formato {{module:method:class:types:status}}'
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
        return count($criteria) >= 1 && count($criteria) <= 5;
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
     * Obtém a lista de plugins filtrada conforme os parâmetros de entrada
     *
     * @param InputInterface $input Interface de entrada
     * @return array
     */
    private function getFilteredPluginList(InputInterface $input): array
    {
        $pluginList = $this->pluginHelper->getPlugins($input->getOption(self::INCLUDE_OPTION));
        $moduleName = $input->getArgument(self::NAME_SPACE);

        if (!$moduleName) {
            return $pluginList;
        }

        return $this->filterPluginList($moduleName, $pluginList);
    }

    /**
     * Filtra a lista de plugins com base no nome do módulo ou padrão
     *
     * @param string $moduleName Nome do módulo ou padrão de filtro
     * @param array $pluginList Lista completa de plugins
     * @return array Lista filtrada
     * @throws \Exception
     */
    private function filterPluginList(string $moduleName, array $pluginList): array
    {
        if (substr($moduleName, 0, 2) === '{{') {
            return $this->filterByMultiPattern($moduleName, $pluginList);
        }

        return $this->filterByModuleName($moduleName, $pluginList);
    }

    /**
     * Filtra plugins usando múltiplos critérios
     *
     * @param string $pattern Padrão de filtro no formato {{module:method:class:types:status}}
     * @param array $pluginList Lista de plugins
     * @return array Lista filtrada
     * @throws \Exception
     */
    private function filterByMultiPattern(string $pattern, array $pluginList): array
    {
        $criteria = $this->parseFilterPattern($pattern);
        $list = $this->filterByModule($criteria['module'] ?? '', $pluginList['plugins']);
        $list = $this->filterByTypes($criteria['types'] ?? '', $list);
        $list = $this->filterByStatus($criteria['status'] ?? '', $list);
        $list = $this->filterByMethod($criteria['method'] ?? '', $list);
        $list = $this->filterByClass($criteria['class'] ?? '', $list);

        if (empty($list)) {
            throw new \Exception(sprintf('Nenhum plugin encontrado para o padrão: %s', $pattern));
        }

        return [
            'plugins' => $list,
            'totals' => count($list)
        ];
    }

    /**
     * Analisa o padrão de filtro e retorna os critérios
     *
     * @param string $pattern Padrão de filtro
     * @return array Critérios de filtro
     */
    private function parseFilterPattern(string $pattern): array
    {
        $criteria = explode(':', substr($pattern, 2));
        return [
            'module' => $criteria[0] ?? '',
            'method' => $criteria[1] ?? '',
            'class' => $criteria[2] ?? '',
            'types' => $criteria[3] ?? '',
            'status' => $criteria[4] ?? ''
        ];
    }

    /**
     * Filtra plugins por módulo
     *
     * @param string $modulePattern Padrão do nome do módulo
     * @param array $plugins Lista de plugins
     * @return array
     */
    private function filterByModule(string $modulePattern, array $plugins): array
    {
        if (empty($modulePattern)) {
            return $plugins;
        }

        return array_filter(
            $plugins,
            fn($key) => (bool)preg_match("/$modulePattern/i", $key),
            ARRAY_FILTER_USE_KEY
        );
    }

    /**
     * Filtra plugins por tipo (before, after, around)
     *
     * @param string $types Tipos de plugin separados por hífen
     * @param array $plugins Lista de plugins
     * @return array
     * @throws \Exception
     */
    private function filterByTypes(string $types, array $plugins): array
    {
        if (empty($types)) {
            return $plugins;
        }

        $requestedTypes = explode('-', $types);
        $this->validatePluginTypes($requestedTypes);

        $filtered = [];
        foreach ($plugins as $key => $value) {
            $typePlugins = $this->filterPluginsByTypes($value, $requestedTypes);
            if (!empty($typePlugins)) {
                $filtered[$key] = $typePlugins;
            }
        }

        return $filtered;
    }

    /**
     * Valida os tipos de plugin solicitados
     *
     * @param array $types Tipos de plugin
     * @throws \Exception
     */
    private function validatePluginTypes(array $types): void
    {
        foreach ($types as $type) {
            if (!in_array($type, self::VALID_PLUGIN_TYPES)) {
                throw new \Exception(sprintf('Tipo de plugin inválido: %s', $type));
            }
        }
    }

    /**
     * Filtra plugins por tipos específicos
     *
     * @param array $plugins Lista de plugins
     * @param array $requestedTypes Tipos solicitados
     * @return array
     */
    private function filterPluginsByTypes(array $plugins, array $requestedTypes): array
    {
        $typePlugins = [];
        foreach ($plugins as $plugin) {
            foreach ($requestedTypes as $type) {
                if (!empty($plugin[$type])) {
                    $typePlugins[] = [$type => $plugin[$type]];
                }
            }
        }
        return $typePlugins;
    }

    /**
     * Filtra plugins por status (ativo/inativo)
     *
     * @param string $status Status do plugin (0 ou 1)
     * @param array $plugins Lista de plugins
     * @return array
     */
    private function filterByStatus(string $status, array $plugins): array
    {
        if (empty($status)) {
            return $plugins;
        }

        $filtered = [];
        foreach ($plugins as $key => $value) {
            $statusPlugins = [];
            foreach ($value as $plugins) {
                foreach ($plugins as $type => $plugin) {
                    $matching = array_filter(
                        $plugin,
                        fn($p) => $p['active'] === (int)$status
                    );
                    if (!empty($matching)) {
                        $statusPlugins[] = [$type => $matching];
                    }
                }
            }
            if (!empty($statusPlugins)) {
                $filtered[$key] = $statusPlugins;
            }
        }

        return $filtered;
    }

    /**
     * Filtra plugins por nome do método
     *
     * @param string $methodPattern Padrão do nome do método
     * @param array $plugins Lista de plugins
     * @return array
     */
    private function filterByMethod(string $methodPattern, array $plugins): array
    {
        if (empty($methodPattern)) {
            return $plugins;
        }

        return $this->searchInPlugins($methodPattern, $plugins, 'name');
    }

    /**
     * Filtra plugins por nome da classe
     *
     * @param string $classPattern Padrão do nome da classe
     * @param array $plugins Lista de plugins
     * @return array
     */
    private function filterByClass(string $classPattern, array $plugins): array
    {
        if (empty($classPattern)) {
            return $plugins;
        }

        return $this->searchInPlugins($classPattern, $plugins, 'className');
    }

    /**
     * Busca um padrão nos plugins
     *
     * @param string $pattern Padrão a ser buscado
     * @param array $plugins Lista de plugins
     * @param string $field Campo a ser buscado
     * @return array
     */
    private function searchInPlugins(string $pattern, array $plugins, string $field): array
    {
        $filtered = [];
        foreach ($plugins as $key => $value) {
            $matchingPlugins = [];
            foreach ($value as $plugins) {
                foreach ($plugins as $type => $plugin) {
                    $matching = array_filter(
                        $plugin,
                        fn($p) => isset($p['origin'][$field]) && is_string($p['origin'][$field]) && preg_match("/$pattern/i", $p['origin'][$field])
                    );
                    if (!empty($matching)) {
                        $matchingPlugins[] = [$type => $matching];
                    }
                }
            }
            if (!empty($matchingPlugins)) {
                $filtered[$key] = $matchingPlugins;
            }
        }

        return $filtered;
    }

    /**
     * Filtra plugins por nome do módulo usando expressão regular
     *
     * @param string $moduleName Nome do módulo ou padrão regex
     * @param array $pluginList Lista de plugins
     * @return array
     * @throws \Exception
     */
    private function filterByModuleName(string $moduleName, array $pluginList): array
    {
        $moduleList = [];
        $totals = 0;
        
        foreach ($pluginList['plugins'] as $key => $plugins) {
            if (preg_match("/$moduleName/i", $key) && !empty($plugins)) {
                $moduleList[$key] = $plugins;
                $totals++;
            }
        }

        if (empty($moduleList)) {
            throw new \Exception(sprintf('Módulo ou regex pattern não encontrado: %s', $moduleName));
        }

        return [
            'plugins' => $moduleList,
            'totals' => $totals
        ];
    }

    /**
     * Copia os assets da interface gráfica
     *
     * @param array $pluginList Lista de plugins
     * @return void
     */
    private function copyGuiAssets(array $pluginList): void
    {
        $destination = $this->getApplication()->getMagentoRootFolder() . 
            DIRECTORY_SEPARATOR . self::GUI_ASSETS_PATH;
        
        $this->pluginHelper->doCopy($destination);
        
        $jsonPath = $destination . DIRECTORY_SEPARATOR . self::PLUGINS_JSON_FILE;
        file_put_contents($jsonPath, json_encode($pluginList));
    }

    /**
     * Gera a saída formatada dos plugins encontrados
     *
     * @param array $pluginList Lista de plugins
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function createOutput(array $pluginList, OutputInterface $output): void
    {
        $this->outputHeader($output);
        
        $totalPlugins = 0;
        foreach ($pluginList['plugins'] as $moduleName => $plugin) {
            $this->outputModuleSection($moduleName, $plugin, $output, $totalPlugins);
        }
        
        $this->outputFooter($pluginList, $totalPlugins, $output);
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
            sprintf('<fg=cyan>│</><fg=green> %-76s</><fg=cyan>│</>', 'Listagem de Plugins'),
            sprintf('<fg=cyan>└%s┘</>', str_repeat('─', 78)),
            ''
        ]);
    }

    /**
     * Exibe a seção de um módulo
     *
     * @param string $moduleName Nome do módulo
     * @param array $plugins Lista de plugins do módulo
     * @param OutputInterface $output Interface de saída
     * @param int &$totalPlugins Contador total de plugins
     * @return void
     */
    private function outputModuleSection(string $moduleName, array $plugins, OutputInterface $output, int &$totalPlugins): void
    {
        $output->writeln([
            '',
            sprintf('<fg=yellow>Módulo: %s</>', $moduleName),
            ''
        ]);

        $types = ['before', 'after', 'around'];
        foreach ($types as $type) {
            $typePlugins = [];
            foreach ($plugins as $plugin) {
                if (isset($plugin[$type])) {
                    $typePlugins = array_merge($typePlugins, $plugin[$type]);
                }
            }

            if (!empty($typePlugins)) {
                $output->writeln([
                    sprintf('<fg=green>[%s]</>', ucfirst($type)),
                    ''
                ]);
                foreach ($typePlugins as $plugin) {
                    $totalPlugins++;
                    $this->outputPluginInfo($plugin, $output);
                    $output->writeln(['']); // Linha em branco entre plugins
                }
            }
        }
        $output->writeln([
            str_repeat('-', 60),
            ''
        ]);
    }

    /**
     * Exibe o rodapé da saída
     *
     * @param array $pluginList Lista de plugins
     * @param int $totalPlugins Total de plugins
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputFooter(array $pluginList, int $totalPlugins, OutputInterface $output): void
    {
        $totalModules = count($pluginList['plugins']);
        $output->writeln([
            '',
            sprintf('<fg=cyan>┌%s┐</>', str_repeat('─', 78)),
            sprintf('<fg=cyan>│</><fg=green> %-76s</><fg=cyan>│</>', sprintf('Total: %d módulo(s) com %d plugin(s)', $totalModules, $totalPlugins)),
            sprintf('<fg=cyan>└%s┘</>', str_repeat('─', 78)),
            ''
        ]);
    }

    /**
     * Exibe informações detalhadas de um plugin
     *
     * @param array $plugin Informações do plugin
     * @param OutputInterface $output Interface de saída
     * @return void
     */
    private function outputPluginInfo(array $plugin, OutputInterface $output): void
    {
        $statusText = $plugin['active'] ? '<info>Ativo</info>' : '<comment>Inativo</comment>';
        $output->writeln([
            sprintf('Classe:  %s', $plugin['origin']['className'] ?? 'N/A'),
            sprintf('Método:  %s', $plugin['origin']['name'] ?? 'N/A'),
            sprintf('Plugin:  %s', $plugin['className'] ?? 'N/A'),
            sprintf('Arquivo: %s', $plugin['file'] ?? 'N/A'),
            sprintf('Status:  %s', $statusText),
        ]);
    }
}
