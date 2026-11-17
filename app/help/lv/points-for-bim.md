---
title: Punkti BIM programmām
summary: Eksportējiet punktus un bloku ievietošanas punktus ar aprakstu uz CSV vai TXT failu, ko BIM un uzmērīšanas programmas importē.
keywords: exportpoints, eksportēt punktus, punkti, csv, txt, pnezd, penzd, xyz, uzmērīšanas punkti, koordinātas, bim, nospraušana, punktu fails, ziemeļi, austrumi, augstums
from: d80e2d53
---

## Ko jūs izveidosiet

Punktu failu: viena rindiņa katram punktam, ar numuru, ziemeļu, austrumu, augstuma un aprakstu. To var importēt BIM programmas (starp tām Revit un Archicad) un uzmērīšanas programmatūra, lai novietotu uzmērīšanas punktus, objektu marķierus vai iekārtas.

## Eksportēt punktus

1. Atlasiet punktus un bloku atsauces, kuru ievietošanas punktus vēlaties, vai neko neatlasiet, lai ņemtu visus punktus.
2. Ierakstiet {{cmd:EXPORTPOINTS}} (vai `EXPPTS`, vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Eksportēt punktus}}) un nospiediet {{key:Enter}}
   (`Atlasiet punktus un blokus`: nospiediet {{key:Enter}} vēlreiz, ja nekas nav atlasīts).
3. Ja izvēlējāties blokus ar atribūtiem, CadCraft uzskaita to tagus: ierakstiet to, kura vērtība ir apraksts (piemēram, `ITEM`), vai ko citu, lai katram blokam izmantotu tā nosaukumu.
4. Izvēlieties kolonnas: `PNEZD` (punkts, ziemeļi, austrumi, augstums, apraksts: parastā izvēle), `PENZD` (austrumi pirms ziemeļiem) vai `XYZ` (tikai koordinātes).
5. Izvēlieties vienības: `D` kā zīmēts, `M` metri vai `F` pēdas (tikai tad, ja rasējuma vienības ir iestatītas: Rekvizīti ›
   {{ui:Vienības}} ar neko neatlasītu).
6. Ja ir iestatīta UCS, izvēlieties `W` pasaules vai `U` UCS koordinātes (skatiet [UCS un pagriezts skats](topic:ucs-and-turned-view)).
7. Izvēlieties `C` komatiem atdalītam `.csv` failam vai `T` tabulēm atdalītam `.txt` failam, un pirmo punkta numuru.

Fails tiek lejupielādēts kā `<drawing>-points.csv` (vai `.txt`), un vēsture norāda, cik punktu tajā ir.

## Kas ir failā

- Viens punkts katrā rindiņā, beidzas ar rindas pārtraukumu (CR LF), trīs decimāldaļas.
- Punkta augstums ir tā Z (0, ja tā nav). Bloka punkts ir tā ievietošanas punkts.
- Apraksts, kas satur komatu (vai tabulu TXT failā) vai pēdiņas, tiek ievietots dubultpēdiņās, un tā pēdiņas tiek dubultotas.
- Formāts ir tas, ko lasa un raksta CivilCraft, tāpēc fails tur atveras arī kā punkti.

## Biežākās kļūdas

- Vienībām piedāvāts tikai `D`: rasējumam nav iestatītu vienību. Iestatiet tās vai pārvērtiet citā programmā.
- Punkti citā programmā ir tālu no tā, ko sagaidāt: eksportējiet pasaules koordinātes (`W`) vai to UCS, ko izmanto citas programmas uzmērīšanas punkts (`U`).
