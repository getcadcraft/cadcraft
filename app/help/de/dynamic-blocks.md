---
title: Dynamische Blöcke
summary: Was CadCraft mit dynamischen Blöcken in einer DWG macht: sie behalten ihre echten Namen, zeigen den Zustand, in dem sie gespeichert wurden, wechseln Sichtbarkeitszustände, zeigen ihre anderen Werte und bleiben beim Speichern dynamisch.
keywords: dynamischer Block, dynamische Blöcke, Sichtbarkeit, Sichtbarkeitszustand, spiegeln, strecken, Nachschlagen, Parameter, benutzerdefiniert, Blockeigenschaften, *U-Blöcke, dynamisch
from: dea2ee7c
---

## Was funktioniert

Eine DWG mit dynamischen Blöcken öffnet sich mit diesen Funktionen:

- **Ihre echten Namen.** Ein dynamischer Block wird im Bereich {{ui:Blöcke}} unter seinem eigenen Namen aufgelistet („Steckdose“, „Spüle“), nicht als namenloser Block `*U`.
- **Der Zustand, in dem sie gespeichert wurden.** Jede Referenz zeigt genau das, was das andere Programm zeigte: den Sichtbarkeitszustand, auf den sie gesetzt war, gestreckt oder gespiegelt, wie sie gespeichert wurde.
- **Wechsel des Sichtbarkeitszustands.** Wählen Sie eine Referenz (oder mehrere desselben Blocks), öffnen Sie {{ui:Eigenschaften}} und wählen Sie im Abschnitt {{ui:Benutzerdefiniert}} in der Liste {{ui:Sichtbarkeit}} einen anderen Zustand. Die Referenz zeigt diesen Zustand sofort, ihre Attribute ebenso: Die, die der Zustand ausblendet, verschwinden, die, die er zeigt, erscheinen mit ihren Werten. Eine Referenz behält jeden Wert, damit nichts leer wird; {{ui:Eigenschaften}} listet die ausgeblendeten mit der Markierung „ausgeblendet“. {{key:Mod+Z}} stellt den alten Zustand in einem Schritt wieder her.
- **Griffe.** Ein gewählter dynamischer Block zeigt seine eigenen Griffe dort, wo seine Parameter liegen: ein kleines Dreieck für den Sichtbarkeitszustand (klicken Sie darauf für die Liste der Zustände), Pfeile an den Enden eines Abstands, ein Doppelpfeil für eine Spiegelung. Heute wirkt nur der Sichtbarkeitsgriff; die anderen melden dies in der Statusleiste.
- **Die anderen Werte, nur lesend.** Unter der Sichtbarkeitsliste zeigt {{ui:Benutzerdefiniert}} auch die Abstände, Ausrichtungswinkel, Spiegelzustände und Punkte des Blocks, so wie die Zeichnung sie hält.
- **Sichtbarkeitszustände bearbeiten.** Öffnen Sie den Block mit {{cmd:BEDIT}}: Der Editor zeigt einen Zustand, der in der Leiste über der Zeichnung benannt ist (wählen Sie dort einen anderen). Geben Sie {{cmd:BVSTATE}} ein, um zu wechseln, einen Zustand hinzuzufügen (alles ausblenden, alles zeigen oder das Sichtbare behalten), umzubenennen oder zu löschen; {{cmd:BVHIDE}} blendet gewählte Objekte im sichtbaren Zustand aus; {{cmd:BVSHOW}} zeigt die ausgeblendeten verblasst, damit Sie die anklicken können, die zurückkommen sollen. Speichern Sie den Block: Referenzen, die auf einen umbenannten Zustand zeigen, behalten ihn unter dem neuen Namen, und die auf einen gelöschten Zustand zeigen, zeigen den ersten Zustand.
- **Bleibt dynamisch.** Gespeichert als DWG in der Version, in der die Zeichnung kam, bleiben die Blöcke dynamisch, mit dem Zustand, den Sie gewählt haben: Das andere Programm öffnet sie als dieselben dynamischen Blöcke. Bearbeitete Sichtbarkeitszustände werden ebenfalls gespeichert: ihre neuen Namen, die hinzugefügten Zustände und was jeder zeigt.

## Was nur lesbar ist oder noch nicht vorhanden ist

