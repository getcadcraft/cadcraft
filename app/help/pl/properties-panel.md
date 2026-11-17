---
title: Panel Właściwości
summary: Zobacz i zmieniaj wszystko o zaznaczonych obiektach, wiele naraz: współrzędne z Z, rozmiary, tekst, ustawienia wymiarów, przezroczystość i więcej. Pola przyjmują wyrażenia i długości z jednostkami.
keywords: sumy, całkowita długość, całkowite pole, suma, długość zaznaczenia, właściwości, paleta właściwości, ctrl+1, pr, ch, mo, ddmodify, różne, szybkie zaznaczanie, pickadd, współrzędne, z, rzędna, grubość, przezroczystość, materiał, hiperłącze, wyrażenie, quickcalc, wierzchołek, styl wymiarowania, tolerancja, miejsca po przecinku
from: 10d6a829
---

## Czego się nauczysz

Jak otworzyć panel Właściwości, zmienić jeden obiekt albo sto za jednym razem, wpisać dokładne współrzędne (z Z), użyć wyrażeń i jednostek w każdym polu liczbowym oraz co pokazuje każdy rodzaj obiektu.

## Otwórz go

Panel znajduje się po prawej. Aby wyprowadzić go na wierzch:

- Naciśnij {{key:Mod+1}} lub wpisz {{cmd:PROPERTIES}} (lub `PR`, `CH`, `MO`).
- Kliknij dwukrotnie obiekt (tekst i wielokrotne odnośniki otwierają swój edytor tekstu).

Panel jest przesuwalny jak inne: przeciągnij jego uchwyt, aby zadokować go z lewej, prawej lub na dole, albo upuść go nad rysunkiem, aby go odłączyć (zob. [Ustawianie paneli i używanie drugiego monitora](common:arrange-panels)).

### Schowaj go

Przycisk pinezki w prawym górnym rogu panelu włącza **automatyczne ukrywanie**: panel składa się do paska przy prawej krawędzi, a rysunek dostaje miejsce. Wskaż pasek (lub naciśnij {{key:Mod+1}}), a panel otworzy się nad rysunkiem; odsuń się, a znów się złoży. Kliknij pinezkę ponownie, aby zostawić go otwartym. {{cmd:PROPERTIESCLOSE}} także go składa.

## Sekcje

Właściwości są pogrupowane w sekcje, które można składać: **Ogólne**, **Geometria**, **Tekst**, **Linie i strzałki**, **Dopasowanie**, **Jednostki główne**, **Jednostki alternatywne**, **Tolerancje**, **Wzór**, **Różne**, a dla bloków **Atrybuty** i **Element biblioteki**. Kliknij nazwę sekcji, aby ją złożyć lub otworzyć; CadCraft pamięta, które złożyłeś.

Przeciągnij cienką linię między nazwami a wartościami, aby nazwy były szersze lub węższe. Kliknij ją dwukrotnie, aby przywrócić domyślną szerokość. Z klawiaturą ustaw na niej fokus i użyj klawiszy strzałek.

## Zmień wartość

1. Kliknij wiersz. Nagłówek mówi "Linia".
2. Kliknij w {{ui:Długość}}. Podczas edycji pole pokazuje pełną wartość, a nie zaokrągloną.
3. Wpisz `2500` i naciśnij {{key:Enter}}. Linia ma teraz długość 2500, zachowując punkt początkowy i kąt.

{{key:Enter}} albo kliknięcie gdzie indziej stosuje wartość; {{key:Esc}} przywraca starą wartość. Każda zmiana to jeden krok cofnięcia.

### Wyrażenia i jednostki

Każde pole liczbowe przyjmuje więcej niż zwykłą liczbę:

| Wpisujesz | Otrzymujesz |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (cale, w rysunku w stopach i calach) |
| `900mm`, `3.5m`, `2ft` | Przeliczone na jednostki rysunku |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (pola kątów) |
| `0.5r`, `100g` | Radiany i grady, jako stopnie |

Długość z jednostką wymaga, aby rysunek miał jednostki: najpierw ustaw {{ui:Jednostki}} w {{ui:Nowe obiekty}} (przy niczym niezaznaczonym). Błędny wpis jest odrzucany z uwagą pod panelem i nic się nie zmienia; nigdy nie jest zapisywany jako 0. Funkcje: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; kąty w stopniach.

## Zmień wiele obiektów naraz

1. Zaznacz kilka obiektów, na przykład 8 linii i 4 wymiary.
2. Nagłówek mówi "12 obiektów", a lista u góry oferuje **Wszystkie (12)**, **Linia (8)** i **Wymiar (4)**.
3. **Wszystkie** pokazuje, co ma każdy obiekt (warstwa, kolor, typ linii…). Wybierz **Wymiar (4)**, aby zobaczyć ustawienia wymiarów.
4. Zmień wartość, na przykład {{ui:Miejsca po przecinku}} na `1`.

