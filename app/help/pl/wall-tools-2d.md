---
title: Kształty ścian, cięcia, odsunięcia i blokady ścian 2D
summary: Rysuj ściany jako prostokąty, wielokąty i łuki, dziel je i łącz ponownie, przesuwaj o wymiar i blokuj jedną ścianę do innej lub do linii siatki. Te same narzędzia co ściany w BimCraft.
keywords: ściana, pasek ścian, przyciski ścian, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, styl połączenia, na ukos, płaskie, na kwadrat, kłódka, uchwyt, przeciągnij koniec, obrót, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, połączenie, zabroń połączenia, blokada, linia siatki, podział, przerwa, odsunięcie, linia położenia
from: f41e7433
---

Te narzędzia działają na ścianach 2D utworzonych poleceniem `WALL` (zobacz „Rysuj inteligentne ściany, drzwi i okna w 2D”). Stosują te same zasady co narzędzia ścian w BimCraft, więc ściana zachowuje się tak samo w obu programach.

## Gdzie są narzędzia

- Na pasku narzędzi grupa {{ui:Ściany}} ma {{ui:Ściana}}, {{ui:Prostokąt}}, {{ui:Podziel}} i {{ui:Odsuń}}. Jej menu {{ui:Więcej}} zawiera wszystkie pozostałe narzędzia ścian, każde z ikoną.
- W stylach menu wstążki karta {{ui:Ściany}} ma panele {{ui:Rysuj ściany}}, {{ui:Wytnij}}, {{ui:Ustaw i zmień}}, {{ui:Zachowaj}} i {{ui:Połącz}}.
- W układzie wiersze narzędzi i skrzynka narzędzi pokazują tę samą grupę {{ui:Ściany}}.
- Możesz też wpisać dowolne polecenie wymienione poniżej.

## Połączenia są zapisywane

Gdy koniec ściany trafia na inną ścianę, CadCraft zapisuje to połączenie razem z obiema ścianami. Nie wylicza go już na nowo na podstawie tego, gdzie leżą końce. Zatem:

- Ściany połączone z przesuwaną ścianą podążają za nią i pozostają połączone. Ich końce ślizgają się po swoich własnych liniach, więc nic się nie obraca.
- Przeciągnij jeden koniec ściany za jej uchwyt, a ściana połączona w tym miejscu zachowa swój kierunek. Jej koniec przesuwa się po własnej linii, aby spotkać przeciąganą ścianę, więc przeciągnięty koniec ląduje na tej linii, a nie zawsze pod kursorem. Podgląd pokazuje, gdzie. Ściana, która styka się z przeciąganą ścianą, podąża za nią po własnej linii. Przeciągnięcie końca prosto wzdłuż ściany zmienia jej długość, a ściana połączona w tym miejscu przesuwa się razem z nim.
- `ROTATE` na połączonej ścianie działa tak samo: końce jej sąsiadów ślizgają się po swoich liniach do obróconej ściany.
- Aby przesunąć narożnik, zaznacz obie ściany, które się w nim spotykają, i przeciągnij uchwyt na narożniku. Obie ściany pozostają w narożniku i obie się obracają. Ściany dalej w ciągu pozostają bez zmian.
- Przytrzymaj {{key:Alt}}, klikając nowe miejsce uchwytu, aby celowo rozłączyć połączenia: ściana trafia tam, gdzie ją umieściłeś, i nic za nią nie podąża.
- Jeśli przeciągnięcie obróciłoby połączoną ścianę z powrotem przez jej dalszy koniec, zostaje odrzucone i nic się nie zmienia.
- Ściana narysowana z {{ui:Zabroń łączenia}} (`D` w `WALL`) albo wyłączona we Właściwościach ({{ui:Zabroń połączenia na początku}}, {{ui:Zabroń połączenia na końcu}}) pozostaje wolna na tym końcu, nawet jeśli dotyka innej ściany, dopóki nie zezwolisz na połączenie ponownie.
- `WALLDISJOIN` ({{ui:Zabroń połączenia}} w grupie {{ui:Ściany}}) robi to samo jednym kliknięciem: kliknij ścianę blisko jednego końca, aby zabronić połączeń na tym końcu, i kliknij ponownie, aby je znów dopuścić.
- Starszy rysunek nie ma jeszcze zapisanych połączeń. Pierwsza Twoja zmiana odnajduje je raz, na podstawie tego, jak ściany stały przed zmianą, i zapisuje. `WALLJOINS` robi to od razu.
- Pliki DWG i DXF przechowują połączenia wewnątrz każdej ściany. CadCraft odczytuje je z powrotem tak, jak zostały zapisane. Program, który nie zachowuje danych rozszerzonych, pokazuje ściany jako zwykłe bloki i gubi połączenia; połączenie, którego ściany zostały przesunięte w innym programie, jest gubione przy następnej zmianie jednej z nich.

