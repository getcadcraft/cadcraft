---
title: Einheiten, Papiergrößen und Maßstäbe
summary: Was Zeicheneinheiten in CadCraft bedeuten, die Papiergrößen für Blätter und Plots, alle Standardmaßstäbe und wie Text- und Bemaßungsgrößen zum Plotmaßstab stehen.
keywords: Einheiten, Millimeter, Zoll, Fuß, Fuß und Zoll, Architektur, Ingenieur, Bruch, Brüche, lunits, Längenformat, Genauigkeit, Meter, Papiergröße, a3, a1, arch d, ansi, tabloid, letter, Maßstab, 1:100, 1/4 Zoll, Architekturmaßstab, Ingenieurmaßstab, insunits
from: 8346236a
---

## Zeicheneinheiten

Sie zeichnen in voller Größe, in Zeicheneinheiten. Was eine Einheit bedeutet, legt die Einstellung **Einheiten** der Zeichnung fest:

1. Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist, auf dem Reiter {{ui:Modell}}.
2. Wählen Sie unter {{ui:Aktuelle Einstellungen}} {{ui:Einheiten}}: {{ui:Einheitenlos}}, {{ui:Millimeter}}, {{ui:Zentimeter}}, {{ui:Meter}}, {{ui:Zoll}} oder {{ui:Fuß}}.

Bemaßungen können ihre Längen unabhängig von der Zeicheneinheit in Millimetern, Zentimetern, Metern oder Kilometern schreiben: siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Das Ändern der Einheiten verändert nichts in der Größe. Es ändert nur, wie Maßstäbe auf Blättern und in Plots gelesen werden und welche Maßstäbe angeboten werden. Eine aus einer DWG oder DXF geöffnete Zeichnung behält die Einheiten, die in der Datei gespeichert sind; der Abschnitt {{ui:Zeichnung}} im linken Bereich zeigt sie.

Eine Zeichnung mit {{ui:Einheitenlos}} wird so behandelt, als wäre sie in der Einheit des Papiers: Millimeter bei ISO-Papier, Zoll bei US-Papier.

## Fuß und Zoll sowie Brüche

Wie Längen **geschrieben und eingegeben** werden, ist eine eigene Einstellung, das Längenformat. Es ändert keine Geometrie, nur wie Zahlen aussehen und was Sie eingeben können.

1. Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist, auf dem Reiter {{ui:Modell}}.
2. Wählen Sie unter {{ui:Aktuelle Einstellungen}} {{ui:Längenformat}}: {{ui:Dezimal}} (`150.5`), {{ui:Architektur}} (`12'-6 1/2"`), {{ui:Ingenieur}} (`12'-6.5"`), {{ui:Bruch}} (`150 1/2`) oder {{ui:Wissenschaftlich}} (`1.505E+02`).
3. Wählen Sie {{ui:Genauigkeit}}: Dezimalstellen oder den kleinsten Bruch (1/16 ist die übliche Wahl für Architektur).

Oder geben Sie {{cmd:UNITS}} (`UN`) ein und beantworten Sie dessen zwei Fragen.

Bei {{ui:Architektur}} oder {{ui:Ingenieur}} entspricht eine Zeicheneinheit einem Zoll, wie in AutoCAD: Stellen Sie {{ui:Einheiten}} ebenfalls auf {{ui:Zoll}}. Sie können dann Längen in Fuß und Zoll überall eingeben, wo eine Länge verlangt wird, und in den Feldern der {{ui:Eigenschaften}}:

| Sie geben ein | Bedeutet |
|---|---|
| `12'6"` oder `12'-6"` | 12 Fuß 6 Zoll (150) |
| `12'6-1/2"` | 12 Fuß 6½ Zoll. Verwenden Sie vor dem Bruch einen Bindestrich: {{key:Space}} ist {{key:Enter}} an der Befehlszeile. |
| `12'` | 12 Fuß |
| `6"` oder `6` | 6 Zoll: Eine reine Zahl ist Zoll |
| `1/2`, `6-1/2` | Brüche funktionieren in jedem Format |

Punkte nehmen dieselben Längen: `@12'6",0` oder `@10'<90`. Winkel bleiben in Grad.

Das Format erscheint im Verlauf ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: Flächen als Quadratzoll und Quadratfuß), in den {{ui:Eigenschaften}}, in den Koordinaten der Statusleiste und in **neuen Bemaßungen**. Blätter behalten ihre Papiereinheiten (Millimeter oder Zoll) als Dezimalzahlen.

:::note
Das Längenformat wird in DWG- und DXF-Dateien gespeichert, und jede Bemaßung behält ihr eigenes. Eine gespeicherte Zeichnung öffnet sich wieder so, wie Sie sie verlassen haben.
:::

## Papiergrößen

Blätter und Modellpläne verwenden diese Größen, in beiden Ausrichtungen:

