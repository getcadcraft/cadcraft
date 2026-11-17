---
title: Model w 3D
summary: Zobacz rysunek w 3D na karcie 3D i twórz z niego proste bryły: wyciągaj (z pochyleniem lub wzdłuż ścieżki), obracaj, wpychaj i wyciągaj ściany, twórz prostopadłościany, walce i kliny, łącz, odejmuj i przecinaj bryły, a potem przesuwaj, kopiuj, obracaj i usuwaj je oraz umieszczaj na arkuszu płaskie widoki 2D tych brył.
keywords: 3d, trzy wymiary, bryła, bryły, 3dsolid, region, korpus, acis, sat, sab, bryły z innych programów, otwórz rysunek 3D, wyciągnij, ext, obrót, rev, przeciągnij, pochylenie, ścieżka, presspull, wepchnij wyciągnij, push pull, prostopadłościan, walec, cyl, klin, 3dorbit, orbita, widok, vscurrent, styl wizualny, cieniowany, linie ukryte, szkielet, x-ray, xray, iso, perspektywa, równoległy, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kostka widoku, suma, uni, odejmij, su, przecięcie, in, operacje logiczne, połącz bryły, viewbase, flatshot, płaski widok, widok 2D, widok rysunku, widok z przodu, widok z góry, widok z boku, linie ukryte
from: 13060e71
---

## Co wykonasz

Obrys pokoju 1000 × 600 wyciągnięty w bryłę o wysokości 400, jedna ściana wypchnięta w górę i walec obok niego — następnie model zapisany wraz z rysunkiem i wyeksportowany do przeglądarki 3D lub na drukarkę 3D.

Karta {{ui:3D}} znajduje się obok {{ui:Model}} pod rysunkiem. Pokazuje rysunek przestrzeni modelu leżący na ziemi w kolorach warstw (warstwy wyłączone lub zamrożone pozostają ukryte) oraz bryły, które tworzysz. Przy pierwszym otwarciu widok 3D się ładuje; potem przełącza się od razu.

## Wyciągnij kształt

