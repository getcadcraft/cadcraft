---
title: Tworzenie i wstawianie bloków
summary: Zamień narysowane drzwi w blok, wstawiaj go ponownie w innych miejscach, skalach i kątach oraz porządkuj nieużywane bloki.
keywords: blok, bmake, wstaw, ddinsert, symbol, purge, rozbij, redefiniuj, punkt bazowy, odwołanie, policz, bcount, zestawienie, csv, atrybuty, wyodrębnianie danych
from: 125a129d
---

## Co wykonasz

Symbol drzwi zamieniony w blok o nazwie `DOOR-900`, a następnie wstawiony trzy razy: tak jak narysowany, obrócony o 90 stopni i odbity lustrzanie.

Blok to nazwana grupa obiektów. Rysujesz go raz; każde miejsce, w którym go używasz, to **odwołanie do bloku** wskazujące na jedną definicję. Sekcja {{ui:Bloki}} w lewym panelu wymienia bloki w rysunku i to, ile razy każdy z nich jest użyty.

## Narysuj drzwi

1. Wpisz `L` i naciśnij {{key:Enter}}.
2. Wpisz `0,0` i naciśnij {{key:Enter}}.
3. Wpisz `@0,900` i naciśnij {{key:Enter}}, a potem jeszcze raz {{key:Enter}}. To skrzydło drzwi.
4. Wpisz `A` i naciśnij {{key:Enter}}.
5. Wpisz `C` i naciśnij {{key:Enter}}, aby najpierw podać środek.
6. Wpisz `0,0` i naciśnij {{key:Enter}} dla środka.
7. Wpisz `900,0` i naciśnij {{key:Enter}} dla punktu początkowego.
8. Wpisz `0,900` i naciśnij {{key:Enter}} dla punktu końcowego. To jest łuk otwierania.
9. Kliknij {{ui:Zasięg}}.

Łuki biegną przeciwnie do ruchu wskazówek zegara, od punktu początkowego do punktu końcowego.

## Utwórz blok

1. Wpisz `B` i naciśnij {{key:Enter}} albo kliknij {{ui:Utwórz}} w grupie Bloki.
2. Przy `Podaj nazwę bloku` wpisz `DOOR-900` i naciśnij {{key:Enter}}.
3. Przy `Wskaż punkt bazowy wstawienia` wpisz `0,0` i naciśnij {{key:Enter}}. To jest zawias: punkt, który trafia w miejsce, w które wstawiasz blok.
4. Przy `Wybierz obiekty` przeciągnij okno wokół skrzydła i łuku.
5. Naciśnij {{key:Enter}}.

Historia pokazuje: `Blok "DOOR-900" utworzono z 2 obiektów i zastąpiono je jednym odwołaniem do bloku.` Panel {{ui:Bloki}} wymienia DOOR-900 z `1×` obok: jedno odwołanie. Kliknij drzwi: teraz zaznaczają się jako jeden obiekt, „Odwołanie do bloku”.

:::tip
Możesz najpierw zaznaczyć obiekty, a potem wpisać `B`. CadCraft nadal zapyta o nazwę i punkt bazowy, a następnie użyje Twojego zaznaczenia.
:::

## Wstaw blok

1. Wpisz `I` i naciśnij {{key:Enter}} albo kliknij {{ui:Wstaw}} obok DOOR-900 w panelu {{ui:Bloki}}.
2. Przy `Podaj nazwę bloku lub [Plik (F)/Biblioteka (L)] <DOOR-900>` naciśnij {{key:Enter}}. (Przycisk {{ui:Wstaw}} w panelu sam wpisuje nazwę.)
3. Drzwi podążają za krzyżykiem. Kliknij w miejscu, w którym ma być zawias.

Pojawiają się drugie drzwi.

## Wstaw obrócony lub przeskalowany

1. Wpisz `I` i naciśnij {{key:Enter}}, a potem naciśnij {{key:Enter}}, aby zaakceptować nazwę.
2. Przy `Wskaż punkt wstawienia [Skala/Obrót (R)]` wpisz `R` i naciśnij {{key:Enter}}.
3. Wpisz `90` i naciśnij {{key:Enter}}. Podgląd się obróci.
4. Kliknij, aby umieścić.

Wpisz `S`, aby zamiast tego ustawić współczynnik skali; dotyczy on obu kierunków. Skala i obrót są zapamiętywane dla następnego wstawienia. Aby odbić drzwi lustrzanie, wstaw je, a następnie użyj {{cmd:MIRROR}} na odwołaniu.

## Zmień umieszczony blok

