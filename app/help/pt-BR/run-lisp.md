---
title: Executar rotinas LISP
summary: O que o LISP do CadCraft executa (funções, prompts, comandos, objetos, caixas de diálogo, objetos vla), como digitar LISP na linha de comando e o que ele ainda não tem.
keywords: lisp, rotina, lsp, dcl, caixa de diálogo, comando, defun, entget, ssget, vla, vlax, vl, getpoint, erro, compatibilidade, o que funciona
from: 571bc077
---

## O que você vai aprender

O que esperar ao carregar uma rotina LISP escrita para outro programa de CAD: quais partes são executadas no CadCraft e o que ele ainda não tem.

O CadCraft tem o seu próprio LISP. Ele foi escrito a partir da referência pública do AutoLISP, e não do programa de ninguém, por isso a maioria das rotinas escritas para o AutoCAD funciona sem alterações. Quando algo está ausente, a linha de comando informa o nome da função, para que você saiba se a falha é do CadCraft ou um erro da rotina.

## Digitar LISP na linha de comando

Digite uma expressão que começa com `(` e pressione {{key:Enter}}: `(+ 1 2)` mostra `3`. `!nome` mostra o valor de uma variável. Uma expressão que ainda não foi fechada aguarda a próxima linha.

Em um prompt, uma expressão responde a ele: no prompt "Especifique o raio", digite `(* 2 12.5)` para obter 25.

## O que é executado

- **A linguagem:** `defun` (com variáveis locais após `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` e `*error*` (um `*error*` local funciona). Os nomes não diferenciam maiúsculas de minúsculas; inteiros e reais são diferentes, como se espera (`(/ 7 2)` é 3).
- **Funções integradas:** matemática, listas (`car`, `cdr` e sua família, `assoc`, `nth`, `member`, `subst`, `append`…), strings (`strcat`, `substr`, `strcase`, `wcmatch`…), conversões (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) e arquivos (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comandos:** `(defun c:NOME …)` cria um comando. `(command …)` e `(command-s …)` acionam os comandos do próprio CadCraft, com `pause` para a sua resposta.
- **Prompts:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` com palavras-chave de `initget`, `entsel`, `nentsel` e `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, com listas de filtro e testes `-4`).
- **Objetos como listas:** `entget`, `entmod`, `entmake` (inclusive blocos), `entdel`, `entlast`, `entnext` (os atributos de uma referência de bloco vêm depois dela como ATTRIBs, seguidos de um SEQEND, de modo que as rotinas de atributos funcionam), `handent`, conjuntos de seleção, `tblsearch` e `tblnext`, `layoutlist`, `regapp`, `getvar` e `setvar` para as configurações que o CadCraft tem.
- **Caixas de diálogo:** arquivos `.dcl` com `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Botões, caixas de edição, listas, listas suspensas, alternâncias, botões de opção, linhas, colunas e caixas são todos exibidos. Uma rotina que grava a sua caixa de diálogo em um arquivo temporário também funciona.
- **Objetos:** `vl-load-com` (não faz nada; nada precisa ser carregado), as funções de lista e de string `vl-`, `vl-catch-all-apply`, e as propriedades `vla-get-…` / `vla-put-…`, os métodos `vla-…` e `vlax-for` sobre as coleções Blocks, Layers e Layouts, o espaço modelo e as definições de bloco, com variantes e arrays seguros.

## Rotinas testadas

Os testes do CadCraft executam um conjunto de rotinas escritas para essas verificações (filtros de seleção, prompts, comandos, objetos, manipuladores de erro), e uma rotina muito pedida pelo nome: o DelBlocks de Lee Mac, pelo nome, pela sua caixa de diálogo e escolhendo um bloco. O CadCraft também tem o seu próprio {{cmd:DELBLOCKS}}, então você não precisa de uma rotina para isso.

## Ainda não implementado

- `grread` (acompanhar o mouse por conta própria), reatores (`vlr-…`), funções de curvas (`vlax-curve-…`), dicionários e dados estendidos (`dictsearch`, xdata em `entget` e `entmake`), e as funções `acet-…` do Express Tools.
- Imagens e slides em caixas de diálogo aparecem como quadros em branco.
- Executar outro programa, o registro do Windows e arquivos fora dos que você carrega: uma rotina pode gravar e ler os seus próprios arquivos temporários, que duram até você fechar a página.

Quando uma rotina chega a um desses itens, a linha de comando mostra "nenhuma definição de função" e o nome, e informa que o CadCraft ainda não tem essa função.

## Erros a evitar

- **Um comando com o mesmo nome de um dos comandos do CadCraft.** O comando do próprio CadCraft permanece. Execute o da rotina como `(c:NOME)` na linha de comando.
- **Executar LISP em que você não confia.** Uma rotina pode alterar qualquer coisa no desenho, mas nada fora dele: não consegue acessar os seus arquivos, outros sites ou outros aplicativos.
