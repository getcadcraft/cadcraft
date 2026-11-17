---
title: Ustaw rozmiary wymiarów, miejsca po przecinku i skalę
summary: Wybierz wysokość tekstu, rozmiar grotu, miejsca po przecinku i skalę ogólną dla nowych wymiarów, zmieniaj istniejące i zrozum, jak działają style wymiarowania w CadCraft.
keywords: styl wymiarowania, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, skala ogólna, miejsca po przecinku, rozmiar grotu, skala adnotacji, dimtextunit, jednostki w tekście, mm, cm, m, km, milimetry, metry, dimlfac, dimpost
from: 8ec82a07
---

## Czego się nauczysz

Jak duży jest tekst wymiarów i strzałki, jak je ustawić dla rysunku drukowanego w skali 1:50 lub 1:100 i jak zmienić wymiary, które już wykonałeś.

## Jak działają rozmiary wymiarów

Każdy wymiar ma własny zestaw rozmiarów: wysokość tekstu, rozmiar strzałki, miejsca po przecinku, odstęp wokół tekstu, jak daleko linie pomocnicze wychodzą poza linię wymiarową i jak daleko zaczynają się od obiektu. Wartości domyślne są zbliżone do popularnego stylu ISO:

| Ustawienie | Domyślnie | Polecenie |
|---|---|---|
| Wysokość tekstu | 2.5 | {{cmd:DIMTXT}} |
| Rozmiar grotu | 2.5 | {{cmd:DIMASZ}} |
| Miejsca po przecinku | 2 (zera na końcu pomijane) | {{cmd:DIMDEC}} |
| Odstęp wokół tekstu | 0.625 | {{cmd:DIMGAP}} |
| Wystawienie linii pomocniczej za linię wymiarową | 1.25 | {{cmd:DIMEXE}} |
| Odsunięcie od obiektu | 0.625 | {{cmd:DIMEXO}} |
| Skala ogólna | 1 | {{cmd:DIMSCALE}} |

Każdy rozmiar jest mnożony przez **skalę ogólną**. Ustaw rozmiary tak, jak chcesz je mieć na papierze (tekst 2.5 mm), a skalę ogólną ustaw na skalę wydruku (50 dla 1:50). Tekst ma wtedy 2.5 × 50 = 125 jednostek rysunku wysokości, co wydrukuje się jako 2.5 mm.

:::note
Nazwane style wymiarowania zarządza się poleceniem {{cmd:DIMSTYLE}}: zobacz sekcję poniżej. Każdy wymiar zachowuje też ustawienia, z którymi został zrobiony, więc nadal możesz zmienić jeden wymiar osobno w {{ui:Właściwości}}.
:::

## Ustawianie rozmiarów nowych wymiarów

Obie poniższe metody zmieniają tylko wymiary, które wykonasz potem.

### W panelu Bieżące ustawienia

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone. Na karcie {{ui:Model}} prawy panel brzmi {{ui:Bieżące ustawienia}}.
2. Przewiń panel do {{ui:Nowe wymiary}}, za wiersze warstwy, koloru, jednostek i {{ui:Warstwa 0}} (na małym ekranie zaczyna się poniżej dolnej krawędzi). Kliknij w pole {{ui:Skala ogólna}}, wpisz `50` i naciśnij {{key:Enter}}.
3. Ustaw {{ui:Wysokość tekstu}}, {{ui:Rozmiar grotu}} i {{ui:Miejsca po przecinku}} w ten sam sposób, jeśli chcesz inne wartości.

Pasek stanu potwierdza każdą z nich, na przykład „Skala ogólna dla nowych wymiarów: 50”.

### W wierszu poleceń

1. Wpisz `DIMSCALE` i naciśnij {{key:Enter}}.
2. Przy `Enter new value for DIMSCALE <1>` wpisz `50` i naciśnij {{key:Enter}}.

Historia potwierdza: „DIMSCALE = 50. Nowe wymiary go używają; zaznacz istniejące, aby zmienić ich wartości.” {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} i {{cmd:DIMEXO}} działają tak samo. Naciśnij {{key:Enter}} przy podpowiedzi, aby zostawić bieżącą wartość.

### Stopy i cale w wymiarach

