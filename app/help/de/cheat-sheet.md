---
title: Spickzettel: die 40 Befehle für den Alltag
summary: Eine Seite mit den 40 Befehlen, die Sie am häufigsten nutzen, ihren Kurznamen und den Tasten, die Zeit sparen. Als PDF zum Ausdrucken herunterladen.
keywords: Spickzettel, Kurzübersicht, Befehle, Aliase, Kurznamen, Einsteiger, löschen, stutzen, drucken, PDF, Tastenkürzel
from: 2d40edc4
---

Den Kurznamen (den Alias) eingeben und Enter drücken oder das Werkzeug anklicken. Esc bricht ab. Enter in einer leeren Zeile wiederholt den letzten Befehl.

**Ausdrucken:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (eine A4-Seite; auf Letter-Papier mit „An Seite anpassen“ drucken).

## Zeichnen

| Eingabe | Befehl | Was er macht |
|---|---|---|
| `L` | {{cmd:LINE}} | Gerade Linien zeichnen |
| `PL` | {{cmd:PLINE}} | Eine zusammenhängende Kette aus Linien und Bögen zeichnen |
| `C` | {{cmd:CIRCLE}} | Einen Kreis zeichnen (Zentrum und Radius) |
| `A` | {{cmd:ARC}} | Einen Bogen zeichnen |
| `REC` | {{cmd:RECTANG}} | Ein Rechteck aus zwei Ecken zeichnen |
| `POL` | {{cmd:POLYGON}} | Ein regelmäßiges Polygon zeichnen |
| `EL` | {{cmd:ELLIPSE}} | Eine Ellipse zeichnen |
| `DT` | {{cmd:TEXT}} | Eine Textzeile schreiben |
| `T` | {{cmd:MTEXT}} | Text mit Zeilenumbruch schreiben (Absatz) |
| `H` | {{cmd:HATCH}} | Eine Fläche mit einem Muster füllen |

## Ändern

| Eingabe | Befehl | Was er macht |
|---|---|---|
| `M` | {{cmd:MOVE}} | Objekte verschieben |
| `CO` | {{cmd:COPY}} | Objekte kopieren |
| `RO` | {{cmd:ROTATE}} | Objekte um einen Punkt drehen |
| `SC` | {{cmd:SCALE}} | Objekte vergrößern oder verkleinern |
| `MI` | {{cmd:MIRROR}} | Objekte an einer Linie spiegeln |
| `O` | {{cmd:OFFSET}} | Eine parallele Kopie im Abstand zeichnen |
| `TR` | {{cmd:TRIM}} | Objekte bis dorthin zurückschneiden, wo andere sie kreuzen |
| `EX` | {{cmd:EXTEND}} | Objekte bis zu anderen verlängern |
| `F` | {{cmd:FILLET}} | Eine Ecke mit einem Bogen abrunden |
| `CHA` | {{cmd:CHAMFER}} | Eine Ecke mit einer geraden Kante abschrägen |
| `E` | {{cmd:ERASE}} | Objekte löschen |
| `X` | {{cmd:EXPLODE}} | Einen Block oder eine Polylinie in ihre Teile zerlegen |
| `S` | {{cmd:STRETCH}} | Die Enden innerhalb eines Kreuzen-Fensters verschieben |
| `AR` | {{cmd:ARRAY}} | Im Raster oder im Kreis kopieren |
| `J` | {{cmd:JOIN}} | Linien und Bögen zu einem Objekt verbinden |
| `BR` | {{cmd:BREAK}} | Ein Objekt in zwei teilen oder ein Stück herausnehmen |

## Bemaßen

| Eingabe | Befehl | Was er macht |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Horizontal oder vertikal bemaßen |
| `DAL` | {{cmd:DIMALIGNED}} | Entlang einer schrägen Linie bemaßen |
| `DRA` | {{cmd:DIMRADIUS}} | Einen Radius bemaßen |
| `DAN` | {{cmd:DIMANGULAR}} | Einen Winkel bemaßen |

## Blöcke und Layer

| Eingabe | Befehl | Was er macht |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Aus Objekten einen Block erstellen |
| `I` | {{cmd:INSERT}} | Einen Block platzieren |
| `LA` | {{cmd:LAYER}} | Die Layer öffnen |

## Ansicht und Abfrage

| Eingabe | Befehl | Was er macht |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Hinein- oder herauszoomen oder auf alles (E) |
| `DI` | {{cmd:DIST}} | Einen Abstand und einen Winkel messen |
| `LI` | {{cmd:LIST}} | Die Details eines Objekts anzeigen |
| `MA` | {{cmd:MATCHPROP}} | Das Aussehen eines Objekts auf andere übertragen |

## Datei

| Eingabe | Befehl | Was er macht |
|---|---|---|
| `U` | {{cmd:UNDO}} | Den letzten Befehl zurücknehmen |
| `SAVE` | {{cmd:SAVE}} | Die Zeichnung speichern |
| `PLOT` | {{cmd:PLOT}} | Als PDF plotten |

## Tasten

Ctrl (Cmd am Mac): Z Rückgängig · Y Wiederholen · S Speichern · P Plotten.  F3 Objektfang · F8 Ortho · F10 Polar.  Space oder Enter wiederholt den letzten Befehl · das Rad zoomt · Ziehen mit dem Rad schwenkt

Neu im Zeichnen? `TOUR` eingeben für eine geführte erste Zeichnung, [Erste Schritte](topic:getting-started) lesen oder alle Befehle in der [Befehlsübersicht](topic:commands) ansehen. Wenn Sie von anderer Zeichensoftware kommen: [Umstieg von anderer Zeichensoftware](topic:coming-from) und die [Befehlszuordnung](topic:command-map).
