---
title: Einheiten, Papierformate und Maßstäbe
summary: Was Zeicheneinheiten in CadCraft bedeuten, die Papierformate für Blätter und Plots, jeder Standardmaßstab und wie Text- und Bemaßungsgrößen zum Plotmaßstab stehen.
keywords: Einheiten, Millimeter, Zoll, Fuß, Fuß und Zoll, Architektur, Ingenieur, Bruch, Brüche, lunits, Längenformat, Genauigkeit, Meter, Papierformat, A3, A1, Arch D, ANSI, Tabloid, Letter, Maßstab, 1:100, 1/4 Zoll, Architekturmaßstab, Ingenieurmaßstab, insunits
from: 7dc9b62e
---

## Zeicheneinheiten

Sie zeichnen in voller Größe, in Zeicheneinheiten. Was eine Einheit darstellt, ist die Einstellung **Einheiten** der Zeichnung:

1. Drücken Sie {{key:Esc}}, damit nichts gewählt ist, auf dem Reiter {{ui:Modell}}.
2. Wählen Sie unter {{ui:Aktuelle Einstellungen}} {{ui:Einheiten}}: {{ui:Einheitenlos}}, {{ui:Millimeter}}, {{ui:Zentimeter}}, {{ui:Meter}}, {{ui:Zoll}} oder {{ui:Fuß}}.

Bemaßungen können ihre Längen in Millimetern, Zentimetern, Metern oder Kilometern schreiben, unabhängig von der Einheit der Zeichnung: Siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Das Ändern der Einheiten verändert nichts an der Größe. Es ändert, wie Maßstäbe auf Blättern und in Plots gelesen werden, und welche Maßstäbe angeboten werden. Eine aus einer DWG oder DXF geöffnete Zeichnung behält die in der Datei gespeicherten Einheiten; der Abschnitt {{ui:Zeichnung}} des linken Bereichs zeigt sie.

Eine {{ui:Einheitenlos}}-Zeichnung wird wie in der Papiereinheit behandelt: Millimeter auf ISO-Papier, Zoll auf US-Papier.

## Fuß und Zoll sowie Brüche

Wie Längen **geschrieben und eingegeben** werden, ist eine eigene Einstellung, das Längenformat. Sie ändert keine Geometrie, nur wie Zahlen aussehen und was Sie eingeben können.

1. Drücken Sie {{key:Esc}}, damit nichts gewählt ist, auf dem Reiter {{ui:Modell}}.
2. Wählen Sie unter {{ui:Aktuelle Einstellungen}} {{ui:Längenformat}}: {{ui:Dezimal}} (`150.5`), {{ui:Architektur}} (`12'-6 1/2"`), {{ui:Ingenieur}} (`12'-6.5"`), {{ui:Bruch}} (`150 1/2`) oder {{ui:Wissenschaftlich}} (`1.505E+02`).
3. Wählen Sie {{ui:Genauigkeit}}: Dezimalstellen oder der kleinste Bruch (1/16 ist die übliche Wahl für Architektur).

Oder geben Sie {{cmd:UNITS}} (`UN`) ein und beantworten Sie seine zwei Fragen.

Bei {{ui:Architektur}} oder {{ui:Ingenieur}} entspricht eine Zeicheneinheit einem Zoll, wie in AutoCAD: Stellen Sie {{ui:Einheiten}} ebenfalls auf {{ui:Zoll}}. Dann können Sie Längen in Fuß und Zoll überall eingeben, wo eine Länge verlangt wird, und in den Feldern von {{ui:Eigenschaften}}:

| Sie geben ein | Bedeutet |
|---|---|
| `12'6"` oder `12'-6"` | 12 Fuß 6 Zoll (150) |
| `12'6-1/2"` | 12 Fuß 6½ Zoll. Verwenden Sie einen Bindestrich vor dem Bruch: {{key:Space}} ist {{key:Enter}} in der Befehlszeile. |
| `12'` | 12 Fuß |
| `6"` oder `6` | 6 Zoll: eine nackte Zahl ist Zoll |
| `1/2`, `6-1/2` | Brüche funktionieren in jedem Format |

