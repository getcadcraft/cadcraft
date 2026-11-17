---
title: Puntenwolkformaten: wat wordt gekoppeld en wat u moet exporteren
summary: Welke laserscanbestanden onder de tekening worden gekoppeld, welke het eigen formaat van een scannerfabrikant zijn, en wat u uit de software van de scanner moet exporteren zodat de scan hier wordt gekoppeld.
keywords: puntenwolk, pointcloudattach, pcattach, laserscan, scan, formaten, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exporteren, kan niet openen, niet gelezen
from: 20a5f4ee
---

## Wat hier wordt gekoppeld

Koppel deze met {{cmd:POINTCLOUDATTACH}}, {{ui:Openen}} of door ze op de pagina te slepen (zie het onderwerp over het traceren van als-gebouwd-lijnen over een puntenwolk):

| Formaat | Extensie | Wat er wordt gelezen |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punten, kleuren, intensiteit, LiDAR-klassen, het coördinatenstelsel en zijn eenheden. LAZ tot 1 GB. |
| E57 | `.e57` | Elke scan in het bestand, elk geplaatst volgens zijn positie; kleuren, of intensiteit wanneer het bestand geen kleuren heeft; meter. Afbeeldingen in het bestand worden weggelaten (dat wordt gemeld). Voorlopig tot 6 miljoen punten en 512 MB: exporteer grotere scans als LAS of LAZ. |
| PLY | `.ply` | Tekst en binair (beide bytevolgordes): de x y z van de hoekpunten, kleuren en intensiteit. Vlakken worden weggelaten (dat wordt gemeld). |
| PCD | `.pcd` | Tekst en binair: x y z, gepakte of afzonderlijke kleuren, intensiteit. Gecomprimeerde PCD-bestanden worden nog niet gelezen: sla ze op als binair of tekst. |
| PTX | `.ptx` | Een of meer scans, elk geplaatst met zijn eigen transformatie; punten die de scanner niet heeft gemeten, worden weggelaten. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, met intensiteit en kleuren wanneer de kolommen er zijn. |

## Bestanden die alleen de software van de scanner leest

Sommige scanbestanden zijn het eigen formaat van een scannerfabrikant, zonder openbare beschrijving en zonder open lezer. CadCraft kan ze niet lezen: wanneer u er een koppelt, meldt het wat het is en wat u op de opdrachtregel moet doen. Exporteer de scan uit de software van de fabrikant als E57 of LAS (of PTX, PTS), en koppel daarna het geëxporteerde bestand.

| Bestand | Extensie | Exporteren uit |
|---|---|---|
| ReCap-project | `.rcp` | ReCap: open het project en exporteer het. Het project verwijst alleen naar zijn scans, dus alleen het `.rcp` kopiëren levert geen punten op. |
| ReCap-scan | `.rcs` | ReCap: open het project waartoe de scan behoort en exporteer het. |
| FARO-scan | `.fls` | FARO SCENE. |
| Leica-scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-scan | `.tzf` | Trimble RealWorks of Trimble Business Center. |
| Z+F-scan | `.zfs` | Z+F LaserControl. |

:::tip
Wanneer de export naar een formaat vraagt, houdt LAS of LAZ alles wat CadCraft gebruikt (kleuren, intensiteit, klassen, het coördinatenstelsel en zijn eenheden) in het kleinste bestand.
:::

## Waarom deze bestanden niet worden gelezen

Die formaten zijn niet openbaar gemaakt, en de enige manier om ze te lezen is de softwarebibliotheek van elke fabrikant, onder diens eigen voorwaarden. CadCraft leest alleen formaten die het met zijn eigen code op uw computer kan lezen, dus een scan hoeft nooit ergens naartoe gestuurd te worden om hem te koppelen.
