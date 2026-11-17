---
title: Skizzen zu anderen Bauteil-Modellierern und zurück verschieben
summary: Schreiben Sie ein Makro, das Ihre Zeichnung als eine Skizze mit Abhängigkeiten in einem Bauteil-Modellierer neu aufbaut, und öffnen Sie eine daraus exportierte Skizze.
keywords: Skizze, Makro, swb, vba, Export, Bauteil-Modellierer, globale Variablen, Gleichungen, Beziehungen, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks steht auf den Systemen, auf denen CadCraft gebaut wird, nicht zur Verfügung. Daher wurde keine der beiden Richtungen bisher in SolidWorks getestet. Was CadCraft schreibt, wird nur auf die Struktur geprüft. Prüfen Sie das Ergebnis, bevor Sie sich darauf verlassen.
:::

## Eine Zeichnung als Skizze senden

1. Legen Sie die Abhängigkeiten fest und bemaßen Sie die Zeichnung (siehe [Eine Zeichnung mit Abhängigkeiten versehen](topic:constraints)).
2. Öffnen Sie in der Gruppe {{ui:Parametrisch}} {{ui:Mehr}} und wählen Sie {{ui:Makro für SolidWorks (.swb)}}, oder geben Sie {{cmd:SWBOUT}} ein.

   Eine Datei mit dem Namen der Zeichnung und der Endung `.swb` wird heruntergeladen.
3. Wählen Sie in SolidWorks **Extras > Makro > Ausführen** und wählen Sie diese Datei.

Das Makro erstellt ein neues Bauteil aus Ihrer Standardbauteilvorlage, öffnet eine Skizze auf der Vorderen Ebene und zeichnet darin die Linien, Kreise, Bögen, Punkte und Polylinien des Modells, mit:

- Ihren Abhängigkeiten als Skizzenbeziehungen,
- Ihren bemaßenden Abhängigkeiten als Bemaßungen mit denselben Namen (`d1@Sketch1`),
- Ihren eigenen Parametern als globale Variablen,
- jedem Ausdruck als Gleichung.

Das Bauteil verwendet die Längeneinheit der Zeichnung. Text, Blöcke, Schraffuren, Bemaßungen und Blätter gehören nicht zur Skizze; der Verlauf listet auf, was weggelassen wurde. Ausdrücke ohne Gleichungsform dort (`if`, `min`, `max`, `round`, `%` und einige andere) werden als aktueller Wert geschrieben, und der Verlauf sagt, welche das sind. Alles, was das Makro nicht erstellen kann, wird in eine Protokolldatei neben dem Makro geschrieben, und am Ende fasst eine Meldung zusammen.

## Eine Skizze aus einem Bauteil öffnen

1. Führen Sie in SolidWorks das CadCraft-Exportmakro auf dem Bauteil aus (laden Sie es in der App PartCraft herunter: Datei > Exportieren > Makro zum Zurückholen von Bauteilen exportieren). Es schreibt eine `.json`-Datei im Format `cadcraft-sw-export` neben das Bauteil.
2. Wählen Sie in CadCraft {{ui:Öffnen}} und wählen Sie diese `.json`-Datei.
3. Wenn das Bauteil mehrere Skizzen hat, wählen Sie eine davon aus.

Die Skizze wird zur Zeichnung, in Millimetern: ihre Linien, Bögen, Kreise und Punkte, ihre Beziehungen als Abhängigkeiten, ihre Bemaßungen als bemaßende Abhängigkeiten mit den ursprünglichen Namen (`D1`, `D2` …), ihre globalen Variablen als Parameter und die Gleichungen ihrer Bemaßungen als deren Ausdrücke. Der Verlauf listet auf, was nicht übernommen wurde, etwa Beziehungen, die CadCraft nicht kennt. Wo die Skizze im Bauteil liegt, wird nicht gespeichert: Sie wird flach gezeichnet, so wie sie auf ihrer Ebene zu sehen ist.
