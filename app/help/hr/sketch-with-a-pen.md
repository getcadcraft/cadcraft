---
title: Skicirajte olovkom za preciznu geometriju
summary: Crtajte slobodnom rukom olovkom, mišem ili prstom, a svaki potez postaje čista linija, kružnica, luk, pravokutnik ili polilinija čim podignete olovku, uhvaćena za ono što je već nacrtano, s veličinom spremnom za upisivanje preko nje.
keywords: skica, olovka, stylus, slobodna ruka, prst, očisti, precizno, hvatanje, SKETCHLIVE, SKETCHFIX, veličina, upiši preko
from: cd87eb75
---

Pokrenite {{cmd:SKETCHLIVE}} (ili odaberite **Crtanje › Više › Skiciraj olovkom**) i nacrtajte potez pritiskom i povlačenjem. Kad podignete olovku, CadCraft prepoznaje što ste htjeli i stavlja to u crtež:

| Vaš potez | Što dobivate |
|---|---|
| Gotovo ravan | Linija. Gotovo vodoravna ili okomita linija postaje točno vodoravna ili okomita. |
| Zatvoren i okrugao | Kružnica |
| Dio okruglog oblika | Luk |
| Zatvoren s četiri pravokutna kuta | Pravokutnik |
| Sve ostalo | Polilinija s pravokutnim stranicama |

Krajevi poteza povlače se na najbližu krajnju točku onoga što je već nacrtano, pa se nacrtani zid spaja sa zidom uz njega.

## Upišite preko veličine

Nakon svakog poteza naredbeni redak prikazuje njegovu veličinu (**duljinu** linije, **radijus** kružnice ili luka, **širinu** pravokutnika) kao zadanu vrijednost. Pritisnite {{key:Enter}} da je zadržite ili upišite broj ili duljinu, poput `12'6"`, da je zamijenite. Linija zadržava prvi kraj, kružnica središte, a pravokutnik prvi kut.

Pritisnite {{key:Enter}} u praznom polju za završetak ili upišite `U` da poništite zadnji potez. Cijela sesija je jedan korak poništavanja.

## Čišćenje više poteza odjednom

{{cmd:SKETCHFIX}} skuplja poteze i čini ih sve preciznima kad pritisnete {{key:Enter}}, što odgovara brzo nacrtanom grubom rasporedu.

:::note
Sve se računa na vašem računalu prema pravilima, bez modela i bez slanja ičega bilo kamo.
:::
