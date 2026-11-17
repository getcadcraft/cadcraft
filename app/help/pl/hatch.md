---
title: Kreskowanie i wypełnianie obszarów
summary: Wypełnij obszar jednolitym kolorem lub standardowym wzorcem, klikając wewnątrz niego albo wybierając zamknięte kształty; ustaw skalę i kąt wzorca oraz zmieniaj kreskowanie później.
keywords: kreskowanie, bhatch, wypełnienie, wypełnienie jednolite, wzorzec, ansi31, ansi37, cegła, ziemia, siatka, linie przekroju, poché, wyspa, granica, skala, kąt
from: 14399174
---

## Co wykonasz

Przekrój ściany wypełniony wzorcem ANSI31, kolumnę w nim pozostawioną pustą oraz jednolite wypełnienie w kolumnie.

## Kreskowanie przez kliknięcie wewnątrz obszaru

1. Narysuj prostokąt (`REC`, `0,0`, `@2000,1200`) i okrąg wewnątrz niego (`C`, `1000,600`, `300`). Kliknij {{ui:Extents}}.
2. Kliknij {{ui:Hatch}} w grupie {{ui:Draw}} albo wpisz `H` i naciśnij {{key:Enter}}. Historia pokazuje, który wzorzec jest bieżący, na przykład `Current hatch: ANSI31, scale 1, angle 0°`.
3. Wpisz `P` i naciśnij {{key:Enter}}, wpisz `ANSI31` i naciśnij {{key:Enter}}.
4. Wpisz `SC` i naciśnij {{key:Enter}}, wpisz `20` i naciśnij {{key:Enter}}. Rozmiary wzorców są podawane na papierze, więc rysunek wydrukowany w skali 1:20 wymaga skali 20.
5. Przy `Wskaż punkt wewnętrzny` kliknij wewnątrz prostokąta, poza okręgiem. Kreskowanie pojawi się jako podgląd.
6. Naciśnij {{key:Enter}}. Prostokąt zostanie wykreskowany; okrąg w środku pozostanie pusty, ponieważ jest wyspą.

Kliknij w kilku obszarach przed naciśnięciem {{key:Enter}}, aby utworzyć z nich jedno kreskowanie. `U` cofa ostatni obszar.

## Wypełnienie jednolite

1. Wpisz `H` i naciśnij {{key:Enter}}.
2. Wpisz `P`, naciśnij {{key:Enter}}, wpisz `SOLID` i naciśnij {{key:Enter}}.
3. Kliknij wewnątrz okręgu, a następnie naciśnij {{key:Enter}}.

## Kreskowanie wybranych zamkniętych kształtów

Zamiast klikać wewnątrz, wpisz `S` (Wybierz obiekty) przy `Wskaż punkt wewnętrzny` i wskaż zamknięte polilinie, okręgi lub zamknięte elipsy, a następnie naciśnij {{key:Enter}}. Kształty leżące wewnątrz innych pozostają puste na przemian (zewnętrzny wykreskowany, następny pusty i tak dalej).

## Wzorce

Wpisz `?` przy pytaniu o wzorzec, aby zobaczyć listę. Standardowe wzorce to od ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH oraz SOLID. W rysunku w calach (lub z długością w stopach i calach) używane są rozmiary wzorców w calach, jak w AutoCAD; w pozostałych przypadkach – rozmiary w milimetrach.

{{ui:Angle}} (`A`) obraca cały wzorzec: ANSI31 pod kątem 90° nachylony jest w drugą stronę.

**Pliki wzorców.** Wpisz `F` (Plik wzorca) przy `Wskaż punkt wewnętrzny` i wybierz plik `.pat`. Wzorce z niego dołączają do listy; gdy jest ich więcej, program zapyta, którego użyć. Plik bez wzorców, które CadCraft potrafi odczytać, zostanie o tym zgłoszony, a każdy pominięty wzorzec zostanie policzony. Rozmiary w pliku `.pat` nie mają własnej jednostki, więc są odczytywane w jednostkach rysunku. Wypróbowano tylko pliki zapisane w zwykłym formacie `.pat`; żaden nie został utworzony w innym programie.

## Zmiana kreskowania

