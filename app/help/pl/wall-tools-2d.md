---
title: Kształty ścian, przecięcia, odsunięcia i blokady dla ścian 2D
summary: Rysuj ściany jako prostokąty, wielokąty i łuki, dziel je i łącz ponownie, przesuwaj je o wymiar i blokuj jedną ścianę do innej albo do linii siatki. Te same narzędzia co ściany w BimCraft.
keywords: ściana, ściany, pasek ścian, przyciski ścian, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, styl połączenia, na ukos, płasko, na kwadrat, kłódka, uchwyt, przeciągnij koniec, obróć, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, połączenie, wyłącz połączenie, blokada, linia siatki, podział, przerwa, odsunięcie, linia osi
from: 49044181
---

Te narzędzia działają na ścianach 2D z polecenia `WALL` (zobacz „Rysuj inteligentne ściany, drzwi i okna w 2D”). Używają tych samych reguł co narzędzia ścian w BimCraft, więc ściana zachowuje się tak samo w obu.

## Gdzie są narzędzia

- Na pasku narzędzi grupa {{ui:Ściany}} ma {{ui:Ściana}}, {{ui:Prostokąt}}, {{ui:Podziel}} i {{ui:Odsuń}}. Jej menu {{ui:Więcej}} ma każde inne narzędzie ścian, z ikoną.
- W stylach menu wstążki karta {{ui:Ściany}} ma panele {{ui:Rysuj ściany}}, {{ui:Przecięcie}}, {{ui:Ustaw i zmień}}, {{ui:Zachowaj}} i {{ui:Połącz}}.
- W układzie arkusza wiersze narzędzi i skrzynka narzędzi pokazują tę samą grupę {{ui:Ściany}}.
- Możesz też wpisać dowolne polecenie wymienione niżej.

## Połączenia są zapisywane

Gdy koniec ściany trafia na inną ścianę, CadCraft zapisuje to połączenie przy obu ścianach. Nie wylicza już połączeń od nowa na podstawie tego, gdzie akurat leżą końce. Zatem:

- Ściany połączone z przesuwaną ścianą podążają za nią i zostają połączone. Ich końce ślizgają się po własnych liniach, więc nic się nie obraca.
- Przeciągnij jeden koniec ściany za jej uchwyt, a ściana połączona w tym miejscu zachowuje swój kierunek. Jej koniec ślizga się po własnej linii, aby spotkać przeciąganą ścianę, więc przeciągany koniec ląduje na tej linii, a nie zawsze pod kursorem. Podgląd pokazuje, gdzie. Ściana, która wbija się w przeciąganą, podąża wzdłuż własnej linii. Przeciąganie końca prosto wzdłuż ściany zmienia jej długość, a ściana połączona w tym miejscu porusza się razem z nią.
- `ROTATE` na połączonej ścianie działa tak samo: końce jej sąsiadów ślizgają się po własnych liniach do obróconej ściany.
- Aby przesunąć narożnik, zaznacz obie ściany, które się w nim spotykają, i przeciągnij uchwyt w narożniku. Obie ściany zostają w narożniku i obie się obracają. Ściany dalej zostają tam, gdzie były.
- Przytrzymaj {{key:Alt}}, gdy klikniesz nowe miejsce uchwytu, aby celowo zerwać połączenia: ściana idzie tam, gdzie ją wskazałeś, i nic za nią nie podąża.
- Jeśli przeciągnięcie obróciłoby połączoną ścianę przez jej własny daleki koniec, zostaje odrzucone i nic się nie zmienia.
- Ściana narysowana poleceniem {{ui:Zabroń połączeń}} (`D` w `WALL`) albo wyłączona we Właściwościach ({{ui:Zabroń połączenia na początku}}, {{ui:Zabroń połączenia na końcu}}) zostaje wolna na tym końcu, nawet gdy dotyka innej ściany, dopóki nie zezwolisz ponownie.
- `WALLDISJOIN` ({{ui:Zabroń połączenia}} w grupie {{ui:Ściany}}) robi to samo jednym kliknięciem: kliknij ścianę blisko jednego końca, aby zabronić połączeń na tym końcu, a kliknij ponownie, aby je zezwolić.
- Starszy rysunek nie ma jeszcze zapisanych połączeń. Pierwsza zmiana, którą wykonasz, znajduje je raz, na podstawie tego, jak ściany stały przed zmianą, i je zapisuje. `WALLJOINS` robi to od razu.
- Pliki DWG i DXF przechowują połączenia wewnątrz każdej ściany. CadCraft odczytuje je z powrotem tak, jak zapisano. Program, który nie przechowuje danych rozszerzonych, pokazuje ściany jako zwykłe bloki i gubi połączenia, a połączenie, którego ściany przesunięto w innym programie, zostaje usunięte przy następnej zmianie jednej z nich.

