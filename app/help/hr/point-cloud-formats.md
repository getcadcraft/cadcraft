---
title: Formati oblaka točaka: što se prilaže i što izvesti
summary: Koje datoteke laserskog skeniranja se prilažu ispod crteža, koje su vlastiti format proizvođača skenera i što izvesti iz softvera skenera da se skeniranje ovdje može priložiti.
keywords: oblak točaka, pointcloudattach, pcattach, laserski sken, skeniranje, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne može se otvoriti, nije pročitano
from: 20a5f4ee
---

## Što se ovdje prilaže

Priložite ih s {{cmd:POINTCLOUDATTACH}}, {{ui:Otvori}} ili ispuštanjem na stranicu (vidi temu o ocrtavanju izvedenih linija preko oblaka točaka):

| Format | Ekstenzija | Što se čita |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: točke, boje, intenzitet, LiDAR klase, koordinatni sustav i njegove jedinice. LAZ do 1 GB. |
| E57 | `.e57` | Svako skeniranje u datoteci, svako postavljeno svojom pozom; boje, ili intenzitet kad datoteka nema boja; metri. Slike u datoteci su izostavljene (javlja se poruka). Za sada do 6 milijuna točaka i 512 MB: veća skeniranja izvezite kao LAS ili LAZ. |
| PLY | `.ply` | Tekst i binarno (oba redoslijeda bajtova): x y z vrhova, boje i intenzitet. Plohe su izostavljene (javlja se poruka). |
| PCD | `.pcd` | Tekst i binarno: x y z, zbijene ili odvojene boje, intenzitet. Komprimirane PCD datoteke još se ne čitaju: spremite ih kao binarne ili tekstualne. |
| PTX | `.ptx` | Jedno ili više skeniranja, svako postavljeno vlastitom transformacijom; točke koje skener nije izmjerio su izostavljene. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, s intenzitetom i bojama kad su stupci tu. |

## Datoteke koje čita samo softver skenera

Neke datoteke skeniranja su vlastiti format proizvođača skenera, bez objavljenog opisa i bez otvorenog čitača. CadCraft ih ne može čitati: njihovo prilaganje ispisuje što su i što raditi u naredbenom retku. Izvezite skeniranje iz softvera proizvođača kao E57 ili LAS (ili PTX, PTS), zatim priložite izvezenu datoteku.

| Datoteka | Ekstenzija | Izvezite iz |
|---|---|---|
| ReCap projekt | `.rcp` | ReCap: otvorite projekt i izvezite ga. Projekt samo upućuje na svoja skeniranja, pa kopiranje samog `.rcp` ne daje točke. |
| ReCap skeniranje | `.rcs` | ReCap: otvorite projekt kojem skeniranje pripada i izvezite ga. |
| FARO skeniranje | `.fls` | FARO SCENE. |
| Leica skeniranje | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skeniranje | `.tzf` | Trimble RealWorks ili Trimble Business Center. |
| Z+F skeniranje | `.zfs` | Z+F LaserControl. |

:::tip
Kad izvoz traži format, LAS ili LAZ čuva sve što CadCraft koristi (boje, intenzitet, klase, koordinatni sustav i njegove jedinice) u najmanjoj datoteci.
:::

## Zašto se ove datoteke ne čitaju

Ti formati nisu objavljeni, a jedini način da ih se čita je vlastita softverska biblioteka svakog proizvođača, pod njegovim uvjetima. CadCraft čita samo formate koje može čitati vlastitim kodom na vašem računalu, pa skeniranje nikad ne mora biti poslano nigdje da bi se priložilo.
