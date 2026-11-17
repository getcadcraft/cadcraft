---
title: Indlæs programmer (APPLOAD)
summary: Indlæs LISP-rutiner og deres dialogfiler, frigiv dem, indlæs dem igen fra historikken, og gem de rutiner, du bruger, i startpakken.
keywords: appload, ap, indlæs program, lisp, lsp, dcl, rutine, startpakke, frigiv, historik, slip, indlæs, tilpas, administrér
from: 89e0ee95
---

## Hvad du lærer

Hvordan du indlæser en LISP-rutine (en `.lsp`-fil), så dens kommandoer virker i CadCraft, hvordan du frigiver den, og hvordan du får den indlæst, hver gang CadCraft starter.

## Indlæs en rutine

1. Åbn {{ui:View}} › {{ui:More}} › {{ui:Load application…}}, eller skriv {{cmd:APPLOAD}} (eller `AP`) og tryk på {{key:Enter}}.
2. Klik på {{ui:Load a file…}} og vælg en eller flere `.lsp`-filer. En rutine, der åbner en dialog, kommer normalt med en `.dcl`-fil: vælg den også.
3. Dialogen siger, hvad hver fil lavede, for eksempel "Indlæste delblocks.lsp: 1 kommando, DELBLOCKS."
4. Klik på {{ui:Luk (C)}}, skriv rutinens kommando og tryk på {{key:Enter}}.

Du kan også slippe `.lsp`- og `.dcl`-filer på tegningen eller på dialogen Indlæs programmer: de indlæses med det samme.

Filen læses her, i din browser. Intet uploades.

:::tip
Tryk på {{key:Enter}} på en tom kommandolinje for at køre rutinens kommando igen, ligesom enhver anden kommando. Dine kommandoaliasser kan også nå den: se "Rediger kommandoaliasser".
:::

## Frigiv en rutine

Under {{ui:Indlæste programmer}} i {{ui:Load applications}} klikker du på {{ui:Unload}} ved siden af filen. Kommandoerne, den lavede, forsvinder, indtil du indlæser den igen.

## Indlæs en rutine, hver gang CadCraft starter

1. Indlæs rutinen.
2. Under {{ui:Indlæste programmer}} klikker du på {{ui:Add to Startup Suite}} ved siden af den.

Fra nu af indlæses den af sig selv, hver gang CadCraft starter i denne browser. For at stoppe det klikker du på {{ui:Remove}} ved siden af den under {{ui:Startup Suite}}.

Startpakken gemmer en kopi af hver fil i denne browsers lager. Hvis du ændrer rutinen, indlæser du den nye fil og tilføjer den igen.

## Indlæs acad.lsp og acaddoc.lsp fra en supportmappe (Studio)

I CadCraft Studio tager {{ui:Support folder}} i dialogen {{ui:Load applications}} en mappe på din computer. Klik på {{ui:Choose folder…}}. Når CadCraft starter, læser den `acad.lsp` og derefter `acaddoc.lsp` fra mappen (uanset store og små bogstaver i navnene), indlæser dem og indlæser derefter startpakken. `acaddoc.lsp` læses igen, hver gang en ny tegningsfane åbnes. Intet andet i mappen læses, og en fil over 2 MB springes over med en besked.

Hvis en fil definerer en funktion ved navn `S::STARTUP`, køres den én gang, efter filerne er indlæst (også efter startpakken). {{ui:Load now}} gør det samme på forespørgsel; {{ui:Clear}} glemmer mappen.

I browseren kan en side ikke gemme en mappe, så der er ingen supportmappe: brug startpakken ovenfor. Kompilerede `.fas`- og `.vlx`-filer og native programmer afvises fortsat.

## Indlæs en fil igen fra historikken

{{ui:History}} lister de filer, du har indlæst i denne browser, med den nyeste først. Klik på {{ui:Load}} ved siden af en for at indlæse den igen, uden at llede efter den på din computer.

## Filer CadCraft ikke kan indlæse

| Fil | Hvad den er | Hvad du gør |
|---|---|---|
| `.fas`, `.vlx` | kompileret eller beskyttet LISP | indlæs `.lsp`-kildekoden i stedet |
| `.arx`, `.crx`, `.dbx` | native Windows-programmer | der er ingen måde at køre dem i CadCraft |
| `.dvb` | et VBA-projekt | der er ingen måde at køre dem i CadCraft |
| `.craft`, `.lua`, `.py` | CraftScript-scripts | åbn dem i PartCraft's Script-arbejdsområde |

Dialogen Indlæs programmer siger, hvilken af disse en fil er, når du vælger den.

## Stop en rutine

Tryk på {{key:Esc}}. Ved en af rutinens forespørgsler annullerer Esc den, som rutinen forventer (dens egen oprydning kører). Hvis den er optaget og ikke spørger om noget, stopper Esc den med det samme og siger det; dine indlæste rutiner forbliver indlæst.

:::note
Alt, en rutine ændrer i tegningen, er ét trin: ét {{key:Mod+Z}} tager det hele tilbage.
:::
