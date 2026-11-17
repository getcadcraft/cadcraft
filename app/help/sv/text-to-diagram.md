---
title: Rita ett diagram från text
summary: Klistra in ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2, en från-till-lista eller draw.io-XML, så ordnar CadCraft block och kopplingar som du kan redigera som vilka andra objekt som helst.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokal modell, diagram, flödesschema, mermaid, plantuml, d2, från till, från-till-lista, blockdiagram, kopplingar, text till diagram, DIAGRAM, TEXTDIAGRAM, systemdiagram, kopplingsschema, rörledning, csv
from: b26af54b
---

Skriv {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). En ruta öppnas: klistra in texten, välj {{ui:Rita}}, klicka på diagrammets övre vänstra hörn och ange texthöjden. CadCraft läser texten, placerar blocken i lager med räta kopplingar och ritar dem på ett lager som heter `Diagram`. De nya objekten markeras, så att du kan flytta dem direkt. De är vanliga objekt: ändra ett blocks text med {{cmd:TEXTEDIT}}, töj en koppling med dess handtag, radera ett block eller lägg till egna linjer. Ett {{cmd:UNDO}} tar bort hela diagrammet.

På kommandoraden, utan rutan, kan texten vara en rad med `;` mellan satserna: `flowchart LR; A[Pump] --> B[Tank]`.

## Vad den läser

| Text | Vad som läses |
|---|---|
| **Mermaid** `flowchart` eller `graph` med `TD`, `TB`, `BT`, `LR` eller `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (ett beslut, ritas som en romb), citerad text, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, en etikett som `-->|text|` eller `-- text -->`, kedjor `A --> B --> C`, grupper `A & B --> C`, `<br/>` för en ny rad, `%%`-kommentarer |
| **PlantUML** mellan `@startuml` och `@enduml` (komponent och driftsättning) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` och andra med `as`-namn, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, kedjor, `a: Label`, `direction: right`, citerade namn, `#`-kommentarer |
| **En från-till-lista** (en tabell inklistrad som text eller CSV) | kolumner `from`, `to` och valfritt `label` och `type` (`dashed` ritar en streckad koppling), i valfri ordning, separerade med kommatecken, semikolon eller tabbar; utan rubrikrad är de tre första kolumnerna from, to och label |

| **draw.io-XML** (texten i en `.drawio`-fil, `<mxfile>` eller `<mxGraphModel>`) | block, rundade rutor, ellipser, romb-beslut och ren text; behållare och simbanerutor (ritas streckade med sin titel); kopplingar med sina mellanpunkter, piländar (`endArrow`, `startArrow`) och `dashed=1`; HTML-etiketter blir ren text, `<UserObject label>` och `<object label>` fungerar |

Annat på en rad (stilar, noteringar, loopramar) hoppas över, och kommandoraden säger hur många rader som hoppades över. Ett diagram får högst 400 block och 1200 kopplingar.

## draw.io-XML behåller sina positioner

De andra språken säger vad som kopplas till vad, så CadCraft ordnar dem. Draw.io-XML anger redan var allt finns, så CadCraft behåller det: varje block står där filen placerar det, skalat så att ett 12-pixlars typsnitt blir den texthöjd du anger (en 120 gånger 60 pixlar stor ruta blir 60 gånger 30 ritenheter vid höjd 6), och diagrammets övre vänstra hörn hamnar i det hörn du klickar på. Kopplingar går från kanten på ett block till kanten på nästa, genom sina mellanpunkter. En koppling med `orthogonalEdgeStyle` och inga mellanpunkter får en rät knäck.

Draw.ios standardsparning är komprimerad. Rutan och kommandoraden öppnar den åt dig. Ett AI-verktyg i ett fönster utan komprimeringsström säger till om det, och `File › Export as › XML` med *Compressed* avmarkerat ger vanlig XML. Bilder, kopplingar med en lös ände och extra sidor hoppas över och räknas.

## Skriv med en modell på din dator

En lokal modell (Ollama, LM Studio, llama.cpp, Jan) kan skriva XML- eller Mermaid-texten utifrån innehållet i en PDF eller SVG. Resultatet går in via samma ruta, eller direkt i ritningen när modellen är ansluten som assistent: `diagram_from_text` tar `format` `drawio`. Små modeller gör fler fel i XML än i Mermaid eller en från-till-lista, så ett första försök med Mermaid är billigare. Det läsaren inte kan använda hoppas över och räknas, det gissas inte. Se Anslut din AI för modellrecepten.

## Hur det ordnas

Block placeras i lager efter kopplingarna (en koppling som går tillbaka ritas tillbaka uppåt), ordnade så att korsningar minskar, med räta kopplingar som lämnar blockets undersida och går in i överkanten på nästa. `LR` och `RL` gör lagren till kolumner. Texthöjden du anger styr storleken på allt.

## Delgrafer och sekvensdiagram

- En Mermaid `subgraph name [Title]` … `end` ritar en streckad ruta med sin titel runt sina block, och delgrafer kan nästlas. Layouten håller inte andra block utanför en ruta, så flytta ett lösrivet block med dess handtag.
- En Mermaid `sequenceDiagram`, eller PlantUML-text med `participant`-rader och `->`-meddelanden, ritas som block längs överkanten, med en streckad livlinje under varje och en rad per meddelande. `-->` och `-->>` är streckade, `->>` och `-)` har pilspets, `autonumber` numrerar meddelandena och ett meddelande till sig självt slingrar sig. Noteringar och `loop`- och `alt`-ramar hoppas över.

## Symboler för enradiga och rördiagram

Ett block kan vara en ritad symbol, med sitt namn under, i stället för en ruta. Ange symbolen i texten:

| Text | Så här |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` eller en rad `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` eller `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| En från-till-lista | kolumner `from_symbol` och `to_symbol` |

Namnen är P&ID-symbolerna (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` och resten av P&ID-biblioteket) och Elektrisk-uppsättningen (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` och så vidare). Ett namn som två uppsättningar delar går till P&ID-uppsättningen. Skriv `pid:` eller `el:` framför för att välja. Ett namn CadCraft inte känner till hoppas över och räknas. Symbolerna ritas som vanliga linjer, cirklar och bågar på lagret `Diagram`, skalade efter texthöjden. De är inte tilläggens block med taggar, så använd P&ID- eller Elektrisk-kommandona för en arbetsritning.

AI-assistenter kan göra samma sak med verktyget `diagram_from_text` i fönstret.