Wszystkie cztery wymiary zmieniają się w jednym kroku cofnięcia. Pole pokazujące **Różne** oznacza, że obiekty się różnią; wpisanie wartości ustawia ją na wszystkich. Obiekty na zablokowanych warstwach zostają bez zmian, a uwaga podaje, ile ich jest.

## Sumy zaznaczenia

Gdy zaznaczonych jest kilka obiektów, sekcja {{ui:Sumy}} na górze podaje:

- **Obiekty**: ile jest każdego rodzaju, na przykład "8 linii, 2 polilinie, 1 okrąg".
- **Całkowita długość**: suma linii, łuków i polilinii (wliczane są też splajny) oraz liczba obiektów.
- **Całkowite pole**: suma zamkniętych: okręgów, całych elips, zamkniętych polilinii i kreskowań (otwory kreskowania są odejmowane).

Są podane w formacie długości rysunku (stopy i cale, gdy go używa; pola wtedy w calach kwadratowych i stopach kwadratowych). Pasek stanu pokazuje tę samą długość i pole zawsze, gdy coś jest zaznaczone; {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Długość i pole zaznaczenia}} › {{ui:Ukryte}} wyłącza to. Dla jednego obiektu {{ui:Geometria}} pokazuje jego własną długość i pole, jak dotąd.

## Współrzędne

Każdy punkt pokazuje **X**, **Y** i **Z**: początek i koniec linii, środki, punkty wstawienia, pozycje tekstu, bieżący wierzchołek polilinii. Linie pokazują też **Delta X**, **Delta Y** i **Delta Z** (tylko do odczytu). Polilinie i kreskowania mają **Rzędną** (jedną wartość Z dla całego obiektu).

Przycisk celownika obok nazwy punktu pozwala wskazać go w rysunku: kliknij go, a potem kliknij nową pozycję (przyciąganie działa). Wartości są współrzędnymi światowymi.

## Ogólne

