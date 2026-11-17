---
title: Das Eigenschaften-Panel
summary: Sehen und ändern Sie alles über die gewählten Objekte, viele auf einmal: Koordinaten mit Z, Größen, Text, Bemaßungseinstellungen, Transparenz und mehr. Felder nehmen Ausdrücke und Längen mit Einheiten an.
keywords: Summen, Gesamtlänge, Gesamtfläche, Summe, Auswahllänge, Eigenschaften, Eigenschaften-Palette, ctrl+1, pr, ch, mo, ddmodify, Verschieden, Schnellauswahl, pickadd, Koordinaten, z, Höhe, Dicke, Transparenz, Material, Hyperlink, Ausdruck, quickcalc, Eckpunkt, Bemaßungsstil, Toleranz, Dezimalstellen
from: 10d6a829
---

## Was Sie lernen

Wie Sie das Eigenschaften-Panel öffnen, ein Objekt oder hundert in einem Schritt ändern, genaue Koordinaten (mit Z) eingeben, Ausdrücke und Einheiten in jedem Zahlenfeld verwenden und was jede Objektart anzeigt.

## Öffnen

Das Panel sitzt rechts. Um es nach vorn zu holen:

- Drücken Sie {{key:Mod+1}} oder geben Sie {{cmd:PROPERTIES}} (oder `PR`, `CH`, `MO`) ein.
- Doppelklicken Sie ein Objekt (Text und Mehrfach-Führungslinien öffnen stattdessen ihren Texteditor).

Das Panel ist ein verschiebbares Panel wie die anderen: Ziehen Sie seinen Griff, um es links, rechts oder unten anzudocken, oder legen Sie es über die Zeichnung, um es schweben zu lassen (siehe [Panels anordnen und einen zweiten Monitor nutzen](common:arrange-panels)).

### Einklappen

Die Pinnadel oben rechts im Panel schaltet das **automatische Ausblenden** ein: Das Panel klappt zu einem Streifen am rechten Rand zusammen, und die Zeichnung gewinnt Platz. Zeigen Sie auf den Streifen (oder drücken Sie {{key:Mod+1}}), dann öffnet er sich über der Zeichnung; bewegen Sie sich weg, klappt er wieder zu. Klicken Sie erneut auf die Pinnadel, um ihn geöffnet zu halten. {{cmd:PROPERTIESCLOSE}} klappt ihn ebenfalls ein.

## Abschnitte

Eigenschaften sind in Abschnitten gruppiert, die Sie einklappen können: **Allgemein**, **Geometrie**, **Text**, **Linien und Pfeile**, **Einpassen**, **Primäre Einheiten**, **Alternative Einheiten**, **Toleranzen**, **Muster**, **Verschiedenes** und für Blöcke **Attribute** und **Bibliothekselement**. Klicken Sie auf den Namen eines Abschnitts, um ihn einzuklappen oder zu öffnen; CadCraft merkt sich, welche Sie eingeklappt haben.

Ziehen Sie die dünne Linie zwischen den Namen und den Werten, um die Namen breiter oder schmaler zu machen. Doppelklicken Sie darauf, um sie zurückzusetzen. Mit der Tastatur setzen Sie den Fokus darauf und nutzen die Pfeiltasten.

## Einen Wert ändern

1. Klicken Sie auf eine Zeile. Die Überschrift lautet „Linie“.
2. Klicken Sie in {{ui:Länge}}. Während Sie bearbeiten, zeigt das Feld den vollen Wert, nicht den gerundeten.
3. Geben Sie `2500` ein und drücken Sie {{key:Enter}}. Die Linie ist jetzt 2500 lang und behält ihren Startpunkt und Winkel.

{{key:Enter}} oder ein Klick woanders übernimmt den Wert; {{key:Esc}} setzt den alten Wert zurück. Jede Änderung ist ein Schritt für Rückgängig.

### Ausdrücke und Einheiten

Jedes Zahlenfeld nimmt mehr als eine einfache Zahl an:

| Sie tippen | Sie erhalten |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (Zoll, in einer Zeichnung in Fuß und Zoll) |
| `900mm`, `3.5m`, `2ft` | In die Einheiten der Zeichnung umgerechnet |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (Winkelfelder) |
| `0.5r`, `100g` | Radiant und Gon, als Grad |

Eine Länge mit Einheit braucht eine Zeichnung mit Einheiten: Stellen Sie zuerst {{ui:Einheiten}} unter {{ui:Neue Objekte}} ein (bei nichts Gewähltem). Eine fehlerhafte Eingabe wird mit einem Hinweis unter dem Panel abgelehnt, und nichts ändert sich; sie wird nie als 0 gespeichert. Funktionen: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; Winkel in Grad.

## Viele Objekte auf einmal ändern

1. Wählen Sie mehrere Objekte, zum Beispiel 8 Linien und 4 Bemaßungen.
2. Die Überschrift sagt „12 Objekte“, und eine Liste oben bietet **Alle (12)**, **Linie (8)** und **Bemaßung (4)**.
3. **Alle** zeigt, was jedes Objekt hat (Layer, Farbe, Linientyp …). Wählen Sie **Bemaßung (4)**, um die Bemaßungseinstellungen zu sehen.
4. Ändern Sie einen Wert, zum Beispiel {{ui:Dezimalstellen}} auf `1`.

