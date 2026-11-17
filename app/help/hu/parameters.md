---
title: Paraméterek és egyenletek használata
summary: Nevezzen el méreteket, vezérelje őket olyan kifejezésekkel, mint a width / 2, és írjon be számot egy vezérelt méretre, hogy megváltoztassa, ami vezérli.
keywords: paraméterek, par, paraméterkezelő, egyenletek, kifejezések, változók, kétirányú, tervezési szándék, felhasználói paraméter, fx
from: 650b9844
---

## Egy táblázat minden mérethez

A {{ui:Parameters}} panel (a {{ui:Parametric}} csoport {{ui:Parameters}} gombja, vagy a {{cmd:PARAMETERS}} parancs beírása) egyben mutatja az összes méretkényszert (`d1`, `rad1`, `dia1`, `ang1`, vagy az Ön által adott nevet) és az Ön saját paramétereit. Bármely név bármely kifejezésben használható.

Minden sornak van:

- **Név**: írjon be újat az átnevezéshez; minden kifejezés, amely használja, követi.
- **Kifejezés**: egy szám (`40`) vagy kifejezés (`width / 2 + gap`). Írjon bele, és nyomja meg az {{key:Enter}}t: a rajz követi.
- **Érték**: az eredmény. Egy olyan soron, amelyet kifejezés vezérel, ide is beírhat számot: a CadCraft kiszámolja a mögötte lévő paramétert. Ha `d1 = width / 2`, a d1 értékébe írt `30` a `width` értéket 60-ra állítja.

Ha két paraméter vezérel egy értéket (`width / 2 + gap`), egy párbeszédpanel kérdezi, melyiket változtassa. Minden módosítás egy visszavonási lépés ({{key:Mod+Z}}).

## Saját hozzáadása

1. Nyissa meg a {{ui:Parameters}} panelt.
2. Írjon be egy nevet (`gap`) és egy értéket (`10`), majd válassza az {{ui:Add}} lehetőséget.
3. Használja: a d1 kifejezésébe írja be a `width / 2 + gap`-et, és nyomja meg az {{key:Enter}}t.

A nevek betűvel vagy `_`-vel kezdődnek, és betűkből, számjegyekből és `_` jelekből állnak. Függvénynév, a `pi` és mértékegység-név nem lehet név.

## Kifejezések

| Írja | Jelentése |
|---|---|
| `+ - * / ^ %` | összeadás, kivonás, szorzás, osztás, hatványozás, maradék |
| `( )` | csoportosítás |
| `sin cos tan asin acos atan atan2` | trigonometria fokban |
| `sqrt pow exp ln log abs sign` | gyökök, hatványok, logaritmusok |
| `ceil floor int round min max` | kerekítés és korlátok |
| `if(a > b, x, y)` | választás |
| `pi` | 3.14159… |

A számokhoz mértékegység is írható: `25mm`, `1in`, `2'`, `90deg`. A mértékegységgel megadott hosszak milliméterré váltódnak, ezért mértékegységet csak milliméterben mért rajzokban használjon; máshol egyszerű számokat írjon.

## A parancssorban

A `-PARAMETERS` ugyanezt teszi a panel nélkül: `N` új, `E` szerkesztés (méretkényszert is), `R` átnevezés, `D` törlés, `?` lista.

## Mit utasít el

- Önmagát használó kifejezés, közvetlenül vagy másokon keresztül: „width, d1 egymást használják.”
- Olyan érték, amelyet a méret nem vehet fel: negatív hossz, 180° feletti szög.
- Olyan érték, amelyet a rajz többi kényszerével nem lehet megvalósítani: semmi nem változik, és az üzenet megnevezi az útban lévő kényszereket.
- Olyan paraméter törlése, amelyet valami használ: a panel felajánlja, hogy előbb az értékét beírja azokba. Egy méretkényszer nevét a kényszer törlésével lehet eltávolítani.
