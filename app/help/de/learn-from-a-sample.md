---
title: An einer Beispielzeichnung lernen
summary: Das Beispielhaus oder die Beispiel-Bestandsaufnahme von CadCraft öffnen und durch Blätter, Schriftfeld, Bemaßungen und Layer gehen.
keywords: Beispiel, Beispiele, Beispielzeichnung, lernen, Tutorial, Schritt-für-Schritt-Anleitung, Schriftfeld, Blätter, Bestandsaufnahme, Architektursatz, Beispiel öffnen
from: aa1f960a
---

## Was Sie lernen

Wie ein fertiger Satz aufgebaut ist: Modellbereich, Blätter mit Ansichtsfenstern in einem Maßstab, ein Schriftfeld mit Attributen, Bemaßungen in Fuß und Zoll und in Millimetern, Layer. Die Beispiele stammen von CadCraft selbst und sind für jeden Zweck frei verwendbar (CC0).

## Ein Beispiel öffnen

1. Im linken Bereich unter {{ui:Zeichnung}} auf {{ui:Ein Beispiel öffnen}} klicken (oder {{cmd:SAMPLES}} eingeben; in den Menüband-Stilen steht es im Menü {{ui:Datei}}).
2. Neben {{ui:Beispielhaus}} auf {{ui:Öffnen}} klicken. Es öffnet sich in einem eigenen Tab, Ihre Arbeit bleibt also geöffnet.

## Das Modell ansehen

1. {{ui:Grenzen}} klicken (oder `ZOOM`, dann `E` eingeben): der Grundriss, die Vorderansicht, ein Schnitt und ein Wanddetail.
2. Unter {{ui:Layer}} das Auge neben `A-ANNO-DIMS` klicken, um die Bemaßungen auszublenden, und noch einmal, um sie wieder einzublenden.
3. Eine Tür anklicken: Eigenschaften zeigt eine Blockreferenz auf `DOOR-32`. Türen und Fenster sind Blöcke, gedreht und gespiegelt platziert.

## Die Blätter

1. {{ui:A-101 FLOOR PLAN}} unter der Zeichnung klicken: ein ARCH-D-Blatt mit einem Ansichtsfenster im Maßstab 1/4" = 1'-0".
2. Doppelklick innerhalb des Ansichtsfensters, um durch es am Modell zu arbeiten; Doppelklick außerhalb, um zurückzukehren.
3. {{ui:A-501 DETAILS}} zeigt das Wanddetail im Maßstab 1 1/2" = 1'-0": dasselbe Modell, ein anderer Maßstab.

## Das Schriftfeld

1. Auf einem beliebigen Blatt das Schriftfeld doppelklicken: {{ui:Attribute bearbeiten}} listet PROJECT, TITLE, SCALE, DATE, DRAWN und SHEET auf.
2. DRAWN in Ihre Initialen ändern und auf {{ui:OK}} klicken.
3. Um das Schriftfeld selbst auf allen Blättern zu ändern, es wählen und {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Direkt bearbeiten}} wählen. Siehe [Attribute](topic:attributes).

## Die Bestandsaufnahme

{{ui:Beispiel Bestandsaufnahme}} auf dieselbe Weise öffnen. Die grauen Punkte auf `SCAN-SLICE` sind eine Schnittscheibe eines Scans; die Wände auf `AB-WALL` wurden darüber nachgezeichnet. Die Ostwand ist um 35 mm aus dem Winkel: Die Bemaßungen sagen es zweimal, in Millimetern (`AB-DIMS-MM`) und in Fuß und Zoll (`AB-DIMS-FTIN`, dieselben Längen über einen Messmaßstab). Die roten Wolken auf `REV-1` markieren, was die Aufnahme gefunden hat.

## Weiter

- [Textgröße der Bemaßung ändern](topic:change-dimension-text-size)
- [In PDF plotten](topic:plot-pdf): {{ui:A-101 FLOOR PLAN}} plotten.
