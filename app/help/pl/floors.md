---
title: Układanie pięter w jednym rysunku
summary: Rysuj pierwsze piętro nad parterem w tych samych współrzędnych i wyłączaj każde piętro, bez odwołań xref.
keywords: piętro, piętra, FLOORS, FLR, FLOOR, FLOORLAYERS, kondygnacja, poziom, układanie, warstwa projektowa, przestrzeń modelu, podkład, xref
from: 7440fc87
---

Piętra pozwalają układać rzuty w jednej przestrzeni modelu. Każde piętro ma własne obiekty, a warstwy działają na wszystkich naraz. Ściana na `P-Walls` może być na dowolnym piętrze.

## Początek

Wpisz `FLOORS` (`FLR`) albo wybierz {{ui:Piętra…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}, a następnie wybierz {{ui:Zacznij od pięter}}. To, co dotąd narysowałeś, trafia na parter.

## Rysowanie na piętrze

Wybierz piętro okrągłym przyciskiem w panelu. Nowe obiekty trafiają na nie.

Inne włączone piętra pokazują się pod nim wyblakłe. Możesz do nich przyciągać, więc pierwsze piętro ustawi się w jednej linii z parterem, ale nie możesz ich zmieniać, dopóki nie uczynisz ich aktywnym piętrem. Ikona oka wyłącza piętro. Ściany łączą się tylko ze ścianami na swoim piętrze.

Aby zacząć piętro od tego pod spodem, zaznacz to, co chcesz, wybierz piętro w panelu i naciśnij {{ui:Kopiuj tam}}.

## Umieszczanie pięter na arkuszach

Zaznacz okno widokowe na arkuszu i wybierz jego piętro w {{ui:Pokazane piętro}} we Właściwościach. Okno widokowe bez wybranego piętra pokazuje wszystkie włączone piętra.

## Wysyłanie pliku do kogoś innego

Inne programy CAD nie znają pięter, więc pokazują wszystkie razem. Przed wysłaniem pliku wybierz {{ui:Zamień piętra na warstwy}} w panelu lub wpisz `FLOORLAYERS`. Każdy obiekt przenosi się na warstwę nazwaną od swojego piętra, na przykład `Ground floor-P-Walls`, dzięki czemu nadal można wyłączać każde piętro. Cofnij to cofa. CadCraft zachowuje piętra w zapisywanym pliku DWG lub DXF.
