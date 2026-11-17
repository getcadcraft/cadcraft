---
title: Tegn et diagram ud fra tekst
summary: Indsæt et Mermaid-flowchart, et PlantUML-komponentdiagram, D2, en fra-til-liste eller draw.io-XML, og CadCraft lægger blokke og forbindelser ud, som du kan redigere som alle andre objekter.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokal model, diagram, flowchart, mermaid, plantuml, d2, fra til, fra-til-liste, blokdiagram, forbindelser, tekst til diagram, DIAGRAM, TEXTDIAGRAM, systemdiagram, koblingsdiagram, rørføring, csv
from: b26af54b
---

Skriv {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Der åbnes en boks: indsæt teksten, vælg {{ui:Tegn}}, klik på diagrammets øverste venstre hjørne, og angiv tekstens højde. CadCraft læser teksten, lægger blokkene ud i lag med retvinklede forbindelser og tegner dem på et lag kaldet `Diagram`. De nye objekter er valgt, så du kan flytte dem med det samme. De er almindelige objekter: ændr en blokkens tekst med {{cmd:TEXTEDIT}}, stræk en forbindelse med dens greb, slet en blok, eller tilføj dine egne linjer. Ét {{cmd:UNDO}} fjerner hele diagrammet.

På kommandolinjen, uden boksen, kan teksten være én linje med `;` mellem udsagnene: `flowchart LR; A[Pump] --> B[Tank]`.

## Hvad der læses

| Tekst | Hvad der læses |
|---|---|
| **Mermaid** `flowchart` eller `graph` med `TD`, `TB`, `BT`, `LR` eller `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (en beslutning, tegnet som et rombe), citeret tekst, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, en etiket som `-->|text|` eller `-- text -->`, kæder `A --> B --> C`, grupper `A & B --> C`, `<br/>` for en ny linje, `%%`-kommentarer |
| **PlantUML** mellem `@startuml` og `@enduml` (komponent og udrulning) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` og andre med `as`-navne, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, kæder, `a: Label`, `direction: right`, citerede navne, `#`-kommentarer |
| **En fra-til-liste** (en tabel indsat som tekst eller CSV) | kolonner `from`, `to` og evt. `label` og `type` (`dashed` tegner en stiplet forbindelse), i vilkårlig rækkefølge, adskilt af kommaer, semikolon eller tabulatorer; uden overskriftslinje er de tre første kolonner from, to, label |

| **draw.io-XML** (teksten i en `.drawio`-fil, `<mxfile>` eller `<mxGraphModel>`) | bokse, afrundede bokse, ellipser, rombiske beslutninger og almindelig tekst; container- og svømmebane-bokse (tegnet stiplet med deres titel); forbindelser med deres vejpunkter, pilespidser (`endArrow`, `startArrow`) og `dashed=1`; HTML-etiketter bliver til almindelig tekst, og `<UserObject label>` og `<object label>` virker |

Alt andet på en linje (typografier, noter, løkkerammer) springes over, og kommandolinjen siger, hvor mange linjer der blev sprunget over. Et diagram har højst 400 blokke og 1200 forbindelser.

## Draw.io-XML bevarer sine positioner

De andre formater siger kun, hvad der forbindes med hvad, så CadCraft lægger dem ud. Draw.io-XML angiver allerede, hvor alting står, så CadCraft bevarer det: hver blok står, hvor filen placerer den, skaleret så en skrifttype på 12 pixel bliver til den teksthøjde, du angiver (en boks på 120 gange 60 pixel er 60 gange 30 tegningsenheder ved højde 6), og diagrammets øverste venstre hjørne placeres i det hjørne, du klikker. Forbindelser løber fra kanten af en blok til kanten af den næste, gennem deres vejpunkter. En forbindelse med `orthogonalEdgeStyle` og uden vejpunkter får ét retvinklet knæk.

Draw.io's standardgem er komprimeret. Boksen og kommandolinjen åbner den for dig. Et assistentværktøj i et vindue uden komprimeringsstrøm siger det, og `File › Export as › XML` med *Compressed* fravalgt giver almindelig XML. Billeder, forbindelser med en løs ende og andre sider springes over og tælles.

## Skriv det med en model på din computer

En lokal model (Ollama, LM Studio, llama.cpp, Jan) kan skrive XML- eller Mermaid-teksten ud fra indholdet i en PDF eller en SVG. Resultatet indsættes gennem den samme boks, eller direkte i tegningen, når modellen er forbundet som assistent: `diagram_from_text` tager `format` `drawio`. Små modeller laver flere fejl i XML end i Mermaid eller en fra-til-liste, så et første forsøg med Mermaid er billigere. Det, læseren ikke kan bruge, springes over og tælles, og det gættes ikke. Se Forbind din AI for opskrifterne til modellerne.

## Sådan lægges det ud

Blokke placeres i lag efter forbindelserne (en forbindelse, der løber tilbage, tegnes tilbage op), ordnet så krydsninger holdes nede, med retvinklede forbindelser, der forlader bunden af en blok og går ind i toppen af den næste. `LR` og `RL` gør lagene til kolonner. Den teksthøjde, du angiver, bestemmer størrelsen på alt.

## Delgrafer og sekvensdiagrammer

- En Mermaid `subgraph name [Title]` … `end` tegner en stiplet boks med sin titel rundt om sine blokke; delgrafer kan indlejres. Layoutet holder ikke andre blokke ude af en boks, så flyt en løsreven blok med dens greb.
- Et Mermaid `sequenceDiagram`, eller PlantUML-tekst med `participant`-linjer og `->`-beskeder, tegnes som blokke hen over toppen, en stiplet livslinje under hver og én række pr. besked. `-->` og `-->>` er stiplede, `->>` og `-)` har en pilespids, `autonumber` nummererer beskederne, og en besked til en selv løber i en løkke. Noter og `loop`- og `alt`-rammer springes over.

## Symboler til enkeltlinje- og rørdiagrammer

En blok kan være et tegnet symbol med sit navn under sig i stedet for en boks. Angiv symbolet i teksten:

| Tekst | Sådan |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` eller en linje `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` eller `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| En fra-til-liste | kolonner `from_symbol` og `to_symbol` |

Navnene er P&ID-figurerne (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` og resten af P&ID-biblioteket) og Elektrisk-sættet (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` og så videre). Et navn, som to sæt deler, går til P&ID-sættet; skriv `pid:` eller `el:` foran for at vælge. Et navn, CadCraft ikke kender, springes over og tælles. Symbolerne tegnes som almindelige linjer, cirkler og buer på laget `Diagram`, skaleret til tekstens højde. De er ikke add-on'ernes blokke med mærkater, så brug P&ID- eller elektriske kommandoer til en arbejdstegning.

AI-assistenter kan gøre det samme gennem værktøjet `diagram_from_text` i vinduet.
