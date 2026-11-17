---
title: Organizowanie rysunku za pomocą klas
summary: Klasy sortują obiekty w drugi sposób, ponad warstwami (Lighting-Fixtures-Spot): pokazuj i ukrywaj je, nadawaj im kolor, typ linii, grubość linii, wypełnienie i styl tekstu, które obiekty mogą przyjmować „wg klasy”, oraz ustaw klasę, do której trafiają nowe obiekty.
keywords: klasa, klasy, CLASSES, CLS, CLASS, wg klasy, ByClass, aktywna klasa, użycie przy tworzeniu, Brak, warstwa projektowa, skala warstwy, wysokość, Vectorworks
from: 672de9cb
---

Warstwy określają, *gdzie* obiekt należy w rysunku; klasy określają, *czym* on jest. Ściana na warstwie `Level 1` może należeć do klasy `Walls-Exterior`, a lampa punktowa na warstwie `Ceiling` do klasy `Lighting-Fixtures-Spot`. Możesz jednocześnie ukryć wszystkie lampy na wszystkich warstwach albo wydrukować wszystkie zewnętrzne ściany grubszą linią, bez przenoszenia czegokolwiek między warstwami.

Każdy obiekt zaczyna w klasie **Brak**. Rysunek bez własnych klas działa dokładnie jak dotychczas.

## Otwórz panel Klasy

Wpisz `CLASSES` (lub `CLS`) i naciśnij {{key:Enter}} albo wybierz {{ui:Klasy…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}. Panel otwiera się nad rysunkiem i pozostaje otwarty podczas rysowania.

- **Dodaj klasę:** wpisz jej nazwę w polu u góry i naciśnij {{key:Enter}}. Znak `-` tworzy poziom: `Lighting-Fixtures-Spot` leży pod `Lighting-Fixtures`, który leży pod `Lighting`; brakujące poziomy są dodawane automatycznie.
- **Pokaż lub ukryj:** oko przy klasie. Ukrycie klasy ukrywa wszystkie klasy pod nią, na ekranie i na wydruku.
- **Aktywna klasa:** okrągły przycisk. Nowe rysowane obiekty trafiają do aktywnej klasy.
- **Wybierz klasę:** kliknij jej nazwę. Przyciski i ustawienia poniżej listy działają wtedy na tę klasę.

Liczba na końcu każdego wiersza to liczba obiektów w tej klasie (w modelu, na arkuszach i w definicjach bloków).

## Umieszczanie obiektów w klasie

Zaznacz obiekty, wybierz klasę w panelu i wybierz {{ui:Ustaw klasę}}. Najpierw zaznacz {{ui:Wg klasy}}, aby obiekty przejęły kolor, typ linii, grubość linii, wypełnienie i styl tekstu z klasy. Możesz też:

- wpisać `CLASS` przy zaznaczonych obiektach i podać nazwę klasy (nowa nazwa tworzy klasę);
- wpisać `CLASS` bez zaznaczenia, aby ustawić aktywną klasę; `?` wyświetla listę klas z liczbą obiektów;
- użyć sekcji {{ui:Klasa}} w panelu Właściwości: klasy oraz przełącznika {{ui:… wg klasy}} dla koloru, typu linii i grubości linii (wypełnienie dla kreskowań, styl tekstu dla tekstu);
- zaznaczyć wg klasy poleceniem `QSELECT`: wybierz właściwość {{ui:Klasa}}.

{{ui:Zaznacz jej obiekty}} zaznacza każdy obiekt wybranej klasy na otwartym arkuszu (albo w modelu).

## Jak obiekt jest rysowany: obiekt, klasa, warstwa

Kolor, typ linii, grubość linii, wypełnienie i styl tekstu obiektu mogą być **wg klasy**, tak jak mogą być wg warstwy. CadCraft sprawdza w tej kolejności:

1. Własną wartość obiektu, chyba że ta wartość jest wg klasy.
2. Wartość klasy, gdy obiekt przyjmuje ją wg klasy, a klasa ją ma.
3. Wartość warstwy.

Klasa, której kolor (lub typ linii …) jest {{ui:Nie ustawiono}}, przekazuje obiekt do swojej warstwy. Wybierz klasę i ustaw jej {{ui:Kolor}}, {{ui:Typ linii}}, {{ui:Grubość linii}}, {{ui:Wypełnienie (kreskowania)}} i {{ui:Styl tekstu}} pod przyciskami. Zaznacz {{ui:Użyj przy tworzeniu}}, aby nowe obiekty rysowane w tej klasie przejmowały wszystkie te wartości wg klasy.

Każda zmiana w panelu to jeden krok cofnięcia.

## Zmiana nazwy i usuwanie

{{ui:Zmień nazwę}} edytuje nazwę w miejscu: naciśnij {{key:Enter}}, aby ją zachować, {{key:Esc}}, aby zrezygnować. Klasy pod nią zmieniają nazwę razem z nią (`Lighting-Spot` staje się `Light-Spot`, gdy `Lighting` zmienia się w `Light`), tak samo jak ich obiekty i wszelkie nadpisania okien widokowych.

{{ui:Usuń}} usuwa klasę i wszystkie klasy pod nią. Ich obiekty przechodzą do **Brak**. Jedno {{ui:Cofnij}} przywraca wszystko. Klasy **Brak** nie można przemianować ani usunąć.

## Warstwy projektowe

W sekcji {{ui:Warstwy projektowe}} każda warstwa może mieć skalę (`1:50`) i rzędną. Warstwa projektowa to zwykła warstwa: przestrzeń modelu i arkusze działają jak dotąd, a skala i rzędna są zachowywane w rysunku dla narzędzi, które z nich skorzystają.

## W plikach DWG i DXF

Klasy są zachowywane w każdej wersji DWG, którą zapisuje CadCraft, oraz w DXF (R12 i 2000). Klasa każdego obiektu to jego własne dane rozszerzone (aplikacja `CADCRAFT_CLASS`), więc AutoCAD i inne programy zachowują ją razem z obiektem. Lista klas, kolory i widoczność są zapisane w jednym nieużywanym bloku o nazwie `CADCRAFT_CLASSES`; jeśli inny program oczyści ten blok, CadCraft i tak odnajdzie klasę każdego obiektu, a klasy wrócą z ustawieniami domyślnymi.

Inne programy nie znają klas: rysują każdy obiekt według jego własnych wartości albo wartości jego warstwy.

Zob. też [Nadpisania klas w oknie widokowym](topic:viewport-overrides) oraz [Organizowanie rysunku za pomocą warstw](topic:layers).
