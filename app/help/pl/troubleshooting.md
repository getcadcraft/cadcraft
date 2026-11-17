---
title: Rozwiązywanie problemów
summary: Komunikaty, które pokazuje CadCraft, i problemy, na które możesz natrafić, każdy z przyczyną i rozwiązaniem.
keywords: problem, błąd, nie działa, komunikat, nie można otworzyć, nieznane polecenie, nic się nie dzieje, zablokowany, klawisze nie działają, pusty, brakujący, naprawa
from: 8299b222
---

## Otwieranie plików

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| „CadCraft otwiera rysunki DWG i DXF. „…” nie jest żadnym z nich.” | Plik nie jest `.dwg` ani `.dxf`. | Otwórz sam plik rysunku. Plik PDF można zaimportować (Otwórz pyta: importować czy dołączyć, patrz [Podkłady PDF](topic:pdf-underlay)); obrazy wstawia się poleceniem `IMAGEATTACH`. |
| „Ten plik binarny DXF kończy się w środku obiektu: plik jest ucięty lub uszkodzony.” | Plik binarny DXF urywa się przed swoim końcem. | Wpisz RECOVER, aby otworzyć to, co da się odczytać, albo poproś o plik ponownie. |
| „Ten plik nie jest czytelnym DXF (błędny kod grupy w wierszu …).” | Plik DXF jest uszkodzony albo nie jest naprawdę DXF. | Poproś o plik ponownie albo o DWG. |
| „Nie udało się odczytać tego rysunku. Może być uszkodzony albo zapisany w wersji, której czytnik jeszcze nie obsługuje (…).” | Czytnik DWG nie mógł go odczytać. | Poproś o DWG zapisany w starszej wersji albo o DXF. |
| „Ten rysunek pochodzi z AutoCAD R11 / R12 (DWG AC1009), starszego niż CadCraft potrafi odczytać …” | Pliki DWG z Release 12 i wcześniejszych używają formatu, którego CadCraft nie odczytuje. | W programie, który go utworzył, zapisz go jako DXF (dowolna wersja) albo jako nowszy DWG, i otwórz ten plik. Polecenie Zapisz jako w CadCraft oferuje DXF R12 dla programów, które wymagają tego starego formatu. |
| „Nie udało się otworzyć …” i komunikat sieci przy pierwszym DWG | Czytnik DWG nie mógł zostać pobrany: brak połączenia, a CadCraft nie jest zapisany do pracy offline, albo połączenie zostało przerwane. | Połącz się z siecią i spróbuj ponownie albo otwórz DXF. Kliknij {{ui:Zapisz do pracy offline}} i poczekaj na „Gotowe do pracy offline”, aby pliki DWG otwierały się offline następnym razem. Zobacz [Praca offline](common:offline). |
| Przycisk offline pokazuje „Nie udało się zapisać” | Niektóre pliki nie zostały pobrane. | Sprawdź połączenie i kliknij przycisk, aby spróbować ponownie. |
| Przycisk offline pokazuje „Tryb offline niedostępny” | Okna prywatne i niektóre zarządzane komputery nie mogą zachować kopii offline. | Użyj zwykłego okna albo pozostań online. |
| CadCraft nie otwiera się bez połączenia | Nie zapisano go do pracy offline w tej przeglądarce, albo przeglądarka ją wyczyściła. | Następnym razem, gdy będzie połączenie, kliknij {{ui:Zapisz do pracy offline}} i poczekaj na „Gotowe do pracy offline”. |
| Rysunek się otwiera, ale brakuje części | Obiektów, których CadCraft jeszcze nie potrafi narysować, albo warstw wyłączonych lub zamrożonych w pliku. | Przeczytaj „Informacje o pliku” w lewym panelu. Sprawdź panel {{ui:Warstwy}}. |
| Tekst zawija się do dwóch wierszy | CadCraft rysuje tekst czcionką w stylu Helvetica, szerszą niż niektóre czcionki CAD. | Skróć tekst we Właściwościach albo zaakceptuj dodatkowy wiersz. |
| Okrąg wygląda jak elipsa albo lustrzany tekst czyta się poprawnie | Obiekt został narysowany na pochylonej płaszczyźnie albo oglądany od spodu w programie, który utworzył plik. CadCraft pokazuje go tak, jak widok z góry tego programu; tekst pozostaje czytelny. | Nic do naprawy. Aby zobaczyć to tak, jak w tamtym programie, poproś o spłaszczony rysunek albo o obiekty narysowane z góry. |
| Blok, okrąg lub wymiar znajduje się w innym miejscu niż w programie, który utworzył plik | Przypadek rysunku, który CadCraft odczytuje błędnie. | Napisz do nas na Discord, w miarę możliwości z plikiem. |

