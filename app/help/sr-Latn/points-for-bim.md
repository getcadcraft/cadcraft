---
title: Tačke za BIM programe
summary: Izvezi tačke, i tačke umetanja blokova sa opisom, u CSV ili TXT fajl koji BIM i geodetski programi uvoze.
keywords: exportpoints, izvoz tačaka, tačke, csv, txt, pnezd, penzd, xyz, geodetske tačke, koordinate, bim, obeležavanje na terenu, fajl tačaka, sever, istok, visina
from: d80e2d53
---

## Šta ćeš napraviti

Fajl tačaka: jedan red po tački, sa njenim brojem, severom, istokom, visinom i opisom, koje BIM programi (među njima Revit i Archicad) i geodetski softver mogu da uvezu da postave geodetske tačke, oznake lokacije ili opremu.

## Izvezi tačke

1. Izaberi tačke i reference blokova čije tačke umetanja želiš, ili ne izaberi ništa da uzmeš svaku tačku.
2. Ukucaj {{cmd:EXPORTPOINTS}} (ili `EXPPTS`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izvezi tačke}}) i pritisni {{key:Enter}}
   (pritisni {{key:Enter}} ponovo kod `Izaberi tačke i blokove` kad ništa nije izabrano).
3. Kad izabereš blokove sa atributima, CadCraft navodi njihove oznake: ukucaj onu čija je vrednost opis (na primer `ITEM`), ili bilo šta drugo da se za opis koristi naziv svakog bloka.
4. Izaberi kolone: `PNEZD` (tačka, sever, istok, visina, opis: uobičajena), `PENZD` (istok pre severa) ili `XYZ` (samo koordinate).
5. Izaberi jedinice: `Kako je nacrtano (D)`, ili `Metri (M)` ili `Stope (F)` (samo kad su jedinice crteža postavljene: Svojstva › {{ui:Jedinice}} bez ičega izabranog).
6. Kad je postavljen UCS, izaberi `Svetske (W)` ili `U` UCS koordinate (vidi [UCS i zakrenut pogled](topic:ucs-and-turned-view)).
7. Izaberi `Zarez (C)` za `.csv` sa zarezima kao razdvajačem ili `T` za `.txt` sa tabulatorima, i broj prve tačke.

Fajl se preuzima kao `<crtež>-points.csv` (ili `.txt`), a istorija kaže koliko tačaka sadrži.

## Šta je u fajlu

- Jedna tačka po redu, na kraju prelom reda (CR LF), tri decimale.
- Visina tačke je njena Z (0 kad je nema). Tačka bloka je njegova tačka umetanja.
- Opis koji sadrži zarez (ili tabulator u TXT-u) ili navodnik stavlja se u dvostruke navodnike, sa udvojenim navodnicima.
- Format je onaj koji CivilCraft čita i piše, pa se fajl tamo takođe otvara kao tačke.

## Česte greške

- Nudi se samo `Kako je nacrtano (D)` za jedinice: crtež nema postavljene jedinice. Postavi ih, ili preračunaj u drugom programu.
- Tačke su daleko od onoga što očekuješ u drugom programu: izvezi svetske koordinate (`Svetske (W)`), ili UCS koji koristi geodetska tačka drugog programa (`U`).