Zaznacz je (kliknij jedną z jego linii). W {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} i {{ui:Pattern angle}}. Kreskowania z otwartych rysunków pokazują swój wzorzec, gdy jest to jeden ze standardowych; pozostałe są widoczne jako jasny odcień ich koloru.

## Typowe błędy

- **„Brak zamkniętej granicy wokół tego punktu.”** W konturze jest luka albo jego część leży poza ekranem: CadCraft patrzy tylko na to, co jest widoczne. Zamknij lukę (przybliż narożniki) albo oddal widok.
- **„Wzorzec jest zbyt gęsty, aby narysować go w tej skali.”** Linie leżałyby bliżej siebie, niż rysunek potrafi pokazać. Użyj większej skali: spróbuj skali wydruku (20 dla 1:20).
- **Wzorzec wygląda na ogromny lub drobny.** Skala jest podana w jednostkach rysunku na jednostkę wzorca; zob. krok 4 powyżej.
- **Przesunięcie konturu nie przesuwa kreskowania.** Kreskowanie nie jest powiązane ze swoją granicą na stałe. Przesuń oba albo wykonaj kreskowanie ponownie.

## Kreskowanie połączone z granicą

Kreskowanie wykonane poleceniem `HATCH` pamięta, co je ogranicza. Przesuń, obróć lub skaluj granicę, a kreskowanie i jego wzorzec pójdą razem z nią. Przeciągnij uchwyt (grip), aby zmienić kształt granicy, a kreskowanie zostanie obliczone ponownie. Przesunięcie samego kreskowania przesunie też jego granicę, jak wypełniony kształt w programie graficznym.

Powiązanie wygasa, a wiersz poleceń o tym informuje, jeśli granica przestaje się domykać albo kreskowanie zmienisz ręcznie. Samo kreskowanie pozostaje. Wpisz `AS` podczas kreskowania, aby tworzyć kreskowania samodzielne. Skopiowane kreskowanie wraz z granicą ma własne powiązanie.

`HATCHEDIT` (`HE`) zmienia wzorzec, skalę, kąt i punkt początkowy kreskowania oraz łączy je z granicą lub kończy powiązanie. Powiązanie jest zapisywane w plikach DWG i DXF 2000. Plik DXF R12 nie ma obiektu kreskowania, a powiązania wykonane w innych programach nie są odczytywane: w takich przypadkach użyj `HATCHEDIT` i opcji Połącz.

Kreskowanie, które nie ma już granicy (granica została usunięta albo plik przyszedł bez niej), może ją odzyskać: `HATCHGENERATEBOUNDARY` (`HGB`) rysuje zamkniętą polilinię wokół każdej pętli kreskowania i, jeśli odpowiesz Tak, łączy z nimi kreskowanie.

## Wypełnienie gradientem

`GRADIENT` (`GD`) wypełnia obszar gradientem zamiast wzorcem: te same wskazania co w `HATCH`, a następnie pyta o typ (liniowy, cylindryczny, sferyczny, półkulisty, krzywy oraz każdy z nich odwrócony), jeden kolor z odcieniem albo dwa kolory, kąt oraz to, czy gradient ma być wyśrodkowany. W `HATCH` opcja `G` robi to samo. `HATCHEDIT` `G` albo {{ui:Properties}} w sekcji Gradient zmienia gradient lub zamienia dowolne kreskowanie w gradient.

Gradient widać na ekranie i w wydrukach. Zapisz jako DWG 2004 lub nowszy, a inne programy odczytają prawdziwe kreskowanie z gradientem. DXF 2000 i DWG 2000 nie mają gradientu: CadCraft zachowuje go wyłącznie dla siebie, a inne programy widzą wypełnienie jednolite w pierwszym kolorze.

## Przycinanie kreskowania

`TRIM` przycina kreskowanie jak każdy inny obiekt. Kliknij kreskowanie po tej stronie krawędzi tnącej, którą chcesz usunąć: krawędzie dzielą obszar kreskowania, a ten fragment zostaje usunięty. W trybie szybkim każdy obiekt jest krawędzią tnącą; przy wielu obiektach najpierw wybierz krawędzie (opcja `T`). Przycięte kreskowanie nie jest już powiązane z granicą, ponieważ nie wypełnia jej już w całości.
