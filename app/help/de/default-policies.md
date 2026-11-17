---
title: "Standardrichtlinien: festlegen, womit eine neue Zeichnung beginnt"
summary: Legen Sie einmal fest, mit welchen Einheiten, welchem Längenformat, welcher Genauigkeit, welcher Texthöhe und welchem Blattpapier eine neue Zeichnung beginnt, für metrische und für imperiale Arbeit, und teilen Sie die Richtlinien im Büro als kleine Datei.
keywords: Standard, Standards, Standardrichtlinien, Richtlinie, Büro-Standard, Büro-Vorgabe, Vorlage, neue Zeichnung, insunits, Längenformat, Architektur, Genauigkeit, luprec, Texthöhe, Blattpapier, A1, teilen, exportieren, importieren, json
from: 7b80fd13
---

## Was Sie tun

Sagen Sie CadCraft, womit eine neue Zeichnung beginnen soll, damit niemand im Büro {{cmd:UNITS}} aufrufen und jedes Mal dieselben Dinge ändern muss. Dies ist ein Add-on: Es ist aus, bis Sie es einschalten, und eine Richtlinie, die Sie nicht festlegen, bleibt genau bei CadCraft-eigener Vorgabe.

:::note
Diese sind Vorgaben für **neue** Zeichnungen und **neue** Blätter. Eine Zeichnung, die Sie bereits begonnen haben, wird nicht geändert, ebenso wenig eine, die Sie öffnen.
:::

## Schritte

1. Öffnen Sie die Einstellungen, gehen zu {{ui:Add-ons}} und schalten {{ui:Standardrichtlinien}} ein.
2. Öffnen Sie in den Einstellungen die Registerkarte **CadCraft** und wählen {{ui:Standardrichtlinien}} in der Liste links.
3. Legen Sie die Richtlinien fest, die Sie wollen. Jede beginnt mit einem **CadCraft-eigenen** Wert. Eine Richtlinie mit einem Feld **Metrisch** und einem Feld **Imperial** nimmt für jede Art von Zeichnung einen Wert; füllen Sie nur die aus, die Sie brauchen.
4. Es gibt keine Schaltfläche Speichern: Jede Änderung wird gespeichert, sobald Sie sie vornehmen.
5. Beginnen Sie eine neue Zeichnung. Sie hat die Einheiten, das Längenformat, die Genauigkeit und die Texthöhe, die Sie festgelegt haben, und ihr erstes neues Blatt liegt auf dem Papier, das Sie gewählt haben.

## Die Richtlinien

- **Einheiten einer neuen Zeichnung**: keine, Millimeter, Zentimeter, Meter, Zoll oder Fuß.
- **Längenformat** und **Längengenauigkeit**: was der Befehl UNITS für eine neue Zeichnung setzt.
- **Höhe neuen Textes**, in Zeichnungseinheiten.
- **Papier eines neuen Blatts**: das Papier, das {{ui:Neues Blatt}} verwendet.
- **Beschriftungsgrößen auf Papier** (Einstellungen › Global › Standardrichtlinien): die Höhen des Büros in Millimetern, wie gedruckt. CadCraft verwendet die für Notizen und Beschriftungen: {{cmd:ANNOSCALE}} setzt die Höhe, mit der neuer Text beginnt, auf diese Höhe im Beschriftungsmaßstab. Siehe [Einheiten, Papiere und Maßstäbe](topic:units-papers-scales#annotate-by-scale).

Eine Zeichnung in Zoll oder Fuß verwendet die imperialen Werte; jede andere Zeichnung die metrischen. Eine Zeichnung ohne Einheiten verwendet das Einheitensystem, das in den Einstellungen › Global › Standardrichtlinien gesetzt ist, oder Metrisch, wenn keines gesetzt ist.

## Im Büro teilen

1. Öffnen Sie in den Einstellungen die Registerkarte **Global** und wählen {{ui:Standardrichtlinien}}.
2. Klicken Sie auf {{ui:In Datei speichern}}. Sie erhalten eine kleine Datei, die auf `.ccdefaults.json` endet.
3. Auf einem anderen Computer schalten Sie das Add-on ein, öffnen denselben Ort und klicken auf {{ui:Aus Datei laden}}. Die Richtlinien der Datei ersetzen die auf diesem Computer.

Eine Datei enthält die Richtlinien aller CadCraft-Apps, daher funktioniert dieselbe Datei auch in BimCraft.

## Gut zu wissen

- Es gibt keine Richtlinie für den Maßstab eines Blatts: Die Ansicht eines neuen Blatts wird auf die Zeichnung eingepasst, und den Maßstab setzen Sie auf dem Blatt.
- Es gibt keine Richtlinie für einen Bemaßungsstil: Eine neue Zeichnung hat keine benannten Bemaßungsstile. Richten Sie Bemaßungen mit DIMSTYLE ein, oder beginnen Sie mit einer Zeichnung, die Ihre hat.
- Die Datei ist einfaches, offenes JSON. Eine Richtlinie, die die Datei nennt und diese Version nicht kennt, wird weggelassen und in der Meldung genannt; der Rest wird geladen.
- Richtlinien werden in diesem Browser gespeichert, nicht in der Zeichnung. Schalten Sie das Add-on aus, und alles ist wieder CadCraft-eigen.
