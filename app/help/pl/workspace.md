---
title: Ekran CadCraft
summary: Przegląd każdego paska, panelu i karty w aplikacji kreślarskiej, pod nazwą, jaką ma na ekranie.
keywords: ekran, interfejs, pasek narzędzi, wstążka, panele, wiersz poleceń, pasek stanu, karty, karty układu, właściwości, panel warstw, przewodnik
from: b5a33388
---

Ekran ma siedem części. Od góry do dołu: pasek aplikacji, pasek narzędzi, obszar rysunku z panelem po każdej stronie, karty pod rysunkiem, wiersz poleceń i pasek stanu.

## Pasek aplikacji

Cienki pasek na samej górze należy do witryny, nie do rysunku. Pokazuje znak CadCraft, nazwę aplikacji, uruchomioną wersję, odsyłacz do strony aplikacji, przycisk {{ui:Pomoc}} (albo {{key:F1}}), przycisk {{ui:Zapisz do pracy offline}}, przycisk {{ui:Pełny ekran}} i dwa przyciski motywu, {{ui:Papier}} i {{ui:Model}}.

Przycisk {{ui:Ustawienia}} (koło zębate) zawiera ustawienia samego CadCraft i te, które wspólne są dla wszystkich aplikacji: zobacz [Ustawienia CadCraft](topic:settings).

{{ui:Zapisz do pracy offline}} zachowuje w tej przeglądarce kopię CadCraft razem z jego czytnikiem DWG, żeby aplikacja otwierała się bez połączenia. Etykieta pokazuje stan: „Saving N of M”, „Offline ready”, „Could not save” lub „Offline not available”. Zobacz [Praca offline](common:offline).

:::note
Przyciski {{ui:Papier}} i {{ui:Model}} na pasku aplikacji zmieniają tylko kolory ekranu: {{ui:Papier}} to jasny motyw, {{ui:Model}} ciemny. Nie mają nic wspólnego z kartą {{ui:Model}} pod rysunkiem, która przełącza między rysunkiem a jego arkuszami.
:::

Przycisk {{ui:Pełny ekran}} albo {{key:Ctrl+Shift+F}} (klawisz Control na każdym komputerze, także na Macu) przełącza trzy tryby ekranu: normalny, pełny ekran i pełny ekran z ukrytymi paskami. Przy ukrytych paskach przesuń wskaźnik do górnej krawędzi ekranu, aby je przywrócić.

## Pasek narzędzi

Pod paskiem aplikacji jest pasek narzędzi. Każdy przycisk uruchamia polecenie dokładnie tak, jakbyś je wpisał, więc wiersz poleceń zadaje te same pytania w obu przypadkach. Najedź na przycisk, aby zobaczyć alias jego polecenia. Grupy to:

