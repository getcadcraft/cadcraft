---
title: Dweba udayagramu ngombhalo
summary: Namathisela i-flowchart ye-Mermaid, idayagramu yengxenye ye-PlantUML, i-D2, uhlu lokuvela-kuya noma i-XML ye-draw.io, bese i-CadCraft ihlela amabhlokhi nezixhumi ongazihlela njengamanye amagama ezinto.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, imodeli yendawo, udayagramu, flowchart, mermaid, plantuml, d2, kusuka kuya, uhlu oluvela-kuya, udayagramu wamabhlokhi, izixhumi, umbhalo kudayagramu, DIAGRAM, TEXTDIAGRAM, udayagramu wesistimu, udayagramu wezintambo, amapayipi, csv
from: b26af54b
---

Thayipha {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Kuvulwa ibhokisi: namathisela umbhalo, khetha {{ui:Dweba}}, chofoza ikhoneli elingakwesobunxele ngasenhla kwedayagramu bese unikeza ukuphakama kombhalo. I-CadCraft ifunda umbhalo, ihlele amabhlokhi ezingqimbeni ngezixhumi zamakhona aqondile, bese iwadweba engqimbeni ebizwa ngokuthi `Diagram`. Izinto ezintsha ziyakhethwa, ngakho ungazihambisa ngokushesha. Zinhle njengezinye izinto: shintsha umbhalo webhlokhi nge-{{cmd:TEXTEDIT}}, eluleka ixhumi ngezibambi zalo, susa ibhlokhi, engeza imigqa yakho. Umyalo owodwa we-{{cmd:UNDO}} usula udayagramu wonke.

Emgqeni womyalo, ngaphandle kwebhokisi, umbhalo ungaba umugqa owodwa onezitatimende ezihlukaniswe ngu-`;`: `flowchart LR; A[Pump] --> B[Tank]`.

## Lokho okufundwayo

| Umbhalo | Okufundwayo |
|---|---|
| **Mermaid** `flowchart` noma `graph` ene-`TD`, `TB`, `BT`, `LR` noma `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (isinqumo, sidwetshwa njengedayimondi), umbhalo ophakathi kwamagwebu, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, ilebula njenge `-->|text|` noma `-- text -->`, amaketango `A --> B --> C`, amaqembu `A & B --> C`, `<br/>` ukuze kube ngumugqa omusha, izimpawu `%%` zokuphawula |
| **PlantUML** phakathi kwe `@startuml` ne `@enduml` (ingxenye nokusebenza) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` nokunye okunamagama ane-`as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, amaketango, `a: Label`, `direction: right`, amagama ophawulo, izimpawu `#` zokuphawula |
| **Uhlu oluvela-kuya** (ithebhu enamathiselwe njengombhalo noma njenge-CSV) | amakholomu `from`, `to` nokungaba khona `label` no `type` (`dashed` idweba ixhumi elinamachashaza), ngoba yiliphi ohlelweni, ahlukaniswe ngamakhoma, amasemikholoni noma amathebhu; ngaphandle komugqa wekhanda, amakholomu amathathu okuqala ayi-from, to, label |

| **I-XML ye-draw.io** (umbhalo wefayela le-`.drawio`, i-`<mxfile>` noma i-`<mxGraphModel>`) | amabhokisi, amabhokisi ajikelezayo, ama-ellipse, izinqumo zedayimondi nombhalo ovamile; amabhokisi okugcina nama-swimlane (adwetshwa ngamachashaza nesihloko sawo); izixhumi namaphuzu azo okudlula, izincazelo zokuphela komcibisholo (`endArrow`, `startArrow`) ne-`dashed=1`; amalebula e-HTML aba umbhalo ovamile, `<UserObject label>` ne-`<object label>` ayasebenza |

Okunye okusemugqeni ngamunye (izitayela, amanothi, izinhlaka zokuzungeza) kuyadlulwa, futhi umugqa womyalo utshela ukuthi imigqa emingaki edlulisiwe. Udayagramu unganamabhlokhi angu-400 nezixhumi ezingu-1200 kuphela.

## I-XML ye-Draw.io igcina izindawo zayo

Ezinye izilimi zithi yini eyixhumayo kuyini, ngakho i-CadCraft iyihlela. I-XML ye-Draw.io isivele ishilo lapho konke kukhona, ngakho i-CadCraft iyagcina: ibhlokhi ngayinye ihlala lapho ifayela liyibeka khona, ilinganiswe ukuze ifonti ye-12-pixel ibe ukuphakama kombhalo onikezayo (ibhokisi elingu-120 ngu-60 pixel liba ngu-60 ngu-30 amayunithi wokudweba ngokuphakama okungu-6), futhi ikhoneli elingakwesobunxele ngasenhla kwedayagramu lihlala ekhoneni ochofoza kulo. Izixhumi zihamba kusuka emaphethelweni ebhlokhi eyodwa kuya kowelandelayo, zidlule emaphuzwini azo okudlula; ixhumi elinesitayela se-`orthogonalEdgeStyle` nopho wokudlula ngalinye linikezwa ibhendi eyodwa yamakhona aqondile.

Ukugcinwa okuzenzakalelayo kwe-Draw.io kuyacindezelwa. Ibhokisi nomugqa womyalo kuyikhulula ngawe; ithuluzi lomsizi ewindini elingenayo i-compression stream liyakusho lokho, futhi `File › Export as › XML` nge-*Compressed* ingakhethiwe linikeza i-XML evamile. Izithombe, izixhumi ezinesiphetho esikhululekile namakhasi wesibili kuyadlulwa futhi kubalwe.

## Ukubhala ngemodeli ekhompyutheni yakho

Imodeli yendawo (Ollama, LM Studio, llama.cpp, Jan) ingabhala i-XML noma umbhalo we-Mermaid ngokuqukethwe kwe-PDF noma kwe-SVG, futhi umphumela ungena ngalelo bhokisi elifanayo, noma ungena ngqo kudayagramu uma imodeli ixhunywe njengomsizi: `diagram_from_text` ithatha `format` `drawio`. Amamodeli amancane enza amaphutha amaningi ku-XML kunasezi-Mermaid noma kuhlu oluvela-kuya, ngakho ukuzama kokuqala nge-Mermaid kuyasiza kakhulu; okungafundeki umfundi kuyadlulwa futhi kubalwe, kungaqagelwa. Bheka Xhuma i-AI yakho ngezindlela zemodeli.

## Indlela okuhlelwa ngayo

Amabhlokhi angena ezingqimbeni ezilandela izixhumi (ixhumi elibuyela emuva liyadwetshwa libuyele phezulu), ohlelwe ukunciphisa ukuqansana, namaxhumi wamakhona aqondile aphuma ngaphansi kwebhlokhi aphinde angene ngaphezulu kolandelayo; i-`LR` ne-`RL` ishintsha izingqimba ibe ngamakholomu. Ukuphakama kombhalo onikezayo kubeka usayizi wakho konke.

## Ama-subgraph nedayagramu wokulandelana

- I-`subgraph name [Title]` … `end` ye-Mermaid idweba ibhokisi elinemigqa yamachashaza elinesihloko sawo ezungeze amabhlokhi awo; ama-subgraph angafakwa phakathi kwawo. Ukuhlelwa akugcini amanye amabhlokhi ngaphandle kwebhokisi, ngakho hambisa ibhlokhi elizulazulayo ngezibambi zalo.
- I-`sequenceDiagram` ye-Mermaid, noma umbhalo we-PlantUML onemigqa ye-`participant` nemilayezo ye-`->`, idwetshwa njengamabhlokhi aphezulu, umugqa wokuphila ochashaziwe ngaphansi kwngayinye nomugqa owodwa ngomlayezo ngamunye. I-`-->` ne-`-->>` ziyachashazwa, i-`->>` ne-`-)` zinekhanda lomcibisholo, i-`autonumber` ibala imilayezo, umlayezo wowakho uyabuya. Amanothi nezinhlaka ze-`loop` / `alt` ayadlulwa.

## Izimpawu zodayagramu womugqa owodwa namapayipi

Ibhlokhi lingaba yimpawu edwetshiwe, negama layo ngaphansi kwayo, esikhundleni sebhokisi. Qamba impawu kumbhalo:

| Umbhalo | Kanjani |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` noma umugqa `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` noma `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Uhlu oluvela-kuya | amakholomu `from_symbol` no `to_symbol` |

Amagama ngamagama wezimpawu ze-P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` nakho konke okunye kwelaibrari ye-P&ID) nesethi ye-Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` njalo njalo). Igama elabelwa yizethi zombili liya kusethi ye-P&ID; bhala `pid:` noma `el:` phambili ukuze ukhethe. Igama i-CadCraft engalazi liyadlulwa futhi libalwe. Izimpawu zidwetshwa njengemigqa, izindilinga nama-arc ajwayelekile engqimbeni `Diagram`, zilinganiswe ukuphakama kombhalo; azibe amabhlokhi e-add-on anamathegi, ngakho sebenzisa imiyalo ye-P&ID noma ye-Electrical ngodwebo olusebenzayo.

Osizakalo be-AI bangenza okufanayo ngethuluzi `diagram_from_text` ewindini.
