---
title: Tačke za BIM programe
summary: Izvezi tačke i tačke umetanja blokova s opisom u CSV ili TXT datoteku koju BIM programi i softver za geodetsko snimanje uvoze.
keywords: exportpoints, izvezi tačke, tačke, csv, txt, pnezd, penzd, xyz, geodetske tačke, koordinate, bim, iskolčavanje, datoteka tačaka, sjever, istok, kota
from: d80e2d53
---

## Šta ćeš napraviti

Datoteku tačaka: jedan red po tački, sa njenim brojem, sjeverom, istokom, kotom i opisom, koju BIM programi (među kojima su Revit i Archicad) i softver za geodetsko snimanje mogu uvesti da postave geodetske tačke, oznake lokacije ili opremu.

## Izvezi tačke

1. Odaberi tačke i blokove čije tačke umetanja želiš, ili ništa da uzmeš sve tačke.
2. Ukucaj {{cmd:EXPORTPOINTS}} (ili `EXPPTS`, ili {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) i pritisni {{key:Enter}} (pritisni {{key:Enter}} opet kod `Odaberi tačke i blokove` kad ništa nije odabrano).
3. Kad izabereš blokove sa atributima, CadCraft navodi njihove oznake: ukucaj onu čija je vrijednost opis (na primjer `ITEM`), ili bilo šta drugo da za opis uzme naziv svakog bloka.
4. Izaberi kolone: `PNEZD` (tačka, sjever, istok, kota, opis: uobičajena), `PENZD` (istok prije sjevera) ili `XYZ` (samo koordinate).
5. Izaberi jedinice: `[Kako je nacrtano (D)]`, ili `M` metri ili `[Stope (F)]` (samo kad su jedinice crteža postavljene: {{ui:Properties}} › {{ui:Units}} kad ništa nije odabrano).
6. Kad je postavljen UCS, izaberi `[Svjetske (W)]` ili `[Korisnički (U)]` koordinate (vidi [UCS i zakrenut pogled](topic:ucs-and-turned-view)).
7. Izaberi `[Zarezom odvojen (C)]` `.csv` ili `T` tabom odvojen `.txt`, i prvi broj tačke.

Datoteka se preuzima kao `<drawing>-points.csv` (ili `.txt`), a historija kaže koliko tačaka sadrži.

## Šta je u datoteci

- Jedna tačka po redu, sa prelaskom u novi red (CR LF), tri decimale.
- Kota tačke je njena Z (0 kad je nema). Tačka bloka je njegova tačka umetanja.
- Opis koji sadrži zarez (ili tab u TXT) ili navodnik stavlja se u dvostruke navodnike, sa udvostručenim navodnicima.
- Format je onaj koji CivilCraft čita i piše, pa se datoteka tamo također otvara kao tačke.

## Česte greške

- Za jedinice nudi se samo `[Kako je nacrtano (D)]`: crtež nema postavljene jedinice. Postavi ih, ili pretvori u drugom programu.
- Tačke su daleko od očekivanog mjesta u drugom programu: izvezi svjetske koordinate (`W`), ili UCS koji koristi geodetska tačka drugog programa (`U`).
