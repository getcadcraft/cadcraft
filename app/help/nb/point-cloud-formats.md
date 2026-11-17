---
title: Punktskyformater: hva som legges ved, og hva som eksporteres
summary: Hvilke laserskanningsfiler som legges ved under tegningen, hvilke som er en skanneprodusents egne format, og hva du skal eksportere fra skannerens programvare slik at skanningen kan legges ved her.
keywords: punktsky, pointcloudattach, pcattach, laserskanning, skanning, formater, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksporter, kan ikke åpne, ikke lest
from: 20a5f4ee
---

## Hva som kan legges ved her

Legg disse ved med {{cmd:POINTCLOUDATTACH}}, {{ui:Åpne}} eller ved å slippe dem på siden (se emnet om å tegne over som-bygget-linjer på en punktsky):

| Format | Filendelse | Hva som leses |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkter, farger, intensitet, LiDAR-klasser, koordinatsystemet og enhetene. LAZ opptil 1 GB. |
| E57 | `.e57` | Hver skanning i filen, plassert etter sin posisjon; farger, eller intensitet når filen ikke har farger; meter. Bilder i filen utelates (det sies fra om det). Opptil 6 millioner punkter og 512 MB foreløpig: eksporter større skanninger som LAS eller LAZ. |
| PLY | `.ply` | Tekst og binær (begge byteordener): hjørnepunktenes x y z, farger og intensitet. Flater utelates (det sies fra om det). |
| PCD | `.pcd` | Tekst og binær: x y z, pakkede eller separate farger, intensitet. Komprimerte PCD-filer leses ikke ennå: lagre dem som binær eller tekst. |
| PTX | `.ptx` | En eller flere skanninger, hver plassert med sin egen transformasjon; punkter skanneren ikke målte, utelates. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, med intensitet og farger når kolonnene finnes. |

## Filer bare skannerens programvare kan lese

Noen skannefiler er en skanneprodusents egne format, uten publisert beskrivelse og uten åpen leser. CadCraft kan ikke lese dem: å legge en ved skriver hva den er og hva du skal gjøre på kommandolinjen. Eksporter skanningen fra produsentens programvare som E57 eller LAS (eller PTX, PTS), og legg deretter ved den eksporterte filen.

| Fil | Filendelse | Eksporter fra |
|---|---|---|
| ReCap-prosjekt | `.rcp` | ReCap: åpne prosjektet og eksporter det. Prosjektet peker bare til skanningene sine, så kopiering av `.rcp` alene gir ingen punkter. |
| ReCap-skanning | `.rcs` | ReCap: åpne prosjektet skanningen hører til, og eksporter det. |
| FARO-skanning | `.fls` | FARO SCENE. |
| Leica-skanning | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skanning | `.tzf` | Trimble RealWorks eller Trimble Business Center. |
| Z+F-skanning | `.zfs` | Z+F LaserControl. |

:::tip
Når eksporten spør etter et format, beholder LAS eller LAZ alt CadCraft bruker (farger, intensitet, klasser, koordinatsystemet og enhetene) i den minste filen.
:::

## Hvorfor disse filene ikke leses

Disse formatene er ikke publisert, og den eneste måten å lese dem på er produsentens eget programvarebibliotek, under dets egne vilkår. CadCraft leser bare formater den kan lese med sin egen kode på datamaskinen din, så en skanning må aldri sendes noe sted for å legges ved.
