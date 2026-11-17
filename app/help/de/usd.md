---
title: 3D-Modell als USD exportieren
summary: Die Volumenkörper der 3D-Registerkarte als USD für Renderprogramme und andere 3D-Software schreiben.
keywords: usd, usda, usdc, usdz, openusd, Export, 3D, Volumenkörper, usdout, export3d
from: 68748934
---

Die Volumenkörper der 3D-Registerkarte können als USD geschrieben werden.

- Geben Sie {{cmd:USDOUT}} ein und wählen Sie `.usda` (Text), `.usdc` (binär) oder `.usdz` (eine Paketdatei), oder
- geben Sie {{cmd:EXPORT3D}} ein und wählen Sie {{ui:USD}} für ein `.usdz`-Paket.

Jeder Volumenkörper wird ein Objekt mit seinen Flächen als Netz und seiner Farbe als Material, in Metern mit Z nach oben. Ein Volumenkörper, der mehrfach verwendet wird, wird einmal geschrieben und dort platziert, wo jede Kopie steht.
