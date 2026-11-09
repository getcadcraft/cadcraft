---
title: RLT: Kanalstränge zeichnen
summary: Rechteckige, runde und flachovale Kanalstränge auf ihrer Mittellinie zeichnen; Bögen, Übergänge, T-Stücke, Abzweigstücke und Seitenabzweige entstehen von selbst.
keywords: Kanal, Strang, Mittellinie, Bogen, Radiusbogen, Gehrungsbogen, Übergang, Reduzierung, T-Stück, Abzweigstück, Seitenabzweig, Abzweig, Kanalunterkante, Höhe
from: 56124011
---

## Einen Strang zeichnen

Geben Sie {{cmd:DUCT}} ein und klicken Sie auf die Punkte der Mittellinie des Strangs. Während Sie klicken, ändern diese Optionen, was danach kommt:

- {{ui:Form}} — rechteckig, rund oder flachoval (ein flachovaler Kanal liegt mit seinen flachen Seiten oben und unten).
- {{ui:Größe}} — Breite × Höhe (`24x12`, `600x300`) oder ein Durchmesser (`14`). Die folgenden Abschnitte übernehmen sie; eine Größenänderung ergibt einen Übergang.
- {{ui:Volumenstrom}} — der Volumenstrom des Abschnitts; das Add-on bemisst ihn nach gleicher Reibung (siehe [Kanäle bemessen](topic:hvac-sizing)).
- {{ui:Höhe}} — die Kanalunterkante vor dem ersten Punkt (9 ft oder 2700 mm, sofern Sie das nicht in {{ui:Einstellungen}} ändern).
- {{ui:System}} — Zuluft, Umluft, Fortluft, Außenluft oder Sonstiges. Jedes hat seinen eigenen Layer (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) und seine eigene Farbe auf der Registerkarte {{ui:3D}}.
- {{ui:Kennzeichen}} — ein Name wie `S-1`, den die Kanalliste und die Registerkarte {{ui:3D}} verwenden.
- {{ui:Rückgängig}} — nimmt den letzten Punkt zurück.

Ein Strang hat höchstens 100 Punkte; für mehr beginnen Sie einen neuen Strang an dessen Ende.

## Die Formstücke, die er erzeugt

- **Bögen** an jeder Richtungsänderung. Der Mittellinienradius eines Radiusbogens ist die Breite des Kanals mal dem Radiusverhältnis des Strangs (üblicherweise 1 bei rechteckig, 1.5 bei rund und flachoval; ändern Sie es in {{ui:Eigenschaften}}). Ein Gehrungsbogen hat einen quadratischen Hals und eine Gehrungslinie; wählen Sie ihn in {{ui:Einstellungen}} oder {{ui:Eigenschaften}}.
- **Übergänge** dort, wo sich Größe oder Form ändert, direkt nach der Ecke (nach ihrem Bogen). Jede Seite neigt sich höchstens um 15° (ein Standardwert des Add-ons, kein Normwert), und keiner ist kürzer als 6 in oder 150 mm. Rund auf rund heißt Reduzierung. Die Unterseite bleibt eben; die Oberseite ist abgesetzt.
- **Abzweige**: Beginnen Sie einen Strang innerhalb eines anderen oder enden Sie ihn innerhalb eines anderen, dann rückt der Punkt auf die Mittellinie dieses Strangs. Der Abzweig wird bis zur Seite des Hauptstrangs zurückgeschnitten, erhält einen Kragen von 2 in oder 50 mm, und der Hauptstrang erhält dort eine Öffnung. Ein runder oder flachovaler Abzweig ist ein Abzweigstück; ein rechteckiger ist ein T-Stück, wenn er rechtwinklig auf den Hauptstrang trifft (innerhalb 15°), und sonst ein Seitenabzweig.

## Einen Strang ändern

- Ziehen Sie den Griff eines Punkts, um ihn zu verschieben; die Formstücke folgen.
- {{ui:Eigenschaften}} › {{ui:Kanalstrang}}: Kennzeichen, System, Form, Größe (der ganze Strang), Kanalunterkante, Bögen, das Radiusverhältnis, Material und Größenbeschriftungen.
- {{cmd:DUCTSIZE}}: Wählen Sie einen Abschnitt und bemessen Sie ihn nach seinem Volumenstrom, geben Sie eine Größe ein oder ändern Sie seine Form — für diesen Abschnitt oder den ganzen Strang.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} und {{cmd:ERASE}} funktionieren wie bei jedem Objekt. Eine Kopie erhält eine eigene Kennung. Ein Abzweig, dessen Hauptstrang wegbewegt wird, ist nicht mehr verbunden: Zeichnen Sie ihn erneut an den Hauptstrang.
