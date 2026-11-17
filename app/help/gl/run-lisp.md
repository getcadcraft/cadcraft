---
title: Executar rutinas LISP
summary: Qué executa o LISP de CadCraft (funcións, indicacións, comandos, obxectos, diálogos, obxectos vla), como escribir LISP na liña de comandos e o que aínda non ten.
keywords: lisp, rutina, lsp, dcl, diálogo, comando, defun, entget, ssget, vla, vlax, vl, getpoint, erro, compatibilidade, que funciona
from: 571bc077
---

## O que vai aprender

Que esperar cando carga unha rutina LISP escrita para outro programa de CAD: que partes se executan en CadCraft e o que aínda non ten.

CadCraft ten o seu propio LISP. Escribiuse a partir da referencia pública de AutoLISP, non do programa de ninguén máis, así que a maioría das rutinas escritas para AutoCAD funcionan sen cambios. Cando falta algo, a liña de comandos indica a función, para que poida distinguir unha carencia de CadCraft dun erro na rutina.

## Escriba LISP na liña de comandos

Escriba unha expresión que comece por `(` e prema {{key:Enter}}: `(+ 1 2)` imprime `3`. `!name` imprime o valor dunha variable. Unha expresión que aínda non se pecha agarda pola seguinte liña.

Cando hai unha indicación, unha expresión responde a ela: na indicación «Indique o raio» escriba `(* 2 12.5)` para obter 25.

## O que funciona

- **A linguaxe:** `defun` (con variables locais despois de `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` e `*error*` (funciona un `*error*` local). Os nomes non distinguen maiúsculas de minúsculas; os enteiros e os reais difiren, como cabe esperar (`(/ 7 2)` dá 3).
- **Funcións integradas:** matemáticas, listas (`car`, `cdr` e a súa familia, `assoc`, `nth`, `member`, `subst`, `append`…), cadeas (`strcat`, `substr`, `strcase`, `wcmatch`…), conversións (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), xeometría (`polar`, `distance`, `angle`, `inters`) e ficheiros (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Comandos:** `(defun c:NAME …)` crea un comando. `(command …)` e `(command-s …)` manexan os comandos propios de CadCraft, con `pause` para a súa resposta.
- **Indicacións:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` con palabras clave de `initget`, `entsel`, `nentsel` e `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, con listas de filtros e probas `-4`).
- **Obxectos como listas:** `entget`, `entmod`, `entmake` (tamén bloques), `entdel`, `entlast`, `entnext` (os atributos dunha referencia de bloque veñen despois como ATTRIB, e logo un SEQEND, así que as rutinas de atributos funcionan), `handent`, conxuntos de selección, `tblsearch` e `tblnext`, `layoutlist`, `regapp`, `getvar` e `setvar` para as configuracións que ten CadCraft.
- **Diálogos:** ficheiros `.dcl` con `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Amósanse botóns, caixas de edición, caixas de lista, listas emerxentes, interruptores, botóns de opción, filas, columnas e caixas. Tamén funciona unha rutina que escribe o seu diálogo nun ficheiro temporal.
- **Obxectos:** `vl-load-com` (non fai nada; non hai nada que cargar), as funcións de listas e cadeas `vl-`, `vl-catch-all-apply`, e as propiedades `vla-get-…` / `vla-put-…`, os métodos `vla-…` e `vlax-for` sobre as colección Blocks, Layers e Layouts, o espazo modelo e as definicións de bloque, con variantes e matrices seguras.

## Rutinas probadas

As probas de CadCraft executan un conxunto de rutinas escritas para estas comprobacións (filtros de selección, indicacións, comandos, obxectos, manexadores de erros), e unha rutina popular que a xente pediu por nome: DelBlocks de Lee Mac, por nome a través do seu diálogo e escollendo un bloque. CadCraft tamén ten o seu propio {{cmd:DELBLOCKS}}, así que non fai falta unha rutina para iso.

## Aínda non implementado

- `grread` (seguir o rato por conta propia), reactores (`vlr-…`), funcións de curva (`vlax-curve-…`), dicionarios e datos estendidos (`dictsearch`, xdata en `entget` e `entmake`), e as funcións `acet-…` das Express Tools.
- As imaxes e as diapositivas dos diálogos aparecen como marcos en branco.
- Executar outro programa, o rexistro de Windows e os ficheiros que non se cargaron: unha rutina pode escribir e ler os seus propios ficheiros temporais, que duran ata que pecha a páxina.

Cando unha rutina chega a algunha destas, a liña de comandos mostra «sen definición de función» e o nome, e indica que CadCraft aínda non o ten.

## Erros que evitar

- **Un comando co mesmo nome que un de CadCraft.** O comando propio de CadCraft mantense. Execute o da rutina como `(c:NAME)` na liña de comandos.
- **Executar LISP en que non confía.** Unha rutina pode cambiar calquera cousa do debuxo, pero nada fóra del: non pode acceder aos seus ficheiros, a outros sitios nin a outras aplicacións.
