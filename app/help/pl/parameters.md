---
title: Używanie parametrów i równań
summary: Nazywaj wymiary, steruj nimi wyrażeniami takimi jak width / 2 i wpisz liczbę przy sterowanym wymiarze, aby zmienić to, co nim steruje.
keywords: parametry, par, menedżer parametrów, równania, wyrażenia, zmienne, dwukierunkowe, zamiar projektowy, parametr użytkownika, fx
from: 650b9844
---

## Jedna tabela dla każdego wymiaru

Panel {{ui:Parametry}} (przycisk {{ui:Parametry}} w grupie {{ui:Parametryczne}}, albo wpisz {{cmd:PARAMETERS}}) wymienia każde wymiarowe więzy (`d1`, `rad1`, `dia1`, `ang1` albo nazwę, którą nadałeś) i twoje własne parametry razem. Każdej nazwy można użyć w dowolnym wyrażeniu.

Każdy wiersz ma:

- **Nazwa**: wpisz nową, aby zmienić nazwę; każde wyrażenie, które jej używa, pójdzie za nią.
- **Wyrażenie**: liczba (`40`) albo wyrażenie (`width / 2 + gap`). Wpisz je i naciśnij {{key:Enter}}: rysunek się dostosuje.
- **Wartość**: to, co wychodzi jako wynik. W wierszu, który steruje wyrażeniem, możesz tu też wpisać liczbę: CadCraft wylicza parametr, który za tym stoi. Przy `d1 = width / 2` wpisanie `30` w wartości d1 ustawia `width` na 60.

Gdy dwa parametry sterują wartością (`width / 2 + gap`), okno pyta, który zmienić. Każda zmiana to jeden krok cofania ({{key:Mod+Z}}).

## Dodawanie własnego

1. Otwórz panel {{ui:Parametry}}.
2. Wpisz nazwę (`gap`) i wartość (`10`), a następnie wybierz {{ui:Dodaj (A)}}.
3. Użyj go: w wyrażeniu d1 wpisz `width / 2 + gap` i naciśnij {{key:Enter}}.

Nazwy zaczynają się od litery lub `_` i zawierają litery, cyfry oraz `_`. Nazwy funkcji, `pi` i nazwy jednostek nie mogą być nazwami parametrów.

## Wyrażenia

| Zapis | Znaczy |
|---|---|
| `+ - * / ^ %` | dodawanie, odejmowanie, mnożenie, dzielenie, potęga, reszta z dzielenia |
| `( )` | grupowanie |
| `sin cos tan asin acos atan atan2` | trygonometria w stopniach |
| `sqrt pow exp ln log abs sign` | pierwiastki, potęgi, logarytmy |
| `ceil floor int round min max` | zaokrąglanie i ograniczenia |
| `if(a > b, x, y)` | wybór |
| `pi` | 3.14159… |

Liczby mogą mieć jednostkę: `25mm`, `1in`, `2'`, `90deg`. Długości z jednostką są zamieniane na milimetry, więc używaj jednostek tylko w rysunkach mierzonych w milimetrach; w innych wpisuj zwykłe liczby.

## W wierszu poleceń

`-PARAMETERS` działa tak samo bez panelu: `N` nowy, `E` edycja (także wymiarowego więzu), `R` zmiana nazwy, `D` usunięcie, `?` lista.

## Co jest odrzucane

- Wyrażenie, które używa samego siebie, bezpośrednio lub przez inne: „width, d1 używają się nawzajem.”
- Wartość, której wymiar nie może przyjąć: ujemna długość, kąt powyżej 180°.
- Wartość, której rysunek nie może przyjąć przy swoich pozostałych więzach: nic się nie zmienia, a komunikat podaje, które więzy przeszkadzają.
- Usunięcie parametru, którego coś używa: panel proponuje najpierw wpisanie jego wartości w miejsce, gdzie był używany. Nazwę wymiarowego więzu usuwa się, usuwając sam więz.
