---
title: RLT: die Kanalliste
summary: Gerade Kanäle nach Größe und Material, jedes Formstück und die Blechfläche jedes Teils als Tabelle in der Zeichnung oder als CSV-Datei.
keywords: Liste, Kanalliste, Blech, Oberfläche, Quadratfuß, Formstücke, CSV, Mengen, Länge
from: a5764fca
---

## Eine Tabelle in der Zeichnung

Geben Sie {{cmd:DUCTSCHED}} ein. Die Befehlszeile nennt die Summen; klicken Sie dort, wo die Tabelle stehen soll (an ihrer oberen linken Ecke). Die Tabelle listet auf:

- **gerade Kanäle** nach Form, Größe und Material, mit ihrer Länge und Blechfläche;
- **Formstücke** — Bögen, Übergänge und Reduzierungen, T-Stücke, Abzweigstücke und Seitenabzweige — nach Art und Größe, mit Anzahl und ihrem Blech;
- eine Summe.

Die Tabelle aktualisiert sich selbst: Jede Änderung an einem Kanalstrang ändert sie im selben Schritt ({{cmd:UNDO}} nimmt beides zurück). Ihre Texthöhe stellen Sie in {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:RLT}} ein.

## So wird das Blech berechnet

- Gerader Kanal: sein Umfang × seine Länge. Ein 24 × 12 in großer Kanal, 10 ft lang, hat 6 ft × 10 ft = 60 ft².
- Bögen: der Umfang × die Mittellinienlänge. Bei einem Radiusbogen ist das exakt: Die beiden Wangen, der Fersenteil und der Hals ergeben zusammen genau das. Ein 90°-Bogen 24 × 12 in mit 24 in Radius hat 18.85 ft².
- Rechteckige Übergänge: ihre vier ebenen Seiten, jede exakt berechnet.
- Runde und gemischte Übergänge: der mittlere Umfang × die schräge Länge (exakt für eine zentrierte runde Reduzierung an beiden Enden, nahe genug für die übrigen).
- Abzweigstück oder T-Stück eines Abzweigs: sein Kragen, der Umfang des Abzweigs × 2 in (50 mm).

Nähte, Überlappungen und Verschnitt sind nicht enthalten: Fügen Sie sie in TakeoffCraft als Verschnitt hinzu oder nach der Regel Ihrer Werkstatt.

## Eine CSV-Datei

{{cmd:EXPORT}} › {{ui:Kanalliste (CSV)}} schreibt drei Tabellen: die geraden Kanäle (Form, Größe, Material, Länge, Umfang, Fläche), die Formstücke (Anzahl, Fläche je Stück, Fläche) und jeden Abschnitt (Kennzeichen, System, Größe, Länge, Volumenstrom, Geschwindigkeit, Reibung).

Um aus der Liste zu kalkulieren, siehe [Kanäle in TakeoffCraft](topic:hvac-takeoff).