## Styl połączenia narożnika

Narożnik, w którym dwie ściany spotykają się końcami, jest rysowany na ukos, chyba że wybierzesz inny styl.

- `WALLJOINSTYLE` ({{ui:Styl połączenia}} w grupie {{ui:Ściany}}): kliknij narożnik. Każde kliknięcie przechodzi do następnego stylu: {{ui:Na ukos}}, {{ui:Płaskie}}, {{ui:Na kwadrat}}, a potem znów {{ui:Na ukos}}. Wpisz `T`, aby zmienić, która ze dwóch ścian przechodzi przez narożnik, w którym kliknąłeś ostatnio. Naciśnij {{key:Enter}}, aby zakończyć. Jedno uruchomienie polecenia to jeden krok cofnięcia.
- {{ui:Płaskie}}: jedna ściana przechodzi aż do dalszej powierzchni drugiej, a druga zatrzymuje się przy jej boku. {{ui:Na kwadrat}}: tak samo, ale ściana, która przechodzi, kończy się prostopadle do siebie. Przy kącie prostym oba wyglądają tak samo.
- We Właściwościach ściany: {{ui:Styl połączenia na początku}}, {{ui:Styl połączenia na końcu}} oraz {{ui:Przebiega dalej na początku}}, {{ui:Przebiega dalej na końcu}}.
- Styl jest zapisywany przy obu ścianach i przechodzi do plików DWG i DXF. Kopia ściany zaczyna bez niego.
- Połączenie T nie ma stylu do wyboru: przechodzi ta ściana, do której dotyka bok. Narożnik, w którym spotyka się trzy lub więcej ścian, pozostaje na ukos. Tak samo bardzo ostry narożnik (poniżej około 30 stopni) i dwie ściany w jednej linii.

## Rysuj kształty ścian

Każde z nich tworzy ściany w jednym kroku cofnięcia, z połączonymi narożnikami. W `WALL` `O` ustawia przesunięcie umieszczenia (jak daleko w lewo od twoich kliknięć idzie ściana), a `D` wyłącza łączenie dla ścian, które narysujesz następnie.

- `WALLRECT` (`WR`): dwa przeciwległe narożniki, jak `RECTANG`.
- `WALLROT`: pierwszy bok, a potem jak daleko wychodzi drugi bok, dla prostokąta pod dowolnym kątem.
- `WALLPOLY` (`WP`): liczba boków (od 3 do 64), środek, `I` dla wpisanego albo `C` dla opisanego, a potem promień, jak `POLYGON`: kliknij go albo wpisz (wpisany promień biegnie w kierunku wskaźnika albo wzdłuż X, gdy wskaźnik nadal jest na środku).
- `WALLARC` (`WARC`): środek, początek, koniec. `D` odwraca łuk w drugą stronę.
- `WALLTAN`: kliknij blisko końca ściany, a potem koniec łuku, który odchodzi wzdłuż tej ściany.
- `WALLPICK`: kliknij linię albo polilinię i powiedz, czy wziąć także linie do niej połączone.
- `WALLTRACE`: kliknij wewnątrz zamkniętego obszaru linii i ścian, aby postawić wokół niego najmniejsze ściany.

Plan ścian jest prosty, więc łuk jest rysowany jako krótkie proste ściany po 15 stopni każda. Łączą się jak każdy narożnik.

## Tnij ściany

- `WALLSPLIT` (`WS`): kliknij ścianę, a potem punkt. `C` tnie tam, gdzie przecina ją inna ściana, `G` zostawia przerwę między częściami, `F` zostawia końce cięcia wolne zamiast połączonych. Pierwsza część zachowuje miejsce ściany w rysunku, a drzwi i okna idą z częścią, do której należą. Cięcie przez drzwi albo okno jest odrzucane.
- `WALLSPLITGAP` ({{ui:Podziel z przerwą}}): to samo podzielenie, ale najpierw pyta o przerwę.
- `WALLDELSEG`: kliknij ścianę, a potem dwa końce kawałka do usunięcia.
- `WALLREJOIN`: kliknij dwie części jednej ściany, aby znów były jedną.