Punkte nehmen dieselben Längen: `@12'6",0` oder `@10'<90`. Winkel bleiben in Grad.

Das Format erscheint im Verlauf ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: Flächen als Quadratzoll und Quadratfuß), in {{ui:Eigenschaften}}, in den Koordinaten der Statusleiste und in **neuen Bemaßungen**. Blätter behalten ihre Papiereinheiten (Millimeter oder Zoll) als Dezimalzahlen.

:::note
Das Längenformat wird in DWG- und DXF-Dateien gespeichert, und jede Bemaßung behält ihr eigenes: Eine gespeicherte Zeichnung öffnet sich so, wie Sie sie verlassen haben.
:::

## Papierformate

Blätter und Modellplots verwenden diese Größen, in beiden Ausrichtungen:

| Papier | Größe | Einheit auf dem Blatt |
|---|---|---|
| ISO A4 | 297 × 210 mm | Millimeter |
| ISO A3 | 420 × 297 mm | Millimeter |
| ISO A2 | 594 × 420 mm | Millimeter |
| ISO A1 | 841 × 594 mm | Millimeter |
| ISO A0 | 1189 × 841 mm | Millimeter |
| Letter | 11 × 8,5 in | Zoll |
| Legal | 14 × 8,5 in | Zoll |
| Tabloid / ANSI B | 17 × 11 in | Zoll |
| ANSI C | 22 × 17 in | Zoll |
| ANSI D | 34 × 22 in | Zoll |
| ARCH C | 24 × 18 in | Zoll |
| ARCH D | 36 × 24 in | Zoll |
| ARCH E | 48 × 36 in | Zoll |

Neue Blätter beginnen mit ISO A3 für metrische und Zeichnungen ohne Einheit, und mit Tabloid für Zeichnungen in Zoll oder Fuß. Modellplots beginnen ebenso mit ISO A4 oder Letter und merken sich danach Ihre letzte Wahl. Blätter aus geöffneten Dateien behalten ihre eigene Größe, angezeigt als „Benutzerdefiniert“, wenn sie keines dieser Formate ist.

## Maßstäbe

Ein Maßstab `1:n` bedeutet, dass eine Einheit auf dem Papier n derselben Einheiten im Modell zeigt, also zeigt 1:100 1 m Gebäude als 10 mm Papier. CadCraft berechnet das aus den Einheiten der Zeichnung und der Papiereinheit.

**Metrische Maßstäbe**, für jede Zeichnung angeboten: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architekturmaßstäbe**, angeboten, wenn die Einheiten Zoll oder Fuß sind: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingenieurmaßstäbe**, angeboten, wenn die Einheiten Zoll oder Fuß sind: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Eigene Maßstäbe.** Geben Sie `SCALELISTEDIT` (oder `SCALELIST`) ein, um einen eigenen Maßstab hinzuzufügen, etwa 1:75 oder einen Lageplanmaßstab von 2 Papier : 300 Zeichnung. `Hinzufügen` fragt nach einem Namen, dann den Papiereinheiten und den Zeicheneinheiten (ein Name wie `1:75` bietet seine eigenen Zahlen an; drücken Sie {{key:Enter}}, um sie zu übernehmen). `Bearbeiten`, `Löschen`, `Auflisten` und `Zurücksetzen` arbeiten auf derselben Liste; `Zurücksetzen` geht zur Standardliste zurück. Ihre Maßstäbe erscheinen nach den Standardmaßstäben in der Maßstabsliste der Ansichtsfenster in {{ui:Eigenschaften}} und im Dialogfeld {{ui:In PDF plotten}}; ein Ansichtsfenster in diesem Maßstab wird mit seinem Namen gelesen, und sie werden in der Zeichnung (DWG und DXF 2000) als Maßstabsliste der Zeichnung gespeichert. Eine aus einem anderen Programm geöffnete Zeichnung bringt ihre Liste mit; Maßstäbe, die einem Standardmaßstab entsprechen, werden nicht doppelt angezeigt.

