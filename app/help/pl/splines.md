---
title: Krzywe i polilinie: SPLINE, SPLINEDIT, PEDIT
summary: Rysuj gładką krzywą przez punkty lub z wielokąta kontrolnego, edytuj jej punkty dopasowania i kontrolne oraz edytuj polilinie (łącz, zamykaj, zmieniaj szerokość, dopasuj, spline, usuń wygładzenie) lub zamień spline w polilinię.
keywords: spline, splinedit, spl, spe, pedit, pe, punkty dopasowania, punkty kontrolne, wagi, nurbs, edycja polilinii, połącz, dopasowanie krzywej, usuń wygładzenie, zamień na polilinię, precyzja, styczna, krzywa, tolerancja dopasowania
from: d31f72d8
---

## Co powstanie

Krzywa przez pięć punktów, potem ta sama krzywa edytowana na trzy sposoby oraz polilinia zbudowana z trzech linii.

## Narysuj spline przez punkty

1. Wpisz `SPL` i naciśnij {{key:Enter}}.
2. Wskaż lub wpisz punkty, przez które ma przechodzić krzywa: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Po ostatnim naciśnij {{key:Enter}}.
3. {{ui:Styczna początkowa}}: wskaż punkt, w którego kierunku ma wychodzić krzywa, albo naciśnij {{key:Enter}}, aby program to rozstrzygnął. Zrób to samo dla stycznej końcowej.

Krzywa przechodzi przez każdy punkt. Wpisz `C` zamiast {{key:Enter}}, aby ją zamknąć (krzywa wraca do pierwszego punktu). {{key:U}} (`Cofnij`) cofa ostatni punkt podczas rysowania.

### Narysuj z wielokąta kontrolnego

Wpisz `M` przy pierwszym monicie, potem `C` (Wierzchołki kontrolne) i stopień od 1 do 5 (zwykle 3). Wskazane punkty są teraz narożnikami wielokąta, który przyciąga krzywą; krzywa zaczyna się w pierwszym, a kończy w ostatnim. Krzywa zamknięta owija się dookoła, bez narożnika w miejscu połączenia.

### Zamień polilinię w spline

Przy pierwszym monicie wpisz `O` (Obiekt) i wybierz polilinie lub linie. Staną się splinami przechodzącymi przez ich wierzchołki; oryginały znikną.

## Edytuj spline

Zaznacz go i wpisz `SPE` (albo wpisz `SPE` i wskaż go). Uchwyty pokazują punkty dopasowania (lub punkty kontrolne spline, który ich nie ma): przeciągnij jeden, aby zmienić kształt krzywej. Przy monicie:

- **Dane dopasowania** (spline narysowany przez punkty): `A` dodaje punkt dopasowania (wskaż, gdzie), `D` usuwa jeden (wskaż w pobliżu), `M` przesuwa jeden (wskaż w pobliżu, potem wskaż nowe miejsce), `T` ustawia styczne końcowe, `P` usuwa wszystkie punkty dopasowania, tak że od tej chwili spline jest edytowany przez punkty kontrolne.
- **Edycja wierzchołka**: `A` dodaje punkt kontrolny bez zmiany krzywej, `M` przesuwa jeden, `W` nadaje jednemu **wagę** (powyżej 1 przyciąga krzywą bliżej niego, poniżej 1 pozwala jej się oddalić).
- **Otwórz** lub **Zamknij**, oraz **Odwróć** (krzywa biegnie w przeciwnym kierunku).
- **Zamień na polilinię** (`P`): spline staje się polilinią; precyzja to liczba odcinków przypadających na każdy przedział (zwykle 10).
- **Cofnij (U)** cofa ostatnią zmianę; **Wyjdź (X)** kończy.

{{ui:Właściwości}} pokazuje stopień spline, liczbę jego punktów dopasowania i kontrolnych, długość oraz pozwala go otworzyć lub zamknąć.

## Edytuj polilinię

Zaznacz polilinię i wpisz `PE`. Linia, łuk lub spline wybrane do edycji są najpierw proponowane jako polilinia do zamiany (dla spline pytane jest o precyzję).

- **Zamknij** / **Otwórz** łączy lub rozdziela końce.
- **Połącz** dodaje linie, łuki i polilinie, których końce stykają się z końcem polilinii. `Fuzz distance` to odległość, na jaką końce mogą być od siebie i nadal się połączyć (0 oznacza, że muszą się stykać).
- **Szerokość** nadaje całej polilinii jedną szerokość (0 ją usuwa).
- **Dopasuj** zastępuje polilinię gładką krzywą przechodzącą przez jej wierzchołki; **Spline** zastępuje ją sześcienną krzywą B-spline, która za nimi podąża (zaczyna się i kończy na pierwszym i ostatnim wierzchołku i pozostaje blisko pozostałych). Obie stają się polilinią z krótkich odcinków, a oryginalne narożniki są zachowane, więc **Usuń wygładzenie** je przywraca.
- **Generowanie typu linii** określa, czy linia przerywana ciągnie się przez całą polilinię, czy zaczyna się od nowa przy każdym wierzchołku.
- **Odwróć** zmienia kolejność jej wierzchołków. **Wiele** (`M` przy pierwszym monicie) edytuje kilka polilinii z tymi samymi opcjami.

Edycja wierzchołków polilinii w {{ui:Właściwości}} lub za pomocą uchwytów pozostaje bez zmian: PEDIT nie ma edytora wierzchołków.

## W plikach

DWG i DXF 2000 zachowują spline jako spline: stopień, punkty kontrolne, węzły, wagi, punkty dopasowania i styczne. Spline otwarty i niezmieniony zapisuje się z powrotem dokładnie tak, jak był. DXF R12 nie ma splinów: zapisywany jest jako polilinia wzdłuż krzywej, a historia podaje, ile ich jest.

Odsunięcie, przytnij, wydłuż, zaokrąglenie, przerwij i połącz nie działają na splinach. Rozbij spline poleceniem {{cmd:EXPLODE}} albo zedytuj go poleceniem {{cmd:PEDIT}}, aby uzyskać polilinię, którą te polecenia obsługują.

## Częste błędy

- **Krzywa wybiega między bliskimi punktami.** Krzywa przez punkty wygina się tam, gdzie wygięte są punkty. Użyj mniejszej liczby punktów lub wielokąta kontrolnego.
- **„To nie jest spline.”** SPLINEDIT przyjmuje tylko spline; {{cmd:PEDIT}} edytuje polilinie.
- **Zamknięty spline dopasowania ma w innym programie nieco inny kształt.** CadCraft zamyka go jednym gładkim połączeniem w pierwszym punkcie; inny program może zamknąć go krzywą okresową. Zamknięty spline punktów kontrolnych jest taki sam w obu.