## Wiersz poleceń

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| „Nieznane polecenie „…”. Wpisz HELP, aby zobaczyć listę.” | Nie ma polecenia ani aliasu o takiej nazwie. | Wpisz `HELP` albo zobacz [Lista poleceń](topic:commands). Niektóre znane polecenia są [jeszcze nie zbudowane](topic:not-built-yet). |
| „Brak takiego polecenia” obok wiersza poleceń podczas pisania | To, co wpisano, na razie do niczego nie pasuje. | Pisz dalej albo sprawdź pisownię. |
| „Wymagany punkt lub słowo kluczowe opcji.” | Wpisano coś, co nie jest punktem ani opcją. | Sprawdź format: `x,y`, `@dx,dy`, `@d<a` albo pojedyncza liczba. Zobacz [Wpisywanie współrzędnych i odległości](topic:coordinate-entry). |
| „Wymagana dodatnia liczba albo dwa punkty.” | Odległość była ujemna albo nie była liczbą. | Wpisz dodatnią liczbę albo kliknij dwa punkty. |
| „Wymagany kąt w stopniach albo dwa punkty.” | Kąt nie był liczbą. | Wpisz stopnie jako zwykłą liczbę. |
| „Wymagana liczba.” | Oczekiwano liczby. | Wpisz same cyfry. |
| „Nieprawidłowe słowo kluczowe opcji.” | Litery nie pasują do żadnej opcji. | Wpisz wielkie litery pokazane w nawiasach kwadratowych. |
| `*Cancel*` | Naciśnięto {{key:Esc}} albo {{key:Enter}} tam, gdzie wymagany był punkt. | Uruchom polecenie ponownie. |
| Pisanie nie trafia do wiersza poleceń | Kursor jest w polu w panelu albo w oknie dialogowym. | Naciśnij {{key:Enter}} albo {{key:Esc}}, albo kliknij na rysunku. |
| Polecenie używa obiektów, których nie wskazano | Zostały zaznaczone przed uruchomieniem polecenia. | Naciśnij {{key:Esc}} przed poleceniem. |
| Linia poszła w nieoczekiwane miejsce | `x,y` jest bezwzględne. | Użyj `@dx,dy` dla punktów względnych. |
| „Najpierw zakończ lub anuluj bieżące polecenie (Esc).” | Naciśnięto {{key:Mod+S}} podczas działania polecenia. | Naciśnij {{key:Esc}}, a potem zapisz. |
| „Nie udało się zapisać jako DWG (AutoCAD 2000): … Spróbuj Zapisz jako, a potem DXF.” | Czegoś w rysunku nie można zapisać jako DWG. | Naciśnij {{key:Mod+Shift+S}}, wybierz {{ui:DXF R12}} i kliknij {{ui:Zapisz}}. |
| „Nie zapisano.” | Zamknięto okno {{ui:Zapisz kopię jako}} przyciskiem {{ui:Anuluj}} albo {{key:Esc}}. | Naciśnij ponownie {{key:Mod+Shift+S}} i kliknij {{ui:Zapisz}}. |

