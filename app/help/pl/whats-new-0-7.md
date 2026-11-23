---
title: Co nowego w 0.7 (wcześniej)
summary: Podkłady PDF i import PDF, zeskanowane rysunki z automatycznym śledzeniem, prawdziwe splajny z SPLINE, SPLINEDIT i PEDIT, menedżer stylów wymiarowania, tekst zachowujący formatowanie, WBLOCK i własne skale, bryły 3D z innych programów, rejestrowanie skanów, panel Laser, eksport USD, Historia i drukowanie w CadCraft Studio, przewodnik po pierwszym rysunku, pasek narzędzi z dowolnej strony lub w mniejszej liczbie wierszy oraz więcej dla asystentów AI.
keywords: co nowego 0.7, wcześniejsze wydanie, informacje o wydaniu, dziennik zmian, zmiany, 0.7, wersja, nowe funkcje, pdf, pdfattach, pdfimport, podkład, skan, scanattach, scantrace, śledzenie, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatowanie, wblock, scalelistedit, lista skal, acis, bryły 3D, registerscans, rejestracja skanów, icp, e57, las, laser, grbl, g-code, usd, usdout, historia, wersje, porównaj, drukowanie, drukarka, png, svg, styl wydruku, typ linii, przewodnik, ściąga, mapa poleceń, położenie paska narzędzi, wiersze paska narzędzi, toolbardock, regen, regenall, gładzik, przesunięcie dwoma palcami, tabela kodowa, cyrylica, koreański, chiński, japoński, elektryczne, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder wsparcia, asystenci, mcp, jednostki, portugalski
from: d9a8ea79
---

To, co zmieniło się w CadCraft 0.7 w porównaniu z 0.6. Wiele z tego zostało zgłoszone na Discordzie. Lista jest pogrupowana według obszarów, z najważniejszymi na początku.

## Nowe

### PDF i zeskanowane rysunki