| Noch nicht vorhanden | Stattdessen, heute |
|---|---|
| Ändern von Abständen, Winkeln oder Spiegelungen (Strecken-, Verschieben- und Spiegelaktionen) | Sie werden in {{ui:Benutzerdefiniert}} nur lesend angezeigt; bearbeiten Sie sie im Programm, das den Block erstellt hat. |
| Nachschlag-, XY-, Dreh- und Polarparameter | Noch nicht gelesen: die Referenz wird wie gespeichert angezeigt. |
| Ziehen der Griffe für Abstand, Spiegelung und Punkte | Sie zeigen, wo die Parameter liegen; der Sichtbarkeitsgriff und die Liste {{ui:Sichtbarkeit}} in den Eigenschaften wechseln die Zustände. |
| Dynamische Blöcke der Art des anderen Programms erstellen (strecken, spiegeln, nachschlagen) | Blöcke, die Sie in CadCraft erstellen, sind einfache Blöcke; {{cmd:BPARAMETER}} sagt das. Eigene Parameter und mehrere Sichtbarkeitsparameter befinden sich im Parameter-Manager (siehe „Eigene Parameter und Sichtbarkeitszustände“ unten). |
| Objekte eines Blocks mit Sichtbarkeitszuständen im Blockeditor hinzufügen oder löschen | Der Block wird dann als einfacher Block gespeichert (der Editor sagt es beim Schließen). |
| Dynamisch bleiben in einer anderen DWG-Version oder in DXF | Sie werden als einfache Blöcke gespeichert, die den gewählten Zustand zeigen, und das Speichern meldet es. |

:::note
Das Verschieben oder Ändern von Objekten in {{cmd:BEDIT}} hält einen Block mit Sichtbarkeitszuständen dynamisch. Ein Block ohne Zustände oder einer, dessen Objekte im Editor hinzugefügt oder gelöscht wurden, wird zu einem einfachen Block.
:::

## Eigene Parameter und Sichtbarkeitszustände

Ein Block, den Sie in CadCraft erstellen, kann eigene Parameter und **mehrere** Sichtbarkeitsparameter tragen, jeder mit eigenen Zuständen. Geben Sie {{cmd:BPARAMS}} (oder `BPM`) ein, um den **Parameter-Manager** für den Block zu öffnen, den Sie in {{cmd:BEDIT}} bearbeiten, für den Block der gewählten Referenz oder für den Block, den Sie benennen.

- **Parameter**: ein Name, ein Typ (Zahl, Länge, Winkel, Anzahl, Ja/Nein) und ein Wert oder eine Formel über andere Parameter (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Ergibt}} zeigt das Ergebnis. Eine Formel, die nicht funktioniert, oder ein Wert, der nicht zu seinem Typ passt (eine Anzahl von 1,5), wird abgelehnt, und der Manager sagt warum; sonst ändert sich nichts.
- **Sichtbarkeitsparameter**: {{ui:Sichtbarkeitsparameter hinzufügen}} erstellt einen mit einem ersten Zustand. Jeder Zustand kann umbenannt, entfernt (der letzte bleibt) oder mit einer Zahl „zeigt, wenn“ versehen werden. Eine Formel wählt den Zustand aus den Parametern (der Zustand, dessen Zahl passt, sonst der Zustand an dieser Stelle der Liste); ohne Formel wählt jede Referenz selbst.
- **Objekte in einen Zustand legen**: Wählen Sie im Blockeditor die Objekte, geben Sie {{cmd:BPARAMS}} ein und klicken Sie auf {{ui:Ausgewählte Objekte hier ablegen}} beim Zustand. Objekte, die kein Sichtbarkeitsparameter aufführt, werden immer angezeigt.
- **Diese Referenz**: Gestartet auf einer gewählten Referenz zeigt der Manager auch deren eigene Werte und Zustände.

Außerhalb des Blockeditors ist jede Änderung ein Rückgängig-Schritt. Im Blockeditor gehören die Änderungen dem Editor: {{ui:Block speichern}} behält sie. `-BPARAMS` fragt dasselbe in der Befehlszeile ab.

**In der Datei.** DWG und DXF bewahren die Parameter, welche Objekte in welchem Zustand sind, und die eigenen Werte jeder Referenz in den eigenen Datensätzen von CadCraft; öffnen Sie die Datei erneut in CadCraft, ist alles wieder da. Ein anderes Programm sieht jede Referenz als den Block mit allen seinen Objekten, da eine DWG höchstens einen Sichtbarkeitsparameter je Block der eigenen Art hält. Eine Referenz, die ein anderes Programm verschoben hat, oder ein Block, dessen Objekte es geändert hat, kommt ohne die Teile zurück, die nicht mehr passen (nichts wird geraten).
