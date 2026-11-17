---
title: LISP-routines uitvoeren
summary: Wat de LISP van CadCraft uitvoert (functies, prompts, commando's, objecten, dialoogvensters, vla-objecten), hoe u LISP op de opdrachtregel typt en wat er nog niet is.
keywords: lisp, routine, lsp, dcl, dialoogvenster, commando, defun, entget, ssget, vla, vlax, vl, getpoint, fout, compatibiliteit, wat werkt
from: 571bc077
---

## Wat u leert

Wat u kunt verwachten wanneer u een LISP-routine laadt die voor een ander CAD-programma is geschreven: welke onderdelen in CadCraft worden uitgevoerd en wat er nog niet is.

CadCraft heeft zijn eigen LISP. Het is geschreven op basis van de openbare AutoLISP-referentie, niet van het programma van iemand anders. Daardoor werken de meeste routines die voor AutoCAD zijn geschreven ongewijzigd. Waar iets ontbreekt, noemt de opdrachtregel de functie, zodat u een tekortkoming in CadCraft kunt onderscheiden van een fout in de routine.

## LISP typen op de opdrachtregel

Typ een expressie die begint met `(` en druk op {{key:Enter}}: `(+ 1 2)` geeft `3`. `!naam` geeft de waarde van een variabele. Een expressie die nog niet is afgesloten, wacht op de volgende regel.

Bij een prompt beantwoordt een expressie die prompt: bij "Voer de straal in" typt u `(* 2 12.5)` voor 25.

## Wat wordt uitgevoerd

- **De taal:** `defun` (met lokale variabelen na `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` en `*error*` (een lokale `*error*` werkt). Namen zijn niet hoofdlettergevoelig. Gehele getallen en reële getallen verschillen, zoals u verwacht (`(/ 7 2)` is 3).
- **Ingebouwde functies:** wiskunde, lijsten (`car`, `cdr` en hun familie, `assoc`, `nth`, `member`, `subst`, `append`…), tekenreeksen (`strcat`, `substr`, `strcase`, `wcmatch`…), conversies (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), meetkunde (`polar`, `distance`, `angle`, `inters`) en bestanden (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Commando's:** `(defun c:NAME …)` maakt een commando. `(command …)` en `(command-s …)` sturen de eigen commando's van CadCraft aan, met `pause` voor uw antwoord.
- **Prompts:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` met `initget`-trefwoorden, `entsel`, `nentsel` en `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, met filterlijsten en `-4`-tests).
- **Objecten als lijsten:** `entget`, `entmod`, `entmake` (ook blokken), `entdel`, `entlast`, `entnext` (de attributen van een blokverwijzing komen erna als ATTRIB's, gevolgd door een SEQEND, zodat attribuutroutines werken), `handent`, selectiesets, `tblsearch` en `tblnext`, `layoutlist`, `regapp`, `getvar` en `setvar` voor de instellingen die CadCraft heeft.
- **Dialoogvensters:** `.dcl`-bestanden met `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` en `done_dialog`. Knoppen, bewerkingsvakken, lijstvakken, keuzelijsten, schakelaars, keuzerondjes, rijen, kolommen en vakken worden allemaal getoond. Een routine die zijn dialoogvenster naar een tijdelijk bestand schrijft, werkt ook.
- **Objecten:** `vl-load-com` (het doet niets; er hoeft niets te worden geladen), de `vl-`-lijst- en tekenreeksfuncties, `vl-catch-all-apply`, en `vla-get-…`- en `vla-put-…`-eigenschappen, `vla-…`-methoden en `vlax-for` over de verzamelingen Blocks, Layers en Layouts, modelruimte en blokdefinities, met varianten en veilige matrices.

## Geteste routines

De tests van CadCraft draaien een reeks routines die voor deze controles zijn geschreven (selectiefilters, prompts, commando's, objecten, foutafhandelaars), en één populaire routine waar mensen om bij naam hebben gevraagd: Lee Mac's DelBlocks, op naam via het dialoogvenster en door een blok te kiezen. CadCraft heeft ook een eigen {{cmd:DELBLOCKS}}, dus daarvoor hebt u geen routine nodig.

## Nog niet beschikbaar

- `grread` (de muis zelf volgen), reactors (`vlr-…`), curvefuncties (`vlax-curve-…`), woordenboeken en uitgebreide gegevens (`dictsearch`, xdata in `entget` en `entmake`), en de `acet-…`-functies van de Express Tools.
- Afbeeldingen en diapositieven in dialoogvensters worden als lege kaders getoond.
- Een ander programma uitvoeren, het Windows-register, en bestanden buiten de bestanden die u laadt: een routine kan eigen tijdelijke bestanden schrijven en lezen, die blijven bestaan tot u de pagina sluit.

Wanneer een routine hier op stuit, toont de opdrachtregel "geen functiedefinitie" en de naam, en meldt dat CadCraft die nog niet heeft.

## Fouten om te vermijden

- **Een commando met dezelfde naam als een van CadCraft.** Het commando van CadCraft blijft staan. Voer dat van de routine uit als `(c:NAAM)` op de opdrachtregel.
- **LISP uitvoeren die u niet vertrouwt.** Een routine kan alles in de tekening wijzigen, maar niets daarbuiten: ze kan uw bestanden, andere sites of andere apps niet bereiken.
