---
title: Pierwsze kroki w CadCraft
summary: Co robi aplikacja kreślarska CadCraft, gdzie działa i jak od pustego ekranu dojść do pierwszego zapisanego rysunku.
keywords: start, pierwszy rysunek, nowy, otwórz, zapisz, zapisz jako, początek, samouczek, wprowadzenie, szybki start
from: 1a56c575
---

CadCraft to aplikacja do kreślenia 2D. Rysujesz i edytujesz linie, łuki, polilinie, teksty, wymiary i bloki, przygotowujesz arkusze z tabliczkami rysunkowymi i oknami widokowymi oraz drukujesz je do PDF. Otwiera rysunki DWG i DXF, a zapisuje je jako DWG lub DXF.

Działa w przeglądarce. Nie trzeba niczego instalować: strona podaje adres, a cała aplikacja ładuje się na stronę. Rysunki otwierasz z własnego komputera i na niego je zapisujesz. **Nic nie jest wysyłane.**

Jeśli już kreśliłeś w innym programie, po tej stronie przeczytaj [Jeśli pracujesz w innym programie do kreślenia](topic:coming-from). Większość nawyków się przenosi, a te, które nie, są tam wymienione.

## Wolisz, żeby ktoś Cię poprowadził?

Wpisz `TOUR` (albo naciśnij {{ui:Rozpocznij przewodnik}} na karcie startowej, albo wybierz {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Przejdź przewodnik ponownie}}). Sześć krótkich kroków w okienku nad rysunkiem: narysuj linię i okrąg, przesuń go, przytnij, usuń coś i dodaj wymiar. Każdy krok kończy się, gdy go wykonasz; możesz pominąć krok albo cały przewodnik. Sam uruchamia się tylko za pierwszym razem. [Ściągawka](topic:cheat-sheet) zawiera 40 poleceń, których użyjesz najczęściej, a [mapa poleceń](topic:command-map) wszystkie polecenia.

## Czego potrzebujesz

- Aktualnej przeglądarki Chrome, Edge, Firefox lub Safari na komputerze z systemem Mac, Windows lub Linux. Zobacz [Przeglądarki i platformy](common:browsers).
- Najwygodniejsza jest mysz z kółkiem. Gładzik też działa; zobacz [Mysz, gładzik i dotyk](topic:mouse-trackpad-touch).
- Klawiatury. CadCraft jest sterowany wpisywanymi poleceniami, jak większość programów do kreślenia.

## Idea w jednym akapicie

Wpisujesz polecenie (albo naciskasz jego przycisk), a wiersz poleceń na dole zadaje pytania po kolei: „Wskaż pierwszy punkt”, „Wskaż następny punkt”. Na każde odpowiadasz, klikając w rysunku albo wpisując wartość i naciskając {{key:Enter}}. {{key:Esc}} anuluje. To cały model obsługi; reszta to szczegóły.

## Twój pierwszy rysunek

Narysujesz z linii prostokąt 4000 na 3000, umieścisz w środku okrąg i zapiszesz plik.

1. Otwórz CadCraft. Wiersz poleceń na dole pokazuje `Command:`, a obszar rysunku krótką kartę „Start drawing”.
2. Wpisz `L` i naciśnij {{key:Enter}}. Nie musisz najpierw klikać wiersza poleceń: pisanie trafia tam z każdego miejsca.
3. Monit zmieni się na `Specify first point:`. Wpisz `0,0` i naciśnij {{key:Enter}}.
4. Wpisz `@4000,0` i naciśnij {{key:Enter}}. Pojawi się linia biegnąca w prawo. Znak `@` oznacza „od ostatniego punktu”.
5. Wpisz `@0,3000` i naciśnij {{key:Enter}}.
6. Wpisz `@-4000,0` i naciśnij {{key:Enter}}.
7. Wpisz `C` i naciśnij {{key:Enter}}. `C` to opcja Close: ostatnia linia wraca do pierwszego punktu i polecenie się kończy.
8. Naciśnij {{ui:Zasięg}} w grupie Widok paska narzędzi. Prostokąt wypełni ekran.

Powinieneś teraz widzieć cztery linie tworzące prostokąt, a historia nad wierszem poleceń zawiera to, co wpisałeś.

