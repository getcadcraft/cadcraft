---
title: Pliki: co się otwiera, co się zapisuje
summary: Formaty, które CadCraft otwiera, zapisuje i eksportuje, co jest zachowywane lub konwertowane i dokąd trafiają pliki.
keywords: xclip, clip, granica xclip, wiąż przycięte, dwg, dxf, pdf, r12, otwórz, zapisz, eksport, import, formaty, konwersja, pobieranie, saveas, dxfout, zapisz jako, zapis dwg, format, qsave, xref, xattach, rysunek dołączony, odwołanie zewnętrzne, wiązanie, przeładuj, odłącz
from: 6d68b34e
---

## W skrócie

| Format | Otwieranie | Zapis | Uwagi |
|---|---|---|---|
| DXF (tekstowy, dowolna wersja) | Tak | Tak, jako DXF R12 lub DXF 2000 | Binarny DXF jest odrzucany: najpierw zapisz go jako tekstowy DXF. |
| DWG | Tak | Tak, jako DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 lub 2018) | Odczytywany i zapisywany przez własną bibliotekę DWG CadCraft (pliki AutoCAD R13 do 2018). Twój DWG nigdy nie jest zmieniany. Uszkodzone pliki albo wersje, których czytnik nie obsługuje, są odrzucane z komunikatem. |
| PDF | Wprowadza stronę: jako podkład albo jako obiekty ([Podkłady PDF](topic:pdf-underlay)) | Tak, przez wydruk | Wektorowy PDF arkusza albo modelu w skali. |

Każdy otwarty rysunek (albo rozpoczęty przez {{ui:Nowy}}) dostaje własną kartę nad obszarem rysunku; nowy rysunek, którego nikt jeszcze nie dotknął, jest używany zamiast dodawania karty. Naciśnij kartę, aby przełączyć, jej {{ui:×}}, aby zamknąć (CadCraft najpierw zapyta, jeśli są niezapisane zmiany), albo ułóż otwarte rysunki obok siebie: zobacz [Podział ekranu](topic:split-screen).

## Otwieranie rysunku

- Naciśnij {{key:Mod+O}}, naciśnij {{ui:Otwórz}} albo wpisz `OPEN`, a potem wybierz plik.
- Albo przeciągnij plik `.dwg` lub `.dxf` na obszar rysunku.

Plik jest odczytywany w Twojej przeglądarce. Nie jest nigdzie wysyłany. Historia podaje, ile obiektów i warstw wczytano i jak długo to trwało, a sekcja {{ui:Rysunek}} lewego panelu pokazuje format, na przykład „DWG 2018 (AC1032)”.

Czytnik DWG jest częścią CadCraft i pobiera się razem z pierwszym DWG otwartym po załadowaniu strony (kilkaset KB), więc nie ma osobnego pobierania, na które trzeba czekać. Czyta plik w tle, więc strona reaguje, gdy otwiera się duży DWG.

### Co jest wczytywane

