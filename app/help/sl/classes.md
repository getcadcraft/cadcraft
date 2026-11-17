---
title: Urejanje risbe z razredi
summary: Razredi razvrščajo objekte na drug način, čez sloje (Lighting-Fixtures-Spot): prikažite in skrijte jih, dajte jim barvo, tip črte, debelino, polnilo in slog besedila, ki ga objekti lahko prevzamejo »po razredu«, ter nastavite razred, v katerega gredo novi objekti.
keywords: razred, razredi, CLASSES, CLS, CLASS, po razredu, ByClass, aktivni razred, uporabi pri ustvarjanju, Brez, načrtovalni sloj, merilo sloja, kota višine, Vectorworks
from: 672de9cb
---

Sloji povedo, *kje* objekt pripada v risbi; razredi povedo, *kaj* je. Stena na sloju `Level 1` je lahko v razredu `Walls-Exterior`, svetilka na stropu `Ceiling` pa v razredu `Lighting-Fixtures-Spot`. Vse luči na vseh slojih lahko skrijete hkrati ali zunanje stene natisnete debelejše, ne da bi kaj premaknili med sloji.

Vsak objekt se začne v razredu **Brez**. Risba brez lastnih razredov deluje natanko kot prej.

## Odprite panel Razredi

Vnesite `CLASSES` (ali `CLS`) in pritisnite {{key:Enter}}, ali izberite {{ui:Razredi…}} v meniju {{ui:Več}} v skupini {{ui:Pogled}}. Panel se odpre čez risbo in ostane odprt, medtem ko risate.

- **Dodajte razred:** vnesite ime v polje na vrhu in pritisnite {{key:Enter}}. Pomišljaj naredi raven: `Lighting-Fixtures-Spot` je pod `Lighting-Fixtures`, ki je pod `Lighting`; manjkajoče ravni se dodajo samodejno.
- **Prikaz ali skrivanje:** oko ob razredu. Skrivanje razreda skrije vse razrede pod njim, na zaslonu in na papirju.
- **Aktivni razred:** okrogel gumb. Novi objekti, ki jih narišete, gredo v aktivni razred.
- **Izberite razred:** kliknite njegovo ime. Gumbi in nastavitve pod seznamom potem delujejo nanj.

Število na koncu vsake vrstice pove, koliko objektov je v tem razredu (v modelu, na listih in v definicijah blokov).

## Dajte objekte v razred

Izberite objekte, v panelu izberite razred in izberite {{ui:Nastavi razred}}. Najprej označite {{ui:Po razredu}}, da barvo, tip črte, debelino, polnilo in slog besedila prevzamejo iz razreda. Lahko tudi:

- vnesete `CLASS` z izbranimi objekti in vnesete ime razreda (novo ime ustvari razred);
- vnesete `CLASS`, ko nič ni izbrano, da nastavite aktivni razred; `?` izpiše razrede s številom objektov;
- uporabite razdelek {{ui:Razred}} v panelu Lastnosti: razred in stikalo {{ui:… po razredu}} za barvo, tip črte in debelino (polnilo za šrafure, slog besedila za besedilo);
- izberete po razredu z `QSELECT`: izberite lastnost {{ui:Razred}}.

{{ui:Izberi njegove objekte}} izbere vse objekte izbranega razreda na odprtem listu (ali v modelu).

## Kako se objekt riše: objekt, razred, sloj

Barva, tip črte, debelina, polnilo in slog besedila objekta so lahko **po razredu**, kot so lahko po sloju. CadCraft gleda v tem vrstnem redu:

1. Lastna vrednost objekta, razen če je ta vrednost po razredu.
2. Vrednost razreda, če objekt prevzame po razredu in razred jo ima.
3. Vrednost sloja.

Razred, katerega barva (ali tip črte …) je {{ui:Ni nastavljeno}}, prepusti objekt njegovemu sloju. Izberite razred in pod gumbi nastavite {{ui:Barva}}, {{ui:Tip črte}}, {{ui:Debelina črte}}, {{ui:Polnilo (šrafure)}} in {{ui:Slog besedila}}. Označite {{ui:Uporabi pri ustvarjanju}}, da novi objekti, narisani v tem razredu, prevzamejo vse po razredu.

Vsaka sprememba v panelu je en korak razveljavitve.

## Preimenovanje in brisanje

{{ui:Preimenuj}} uredi ime na mestu: pritisnite {{key:Enter}}, da ga obdržite, {{key:Esc}}, da zapustite. Razredi pod njim sledijo (`Lighting-Spot` postane `Light-Spot`, ko `Lighting` postane `Light`), prav tako njihovi objekti in prepisi v poglednih oknih.

{{ui:Izbriši}} odstrani razred in vse razrede pod njim. Njihovi objekti preidejo v **Brez**. En {{ui:Razveljavi}} vse vrne. **Brez** ni mogoče preimenovati ali izbrisati.

## Načrtovalni sloji

Pod {{ui:Načrtovalni sloji}} lahko vsak sloj nosi merilo (`1:50`) in koto višine. Načrtovalni sloj je navaden sloj: model in listi delujejo kot prej, merilo in višina pa se hranita z risbo za orodja, ki ju bodo uporabljala.

## V datotekah DWG in DXF

Razredi se ohranijo v vseh različicah DWG, ki jih CadCraft shrani, in v DXF (R12 in 2000). Razred vsakega objekta je njegov razširjeni podatek (aplikacija `CADCRAFT_CLASS`), zato ga AutoCAD in drugi programi ohranijo z objektom. Seznam razredov, barve in vidnost so shranjeni v enem neuporabljenem bloku `CADCRAFT_CLASSES`; če ga drug program počisti, CadCraft še vedno najde razred vsakega objekta, razredi pa se vrnejo s privzetimi nastavitvami.

Drugi programi razredov ne poznajo: vsak objekt narišejo s svojimi ali s slojevimi vrednostmi.

Glejte tudi [Prepisi razredov v poglednih oknih](topic:viewport-overrides) in [Urejanje risbe s sloji](topic:layers).
