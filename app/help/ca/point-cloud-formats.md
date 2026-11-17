---
title: Formats de núvol de punts: què s'adjunta i què exportar
summary: Quins fitxers d'escaneig làser s'adjunten sota el dibuix, quins són el format propi d'un fabricant d'escàners, i què exportar des del programari de l'escàner perquè l'escaneig s'adjunti aquí.
keywords: núvol de punts, pointcloudattach, pcattach, escaneig làser, escaneig, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exporta, no es pot obrir, no es llegeix
from: 20a5f4ee
---

## Què s'adjunta aquí

Adjunta'ls amb {{cmd:POINTCLOUDATTACH}}, {{ui:Open}} o deixant-los a la pàgina (vegeu el tema sobre calcar línies tal com s'han construït sobre un núvol de punts).

| Format | Extensió | Què es llegeix |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punts, colors, intensitat, classes LiDAR, el sistema de coordenades i les seves unitats. LAZ fins a 1 GB. |
| E57 | `.e57` | Cada escaneig del fitxer, cadascun col·locat segons la seva posició; colors, o intensitat quan el fitxer no té colors; metres. Les imatges del fitxer es deixen fora (s'indica). Fins a 6 milions de punts i 512 MB de moment: exporta els escaneigs més grans com a LAS o LAZ. |
| PLY | `.ply` | Text i binari (tots dos ordres de bytes): les x y z dels vèrtexs, colors i intensitat. Les cares es deixen fora (s'indica). |
| PCD | `.pcd` | Text i binari: x y z, colors empaquetats o separats, intensitat. Els fitxers PCD comprimits encara no es llegeixen: desa'ls com a binari o text. |
| PTX | `.ptx` | Un o més escaneigs, cadascun col·locat amb la seva pròpia transformació; els punts que l'escàner no ha mesurat es deixen fora. Metres. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, amb intensitat i colors quan hi són les columnes. |

## Fitxers que només llegeix el programari de l'escàner

Alguns fitxers d'escaneig són el format propi d'un fabricant d'escàners, sense descripció publicada i sense lector obert. CadCraft no els pot llegir: en adjuntar-ne un, es mostra què és i què fer a la línia d'ordres. Exporta l'escaneig des del programari del fabricant com a E57 o LAS (o PTX, PTS), i adjunta el fitxer exportat.

| Fitxer | Extensió | Exporta-ho des de |
|---|---|---|
| Projecte ReCap | `.rcp` | ReCap: obre el projecte i exporta'l. El projecte només apunta als seus escaneigs, així que copiar només el `.rcp` no dona cap punt. |
| Escaneig ReCap | `.rcs` | ReCap: obre el projecte al qual pertany l'escaneig i exporta'l. |
| Escaneig FARO | `.fls` | FARO SCENE. |
| Escaneig Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneig Trimble | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Escaneig Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Quan l'exportació demana un format, LAS o LAZ conserva tot el que usa CadCraft (colors, intensitat, classes, el sistema de coordenades i les seves unitats) en el fitxer més petit.
:::

## Per què no es llegeixen aquests fitxers

Aquests formats no estan publicats, i l'única manera de llegir-los és la biblioteca de programari de cada fabricant, sota les seves pròpies condicions. CadCraft només llegeix formats que pot llegir amb el seu propi codi a l'ordinador, així que un escaneig mai no s'ha d'enviar enlloc per adjuntar-lo.
