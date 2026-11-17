---
title: Mga point para sa BIM program
summary: I-export ang mga point, at ang insertion point ng mga block na may paglalarawan, sa CSV o TXT file na ini-import ng BIM at survey program.
keywords: exportpoints, i-export ang points, points, csv, txt, pnezd, penzd, xyz, survey points, coordinates, bim, setting out, point file, northing, easting, elevation
from: d80e2d53
---

## Ano ang gagawin mo

Isang point file: isang linya kada point, na may numero, northing, easting, elevation, at paglalarawan nito, na maaaring i-import ng mga BIM program (kasama ang Revit at Archicad) at survey software para maglagay ng survey point, site marker, o kagamitan.

## I-export ang mga point

1. Piliin ang mga point at block reference na gusto mong gamitin ang insertion point, o huwag pumili ng kahit ano para kunin ang lahat ng point.
2. I-type ang {{cmd:EXPORTPOINTS}} (o `EXPPTS`, o {{ui:Mga Block}} › {{ui:Higit pa}} › {{ui:I-export ang points}}) at pindutin ang {{key:Enter}} (pindutin muli ang {{key:Enter}} sa `Pumili ng mga point at block` kapag walang napili).
3. Kapag pumili ka ng block na may attributes, inililista ng CadCraft ang tags nila: i-type ang tag na ang value ay ang paglalarawan (halimbawa `ITEM`), o anumang iba para gamitin ang pangalan ng bawat block.
4. Piliin ang mga column: `PNEZD` (point, northing, easting, elevation, description: ang karaniwan), `PENZD` (easting bago ang northing), o `XYZ` (coordinates lang).
5. Piliin ang units: `D` gaya ng iginuhit, o `M` metro o `F` paa (kapag nakatakda lang ang units ng drawing: Properties › {{ui:Mga unit}} na walang napili).
6. Kapag may UCS na nakatakda, piliin ang `W` world o `U` UCS coordinates (tingnan ang [UCS at naikot na view](topic:ucs-and-turned-view)).
7. Piliin ang `C` para sa `.csv` na pinaghihiwalay ng kuwit, o `T` para sa `.txt` na pinaghihiwalay ng tab, at ang unang numero ng point.

Ida-download ang file bilang `<drawing>-points.csv` (o `.txt`), at sinasabi ng history kung ilang point ang laman nito.

## Ano ang nasa file

- Isang point kada linya, nagtatapos sa line break (CR LF), tatlong decimal.
- Ang elevation ng point ay ang Z nito (0 kapag wala). Ang point ng block ay ang insertion point nito.
- Ang paglalarawang may kuwit (o tab sa TXT) o quote ay nakalagay sa double quotes, at dinodoble ang mga quote nito.
- Ang format ay ang binabasa at isinusulat ng CivilCraft, kaya bumubukas din doon ang file bilang points.

## Mga karaniwang pagkakamali

- `D` lang ang inaalok na units: walang nakatakdang units ang drawing. Itakda ang mga ito, o mag-convert sa ibang program.
- Malayo sa inaasahan mo ang mga point sa ibang program: i-export ang world coordinates (`W`), o ang UCS na ginagamit ng survey point ng ibang program (`U`).
