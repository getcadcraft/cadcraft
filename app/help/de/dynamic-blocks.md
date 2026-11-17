---
title: Dynamische Blöcke
summary: Was CadCraft mit dynamischen Blöcken in einer DWG macht: Sie behalten ihre echten Namen, zeigen den gespeicherten Zustand, wechseln Sichtbarkeitszustände, zeigen ihre übrigen Werte und bleiben beim Speichern dynamisch.
keywords: dynamischer Block, dynamische Blöcke, Sichtbarkeit, Sichtbarkeitszustand, spiegeln, strecken, Nachschlagen, Parameter, benutzerdefiniert, Blockeigenschaften, *U-Blöcke, dynamisch
from: 26b6aa80
---

## Was funktioniert

Eine DWG mit dynamischen Blöcken wird mit folgendem Funktionsumfang geöffnet:

- **Ihre echten Namen.** Ein dynamischer Block wird im Panel {{ui:Blocks}} unter seinem eigenen Namen („Receptacle“, „Sink“) aufgeführt, nicht als namenloser `*U`-Block.
- **Der Zustand, in dem sie gespeichert wurden.** Jede Referenz zeigt genau das, was das andere Programm zeigte: den Sichtbarkeitszustand, auf den sie gesetzt war, gestreckt oder gespiegelt, wie sie gespeichert wurde.
- **Den Sichtbarkeitszustand wechseln.** Wählen Sie eine Referenz (oder mehrere desselben Blocks), öffnen Sie {{ui:Properties}} und wählen Sie im Abschnitt {{ui:Custom}} in der Liste {{ui:Visibility}} einen anderen Zustand. Die Referenz zeigt diesen Zustand sofort, ebenso ihre Attribute: Jene, die der Zustand ausblendet, verschwinden; jene, die er zeigt, erscheinen mit ihren Werten. Eine Referenz behält jeden Wert, sodass nichts leer zurückkommt; {{ui:Properties}} listet die ausgeblendeten mit „hidden“ markiert auf. {{key:Mod+Z}} stellt den alten Zustand mit einem Schritt wieder her.
- **Griffe.** Ein ausgewählter dynamischer Block zeigt seine eigenen Griffe dort, wo seine Parameter liegen: ein kleines Dreieck für den Sichtbarkeitszustand (klicken Sie darauf für die Liste der Zustände), Pfeile an den Enden eines Abstands, ein Doppelpfeil für eine Spiegelung. Heute wirkt nur der Sichtbarkeitsgriff; die anderen melden das in der Statusleiste.
- **Die übrigen Werte, nur lesbar.** Unter der Sichtbarkeitsliste zeigt {{ui:Custom}} außerdem die Abstände, Ausrichtungswinkel, Spiegelzustände und Punkte des Blocks, wie die Zeichnung sie hält.
- **Sichtbarkeitszustände bearbeiten.** Öffnen Sie den Block mit {{cmd:BEDIT}}: Der Editor zeigt einen Zustand, der in der Leiste über der Zeichnung benannt ist (wählen Sie dort einen anderen). Geben Sie {{cmd:BVSTATE}} ein, um zu wechseln, einen Zustand hinzuzufügen (alles ausblenden, alles zeigen oder das Sichtbare behalten), umzubenennen oder zu löschen; {{cmd:BVHIDE}} blendet ausgewählte Objekte im angezeigten Zustand aus; {{cmd:BVSHOW}} zeigt die ausgeblendeten abgeblendet an, damit Sie diejenigen anklicken können, die zurückkehren sollen. Speichern Sie den Block: Referenzen, die auf einen umbenannten Zustand gesetzt sind, behalten ihn unter dem neuen Namen, und jene, die auf einen gelöschten Zustand gesetzt sind, zeigen den ersten Zustand.
- **Bleibt dynamisch.** Als DWG in der Version gespeichert, in der die Zeichnung ankam, bleiben die Blöcke dynamisch, mit dem Zustand, den Sie gewählt haben: Das andere Programm öffnet sie als dieselben dynamischen Blöcke. Bearbeitete Sichtbarkeitszustände werden ebenfalls gespeichert: ihre neuen Namen, die hinzugefügten Zustände und was jeder davon zeigt.

## Was nur gelesen wird oder noch nicht vorhanden ist

| Noch nicht vorhanden | Stattdessen heute |
|---|---|
| Ändern von Abständen, Winkeln oder Spiegelungen (Strecken-, Verschieben-, Spiegelaktionen) | Sie werden in {{ui:Custom}} nur gelesen; bearbeiten Sie sie im Programm, das den Block erstellt hat. |
| Nachschlag-, XY-, Dreh- und Polarparameter | Nicht gelesen: Die Referenz wird wie gespeichert angezeigt. |
| Ziehen der Griffe für Abstand, Spiegelung und Punkt | Sie zeigen, wo die Parameter liegen; der Sichtbarkeitsgriff und die Liste {{ui:Visibility}} in den Eigenschaften wechseln die Zustände. |
| Dynamische Blöcke erstellen (Parameter oder Sichtbarkeitszustände zu einem Block ohne solche hinzufügen) | In CadCraft erstellte Blöcke sind einfache Blöcke; {{cmd:BPARAMETER}} weist darauf hin. |
| Objekte eines Blocks mit Sichtbarkeitszuständen im Blockeditor hinzufügen oder löschen | Der Block wird dann als einfacher Block gespeichert (der Editor sagt es beim Schließen). |
| Dynamisch bleiben in einer anderen DWG-Version oder in DXF | Sie werden als einfache Blöcke gespeichert, die den gewählten Zustand zeigen, und das Speichern meldet dies. |

:::note
Das Verschieben oder Ändern von Objekten in {{cmd:BEDIT}} hält einen Block mit Sichtbarkeitszuständen dynamisch. Ein Block ohne Zustände oder einer, dessen Objekte im Editor hinzugefügt oder gelöscht wurden, wird zu einem einfachen Block.
:::
