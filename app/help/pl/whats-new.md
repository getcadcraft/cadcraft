---
title: Co nowego w 0.9
summary: Kreskowania podążające za swoją granicą, grupy warstw, piętra w stosie, inteligentne ściany 2D z drzwiami i oknami, style tekstu i edytor tekstu sformatowanego, pływający wiersz poleceń, przyciąganie do siatki, dziesięć sposobów rysowania łuku oraz panel Dokumenty.
keywords: co nowego, 0.9, informacje o wydaniu, dziennik zmian, kreskowanie, kreskowanie asocjacyjne, hatchedit, plik pat, plik wzoru, grupy warstw, laygroup, piętra, piętra w stosie, floorlayers, inteligentne ściany, ściana, drzwi, okno, narzędzia ścian, styl tekstu, styl, edytor mtext, tekst akapitowy, formatowanie, pływający wiersz poleceń, wiersz poleceń, górny obszar, kompaktowy, przyciąganie do siatki, grid snap, f9, łuk, panel dokumentów, zameldowanie, rozmiary stali UK, draw.io, tekst tajski, dxf r12, nowości, what's new, changelog, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, autouzupełnianie, duch, tab, sketchfix, photosketch, autosheet, detale, gridmove, autodim, etykiety, redline, scalanie, git, fossil, access, rysowanie bez wzroku, czytnik ekranu, limity, azymuty, aunits, shx, diagram, ole, historia, porównanie, słownie, właściwości, stopy i cale, rozciąganie, języki, urządzenia wejściowe, problemy, live, asystenci
from: 8b6dea0b
---

To, co zmieniło się w CadCraft 0.9 w porównaniu z 0.8.1. CadCraft jest aplikacją do rysowania 2D i 3D w CadCraft Studio 0.9 i jego ośmiu aplikacjach. Wersja 0.9 kończy rysowanie planów, dodaje style tekstu i prawdziwy edytor tekstu oraz daje więcej miejsca na ekranie.

## Nowe

### Rysowanie planów

