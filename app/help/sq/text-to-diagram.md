---
title: Vizato një diagram nga teksti
summary: Ngjit një flowchart Mermaid, një diagram komponentësh PlantUML, D2, një listë nga-te ose XML draw.io dhe CadCraft vendos blloqet dhe lidhësit që mund t'i redaktosh si çdo objekt tjetër.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, model lokal, diagram, flowchart, mermaid, plantuml, d2, nga te, listë nga-te, diagram blloqesh, lidhës, teksti në diagram, DIAGRAM, TEXTDIAGRAM, diagram sistemi, diagram ndërlidhjesh, tubacione, csv
from: b26af54b
---

Shkruaj {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Hapet një kutizë: ngjit tekstin, zgjidh {{ui:Draw}}, kliko cepin e sipërm të majtë të diagramit dhe jep lartësinë e tekstit. CadCraft lexon tekstin, vendos blloqet në shtresa me lidhës kënd të drejtë, dhe i vizaton në një shtresë të quajtur `Diagram`. Objektet e reja zgjidhen, kështu mund t'i zhvendosësh menjëherë. Janë objekte të thjeshta: ndrysho tekstin e një bloku me {{cmd:TEXTEDIT}}, zgjat një lidhës me dorezat e tij, fshi një bllok, shto vijat e tua. Një {{cmd:UNDO}} heq gjithë diagramin.

Në rreshtin e komandave, pa kutizë, teksti mund të jetë një rresht me `;` midis deklaratave: `flowchart LR; A[Pump] --> B[Tank]`.

## Çfarë lexon

| Teksti | Çfarë lexohet |
|---|---|
| **Mermaid** `flowchart` ose `graph` me `TD`, `TB`, `BT`, `LR` ose `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (një vendim, vizatohet si romb), tekst në thonjëza, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, një etiketë si `-->|tekst|` ose `-- tekst -->`, zinxhirë `A --> B --> C`, grupe `A & B --> C`, `<br/>` për rresht të ri, komente `%%` |
| **PlantUML** midis `@startuml` dhe `@enduml` (komponentë dhe vendosje) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` dhe të tjera me emra `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, zinxhirë, `a: Label`, `direction: right`, emra në thonjëza, komente `#` |
| **Listë nga-te** (një tabelë e ngjitur si tekst ose CSV) | kolonat `from`, `to` dhe opsionalisht `label` dhe `type` (`dashed` vizaton një lidhës me vija), në çdo rend, të ndara me presje, pikëpresje ose tab; pa rresht titulli, tri kolonat e para janë from, to, label |

| **XML draw.io** (teksti i një skedari `.drawio`, `<mxfile>` ose `<mxGraphModel>`) | kutia, kutia të rrumbullakosura, elipset, vendimet romb dhe tekst i thjeshtë; kutitë kontejner dhe korsitë (vizatohen me vija të ndërprera me titullin e tyre); lidhësit me pikat e tyre të kthesës, skajet e shigjetave (`endArrow`, `startArrow`) dhe `dashed=1`; etiketat HTML bëhen tekst i thjeshtë, `<UserObject label>` dhe `<object label>` funksionojnë |

Çdo gjë tjetër në një rresht (stile, shënime, kornizat e unazave) kapërcehet, dhe rreshti i komandave thotë sa rreshta u kapërcyen. Një diagram ka më së shumti 400 blloqe dhe 1200 lidhës.

## XML draw.io i mban pozicionet

Gjuhët e tjera thonë çfarë lidhet me çfarë, kështu CadCraft i vendos ato. XML i draw.io tregon tashmë ku është çdo gjë, kështu CadCraft e mban: çdo bllok qëndron aty ku e vendos skedari, i shkallëzuar që një font 12 piksel të bëhet lartësia e tekstit që jep (një kuti 120 me 60 piksel është 60 me 30 njësi vizatimi me lartësi 6), dhe cepi i sipërm i majtë i diagramit shkon te cepi ku klikon. Lidhësit nisen nga skaji i një bllokut dhe arrijnë te skaji i tjetrit, përmes pikave të tyre të kthesës; një lidhës me `orthogonalEdgeStyle` dhe pa pika kthese merr një kthesë të vetme kënd të drejtë.

Ruajtja e parazgjedhur e draw.io është e ngjeshur. Kutia dhe rreshti i komandave e hapin për ty; një mjet asistenti në një dritare pa rrjedhë ngjeshjeje e thotë këtë, dhe `File › Export as › XML` me *Compressed* të shënuar jep XML të thjeshtë. Imazhet, lidhësit me një skaj të lirë dhe faqet e dyta kapërcehen dhe numërohen.

## Shkrimi me një model në kompjuterin tënd

Një model lokal (Ollama, LM Studio, llama.cpp, Jan) mund të shkruajë XML ose tekstin Mermaid nga përmbajtja e një PDF ose SVG, dhe rezultati hyn përmes të njëjtës kutizë, ose drejtpërdrejt në vizatim kur modeli është lidhur si asistent: `diagram_from_text` merr `format` `drawio`. Modelet e vogla bëjnë më shumë gabime në XML sesa në Mermaid ose listë nga-te, kështu që një provë e parë me Mermaid kushton më pak; ajo që lexuesi nuk mund ta përdorë kapërcehet dhe numërohet, nuk hamendësohet. Shih Lidh AI-n tënde për recetat e modeleve.

## Si vendoset

Blloqet hyjnë në shtresa sipas lidhësve (një lidhës që kthehet mbrapa vizatohet përsëri lart), të renditur për të ulur kryqëzimet, me lidhës kënd të drejtë që dalin nga fundi i një bloku dhe hyjnë në majën e tjetrit; `LR` dhe `RL` i kthejnë shtresat në kolona. Lartësia e tekstit që jep vendos madhësinë e gjithë diagramit.

## Nëngrafë dhe diagrame sekuence

- Një `subgraph emri [Titulli]` Mermaid ... `end` vizaton një kuti me vija të ndërprera me titullin e saj rreth blloqeve të saj; nëngrafët mund të futen brenda njëri-tjetrit. Vendosja nuk mban blloqet e tjera jashtë kutisë, kështu zhvendos një bllok të shpërndarë me dorezat e tij.
- Një `sequenceDiagram` Mermaid, ose tekst PlantUML me rreshta `participant` dhe mesazhe `->`, vizatohet si blloqe përgjatë majës, një vijë jete e ndërprerë nën secilin, dhe një rresht për çdo mesazh. `-->` dhe `-->>` janë të ndërprera, `->>` dhe `-)` kanë kokë shigjete, `autonumber` numëron mesazhet, një mesazh për vetveten bën një unazë. Shënimet dhe kornizat `loop` / `alt` kapërcehen.

## Simbole për diagrame me një rresht dhe tubacione

Një bllok mund të jetë një simbol i vizatuar, me emrin e tij nën të, në vend të kutisë. Emërto simbolin në tekst:

| Teksti | Si |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ose një rresht `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ose `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Listë nga-te | kolonat `from_symbol` dhe `to_symbol` |

Emrat janë simbolet P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` dhe pjesa tjetër e bibliotekës P&ID) dhe grupi Elektrik (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` e kështu me radhë). Një emër që dy grupe e ndajnë shkon te grupi P&ID; shkruaj `pid:` ose `el:` përpara për të zgjedhur. Një emër që CadCraft nuk e njeh kapërcehet dhe numërohet. Simbolet vizatohen si vija, rrathë dhe harqe të thjeshta në shtresën `Diagram`, të shkallëzuara sipas lartësisë së tekstit; nuk janë blloqet e shtesave me etiketa, kështu përdor komandat P&ID ose Elektrike për një vizatim pune.

Asistentët AI mund të bëjnë të njëjtën gjë përmes mjetit `diagram_from_text` në dritare.
