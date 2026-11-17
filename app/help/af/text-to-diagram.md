---
title: Teken 'n diagram uit teks
summary: Plak 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2, 'n van-na-lys of draw.io XML en CadCraft rangskik blokke en verbindings wat jy soos enige ander voorwerpe kan wysig.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, plaaslike model, diagram, vloeidiagram, mermaid, plantuml, d2, van na, van-na-lys, blokdiagram, verbindings, teks na diagram, DIAGRAM, TEXTDIAGRAM, stelseldiagram, bedradingsdiagram, pypleiding, csv
from: b26af54b
---

Tik {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). 'n Blokkie maak oop: plak die teks, kies {{ui:Teken}}, klik op die boonste linkerhoek van die diagram en gee die teksthoogte. CadCraft lees die teks, rangskik die blokke in lae met regshoekige verbindings, en teken hulle op 'n laag met die naam `Diagram`. Die nuwe voorwerpe is gekies, sodat jy hulle dadelik kan skuif. Hulle is gewone voorwerpe: verander 'n blok se teks met {{cmd:TEXTEDIT}}, rek 'n verbinding met sy handvatsels, vee 'n blok uit, voeg jou eie lyne by. Een {{cmd:UNDO}} haal die hele diagram weg.

By die opdragreël, sonder die blokkie, kan die teks een reël wees met `;` tussen stellings: `flowchart LR; A[Pump] --> B[Tank]`.

## Wat gelees word

| Teks | Wat gelees word |
|---|---|
| **Mermaid** `flowchart` of `graph` met `TD`, `TB`, `BT`, `LR` of `RL` | `A`, `A[teks]`, `A(teks)`, `A([teks])`, `A{teks}` ('n besluit, as 'n ruit geteken), aangehaalde teks, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, 'n etiket as `-->|teks|` of `-- teks -->`, kettings `A --> B --> C`, groepe `A & B --> C`, `<br/>` vir 'n nuwe reël, `%%` kommentaar |
| **PlantUML** tussen `@startuml` en `@enduml` (komponent en ontplooiing) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` en ander met `as`-name, `A --> B : label`, `->`, `..>`, `--`, left to right direction |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, kettings, `a: Label`, `direction: right`, aangehaalde name, `#` kommentaar |
| **'n Van-na-lys** ('n tabel wat as teks of CSV geplak word) | kolomme `from`, `to` en opsioneel `label` en `type` (`dashed` teken 'n gestippelde verbinding), in enige volgorde, geskei deur kommas, kommapunte of tabs; sonder 'n kopreël is die eerste drie kolomme from, to, label |

| **draw.io XML** ('n `.drawio`-lêer se teks, `<mxfile>` of `<mxGraphModel>`) | blokke, afgeronde blokke, ellipse, ruit-besluite en gewone teks; houer- en swembaanblokke (geteken gestippel met hul titel); verbindings met hul waypoints, pyleindes (`endArrow`, `startArrow`) en `dashed=1`; HTML-etikette word gewone teks, `<UserObject label>` en `<object label>` werk |

Enigiets anders op 'n reël (style, notas, lusrame) word oorgeslaan, en die opdragreël sê hoeveel reëls oorgeslaan is. 'n Diagram het hoogstens 400 blokke en 1200 verbindings.

## Draw.io XML behou sy posisies

Die ander tale sê wat aan wat koppel, so CadCraft rangskik hulle. Draw.io XML sê reeds waar alles is, so CadCraft behou dit: elke blok staan waar die lêer dit plaas, geskaal sodat 'n 12-pixel-lettertipe die teksthoogte word wat jy gee ('n 120 by 60 pixel-blokkie is 60 by 30 tekeneenhede by hoogte 6), en die diagram se boonste linkerhoek kom by die hoek waarop jy klik. Verbindings loop vanaf die rand van een blok na die rand van die volgende, deur hul waypoints; 'n verbinding met `orthogonalEdgeStyle` en geen waypoints kry een regshoekige buiging.

Draw.io se standaardstoor is saamgepers. Die blokkie en die opdragreël maak dit vir jou oop; 'n assistent-instrument in 'n venster sonder 'n kompressiestroom sê so, en `File › Export as › XML` met *Compressed* ontmerk gee gewone XML. Prente, verbindings met 'n los einde en tweede bladsye word oorgeslaan en getel.

## Skryf dit met 'n model op jou rekenaar

'n Plaaslike model (Ollama, LM Studio, llama.cpp, Jan) kan die XML of die Mermaid-teks skryf uit 'n PDF of 'n SVG se inhoud, en die resultaat gaan in deur dieselfde blokkie, of reguit in die tekening wanneer die model as 'n assistent gekoppel is: `diagram_from_text` neem `format` `drawio`. Klein modelle maak meer foute in XML as in Mermaid of 'n van-na-lys, so 'n eerste poging met Mermaid is goedkoper; wat die leser nie kan gebruik nie, word oorgeslaan en getel, nie geraai nie. Sien Koppel jou KI vir die modelresepte.

## Hoe dit gerangskik word

Blokke gaan in lae volgens die verbindings ('n verbinding wat terugloop, word terug opwaarts geteken), gerangskik om kruisings laag te hou, met regshoekige verbindings wat die onderkant van 'n blok verlaat en die boonste deel van die volgende betree; `LR` en `RL` draai die lae in kolomme. Die teksthoogte wat jy gee, bepaal die grootte van alles.

## Subgrafieke en volgordediagramme

- 'n Mermaid `subgraph name [Title]` … `end` teken 'n stippelblokkie met sy titel om sy blokke; subgrafieke kan binne mekaar wees. Die uitleg hou nie ander blokke uit 'n blokkie nie, so skuif 'n swerwende blok met sy handvatsels.
- 'n Mermaid `sequenceDiagram`, of PlantUML-teks met `participant`-reëls en `->`-boodskappe, word geteken as blokke oor die bokant, 'n stippel-lewenslyn onder elk en een ry per boodskap. `-->` en `-->>` is gestippel, `->>` en `-)` het 'n pylpunt, `autonumber` nommer die boodskappe, 'n boodskap aan jouself lus. Notas en `loop`- / `alt`-rame word oorgeslaan.

## Simbole vir enkellyn- en pypleidingdiagramme

'n Blok kan 'n geteekende simbool wees, met sy naam daaronder, in plaas van 'n blokkie. Noem die simbool in die teks:

| Teks | Hoe |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` of 'n reël `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` of `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| 'n Van-na-lys | kolomme `from_symbol` en `to_symbol` |

Die name is die P&ID-vorms (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` en die res van die P&ID-biblioteek) en die Elektriese stel (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` en so meer). 'n Naam wat twee stelle deel, gaan na die P&ID-stel; skryf `pid:` of `el:` vooraan om te kies. 'n Naam wat CadCraft nie ken nie, word oorgeslaan en getel. Die simbole word geteken as gewone lyne, sirkels en bôgies op die laag `Diagram`, geskaal na die teksthoogte; hulle is nie die byvoegings se blokke met etikette nie, so gebruik die P&ID- of Elektriese opdragte vir 'n werkende tekening.

KI-assistente kan dieselfde doen deur die `diagram_from_text`-instrument in die venster.
