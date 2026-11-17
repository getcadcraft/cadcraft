---
title: Przejście z innego oprogramowania kreślarskiego
summary: Jak znane polecenia, klawisze i nawyki odpowiadają CadCraft oraz różnice, które potykają doświadczonych kreślarzy.
keywords: przejście, przełączanie, różnice, migracja, nawyki, aliasy, dynamiczne wprowadzanie, pickfirst, pickadd, qsave, saveas, zapisz jako, mtext, ctb, śledzenie biegunowe, xref, skróty klawiszowe, znane, copyclip, pasteclip, pasteorig, copybase, schowek
from: b58688e7
---

Jeśli używałeś AutoCAD-a lub programu zbudowanego na tym samym modelu, większość tego, co znasz, działa tutaj: wiersz poleceń, aliasy takie jak `L`, `C`, `TR` i `O`, Enter lub Spacja do powtórzenia, zaznaczanie oknem i przecięciem, przyciąganie do obiektów na F3, orto na F8, przestrzeń modelu z układami i oknami widokowymi. Ta strona wymienia to, co odpowiada bezpośrednio, a potem różnice, na których ludzie się potykają. Przeczytaj drugą połowę, nawet jeśli przeglądasz pierwszą.

## Co odpowiada bezpośrednio

| Nawyk | W CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Te same polecenia, te same aliasy |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Bez zmian |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Te same polecenia wymiarowania |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` wpisane w wierszu poleceń | Bez zmian, dla nowych wymiarów |
| `B` do tworzenia bloku, `I` do wstawiania, `PU` do oczyszczania | Bez zmian (oczyszczanie usuwa tylko nieużywane bloki) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z`, potem `E` albo `W` | Bez zmian |
| Wpisywanie `_LINE` albo `-LAYER` ze skryptu lub z nawyku | Wiodące `_`, `-`, `.` lub `'` jest ignorowane |
| Enter lub Spacja na pustej podpowiedzi powtarza ostatnie polecenie | Bez zmian |
| Esc anuluje; kolejne Esc czyści zaznaczenie | Bez zmian |
| `@dx,dy`, `@d<a`, wpisywane kąty liczone przeciwnie do ruchu wskazówek zegara od wschodu | Bez zmian |
| Okno od lewej do prawej, przecięcie od prawej do lewej, klik-klik; naciśnij i przeciągnij dla lasso, Spacja przełącza okno / przecięcie / płot (LASSOMODE) | Bez zmian |
| Najpierw zaznacz, potem polecenie (rzeczownik-czasownik) | Bez zmian; zakończone polecenie czyści zaznaczenie |
| `ALL` i `L` przy Wybierz obiekty | Bez zmian |
| Shift+klik usuwa z zaznaczenia | Bez zmian. Ustawienia mogą sprawić, że kliknięcie zastąpi zaznaczenie, jak PICKADD 0: zob. [Ustawienia CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Te same polecenia i klawisze; wklejanie umieszcza kopię według lewego dolnego rogu, jak PASTECLIP |
| F3 przyciąganie do obiektów, F7 siatka, F8 Orto | Te same klawisze |
| Podwójne kliknięcie kółka: powiększ do zasięgu | Bez zmian |
| Tekst lustrzany pozostaje czytelny | Bez zmian (jak przy MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Bez zmian; na Macu działa też Command |

[Dokumentacja poleceń](topic:commands) wymienia każde polecenie i alias.

:::tip
Jeśli lubisz wstążkę AutoCAD-a, wybierz styl menu {{ui:Klasyczne rysowanie}} w {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Menu, klawisze i mysz}}: karty Start, Wstawianie, Adnotacje, Parametryczne, Widok, Zarządzanie i Wyjście nad tym samym wierszem poleceń, a środkowy przycisk przesuwa widok, a prawy klik to Enter. Zob. [Menu, klawisze i mysz](topic:menus-keys-and-mouse).
:::

[Mapa poleceń](topic:command-map) wymienia każde polecenie CadCraft z jego krótkimi nazwami, a [ściągawka](topic:cheat-sheet) 40 najczęściej używanych (także jako jednostronicowy PDF).

## Różnice, które sprawiają kłopot

### Wpisane punkty są bezwzględne

Przy włączonym dynamicznym wprowadzaniu inny program traktuje wpisane `100,0` jako drugi punkt względny. **Wiersz poleceń CadCraft tak nie robi:** tam `x,y` jest zawsze mierzone od początku układu. Przy włączonym {{ui:Dyn}} ({{key:F12}}) używaj zamiast tego jego pól: odległość, {{key:Tab}}, kąt. Użyj `@100,0` dla „100 w prawo od ostatniego punktu” albo ustaw krzyżyk we właściwym kierunku i wpisz samo `100`.

### Shift pomija przyciąganie; nie włącza orto

Przytrzymanie Shift podczas kliknięcia ignoruje przyciąganie do obiektów dla tego kliknięcia. Nie przełącza tymczasowo orto. Użyj F8 lub przycisku {{ui:Orto}}.

### Prawy przycisk to zawsze Enter

Nie ma menu kontekstowego. Prawy klik w rysunku to Enter: kończy polecenie, kończy zaznaczanie albo powtarza ostatnie polecenie. Podczas przesuwania uchwytu lub ramki zaznaczania anuluje działanie. Przeciągnij prawym przyciskiem, aby przesunąć widok.

### Brak przesuwania spacją

Spacja to Enter, więc przytrzymanie Spacji i przeciąganie nie przesuwa widoku. Przesuwaj środkowym lub prawym przyciskiem albo oddal i przybliż ponownie w innym miejscu kółkiem myszy.

### Przycinanie i wydłużanie

Przycinanie i wydłużanie zaczynają w trybie szybkim: każdy widoczny obiekt jest krawędzią tnącą lub granicą, fragment pod wskaźnikiem pokazuje, co zostanie usunięte, przeciągnięta ścieżka przycina każdy fragment, który przecina, a obiekt, którego nic nie przecina, zostaje usunięty. {{key:Shift}} przełącza między przycinaniem a wydłużaniem. `O` przełącza na tryb standardowy (najpierw wybierz krawędzie), `F` i `C` to płot i przecięcie, `E` to EDGEMODE, `R` usuwa. Nie ma opcji `P` (Rzutuj): CadCraft przycina w płaszczyźnie rysunku.

### Zaokrąglenie i fazka

{{cmd:FILLET}} i {{cmd:CHAMFER}} mają opcje, które znasz: Cofnij (U), Polilinia (P), Promień (R) (lub Odległość (D), Kąt (A) i Metoda (E)), Przytnij (T) i Wielokrotnie (M), a {{key:Shift}}+klik daje ostry narożnik. Zaokrąglenie między polilinią a linią dodaje łuk jako osobny obiekt zamiast łączyć go z polilinią, a narożniki polilinii przy segmencie łuku pozostają bez zmian.

### Tekst akapitowy i tekst jednowierszowy

`T`, `MT` i `MTEXT` to tekst akapitowy wpisywany w miejscu, z szerokością, odstępem wierszy i wyrównaniem; `DT` i `DTEXT` to tekst jednowierszowy, jaki znasz. Nie ma stylów tekstu ani kolumn, a formatowania w tekście (pogrubienie, ułamki piętrowe) nie da się jeszcze wpisać; formatowanie, które przychodzi w pliku, jest zachowywane, rysowane i zapisywane (zob. [Dodawanie tekstu i opisów](topic:text#formatting-inside-paragraph-text-from-other-programs)). Wszystko rysuje się czcionką w stylu Helvetica.

### Zapisz oznacza „pobierz kopię”

{{key:Mod+S}}, `SAVE` i `QSAVE` pobierają kopię w formacie rysunku: otwarty DWG zapisuje się jako DWG, DXF jako DXF. W przeglądarce nic nie jest nadpisywane w miejscu, a otwarte pliki nigdy nie są zmieniane. W CadCraft Studio {{key:Mod+S}} zapisuje z powrotem do otwartego pliku.

`SAVEAS` ({{key:Mod+Shift+S}}) to małe okno dialogowe, a nie przeglądarka plików: wybierz {{ui:DWG}} (z jego {{ui:Wersja}}, AutoCAD 2000 do 2018), {{ui:DXF R12}} lub {{ui:DXF 2000}} i wybierz {{ui:Zapisz}}. O tym, dokąd trafi pobieranie, decyduje przeglądarka. `DXFOUT` zawsze pobiera DXF R12.

DWG otwarty zapisuje się w wersji, w jakiej przyszedł; nowy rysunek zapisuje się w formacie AutoCAD 2000, chyba że wybierzesz inny. Arkusze, wymiary i wzory kreskowania są zachowywane. Zob. [Pliki: co się otwiera, co się zapisuje](topic:files#saving).

### Warstwy: prościej

- Każda zmiana warstwy (włącz, zamroź, zablokuj, kolor, drukuj, typ linii, grubość linii, bieżąca warstwa) to jeden krok cofnięcia.
- Wyłączenie i zamrożenie mają w CadCraft ten sam skutek.
- Warstwy zamrożone w jednym oknie widokowym pozostają tam zamrożone: na ekranie, na wydrukach i przy zapisie jako DWG lub DXF.
- Okno widokowe, które pokazuje warstwę we własnym kolorze, typie linii, grubości linii lub przezroczystości, zachowuje to na ekranie, na wydrukach i w zapisanym DWG (DXF zachowuje własne ustawienia warstwy; zapis to zgłasza). Zmiana tych ustawień dla każdego okna widokowego nie jest jeszcze zbudowana.
- Nie ma menedżera właściwości warstw ani stanów warstw; {{cmd:RENAME}}, {{cmd:LAYMRG}} i {{cmd:LAYDEL}} zmieniają nazwę, scalają i usuwają warstwy. Typy linii i grubości linii ustawia się w prawym panelu (zob. [Grubości linii i typy linii](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} i {{cmd:LAYMCUR}} działają przez wskazanie.
- Zapis do DXF R12 zapisuje nazwy warstw wielkimi literami. DWG zachowuje je tak, jak je wpisałeś.

### Style wymiarowania

`DIMSTYLE` otwiera menedżer nazwanych stylów (nowy, zmień, ustaw bieżący, porównaj, zastosuj). `DIMSCALE` i pozostałe ustawienia nadal zmieniają to, czego używają nowe wymiary, a każdy wymiar zachowuje własne rozmiary, które można też zmienić w panelu Właściwości. Bieżący styl nie jest zapisywany w pliku. Wymiary stosują format długości rysunku (dziesiętny albo stopy i cale z {{cmd:UNITS}}) lub własny {{ui:Format}}. Zob. [Ustawianie rozmiarów wymiarów](topic:dimension-settings).

### Drukowanie jest prostsze

Tabele stylów wydruku działają według koloru, jak pliki CTB: Monochromatyczna, Kolor i Skala szarości są wbudowane, możesz utworzyć własne, a każdy arkusz zachowuje swoją tabelę. Odczyt plików CTB jest zbudowany na opublikowanym opisie i był sprawdzany tylko na plikach, które sami wykonaliśmy; nazwane tabele stylów wydruku (STB) i ustawienia strony nie są jeszcze zbudowane. Linie drukują się ze swoją grubością, reszta jedną szerokością pióra. Arkusze drukują się w skali 1:1 na własnym papierze; model drukuje się w wybranej albo dopasowanej skali. Zob. [Drukowanie do PDF](topic:plot-pdf).

### Praca w oknie widokowym

Tak jak znasz: dwukrotnie kliknij wewnątrz okna widokowego (albo wpisz {{cmd:MSPACE}}), aby pracować na modelu przez nie, a dwukrotnie na zewnątrz (albo {{cmd:PSPACE}}), aby wrócić do arkusza. Wewnątrz przesuwanie i powiększanie zmieniają to, co pokazuje okno, chyba że jego wyświetlanie jest zablokowane; wtedy przesuwają arkusz. Kliknięcie karty pod rysunkiem także opuszcza okno widokowe. Zob. [Praca na modelu przez okno widokowe](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Śledzenie i wprowadzanie dynamiczne są, przyciągania do siatki jeszcze nie

Siatka służy tylko do oglądania; punkty nie przyciągają się do niej (nie ma trybu przyciągania F9). Śledzenie biegunowe ({{key:F10}}, krok ustawiany poleceniem {{cmd:POLARANG}}) oraz śledzenie przyciągania do obiektów ({{key:F11}}: zatrzymaj się na punkcie przyciągania, aby go pozyskać) działają tak, jak znasz; zob. [Przyciąganie do obiektów](topic:object-snaps#polar-tracking). Wprowadzanie dynamiczne ({{key:F12}}) pokazuje odległość i kąt (albo X i Y) przy krzyżyku; zob. [Wprowadzanie współrzędnych i odległości](topic:coordinate-entry#dynamic-input).

### Stopy i cale

Wybierz {{ui:Format długości}} {{ui:Architektoniczny}} albo {{ui:Inżynierski}} (lub wpisz {{cmd:UNITS}}) i wpisuj długości tak, jak znasz: `12'6"`, `12'6-1/2"`. Przed ułamkiem użyj myślnika, nie spacji: {{key:Space}} to {{key:Enter}}. Ustaw też {{ui:Jednostki}} na {{ui:Cale}}, aby arkusze i wydruki oferowały skale architektoniczne. Format jest zachowywany w zapisanych plikach DWG i DXF. Zob. [Stopy i cale](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiowanie i wklejanie zostają w CadCraft

{{key:Mod+C}}, {{key:Mod+X}} i {{key:Mod+V}} kopiują, wycinają i wklejają obiekty w obrębie rysunku, między rysunkami oraz między kartami CadCraft w tej samej przeglądarce. Schowek jest własny CadCraft: nie możesz wkleić obiektów CadCraft do innego programu ani obiektów z innego programu do CadCraft. Wklejanie z rysunku w innych jednostkach nie przelicza skali: użyj potem {{cmd:SCALE}}. {{key:Mod+D}} to duplikat, który porusza się za wskaźnikiem, dodatek CadCraft. Zob. [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

### Klawisze przeglądarki, których nie można użyć

Strona internetowa nie może przejąć od przeglądarki {{key:Mod+N}}, {{key:Mod+W}} ani {{key:Mod+T}}: otwierają i zamykają okna oraz karty. Użyj przycisku {{ui:Nowa}} albo wpisz `NEW`. Zob. [Klawisze, myszy i gładziki](common:keys).

## Polecenia, po które możesz sięgnąć, a których tu jeszcze nie ma

{{cmd:TABLE}} nie jest zbudowane. Wpisanie go zwraca „Nieznane polecenie”. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} i {{cmd:XREF}} są zbudowane.) [Jeszcze nie zbudowano](topic:not-built-yet) wymienia, co zrobić zamiast tego.