Wird ein Ansichtsfenster mit {{ui:Das ganze Modell zeigen}} oder {{ui:Ein Fenster im Modell aufziehen…}} ausgerichtet, wählt CadCraft den größten Standardmaßstab, der passt. {{ui:Das ganze Modell einpassen}} setzt stattdessen einen genauen Maßstab, der als einfaches Verhältnis gelesen wird.

## Größen auf Papier und im Modell

Text- und Bemaßungsgrößen sind in den Einheiten des Raums, in dem Sie zeichnen.

| Sie wollen auf dem Papier | Auf einem Blatt gezeichnet | Im Modell bei 1:50 gezeichnet (mm-Zeichnung) | Im Modell bei 1/4" = 1'-0" gezeichnet (Zoll-Zeichnung) |
|---|---|---|---|
| 2,5 mm Text | 2,5 | 125 | — |
| 3/32" Text | 0,09375 | — | 4,5 |

Bei Bemaßungen halten Sie die Größen als Papiergrößen und stellen den Gesamtmaßstab ({{cmd:DIMSCALE}}) auf den Plotmaßstab ein: 50 für 1:50, 48 für 1/4" = 1'-0". Siehe [Bemaßungsgrößen festlegen](topic:dimension-settings).

## Nach Maßstab beschriften

Zeichnen Sie das Modell in voller Größe und lassen Sie CadCraft die obigen Rechnungen für Sie ausführen.

1. Wählen Sie den Text oder die Bemaßungen, die auf dem Papier ihre Größe behalten sollen. Setzen Sie in {{ui:Eigenschaften}} einen Haken bei {{ui:Beschriftungsfähig}}. {{ui:Größe auf Papier}} zeigt dann zum Beispiel `2,5 mm bei 1:50`.
2. Geben Sie {{cmd:ANNOSCALE}} und den Maßstab ein, in dem die Zeichnung gedruckt wird, etwa `1:100`.

Jeder beschriftungsfähige Text und jede Bemaßung wird so neu skaliert, dass sie im neuen Maßstab in derselben Größe gedruckt wird: 2,5 mm Text ist 125 hoch in einer Millimeterzeichnung bei 1:50 und 250 hoch bei 1:100. Die Breite eines Absatzes ändert sich mit; Text, Pfeile und Abstände einer Bemaßung ändern sich gemeinsam (ihr Gesamtmaßstab). Es ist ein Rückgängig-Schritt, und nicht beschriftungsfähige Objekte werden nie verändert.

Die Einstellung wird in DWG und DXF gespeichert: Andere Programme lesen die Beschriftungsmarkierung, und CadCraft merkt sich außerdem den Maßstab, für den jedes Objekt bemessen ist.

Legt Ihr Büro Papierhöhen im Add-on Default Policies fest (Einstellungen › Global › Default Policies › Beschriftungsgrößen auf Papier), setzt {{cmd:ANNOSCALE}} außerdem die Höhe, mit der neuer Text beginnt, auf die Höhe des Büros für Notizen in diesem Maßstab. Siehe [Default Policies](topic:default-policies).

### Ein Objekt in mehreren Maßstäben

Ein Blatt zeigt oft denselben Plan bei 1:100 und einen Teil davon bei 1:50. Geben Sie den Notizen und Bemaßungen beide Maßstäbe, und jedes Ansichtsfenster zeigt sie in ihrer Papiergröße:

1. Wählen Sie die beschriftungsfähigen Texte und Bemaßungen und geben Sie `OBJECTSCALE` ein.
2. Wählen Sie `Hinzufügen` und geben Sie den Maßstab ein, etwa `1:50`. (`Aktueller Maßstab` fügt den Beschriftungsmaßstab der Zeichnung hinzu; `Auflisten` zeigt, was jedes Objekt behält; `Löschen` nimmt einen weg.)

