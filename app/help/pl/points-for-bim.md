---
title: Punkty dla programów BIM
summary: Eksportuj punkty oraz punkty wstawienia bloków z opisem do pliku CSV lub TXT, który importują programy BIM i geodezyjne.
keywords: exportpoints, eksport punktów, punkty, csv, txt, pnezd, penzd, xyz, punkty geodezyjne, współrzędne, bim, wytyczanie, plik punktów, północ, wschód, rzędna
from: d80e2d53
---

## Co powstanie

Plik punktów: jedna linia na punkt, z jego numerem, północą, wschodem, rzędną i opisem. Programy BIM (między innymi Revit i Archicad) oraz oprogramowanie geodezyjne mogą go zaimportować, aby umieścić punkty pomiarowe, znaczniki na placu budowy lub urządzenia.

## Eksportuj punkty

1. Zaznacz punkty i odwołania do bloków, których punkty wstawienia chcesz, albo nic nie zaznaczaj, aby wziąć wszystkie punkty.
2. Wpisz {{cmd:EXPORTPOINTS}} (lub `EXPPTS`, albo {{ui:Bloki}} › {{ui:Więcej}} › {{ui:Eksportuj punkty}}) i naciśnij {{key:Enter}}
   (naciśnij {{key:Enter}} ponownie przy `Wskaż punkty i bloki`, gdy nic nie zaznaczono).
3. Gdy wybrano bloki z atrybutami, CadCraft wypisuje ich znaczniki: wpisz ten, którego wartość jest opisem (na przykład `ITEM`), albo cokolwiek innego, aby użyć nazwy każdego bloku.
4. Wybierz kolumny: `PNEZD` (punkt, północ, wschód, rzędna, opis: zwykły wybór), `PENZD` (wschód przed północą) lub `XYZ` (tylko współrzędne).
5. Wybierz jednostki: `D` tak jak narysowano, `M` metry lub `F` stopy (tylko gdy jednostki rysunku są ustawione: Właściwości › {{ui:Jednostki}} przy niczym niezaznaczonym).
6. Gdy ustawiony jest UCS, wybierz `W` współrzędne światowe lub `U` współrzędne UCS (zob. [UCS i obrócony widok](topic:ucs-and-turned-view)).
7. Wybierz `C` dla pliku `.csv` rozdzielanego przecinkami albo `T` dla pliku `.txt` rozdzielanego tabulatorami, oraz pierwszy numer punktu.

Plik pobiera się jako `<drawing>-points.csv` (lub `.txt`), a historia podaje, ile punktów zawiera.

## Co jest w pliku

- Jeden punkt na linię, zakończony znakiem nowej linii (CR LF), z trzema miejscami po przecinku.
- Rzędna punktu to jego Z (0, gdy go nie ma). Punkt bloku to jego punkt wstawienia.
- Opis zawierający przecinek (lub tabulator w TXT) albo cudzysłów jest ujęty w cudzysłowy, a jego cudzysłowy są podwojone.
- Format jest tym, który czyta i zapisuje CivilCraft, więc plik otwiera się tam także jako punkty.

## Częste błędy

- W jednostkach oferowane jest tylko `D`: rysunek nie ma ustawionych jednostek. Ustaw je albo przelicz w innym programie.
- Punkty są daleko od oczekiwanego miejsca w innym programie: wyeksportuj współrzędne światowe (`W`) albo UCS, którego używa punkt geodezyjny w tamtym programie (`U`).
