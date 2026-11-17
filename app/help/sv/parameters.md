---
title: Använd parametrar och ekvationer
summary: Namnge storlekar, styr dem med uttryck som bredd / 2, och skriv ett tal på en styrd storlek för att ändra det som styr den.
keywords: parametrar, par, parameterhanterare, ekvationer, uttryck, variabler, tvåvägs, konstruktionsavsikt, användarparameter, fx
from: 650b9844
---

## En tabell för alla storlekar

Panelen {{ui:Parameters}} (knappen {{ui:Parameters}} i gruppen {{ui:Parametric}}, eller skriv {{cmd:PARAMETERS}}) listar varje måttvillkor (`d1`, `rad1`, `dia1`, `ang1`, eller det namn du gav det) och dina egna parametrar tillsammans. Vilket namn som helst kan användas i vilket uttryck som helst.

Varje rad har:

- **Namn**: skriv ett nytt för att byta namn; varje uttryck som använder det följer med.
- **Uttryck**: ett tal (`40`) eller ett uttryck (`width / 2 + gap`). Skriv i det och tryck på {{key:Enter}}: ritningen följer.
- **Värde**: vad det blir. På en rad som ett uttryck styr kan du också skriva ett tal här: CadCraft räknar ut parametern bakom det. Med `d1 = width / 2` sätter du `30` i d1:s värde, och `width` blir 60.

När två parametrar styr ett värde (`width / 2 + gap`) frågar en dialogruta vilken du vill ändra. Varje ändring är ett ångringssteg ({{key:Mod+Z}}).

## Lägg till egna

1. Öppna panelen {{ui:Parameters}}.
2. Skriv ett namn (`gap`) och ett värde (`10`), välj sedan {{ui:Add}}.
3. Använd den: i d1:s uttryck skriver du `width / 2 + gap` och trycker på {{key:Enter}}.

Namn börjar med en bokstav eller `_` och innehåller bokstäver, siffror och `_`. Funktionsnamn, `pi` och enhetsnamn kan inte användas som namn.

## Uttryck

| Skriv | Betyder |
|---|---|
| `+ - * / ^ %` | addition, subtraktion, multiplikation, division, potens, rest |
| `( )` | gruppering |
| `sin cos tan asin acos atan atan2` | trigonometri i grader |
| `sqrt pow exp ln log abs sign` | rötter, potenser, logaritmer |
| `ceil floor int round min max` | avrundning och gränser |
| `if(a > b, x, y)` | ett val |
| `pi` | 3.14159… |

Tal kan ha en enhet: `25mm`, `1in`, `2'`, `90deg`. Längder med en enhet omvandlas till millimeter, så använd enheter bara i ritningar som mäts i millimeter; annars skriver du vanliga tal.

## På kommandoraden

`-PARAMETERS` gör detsamma utan panelen: Ny (N), Redigera (E) (även ett måttvillkor), Byt namn (R), Ta bort (D) och Lista (?).

## Det som nekas

- Ett uttryck som använder sig självt, direkt eller via andra: ”width, d1 använder varandra.”
- Ett värde som en storlek inte kan ta: en negativ längd, eller en vinkel över 180°.
- Ett värde som ritningen inte kan ta med sina andra villkor: ingenting ändras, och meddelandet anger vilka villkor som står i vägen.
- Att ta bort en parameter som något använder: panelen erbjuder att först skriva dess värde i de platser som använder den. Ett måttvillkors namn tas bort genom att ta bort villkoret.