| Grupa | Przyciski |
|---|---|
| Plik | {{ui:Nowy}}, {{ui:Otwórz}}, {{ui:Zapisz}}, {{ui:Zapisz jako}}, {{ui:Drukuj}} |
| Rysuj | {{ui:Linia}}, {{ui:Polilinia}}, {{ui:Okrąg}}, {{ui:Łuk}}, {{ui:Prostokąt}}, {{ui:Wielokąt}}, {{ui:Elipsa}}, {{ui:Tekst}}, {{ui:Akapit}}, {{ui:Kreskowanie}} oraz {{ui:Więcej}}: {{ui:Punkt}}, {{ui:Linia konstrukcyjna}} i {{ui:Półprosta}} (zobacz [Linie konstrukcyjne i półproste](topic:construction-lines)) |
| Modyfikuj | {{ui:Przesuń}}, {{ui:Kopiuj}}, {{ui:Obróć}}, {{ui:Skaluj}}, {{ui:Odbij lustrzanie}}, {{ui:Rozciągnij}}, {{ui:Odsuń}}, {{ui:Przytnij}}, {{ui:Wydłuż}}, {{ui:Zaokrąglenie}}, {{ui:Fazka}}, {{ui:Rozbij}}, {{ui:Usuń}} oraz {{ui:Więcej}}: {{ui:Macierz}}, {{ui:Połącz}}, {{ui:Dopasuj właściwości}}, {{ui:Przerwij}} i {{ui:Wydłuż}} |
| Adnotacje | {{ui:Liniowy}}, {{ui:Równoległy}}, {{ui:Kąt}}, {{ui:Promień}}, {{ui:Średnica}} (wymiary), {{ui:Odnośnik}} (wielokrotny odnośnik) oraz {{ui:Więcej}}: {{ui:Kontynuuj wymiar}}, {{ui:Wymiar bazowy}} i {{ui:Chmura rewizji}} |
| Parametryczne | {{ui:Auto}}, {{ui:Więzy}}, {{ui:Wymiar}}, {{ui:Parametry}} oraz {{ui:Więcej}} z każdym więzem (zobacz [Więzy w rysunku](topic:constraints)) |
| Bloki | {{ui:Utwórz}}, {{ui:Wstaw}}, {{ui:Biblioteka}} oraz {{ui:Więcej}}: {{ui:Edytuj blok}} i {{ui:Zdefiniuj atrybut}} |
| Arkusze | {{ui:Nowy arkusz}}, {{ui:Okno widokowe}} |
| Edycja | {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}} (do schowka), {{ui:Wklej}} oraz {{ui:Więcej}}: menu z {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj i przesuń}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}}, {{ui:Odznacz wszystko}}, {{ui:Szybkie zaznaczenie}}, {{ui:Zaznacz podobne}} i {{ui:Znajdź i zamień}}, każde z własnym klawiszem |
| Widok | {{ui:Zasięg}}, {{ui:Okno}}, {{ui:Poprzedni}} oraz {{ui:Więcej}}: {{ui:Zmierz odległość}}, {{ui:Pole}}, {{ui:Zmierz (promień, kąt …)}} i podział ekranu: {{ui:Podziel obok siebie}}, {{ui:Podziel jedno nad drugim}}, {{ui:Cztery okienka}}, {{ui:Jedno okienko}} (zobacz [Podział ekranu](topic:split-screen)) oraz {{ui:Obróć widok o 90° w lewo}}, {{ui:Obróć widok o 90° w prawo}}, {{ui:Powrót do świata}} (zobacz [Obracanie widoku](topic:ucs-and-turned-view)) |

{{ui:Kopiuj}} w grupie {{ui:Modyfikuj}} to polecenie {{cmd:COPY}} (punkt bazowy, a potem miejsce każdej kopii); {{ui:Kopiuj}} w grupie {{ui:Edycja}} umieszcza obiekty w schowku pod {{ui:Wklej}}. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste). Przycisk uruchomionego polecenia pozostaje podświetlony do jego końca. Podpowiedzi podają skróty z Windows („Ctrl+O”); na Macu działa także {{key:Mod+O}}.

W niskim oknie (na przykład na laptopie ze skalowaniem ekranu 125 % lub więcej) pasek narzędzi nigdy nie zabiera miejsca rysunkowi: gdy rysunek miałby za mało wysokości, przyciski tracą podpisy pod ikonami i nazwy grup (najedź na przycisk, aby zobaczyć jego nazwę), a jeśli to nie wystarcza, pasek narzędzi staje się jednym wierszem przewijanym na boki. Wyższe okno przywraca podpisy.

## Lewy panel

Panel po lewej ma trzy sekcje.

