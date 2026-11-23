---
title: Co nowego w 0.9 (wcześniej)
summary: Kreskowania, które podążają za swoją granicą, grupy warstw, piętra jedno nad drugim, inteligentne ściany 2D z drzwiami i oknami, style tekstu i edytor tekstu sformatowanego, pływający wiersz poleceń, przyciąganie do siatki, dziesięć sposobów rysowania łuku oraz panel Dokumenty.
keywords: co nowego 0.9, wcześniejsze wydanie, co nowego, 0.9, informacje o wydaniu, dziennik zmian, kreskowanie, kreskowanie asocjacyjne, hatchedit, plik pat, plik wzorca, grupy warstw, laygroup, piętra, piętra jedno nad drugim, floorlayers, inteligentne ściany, ściana, drzwi, okno, narzędzia ścian, styl tekstu, styl, edytor mtext, tekst akapitowy, formatowanie, pływający wiersz poleceń, wiersz poleceń, górny obszar, zwarty, przyciąganie do siatki, grid snap, f9, łuk, panel dokumentów, zameldowanie, kroki stalowe UK, draw.io, tekst tajski, dxf r12, co nowego, what's new, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, autouzupełnianie, duch, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, znaczniki, redline, scalanie, git, fossil, access, rysowanie bez wzroku, czytnik ekranu, limity, azymuty, aunits, shx, diagram, ole, historia, porównaj, słownie, właściwości, stopy i cale, rozciąganie, języki, urządzenia wejściowe, problemy, na żywo, asystenci
from: 3451e64c
---

To zmieniło się w CadCraft 0.9 w porównaniu z 0.8.1. CadCraft to aplikacja 2D i 3D do rysowania w CadCraft Studio 0.9 i jego ośmiu aplikacjach. Wersja 0.9 kończy rysowanie planów, dodaje style tekstu i prawdziwy edytor tekstu oraz daje więcej miejsca na ekranie.

## Nowe

### Rysowanie planów

