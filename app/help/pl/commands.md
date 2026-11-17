---
title: Odniesienie poleceń
summary: Wszystkie polecenia aplikacji kreślarskiej CadCraft, z ich aliasami, pytaniami, które zadają, opcjami i wartościami domyślnymi.
keywords: polecenia, aliasy, lista poleceń, pole, obwód, measuregeom, linia, pline, okrąg, łuk, przytnij, odsunięcie, dimlinear, blok, wstaw, układ, drukuj, zoom, pomoc, copyclip, cutclip, pasteclip, pasteorig, copybase, duplikuj, selectall
from: 7db2646b
---

Wpisz nazwę polecenia lub alias i naciśnij {{key:Enter}} lub {{key:Space}}. Wielkość liter nie ma znaczenia, a wiodący `_`, `-`, `.` lub `'` jest ignorowany. Wpisz `HELP` (lub `?`), aby wypisać w historii wiersza poleceń krótką listę wszystkich poleceń; naciśnij {{key:F1}}, aby otworzyć tę pomoc.

Jak czytać monity: opcje są w nawiasach kwadratowych, a wybierasz jedną, wpisując jej wielkie litery (`D` dla średnicy). Wartość domyślna jest w nawiasach ostrych; naciśnij {{key:Enter}}, aby ją przyjąć. Tam, gdzie żądany jest punkt, możesz kliknąć lub wpisać dowolny z formatów opisanych w [Wprowadzanie współrzędnych i odległości](topic:coordinate-entry). Tam, gdzie żądana jest odległość, możesz wpisać liczbę albo kliknąć dwa punkty.

Naciśnięcie {{key:Enter}} tam, gdzie wymagany jest punkt lub obiekt, a nie ma wartości domyślnej, kończy polecenie. {{key:Esc}} je anuluje. Cokolwiek zrobiło polecenie, to jeden krok cofnięcia.

## Rysowanie

### LINE

Skróty: `L`. Proste odcinki, każdy jako osobny obiekt.

- `Specify first point` (Enter: zacznij od ostatnio podanego punktu)
- `Specify next point [Undo]`, powtarzane. Po dwóch odcinkach: `[Undo/Close]`.
- `U` cofa ostatni odcinek, `C` zamyka do pierwszego punktu i kończy. Enter kończy.

### PLINE

Skróty: `PL`. Jedna polilinia z odcinków linii i łuków.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close po dwóch odcinkach)
- `A` przełącza na łuki: `Specify endpoint of arc [Line/CLose/Undo]`. Każdy łuk kontynuuje styczne do poprzedniego odcinka. `L` wraca do linii, `CL` zamyka łukiem.
- Enter kończy; polilinia pozostaje otwarta.

### CIRCLE

Skróty: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pyta `Specify diameter of circle`.
- `2P`: dwa końce średnicy. `3P`: trzy punkty na okręgu.
- `T` (także polecenie `TTR` oraz {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Okrąg: styczna, styczna, promień}}): `Specify point on object for first tangent of circle`, potem drugi, a następnie promień (Enter: ostatni). Okrąg dotyka obu obiektów (linii, łuków, okręgów, odcinków polilinii, także wewnątrz bloków); spośród tych, które pasują, ten, który dotyka najbliżej Twoich wskazań. Gdy żaden nie pasuje, pojawia się komunikat „Okrąg nie istnieje”.
- `TTT` (lub {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Okrąg: styczna, styczna, styczna}}): trzy obiekty; okrąg dotykający wszystkich trzech, najbliższy Twoim wskazaniom (trzy linie dają okrąg wpisany lub opisany, zależnie od tego, gdzie wskażesz).

### ARC

Skróty: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: łuk przez trzy punkty.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Łuk biegnie przeciwnie do ruchu wskazówek zegara od początku do końca.

### RECTANG

Skróty: `REC`, `RECTANGLE`. Zamknięta polilinia.

- `Specify first corner point`, `Specify other corner point`. Wpisz `@width,height` dla drugiego narożnika.

### POLYGON

Skróty: `POL`. Wielokąt foremny jako zamknięta polilinia.

- `Enter number of sides <4>` (od 3 do 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kliknij lub wpisz punkt; jego odległość ustala rozmiar, a kierunek obraca wielokąt.

### ELLIPSE

Skróty: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, potem odległość do drugiej osi.
- `I` (`Isocircle`, tylko gdy {{cmd:ISODRAFT}} jest włączone): środek, potem promień lub `Diameter`: elipsa, jaką okrąg pokazuje na bieżącej płaszczyźnie izometrycznej.

### HATCH

Skróty: `H`, `BH`, `BHATCH`; albo {{ui:Kreskowanie}} na pasku narzędzi. Najpierw wypisuje bieżący wzór, skalę i kąt.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, powtarzane (`Undo`, gdy jest już obszar): każde kliknięcie dodaje zamknięty obszar wokół niego, z zamkniętymi kształtami wewnątrz jako wyspami. Enter tworzy jedno kreskowanie ze wszystkich.
- `S`: `Select closed objects` (zamknięte polilinie, okręgi, zamknięte elipsy).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): wypełnieniem jest gradient zamiast wzoru. Pytania dla niego znajdziesz w {{cmd:GRADIENT}}.

Zobacz [Kreskowanie i wypełnianie obszarów](topic:hatch).

### GRADIENT

Skróty: `GD`. Wypełnia obszar gradientem jednego lub dwóch kolorów. Najpierw pyta o gradient, potem postępuje jak {{cmd:HATCH}} (`Pick internal point`, `S` dla zamkniętych obiektów, {{key:Enter}} kończy).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, powtarzane; za każdym razem wypisuje gradient w jego obecnym stanie.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` albo jeden z nich odwrócony (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Wystarczą pierwsze litery.
- `O`: jeden kolor, potem jego odcień od 0 do 1 (0 przyciemnia do czerni, 0.5 to sam kolor, 1 rozjaśnia do bieli). `TW`: pierwszy i drugi kolor. Kolor to liczba od 1 do 255, trzy liczby, np. `255,128,0`, albo `#rrggbb`.
- `A`: kąt, pod jakim biegnie gradient. `C`: centrowanie Yes lub No (No przesuwa środek gradientu w jedną stronę).
- Odrzuca kolor lub typ, których nie zna, oraz odcień spoza zakresu od 0 do 1.

{{cmd:HATCHEDIT}} `G` oraz Właściwości (Gradient) zmieniają gradient później albo zamieniają dowolne kreskowanie na gradient. Gradient jest rysowany na ekranie i drukowany. DWG 2004 i nowsze zachowują go jako prawdziwe kreskowanie gradientowe; DXF 2000 i DWG 2000 zachowują go dla CadCraft, a inne programy widzą wypełnienie jednolite pierwszym kolorem.

### HATCHGENERATEBOUNDARY

Skróty: `HGB`. Ponownie tworzy kontur z kreskowania, które go straciło. `Select hatches` (lub zaznacz je najpierw), potem `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Każda pętla kreskowania staje się zamkniętą polilinią na warstwie kreskowania; nowe polilinie pozostają zaznaczone. Krzywa krawędź wraca jako krótkie proste odcinki, które kreskowanie zachowuje.
- Przy Yes kreskowanie podąża za nowym konturem, jak kreskowanie utworzone przez {{cmd:HATCH}}. Jeden krok cofnięcia.
- Jeśli nie zaznaczono żadnego kreskowania, komunikuje to.

### POINT

Skróty: `PO`; albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Punkt}}. Obiekty punktowe, jeden na kliknięcie, aż do Enter.

- `Specify a point`

### XLINE

Skróty: `XL`; albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Linia konstrukcyjna}}. Linie konstrukcyjne, nieskończone w obie strony. Zobacz [Linie konstrukcyjne i półproste](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, potem `Specify through point` dla każdej linii, aż do Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` najpierw pyta `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, potem `Specify angle end point` dla każdej linii.
- `O`: `Specify offset distance [Through] <Through>`, potem `Select a line object` i `Specify side to offset` (lub `Specify through point`) dla każdej linii.

### RAY

Brak skrótów; albo {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Półprosta}}. `Specify start point`, potem `Specify through point` dla każdej półprostej, aż do Enter.

### TEXT

Skróty: `DT`, `DTEXT`; albo {{ui:Tekst}} na pasku narzędzi. Tekst jednowierszowy; każdy wiersz to osobny obiekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, potem `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, powtarzane: każdy Enter zaczyna kolejny wiersz pod spodem. Enter w pustym wierszu kończy. {{key:Space}} wpisuje tutaj spację.

### DIVIDE

Skróty: `DIV`. {{cmd:DIVIDE}} umieszcza znaczniki na linii, łuku, okręgu, polilinii, splinie lub elipsie, które dzielą ją na równe części. Wskaż obiekt, a potem podaj liczbę części (od 2 do 32767). Obiekt otwarty dostaje o jeden znacznik mniej niż części; zamknięty dostaje znacznik także na początku. Sam obiekt nie jest cięty. Znaczniki to punkty; `Block` zamiast nich prosi o blok z tego rysunku i o to, czy ma obracać się za obiektem. Długości wzdłuż splinów i elips są mierzone po krótkich cięciwach. Odrzuca tekst, kreskowania i inne obiekty bez długości.

### MEASURE

Skróty: `ME`. {{cmd:MEASURE}} umieszcza znacznik co podaną długość wzdłuż linii, łuku, okręgu, polilinii, splinu lub elipsy, licząc od końca najbliższego miejsca, w którym kliknąłeś (obiekt zamknięty: od jego początku). Długość podaje się, wpisując ją lub dwoma punktami. Dalszy koniec obiektu otwartego nie dostaje znacznika. `Block` umieszcza blok przy każdym znaczniku zamiast punktu. Odrzuca długość 0, długość większą niż obiekt oraz taką, która dałaby więcej niż 32767 znaczników.

### BOUNDARY

Skróty: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tworzy zamkniętą polilinię wokół obszaru, w którym leży wskazany punkt, z dowolnych linii, łuków, okręgów, polilinii i krzywych, które go ograniczają na ekranie. Fragmenty leżące na łuku lub okręgu wracają jako odcinki łuku; fragmenty elips i splinów wracają jako krótkie proste odcinki. Przy włączonych `Islands` (ustawienie początkowe) każdy zamknięty obszar wewnątrz też dostaje własną polilinię. Wskazuj dalsze punkty; Enter kończy. Obiekty ograniczające obszar pozostają bez zmian. Jeśli żaden zamknięty obszar nie zawiera punktu, komunikuje to.

### BLEND

{{cmd:BLEND}} rysuje spline między końcami dwóch otwartych krzywych. Wskaż każdą krzywą w pobliżu końca do połączenia. `CONtinuity` wybiera `Tangent` (spline odchodzi i dochodzi wzdłuż obu krzywych) lub `Smooth` (dodatkowo wygina się tak, jak wyginają się one na końcach); wybór jest zachowywany na sesję. Dwie krzywe nie są zmieniane. Odrzuca zamknięte obiekty i dwa końce, które już się stykają.

### REGION

Skróty: `REG`. {{cmd:REGION}} zamienia zamknięte obiekty na regiony: płaskie obszary, które można łączyć, ciąć i mierzyć. Wybierz okręgi, zamknięte polilinie, zamknięte elipsy lub zamknięte spliny, albo linie, łuki i otwarte polilinie, które zamykają pętlę końcami; każda pętla staje się jednym regionem i zastępuje obiekty, z których powstała. Łuki pozostają łukami; elipsy i spliny stają się krótkimi prostymi odcinkami. To, co nie jest zamknięte i nie zamyka pętli, zostaje bez zmian, a polecenie podaje, ile tego jest. W rysunku region to jedna lub więcej zamkniętych polilinii, trzymanych razem jako nienazwana grupa, więc kliknięcie zaznacza cały region, a kopia to osobny region; inne programy otwierające plik widzą zamknięte polilinie.

Gdy w rysunku są regiony, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} na karcie 2D działają na regionach: `UNION` łączy zaznaczone regiony w jeden (regiony rozdzielone stają się jednym regionem z kilkoma konturami), `SUBTRACT` pyta o regiony, od których odejmować, a potem o te, które należy odjąć (otwór pozostaje częścią regionu), `INTERSECT` zachowuje obszar, który wszystkie mają wspólny. Każde z nich podaje pole wyniku i jest jednym krokiem cofnięcia. Odrzucają, gdy nic by nie zostało lub nic nie jest wspólne. Na karcie 3D oraz w rysunku bez regionów te same polecenia działają na bryłach, jak dotychczas.

## Modyfikacja

### MTEXT

Skróty: `MT`, `T`; albo {{ui:Akapit}} na pasku narzędzi. Tekst akapitowy zawijany do szerokości, pisany na miejscu.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: szerokość między dwoma narożnikami to miejsce zawijania tekstu. `H` pyta `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` i pomija drugi narożnik.
- Potem na rysunku otwiera się pole: pisz; {{key:Enter}} zaczyna nowy akapit; {{key:Mod+Enter}} lub kliknięcie poza polem kończy; {{key:Esc}} anuluje. Jego pasek ustawia wysokość, odstępy między wierszami, szerokość i wyrównanie. Zobacz [Dodawanie tekstu i etykiet](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Skróty: `ED`, `DDEDIT`; albo kliknij dwukrotnie tekst. `Select a text to edit`, powtarzane do {{key:Enter}}: każdy otwiera się w tym samym polu. Uruchomione na zaznaczonym lub dwukrotnie klikniętym tekście, edytuje ten jeden i kończy.

### ERASE

Skróty: `E`, `DELETE`; albo naciśnij {{key:Delete}} przy zaznaczonych obiektach.

- `Select objects` (pomijane, gdy obiekty są już zaznaczone)

### MOVE

Skróty: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, wpisywane jako `dx,dy`.

### COPY

Skróty: `CO`, `CP`. Kopie tyle razy, ile podasz punktów.

`Array` przy monicie o drugi punkt tworzy wiersz za jednym razem: podaj liczbę elementów (oryginał liczy się jako jeden), a potem punkt, w którym ma się znaleźć pierwsza kopia; pozostałe idą w tym samym odstępie. `Fit` ustawia ten punkt jako miejsce ostatniej kopii, a pozostałe rozkłada równomiernie pomiędzy.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, powtarzane do Enter. `U` cofa ostatnią kopię.

### ROTATE

Skróty: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: w stopniach, dodatnie przeciwnie do ruchu wskazówek zegara; albo kliknij punkt, aby obrócić w jego stronę.

### SCALE

Skróty: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: wpisz współczynnik, np. `0.5` lub `2`. Klikniętyś punkt daje jako współczynnik swoją odległość od punktu bazowego.

### MIRROR

Skróty: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Skróty: `AL`; albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Wyrównaj}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Przy dwóch parach: `Scale objects based on alignment points? [Yes/No] <N>`

Zobacz [Wyrównywanie obiektów](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (lub zaznaczenie), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pyta o punkt. Zaznaczenie pozostaje.

### DISTRIBUTE

- `Select objects` (co najmniej trzy), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Dwa skrajne pozostają; zaznaczenie pozostaje.

### ALIGNPANEL

Skróty: `ALP`; albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Wyrównaj i rozmieść}}. Otwiera panel, który uruchamia ALIGNTO i DISTRIBUTE kliknięciami.

### LASER

Skróty: `LASERCUT`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Laser…}}. Otwiera panel Laser nad rysunkiem: co robi każda warstwa (cięcie, rysowanie linii, grawerowanie, wypełnienie, obraz), podgląd, kod G GRBL do zapisania oraz ramkowanie i wysyłanie przez Web Serial. Zobacz [Wysyłanie rysunku do lasera](topic:laser-cutting).

### STRETCH

Skróty: `S`; albo {{ui:Rozciągnij}}. `Select objects to stretch`: przeciągnij okna przecinające nad końcami (lub wpisz `C`), aby przesunąć. `Specify base point [Displacement]`, `Specify second point`. Punkty wewnątrz okien się przesuwają: końce linii, wierzchołki polilinii (segmenty łukowe zachowują swoją wysokość), punkty wymiarów; okręgi, elipsy, teksty, punkty i bloki przesuwają się w całości, gdy ich środek lub punkt wstawienia jest wewnątrz. Zaznaczenie wykonane przed poleceniem zachowuje okna przecinające (i lasa), które je wykonały, więc rozciągają się w ten sam sposób. Bez okna obiekty przesuwają się w całości.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Skróty: `AR`; albo {{ui:Macierz}}. `Select objects`, potem `Enter array type [Rectangular/POlar] <Rectangular>` (tylko ARRAY).

