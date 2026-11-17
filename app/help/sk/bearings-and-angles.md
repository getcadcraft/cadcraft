---
title: Zadávanie a zobrazovanie smerníkov a uhlov v stupňoch, minútach a sekundách
summary: Zadajte smer ako geodetický smerník, napríklad N45°23'30"E, alebo ako stupne, minúty a sekundy všade tam, kde sa pýta uhol, a vyberte, ako výkres zobrazuje uhly pomocou AUNITS.
keywords: smerník, smerníky, geodet, kvadrantový smerník, N45E, stupne minúty sekundy, DMS, uhol, smer, parcela, parcely, vytýčenie, polygónový ťah, AUNITS, ANGUNITS, formát uhla, polárne, priama vzdialenosť, DIST
from: af805567
---

Všade tam, kde CadCraft pýta **uhol alebo smer**, môžete napísať **kvadrantový smerník** alebo uhol v **stupňoch, minútach a sekundách**, rovnako ako obyčajné číslo stupňov.

## Smerníky

Smerník pomenúva sever alebo juh, uhol až do 90°, potom východ alebo západ:

| Napíšete | Smer |
|---|---|
| `N45°23'30"E` alebo `N45d23'30"E` | 45°23'30" od severu smerom na východ |
| `S10-30-00W` alebo `S 10 30 W` | 10°30' od juhu smerom na západ (pomlčky alebo medzery medzi časťami) |
| `N45.5E` | 45.5° od severu smerom na východ |
| `N`, `E`, `S`, `W` | presne sever, východ, juh, západ |

Písmená môžu byť ľubovoľne veľké alebo malé. V španielčine `O` tiež znamená západ (oeste). `d` a `°` znamenajú to isté; `'` sú minúty a `"` sú sekundy.

Ak chcete vytýčiť hranicu parcely dlhú 20 m pod N45°23'E, spustite {{cmd:LINE}}, zadajte prvý bod a potom napíšte `@20<N45d23'E`. To isté funguje pri výzve na uhol v {{cmd:ROTATE}}, pri každej inej výzve, ktorá žiada uhol, a v poli uhla {{ui:Dynamický vstup}}.

## Stupne, minúty, sekundy

`45°23'30"`, `45d23'30"`, `45d30'` alebo `45d` je uhol od osi X, proti smeru hodinových ručičiek. Znak `°` alebo `d` je potrebný: `45-23-30` sa číta ako aritmetika (45 − 23 − 30). Minúty a sekundy musia byť menšie ako 60. Obyčajné číslo, aj s aritmetikou (`360/7`), stále funguje.

## Ako sa zobrazujú uhly

Napíšte {{cmd:AUNITS}} (alebo vyberte {{ui:Formát uhla}} v {{ui:Vlastnosti}} › {{ui:Aktuálne nastavenia}}) a vyberte:

- **Desatinné stupne** (predvolené): `44.6083°`.
- **Stupne, minúty, sekundy**: `44°36'30"`.
- **Geodetické smerníky**: `N45°23'30"E`.

Presnosť sa riadi tým, čo napíšete pre {{cmd:AUNITS}}: 0 zobrazuje stupne, 2 minúty, 4 sekundy a 5 až 8 pridáva desatiny sekundy. Formát sa zobrazuje v {{cmd:DIST}}, na stavovom riadku, v dynamickom vstupe a v tipoch sledovania, a v poliach uhla v {{ui:Vlastnosti}} (pole, ktoré upravíte, prijme ktorúkoľvek z podôb vyššie). Je to jeden krok späť a uloží sa v súboroch DWG a DXF (`$AUNITS`, `$AUPREC`); LISP ho číta a zapisuje ako `AUNITS` a `AUPREC`.
