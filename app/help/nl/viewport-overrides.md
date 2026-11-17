---
title: Klasse-afwijkingen per viewport
summary: Verberg op een blad een klasse of geef die in één viewport een andere kleur, lijndikte of vulling; het model en de andere viewports blijven zoals ze zijn.
keywords: viewport, klasse-afwijking, viewport-afwijking, klasse verbergen in viewport, blad, indeling, VPLAYER, plotten, Vectorworks
from: c1a2b51f
---

Een blad toont vaak hetzelfde model meer dan één keer: een plattegrond met het meubilair en een plattegrond zonder, of een verlichtingsplan waarin alleen de lampen in kleur staan. Een klasse-afwijking per viewport verandert hoe één [klasse](topic:classes) eruitziet, **alleen in die viewport**.

1. Open het blad en selecteer één viewport.
2. Open het paneel Klassen (`CLASSES`) en kies de klasse.
3. Vink onder {{ui:Deze viewport}} {{ui:In deze viewport verbergen}} aan, of stel {{ui:Kleur hier}}, {{ui:Lijndikte hier}} of {{ui:Vulling hier}} in.

De lijst hieronder toont elke klasse die in deze viewport wordt gewijzigd. {{ui:De afwijkingen van deze viewport wissen}} haalt ze allemaal weg. Elke wijziging is één stap die u ongedaan kunt maken.

## Wat een afwijking verandert

- **Verbergen** verbergt de klasse en elke klasse eronder in deze viewport.
- **Kleur, lijndikte en vulling** wijzigen de objecten van de klasse waarvan de waarde niet op het object zelf is ingesteld, dat wil zeggen objecten die die waarde van de klasse of van de laag overnemen. Een object met een eigen kleur behoudt die, net als bij een laagafwijking in de viewport.

Afwijkingen zijn zichtbaar op het scherm en in plots en PDF's, ook in een bladenset die naar PDF is gepubliceerd. Ze werken samen met de bevroren lagen en laagafwijkingen van de viewport.

Afwijkingen worden met de tekening opgeslagen in DWG en DXF (met de klassenlijst, in het blok `CADCRAFT_CLASSES`) en komen terug op dezelfde viewport wanneer het bestand in CadCraft wordt geopend.