## Styl połączenia narożnika

Narożnik, w którym dwie ściany stykają się końcami, jest rysowany na ukos, chyba że wybierzesz inny styl.

- `WALLJOINSTYLE` ({{ui:Styl połączenia}} w grupie {{ui:Ściany}}): kliknij narożnik. Każde kliknięcie przechodzi do następnego stylu: {{ui:Na ukos}}, {{ui:Płaskie}}, {{ui:Na kwadrat}}, a potem znów {{ui:Na ukos}}. Wpisz `T`, aby zmienić, która z dwóch ścian przechodzi przez narożnik, w którym kliknąłeś ostatnio. Naciśnij {{key:Enter}}, aby zakończyć. Jedno uruchomienie polecenia to jeden krok cofnięcia.
- {{ui:Płaskie}}: jedna ściana przechodzi aż do dalszej powierzchni drugiej, a druga zatrzymuje się przy jej boku. {{ui:Na kwadrat}}: tak samo, ale ściana przechodząca kończy się prostopadle do samej siebie. Przy kącie prostym oba wyglądają tak samo.
- We Właściwościach ściany: {{ui:Styl połączenia na początku}}, {{ui:Styl połączenia na końcu}} oraz {{ui:Przebiega dalej na początku}}, {{ui:Przebiega dalej na końcu}}.
- Styl jest zapisywany razem z obiema ścianami i przechodzi do plików DWG i DXF. Kopia ściany zaczyna bez niego.
- Połączenie T nie ma stylu do wyboru: przechodzi ściana, do której przylega bok drugiej. Narożnik, w którym spotyka się trzy lub więcej ścian, pozostaje na ukos. Tak samo bardzo ostry narożnik (poniżej około 30 stopni) i dwie ściany leżące w jednej linii.

## Rysuj kształty ścian

Każde z nich tworzy ściany w jednym kroku cofnięcia, z połączonymi narożnikami. W `WALL` `O` ustawia przesunięcie umieszczenia (jak daleko w lewo od kliknięć idzie ściana), a `D` wyłącza łączenie dla ścian, które narysujesz dalej.

- `WALLRECT` (`WR`): dwa przeciwległe narożniki, jak w `RECTANG`.
- `WALLROT`: pierwszy bok, potem jak daleko sięga drugi bok, dla prostokąta pod dowolnym kątem.
- `WALLPOLY` (`WP`): liczba boków (od 3 do 64), środek, `I` dla wpisanego albo `C` dla opisanego, potem promień, jak w `POLYGON`.
- `WALLARC` (`WARC`): środek, początek, koniec. `D` odwraca łuk na drugą stronę.
- `WALLTAN`: kliknij blisko końca ściany, potem koniec łuku, który odchodzi wzdłuż tej ściany.
- `WALLPICK`: kliknij linię lub polilinię i określ, czy wziąć też linie połączone z nią.
- `WALLTRACE`: kliknij wewnątrz zamkniętego obszaru linii i ścian, aby postawić ściany wokół najmniejszego z nich.