- **{{ui:Warstwy}}.** Każda warstwa rysunku, z wypełnioną kropką przy bieżącej. Naciśnij nazwę, aby uczynić warstwę bieżącą. Każdy wiersz ma próbkę koloru (naciśnij ją, aby wybrać kolor) i cztery przyciski: włącz/wyłącz (oko), zamroź (płatek śniegu), zablokuj (kłódka) i drukuj (drukarka). {{ui:Nowa warstwa}} otwiera okienko do dodania warstwy. Zobacz [Porządkowanie rysunku warstwami](topic:layers).
- **{{ui:Bloki}}.** Bloki zdefiniowane w rysunku, ile razy każdy jest użyty, i przycisk {{ui:Wstaw}} przy każdym. Zobacz [Tworzenie i wstawianie bloków](topic:blocks).
- **{{ui:Rysunek}}.** Informacje o otwartym pliku: nazwa (z dopiskiem „(changed)” przy niezapisanych zmianach), format, rozmiar, jednostki, liczba obiektów, warstw, bloków i arkuszy. Po otwarciu pliku okienko „About this file” wymienia wszystko, czego CadCraft nie mógł pokazać lub musiał przekonwertować.

## Obszar rysunku

Środek ekranu to rysunek. Wskaźnik ma postać krzyża nitkowego. Gdy CadCraft oczekuje punktu, mały znacznik i etykieta („Endpoint”, „Midpoint”) pokazują, gdzie trafi przyciąganie do obiektu. Gdy oczekuje obiektów, krzyż ma okienko wyboru, a obiekty pod nim się podświetlają.

Gdy rysunek jest pusty, karta „Start drawing” pokazuje kilka pierwszych poleceń. Znika, gdy tylko uruchomisz polecenie albo otworzysz plik. Plik DWG lub DXF możesz upuścić w dowolnym miejscu tego obszaru, aby go otworzyć.

## Karty pod rysunkiem

Pod rysunkiem są karty: najpierw {{ui:Model}}, potem {{ui:3D}}, potem po jednej karcie na arkusz (układ), a na końcu przycisk {{ui:+}}.