- Prostokątna zaczyna od 4 kolumn × 3 wierszy, w odstępach 1,5 razy większych niż rozmiar obiektów, pokazana jako podgląd. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pyta o kolumny i wiersze, `S` o odstępy między kolumnami i między wierszami (ujemna wartość idzie w lewo lub w dół), `COL` i `R` po jednym kierunku.
- Biegunowa pyta `Specify center point of array`, zaczyna od 6 elementów dookoła, obrócona. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementy, `F` kąt wypełnienia (+ przeciwnie do ruchu wskazówek zegara, − zgodnie), `ROT` Yes lub No.
- {{key:Enter}} (eXit) tworzy kopie jako zwykłe obiekty. Jeden krok cofnięcia.
- `AS` (ASsociative) przełącza między zwykłymi kopiami a macierzą, która pozostaje edytowalna: jeden obiekt, który zmienisz później za pomocą {{cmd:ARRAYEDIT}}, jego uchwytami lub we Właściwościach. Wybór jest zapamiętywany ({{cmd:ARRAYASSOCIATIVITY}}); zaczyna się od zwykłych kopii.

### ARRAYPATH

Kopie wzdłuż krzywej. `Select objects`, potem `Select path curve`: linia, łuk, okrąg, elipsa, polilinia lub spline (nie jeden z obiektów kopiowanych). Ścieżka zaczyna się od jej końca bliższego obiektom, a pierwszy element to obiekty tam, gdzie leżą.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, z podglądem. `M`: `Divide` rozkłada elementy równomiernie na całej ścieżce, `Measure` umieszcza jeden co tyle wzdłuż niej. `I`: liczba elementów (przy Measure 0 oznacza tyle, ile się zmieści; liczba większa niż długość ścieżki jest ograniczana do tego, co się mieści). `SP`: odległość między elementami wzdłuż ścieżki (przełącza na Measure). `AL`: Yes obraca każdy element, by podążał za ścieżką, No zostawia je w pionie.
- `AS` jak w {{cmd:ARRAY}}. Przy włączonym zachowuje własną kopię kształtu ścieżki: późniejsza edycja krzywej ścieżki nie przesuwa elementów.
- Odrzuca ścieżkę, która nie jest krzywą, oraz jeden element.

### ARRAYEDIT

Zmienia macierz utworzoną z ASsociative. `Select array` (lub zaznacz ją najpierw). Wypisuje, czym macierz jest teraz, a potem pyta, aż do {{key:Enter}}:

- Prostokątna: `COL` kolumny i ich odstęp, `R` wiersze i ich odstęp, `A` kąt, pod jakim biegną kolumny.
- Biegunowa: `I` elementy, `F` kąt wypełnienia, `ROT` obrót elementów Yes lub No.
- Ścieżka: `M` Divide lub Measure, `I` elementy, `SP` odstęp, `AL` wyrównanie do ścieżki.
- `S` (Source) otwiera obiekty, które macierz powtarza, osobno, jak edytor bloków. Rysuj i edytuj tam; {{cmd:ARRAYCLOSE}} zapisuje lub odrzuca, a każdy element podąża.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, potem kliknij elementy do zastąpienia i {{key:Enter}}. Te elementy pokazują zamiennik; obiekty zamienne opuszczają rysunek i żyją w macierzy. `RES` (RESet) ponownie pokazuje obiekty źródłowe w każdym elemencie.
- Każda zmiana to jeden krok cofnięcia. Odrzuca zwykłe kopie, zwykłe odwołanie do bloku i macierz na zablokowanej warstwie.

Te same liczby są we Właściwościach w sekcji Macierz, a macierz ma uchwyty: punkt bazowy ją przesuwa, uchwyt przy drugim elemencie ustawia odstęp, uchwyt za ostatnim elementem ustawia liczbę (biegunowa: drugi element ustawia liczbę elementów, ostatni kąt wypełnienia). {{cmd:EXPLODE}} zamienia macierz z powrotem na zwykłe kopie.

### ARRAYCLOSE

Kończy edycję źródła {{cmd:ARRAYEDIT}}: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Komunikuje, gdy żadne obiekty źródłowe macierzy nie są otwarte. {{cmd:BCLOSE}} robi to samo.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Ustala, od czego zaczynają {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}}; ich opcja `AS` zmienia to samo ustawienie. Zapamiętywane w tej przeglądarce.

### OFFSET

Skróty: `O`. Linie, łuki, okręgi i polilinie.

Tam, gdzie polilinia odsuwa się na zewnątrz, a jej odcinki proste rozchodzą się na narożniku, {{cmd:OFFSETGAPTYPE}} decyduje, jak zamknąć szczelinę.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, potem `Specify point on side to offset` (lub, przy Through, `Specify through point`), powtarzane do Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: sposób, w jaki {{cmd:OFFSET}} zamyka szczeliny na zewnętrznych narożnikach polilinii. `0` wydłuża odcinki, aż się spotkają (ustawienie początkowe), `1` łączy je łukiem wokół dawnego narożnika, `2` prostym ścięciem. Narożniki wewnętrzne i segmenty łukowe nie są zmieniane. Zachowywane na tę sesję.

### EXTRIM

{{cmd:EXTRIM}} przycina wszystko po jednej stronie krawędzi. Wskaż krawędź tnącą (linię, łuk, okrąg, polilinię, elipsę, spline lub linię konstrukcyjną), a potem punkt po stronie do oczyszczenia: każda linia, łuk, okrąg, polilinia i linia konstrukcyjna, która przecina krawędź, traci swoją część po tej stronie, zaczynając od krawędzi. Podczas wyboru strony części, które zostaną usunięte, podążają za wskaźnikiem. Dla krawędzi zamkniętej stronami są wnętrze i zewnętrze. Obiekty, które tylko dotykają krawędzi, oraz teksty, kreskowania, spliny i elipsy, które ją przecinają, pozostają bez zmian. Jeden krok cofnięcia.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: jak zaczynają się {{cmd:TRIM}} i {{cmd:EXTEND}}. `1` Szybki: każdy obiekt jest krawędzią tnącą lub granicą. `0` Standardowy: najpierw pytają o krawędzie. Także `(setvar "TRIMEXTENDMODE" 0)` w LISP.

### TRIM

Skróty: `TR`. Najpierw wypisuje `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. W trybie Szybkim każdy widoczny obiekt jest krawędzią tnącą, a obiekt, którego nic nie przecina, zostaje usunięty; w trybie Standardowym najpierw pyta `Select cutting edges (Enter = every object)` i tnie tylko na nich.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, powtarzane: kliknij fragment do usunięcia (pokazuje się szary i przerywany, gdy wskaźnik na nim spoczywa), przeciągnij ścieżkę przez kilka fragmentów (wszystkie idą w jednym kroku) albo kliknij dwa puste miejsca, aby wyznaczyć płot między nimi. {{key:Shift}} zamiast tego wydłuża. `T` wybiera krawędzie tnące (tryb Standardowy), `F` pyta o punkty płotu, `C` dwa narożniki okna (fragmenty częściowo wewnątrz zostają), `O` pyta `Enter a trim mode option [Quick/Standard]`, `E` pyta `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` usuwa wskazane obiekty, `U` cofa ostatni wybór lub przeciągnięcie. Enter kończy. Zobacz [Przycinanie i wydłużanie](topic:trim-and-extend).

- Kliknięcie kreskowania tnie je: krawędzie tnące dzielą zakreskowany obszar, a kliknięty fragment zostaje usunięty (nie zostaje żaden narysowany kontur w tym miejscu). Kreskowanie zachowuje swój wzór lub gradient; kreskowanie powiązane z konturem nie jest już powiązane, bo nie wypełnia go. Komunikuje, gdy żadna krawędź tnąca nie dzieli kreskowania w tym miejscu, gdy kliknięcie jest poza kreskowaniem i gdy nic by nie zostało (użyj {{cmd:ERASE}}). Przeciągnięta ścieżka lub płot nie tnie kreskowań.

### EXTEND

Skróty: `EX`. To samo co TRIM, tylko odwrotnie: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Kliknięcie wydłuża najbliższy mu koniec do następnej granicy; przeciągnięta ścieżka lub płot wydłuża każdy obiekt, który przecina; {{key:Shift}} przycina. `B` wybiera krawędzie graniczne (tryb Standardowy). Tryb i krawędź są wspólne z TRIM.

### LINKVIEWS

Skróty: `SYNCVIEWS`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Połącz widoki okienek}}, lub ikona łącza na kartach rysunku. `Link the panes' views [ON/OFF]` (Enter przełącza na drugi stan): gdy włączone, przesunięcie lub powiększenie w aktywnym okienku przesuwa każde okienko pokazujące ten sam rodzaj przestrzeni. Zobacz [Podział ekranu](topic:split-screen).

### OPENIN3D

Brak skrótów; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Otwórz w ModelCraft}}, gdzie aplikacja do modelowania 3D przejmuje przekazany rysunek. Otwiera go tam w nowej karcie, jako DWG (nic nie jest wysyłane). Jeśli przeglądarka zablokuje kartę, komunikuje to.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: co rysuje naciśnięcie i przeciągnięcie na pustym miejscu. To samo co Ustawienia › CadCraft › Przeciąganie do zaznaczania. Zobacz [Zaznaczanie lasem](topic:lasso-selection).

### FILLET

Skróty: `F`. Linie, łuki, okręgi i polilinie. Najpierw wypisuje `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pyta `Specify fillet radius <last>`. `T` pyta `Enter Trim mode option [Trim/No trim]`: przy No trim obiekty zostają, a dodawany jest tylko łuk.
  - `M` utrzymuje polecenie dla kolejnych narożników aż do {{key:Enter}}; `U` cofa ostatni narożnik bez wychodzenia z polecenia.
  - `P` pyta `Select 2D polyline [Radius]` i zaokrągla każdy narożnik, w którym stykają się dwa proste odcinki. Zaokrąglenia, które już ma, są zastępowane nowym promieniem; promień 0 je usuwa. Narożniki, których boki są za krótkie na ten promień, zostają i są liczone.
- `Select second object or shift-select to apply corner [Radius]`. Przytrzymaj {{key:Shift}} podczas kliknięcia, aby uzyskać ostry narożnik, niezależnie od promienia.

Kliknij każdy obiekt na części, którą chcesz zachować. Dwie linie, które się nie stykają, są wydłużane. Dwie równoległe linie dostają półkole przez szczelinę, na końcu pierwszej linii najbliższym kliknięciu. Okrąg nigdy nie jest cięty. Dwa sąsiadujące segmenty tej samej polilinii dostają łuk wewnątrz polilinii; polilinia i inny obiekt działają, gdy cięcie trafia w pierwszy lub ostatni segment polilinii.

### CHAMFER

Skróty: `CHA`. Linie i proste odcinki polilinii. Najpierw wypisuje bieżące odległości (lub długość i kąt).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pyta `Specify first chamfer distance <last>` i `Specify second chamfer distance <the first>`: pierwsza jest odcinana od pierwszej wskazanej linii, druga od drugiej.
  - `A` pyta `Specify chamfer length on the first line` i `Specify chamfer angle from the first line`.
  - `E` (mEthod) wybiera, której z dwóch metod użyje następne ścięcie. `T`, `M`, `U` i `P` działają jak w {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. Shift+klik robi ostry narożnik.

Odległość dłuższa niż linia jest odrzucana (`Distance is too large.`).

### BREAK i BREAKATPOINT

Skróty: `BR`. `Select object` (w miejscu kliknięcia jest pierwszy punkt), `Specify second break point [First point]`; `F` pyta `Specify first break point` i `Specify second break point`. Część między nimi znika; na okręgu idzie przeciwnie do ruchu wskazówek zegara od pierwszego punktu. BREAKATPOINT pyta `Specify break point` i dzieli tam obiekt na dwa (nie okrąg).

### LENGTHEN

Skróty: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: wskazanie wypisuje `Current length` (oraz kąt objęty łukiem) i pyta ponownie. `DE` pyta `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` przeciąganie. Potem `Select an object to change [Undo]`, powtarzane: przesuwa się koniec najbliższy kliknięciu. Linie, łuki i otwarte polilinie.

### JOIN

Skróty: `J`. `Select objects to join`. Linie, łuki i otwarte polilinie, które stykają się końcami, stają się polilinią (zamkniętą, gdy łańcuch się zamyka); linie na jednej prostej stają się jedną linią; łuki jednego okręgu stają się jednym łukiem lub okręgiem. Historia podaje, ile obiektów się połączyło, a ile nie.

### MATCHPROP

Skróty: `MA`, `PAINTER`. `Select source object`, potem `Select destination objects [Settings]` i {{key:Enter}}. Kopiuje warstwę i kolor, a między obiektami tego samego rodzaju wysokość i szerokość tekstu, wymiary lub wzór kreskowania. `S` pyta `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, powtarzane do {{key:Enter}}; wybór jest zapamiętywany na sesję.

### EXPLODE

Skróty: `X`. Polilinie stają się liniami i łukami, odwołania do bloków stają się swoimi obiektami, wymiary stają się liniami, grotami i tekstem. Macierz, która pozostaje edytowalna ({{cmd:ARRAYEDIT}}), staje się zwykłymi kopiami swoich obiektów.

- `Select objects`

### GROUP

Skróty: `G`. {{cmd:GROUP}} nadaje zaznaczonym obiektom wspólną nazwę. Zaznacz obiekty, a potem wpisz nazwę (bez spacji; `?` wypisuje grupy; Enter tworzy grupę bez nazwy) i, dla grupy nazwanej, opcjonalny opis. Od tej chwili kliknięcie jednego z nich lub okno, które któryś obejmuje, zaznacza je wszystkie, więc przesuwają się, kopiują i usuwają razem; każdy obiekt nadal jest osobnym obiektem. Obiekt może być w kilku grupach. Kopia całej grupy to nowa grupa bez nazwy; kopia jednego członka samodzielnie dołącza do grupy. Grupy należą do przestrzeni, w której powstały (model lub arkusz). Są zachowywane, gdy zapiszesz jako DWG lub DXF i ponownie otworzysz plik w CadCraft; pliki DXF 2000 zawierają je także jako obiekty grup dla innych programów, a grupy utworzone w innym programie są odczytywane przy otwieraniu DXF lub DWG.

### UNGROUP

{{cmd:UNGROUP}} rozbija grupy: zaznacz obiekty z grup (każda grupa, do której należą, zostaje rozbita) albo wpisz `Name` i nazwę grupy. Obiekty pozostają w rysunku. Jeden krok cofnięcia przywraca grupy.

### GROUPEDIT

{{cmd:GROUPEDIT}} zmienia jedną grupę. Wskaż jeden z jej obiektów, albo podaj `Name` i jej nazwę; grupa, która jest już zaznaczona, jest brana taka, jaka jest. Potem: `Add` obiekty (wskazywane pojedynczo, a nie grupami), `Remove` obiekty, `REName` grupę, zmień jej `Description` albo ustaw `Selectable` (czy kliknięcie jednego obiektu zaznacza całą grupę). `eXit` lub Enter kończy. Grupa bez obiektów znika.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: przy `1` (ustawienie początkowe) kliknięcie lub okno na zgrupowanym obiekcie zaznacza całą grupę; przy `0` pojedyncze obiekty, więc możesz edytować jednego członka. Zachowywane na tę sesję.

## Schowek

Schowek CadCraft: działa w obrębie rysunku, między rysunkami i między kartami CadCraft w tej przeglądarce. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, albo {{ui:Kopiuj}} w grupie {{ui:Edycja}}. Kopiuje obiekty do schowka wraz z blokami i warstwami, których używają. Obiekty pozostają zaznaczone.

- `Select objects to copy` (pomijane, gdy obiekty są już zaznaczone)

### CUTCLIP

{{key:Mod+X}}, albo {{ui:Wytnij}} w menu {{ui:Więcej}}. Kopiuje obiekty do schowka, a potem je usuwa (jeden krok cofnięcia).

