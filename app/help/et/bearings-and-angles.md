---
title: Sisesta ja näita suundi ja nurki kraadides, minutites ja sekundites
summary: Sisesta suund maamõõtja suunana, näiteks N45°23'30"E, või kraadides-minutites-sekundites igal pool, kus nurka küsitakse, ja vali AUNITS-iga, kuidas joonis nurki näitab.
keywords: suund, suunad, bearing, maamõõtja, kvadrandi suund, N45E, kraadid minutid sekundid, DMS, nurk, suund, parsell, parsellid, paigutamine, teodoliit, AUNITS, ANGUNITS, nurga vorming, polaar, otsekaugus, DIST
from: af805567
---

Igal pool, kus CadCraft küsib **nurka või suunda**, võid sisestada **kvadrandi suuna** või nurga **kraadides, minutites ja sekundites**, samuti tavalise kraadide arvu.

## Suunad

Suund nimetab põhja või lõunat, seejärel nurga kuni 90°, seejärel ida või lääne:

| Sisestad | Suund |
|---|---|
| `N45°23'30"E` või `N45d23'30"E` | 45°23'30" põhjast ida poole |
| `S10-30-00W` või `S 10 30 W` | 10°30' lõunast lääne poole (kriipsud või tühikud osade vahel) |
| `N45.5E` | 45.5° põhjast ida poole |
| `N`, `E`, `S`, `W` | otse põhja, ida, lõuna, lääne |

Tähed võivad olla mis tahes suurusega. Hispaania keeles tähendab `O` ka läände (oeste). `d` ja `°` tähendavad sama; `'` on minutid ja `"` on sekundid.

Et paigutada 20 m pikkune kinnistupiir suunas N45°23'E, alusta {{cmd:LINE}} ja sisesta esimene punkt, seejärel `@20<N45d23'E`. Sama töötab käsu {{cmd:ROTATE}} nurga viibal ja igal teisel viibal, mis küsib nurka, ning {{ui:Dünaamiline sisend}} nurgakastis.

## Kraadid, minutid, sekundid

`45°23'30"`, `45d23'30"`, `45d30'` või `45d` on nurk X-teljest vastupäeva. Märk `°` või `d` on vajalik: `45-23-30` loetakse aritmeetikana (45 − 23 − 30). Minutid ja sekundid peavad olema alla 60. Tavaline arv, koos aritmeetikaga (`360/7`), töötab endiselt.

## Kuidas nurgad näidatakse

Sisesta {{cmd:AUNITS}} (või vali {{ui:Omadused}} › {{ui:Praegused sätted}} all {{ui:Nurga vorming}}) ja vali:

- **Kümnendkraadid** (vaikimisi): `44.6083°`.
- **Kraadid-minutid-sekundid**: `44°36'30"`.
- **Maamõõtja suunad**: `N45°23'30"E`.

Täpsus järgib seda, mida sisestad {{cmd:AUNITS}} jaoks: 0 näitab kraade, 2 minuteid, 4 sekundeid ja 5 kuni 8 lisavad sekundi kümnendkohti. Vorming näidatakse {{cmd:DIST}}-s, olekuribal, dünaamilises sisendis ja jälgimisvihjetes ning {{ui:Omadused}} nurgakastides (muudetav kast võtab vastu kõik ülalnimetatud vormid). See on üks tagasivõtmise samm ja see salvestatakse DWG- ja DXF-failidesse (`$AUNITS`, `$AUPREC`); LISP loeb ja kirjutab seda kui `AUNITS` ja `AUPREC`.
