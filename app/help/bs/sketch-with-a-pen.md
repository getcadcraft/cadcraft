---
title: Skiciranje olovkom i precizna geometrija
summary: Crtajte slobodnom rukom olovkom, mišem ili prstom i svaki potez postaje čista linija, krug, luk, pravougaonik ili polilinija čim podignete olovku, uhvaćena za ono što je već nacrtano, sa veličinom spremnom za prepisivanje.
keywords: skica, olovka, pero, slobodna ruka, prst, očisti, precizno, hvatanje, SKETCHLIVE, SKETCHFIX, veličina, prepiši preko, pritisak, debljina linije, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Pokrenite {{cmd:SKETCHLIVE}} (ili izaberite **Crtanje › Više › Skiciraj olovkom**) i nacrtajte potez pritiskom i prevlačenjem. Kad podignete olovku, CadCraft čita šta ste htjeli i stavlja to u crtež:

| Vaš potez | Šta dobijate |
|---|---|
| Skoro prav | Linija. Skoro vodoravna ili uspravna linija postaje tačno vodoravna ili uspravna. |
| Zatvoren i okrugao | Krug |
| Dio okrugle figure | Luk |
| Zatvoren sa četiri prava ugla | Pravougaonik |
| Sve ostalo | Polilinija sa izravnanim stranicama |

Krajevi poteza privlače se na najbliži kraj onoga što je već nacrtano, pa se skicirani zid spaja sa zidom pored njega.

## Prepisivanje veličine

Nakon svakog poteza komandna linija prikazuje njegovu veličinu (dužinu linije, poluprečnik kruga ili luka, širinu pravougaonika) kao zadanu vrijednost. Pritisnite {{key:Enter}} da je zadržite, ili ukucajte broj ili dužinu kao `12'6"` da je zamijenite. Linija zadržava prvi kraj, krug svoj centar, pravougaonik prvi ugao.

Pritisnite {{key:Enter}} na praznom upitu da završite, ili ukucajte `U` da poništite posljednji potez. Cijela sesija je jedan korak poništavanja.

## Čišćenje više poteza odjednom

{{cmd:SKETCHFIX}} skuplja poteze i pravi ih sve preciznim kad pritisnete {{key:Enter}}, što odgovara grubom rasporedu nacrtanom brzo.

:::note
Sve se računa na vašem računaru po pravilima, bez modela, i ništa se nigdje ne šalje.
:::

## Pritisak postavlja debljinu linije

Gdje je olovka uključena za aplikacije (Postavke › Opšte › Ulazni uređaji › Olovka), potez nacrtan olovkom nosi svaku tačku koju je olovka dala i njen pritisak. Lagan potez pravi tanak objekat, a jak debeo: prosječni pritisak poteza bira 0.18, 0.25, 0.35 ili 0.50 mm, a komandna linija kaže koji. Potezi nacrtani mišem ili prstom uzimaju trenutnu debljinu linije kao i prije. {{cmd:PENPRESSURE}} to isključuje (ili ponovo uključuje); izbor se čuva u ovom pregledaču.