- `Select objects to cut` (pomijane, gdy obiekty są już zaznaczone)

### COPYBASE

Kopiuje obiekty do schowka z wskazanym punktem bazowym; wklejenie umieszcza ten punkt.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, albo {{ui:Wklej}} w grupie {{ui:Edycja}}. Kopia podąża za kursorem, zwisając z dolnego lewego narożnika swojego zasięgu (albo ze środka, albo z punktu {{cmd:COPYBASE}}; zobacz [Ustawienia CadCraft](topic:settings)).

- `Specify insertion point`

Wklejone obiekty są zaznaczone. Blok, który rysunek już ma pod tą samą nazwą, zachowuje definicję z tego rysunku.

Gdy obszar skopiowany w MarkupCraft jest nowszy niż to, co skopiowało CadCraft (i ma mniej niż 6 godzin), {{key:Mod+V}} oraz `PASTECLIP` wklejają zamiast tego ten obszar: zobacz `PASTEAREA`.

### PASTEAREA

Skróty: `PAREA`. {{ui:Wklej skopiowany obszar}} w menu {{ui:Więcej}}. Wkleja obszar skopiowany w MarkupCraft za pomocą {{ui:Kopiuj obszar}} jako obraz w jego rzeczywistym rozmiarze. Zobacz [Obrazy w rysunku](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (tylko gdy arkusz nie miał skali rysunku): liczba, {{key:Enter}} dla rozmiaru papieru albo `P`, potem `First point on the pasted area`, `Second point on the pasted area` i ich rzeczywista odległość.

### PASTEORIG

{{key:Mod+Shift+V}}, albo {{ui:Wklej w miejscu}} w menu {{ui:Więcej}}. Wkleja we współrzędnych, z których obiekty zostały skopiowane. Nie pyta o nic.

### DUPLICATE

Skróty: `DUP`. {{key:Mod+D}}, albo {{ui:Duplikuj i przesuń}} w menu {{ui:Więcej}}. Kopia obiektów porusza się za wskaźnikiem od miejsca, w którym jest; {{key:Esc}} nie zostawia nic. Nie korzysta ze schowka.

- `Select objects to duplicate` (pomijane, gdy obiekty są już zaznaczone)
- `Specify where the copy goes (Esc leaves nothing)`: kliknij, wpisz punkt, `@dx,dy` (od miejsca, gdzie był wskaźnik) albo odległość w stronę kursora.

### SELECT

Pyta `Select objects` (z każdą opcją poniżej) i zostawia wybrane obiekty zaznaczone, dla następnego polecenia albo dla `P` później.

### QSELECT

Skróty: `QS`. W przeglądarce okno dialogowe {{ui:Szybkie zaznaczenie}} (zobacz [Zaznaczanie obiektów](topic:select-objects#select-by-a-rule-quick-select)). Bez niego wiersz poleceń pyta `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` i `Enter value`. Dopasowania stają się zaznaczeniem.

### SELECTSIMILAR

Skróty: `SIM`. `Select objects [SEttings]` (lub bieżące zaznaczenie): zaznacza każdy obiekt tego samego typu, z tą samą warstwą i kolorem (oraz nazwą bloku, wzorem kreskowania). `SE` pyta `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, powtarzane do {{key:Enter}}.

### FIND

Brak skrótów; albo {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Znajdź i zamień}}. W przeglądarce okno dialogowe {{ui:Znajdź i zamień}} (zobacz [Dodawanie tekstu i etykiet](topic:text#find-and-replace-words)). Bez niego: `Enter text to find`, potem `Enter replacement text (Enter: select what is found)`. Szuka w tekście, wartościach atrybutów i tekście wymiarów, na otwartej karcie lub w zaznaczeniu.

### SELECTALL i DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) zaznacza każdy obiekt, który można edytować na otwartej karcie. `DESELECT` (aliasy `AI_DESELECT`, `SELECTNONE`; albo {{key:Esc}}) czyści zaznaczenie.

## Wymiary

### DIMLINEAR

Skróty: `DLI`, `DIMLIN`. Odległość pozioma lub pionowa.

- `Specify first extension line origin [Select object]` (Enter lub `S`: `Select object to dimension`, potem kliknij linię, łuk, okrąg lub segment polilinii)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pyta o tekst (`<>` to zmierzona wartość), `H` i `V` ustalają kierunek, `R` pyta `Specify angle of dimension line <0>`.

### DIMALIGNED

Skróty: `DAL`, `DIMALI`. Rzeczywista odległość między dwoma punktami.

- Początki jak w {{cmd:DIMLINEAR}}, potem `Specify dimension line location [Text]`.

### DIMANGULAR

Skróty: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Łuk: jego kąt. Okrąg: `Specify second angle endpoint`. Linia: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kliknij wewnątrz kąta, aby go zmierzyć.

### DIMRADIUS i DIMDIAMETER

Skróty: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, potem `Specify dimension line location [Text]`.

### DIMCONTINUE

Skróty: `DCO`, `DIMCONT`. Kontynuuje od ostatniego wykonanego wymiaru liniowego lub równoległego (albo pyta `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, powtarzane do Enter.

### DIMBASELINE

Skróty: `DBA`, `DIMBASE`. Jak {{cmd:DIMCONTINUE}}, ale każdy wymiar zaczyna się od pierwszego początku i jest układany dalej na zewnątrz.

### DIMORDINATE

Skróty: `DOR`, `DIMORD`. `Specify feature location`, potem `Specify leader endpoint [Xdatum/Ydatum/Text]`. Zapisuje, jak daleko element jest od początku UCS wzdłuż X lub wzdłuż Y, na odnośniku: odnośnik biegnący głównie w górę lub w dół odczytuje X, biegnący w bok odczytuje Y; `Xdatum` i `Ydatum` ustalają, który. Najpierw ustaw początek za pomocą {{cmd:UCS}} (bez niego jest to punkt 0,0 rysunku). Uchwyty przesuwają element, początek i koniec odnośnika, a wartość podąża. Zapisywane jako prawdziwy wymiar współrzędnej w DWG i DXF. Odrzuca koniec odnośnika leżący na samym elemencie.

### DIMARC

Skróty: `DAR`. `Select arc or polyline arc segment`, potem `Specify arc length dimension location [Text]`. Mierzy wzdłuż łuku (nie cięciwy) i wpisuje symbol łuku przed wartością. Odrzuca pełny okrąg, linię lub prosty segment polilinii. DWG zachowuje go jako wymiar długości łuku; DXF zachowuje go jako wymiar kątowy z długością jako tekstem, a CadCraft ponownie otwiera go jako wymiar długości łuku.

### DIMJOGGED

Skróty: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Wymiar promienia dla krzywej, której środek jest daleko lub poza arkuszem: linia wymiaru zaczyna się w punkcie, który podajesz, zamiast w środku, z załamaniem, i nadal zapisuje prawdziwy promień. DWG zachowuje go jako wymiar promienia łamanego; DXF zachowuje go jako wymiar promienia, a CadCraft ponownie otwiera go załamanego.

### DIMJOGLINE

Skróty: `DJL`. `Select dimension to add jog [Remove]`, potem `Specify jog location (or press Enter)`. Umieszcza symbol załamania na linii wymiaru liniowego lub równoległego, aby pokazać, że odległość nie jest narysowana w skali; wartość się nie zmienia. `Remove` go zdejmuje. Odrzuca inne rodzaje wymiarów.

### QDIM

Brak skrótów. `Select geometry to dimension`, potem `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Wymiaruje kilka obiektów w jednym kroku, od końców linii i segmentów polilinii, środków okręgów i łuków, punktów oraz odwołań do bloków. Położenie nad lub pod obiektami mierzy w poprzek, a położenie obok nich mierzy w górę. `Continuous` łączy punkty łańcuchem, `Baseline` mierzy wszystkie od pierwszego, `Staggered` zagnieżdża pary od środka na zewnątrz, `Ordinate` podaje każdemu punktowi jego odległość od bazy (`datumPoint` wybiera nową), `Radius` i `Diameter` wymiarują każdy wskazany okrąg i łuk. Tryb jest zapamiętywany. Wszystko, co utworzy, to jeden krok cofnięcia. Komunikuje, gdy jest mniej niż dwa punkty lub brak łuków albo okręgów dla Radius i Diameter.

### DIMBREAK

Skróty: `DBREAK`. `Select dimensions to add or remove breaks`, potem `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` zostawia przerwę w liniach wymiarów i pomocniczych wszędzie tam, gdzie przecina je inny obiekt, i ponownie wylicza przerwy, gdy te obiekty lub wymiar się przesuną. `Manual` (dla jednego wymiaru) pyta o dwa punkty i zostawia przerwę między nimi. `Remove` zdejmuje wszystkie przerwy. Przerwa ma 1,5 raza wysokość tekstu wymiaru.

### DIMSPACE

Brak skrótów. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Przesuwa linie wymiarów równoległych liniowych i równoległych (lub kątowych wokół tego samego wierzchołka), tak aby stały w tej samej odległości, liczonej od wymiaru bazowego, każdy po swojej stronie. `0` ustawia je w linii z bazą; `Auto` to dwukrotność wysokości tekstu wymiaru bazowego. Wymiary nierównoległe do bazowego zostają bez zmian.

### DIMINSPECT

Brak skrótów. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Rysuje ramkę wokół wartości z etykietą przed nią i częstotliwością kontroli za nią. `remove` zdejmuje ramkę. Tekst tolerancji zostaje przy wartości.

### DIMOVERRIDE

Skróty: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, ponownie aż do Enter, potem `Select dimensions`. Zmienia te ustawienia tylko na zaznaczonych wymiarach; styl wymiaru nie jest zmieniany. Przyjmuje zmienne będące liczbą lub przełącznikiem (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` przywraca zaznaczone wymiary do ich stylu. Odrzuca nazwę, która nie jest taką zmienną, i wartość, której nie może przyjąć.

### DIMREASSOCIATE

Skróty: `DRE`, `DIMREASSOC`. `Select dimensions`, potem dla każdego jego początki linii pomocniczych (`Specify first extension line origin on an object`: przyciągnij do końca lub środka linii, wierzchołka polilinii, środka; Enter zostawia ten punkt wolny), albo dla promienia, średnicy, promienia łamanego lub wymiaru długości łuku `Select arc or circle`. Wymiar jest wtedy przypisany do tych obiektów: gdy się przesuną lub zmienią rozmiar, podąża za nimi w tym samym kroku cofnięcia i mierzy się ponownie. Ręczne przesunięcie przypisanego punktu albo usunięcie obiektu kończy przypisanie. Przypisanie jest zapisywane w DWG i DXF 2000 jako własne dane CadCraft; inne programy widzą zwykły wymiar.

### DIMDISASSOCIATE

Skróty: `DDA`, `DIMDISASSOC`. `Select dimensions`. Uwalnia je od obiektów, do których są przypisane; nic się nie przesuwa.

### CENTERMARK

Skróty: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, ponownie aż do Enter. Rysuje krzyż w środku i cztery linie osi sięgające nieco poza krzywą (typ linii CENTER), jako zwykłe linie na bieżącej warstwie; dobrane do rozmiaru strzałki i skali ogólnej bieżących ustawień wymiarowania, obrócone wraz z UCS. Nie podążają za okręgiem, jeśli ten się przesunie.

### CENTERLINE

Skróty: `CL`. `Select first line`, `Select second line`. Rysuje linię w połowie między dwiema liniami (wzdłuż dwusiecznej, gdy się stykają), nieco dłuższą niż one, w typie linii CENTER. Zwykła linia: nie podąża za dwiema liniami.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Brak skrótów. Każde pyta `Enter new value for … <current>` i ustawia ten rozmiar dla **nowych** wymiarów: skalę ogólną, wysokość tekstu, rozmiar strzałki, miejsca dziesiętne (do 8), odstęp wokół tekstu, wydłużenie poza linię wymiaru, odsunięcie od początku. Zobacz [Ustawianie rozmiarów wymiarów](topic:dimension-settings).

### DIMLUNIT

Ustawienie wymiaru: format długości wyłącznie nowych wymiarów (1 naukowy, 2 dziesiętny, 3 inżynierski, 4 architektoniczny, 5 ułamkowy).

### DIMSTYLE i -DIMSTYLE

Skróty: `DST`, `DDIM`, `D`. Menedżer stylów wymiarowania: {{ui:Ustaw bieżący}}, {{ui:Nowy…}}, {{ui:Zmień…}}, {{ui:Zmień nazwę…}}, {{ui:Usuń}}, {{ui:Porównaj…}}, {{ui:Zastosuj do zaznaczonych}}. `-DIMSTYLE` w wierszu poleceń: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Zobacz [Ustawianie rozmiarów wymiarów](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, potem wymiary (lub te już zaznaczone). New pyta o tekst (`<>` = pomiar); Rotate o kąt (0 przywraca tekst); Oblique o kąt linii pomocniczych względem osi X (Enter = brak; tylko wymiary liniowe i równoległe). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Zobacz [Ustawianie rozmiarów wymiarów](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Skróty: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, albo przy zaznaczonych wymiarach `Units in the text of the selected dimensions`. Zapisuje zmierzoną długość w tej jednostce z jednostką za nią (DIMLFAC i sufiks DIMPOST); `D` wraca do jednostek rysunku. Zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Skróty: `RC`. Wypisuje `Arc length: … Type: …`, potem `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pyta `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand podąża za wskaźnikiem do kliknięcia lub {{key:Enter}}; `O` pyta `Select object` i `Reverse direction? [Yes/No] <N>` i zamienia obiekt w chmurę. `A` pyta `Specify the length of each arc`. `R`, `P` i `F` wybierają typ następnej chmury. Wynikiem jest zamknięta polilinia z łuków.

### MLEADER

Skróty: `MLD`; albo {{ui:Odnośnik}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, potem tekst w polu na miejscu (lub, bez niego, `Enter text (an empty line ends)`). `Block` najpierw pyta o nazwę bloku, a wielokrotny odnośnik pokazuje ten blok zamiast tekstu. Więcej linii odnośnika: {{cmd:MLEADEREDIT}}. Zapisywany jako prawdziwy wielokrotny odnośnik w DWG; DXF zachowuje linie, grot i tekst, które rysuje.

### MLEADEREDIT

Skróty: `MLE`. `Select a multileader`, potem `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: każdy punkt dodaje linię odnośnika od nowego grotu do tego samego lądowania, aż do Enter. `Remove leaders` usuwa potem klikniętą linię odnośnika (wielokrotny odnośnik zachowuje co najmniej jedną). `Block content` pyta o nazwę bloku i pokazuje ten blok zamiast tekstu (pytane są jego atrybuty); `Text content` przywraca tekst. Każda linia odnośnika ma własny uchwyt. DWG zachowuje każdą linię odnośnika i blok w jednym wielokrotnym odnośniku.

### MLEADERALIGN

Skróty: `MLA`. `Select multileaders`, potem `Select multileader to align to [Distribute/Spacing/Use current spacing]` i `Specify direction`. Przesuwa lądowania innych wielokrotnych odnośników (i ich tekst lub blok) na linię przechodzącą przez lądowanie wskazanego w tym kierunku; groty zostają tam, gdzie wskazują. `Spacing` ustawia też równe odstępy między nimi; `Distribute` pyta o dwa punkty i rozkłada je równomiernie między nimi. Wymaga co najmniej dwóch wielokrotnych odnośników.

### MLEADERCOLLECT

Skróty: `MLC`. `Select multileaders`, potem `Specify collected multileader location [Vertical/Horizontal]` (Enter zostawia miejsce pierwszego). Tworzy jeden wielokrotny odnośnik z kilku: zawartość blokowa idzie do nowego bloku, który trzyma każdy blok obok siebie lub jeden pod drugim; zawartość tekstowa staje się jedną notatką z wierszem dla każdej. Pierwszy wielokrotny odnośnik zachowuje swoje linie odnośników; pozostałe są usuwane. Odrzuca mieszankę tekstu i zawartości blokowej.

### TABLE

Skróty: `TB`; albo {{ui:Adnotacje}} › {{ui:Więcej}} › {{ui:Tabela}}. Tworzy tabelę: jeden obiekt, który przesuwasz, kopiujesz, obracasz, skalujesz i drukujesz jak każdy inny, z komórkami zachowanymi jako dane.

- `Number of data rows or [Paste/File/Style] <3>`, potem `Number of columns <3>`, `Text height` i `Top left corner of the table`. Tabela dostaje wiersz tytułu (jedna scalona komórka) oraz wiersz nagłówka nad wierszami danych.
- `P`: tabela z komórek arkusza kalkulacyjnego w schowku (tekst z tabulatorem między komórkami). Naciśnięcie {{key:Ctrl+V}} z takimi komórkami w schowku robi to samo, chyba że własna kopia CadCraft jest nowsza (albo CadCraft nie potrafi tego rozróżnić: wtedy wkleja własną kopię i to mówi). `F`: tabela z pliku `.csv` lub rozdzielanego tabulatorami. Pierwszy wiersz staje się wierszem nagłówka; szerokości kolumn dopasowują się do tekstu.
- `S`: wybierz styl tabeli dla tej tabeli (zobacz {{cmd:TABLESTYLE}}).
- Odrzuca liczbę wierszy lub kolumn, która nie jest liczbą całkowitą, oraz więcej komórek, niż tabela może mieć (2000 wierszy, 200 kolumn, 40 000 komórek).
- {{cmd:EXPLODE}} zamienia tabelę w linie i tekst. Zapisana jako DWG tabela jest prawdziwym obiektem tabeli, który inne programy mogą edytować; zapisana jako DXF to blok, który ją rysuje, a CadCraft otwiera ją ponownie jako tabelę.

### TABLEDIT

Skróty: `TABLEEDIT`, `TABEDIT`; albo kliknij dwukrotnie komórkę. Edytuje tabelę.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kliknij komórkę albo, mając wybraną tabelę, wpisz jej nazwę (`B3`: kolumna B, wiersz 3; wiersz tytułu to wiersz 1). W przeglądarce nad komórką otwiera się pole: {{key:Enter}} zachowuje tekst, {{key:Tab}} przechodzi do następnej komórki, {{key:Alt+Enter}} zaczyna nowy wiersz, {{key:Esc}} zostawia komórkę bez zmian.
- Tekst zaczynający się od `=` to wzór: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, z `+ - * / ^`, nawiasami i funkcjami takimi jak `sqrt` i `round`. Komórka pokazuje wartość; wzór, który wskazuje własną komórkę, komórkę poza tabelą albo komórkę bez liczby, pokazuje `####`, a wiersz poleceń mówi dlaczego.
- `R` / `C`: `Insert` lub `Delete` wierszy albo kolumn przy wskazanej komórce (ile, i powyżej lub poniżej, z lewej lub z prawej). Wzory podążają za komórkami, które wskazują.
- `S`: szerokość kolumny i wysokość wiersza. Wiersz nigdy nie jest niższy niż jego tekst. Zaznaczona tabela ma też uchwyt na krawędzi każdej kolumny i każdego wiersza.
- `M`: scal od jednej wskazanej komórki do drugiej; `U`: rozłącz. `A`: wyrównanie (`TL` lewy górny … `MC` środek … `BR` prawy dolny). `H`: własna wysokość tekstu tej komórki (0 = z stylu). `K`: ustaw wiersz jako tytuł, nagłówek lub wiersz danych. `CL`: opróżnij komórkę.
- Odrzuca tabelę na zablokowanej warstwie, usunięcie każdego wiersza lub kolumny oraz scalenie, które przecięłoby inną scaloną komórkę.

### TABLESTYLE

Skróty: `TS`. Wypisuje style tabel wraz z liczbą tabel, które każdy używa, potem `Table style: [New/Set/Edit/Delete/Apply]`.

- Styl przechowuje wysokość tekstu i wyrównanie wierszy tytułu, nagłówka i danych, margines komórki oraz to, które obramowania są rysowane (zewnętrzne, między wierszami, między kolumnami).
- `N` tworzy styl z bieżącego i czyni go bieżącym; `S` ustawia bieżący styl (nowe tabele go przyjmują); `E` edytuje jeden: tabele, które go używają, są przerysowywane; `A` nadaje zaznaczonym tabelom bieżący styl; `D` usuwa jeden (nie Standard, nie bieżący; tabele, które go używały, zachowują swój wygląd).
- Style są zapisywane z rysunkiem (DWG i DXF).

### TABLEEXPORT

Zapisuje to, co pokazuje tabela, jako plik CSV (wzór jako jego wartość). `Select a table`, albo zaznacz ją najpierw. Komórki tekstowe zaczynające się od `=`, `+`, `-` lub `@` dostają wiodący `'`, aby arkusz kalkulacyjny ich nie uruchamiał.

### TABLEPASTE

Skróty: `PASTETABLE`. Tworzy tabelę z komórek arkusza kalkulacyjnego w schowku, potem pyta o jej lewy górny narożnik. To samo co {{cmd:TABLE}} › `Paste`.

### DATALINK

Skróty: `DL`. `Data link: [New/List/Remove] <New>`. `N` pyta o plik CSV, umieszcza jego tabelę i zapamiętuje nazwę pliku; `L` wypisuje łącza wraz z ich plikiem, rozmiarem, czasem odczytu i liczbą tabel, które go używają; `R` usuwa łącze (jego tabele pozostają zwykłymi tabelami).

### DATALINKUPDATE

Skróty: `DLU`. Ponownie odczytuje plik łącza danych i uzupełnia tabele z nim połączone (wiersze i kolumny są dodawane lub usuwane, by pasować). Przeglądarka nie potrafi sama otworzyć pliku, więc prosi, byś wybrał plik ponownie. Przy kilku łączach pyta, który.

### FIELD

Umieszcza pole w rysunku: tekst, który sam się oblicza. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: teraz, albo zapisana, utworzona lub wydrukowana data, i format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: nazwa pliku, z rozszerzeniem lub bez. `S`: numer arkusza, jego tytuł albo ile jest arkuszy. `P`: właściwość rysunku po nazwie (zobacz {{cmd:DWGPROPS}}). `O`: wskaż obiekt, potem co odczytać (pole, długość, obwód, promień, średnica, warstwa, nazwa, x, y, tekst, obrót, kolor) i miejsca dziesiętne. `E`: wzór. `C`: tekst z kodami wpisanymi tak jak są, np. `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Potem `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: wskazany tekst dostaje pole dopisane za swoją treścią; komórka tabeli tak samo; odwołanie do bloku z atrybutami pyta, który atrybut; {{key:Enter}} pyta o wysokość i punkt dla nowego tekstu.
- Na ekranie pole ma jasnoszare tło; wydruk i PDF go nigdy nie mają. Ręczne wpisanie nad tekstem pola kończy pole. Pole, którego nie da się obliczyć, pokazuje `####`.
- Pole obiektu odnajduje swój obiekt po kluczu, który CadCraft trzyma na obiektach (Ustawienia › CadCraft › Pliki przyjazne scalaniu); przy wyłączonych kluczach odrzuca.

### UPDATEFIELD

Skróty: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` ustala, kiedy pola aktualizują się same: wpisz litery `O` otwarcie, `S` zapis, `P` wydruk, `R` regeneracja (wszystkie cztery na start), albo `NONE`.

### DWGPROPS

Skróty: `DRAWINGPROPS`. Wypisuje właściwości rysunku, potem `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Pierwsze sześć to te, które pokazuje panel {{ui:Szczegóły rysunku}}; `U` dodaje własną nazwę i wartość, `R` usuwa jedną. Pola je odczytują (`%<prop:title>%`, `%<prop:Client>%`) i od razu podążają. Odrzuca własną nazwę, która jest jedną z wbudowanych albo zawiera `%`, `<`, `>`, cudzysłów lub ukośnik wsteczny.

## Parametryczne

Zobacz [Ograniczanie rysunku](topic:constraints) i [Używanie parametrów i równań](topic:parameters). Więzy działają na karcie {{ui:Model}}.

### GEOMCONSTRAINT i polecenia GC

Skróty `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, potem monity tego polecenia.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (drugi się przesuwa).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT i polecenia DC

Skróty `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (liczba, wyrażenie lub `name=expression`).
- {{cmd:DCALIGNED}}: jak wyżej, z `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pyta o tolerancje odległości i kąta.
- {{cmd:DELCONSTRAINT}} (skrót `DELCON`): `Select objects`; ich więzy znikają.
- {{cmd:CONSTRAINTBAR}} (skrót `CBAR`): `Select objects [Showall/Hideall]`, potem `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (skróty `PAR`, `PARAM`) otwiera panel {{ui:Parametry}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Skrót `SWMACRO`. Pobiera makro (.swb), które odbudowuje model jako jeden szkic z więzami w SolidWorks. Zobacz [Przenoszenie szkiców do innych modelerów części i z nich](topic:solidworks-sketches).

## Bloki

### ANNOSCALE

Skróty: `CANNOSCALE`. Podaje skalę adnotacji rysunku i liczbę obiektów adnotacyjnych, które zawiera, potem pyta `New annotation scale`: wpisz `1:50`, `1:100`, `2:1`, samą liczbę (`50` to 1:50) lub nazwę jednej z własnych skal rysunku. Każdy tekst i wymiar adnotacyjny zmienia rozmiar tak, aby drukował się w tym samym rozmiarze w nowej skali, w jednym kroku cofnięcia; obiekty nieadnotacyjne zostają bez zmian, tak samo obiekt, który ma listę skal bez nowej (zobacz {{cmd:OBJECTSCALE}}). Zobacz [Jednostki, arkusze i skale](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Skróty: `OBJSCALE`. `Select annotative objects`, potem `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Tekst lub wymiar adnotacyjny zachowuje listę skal adnotacji. `Add` i `Delete` pytają o skalę (`1:50`, `2:1`, samą liczbę lub nazwę jednej z własnych skal rysunku); `Current scale` dodaje skalę adnotacji rysunku; `List` wypisuje skale każdego obiektu. Okno widokowe, którego skala jest na liście obiektu, pokazuje obiekt w rozmiarze, który drukuje jego wysokość na papierze w tej skali, na ekranie i w wydrukach. Ostatniej skali nie da się usunąć. Obiekty nieadnotacyjne są pomijane: najpierw włącz Adnotacyjne we Właściwościach. Listy są zapisywane w DWG i DXF jako własne dane CadCraft. Zobacz [Jednostki, arkusze i skale](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Skróty: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Włączone (tak zaczyna się rysunek): obiekt adnotacyjny pokazuje się także w oknie widokowym lub w modelu, którego skala nie jest na jego liście, w rozmiarze, jaki ma. Wyłączone: nie jest tam pokazywany i nie można go wskazać w modelu. Przełącznik to jeden krok cofnięcia; nie jest zapisywany w pliku.

### SCALELISTEDIT

Skróty: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` aż do {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit i Delete pytają o nazwę skali. Własne skale rysunku dołączają do list skal okna widokowego i wydruku oraz są zapisywane z rysunkiem. Zobacz [Jednostki, arkusze i skale](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punkty, przez które przechodzi krzywa; `Close`, `Undo`, potem `Start tangent` i `End tangent` (punkt lub {{key:Enter}}). Method › Control vertices pyta o stopień (od 1 do 5) i rysuje z wielokąta kontrolnego. Object zamienia polilinie w spliny przez ich wierzchołki. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` dla kilku obiektów; linie, łuki i spliny są najpierw proponowane jako polilinie. Zobacz [Spliny i polilinie](topic:splines).

### BLOCK

Skróty: `B`, `BMAKE`.

- `Enter block name`. Jeśli istnieje: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Zostają zastąpione jednym odwołaniem do nowego bloku.

### WBLOCK

Skróty: `W`, `-WBLOCK`. Zapisuje blok, kilka obiektów lub cały rysunek jako nowy plik DWG lub DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (staje się początkiem nowego rysunku), `Select objects`, potem `File format [DWG/DXF/R12 DXF]` i `File name for the new drawing`, potem `What to do with the objects [Retain/Convert to block/Delete]`. Convert zastępuje je jednym odwołaniem do bloku o nazwie pliku; Delete je usuwa.
- **Block**: `Block to write out`. Własne obiekty bloku, z jego punktem bazowym jako początkiem, łącznie z zagnieżdżonymi blokami.
- **Entire drawing**: każdy obiekt w przestrzeni modelu. Arkusze nie są zapisywane; użyj {{cmd:SAVEAS}}, aby uzyskać kopię, która je zachowuje.

Nowy plik zawiera tylko warstwy, typy linii, style tekstu i wymiarów oraz bloki, których używają jego obiekty, a także jednostki rysunku. Wersja DWG to ta, której ostatnio użyło {{cmd:SAVEAS}}. W przeglądarce plik jest pobierany; w Studio otwiera się okno zapisu.

### ATTDEF

Skróty: `ATT`, `DDATTDEF`, `-ATTDEF`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Zdefiniuj atrybut}}. Wypisuje tryby, potem `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value`, gdy stały), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} zabiera definicje atrybutów do bloku.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, albo kliknij dwukrotnie odwołanie z atrybutami; {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj atrybuty}}): `Select a block reference with attributes`, potem okno dialogowe {{ui:Edytuj atrybuty}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): to samo odwołanie, potem `<prompt> (<TAG>) <value>` dla każdego atrybutu; {{key:Enter}} zachowuje wartość. Zobacz [Atrybuty](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Wartości zachowane; nowe atrybuty dostają wartość domyślną, usunięte znikają, położenia się resetują.

### BATTMAN

{{ui:Bloki}} › {{ui:Więcej}} › {{ui:Menedżer atrybutów}}. Okno dialogowe: blok, atrybuty (etykieta, monit, wartość domyślna, tryby, kolejność), {{ui:Zaktualizuj odwołania (wartości zachowane)}}, {{ui:Zastosuj}}.

### REFEDIT i REFCLOSE

{{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj w miejscu}}. `REFEDIT`: `Select the block reference to edit in place` (lub zaznaczenie). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; przyciski na pasku {{ui:Zapisz blok}} i {{ui:Odrzuć}} robią to samo. Cała edycja to jeden krok cofnięcia. Zobacz [Atrybuty](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT i BCLOSE

`BE`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj blok}}. `Enter block name to edit <the selected reference's block>` otwiera edytor bloków. `BCLOSE` pyta `Close the block editor on "…" [Save/Discard] <Save>`; przyciski na pasku {{ui:Zapisz blok}} i {{ui:Odrzuć zmiany}} robią to samo. Wszystko, co zrobisz w edytorze, to jeden krok cofnięcia.

### VIEWBASE

Skróty: `FLATSHOT`. Płaski widok 2D brył na karcie 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, skala (`1:20`, `2:1`; {{key:Enter}} wybiera tę, która pasuje do arkusza), potem środek widoku. Jedno odwołanie do bloku, widoczne krawędzie na VIEW-VISIBLE, ukryte przerywane na VIEW-HIDDEN. Zobacz [Płaskie widoki na arkuszu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Skróty: `-PUBLISH`; albo {{ui:Wszystkie arkusze w jednym PDF}} w oknie dialogowym {{ui:Drukuj do PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} drukuje każdy arkusz, `S` pyta o nazwy oddzielone przecinkami. Jeden PDF, strona i zakładka dla każdego arkusza. Zobacz [Wszystkie arkusze w jednym PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Skróty: `SSM`, `SHEETSETMANAGER`. Przenosi do sekcji {{ui:Zestaw arkuszy}} w lewym panelu: arkusze z wielu rysunków, ponumerowane i opisane tytułem, ich tabliczki rysunkowe wypełnione z zestawu, publikowane jako jeden PDF. Zobacz [Zestawy arkuszy](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): wybierz DWG lub DXF, potem jego punkt wstawienia. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; przy więcej niż jednym łączu wskaż jedno z jego odwołań albo wpisz `N` i jego nazwę. Zobacz [Dołączone rysunki](topic:files#linked-drawings-external-references).

### COUNT

Skróty: `BCOUNT`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Policz bloki}}. `Select a block reference to count, or [All/Export] (Enter: All)`: wskazanie zaznacza i liczy każde odwołanie do tego bloku w tej przestrzeni; {{key:Enter}} lub `A` wypisuje je wszystkie; `E`, potem `C` (liczby) lub `A` (atrybuty) pobiera CSV. Zobacz [Liczenie bloków i eksport zestawienia](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Skróty: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (wielkość liter nie ma znaczenia). `F` pyta o DWG lub DXF, potem o cały rysunek albo jeden z jego bloków; nazwa już użyta pyta o {{ui:Zachowaj istniejący}} lub {{ui:Zmień nazwę}}. `L` otwiera panel biblioteki.
- `Specify insertion point [Scale/Rotate]`. `S` pyta `Specify scale factor`, `R` pyta `Specify rotation angle`; oba są zapamiętywane.
- Gdy blok już stoi obok obiektów, które powtarzają się gdzie indziej bez niego, linia podaje, ile miejsc jest proponowanych, a monit zyskuje `suGgested`: `G` je pokazuje; kliknij blisko jednego, aby tam wstawić blok, `A` dla wszystkich, {{key:Enter}}, aby wrócić. Przyjmują obrót swoich sąsiadów i domyślne wartości atrybutów. Rysunki powyżej 20 000 obiektów w otwartej przestrzeni nie są przeszukiwane.
- Potem `Enter <prompt> (<TAG>) <default>` dla każdego atrybutu, o który pyta blok. Zobacz [Atrybuty bloków](topic:attributes).

### LIBRARY

Skróty: `LIB`. Otwiera panel biblioteki: umieszczanie elementów, sprawdzanie aktualizacji, podziękowania biblioteki. Bez pytań. Zobacz [Wstawianie z pliku lub biblioteki](topic:insert-from-file-and-library).

### STEELMEMBER

Skróty: `SMEMBER`; albo {{ui:Element 3D}} na karcie {{ui:Standardowy}} biblioteki. `Section size <W12x26>` (tak jak lista karty), potem `Start point [Column]` i `End point`: element bryłowy na karcie 3D między dwoma punktami, stojący na ziemi. `C` pyta o punkt bazowy słupa i jego wysokość. Jeden krok cofnięcia. Zobacz [Umieszczanie przekrojów stalowych i części standardowych](topic:steel-and-standard-parts).

### PARTSLIST

Skróty: `PLIST`. `Top left corner of the parts list`, potem `Text height <2.5>`: rysuje tabelę każdej standardowej części i przekroju stalowego umieszczonego z biblioteki (numery pozycji, ilość, część, norma, rozmiar, długość, materiał, masa). Jeden krok cofnięcia. Zobacz [Umieszczanie przekrojów stalowych i części standardowych](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Skróty: `PU`. Usuwa definicje bloków, których nic nie używa. Bez pytań.

### DELBLOCKS

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Usuń bloki}}. `Select block to delete [Name/eXit]`: wskaż odwołanie do bloku, albo `N` dla listy bloków z filtrem (wybierz kilka), albo `X` / {{key:Enter}}, aby zakończyć. Każde odwołanie znika — w modelu, na każdym arkuszu i wewnątrz innych bloków — a potem definicja; wiersz poleceń mówi, co usunięto, a czego nie dało się usunąć. Bloki bez nazwy i dołączone rysunki nie są proponowane. Monit wraca dla następnego bloku; całe polecenie to jeden krok cofnięcia.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} wkleja to, co skopiowano ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), jako jeden blok: wskaż punkt wstawienia, a tam trafia jedno odwołanie do nowego bloku, zaznaczone. Blok dostaje własną nazwę (`A$C` i numer); {{cmd:RENAME}} nadaje mu twoją. Jeden krok cofnięcia usuwa odwołanie i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pyta o blok do zastąpienia i blok, który go zastąpi (`?` wypisuje bloki), potem zmienia każde odwołanie w modelu, na każdym arkuszu i wewnątrz innych bloków. Każde odwołanie zachowuje swoje miejsce, skalę, obrót, warstwę i wartości atrybutów, które mają oba bloki; atrybuty tylko nowego bloku zaczynają z wartościami domyślnymi, a polecenie mówi, które wartości zostały odrzucone. Gdy nic już nie używa starego bloku, proponuje jego usunięcie. Odrzuca dołączone rysunki i zamiennik, który umieściłby blok w nim samym. Jeden krok cofnięcia.

### MINSERT

{{cmd:MINSERT}} umieszcza blok w wierszach i kolumnach: nazwa bloku, punkt wstawienia, skala, obrót, liczba wierszy i kolumn oraz odległości między nimi. Cały zestaw obraca się wraz z obrotem. Każdy jest osobnym odwołaniem (najwyżej 10 000), więc każdy można później przesunąć lub usunąć.

### BLOCKSPALETTE

Skróty: `BLOCKSPAL`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Blocks panel}}. Pokazuje panel {{ui:Bloki}} z kursorem w jego filtrze. Każdy blok ma mały obrazek; najpierw te, które wstawiono ostatnio. Dwa przyciski obok filtra przełączają między listą a siatką obrazków. Kliknij obrazek (albo {{ui:Wstaw}}), aby umieścić blok za pomocą {{cmd:INSERT}}, albo przeciągnij go na rysunek, aby umieścić go tam, gdzie upuścisz.

{{ui:Libraries}}, pod listą: {{ui:Add a drawing}} przyjmuje własny plik DWG lub DXF i wypisuje jego bloki z obrazkami oraz cały rysunek jako jeden blok. Umieszczenie jednego kopiuje jego definicję (oraz bloki, które zawiera, i ich warstwy) do tego rysunku, tak jak robi to opcja `File` polecenia {{cmd:INSERT}}; blok już obecny tutaj z tą samą definicją jest użyty bez pytania, a inny o tej samej nazwie, który się różni, pyta o {{ui:Zachowaj istniejący}} lub {{ui:Zmień nazwę}}. W przeglądarce plik pozostaje do zamknięcia strony. W CadCraft Studio {{ui:Add a folder}} wypisuje rysunki w folderze, każdy otwierany po kliknięciu, a pliki i foldery są zapamiętywane. Mały x usuwa bibliotekę z listy; plik nie jest ruszany. Wspólna {{ui:Biblioteka}} to coś innego: zobacz [Wstawianie z pliku lub biblioteki](topic:insert-from-file-and-library).

### BCONVERT

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Convert repeats to blocks}}. Znajduje geometrię, która się powtarza, i zamienia każdą kopię w odwołanie do jednego bloku.

- `Select the objects that repeat, or [Block]`: obiekty jednej kopii. `B` podaje zamiast tego istniejący blok, aby znaleźć luźne kopie jego obiektów.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` i `P` przełączają to, co liczy się jako kopia; {{key:Enter}} szuka. Ustawienia są zapamiętywane.
- `Name for the new block <Block1>`, potem `Specify the block's base point` ({{key:Enter}} bierze lewy dolny narożnik zaznaczenia).
- Podaje, ile innych zestawów obiektów ma tę samą geometrię, zaznacza wszystko, co by zastąpiło, i pyta `Yes/No`.

Kopia to te same obiekty przesunięte i obrócone o dowolny kąt (oraz odbite lustrzanie lub przeskalowane jednym współczynnikiem, gdy te opcje są włączone): każdy obiekt musi mieć swój odpowiednik, z dokładnością do milionowej rozmiaru zaznaczenia. Każde odwołanie dostaje własny obrót i skalę (odbite lustrzanie ma ujemną skalę Y), a warstwę, którą dzieliły obiekty. Obiekty na zablokowanych warstwach zostają bez zmian i są liczone. Przeszukuje otwartą przestrzeń (model lub otwarty arkusz). Bardzo duże wyszukiwanie zatrzymuje się na limicie pracy i to mówi. Jeden krok cofnięcia.

### BSEARCH

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: fragment nazwy bloku lub wzorzec z `*` i `?`. Wypisuje każdy blok z jego odwołaniami tutaj i w całym rysunku.
- `A`: wartość atrybutu albo `TAG=value`. Wypisuje bloki, których odwołania ją mają, wraz ze znalezionymi wartościami. Atrybuty stałe się liczą.
- `G`: zaznacz obiekty albo jedno odwołanie do bloku, a bloki o kształcie podobnym w co najmniej 85% zostaną wypisane, od najlepszego. Rozmiar, obrót i odbicie się nie liczą. Miara porównuje odległości między punktami rozłożonymi wzdłuż konturów, więc znajduje sobowtóry; do znalezienia dokładnych kopii użyj {{cmd:BCONVERT}}.

Odwołania znalezione w otwartej przestrzeni są zaznaczane, gotowe do następnego polecenia.

### BREPLACE

Albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` zastępuje wskazane odwołania do bloków blokiem, który podasz; `A` pyta o blok i jego zamiennik i zmienia każde odwołanie, tak jak robi to {{cmd:BLOCKREPLACE}} (ten sam kod). Odwołanie zachowuje swoje miejsce, skalę, obrót, warstwę i wartości atrybutów, które mają oba bloki; wartości, dla których nowy blok nie ma miejsca, są odrzucane i wymieniane. `?` wypisuje bloki. Jeden krok cofnięcia.

### DATAEXTRACTION

Skróty: `EATTEXT`, `DX`; albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Data extraction}}. Wypisuje bloki, ich atrybuty i właściwości obiektów jako tabelę lub plik CSV.

- Działa na zaznaczeniu albo pyta `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]`, gdy zaznaczenie zawiera oba. Bloki bez nazwy, tabele i zestawienia materiałów nigdy nie są wypisywane.
- Wypisuje kolumny do wyboru (nazwa, typ, warstwa, X, Y, obrót, skala, długość, pole, kolor, typ linii, przestrzeń i jedną na każdą etykietę atrybutu), potem `Columns, by name or number with commas between`. {{key:Enter}} bierze oznaczone gwiazdką: nazwę i każdy atrybut dla bloków; typ, warstwę i długość dla obiektów.
- `Put identical rows together with a count? [Yes/No] <Yes>`, potem `Put the list in a: [Table/Csv] <Table>`. Tabela jest zwykłą tabelą ({{cmd:TABLEDIT}} ją edytuje) i nie jest aktywna: po zmianie rysunku uruchom polecenie ponownie.
- Odrzuca kolumnę, której nie ma na liście. Tabela mieści 1999 wierszy danych; plik CSV przyjmuje je wszystkie.

### COUNTTABLE

Liczy odwołania do bloków w zaznaczeniu (albo w otwartej przestrzeni) i umieszcza liczby w tabeli (`Block`, `Count`) lub w pliku CSV. Dla liczby, która podąża za rysunkiem sama, zobacz {{cmd:BOMTABLE}}.

## Arkusze i drukowanie

### LAYOUT

Skróty: `LO`, `NEWLAYOUT`; albo przycisk {{ui:+}} pod rysunkiem. Nowy arkusz z ramką, tabliczką rysunkową i jednym oknem widokowym, w formacie ISO A3 (albo Tabloid dla rysunków w calach lub stopach). Bez pytań.

### MVIEW

Skróty: `MV`. Tylko na arkuszu ({{cmd:VPORTS}} na arkuszu robi to samo).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Okno widokowe pokazuje cały model w standardowej skali.
- `P` (Polygonal): kliknij narożniki konturu (`Undo`, `Close`), {{key:Enter}}, gdy skończysz. Odrzuca mniej niż trzy narożniki.
- `O` (Object): `Select a closed object for the viewport's outline`: zamknięta polilinia, okrąg lub elipsa na arkuszu. Okno widokowe przejmuje jej kształt (łuki jako krótkie proste odcinki); obiekt pozostaje taki, jaki był. Odrzuca obiekt, który nie jest zamknięty.

### VPCLIP

Przycina okno widokowe, które już jest na arkuszu. `Select viewport to clip` (lub zaznacz je najpierw), potem `Select the object to clip to [Polygonal/Delete]`:

- Kliknij zamkniętą polilinię, okrąg lub elipsę albo {{key:Enter}} (lub `P`), aby kliknąć narożniki wielokąta.
- `D` (Delete, oferowane, gdy okno jest przycięte) przywraca prostokąt: pudełko wokół dawnego konturu.
- To, co pokazuje okno widokowe, nie przesuwa się na papierze, a jego skala pozostaje. Model jest rysowany i drukowany tylko wewnątrz konturu, a ramka za nim podąża. Jeden krok cofnięcia.
- Przycięte okno widokowe ma uchwyt na każdym narożniku konturu, oprócz swojego środka i czterech narożników pudełka (przeciągnięcie narożnika pudełka rozciąga kontur razem z nim). Właściwości pokazują Outline: Rectangle albo Clipped z liczbą narożników.
- Pliki DWG i DXF 2000 zachowują kontur dla CadCraft. Inne programy otwierają okno widokowe jako prostokąt wokół niego; DXF R12 zachowuje tylko prostokąt.
- Na karcie modelu komunikuje, że okna widokowe są na arkuszach.

### VPORTS

Skróty: `VIEWPORTS`. {{cmd:SPLIT}} działa tak samo z arkusza, a {{ui:Widok}} › {{ui:Więcej}} › {{ui:Podziel obok siebie}}, {{ui:Podziel jedno nad drugim}}, {{ui:Cztery okienka}}, {{ui:Jedno okienko}} go uruchamiają. Na modelu: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pyta `[Horizontal/Vertical] <Vertical>` (Vertical = obok siebie), `3` pyta `[Left/Right] <Right>` (gdzie idzie duże okienko). Każde okienko zachowuje swój widok i przestrzeń; kliknięcie czyni okienko aktywnym. Na arkuszu to {{cmd:MVIEW}}. Zobacz [Podział ekranu](topic:split-screen).

### VPVIEW

Brak skrótów. Tylko na arkuszu.

- `Select viewport` (pomijane, gdy jedno jest zaznaczone), potem na modelu: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Brak skrótów. Własny układ współrzędnych; nie jest edycją. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: punkt to nowy początek, potem `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: początek, punkt na dodatniej osi X, punkt po dodatniej stronie Y. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` i nazwa. Widok się obraca, tak aby nowa oś X była pozioma. Zobacz [Obracanie widoku i używanie własnych współrzędnych](topic:ucs-and-turned-view).

### PLAN

Brak skrótów. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: obraca widok aktywnego okienka tak, aby oś X UCS (albo świata) była pozioma. Nic w rysunku się nie przesuwa.

### TURNLEFT, TURNRIGHT, TURNWORLD

Brak skrótów; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Obróć widok o 90° w lewo}}, {{ui:Obróć widok o 90° w prawo}}, {{ui:Powrót do świata}}. To samo co `UCS Z -90`, `UCS Z 90` i `UCS W`, z podążającym widokiem.

### VPLAYER

Brak skrótów. Na arkuszu lub wewnątrz okna widokowego. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pytają o nazwy warstw (przecinki, symbole wieloznaczne `*` i `?`), potem `[All/Select/Current] <Current>` okna widokowe; Reset przywraca każdą warstwę do jej domyślnej wartości „zamrożona w nowych oknach widokowych”; `V` ustawia tę wartość domyślną (`[Frozen/Thawed]`), z której korzysta {{cmd:MVIEW}}. `?` wypisuje warstwy zamrożone w bieżącym oknie widokowym. Kolumna okien widokowych w panelu Warstwy robi to samo dla jednego okna. Zobacz [Zamrażanie warstwy w jednym oknie widokowym](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Skróty: `MS`; albo podwójne kliknięcie wewnątrz okna widokowego. Tylko na arkuszu. Praca na modelu przez okno widokowe: zaznaczone, jedyne na arkuszu albo `Click inside the viewport to work in`. Przesuwanie i powiększanie wewnątrz zmienia widok okna widokowego (zablokowane wyświetlanie zachowuje go, a przesuwa się arkusz); nowy widok jest zapisywany jako jeden krok cofnięcia. Zobacz [Praca na modelu przez okno widokowe](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Skróty: `PS`; albo podwójne kliknięcie poza oknem widokowym, albo kliknięcie karty pod rysunkiem. Powrót na arkusz.

### PLOT

Skróty: `PRINT`, `PUBLISH`, `EXPORTPDF`; albo {{key:Mod+P}}. Otwiera okno dialogowe {{ui:Drukuj do PDF}}. Zobacz [Wydruk do PDF](topic:plot-pdf).

### PLOTSTYLES

Skróty: `STYLESMANAGER`, `PSTABLES`; albo {{ui:Edytuj tabele…}} w oknie dialogowym {{ui:Drukuj do PDF}}. Otwiera {{ui:Tabele stylów wydruku}}: jak każdy kolor się drukuje (kolor, szarość, atrament, grubość linii), zachowywane z rysunkiem. Zobacz [Tabele stylów wydruku](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} przenosi obiekty między arkuszem a modelem przez okno widokowe, skalowane i obracane, tak aby wyglądały tak samo z drugiej strony. Na arkuszu zaznacz obiekty, a trafią do modelu (wskaż okno widokowe, gdy arkusz ma ich więcej). Podczas pracy na modelu przez okno widokowe ({{cmd:MSPACE}}) zaznaczone obiekty trafiają na arkusz. Polecenie podaje, ile razy większe lub mniejsze się stały. Okna widokowe zostają na swoim arkuszu. Jeden krok cofnięcia.

### ISODRAFT

{{cmd:ISODRAFT}} włącza lub wyłącza rysowanie izometryczne (`ON` lub `OFF`) albo przechodzi od razu na płaszczyznę `Left`, `Top` lub `Right`. Gdy jest włączone: Orto ({{key:F8}}) utrzymuje linie wzdłuż dwóch osi płaszczyzny (lewa: 90° i 150°; górna: 30° i 150°; prawa: 30° i 90°), śledzenie biegunowe ({{key:F10}}) podąża za tymi samymi osiami, przyciąganie do siatki ({{key:F9}}) używa siatki izometrycznej, a siatka ({{key:F7}}) jest rysowana liniami pod 30°, 90° i 150°. {{cmd:ELLIPSE}} zyskuje `Isocircle`: podaj środek i promień (lub `Diameter`), a narysuje elipsę, jaką okrąg pokazuje na bieżącej płaszczyźnie. Rysunek pozostaje płaski: to pomoce do rysowania widoku perspektywicznego, a nie model 3D. Ustawienie dotyczy tej sesji i nie jest zapisywane w pliku.

### ISOPLANE

{{cmd:ISOPLANE}} wybiera płaszczyznę, na której działa rysowanie izometryczne: `Left`, `Top` lub `Right`. Enter przechodzi do następnej płaszczyzny. Gdy rysowanie izometryczne jest włączone, {{key:F5}} robi to samo w środku polecenia; gdy jest wyłączone, {{key:F5}} zostaje przekazany przeglądarce.

## Zapytania

### CAL

Wypisuje wartość obliczenia, tak jak byłaby odczytana wszędzie tam, gdzie wpisuje się długość.

- `Expression`: wpisz, na przykład `12'6"+3/4"` lub `(24'-0")/3`, i naciśnij {{key:Enter}}. CadCraft wypisze `= 12'-6 3/4"   (150.75 drawing units)`. Zobacz [Arytmetyka we wpisywanej wartości](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Skróty: `DI`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Zmierz odległość}}.

- `Specify first point`, `Specify second point`. Wypisuje odległość, kąt, Delta X i Delta Y.

### AREA

Skróty: `AA`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Pole}}. Wypisuje pole i obwód.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kliknij lub wpisz narożniki; przy `Specify next point (Enter closes) [Undo]` naciśnij {{key:Enter}}, aby zamknąć kontur. `U` cofa ostatni narożnik.
  - {{key:Enter}} lub `O`, potem `Select object`: okrąg (wypisuje obwód), elipsa, polilinia (otwarta jest zamykana prostą linią dla pola, a jej długość jest wypisywana) albo kreskowanie (otwory są odejmowane).
  - `A` (Add area) i `S` (Subtract area) utrzymują sumę narastającą: podpowiedź zaczyna się od `(ADD mode)` albo `(SUBTRACT mode)`, każde pole jest dodawane lub odejmowane, a `Total area = …` jest wypisywane po każdym. W tych trybach `O` wybiera obiekty aż do {{key:Enter}}, a {{key:Enter}} przy pierwszym monicie kończy polecenie.

### MEASUREGEOM

Skróty: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; po każdym pomiarze pyta ponownie, z domyślnym `eXit`.

`Quick` mierzy wokół wskaźnika, gdy go przesuwasz: odległość do najbliższego obiektu po prawej, nad, po lewej i pod (wzdłuż osi bieżącego UCS), rysowana w miarę ruchu, oraz kąt, gdy dwóch z tych sąsiadów jest prostych i się stykają. Kliknięcie zapisuje w historii cztery odległości, wolną szerokość i wysokość oraz kąty; Enter wraca do opcji. Czyta to, co widać na ekranie.

- `D`: dwa punkty, jak {{cmd:DIST}}.
- `R`: `Select arc or circle`; wypisuje promień i średnicę.
- `A`: łuk (jego objęty kąt), linia, a potem druga linia (kąt między nimi, w stronę ich dalszych końców), albo {{key:Enter}} i trzy punkty (wierzchołek, potem dwa końce).
- `AR`: jak {{cmd:AREA}}, jedno pole.

### ID

Brak skrótów. `Specify point`; wypisuje jego X i Y.

### LIST

Skróty: `LI`, `LS`. `Select objects`; wypisuje typ każdego obiektu, jego warstwę i główne wymiary.

### MASSPROP

{{cmd:MASSPROP}} podaje właściwości przekroju regionów i zamkniętych obiektów, które wybierzesz, łącznie: pole, obwód, ramkę ograniczającą, środek ciężkości, momenty bezwładności względem osi X i Y przechodzących przez początek, iloczyn bezwładności, promienie bezwładności, te same momenty względem środka ciężkości oraz momenty główne z kierunkami ich osi. Otwory w regionie liczą się jako otwory. Wielkości są w jednostkach rysunku i są dokładne dla konturów z linii i łuków; elipsy i spliny są mierzone jako krótkie proste odcinki, a polecenie to mówi. Po raporcie pyta, czy zapisać go do pliku tekstowego. Obiekty nie będące zamknięte są pomijane, a polecenie podaje, ile ich było.

## Widok, plik i inne

### ZOOM

Skróty: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Kliknij dwa narożniki, aby uzyskać okno. `E`, `A` lub Enter: cały rysunek.
- `P` (Previous, albo {{ui:Previous}} na pasku narzędzi) wraca do widoku sprzed, do 10 widoków na kartę; seria kroków kółka lub jedno przesunięcie liczy się jako jeden widok.
- Liczba, np. `2`, `2x` lub `0.5x` (albo `S` i potem liczba), powiększa lub pomniejsza o ten współczynnik wokół środka ekranu.
- `C` pyta `Specify center point` i `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT i polecenia PDF

Skróty: `PDFATT` dla {{cmd:PDFATTACH}}, `PDFIM` dla {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} umieszcza stronę PDF pod rysunkiem (plik, strona, punkt wstawienia, skala, obrót); {{cmd:PDFIMPORT}} zamienia linie, krzywe, wypełnienia i tekst strony w obiekty rysunku na warstwach nazwanych od PDF, w rzeczywistym rozmiarze, w wpisanej skali albo skalowane z dwóch punktów i rzeczywistej odległości. {{cmd:PDFCLIP}} przycina podkład, {{cmd:PDFADJUST}} ustawia wyblaknięcie, kontrast, monochromatyczność lub wyłącza go, {{cmd:PDFLAYERS}} przełącza własne warstwy PDF, a {{cmd:PDF}} ponownie podaje CadCraft pliki, których używają podkłady rysunku. Zobacz [Podkłady PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Skróty: `AUTOC`. Autouzupełnianie rysunku: gdy żadne polecenie nie działa, szary duch pokazuje, co wzorce samego rysunku mówią, że przyjdzie dalej. {{cmd:AUTOCOMPLETE}} włącza go (`On`) lub wyłącza (`Off`) (także Ustawienia › CadCraft) albo `Show` pokazuje, co by teraz zaproponował. **Tab** rysuje ducha jako jeden krok cofnięcia, **Esc** odrzuca go, dopóki rysunek się nie zmieni. Znajduje trzy rzeczy w najnowszych obiektach: następną kopię czegoś narysowanego dwa razy lub więcej w równym kroku (słupki, kolumny, podstopnica i stopnica schodów), kolejne kroki schodów z polilinii oraz brakującą stronę pokoju lub łańcucha ścian. W środku {{cmd:LINE}} lub {{cmd:PLINE}} duch to **następny punkt**: następny krok schodów (podstopnica, stopnica, podstopnica…), czwarty narożnik prostokąta, punkt, który go zamyka, albo jeszcze jeden równy krok. Przysuń kursor blisko niego i naciśnij **Tab**, jakbyś tam kliknął; kontynuuj albo naciśnij Enter. Wyliczane na tym komputerze według reguł, bez modelu.

### AUTOSHEET

Skróty: `ASH`. Arkusze układające się same. {{cmd:AUTOSHEET}} bierze elementy rysunku (twoje nazwane widoki, osobne części modelu albo cały model), wybiera rozmiar papieru (albo podany), nadaje każdemu elementowi standardową skalę (jedną dla wszystkich albo największą, jaką każdy zniesie) i układa widoki w wierszach na nowych arkuszach, z tabliczką rysunkową i podpisem (nazwa i skala) pod każdym. To, czego nie da się zmieścić na jednym arkuszu, dostaje własny arkusz. Jeden krok cofnięcia. Wyliczane na tym komputerze według reguł, bez modelu.

### PHOTOSKETCH

Skróty: `PSK`. Szkic ze zdjęcia do rysunku. Wybierz zdjęcie (JPEG, PNG lub TIFF) odręcznego szkicu na kartce papieru. {{cmd:PHOTOSKETCH}} znajduje cztery narożniki arkusza, prostuje perspektywę, przyjmuje rozmiar papieru, który podasz (`Paper`, albo najbliższy standardowy) i `Scale` szkicu (1 : n), a potem odrysowuje linie pisaka na linie, łuki i okręgi, z warstwą dla każdego koloru pisaka (czarny, czerwony, niebieski, zielony). Jeśli nie znajdzie krawędzi papieru, bierze całe zdjęcie jako arkusz i to mówi. Napisy są pomijane. Jeden krok cofnięcia. Wykonywane na tym komputerze klasycznym przetwarzaniem obrazu, bez modelu, bez wysyłania czegokolwiek. Zobacz też polecenia skanowanych rysunków.

### AUTODIM

Skróty: `ADIM`. Automatyczne wymiarowanie według reguł. {{cmd:AUTODIM}} wymiaruje zaznaczone obiekty (lub cały rysunek) według ich poziomów i pionowych krawędzi: łańcuch wymiarów wzdłuż wybranych boków (`Sides`), jeden wymiar gabarytowy na zewnątrz, szerokość każdego otworu (odstęp między liniami ścian leżącymi na jednej prostej), średnicę dla każdego rozmiaru otworu, a z `Grid` odstęp między liniami siatki. Wymiar, który już istnieje, nie jest tworzony ponownie. Jeden krok cofnięcia. Wyliczane na tym komputerze według reguł, bez modelu.

### GRIDMOVE

Skróty: `GM`. Przesunięcie linii siatki niesie cały zestaw. {{cmd:GRIDMOVE}} przesuwa linię siatki (linię na warstwie, której nazwa mówi grid lub axis) i to, co na niej wisi: ściany z końcem na tej linii rozciągają się, by za nią podążyć, ściany leżące wzdłuż niej przesuwają się w całości, kolumny (odwołania do bloków i okręgi na linii), jej bąbel i etykieta się przesuwają, a wymiary, których punkty leżą na niej, mierzą nowy odstęp. Podaj dwa punkty (liczy się tylko część w poprzek linii) albo `Distance`. Jeden krok cofnięcia cofa wszystko. Wykonywane według reguł na tym komputerze.

### DETAILS

Skróty: `DET`. Detale, które same cię znajdują. {{cmd:DETAILS}} przechowuje własne detale firmy: `Add` umieszcza na liście blok z tego rysunku, `List` i `Remove` nimi zarządzają, a `Find` ustawia je w kolejności dla zaznaczenia (albo tego, co narysowałeś ostatnio) według słów z warstw, nazw bloków, wzorów kreskowania i notatek, porównywanych z nazwą i notatkami każdego detalu, tak że nadproże okna znajdzie twoją obróbkę parapetu. Wskaż numer i punkt, aby go umieścić. Przy włączonym `Hint` (także Ustawienia › CadCraft) zaznaczenie czegoś, do czego pasuje detal, wypisuje jedną linię w pasku stanu. Lista jest przechowywana w tej przeglądarce, na tym komputerze, i to ona jest przeszukiwana. `Share` zapisuje ją także w twoim folderze Dokumenty (`.cadcraft/firm-details.json`, z rysunkiem każdego bloku): `Pull` dodaje to, co ma twój zespół, a ty nie masz, `Push` dodaje to, co masz ty, a czego oni nie mają, `Both` robi obie rzeczy, i nic nie jest nigdy usuwane z żadnej strony. Najpierw otwórz folder Dokumenty ({{cmd:DOCUMENTS}}); gdy ten folder jest folderem Team Cloud Plan, cały zespół dzieli jedną listę. Element detalu w panelu Biblioteka ma przycisk **Dodaj do szczegółów mojej firmy**, który umieszcza go na tej samej liście. Wykonywane na tym komputerze słowami, bez modelu.

### SKETCHFIX

Skróty: `SKF`. Szkice piórem stają się precyzyjną geometrią. Naciśnij i przeciągnij jedno odręczne pociągnięcie naraz (pióro, mysz lub palec), a potem Enter. Każde pociągnięcie jest odczytywane jako linia, okrąg, łuk, prostokąt lub polilinia: prawie poziome i pionowe linie stają się dokładnie poziome i pionowe, zamknięte okrągłe pociągnięcie staje się okręgiem, zamknięte pociągnięcie z czterema narożnikami prostymi staje się prostokątem, a końce pociągnięć są ściągane do siebie i na końce już obecne w rysunku. Jeden krok cofnięcia. Wykonywane według reguł na tym komputerze, bez modelu.

### SCANATTACH i polecenia skanowanych rysunków

Skróty: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nie ma skrótu. Działają na obrazie, każde jako jeden krok cofnięcia. {{cmd:SCANATTACH}} wstawia PNG, JPEG, TIFF (jedna strona lub wszystkie) albo stronę PDF będącą obrazem. {{cmd:SCANSCALE}} skaluje arkusz z dwóch wskazanych punktów i rzeczywistej odległości. {{cmd:SCANALIGN}} przesuwa go i obraca na dwa punkty (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} pokazuje kąt długich linii arkusza i obraca arkusz, gdy wpiszesz `Accept` albo podasz `Value`. {{cmd:SCANCLEAN}} zamienia go na czarno-biały (`Threshold` Auto/Adaptive/Level, `Specks`) i `Run`. {{cmd:SCANCROP}} zachowuje okno. {{cmd:SCANERASE}} usuwa `Rectangle`, `Polygon` lub `Lasso`. {{cmd:SCANTRACE}} obrysowuje linie i łuki na nowej warstwie (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) i podaje, co znalazł, a co pozostawił jako raster. {{cmd:SCANINFO}} wypisuje oryginalny plik i kroki. {{cmd:RASTERSNAP}} włącza lub wyłącza przyciąganie do linii skanowanych arkuszy (On lub Off). Zobacz temat Skanowane rysunki i obrysowywanie.

### REGEN i REGENALL

Skróty: `RE` dla {{cmd:REGEN}}, `REA` dla {{cmd:REGENALL}}. Odbudowuje to, co jest narysowane na ekranie, z rysunku: {{cmd:REGEN}} dla karty, na której jesteś (na arkuszu także model, który pokazują jego okna widokowe), {{cmd:REGENALL}} dla każdej karty, każdego okienka podzielonego ekranu i każdego otwartego rysunku. Użyj ich, gdy obraz wygląda na nieaktualny po zmianie wykonanej skryptem lub bardzo dużej, albo gdy asystent edytował rysunek; sam rysunek nie jest ruszany, więc nie ma czego cofać.

### NAMEDVIEW

Skróty: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, potem nazwa widoku. `S` zapisuje widok na ekranie, `W` okno, które wskażesz, `R` pokazuje zapisany widok, `D` usuwa jeden, `?` wypisuje widoki tej karty. Zapis pod istniejącą nazwą ją zastępuje; każda zmiana to jeden krok cofnięcia. Widoki należą do karty, na której zostały zapisane. Pliki DWG i DXF je zachowują (tabela VIEW); widoki arkusza wracają na pierwszy arkusz, bo plik nie mówi, który to.

### UNDO i REDO

Skróty: `U` dla {{cmd:UNDO}}; {{cmd:REDO}} nie ma skrótu. Także {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Skróty: `LA`. Przechodzi do panelu {{ui:Warstwy}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` albo nazwa (`?` wypisuje je: Continuous, własne typy rysunku oraz DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE z ich rozmiarami `2` (połowa) i `X2` (podwójny)). {{cmd:LWEIGHT}} (`LW`): grubość linii dla nowych obiektów w mm, albo `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): skala typów linii rysunku (z cofaniem). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — tak samo jak przycisk {{ui:LWT}} na pasku stanu. Zobacz [Grubości linii i typy linii](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, potem nowa nazwa; obiekty lub odwołania podążają za zmianą. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` aż do {{key:Enter}}, potem `Select object on target layer or [Name]` i `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, potem `Y`: warstwa i każdy obiekt na niej znikają (nie warstwa 0, DEFPOINTS ani bieżąca warstwa). Jeden krok cofnięcia każde. Zobacz [Porządkowanie rysunku warstwami](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Warstwy przez wskazywanie obiektów; także w menu {{ui:Narzędzia}} panelu {{ui:Warstwy}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, potem {{key:Enter}}: każda inna warstwa zostaje wyłączona. {{cmd:LAYUNISO}} włącza je z powrotem. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (lub zamrożona), raz po raz; `U` cofa ostatnią, {{key:Enter}} kończy. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} włącza każdą warstwę, {{cmd:LAYTHW}} odmraża każdą warstwę. Każde polecenie to jeden krok cofnięcia. Zobacz [Porządkowanie rysunku warstwami](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} zaczyna pusty rysunek, a {{cmd:OPEN}} otwiera DWG lub DXF; każdy w osobnej karcie nad rysunkiem (nieużywany nowy rysunek zostaje zamiast otwierania nowej karty). Zamknięcie karty z niezapisanymi zmianami najpierw pyta. Zobacz [Podział ekranu](topic:split-screen).

{{cmd:SAVE}} (skrót `QSAVE`, także {{key:Mod+S}}) pobiera kopię w formacie rysunku: DWG, jeśli został otwarty z DWG, DXF, jeśli z DXF. Nowy rysunek używa formatu ostatnio wybranego w Zapisz jako w tej przeglądarce, a w razie braku DWG.

{{cmd:SAVEAS}} (także {{key:Mod+Shift+S}}) otwiera okno dialogowe {{ui:Zapisz kopię jako}}: wybierz {{ui:DWG}} (i jego {{ui:Wersja}}), {{ui:DXF R12}} lub {{ui:DXF 2000}}, potem {{ui:Zapisz}}. Wybór zostaje dla tego rysunku i dla nowych rysunków w tej przeglądarce.

{{cmd:DXFOUT}} zawsze pobiera kopię DXF R12, nie zmieniając formatu, którego używa {{cmd:SAVE}}.

Zobacz [Pliki: co się otwiera, co się zapisuje](topic:files#saving).

### TOUR

Skróty: `TUTORIAL`. Uruchamia ponownie sześciokrokowy przewodnik po pierwszym rysunku. Zobacz [Pierwsze kroki](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Skróty: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Zobacz [Ustawienia](topic:settings#toolbar-position).

### COMMANDLINE

Skróty: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: dokuje lub odrywa wiersz poleceń, zmienia go na jedną linię, pyta, ile linii historii pokazać (od 0 do 12), albo otwiera historię. Zobacz [Ustawienia](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: paski nad rysunkiem takie, jakie były, albo kompaktowe. Zobacz [Ustawienia](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: krok, do którego ustawiają się linie śledzenia {{ui:Biegunowe}} (więcej niż 0, do 180). Zachowywane w tej przeglądarce.

### UNITS

Skróty: `UN`. Jak zapisuje się i wpisuje długości.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architektoniczny i ułamkowy: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 lub 256)`. Pozostałe: `Enter number of decimal places (0 to 8)`.

Nowe wymiary się do tego stosują. Jeden krok cofnięcia. Tak samo jak {{ui:Format długości}} i {{ui:Dokładność}} w {{ui:Bieżące ustawienia}}; zobacz [Stopy i cale](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Skróty: `GDS`. Wyświetla układ scalony (plik strumienia GDSII): test laboratoryjny, tylko do oglądania i mierzenia.

- Okno wyboru pliku przyjmuje plik `.gds`; przy kilku komórkach głównych: `Enter the top cell to draw`.
- Każda warstwa i typ danych staje się warstwą rysunku (`GDS 1`, `GDS 2/5`), odwołania i macierze są umieszczane płasko, w jednostce użytkownika pliku (zwykle mikrometry). Jeden krok cofnięcia. Nic nie jest symulowane ani sprawdzane, a plik nie jest zapisywany z powrotem.

### DIAGRAM

Skróty: `TEXTDIAGRAM`, `T2D`. Diagram z tekstu.

- Pole przyjmuje tekst (albo jedną linię z `;` między instrukcjami w wierszu poleceń): schemat blokowy Mermaid, diagram komponentów PlantUML, D2 albo listę od-do.
- `Specify the top left corner of the diagram`, potem `Specify the text height`.

Bloki i łączniki są zwykłymi obiektami na warstwie `Diagram`, zaznaczonymi po zakończeniu. Jeden krok cofnięcia. Zobacz [Rysowanie diagramu z tekstu](topic:text-to-diagram).

### OLELIST

Skróty: `OLES`. Obiekty OLE, które niesie DWG, a których CadCraft nie potrafi umieścić sam.

- Wypisuje każdy: numer, typ, rozmiar, czy zachował obraz.
- `Enter an option [Place/eXit] <eXit>`: Place pyta o numer, lewy dolny narożnik i szerokość, i rysuje ramkę z obrazem. Jeden krok cofnięcia; zachowany obiekt nie jest zmieniany. Zobacz [Obrazy](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Skróty: `SHX`. Twoje własne czcionki SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} wczytuje każdy `.shx` z folderu (CadCraft Studio; ponownie przy każdym uruchomieniu), {{ui:Files}} bierze wskazane pliki (przeglądarka), {{ui:Reverse}} układa litery jednej czcionki od ostatniej do pierwszej. Style tekstu, które nazywają wczytaną czcionkę, rysują nią. Zobacz [Rysowanie tekstu własnymi czcionkami SHX](topic:shx-fonts).

### LIMITS

Jak duży ma być rysunek.

- `Specify lower left corner or [ON/OFF] <current>`: punkt, `ON` lub `OFF`.
- `Specify upper right corner <current>`.

Siatka wypełnia granice, {{cmd:ZOOM}} All je pokazuje, a przy włączonych ON punkt poza nimi jest odrzucany (`**Outside limits`). Jeden krok cofnięcia; zapisywane w DWG i DXF. Zobacz [Ustawianie granic rysunku](topic:drawing-limits).

### AUNITS

Skróty: `ANGUNITS`. Jak pokazuje się i wpisuje kąty.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, albo dla pozostałych dwóch `Enter precision` (0 stopni, 2 minuty, 4 sekundy, od 5 do 8 miejsc dziesiętnych sekundy).

Jeden krok cofnięcia; zapisywane w DWG i DXF. Tak samo jak {{ui:Format kąta}} w {{ui:Bieżące ustawienia}}. Zobacz [Wpisywanie i pokazywanie azymutów i kątów](topic:bearings-and-angles).

### APPLOAD

Skróty: `AP`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Wczytaj aplikację…}}. Okno dialogowe {{ui:Wczytaj aplikacje}}: wczytuje procedury `.lsp` i pliki okien dialogowych `.dcl`, wyładowuje je, wczytuje ponownie z historii oraz Pakiet startowy. Polecenia `(defun c:NAME …)` procedury działają wtedy jak każde inne. Zobacz [Wczytywanie aplikacji](topic:load-applications) i [Uruchamianie procedur LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:Edytuj skróty…}}) otwiera twój plik aliasów (wiersze `ALIAS, *COMMAND`); {{ui:Zapisz}} go stosuje. {{cmd:REINIT}} stosuje go ponownie. Zobacz [Edycja aliasów poleceń](topic:command-aliases).

