---
title: Rohrleitungen: Rohrstränge zeichnen
summary: Rohrstränge nach Werkstoff, Klasse und Nennweite zeichnen, einzeilig oder zweizeilig; Bögen, Reduzierstücke, T-Stücke und Y-Stücke entstehen von selbst.
keywords: Rohr, Strang, Mittellinie, NPS, DN, Schedule 40, Schedule 80, Typ K, Typ L, Typ M, Bogen, Reduzierstück, T-Stück, Y-Stück, Abzweig, zweizeilig, einzeilig, Höhe
from: d0ed1b49
---

## Einen Strang zeichnen

{{cmd:PIPE}} eingeben und auf die Punkte der Mittellinie des Strangs klicken. Vor dem ersten Punkt können Sie ändern:

- {{ui:Material}} und {{ui:Klasse}} — Stahl Schedule 40 oder 80, Kupfer Typ K, L oder M, PVC Schedule 40 oder 80, PEX SDR 9 (siehe [Rohrgrößen und ihre Herkunft](topic:piping-tables)).
- {{ui:Größe}} — eine Nennweite: `2`, `1-1/2` (oder `1 1/2`, `1.5`) oder `DN50` in einer metrischen Zeichnung. Eine Größe, die für den Werkstoff nicht hergestellt wird, wird abgelehnt. Ändern Sie die Größe zwischen zwei Punkten, entsteht ein Reduzierstück.
- {{ui:System}} — Trinkwasser kalt, Warmwasser, Warmwasser-Rücklauf, Schmutzwasser, Lüftung, Regenwasser, gekühltes Wasser, Heizwarmwasser, Erdgas, Brandschutz oder Sonstiges. Jedes hat einen eigenen Layer, eine eigene Beschriftung und eine eigene 3D-Farbe.
- {{ui:Höhe}} — die Höhe der Mittellinie am Anfang.
- {{ui:Gefälle}} — für Abflüsse (siehe [Entwässerung und Gefälle](topic:piping-drainage)).
- {{ui:Linien}} — einzeilig (die Mittellinie mit Symbolen) oder zweizeilig (der Außendurchmesser des Rohrs maßstäblich).
- {{ui:Kennzeichen}} — ein Name wie `CW-1`, auf der Beschriftung angezeigt.

## Die Formstücke, die entstehen

- **Bögen** bei jeder Richtungsänderung: 90° und 45° nach Name, andere Winkel nach ihrem Winkel. Stahlbögen werden mit dem Langradius-Bogen nach ASME B16.9 gezeichnet (1.5 × die Größe ab 3/4 in); Bögen anderer Werkstoffe sind mit einem Außendurchmesser gezeichnet – eine Zeichenentscheidung, keine Abmessung eines Formstücks.
- **Reduzierstücke** dort, wo sich die Größe ändert, konzentrisch, direkt nach der Ecke.
- **T-Stücke**, wo ein Strang auf einem anderen beginnt oder endet: ein T-Stück, wenn er die Hauptleitung im rechten Winkel trifft (innerhalb von 15°), ein Reduzier-T-Stück, wenn er kleiner ist, ein Y-Stück bei einem Winkel.

## Einen Strang ändern

Ziehen Sie den Griff eines Punkts, um ihn zu verschieben. {{ui:Eigenschaften}} › {{ui:Rohrstrang}} enthält die Kennzeichnung, das System, Werkstoff und Klasse, die Größe (den ganzen Strang), Höhe, Gefälle und Linien und zeigt den Außen- und Innendurchmesser des Strangs. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} und {{cmd:ERASE}} funktionieren wie bei jedem Objekt.
