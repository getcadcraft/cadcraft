---
title: Mapa poleceń: co wpisać
summary: Każde polecenie CadCraft wraz z krótkimi nazwami, od A do Z, wygenerowane z samego programu, oraz nawyki z innych programów do rysowania, które się różnią.
keywords: mapa poleceń, polecenia, aliasy, krótkie nazwy, przychodzę z, lista poleceń, co wpisać, usuń, przytnij, odpowiednik, różnice
from: 9426856f
---

CadCraft przyjmuje nazwy poleceń i krótkie nazwy, które ludzie znają z innych programów do rysowania: wpisz `L` dla linii, `TR` aby przyciąć, `E` aby usunąć. Dzięki temu dla większości z nich nie trzeba uczyć się żadnej tabeli tłumaczeń: nazwa, którą znasz, jest tutaj tą samą. Poniższa lista to każde polecenie CadCraft, wygenerowane z samego programu. {{key:Enter}} powtarza ostatnie polecenie; `HELP` w wierszu poleceń wypisuje tę samą listę.

Kilka poleceń nie jest takich samych albo nie jest jeszcze zbudowanych:

- **Save** pobiera kopię w przeglądarce ({{cmd:SAVE}}, {{cmd:SAVEAS}}); w CadCraft Studio zapisuje plik. Zobacz [Przychodzę z innego oprogramowania do rysowania](topic:coming-from).
- **PLOT** tworzy PDF (także PNG i SVG), z tabelą stylów wydruku; nie ma menedżera ustawień strony.
- **DIMSTYLE** i **PEDIT** są zbudowane; **PEDIT** nie ma opcji Edycja wierzchołka (robią to uchwyty).
- **TABLE** nie jest zbudowane; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} są.
- Własne polecenia procedury (AutoLISP `C:NAME`) pojawiają się po jej wczytaniu poleceniem {{cmd:APPLOAD}}; nie są tu wypisane.

## Wszystkie polecenia (402)

