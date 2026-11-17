---
title: Zadávání a zobrazení směrníků a úhlů ve stupních, minutách a sekundách
summary: Zadejte směr jako geodetický směrník, například N45°23'30"E, nebo jako stupně-minuty-sekundy na kterémkoli místě, kde se žádá úhel, a zvolte pomocí AUNITS, jak výkres zobrazuje úhly.
keywords: směrník, směrníky, geodet, čtvrtinový směrník, N45E, stupně minuty sekundy, DMS, úhel, směr, parcela, parcely, vytyčit, polygonový pořad, AUNITS, ANGUNITS, formát úhlu, polární, přímá vzdálenost, DIST
from: af805567
---

Všude, kde CadCraft žádá **úhel nebo směr**, můžete napsat **čtvrtinový směrník** nebo úhel ve **stupních, minutách a sekundách**, stejně jako prosté číslo stupňů.

## Směrníky

Směrník pojmenuje sever nebo jih, úhel až 90°, potom východ nebo západ:

| Napíšete | Směr |
|---|---|
| `N45°23'30"E` nebo `N45d23'30"E` | 45°23'30" od severu směrem k východu |
| `S10-30-00W` nebo `S 10 30 W` | 10°30' od jihu směrem k západu (pomlčky nebo mezery mezi částmi) |
| `N45.5E` | 45.5° od severu směrem k východu |
| `N`, `E`, `S`, `W` | přímo sever, východ, jih, západ |

Písmena mohou být velká i malá. `d` a `°` znamenají totéž; `'` jsou minuty a `"` sekundy.

Chcete-li vytyčit parcelní hranici dlouhou 20 m pod N45°23'E, spusťte {{cmd:LINE}}, napište první bod a potom `@20<N45d23'E`. Totéž funguje u výzvy k úhlu v {{cmd:ROTATE}}, u každé další výzvy, která žádá úhel, a v úhlovém poli {{ui:Dynamické zadávání}}.

## Stupně, minuty, sekundy

`45°23'30"`, `45d23'30"`, `45d30'` nebo `45d` je úhel od osy X proti směru hodinových ručiček. Symbol `°` nebo `d` je nutný: `45-23-30` se čte jako aritmetika (45 − 23 − 30). Minuty a sekundy musejí být menší než 60. Prosté číslo, i s aritmetikou (`360/7`), funguje dál.

## Jak se úhly zobrazují

Napište {{cmd:AUNITS}} (nebo zvolte {{ui:Formát úhlu}} v {{ui:Vlastnosti}} › {{ui:Aktuální nastavení}}) a vyberte:

- **Desetinné stupně** (výchozí): `44.6083°`.
- **Stupně-minuty-sekundy**: `44°36'30"`.
- **Geodetické směrníky**: `N45°23'30"E`.

Přesnost se řídí tím, co zadáte pro {{cmd:AUNITS}}: 0 ukazuje stupně, 2 minuty, 4 sekundy, a 5 až 8 přidává desetinná místa sekund. Formát se zobrazuje v {{cmd:DIST}}, ve stavovém řádku, v dynamickém zadávání a v tipech sledování, a v úhlových polích {{ui:Vlastnosti}} (upravované pole přijme kterýkoli z výše uvedených tvarů). Je to jeden krok zpět a uchovává se v souborech DWG a DXF (`$AUNITS`, `$AUPREC`); LISP jej čte a zapisuje jako `AUNITS` a `AUPREC`.
