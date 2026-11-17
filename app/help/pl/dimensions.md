---
title: Wymiarowanie planu
summary: Dodawaj wymiary liniowe, równoległe, kątowe, promieniowe i średnicowe, łącz je poleceniami Continue i Baseline, i zmieniaj ich tekst.
keywords: wymiar, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, łańcuch, ciąg, adnotacje, narzędzie wymiarowania, gdzie, znajdź, pasek narzędzi, zmierz, mm, cm, m, km, jednostki
from: 9ee65123
---

## Co wykonasz

Wymiarowany pokój: szerokość i wysokość całkowitą, ciąg wymiarów wzdłuż jednej ściany, ścianę pod kątem, zaokrąglony narożnik i kąt.

Zanim zaczniesz, przeczytaj [Ustaw rozmiary wymiarów](topic:dimension-settings), jeśli rysunek jest duży: tekst wymiaru ma domyślnie 2.5 jednostki rysunku wysokości, co jest bardzo małe w rysunku mierzonym w milimetrach. W poniższych krokach najpierw wpisz `DIMSCALE`, naciśnij {{key:Enter}}, wpisz `50` i naciśnij {{key:Enter}}.

## Gdzie są narzędzia wymiarowania

Przy stylu menu CadCraft (tym, z którym startuje CadCraft) narzędzia wymiarowania są na pasku narzędzi nad rysunkiem, w grupie {{ui:Adnotacje}}: {{ui:Liniowy}}, {{ui:Równoległy}}, {{ui:Kąt}}, {{ui:Promień}} i {{ui:Średnica}}. Menu {{ui:Więcej}} tej grupy ma {{ui:Kontynuuj wymiar}} i {{ui:Wymiar bazowy}}. Najedź wskaźnikiem na przycisk, aby zobaczyć, co robi.

- Przy menu stylu {{ui:Klasyczne rysowanie}} lub {{ui:Wstążka}} otwórz kartę {{ui:Adnotacje}}: narzędzia są w jej panelu {{ui:Wymiary}}. {{ui:Klasyczne rysowanie}} ma też {{ui:Liniowy}} na karcie {{ui:Start}}, w grupie {{ui:Adnotacje}}. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).
- Albo wpisz polecenie w wierszu poleceń pod rysunkiem i naciśnij {{key:Enter}}: `DLI` (liniowy), `DAL` (równoległy), `DAN` (kątowy), `DRA` (promieniowy), `DDI` (średnicowy), `DCO` (kontynuacja), `DBA` (bazowy).
- Na wąskim ekranie pasek narzędzi jest w jednym rzędzie: przesuń go w bok, by dojść do {{ui:Adnotacje}}.

Aby pokazać długości w milimetrach, centymetrach, metrach lub kilometrach, zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Narysuj coś do wymiarowania

1. Wpisz `PL` i naciśnij {{key:Enter}}.
2. Wpisz `0,0` i naciśnij {{key:Enter}}.
3. Wpisz `@6000,0` i naciśnij {{key:Enter}}.
4. Wpisz `@1500<60` i naciśnij {{key:Enter}}.
5. Wpisz `@0,2700` i naciśnij {{key:Enter}}.
6. Wpisz `@-6750,0` i naciśnij {{key:Enter}}.
7. Wpisz `C` i naciśnij {{key:Enter}}. Zarys się zamyka.
8. Wpisz `C` i naciśnij {{key:Enter}}, aby zacząć okrąg.
9. Kliknij wewnątrz pokoju, z dala od ścian, aby wskazać środek.
10. Wpisz `600` i naciśnij {{key:Enter}}. To jest kolumna.
11. Kliknij {{ui:Zasięg}}.

## Liniowy: poziomo lub pionowo

1. Wpisz `DLI` i naciśnij {{key:Enter}}.
2. Przy `Specify first extension line origin` przyciągnij do lewego dolnego narożnika (Koniec) i kliknij.
3. Przy `Specify second extension line origin` przyciągnij do prawego dolnego narożnika i kliknij.
4. Przesuń krzyżyk poniżej pokoju. Wymiar podąża za nim, poziomo.
5. Kliknij, aby umieścić linię wymiarową.

Historia podaje `Dimension text = 6000`.

To, gdzie umieścisz linię, decyduje o kierunku: poniżej lub powyżej daje wymiar poziomy, z lewej lub z prawej — pionowy. Aby wymusić kierunek, wpisz przed umieszczeniem `H` (poziomo), `V` (pionowo) albo `R` (obrócony, a potem kąt).

:::tip
Naciśnij {{key:Enter}} przy pierwszej podpowiedzi zamiast wskazywać punkt, a potem kliknij linię, łuk, okrąg albo segment polilinii. CadCraft sam weźmie oba końce.
:::

## Kontynuuj: ciąg wymiarów

{{cmd:DIMCONTINUE}} ({{ui:Adnotacje}} › {{ui:Więcej}} › {{ui:Kontynuuj wymiar}}, albo `DCO`) kontynuuje od ostatniego wymiaru liniowego lub równoległego, który wykonałeś; każdy nowy zaczyna się tam, gdzie skończył się poprzedni.

1. Wpisz `DLI` i naciśnij {{key:Enter}}.
2. Wpisz `0,0` i naciśnij {{key:Enter}} dla pierwszego początku.
3. Wpisz `2000,0` i naciśnij {{key:Enter}} dla drugiego początku.
4. Kliknij poniżej pokoju, aby go umieścić.
5. Wpisz `DCO` i naciśnij {{key:Enter}}.
6. Wpisz `4500,0` i naciśnij {{key:Enter}}. Drugi wymiar podąża za pierwszym, na tej samej linii.
7. Przyciągnij do prawego dolnego narożnika i kliknij. Trzeci kończy ciąg.
8. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

