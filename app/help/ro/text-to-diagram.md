---
title: Desenarea unei diagrame din text
summary: Lipiți un organigram Mermaid, o diagramă de componente PlantUML, D2, o listă de la-la sau XML draw.io, iar CadCraft așază blocurile și conectorii, pe care îi puteți edita ca pe orice alt obiect.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, model local, diagramă, organigramă, mermaid, plantuml, d2, de la la, listă de la-la, diagramă bloc, conectori, text în diagramă, DIAGRAM, TEXTDIAGRAM, diagramă de sistem, schemă de cablare, conducte, csv
from: b26af54b
---

Tastați {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Se deschide o casetă: lipiți textul, alegeți {{ui:Desen}}, faceți clic în colțul din stânga sus al diagramei și indicați înălțimea textului. CadCraft citește textul, așază blocurile pe niveluri, cu conectori cu unghi drept, și le desenează pe un strat numit `Diagram`. Obiectele noi sunt selectate, deci le puteți muta imediat. Sunt obiecte obișnuite: schimbați textul unui bloc cu {{cmd:TEXTEDIT}}, întindeți un conector cu mânerele sale, ștergeți un bloc, adăugați propriile linii. Un {{cmd:UNDO}} înlătură întreaga diagramă.

În linia de comandă, fără casetă, textul poate fi o singură linie, cu `;` între instrucțiuni: `flowchart LR; A[Pump] --> B[Tank]`.

## Ce citește

| Text | Ce se citește |
|---|---|
| **Mermaid** `flowchart` sau `graph` cu `TD`, `TB`, `BT`, `LR` sau `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (o decizie, desenată ca romb), text între ghilimele, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, o etichetă ca `-->|text|` sau `-- text -->`, lanțuri `A --> B --> C`, grupuri `A & B --> C`, `<br/>` pentru un rând nou, comentarii `%%` |
| **PlantUML** între `@startuml` și `@enduml` (componente și implementare) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` și altele, cu nume `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, lanțuri, `a: Label`, `direction: right`, nume între ghilimele, comentarii `#` |
| **Listă de la-la** (un tabel lipit ca text sau CSV) | coloanele `from`, `to` și, opțional, `label` și `type` (`dashed` desenează un conector punctat), în orice ordine, separate prin virgule, punct și virgulă sau tab-uri; fără rând de antet, primele trei coloane sunt from, to, label |
| **XML draw.io** (textul unui fișier `.drawio`, `<mxfile>` sau `<mxGraphModel>`) | casete, casete rotunjite, elipse, decizii în romb și text simplu; casete container și de tip culoar (desenate punctat, cu titlul lor); conectori cu punctele lor intermediare, capetele de săgeată (`endArrow`, `startArrow`) și `dashed=1`; etichetele HTML devin text simplu, `<UserObject label>` și `<object label>` funcționează |

Orice altceva de pe o linie (stiluri, note, cadre de buclă) este omis, iar linia de comandă spune câte linii au fost omise. O diagramă are cel mult 400 de blocuri și 1200 de conectori.

## XML draw.io își păstrează pozițiile

Celelalte limbi spun ce se conectează cu ce, deci CadCraft le așază. XML-ul draw.io arată deja unde se află totul, deci CadCraft le păstrează: fiecare bloc se află unde îl pune fișierul, scalat astfel încât un font de 12 pixeli devine înălțimea textului pe care o indicați (o casetă de 120 pe 60 de pixeli are 60 pe 30 de unități de desen la înălțimea 6), iar colțul din stânga sus al diagramei ajunge în colțul pe care faceți clic. Conectorii pornesc de la marginea unui bloc și ajung la marginea următorului, prin punctele lor intermediare; un conector cu `orthogonalEdgeStyle` și fără puncte intermediare primește o singură îndoitură cu unghi drept.

Salvarea implicită a draw.io este comprimată. Caseta și linia de comandă o deschid pentru dumneavoastră. Un instrument de asistent dintr-o fereastră fără flux de comprimare spune asta, iar `File › Export as › XML` cu *Compressed* debifat dă XML simplu. Imaginile, conectorii cu un capăt liber și paginile suplimentare sunt omise și numărate.

## Scrierea cu un model pe calculator

Un model local (Ollama, LM Studio, llama.cpp, Jan) poate scrie XML-ul sau textul Mermaid din conținutul unui PDF sau al unui SVG. Rezultatul intră prin aceeași casetă sau direct în desen, când modelul este conectat ca asistent: `diagram_from_text` primește `format` `drawio`. Modelele mici greșesc mai mult în XML decât în Mermaid sau într-o listă de la-la, deci o primă încercare cu Mermaid costă mai puțin. Ce nu poate citi cititorul este omis și numărat, nu ghicit. Vezi Conectarea la AI pentru rețetele de modele.

## Cum se așază

Blocurile merg pe niveluri urmând conectorii (un conector care se întoarce înapoi este desenat în sus), ordonate pentru a reduce intersecțiile, cu conectori cu unghi drept care ies din partea de jos a unui bloc și intră în partea de sus a următorului. `LR` și `RL` transformă nivelurile în coloane. Înălțimea textului pe care o dați stabilește mărimea tuturor elementelor.

## Subgrafuri și diagrame de secvență

- Un `subgraph name [Title]` Mermaid … `end` desenează o casetă punctată, cu titlul ei, în jurul blocurilor sale; subgrafurile pot fi cuibărite. Așezarea nu ține alte blocuri în afara casetei, deci mutați un bloc rătăcit cu mânerele sale.
- Un `sequenceDiagram` Mermaid, sau text PlantUML cu linii `participant` și mesaje `->`, este desenat ca blocuri pe partea de sus, cu o linie de viață punctată sub fiecare și un rând pentru fiecare mesaj. `-->` și `-->>` sunt punctate, `->>` și `-)` au vârf de săgeată, `autonumber` numerotează mesajele, iar un mesaj către sine însuși face o buclă. Notele și cadrele `loop` / `alt` sunt omise.

## Simboluri pentru diagrame pe o linie și de conducte

Un bloc poate fi un simbol desenat, cu numele sub el, în loc de casetă. Numiți simbolul în text:

| Text | Cum |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` sau o linie `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` sau `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Listă de la-la | coloanele `from_symbol` și `to_symbol` |

Numele sunt simbolurile P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` și restul bibliotecii P&ID) și setul Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` și așa mai departe). Un nume pe care îl au două seturi intră în setul P&ID; scrieți `pid:` sau `el:` în față pentru a alege. Un nume pe care CadCraft nu îl cunoaște este omis și numărat. Simbolurile sunt desenate ca linii, cercuri și arce simple pe stratul `Diagram`, scalate la înălțimea textului. Nu sunt blocurile cu etichete ale suplimentelor, deci folosiți comenzile P&ID sau Electrical pentru un desen de lucru.

Asistenții AI pot face același lucru prin instrumentul `diagram_from_text` din fereastră.
