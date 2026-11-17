---
title: Linie konstrukcyjne i półproste
summary: Rysuj linie, które biegną bez końca (XLINE) albo od punktu w jedną stronę (RAY), by wyrównać elementy, i przycinaj je do zwykłych linii.
keywords: xline, ray, linia konstrukcyjna, linie konstrukcyjne, półprosta, nieskończona linia, linia prowadząca, linia pomocnicza, dwusieczna, linia odsunięcia, linie układu, xl
from: b6c398bc
---

## Czego się nauczysz

Jak rysować linie konstrukcyjne, by wyrównywać elementy podczas rysowania: przez dwa punkty, poziomo lub pionowo, pod kątem, w połowie między dwoma kierunkami albo w ustalonej odległości od linii. I jak przycinać je do zwykłych linii, gdy spełnią swoje zadanie.

## Dwa rodzaje

- **Linia konstrukcyjna** ({{cmd:XLINE}}) biegnie bez końca w obie strony.
- **Półprosta** ({{cmd:RAY}}) zaczyna się w punkcie i biegnie bez końca w jedną stronę.

Obie rysują się na całym obszarze rysunku, niezależnie od powiększenia, w podziale ekranu i w oknach widokowych na arkuszu. {{ui:Zasięg}} je pomija, więc powiększenie do rysunku nadal dopasowuje to, co narysowano.

## Rysowanie linii konstrukcyjnych

1. Kliknij {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Linia konstrukcyjna}} albo wpisz `XL` i naciśnij {{key:Enter}}.
2. Kliknij punkt. Każde kolejne kliknięcie dodaje linię konstrukcyjną przez pierwszy punkt i kliknięty punkt.
3. Naciśnij {{key:Enter}}, aby zakończyć.

Zamiast pierwszego punktu możesz wpisać opcję:

| Opcja | Co robi |
|---|---|
| `H` (Poziomo) | Linie poziome, po jednej przez każdy klikany punkt. |
| `V` (Pionowo) | Linie pionowe przez każdy punkt. |
| `A` (Kąt) | Linie pod kątem, który wpiszesz (w stopniach, przeciwnie do ruchu wskazówek zegara od osi X), przez każdy punkt. `R` (Odniesienie) mierzy kąt od linii, którą wybierzesz. |
| `B` (Dwusieczna) | Kliknij wierzchołek, a potem punkt wzdłuż jednego boku: każdy punkt kliknięty wzdłuż drugiego boku dodaje linię dokładnie w połowie między nimi. |
| `O` (Odsunięcie) | Wpisz odległość, wybierz linię, a następnie kliknij stronę: linia konstrukcyjna w tej odległości od niej, równoległa. `T` (Przez) umieszcza ją zamiast tego przez punkt, który klikniesz. Odległość jest zapamiętywana na następny raz. |

## Rysowanie półprostych

1. Kliknij {{ui:Rysuj}} › {{ui:Więcej}} › {{ui:Półprosta}} albo wpisz `RAY` i naciśnij {{key:Enter}}.
2. Kliknij miejsca, w których zaczynają się półproste.
3. Kliknij punkt, przez który ma przechodzić każda półprosta. Naciśnij {{key:Enter}}, aby zakończyć.

## Przyciąganie do nich i przycinanie

Linie konstrukcyjne i półproste przyciągają się do najbliższego, prostopadłej i przecięcia. Nie mają końców ani środka, więc przyciąganie do końca i do punktu środkowego niczego na nich nie znajduje.

Przycinają i są przycinane jak inne linie w {{cmd:TRIM}} i {{cmd:BREAK}}:

- Przytnij jeden koniec linii konstrukcyjnej, a stanie się półprostą zaczynającą się w miejscu cięcia.
- Przytnij dalszą część półprostej, a stanie się zwykłą linią.
- Przerwij linię konstrukcyjną w jednym punkcie, a otrzymasz dwie półproste.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} i {{cmd:STRETCH}} działają na nich także. Zaznaczenie oknem nigdy ich nie wybiera, bo żadne okno nie zmieści całej nieskończonej linii; wybiera je okno przecięcia albo kliknięcie.

:::note
DWG (każda wersja) i DXF 2000 zachowują je jako linie konstrukcyjne. DXF R12 ich nie ma, więc tam stają się liniami przez cały rysunek, a zapis o tym informuje. Wydruk (plot) lub PDF rysuje je tylko w obszarze, który zostanie wydrukowany.
:::