- **Umieść stronę PDF pod rysunkiem.** {{cmd:PDFATTACH}} (`PDFATT`) umieszcza stronę w jej prawdziwym rozmiarze albo w skali, którą wpiszesz. Przyciągaj do jej linii, wygaszaj ją, zamieniaj na monochromatyczną ({{cmd:PDFADJUST}}), przycinaj ({{cmd:PDFCLIP}}) i przełączaj warstwy samego PDF ({{cmd:PDFLAYERS}}). Drukuje się jako linie, wypełnienia i tekst, a DWG lub DXF 2000 zachowuje ją jako łącze do pliku. Otwarcie PDF poleceniem {{ui:Otwórz}} pyta, czy dołączyć go, czy zaimportować. Zobacz [Podkłady PDF i import PDF](topic:pdf-underlay).
- **Zamień stronę PDF w obiekty rysunku.** {{cmd:PDFIMPORT}} (`PDFIM`) tworzy linie, polilinie, okręgi, łuki, pełne kreskowania i tekst na warstwach nazwanych od PDF, w prawdziwym rozmiarze, w wpisanej skali albo przeskalowane z dwóch punktów i prawdziwej odległości, w jednym kroku cofnięcia. Zobacz [Importuj stronę](topic:pdf-underlay#import-a-page).
- **Zeskanowane rysunki.** {{cmd:SCANATTACH}} wprowadza PNG, JPEG lub TIFF (jedną stronę albo wszystkie) albo stronę PDF, która jest obrazem. Następnie skaluj ją z dwóch punktów ({{cmd:SCANSCALE}}), wyrównaj ({{cmd:SCANALIGN}}), wyprostuj według jej własnych długich linii ({{cmd:SCANDESKEW}}), zamień na czarno-biały i usuń zanieczyszczenia ({{cmd:SCANCLEAN}}), przytnij i wymaż fragmenty. Każdy krok to jeden krok cofnięcia, a oryginalny plik jest zachowany. Zobacz [Zeskanowane rysunki i śledzenie](topic:scanned-drawings).
- **Śledź skan w linie i łuki.** {{cmd:SCANTRACE}} rysuje linie skanu jako linie i łuki na nowej warstwie SCAN-TRACE, z tolerancją, którą ustawisz, a tekst i kreskowanie pozostawia bez zmian. Raport mówi, co utworzono i co pozostawiono; nie jest to potwierdzenie, że wynik jest poprawny: sprawdź go z arkuszem. {{cmd:RASTERSNAP}} pozwala przyciąganiu do obiektów znajdować końce, narożniki i przecięcia skanu. Nic nie jest nigdzie wysyłane i nie jest używany żaden wytrenowany model. Zobacz [Śledzenie](topic:scanned-drawings#the-trace).

### Rysowanie i edycja

- **Prawdziwe splajny.** {{cmd:SPLINE}} (`SPL`) rysuje krzywą przez punkty albo z punktów kontrolnych (stopień od 1 do 5), z stycznymi na końcach; {{cmd:SPLINEDIT}} (`SPE`) przesuwa, dodaje i usuwa punkty dopasowania lub kontrolne, ustawia wagi, otwiera, zamyka, odwraca albo zamienia splajn w polilinię. Splajny z plików DWG i DXF otwierają się jako splajny, a DWG i DXF 2000 zapisują je jako splajny. Zobacz [Splajny i polilinie](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zamyka i otwiera polilinie, łączy z nimi linie i łuki, ustawia jedną szerokość, dopasowuje krzywą przez wierzchołki albo splajn wzdłuż nich i cofa to poleceniem Decurve, odwraca, a także edytuje kilka naraz. Zobacz [Edycja polilinii](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapisuje blok, kilka obiektów albo cały rysunek do nowego pliku DWG lub DXF, zawierającego tylko warstwy, style i bloki, których używają. Zobacz [Zapisz blok lub obiekty do osobnego pliku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) przerysowuje kartę, na której jesteś, z rysunku, {{cmd:REGENALL}} (`REA`) każdą kartę, panel i otwarty rysunek. Zobacz [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i wymiary

- **Tekst zachowuje formatowanie.** Tekst akapitowy z innych programów zachowuje kolory poszczególnych słów, pogrubienie i kursywę, podkreślenie, ułamki piętrowe oraz wysokości: są rysowane na ekranie i w PDF, zachowywane przy edycji słów i zapisywane z powrotem. Zobacz [Formatowanie w tekście akapitowym z innych programów](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Menedżer stylów wymiarowania.** {{cmd:DIMSTYLE}} (`D`) tworzy, zmienia, porównuje i stosuje nazwane style wymiarowania; zmiana stylu zmienia każdy wymiar, który go używa. {{cmd:DIMEDIT}} (`DED`) przywraca tekst, wpisuje nowy tekst, obraca go albo pochyla linie pomocnicze; {{cmd:DIMTEDIT}} przesuwa tekst w lewo, w prawo lub na środek. Zobacz [Nazwane style wymiarowania](topic:dimension-settings#named-dimension-styles).
- **Własne skale.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje skale, takie jak 1:75, do list skal okien widokowych i wydruku; są zapisywane w rysunku (DWG i DXF 2000), a rysunek z innego programu przynosi własną listę. Zobacz [Skale](topic:units-papers-scales#scales).
- **Tekst w innych alfabetach.** Pliki DXF zapisane w tabelach kodowych cyrylicy, koreańskiego, chińskiego, japońskiego lub wietnamskiego otwierają się teraz z tekstem, a tekst chiński, japoński i koreański drukuje się w PDF (wydruk pobiera większą czcionkę przy pierwszej potrzebie). Zobacz [Czcionka](topic:text#font).

### Drukowanie i wydruk

- **Więcej w tabelach stylów wydruku.** Dla każdego koloru tabela może teraz ustawić także typ linii, zakończenie i złączenie linii oraz styl wypełnienia, który drukuje pełne wypełnienia jako linie kreskowania; tabela ma własną listę grubości linii i skalę typów linii. Zobacz [Tabele stylów wydruku](topic:plot-pdf#plot-style-tables).
- **Drukowanie oraz pliki PNG i SVG.** Okno Wydruku ma {{ui:Drukuj…}}, {{ui:Pobierz PNG}} (300 dpi) i {{ui:Pobierz SVG}}. W CadCraft Studio pokazuje drukarki komputera, ich papier i liczbę kopii. Zobacz [Drukowanie](topic:plot-pdf#print) oraz [Pliki obrazów i SVG](topic:plot-pdf#picture-and-svg-files).

### 3D i chmury punktów

- **Bryły 3D z innych programów.** Bryły, regiony i ciała w przestrzeni modelu rysunku pokazują się na karcie 3D, tylko do odczytu, a zapis do DWG zapisuje je z powrotem bez zmian. Ściany na powierzchniach, których CadCraft jeszcze nie rysuje, są wypisywane, a nie zgadywane. Zobacz [Bryły z innych programów](topic:3d-solids#solids-from-other-programs).
- **Rejestrowanie wielu skanów.** {{cmd:REGISTERSCANS}} (`REGSCAN`) umieszcza skany wykonane z różnych pozycji w jednym układzie, według par punktów albo wpisanych współrzędnych celu, dopracowuje je metodą ICP, zapisuje rejestrację jako mały plik projektu i zapisuje zarejestrowaną chmurę jako jeden plik LAS lub E57. Zobacz [Zarejestruj kilka skanów w jeden](topic:register-scans).
- **Eksport USD.** {{cmd:USDOUT}} albo {{cmd:EXPORT3D}} › {{ui:USD}} zapisuje bryły z karty 3D jako `.usda`, `.usdc` lub `.usdz`. Zobacz [Eksport modelu 3D do USD](topic:usd).
- **Obliczenia na karcie 3D.** Tam, gdzie narzędzia karty 3D proszą o odległość, możesz wpisać obliczenie, tak jak w wierszu poleceń. Zobacz [Działania arytmetyczne we wpisanej wartości](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Tworzenie

- **Wyślij rysunek do lasera.** {{cmd:LASER}} albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Laser…}} otwiera panel nad rysunkiem: każda warstwa tnie, rowkuje, grawiruje linie, wypełnia kształty, grawiruje obraz albo nie jest wysyłana, z mocą, prędkością i przejściami. Podgląd śledzi Twoje zmiany, {{ui:Zapisz G-code…}} zapisuje G-code trybu laserowego GRBL, a w Chrome lub Edge panel może obrysować zadanie i wysłać je przez USB. Ustawienia są zapisywane w rysunku (DWG i DXF). Zobacz [Wyślij rysunek do lasera](topic:laser-cutting).
- **Symbole instalacji budynkowych w dodatku Elektryczne.** Gniazda danych, telefoniczne i TV, wyłączniki kluczowe i czasowe, termostat, znak wyjścia, czujniki, punkt alarmowy i sygnalizator, wentylator, podgrzewacz wody, kuchenka, punkt ładowania EV, licznik energii i podrozdzielnica oraz symbole RCD i RCBO. Obwód może mieć RCD, zestawienie rozdzielnicy ma kolumnę RCD, a kontrole wskazują obwody gniazd bez RCD o prądzie 30 mA lub mniejszym. Jest to przypomnienie przy planowaniu, a nie kontrola zgodności z przepisami.
- **Dodatek P&ID.** P&ID rysuje schematy procesowe: symbole z punktami połączeń, linie procesowe i sygnałowe, znaczniki, numery linii, listy linii, urządzeń, przyrządów i zaworów (CSV lub skoroszyt) oraz kontrole. Jest dołączony do CadCraft i wyłączony, dopóki nie włączysz go w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Dodatki}}. Jest to pomoc rysunkowa, a nie zatwierdzenie inżynierskie, a jego słowa są na razie tylko po angielsku.

### Start i ekran

- **Przewodnik po pierwszym rysunku.** {{cmd:TOUR}} (albo {{ui:Rozpocznij przewodnik}} na karcie startowej) prowadzi przez sześć kroków w prawdziwym rysunku: linia, okrąg, przesunięcie, przycięcie, wymazanie i wymiar. Startuje samo, gdy CadCraft po raz pierwszy otwiera się z pustym rysunkiem. Zobacz [Wolisz z przewodnikiem?](topic:getting-started#prefer-to-be-guided)
- **Ściąga i mapa poleceń.** [Ściąga](topic:cheat-sheet) zawiera 40 codziennych poleceń na jednej stronie, także jako PDF do wydrukowania, a [mapa poleceń](topic:command-map) wypisuje polecenia z ich krótkimi nazwami, od A do Z.
- **Pasek narzędzi z dowolnej strony.** {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Położenie paska narzędzi}}: u góry (jak dotychczas), na dole, z lewej lub z prawej, albo wpisz {{cmd:TOOLBARDOCK}}. Zobacz [Położenie paska narzędzi](topic:settings#toolbar-position).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Wiersze paska narzędzi}}: zawijanie, aby się zmieścić, 2 wiersze albo 1 wiersz, dla paska narzędzi CadCraft oraz stylów Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} przechodzi między nimi, {{key:Ctrl+F1}} między tym, co pokazują przyciski, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ustawiają je. Podpowiedź startowa ma przycisk zamknięcia. Dzięki GJoe2, który przesłał to jako pull request. Zobacz [Wiersze paska narzędzi](topic:settings#toolbar-rows).

### W CadCraft Studio

- **Historia.** {{cmd:HISTORY}} (`HIST`) albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Historia…}}: kopie, które Studio zachowuje przy otwieraniu i zapisywaniu rysunku, oraz wersje rysunku w chmurze, jeśli otworzyłeś go z chmury. Otwórz lub przywróć jedną albo porównaj dwie, z tym, co dodano, usunięto i zmieniono, pokazanym kolorem. Zobacz [Historia](topic:history).
- **acad.lsp i acaddoc.lsp.** Wybierz folder wsparcia w {{cmd:APPLOAD}}: te dwa pliki wczytują się przy starcie CadCraft (acaddoc.lsp ponownie dla każdej nowej karty rysunku), a `S::STARTUP` uruchamia się po nich. Zobacz [Wczytywanie aplikacji](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Okno Wydruku we własnym oknie.** Przycisk na pasku tytułu przenosi je do osobnego okna, które można umieścić na innym monitorze. Zobacz [Przenoszenie okna dialogowego](common:arrange-panels#move-a-dialog).

### Dla asystentów AI

- **Pliki po nazwie, w wybranych folderach.** W CadCraft Studio asystent może otwierać, zapisywać i drukować pliki po nazwie oraz przekazywać poleceniu plik, o który prosi (INSERT z pliku, eksport COUNT, SAVEAS, PLOT), ale tylko wewnątrz folderów, które dodasz w {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Asystenci}} › {{ui:Foldery, z których mogą korzystać asystenci}}. Zobacz [Pozwól mu używać plików w wybranych folderach](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mniej wywołań.** Asystent może wpisać całą linię poleceń za jednym razem, zostawić polecenie otwarte między swoimi wywołaniami, zliczyć obiekty według typu i warstwy bez ich wypisywania oraz umieścić blok z wartościami atrybutów w jednym kroku.
- **Bez okna.** Wiersz poleceń `cadcraft` zapisuje wydruki SVG i konwertuje, drukuje, sprawdza lub opisuje wiele plików naraz. Pakiet MCP nie jest jeszcze opublikowany. Zobacz [Praca na plikach bez otwierania CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Zmienione

- **Gładzik przesuwa widok.** Przesuń dwa palce na gładziku, a widok 2D za nimi podąży; szczypanie i kółko myszy powiększają. Zobacz [Mysz, gładzik i dotyk](topic:mouse-trackpad-touch).
- **Obiekty OLE są zachowywane.** Osadzone obiekty DXF pokazują się jako ich obraz albo jako podpisana ramka i są zapisywane z powrotem przez DXF 2000. Obiekty DWG są zachowywane i zapisywane z powrotem, gdy zapisujesz jako DWG, ale jeszcze nie są pokazywane. Wcześniej przy zapisie były tracone. Zobacz [Obiekty z innych programów (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jednostki nowego rysunku** zależą od jednostki, którą wyróżnisz w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}}.

## Naprawione

- Układy, które otwierały się puste albo traciły okno widokowe i pokazywały w jego miejscu cały model, otwierają się teraz z prawdziwymi oknami widokowymi. Układ bez powiązania z zawartością jest zachowywany, a raport otwarcia to mówi.
- Pliki DXF w starszych tabelach kodowych pokazywały zniekształcony tekst cyrylicą i koreański. Teraz są czytane poprawnie.
- Tekst akapitowy z innych programów tracił formatowanie przy otwarciu i był zapisywany jako zwykły tekst.

## We wszystkich aplikacjach

- **Jednostki.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} ma osobną listę dla długości, pola, objętości, kąta i nachylenia, z dokładnymi rozmiarami podanymi w definicjach jednostek (amerykańska stopa geodezyjna jest osobną jednostką). Wyłącz jednostki, których nigdy nie używasz, a znikną z list jednostek; wyróżnij jedną, a nowa praca zacznie się w niej. Plik zawsze zachowuje własną jednostkę. W CadCraft wyróżnienie ustawia jednostki nowego rysunku, gdy jest to jednostka, którą rysunek może mieć; pole {{ui:Jednostki}} w CadCraft jeszcze nie podąża za przełącznikami. Gdy rysunek ma jednostki, wpisana długość może mieć oznaczenie dowolnej jednostki. Zobacz [Jednostki, wpisane wartości i listy jednostek](common:unit-lists).
- **Gęstszy układ i panele, które się chowają.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Gęstość układu}} › {{ui:Kompaktowy}} mieści więcej na ekranie (ekrany dotykowe i telefony zachowują duże przyciski). Każdy boczny panel ma smukły pasek tytułu: przeciągnij go, aby zadokować lub odpiąć panel, upuść na pasek innego panelu, aby współdzielić jedną ramkę jako karty, przypnij, aby chował się do krawędzi, albo ukryj go i przywołaj z krawędzi. Zobacz [Ułóż panele](common:arrange-panels#make-the-layout-denser).
- **Okna dialogowe się przesuwają.** Przeciągnij okno dialogowe za pasek tytułu z drogi rysunku; wróci tam, gdzie je zostawiłeś. Kliknij dwukrotnie pasek tytułu, aby ponownie wyśrodkować. Zobacz [Przenoszenie okna dialogowego](common:arrange-panels#move-a-dialog).
- **Przepisy dla asystentów AI.** Dziesięć przykładowych próśb do Twojego asystenta (uporządkuj rysunek, wydrukuj zestaw, sprawdź rysunki, zadaj modelowi pytania, zsumuj przedmiar, wypróbuj wariant części…), każda z narzędziami, które wywołuje, i uprawnieniami, których wymaga, a każda sprawdzona przez nasze testy. Aplikacje nie zawierają AI. Zobacz [Przepisy dla asystentów AI](common:assistants-recipes).
- **Języki.** **Português (Portugal)** jest nowy w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Język}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** mają teraz wszystkie słowa aplikacji, jako wersje robocze, jeszcze nieprzejrzane przez native speakera. Tematy pomocy są po angielsku.
- **CadCraft Studio** podaje, dlaczego sprawdzenie aktualizacji się nie powiodło (brak pliku dla Twojego systemu, brak sieci, zły podpis), zamiast samego „Gotowe”, i nie przywraca karty Co nowego, którą zamknąłeś, dopóki nie pojawi się nowsze wydanie.

## Jeszcze nie w tej wersji

- **0.7 nie jest podpisany kodem.** Podpisywanie i pakiet Microsoft Store przeniesiono do 0.8, ponieważ walidacja certyfikatu jeszcze nie przyszła. Sprawdź sumę SHA-256 przy każdym pliku na getcadcraft.com/download. W Windows, jeśli SmartScreen zatrzyma instalator, wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}. Na Macu za pierwszym razem kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. CadCraft Studio nie jest jeszcze w sklepie z aplikacjami i nie ma jeszcze wersji dla iPada ani iPhone'a.
- Pozycje kąta i nachylenia w {{ui:Jednostki}} są zapisywane, ale żadne pole ich jeszcze nie odczytuje.
- Obiekty OLE z DWG są zachowywane, ale nie pokazywane, a obrazy metapliku w obiektach OLE nie są rysowane.
- Odczyt tabel stylów wydruku (pliki CTB) z innych programów czeka na przykładowy plik.
- Azjatycki tekst zapisany jako kody `\M+` jest odczytywany, ale nie został jeszcze sprawdzony na pliku z innego programu.
- Podkłady PDF: obrazy wewnątrz strony są pokazywane na ekranie, ale nie są drukowane, wydruk asystenta pomija podkłady, a to, jak inne programy odczytują zapisane przycięcie i skalę, nie zostało w nich sprawdzone.
- Historia: CadCraft nie wysyła jeszcze swoich zapisów do chmury, więc wersje w chmurze to te zapisane z innych urządzeń i z przeglądarki. Historia jest tylko w CadCraft Studio.
- Nie sprawdzono jeszcze, czy Studio zachowuje folder wsparcia acad.lsp po ponownym uruchomieniu; jeśli o niego zapyta, wybierz folder ponownie w APPLOAD.
- Panel Laser nie był jeszcze testowany na prawdziwym laserze: sprawdź każde ustawienie na odpadzie. CadCraft Studio nie ma Web Serial, więc w Studio panel zapisuje tylko G-code.
- Rejestrowanie skanów zostało przetestowane na wymyślonych skanach, nie jeszcze na zestawie z prawdziwego skanera.
- Przesuwanie dwoma palcami zostało wypróbowane na symulowanych zdarzeniach gładzika, nie jeszcze na prawdziwym gładziku.
- {{cmd:PEDIT}} nie ma opcji Edytuj wierzchołek (użyj uchwytów lub Właściwości). Odsunięcie, przycięcie, wydłużenie, zaokrąglenie, przerwanie i połączenie jeszcze nie przyjmują splajnów; wysokość (Z) splajnu nie jest zachowywana.
- Nowy tekst akapitowy nie może jeszcze otrzymać kodów formatowania, a podglądy SVG pokazują sformatowany tekst jednym kolorem.
- WBLOCK z opcją Cały rysunek zapisuje tylko model, bez arkuszy. Bieżący styl wymiarowania nie jest zapisywany w pliku: rysunek otwiera się z bieżącym stylem Standard.
- Style menu wstążki nie mają jeszcze list warstw, kolorów ani typów linii: użyj panelu {{ui:Warstwy}} i {{ui:Właściwości}}.
- Chmury punktów nadal nie są zapisywane w rysunku ani drukowane, a pliki E57 otwierają się do 6 milionów punktów i 512 MB.
- Zapisane pliki DWG CadCraft nie były jeszcze sprawdzane w samym AutoCAD.

Wszystko inne jest w [Jeszcze nie zbudowano](topic:not-built-yet).
