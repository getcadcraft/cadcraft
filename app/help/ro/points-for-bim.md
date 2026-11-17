---
title: Puncte pentru programele BIM
summary: Exportați punctele, și punctele de inserare ale blocurilor cu o descriere, într-un fișier CSV sau TXT pe care le importă programele BIM și de topografie.
keywords: exportpoints, exportare puncte, puncte, csv, txt, pnezd, penzd, xyz, puncte topografice, coordonate, bim, trasare pe teren, fișier de puncte, nord, est, cotă
from: d80e2d53
---

## Ce veți realiza

Un fișier de puncte: câte o linie pentru fiecare punct, cu numărul său, nordul, estul, cota și descrierea, pe care programele BIM (printre care Revit și Archicad) și software-ul de topografie le pot importa pentru a plasa puncte topografice, repere de șantier sau echipamente.

## Exportarea punctelor

1. Selectați punctele și referințele de bloc ale căror puncte de inserare le doriți, sau nu selectați nimic ca să luați toate punctele.
2. Tastați {{cmd:EXPORTPOINTS}} (sau `EXPPTS`, sau {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) și apăsați {{key:Enter}} (apăsați din nou {{key:Enter}} la `Selectați puncte și blocuri` când nu s-a selectat nimic).
3. Când ați ales blocuri cu atribute, CadCraft listează etichetele lor: tastați-o pe cea a cărei valoare este descrierea (de exemplu `ITEM`), sau orice altceva ca să folosiți numele fiecărui bloc.
4. Alegeți coloanele: `PNEZD` (punct, nord, est, cotă, descriere: cea obișnuită), `PENZD` (estul înaintea nordului) sau `XYZ` (doar coordonatele).
5. Alegeți unitățile: `D` cum este desenat, sau `M` metri (m) ori `F` picioare (ft), doar când unitățile desenului sunt setate: Proprietăți › {{ui:Units}} cu nimic selectat.
6. Cu un UCS setat, alegeți `W` lume sau `U` coordonatele UCS (vezi [SCU și o vedere rotită](topic:ucs-and-turned-view)).
7. Alegeți `C` pentru un fișier `.csv` separat prin virgulă sau `T` pentru un `.txt` separat prin tabulator, și primul număr de punct.

Fișierul se descarcă ca `<drawing>-points.csv` (sau `.txt`), iar istoricul spune câte puncte conține.

## Ce este în fișier

- Un punct pe linie, încheiat cu un sfârșit de linie (CR LF), cu trei zecimale.
- Cota unui punct este Z-ul lui (0 dacă nu are). Punctul unui bloc este punctul lui de inserare.
- O descriere care conține o virgulă (sau un tabulator într-un TXT) ori o ghilimea este pusă între ghilimele duble, cu ghilimelele ei dublate.
- Formatul este cel pe care îl citește și îl scrie CivilCraft, deci fișierul se deschide și acolo ca puncte.

## Greșeli frecvente

- Pentru unități se oferă doar `D`: desenul nu are unități setate. Setați-le sau convertiți în celălalt program.
- Punctele sunt departe de unde vă așteptați în celălalt program: exportați coordonatele lumii (`W`) sau UCS-ul pe care îl folosește punctul topografic al celuilalt program (`U`).
