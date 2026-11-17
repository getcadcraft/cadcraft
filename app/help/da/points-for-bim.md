---
title: Punkter til BIM-programmer
summary: Eksportér punkter, og blokkenes indsætningspunkter med en beskrivelse, til en CSV- eller TXT-fil, som BIM- og opmålingsprogrammer kan importere.
keywords: exportpoints, eksportér punkter, punkter, csv, txt, pnezd, penzd, xyz, opmålingspunkter, koordinater, bim, udsætning, punktfil, nord, øst, kote
from: d80e2d53
---

## Hvad du skal lave

En punktfil: én linje pr. punkt, med dets nummer, nord, øst, kote og beskrivelse, som BIM-programmer (blandt dem Revit og Archicad) og opmålingssoftware kan importere for at placere opmålingspunkter, stedmarkeringer eller udstyr.

## Eksportér punkterne

1. Vælg punkterne og de blokreferencer, hvis indsætningspunkter du vil have, eller vælg intet for at tage alle punkter.
2. Skriv {{cmd:EXPORTPOINTS}} (eller `EXPPTS`, eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Eksportér punkter}}) og tryk {{key:Enter}} (tryk {{key:Enter}} igen ved `Vælg punkter og blokke`, når intet var valgt).
3. Når du har valgt blokke med attributter, lister CadCraft deres tags: skriv det tag, hvis værdi er beskrivelsen (f.eks. `ITEM`), eller noget andet for at bruge hver blokks navn.
4. Vælg kolonnerne: `PNEZD` (punkt, nord, øst, kote, beskrivelse: den sædvanlige), `PENZD` (øst før nord) eller `XYZ` (kun koordinaterne).
5. Vælg enhederne: `D` som tegnet, `M` meter eller `F` fod (kun når tegningens enheder er sat: Egenskaber › {{ui:Enheder}} med intet valgt).
6. Når et UCS er sat, vælger du `W` verden eller `U` UCS-koordinater (se [UCS og en drejet visning](topic:ucs-and-turned-view)).
7. Vælg `C` for en kommasepareret `.csv` eller `T` for en tabulatorsepareret `.txt`, og det første punktnummer.

Filen downloades som `<drawing>-points.csv` (eller `.txt`), og historikken siger, hvor mange punkter den indeholder.

## Hvad der er i filen

- Ét punkt pr. linje, afsluttet med et linjeskift (CR LF), tre decimaler.
- Et punkts kote er dets Z (0, når det ikke har en). Et blokpunkt er dets indsætningspunkt.
- En beskrivelse, der indeholder et komma (eller et tabulatortegn i en TXT) eller et citationstegn, sættes i dobbelte anførselstegn, med dets anførselstegn fordoblet.
- Formatet er det, CivilCraft læser og skriver, så filen også åbnes der som punkter.

## Almindelige fejl

- Kun `D` tilbydes for enhederne: tegningen har ingen enheder sat. Sæt dem, eller konverter i det andet program.
- Punkterne er langt fra, hvor du forventer dem i det andet program: eksportér verdenskoordinater (`W`), eller det UCS, det andet programs opmålingspunkt bruger (`U`).
