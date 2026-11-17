---
title: Applicaties laden (APPLOAD)
summary: Laad LISP-routines en hun dialoogbestanden, ontlaad ze, laad ze opnieuw vanuit de geschiedenis en bewaar de routines die u gebruikt in de Opstartsuite.
keywords: appload, ap, applicatie laden, lisp, lsp, dcl, routine, opstartsuite, ontladen, geschiedenis, neerzetten, laden, aanpassen, beheren
from: 89e0ee95
---

## Wat u leert

Hoe u een LISP-routine (een `.lsp`-bestand) laadt zodat de opdrachten ervan in CadCraft werken, hoe u die ontlaadt, en hoe u kunt instellen dat ze bij elke start van CadCraft worden geladen.

## Een routine laden

1. Open {{ui:Weergave}} › {{ui:Meer}} › {{ui:Applicatie laden…}}, of typ {{cmd:APPLOAD}} (of `AP`) en druk op {{key:Enter}}.
2. Klik op {{ui:Een bestand laden…}} en kies een of meer `.lsp`-bestanden. Een routine die een dialoogvenster opent, komt meestal met een `.dcl`-bestand: kies dat ook.
3. Het dialoogvenster meldt wat elk bestand heeft gemaakt, bijvoorbeeld "Geladen delblocks.lsp: 1 opdracht, DELBLOCKS."
4. Klik op {{ui:Sluiten}}, typ de opdracht van de routine en druk op {{key:Enter}}.

U kunt `.lsp`- en `.dcl`-bestanden ook op de tekening of op het dialoogvenster {{ui:Applicaties laden}} neerzetten: ze worden meteen geladen.

Het bestand wordt hier gelezen, in uw browser. Er wordt niets geüpload.

:::tip
Druk op een lege opdrachtregel op {{key:Enter}} om de opdracht van de routine opnieuw uit te voeren, net als elke andere opdracht. Uw opdrachtaliassen kunnen er ook bij: zie "Opdrachtaliassen bewerken".
:::

## Een routine ontladen

In {{ui:Applicaties laden}}, onder {{ui:Geladen applicaties}}, klikt u naast het bestand op {{ui:Ontladen}}. De opdrachten die het heeft gemaakt, zijn weg totdat u het opnieuw laadt.

## Een routine bij elke start van CadCraft laden

1. Laad de routine.
2. Klik onder {{ui:Geladen applicaties}} naast de routine op {{ui:Toevoegen aan Opstartsuite}}.

Vanaf nu wordt ze vanzelf geladen wanneer CadCraft in deze browser start. Om dat te stoppen, klikt u naast de routine onder {{ui:Opstartsuite}} op {{ui:Verwijderen}}.

De Opstartsuite bewaart een kopie van elk bestand in de opslag van deze browser. Als u de routine wijzigt, laadt u het nieuwe bestand en voegt u het opnieuw toe.

## acad.lsp en acaddoc.lsp laden uit een ondersteuningsmap (Studio)

In CadCraft Studio neemt {{ui:Ondersteuningsmap}} in het dialoogvenster {{ui:Applicaties laden}} een map op uw computer. Klik op {{ui:Map kiezen…}}. Wanneer CadCraft start, leest het `acad.lsp` en daarna `acaddoc.lsp` uit die map (ongeacht de hoofdletters in de namen), laadt ze, en laadt daarna de Opstartsuite. `acaddoc.lsp` wordt elke keer opnieuw gelezen wanneer een nieuw tekeningtabblad opent. Niets anders in de map wordt gelezen, en een bestand groter dan 2 MB wordt overgeslagen met een melding.

Als een bestand een functie met de naam `S::STARTUP` definieert, wordt die één keer uitgevoerd nadat de bestanden zijn geladen (ook na de Opstartsuite). {{ui:Nu laden}} doet op verzoek hetzelfde; {{ui:Wissen}} vergeet de map.

In de browser kan een pagina geen map onthouden, dus er is geen ondersteuningsmap: gebruik hierboven de Opstartsuite. Gecompileerde `.fas`- en `.vlx`-bestanden en native programma's worden nog steeds geweigerd.

## Een bestand opnieuw laden uit de geschiedenis

{{ui:Geschiedenis}} toont de bestanden die u in deze browser hebt geladen, nieuwste eerst. Klik naast een bestand op {{ui:Laden}} om het opnieuw te laden, zonder het op uw computer te zoeken.

## Bestanden die CadCraft niet kan laden

| Bestand | Wat het is | Wat u moet doen |
|---|---|---|
| `.fas`, `.vlx` | gecompileerde of beveiligde LISP | laad in plaats daarvan de `.lsp`-bron |
| `.arx`, `.crx`, `.dbx` | native Windows-programma's | deze kunnen in CadCraft niet worden uitgevoerd |
| `.dvb` | een VBA-project | deze kunnen in CadCraft niet worden uitgevoerd |
| `.craft`, `.lua`, `.py` | CraftScript-scripts | open ze in de scriptwerkomgeving van PartCraft |

Het dialoogvenster Applicaties laden meldt bij het kiezen om welk type bestand het gaat.

## Een routine stoppen

Druk op {{key:Esc}}. Bij een van de vragen van de routine annuleert Esc de routine op de manier die de routine verwacht (de eigen opruiming wordt uitgevoerd). Als ze bezig is en niets vraagt, stopt Esc ze meteen en meldt dat; uw geladen routines blijven geladen.

:::note
Alles wat een routine in de tekening wijzigt, is één stap: één {{key:Mod+Z}} neemt het allemaal terug.
:::
