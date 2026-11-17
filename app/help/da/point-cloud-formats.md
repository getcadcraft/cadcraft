---
title: Punktskyformater: hvad der kan vedhæftes, og hvad der skal eksporteres
summary: Hvilke laserscanningsfiler der kan vedhæftes under tegningen, hvilke der er en scannerproducents eget format, og hvad du skal eksportere fra scannerens software, så scanningen kan vedhæftes her.
keywords: punktsky, pointcloudattach, pcattach, laserscanning, scanning, formater, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, kan ikke åbne, ikke læst
from: 20a5f4ee
---

## Hvad der kan vedhæftes her

Vedhæft disse med {{cmd:POINTCLOUDATTACH}}, {{ui:Åbn}} eller ved at slippe dem på siden (se emnet om at spore som-udførte linjer over en punktsky):

| Format | Filendelse | Hvad der læses |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkter, farver, intensitet, LiDAR-klasser, koordinatsystemet og dets enheder. LAZ op til 1 GB. |
| E57 | `.e57` | Hver scanning i filen, placeret efter sin position; farver, eller intensitet når filen ikke har farver; meter. Billeder i filen udelades (det siges). Op til 6 millioner punkter og 512 MB foreløbig: eksportér større scanninger som LAS eller LAZ. |
| PLY | `.ply` | Tekst og binær (begge byte-rækkefølger): hjørnepunkternes x y z, farver og intensitet. Flader udelades (det siges). |
| PCD | `.pcd` | Tekst og binær: x y z, pakkede eller separate farver, intensitet. Komprimerede PCD-filer læses endnu ikke: gem dem som binær eller tekst. |
| PTX | `.ptx` | En eller flere scanninger, hver placeret med sin egen transformation; punkter, scanneren ikke målte, udelades. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, med intensitet og farver, når kolonnerne findes. |

## Filer, som kun scannerens software læser

Nogle scanningsfiler er en scannerproducents eget format uden offentlig beskrivelse og uden åben læser. CadCraft kan ikke læse dem: når du vedhæfter en, skrives hvad den er, og hvad du skal gøre, på kommandolinjen. Eksportér scanningen fra producentens software som E57 eller LAS (eller PTX, PTS), og vedhæft derefter den eksporterede fil.

| Fil | Filendelse | Eksportér fra |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: åbn projektet og eksportér det. Projektet peger kun på sine scanninger, så kopiering af `.rcp` alene giver ingen punkter. |
| ReCap-scanning | `.rcs` | ReCap: åbn projektet, scanningen hører til, og eksportér det. |
| FARO-scanning | `.fls` | FARO SCENE. |
| Leica-scanning | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-scanning | `.tzf` | Trimble RealWorks eller Trimble Business Center. |
| Z+F-scanning | `.zfs` | Z+F LaserControl. |

:::tip
Når eksporten spørger om et format, beholder LAS eller LAZ alt, CadCraft bruger (farver, intensitet, klasser, koordinatsystemet og dets enheder), i den mindste fil.
:::

## Hvorfor disse filer ikke læses

Disse formater er ikke offentliggjorte, og den eneste måde at læse dem på er producentens eget softwarebibliotek, under dets egne vilkår. CadCraft læser kun formater, det kan læse med sin egen kode på din computer, så en scanning skal aldrig sendes nogen steder for at blive vedhæftet.
