---
title: Punktmolnsformat och vad som ska exporteras
summary: Vilka laserskanningsfiler som bifogas under ritningen, vilka som är en skannertillverkares eget format, och vad du ska exportera från skannerns program så att skanningen bifogas här.
keywords: punktmoln, pointcloudattach, pcattach, laserskanning, skanning, format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportera, kan inte öppnas, läses inte
from: 20a5f4ee
---

## Vad som bifogas här

Bifoga dessa med {{cmd:POINTCLOUDATTACH}}, {{ui:Öppna}} eller genom att släppa dem på sidan (se ämnet om att spåra som utförda linjer över ett punktmoln):

| Format | Filändelse | Vad som läses |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkter, färger, intensitet, LiDAR-klasser, koordinatsystemet och dess enheter. LAZ upp till 1 GB. |
| E57 | `.e57` | Varje skanning i filen, var och en placerad efter sin position; färger, eller intensitet när filen saknar färger; meter. Bilder i filen utelämnas (det sägs). Upp till 6 miljoner punkter och 512 MB för nu: exportera större skanningar som LAS eller LAZ. |
| PLY | `.ply` | Text och binärt (båda bytordningarna): hörnens x y z, färger och intensitet. Ytor utelämnas (det sägs). |
| PCD | `.pcd` | Text och binärt: x y z, packade eller separata färger, intensitet. Komprimerade PCD-filer läses inte ännu: spara dem som binärt eller text. |
| PTX | `.ptx` | En eller flera skanningar, var och en placerad med sin egen transform; punkter som skannern inte mätte utelämnas. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, med intensitet och färger när kolumnerna finns. |

## Filer som bara skannerns program läser

Vissa skanningsfiler är en skannertillverkares eget format, utan publicerad beskrivning och utan öppen läsare. CadCraft kan inte läsa dem: när du bifogar en skriver den vad den är och vad du ska göra på kommandoraden. Exportera skanningen från tillverkarens program som E57 eller LAS (eller PTX, PTS), och bifoga sedan den exporterade filen.

| Fil | Filändelse | Exportera från |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: öppna projektet och exportera det. Projektet pekar bara på sina skanningar, så att kopiera enbart `.rcp` ger inga punkter. |
| ReCap-skanning | `.rcs` | ReCap: öppna projektet som skanningen hör till och exportera det. |
| FARO-skanning | `.fls` | FARO SCENE. |
| Leica-skanning | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skanning | `.tzf` | Trimble RealWorks eller Trimble Business Center. |
| Z+F-skanning | `.zfs` | Z+F LaserControl. |

:::tip
När exporten frågar efter ett format behåller LAS eller LAZ allt som CadCraft använder (färger, intensitet, klasser, koordinatsystemet och dess enheter) i minsta möjliga fil.
:::

## Varför dessa filer inte läses

De formaten är inte publicerade, och det enda sättet att läsa dem är tillverkarens egna programbibliotek, under deras egna villkor. CadCraft läser bara format som den kan läsa med sin egen kod på din dator, så en skanning behöver aldrig skickas någonstans för att bifogas.
