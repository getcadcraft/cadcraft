---
title: Kopieren, Einfügen und Duplizieren
summary: Objekte in die Zwischenablage von CadCraft kopieren, dort einfügen, wo Sie klicken, oder an Ort und Stelle, mit dem Zeiger duplizieren und Arbeit aus einer anderen Zeichnung oder Registerkarte übernehmen.
keywords: kopieren, ausschneiden, einfügen, an gleicher Position einfügen, duplizieren, Zwischenablage, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, zwischen Zeichnungen, andere Registerkarte, Basispunkt
from: 4b9f29d3
---

## Was Sie lernen

Wie Sie Objekte in die Zwischenablage kopieren, dort einfügen, wo Sie klicken, an ihren eigenen Koordinaten einfügen, mit dem Zeiger duplizieren, ausschneiden und in eine andere Zeichnung übernehmen. Alles hier finden Sie auch in der Gruppe {{ui:Bearbeiten}} der Symbolleiste: {{ui:Kopieren}}, {{ui:Einfügen}} und das Menü {{ui:Mehr}}.

## Kopieren und dort einfügen, wo Sie klicken

1. Wählen Sie die Objekte aus: Klicken Sie sie an, oder ziehen Sie ein Fenster auf.
2. Drücken Sie {{key:Mod+C}} oder klicken in der Gruppe {{ui:Bearbeiten}} auf {{ui:Kopieren}}. Die Befehlszeile sagt, wie viele Objekte kopiert wurden. Sie bleiben ausgewählt.
3. Drücken Sie {{key:Mod+V}} oder klicken auf {{ui:Einfügen}}. Die Kopie erscheint am Cursor und hängt an der unteren linken Ecke der kopierten Objekte.
4. Klicken Sie, wohin diese Ecke soll, oder geben Sie einen Punkt wie `2000,500` ein und drücken {{key:Enter}}. Objektfang und Ortho funktionieren wie gewohnt.

Die eingefügten Objekte sind ausgewählt, sodass Sie sie sofort verschieben oder ändern können. Ein Schritt mit {{key:Mod+Z}} nimmt das ganze Einfügen zurück.

:::tip
Soll die Kopie an einem Punkt hängen, den Sie wählen, etwa an der Ecke einer Wand? Geben Sie `COPYBASE` ein, klicken den Basispunkt, wählen die Objekte aus und drücken {{key:Enter}}. Beim Einfügen wird dieser Punkt dann dort gesetzt, wo Sie klicken. Um jede Kopie an ihrer Mitte statt an der unteren linken Ecke hängen zu lassen, ändern Sie {{ui:Einfügepunkt}} in den [CadCraft-Einstellungen](topic:settings).
:::

## An gleicher Position einfügen

Drücken Sie {{key:Mod+Shift+V}} oder wählen {{ui:An gleicher Position einfügen}} im Menü {{ui:Mehr}}. Die Kopie wird genau an den Koordinaten eingefügt, von denen sie kopiert wurde, ohne Klick. Nutzen Sie es, um Objekte an derselben Stelle in eine andere Zeichnung zu bringen oder von einem Blatt auf ein anderes.

## Duplizieren und verschieben

1. Wählen Sie die Objekte aus.
2. Drücken Sie {{key:Mod+D}} oder wählen {{ui:Duplizieren und verschieben}} im Menü {{ui:Mehr}}.
3. Eine Kopie liegt auf dem Original und bewegt sich mit dem Zeiger. Klicken Sie, wohin sie soll. Sie können auch eine Verschiebung wie `@0,-600` eingeben oder einen Abstand in Richtung Cursor.

{{key:Esc}} vor dem Klick lässt nichts zurück. Das Duplikat ist ein Schritt für {{ui:Rückgängig}} und berührt die Zwischenablage nicht.

## Ausschneiden

Drücken Sie {{key:Mod+X}} oder wählen {{ui:Ausschneiden}} im Menü {{ui:Mehr}}. Die Objekte gehen in die Zwischenablage und werden aus der Zeichnung gelöscht, in einem Schritt für {{ui:Rückgängig}}. Fügen Sie sie mit {{key:Mod+V}} oder {{key:Mod+Shift+V}} wieder ein.

## Zwischen Zeichnungen und Registerkarten

Die Zwischenablage behält ihre Kopie, wenn Sie eine andere Zeichnung öffnen, und sie wird von jeder CadCraft-Registerkarte in diesem Browser geteilt. Kopieren Sie in einer Registerkarte und drücken dann {{key:Mod+V}} in einer anderen.

- Blöcke, welche die Objekte verwenden, kommen mit ihnen. Hat die Zeichnung, in die Sie einfügen, bereits einen Block gleichen Namens, wird ihre eigene Definition verwendet, wie in AutoCAD.
- Layer, welche die Objekte verwenden, werden hinzugefügt, mit der Farbe und den Einstellungen, die sie hatten.
- Die Kopie wird nicht umskaliert, wenn die beiden Zeichnungen unterschiedliche Einheiten verwenden: CadCraft sagt es, und danach können Sie {{cmd:SCALE}} verwenden.
- Ansichtsfenster bleiben auf ihrem Blatt; sie werden bei einer Kopie ausgelassen.

:::note
Die Zwischenablage gehört CadCraft. Sie können CadCraft-Objekte nicht in ein anderes Programm einfügen und auch nichts aus einem anderen Programm in CadCraft: Speichern Sie stattdessen als DWG oder DXF. Eine sehr große Kopie passt eventuell nicht zum Teilen zwischen Registerkarten; die Befehlszeile sagt dann nur, dass diese Registerkarte sie einfügen kann.
:::

## Häufige Fehler

- **{{key:Mod+V}} hat Text in die Befehlszeile eingefügt.** Sie hatten dort etwas eingegeben, daher wirkten die Tasten auf den Text. Drücken Sie {{key:Esc}}, um ihn zu löschen, und dann erneut {{key:Mod+V}}.
- **Nichts geschah, und die Statusleiste sagt, den aktuellen Befehl abzuschließen.** Ein anderer Befehl läuft. Drücken Sie zuerst {{key:Esc}}.
- **Das Einfügen landete weit entfernt.** Es hängt an der unteren linken Ecke dessen, was Sie kopiert haben, und das kann ein entferntes Objekt sein, das Sie versehentlich ausgewählt haben. Verwenden Sie {{ui:An gleicher Position einfügen}} oder kopieren mit `COPYBASE`.
- **„Nichts eingefügt“ mit einem Grund.** Was eine andere Registerkarte in der Zwischenablage hinterlassen hat, konnte nicht gelesen werden (es war beschädigt oder von Hand verändert). Kopieren Sie die Objekte erneut.

Die vollständige Liste der Tasten finden Sie unter [Tastatur und Maus](topic:keyboard), jeden Befehl in der [Befehlsreferenz](topic:commands#clipboard).
