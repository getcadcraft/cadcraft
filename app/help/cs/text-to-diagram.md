---
title: Kreslení diagramu z textu
summary: Vložte vývojový diagram Mermaid, diagram komponent PlantUML, D2, seznam od-do nebo XML draw.io a CadCraft rozmístí bloky a spojnice, které lze upravovat stejně jako jiné objekty.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, místní model, diagram, vývojový diagram, mermaid, plantuml, d2, od do, seznam od-do, blokový diagram, spojnice, text na diagram, DIAGRAM, TEXTDIAGRAM, systémový diagram, schéma zapojení, potrubí, csv
from: b26af54b
---

Napište {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Otevře se okno: vložte text, zvolte {{ui:Kreslení}}, klikněte na levý horní roh diagramu a zadejte výšku textu. CadCraft text přečte, rozmístí bloky do vrstev s pravoúhlými spojnicemi a nakreslí je na vrstvu s názvem `Diagram`. Nové objekty jsou vybrané, takže je můžete hned posunout. Jsou to běžné objekty: text bloku změníte pomocí {{cmd:TEXTEDIT}}, spojnici protáhnete pomocí jejích úchytů, blok smažete nebo přidáte vlastní čáry. Jeden příkaz {{cmd:UNDO}} odstraní celý diagram.

Na příkazovém řádku bez okna může být text na jednom řádku, s příkazy oddělenými `;`: `flowchart LR; A[Pump] --> B[Tank]`.

## Co se načte

| Text | Co se načte |
|---|---|
| **Mermaid** `flowchart` nebo `graph` s `TD`, `TB`, `BT`, `LR` nebo `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (rozhodnutí, nakreslené jako kosočtverec), text v uvozovkách, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, popisek jako `-->|text|` nebo `-- text -->`, řetězce `A --> B --> C`, skupiny `A & B --> C`, `<br/>` pro nový řádek, komentáře `%%` |
| **PlantUML** mezi `@startuml` a `@enduml` (komponenty a nasazení) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` a další s názvy `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, řetězce, `a: Label`, `direction: right`, názvy v uvozovkách, komentáře `#` |
| **Seznam od-do** (tabulka vložená jako text nebo CSV) | sloupce `from`, `to` a volitelně `label` a `type` (`dashed` nakreslí přerušovanou spojnici), v libovolném pořadí, oddělené čárkami, středníky nebo tabulátory; bez řádku záhlaví jsou první tři sloupce from, to, label |
| **XML draw.io** (text souboru `.drawio`, `<mxfile>` nebo `<mxGraphModel>`) | rámečky, zaoblené rámečky, elipsy, rozhodnutí ve tvaru kosočtverce a prostý text; kontejnerové rámečky a plavecké dráhy (nakreslené přerušovaně s názvem); spojnice s body zlomu, koncové šipky (`endArrow`, `startArrow`) a `dashed=1`; popisky HTML se převedou na prostý text, fungují `<UserObject label>` a `<object label>` |

Cokoli jiného na řádku (styly, poznámky, rámce smyček) se přeskočí a příkazový řádek ukáže, kolik řádků bylo přeskočeno. Diagram má nejvýše 400 bloků a 1200 spojnic.

## XML draw.io si ponechává polohy

Ostatní formáty říkají, co s čím souvisí, takže je CadCraft rozmisťuje. XML draw.io už říká, kde je co, takže CadCraft polohy ponechá: každý blok je tam, kde ho soubor položí, zmenšený nebo zvětšený tak, aby písmo o velikosti 12 pixelů odpovídalo výšce textu, kterou zadáte (rámeček 120 × 60 pixelů je 60 × 30 jednotek výkresu při výšce 6), a levý horní roh diagramu je v rohu, na který kliknete. Spojnice vedou od okraje jednoho bloku k okraji dalšího, přes své body zlomu; spojnice s `orthogonalEdgeStyle` a bez bodů zlomu dostane jeden pravoúhlý zlom.

Výchozí uložení v draw.io je komprimované. Okno i příkazový řádek ho otevřou za vás; nástroj asistenta v okně bez komprimovaného proudu to oznámí a `File › Export as › XML` s odškrtnutým *Compressed* dá prostý XML. Obrázky, spojnice s volným koncem a druhé stránky se přeskočí a započítají.

## Psaní pomocí modelu na vašem počítači

Místní model (Ollama, LM Studio, llama.cpp, Jan) umí napsat XML nebo text Mermaid podle obsahu PDF nebo SVG a výsledek se vloží stejným oknem, nebo rovnou do výkresu, když je model připojen jako asistent: `diagram_from_text` přijímá `format` `drawio`. Malé modely dělají v XML více chyb než v Mermaid nebo v seznamu od-do, takže první pokus s Mermaid je levnější; co čtečka nedokáže použít, se přeskočí a započítá, neodhaduje se. Recepty na modely najdete v části Připojení AI.

## Jak se rozmisťuje

Bloky se řadí do vrstev podle spojnic (spojnice, která se vrací zpět, se nakreslí nahoru), řadí se tak, aby křížení bylo co nejmenší, a pravoúhlé spojnice vycházejí ze spodku bloku a vstupují do horní části dalšího; `LR` a `RL` vrstvy převedou na sloupce. Zadaná výška textu určuje velikost všeho.

## Podgrafy a sekvenční diagramy

- Mermaid `subgraph name [Title]` … `end` nakreslí přerušovaný rámeček s názvem kolem svých bloků; podgrafy mohou být vnořené. Rozmístění nedrží ostatní bloky mimo rámeček, takže zatoulaný blok posuňte pomocí úchytů.
- Mermaid `sequenceDiagram` nebo text PlantUML s řádky `participant` a zprávami `->` se nakreslí jako bloky nahoře, pod každým přerušovaná čára života a jeden řádek na zprávu. `-->` a `-->>` jsou přerušované, `->>` a `-)` mají hrot šipky, `autonumber` čísluje zprávy, zpráva sama sobě tvoří smyčku. Poznámky a rámce `loop` / `alt` se přeskočí.

## Symboly pro jednořádkové diagramy a potrubní schémata

Blok může být nakreslený symbol s názvem pod ním místo rámečku. Symbol pojmenujte v textu:

| Text | Jak |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` nebo řádek `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` nebo `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Seznam od-do | sloupce `from_symbol` a `to_symbol` |

Názvy jsou tvary P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` a zbytek knihovny P&ID) a sada Elektro (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` a tak dále). Název, který mají společný dvě sady, patří do sady P&ID; chcete-li vybrat jinou, napište dopředu `pid:` nebo `el:`. Název, který CadCraft nezná, se přeskočí a započítá. Symboly se kreslí jako prosté čáry, kružnice a oblouky na vrstvu `Diagram`, zmenšené na výšku textu; nejsou to bloky doplňků s popisky, takže pro pracovní výkres použijte příkazy P&ID nebo Elektro.

Asistenti AI mohou totéž pomocí nástroje `diagram_from_text` v okně.
