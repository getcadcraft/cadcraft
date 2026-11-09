---
title: RLT: Kanäle in TakeoffCraft
summary: Die Kanalliste als Positionen an TakeoffCraft senden, als PDF des Plans mit der Mengenermittlung darin oder die Bausteine als Paket für Ihre Preisbibliothek.
keywords: TakeoffCraft, Mengenermittlung, Kalkulation, Mengen, Positionen, Paket, Preisbibliothek, Blech, PDF
from: 7289df5d
---

## Ein PDF mit der Mengenermittlung darin

{{cmd:EXPORT}} › {{ui:Kanäle für TakeoffCraft (PDF mit der Mengenermittlung darin)}} plottet den Plan auf ein Blatt (ARCH D oder ISO A1, im größten Standardmaßstab, der passt) und legt eine Mengenermittlung für TakeoffCraft in das PDF. Öffnen Sie das PDF in TakeoffCraft, dann wird die Mengenermittlung angeboten:

- eine **Längenposition** je Kanalform, -größe und -material, mit einer Markierung entlang jedem geraden Stück;
- eine **Zählposition** je Formstück und Größe, mit einer Markierung an jeder Stelle, an der es sitzt;
- der Kalkulationsbaustein jeder Position hat sein **Blech**: der Umfang des Kanals × L oder die Fläche des Formstücks × N.

TakeoffCraft misst die Markierungen im Maßstab des Blatts, sodass seine Längen die Längen der Liste sind, und Sie sehen auf dem Blatt, was jede davon ist. Der Maßstab wird am längsten Kanalstück eingestellt und geprüft. Positionen haben keine Einheitspreise; die legen Sie selbst fest.

## Die Bausteine als Paket

{{cmd:EXPORT}} › {{ui:Kanalbausteine für TakeoffCraft (Paket)}} schreibt dieselben Positionen ohne Mengen als TakeoffCraft-Paket (eine `.json`-Datei). Öffnen Sie in TakeoffCraft {{ui:Bibliothek}} › {{ui:Gewerkepakete}} › {{ui:Paketdatei öffnen}}, um sie zu Ihrer Preisbibliothek hinzuzufügen. Jede Position vermerkt die Menge, die sie in der Zeichnung hatte.
