---
title: Jeszcze nie zbudowano
summary: Czego ta wersja aplikacji do rysowania CadCraft jeszcze nie robi i co zrobić zamiast tego dziś.
keywords: brakujące, ograniczenia, ctb, stb, styl wydruku, właściwości, ucs, adnotacyjny, blok dynamiczny, spline, plan rozwoju, nieobsługiwane, zapis dwg, kreskowanie, rozciągnij, macierz, połącz, matchprop, przerwij, wydłuż, typ linii, grubość linii, xref, chmura, 3d, bryły, operacje logiczne, wielokrotny odnośnik, wymazanie
from: 87e56521
---

CadCraft jest w fazie rozwoju. Ta strona wymienia to, czego bieżąca wersja nie robi, abyś nie musiał tego szukać. Przy każdej pozycji podano, co zrobić zamiast tego dziś.

## Pliki i zapis

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Sprawdzenie pliku CadCraft DWG w samym AutoCAD | Każda zapisana wersja jest odczytywana przez trzy inne programy z czytnikami DWG oraz przez CadCraft. Zobacz [Co zachowuje i zmienia DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Zapis DXF nowszy niż 2000 | Zapisz jako DXF 2000 albo jako DWG do AutoCAD 2018. |
| Zapis nad otwartym plikiem w przeglądarce | Każdy zapis pobiera nową kopię; jeśli chcesz, sam zastąp stary plik. W CadCraft Studio {{key:Mod+S}} zapisuje z powrotem do otwartego pliku. |
| Zapis w chmurze i synchronizacja między komputerami | CadCraft nie wysyła jeszcze zapisów do chmury: przechowuj pliki DWG i DXF we własnych folderach. W CadCraft Studio [Historia](topic:history) pokazuje wersje rysunku z chmury, zapisanego gdzie indziej, oraz kopie Twoich zapisów na tym komputerze. |
| Nakładki i edycja dołączonego rysunku w miejscu | Dołącz rysunek jako odwołanie i załaduj go ponownie po zmianie w drugim rysunku. Odwołanie pozostaje odwołaniem po zapisie jako DWG, a {{cmd:XCLIP}} je przycina. |
| Obrazy w DXF; wymazania (wipeout), które zasłaniają to, co pod nimi jest | DXF zachowuje obraz jako jego ramkę z nazwą pliku; DWG zachowuje go jako obraz — zobacz [Obrazy w rysunku](topic:pictures). Wymazanie pokazuje się jako swoja ramka. |
| Edycja wielokrotnych odnośników z zakrzywionymi liniami odnośnika, z liniami odnośnika po obu stronach zawartości lub z blokiem obróconym albo skalowanym nierównomiernie | Są rysowane tak, jak narysował je inny program, i przesuwają się jako jedna całość. Wielokrotne odnośniki z prostymi liniami odnośnika do jednego punktu oraz z tekstem lub blokiem jako zawartością są edytowalne ({{cmd:MLEADEREDIT}}). |
| W tabelach z innych programów: komórka zawierająca blok, formatowanie tekstu w komórce, obramowania i kolory poszczególnych komórek tabeli DXF, tabela podzielona na kolumny | Tabela otwiera się jako edytowalna tabela ({{cmd:TABLEDIT}}) i jest pokazywana tak, jak narysował ją inny program, dopóki jej nie edytujesz; potem CadCraft rysuje ją na nowo z jej komórek: zwykły tekst, formuły, takie jak `=G3*H3` i `=Sum(I3:I9)`, wyrównanie i wysokości tekstu. Komórka z blokiem jest wtedy pusta. Nietknięta tabela DWG jest zapisywana z danymi komórek, z którymi przyszła. |
| Prawdziwy obiekt tabeli w zapisanym DXF | DWG zachowuje tabelę jako tabelę, którą inne programy mogą edytować. DXF zachowuje ją jako blok, który ją rysuje, wraz z własnym zapisem CadCraft: CadCraft otwiera ją ponownie jako tabelę; inne programy widzą blok. Tabela odbita lub skalowana nierównomiernie jest tak samo zapisywana w DWG. |
| Kopiowanie i wklejanie z innymi programami | Schowek CadCraft działa między rysunkami CadCraft i kartami w tej samej przeglądarce, nie z innymi programami. Zapisz jako DWG lub DXF i otwórz go tam. Zobacz [Kopiuj, wklej i duplikuj](topic:copy-paste). |

## Rysowanie i edycja

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Wzory kreskowania, których CadCraft nie ma, oraz wypełnienia gradientowe dokładnie tak, jak malują je inne programy | Otwarte kreskowania ze wzorami, których CadCraft nie ma, pokazują się jako jednolity ton. Wypełnienie gradientowe ({{cmd:GRADIENT}}) jest malowane we własny sposób CadCraft dla każdego typu: podobnie jak w innych programach, ale nie punkt po punkcie. DWG 2004 i nowsze zachowują je jako prawdziwe kreskowanie gradientowe; w pliku DXF 2000 lub DWG 2000 odczytuje je tylko CadCraft, a inne programy widzą wypełnienie jednolite. Wzory wczytuje się z pliku `.pat`, a kreskowanie można powiązać z jego konturem, wtedy za nim podąża: zobacz [Kreskowanie i obszary wypełnienia](topic:hatch). |
| Typy linii z kształtami lub tekstem oraz grubości linii w zapisanym DXF R12 | Kształty i tekst w typie linii pliku są pomijane w jego kreskach; aby zachować grubości linii, zapisz jako DWG. |
| Kreskowania ze wzorami w zapisanym DXF | R12 nie ma kreskowania: zapisywane są jako ich kontury. Aby zachować wzór, zapisz jako DWG. |
| Macierze zrobione przez inny program lub możliwe do edycji w nim; wiersze i poziomy w macierzach po ścieżce i biegunowych; macierz, która podąża za krzywą ścieżki | Macierz utworzona jako powiązana ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; zmieniana przez {{cmd:ARRAYEDIT}}) jest zapisywana jako odwołanie do bloku z liczbami CadCraft: inne programy pokazują, przesuwają, drukują i rozbijają ją, ale nie mogą zmienić jej liczby elementów; macierz zrobiona w innym programie otwiera się tutaj jako zwykłe odwołanie do bloku. Macierz po ścieżce zachowuje kopię swojej ścieżki: późniejsza edycja krzywej nie przesuwa elementów. |
| Przycinanie obszarów widokowych arkusza do innych programów i z nich | Okno widokowe przycięte przez {{cmd:VPCLIP}} lub utworzone przez {{cmd:MVIEW}} Polygonal albo Object jest zapisywane z własnym konturem CadCraft: inne programy otwierają je jako prostokąt wokół niego, a okno przycięte w innym programie otwiera się tutaj jako swój prostokąt. DXF R12 zachowuje tylko prostokąt. |
| {{cmd:STRETCH}} z wielokątem przecięcia | Użyj jednego lub kilku okien przecięcia. |
| {{cmd:PEDIT}} Edit vertex (jeden wierzchołek naraz w wierszu poleceń) | Uchwyty oraz przeglądarka wierzchołków we Właściwościach (każdy wierzchołek, jego szerokości i wypukłość). Reszta PEDIT jest zbudowana: zobacz [Spline i polilinie](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} i {{cmd:JOIN}} na elipsach i splinach | {{cmd:EXPLODE}} spline (albo {{cmd:PEDIT}}), aby uzyskać polilinię, na której te polecenia działają. |
| Zaokrąglenie i fazka między łukowym odcinkiem polilinii a sąsiednim odcinkiem; zaokrąglenie łączące linię z polilinią | {{cmd:EXPLODE}} polilinię, a potem zaokrąglij fragmenty. Łuk zaokrąglenia jest dodawany jako osobny obiekt. |
| Przycinanie i wydłużanie: opcja Project (3D) oraz wydłużanie łukowego końca polilinii | Przycinaj w płaszczyźnie rysunku; dla łukowego końca rozbij polilinię albo narysuj łuk ponownie. |
| Obiekty OLE: ich wstawianie, uruchamianie lub edycja; pokazywanie tych z DWG, gdzie plik je umieszcza; obrazy metapliku | Zobacz [Obrazy](topic:pictures#objects-from-other-programs-ole). Obiekty DXF pokazują się jako ich bitmapa lub opisana ramka; obiekty DWG są zachowywane, a nie rysowane w miejscu (OLELIST je wymienia i umieszcza kopię obrazu tam, gdzie wskażesz). |
| Wpisywanie kodów formatowania (pogrubienie, ułamki piętrowe, kolory dla słów) w tekście akapitowym; czcionki inne niż jedna czcionka w stylu Helvetica; kolumny | Formatowanie, które przyszło w pliku, jest zachowywane, rysowane i zapisywane (zobacz Tekst); nowy tekst akapitowy ma jedną wysokość i kolor. |
| Tekst akapitowy edytowany przy swoim obrocie | Edytor otwiera się poziomo; tekst zachowuje swój obrót. |
| Wielokrotne odnośniki zapisane jako obiekty wielokrotnych odnośników w DXF | DWG zachowuje je jako wielokrotne odnośniki, z każdą linią odnośnika i blokiem jako zawartością; DXF zachowuje to, co rysują (linie, grociki i tekst lub blok). |
| W tabelach ({{cmd:TABLE}}): tekst zawijany w komórce, tabele dzielone na części, własny styl tekstu i kolory tabeli dla każdego rodzaju wiersza w oknie dialogowym, powiązanie danych z arkuszem kalkulacyjnym (`.xlsx`) lub takie, które samo czyta plik | Tekst komórki łamie się tylko tam, gdzie go złamiesz ({{key:Alt+Enter}}); poszerz kolumnę. {{cmd:DATALINK}} czyta plik `.csv`, a {{cmd:DATALINKUPDATE}} prosi o ponowny wybór pliku. {{cmd:DATAEXTRACTION}} i {{cmd:COUNTTABLE}} tworzą tabelę, która sama nie podąża za rysunkiem: uruchom je ponownie (żywe liczenie: {{cmd:BOMTABLE}}). |
| Definicje atrybutów zachowane osobno w zapisanym pliku (poza blokiem), atrybuty wieloliniowe | Przed zapisem umieść definicje atrybutów w bloku: samodzielnie zapisują się jako tekst pokazujący znacznik. |
| Stany warstw (zapisywanie i przywracanie, które warstwy są włączone) | Użyj {{cmd:LAYISO}} / {{cmd:LAYUNISO}} albo włączaj i wyłączaj warstwy ręcznie. |
| Zaznaczanie wielokątem okna i wielokątem przecięcia oraz zapisane filtry zaznaczenia | Płot (`F`), Okno, Przecięcie, Usuń z zaznaczenia (`R`), {{cmd:QSELECT}} dla reguły. |


## Panel Właściwości

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Rysowanie wyborów Fit oraz poziomego położenia tekstu i tekstu pod linią na wymiarach innych niż liniowe i równoległe | Są zachowane przy obiekcie, pokazywane we Właściwościach i zapisywane; CadCraft umieszcza tekst według własnej reguły. |
| Materiały widoczne w innych programach | Zapisany plik zachowuje nazwę materiału dla CadCraft; inne programy pokazują materiał warstwy. |
| Przezroczystość w plikach DWG 2000 i DXF | Inne programy pokazują te obiekty jako pełne; CadCraft zachowuje przezroczystość. Dla wszystkich zapisz jako DWG 2004 lub nowsze. |
| Odwołanie do kreskowania utworzone w innym programie | CadCraft zapisuje własne odwołanie w plikach DWG i DXF 2000; odwołania utworzone w innych programach nie są odczytywane. Użyj `HATCHEDIT` i Link: zobacz [Kreskowanie i obszary wypełnienia](topic:hatch). |
| Współrzędne we Właściwościach w UCS | Właściwości pokazują współrzędne świata; pasek stanu i {{cmd:ID}} pokazują współrzędne UCS. Zobacz [Obróć widok i użyj własnych współrzędnych](topic:ucs-and-turned-view). |
| Osobne położenie obiektu adnotacyjnego przy każdej jego skali; odczyt zapisów dla poszczególnych skal, które zachowują inne programy | Tekst lub wymiar adnotacyjny zachowuje listę skal ({{cmd:OBJECTSCALE}}), a każdy obszar widokowy pokazuje go w rozmiarze dla swojej skali, w tym samym miejscu. Lista jest zapisywana jako dane własne CadCraft: inny program widzi obiekt w jednej skali, dla której jest wymiarowany, a lista utworzona w innym programie nie jest odczytywana. Zobacz [Jednostki, arkusze i skale](topic:units-papers-scales#annotate-by-scale). |
| Zmiana odległości, kątów lub odbić bloku dynamicznego; bloki dynamiczne pozostające dynamicznymi po zapisie w innej wersji DWG lub jako DXF | Przełącz jego stan widoczności w Właściwości › {{ui:Własne}}; jego pozostałe wartości są tam pokazane tylko do odczytu. Pozostaje dynamiczny, gdy zapiszesz go jako DWG w wersji, w jakiej przyszedł rysunek. Zobacz [Bloki dynamiczne](topic:dynamic-blocks). |
| Tolerancja dopasowania spline, stopień spline 6 i wyższy, spline 3D | Punkty dopasowania i kontrolne, stopnie od 1 do 5 oraz wagi są zbudowane: zobacz [Spline i polilinie](topic:splines). Wysokość spline (Z) nie jest zachowywana. |

## Pomoce precyzji

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Śledzenie od punktów przez polecenia oraz okno ustawień śledzenia (względne kąty biegunowe, dodatkowe kąty) | {{cmd:POLARANG}} ustawia krok; ponownie pobierz punkty w następnym poleceniu. |
| Przyciąganie do siatki | Wpisuj współrzędne; siatka jest tylko wizualną pomocą. |
| Opcje Łuk i Długość przy wskazywaniu narożników obszaru oraz MEASUREGEOM Volume | Narysuj kontur za pomocą {{cmd:PLINE}} (z łukami), a następnie {{cmd:AREA}} `O`. |
| Wprowadzanie dynamiczne dla uchwytów i jego lista opcji (strzałka w dół) | Wiersz poleceń pokazuje opcje. |
| Kąty w stopniach, minutach i sekundach, gradach lub azymutach geodezyjnych | Wpisuj kąty dziesiętne w stopniach: `30.5` dla 30°30'. |
| Okno menedżera widoków; widoki nazwane arkusza, które wracają na ten arkusz | {{cmd:NAMEDVIEW}} wymienia i przywraca widoki. Zapisany plik je zachowuje, ale widoki arkusza wracają na pierwszy arkusz. |

## Arkusze, wymiary i drukowanie

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Pola dla skali obszaru widokowego, nazwanego obiektu takiego jak warstwa lub blok, hiperłącza oraz pola zestawu arkuszy poza numerem i nazwą arkusza; pola zapisane jako obiekty pól, które inne programy aktualizują | {{cmd:FIELD}} obejmuje datę, nazwę pliku, numer arkusza, nazwę i liczbę, właściwości rysunku ({{cmd:DWGPROPS}}), pole, długość i inne właściwości obiektu oraz formuły w tekście, atrybutach i komórkach tabel. Inny program pokazuje pole CadCraft jako tekst, który ostatnio odczytał; CadCraft odczytuje pola daty, nazwy pliku, właściwości, arkusza i wyrażenia innych programów, a pozostałe rodzaje zostawia jako tekst. Skalę obszaru widokowego wpisuje się ręcznie. |
| Zapisywanie, który styl wymiarowania jest bieżący; tekst wymiaru przeciągnięty w wolne miejsce | Rysunek otwiera się z bieżącym stylem Standard. Tekst leży na linii wymiarowej (DIMTEDIT Left / Right / Center). Zobacz [Ustaw rozmiary wymiarów](topic:dimension-settings). |
| Edytowalne dwuliniowe wymiary kątowe z otwartych plików, których CadCraft nie potrafi odtworzyć | Są pokazywane tak, jak narysowano je w pliku. Wymiary współrzędnych, długości łuku i promieniowe z załamaniem otwierają się jako wymiary, które można edytować. |
| Sprawdzanie czytnika CTB względem pliku z innego programu (jest zbudowany, na podstawie opublikowanego opisu), nazwane style wydruku (STB), rozproszenie, numery piór, skala szarości z CTB oraz adaptacyjna regulacja typu linii w stylu wydruku | Utwórz tabelę w {{ui:Tabele stylów wydruku}} (kolor, szarość, tusz, grubość linii, typ linii, zakończenie i łączenie linii oraz styl wypełnienia dla każdego koloru): zobacz [Tabele stylów wydruku](topic:plot-pdf#plot-style-tables). |
| Ustawienia strony | Wybierz papier, skalę i styl wydruku w oknie {{ui:Drukuj do PDF}}; arkusz zachowuje swój styl wydruku. |
| Hindi i inne pisma wymagające złożonego kształtowania w PDF oraz rzadkie ideogramy (pisma europejskie, cyrylica, greka, hebrajski, arabski, perski, urdu, tajski, chiński, japoński i koreański w druku) | Drukują się jako „?”. |
| Tekst pismem arabskim oraz w chińskim, japońskim lub koreańskim w tym samym wydrukowanym PDF | Wydruk ma jedną czcionkę: jedno z dwóch pism drukuje się jako „?”. |
| Jawne znaki kierunku w tekście (osadzenia, nadpisania, izolatory) | Są ignorowane: każda linia jest porządkowana tylko według swoich liter. |
| Obrazy wewnątrz dołączonej strony PDF w wydruku | Linie, wypełnienia i tekst strony są drukowane. Strona będąca tylko obrazem wchodzi przez {{cmd:SCANATTACH}} i obrazy są drukowane. Zobacz [Podkłady PDF](topic:pdf-underlay#plot-and-save). |
| Wysyłanie zlecenia do lasera z CadCraft Studio (Studio nie ma Web Serial) | Zapisz kod G i wyślij go programem dołączonym do lasera albo z Chrome lub Edge. Zobacz [Wyślij rysunek do lasera](topic:laser-cutting#send-from-the-browser). |

## Więzy i parametry

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Więzy na arkuszach, w blokach, na elipsach, splinach lub tekście | Nakładaj więzy na karcie {{ui:Model}}, na liniach, polilinijach, okręgach, łukach i punktach. |
| Gładkość (G2) oraz bezpośrednie więzy wypukłości łuku polilinii | Styczność i równość; odcinek łukowy podąża za swoimi dwoma końcami. |
| Wymiarowe więzy referencyjne (sterowane) oraz `3Point` w {{cmd:DCANGULAR}} | Zwykły wymiar (DIMLINEAR …) pokazuje wartość bez jej sterowania. |
| Wymiarowe więzy o stałym rozmiarze na papierze oraz ich drukowanie | Pokazują się tylko na ekranie; do wydruku dodaj zwykłe wymiary. |
| Więzy zachowane przez EXPLODE, BREAK, JOIN i inne polecenia tworzące nowe obiekty oraz na przyciętych polilinach | Nałóż je ponownie (AUTOCONSTRAIN pomaga). {{cmd:MIRROR}} i {{cmd:TRIM}} linii, łuków i okręgów je zachowują. |
| Tabele projektowe (konfiguracje) w CadCraft | Zmieniaj parametry w panelu. |
| Sprawdzony obieg tam i z powrotem z SolidWorks | Sprawdź szkic, który buduje makro, zanim na nim polegasz. |

## 3D

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Zaokrąglenia, fazki, powłoki i lofty; przeciąganie wzdłuż ścieżki, która się wznosi (ścieżki 3D) | Wyciągaj kontury z łukami, wypychaj i ciągnij ściany, obracaj i przeciągaj wzdłuż płaskich ścieżek. |
| Wyciąganie w innym kierunku niż w górę | Narysuj kształt na ziemi i wyciągnij go w górę lub w dół (w razie potrzeby ze zwężeniem lub wzdłuż ścieżki); potem obróć bryłę. |
| Wysokość i grubość obiektów 2D | Rysunek leży na ziemi (wysokość 0) na karcie 3D. |
| Edycja brył, regionów i ciał z innych programów; pokazywanie ich wewnątrz bloków; ich ściany na przeciąganych, loftowanych lub innych swobodnych powierzchniach; siatki wielościenne i wielokątne | Bryły w przestrzeni modelu pokazują się na karcie 3D tak, jak są, i są zapisywane z powrotem bez zmian w DWG; to, czego nie narysowano, jest wymienione przy otwarciu karty 3D. Poproś o siatki jako ściany 3D w przestrzeni modelu. Zobacz [Bryły z innych programów](topic:3d-solids#solids-from-other-programs). |
| Kopiowanie i wklejanie brył | Na karcie 3D użyj {{cmd:COPY}}. Schowek przechowuje tylko obiekty 2D. |
| Przekroje, widoki, które podążają za późniejszymi zmianami brył, oraz cieniowane bryły na wydrukowanych arkuszach | {{cmd:VIEWBASE}} umieszcza płaskie widoki (migawkę); po zmianie brył uruchom je ponownie. |
| Ustawienia materiałów, tekstur i oświetlenia | Style wizualne: cieniowany, krawędzie, linia ukryta, szkielet, rentgen. |
| Warstwy mapy drukowane, na obszarach widokowych arkuszy i na karcie 3D; obrazy z plików zapisanych z rysunkiem; położenie rysunku zapisywane dla innych programów w DWG 2000–2007 i DXF R12 | Warstwy mapy pokazują się pod przestrzenią modelu na ekranie; układ i lista warstw są zapisywane z rysunkiem: zobacz [Warstwy mapy pod rysunkiem](topic:map-layers). |
| Skany E57 powyżej 6 milionów punktów lub 512 MB, pliki własne producentów skanerów (RCP, RCS, FLS, LGS, TZF, ZFS), chmura punktów zapisana z rysunkiem lub wydrukowana, przyciąganie do chmury na karcie 3D, pionowe przekroje (sekcje) na karcie Model | Eksportuj duże skany lub skany producentów jako LAS lub LAZ ([Formaty chmur punktów](topic:point-cloud-formats)); dołączaj chmurę za każdym razem, gdy otwierasz rysunek; odrysuj z rzutu przekroju na karcie Model: zobacz [Odrysuj linie stanu faktycznego na chmurze punktów](topic:point-clouds). |
| Rejestracja skanów: samodzielne wyszukiwanie celów (kul, szachownic) w skanie, jednoczesne rozwiązywanie wszystkich skanów (wyrównanie wiązkowe), skala, rejestracja względem modelu | Wskaż pasujące punkty albo wpisz współrzędne celów, a potem dopracowuj jeden skan naraz metodą ICP: zobacz [Zarejestruj kilka skanów w jeden](topic:register-scans). |

## Procedury i dostosowywanie

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Skompilowany lub chroniony LISP (.fas, .vlx), programy natywne (.arx, .crx, .dbx) oraz VBA (.dvb) | Wczytaj źródło .lsp procedury za pomocą {{cmd:APPLOAD}}. |
| `grread` w LISP, reaktory (`vlr-…`), funkcje krzywych (`vlax-curve-…`), słowniki i dane rozszerzone, `acet-…` z Express Tools | Reszta języka działa: zobacz [Uruchamianie procedur LISP](topic:run-lisp). Wiersz poleceń podaje nazwę brakującej funkcji, gdy procedura do niej sięga. |
| Obrazy i slajdy w oknie dialogowym procedury | Pokazują się jako puste ramki; reszta okna działa. |
| CraftScript (.craft), Lua i Python w CadCraft | Uruchamiaj je w obszarze Script w PartCraft. |
| Listy warstw, kolorów i typów linii wewnątrz stylów menu wstążki | Użyj panelu {{ui:Warstwy}} i {{ui:Właściwości}}. |
| Pakiet startowy i aliasy zachowywane na Twoim komputerze lub synchronizowane | Są przechowywane w tej przeglądarce; aplikacja desktopowa i usługa w chmurze będą je przechowywać za Ciebie. W Studio pliki `acad.lsp` i `acaddoc.lsp` są odczytywane z folderu wsparcia, który wybierzesz (Wczytaj aplikacje). |

## Pomoc

Pomoc opisuje tę wersję. Gdy coś zostanie dodane, przenosi się z tej strony do przewodników.
