---
title: Schrift und Größe von Text mit Textstilen festlegen
summary: Erstellen Sie benannte Textstile mit Schrift, Höhe, Breite und Neigung, legen Sie einen als aktuell für neuen Text fest, und ändern Sie einen Stil, um allen Text zu ändern, der ihn verwendet.
keywords: Textstil, Stil, STYLE, ST, TEXTSTYLE, -STYLE, Schrift, Texthöhe, Breitenfaktor, schräg, Neigung, Schrift ändern, Standardstil, Stil anwenden, DDSTYLE
from: bd5a4883
---

## Was Sie tun werden

Sie erstellen einen Textstil namens `Notes` mit eigener Schrift und Höhe, verwenden ihn für neuen Text und ändern den Stil später, sodass sich jede Notiz, die ihn verwendet, auf einmal ändert.

## Schritte

1. Geben Sie {{cmd:STYLE}} (`ST`) ein und drücken Sie {{key:Enter}}, oder klicken Sie auf {{ui:Textstil}} in der Symbolleiste {{ui:Zeichnen}}. Das Dialogfeld {{ui:Textstil}} listet die Stile der Zeichnung auf. Jede Zeichnung hat `Standard`.
2. Klicken Sie auf {{ui:Neu…}}, geben Sie `Notes` als Namen des neuen Stils ein und klicken Sie auf {{ui:OK}}. Die Statuszeile zeigt "Textstil Notes erstellt und als aktuell gesetzt."
3. Wählen oder geben Sie bei {{ui:Schrift}} einen Schriftnamen ein. Setzen Sie {{ui:Höhe (0 = jedes Mal abfragen)}} auf eine Zahl, etwa `2.5`, damit jeder neue Text diese Höhe erhält. Lassen Sie den Wert bei `0`, um jedes Mal gefragt zu werden.
4. Setzen Sie {{ui:Breitenfaktor}} und {{ui:Neigungswinkel (°)}}, wenn Sie schmalere, breitere oder schräge Buchstaben möchten. Die Musterzeile zeigt das Ergebnis.
5. Klicken Sie auf {{ui:Schließen}}. Zeichnen Sie Text mit {{cmd:TEXT}} oder {{cmd:MTEXT}}: Neuer Text übernimmt den aktuellen Stil.
6. Um einen bereits erstellten Stil zu verwenden, öffnen Sie das Dialogfeld erneut, wählen Sie ihn in der Liste und klicken Sie auf {{ui:Aktuell setzen}}.
7. Um einen Stil auf bereits gezeichneten Text anzuwenden, wählen Sie den Text aus, öffnen Sie das Dialogfeld, wählen Sie den Stil und klicken Sie auf {{ui:Auf markierten Text übernehmen}}.

## Einen Stil später ändern

Ändern Sie Schrift, Höhe, Breite oder Neigung eines Stils im Dialogfeld, dann folgt jeder Text, der ihn verwendet, in einem einzigen Rückgängigschritt ({{key:Mod+Z}}). Die Statuszeile zeigt, wie viele Texte mitgezogen wurden.

## Hinweise

- {{ui:Löschen}} lehnt `Standard` ab sowie einen Stil, den noch Text verwendet. Ändern Sie diesen Text zuerst auf einen anderen Stil.
- Die Stile werden in der STYLE-Tabelle der Zeichnung gespeichert, daher behalten DXF- und DWG-Dateien sie.
- In der Befehlszeile tut `-STYLE` dasselbe mit Optionen (Aktuell (C), Neu, Schrift (F), Höhe, Breite (W), Neigung (O), Löschen (D), Liste (L)).
- Eine Schrift, die auf dem Computer, der die Zeichnung liest, nicht vorhanden ist, wird in einer anderen Schriftart angezeigt.
