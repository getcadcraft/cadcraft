---
title: Przesuwanie, kopiowanie, obracanie, skalowanie, lustro, rozciąganie i macierz
summary: Rozstaw meble w pokoju podstawowymi poleceniami modyfikacji, używając punktów bazowych, wpisanych odległości i cofania.
keywords: przesuń, kopiuj, obróć, skaluj, lustro, rozciągnij, macierz, połącz, matchprop, dopasuj właściwości, malarz, arrayrect, arraypolar, macierz biegunowa, usuń, rozbij, cofnij, ponów, punkt bazowy, przemieszczenie, modyfikuj, wyrównaj, rozmieść, ustaw w linii, rozmieść równomiernie
from: 8eaeee6c
---

## Co wykonasz

Stół z jednym krzesłem, skopiowanym dookoła stołu, obróconym, odbitym lustrzanie i zmienionym rozmiarem. Po drodze użyjesz {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} i {{cmd:UNDO}}.

## Narysuj elementy

1. Wpisz `REC` i naciśnij {{key:Enter}}, wpisz `0,0` i naciśnij {{key:Enter}}, a następnie wpisz `@1800,900` i naciśnij {{key:Enter}}. To jest stół.
2. Wpisz `REC` i naciśnij {{key:Enter}}, wpisz `300,-700` i naciśnij {{key:Enter}}, a następnie wpisz `@450,450` i naciśnij {{key:Enter}}. To jest krzesło, poniżej stołu.
3. Kliknij {{ui:Zasięg}}.

## Przesuwanie: punkt bazowy, potem drugi punkt

Każde przesunięcie, kopiowanie, obrót i skalowanie zaczyna się od **punktu bazowego**: punktu, który jest przenoszony albo wokół którego obracamy.

1. Kliknij krzesło, aby je zaznaczyć.
2. Wpisz `M` i naciśnij {{key:Enter}}. Historia pokazuje `Znaleziono 1`.
3. Przy `Wskaż punkt bazowy` przyciągnij do lewego górnego rogu krzesła („Koniec”) i kliknij.
4. Przy `Wskaż drugi punkt` wpisz `@0,200` i naciśnij {{key:Enter}}.

Krzesło przesuwa się o 200 w górę, bliżej stołu.

:::tip
Wpisz `D` przy `Wskaż punkt bazowy`, aby zamiast tego podać przemieszczenie: CadCraft zapyta wtedy `Podaj przemieszczenie`, a ty wpiszesz, o ile w poziomie i w pionie, na przykład `0,200` (bez znaku `@`).
:::

## Kopiowanie, ile chcesz razy

1. Kliknij krzesło.
2. Wpisz `CO` i naciśnij {{key:Enter}}.
3. Przyciągnij do lewego dolnego rogu krzesła i kliknij jako punkt bazowy.
4. Wpisz `@600,0` i naciśnij {{key:Enter}}. Kopia pojawi się 600 w prawo.
5. Wpisz ponownie `@600,0` i naciśnij {{key:Enter}}. Druga kopia pojawi się 1200 w prawo od oryginału.
6. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

{{cmd:COPY}} działa, dopóki nie naciśniesz {{key:Enter}}. Każda kopia jest umieszczana w odległości od punktu bazowego do podanego punktu. Punkt `@` liczy się od ostatnio podanego punktu, którym po pierwszej kopii jest punkt tej kopii, więc dwukrotne `@600,0` daje kopie w odległości 600 i 1200. Wpisz `U` i naciśnij {{key:Enter}}, aby cofnąć ostatnią kopię, nie wychodząc z polecenia.

Powinieneś zobaczyć trzy krzesła w rzędzie pod stołem.

:::tip
{{cmd:COPY}} służy do kopii w jednym rysunku, umieszczanych względem punktu bazowego. Aby przenieść obiekty do innego rysunku lub karty albo wkleić je później, użyj schowka: {{key:Mod+C}}, a następnie {{key:Mod+V}}. {{key:Mod+D}} tworzy jedną kopię, która porusza się razem ze wskaźnikiem. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).
:::

## Odbicie rzędu na drugą stronę

1. Przeciągnij przecięcie (od prawej do lewej) nad trzema krzesłami, nie dotykając stołu.
2. Wpisz `MI` i naciśnij {{key:Enter}}.
3. Przy `Wskaż pierwszy punkt linii lustra` przyciągnij do „Punkt środkowy” lewego boku stołu i kliknij.
4. Przy `Wskaż drugi punkt linii lustra` przyciągnij do „Punkt środkowy” prawego boku stołu i kliknij.
5. Przy `Usunąć obiekty źródłowe? [Tak/Nie] <N>` naciśnij {{key:Enter}}, aby je zachować.

