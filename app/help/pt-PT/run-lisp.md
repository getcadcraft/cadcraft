---
title: Executar rotinas LISP
summary: O que executa o LISP do CadCraft (funções, pedidos, comandos, objetos, janelas de diálogo, objetos vla), como escrever LISP na linha de comandos e o que ainda não tem.
keywords: lisp, rotina, lsp, dcl, diálogo, comando, defun, entget, ssget, vla, vlax, vl, getpoint, erro, compatibilidade, o que funciona
from: 571bc077
---

## O que vai aprender

O que esperar ao carregar uma rotina LISP escrita para outro programa de CAD: que partes são executadas no CadCraft e o que ainda não existe.

O CadCraft tem o seu próprio LISP. Foi escrito a partir da referência pública do AutoLISP, e não a partir de nenhum outro programa, por isso a maioria das rotinas escritas para o AutoCAD funciona sem alterações. Quando algo falta, a linha de comandos indica o nome da função, para que possa distinguir uma lacuna do CadCraft de um erro na rotina.

## Escrever LISP na linha de comandos

Escreva uma expressão que comece por `(` e prima {{key:Enter}}: `(+ 1 2)` escreve `3`. `!nome` escreve o valor de uma variável. Uma expressão que ainda não fechou fica à espera da linha seguinte.

Num pedido, uma expressão responde-lhe: no pedido "Especifique o raio", escreva `(* 2 12.5)` para obter 25.

## O que é executado

- **A linguagem:** `defun` (com variáveis locais depois de `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` e `*error*` (um `*error*` local funciona). Os nomes não distinguem maiúsculas de minúsculas; inteiros e reais diferem, como seria de esperar (`(/ 7 2)` dá 3).
- **Funções incorporadas:** matemática, listas (`car`, `cdr` e a sua família, `assoc`, `nth`, `member`, `subst`, `append`…), cadeias de caracteres (`strcat`, `substr`, `strcase`, `wcmatch`…), conversões (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) e ficheiros (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comandos:** `(defun c:NAME …)` cria um comando. `(command …)` e `(command-s …)` executam os comandos do próprio CadCraft, com `pause` para a sua resposta.
- **Pedidos:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` com palavras-chave de `initget`, `entsel`, `nentsel` e `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, com listas de filtros e testes `-4`).
- **Objetos como listas:** `entget`, `entmod`, `entmake` (blocos incluídos), `entdel`, `entlast`, `entnext` (os atributos de uma referência de bloco vêm depois dela como ATTRIBs, e depois um SEQEND, para que as rotinas de atributos funcionem), `handent`, conjuntos de seleção, `tblsearch` e `tblnext`, `layoutlist`, `regapp`, `getvar` e `setvar` para as definições que o CadCraft tem.
- **Janelas de diálogo:** ficheiros `.dcl` com `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Botões, caixas de edição, listas, listas pendentes, interruptores, botões de opção, linhas, colunas e caixas são todos mostrados. Uma rotina que escreve a sua janela de diálogo num ficheiro temporário também funciona.
- **Objetos:** `vl-load-com` (não faz nada; nada precisa de ser carregado), as funções de listas e cadeias `vl-`, `vl-catch-all-apply`, as propriedades `vla-get-…` / `vla-put-…`, os métodos `vla-…` e `vlax-for` sobre as coleções Blocks, Layers e Layouts, o espaço modelo e as definições de bloco, com variantes e arrays seguros.

## Rotinas testadas

Os testes do CadCraft executam um conjunto de rotinas escritas para estas verificações (filtros de seleção, pedidos, comandos, objetos, tratadores de erros), e uma rotina muito pedida pelo nome: o DelBlocks de Lee Mac, pelo nome na sua janela de diálogo e escolhendo um bloco. O CadCraft tem também o seu próprio {{cmd:DELBLOCKS}}, por isso não precisa de uma rotina para isso.

## Ainda não implementado

- `grread` (acompanhar o rato por si próprio), reatores (`vlr-…`), funções de curvas (`vlax-curve-…`), dicionários e dados estendidos (`dictsearch`, xdata em `entget` e `entmake`), e as funções `acet-…` das Express Tools.
- As imagens e os diapositivos nas janelas de diálogo aparecem como molduras em branco.
- Executar outro programa, o registo do Windows, e ficheiros fora dos que carrega: uma rotina pode escrever e ler os seus próprios ficheiros temporários, que duram até fechar a página.

Quando uma rotina chega a uma destas situações, a linha de comandos mostra "sem definição de função" e o nome, e indica que o CadCraft ainda não a tem.

## Erros a evitar

- **Um comando com o mesmo nome de um do CadCraft.** O comando do CadCraft mantém-se. Execute o da rotina como `(c:NAME)` na linha de comandos.
- **Executar LISP em que não confia.** Uma rotina pode alterar qualquer coisa no desenho, mas nada fora dele: não consegue aceder aos seus ficheiros, a outros sites nem a outras aplicações.
