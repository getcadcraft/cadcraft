---
title: Používanie parametrov a rovníc
summary: Pomenujte rozmery, riaďte ich výrazmi ako šírka / 2 a napíšte číslo na riadený rozmer, aby ste zmenili to, čo ho riadi.
keywords: parametre, par, správca parametrov, rovnice, výrazy, premenné, obojsmerný, zámer návrhu, používateľský parameter, fx
from: 650b9844
---

## Jedna tabuľka pre každý rozmer

Panel {{ui:Parametre}} (tlačidlo {{ui:Parametre}} v skupine {{ui:Parametrické}}, alebo napíšte {{cmd:PARAMETERS}}) vypíše každé rozmerové obmedzenie (`d1`, `rad1`, `dia1`, `ang1`, alebo názov, ktorý ste mu dali) a vaše vlastné parametre spolu. Ľubovoľný názov sa dá použiť v ľubovoľnom výraze.

Každý riadok má:

- **Názov**: napíšte nový, aby ste ho premenovali; každý výraz, ktorý ho používa, ho nasleduje.
- **Výraz**: číslo (`40`) alebo výraz (`šírka / 2 + medzera`). Napíšte ho a stlačte {{key:Enter}}: výkres sa podľa toho zmení.
- **Hodnota**: čo sa z neho vypočíta. Na riadku, ktorý riadi výraz, môžete napísať aj číslo sem: CadCraft vypočíta parameter za ním. Pri `d1 = šírka / 2` napísanie `30` do hodnoty d1 nastaví `šírka` na 60.

Keď dva parametre riadia hodnotu (`šírka / 2 + medzera`), dialóg sa spýta, ktorý zmeniť. Každá zmena je jeden krok späť ({{key:Mod+Z}}).

## Pridanie vlastného

1. Otvorte panel {{ui:Parametre}}.
2. Napíšte názov (`medzera`) a hodnotu (`10`), potom zvoľte {{ui:Pridať}}.
3. Použite ho: do výrazu d1 napíšte `šírka / 2 + medzera` a stlačte {{key:Enter}}.

Názvy začínajú písmenom alebo `_` a obsahujú písmená, číslice a `_`. Názvy funkcií, `pi` a názvy jednotiek nemôžu byť názvami.

## Výrazy

| Napíšte | Znamená |
|---|---|
| `+ - * / ^ %` | sčítanie, odčítanie, násobenie, delenie, mocninu, zvyšok po delení |
| `( )` | zoskupenie |
| `sin cos tan asin acos atan atan2` | goniometria v stupňoch |
| `sqrt pow exp ln log abs sign` | odmocniny, mocniny, logaritmy |
| `ceil floor int round min max` | zaokrúhľovanie a limity |
| `if(a > b, x, y)` | voľba |
| `pi` | 3.14159… |

Čísla môžu mať jednotku: `25mm`, `1in`, `2'`, `90deg`. Dĺžky s jednotkou sa prepočítajú na milimetre, takže jednotky používajte len vo výkresoch merených v milimetroch; inde píšte holé čísla.

## Na príkazovom riadku

`-PARAMETERS` robí to isté bez panela: `N` nový, `E` upraviť (aj rozmerové obmedzenie), `R` premenovať, `D` zmazať, `?` vypísať zoznam.

## Čo sa odmietne

- Výraz, ktorý používa sám seba, priamo alebo cez iných: „šírka, d1 sa navzájom používajú.“
- Hodnota, ktorú rozmer nemôže prijať: záporná dĺžka, uhol nad 180°.
- Hodnota, ktorú výkres nemôže prijať s ostatnými obmedzeniami: nič sa nezmení a správa pomenuje obmedzenia, ktoré prekážajú.
- Zmazanie parametra, ktorý niečo používa: panel ponúkne najprv zapísať jeho hodnotu do nich. Názov rozmerového obmedzenia sa zmaže zmazaním obmedzenia.