Powinieneś zobaczyć trzy krzesła pod stołem i trzy odbite krzesła nad nim. Tekst w odbitym zaznaczeniu pozostaje czytelny: jest umieszczony lustrzanie, ale nie zapisany wspak.

## Obracanie krzesła

1. Kliknij najbardziej wysunięte w prawo krzesło pod stołem.
2. Wpisz `RO` i naciśnij {{key:Enter}}.
3. Przyciągnij do prawego dolnego rogu krzesła i kliknij jako punkt bazowy.
4. Wpisz `90` i naciśnij {{key:Enter}}.

Krzesło obraca się o 90 stopni w kierunku przeciwnym do ruchu wskazówek zegara wokół punktu bazowego. Kąt ujemny obraca w kierunku zgodnym z ruchem wskazówek zegara. Zamiast wpisywać, możesz kliknąć drugi punkt: kąt jest mierzony od punktu bazowego do tego punktu.

## Skalowanie stołu

1. Zaznacz stół.
2. Wpisz `SC` i naciśnij {{key:Enter}}.
3. Przyciągnij do lewego dolnego rogu stołu i kliknij jako punkt bazowy.
4. Wpisz `1.2` i naciśnij {{key:Enter}}.

Stół jest o 20% większy i rośnie od punktu bazowego. Współczynnik mniejszy od 1 sprawia, że stół jest mniejszy.

:::note
Jeśli zamiast wpisywania współczynnika skali klikniesz punkt, współczynnikiem będzie odległość od punktu bazowego do tego punktu. Kliknięcie w odległości jednej jednostki rysunku daje współczynnik 1. Zwykle lepiej wpisać liczbę.
:::

## Cofanie i ponawianie

- {{key:Mod+Z}}, przycisk {{ui:Cofnij}} albo `U`, a następnie {{key:Enter}}, cofa ostatnie polecenie. Całe polecenie to jeden krok: cofnięcie {{cmd:COPY}}, które utworzyło pięć kopii, usuwa wszystkie pięć.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, przycisk {{ui:Ponów}} albo `REDO` przywraca je.
- Historia podaje, co zostało cofnięte („Cofnięto COPY”).

CadCraft zachowuje ostatnie 500 kroków. Ustawienia warstw (włączenie, zamrożenie, blokada, kolor) są ustawieniami, a nie edycjami, i nie są cofane.

## Poszerzanie pokoju przez rozciąganie

{{cmd:STRETCH}} (`S`, albo {{ui:Rozciągnij}}) przesuwa tylko to, co leży wewnątrz okna przecięcia: narożniki i końce linii w jego obrębie się przesuwają, a reszta zostaje na miejscu, więc pokój się poszerza zamiast przesuwać.

1. Wpisz `S` i naciśnij {{key:Enter}}.
2. Przeciągnij okno od prawej do lewej nad prawą ścianą, tak aby objęło narożniki ściany i końce wszystkiego, co się z nią łączy.
3. Naciśnij {{key:Enter}}.
4. Kliknij punkt bazowy, a następnie wpisz `@600,0` i naciśnij {{key:Enter}}.

Prostokąt jest szerszy o 600; linie, które kończyły się na ścianie, nadal się na niej kończą. Łuk, którego jeden koniec znajduje się wewnątrz, zachowuje swoją wysokość; okręgi i tekst przesuwają się, gdy ich środek lub punkt wstawienia jest wewnątrz; wymiar mierzy swoją nową długość. Obiekty wybrane pojedynczo, bez okna, po prostu się przesuwają.

Możesz też najpierw zaznaczyć: przeciągnij okno przecięcia (lub lasso przecięcia) nad ścianą, bez uruchomionego polecenia, a następnie wpisz `S`. STRETCH przejmuje to zaznaczenie i rozciąga to, co obejmują jego okna, tak jakbyś przeciągnął je przy jego własnym pytaniu w wierszu poleceń.

## Macierz: wiersze i kolumny albo wokół środka

{{cmd:ARRAY}} (`AR`, albo {{ui:Macierz}}) kopiuje zaznaczenie w siatce lub po okręgu.

1. Zaznacz krzesło, wpisz `AR` i naciśnij {{key:Enter}}. Naciśnij {{key:Enter}}, aby wybrać `Prostokątna`.
2. Pojawia się podgląd 4 kolumn i 3 wierszy. Wpisz `COU`, naciśnij {{key:Enter}}, a następnie `5` dla kolumn i `2` dla wierszy.
3. Wpisz `S`, naciśnij {{key:Enter}}, a następnie `600` między kolumnami i `-900` między wierszami (ujemna wartość idzie w dół).
4. Naciśnij {{key:Enter}}, aby wykonać kopie.

