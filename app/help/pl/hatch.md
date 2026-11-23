---
title: Kreskowanie i wypełnienia obszarów
summary: Wypełnij obszar kolorem jednolitym albo standardowym wzorcem, klikając wewnątrz niego lub wskazując zamknięte kształty, ustaw skalę i kąt wzorca i zmieniaj kreskowanie później.
keywords: kreskowanie, bhatch, wypełnienie, wypełnienie jednolite, wzorzec, ansi31, ansi37, cegła, ziemia, siatka, linie przekroju, poché, wyspa, granica, skala, kąt
from: e7feb344
---

## Co wykonasz

Przekrój ściany wypełniony wzorcem ANSI31, kolumna w nim pozostawiona pusta i wypełnienie jednolite w kolumnie.

## Kreskowanie przez kliknięcie wewnątrz obszaru

1. Narysuj prostokąt (`REC`, `0,0`, `@2000,1200`) i okrąg w jego wnętrzu (`C`, `1000,600`, `300`). Wybierz {{ui:Zasięg}}.
2. Wybierz {{ui:Kreskowanie}} w grupie {{ui:Rysuj}} albo wpisz `H` i naciśnij {{key:Enter}}. Historia podaje, który wzorzec jest bieżący, na przykład `Current hatch: ANSI31, scale 1, angle 0°`.
3. Wpisz `P` i naciśnij {{key:Enter}}, wpisz `ANSI31` i naciśnij {{key:Enter}}.
4. Wpisz `SC` i naciśnij {{key:Enter}}, wpisz `20` i naciśnij {{key:Enter}}. Rozmiary wzorca są na papierze, więc rysunek drukowany w skali 1:20 potrzebuje skali 20.
5. Przy `Wskaż punkt wewnętrzny` kliknij wewnątrz prostokąta, poza okręgiem. Kreskowanie pojawia się jako podgląd.
6. Naciśnij {{key:Enter}}. Prostokąt zostaje pokreskowany; okrąg w środku pozostaje pusty, bo jest wyspą.

Kliknij wewnątrz kilku obszarów przed naciśnięciem {{key:Enter}}, aby utworzyć z nich jedno kreskowanie. `U` cofa ostatni obszar.

## Wypełnienie jednolite

1. Wpisz `H` i naciśnij {{key:Enter}}.
2. Wpisz `P`, naciśnij {{key:Enter}}, wpisz `SOLID` i naciśnij {{key:Enter}}.
3. Kliknij wewnątrz okręgu, a potem naciśnij {{key:Enter}}.

## Kreskowanie wskazanych zamkniętych kształtów

Zamiast klikać wewnątrz, wpisz `S` (Wybierz obiekty) przy `Wskaż punkt wewnętrzny` i wskaż zamknięte polilinie, okręgi albo zamknięte elipsy, a potem naciśnij {{key:Enter}}. Kształty leżące wewnątrz innych pozostają puste na przemian (zewnętrzny pokreskowany, następny pusty i tak dalej).

## Wzorce

Na pytanie o wzorzec wpisz `?`, aby zobaczyć listę. Standardowe to ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS i EARTH oraz SOLID. W rysunku w calach (albo z stopami i calami jako formatem długości) używa się rozmiarów wzorców w calach, jak w AutoCAD; w pozostałych przypadkach — rozmiarów w milimetrach.

{{ui:Kąt}} (`A`) obraca cały wzorzec: ANSI31 pod kątem 90° biegnie w drugą stronę.

**Pliki wzorców.** Wpisz `F` (Plik wzorca) przy `Wskaż punkt wewnętrzny` i wybierz plik `.pat`. Wzorce z niego dołączają do listy; gdy jest ich więcej, zostaniesz zapytany, który użyć. Plik bez wzorca, który CadCraft umie odczytać, o tym informuje, a pominięte wzorce są liczone. Rozmiary w pliku `.pat` nie mają własnej jednostki, więc są odczytywane w jednostkach rysunku. Wypróbowano tylko pliki zapisane w zwykłym formacie `.pat`; żadnego zapisanego przez inny program.

## Zmiana kreskowania

Wybierz je (kliknij jedną z jego linii). We {{ui:Właściwościach}}: {{ui:Wzorzec}}, {{ui:Skala wzorca}} i {{ui:Kąt wzorca}}. Kreskowania z otwartych rysunków pokazują swój wzorzec, gdy jest jednym ze standardowych; inne pokazują się jako jasny odcień ich koloru.