### LISPEDIT

Skróty: `VLIDE`; albo {{ui:Widok}} › {{ui:Więcej}} › {{ui:LISP editor}}. Otwiera edytor LISP, okno, które zostaje otwarte obok rysunku.

- Tekst: numery wierszy, partner nawiasu przy kursorze zaznaczony (na czerwono, gdy go nie ma), {{key:Enter}} wcina nowy wiersz pod otwartym nawiasem, {{key:Tab}} wpisuje dwie spacje, {{key:Esc}} wychodzi z tekstu.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): czyta każdą formę, tak jak {{cmd:APPLOAD}} robi z plikiem, i tworzy jej polecenia `c:`. Plik pojawia się na liście {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): wylicza zaznaczone formy albo formę, w której jest kursor.
- {{ui:Stop}}: kończy działającą procedurę.
- {{ui:Console}}: to, co procedura wypisała, oraz każdy błąd z jego wierszem; kliknij błąd, aby tam przejść. Tekst jest uruchamiany po jednej formie najwyższego poziomu naraz, więc wiersz to wiersz formy, a wewnątrz niej wiersz wywołujący funkcję, którą nazywa błąd.
- {{ui:Nowa}}, {{ui:Open}}, {{ui:Zapisz}} ({{key:Ctrl+S}}): plik `.lsp`. Tekst jest też przechowywany w tej przeglądarce, więc zamknięcie okna nic nie gubi.
- Obok tekstu: funkcje, które procedura definiuje, te, które wywołuje, a których ten LISP jeszcze nie ma, te, które wywołuje, a nie są zdefiniowane w niej ani wbudowane, oraz pełne listy tego, co jest wbudowane, a czego nie.

