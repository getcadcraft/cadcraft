---
title: Zestawienia materiałów według stref
summary: Oznacz obszary rysunku jako strefy i umieść dla każdej tabelę, która zlicza bloki w jej wnętrzu. Tabele podążają za rysunkiem podczas pracy, a ty wybierasz, które kolumny pokazuje każda z nich.
keywords: zestawienie materiałów, BOM, lista części, zestawienie, strefa, obszar, tabela, liczenie, atrybut, kolumny, numer pozycji, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Strefa** to nazwany obszar rysunku. **Tabela zestawienia materiałów** wylicza to, co leży w jednej strefie albo w całym rysunku: każdy blok z jego ilością i wartościami atrybutów. Rysunek może mieć dowolnie wiele stref i tabel, a jedna strefa może mieć kilka tabel z różnymi kolumnami.

Narzędzia są na karcie Bloki w grupie {{ui:Bill of materials}}, w menu {{ui:More}} grupy Bloki, i można je wpisać.

## Tworzenie strefy

Wpisz {{cmd:BOMZONE}} i wybierz jedno z poniższych:

- kliknij dwa przeciwległe narożniki, aby uzyskać prostokąt,
- wybierz {{ui:Polygon}}, kliknij każdy narożnik i naciśnij Enter, aby go zamknąć, lub
- wybierz {{ui:Object}} i wskaż zamkniętą polilinię, okrąg, elipsę lub zamknięty splajn. Jego obrys zostaje skopiowany; obiekt pozostaje bez zmian.

Potem wpisz nazwę strefy. Strefa jest rysowana jako przerywany obrys z nazwą nad lewym górnym narożnikiem, na warstwie `BOM-ZONES`, która nie jest drukowana. Włącz drukowanie tej warstwy, jeśli chcesz strefy na papierze.

Strefa to zwykła zamknięta polilinia: przesuwaj ją, rozciągaj lub przeciągaj jej uchwyty, a jej nazwa podąża za nią. Aby zmienić nazwę strefy, edytuj tekst nazwy albo użyj {{cmd:BOMZONE}} i {{ui:Rename}}. {{ui:Zones}} wypisuje każdą strefę i liczbę jej tabel.

## Umieszczanie tabeli

Wpisz {{cmd:BOMTABLE}} (lub {{cmd:BOM}}), wskaż obrys strefy albo jej nazwę, podaj wysokość tekstu i kliknij, gdzie ma być lewy górny narożnik tabeli. Naciśnij Enter zamiast wskazywania strefy albo wybierz {{ui:Whole}}, aby uzyskać tabelę całego rysunku.

Nowa tabela pokazuje numer pozycji, ilość, nazwę bloku i kolumnę dla każdego atrybutu, jaki niosą bloki (pierwsze sześć; pozostałe są proponowane bez zaznaczenia). Bloki o tej samej nazwie i tych samych wartościach atrybutów dzielą jeden wiersz.

## Co liczy się jako wewnątrz

- Blok liczy się w strefie, która zawiera jego **punkt wstawienia**.
- Linia, łuk, okrąg, polilinia, elipsa, splajn lub kreskowanie liczą się **w całości** w strefie, która zawiera środek ich zasięgu (dla linii jej punkt środkowy). Ich długość nie jest przycinana na krawędzi strefy.
- Punkt dokładnie na krawędzi jest wewnątrz.
- Strefy mogą się nakładać. Każda strefa liczy samą siebie, więc obiekt w części wspólnej trafia do obu tabel.

## Tabele podążają za rysunkiem

Gdy dodajesz, przesuwasz, kopiujesz lub usuwasz blok, edytujesz atrybut albo zmieniasz kształt lub przesuwasz strefę, każda tabela jest przerysowywana w tym samym kroku. Cofnięcie cofa twoją edycję i zmianę tabeli razem.

Aby tabela przestała podążać, zaznacz {{ui:Frozen}} w jej ustawieniach. Zamrożona tabela zmienia się tylko wtedy, gdy edytujesz jej ustawienia albo wpiszesz {{cmd:BOMUPDATE}}, który od razu aktualizuje wszystkie tabele.

## Wybór kolumn

Zaznacz tabelę i wpisz {{cmd:BOMEDIT}}. W oknie:

- **Kolumny**: zaznacz te, które mają być widoczne (pozycja, ilość, nazwa, warstwa, długość, pole, uwagi i każdy atrybut), wpisz własny nagłówek dla dowolnej z nich i przesuwaj je w górę lub w dół.
- {{ui:Group rows by}}: nazwa bloku i wartości atrybutów, sama nazwa bloku, warstwa lub jeden atrybut. W scalonym wierszu wartość, która różni się między blokami, wyświetla się jako „różne”.
- {{ui:Sort by}} dowolnej kolumny, rosnąco lub malejąco.
- {{ui:Title}}, {{ui:Show the title}} i {{ui:Totals row}}.
- {{ui:Count linework by layer}} dodaje jeden wiersz na warstwę z liczbą obiektów, ich łączną długością i, dla zamkniętych kształtów, łącznym polem, w jednostkach rysunku.
- **Uwagi**: zaznacz kolumnę Uwagi, a następnie wpisz uwagę dla dowolnego wiersza w polu pod tabelą w dolnej części okna.

Każda tabela zachowuje własne wybory.

## Numery pozycji

Wiersz zachowuje swój numer pozycji, dopóki jest w tabeli. Nowy wiersz dostaje następny wolny numer, a numer, który został nadany, nie jest już używany ponownie, dzięki czemu wyniesienia i notatki cytujące numer pozostają poprawne. {{ui:Renumber items}} numeruje je od 1 w kolejności wyświetlania.

Wiersz jest rozpoznawany po tym, co grupuje: zmień sposób grupowania wierszy albo wartość atrybutu, której grupowanie używa, a wiersz liczy się jako nowy.

## Eksport i inne programy

{{cmd:BOMEXPORT}} lub {{ui:Export CSV}} w oknie zapisuje tabelę jako plik .csv do arkusza kalkulacyjnego.

W pliku DWG lub DXF tabela jest zwykłym blokiem linii i tekstu, więc inne programy pokazują ją i drukują tak, jak została narysowana. Nie jest tam obiektem tabeli i nie aktualizuje się w innych programach. Połączenie z jej strefą jest zachowane w pliku jako dane rozszerzeń, które CadCraft odczytuje z powrotem, dzięki czemu tabela znów aktualizuje się na bieżąco po ponownym otwarciu rysunku w CadCraft. Plik R12 DXF rysunku bez arkusza nie zachowuje ustawienia „nie drukowana” warstwy strefy.

Rozbicie tabeli zamienia ją w luźne linie i tekst oraz kończy połączenie.
