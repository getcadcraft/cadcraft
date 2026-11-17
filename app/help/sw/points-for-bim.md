---
title: Nukta kwa programu za BIM
summary: Hamisha nukta, na nukta za kuingiza za bloku zenye maelezo, kwenda faili ya CSV au TXT ambayo programu za BIM na upimaji huingiza.
keywords: exportpoints, hamisha nukta, nukta, csv, txt, pnezd, penzd, xyz, nukta za upimaji, kuratibu, bim, kuweka alama, faili ya nukta, kaskazini, mashariki, mwinuko
from: d80e2d53
---

## Unachotengeneza

Faili ya nukta: mstari mmoja kwa kila nukta, pamoja na nambari yake, kaskazini, mashariki, mwinuko na maelezo. Programu za BIM (Revit na Archicad miongoni mwazo) na programu za upimaji zinaweza kuiingiza ili kuweka nukta za upimaji, alama za eneo au vifaa.

## Hamisha nukta

1. Chagua nukta na marejeo ya bloku ambao sehemu zao za kuingiza unataka, au usichague kitu ili kuchukua kila nukta.
2. Chapa {{cmd:EXPORTPOINTS}} (au `EXPPTS`, au {{ui:Blocks}} › {{ui:Zaidi}} › {{ui:Hamisha nukta}}) kisha bonyeza {{key:Enter}}
   (bonyeza {{key:Enter}} tena kwenye `Chagua nukta na bloku` wakati hakuna kilichochaguliwa).
3. Ukichagua bloku zenye sifa, CadCraft inaorodhesha lebo zao: chapa ile ambayo thamani yake ni maelezo (kwa mfano `ITEM`), au kitu kingine chochote ili kutumia jina la kila bloku.
4. Chagua safu: `PNEZD` (nukta, kaskazini, mashariki, mwinuko, maelezo: ya kawaida zaidi), `PENZD` (mashariki kabla ya kaskazini) au `XYZ` (kuratibu pekee).
5. Chagua vitengo: [Kama ilivyochorwa (D)], `M` mita au `F` futi (tu wakati vitengo vya mchoro vimewekwa: Sifa › {{ui:Vitengo}} bila kitu kilichochaguliwa).
6. Ukiwa na UCS imewekwa, chagua [Dunia (W)] au [UCS (U)] kwa kuratibu za UCS (angalia [UCS na mwonekano uliogeuzwa](topic:ucs-and-turned-view)).
7. Chagua [Koma (C)] kwa `.csv` iliyotenganishwa kwa koma au [Kichupo (T)] kwa `.txt` iliyotenganishwa kwa kichupo, pamoja na nambari ya nukta ya kwanza.

Faili inapakuliwa kama `<drawing>-points.csv` (au `.txt`), na historia inasema nukta ngapi inazo.

## Kilichomo kwenye faili

- Nukta moja kwa kila mstari, ikiishia kwa kuvunja mstari (CR LF), desimali tatu.
- Mwinuko wa nukta ni Z yake (0 isipokuwa ina Z). Nukta ya bloku ni sehemu yake ya kuingiza.
- Maelezo yenye koma (au kichupo katika TXT) au nukuu yanawekwa kwenye nukuu mbili, nukuu zake zikiongezwa maradufu.
- Muundo ni ule ambao CivilCraft inasoma na kuandika, kwa hiyo faili pia hufunguka hapo kama nukta.

## Makosa ya kawaida

- `D` pekee ndiyo inatolewa kwa vitengo: mchoro hauna vitengo vilivyowekwa. Viweke, au badilisha kwenye programu nyingine.
- Nukta ziko mbali na unakotarajia kwenye programu nyingine: hamisha kuratibu za dunia (`W`), au UCS ambayo nukta ya upimaji ya programu hiyo inatumia (`U`).
