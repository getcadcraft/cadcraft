---
title: Pametni zidovi, vrata i prozori u 2D
summary: Crtajte zidove kao polilinije, lepo ih spajajte i ubacujte vrata i prozore koji se pomeraju sa zidom. Sve je u 2D, bez 3D modela.
keywords: zid, zidovi, WALL, WA, vrata, DOOR, DR, prozor, WINDOW, WN, DELOPENING, pametni zid, plan, krilo, šarka, otvor
from: 45845d49
---

Zidovi ovde su 2D crtački objekti. Ne prave 3D model, pa plan ostaje lak kao crtež linijama. Za model zgrade koristite BimCraft.

## Crtanje zidova

Ukucajte `WALL` (`WA`), ili izaberite {{ui:Zid}} u meniju {{ui:Više}} grupe {{ui:Crtanje}}, pa klikajte tačke kao za polilniju. Pritisnite {{key:Enter}} za kraj, ili ukucajte `C` da zatvorite prostoriju.

- `T` postavlja debljinu.
- `J` određuje čemu prate vaši klikovi: centru zida, ili njegovoj levoj ili desnoj strani.
- `F` postavlja ispunu: bez, punu ili šrafuru.

Uglovi se sami spajaju kosim spojem. Zid koji se završava unutar debljine drugog zida spaja se u čist T spoj, a zidovi koji se seku otvaraju se jedan prema drugom. Spojevi se čuvaju uz zidove. Za pravougaonike, poligone, lukove, deljenje, zaključavanja i ostalo pogledajte „Oblici, rezovi, pomeranja i zaključavanja zidova u 2D”.

## Dodavanje vrata i prozora

Ukucajte `DOOR` (`DR`) ili `WINDOW` (`WN`) i kliknite na zid. Vrata se otvaraju na stranu zida na koju kliknete. `W` postavlja širinu, `Y` tip, a `H` stranu šarke. Nastavite da klikćete da postavite još, i pritisnite {{key:Enter}} za kraj. Vrata mogu biti jednokrilna, dvokrilna, klizna ili otvoreni prolaz. Prozori mogu biti fiksni, krilni ili klizni.

## Izmena

Izaberite zid da vidite njegove ručice:

- Krajnje ručice razvlače zid. Zidovi spojeni za njega prate ga.
- Srednja ručica pomera zid.
- Ručica na otvoru kliže ga duž zida.
- Strelice preokreću šarku vrata i smer otvaranja.

Svojstva prikazuju debljinu, ispunu i svaki otvor: tip, širinu, položaj, šarku, smer otvaranja, da li je prikazan otvoren ili zatvoren, i {{ui:Ukloni (R)}}. `DELOPENING` uklanja otvor najbliži mestu na kome kliknete.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` i `ERASE` rade kao obično. Vrata i prozori idu sa svojim zidom, spojeni zidovi zadržavaju svoje spojeve, a jedan {{ui:Opozovi}} vraća sve.

## U drugim programima

Svaki zid se čuva kao običan blok, pa ga drugi CAD programi ispravno prikazuju i mogu da ga pomeraju, ali ne mogu da ga uređuju kao zid. `EXPLODE` pretvara zid u obične linije i lukove, i on tada prestaje da bude zid.
