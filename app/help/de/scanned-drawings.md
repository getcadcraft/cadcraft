---
title: Gescannte Zeichnungen und das Nachzeichnen
summary: Ein gescanntes Blatt einfügen, skalieren und gerade richten, bereinigen, Teile davon löschen, an seinen Linien einrasten und es in Linien und Bögen nachzeichnen.
keywords: scan, gescannte Zeichnung, Raster, tiff, jpeg, png, Maßstab, ausrichten, geradestellen, Flecken, Schwellenwert, schwarzweiß, zuschneiden, löschen, nachzeichnen, vektorisieren, einrasten, Bögen, Schraffur, Papierzeichnungen, alte Zeichnungen, scanattach, scantrace
from: 36227e5b
---

## Vom Papierblatt zu Zeichnungsobjekten

Eine gescannte Zeichnung ist ein Bild. CadCraft behält das Bild, das Sie ihm gegeben haben, und verändert es nie: Jeder Bereinigungsschritt erzeugt ein neues Bild, mit je einem Schritt für Rückgängig, und {{cmd:SCANINFO}} listet die Originaldatei und die seither ausgeführten Schritte auf. Nichts wird irgendwohin gesendet, und nichts wird von einem trainierten Modell erraten: Die Bereinigung und das Nachzeichnen sind gewöhnliche Bildverarbeitung und laufen auf Ihrem Computer.

1. **Einfügen.** {{cmd:SCANATTACH}} liest ein PNG, ein JPEG, ein TIFF (eine Seite oder alle Seiten einer mehrseitigen Datei) oder eine PDF-Seite, die ein Bild ist. Es fragt nach der Seite, der unteren linken Ecke und der Breite. Bei einer PDF-Seite fragt es außerdem, wie viele Pixel pro Zoll die Seite gezeichnet werden soll.
2. **Maßstab setzen.** {{cmd:SCANSCALE}}: Wählen Sie zwei Punkte am Scan und geben Sie dann den wahren Abstand zwischen ihnen ein. Das Blatt wird um den ersten Punkt skaliert.
3. **Ausrichten.** {{cmd:SCANALIGN}}: Wählen Sie zwei Punkte am Scan und die zwei Stellen, zu denen sie gehören; das Blatt verschiebt und dreht sich passend, und es wird auch skaliert, außer Sie antworten mit Nein.
4. **Gerade richten.** {{cmd:SCANDESKEW}} misst den Winkel, in dem die langen Linien des Blatts liegen, und zeigt ihn zusammen mit der Sicherheit der Messung an. Übernehmen Sie ihn oder geben Sie Ihren eigenen ein, dann wird das Blatt gedreht. Ein Blatt mit wenigen langen Linien erhält eine Warnung: Prüfen Sie den Winkel, bevor Sie ihn übernehmen.
5. **Bereinigen.** {{cmd:SCANCLEAN}} macht das Blatt schwarzweiß (Auto gleicht zuerst das Papier aus; Adaptiv folgt den Veränderungen des Papiers genauer; Pegel ist eine einzige Zahl für das ganze Blatt) und entfernt Flecken bis zur eingestellten Größe.
6. **Zuschneiden und löschen.** {{cmd:SCANCROP}} behält ein Fenster. {{cmd:SCANERASE}} löscht ein Rechteck, ein Polygon oder ein Lasso (drücken und ziehen): Stempel, Notizen, einen Kaffeering.

Das bereinigte Bild ist das, was eine gespeicherte DWG enthält (ein IMAGE und sein IMAGEDEF, wobei die Bilddatei neben der Zeichnung liegt, wie bei jedem Bild).

## An den Linien des Scans einrasten

Mit eingeschaltetem {{cmd:RASTERSNAP}} (Standard) finden die Objektfänge auch die Linien eines schwarzweißen Scans: die Enden der Linien, ihre Mitten, Ecken und Kreuzungen, mit den üblichen Fangmarkierungen. Der Teil des Blatts unter dem Zeiger wird beim Bewegen nachgezeichnet; zoomen Sie so weit hinein, dass ein Pixel einige Bildschirmpixel groß ist. Eine Linie, die länger ist als der gerade nachgezeichnete Teil, wird bis zu ihren Enden verfolgt.

## Das Nachzeichnen

{{cmd:SCANTRACE}} wandelt die Linien des Blatts in Linien und Bögen auf einem neuen Layer (SCAN-TRACE) um, als ein einziger Rückgängig-Schritt, wobei der Scan darunter bleibt. Sie legen fest:

- **Toleranz:** wie weit eine nachgezeichnete Linie oder ein Bogen von den Linien im Scan entfernt liegen darf, in Zeichnungseinheiten (der Bericht nennt außerdem Pixel). Eine enge Toleranz folgt jeder Unebenheit; eine weite macht weniger, geradere Stücke.
- **Fenster:** eine Ecke des Blatts oder das ganze Blatt.
- **Bögen:** Aus ergibt nur Linien.
- **Reste:** Was das Nachzeichnen unberührt gelassen hat, wird als Rahmen auf einem Layer gezeichnet, den Sie ausschalten können, oder gar nicht gezeichnet.

Das Nachzeichnen findet die Mitte jedes Strichs, folgt ihr, passt gerade Linien und Kreisbögen an, verbindet Stücke, die dort getrennt wurden, wo eine andere Linie kreuzte, macht fast waagerechte und fast senkrechte Linien genau waagerecht und senkrecht und schließt Ecken. **Text und Schraffuren bleiben als Raster:** Teile in der Größe von Schrift werden beiseitegelegt, und Bündel kurzer paralleler Linien gelten als Schraffur und werden beiseitegelegt.

Am Ende nennt es, wie viele Linien und Bögen entstanden sind, die Toleranz und wie viele Teile es als Raster belassen hat. **Das ist, was die Pixel bei dieser Toleranz ergeben haben; es ist keine Aussage, dass das Ergebnis richtig ist.** Vergleichen Sie es mit dem Blatt: Ein Nachzeichnen kann eine blasse Linie übersehen, zwei sehr nahe beieinanderliegende Linien verbinden oder eine Linie dort zeichnen, wo nur ein Fleck ist. Bereinigen Sie den Scan zuerst (gerade gerichtet, schwarzweiß, Flecken entfernt), dann wird das Ergebnis deutlich besser.

## Was nicht gelesen wird

TIFF-Dateien mit Kacheln, BigTIFF, TIFF mit JPEG- oder Deflate-Kompression, Group-3-Faxcodierung und Farben in getrennten Ebenen werden mit einer Meldung abgelehnt; speichern Sie sie erneut als Streifen mit LZW, PackBits, Group 4 oder ohne Kompression. Interlaced-PNG-Dateien werden ebenfalls abgelehnt. Dateien über 128 MB oder 100 Millionen Pixel werden abgelehnt, und ein Nachzeichnen-Fenster kann höchstens 64 Millionen Pixel enthalten.
