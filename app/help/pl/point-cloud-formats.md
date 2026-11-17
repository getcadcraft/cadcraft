---
title: Formaty chmur punktów: co się dołącza i co wyeksportować
summary: Które pliki skanów laserowych dołączają się pod rysunkiem, które są własnym formatem producenta skanera i co wyeksportować z oprogramowania skanera, aby skan dołączył się tutaj.
keywords: chmura punktów, pointcloudattach, pcattach, skan laserowy, skan, formaty, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, nie można otworzyć, nie odczytano
from: 20a5f4ee
---

## Co tu się dołącza

Dołączaj je poleceniem {{cmd:POINTCLOUDATTACH}}, przyciskiem {{ui:Otwórz}} albo przeciągając na stronę (zob. temat o obrysowywaniu linii as-built nad chmurą punktów):

| Format | Rozszerzenie | Co jest odczytywane |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkty, kolory, intensywność, klasy LiDAR, układ współrzędnych i jego jednostki. LAZ do 1 GB. |
| E57 | `.e57` | Każdy skan w pliku, każdy umieszczony według swojej pozycji; kolory, a gdy plik nie ma kolorów, intensywność; metry. Obrazy w pliku są pomijane (program o tym informuje). Na razie do 6 milionów punktów i 512 MB: większe skany eksportuj jako LAS lub LAZ. |
| PLY | `.ply` | Tekst i binarny (obie kolejności bajtów): współrzędne x y z wierzchołków, kolory i intensywność. Ściany są pomijane (program o tym informuje). |
| PCD | `.pcd` | Tekst i binarny: x y z, kolory spakowane lub osobne, intensywność. Skompresowane pliki PCD nie są jeszcze odczytywane: zapisz je jako binarne lub tekstowe. |
| PTX | `.ptx` | Jeden lub więcej skanów, każdy umieszczony własnym przekształceniem; punkty, których skaner nie zmierzył, są pomijane. Metry. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, z intensywnością i kolorami, gdy takie kolumny są obecne. |

## Pliki, które odczytuje tylko oprogramowanie skanera

Niektóre pliki skanów są własnym formatem producenta skanera, bez opublikowanego opisu i bez otwartego czytnika. CadCraft ich nie odczyta: dołączenie takiego pliku wypisuje, czym jest i co zrobić w wierszu poleceń. Wyeksportuj skan z oprogramowania producenta jako E57 lub LAS (albo PTX, PTS), a następnie dołącz wyeksportowany plik.

| Plik | Rozszerzenie | Eksportuj z |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: otwórz projekt i wyeksportuj go. Projekt tylko wskazuje swoje skany, więc samo skopiowanie `.rcp` nie daje punktów. |
| Skan ReCap | `.rcs` | ReCap: otwórz projekt, do którego należy skan, i wyeksportuj go. |
| Skan FARO | `.fls` | FARO SCENE. |
| Skan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skan Trimble | `.tzf` | Trimble RealWorks lub Trimble Business Center. |
| Skan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Gdy eksport pyta o format, LAS lub LAZ zachowuje wszystko, czego używa CadCraft (kolory, intensywność, klasy, układ współrzędnych i jego jednostki), w najmniejszym pliku.
:::

## Dlaczego tych plików nie odczytuje się

Te formaty nie są opublikowane, a jedynym sposobem ich odczytu jest własna biblioteka oprogramowania każdego producenta, na jego własnych warunkach. CadCraft odczytuje tylko formaty, które potrafi odczytać własnym kodem na twoim komputerze, więc skan nigdy nie musi być wysyłany, aby go dołączyć.
