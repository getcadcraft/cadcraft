---
title: Punkter för BIM-program
summary: Exportera punkter, och blockreferensernas infogningspunkter med en beskrivning, till en CSV- eller TXT-fil som BIM- och mätprogram importerar.
keywords: exportpoints, exportera punkter, punkter, csv, txt, pnezd, penzd, xyz, mätpunkter, koordinater, bim, utsättning, punktfil, nordvärde, östvärde, höjd
from: d80e2d53
---

## Vad du skapar

En punktfil: en rad per punkt, med dess nummer, nordvärde, östvärde, höjd och beskrivning, som BIM-program (Revit och Archicad bland dem) och mätprogramvara kan importera för att placera mätpunkter, platsmarkeringar eller utrustning.

## Exportera punkterna

1. Markera punkterna och blockreferenserna vars infogningspunkter du vill ha, eller markera inget för att ta alla punkter.
2. Skriv {{cmd:EXPORTPOINTS}} (eller `EXPPTS`, eller {{ui:Block}} › {{ui:Mer}} › {{ui:Exportera punkter}}) och tryck {{key:Enter}} (tryck {{key:Enter}} igen vid `Välj punkter och block` när inget var markerat).
3. När du valde block med attribut listar CadCraft deras taggar: skriv den vars värde är beskrivningen (till exempel `ITEM`), eller något annat för att använda varje blocks namn.
4. Välj kolumnerna: `PNEZD` (punkt, nordvärde, östvärde, höjd, beskrivning: den vanliga), `PENZD` (östvärde före nordvärde) eller `XYZ` (bara koordinaterna).
5. Välj enheterna: `D` som ritad, eller `M` meter eller `F` fot (bara när ritningens enheter är inställda: Egenskaper › {{ui:Enheter}} med inget markerat).
6. Med ett UCS inställt, välj `W` världskoordinater eller `U` UCS-koordinater (se [UCS och en vriden vy](topic:ucs-and-turned-view)).
7. Välj `C` för en kommaseparerad `.csv` eller `T` för en tabbseparerad `.txt`, och det första punktnumret.

Filen laddas ner som `<drawing>-points.csv` (eller `.txt`), och historiken säger hur många punkter den innehåller.

## Vad som finns i filen

- En punkt per rad, avslutad med en radbrytning (CR LF), tre decimaler.
- En punkts höjd är dess Z (0 när den saknar en). En blocks punkt är dess infogningspunkt.
- En beskrivning som innehåller ett komma (eller ett tabbtecken i en TXT) eller ett citattecken sätts inom dubbla citattecken, med sina citattecken dubblerade.
- Formatet är det som CivilCraft läser och skriver, så filen öppnas också där som punkter.

## Vanliga misstag

- Bara `D` erbjuds för enheterna: ritningen har inga enheter inställda. Ställ in dem, eller konvertera i det andra programmet.
- Punkterna ligger långt från där du väntar dig i det andra programmet: exportera världskoordinater (`W`), eller det UCS som det andra programmets mätpunkt använder (`U`).
