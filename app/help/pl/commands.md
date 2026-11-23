---
title: Dokumentacja poleceń
summary: Każde polecenie w aplikacji rysunkowej CadCraft wraz z krótkimi nazwami, pytaniami, opcjami i wartościami domyślnymi.
keywords: polecenia, aliasy, lista poleceń, pole, obwód, measuregeom, linia, pline, okrąg, łuk, przytnij, odsuń, dimlinear, blok, wstaw, układ, drukuj, zoom, pomoc, copyclip, cutclip, pasteclip, pasteorig, copybase, duplikuj, selectall
from: 979ffe3b
---

Wpisz nazwę polecenia albo jego krótką nazwę i naciśnij {{key:Enter}} albo {{key:Space}}. Wielkość liter nie ma znaczenia, a początkowe `_`, `-`, `.` lub `'` są ignorowane. Wpisz `HELP` (albo `?`), aby wypisać w historii wiersza poleceń krótką listę każdego polecenia; naciśnij {{key:F1}}, aby zobaczyć tę pomoc.

Jak czytać monity: opcje są w nawiasach kwadratowych, a wybierasz jedną, wpisując jej wielkie litery (`D` dla Średnica). Wartość domyślna jest w nawiasach ostrokątnych; naciśnij {{key:Enter}}, aby ją przyjąć. Tam, gdzie pytany jest punkt, możesz kliknąć albo wpisać dowolny z formatów z [Wprowadzanie współrzędnych i odległości](topic:coordinate-entry). Tam, gdzie pytana jest odległość, możesz wpisać liczbę albo kliknąć dwa punkty.

Naciśnięcie {{key:Enter}} tam, gdzie wymagany jest punkt albo obiekt i nie ma wartości domyślnej, kończy polecenie. {{key:Esc}} je anuluje. Wszystko, co polecenie zrobiło, to jeden krok cofnięcia.

## Rysuj

### LINE

Aliasy: `L`. Odcinki proste, każdy jako osobny obiekt.

- `Wskaż pierwszy punkt` (Enter: zacznij od ostatnio podanego punktu)
- `Wskaż następny punkt [Cofnij (U)]`, powtarzane. Po dwóch odcinkach: `[Cofnij (U)/Zamknij (C)]`.
- `U` cofa ostatni odcinek, `C` zamyka do pierwszego punktu i kończy. {{key:Enter}} kończy.

### PLINE

Aliasy: `PL`. Jedna polilinia z odcinków prostych i łuków.

- `Wskaż punkt początkowy`
- `Wskaż następny punkt [Łuk (A)/Zamknij (C)/Cofnij (U)]` (Zamknij, gdy są dwa odcinki)
- `A` przełącza na łuki: `Wskaż koniec łuku [Linia/Zamknij (CL)/Cofnij (U)]`. Każdy łuk jest styczny do poprzedniego odcinka. `L` wraca do linii, `CL` zamyka łukiem.
- {{key:Enter}} kończy; polilinia pozostaje otwarta.

### CIRCLE

Aliasy: `C`.

- `Wskaż środek okręgu [3P/2P/Ttr (styczna, styczna, promień)]`
- `Podaj promień okręgu [Średnica (D)] <ostatni promień>`; `D` pyta `Podaj średnicę okręgu`.
- `2P`: dwa końce średnicy. `3P`: trzy punkty na okręgu.
- `T` (także polecenie `TTR` oraz {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Okrąg: styczna, styczna, promień}}): `Wskaż punkt na obiekcie dla pierwszej stycznej okręgu`, potem drugiej, a następnie promień (Enter: ostatni). Okrąg dotyka obu obiektów (linii, łuków, okręgów, odcinków polilinii, także wewnątrz bloków); spośród tych, które pasują, wybierany jest ten, który dotyka najbliżej twoich wskazań. Gdy żaden nie pasuje, pojawia się „Nie ma takiego okręgu”.
- `TTT` (albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Okrąg: styczna, styczna, styczna}}): trzy obiekty; okrąg dotykający wszystkich trzech, najbliższy twoim wskazaniom (trzy linie dają okrąg wewnętrzny albo zewnętrzny, zależnie od tego, gdzie wskażesz).

### ARC

Aliasy: `A`.

- `Wskaż punkt początkowy łuku [Środek (C)]`, `Wskaż drugi punkt łuku`, `Wskaż punkt końcowy łuku`: łuk przez trzy punkty.
- `C`: `Wskaż środek łuku`, `Wskaż punkt początkowy łuku`, `Wskaż punkt końcowy łuku`. Łuk biegnie przeciwnie do ruchu wskazówek zegara od początku do końca.

### RECTANG

Aliasy: `REC`, `RECTANGLE`. Zamknięta polilinia.

- `Wskaż pierwszy narożnik`, `Wskaż drugi narożnik`. Wpisz `@szerokość,wysokość` dla drugiego narożnika.

### POLYGON

Aliasy: `POL`. Wielokąt foremny jako zamknięta polilinia.

- `Podaj liczbę boków <4>` (od 3 do 1024)
- `Wskaż środek wielokąta`
- `Podaj opcję [Wpisany w okrąg (I)/Opisany na okręgu (C)] <I>`
- `Wskaż promień okręgu`: kliknij albo wpisz punkt; jego odległość ustala rozmiar, a kierunek obraca wielokąt.

### ELLIPSE

Aliasy: `EL`.

- `Wskaż koniec osi elipsy [Środek (C)]`, `Wskaż drugi koniec osi`, `Podaj odległość do drugiej osi`
- `C`: `Wskaż środek elipsy`, `Wskaż koniec osi`, a potem odległość do drugiej osi.
- `I` (`Izookrąg`, tylko gdy {{cmd:ISODRAFT}} jest włączone): środek, potem promień albo `Średnica`: elipsa, jaką okrąg przyjmuje na bieżącej płaszczyźnie izometrycznej.

### HATCH

Aliasy: `H`, `BH`, `BHATCH`; albo {{ui:Kreskowanie}} na pasku narzędzi. Najpierw wypisuje bieżący wzorzec, skalę i kąt.

- `Wskaż punkt wewnętrzny [Wybierz obiekty (S)/Wzorzec (P)/Skala (SC)/Kąt (A)]`, powtarzane (`Cofnij (U)`, gdy jest już obszar): każde kliknięcie dodaje zamknięty obszar wokół siebie, a zamknięte kształty w jego wnętrzu jako wyspy. {{key:Enter}} tworzy jedno kreskowanie ze wszystkich.
- `S`: `Wybierz zamknięte obiekty` (zamknięte polilinie, okręgi, zamknięte elipsy).
- `P`: `Podaj nazwę wzorca, SOLID albo ? dla listy <bieżący>`. `SC`: `Podaj skalę wzorca`. `A`: `Podaj kąt wzorca`.
- `G` (Gradient): wypełnienie jest gradientem zamiast wzorca. Zobacz {{cmd:GRADIENT}}, aby poznać jego pytania.

Zobacz [Kreskowanie i wypełnienia obszarów](topic:hatch).

### GRADIENT

Aliasy: `GD`. Wypełnia obszar gradientem jednego albo dwóch kolorów. Najpierw pyta o gradient, a potem działa jak {{cmd:HATCH}} (`Wskaż punkt wewnętrzny`, `S` dla zamkniętych obiektów, {{key:Enter}} kończy).

- `Podaj opcję gradientu [Typ (T)/Jeden kolor (O)/Dwa kolory (TW)/Kąt (A)/Wyśrodkowany (C)/Wyjdź (X)] <X>`, powtarzane; za każdym razem wypisuje gradient w jego obecnym stanie.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` albo jeden z nich odwrócony (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Pierwsze litery wystarczą.
- `O`: jeden kolor, potem jego odcień od 0 do 1 (0 zacienia do czerni, 0,5 to sam kolor, 1 rozjaśnia do bieli). `TW`: pierwszy i drugi kolor. Kolor to liczba od 1 do 255, trzy liczby jak `255,128,0` albo `#rrggbb`.
- `A`: kąt, pod jakim biegnie gradient. `C`: wyśrodkowany Tak albo Nie (Nie przesuwa środek gradientu na jedną stronę).
- Odrzuca kolor albo typ, których nie zna, oraz odcień spoza zakresu od 0 do 1.

{{cmd:HATCHEDIT}} `G` oraz Właściwości (Gradient) zmieniają gradient później albo zamieniają dowolne kreskowanie w gradient. Gradient jest rysowany na ekranie i drukowany. DWG 2004 i nowsze zachowują go jako prawdziwe kreskowanie gradientowe; DXF 2000 i DWG 2000 zachowują go dla CadCraft, a inne programy widzą wypełnienie jednolite pierwszym kolorem.

### HATCHGENERATEBOUNDARY

Aliasy: `HGB`. Ponownie tworzy granicę z kreskowania, które ją straciło. `Wybierz kreskowania` (albo wybierz je najpierw), a potem `Połączyć każde kreskowanie z jego nową granicą, aby kreskowanie za nią podążało? [Tak/Nie] <Tak>`.

- Każda pętla kreskowania staje się zamkniętą polilinią na warstwie kreskowania; nowe polilinie zostają zaznaczone. Zakrzywiona krawędź wraca jako krótkie proste odcinki, które kreskowanie zachowuje.
- Przy Tak kreskowanie podąża za nową granicą, jak kreskowanie utworzone przez {{cmd:HATCH}}. Jeden krok cofnięcia.
- Gdy nie wybrano kreskowania, informuje o tym.

### POINT

Aliasy: `PO`; albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Punkt}}. Obiekty punktowe, jeden na kliknięcie, aż do {{key:Enter}}.

- `Wskaż punkt`

### XLINE

Aliasy: `XL`; albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Linia konstrukcyjna}}. Linie konstrukcyjne, bez końca w obie strony. Zobacz [Linie konstrukcyjne i półproste](topic:construction-lines).

- `Wskaż punkt [Poziomo (Hor)/Pionowo (Ver)/Kąt (Ang)/Dwusieczna (Bisect)/Odsunięcie (Offset)]`, potem `Wskaż punkt przechodzenia` dla każdej linii, aż do Enter.
- `A`: `Podaj kąt linii konstrukcyjnej [Odniesienie (R)] <0>`; `R` najpierw pyta `Wybierz obiekt linii`.
- `B`: `Wskaż wierzchołek kąta`, `Wskaż początek kąta`, potem `Wskaż koniec kąta` dla każdej linii.
- `O`: `Podaj odległość odsunięcia [Przez (Through)] <Przez>`, potem `Wybierz obiekt linii` i `Wskaż stronę odsunięcia` (albo `Wskaż punkt przechodzenia`) dla każdej linii.

### RAY

Brak aliasów; albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Półprosta}}. `Wskaż punkt początkowy`, potem `Wskaż punkt przechodzenia` dla każdej półprostej, aż do Enter.

### TEXT

Aliasy: `DT`, `DTEXT`; albo {{ui:Tekst}} na pasku narzędzi. Tekst jednowierszowy; każdy wiersz jest osobnym obiektem.

- `Wskaż punkt początkowy tekstu [Wyrównanie (J)]`
- `J`: `Podaj opcję [Lewo/Środek/Prawo/Pośrodku/TL/MC] <L>`, potem `Wskaż punkt wstawienia tekstu`
- `Podaj wysokość <bieżąca wysokość tekstu>`
- `Podaj kąt obrotu tekstu <0>`
- `Wpisz tekst`, powtarzane: każdy Enter zaczyna następny wiersz poniżej. Enter na pustym wierszu kończy. {{key:Space}} wpisuje tu spację.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} stawia znaczniki na linii, łuku, okręgu, polilinii, splajnie albo elipsie, które dzielą ją na równe części. Wskaż obiekt, a potem podaj liczbę części (od 2 do 32767). Otwarty obiekt dostaje o jeden znacznik mniej niż części; zamknięty dostaje znacznik także na początku. Sam obiekt nie jest cięty. Znaczniki są punktami; `Blok` zamiast tego pyta o blok z tego rysunku i czy ma się obracać za obiektem. Długości wzdłuż splajnów i elips są mierzone po krótkich cięciwach. Odrzuca tekst, kreskowania i inne obiekty, które nie mają długości.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} stawia znacznik co podaną długość wzdłuż linii, łuku, okręgu, polilinii, splajnu albo elipsy, licząc od końca najbliższego miejsca, w którym wskazałeś (obiekt zamknięty: od jego początku). Podaj długość, wpisując ją albo dwoma punktami. Daleki koniec otwartego obiektu nie dostaje znacznika. `Blok` stawia blok przy każdym znaczniku zamiast punktu. Odrzuca długość równą 0, dłuższą niż obiekt i taką, która dałaby więcej niż 32767 znaczników.

### BOUNDARY

Aliasy: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tworzy zamkniętą polilinię wokół obszaru, w którym leży wskazany punkt, z tego, co go ogranicza na ekranie: linii, łuków, okręgów, polilinii i krzywych. Fragmenty leżące na łuku albo okręgu wracają jako odcinki łuku; fragmenty elips i splajnów wracają jako krótkie proste odcinki. Przy włączonych `Wyspach` (ustawienie startowe) każdy zamknięty obszar w jego wnętrzu też dostaje własną polilinię. Wskazuj dalej punkty; {{key:Enter}} kończy. Obiekty, które ograniczają obszar, zostają takie, jakie były. Jeśli żaden zamknięty obszar nie zawiera punktu, informuje o tym.

### BLEND

{{cmd:BLEND}} rysuje splajn między końcami dwóch otwartych krzywych. Wskaż każdą krzywą blisko końca, który ma się połączyć. `CONtinuity` wybiera `Tangent` (splajn odchodzi i dochodzi wzdłuż obu krzywych) albo `Smooth` (dodatkowo wygina się tak, jak wyginają się one na końcach); wybór jest zachowany na sesję. Dwie krzywe nie są zmieniane. Odrzuca obiekty zamknięte i dwa końce, które już się stykają.

### REGION

Alias: `REG`. {{cmd:REGION}} zamienia zamknięte obiekty w regiony: płaskie obszary, które możesz łączyć, ciąć i mierzyć. Wybierz okręgi, zamknięte polilinie, zamknięte elipsy albo zamknięte splajny, albo linie, łuki i otwarte polilinie, które zamykają pętlę koniec w koniec; każda pętla staje się jednym regionem i zastępuje obiekty, z których powstała. Łuki zostają łukami; elipsy i splajny stają się krótkimi odcinkami prostymi. To, co nie jest zamknięte i nie zamyka żadnej pętli, zostaje takie, jakie jest, a polecenie podaje, ile tego jest. W rysunku region to jedna lub więcej zamkniętych polilinii trzymanych razem jako nienazwana grupa, więc kliknięcie zaznacza cały region, a kopia jest osobnym regionem; inne programy, które otwierają plik, widzą zamknięte polilinie.

Gdy w rysunku są regiony, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} na karcie 2D działają na regionach: `UNION` łączy wybrane regiony w jeden (regiony rozdzielone stają się jednym regionem z kilkoma konturami), `SUBTRACT` pyta o regiony, od których odejmować, a potem o te, które mają być odjęte (otwór zostaje częścią regionu), `INTERSECT` zachowuje obszar, który wszystkie mają wspólnie. Każde podaje pole wyniku i jest jednym krokiem cofnięcia. Odrzucają, gdy nic by nie zostało albo nic nie jest wspólne. Na karcie 3D i w rysunku bez regionów te same polecenia działają jak dotąd na bryłach.

## Modyfikuj

### MTEXT

Aliasy: `MT`, `T`; albo {{ui:Akapit}} na pasku narzędzi. Tekst akapitowy, który zawija się do szerokości, pisany na miejscu.

- `Wskaż pierwszy narożnik`
- `Wskaż przeciwległy narożnik [Wysokość (H)/Wyrównanie (J)/Odstęp między wierszami (L)/Obrót (R)/Szerokość (W)]`: szerokość między dwoma narożnikami to miejsce, gdzie tekst się zawija. `H` pyta `Podaj wysokość`, `J` `Podaj wyrównanie [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Podaj współczynnik odstępu między wierszami (od 0,25 do 4)`, `R` `Podaj kąt obrotu`, `W` `Podaj szerokość (0 bez zawijania)` i pomija drugi narożnik.
- Potem na rysunku pojawia się okno: pisz, {{key:Enter}} zaczyna nowy akapit, {{key:Mod+Enter}} albo kliknięcie poza oknem kończy, {{key:Esc}} anuluje. Jego pasek ustawia wysokość, odstęp między wierszami, szerokość i wyrównanie. Zobacz [Dodawanie tekstu i opisów](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasy: `ED`, `DDEDIT`; albo dwuklik tekstu. `Wybierz tekst do edycji`, powtarzane aż do {{key:Enter}}: każdy otwiera się w tym samym oknie. Uruchomione na zaznaczonym albo dwukrotnie klikniętym tekście, edytuje ten jeden i kończy.

### ERASE

Aliasy: `E`, `DELETE`; albo naciśnij {{key:Delete}} przy zaznaczonych obiektach.

- `Wybierz obiekty` (pomijane, gdy obiekty są już zaznaczone)

### MOVE

Aliasy: `M`.

- `Wybierz obiekty`
- `Wskaż punkt bazowy [Przemieszczenie (D)]`, `Wskaż drugi punkt`
- `D`: `Podaj przemieszczenie`, wpisane jako `dx,dy`.

### COPY

Aliasy: `CO`, `CP`. Kopie tyle razy, ile podasz punktów.

`Macierz` przy monicie o drugi punkt robi od razu wiersz: podaj liczbę elementów (oryginał liczy się jako jeden), a potem punkt, w którym trafi pierwsza kopia; pozostałe idą w tym samym rozstawie. `Dopasuj` ustawia ten punkt jako miejsce ostatniej kopii, a pozostałe rozkłada równo pomiędzy.

- `Wybierz obiekty`
- `Wskaż punkt bazowy [Przemieszczenie (D)]`
- `Wskaż drugi punkt [Cofnij (U)]`, powtarzane aż do Enter. `U` cofa ostatnią kopię.

### ROTATE

Aliasy: `RO`.

- `Wybierz obiekty`, `Wskaż punkt bazowy`
- `Podaj kąt obrotu <ostatni kąt>`: stopnie, dodatnie przeciwnie do ruchu wskazówek zegara; albo kliknij punkt, by obrócić w jego stronę.

### SCALE

Aliasy: `SC`.

- `Wybierz obiekty`, `Wskaż punkt bazowy`
- `Podaj współczynnik skali`: wpisz współczynnik, na przykład `0.5` albo `2`. Kliknięty punkt daje jako współczynnik swoją odległość od punktu bazowego.

### MIRROR

Aliasy: `MI`.

- `Wybierz obiekty`
- `Wskaż pierwszy punkt linii lustra`, `Wskaż drugi punkt linii lustra`
- `Usunąć obiekty źródłowe? [Tak/Nie] <N>`

### ALIGN

Aliasy: `AL`; albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Wyrównaj}}.

- `Wybierz obiekty`
- `Wskaż pierwszy punkt źródłowy`, `Wskaż pierwszy punkt docelowy`
- `Wskaż drugi punkt źródłowy (Enter, aby kontynuować)`, `Wskaż drugi punkt docelowy`
- `Wskaż trzeci punkt źródłowy (Enter, aby kontynuować)`, `Wskaż trzeci punkt docelowy`
- Przy dwóch parach: `Skalować obiekty według punktów wyrównania? [Tak/Nie] <N>`

