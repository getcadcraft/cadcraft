---
title: Notaðu breytur og jöfnur
summary: Gefðu stærðum heiti, stýrðu þeim með segðum eins og breidd / 2, og skrifaðu tölu á stýrða stærð til að breyta því sem stýrir henni.
keywords: breytur, par, breytustjóri, jöfnur, segðir, breytuheiti, tvíátta, hönnunarásetningur, notandabreyta, fx
from: 650b9844
---

## Ein tafla fyrir allar stærðir

Spjaldið {{ui:Breytur}} (hnappurinn {{ui:Breytur}} í hópnum {{ui:Breytur}}, eða skrifaðu {{cmd:PARAMETERS}}) sýnir hverja víddarþvingun (`d1`, `rad1`, `dia1`, `ang1`, eða heitið sem þú gafst henni) og eigin breytur þínar saman. Sérhvert heiti má nota í hvaða segð sem er.

Hver röð hefur:

- **Heiti**: skrifaðu nýtt til að endurnefna; allar segðir sem nota það fylgja.
- **Segð**: tala (`40`) eða segð (`breidd / 2 + bil`). Skrifaðu í hana og ýttu á {{key:Enter}}: teikningin fylgir.
- **Gildi**: það sem hún reiknast í. Á röð sem segð stýrir má skrifa tölu hér líka: CadCraft reiknar út breytuna á bak við hana. Með `d1 = breidd / 2`, ef þú skrifar `30` í gildi d1, verður `breidd` 60.

Þegar tvær breytur stýra gildi (`breidd / 2 + bil`) spyr gluggi hvora á að breyta. Sérhver breyting er eitt afturköllunarskref ({{key:Mod+Z}}).

## Bættu við þinni eigin

1. Opnaðu spjaldið {{ui:Breytur}}.
2. Skrifaðu heiti (`bil`) og gildi (`10`), og veldu {{ui:Bæta við}}.
3. Notaðu hana: í segð d1 skrifaðu `breidd / 2 + bil` og ýttu á {{key:Enter}}.

Heiti byrja á bókstaf eða `_` og innihalda bókstafi, tölustafi og `_`. Fallaheiti, `pi` og einingaheiti geta ekki verið nöfn.

## Segðir

| Skrifaðu | Merkir |
|---|---|
| `+ - * / ^ %` | samlagning, frádráttur, margföldun, deiling, veldi, afgangur |
| `( )` | hópun |
| `sin cos tan asin acos atan atan2` | hornafræði í gráðum |
| `sqrt pow exp ln log abs sign` | rætur, veldi, lógaritmar |
| `ceil floor int round min max` | námundun og mörk |
| `if(a > b, x, y)` | val |
| `pi` | 3.14159… |

Tölur mega bera einingu: `25mm`, `1in`, `2'`, `90deg`. Lengdir með einingu eru breyttar í millimetra, þannig að notaðu einingar aðeins í teikningum sem mældar eru í millimetrum; annars skrifaðu einfaldar tölur.

## Á skipanalínunni

`-PARAMETERS` gerir það sama án spjaldsins: `N` (Nýtt), `E` (Breyta: þar með talin víddarþvingun), `R` (Endurnefna), `D` (Eyða), `?` (Listi).

## Það sem er hafnað

- Segð sem notar sjálfa sig, beint eða í gegnum aðrar: „breidd, d1 nota hvort annað.“
- Gildi sem stærð getur ekki tekið: neikvæð lengd, horn yfir 180°.
- Gildi sem teikningin getur ekki tekið með öðrum þvingunum: ekkert breytist, og skilaboðin nefna þvinganirnar sem eru í veginum.
- Eyðing breytu sem eitthvað notar: spjaldið býður að skrifa gildi hennar inn í þær fyrst. Heiti víddarþvingunar er eytt með því að eyða þvinguninni.