## Częste błędy

- **„Brak zamkniętej granicy wokół tego punktu.”** W konturze jest przerwa albo część jest poza ekranem: CadCraft patrzy tylko na to, co widać na ekranie. Zamknij przerwę (powiększ narożniki) albo oddal widok.
- **„Wzorzec jest za gęsty, aby go narysować w tej skali.”** Linie byłyby bliżej siebie, niż rysunek potrafi pokazać. Użyj większej skali: spróbuj skali wydruku (20 dla 1:20).
- **Wzorzec wygląda ogromnie albo malutko.** Skala jest w jednostkach rysunku na jednostkę wzorca; zobacz krok 4 powyżej.
- **Kreskowanie przestało podążać za konturem.** Kreskowanie utworzone {{cmd:HATCH}} zostaje przy obiektach, z których powstało: przesuń, obróć lub skaluj kontur, a kreskowanie pójdzie za nim; przekształć je uchwytem, a kreskowanie zostanie przeliczone. Połączenie kończy się, gdy kontur przestaje się zamykać, gdy sam kreskowanie przekształcisz ręcznie albo gdy je przytniesz, a wiersz poleceń o tym informuje. Nic nie zostaje utracone: wypełnij obszar ponownie, aby połączyć go na nowo.

## Kreskowanie, które zostaje przy swojej granicy

Kreskowanie utworzone poleceniem `HATCH` pamięta, co je ogranicza. Przesuń, obróć lub skaluj granicę, a kreskowanie i jego wzorzec pójdą za nią. Przeciągnij uchwyt, aby przekształcić granicę, a kreskowanie zostanie przeliczone. Przesuń samo kreskowanie, a jego granica też pójdzie, jak wypełniony kształt w programie do rysowania.

Połączenie kończy się, a wiersz poleceń o tym informuje, gdy granica przestaje się zamykać albo gdy przekształcisz kreskowanie ręcznie. Samo kreskowanie zostaje. Wpisz `AS` podczas kreskowania, aby tworzyć kreskowania samodzielne. Skopiowane kreskowanie razem z granicą ma własne połączenie.

`HATCHEDIT` (`HE`) zmienia wzorzec, skalę, kąt i początek kreskowania oraz łączy je z granicą albo kończy połączenie. Połączenie jest zapisywane w plikach DWG i DXF 2000. Plik DXF R12 nie ma obiektu kreskowania, a połączenia zrobione w innych programach nie są odczytywane: w takich przypadkach użyj `HATCHEDIT` i Połącz.

Kreskowanie, które nie ma już granicy (granicę usunięto albo plik przyszedł bez niej), może ją odzyskać: `HATCHGENERATEBOUNDARY` (`HGB`) rysuje zamkniętą polilinię wokół każdej pętli kreskowania i, jeśli odpowiesz Tak, łączy kreskowanie z nimi.

## Wypełnienie gradientem

`GRADIENT` (`GD`) wypełnia obszar gradientem zamiast wzorca: te same wskazania co `HATCH`, po czym pyta o typ (liniowy, cylindryczny, sferyczny, półsferyczny, krzywoliniowy i każdy z nich odwrócony), jeden kolor z odcieniem albo dwa kolory, kąt oraz wyśrodkowanie. W `HATCH` opcja `G` robi to samo. `HATCHEDIT` `G` albo {{ui:Właściwości}} w sekcji Gradient zmienia gradient albo zamienia dowolne kreskowanie w gradient.

Gradient widać na ekranie i w wydrukach. Zapisany jako DWG 2004 lub nowszy, inne programy dostaną prawdziwe kreskowanie gradientowe. DXF 2000 i DWG 2000 nie mają gradientu: CadCraft zachowuje go tylko dla siebie, a inne programy widzą wypełnienie jednolite pierwszym kolorem.

## Przycinanie kreskowania

`TRIM` tnie kreskowanie jak każdy inny obiekt. Kliknij kreskowanie po tej stronie krawędzi tnącej, którą chcesz usunąć: krawędzie dzielą obszar kreskowania, a kawałek, który wskazałeś, zostaje usunięty. W trybie Szybkim każdy obiekt jest krawędzią tnącą; przy wielu obiektach wybierz najpierw krawędzie (opcja `T`). Przycięte kreskowanie nie jest już połączone z granicą, bo już jej nie wypełnia.
