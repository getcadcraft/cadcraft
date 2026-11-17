---
title: Formati oblaka tačaka: šta se priključuje i šta izvesti
summary: Koje datoteke laserskog skeniranja se priključuju ispod crteža, koje su vlastiti format proizvođača skenera, i šta izvesti iz softvera skenera da se skeniranje ovdje priključi.
keywords: oblak tačaka, pointcloudattach, pcattach, laserski sken, skeniranje, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne može se otvoriti, nije pročitano
from: 20a5f4ee
---

## Šta se ovdje priključuje

Priključi ih sa {{cmd:POINTCLOUDATTACH}}, {{ui:Open}} ili tako što ih prevučeš na stranicu (vidi temu o ucrtavanju linija stvarnog stanja preko oblaka tačaka):

| Format | Ekstenzija | Šta se čita |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: tačke, boje, intenzitet, LiDAR klase, koordinatni sistem i njegove jedinice. LAZ do 1 GB. |
| E57 | `.e57` | Svaki sken u datoteci, svaki postavljen svojom pozom; boje, ili intenzitet kad datoteka nema boja; metri. Slike u datoteci se izostavljaju (kaže se). Za sada do 6 miliona tačaka i 512 MB: veće skenove izvezi kao LAS ili LAZ. |
| PLY | `.ply` | Tekst i binarno (oba redoslijeda bajtova): x, y, z vrhova, boje i intenzitet. Površi se izostavljaju (kaže se). |
| PCD | `.pcd` | Tekst i binarno: x y z, zapakovane ili odvojene boje, intenzitet. Kompresovane PCD datoteke se još ne čitaju: sačuvaj ih kao binarne ili tekstualne. |
| PTX | `.ptx` | Jedan ili više skenova, svaki postavljen vlastitom transformacijom; tačke koje skener nije izmjerio se izostavljaju. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, sa intenzitetom i bojama kad kolone postoje. |

## Datoteke koje čita samo softver skenera

Neke datoteke skeniranja su vlastiti format proizvođača skenera, bez objavljenog opisa i bez otvorenog čitača. CadCraft ih ne može čitati: pri priključivanju ispiše šta su i šta treba raditi u komandnoj liniji. Izvezi skeniranje iz softvera proizvođača kao E57 ili LAS (ili PTX, PTS), pa priključi izvezenu datoteku.

| Datoteka | Ekstenzija | Izvezi iz |
|---|---|---|
| ReCap projekat | `.rcp` | ReCap: otvori projekat i izvezi ga. Projekat samo pokazuje na svoje skenove, pa kopiranje samog `.rcp` daje bez tačaka. |
| ReCap sken | `.rcs` | ReCap: otvori projekat kojem sken pripada i izvezi ga. |
| FARO sken | `.fls` | FARO SCENE. |
| Leica sken | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble sken | `.tzf` | Trimble RealWorks ili Trimble Business Center. |
| Z+F sken | `.zfs` | Z+F LaserControl. |

:::tip
Kad izvoz traži format, LAS ili LAZ čuva sve što CadCraft koristi (boje, intenzitet, klase, koordinatni sistem i njegove jedinice) u najmanjoj datoteci.
:::

## Zašto se ove datoteke ne čitaju

Ti formati nisu objavljeni, a jedini način da se čitaju je vlastita softverska biblioteka svakog proizvođača, pod njegovim uslovima. CadCraft čita samo formate koje može čitati vlastitim kodom na tvom računaru, pa skeniranje nikad ne mora biti poslano nigdje da bi se priključilo.
