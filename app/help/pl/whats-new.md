---
title: Co nowego w 0.7
summary: Podkłady PDF i import PDF, zeskanowane rysunki z automatycznym obrysem, prawdziwe spline z SPLINE, SPLINEDIT i PEDIT, menedżer stylów wymiarowania, tekst zachowujący formatowanie, WBLOCK i własne skale, bryły 3D z innych programów, rejestracja skanów, panel Laser, eksport USD, Historia i drukowanie w CadCraft Studio, przewodnik po pierwszym rysunku, pasek narzędzi z dowolnej strony lub w mniejszej liczbie wierszy oraz więcej dla asystentów AI.
keywords: co nowego, nowości, informacje o wydaniu, lista zmian, zmiany, 0.7, wersja, nowe funkcje, pdf, pdfattach, pdfimport, podkład, skan, scanattach, scantrace, obrys, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatowanie, wblock, scalelistedit, lista skal, acis, bryły 3d, registerscans, rejestracja skanów, icp, e57, las, laser, grbl, g-code, usd, usdout, historia, wersje, porównanie, drukowanie, drukarka, png, svg, styl wydruku, typ linii, przewodnik, ściągawka, mapa poleceń, położenie paska narzędzi, wiersze paska narzędzi, toolbardock, regen, regenall, gładzik, przesunięcie, strona kodowa, cyrylica, koreański, chiński, japoński, elektryka, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder pomocniczy, asystenci, mcp, jednostki, portugalski
from: b9258ca6
---

To zmieniło się w CadCraft 0.7 w porównaniu z 0.6. Wiele z tego zostało zgłoszone na Discordzie. Lista jest pogrupowana według obszarów, od najważniejszych.

## Nowe

### PDF-y i zeskanowane rysunki

