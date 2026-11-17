---
title: Texthöhe der Bemaßung ändern
summary: Machen Sie den Bemaßungstext größer oder kleiner, für neue Bemaßungen und für die, die bereits in der Zeichnung sind.
keywords: Bemaßungstext Größe, dimension text size, Texthöhe, text height, dimtxt, dimscale, Bemaßungstext zu klein, Bemaßungstext zu groß, größerer Bemaßungstext, dimension text too small, dimension text too big, bigger dimension text, Beschriftungsmaßstab, annotation scale
from: 30e40633
---

## Für die Bemaßungen, die Sie als Nächstes erstellen

1. Drücken Sie {{key:Esc}}, damit nichts gewählt ist: Der rechte Bereich zeigt {{ui:Current settings}}.
2. Scrollen Sie den Bereich nach unten zu {{ui:New dimensions}}. Geben Sie die Höhe, die Sie auf dem Papier wollen, in {{ui:Text height}} ein (zum Beispiel `2.5` für 2.5 mm oder `3/32"`) und drücken Sie {{key:Enter}}.
3. Stellen Sie {{ui:Overall scale}} auf den Plotmaßstab ein (`50` für 1:50, `48` für 1/4" = 1'-0"): Jede Größe wird damit multipliziert.

In der Befehlszeile legt {{cmd:DIMTXT}} die Höhe fest und {{cmd:DIMSCALE}} den Gesamtmaßstab.

## Für Bemaßungen, die bereits in der Zeichnung sind

1. Wählen Sie die Bemaßungen (eine oder mehrere: wählen Sie {{ui:Dimension}} in der Liste oben in {{ui:Properties}}).
2. Geben Sie die neue {{ui:Text height}} ein (im Abschnitt {{ui:Text}}) oder einen neuen {{ui:Overall scale}} (im Abschnitt {{ui:Fit}} weiter unten) und drücken Sie {{key:Enter}}.

Sie werden sofort neu gezeichnet, in einem Rückgängig-Schritt. Eine Bemaßung aus der Datei eines anderen Programms wird im Stil von CadCraft neu gezeichnet, sobald Sie sie ändern.

:::tip
Text, der auf dem Bildschirm richtig aussieht, aber auf dem geplotteten Blatt winzig ist, bedeutet meist, dass der Gesamtmaßstab 1 ist: Stellen Sie ihn auf den Maßstab des Blatts ein.
:::

Alle Einstellungen finden Sie unter [Bemaßungsgrößen, Dezimalstellen und Maßstab festlegen](topic:dimension-settings).
