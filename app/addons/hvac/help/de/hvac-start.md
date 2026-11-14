---
title: RLT: Erste Schritte
summary: Was das RLT-Add-on in CadCraft tut, wie Sie es einschalten und wie Lüftungsleitungen in einer gewöhnlichen DWG- oder DXF-Datei erhalten bleiben.
keywords: RLT, Add-on, Lüftung, Kanal, TGA, Blech, Volumenstrom, cfm, gleiche Reibung, Liste
from: a9ad5492
---

## Was es ist

RLT ist ein Add-on für CadCraft, das im Lieferumfang enthalten und kostenlos ist. Es zeichnet Lüftungsleitungen: Sie klicken auf die Mittellinie eines Kanalstrangs, und das Add-on zeichnet beide Seiten des Kanals mit seinen Bögen, Übergängen und Abzweigstücken, bemisst ihn nach dem Volumenstrom, baut ihn als Körper auf der Registerkarte {{ui:3D}} auf und listet ihn mit seiner Blechfläche in einer Kanalliste auf.

Es ist ausgeschaltet, bis Sie es einschalten: {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Add-ons}} › {{ui:RLT}}. Seine Werkzeuge stehen im Abschnitt {{ui:RLT}} des rechten Bereichs, als Befehle (unten), und, wenn Sie es in {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:RLT}} verlangen, als Gruppe am Ende der Symbolleiste.

Die Größen folgen den Einheiten der Zeichnung: Eine Zeichnung in Zoll oder Fuß erhält Größen in Zoll, Volumenstrom in cfm und Reibung in Zoll Wassersäule je 100 Fuß; jede andere Zeichnung erhält Millimeter, Liter pro Sekunde und Pascal je Meter.

## Ihr erster Kanalstrang

1. Geben Sie {{cmd:DUCT}} ein. Geben Sie {{ui:Z}} ein und eine Größe, zum Beispiel `24x12` (Breite × Höhe), oder {{ui:A}} und den Volumenstrom; dann wählt das Add-on die Größe.
2. Klicken Sie auf die Punkte des Strangs. Jede Ecke erhält automatisch einen Bogen. Drücken Sie Enter, um abzuschließen.
3. Um abzuzweigen, beginnen Sie den nächsten Strang innerhalb des ersten: Der Klick rückt auf dessen Mittellinie, und der Abzweig erhält dort ein T-Stück oder ein Abzweigstück.
4. Geben Sie {{cmd:DUCTSCHED}} ein und klicken Sie dort, wo die Liste stehen soll.

Siehe [Kanalstränge zeichnen](topic:hvac-ducts) für alles, was ein Strang kann.

## Dateien überall öffnen

Ein Kanalstrang wird als Blockreferenz mit seiner Zeichnung darin gespeichert, und seine Daten bleiben darin unter dem Anwendungsnamen `CC_HVAC` erhalten. So lassen sich Lüftungsleitungen, als DWG oder DXF gespeichert, in jedem CAD-Programm als gezeichnete Kanäle öffnen, und in CadCraft lassen sie sich ohne das Add-on öffnen, ohne dass etwas verloren geht. Ihre Körper sind gewöhnliche 3D-Gruppen auf der Registerkarte {{ui:3D}}. Ist RLT eingeschaltet, sind die Stränge wieder Kanalstränge.
