---
title: Spoji dvije izmjene jednog crteža
summary: Pusti git, Fossil ili Mercurial da spoje dvije kopije DWG ili DXF datoteke objekat po objekat, koristeći ključ koji CadCraft čuva na svakom objektu.
keywords: spajanje, merge, git, fossil, mercurial, kontrola verzija, version control, razlika, diff, konflikt, trosmjerno, three-way, cadcraft spajanje, ključ, gitattributes, DWG, DXF
from: 71482bf9
---

Dvije osobe mijenjaju isti crtež. Ako su promijenile različite objekte, spajanje može biti automatsko: ništa ne treba ponovo raditi ručno.

## Šta to omogućava

CadCraft daje svakom objektu koji nacrtaš kratak **ključ** koji se nikada ne mijenja i nikada se ne daje dvama objektima. Čuva se uz objekat u DWG ili DXF datoteci (kao dodatni podatak koji drugi programi čuvaju). Spajanje traži objekte po tom ključu, a ne po njihovom položaju u datoteci, jer svaki program renumeriše položaje kada snima. Isključi to u {{ui:Postavke}} › CadCraft › Datoteke prijateljske spajanju ako nikada ne spajaš; datoteke su oko 10 posto manje.

Crtež snimljen prije nego što su ključevi postojali i dalje se spaja: njegovi objekti dobijaju ključ iz svog mjesta u datoteci, isti za svakoga ko ga otvori.

## Postavi

Git treba dva reda jednom po repozitoriju:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# jednom, na svakom računaru
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita, pokreni ručno: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial uzimaju ista tri fajla u svojoj postavci alata za spajanje.

## Pravila

- Objekat promijenjen samo s jedne strane se uzima. Ista promjena s obje strane se uzima jednom.
- Isto svojstvo promijenjeno na dva načina je **konflikt**: tvoja strana ostaje, a izvještaj navodi obje vrijednosti. Otvori rezultat, pogledaj taj objekat i popravi ga ručno.
- Objekat dodan s bilo koje strane se zadržava. Objekat uklonjen s jedne strane, a nepromijenjen s druge, se uklanja. Uklonjen s jedne strane, a promijenjen s druge: uklonjen i prijavljen.
- Slojevi, blokovi, stilovi teksta i kota, listovi i imenovani pogledi se spajaju na isti način. Ograničenja prate objekte koje imenuju.
- Rezultat se piše u istom formatu i verziji datoteke kao tvoja.

Ne spaja se: redoslijed kojim se objekti crtaju je tvoj, pa zatim objekti koje je druga strana dodala. Promjene iste definicije bloka s obje strane su konflikt, nikada se ne miješaju. Ništa se ne šalje; sve se izvršava na tvom računaru.
