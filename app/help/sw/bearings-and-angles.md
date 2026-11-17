---
title: Andika na onyesha mielekeo na pembe kwa digrii, dakika, sekunde
summary: Andika mwelekeo kama wa mpimaji ardhi kama N45°23'30"E, au kama digrii-dakika-sekunde popote pembe inapoombwa, na uchague jinsi mchoro unavyoonyesha pembe kwa AUNITS.
keywords: mwelekeo, mielekeo, mpimaji ardhi, mwelekeo wa robo, N45E, digrii dakika sekunde, DMS, pembe, mwelekeo, kiwanja, viwanja, panga mpangilio, traverse, AUNITS, ANGUNITS, muundo wa pembe, polar, umbali wa moja kwa moja, DIST
from: af805567
---

Popote CadCraft inapoomba **pembe au mwelekeo**, unaweza kuandika **mwelekeo wa robo** au pembe kwa **digrii, dakika na sekunde**, pamoja na nambari ya kawaida ya digrii.

## Mielekeo

Mwelekeo unataja kaskazini au kusini, pembe hadi 90°, kisha mashariki au magharibi:

| Unaandika | Mwelekeo |
|---|---|
| `N45°23'30"E` au `N45d23'30"E` | 45°23'30" kutoka kaskazini kuelekea mashariki |
| `S10-30-00W` au `S 10 30 W` | 10°30' kutoka kusini kuelekea magharibi (mistari au nafasi kati ya sehemu) |
| `N45.5E` | 45.5° kutoka kaskazini kuelekea mashariki |
| `N`, `E`, `S`, `W` | moja kwa moja kaskazini, mashariki, kusini, magharibi |

Herufi zinaweza kuwa kubwa au ndogo. Katika Kihispania, `O` pia inamaanisha magharibi (oeste). `d` na `°` zina maana sawa; `'` ni dakika na `"` ni sekunde.

Ili kupanga mstari wa kiwanja wenye urefu wa 20 m kwa N45°23'E, anza {{cmd:LINE}} kisha andika nukta ya kwanza, kisha `@20<N45d23'E`. Hili pia linafanya kazi kwenye kidokezo cha pembe cha {{cmd:ROTATE}} na kila kidokezo kingine kinachoomba pembe, na kwenye kisanduku cha pembe cha {{ui:Ingizo lenye nguvu}}.

## Digrii, dakika, sekunde

`45°23'30"`, `45d23'30"`, `45d30'` au `45d` ni pembe kutoka mhimili wa X, kinyume cha saa. `°` au `d` inahitajika: `45-23-30` inasomwa kama hesabu (45 − 23 − 30). Dakika na sekunde lazima ziwe chini ya 60. Nambari ya kawaida, pamoja na hesabu (`360/7`), bado inafanya kazi.

## Pembe zinavyoonyeshwa

Andika {{cmd:AUNITS}} (au chagua {{ui:Angle format}} kwenye {{ui:Properties}} › {{ui:Current settings}}) kisha uchague:

- **Digrii za desimali** (chaguomsingi): `44.6083°`.
- **Digrii-dakika-sekunde**: `44°36'30"`.
- **Mielekeo ya mpimaji ardhi**: `N45°23'30"E`.

Usahihi unafuata unachoandika kwa {{cmd:AUNITS}}: 0 inaonyesha digrii, 2 dakika, 4 sekunde, na 5 hadi 8 inaongeza desimali za sekunde. Muundo unaonekana kwenye {{cmd:DIST}}, kwenye upau wa hali, kwenye {{ui:Ingizo lenye nguvu}} na vidokezo vya ufuatiliaji, na kwenye visanduku vya pembe vya {{ui:Properties}} (kisanduku unachohariri kinakubali yoyote kati ya miundo hapo juu). Ni hatua moja ya kutendua na inahifadhiwa kwenye faili za DWG na DXF (`$AUNITS`, `$AUPREC`); LISP inaisoma na kuiandika kama `AUNITS` na `AUPREC`.