Zobacz [Wyrównywanie obiektów](topic:modify-objects#align-objects).

### ALIGNTO

- `Wybierz obiekty` (albo zaznaczenie), `Wyrównaj [Lewo/Środek/Prawo/Góra/Pośrodku/Dół] <Lewo>`, `Do [Zaznaczenia/Pierwszego/Ostatniego/Punktu] <Zaznaczenie>`; `P` pyta o punkt. Zaznaczenie zostaje.

### DISTRIBUTE

- `Wybierz obiekty` (co najmniej trzy), `Rozmieść [Poziomo/Pionowo] <Poziomo>`, `Rozłóż równomiernie [Środki/Odstępy] <Odstępy>`. Dwa skrajne zostają; zaznaczenie zostaje.

### ALIGNPANEL

Aliasy: `ALP`; albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Wyrównaj i rozmieść}}. Otwiera panel, który uruchamia ALIGNTO i DISTRIBUTE kliknięciami.

### LASER

Aliasy: `LASERCUT`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Laser…}}. Otwiera panel Laser nad rysunkiem: co robi każda warstwa (cięcie, rysowanie linii, grawerowanie, wypełnienie, obraz), podgląd, kod G GRBL do zapisania oraz wyznaczanie ramki i wysyłanie przez Web Serial. Zobacz [Wysyłanie rysunku do lasera](topic:laser-cutting).

### STRETCH

Aliasy: `S`; albo {{ui:Rozciągnij}}. `Wybierz obiekty do rozciągnięcia`: przeciągnij okna przecięcia (albo wpisz `C`) przez końce, które mają się przesunąć. `Wskaż punkt bazowy [Przemieszczenie (D)]`, `Wskaż drugi punkt`. Punkty w oknach się przesuwają: końce linii, wierzchołki polilinii (odcinki łuku zachowują wysokość), punkty wymiarów; okręgi, elipsy, tekst, punkty i bloki przesuwają się w całości, gdy ich środek albo punkt wstawienia jest w oknie. Zaznaczenie zrobione przed poleceniem zachowuje okna przecięcia (i lasa), które je zrobiły, więc rozciągają się tak samo. Bez okna obiekty przesuwają się w całości.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasy: `AR`; albo {{ui:Macierz}}. `Wybierz obiekty`, potem `Podaj typ macierzy [Prostokątna/POlarna] <Prostokątna>` (tylko ARRAY).

