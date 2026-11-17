---
title: Puntwolkformate: wat aanheg, en wat om uit te voer
summary: Watter laserskanderingslêers onder die tekening aanheg, watter 'n skanderaarmaker se eie formaat is, en wat jy uit die skanderaar se sagteware moet uitvoer sodat die skandering hier aanheg.
keywords: puntwolk, pointcloudattach, pcattach, laserskandering, skandering, formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, uitvoer, kan nie oopmaak nie, nie gelees nie
from: 20a5f4ee
---

## Wat hier aanheg

Heg hierdie aan met {{cmd:POINTCLOUDATTACH}}, {{ui:Maak oop}} of deur dit op die bladsy te laat val (sien die onderwerp oor die traseer van soos-gebou-lyne oor 'n puntwolk):

| Formaat | Lêeruitbreiding | Wat gelees word |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punte, kleure, intensiteit, LiDAR-klasse, die koördinaatstelsel en sy eenhede. LAZ tot 1 GB. |
| E57 | `.e57` | Elke skandering in die lêer, elk geplaas volgens sy houding; kleure, of intensiteit wanneer die lêer geen kleure het nie; meter. Prente in die lêer word weggelaat (gesê). Tot 6 miljoen punte en 512 MB vir nou: voer groter skanderings uit as LAS of LAZ. |
| PLY | `.ply` | Teks en binêr (albei greeporde): die hoekpunte se x y z, kleure en intensiteit. Vlakke word weggelaat (gesê). |
| PCD | `.pcd` | Teks en binêr: x y z, gepakte of afsonderlike kleure, intensiteit. Gekomprimeerde PCD-lêers word nog nie gelees nie: stoor hulle as binêr of teks. |
| PTX | `.ptx` | Een of meer skanderings, elk geplaas volgens sy eie transformasie; punte wat die skanderaar nie gemeet het nie, word weggelaat. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Teks: x y z, met intensiteit en kleure wanneer die kolomme daar is. |

## Lêers wat net die skanderaar se sagteware lees

Sommige skanderingslêers is 'n skanderaarmaker se eie formaat, sonder 'n gepubliseerde beskrywing en sonder 'n oop leser. CadCraft kan dit nie lees nie: as jy een aanheg, sê dit wat dit is en wat om op die opdragreël te doen. Voer die skandering uit uit die maker se sagteware as E57 of LAS (of PTX, PTS), en heg dan die uitgevoerde lêer aan.

| Lêer | Lêeruitbreiding | Voer dit uit vanaf |
|---|---|---|
| ReCap-projek | `.rcp` | ReCap: maak die projek oop en voer dit uit. Die projek wys net na sy skanderings, so die kopiëring van net die `.rcp` gee geen punte nie. |
| ReCap-skandering | `.rcs` | ReCap: maak die projek oop waaraan die skandering behoort en voer dit uit. |
| FARO-skandering | `.fls` | FARO SCENE. |
| Leica-skandering | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skandering | `.tzf` | Trimble RealWorks of Trimble Business Center. |
| Z+F-skandering | `.zfs` | Z+F LaserControl. |

:::tip
Wanneer die uitvoer 'n formaat vra, hou LAS of LAZ alles wat CadCraft gebruik (kleure, intensiteit, klasse, die koördinaatstelsel en sy eenhede) in die kleinste lêer.
:::

## Waarom hierdie lêers nie gelees word nie

Daardie formate is nie gepubliseer nie, en die enigste manier om hulle te lees is elke maker se eie sagteware-biblioteek, onder sy eie voorwaardes. CadCraft lees net formate wat dit met sy eie kode op jou rekenaar kan lees, so 'n skandering hoef nooit ergens gestuur te word om aan te heg nie.
