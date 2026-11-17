---
title: Formats de nuage de points : ce qui s'attache, et quoi exporter
summary: Quels fichiers de scan laser s'attachent sous le dessin, lesquels sont au format propre au fabricant du scanner, et quoi exporter du logiciel du scanner pour que le scan s'attache ici.
keywords: nuage de points, pointcloudattach, pcattach, scan laser, scan, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exporter, impossible à ouvrir, non lu
from: 20a5f4ee
---

## Ce qui s'attache ici

Attachez-les avec {{cmd:POINTCLOUDATTACH}}, {{ui:Ouvrir}} ou en les déposant sur la page (voir la rubrique sur le tracé des lignes du relevé sur un nuage de points) :

| Format | Extension | Ce qui est lu |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4 : points, couleurs, intensité, classes LiDAR, système de coordonnées et ses unités. LAZ jusqu'à 1 Go. |
| E57 | `.e57` | Chaque scan du fichier, placé selon sa pose ; couleurs, ou intensité lorsque le fichier n'a pas de couleurs ; mètres. Les images du fichier sont omises (signalé). Jusqu'à 6 millions de points et 512 Mo pour l'instant : exportez les scans plus gros en LAS ou LAZ. |
| PLY | `.ply` | Texte et binaire (les deux ordres d'octets) : x y z des sommets, couleurs et intensité. Les faces sont omises (signalé). |
| PCD | `.pcd` | Texte et binaire : x y z, couleurs regroupées ou séparées, intensité. Les fichiers PCD compressés ne sont pas encore lus : enregistrez-les en binaire ou en texte. |
| PTX | `.ptx` | Un ou plusieurs scans, chacun placé selon sa propre transformation ; les points que le scanner n'a pas mesurés sont omis. Mètres. |
| PTS, XYZ | `.pts`, `.xyz` | Texte : x y z, avec intensité et couleurs lorsque les colonnes existent. |

## Fichiers que seul le logiciel du scanner lit

Certains fichiers de scan sont dans un format propre au fabricant du scanner, sans description publiée ni lecteur ouvert. CadCraft ne peut pas les lire : leur ajout indique ce qu'ils sont et quoi faire, sur la ligne de commande. Exportez le scan depuis le logiciel du fabricant en E57 ou LAS (ou PTX, PTS), puis attachez le fichier exporté.

| Fichier | Extension | À exporter depuis |
|---|---|---|
| Projet ReCap | `.rcp` | ReCap : ouvrez le projet et exportez-le. Le projet ne fait que pointer vers ses scans ; copier le `.rcp` seul ne donne aucun point. |
| Scan ReCap | `.rcs` | ReCap : ouvrez le projet auquel appartient le scan et exportez-le. |
| Scan FARO | `.fls` | FARO SCENE. |
| Scan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scan Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Scan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Lorsque l'export demande un format, LAS ou LAZ conserve tout ce que CadCraft utilise (couleurs, intensité, classes, système de coordonnées et ses unités) dans le plus petit fichier.
:::

## Pourquoi ces fichiers ne sont pas lus

Ces formats ne sont pas publiés, et la seule façon de les lire est la bibliothèque logicielle de chaque fabricant, selon ses propres conditions. CadCraft ne lit que les formats qu'il peut lire avec son propre code sur votre ordinateur ; un scan n'a donc jamais besoin d'être envoyé quelque part pour être attaché.