Alle vier Bemaßungen ändern sich, in einem Schritt für Rückgängig. Ein Feld, das **Verschieden** anzeigt, bedeutet, dass die Objekte sich unterscheiden; einen Wert einzugeben setzt ihn bei allen. Objekte auf gesperrten Layern bleiben unverändert, und der Hinweis sagt, wie viele es sind.

## Summen einer Auswahl

Mit mehreren gewählten Objekten nennt der Abschnitt {{ui:Summen}} oben:

- **Objekte**: wie viele jeder Art, zum Beispiel „8 Linien, 2 Polylinien, 1 Kreis“.
- **Gesamtlänge**: die Linien, Bögen und Polylinien zusammengezählt (Splines zählen auch mit), und wie viele Objekte das sind.
- **Gesamtfläche**: die geschlossenen zusammengezählt: Kreise, ganze Ellipsen, geschlossene Polylinien und Schraffuren (die Löcher einer Schraffur werden abgezogen).

Sie stehen im Längenformat der Zeichnung (Fuß und Zoll, wenn diese genutzt werden; Flächen dann in Quadratzoll und Quadratfuß). Die Statusleiste zeigt dieselbe Länge und Fläche, wenn Objekte gewählt sind; {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Länge und Fläche der Auswahl}} › {{ui:Ausgeblendet}} schaltet das ab. Für ein einzelnes Objekt zeigt {{ui:Geometrie}} wie bisher seine eigene Länge und Fläche.

## Koordinaten

Jeder Punkt zeigt **X**, **Y** und **Z**: Start und Ende einer Linie, Mittelpunkte, Einfügepunkte, Textpositionen und der aktuelle Polylinien-Eckpunkt. Linien zeigen außerdem **Delta X**, **Delta Y** und **Delta Z** (nur lesbar). Polylinien und Schraffuren haben eine **Höhe** (ein Z-Wert für das ganze Objekt).

Die Fadenkreuz-Schaltfläche neben dem Namen eines Punkts lässt Sie ihn stattdessen in der Zeichnung wählen: Klicken Sie darauf und dann auf die neue Position (Fangen funktioniert). Werte sind Weltkoordinaten.

## Allgemein

