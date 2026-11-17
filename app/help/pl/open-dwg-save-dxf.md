---
title: Otwórz DWG, edytuj go i zapisz kopię
summary: Otwórz rysunek, który ktoś Ci przesłał, sprawdź, co przyszło, wprowadź zmianę i odeślij kopię jako DWG lub DXF.
keywords: dwg, dxf, otwórz, import, eksport, zapisz, r12, pełny obieg, konsultant, xref, sprawdź rysunek, saveas, zapisz jako, zapis dwg, format
from: 49de4bf6
---

## Co zrobisz

Otworzysz DWG od konsultanta, sprawdzisz, co CadCraft mógł, a czego nie mógł pokazać, dodasz notatkę, wydrukujesz arkusz do PDF i zapiszesz kopię do odesłania jako DWG lub DXF.

## Otwórz plik

1. Naciśnij {{key:Mod+O}} albo kliknij {{ui:Otwórz}}.
2. Wybierz plik `.dwg`.

Wiersz stanu pokazuje „Odczytywanie …”, gdy rysunek jest czytany. Po zakończeniu rysunek wypełnia ekran, a historia podaje, na przykład, „Otwarto plan.dwg: 18,240 obiektów na 64 warstwach”, wraz z czasem odczytu.

:::offline
Jesteś offline. Jeśli przycisk {{ui:Zapisz do pracy offline}} pokazuje „Gotowe do pracy offline”, pliki DWG otwierają się normalnie. Jeśli nie i żaden DWG nie był jeszcze otwarty w tej karcie, otwarcie DWG może się nie udać, ponieważ czytnik DWG CadCraft pobiera się przy pierwszym DWG: otwórz DXF albo zapisz CadCraft do pracy offline przy następnym połączeniu z siecią. Zobacz [Praca offline](common:offline).
:::

## Sprawdź, co przyszło

1. Spójrz na sekcję {{ui:Rysunek}} w lewym panelu: format i wersja, jednostki, liczba obiektów i warstw oraz arkusze.
2. Przeczytaj pole „O tym pliku” pod nią, jeśli się pojawia.

Pole wymienia:

- **Jeszcze niepokazane:** obiekty, których CadCraft nie potrafi jeszcze narysować, z podziałem na rodzaj i liczbę. Są pominięte, a nie zgadywane.
- **Układy (arkusze) przyszły:** otwórz je kartami pod rysunkiem.
- **Wymiary, które można było odczytać tylko tak, jak narysowano.**

3. Przeklikaj karty pod rysunkiem, aby zobaczyć każdy arkusz.
4. Sprawdź {{ui:Jednostki}} w {{ui:Bieżące ustawienia}} (nic nie zaznaczone, karta {{ui:Model}}). Jeśli pokazuje {{ui:Bez jednostek}}, a wiesz, że rysunek jest w milimetrach, ustaw je, aby skale arkusza i wydruku były poprawne.

:::tip
Jeśli spodziewasz się części rysunku, a jej nie widzisz, sprawdź panel {{ui:Warstwy}}: warstwa może być wyłączona lub zamrożona w pliku. Kliknij jej nazwę, aby uczynić ją bieżącą; to ją włącza.
:::

## Wprowadź zmianę

1. Utwórz warstwę na swoje notatki: kliknij {{ui:Nowa warstwa}}, wpisz `NOTES` i naciśnij {{key:Enter}}.
2. Wpisz `DT` i naciśnij {{key:Enter}}.
3. Kliknij, gdzie ma być notatka.
4. Wpisz wysokość tekstu odpowiednią dla rysunku (zobacz [Dodawanie tekstu i opisów](topic:text)) i naciśnij {{key:Enter}}.
5. Naciśnij {{key:Enter}}, aby zachować obrót 0.
6. Wpisz notatkę i naciśnij {{key:Enter}}.
7. Naciśnij ponownie {{key:Enter}}, aby zakończyć.

Edycje zaimportowanych wymiarów są w porządku: gdy tylko zmienisz jeden, CadCraft rysuje go na nowo we własnym stylu.

## Wydrukuj arkusz do przeglądu

1. Kliknij kartę arkusza.
2. Naciśnij {{key:Mod+P}}.
3. Kliknij {{ui:Pobierz PDF}}.

Zobacz [Drukowanie do PDF](topic:plot-pdf).

## Zapisz kopię

1. Naciśnij {{key:Mod+S}} albo kliknij {{ui:Zapisz}}.

Otworzyłeś DWG, więc przeglądarka pobiera `<nazwa>.dwg` w wersji, w jakiej przyszedł DWG. Historia podaje, na przykład, „Zapisano kopię jako Plan.dwg (DWG (AutoCAD 2018)).” i wymienia w wierszach pod spodem wszystko, co zmieniło się po drodze.

