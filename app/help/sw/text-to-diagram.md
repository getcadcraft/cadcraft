---
title: Chora mchoro kutoka kwenye maandishi
summary: Bandika mchoro wa mtiririko wa Mermaid, mchoro wa vipengele wa PlantUML, D2, orodha ya kutoka-kwenda au XML ya draw.io, na CadCraft itapanga vizuizi na viunganishi unavyoweza kuhariri kama vitu vingine.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modeli ya ndani, mchoro, mchoro wa mtiririko, mermaid, plantuml, d2, orodha ya kutoka-kwenda, mchoro wa vizuizi, viunganishi, mchoro kutoka kwenye maandishi, DIAGRAM, TEXTDIAGRAM, mchoro wa mfumo, mchoro wa nyaya, mabomba, csv
from: b26af54b
---

Andika {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Kisanduku kinafunguka: bandika maandishi, chagua {{ui:Chora}}, bofya kona ya juu kushoto ya mchoro kisha weka kimo cha maandishi. CadCraft inasoma maandishi, inapanga vizuizi katika tabaka zenye viunganishi vya pembe ya kulia, na kuvichora kwenye tabaka liitwalo `Diagram`. Vitu vipya vimechaguliwa, kwa hiyo unaweza kuvihamisha mara moja. Ni vitu vya kawaida: badilisha maandishi ya kizuizi kwa {{cmd:TEXTEDIT}}, vuta kiunganishi kwa vipini vyake, futa kizuizi, ongeza mistari yako mwenyewe. {{cmd:UNDO}} moja huondoa mchoro mzima.

Kwenye mstari wa amri, bila kisanduku, maandishi yanaweza kuwa mstari mmoja wenye `;` kati ya sentensi: `flowchart LR; A[Pump] --> B[Tank]`.

## Kinachosomwa

| Maandishi | Kinachosomwa |
|---|---|
| **Mermaid** `flowchart` au `graph` yenye `TD`, `TB`, `BT`, `LR` au `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (uamuzi, unachorwa kama almasi), maandishi yaliyonukuliwa, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, lebo kama `-->|text|` au `-- text -->`, minyororo `A --> B --> C`, vikundi `A & B --> C`, `<br/>` kwa mstari mpya, maoni ya `%%` |
| **PlantUML** kati ya `@startuml` na `@enduml` (vipengele na usambazaji) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` na nyingine zenye majina ya `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, minyororo, `a: Label`, `direction: right`, majina yaliyonukuliwa, maoni ya `#` |
| **Orodha ya kutoka-kwenda** (jedwali lililobandikwa kama maandishi au CSV) | safu `from`, `to` na hiari `label` na `type` (`dashed` huchora kiunganishi chenye mistari), kwa mpangilio wowote, zikitenganishwa kwa koma, semikoloni au tabu; bila mstari wa kichwa, safu tatu za kwanza ni from, to, label |

| **XML ya draw.io** (maandishi ya faili la `.drawio`, `<mxfile>` au `<mxGraphModel>`) | visanduku, visanduku vyenye pembe za mviringo, duara, uamuzi wa almasi na maandishi tupu; visanduku vya kontena na vya njia za kuogelea (vinachorwa kwa mistari yenye vichwa vyake); viunganishi pamoja na sehemu zao za kupitia, ncha za mishale (`endArrow`, `startArrow`) na `dashed=1`; lebo za HTML zinakuwa maandishi tupu, `<UserObject label>` na `<object label>` zinafanya kazi |

Chochote kingine kwenye mstari (mitindo, maelezo, fremu za mzunguko) kinaruka, na mstari wa amri unasema ni mistari mingapi iliyoruka. Mchoro una vizuizi 400 kwa upeo na viunganishi 1200.

## XML ya draw.io inahifadhi nafasi zake

Lugha nyingine zinasema kinachounganishwa na nini, kwa hiyo CadCraft inakipanga. XML ya draw.io tayari inasema kila kitu kiko wapi, kwa hiyo CadCraft inakihifadhi: kila kizuizi kinakaa mahali faili inapokiweka, kikipimwa ili fonti ya pikseli 12 iwe kimo cha maandishi unachotoa (kisanduku cha pikseli 120 kwa 60 ni vitengo vya kuchora 60 kwa 30 kwenye kimo cha 6), na kona ya juu kushoto ya mchoro inaenda kwenye kona unayobofya. Viunganishi vinatoka ukingo wa kizuizi kimoja hadi ukingo wa kinachofuata, kupitia sehemu zao za kupitia; kiunganishi chenye `orthogonalEdgeStyle` na bila sehemu za kupitia kinapata kona moja ya pembe ya kulia.

Uhifadhi wa kawaida wa draw.io umebanwa. Kisanduku na mstari wa amri vinaifungua kwa ajili yako; zana ya msaidizi wa AI kwenye dirisha lisilo na mkondo wa kubana inasema hivyo, na `File › Export as › XML` yenye *Compressed* isiyochaguliwa inatoa XML tupu. Picha, viunganishi vyenye ncha iliyolegea na kurasa za pili vinaruka na kuhesabiwa.

## Kuandika kwa kutumia modeli kwenye kompyuta yako

Modeli ya ndani (Ollama, LM Studio, llama.cpp, Jan) inaweza kuandika XML au maandishi ya Mermaid kutoka kwenye yaliyomo ya PDF au SVG, na matokeo yanaingia kupitia kisanduku hicho hicho, au moja kwa moja kwenye mchoro modeli ikiunganishwa kama msaidizi: `diagram_from_text` inachukua `format` `drawio`. Modeli ndogo hufanya makosa mengi zaidi kwenye XML kuliko kwenye Mermaid au orodha ya kutoka-kwenda, kwa hiyo jaribio la kwanza kwa Mermaid ni nafuu zaidi; kisichoweza kutumiwa na msomaji kinaruka na kuhesabiwa, si kubashiriwa. Tazama Unganisha AI yako kwa mapishi ya modeli.

## Jinsi inavyopangwa

Vizuizi huwekwa katika tabaka kufuatana na viunganishi (kiunganishi kinachorudi nyuma huchorwa kikipanda juu), vikipangwa kupunguza kuvuka; viunganishi vya pembe ya kulia vinatoka chini ya kizuizi na kuingia juu ya kinachofuata; `LR` na `RL` hugeuza tabaka kuwa safu wima. Kimo cha maandishi unachotoa ndicho huweka ukubwa wa kila kitu.

## Subgrafu na michoro ya mfuatano

- `subgraph name [Title]` ya Mermaid … `end` huchora kisanduku chenye mistari chenye kichwa chake kuzunguka vizuizi vyake; subgrafu zinaweza kuwekwa ndani ya nyingine. Mpangilio haizuii vizuizi vingine kuingia kisanduku, kwa hiyo sogeza kizuizi kilichopotea kwa vipini vyake.
- `sequenceDiagram` ya Mermaid, au maandishi ya PlantUML yenye mistari ya `participant` na ujumbe wa `->`, huchorwa kama vizuizi juu, mstari wa maisha wenye mistari kila chini yake, na safu moja kwa kila ujumbe. `-->` na `-->>` ni za mistari, `->>` na `-)` zina kichwa cha mshale, `autonumber` huhesabu ujumbe, ujumbe kwa nafsi yako hujizungusha. Maelezo na fremu za `loop` / `alt` zinaruka.

## Alama za michoro ya mstari mmoja na mabomba

Kizuizi kinaweza kuwa alama iliyochorwa, ikiwa na jina lake chini yake, badala ya kisanduku. Taja alama kwenye maandishi:

| Maandishi | Jinsi |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` au mstari `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` au `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Orodha ya kutoka-kwenda | safu `from_symbol` na `to_symbol` |

Majina ni maumbo ya P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` na maktaba nzima ya P&ID) na seti ya Umeme (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` na kadhalika). Jina linalofanana katika seti mbili linaenda kwenye seti ya P&ID; andika `pid:` au `el:` mbele yake ili kuchagua. Jina ambalo CadCraft haulijui linaruka na kuhesabiwa. Alama zinachorwa kama mistari, duara na mikunjo ya kawaida kwenye tabaka la `Diagram`, zikipimwa kwa kimo cha maandishi; si vizuizi vya nyongeza vyenye lebo, kwa hiyo tumia amri za P&ID au Umeme kwa mchoro wa kazi.

Misaidizi wa AI wanaweza kufanya vivyo hivyo kupitia zana ya `diagram_from_text` kwenye dirisha.