| Feld | Was es ist |
|---|---|
| {{ui:Layer}}, {{ui:Farbe}}, {{ui:Linientyp}}, {{ui:Linientypfaktor}}, {{ui:Linienstärke}} | Wie im Layer-Panel; {{ui:VonLayer}} folgt dem Layer |
| {{ui:Transparenz}} | VonLayer, VonBlock oder 0 bis 90 % |
| {{ui:Dicke}} | Wie weit Linien, Kreise, Bögen, Polylinien, Punkte und Text in Z reichen |
| {{ui:Material}} | VonLayer, VonBlock, Global oder ein Name, den eine Zeichnung mitgebracht hat |
| {{ui:Plotstil}} | Nur lesbar: Zeichnungen werden nach Farbe geplottet, über die [Plotstiltabelle](topic:plot-pdf#plot-style-tables) des Blatts |
| {{ui:Hyperlink}} | Eine Webadresse, die beim Objekt gespeichert ist |

## Was jeder Typ zeigt

| Gewählt | Sie können ändern |
|---|---|
| Linie | Start- und End-X, Y, Z; Länge; Winkel |
| Kreis | Mittelpunkt; Radius; Durchmesser; Umfang; Fläche (jeweils setzt den Radius) |
| Bogen | Mittelpunkt; Radius; Start- und Endwinkel; Gesamtwinkel; Sehne (zeigt Bogenlänge und Fläche) |
| Ellipse | Mittelpunkt; große und kleine Halbachse; Radienverhältnis; Winkel der Hauptachse; Start- und Endwinkel |
| Polylinie | Der Eckpunkt-Browser (unten); globale Breite; Höhe; geschlossen; Fläche, wenn geschlossen (skaliert um ihren Mittelpunkt) |
| Text | Inhalt; Stil; Ausrichtung; Höhe; Drehung; Breitenfaktor; Schrägungswinkel; definierte Breite; Zeilenabstand; beschriftungsfähig; Position |
| Blockreferenz | Einfügepunkt; Drehung; Skalierung X, Y, Z und gleichmäßige Skalierung; Attributwerte |
| Schraffur | Muster; Maßstab; Winkel; Ursprung; assoziativ; Inselerkennung; Hintergrundfarbe; Höhe |
| Bemaßung | Siehe unten |
| Multi-Führungslinie | Text; Höhe; Breite; Textseite; Pfeilgröße; Landeabstand; Pfeilspitze |
| Ansichtsfenster | Maßstab; Mitte und Größe auf dem Blatt; Ansichtsmitte im Modell; ein; Anzeige gesperrt |

### Polylinien-Eckpunkte

{{ui:Aktueller Scheitelpunkt}} zeigt, zu welchem Eckpunkt die Felder darunter gehören. Nutzen Sie die Pfeilschaltflächen oder geben Sie eine Nummer ein, um zu einem anderen Eckpunkt zu wechseln; es gibt keine Grenze, wie viele. Jeder Eckpunkt hat X, Y, die Segmentbreite am Anfang und am Ende sowie die Ausbuchtung des Segments, das dort beginnt (0 = gerade).

## Bemaßungen

Eine Bemaßung zeigt ihren **Bemaßungsstil**, was sie misst, ihre Punkte und jede Einstellung:

- **Linien und Pfeile:** Pfeilspitze für jedes Ende, Pfeilgröße, Strichgröße, Farben und Linienstärken der Maß- und Maßhilfslinien, Ausblenden jeder Hälfte oder jeder Maßhilfslinie, Versatz der Maßhilfslinie und Überstand.
- **Text:** Überschreiben (leer lassen für den gemessenen Wert; `<>` steht dafür in Ihrem eigenen Text), Stil, Farbe, Höhe, Abstand, vertikale und horizontale Position, immer waagerecht, Drehung, Hintergrundfüllung.
- **Einpassen:** Gesamtmaßstab, Abstand der Grundlinien, was sich verschiebt, wenn der Platz knapp ist, Verschieben des Textes.
- **Primäre Einheiten:** Format, Dezimalstellen, Runden, Präfix, Suffix, Messmaßstab, Dezimaltrennzeichen, führende und nachfolgende Nullen unterdrücken; bei Winkeln das Winkelformat und die Dezimalstellen.
- **Alternative Einheiten:** ein oder aus, Format, Dezimalstellen, Multiplikator (25.4 macht aus Zoll Millimeter), Runden, Präfix und Suffix.
- **Toleranzen:** keine, symmetrisch, Abweichung, Grenzwerte oder Basis, mit oberem und unterem Wert, Dezimalstellen, Höhe und Position.

Wenn Sie eine davon an einer geöffneten Bemaßung ändern, verwirft das die Zeichnung, die das andere Programm daraus gemacht hat, und CadCraft zeichnet sie neu.

:::note
Die horizontale Textposition (neben der ersten oder zweiten Maßhilfslinie) und Text unter der Linie werden bei linearen und ausgerichteten Bemaßungen gezeichnet; bei anderen Bemaßungen werden sie behalten und gespeichert, aber noch nicht gezeichnet. Die Einpassen-Optionen werden behalten und gespeichert, aber noch nicht gezeichnet: CadCraft platziert Text nach seiner eigenen Regel (über der Linie, außerhalb, wenn es nicht passt).
:::

## Nichts gewählt

Ohne Auswahl zeigt das Panel:

- **Neue Objekte:** Layer, Farbe, Linientyp, Linienstärke und Texthöhe, die neue Objekte erhalten; die Einheiten und das Längenformat der Zeichnung; den Linientyp und die Linienstärke des aktuellen Layers; Größen für neue Bemaßungen. Auf einem Blatt kommen zuerst der Name des Blatts, Papier und Ausrichtung.
- **Ansicht:** Mitte, Höhe und Breite dessen, was auf dem Bildschirm ist. Geben Sie einen Wert ein, um die Ansicht dorthin zu verschieben.
- **Verschiedenes:** das BKS-Symbol ein oder aus, das BKS (immer Welt: CadCraft hat noch keine Benutzerkoordinatensysteme) und der Beschriftungsmaßstab.

## Die Schaltflächen oben

| Schaltfläche | Tut |
|---|---|
| Trichter | {{cmd:QSELECT}}: nach Art und Eigenschaft wählen |
| Zeiger | {{cmd:SELECT}}: Objekte in der Befehlszeile wählen |
| Plus oder 1 | Ob ein Klick zur Auswahl hinzufügt (Plus) oder sie ersetzt (1); dieselbe Einstellung wie unter Einstellungen, {{ui:CadCraft}} |
| Pinnadel | Automatisches Ausblenden, siehe oben |

## Häufige Fehler

- **Eine Eingabe in ein Feld tat nichts.** Drücken Sie {{key:Enter}} oder klicken Sie woanders, um sie zu übernehmen. Ein rotes Feld und ein Hinweis bedeuten, dass die Eingabe abgelehnt wurde.
- **Eine Länge mit Einheit wird abgelehnt.** Die Zeichnung hat keine Einheiten. Stellen Sie {{ui:Einheiten}} ein, bei nichts Gewähltem.
- **Nur Layer und Farbe werden angezeigt.** Mehrere Objektarten sind gewählt, und **Alle** ist ausgewählt. Wählen Sie oben in der Liste eine Art.
- **Einige Objekte haben sich nicht geändert.** Sie liegen auf einem gesperrten Layer. Entsperren Sie den Layer im Layer-Panel.
- **Getippte Buchstaben landeten in einem Feld.** Solange ein Feld den Cursor hat, tippen Tasten dort. Drücken Sie {{key:Enter}} oder {{key:Esc}} und geben Sie dann den Befehl ein.
