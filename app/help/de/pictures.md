---
title: Bilder in einer Zeichnung
summary: Ein PNG- oder JPEG-Bild platzieren, es auf ein Rechteck oder Polygon zuschneiden, die Bilder einer DWG anzeigen und sie scharf plotten.
keywords: pastearea, parea, Bereich kopieren, kopierter Bereich, markupcraft, wahre Größe, echte Größe, Überlagerung, ole, ole2frame, eingebettetes Objekt, Bild einfügen, Screenshot einfügen, ctrl+v, Zwischenablage-Bild, Screenshot, Bild, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, Logo, Foto, Raster, imagedef, xref, plot, pdf, Auflösung
from: 4025ac97
---

## Was Sie erstellen

Ein Firmenlogo, in einem Schriftfeld platziert, auf den gewünschten Teil zugeschnitten, und ein PDF, in dem es mit seiner eigenen Auflösung gedruckt wird.

## Ein Bild platzieren

1. Geben Sie {{cmd:IMAGEATTACH}} (oder `IAT`) ein und drücken Sie {{key:Enter}}. Wählen Sie eine PNG- oder JPEG-Datei.
2. `Untere linke Ecke angeben`: Klicken Sie oder geben Sie einen Punkt ein.
3. `Breite angeben`: die Breite in Zeicheneinheiten. {{key:Enter}} behält die angebotene Breite bei: eine Einheit pro Pixel oder die Breite, die Sie dieser Datei beim letzten Mal gegeben haben (die Eingabeaufforderung sagt, welche).
4. `Drehwinkel angeben`: {{key:Enter}} für keinen.

Das Bild ist ein Objekt: Wählen Sie es über seinen Rahmen aus und verschieben, kopieren, drehen, skalieren oder löschen Sie es wie einen Block.

:::note
Die Bilddatei bleibt bei der Zeichnung, solange sie geöffnet ist. Eine gespeicherte DWG nennt die Datei, wie andere Programme es tun; sie enthält die Pixel nicht. Bewahren Sie das Bild neben der Zeichnung auf.
:::

## Einen Screenshot oder ein kopiertes Bild einfügen

1. Kopieren Sie das Bild (einen Screenshot mit {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=Ihr Screenshot-Werkzeug}} oder Bild in einem anderen Programm oder Browser kopieren).
2. Zeigen Sie auf die Stelle der Zeichnung, an der es hin soll, und drücken Sie {{key:Mod+V}}.

Die untere linke Ecke des Bildes landet am Zeiger (oder in der Mitte der Ansicht), 40 % so breit wie das, was Sie sehen. Verschieben, skalieren und beschneiden Sie es wie jedes Bild. Sein Name ist der der Zeichnung mit `-picture-1.png` (dann `-2`, …), und der Verlauf meldet es.
{{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Ein Bild einfügen}} tut dasselbe über das Menü (der Browser fragt eventuell zuerst).

Eine DWG behält nur den Namen der Bilddatei. Beim Speichern der Zeichnung wird das Bild also auch als eigene Datei gespeichert. Bewahren Sie beide im selben Ordner auf: Die Zeichnung zeigt das Bild von dort. Im Browser ist das ein zweiter Download, und der Verlauf sagt es. Wenn nur CadCraft-Objekte in der Zwischenablage liegen, fügt {{key:Mod+V}} diese wie zuvor ein.

## Einen in MarkupCraft kopierten Bereich einfügen

{{ui:Bereich kopieren}} in MarkupCraft kopiert einen Teil eines Blatts als Bild, das seine Größe kennt. CadCraft fügt es in dieser Größe ein.

1. Kopieren Sie in MarkupCraft den Bereich (ein Rechteck, einen Kreis oder eine Freiform; {{ui:Als Überlagerung kopieren}}, wenn Sie Ihre Zeichnung durch ihn sehen wollen).
2. Drücken Sie in CadCraft {{key:Mod+V}}, oder geben Sie {{cmd:PASTEAREA}} (oder `PAREA`) ein, oder wählen Sie {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Kopierten Bereich einfügen}}.
3. `Untere linke Ecke des kopierten Bereichs angeben`: Klicken Sie oder geben Sie einen Punkt ein. Ein Rahmen in der Größe des Bereichs folgt dem Zeiger.

So groß wird es:

- **Das Blatt hatte einen Zeichnungsmaßstab:** in seiner echten Größe, in den Zeicheneinheiten der Zeichnung (ein Detail 1:50 einer 2 m langen Treppe ist 2 m lang in einer Meterzeichnung, 78.74 in einer Zollzeichnung). Es wird nichts weiter gefragt.
- **Das Blatt hatte keinen Maßstab:** CadCraft meldet seine Größe auf dem Papier und fragt nach einem Maßstab. Geben Sie `100` für einen Maßstab 1:100 ein, drücken Sie {{key:Enter}} für die Papiergröße, oder geben Sie `P` ein, klicken Sie zwei Punkte auf dem eingefügten Bild an und geben Sie ein, wie weit sie in Wirklichkeit auseinanderliegen (wie es {{cmd:SCANSCALE}} tut). Die untere linke Ecke bleibt dort, wo Sie sie hingesetzt haben.

