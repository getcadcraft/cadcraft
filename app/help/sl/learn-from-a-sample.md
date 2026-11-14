---
title: Učenje z vzorčno risbo
summary: Odprite vzorčno hišo ali vzorec dejanskega stanja v CadCraftu in si oglejte liste, glavo risbe, kote in sloje.
keywords: vzorec, vzorci, primer risbe, učenje, učbenik, vodnik, glava risbe, listi, dejansko stanje, arhitekturni komplet, odpri vzorec
from: aa1f960a
---

## Kaj se boste naučili

Kako je zgrajen končan komplet: prostor modela, listi s pogleadnimi okni pri merilu, glava risbe z atributi, kote v čevljih in palcih ter v milimetrih, sloji. Vzorci so last CadCraftu in jih lahko brezplačno uporabite za kar koli (CC0).

## Odprite vzorec

1. V levi plošči pod {{ui:Risba}} kliknite {{ui:Odpri vzorec}} (ali vnesite {{cmd:SAMPLES}}; v slogih traku je v meniju {{ui:Datoteka}}).
2. Kliknite {{ui:Odpri}} poleg {{ui:Vzorčna hiša}}. Odpre se v svojem zavihku, tako da vaše delo ostane odprto.

## Oglejte si model

1. Kliknite {{ui:Obseg}} (ali vnesite `ZOOM`, nato `E`): tloris, pogled (fasada), prerez in podrobnost stene.
2. V {{ui:Sloji}} kliknite oko poleg `A-ANNO-DIMS`, da skrijete kote, in še enkrat, da jih prikažete.
3. Kliknite vrata: Lastnosti prikažejo sklic na blok `DOOR-32`. Vrata in okna so bloki, postavljeni zasukani in zrcaljeni.

## Listi

1. Kliknite {{ui:A-101 FLOOR PLAN}} pod risbo: list ARCH D z enim poglednim oknom pri 1/4" = 1'-0".
2. Dvokliknite znotraj pogleda, da delate na modelu prek njega; dvokliknite zunaj, da se vrnete.
3. {{ui:A-501 DETAILS}} prikaže podrobnost stene pri 1 1/2" = 1'-0": isti model, drugo merilo.

## Glava risbe

1. Na katerem koli listu dvokliknite glavo risbe: {{ui:Uredi atribute}} našteje PROJECT, TITLE, SCALE, DATE, DRAWN in SHEET.
2. Spremenite DRAWN v svoje začetnice in kliknite {{ui:V redu}}.
3. Če želite spremeniti glavo risbe na vseh listih, jo izberite in izberite {{ui:Bloki}} › {{ui:Več}} › {{ui:Uredi na mestu}}. Glejte [Atributi](topic:attributes).

## Dejansko stanje

Odprite {{ui:Vzorec dejanskega stanja}} enako. Sive pike na `SCAN-SLICE` so rez skeniranja; stene na `AB-WALL` so bile obrisane preko njih. Vzhodna stena je 35 mm izven pravokotnosti: kote to povedo dvakrat, v milimetrih (`AB-DIMS-MM`) in v čevljih in palcih (`AB-DIMS-FTIN`, iste dolžine prek merila). Rdeči oblački na `REV-1` označujejo, kar je ugotovil pregled.

## Naprej

- [Spremenite velikost besedila kote](topic:change-dimension-text-size)
- [Izris v PDF](topic:plot-pdf): izrišite {{ui:A-101 FLOOR PLAN}}.
