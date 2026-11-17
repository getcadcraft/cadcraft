---
title: Gebruik parameters en vergelykings
summary: Noem groottes, dryf hulle aan met uitdrukkings soos width / 2, en tik 'n getal op 'n aangedrewe grootte om te verander wat dit aandryf.
keywords: parameters, par, parameterbestuurder, vergelykings, uitdrukkings, veranderlikes, tweerigting, ontwerpvoorneme, gebruikerparameter, fx
from: 650b9844
---

## Een tabel vir elke grootte

Die {{ui:Parameters}}-paneel (die {{ui:Parameters}}-knoppie in die {{ui:Parametric}}-groep, of tik {{cmd:PARAMETERS}}) lys elke dimensionele beperking (`d1`, `rad1`, `dia1`, `ang1`, of die naam wat jy gegee het) en jou eie parameters saam. Enige naam kan in enige uitdrukking gebruik word.

Elke ry het:

- **Naam**: tik 'n nuwe een om dit te hernoem; elke uitdrukking wat dit gebruik, volg.
- **Uitdrukking**: 'n getal (`40`) of 'n uitdrukking (`width / 2 + gap`). Tik daarin en druk {{key:Enter}}: die tekening volg.
- **Waarde**: wat dit uitwerk. In 'n ry wat 'n uitdrukking aandryf, kan jy hier ook 'n getal tik: CadCraft werk die parameter agter dit uit. Met `d1 = width / 2`, as jy `30` in d1 se waarde tik, word `width` 60.

Wanneer twee parameters 'n waarde aandryf (`width / 2 + gap`), vra 'n dialoog watter een om te verander. Elke verandering is een ontdoen-stap ({{key:Mod+Z}}).

## Voeg jou eie by

1. Open die {{ui:Parameters}}-paneel.
2. Tik 'n naam (`gap`) en 'n waarde (`10`), en kies {{ui:Voeg by}}.
3. Gebruik dit: in d1 se uitdrukking, tik `width / 2 + gap` en druk {{key:Enter}}.

Name begin met 'n letter of `_` en bevat letters, syfers en `_`. Funksienaam, `pi` en eenheidsname kan nie name wees nie.

## Uitdrukkings

| Skryf | Beteken |
|---|---|
| `+ - * / ^ %` | optel, aftrek, vermenigvuldig, deel, mag, restant |
| `( )` | groepering |
| `sin cos tan asin acos atan atan2` | trigonometrie in grade |
| `sqrt pow exp ln log abs sign` | wortels, magte, logaritmes |
| `ceil floor int round min max` | afronding en grense |
| `if(a > b, x, y)` | 'n keuse |
| `pi` | 3.14159… |

Getalle kan 'n eenheid dra: `25mm`, `1in`, `2'`, `90deg`. Lengtes met 'n eenheid word na millimeter omgeskakel, so gebruik eenhede net in tekeninge wat in millimeter gemeet word; elders tik gewone getalle.

## By die opdragreël

`-PARAMETERS` doen dieselfde sonder die paneel: `N` nuut, `E` redigeer (ook 'n dimensionele beperking), `R` hernoem, `D` skrap, `?` lys.

## Wat geweier word

- 'n Uitdrukking wat homself gebruik, direk of deur ander: "width, d1 gebruik mekaar."
- 'n Waarde wat 'n grootte nie kan aanneem nie: 'n negatiewe lengte, 'n hoek bo 180°.
- 'n Waarde wat die tekening nie met sy ander beperkings kan aanneem nie: niks verander nie, en die boodskap noem die beperkings wat in die pad staan.
- Skrap van 'n parameter wat iets gebruik: die paneel bied aan om sy waarde eers in hulle te skryf. 'n Dimensionele beperking se naam word geskrap deur die beperking te skrap.
