---
title: Skiciranje olovkom i precizna geometrija
summary: Crtajte slobodnom rukom olovkom, mišem ili prstom, a svaki potez postaje čista linija, kružnica, luk, pravokutnik ili polilinija kad podignete olovku, poravnat s onim što je već nacrtano, s veličinom spremnom za prepisivanje.
keywords: skica, olovka, pisaljka, slobodna ruka, prst, očisti, precizno, hvatanje, SKETCHLIVE, SKETCHFIX, veličina, prepiši, pritisak, debljina linije, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Pokrenite {{cmd:SKETCHLIVE}} (ili odaberite **Crtanje › Više › Skiciraj olovkom**) i nacrtajte potez pritiskom i povlačenjem. Kad podignete olovku, CadCraft pročita što ste mislili i stavlja to u crtež:

| Vaš potez | Što dobivate |
|---|---|
| Gotovo ravan | Linija. Gotovo vodoravna ili okomita linija postaje točno vodoravna ili okomita. |
| Zatvoren i okrugao | Kružnica |
| Dio okruglog oblika | Luk |
| Zatvoren s četiri pravokutna kuta | Pravokutnik |
| Sve drugo | Polilinija s ravnim stranicama |

Krajevi poteza povlače se na najbliži kraj onoga što je već nacrtano, pa se skicirani zid spaja sa zidom pored njega.

## Prepisivanje veličine

Nakon svakog poteza naredbeni redak prikazuje njegovu veličinu (**duljinu** linije, **polumjer** kružnice ili luka, **širinu** pravokutnika) kao zadanu. Pritisnite {{key:Enter}} da je zadržite, ili upišite broj ili duljinu poput `12'6"` da je zamijenite. Linija zadržava prvi kraj, kružnica središte, pravokutnik prvi kut.

Pritisnite {{key:Enter}} na praznom upitu za završetak ili upišite `U` da poništite posljednji potez. Cijela sesija je jedan korak poništavanja.

## Čišćenje više poteza odjednom

{{cmd:SKETCHFIX}} skuplja poteze i čini ih sve preciznima kad pritisnete {{key:Enter}}, što odgovara grubom rasporedu nacrtanom brzo.

:::note
Sve se računa na vašem računalu po pravilima, bez modela i bez ičega što bi se slalo.
:::

## Pritisak određuje debljinu linije

Tamo gdje je olovka uključena za aplikacije (Postavke › Općenito › Ulazni uređaji › Olovka), potez nacrtan olovkom nosi svaku točku koju je olovka dala i njezin pritisak. Lagan potez čini tanak objekt, a čvrst debeo: prosječni pritisak poteza bira 0.18, 0.25, 0.35 ili 0.50 mm, a naredbeni redak kaže koji. Potezi nacrtani mišem ili prstom uzimaju trenutačnu debljinu linije kao i prije. {{cmd:PENPRESSURE}} to isključuje (ili ponovno uključuje); izbor se čuva u ovom pregledniku.
