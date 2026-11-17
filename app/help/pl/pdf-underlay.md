---
title: Podkłady PDF i import PDF
summary: Umieść stronę PDF pod rysunkiem, aby ją obrysować i wydrukować, albo zamień linie i tekst strony na obiekty rysunku.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podkład, obrys, import pdf, skan, rzut kondygnacji, wygaszanie, przycięcie, warstwy, przyciąganie, otwórz pdf
from: aa301d0f
---

## Dwa sposoby wczytania strony PDF

- **Dołącz** ({{cmd:PDFATTACH}}) zachowuje PDF jako obraz pod rysunkiem. Obrysowujesz go, przyciągasz do jego linii, wygaszasz i przycinasz, a drukuje się razem z arkuszem. Rysunek zachowuje tylko nazwę pliku.
- **Importuj** ({{cmd:PDFIMPORT}}) zamienia linie, krzywe, wypełnienia i tekst strony na zwykłe obiekty rysunku, na warstwach nazwanych od PDF. Są twoje do edycji, a PDF nie jest potrzebny później.

Otwarcie PDF przyciskiem {{ui:Otwórz}} pyta, którego z tych dwóch sposobów chcesz użyć.

## Dołącz stronę

1. Wpisz `PDFATTACH` (lub `PDFATT`) i wybierz PDF. Jeśli ma kilka stron, wpisz numer strony.
2. Kliknij punkt wstawienia (lewy dolny róg strony).
3. Naciśnij {{key:Enter}}, aby użyć prawdziwego rozmiaru strony, albo wpisz skalę: jednostki rysunku na punkt PDF (punkt to 1/72 cala, więc w rysunku w milimetrach wpisz 0.3528).
4. Naciśnij {{key:Enter}}, aby nie obracać, albo wpisz kąt.

Strona jest obiektem jak odwołanie do bloku: przesuwasz ją, obracasz, skalujesz, kopiujesz, usuwasz i umieszczasz na warstwie. Wyłączenie jej warstwy sprawia, że znika. Powiększenie powoduje, że strona jest rysowana ponownie, ostro.

## Obrysuj ją

Przy włączonym {{ui:Przyciąganie}} kursor przyciąga się do własnych linii PDF: końców, punktów środkowych i przecięć (oraz {{ui:Najbliższy}}, gdy ten tryb jest włączony). Tekst narysowany na stronie jako litery nie jest przyciągany.

## Dopasuj ją

- `PDFADJUST`: **Wygaszanie** (od 0 do 80 procent), **Kontrast** (od 0 do 100), **Monochromatyczny** oraz **Wł/wył**, aby ukryć ją bez usuwania.
- `PDFCLIP`: pokazuje tylko prostokąt lub wielokąt strony; **Usuń** usuwa przycięcie.
- `PDFLAYERS`: PDF może mieć własne warstwy. Polecenie je wypisuje; wpisz numer, aby włączyć lub wyłączyć warstwę dla tego podkładu. Warstwy wyłączone w pliku zaczynają wyłączone.

## Drukowanie i zapis

PLOT drukuje stronę jako jej linie, wypełnienia i tekst (dzięki temu pozostaje ostra i można ją przeszukiwać). Obrazy wewnątrz PDF są pokazywane na ekranie, ale jeszcze nie są drukowane.

DWG lub DXF 2000 zachowuje podkład jako łącze: nazwę pliku, stronę, położenie, skalę, obrót, przycięcie, wygaszanie i kontrast. Samego PDF nie ma w rysunku. Po ponownym otwarciu rysunku wpisz `PDF` i wskaż plik ponownie; do tego czasu strony są widoczne jako ramki, a ich prawdziwy rozmiar pojawia się po ponownym wskazaniu. Starszy DXF (R12) nie ma podkładów: zachowuje ramkę i nazwę. Nie sprawdzono jeszcze, jak inne programy odczytują zapisane przycięcie i skalę.

## Importuj stronę

1. Wpisz `PDFIMPORT` (lub `PDFIM`) i wybierz PDF oraz stronę.
2. Kliknij miejsce, w którym ma być lewy dolny róg strony.
3. Naciśnij {{key:Enter}}, aby użyć prawdziwego rozmiaru, wpisz skalę albo wybierz **Dwa punkty**: strona zostaje narysowana w prawdziwym rozmiarze, następnie klikasz dwa punkty o znanej odległości i wpisujesz rzeczywistą odległość; wszystko zostaje przeskalowane.

Linie stają się liniami i polilinią, okręgi i łuki są rozpoznawane, wypełnione kształty stają się kreskowaniami typu wypełnienie, a tekst staje się tekstem na warstwie kończącej się na `-TEXT`. To jeden krok cofnięcia. Obrazy w PDF nie są importowane: zamiast tego dołącz stronę. Skan (strona będąca tylko obrazem) nie ma linii do zaimportowania.

PDF-y są odczytywane jako niezaufane pliki: żadne skrypty nie są uruchamiane, a bardzo duża strona zostaje obcięta, o czym program informuje.