Tekst z nawiasem, który nigdy się nie zamyka, albo z napisem, który nigdy się nie kończy, nie jest uruchamiany: wskazany jest wiersz. Nie ma krokowego debuggera, punktów przerwania ani okna obserwacji. Zobacz [Uruchamianie procedur LISP](topic:run-lisp).

### HELP

Skróty: `?`. Wypisuje każde polecenie, jego aliasy i jednowierszowy opis w historii wiersza poleceń. Nie otwiera tej pomocy: w tym celu naciśnij {{key:F1}} albo kliknij {{ui:Pomoc}}.

## Podpowiedź wyboru obiektów

Przy każdym monicie `Select objects`: kliknij obiekty, rysuj okna (od lewej do prawej) i przecinające (od prawej do lewej) dwoma kliknięciami, albo naciśnij i przeciągnij lasso ({{key:Space}} podczas przeciągania: okno, przecinanie, płot), {{key:Shift}}+klik, aby usunąć, a {{key:Enter}}, aby zakończyć. Możesz też wpisać `ALL` (wszystko), `L` (ostatni obiekt), `P` (Previous: to, czego użyło ostatnie polecenie), `F` (Fence: obiekty, które przecina linia punktów; `U` cofa punkt), `W` (Window), `C` (Crossing), `R` (tryb usuwania: wskazania zabierają obiekty; monit brzmi `Remove objects`) oraz `A` (Add again). `?` je wypisuje. Nie są pokazywane w monicie. {{key:Tab}} nad nakładającymi się obiektami podświetla następny; kliknij, aby go wybrać. Zobacz [Zaznaczanie obiektów](topic:select-objects).

