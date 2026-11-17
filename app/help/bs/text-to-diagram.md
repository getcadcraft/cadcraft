---
title: Crtanje dijagrama iz teksta
summary: Nalijepi Mermaid flowchart, PlantUML dijagram komponenti, D2, listu od-do ili draw.io XML, a CadCraft rasporedi blokove i konektore koje možeš uređivati kao i sve druge objekte.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokalni model, dijagram, flowchart, mermaid, plantuml, d2, od do, lista od-do, blok dijagram, konektori, tekst u dijagram, DIAGRAM, TEXTDIAGRAM, sistemski dijagram, dijagram ožičenja, cjevovodi, csv
from: b26af54b
---

Upiši {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Otvara se okvir: nalijepi tekst, odaberi {{ui:Crtanje}}, klikni na gornji lijevi ugao dijagrama i unesi visinu teksta. CadCraft čita tekst, raspoređuje blokove u slojevima s pravouglim konektorima i crta ih na sloju pod nazivom `Diagram`. Novi objekti su odabrani, pa ih možeš odmah pomjerati. To su obični objekti: tekst bloka mijenjaš pomoću {{cmd:TEXTEDIT}}, konektor rastežeš preko njegovih hvatišta, blok brišeš, a svoje linije dodaješ. Jedan {{cmd:UNDO}} uklanja cijeli dijagram.

U komandnoj liniji, bez okvira, tekst može biti jedna linija sa `;` između naredbi: `flowchart LR; A[Pump] --> B[Tank]`.

## Šta se čita

| Tekst | Šta se čita |
|---|---|
| **Mermaid** `flowchart` ili `graph` sa `TD`, `TB`, `BT`, `LR` ili `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (odluka, nacrtana kao romb), tekst u navodnicima, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, oznaka kao `-->|text|` ili `-- text -->`, lanci `A --> B --> C`, grupe `A & B --> C`, `<br/>` za novi red, `%%` komentari |
| **PlantUML** između `@startuml` i `@enduml` (komponente i raspored) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` i drugi sa imenima `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, lanci, `a: Label`, `direction: right`, imena u navodnicima, `#` komentari |
| **Lista od-do** (tabela nalijepljena kao tekst ili CSV) | kolone `from`, `to` i po želji `label` i `type` (`dashed` crta isprekidani konektor), bilo kojim redom, odvojene zarezima, tačkama sa zarezom ili tabulatorima; bez linije zaglavlja prve tri kolone su from, to, label |

| **draw.io XML** (tekst datoteke `.drawio`, `<mxfile>` ili `<mxGraphModel>`) | kutije, zaobljene kutije, elipse, romboidi za odluke i običan tekst; kontejner i swimlane kutije (crtane isprekidano sa naslovom); konektori sa svojim tačkama prelaza, završecima strelica (`endArrow`, `startArrow`) i `dashed=1`; HTML oznake postaju običan tekst, a `<UserObject label>` i `<object label>` rade |

Sve drugo u liniji (stilovi, napomene, okviri petlji) se preskače, a komandna linija kaže koliko je linija preskočeno. Dijagram može imati najviše 400 blokova i 1200 konektora.

## Draw.io XML zadržava pozicije

Ostali jezici kažu šta se s čim povezuje, pa to CadCraft rasporeduje. Draw.io XML već kaže gdje je sve, pa CadCraft to zadržava: svaki blok stoji tamo gdje ga datoteka stavlja, skaliran tako da font od 12 piksela postane visina teksta koju daješ (kutija od 120 sa 60 piksela je 60 sa 30 jedinica crteža pri visini 6), a gornji lijevi ugao dijagrama ide na ugao na koji klikneš. Konektori idu od ivice jednog bloka do ivice sljedećeg, kroz svoje tačke prelaza; konektor sa `orthogonalEdgeStyle` i bez tačaka prelaza dobija jedan pravougli prelom.

Draw.io podrazumijevano snimanje je kompresovano. Okvir i komandna linija ga otvaraju umjesto tebe; pomoćni alat u prozoru bez toka kompresije to kaže, a `File › Export as › XML` sa isključenim *Compressed* daje običan XML. Slike, konektori sa slobodnim krajem i druge stranice se preskaču i broje.

## Pisanje uz model na računaru

Lokalni model (Ollama, LM Studio, llama.cpp, Jan) može napisati XML ili Mermaid tekst iz sadržaja PDF-a ili SVG-a, a rezultat ulazi kroz isti okvir, ili direktno u crtež kada je model povezan kao asistent: `diagram_from_text` uzima `format` `drawio`. Mali modeli prave više grešaka u XML-u nego u Mermaidu ili listi od-do, pa je prvi pokušaj sa Mermaidom jeftiniji; ono što čitač ne može koristiti se preskače i broji, a ne pogađa. Recepte za modele pogledaj u Povezivanje AI-ja.

## Kako je raspoređeno

Blokovi idu u slojeve prateći konektore (konektor koji se vraća nazad crta se prema gore), poredani tako da se smanji broj presjeka, sa pravouglim konektorima koji izlaze s dna bloka i ulaze u vrh sljedećeg; `LR` i `RL` pretvaraju slojeve u kolone. Visina teksta koju daješ određuje veličinu svega. 
## Podgrafovi i dijagrami sekvence

- Mermaid `subgraph name [Title]` … `end` crta isprekidanu kutiju sa naslovom oko svojih blokova; podgrafovi mogu biti ugniježđeni. Raspored ne drži druge blokove van kutije, pa zalutali blok pomjeri preko njegovih hvatišta.
- Mermaid `sequenceDiagram`, ili PlantUML tekst sa `participant` linijama i `->` porukama, crta se kao blokovi pri vrhu, isprekidana linija života ispod svakog i jedan red po poruci. `-->` i `-->>` su isprekidane, `->>` i `-)` imaju vrh strelice, `autonumber` numeriše poruke, a poruka samom sebi pravi petlju. Napomene i okviri `loop` / `alt` se preskaču.

## Simboli za jednolinijske i cjevovodne dijagrame

Blok može biti nacrtan simbol, sa imenom ispod, umjesto kutije. Imenuj simbol u tekstu:

| Tekst | Kako |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ili linija `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ili `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Lista od-do | kolone `from_symbol` i `to_symbol` |

Imena su P&ID oblici (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` i ostatak P&ID biblioteke) i skup Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` i tako dalje). Ime koje dva skupa dijele ide u P&ID skup; ispred njega napiši `pid:` ili `el:` da izabereš. Ime koje CadCraft ne poznaje se preskače i broji. Simboli se crtaju kao obične linije, kružnice i lukovi na sloju `Diagram`, skalirani na visinu teksta; nisu blokovi dodataka sa oznakama, pa za radni crtež koristi P&ID ili Electrical naredbe.

AI asistenti mogu isto preko alata `diagram_from_text` u prozoru.
