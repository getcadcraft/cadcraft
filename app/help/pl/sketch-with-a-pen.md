---
title: Szkicuj piórem i uzyskaj dokładną geometrię
summary: Rysuj odręcznie piórem, myszą albo palcem, a każdy pociągnięcie staje się czystą linią, okręgiem, łukiem, prostokątem albo polilinią, gdy podnosisz pióro, przyciągniętą do tego, co już narysowano, z rozmiarem gotowym do nadpisania.
keywords: szkic, pióro, rysik, odręczny, palec, uporządkuj, dokładny, przyciąganie, SKETCHLIVE, SKETCHFIX, rozmiar, nadpisz, nacisk, grubość linii, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Uruchom {{cmd:SKETCHLIVE}} (albo wybierz **Rysuj › Więcej › Szkicuj piórem**) i narysuj pociągnięcie, naciskając i przeciągając. Gdy podniesiesz pióro, CadCraft odczytuje, co miałeś na myśli, i umieszcza to w rysunku:

| Twoje pociągnięcie | Co dostajesz |
|---|---|
| Prawie prosta | Linia. Prawie pozioma albo pionowa linia staje się dokładnie pozioma albo pionowa. |
| Zamknięte i okrągłe | Okrąg |
| Część okrągłego kształtu | Łuk |
| Zamknięte z czterema narożnikami pod kątem prostym | Prostokąt |
| Cokolwiek innego | Polilinia z prostymi bokami |

Końce pociągnięcia są przyciągane do najbliższego końca tego, co już narysowano, więc szkicowana ściana łączy się z sąsiednią.

## Nadpisz rozmiar

Po każdym pociągnięciu wiersz poleceń pokazuje jego rozmiar (**długość** linii, **promień** okręgu albo łuku, **szerokość** prostokąta) jako wartość domyślną. Naciśnij {{key:Enter}}, aby ją zachować, albo wpisz liczbę albo długość, na przykład `12'6"`, aby ją zastąpić. Linia zachowuje swój pierwszy koniec, okrąg swój środek, prostokąt swój pierwszy narożnik.

Naciśnij {{key:Enter}} przy pustym monicie, aby zakończyć, albo wpisz `U`, aby cofnąć ostatnie pociągnięcie. Cała sesja to jeden krok cofnięcia.

## Oczyszczanie kilku pociągnięć naraz

{{cmd:SKETCHFIX}} zbiera pociągnięcia i czyni je wszystkie dokładnymi, gdy naciśniesz {{key:Enter}}; to dobre dla szybko rysowanego, niedokładnego układu.

:::note
Wszystko jest obliczane na twoim komputerze według reguł, bez żadnego modelu i bez wysyłania czegokolwiek.
:::

## Nacisk ustawia grubość linii

Tam, gdzie pióro jest włączone dla aplikacji (Ustawienia › Globalne › Urządzenia wejściowe › Pióro), pociągnięcie narysowane piórem zawiera każdy punkt, jaki dało pióro, i jego nacisk. Lekkie pociągnięcie daje cienki obiekt, a mocne — gruby: średni nacisk pociągnięcia wybiera 0,18, 0,25, 0,35 albo 0,50 mm, a wiersz poleceń mówi, który. Pociągnięcia rysowane myszą albo palcem biorą bieżącą grubość linii jak dotąd. {{cmd:PENPRESSURE}} wyłącza to (albo włącza ponownie); wybór jest zapamiętywany w tej przeglądarce.