- Linie, łuki, okręgi, polilinie (z segmentami łukowymi), elipsy, punkty, tekst i tekst wieloliniowy, bryły płaskie (solid), kreskowania (standardowe wzory rysowane jako ich linie, inne jako jednolity ton), odwołania do bloków z atrybutami (wartości, które możesz edytować; zobacz [Atrybuty bloków](topic:attributes)), wymiary oraz układy z oknami widokowymi.
- Krzywe złożone (spline) wczytują się jako spline (stopień, punkty kontrolne, węzły, wagi, punkty dopasowania); zobacz [Spline i polilinie](topic:splines).
- Wielokrotne odnośniki z jedną linią odnośnika i tekstem wczytują się jako wielokrotne odnośniki CadCraft, które możesz edytować (zobacz {{cmd:MLEADER}}). Pozostałe (z blokiem, kilkoma liniami odnośnika albo liniami krzywymi) są rysowane tak, jak narysował je inny program, i przesuwają się jako całość; historia podaje, ile ich jest.
- Obrazy pokazują się jako ramka z nazwą pliku obrazu, dopóki nie dasz CadCraft pliku poleceniem {{cmd:IMAGE}}: zobacz [Obrazy w rysunku](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout pokazuje się jako swoja ramka, a to, co jest pod nim, pozostaje widoczne.
- Tabele w DWG wczytują się tak, jak narysował je inny program.
- Ściany 3D (3D faces) w przestrzeni modelu wczytują się na karcie {{ui:3D}}, nie jako obiekty 2D; tak samo te w blokach, raz na każde odwołanie do bloku w modelu. W bloku i na arkuszu są też rysowane płasko, jako kontury. Zobacz [Modelowanie w 3D](topic:3d-solids).
- Warstwy zachowują kolor, ustawienia włączenia, zamrożenia, blokady i wydruku. DEFPOINTS nigdy się nie drukuje.
- Wymiary stają się prawdziwymi, edytowalnymi wymiarami CadCraft tam, gdzie da się odczytać ich punkty. Najpierw są pokazywane dokładnie tak, jak narysował je inny program; gdy tylko któryś zmienisz, CadCraft rysuje go ponownie w swoim stylu.
- Każdy układ staje się kartą arkusza. W innym programie każdy układ ma ukryte pierwsze okno widokowe, które jest samym arkuszem; CadCraft je pomija.

### Czego jeszcze nie wczytuje

Wszystko, czego CadCraft nie umie narysować, jest liczone, nie zgadywane. Okienko „About this file” w lewym panelu wymienia to jako „Not shown yet:” z każdym rodzajem obiektu i ich liczbą. Typowe przypadki to tabele w DXF, siatki i bryły 3D w blokach. Bryły 3D, regiony i ciała w przestrzeni modelu pokazują się na karcie 3D (zobacz [Modelowanie w 3D](topic:3d-solids#solids-from-other-programs)). Okna widokowe obrócone w pliku pokazują się obrócone, jak tam, i zachowują obrót po zapisie; tak samo bieżący UCS, nazwane UCS i obrócony widok.

Tekst jest rysowany jedną czcionką w stylu Helvetica. Etykieta, która mieści się w jednym wierszu w węższej czcionce oryginalnego programu, może w CadCraft zawinąć się na dwa wiersze.

## Zapisywanie

Są trzy sposoby zapisu. Każdy pobiera kopię.

- **Zapisz**: naciśnij {{key:Mod+S}}, naciśnij {{ui:Zapisz}} albo wpisz `SAVE` (także `QSAVE`). Zapisuje w formacie rysunku: DWG, jeśli otwarto DWG, DXF, jeśli otwarto DXF. DWG zachowuje wersję, w jakiej przyszedł (plik 2018 zapisuje się jako 2018). Nowy rysunek używa formatu i wersji DWG wybranych ostatnio w Zapisz jako w tej przeglądarce; jeśli nigdy nie wybrano, DWG w formacie AutoCAD 2000.
- **Zapisz jako**: naciśnij {{key:Mod+Shift+S}}, naciśnij {{ui:Zapisz jako}} albo wpisz `SAVEAS`. Okno {{ui:Zapisz kopię jako}} oferuje {{ui:DWG}} z listą {{ui:Wersja}} (AutoCAD 2018, 2013, 2010, 2007, 2004 lub 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, każde z nazwą pliku, jaką nada, z już wybranym bieżącym formatem i wersją rysunku. Naciśnij {{ui:Zapisz}}, aby pobrać, albo {{ui:Anuluj}} (albo {{key:Esc}}), aby nic nie zapisywać; historia podaje wtedy „Not saved.”. Twój wybór zostaje: {{key:Mod+S}} używa go odtąd dla tego rysunku, a nowe rysunki w tej przeglądarce zaczynają od niego.
- **DXFOUT**: wpisz `DXFOUT`. Zawsze pobiera kopię DXF R12, a następne {{key:Mod+S}} nadal zapisuje w formacie samego rysunku.

Przeglądarka pobiera `<nazwa rysunku>.dwg` lub `<nazwa rysunku>.dxf`. Każdy zapis to **nowe pobranie**; otwarty plik nigdy nie jest nadpisywany ani zmieniany. Historia to potwierdza, na przykład „Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged.” Dla DXF podaje „(DXF R12, opens in any CAD program)”. Wiersze pod spodem wymieniają wszystko, co zmieniło się po drodze.

Gdy CadCraft działa w aplikacji na komputer, zapis działa tak jak w innych programach na komputer: {{key:Mod+S}} zapisuje rysunek z powrotem do otwartego pliku, w jego własnym formacie i wersji, a historia podaje, gdzie go zapisano. {{ui:Zapisz jako}} i eksporty pokazują systemowe okno zapisu, a plik `.dwg`, `.dxf` lub `.ccsheets`, który klikniesz dwukrotnie, otwiera się w CadCraft.

W przypadku PDF zamiast tego drukuj (zobacz niżej).

## Co DWG zachowuje, a co zmienia

CadCraft zapisuje DWG samodzielnie, w Twojej przeglądarce, tą samą biblioteką DWG, której używa do odczytu. Wersję wybierz w Zapisz jako: format AutoCAD 2000 (wersja pliku AC1015) otwiera się w największej liczbie programów, także starych; nowsze formaty (2004, AC1018, aż do 2018, AC1032) zachowują też kolory rzeczywiste. Nic nie jest wysyłane, a zapis DWG działa offline.

Każda wersja jest sprawdzana przez odczytanie zapisanych plików trzema innymi czytnikami DWG i samym CadCraft. DWG z CadCraft nie został jeszcze otwarty w samym AutoCAD.

### Co DWG zachowuje

- Linie, łuki, okręgi, elipsy, punkty i polilinie z segmentami łukowymi.
- Tekst jednowierszowy z wyrównaniem i współczynnikiem szerokości.
- Tekst wieloliniowy i zawijany, jako tekst wieloliniowy. Inny program zawija go ponownie z tej samej szerokości.
- Kolory obiektów: wg warstwy, wg bloku, 255 kolorów standardowych oraz kolory rzeczywiste w formacie 2004 i nowszych.
- Warstwy z kolorem, typem linii, grubością linii i ustawieniami włączenia, zamrożenia, blokady i wydruku; własne typy linii, grubości linii i skale typów linii obiektów, wzory typów linii oraz skala typów linii rysunku.
- Jednostki rysunku i format długości (dziesiętny, stopy i cale, ułamki…).
- Bloki z punktem bazowym i definicjami atrybutów, także niewidocznymi, stałymi i ustawionymi z góry.
- Odwołania do bloków ze skalą, obrotem i wartościami atrybutów.
- Wypełnienia jednolite oraz kreskowania wzorem z wzorem, skalą i kątem (własne linie wzoru, więc inne programy rysują te same linie co CadCraft).
- Wymiary, jako prawdziwe wymiary: inne programy mierzą je ponownie po rozciągnięciu. Każdy zachowuje własne ustawienia (wysokość tekstu, rozmiar grotu, miejsca po przecinku, format długości) i swój tekst, i niesie narysowaną kopię, jaką ma każdy wymiar DWG.
- Arkusze (układy): każdy arkusz z rozmiarem papieru i jednostkami, tym, co na nim narysowano, i oknami widokowymi z widokiem i skalą.
- Widoki nazwane.
- Wielokrotne odnośniki, jako wielokrotne odnośniki.
- Nazwy warstw i bloków tak, jak je wpisano, wielkimi i małymi literami. (DXF R12 zapisuje je wielkimi.)

### Co DWG zmienia

Każda z tych zmian jest wymieniona w historii po zapisie, gdy dotyczy Twojego rysunku.

| W CadCraft | W zapisanym DWG |
|---|---|
| Kolory rzeczywiste (wybrane próbnikiem koloru), w formacie 2000 | Najbliższy kolor standardowy: format 2000 ma tylko 255. Zapisz jako 2004 lub nowszy, aby je zachować |
| Widoki nazwane arkusza | Widoki przestrzeni papieru: DWG nie mówi, który arkusz, więc gdy CadCraft otwiera plik ponownie, należą do pierwszego arkusza |
| Tekst wieloliniowy ze współczynnikiem szerokości | Normalna szerokość liter: w DWG współczynnik szerokości dotyczy tylko tekstu jednowierszowego |
| Nazwy warstw lub bloków ze znakami niedozwolonymi w DWG | Zmienione: nazwa z rysunku dołączonego, taka jak `Base\|Walls`, staje się `Base$0$Walls` (tak nazywa elementy wiązanie rysunku dołączonego), a inne znaki stają się `_` |

### Dlaczego R12 i co się konwertuje

Gdy zapisujesz jako DXF, CadCraft zapisuje DXF R12, wersję, którą może otworzyć każdy program CAD. Jest starsza niż niektóre funkcje, więc kilka rzeczy zapisuje w prostszej postaci:

| W CadCraft | W zapisanym pliku R12 |
|---|---|
| Tekst wieloliniowy | Jeden obiekt tekstowy na wiersz |
| Elipsy | Polilinie podążające za elipsą |
| Kreskowania (z otwartych plików) | Tylko ich kontury |
| Kolory rzeczywiste (wybrane próbnikiem koloru) | Najbliższy kolor standardowy |
| Grubości linii i własne skale typów linii obiektów | Pomijane: R12 nie ma żadnych z nich (typy linii są zachowane) |
| Nazwy warstw i bloków | Zapisywane wielkimi literami; spacje i inne znaki stają się `_`, a nazwy są obcinane do 31 znaków („Title block” staje się `TITLE_BLOCK`) |
| Warstwy ustawione jako niedrukowane | Inne programy je wydrukują (CadCraft zapamiętuje to ustawienie, gdy rysunek ma arkusz) |
| Wymiary | Prawdziwe wymiary z własnym narysowanym blokiem, więc inne programy pokazują je tak, jak je widzisz |
| Wielokrotne odnośniki | Linie, grot i tekst, które rysują |
| Widoki nazwane | Zachowane, z nazwami wielkimi literami; widoki arkusza wracają na pierwszy arkusz |
| Kilka arkuszy | Pierwszy arkusz jest przestrzenią papieru, którą pokazuje każdy program; pozostałe są zachowane jako bloki o nazwach `CCLAYOUT_1`, `CCLAYOUT_2` …, które CadCraft zamienia z powrotem w arkusze przy otwarciu pliku |

Historia wymienia każdą z tych zmian, która dotyczyła Twojego rysunku.

:::tip
Aby pracować nad rysunkiem przez kilka dni, zapisz go jako DXF i następnym razem otwórz ten DXF. Wszystko, co CadCraft umie narysować, przeżywa taką podróż w obie strony, w tym wymiary, bloki i wszystkie arkusze.
:::

## Rysunki dołączone (odwołania zewnętrzne)

{{cmd:XATTACH}} (`XA`, albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Dołącz rysunek (xref)}}) dołącza inny DWG lub DXF: wybierz plik, a potem kliknij, gdzie ma trafić ({{key:Enter}} umieszcza go w 0,0). Wczytuje się jako jeden blok nazwany od pliku, w prawidłowej skali, gdy oba rysunki mają różne jednostki. Jego warstwy i bloki zachowują nazwy z nazwą dołączenia z przodu — `Plan|Walls`, `Plan|Door` — więc nigdy nie mieszają się z Twoimi: włączaj i wyłączaj, zamrażaj lub blokuj dołączone warstwy jak własne. Dołączenie jest tylko do odczytu: zmień drugi rysunek i przeładuj go. To, co ustawisz na warstwach dołączenia (kolor, typ linii, grubość linii, włączenie/wyłączenie, zamrożenie, blokada, wydruk), zostaje zachowane po przeładowaniu, po zapisaniu rysunku jako DWG, gdy dołączenie nadal jest dołączeniem, oraz gdy inny rysunek dołącza ten.

{{cmd:XREF}} (`XR`): `?` wymienia dołączenia (wczytane lub nie, który plik, ile odwołań); `A` dołącza; `R` przeładowuje jedno z jego pliku (wskaż plik ponownie: przeglądarka sama nie sięga do Twoich folderów); `B` wiąże jedno (staje się zwykłymi blokami i warstwami o nazwach `Plan$0$Walls`); `D` odłącza jedno (jego odwołania i warstwy znikają). Każde to jeden krok cofania.

{{cmd:XCLIP}} (`XC`) przycina odwołania do bloków i dołączenia: zaznacz je, `N` dla nowej granicy, potem `R` i dwa narożniki albo `P` i punkty wielokąta ({{key:Enter}} go zamyka); `D` usuwa przycięcie. Tylko to, co leży wewnątrz, jest widoczne i drukowane, a przycięcie przesuwa się z odwołaniem. DWG i DXF 2000 zachowują przycięcia; DXF R12 zapisuje odwołanie w całości i mówi o tym. Gdy wiążesz dołączenie z przyciętymi odwołaniami, {{cmd:XREF}} `B` pyta: `A` wiąże wszystko, `C` zachowuje tylko przyciętą część każdego odwołania (linie i łuki są cięte na granicy; teksty i bloki zagnieżdżone zostają, gdy ich punkt wstawienia leży wewnątrz).

Otwarty rysunek może dołączać pliki, których CadCraft nie widzi: podaje, ile ich nie wczytano. Użyj {{cmd:XREF}}, `R` i wskaż każdy plik, aby je zobaczyć.

Przy zapisie wczytane dołączenie jest **wiązane** w plik (inne programy widzą zwykłe bloki i warstwy o nazwach `Plan$0$…`), a historia o tym informuje. Dołączenie, które nie jest wczytane, pozostaje dołączeniem do swojego pliku, w DWG i w DXF.

## Otwórz w 3D

{{ui:Widok}} › {{ui:Więcej}} › {{ui:Otwórz w ModelCraft}} ({{cmd:OPENIN3D}}) otwiera rysunek w aplikacji do modelowania 3D na nowej karcie, jako DWG, bez wysyłania. Zmiany wprowadzone tam zostają tam; zapisz je tam. Pozycja menu pokazuje się tylko tam, gdzie ta aplikacja może przejąć rysunek.

## Drukowanie PDF

Naciśnij {{key:Mod+P}}, naciśnij {{ui:Drukuj}} albo wpisz `PLOT`. PDF powstaje w przeglądarce i jest pobierany albo otwierany na nowej karcie do wydruku. Zobacz [Drukowanie do PDF](topic:plot-pdf).

## Dokąd trafiają pliki

Każdy zapis i każdy wydruk to pobranie, więc pliki lądują tam, gdzie przeglądarka umieszcza pobrane pliki: zwykle w folderze Pobrane. Aby za każdym razem wybierać folder, zmień ustawienie pobierania w przeglądarce; [Przeglądarki i komputery](common:browsers) pokazuje, gdzie.

Nic, co otwierasz lub zapisujesz, nie jest do nas wysyłane. Zobacz [Dokąd trafiają Twoje pliki](common:your-files).

## Pliki projektów PLN i PLA

CadCraft otwiera rysunki DWG i DXF, nie własne pliki Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Otwarcie takiego pliku mówi, czym jest. W Archicad zapisz potrzebne widoki lub układy jako DWG i otwórz je tutaj albo wyeksportuj model jako IFC i otwórz go w BimCraft. Tam, gdzie BimCraft może przejąć plik, CadCraft oferuje {{ui:Otwórz w BimCraft}}.

## Jeśli strona zamknie się przed zapisem

CadCraft przechowuje kopię każdego zmienionego rysunku, tylko w tej przeglądarce, chwilę po zakończeniu edycji. Jeśli karta zamknie się, przeglądarka przestanie działać albo komputer uruchomi się ponownie przed zapisem, CadCraft przy następnym uruchomieniu zapyta **Recover your work?**: {{ui:Odzyskaj}} otwiera rysunek ponownie, niezapisany, na osobnej karcie. Zapisanie rysunku usuwa jego kopię. Zobacz [Odzyskaj swoją pracę](common:recover).

## Online i offline

Otwieranie, rysowanie, zapisywanie (DWG i DXF) i drukowanie odbywają się na Twoim komputerze, więc działają bez połączenia, gdy CadCraft już się załaduje.

Aby używać CadCraft zupełnie bez połączenia, naciśnij {{ui:Zapisz do pracy offline}} na pasku u góry, gdy jesteś online. Etykieta liczy w górę („Saving 40 of 212”) i kończy na „Offline ready”. Zapisana kopia zawiera czytnik DWG, razem około 5 MB, więc **pliki DWG również otwierają się offline** po jej zapisaniu. Naciśnij przycisk ponownie, aby użyć {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} lub {{ui:Usuń kopię offline}}. „Could not save” oznacza, że część plików się nie pobrała: sprawdź połączenie i naciśnij, aby spróbować ponownie. „Offline not available” oznacza, że to okno przeglądarki nie może przechować kopii (okna prywatne i niektóre komputery zarządzane).

Bez zapisanej kopii czytnik DWG jest pobierany przy pierwszym otwarciu DWG po załadowaniu strony, więc otwarcie DWG offline może się nie udać; pliki DXF nigdy go nie potrzebują. Nie przeładowuj strony offline, jeśli CadCraft nie jest zapisany.

Szczegóły w [Praca offline](common:offline).

:::offline
Jesteś teraz offline. Rysunki zapisują się jako DWG lub DXF i drukują normalnie, a pliki DXF się otwierają. Pliki DWG otwierają się, jeśli CadCraft pokazuje „Offline ready” albo czytnik DWG został już załadowany na tej karcie.
:::

## Więzy w plikach

Więzy i parametry (zobacz [Więzy w rysunku](topic:constraints)) są zapisywane zarówno w DWG, jak i w DXF. Każdy obiekt z więzami niesie małą notatkę CadCraft (dane rozszerzone), a nieużywany blok o nazwie `CADCRAFT_PARAMETRIC` przechowuje więzy i tabelę parametrów. Inne programy otwierają rysunek normalnie i ignorują jedno i drugie; mogą usunąć nieużywany blok przy czyszczeniu. Notatki odwołują się do obiektów przez ich własny klucz, nie przez uchwyty pliku, więc program, który przenumerowuje uchwyty, ich nie psuje. Gdy inny program usunął lub zmienił obiekt z więzami, CadCraft porzuca więzy na nim przy otwieraniu pliku i podaje, ile ich było. Plik bez nich otwiera się bez więzów.

Szkic wyeksportowany z modelera części (`.json`) również się otwiera: zobacz [Przenoszenie szkiców do i z innych modelerów części](topic:solidworks-sketches).

## Jeszcze niedostępne

- Wielokrotne odnośniki jako obiekty wielokrotnych odnośników w zapisanym DXF (R12 ich nie ma: zapisują się jako to, co rysują).
- Obrazy w zapisanym DXF (zapisują się jako ramki; DWG zachowuje je jako obrazy) oraz wipeout, które zasłaniają to, co pod nimi.
- Zapis nowszej wersji DXF niż 2000.
- Zapis w chmurze i synchronizacja między komputerami.

Pełną listę znajdziesz w [Jeszcze nie zbudowano](topic:not-built-yet).
