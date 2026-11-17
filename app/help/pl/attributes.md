---
title: Atrybuty bloków
summary: Zobacz i zmieniaj wartości, jakie niesie odwołanie do bloku, na przykład numer pozycji lub producenta, i zachowaj je przy zapisie kopii.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, tabliczka rysunkowa, edycja w miejscu, edytor atrybutów, attdef, definiuj atrybut, bedit, edytor bloków, bclose, atrybut, atrybuty, attdef, attrib, znacznik, numer pozycji, wartość, niewidoczny, stały, blok, właściwości, lista, znacznik urządzenia
from: 34d307c7
---

## Czym są atrybuty

Atrybut to nazwana wartość, która podróżuje z odwołaniem do bloku: numer pozycji znacznika urządzenia, nazwa znacznika pomieszczenia, klasa ogniowa drzwi. Definicja bloku mówi, jakie atrybuty ma (każdy ma **znacznik**, **podpowiedź**, **wartość domyślną** oraz miejsce, wysokość i kąt swojego tekstu). Każde odwołanie do bloku niesie własne wartości.

Niektóre atrybuty są **niewidoczne**: przechowują dane, takie jak producent czy numer modelu, ale nigdy nie są rysowane. Niektóre są **stałe**: takie same dla każdego odwołania, ustalone przez blok.

## Skąd biorą się atrybuty

- Bloki w otwartych plikach DWG i DXF zachowują swoje atrybuty wraz z wartościami każdego odwołania.
- Bloki wprowadzane poleceniem {{cmd:INSERT}} i opcją {{ui:File}} zachowują swoje. Zobacz [Wstawianie z pliku lub z biblioteki](topic:insert-from-file-and-library).
- Elementy biblioteki wchodzą jako bloki z atrybutami: widoczny numer pozycji i dane elementu, niewidoczne.

- Bloki, które tworzysz sam: najpierw zdefiniuj atrybuty poleceniem {{cmd:ATTDEF}} (poniżej), a potem zaznacz je wraz z innymi obiektami przy tworzeniu bloku.

## Definiowanie atrybutów dla własnych bloków

1. Narysuj linie bloku, na przykład znacznik pomieszczenia.
2. Wybierz {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}} albo wpisz `ATT` i naciśnij {{key:Enter}}.
3. Historia pokazuje tryby (`Invisible=No Constant=No Preset=No`). Wpisz `I`, `C` lub `P`, aby przełączyć jeden z nich, i naciśnij {{key:Enter}}, gdy są poprawne. Wartości niewidoczne są zachowane, ale nie rysowane; stała ma tę samą wartość w każdym odwołaniu; wstępna nie jest pytana przy wstawianiu bloku.
4. Wpisz znacznik (na przykład `ROOM_NO`: wielkie litery, bez spacji), podpowiedź (`Numer pomieszczenia`) i wartość domyślną (`101`).
5. Kliknij, gdzie ma trafić wartość, i podaj wysokość oraz obrót. Znacznik jest widoczny na rysunku.
6. Utwórz blok poleceniem {{cmd:BLOCK}}, zaznaczając razem linie i definicje atrybutów. Odwołanie, które je zastąpi, dostaje wartości domyślne; każde nowe {{cmd:INSERT}} o nie pyta.

Zaznaczona definicja atrybutu pokazuje w {{ui:Properties}} {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} oraz tryby.

## Zmiana bloku: edytor bloków

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) otwiera blok osobno: wpisz jego nazwę (albo najpierw zaznacz odwołanie). Pasek u góry mówi, który blok edytujesz. Rysuj, usuwaj i zmieniaj jego obiekty zwykłymi poleceniami oraz dodawaj lub zmieniaj definicje atrybutów. Następnie kliknij {{ui:Save block}} (lub wpisz {{cmd:BCLOSE}} i `S`): każde odwołanie pokazuje zmianę, a jedno {{key:Mod+Z}} cofa wszystko. {{ui:Discard changes}} (`BCLOSE`, `D`) zostawia blok bez zmian.

Po dodaniu, usunięciu lub zmianie definicji atrybutów zapis także wyrównuje każde odwołanie: wpisane przez ciebie wartości są zachowane, nowy atrybut dostaje wartość domyślną, usunięty znika, a każdy atrybut wraca tam, gdzie wskazuje jego definicja. Historia podaje, ile odwołań zaktualizowano.

## Edycja tabliczki rysunkowej w miejscu (REFEDIT)

Tabliczka rysunkowa na arkuszu często leży w bloku. Aby zmienić jej linie lub teksty, nie opuszczając arkusza:

