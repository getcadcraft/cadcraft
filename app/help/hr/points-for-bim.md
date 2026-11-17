---
title: Točke za BIM programe
summary: Izvezite točke i točke umetanja blokova s opisom u CSV ili TXT datoteku koju uvoze BIM i geodetski programi.
keywords: exportpoints, export points, točke, izvezi točke, csv, txt, pnezd, penzd, xyz, geodetske točke, koordinate, bim, iskolčavanje, datoteka točaka, sjever, istok, kota
from: d80e2d53
---

## Što ćete napraviti

Datoteku točaka: jedan redak po točki, s njezinim brojem, sjeverom, istokom, kotom i opisom, koju BIM programi (među kojima su Revit i Archicad) i geodetski softver mogu uvesti da postave geodetske točke, oznake na lokaciji ili opremu.

## Izvezite točke

1. Odaberite točke i blokove čije točke umetanja želite, ili ne odaberite ništa da uzmete sve točke.
2. Upišite {{cmd:EXPORTPOINTS}} (ili `EXPPTS`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izvezi točke}}) i pritisnite {{key:Enter}} (ponovno pritisnite {{key:Enter}} kod `Odaberite točke i blokove` kad ništa nije odabrano).
3. Kad odaberete blokove s atributima, CadCraft navodi njihove oznake: upišite onu čija je vrijednost opis (na primjer `ITEM`), ili bilo što drugo da se za opis koristi naziv svakog bloka.
4. Odaberite stupce: `PNEZD` (točka, sjever, istok, kota, opis: uobičajen izbor), `PENZD` (istok prije sjevera) ili `XYZ` (samo koordinate).
5. Odaberite jedinice: `D` kako je nacrtano, ili `M` metre ili `F` stope (samo kad su jedinice crteža postavljene: Svojstva › {{ui:Jedinice}} bez odabira).
6. Uz postavljen UCS, odaberite `W` svjetske ili `U` UCS koordinate (vidi [UCS i zakrenuti pogled](topic:ucs-and-turned-view)).
7. Odaberite `C` za `.csv` odvojen zarezima ili `T` za `.txt` odvojen tabulatorom, te broj prve točke.

Datoteka se preuzima kao `<drawing>-points.csv` (ili `.txt`), a povijest javlja koliko točaka sadrži.

## Što je u datoteci

- Jedna točka po retku, završen prijelazom retka (CR LF), tri decimale.
- Kota točke je njezin Z (0 kad ga nema). Točka bloka je njegova točka umetanja.
- Opis koji sadrži zarez (ili tabulator u TXT-u) ili navodnik stavlja se u dvostruke navodnike, s udvostručenim navodnicima.
- Format je onaj koji CivilCraft čita i piše, pa se datoteka tamo također otvara kao točke.

## Česte greške

- Za jedinice se nudi samo `D`: crtež nema postavljene jedinice. Postavite ih ili pretvorite u drugom programu.
- Točke su daleko od onoga što očekujete u drugom programu: izvezite svjetske koordinate (`W`) ili UCS koji koristi geodetska točka drugog programa (`U`).