Ein Ansichtsfenster, dessen Maßstab in der Liste eines Objekts steht, zeigt es in der Größe für diesen Maßstab: 2,5 mm Text wird 250 hoch durch ein 1:100-Ansichtsfenster gezeichnet und 125 hoch durch ein 1:50-Ansichtsfenster, auf dem Bildschirm und im Plot. Das Objekt bleibt, wo es ist; nur seine Größe unterscheidet sich. In einem Ansichtsfenster mit einem Maßstab, der nicht in der Liste eines Objekts steht, wird das Objekt in der Größe angezeigt, die es hat, bis Sie `ANNOALLVISIBLE` eingeben und `AUS` wählen: Dann wird es dort weggelassen. {{cmd:ANNOSCALE}} skaliert die Objekte, die den neuen Maßstab auflisten, und lässt die anderen, wie sie sind.

Die Listen werden in DWG und DXF als eigene Daten von CadCraft gespeichert. Ein anderes Programm sieht jedes Objekt als beschriftungsfähig, in dem einen Maßstab, für den es bemessen ist. Der Schalter ANNOALLVISIBLE wird nicht in der Datei gehalten.

## Linienstärken und Linientypen

Ein Layer oder ein Objekt kann eine **Linienstärke** (0,05 bis 2,11 mm) und einen **Linientyp** (gestrichelt, verdeckt, Mittellinie, Phantom, Punkt …) haben. Stellen Sie sie im rechten Bereich ein: Ohne Auswahl sind {{ui:Linientyp}} und {{ui:Linienstärke}} unter {{ui:Aktuelle Einstellungen}} das, was neue Objekte erhalten ({{ui:VonLayer}}, um ihrem Layer zu folgen), und die beiden unter {{ui:Layer …}} sind die des aktuellen Layers. Bei gewählten Objekten ändern dieselben zwei Zeilen und {{ui:Linientypfaktor}} diese Objekte. Die Befehle sind {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) und {{cmd:LTSCALE}} (`LTS`).

Linientypen werden auf dem Bildschirm und in Plots angezeigt. Ihre Striche sind in Zeicheneinheiten: Eine metrische Zeichnung verwendet die ISO-Größen (DASHED: 12,7 mm Striche), eine Zoll-Zeichnung die Zollgrößen (0,5"). Wenn die Striche zu klein oder zu groß wirken, ändern Sie den {{ui:Linientypfaktor}} (LTSCALE) der Zeichnung: Jeder Strich und jede Lücke wird damit multipliziert; der eigene Maßstab eines Objekts multipliziert ihn erneut. Ein zu feines Muster, um überhaupt gesehen zu werden, wird als durchgezogene Linie gezeichnet.

Linienstärken werden in Plots auf dem Papier in mm gedruckt, unabhängig vom Maßstab. Linien mit der Linienstärke {{ui:Standard}} verwenden die Stiftbreite, die im Dialogfeld {{ui:In PDF plotten}} gewählt ist (0,13 bis 0,70 mm; anfangs 0,25 mm); eine Linienstärke von 0 wird als dünnste Linie gedruckt. Auf dem Bildschirm ist jede Linie einen Pixel breit, bis Sie in der Statusleiste {{ui:LST}} drücken (oder {{cmd:LWDISPLAY}} eingeben): Dann zeichnet eine Linienstärke über 0,25 mm breiter (0,5 mm = 2 Pixel) im Modell, und auf einem Blatt in ihrer wahren Breite auf dem Papier. Die Wahl wird in diesem Browser gespeichert.

## Der Büro-Standard

Ein Büro kann seine Papiertexthöhen, Layer, Felder des Schriftfelds und Vorlagen in einem Datensatz halten, dem Büro-Standard. CadCraft liest ihn in dieser Reihenfolge: den eigenen Datensatz der Zeichnung (mit {{cmd:OFFICESTANDARD}} › `Importieren` gesetzt, in der Datei gehalten), den gemeinsamen Standard Ihres Teams, dann Ihre Default Policies. Beschriftungsfähiger Text und Bemaßungen nehmen ihre Papierhöhe daraus im Beschriftungsmaßstab. Ein leerer Standard ändert nichts. {{cmd:OFFICESTANDARD}} › `Layer` ergänzt die Büro-Layer, die eine Zeichnung nicht hat.
