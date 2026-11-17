---
title: Een diagram tekenen uit tekst
summary: Plak een Mermaid-stroomdiagram, een PlantUML-componentdiagram, D2, een van-naar-lijst of draw.io-XML en CadCraft legt blokken en verbindingen vast die u net als andere objecten kunt bewerken.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokaal model, diagram, stroomdiagram, mermaid, plantuml, d2, van naar, van-naar-lijst, blokdiagram, verbindingen, tekst naar diagram, DIAGRAM, TEXTDIAGRAM, systeemdiagram, bedradingsschema, leidingen, csv
from: b26af54b
---

Typ {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Er opent een vak: plak de tekst, kies {{ui:Tekenen}}, klik op de linkerbovenhoek van het diagram en geef de teksthoogte op. CadCraft leest de tekst, legt de blokken in lagen vast met haakse verbindingen en tekent ze op een laag met de naam `Diagram`. De nieuwe objecten zijn geselecteerd, zodat u ze meteen kunt verplaatsen. Het zijn gewone objecten: wijzig de tekst van een blok met {{cmd:TEXTEDIT}}, rek een verbinding uit met de grips, wis een blok of voeg eigen lijnen toe. Eén {{cmd:UNDO}} maakt het hele diagram ongedaan.

Op de opdrachtregel, zonder het vak, kan de tekst uit één regel bestaan met `;` tussen de opdrachten: `flowchart LR; A[Pump] --> B[Tank]`.

## Wat wordt gelezen

| Tekst | Wat wordt gelezen |
|---|---|
| **Mermaid** `flowchart` of `graph` met `TD`, `TB`, `BT`, `LR` of `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (een beslissing, getekend als ruit), tekst tussen aanhalingstekens, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, een label als `-->|tekst|` of `-- tekst -->`, ketens `A --> B --> C`, groepen `A & B --> C`, `<br/>` voor een nieuwe regel, `%%`-opmerkingen |
| **PlantUML** tussen `@startuml` en `@enduml` (component en deployment) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` en andere met `as`-namen, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, ketens, `a: Label`, `direction: right`, namen tussen aanhalingstekens, `#`-opmerkingen |
| **Een van-naar-lijst** (een tabel geplakt als tekst of CSV) | kolommen `from`, `to` en eventueel `label` en `type` (`dashed` tekent een gestreepte verbinding), in elke volgorde, gescheiden door komma's, puntkomma's of tabs; zonder kopregel zijn de eerste drie kolommen from, to, label |

| **draw.io-XML** (de tekst van een `.drawio`-bestand, `<mxfile>` of `<mxGraphModel>`) | vakken, afgeronde vakken, ellipsen, ruitvormige beslissingen en gewone tekst; container- en zwemlaanvakken (getekend met een gestreepte rand en hun titel); verbindingen met hun tussenpunten, pijlpunten (`endArrow`, `startArrow`) en `dashed=1`; HTML-labels worden gewone tekst, `<UserObject label>` en `<object label>` werken |

Al het andere op een regel (stijlen, notities, lusframes) wordt overgeslagen, en de opdrachtregel meldt hoeveel regels zijn overgeslagen. Een diagram heeft maximaal 400 blokken en 1200 verbindingen.

## Draw.io-XML behoudt zijn posities

De andere talen zeggen wat met wat verbonden is, dus legt CadCraft de indeling vast. Draw.io-XML geeft al aan waar alles staat, dus CadCraft behoudt die posities: elk blok staat waar het bestand het plaatst, geschaald zodat een lettergrootte van 12 pixels de teksthoogte wordt die u opgeeft (een vak van 120 bij 60 pixels is 60 bij 30 tekeneenheden bij hoogte 6), en de linkerbovenhoek van het diagram komt op het punt waar u klikt. Verbindingen lopen van de rand van het ene blok naar de rand van het volgende, via hun tussenpunten; een verbinding met `orthogonalEdgeStyle` en zonder tussenpunten krijgt één haakse bocht.

Het standaardopslaan van draw.io is gecomprimeerd. Het vak en de opdrachtregel openen het voor u; een AI-assistent in een venster zonder compressiestroom meldt dat, en `Bestand › Exporteren als › XML` met *Gecomprimeerd* uitgeschakeld geeft gewone XML. Afbeeldingen, verbindingen met een los eind en extra pagina's worden overgeslagen en geteld.

## Met een model op uw computer schrijven

Een lokaal model (Ollama, LM Studio, llama.cpp, Jan) kan de XML of de Mermaid-tekst schrijven op basis van de inhoud van een PDF of SVG. Het resultaat gaat via hetzelfde vak erin, of rechtstreeks in de tekening wanneer het model als assistent is verbonden: `diagram_from_text` neemt `format` `drawio`. Kleine modellen maken meer fouten in XML dan in Mermaid of een van-naar-lijst, dus een eerste poging met Mermaid is goedkoper. Wat de lezer niet kan gebruiken wordt overgeslagen en geteld, niet geraden. Zie Uw AI verbinden voor de recepten per model.

## Hoe de indeling tot stand komt

Blokken komen in lagen die de verbindingen volgen (een verbinding die terugloopt wordt terug omhoog getekend), gerangschikt om kruisingen te beperken, met haakse verbindingen die de onderkant van een blok verlaten en de bovenkant van het volgende binnengaan. `LR` en `RL` zetten de lagen om in kolommen. De teksthoogte die u opgeeft bepaalt de grootte van alles.

## Subgrafieken en sequentiediagrammen

- Een Mermaid `subgraph naam [Titel]` … `end` tekent een gestreepte doos met zijn titel rond de blokken; subgrafieken kunnen worden genest. De indeling houdt andere blokken niet buiten een doos, dus verplaats een verdwaald blok met zijn grips.
- Een Mermaid `sequenceDiagram`, of PlantUML-tekst met `participant`-regels en `->`-berichten, wordt getekend als blokken bovenaan, een gestreepte levenslijn eronder en één rij per bericht. `-->` en `-->>` zijn gestreept, `->>` en `-)` hebben een pijlpunt, `autonumber` nummert de berichten, en een bericht aan zichzelf maakt een lus. Notities en `loop`- en `alt`-kaders worden overgeslagen.

## Symbolen voor enkelvoudige en leidingdiagrammen

Een blok kan een getekend symbool zijn, met zijn naam eronder, in plaats van een vak. Noem het symbool in de tekst:

| Tekst | Hoe |
|---|---|
| Mermaid | `P1[Voedingspomp]:::pump-cf` of een regel `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` of `P1: Voedingspomp { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Een van-naar-lijst | kolommen `from_symbol` en `to_symbol` |

De namen zijn de P&ID-vormen (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` en de rest van de P&ID-bibliotheek) en de set Elektrisch (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` enzovoort). Een naam die twee sets delen gaat naar de P&ID-set; zet `pid:` of `el:` ervoor om te kiezen. Een naam die CadCraft niet kent wordt overgeslagen en geteld. De symbolen worden getekend als gewone lijnen, cirkels en bogen op de laag `Diagram`, geschaald naar de teksthoogte. Het zijn geen blokken met tags van de add-ons, dus gebruik de P&ID- of Elektrische opdrachten voor een werktekening.

AI-assistenten kunnen hetzelfde doen met de tool `diagram_from_text` in het venster.
