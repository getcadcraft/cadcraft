---
title: Diagram rajzolása szövegből
summary: Illesszen be egy Mermaid folyamatábrát, PlantUML összetevődiagramot, D2-t, honnan-hová listát vagy draw.io XML-t, és a CadCraft elrendezi a blokkokat és összekötőket, amelyeket úgy szerkeszthet, mint bármely más objektumot.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, helyi modell, diagram, folyamatábra, mermaid, plantuml, d2, honnan hová, honnan-hová lista, blokkdiagram, összekötők, szövegből diagram, DIAGRAM, TEXTDIAGRAM, rendszerdiagram, kapcsolási rajz, csővezeték, csv
from: b26af54b
---

Írja be: {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Megnyílik egy doboz: illessze be a szöveget, válassza a {{ui:Rajzolás}} lehetőséget, kattintson a diagram bal felső sarkára, majd adja meg a szöveg magasságát. A CadCraft beolvassa a szöveget, a blokkokat rétegekbe rendezi derékszögű összekötőkkel, és a `Diagram` nevű rétegen rajzolja meg őket. Az új objektumok ki vannak jelölve, így azonnal mozgathatja őket. Ezek egyszerű objektumok: egy blokk szövegét a {{cmd:TEXTEDIT}} paranccsal módosíthatja, egy összekötőt a fogópontjaival nyújthat, törölhet egy blokkot, vagy saját vonalakat adhat hozzá. Egy {{cmd:UNDO}} az egész diagramot eltünteti.

A parancssorban, a doboz nélkül, a szöveg lehet egy sor is, az utasítások között `;` jellel: `flowchart LR; A[Pump] --> B[Tank]`.

## Mit olvas be

| Szöveg | Mit olvas be |
|---|---|
| **Mermaid** `flowchart` vagy `graph` a `TD`, `TB`, `BT`, `LR` vagy `RL` értékkel | `A`, `A[szöveg]`, `A(szöveg)`, `A([szöveg])`, `A{szöveg}` (döntés, rombuszként rajzolva), idézett szöveg, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, címke `-->\|szöveg\|` vagy `-- szöveg -->` alakban, láncok `A --> B --> C`, csoportok `A & B --> C`, `<br/>` új sorhoz, `%%` megjegyzések |
| **PlantUML** a `@startuml` és `@enduml` között (összetevő- és telepítési diagram) | `[Összetevő]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` és mások `as` nevekkel, `A --> B : címke`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: címke`, `a <- b`, `a <-> b`, `a -- b`, láncok, `a: Címke`, `direction: right`, idézett nevek, `#` megjegyzések |
| **Honnan-hová lista** (táblázat szövegként vagy CSV-ként beillesztve) | `from`, `to` és opcionálisan `label` és `type` oszlopok (`dashed` szaggatott összekötőt rajzol), bármilyen sorrendben, vesszővel, pontosvesszővel vagy tabulátorral elválasztva; fejléc nélkül az első három oszlop a from, to és label |

| **draw.io XML** (egy `.drawio` fájl szövege, `<mxfile>` vagy `<mxGraphModel>`) | dobozok, lekerekített dobozok, ellipszisek, rombusz alakú döntések és sima szöveg; tároló- és sávos dobozok (szaggatottan rajzolva, címmel); összekötők a töréspontjaikkal, nyílvégek (`endArrow`, `startArrow`) és `dashed=1`; a HTML-címkék sima szöveggé válnak, a `<UserObject label>` és `<object label>` működik |

Minden más sor (stílusok, megjegyzések, cikluskeretek) kimarad, a parancssor pedig megmondja, hány sor maradt ki. Egy diagram legfeljebb 400 blokkot és 1200 összekötőt tartalmazhat.

## A draw.io XML megtartja a pozícióit

A többi nyelv csak azt mondja meg, mi mihez kapcsolódik, ezért a CadCraft elrendezi őket. A draw.io XML már megadja, hol van minden, ezért a CadCraft megtartja: minden blokk ott marad, ahol a fájl elhelyezi, méretezve úgy, hogy a 12 pixeles betű a megadott szövegmagasságra váltson (egy 120 × 60 pixeles doboz 60 × 30 rajzegység lesz 6-os magasságnál), a diagram bal felső sarka pedig oda kerül, ahová kattint. Az összekötők egyik blokk széléről a másik széléig futnak, a töréspontjaikon keresztül; az `orthogonalEdgeStyle` stílusú, töréspont nélküli összekötő egy derékszögű töréspontot kap.

A Draw.io alapértelmezett mentése tömörített. A doboz és a parancssor megnyitja azt; egy asszisztens-eszköz olyan ablakban, amelyben nincs tömörítési folyam, ezt jelzi, a `File › Export as › XML` menüpont a *Compressed* jelölés nélkül egyszerű XML-t ad. Képek, laza végű összekötők és második lapok kimaradnak, és meg lesznek számolva.

## Írás helyi modellel a számítógépén

Egy helyi modell (Ollama, LM Studio, llama.cpp, Jan) megírhatja az XML-t vagy a Mermaid szöveget egy PDF vagy SVG tartalma alapján, és az eredmény ugyanazon a dobozon keresztül kerül be, vagy közvetlenül a rajzba, ha a modell asszisztensként csatlakozik: a `diagram_from_text` a `format` `drawio` értéket fogadja. A kis modellek több hibát követnek el XML-ben, mint Mermaidben vagy honnan-hová listában, ezért a Mermaiddel való első próba olcsóbb; amit az olvasó nem tud feldolgozni, azt kihagyja és megszámolja, nem találgat. A modellek beállításaihoz lásd: Connect your AI.

## Elrendezés

A blokkok az összekötőket követő rétegekben kerülnek el (a hurkot képező összekötő visszafelé, felfelé rajzolódik), úgy rendezve, hogy kevesebb keresztezés legyen. A derékszögű összekötők egy blokk alján lépnek ki, és a következő blokk tetejébe futnak; az `LR` és `RL` a rétegeket oszlopokká alakítja. Az megadott szövegmagasság határozza meg mindennek a méretét.

## Alrajzok és sorozatdiagramok

- A Mermaid `subgraph name [Title]` … `end` szaggatott dobozt rajzol a címmel a blokkjai köré; az alrajzok egymásba ágyazhatók. Az elrendezés nem tartja távol a többi blokkot a dobozon kívül, ezért egy eltévedt blokkot a fogópontjaival mozgasson.
- A Mermaid `sequenceDiagram`, vagy PlantUML szöveg `participant` sorokkal és `->` üzenetekkel, blokkokként rajzolódik a tetején, mindegyik alatt szaggatott élettartó vonallal, és üzenetenként egy sorral. A `-->` és `-->>` szaggatottak, a `->>` és `-)` nyílfejet kap, az `autonumber` számozza az üzeneteket, az önmagának küldött üzenet hurkot alkot. A megjegyzések és a `loop` / `alt` keretek kimaradnak.

## Szimbólumok egysoros és csővezeték-diagramokhoz

Egy blokk doboz helyett rajzolt szimbólum is lehet, a neve alatta. A szimbólumot a szövegben nevezze meg:

| Szöveg | Hogyan |
|---|---|
| Mermaid | `P1[Tápszivattyú]:::pump-cf` vagy `class P1 pump-cf` sor |
| D2 | `P1.shape: pump-cf` vagy `P1: Tápszivattyú { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Honnan-hová lista | `from_symbol` és `to_symbol` oszlopok |

A nevek a P&ID-alakzatok (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` és a P&ID-könyvtár többi eleme) és az Elektromos készlet (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` és így tovább). Ha két készletben is van ilyen név, a P&ID készlethez kerül; a `pid:` vagy `el:` előtagot írva választhat. Az ismeretlen nevet a CadCraft kihagyja és megszámolja. A szimbólumok egyszerű vonalakként, körökként és ívekként rajzolódnak a `Diagram` rétegen, a szövegmagassághoz igazítva; nem a bővítmények címkés blokkjai, ezért működő rajzhoz használja a P&ID vagy Elektromos parancsokat.

Az AI-asszisztensek ugyanezt megtehetik az ablakban lévő `diagram_from_text` eszközzel.
