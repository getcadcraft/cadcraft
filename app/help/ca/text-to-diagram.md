---
title: Dibuixa un diagrama a partir de text
summary: Enganxeu un diagrama de flux de Mermaid, un diagrama de components de PlantUML, D2, una llista de-a o XML de draw.io, i CadCraft distribueix els blocs i els connectors, que podeu editar com qualsevol altre objecte.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, model local, diagrama, diagrama de flux, mermaid, plantuml, d2, de a, llista de-a, diagrama de blocs, connectors, text a diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de cablejat, canonades, csv
from: b26af54b
---

Escriviu {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). S'obre una caixa: enganxeu el text, trieu {{ui:Dibuix}}, feu clic a la cantonada superior esquerra del diagrama i indiqueu l'alçada del text. CadCraft llegeix el text, distribueix els blocs en capes amb connectors d'angle recte, i els dibuixa en una capa anomenada `Diagram`. Els objectes nous queden seleccionats, de manera que els podeu moure de seguida. Són objectes simples: canvieu el text d'un bloc amb {{cmd:TEXTEDIT}}, estireu un connector amb les seves nanses, esborreu un bloc o afegiu les vostres pròpies línies. Un {{cmd:UNDO}} elimina tot el diagrama.

A la línia d'ordres, sense la caixa, el text pot ser una sola línia amb `;` entre les sentències: `flowchart LR; A[Pump] --> B[Tank]`.

## Què llegeix

| Text | Què es llegeix |
|---|---|
| **Mermaid** `flowchart` o `graph` amb `TD`, `TB`, `BT`, `LR` o `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (una decisió, dibuixada com a rombe), text entre cometes, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, una etiqueta com a `-->|text|` o `-- text -->`, cadenes `A --> B --> C`, grups `A & B --> C`, `<br/>` per a una línia nova, comentaris `%%` |
| **PlantUML** entre `@startuml` i `@enduml` (components i desplegament) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` i altres amb noms `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, cadenes, `a: Label`, `direction: right`, noms entre cometes, comentaris `#` |
| **Una llista de-a** (una taula enganxada com a text o CSV) | columnes `from`, `to` i opcionalment `label` i `type` (`dashed` dibuixa un connector discontinu), en qualsevol ordre, separades per comes, punts i coma o tabuladors; sense línia de capçalera, les tres primeres columnes són from, to, label |

| **XML de draw.io** (el text d'un fitxer `.drawio`, `<mxfile>` o `<mxGraphModel>`) | caixes, caixes arrodonides, el·lipses, decisions en forma de rombe i text simple; caixes contenidor i de carrils (dibuixades discontínues amb el seu títol); connectors amb els seus punts intermedis, extrems de fletxa (`endArrow`, `startArrow`) i `dashed=1`; les etiquetes HTML es converteixen en text simple, `<UserObject label>` i `<object label>` funcionen |

Qualsevol altra cosa d'una línia (estils, notes, marcs de bucle) s'omet, i la línia d'ordres diu quantes línies s'han omès. Un diagrama té com a màxim 400 blocs i 1200 connectors.

## El XML de draw.io conserva les posicions

Les altres llengües diuen què connecta amb què, de manera que CadCraft les distribueix. El XML de draw.io ja indica on és tot, així que CadCraft ho conserva: cada bloc queda on el fitxer el posa, escalat perquè una font de 12 píxels es converteixi en l'alçada de text que indiqueu (una caixa de 120 per 60 píxels és de 60 per 30 unitats de dibuix a alçada 6), i la cantonada superior esquerra del diagrama va on feu clic. Els connectors van de la vora d'un bloc a la vora del següent, passant pels seus punts intermedis; un connector amb `orthogonalEdgeStyle` i sense punts intermedis rep una sola volta d'angle recte.

El desat per defecte de draw.io és comprimit. La caixa i la línia d'ordres l'obren per a vosaltres; una eina d'assistent en una finestra sense flux de compressió ho indica, i `File › Export as › XML` amb *Compressed* desmarcat dona XML simple. Les imatges, els connectors amb un extrem solt i les segones pàgines s'ometen i es compten.

## Escriure-ho amb un model al vostre ordinador

Un model local (Ollama, LM Studio, llama.cpp, Jan) pot escriure el XML o el text Mermaid a partir del contingut d'un PDF o d'un SVG, i el resultat entra per la mateixa caixa, o directament al dibuix quan el model està connectat com a assistent: `diagram_from_text` pren `format` `drawio`. Els models petits cometen més errors en XML que en Mermaid o en una llista de-a, de manera que és més barat provar primer amb Mermaid; el que el lector no pot fer servir s'omet i es compta, no s'endevina. Vegeu Connect your AI per a les receptes de models.

## Com es distribueix

Els blocs van en capes seguint els connectors (un connector que fa bucle es dibuixa cap amunt), ordenats per reduir els encreuaments, amb connectors d'angle recte que surten de la part inferior d'un bloc i entren per la part superior del següent; `LR` i `RL` converteixen les capes en columnes. L'alçada del text que indiqueu fixa la mida de tot.

## Subgrafs i diagrames de seqüència

- Un `subgraph name [Title]` … `end` de Mermaid dibuixa una caixa discontínua amb el seu títol al voltant dels seus blocs; els subgrafs es poden niar. La distribució no manté altres blocs fora d'una caixa, de manera que moveu un bloc que sobri amb les seves nanses.
- Un `sequenceDiagram` de Mermaid, o text de PlantUML amb línies `participant` i missatges `->`, es dibuixa com a blocs a la part superior, una línia de vida discontínua sota cadascun i una fila per missatge. `-->` i `-->>` són discontinus, `->>` i `-)` tenen punta de fletxa, `autonumber` numera els missatges, i un missatge a un mateix fa bucle. Les notes i els marcs `loop` / `alt` s'ometen.

## Símbols per a diagrames d'una línia i de canonades

Un bloc pot ser un símbol dibuixat, amb el seu nom a sota, en lloc d'una caixa. Anomeneu el símbol al text:

| Text | Com |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` o una línia `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` o `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Una llista de-a | columnes `from_symbol` i `to_symbol` |

Els noms són els símbols P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` i la resta de la biblioteca P&ID) i el conjunt Elèctric (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` i així successivament). Un nom que comparteixen dos conjunts va al conjunt P&ID; escriviu `pid:` o `el:` davant per triar. Un nom que CadCraft no coneix s'omet i es compta. Els símbols es dibuixen com a línies, cercles i arcs simples a la capa `Diagram`, escalats a l'alçada del text; no són els blocs amb etiquetes dels complements, de manera que feu servir les ordres P&ID o Elèctriques per a un dibuix de treball.

Els assistents d'IA poden fer el mateix amb l'eina `diagram_from_text` de la finestra.
