---
title: Stücklisten nach Zone
summary: Markieren Sie Bereiche der Zeichnung als Zonen und platzieren Sie für jede eine Tabelle, die die darin liegenden Blöcke zählt. Die Tabellen folgen der Zeichnung während der Arbeit, und Sie wählen, welche Spalten jede zeigt.
keywords: Stückliste, bill of materials, BOM, Teileliste, parts list, Liste, schedule, Zone, zone, Bereich, area, Tabelle, table, Anzahl, count, Attribut, attribute, Spalten, columns, Positionsnummer, item number, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Eine **Zone** ist ein benannter Bereich der Zeichnung. Eine **Stücklistentabelle** listet auf, was innerhalb einer Zone oder in der ganzen Zeichnung liegt: jeder Block mit seiner Menge und seinen Attributwerten. Eine Zeichnung kann beliebig viele Zonen und Tabellen haben, und eine Zone kann mehrere Tabellen mit unterschiedlichen Spalten haben.

Die Werkzeuge befinden sich auf der Registerkarte {{ui:Blocks}} unter {{ui:Bill of materials}}, im Menü {{ui:More}} der Gruppe Blöcke, und können eingegeben werden.

## Eine Zone erstellen

Geben Sie {{cmd:BOMZONE}} ein und wählen Sie entweder

- zwei gegenüberliegende Ecken für ein Rechteck anklicken,
- {{ui:Polygon}} wählen, jede Ecke anklicken und Enter drücken, um es zu schließen, oder
- {{ui:Object}} wählen und eine geschlossene Polylinie, einen Kreis, eine Ellipse oder einen geschlossenen Spline anklicken. Sein Umriss wird kopiert; das Objekt bleibt, wie es ist.

Geben Sie danach den Namen der Zone ein. Die Zone wird als gestrichelter Umriss gezeichnet, mit ihrem Namen über der oberen linken Ecke, auf dem Layer `BOM-ZONES`, der nicht geplottet wird. Aktivieren Sie das Plotten für diesen Layer, wenn Sie Zonen auf Papier wollen.

Eine Zone ist eine gewöhnliche geschlossene Polylinie: Verschieben, strecken oder ziehen Sie an ihren Griffen, und ihr Name folgt. Um eine Zone umzubenennen, bearbeiten Sie den Text des Namens oder verwenden Sie {{cmd:BOMZONE}} und {{ui:Rename}}. {{ui:Zones}} listet jede Zone und wie viele Tabellen sie hat.

## Eine Tabelle platzieren

Geben Sie {{cmd:BOMTABLE}} (oder {{cmd:BOM}}) ein, wählen Sie den Umriss der Zone oder ihren Namen, geben Sie die Texthöhe an und klicken Sie, wo die linke obere Ecke der Tabelle hinkommt. Drücken Sie Enter, statt eine Zone zu wählen, oder wählen Sie {{ui:Whole}}, für eine Tabelle der ganzen Zeichnung.

Eine neue Tabelle zeigt die Positionsnummer, die Menge, den Blocknamen und eine Spalte für jedes Attribut, das die Blöcke tragen (die ersten sechs; die anderen werden ohne Haken angeboten). Blöcke mit demselben Namen und denselben Attributwerten teilen sich eine Zeile.

## Was als innerhalb gilt

- Ein Block zählt in der Zone, die seinen **Einfügepunkt** enthält.
- Eine Linie, ein Bogen, Kreis, Polylinie, Ellipse, Spline oder Schraffur zählt **ganz** in der Zone, die die Mitte ihrer Ausdehnung enthält (bei einer Linie ihr Mittelpunkt). Ihre Länge wird am Zonenrand nicht geschnitten.
- Ein Punkt genau auf dem Rand liegt innerhalb.
- Zonen dürfen sich überlappen. Jede Zone zählt für sich selbst, sodass ein Objekt in der Überlappung in beiden Tabellen steht.

## Tabellen folgen der Zeichnung

Wenn Sie einen Block hinzufügen, verschieben, kopieren oder löschen, ein Attribut bearbeiten oder eine Zone umformen oder verschieben, wird jede Tabelle im selben Schritt neu gezeichnet. Rückgängig nimmt Ihre Bearbeitung und die Tabellenänderung gemeinsam zurück.

Um zu verhindern, dass eine Tabelle folgt, setzen Sie in ihren Einstellungen den Haken bei {{ui:Frozen}}. Eine gefrorene Tabelle ändert sich nur, wenn Sie ihre Einstellungen bearbeiten oder {{cmd:BOMUPDATE}} eingeben, was jetzt alle Tabellen aktualisiert.

## Spalten wählen

Wählen Sie eine Tabelle und geben Sie {{cmd:BOMEDIT}} ein. Im Dialogfeld:

- **Spalten**: Setzen Sie Haken bei denen, die angezeigt werden sollen (Position, Menge, Name, Layer, Länge, Fläche, Bemerkungen und jedes Attribut), geben Sie für jede eine eigene Überschrift ein und verschieben Sie sie nach oben oder unten.
- {{ui:Group rows by}}: Blockname und Attributwerte, nur Blockname, Layer oder ein Attribut. In einer zusammengeführten Zeile steht „variiert“, wenn sich ein Wert zwischen den Blöcken unterscheidet.
- {{ui:Sort by}} für jede Spalte, aufsteigend oder absteigend.
- {{ui:Title}}, {{ui:Show the title}} und {{ui:Totals row}}.
- {{ui:Count linework by layer}} fügt pro Layer eine Zeile mit der Anzahl der Objekte, ihrer Gesamtlänge und bei geschlossenen Formen ihrer Gesamtfläche hinzu, in Zeichnungseinheiten.
- **Bemerkungen**: Setzen Sie den Haken bei der Spalte Bemerkungen und geben Sie dann im Dialogfeld unten für jede Zeile eine Bemerkung ein.

Jede Tabelle behält ihre eigenen Auswahlen.

## Positionsnummern

Eine Zeile behält ihre Positionsnummer, solange sie in der Tabelle ist. Eine neue Zeile erhält die nächste freie Nummer, und eine bereits vergebene Nummer wird nicht wiederverwendet, damit Positionsballons und Notizen, die eine Nummer zitieren, richtig bleiben. {{ui:Renumber items}} nummeriert sie ab 1 in der angezeigten Reihenfolge.

Eine Zeile wird an dem erkannt, was sie gruppiert: Ändern Sie, wie Zeilen gruppiert werden, oder einen Attributwert, den die Gruppierung verwendet, und die Zeile zählt als neue.

## Export und andere Programme

{{cmd:BOMEXPORT}} oder {{ui:Export CSV}} im Dialogfeld speichert eine Tabelle als .csv-Datei für eine Tabellenkalkulation.

In einer DWG- oder DXF-Datei ist eine Tabelle ein gewöhnlicher Block aus Linien und Text, sodass andere Programme sie so zeigen und plotten, wie sie gezeichnet ist. Dort ist sie kein Tabellenobjekt, und sie aktualisiert sich in anderen Programmen nicht. Die Verknüpfung zu ihrer Zone bleibt in der Datei als Erweiterungsdaten erhalten, die CadCraft wieder einliest; dadurch ist die Tabelle wieder aktiv, wenn Sie die Zeichnung in CadCraft erneut öffnen. Eine R12-DXF einer Zeichnung ohne Blatt behält die Einstellung „Nicht plotten“ des Zonen-Layers nicht bei.

Wenn Sie eine Tabelle zerlegen, wird sie zu losen Linien und Text, und die Verknüpfung endet.