Zaznacz odwołanie do bloku. W prawym panelu możesz zmienić {{ui:X}}, {{ui:Y}}, {{ui:Skala X}}, {{ui:Skala Y}} i {{ui:Obrót}}. Ujemna wartość {{ui:Skala X}} odbija blok.

## Przedefiniuj blok

Aby zmienić wszystkie drzwi naraz, utwórz blok o tej samej nazwie:

1. Narysuj nową wersję drzwi.
2. Wpisz `B`, naciśnij {{key:Enter}} i wpisz `DOOR-900`.
3. Przy `Blok "DOOR-900" już istnieje. Zdefiniować go ponownie?` wpisz `Y` i naciśnij {{key:Enter}}.
4. Podaj punkt bazowy i wybierz nowe obiekty, jak wcześniej.

Każde odwołanie do DOOR-900 pokazuje teraz nową wersję.

Albo edytuj sam blok: {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj blok}} ({{cmd:BEDIT}}) otwiera go osobno, a {{ui:Zapisz blok}} zapisuje go z powrotem. Zobacz [Atrybuty bloku](topic:attributes#change-a-block-the-block-editor).

## Policz bloki i wyeksportuj zestawienie

Wpisz {{cmd:COUNT}} (albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Policz bloki}}), a następnie:

- kliknij jedne drzwi: zostaną zaznaczone wszystkie drzwi w tej przestrzeni, a historia podaje, ile ich jest tutaj i w całym rysunku;
- albo naciśnij {{key:Enter}}: historia wymienia każdy blok wraz z jego liczbą, zaczynając od największej;
- albo wpisz `E`, a następnie `C`, aby uzyskać CSV z liczbami (w modelu, na arkuszach, łącznie), albo `A`, aby uzyskać jeden wiersz na odwołanie z jego warstwą, położeniem, obrotem i każdą wartością atrybutu: zestawienie, które możesz otworzyć w arkuszu kalkulacyjnym.

Bloki bez nazwy (wymiary, tabele) i odwołania wewnątrz innych bloków nie są liczone. Komórki zaczynające się jak formuła (`=`, `+`, `-`, `@`) dostają wiodący `'`, aby arkusz kalkulacyjny pokazał je jako tekst.

## Rozbij i wyczyść

- {{cmd:EXPLODE}} (`X`) zamienia zaznaczone odwołanie do bloku z powrotem w osobne obiekty. Definicja pozostaje.
- {{cmd:PURGE}} (`PU`) usuwa definicje bloków, których nic już nie używa. Historia podaje, ile ich usunięto.

## Nazwy bloków

Nazwa może mieć do 255 znaków i może zawierać spacje, ale nie może zaczynać się od gwiazdki ani zawierać znaków `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ani apostrofu wstecznego (backtick). Gdy zapisujesz DXF R12, nazwy są zapisywane wielkimi literami, pozostałe znaki poza literami, cyframi, `$`, `_` i `-` zamieniają się na `_`, a nazwy są obcinane do 31 znaków; historia podaje, ile się zmieniło. Krótkie nazwy wielkimi literami, cyframi i myślnikami, jak `DOOR-900`, przechodzą bez zmian. Zapisany DWG zachowuje nazwy tak, jak je wpisałeś, z wielkimi i małymi literami; zmieniają się tylko znaki, na które DWG nie pozwala (`|` staje się `$0$`, a inne stają się `_`).

## Zapisz blok lub obiekty do osobnego pliku

Wpisz `W` ({{cmd:WBLOCK}}) i wybierz **Obiekty**, **Blok** albo **Cały rysunek**. Wynikiem jest nowy DWG lub DXF zawierający tylko warstwy, style i bloki, których używa, z Twoim punktem bazowym jako początkiem. Dla obiektów możesz je zachować, zamienić w blok albo usunąć z tego rysunku.

## Typowe błędy

- **Blok wylądował daleko od krzyżyka.** Punkt bazowy nie leżał na obiektach. Utwórz blok ponownie, z punktem bazowym na rogu lub zawiasie.
- **„Nic nie zaznaczono; nic nie utworzono.”** Naciśnięto {{key:Enter}} przed zaznaczeniem czegokolwiek.
- **„Ten rysunek nie ma jeszcze bloków: F wstawia blok z pliku, L z biblioteki (albo utwórz go poleceniem BLOCK).”** Wpisz `F`, aby sprowadzić blok z innego rysunku, albo `L` dla biblioteki. Zobacz [Wstawianie z pliku lub z biblioteki](topic:insert-from-file-and-library).
- **„Okna widokowego nie można umieścić w bloku.”** Pomiń ramki okien widokowych w zaznaczeniu.
