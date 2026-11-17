---
title: Spajanje izmjena dviju osoba na jednom crtežu
summary: Neka git, Fossil ili Mercurial spoje dvije kopije DWG ili DXF datoteke objekt po objekt, koristeći ključ koji CadCraft čuva na svakom objektu.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, razlika, sukob, trostrano, cadcraft spajanje, ključ, gitattributes, DWG, DXF
from: 71482bf9
---

Dvije osobe uređuju isti crtež. Ako su promijenile različite objekte, spajanje može biti automatsko: ništa nije potrebno ponovno raditi ručno.

## Što to omogućuje

CadCraft svakom objektu koji nacrtate daje kratak **ključ** koji se nikad ne mijenja i nikad se ne dodjeljuje dvama objektima. Sprema se uz objekt u DWG ili DXF (kao dodatni podaci koje drugi programi čuvaju). Spajanje traži objekte po tom ključu, a ne po njihovu položaju u datoteci, jer svaki program pri spremanju ponovno numerira položaje. Isključite to u {{ui:Postavke}} › CadCraft › Datoteke prilagođene spajanju ako nikad ne spajate; datoteke su oko 10 posto manje.

Crtež spremljen prije nego što su ključevi postojali i dalje se spaja: njegovi objekti dobivaju ključ prema mjestu u datoteci, isti za svakoga tko ga otvori.

## Postavljanje

Git treba dva retka jednom po repozitoriju:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# jednom, na svakom računalu
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita, pokrenite ga ručno: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial uzimaju iste tri datoteke u svojoj postavci alata za spajanje.

## Pravila

- Objekt promijenjen samo s jedne strane preuzima se. Ista promjena s obje strane preuzima se jednom.
- Isto svojstvo promijenjeno na dva načina je **sukob**: zadržava se vaša strana, a izvješće navodi obje vrijednosti. Otvorite rezultat, pogledajte taj objekt i ispravite ga ručno.
- Objekt dodan s bilo koje strane zadržava se. Objekt uklonjen s jedne strane, a nedirnut s druge, uklanja se. Uklonjen s jedne strane, a promijenjen s druge: uklanja se i prijavljuje.
- Slojevi, blokovi, stilovi teksta i kota, listovi i imenovani pogledi spajaju se na isti način. Ograničenja slijede objekte koje imenuju.
- Rezultat se zapisuje u istom formatu i verziji datoteke kao vaša.

Ne spaja se: redoslijed u kojem se objekti crtaju je vaš, zatim objekti koje je druga strana dodala. Promjene iste definicije bloka s obje strane su sukob i nikad se ne miješaju. Ništa se ne šalje; sve se izvršava na vašem računalu.
