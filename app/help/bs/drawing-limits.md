---
title: Postavljanje granica crteža
summary: LIMITS postavlja pravougaonik za crtež: mreža ga popunjava, ZOOM All ga prikazuje, a uz uključene granice, tačke izvan njega se odbijaju. Čuvaju se u DWG i DXF datotekama.
keywords: granice, granice crteža, LIMITS, LIMMIN, LIMMAX, LIMCHECK, mreža, izvan granica, veličina lista, područje crtanja, zoom all, ograda
from: 9e97b30d
---

**Granice crteža** su pravougaonik koji kaže koliko je crtež zamišljen da bude: područje u kome planirate crtati, kao list 420 × 297. Novi crtež ih nema, pa su mreža i područje crtanja neograničeni, kao i ranije.

## Postavite ih

Upišite {{cmd:LIMITS}} i odgovorite:

- `Specify lower left corner or [ON/OFF] <0,0>`: tačka, ili {{key:Enter}} da zadržite trenutnu. › "Zadaj donji lijevi ugao ili [ON/OFF] <0,0>"
- `Specify upper right corner <420,297>`: tačka, ili {{key:Enter}} da zadržite trenutnu. Mora biti iznad i desno od prve. › "Zadaj gornji desni ugao <420,297>"

Ili upišite `ON` ili `OFF` na prvo pitanje da uključite ili isključite provjeru bez mijenjanja pravougaonika. Postavljanje uglova je jedan korak poništavanja, i svako ON i OFF je također.

## Šta rade

- **Mreža ispunjava granice** i staje na njihovoj ivici. To je slika područja, pa uključite {{ui:Grid}} › "Mreža" da je vidite.
- **ZOOM All** ({{cmd:ZOOM}}, pa {{ui:All}} › "Sve") prikazuje granice i crtež zajedno; {{ui:Extents}} › "Granice" i dalje prikazuje samo crtež.
- **Uz granice UKLJUČENE**, tačka koju upišete ili kliknete izvan njih se odbija uz `**Izvan granica`, a upit ostaje. To pokriva naredbe koje prave objekte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, naredbe kota i još nekoliko. Naredbe koje samo pomjeraju, odabiru ili mjere nisu ograničene, kao ni lijepljenje, prevlačenje uhvata ni objekat koji stvara LISP rutina: granice su vodič za crtanje, a ne zid. Uz granice ISKLJUČENE ništa se ne odbija.
- Objekti koji su već izvan granica ostaju gdje jesu.

## U datotekama i u LISP-u

Čuvaju se u DWG i DXF kao `$LIMMIN`, `$LIMMAX` i `$LIMCHECK`. Datoteka iz drugog programa koja ima samo zadane granice tog programa (0,0 do 12,9 ili 420,297, provjera isključena) otvara se bez njih, pa se njena mreža ne steže u malen pravougaonik; datoteka sa sopstvenim granicama ili uključenom provjerom ih zadržava. U LISP-u, `(getvar "LIMMIN")`, `LIMMAX` i `LIMCHECK` ih čitaju, a `setvar` ih zapisuje, kao jedan korak poništavanja.

Granice pripadaju modelu. List (raspored) ima svoju veličinu papira.
