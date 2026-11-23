---
title: Wstaw z pliku lub z biblioteki
summary: Wczytaj blok albo cały rysunek z innego pliku DWG lub DXF i umieść elementy z Biblioteki, pliku albo innej biblioteki, wraz z ich autorstwem i aktualizacjami.
keywords: wstaw, plik, biblioteka, librarycraft, element, sprzęt, blok z innego rysunku, wblock, centrum projektowe, autorstwo, atrybucja, licencja, aktualizacja, kanał, item.json
from: f6e4e452
---

## Wstaw blok z innego rysunku

1. Wpisz `I` i naciśnij {{key:Enter}} albo wybierz {{ui:Wstaw}} w grupie Bloki.
2. Wiersz poleceń na dole okna pyta `Podaj nazwę bloku lub [Plik/Biblioteka]`. Wpisz tam `F` i naciśnij {{key:Enter}}.
3. Wybierz plik DWG albo DXF na tym komputerze. Jest odczytywany tutaj; nie jest otwierany i nic nie jest wysyłane.
4. W oknie dialogowym {{ui:Wstaw z}} wybierz blok z listy (wpisz w {{ui:Filtruj bloki}}, aby go znaleźć) albo zostaw {{ui:Cały rysunek}}. Wybierz {{ui:Wstaw}}.
5. Kliknij, gdzie ma trafić, i uzupełnij atrybuty, o które zapyta.

Możesz też zacząć od panelu {{ui:Bloki}}: wpisz `F` w jego polu {{ui:Filtruj bloki}} i naciśnij {{key:Enter}}, albo wpisz coś, do czego nie pasuje żaden blok, i wybierz {{ui:Z pliku…}}. `L` i {{ui:Biblioteka…}} otwierają bibliotekę w ten sam sposób. Przed wersją 0.10.1 litera wpisana w {{ui:Filtruj bloki}} szukała tylko bloków tego rysunku i odpowiadała „Żaden blok nie pasuje do filtra.”

Aby mieć pod ręką rysunek z własnymi blokami, wybierz {{ui:Dodaj rysunek}} w sekcji {{ui:Biblioteki}} panelu {{ui:Bloki}} i wskaż plik DWG albo DXF. Jego bloki są wypisane z podglądem; kliknij jeden, aby go umieścić.

Cały rysunek wchodzi jako jeden blok nazwany od pliku. Bloki zagnieżdżone w wybranym bloku też wchodzą. Warstwy, których używają, są dodawane do tego rysunku.

Jeśli inny rysunek ma inne jednostki (na przykład cale i milimetry), CadCraft skaluje odwołanie i informuje o tym w historii.

### Gdy nazwa jest już zajęta

Jeśli ten rysunek ma już blok o tej samej nazwie, CadCraft pyta:

- {{ui:Zachowaj istniejący}} używa bloku o tej nazwie z tego rysunku.
- {{ui:Zmień nazwę}} wprowadza nowy blok jako `Nazwa (2)`.

Całe wstawienie to jeden krok: {{key:Mod+Z}} usuwa odwołanie i skopiowane definicje.

## Otwórz bibliotekę

Wybierz {{ui:Biblioteka…}} w panelu {{ui:Bloki}}, albo {{ui:Biblioteka}} w grupie Bloki, albo wpisz `LIB`. Przy monicie `INSERT` także `L` ją otwiera.

Biblioteka ma cztery źródła, jako karty:

- {{ui:Biblioteka}}: biblioteka CadCraft. Szukaj po nazwie, producencie lub modelu i filtruj po kategorii.
- {{ui:Pliki…}}: plik elementu (`item.json`) z dowolnej biblioteki albo rysunek, arkusz lub model 3D, z którego tworzy się elementy: DWG albo DXF (każdy blok staje się elementem), CSV z kolumnami nazwy i rozmiaru albo model glTF lub OBJ. Nic nie jest wysyłane.
- {{ui:Standardowy}}: profile stalowe (jako przekroje, elewacje lub elementy 3D) i standardowe części, takie jak śruby, nakrętki i łożyska, wykonane tutaj na podstawie opublikowanych tabel. Zobacz [Umieszczanie profili stalowych i części standardowych](topic:steel-and-standard-parts).
- {{ui:Inne kanały}}: inne biblioteki, które odpowiadają tak samo jak Biblioteka. Podaj ich adres raz; ta przeglądarka go zapamiętuje.

Każda karta pokazuje podgląd, nazwę, producenta i model, licencję oraz wersję. Element wycofany jest oznaczony {{ui:Wycofany}} wraz z powodem; CadCraft pyta, zanim go umieścisz.

## Umieść element

1. Kliknij {{ui:Umieść}} na karcie.
2. Kliknij, gdzie ma trafić element. Wpisz najpierw `R`, aby go obrócić, albo `S`, aby go skalować.
3. Przy `Podaj numer elementu (CC-ITEM)` naciśnij {{key:Enter}}, aby wziąć kolejny wolny numer, albo wpisz własny.

