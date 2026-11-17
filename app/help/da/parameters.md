---
title: Brug parametre og ligninger
summary: Navngiv mål, styr dem med udtryk som width / 2, og skriv et tal på et styret mål for at ændre det, der styrer det.
keywords: parametre, par, parameterhåndtering, ligninger, udtryk, variabler, tovejs, designhensigt, brugerparameter, fx
from: 650b9844
---

## Én tabel for alle mål

Panelet {{ui:Parametre}} (knappen {{ui:Parametre}} i gruppen {{ui:Parametrisk}}, eller skriv {{cmd:PARAMETERS}}) lister alle dimensionsbegrænsninger (`d1`, `rad1`, `dia1`, `ang1`, eller det navn du gav den) og dine egne parametre samlet. Ethvert navn kan bruges i ethvert udtryk.

Hver række har:

- **Navn**: skriv et nyt for at omdøbe det; hvert udtryk, der bruger det, følger med.
- **Udtryk**: et tal (`40`) eller et udtryk (`width / 2 + gap`). Skriv i det og tryk {{key:Enter}}: tegningen følger med.
- **Værdi**: det, det regner ud til. På en række, hvor et udtryk styrer, kan du også skrive et tal her: CadCraft regner ud, hvilken parameter der ligger bag. Med `d1 = width / 2` vil du, ved at skrive `30` i d1's værdi, få `width` til at blive 60.

Når to parametre styrer en værdi (`width / 2 + gap`), spørger en dialog, hvilken du vil ændre. Hver ændring er ét fortrydelsestrin ({{key:Mod+Z}}).

## Tilføj dine egne

1. Åbn panelet {{ui:Parametre}}.
2. Skriv et navn (`gap`) og en værdi (`10`), og vælg {{ui:Tilføj}}.
3. Brug den: skriv i d1's udtryk `width / 2 + gap` og tryk {{key:Enter}}.

Navne begynder med et bogstav eller `_` og består af bogstaver, cifre og `_`. Funktionsnavne, `pi` og enhedsnavne kan ikke bruges som navne.

## Udtryk

| Skriv | Betyder |
|---|---|
| `+ - * / ^ %` | læg til, træk fra, gang, divider, potens, rest |
| `( )` | gruppering |
| `sin cos tan asin acos atan atan2` | trigonometri i grader |
| `sqrt pow exp ln log abs sign` | rødder, potenser, logaritmer |
| `ceil floor int round min max` | afrunding og grænser |
| `if(a > b, x, y)` | et valg |
| `pi` | 3.14159… |

Tal kan have en enhed: `25mm`, `1in`, `2'`, `90deg`. Længder med en enhed omregnes til millimeter, så brug kun enheder i tegninger målt i millimeter; ellers skriv almindelige tal.

## På kommandolinjen

`-PARAMETERS` gør det samme uden panelet: `N` ny, `E` redigér (også en dimensionsbegrænsning), `R` omdøb, `D` slet, `?` liste.

## Hvad der afvises

- Et udtryk, der bruger sig selv, direkte eller gennem andre: "width, d1 bruger hinanden."
- En værdi, et mål ikke kan have: en negativ længde, en vinkel over 180°.
- En værdi, tegningen ikke kan tage med sine øvrige begrænsninger: intet ændres, og meddelelsen navngiver de begrænsninger, der er i vejen.
- Sletning af en parameter, som noget bruger: panelet tilbyder først at skrive dens værdi ind i dem. En dimensionsbegrænsnings navn slettes ved at slette begrænsningen.
