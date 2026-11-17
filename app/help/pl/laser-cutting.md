---
title: Wysyłanie rysunku do lasera
summary: Otwórz panel Laser, wybierz, co ma robić każda warstwa (cięcie, nacinanie, grawerowanie, wypełnianie, obraz), podejrzyj ruchy głowicy, zapisz G-code lasera GRBL albo wyślij go z przeglądarki po obrysowaniu zadania.
keywords: laser, laser do cięcia, grawerka laserowa, GRBL, G-code, gcode, grawerowanie, wypełnianie, dithering, grawerowanie obrazu, nacinanie, cięcie, Web Serial, obrysuj zadanie, moc, prędkość, przejścia, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} zamienia warstwy rysunku w program dla lasera sterowanego przez GRBL (większość amatorskich i małych warsztatowych laserów diodowych i CO2). Wpisz `LASER` (lub `LASERCUT`) i naciśnij {{key:Enter}}, albo wybierz {{ui:Laser…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}. W stylach wstążki jest w menu {{ui:Plik}}, obok {{ui:Drukuj}}. Panel otwiera się nad rysunkiem i pozostaje otwarty podczas rysowania: podgląd śledzi każdą zmianę.

:::warning
Każde ustawienie sprawdź najpierw na odpadzie, noś okulary ochronne dopasowane do lasera, zamykaj pokrywę, jeśli jest, i nigdy nie zostawiaj włączonego lasera bez nadzoru. Liczby, z którymi startuje każda warstwa, są wartościami zastępczymi, a nie zaleceniami dla żadnego materiału.
:::

## Co jest wysyłane

Panel odczytuje model (nie arkusze), z warstw włączonych i odmrożonych:

- Linie, łuki, okręgi, polilinie (segmenty łukowe pozostają łukami), elipsy i splajny. Kształt, który kończy się w punkcie początku, jest traktowany jako zamknięty.
- Bloki są rozbijane: obiekt na warstwie 0 wewnątrz bloku trafia na warstwę odwołania do bloku.
- Kreskowanie wysyła swój kontur, więc wykreskowane logo na warstwie **Wypełnianie** zostaje wypełnione.
- Obraz (`IMAGEATTACH`) jest grawerowany na warstwie ustawionej na **Grawerowanie obrazu**, gdy leży prosto (nie obrócony ani pochylony) i jego plik jest otwarty w CadCraft.
- Tekst, wymiary, odnośniki, punkty i linie konstrukcyjne nie są wysyłane; panel podaje, ile ich pominięto. Aby wypalić tekst, narysuj litery jako kształty albo je wykreskuj.

Rozmiary są wysyłane w milimetrach z jednostek rysunku (`UNITS`): rysunek w calach jest mnożony przez 25,4. Rysunek bez ustawionych jednostek jest wysyłany w stosunku jednostka do jednego milimetra. Zaznacz {{ui:Tylko zaznaczone obiekty}}, aby wysłać część rysunku.

## Wybierz, co robi każda warstwa

Każda warstwa z czymkolwiek na niej jest wierszem. {{ui:Operacja}} ustawia ją na **Cięcie**, **Nacinanie**, **Grawerowanie linii**, **Wypełnianie kształtów**, **Grawerowanie obrazu** lub **Nie wysyłaj**, z {{ui:Moc %}}, {{ui:Prędkość mm/min}} i liczbą {{ui:Przejścia}}. Każda zmiana to jeden krok cofania i jest zapisywana w rysunku: DWG (każda wersja zapisywana przez CadCraft) i DXF zachowują ustawienia, więc rysunek otwiera się z nimi następnym razem. Inne programy otwierają plik jak dotąd; widzą jeden nieużywany blok o nazwie CADCRAFT_LASER (jego wyczyszczenie w tamtym programie usuwa ustawienia).

- **Wypełnianie** wypala wnętrze zamkniętych kształtów liniami w odstępie {{ui:Interlinia}}, pod {{ui:Kąt}}, w jednym albo w obu kierunkach, z nadskokiem (overscan), tak aby głowica miała pełną prędkość w chwili włączenia lasera; kreskowanie krzyżowe dodaje drugie przejście pod kątem 90°. Kształt z otworem pozostaje otwarty w miejscu otworu.
- **Grawerowanie obrazu** zamienia obraz w kropki (Floyda–Steinberga, Atkinsona, uporządkowane albo zwykła czerń i biel z progiem) lub, z opcją *Poziomy szarości*, w moc zmienną.
- Kolejność: najpierw obrazy i wypełnienia, potem grawerowanie linii, potem nacinanie, a na końcu cięcia, aby wycinany element nie przesunął się podczas grawerowania. W obrębie jednej warstwy ścieżki biegną **od wewnątrz** (otwór przed płytą, w której się znajduje), zawsze do najbliższego.

## Podgląd, a potem zapis

Podgląd pokazuje, co wykonuje głowica: wypalane linie w kolorze, szybkie przejazdy szarym kolorem, a zielona ramka obejmuje wszystko, co się wypala. Pod nim są rozmiar, długość wypalania i szacowany czas (bez przyspieszenia; rzeczywista maszyna działa dłużej). {{ui:Zapisz G-code…}} zapisuje G-code GRBL w trybie lasera: `$32=1`, `M4` (lub `M3`) z wartościami S, ruchy `G0` i `G1`, na końcu `M5`. X0 Y0 to lewy dolny róg zadania, chyba że wybierzesz początek rysunku: ustaw tam zero roboczy maszyny.

## Wysyłanie z przeglądarki

W Chrome i Edge {{ui:Połącz…}} prosi o wybranie portu USB lasera. Nic nie łączy się ani nie wysyła, dopóki nie naciśniesz przycisku. Najpierw naciśnij {{ui:Obrysuj zadanie}}: głowica obrysowuje ramkę zadania z wyłączonym laserem (albo przy niskiej mocy ustawionej dla wskaźnika), abyś zobaczył, gdzie będzie wypalać. Dopiero wtedy włącza się {{ui:Wyślij zadanie}}, a po każdej zmianie wyłącza się ponownie. {{ui:Wstrzymaj}} zatrzymuje głowicę, {{ui:Stop}} też ją zatrzymuje, resetuje kontroler (laser się wyłącza) i wysyła `M5`. Tam, gdzie brakuje Web Serial (Firefox, Safari oraz CadCraft Studio, który nie ma jeszcze Web Serial), panel oferuje tylko zapis: zapisz G-code i wyślij go programem dołączonym do lasera.

## Jeszcze nie zbudowano

Jeszcze nie zbudowano: formatów innych kontrolerów (Ruida, lasery Marlin, pliki producentów), zakładek (tabs) i dojść (lead-ins), przesunięcia szczeliny (kerf), bibliotek materiałów, osi obrotowej i osi Z, wyrównania kamerą, tekstu jako konturów.