## Edycja

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Obiektu nie da się zaznaczyć | Jego warstwa jest zablokowana, wyłączona lub zamrożona; albo włączony jest arkusz, a obiekt to model wewnątrz okna widokowego. | Odblokuj warstwę albo przejdź na kartę {{ui:Model}}. |
| „Nic tam nie znaleziono.” | Pod kliknięciem nie ma obiektu. | Powiększ widok i kliknij na samą linię. |
| „Nic tam nie przecina tego obiektu.” | {{cmd:TRIM}} nie znalazł obiektu przecinającego wskazany fragment. | Sprawdź, czy linia tnąca naprawdę go przecina. |
| „Nie można przyciąć tego obiektu.” | Przycinanie działa na liniach, łukach, okręgach i polilinii. | Najpierw rozbij bloki albo usuń obiekt i narysuj go ponownie. |
| „Brak granicy w tym kierunku.” | {{cmd:EXTEND}} nie znalazł niczego, do czego mógłby dojść. | Wskaż bliżej końca, który ma się wydłużyć. |
| „Nie można odsunąć tego obiektu.” | Odsunięcie działa na liniach, łukach, okręgach i polilinii. | Najpierw rozbij go albo narysuj linię równoległą. |
| „Nie można odsunąć tak daleko.” | Odsunięcie wywróciłoby kształt na lewą stronę. | Użyj mniejszej odległości. |
| „Promień jest za duży.” lub „Odległość jest za duża.” | Zaokrąglenie albo fazka wykroczyłaby poza koniec linii. | Ustaw mniejszy promień przez `R` albo mniejsze odległości przez `D`. |
| „Tylko pierwszy lub ostatni segment otwartej polilinii można przyciąć.” | Narożnik wcinałby się w środek polilinii. | Wskaż dwa sąsiednie segmenty polilinii albo użyj `P` dla każdego narożnika. |
| „Wskaż drugą, inną linię.” | Drugi wybór był tą samą linią albo nie był linią. | Wskaż inną linię. |
| „Rozbijane są tylko polilinie, odwołania do bloków i wymiary.” | Zaznaczenie nie zawierało niczego do rozbicia. | Zaznacz polilinię, odwołanie do bloku albo wymiar. |
| „To jest bieżąca warstwa. Najpierw ustaw inną warstwę jako bieżącą.” | Próbowano wyłączyć bieżącą warstwę. | Kliknij nazwę innej warstwy, a potem wyłącz tę. |
| „Warstwa o nazwie … już istnieje.” | Nazwy warstw muszą być unikalne. | Wybierz inną nazwę. |
| „Nie ma nic do cofnięcia.” | Nie ma już nic do cofnięcia albo otwarto lub rozpoczęto rysunek (to czyści historię). | — |

## Wymiary i bloki

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| Tekst i strzałki wymiaru są bardzo małe lub bardzo duże | Rozmiary podane są w jednostkach rysunku; skala ogólna nie pasuje do rysunku. | Ustaw {{cmd:DIMSCALE}} na skalę wydruku; zobacz [Ustawianie rozmiarów wymiarów](topic:dimension-settings). |
| „Wskaż punkt wewnątrz kąta, który chcesz zmierzyć.” | Położenie wymiaru kątowego leży na ramieniu. | Kliknij wewnątrz kąta. |
| „Te linie są równoległe.” | Linie równoległe nie mają między sobą kąta. | Wskaż dwie linie, które się przecinają. |
| „Wskaż wymiar liniowy lub równoległy.” | {{cmd:DIMCONTINUE}} albo {{cmd:DIMBASELINE}} potrzebuje takiego wymiaru jako punktu startowego. | Wskaż wymiar liniowy lub równoległy. |
| „Ten rysunek nie ma jeszcze bloków: F wstawia blok z pliku, L z biblioteki …” | Rysunek nie ma własnych bloków. | Wpisz `F` lub `L`, albo utwórz blok poleceniem {{cmd:BLOCK}}. |
| „Nie ma bloku o nazwie „…”.” | Nazwa jest błędna. | Komunikat wymienia istniejące bloki. |
| „Nazwa bloku nie może zaczynać się od * ani używać …” i lista znaków | Nazwa zawiera znak, którego bloki nie mogą używać. | Używaj liter, cyfr, `-` i `_`. |
| „Blok nie może zawierać samego siebie.” | Zaznaczenie zawiera odwołanie do tworzonego bloku. | Pomiń to odwołanie. |
| „Nie zaznaczono obiektów; nic nie utworzono.” | Naciśnięto {{key:Enter}} przed zaznaczeniem. | Uruchom ponownie {{cmd:BLOCK}} i zaznacz obiekty. |

## Arkusze i wydruk

