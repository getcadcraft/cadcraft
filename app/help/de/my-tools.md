---
title: Eigene Schaltflächen (Meine Werkzeuge)
summary: Symbolleisten-Schaltflächen hinzufügen, die eigene Makros ausführen, ihnen Tastenkürzel geben, sie als Datei teilen und Schaltflächen aus einer CUIx-Anpassungsdatei übernehmen.
keywords: meine werkzeuge, eigene schaltflächen, symbolleiste, makro, makros, cui, cuix, anpassen, menü, tastenkürzel, tastaturkürzel, diesel, ^c^c, schaltflächen importieren, schaltflächen exportieren
from: 36618802
---

## Was Sie lernen

Wie Sie eigene Schaltflächen in die Symbolleiste setzen, von denen jede ein Makro ausführt, das so geschrieben ist, wie AutoCAD sie schreibt. Wie Sie einer Schaltfläche eine Taste geben und wie Sie die Schaltflächen einer CUIx-Datei übernehmen.

## Eine Schaltfläche hinzufügen

1. Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}) und bleiben Sie auf der Registerkarte {{ui:CadCraft}}. Scrollen Sie zu {{ui:Meine Werkzeuge}}.
2. Klicken Sie auf {{ui:Eine Schaltfläche hinzufügen…}}.
3. Füllen Sie das Feld aus:
   - {{ui:Gruppe}}: die Symbolleistengruppe, in die sie kommt, z. B. `Meine Werkzeuge`. Ein neuer Name legt eine neue Gruppe an.
   - {{ui:Bezeichnung}}: die Wörter auf der Schaltfläche.
   - {{ui:Makro}}: was sie eingibt, z. B. `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tastenkürzel}}: klicken Sie in das Feld und drücken Sie die Tasten, z. B. {{key:Ctrl+Alt+B}}.
   - {{ui:Symbol}}: ein PNG- oder SVG-Bild mit höchstens 64 KB, oder keines (dann wird ein Stern angezeigt).
4. Klicken Sie auf {{ui:Speichern}}.

Die Schaltfläche erscheint am Ende der Symbolleiste, in ihrer Gruppe. Klicken Sie darauf oder drücken Sie ihre Taste, um sie auszuführen. {{ui:Bearbeiten}} und {{ui:Löschen}} in der Liste ändern oder entfernen sie.

## Ein Makro schreiben

Ein Makro ist das, was Sie in der Befehlszeile eingeben würden, mit ein paar Zeichen:

| Zeichen | Bedeutet |
|---|---|
| `^C` | Bricht ab, was läuft (`^C^C` ist der übliche Anfang) |
| `;` oder ein Leerzeichen | {{key:Enter}} |
| `\` | Wartet auf Sie: ein Klick oder eine eingegebene Antwort, dann läuft das Makro weiter |
| `_` oder `.` vor einem Befehl | Wird akzeptiert und ignoriert (internationale und eingebaute Namen) |
| `*` ganz am Anfang | Läuft bei jedem Ende erneut, bis Sie {{key:Esc}} drücken |
| `^O`, `^G` | Schaltet Ortho bzw. das Raster ein oder aus |
| `$M=` | Der Rest ist DIESEL. Gelesen werden nur `$(if,…)`, `$(getvar,…)`, `$(=,…)` und `$(eq,…)`. Eine Schaltfläche, die etwas anderes verwendet, sagt das und tut nichts |

Beispiele:

- `^C^C_line;0,0;@100,0;;` zeichnet eine Linie der Länge 100 vom Ursprung.
- `^C^C_circle;\25;` fragt nach dem Mittelpunkt und zeichnet dort einen Kreis mit Radius 25.
- `^C^C_turnright` dreht die Ansicht um 90° nach rechts.

## Tastenkürzel

Eine Taste braucht {{key:Mod}} (Ctrl, oder Cmd auf einem Mac) oder {{key:Alt}} mit einem Buchstaben oder einer Ziffer, oder eine der freien Funktionstasten {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Buchstaben allein gehen an die Befehlszeile. Tasten, die CadCraft, die App oder der Browser bereits verwenden (etwa {{key:Ctrl+S}} oder {{key:Ctrl+Z}}), und Tasten, die eine andere Schaltfläche schon hat, werden abgelehnt. Das Feld sagt dann, warum.

## Ihre Schaltflächen teilen

- {{ui:Exportieren…}} speichert jede Gruppe und Schaltfläche (mit Symbolen und Tasten) als `my-tools.json`.
- {{ui:Importieren…}} fügt die Gruppen einer solchen Datei nach Ihren eigenen hinzu. Ein Gruppenname, den Sie schon verwenden, bekommt „(2)“. Eine Taste, die doppelt wäre, wird weggelassen, und das Panel meldet es.

## Schaltflächen aus einer CUIx-Datei übernehmen

1. Klicken Sie auf {{ui:CUIx importieren…}} und wählen Sie die Datei `.cuix`.

Ihre Symbolleisten und Menübandbereiche werden zu Gruppen, jede Schaltfläche mit ihrem Makro und ihrem Bild (PNG, oder BMP, das in PNG umgewandelt wurde). Die Tastenkürzel kommen in eine eigene Gruppe, jede Schaltfläche mit ihrer Taste. Die Befehlsaliase, die sie eventuell enthält, kommen in eine Gruppe {{ui:Aliase}}. Das Panel listet auf, was übernommen wurde.

:::note
Die Datei wird nur gelesen. Befehle, die CadCraft nicht hat, werden mit Namen aufgelistet, nicht erraten: Ihre Schaltflächen sagen das beim Klicken. DIESEL über die wenigen oben genannten Funktionen hinaus, Menüs, Maustasten und Arbeitsbereiche werden nicht gelesen.
:::

## Gut zu wissen

- Schaltflächen werden in diesem Browser (oder in dieser Desktop-App) gespeichert, nicht in Zeichnungen.
- Eine Schaltfläche läuft über die Befehlszeile und wird daher wie alles, was Sie eingeben, rückgängig gemacht: ein {{key:Mod+Z}} pro Befehl, den sie ausgeführt hat.