| Papier | Größe | Einheit auf dem Blatt |
|---|---|---|
| ISO A4 | 297 × 210 mm | Millimeter |
| ISO A3 | 420 × 297 mm | Millimeter |
| ISO A2 | 594 × 420 mm | Millimeter |
| ISO A1 | 841 × 594 mm | Millimeter |
| ISO A0 | 1189 × 841 mm | Millimeter |
| Letter | 11 × 8.5 in | Zoll |
| Legal | 14 × 8.5 in | Zoll |
| Tabloid / ANSI B | 17 × 11 in | Zoll |
| ANSI C | 22 × 17 in | Zoll |
| ANSI D | 34 × 22 in | Zoll |
| ARCH C | 24 × 18 in | Zoll |
| ARCH D | 36 × 24 in | Zoll |
| ARCH E | 48 × 36 in | Zoll |

Neue Blätter beginnen mit ISO A3 für metrische und einheitenlose Zeichnungen und mit Tabloid für Zeichnungen in Zoll oder Fuß. Modellpläne beginnen auf ISO A4 oder Letter auf dieselbe Weise und merken sich danach Ihre letzte Wahl. Blätter aus geöffneten Dateien behalten ihre eigene Größe, angezeigt als „Benutzerdefiniert“, wenn sie keine dieser Größen ist.

## Maßstäbe

Ein Maßstab `1:n` bedeutet, dass eine Einheit auf dem Papier n derselben Einheiten im Modell zeigt. So zeigt 1:100 1 m Gebäude als 10 mm Papier. CadCraft berechnet das aus den Zeicheneinheiten und der Einheit des Papiers.

**Metrische Maßstäbe**, für jede Zeichnung angeboten: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architekturmaßstäbe**, angeboten, wenn die Einheiten Zoll oder Fuß sind: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingenieurmaßstäbe**, angeboten, wenn die Einheiten Zoll oder Fuß sind: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Eigene Maßstäbe.** Geben Sie `SCALELISTEDIT` (oder `SCALELIST`) ein, um einen eigenen Maßstab hinzuzufügen, etwa 1:75 oder einen Geländemaßstab von 2 Papier : 300 Zeichnung. `Hinzufügen (A)` fragt nach einem Namen, dann nach den Papiereinheiten und den Zeicheneinheiten (ein Name wie `1:75` bietet seine eigenen Zahlen an; drücken Sie {{key:Enter}}, um sie zu übernehmen). `Bearbeiten (E)`, `Löschen (D)`, `Liste (L)` und `Zurücksetzen (R)` wirken auf dieselbe Liste. `Zurücksetzen` geht zur Standardliste zurück. Ihre Maßstäbe erscheinen nach den Standardmaßstäben in der Liste der Ansichtsfenster-Maßstäbe in den Eigenschaften und im Dialog {{ui:In PDF plotten}}. Ein Ansichtsfenster in diesem Maßstab zeigt seinen Namen. Sie werden in der Zeichnung gespeichert (DWG und DXF 2000) als Maßstabsliste der Zeichnung. Eine aus einem anderen Programm geöffnete Zeichnung bringt ihre Liste mit; Maßstäbe, die einem Standardmaßstab entsprechen, werden nicht doppelt angezeigt.

Wenn ein Ansichtsfenster mit {{ui:Das ganze Modell zeigen}} oder {{ui:Ein Fenster im Modell aufziehen…}} ausgerichtet wird, wählt CadCraft den größten Standardmaßstab, der passt. {{ui:Das ganze Modell einpassen}} setzt stattdessen einen exakten Maßstab, der als einfaches Verhältnis erscheint.

## Größen auf Papier und im Modell

Text- und Bemaßungsgrößen stehen in den Einheiten des Raums, in dem Sie zeichnen.

| Auf dem Papier gewünscht | Auf einem Blatt gezeichnet | Im Modell gezeichnet bei 1:50 (mm-Zeichnung) | Im Modell gezeichnet bei 1/4" = 1'-0" (Zoll-Zeichnung) |
|---|---|---|---|
| 2.5 mm Text | 2.5 | 125 | — |
| 3/32" Text | 0.09375 | — | 4.5 |

Bei Bemaßungen behalten Sie die Größen als Papiergrößen und setzen den Gesamtmaßstab ({{cmd:DIMSCALE}}) auf den Plotmaßstab: 50 für 1:50, 48 für 1/4" = 1'-0". Siehe [Bemaßungsgrößen festlegen](topic:dimension-settings).

## Nach Maßstab beschriften

Zeichnen Sie das Modell in voller Größe und lassen Sie CadCraft die obigen Rechnungen für Sie machen.

1. Wählen Sie den Text oder die Bemaßungen aus, die ihre Größe auf dem Papier behalten sollen. Setzen Sie in den Eigenschaften ein Häkchen bei {{ui:Beschriftungsfähig}}. {{ui:Größe auf Papier}} zeigt dann zum Beispiel `2.5 mm bei 1:50`.
2. Geben Sie {{cmd:ANNOSCALE}} und den Maßstab ein, in dem die Zeichnung gedruckt wird, etwa `1:100`.

Jeder beschriftungsfähige Text und jede Bemaßung wird so skaliert, dass sie im neuen Maßstab gleich groß gedruckt wird: 2.5 mm Text ist 125 hoch bei einer Zeichnung in Millimetern bei 1:50 und 250 hoch bei 1:100. Die Breite eines Absatzes ändert sich mit. Text, Pfeile und Abstände einer Bemaßung ändern sich gemeinsam (ihr Gesamtmaßstab). Es ist ein Rückgängig-Schritt, und Objekte, die nicht beschriftungsfähig sind, werden nie verändert.

