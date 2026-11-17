---
title: Postavljanje granica crteža
summary: LIMITS postavlja pravokutnik za crtež: mreža ga ispunjava, ZOOM All ga prikazuje, a uz uključene granice točke izvan njega se odbijaju. Spremaju se u DWG i DXF datoteke.
keywords: granice, granice crteža, LIMITS, LIMMIN, LIMMAX, LIMCHECK, mreža, izvan granica, veličina lista, područje crtanja, zoom all, rub
from: 9e97b30d
---

**Granice crteža** su pravokutnik koji govori kolika je zamišljena veličina crteža: područje u kojem planirate crtati, kao što je list 420 × 297. Novi crtež nema granica, pa su mreža i područje crtanja neograničeni, kao i prije.

## Postavljanje

Upišite {{cmd:LIMITS}} i odgovorite:

- `Specify lower left corner or [ON/OFF] <0,0>`: točka, ili {{key:Enter}} za zadržavanje trenutne.
- `Specify upper right corner <420,297>`: točka, ili {{key:Enter}} za zadržavanje trenutne. Mora biti iznad i desno od prve.

Ili upišite `ON` ili `OFF` na prvo pitanje da biste uključili ili isključili provjeru bez promjene pravokutnika. Postavljanje kutova jedan je korak poništavanja, kao i svaki ON i OFF.

## Što rade

- **Mreža ispunjava granice** i staje na njihovom rubu. To je slika područja, pa uključite {{ui:Mreža}} da je vidite.
- **ZOOM All** ({{cmd:ZOOM}}, zatim {{ui:Sve}}) prikazuje granice i crtež zajedno; {{ui:Opseg}} i dalje prikazuje samo crtež.
- **Uz uključene granice (ON)** točka koju upišete ili kliknete izvan njih se odbija s `**Outside limits` i upit ostaje. To vrijedi za naredbe koje stvaraju objekte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, naredbe kotiranja i još neke. Naredbe koje samo pomiču, odabiru ili mjere nisu ograničene, kao ni lijepljenje, povlačenje ručke ni objekt koji stvara LISP rutina: granice su vodič za crtanje, a ne zid. Uz granice OFF ništa se ne odbija.
- Objekti koji su već izvan ostaju gdje jesu.

## U datotekama i LISP-u

Spremaju se u DWG i DXF kao `$LIMMIN`, `$LIMMAX` i `$LIMCHECK`. Datoteka iz drugog programa koja ima samo zadane granice tog programa (0,0 do 12,9 ili 420,297, provjera isključena) otvara se bez granica, pa se njezina mreža ne stišće u malen pravokutnik; datoteka s vlastitim granicama ili s uključenom provjerom ih zadržava. U LISP-u, `(getvar "LIMMIN")`, `LIMMAX` i `LIMCHECK` ih čitaju, a `setvar` upisuje, kao jedan korak poništavanja.

Granice pripadaju modelu. List (layout) ima vlastitu veličinu papira.