- {{ui:Model}} to sam rysunek, w pełnym rozmiarze, w jednostkach rysunku.
- {{ui:3D}} pokazuje rysunek leżący na gruncie i bryły z niego wykonane. Gdy jest widoczna, pasek narzędzi ma grupę {{ui:3D}} zamiast grup rysunkowych. Zobacz [Modelowanie w 3D](topic:3d-solids).
- Każda karta arkusza to arkusz papieru z tabliczką rysunkową i oknami widokowymi na model. To, co tu narysujesz, jest w jednostkach papieru (milimetry lub cale). Kliknij dwukrotnie wewnątrz okna widokowego, aby pracować przez nie na modelu (zobacz [Praca na modelu przez okno widokowe](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Długa nazwa arkusza jest skracana na karcie; najedź na kartę, aby zobaczyć całą. Przy wielu arkuszach {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Karty arkuszy}} › {{ui:Tylko numery arkuszy}} pokazuje na karcie tylko numer arkusza (A-101).
- {{ui:+}} tworzy nowy arkusz z ramką, tabliczką rysunkową i jednym oknem widokowym. To to samo, co polecenie {{cmd:LAYOUT}}.
- Kliknij dwukrotnie kartę arkusza, aby zmienić jej nazwę. Gdy karta ma fokus, {{key:Left}} i {{key:Right}} przechodzą między kartami.

Każda karta zachowuje własne powiększenie i przesunięcie. Zobacz [Przygotowanie arkusza](topic:sheets-and-viewports).

## Prawy panel: Właściwości

Panel po prawej zmienia się zależnie od zaznaczenia.

- **Nic nie zaznaczono, na karcie {{ui:Model}}:** nagłówek brzmi {{ui:Bieżące ustawienia}}. Tu ustawiasz {{ui:Warstwa}}, {{ui:Kolor}} i {{ui:Wysokość tekstu}} dla nowych obiektów, {{ui:Jednostki}} rysunku oraz rozmiary nowych wymiarów ({{ui:Wysokość tekstu}}, {{ui:Rozmiar grotu}}, {{ui:Miejsca po przecinku}}, {{ui:Skala ogólna}}).
- **Nic nie zaznaczono, na arkuszu:** nagłówek brzmi „Sheet:” i nazwa arkusza. Możesz zmienić nazwę arkusza, jego {{ui:Papier}} i {{ui:Orientacja}}, {{ui:Wydrukuj ten arkusz}} lub {{ui:Usuń ten arkusz}}. Poniżej są ustawienia nowych obiektów.
- **Zaznaczony jeden obiekt:** jego typ jako nagłówek (Linia, Okrąg, Tekst, Wymiar, Okno widokowe …), potem warstwa, kolor i geometria. Wpisz nową wartość i naciśnij {{key:Enter}}, aby ją zmienić.
- **Zaznaczonych kilka obiektów:** ich liczba oraz wspólne {{ui:Warstwa}} i {{ui:Kolor}}. Zmiana któregokolwiek zmienia je wszystkie. „Varies” oznacza, że się różnią.

Zobacz [Edycja uchwytami i we Właściwościach](topic:grips-and-properties).

Poniżej otwiera się panel {{ui:Parametry}}, gdy wybierzesz {{ui:Parametry}} albo wpiszesz {{cmd:PARAMETERS}}: wszystkie parametry i więzy wymiarowe w jednej tabeli. Zobacz [Parametry i równania](topic:parameters).

## Wiersz poleceń

Na dole jest wiersz poleceń: historia tego, co zrobiłeś, a pod nią monit.

- Etykieta monitu brzmi `Command:`, gdy nic nie jest uruchomione. Podczas działania polecenia pokazuje pytanie, jego opcje w nawiasach kwadratowych i wartość domyślną w nawiasach ostrych, na przykład `Specify radius of circle [Diameter] <500>:`.
- Gdy wpisujesz nazwę polecenia, podpowiedź po prawej sugeruje pasujące polecenia. Naciśnij {{key:Tab}}, aby przyjąć pierwsze. „No such command” oznacza, że nic nie pasuje.
- {{key:Up}} i {{key:Down}} przywołują wcześniej wpisane wiersze.
- Historia przechowuje ostatnie 400 wierszy. Pojawiają się tu komunikaty poleceń, pomiary z {{cmd:DIST}} i {{cmd:LIST}} oraz raporty zapisu i wydruku.

## Pasek stanu

Sam dół to pasek stanu.

- **Współrzędne** po lewej: X i Y krzyża nitkowego. Gdy polecenie ma punkt bazowy, pokazuje też odległość i kąt od niego, na przykład `Δ 1200 < 90°`.
- **Komunikaty** pośrodku, takie jak „Ortho on” lub „Current layer: Walls”. Znikają po kilku sekundach.
- **{{ui:Siatka}}**, **{{ui:Orto}}**, **{{ui:Biegunowe}}**, **{{ui:Przyciąganie}}**, **{{ui:Śledzenie}}**, **{{ui:Dyn}}** i **{{ui:LWT}}** po prawej. Każdy to przełącznik; wciśnięty przycisk jest włączony. {{ui:LWT}} pokazuje grubości linii na ekranie (zobacz [Grubości i typy linii](topic:units-papers-scales#line-weights-and-linetypes)). Mała strzałka obok {{ui:Przyciąganie}} otwiera {{ui:Przyciąganie do obiektów}}, gdzie zaznaczasz, które przyciągania są aktywne. Zobacz [Przyciąganie do punktów na obiektach](topic:object-snaps).

## Okno Drukuj do PDF

{{ui:Drukuj}} (albo {{key:Mod+P}}) otwiera okno {{ui:Drukuj do PDF}}, z ustawieniami po lewej i podglądem na żywo po prawej. Zobacz [Drukowanie do PDF](topic:plot-pdf).

## Pomoc

{{key:F1}} albo przycisk {{ui:Pomoc}} otwiera tę pomoc jako panel boczny; rysunek pozostaje obok dostępny. Działa bez połączenia. {{key:F1}} ponownie albo {{key:Esc}} w panelu zamyka ją. Zobacz [Korzystanie z pomocy](common:help).
