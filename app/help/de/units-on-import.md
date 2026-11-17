---
title: "Einheiten beim Import: Eine Datei gibt ihre Einheiten an, oder Sie werden zuerst gefragt"
summary: Wenn eine Datei, die Sie in eine Zeichnung bringen, ihre Einheiten angibt, konvertiert CadCraft sie und sagt das. Wenn nicht, fragt CadCraft, bevor etwas platziert wird, und merkt sich Ihre Antwort für diese Datei.
keywords: Einheiten, Import, Einfügen, Xref, Anhängen, XATTACH, INSERT, OBJ, DWG, DXF, Punktwolke, Bibliothekselement, Millimeter, Meter, Zoll, Fuß, Maßstab, falsche Größe, zu groß, zu klein, 1000-mal, fragen, gemerkt, INSUNITS
from: 558f1293
---

## Was Sie tun

Bringen Sie eine Datei in eine Zeichnung und stellen Sie sicher, dass sie in der richtigen Größe hereinkommt.

## Schritte

1. Bringen Sie die Datei wie gewohnt herein: `INSERT` › {{ui:Datei}}, `XATTACH`, `POINTCLOUDATTACH` oder {{ui:Dateien}} im Bibliotheksbereich.
2. Gibt die Datei ihre Einheiten an, wird nichts gefragt. Die Befehlszeile sagt, welche Einheiten die Datei angibt, und den verwendeten Maßstab, wenn sie von denen der Zeichnung abweichen.
3. Wenn nicht, fragt ein Dialogfeld nach **Einheiten von** der Datei. Wählen Sie, was eine Einheit in der Datei ist, und klicken Sie auf {{ui:Diese Einheiten verwenden}}. Vor Ihrer Antwort wird nichts platziert.
4. {{ui:Abbrechen}} (oder {{key:Esc}}) bringt nichts herein.

## Welche Dateien ihre Einheiten angeben

- **DWG und DXF**: die Einfügeeinheiten der Zeichnung ($INSUNITS). Bei einer Datei ohne sie wird nachgefragt.
- **Punktwolken**: LAS und LAZ mit einem Koordinatensystem, E57, PTX und PLY geben ihre an. Bei anderen wird nachgefragt.
- **OBJ**: gibt nie Einheiten an. Sie werden gefragt.
- **glTF und GLB**: Meter, nach der eigenen Regel des Formats.
- **Bilder**: haben keine eigene Größe. `IMAGEATTACH` fragt nach der Breite und bietet die Breite an, die Sie dieser Datei zuvor gegeben haben.
- **Scans**: ein Scan, der seine Auflösung (Punkte pro Zoll, dpi) angibt, kommt in seiner tatsächlichen Größe in den Einheiten der Zeichnung herein; `SCANATTACH` fragt trotzdem nach der Breite.
- **Das Add-on Punktwolken**: fragt, wenn Sie eine Wolke erstellen, deren Datei keine Einheit angibt, und beschriftet die Zahlen der Wolke in der Einheit, die sie trägt.

## Gut zu wissen

- Das Öffnen einer DWG oder DXF als eigene Zeichnung fragt nichts: Die Befehlszeile sagt, welche Einheiten die Datei angibt, oder dass sie keine angibt. {{ui:Eigenschaften}} legt die Einheiten einer Zeichnung fest.
- Wenn auch diese Zeichnung keine Einheiten hat, kann eine Datei nicht umgerechnet werden: Sie wird Zahl für Zahl platziert, und die Befehlszeile sagt das.
- Die Antwort wird für diese Datei auf diesem Computer in jeder CadCraft-App gemerkt. Beim nächsten Import werden Sie nicht gefragt, und die Befehlszeile sagt, dass die gemerkten Einheiten verwendet wurden.
- Um erneut gefragt zu werden: die Befehlspalette ({{key:Mod+K}}) › **Erneut nach den Einheiten importierter Dateien fragen**.