1. Zaznacz tabliczkę, a następnie wybierz {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (lub wpisz {{cmd:REFEDIT}}).
2. Jej zawartość staje się zwykłymi obiektami w swoim miejscu; wszystko inne jest wyszarzone i nie można tego zmieniać.
3. Zmieniaj, usuwaj lub rysuj: nowe obiekty stają się częścią bloku.
4. Kliknij {{ui:Save the block}} w pasku u góry (lub wpisz {{cmd:REFCLOSE}} i `S`). Każde odwołanie pokazuje zmianę, a jedno {{key:Mod+Z}} cofa całą edycję. {{ui:Discard}} zostawia blok bez zmian.

Rysunek dołączony, blok dynamiczny lub odwołanie przeskalowane inaczej w poziomie i w pionie nie może być edytowane w miejscu: użyj {{cmd:BEDIT}} (lub otwórz dołączony rysunek).

:::note
Zapisz lub odrzuć zmiany w edytorze bloków, zanim zapiszesz rysunek: plik zapisany przy otwartym edytorze zawiera blok w postaci sprzed edycji.
:::

## Wypełnianie przy umieszczaniu bloku

1. Wpisz `I` i naciśnij {{key:Enter}}, wpisz nazwę bloku i naciśnij {{key:Enter}}.
2. Kliknij, gdzie ma trafić.
3. CadCraft pyta o każdą wartość, na przykład `Podaj numer pozycji (ITEM) <>`. Wpisz wartość i naciśnij {{key:Enter}}, albo naciśnij {{key:Enter}}, aby zachować wartość domyślną podaną w nawiasach ostrych.

Wartości, które blok oznacza jako wstępne, oraz stałe nie są pytane. Przyjmują wartość domyślną.

## Odczyt i zmiana wartości

1. Kliknij odwołanie do bloku.
2. W prawym panelu, pod {{ui:Attributes}}, każdy znacznik ma swoją wartość. Niewidoczne oznaczono jako `ukryte`.
3. Kliknij wartość, wpisz nową i naciśnij {{key:Enter}}.

Rysunek pokazuje nową wartość od razu. Każda zmiana to jeden krok: {{key:Mod+Z}} ją cofa.

**Edytor atrybutów.** Kliknij dwukrotnie odwołanie z atrybutami (lub wpisz {{cmd:EATTEDIT}}): okno {{ui:Edit attributes}} wypisuje każdy znacznik z jego podpowiedzią i wartością. Wpisz nowe wartości; kliknij wiersz, aby zmienić {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} i {{ui:Invisible}} tego atrybutu, tylko dla tego odwołania. {{ui:Apply}} zostawia okno otwarte; {{ui:OK}} stosuje zmiany i zamyka okno. Każde {{ui:Apply}} lub {{ui:OK}} to jeden krok cofnięcia.

**W wierszu poleceń** {{cmd:ATTEDIT}} pyta o każdą wartość po kolei: wpisz nową albo naciśnij {{key:Enter}}, aby ją zachować.

## Zmiana definicji atrybutów (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) wypisuje atrybuty bloku: zmieniaj znacznik, podpowiedź lub wartość domyślną, zaznaczaj {{ui:Invisible}}, {{ui:Constant}} lub {{ui:Preset}} i przesuwaj je w górę lub w dół (kolejność określa, o co są pytane wartości). Przy zaznaczonej opcji {{ui:Update the references (values kept)}} przycisk {{ui:Apply}} także wyrównuje każde odwołanie; przemianowany znacznik zachowuje swoje wartości. Każde {{ui:Apply}} to jeden krok cofnięcia.

{{cmd:ATTSYNC}} ręcznie wyrównuje odwołania z definicjami ich bloków: `S` wybiera odwołanie, `N` podaje nazwę bloku, `A` obejmuje wszystkie bloki. Wartości są zachowane.

Wartości pól elementu biblioteki (jego identyfikator, wersja, licencja i atrybucja) są pokazywane, ale nie można ich edytować, aby sprawdzanie aktualizacji działało. Numer pozycji i ilość możesz zmieniać.

## Wypisywanie ich

Zaznacz odwołania i wpisz `LI` (dla {{cmd:LIST}}). Historia pokazuje każdy atrybut jako `TAG = wartość`, z `(niewidoczny)` lub `(stały)` tam, gdzie to dotyczy.

## Przesuwanie, obracanie i rozbijanie

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} i {{cmd:MIRROR}} zachowują wartości; tekst przesuwa się razem z blokiem i pozostaje czytelny.
- {{cmd:EXPLODE}} zamienia widoczne atrybuty w zwykły tekst z ich wartościami. Niewidoczne są usuwane.

## Zapis

Zapisany DWG i zapisany DXF zachowują każdy atrybut: definicje każdego bloku (także niewidoczne, stałe i wstępne) oraz wartości każdego odwołania. Inne programy CAD odczytują je jako zwykłe atrybuty bloków.

W DXF R12 wartość dłuższa niż 255 znaków zostaje skrócona do 255, a historia to podaje.

## Częste błędy

- **Wartość nie pojawia się na rysunku.** Jest niewidoczna albo pusta. Wartości niewidoczne nadal są widoczne w prawym panelu.
- **Wpisana wartość trafiła do wiersza poleceń.** Najpierw kliknij w pole wartości w prawym panelu.