Element staje się blokiem o nazwie `LIB_<nazwa>_v<wersja>`, narysowanym w jednostkach tego rysunku. Jeśli rysunek nie ma jednostek, element wchodzi w milimetrach, a historia o tym informuje; najpierw ustaw {{ui:Jednostki}} w prawym panelu.

Jego dane są zapisane jako niewidoczne atrybuty: identyfikator i wersja elementu, licencja i autorstwo, producent, model, kategoria i rozmiary. Zobacz [Atrybuty bloku](topic:attributes).

## Elementy w twoim języku

Element może mieć nazwę i opis w innych językach. Gdy ma je w języku ustawionym w CadCraft (Ustawienia › Ogólne › Język), karta i nazwa elementu w bloku korzystają z nich. Sam blok ma nazwę utworzoną z własnej nazwy elementu, więc rysunek ma jeden blok na element, niezależnie od tego, który język go umieścił.

## Sprawdź aktualizacje

1. Otwórz bibliotekę.
2. Kliknij {{ui:Sprawdź aktualizacje}}.

Każdy element biblioteki w rysunku jest wypisany wraz z numerami i informacją, czy jest aktualny, ma nowszą wersję (i co się zmieniło), czy został wycofany. Kliknij {{ui:Zaktualizuj}} w wierszu albo {{ui:Zaktualizuj wszystkie}}. Każde odwołanie przechodzi do bloku nowej wersji i zachowuje swój numer elementu, ilość, miejsce, kąt i warstwę. {{key:Mod+Z}} cofa aktualizację.

## Podaj autorstwo tego, czego użyłeś

Kliknij {{ui:Autorstwo z biblioteki}}. Każdy element jest wypisany wraz z wierszem atrybucji i licencją.

- {{ui:Kopiuj atrybucję}} kopiuje wiersz jednego elementu; {{ui:Kopiuj wszystko}} kopiuje każdy wiersz.
- {{ui:Pobierz CSV}} zapisuje listę z numerami elementów, producentami, modelami, licencjami i atrybucjami. Otwiera się w każdym arkuszu kalkulacyjnym.

Licencje takie jak CC BY wymagają podania autora tam, gdzie używasz dzieła. Umieść wiersze na rysunku, w specyfikacji albo w notatkach projektu.

## Symbole i zasoby

Biblioteka ma trzy rodzaje elementów: Symbole (konwencje rysunkowe, 2D), Typy (z czego składa się element) i Zasoby (obiekty fizyczne). W karcie {{ui:Biblioteka}} lista {{ui:Rodzaj elementu}} pokazuje Symbole i zasoby razem, tylko Symbole albo tylko Zasoby. Typy są tym, z czego zbudowany jest projekt BimCraft, więc CadCraft ich nie wypisuje.

## Zaloguj się do biblioteki

Kliknij {{ui:Zaloguj się do biblioteki}}. Otwiera się małe okno na stronie; po zalogowaniu CadCraft może pokazywać elementy twojego zespołu i rejestrować, co umieszczasz, dzięki czemu dowiesz się, gdy element, którego użyłeś, się zmieni. Logowanie trwa w tej karcie przeglądarki. Możesz je cofnąć w dowolnej chwili na stronie zabezpieczeń swojego konta.

## Trzymaj własne obiekty w Moje obiekty

{{ui:Moje obiekty}} to prywatna lista w Bibliotece, widoczna tylko dla ciebie. Nie ma jej w publicznej bibliotece, w wyszukiwaniu ani nie pokazuje się zespołowi; podąża za twoim kontem na każdym komputerze, na którym logujesz się do biblioteki.

1. W panelu Biblioteka kliknij {{ui:Pliki…}} i odczytaj plik.
2. Przy elemencie, którego chcesz użyć ponownie, kliknij {{ui:Zachowaj w moich obiektach}}.
3. Później kliknij {{ui:Moje obiekty}} i {{ui:Umieść}}. Umieszcza się jak każdy element biblioteki, a {{ui:Sprawdź aktualizacje}} też go obejmuje.
4. {{ui:Usuń z moich obiektów}} usuwa go z listy. Kopie już umieszczone w rysunkach zostają.

Musisz być zalogowany do biblioteki. Odczytanie pliku niczego nie wysyła; zachowanie elementu wysyła tylko ten jeden element na twoje konto.

:::note
Moje obiekty są w testach i mogą nie być jeszcze otwarte dla twojego konta. Jeśli pojawi się „Moje obiekty nie są jeszcze otwarte dla tego konta”, nadal możesz umieszczać elementy z własnych plików przez {{ui:Pliki…}}.
:::

## Częste błędy

- **„Tworzenie elementów z typów IFC należy do BimCraft.”** Pliki IFC i rodzin są odczytywane w aplikacji BimCraft. Utwórz element tam albo w Bibliotece, a potem użyj jego `item.json` tutaj.
- **„Nie udało się połączyć z biblioteką.”** Jesteś offline albo biblioteka nie działa. Elementy już w rysunku nie są wtedy zmieniane.
- **Element jest o wiele za duży albo za mały.** Jednostki rysunku są błędne albo nieustawione. Cofnij, ustaw {{ui:Jednostki}} i umieść element ponownie.
