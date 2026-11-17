---
title: Rozmieść arkusze za mnie
summary: Automatycznie umieść fragmenty rysunku na arkuszach: CadCraft wybiera rozmiar papieru i standardową skalę, która się mieści, umieszcza każdy fragment z tytułem i skalą pod nim i zostawia wszystko edytowalne.
keywords: arkusze, układ, układy, papier, skala, automatyczny, AUTOSHEET, tabliczka rysunkowa, okna widokowe, widoki nazwane
from: 7f315dff
---

Wybierz **Widok › Więcej › Rozmieść arkusze za mnie** (albo wpisz {{cmd:AUTOSHEET}}). CadCraft znajduje fragmenty rysunku (nazwane widoki lub osobne skupiska modelu), wybiera rozmiar papieru i standardową skalę, w której się mieszczą, i umieszcza je na nowych arkuszach z tabliczką rysunkową, podpisem i skalą pod każdym.

Zanim je uruchomisz, możesz zmienić jego działanie: **Fragmenty** (nazwane widoki, skupiska, cały rysunek albo decyzja programu), **Papier** (automatyczny albo rozmiar, na przykład `iso-a1`), **Skala** (jedna dla wszystkich albo każdy fragment we własnej skali) oraz **Arkusze** (ile fragmentów mieści się na jednym arkuszu).

Arkusze są zwykłymi arkuszami: przesuwaj okno widokowe (viewport), zmieniaj jego skalę lub usuwaj arkusz jak zwykle. Naciśnij {{key:Ctrl+Z}} raz, aby cofnąć wszystkie nowe arkusze.

## Legenda numerowana

W {{cmd:AUTOSHEET}} wybierz **Legenda numerowana**, aby dodać ponumerowaną legendę pod widokami każdego arkusza. Legenda zawiera warstwy narysowane w tych widokach, po jednej pozycji z numerem w wierszu, jako zwykły tekst, który możesz edytować jak każdy inny. Wybierz **Plik**, aby wczytać własną listę legend (w każdym wierszu numer i jego opis, oddzielone tabulatorem, przecinkiem lub średnikiem): warstwa, której nazwa odpowiada numerowi z listy, przyjmuje jej opis. Do aplikacji nie jest dołączona żadna lista legend.