## Przesuwaj ściany o odległość

- `WALLDIM` ({{ui:Edytuj wymiarem}}): kliknij wymiar liniowy albo równoległy, biegnący od jednej ściany do drugiej, a potem wpisz nową wartość. Ściana na dalszym końcu przesuwa się prostopadle do siebie, ściana na pierwszym końcu zostaje na miejscu, a ściany połączone z nią podążają. Daleki punkt wymiaru przesuwa się razem z ścianą, więc wymiar pokazuje wpisaną wartość.
- `WALLOFFSET` (`WO`): kliknij ścianę, a potem stronę, na którą ją przesunąć (`D` wpisuje odległość, `C` tworzy zamiast tego kopię).
- `WALLSTRETCH`: okno wokół końców ścian, a potem punkt bazowy i drugi punkt.
- We Właściwościach wpisana {{ui:Długość}} zachowuje początek i zabiera ze sobą ścianę połączoną na dalekim końcu, a nowa {{ui:Grubość}} rośnie od wybranej {{ui:Linii osi}} (lewej powierzchni, prawej powierzchni albo środka).

## Wymiar między osiami ścian

Oś ściany nie jest rysowana, ale przyciąganie do obiektów ją znajduje. Przy włączonym przyciąganiu do obiektów ({{key:F3}}) najedź kursorem na środek grubości ściany: znacznik odczytuje `Oś ściany: koniec` albo `Oś ściany: punkt środkowy`, a oś pokazuje się jako linia przerywana, gdy znacznik na niej stoi. Przy włączonym {{ui:Prostopadle}} albo {{ui:Najbliższy}} na liście przyciągania do obiektów działają także na osi.

1. Uruchom `DIMLINEAR` (albo `DIMALIGNED`).
2. Kliknij pierwszą ścianę tam, gdzie znacznik odczytuje `Oś ściany: punkt środkowy` albo `Oś ściany: koniec`.
3. Kliknij drugą ścianę w ten sam sposób, a potem kliknij miejsce, gdzie ma pójść linia wymiaru.
4. Aby zmienić odległość, uruchom `WALLDIM`, kliknij wymiar i wpisz nową wartość. Druga ściana się przesunie.

Przyciąganie do osi działa we wszystkich poleceniach, które pytają o punkt.

## Blokuj ściany

Blokada zostaje przy ścianie w pliku. Jeśli przesuniesz jedną zablokowaną ścianę, druga podąża. Jeśli jedna zmiana przesuwa obie ściany różnie, zostaje odrzucona i nic się nie zmienia.

- `WALLHOLD`: zablokuj ścianę do innej ściany. `A` najpierw przenosi ją na linię tamtej ściany, `K` zachowuje odległość, którą ma.
- `WALLHOLDDIM`: zablokuj odległość między dwiema równoległymi ścianami.
- `WALLGRID`: zablokuj ścianę do linii siatki (linii na warstwie siatki z jej znacznikiem w tekście na jednym końcu), wzdłuż niej albo z jednym końcem na niej. Ściana zablokowana wzdłuż linii zachowuje odległość, którą od niej ma. Przesuń linię siatki poleceniem `GRIDMOVE`, a ściana podąży w całości, razem z połączonymi ścianami. Ściana leżąca wzdłuż linii siatki przesuwa się w całości razem z nią nawet bez blokady, a ściana tylko kończąca się na linii jest rozciągana przez ten koniec.
- `WALLHOLDS` wypisuje blokady. `WALLUNHOLD` zdejmuje blokady ze ściany.
- Każda blokada pokazuje małą kłódkę w planie: obok środka zablokowanej ściany albo obok końca zablokowanego do linii siatki. Kliknij kłódkę, aby zdjąć tę blokadę.

## Czego jeszcze nie ma

Blokady używają linii osi ścian. Ściany nie mają tu warstw, więc nie ma priorytetu warstw na złączu, a ściany nie są zakrzywione (zobacz łuki wyżej). Nikt jeszcze nie wypróbował tych narzędzi na dużym rysunku i nie sprawdzono ich w innym programie CAD.
