---
title: Kartenlayer unter der Zeichnung
summary: Zeigt Straßenkarten, Luftbilder oder ein Bild mit Weltdatei unter dem Modellbereich, platziert nach dem Koordinatensystem der Zeichnung.
keywords: Karte, Kartenlayer, maplayers, ml, geomap, Basiskarte, Luftbild, Satellit, Kacheln, xyz, wms, wmts, Kartendienst, Weltdatei, Koordinatensystem, EPSG, State Plane, UTM, georeferenzieren, Lageplan, Geolokalisierung, geografische Lage, Geodaten, gespeichert, dwg, dxf
from: f103045f
---

## Was Sie erstellen

Einen Lageplan, der über einem Luftbild oder einer Straßenkarte liegt, jeweils am richtigen Ort.

## Der Zeichnung ihren Ort mitteilen

1. Legen Sie die Einheiten der Zeichnung in {{ui:Eigenschaften}} › {{ui:Einheiten}} fest (zum Beispiel Fuß oder Meter).
2. Geben Sie {{cmd:MAPLAYERS}} (oder `ML`) ein und drücken Sie {{key:Enter}}.
3. Geben Sie unter {{ui:Wo die Zeichnung liegt}} einen Namen oder einen EPSG-Code in {{ui:Ein System suchen}} ein (zum Beispiel `2277` oder `Texas Central`) und wählen Sie es unter {{ui:System}}.
4. Wenn die Zeichnung in den eigenen Koordinaten dieses Systems gezeichnet ist, lassen Sie die Platzierung auf 0. Wenn nicht, geben Sie einen Punkt der Zeichnung ({{ui:Zeichnung X}}, {{ui:Zeichnung Y}}) an, wo dieser Punkt im Kartenraster liegt ({{ui:Rechtswert}}, {{ui:Hochwert}}), und wie weit die Zeichnung von Osten aus gedreht ist ({{ui:Gedreht (°)}}).
5. Klicken Sie auf {{ui:Dieses System verwenden}}.

## Einen Layer hinzufügen

1. Schalten Sie {{ui:Kartenlayer aus dem Internet}} oben im Dialog ein. Bis dahin wird kein Server befragt; ist es eingeschaltet, sehen die Server, die Sie hinzufügen, den Bereich auf dem Bildschirm und Ihre Internetadresse, niemals Ihre Zeichnung.
2. Wählen Sie unter {{ui:Einen Layer hinzufügen}}, woher er stammt:
   - **Kacheln (XYZ)**: eine Kachel-Adresse mit `{z}`, `{x}` und `{y}`, ein Name und der Quellenhinweis, den der Anbieter verlangt.
   - **WMS**, **WMTS** oder **ArcGIS**: die Adresse des Dienstes, dann Layer abrufen und einen davon wählen.
   - **Ein Bild**: ein PNG oder JPEG mit seiner Weltdatei (und seiner `.prj`, falls vorhanden).
3. Der Layer wird unter der Zeichnung angezeigt. Sein Quellenhinweis erscheint unten rechts in der Zeichnung.

Jeder Layer in der Liste kann ausgeblendet, mehr oder weniger transparent gemacht, nach oben oder unten verschoben oder entfernt werden.

Jede Änderung am System oder an den Layern ist ein Schritt von {{cmd:UNDO}}.

## Mit der Zeichnung gespeichert

Das Koordinatensystem und die Liste der Kartenlayer werden in der Zeichnung gespeichert, wenn Sie sie als DWG oder DXF speichern, und sind wieder da, wenn Sie sie erneut öffnen, auf jedem Computer. Bilder aus Dateien werden nicht gespeichert: Fügen Sie sie nach dem Öffnen erneut hinzu. Der Schalter {{ui:Kartenlayer aus dem Internet}} wird nicht in der Zeichnung gespeichert: Er gehört zu diesem Browser, daher fragt eine Zeichnung, die Ihnen jemand schickt, erst dann einen Server ab, wenn Sie ihn selbst einschalten.

Was andere Programme sehen:

| Gespeichert als | Der Ort der Zeichnung | Die Kartenlayer |
|---|---|---|
| DWG 2010, 2013 oder 2018, DXF 2000 | Auf die übliche Weise geschrieben, wie Programme den geografischen Ort einer Zeichnung lesen: der EPSG-Code des Systems, ein Punkt der Zeichnung und wo er im Kartenraster liegt, die Einheiten und Norden. | Nur CadCraft |
| DWG 2000, 2004 oder 2007, DXF R12 | Nur CadCraft (CadCraft sagt es beim Speichern) | Nur CadCraft |

- **Geprüft:** Der ODA File Converter liest den Ort ohne Fehler, und eine DXF-Bibliothek (ezdxf) liest den EPSG-Code und die Platzierung exakt.
- **Noch nicht geprüft:** ob andere Zeichenprogramme das System anhand seines EPSG-Codes erkennen. Ein Programm, das eine eigene Liste von Systemen unter anderen Namen führt, zeigt die Zeichnung möglicherweise ohne Ort an.
- Andere Programme zeigen in der Blockliste einen Block namens `CADCRAFT_GEO`. Es ist die eigene Kopie von CadCraft von dem System und den Layern; er wird nie in der Zeichnung platziert. Lassen Sie ihn dort.

## Zeichnungen aus anderen Programmen

Wenn eine Zeichnung aus einem anderen Programm einen geografischen Ort hat, liest CadCraft ihn:

- Nennt sie einen EPSG-Code, zeigt {{ui:Wo die Zeichnung liegt}} dieses System, und die Kartenlayer werden danach platziert.
- Kennt CadCraft das System nicht (den eigenen Namen eines anderen Programms, ein lokales Raster oder einen Maßstabsfaktor), wird der Ort nicht verwendet, bleibt aber erhalten und wird unverändert zurückgespeichert, damit das andere Programm ihn trotzdem findet. Wählen Sie unter {{ui:Wo die Zeichnung liegt}} ein System, um ihn zu ersetzen.

:::note
Kartenlayer werden nur auf dem Bildschirm gezeichnet: Sie werden nicht geplottet. Verwenden Sie nur Kartendienste, deren Nutzungsbedingungen dies erlauben, und halten Sie deren Quellenhinweis sichtbar.
:::