Aby uzyskać pierścień krzeseł wokół stołu, wybierz zamiast tego `PO` (Biegunowa), kliknij środek stołu i ustaw `I` (elementy), `F` (kąt wypełnienia: 360 dla pełnego okręgu, 180 dla połowy) oraz `ROT` (czy kopie mają się obracać w stronę środka). {{cmd:ARRAYRECT}} i {{cmd:ARRAYPOLAR}} pomijają te pytania.

## Łączenie elementów w jedną polilinię

{{cmd:JOIN}} (`J`, albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Połącz}}): zaznacz linie, łuki i otwarte polilinie, których końce się stykają, i naciśnij {{key:Enter}}. Stają się jedną polilinią, zamkniętą, jeśli biegną dookoła, którą potem można jednym ruchem odsunąć. Linie leżące na jednej prostej stają się jedną linią, nawet jeśli mają przerwy między sobą; łuki jednego okręgu stają się jednym łukiem albo okręgiem.

## Dopasowanie właściwości

{{cmd:MATCHPROP}} (`MA`, albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Dopasuj właściwości}}): kliknij obiekt, którego wygląd chcesz uzyskać, następnie zaznacz obiekty do zmiany i naciśnij {{key:Enter}}. Przejmują jego warstwę i kolor; tekst przejmuje wysokość, wymiar swoje rozmiary, a kreskowanie swój wzór. Wpisz `S` (Ustawienia) przy drugim pytaniu, aby wyłączyć którekolwiek z tych przejęć.

## Wyrównywanie obiektów

**Według punktów.** {{cmd:ALIGN}} (`AL`, albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Wyrównaj}}): zaznacz obiekty i naciśnij {{key:Enter}}, a następnie kliknij punkt na nich (źródło) i miejsce, w którym ma się znaleźć (cel).

- Jedna para je przesuwa. Naciśnij {{key:Enter}} przy `Wskaż drugi punkt źródłowy`, aby zakończyć na tym etapie.
- Dwie pary również je obracają, tak że linia między dwoma punktami źródłowymi leży wzdłuż linii między dwoma punktami docelowymi. CadCraft następnie pyta `Skalować obiekty na podstawie punktów wyrównania?`: odpowiedź `Y` (Tak) powiększa lub zmniejsza je również w tym stosunku.
- Trzecia para odbija je, gdy jej dwa punkty leżą po przeciwnych stronach tej linii.

**Krawędzie i odstępy.** {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Wyrównaj i rozmieść}} (albo `ALIGNPANEL`) otwiera mały panel nad rysunkiem. Zaznacz obiekty, a następnie:

- wybierz, do czego wyrównać, w {{ui:Wyrównaj do}} (całe zaznaczenie, pierwszy lub ostatni wybrany obiekt albo punkt, który klikniesz), i kliknij {{ui:Lewa}}, {{ui:Środek}}, {{ui:Prawa}}, {{ui:Góra}}, {{ui:Środek}} albo {{ui:Dół}};
- albo wybierz {{ui:Równe odstępy}} lub {{ui:Równe środki}} i kliknij {{ui:W poziomie}} albo {{ui:W pionie}}: dwa skrajne obiekty pozostają na miejscu, a reszta jest rozmieszczona równomiernie między nimi (co najmniej trzy obiekty).

Każde kliknięcie to jeden krok cofania, a zaznaczenie pozostaje, więc możesz spróbować innego układu. Każdy obiekt jest liczony według swojego prostokąta otaczającego, w UCS, jeśli jest ustawiony. W wierszu poleceń to samo robią {{cmd:ALIGNTO}} i {{cmd:DISTRIBUTE}}.

## Usuwanie i rozbijanie

- {{cmd:ERASE}} (`E`, albo {{key:Delete}}) usuwa zaznaczone obiekty.
- {{cmd:EXPLODE}} (`X`) rozbija polilinię na linie i łuki, odwołanie do bloku na jego obiekty, a wymiar na linie, groty i tekst. Rozbite wymiary przestają same się mierzyć.

## Częste błędy

- **Wpisanie odległości bez `@` przy drugim punkcie.** `600,0` to bezwzględny punkt 600,0, a nie „600 w prawo”. Użyj `@600,0` albo samego `600`, gdy krzyżyk wskazuje właściwy kierunek.
- **Obrót poszedł w złą stronę.** Dodatnie kąty obracają w kierunku przeciwnym do ruchu wskazówek zegara.
- **Cofnięcie usunęło więcej, niż się spodziewałeś.** Jedno cofnięcie cofa całe ostatnie polecenie, łącznie z każdą kopią, którą wykonało.
- **Polecenie nie poprosiło o zaznaczenie obiektów.** Obiekty były już zaznaczone, więc polecenie ich użyło. Najpierw naciśnij {{key:Esc}}, aby zacząć bez zaznaczenia.
