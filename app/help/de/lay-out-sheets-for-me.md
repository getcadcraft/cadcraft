---
title: Blätter automatisch anlegen
summary: Verteilt die Teile einer Zeichnung automatisch auf Blätter: CadCraft wählt ein Papierformat und einen passenden Standardmaßstab, platziert jedes Teil mit Schriftfeld und darunter dem Maßstab und lässt alles bearbeitbar.
keywords: Blätter, Layout, Layouts, Papier, Maßstab, automatisch, AUTOSHEET, Schriftfeld, Ansichtsfenster, benannte Ansichten
from: 7f315dff
---

Wählen Sie **Ansicht › Mehr › Blätter automatisch anlegen** (oder geben Sie {{cmd:AUTOSHEET}} ein). CadCraft findet die Teile Ihrer Zeichnung (Ihre benannten Ansichten oder die getrennten Gruppen des Modells), wählt ein Papierformat und einen Standardmaßstab, in dem sie passen, und legt sie auf neuen Blättern ab, jeweils mit Schriftfeld, Beschriftung und dem Maßstab darunter.

Bevor es läuft, können Sie ändern, was es tut: **Teile** (benannte Ansichten, Gruppen, die gesamte Zeichnung oder die Entscheidung durch CadCraft), **Papier** (automatisch oder ein Format wie `iso-a1`), **Maßstab** (ein Maßstab für alle oder jeweils eigener für jedes Teil) und **Blätter** (wie viele Teile sich ein Blatt teilen).

Die Blätter sind gewöhnliche Blätter: Sie verschieben ein Ansichtsfenster, ändern dessen Maßstab oder löschen ein Blatt wie gewohnt. Drücken Sie {{key:Ctrl+Z}} einmal, um alle neuen Blätter wieder zurückzunehmen.

## Keynotes

In {{cmd:AUTOSHEET}} wählen Sie **Keynotes**, um unter den Ansichten jedes Blatts eine nummerierte Legende hinzuzufügen. Sie listet die Layer auf, die in diesen Ansichten gezeichnet sind, jeweils als nummerierte Zeile, als Klartext, den Sie wie jeden anderen Text bearbeiten können. Wählen Sie **Datei**, um Ihre eigene Keynote-Liste zu lesen (pro Zeile eine Nummer und ihre Wörter, getrennt durch einen Tabulator, ein Komma oder ein Semikolon): Ein Layer, dessen Name einer Nummer in Ihrer Liste entspricht, übernimmt deren Wörter. Die App bringt keine Keynote-Liste mit.
