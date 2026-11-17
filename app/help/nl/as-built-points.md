---
title: As-built-punten controleren
summary: Lees de punten die een meetploeg heeft opgemeten en vergelijk ze met de punten en blokken van de tekening: binnen of buiten een tolerantie, niet gemeten, extra — gemarkeerd in de tekening en opgeslagen als CSV-rapport.
keywords: as built, as-built, asbuilt, opmeting, totaalstation, uitzetten, punten uitzetten, puntenbestand, csv, txt, pnezd, penzd, xyz, tolerantie, afwijking, controleren, vergelijken, exportpoints, uitzetpunten
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) is de tegenhanger van {{cmd:EXPORTPOINTS}}: u exporteert de punten van de tekening voor het veld, de ploeg zet ze uit en meet wat er is gebouwd, en ASBUILT vergelijkt hun bestand met de tekening.

1. Typ {{cmd:ASBUILT}} en selecteer dezelfde punten en blokken die u hebt geëxporteerd (Enter neemt elk POINT, zoals EXPORTPOINTS dat doet).
2. **Koppel de as-built-punten op** **Nummer** (de ploeg heeft uw puntnummers bewaard: geef het eerste nummer op waarmee u exporteerde) of **Dichtstbijzijnde** (zij hebben hun eigen metingen genummerd: elk ontwerppunt krijgt het dichtstbijzijnde).
3. Geef de eenheden en coördinaten van het bestand op zoals u ze hebt geëxporteerd (Tekening, Meters of Voet; Wereld of UCS), en de **tolerantie** in tekeningeenheden.
4. Kies het CSV- of TXT-bestand van de ploeg. CadCraft leest het zoals CivilCraft dat doet: komma's, tabs, puntkomma's of spaties, een kopregel met de namen van de kolommen, of PNEZD op basis van het aantal kolommen.

De opdrachtregel zegt hoeveel punten zijn gekoppeld, hoeveel binnen de tolerantie liggen, erbuiten, niet gemeten en extra zijn, en de grootste afstand. **Markeren in de tekening?** Ja zet ze op de laag **AS-BUILT** als één stap ongedaan te maken: een punt bij elke meting, het nummer en de afstand ernaast, en een rode lijn van het ontwerppunt naar elke meting buiten de tolerantie. Een CSV-rapport wordt gedownload met elk punt: ontwerp- en as-built-coördinaten, de verschillen oost, noord en in hoogte, en het resultaat.

Zie ook [Punten voor BIM-programma's](topic:points-for-bim).