:::note
Tutaj punkty są celowo wpisane jako współrzędne bezwzględne. Punkt `@` liczy od ostatniego podanego punktu, a ostatnim punktem jest miejsce, w którym umieściłeś poprzednią linię wymiarową, a nie koniec wymiaru. Punkty bezwzględne, przyciągnięcia albo sama odległość przy włączonym {{ui:Orto}} są bezpieczniejsze w ciągu wymiarów.
:::

Wpisz `U` i naciśnij {{key:Enter}}, aby cofnąć ostatni wymiar w ciągu bez wychodzenia z polecenia.

## Bazowy: wymiary ułożone od jednej linii

{{cmd:DIMBASELINE}} ({{ui:Adnotacje}} › {{ui:Więcej}} › {{ui:Wymiar bazowy}}, albo `DBA`) mierzy każdy nowy wymiar od pierwszego początku ostatniego z nich i układa każdy o krok dalej.

1. Wpisz `DLI` i naciśnij {{key:Enter}}.
2. Przyciągnij do lewego dolnego narożnika i kliknij.
3. Przyciągnij do lewego górnego narożnika i kliknij.
4. Przesuń krzyżyk na lewo od pokoju i kliknij. Pojawi się wymiar pionowy.
5. Wpisz `DBA` i naciśnij {{key:Enter}}.
6. Przyciągnij do górnego końca ściany pod kątem 60 stopni (Koniec) i kliknij. Pojawi się drugi wymiar pionowy, o krok dalej niż pierwszy.
7. Naciśnij {{key:Enter}}, aby zakończyć.

## Równoległy: prawdziwa długość pochyłej linii

1. Wpisz `DAL` i naciśnij {{key:Enter}}.
2. Naciśnij {{key:Enter}}, aby wybrać obiekt.
3. Kliknij ścianę pod kątem 60 stopni.
4. Przesuń na zewnątrz i kliknij, aby umieścić.

Tekst pokazuje 1500: prawdziwą długość, zmierzoną wzdłuż ściany.

## Promień i średnica

1. Wpisz `DRA` i naciśnij {{key:Enter}}.
2. Kliknij okrąg kolumny.
3. Przesuń krzyżyk. Odnośnik wskazuje od środka w stronę krzyżyka.
4. Kliknij, aby umieścić tekst.

Tekst pokazuje `R600`. {{cmd:DIMDIAMETER}} (`DDI`) robi to samo ze znakiem ⌀ i średnicą.

## Kątowy

Ściany tutaj są jedną polilinią, więc zmierz narożnik po jego wierzchołku. (Między dwiema osobnymi liniami możesz zamiast tego kliknąć linie.)

1. Wpisz `DAN` i naciśnij {{key:Enter}}.
2. Przy `Select arc, circle or line, or Enter for a vertex` naciśnij {{key:Enter}}.
3. Przy `Specify angle vertex` przyciągnij do prawego dolnego narożnika i kliknij.
4. Przy `Specify first angle endpoint` przyciągnij do lewego dolnego narożnika i kliknij.
5. Przy `Specify second angle endpoint` przyciągnij do górnego końca ściany pod kątem 60 stopni i kliknij.
6. Przesuń krzyżyk do wnętrza pokoju, blisko narożnika, i kliknij.

Tekst pokazuje `120°`, czyli kąt wewnętrzny narożnika. Umieszczony po drugiej stronie narożnika wymiar mierzy zamiast tego kąt z tamtej strony. Kliknij łuk przy pierwszej podpowiedzi, aby wymiarować kąt, który rozpina, albo kliknij dwie linie, aby wymiarować kąt między nimi.

## Zmiana tekstu

Aby napisać własny tekst, wpisz `T` i naciśnij {{key:Enter}} przed umieszczeniem wymiaru, a potem wpisz tekst. W twoim tekście `<>` oznacza zmierzoną wartość: `<> TYP.` daje `6000 TYP.`. Naciśnij {{key:Enter}} w pustym wierszu, aby zachować zmierzoną wartość.

Aby zmienić istniejący wymiar:

1. Kliknij go.
2. W prawym panelu wpisz w polu {{ui:Tekst}}. Zostaw puste, aby zobaczyć zmierzoną wartość.
3. Naciśnij {{key:Enter}}.

## Wymiary podążają za geometrią

Wymiar pamięta swoje punkty. Przeciągnij jeden z jego uchwytów albo przesuń, obróć lub skaluj go wraz z obiektami, które mierzy, a on zmierzy się ponownie. Jeśli rozciągniesz geometrię bez przesuwania wymiaru, wymiar nie podąży: zachowa swoje punkty.

## Częste błędy

- **Tekst i strzałki są mikroskopijne albo ogromne.** Ustaw skalę ogólną: zobacz [Ustaw rozmiary wymiarów](topic:dimension-settings).
- **„Wskaż punkt wewnątrz kąta, który chcesz zmierzyć.”** Punkt, który kliknąłeś dla wymiaru kątowego, leży na jednym z ramion. Przesuń go do wnętrza kąta.
- **Ciąg zaczął się od złego wymiaru.** Zawsze kontynuuje od ostatniego wymiaru liniowego lub równoległego wykonanego w tej sesji. Najpierw wykonaj (albo wykonaj ponownie) ten, od którego ma kontynuować.
- **Wymiar wyszedł pionowo.** Umieściłeś go z boku. Wpisz `H` przed umieszczeniem.
- **Stopy i cale.** Najpierw ustaw {{ui:Architektoniczny}} jako format długości rysunku albo {{ui:Format}} wymiaru w {{ui:Właściwości}}: zobacz [Stopy i cale w wymiarach](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Liczby nie są w jednostce, której chcesz.** Wybierz {{ui:Jednostki w tekście}}: zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
