---
title: Przygotowanie arkusza z tabliczką rysunkową i oknami widokowymi
summary: Utwórz arkusz (układ) z ramką i tabliczką rysunkową, ustaw skalę okna widokowego, dodaj drugie okno dla detalu i wypełnij tabliczkę rysunkową.
keywords: layout, układ, arkusz, przestrzeń papieru, okno widokowe, mview, vpview, tabliczka rysunkowa, skala, rozmiar papieru, ramka, vports, skala wydruku, mspace, pspace, przestrzeń modelu, wejdź do okna widokowego, kliknij dwukrotnie okno widokowe
from: 45a45de8
---

## Co wykonasz

Arkusz A3 z tabliczką rysunkową, cały plan w jednym oknie widokowym w skali 1:100 oraz drugie okno pokazujące jeden róg w skali 1:20.

## Model i arkusze

Budynek rysujesz na karcie {{ui:Model}}, w pełnym rozmiarze: ściana o długości 6 m ma 6000 jednostek w milimetrach. **Arkusz** (układ) to kartka papieru, mierzona w milimetrach lub calach. **Okno widokowe** to okno wycięte w arkuszu, które pokazuje model w skali.

## Zanim zaczniesz

1. Otwórz lub narysuj plan na karcie {{ui:Model}}.
2. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone.
3. W {{ui:Bieżące ustawienia}} ustaw {{ui:Jednostki}} na jednostkę, w której rysujesz, na przykład {{ui:Milimetry}}.

Jednostki mają znaczenie: skala okna widokowego, na przykład 1:100, oznacza, że jeden milimetr na papierze pokazuje 100 rzeczywistych milimetrów, więc CadCraft musi wiedzieć, czym jest jedna jednostka rysunku. Rysunek pozostawiony jako {{ui:Bez jednostek}} jest traktowany jako mający jednostkę papieru (milimetry na papierze ISO, cale na papierze amerykańskim).

## Utwórz arkusz

1. Kliknij przycisk {{ui:+}} po prawej stronie kart pod rysunkiem, albo wpisz `LAYOUT` i naciśnij {{key:Enter}}, albo kliknij {{ui:Nowy arkusz}}.

Otwiera się nowa karta `Layout1`. Widzisz arkusz na ciemniejszym tle: ramkę, tabliczkę rysunkową w prawym dolnym rogu i jedno okno widokowe nad nią, pokazujące cały model w największej standardowej skali, która się mieści. Historia podaje papier: ISO A3 dla rysunków metrycznych i bez jednostek, Tabloid (ANSI B) dla rysunków w calach lub stopach.

2. Kliknij {{ui:Zasięg}}, aby dopasować arkusz do ekranu.

## Wybierz papier

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone. Nagłówek prawego panelu brzmi „Arkusz: Layout1”.
2. W polu {{ui:Nazwa}} wpisz `A-101 Plan` i naciśnij {{key:Enter}}. Karta zmienia nazwę.
3. W {{ui:Papier}} wybierz rozmiar.
4. W {{ui:Orientacja}} wybierz {{ui:Pozioma}} lub {{ui:Pionowa}}.

:::warning
Zmiana papieru nie przesuwa ani nie zmienia rozmiaru tego, co już jest na arkuszu. Po zmianie sprawdź, czy ramka, tabliczka rysunkowa i okno widokowe nadal się mieszczą, i przesuń je lub zmień ich rozmiar uchwytami. Przełączenie między papierem w milimetrach a papierem w calach zachowuje liczby, więc wszystko zmienia rozmiar: pasek stanu ostrzega.
:::

## Ustaw skalę okna widokowego

1. Kliknij ramkę okna widokowego (jego krawędź). Nagłówek panelu brzmi „Okno widokowe”.
2. W {{ui:Skala}} wybierz `1:100`.

