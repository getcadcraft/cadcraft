---
title: Ucz się z przykładowego rysunku
summary: Otwórz przykładowy dom CadCraft albo przykładowy stan wykonany i przejdź przez jego arkusze, tabliczkę rysunkową, wymiary i warstwy.
keywords: przykład, przykłady, przykładowy rysunek, nauka, samouczek, przewodnik, tabliczka rysunkowa, arkusze, stan wykonany, zestaw architektoniczny, otwórz przykład
from: aa1f960a
---

## Czego się nauczysz

Jak zbudowany jest gotowy zestaw: przestrzeń modelu, arkusze z oknami widokowymi w skali, tabliczka rysunkowa z atrybutami, wymiary w stopach i calach oraz w milimetrach, warstwy. Przykłady są własnością CadCraft i można ich używać do dowolnych celów (CC0).

## Otwórz przykład

1. W lewym panelu, w sekcji {{ui:Rysunek}}, naciśnij {{ui:Otwórz przykład}} (albo wpisz {{cmd:SAMPLES}}; w stylach menu z wstążką jest w menu {{ui:Plik}}).
2. Naciśnij {{ui:Otwórz}} obok {{ui:Przykładowy dom}}. Otworzy się na osobnej karcie, więc Twoja praca pozostaje otwarta.

## Obejrzyj model

1. Naciśnij {{ui:Zasięg}} (albo wpisz `ZOOM`, a potem `E`): rzut kondygnacji, elewacja frontowa, przekrój i detal ściany.
2. W {{ui:Warstwy}} naciśnij oko obok `A-ANNO-DIMS`, aby ukryć wymiary, i jeszcze raz, aby je pokazać.
3. Zaznacz drzwi: Właściwości pokazują odwołanie do bloku `DOOR-32`. Drzwi i okna są blokami, wstawionymi obróconymi i odbitymi.

## Arkusze

1. Naciśnij {{ui:A-101 FLOOR PLAN}} pod rysunkiem: arkusz ARCH D z jednym oknem widokowym w skali 1/4" = 1'-0".
2. Kliknij dwukrotnie wewnątrz okna widokowego, aby pracować przez nie na modelu; kliknij dwukrotnie na zewnątrz, aby wrócić.
3. {{ui:A-501 DETAILS}} pokazuje detal ściany w skali 1 1/2" = 1'-0": ten sam model w innej skali.

## Tabliczka rysunkowa

1. Na dowolnym arkuszu kliknij dwukrotnie tabliczkę rysunkową: {{ui:Edytuj atrybuty}} wyświetla PROJECT, TITLE, SCALE, DATE, DRAWN i SHEET.
2. Zmień DRAWN na swoje inicjały i naciśnij {{ui:OK}}.
3. Aby zmienić samą tabliczkę rysunkową na każdym arkuszu, zaznacz ją i wybierz {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Edytuj w miejscu}}. Zobacz [Atrybuty](topic:attributes).

## Stan wykonany

Otwórz {{ui:Przykładowy stan wykonany}} w ten sam sposób. Szare kropki na `SCAN-SLICE` to wycinek skanu; ściany na `AB-WALL` zostały obrysowane na ich podstawie. Ściana wschodnia jest o 35 mm poza kątem prostym: mówią o tym wymiary, dwukrotnie, w milimetrach (`AB-DIMS-MM`) i w stopach i calach (`AB-DIMS-FTIN`, te same długości przez skalę pomiarową). Czerwone chmury na `REV-1` zaznaczają to, co wykazała inwentaryzacja.

## Dalej

- [Zmiana wielkości tekstu wymiaru](topic:change-dimension-text-size)
- [Drukowanie do PDF](topic:plot-pdf): wydrukuj {{ui:A-101 FLOOR PLAN}}.
