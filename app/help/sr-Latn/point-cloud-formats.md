---
title: Formati oblaka tačaka: šta se prikači i šta se izvozi
summary: Koji fajlovi laserskog skeniranja se prikače ispod crteža, koji su sopstveni format proizvođača skenera, i šta izvesti iz softvera skenera da se sken ovde prikači.
keywords: oblak tačaka, pointcloudattach, pcattach, laserski sken, sken, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne može da se otvori, nije pročitano
from: 20a5f4ee
---

## Šta se ovde prikači

Prikači ove fajlove sa {{cmd:POINTCLOUDATTACH}}, {{ui:Otvori}} ili tako što ih prevučeš na stranicu (vidi temu o trasiranju linija izvedenog stanja preko oblaka tačaka):

| Format | Ekstenzija | Šta se čita |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: tačke, boje, intenzitet, LiDAR klase, koordinatni sistem i njegove jedinice. LAZ do 1 GB. |
| E57 | `.e57` | Svaki sken u fajlu, svaki postavljen po svojoj pozi; boje, ili intenzitet kad fajl nema boja; metri. Slike u fajlu su izostavljene (kaže se). Za sada do 6 miliona tačaka i 512 MB: veće skenove izvezi kao LAS ili LAZ. |
| PLY | `.ply` | Tekstualni i binarni (oba redosleda bajtova): x y z temena, boje i intenzitet. Površi su izostavljene (kaže se). |
| PCD | `.pcd` | Tekstualni i binarni: x y z, spakovane ili odvojene boje, intenzitet. Kompresovani PCD fajlovi se još ne čitaju: sačuvaj ih kao binarne ili tekstualne. |
| PTX | `.ptx` | Jedan ili više skenova, svaki postavljen sopstvenom transformacijom; tačke koje skener nije izmerio su izostavljene. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, sa intenzitetom i bojama kad su kolone tu. |

## Fajlovi koje čita samo softver skenera

Neki fajlovi skenova su sopstveni format proizvođača skenera, bez objavljenog opisa i bez otvorenog čitača. CadCraft ih ne može pročitati: pri prikačivanju kaže šta su i šta da se uradi u komandnoj liniji. Izvezi sken iz softvera proizvođača kao E57 ili LAS (ili PTX, PTS), pa prikači izvezeni fajl.

| Fajl | Ekstenzija | Izvezi iz |
|---|---|---|
| ReCap projekat | `.rcp` | ReCap: otvori projekat i izvezi ga. Projekat samo upućuje na svoje skenove, pa samo kopiranje `.rcp` fajla ne daje tačke. |
| ReCap sken | `.rcs` | ReCap: otvori projekat kome sken pripada i izvezi ga. |
| FARO sken | `.fls` | FARO SCENE. |
| Leica sken | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble sken | `.tzf` | Trimble RealWorks ili Trimble Business Center. |
| Z+F sken | `.zfs` | Z+F LaserControl. |

:::tip
Kad izvoz traži format, LAS ili LAZ čuva sve što CadCraft koristi (boje, intenzitet, klase, koordinatni sistem i njegove jedinice) u najmanjem fajlu.
:::

## Zašto se ovi fajlovi ne čitaju

Ti formati nisu objavljeni, a jedini način da se čitaju je sopstvena softverska biblioteka svakog proizvođača, pod sopstvenim uslovima. CadCraft čita samo formate koje može da čita sopstvenim kodom na tvom računaru, pa skeniranje nikad ne mora da se šalje nigde da bi se prikačilo.
