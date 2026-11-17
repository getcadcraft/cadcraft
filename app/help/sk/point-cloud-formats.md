---
title: Formáty bodových oblakov: čo sa pripojí a čo exportovať
summary: Ktoré súbory laserového skenovania sa pripoja pod výkres, ktoré sú vlastným formátom výrobcu skenera a čo exportovať zo softvéru skenera, aby sa sken tu pripojil.
keywords: bodový oblak, pointcloudattach, pcattach, laserové skenovanie, sken, formáty, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, nedá sa otvoriť, nečíta sa
from: 20a5f4ee
---

## Čo sa tu pripojí

Pripojte tieto súbory pomocou {{cmd:POINTCLOUDATTACH}}, {{ui:Otvoriť}} alebo ich presunutím na stránku (pozri tému o obkresľovaní skutočného stavu nad bodovým oblakom):

| Formát | Prípona | Čo sa číta |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: body, farby, intenzita, triedy LiDAR, súradnicový systém a jeho jednotky. LAZ do 1 GB. |
| E57 | `.e57` | Každý sken v súbore, každý umiestnený podľa svojej polohy; farby, alebo intenzita, keď súbor nemá farby; metre. Obrázky v súbore sa vynechajú (uvedie sa to). Zatiaľ do 6 miliónov bodov a 512 MB: väčšie skeny exportujte ako LAS alebo LAZ. |
| PLY | `.ply` | Text aj binárne (obe poradia bajtov): vrcholy x y z, farby a intenzita. Plochy sa vynechajú (uvedie sa to). |
| PCD | `.pcd` | Text aj binárne: x y z, zbalené alebo oddelené farby, intenzita. Komprimované súbory PCD zatiaľ nečítame: uložte ich ako binárne alebo textové. |
| PTX | `.ptx` | Jeden alebo viac skenov, každý umiestnený vlastnou transformáciou; body, ktoré skener nezmeral, sa vynechajú. Metre. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, s intenzitou a farbami, keď sú stĺpce prítomné. |

## Súbory, ktoré číta iba softvér skenera

Niektoré súbory skenov sú vlastným formátom výrobcu skenera, bez zverejneného opisu a bez otvoreného čítača. CadCraft ich nemôže čítať: pri pokuse o pripojenie vypíše, čo to je, a čo urobiť na príkazovom riadku. Exportujte sken zo softvéru výrobcu ako E57 alebo LAS (alebo PTX, PTS) a potom pripojte exportovaný súbor.

| Súbor | Prípona | Exportujte z |
|---|---|---|
| ReCap projekt | `.rcp` | ReCap: otvorte projekt a exportujte ho. Projekt iba ukazuje na svoje skeny, takže samotné skopírovanie `.rcp` nedá žiadne body. |
| ReCap sken | `.rcs` | ReCap: otvorte projekt, do ktorého sken patrí, a exportujte ho. |
| FARO sken | `.fls` | FARO SCENE. |
| Leica sken | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble sken | `.tzf` | Trimble RealWorks alebo Trimble Business Center. |
| Z+F sken | `.zfs` | Z+F LaserControl. |

:::tip
Keď export žiada formát, LAS alebo LAZ zachová všetko, čo CadCraft používa (farby, intenzitu, triedy, súradnicový systém a jeho jednotky), v najmenšom súbore.
:::

## Prečo sa tieto súbory nečítajú

Tieto formáty nie sú zverejnené a jediný spôsob, ako ich čítať, je knižnica softvéru každého výrobcu podľa jeho vlastných podmienok. CadCraft číta iba formáty, ktoré dokáže čítať vlastným kódom na vašom počítači, takže sken sa nikdy nemusí posielať nikam, aby sa pripojil.
