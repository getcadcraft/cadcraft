---
title: Kör LISP-rutiner
summary: Vad CadCrafts LISP kör (funktioner, prompter, kommandon, objekt, dialogrutor, vla-objekt), hur du skriver LISP på kommandoraden och vad som ännu saknas.
keywords: lisp, rutin, lsp, dcl, dialog, kommando, defun, entget, ssget, vla, vlax, vl, getpoint, fel, kompatibilitet, vad som fungerar
from: 571bc077
---

## Vad du lär dig

Vad du kan förvänta dig när du läser in en LISP-rutin skriven för ett annat CAD-program: vilka delar som körs i CadCraft och vad som ännu saknas.

CadCraft har sitt eget LISP. Det skrevs utifrån den offentliga AutoLISP-referensen, inte utifrån något annat programs kod, så de flesta rutiner som skrivits för AutoCAD fungerar oförändrade. Där något saknas anger kommandoraden funktionen, så att du kan skilja på en lucka i CadCraft och ett fel i rutinen.

## Skriv LISP på kommandoraden

Skriv ett uttryck som börjar med `(` och tryck på {{key:Enter}}: `(+ 1 2)` skriver ut `3`. `!name` skriver ut värdet av en variabel. Ett uttryck som ännu inte är stängt väntar på nästa rad.

Vid en prompt besvarar ett uttryck den: vid ”Ange radie” skriv `(* 2 12.5)` för 25.

## Vad som körs

- **Språket:** `defun` (med lokala variabler efter `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` och `*error*` (en lokal `*error*` fungerar). Namn är inte skiftlägeskänsliga; heltal och reella tal skiljer sig åt, som du förväntar dig (`(/ 7 2)` är 3).
- **Inbyggda funktioner:** matematik, listor (`car`, `cdr` med familj, `assoc`, `nth`, `member`, `subst`, `append`…), strängar (`strcat`, `substr`, `strcase`, `wcmatch`…), konverteringar (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometri (`polar`, `distance`, `angle`, `inters`) och filer (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Kommandon:** `(defun c:NAME …)` skapar ett kommando. `(command …)` och `(command-s …)` kör CadCrafts egna kommandon, med `pause` för ditt svar.
- **Prompter:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` med `initget`-nyckelord, `entsel`, `nentsel` och `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, med filterlistor och `-4`-tester).
- **Objekt som listor:** `entget`, `entmod`, `entmake` (block också), `entdel`, `entlast`, `entnext` (en blockreferens attribut kommer efter den som ATTRIB, sedan en SEQEND, så att attributrutiner fungerar), `handent`, markeringsmängder, `tblsearch` och `tblnext`, `layoutlist`, `regapp`, `getvar` och `setvar` för de inställningar CadCraft har.
- **Dialogrutor:** `.dcl`-filer med `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Knappar, redigeringsfält, listrutor, popup-listor, växlar, radioknappar, rader, kolumner och lådor visas alla. En rutin som skriver sin dialogruta till en tillfällig fil fungerar också.
- **Objekt:** `vl-load-com` (den gör ingenting; inget behöver läsas in), `vl-`-funktionerna för listor och strängar, `vl-catch-all-apply`, samt `vla-get-…`- och `vla-put-…`-egenskaper, `vla-…`-metoder och `vlax-for` över samlingarna Blocks, Layers och Layouts, modellrum och blockdefinitioner, med varianter och säkra fält.

## Testade rutiner

CadCrafts tester kör en uppsättning rutiner skrivna för dessa kontroller (markeringsfilter, prompter, kommandon, objekt, felhanterare), och en populär rutin som folk bett om med namn: Lee Macs DelBlocks, med namn via dess dialogruta och genom att välja ett block. CadCraft har också sin egen {{cmd:DELBLOCKS}}, så du behöver ingen rutin för det.

## Finns inte ännu

- `grread` (att följa musen själv), reaktorer (`vlr-…`), kurvfunktioner (`vlax-curve-…`), ordböcker och utökad data (`dictsearch`, xdata i `entget` och `entmake`) samt Express Tools-funktionerna `acet-…`.
- Bilder och diabilder i dialogrutor visas som tomma rutor.
- Att köra ett annat program, Windows-registret och filer utanför dem du läser in: en rutin kan skriva och läsa sina egna tillfälliga filer, som finns kvar tills du stänger sidan.

När en rutin når något av detta visar kommandoraden ”no function definition” och namnet, och säger att CadCraft inte har det ännu.

## Fel att undvika

- **Ett kommando med samma namn som ett av CadCrafts.** CadCrafts eget kommando finns kvar. Kör rutinens som `(c:NAME)` på kommandoraden.
- **Att köra LISP du inte litar på.** En rutin kan ändra vad som helst i ritningen, men inget utanför den: den når inte dina filer, andra webbplatser eller andra appar.
