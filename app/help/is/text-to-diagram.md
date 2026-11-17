---
title: Teikna skýringarmynd úr texta
summary: Límdu inn Mermaid-flæðirit, PlantUML-íhlutamynd, D2, lista frá-til eða draw.io XML og CadCraft raðar blokkum og tengingum sem þú getur breytt eins og öðrum hlutum.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, staðbundið líkan, skýringarmynd, flæðirit, mermaid, plantuml, d2, frá til, listi frá-til, blokkarmynd, tengingar, texti í skýringarmynd, DIAGRAM, TEXTDIAGRAM, kerfismynd, raflagnamynd, lagnir, csv
from: b26af54b
---

Sláðu inn {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Gluggi opnast: límdu textann, veldu {{ui:Teikna}}, smelltu á efra vinstra horn skýringarmyndarinnar og gefðu upp hæð textans. CadCraft les textann, raðar blokkunum í lög með réttuhornatengingum og teiknar þær á lag sem heitir `Diagram`. Nýju hlutirnir eru valdir, svo þú getur fært þá strax. Þetta eru venjulegir hlutir: breyttu texta blokkar með {{cmd:TEXTEDIT}}, teygðu tengingu með gripum hennar, eyddu blokk eða bættu eigin línum við. Eitt {{cmd:UNDO}} fjarlægir alla skýringarmyndina.

Í skipanalínunni, án gluggans, getur textinn verið ein lína með `;` á milli fullyrðinga: `flowchart LR; A[Pump] --> B[Tank]`.

## Hvað er lesið

| Texti | Hvað er lesið |
|---|---|
| **Mermaid** `flowchart` eða `graph` með `TD`, `TB`, `BT`, `LR` eða `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (ákvörðun, teiknuð sem tígull), texti í gæsalöppum, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, merki sem `-->|text|` eða `-- text -->`, keðjur `A --> B --> C`, hópar `A & B --> C`, `<br/>` fyrir nýja línu, `%%` athugasemdir |
| **PlantUML** milli `@startuml` og `@enduml` (íhluta- og uppsetningarmynd) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` og fleiri með `as`-heitum, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, keðjur, `a: Label`, `direction: right`, heiti í gæsalöppum, `#` athugasemdir |
| **Listi frá-til** (tafla límd inn sem texti eða CSV) | dálkarnir `from`, `to` og valfrjálst `label` og `type` (`dashed` teiknar strikaða tengingu), í hvaða röð sem er, aðskilin með kommum, semíkommum eða tabbum; án hausalínu eru fyrstu þrír dálkarnir frá, til og merki |

| **draw.io XML** (texti `.drawio`-skrár, `<mxfile>` eða `<mxGraphModel>`) | kassar, ávalir kassar, sporöskjur, tígulákvarðanir og venjulegur texti; ílát- og brautakassar (teiknaðir strikaðir með titli sínum); tengingar með punktum sínum, örvaendum (`endArrow`, `startArrow`) og `dashed=1`; HTML-merki verða að venjulegum texta, `<UserObject label>` og `<object label>` virka |

Allt annað á línu (stílar, athugasemdir, lykkjurammar) er sleppt og skipanalínan segir hversu margar línur voru sleptar. Skýringarmynd getur að hámarki haft 400 blokkir og 1200 tengingar.

## Draw.io XML heldur staðsetningum sínum

Hin tungumálin segja hvað tengist hverju, svo CadCraft raðar þeim. Draw.io XML segir þegar hvar allt er, svo CadCraft heldur þeim: hver blokk er þar sem skráin setur hana, skölunin er þannig að 12 pixla letur verður sá textahæð sem þú gefur (120 x 60 pixla kassi er 60 x 30 teikniseiningar við hæð 6), og efra vinstra horn skýringarmyndarinnar fer í hornið sem þú smellir á. Tengingar liggja frá jaðri einnar blokkar að jaðri þeirrar næstu, í gegnum punkta sína; tenging með `orthogonalEdgeStyle` og engum punktum fær eina réttuhornabeygju.

Sjálfgefin vistun draw.io er þjöppuð. Kassinn og skipanalínan opna hana fyrir þig; aðstoðarverkfæri í glugga án þjöppunarstraums segir til um það, og `File › Export as › XML` með *Compressed* afhakað gefur venjulegt XML. Myndir, tengingar með lausum enda og aukasíður eru sleppt og talin.

## Að skrifa það með líkani í tölvunni þinni

Staðbundið líkan (Ollama, LM Studio, llama.cpp, Jan) getur skrifað XML eða Mermaid-texta út frá efni PDF-skrár eða SVG-skrár, og niðurstaðan fer inn um sama kassa, eða beint í teikninguna þegar líkanið er tengt sem aðstoðarmaður: `diagram_from_text` tekur `format` `drawio`. Litlar líkön gera fleiri villur í XML en í Mermaid eða lista frá-til, svo fyrsta tilraun með Mermaid er ódýrari; það sem lesandinn getur ekki notað er sleppt og talið, ekki giskað á það. Sjá Tengja gervigreindina þína fyrir uppskriftir af líkönum.

## Hvernig raðað er

Blokkum er raðað í lög eftir tengingunum (tenging sem lykkjar til baka er teiknuð aftur upp), í þeirri röð sem heldur skurðpunktum í lágmarki, með réttuhornatengingum sem fara úr neðri hluta blokkar og inn í efri hluta þeirrar næstu; `LR` og `RL` snúa lögunum í dálka. Textahæðin sem þú gefur ákvarðar stærð alls.

## Undirhópar og raðmyndir

- Mermaid `subgraph name [Title]` … `end` teiknar strikaðan kassa með titli sínum utan um blokkir sínar; undirhópar mega vera innan í öðrum. Skipulagið heldur ekki öðrum blokkum utan kassans, svo færðu villublokk með gripum hennar.
- Mermaid `sequenceDiagram`, eða PlantUML-texti með `participant`-línum og `->` skilaboðum, er teiknaður sem blokkir efst, strikuð lífslína undir hverri og ein röð fyrir hver skilaboð. `-->` og `-->>` eru strikuð, `->>` og `-)` hafa örvaroddi, `autonumber` númerar skilaboðin, og skilaboð til sjálfs sín lykkja. Athugasemdum og römmum `loop` / `alt` er sleppt.

## Tákn fyrir einlínu- og lagnamyndir

Blokk getur verið teiknað tákn með nafni sínu undir sér í stað kassa. Nefndu táknið í textanum:

| Texti | Hvernig |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` eða línan `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` eða `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Listi frá-til | dálkarnir `from_symbol` og `to_symbol` |

Heitin eru P&ID-formin (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` og restin af P&ID-safninu) og Rafmagnssettið (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` og svo framvegis). Heiti sem tvö söfn deila fara í P&ID-settið; skrifaðu `pid:` eða `el:` fyrir framan til að velja. Heiti sem CadCraft þekkir ekki er sleppt og talið. Táknin eru teiknuð sem venjulegar línur, hringir og bogar á laginu `Diagram`, skölluð að textahæðinni; þau eru ekki blokkir viðbótanna með merkjum, svo notaðu P&ID- eða rafmagnsskipanirnar fyrir vinnuteikningu.

Aðstoðarmenn gervigreindar geta gert það sama með `diagram_from_text`-verkfærinu í glugganum.
