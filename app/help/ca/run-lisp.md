---
title: Executa rutines LISP
summary: Què executa el LISP de CadCraft (funcions, indicacions, ordres, objectes, diàlegs, objectes vla), com escriure LISP a la línia d'ordres i què encara no té.
keywords: lisp, rutina, lsp, dcl, diàleg, ordre, defun, entget, ssget, vla, vlax, vl, getpoint, error, compatibilitat, què funciona
from: 571bc077
---

## Què aprendreu

Què cal esperar quan carregueu una rutina LISP escrita per a un altre programa CAD: quines parts s'executen a CadCraft i què encara no té.

CadCraft té el seu propi LISP. Es va escriure a partir de la referència pública d'AutoLISP, no del programa de ningú més, de manera que la majoria de rutines escrites per a AutoCAD s'executen sense canvis. Quan falta alguna cosa, la línia d'ordres indica el nom de la funció; així podeu distingir un buit de CadCraft d'un error de la rutina.

## Escriviu LISP a la línia d'ordres

Escriviu una expressió que comenci per `(` i premeu {{key:Enter}}: `(+ 1 2)` escriu `3`. `!name` escriu el valor d'una variable. Una expressió que encara no es tanca espera la línia següent.

En una indicació, una expressió hi respon: a "Especifiqueu el radi" escriviu `(* 2 12.5)` per obtenir 25.

## Què s'executa

- **El llenguatge:** `defun` (amb variables locals després de `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, i `*error*` (una `*error*` local funciona). Els noms no distingeixen majúscules de minúscules; els enters i els reals es comporten diferent, com és d'esperar (`(/ 7 2)` és 3).
- **Funcions integrades:** matemàtiques, llistes (`car`, `cdr` i la seva família, `assoc`, `nth`, `member`, `subst`, `append`…), cadenes (`strcat`, `substr`, `strcase`, `wcmatch`…), conversions (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) i fitxers (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Ordres:** `(defun c:NAME …)` crea una ordre. `(command …)` i `(command-s …)` controlen les ordres pròpies de CadCraft, amb `pause` per a la vostra resposta.
- **Indicacions:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` amb paraules clau de `initget`, `entsel`, `nentsel` i `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, amb llistes de filtres i proves `-4`).
- **Objectes com a llistes:** `entget`, `entmod`, `entmake` (també blocs), `entdel`, `entlast`, `entnext` (els atributs d'una referència de bloc van després com a ATTRIB, i després un SEQEND, de manera que les rutines d'atributs funcionen), `handent`, conjunts de selecció, `tblsearch` i `tblnext`, `layoutlist`, `regapp`, `getvar` i `setvar` per a les opcions que té CadCraft.
- **Diàlegs:** fitxers `.dcl` amb `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Els botons, els camps d'edició, les llistes, les llistes emergents, els commutadors, els botons d'opció, les files, les columnes i els quadres es mostren tots. Una rutina que escriu el seu diàleg en un fitxer temporal també funciona.
- **Objectes:** `vl-load-com` (no fa res; no cal carregar res), les funcions de llista i de cadena `vl-`, `vl-catch-all-apply`, i les propietats `vla-get-…` / `vla-put-…`, els mètodes `vla-…` i `vlax-for` sobre les col·leccions Blocks, Layers i Layouts, l'espai model i les definicions de bloc, amb variants i matrius segures.

## Rutines provades

Les proves de CadCraft executen un conjunt de rutines escrites per a aquestes comprovacions (filtres de selecció, indicacions, ordres, objectes, gestors d'errors), i una rutina molt popular que la gent va demanar pel nom: el DelBlocks de Lee Mac, pel nom a través del seu diàleg i triant un bloc. CadCraft també té el seu propi {{cmd:DELBLOCKS}}, de manera que no cal una rutina per a això.

## Encara no implementat

- `grread` (seguir el ratolí vosaltres mateixos), reactors (`vlr-…`), funcions de corbes (`vlax-curve-…`), diccionaris i dades estesos (`dictsearch`, xdata a `entget` i `entmake`), i les funcions `acet-…` d'Express Tools.
- Les imatges i les diapositives dels diàlegs es mostren com a marcs en blanc.
- Executar un altre programa, el registre de Windows i els fitxers fora dels que carregueu: una rutina pot escriure i llegir els seus propis fitxers temporals, que duren fins que tanqueu la pàgina.

Quan una rutina arriba a una d'aquestes funcions, la línia d'ordres mostra "No hi ha definició de funció" i el nom, i indica que CadCraft encara no la té.

## Errors a evitar

- **Una ordre amb el mateix nom que una de CadCraft.** L'ordre pròpia de CadCraft es conserva. Executeu la de la rutina com a `(c:NAME)` a la línia d'ordres.
- **Executar LISP en què no confieu.** Una rutina pot canviar qualsevol cosa del dibuix, però res fora d'ell: no pot accedir als vostres fitxers, a altres llocs ni a altres aplicacions.
