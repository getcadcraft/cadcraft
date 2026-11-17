---
title: Bruk parametere og ligninger
summary: Gi størrelser navn, styr dem med uttrykk som bredde / 2, og skriv et tall på en styrt størrelse for å endre det som styrer den.
keywords: parametere, par, parameterbehandling, ligninger, uttrykk, variabler, toveis, konstruksjonsintensjon, brukerparameter, fx
from: 650b9844
---

## Én tabell for alle størrelser

{{ui:Parametere}}-panelet ({{ui:Parametere}}-knappen i {{ui:Parametrisk}}-gruppen, eller skriv {{cmd:PARAMETERS}}) lister hver dimensjonsbegrensning (`d1`, `rad1`, `dia1`, `ang1`, eller navnet du ga den) og dine egne parametere sammen. Ethvert navn kan brukes i ethvert uttrykk.

Hver rad har:

- **Navn**: skriv et nytt for å gi nytt navn; hvert uttrykk som bruker det, følger med.
- **Uttrykk**: et tall (`40`) eller et uttrykk (`width / 2 + gap`). Skriv inn og trykk {{key:Enter}}: tegningen følger.
- **Verdi**: hva det regnes ut til. På en rad som et uttrykk styrer, kan du skrive et tall her også: CadCraft regner ut parameteren bak det. Med `d1 = width / 2` gir å skrive `30` i d1s verdi at `width` blir 60.

Når to parametere styrer en verdi (`width / 2 + gap`), spør en dialog hvilken som skal endres. Hver endring er ett angrestrinn ({{key:Mod+Z}}).

## Legg til egne

1. Åpne {{ui:Parametere}}-panelet.
2. Skriv et navn (`gap`) og en verdi (`10`), og velg {{ui:Legg til}}.
3. Bruk den: i d1s uttrykk skriver du `width / 2 + gap` og trykker {{key:Enter}}.

Navn starter med en bokstav eller `_` og består av bokstaver, sifre og `_`. Funksjonsnavn, `pi` og enhetsnavn kan ikke brukes som navn.

## Uttrykk

| Skriv | Betyr |
|---|---|
| `+ - * / ^ %` | addisjon, subtraksjon, multiplikasjon, divisjon, potens, rest |
| `( )` | gruppering |
| `sin cos tan asin acos atan atan2` | trigonometri i grader |
| `sqrt pow exp ln log abs sign` | røtter, potenser, logaritmer |
| `ceil floor int round min max` | avrunding og grenser |
| `if(a > b, x, y)` | et valg |
| `pi` | 3.14159… |

Tall kan ha en enhet: `25mm`, `1in`, `2'`, `90deg`. Lengder med enhet blir omregnet til millimeter, så bruk enheter bare i tegninger målt i millimeter; ellers skriv vanlige tall.

## På kommandolinjen

`-PARAMETERS` gjør det samme uten panelet: `N` ny, `E` rediger (også en dimensjonsbegrensning), `R` gi nytt navn, `D` slett, `?` liste.

## Hva som avvises

- Et uttrykk som bruker seg selv, direkte eller via andre: «width, d1 bruker hverandre.»
- En verdi en størrelse ikke kan ta: en negativ lengde, eller en vinkel over 180°.
- En verdi tegningen ikke kan ta med sine andre begrensninger: ingenting endres, og meldingen nevner begrensningene i veien.
- Sletting av en parameter som noe bruker: panelet tilbyr å skrive verdien inn i dem først. En dimensjonsbegrensnings navn slettes ved å slette begrensningen.