Nowe wymiary używają formatu długości rysunku: ustaw go w {{ui:Format długości}} w {{ui:Bieżące ustawienia}} albo poleceniem {{cmd:UNITS}} (zobacz [Stopy i cale](topic:units-papers-scales#feet-and-inches-and-fractions)), a następny wymiar pokaże `12'-6 1/2"`. {{cmd:DIMLUNIT}} ustawia tylko format wymiarów (2 dziesiętny, 3 inżynierski, 4 architektoniczny, 5 ułamkowy). Dla wymiaru, który już wykonałeś, zaznacz go i wybierz {{ui:Format}} w {{ui:Właściwości}}; przy formacie ułamkowym jego pole {{ui:Ułamek}} przyjmuje potęgę dwójki (4 = 1/16).

## Wymiary w mm, cm, m lub km

Wymiar mierzy w jednostkach rysunku. Może zamiast tego zapisać tę długość w milimetrach, centymetrach, metrach lub kilometrach, z jednostką za liczbą: ściana 1250 mm pokazuje `1250 mm`, `125 cm`, `1.25 m` lub `0.00125 km`.

1. Najpierw ustaw {{ui:Jednostki}} rysunku w {{ui:Bieżące ustawienia}} (zobacz [Jednostki, rozmiary papieru i skale](topic:units-papers-scales#drawing-units)), aby CadCraft wiedział, czym jest jedna jednostka rysunku. Rysunek bez jednostek jest odczytywany jako milimetry, a {{cmd:DIMTEXTUNIT}} to mówi.
2. Dla nowych wymiarów: naciśnij {{key:Esc}}, aby nic nie było zaznaczone, a w {{ui:Nowe wymiary}} wybierz {{ui:Jednostki w tekście}}: {{ui:Jednostki rysunku}}, `mm`, `cm`, `m` lub `km`.
3. Dla wymiarów, które już wykonałeś: zaznacz je, a w {{ui:Właściwości}} › {{ui:Jednostki podstawowe}} wybierz {{ui:Jednostki w tekście}}.

Albo wpisz {{cmd:DIMTEXTUNIT}} (`DTU`) i odpowiedz `D`, `MM`, `CM`, `M` lub `KM`: przy zaznaczonych wymiarach zmienia je (jeden krok cofnięcia), a bez zaznaczenia ustawia nowe wymiary.

{{ui:Miejsca po przecinku}} ({{cmd:DIMDEC}}) nadal ustawia, ile miejsc dziesiętnych się pokazuje: przy metrach i 3 miejscach 1234 mm pokazuje `1.234 m`. Tekst zapisywany jest jako liczba dziesiętna. Na arkuszu wymiary mierzą w jednostce papieru arkusza (milimetrach lub calach).

Zapisany DWG lub DXF zachowuje wybór jako skalę pomiaru wymiaru (DIMLFAC) i przyrostek (DIMPOST, ` m`), więc inne programy pokazują ten sam tekst. Jeśli później zmienisz {{ui:Jednostki}} rysunku, wymiary zapisane w mm, cm, m lub km zostaną dopasowane, więc nadal podają właściwą długość. {{ui:Ustawione ręcznie (skala albo sufiks)}} oznacza, że {{ui:Skala pomiaru}} lub przyrostek wymiaru ustawiono inaczej; wybierz jednostkę, aby je zastąpić.

## Zmiana wymiarów, które już wykonałeś

1. Kliknij jeden wymiar. Nagłówek prawego panelu brzmi {{ui:Wymiar}}.
2. Ustawienia są w sekcjach; przewiń panel, aby dotrzeć do późniejszych:
   - {{ui:Ogólne}}: {{ui:Styl wymiarowania}}
   - {{ui:Geometria}}: {{ui:Rodzaj}} i {{ui:Pomiar}} (tylko do odczytu)
   - {{ui:Tekst}}: {{ui:Zastąpiony tekst}} i {{ui:Wysokość tekstu}}
   - {{ui:Linie i strzałki}}: {{ui:Rozmiar grotu}}
   - {{ui:Dopasowanie}}: {{ui:Skala ogólna}}
   - {{ui:Jednostki podstawowe}}: {{ui:Miejsca po przecinku}}
3. Wpisz nową wartość i naciśnij {{key:Enter}}.

Wymiar rysuje się od razu ponownie. Dla wymiarów kątowych {{ui:Miejsca po przecinku (°)}} ustawia miejsca po przecinku kąta.

:::note
Gdy zaznaczonych jest kilka wymiarów, panel pokazuje wiersze, które mają wspólne, a wartość, która się między nimi różni, pokazuje {{ui:Różne}}. Wartość, którą wpiszesz, zmienia każdy zaznaczony wymiar w jednym kroku, więc jedno {{key:Mod+Z}} przywraca je wszystkie.
:::

## Wymiary z otwartych rysunków

Wymiar z otwartego DWG lub DXF jest pokazywany dokładnie tak, jak narysował go inny program. Jego panel mówi: „Pokazany tak, jak narysował go program, który go utworzył. Zmień go, a CadCraft narysuje go ponownie we własnym stylu.” Gdy tylko zmienisz jakąkolwiek wartość, przesuniesz uchwyt albo sam wymiar, CadCraft narysuje go ponownie z własnymi grotami i czcionką, używając rozmiarów odczytanych z pliku.

Niektóre wymiary można tylko odczytać tak, jak narysowano, a nie jako edytowalne wymiary; panel wtedy pokazuje „Narysowano z” i nazwę bloku, a pole „O tym pliku” je liczy.

## Częste błędy

- **Zmiana DIMSCALE nic nie zmieniła na ekranie.** Ustawienie dotyczy nowych wymiarów. Zaznacz istniejące i zmień {{ui:Skala ogólna}} w panelu.
- **Miejsca po przecinku pokazują mniej cyfr, niż ustawiono.** Zera na końcu są pomijane: 2 miejsca pokazują `1250` i `1250.5`, a nie `1250.00`.
- **Tekst ma właściwą wysokość na papierze w oknie widokowym, ale złą w wydruku modelu.** Skala ogólna musi być taka sama jak skala wydruku. Wydruk w trybie Dopasuj do papieru daje dziwną skalę; wybierz standardową skalę w oknie wydruku.
- **Jednostki, np. mm lub m, w tekście.** Wybierz {{ui:Jednostki w tekście}} (zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Dla każdego innego słowa po liczbie wpisz je w zastąpieniu: `<> TYP.`.

## Nazwane style wymiarowania

Wpisz `DIMSTYLE` (`D`), aby otworzyć {{ui:Menedżer stylów wymiarowania}}. Lista pokazuje style rysunku, ile wymiarów używa każdego z nich i który jest bieżący. **Standard** jest zawsze.

- {{ui:Ustaw bieżący}}: nowe wymiary używają ustawień tego stylu i przyjmują jego nazwę.
- {{ui:Nowy…}}: nowy styl, który zaczyna się jako kopia wybranego.
- {{ui:Zmień…}}: te same pola co sekcja wymiaru w {{ui:Właściwości}} (linie i strzałki, tekst, dopasowanie, jednostki, jednostki alternatywne, tolerancje). Naciśnij {{ui:OK}}, a styl się zmienia **i każdy wymiar, który go używa, zmienia się razem z nim**, ustawienie po ustawieniu. Ustawienie, które zmieniłeś tylko w jednym wymiarze, zostaje, chyba że styl zmienił to ustawienie.
- {{ui:Zmień nazwę…}} i {{ui:Usuń}}: Standard nie można zmienić nazwy ani usunąć, ani bieżącego stylu, ani stylu, którego używają wymiary.
- {{ui:Porównaj…}}: co różni dwa style.
- {{ui:Zastosuj do zaznaczonych}}: najpierw zaznacz wymiary; przejmują ustawienia stylu i jego nazwę.

`-DIMSTYLE` robi to samo w wierszu poleceń: `Restore`, `Save` (bieżące ustawienia, w tym to, co wpisałeś poleceniami {{cmd:DIMTXT}} i innymi, pod nazwą), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Style zapisują się w DWG lub DXF (w jego tabeli stylów wymiarowania) i są odczytywane z otwieranych plików. *Bieżący* styl nie jest zapisywany: rysunek otwiera się z bieżącym Standard. Standard zachowuje swoje ustawienia, gdy bieżący jest inny styl.

## Zmiana tekstu wymiaru i linii pomocniczych

{{cmd:DIMEDIT}} (`DED`) działa na zaznaczonych wymiarach: **Start (H)** przywraca tekst tam, gdzie kładzie go styl, **Nowy (N)** wpisuje inny tekst (`<>` oznacza pomiar), **Obróć (R)** obraca tekst, **Pochylenie (O)** pochyla linie pomocnicze wymiarów liniowych i równoległych o kąt, który wpiszesz (naciśnij {{key:Enter}}, aby nie mieć pochylenia). {{cmd:DIMTEDIT}} przesuwa tekst do **Lewo**, **Prawo (R)** albo **Środek (C)** linii wymiarowej, albo go obraca (**Kąt (A)**), albo wysyła do **Start (H)**. Tekst zawsze leży na linii wymiarowej: nie da się go przeciągnąć w wolne miejsce.