Die Einstellung wird in DWG und DXF gespeichert: Andere Programme lesen die Beschriftungsfähig-Markierung, und CadCraft merkt sich außerdem den Maßstab, für den jedes Objekt bemessen ist.

Wenn Ihr Büro Papierhöhen im Zusatzmodul Default Policies festlegt (Einstellungen › Global › Default Policies › Beschriftungsgrößen auf Papier), setzt {{cmd:ANNOSCALE}} außerdem die Höhe, mit der neuer Text beginnt, auf die Höhe des Büros für Notizen in diesem Maßstab. Siehe [Default Policies](topic:default-policies).

### Ein Objekt in mehreren Maßstäben

Ein Blatt zeigt oft denselben Plan in 1:100 und einen Teil davon in 1:50. Geben Sie den Notizen und Bemaßungen beide Maßstäbe, dann zeigt jedes Ansichtsfenster sie in ihrer Papiergröße:

1. Wählen Sie den beschriftungsfähigen Text und die Bemaßungen aus und geben Sie `OBJECTSCALE` ein.
2. Wählen Sie `A` (Hinzufügen) und geben Sie den Maßstab ein, zum Beispiel `1:50`. (`Aktueller Maßstab` fügt den Beschriftungsmaßstab der Zeichnung hinzu; `Liste` zeigt, was jedes Objekt behält; `Löschen` nimmt einen weg.)

Ein Ansichtsfenster, dessen Maßstab in der Liste eines Objekts steht, zeigt es in der Größe für diesen Maßstab: 2.5 mm Text wird 250 hoch durch ein Ansichtsfenster 1:100 gezeichnet und 125 hoch durch eines 1:50, auf dem Bildschirm und im Plot. Das Objekt bleibt, wo es ist; nur seine Größe unterscheidet sich. In einem Ansichtsfenster mit einem Maßstab, der nicht in der Liste steht, zeigt das Objekt die Größe, die es hat, bis Sie `ANNOALLVISIBLE` eingeben und `OFF` wählen. Dann wird es dort weggelassen. {{cmd:ANNOSCALE}} ändert die Größe der Objekte, die den neuen Maßstab aufführen, und lässt die anderen wie sie sind.

Die Listen werden in DWG und DXF als eigene Daten von CadCraft gespeichert. Ein anderes Programm sieht jedes Objekt als beschriftungsfähig, im einen Maßstab, für den es bemessen ist. Der Schalter ANNOALLVISIBLE wird nicht in der Datei behalten.

## Linienstärken und Linientypen

Ein Layer oder ein Objekt kann eine **Linienstärke** (0.05 bis 2.11 mm) und einen **Linientyp** (gestrichelt, verdeckt, Strich-Punkt, Phantom, Punkt …) haben. Setzen Sie sie im rechten Bereich: Ohne Auswahl bestimmen {{ui:Linientyp}} und {{ui:Linienstärke}} unter {{ui:Aktuelle Einstellungen}}, was neue Objekte erhalten ({{ui:VonLayer}}, um ihrem Layer zu folgen). Die beiden unter Layer … sind die eigenen des aktuellen Layers. Bei ausgewählten Objekten ändern dieselben beiden Zeilen und {{ui:Linientypfaktor}} diese Objekte. Die Befehle sind {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) und {{cmd:LTSCALE}} (`LTS`).

Linientypen erscheinen auf dem Bildschirm und in Plots. Ihre Striche liegen in Zeicheneinheiten: Eine metrische Zeichnung verwendet die ISO-Größen (DASHED: 12.7 mm Striche), eine Zoll-Zeichnung die Zoll-Größen (0.5"). Wenn die Striche zu klein oder zu groß wirken, ändern Sie den {{ui:Linientypfaktor}} der Zeichnung (LTSCALE): Jeder Strich und jede Lücke wird damit multipliziert, und der eigene Faktor eines Objekts multipliziert es erneut. Ein Muster, das zu fein ist, um es überhaupt zu sehen, wird als durchgezogene Linie gezeichnet.

Linienstärken werden in Plots gedruckt, in mm auf dem Papier, unabhängig vom Maßstab. Linien mit der Linienstärke {{ui:Standard}} verwenden die Stiftbreite, die im Dialog {{ui:In PDF plotten}} gewählt wird (0.13 bis 0.70 mm; zu Beginn 0.25 mm). Eine Linienstärke von 0 druckt als dünnste Linie. Auf dem Bildschirm ist jede Linie einen Pixel breit, bis Sie in der Statusleiste auf {{ui:LST}} drücken (oder {{cmd:LWDISPLAY}} eingeben). Dann wird eine Linienstärke über 0.25 mm breiter gezeichnet (0.5 mm = 2 Pixel) im Modell und in ihrer wahren Breite auf dem Papier auf einem Blatt. Die Wahl bleibt in diesem Browser erhalten.