### ACCESS

Skróty: `AX`. Rysowanie bez wzroku. {{cmd:ACCESS}} włącza lub wyłącza Access (`On`, `Off`) i przełącza dźwięki przyciągania (`Sound`) oraz polecenia głosowe (`Voice`); najpierw mówi stan. Przy włączonym Access każde polecenie i wynik są odczytywane przez czytnik ekranu, a obszar rysunku ma kursor klawiatury. Temat pomocy „Rysowanie bez wzroku” zawiera klawisze.

### DESCRIBE

Skróty: `DESC`. Mówi, co zawiera rysunek: ile obiektów, jakiego rodzaju, jak duży, ile warstw, co jest zaznaczone. Tylko odczyt; niczego nie zmienia.

### WHEREAMI

Skróty: `WHERE`. Mówi, gdzie jest kursor, w jednostkach rysunku.

### NEARBY

Mówi, co leży blisko kursora, najbliższe najpierw, każde z odległością i stroną, po której jest.

### SAYSEL

Mówi, co jest zaznaczone, po jednym zdaniu na obiekt (długość linii, końce i kąt; promień okręgu i środek; tekst tak, jak jest napisany).

### VOICE

Włącza lub wyłącza polecenia głosowe. Są rozpoznawane na tym komputerze; tam, gdzie przeglądarka tego nie potrafi, głos pozostaje wyłączony, chyba że w Ustawieniach wybierzesz internetową usługę przeglądarki.

