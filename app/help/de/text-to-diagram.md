---
title: Ein Diagramm aus Text zeichnen
summary: Fügen Sie einen Mermaid-Flussdiagramm-, PlantUML-Komponentendiagramm-, D2-, Von-nach-Liste- oder draw.io-XML-Text ein, und CadCraft legt Blöcke und Verbinder an, die Sie wie andere Objekte bearbeiten können.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokales Modell, Diagramm, Flussdiagramm, mermaid, plantuml, d2, von nach, Von-nach-Liste, Blockdiagramm, Verbinder, Text zu Diagramm, DIAGRAM, TEXTDIAGRAM, Systemdiagramm, Schaltplan, Rohrleitung, csv
from: b26af54b
---

Geben Sie {{cmd:DIAGRAM}} ein (`TEXTDIAGRAM`, `T2D`). Ein Feld öffnet sich: Fügen Sie den Text ein, wählen Sie {{ui:Zeichnen}}, klicken Sie auf die obere linke Ecke des Diagramms und geben Sie die Texthöhe an. CadCraft liest den Text, ordnet die Blöcke in Schichten mit rechtwinkligen Verbindern an und zeichnet sie auf einem Layer namens `Diagram`. Die neuen Objekte sind ausgewählt, sodass Sie sie sofort verschieben können. Sie sind normale Objekte: Ändern Sie den Text eines Blocks mit {{cmd:TEXTEDIT}}, strecken Sie einen Verbinder über seine Griffe, löschen Sie einen Block oder fügen Sie eigene Linien hinzu. Ein {{cmd:UNDO}} entfernt das ganze Diagramm.

An der Befehlszeile kann der Text ohne das Feld als eine Zeile stehen, mit `;` zwischen den Anweisungen: `flowchart LR; A[Pump] --> B[Tank]`.

## Was gelesen wird

| Text | Was gelesen wird |
|---|---|
| **Mermaid** `flowchart` oder `graph` mit `TD`, `TB`, `BT`, `LR` oder `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (eine Entscheidung, als Raute gezeichnet), Text in Anführungszeichen, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, eine Beschriftung als `-->|text|` oder `-- text -->`, Ketten `A --> B --> C`, Gruppen `A & B --> C`, `<br/>` für eine neue Zeile, `%%`-Kommentare |
| **PlantUML** zwischen `@startuml` und `@enduml` (Komponenten- und Verteilungsdiagramm) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` und andere mit `as`-Namen, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, Ketten, `a: Label`, `direction: right`, Namen in Anführungszeichen, `#`-Kommentare |
| **Eine Von-nach-Liste** (eine als Text oder CSV eingefügte Tabelle) | Spalten `from`, `to` und optional `label` und `type` (`dashed` zeichnet einen gestrichelten Verbinder), in beliebiger Reihenfolge, getrennt durch Kommas, Semikolons oder Tabulatoren; ohne Kopfzeile sind die ersten drei Spalten from, to, label

| **draw.io-XML** (der Text einer `.drawio`-Datei, `<mxfile>` oder `<mxGraphModel>`) | Boxen, abgerundete Boxen, Ellipsen, Rauten für Entscheidungen und einfacher Text; Container- und Swimlane-Boxen (gestrichelt mit ihrem Titel gezeichnet); Verbinder mit ihren Stützpunkten, Pfeilenden (`endArrow`, `startArrow`) und `dashed=1`; HTML-Beschriftungen werden zu einfachem Text, `<UserObject label>` und `<object label>` funktionieren |

Alles andere in einer Zeile (Stile, Notizen, Schleifenrahmen) wird übersprungen, und die Befehlszeile meldet, wie viele Zeilen übersprungen wurden. Ein Diagramm hat höchstens 400 Blöcke und 1200 Verbinder.

## Draw.io-XML behält seine Positionen

Die anderen Formate sagen, was womit verbunden ist, daher ordnet CadCraft sie an. Draw.io-XML legt bereits fest, wo alles steht, daher behält CadCraft das bei: Jeder Block steht dort, wo die Datei ihn ablegt, skaliert so, dass eine Schrift mit 12 Pixeln zur Texthöhe wird, die Sie angeben (ein 120 × 60 Pixel großes Feld ist bei Höhe 6 also 60 × 30 Zeichnungseinheiten), und die obere linke Ecke des Diagramms liegt an der Ecke, auf die Sie klicken. Verbinder verlaufen vom Rand eines Blocks zum Rand des nächsten, über ihre Stützpunkte; ein Verbinder mit `orthogonalEdgeStyle` und ohne Stützpunkte erhält einen rechtwinkligen Knick.

