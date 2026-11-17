---
title: Nakreslenie diagramu z textu
summary: Vložte vývojový diagram Mermaid, komponentový diagram PlantUML, D2, zoznam zo-do alebo XML draw.io a CadCraft rozloží bloky a konektory, ktoré môžete upravovať ako ostatné objekty.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokálny model, diagram, vývojový diagram, mermaid, plantuml, d2, z do, zoznam z do, blokový diagram, konektory, text na diagram, DIAGRAM, TEXTDIAGRAM, systémový diagram, schéma zapojenia, potrubie, csv
from: b26af54b
---

Napíšte {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Otvorí sa okno: vložte text, zvoľte {{ui:Kreslenie}}, kliknite na ľavý horný roh diagramu a zadajte výšku textu. CadCraft text prečíta, rozloží bloky do vrstiev s pravouhlými konektormi a nakreslí ich na hladinu s názvom `Diagram`. Nové objekty sú vybrané, takže ich môžete hneď presunúť. Sú to bežné objekty: text bloku zmeníte príkazom {{cmd:TEXTEDIT}}, konektor natiahnete jeho úchopmi, blok zmažete alebo pridáte vlastné čiary. Jedným {{cmd:UNDO}} odstránite celý diagram.

Na príkazovom riadku bez okna môže byť text na jednom riadku s `;` medzi príkazmi: `flowchart LR; A[Pump] --> B[Tank]`.

## Čo sa načíta

| Text | Čo sa načíta |
|---|---|
| **Mermaid** `flowchart` alebo `graph` s `TD`, `TB`, `BT`, `LR` alebo `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (rozhodnutie, nakreslené ako kosoštvorec), text v úvodzovkách, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, popis ako `-->|text|` alebo `-- text -->`, reťazce `A --> B --> C`, skupiny `A & B --> C`, `<br/>` pre nový riadok, komentáre `%%` |
| **PlantUML** medzi `@startuml` a `@enduml` (komponentový a nasadzovací diagram) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` a ďalšie s menami `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, reťazce, `a: Label`, `direction: right`, názvy v úvodzovkách, komentáre `#` |
| **Zoznam zo-do** (tabuľka vložená ako text alebo CSV) | stĺpce `from`, `to` a voliteľne `label` a `type` (`dashed` nakreslí prerušovaný konektor), v ľubovoľnom poradí, oddelené čiarkami, bodkočiarkami alebo tabulátormi; bez riadka hlavičky sú prvé tri stĺpce from, to, label |

| **draw.io XML** (text súboru `.drawio`, `<mxfile>` alebo `<mxGraphModel>`) | boxy, zaoblené boxy, elipsy, kosoštvorcové rozhodnutia a obyčajný text; kontajnerové boxy a boxy typu dráhy (swimlane) (kreslené prerušovane s názvom); konektory s ich lomovými bodmi, koncami šípok (`endArrow`, `startArrow`) a `dashed=1`; HTML popisy sa zmenia na obyčajný text, `<UserObject label>` a `<object label>` fungujú |

Čokoľvek iné na riadku (štýly, poznámky, rámy slučiek) sa preskočí a príkazový riadok povie, koľko riadkov bolo preskočených. Diagram má najviac 400 blokov a 1200 konektorov.

## Draw.io XML si zachováva polohy

Ostatné jazyky hovoria, čo s čím súvisí, takže CadCraft ich rozloží. Draw.io XML už hovorí, kde sa čo nachádza, a CadCraft ich preto zachováva: každý blok je tam, kde ho má súbor, zmenený tak, aby písmo 12 pixelov zodpovedalo výške textu, ktorú zadáte (box 120 × 60 pixelov je 60 × 30 jednotiek výkresu pri výške 6), a ľavý horný roh diagramu ide do rohu, na ktorý kliknete. Konektory vedú od hrany jedného bloku k hrane ďalšieho cez svoje lomové body; konektor s `orthogonalEdgeStyle` bez lomových bodov dostane jeden pravouhlý zlom.

Draw.io ukladá predvolene komprimovane. Okno aj príkazový riadok ho otvoria za vás; nástroj asistenta v okne bez kompresného toku to oznámi a `File › Export as › XML` so zrušeným *Compressed* dá obyčajný XML. Obrázky, konektory s voľným koncom a druhé strany sa preskočia a spočítajú.

## Písanie s modelom vo vašom počítači

Lokálny model (Ollama, LM Studio, llama.cpp, Jan) dokáže napísať XML alebo text Mermaid z obsahu PDF alebo SVG a výsledok sa vloží tým istým oknom, alebo priamo do výkresu, keď je model pripojený ako asistent: `diagram_from_text` berie `format` `drawio`. Malé modely robia v XML viac chýb ako v Mermaide alebo zozname zo-do, preto je prvý pokus s Mermaidom lacnejší; čo čítačka nevie použiť, sa preskočí a spočíta, nehádá sa. Recepty modelov nájdete v téme Pripojenie vašej AI.

## Ako je rozloženie

Bloky sú vo vrstvách podľa konektorov (konektor, ktorý sa vracia späť, je nakreslený smerom nahor), zoradené tak, aby sa znížil počet križovaní, s pravouhlými konektormi, ktoré vychádzajú zo spodnej hrany bloku a vstupujú do hornej hrany ďalšieho; `LR` a `RL` premenia vrstvy na stĺpce. Zadaná výška textu určuje veľkosť všetkého.

## Podgrafy a sekvenčné diagramy

- Mermaid `subgraph name [Title]` … `end` nakreslí prerušovaný rám s názvom okolo svojich blokov; podgrafy sa môžu vnárať. Rozloženie nedrží cudzie bloky mimo rámu, takže cudzí blok presuňte jeho úchopmi.
- Mermaid `sequenceDiagram` alebo text PlantUML s riadkami `participant` a správami `->` sa nakreslí ako bloky v hornej časti, pod každým prerušovaná životná čiara a jeden riadok na správu. `-->` a `-->>` sú prerušované, `->>` a `-)` majú hrot šípky, `autonumber` očísluje správy, správa sama sebe vytvorí slučku. Poznámky a rámy `loop` / `alt` sa preskočia.

## Symboly pre jednočiarové a potrubné schémy

Blok môže byť nakreslený symbol s menom pod ním namiesto boxu. Názov symbolu uveďte v texte:

| Text | Ako |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` alebo riadok `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` alebo `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Zoznam zo-do | stĺpce `from_symbol` a `to_symbol` |

Názvy sú tvary P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` a zvyšok knižnice P&ID) a sada Elektro (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` a podobne). Názov, ktorý majú spoločný dve sady, patrí do sady P&ID; ak chcete zvoliť inú, napíšte pred neho `pid:` alebo `el:`. Názov, ktorý CadCraft nepozná, sa preskočí a spočíta. Symboly sa kreslia ako obyčajné čiary, kružnice a oblúky na hladine `Diagram`, zmenené na výšku textu; nie sú to bloky doplnkov s označeniami, takže na pracovný výkres použite príkazy P&ID alebo Elektro.

AI asistenti môžu to isté robiť nástrojom `diagram_from_text` v okne.