### TOUCHCROSSHAIR

Skróty: `TCX`. Krzyżyk z przesunięciem do rysowania palcem, aby opuszek nie zasłaniał punktu, który wybierasz. Gdy jest włączony, jeden palec na rysunku nic nie wybiera: przesuwa krzyżyk, który znajduje się nad palcem i z jednej strony. Przyciąganie do obiektów i śledzenie podążają za krzyżykiem. Podniesienie palca nic nie wybiera i zostawia krzyżyk tam, gdzie jest. Aby wybrać, naciśnij przycisk {{ui:Click}} w rogu rysunku albo stuknij gdziekolwiek na rysunku drugim palcem. Przytrzymanie {{ui:Click}}, gdy przesuwasz drugi palec, przeciąga (okno zaznaczenia, lasso, uchwyt). Palec przytrzymany nieruchomo albo przycisk {{ui:Enter}} to Enter. Dwa palce przesuwają i powiększają jak dotąd. Przy dolnej krawędzi i przy dalszej krawędzi krzyżyk zbliża się do palca, więc każda część rysunku jest osiągalna. Pióro i mysz zawsze wybierają bezpośrednio.

{{cmd:TOUCHCROSSHAIR}} podaje stan i pyta `ON`, `OFF`, `Auto` (włączony tylko tam, gdzie palec jest jedynym wskaźnikiem, więc wyłączony na komputerze z myszą), `Distance` (jak daleko krzyżyk jest od palca, od 24 do 240 pikseli) albo `Side` (`Left`: w górę i w lewo, dla prawej ręki; `Right` dla lewej; przyciski przechodzą do drugiego rogu). Te same wybory są w Ustawieniach › CadCraft, a na urządzeniu z ekranem dotykowym pasek stanu ma przełącznik {{ui:Offset crosshair}}. Wybory są zachowywane w tej przeglądarce.

### WHOHAS

Mówi, kto ma otwarty rysunek. W CadCraft Studio na komputerze otwarcie DWG lub DXF zapisuje obok niego mały plik blokady (`Plan.dwg.cclock`: kto, od kiedy, która wersja), odświeża go co minutę, dopóki rysunek jest otwarty, i usuwa go przy zamknięciu rysunku. Otwarcie rysunku, który ma otwarty ktoś inny, mówi kto i od kiedy oraz proponuje {{ui:Open read-only}} (Zapisz wtedy pyta o nową nazwę), {{ui:Open anyway}} (druga osoba dostaje informację przy następnym odświeżeniu) albo {{ui:Anuluj}}. Zapis nad plikiem, który ma otwarty ktoś inny, najpierw pyta. Blokada, która nie została odświeżona przez pięć minut, uznawana jest za nieaktualną: druga kopia zamknęła się bez zapisu albo komputer śpi.

{{cmd:WHOHAS}} pyta `Current` (otwarty rysunek), `File` (wybierz jeden), `FOlder` (wybierz folder: każdy rysunek w nim, który jest gdzieś otwarty, zostaje wypisany), `Path` (wpisz pełną ścieżkę) albo `Name` (nazwa, którą widzą inni; nazwa twojego konta, gdy jesteś zalogowany). Studio może sięgnąć tylko do folderów, które wybrałeś: dla rysunku otwartego z folderu, którego nigdy nie wybrano, mówi raz, że nie może zanotować rysunku jako otwartego; `FOlder` wybiera folder, a blokady działają tam od tej pory. Blokada to notatka dla ludzi, a nie bariera: inny program nadal może zapisać plik. W przeglądarce nie ma folderów do przeglądania i polecenie to mówi.

