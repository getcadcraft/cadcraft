---
title: Wpisywanie i pokazywanie rumbów oraz kątów w stopniach, minutach i sekundach
summary: Wpisz kierunek jako rumb geodezyjny, na przykład N45°23'30"E, albo kąt w stopniach, minutach i sekundach wszędzie tam, gdzie pytany jest kąt, a poleceniem AUNITS wybierz sposób pokazywania kątów na rysunku.
keywords: rumb, rumby, geodeta, rumb ćwiartkowy, N45E, stopnie minuty sekundy, DMS, kąt, kierunek, działka, wytyczanie, ciąg poligonowy, AUNITS, ANGUNITS, format kąta, biegunowy, odległość bezpośrednia, DIST
from: af805567
---

Wszędzie tam, gdzie CadCraft pyta o **kąt lub kierunek**, możesz wpisać **rumb ćwiartkowy** albo kąt w **stopniach, minutach i sekundach**, a także zwykłą liczbę stopni.

## Rumby

Rumb podaje północ lub południe, kąt do 90°, a potem wschód lub zachód:

| Wpisujesz | Kierunek |
|---|---|
| `N45°23'30"E` lub `N45d23'30"E` | 45°23'30" od północy w stronę wschodu |
| `S10-30-00W` lub `S 10 30 W` | 10°30' od południa w stronę zachodu (myślniki lub spacje między częściami) |
| `N45.5E` | 45,5° od północy w stronę wschodu |
| `N`, `E`, `S`, `W` | dokładnie na północ, wschód, południe, zachód |

Litery mogą być w dowolnej wielkości. W hiszpańskim `O` oznacza też zachód (oeste). `d` i `°` znaczą to samo; `'` to minuty, a `"` to sekundy.

Aby wytyczyć linię działki o długości 20 m pod N45°23'E, uruchom {{cmd:LINE}}, wpisz pierwszy punkt, a następnie `@20<N45d23'E`. To samo działa przy monicie kąta {{cmd:ROTATE}}, przy każdym innym monicie pytającym o kąt oraz w polu kąta w {{ui:Dynamic input}}.

## Stopnie, minuty, sekundy

`45°23'30"`, `45d23'30"`, `45d30'` lub `45d` to kąt od osi X, przeciwnie do ruchu wskazówek zegara. Znak `°` lub `d` jest potrzebny: `45-23-30` jest odczytywane jako działanie arytmetyczne (45 − 23 − 30). Minuty i sekundy muszą być mniejsze niż 60. Zwykła liczba, także z działaniem (`360/7`), nadal działa.

## Jak pokazywane są kąty

Wpisz {{cmd:AUNITS}} (lub wybierz {{ui:Angle format}} w {{ui:Properties}} › {{ui:Current settings}}) i wybierz:

- **Stopnie dziesiętne** (domyślnie): `44.6083°`.
- **Stopnie, minuty, sekundy**: `44°36'30"`.
- **Rumby geodezyjne**: `N45°23'30"E`.

Precyzja zależy od tego, co wpiszesz przy {{cmd:AUNITS}}: 0 pokazuje stopnie, 2 minuty, 4 sekundy, a od 5 do 8 dodaje części dziesiętne sekundy. Format pokazuje się w {{cmd:DIST}}, na pasku stanu, w oknie {{ui:Dynamic input}} oraz w dymkach śledzenia, a także w polach kąta w {{ui:Properties}} (edytowane pole przyjmuje dowolną z powyższych postaci). To jeden krok cofnięcia i jest zapisywany w plikach DWG i DXF (`$AUNITS`, `$AUPREC`); LISP odczytuje i zapisuje go jako `AUNITS` i `AUPREC`.
