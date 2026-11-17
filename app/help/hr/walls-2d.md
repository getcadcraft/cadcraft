---
title: Crtajte pametne zidove, vrata i prozore u 2D
summary: Crtajte zidove kao polilinije, pravilno ih spajajte i dodajte vrata i prozore koji se pomiču sa zidom. Sve u 2D, bez 3D modela.
keywords: zid, zidovi, WALL, WA, vrata, DOOR, DR, prozor, WINDOW, WN, DELOPENING, pametni zid, tlocrt, zakretanje, šarka, otvor
from: 45845d49
---

Zidovi ovdje su 2D objekti za crtanje. Ne izrađuju 3D model, pa tlocrt ostaje lagan kao crtež linija. Za model zgrade koristite BimCraft.

## Crtanje zidova

Upišite `WALL` (`WA`) ili odaberite {{ui:Zid}} u izborniku {{ui:Više}} grupe {{ui:Crtanje}}, zatim klikajte točke kao kod polilinije. Pritisnite {{key:Enter}} za završetak ili upišite `C` da zatvorite prostoriju.

- `T` postavlja debljinu.
- `J` određuje čemu slijede vaši klikovi: središtu zida ili njegovoj lijevoj ili desnoj strani.
- `F` postavlja ispunu: bez ispune, punu ili šrafuru.

Kutovi se sami spajaju koso. Zid koji završava unutar debljine drugog zida spaja se u čist T spoj, a zidovi koji se križaju otvore se jedan prema drugome. Spojevi se spremaju uz zidove. Za pravokutnike, poligone, lukove, rezanje, zaključavanja i ostalo vidi „Oblici zidova, rezovi, odmaci i zaključavanja za 2D zidove“.

## Dodavanje vrata i prozora

Upišite `DOOR` (`DR`) ili `WINDOW` (`WN`) i kliknite na zid. Vrata se otvaraju na stranu zida na koju kliknete. `W` postavlja širinu, `Y` vrstu, a `H` stranu šarke. Nastavite klikati za postavljanje više, a za završetak pritisnite {{key:Enter}}. Vrata mogu biti jednokrilna, dvokrilna, klizna ili otvor bez vrata. Prozori mogu biti fiksni, krilni ili klizni.

## Promjena

Odaberite zid da vidite njegove ručke:

- Krajnje ručke rastežu zid. Zidovi spojeni uz njega slijede ga.
- Srednja ručka pomiče zid.
- Ručka na otvoru kliže ga duž zida.
- Strelice preokreću šarku i smjer otvaranja vrata.

Svojstva prikazuju debljinu, ispunu i svaki otvor: vrstu, širinu, položaj, šarku, smjer otvaranja, je li prikazan otvoreno ili zatvoreno, te {{ui:Ukloni (R)}}. `DELOPENING` uklanja otvor najbliži mjestu na koje kliknete.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` i `ERASE` rade kao i obično. Vrata i prozori idu sa svojim zidom, spojeni zidovi zadržavaju svoje spojeve, a jedan {{ui:Poništi}} vraća sve.

## U drugim programima

Svaki zid se sprema kao obični blok, pa ga drugi CAD programi ispravno prikazuju i mogu ga pomicati, ali ga ne mogu uređivati kao zid. `EXPLODE` pretvara zid u obične linije i lukove, i on tada prestaje biti zid.
