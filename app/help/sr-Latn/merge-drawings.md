---
title: Spajanje dve izmene jednog crteža
summary: Dozvoli da git, Fossil ili Mercurial spoje dve kopije DWG ili DXF datoteke objekat po objekat, koristeći ključ koji CadCraft čuva na svakom objektu.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, razlika, sukob, trostrano, cadcraft spajanje, ključ, gitattributes, DWG, DXF
from: 71482bf9
---

Dve osobe menjaju isti crtež. Ako su promenile različite objekte, spajanje može biti automatsko: nema ništa da se ponovi ručno.

## Šta to omogućava

CadCraft daje svakom objektu koji nacrtaš kratak **ključ** koji se nikad ne menja i nikad ne dodeljuje dvama objektima. Čuva se uz objekat u DWG ili DXF datoteci (kao dodatni podaci koje drugi programi čuvaju). Spajanje traži objekte po ključu, a ne po njihovom mestu u datoteci, jer svaki program pri čuvanju renumeriše mesta. Isključi u {{ui:Podešavanja}} › CadCraft › Datoteke pogodne za spajanje ako nikad ne spajaš; datoteke su oko 10 procenata manje.

Crtež sačuvan pre nego što su ključevi postojali i dalje se spaja: njegovi objekti dobijaju ključ iz svog mesta u datoteci, isti za svakoga ko ga otvori.

## Podešavanje

Git treba dva reda, jednom po repozitorijumu:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# jednom, na svakom računaru
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita, pokreni ručno: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial uzimaju ista tri fajla u svom podešavanju alata za spajanje.

## Pravila

- Objekat izmenjen samo sa jedne strane se uzima. Ista izmena sa obe strane uzima se jednom.
- Ista osobina promenjena na dva načina je **sukob**: tvoja strana ostaje, a izveštaj navodi obe vrednosti. Otvori rezultat, pogledaj taj objekat i popravi ga ručno.
- Objekat dodat sa bilo koje strane se čuva. Objekat uklonjen na jednoj strani, a nedirnut na drugoj, se uklanja. Uklonjen na jednoj, a izmenjen na drugoj: uklonjen je i prijavljen.
- Slojevi, blokovi, stilovi teksta i kota, listovi i imenovani pogledi spajaju se isto. Ograničenja prate objekte koje imenuju.
- Rezultat se piše u istom formatu datoteke i verziji kao tvoj.

Nije spojeno: redosled kojim se objekti crtaju ostaje tvoj, pa zatim objekti koje je dodala druga strana. Izmene iste definicije bloka sa obe strane su sukob i nikad se ne mešaju. Ništa se ne šalje; sve se izvršava na tvom računaru.
