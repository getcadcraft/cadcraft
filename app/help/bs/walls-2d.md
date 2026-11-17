---
title: Crtaj pametne zidove, vrata i prozore u 2D
summary: Crtaj zidove kao polilinije, čisto ih spajaj i ubaci vrata i prozore koji se pomjeraju sa zidom. Sve 2D, bez 3D modela.
keywords: zid, zidovi, WALL, WA, vrata, DOOR, DR, prozor, WINDOW, WN, DELOPENING, pametni zid, osnova sprata, otvaranje krila, šarka, otvor
from: 45845d49
---

Zidovi ovdje su 2D objekti za crtanje. Ne prave 3D model, pa osnova ostaje laka kao linijski crtež. Za model zgrade koristi BimCraft.

## Crtaj zidove

Ukucaj `WALL` (`WA`) ili izaberi {{ui:Zid}} u meniju {{ui:Više}} grupe {{ui:Crtanje}}, pa klikaj tačke kao za polilniju. Pritisni {{key:Enter}} za kraj ili ukucaj `C` da zatvoriš prostoriju.

- `T` postavlja debljinu.
- `J` određuje čemu prate tvoji klikovi: središtu zida, ili njegovoj lijevoj ili desnoj strani.
- `F` postavlja ispunu: bez, puna ili šrafura.

Uglovi se sami spajaju kao kosi spoj. Zid koji se završava unutar debljine drugog zida spaja se u čist T spoj, a zidovi koji se sijeku otvaraju se jedan prema drugom. Spojevi se čuvaju uz zidove. Za pravougaonike, poligone, lukove, dijeljenje, zaključavanja i ostalo pogledaj "Oblici zidova, presjeci, odmaci i zaključavanja za 2D zidove".

## Dodaj vrata i prozore

Ukucaj `DOOR` (`DR`) ili `WINDOW` (`WN`) i klikni na zid. Vrata se otvaraju na onu stranu zida na koju klikneš. `W` postavlja širinu, `Y` tip, a `H` stranu šarke. Nastavi klikati da postaviš još, a pritisni {{key:Enter}} za kraj. Vrata mogu biti jednokrilna, dvokrilna, klizna ili otvor bez krila. Prozori mogu biti fiksni, krilni ili klizni.

## Mijenjaj ih

Izaberi zid da vidiš njegova hvatišta:

- Krajnja hvatišta rastežu zid. Zidovi spojeni na njega prate.
- Srednje hvatište pomjera zid.
- Hvatište na otvoru kliže ga duž zida.
- Strelice okreću šarku vrata i smjer otvaranja.

Svojstva prikazuju debljinu, ispunu i svaki otvor: tip, širinu, položaj, šarku, smjer otvaranja, da li je prikazan otvoren ili zatvoren, i {{ui:Ukloni}}. `DELOPENING` uklanja otvor najbliži mjestu gdje klikneš.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` i `ERASE` rade kao obično. Vrata i prozori idu sa svojim zidom, spojeni zidovi zadržavaju spojeve, a jedno {{ui:Poništi}} vraća sve.

## U drugim programima

Svaki zid se čuva kao običan blok, pa ga drugi CAD programi ispravno prikazuju i mogu ga pomjerati, ali ga ne mogu uređivati kao zid. `EXPLODE` pretvara zid u obične linije i lukove, i tada prestaje biti zid.