Ściany planu są proste, więc łuk jest rysowany jako krótkie ściany proste po 15 stopni każda. Łączą się jak każdy narożnik.

## Tnij ściany

- `WALLSPLIT` (`WS`): kliknij ścianę, potem punkt. `C` tnie tam, gdzie przecina ją inna ściana, `G` zostawia przerwę między częściami, `F` sprawia, że końce cięcia są wolne zamiast połączone. Pierwsza część zachowuje miejsce ściany w rysunku, a drzwi i okna idą z tą częścią, do której należą. Cięcie przez drzwi lub okno zostaje odrzucone.
- `WALLSPLITGAP` ({{ui:Podziel z przerwą}}): ten sam podział, ale najpierw pyta o przerwę.
- `WALLDELSEG`: kliknij ścianę, potem dwa końce fragmentu do usunięcia.
- `WALLREJOIN`: kliknij dwie części jednej ściany, aby znów zrobić z nich jedną.

## Przesuwaj ściany o odległość

- `WALLDIM`: kliknij wymiar liniowy lub równoległy, który biegnie od jednej ściany do drugiej, potem wpisz nową wartość. Ściana na dalszym końcu przesuwa się prostopadle do siebie, ściana na pierwszym końcu pozostaje na miejscu, a połączone z nią ściany podążają za nią.
- `WALLOFFSET` (`WO`): kliknij ścianę, potem stronę, na którą ją przesunąć (`D` wpisuje odległość, a `C` tworzy zamiast tego kopię).
- `WALLSTRETCH`: okno dookoła końców ścian, potem punkt bazowy i drugi punkt.
- We Właściwościach wpisana {{ui:Długość}} zachowuje początek i zabiera ze sobą ścianę połączoną na dalszym końcu, a nowa {{ui:Grubość}} rośnie od {{ui:Linia położenia}}, którą wybrałeś (lewa powierzchnia, prawa powierzchnia lub środek).

## Blokuj ściany

Blokada pozostaje przy ścianie w pliku. Jeśli przesuniesz jedną zablokowaną ścianę, druga podąża za nią. Jeśli jedna zmiana przesuwa obie ściany różnie, zostaje odrzucona i nic się nie zmienia.

- `WALLHOLD`: zablokuj ścianę do innej ściany. `A` najpierw przesuwa ją na linię tamtej ściany, `K` zachowuje odległość, jaką ma.
- `WALLHOLDDIM`: zablokuj odległość między dwiema równoległymi ścianami.
- `WALLGRID`: zablokuj ścianę do linii siatki (linii na warstwie siatki z jej etykietą w tekście na jednym końcu), wzdłuż niej albo z jednym końcem na niej. Ściana zablokowana wzdłuż linii zachowuje swoją odległość od niej. Przesuń linię siatki poleceniem `GRIDMOVE`, a ściana podąży za nią w całości, razem z połączonymi ścianami. Ściana leżąca wzdłuż linii siatki przesuwa się w całości razem z nią nawet bez blokady, a ściana, która tylko kończy się na linii, jest rozciągana przez ten koniec.
- `WALLHOLDS` wypisuje blokady. `WALLUNHOLD` zdejmuje blokady ze ściany.
- Każda blokada pokazuje na planie małą kłódkę: obok środka zablokowanej ściany albo obok końca, który jest zablokowany do linii siatki. Kliknij kłódkę, aby zdjąć tę blokadę.

## Czego tu jeszcze nie ma

Blokady używają linii osi ścian. Ściany tutaj nie mają warstw, więc nie ma priorytetu warstw w węźle, a ściany nie są zakrzywione (zobacz łuki wyżej). Nikt nie próbował tych narzędzi na dużym rysunku i nie sprawdzono ich w innym programie CAD.