9. Wpisz `C` i naciśnij {{key:Enter}}, aby uruchomić polecenie rysowania okręgu.
10. Wpisz `2000,1500` i naciśnij {{key:Enter}}, aby podać środek.
11. Wpisz `500` i naciśnij {{key:Enter}}, aby podać promień.

W środku prostokąta pojawi się okrąg.

12. Naciśnij {{key:Mod+S}} albo {{ui:Zapisz}} w grupie Plik.

Przeglądarka pobierze `Drawing1.dwg` do zwykłego folderu pobranych plików, a historia poinformuje, że zapisano kopię jako DWG. Ten plik otworzy się ponownie w CadCraft i w większości innych programów CAD. (Jeśli wcześniej w tej przeglądarce wybrano DXF w {{ui:Zapisz jako}}, nowy rysunek zapisze się jako `Drawing1.dxf`.)

:::tip
Naciśnij {{key:Enter}} w pustym wierszu poleceń, aby powtórzyć ostatnie polecenie. Jeśli wolisz, naciśnij {{key:Space}} zamiast {{key:Enter}}: poza tekstem działa tak samo.
:::

## Otwieranie istniejącego rysunku

1. Naciśnij {{key:Mod+O}} albo {{ui:Otwórz}}.
2. Wybierz plik `.dwg` lub `.dxf` w oknie wyboru plików.

Możesz też przeciągnąć plik DWG lub DXF z {{pick:mac=Findera|windows=Eksploratora plików|linux=menedżera plików}} i upuścić go na obszarze rysunku. Plik jest odczytywany na stronie; nigdy nie opuszcza Twojego komputera.

Co jest zachowywane, a co konwertowane, opisuje [Pliki: co się otwiera, co się zapisuje](topic:files).

## Zapisywanie: czego się spodziewać

Zapisywanie w przeglądarce działa inaczej niż w programie na komputerze:

- {{ui:Zapisz}} zawsze **pobiera nową kopię**. Nie nadpisuje otwartego pliku. Jeśli plik o tej samej nazwie jest już w folderze pobranych plików, przeglądarka zwykle dodaje numer, na przykład `Drawing1 (1).dwg`.
- {{ui:Zapisz}} używa formatu rysunku: DWG, jeśli otwarto DWG, DXF, jeśli otwarto DXF. Aby wybrać, naciśnij {{key:Mod+Shift+S}} albo {{ui:Zapisz jako}}, a potem wybierz {{ui:DWG}} (i jego wersję), {{ui:DXF R12}} lub {{ui:DXF 2000}}. Zobacz [Zapisywanie](topic:files#saving).
- Otwarty plik nigdy się nie zmienia.
- Otwarcie innego pliku lub {{ui:Nowy}} umieszcza go na osobnej karcie nad rysunkiem, więc nic z otwartych rzeczy nie zostaje zamknięte. Jeśli zamkniesz kartę rysunku lub opuścisz stronę z niezapisanymi zmianami, CadCraft najpierw zapyta: {{ui:Najpierw zapisz kopię}}, odrzuć lub {{ui:Anuluj}}. Zamknięcie karty przeglądarki pokazuje zamiast tego własne pytanie przeglądarki „Opuścić witrynę?”.

Zapis w chmurze nie jest jeszcze dostępny. Gdzie trafiają Twoje pliki i dlaczego pozostają prywatne, wyjaśnia [Twoje pliki i prywatność](common:your-files).

## Dokąd dalej

Naciśnij {{key:F1}} albo {{ui:Pomoc}} na pasku u góry, aby w każdej chwili otworzyć tę pomoc obok rysunku. Działa bez połączenia.

- [Ekran CadCraft](topic:workspace) nazywa każdy pasek i panel.
- [Rysowanie ze współrzędnymi](topic:draw-with-coordinates) to najlepszy pierwszy przewodnik krok po kroku.
- [Klawiatura i mysz](topic:keyboard) wymienia każdy klawisz.
- Wpisz `HELP` w wierszu poleceń, aby zobaczyć listę wszystkich poleceń, albo przeczytaj [Opis poleceń](topic:commands).
