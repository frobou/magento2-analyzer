# Comandos de plugins

- n98-magerun2 frobou:show:plugin --help
    - mostra a ajuda do comando

![help](images/plugins-cli-help.png)

- n98-magerun2 frobou:show:plugin (tambem pode ser abreviado como ```n98-magerun f:s:p```)
    - mostra todos os plugins
- n98-magerun2 frobou:show:plugin frobou
    - mostra os plugins para os módulos que contenham "frobou" no nome
- n98-magerun2 frobou:show:plugin -i
  - mostra também os plugins desativados
- n98-magerun2 frobou:show:plugin -g
    - mostra os plugins para os módulos que contenham "frobou" no nome e copia o conteúdo da pasta modules/frobou-gui
      para a pasta pub/gui do projeto em que o comando foi rodado

> O parâmetro -g sempre vai copiar todos os plugins, não somente o que foi filtrado

**Estrutura do objeto de saída**

![estrutura](images/plugins-structure.png)

### Usando a busca pelo nome do módulo

> Apenas adicione o nome que deseja na linha de comando, nao precisa nem respeitar uma ordem

```
n98-magerun2 frobou:show:plugin -g nome_a_ser_buscado -i
```

### Usando o pattern de busca

> Para usar o patern, adicione {{ no começo e separe os campos por :

> {{module_name:method_name:class_name:type*:status
> *pode ter mais de um type, separando por - (after-before), mas deve estar no campo requerido
> se quiser usar um campo específico, coloque os antecedentes entre :: ({{:method_name)
> os campos posteriores não precisam ser declarados se não forem usados

- {{frobou
    - pesquisa por módulos que contenham a palavra "frobou" no nome
- {{frobou:collection
    - pesquisa por módulos que contenham a palavra "frobou" no nome e collection no campo method
- e assim por diante

### Facilidades

- buscar que recebem um texto são feitas usando regex, então pode usar ^hi[bX]do$ ({{^hi[bX]do$ também pode) que não tem
  problema
- campos type (after, before e around) e status (0 ou 1) não usam regex, então passe o valor correto ou a busca vai
  falhar
- no caso do multi search (foi assim que chamei o {{) a busca ocorre da seguinte forma
    - resultado = todos os plugins
    - se valor: pesquisa pelo module_name e guarda o novo resultado
    - se valor: pesquisa pelo type com o resultado do campo anterior como novo resultado
    - se valor: pesquisa pelo status com o resultado do campo anterior como novo resultado
    - se valor: pesquisa pelo method_name com o resultado do campo anterior como novo resultado
    - se valor: pesquisa pelo class_name com o resultado do campo anterior como novo resultado
    - o novo resultado vai ser o filtro de tudo o que foi informado ou um erro bonito

![erro](images/multi-error.png)

Se tudo correu bem, temos isso:

![erro](images/plugins-out.png)
