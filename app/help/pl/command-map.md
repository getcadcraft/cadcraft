---
title: "Mapa poleceń: co wpisać"
summary: Wszystkie polecenia CadCraft wraz ze skrótami, od A do Z, wygenerowane z samego programu, oraz przyzwyczajenia z innych programów do rysunku, które się różnią.
keywords: mapa poleceń, polecenia, aliasy, skróty, z innego programu, lista poleceń, co wpisać, usuń, przytnij, odpowiednik, różnice
from: 3bdfd3e6
---

CadCraft przyjmuje nazwy poleceń i skróty, które użytkownicy znają z innych programów do rysunku: wpisz `L`, aby narysować linię, `TR`, aby przyciąć, `E`, aby usunąć. Dzięki temu nie trzeba uczyć się tabeli tłumaczeń dla większości z nich: nazwa, którą znasz, jest tutaj tą samą nazwą. Poniższa lista zawiera wszystkie polecenia CadCraft, wygenerowane z samego programu. {{key:Enter}} powtarza ostatnie polecenie; `HELP` w wierszu poleceń wyświetla tę samą listę.

Kilka, które różnią się albo nie są jeszcze zbudowane:

- **Zapisz** pobiera kopię w przeglądarce ({{cmd:SAVE}}, {{cmd:SAVEAS}}); w CadCraft Studio zapisuje plik. Zobacz [Z innego oprogramowania do rysunku](topic:coming-from).
- **PLOT** tworzy plik PDF (także PNG i SVG) z tabelą stylów wydruku; nie ma menedżera ustawień strony.
- **DIMSTYLE** i **PEDIT** są dostępne; **PEDIT** nie ma opcji edycji wierzchołka (zamiast tego działają uchwyty (grip)).
- Polecenia **TABLE** jeszcze nie ma; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} są dostępne.
- Własne polecenia procedury (AutoLISP `C:NAME`) pojawiają się po jej wczytaniu poleceniem {{cmd:APPLOAD}}; nie są tutaj wymienione.

## Wszystkie polecenia (398)

