---
title: Diagrammas izveide no teksta
summary: Ielīmējiet Mermaid plūsmas shēmu, PlantUML komponentu diagrammu, D2, no-uz sarakstu vai draw.io XML, un CadCraft izkārtos blokus un savienotājus, kurus var rediģēt kā jebkurus citus objektus.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokālais modelis, diagramma, plūsmas shēma, mermaid, plantuml, d2, no-uz, no-uz saraksts, bloku diagramma, savienotāji, teksts diagrammā, DIAGRAM, TEXTDIAGRAM, sistēmas diagramma, elektroinstalācijas shēma, caurules, csv
from: b26af54b
---

Ierakstiet {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Atveras lodziņš: ielīmējiet tekstu, izvēlieties {{ui:Zīmēšana}}, noklikšķiniet diagrammas augšējā kreisajā stūrī un norādiet teksta augstumu. CadCraft nolasa tekstu, izkārto blokus slāņos ar taisnleņķa savienotājiem un zīmē tos slānī ar nosaukumu `Diagram`. Jaunie objekti ir atlasīti, tāpēc tos var uzreiz pārvietot. Tie ir parasti objekti: bloka tekstu mainiet ar {{cmd:TEXTEDIT}}, savienotāju stiepiet ar tā rokturiem, bloku dzēsiet vai pievienojiet savas līnijas. Viena {{cmd:UNDO}} darbība noņem visu diagrammu.

Komandrindā bez lodziņa tekstu var ierakstīt vienā rindā, atdalot paziņojumus ar `;`: `flowchart LR; A[Pump] --> B[Tank]`.

## Ko tas nolasa

| Teksts | Ko nolasa |
|---|---|
| **Mermaid** `flowchart` vai `graph` ar `TD`, `TB`, `BT`, `LR` vai `RL` | `A`, `A[teksts]`, `A(teksts)`, `A([teksts])`, `A{teksts}` (lēmums, zīmēts kā rombs), pēdiņās ievilkts teksts, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, uzraksts kā `-->|teksts|` vai `-- teksts -->`, ķēdes `A --> B --> C`, grupas `A & B --> C`, `<br/>` jaunai rindai, `%%` komentāri |
| **PlantUML** starp `@startuml` un `@enduml` (komponentes un izvietojums) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` un citi ar `as` nosaukumiem, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, ķēdes, `a: Label`, `direction: right`, nosaukumi pēdiņās, `#` komentāri |
| **No-uz saraksts** (tabula, ielīmēta kā teksts vai CSV) | kolonnas `from`, `to` un pēc izvēles `label` un `type` (`dashed` zīmē punktētu savienotāju) jebkurā secībā, atdalītas ar komatiem, semikoliem vai tabulēšanas zīmēm; bez galvenes rindas pirmās trīs kolonnas ir from, to, label |

| **draw.io XML** (`.drawio` faila teksts, `<mxfile>` vai `<mxGraphModel>`) | kastes, noapaļotas kastes, elipses, rombu lēmumi un vienkāršs teksts; konteineru un joslu kastes (zīmētas punktētas ar nosaukumu); savienotāji ar saviem punktiem, bultiņu galiem (`endArrow`, `startArrow`) un `dashed=1`; HTML uzraksti kļūst par vienkāršu tekstu, darbojas `<UserObject label>` un `<object label>` |

Viss pārējais rindā (stili, piezīmes, cilpu rāmji) tiek izlaists, un komandrinda parāda, cik rindu izlaista. Diagrammā var būt līdz 400 blokiem un 1200 savienotājiem.

## Draw.io XML saglabā pozīcijas

Pārējās valodās ir norādīts, kas ar ko savienojas, tāpēc CadCraft to izkārto pats. Draw.io XML jau norāda, kur kas atrodas, tāpēc CadCraft tās saglabā: katrs bloks atrodas tur, kur fails to novieto, mērogots tā, lai 12 pikseļu fonts kļūtu par jūsu norādīto teksta augstumu (120 x 60 pikseļu kaste ir 60 x 30 zīmējuma vienības augstumā 6), un diagrammas augšējais kreisais stūris atrodas tajā vietā, kur noklikšķiniet. Savienotāji iet no viena bloka malas līdz nākamā bloka malai caur saviem punktiem; savienotājs ar `orthogonalEdgeStyle` un bez punktiem saņem vienu taisnleņķa līkumu.

Draw.io noklusējuma saglabāšana ir saspiesta. Kaste un komandrinda to atver automātiski; MI rīks logā bez saspiešanas straumes to pateiks, un `File › Export as › XML` ar atzīmi *Compressed* noņemtu dod vienkāršu XML. Attēli, savienotāji ar brīvu galu un otrās lapas tiek izlaisti un saskaitīti.

## Rakstīšana ar modeli datorā

Lokālais modelis (Ollama, LM Studio, llama.cpp, Jan) var uzrakstīt XML vai Mermaid tekstu no PDF vai SVG satura, un rezultāts tiek ievadīts tajā pašā lodziņā vai tieši rasējumā, ja modelis ir savienots kā palīgs: `diagram_from_text` pieņem `format` `drawio`. Mazāki modeļi XML pieļauj vairāk kļūdu nekā Mermaid vai no-uz saraksts, tāpēc pirmais mēģinājums ar Mermaid ir lētāks; ko lasītājs nevar izmantot, tiek izlaists un saskaitīts, nevis minēts. Sk. Mākslīgā intelekta savienošana modeļu receptēm.

## Kā tas tiek izkārtots

Bloki tiek izvietoti slāņos, sekojot savienotājiem (savienotājs, kas atgriežas atpakaļ, tiek zīmēts uz augšu), sakārtoti tā, lai krustošanos būtu mazāk, ar taisnleņķa savienotājiem, kas iziet no bloka apakšas un ieiet nākamā bloka augšā; `LR` un `RL` pārvērš slāņus kolonnās. Norādītais teksta augstums nosaka visa lielumu.

## Apakšgrafi un secības diagrammas

- Mermaid `subgraph name [Title]` … `end` zīmē punktētu kasti ar nosaukumu ap saviem blokiem; apakšgrafi var būt ligzdoti. Izkārtojums neatur citus blokus ārpus kastes, tāpēc svešu bloku pārvietojiet ar tā rokturiem.
- Mermaid `sequenceDiagram` vai PlantUML teksts ar `participant` rindām un `->` ziņojumiem tiek zīmēts kā bloki augšā, zem katra punktēta dzīvības līnija un viena rinda katram ziņojumam. `-->` un `-->>` ir punktētas, `->>` un `-)` ir bultiņas gals, `autonumber` numurē ziņojumus, ziņojums sev pašam veido cilpu. Piezīmes un `loop` / `alt` rāmji tiek izlaisti.

## Simboli vienlīnijas un cauruļvadu diagrammām

Bloks var būt zīmēts simbols ar nosaukumu zem tā, nevis kaste. Simbolu nosauciet tekstā:

| Teksts | Kā |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` vai rinda `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` vai `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| No-uz saraksts | kolonnas `from_symbol` un `to_symbol` |

Nosaukumi ir P&ID formas (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` un pārējā P&ID bibliotēka) un Elektrotehnikas komplekts (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` un tā tālāk). Ja nosaukums ir divos komplektos, tas tiek ņemts no P&ID komplekta; lai izvēlētos citu, priekšā rakstiet `pid:` vai `el:`. Nezināms nosaukums tiek izlaists un saskaitīts. Simboli tiek zīmēti kā vienkāršas līnijas, apļi un loki slānī `Diagram`, mērogoti pēc teksta augstuma; tie nav pielikumu bloki ar marķējumiem, tāpēc darba rasējumam izmantojiet P&ID vai Elektrotehnikas komandas.

MI palīgi var to pašu darīt ar rīku `diagram_from_text` logā.