Das Standardspeichern von Draw.io ist komprimiert. Das Feld und die Befehlszeile öffnen sie für Sie; ein Assistent-Werkzeug in einem Fenster ohne Kompressionsstrom meldet das, und `Datei › Exportieren als › XML` mit deaktiviertem *Komprimiert* ergibt einfaches XML. Bilder, Verbinder mit einem losen Ende und zweite Seiten werden übersprungen und gezählt.

## Mit einem Modell auf Ihrem Computer schreiben

Ein lokales Modell (Ollama, LM Studio, llama.cpp, Jan) kann aus dem Inhalt einer PDF- oder SVG-Datei das XML oder den Mermaid-Text schreiben. Das Ergebnis wird über dasselbe Feld eingefügt oder direkt in die Zeichnung übernommen, wenn das Modell als Assistent verbunden ist: `diagram_from_text` nimmt `format` `drawio`. Kleine Modelle machen mehr Fehler in XML als in Mermaid oder einer Von-nach-Liste, daher ist ein erster Versuch mit Mermaid günstiger; was der Leser nicht verwenden kann, wird übersprungen und gezählt, nicht geraten. Siehe „Ihre KI verbinden“ für die Modellrezepte.

## So wird es angeordnet

Blöcke werden entlang der Verbinder in Schichten angeordnet (ein Verbinder, der zurückläuft, wird nach oben zurückgezeichnet), so sortiert, dass möglichst wenige Kreuzungen entstehen, mit rechtwinkligen Verbindern, die unten aus einem Block austreten und oben im nächsten eintreten; `LR` und `RL` machen aus den Schichten Spalten. Die Texthöhe, die Sie angeben, bestimmt die Größe von allem.
## Teilgraphen und Sequenzdiagramme

- Ein Mermaid-`subgraph name [Title]` … `end` zeichnet einen gestrichelten Rahmen mit seinem Titel um seine Blöcke; Teilgraphen können verschachtelt werden. Das Layout hält andere Blöcke nicht aus einem Rahmen heraus, daher verschieben Sie einen verirrten Block über seine Griffe.
- Ein Mermaid-`sequenceDiagram` oder PlantUML-Text mit `participant`-Zeilen und `->`-Nachrichten wird als Blöcke oben gezeichnet, darunter je eine gestrichelte Lebenslinie und eine Zeile pro Nachricht. `-->` und `-->>` sind gestrichelt, `->>` und `-)` haben eine Pfeilspitze, `autonumber` nummeriert die Nachrichten, eine Nachricht an sich selbst bildet eine Schleife. Notizen und `loop`- / `alt`-Rahmen werden übersprungen.

## Symbole für Einliniendiagramme und Rohrleitungsschemata

Ein Block kann statt eines Feldes ein gezeichnetes Symbol sein, mit seinem Namen darunter. Benennen Sie das Symbol im Text:

| Text | Wie |
|---|---|
| Mermaid | `P1[Speisepumpe]:::pump-cf` oder eine Zeile `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` oder `P1: Speisepumpe { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Eine Von-nach-Liste | Spalten `from_symbol` und `to_symbol` |

Die Namen sind die Symbole der P&ID-Bibliothek (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` und der Rest der P&ID-Bibliothek) und der Satz Elektrik (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` und so weiter). Ein Name, den zwei Sätze gemeinsam haben, geht an den P&ID-Satz; setzen Sie `pid:` oder `el:` davor, um zu wählen. Ein Name, den CadCraft nicht kennt, wird übersprungen und gezählt. Die Symbole werden als einfache Linien, Kreise und Bögen auf dem Layer `Diagram` gezeichnet, auf die Texthöhe skaliert; sie sind nicht die Add-on-Blöcke mit Kennzeichnungen, daher verwenden Sie für eine Arbeitszeichnung die P&ID- oder Elektrik-Befehle.

Assistenten können dasselbe über das Werkzeug `diagram_from_text` im Fenster tun.