2. Przeczytaj te wiersze, zanim wyślesz plik. [Co DWG zachowuje i zmienia](topic:files#what-a-dwg-keeps-and-changes) wyjaśnia każdy z nich.

Oryginalny DWG nigdy nie jest zmieniany. Każdy zapis to nowe pobranie.

## Zapisz jako DWG lub DXF

Aby wybrać format samodzielnie:

1. Naciśnij {{key:Mod+Shift+S}} albo kliknij {{ui:Zapisz jako}}.

Okno {{ui:Zapisz kopię jako}} otwiera się z czterema wyborami, każdy z nazwą pliku, jaką nada: {{ui:DWG}} z listą {{ui:Wersja}}, {{ui:DXF R12}}, {{ui:DXF 2000}} i {{ui:DXF 2000 (binary)}}. Bieżący format i wersja rysunku są już wybrane.

2. Kliknij format, którego chcesz. Dla DWG wybierz wersję, której używa drugie biuro, albo starszą: AutoCAD 2018, 2013, 2010, 2007, 2004 lub 2000.
3. Kliknij {{ui:Zapisz}}.

Kopia zostaje pobrana. Od tej chwili {{key:Mod+S}} zapisuje ten rysunek w tym formacie, a nowe rysunki też zaczynają w nim, w tej przeglądarce. {{ui:Anuluj}} albo {{key:Esc}} nic nie zapisuje, a historia podaje „Nie zapisano.”

Którego wybrać:

- **DWG** zachowuje najwięcej: arkusze z ich obszarami widokowymi, prawdziwe wymiary, wzory kreskowania, nazwy warstw i bloków zapisane tak, jak wpisałeś, oraz tekst wieloliniowy jako tekst wieloliniowy. Wersja AutoCAD 2000 otwiera się w największej liczbie programów; 2004 i nowsze zachowują też prawdziwe kolory.
- **DXF 2000** to plik tekstowy, który zachowuje niemal to samo co DWG: każdy arkusz jako układ z obszarami widokowymi, prawdziwe wymiary, wzory kreskowania, prawdziwe kolory, grubości linii, typy linii oraz nazwy zapisane tak, jak wpisałeś. Otwiera się w AutoCAD 2000 i nowszych oraz w większości programów CAD. Wielokrotne odnośniki stają się liniami, grocikami i tekstem, które rysują. DXF otwarty w wersji 2000 lub nowszej zapisuje się jako DXF 2000.
- **DXF 2000 (binary)** zawiera tę samą treść co DXF 2000, w formie binarnej: mniejszy plik, który zachowuje każdą liczbę dokładnie. Binarne DXF z innych programów otwierają się jak tekstowe, a rysunek otwarty z binarnego DXF zapisuje się z powrotem jako binarny.
- **DXF R12** otwiera się w niemal każdym programie CAD. Zachowuje pierwszy arkusz z jego obszarami widokowymi oraz pozostałe arkusze CadCraft. Upraszcza nowsze rzeczy, takie jak tekst wieloliniowy i kreskowania.

## Co zobaczy drugie biuro

W DWG:

- Linie, łuki, okręgi, elipsy, polilinie, tekst, tekst wieloliniowy, bloki z ich atrybutami, wypełnienia jednolite, wzory kreskowania i warstwy tak, jak je widzisz.
- Prawdziwe wymiary: inny program przelicza je, gdy są rozciągane.
- Każdy arkusz z jego papierem i obszarami widokowymi.
- Wielokrotne odnośniki jako wielokrotne odnośniki. W wersji AutoCAD 2000 prawdziwe kolory zamieniają się na najbliższy kolor standardowy.

W DXF R12:

- Linie, łuki, okręgi, polilinie, tekst, odwołania do bloków i wymiary tak, jak je widzisz. Wymiary pozostają prawdziwymi wymiarami.
- Nazwy warstw wielkimi literami, a spacje zamienione na `_`.
- Pierwszy arkusz jako przestrzeń papierową rysunku z jego obszarami widokowymi. Kolejne arkusze trafiają jako bloki o nazwach `CCLAYOUT_1` i dalej; jeśli potrzebują każdego arkusza jako układu, wyślij im również wydruki PDF każdego arkusza.
- Wieloliniowy tekst jako osobne linie, elipsy jako polilinie, kreskowania jako kontury.

W obu przypadkach wszystko, co było oznaczone jako „Jeszcze niepokazane” przy otwieraniu DWG, **nie** znajduje się w kopii, chyba że historia podaje, że zostało zachowane: obiekty OLE DWG oraz jego bryły 3D w przestrzeni modelu są zapisywane z powrotem, gdy zapisujesz jako DWG. Powiedz o tym odbiorcy i wyślij także PDF.

## Częste błędy

- **„CadCraft otwiera rysunki DWG i DXF.”** Plik ma inne rozszerzenie. Sprawdź, czy to `.dwg` lub `.dxf`.
- **„Nie udało się odczytać tego rysunku.”** DWG jest uszkodzony albo w wersji, której czytnik nie obsługuje. Poproś o DXF albo o DWG zapisany w starszej wersji.
- **„Ten binarny DXF kończy się w środku obiektu.”** Plik jest ucięty lub uszkodzony. Wpisz RECOVER, aby otworzyć to, co da się odczytać, albo poproś o plik ponownie.
- **Zapisany plik nazywa się `nazwa (1).dwg` lub `nazwa (1).dxf`.** Przeglądarka tak robi, gdy w folderze jest już plik o tej samej nazwie.
- **Mają starszy program, który nie może otworzyć DWG.** Zapisz jako DWG z {{ui:Wersja}} {{ui:AutoCAD 2000}} albo jako {{ui:DXF R12}}: niemal każdy program CAD go otworzy.
- **Brakuje części rysunku.** Dołączone rysunki (xref) nie są wczytywane, dopóki nie wskażesz ich plików ({{cmd:XREF}}, `R`), a obrazy pokazują się jako ramki z nazwami plików.