Eine Zeichnung ohne Einheiten nimmt Millimeter, wie eine PDF-Unterlage. Eine Überlagerung behält ihr Papier durchsichtig und beginnt so verblasst, wie sie kopiert wurde. Außerhalb eines Kreises oder einer Freiform ist sie ebenfalls durchsichtig. Der eingefügte Bereich ist ein Bild wie jedes andere: verschieben, drehen, skalieren, zuschneiden oder löschen Sie ihn. Das gesamte Einfügen ist ein Rückgängig-Schritt. Als DWG gespeichert, ist es ein IMAGE mit seiner Verblassung und Transparenz.

{{key:Mod+V}} fügt den Bereich ein, wenn das Bild in der Zwischenablage zum Bereich gehört oder wenn der Bereich nach allem kopiert wurde, was Sie in CadCraft kopiert haben (und in den letzten 6 Stunden). Andernfalls fügt es wie zuvor ein. {{cmd:PASTEAREA}} fügt den zuletzt kopierten Bereich jederzeit ein.

## Die Bilder einer DWG anzeigen

Eine DWG speichert nur, wo ihre Bilder waren. CadCraft zeigt jedes daher als Rahmen mit seinem Dateinamen.

1. Geben Sie {{cmd:IMAGE}} (oder `IM`) ein. Die Befehlszeile listet jede Bilddatei auf und ob sie angezeigt wird.
2. Wählen Sie die Dateien (mehrere auf einmal). Eine Datei, deren Name den Namen enthält, den die Zeichnung nennt, zählt ebenfalls, weil Exporte oft ein Projektpräfix hinzufügen.

## Ein Bild zuschneiden

1. Geben Sie {{cmd:IMAGECLIP}} (oder `ICL`) ein und wählen Sie das Bild aus.
2. Wählen Sie `R` und klicken Sie auf zwei Ecken oder `P` und klicken Sie auf die Punkte eines Polygons, dann {{key:Enter}}. `D` entfernt den Zuschnitt.

## Bilder plotten

Bilder gehen als Bilder in das PDF, in ihrer eigenen Auflösung und unter den Linien. Im Dialog {{ui:Plotten}} können {{ui:Bilder}} sie auf 600, 300 oder 150 dpi begrenzen, um die Datei kleiner zu machen. Eine JPEG wird unverändert übernommen.

## Was wo gespeichert wird

| Format | Bilder |
|---|---|
| DWG (jede Version) | Als Bilder (IMAGE), mit ihrem Zuschnitt |
| DXF | Als ihre Rahmen mit dem Dateinamen; das Speichern sagt es |

## Objekte anderer Programme (OLE)

Eine Zeichnung kann Objekte enthalten, die ein anderes Programm erstellt hat, etwa ein Bild aus einem Malprogramm oder einen Tabellenbereich (OLE-Objekte). CadCraft führt sie nicht aus und bearbeitet sie nicht, und kann keine neuen einfügen. Was es tut:

- **In einer DXF** öffnet sich ein OLE-Objekt als Rahmen. Hat das Objekt ein Bild von sich selbst gespeichert und ist dieses Bild eine Bitmap, wird das Bild im Rahmen gezeichnet. Andernfalls trägt der Rahmen eine Beschriftung mit dem Objekttyp, etwa „Microsoft Excel Worksheet (OLE)“. Sie können den Rahmen wie einen Block verschieben, kopieren und löschen. {{cmd:SAVEAS}} als DXF 2000 schreibt ihn wieder als OLE-Objekt, mit unveränderten Daten.
- **In einer DWG** bleiben die Objekte erhalten und werden beim Speichern als DWG byte-genau zurückgeschrieben, aber sie werden **nicht angezeigt**: Eine DWG behält die Stelle eines Objekts in seinen eigenen Daten, und CadCraft liest sie noch nicht. Der Verlauf sagt, wie viele erhalten wurden. Geben Sie {{cmd:OLELIST}} ein, um zu sehen, was sie sind (Typ, Größe, ob jedes ein Bild gespeichert hat), und um eine Kopie eines Bildes dort abzulegen, wo Sie wollen: **Platzieren** fragt nach der Nummer, der unteren linken Ecke und der Breite und zeichnet einen Rahmen mit dem Bild darin. Diese Kopie ist ein Rahmen, den Sie verschieben oder löschen können; das Objekt selbst bleibt in der Zeichnung und wird beim Speichern weiterhin zurückgeschrieben.
- Ein Objekt, das aus einer DXF stammt, wird in einer DWG nur als sein Rahmen und seine Beschriftung gespeichert; der Verlauf sagt es. Speichern Sie als DXF 2000, um das Objekt selbst zu behalten.
- Bilder, die Metadateien sind (was viele Programme speichern), werden nicht gezeichnet. Stattdessen erscheinen der Rahmen und die Beschriftung.

## Häufige Fehler

| Sie sehen | Warum | Abhilfe |
|---|---|---|
| Ein Rahmen mit einem Dateinamen | CadCraft hat die Datei nicht | {{cmd:IMAGE}}, dann die Datei wählen |
| „Das ist kein Bild“ | Das gewählte Objekt ist kein Bild | Wählen Sie den Rahmen des Bildes |
