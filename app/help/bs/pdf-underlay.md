---
title: PDF podloge i uvoz PDF-a
summary: Stavi PDF stranicu ispod crteža da je ucrtaš i ispišeš, ili pretvori linije i tekst stranice u objekte crteža.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podloga, ucrtavanje, uvoz pdf, skeniranje, tlocrt, prigušenje, isjecanje, slojevi, hvatanje, otvori pdf
from: aa301d0f
---

## Dva načina za uvoz PDF stranice

- **Priključi** ({{cmd:PDFATTACH}}) čuva PDF kao sliku ispod crteža. Ucrtavaš preko nje, hvataš se za njene linije, prigušuješ je, isijecaš, i štampa se zajedno sa listom. Crtež čuva samo naziv datoteke.
- **Uvezi** ({{cmd:PDFIMPORT}}) pretvara linije, krive, ispune i tekst stranice u obične objekte crteža, na slojevima nazvanim po PDF-u. Ti objekti su tvoji za uređivanje, a PDF poslije nije potreban.

Otvaranje PDF-a sa {{ui:Open}} pita koji od ta dva želiš.

## Priključi stranicu

1. Ukucaj `PDFATTACH` (ili `PDFATT`) i odaberi PDF. Ako ima više stranica, ukucaj broj stranice.
2. Klikni tačku umetanja (donji lijevi ugao stranice).
3. Pritisni {{key:Enter}} za pravu veličinu stranice, ili ukucaj razmjeru: jedinice crteža po PDF tački (tačka je 1/72 inča, pa je u crtežu u milimetrima to 0.3528).
4. Pritisni {{key:Enter}} za bez okretanja, ili ukucaj ugao.

Stranica je objekat kao referenca bloka: pomjeraj, okreći, skaliraj, kopiraj, briši i stavi je na sloj. Isključi njen sloj i nestaje. Uvećaj i stranica se ponovo iscrta oštro.

## Ucrtavanje

Kad je {{ui:Snap}} uključen, kursor se hvata za vlastite linije PDF-a: krajnje tačke, sredine i presjeke (i {{ui:Nearest}} kad je to hvatanje uključeno). Tekst napisan slovima na stranici se ne hvata.

## Podešavanje

- `PDFADJUST`: **Prigušenje** (0 do 80 posto), **Kontrast** (0 do 100), **Monohromatski** i **Uključi/isključi** [Onoff (O)] da je sakriješ bez brisanja.
- `PDFCLIP`: prikaži samo pravougaonik ili poligon stranice; **Izbriši** uklanja isječak.
- `PDFLAYERS`: PDF može imati vlastite slojeve. Komanda ih navodi; ukucaj broj da uključiš ili isključiš taj sloj za ovu podlogu. Slojevi koje datoteka ima isključene, počinju isključeni.

## Štampa i spašavanje

PLOT štampa stranicu kao njene linije, ispune i tekst (pa ostaje oštra i može se pretraživati). Slike unutar PDF-a se prikazuju na ekranu, ali se još ne štampaju.

DWG ili DXF 2000 čuva podlogu kao vezu: naziv datoteke, stranicu, gdje leži, njenu razmjeru, okretanje, isječak, prigušenje i kontrast. Sam PDF nije u crtežu. Ponovo otvori crtež, ukucaj `PDF` i ponovo odaberi datoteku; stranice se dotle prikazuju kao okviri, a pravu veličinu uzimaju tek kad to uradiš. Stariji DXF (R12) nema podloge: čuva okvir i naziv. Kako druge programe čitaju sačuvani isječak i razmjeru, još nije provjereno u njima.

## Uvezi stranicu

1. Ukucaj `PDFIMPORT` (ili `PDFIM`) i odaberi PDF i stranicu.
2. Klikni gdje ide donji lijevi ugao stranice.
3. Pritisni {{key:Enter}} za pravu veličinu, ukucaj razmjeru, ili odaberi **Dvije tačke**: stranica se iscrta u pravoj veličini, zatim klikneš dvije tačke poznatog rastojanja i ukucaš stvarno rastojanje; sve se skalira da odgovara.

Linije postaju linije i polilinije, krugovi i lukovi se prepoznaju, popunjeni oblici postaju pune šrafure, a tekst postaje tekst na sloju koji se završava sa `-TEXT`. To je jedan korak poništavanja. Slike u PDF-u se ne uvoze: priključi stranicu umjesto toga. Sken (stranica koja je samo slika) nema linija za uvoz.

PDF-ovi se čitaju kao nepouzdane datoteke: skripte se ne izvršavaju, a vrlo velika stranica se skrati, i to se javlja.
