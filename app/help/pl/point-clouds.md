---
title: Odrysuj linie powykonawcze na chmurze punktów
summary: Dołącz skan laserowy (LAS, LAZ, E57, PLY, PCD, PTX, PTS lub XYZ) pod rysunkiem, wytnij w nim przekrój planu i rysuj ściany, drzwi i kolumny z przyciąganiem do jego punktów.
keywords: chmura punktów, pointcloudattach, pcattach, pointcloud, pc, skan laserowy, skan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, powykonawczy, as-built, as built, geodezja, przekrój, cięcie planu, węzeł, przyciąganie, odrysuj, istniejący stan
from: b0e0aae5
---

## Co powstanie

Rzut piętra powykonawczy: ściany zeskanowanego budynku narysowane liniami i polilinami dokładnie na punktach skanu.

## Dołączanie chmury

1. Ustaw najpierw jednostki rysunku, jeśli ich nie ma (pole {{ui:Jednostki}} w {{ui:Właściwości}} lub {{cmd:UNITS}}): CadCraft przelicza chmurę z jej własnych jednostek na jednostki rysunku.
2. Wpisz {{cmd:POINTCLOUDATTACH}} (lub `PCATTACH`) i naciśnij {{key:Enter}}. Wskaż plik `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` lub `.xyz` (temat o formatach chmur punktów opisuje, co wnosi każdy z nich i co wyeksportować z oprogramowania skanera). Plik możesz też otworzyć przez {{ui:Otwórz}}, upuścić na stronę albo wysłać z przeglądarki modeli BIM przez {{ui:Odrysuj w CadCraft}}.
3. `Wskaż lewy dolny róg chmury`: naciśnij {{key:Enter}}, aby zachować współrzędne pliku (skan zarejestrowany w projekcie układa się z rysunkiem), albo kliknij, gdzie ma trafić jej lewy dolny róg.
4. Wiersz poleceń podaje, ile punktów jest widocznych. Widok przybliża się do chmury; leży ona pod liniami rysunku, a każdy punkt widać z góry.

## Wytnij przekrój planu i odrysuj

1. Wpisz {{cmd:POINTCLOUD}} (lub `PC`), a następnie `S` dla {{ui:Przekrój}}. Widoczny jest tylko wąski pas 1.2 m powyżej najniższego punktu chmury: ściany, otwory drzwiowe i kolumny czytają się jak rzut piętra.
2. `H` ustawia wysokość cięcia (Wysokość (H)), `T` jego grubość (Grubość (T), w jednostkach rysunku). {{key:Enter}} kończy polecenie.
3. Włącz przyciąganie do obiektów ({{key:F3}}) z {{ui:Węzeł}} wśród przyciągań. Rysuj poleceniem {{cmd:LINE}} lub {{cmd:PLINE}}: kursor przyciąga się do punktów przekroju, oznaczonych jako „Chmura punktów”. Własne końce, punkty środkowe i środki rysunku mają pierwszeństwo przed chmurą, więc zamknięcie polilinii trafia w jej pierwszy punkt.
4. Zmień wysokość cięcia, aby odrysować inny poziom, a potem wyłącz przekrój ponownie (`S`), by zobaczyć całą chmurę.

## Więcej opcji

W {{cmd:POINTCLOUD}}: Kolory (C) koloruje punkty kolorami pliku, wysokością, intensywnością, klasą LiDAR lub jednym kolorem; Rozmiar punktu (SI) ustawia wielkość punktu; Ukryj/Pokaż (V) ukrywa lub pokazuje chmurę; Powiększ (Z) przybliża do niej; Odłącz (D) ją odłącza.

Karta 3D też pokazuje chmurę, z najniższym punktem na gruncie i tym samym przekrojem.

:::note
Chmura nie jest częścią rysunku: nie zapisuje się w DWG ani DXF, a cofnięcie nie zmienia jej. Dołącz ją ponownie, gdy później otworzysz rysunek. Pliki są odczytywane na tym komputerze; nic nie jest wysyłane. Bardzo duże skany są równomiernie przerzedzane do 2 milionów punktów. Pliki E57 otwierają się do 6 milionów punktów i 512 MB na razie: większe skany eksportuj jako LAS lub LAZ.
:::

## Wydruk

{{cmd:PLOT}} drukuje chmurę razem z rysunkiem, pod liniami: w wydruku modelu ({{ui:Wszystko}} obejmuje obszar chmury) i w każdym oknie widokowym układu, w PDF, PNG, SVG oraz w tym, co wyślesz do drukarki. Drukuje to, co widać na ekranie: przekrój, jeśli jest włączony, wybrane kolory, a gdy ukryto chmurę, nie drukuje się wcale. Na papierze punkty stają się małymi kwadratami, a w każdym wygrywa najwyższy punkt; wydruk zawiera najwyżej około 400 000 punktów (bardzo gęsta chmura drukuje się większymi kwadratami). Chmura jest drukowana tylko w rysunku, do którego została dołączona; nigdy nie drukuje się bezpośrednio w przestrzeni papieru, tylko przez okno widokowe.

## Wiele skanów

Skany wykonane z różnych stanowisk można zarejestrować w jednym układzie, dopracować metodą ICP i wyeksportować jako jeden LAS lub E57: zob. [Zarejestruj kilka skanów w jeden](topic:register-scans).
