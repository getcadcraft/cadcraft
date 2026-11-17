---
title: Skrifa og sýna stefnur og horn í gráðum, mínútum og sekúndum
summary: Sláðu inn stefnu sem mælingarstefnu eins og N45°23'30"E, eða sem gráður-mínútur-sekúndur hvar sem horn er spurt um, og veldu hvernig teikningin sýnir horn með AUNITS.
keywords: stefna, stefnur, mæling, mælingarstefna, fjórðungsstefna, N45E, gráður mínútur sekúndur, DMS, horn, átt, lóð, lóðir, leggja út, hringferill, AUNITS, ANGUNITS, hornasnið, skautað, bein fjarlægð, DIST
from: af805567
---

Hvar sem CadCraft spyr um **horn eða stefnu** geturðu skrifað **fjórðungsstefnu** eða horn í **gráðum, mínútum og sekúndum**, auk venjulegrar tölu gráða.

## Stefnur

Stefna nefnir norður eða suður, horn upp að 90°, og síðan austur eða vestur:

| Þú skrifar | Stefna |
|---|---|
| `N45°23'30"E` eða `N45d23'30"E` | 45°23'30" frá norðri í átt til austurs |
| `S10-30-00W` eða `S 10 30 W` | 10°30' frá suðri í átt til vesturs (strik eða bil á milli hluta) |
| `N45.5E` | 45.5° frá norðri í átt til austurs |
| `N`, `E`, `S`, `W` | beint norður, austur, suður, vestur |

Stafirnir mega vera í hvaða stærð sem er, hástafir eða lágstafir. Á spænsku merkir `O` einnig vestur (oeste). `d` og `°` eru eins; `'` er mínútur og `"` er sekúndur.

Til að leggja út lóðarlínu sem er 20 m löng í N45°23'E, byrjaðu {{cmd:LINE}} og skrifaðu fyrsta punktinn, síðan `@20<N45d23'E`. Þetta virkar eins við hornaspurningu {{cmd:ROTATE}} og við hverja aðra spurningu sem biður um horn, og í hornreitnum á {{ui:Kraftmikið inntak}}.

## Gráður, mínútur, sekúndur

`45°23'30"`, `45d23'30"`, `45d30'` eða `45d` er horn frá X-ás, rangsælis. Tákn `°` eða `d` þarf: `45-23-30` er lesið sem reikningur (45 − 23 − 30). Mínútur og sekúndur verða að vera undir 60. Venjuleg tala, með reikningi (`360/7`), virkar enn.

## Hvernig horn eru sýnd

Skrifaðu {{cmd:AUNITS}} (eða veldu {{ui:Horna snið}} í {{ui:Eiginleikar}} › {{ui:Núverandi stillingar}}) og veldu:

- **Aukastigagráður** (sjálfgefið): `44.6083°`.
- **Gráður-mínútur-sekúndur**: `44°36'30"`.
- **Mælingarstefnur**: `N45°23'30"E`.

Nákvæmnin fylgir því sem þú skrifar fyrir {{cmd:AUNITS}}: 0 sýnir gráður, 2 mínútur, 4 sekúndur, og 5 til 8 bæta við aukastöfum í sekúndum. Sniðið sést í {{cmd:DIST}}, á stöðustikunni, í kraftmiklu inntaki og rakningarábendingum, og í hornreitum {{ui:Eiginleikar}} (reitur sem þú breytir tekur hvaða form sem er af ofangreindum). Það er eitt skref í afturköllun og er vistað í DWG- og DXF-skrám (`$AUNITS`, `$AUPREC`); LISP les það og skrifar sem `AUNITS` og `AUPREC`.