### OVERKILL

Usuwa zduplikowane obiekty i porządkuje nakładające się linie i łuki, dla rysunków, które przychodzą pełne podwojonych linii. `Select objects to clean up`, {{key:Enter}}, potem znów {{key:Enter}}, aby oczyścić z pokazanymi ustawieniami, albo zmień najpierw jedno:

- `Tolerance`: jak blisko muszą być dwie współrzędne, aby uznać je za takie same (na start 0.000001; 0 oznacza dokładnie tyle samo).
- `Ignore`: właściwości, które mogą się różnić między dwoma obiektami, które są poza tym takie same. Wpisz nazwę, aby ją przełączyć: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, albo `None` / `All`. {{key:Enter}}, gdy skończysz.
- `Overlap`: on lub off. Przy on linie leżące na jednej prostej, które się nakładają, stają się jedną linią (linia leżąca wewnątrz innej jest po prostu usuwana), a łuki na jednym okręgu, które się nakładają, stają się jednym łukiem; łuki zamykające pełny obrót stają się okręgiem, a łuk leżący na okręgu jest usuwany.
- `Ends`: on lub off. Przy on linie na jednej prostej i łuki na jednym okręgu, które tylko stykają się końcami, stają się jednym kawałkiem.

Każdy typ obiektu jest sprawdzany pod kątem duplikatów: dwa obiekty są duplikatami, gdy ich geometria jest taka sama w granicach tolerancji, a ich warstwa, kolor, typ linii, skala typu linii, grubość linii, grubość, przezroczystość i wysokość się zgadzają (z wyłączeniem tych, które ignorujesz). Linie i otwarte polilinie pasują także, gdy są narysowane w odwrotnym kierunku. Pierwszy obiekt w kolejności rysowania zostaje i zachowuje swoje właściwości. Polecenie podaje, ile obiektów sprawdziło i usunęło: duplikaty, scalone nakładające się fragmenty, połączone końcami fragmenty. Jedno {{cmd:UNDO}} cofa wszystko. Ustawienia trwają, dopóki nie zamkniesz okna rysunku.

Pozostawia w spokoju: obiekty na zablokowanych warstwach i ukryte obiekty. Nie scala linii z wysokością (Z) (dokładne duplikaty takich nadal znikają) i nie dotyka segmentów wewnątrz polilinii (nie są przerzedzane), linii leżącej na segmencie polilinii ani zamkniętej polilinii narysowanej w odwrotnym kierunku.

### DRAWORDER

Zmienia, które obiekty są rysowane z przodu. `Select objects to re-order`, {{key:Enter}}, potem `Above objects`, `Under objects`, `Front` lub `Back` ({{key:Enter}} = `Back`). `Above objects` i `Under objects` pytają o obiekty odniesienia: zaznaczenie trafia tuż przed najbardziej wysunięty z nich albo tuż za najdalszy. Wybrane obiekty zachowują swoją kolejność między sobą. Jeden krok cofnięcia. Kolejność jest zapisywana z rysunkiem w DWG i DXF, gdzie jest kolejnością, w jakiej zapisywane są obiekty.

Na ekranie CadCraft rysuje najpierw obszary wypełnione (jednolite kreskowania, szerokie polilinie, maski), potem linie, potem tekst, więc tekst zawsze czyta się nad wypełnieniem; kolejność rysowania pokazuje się wśród obiektów wypełnionych i wśród obrazów. Inne programy otwierające plik rysują każdy obiekt w zapisanej kolejności.

### TEXTTOFRONT

Przenosi tekst, wymiary i odnośniki przed wszystko inne w otwartej przestrzeni: `Text`, `Dimensions`, `Leaders` albo `All` ({{key:Enter}} = `All`). Jeden krok cofnięcia. Komunikuje, gdy nie ma czego przenosić albo gdy już są na przodzie.

### HATCHTOBACK

Wysyła każde kreskowanie otwartej przestrzeni za wszystko inne, tak aby wypełnienia przestały przykrywać linie i tekst w zapisanym pliku. Bez monitów. Jeden krok cofnięcia.

### ISOLATEOBJECTS

Skróty: `ISOLATE`. Pokazuje tylko zaznaczone obiekty: wszystko inne w otwartej przestrzeni znika z widoku, aż do {{cmd:UNISOLATEOBJECTS}}. W przeciwieństwie do {{cmd:LAYISO}} działa na wskazanych obiektach, niezależnie od ich warstw, i nie zmienia żadnej warstwy. Ukryte obiekty nie są rysowane, wskazywane, przyciągane, powiększane ani drukowane, a polecenia, które przyjmują `ALL`, je pomijają. To, co rysujesz, gdy obiekty są wyizolowane, pokazuje się normalnie.

To tylko na sesję: nic z tego nie jest zapisywane z rysunkiem, nie jest krokiem cofnięcia, a ponowne otwarcie rysunku pokazuje wszystko. Gdy obiekty są ukryte, pasek stanu pokazuje przycisk z ich liczbą; kliknij go, aby je ponownie pokazać.

### HIDEOBJECTS

Ukrywa zaznaczone obiekty do {{cmd:UNISOLATEOBJECTS}}. Te same zasady co {{cmd:ISOLATEOBJECTS}}: tylko na sesję, bez zapisu, bez kroku cofnięcia.

### UNISOLATEOBJECTS

Skróty: `UNISOLATE`, `UNHIDE`. Ponownie pokazuje każdy obiekt ukryty przez {{cmd:ISOLATEOBJECTS}} lub {{cmd:HIDEOBJECTS}} i mówi, ile wróciło.

### LAYLOCKFADE

Ustawia, jak wyglądają obiekty na zablokowanych warstwach i czy kliknięcie do nich sięga. Podaje obecny stan, potem przyjmuje:

- liczbę od 0 do 90: wielkość wyblaknięcia w procentach (na start 50). 0 wyłącza wyblaknięcie.
- `ON` lub `OFF`: wyblaknięcie włączone lub wyłączone, z zachowaniem wielkości.
- `Pick`, potem `Yes` lub `No`: czy kliknięcie może zaznaczać obiekty na zablokowanych warstwach, gdy nie działa żadne polecenie? `No` (domyślne): nie da się ich wskazać wcale. `Yes`: kliknięcie lub okno je zaznacza, aby {{ui:Właściwości}} mogło je pokazać; nadal nie da się ich zmienić, a `Select objects` polecenia nigdy ich nie bierze.

Przyciągania do obiektów znajdują obiekty na zablokowanych warstwach w obu przypadkach. Wydruki nigdy nie są wyblakłe. Oba ustawienia są twoje, a nie rysunku, i są też w {{ui:Ustawienia}} w sekcji {{ui:Locked layers}}.

### BURST

Rozbija odwołania do bloków i zachowuje to, co mówią ich atrybuty. `Select block references to burst`, {{key:Enter}}: każde odwołanie zostaje zastąpione obiektami bloku, a wartość każdego widocznego atrybutu staje się zwykłym tekstem na warstwie tego atrybutu (atrybut na warstwie 0 ląduje na warstwie odwołania, jak pozostałe obiekty bloku na warstwie 0). Niewidoczne atrybuty są porzucane. Blok wewnątrz bloku zostaje odwołaniem do bloku. Jeden krok cofnięcia; podaje, ile odwołań rozbito i ile wartości atrybutów zamieniono w tekst.

Odrzuca odwołanie do dołączonego rysunku po nazwie (najpierw je związ, albo skopiuj z niego za pomocą {{cmd:NCOPY}}), a inne zaznaczone obiekty zostawia w spokoju. Dla odwołań do bloków {{cmd:EXPLODE}} daje te same obiekty; {{cmd:BURST}} działa tylko na odwołaniach do bloków i liczy tekst atrybutów.

### TXT2MTXT

Skróty: `T2M`. Łączy teksty jednowierszowe w jeden tekst akapitowy. `Select single-line text to join`, {{key:Enter}}, potem `Paragraph` (wiersze są złączane i zawijane do szerokości najszerszego wiersza) albo `Lines` (każdy tekst zostaje własnym wierszem); {{key:Enter}} bierze ten użyty ostatnio. Wiersze są ustawiane od góry do dołu, potem od lewej do prawej, wzdłuż kierunku górnego tekstu. Akapit zwisa z lewego górnego narożnika górnego tekstu i przejmuje jego wysokość, obrót, styl, warstwę i kolor. Jeden krok cofnięcia.

Tekst, który jest już akapitowy, pusty tekst i inne obiekty w zaznaczeniu zostają w spokoju, a polecenie podaje, ile ich było.

### NCOPY

Kopiuje obiekty z odwołania do bloku lub z dołączonego rysunku do rysunku, bez rozbijania czegokolwiek. `Pick an object inside a block reference or a linked drawing`: obiekt najbliższy wskazaniu zostaje skopiowany tam, gdzie jest widoczny, bez względu na to, jak głęboko w blokach siedzi; wskaż więcej, potem {{key:Enter}}. Następnie `Base point to move the copies`: {{key:Enter}} zostawia je na miejscu, albo podaj punkt bazowy i drugi punkt. Całe polecenie to jeden krok cofnięcia.

Kopia przyjmuje warstwę, na której jest widoczna: obiekt na warstwie 0 wewnątrz bloku ląduje na warstwie odwołania, w którym się znajdował, a kolor ByBlock staje się kolorem tego odwołania. Z dołączonego rysunku warstwa `Plan|Walls` staje się `Plan$0$Walls` (nazwa nadana przez łącze), tworzona z kolorem, typem linii i grubością linii warstwy z łącza. Wartość atrybutu jest kopiowana jako tekst. Odwołania do bloków na zablokowanych warstwach nie mogą być wskazane.

### FLATTEN

Ustawia wysokość (Z) i grubość zaznaczonych obiektów na 0. `Select objects to flatten`, {{key:Enter}}. Spłaszcza też obiekty wewnątrz definicji bloków, których używa zaznaczenie (i bloków wewnątrz nich), tak że każde odwołanie do tych bloków się zmienia; dołączone rysunki zostają bez zmian. Jeden krok cofnięcia; podaje, ile obiektów się zmieniło, i mówi, gdy żaden nie miał wysokości ani grubości.

To, co CadCraft zachowuje z trzeciego wymiaru w rysunku 2D, to: wysokość okręgów, łuków, elips, punktów, tekstu, odwołań do bloków, kreskowań, odnośników i polilinii (ich wzniesienie), wysokość na każdym końcu linii oraz grubość linii, okręgów, łuków, polilinii, punktów i tekstu, tak jak były w pliku. {{cmd:FLATTEN}} czyści dokładnie te rzeczy. Nie rusza modelu 3D na karcie 3D, ścian 3D ani brył, a obiekt narysowany na pochylonej płaszczyźnie został już sprowadzony do płaszczyzny rysunku przy otwieraniu pliku.

### BREAKLINE

Rysuje linię z symbolem przerwania, dla widoku, który jest ucięty. Podaje bieżący rozmiar i wydłużenie, potem `First point of the break line` (lub `Size` / `Extension`, aby je najpierw zmienić), `Second point` oraz `Where the break symbol sits`: kliknij wzdłuż linii albo {{key:Enter}} dla środka. Wynikiem jest jedna polilinia na bieżącej warstwie: linia, wychodząca za każdy punkt o wydłużenie, z kreską w kształcie litery Z o wysokości rozmiaru i o połowę krótszą.

`Size` i `Extension` są zapamiętywane jako twoje ustawienia (rozmiar zaczyna się jako dwukrotność wysokości tekstu wymiaru pomnożona przez skalę wymiaru; wydłużenie jako połowa rozmiaru). {{key:Enter}} powtarza polecenie.

### AUDIT

Sprawdza otwarty rysunek pod kątem uszkodzeń i je naprawia. {{cmd:AUDIT}} patrzy na każdy obiekt w modelu, na arkuszach i wewnątrz bloków, oraz na tabelę warstw, i wypisuje, co znalazł, według rodzaju:

- liczby niebędące skończonymi albo absurdalnie duże;
- obiekty bez rozmiaru: linia bez długości, okrąg bez promienia, polilinia z jednym punktem, tekst bez liter lub wysokości, odwołanie do bloku o zerowej skali;
- obiekty na warstwie, której rysunek nie ma; odwołania do bloku, którego nie ma; nazwy stylów tekstu i wymiarów oraz nazwy typów linii, których nie ma w rysunku;
- bloki zawierające same siebie, bezpośrednio albo przez inne bloki;
- obiekty, które dzielą identyfikator, klucz lub uchwyt pliku;
- wymiary bez punktów, od których są mierzone, oraz kreskowania, których kontur nie jest zamkniętym obrysem.

Potem pyta `Fix them? [Yes/No]`. `No` nic nie zmienia. `Yes` naprawia wszystko jednym krokiem cofnięcia: usuwa to, czego nie da się narysować (złe liczby, brak rozmiaru, brakujący blok, uszkodzony wymiar, kreskowanie bez użytecznego konturu, odwołanie zamykające okrąg bloków); brakującą warstwę tworzy; nieznane nazwy stylów i typów linii wracają do domyślnych; wspólny klucz jest zastępowany. Podaje, ile obiektów usunięto i ile naprawiono. Te same wyniki pojawiają się w panelu Problemy, każdy z własnym {{ui:Repair}}.

Nic nie odrzuca, ale sprawdza tylko to, co CadCraft sam rysuje: dane zachowane dla innych programów (bryły 3D, obiekty OLE) nie są otwierane.

### RECOVER

Otwiera uszkodzony DXF lub DWG. {{cmd:RECOVER}} pyta o plik, odczytuje to, co da się odczytać, zamiast odrzucać plik, wypisuje to, co pominął lub przyjął, a potem sprawdza i naprawia rysunek tak, jak robi {{cmd:AUDIT}} z `Yes`.

- DXF: wiersze, które nie są częścią pary kod i wartość, są pomijane, aż pary znów się ułożą; sekcja bez końca jest zamykana; plik urwany jest czytany do miejsca urwania; binarny DXF urwany jest czytany do ostatniej pełnej wartości. Gdy sekcja, blok lub obiekt nadal nie daje się odczytać, zostaje pominięty i nazwany, a czytanie idzie dalej.
- DWG: obiekty, które nie przechodzą swoich sprawdzeń albo nie dają się zdekodować, są pomijane, a zagubiona lista obiektów jest odbudowywana przez przejście przez dane obiektów.

Plik na dysku nie jest zmieniany. Odzyskany rysunek otwiera się niezapisany: zapisz go pod nową nazwą. Plik, z którego nic w ogóle nie da się odczytać, zostaje odrzucony, z podaniem powodu.

### LEGACYTEXT

Konwertuje tekst wpisany starymi 8-bitowymi wietnamskimi czcionkami na Unicode. Krótkie nazwy `TEXTTOUNICODE` i `VNTEXT`.

Starsze rysunki wietnamskie trzymają tekst jako znaki zachodnie, które dopiero czcionka zamienia w wietnamski: tekst TCVN3 w czcionkach ABC (`.VnTime`, `.VnArial` i czcionki wielkoliterowe, których nazwy kończą się na `H`) oraz tekst VNI w czcionkach VNI (`VNI-Times`). CadCraft pokazuje taki tekst tak, jak go czyta, gdy tylko rysunek jest otwarty, według czcionki jego stylu tekstu, obiektu albo fragmentu wewnątrz tekstu akapitowego; plik nadal zawiera stare znaki.

{{cmd:LEGACYTEXT}} mówi, ile tekstów znalazł w każdym kodowaniu, i pyta `Convert … to Unicode?`. `Yes` przepisuje każdy (model, arkusze, bloki, wartości i definicje atrybutów) i nadaje stylom tekstu czcionkę Unicode (Times New Roman, Arial lub Courier New, zależnie od rodzaju starej czcionki), w jednym kroku cofnięcia. Formatowanie wewnątrz tekstu akapitowego zostaje zachowane.

Gdy żaden tekst nie używa znanej czcionki (styl, który stracił nazwę czcionki), pyta `Read selected texts as [Tcvn3/Vni/None]`: wybierz kodowanie i zaznacz teksty. Tekst, który jest już w Unicode, zostaje w spokoju. Nadpisania tekstu wymiaru i tekst wielokrotnych odnośników nie są konwertowane.
