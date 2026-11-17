---
title: Zwei Bearbeitungen einer Zeichnung zusammenführen
summary: Lassen Sie git, Fossil oder Mercurial zwei Kopien eines DWG- oder DXF-Objekts Objekt für Objekt zusammenführen, mit dem Schlüssel, den CadCraft an jedem Objekt speichert.
keywords: zusammenführen, merge, git, fossil, mercurial, Versionsverwaltung, version control, diff, Konflikt, conflict, Drei-Wege, three-way, cadcraft merge, Schlüssel, key, gitattributes, DWG, DXF
from: 71482bf9
---

Zwei Personen bearbeiten dieselbe Zeichnung. Haben sie unterschiedliche Objekte geändert, kann das Zusammenführen automatisch erfolgen: Es ist nichts von Hand nachzuarbeiten.

## Wie es funktioniert

CadCraft gibt jedem Objekt, das Sie zeichnen, einen kurzen **Schlüssel**, der sich nie ändert und nie zwei Objekten gegeben wird. Er wird mit dem Objekt in der DWG- oder DXF-Datei gespeichert (als zusätzliche Daten, die andere Programme beibehalten). Das Zusammenführen sucht Objekte über diesen Schlüssel, nicht über ihre Position in der Datei, weil jedes Programm die Positionen beim Speichern neu nummeriert. Schalten Sie dies in {{ui:Einstellungen}} › CadCraft › Zusammenführungsfreundliche Dateien aus, wenn Sie nie zusammenführen; die Dateien werden dann etwa 10 Prozent kleiner.

Eine Zeichnung, die vor der Einführung der Schlüssel gespeichert wurde, lässt sich trotzdem zusammenführen: Ihre Objekte erhalten einen Schlüssel aus ihrer Position in der Datei, und zwar für alle, die sie öffnen, gleich.

## Einrichten

Git braucht zwei Zeilen, einmal pro Repository:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ohne Git führen Sie es von Hand aus: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil und Mercurial nehmen dieselben drei Dateien in ihrer eigenen Einstellung für das Zusammenführungswerkzeug.

## Die Regeln

- Ein Objekt, das nur auf einer Seite geändert wurde, wird übernommen. Dieselbe Änderung auf beiden Seiten wird einmal übernommen.
- Dieselbe Eigenschaft, auf zwei Arten geändert, ist ein **Konflikt**: Ihre Seite bleibt, und der Bericht listet beide Werte auf. Öffnen Sie das Ergebnis, sehen Sie sich das Objekt an und korrigieren Sie es von Hand.
- Ein Objekt, das auf einer der Seiten hinzugefügt wurde, bleibt erhalten. Ein Objekt, das auf einer Seite entfernt und auf der anderen unverändert ist, wird entfernt. Auf einer Seite entfernt und auf der anderen geändert: entfernt und gemeldet.
- Layer, Blöcke, Text- und Bemaßungsstile, Blätter und benannte Ansichten werden auf die gleiche Weise zusammengeführt. Abhängigkeiten folgen den Objekten, die sie benennen.
- Das Ergebnis wird im selben Dateiformat und in derselben Version wie Ihre Datei geschrieben.

Nicht zusammengeführt: Die Reihenfolge, in der Objekte gezeichnet sind, bleibt Ihre, danach kommen die Objekte, die die andere Seite hinzugefügt hat. Änderungen an derselben Blockdefinition auf beiden Seiten sind ein Konflikt und werden nie vermischt. Nichts wird hochgeladen; alles läuft auf Ihrem Computer.
