---
title: Crtanje dijagrama iz teksta
summary: Nalepi Mermaid dijagram toka, PlantUML dijagram komponenti, D2, spisak od-do ili draw.io XML, a CadCraft raspoređuje blokove i veze koje možeš da uređuješ kao svaki drugi objekat.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokalni model, dijagram, dijagram toka, mermaid, plantuml, d2, od do, spisak od-do, blok dijagram, veze, tekst u dijagram, DIAGRAM, TEXTDIAGRAM, sistemski dijagram, dijagram ožičenja, cevovod, csv
from: b26af54b
---

Ukucaj {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Otvara se okvir: nalepi tekst, izaberi {{ui:Crtanje}}, klikni gornji levi ugao dijagrama i unesi visinu teksta. CadCraft čita tekst, raspoređuje blokove po slojevima sa pravouglim vezama i crta ih na sloju koji se zove `Diagram`. Novi objekti su izabrani, pa ih možeš odmah pomeriti. To su obični objekti: tekst bloka menjaš sa {{cmd:TEXTEDIT}}, vezu razvlačiš njenim hvatištima, brišeš blok, dodaješ sopstvene linije. Jedno {{cmd:UNDO}} uklanja ceo dijagram.

U komandnoj liniji, bez okvira, tekst može biti jedan red sa `;` između iskaza: `flowchart LR; A[Pump] --> B[Tank]`.

## Šta se čita

| Tekst | Šta se čita |
|---|---|
| **Mermaid** `flowchart` ili `graph` sa `TD`, `TB`, `BT`, `LR` ili `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (odluka, crta se kao romb), tekst pod navodnicima, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, labela kao `-->|tekst|` ili `-- tekst -->`, lanci `A --> B --> C`, grupe `A & B --> C`, `<br/>` za novi red, `%%` komentari |
| **PlantUML** između `@startuml` i `@enduml` (komponentni i raspoređeni) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` i drugi sa `as` imenima, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, lanci, `a: Label`, `direction: right`, imena pod navodnicima, `#` komentari |
| **Spisak od-do** (tabela nalepljena kao tekst ili CSV) | kolone `from`, `to` i opciono `label` i `type` (`dashed` crta isprekidanu vezu), bilo kojim redosledom, razdvojene zarezima, tačka-zarezima ili tabulatorima; bez zaglavlja prve tri kolone su from, to, label |

| **draw.io XML** (tekst datoteke `.drawio`, `<mxfile>` ili `<mxGraphModel>`) | kutije, zaobljene kutije, elipse, romb-odluke i običan tekst; kontejnerske i swimlane kutije (crtaju se isprekidano, sa naslovom); veze sa svojim tačkama preloma, krajevi strelica (`endArrow`, `startArrow`) i `dashed=1`; HTML labele postaju običan tekst, `<UserObject label>` i `<object label>` rade |

Sve što je drugo u redu (stilovi, napomene, okviri petlji) se preskače, a komandna linija kaže koliko je redova preskočeno. Dijagram može imati najviše 400 blokova i 1200 veza.

## draw.io XML zadržava pozicije

Drugi formati kažu šta se s čim povezuje, pa CadCraft to raspoređuje. draw.io XML već kaže gde je sve, pa CadCraft to zadržava: svaki blok stoji tamo gde ga datoteka stavlja, razmeren tako da font od 12 piksela postane visina teksta koju zadaš (kutija od 120 sa 60 piksela je 60 sa 30 jedinica crteža pri visini 6), a gornji levi ugao dijagrama ide na ugao na koji klikneš. Veze idu od ivice jednog bloka do ivice sledećeg, kroz svoje tačke preloma; veza sa `orthogonalEdgeStyle` i bez tačaka dobija jedan pravougli prelom.

Podrazumevano čuvanje draw.io datoteke je sažeto. Okvir i komandna linija je otvaraju umesto tebe; pomoćni alat za asistenta u prozoru bez toka sažimanja to kaže, a `File › Export as › XML` sa isključenim *Compressed* daje običan XML. Slike, veze sa slobodnim krajem i druge stranice se preskaču i broje.

## Pisanje uz model na računaru

Lokalni model (Ollama, LM Studio, llama.cpp, Jan) može da napiše XML ili Mermaid tekst iz sadržaja PDF-a ili SVG-a, a rezultat ide kroz isti okvir, ili pravo u crtež kada je model povezan kao asistent: `diagram_from_text` uzima `format` `drawio`. Mali modeli prave više grešaka u XML-u nego u Mermaidu ili spisku od-do, pa je prvi pokušaj sa Mermaidom jeftiniji; ono što čitač ne može da upotrebi preskače se i broji, a ne pogađa. Recepte za modele potraži u temi Connect your AI.

## Kako se raspoređuje

Blokovi idu u slojeve prateći veze (veza koja se vraća unazad crta se nazad nagore), poredani tako da se ukrštanja smanje, sa pravouglim vezama koje izlaze sa dna bloka i ulaze u vrh sledećeg; `LR` i `RL` pretvaraju slojeve u kolone. Visina teksta koju zadaš određuje veličinu svega.

## Podgrafovi i sekvencijalni dijagrami

- Mermaid `subgraph name [Title]` … `end` crta isprekidan okvir sa naslovom oko svojih blokova; podgrafovi mogu da se ugnježđuju. Raspoređivanje ne drži druge blokove van okvira, pa zalutali blok pomeri njegovim hvatištima.
- Mermaid `sequenceDiagram`, ili PlantUML tekst sa redovima `participant` i porukama `->`, crta se kao blokovi duž vrha, isprekidana linija života ispod svakog i jedan red po poruci. `-->` i `-->>` su isprekidane, `->>` i `-)` imaju vrh strelice, `autonumber` numeriše poruke, a poruka sebi samom pravi petlju. Napomene i okviri `loop` / `alt` se preskaču.

## Simboli za jednolinijske i cevovodne dijagrame

Blok može biti nacrtan simbol, sa imenom ispod njega, umesto kutije. Imenuj simbol u tekstu:

| Tekst | Kako |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ili red `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ili `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Spisak od-do | kolone `from_symbol` i `to_symbol` |

Imena su P&ID oblici (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` i ostatak P&ID biblioteke) i set Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` i tako dalje). Ime koje dva seta dele ide u P&ID set; napiši `pid:` ili `el:` ispred da izabereš. Ime koje CadCraft ne poznaje preskače se i broji. Simboli se crtaju kao obične linije, krugovi i lukovi na sloju `Diagram`, razmereni na visinu teksta; nisu blokovi dodataka sa oznakama, pa za radni crtež koristi komande P&ID ili Electrical.

AI asistenti mogu isto preko alata `diagram_from_text` u prozoru.
