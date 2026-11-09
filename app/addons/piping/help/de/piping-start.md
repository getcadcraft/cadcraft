---
title: Rohrleitungen: Erste Schritte
summary: Was das Add-on Rohrleitungen in CadCraft macht, wie Sie es einschalten und wie Rohrleitungen in einer gewöhnlichen DWG- oder DXF-Datei erhalten bleiben.
keywords: Rohrleitungen, Rohr, Add-on, Sanitär, Maschinenbau, Stahl, Kupfer, PVC, PEX, Ventil, P&ID, Liste, Entwässerung
from: 1048242c
---

## Was es ist

Rohrleitungen ist ein Add-on für CadCraft, das mit CadCraft kommt und kostenlos ist. Sie klicken auf die Mittellinie eines Rohrstrangs, und es zeichnet das Rohr in seiner wirklichen Größe – Stahl, Kupfer, PVC oder PEX, nach Nennweite und Schedule bzw. Typ aus den öffentlichen Normen – mit seinen Bögen, Reduzierstücken und T-Stücken, den Ventilen, die Sie daran setzen, einem Gefälle für Abflüsse, einem Volumenkörper auf der Registerkarte {{ui:3D}} und einer Zeile in der Rohr- und Formstückliste. Ein Symbolsatz im P&ID-Stil ist dabei.

Es ist ausgeschaltet, bis Sie es einschalten: {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Add-ons}} › {{ui:Rohrleitungen}}. Die Werkzeuge stehen im Bereich {{ui:Rohrleitungen}} des rechten Bereichs als Befehle (unten) und, wenn Sie sie unter {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Rohrleitungen}} anfordern, als Gruppe am Ende der Symbolleiste.

Eine Zeichnung in Zoll oder Fuß benennt Größen nach NPS (`2"`) und misst in Fuß; jede andere Zeichnung benennt Stahl und PVC nach DN (`DN50`), Kupfer und PEX nach ihrer Nennweite und dem Außendurchmesser in Millimetern und misst in Metern.

## Ihr erster Rohrstrang

1. {{cmd:PIPE}} eingeben. {{ui:M}} für das Material, {{ui:Z}} und eine Größe (`2`, `1-1/2`, `DN50`).
2. Klicken Sie auf die Punkte des Strangs. Jede Ecke bekommt einen Bogen. Zum Beenden Enter drücken.
3. Um abzuzweigen, beginnen Sie den nächsten Strang auf dem ersten: Der Klick springt auf dessen Mittellinie, und dort entsteht ein T-Stück.
4. {{cmd:VALVE}} eingeben und auf einen Strang klicken, um ein Ventil darauf zu setzen.
5. {{cmd:PIPESCHED}} eingeben und dort klicken, wo die Liste hin soll.

## Dateien öffnen überall

Ein Rohrstrang wird als Blockreferenz mit seiner Zeichnung darin gespeichert, und seine Daten bleiben darin unter dem Anwendungsnamen `CC_PIPING` erhalten; ebenso ein Symbol. Rohrleitungen, als DWG oder DXF gespeichert, öffnen sich in jedem CAD-Programm so, wie gezeichnet, und in CadCraft ohne das Add-on ohne Verlust. Ihre Volumenkörper sind gewöhnliche 3D-Gruppen auf der Registerkarte {{ui:3D}}.