- Prostokątna zaczyna od 4 kolumn × 3 wierszy, w rozstawie 1,5 razy większym niż rozmiar obiektów, pokazana jako podgląd. `Podaj opcję [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pyta o kolumny i wiersze, `S` o odległości między kolumnami i między wierszami (ujemna idzie w lewo albo w dół), `COL` i `R` o jeden kierunek każde.
- Biegunowa pyta `Wskaż punkt środkowy macierzy`, zaczyna od 6 elementów dookoła, obróconych. `Podaj opcję [Elementy/Kąt wypełnienia/Obróć elementy/eXit] <X>`: `I` elementy, `F` kąt wypełnienia (+ przeciwnie do ruchu wskazówek zegara, − zgodnie), `ROT` Tak albo Nie.
- {{key:Enter}} (eXit) tworzy kopie jako zwykłe obiekty. Jeden krok cofnięcia.
- `AS` (ASsociative) przełącza między zwykłymi kopiami a macierzą, która pozostaje edytowalna: jeden obiekt, który zmienisz później poleceniem {{cmd:ARRAYEDIT}}, jego uchwytami albo we Właściwościach. Wybór jest zapamiętany ({{cmd:ARRAYASSOCIATIVITY}}); na starcie są zwykłe kopie.

### ARRAYPATH

Kopie wzdłuż krzywej. `Wybierz obiekty`, potem `Wybierz krzywą ścieżki`: linia, łuk, okrąg, elipsa, polilinia albo splajn (nie jeden z obiektów, które są w macierzy). Ścieżka zaczyna się od swojego końca bliższego obiektom, a pierwszy element to obiekty tam, gdzie są.

- `Podaj opcję [Metoda/Elementy/Odstęp/Wyrównanie/Asocjacyjne/eXit] <X>`, z podglądem. `M`: `Podziel` rozkłada elementy równo na całej ścieżce, `Mierz` stawia jeden co zadaną odległość wzdłuż niej. `I`: liczba elementów (przy Mierz 0 oznacza tyle, ile się zmieści; liczba większa niż koniec ścieżki jest ograniczana do tego, co się mieści). `SP`: odległość między elementami wzdłuż ścieżki (przełącza na Mierz). `AL`: Tak obraca każdy element zgodnie z ścieżką, Nie zostawia je pionowo.
- `AS` jak w {{cmd:ARRAY}}. Gdy jest włączone, macierz zachowuje własną kopię kształtu ścieżki: późniejsza edycja krzywej ścieżki nie przesuwa elementów.
- Odrzuca ścieżkę, która nie jest krzywą, i jeden element.

### ARRAYEDIT

Zmienia macierz utworzoną z ASsociative. `Wybierz macierz` (albo wybierz ją najpierw). Wypisuje, jaka macierz jest teraz, a potem pyta aż do {{key:Enter}}:

- Prostokątna: `COL` kolumny i ich rozstaw, `R` wiersze i ich rozstaw, `A` kąt, pod jakim biegną kolumny.
- Biegunowa: `I` elementy, `F` kąt wypełnienia, `ROT` obracaj elementy Tak albo Nie.
- Ścieżka: `M` Podziel albo Mierz, `I` elementy, `SP` odstęp, `AL` wyrównanie do ścieżki.
- `S` (Source) otwiera obiekty, które macierz powtarza, same, jak edytor bloków. Rysuj i edytuj tam; {{cmd:ARRAYCLOSE}} zapisuje albo odrzuca, a każdy element podąża.
- `REP` (REPlace): `Wybierz obiekty zamienne`, `Wskaż punkt bazowy obiektów zamiennych`, potem kliknij elementy do zamiany i {{key:Enter}}. Te elementy pokazują zamiennik zamiast oryginału; obiekty zamienne opuszczają rysunek i żyją w macierzy. `RES` (RESet) pokazuje ponownie obiekty źródłowe w każdym elemencie.
- Każda zmiana to jeden krok cofnięcia. Odrzuca zwykłe kopie, zwykłe odwołanie do bloku i macierz na zablokowanej warstwie.

Te same liczby są we Właściwościach w sekcji Macierz, a macierz ma uchwyty: jej punkt bazowy ją przesuwa, uchwyt przy drugim elemencie ustawia rozstaw, uchwyt za ostatnim elementem ustawia liczbę (biegunowa: drugi element ustawia liczbę elementów, ostatni kąt wypełnienia). {{cmd:EXPLODE}} zamienia macierz z powrotem w zwykłe kopie.

### ARRAYCLOSE

Kończy {{cmd:ARRAYEDIT}} Source: `Zapisać zmiany w obiektach źródłowych macierzy? [Zapisz/Odrzuć] <Zapisz>`. Informuje o tym, gdy żadne obiekty źródłowe macierzy nie są otwarte. {{cmd:BCLOSE}} robi to samo.

### ARRAYASSOCIATIVITY

`Podaj nową wartość dla ARRAYASSOCIATIVITY (1 = macierze pozostają edytowalne, 0 = zwykłe kopie)`. Ustawia, od czego zaczynają {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}}; ich opcja `AS` zmienia to samo ustawienie. Zapamiętywane w tej przeglądarce.

### OFFSET

Aliasy: `O`. Linie, łuki, okręgi i polilinie.

Tam, gdzie polilinia odsuwa się na zewnątrz, a jej proste odcinki rozchodzą się na narożniku, {{cmd:OFFSETGAPTYPE}} decyduje, jak zamknąć przerwę.

- `Podaj odległość odsunięcia [Przez (Through)] <ostatnia odległość albo Przez>`
- `Wybierz obiekt do odsunięcia`, potem `Wskaż punkt po stronie do odsunięcia` (albo, z Przez, `Wskaż punkt przechodzenia`), powtarzane aż do Enter.

### OFFSETGAPTYPE

- `Odstępy narożników przy odsunięciu: 0 wydłuż, 1 zaokrąglij, 2 fazka`: jak {{cmd:OFFSET}} zamyka przerwy na zewnętrznych narożnikach polilinii. `0` wydłuża odcinki, aż się spotkają (ustawienie startowe), `1` łączy je łukiem wokół dawnego narożnika, `2` prostym cięciem. Wewnętrzne narożniki i odcinki łuków nie są zmieniane. Zachowane na tę sesję.

### EXTRIM

{{cmd:EXTRIM}} przycina wszystko po jednej stronie krawędzi. Wskaż krawędź tnącą (linię, łuk, okrąg, polilinię, elipsę, splajn albo linię konstrukcyjną), a potem punkt po stronie, którą chcesz oczyścić: każda linia, łuk, okrąg, polilinia i linia konstrukcyjna, która przecina krawędź, traci swoją część po tej stronie, gdzie zaczyna się od krawędzi. Podczas wyboru strony kawałki, które by zniknęły, podążają za wskaźnikiem. Dla krawędzi zamkniętej strony to wnętrze i zewnętrze. Obiekty, które tylko stykają się z krawędzią, oraz tekst, kreskowania, splajny i elipsy, które ją przecinają, zostają takie, jakie są. Jeden krok cofnięcia.

### TRIMEXTENDMODE

- `Podaj nową wartość dla TRIMEXTENDMODE (1 Szybki, 0 Standardowy)`: od czego startują {{cmd:TRIM}} i {{cmd:EXTEND}}. `1` Szybki: każdy obiekt jest krawędzią tnącą albo granicą. `0` Standardowy: najpierw pytają o krawędzie. Także `(setvar "TRIMEXTENDMODE" 0)` w LISP.

### TRIM

Aliasy: `TR`. Najpierw wypisuje `Bieżące ustawienia: tryb Szybki (TRIMEXTENDMODE 1), krawędzie: bez wydłużania, przeciąganie rysuje ścieżkę`. W trybie Szybkim każdy widoczny obiekt jest krawędzią tnącą, a obiekt, którego nic nie przecina, zostaje usunięty; w trybie Standardowym najpierw pyta `Wybierz krawędzie tnące (Enter = każdy obiekt)` i tnie tylko w tych miejscach.

- `Wybierz obiekt do przycięcia albo Shift+wybierz, aby wydłużyć [Krawędzie tnące (T)/Płot (F)/Okno (C)/Tryb (O)/Krawędź (E)/Usuń (R)/Cofnij (U)]`, powtarzane: kliknij kawałek do usunięcia (pokazuje się szary i przerywany, gdy wskaźnik na nim spocznie), przeciągnij ścieżkę przez kilka kawałków (wszystkie w jednym kroku) albo kliknij dwa puste miejsca, aby między nimi postawić płot. {{key:Shift}} zamiast tego wydłuża. `T` wybiera krawędzie tnące (tryb Standardowy), `F` pyta o punkty płotu, `C` dwa narożniki okna (kawałki częściowo w środku też idą), `O` pyta `Podaj opcję trybu przycinania [Szybki/Standardowy]`, `E` pyta `Podaj tryb wydłużenia domniemanej krawędzi [Wydłuż/Nie wydłużaj]` (EDGEMODE), `R` usuwa obiekty, które wybierzesz, `U` cofa ostatni wybór lub przeciągnięcie. {{key:Enter}} kończy. Zobacz [Przytnij i wydłuż](topic:trim-and-extend).

- Kliknięcie kreskowania przycina kreskowanie: krawędzie tnące dzielą obszar kreskowania, a kawałek, który kliknąłeś, zostaje usunięty (nie zostaje żaden narysowany kontur w jego miejscu). Kreskowanie zachowuje swój wzorzec albo gradient; kreskowanie połączone ze swoją granicą po tym nie jest już połączone, bo już jej nie wypełnia. Informuje, gdy żadna krawędź tnąca nie dzieli kreskowania w tym miejscu, gdy kliknięcie jest poza kreskowaniem i gdy nic by nie zostało (użyj {{cmd:ERASE}}). Przeciągnięta ścieżka albo płot nie tną kreskowań.

### EXTEND

Aliasy: `EX`. To samo co TRIM w drugą stronę: `Wybierz obiekt do wydłużenia albo Shift+wybierz, aby przyciąć [Krawędzie graniczne (B)/Płot (F)/Okno (C)/Tryb (O)/Krawędź (E)/Cofnij (U)]`. Kliknięcie wydłuża koniec najbliższy kliknięciu do następnej granicy; przeciągnięta ścieżka albo płot wydłuża każdy obiekt, który przecina; {{key:Shift}} przycina. `B` wybiera krawędzie graniczne (tryb Standardowy). Tryb i Krawędź są wspólne z TRIM.

### LINKVIEWS

Aliasy: `SYNCVIEWS`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Połącz widoki okienek}}, albo ikona łącza na kartach rysunku. `Połącz widoki okienek [WŁ./WYŁ.]` ({{key:Enter}} wybiera drugi stan): gdy włączone, przesunięcie albo zoom w aktywnym okienku przesuwa każde okienko pokazujące ten sam rodzaj przestrzeni. Zobacz [Podziel ekran](topic:split-screen).

### OPENIN3D

Brak aliasów; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Otwórz w ModelCraft}}, gdzie aplikacja do modelowania 3D przejmuje przekazany rysunek. Otwiera go tam w nowej karcie jako DWG (nic nie jest wysyłane). Jeśli przeglądarka zablokuje kartę, informuje o tym.

### LASSOMODE

`Podaj nową wartość dla LASSOMODE (1 = lasso, 0 = prostokąt)`: co rysuje naciśnięcie i przeciągnięcie na pustym miejscu. To samo co Ustawienia › CadCraft › Przeciąganie do zaznaczenia. Zobacz [Zaznaczanie lassem](topic:lasso-selection).

### FILLET

Aliasy: `F`. Linie, łuki, okręgi i polilinie. Najpierw wypisuje `Bieżące ustawienia: Tryb = PRZYTNIJ, Promień = 0`.

- `Wybierz pierwszy obiekt [Cofnij (U)/Polilinia (P)/Promień (R)/Przytnij (T)/Wielokrotnie (M)]`
  - `R` pyta `Podaj promień zaokrąglenia <ostatni>`. `T` pyta `Podaj opcję trybu przycinania [Przytnij/Nie przycinaj]`: przy Nie przycinaj obiekty zostają takie, jakie są, a dodawany jest tylko łuk.
  - `M` zostawia polecenie włączone dla kolejnych narożników, aż do {{key:Enter}}; `U` cofa ostatni narożnik, nie opuszczając polecenia.
  - `P` pyta `Wybierz polilinię 2D [Promień]` i zaokrągla każdy narożnik, w którym spotykają się dwa proste odcinki. Zaokrąglenia, które już ma, są zastępowane nowym promieniem; promień 0 je usuwa. Narożniki, których boki są za krótkie na ten promień, zostają pominięte i są liczone.
- `Wybierz drugi obiekt albo Shift+wybierz, aby zastosować narożnik [Promień (R)]`. Przytrzymaj {{key:Shift}} podczas kliknięcia, aby uzyskać ostry narożnik, niezależnie od promienia.

Kliknij każdy obiekt na części, którą chcesz zachować. Dwie linie, które się nie stykają, są wydłużane. Dwie równoległe linie dostają półokrąg przez przerwę, na końcu pierwszej linii najbliższym kliknięciu. Okrąg nigdy nie jest cięty. Dwa sąsiednie odcinki jednej polilinii dostają łuk wewnątrz polilinii; polilinia i inny obiekt działają, gdy cięcie trafia w pierwszy albo ostatni odcinek polilinii.

### CHAMFER

Aliasy: `CHA`. Linie i proste odcinki polilinii. Najpierw wypisuje bieżące odległości (albo długość i kąt).

- `Wybierz pierwszą linię [Cofnij (U)/Polilinia (P)/Odległość (D)/Kąt (A)/Przytnij (T)/Metoda (E)/Wielokrotnie (M)]`
  - `D` pyta `Podaj pierwszą odległość fazki <ostatnia>` i `Podaj drugą odległość fazki <pierwsza>`: pierwsza jest odcinana od pierwszej wskazanej linii, druga od drugiej.
  - `A` pyta `Podaj długość fazki na pierwszej linii` i `Podaj kąt fazki od pierwszej linii`.
  - `E` (Metoda) wybiera, która z dwóch następna fazka używa. `T`, `M`, `U` i `P` działają jak w {{cmd:FILLET}}.
- `Wybierz drugą linię albo Shift+wybierz, aby zastosować narożnik [Odległość/Kąt/Metoda]`. Shift+kliknięcie robi ostry narożnik.

Odległość dłuższa niż linia jest odrzucana (`Odległość jest zbyt duża.`).

### BREAK i BREAKATPOINT

Aliasy: `BR`. `Wybierz obiekt` (miejsce kliknięcia jest pierwszym punktem), `Wskaż drugi punkt przerwania [Pierwszy punkt]`; `F` pyta `Wskaż pierwszy punkt przerwania` i `Wskaż drugi punkt przerwania`. Część między nimi znika; na okręgu przeciwnie do ruchu wskazówek zegara od pierwszego punktu. BREAKATPOINT pyta `Wskaż punkt przerwania` i dzieli obiekt w tym miejscu na dwa (nie okrąg).

### LENGTHEN

Aliasy: `LEN`. `Wybierz obiekt do zmierzenia [Delta/Procent/Całkowita/Dynamiczna]`: wskazanie wypisuje `Bieżąca długość` (i kąt objęty łukiem) i pyta ponownie. `DE` pyta `Podaj długość przyrostu (ujemna skraca) [Kąt]`, `P` `Podaj długość w procentach`, `T` `Podaj długość całkowitą [Kąt]`, `DY` przeciąga. Potem `Wybierz obiekt do zmiany [Cofnij (U)]`, powtarzane: zmienia się koniec najbliższy kliknięciu. Linie, łuki i otwarte polilinie.

### JOIN

Aliasy: `J`. `Wybierz obiekty do połączenia`. Linie, łuki i otwarte polilinie, które spotykają się koniec w koniec, stają się polilinią (zamkniętą, gdy łańcuch się zamyka); linie na jednej prostej stają się jedną linią; łuki jednego okręgu stają się jednym łukiem albo okręgiem. Historia podaje, ile obiektów się połączyło, a ile nie.

### MATCHPROP

Aliasy: `MA`, `PAINTER`. `Wybierz obiekt źródłowy`, potem `Wybierz obiekty docelowe [Ustawienia]` i {{key:Enter}}. Kopiuje warstwę i kolor, a między obiektami tego samego rodzaju także wysokość i szerokość tekstu, rozmiary wymiarów albo wzorzec kreskowania. `S` pyta `Włącz lub wyłącz właściwość [Kolor/Warstwa/Tekst/Wymiar/Kreskowanie]`, powtarzane aż do {{key:Enter}}; wybór jest zapamiętany na sesję.

### EXPLODE

Aliasy: `X`. Polilinie stają się liniami i łukami, odwołania do bloków stają się swoimi obiektami, wymiary stają się liniami, grotami strzałek i tekstem. Macierz, która pozostaje edytowalna ({{cmd:ARRAYEDIT}}), staje się zwykłymi kopiami swoich obiektów.

- `Wybierz obiekty`

### GROUP

Alias: `G`. {{cmd:GROUP}} nadaje zaznaczonym obiektom wspólną nazwę. Zaznacz obiekty, a potem wpisz nazwę (bez spacji; `?` wypisuje grupy; Enter tworzy grupę bez nazwy) i, dla grupy z nazwą, opcjonalny opis. Od tej chwili kliknięcie jednego z nich albo okno, które go obejmuje, zaznacza wszystkie, więc przesuwają się, kopiują i usuwają razem; każdy obiekt nadal jest osobnym obiektem. Obiekt może być w kilku grupach. Kopia całej grupy jest nową grupą bez nazwy; kopia jednego członka samodzielnie dołącza do grupy. Grupy należą do przestrzeni, w której powstały (modelu albo arkusza). Są zachowywane, gdy zapisujesz jako DWG albo DXF i otwierasz plik ponownie w CadCraft; pliki DXF 2000 niosą je też jako obiekty grupy dla innych programów, a grupy zrobione w innym programie są odczytywane, gdy otwiera się DXF albo DWG.

### UNGROUP

{{cmd:UNGROUP}} rozbiera grupy: zaznacz obiekty grup (każda grupa, w której są, zostaje rozebrana) albo wpisz `Nazwa` i nazwę grupy. Obiekty zostają w rysunku. Jeden krok cofnięcia przywraca grupy.

### GROUPEDIT

{{cmd:GROUPEDIT}} zmienia jedną grupę. Wskaż jeden z jej obiektów albo `Nazwa` i jej nazwę; grupa, która jest już zaznaczona, jest brana taka, jaka jest. Potem: `Dodaj` obiekty (wskazywane po jednym, a nie grupa po grupie), `Usuń` obiekty, `Zmień nazwę` grupy, zmień jej `Opis` albo ustaw `Zaznaczalna` (czy kliknięcie jednego obiektu zaznacza całą grupę). `eXit` albo Enter kończy. Grupa bez obiektów znika.

### PICKSTYLE

- `Wybór grupy: 0 kliknięcie zaznacza jeden obiekt, 1 całą grupę`: przy `1` (ustawienie startowe) kliknięcie albo okno na obiekcie w grupie zaznacza całą grupę; przy `0` pojedyncze obiekty, więc możesz edytować jednego członka. Zachowane na tę sesję.

## Schowek

Schowek CadCraft: działa w obrębie rysunku, między rysunkami i między kartami CadCraft w tej przeglądarce. Zobacz [Kopiuj, wklej i duplikuj](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, albo {{ui:Kopiuj}} w grupie {{ui:Edycja}}. Kopiuje obiekty do schowka wraz z blokami i warstwami, których używają. Obiekty zostają zaznaczone.

- `Wybierz obiekty do skopiowania` (pomijane, gdy obiekty są już zaznaczone)

### CUTCLIP

{{key:Mod+X}}, albo {{ui:Wytnij}} w menu {{ui:Więcej}}. Kopiuje obiekty do schowka, a potem je usuwa (jeden krok cofnięcia).

- `Wybierz obiekty do wycięcia` (pomijane, gdy obiekty są już zaznaczone)

### COPYBASE

Kopiuje obiekty do schowka z punktem bazowym, który wskażesz; wklejenie stawia ten punkt w miejscu wklejenia.

- `Wskaż punkt bazowy`
- `Wybierz obiekty do skopiowania`

### PASTECLIP

{{key:Mod+V}}, albo {{ui:Wklej}} w grupie {{ui:Edycja}}. Kopia podąża za kursorem, zwisając od dolnego lewego narożnika swojego zasięgu (albo od jego środka, albo od punktu {{cmd:COPYBASE}}; zobacz [Ustawienia CadCraft](topic:settings)).

- `Wskaż punkt wstawienia`

Wklejone obiekty są zaznaczone. Blok, który rysunek już ma o tej samej nazwie, zachowuje definicję z tego rysunku.

Gdy obszar skopiowany w MarkupCraft jest nowszy niż to, co skopiował CadCraft (i ma mniej niż 6 godzin), {{key:Mod+V}} i `PASTECLIP` wklejają zamiast tego ten obszar: zobacz `PASTEAREA`.

### PASTEAREA

Aliasy: `PAREA`. {{ui:Wklej skopiowany obszar}} w menu {{ui:Więcej}}. Wkleja obszar skopiowany w MarkupCraft przez {{ui:Kopiuj obszar}} jako obraz w jego prawdziwym rozmiarze. Zobacz [Obrazy w rysunku](topic:pictures).

- `Wskaż lewy dolny narożnik skopiowanego obszaru`
- `Skaluj jego rozmiar papieru przez (100 dla arkusza 1:100; Punkty: dwa punkty na nim i ich prawdziwa odległość) [Punkty] <1>` (tylko gdy arkusz nie miał skali rysunku): liczba, {{key:Enter}} dla rozmiaru papieru albo `P`, a potem `Pierwszy punkt na wklejonym obszarze`, `Drugi punkt na wklejonym obszarze` i ich prawdziwa odległość.

### PASTEORIG

{{key:Mod+Shift+V}}, albo {{ui:Wklej w miejscu}} w menu {{ui:Więcej}}. Wkleja we współrzędnych, z których obiekty zostały skopiowane. Nic nie pyta.

### DUPLICATE

Aliasy: `DUP`. {{key:Mod+D}}, albo {{ui:Duplikuj i przesuń}} w menu {{ui:Więcej}}. Kopia obiektów porusza się za wskaźnikiem od miejsca, w którym są; {{key:Esc}} nic nie zostawia. Nie używa schowka.

- `Wybierz obiekty do zduplikowania` (pomijane, gdy obiekty są już zaznaczone)
- `Wskaż, gdzie trafi kopia (Esc nic nie zostawia)`: kliknij, wpisz punkt, `@dx,dy` (od miejsca, gdzie był wskaźnik) albo odległość w stronę kursora.

### SELECT

Pyta `Wybierz obiekty` (z każdą opcją poniżej) i zostawia zaznaczone to, co wybrałeś, dla następnego polecenia albo dla `P` później.

### QSELECT

Aliasy: `QS`. W przeglądarce okno {{ui:Szybkie zaznaczenie}} (zobacz [Zaznaczanie obiektów](topic:select-objects#select-by-a-rule-quick-select)). Bez niego wiersz poleceń pyta `Podaj typ obiektu`, `Podaj właściwość`, `Podaj operator [=/<>/>/</*/Zaznacz wszystko] <=>` i `Podaj wartość`. Trafienia stają się zaznaczeniem.

### SELECTSIMILAR

Aliasy: `SIM`. `Wybierz obiekty [SEttings]` (albo bieżące zaznaczenie): zaznacza każdy obiekt tego samego typu z tą samą warstwą i kolorem (oraz nazwą bloku i wzorcem kreskowania). `SE` pyta `Włącz lub wyłącz właściwość [LAyer/COlor/NAme/PAttern/HEight]`, powtarzane aż do {{key:Enter}}.

### FIND

Brak aliasów; albo {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Znajdź i zamień}}. W przeglądarce okno {{ui:Znajdź i zamień}} (zobacz [Dodawanie tekstu i opisów](topic:text#find-and-replace-words)). Bez niego: `Podaj tekst do znalezienia`, potem `Podaj tekst zastępujący (Enter: zaznacz to, co znaleziono)`. Szuka w tekście, wartościach atrybutów i tekście wymiarów, na otwartej karcie albo w zaznaczeniu.

### SELECTALL i DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) zaznacza każdy obiekt, który można edytować na otwartej karcie. `DESELECT` (aliasy `AI_DESELECT`, `SELECTNONE`; albo {{key:Esc}}) czyści zaznaczenie.

## Wymiary

### DIMLINEAR

Aliasy: `DLI`, `DIMLIN`. Odległość pozioma lub pionowa.

- `Wskaż pierwszy początek linii wymiarowej [Wybierz obiekt (S)]` (Enter albo `S`: `Wybierz obiekt do wymiarowania`, potem kliknij linię, łuk, okrąg albo odcinek polilinii)
- `Wskaż drugi początek linii wymiarowej`
- `Wskaż położenie linii wymiarowej [Tekst/Poziomo/Pionowo/Obrócona]`. `T` pyta o tekst (`<>` to zmierzona wartość), `H` i `V` ustalają kierunek, `R` pyta `Podaj kąt linii wymiarowej <0>`.

### DIMALIGNED

Aliasy: `DAL`, `DIMALI`. Prawdziwa odległość między dwoma punktami.

- Początki jak w {{cmd:DIMLINEAR}}, a potem `Wskaż położenie linii wymiarowej [Tekst]`.

### DIMANGULAR

Aliasy: `DAN`, `DIMANG`.

- `Wybierz łuk, okrąg albo linię, albo Enter dla wierzchołka`
- Łuk: jego kąt. Okrąg: `Wskaż drugi koniec kąta`. Linia: `Wybierz drugą linię`. Enter: `Wskaż wierzchołek kąta`, `Wskaż pierwszy koniec kąta`, `Wskaż drugi koniec kąta`.
- `Wskaż położenie linii wymiarowej [Tekst]`: kliknij wewnątrz kąta, który chcesz zmierzyć.

### DIMRADIUS i DIMDIAMETER

Aliasy: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Wybierz łuk albo okrąg`, potem `Wskaż położenie linii wymiarowej [Tekst]`.

### DIMCONTINUE

Aliasy: `DCO`, `DIMCONT`. Kontynuuje od ostatniego wymiaru liniowego lub równoległego (albo pyta `Wybierz wymiar liniowy lub równoległy`).

- `Wskaż drugi początek linii wymiarowej [Cofnij (U)]`, powtarzane aż do Enter.

### DIMBASELINE

Aliasy: `DBA`, `DIMBASE`. Jak {{cmd:DIMCONTINUE}}, ale każdy wymiar zaczyna się od pierwszego początku i jest ustawiany dalej na zewnątrz.

### DIMORDINATE

Aliasy: `DOR`, `DIMORD`. `Wskaż położenie elementu`, potem `Wskaż koniec odnośnika [Xdatum/Ydatum/Tekst]`. Zapisuje, jak daleko element jest od początku UCS wzdłuż X albo wzdłuż Y, na odnośniku: odnośnik biegnący mniej więcej w górę albo w dół daje X, ten biegnący w bok daje Y; `Xdatum` i `Ydatum` to ustalają. Najpierw ustaw początek poleceniem {{cmd:UCS}} (bez niego jest to punkt 0,0 rysunku). Uchwyty przesuwają element, początek i koniec odnośnika, a wartość podąża. Zapisywane jako prawdziwy wymiar współrzędnej w DWG i DXF. Odrzuca koniec odnośnika leżący na samym elemencie.

### DIMARC

Aliasy: `DAR`. `Wybierz łuk albo odcinek łukowy polilinii`, potem `Wskaż położenie wymiaru długości łuku [Tekst]`. Mierzy wzdłuż łuku (nie cięciwy) i wpisuje symbol łuku przed wartością. Odrzuca pełny okrąg, linię albo prosty odcinek polilinii. DWG zachowuje go jako wymiar długości łuku; DXF zachowuje go jako wymiar kątowy z długością jako tekstem, a CadCraft otwiera go ponownie jako wymiar długości łuku.

### DIMJOGGED

Aliasy: `DJO`, `JOG`. `Wybierz łuk albo okrąg`, `Wskaż ręczne położenie środka`, `Wskaż położenie załamania`. Wymiar promienia dla krzywej, której środek jest daleko albo poza arkuszem: linia wymiarowa zaczyna się od punktu, który podasz, zamiast od środka, z załamaniem, i nadal podaje prawdziwy promień. DWG zachowuje go jako wymiar promienia z załamaniem; DXF zachowuje go jako wymiar promienia, a CadCraft otwiera go ponownie z załamaniem.

### DIMJOGLINE

Aliasy: `DJL`. `Wybierz wymiar, aby dodać załamanie [Usuń]`, potem `Wskaż położenie załamania (albo naciśnij Enter)`. Umieszcza symbol załamania na linii wymiaru liniowego lub równoległego, by pokazać, że odległość nie jest rysowana w skali; wartość się nie zmienia. `Usuń` zdejmuje go. Odrzuca inne rodzaje wymiarów.

### QDIM

Brak aliasów. `Wybierz geometrię do wymiarowania`, potem `Wskaż położenie linii wymiarowej [Ciągły/Zygzakowaty/Od linii bazowej/Współrzędne/Promień/Średnica/punktOdniesienia]`. Wymiaruje kilka obiektów naraz, od końców linii i odcinków polilinii, środków okręgów i łuków, punktów i odwołań do bloków. Położenie powyżej albo poniżej obiektów mierzy w poprzek, a położenie obok nich mierzy w górę. `Ciągły` łączy punkty łańcuchem, `Od linii bazowej` mierzy wszystkie od pierwszego, `Zygzakowaty` zagnieżdża pary od środka na zewnątrz, `Współrzędne` podaje każdemu punktowi jego odległość od punktu odniesienia (`punktOdniesienia` wybiera nowy), `Promień` i `Średnica` wymiarują każdy wybrany okrąg i łuk. Tryb jest zapamiętywany. Wszystko, co tworzy, to jeden krok cofnięcia. Informuje, gdy jest mniej niż dwa punkty albo nie ma łuków ani okręgów dla Promienia i Średnicy.

### DIMBREAK

Aliasy: `DBREAK`. `Wybierz wymiary, aby dodać lub usunąć przerwy`, potem `Przerwij tam, gdzie przecinają je inne obiekty [Auto/Ręcznie/Usuń] <Auto>`. `Auto` zostawia przerwę w liniach wymiarowych i wynoszących wszędzie tam, gdzie przecina je inny obiekt, i przelicza przerwy od nowa, gdy te obiekty albo wymiar się przesuną. `Ręcznie` (jeden wymiar) pyta o dwa punkty i zostawia przerwę między nimi. `Usuń` zdejmuje wszystkie przerwy. Przerwa to 1,5 raza wysokość tekstu wymiaru.

### DIMSPACE

Brak aliasów. `Wybierz wymiar bazowy`, `Wybierz wymiary do rozstawienia`, `Podaj wartość odstępu albo Auto <Auto>`. Przesuwa linie wymiarowe równoległych wymiarów liniowych i równoległych (albo kątowych o tym samym wierzchołku), tak że leżą w tej samej odległości od siebie, liczonej od wymiaru bazowego, każdy po swojej stronie. `0` ustawia je w jednej linii z bazowym; `Auto` to dwukrotność wysokości tekstu wymiaru bazowego. Wymiary, które nie są równoległe do bazowego, zostają w spokoju.

### DIMINSPECT

Brak aliasów. `Wybierz wymiary`, `Kształt ramki kontrolnej [Okrągła/Kątowa/Brak/usuń] <Okrągła>`, `Podaj etykietę`, `Podaj częstość kontroli <100%>`. Rysuje ramkę wokół wartości z etykietą przed nią i częstością kontroli po niej. `usuń` zdejmuje ramkę. Tekst tolerancji zostaje przy wartości.

### DIMOVERRIDE

Aliasy: `DOV`, `DIMOVER`. `Podaj nazwę zmiennej wymiaru do nadpisania albo Wyczyść`, `Podaj nową wartość dla …`, ponownie aż do Enter, a potem `Wybierz wymiary`. Zmienia te ustawienia tylko na zaznaczonych wymiarach; styl wymiaru nie jest zmieniany. Przyjmuje zmienne, które są liczbą albo przełącznikiem (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Wyczyść` przywraca zaznaczone wymiary do ich stylu. Odrzuca nazwę, która nie jest taką zmienną, i wartość, której nie może przyjąć.

### DIMREASSOCIATE

Aliasy: `DRE`, `DIMREASSOC`. `Wybierz wymiary`, a potem dla każdego jego początki linii wymiarowej (`Wskaż pierwszy początek linii wymiarowej na obiekcie`: przyciąga do końca albo środka linii, wierzchołka polilinii, środka; Enter zostawia ten punkt wolny), albo dla promienia, średnicy, wymiaru promienia z załamaniem albo długości łuku `Wybierz łuk albo okrąg`. Wymiar jest wtedy związany z tymi obiektami: gdy się przesuną albo zmienią rozmiar, podąża za nimi w tym samym kroku cofnięcia i mierzy od nowa. Ręczne przesunięcie związanego punktu albo usunięcie obiektu kończy to powiązanie. Powiązanie jest zapisywane w DWG i DXF 2000 jako dane własne CadCraft; inne programy widzą zwykły wymiar.

### DIMDISASSOCIATE

Aliasy: `DDA`, `DIMDISASSOC`. `Wybierz wymiary`. Uwalnia je od obiektów, z którymi były związane; nic się nie przesuwa.

### CENTERMARK

Aliasy: `CM`, `DIMCENTER`, `DCE`. `Wybierz okrąg albo łuk, aby dodać znak środka`, ponownie aż do Enter. Rysuje krzyż w środku i cztery linie osi do tuż za krzywą (typ linii CENTER), jako zwykłe linie na bieżącej warstwie; wielkość zależy od rozmiaru strzałki i skali ogólnej bieżących ustawień wymiarów, obrócona według UCS. Nie podążają za okręgiem, jeśli się przesunie.

### CENTERLINE

Aliasy: `CL`. `Wybierz pierwszą linię`, `Wybierz drugą linię`. Rysuje linię w połowie między dwiema liniami (wzdłuż dwusiecznej, gdy się spotykają), nieco dłuższą niż one, w typie linii CENTER. Zwykła linia: nie podąża za dwiema liniami.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Brak aliasów. Każde pyta `Podaj nową wartość dla … <bieżąca>` i ustawia ten rozmiar dla **nowych** wymiarów: skalę ogólną, wysokość tekstu, rozmiar strzałki, miejsca dziesiętne (do 8), odstęp wokół tekstu, wydłużenie poza linię wymiarową, przesunięcie od początku. Zobacz [Ustaw rozmiary wymiarów](topic:dimension-settings).

### DIMLUNIT

Ustawienie wymiaru: format długości tylko nowych wymiarów (1 naukowy, 2 dziesiętny, 3 inżynierski, 4 architektoniczny, 5 ułamkowy).

### DIMSTYLE i -DIMSTYLE

Aliasy: `DST`, `DDIM`, `D`. Menedżer stylów wymiarów: {{ui:Ustaw bieżący}}, {{ui:Nowy…}}, {{ui:Zmień…}}, {{ui:Zmień nazwę…}}, {{ui:Usuń}}, {{ui:Porównaj…}}, {{ui:Zastosuj do zaznaczonych}}. `-DIMSTYLE` w wierszu poleceń: `Styl wymiaru [Przywróć/Zapisz/Usuń/Zastosuj/Porównaj/zmieńNazwę/Lista]`. Zobacz [Ustaw rozmiary wymiarów](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Edycja wymiaru [Strona główna/Nowy/Obrót/Ukośnie] <Strona główna>`, potem wymiary (albo te już zaznaczone). Nowy pyta o tekst (`<>` = zmierzona wartość); Obrót o kąt (0 przywraca tekst); Ukośnie o kąt linii wynoszących od osi X (Enter = brak; tylko wymiary liniowe i równoległe). `DIMTEDIT` (`DIMTED`): `Tekst wymiaru [Lewo/Prawo/Środek/Strona główna/Kąt] <Środek>`. Zobacz [Ustaw rozmiary wymiarów](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasy: `DTU`. `Jednostki w tekście nowych wymiarów [Jednostki rysunku/mm/cm/m/km]`, albo przy zaznaczonych wymiarach `Jednostki w tekście zaznaczonych wymiarów`. Zapisuje zmierzoną długość w tej jednostce z jednostką po niej (DIMLFAC i przyrostek DIMPOST); `D` wraca do jednostek rysunku. Zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasy: `RC`. Wypisuje `Długość łuku: … Typ: …`, potem `Wskaż pierwszy punkt [Długość łuku/Obiekt/Prostokątna/Wielokątna/Odręczna]`. Prostokątna pyta `Wskaż przeciwległy narożnik`; Wielokątna `Wskaż następny punkt (Enter zamyka chmurę) [Cofnij (U)]`; Odręczna podąża za wskaźnikiem, aż do kliknięcia albo {{key:Enter}}; `O` pyta `Wybierz obiekt` i `Odwrócić kierunek? [Tak/Nie] <N>` i zamienia obiekt w chmurę. `A` pyta `Podaj długość każdego łuku`. `R`, `P` i `F` wybierają rodzaj dla następnej chmury. Wynikiem jest zamknięta polilinia z łuków.

### MLEADER

Aliasy: `MLD`; albo {{ui:Odnośnik}}. `Wskaż położenie grotu odnośnika [Rozmiar grotu/Odległość lądowania/Blok]`, `Wskaż położenie lądowania odnośnika`, potem tekst w oknie na miejscu (albo, bez niego, `Wpisz tekst (pusty wiersz kończy)`). `Blok` najpierw pyta o nazwę bloku, a wielokrotny odnośnik pokazuje ten blok zamiast tekstu. Więcej linii odnośnika: {{cmd:MLEADEREDIT}}. Zapisywany jako prawdziwy wielokrotny odnośnik w DWG; DXF zachowuje linie, grot i tekst, które rysuje.

### MLEADEREDIT

Aliasy: `MLE`. `Wybierz wielokrotny odnośnik`, potem `Wskaż położenie grotu odnośnika [Usuń odnośniki/Zawartość bloku/Zawartość tekstu]`: każdy punkt dodaje linię odnośnika od nowego grotu do tego samego lądowania, aż do Enter. `Usuń odnośniki` zdejmuje wtedy kliknięty odnośnik (wielokrotny odnośnik zachowuje co najmniej jeden). `Zawartość bloku` pyta o nazwę bloku i pokazuje ten blok zamiast tekstu (jego atrybuty są pytane); `Zawartość tekstu` przywraca tekst. Każda linia odnośnika ma własny uchwyt. DWG zachowuje każdą linię odnośnika i blok w jednym wielokrotnym odnośniku.

### MLEADERALIGN

Aliasy: `MLA`. `Wybierz wielokrotne odnośniki`, potem `Wybierz wielokrotny odnośnik, do którego wyrównać [Rozłóż/Odstęp/Użyj bieżącego odstępu]` i `Wskaż kierunek`. Przenosi lądowania pozostałych wielokrotnych odnośników (i ich tekst albo blok) na linię przechodzącą przez lądowanie wskazanego w tym kierunku; groty zostają tam, gdzie wskazują. `Odstęp` ustawia także równe odstępy między nimi; `Rozłóż` pyta o dwa punkty i rozkłada je równo między nimi. Potrzebne są co najmniej dwa wielokrotne odnośniki.

### MLEADERCOLLECT

Aliasy: `MLC`. `Wybierz wielokrotne odnośniki`, potem `Wskaż położenie zebranego wielokrotnego odnośnika [Pionowo/Poziomo]` (Enter zostawia miejsce pierwszego). Tworzy jeden wielokrotny odnośnik z kilku: ich bloki trafiają do nowego bloku, który trzyma wszystkie obok siebie albo jeden pod drugim; zawartość tekstowa staje się jedną notatką z wierszem dla każdego. Pierwszy wielokrotny odnośnik zachowuje swoje linie odnośników; pozostałe są usuwane. Odrzuca mieszankę zawartości tekstowej i blokowej.

### TABLE

Aliasy: `TB`; albo {{ui:Adnotacje}} › {{ui:Więcej}} › {{ui:Tabela}}. Tworzy tabelę: jeden obiekt, który przesuwasz, kopiujesz, obracasz, skalujesz i drukujesz jak każdy inny, z komórkami trzymanymi jako dane.

- `Liczba wierszy danych albo [Wklej/Plik/Styl] <3>`, potem `Liczba kolumn <3>`, `Wysokość tekstu` i `Lewy górny narożnik tabeli`. Tabela dostaje wiersz tytułu (jedna scalona komórka) i wiersz nagłówka nad wierszami danych.
- `W`: tabela z komórek arkusza kalkulacyjnego w schowku (tekst z tabulatorem między komórkami). Naciśnięcie {{key:Ctrl+V}} z takimi komórkami w schowku robi to samo, chyba że własna kopia CadCraft jest nowsza (albo CadCraft nie potrafi tego rozstrzygnąć: wtedy wkleja swoją kopię i o tym mówi). `P`: tabela z pliku `.csv` albo rozdzielanego tabulatorami. Pierwszy wiersz staje się wierszem nagłówka; szerokości kolumn pasują do tekstu.
- `S`: wybierz styl tabeli dla tej tabeli (zobacz {{cmd:TABLESTYLE}}).
- Odrzuca liczbę wierszy albo kolumn, która nie jest liczbą całkowitą, i więcej komórek, niż tabela może mieć (2000 wierszy, 200 kolumn, 40 000 komórek).
- {{cmd:EXPLODE}} zamienia tabelę w linie i tekst. Zapisana jako DWG, tabela jest prawdziwym obiektem tabeli, który inne programy mogą edytować; zapisana jako DXF jest blokiem, który ją rysuje, a CadCraft otwiera ją ponownie jako tabelę.

### TABLEDIT

Aliasy: `TABLEEDIT`, `TABEDIT`; albo dwuklik komórki. Edytuje tabelę.

- `Wskaż komórkę do wpisania (Enter kończy) albo [Wiersz/Kolumna/Rozmiar/Scal/Rozdziel/Wyrównaj/Wysokość/Rodzaj/Wyczyść]`. Kliknij komórkę albo, gdy tabela jest zaznaczona, wpisz jej nazwę (`B3`: kolumna B, wiersz 3; wiersz tytułu to wiersz 1). W przeglądarce nad komórką otwiera się okno: {{key:Enter}} zachowuje tekst, {{key:Tab}} przechodzi do następnej komórki, {{key:Alt+Enter}} zaczyna nowy wiersz, {{key:Esc}} zostawia komórkę taką, jaka była.
- Tekst zaczynający się od `=` jest formułą: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, z `+ - * / ^`, nawiasami i funkcjami takimi jak `sqrt` i `round`. Komórka pokazuje wartość; formuła, która nazywa własną komórkę, komórkę poza tabelą albo komórkę bez liczby, pokazuje `####`, a wiersz poleceń mówi dlaczego.
- `R` / `C`: `Wstaw` albo `Usuń` wiersze lub kolumny przy wskazanej komórce (ile i powyżej albo poniżej, po lewej albo po prawej). Formuły podążają za komórkami, które nazywają.
- `S`: szerokość kolumny i wysokość wiersza. Wiersz nigdy nie jest niższy, niż potrzebuje jego tekst. Zaznaczona tabela ma też uchwyt na krawędzi każdej kolumny i każdego wiersza.
- `M`: scal od jednej wskazanej komórki do drugiej; `U`: rozdziel. `A`: wyrównanie (`TL` lewy górny … `MC` środek … `BR` prawy dolny). `H`: własna wysokość tekstu tej komórki (0 = wysokość stylu). `K`: ustaw wiersz jako tytuł, nagłówek albo wiersz danych. `CL`: opróżnia komórkę.
- Odrzuca tabelę na zablokowanej warstwie, usuwanie każdego wiersza albo kolumny oraz scalenie, które rozcięłoby inną scaloną komórkę na dwie.

### TABLESTYLE

Aliasy: `TS`. Wypisuje style tabel z liczbą tabel, które każdy używa, potem `Styl tabeli: [Nowy/Ustaw/Edytuj/Usuń/Zastosuj]`.

- Styl przechowuje wysokość tekstu i wyrównanie wierszy tytułu, nagłówka i danych, margines komórki oraz to, które obramowania są rysowane (zewnętrzne, między wierszami, między kolumnami).
- `N` tworzy styl z bieżącego i czyni go bieżącym; `S` ustawia bieżący styl (nowe tabele go przyjmują); `E` edytuje jeden: tabele, które go używają, są rysowane od nowa; `A` daje zaznaczonym tabelom bieżący styl; `D` usuwa jeden (nie Standardowy, nie bieżący; tabele, które go używały, zachowują swój wygląd).
- Style są zapisywane z rysunkiem (DWG i DXF).

### TABLEEXPORT

Zapisuje to, co pokazuje tabela, jako plik CSV (formuła jako jej wartość). `Wybierz tabelę` albo wybierz ją najpierw. Komórki tekstowe zaczynające się od `=`, `+`, `-` lub `@` dostają wiodące `'`, aby arkusz kalkulacyjny ich nie uruchomił.

### TABLEPASTE

Aliasy: `PASTETABLE`. Tworzy tabelę z komórek arkusza kalkulacyjnego w schowku, a potem pyta o jej lewy górny narożnik. To samo co {{cmd:TABLE}} › `Wklej`.

### DATALINK

Aliasy: `DL`. `Połączenie danych: [Nowe/Lista/Usuń] <Nowe>`. `N` pyta o plik CSV, umieszcza jego tabelę i zapamiętuje nazwę pliku; `L` wypisuje połączenia z ich plikiem, rozmiarem, czasem odczytu i liczbą tabel, które go używają; `R` usuwa połączenie (jego tabele zostają zwykłymi tabelami).

### DATALINKUPDATE

Aliasy: `DLU`. Odczytuje ponownie plik połączenia danych i uzupełnia tabele z nim połączone (wiersze i kolumny są dodawane lub usuwane, by pasować). Przeglądarka nie potrafi sama otworzyć pliku, więc prosi cię o ponowne wybranie pliku. Gdy połączeń jest kilka, pyta, o które chodzi.

### FIELD

Umieszcza w rysunku pole: tekst, który sam się oblicza. `Pole: [Data/Nazwa pliku/Arkusz/Właściwość/Obiekt/Wyrażenie/Kod] <Data>`:

- `D`: teraz, albo zapisana, utworzona lub wydrukowana data, i format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: nazwa pliku, z rozszerzeniem albo bez. `S`: numer arkusza, jego tytuł albo ile jest arkuszy. `P`: właściwość rysunku po nazwie (zobacz {{cmd:DWGPROPS}}). `O`: wskaż obiekt, a potem co odczytać (pole, długość, obwód, promień, średnica, warstwa, nazwa, x, y, tekst, obrót, kolor) i miejsca dziesiętne. `E`: formuła. `C`: tekst z kodami wpisanymi tak, jak są, na przykład `Arkusz %<sheetnumber>% z %<sheetcount>%`.
- Potem `Wybierz tekst, komórkę tabeli albo blok z atrybutami, do którego je wstawić (Enter: nowy tekst)`: wskazany tekst dostaje pole dopisane za tym, co zawiera; komórka tabeli tak samo; odwołanie do bloku pyta, który atrybut; {{key:Enter}} pyta o wysokość i punkt dla nowego tekstu.
- Na ekranie pole ma jasnoszare tło; wydruk i PDF nigdy go nie mają. Ręczne wpisanie nad tekstem pola kończy pole. Pole, którego nie da się obliczyć, pokazuje `####`.
- Pole obiektu znajduje swój obiekt po kluczu, który CadCraft trzyma przy obiektach (Ustawienia › CadCraft › Pliki przyjazne scalaniu); przy wyłączonych kluczach odrzuca.

### UPDATEFIELD

Aliasy: `UPDATEFIELDS`. `Wybierz obiekty, których pola mają być zaktualizowane (Enter: każde pole) albo [Ustawienia]`. `S` ustawia, kiedy pola aktualizują się same: wpisz litery `O` otwarcie, `S` zapis, `P` wydruk, `R` regeneracja (na start wszystkie cztery) albo `NONE`.

### DWGPROPS

Aliasy: `DRAWINGPROPS`. Wypisuje właściwości rysunku, potem `Zmień: [Tytuł/Temat/Autor/Firma/Słowa kluczowe/Uwagi/Własne/Usuń/eXit]`. Pierwszych sześć to te, które pokazuje panel {{ui:Szczegóły rysunku}}; `U` dodaje twoją nazwę i wartość, `R` usuwa jedną. Pola je odczytują (`%<prop:title>%`, `%<prop:Client>%`) i podążają od razu. Odrzuca własną nazwę, która jest jedną z wbudowanych albo zawiera `%`, `<`, `>`, cudzysłów albo ukośnik wsteczny.

## Parametryczne

Zobacz [Nadaj więzy rysunkowi](topic:constraints) i [Używaj parametrów i równań](topic:parameters). Więzy działają na karcie {{ui:Model}}.

### GEOMCONSTRAINT i polecenia GC

Alias `GCON`: `Podaj typ więzu [Poziomo/Pionowo/Prostopadle/Równolegle/Styczność/Współpadanie/Współśrodkowość/Współliniowość/Symetria/Równość/Stała] <Poziomo>`, potem monity tego polecenia.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Wybierz obiekt [2Punkty] <2Punkty>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Wybierz pierwszy obiekt`, `Wybierz drugi obiekt` (drugi się przesuwa).
- {{cmd:GCCOINCIDENT}}: `Wybierz pierwszy punkt [Obiekt/Autowięzy] <Obiekt>`, `Wybierz drugi punkt [Obiekt] <Obiekt>`.
- {{cmd:GCFIX}}: `Wybierz punkt [Obiekt] <Obiekt>`.
- {{cmd:GCSYMMETRIC}}: `Wybierz pierwszy obiekt [2Punkty] <2Punkty>`, `Wybierz drugi obiekt`, `Wybierz linię symetrii`.

### DIMCONSTRAINT i polecenia DC

Alias `DCON`: `Wybierz wymiar asocjacyjny do konwersji [Liniowy/Poziomo/Pionowo/Równoległy/Kątowy/Promieniowy/Średnicowy/Konwertuj] <Równoległy>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Wskaż pierwszy punkt więzu [Obiekt] <Obiekt>`, `Wskaż drugi punkt więzu`, `Wskaż położenie linii wymiarowej`, `Tekst wymiaru <d1=40>` (liczba, wyrażenie albo `nazwa=wyrażenie`).
- {{cmd:DCALIGNED}}: jak wyżej, z `[Obiekt/Punkt i linia/2Linie]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Wybierz łuk albo okrąg`. {{cmd:DCANGULAR}}: `Wybierz pierwszą linię albo łuk`, `Wybierz drugą linię`.
- {{cmd:DCCONVERT}}: `Wybierz wymiary do konwersji`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Wybierz obiekty [Ustawienia]`. `S` pyta o tolerancje odległości i kąta.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Wybierz obiekty`; ich więzy znikają.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Wybierz obiekty [Pokaż wszystkie/Ukryj wszystkie]`, potem `[Pokaż/Ukryj]`.
- {{cmd:DCDISPLAY}}: `Podaj opcję [Pokaż/Ukryj]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (aliasy `PAR`, `PARAM`) otwiera panel {{ui:Parametry}}. `-PARAMETERS`: `Podaj opcję [Nowy/Edytuj/Zmień nazwę/Usuń/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Pobiera makro (.swb), które odbudowuje model jako jeden szkic z więzami w SolidWorks. Zobacz [Przenoszenie szkiców do innych modelerów części i z nich](topic:solidworks-sketches).

## Bloki

### ANNOSCALE

Aliasy: `CANNOSCALE`. Podaje skalę adnotacji rysunku i liczbę obiektów adnotacyjnych, które zawiera, potem pyta `Nowa skala adnotacji`: wpisz `1:50`, `1:100`, `2:1`, samą liczbę (`50` to 1:50) albo nazwę jednej ze skal własnych rysunku. Każdy adnotacyjny tekst i wymiar jest przeskalowany tak, by drukował się w tym samym rozmiarze w nowej skali, w jednym kroku cofnięcia; obiekty nieadnotacyjne zostają w spokoju, podobnie obiekt, który trzyma listę skal bez nowej (zobacz {{cmd:OBJECTSCALE}}). Zobacz [Jednostki, papiery i skale](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasy: `OBJSCALE`. `Wybierz obiekty adnotacyjne`, potem `Skale adnotacji zaznaczonych obiektów [Dodaj/Usuń/Bieżąca skala/Lista/eXit] <Dodaj>`. Adnotacyjny tekst albo wymiar trzyma listę skal adnotacji. `Dodaj` i `Usuń` pytają o skalę (`1:50`, `2:1`, samą liczbę albo nazwę jednej ze skal własnych rysunku); `Bieżąca skala` dodaje skalę adnotacji rysunku; `Lista` wypisuje skale każdego obiektu. Okienko, którego skala jest na liście obiektu, pokazuje obiekt w rozmiarze, który drukuje jego wysokość papierową w tej skali, na ekranie i w wydrukach. Ostatniej skali nie da się usunąć. Obiekty nieadnotacyjne są pomijane: najpierw włącz Adnotacyjny we Właściwościach. Listy są zapisywane w DWG i DXF jako dane własne CadCraft. Zobacz [Jednostki, papiery i skale](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasy: `ANNOALL`. `Pokaż obiekty adnotacyjne przy wszystkich skalach [WŁ./WYŁ.]`. Włączone (tak jak startuje rysunek): obiekt adnotacyjny pokazuje się także w okienku albo w modelu, którego skali nie ma na jego liście, w rozmiarze, jaki ma. Wyłączone: nie jest tam pokazywany i nie da się go wskazać w modelu. Przełącznik to jeden krok cofnięcia; nie jest zachowywany w pliku.

### SCALELISTEDIT

Aliasy: `SCALELIST`. `Lista skal [Dodaj/Edytuj/Usuń/Lista/Resetuj]` aż do {{key:Enter}}. Dodaj: `Nazwa skali`, `Jednostki papieru`, `Jednostki rysunku`. Edytuj i Usuń pytają o nazwę skali. Skale własne rysunku dołączają do list skal okienek i wydruku i są zapisywane z rysunkiem. Zobacz [Jednostki, papiery i skale](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `Pierwszy punkt splajnu [Metoda/Obiekt] (Punkty dopasowania)`. Dopasowanie: punkty, przez które przechodzi krzywa; `Zamknij`, `Cofnij`, potem `Styczna początkowa` i `Styczna końcowa` (punkt albo {{key:Enter}}). Metoda › Wierzchołki kontrolne pyta o stopień (od 1 do 5) i rysuje z wielokąta kontrolnego. Obiekt zamienia polilinie w splajny przez ich wierzchołki. `SPLINEDIT` (`SPE`): `[Dane dopasowania/Edytuj wierzchołek/zamień na Polilinię/Otwórz lub Zamknij/Odwróć/Cofnij/eXit]`; Dane dopasowania `[Dodaj/Usuń/Przesuń/Wyczyść/Styczne/eXit]`; Edytuj wierzchołek `[Dodaj punkt kontrolny/Przesuń/Waga/eXit]`. `PEDIT` (`PE`): `[Zamknij/Otwórz/Połącz/Szerokość/Dopasuj/Splajn/Rozprostuj/Generuj typ linii/Odwróć/Cofnij/eXit]`, `M` dla kilku obiektów; linie, łuki i splajny są najpierw oferowane jako polilinie. Zobacz [Splajny i polilinie](topic:splines).

### BLOCK

Aliasy: `B`, `BMAKE`.

- `Podaj nazwę bloku`. Jeśli istnieje: `Blok „…” już istnieje. Zdefiniować ponownie? [Tak/Nie] <N>`.
- `Wskaż punkt bazowy wstawienia`
- `Wybierz obiekty`. Zostają zastąpione jednym odwołaniem do nowego bloku.

### WBLOCK

Aliasy: `W`, `-WBLOCK`. Zapisuje blok, kilka obiektów albo cały rysunek jako nowy plik DWG lub DXF. `Źródło WBLOCK [Blok/Cały rysunek/Obiekty] <Obiekty>`:

- **Obiekty**: `Wskaż punkt bazowy wstawienia` (staje się początkiem nowego rysunku), `Wybierz obiekty`, potem `Format pliku [DWG/DXF/R12 DXF]` i `Nazwa pliku nowego rysunku`, potem `Co zrobić z obiektami [Zachowaj/Zamień na blok/Usuń]`. Zamień zastępuje je jednym odwołaniem do bloku o nazwie pliku; Usuń je kasuje.
- **Blok**: `Blok do zapisania`. Własne obiekty bloku, z jego punktem bazowym jako początkiem, łącznie z zagnieżdżonymi blokami.
- **Cały rysunek**: każdy obiekt w przestrzeni modelu. Arkusze nie są zapisywane; użyj {{cmd:SAVEAS}} dla kopii, która je zachowuje.

Nowy plik zawiera tylko warstwy, typy linii, style tekstu i wymiarów oraz bloki, których używają jego obiekty, plus jednostki rysunku. Wersja DWG to ta, której ostatnio użyło {{cmd:SAVEAS}}. W przeglądarce plik jest pobierany; w Studio otwiera się okno zapisu.

### ATTDEF

Aliasy: `ATT`, `DDATTDEF`, `-ATTDEF`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Zdefiniuj atrybut}}. Wypisuje tryby, potem `Podaj opcję do zmiany (Enter gdy skończysz) [Niewidoczny/Stały/Wstępny]`, `Podaj nazwę znacznika atrybutu`, `Podaj podpowiedź atrybutu`, `Podaj domyślną wartość atrybutu` (`Podaj wartość atrybutu`, gdy stały), `Wskaż punkt początkowy tekstu`, `Podaj wysokość tekstu`, `Podaj kąt obrotu tekstu`. {{cmd:BLOCK}} przyjmuje definicje atrybutów do bloku.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, albo dwuklik odwołania z atrybutami; {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj atrybuty}}): `Wybierz odwołanie do bloku z atrybutami`, potem okno {{ui:Edytuj atrybuty}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): to samo odwołanie, potem `<podpowiedź> (<ZNACZNIK>) <wartość>` dla każdego atrybutu; {{key:Enter}} zachowuje wartość. Zobacz [Atrybuty](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Zaktualizuj atrybuty odwołań którego bloku [Nazwa/Wybierz/Wszystkie] <Wybierz>`. Wartości zachowane; nowe atrybuty dostają swoją wartość domyślną, usunięte znikają, położenia się resetują.

### BATTMAN

{{ui:Bloki}} › {{ui:Więcej}} › {{ui:Menedżer atrybutów}}. Okno: blok, atrybuty (znacznik, podpowiedź, wartość domyślna, tryby, kolejność), {{ui:Zaktualizuj odwołania (wartości zachowane)}}, {{ui:Zastosuj}}.

### REFEDIT i REFCLOSE

{{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj w miejscu}}. `REFEDIT`: `Wybierz odwołanie do bloku do edycji w miejscu` (albo zaznaczenie). `REFCLOSE`: `Zapisać zmiany w „…”? [Zapisz/Odrzuć] <Zapisz>`; {{ui:Zapisz blok}} i {{ui:Odrzuć}} na pasku robią to samo. Cała edycja to jeden krok cofnięcia. Zobacz [Atrybuty](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[WŁ./WYŁ.]`: czy nacisk pociągnięcia pióra ustala grubość linii tego, co robią {{cmd:SKETCHFIX}} i {{cmd:SKETCHLIVE}} (domyślnie włączone). Zobacz [Szkicuj piórem](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Podaje, który standard biura obowiązuje dla tego rysunku i skąd pochodzi: zapis własny rysunku, wspólny standard twojego zespołu albo twoje Domyślne zasady (wysokości tekstu `all.anno.*`); bez żadnego używane są własne rozmiary programu. `[Importuj/Warstwy/Blok tytułowy/Wyczyść/eXit]`: `Importuj` czyta plik `.json` `cc-office-standard` (zapis, który piszą SuperCad i BimCraft) do tego rysunku, zachowany z nim w DWG i DXF; `Warstwy` dodaje warstwy biura, których rysunek nie ma, w jednym kroku cofnięcia, i nigdy żadnej nie usuwa; `Blok tytułowy` wypisuje pola biura z wartościami tego rysunku; `Wyczyść` usuwa zapis własny rysunku. Wysokości tekstu i wymiarów adnotacyjnych podążają za obowiązującym standardem. Zobacz [Jednostki, papiery i skale](topic:units-papers-scales).

### BPARAMS

Aliasy: `BPM`, `BLOCKPARAMS`. Otwiera menedżer parametrów dla bloku w edytorze bloków, bloku wybranego odwołania albo bloku, który podasz (`Nazwa bloku`): parametry z formułami, kilka parametrów widoczności z ich stanami i własne wartości oraz stany wybranego odwołania. Zobacz [Własne parametry i stany widoczności](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` robi to samo w wierszu poleceń: `[Parametr/Widoczność/Stan/Przypisz/Odwołanie/Gotowe]`.

### BEDIT i BCLOSE

`BE`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj blok}}. `Podaj nazwę bloku do edycji <blok wybranego odwołania>` otwiera edytor bloków. `BCLOSE` pyta `Zamknąć edytor bloków „…” [Zapisz/Odrzuć] <Zapisz>`; {{ui:Zapisz blok}} i {{ui:Odrzuć zmiany}} na pasku robią to samo. Wszystko zrobione w edytorze to jeden krok cofnięcia.

### VIEWBASE

Alias: `FLATSHOT`. Płaski widok 2D brył na karcie 3D: `Widok [Z przodu/Z góry/Z prawej/Z lewej/Od tyłu/Od dołu/Izometryczny]`, `Linie ukryte [Pokaż/Ukryj]`, skala (`1:20`, `2:1`; {{key:Enter}} wybiera tę, która pasuje do arkusza), a potem środek widoku. Jedno odwołanie do bloku, widoczne krawędzie na VIEW-VISIBLE, ukryte przerywane na VIEW-HIDDEN. Zobacz [Płaskie widoki na arkuszu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasy: `-PUBLISH`; albo {{ui:Wszystkie arkusze w jednym PDF}} w oknie {{ui:Drukuj do PDF}}. `Arkusze do wydruku [Wszystkie/Niektóre]`: {{key:Enter}} drukuje każdy arkusz, `S` pyta o nazwy oddzielone przecinkami. Jeden PDF, strona i zakładka na arkusz. Zobacz [Każdy arkusz w jednym PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasy: `SSM`, `SHEETSETMANAGER`. Przenosi cię do sekcji {{ui:Zestaw arkuszy}} lewego panelu: arkusze z wielu rysunków, ponumerowane i z tytułami, ich bloki tytułowe wypełnione z zestawu, opublikowane jako jeden PDF. Zobacz [Zestawy arkuszy](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): wskaż DWG albo DXF, potem jego punkt wstawienia. {{cmd:XREF}} (`XR`, `-XREF`): `Połączone rysunki [?/Dołącz/Wczytaj ponownie/Związaj/Odłącz] (Enter: ?)`; gdy połączeń jest więcej niż jedno, wskaż jedno z ich odwołań albo wpisz `N` i jego nazwę. Zobacz [Połączone rysunki](topic:files#linked-drawings-external-references).

### COUNT

Aliasy: `BCOUNT`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Policz bloki}}. `Wybierz odwołanie do bloku do zliczenia albo [Wszystkie/Eksport] (Enter: Wszystkie)`: wskazanie zaznacza i liczy każde odwołanie tego bloku w tej przestrzeni; {{key:Enter}} albo `A` wypisuje je wszystkie; `E`, potem `C` (liczby) albo `A` (atrybuty) pobiera CSV. Zobacz [Policz bloki i wyeksportuj zestawienie](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasy: `I`, `DDINSERT`.

- `Podaj nazwę bloku albo [Plik/Biblioteka] <ostatni blok>` (wielkość liter nie ma znaczenia). `F` pyta o DWG albo DXF, potem o cały rysunek albo jeden z jego bloków; nazwa już użyta pyta o {{ui:Zachowaj istniejący}} albo {{ui:Zmień nazwę}}. `L` otwiera panel biblioteki.
- `Wskaż punkt wstawienia [Skala/Obrót]`. `S` pyta `Podaj współczynnik skali`, `R` pyta `Podaj kąt obrotu`; oba są zapamiętywane.
- Gdy blok już stoi obok obiektów, które powtarzają się gdzie indziej bez niego, wiersz podaje, ile miejsc jest sugerowanych, a monit dostaje `suGgested`: `G` je pokazuje; kliknij w pobliżu jednego, aby umieścić tam blok, `A` dla wszystkich, {{key:Enter}}, by wrócić. Biorą obrót swoich sąsiadów i domyślne wartości atrybutów. Rysunki powyżej 20 000 obiektów w otwartej przestrzeni nie są przeszukiwane.
- Potem `Podaj <podpowiedź> (<ZNACZNIK>) <domyślna>` dla każdego atrybutu, którego blok wymaga. Zobacz [Atrybuty bloku](topic:attributes).

### LIBRARY

Aliasy: `LIB`. Otwiera panel biblioteki: umieszczanie elementów, sprawdzanie aktualizacji, autorstwo biblioteki. Bez pytań. Zobacz [Wstaw z pliku lub z biblioteki](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasy: `SMEMBER`; albo {{ui:Element 3D}} na karcie {{ui:Standardowy}} biblioteki. `Rozmiar przekroju <W12x26>` (tak, jak wypisuje karta), potem `Punkt początkowy [Słup]` i `Punkt końcowy`: element bryłowy na karcie 3D między dwoma punktami, stojący na ziemi. `C` pyta o punkt bazowy słupa i jego wysokość. Jeden krok cofnięcia. Zobacz [Umieszczanie przekrojów stalowych i części standardowych](topic:steel-and-standard-parts).

### PARTSLIST

Aliasy: `PLIST`. `Lewy górny narożnik listy części`, potem `Wysokość tekstu <2.5>`: rysuje tabelę każdej standardowej części i przekroju stalowego umieszczonego z biblioteki (numery elementów, ilość, część, norma, rozmiar, długość, materiał, masa). Jeden krok cofnięcia. Zobacz [Umieszczanie przekrojów stalowych i części standardowych](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasy: `PU`. Usuwa definicje bloków, których nic nie używa. Bez pytań.

### DELBLOCKS

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Usuń bloki}}. `Wybierz blok do usunięcia [Nazwa/eXit]`: wskaż odwołanie do bloku, albo `N` dla listy bloków z filtrem (wybierz kilka), albo `X` / {{key:Enter}}, aby zakończyć. Każde odwołanie znika — w modelu, na każdym arkuszu i wewnątrz innych bloków — a potem definicja; wiersz poleceń mówi, co usunięto, a czego nie dało się usunąć. Bloki bez nazwy i połączone rysunki nie są oferowane. Monit wraca po następny blok; całe polecenie to jeden krok cofnięcia.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} wkleja to, co skopiowałeś ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), jako jeden blok: wskaż punkt wstawienia i tam trafia jedno odwołanie do nowego bloku, zaznaczone. Blok dostaje własną nazwę (`A$C` i liczba); {{cmd:RENAME}} nadaje twoją. Jeden krok cofnięcia usuwa odwołanie i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pyta o blok do zastąpienia i blok, który ma go zastąpić (`?` wypisuje bloki), potem zmienia każde odwołanie w modelu, na każdym arkuszu i wewnątrz innych bloków. Każde odwołanie zachowuje swoje miejsce, skalę, obrót, warstwę i wartości atrybutów, które mają oba bloki; atrybuty, które ma tylko nowy blok, zaczynają od wartości domyślnych, a polecenie mówi, które wartości przepadły. Gdy nic już nie używa starego bloku, proponuje jego usunięcie. Odrzuca połączone rysunki i zamiennik, który umieściłby blok w nim samym. Jeden krok cofnięcia.

### MINSERT

{{cmd:MINSERT}} umieszcza blok w wierszach i kolumnach za jednym razem: nazwa bloku, punkt wstawienia, skala, obrót, liczba wierszy i kolumn oraz odstępy między nimi. Cały zestaw obraca się z obrotem. Każdy element jest osobnym odwołaniem (10 000 najwyżej), więc każdy można później przesunąć albo usunąć.

### BLOCKSPALETTE

Aliasy: `BLOCKSPAL`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Panel Bloki}}. Pokazuje panel {{ui:Bloki}} z kursorem w jego filtrze. Każdy blok ma mały obrazek; te wstawione ostatnio są pierwsze. Dwa przyciski obok filtra przełączają między listą a siatką obrazków. Kliknij obrazek (albo {{ui:Wstaw}}), aby umieścić blok poleceniem {{cmd:INSERT}}, albo przeciągnij go na rysunek, aby umieścić go tam, gdzie upuścisz.

{{ui:Biblioteki}}, pod listą: {{ui:Dodaj rysunek}} bierze twój plik DWG albo DXF i wypisuje jego bloki z obrazkami oraz cały rysunek jako jeden blok. Umieszczenie jednego kopiuje jego definicję (oraz bloki, które zagnieżdża, i ich warstwy) do tego rysunku, tak jak robi opcja `File` polecenia {{cmd:INSERT}}; blok, który już tu jest z tą samą definicją, jest użyty bez pytania; o takiej samej nazwie, ale innej, pyta {{ui:Zachowaj istniejący}} albo {{ui:Zmień nazwę}}. W przeglądarce plik zostaje do zamknięcia strony. W CadCraft Studio {{ui:Dodaj folder}} wypisuje rysunki w folderze, każdy otwierany po kliknięciu, a pliki i foldery są zapamiętywane. Mały x usuwa bibliotekę z listy; plik nie jest ruszany. Wspólna {{ui:Biblioteka}} to coś innego: zobacz [Wstaw z pliku lub z biblioteki](topic:insert-from-file-and-library).

### BCONVERT

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Zamień powtórzenia na bloki}}. Znajduje geometrię, która się powtarza, i zamienia każdą kopię w odwołanie do jednego bloku.

- `Wybierz obiekty, które się powtarzają, albo [Blok]`: obiekty jednej kopii. `B` nazywa zamiast tego istniejący blok, aby znaleźć luźne kopie jego obiektów.
- `Kopia może być: lustrzana = Nie, skalowana = Nie; warstwa, kolor, typ linii i grubość linii = Dopasuj … [Lustrzane/Skalowane/Właściwości]`: `M`, `S` i `P` przełączają, co liczy się jako kopia; {{key:Enter}} szuka. Ustawienia są zapamiętywane.
- `Nazwa nowego bloku <Blok1>`, potem `Wskaż punkt bazowy bloku` ({{key:Enter}} bierze lewy dolny narożnik zaznaczenia).
- Mówi, ile innych zestawów obiektów ma tę samą geometrię, podświetla wszystko, co zastąpi, i pyta `Tak/Nie`.

Kopia to te same obiekty przesunięte i obrócone o dowolny kąt (a odbite albo przeskalowane o jeden współczynnik, gdy to jest włączone): każdy obiekt musi mieć swój odpowiednik, z dokładnością do milionowej rozmiaru zaznaczenia. Każde odwołanie dostaje własny obrót i skalę (odbite ma ujemną skalę Y), a warstwę, którą dzieliły jego obiekty. Obiekty na zablokowanych warstwach zostają w spokoju i są liczone. Przeszukuje otwartą przestrzeń (model albo otwarty arkusz). Bardzo duże szukanie zatrzymuje się na limicie pracy i o tym mówi. Jeden krok cofnięcia.

### BSEARCH

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Znajdź bloki}}. `Znajdź bloki według [Nazwy/Atrybutu/Geometrii] <Nazwy>`:

- `N`: część nazwy bloku albo wzorzec z `*` i `?`. Wypisuje każdy blok z jego odwołaniami tutaj i w całym rysunku.
- `A`: wartość atrybutu albo `ZNACZNIK=wartość`. Wypisuje bloki, których odwołania ją zawierają, z znalezionymi wartościami. Atrybuty stałe też się liczą.
- `G`: wybierz obiekty albo jedno odwołanie do bloku, a bloki, których kształt jest podobny co najmniej w 85%, są wypisane, najlepsze pierwsze. Rozmiar, obrót i odbicie się nie liczą. Miara porównuje odległości między punktami rozłożonymi wzdłuż konturów, więc znajduje podobne; do dokładnych kopii użyj {{cmd:BCONVERT}}.

Odwołania znalezione w otwartej przestrzeni są zaznaczane, gotowe na następne polecenie.

### BREPLACE

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Zamień bloki}}. `Zamień [Zaznaczone/Wszystkie]`: `S` zastępuje wybrane odwołania do bloków blokiem, który podasz; `A` pyta o blok i jego zamiennik i zmienia każde odwołanie, tak jak robi {{cmd:BLOCKREPLACE}} (ten sam kod). Odwołanie zachowuje swoje miejsce, skalę, obrót, warstwę i wartości atrybutów, które mają oba bloki; wartości, dla których nowy blok nie ma miejsca, przepadają i są nazwane. `?` wypisuje bloki. Jeden krok cofnięcia.

### DATAEXTRACTION

Aliasy: `EATTEXT`, `DX`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Ekstrakcja danych}}. Wypisuje bloki, ich atrybuty i właściwości obiektów jako tabelę albo plik CSV.

- Działa na zaznaczeniu albo pyta `Wybierz obiekty (Enter: wszystko w tej przestrzeni)`.
- `Lista: [Bloki/Obiekty/Wszystko]`, gdy zaznaczenie zawiera oba. Nienazwane bloki, tabele i zestawienia materiałów nigdy nie są wypisywane.
- Wypisuje kolumny do wyboru (nazwa, typ, warstwa, X, Y, obrót, skala, długość, pole, kolor, typ linii, przestrzeń i jedna na każdy znacznik atrybutu), potem `Kolumny, po nazwie albo numerze, oddzielone przecinkami`. {{key:Enter}} wybiera oznaczone gwiazdką: nazwę i każdy atrybut dla bloków; typ, warstwę i długość dla obiektów.
- `Połącz identyczne wiersze z liczbą? [Tak/Nie] <Tak>`, potem `Umieść listę jako: [Tabela/Csv] <Tabela>`. Tabela jest zwykłą tabelą ({{cmd:TABLEDIT}} ją edytuje) i nie jest żywa: po zmianie rysunku uruchom polecenie ponownie.
- Odrzuca kolumnę, której nie ma na liście. Tabela trzyma 1999 wierszy danych; plik CSV przyjmuje wszystkie.

### COUNTTABLE

Liczy odwołania do bloków zaznaczenia (albo otwartej przestrzeni) i umieszcza liczby w tabeli (`Blok`, `Liczba`) albo pliku CSV. Liczbę, która podąża za rysunkiem sama, znajdziesz w {{cmd:BOMTABLE}}.

## Arkusze i drukowanie

### LAYOUT

Aliasy: `LO`, `NEWLAYOUT`; albo przycisk {{ui:+}} pod rysunkiem. Nowy arkusz z ramką, blokiem tytułowym i jednym okienkiem, na ISO A3 (albo Tabloid dla rysunków w calach lub stopach). Bez pytań.

### MVIEW

Aliasy: `MV`. Tylko na arkuszu ({{cmd:VPORTS}} na arkuszu robi to samo).

- `Wskaż narożnik okienka [Wielokątne/Obiekt]`, `Wskaż przeciwległy narożnik`. Okienko pokazuje cały model w standardowej skali.
- `P` (Wielokątne): kliknij narożniki konturu (`Cofnij`, `Zamknij`), {{key:Enter}}, gdy skończysz. Odrzuca mniej niż trzy narożniki.
- `O` (Obiekt): `Wybierz zamknięty obiekt jako kontur okienka`: zamknięta polilinia, okrąg albo elipsa na arkuszu. Okienko przyjmuje jego kształt (krzywe jako krótkie proste odcinki); obiekt zostaje taki, jaki był. Odrzuca obiekt, który nie jest zamknięty.

### VPCLIP

Przycina okienko, które już jest na arkuszu. `Wybierz okienko do przycięcia` (albo wybierz je najpierw), potem `Wybierz obiekt, do którego przyciąć [Wielokątne/Usuń]`:

- Kliknij zamkniętą polilinię, okrąg albo elipsę, albo {{key:Enter}} (albo `P`), by kliknąć narożniki wielokąta.
- `D` (Usuń, oferowane, gdy okienko jest przycięte) zamienia je z powrotem w prostokąt: pudełko wokół konturu, który miało.
- To, co okienko pokazuje, nie przesuwa się na papierze, a jego skala zostaje. Model jest rysowany i drukowany tylko wewnątrz konturu, a obramowanie za nim podąża. Jeden krok cofnięcia.
- Przycięte okienko ma uchwyt na każdym narożniku swojego konturu, poza środkiem i czterema narożnikami pudełka (przeciągnięcie narożnika pudełka rozciąga kontur razem z nim). Właściwości pokazują Kontur: Prostokąt albo Przycięty z liczbą narożników.
- Pliki DWG i DXF 2000 zachowują kontur dla CadCraft. Inne programy otwierają okienko jako prostokąt wokół niego; DXF R12 zachowuje tylko prostokąt.
- Na karcie modelu informuje, że okienka są na arkuszach.

### VPORTS

Aliasy: `VIEWPORTS`. {{cmd:SPLIT}} to samo także z arkusza, a {{ui:Widok}} › {{ui:Więcej}} › {{ui:Podziel obok siebie}}, {{ui:Podziel jedno nad drugim}}, {{ui:Cztery okienka}}, {{ui:Jedno okienko}} je uruchamiają. Na modelu: `Podaj liczbę okienek [Pojedyncze/2/3/4] <3>`; `2` pyta `[Poziomo/Pionowo] <Pionowo>` (Pionowo = obok siebie), `3` pyta `[Lewo/Prawo] <Prawo>` (gdzie ma być duże okienko). Każde okienko zachowuje swój widok i przestrzeń; kliknięcie czyni okienko aktywnym. Na arkuszu to {{cmd:MVIEW}}. Zobacz [Podziel ekran](topic:split-screen).

### VPVIEW

Brak aliasów. Tylko na arkuszu.

- `Wybierz okienko` (pomijane, gdy jedno jest zaznaczone), potem na modelu: `Wskaż pierwszy narożnik okna do pokazania`, `Wskaż przeciwległy narożnik`.

### UCS

Brak aliasów. Własny układ współrzędnych; nie jest to edycja. `Wskaż początek UCS [Nazwany/Obiekt/Poprzedni/Świat/Z/3punkty] <Świat>`: punkt jest nowym początkiem, potem `Wskaż punkt na osi X (Enter zachowuje kąt)`. `Z`: `Podaj kąt obrotu wokół osi Z <90>`. `3`: początek, punkt na dodatniej osi X, punkt po dodatniej stronie Y. `OB`: `Wybierz obiekt do wyrównania UCS`. `NA`: `[Przywróć/Zapisz/Usuń/?]` i nazwa. Widok się obraca, tak by nowa oś X była pozioma. Zobacz [Obracanie widoku i używanie własnych współrzędnych](topic:ucs-and-turned-view).

### PLAN

Brak aliasów. `Podaj opcję [Bieżący ucs/Ucs/Świat] <Bieżący ucs>`: obraca widok aktywnego okienka tak, by oś X UCS (albo świata) była pozioma. Nic w rysunku się nie rusza.

### TURNLEFT, TURNRIGHT, TURNWORLD

Brak aliasów; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Obróć widok o 90° w lewo}}, {{ui:Obróć widok o 90° w prawo}}, {{ui:Powrót do świata}}. To samo co `UCS Z -90`, `UCS Z 90` i `UCS W`, z podążającym widokiem.

### VPLAYER

Brak aliasów. Na arkuszu albo wewnątrz okienka. `Podaj opcję [?/Zamroź/Odmroź/Resetuj/Vpvisdflt]`: `F`, `T`, `R` pytają o nazwy warstw (po przecinkach, z symbolami `*` i `?`), potem `[Wszystkie/Wybierz/Bieżące] <Bieżące>` okienka; Resetuj przywraca każdą warstwę do jej domyślnego stanu „zamrożona w nowych okienkach”; `V` ustawia ten domyślny stan (`[Zamrożone/Odmrożone]`), którego używa {{cmd:MVIEW}}. `?` wypisuje warstwy zamrożone w bieżącym okienku. Kolumna okienka w panelu Warstwy robi to samo dla jednego okienka. Zobacz [Zamroź warstwę w jednym okienku](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasy: `MS`; albo dwuklik wewnątrz okienka. Tylko na arkuszu. Pracuj na modelu przez okienko: wybrane, jedyne na arkuszu albo `Kliknij wewnątrz okienka, aby w nim pracować`. Przesuwanie i zoom wewnątrz zmieniają widok okienka (zablokowane na ekranie zachowuje go, a arkusz się przesuwa); nowy widok zapisuje się jako jeden krok cofnięcia. Zobacz [Pracuj na modelu przez okienko](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasy: `PS`; albo dwuklik poza okienkiem albo kliknięcie karty pod rysunkiem. Z powrotem na arkusz.

### PLOT

Aliasy: `PRINT`, `PUBLISH`, `EXPORTPDF`; albo {{key:Mod+P}}. Otwiera okno {{ui:Drukuj do PDF}}. Zobacz [Drukowanie do PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasy: `STYLESMANAGER`, `PSTABLES`; albo {{ui:Edytuj tabele…}} w oknie {{ui:Drukuj do PDF}}. Otwiera {{ui:Tabele stylów wydruku}}: co drukuje się jako każdy kolor (kolor, szarość, tusz, grubość linii), zachowane z rysunkiem. Zobacz [Tabele stylów wydruku](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} przenosi obiekty między arkuszem a modelem przez okienko, przeskalowane i obrócone, tak by wyglądały tak samo z drugiej strony. Na arkuszu wybierz obiekty, a trafią do modelu (wskaż okienko, gdy arkusz ma ich więcej). Gdy pracujesz na modelu przez okienko ({{cmd:MSPACE}}), zaznaczone obiekty trafiają na arkusz. Informuje, ile razy większe albo mniejsze się stały. Okienka zostają na swoim arkuszu. Jeden krok cofnięcia.

### ISODRAFT

{{cmd:ISODRAFT}} włącza rysowanie izometryczne `ON` albo `OFF`, albo od razu przechodzi na płaszczyznę `Left`, `Top` lub `Right`. Gdy jest włączone: Orto ({{key:F8}}) utrzymuje linie wzdłuż dwóch osi płaszczyzny (lewa: 90° i 150°; góra: 30° i 150°; prawa: 30° i 90°), śledzenie biegunowe ({{key:F10}}) podąża za tymi samymi osiami, przyciąganie do siatki ({{key:F9}}) używa siatki izometrycznej, a siatka ({{key:F7}}) jest rysowana liniami pod 30°, 90° i 150°. {{cmd:ELLIPSE}} zyskuje `Isocircle`: podaj środek i promień (albo `Średnica`), a narysuje elipsę, jaką okrąg przyjmuje na bieżącej płaszczyźnie. Rysunek pozostaje płaski: to pomoce do rysowania widoku perspektywicznego, a nie model 3D. Ustawienie dotyczy tej sesji i nie jest zapisywane w pliku.

### ISOPLANE

{{cmd:ISOPLANE}} wybiera płaszczyznę, na której działa rysowanie izometryczne: `Left`, `Top` lub `Right`. Enter przechodzi do następnej płaszczyzny. Gdy rysowanie izometryczne jest włączone, {{key:F5}} robi to samo w środku polecenia; gdy jest wyłączone, {{key:F5}} zostaje dla przeglądarki.

## Sprawdzanie

### CAL

Wypisuje wartość obliczenia, tak jak byłaby odczytana wszędzie tam, gdzie wpisuje się długość.

- `Wyrażenie`: wpisz je, na przykład `12'6"+3/4"` albo `(24'-0")/3`, i naciśnij {{key:Enter}}. CadCraft wypisuje `= 12'-6 3/4"   (150,75 jednostek rysunku)`. Zobacz [Działania arytmetyczne we wpisanej wartości](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasy: `DI`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Zmierz odległość}}.

- `Wskaż pierwszy punkt`, `Wskaż drugi punkt`. Wypisuje odległość, kąt, Delta X i Delta Y.

### AREA

Aliasy: `AA`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Pole}}. Wypisuje pole i obwód.

- `Wskaż pierwszy narożnik [Obiekt/Dodaj pole/Odejmij pole] <Obiekt>`
  - Kliknij albo wpisz narożniki; przy `Wskaż następny punkt (Enter zamyka) [Cofnij (U)]` naciśnij {{key:Enter}}, aby zamknąć kontur. `U` cofa ostatni narożnik.
  - {{key:Enter}} albo `O`, potem `Wybierz obiekt`: okrąg (wypisuje obwód), elipsa, polilinia (otwarta jest zamykana prostą linią na potrzeby pola, a jej długość jest wypisywana) albo kreskowanie (dziury są odejmowane).
  - `A` (Dodaj pole) i `S` (Odejmij pole) utrzymują sumę bieżącą: monit zaczyna się od `(tryb DODAWANIA)` albo `(tryb ODEJMOWANIA)`, każde pole jest dodawane albo odejmowane, a po każdym wypisywane jest `Pole całkowite = …`. W tych trybach `O` wskazuje obiekty aż do {{key:Enter}}, a {{key:Enter}} przy pierwszym monicie kończy polecenie.

### MEASUREGEOM

Aliasy: `MEA`. `Podaj opcję [Odległość/Promień/Kąt/Pole] <Odległość>`; po każdym pomiarze pyta ponownie, z `eXit` jako wartością domyślną.

`Szybki` mierzy wokół wskaźnika, gdy go przesuwasz: odległość do najbliższego obiektu w prawo, w górę, w lewo i w dół (wzdłuż osi bieżącego UCS), rysowaną na bieżąco, oraz kąt tam, gdzie dwóch takich sąsiadów jest prostych i się spotyka. Kliknięcie zapisuje w historii cztery odległości, czysty szerokość i wysokość oraz kąty; Enter wraca do opcji. Czyta to, co jest na ekranie.

- `D`: dwa punkty, jak {{cmd:DIST}}.
- `R`: `Wybierz łuk albo okrąg`; wypisuje promień i średnicę.
- `A`: łuk (jego kąt objęty), linia, a potem druga linia (kąt między nimi, w stronę dalszych końców), albo {{key:Enter}} i trzy punkty (wierzchołek, potem dwa końce).
- `AR`: jak {{cmd:AREA}}, jeden obszar.

### ID

Brak aliasów. `Wskaż punkt`; wypisuje jego X i Y.

### LIST

Aliasy: `LI`, `LS`. `Wybierz obiekty`; wypisuje typ każdego obiektu, jego warstwę i główne wymiary.

### MASSPROP

{{cmd:MASSPROP}} podaje właściwości przekrojów regionów i zamkniętych obiektów, które wybierzesz, łącznie: pole, obwód, prostokąt otaczający, środek ciężkości, momenty bezwładności względem osi X i Y przechodzących przez początek, iloczyn bezwładności, promienie bezwładności, te same momenty względem środka ciężkości oraz główne momenty z kierunkami ich osi. Dziury w regionie liczą się jako dziury. Wielkości są w jednostkach rysunku i są dokładne dla konturów z linii i łuków; elipsy i splajny są mierzone jako krótkie proste odcinki, i to jest podane. Po raporcie pyta, czy zapisać go do pliku tekstowego. Obiekty, które nie są zamknięte, zostają pominięte, a polecenie podaje, ile ich było.

## Widok, plik i inne

### ZOOM

Aliasy: `Z`.

- `Wskaż narożnik okna, wpisz współczynnik skali (nX) [Zasięg/Wszystko/Okno/Poprzedni/Skala/Środek]`. Kliknij dwa narożniki dla okna. `E`, `A` albo Enter: cały rysunek.
- `P` (Poprzedni, albo {{ui:Poprzedni}} na pasku narzędzi) wraca do widoku sprzed, do 10 widoków na kartę; seria kroków kółkiem albo jedno przesunięcie liczy się jako jeden widok.
- Liczba taka jak `2`, `2x` albo `0.5x` (albo `S`, a potem liczba) przybliża albo oddala o ten współczynnik wokół środka ekranu.
- `C` pyta `Wskaż punkt środkowy` i `Podaj wysokość albo powiększenie (nX)`.

### PDFATTACH, PDFIMPORT i polecenia PDF

Aliasy: `PDFATT` dla {{cmd:PDFATTACH}}, `PDFIM` dla {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} umieszcza stronę PDF pod rysunkiem (plik, strona, punkt wstawienia, skala, obrót); {{cmd:PDFIMPORT}} zamienia linie, krzywe, wypełnienia i tekst strony na obiekty rysunku, na warstwach nazwanych od PDF, w prawdziwym rozmiarze, w wpisanej skali albo skalowane z dwóch punktów i prawdziwej odległości. {{cmd:PDFCLIP}} przycina podkład, {{cmd:PDFADJUST}} ustawia wyblaknięcie, kontrast, monochromatyczność albo wyłącza go, {{cmd:PDFLAYERS}} przełącza warstwy samego PDF, a {{cmd:PDF}} ponownie podaje CadCraft pliki, których używają podkłady rysunku. Zobacz [Podkłady PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autouzupełnianie rysunku: gdy nie działa żadne polecenie, szara zjawa pokazuje, co mówią wzorce twojego rysunku. {{cmd:AUTOCOMPLETE}} włącza ją `On` albo wyłącza `Off` (także Ustawienia › CadCraft) albo `Show` pokazuje, co by teraz zasugerowała. **Tab** rysuje zjawę jako jeden krok cofnięcia, **Esc** odrzuca ją, dopóki rysunek się nie zmieni. Znajduje trzy rzeczy w najnowszych obiektach: następną kopię czegoś narysowanego dwa razy albo częściej w równym kroku (słupki, kolumny, podstopnica i stopnica schodów), następne stopnie schodów z polilinii oraz brakującą stronę pomieszczenia albo łańcucha ścian. W trakcie {{cmd:LINE}} albo {{cmd:PLINE}} zjawa to **następny punkt**: następny stopień schodów (podstopnica, stopnica, podstopnica…), czwarty narożnik prostokąta, punkt, który go zamyka, albo jeszcze jeden równy krok. Przysuń kursor blisko i naciśnij **Tab**, jakbyś kliknął tam; kontynuuj albo naciśnij Enter. Liczone na tym komputerze według reguł, bez modelu.

### AUTOSHEET

Alias: `ASH`. Arkusze, które same się układają. {{cmd:AUTOSHEET}} bierze części rysunku (twoje nazwane widoki, osobne części modelu albo cały model), wybiera format papieru (albo podany przez ciebie), nadaje każdej części standardową skalę (jedną dla wszystkich albo największą, jaką każda zniesie) i umieszcza widoki w wierszach na nowych arkuszach z blokiem tytułowym i podpisem (nazwa i skala) pod każdym. To, czego nie da się zmieścić na jednym arkuszu, dostaje własny arkusz. Jeden krok cofnięcia. Liczone na tym komputerze według reguł, bez modelu.

### PHOTOSKETCH

Alias: `PSK`. Zdjęcie szkicu do rysunku. Wybierz zdjęcie (JPEG, PNG albo TIFF) ręcznego szkicu na kartce papieru. {{cmd:PHOTOSKETCH}} znajduje cztery narożniki kartki, prostuje perspektywę, przyjmuje rozmiar papieru, który podasz (`Papier`, albo najbliższy standardowy), i `Skalę` szkicu (1 : n), a potem przenosi linie pióra na linie, łuki i okręgi, z warstwą dla każdego koloru pióra (czarny, czerwony, niebieski, zielony). Jeśli nie znajdzie krawędzi kartki, bierze całe zdjęcie jako arkusz i o tym mówi. Napisy są pomijane. Jeden krok cofnięcia. Wykonywane na tym komputerze klasycznym przetwarzaniem obrazu, bez modelu, nic nie jest wysyłane. Zobacz też polecenia skanów.

### AUTODIM

Alias: `ADIM`. Automatyczne wymiarowanie według reguł. {{cmd:AUTODIM}} wymiaruje zaznaczone obiekty (albo cały rysunek) według ich poziomych i pionowych krawędzi: łańcuch wymiarów wzdłuż wybranych przez ciebie boków (`Boki`), jeden wymiar gabarytowy na zewnątrz, szerokość każdego otworu (odstęp między liniami ścian leżącymi w jednej linii), średnicę dla każdego rozmiaru otworu i, z `Siatka`, rozstaw linii siatki. Wymiar, który już jest, nie jest tworzony ponownie. Jeden krok cofnięcia. Liczone na tym komputerze według reguł, bez modelu.

### GRIDMOVE

Alias: `GM`. Przesunięcie linii siatki przenosi cały zestaw. {{cmd:GRIDMOVE}} przesuwa linię siatki (linię na warstwie, której nazwa mówi siatka albo oś) i to, co na niej wisi: ściany z końcem na linii rozciągają się, by za nią podążyć, ściany wzdłuż niej przesuwają się w całości, słupy (odwołania do bloków i okręgi na linii), jej bańka i znacznik się przesuwają, a wymiary, których punkty leżą na niej, mierzą nowy rozstaw. Podaj dwa punkty (liczy się tylko część w poprzek linii) albo `Odległość`. Jeden krok cofnięcia cofa wszystko. Liczone według reguł na tym komputerze.

### DETAILS

Alias: `DET`. Detale, które same cię znajdują. {{cmd:DETAILS}} przechowuje własne detale twojej firmy: `Dodaj` umieszcza blok z tego rysunku na liście, `Lista` i `Usuń` nią zarządzają, a `Znajdź` układa je według tego, co jest zaznaczone (albo tego, co narysowałeś ostatnio), na podstawie słów na warstwach, nazwach bloków, wzorcach kreskowania i notatkach w porównaniu z nazwą i notatkami każdego detalu, tak że nadproże okna znajdzie twoje obróbki parapetu. Wybierz numer i punkt, by go umieścić. Gdy `Podpowiedź` jest włączona (także Ustawienia › CadCraft), zaznaczenie czegoś, do czego pasuje detal, wypisuje jedną linię w pasku stanu. Lista jest zachowywana w tej przeglądarce, na tym komputerze, i to ona jest przeszukiwana. `Udostępnij` umieszcza ją także w folderze Dokumenty (`.cadcraft/firm-details.json`, z rysunkiem każdego bloku): `Pobierz` dodaje to, co ma twój zespół, a tobie brakuje, `Wyślij` dodaje to, co masz ty, a im brakuje, `Oba` robi jedno i drugie, i nic nie jest nigdy usuwane z żadnej strony. Najpierw otwórz folder Dokumenty ({{cmd:DOCUMENTS}}); gdy ten folder jest folderem Team Cloud Plan, cały zespół dzieli jedną listę. Pozycja detalu w panelu Biblioteka ma przycisk **Dodaj do detali mojej firmy**, który umieszcza ją na tej samej liście. Liczone na tym komputerze po słowach, bez modelu.

### SKETCHFIX

Alias: `SKF`. Szkice piórem stają się dokładną geometrią. Przeciągnij jedno odręczne pociągnięcie naraz (pióro, mysz albo palec), potem Enter. Każde pociągnięcie jest odczytywane jako linia, okrąg, łuk, prostokąt albo polilinia: prawie poziome i pionowe linie są czynione dokładnie poziomo i pionowo, zamknięte okrągłe pociągnięcie staje się okręgiem, zamknięte pociągnięcie z czterema narożnikami pod kątem prostym staje się prostokątem, a końce pociągnięć są ściągane do siebie i na końce już w rysunku. Jeden krok cofnięcia. Liczone na tym komputerze według reguł, bez modelu.

### SCANATTACH i polecenia skanów

Aliasy: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nie ma żadnego. Działają na obrazie, po jednym kroku cofnięcia na polecenie. {{cmd:SCANATTACH}} wstawia PNG, JPEG, TIFF (jedna strona albo wszystkie) albo stronę PDF, która jest obrazem. {{cmd:SCANSCALE}} skaluje arkusz z dwóch wskazanych punktów i prawdziwej odległości. {{cmd:SCANALIGN}} przesuwa go i obraca na dwa punkty (`Skalować arkusz do dopasowania` Tak/Nie). {{cmd:SCANDESKEW}} pokazuje kąt długich linii arkusza i obraca arkusz, gdy wybierzesz `Akceptuj` albo podasz `Wartość`. {{cmd:SCANCLEAN}} zamienia go na czarno-biały (`Próg` Auto/Adaptacyjny/Poziom, `Plamki`) i `Uruchom`. {{cmd:SCANCROP}} zachowuje okno. {{cmd:SCANERASE}} wymazuje `Prostokąt`, `Wielokąt` albo `Lasso`. {{cmd:SCANTRACE}} przenosi linie i łuki na nową warstwę (`Tolerancja`, `Okno`, `Łuki`, `Reszty`, `Uruchom`) i podaje, co znalazł, a co zostawił jako raster. {{cmd:SCANINFO}} wypisuje oryginalny plik i kroki. {{cmd:RASTERSNAP}} włącza albo wyłącza przyciąganie do linii zeskanowanych arkuszy. Zobacz temat Zeskanowane rysunki i przenoszenie.

### REGEN i REGENALL

Aliasy: `RE` dla {{cmd:REGEN}}, `REA` dla {{cmd:REGENALL}}. Odbudowuje to, co jest narysowane na ekranie z rysunku: {{cmd:REGEN}} kartę, na której jesteś (na arkuszu także model, który pokazują jego okienka), {{cmd:REGENALL}} każdą kartę, każde okienko podzielonego ekranu i każdy otwarty rysunek. Używaj, gdy obraz wygląda nieaktualnie po skryptowanej albo bardzo dużej zmianie, albo gdy asystent edytował rysunek; sam rysunek nie jest ruszany, więc nie ma czego cofać.

### NAMEDVIEW

Aliasy: `NV`, `VIEWS`. `Podaj opcję [?/Przywróć/Zapisz/Okno/Usuń] <Przywróć>`, potem nazwa widoku. `S` zapisuje widok na ekranie, `W` okno, które wskażesz, `R` pokazuje zapisany widok, `D` usuwa jeden, `?` wypisuje widoki tej karty. Zapisanie pod istniejącą nazwą zastępuje go; każda zmiana to jeden krok cofnięcia. Widoki należą do karty, na której zostały zapisane. Pliki DWG i DXF zachowują je (tabela VIEW); widoki arkusza wracają na pierwszy arkusz, bo plik nie mówi, który.

### UNDO i REDO

Aliasy: `U` dla {{cmd:UNDO}}; {{cmd:REDO}} nie ma żadnego. Także {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Aliasy: `LA`. Przechodzi do panelu {{ui:Warstwy}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Podaj typ linii dla nowych obiektów` — `ByLayer` (wg warstwy), `ByBlock` (wg bloku) albo nazwa (`?` wypisuje: Continuous, własne rysunku oraz DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE z ich rozmiarami `2` (połowa) i `X2` (podwójny)). {{cmd:LWEIGHT}} (`LW`): grubość linii dla nowych obiektów w mm albo `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): skala typów linii rysunku (cofalna). {{cmd:LWDISPLAY}} (`LWT`): `Pokaż grubości linii [WŁ./WYŁ.]` — to samo co przycisk {{ui:LWT}} w pasku stanu. Zobacz [Grubości linii i typy linii](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Podaj typ obiektu do przemianowania [LAyer/Block]`, `Podaj starą nazwę`, potem nowa nazwa; obiekty albo odwołania podążają. {{cmd:LAYMRG}}: `Wybierz obiekt na warstwie do scalenia albo [Nazwa]` aż do {{key:Enter}}, potem `Wybierz obiekt na warstwie docelowej albo [Nazwa]` i `Y`. {{cmd:LAYDEL}}: `Wybierz obiekt na warstwie do usunięcia albo [Nazwa]`, potem `Y`: warstwa i każdy obiekt na niej znikają (nie warstwa 0, DEFPOINTS ani bieżąca). Jeden krok cofnięcia każdego. Zobacz [Porządkowanie rysunku warstwami](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Warstwy przez wskazywanie obiektów; także w menu {{ui:Narzędzia}} panelu {{ui:Warstwy}}. {{cmd:LAYISO}}: `Wybierz obiekty na warstwie(ach) do wyizolowania`, potem {{key:Enter}}: każda inna warstwa się wyłącza. {{cmd:LAYUNISO}} włącza je z powrotem. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Wybierz obiekt na warstwie do wyłączenia` (albo zamrożenia), raz za razem; `U` cofa ostatni, {{key:Enter}} kończy. {{cmd:LAYMCUR}}: `Wybierz obiekt, którego warstwa stanie się bieżąca`. {{cmd:LAYON}} włącza każdą warstwę, {{cmd:LAYTHW}} odmraża każdą warstwę. Każde polecenie to jeden krok cofnięcia. Zobacz [Porządkowanie rysunku warstwami](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} zaczyna pusty rysunek, a {{cmd:OPEN}} otwiera DWG albo DXF, każdy we własnej karcie nad rysunkiem (nietknięty nowy rysunek jest używany zamiast nowej karty). Zamknięcie karty z niezapisanymi zmianami najpierw pyta. Zobacz [Podziel ekran](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, także {{key:Mod+S}}) pobiera kopię w formacie rysunku: DWG, jeśli został otwarty z DWG, DXF, jeśli z DXF. Nowy rysunek używa formatu ostatnio wybranego w Zapisz jako w tej przeglądarce, a w przeciwnym razie DWG.

{{cmd:SAVEAS}} (także {{key:Mod+Shift+S}}) otwiera okno {{ui:Zapisz kopię jako}}: wybierz {{ui:DWG}} (i jego {{ui:Wersję}}), {{ui:DXF R12}} albo {{ui:DXF 2000}}, potem {{ui:Zapisz}}. Wybór zostaje dla tego rysunku i dla nowych rysunków w tej przeglądarce.

{{cmd:DXFOUT}} zawsze pobiera kopię DXF R12, bez zmiany formatu, którego używa {{cmd:SAVE}}.

Zobacz [Pliki: co się otwiera, co się zapisuje](topic:files#saving).

### TOUR

Aliasy: `TUTORIAL`. Uruchamia ponownie sześciokrokowy przewodnik po pierwszym rysunku. Zobacz [Pierwsze kroki](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasy: `TBDOCK`. `Położenie paska narzędzi [Góra/Dół/Lewa/Prawa]`. Zobacz [Ustawienia](topic:settings#toolbar-position).

### COMMANDLINE

Aliasy: `CMDLINE`. `Wiersz poleceń [Zadokowany na dole/Unoszony/Jeden wiersz/Wyświetlane wiersze historii/Historia poleceń (F2)]`: dokuje albo oddziela wiersz poleceń, zamienia go w jeden wiersz, pyta, ile wierszy historii pokazać (0 do 12), albo otwiera historię. Zobacz [Ustawienia](topic:settings#command-line).

### TOPAREA

`Górny obszar [Standardowy/Zwarty]`: paski nad rysunkiem takie, jakie były, albo zwarte. Zobacz [Ustawienia](topic:settings#top-area).

### POLARANG

`Podaj krok kąta biegunowego w stopniach <90>`: krok, do którego ustawiają się linie śledzenia {{ui:Biegunowe}} (więcej niż 0, do 180). Zachowywane w tej przeglądarce.

### UNITS

Aliasy: `UN`. Jak zapisuje się i wpisuje długości.

- `Podaj format długości [Naukowy/Dziesiętny/Inżynierski/Architektoniczny/Ułamkowy] <bieżący>`
- Architektoniczny i Ułamkowy: `Podaj mianownik najmniejszego wyświetlanego ułamka (1, 2, 4, 8, 16, 32, 64, 128 albo 256)`. Pozostałe: `Podaj liczbę miejsc dziesiętnych (od 0 do 8)`.

Nowe wymiary go przyjmują. Jeden krok cofnięcia. To samo co {{ui:Format długości}} i {{ui:Dokładność}} w {{ui:Bieżących ustawieniach}}; zobacz [Stopy i cale](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasy: `GDS`. Widok układu IC (plik strumienia GDSII): próba laboratoryjna, tylko do oglądania i mierzenia.

- Okno wyboru pliku przyjmuje plik `.gds`; przy kilku komórkach głównych `Podaj komórkę główną do narysowania`.
- Każda warstwa i typ danych staje się warstwą rysunku (`GDS 1`, `GDS 2/5`), odwołania i macierze są umieszczane płasko, w jednostce użytkownika pliku (zwykle mikrometry). Jeden krok cofnięcia. Nic nie jest symulowane ani sprawdzane, a plik nie jest zapisywany z powrotem.

### DIAGRAM

Aliasy: `TEXTDIAGRAM`, `T2D`. Diagram z tekstu.

- Pole przyjmuje tekst (albo jedną linię z `;` między poleceniami w wierszu poleceń): diagram przepływu Mermaid, diagram komponentów PlantUML, D2 albo listę od-do.
- `Wskaż lewy górny narożnik diagramu`, potem `Podaj wysokość tekstu`.

Bloki i łączniki są zwykłymi obiektami na warstwie `Diagram`, zaznaczanymi po zakończeniu. Jeden krok cofnięcia. Zobacz [Rysowanie diagramu z tekstu](topic:text-to-diagram).

### OLELIST

Aliasy: `OLES`. Obiekty OLE, które niesie DWG, a CadCraft nie potrafi ich umieścić sam.

- Wypisuje każdy: numer, typ, rozmiar, czy zapisał obraz.
- `Podaj opcję [Umieść/eXit] <eXit>`: Umieść pyta o numer, lewy dolny narożnik i szerokość, i rysuje ramkę z obrazem. Jeden krok cofnięcia; zachowany obiekt nie jest zmieniany. Zobacz [Obrazy](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasy: `SHX`. Twoje własne czcionki SHX.

- `Podaj opcję czcionki SHX [Folder/Pliki/Lista/Usuń/Odwróć/Wyczyść] <Lista>`

{{ui:Folder}} czyta każdy plik `.shx` w folderze (CadCraft Studio; ponownie przy każdym uruchomieniu), {{ui:Pliki}} bierze wskazane pliki (przeglądarka), {{ui:Odwróć}} układa litery jednej czcionki od ostatniej do pierwszej. Style tekstu, które nazywają wczytaną czcionkę, rysują się nią. Zobacz [Rysuj tekst we własnych czcionkach SHX](topic:shx-fonts).

### LIMITS

Jak duży ma być rysunek.

- `Wskaż lewy dolny narożnik albo [WŁ./WYŁ.] <bieżący>`: punkt, `ON` albo `OFF`.
- `Wskaż prawy górny narożnik <bieżący>`.

Siatka wypełnia limity, {{cmd:ZOOM}} Wszystko je pokazuje, a przy włączonych limitach punkt poza nimi jest odrzucany (`**Poza limitami`). Jeden krok cofnięcia; zapisywane w DWG i DXF. Zobacz [Ustaw limity rysunku](topic:drawing-limits).

### AUNITS

Aliasy: `ANGUNITS`. Jak kąty są pokazywane i wpisywane.

- `Podaj format kąta [Stopnie dziesiętne/Stopnie-minuty-sekundy/Azymuty geodezyjne] <bieżący>`
- `Podaj liczbę miejsc dziesiętnych (od 0 do 8)`, albo dla pozostałych dwóch `Podaj dokładność` (0 stopni, 2 minuty, 4 sekundy, od 5 do 8 miejsc dziesiętnych sekundy).

Jeden krok cofnięcia; zapisywane w DWG i DXF. To samo co {{ui:Format kąta}} w {{ui:Bieżących ustawieniach}}. Zobacz [Wpisywanie i pokazywanie azymutów i kątów](topic:bearings-and-angles).

### APPLOAD

Aliasy: `AP`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Wczytaj aplikację…}}. Okno {{ui:Wczytaj aplikacje}}: wczytuj procedury `.lsp` i pliki dialogów `.dcl`, wyładowuj je, wczytuj ponownie z historii oraz Zestaw startowy. Polecenia `(defun c:NAZWA …)` procedury działają potem jak każde inne. Zobacz [Wczytywanie aplikacji](topic:load-applications) i [Uruchamianie procedur LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Edytuj skróty…}}) otwiera plik twoich skrótów (wiersze `ALIAS, *POLECENIE`); {{ui:Zapisz}} go stosuje. {{cmd:REINIT}} stosuje go ponownie. Zobacz [Edytuj skróty poleceń](topic:command-aliases).

### OPTIONKEYS

Aliasy: `OPTKEYS`; albo {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Litery opcji}} › {{ui:Edytuj…}}. Otwiera plik twoich liter opcji (wiersze `POLECENIE.OPCJA, LITERY`, na przykład `ARRAY.PO, P`); {{ui:Zapisz}} go stosuje, a {{cmd:REINIT}} stosuje go ponownie. Zobacz [Nadaj opcjom poleceń własne litery](topic:option-letters).

### LISPEDIT

Aliasy: `VLIDE`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Edytor LISP}}. Otwiera edytor LISP, okno, które zostaje otwarte obok rysunku.

- Tekst: numery wierszy, partner nawiasu przy kursorze zaznaczony (na czerwono, gdy go nie ma), {{key:Enter}} wcina nowy wiersz pod otwartym nawiasem, {{key:Tab}} wpisuje dwie spacje, {{key:Esc}} opuszcza tekst.
- {{ui:Wczytaj do rysunku}} ({{key:Ctrl+Shift+Enter}}): czyta każdą formę, tak jak {{cmd:APPLOAD}} robi z plikiem, i tworzy jej polecenia `c:`. Plik pojawia się na liście {{cmd:APPLOAD}}.
- {{ui:Uruchom zaznaczenie}} ({{key:Ctrl+Enter}}): oblicza zaznaczone formy albo formę, w której stoi kursor.
- {{ui:Stop}}: kończy działającą procedurę.
- {{ui:Konsola}}: to, co wypisała procedura, i każdy błąd z numerem wiersza; kliknij błąd, aby tam przejść. Tekst jest uruchamiany po jednej formie najwyższego poziomu naraz, więc wiersz to wiersz formy, a w środku niej wiersz, który wywołuje funkcję nazwaną w błędzie.
- {{ui:Nowy}}, {{ui:Otwórz}}, {{ui:Zapisz}} ({{key:Ctrl+S}}): plik `.lsp`. Tekst jest także zachowywany w tej przeglądarce, więc zamknięcie okna nie gubi go.
- Obok tekstu: funkcje, które procedura definiuje, te, które wywołuje, a tego LISP jeszcze nie ma, te, które wywołuje, a nie są zdefiniowane w niej ani wbudowane, oraz pełne listy tego, co jest wbudowane, a czego nie.

Tekst z nawiasem, który nigdy się nie zamyka, albo łańcuchem, który nigdy się nie kończy, nie jest uruchamiany: nazywany jest wiersz. Nie ma krokowego debuggera, punktów przerwania ani okna podglądu. Zobacz [Uruchamianie procedur LISP](topic:run-lisp).

### HELP

Aliasy: `?`. Wypisuje każde polecenie, jego aliasy i jednowierszowy opis w historii wiersza poleceń. Nie otwiera tej pomocy: do tego naciśnij {{key:F1}} albo kliknij {{ui:Pomoc}}.

## Monit wyboru obiektów

Na każdym monicie `Wybierz obiekty` klikaj obiekty, rysuj okna (od lewej do prawej) i przecięcia (od prawej do lewej) dwoma kliknięciami albo naciśnij i przeciągnij lasso ({{key:Space}} podczas przeciągania: okno, przecięcie, płot), {{key:Shift}}+kliknięcie usuwa, a {{key:Enter}} kończy. Możesz też wpisać `ALL` (wszystko), `L` (ostatni obiekt), `P` (Poprzedni: to, czego użyło ostatnie polecenie), `F` (Płot: obiekty, które przecina linia punktów; `U` cofa punkt), `W` (Okno), `C` (Przecięcie), `R` (tryb usuwania: wskazania wyjmują obiekty; monit mówi `Usuń obiekty`) i `A` (Dodaj ponownie). `?` wypisuje je. Nie są pokazywane w monicie. {{key:Tab}} nad nakładającymi się obiektami podświetla następny; kliknij, aby go wybrać. Zobacz [Wybieranie obiektów](topic:select-objects).

### ACCESS

Alias: `AX`. Rysowanie bez wzroku. {{cmd:ACCESS}} włącza i wyłącza dostęp (`On`, `Off`) oraz przełącza dźwięki przyciągania (`Sound`) i polecenia mówione (`Voice`); najpierw mówi, jaki jest stan. Gdy dostęp jest włączony, każde polecenie i wynik są mówione przez czytnik ekranu, a obszar rysunku ma kursor klawiatury. Temat pomocy „Rysowanie bez wzroku” opisuje klawisze.

### DESCRIBE

Alias: `DESC`. Mówi, co zawiera rysunek: ile obiektów, jakiego rodzaju, jak duży, ile warstw, co jest zaznaczone. Tylko odczytuje; niczego nie zmienia.

### WHEREAMI

Alias: `WHERE`. Mówi, gdzie jest kursor, w jednostkach rysunku.

### NEARBY

Mówi, co leży blisko kursora, najbliższe najpierw, każde z odległością i stroną, po której leży.

### SAYSEL

Mówi, co jest zaznaczone, jedno zdanie na obiekt (długość linii, końce i kąt; promień okręgu i środek; tekst tak, jak jest napisany).

### VOICE

Włącza albo wyłącza polecenia mówione. Są rozpoznawane na tym komputerze; tam, gdzie przeglądarka nie potrafi tego zrobić, głos pozostaje wyłączony, chyba że wybierzesz usługę online przeglądarki w Ustawieniach.

### TOUCHCROSSHAIR

Alias: `TCX`. Przesunięty krzyżyk do rysowania palcem, by koniec palca nie zasłaniał wybieranego punktu. Gdy jest włączony, jeden palec na rysunku niczego nie wybiera: przesuwa krzyżyk, który leży nad palcem i z jednej strony. Przyciągania do obiektów i śledzenie podążają za krzyżykiem. Podniesienie palca niczego nie wybiera i zostawia krzyżyk tam, gdzie jest. Aby wybrać, naciśnij przycisk {{ui:Kliknij}} w rogu rysunku albo stuknij gdziekolwiek na rysunku drugim palcem. Przytrzymaj {{ui:Kliknij}}, gdy przesuwasz drugi palec, aby przeciągać (okno zaznaczania, lasso, uchwyt). Palec przytrzymany nieruchomo albo przycisk {{ui:Enter}} to Enter. Dwa palce przesuwają i powiększają jak dotąd. Przy dolnej krawędzi i dalekiej krawędzi bocznej krzyżyk zbliża się do palca, więc każda część rysunku jest osiągalna. Pióro i mysz zawsze wybierają bezpośrednio.

{{cmd:TOUCHCROSSHAIR}} mówi stan i pyta `ON`, `OFF`, `Auto` (włączony tylko tam, gdzie palec jest jedynym wskaźnikiem, więc wyłączony na komputerze z myszą), `Distance` (jak daleko krzyżyk jest od palca, od 24 do 240 pikseli) albo `Side` (`Left`: w górę i w lewo, dla prawej ręki; `Right` dla lewej; przyciski przechodzą do drugiego rogu). Te same wybory są w Ustawieniach › CadCraft, a na urządzeniu z ekranem dotykowym pasek stanu ma przełącznik {{ui:Przesunięty celownik}}. Wybory są zachowywane w tej przeglądarce.

### WHOHAS

Mówi, kto ma otwarty rysunek. W CadCraft Studio na komputerze otwarcie DWG albo DXF zapisuje obok niego mały plik blokady (`Plan.dwg.cclock`: kto, od kiedy, która wersja), odświeża go co minutę, dopóki rysunek jest otwarty, i usuwa go, gdy rysunek zostanie zamknięty. Otwarcie rysunku, który ma ktoś inny, mówi, kto i od kiedy, i proponuje {{ui:Otwórz tylko do odczytu}} (zapis wtedy pyta o nową nazwę), {{ui:Otwórz mimo to}} (tamta osoba dostanie informację przy następnym odświeżeniu) albo {{ui:Anuluj}}. Zapis nad plikiem, który ma otwarty ktoś inny, najpierw pyta. Blokada, która nie była odświeżana przez pięć minut, jest uznawana za nieaktualną: druga kopia zamknęła się bez zapisu albo komputer śpi.

{{cmd:WHOHAS}} pyta `Bieżący` (otwarty rysunek), `Plik` (wybierz jeden), `Folder` (wybierz folder: wypisywany jest każdy rysunek w nim, który jest gdzieś otwarty), `Ścieżka` (wpisz pełną ścieżkę) albo `Nazwa` (nazwa, którą widzą inni; nazwa twojego konta, gdy jesteś zalogowany). Studio może sięgnąć tylko do folderów, które wybrałeś: dla rysunku otwartego z folderu, którego nigdy nie wybrano, mówi raz, że nie może zanotować rysunku jako otwartego; `Folder` wybiera folder, a blokady działają tam od tej chwili. Blokada to notatka dla ludzi, a nie bariera: inny program nadal może zapisać plik. W przeglądarce nie ma folderów do przeglądania, a polecenie to mówi.

### OVERKILL

Usuwa zduplikowane obiekty i porządkuje nakładające się linie i łuki, dla rysunków, które przychodzą pełne podwojonych linii. `Wybierz obiekty do oczyszczenia`, {{key:Enter}}, potem {{key:Enter}} jeszcze raz, by oczyścić z pokazanymi ustawieniami, albo zmień najpierw jedno:

- `Tolerance`: jak blisko muszą być dwie współrzędne, by uznać je za te same (na start 0.000001; 0 oznacza dokładnie tyle samo).
- `Ignore`: właściwości, które mogą się różnić między dwoma obiektami, które są poza tym takie same. Wpisz nazwę, by ją przełączyć: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, albo `None` / `All`. {{key:Enter}}, gdy skończysz.
- `Overlap`: włączone albo wyłączone. Włączone: linie leżące na jednej prostej, które się nakładają, stają się jedną linią (linia leżąca w innej jest po prostu usuwana), a łuki na jednym okręgu, które się nakładają, stają się jednym łukiem; łuki zamykające pełny obrót stają się okręgiem, a łuk leżący na okręgu jest usuwany.
- `Ends`: włączone albo wyłączone. Włączone: linie leżące na jednej prostej i łuki na jednym okręgu, które dotykają się tylko koniec w koniec, stają się jednym kawałkiem.

Każdy typ obiektu jest sprawdzany pod kątem duplikatów: dwa obiekty są duplikatami, gdy ich geometria jest taka sama w tolerancji, a ich warstwa, kolor, typ linii, skala typu linii, grubość linii, grubość, przezroczystość i wysokość się zgadzają (z wyłączeniem tych, które ignorujesz). Linie i otwarte polilinie pasują także wtedy, gdy są narysowane w drugą stronę. Pierwszy obiekt w kolejności rysowania zostaje i zachowuje własne właściwości. Polecenie podaje, ile obiektów sprawdziło i usunęło: duplikaty, scalone nakładające się kawałki, kawałki połączone koniec w koniec. Jedno {{cmd:UNDO}} cofa wszystko. Ustawienia obowiązują do zamknięcia okna rysunku.

Zostawia w spokoju: obiekty na zablokowanych warstwach i ukryte obiekty. Nie scala linii z wysokością (Z) (dokładne duplikaty takich idą, ale), i nie rusza odcinków wewnątrz polilinii (nie są przerzedzane), linii leżącej na odcinku polilinii ani zamkniętej polilinii narysowanej w drugą stronę.

### DRAWORDER

Zmienia, które obiekty są rysowane na wierzchu. `Wybierz obiekty do zmiany kolejności`, {{key:Enter}}, potem `Nad obiektami`, `Pod obiektami`, `Na wierzch` albo `Na spód` ({{key:Enter}} = `Na spód`). `Nad obiektami` i `Pod obiektami` pytają o obiekty odniesienia: zaznaczenie trafia tuż przed najbardziej wysuniętym z nich albo tuż za najdalszym. Zaznaczone obiekty zachowują swoją kolejność między sobą. Jeden krok cofnięcia. Kolejność jest zapisywana z rysunkiem w DWG i DXF, gdzie jest kolejnością, w jakiej zapisywane są obiekty.

Na ekranie każdy obiekt jest rysowany w kolejności rysunku, tak jak rysują go inne programy otwierające plik: pełne kreskowanie, szeroka polilinia albo maska tekstu zakrywa linie i tekst za nim, a to, co jest przed nim, zakrywa je. Tam, gdzie linia przecina tekst, widać oba. Obrazy i dołączone strony PDF zostają pod liniami. W bardzo dużym rysunku, którego wypełnienia i linie nakładają się i przeplatają więcej niż 256 razy, pierwsze 256 zachowuje kolejność, a reszta rysuje wypełnienia pod liniami, by ponowne rysowanie było szybkie.

### TEXTTOFRONT

Przenosi cały tekst, wymiary i odnośniki przed wszystko inne w otwartej przestrzeni: `Tekst`, `Wymiary`, `Odnośniki` albo `Wszystko` ({{key:Enter}} = `Wszystko`). Jeden krok cofnięcia. Informuje, gdy nie ma czego przenosić albo gdy już są na wierzchu.

### HATCHTOBACK

Wysyła każde kreskowanie otwartej przestrzeni za wszystko inne, tak by wypełnienia przestały zakrywać linie i tekst w zapisanym pliku. Bez monitów. Jeden krok cofnięcia.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Pokazuje tylko zaznaczone obiekty: wszystko inne w otwartej przestrzeni znika z widoku aż do {{cmd:UNISOLATEOBJECTS}}. W przeciwieństwie do {{cmd:LAYISO}} działa na obiektach, które wskażesz, bez względu na ich warstwy, i nie zmienia żadnej warstwy. Ukryte obiekty nie są rysowane, wskazywane, przyciągane, powiększane ani drukowane, a polecenia, które przyjmują `ALL`, je pomijają. To, co narysujesz, gdy obiekty są wyizolowane, pokazuje się jak zwykle.

Działa tylko na czas sesji: nic z tego nie jest zapisywane z rysunkiem, nie jest to krok cofnięcia, a ponowne otwarcie rysunku pokazuje wszystko. Gdy obiekty są ukryte, pasek stanu pokazuje przycisk z ich liczbą; kliknij go, by je pokazać ponownie.

### HIDEOBJECTS

Ukrywa zaznaczone obiekty aż do {{cmd:UNISOLATEOBJECTS}}. Te same zasady co {{cmd:ISOLATEOBJECTS}}: tylko na sesję, nie zapisywane, nie jest krokiem cofnięcia.

### UNISOLATEOBJECTS

Aliasy: `UNISOLATE`, `UNHIDE`. Ponownie pokazuje każdy obiekt ukryty przez {{cmd:ISOLATEOBJECTS}} albo {{cmd:HIDEOBJECTS}} i mówi, ile ich wróciło.

### LAYLOCKFADE

Ustawia, jak wyglądają obiekty na zablokowanych warstwach i czy kliknięcie do nich sięga. Mówi aktualny stan, potem przyjmuje:

- liczbę od 0 do 90: wielkość wyblaknięcia w procentach (na start 50). 0 wyłącza wyblaknięcie.
- `ON` albo `OFF`: wyblaknięcie włączone albo wyłączone, z zachowaniem wielkości.
- `Pick`, potem `Yes` albo `No`: czy kliknięcie może zaznaczać obiekty na zablokowanych warstwach, gdy żadne polecenie nie działa? `No` (domyślne): nie da się ich w ogóle wskazać. `Yes`: kliknięcie albo okno je zaznacza, tak by {{ui:Właściwości}} mogły je pokazać; nadal nie da się ich zmienić, a `Wybierz obiekty` polecenia nigdy ich nie bierze.

Przyciąganie do obiektów znajduje obiekty na zablokowanych warstwach w obu przypadkach. Wydruki nigdy nie są wyblakłe. Oba ustawienia są twoje, a nie rysunku, i są też w {{ui:Ustawieniach}} w sekcji {{ui:Zablokowane warstwy}}.

### BURST

Rozbija odwołania do bloków i zachowuje to, co mówią ich atrybuty. `Wybierz odwołania do bloków do rozbicia`, {{key:Enter}}: każde odwołanie zostaje zastąpione obiektami bloku, a wartość każdego widocznego atrybutu staje się zwykłym tekstem na własnej warstwie tego atrybutu (atrybut na warstwie 0 ląduje na warstwie odwołania, jak inne obiekty bloku na warstwie 0). Niewidoczne atrybuty są usuwane. Blok w bloku zostaje odwołaniem do bloku. Jeden krok cofnięcia; polecenie podaje, ile odwołań rozbito i ile wartości atrybutów zamieniono na tekst.

Odrzuca połączony rysunek po nazwie (najpierw go związaj albo skopiuj z niego poleceniem {{cmd:NCOPY}}) i zostawia w spokoju inne zaznaczone obiekty. Dla odwołań do bloków {{cmd:EXPLODE}} daje te same obiekty; {{cmd:BURST}} bierze tylko odwołania do bloków i liczy tekst atrybutów.

### TXT2MTXT

Alias: `T2M`. Łączy teksty jednowierszowe w jeden tekst akapitowy. `Wybierz teksty jednowierszowe do połączenia`, {{key:Enter}}, potem `Akapit` (wiersze zlewają się i zawijają przy szerokości najszerszego wiersza) albo `Wiersze` (każdy tekst zostaje własnym wierszem); {{key:Enter}} bierze ten użyty ostatnio. Wiersze są ułożone od góry do dołu, potem od lewej do prawej, wzdłuż kierunku tekstu u góry. Akapit zwisa od lewego górnego narożnika tekstu u góry i przyjmuje jego wysokość, obrót, styl, warstwę i kolor. Jeden krok cofnięcia.

Tekst, który już jest akapitem, pusty tekst i inne obiekty w zaznaczeniu zostają w spokoju, a polecenie podaje, ile ich było.

### NCOPY

Kopiuje obiekty z odwołania do bloku albo z połączonego rysunku do rysunku, bez rozbijania czegokolwiek. `Wskaż obiekt wewnątrz odwołania do bloku albo połączonego rysunku`: obiekt najbliższy wskazaniu jest kopiowany tam, gdzie się pokazuje, bez względu na to, jak głęboko jest zagnieżdżony; wskaż więcej, potem {{key:Enter}}. Następnie `Punkt bazowy do przesunięcia kopii`: {{key:Enter}} zostawia je na miejscu, albo podaj punkt bazowy i drugi punkt. Całe polecenie to jeden krok cofnięcia.

Kopia przyjmuje warstwę, na której się pokazuje: obiekt na warstwie 0 wewnątrz bloku ląduje na warstwie odwołania, w którym siedział, a kolor ByBlock staje się kolorem tego odwołania. Z połączonego rysunku warstwa `Plan|Walls` staje się `Plan$0$Walls` (nazwą nadaną przez połączenie), wykonana z kolorem, typem linii i grubością linii warstwy połączonej. Wartość atrybutu jest kopiowana jako tekst. Odwołania do bloków na zablokowanych warstwach nie mogą być wskazane.

### FLATTEN

Ustawia wysokość (Z) i grubość zaznaczonych obiektów na 0. `Wybierz obiekty do spłaszczenia`, {{key:Enter}}. Spłaszcza także obiekty wewnątrz definicji bloków, których używa zaznaczenie (oraz bloki w nich), więc każde odwołanie do tych bloków się zmienia; połączone rysunki zostają takie, jakie są. Jeden krok cofnięcia; podaje, ile obiektów się zmieniło, i mówi, gdy żaden nie miał wysokości ani grubości.

To, co CadCraft zachowuje z trzeciego wymiaru w rysunku 2D, to: wysokość okręgów, łuków, elips, punktów, tekstu, odwołań do bloków, kreskowań, odnośników i polilinii (ich wzniesienie), wysokość na każdym końcu linii oraz grubość linii, okręgów, łuków, polilinii, punktów i tekstu, tak jak były w pliku. {{cmd:FLATTEN}} czyści dokładnie to. Nie rusza modelu 3D na karcie 3D, ścian ani brył 3D, a obiekt narysowany w przechylonej płaszczyźnie został już sprowadzony do płaszczyzny rysunku, gdy plik był otwierany.

### BREAKLINE

Rysuje linię z symbolem przerwania, dla widoku, który jest skrócony. Podaje obecny rozmiar i wystawanie, potem `Pierwszy punkt linii przerwania` (albo `Rozmiar` / `Wystawanie`, by je najpierw zmienić), `Drugi punkt` i `Miejsce symbolu przerwania`: kliknij wzdłuż linii albo {{key:Enter}}, by wziąć środek. Wynikiem jest jedna polilinia na bieżącej warstwie: linia, która wychodzi poza każdy punkt o wystawanie, z kreską w kształcie litery Z o wysokości rozmiaru i połowie jego długości.

`Rozmiar` i `Wystawanie` są zapamiętywane jako twoje ustawienia (rozmiar zaczyna jako dwukrotność wysokości tekstu wymiaru razy skala wymiaru; wystawanie jako połowa rozmiaru). {{key:Enter}} powtarza polecenie.

### AUDIT

Sprawdza otwarty rysunek pod kątem uszkodzeń i je naprawia. {{cmd:AUDIT}} patrzy na każdy obiekt w modelu, na arkuszach i wewnątrz bloków oraz na tabelę warstw i wypisuje, co znalazł, według rodzaju:

- liczby, które nie są skończone, albo są absurdalnie duże;
- obiekty bez rozmiaru: linia bez długości, okrąg bez promienia, polilinia z jednym punktem, tekst bez liter albo wysokości, odwołanie do bloku o zerowej skali;
- obiekty na warstwie, której rysunek nie ma; odwołania do bloku, którego nie ma; nazwy stylów tekstu i wymiarów oraz nazwy typów linii, których nie ma w rysunku;
- bloki, które zawierają same siebie, bezpośrednio albo przez inne bloki;
- obiekty, które dzielą identyfikator, klucz albo uchwyt pliku;
- wymiary bez punktów, od których są mierzone, i kreskowania, których granica nie jest zamkniętym konturem.

Potem pyta `Naprawić je? [Tak/Nie]`. `Nie` nic nie zmienia. `Tak` naprawia wszystko w jednym kroku cofnięcia: to, czego nie da się narysować, jest usuwane (złe liczby, brak rozmiaru, brakujący blok, uszkodzony wymiar, kreskowanie bez użytecznej granicy, odwołanie, które zamyka okrąg bloków); brakująca warstwa jest tworzona; nieznane nazwy stylów i typów linii wracają do domyślnych; wspólny klucz jest zastępowany. Wypisuje, ile obiektów usunięto i ile naprawiono. Te same wyniki pojawiają się w panelu Problemy, każdy z własnym {{ui:Napraw}}.

Nic nie odrzuca, ale sprawdza tylko to, co CadCraft sam rysuje: dane zachowane dla innych programów (bryły 3D, obiekty OLE) nie są otwierane.

### RECOVER

Otwiera uszkodzony DXF albo DWG. {{cmd:RECOVER}} pyta o plik, czyta to, co da się odczytać, zamiast odrzucać plik, wypisuje, co pominęło albo przyjęło, a potem sprawdza i naprawia rysunek tak, jak {{cmd:AUDIT}} z `Tak`.

- DXF: wiersze, które nie są częścią pary kod i wartość, są pomijane, aż pary znów się zgodzą; sekcja bez końca jest zamykana; plik urwany w połowie jest czytany do miejsca urwania; binarny DXF urwany w połowie jest czytany do ostatniej pełnej wartości. Gdy sekcja, blok albo obiekt nadal nie może być odczytany, zostaje pominięty i nazwany, a czytanie idzie dalej.
- DWG: obiekty, które nie przechodzą swoich kontroli albo nie dają się zdekodować, są pomijane, a zgubiona lista obiektów jest odbudowywana przez przejście po danych obiektów.

Plik na dysku nie jest zmieniany. Odzyskany rysunek otwiera się jako niezapisany: zapisz go pod nową nazwą. Plik, z którego nic nie da się odczytać, jest odrzucany, z podaniem powodu.

### LEGACYTEXT

Zamienia tekst wpisany starymi 8-bitowymi czcionkami wietnamskimi na Unicode. Krótkie nazwy `TEXTTOUNICODE` i `VNTEXT`.

Starsze rysunki wietnamskie trzymają tekst jako znaki zachodnie, które tylko czcionka zamienia na wietnamski: tekst TCVN3 w czcionkach ABC (`.VnTime`, `.VnArial` i czcionki wielkich liter, których nazwy kończą się na `H`) oraz tekst VNI w czcionkach VNI (`VNI-Times`). CadCraft pokazuje taki tekst tak, jak go odczytuje, gdy tylko rysunek jest otwarty, według czcionki jego stylu tekstu, obiektu albo fragmentu w tekście akapitowym; plik nadal zawiera stare znaki.

{{cmd:LEGACYTEXT}} mówi, ile tekstów znalazł w każdym kodowaniu, i pyta `Zamienić … na Unicode?`. `Tak` przepisuje każdy (model, arkusze, bloki, wartości i definicje atrybutów) i nadaje stylom tekstu czcionkę Unicode (Times New Roman, Arial albo Courier New, zależnie od rodzaju starej czcionki), w jednym kroku cofnięcia. Formatowanie wewnątrz tekstu akapitowego jest zachowane.

Gdy żaden tekst nie używa znanej czcionki (styl, który stracił nazwę czcionki), pyta `Odczytać wybrane teksty jako [Tcvn3/Vni/Brak]`: wybierz kodowanie i zaznacz teksty. Tekst, który już jest Unicode, zostaje w spokoju. Nadpisania tekstu wymiarów i tekst wielokrotnych odnośników nie są zamieniane.
