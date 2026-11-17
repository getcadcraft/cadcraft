---
title: Obracanie widoku i używanie własnych współrzędnych (UCS)
summary: Obróć widok o 90° lub o dowolny kąt bez przesuwania czegokolwiek w rysunku i ustaw układ współrzędnych użytkownika (UCS), aby punkty, orto, śledzenie biegunowe, siatka i nowy tekst podążały za własnymi osiami budynku.
keywords: ucs, układ współrzędnych użytkownika, rzut, obróć widok, obrót widoku, skręcenie widoku, ucs z, ucs 3point, ucs object, ucs world, nazwany ucs, ucsfollow, turnleft, turnright, turnworld, budynek pod kątem, obrócona siatka
from: 6f152c65
---

## Czego się nauczysz

Jak oglądać rysunek obrócony, tak aby budynek narysowany pod kątem wyglądał na ekranie prosto, i jak wpisywać punkty wzdłuż jego własnych osi. Nic w rysunku się nie przesuwa podczas tego: obiekty zachowują swoje współrzędne, obrót nie jest edycją, a rysunek nie zostaje oznaczony jako zmieniony.

## Obróć widok o ćwiartkę

1. Kliknij {{ui:Widok}} › {{ui:Więcej}} › {{ui:Obróć widok o 90° w lewo}} lub {{ui:Obróć widok o 90° w prawo}}.

Rysunek obraca się na ekranie wokół środka obszaru rysowania. Powtórz, aby obracać dalej.

2. Kliknij {{ui:Widok}} › {{ui:Więcej}} › {{ui:Powrót do świata}}, aby go wyrównać.

Za tym stoją polecenia {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} i {{cmd:TURNWORLD}}. Aby przypisać jednemu z nich klawisz, dodaj wiersz taki jak `TL=TURNLEFT` do swoich aliasów przez {{cmd:ALIASEDIT}}.

## Wyrównaj do budynku pod kątem

1. Wpisz `UCS` i naciśnij {{key:Enter}}, potem `OB` i {{key:Enter}}.
2. Kliknij linię ściany w pobliżu końca, który ma być początkiem.

UCS zaczyna się teraz w tym końcu, z osią X wzdłuż ściany, a widok obraca się tak, że ściana jest pozioma na ekranie. Ikona osi w lewym dolnym rogu pokazuje, dokąd wskazują osie UCS.

3. Rysuj jak zwykle. Gdy UCS jest ustawiony:
   - `x,y` i `@dx,dy` są mierzone wzdłuż osi UCS; `d<a` mierzy kąt od osi X UCS.
   - {{ui:Orto}}, śledzenie biegunowe i siatka podążają za osiami UCS, tak samo jak krzyżyk.
   - Nowy tekst i nowe akapity biegną wzdłuż osi X UCS; poziomy i pionowy kierunek {{cmd:DIMLINEAR}} też za nią podążają.
   - Współrzędne na pasku stanu i z {{cmd:ID}} są współrzędnymi UCS.
4. Aby wpisać punkt świata, gdy UCS jest ustawiony, dodaj przed nim `*`: `*0,0` albo `@*100,0`.
5. Wpisz `UCS`, {{key:Enter}}, a potem ponownie {{key:Enter}}, aby wrócić do świata.

## Inne sposoby ustawienia UCS

Przy monicie {{cmd:UCS}}:

| Wpisujesz | Co to robi |
|---|---|
| punkt | Nowy początek; potem kliknij punkt na nowej osi X albo naciśnij {{key:Enter}}, aby zachować kąt |
| `Z` | Obraca UCS wokół jego początku o kąt, który wpiszesz (stopnie, przeciwnie do ruchu wskazówek zegara) albo wskażesz |
| `3` (3point) | Początek, punkt na dodatniej osi X i punkt po dodatniej stronie Y |
| `OB` (OBject) | Z linii, łuku, okręgu, segmentu polilinii, tekstu, odwołania do bloku, punktu lub linii konstrukcyjnej |
| `P` (Previous) | Poprzedni UCS (ostatnie dziesięć jest zachowywanych, dopóki rysunek jest otwarty) |
| `W` (World) | Powrót do świata |
| `NA` (NAmed) | `S` zapisuje bieżący UCS pod nazwą, `R` przywraca jeden, `D` usuwa, `?` wyświetla listę |

Każda zmiana obraca widok tak, aby nowa oś X UCS była pozioma. {{cmd:PLAN}} obraca widok bez zmiany UCS: {{key:Enter}} dla bieżącego UCS, `U` dla zapisanego, `W` dla świata.

## Warto wiedzieć

- Każdy panel podzielonego ekranu zachowuje swój własny obrót. UCS należy do rysunku.
- Arkusze działają we współrzędnych papieru; ustaw UCS na karcie {{ui:Model}} albo wewnątrz okna widokowego.
- Okna zaznaczania przeciągane w obróconym widoku zaznaczają to, co leży w nich na ekranie.
- Procedury LISP dostają punkty w UCS z `getpoint`, mogą odczytać `UCSORG`, `UCSXDIR`, `UCSYDIR` i `VIEWTWIST`, a `trans` przelicza między światem, UCS i ekranem.

:::note
Zapisany plik zachowuje UCS i obrót widoku w późniejszej wersji; do tego czasu trzymają się, dopóki rysunek jest otwarty.
:::
