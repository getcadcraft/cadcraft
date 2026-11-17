---
title: Punktwolkenformate: was angefügt wird und was exportiert werden muss
summary: Welche Laserscan-Dateien sich unter der Zeichnung anfügen lassen, welche das eigene Format eines Scanner-Herstellers sind und was Sie aus der Software des Scanners exportieren sollten, damit der Scan hier angefügt werden kann.
keywords: Punktwolke, pointcloudattach, pcattach, Laserscan, Scan, Formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportieren, kann nicht geöffnet werden, nicht gelesen
from: 20a5f4ee
---

## Was sich hier anfügen lässt

Fügen Sie diese mit {{cmd:POINTCLOUDATTACH}}, {{ui:Öffnen}} oder durch Ablegen auf der Seite an (siehe das Thema zum Nachzeichnen von Bestandslinien über einer Punktwolke):

| Format | Erweiterung | Was gelesen wird |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: Punkte, Farben, Intensität, LiDAR-Klassen, das Koordinatensystem und seine Einheiten. LAZ bis 1 GB. |
| E57 | `.e57` | Jeder Scan in der Datei, jeweils nach seiner Lage platziert; Farben, oder Intensität, wenn die Datei keine Farben hat; Meter. Bilder in der Datei werden weggelassen (es wird gemeldet). Vorerst bis 6 Millionen Punkte und 512 MB: größere Scans als LAS oder LAZ exportieren. |
| PLY | `.ply` | Text und binär (beide Byte-Reihenfolgen): die x-, y- und z-Werte der Eckpunkte, Farben und Intensität. Flächen werden weggelassen (es wird gemeldet). |
| PCD | `.pcd` | Text und binär: x y z, gepackte oder getrennte Farben, Intensität. Komprimierte PCD-Dateien werden noch nicht gelesen: Speichern Sie sie als binär oder Text. |
| PTX | `.ptx` | Ein oder mehrere Scans, jeder nach seiner eigenen Transformation platziert; Punkte, die der Scanner nicht gemessen hat, werden weggelassen. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, mit Intensität und Farben, wenn die Spalten vorhanden sind. |

## Dateien, die nur die Software des Scanners liest

Einige Scan-Dateien sind das eigene Format eines Scanner-Herstellers, ohne veröffentlichte Beschreibung und ohne offenen Leser. CadCraft kann sie nicht lesen: Beim Anfügen einer solchen Datei wird angezeigt, was sie ist, und was in der Befehlszeile zu tun ist. Exportieren Sie den Scan aus der Software des Herstellers als E57 oder LAS (oder PTX, PTS), dann fügen Sie die exportierte Datei an.

| Datei | Erweiterung | Exportieren aus |
|---|---|---|
| ReCap-Projekt | `.rcp` | ReCap: Projekt öffnen und exportieren. Das Projekt verweist nur auf seine Scans; das Kopieren der `.rcp` allein ergibt keine Punkte. |
| ReCap-Scan | `.rcs` | ReCap: Projekt öffnen, zu dem der Scan gehört, und exportieren. |
| FARO-Scan | `.fls` | FARO SCENE. |
| Leica-Scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-Scan | `.tzf` | Trimble RealWorks oder Trimble Business Center. |
| Z+F-Scan | `.zfs` | Z+F LaserControl. |

:::tip
Wenn der Export ein Format verlangt, behält LAS oder LAZ alles, was CadCraft nutzt (Farben, Intensität, Klassen, das Koordinatensystem und seine Einheiten), und ist dabei die kleinste Datei.
:::

## Warum diese Dateien nicht gelesen werden

Diese Formate sind nicht veröffentlicht, und der einzige Weg, sie zu lesen, ist die eigene Softwarebibliothek jedes Herstellers, unter deren eigenen Bedingungen. CadCraft liest nur Formate, die es mit eigenem Code auf Ihrem Computer lesen kann. Daher muss ein Scan zum Anfügen nie irgendwohin gesendet werden.
