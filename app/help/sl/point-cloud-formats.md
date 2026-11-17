---
title: Oblike oblakov točk: kaj se priloži in kaj izvoziti
summary: Katere datoteke laserskega skeniranja se priložijo pod risbo, katere so lastna oblika proizvajalca skenerja in kaj izvoziti iz programske opreme skenerja, da se skeniranje tu priloži.
keywords: oblak točk, pointcloudattach, pcattach, laserski posnetek, skeniranje, oblike, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne morem odpreti, ni prebrano
from: 20a5f4ee
---

## Kaj se tu priloži

Priložite jih z {{cmd:POINTCLOUDATTACH}}, z {{ui:Odpri}} ali tako, da jih spustite na stran (glejte temo o obrisovanju izvedenih črt nad oblakom točk):

| Oblika | Pripona | Kaj se prebere |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: točke, barve, intenzivnost, razredi LiDAR, koordinatni sistem in njegove enote. LAZ do 1 GB. |
| E57 | `.e57` | Vsako skeniranje v datoteki, vsako postavljeno po svoji drži; barve ali intenzivnost, kadar datoteka nima barv; metri. Slike v datoteki so izpuščene (program to pove). Do 6 milijonov točk in 512 MB za zdaj: večja skeniranja izvozite kot LAS ali LAZ. |
| PLY | `.ply` | Besedilo in binarno (obe razvrstitvi bajtov): koordinate x y z oglišč, barve in intenzivnost. Ploskve so izpuščene (program to pove). |
| PCD | `.pcd` | Besedilo in binarno: x y z, sestavljene ali ločene barve, intenzivnost. Stisnjene datoteke PCD še niso prebrane: shranite jih kot binarne ali besedilne. |
| PTX | `.ptx` | Eno ali več skeniranj, vsako postavljeno s svojo transformacijo; točke, ki jih skener ni izmeril, so izpuščene. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Besedilo: x y z, z intenzivnostjo in barvami, kadar so stolpci tam. |

## Datoteke, ki jih bere samo programska oprema skenerja

Nekatere datoteke skeniranja so lastna oblika proizvajalca skenerja, brez objavljenega opisa in brez odprtega bralnika. CadCraft jih ne more brati: ob priloženju ene izpiše, kaj je, in kaj storiti v ukazni vrstici. Skeniranje izvozite iz programske opreme proizvajalca kot E57 ali LAS (ali PTX, PTS), nato priložite izvoženo datoteko.

| Datoteka | Pripona | Izvozite iz |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: odprite projekt in ga izvozite. Projekt samo kaže na svoja skeniranja, zato sam `.rcp`, kopiran sam, ne da točk. |
| Skeniranje ReCap | `.rcs` | ReCap: odprite projekt, ki mu skeniranje pripada, in ga izvozite. |
| Skeniranje FARO | `.fls` | FARO SCENE. |
| Skeniranje Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skeniranje Trimble | `.tzf` | Trimble RealWorks ali Trimble Business Center. |
| Skeniranje Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Ko izvoz zahteva format, LAS ali LAZ ohrani vse, kar CadCraft uporablja (barve, intenzivnost, razrede, koordinatni sistem in njegove enote), v najmanjši datoteki.
:::

## Zakaj teh datotek ni mogoče prebrati

Te oblike niso objavljene; edini način, da jih preberemo, je lastna programska knjižnica vsakega proizvajalca, pod njegovimi pogoji. CadCraft bere samo oblike, ki jih lahko bere s svojo kodo na vašem računalniku, zato skeniranja nikoli ni treba poslati nikamor, da se priloži.
