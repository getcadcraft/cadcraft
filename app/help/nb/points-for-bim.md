---
title: Punkter for BIM-programmer
summary: Eksporter punkter, og innsettingspunktene til blokker med en beskrivelse, til en CSV- eller TXT-fil som BIM- og oppmålingsprogrammer importerer.
keywords: exportpoints, eksporter punkter, punkter, csv, txt, pnezd, penzd, xyz, oppmålingspunkter, koordinater, bim, utsetting, punktfil, nord, øst, høyde
from: d80e2d53
---

## Det du lager

En punktfil: én linje per punkt, med nummer, nord, øst, høyde og beskrivelse, som BIM-programmer (blant dem Revit og Archicad) og oppmålingsprogramvare kan importere for å plassere oppmålingspunkter, stedsmarkører eller utstyr.

## Eksporter punktene

1. Velg punktene og blokkreferansene du vil ha innsettingspunktene til, eller velg ingenting for å ta alle punktene.
2. Skriv {{cmd:EXPORTPOINTS}} (eller `EXPPTS`, eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Eksporter punkter}}) og trykk {{key:Enter}} (trykk {{key:Enter}} igjen ved `Velg punkter og blokker` når ingenting ble valgt).
3. Når du valgte blokker med attributter, lister CadCraft taggene deres: skriv den taggen hvis verdi er beskrivelsen (for eksempel `ITEM`), eller noe annet for å bruke hver blokks navn.
4. Velg kolonnene: `PNEZD` (punkt, nord, øst, høyde, beskrivelse: den vanlige), `PENZD` (øst før nord) eller `XYZ` (bare koordinatene).
5. Velg enhetene: `D` som tegnet, eller `M` meter eller `F` fot (bare når tegningens enheter er satt: Egenskaper › {{ui:Enheter}} med ingenting valgt).
6. Med et BKS satt, velg `W` verden eller `U` BKS-koordinater (se [BKS og en dreid visning](topic:ucs-and-turned-view)).
7. Velg `C` for en kommaseparert `.csv`-fil eller `T` for en tabulatorseparert `.txt`-fil, og det første punktnummeret.

Filen lastes ned som `<drawing>-points.csv` (eller `.txt`), og historikken sier hvor mange punkter den inneholder.

## Hva som er i filen

- Ett punkt per linje, avsluttet med linjeskift (CR LF), tre desimaler.
- Et punkts høyde er dens Z (0 når den ikke har en). Et blokkpunkt er dens innsettingspunkt.
- En beskrivelse som inneholder komma (eller tabulator i en TXT) eller anførselstegn, settes i doble anførselstegn, med anførselstegnene doblet.
- Formatet er det CivilCraft leser og skriver, så filen åpnes også der som punkter.

## Vanlige feil

- Bare `D` tilbys for enhetene: tegningen har ingen enheter satt. Sett dem, eller konverter i det andre programmet.
- Punktene er langt unna der du forventer i det andre programmet: eksporter verdenskoordinater (`W`), eller BKS-et som det andre programmets oppmålingspunkt bruker (`U`).
