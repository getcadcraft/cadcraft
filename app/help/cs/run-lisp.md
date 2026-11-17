---
title: Spouštění rutin LISP
summary: Co spouští LISP v CadCraftu (funkce, výzvy, příkazy, objekty, dialogy, objekty vla), jak psát LISP na příkazový řádek a co zatím nemá.
keywords: lisp, rutina, lsp, dcl, dialog, příkaz, defun, entget, ssget, vla, vlax, vl, getpoint, chyba, kompatibilita, co funguje
from: 571bc077
---

## Co se naučíte

Co čekat, když načtete rutinu LISP napsanou pro jiný CAD program: které části běží v CadCraftu a co zatím nemá.

CadCraft má vlastní LISP. Byl napsán podle veřejné referenční příručky AutoLISPu, ne podle cizího programu, takže většina rutin napsaných pro AutoCAD funguje beze změny. Tam, kde něco chybí, příkazový řádek uvede název funkce, takže poznáte mezeru v CadCraftu od chyby v rutině.

## Zadání LISPu na příkazový řádek

Napište výraz začínající `(` a stiskněte {{key:Enter}}: `(+ 1 2)` vypíše `3`. `!name` vypíše hodnotu proměnné. Výraz, který se ještě neuzavřel, počká na další řádek.

U výzvy výraz na ni odpoví: u výzvy „Zadejte poloměr“ zadejte `(* 2 12.5)` a dostanete 25.

## Co běží

- **Jazyk:** `defun` (s lokálními proměnnými za `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` a `*error*` (lokální `*error*` funguje). Názvy nerozlišují velká a malá písmena; celá a reálná čísla se liší, jak čekáte (`(/ 7 2)` je 3).
- **Vestavěné funkce:** matematika, seznamy (`car`, `cdr` a jejich rodina, `assoc`, `nth`, `member`, `subst`, `append`…), řetězce (`strcat`, `substr`, `strcase`, `wcmatch`…), převody (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometrie (`polar`, `distance`, `angle`, `inters`) a soubory (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Příkazy:** `(defun c:NAME …)` vytvoří příkaz. `(command …)` a `(command-s …)` ovládají vlastní příkazy CadCraftu, s `pause` pro vaši odpověď.
- **Výzvy:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` s klíčovými slovy z `initget`, `entsel`, `nentsel` a `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, se seznamy filtrů a testy `-4`).
- **Objekty jako seznamy:** `entget`, `entmod`, `entmake` (i bloky), `entdel`, `entlast`, `entnext` (atributy odkazu na blok následují za ním jako ATTRIBy, pak SEQEND, takže rutiny pro atributy fungují), `handent`, výběrové množiny, `tblsearch` a `tblnext`, `layoutlist`, `regapp`, `getvar` a `setvar` pro nastavení, která CadCraft má.
- **Dialogy:** soubory `.dcl` s `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Tlačítka, editační pole, seznamy, rozbalovací seznamy, přepínače, volby, řádky, sloupce a boxy se všechny zobrazí. Funguje i rutina, která zapíše svůj dialog do dočasného souboru.
- **Objekty:** `vl-load-com` (nedělá nic; nic se nemusí načítat), funkce seznamů a řetězců `vl-`, `vl-catch-all-apply` a vlastnosti `vla-get-…` / `vla-put-…`, metody `vla-…` a `vlax-for` nad kolekcemi Blocks, Layers a Layouts, prostorem modelu a definicemi bloků, s variantami a bezpečnými poli.

## Otestované rutiny

Testy CadCraftu běží nad sadou rutin napsaných pro tyto kontroly (filtry výběru, výzvy, příkazy, objekty, obsluhy chyb) a nad jednou oblíbenou rutinou, o kterou lidé žádali jménem: DelBlocks od Lee Maca, a to jménem přes její dialog i výběrem bloku. CadCraft má i vlastní {{cmd:DELBLOCKS}}, takže rutinu pro to nepotřebujete.

## Ještě není hotovo

- `grread` (sledování myši vlastními silami), reaktory (`vlr-…`), funkce křivek (`vlax-curve-…`), slovníky a rozšířená data (`dictsearch`, xdata v `entget` a `entmake`) a funkce `acet-…` z Express Tools.
- Obrázky a snímky v dialozích se zobrazí jako prázdné rámečky.
- Spouštění jiného programu, registr Windows a soubory mimo ty, které načtete: rutina může zapisovat a číst vlastní dočasné soubory, které zůstanou až do zavření stránky.

Když rutina narazí na některou z těchto věcí, příkazový řádek zobrazí „není definována funkce“ a název a napíše, že CadCraft to zatím nemá.

## Chyby, kterým se vyhnout

- **Příkaz se stejným názvem jako některý z příkazů CadCraftu.** Příkaz CadCraftu zůstane. Rutinu spusťte jako `(c:NAME)` na příkazovém řádku.
- **Spouštění LISPu, kterému nedůvěřujete.** Rutina může změnit cokoli ve výkresu, ale nic mimo něj: nedosáhne na vaše soubory, jiné weby ani jiné aplikace.
