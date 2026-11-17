---
title: PDF podloge i uvoz PDF-a
summary: Stavite stranicu PDF-a ispod crteža da je ocrtate i ispišete, ili pretvorite linije i tekst stranice u objekte crteža.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podloga, ocrtavanje, uvoz pdf, skeniranje, tlocrt, blijedjenje, isječak, slojevi, hvatanje, otvori pdf
from: aa301d0f
---

## Dva načina za uvoz stranice PDF-a

- **Priloži** ({{cmd:PDFATTACH}}) zadržava PDF kao sliku ispod vašeg crteža. Ocrtavate ga, hvatate se za njegove linije, blijedite ga, isječete, i ispisuje se zajedno s listom. Crtež pamti samo naziv datoteke.
- **Uvezi** ({{cmd:PDFIMPORT}}) pretvara linije, krivulje, ispune i tekst stranice u obične objekte crteža, na slojevima nazvanima po PDF-u. Možete ih uređivati, a PDF poslije nije potreban.

Otvaranje PDF-a s {{ui:Otvori}} pita koji od ta dva želite.

## Priložite stranicu

1. Upišite `PDFATTACH` (ili `PDFATT`) i odaberite PDF. Ako ima više stranica, upišite broj stranice.
2. Kliknite točku umetanja (donji lijevi kut stranice).
3. Pritisnite {{key:Enter}} za stvarnu veličinu stranice ili upišite mjerilo: jedinice crteža po točki PDF-a (točka je 1/72 inča, pa je u crtežu u milimetrima 0.3528).
4. Pritisnite {{key:Enter}} za bez zakreta ili upišite kut.

Stranica je objekt kao referenca bloka: pomičete je, zakrećete, skalirate, kopirate, brišete i stavljate na sloj. Isključite joj sloj i nestaje. Uvećajte i stranica se ponovno crta oštro.

## Ocrtajte je

Uz uključeno {{ui:Hvatanje}}, kursor se hvata za vlastite linije PDF-a: krajnje točke, polovišta i presjeke (i {{ui:Najbliže}} kad je to hvatanje uključeno). Tekst napisan kao slova na stranici se ne hvata.

## Podesite je

- `PDFADJUST`: **Izblijedi** (0 do 80 posto), **Kontrast** (0 do 100), **Monokromatski**, i **Uklj/isklj** za skrivanje bez brisanja.
- `PDFCLIP`: prikazuje samo pravokutnik ili poligon stranice; **Izbriši** uklanja isječak.
- `PDFLAYERS`: PDF može imati vlastite slojeve. Naredba ih popisuje; upišite broj da uključite ili isključite taj sloj za ovu podlogu. Slojevi koje datoteka ima isključene počinju isključeni.

## Ispis i spremanje

PLOT ispisuje stranicu kao njezine linije, ispune i tekst (pa ostaje oštra i može se pretraživati). Slike unutar PDF-a prikazuju se na zaslonu, ali se još ne ispisuju.

DWG ili DXF 2000 čuva podlogu kao poveznicu: naziv datoteke, stranicu, položaj, mjerilo, zakret, isječak, blijedjenje i kontrast. Sam PDF nije u crtežu. Ponovno otvorite crtež, upišite `PDF` i ponovno odaberite datoteku; dok to ne učinite, stranice se prikazuju kao okviri i tek tada poprimaju stvarnu veličinu. Stariji DXF (R12) nema podloga: čuva okvir i naziv. Kako drugi programi čitaju spremljeni isječak i mjerilo, u njima to još nije provjereno.

## Uvezite stranicu

1. Upišite `PDFIMPORT` (ili `PDFIM`) i odaberite PDF i stranicu.
2. Kliknite mjesto gdje ide donji lijevi kut stranice.
3. Pritisnite {{key:Enter}} za stvarnu veličinu, upišite mjerilo ili odaberite **Dvije točke**: stranica se crta u stvarnoj veličini, zatim kliknete dvije točke na udaljenosti koju znate i upišete stvarnu udaljenost; sve se skalira prema tome.

Linije postaju linije i polilinije, kružnice i lukovi se prepoznaju, ispunjeni oblici postaju pune šrafure, a tekst postaje tekst na sloju koji završava s `-TEXT`. Cijeli uvoz je jedan korak poništavanja. Slike u PDF-u se ne uvoze: umjesto toga priložite stranicu. Skeniranje (stranica koja je samo slika) nema linija za uvoz.

PDF-ovi se čitaju kao nepouzdane datoteke: ne pokreću se skripte, a vrlo velika stranica se skraćuje i o tome se javlja poruka.
