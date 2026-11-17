---
title: Ist-Punkte prüfen
summary: Lesen Sie die Punkte, die ein Vermessungstrupp gemessen hat, und vergleichen Sie sie mit den Punkten und Blöcken der Zeichnung: innerhalb oder außerhalb einer Toleranz, nicht gemessen, überzählig – in der Zeichnung markiert und als CSV-Bericht geschrieben.
keywords: Ist-Maß, Ist, as-built, as built, asbuilt, Vermessung, survey, Totalstation, total station, Absteckung, abstecken, setting out, stake out, Punktdatei, point file, csv, txt, pnezd, penzd, xyz, Toleranz, tolerance, Abweichung, deviation, prüfen, check, vergleichen, compare, exportpoints, Layoutpunkte, layout points
from: f7c35208
---

{{cmd:ASBUILT}} (Alias ASB) ist die andere Hälfte von {{cmd:EXPORTPOINTS}}: Sie exportieren die Punkte der Zeichnung für das Feld, der Trupp steckt sie ab und misst, was tatsächlich gebaut wurde, und ASBUILT vergleicht deren Datei mit der Zeichnung.

1. Geben Sie {{cmd:ASBUILT}} ein und wählen Sie dieselben Punkte und Blöcke, die Sie exportiert haben (Enter nimmt jeden POINT, wie EXPORTPOINTS es tut).
2. **Ist-Punkte zuordnen nach** **Nummer** (der Trupp hat Ihre Punktnummern beibehalten: geben Sie die erste Nummer an, mit der Sie exportiert haben) oder **Nächster Punkt** (der Trupp hat seine eigenen Messpunkte nummeriert: jeder Sollpunkt nimmt den nächstgelegenen).
3. Geben Sie die Einheiten und Koordinaten der Datei an, so wie Sie exportiert haben (Zeichnung, Meter oder Fuß; WKS oder BKS), und die **Toleranz** in Zeichnungseinheiten.
4. Wählen Sie die CSV- oder TXT-Datei des Trupps. CadCraft liest sie wie CivilCraft: Kommas, Tabs, Semikolons oder Leerzeichen, eine Kopfzeile mit den Spaltennamen oder PNEZD nach Spaltenzahl.

Die Befehlszeile nennt, wie viele Punkte zugeordnet wurden, wie viele innerhalb der Toleranz liegen, außerhalb, nicht gemessen und überzählig sind, sowie den größten Abstand. **In der Zeichnung markieren?** Mit Ja werden sie als ein Rückgängig-Schritt auf den Layer **AS-BUILT** gelegt: ein Punkt an jeder Messung, daneben ihre Nummer und ihr Abstand, und eine rote Linie vom Sollpunkt zu jeder Messung außerhalb der Toleranz. Ein CSV-Bericht wird mit allen Punkten heruntergeladen: Soll- und Ist-Koordinaten, die Differenzen nach Osten, Norden und in der Höhe sowie das Ergebnis.

Siehe auch [Punkte für BIM-Programme](topic:points-for-bim).