Model w oknie przerysowuje się w skali 1:100, wyśrodkowany tam, gdzie był. Lista oferuje skale metryczne od 10:1 do 1:10000; rysunki w calach lub stopach dostają też skale architektoniczne (1/4" = 1'-0" i podobne) oraz inżynierskie (1" = 20' i podobne). {{ui:Dopasuj cały model}} ustawia dokładną, niestandardową skalę, która mieści wszystko.

3. Jeśli plan nie jest już wyśrodkowany, zmień {{ui:X}} i {{ui:Y}} w sekcji {{ui:Środek widoku (model)}} w prawym panelu: to punkt modelu pokazany na środku okna widokowego.

## Pokaż część modelu w oknie widokowym

1. Mając zaznaczone okno widokowe, kliknij {{ui:Wskaż okno na modelu…}} w prawym panelu (albo wpisz `VPVIEW` i naciśnij {{key:Enter}}).
2. CadCraft przechodzi na kartę {{ui:Model}}. Kliknij jeden róg obszaru do pokazania.
3. Kliknij przeciwległy róg.

Wracasz do arkusza, a okno widokowe pokazuje ten obszar w największej standardowej skali, która się mieści; historia mówi, jakiej. {{ui:Pokaż cały model}} wraca do całego planu w standardowej skali.

## Dodaj drugie okno widokowe dla detalu

1. Zrób miejsce na arkuszu: zaznacz pierwsze okno widokowe i przeciągnij uchwyt narożny, aby je zmniejszyć.
2. Wpisz `MV` i naciśnij {{key:Enter}} albo kliknij {{ui:Okno widokowe}} w grupie Arkusze.
3. Kliknij jeden róg nowego okna widokowego na arkuszu.
4. Kliknij przeciwległy róg.

Nowe okno widokowe pokazuje cały model. Historia podaje jego skalę.

5. Kliknij ramkę nowego okna widokowego.
6. Kliknij {{ui:Wskaż okno na modelu…}} i wskaż mały obszar wokół jednego rogu planu.
7. W {{ui:Skala}} wybierz `1:20`.

Ramki okien widokowych leżą na warstwie `Viewports`, która jest ustawiona jako niedrukowana, więc ramki widać na ekranie, ale nie w PDF.

## Wypełnij tabliczkę rysunkową

Tabliczka rysunkowa składa się ze zwykłych linii i tekstu na warstwie `Title block`. Zaczyna od nazwy rysunku, skali pierwszego okna widokowego, dzisiejszej daty i numeru arkusza.

1. Kliknij dwukrotnie duży tekst tytułu. Nad nim otworzy się pole edycji.
2. Wpisz tytuł arkusza.
3. Kliknij {{ui:OK}} albo naciśnij {{key:Mod+Enter}}.

Zrób tak samo dla pozostałych pól. Użyj {{cmd:TEXT}}, aby napisać w pustej komórce „DRAWN BY”. Tekst SCALE nie aktualizuje się sam po zmianie skali okna widokowego: edytuj go ręcznie.

## Rysuj na arkuszu

Wszystko, co rysujesz na karcie arkusza, jest na papierze, w jednostkach papieru: tekst o wysokości 3.5 ma 3.5 mm wysokości na arkuszu ISO. Notatki, strzałki północy i ramki arkuszy należą tutaj.

Aby zmienić sam plan, przejdź na kartę {{ui:Model}} albo pracuj przez okno widokowe (następna sekcja); każde okno widokowe pokaże zmianę.

## Pracuj na modelu przez okno widokowe

1. Kliknij dwukrotnie wewnątrz okna widokowego, z dala od jego ramki. Albo wpisz `MS` i naciśnij {{key:Enter}}: przy jednym oknie na arkuszu wchodzisz od razu; przy kilku kliknij w to, które chcesz.

Ramka jest rysowana grubiej, historia mówi, że jesteś w środku, a karta arkusza pozostaje wybrana. Wszystko, co rysujesz lub zmieniasz teraz, trafia do modelu, w jednostkach modelu, tak jak na karcie {{ui:Model}}: linia narysowana w oknie w skali 1:100 ma rzeczywiste milimetry. Warstwy zamrożone w tym oknie nie mogą być tu wybierane.

2. Obracaj kółkiem lub przeciągaj środkowym przyciskiem, aby powiększać i przesuwać to, co pokazuje okno. Arkusz zostaje tam, gdzie był.
3. Kliknij dwukrotnie poza ramką albo wpisz `PS` i naciśnij {{key:Enter}}.

Wracasz na arkusz. Okno zachowuje widok, w którym je zostawiłeś; {{key:Mod+Z}} przywraca stary widok w jednym kroku. Kliknięcie dowolnej karty pod rysunkiem także opuszcza okno widokowe.

:::note
Okno widokowe, którego wyświetlanie jest zablokowane ({{ui:Wyświetlanie zablokowane}} we Właściwościach), zachowuje swój widok: w środku przesuwanie i powiększanie przesuwają cały arkusz. Okna wyłączonego nie można wejść.
:::

## Opisz widok jego nazwą

Podpis widoku pod oknem widokowym może pokazywać nazwę widoku i nadążać za nią:

1. Nadaj widokowi nazwę: zaznacz ramkę okna widokowego i wpisz w {{ui:Nazwa widoku}} we Właściwościach. Albo zapisz widok na karcie {{ui:Model}} poleceniem {{cmd:NAMEDVIEW}} i, mając zaznaczone okno widokowe, wpisz `VPVIEW`, `V` i nazwę widoku: okno pokaże ten widok i przyjmie jego nazwę.
2. Wpisz `VIEWLABEL` (`VL`) i naciśnij {{key:Enter}}, a następnie kliknij, gdzie ma trafić podpis ({{key:Enter}} umieszcza go pod lewym dolnym rogiem okna).

Gdy nazwa widoku się zmieni, podpis zmienia się razem z nią, w tym samym kroku cofnięcia.

## Zamroź warstwę w jednym oknie widokowym

Aby ukryć warstwę w jednym oknie, a nie w pozostałych (na przykład meble w detalu):

1. Zaznacz ramkę okna widokowego albo pracuj w jego środku (kliknij dwukrotnie).

Panel {{ui:Warstwy}} dostaje jeden dodatkowy przycisk w każdym wierszu, a wiersz nad listą to mówi.

2. Kliknij ten przycisk w wierszu warstwy.

Warstwa znika tylko z tego okna. Kliknij ponownie, aby ją odmrozić; {{key:Mod+Z}} cofa jedno i drugie. Dla kilku warstw lub okien naraz wpisz `VPLAYER`, a następnie `F` (zamroź) lub `T` (odmroź), nazwy warstw (`A-*` obejmuje każdą warstwę zaczynającą się od A-), a potem `C` (bieżąca), `A` (wszystkie) albo `S` (wybierz). `VPLAYER` `V` (Vpvisdflt) wybiera warstwy, które nowe okna zaczynają jako zamrożone.

## Więcej arkuszy

Każde {{ui:+}} dodaje kolejny arkusz (`Layout2`, `Layout3` …) z następnym numerem arkusza. Aby usunąć otwarty arkusz, naciśnij {{key:Esc}} i kliknij {{ui:Usuń ten arkusz}} w prawym panelu. Usuwa bez pytania; {{key:Mod+Z}} go przywraca.

Arkusz wydrukujesz poleceniem {{ui:Wydrukuj ten arkusz}} lub {{key:Mod+P}}; zobacz [Drukowanie do PDF](topic:plot-pdf).

## Typowe błędy

- **Okno widokowe nic nie pokazuje.** Model jest pusty albo widok jest skierowany gdzie indziej. Zaznacz ramkę i kliknij {{ui:Pokaż cały model}}.
- **Lista skal pokazuje tylko proporcje, bez skal stopowo-calowych.** Na karcie {{ui:Model}} ustaw {{ui:Jednostki}} na {{ui:Cale}} albo {{ui:Stopy}}.
- **1:100 wygląda dziesięć razy za duże lub za małe.** Jednostki rysunku są złe. Ustaw {{ui:Jednostki}} na to, czym naprawdę jest jedna jednostka.
- **Kliknięcie w plan w oknie nic nie zaznacza.** Na arkuszu zaznaczasz obiekty arkusza. Najpierw kliknij dwukrotnie wewnątrz okna, aby pracować na planie przez nie.
- **Kliknięcia poza oknem nic nie robią.** Jesteś w oknie widokowym: kliknij dwukrotnie poza nim albo wpisz `PS`, aby znów pracować na arkuszu.
- **„Okna widokowe trafiają na układ. Najpierw otwórz kartę układu (albo utwórz ją poleceniem LAYOUT).”** {{cmd:MVIEW}} działa tylko na karcie arkusza.
