---
title: PDF podloge i uvoz PDF-a
summary: Stavi stranicu PDF-a ispod crteža da je trasiraš i štampaš, ili pretvori linije i tekst stranice u objekte crteža.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podloga, trasiranje, uvezi pdf, skeniranje, osnova sprata, izbledi, isecanje, slojevi, hvatanje, otvori pdf
from: aa301d0f
---

## Dva načina da uneseš PDF stranicu

- **Prikači** ({{cmd:PDFATTACH}}) čuva PDF kao sliku ispod crteža. Trasiraš ga, hvataš se za njegove linije, izbledljuješ ga i isecaš, a štampa se zajedno sa listom. Crtež čuva samo naziv fajla.
- **Uvezi** ({{cmd:PDFIMPORT}}) pretvara linije, krive, ispune i tekst stranice u obične objekte crteža, na slojevima nazvanim po PDF-u. Možeš da ih menjaš, a PDF posle toga nije potreban.

Otvaranje PDF-a sa {{ui:Otvori}} pita koji od ta dva želiš.

## Prikači stranicu

1. Ukucaj `PDFATTACH` (ili `PDFATT`) i izaberi PDF. Ako ima više stranica, ukucaj broj stranice.
2. Klikni tačku umetanja (donji levi ugao stranice).
3. Pritisni {{key:Enter}} za stvarnu veličinu stranice, ili ukucaj razmeru: jedinice crteža po PDF tački (tačka je 1/72 inča, pa je 0.3528 za crtež u milimetrima).
4. Pritisni {{key:Enter}} za bez rotacije, ili ukucaj ugao.

Stranica je objekat kao referenca bloka: pomeri, rotiraj, razmeri, kopiraj, obriši i stavi na sloj. Isključi njen sloj i nestaje. Uvećaj i stranica se ponovo crta oštro.

## Trasiraj je

Kad je uključeno {{ui:Hvatanje}}, kursor se hvata za sopstvene linije PDF-a: krajnje tačke, sredine i preseke ({{ui:Najbliže}} kad je to hvatanje uključeno). Tekst nacrtan kao slova na stranici se ne hvata.

## Podesi je

- `PDFADJUST`: **Izbledi** (0 do 80 procenata), **Kontrast** (0 do 100), **Monohromatski** i **Uključi/isključi** da je sakriješ bez brisanja.
- `PDFCLIP`: prikazuje samo pravougaonik ili poligon stranice; **Izbriši** uklanja isecanje.
- `PDFLAYERS`: PDF može imati sopstvene slojeve. Komanda ih navodi; ukucaj broj da uključiš ili isključiš taj sloj za ovu podlogu. Slojevi koje fajl ima isključene počinju isključeni.

## Štampaj i sačuvaj

PLOT štampa stranicu kao njene linije, ispune i tekst (tako ostaje oštra i pretraživa). Slike unutar PDF-a se prikazuju na ekranu, ali se još ne štampaju.

DWG ili DXF 2000 čuva podlogu kao vezu: naziv fajla, stranicu, mesto gde leži, razmeru, rotaciju, isecanje, izbledljivanje i kontrast. Sam PDF nije u crtežu. Ponovo otvori crtež, ukucaj `PDF` i ponovo izaberi fajl; dok to ne uradiš, stranice se prikazuju kao okviri, a pravu veličinu dobijaju tek tada. Stariji DXF (R12) nema podloge: čuva okvir i naziv. Kako drugi programi čitaju sačuvano isecanje i razmeru, još nije proveren.

## Uvezi stranicu

1. Ukucaj `PDFIMPORT` (ili `PDFIM`) i izaberi PDF i stranicu.
2. Klikni gde ide donji levi ugao stranice.
3. Pritisni {{key:Enter}} za pravu veličinu, ukucaj razmeru, ili izaberi **Dve tačke**: stranica se crta u pravoj veličini, zatim klikneš dve tačke poznatog rastojanja i ukucaš pravo rastojanje; sve se razmeri da odgovara.

Linije postaju linije i polilinije, kružnice i lukovi se prepoznaju, popunjeni oblici postaju pune šrafure, a tekst postaje tekst na sloju koji se završava sa `-TEXT`. To je jedan korak opozivanja. Slike u PDF-u se ne uvoze: umesto toga prikači stranicu. Skeniranje (stranica koja je samo slika) nema linija za uvoz.

PDF fajlovi se čitaju kao nepouzdani: nijedna skripta se ne pokreće, a vrlo velika stranica se skraćuje, i to se javlja.
