---
title: Tegn et diagram fra tekst
summary: Lim inn et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2, en fra-til-liste eller draw.io-XML, så legger CadCraft ut blokker og koblinger du kan redigere som alle andre objekter.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokal modell, diagram, flytdiagram, mermaid, plantuml, d2, fra til, fra-til-liste, blokkdiagram, koblinger, tekst til diagram, DIAGRAM, TEXTDIAGRAM, systemdiagram, koblingsdiagram, rørføring, csv
from: b26af54b
---

Skriv {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). En boks åpnes: lim inn teksten, velg {{ui:Tegn}}, klikk øverst til venstre i diagrammet og angi teksthøyden. CadCraft leser teksten, legger blokkene i lag med rettvinklede koblinger og tegner dem på et lag som heter `Diagram`. De nye objektene er valgt, så du kan flytte dem med en gang. De er vanlige objekter: endre en blokks tekst med {{cmd:TEXTEDIT}}, strekk en kobling med håndtakene, slett en blokk, legg til egne linjer. Én {{cmd:UNDO}} fjerner hele diagrammet.

På kommandolinjen, uten boksen, kan teksten være én linje med `;` mellom setningene: `flowchart LR; A[Pump] --> B[Tank]`.

## Hva den leser

| Tekst | Hva som leses |
|---|---|
| **Mermaid** `flowchart` eller `graph` med `TD`, `TB`, `BT`, `LR` eller `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (en beslutning, tegnet som rombe), sitert tekst, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, en etikett som `-->|tekst|` eller `-- tekst -->`, kjeder `A --> B --> C`, grupper `A & B --> C`, `<br/>` for ny linje, `%%`-kommentarer |
| **PlantUML** mellom `@startuml` og `@enduml` (komponent og distribusjon) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` og andre med `as`-navn, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, kjeder, `a: Label`, `direction: right`, siterte navn, `#`-kommentarer |
| **En fra-til-liste** (en tabell limt inn som tekst eller CSV) | kolonnene `from`, `to` og eventuelt `label` og `type` (`dashed` tegner en stiplet kobling), i hvilken som helst rekkefølge, adskilt med komma, semikolon eller tab; uten overskriftslinje er de tre første kolonnene from, to og label |

| **draw.io-XML** (teksten i en `.drawio`-fil, `<mxfile>` eller `<mxGraphModel>`) | bokser, avrundede bokser, ellipser, romb for beslutninger og ren tekst; beholder- og svømmebane-bokser (tegnet stiplet med tittel); koblinger med sine mellompunkter, pilender (`endArrow`, `startArrow`) og `dashed=1`; HTML-etiketter blir ren tekst, `<UserObject label>` og `<object label>` fungerer |

Alt annet på en linje (stiler, notater, løkkerammer) hoppes over, og kommandolinjen sier hvor mange linjer som ble hoppet over. Et diagram har høyst 400 blokker og 1200 koblinger.

## Draw.io-XML beholder plasseringene

De andre språkene forteller hva som kobles til hva, så CadCraft legger dem ut. Draw.io-XML sier allerede hvor alt er, så CadCraft beholder det: hver blokk står der filen plasserer den, skalert slik at en 12-piksels skrift blir teksthøyden du oppgir (en boks på 120 × 60 piksler er 60 × 30 tegningsenheter ved høyde 6), og diagrammets øverste venstre hjørne plasseres der du klikker. Koblingene går fra kanten på én blokk til kanten på den neste, via mellompunktene sine; en kobling med `orthogonalEdgeStyle` og uten mellompunkter får ett rettvinklet knekk.

Draw.io lagrer som standard komprimert. Boksen og kommandolinjen åpner den for deg; et assistentverktøy i et vindu uten støtte for komprimeringsstrøm sier fra om det, og `File › Export as › XML` med *Compressed* fjernet gir ren XML. Bilder, koblinger med en løs ende og ekstra sider hoppes over og telles.

## Skrive det med en modell på datamaskinen

En lokal modell (Ollama, LM Studio, llama.cpp, Jan) kan skrive XML- eller Mermaid-teksten ut fra innholdet i en PDF eller SVG, og resultatet legges inn gjennom samme boks, eller rett inn i tegningen når modellen er koblet til som assistent: `diagram_from_text` tar `format` `drawio`. Små modeller gjør flere feil i XML enn i Mermaid eller en fra-til-liste, så et første forsøk med Mermaid er billigere; det leseren ikke kan bruke, hoppes over og telles, det gjettes ikke. Se Koble til din KI for oppskriftene til modellene.

## Slik legges det ut

Blokkene legges i lag etter koblingene (en kobling som går tilbake, tegnes oppover igjen), ordnet for å holde krysninger nede, med rettvinklede koblinger som går ut fra bunnen av en blokk og inn i toppen av den neste; `LR` og `RL` gjør lagene til kolonner. Teksthøyden du oppgir, styrer størrelsen på alt.

## Delgrafer og sekvensdiagrammer

- En Mermaid `subgraph navn [Tittel]` … `end` tegner en stiplet boks med tittel rundt blokkene sine; delgrafer kan ligge inne i hverandre. Oppsettet holder ikke andre blokker utenfor en boks, så flytt en blokk som havner feil med håndtakene.
- En Mermaid `sequenceDiagram`, eller PlantUML-tekst med `participant`-linjer og `->`-meldinger, tegnes som blokker over, en stiplet livslinje under hver og én rad per melding. `-->` og `-->>` er stiplet, `->>` og `-)` har pilspiss, `autonumber` nummererer meldingene, og en melding til seg selv går i løkke. Notater og `loop`- og `alt`-rammer hoppes over.

## Symboler for enlinje- og rørdiagrammer

En blokk kan være et tegnet symbol, med navnet under, i stedet for en boks. Gi symbolet navn i teksten:

| Tekst | Slik |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` eller en linje `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` eller `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| En fra-til-liste | kolonnene `from_symbol` og `to_symbol` |

Navnene er P&ID-symbolene (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` og resten av P&ID-biblioteket) og Electrical-settet (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` og så videre). Et navn som to sett deler, går til P&ID-settet; skriv `pid:` eller `el:` foran for å velge. Et navn CadCraft ikke kjenner, hoppes over og telles. Symbolene tegnes som vanlige linjer, sirkler og buer på laget `Diagram`, skalert til teksthøyden. De er ikke tilleggenes blokker med merker, så bruk P&ID- eller Electrical-kommandoene for en arbeidstegning.

KI-assistenter kan gjøre det samme med verktøyet `diagram_from_text` i vinduet.
