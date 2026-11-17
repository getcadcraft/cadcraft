---
title: Postavljanje granica crteža
summary: LIMITS postavlja pravougaonik za crtež: mreža ga popunjava, ZOOM Sve ga prikazuje, a uz uključene granice tačke van njega se odbijaju. Čuvaju se u DWG i DXF datotekama.
keywords: granice, granice crteža, LIMITS, LIMMIN, LIMMAX, LIMCHECK, mreža, van granica, veličina lista, područje crtanja, zoom sve, okvir
from: 9e97b30d
---

**Granice crteža** su pravougaonik koji kaže koliko je crtež zamišljen da bude: područje u kojem planirate da crtate, kao list 420 × 297. Novi crtež ih nema, pa su mreža i područje crtanja neograničeni, kao ranije.

## Postavljanje

Otkucajte {{cmd:LIMITS}} i odgovorite:

- `Zadaj donji levi ugao ili [ON/OFF] <0,0>`: tačka, ili {{key:Enter}} da zadržite trenutnu.
- `Zadaj gornji desni ugao <420,297>`: tačka, ili {{key:Enter}} da zadržite trenutnu. Mora biti iznad i desno od prve.

Ili otkucajte `ON` ili `OFF` na prvo pitanje da uključite ili isključite proveru bez menjanja pravougaonika. Postavljanje uglova je jedan korak opozivanja, i svako ON i OFF je takođe.

## Šta rade

- **Mreža popunjava granice** i staje na njihovoj ivici. To je slika područja, pa uključite {{ui:Grid}} da je vidite.
- **ZOOM Sve** ({{cmd:ZOOM}}, pa {{ui:All}}) prikazuje granice i crtež zajedno; {{ui:Extents}} i dalje prikazuje samo crtež.
- **Uz uključene granice ON**, tačka koju otkucate ili kliknete van njih se odbija uz `**Van granica`, a upit ostaje. Obuhvata naredbe koje prave objekte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, naredbe kota i još nekoliko. Naredbe koje samo pomeraju, biraju ili mere nisu ograničene, kao ni lepljenje, prevlačenje ručice ni objekat koji napravi LISP rutina: granice su vodič za crtanje, a ne zid. Uz granice OFF ništa se ne odbija.
- Objekti koji su već van granica ostaju tamo gde jesu.

## U datotekama i LISP-u

Čuvaju se u DWG i DXF kao `$LIMMIN`, `$LIMMAX` i `$LIMCHECK`. Datoteka iz drugog programa koja ima samo njegove podrazumevane granice (0,0 do 12,9 ili 420,297, provera isključena) otvara se bez njih, pa se njena mreža ne sabija u mali pravougaonik; datoteka sa sopstvenim granicama ili uključenom proverom ih zadržava. U LISP-u, `(getvar "LIMMIN")`, `LIMMAX` i `LIMCHECK` ih čitaju, a `setvar` upisuje, kao jedan korak opozivanja.

Granice pripadaju modelu. List (raspored) ima sopstvenu veličinu papira.