| Polecenie | Krótkie nazwy | Co robi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Obraca widok 3D lewym przyciskiem |
| `ACCESS` | `AX` | Włącza albo wyłącza rysowanie bez wzroku: wyniki czytane przez czytnik ekranu, kursor klawiatury na rysunku, dźwięki przyciągania i polecenia mówione. |
| `ALIASEDIT` |  | Edytuje skróty poleceń w jednym pliku tekstowym (znany format L, *LINE) |
| `ALIGN` | `AL` | Przesuwa i obraca obiekty tak, aby punkty źródłowe trafiły w punkty docelowe (jedna, dwie albo trzy pary), i w razie potrzeby skaluje je |
| `ALIGNPANEL` | `ALP` | Otwiera panel Wyrównaj i rozmieść |
| `ALIGNTO` |  | Wyrównuje lewe, środkowe, prawe, górne, środkowe albo dolne krawędzie zaznaczonych obiektów, względem zaznaczenia, pierwszego albo ostatniego wskazanego obiektu, albo punktu |
| `ANNOALLVISIBLE` | `ANNOALL` | Pokazuje obiekty adnotacyjne przy każdej skali albo tylko tam, gdzie skala okienka (albo rysunku) jest na ich liście |
| `ANNOSCALE` | `CANNOSCALE` | Ustawia skalę adnotacji rysunku: adnotacyjne teksty i wymiary są przeskalowywane, by drukować się w tym samym rozmiarze |
| `APPLOAD` | `AP` | Wczytuje aplikacje: procedury LISP (.lsp) i ich pliki dialogów (.dcl); Zestaw startowy (AP) |
| `ARC` | `A` | Łuk: 3 punkty, Początek/Środek/Koniec, Początek/Środek/Kąt, Początek/Środek/Długość, Początek/Koniec/Kąt, Początek/Koniec/Kierunek, Początek/Koniec/Promień, Środek/Początek/Koniec, Środek/Początek/Kąt, Środek/Początek/Długość, Kontynuuj |
| `AREA` | `AA` | Pole i obwód po punktach albo obiektu; Dodaj i Odejmij utrzymują sumę bieżącą (AA) |
| `ARRAY` | `AR` | Kopie w wierszach i kolumnach albo wokół środka (AR) |
| `ARRAYASSOCIATIVITY` |  | Ustala, czy polecenia ARRAY tworzą macierze, które pozostają edytowalne (1), czy zwykłe kopie (0) |
| `ARRAYCLOSE` |  | Kończy edycję obiektów źródłowych macierzy |
| `ARRAYEDIT` |  | Zmienia macierz utworzoną opcją Asocjacyjne: liczby, rozstaw, obiekty źródłowe, jeden element |
| `ARRAYPATH` |  | Kopie obiektów wzdłuż linii, łuku, polilinii albo innej krzywej |
| `ARRAYPOLAR` |  | Kopie wokół punktu środkowego |
| `ARRAYRECT` |  | Kopie w wierszach i kolumnach |
| `ASBUILT` | `ASB` | ASBUILT odczytuje punkty powykonawcze, które zmierzyła ekipa (CSV / TXT, tak jak zapisuje EXPORTPOINTS), i porównuje je z punktami rysunku: w tolerancji albo poza nią, niezmierzone, dodatkowe. Oznacza je na warstwie AS-BUILT i pobiera raport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiuje atrybut (znacznik, o wartość którego blok pyta), do umieszczenia w bloku (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edytuje wartości atrybutów odwołania do bloku w wierszu poleceń, jedna po drugiej (Enter zachowuje wartość) |
| `ATTSYNC` |  | Dopasowuje odwołania bloku do jego definicji atrybutów: nowe dodane z domyślnymi wartościami, usunięte — skasowane, położenia i tekst zresetowane; wartości zachowane |
| `AUDIT` |  | Sprawdza otwarty rysunek pod kątem uszkodzeń: liczby niebędące skończonymi, obiekty bez rozmiaru, brakujące warstwy, bloki, style i typy linii, bloki zawierające same siebie, wspólne identyfikatory, uszkodzone wymiary i kreskowania. Wypisuje, co znalazł, według rodzaju, i pyta przed naprawą; naprawa to jeden krok cofnięcia. |
| `AUNITS` | `ANGUNITS` | Jak kąty są pokazywane i wpisywane: stopnie dziesiętne, stopnie-minuty-sekundy albo azymuty jak N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autouzupełnianie rysunku włączone albo wyłączone, albo wypisuje, co teraz sugerują wzorce rysunku. |
| `AUTOCONSTRAIN` |  | Dodaje więzy współpadania, poziome i pionowe tam, gdzie geometria jest już blisko |
| `AUTODIM` | `ADIM` | Wymiarowanie według reguł: wymiar gabarytowy, łańcuchy wzdłuż boków, otwory, średnice otworów i rozstaw siatki, bez powtarzania tego, co już wymiarowano. |
| `AUTOSHEET` | `ASH` | Układa arkusze samodzielnie: dobiera papier i standardowe skale i umieszcza każdy widok z podpisem i blokiem tytułowym. |
| `BATTMAN` |  | Menedżer atrybutów bloku: kolejność, znaczniki, podpowiedzi, wartości domyślne i tryby atrybutów bloku, a potem aktualizacja jego odwołań |
| `BCLOSE` |  | Zamyka edytor bloków: zapisuje blok albo odrzuca zmiany |
| `BCONVERT` |  | BCONVERT znajduje powtarzającą się geometrię i zamienia ją na odwołania do bloku. Zaznacz obiekty, które się powtarzają: każdy inny zestaw obiektów w otwartej przestrzeni o tej samej geometrii, przesunięty i obrócony o dowolny kąt, zostaje znaleziony, a z włączonymi Lustrzane i Skalowane także odbicia lustrzane i kopie w innym rozmiarze. Nadaj nowemu blokowi nazwę i punkt bazowy; zaznaczenie i każda kopia stają się odwołaniami do niego, każde z własnym obrotem i skalą. Albo wybierz Blok i nazwij istniejący blok, by znaleźć luźne kopie jego obiektów. Kopia musi mieć tę samą warstwę, kolor, typ linii i grubość linii, chyba że Właściwości są ustawione na Ignoruj. Obiekty na zablokowanych warstwach zostają nietknięte. Jeden krok cofnięcia. |
| `BEDIT` | `BE` | Edytor bloków: edytuje obiekty i atrybuty bloku; BCLOSE zapisuje (BE) |
| `BLEND` |  | BLEND: spline między końcami dwóch otwartych krzywych, wskazanych w pobliżu końców, aby je połączyć. CONtinuity: Tangent podąża za obiema kierunkami, Smooth także za tym, jak się wyginają. |
| `BLOCK` | `B`, `BMAKE` | Tworzy blok z obiektów (staną się jednym odwołaniem) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: każde odwołanie do jednego bloku staje się odwołaniem do innego, w tym samym miejscu, z tą samą skalą i obrotem. Wartości atrybutów, które mają oba bloki, są zachowane. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE pokazuje panel Bloki z kursorem w jego filtrze. Panel pokazuje obraz każdego bloku (najpierw te wstawione ostatnio), jako listę albo siatkę; kliknij obraz albo przeciągnij go na rysunek, aby umieścić blok poleceniem INSERT. W sekcji Biblioteki dodaj własny plik DWG lub DXF: jego bloki są wypisane z obrazami i kopiowane do tego rysunku, gdy umieścisz jeden. W CadCraft Studio można też dodać folder rysunków, a pliki i foldery są zapamiętywane. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolumny, grupowanie, sortowanie, tytuł, sumy i uwagi tabeli zestawienia materiałów |
| `BOMEXPORT` |  | Zapisuje tabelę zestawienia materiałów jako plik .csv |
| `BOMTABLE` | `BOM` | Żywa tabela zestawienia materiałów jednej strefy albo całego rysunku |
| `BOMUPDATE` |  | Aktualizuje teraz każdą tabelę zestawienia materiałów, także zamrożone |
| `BOMZONE` | `BZONE` | Nazwany obszar rysunku dla zestawienia materiałów: dwa narożniki, wielokąt albo kontur zamkniętego obiektu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): wskaż punkt wewnątrz zamkniętego obszaru i dostań zamkniętą polilinię wokół niego. Łuki pozostają łukami. Wyspy obrysowuje także obszary w jego wnętrzu. |
| `BOX` |  | Pudełko: dwa narożniki i wysokość (3D) |
| `BPARAMETER` | `BPARAM` | Jeszcze nie zbudowane: dodawanie parametru (na przykład Widoczność) do bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametry bloku: nazwane parametry z formułami i kilka parametrów widoczności w jednym bloku. Działa w edytorze bloków (przypisz zaznaczone obiekty do stanu) i na zaznaczonym odwołaniu (jego własne wartości i stany). |
| `BREAK` | `BR` | Przerywa linię, łuk, okrąg albo polilinię między dwoma punktami (BR) |
| `BREAKATPOINT` |  | Dzieli linię, łuk albo polilinię na dwie w punkcie |
| `BREAKLINE` |  | Rysuje linię z symbolem przerwania; jej rozmiar i wystawanie poza końce są zapamiętywane. |
| `BREPLACE` |  | BREPLACE zamienia jeden blok na inny. Zaznaczone: wskaż odwołania do bloków i nazwij blok do użycia zamiast nich. Wszystkie: nazwij blok i jego zamiennik, a każde odwołanie w każdej przestrzeni i wewnątrz innych bloków się zmienia. Odwołanie zachowuje swoje miejsce, skalę, obrót i warstwę oraz wartości atrybutów, które mają oba bloki; wartości, których nowy blok nie ma miejsca, są usuwane i wymieniane. |
| `BSEARCH` |  | BSEARCH znajduje bloki. Nazwa: część nazwy bloku albo wzorzec z * i ?. Atrybut: wartość (albo TAG=wartość) przechowywana w atrybutach odwołania. Geometria: zaznacz obiekty albo jedno odwołanie do bloku, a bloki, których kształt jest podobny co najmniej w 85%, są wypisane, najlepsze pierwsze; rozmiar, obrót i odbicie się nie liczą. Odwołania znalezione w otwartej przestrzeni są zaznaczane, gotowe na następne polecenie. |
| `BURST` |  | Rozbija odwołania do bloków i zachowuje to, co mówią ich atrybuty: każda wartość staje się tekstem na warstwie atrybutu. |
| `BVHIDE` | `BVH` | W edytorze bloków: ukrywa obiekty w bieżącym stanie widoczności. |
| `BVSHOW` | `BVSH` | W edytorze bloków: pokazuje obiekty, które bieżący stan widoczności ukrywa (pokazywane wyblakłe, by je wskazać). |
| `BVSTATE` | `BVS` | W edytorze bloków, dla bloku ze stanami widoczności: przełącza na stan albo dodaje, przemianowuje lub usuwa jeden. |
| `CAL` |  | Oblicza długość albo liczbę: + − * / i nawiasy, wpisane w dowolnym miejscu |
| `CENTERLINE` | `CL` | Linia osi między dwiema liniami: w połowie między nimi, albo wzdłuż dwusiecznej, gdy się spotykają (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Znak środka: krzyż w środku okręgu albo łuku, z liniami osi nieco poza nim (CM) |
| `CHAMFER` | `CHA` | Fazuje narożnik między dwiema liniami (D dwie odległości, A długość i kąt, P każdy narożnik polilinii) |
| `CHSPACE` |  | CHSPACE: przenosi obiekty między arkuszem a modelem przez okienko. Są skalowane i obracane, tak aby wyglądały tak samo z drugiej strony. Na arkuszu idą do modelu; gdy pracujesz przez okienko (MSPACE), trafiają na arkusz. |
| `CIRCLE` | `C` | Środek i promień, średnica, 2 albo 3 punkty |
| `CLASS` |  | Umieszcza zaznaczone obiekty w klasie, a bez zaznaczenia ustawia aktywną klasę (? je wypisuje) |
| `CLASSES` | `CLS` | Panel Klasy: klasy porządkują obiekty ponad warstwami; pokazuj, ukrywaj i stylizuj je oraz nadpisuj w każdym okienku (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dokuje albo oddziela wiersz poleceń, zamienia go w jeden wiersz, ustawia liczbę wierszy historii albo otwiera historię (F2) |
| `COMPARESETTINGS` | `CMPSET` | Porównuje style wymiarów, style tekstu, warstwy, arkusze lub jednostki: dwa w tym rysunku albo ten rysunek z innym otwartym i kopiuje wartość. |
| `CONSTRAINTBAR` | `CBAR` | Pokazuje albo ukrywa paski więzów (Showall / Hideall, albo dla każdego obiektu) |
| `COPY` | `CO`, `CP` | Kopiuje obiekty tyle razy, ile klikniesz |
| `COPYBASE` |  | Kopiuje obiekty do schowka z punktem bazowym, który wskażesz |
| `COPYCLIP` |  | Kopiuje obiekty do schowka (Ctrl+C); PASTECLIP je umieszcza |
| `COUNT` | `BCOUNT` | Liczy odwołania do bloków: wskaż jedno, aby zaznaczyć i policzyć każde odwołanie jego bloku |
| `COUNTTABLE` |  | Umieszcza tabelę liczby bloków |
| `CREDITS` |  | Umieszcza autorstwo Biblioteki w rysunku jako tabelę. Uruchom ponownie, aby zaktualizować tabelę z elementów rysunku w tej chwili. |
| `CURSORSIZE` |  | Rozmiar krzyżyka: 100 rozciąga go od krawędzi do krawędzi rysunku (Ustawienia › Kursor › Pełny ekran) |
| `CUTCLIP` |  | Wycina obiekty do schowka (Ctrl+X): kopiuje, a potem usuwa |
| `CYLINDER` | `CYL` | Walec: środek, promień i wysokość (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Wypisuje bloki, ich atrybuty i właściwości obiektów jako tabelę w rysunku albo plik CSV |
| `DATALINK` | `DL` | Tabela z pliku CSV, która zapamiętuje plik, aby można go było ponownie odczytać |
| `DATALINKUPDATE` | `DLU` | Odczytuje ponownie plik połączenia danych i uzupełnia jego tabele |
| `DCALIGNED` | `DCALI` | Więz wymiarowy: prawdziwa odległość między punktami, punktem i linią albo dwiema liniami |
| `DCANGULAR` | `DCANG` | Więz wymiarowy: kąt między dwiema liniami albo łuku |
| `DCCONVERT` |  | Zamienia wymiary narysowane na geometrii, którą można więzić, na więzy wymiarowe |
| `DCDIAMETER` | `DCDIA` | Więz wymiarowy: średnica okręgu albo łuku |
| `DCDISPLAY` |  | Pokazuje albo ukrywa więzy wymiarowe na rysunku |
| `DCHORIZONTAL` | `DCHOR` | Więz wymiarowy: odległość pozioma |
| `DCLINEAR` | `DCLIN` | Więz wymiarowy: odległość pozioma lub pionowa, od miejsca, w którym go umieścisz |
| `DCRADIUS` | `DCRAD` | Więz wymiarowy: promień okręgu albo łuku |
| `DCVERTICAL` | `DCVER` | Więz wymiarowy: odległość pionowa |
| `DELBLOCKS` |  | Usuwa bloki: każde odwołanie (także zagnieżdżone, na każdym arkuszu) i definicje |
| `DELCONSTRAINT` | `DELCON` | Usuwa każdy więz (geometryczny i wymiarowy) z wybranych obiektów |
| `DELOPENING` |  | Wyjmuje drzwi albo okno ze ściany. |
| `DESCRIBE` | `DESC` | Mówi, co zawiera rysunek: ile obiektów, jakiego rodzaju, jak duży, co jest zaznaczone. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Czyści zaznaczenie (Esc) |
| `DETAILS` | `DET` | Własne detale twojej firmy, znajdowane do tego, co rysujesz: znajdź, dodaj blok, wypisz, usuń, włącz albo wyłącz propozycje. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Rysuje diagram z tekstu: diagram przepływu Mermaid, diagram komponentów PlantUML, D2, listę od-do albo XML draw.io, jako bloki i łączniki, które możesz edytować |
| `DIMALIGNED` | `DAL`, `DIMALI` | Prawdziwa odległość między dwoma punktami |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kąt między dwiema liniami, łuku albo przez trzy punkty |
| `DIMARC` | `DAR` | Wymiar długości łuku: odległość wzdłuż łuku, z symbolem łuku (DAR) |
| `DIMASZ` |  | Ustawienie wymiaru: rozmiar strzałki |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Wymiary ułożone od jednej linii bazowej |
| `DIMBREAK` | `DBREAK` | Przerywa linie wymiarowe i wynoszące tam, gdzie przecinają inne obiekty (Auto), między dwoma punktami (Ręcznie), albo usuwa przerwy |
| `DIMCONSTRAINT` | `DCON` | Więzy wymiarowe: liniowe, równoległe, kątowe, promieniowe, średnicowe, konwersja |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Łańcuch wymiarów, każdy od końca poprzedniego |
| `DIMDEC` |  | Ustawienie wymiaru: miejsca dziesiętne |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Średnica łuku albo okręgu |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Uwalnia wymiary od obiektów, z którymi były związane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Zmienia tekst wymiaru (Strona główna, Nowy tekst, Obróć) albo pochyla linie wynoszące (Ukośnie) |
| `DIMEXE` |  | Ustawienie wymiaru: wydłużenie poza linię wymiaru |
| `DIMEXO` |  | Ustawienie wymiaru: przesunięcie od początku |
| `DIMGAP` |  | Ustawienie wymiaru: odstęp wokół tekstu |
| `DIMINSPECT` |  | Wymiar kontrolny: ramka wokół wartości z etykietą i częstością sprawdzania części |
| `DIMJOGGED` | `DJO`, `JOG` | Wymiar promienia z załamaniem: promień rysowany od bliższego punktu, gdy środek jest daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje symbol załamania do linii wymiaru liniowego lub równoległego, by pokazać, że odległość nie jest rysowana w skali (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Odległość pozioma lub pionowa (R dla dowolnego kąta) |
| `DIMLUNIT` |  | Ustawienie wymiaru: format długości (1 naukowy, 2 dziesiętny, 3 inżynierski, 4 architektoniczny, 5 ułamkowy) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Wymiar współrzędnej: odległość X albo Y punktu od początku UCS, na odnośniku (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Nadpisuje zmienne wymiarów na zaznaczonych wymiarach bez zmiany ich stylu; Wyczyść przywraca styl (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Promień łuku albo okręgu |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Wiąże punkty wymiaru z obiektami, tak że podąża za nimi i mierzy od nowa, gdy się przesuną (DRE) |
| `DIMSCALE` |  | Ustawienie wymiaru: skala ogólna (rozmiary × ta wartość) |
| `DIMSPACE` |  | Równe odstępy między równoległymi wymiarami, mierzone od wymiaru bazowego (0 ustawia w linii, Auto to dwukrotność wysokości tekstu) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Tworzy, zmienia, ustawia jako bieżący, usuwa, stosuje i porównuje nazwane style wymiarów (okno; -DIMSTYLE w wierszu poleceń) |
| `DIMTEDIT` | `DIMTED` | Przesuwa tekst wymiaru w lewo, w prawo albo na środek linii wymiaru, albo go obraca |
| `DIMTEXTUNIT` | `DTU` | Tekst wymiaru w mm, cm, m lub km, albo w jednostkach własnych rysunku: zaznaczone wymiary, w przeciwnym razie nowe (DTU) |
| `DIMTXT` |  | Ustawienie wymiaru: wysokość tekstu |
| `DIST` | `DI` | Odległość i kąt między dwoma punktami |
| `DISTRIBUTE` |  | Rozmieszcza zaznaczone obiekty równomiernie, w bok albo w górę i w dół: równe kroki między środkami albo równe odstępy; dwa skrajne zostają |
| `DIVIDE` | `DIV` | DIVIDE (DIV): znaczniki, które dzielą linię, łuk, okrąg, polilinię, spline albo elipsę na równe części. Punkty albo, z Blokiem, blok przy każdym znaczniku. |
| `DOCUMENTS` | `DOCS` | Otwiera panel Dokumenty: zameldowanie i wymeldowanie rysunków, rewizje, stany wydania i zatwierdzenie dla folderu projektu |
| `DOOR` | `DR` | Wstawia drzwi w ścianę. Strona, którą klikniesz, to strona, w którą się otworzą. |
| `DRAWORDER` |  | Zmienia kolejność rysowania: przenosi obiekty na przód, wysyła na tył albo kładzie je nad lub pod innymi obiektami. |
| `DUPLICATE` | `DUP` | Kopia, która porusza się za wskaźnikiem: kliknij, aby ją postawić (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Właściwości rysunku: tytuł, autor i reszta, oraz własne pary nazwa i wartość |
| `DXFOUT` |  | Pobiera rysunek jako DXF R12 (Zapisz zachowuje własny format) |
| `EATTEDIT` | `DDATTE` | Edytuje atrybuty odwołania do bloku: wartości, tekst i właściwości, jeden atrybut naraz |
| `ELLIPSE` | `EL` | Końce osi i druga półoś |
| `ERASE` | `E`, `DELETE` | Usuwa obiekty |
| `EXPLODE` | `X` | Rozbija polilinie, bloki i wymiary na części |
| `EXPORT` | `EXP` | Zapisuje kopię rysunku w typie pliku, który zapisuje dodatek |
| `EXPORT3D` | `3DEXPORT` | Eksportuje model 3D: GLB, OBJ albo STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapisuje punkty i punkty wstawienia bloków z jednym atrybutem jako opis do pliku CSV albo TXT (PNEZD, PENZD albo XYZ) dla programów BIM i geodezyjnych |
| `EXTEND` | `EX` | Wydłuża obiekty, aż spotkają inne: kliknij w pobliżu końca, przeciągnij przez kilka albo Shift+kliknięcie, by przyciąć |
| `EXTRIM` |  | EXTRIM: wskaż jedną krawędź tnącą, a potem jedną stronę. Wszystko, co przecina krawędź, zostaje przycięte po tej stronie. Kawałki, które by zniknęły, pokazują się, gdy ruszasz wskaźnikiem. |
| `EXTRUDE` | `EXT` | Wyciąga zamknięte obiekty 2D w bryły (3D) |
| `FIELD` |  | Wstawia pole do tekstu, komórki tabeli albo atrybutu: datę, nazwę pliku, numer arkusza, właściwość rysunku, pole albo długość obiektu, albo formułę |
| `FILLET` | `F` | Zaokrągla albo ścina narożnik między dwoma obiektami (R promień, P każdy narożnik polilinii, M kilka) |
| `FIND` |  | Znajduje i zamienia słowa w tekście, wartościach atrybutów i tekście wymiarów |
| `FLATTEN` |  | Ustawia wysokość (Z) i grubość zaznaczonych obiektów na 0, także w blokach, których używają. |
| `FLOOR` |  | Wybiera piętro, na którym rysujesz, dodaje je albo przenosi lub kopiuje zaznaczenie na nie. |
| `FLOORLAYERS` |  | Zamienia piętra w warstwy o nazwach Piętro-Warstwa, dla pliku przekazywanego komuś bez pięter. |
| `FLOORS` | `FLR` | Otwiera panel Piętra: układaj piętra w jednej przestrzeni modelu. |
| `GCCOINCIDENT` |  | Więz: dwa punkty się spotykają albo punkt zostaje na obiekcie |
| `GCCOLLINEAR` |  | Więz: dwie linie pozostają na jednej prostej |
| `GCCONCENTRIC` |  | Więz: dwa okręgi albo łuki mają wspólny środek |
| `GCEQUAL` |  | Więz: dwie linie pozostają tej samej długości, albo dwa okręgi/łuki tego samego promienia |
| `GCFIX` |  | Więz: punkt albo cały obiekt pozostaje tam, gdzie jest |
| `GCHORIZONTAL` |  | Więz: linia (albo dwa punkty) pozostaje pozioma |
| `GCPARALLEL` |  | Więz: dwie linie pozostają równoległe |
| `GCPERPENDICULAR` |  | Więz: dwie linie pozostają pod kątem prostym |
| `GCSYMMETRIC` |  | Więz: dwa punkty, linie albo okręgi odbijają się względem linii |
| `GCTANGENT` |  | Więz: linia i okrąg albo łuk (albo dwa z nich) pozostają styczne |
| `GCVERTICAL` |  | Więz: linia (albo dwa punkty) pozostaje pionowa |
| `GDSIN` | `GDS` | Widok układu IC (plik strumienia GDSII): każda warstwa i typ danych jako warstwa rysunku, płasko, w jednostkach użytkownika; tylko do oglądania i mierzenia (próba laboratoryjna) |
| `GEOMCONSTRAINT` | `GCON` | Więzy geometryczne: poziomo, pionowo, równolegle, stycznie, współpadanie… |
| `GLBOUT` |  | Eksportuje model 3D jako GLB (glTF) |
| `GRADIENT` | `GD` | Wypełnia obszar gradientem jednego albo dwóch kolorów |
| `GRID` |  | Ustawia siatkę: odległość między liniami, co N-tą linię jako główną, WŁ. lub WYŁ., albo Auto, aby znów podążać za zoomem |
| `GRIDMOVE` | `GM` | Przesuwa linię siatki i przenosi to, co na niej wisi: ściany się rozciągają, słupy, bańki i znaczniki się przesuwają, wymiary podążają. |
| `GROUP` | `G` | GROUP (G): nadaje zaznaczonym obiektom wspólną nazwę. Kliknięcie jednego z nich zaznacza potem wszystkie. Enter przy nazwie tworzy grupę bez nazwy. |
| `GROUPEDIT` |  | GROUPEDIT: zmienia grupę. Wskaż jeden z jej obiektów albo podaj Nazwę, potem Dodaj lub Usuń obiekty, ZMIEŃ NAZWĘ, zmień jej Opis albo określ, czy kliknięcie zaznacza ją w całości. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Wypełnia obszar jednolitym wypełnieniem albo wzorcem: kliknij wewnątrz albo zaznacz zamknięte obiekty (H) |
| `HATCHEDIT` | `HE` | Zmienia kreskowanie: wzorzec, skalę, kąt, początek i jego połączenie z granicą. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponownie tworzy polilinie granicy z kreskowania, połączone z nim albo nie |
| `HATCHTOBACK` |  | Wysyła każde kreskowanie za wszystko inne. |
| `HELP` | `?` | Ta lista |
| `HIDEOBJECTS` |  | Ukrywa zaznaczone obiekty aż do UNISOLATEOBJECTS. Nie jest zapisywane z rysunkiem. |
| `HISTORY` | `HIST` | HISTORY (HIST): wersje tego rysunku — kopie zachowane na tym komputerze, gdy Studio go zapisuje, oraz wersje w chmurze — do otwarcia, przywrócenia i porównania z tym, co się zmieniło, pokazanym kolorem. |
| `ID` |  | Współrzędne punktu |
| `IMAGE` | `IM` | Podaje CadCraft pliki obrazów, których używa rysunek (DWG przechowuje tylko, gdzie były). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Umieszcza obraz (PNG albo JPEG) z pliku. |
| `IMAGECLIP` | `ICL` | Przycina obraz do prostokąta albo wielokąta, albo usuwa jego przycięcie. |
| `IMPORT` | `IMP` | Importuje plik typu, który czyta dodatek, do tego rysunku |
| `INSERT` | `I`, `DDINSERT` | Umieszcza blok (S skala, R obrót); F z pliku DWG/DXF, L z biblioteki |
| `INTERSECT` | `IN` | Zostawia tylko to, co bryły mają wspólnego (3D), albo obszar, który wspólnie zajmują regiony 2D |
| `ISODRAFT` |  | ISODRAFT: rysowanie izometryczne WŁ. albo WYŁ., albo prosto na płaszczyznę Left, Top lub Right. Gdy jest włączone, Orto i śledzenie biegunowe podążają za dwiema osiami płaszczyzny, siatka jest rysowana izometrycznie, a ELLIPSE ma Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Pokazuje tylko zaznaczone obiekty; wszystko inne w tej przestrzeni jest ukryte aż do UNISOLATEOBJECTS. Nie jest zapisywane z rysunkiem. |
| `ISOPLANE` |  | ISOPLANE: wybiera płaszczyznę izometryczną do rysowania: Left, Top lub Right. Enter przechodzi do następnej, tak jak F5 przy włączonym rysowaniu izometrycznym. |
| `JOIN` | `J` | Łączy linie, łuki i polilinie, które spotykają się końcami, w jedną polilinię; linie na jednej prostej w jedną linię (J) |
| `LASER` | `LASERCUT` | Otwiera panel Laser: wysyła warstwy do frezarki laserowej albo grawerki (kod G GRBL) |
| `LASSOMODE` |  | Naciśnięcie i przeciągnięcie rysuje lasso (1) albo prostokąt (0) |
| `LAYDEL` |  | Usuwa warstwę i każdy obiekt na niej (w modelu, na arkuszach i w blokach) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otwiera menedżer warstw: każda warstwa w jednej tabeli |
| `LAYERPANEL` |  | Pokazuje panel warstw |
| `LAYFRZ` |  | Zamraża warstwę każdego wskazanego obiektu |
| `LAYGROUP` | `LG` | Grupuje warstwy w foldery w panelu Warstwy. |
| `LAYISO` |  | Izoluje warstwy zaznaczonych obiektów (wszystkie inne wyłączone) |
| `LAYLOCKFADE` |  | Ustawia, jak bardzo wyblakają obiekty na zablokowanych warstwach i czy kliknięcie może je zaznaczyć. |
| `LAYMCUR` |  | Ustawia warstwę wskazanego obiektu jako bieżącą |
| `LAYMRG` |  | Scala warstwy: ich obiekty przechodzą na warstwę docelową, a scalone warstwy znikają |
| `LAYOFF` |  | Wyłącza warstwę każdego wskazanego obiektu |
| `LAYON` |  | Włącza każdą warstwę |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nowy arkusz z blokiem tytułowym i okienkiem |
| `LAYTHW` |  | Odmraża każdą warstwę |
| `LAYUNISO` |  | Włącza z powrotem warstwy, które LAYISO wyłączyło |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Zamienia tekst wpisany starymi wietnamskimi czcionkami (TCVN3 / czcionki ABC, takie jak .VnTime, oraz VNI, takie jak VNI-Times) na Unicode. Taki tekst jest już pokazywany czytelnie; to polecenie przepisuje go na stałe, z liczbą i jednym krokiem cofnięcia. |
| `LENGTHEN` | `LEN` | Wydłuża albo skraca linie, łuki i polilinie: o wartość, procent, do sumy albo przeciągnięciem (LEN) |
| `LIBRARY` | `LIB` | Panel biblioteki: umieszczanie elementów, sprawdzanie aktualizacji, autorstwo |
| `LIMITS` |  | Ustawia limity rysunku: WŁ., WYŁ., albo lewy dolny i prawy górny narożnik. Przy włączonych limitach punkty poza nimi są odrzucane |
| `LINE` | `L` | Odcinki proste, każdy jako osobny obiekt |
| `LINETYPE` | `LT`, `CELTYPE` | Typ linii, jaki dostają nowe obiekty (wg warstwy, wg bloku albo nazwany) |
| `LINKVIEWS` | `SYNCVIEWS` | Przesuwa i powiększa wszystkie okienka razem (podzielony ekran), by porównać dwa rysunki albo rewizje |
| `LISPEDIT` | `VLIDE` | LISPEDIT (albo VLIDE) otwiera edytor LISP: okno do pisania, wczytywania i wypróbowywania procedury. Wczytaj do rysunku czyta każdą formę, tak jak wczytanie pliku poleceniem APPLOAD, i tworzy jej polecenia. Uruchom zaznaczenie ocenia zaznaczone formy albo formę, w której stoi kursor. Konsola pokazuje, co wypisała procedura, i każdy błąd z numerem wiersza. Pasująca nawias jest zaznaczany podczas pisania, a Enter wcina nową linię. Nowy, Otwórz i Zapisz działają na pliku .lsp. Listy obok tekstu pokazują funkcje, które procedura definiuje, te, które wywołuje, a tego LISP jeszcze nie ma, i wszystkie, jakie ma. Okno nie blokuje rysunku, więc procedura może prosić o punkty; Stop albo Esc kończy działającą procedurę. |
| `LIST` | `LI`, `LS` | Opisuje obiekty w historii |
| `LTSCALE` | `LTS` | Skala typów linii rysunku (każda kreska i przerwa jest przez nią mnożona) |
| `LWDISPLAY` | `LWT` | Pokazuje albo ukrywa grubości linii na ekranie (przycisk LWT w pasku stanu) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Grubość linii, jaką dostają nowe obiekty (wg warstwy, wg bloku, domyślna albo mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | warstwy mapy pod przestrzenią modelu: układ współrzędnych rysunku, kafelki, WMS, WMTS, ArcGIS, obrazy |
| `MASSPROP` |  | MASSPROP: właściwości przekrojów regionów i zamkniętych obiektów: pole, obwód, środek ciężkości, momenty i iloczyn bezwładności, promienie bezwładności i osie główne. Dokładne dla linii i łuków. Może zapisać raport do pliku tekstowego. |
| `MATCHPROP` | `MA`, `PAINTER` | Dopasowuje właściwości: kopiuje warstwę, kolor i więcej z jednego obiektu na inne (MA) |
| `MEASURE` | `ME` | MEASURE (ME): znacznik co podaną długość wzdłuż linii, łuku, okręgu, polilinii, splajnu albo elipsy, od końca najbliższego twojemu wskazaniu. Punkty albo, z Blokiem, blok przy każdym znaczniku. |
| `MEASUREGEOM` | `MEA` | Mierzy odległość, promień, kąt albo pole (MEA) |
| `MINSERT` |  | MINSERT: umieszcza blok w wierszach i kolumnach za jednym razem. Każdy jest osobnym odwołaniem, więc każdy można przesunąć albo usunąć. |
| `MIRROR` | `MI` | Odbija obiekty względem linii (lustro) |
| `MLEADER` | `MLD`, `MLEAD` | Wielokrotny odnośnik: strzałka, odnośnik i notatka jako jeden obiekt (MLD) |
| `MLEADERALIGN` | `MLA` | Ustawia wielokrotne odnośniki w jednej linii z jednym z nich wzdłuż kierunku, w równych odstępach albo rozłożone między dwoma punktami (MLA) |
| `MLEADERCOLLECT` | `MLC` | Zbiera kilka wielokrotnych odnośników w jeden: ich bloki w wierszu albo kolumnie, albo ich notatki jedna pod drugą (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje linie odnośników do wielokrotnego odnośnika albo je usuwa; przełącza jego zawartość między tekstem a blokiem (MLE) |
| `MLINE` |  | Rysuje równoległe linie razem, połączone w narożnikach. |
| `MOVE` | `M` | Przesuwa obiekty o punkt bazowy i drugi punkt |
| `MSPACE` | `MS` | Pracuje na modelu przez okienko otwartego arkusza (albo dwuklik wewnątrz okienka). |
| `MTEXT` | `MT`, `T` | Tekst akapitowy: przeciągnij jego szerokość, a potem pisz na miejscu; Enter zaczyna nowy akapit (T) |
| `MVIEW` | `MV` | Okienko na model, na układzie |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nazwane widoki: zapisz widok na ekranie (albo okno) pod nazwą i wróć do niego (NV) |
| `NCOPY` |  | Kopiuje obiekty z odwołania do bloku albo połączonego rysunku do rysunku, bez rozbijania. |
| `NEARBY` |  | Mówi, co leży blisko kursora, najbliższe najpierw, z odległością i stroną. |
| `NEW` |  | Rozpoczyna nowy rysunek |
| `OBJECTSCALE` | `OBJSCALE` | Skale adnotacji tekstów i wymiarów adnotacyjnych: dodaj skalę, usuń, dodaj bieżącą albo wypisz (każde okienko pokazuje je w rozmiarze dla własnej skali) |
| `OBJOUT` |  | Eksportuje model 3D jako OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Standard biura: wysokości tekstu na papierze, warstwy, pola bloku tytułowego i szablony w jednym zapisie. Pokazuje obowiązujący i skąd pochodzi; Importuj plik .json do tego rysunku, dodaj brakujące warstwy biura, wypisz pola bloku tytułowego. |
| `OFFSET` | `O` | Kopie równoległe w odległości |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: jak OFFSET zamyka przerwy na zewnętrznych narożnikach polilinii. 0 wydłuża odcinki, 1 dodaje łuk, 2 dodaje proste cięcie. Zachowane na tę sesję. |
| `OLELIST` | `OLES` | Wypisuje obiekty OLE, które niesie rysunek, i umieszcza kopię obrazu jednego z nich tam, gdzie wybierzesz |
| `OPEN` |  | Otwiera DWG albo DXF z tego komputera |
| `OPENIN3D` |  | Otwiera ten rysunek w aplikacji do modelowania 3D, w nowej karcie (nic nie jest wysyłane) |
| `OPTIONKEYS` | `OPTKEYS` | Nadaje opcjom poleceń własne litery (ARRAY.PO, P) w jednym pliku tekstowym |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otwiera menu przyciągania do obiektów: wybierz, które przyciągania są włączone. Także prawy przycisk na Przyciąganie w pasku stanu. |
| `OVERKILL` |  | Usuwa zduplikowane obiekty i scala nakładające się albo końcem do końca stykające się linie i łuki, w tolerancji. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametry: parametry użytkownika i wymiarowe więzy w jednej tabeli |
| `PARTSLIST` | `PLIST` | Tabela listy części każdej standardowej części i przekroju stalowego umieszczonego z Biblioteki |
| `PASTEAREA` | `PAREA` | Wkleja obszar skopiowany w MarkupCraft (Kopiuj obszar) w jego prawdziwym rozmiarze, jako obraz. |
| `PASTEBLOCK` |  | PASTEBLOCK: wkleja to, co skopiowałeś, jako jeden blok. Blok dostaje własną nazwę; RENAME nadaje twoją. |
| `PASTECLIP` |  | Wkleja schowek: podąża za kursorem, kliknij, gdzie ma trafić (Ctrl+V) |
| `PASTEORIG` |  | Wkleja schowek we współrzędnych, z których został skopiowany (Ctrl+Shift+V) |
| `PDF` |  | Podaje CadCraft pliki PDF, których używają podkłady rysunku |
| `PDFADJUST` |  | Wyblaka, zmienia kontrast, monochromatyczność albo wyłącza podkład PDF |
| `PDFATTACH` | `PDFATT` | Dołącza stronę PDF jako podkład (PDFATTACH) |
| `PDFCLIP` |  | Przycina podkład PDF do prostokąta albo wielokąta |
| `PDFIMPORT` | `PDFIM` | Zamienia linie, wypełnienia i tekst strony PDF w obiekty rysunku (PDFIMPORT) |
| `PDFLAYERS` |  | Włącza albo wyłącza warstwy podkładu PDF |
| `PEDIT` | `PE` | Edytuje polilinię: zamknij, otwórz, połącz, szerokość, dopasuj krzywą, krzywa splajnu, rozprostuj, generuj typ linii, odwróć; linie, łuki i splajny można zamienić w polilinie |
| `PENPRESSURE` |  | Czy nacisk pociągnięcia pióra ustala grubość linii tego, co robią SKETCHFIX i SKETCHLIVE (domyślnie włączone). Zachowane w tej przeglądarce. |
| `PHOTOSKETCH` | `PSK` | Zamienia zdjęcie szkicu ręcznego na papierze na linie i łuki w skali, prostując perspektywę i nadając każdemu kolorowi pióra własną warstwę. |
| `PICKSTYLE` |  | PICKSTYLE: czy zaznaczenie jednego obiektu grupy zaznacza całą grupę (1, ustawienie startowe), czy tylko ten obiekt (0). Zachowane na tę sesję. |
| `PLAN` |  | Obraca widok tak, by oś X UCS (bieżący ucs, zapisany Ucs albo Świat) była pozioma na ekranie. Nic w rysunku się nie rusza. |
| `PLINE` | `PL` | Polilinia z odcinków prostych i łuków |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Drukuj do PDF: układ albo model w skali |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele stylów wydruku: ustaw, jak drukuje się każdy kolor (kolor, czerń, szarość, tusz, grubość linii); zachowane z rysunkiem (STYLESMANAGER) |
| `POINT` | `PO` | Obiekty punktowe |
| `POINTCLOUD` | `PC` | dołączona chmura punktów: wycinek, wysokość, grubość, kolor, rozmiar, widoczność, zoom, odłącz |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | dołącza chmurę punktów (LAS, LAZ, XYZ, PTS) pod rysunkiem |
| `POLARANG` |  | Krok śledzenia biegunowego w stopniach (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Wielokąt foremny |
| `PRESSPULL` |  | Pchnij albo pociągnij ścianę bryły (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otwiera panel Właściwości (także Ctrl+1 albo dwuklik na obiekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Składa panel Właściwości do krawędzi okna |
| `PSPACE` | `PS` | Opuszcza okienko, w którym pracujesz, i wraca do arkusza (albo dwuklik poza nim). |
| `PUBLISH` | `-PUBLISH` | Drukuje kilka albo wszystkie arkusze do jednego PDF (strona i zakładka na arkusz) |
| `PURGE` | `PU` | Usuwa definicje bloków, których nic nie używa |
| `QDIM` |  | Szybki wymiar: wymiarowanie kilku obiektów naraz (ciągłe, od linii bazowej, zygzakowate, współrzędne, promień albo średnica) |
| `QPMODE` | `QP` | Szybkie właściwości przy kursorze WŁ. lub WYŁ. |
| `QSELECT` | `QS` | Szybkie zaznaczenie: każdy obiekt danego typu, którego warstwa, kolor, rozmiar lub nazwa pasuje (QS) |
| `RASTERSNAP` |  | Włącza lub wyłącza przyciąganie do linii zeskanowanych arkuszy. |
| `RAY` |  | Półprosta: linia konstrukcyjna z punktu, bez końca w jedną stronę. |
| `RECOVER` |  | Otwiera uszkodzony DXF albo DWG: pomija to, czego nie da się odczytać, zamiast odrzucać plik, mówi, co pominięto, a potem sprawdza i naprawia rysunek tak jak AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zamknięta polilinia z dwóch narożników |
| `REDLINE` | `RDL` | Uwagi na rewizję: czyta paczkę MarkupCraft, akceptuje albo odrzuca każdą zmianę, obłacza zaakceptowane chmurą rewizji z dziennikiem i zapisuje plik odpowiedzi (RDL) |
| `REDO` |  | Ponawia to, co cofnięto |
| `REFCLOSE` |  | Kończy edycję bloku na miejscu: zapisuje go albo odrzuca zmiany |
| `REFEDIT` |  | Edytuje blok na miejscu, tam gdzie stoi jego odwołanie, a reszta rysunku jest wyblakła; REFCLOSE zapisuje |
| `REGEN` | `RE` | Odbudowuje to, co narysowane na tej karcie, z rysunku |
| `REGENALL` | `REA` | Odbudowuje to, co narysowane na każdej karcie, w każdym okienku i w każdym otwartym rysunku |
| `REGION` | `REG` | REGION (REG): tworzy płaskie obszary (regiony) z zamkniętych obiektów albo z linii, łuków i polilinii, które zamykają pętlę koniec w koniec. UNION, SUBTRACT i INTERSECT łączą regiony, a MASSPROP podaje ich właściwości przekroju. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Rejestruje kilka skanów: umieszcza je w jednej ramce na podstawie wskazanych par punktów albo celów, dopracowuje przez ICP, eksportuje jeden LAS lub E57 |
| `REINIT` |  | Wczytuje ponownie plik twoich skrótów |
| `RENAME` | `-RENAME`, `REN` | Zmienia nazwę warstwy albo bloku (każdy obiekt albo odwołanie podąża) |
| `REVCLOUD` | `RC` | Chmura rewizji: obrysowuje prostokąt, wielokąt, ścieżkę odręczną albo obiekt (RC) |
| `REVOLVE` | `REV` | Obraca zamknięte obiekty 2D wokół osi w bryły (3D) |
| `ROTATE` | `RO` | Obraca obiekty wokół punktu bazowego |
| `SAMPLES` | `SAMPLE` | Otwiera jeden z przykładowych rysunków CadCraft (zestaw architektoniczny, stan powykonawczy), żeby się uczyć |
| `SAVE` | `QSAVE` | Pobiera rysunek w jego formacie (DWG albo DXF) |
| `SAVEAS` |  | Pobiera rysunek jako DWG albo DXF: wybierz, który |
| `SAYSEL` |  | Mówi, co jest zaznaczone, jedno zdanie na obiekt. |
| `SCALE` | `SC` | Skaluje obiekty względem punktu bazowego |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, edytuje i usuwa własne skale rysunku; pojawiają się na listach skal okienek i wydruku oraz są zapisywane w pliku (SCALELIST) |
| `SCANALIGN` | `SCL` | Wyrównuje zeskanowany arkusz do dwóch punktów: przesuwa, obraca i, jeśli chcesz, skaluje. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Wstawia zeskanowany rysunek: PNG, JPEG albo TIFF (jedna strona albo wszystkie strony wielostronicowego pliku) albo stronę PDF, która jest obrazem. |
| `SCANCLEAN` | `SCC` | Zamienia zeskanowany arkusz na czarno-biały i usuwa plamki. |
| `SCANCROP` | `SCR` | Przycina zeskanowany arkusz do okna. |
| `SCANDESKEW` | `SCD` | Znajduje kąt, pod jakim leżą długie linie zeskanowanego arkusza, i wyrównuje arkusz, gdy zaakceptujesz kąt. |
| `SCANERASE` | `SCE` | Wymazuje obszar zeskanowanego arkusza: prostokąt, wielokąt albo lasso. |
| `SCANINFO` | `SCI` | Pokazuje oryginalny plik zeskanowanego arkusza i kroki wykonane od tamtej pory. |
| `SCANSCALE` | `SCS` | Skaluje zeskanowany arkusz: wskaż na nim dwa punkty i wpisz prawdziwą odległość między nimi. |
| `SCANTRACE` | `SCT` | Przenosi zeskanowany arkusz na linie i łuki na nowej warstwie, z tolerancją, którą ustawisz. Tekst i kreskowania pozostają jako raster. |
| `SELECT` |  | Zaznacza obiekty teraz (dla P, Poprzedni, w następnym poleceniu) |
| `SELECTALL` | `AI_SELALL` | Zaznacza każdy obiekt, który można edytować na tej karcie (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Zaznacza każdy obiekt podobny do wskazanych: ten sam typ, warstwa i kolor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Pokazuje panel Zestaw arkuszy: arkusze z wielu rysunków, ponumerowane, opublikowane jako jeden PDF. |
| `SHORTCUTS` | `KEYS` | Nadaje dowolnemu poleceniu własny klawisz (Ctrl albo Alt z literą, albo wolny klawisz funkcyjny), zachowany w tej przeglądarce albo aplikacji desktopowej. |
| `SHXFONTS` | `SHX` | Podaje CadCraft czcionki SHX z folderu albo plików, tak by style tekstu, które je nazywają, rysowały się nimi (wypisz, usuń, odwróć) |
| `SKETCHFIX` | `SKF` | Rysuje odręczne pociągnięcia; każde staje się czystą linią, okręgiem, łukiem, prostokątem albo polilinią, wyrównaną i połączoną z innymi. |
| `SKETCHLIVE` | `SKL` | Szkicuj piórem: każde pociągnięcie staje się dokładną linią, okręgiem, łukiem albo prostokątem, gdy podnosisz pióro, przyciągniętą do rysunku, z rozmiarem do nadpisania. |
| `SPLINE` | `SPL` | Rysuje spline przez punkty (albo z wielokątem kontrolnym) albo zamienia polilinię w nią |
| `SPLINEDIT` | `SPE` | Edytuje spline: punkty dopasowania, punkty kontrolne i wagi, otwiera lub zamyka, odwraca albo zamienia w polilinię |
| `SPLIT` |  | Dzieli obszar rysunku na okienka (jak VPORTS na modelu; także z arkusza) |
| `STEELMEMBER` | `SMEMBER` | Element stalowy w 3D ze standardowego przekroju: dwa punkty (belka) albo punkt bazowy i wysokość (Słup) |
| `STLOUT` |  | Eksportuje model 3D jako STL (w milimetrach) |
| `STRETCH` | `S` | Rozciągnij: przeciągnij okno przecięcia przez końce, by przesunąć; to, co jest w środku, się przesuwa, reszta zostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Style tekstu: czcionka, wysokość, szerokość i pochylenie, jakie przyjmuje nowy tekst (okno; -STYLE w wierszu poleceń) |
| `SUBTRACT` | `SU` | Odejmuje bryły od innych (3D) albo regiony 2D od regionów |
| `SWBOUT` | `SWMACRO` | Pobiera makro dla SolidWorks (.swb), które odbudowuje model jako jeden szkic z więzami |
| `SWEEP` |  | Przeciąga zamknięte obiekty 2D wzdłuż ścieżki (linia, polilinia, łuk, okrąg) w bryły (3D) |
| `TABLE` | `TB` | Tworzy tabelę: wiersze i kolumny albo z komórek arkusza kalkulacyjnego ze schowka albo pliku CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edytuje tabelę: pisz w komórce, wstawiaj i usuwaj wiersze i kolumny, rozmiary, scalone komórki, wyrównanie |
| `TABLEEXPORT` |  | Zapisuje to, co pokazuje tabela, jako plik CSV |
| `TABLEPASTE` | `PASTETABLE` | Tworzy tabelę z komórek arkusza kalkulacyjnego ze schowka |
| `TABLESTYLE` | `TS` | Style tabel: wysokości tekstu, wyrównanie, margines i obramowanie wierszy tytułu, nagłówka i danych |
| `TAGS` |  | Znaczniki na odwołaniach do bloków: definiuje znacznik (rodzaj, dozwolone wartości, bloki, do których się stosuje), ustawia go na zaznaczonych odwołaniach i wypisuje je jako zestawienie, które możesz zapisać jako CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst jednowierszowy; Enter zaczyna następny wiersz |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edytuje tekst na miejscu: wskaż tekst (albo kliknij go dwukrotnie) (ED) |
| `TEXTMASK` | `TMASK` | Kładzie maskę tła za tekstami (tło rysunku albo kolor) albo ją zdejmuje. |
| `TEXTTOFRONT` |  | Przenosi cały tekst, wymiary i odnośniki przed wszystko inne. |
| `TOOLBAR` |  | Wybiera, co pokazują przyciski paska narzędzi: ikony i tekst, same ikony albo sam tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Umieszcza pasek narzędzi u góry, na dole, z lewej albo z prawej okna |
| `TOOLBARROWS` |  | Wybiera, ile wierszy używa pasek narzędzi: zawijaj do miejsca, 2 albo 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Ustawia paski nad rysunkiem na standardowe albo zwarte |
| `TOUCHCROSSHAIR` | `TCX` | Przesunięty krzyżyk do rysowania palcem: jeden palec przesuwa krzyżyk, który leży nad nim i obok, tak że palec nie zakrywa punktu. Podniesienie palca nic nie wybiera; przycisk Kliknij albo stuknięcie drugim palcem wybiera w miejscu krzyżyka, a przytrzymanie Kliknij podczas ruchu przeciąga. Długie przytrzymanie albo przycisk Enter to Enter. Dwa palce przesuwają i powiększają. Opcje: WŁ., WYŁ., Auto (włączony tylko tam, gdzie palec jest jedynym wskaźnikiem), Odległość, Strona. |
| `TOUR` | `TUTORIAL` | Uruchamia ponownie sześciokrokowy przewodnik po pierwszym rysunku |
| `TRIM` | `TR` | Przycina obiekty do miejsc, w których inne je przecinają: kliknij kawałek, przeciągnij przez kilka albo Shift+kliknięcie, by wydłużyć |
| `TRIMEXTENDMODE` |  | Jak TRIM i EXTEND startują: 1 Szybki (każdy obiekt jest krawędzią tnącą albo granicą), 0 Standardowy (najpierw wybierz krawędzie) |
| `TTR` |  | Okrąg styczny do dwóch obiektów, z podanym promieniem (tak samo jak CIRCLE T). |
| `TURNLEFT` |  | Obraca widok o 90° w lewo (przeciwnie do ruchu wskazówek zegara): UCS Z -90, a widok podąża. Nic w rysunku się nie rusza. |
| `TURNRIGHT` |  | Obraca widok o 90° w prawo (zgodnie z ruchem wskazówek zegara): UCS Z 90, a widok podąża. Nic w rysunku się nie rusza. |
| `TURNWORLD` |  | Powrót do świata: UCS Świat, a widok znów jest poziomy. |
| `TXT2MTXT` | `T2M` | Łączy teksty jednowierszowe w jeden tekst akapitowy, od góry do dołu. |
| `UCS` |  | Twój własny układ współrzędnych: początek i oś X (początek, kąt Z, 3punkty, OBiekt, Poprzedni, Świat, NAzwany). Punkty, które wpisujesz, orto, śledzenie biegunowe, siatka i nowy tekst podążają za nim; widok się obraca, by jego oś X była pozioma. Nic w rysunku się nie rusza. |
| `UNDO` | `U` | Cofa ostatnie polecenie |
| `UNGROUP` |  | UNGROUP: rozbiera grupy. Zaznacz obiekty grup albo podaj Nazwę. Obiekty zostają w rysunku. |
| `UNION` | `UNI` | Łączy bryły w jedną (3D) albo regiony 2D w jeden region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponownie pokazuje każdy obiekt ukryty przez ISOLATEOBJECTS albo HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Jak pokazywane i wpisywane są długości: dziesiętne, stopy i cale, ułamki (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponownie wylicza pola i wybiera, kiedy same się aktualizują |
| `USDOUT` |  | Eksportuje model 3D jako USD (tekst .usda, binarny .usdc albo pakiet .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardowe widoki 3D, perspektywiczne albo równoległe (3D) |
| `VIEWBASE` | `FLATSHOT` | Umieszcza płaski widok 2D brył 3D (z przodu, z góry, z boku albo izometryczny, ukryte linie przerywane) na arkuszu albo w modelu |
| `VIEWLABEL` | `VL` | Tytuł widoku na arkuszu, który pokazuje nazwę widoku jego okienka i zmienia się razem z nim. |
| `VOICE` |  | Włącza lub wyłącza polecenia mówione. Są rozpoznawane na tym komputerze. |
| `VPCLIP` |  | Przycina okienko arkusza do zamkniętego obiektu albo narysowanego wielokąta; Delete zamienia je z powrotem w prostokąt |
| `VPLAYER` |  | Zamraża albo odmraża warstwy tylko w niektórych okienkach (Zamroź, Odmroź, Resetuj) i wybiera, które warstwy nowe okienka zaczynają zamrożone (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dzieli obszar rysunku na okienka, każde z własnym widokiem (na arkuszu: okienko, jak MVIEW) |
| `VPVIEW` |  | Ustawia, co pokazuje okienko: wskaż okno na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Styl wizualny widoku 3D: cieniowany, krawędzie, ukryta linia, szkielet, rentgen |
| `WALL` | `WA` | Rysuje ściany 2D jak polilinię. Łączą się i niosą drzwi oraz okna. |
| `WALLARC` | `WARC` | Rysuje łuk ścian. Ściany planu są proste, więc łuk jest rysowany jako krótkie proste ściany (po 15 stopni), które się łączą. |
| `WALLDELSEG` |  | Usuwa kawałek ściany między dwoma punktami. Co zostaje, pozostaje jedną albo dwiema ścianami. |
| `WALLDIM` |  | Wpisz nową wartość wymiaru: ściana na jego dalszym końcu przesuwa się prostopadle do siebie, ściana na pierwszym końcu trzyma się, a połączone z nią ściany podążają. |
| `WALLDISJOIN` |  | Wskaż ścianę blisko jednego końca, aby zabronić połączeń na tym końcu: koniec jest rysowany prostopadle i nic za nim nie podąża. Wskaż ponownie, aby zezwolić. |
| `WALLGRID` |  | Blokuje ścianę do linii siatki: wzdłuż niej albo jednym końcem na niej. Przesuń linię przez GRIDMOVE, a ściana podąży. |
| `WALLHOLD` |  | Wyrównanie i blokada: ściana zachowuje swoje miejsce względem innej ściany (na swojej linii albo w odległości, jaką ma). Jeśli jedna się przesunie, druga podąży. |
| `WALLHOLDDIM` |  | Blokuje odległość między dwiema równoległymi ścianami. Jeśli jedna się przesunie, druga podąży, by ją zachować. |
| `WALLHOLDS` |  | Wypisuje blokady na ścianach. |
| `WALLJOINS` |  | Nadaje każdej ścianie starszego rysunku jej identyfikator i zapisuje połączenia między nimi. Dzieje się to także przy pierwszej zmianie, którą wykonasz. |
| `WALLJOINSTYLE` |  | Kliknij narożnik, w którym dwie ściany spotykają się końcami, aby zmienić, jak jest rysowany: na ukos, płasko, na kwadrat. T przełącza, która ściana przechodzi przez spotkanie. |
| `WALLOFFSET` | `WO` | Przesuwa ścianę prostopadle do siebie o odległość (połączone z nią ściany podążają), albo tworzy kopię w tej odległości. |
| `WALLPICK` |  | Tworzy ściany na linii albo polilinii w rysunku, z liniami do niej połączonymi, jeśli powiesz Tak. |
| `WALLPOLY` | `WP` | Rysuje ściany wokół wielokąta foremnego o 3 do 64 bokach, jak POLYGON. |
| `WALLRECT` | `WR` | Rysuje cztery połączone ściany z dwóch przeciwległych narożników, jak RECTANG. |
| `WALLREJOIN` |  | Zamienia dwie części jednej ściany z powrotem w jedną ścianę. Pierwsza zachowuje swoje miejsce w rysunku. |
| `WALLROT` |  | Rysuje cztery połączone ściany jako prostokąt obrócony pod dowolnym kątem: pierwszy bok, a potem jak daleko wychodzi drugi. |
| `WALLSPLIT` | `WS` | Dzieli ścianę na dwie w punkcie albo tam, gdzie przecina ją inna ściana. Części pozostają połączone, chyba że poprosisz o przerwę lub wolne końce. Drzwi i okna idą z częścią, do której należą. |
| `WALLSPLITGAP` |  | Dzieli ścianę zostawiając przerwę: wpisz przerwę, wskaż ścianę, a potem punkt. Części mają wolne końce i mogą być połączone ponownie. |
| `WALLSTRETCH` |  | Rozciąga oknem: końce ścian w jego wnętrzu się przesuwają, ściany w całości w jego wnętrzu przesuwają się w całości, a ściany dotykające swoimi bokami przesuwają się razem z nimi. |
| `WALLTAN` |  | Kontynuuje ścianę łukiem, który odchodzi od niej wzdłuż ściany (rysowany jako krótkie proste ściany). |
| `WALLTRACE` |  | Tworzy ściany wokół najmniejszego zamkniętego obszaru linii i ścian wokół punktu, który klikniesz. |
| `WALLUNHOLD` |  | Zdejmuje blokady ze ściany (oraz blokady innych ścian do niej). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapisuje blok, kilka obiektów albo cały rysunek do nowego pliku DWG lub DXF (W) |
| `WEDGE` | `WE` | Klin: dwa narożniki i wysokość; opada od pierwszego narożnika (3D) |
| `WHEREAMI` | `WHERE` | Mówi, gdzie jest kursor. |
| `WHOHAS` |  | Mówi, kto ma otwarty rysunek. CadCraft Studio zachowuje mały plik blokady obok każdego otwartego rysunku (Plan.dwg.cclock: kto, od kiedy, która wersja) i usuwa go przy zamknięciu. Opcje: Bieżący (otwarty rysunek), Plik (wybierz), Folder (każdy rysunek w folderze, który jest gdzieś otwarty; to także pozwala Studio zachować pliki blokad w tym folderze), Ścieżka (wpisz), Nazwa (nazwa widziana przez innych). Blokada nieodświeżona przez pięć minut jest uznana za nieaktualną. Niedostępne w przeglądarce. |
| `WINDOW` | `WN` | Wstawia okno w ścianę. |
| `XATTACH` | `XA` | Dołącza inny DWG albo DXF do tego rysunku, pokazywany tylko do odczytu (XREF je wypisuje i wczytuje ponownie) |
| `XCLIP` | `XC` | Przycina odwołania do bloków i połączone rysunki do prostokąta albo wielokąta, albo usuwa przycięcie. |
| `XLINE` | `XL` | Linia konstrukcyjna, bez końca w obie strony: przez dwa punkty, pozioma, pionowa, pod kątem, dwusieczna kąta albo odsunięta od linii. |
| `XREF` | `XR`, `-XREF` | Połączone rysunki (zewnętrzne odwołania): wypisz, dołącz, wczytaj ponownie, związaj, odłącz |
| `ZOOM` | `Z` | Zasięg albo okno |
