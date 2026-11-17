---
title: Wstawianie z pliku lub biblioteki
summary: Wprowadź blok albo cały rysunek z innego pliku DWG lub DXF oraz umieszczaj elementy z Biblioteki, pliku lub innej biblioteki, wraz z ich autorstwem i aktualizacjami.
keywords: wstaw, plik, biblioteka, librarycraft, element, sprzęt, blok z innego rysunku, wblock, centrum projektowe, autorstwo, licencja, aktualizacja, kanał, item.json
from: 316188d2
---

## Wstawianie bloku z innego rysunku

1. Wpisz `I` i naciśnij {{key:Enter}}, albo kliknij {{ui:Wstaw}} w grupie Bloki.
2. Przy `Podaj nazwę bloku lub [Plik (F)/Biblioteka (L)]` wpisz `F` i naciśnij {{key:Enter}}.
3. Wybierz plik DWG lub DXF z tego komputera. Jest on odczytywany tutaj; nie jest otwierany i nic nie jest wysyłane.
4. W oknie dialogowym {{ui:Wstaw z}} wybierz blok z listy (wpisz w {{ui:Filtruj bloki}}, aby go znaleźć), albo zostaw {{ui:Cały rysunek}}. Kliknij {{ui:Wstaw}}.
5. Kliknij, gdzie ma się znaleźć, i uzupełnij atrybuty, o które zostaniesz poproszony.

Cały rysunek jest wstawiany jako jeden blok o nazwie pliku. Bloki zawarte w wybranym bloku też trafiają do rysunku. Warstwy, z których korzystają, są dodawane do tego rysunku.

Jeśli inny rysunek ma inne jednostki (na przykład cale i milimetry), CadCraft przeskaluje odwołanie do zgodności i poinformuje o tym w historii.

### Gdy nazwa jest już użyta

Jeśli ten rysunek ma już blok o tej samej nazwie, CadCraft zapyta:

- {{ui:Zachowaj istniejący}} użyje bloku o tej nazwie z tego rysunku.
- {{ui:Zmień nazwę}} wstawi nowy blok jako `Nazwa (2)`.

Całe wstawienie to jeden krok: {{key:Mod+Z}} usuwa odwołanie i skopiowane definicje.

## Otwieranie biblioteki

Kliknij {{ui:Biblioteka…}} w panelu {{ui:Bloki}}, albo {{ui:Biblioteka}} w grupie Bloki, albo wpisz `LIB`. Przy monicie `INSERT` także `L` ją otwiera.

Biblioteka ma cztery źródła, jako karty:

- {{ui:Biblioteka}}: biblioteka CadCraft. Szukaj po nazwie, producencie lub modelu i filtruj według kategorii.
- {{ui:Pliki…}}: plik elementu (`item.json`) z dowolnej biblioteki albo rysunek, arkusz kalkulacyjny lub model 3D, z których można utworzyć elementy: DWG lub DXF (każdy blok staje się elementem), CSV z kolumnami nazwy i rozmiaru albo model glTF lub OBJ. Nic nie jest wysyłane.
- {{ui:Standard}}: profile stalowe (jako przekroje, elewacje lub elementy 3D) oraz części normowe, takie jak śruby, nakrętki i łożyska, tworzone tutaj na podstawie opublikowanych tablic. Zobacz [Umieszczanie profili stalowych i części normowych](topic:steel-and-standard-parts).
- {{ui:Inne kanały}}: inne biblioteki, które odpowiadają tak samo jak Biblioteka. Dodaj ich adres raz; przeglądarka go zapamięta.

Każda karta pokazuje podgląd, nazwę, producenta i model, licencję oraz wersję. Element wycofany jest oznaczony {{ui:Wycofany}} wraz z powodem; CadCraft pyta, zanim umieścisz taki element.

## Umieszczanie elementu

1. Kliknij {{ui:Umieść}} na karcie.
2. Kliknij, gdzie ma się znaleźć element. Najpierw wpisz `R`, aby go obrócić, albo `S`, aby go przeskalować.
3. Przy `Podaj numer elementu (CC-ITEM)` naciśnij {{key:Enter}}, aby użyć następnego wolnego numeru, albo wpisz własny.

