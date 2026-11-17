---
title: Ustawianie czcionki i rozmiaru tekstu za pomocą stylów tekstu
summary: Twórz nazwane style tekstu z czcionką, wysokością, szerokością i pochyleniem, ustaw jeden jako bieżący dla nowego tekstu i zmień styl, aby zmienić cały tekst, który go używa.
keywords: styl tekstu, styl, STYLE, ST, TEXTSTYLE, -STYLE, czcionka, wysokość tekstu, współczynnik szerokości, pochylenie, zmiana czcionki, styl standardowy, zastosuj styl, DDSTYLE
from: bd5a4883
---

## Co zrobisz

Utwórz styl tekstu o nazwie `Notes` z własną czcionką i wysokością, użyj go dla nowego tekstu, a później zmień styl, aby każda notatka, która go używa, zmieniła się jednocześnie.

## Kroki

1. Wpisz {{cmd:STYLE}} (`ST`) i naciśnij {{key:Enter}}, albo wskaż {{ui:Styl tekstu}} na pasku narzędzi {{ui:Rysuj}}. Okno {{ui:Styl tekstu}} wyświetla style w rysunku. Każdy rysunek ma `Standard`.
2. Wskaż {{ui:Nowy…}}, wpisz `Notes` jako nazwę nowego stylu i wskaż {{ui:OK}}. Wiersz stanu pokazuje „Text style Notes made and set current.”
3. W {{ui:Czcionka}} wybierz lub wpisz nazwę czcionki. Ustaw {{ui:Wysokość (0 = pytaj za każdym razem)}} na liczbę, np. `2.5`, aby każdy nowy tekst miał tę wysokość. Pozostaw `0`, aby pytano za każdym razem.
4. Ustaw {{ui:Współczynnik szerokości}} i {{ui:Kąt pochylenia (°)}}, jeśli chcesz węższe, szersze lub pochylone litery. Linia próbki pokazuje wynik.
5. Wskaż {{ui:Zamknij (C)}}. Tekst rysuj poleceniem {{cmd:TEXT}} lub {{cmd:MTEXT}}: nowy tekst przyjmuje bieżący styl.
6. Aby użyć stylu, który już utworzono, otwórz okno ponownie, wybierz go na liście i wskaż {{ui:Ustaw bieżący}}.
7. Aby nadać styl tekstowi, który już jest narysowany, zaznacz ten tekst, otwórz okno, wybierz styl i wskaż {{ui:Zastosuj do zaznaczonego tekstu}}.

## Zmiana stylu później

Zmień czcionkę, wysokość, szerokość lub pochylenie stylu w oknie, a każdy tekst, który go używa, podąży za zmianą w jednym kroku cofnięcia ({{key:Mod+Z}}). Wiersz stanu podaje, ile tekstów zmieniono.

## Uwagi

- {{ui:Usuń}} nie usunie `Standard` ani stylu, którego nadal używa tekst: najpierw zmień ten tekst na inny styl.
- Style są zapisywane w tabeli STYLE rysunku, więc pliki DXF i DWG je zachowują.
- W wierszu poleceń `-STYLE` robi to samo z opcjami (Current, New, Font, Height, Width, Oblique, Delete, List).
- Czcionka, której nie ma na komputerze odczytującym rysunek, jest pokazywana w innym kroju.
