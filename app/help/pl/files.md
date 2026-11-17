---
title: Pliki: co się otwiera, co się zapisuje
summary: Formaty, które CadCraft otwiera, zapisuje i eksportuje, co jest zachowywane lub konwertowane oraz dokąd trafiają pliki.
keywords: xclip, clip, granica xclip, zwiąż przycięte, dwg, dxf, pdf, r12, otwórz, zapisz, eksport, import, formaty, konwersja, pobierz, saveas, dxfout, zapisz jako, zapis dwg, format, qsave, xref, xattach, dołączony rysunek, odniesienie zewnętrzne, zwiąż, przeładuj, odłącz
from: b8c5778d
---

## Na pierwszy rzut oka

| Format | Otwieranie | Zapisywanie | Uwagi |
|---|---|---|---|
| DXF (tekstowy lub binarny, dowolna wersja) | Tak | Tak, jako DXF R12, DXF 2000 lub DXF 2000 (binarny) | Binarny DXF otwiera się jak tekstowy i zapisuje z powrotem jako binarny. |
| DWG | Tak | Tak, jako DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 lub 2018) | Odczytywany i zapisywany przez własną bibliotekę DWG CadCraft (pliki AutoCAD R13 do 2018). Twój DWG nigdy nie zostaje zmieniony. Uszkodzone pliki lub wersje, których czytnik nie obsługuje, są odrzucane z komunikatem. |
| PDF | Wprowadza stronę: jako podkład lub jako obiekty ([Podkłady PDF](topic:pdf-underlay)) | Tak, przez wydruk | Wektorowy PDF arkusza lub modelu w skali. |

Każdy otwarty rysunek (albo rozpoczęty od {{ui:Nowa}}) dostaje własną kartę nad obszarem rysunku; nowy rysunek, którego nikt jeszcze nie dotknął, zostaje użyty zamiast dodawania karty. Kliknij kartę, aby się przełączyć, jej {{ui:×}}, aby ją zamknąć (CadCraft najpierw zapyta, jeśli są niezapisane zmiany), albo ułóż otwarte rysunki obok siebie: zobacz [Podział ekranu](topic:split-screen).

## Otwieranie rysunku

- Naciśnij {{key:Mod+O}}, kliknij {{ui:Otwórz}} albo wpisz `OPEN`, a następnie wybierz plik.
- Albo przeciągnij plik `.dwg` lub `.dxf` na obszar rysunku.

Plik jest odczytywany w przeglądarce. Nigdzie nie jest wysyłany. Historia podaje, ile obiektów i warstw zostało wczytanych i ile to zajęło, a sekcja {{ui:Rysunek}} w lewym panelu pokazuje format, na przykład „DWG 2018 (AC1032)”.

Czytnik DWG jest częścią CadCraft i jest pobierany wraz z pierwszym otwieranym plikiem DWG po załadowaniu strony (kilkaset KB), więc nie ma osobnego pobierania do czekania. Czyta plik w tle, więc strona dalej reaguje, gdy duży DWG się otwiera.

DXF jest czytany w porcjach po około 4 MB, nigdy jako jeden blok tekstu, więc DXF powyżej 512 MB też się otworzy. O ograniczeniu decyduje pamięć komputera: podczas otwierania DXF spodziewaj się zużycia około 16 do 20 razy większego od rozmiaru pliku (w naszym teście DXF o rozmiarze 100 MB z około 690 000 obiektami zużył około 1,5 GB).

### Co wchodzi

