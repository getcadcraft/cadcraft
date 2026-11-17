---
title: Preglasitve razredov v poglednem oknu
summary: Na listu skrijte razred ali mu v enem samem poglednem oknu dodelite drugo barvo, debelino črte ali polnilo; model in drugi pogledi ostanejo nespremenjeni.
keywords: pogledno okno, preglasitev razreda, preglasitev poglednega okna, skrij razred v poglednem oknu, list, postavitev, VPLAYER, izris, Vectorworks
from: c1a2b51f
---

List pogosto prikazuje isti model večkrat: tloris s pohištvom in tloris brez njega ali načrt razsvetljave, kjer so v barvi samo svetila. Preglasitev razreda v poglednem oknu spremeni, kako se en [razred](topic:classes) prikazuje **samo v tem poglednem oknu**.

1. Odprite list in izberite eno pogledno okno.
2. Odprite podokno Razredi (`CLASSES`) in izberite razred.
3. Pod {{ui:To pogledno okno}} označite {{ui:Skrij v tem pogledu}}, ali nastavite {{ui:Barva tukaj}}, {{ui:Debelina črte tukaj}} ali {{ui:Polnilo tukaj}}.

Seznam spodaj prikazuje vsak razred, ki ga to pogledno okno spremeni. {{ui:Počisti preglasitve tega poglednega okna}} odstrani vse. Vsaka sprememba je en korak razveljavitve.

## Kaj preglasitev spremeni

- **Skrij** skrije razred in vse razrede pod njim v tem poglednem oknu.
- **Barva, debelina črte in polnilo** spremenijo objekte razreda, katerih vrednost ni nastavljena na samem objektu, torej objekte, ki jo prevzamejo po razredu ali sloju. Objekt z lastno barvo jo obdrži, kakor pri preglasitvi sloja v poglednem oknu.

Preglasitve se prikažejo na zaslonu in v izrisih ter PDF-jih, tudi v nizu listov, objavljenem v PDF. Delujejo skupaj z zamrznjenimi sloji in preglasitvami slojev poglednega okna.

Preglasitve se shranijo z risbo v DWG in DXF (s seznamom razredov v bloku `CADCRAFT_CLASSES`) in se po odprtju datoteke v CadCraftu vrnejo na isto pogledno okno.
