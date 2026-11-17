---
title: Zarejestruj kilka skanów w jeden
summary: Ustaw skany wykonane z różnych stanowisk w jednym układzie za pomocą wskazanych par punktów lub wpisanych celów, doprecyzuj je metodą ICP, zapisz rejestrację jako projekt i wyeksportuj zarejestrowaną chmurę jako LAS lub E57. Polecenie to REGISTERSCANS.
keywords: rejestracja, rejestruj, skany, chmura punktów, icp, iteracyjny najbliższy punkt, cele, pary punktów, sztywne przekształcenie, wyrównaj, scal, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Co zrobisz

Kilka skanów tego samego miejsca (każdy z własnego stanowiska skanera) zaczyna w swoich współrzędnych. Zarejestruj je: nadaj każdemu skanowi jedno umiejscowienie, tak aby wszystkie znajdowały się w jednym układzie, zapisz to jako projekt i zapisz zarejestrowaną chmurę w jednym pliku LAS lub E57.

## Ustaw skany

1. Otwórz okno dialogowe (wpisz `REGISTERSCANS` (lub `REGSCAN`)). {{ui:Dodaj skany…}} przyjmuje pliki LAS, LAZ, E57, PLY, PCD, PTX, PTS lub XYZ albo możesz upuścić je na okno dialogowe. Skany w różnych jednostkach są odrzucane z uwagą: najpierw przelicz jeden z nich.
2. Wybierz {{ui:Skan do przesunięcia}} i {{ui:Ustaw względem}}. Podgląd pokazuje każdy skan w kadrze w jego obecnym stanie, każdy w innym kolorze: {{ui:Rzut}}, {{ui:Przód}} lub {{ui:Bok}}; przeciągnij, aby przesunąć widok, użyj kółka myszy, aby powiększyć.
3. **Według par punktów.** Kliknij {{ui:Wskaż parę}}, potem punkt na skanie do przesunięcia, a następnie to samo miejsce na innym skanie (narożnik, cel, podstawa słupa). Zrób to co najmniej trzy razy, z punktami, które nie leżą na jednej linii i są rozłożone. Kliknij {{ui:Ustaw według par}}: skan zostanie ustawiony metodą najmniejszych kwadratów, a **Pozostało** pokazuje, o ile każda para nadal nie trafia. Para z dużą liczbą to zły wybór: usuń ją krzyżykiem i ustaw ponownie.
4. **Według celów.** Jeśli znane są rzeczywiste współrzędne punktu (geodezyjne cele), kliknij {{ui:Wskaż, potem wpisz cel}}, kliknij punkt na jego skanie i wpisz X, Y i Z celu w wierszu. Pary i wpisane cele można dowolnie mieszać.

## Doprecyzowanie metodą ICP

Pary dają wstępne położenie. {{ui:Doprecyzuj}} przesuwa skan, aż jego powierzchnie przylegają do powierzchni drugiego skanu: najpierw **punkt do punktu**, potem **punkt do płaszczyzny**. Tabela pokazuje każdy krok z jego błędem i liczbą dopasowanych punktów; linia nad nią pokazuje spadek błędu. {{ui:Stop}} kończy przebieg po bieżącym kroku i zachowuje osiągnięty wynik. {{ui:Cofnij}} cofa cały przebieg (lub ostatnie umieszczenie); {{ui:Resetuj}} przywraca skan do współrzędnych z pliku.

Aby działało szybko na laptopie, ICP pracuje na przerzedzonej części punktów ({{ui:Użyte punkty}}, od 5,000 do 60,000) i ignoruje dopasowania dalsze niż {{ui:Największa odległość dopasowania}} (domyślnie 5% rozmiaru skanu, zmniejszane w miarę zbieżności). Potrzebne jest najpierw przybliżone ustawienie: skany, które ledwo się nakładają, zgłaszają, że nie da się ich dopasować. Powierzchnie tylko płaskie lub tylko proste nie pozwalają ustalić położenia wzdłuż siebie; w takim przypadku dodaj pary.

## Zapis i eksport

- {{ui:Zapisz projekt}} zapisuje mały plik `.ccscans.json`: nazwę każdego skanu, rozmiar i odcisk jego pierwszych 64 KB wraz z przekształceniem. Nie zawiera punktów. {{ui:Otwórz projekt…}} odnajduje pliki skanów po tych odwołaniach (pliki muszą być wcześniej dodane) i przywraca wszystkie przekształcenia.
- {{ui:Eksportuj LAS}} i {{ui:Eksportuj E57}} zapisują jeden plik ze wszystkimi skanami w ich zarejestrowanym miejscu. Punkty w oryginałach nigdy nie są przepisywane; przekształcenie jest stosowane przy eksporcie. Gdy {{ui:Czytaj każdy punkt z plików}} jest włączone, każdy plik jest czytany ponownie dla każdego punktu (do 20 milionów na skan); gdy wyłączone, zapisywane są tylko punkty widoczne w podglądzie.
- {{ui:Pokaż zarejestrowaną chmurę}} (CadCraft) zapisuje LAS i dołącza go pod rysunkiem we własnych współrzędnych, jak każdą chmurę.

:::note
Nic nie jest wysyłane. Rejestracja działa w jednostkach plików i zachowuje milimetry: LAS zapisywany jest ze skalą, która pasuje (do 0.1 mm), a E57 z liczbami zmiennoprzecinkowymi podwójnej precyzji. Układ współrzędnych jest przenoszony do LAS tylko wtedy, gdy każdy skan podaje ten sam kod EPSG. Zapis E57 jest naszą własną implementacją; jest sprawdzany przez odczyt jego plików tym samym czytnikiem oraz przez libE57Format.
:::
