---
title: Sprawdź, w jakich jednostkach jest rysunek
summary: Sprawdź, czy otwarty rysunek jest w milimetrach, calach czy w innych jednostkach, zmierz coś, by to potwierdzić, i dowiedz się, dlaczego inny program może podawać inne jednostki dla tego samego DXF.
keywords: jednostki, jakie jednostki, które jednostki, sprawdź jednostki, milimetry, mm, cale, metryczne, calowe, jednostki DXF, STEP do DXF, złe jednostki, cale czy mm, INSUNITS, MEASUREMENT, jednostki rysunku, PartCraft DXF
from: c0ee75bb
---

## Co zrobisz

Dowiesz się, co oznacza jedna jednostka w otwartym rysunku, i upewnisz się, że odczytywane liczby mają rozmiar, którego się spodziewasz.

## Kroki

1. Otwórz rysunek, a następnie naciśnij {{key:Esc}}, aby nic nie było zaznaczone, na karcie {{ui:Model}}.
2. W prawym panelu, w sekcji {{ui:Bieżące ustawienia}}, odczytaj {{ui:Jednostki}}. Pokazuje, co oznacza jedna jednostka rysunku: {{ui:Milimetry}}, {{ui:Cale}}, {{ui:Stopy}} itd. DXF zapisany z PartCraft pokazuje {{ui:Milimetry}}.
3. Sprawdź to, mierząc coś o znanym rozmiarze. Wpisz {{cmd:DIST}} i wskaż dwa końce krawędzi albo otworu. Jeśli element o znanym wymiarze 25 mm pokazuje `25`, rysunek jest w milimetrach; jeśli pokazuje około `0.98`, jest w calach.

{{ui:Bez jednostek}} oznacza, że plik nie podaje jednostki. CadCraft traktuje wtedy jednostkę papieru (milimetry dla papieru ISO, cale dla papieru US), a liczby są tylko tak poprawne, jak program, który je zapisał.

## Jeśli jednostki są błędne

Zmiana {{ui:Jednostki}} **niczego nie przeskalowuje**: liczby pozostają takie same, zmienia się tylko ich znaczenie. Ustaw ją więc tylko po to, by wskazać, czym rysunek naprawdę jest. Jeśli liczby są w milimetrach, a {{ui:Jednostki}} mówią {{ui:Cale}}, wybierz {{ui:Milimetry}}. Jeśli potrzebujesz samej geometrii w innych jednostkach, przeskaluj ją poleceniem {{cmd:SCALE}} (25.4 z cali na milimetry, 1/25.4 w drugą stronę), a potem ustaw {{ui:Jednostki}}.

Sposób zapisu długości (dziesiętny, stopy i cale, ułamki) to osobne ustawienie, {{ui:Format długości}}: zob. [Jednostki, rozmiary papieru i skale](topic:units-papers-scales).

## Dlaczego inny program może podawać cale

DXF podaje swoje jednostki w nagłówku. Najstarszy rodzaj DXF, R12, nie miał w ogóle zmiennej jednostek, więc program, który czyta R12 ściśle, ignoruje tę zapisaną i przechodzi na własne ustawienie domyślne, które często oznacza cale. Geometria w pliku jest w obu przypadkach taka sama: różni się tylko etykieta. PartCraft zapisuje pliki DXF jako R12 i podaje milimetry na dwa sposoby (`$INSUNITS` 4 i `$MEASUREMENT` 1), aby więcej programów odczytywało je poprawnie. Jeśli program nadal podaje cale, ustaw w nim jednostki na milimetry przy otwieraniu pliku.

Wstawienie pliku do rysunku (zamiast jego otwarcia) przelicza jego jednostki: zob. [Jednostki przy imporcie](topic:units-on-import).
