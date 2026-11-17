---
title: Zmiana rozmiaru tekstu wymiarów
summary: Powiększ lub zmniejsz tekst wymiarów, zarówno dla nowych wymiarów, jak i dla tych już istniejących w rysunku.
keywords: rozmiar tekstu wymiaru, wysokość tekstu, dimtxt, dimscale, tekst wymiaru za mały, tekst wymiaru za duży, większy tekst wymiaru, skala adnotacji
from: 30e40633
---

## Dla wymiarów, które utworzysz dalej

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone: prawy panel pokazuje {{ui:Current settings}}.
2. Przewiń panel do {{ui:New dimensions}}. Wpisz wysokość, jaką chcesz mieć na papierze, w polu {{ui:Text height}} (na przykład `2.5` dla 2,5 mm lub `3/32"`) i naciśnij {{key:Enter}}.
3. Ustaw {{ui:Overall scale}} na skalę wydruku (`50` dla 1:50, `48` dla 1/4" = 1'-0"): każdy rozmiar jest przez nią mnożony.

W wierszu poleceń {{cmd:DIMTXT}} ustawia wysokość, a {{cmd:DIMSCALE}} skalę ogólną.

## Dla wymiarów już istniejących w rysunku

1. Zaznacz wymiary (jeden lub kilka: wybierz {{ui:Dimension}} na liście u góry okna Właściwości).
2. Wpisz nową {{ui:Text height}} (w sekcji {{ui:Text}}) albo nową {{ui:Overall scale}} (w sekcji {{ui:Fit}} niżej) i naciśnij {{key:Enter}}.

Wymiary przerysowują się od razu, w jednym kroku cofnięcia. Wymiar z pliku innego programu zostaje przerysowany w stylu CadCraft, gdy tylko go zmienisz.

:::tip
Tekst, który na ekranie wygląda dobrze, a na wydrukowanym arkuszu jest bardzo mały, zwykle oznacza, że skala ogólna wynosi 1: ustaw ją na skalę arkusza.
:::

Zobacz [Ustawianie rozmiarów wymiarów, miejsc dziesiętnych i skali](topic:dimension-settings), aby poznać każde ustawienie.
