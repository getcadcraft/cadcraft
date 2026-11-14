---
title: Draw a diagram from text
summary: Paste a Mermaid flowchart, a PlantUML component diagram, D2, a from-to list or draw.io XML and CadCraft lays out blocks and connectors you can edit like any other objects.
section: tasks
order: 66
keywords: draw.io, drawio, diagrams.net, mxfile, xml, local model, diagram, flowchart, mermaid, plantuml, d2, from to, from-to list, block diagram, connectors, text to diagram, DIAGRAM, TEXTDIAGRAM, system diagram, wiring diagram, piping, csv
---

Type {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). A box opens: paste the text, choose {{ui:Draw}}, click the top left corner of the diagram and give the text height. CadCraft reads the text, lays the blocks out in layers with right-angle connectors, and draws them on a layer called `Diagram`. The new objects are selected, so you can move them straight away. They are plain objects: change a block's text with {{cmd:TEXTEDIT}}, stretch a connector with its grips, erase a block, add your own lines. One {{cmd:UNDO}} takes the whole diagram away.

At the command line, without the box, the text can be one line with `;` between statements: `flowchart LR; A[Pump] --> B[Tank]`.

## What it reads

| Text | What is read |
|---|---|
| **Mermaid** `flowchart` or `graph` with `TD`, `TB`, `BT`, `LR` or `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (a decision, drawn as a diamond), quoted text, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, a label as `-->|text|` or `-- text -->`, chains `A --> B --> C`, groups `A & B --> C`, `<br/>` for a new line, `%%` comments |
| **PlantUML** between `@startuml` and `@enduml` (component and deployment) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` and others with `as` names, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, chains, `a: Label`, `direction: right`, quoted names, `#` comments |
| **A from-to list** (a table pasted as text or CSV) | columns `from`, `to` and optionally `label` and `type` (`dashed` draws a dashed connector), in any order, separated by commas, semicolons or tabs; without a header line the first three columns are from, to, label |

| **draw.io XML** (a `.drawio` file's text, `<mxfile>` or `<mxGraphModel>`) | boxes, rounded boxes, ellipses, rhombus decisions and plain text; container and swimlane boxes (drawn dashed with their title); connectors with their waypoints, arrow ends (`endArrow`, `startArrow`) and `dashed=1`; HTML labels become plain text, `<UserObject label>` and `<object label>` work |

Anything else on a line (styles, notes, loop frames) is skipped, and the command line says how many lines were skipped. A diagram has at most 400 blocks and 1200 connectors.

## Draw.io XML keeps its positions

The other languages say what connects to what, so CadCraft lays them out. Draw.io XML already says where everything is, so CadCraft keeps it: each block sits where the file puts it, scaled so a 12-pixel font becomes the text height you give (a 120 by 60 pixel box is 60 by 30 drawing units at height 6), and the diagram's top left goes at the corner you click. Connectors run from the edge of one block to the edge of the next, through their waypoints; a connector with `orthogonalEdgeStyle` and no waypoints gets one right-angle bend.

Draw.io's default save is compressed. The box and the command line open it for you; an assistant tool in a window without a compression stream says so, and `File › Export as › XML` with *Compressed* unticked gives plain XML. Images, connectors with a loose end and second pages are skipped and counted.

## Writing it with a model on your computer

A local model (Ollama, LM Studio, llama.cpp, Jan) can write the XML or the Mermaid text from a PDF's or an SVG's contents, and the result goes in through the same box, or straight into the drawing when the model is connected as an assistant: `diagram_from_text` takes `format` `drawio`. Small models make more mistakes in XML than in Mermaid or a from-to list, so a first try with Mermaid is cheaper; what the reader cannot use is skipped and counted, not guessed. See Connect your AI for the model recipes.

## How it is laid out

Blocks go in layers following the connectors (a connector that loops back is drawn back up), ordered to keep crossings down, with right-angle connectors that leave the bottom of a block and enter the top of the next; `LR` and `RL` turn the layers into columns. The text height you give sets the size of everything. 
## Subgraphs and sequence diagrams

- A Mermaid `subgraph name [Title]` … `end` draws a dashed box with its title round its blocks; subgraphs can nest. The layout does not keep other blocks out of a box, so move a stray block with its grips.
- A Mermaid `sequenceDiagram`, or PlantUML text with `participant` lines and `->` messages, is drawn as blocks across the top, a dashed lifeline under each and one row per message. `-->` and `-->>` are dashed, `->>` and `-)` have an arrow head, `autonumber` numbers the messages, a message to oneself loops. Notes and `loop` / `alt` frames are skipped.

## Symbols for single-line and piping diagrams

A block can be a drawn symbol, with its name under it, instead of a box. Name the symbol in the text:

| Text | How |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` or a line `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` or `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| A from-to list | columns `from_symbol` and `to_symbol` |

The names are the P&ID shapes (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` and the rest of the P&ID library) and the Electrical set (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` and so on). A name that two sets share goes to the P&ID set; write `pid:` or `el:` in front to choose. A name CadCraft does not know is skipped and counted. The symbols are drawn as plain lines, circles and arcs on the `Diagram` layer, scaled to the text height; they are not the add-ons' blocks with tags, so use the P&ID or Electrical commands for a working drawing.

AI assistants can do the same through the `diagram_from_text` tool in the window.
