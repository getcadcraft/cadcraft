---
title: Kirjoita ja näytä suuntakulmat ja kulmat asteina, minuutteina ja sekunteina
summary: Kirjoita suunta mittausinsinöörin suuntakulmana, kuten N45°23'30"E, tai asteina, minuutteina ja sekunteina mihin tahansa kohtaan, jossa kulmaa kysytään. Valitse AUNITS-komennolla, miten piirustus näyttää kulmat.
keywords: suuntakulma, suuntakulmat, mittausinsinööri, neljännessuuntakulma, N45E, aste minuutti sekunti, DMS, kulma, suunta, tontti, tontit, asettelu, monikulmiomittaus, AUNITS, ANGUNITS, kulman muoto, polaari, suora etäisyys, DIST
from: af805567
---

Missä tahansa, missä CadCraft kysyy **kulmaa tai suuntaa**, voit kirjoittaa **neljännessuuntakulman** tai kulman **asteina, minuutteina ja sekunteina**. Voit myös kirjoittaa tavallisen asteluvun.

## Suuntakulmat

Suuntakulma nimeää pohjoisen tai etelän, kulman (enintään 90°) ja sitten idän tai lännen:

| Kirjoitat | Suunta |
|---|---|
| `N45°23'30"E` tai `N45d23'30"E` | 45°23'30" pohjoisesta kohti itää |
| `S10-30-00W` tai `S 10 30 W` | 10°30' etelästä kohti länttä (osien välissä viiva tai välilyönti) |
| `N45.5E` | 45.5° pohjoisesta kohti itää |
| `N`, `E`, `S`, `W` | suoraan pohjoiseen, itään, etelään, länteen |

Kirjainten koolla ei ole väliä. Espanjaksi `O` tarkoittaa myös länttä (oeste). `d` ja `°` tarkoittavat samaa. `'` on minuutteja ja `"` sekunteja.

Voit asettaa 20 m pitkän tonttiviivan suuntaan N45°23'E: aloita {{cmd:LINE}}, kirjoita ensimmäinen piste ja sitten `@20<N45d23'E`. Sama toimii {{cmd:ROTATE}}-komennon kulmakehotteessa ja jokaisessa muussa kehotteessa, joka kysyy kulmaa, sekä kulmakentässä {{ui:Dynaaminen syöttö}}.

## Aste, minuutti, sekunti

`45°23'30"`, `45d23'30"`, `45d30'` tai `45d` on kulma X-akselista vastapäivään. Merkki `°` tai `d` tarvitaan: `45-23-30` luetaan laskutoimituksena (45 − 23 − 30). Minuuttien ja sekuntien on oltava alle 60. Tavallinen luku laskutoimituksineen (`360/7`) toimii yhä.

## Miten kulmat näytetään

Kirjoita {{cmd:AUNITS}} (tai valitse {{ui:Kulman muoto}} kohdassa {{ui:Ominaisuudet}} › {{ui:Nykyiset asetukset}}) ja valitse:

- **Desimaaliasteet** (oletus): `44.6083°`.
- **Aste, minuutti, sekunti**: `44°36'30"`.
- **Suuntakulmat**: `N45°23'30"E`.

Tarkkuus seuraa AUNITS-komennolle kirjoittamaasi arvoa: 0 näyttää asteet, 2 minuutit, 4 sekunnit ja 5–8 lisää sekunnin desimaaleja. Muoto näkyy {{cmd:DIST}}-komennossa, tilarivillä, dynaamisessa syötössä ja seurantavihjeissä sekä {{ui:Ominaisuudet}}-kohdan kulmakentissä. Muokattava kenttä hyväksyy minkä tahansa edellä olevista muodoista. Muutos on yksi kumoamisvaihe, ja se tallennetaan DWG- ja DXF-tiedostoihin ($AUNITS, $AUPREC). LISP lukee ja kirjoittaa sen nimillä AUNITS ja AUPREC.
