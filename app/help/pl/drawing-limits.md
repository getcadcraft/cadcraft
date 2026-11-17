---
title: Ustawianie granic rysunku
summary: LIMITS ustawia prostokąt rysunku. Siatka go wypełnia, ZOOM All go pokazuje, a przy włączonych granicach punkty poza nim są odrzucane. Granice są zapisywane w plikach DWG i DXF.
keywords: granice, granice rysunku, LIMITS, LIMMIN, LIMMAX, LIMCHECK, siatka, poza granicami, rozmiar arkusza, obszar rysunku, ZOOM All, obwiednia
from: 9e97b30d
---

**Granice rysunku** to prostokąt, który określa, jak duży ma być rysunek: obszar, w którym planujesz rysować, na przykład arkusz 420 × 297. Nowy rysunek ich nie ma, więc siatka i obszar rysunku są nieograniczone, jak dotąd.

## Ustawianie

Wpisz {{cmd:LIMITS}} i odpowiedz:

- `Specify lower left corner or [ON/OFF] <0,0>`: punkt albo {{key:Enter}}, aby zachować bieżący.
- `Specify upper right corner <420,297>`: punkt albo {{key:Enter}}, aby zachować bieżący. Musi leżeć powyżej i na prawo od pierwszego.

Albo wpisz `ON` lub `OFF` przy pierwszym pytaniu, aby przełączyć sprawdzanie bez zmiany prostokąta. Ustawienie narożników to jeden krok cofnięcia, tak samo jak każde ON i OFF.

## Co robią

- **Siatka wypełnia granice** i zatrzymuje się na ich krawędzi. To obraz obszaru, więc włącz {{ui:Siatka}}, aby ją zobaczyć.
- **ZOOM All** ({{cmd:ZOOM}}, potem {{ui:Wszystkie}}) pokazuje razem granice i rysunek; {{ui:Zasięg}} nadal pokazuje tylko rysunek.
- **Przy włączonych granicach (ON)** punkt, który wpiszesz lub klikniesz poza nimi, jest odrzucany z komunikatem `**Outside limits`, a monit pozostaje. Dotyczy to poleceń tworzących obiekty: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, poleceń wymiarowania i kilku innych. Polecenia, które tylko przesuwają, zaznaczają lub mierzą, nie są ograniczane, podobnie jak wklejanie, przeciąganie uchwytem i obiekt utworzony przez procedurę LISP: granice są wskazówką do rysowania, a nie murem. Przy wyłączonych granicach (OFF) nic nie jest odrzucane.
- Obiekty, które już leżą poza granicami, zostają tam, gdzie są.

## W plikach i w LISP

Są zapisywane w DWG i DXF jako `$LIMMIN`, `$LIMMAX` i `$LIMCHECK`. Plik z innego programu, który ma tylko domyślne granice tego programu (0,0 do 12,9 lub 420,297, sprawdzanie wyłączone), otwiera się bez nich, więc jego siatka nie jest ściśnięta w mały prostokąt. Plik z własnymi granicami lub z włączonym sprawdzaniem je zachowuje. W LISP `(getvar "LIMMIN")`, `LIMMAX` i `LIMCHECK` odczytują je, a `setvar` zapisuje, jako jeden krok cofnięcia.

Granice należą do modelu. Arkusz (układ) ma własny rozmiar papieru.