| Komunikat lub objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| „Okna widokowe umieszcza się na układzie. Najpierw otwórz kartę układu (albo utwórz ją poleceniem LAYOUT).” | {{cmd:MVIEW}} na karcie {{ui:Model}}. | Najpierw kliknij kartę arkusza. |
| „Najpierw otwórz układ z oknem widokowym.” | {{cmd:VPVIEW}} na karcie {{ui:Model}}. | Najpierw kliknij kartę arkusza. |
| Skala okna widokowego wygląda dziesięciokrotnie źle | Jednostki rysunku są błędne. | Ustaw {{ui:Jednostki}} w {{ui:Bieżące ustawienia}}. |
| „Nie ma jeszcze nic do wydrukowania.” | Model jest pusty. | Narysuj coś albo otwórz rysunek. |
| „Wskaż okno do wydrukowania.” | Wybrano {{ui:Okno…}} i nie wskazano okna. | Kliknij {{ui:Wskaż}} i wskaż dwa narożniki. |
| „… większy niż papier: krawędzie są obcięte.” | Obszar nie mieści się w tej skali. | Wybierz mniejszą skalę, większy papier albo {{ui:Dopasuj do papieru}}. |
| „Przeglądarka zablokowała nową kartę, więc zamiast tego pobrano PDF.” | Wyskakujące okna są zablokowane dla tej strony. | Otwórz pobrany PDF albo zezwól na wyskakujące okna dla tej strony. |
| Znaki drukują się jako „?” | Czcionki PDF nie mają dla nich liter (rzadkie ideogramy, hindi i inne pisma wymagające złożonego kształtowania …) albo większej czcionki nie udało się pobrać (offline). Pisma europejskie, cyrylica, grecki, hebrajski, arabski, perski, urdu, tajski, chiński, japoński i koreański drukują się jak wpisane. | W przypadku pisma arabskiego, tajskiego, chińskiego, japońskiego lub koreańskiego wydrukuj ponownie z połączeniem. Inne pisma: jeszcze nie zbudowano. |
| Linie pomocnicze widać w PDF | Ich warstwa się drukuje. | Kliknij przycisk drukowania warstwy. |
| Wszystkie linie mają jednakową grubość | Ich grubość to {{ui:Domyślna}}, więc drukują się szerokością pióra z okna dialogowego. | Nadaj warstwom lub obiektom {{ui:Grubość linii}} w prawym panelu albo wybierz {{ui:Grubość linii}} w oknie. Aby zobaczyć grubości linii na ekranie, naciśnij {{ui:LWT}} na pasku stanu. |

## Klawisze i ekran

| Objaw | Przyczyna | Rozwiązanie |
|---|---|---|
| F3, F7 lub F8 zmienia głośność albo otwiera Mission Control | Klawisze funkcyjne Mac. | Przytrzymaj **fn** albo użyj przycisków na pasku stanu. Zobacz [Klawisze, myszy i gładziki](common:keys). |
| F7 pyta o przeglądanie z kursorem | Własne użycie F7 przez Firefoksa. | Wybierz Nie; użyj przycisku {{ui:Siatka}}. |
| {{key:Mod+N}} otworzyło okno przeglądarki | Przeglądarka przechwytuje ten klawisz. | Kliknij {{ui:Nowa}} albo wpisz `NEW`. |
| {{key:Mod+A}} zaznaczyło tekst wiersza poleceń | Wiersz poleceń miał kursor. | Najpierw kliknij obiekt albo wpisz `ALL` przy monicie `Select objects`. |
| {{key:Delete}} nie usuwa | Wiersz poleceń ma kursor. | Wpisz `E` i naciśnij {{key:Enter}}. |
| Kliknięcie prawym przyciskiem na gładziku Mac nic nie robi | Kliknięcie z Control może liczyć się jako zwykłe kliknięcie. | Kliknij dwoma palcami. |
| Widok nie przesuwa się na gładziku | Nie ma środkowego przycisku, a {{key:Space}} nie przesuwa widoku. | Przesuń dwoma palcami: widok 2D się przesuwa (szczypnięcie i kółko myszy powiększają). Albo przeciągnij, trzymając prawy przycisk. |
| Pierwszy {{key:Esc}} wyszedł z pełnego ekranu | Przeglądarka używa Esc do wyjścia z pełnego ekranu. | Naciśnij {{key:Esc}} ponownie, aby anulować polecenie. |
| {{key:F1}} nic nie robi na Macu | F1 to klawisz jasności. | Przytrzymaj **fn** albo kliknij {{ui:Pomoc}}. |
| Pisanie trafia do pola wyszukiwania pomocy | Panel pomocy ma kursor. | Kliknij na rysunku. |
| Rysunek zniknął | Widok oddalono bardzo daleko. | Kliknij {{ui:Zasięg}} albo dwukrotnie kliknij kółko. |
| „Opuścić stronę?” przy zamykaniu karty | Są niezapisane zmiany. | Pozostań, zapisz przez {{key:Mod+S}}, a potem zamknij. |