- Linie, łuki, okręgi, polilinie (z odcinkami łukowymi), elipsy, punkty, tekst i tekst wieloliniowy, bryły (solids), kreskowania (standardowe wzory rysowane jako ich linie, inne jako płaski ton), odwołania do bloków z ich atrybutami (wartości, które możesz edytować; zobacz [Atrybuty bloku](topic:attributes)), wymiary oraz układy z ich oknami widokowymi.
- Splajny wchodzą jako splajny (stopień, punkty kontrolne, węzły, wagi, punkty dopasowania); zobacz [Splajny i polilinie](topic:splines).
- Wielokrotne odnośniki z jedną linią odnośnika i tekstem wchodzą jako wielokrotne odnośniki CadCraft, które możesz edytować (zobacz {{cmd:MLEADER}}). Inne (z blokiem, kilkoma liniami odnośnika lub krzywymi liniami) są rysowane tak, jak narysował je inny program, i przesuwają się jako jeden obiekt; historia podaje, ile ich jest.
- Obrazy (images) pokazują się jako ramka z nazwą pliku obrazu, dopóki nie podasz CadCraft pliku poleceniem {{cmd:IMAGE}}: zobacz [Obrazy w rysunku](topic:pictures#show-the-pictures-a-dwg-uses). Wymazania (wipeout) pokazują się jako ich ramka, a to, co jest pod nimi, pozostaje widoczne.
- Tabele w DWG wchodzą tak, jak narysował je inny program.
- Ściany 3D w przestrzeni modelu wchodzą na karcie {{ui:3D}}, a nie jako obiekty 2D; tak samo te w blokach, raz na odwołanie do bloku w modelu. W bloku i na arkuszu są również rysowane płasko, jako kontury. Zobacz [Model w 3D](topic:3d-solids).
- Warstwy zachowują swój kolor oraz ustawienia włączenia, zamrożenia, blokady i drukowania. DEFPOINTS nigdy się nie drukuje.
- Wymiary stają się prawdziwymi, edytowalnymi wymiarami CadCraft tam, gdzie można odczytać ich punkty. Najpierw pokazują się dokładnie tak, jak narysował je inny program; gdy tylko zmienisz któryś, CadCraft rysuje go od nowa w swoim stylu.
- Każdy układ staje się kartą arkusza. W innym programie każdy układ ma ukryte pierwsze okno widokowe, które jest samym arkuszem; CadCraft je pomija.

### Czego jeszcze nie wczytuje

Wszystko, czego CadCraft nie potrafi narysować, jest liczone, a nie zgadywane. Pole „Informacje o pliku” w lewym panelu wymienia to jako „Jeszcze nie pokazano:” wraz z każdym rodzajem obiektu i ich liczbą. Typowe przypadki to tabele w DXF, siatki (meshes) i bryły 3D w blokach. Bryły 3D, regiony i ciała w przestrzeni modelu pokazują się na karcie 3D (zobacz [Model w 3D](topic:3d-solids#solids-from-other-programs)). Okna widokowe obrócone w pliku pokazują się obrócone, tak jak tam, i zachowują obrót przy zapisie; tak samo bieżący UCS, nazwane UCS i obrócony widok.

Tekst jest rysowany jedną czcionką w stylu Helvetica. Etykieta, która mieści się w jednym wierszu w węższej czcionce pierwotnego programu, może zawinąć się w dwa wiersze w CadCraft.

## Zapisywanie

Są trzy sposoby zapisu. Każdy z nich pobiera kopię.

- **Zapisz**: naciśnij {{key:Mod+S}}, kliknij {{ui:Zapisz}} albo wpisz `SAVE` (także `QSAVE`). Zapisuje w formacie rysunku: DWG, jeśli otworzyłeś DWG, DXF, jeśli otworzyłeś DXF. DWG zachowuje wersję, w której przyszedł (plik 2018 zapisuje się jako 2018). Nowy rysunek używa formatu i wersji DWG, które wybrałeś ostatnio w {{ui:Zapisz jako}} w tej przeglądarce; jeśli nigdy nie wybrałeś, to DWG w formacie AutoCAD 2000.
- **Zapisz jako**: naciśnij {{key:Mod+Shift+S}}, kliknij {{ui:Zapisz jako}} albo wpisz `SAVEAS`. Okno {{ui:Zapisz kopię jako}} oferuje {{ui:DWG}}, z listą {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 lub 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, każdy z nazwą pliku, jaką nada, oraz z bieżącym formatem i wersją rysunku już wybranymi. Kliknij {{ui:Zapisz}}, aby pobrać, albo {{ui:Anuluj}} (lub {{key:Esc}}), aby nic nie zapisać; historia wtedy mówi „Nie zapisano.” To, co wybierzesz, zostaje: {{key:Mod+S}} używa tego dla tego rysunku od tej pory, a nowe rysunki w tej przeglądarce zaczynają od tego.
- **DXFOUT**: wpisz `DXFOUT`. Zawsze pobiera kopię DXF R12, a następne {{key:Mod+S}} nadal zapisuje w formacie własnym rysunku.

Pobrany plik nazywa się `<nazwa rysunku>.dwg` lub `<nazwa rysunku>.dxf`. Każdy zapis to **nowe pobranie**; otwarty plik nigdy nie jest nadpisywany ani zmieniany. Historia to potwierdza, na przykład: „Zapisano kopię jako Plan.dwg (DWG (AutoCAD 2018)). Oryginalny plik Plan.dxf pozostał bez zmian.” Dla DXF pisze „(DXF R12, otwiera się w każdym programie CAD)”. Wiersze pod nim wymieniają wszystko, co zmieniło się po drodze.

Gdy CadCraft działa w aplikacji desktopowej, zapis działa jak w innych programach desktopowych: {{key:Mod+S}} zapisuje rysunek z powrotem do pliku, który otworzyłeś, w jego własnym formacie i wersji, a historia mówi, gdzie został zapisany. {{ui:Zapisz jako}} i eksporty pokazują systemowe okno zapisu, a plik `.dwg`, `.dxf` lub `.ccsheets`, który dwukrotnie klikniesz, otwiera się w CadCraft.

Dla PDF użyj wydruku zamiast tego (zobacz niżej).

## Co DWG zachowuje, a co zmienia

CadCraft zapisuje sam DWG, w przeglądarce, tą samą biblioteką DWG, którą czyta. Wybierz wersję w {{ui:Zapisz jako}}: format AutoCAD 2000 (wersja pliku AC1015) otwiera się w największej liczbie programów, także starych; nowsze formaty (2004, AC1018, do 2018, AC1032) zachowują też prawdziwe kolory. Nic nie jest wysyłane, a zapis DWG działa offline.

Każda wersja jest sprawdzana przez ponowny odczyt zapisanych plików trzema czytnikami DWG innych programów oraz samym CadCraft. Rysunek DWG z CadCraft nie był jeszcze otwierany w samym AutoCAD.

### Co DWG zachowuje

- Linie, łuki, okręgi, elipsy, punkty i polilinie z ich odcinkami łukowymi.
- Tekst jednowierszowy z jego wyrównaniem i współczynnikiem szerokości.
- Tekst wieloliniowy i zawijany jako tekst wieloliniowy. Inny program zawija go ponownie z tej samej szerokości.
- Kolory obiektów: wg warstwy, wg bloku, 255 standardowych kolorów oraz prawdziwe kolory w formacie 2004 i późniejszych.
- Warstwy z ich kolorem, typem linii, grubością linii i ustawieniami włączenia, zamrożenia, blokady i drukowania; własne typy linii, grubości i skale typów linii obiektów, wzory typów linii oraz skalę typu linii rysunku.
- Jednostki rysunku i format długości (dziesiętny, stopy i cale, ułamki…).
- Bloki z ich punktem bazowym i definicjami atrybutów, w tym niewidocznymi, stałymi i z wartościami domyślnymi.
- Odwołania do bloków z ich skalą, obrotem i wartościami atrybutów.
- Wypełnienia pełne oraz kreskowania wzorcowe z ich wzorem, skalą i kątem (linie samego wzoru, więc inne programy rysują te same linie co CadCraft).
- Wymiary jako prawdziwe wymiary: inne programy przeliczają je przy rozciąganiu. Każdy zachowuje swoje ustawienia (wysokość tekstu, rozmiar grotów, miejsca dziesiętne, format długości) i swój tekst, i niesie rysowaną kopię, którą ma każdy wymiar DWG.
- Arkusze (układy): każdy arkusz z rozmiarem papieru i jednostkami, tym, co na nim narysowano, oraz jego okna widokowe z widokiem i skalą.
- Nazwane widoki.
- Wielokrotne odnośniki jako wielokrotne odnośniki.
- Nazwy warstw i bloków tak, jak je wpisano, z wielkimi i małymi literami. (DXF R12 zapisuje je wielkimi literami.)

### Co DWG zmienia

Każda z tych zmian jest wymieniona w historii po zapisie, gdy dotyczy rysunku.

| W CadCraft | W zapisanym DWG |
|---|---|
| Prawdziwe kolory (wybrane próbnikiem kolorów) w formacie 2000 | Najbliższy standardowy kolor: format 2000 ma tylko 255. Zapisz jako 2004 lub nowszy, aby je zachować |
| Nazwane widoki arkusza | Widoki w przestrzeni papieru: DWG nie mówi, który arkusz, więc przy ponownym otwarciu pliku należą do pierwszego arkusza |
| Tekst wieloliniowy ze współczynnikiem szerokości | Zwykła szerokość liter: w DWG współczynnik szerokości dotyczy tylko tekstu jednowierszowego |
| Nazwy warstw lub bloków ze znakami, na które DWG nie pozwala | Zmienione: nazwa z dołączonego rysunku, jak `Base\|Walls`, staje się `Base$0$Walls` (tak nazywa ją związanie dołączonego rysunku), a inne znaki stają się `_` |

### Dlaczego R12 i co się konwertuje

Gdy zapisujesz jako DXF, CadCraft zapisuje DXF R12, wersję, którą może otworzyć każdy program CAD. Jest starsza niż niektóre funkcje, więc kilka rzeczy zapisuje się w prostszej postaci:

| W CadCraft | W zapisanym pliku R12 |
|---|---|
| Tekst wieloliniowy | Jeden obiekt tekstowy na wiersz |
| Elipsy | Polilinie odtwarzające elipsę |
| Kreskowania (z otwartych plików) | Same ich kontury |
| Prawdziwe kolory (wybrane próbnikiem kolorów) | Najbliższy standardowy kolor |
| Grubości linii i własne skale typów linii obiektów | Pominięte: R12 nie ma żadnej z nich (typy linii są zachowane) |
| Nazwy warstw i bloków | Zapisane wielkimi literami; spacje i inne znaki zamieniają się na `_`, a nazwy są obcinane do 31 znaków („Title block” staje się `TITLE_BLOCK`) |
| Warstwy ustawione jako niedrukowane | Inne programy wydrukują je (CadCraft pamięta to ustawienie, gdy rysunek ma arkusz) |
| Wymiary | Prawdziwe wymiary z ich własnym rysowanym blokiem, więc inne programy pokazują je tak, jak je widzisz |
| Wielokrotne odnośniki | Linie, grot i tekst, które rysują |
| Nazwane widoki | Zachowane, z nazwami wielkimi literami; widoki arkusza wracają na pierwszym arkuszu |
| Kilka arkuszy | Pierwszy arkusz to przestrzeń papieru, którą pokazuje każdy program; pozostałe są zachowane jako bloki o nazwach `CCLAYOUT_1`, `CCLAYOUT_2` … które CadCraft zamienia z powrotem w arkusze przy otwieraniu pliku |

Historia wymienia każde z tych, które dotyczyły rysunku.

:::tip
Aby pracować nad rysunkiem przez kilka dni, zapisz jako DXF i otwieraj ten DXF następnym razem. Wszystko, co CadCraft potrafi narysować, przetrwa tę drogę w obie strony, w tym wymiary, bloki i wszystkie arkusze.
:::

## Dołączone rysunki (odniesienia zewnętrzne)

{{cmd:XATTACH}} (`XA`, albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Dołącz rysunek (xref)}}) dołącza inny DWG lub DXF: wybierz plik, a następnie kliknij, gdzie ma trafić ({{key:Enter}} umieszcza go w 0,0). Wchodzi jako jeden blok o nazwie pochodzącej od pliku, w odpowiedniej skali, gdy oba rysunki mają różne jednostki. Jego warstwy i bloki zachowują swoje nazwy z nazwą dołączenia z przodu — `Plan|Walls`, `Plan|Door` — więc nigdy nie mieszają się z Twoimi: włączaj, wyłączaj, zamrażaj lub blokuj dołączone warstwy jak własne. Dołączenie jest tylko do odczytu: zmień inny rysunek i przeładuj go. To, co ustawisz na warstwach dołączenia (kolor, typ linii, grubość, włączenie, zamrożenie, blokada, drukowanie), zostaje zachowane przy przeładowaniu, przy zapisie rysunku jako DWG, gdy dołączenie nadal jest dołączeniem, i gdy inny rysunek dołącza ten.

{{cmd:XREF}} (`XR`): `?` wymienia dołączenia (wczytane lub nie, który plik, ile odwołań); `A` dołącza; `R` przeładowuje jedno z pliku (wskaż plik ponownie: przeglądarka nie może sama sięgnąć do Twoich folderów); `B` związuje jedno (staje się zwykłymi blokami i warstwami o nazwach `Plan$0$Walls`); `D` odłącza jedno (jego odwołania i warstwy znikają). Każde z nich to jeden krok cofnięcia.

{{cmd:XCLIP}} (`XC`) przycina odwołania do bloków i dołączenia: zaznacz je, `N` dla nowej granicy, a następnie `R` i dwa rogi albo `P` i punkty wielokąta ({{key:Enter}} zamyka go); `D` usuwa przycięcie. Widoczne i drukowane jest tylko to, co leży w środku, a przycięcie przesuwa się razem z odwołaniem. DWG i DXF 2000 zachowują przycięcia; DXF R12 zapisuje odwołanie w całości i mówi o tym. Gdy związujesz dołączenie, które ma przycięte odwołania, {{cmd:XREF}} `B` pyta: `A` związuje wszystko, `C` zachowuje tylko przycięte części każdego odwołania (linie i łuki są przecinane na granicy; teksty i zagnieżdżone bloki zostają, gdy ich punkt wstawienia leży wewnątrz).

Otwarty rysunek może dołączać pliki, których CadCraft nie widzi: podaje, ile ich nie jest wczytanych. Użyj {{cmd:XREF}}, `R` i wybierz każdy plik, aby je zobaczyć.

Przy zapisie wczytane dołączenie jest **związywane** z plikiem (inne programy widzą zwykłe bloki i warstwy o nazwach `Plan$0$…`), a historia to mówi. Dołączenie, które nie jest wczytane, pozostaje dołączeniem do swojego pliku, w DWG i w DXF.

## Otwórz w 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) otwiera rysunek w aplikacji do modelowania 3D w nowej karcie, jako DWG, bez wysyłania. Zmiany wprowadzone tam zostają tam; zapisz je tam. Pozycja menu pojawia się tylko tam, gdzie ta aplikacja może przejąć przekazany rysunek.

## Drukowanie PDF

Naciśnij {{key:Mod+P}}, kliknij {{ui:Plot}} albo wpisz `PLOT`. PDF powstaje w przeglądarce i jest pobierany lub otwierany w nowej karcie do wydruku. Zobacz [Drukowanie do PDF](topic:plot-pdf).

## Dokąd trafiają pliki

Każdy zapis i każdy wydruk to pobranie, więc pliki trafiają tam, gdzie przeglądarka umieszcza pobrane pliki: zwykle do folderu Pobrane. Aby wybierać folder za każdym razem, zmień ustawienie pobierania w przeglądarce; [Przeglądarki i komputery](common:browsers) pokazuje, gdzie.

Nic, co otworzysz lub zapiszesz, nie jest wysyłane do nas. Zobacz [Gdzie trafiają Twoje pliki](common:your-files).

## Pliki projektów PLN i PLA

CadCraft otwiera rysunki DWG i DXF, a nie własne pliki Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Otwarcie takiego pliku mówi, czym jest. W Archicad zapisz potrzebne widoki lub układy jako DWG i otwórz je tutaj, albo wyeksportuj model jako IFC i otwórz go w BimCraft. Jeśli BimCraft może przejąć plik, CadCraft oferuje {{ui:Otwórz w BimCraft}}.

## Jeśli strona zamknie się przed zapisem

CadCraft zachowuje kopię każdego zmienianego rysunku, tylko w tej przeglądarce, chwilę po tym, jak przestaniesz edytować. Jeśli karta się zamknie, przeglądarka się zatrzyma albo komputer uruchomi ponownie przed zapisem, CadCraft zapyta **Odzyskać swoją pracę?** przy następnym uruchomieniu: {{ui:Odzyskaj}} otwiera rysunek ponownie, niezapisany, w jego własnej karcie. Zapis rysunku usuwa jego kopię. Zobacz [Odzyskiwanie pracy](common:recover).

## Online i offline

Otwieranie, rysowanie, zapisywanie (DWG i DXF) i drukowanie odbywają się na Twoim komputerze, więc działają bez połączenia, gdy CadCraft już się załadował.

Aby używać CadCraft bez żadnego połączenia, kliknij {{ui:Zapisz do pracy offline}} w pasku u góry, będąc online. Etykieta liczy w górę („Zapisywanie: 40 z 212”) i kończy się na „Gotowe do pracy offline”. Zapisana kopia zawiera czytnik DWG, około 5 MB w sumie, więc **pliki DWG otwierają się także offline**, gdy kopia już jest zapisana. Kliknij przycisk ponownie, aby wybrać {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} albo {{ui:Usuń kopię offline}}. „Nie udało się zapisać” oznacza, że niektóre pliki się nie pobrały: sprawdź połączenie i kliknij, aby spróbować ponownie. „Tryb offline niedostępny” oznacza, że to okno przeglądarki nie może zachować kopii (okna prywatne i niektóre zarządzane komputery).

Bez zapisanej kopii czytnik DWG jest pobierany przy pierwszym otwarciu DWG po załadowaniu strony, więc otwarcie DWG offline może się nie udać; pliki DXF nigdy go nie potrzebują. Nie przeładowuj strony offline, dopóki CadCraft nie jest zapisany.

Szczegóły znajdziesz w [Praca offline](common:offline).

:::offline
Jesteś teraz offline. Rysunki zapisują się jako DWG lub DXF i drukują normalnie, a pliki DXF się otwierają. Pliki DWG otwierają się, jeśli CadCraft pokazuje „Gotowe do pracy offline” albo czytnik DWG był już załadowany w tej karcie.
:::

## Ograniczenia w plikach

Ograniczenia i parametry (zobacz [Ograniczanie rysunku](topic:constraints)) są zapisywane zarówno w DWG, jak i w DXF. Każdy ograniczony obiekt niesie małą notatkę CadCraft (rozszerzone dane), a nieużywany blok o nazwie `CADCRAFT_PARAMETRIC` przechowuje ograniczenia i tabelę parametrów. Inne programy otwierają rysunek normalnie i ignorują oba; mogą usunąć nieużywany blok przy czyszczeniu. Notatki odnoszą się do obiektów za pomocą ich własnego klucza, a nie uchwytów pliku, więc program, który przenumerowuje uchwyty, ich nie psuje. Gdy inny program usunął lub zmienił ograniczony obiekt, CadCraft porzuca na nim ograniczenia przy otwieraniu pliku i mówi, ile ich jest. Plik bez nich otwiera się bez ograniczeń.

Szkic wyeksportowany z modelera części (`.json`) również się otwiera: zobacz [Przenoszenie szkiców do innych modelerów części i z nich](topic:solidworks-sketches).

## Jeszcze niedostępne

- Wielokrotne odnośniki jako obiekty wielokrotnych odnośników w zapisanym DXF (R12 ich nie ma: są zapisywane jako to, co rysują).
- Obrazy w zapisanym DXF (zapisują się jako ich ramki; DWG zachowuje je jako obrazy) oraz wymazania, które ukrywają to, co jest pod nimi.
- Zapisywanie wersji DXF nowszej niż 2000.
- Zapisywanie w chmurze i synchronizacja między komputerami.

Pełną listę znajdziesz w [Jeszcze nie zbudowano](topic:not-built-yet).
