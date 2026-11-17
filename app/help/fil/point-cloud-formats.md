---
title: Mga format ng point cloud: ano ang maaaring i-attach, at ano ang i-export
summary: Aling laser scan file ang nag-a-attach sa ilalim ng drawing, alin ang sariling format ng gumawa ng scanner, at ano ang i-export mula sa software ng scanner para mag-attach dito ang scan.
keywords: point cloud, pointcloudattach, pcattach, laser scan, scan, mga format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, i-export, hindi mabuksan, hindi nababasa
from: 20a5f4ee
---

## Ano ang maaaring i-attach dito

I-attach ang mga ito gamit ang {{cmd:POINTCLOUDATTACH}}, {{ui:Buksan}}, o sa pamamagitan ng pag-drop sa page (tingnan ang topic tungkol sa pag-trace ng as-built na linya sa ibabaw ng point cloud):

| Format | Extension | Ano ang nababasa |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: points, kulay, intensity, LiDAR class, ang coordinate system at ang units nito. LAZ hanggang 1 GB. |
| E57 | `.e57` | Bawat scan sa file, bawat isa nakalagay ayon sa pose nito; kulay, o intensity kapag walang kulay ang file; metro. Hindi kasama ang mga picture sa file (sinasabi). Hanggang 6 milyong point at 512 MB sa ngayon: i-export ang mas malalaking scan bilang LAS o LAZ. |
| PLY | `.ply` | Text at binary (parehong byte order): ang x y z ng vertex, kulay, at intensity. Hindi kasama ang faces (sinasabi). |
| PCD | `.pcd` | Text at binary: x y z, packed o hiwalay na kulay, intensity. Hindi pa nababasa ang compressed na PCD: i-save ang mga ito bilang binary o text. |
| PTX | `.ptx` | Isa o higit pang scan, bawat isa nakalagay ayon sa sarili nitong transform; hindi kasama ang mga point na hindi sinukat ng scanner. Metro. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, kasama ang intensity at kulay kapag nandoon ang mga column. |

## Mga file na tanging software ng scanner ang nakababasa

Ang ilang scan file ay sariling format ng gumawa ng scanner, walang nai-publish na paglalarawan at walang bukas na reader. Hindi ito mabasa ng CadCraft: kapag in-attach mo ito, sinasabi nito kung ano ito at kung ano ang gagawin sa command line. I-export ang scan mula sa software ng gumawa bilang E57 o LAS (o PTX, PTS), saka i-attach ang na-export na file.

| File | Extension | I-export mula sa |
|---|---|---|
| ReCap project | `.rcp` | ReCap: buksan ang project at i-export ito. Tumuturo lang ang project sa mga scan nito, kaya walang points kung kokopyahin lang ang `.rcp`. |
| ReCap scan | `.rcs` | ReCap: buksan ang project na pag-aari ng scan at i-export ito. |
| FARO scan | `.fls` | FARO SCENE. |
| Leica scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble scan | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Z+F scan | `.zfs` | Z+F LaserControl. |

:::tip
Kapag humingi ng format ang export, pinapanatili ng LAS o LAZ ang lahat ng ginagamit ng CadCraft (kulay, intensity, classes, ang coordinate system at ang units nito) sa pinakamaliit na file.
:::

## Bakit hindi nababasa ang mga file na ito

Hindi nai-publish ang mga format na iyon, at ang tanging paraan para basahin ang mga ito ay ang sariling software library ng bawat gumawa, sa ilalim ng sarili nilang tuntunin. Bumabasa lang ang CadCraft ng mga format na kaya nitong basahin gamit ang sarili nitong code sa computer mo, kaya hindi kailangang ipadala kahit saan ang scan para mag-attach.