- **Kreskowania podążające za granicą.** {{cmd:HATCH}} łączy się z tym, co je ogranicza. Przesuń, obróć lub przeskaluj granicę, a kreskowanie i jego wzór pójdą za nią; zmień jej kształt, a kreskowanie zostanie wyliczone na nowo. {{cmd:HATCHEDIT}} (`HE`) zmienia kreskowanie później i tworzy lub kończy połączenie. Zobacz [Kreskowanie i obszary wypełnienia](topic:hatch).
- **Pliki wzorów kreskowania.** Przy pytaniu {{cmd:HATCH}} `Pick internal point` wpisz `F` (Plik wzoru) i wybierz plik `.pat`. Wypróbowano tylko pliki zapisane w zwykłym formacie.
- **Grupy warstw.** W {{ui:Narzędzia}} na panelu {{ui:Warstwy}}: {{ui:Nowa grupa}}, {{ui:Dodaj gotowe grupy}}, {{ui:Grupuj według nazwy}} i {{ui:Znajdź warstwę}}; albo wpisz {{cmd:LAYGROUP}} (`LG`). Zobacz [Porządkowanie rysunku warstwami](topic:layers#group-layers).
- **Piętra w stosie.** {{cmd:FLOORS}} (`FLR`) albo {{ui:Piętra…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}. Okno widokowe na arkuszu może pokazać jedno piętro w {{ui:Pokazane piętro}} we Właściwościach. {{cmd:FLOORLAYERS}} zamienia piętra w warstwy dla pliku, który idzie do kogoś innego. Zobacz [Układanie pięter w jednym rysunku](topic:floors).
- **Inteligentne ściany 2D, drzwi i okna.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Narożniki, połączenia T i przecięcia są liczone za Ciebie. Ściany zachowują zapis sposobu, w jaki się łączą, a Właściwości dostają {{ui:Zabroń połączenia na początku}} / {{ui:Zabroń połączenia na końcu}}, {{ui:Linię położenia}} i edytowalną {{ui:Długość}}. Zobacz [Rysuj ściany 2D, drzwi i okna](topic:walls-2d).
- **Narzędzia ścian na ścianach planu.** Wpisz {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i resztę. Nie mają jeszcze przycisków na pasku narzędzi. Zobacz [Kształty ścian, cięcia, odsunięcia i blokady ścian 2D](topic:wall-tools-2d).

### Tekst

- **Style tekstu.** {{cmd:STYLE}} (`ST`) albo {{ui:Styl tekstu}} na pasku {{ui:Rysuj}}: nazwane style z czcionką, wysokością, współczynnikiem szerokości i pochyleniem. Zobacz [Ustawianie czcionki i rozmiaru tekstu za pomocą stylów tekstu](topic:text-styles).
- **Edytor tekstu akapitowego z formatowaniem.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} albo podwójne kliknięcie tekstu otwiera okno z czcionką, rozmiarem, pogrubieniem, kursywą, podkreśleniem, przekreśleniem, kolorem, wyrównaniem i znakami stopnia, plus-minus oraz średnicy, a także {{ui:OK}} i {{ui:Anuluj}}. Zobacz [Formatowanie tekstu akapitowego](topic:format-paragraph-text).
- **Schemat z XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) czyta też wklejony XML draw.io. Zobacz [Rysowanie schematu z tekstu](topic:text-to-diagram).
- **Tekst tajski w wydruku PDF.** Wcześniej drukował się jako znaki zapytania.

### Więcej miejsca i pomoce rysunkowe

- **Pływający, cieńszy wiersz poleceń i kompaktowy górny obszar.** Przeciągnij uchwyt wiersza poleceń, aby go odpiąć, przeciągnij jego górną krawędź, aby mieć mniej wierszy, {{key:F2}} otwiera historię. {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Wiersz poleceń}} oraz wybory górnego obszaru mają te same ustawienia. Zobacz [Ustawienia](topic:settings#command-line).
- **Menu przyciągania do obiektów.** Kliknij prawym przyciskiem {{ui:Przyciąganie}} na pasku stanu albo wpisz {{cmd:OSNAP}}.
- **Przyciąganie do siatki.** Przycisk {{ui:Przyciąganie do siatki}} na pasku stanu albo {{key:F9}}: wskazane punkty trafiają do najbliższego punktu siatki, gdy żadne przyciąganie do obiektów nie przejęło punktu.
- **Łuk na dziesięć sposobów i Kontynuuj.** {{ui:Łuk}} na pasku {{ui:Rysuj}} albo {{cmd:ARC}}: 3 punkty, rodzina Początek/Środek/Koniec i rodzina Środek/Początek/Koniec oraz Kontynuuj (naciśnij {{key:Enter}} w punkcie początkowym) od ostatniej linii, łuku lub polilinii.
- **Panel Dokumenty.** {{cmd:DOCUMENTS}} (`DOCS`) albo {{ui:Dokumenty…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}: wersja, stan i zameldowanie dla każdego rysunku w folderze projektu. Otwiera się jako wyśrodkowane okno dialogowe. Zobacz [Dokumenty](topic:documents).

### Pliki

- **Rozmiary stali UK.** 976 przekrojów w panelu Standard, wpisywanych tak, jak na rysunkach (na przykład `305x165x40 UB`).
- **Zestawy południowoafrykańskie** (praktyka rysunkowa i przepisy budowlane) jako zestawy dodatku Przepisy budowlane. Liczby nie są zweryfikowane.
- **Dodatki do CadCraft,** dodawane na żądanie i domyślnie wyłączone: projektowanie oświetlenia wnętrz, projektowanie chipów (HDL na układ), rzeźbienie frezarką, symulacja obwodów, koła zębate łańcuchów rolkowych i zestawy krajowe Przepisów budowlanych.

## Naprawione

- Przesunięcie, obrót lub skalowanie kreskowania zostawiało za sobą jego wzór.
- {{cmd:GRIDMOVE}} przenosił całą ścianę planu, która zaczyna się tylko na linii siatki. Ściana jest teraz oceniana po swoich końcach.
- Siatka pokazywała się tylko wewnątrz limitów rysunku, nawet gdy limity były wyłączone.
- Lista bloków w panelu bocznym przewija się, a nazwa, która nie jest blokiem, wymienia bloki zaczynające się od niej („Czy chodziło o”).
- Pliki DXF R12, które AutoCAD odrzucał („Unknown group 1001 for table”), otwierają się teraz.
- Bardzo duże pliki (około 70 000 obiektów i więcej) nie otwierały się z błędem „Maximum call stack size exceeded”.
- Pliki DWG z AutoCAD 2018 i nowszych z wysoką wersją konserwacyjną nie otwierały się z błędem „bad BITLONG code 11”.
- W polu tekstu akapitowego nowy rozmiar wpisany dla zaznaczonej części zachowuje zaznaczenie.

## We wszystkich aplikacjach

Podpowiedzi Bootstrap przy każdym elemencie z opisem, wskazówka startowa, którą można zamknąć, paski kart, które się przewijają, gdy nie mieszczą się, oraz tytuł karty przeglądarki, który podąża za otwartym rysunkiem (`<drawing> - CadCraft | CadCraft`). {{ui:Ustawienia}} › {{ui:Układ}} jest teraz listą rozwijaną z dwuwierszowymi wyborami. Lista języków w {{ui:Ustawienia}} jest dłuższa niż w 0.8. Współedycja na żywo, kolekcje Biblioteki oraz jednostki wagi i temperatury są opisane w notatkach Studio.

## Uczciwe ograniczenia

- Tekst akapitowy nie ma punktorów ani list numerowanych, linijki tabulatorów ani wyrównania do obu stron. Wydrukowane PDF ustawiają tekst czcionką Helvetica.
- Ściany planu są proste, więc łuk jest rysowany jako krótkie ściany. Społecznościowe sprawdzenie ręczne narzędzia ścian czeka.
- Grupy warstw nie są zapisywane w formacie AutoCAD, więc AutoCAD pokazuje płaską listę. Inne programy pokazują wszystkie piętra razem, chyba że uruchomisz {{cmd:FLOORLAYERS}}.
- Panel Dokumenty nie był jeszcze wypróbowany przez dwie osoby na prawdziwym udziale sieciowym. Rzeźbienie frezarką nie było uruchamiane na prawdziwej maszynie. Szacunek oświetlenia został sprawdzony na śledzeniu fotonów, a nie w innym programie. Dodatki inżynierskie są pomocą do sprawdzania, a nie zastępstwem przeglądu przez inżyniera.
- Języki inne niż angielski są wersjami maszynowymi, a niektóre z nowych słów są tylko po angielsku.

## Wcześniej: 0.8 i 0.8.1

To, co zmieniło się w CadCraft 0.8 i 0.8.1 w porównaniu z 0.7. Wersja 0.8 (1 listopada 2026) dodaje pomoce rysunkowe, które działają na podstawie Twojego własnego rysunku, według reguł na Twoim komputerze i bez modelu, a 0.8.1 (2 listopada 2026) naprawia błędy zgłoszone po niej.

### Nowe

**Rysunek, który dokańcza Twoją myśl**

- **Duch pokazuje, co dalej.** Bez uruchomionego polecenia szara przerywana sylwetka pokazuje, co według wzorów Twojego rysunku jest następne: kolejny słupek w tym samym rozstawie, kolejny stopień schodów, brakująca ściana pomieszczenia. Naciśnij {{key:Tab}}, aby narysować go jako jeden krok cofnięcia, albo {{key:Esc}}, aby go odrzucić. Patrzy tylko na najnowsze obiekty, więc pozostaje płynny na dużym rysunku. Wyłącz go w {{ui:Ustawienia}} › {{ui:CadCraft}} albo poleceniem {{cmd:AUTOCOMPLETE}} `Off`.
- **Następny punkt podczas rysowania linii.** W trakcie {{cmd:LINE}} lub {{cmd:PLINE}} duch jest następnym punktem: kolejnym stopniem schodów, czwartym narożnikiem prostokąta albo punktem, który go zamyka. Przysuń kursor blisko niego i naciśnij {{key:Tab}}, tak jakbyś tam kliknął.
- **Szkice piórem stają się precyzyjną geometrią.** {{cmd:SKETCHFIX}}: rysuj szkicowe kreski piórem, myszą lub palcem, a każda z nich stanie się czystą linią, okręgiem, łukiem, prostokątem lub polilinią, przyciągniętą do tego, co już narysowano. Zobacz [Szkicuj piórem i otrzymaj precyzyjną geometrię](topic:sketch-with-a-pen).
- **Zdjęcie szkicu staje się rysunkiem.** {{cmd:PHOTOSKETCH}} (`PSK`) znajduje kartkę na zdjęciu, prostuje perspektywę, nakłada podany przez Ciebie rozmiar papieru i skalę oraz przenosi linie pióra na warstwę dla każdego koloru pióra. Napisy nie są przenoszone.
- **Wymiaruj według reguł.** {{cmd:AUTODIM}} (`ADIM`) tworzy łańcuchy wymiarów wzdłuż wybranych boków, wymiar całkowity, szerokości otworów, średnice otworów, a z `Grid` rozstaw siatki. Nigdy nie powtarza wymiaru, który już istnieje.
- **Przesuń linię siatki, a zestaw pójdzie za nią.** {{cmd:GRIDMOVE}} (`GM`): ściany kończące się na linii siatki rozciągają się razem z nią, ściany na niej, kolumny, jej bańka i etykieta przesuwają się, a wymiary na niej mierzą nowy rozstaw. Jeden krok cofnięcia.

**Arkusze, detale i etykiety**

- **Arkusze, które same się układają.** {{cmd:AUTOSHEET}} bierze Twoje nazwane widoki (albo osobne części modelu), wybiera rozmiar papieru i standardową skalę oraz umieszcza widoki na nowych arkuszach z tabliczką rysunkową i podpisem nazwy i skali. Wszystko pozostaje edytowalne. Zobacz [Układaj arkusze za mnie](topic:lay-out-sheets-for-me).
- **Detale Twojej firmy, proponowane w trakcie rysowania.** {{cmd:DETAILS}} (`DET`) przechowuje Twoje własne bloki detali. Gdy to, co zaznaczysz, pasuje do jednego z nich po słowach w nazwach warstw, nazwach bloków i notatkach, pasek stanu o tym mówi; wybierz go i umieść. {{cmd:DETAILS}} › Udostępnij umieszcza Twoją listę w folderze Dokumenty i przynosi to, co dodał Twój zespół. Ustawienia wyłączają propozycje.
- **Etykiety na blokach.** {{cmd:TAGS}} definiuje etykietę (jej rodzaj, wartości, jakie może przyjmować, bloki, do których się stosuje), ustawia ją na zaznaczonych odwołaniach do bloków i wypisuje je jako zestawienie, które możesz zapisać jako CSV. Definicje są zachowywane w DWG. Zobacz [Etykiety](topic:tags).
- **Limity rysunku.** {{cmd:LIMITS}} ustawia prostokąt dla rysunku: siatka go wypełnia, a powiększenie Wszystko go pokazuje. Limity są widoczne jako kontur i zapisywane w DWG i DXF razem z limitami papieru. Zobacz [Ustawianie limitów rysunku](topic:drawing-limits).

**Praca z innymi ludźmi i innymi programami**

- **Zamień adnotację w rewizję.** {{cmd:REDLINE}} czyta paczkę, którą zapisuje MarkupCraft, i wypisuje każdą zmianę. Zaakceptuj lub odrzuć każdą z notatką; zaakceptowane dostają chmurę rewizji i dziennik rewizji w jednym kroku cofnięcia, a Ty zapisujesz plik odpowiedzi, który zamyka adnotacje w MarkupCraft. Zobacz [Zamień adnotację w rewizję](topic:redline-to-revision).
- **Rysunki, które git i Fossil mogą scalać.** Przy włączonym {{ui:Pliki przyjazne scalaniu}} w {{ui:Ustawienia}} › {{ui:CadCraft}} każdy obiekt dostaje klucz, który się nie zmienia (pliki są około 10 procent większe). `cadcraft merge base ours theirs` scala wtedy edycje dwóch osób w jednym pliku DWG lub DXF obiekt po obiekcie i zgłasza tylko miejsca, w których dwie osoby zmieniły to samo. Zobacz [Scalanie edycji dwóch osób w jednym rysunku](topic:merge-drawings).
- **Co się zmieniło, słownie.** W Historii Porównaj daje zwykłą listę: gdzie coś się zmieniło, jak duże są te miejsca, co dodano, usunięto lub zmieniono oraz edytowany tekst. Zobacz [Opisz słownie, co się zmieniło](topic:changes-in-words).
- **Azymuty i kąty.** Wpisz kierunek jako azymut geodety, na przykład N45°23'30"E, albo w stopniach, minutach i sekundach, wszędzie tam, gdzie pytane jest o kąt; AUNITS ustawia sposób pokazywania kątów. Zobacz [Wpisywanie i pokazywanie azymutów i kątów](topic:bearings-and-angles).
- **Własne czcionki SHX.** Wskaż CadCraft folder z czcionkami SHX, a style tekstu, które je nazywają, będą rysowane nimi, na ekranie i w wydrukach. Zobacz [Rysowanie tekstu we własnych czcionkach SHX](topic:shx-fonts).
- **Schemat z tekstu.** {{cmd:DIAGRAM}} czyta schemat blokowy Mermaid, diagram komponentów PlantUML, D2 lub listę od-do i rysuje bloki oraz łączniki, które możesz edytować. Zobacz [Rysowanie schematu z tekstu](topic:text-to-diagram).
- **Obiekty OLE w DWG.** {{cmd:OLELIST}} wypisuje obiekty OLE, które DWG zawiera, a CadCraft nie potrafi umieścić ich sam, i umieszcza kopię obrazu tam, gdzie wskażesz. Zobacz [Obrazy](topic:pictures#objects-from-other-programs-ole).
- **Twoje obliczenia zostają z rysunkiem.** Arkusze obliczeń i uzasadnienia projektowe są zachowywane w DWG razem z tabelą klas.

**Rysowanie bez wzroku**

- Włącz {{ui:Rysowanie bez wzroku}} w {{ui:Ustawienia}} (albo wpisz {{cmd:ACCESS}} i odpowiedz `On`). CadCraft odczytuje każde polecenie i wynik przez czytnik ekranu, opisuje rysunek i to, co jest przy kursorze, pozwala przesuwać kursor i wskazywać punkty klawiaturą, a dla każdego przyciągnięcia i uchwytu odtwarza dźwięk. Tam, gdzie przeglądarka rozpoznaje mowę na Twoim komputerze, polecenia można wypowiadać. Zobacz [Rysowanie bez wzroku](topic:draft-without-sight).

**We wszystkich aplikacjach**

- **Języki.** 54 języki; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili, uzbecki). Języki inne niż angielski są wersjami maszynowymi, dopóki nie przeczyta ich native speaker.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler do gier i sterowanie MIDI.
- **Wiersze paska narzędzi i siatka właściwości.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje Zawijaj, 2 wiersze lub 1 wiersz w pozostałych aplikacjach. CadCraft ma własne ustawienie w {{ui:Ustawienia}} › {{ui:CadCraft}} (zobacz [Wiersze paska narzędzi](topic:settings#toolbar-rows)). Wspólna siatka właściwości jest w trzech innych aplikacjach, nie w CadCraft.
- **Problemy, Live i dodatki.** Wspólny panel Problemy, który ostrzega we wszystkich aplikacjach, widok Live w CadCraft Studio pokazujący, kto gdzie jest (zobacz [Praca nad jednym rysunkiem razem](topic:work-live)), oraz lista dodatków.
- **Połącz swoją AI.** Jedno połączenie z CadCraft Studio do wszystkich ośmiu aplikacji, z poziomem tylko do odczytu, sugestii lub edycji dla każdej aplikacji oraz dziennikiem czynności asystenta prostymi słowami. CadCraft nie ma własnej AI, a Zapytaj we wszystkich aplikacjach używa AI, którą połączysz.

### Naprawione w 0.8.1

- **Właściwości pokazywały 150 zamiast 12'-6"** w rysunkach w stopach i calach. Pola, które aplikacja odczytuje sama, znów zachowują swój tekst.
- **Pliki DWG, których sekcja klas była odczytywana jako zły typ** (GitHub cadcraft#5), otwierają się teraz poprawnie.
- **Krzyżyk nie pokazuje się już za wyskakującymi oknami.**
- **Studio i wersje pakowane mogą zmieniać język w trakcie działania.** Wcześniej były tylko po angielsku. Nie przetestowano jeszcze na każdej platformie: daj znać, jeśli język się nie zmienia.
- **Tablety w pionie** oddają wolną wysokość siatki płótnu, a tryb arkuszy zaczyna się przy 760 px lub mniej.
- **STRETCH z oknem przecięcia oraz LIMITS** zostały zgłoszone w Studio 0.8.0 i były już poprawne w wersji internetowej 0.8; instalator zgłaszającego był starszy. Studio 0.8.1 zawiera je poprawnie.

### Jeszcze nie w tej wersji

- **0.8 i 0.8.1 nie są podpisane kodem.** Windows może ostrzegać (wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}); na Macu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. Wersje do sklepów są wstrzymane, a wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Szkice piórem i zdjęcia szkiców** były wypróbowane tylko na wymyślonych zdjęciach i z myszą, jeszcze nie z prawdziwym piórem, ekranem dotykowym ani ręcznym szkicem na papierze.
- **Rysowanie bez wzroku** zostało przetestowane automatycznymi kontrolami, jeszcze nie z czytnikiem ekranu ani z niewidomym testerem.
- **Udostępnianie detali** nie miało kontroli przez dwie osoby, a folder planu Team Cloud jako folder Dokumenty nie został zbudowany.
- **Scalanie** działa dla plików DWG i DXF CadCraft; dla plików innych aplikacji nie jest jeszcze zbudowane.
- **Cofanie między oknami:** CadCraft zgłasza każdy zakończony krok, ale Studio nie ma jeszcze jednego Cofnij dla wszystkich aplikacji; każda aplikacja cofa własne kroki.
- **Obiekty OLE z DWG** są zachowywane, ale nie są rysowane na miejscu.
- **Odczyt tabel stylów wydruku (pliki CTB)** z innych programów jest zbudowany, ale nie został sprawdzony na pliku z innego programu.
- **Połącz swoją AI:** jednokliknięciowe połączenie w Studio, hostowany łącznik dla AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są w tym wydaniu obiecane.

Poprzednią wersję opisuje [Co nowego w 0.7](topic:whats-new-0-7).