- **Kreskowania, które podążają za swoją granicą.** {{cmd:HATCH}} łączy się z tym, co je ogranicza. Przesuń, obróć lub skaluj granicę, a kreskowanie i jego wzorzec pójdą za nią; przekształć ją, a kreskowanie zostanie przeliczone. {{cmd:HATCHEDIT}} (`HE`) zmienia kreskowanie później i tworzy albo kończy połączenie. Zobacz [Kreskowanie i wypełnienia obszarów](topic:hatch).
- **Pliki wzorców kreskowania.** Na pytanie {{cmd:HATCH}} `Wskaż punkt wewnętrzny` wpisz `F` (Plik wzorca) i wybierz plik `.pat`. Wypróbowano tylko pliki zapisane w zwykłym formacie.
- **Grupy warstw.** W {{ui:Narzędziach}} w panelu {{ui:Warstwy}}: {{ui:Nowa grupa}}, {{ui:Dodaj gotowe grupy}}, {{ui:Grupuj według nazwy}} i {{ui:Znajdź warstwę}}; albo wpisz {{cmd:LAYGROUP}} (`LG`). Zobacz [Porządkowanie rysunku warstwami](topic:layers#group-layers).
- **Piętra jedno nad drugim.** {{cmd:FLOORS}} (`FLR`) albo {{ui:Piętra…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}. Okienko na arkuszu może pokazywać jedno piętro w {{ui:Pokazane piętro}} we Właściwościach. {{cmd:FLOORLAYERS}} zamienia piętra w warstwy dla pliku przekazywanego komuś innemu. Zobacz [Piętra w jednym rysunku](topic:floors).
- **Inteligentne ściany, drzwi i okna 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Narożniki, połączenia T i przecięcia są wyliczane za ciebie. Ściany zachowują zapis tego, jak się łączą, a Właściwości dostają {{ui:Zabroń połączenia na początku}} / {{ui:na końcu}}, {{ui:Linię osi}} i edytowalną {{ui:Długość}}. Zobacz [Rysuj ściany, drzwi i okna 2D](topic:walls-2d).
- **Narzędzie ścian dla ścian planu.** Wpisz {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i resztę. Nie mają jeszcze przycisków na pasku narzędzi. Zobacz [Kształty ścian, cięcia, odsunięcia i blokady dla ścian 2D](topic:wall-tools-2d).

### Tekst

- **Style tekstu.** {{cmd:STYLE}} (`ST`) albo {{ui:Styl tekstu}} na pasku {{ui:Rysuj}}: nazwane style z czcionką, wysokością, współczynnikiem szerokości i pochyleniem. Zobacz [Ustaw czcionkę i rozmiar tekstu stylami tekstu](topic:text-styles).
- **Edytor tekstu akapitowego z formatowaniem.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} albo podwójne kliknięcie tekstu otwiera okno z czcionką, rozmiarem, pogrubieniem, kursywą, podkreśleniem, przekreśleniem, kolorem, wyrównaniem oraz znakami stopnia, plus-minus i średnicy, a także {{ui:OK}} i {{ui:Anuluj}}. Zobacz [Formatowanie tekstu akapitowego](topic:format-paragraph-text).
- **Diagram z XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) czyta też wklejony XML draw.io. Zobacz [Rysowanie diagramu z tekstu](topic:text-to-diagram).
- **Tekst tajski w wydruku PDF.** Wcześniej drukował się jako znaki zapytania.

### Więcej miejsca i pomoce do rysowania

- **Pływający, cieńszy wiersz poleceń i zwarty górny obszar.** Przeciągnij uchwyt wiersza poleceń, aby go oderwać, przeciągnij jego górną krawędź, aby mieć mniej wierszy; {{key:F2}} otwiera historię. {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Wiersz poleceń}} oraz wybory górnego obszaru mają te same ustawienia. Zobacz [Ustawienia](topic:settings#command-line).
- **Menu przyciągania do obiektów.** Kliknij prawym przyciskiem {{ui:Przyciąganie}} w pasku stanu albo wpisz {{cmd:OSNAP}}.
- **Przyciąganie do siatki.** Przycisk {{ui:Przyciąganie do siatki}} w pasku stanu albo {{key:F9}}: wskazane punkty idą do najbliższego punktu siatki, gdy żadne przyciąganie do obiektu nie złapało punktu.
- **Łuk na dziesięć sposobów i Kontynuuj.** {{ui:Łuk}} na pasku {{ui:Rysuj}} albo {{cmd:ARC}}: trzy punkty, rodzina Początek/Środek/Koniec i rodzina Środek/Początek/Koniec, oraz Kontynuuj (naciśnij {{key:Enter}} w punkcie początkowym) od ostatniej linii, łuku albo polilinii.
- **Panel Dokumenty.** {{cmd:DOCUMENTS}} (`DOCS`) albo {{ui:Dokumenty…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}: wersja, stan i zameldowanie dla każdego rysunku w folderze projektu. Otwiera się jako wyśrodkowane okno dialogowe. Zobacz [Dokumenty](topic:documents).

### Pliki

- **Rozmiary stalowe UK.** 976 przekrojów w panelu Standardowy, wpisywane tak, jak na rysunkach (na przykład `305x165x40 UB`).
- **Pakiety południowoafrykańskie** (praktyka rysunkowa i przepisy budowlane) jako pakiety dodatku Przepisy budowlane. Liczby nie zostały zweryfikowane.
- **Dodatki do CadCraft,** dodawane na żądanie i domyślnie wyłączone: projektowanie oświetlenia wnętrz, projektowanie układów chipów (HDL do layoutu), rzeźbienie frezem, symulacja obwodów, koła zębate łańcuchów rolkowych i pakiety krajowych przepisów budowlanych.

## Naprawione

- Przesunięcie, obrót lub skalowanie kreskowania zostawiało za sobą jego wzorzec.
- {{cmd:GRIDMOVE}} przenosił całą ścianę planu, która zaczyna się tylko na linii siatki. Ściana jest teraz oceniana po swoich końcach.
- Siatka pokazywała się tylko wewnątrz limitów rysunku, nawet przy wyłączonych limitach.
- Lista bloków w panelu bocznym przewija się, a nazwa, która nie jest blokiem, wypisuje bloki zaczynające się od niej („Czy chodziło o”).
- Pliki DXF R12, które AutoCAD odrzucał („Nieznana grupa 1001 dla tabeli”), otwierają się teraz.
- Bardzo duże pliki (około 70 000 obiektów i więcej) nie otwierały się z błędem „Maximum call stack size exceeded”.
- Pliki DWG z AutoCAD 2018 i nowszych z wysoką wersją konserwacji nie otwierały się z błędem „bad BITLONG code 11”.
- W oknie tekstu akapitowego nowy rozmiar wpisany dla zaznaczonej części zachowuje zaznaczenie.

## We wszystkich aplikacjach

Podpowiedzi Bootstrap przy każdej kontrolce, która ma wskazówkę, wskazówka startowa, którą można zamknąć, karty, które przewijają się, gdy się nie mieszczą, oraz tytuł karty przeglądarki, który podąża za otwartym rysunkiem (`<rysunek> - CadCraft | CadCraft`). {{ui:Ustawienia}} › {{ui:Układ}} to teraz lista rozwijana z dwuwierszowymi wyborami. Lista języków w {{ui:Ustawieniach}} jest dłuższa niż w 0.8. Współedycja na żywo, kolekcje Biblioteki oraz jednostki wagi i temperatury są opisane w notatkach Studio.

## Uczciwe ograniczenia

- Tekst akapitowy nie ma punktorów ani list numerowanych, linijki tabulatorów ani wyrównania do obu marginesów. Wydrukowane PDF-y składają tekst czcionką Helvetica.
- Ściany planu są proste, więc łuk jest rysowany jako krótkie ściany. Społeczna ręczna weryfikacja narzędzia ścian jest w toku.
- Grupy warstw nie są zapisywane w formacie AutoCAD, więc AutoCAD pokazuje płaską listę. Inne programy pokazują wszystkie piętra razem, chyba że uruchomisz {{cmd:FLOORLAYERS}}.
- Panel Dokumenty nie został wypróbowany przez dwie osoby na prawdziwym udziale sieciowym. Rzeźbienie frezem nie działało na żadnej prawdziwej maszynie. Szacunek oświetlenia został sprawdzony na śledzeniu fotonów, a nie w innym programie. Dodatki inżynierskie są pomocami do sprawdzania, a nie zamiennikiem przeglądu przez inżyniera.
- Języki inne niż angielski to wstępne tłumaczenia maszynowe, a niektóre z nowych słów są tylko po angielsku.

## Wcześniej: 0.8 i 0.8.1

To zmieniło się w CadCraft 0.8 i 0.8.1 w porównaniu z 0.7. Wersja 0.8 (1 listopada 2026) dodaje pomocników rysowania, które pracują z twoim własnym rysunkiem, na podstawie reguł na twoim komputerze i bez modelu, a 0.8.1 (2 listopada 2026) naprawia błędy zgłoszone po niej.

### Nowe

**Rysunek, który dokańcza twoją myśl**

- **Duch pokazuje, co będzie dalej.** Gdy nie działa żadne polecenie, szara przerywana zjawa pokazuje, co mówią wzorce twojego rysunku: następny słupek przy tym samym rozstawie, następny stopień schodów, brakującą ścianę pokoju. Naciśnij {{key:Tab}}, aby narysować go jako jeden krok cofnięcia, albo {{key:Esc}}, aby go odrzucić. Patrzy tylko na najnowsze obiekty, więc pozostaje płynny na dużym rysunku. Wyłącz go w {{ui:Ustawieniach}} › {{ui:CadCraft}} albo poleceniem {{cmd:AUTOCOMPLETE}} `Off`.
- **Następny punkt podczas rysowania linii.** W trakcie {{cmd:LINE}} albo {{cmd:PLINE}} zjawa to następny punkt: następny stopień schodów, czwarty narożnik prostokąta albo punkt, który go zamyka. Przysuń kursor blisko i naciśnij {{key:Tab}}, jakbyś kliknął tam.
- **Szkice piórem stają się dokładną geometrią.** {{cmd:SKETCHFIX}}: rysuj szybkie pociągnięcia piórem, myszą albo palcem, a każde staje się czystą linią, okręgiem, łukiem, prostokątem albo polilinią, przyciągniętą do tego, co już narysowano. Zobacz [Szkicuj piórem i uzyskaj dokładną geometrię](topic:sketch-with-a-pen).
- **Zdjęcie szkicu staje się rysunkiem.** {{cmd:PHOTOSKETCH}} (`PSK`) znajduje papier na zdjęciu, prostuje perspektywę, nadaje rozmiar papieru i skalę, które podasz, i przenosi linie pióra na warstwę dla każdego koloru pióra. Napisy nie są przenoszone.
- **Wymiaruj według reguł.** {{cmd:AUTODIM}} (`ADIM`) tworzy łańcuchy wymiarów wzdłuż wybranych przez ciebie boków, wymiar ogólny, szerokości otworów, średnice otworów oraz, z `Grid`, rozstaw linii siatki. Nigdy nie powtarza wymiaru, który już jest.
- **Przesuń linię siatki, a zestaw podąży.** {{cmd:GRIDMOVE}} (`GM`): ściany kończące się na linii siatki rozciągają się razem z nią, ściany wzdłuż niej, słupy, jej bańka i znacznik przesuwają się, a wymiary na niej mierzą nowy rozstaw. Jeden krok cofnięcia.

**Arkusze, detale i znaczniki**

- **Arkusze, które same się układają.** {{cmd:AUTOSHEET}} bierze twoje nazwane widoki (albo osobne części modelu), wybiera format papieru i standardową skalę oraz umieszcza widoki na nowych arkuszach z blokiem tytułowym i podpisem nazwy i skali. Wszystko pozostaje edytowalne. Zobacz [Układ arkuszy za ciebie](topic:lay-out-sheets-for-me).
- **Detale twojej firmy, proponowane podczas rysowania.** {{cmd:DETAILS}} (`DET`) przechowuje twoje własne bloki detali. Gdy to, co zaznaczysz, pasuje do jednego z nich po słowach na jego warstwach, nazwach bloków i notatkach, pasek stanu o tym mówi; wybierz go i umieść. {{cmd:DETAILS}} › Udostępnij umieszcza twoją listę w folderze Dokumenty i przynosi to, co dodał twój zespół. Ustawienia wyłączają propozycje.
- **Znaczniki na blokach.** {{cmd:TAGS}} definiuje znacznik (jego rodzaj, dozwolone wartości, bloki, do których się stosuje), ustawia go na zaznaczonych odwołaniach do bloków i wypisuje je jako zestawienie, które możesz zapisać jako CSV. Definicje są zachowywane w DWG. Zobacz [Znaczniki](topic:tags).
- **Limity rysunku.** {{cmd:LIMITS}} ustawia prostokąt dla rysunku: siatka go wypełnia, a zoom Wszystko go pokazuje. Limity są widoczne jako kontur i są zapisywane w DWG i DXF, razem z limitami papieru. Zobacz [Ustaw limity rysunku](topic:drawing-limits).

**Praca z innymi ludźmi i innymi programami**

- **Zamień uwagi w rewizję.** {{cmd:REDLINE}} czyta paczkę, którą zapisuje MarkupCraft, i wypisuje każdą zmianę. Przyjmij albo odrzuć każdą z notatką; przyjęte dostają chmurę rewizji i dziennik rewizji w jednym kroku cofnięcia, a ty zapisujesz plik odpowiedzi, który zamyka uwagi w MarkupCraft. Zobacz [Zamień uwagi w rewizję](topic:redline-to-revision).
- **Rysunki, które git i Fossil potrafią scalać.** Przy włączonych {{ui:Pliki przyjazne scalaniu}} w {{ui:Ustawieniach}} › {{ui:CadCraft}} każdy obiekt dostaje klucz, który się nie zmienia (pliki są około 10 procent większe). `cadcraft merge base ours theirs` scala edycje dwóch osób jednego pliku DWG lub DXF obiekt po obiekcie i zgłasza tylko miejsca, w których dwie osoby zmieniły to samo. Zobacz [Scal edycje dwóch osób w jednym rysunku](topic:merge-drawings).
- **Co się zmieniło, słownie.** W {{ui:Historii}} porównanie daje prostą listę: gdzie coś się zmieniło, jak duże są miejsca, co dodano, usunięto lub zmieniono oraz edytowany tekst. Zobacz [Powiedz słownie, co się zmieniło](topic:changes-in-words).
- **Azymuty i kąty.** Wpisz kierunek jako azymut geodety, na przykład N45°23'30"E, albo w stopniach, minutach i sekundach, wszędzie tam, gdzie pytany jest kąt; AUNITS ustawia, jak kąty są pokazywane. Zobacz [Wpisywanie i pokazywanie azymutów i kątów](topic:bearings-and-angles).
- **Twoje własne czcionki SHX.** Podaj CadCraft folder czcionek SHX, a style tekstu, które je nazywają, są rysowane w nich, na ekranie i w wydrukach. Zobacz [Rysuj tekst we własnych czcionkach SHX](topic:shx-fonts).
- **Diagram z tekstu.** {{cmd:DIAGRAM}} czyta diagram przepływu Mermaid, diagram komponentów PlantUML, D2 albo listę od-do i rysuje bloki i łączniki, które możesz edytować. Zobacz [Rysowanie diagramu z tekstu](topic:text-to-diagram).
- **Obiekty OLE w DWG.** {{cmd:OLELIST}} wypisuje obiekty OLE, które niesie DWG, a CadCraft nie potrafi ich umieścić sam, i umieszcza kopię obrazu tam, gdzie powiesz. Zobacz [Obrazy](topic:pictures#objects-from-other-programs-ole).
- **Twoje obliczenia zostają z rysunkiem.** Arkusze obliczeń i uzasadnienia projektowe są zachowywane w DWG razem z tabelą klas.

**Rysowanie bez wzroku**

- Włącz {{ui:Rysowanie bez wzroku}} w {{ui:Ustawieniach}} (albo wpisz {{cmd:ACCESS}} i odpowiedz `On`). CadCraft mówi każde polecenie i wynik przez czytnik ekranu, opisuje rysunek i to, co jest blisko kursora, pozwala przesuwać kursor i wskazywać punkty klawiaturą oraz odtwarza dźwięk dla każdego przyciągnięcia i uchwytu. Tam, gdzie przeglądarka rozpoznaje mowę na twoim komputerze, polecenia można wypowiadać. Zobacz [Rysowanie bez wzroku](topic:draft-without-sight).

**We wszystkich aplikacjach**

- **Języki.** 54 języki; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili, uzbecki). Języki poza angielskim są wstępnymi tłumaczeniami maszynowymi, dopóki nie przeczyta ich native speaker.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler do gier i sterowanie MIDI.
- **Wiersze paska narzędzi i siatka właściwości.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje Zawijaj, 2 wiersze albo 1 wiersz w pozostałych aplikacjach. CadCraft ma własne ustawienie w {{ui:Ustawieniach}} › {{ui:CadCraft}} (zobacz [Wiersze paska narzędzi](topic:settings#toolbar-rows)). Wspólna siatka właściwości jest w trzech innych aplikacjach, nie w CadCraft.
- **Problemy, Na żywo i dodatki.** Wspólny panel Problemy, który ostrzega we wszystkich aplikacjach, widok Na żywo, pokazujący, kto gdzie jest w CadCraft Studio (zobacz [Pracuj nad jednym rysunkiem razem](topic:work-live)), oraz lista dodatków.
- **Połącz swoją AI.** Jedno połączenie z CadCraft Studio ze wszystkimi ośmioma aplikacjami, z poziomem tylko do odczytu, sugerowania albo edycji dla każdej aplikacji oraz dziennikiem prostymi słowami, co zrobił asystent. CadCraft nie ma własnej AI, a Zapytaj we wszystkich aplikacjach używa AI, którą podłączysz.

### Naprawione w 0.8.1

- **Właściwości pokazywały 150 zamiast 12'-6"** w rysunkach w stopach i calach. Pola, które aplikacja czyta sama, znów zachowują swój tekst.
- **Pliki DWG, których sekcja klas była odczytywana jako zły typ** (GitHub cadcraft#5), otwierają się teraz poprawnie.
- **Krzyżyk nie pokazuje się już za wyskakującymi oknami.**
- **Studio i pakowane wydania mogą zmienić język w czasie działania.** Wcześniej były tylko po angielsku. Nie przetestowano jeszcze na każdej platformie: daj znać, jeśli język się nie zmienia.
- **Tablety w pionie** oddają wolną wysokość siatki płótnu, a tryb arkuszy startuje przy 760 px lub mniej.
- **STRETCH z oknem przecięcia i LIMITS** zostały zgłoszone w Studio 0.8.0 i w wersji 0.8 dla przeglądarki były już poprawne; instalator zgłaszającego był starszy. Studio 0.8.1 je zawiera.

### Jeszcze nie w tej wersji

- **0.8 i 0.8.1 nie są podpisane cyfrowo.** Windows może ostrzec (wybierz {{ui:Więcej informacji}}, a potem {{ui:Uruchom mimo to}}); na Macu kliknij prawym przyciskiem CadCraft Studio i wybierz {{ui:Otwórz}}. Wydania sklepowe są wstrzymane, a wersja dla iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Szkice piórem i zdjęcia szkiców** były wypróbowane tylko na zmyślonych zdjęciach i myszą, jeszcze nie prawdziwym piórem, ekranem dotykowym ani ręcznym szkicem na papierze.
- **Rysowanie bez wzroku** zostało przetestowane automatycznymi sprawdzeniami, jeszcze nie z czytnikiem ekranu ani niewidomym testerem.
- **Udostępnianie detali** nie miało sprawdzenia przez dwie osoby, a folder Team Cloud Plan jako folder Dokumenty nie jest zbudowany.
- **Scalanie** działa dla plików DWG i DXF CadCraft; takiego samego dla plików innych aplikacji nie zbudowano.
- **Cofanie między oknami:** CadCraft zgłasza każdy zakończony krok, ale Studio nie ma jeszcze jednego Cofnij dla wszystkich aplikacji; każda aplikacja cofa własne kroki.
- **Obiekty OLE w DWG** są zachowywane, ale nie są rysowane na miejscu.
- **Odczyt tabel stylów wydruku (pliki CTB)** z innych programów jest zbudowany, ale nie sprawdzono go na pliku z innego programu.
- **Połącz swoją AI:** jednoklikowe połączenie w Studio, hostowany łącznik dla AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są w tym wydaniu obiecane.

Dla wersji wcześniejszej zobacz [Co nowego w 0.7](topic:whats-new-0-7).