- **Połóż stronę PDF pod rysunkiem.** {{cmd:PDFATTACH}} (`PDFATT`) umieszcza stronę w rzeczywistym rozmiarze albo w skali, którą wpiszesz. Przyciągaj do jej linii, wyszarz ją, zrób ją monochromatyczną ({{cmd:PDFADJUST}}), przytnij ({{cmd:PDFCLIP}}) i przełączaj własne warstwy PDF ({{cmd:PDFLAYERS}}). Drukuje się jako linie, wypełnienia i tekst, a DWG lub DXF 2000 zachowuje ją jako odsyłacz do pliku. Otwarcie PDF przez {{ui:Otwórz}} pyta, czy dołączyć go, czy zaimportować. Zobacz [Podkłady PDF i import PDF](topic:pdf-underlay).
- **Zamień stronę PDF w obiekty rysunku.** {{cmd:PDFIMPORT}} (`PDFIM`) tworzy linie, polilinie, okręgi, łuki, kreskowania pełne i tekst na warstwach nazwanych od PDF, w rzeczywistym rozmiarze, w wpisanej skali albo przeskalowane z dwóch punktów i rzeczywistej odległości, w jednym kroku cofania. Zobacz [Importowanie strony](topic:pdf-underlay#import-a-page).
- **Zeskanowane rysunki.** {{cmd:SCANATTACH}} wprowadza PNG, JPEG lub TIFF (jedną stronę albo wszystkie) albo stronę PDF będącą obrazem. Potem przeskaluj go z dwóch punktów ({{cmd:SCANSCALE}}), wyrównaj ({{cmd:SCANALIGN}}), wyprostuj według jego własnych długich linii ({{cmd:SCANDESKEW}}), zrób czarno-biały i usuń plamki ({{cmd:SCANCLEAN}}), przytnij i wymaż jego fragmenty. Każdy krok to jeden krok cofania, a oryginalny plik jest zachowany. Zobacz [Zeskanowane rysunki i obrys](topic:scanned-drawings).
- **Obrysuj skan liniami i łukami.** {{cmd:SCANTRACE}} rysuje linie skanu jako linie i łuki na nowej warstwie SCAN-TRACE, z ustawioną tolerancją, a tekst i kreskowanie zostawia bez zmian. Raport mówi, co powstało, a co pozostawiono, i nie twierdzi, że wynik jest poprawny: sprawdź go z arkuszem. {{cmd:RASTERSNAP}} pozwala przyciąganiu do obiektów znajdować końce, narożniki i przecięcia skanu. Nic nie jest nigdzie wysyłane i nie używa się wytrenowanego modelu. Zobacz [Obrys](topic:scanned-drawings#the-trace).

### Rysowanie i edycja

- **Prawdziwe spline.** {{cmd:SPLINE}} (`SPL`) rysuje krzywą przez punkty albo z punktów kontrolnych (stopień od 1 do 5), ze stycznymi na końcach; {{cmd:SPLINEDIT}} (`SPE`) przesuwa, dodaje i usuwa punkty dopasowania lub kontrolne, ustawia wagi, otwiera, zamyka, odwraca albo zamienia spline w polilinię. Spline z plików DWG i DXF otwierają się jako spline, a DWG i DXF 2000 zapisują je jako spline. Zobacz [Spline i polilinie](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zamyka i otwiera polilinie, dołącza do nich linie i łuki, ustawia jedną szerokość, dopasowuje krzywą przez wierzchołki albo spline wzdłuż nich i cofa to opcją Decurve, odwraca i edytuje kilka naraz. Zobacz [Edycja polilinii](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapisuje blok, kilka obiektów albo cały rysunek do nowego DWG lub DXF zawierającego tylko używane przez nie warstwy, style i bloki. Zobacz [Zapis bloku lub obiektów do osobnego pliku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) przerysowuje bieżącą kartę z rysunku, {{cmd:REGENALL}} (`REA`) każdą kartę, okienko i otwarty rysunek. Zobacz [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i wymiary

- **Tekst zachowuje formatowanie.** Tekst akapitowy z innych programów zachowuje kolory poszczególnych słów, pogrubienie i kursywę, podkreślenie, ułamki piętrowe i wysokości: są rysowane na ekranie i w PDF, zachowywane przy edycji słów i zapisywane z powrotem. Zobacz [Formatowanie w tekście akapitowym z innych programów](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Menedżer stylów wymiarowania.** {{cmd:DIMSTYLE}} (`D`) tworzy, zmienia, porównuje i stosuje nazwane style wymiarowania; zmiana stylu zmienia każdy wymiar, który go używa. {{cmd:DIMEDIT}} (`DED`) przywraca tekst, wpisuje nowy tekst, obraca go albo pochyla linie pomocnicze; {{cmd:DIMTEDIT}} przesuwa tekst w lewo, w prawo albo na środek. Zobacz [Nazwane style wymiarowania](topic:dimension-settings#named-dimension-styles).
- **Własne skale.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje skale, takie jak 1:75, do list skal okien widokowych i wydruku; są zapisywane w rysunku (DWG i DXF 2000), a rysunek z innego programu przynosi własną listę. Zobacz [Skale](topic:units-papers-scales#scales).
- **Tekst w innych alfabetach.** Pliki DXF zapisane w stronach kodowych cyrylicy, koreańskiej, chińskiej, japońskiej lub wietnamskiej otwierają się teraz z tekstem, a tekst chiński, japoński i koreański drukuje się w PDF (wydruk pobiera większą czcionkę przy pierwszej potrzebie). Zobacz [Czcionka](topic:text#font).

### Drukowanie

- **Więcej w tabelach stylów wydruku.** Dla każdego koloru tabela może teraz ustawić też typ linii, zakończenie i łączenie linii oraz styl wypełnienia, który drukuje wypełnienia pełne jako linie kreskowania; tabela ma własną listę grubości linii i skalę typu linii. Zobacz [Tabele stylów wydruku](topic:plot-pdf#plot-style-tables).
- **Drukowanie oraz pliki PNG i SVG.** Okno wydruku ma {{ui:Drukuj…}}, {{ui:Pobierz PNG}} (300 dpi) i {{ui:Pobierz SVG}}. W CadCraft Studio wyświetla drukarki komputera, ich papier i liczbę kopii. Zobacz [Drukowanie](topic:plot-pdf#print) i [Pliki obrazów i SVG](topic:plot-pdf#picture-and-svg-files).

### 3D i chmury punktów

- **Bryły 3D z innych programów.** Bryły, regiony i ciała w przestrzeni modelu rysunku pokazują się na karcie 3D, tylko do odczytu, a zapis jako DWG zapisuje je z powrotem bez zmian. Ściany na powierzchniach, których CadCraft jeszcze nie rysuje, są wymienione, nie zgadywane. Zobacz [Bryły z innych programów](topic:3d-solids#solids-from-other-programs).
- **Rejestracja kilku skanów.** {{cmd:REGISTERSCANS}} (`REGSCAN`) umieszcza skany wykonane z różnych pozycji w jednym układzie, według par punktów albo wpisanych współrzędnych celów, dopracowuje je przez ICP, zapisuje rejestrację jako mały plik projektu i zapisuje zarejestrowaną chmurę jako jeden plik LAS lub E57. Zobacz [Rejestracja kilku skanów w jeden](topic:register-scans).
- **Eksport USD.** {{cmd:USDOUT}}, albo {{cmd:EXPORT3D}} › {{ui:USD}}, zapisuje bryły z karty 3D jako `.usda`, `.usdc` lub `.usdz`. Zobacz [Eksport modelu 3D jako USD](topic:usd).
- **Obliczenia na karcie 3D.** Tam, gdzie narzędzia karty 3D pytają o odległość, możesz wpisać obliczenie, jak w wierszu poleceń. Zobacz [Arytmetyka we wpisywanej wartości](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Wytwarzanie

- **Wyślij rysunek do lasera.** {{cmd:LASER}}, albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Laser…}}, otwiera panel nad rysunkiem: każda warstwa tnie, nacina, grawerowa linie, wypełnia kształty, grawerowa obraz albo nie jest wysyłana, z własną mocą, prędkością i liczbą przejść. Podgląd podąża za Twoimi edycjami, {{ui:Zapisz G-code…}} zapisuje G-code w trybie lasera GRBL, a w Chrome lub Edge panel może obrysować zadanie i wysłać je przez USB. Ustawienia są zapisywane w rysunku (DWG i DXF). Zobacz [Wysyłanie rysunku do lasera](topic:laser-cutting).
- **Symbole instalacji w budynku w dodatku Elektryka.** Gniazda danych, telefoniczne i TV, łączniki klawiszowe i czasowe, termostat, znak wyjścia, czujki, ręczny ostrzegacz i sygnalizator, wentylator, podgrzewacz wody, kuchenka, punkt ładowania pojazdu elektrycznego, licznik energii i rozdzielnica podrzędna oraz symbole RCD i RCBO. Obwód może mieć RCD, zestawienie rozdzielnicy ma kolumnę RCD, a kontrole wskazują obwody gniazd bez RCD 30 mA lub mniejszego. To przypomnienie planistyczne, nie kontrola zgodności z przepisami.
- **Dodatek P&ID.** P&ID rysuje schematy procesowe: symbole z punktami połączeń, linie procesowe i sygnałowe, oznaczenia, numery linii, zestawienia linii, urządzeń, przyrządów i zaworów (CSV lub skoroszyt) oraz kontrole. Jest dołączony do CadCraft i wyłączony, dopóki nie włączysz go w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Dodatki}}. To pomoc kreślarska, nie zatwierdzenie inżynierskie, a jego słowa są na razie tylko po angielsku.

### Pierwsze kroki i ekran

- **Przewodnik po pierwszym rysunku.** {{cmd:TOUR}} (albo {{ui:Rozpocznij przewodnik}} na karcie startowej) prowadzi Cię przez sześć kroków w prawdziwym rysunku: linia, okrąg, przesunięcie, przycięcie, usunięcie i wymiar. Uruchamia się sam przy pierwszym otwarciu CadCraft z pustym rysunkiem. Zobacz [Wolisz, żeby ktoś Cię poprowadził?](topic:getting-started#prefer-to-be-guided)
- **Ściągawka i mapa poleceń.** [Ściągawka](topic:cheat-sheet) zawiera 40 codziennych poleceń na jednej stronie, także jako PDF do wydrukowania, a [mapa poleceń](topic:command-map) wymienia polecenia z ich skróconymi nazwami, od A do Z.
- **Pasek narzędzi z dowolnej strony.** {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Położenie paska narzędzi}}: góra (jak dotąd), dół, lewa lub prawa strona, albo wpisz {{cmd:TOOLBARDOCK}}. Zobacz [Położenie paska narzędzi](topic:settings#toolbar-position).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Wiersze paska narzędzi}}: zawijaj do dopasowania, 2 wiersze albo 1 wiersz, dla paska narzędzi CadCraft oraz stylów Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} przechodzi przez nie po kolei, {{key:Ctrl+F1}} przez to, co pokazują przyciski, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} je ustawiają. Podpowiedź startowa ma przycisk zamknięcia. Podziękowania dla GJoe2, który przysłał to jako pull request. Zobacz [Wiersze paska narzędzi](topic:settings#toolbar-rows).

### W CadCraft Studio

- **Historia.** {{cmd:HISTORY}} (`HIST`), albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Historia…}}: kopie, które Studio przechowuje przy otwarciu i zapisie rysunku, oraz wersje chmurowe rysunku, gdy otwarto go z chmury. Otwórz lub przywróć jedną, albo porównaj dwie, z kolorowym pokazaniem tego, co dodano, usunięto i zmieniono. Zobacz [Historia](topic:history).
- **acad.lsp i acaddoc.lsp.** Wybierz folder pomocniczy w {{cmd:APPLOAD}}: te dwa pliki ładują się przy uruchomieniu CadCraft (acaddoc.lsp ponownie dla każdej nowej karty rysunku), a `S::STARTUP` uruchamia się po nich. Zobacz [Ładowanie aplikacji](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Okno wydruku we własnym oknie.** Przycisk na jego pasku tytułu przenosi je do okna, które można umieścić na innym monitorze. Zobacz [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).

### Dla asystentów AI

- **Pliki według nazwy, w wybranych przez Ciebie folderach.** W CadCraft Studio asystent może otwierać, zapisywać i drukować pliki według nazwy oraz przekazywać poleceniu plik, o który prosi (INSERT z pliku, eksport COUNT, SAVEAS, PLOT), ale tylko w folderach, które dodasz w {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Asystenci}} › {{ui:Foldery, z których mogą korzystać asystenci}}. Zobacz [Pozwól mu używać plików w wybranych folderach](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mniej wywołań.** Asystent może wpisać cały wiersz polecenia naraz, utrzymać polecenie otwarte między wywołaniami, policzyć obiekty według typu i warstwy bez ich wypisywania i wstawić blok z wartościami atrybutów w jednym kroku.
- **Bez okna.** Wiersz poleceń `cadcraft` zapisuje wydruki SVG oraz konwertuje, drukuje, sprawdza lub opisuje wiele plików naraz. Pakiet MCP nie jest jeszcze opublikowany. Zobacz [Praca na plikach bez otwierania CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Zmienione

- **Gładzik przesuwa.** Przesuń dwa palce po gładziku, a widok 2D podąży za nimi; uszczypnięcie i kółko myszy powiększają i pomniejszają. Zobacz [Mysz, gładzik i dotyk](topic:mouse-trackpad-touch).
- **Obiekty OLE są zachowywane.** Obiekty osadzone w DXF pokazują się jako ich obraz albo opisana ramka i są zapisywane z powrotem przez DXF 2000. Te z DWG są zachowywane i zapisywane z powrotem przy zapisie jako DWG, ale jeszcze nie pokazywane. Wcześniej ginęły przy zapisie. Zobacz [Obiekty z innych programów (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jednostki nowego rysunku** odpowiadają jednostce oznaczonej gwiazdką w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}}.

## Naprawione

- Układy, które otwierały się puste albo traciły okno widokowe i pokazywały w jego miejscu cały model, otwierają się teraz z prawdziwymi oknami widokowymi. Układ bez powiązania ze swoją zawartością jest zachowywany, a raport otwarcia o tym informuje.
- Pliki DXF w starszych stronach kodowych pokazywały zniekształcony tekst cyrylicą i koreański. Teraz czytają się poprawnie.
- Tekst akapitowy z innych programów tracił formatowanie przy otwarciu i był zapisywany z powrotem jako zwykły.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma po jednej liście dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami wynikającymi z definicji jednostek (stopa geodezyjna USA jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list jednostek; oznacz jedną gwiazdką, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. W CadCraft gwiazdka ustawia jednostki nowego rysunku, gdy jest to jednostka, którą rysunek może nieść; własne okno {{ui:Jednostki}} CadCraft nie podąża jeszcze za przełącznikami. Gdy rysunek ma już jednostki, wpisywana długość może nieść znak dowolnej jednostki. Zobacz [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Zwarta}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy panel boczny ma wąski pasek tytułu: przeciągnij go, aby zadokować lub oderwać panel, upuść na pasku innego panelu, aby dzielić jedną ramkę jako karty, przypnij, aby chował się przy krawędzi, albo ukryj go i przywołaj od krawędzi. Zobacz [Rozmieszczanie paneli](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu, aby usunąć je sprzed rysunku; wraca tam, gdzie je zostawisz. Kliknij dwukrotnie pasek tytułu, aby znów je wyśrodkować. Zobacz [Przesuwanie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć rozpisanych próśb do Twojego własnego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z wywoływanymi narzędziami i potrzebnymi uprawnieniami, i każda odtwarzana przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. Razem z nim **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz każde słowo aplikacji, jako wersje robocze jeszcze niesprawdzone przez rodzimego użytkownika języka. Tematy pomocy na start są dostępne także w tych językach, w tym po polsku; pozostałe tematy pomocy są nadal po angielsku, o ile nie ma ich tłumaczenia.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla Twojego systemu, brak sieci, zły podpis), zamiast samego „Done”, i przestaje przywracać kartę Co nowego, którą zamknięto, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisane cyfrowo.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, bo walidacja certyfikatu jeszcze nie nadeszła. Sprawdź SHA-256 obok każdego pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij CadCraft Studio prawym przyciskiem i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji na iPada ani iPhone'a.
- Listy kątów i nachyleń w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie czyta.
- Obiekty OLE z DWG są zachowywane, ale nie pokazywane, a obrazy metafile wewnątrz obiektów OLE nie są rysowane.
- Odczyt tabel stylów wydruku (plików CTB) z innych programów czeka na plik przykładowy.
- Starszy tekst azjatycki zapisany jako kody `\M+` jest czytany, ale nie został jeszcze sprawdzony na pliku z innego programu.
- Podkłady PDF: obrazy wewnątrz strony są pokazywane na ekranie, ale nie drukowane, wydruk asystenta pomija podkłady, a to, jak inne programy odczytują zapisane przycięcie i skalę, nie zostało w nich sprawdzone.
- Historia: CadCraft nie wysyła jeszcze swoich zapisów do chmury, więc wersje chmurowe to te zapisane z innych urządzeń i z sieci. Historia jest tylko w CadCraft Studio.
- To, czy Studio zachowuje folder pomocniczy acad.lsp po ponownym uruchomieniu, nie zostało jeszcze sprawdzone; jeśli zapyta, wybierz folder ponownie w APPLOAD.
- Panel Laser nie został jeszcze wypróbowany na prawdziwym laserze: przetestuj każde ustawienie na odpadzie. CadCraft Studio nie ma Web Serial, więc w Studio panel zapisuje tylko G-code.
- Rejestracja skanów została przetestowana na wymyślonych skanach, jeszcze nie na zestawie z prawdziwego skanera.
- Przesuwanie dwoma palcami wypróbowano na symulowanych zdarzeniach gładzika, jeszcze nie na prawdziwym gładziku.
- {{cmd:PEDIT}} nie ma opcji Edit vertex (użyj uchwytów albo Właściwości). Odsunięcie, przycinanie, wydłużanie, zaokrąglanie, przerywanie i łączenie nie obsługują jeszcze spline; wysokość (Z) spline nie jest zachowywana.
- Nowemu tekstowi akapitowemu nie można jeszcze nadać kodów formatowania, a wydruki SVG pokazują sformatowany tekst jednym kolorem.
- Opcja Entire drawing w WBLOCK zapisuje tylko model, nie arkusze. Bieżący styl wymiarowania nie jest zapisywany w pliku: rysunek otwiera się z bieżącym stylem Standard.
- Style menu ze wstążką nie mają jeszcze list warstw, kolorów ani typów linii: użyj panelu {{ui:Warstwy}} i {{ui:Właściwości}}.
- Chmury punktów nadal nie są zapisywane w rysunku ani drukowane, a pliki E57 otwierają się do 6 milionów punktów i 512 MB.
- Zapisane przez CadCraft pliki DWG nie zostały jeszcze sprawdzone w samym AutoCAD.

Wszystko inne jest w [Jeszcze nie zbudowano](topic:not-built-yet).
