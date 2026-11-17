---
title: Uporaba parametrov in enačb
summary: Poimenujte mere, jih vodite z izrazi, kot je width / 2, in na vodeni meri vtipkajte število, da spremenite, kar jo vodi.
keywords: parametri, par, upravitelj parametrov, enačbe, izrazi, spremenljivke, dvosmerno, namen zasnove, uporabniški parameter, fx
from: 650b9844
---

## Ena tabela za vse mere

Podokno {{ui:Parameters}} (gumb {{ui:Parameters}} v skupini {{ui:Parametric}} ali vtipkajte {{cmd:PARAMETERS}}) našteje vsako dimenzijsko omejitev (`d1`, `rad1`, `dia1`, `ang1` ali ime, ki ste ga dali) in vaše lastne parametre skupaj. Vsako ime se lahko uporabi v katerem koli izrazu.

Vsaka vrstica ima:

- **Ime**: vtipkajte novo, da jo preimenujete; vsak izraz, ki jo uporablja, sledi.
- **Izraz**: število (`40`) ali izraz (`width / 2 + gap`). Vtipkajte vanj in pritisnite {{key:Enter}}: risba sledi.
- **Vrednost**: kar izraz izračuna. Pri vrstici, ki jo vodi izraz, lahko tukaj vtipkate tudi število: CadCraft izračuna parameter za njim. Z `d1 = width / 2` vtipkanje `30` v vrednost d1 nastavi `width` na 60.

Ko dva parametra vodita vrednost (`width / 2 + gap`), pogovorno okno vpraša, kateri naj se spremeni. Vsaka sprememba je en korak razveljavitve ({{key:Mod+Z}}).

## Dodajte svojega

1. Odprite podokno {{ui:Parameters}}.
2. Vtipkajte ime (`gap`) in vrednost (`10`), nato izberite {{ui:Dodaj (A)}}.
3. Uporabite ga: v izrazu d1 vtipkajte `width / 2 + gap` in pritisnite {{key:Enter}}.

Imena se začnejo s črko ali `_` in vsebujejo črke, števke in `_`. Imena funkcij, `pi` in imena enot ne morejo biti imena.

## Izrazi

| Napišite | Pomeni |
|---|---|
| `+ - * / ^ %` | seštevanje, odštevanje, množenje, deljenje, potenca, ostanek |
| `( )` | združevanje |
| `sin cos tan asin acos atan atan2` | trigonometrija v stopinjah |
| `sqrt pow exp ln log abs sign` | koreni, potence, logaritmi |
| `ceil floor int round min max` | zaokroževanje in omejitve |
| `if(a > b, x, y)` | izbira |
| `pi` | 3.14159… |

Števila lahko imajo enoto: `25mm`, `1in`, `2'`, `90deg`. Dolžine z enoto se pretvorijo v milimetre, zato enote uporabljajte samo v risbah, merjenih v milimetrih; drugje vtipkajte navadna števila.

## V ukazni vrstici

`-PARAMETERS` dela enako brez podokna: `N` (Novo), `E` (Urejanje; tudi dimenzijska omejitev), `R` (Preimenovanje), `D` (Brisanje), `?` (Seznam).

## Kaj je zavrnjeno

- Izraz, ki uporablja samega sebe, neposredno ali prek drugih: „width in d1 se sklicujeta drug na drugega.“
- Vrednost, ki je mera ne more sprejeti: negativna dolžina, kot nad 180°.
- Vrednost, ki je risba ne more sprejeti z drugimi omejitvami: nič se ne spremeni, sporočilo pa imenuje omejitve, ki so na poti.
- Brisanje parametra, ki ga nekaj uporablja: podokno ponudi, da njegovo vrednost najprej zapiše vanje. Ime dimenzijske omejitve se izbriše z brisanjem omejitve.