1. Na karcie {{ui:Model}} wpisz `REC` i naciśnij {{key:Enter}}. Wpisz `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliknij kartę {{ui:3D}}. Pasek narzędzi pokazuje grupę {{ui:3D}} zamiast grup rysunkowych.
3. Kliknij {{ui:Extrude}} (lub wpisz {{cmd:EXTRUDE}}, `EXT`). Kliknij wewnątrz prostokąta, a następnie naciśnij {{key:Enter}}.
4. Wpisz `400` i naciśnij {{key:Enter}}. Historia podaje „Wyciągnięto 1 bryłę, wysokość 400” wraz z jej objętością.

Zamknięte polilinie (także z łukami), prostokąty, wielokąty, okręgi i elipsy dają się wyciągnąć; linie i otwarte polilinie nie, a historia podaje powód. Możesz też najpierw zaznaczyć kształty na karcie {{ui:Model}} i wpisać tam `EXTRUDE`. Zamiast wpisywać wysokość, możesz ją wskazać: kontur podąża za kursorem w górę i w dół. Ujemna wysokość idzie w dół. Wpisz `D` przy monicie wysokości, aby po wyciągnięciu usunąć kształty 2D (ponowne `D` je zachowa).

Przy monicie wysokości `T` (Pochylenie) pyta o kąt w stopniach: boki pochylają się o ten kąt, więc górna część jest mniejsza (ujemny kąt ją powiększa); zbyt stromy kąt dla danego kształtu jest odrzucany. `P` (Ścieżka) przeciąga kształty wzdłuż ścieżki (patrz poniżej).

## Obrót i przeciąganie

- {{cmd:REVOLVE}} (`REV`, lub {{ui:More}} › {{ui:Revolve about an axis}}): zaznacz zamknięte kształty, naciśnij {{key:Enter}}, a następnie kliknij dwa końce osi (lub wpisz `X` albo `Y` dla osi rysunku przechodzącej przez 0,0), potem wpisz kąt albo naciśnij {{key:Enter}}, aby obrócić o pełny kąt. Kształt obraca się wokół osi i wstaje ponad ziemię: narysuj obrys połowy wazonu obok linii, a następnie obróć go wokół tej linii. Kształt może dotykać osi, ale nie może jej przecinać. Pełny obrót ma 48 kroków.
- {{cmd:SWEEP}} (lub {{ui:More}} › {{ui:Sweep along a path}}, albo `P` przy monicie wysokości polecenia EXTRUDE): zaznacz zamknięte kształty (profil), naciśnij {{key:Enter}}, a następnie kliknij ścieżkę: linię, polilinię, łuk, okrąg lub elipsę. Profil stoi w poprzek ścieżki, jego środek leży na niej i biegnie wzdłuż niej; narożniki są ścięte na ukos, a zamknięta ścieżka tworzy pierścień. Mały prostokąt przeciągnięty wzdłuż obrysu pokoju daje listwę przypodłogową; okrąg przeciągnięty wzdłuż polilinii daje rurę.

## Wepchnij i wyciągnij ścianę

1. Kliknij {{ui:Press/pull}} (lub wpisz {{cmd:PRESSPULL}}).
2. Kliknij górną ścianę bloku.
3. Wpisz `100` i naciśnij {{key:Enter}}, albo przesuń kursor i kliknij. Blok ma wysokość 500.

## Prostopadłościany, walce i kliny

- {{cmd:BOX}}: kliknij lub wpisz dwa narożniki, a następnie wysokość.
- {{cmd:CYLINDER}} (`CYL`): środek, promień, a następnie wysokość. Walce i wyciągnięte okręgi mają 48 boków, cieniowane gładko.
- {{cmd:WEDGE}} (`WE`): dwa narożniki i wysokość. Pełna wysokość jest przy pierwszym narożniku, a przy drugim zbiega się do zera.

Na karcie 3D kliknięcie trafia w ścianę lub krawędź pod kursorem, a w przeciwnym razie na ziemię, dzięki czemu blok może stać na innej bryle.

## Przesuwanie, kopiowanie, obracanie i usuwanie brył

Na karcie 3D kliknięcie zaznacza bryłę; przeciągnij od lewej do prawej, aby zaznaczyć oknem, a od prawej do lewej, aby zaznaczyć przecięciem. Następnie:

- {{cmd:MOVE}}: kliknij punkt bazowy i miejsce docelowe albo wpisz `<100,0,0>` (lub `@100,0`) dla przesunięcia wzdłuż osi X, Y i Z.
- {{cmd:COPY}}: tak samo, ale oryginał pozostaje.
- {{cmd:ROTATE}}: wpisz kąt (obraca się wokół środka zaznaczenia, wokół osi Z) albo kliknij środek, punkt początkowy i kąt.
- {{cmd:ERASE}} lub {{key:Delete}}.

## Łączenie, odejmowanie i przecinanie brył

Otwórz {{ui:More}} na pasku narzędzi 3D albo wpisz polecenie:

- {{cmd:UNION}} (`UNI`): zaznacz bryły i naciśnij {{key:Enter}}: staną się jedną bryłą.
- {{cmd:SUBTRACT}} (`SU`): zaznacz bryły do zachowania i naciśnij {{key:Enter}}, a następnie te do usunięcia i naciśnij {{key:Enter}}. Otwór przez blok: narysuj walec przechodzący przez niego, a następnie odejmij walec.
- {{cmd:INTERSECT}} (`IN`): zaznacz bryły i naciśnij {{key:Enter}}: pozostaje tylko to, co jest wspólne dla wszystkich.

Historia podaje objętość wyniku. Każda z tych operacji to jeden krok cofnięcia. Pierwsze uruchomienie ładuje silnik operacji logicznych 3D (około 0,5 MB; jest w {{ui:Save for offline}}). Łączyć można tylko zamknięte bryły: bryła z otwartymi krawędziami (z luźnych ścian 3D z innego programu) jest odrzucana z podaniem przyczyny. Wynikiem jest jedna bryła; zakrzywione ściany pozostają zbudowane z płaskich ścianek, tak jak walec.

Dwukrotnie kliknij bryłę, aby edytować jej ściany i krawędzie osobno; {{key:Esc}} zamyka edycję. Każda zmiana 3D to jeden krok cofnięcia w tej samej historii co rysunek: {{key:Mod+Z}} cofa ostatnią czynność na obu kartach.

## Płaskie widoki na arkuszu

1. Otwórz kartę arkusza (lub zostań na {{ui:Model}}), a następnie wpisz {{cmd:VIEWBASE}} (lub `FLATSHOT`).
2. Wybierz widok: {{key:Enter}} dla widoku z przodu, albo `T` (z góry), `R` (z prawej), `L` (z lewej), `BA` (z tyłu), `BO` (z dołu), `I` (izometryczny).
3. {{key:Enter}} pokazuje linie ukryte, przerywane; `H` je pomija.
4. {{key:Enter}} przyjmuje skalę zaproponowaną przez CadCraft: na arkuszu największą standardową skalę (na przykład 1:20), przy której widok mieści się w mniej niż połowie papieru. Albo wpisz własną: `1:50`, `2:1`.
5. Kliknij lub wpisz, gdzie ma być środek widoku.

Widok to jedno odwołanie do bloku, `VIEW-FRONT-1` i tak dalej: widoczne krawędzie na warstwie VIEW-VISIBLE (0,5 mm), ukryte na VIEW-HIDDEN (przerywane, 0,25 mm). Przesuwaj, wymiarowuj i drukuj go jak każdy inny rysunek. Jest obrazem brył z chwili utworzenia: po ich zmianie usuń widok i uruchom {{cmd:VIEWBASE}} ponownie. Aby uzyskać więcej widoków, uruchom polecenie raz dla każdego z nich.

## Rozglądanie się

Przeciągnij z wciśniętym kółkiem myszy, aby obracać widok, {{key:Shift}} + przeciąganie z wciśniętym kółkiem lub prawy przycisk, aby przesuwać, a obrót kółka przybliża w miejscu kursora. Na gładziku dwa palce obracają widok, a rozsunięcie zbliża. Kliknięcie prawym przyciskiem bez przeciągania to {{key:Enter}}, jak na innych kartach. 3DORBIT pozwala lewemu przyciskowi obracać widok, aż naciśniesz {{key:Enter}} lub {{key:Esc}}.

- {{ui:Views}} (lub {{cmd:VIEW}}): Izo, Z góry, Z dołu, Z przodu, Z tyłu, Z lewej, Z prawej, Perspektywa lub Równoległy, oraz Powiększenie do zasięgu.
- {{ui:Style}} (lub {{cmd:VSCURRENT}}, `VS`): Cieniowany, Cieniowany z krawędziami, Linie ukryte, Szkielet lub Rentgen.

Klikane punkty przyciągają się do brył (narożników, krawędzi, ścian) oraz do rysunku 2D na ziemi: do końców i środków jego linii i łuków oraz punktów wzdłuż nich. Linie 2D nigdy nie są zaznaczane na karcie 3D. Gdy polecenie prosi o obiekty 2D (EXTRUDE, REVOLVE, SWEEP), kliknięcie wybiera jeden, przeciągnięcie od lewej do prawej bierze to, co leży w całości w oknie, a przeciągnięcie od prawej do lewej bierze to, co okno przecina, jak na karcie {{ui:Model}}.

Kostka widoku znajduje się w prawym górnym rogu karty 3D: kliknij ścianę, krawędź lub narożnik, aby spojrzeć z tej strony; przeciągnij ją, aby obracać widok, a przycisk z domkiem wraca do widoku izometrycznego. To jest {{ui:Automatic}}, pierwsza opcja ustawienia {{ui:Corner indicator}} w [Ustawieniach CadCraft](topic:settings). Po ustawieniu na {{ui:View cube}} karta {{ui:Model}} też pokazuje kostkę, patrzącą z góry; kliknięcie dowolnej innej ściany otwiera kartę 3D patrzącą z tej strony. Po ustawieniu na {{ui:Axis icon}} obie karty pokazują zamiast tego znacznik osi.

## Bryły z innych programów

Rysunek z innego programu może zawierać bryły 3D, obszary i korpusy (3DSOLID, REGION, BODY: tamten program zachowuje ich kształt jako dane ACIS). CadCraft pokazuje te z przestrzeni modelu na karcie 3D, w kolorze ich warstwy i z własnymi krawędziami, przy pierwszym otwarciu karty; wiersz poleceń podaje wtedy, ile ich narysowano.

- Są pokazywane tak, jak są: nie można ich zaznaczać, przesuwać ani zmieniać. Warstwy wyłączone lub zamrożone je ukrywają.
- Zapis jako DWG zapisuje każdą z nich bez zmian, w dowolnej wersji DWG, dzięki czemu tamten program dostanie je z powrotem. Pliki DXF ich nie zachowują: CadCraft zapisuje je tylko w DWG i informuje o tym przy zapisie jako DXF.
- Rysowane są: płaskie ściany oraz ściany na walcach, stożkach, sferach, torusach i prostych powierzchniach splajnowych, z krawędziami prostymi, okrągłymi i splajnowymi. Ściana na innym rodzaju powierzchni lub taka, której CadCraft nie potrafi rozłożyć, nie jest zgadywana: zostaje pominięta i wymieniona, na przykład „Jeszcze nie narysowano (bryły 3D): 2 ściany na powierzchni splajnowej (sweepsur), czyli powierzchni jeszcze nierysowanej.”
- Bryły wewnątrz bloków nie są jeszcze pokazywane; „Informacje o pliku” je liczą.

Zakrzywione ściany są rysowane jako małe płaskie kawałki, oddalone od siebie o około 7,5°, więc zakrzywiona bryła z bliska wygląda nieco fasetowo.

## Zapis i eksport

Zapis zachowuje model 3D w DWG i w DXF. Każda ściana trafia jako ściana 3D na warstwie `CC-3D`, dzięki czemu inne programy pokazują bryły, a CadCraft zachowuje we własnym pliku dokładną kopię, którą odczytuje przy ponownym otwarciu rysunku, wraz z widokiem 3D takim, jaki był (kamera, rzutowanie i styl wizualny). Ściany 3D z innych programów wchodzą na kartę 3D jako luźne ściany, zgrupowane w jedną grupę. Ściana 3D wewnątrz bloku wchodzi raz dla każdego odwołania do tego bloku w modelu, ustawiona i obrócona tak jak odwołanie; w samym bloku oraz na arkuszu ściana 3D jest rysowana płasko, jako jej kontur.

{{ui:Export}} w grupie 3D zapisuje same bryły: GLB dla przeglądarek i sieci ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) lub STL do druku 3D, w milimetrach ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pyta, który format wybrać.

:::note
Model 3D jest w rzeczywistym rozmiarze. Rysunek bez jednostek jest liczony jako milimetry, więc `1000` to jeden metr. Jeśli później zmienisz jednostki rysunku ({{ui:Properties}}, bez niczego zaznaczonego), bryły zostaną przeskalowane razem z nimi, aby pozostały na rysunku, a historia to podaje. Jedno {{key:Mod+Z}} cofa zmianę jednostek i skalowanie razem.
:::
