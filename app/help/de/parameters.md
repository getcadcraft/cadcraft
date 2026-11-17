---
title: Parameter und Gleichungen verwenden
summary: Maße benennen, mit Ausdrücken wie width / 2 steuern und eine Zahl in ein gesteuertes Maß eingeben, um das zu ändern, was es steuert.
keywords: parameter, par, parameter-manager, gleichungen, ausdrücke, variablen, zweiseitig, konstruktionsabsicht, benutzerparameter, fx
from: 650b9844
---

## Eine Tabelle für jedes Maß

Das Panel {{ui:Parameter}} (die Schaltfläche {{ui:Parameter}} in der Gruppe {{ui:Parametrisch}}, oder geben Sie {{cmd:PARAMETERS}} ein) listet jede Maßabhängigkeit (`d1`, `rad1`, `dia1`, `ang1` oder den Namen, den Sie vergeben haben) und Ihre eigenen Parameter gemeinsam auf. Jeder Name kann in jedem Ausdruck verwendet werden.

Jede Zeile hat:

- **Name**: Geben Sie einen neuen ein, um sie umzubenennen. Jeder Ausdruck, der sie verwendet, folgt.
- **Ausdruck**: eine Zahl (`40`) oder ein Ausdruck (`width / 2 + gap`). Geben Sie ihn ein und drücken Sie {{key:Enter}}: Die Zeichnung folgt.
- **Wert**: was er berechnet. In einer Zeile, die ein Ausdruck steuert, können Sie hier auch eine Zahl eingeben: CadCraft berechnet den Parameter dahinter. Mit `d1 = width / 2` setzt die Eingabe `30` im Wert von d1 `width` auf 60.

Wenn zwei Parameter einen Wert steuern (`width / 2 + gap`), fragt ein Dialog, welchen davon Sie ändern möchten. Jede Änderung ist ein Rückgängig-Schritt ({{key:Mod+Z}}).

## Eigene hinzufügen

1. Öffnen Sie das Panel {{ui:Parameter}}.
2. Geben Sie einen Namen (`gap`) und einen Wert (`10`) ein und wählen Sie {{ui:Hinzufügen (A)}}.
3. Verwenden Sie ihn: Geben Sie im Ausdruck von d1 `width / 2 + gap` ein und drücken Sie {{key:Enter}}.

Namen beginnen mit einem Buchstaben oder `_` und enthalten Buchstaben, Ziffern und `_`. Funktionsnamen, `pi` und Einheitennamen können keine Namen sein.

## Ausdrücke

| Schreiben | Bedeutet |
|---|---|
| `+ - * / ^ %` | addieren, subtrahieren, multiplizieren, dividieren, Potenz, Rest |
| `( )` | Gruppierung |
| `sin cos tan asin acos atan atan2` | Trigonometrie in Grad |
| `sqrt pow exp ln log abs sign` | Wurzeln, Potenzen, Logarithmen |
| `ceil floor int round min max` | Runden und Grenzen |
| `if(a > b, x, y)` | eine Auswahl |
| `pi` | 3.14159… |

Zahlen dürfen eine Einheit tragen: `25mm`, `1in`, `2'`, `90deg`. Längen mit Einheit werden in Millimeter umgerechnet. Verwenden Sie Einheiten also nur in Zeichnungen, die in Millimetern bemessen sind. Sonst geben Sie einfache Zahlen ein.

## In der Befehlszeile

`-PARAMETERS` tut dasselbe ohne Panel: `N` neu, `E` bearbeiten (auch eine Maßabhängigkeit), `R` umbenennen, `D` löschen, `?` auflisten.

## Was abgelehnt wird

- Ein Ausdruck, der sich selbst verwendet, direkt oder über andere: „width, d1 verwenden einander.“
- Ein Wert, den ein Maß nicht annehmen kann: eine negative Länge, ein Winkel über 180°.
- Ein Wert, den die Zeichnung mit ihren übrigen Abhängigkeiten nicht annehmen kann: Nichts ändert sich, und die Meldung nennt die Abhängigkeiten, die im Weg sind.
- Das Löschen eines Parameters, den etwas verwendet: Das Panel bietet an, zuerst seinen Wert in die betroffenen Stellen zu schreiben. Der Name einer Maßabhängigkeit wird gelöscht, indem Sie die Abhängigkeit löschen.
