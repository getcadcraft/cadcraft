---
title: Etykiety: atrybuty zasilające zestawienia
summary: Zdefiniuj etykietę (jej rodzaj, dozwolone wartości, bloki, do których się stosuje), ustaw ją na odwołaniach do bloków i wyświetl odwołania jako zestawienie, które można zapisać jako CSV.
keywords: etykiety, etykieta, atrybut, zestawienie, wyodrębnianie danych, właściwość, klasa odporności ogniowej, lista wyboru, odwołanie do bloku, TAGS, csv
from: 9b90bacc
---

**Etykieta** to atrybut bloku z definicją: jakiego rodzaju wartość przechowuje, jakie wartości są dozwolone i do których bloków się stosuje. Wartości są zwykłymi atrybutami bloków, więc każdy inny program je odczyta, a {{cmd:ATTEDIT}} je pokaże. Nowe są tylko definicje, a przechowywane są w rysunku.

## Zdefiniuj i ustaw

Wpisz {{cmd:TAGS}} i wybierz:

- {{ui:Zdefiniuj}}: nazwę (litery, cyfry, spację, `_ . -`), rodzaj (`text`, `number`, `integer`, `yesno`, `length`, `angle`), dozwolone wartości oddzielone `;` (zostaw puste dla dowolnych) oraz nazwy bloków, do których się stosuje (`DOOR*` pasuje do każdego bloku zaczynającego się od DOOR; puste oznacza każdy blok).
- {{ui:Zestaw}}: przy zaznaczonych odwołaniach do bloków wpisz `FireRating=60 min; Width=850`. Wartość spoza listy dozwolonych albo nie będąca liczbą dla etykiety liczbowej jest odrzucana i zgłaszana. Jeden krok cofnięcia. Blok, który nie ma atrybutu, otrzymuje go jako ukryty atrybut.
- {{ui:Zestawienie}}: każde odwołanie do bloku, do którego stosuje się etykieta, opcjonalnie pogrupowane według etykiety lub nazwy bloku, drukowane i zapisywane jako CSV.
- {{ui:Usuń (R)}}: usuwa definicję; wartości pozostają na odwołaniach.

Zmiana nazwy etykiety zmienia jej wartości na każdym odwołaniu. Nazwy etykiet nie rozróżniają wielkości liter, tak jak nazwy atrybutów.