| Polecenie | Skróty | Co robi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Obraca widok 3D lewym przyciskiem myszy |
| `ACCESS` | `AX` | Włącza lub wyłącza rysowanie bez wzroku: wyniki odczytywane przez czytnik ekranu, kursor klawiatury na rysunku, dźwięki przyciągania i polecenia mówione. |
| `ALIASEDIT` |  | Edytuje skróty poleceń w jednym pliku tekstowym (znany format L, *LINE) |
| `ALIGN` | `AL` | Przesuwa i obraca obiekty tak, aby punkty źródłowe trafiły w punkty docelowe (jedna, dwie lub trzy pary), i w razie potrzeby skaluje je |
| `ALIGNPANEL` | `ALP` | Otwiera panel wyrównywania i rozmieszczania |
| `ALIGNTO` |  | Wyrównuje lewe, środkowe, prawe, górne, środkowe lub dolne krawędzie zaznaczonych obiektów względem zaznaczenia, pierwszego lub ostatniego wskazanego obiektu albo punktu |
| `ANNOALLVISIBLE` | `ANNOALL` | Pokazuje obiekty opisowe przy każdej skali albo tylko tam, gdzie skala okna widokowego (lub rysunku) znajduje się na ich liście |
| `ANNOSCALE` | `CANNOSCALE` | Ustawia skalę opisu rysunku: tekst i wymiary opisowe są przeskalowane, aby wydrukowały się w tym samym rozmiarze |
| `APPLOAD` | `AP` | Wczytuje aplikacje: procedury LISP (.lsp) i ich pliki okien dialogowych (.dcl); Pakiet startowy (AP) |
| `ARC` | `A` | Łuk: 3 punkty, Początek/Środek/Koniec, Początek/Środek/Kąt, Początek/Środek/Długość, Początek/Koniec/Kąt, Początek/Koniec/Kierunek, Początek/Koniec/Promień, Środek/Początek/Koniec, Środek/Początek/Kąt, Środek/Początek/Długość, Kontynuuj |
| `AREA` | `AA` | Pole i obwód według punktów lub obiektu; Dodaj i Odejmij zachowują sumę narastająco (AA) |
| `ARRAY` | `AR` | Kopie w wierszach i kolumnach albo wokół środka (AR) |
| `ARRAYASSOCIATIVITY` |  | Ustawia, czy polecenia ARRAY tworzą macierze, które można edytować (1), czy zwykłe kopie (0) |
| `ARRAYCLOSE` |  | Kończy edycję obiektów źródłowych macierzy |
| `ARRAYEDIT` |  | Zmienia macierz utworzoną z opcją Asocjacyjna: liczby, odstępy, obiekty źródłowe, jeden element |
| `ARRAYPATH` |  | Kopie obiektów wzdłuż linii, łuku, polilinii lub innej krzywej |
| `ARRAYPOLAR` |  | Kopie wokół punktu środkowego |
| `ARRAYRECT` |  | Kopie w wierszach i kolumnach |
| `ASBUILT` | `ASB` | ASBUILT odczytuje punkty powykonawcze zmierzone przez ekipę (CSV / TXT, w takim formacie, jaki zapisuje EXPORTPOINTS) i porównuje je z punktami rysunku: w tolerancji lub poza nią, niezmierzone, dodatkowe. Oznacza je na warstwie AS-BUILT i pobiera raport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiuje atrybut (znacznik, o wartość którego pyta blok), który umieszcza się w bloku (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edytuje wartości atrybutów odwołania do bloku w wierszu poleceń, jedną po drugiej (Enter zachowuje wartość) |
| `ATTSYNC` |  | Dopasowuje odwołania do bloku do jego definicji atrybutów: nowe są dodawane z wartościami domyślnymi, usunięte są pomijane, położenia i tekst są resetowane; wartości zachowane |
| `AUDIT` |  | Sprawdza otwarty rysunek pod kątem uszkodzeń: liczby nieskończone, obiekty bez rozmiaru, brakujące warstwy, bloki, style i typy linii, bloki zawierające same siebie, wspólne identyfikatory, uszkodzone wymiary i kreskowania. Wypisuje, co znalazł, według rodzaju, i pyta przed naprawą; naprawa to jeden krok polecenia Cofnij. |
| `AUNITS` | `ANGUNITS` | Jak pokazuje się i wpisuje kąty: stopnie dziesiętne, stopnie-minuty-sekundy lub azymuty, np. N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autouzupełnianie rysunku włączone lub wyłączone albo lista tego, co wzorce rysunku podpowiadają teraz. |
| `AUTOCONSTRAIN` |  | Dodaje więzy zgodności, poziome i pionowe tam, gdzie geometria jest już blisko |
| `AUTODIM` | `ADIM` | Wymiarowanie według reguł: wymiar gabarytowy, łańcuchy wzdłuż boków, otwory, średnice otworów i rozstaw siatki, bez powtarzania tego, co już ma wymiar. |
| `AUTOSHEET` | `ASH` | Samodzielnie układa arkusze: dobiera papier i skale standardowe oraz umieszcza każdy widok z podpisem i tabliczką rysunkową. |
| `BATTMAN` |  | Menedżer atrybutów bloku: kolejność, znaczniki, podpowiedzi, wartości domyślne i tryby atrybutów bloku, a potem aktualizacja jego odwołań |
| `BCLOSE` |  | Zamyka edytor bloków: zapisuje blok albo odrzuca zmiany |
| `BCONVERT` |  | BCONVERT znajduje powtarzającą się geometrię i zamienia ją na odwołania do bloków. Zaznacz obiekty, które się powtarzają: każdy inny zestaw obiektów w otwartej przestrzeni, o tej samej geometrii, przesunięty i obrócony o dowolny kąt, zostanie znaleziony; przy włączonych opcjach Lustrzane lub Skalowane znajdowane są także odbicia lustrzane i kopie w innym rozmiarze. Nadaj nowemu blokowi nazwę i punkt bazowy; zaznaczenie i każda kopia staną się odwołaniami do niego, każde z własnym obrotem i skalą. Albo wybierz Blok i podaj nazwę istniejącego bloku, aby znaleźć luźne kopie jego obiektów. Kopia musi mieć tę samą warstwę, kolor, typ linii i grubość linii, chyba że Właściwości ustawiono na Ignoruj. Obiekty na zablokowanych warstwach pozostają bez zmian. Jeden krok polecenia Cofnij. |
| `BEDIT` | `BE` | Edytor bloków: edytuje obiekty i atrybuty bloku; BCLOSE zapisuje (BE) |
| `BLEND` |  | BLEND: spline między końcami dwóch otwartych krzywych, wskazywanych blisko końców, aby je połączyć. CONtinuity: Styczna podąża za obiema kierunkami, Gładka dodatkowo za sposobem wyginania się. |
| `BLOCK` | `B`, `BMAKE` | Tworzy blok z obiektów (staną się jednym odwołaniem) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: każde odwołanie do jednego bloku staje się odwołaniem do innego, w tym samym miejscu, z tą samą skalą i obrotem. Wartości atrybutów, które oba bloki mają, są zachowywane. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE pokazuje panel Bloki z kursorem w jego filtrze. Panel pokazuje obrazek każdego bloku (najpierw te umieszczone najnowiej), jako listę lub siatkę; kliknij obrazek albo przeciągnij go na rysunek, aby umieścić blok poleceniem INSERT. W sekcji Biblioteki dodaj własny plik DWG lub DXF: jego bloki są wymienione z obrazkami i kopiowane do tego rysunku, gdy któryś umieścisz. W CadCraft Studio można też dodać folder z rysunkami, a pliki i foldery są zapamiętywane. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolumny, grupowanie, sortowanie, tytuł, sumy i uwagi tabeli zestawienia materiałów |
| `BOMEXPORT` |  | Zapisuje tabelę zestawienia materiałów jako plik .csv |
| `BOMTABLE` | `BOM` | Żywa tabela zestawienia materiałów jednej strefy albo całego rysunku |
| `BOMUPDATE` |  | Aktualizuje teraz każdą tabelę zestawienia materiałów, także zamrożone |
| `BOMZONE` | `BZONE` | Nazwany obszar rysunku dla zestawienia materiałów: dwa narożniki, wielokąt albo kontur zamkniętego obiektu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): wskaż punkt wewnątrz zamkniętego obszaru, a otrzymasz zamkniętą polilinię dookoła niego. Łuki pozostają łukami. Wyspy obrysowują także obszary znajdujące się w jego wnętrzu. |
| `BOX` |  | Prostopadłościan: dwa narożniki i wysokość (3D) |
| `BPARAMETER` | `BPARAM` | Jeszcze nie zbudowano: dodawania parametru (np. Widoczność) do bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametry bloku: nazwane parametry z formułami oraz kilka parametrów widoczności w jednym bloku. Działa w edytorze bloków (przypisz zaznaczone obiekty do stanu) i na zaznaczonym odwołaniu (jego własne wartości i stany). |
| `BREAK` | `BR` | Przerywa linię, łuk, okrąg lub polilinię między dwoma punktami (BR) |
| `BREAKATPOINT` |  | Dzieli linię, łuk lub polilinię na dwie części w punkcie |
| `BREAKLINE` |  | Rysuje linię z symbolem przerwania; jej rozmiar i wydłużenie poza końce są zapamiętywane. |
| `BREPLACE` |  | BREPLACE zamienia jeden blok na inny. Zaznaczone: wskaż odwołania do bloków i podaj nazwę bloku zamiennego. Wszystkie: podaj nazwę bloku i jego zamiennika, a każde odwołanie we wszystkich przestrzeniach i wewnątrz innych bloków zmieni się. Odwołanie zachowuje swoje miejsce, skalę, obrót i warstwę oraz wartości atrybutów, które mają oba bloki; wartości, dla których nowy blok nie ma miejsca, są pomijane i wymieniane z nazwy. |
| `BSEARCH` |  | BSEARCH znajduje bloki. Nazwa: fragment nazwy bloku albo wzorzec z * i ?. Atrybut: wartość (lub TAG=wartość) przechowywana w atrybutach odwołania. Geometria: zaznacz obiekty albo jedno odwołanie do bloku, a wypisane zostaną bloki o kształcie podobnym w co najmniej 85%, od najlepszego; rozmiar, obrót i odbicie lustrzane nie mają znaczenia. Odwołania znalezione w otwartej przestrzeni zostają zaznaczone, gotowe do następnego polecenia. |
| `BURST` |  | Rozbija odwołania do bloków i zachowuje to, co mówią ich atrybuty: każda wartość staje się tekstem na warstwie atrybutu. |
| `BVHIDE` | `BVH` | W edytorze bloków: ukrywa obiekty w bieżącym stanie widoczności. |
| `BVSHOW` | `BVSH` | W edytorze bloków: pokazuje obiekty ukryte przez bieżący stan widoczności (są wyświetlane wyblakłe, aby można je było wskazać). |
| `BVSTATE` | `BVS` | W edytorze bloków, dla bloku ze stanami widoczności: przełącza na stan albo dodaje, zmienia nazwę lub usuwa stan. |
| `CAL` |  | Oblicza długość lub liczbę: + − * / i nawiasy, wpisywane gdziekolwiek |
| `CENTERLINE` | `CL` | Linia środkowa między dwiema liniami: w połowie między nimi albo wzdłuż dwusiecznej, gdy się stykają (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Znacznik środka: krzyżyk w środku okręgu lub łuku, z liniami środkowymi wystającymi tuż poza nie (CM) |
| `CHAMFER` | `CHA` | Tworzy fazkę w narożniku między dwiema liniami (Dwie odległości (D), Długość i kąt (A), Każdy narożnik polilinii (P)) |
| `CHSPACE` |  | CHSPACE: przenosi obiekty między arkuszem a modelem przez okno widokowe. Są skalowane i obracane, aby wyglądały tak samo z drugiej strony. Na arkuszu trafiają do modelu; gdy pracujesz przez okno widokowe (MSPACE), trafiają na arkusz. |
| `CIRCLE` | `C` | Środek i promień, średnica, 2 lub 3 punkty |
| `CLASS` |  | Umieszcza zaznaczone obiekty w klasie, a bez zaznaczenia ustawia aktywną klasę (? wypisuje je) |
| `CLASSES` | `CLS` | Panel Klasy: klasy sortują obiekty ponad warstwami; pokazuje, ukrywa i stylizuje je oraz nadpisuje dla każdego okna widokowego (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dokuje lub odrywa wiersz poleceń, zmienia go na jedną linię, ustawia liczbę linii historii albo otwiera historię (F2) |
| `COMPARESETTINGS` | `CMPSET` | Porównuje style wymiarowania, style tekstu, warstwy, arkusze lub jednostki: dwa w tym rysunku albo ten rysunek z innym otwartym i kopiuje wartość między nimi. |
| `CONSTRAINTBAR` | `CBAR` | Pokazuje lub ukrywa paski więzów (Pokaż wszystko / Ukryj wszystko albo dla każdego obiektu) |
| `COPY` | `CO`, `CP` | Kopiuje obiekty, tyle razy, ile klikniesz |
| `COPYBASE` |  | Kopiuje obiekty do schowka z punktem bazowym, który wskażesz |
| `COPYCLIP` |  | Kopiuje obiekty do schowka (Ctrl+C); PASTECLIP je wkleja |
| `COUNT` | `BCOUNT` | Liczy odwołania do bloków: wskaż jedno, aby zaznaczyć i policzyć każde odwołanie do jego bloku |
| `COUNTTABLE` |  | Umieszcza tabelę liczby bloków |
| `CREDITS` |  | Umieszcza w rysunku atrybucje z biblioteki w postaci tabeli. Uruchom ponownie, aby zaktualizować tabelę z elementów obecnych teraz w rysunku. |
| `CURSORSIZE` |  | Rozmiar krzyżyka: 100 prowadzi go od krawędzi do krawędzi rysunku (Ustawienia › Kursor › Pełny ekran) |
| `CUTCLIP` |  | Wycina obiekty do schowka (Ctrl+X): kopiuje, a potem usuwa |
| `CYLINDER` | `CYL` | Walec: środek, promień i wysokość (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Wypisuje bloki, ich atrybuty i właściwości obiektów jako tabelę w rysunku albo w pliku CSV |
| `DATALINK` | `DL` | Tabela z pliku CSV, która zapamiętuje plik, dzięki czemu można go ponownie odczytać |
| `DATALINKUPDATE` | `DLU` | Ponownie odczytuje plik powiązania danych i wypełnia jego tabele |
| `DCALIGNED` | `DCALI` | Więz wymiarowy: prawdziwa odległość między punktami, punktem a linią lub dwiema liniami |
| `DCANGULAR` | `DCANG` | Więz wymiarowy: kąt między dwiema liniami albo łuku |
| `DCCONVERT` |  | Zamienia wymiary narysowane na geometrii, którą można wiązać, we więzy wymiarowe |
| `DCDIAMETER` | `DCDIA` | Więz wymiarowy: średnica okręgu lub łuku |
| `DCDISPLAY` |  | Pokazuje lub ukrywa więzy wymiarowe na rysunku |
| `DCHORIZONTAL` | `DCHOR` | Więz wymiarowy: odległość pozioma |
| `DCLINEAR` | `DCLIN` | Więz wymiarowy: odległość pozioma lub pionowa, od miejsca, w którym go umieszczasz |
| `DCRADIUS` | `DCRAD` | Więz wymiarowy: promień okręgu lub łuku |
| `DCVERTICAL` | `DCVER` | Więz wymiarowy: odległość pionowa |
| `DELBLOCKS` |  | Usuwa bloki: każde odwołanie (także zagnieżdżone, na każdym arkuszu) i definicje |
| `DELCONSTRAINT` | `DELCON` | Usuwa wszystkie więzy (geometryczne i wymiarowe) z zaznaczonych obiektów |
| `DELOPENING` |  | Wyjmuje drzwi lub okno ze ściany. |
| `DESCRIBE` | `DESC` | Mówi, co zawiera rysunek: ile jest obiektów, jakiego rodzaju, jakich rozmiarów, co jest zaznaczone. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Czyści zaznaczenie (Esc) |
| `DETAILS` | `DET` | Własne detale firmy, znajdowane dla tego, co rysujesz: znajdź, dodaj blok, wypisz, usuń, włącz lub wyłącz propozycje. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Rysuje diagram z tekstu: schemat blokowy Mermaid, diagram komponentów PlantUML, D2, listę od-do lub XML draw.io, jako bloki i łączniki, które można edytować |
| `DIMALIGNED` | `DAL`, `DIMALI` | Prawdziwa odległość między dwoma punktami |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kąt między dwiema liniami, łuku albo przez trzy punkty |
| `DIMARC` | `DAR` | Wymiar długości łuku: odległość wzdłuż łuku, z symbolem łuku (DAR) |
| `DIMASZ` |  | Ustawienie wymiaru: rozmiar strzałki |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Wymiary ułożone od jednej linii bazowej |
| `DIMBREAK` | `DBREAK` | Przerywa linie wymiarowe i pomocnicze tam, gdzie przecinają inne obiekty (Auto), między dwoma punktami (Ręcznie) albo usuwa przerwy |
| `DIMCONSTRAINT` | `DCON` | Więzy wymiarowe: liniowe, równoległe, kątowe, promieniowe, średnicowe, zamiana |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Łańcuch wymiarów, każdy od końca poprzedniego |
| `DIMDEC` |  | Ustawienie wymiaru: miejsca dziesiętne |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Średnica łuku lub okręgu |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Zwalnia wymiary z obiektów, do których są przypisane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Zmienia tekst wymiaru (Początek, Nowy tekst, Obróć) albo pochyla linie pomocnicze (Ukośnie) |
| `DIMEXE` |  | Ustawienie wymiaru: wydłużenie poza linię wymiarową |
| `DIMEXO` |  | Ustawienie wymiaru: odsunięcie od początku |
| `DIMGAP` |  | Ustawienie wymiaru: odstęp wokół tekstu |
| `DIMINSPECT` |  | Wymiar kontrolny: ramka wokół wartości z etykietą i częstotliwością kontroli części |
| `DIMJOGGED` | `DJO`, `JOG` | Wymiar promienia łamanego: promień rysowany z bliższego punktu, gdy środek jest daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje symbol załamania do linii wymiarowej liniowej lub równoległej, aby pokazać, że odległość nie jest narysowana w skali (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Odległość pozioma lub pionowa; R dla dowolnego kąta |
| `DIMLUNIT` |  | Ustawienie wymiaru: format długości (1 naukowy, 2 dziesiętny, 3 inżynierski, 4 architektoniczny, 5 ułamkowy) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Wymiar współrzędnych: odległość punktu od początku UCS w osi X lub Y, na odnośniku (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Nadpisuje zmienne wymiarowania w zaznaczonych wymiarach bez zmiany ich stylu; Wyczyść przywraca styl (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Promień łuku lub okręgu |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Przypisuje punkty wymiaru do obiektów, tak aby podążał za nimi i mierzył się ponownie, gdy się przesuną (DRE) |
| `DIMSCALE` |  | Ustawienie wymiaru: skala ogólna (rozmiary × ta wartość) |
| `DIMSPACE` |  | Równe odstępy między równoległymi wymiarami, mierzone od wymiaru bazowego (0 ustawia je w linii, Auto to dwukrotność wysokości tekstu) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Tworzy, zmienia, ustawia jako bieżący, usuwa, stosuje i porównuje nazwane style wymiarowania (okno dialogowe; -DIMSTYLE w wierszu poleceń) |
| `DIMTEDIT` | `DIMTED` | Przesuwa tekst wymiaru w lewo, w prawo lub na środek linii wymiarowej albo go obraca |
| `DIMTEXTUNIT` | `DTU` | Tekst wymiaru w mm, cm, m lub km albo w jednostkach rysunku: zaznaczone wymiary, a w przeciwnym razie nowe (DTU) |
| `DIMTXT` |  | Ustawienie wymiaru: wysokość tekstu |
| `DIST` | `DI` | Odległość i kąt między dwoma punktami |
| `DISTRIBUTE` |  | Rozmieszcza zaznaczone obiekty równomiernie, w poziomie lub w pionie: równe kroki między środkami albo równe odstępy; dwa skrajne pozostają na miejscu |
| `DIVIDE` | `DIV` | DIVIDE (DIV): znaczniki dzielące linię, łuk, okrąg, polilinię, spline lub elipsę na równe części. Punkty albo, z opcją Blok, blok przy każdym znaczniku. |
| `DOCUMENTS` | `DOCS` | Otwiera panel Dokumenty: wypożyczanie i zwracanie rysunków, rewizje, stany wydania i zatwierdzanie dla folderu projektu |
| `DOOR` | `DR` | Umieszcza drzwi w ścianie. Strona, po której klikniesz, to strona, w którą się otwierają. |
| `DRAWORDER` |  | Zmienia kolejność rysowania: przenosi obiekty na pierwszy plan, na tył albo umieszcza je nad innymi obiektami lub pod nimi. |
| `DUPLICATE` | `DUP` | Duplikat, który porusza się za wskaźnikiem: kliknij, aby ją odłożyć (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Właściwości rysunku: tytuł, autor i reszta oraz własne pary nazwa i wartość |
| `DXFOUT` |  | Pobiera rysunek jako DXF R12 (Zapisz zachowuje własny format) |
| `EATTEDIT` | `DDATTE` | Edytuje atrybuty odwołania do bloku: wartości, tekst i właściwości, jeden atrybut naraz |
| `ELLIPSE` | `EL` | Końce osi i druga połowa osi |
| `ERASE` | `E`, `DELETE` | Usuwa obiekty |
| `EXPLODE` | `X` | Rozbija polilinie, bloki i wymiary na części |
| `EXPORT` | `EXP` | Zapisuje kopię rysunku w typie pliku, który zapisuje dodatek |
| `EXPORT3D` | `3DEXPORT` | Eksportuje model 3D: GLB, OBJ lub STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapisuje punkty oraz punkty wstawienia bloków z jednym atrybutem jako opis do pliku CSV lub TXT (PNEZD, PENZD lub XYZ) dla programów BIM i geodezyjnych |
| `EXTEND` | `EX` | Wydłuża obiekty, aż spotkają inne: kliknij w pobliżu końca, przeciągnij przez kilka albo Shift+klik, aby przyciąć |
| `EXTRIM` |  | EXTRIM: wskaż jedną krawędź tnącą, a potem stronę. Wszystko, co przecina krawędź, zostaje przycięte po tej stronie. Fragmenty, które zostaną usunięte, pokazują się podczas ruchu wskaźnika. |
| `EXTRUDE` | `EXT` | Wyciąga zamknięte obiekty 2D w bryły (3D) |
| `FIELD` |  | Umieszcza pole w tekście, komórce tabeli lub atrybucie: datę, nazwę pliku, numer arkusza, właściwość rysunku, pole lub długość obiektu albo formułę |
| `FILLET` | `F` | Zaokrągla lub wyrównuje narożnik między dwoma obiektami (Promień (R), Każdy narożnik polilinii (P), Kilka (M)) |
| `FIND` |  | Wyszukuje i zamienia słowa w tekście, wartościach atrybutów i tekście wymiarów |
| `FLATTEN` |  | Ustawia wysokość (Z) i grubość zaznaczonych obiektów na 0, także w blokach, których używają. |
| `FLOOR` |  | Wybiera kondygnację, na której się rysuje, dodaje nową albo przenosi lub kopiuje na nią zaznaczenie. |
| `FLOORLAYERS` |  | Zamienia kondygnacje w warstwy o nazwach Floor-Layer, dla pliku przeznaczonego dla kogoś bez kondygnacji. |
| `FLOORS` | `FLR` | Otwiera panel Kondygnacje: układa kondygnacje w jednej przestrzeni modelu. |
| `GCCOINCIDENT` |  | Więz: dwa punkty się spotykają albo punkt pozostaje na obiekcie |
| `GCCOLLINEAR` |  | Więz: dwie linie pozostają na jednej prostej |
| `GCCONCENTRIC` |  | Więz: dwa okręgi lub łuki mają wspólny środek |
| `GCEQUAL` |  | Więz: dwie linie mają tę samą długość albo dwa okręgi/łuki ten sam promień |
| `GCFIX` |  | Więz: punkt albo cały obiekt pozostaje na miejscu |
| `GCHORIZONTAL` |  | Więz: linia (lub dwa punkty) pozostaje pozioma |
| `GCPARALLEL` |  | Więz: dwie linie pozostają równoległe |
| `GCPERPENDICULAR` |  | Więz: dwie linie pozostają pod kątem prostym |
| `GCSYMMETRIC` |  | Więz: dwa punkty, linie lub okręgi odbijają się względem siebie przez linię |
| `GCTANGENT` |  | Więz: linia i okrąg lub łuk (albo dwa z nich) pozostają styczne |
| `GCVERTICAL` |  | Więz: linia (lub dwa punkty) pozostaje pionowa |
| `GDSIN` | `GDS` | Podgląd układu IC (plik strumienia GDSII): każda warstwa i typ danych jako warstwa rysunku, płasko, w jednostkach użytkownika; tylko do przeglądania i mierzenia (próba laboratoryjna) |
| `GEOMCONSTRAINT` | `GCON` | Więzy geometryczne: poziome, pionowe, równoległe, styczne, zgodne… |
| `GLBOUT` |  | Eksportuje model 3D jako GLB (glTF) |
| `GRADIENT` | `GD` | Wypełnia obszar gradientem jednego lub dwóch kolorów |
| `GRIDMOVE` | `GM` | Przesuwa linię siatki i przenosi to, co na niej wisi: ściany się rozciągają, słupy i znaczniki osi oraz etykiety się przesuwają, wymiary podążają. |
| `GROUP` | `G` | GROUP (G): nadaje zaznaczonym obiektom wspólną nazwę. Kliknięcie jednego z nich zaznacza wszystkie. Enter przy nazwie tworzy grupę bez nazwy. |
| `GROUPEDIT` |  | GROUPEDIT: zmienia grupę. Wskaż jeden z jej obiektów albo podaj jej Name, a następnie Dodaj lub Usuń obiekty, REName, zmień Opis albo określ, czy kliknięcie zaznacza ją w całości. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Wypełnia obszar jednolitym wypełnieniem lub wzorem kreskowania: kliknij w środku albo zaznacz zamknięte obiekty (H) |
| `HATCHEDIT` | `HE` | Zmienia kreskowanie: wzór, skalę, kąt, początek i powiązanie z konturem. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponownie tworzy polilinie konturu z kreskowania, powiązane z nim lub nie |
| `HATCHTOBACK` |  | Przenosi każde kreskowanie za wszystko inne. |
| `HELP` | `?` | Ta lista |
| `HIDEOBJECTS` |  | Ukrywa zaznaczone obiekty do czasu UNISOLATEOBJECTS. Nie jest zapisywane z rysunkiem. |
| `HISTORY` | `HIST` | HISTORY (HIST): wersje tego rysunku — kopie zachowane na tym komputerze, gdy Studio go zapisuje, oraz wersje z chmury — do otwierania, przywracania i porównywania z tym, co się zmieniło, pokazanym kolorem. |
| `ID` |  | Współrzędne punktu |
| `IMAGE` | `IM` | Wskazuje CadCraft pliki obrazów, których używa rysunek (DWG zapisuje tylko, gdzie się znajdowały). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Umieszcza obraz (PNG lub JPEG) z pliku. |
| `IMAGECLIP` | `ICL` | Przycina obraz do prostokąta lub wielokąta albo usuwa przycięcie. |
| `IMPORT` | `IMP` | Importuje plik rodzaju, który odczytuje dodatek, do tego rysunku |
| `INSERT` | `I`, `DDINSERT` | Umieszcza blok; Skala (S), Obrót (R); Z pliku DWG/DXF (F), Z biblioteki (L) |
| `INTERSECT` | `IN` | Zachowuje tylko to, co bryły mają wspólnego (3D), albo obszar, który mają wspólnie regiony 2D |
| `ISODRAFT` |  | ISODRAFT: rysowanie izometryczne włączone lub wyłączone albo bezpośrednio na płaszczyźnie Lewej, Górnej lub Prawej. Gdy jest włączone, ortogonalnie i śledzenie biegunowe podążają za dwiema osiami płaszczyzny, siatka jest rysowana izometrycznie, a ELLIPSE ma opcję Izookrąg. |
| `ISOLATEOBJECTS` | `ISOLATE` | Pokazuje tylko zaznaczone obiekty; wszystko inne w tej przestrzeni jest ukryte do czasu UNISOLATEOBJECTS. Nie jest zapisywane z rysunkiem. |
| `ISOPLANE` |  | ISOPLANE: wybiera płaszczyznę izometryczną do rysowania: Lewą, Górną lub Prawą. Enter przechodzi do następnej, tak jak F5, gdy rysowanie izometryczne jest włączone. |
| `JOIN` | `J` | Łączy linie, łuki i polilinie stykające się końcami w jedną polilinię; linie leżące na jednej prostej w jedną linię (J) |
| `LASER` | `LASERCUT` | Otwiera panel Laser: wysyła warstwy do wycinarki laserowej lub grawera (kod G GRBL) |
| `LASSOMODE` |  | Naciśnij i przeciągnij rysuje lasso (1) albo prostokąt (0) |
| `LAYDEL` |  | Usuwa warstwę i każdy obiekt na niej (w modelu, na arkuszach i w blokach) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otwiera menedżera warstw: każda warstwa w jednej tabeli |
| `LAYERPANEL` |  | Pokazuje panel warstw |
| `LAYFRZ` |  | Zamraża warstwę każdego wskazanego obiektu |
| `LAYGROUP` | `LG` | Grupuje warstwy w foldery w panelu Warstwy. |
| `LAYISO` |  | Izoluje warstwy zaznaczonych obiektów (wszystkie inne warstwy wyłączone) |
| `LAYLOCKFADE` |  | Ustawia, jak bardzo obiekty na zablokowanych warstwach są wyblakłe i czy kliknięcie może je zaznaczyć. |
| `LAYMCUR` |  | Ustawia warstwę wskazanego obiektu jako bieżącą |
| `LAYMRG` |  | Scala warstwy: ich obiekty przechodzą na warstwę docelową, a scalone warstwy znikają |
| `LAYOFF` |  | Wyłącza warstwę każdego wskazanego obiektu |
| `LAYON` |  | Włącza każdą warstwę |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nowy arkusz z tabliczką rysunkową i oknem widokowym |
| `LAYTHW` |  | Odmraża każdą warstwę |
| `LAYUNISO` |  | Ponownie włącza warstwy, które wyłączyło LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Zamienia tekst wpisany starymi wietnamskimi czcionkami (czcionki TCVN3 / ABC, np. .VnTime, oraz czcionki VNI, np. VNI-Times) na Unicode. Taki tekst jest już wyświetlany tak, jak powinien być odczytany; to polecenie przepisuje go na stałe, z liczbą i jednym krokiem polecenia Cofnij. |
| `LENGTHEN` | `LEN` | Wydłuża lub skraca linie, łuki i polilinie: o wartość, o procent, do sumy albo przeciągając (LEN) |
| `LIBRARY` | `LIB` | Panel biblioteki: umieszczanie elementów, sprawdzanie aktualizacji, atrybucje |
| `LIMITS` |  | Ustawia granice rysunku: ON (włącz), OFF (wyłącz) albo lewy dolny i prawy górny narożnik. Przy włączonych granicach punkty poza nimi są odrzucane |
| `LINE` | `L` | Proste odcinki, każdy jako osobny obiekt |
| `LINETYPE` | `LT`, `CELTYPE` | Typ linii, jaki dostają nowe obiekty (wg warstwy, wg bloku albo nazwany) |
| `LINKVIEWS` | `SYNCVIEWS` | Przesuwa i powiększa wszystkie panele razem (podział ekranu), aby porównać dwa rysunki lub rewizje |
| `LISPEDIT` | `VLIDE` | LISPEDIT (lub VLIDE) otwiera edytor LISP: okno do pisania, wczytywania i wypróbowywania procedury. Wczytanie do rysunku odczytuje każdą formę, tak jak wczytanie pliku poleceniem APPLOAD, i tworzy jej polecenia. Uruchom zaznaczenie wykonuje zaznaczone formy albo formę, w której stoi kursor. Konsola pokazuje, co wypisała procedura, oraz każdy błąd z jego wierszem. Pasujący nawias jest oznaczany podczas pisania, a Enter wcina nowy wiersz. Nowy, Otwórz i Zapisz działają na pliku .lsp. Listy obok tekstu pokazują funkcje, które procedura definiuje, te, które wywołuje, a których ten LISP jeszcze nie ma, oraz wszystkie jej funkcje. Okno nie blokuje rysunku, więc procedura może prosić o punkty; Stop lub Esc kończy działającą procedurę. |
| `LIST` | `LI`, `LS` | Opisuje obiekty |
| `LTSCALE` | `LTS` | Skala typów linii rysunku (każda kreska i przerwa są mnożone przez nią) |
| `LWDISPLAY` | `LWT` | Pokazuje lub ukrywa grubości linii na ekranie (przycisk LWT na pasku stanu) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Grubość linii, jaką dostają nowe obiekty (wg warstwy, wg bloku, domyślna lub mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Warstwy mapy pod przestrzenią modelu: układ współrzędnych rysunku, kafelki, WMS, WMTS, ArcGIS, obrazy |
| `MASSPROP` |  | MASSPROP: właściwości przekroju regionów i zamkniętych obiektów: pole, obwód, środek ciężkości, momenty i iloczyn bezwładności, promienie bezwładności oraz osie główne. Dokładne dla linii i łuków. Może zapisać raport do pliku tekstowego. |
| `MATCHPROP` | `MA`, `PAINTER` | Dopasowuje właściwości: kopiuje warstwę, kolor i inne cechy jednego obiektu na inne (MA) |
| `MEASURE` | `ME` | MEASURE (ME): znacznik co podaną długość wzdłuż linii, łuku, okręgu, polilinii, splinu lub elipsy, od końca najbliższego wskazaniu. Punkty albo, z opcją Blok, blok przy każdym znaczniku. |
| `MEASUREGEOM` | `MEA` | Mierzy odległość, promień, kąt lub pole (MEA) |
| `MINSERT` |  | MINSERT: umieszcza blok w wierszach i kolumnach za jednym razem. Każdy jest osobnym odwołaniem, więc można przesunąć lub usunąć dowolny z nich. |
| `MIRROR` | `MI` | Odbija lustrzanie obiekty względem linii |
| `MLEADER` | `MLD`, `MLEAD` | Wielokrotny odnośnik: strzałka, odnośnik i notatka jako jeden obiekt (MLD) |
| `MLEADERALIGN` | `MLA` | Ustawia wielokrotne odnośniki w linii z jednym z nich wzdłuż kierunku, w równych odstępach lub rozłożone między dwoma punktami (MLA) |
| `MLEADERCOLLECT` | `MLC` | Zbiera kilka wielokrotnych odnośników w jeden: ich bloki w wierszu lub kolumnie albo ich notatki jedna pod drugą (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje linie odnośników do wielokrotnego odnośnika lub je usuwa; przełącza jego zawartość między tekstem a blokiem (MLE) |
| `MLINE` |  | Rysuje równolegle linie razem, połączone w narożnikach. |
| `MOVE` | `M` | Przesuwa obiekty o punkt bazowy i drugi punkt |
| `MSPACE` | `MS` | Pracuj na modelu przez okno widokowe otwartego arkusza (albo kliknij dwukrotnie wewnątrz okna widokowego). |
| `MTEXT` | `MT`, `T` | Tekst akapitowy: przeciągnij jego szerokość, a potem pisz na miejscu; Enter zaczyna nowy akapit (T) |
| `MVIEW` | `MV` | Okno widokowe na model, na układzie |
| `NAMEDVIEW` | `NV`, `VIEWS` | Widoki nazwane: zapisuje widok na ekranie (lub okno) pod nazwą i wraca do niego (NV) |
| `NCOPY` |  | Kopiuje obiekty z odwołania do bloku lub z dołączonego rysunku do rysunku, bez rozbijania go. |
| `NEARBY` |  | Mówi, co leży blisko kursora, najbliższe najpierw, z odległością i stroną. |
| `NEW` |  | Rozpoczyna nowy rysunek |
| `OBJECTSCALE` | `OBJSCALE` | Skale opisu tekstu i wymiarów opisowych: dodaje skalę, usuwa jedną, dodaje bieżącą skalę albo je wypisuje (każde okno widokowe pokazuje je w rozmiarze dla własnej skali) |
| `OBJOUT` |  | Eksportuje model 3D jako OBJ |
| `OFFSET` | `O` | Równoległe kopie w odległości |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: jak OFFSET zamyka szczeliny na zewnętrznych narożnikach polilinii. 0 wydłuża odcinki, 1 dodaje łuk, 2 dodaje prosty ścięcie. Zachowywane na czas tej sesji. |
| `OLELIST` | `OLES` | Wypisuje obiekty OLE, które zawiera rysunek, i umieszcza kopię obrazu jednego z nich tam, gdzie wybierzesz |
| `OPEN` |  | Otwiera DWG lub DXF z tego komputera |
| `OPENIN3D` |  | Otwiera ten rysunek w aplikacji do modelowania 3D, w nowej karcie (nic nie jest przesyłane) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otwiera menu przyciągania do obiektów: wybierz, które przyciągania są włączone. Także kliknięcie prawym przyciskiem na Przyciąganie na pasku stanu. |
| `OVERKILL` |  | Usuwa zduplikowane obiekty i scala nakładające się lub stykające się końcami linie i łuki, w ramach tolerancji. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametry: parametry użytkownika i więzy wymiarowe w jednej tabeli |
| `PARTSLIST` | `PLIST` | Tabela listy części każdej normowej części i przekroju stalowego umieszczonych z Biblioteki |
| `PASTEAREA` | `PAREA` | Wkleja obszar skopiowany w MarkupCraft (Kopiuj obszar) w jego prawdziwym rozmiarze, jako obraz. |
| `PASTEBLOCK` |  | PASTEBLOCK: wkleja to, co skopiowałeś, jako jeden blok. Blok dostaje własną nazwę; RENAME nadaje mu twoją. |
| `PASTECLIP` |  | Wkleja ze schowka: podąża za kursorem, kliknij, gdzie ma trafić (Ctrl+V) |
| `PASTEORIG` |  | Wkleja ze schowka we współrzędnych, z których został skopiowany (Ctrl+Shift+V) |
| `PDF` |  | Wskazuje CadCraft pliki PDF, których używają podkłady rysunku |
| `PDFADJUST` |  | Zmienia wyblaknięcie, kontrast, monochromię albo wyłącza podkład PDF |
| `PDFATTACH` | `PDFATT` | Dołącza stronę PDF jako podkład (PDFATTACH) |
| `PDFCLIP` |  | Przycina podkład PDF do prostokąta lub wielokąta |
| `PDFIMPORT` | `PDFIM` | Zamienia linie, wypełnienia i tekst strony PDF w obiekty rysunku (PDFIMPORT) |
| `PDFLAYERS` |  | Włącza lub wyłącza warstwy podkładu PDF |
| `PEDIT` | `PE` | Edytuje polilinię: zamknij, otwórz, połącz, szerokość, krzywa dopasowana, krzywa spline, usuń krzywiznę, generowanie typu linii, odwróć; linie, łuki i splajny można zamienić na polilinie |
| `PHOTOSKETCH` | `PSK` | Zamienia zdjęcie szkicu odręcznego na papierze w linie i łuki w skali, prostując perspektywę i nadając każdemu kolorowi pisaka własną warstwę. |
| `PICKSTYLE` |  | PICKSTYLE: czy zaznaczenie jednego obiektu grupy zaznacza całą grupę (1, ustawienie początkowe), czy tylko ten obiekt (0). Zachowywane na czas tej sesji. |
| `PLAN` |  | Obraca widok tak, aby oś X UCS (bieżący UCS, zapisany UCS lub Świat) była pozioma na ekranie. Nic w rysunku się nie przesuwa. |
| `PLINE` | `PL` | Polilinia z odcinków linii i łuków |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Wydruk do PDF: układ albo model w skali |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele stylów wydruku: ustawia, jak każdy kolor drukuje się (kolor, czarny, szary, tusz, grubość linii); zapisywane z rysunkiem (STYLESMANAGER) |
| `POINT` | `PO` | Obiekty punktowe |
| `POINTCLOUD` | `PC` | Dołączona chmura punktów: przekrój, wysokość, grubość, kolor, rozmiar, widoczna, powiększenie, odłącz |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Dołącza chmurę punktów (LAS, LAZ, XYZ, PTS) pod rysunkiem |
| `POLARANG` |  | Krok śledzenia biegunowego w stopniach (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Wielokąt foremny |
| `PRESSPULL` |  | Wypycha lub wyciąga ścianę bryły (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otwiera panel Właściwości (także Ctrl+1 lub podwójne kliknięcie obiektu) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Składa panel Właściwości do krawędzi okna |
| `PSPACE` | `PS` | Wychodzi z okna widokowego, w którym pracujesz, i wraca do arkusza (albo kliknij dwukrotnie poza nim). |
| `PUBLISH` | `-PUBLISH` | Drukuje kilka lub wszystkie arkusze do jednego PDF (strona i zakładka na każdy arkusz) |
| `PURGE` | `PU` | Usuwa definicje bloków, których nic nie używa |
| `QDIM` |  | Szybki wymiar: wymiaruje kilka obiektów naraz (ciągły, od linii bazowej, zygzakowy, współrzędnych, promień lub średnica) |
| `QPMODE` | `QP` | Szybkie właściwości przy kursorze włączone lub wyłączone |
| `QSELECT` | `QS` | Szybkie zaznaczanie: każdy obiekt danego typu, którego warstwa, kolor, rozmiar lub nazwa pasuje (QS) |
| `RASTERSNAP` |  | Włącza lub wyłącza przyciąganie do linii zeskanowanych arkuszy. |
| `RAY` |  | Półprosta: linia konstrukcyjna z punktu, nieskończona w jedną stronę. |
| `RECOVER` |  | Otwiera uszkodzony DXF lub DWG: pomija to, czego nie da się odczytać, zamiast odrzucać plik, mówi, co pominięto, a potem sprawdza i naprawia rysunek tak jak AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zamknięta polilinia z dwóch narożników |
| `REDLINE` | `RDL` | Redline do rewizji: odczytuje pakiet redline MarkupCraft, akceptuje lub odrzuca każdą zmianę, oznacza zaakceptowane chmurą z dziennikiem rewizji i zapisuje plik odpowiedzi (RDL) |
| `REDO` |  | Ponawia to, co zostało cofnięte |
| `REFCLOSE` |  | Kończy edycję bloku na miejscu: zapisuje go albo odrzuca zmiany |
| `REFEDIT` |  | Edytuje blok na miejscu, tam gdzie znajduje się jego odwołanie, z resztą rysunku wyblakłą; REFCLOSE go zapisuje |
| `REGEN` | `RE` | Odbudowuje to, co jest narysowane w tej karcie, z rysunku |
| `REGENALL` | `REA` | Odbudowuje to, co jest narysowane w każdej karcie, panelu i otwartym rysunku |
| `REGION` | `REG` | REGION (REG): tworzy płaskie obszary (regiony) z zamkniętych obiektów albo z linii, łuków i polilinii, które zamykają pętlę końcami. UNION, SUBTRACT i INTERSECT łączą wtedy regiony, a MASSPROP podaje ich właściwości przekroju. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Rejestruje kilka skanów: umieszcza je w jednej ramce według wskazanych par punktów lub celów, dopracowuje metodą ICP, eksportuje jeden plik LAS lub E57 |
| `REINIT` |  | Wczytuje ponownie plik skrótów |
| `RENAME` | `-RENAME`, `REN` | Zmienia nazwę warstwy lub bloku (każdy obiekt lub odwołanie podąża za zmianą) |
| `REVCLOUD` | `RC` | Chmura rewizji: obrysowuje prostokąt, wielokąt, ścieżkę odręczną lub obiekt (RC) |
| `REVOLVE` | `REV` | Obraca zamknięte obiekty 2D wokół osi w bryły (3D) |
| `ROTATE` | `RO` | Obraca obiekty wokół punktu bazowego |
| `SAMPLES` | `SAMPLE` | Otwiera jeden z przykładowych rysunków CadCraft (zestaw architektoniczny, rysunek powykonawczy), aby się od nich uczyć |
| `SAVE` | `QSAVE` | Pobiera rysunek w jego formacie (DWG lub DXF) |
| `SAVEAS` |  | Pobiera rysunek jako DWG lub DXF: wybierz który |
| `SAYSEL` |  | Mówi, co jest zaznaczone, po jednym zdaniu na obiekt. |
| `SCALE` | `SC` | Skaluje obiekty względem punktu bazowego |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, edytuje i usuwa własne skale rysunku; pojawiają się na listach skal okien widokowych i wydruku oraz są zapisywane w pliku (SCALELIST) |
| `SCANALIGN` | `SCL` | Wyrównuje zeskanowany arkusz do dwóch punktów: przesuwa, obraca i, jeśli wybierzesz, skaluje go. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Wstawia zeskanowany rysunek: PNG, JPEG lub TIFF (jedną stronę albo wszystkie strony pliku wielostronicowego) albo stronę PDF, która jest obrazem. |
| `SCANCLEAN` | `SCC` | Zmienia zeskanowany arkusz na czarno-biały i usuwa plamki. |
| `SCANCROP` | `SCR` | Przycina zeskanowany arkusz do okna. |
| `SCANDESKEW` | `SCD` | Znajduje kąt, pod jakim leżą długie linie zeskanowanego arkusza, i ustawia arkusz prosto, gdy zaakceptujesz ten kąt. |
| `SCANERASE` | `SCE` | Usuwa obszar zeskanowanego arkusza: prostokąt, wielokąt lub lasso. |
| `SCANINFO` | `SCI` | Pokazuje oryginalny plik zeskanowanego arkusza i kroki wykonane od tego czasu. |
| `SCANSCALE` | `SCS` | Skaluje zeskanowany arkusz: wskaż na nim dwa punkty i wpisz prawdziwą odległość między nimi. |
| `SCANTRACE` | `SCT` | Obrysowuje zeskanowany arkusz w linie i łuki na nowej warstwie, z tolerancją, którą ustawisz. Tekst i kreskowanie pozostają jako rastr. |
| `SELECT` |  | Zaznacza obiekty teraz (dla P, Poprzednie, w następnym poleceniu) |
| `SELECTALL` | `AI_SELALL` | Zaznacza każdy obiekt, który można edytować w tej karcie (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Zaznacza każdy obiekt podobny do wskazanych: ten sam typ, warstwa i kolor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Pokazuje panel Zestaw arkuszy: arkusze z wielu rysunków, ponumerowane, opublikowane jako jeden PDF. |
| `SHORTCUTS` | `KEYS` | Przypisuje dowolnemu poleceniu własny klawisz (Ctrl lub Alt z literą albo wolny klawisz funkcyjny), zapisywany w tej przeglądarce lub aplikacji desktopowej. |
| `SHXFONTS` | `SHX` | Wskazuje CadCraft czcionki SHX z folderu lub plików, aby style tekstu, które je nazywają, rysowały nimi (wypisz, usuń, odwróć) |
| `SKETCHFIX` | `SKF` | Rysuje szkic odręczny; każde pociągnięcie staje się czystą linią, okręgiem, łukiem, prostokątem lub polilinią, wyprostowaną i połączoną z innymi. |
| `SKETCHLIVE` | `SKL` | Szkicuje piórem: każde pociągnięcie staje się precyzyjną linią, okręgiem, łukiem lub prostokątem, gdy podniesiesz pióro, przyciągniętym do rysunku, z rozmiarem do wpisania. |
| `SPLINE` | `SPL` | Rysuje spline przez punkty (albo z wielokątem sterującym) lub zamienia polilinię w spline |
| `SPLINEDIT` | `SPE` | Edytuje spline: punkty dopasowania, punkty sterujące i wagi, otwiera lub zamyka go, odwraca go albo zamienia na polilinię |
| `SPLIT` |  | Dzieli obszar rysunku na panele (jak VPORTS na modelu; także z arkusza) |
| `STEELMEMBER` | `SMEMBER` | Element stalowy w 3D z przekroju normowego: dwa punkty (belka) albo punkt bazowy i wysokość (Słup) |
| `STLOUT` |  | Eksportuje model 3D jako STL (milimetry) |
| `STRETCH` | `S` | Rozciąga: przeciągnij okno przecięcia nad końcami, aby przesunąć; to, co jest w środku, się przesuwa, reszta zostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Style tekstu: czcionka, wysokość, szerokość i pochylenie, jakie przyjmuje nowy tekst (okno dialogowe; -STYLE w wierszu poleceń) |
| `SUBTRACT` | `SU` | Odejmuje bryły od innych (3D) albo regiony 2D od regionów |
| `SWBOUT` | `SWMACRO` | Pobiera makro dla SolidWorks (.swb), które odbudowuje model jako jeden szkic z więzami |
| `SWEEP` |  | Przeciąga zamknięte obiekty 2D wzdłuż ścieżki (linia, polilinia, łuk, okrąg) w bryły (3D) |
| `TABLE` | `TB` | Tworzy tabelę: wiersze i kolumny albo z komórek arkusza kalkulacyjnego w schowku lub z pliku CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edytuje tabelę: wpisuje w komórce, wstawia i usuwa wiersze i kolumny, rozmiary, scalone komórki, wyrównanie |
| `TABLEEXPORT` |  | Zapisuje to, co pokazuje tabela, jako plik CSV |
| `TABLEPASTE` | `PASTETABLE` | Tworzy tabelę z komórek arkusza kalkulacyjnego w schowku |
| `TABLESTYLE` | `TS` | Style tabel: wysokości tekstu, wyrównanie, margines i obramowanie wierszy tytułu, nagłówka i danych |
| `TAGS` |  | Etykiety na odwołaniach do bloków: definiuje etykietę (rodzaj, dozwolone wartości, bloki, do których się stosuje), ustawia ją na zaznaczonych odwołaniach i wypisuje je jako zestawienie, które można zapisać jako CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst jednowierszowy; Enter zaczyna następny wiersz |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edytuje tekst na miejscu: wskaż tekst (albo kliknij go dwukrotnie) (ED) |
| `TEXTMASK` | `TMASK` | Umieszcza maskę tła za tekstami (tło rysunku lub kolor) albo ją usuwa. |
| `TEXTTOFRONT` |  | Przenosi cały tekst, wymiary i odnośniki na pierwszy plan, przed wszystko inne. |
| `TOOLBAR` |  | Wybiera, co pokazują przyciski paska narzędzi: ikony i tekst, same ikony albo sam tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Umieszcza pasek narzędzi u góry, na dole, z lewej lub z prawej okna |
| `TOOLBARROWS` |  | Wybiera, ile wierszy używa pasek narzędzi: dopasuj zawijając, 2 lub 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Ustawia paski nad rysunkiem jako standardowe lub kompaktowe |
| `TOUCHCROSSHAIR` | `TCX` | Przesunięty celownik do rysowania palcem: jeden palec przesuwa celownik, który znajduje się nad nim i obok, dzięki czemu palec nie zasłania punktu wskazania. Podniesienie palca nic nie wskazuje; przycisk Kliknij albo dotknięcie drugim palcem wskazuje w miejscu celownika, a przytrzymanie Kliknij podczas ruchu przeciąga. Długie przytrzymanie albo przycisk Enter to Enter. Dwa palce przesuwają i powiększają. Opcje: ON, OFF, Auto (włączone tylko tam, gdzie palec jest jedynym wskaźnikiem), Odległość, Strona. |
| `TOUR` | `TUTORIAL` | Uruchamia ponownie sześciokrokowe wprowadzenie do pierwszego rysunku |
| `TRIM` | `TR` | Przycina obiekty do miejsca, w którym przecinają je inne: kliknij fragment, przeciągnij przez kilka albo Shift+klik, aby wydłużyć |
| `TRIMEXTENDMODE` |  | Jak zaczynają się TRIM i EXTEND: 1 Szybki (każdy obiekt jest krawędzią tnącą lub granicą), 0 Standardowy (najpierw wybierz krawędzie) |
| `TTR` |  | Okrąg styczny do dwóch obiektów, z podanym promieniem (tak samo jak CIRCLE T) |
| `TURNLEFT` |  | Obraca widok o 90° w lewo (przeciwnie do ruchu wskazówek zegara): UCS Z -90, a widok podąża. Nic w rysunku się nie przesuwa. |
| `TURNRIGHT` |  | Obraca widok o 90° w prawo (zgodnie z ruchem wskazówek zegara): UCS Z 90, a widok podąża. Nic w rysunku się nie przesuwa. |
| `TURNWORLD` |  | Powrót do świata: UCS Świat, a widok znów jest poziomy. |
| `TXT2MTXT` | `T2M` | Łączy teksty jednowierszowe w jeden tekst akapitowy, od góry do dołu. |
| `UCS` |  | Twój własny układ współrzędnych: początek i oś X (początek, kąt Z, 3 punkty, Obiekt, Poprzedni, Świat, Nazwany). Wpisywane punkty, ortogonalnie, śledzenie biegunowe, siatka i nowy tekst za nim podążają; widok obraca się tak, aby jego oś X była pozioma. Nic w rysunku się nie przesuwa. |
| `UNDO` | `U` | Cofa ostatnie polecenie |
| `UNGROUP` |  | UNGROUP: rozbija grupy. Zaznacz obiekty grup albo podaj Nazwę. Obiekty pozostają w rysunku. |
| `UNION` | `UNI` | Łączy bryły w jedną (3D) albo regiony 2D w jeden region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponownie pokazuje każdy obiekt ukryty przez ISOLATEOBJECTS lub HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Jak pokazuje się i wpisuje długości: dziesiętne, stopy i cale, ułamkowe (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Oblicza pola ponownie i wybiera, kiedy same się aktualizują |
| `USDOUT` |  | Eksportuje model 3D jako USD (tekst .usda, binarny .usdc lub pakiet .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardowe widoki 3D, perspektywiczne lub równoległe (3D) |
| `VIEWBASE` | `FLATSHOT` | Umieszcza płaski widok 2D brył 3D (z przodu, z góry, z boku lub izometryczny, linie ukryte przerywane) na arkuszu lub w modelu |
| `VIEWLABEL` | `VL` | Tytuł widoku na arkuszu, który pokazuje nazwę widoku jego okna widokowego i zmienia się wraz z nim. |
| `VOICE` |  | Włącza lub wyłącza polecenia mówione. Są rozpoznawane na tym komputerze. |
| `VPCLIP` |  | Przycina okno widokowe arkusza do zamkniętego obiektu lub narysowanego wielokąta; Usuń przywraca prostokąt |
| `VPLAYER` |  | Zamraża lub odmraża warstwy tylko w niektórych oknach widokowych (Zamroź, Odmroź, Resetuj) i wybiera, które warstwy nowe okna widokowe zaczynają zamrożone (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dzieli obszar rysunku na panele, każdy z własnym widokiem (na arkuszu: okno widokowe, jak MVIEW) |
| `VPVIEW` |  | Ustawia, co pokazuje okno widokowe: wybierz okno na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Styl wizualny widoku 3D: cieniowany, krawędzie, linie ukryte, model szkieletowy, rentgen |
| `WALL` | `WA` | Rysuje ściany 2D jak polilinię. Łączą się i przenoszą drzwi i okna. |
| `WALLARC` | `WARC` | Rysuje łuk ścian. Ściany w rzucie są proste, więc łuk rysuje się jako krótkie proste ściany (po 15 stopni każda), które się łączą. |
| `WALLDELSEG` |  | Usuwa fragment ściany między dwoma punktami. To, co zostaje, pozostaje jako jedna lub dwie ściany. |
| `WALLDIM` |  | Wpisz nową wartość wymiaru: ściana na jego dalszym końcu przesuwa się prostopadle do siebie, ściana na pierwszym końcu pozostaje, a połączone z nią ściany podążają. |
| `WALLDISJOIN` |  | Wskaż ścianę blisko jednego końca, aby zabronić połączeń na tym końcu: koniec rysuje się prosto i nic za nim nie podąża. Wskaż ponownie, aby je dopuścić. |
| `WALLGRID` |  | Blokuje ścianę do linii siatki: wzdłuż niej albo jednym końcem na niej. Przesuń linię poleceniem GRIDMOVE, a ściana podąży. |
| `WALLHOLD` |  | Wyrównuje i blokuje: ściana zachowuje swoje miejsce względem innej ściany (na jej linii albo w odległości, jaką ma). Jeśli jedna się przesunie, druga podąży. |
| `WALLHOLDDIM` |  | Blokuje odległość między dwiema równoległymi ścianami. Jeśli jedna się przesunie, druga podąży, aby ją utrzymać. |
| `WALLHOLDS` |  | Wypisuje blokady ścian. |
| `WALLJOINS` |  | Nadaje każdej ścianie starszego rysunku identyfikator i zapisuje połączenia między nimi. Dzieje się to także przy pierwszej zmianie, którą wykonasz. |
| `WALLJOINSTYLE` |  | Kliknij narożnik, w którym dwie ściany stykają się końcami, aby zmienić sposób jego rysowania: na ukos, na styk, ucięcie prostopadłe. T przełącza, która ściana przechodzi na wylot. |
| `WALLOFFSET` | `WO` | Przesuwa ścianę prostopadle do siebie o odległość (połączone z nią ściany podążają) albo tworzy kopię w tej odległości. |
| `WALLPICK` |  | Tworzy ściany na linii lub polilinii w rysunku, z połączonymi z nią liniami, jeśli powiesz Tak. |
| `WALLPOLY` | `WP` | Rysuje ściany wokół wielokąta foremnego o 3 do 64 bokach, jak POLYGON. |
| `WALLRECT` | `WR` | Rysuje cztery połączone ściany z dwóch przeciwległych narożników, jak RECTANG. |
| `WALLREJOIN` |  | Ponownie łączy dwie części ściany w jedną. Pierwsza zachowuje swoje miejsce w rysunku. |
| `WALLROT` |  | Rysuje cztery połączone ściany jako prostokąt obrócony pod dowolnym kątem: pierwszy bok, potem jak daleko na zewnątrz. |
| `WALLSPLIT` | `WS` | Dzieli ścianę na dwie w punkcie albo tam, gdzie przecina ją inna ściana. Części pozostają połączone, chyba że poprosisz o przerwę lub wolne końce. Drzwi i okna idą z częścią, do której należą. |
| `WALLSPLITGAP` |  | Dzieli ścianę, zostawiając przerwę: wpisz przerwę, wskaż ścianę, a potem punkt. Części mają wolne końce i można je ponownie połączyć. |
| `WALLSTRETCH` |  | Rozciąga oknem: końce ścian w nim się przesuwają, ściany w całości w środku przesuwają się w całości, a ściany dochodzące do ich boków przesuwają się razem z nimi. |
| `WALLTAN` |  | Kontynuuje ścianę łukiem, który odchodzi od niej wzdłuż ściany (rysowanym jako krótkie proste ściany). |
| `WALLTRACE` |  | Tworzy ściany wokół najmniejszego zamkniętego obszaru linii i ścian wokół punktu, który klikniesz. |
| `WALLUNHOLD` |  | Zdejmuje blokady ze ściany (oraz blokady innych ścian do niej). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapisuje blok, kilka obiektów albo cały rysunek do nowego pliku DWG lub DXF (W) |
| `WEDGE` | `WE` | Klin: dwa narożniki i wysokość; opada od pierwszego narożnika (3D) |
| `WHEREAMI` | `WHERE` | Mówi, gdzie jest kursor. |
| `WHOHAS` |  | Mówi, kto ma otwarty rysunek. CadCraft Studio trzyma mały plik blokady obok każdego otwartego rysunku (Plan.dwg.cclock: kto, od kiedy, która wersja) i usuwa go przy zamknięciu. Opcje: Bieżący (otwarty rysunek), Plik (wybierz jeden), FOlder (każdy rysunek w folderze, który jest gdzieś otwarty; to także pozwala Studio trzymać pliki blokad w tym folderze), Ścieżka (wpisz jedną), Nazwa (nazwa, którą widzą inni). Blokada nieodświeżana przez pięć minut jest uznawana za nieaktualną. Niedostępne w przeglądarce. |
| `WINDOW` | `WN` | Umieszcza okno w ścianie. |
| `XATTACH` | `XA` | Dołącza inny DWG lub DXF do tego rysunku, pokazywany tylko do odczytu (XREF wypisuje je i ponownie wczytuje) |
| `XCLIP` | `XC` | Przycina odwołania do bloków i dołączone rysunki do prostokąta lub wielokąta albo usuwa przycięcie. |
| `XLINE` | `XL` | Linia konstrukcyjna, nieskończona w obie strony: przez dwa punkty, pozioma, pionowa, pod kątem, dwusieczna kąta albo odsunięta od linii. |
| `XREF` | `XR`, `-XREF` | Dołączone rysunki (odwołania zewnętrzne): wypisz, dołącz, wczytaj ponownie, związaj, odłącz |
| `ZOOM` | `Z` | Zasięg albo okno |
