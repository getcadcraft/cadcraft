---
title: Rysuj inteligentne ściany, drzwi i okna w 2D
summary: Rysuj ściany jak polilinię, łącz je czysto i wstawiaj drzwi oraz okna, które przesuwają się razem ze ścianą. Wszystko w 2D, bez modelu 3D.
keywords: ściana, ściany, WALL, WA, drzwi, DOOR, DR, okno, WINDOW, WN, DELOPENING, inteligentna ściana, rzut kondygnacji, otwieranie, zawias, otwór
from: 45845d49
---

Ściany tutaj to obiekty rysunkowe 2D. Nie tworzą modelu 3D, więc plan pozostaje tak lekki jak rysunek liniowy. Do modelu budynku użyj BimCraft.

## Rysuj ściany

Wpisz `WALL` (`WA`) albo wybierz {{ui:Ściana}} w menu {{ui:Więcej}} grupy {{ui:Rysuj}}, potem klikaj punkty tak jak przy polilinii. Naciśnij {{key:Enter}}, aby zakończyć, albo wpisz `C`, aby zamknąć pomieszczenie.

- `T` ustawia grubość.
- `J` określa, za czym podążają kliknięcia: środkiem ściany albo jej lewą lub prawą powierzchnią.
- `F` ustawia wypełnienie: brak, pełne albo kreskowanie.

Narożniki łączą się same, na ukos. Ściana kończąca się w grubości innej ściany łączy się z nią czystym połączeniem T, a ściany, które się przecinają, otwierają się do siebie. Połączenia są zapisywane razem ze ścianami. Prostokąty, wielokąty, łuki, podział, blokady i reszta są opisane w „Kształty ścian, cięcia, odsunięcia i blokady ścian 2D”.

## Dodaj drzwi i okna

Wpisz `DOOR` (`DR`) albo `WINDOW` (`WN`) i kliknij na ścianę. Drzwi otwierają się na tę stronę ściany, w którą klikniesz. `W` ustawia szerokość, `Y` typ, a `H` stronę zawiasów. Kontynuuj klikanie, aby umieścić kolejne, a naciśnij {{key:Enter}}, aby zakończyć. Drzwi mogą być pojedyncze, podwójne, przesuwne albo otwartym przejściem. Okna mogą być stałe, skrzydłowe lub przesuwne.

## Zmieniaj je

Zaznacz ścianę, aby zobaczyć jej uchwyty:

- Uchwyty na końcach rozciągają ścianę. Połączone z nią ściany podążają za nią.
- Uchwyt w środku przesuwa ścianę.
- Uchwyt na otworze przesuwa go wzdłuż ściany.
- Strzałki odwracają zawias drzwi i kierunek otwierania.

Właściwości pokazują grubość, wypełnienie i każdy otwór: typ, szerokość, położenie, zawias, kierunek otwierania, czy pokazany jako otwarty, czy zamknięty, oraz {{ui:Usuń (R)}}. `DELOPENING` usuwa otwór najbliższy miejscu, w które klikniesz.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` i `ERASE` działają jak zwykle. Drzwi i okna idą razem ze ścianą, połączone ściany zachowują swoje połączenia, a jedno {{ui:Cofnij}} cofa wszystko naraz.

## W innych programach

Każda ściana jest zapisywana jako zwykły blok, więc inne programy CAD pokazują ją poprawnie i mogą ją przesuwać, ale nie mogą edytować jej jako ściany. `EXPLODE` zamienia ścianę w zwykłe linie i łuki, a wtedy przestaje być ścianą.
