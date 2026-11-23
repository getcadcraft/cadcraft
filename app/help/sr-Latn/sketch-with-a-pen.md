---
title: Skicirajte olovkom i dobijte preciznu geometriju
summary: Crtajte slobodnom rukom olovkom, mišem ili prstom i svaka linija postaje čista linija, krug, luk, pravougaonik ili polilinija čim podignete olovku, pritegnuta uz ono što je već nacrtano, sa veličinom spremnom za prepisivanje.
keywords: skica, olovka, pero, slobodna ruka, prst, očisti, precizno, pritezanje, SKETCHLIVE, SKETCHFIX, veličina, prepiši preko, pritisak, debljina linije, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Pokrenite {{cmd:SKETCHLIVE}} (ili izaberite **Crtanje › Više › Skiciranje olovkom**) i nacrtajte liniju pritiskom i prevlačenjem. Kada podignete olovku, CadCraft čita šta ste hteli i stavlja to u crtež:

| Vaša linija | Šta dobijate |
|---|---|
| Skoro prava | Linija. Skoro vodoravna ili uspravna linija postaje tačno vodoravna ili uspravna. |
| Zatvorena i okrugla | Krug |
| Deo okrugle figure | Luk |
| Zatvorena sa četiri prava ugla | Pravougaonik |
| Sve ostalo | Polilinija sa uglastim stranicama |

Krajevi linije se povlače na najbliži kraj onoga što je već nacrtano, pa se skicirani zid spaja sa zidom pored njega.

## Prepisivanje veličine

Posle svake linije komandna linija prikazuje njenu veličinu (dužinu linije, poluprečnik kruga ili luka, širinu pravougaonika) kao podrazumevanu vrednost. Pritisnite {{key:Enter}} da je zadržite, ili ukucajte broj ili dužinu, na primer `12'6"`, da je zamenite. Linija zadržava prvi kraj, krug svoj centar, pravougaonik svoj prvi ugao.

Pritisnite {{key:Enter}} na praznom upitu da završite, ili ukucajte `U` da opozovete poslednju liniju. Cela sesija je jedan korak opozivanja.

## Čišćenje više linija odjednom

{{cmd:SKETCHFIX}} skuplja linije i čini ih sve preciznim kada pritisnete {{key:Enter}}, što odgovara grubom rasporedu nacrtanom brzo.

:::note
Sve se računa na vašem računaru pravilima, bez modela i bez slanja bilo kuda.
:::

## Pritisak određuje debljinu linije

Kada je olovka uključena za aplikacije (Podešavanja › Opšte › Ulazni uređaji › Olovka), linija nacrtana olovkom nosi svaku tačku koju je olovka dala i njen pritisak. Lagana linija pravi tanak objekat, a jaka debeo: prosečan pritisak linije bira 0.18, 0.25, 0.35 ili 0.50 mm, a komandna linija kaže koji. Linije nacrtane mišem ili prstom uzimaju tekuću debljinu linije kao i ranije. {{cmd:PENPRESSURE}} to isključuje (ili ponovo uključuje); izbor se čuva u ovom pregledaču.
