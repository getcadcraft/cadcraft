---
title: Szkicuj piórem i uzyskaj precyzyjną geometrię
summary: Rysuj odręcznie piórem, myszą lub palcem. Każde pociągnięcie po uniesieniu pióra staje się czystą linią, okręgiem, łukiem, prostokątem lub polilinią, przyciągniętą do tego, co już narysowano, z rozmiarem gotowym do nadpisania.
keywords: szkic, pióro, rysik, odręczny, palec, oczyszczanie, precyzyjny, przyciąganie, SKETCHLIVE, SKETCHFIX, rozmiar, nadpisz
from: cd87eb75
---

Uruchom {{cmd:SKETCHLIVE}} (lub wybierz **Rysuj › Więcej › Szkicuj piórem**) i narysuj pociągnięcie, naciskając i przeciągając. Po uniesieniu pióra CadCraft odczytuje zamierzony kształt i umieszcza go w rysunku:

| Pociągnięcie | Wynik |
|---|---|
| Prawie proste | Linia. Prawie pozioma lub pionowa linia staje się dokładnie pozioma lub pionowa. |
| Zamknięte i okrągłe | Okrąg |
| Część okrągłego kształtu | Łuk |
| Zamknięte z czterema kątami prostymi | Prostokąt |
| Cokolwiek innego | Polilinia o prostych bokach |

Końce pociągnięcia są przyciągane do najbliższego końca tego, co już narysowano, dzięki czemu naszkicowana ściana łączy się z sąsiednią ścianą.

## Nadpisz rozmiar

Po każdym pociągnięciu wiersz poleceń pokazuje jego rozmiar (**długość** linii, **promień** okręgu lub łuku, **szerokość** prostokąta) jako wartość domyślną. Naciśnij {{key:Enter}}, aby ją zachować, albo wpisz liczbę lub długość, np. `12'6"`, aby ją zastąpić. Linia zachowuje swój pierwszy koniec, okrąg swój środek, a prostokąt swój pierwszy narożnik.

Naciśnij {{key:Enter}} przy pustym monicie, aby zakończyć, albo wpisz `U`, aby cofnąć ostatnie pociągnięcie. Cała sesja to jeden krok cofnięcia.

## Oczyszczanie kilku pociągnięć naraz

{{cmd:SKETCHFIX}} zbiera pociągnięcia i czyni je wszystkie precyzyjnymi po naciśnięciu {{key:Enter}}. Sprawdza się to przy szybko narysowanym, przybliżonym układzie.

:::note
Wszystko jest obliczane na komputerze według reguł, bez modelu i bez wysyłania czegokolwiek gdziekolwiek.
:::