| Pole | Czym jest |
|---|---|
| {{ui:Warstwa}}, {{ui:Kolor}}, {{ui:Typ linii}}, {{ui:Skala typu linii}}, {{ui:Grubość linii}} | Jak w panelu warstw; {{ui:Wg warstwy}} podąża za warstwą |
| {{ui:Przezroczystość}} | Wg warstwy, wg bloku lub od 0 do 90% |
| {{ui:Grubość}} | Jak daleko linie, okręgi, łuki, polilinie, punkty i tekst sięgają w Z |
| {{ui:Materiał}} | Wg warstwy, wg bloku, Globalny lub nazwa przyniesiona przez rysunek |
| {{ui:Styl wydruku}} | Tylko do odczytu: rysunki drukują się według koloru, przez [tabelę stylów wydruku](topic:plot-pdf#plot-style-tables) arkusza |
| {{ui:Hiperłącze}} | Adres WWW zachowany przy obiekcie |

## Co pokazuje każdy typ

| Zaznaczone | Możesz zmienić |
|---|---|
| Linia | Początek i koniec X, Y, Z; długość; kąt |
| Okrąg | Środek; promień; średnica; obwód; pole (każde ustawia promień) |
| Łuk | Środek; promień; kąt początkowy i końcowy; kąt całkowity; cięciwa (pokazuje długość łuku i pole) |
| Elipsa | Środek; promień większy i mniejszy; stosunek promieni; kąt osi większej; kąt początkowy i końcowy |
| Polilinia | Przeglądarka wierzchołków (niżej); szerokość globalna; rzędna; zamknięta; pole, gdy zamknięta (skaluje ją względem jej środka) |
| Tekst | Zawartość; styl; wyrównanie; wysokość; obrót; współczynnik szerokości; kąt pochylenia; zdefiniowana szerokość; odstęp wierszy; adnotacyjny; pozycja |
| Odwołanie do bloku | Punkt wstawienia; obrót; skala X, Y, Z i skala jednolita; wartości atrybutów |
| Kreskowanie | Wzór; skala; kąt; początek; asocjacyjne; wykrywanie wysp; kolor tła; rzędna |
| Wymiar | Zobacz niżej |
| Wielokrotny odnośnik | Tekst; wysokość; szerokość; strona tekstu; rozmiar grotu; odległość lądowania; punkt grotu |
| Okno widokowe | Skala; środek i rozmiar na arkuszu; środek widoku w modelu; włączone; zablokowane wyświetlanie |

### Wierzchołki polilinii

{{ui:Bieżący wierzchołek}} pokazuje, do którego wierzchołka należą pola poniżej. Użyj przycisków strzałek albo wpisz numer, aby przejść do innego wierzchołka; nie ma limitu ich liczby. Każdy wierzchołek ma X, Y, szerokość segmentu początkowego i końcowego oraz wypukłość segmentu, który się w nim zaczyna (0 = prosty).

## Wymiary

Wymiar pokazuje swój **Styl wymiarowania**, to, co mierzy, jego punkty i wszystkie ustawienia:

- **Linie i strzałki:** grot dla każdego końca, rozmiar strzałki, rozmiar kreski, kolory i grubości linii wymiarowej i pomocniczych, ukrywanie każdej połowy lub każdej linii pomocniczej, odsunięcie i wydłużenie linii pomocniczej.
- **Tekst:** nadpisanie (puste dla zmierzonej wartości; `<>` oznacza ją w twoim własnym tekście), styl, kolor, wysokość, odsunięcie, pozycja pionowa i pozioma, zawsze poziomo, obrót, wypełnienie tła.
- **Dopasowanie:** skala ogólna, odstęp linii bazowych, co się przesuwa, gdy brakuje miejsca, przesuwanie tekstu.
- **Jednostki główne:** format, miejsca po przecinku, zaokrąglenie, prefiks, sufiks, skala pomiaru, separator dziesiętny, pomijanie zer wiodących i końcowych; dla kątów format kąta i miejsca po przecinku.
- **Jednostki alternatywne:** włączone lub wyłączone, format, miejsca po przecinku, mnożnik (25.4 zamienia cale na milimetry), zaokrąglenie, prefiks i sufiks.
- **Tolerancje:** brak, symetryczne, odchyłka, granice lub podstawowe, z wartościami górną i dolną, miejscami po przecinku, wysokością i pozycją.

Zmiana któregokolwiek z nich w otwartym wymiarze usuwa rysunek, jaki zrobił z niego inny program, a CadCraft rysuje go od nowa.

:::note
Pozioma pozycja tekstu (obok pierwszej lub drugiej linii pomocniczej) i tekst pod linią są rysowane przy wymiarach liniowych i równoległych; przy innych wymiarach są zachowywane i zapisywane, ale jeszcze nie rysowane. Wybory Dopasowania są zachowywane i zapisywane, ale jeszcze nie rysowane: CadCraft umieszcza tekst według własnej reguły (nad linią, na zewnątrz, gdy się nie mieści).
:::

## Nic nie zaznaczono

Gdy nic nie jest zaznaczone, panel pokazuje:

- **Nowe obiekty:** warstwę, kolor, typ linii, grubość linii i wysokość tekstu, jakie dostają nowe obiekty; jednostki rysunku i format długości; typ linii i grubość bieżącej warstwy; rozmiary nowych wymiarów. Na arkuszu najpierw idą nazwa, papier i orientacja arkusza.
- **Widok:** środek, wysokość i szerokość tego, co jest na ekranie. Wpisz wartość, aby przenieść tam widok.
- **Różne:** ikona UCS włączona lub wyłączona, UCS (zawsze Światowy: CadCraft nie ma jeszcze układów współrzędnych użytkownika) oraz skala adnotacji.

## Przyciski na górze

| Przycisk | Robi |
|---|---|
| Lejek | {{cmd:QSELECT}}: zaznacz według typu i właściwości |
| Strzałka | {{cmd:SELECT}}: zaznacz obiekty w wierszu poleceń |
| Plus lub 1 | Czy kliknięcie dodaje do zaznaczenia (plus), czy je zastępuje (1); to samo ustawienie co w Ustawieniach, {{ui:CadCraft}} |
| Pinezka | Automatyczne ukrywanie, jak wyżej |

## Częste błędy

- **Wpisywanie w polu nic nie dało.** Naciśnij {{key:Enter}} lub kliknij gdzie indziej, aby je zastosować. Czerwone pole i uwaga oznaczają, że wpis został odrzucony.
- **Długość z jednostką jest odrzucana.** Rysunek nie ma jednostek. Ustaw {{ui:Jednostki}} przy niczym niezaznaczonym.
- **Widać tylko Warstwę i Kolor.** Zaznaczono kilka rodzajów obiektów i wybrano **Wszystkie**. Wybierz jeden rodzaj z listy na górze.
- **Niektóre obiekty się nie zmieniły.** Leżą na zablokowanej warstwie. Odblokuj warstwę w panelu warstw.
- **Wpisane litery trafiły do pola.** Gdy pole ma kursor, klawisze wpisują się tam. Naciśnij {{key:Enter}} lub {{key:Esc}}, a potem wpisz polecenie.
