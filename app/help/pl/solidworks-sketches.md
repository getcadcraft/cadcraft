---
title: Przenoszenie szkiców do innych modelerów części i z nich
summary: Napisz makro, które odtwarza rysunek jako jeden szkic z więzami w modelerze części, i otwórz szkic wyeksportowany z części.
keywords: szkic, makro, swb, vba, eksport, modeler części, zmienne globalne, równania, relacje, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nie jest dostępny w środowisku, w którym buduje się CadCraft, więc żaden z kierunków nie został jeszcze przetestowany w SolidWorks. To, co zapisuje CadCraft, jest sprawdzane tylko pod kątem struktury. Wynik należy sprawdzić przed jego użyciem.
:::

## Wyślij rysunek jako szkic

1. Nałóż więzy i wymiary na rysunek (zob. [Nałóż więzy na rysunek](topic:constraints)).
2. W grupie {{ui:Parametryczne}} otwórz {{ui:Więcej}} i wybierz {{ui:Makro dla SolidWorks (.swb)}}, lub wpisz {{cmd:SWBOUT}}.

   Pobierany jest plik o nazwie rysunku, z rozszerzeniem `.swb`.
3. W SolidWorks wybierz **Narzędzia > Makro > Uruchom** i wskaż ten plik.

Makro tworzy nową część z domyślnego szablonu części, otwiera szkic na płaszczyźnie Front Plane i rysuje w nim linie, okręgi, łuki, punkty i polilinie modelu, z:

- więzami jako relacjami szkicu,
- więzami wymiarowymi jako wymiarami o tych samych nazwach (`d1@Sketch1`),
- własnymi parametrami jako zmiennymi globalnymi,
- każdym wyrażeniem jako równaniem.

Część używa jednostki długości rysunku. Tekst, bloki, kreskowania, wymiary i arkusze nie są częścią szkicu; historia wymienia, co zostało pominięte. Wyrażenia, które nie mają postaci równania (`if`, `min`, `max`, `round`, `%` i kilka innych), są zapisywane jako ich bieżąca wartość, a historia wskazuje, które. Wszystko, czego makro nie może utworzyć, zapisywane jest w pliku dziennika obok makra, a na końcu wyświetlany jest komunikat podsumowujący.

## Otwórz szkic z części

1. W SolidWorks uruchom makro eksportu CadCraft dla części (pobierz je w aplikacji PartCraft: Plik > Eksport > Eksportuj makro, aby przenieść części z powrotem). Zapisuje ono plik `.json` w formacie `cadcraft-sw-export` obok części.
2. W CadCraft wybierz {{ui:Otwórz}} i wskaż ten plik `.json`.
3. Gdy część ma kilka szkiców, wybierz jeden.

Szkic staje się rysunkiem w milimetrach: jego linie, łuki, okręgi i punkty, jego relacje jako więzy, jego wymiary jako więzy wymiarowe o nazwach takich jak wcześniej (`D1`, `D2` …), jego zmienne globalne jako parametry, a równania na jego wymiarach jako ich wyrażenia. Historia wymienia to, czego nie przeniesiono, na przykład relacje, których CadCraft nie ma. Położenie szkicu w części nie jest zachowywane: jest rysowany płasko, tak jak widać na jego płaszczyźnie.