Element staje się blokiem o nazwie `LIB_<nazwa>_v<wersja>`, narysowanym w jednostkach tego rysunku. Jeśli rysunek nie ma jednostek, element zostaje wstawiony w milimetrach, a historia to podaje; najpierw ustaw {{ui:Jednostki}} w prawym panelu.

Jego dane są dołączane jako niewidoczne atrybuty: identyfikator elementu i wersja, licencja i autorstwo, producent, model, kategoria oraz wymiary. Zobacz [Atrybuty bloku](topic:attributes).

## Elementy w języku aplikacji

Element może mieć nazwę i opis w innych językach. Gdy je ma w języku, na który ustawiony jest CadCraft (Ustawienia › Ogólne › Język), karta i nazwa elementu bloku korzystają z tych wersji. Sam blok zachowuje nazwę utworzoną z nazwy elementu, dzięki czemu rysunek ma jeden blok na element, niezależnie od języka, w którym go umieszczono.

## Sprawdzanie aktualizacji

1. Otwórz bibliotekę.
2. Kliknij {{ui:Sprawdź aktualizacje}}.

Każdy element biblioteki w rysunku jest wymieniony wraz z numerami elementów i informacją, czy jest aktualny, ma nowszą wersję (i co się w niej zmieniło), czy został wycofany. Kliknij {{ui:Zaktualizuj}} przy wierszu albo {{ui:Zaktualizuj wszystkie}}. Każde odwołanie przechodzi do bloku nowej wersji i zachowuje swój numer elementu, ilość, położenie, kąt i warstwę. {{key:Mod+Z}} cofa aktualizację.

## Podawanie autorstwa użytych elementów

Kliknij {{ui:Autorstwo z biblioteki}}. Każdy element jest wymieniony wraz z wierszem autorstwa i licencją.

- {{ui:Kopiuj atrybucję}} kopiuje wiersz jednego elementu; {{ui:Kopiuj wszystko}} kopiuje wszystkie wiersze.
- {{ui:Pobierz CSV}} zapisuje listę z numerami elementów, producentami, modelami, licencjami i autorstwem. Otwiera się w każdym arkuszu kalkulacyjnym.

Licencje takie jak CC BY wymagają podania autora tam, gdzie używa się dzieła. Umieść te wiersze na rysunku, w specyfikacji albo w notatkach projektowych.

## Symbole i zasoby

Biblioteka ma trzy rodzaje elementów: Symbole (konwencje rysunkowe, 2D), Typy (z czego składa się element) i Zasoby (obiekty fizyczne). Na karcie {{ui:Biblioteka}} lista {{ui:Rodzaj elementu}} pokazuje symbole i zasoby razem, tylko symbole albo tylko zasoby. Typy są podstawą projektów BimCraft, więc CadCraft ich nie wyświetla.

## Logowanie do biblioteki

Kliknij {{ui:Zaloguj się do biblioteki}}. Otworzy się małe okno na stronie; po zalogowaniu CadCraft może pokazywać elementy zespołu i rejestrować umieszczane elementy, dzięki czemu otrzymasz informację, gdy element, którego użyto, się zmieni. Logowanie obowiązuje w tej karcie przeglądarki. Możesz je odwołać w dowolnym momencie na stronie zabezpieczeń konta.

## Typowe błędy

- **„Tworzenie elementów z typów IFC jest w BimCraft.”** Pliki IFC i rodzin są odczytywane w aplikacji BimCraft. Utwórz tam element albo w Bibliotece, a następnie użyj jego `item.json` tutaj.
- **„Nie udało się połączyć z biblioteką.”** Brak połączenia z internetem albo biblioteka jest niedostępna. Elementy już w rysunku nie są wtedy zmieniane.
- **Element jest zbyt duży albo zbyt mały.** Jednostki rysunku są błędne albo nie są ustawione. Cofnij, ustaw {{ui:Jednostki}} i umieść element ponownie.
