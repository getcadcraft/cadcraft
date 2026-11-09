---
title: Rohrleitungen: Entwässerung und Gefälle
summary: Einen Abfluss mit Gefälle versehen, sein Gefälle und seine Höhen einsehen und ihn mit dem kleinsten Gefälle der Installationsvorschrift vergleichen.
keywords: Gefälle, Entwässerung, Abfluss, Schmutzwasser, Regenwasser, Fall, Sohle, Höhe, Installationsvorschrift, ipc, 1/4 Zoll pro Fuß, Prozent
from: 651f0dfb
---

## Ein Strang mit Gefälle

{{cmd:PIPE}} › {{ui:Gefälle}} nimmt in einer Zeichnung in Zoll und Fuß Zoll pro Fuß (`1/4`, `1/8`, `0.125`) oder in einer metrischen Zeichnung einen Prozentwert (`2`, `1`); `0` bedeutet waagerecht. Der Strang fällt in der Richtung, in der Sie ihn zeichnen, ab der Höhe, die Sie an seinem Anfang angeben. Sein Grundriss zeigt das Gefälle und einen Fließpfeil; sein Volumenkörper auf der Registerkarte {{ui:3D}} fällt mit ihm; die Rohrstrangtabelle der Liste gibt seine Höhe an beiden Enden an.

Ein Schmutzwasser- oder Regenwasserabfluss, der ohne Gefälle gezeichnet wird, erhält das kleinste Gefälle, das der International Plumbing Code (2021, Tabelle 704.1) für seine größte Größe zulässt:

- 2-1/2 in und kleiner: 1/4 in pro ft (2 %);
- 3 bis 6 in: 1/8 in pro ft (1 %);
- 8 in und größer: 1/16 in pro ft (0.5 %).

Ein flacherer Abfluss wird von {{cmd:PIPE}} und {{cmd:PIPESCHED}} gemeldet. Ihre örtliche Vorschrift kann abweichen: Der Hinweis ist eine Erinnerung, keine Prüfung.

## Längen entlang des Gefälles

Die Länge eines Rohrstrangs mit Gefälle in der Liste – und in TakeoffCraft – wird entlang des Gefälles gemessen: 40 ft bei 1/8 in pro ft sind 40.002 ft Rohr und fallen 5 in.

Ändern Sie das Gefälle eines Rohrstrangs unter {{ui:Eigenschaften}} › {{ui:Rohrstrang}} › {{ui:Gefälle}}.
