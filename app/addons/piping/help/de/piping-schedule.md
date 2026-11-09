---
title: Rohrleitungen: die Rohr- und Formstückliste
summary: Rohre nach Werkstoff und Größe mit Länge und Stahlgewicht, jedes Formstück und Ventil und die Höhen jedes Strangs – in der Zeichnung, als CSV oder in TakeoffCraft.
keywords: Liste, Rohrliste, Formstücke, Ventile, Länge, Gewicht, csv, takeoffcraft, Mengenermittlung, Paket, Mengen
from: c852343a
---

## Eine Tabelle in der Zeichnung

{{cmd:PIPESCHED}} eingeben; die Befehlszeile nennt die Summen und alle Abflüsse, die zu flach sind; klicken Sie dort, wo die Tabelle hin soll. Sie listet Rohre nach Werkstoff, Klasse und Größe mit ihrer Länge (und ihrem Gewicht bei Stahl) auf, dann jedes Formstück und Ventil nach Art und Größe mit der Anzahl und einer Summe. Sie aktualisiert sich selbst, wenn sich die Stränge ändern, im selben Rückgängig-Schritt.

Die Rohrlänge wird von Mitte zu Mitte durch die Formstücke entlang des Gefälles gemessen. Das Gewicht von Stahl ist das Gewicht mit glatten Enden nach ASME B36.10M: 10.69 × (D − t) × t lb pro ft (0.0246615 × (D − t) × t kg pro m), also wiegen 20 ft 2 in Schedule 40 73.1 lb.

## Eine CSV-Datei

{{cmd:EXPORT}} › {{ui:Rohrliste (CSV)}} schreibt die Rohre (Werkstoff, Größe, Länge, Gewicht), die Formstücke und Ventile (Anzahl) und jeden Strang (Kennzeichnung, System, Werkstoff, Länge, seine Höhe an beiden Enden und sein Gefälle).

## In TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Rohre für TakeoffCraft (PDF mit der Mengenermittlung darin)}} plottet den Grundriss auf ein Blatt in einem Standardmaßstab und legt die Mengenermittlung in die PDF-Datei. Öffnen Sie sie in TakeoffCraft: je eine Längenposition pro Rohrgröße mit einer Markierung entlang jedes Abschnitts der Mittellinie (Stränge mit Gefälle entlang ihres Gefälles gemessen), je eine Stückposition pro Formstück und pro Ventil mit einer Markierung an seiner Stelle, jeweils mit ihrer CSI-MasterFormat-Nummer nach System; der Baustein für Stahlrohr trägt sein Gewicht. Keine Einheitspreise: die legen Sie fest.
- {{cmd:EXPORT}} › {{ui:Rohrbausteine für TakeoffCraft (Paket)}} schreibt dieselben Positionen ohne Mengen als Paket für {{ui:Bibliothek}} › {{ui:Gewerke-Pakete}} › {{ui:Paketdatei öffnen}}.
