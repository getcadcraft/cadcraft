---
title: Samee jaantus qoraal ka
summary: Ku dheji flowchart Mermaid ah, jaantuska qaybaha PlantUML, D2, liis from-to ah ama XML draw.io, CadCraft wuxuu u habeeyaa bloogyada iyo isku-xirayaasha, kuna tafatiri kartaa sida walxaha kale.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modelka maxalliga, jaantus, mermaid, plantuml, d2, from to, liiska from-to, jaantuska bloogyada, isku-xirayaasha, jaantus qoraal ka, DIAGRAM, TEXTDIAGRAM, jaantuska nidaamka, jaantuska xariiqyada korontada, dhuumaha, csv
from: b26af54b
---

Ku qor {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Sanduuq ayaa furmaya: ku dheji qoraalka, dooro {{ui:Sawir}}, guji geeska sare ee bidix ee jaantuska oo geli dhererka qoraalka. CadCraft wuxuu akhrinayaa qoraalka, wuxuu bloogyada u habeeyaa lakabyo oo leh isku-xirayaal xagal qumman, wuxuuna ku sawiraa lakab la yiraahdo `Diagram`. Walxaha cusub waa la doortay, sidaas darteed waad isla markiiba u guuri kartaa. Waa walxo caadi ah: qoraalka bloog kasta waxaad ku beddeli kartaa {{cmd:TEXTEDIT}}, isku-xirayaasha waxaad ku fidin kartaa gacmahooda (grips), bloog waad tirtiri kartaa, khadad kale waad ku dari kartaa. Hal {{cmd:UNDO}} ayaa jaantuska oo dhan ka saaraya.

Sanduuqa la'aan, safka amarka, qoraalku wuxuu noqon karaa hal xariiq oo `;` ku kala saaran tilmaamaha: `flowchart LR; A[Pump] --> B[Tank]`.

## Waxa uu akhriyo

| Qoraal | Waxa la akhriyo |
|---|---|
| **Mermaid** `flowchart` ama `graph` oo leh `TD`, `TB`, `BT`, `LR` ama `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (go'aan, oo lagu sawiro qaab diamond), qoraal xigasho, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, calaamad oo ah `-->|text|` ama `-- text -->`, silsiladaha `A --> B --> C`, kooxaha `A & B --> C`, `<br/>` oo xariiq cusub ah, faallooyinka `%%` |
| **PlantUML** dhexdooda `@startuml` iyo `@enduml` (qaybta iyo geynta) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` iyo kuwa kale oo leh magacyo `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, silsiladaha, `a: Label`, `direction: right`, magacyada xigashada, faallooyinka `#` |
| **Liis from-to** (miis qoraal ahaan loo dhejiyey ama CSV) | tiirarka `from`, `to` iyo ikhtiyaar ahaan `label` iyo `type` (`dashed` wuxuu sawiraa isku-xiro dashed ah), siday u kala horreeyaan, oo waxaa kala saaraya koomo, tiir-kala-saar ama tab; haddii aanu jirin xariiq madax ah, saddexda tiir ee hore waa from, to, label |

| **draw.io XML** (qoraalka faylka `.drawio`, `<mxfile>` ama `<mxGraphModel>`) | sanduuqyo, sanduuqyo geesaha wareegsan, ellipses, go'aanka qaabka rhombus iyo qoraal caadi ah; sanduuqyada hoose-xariiq (swimlane) iyo sanduuqyada weyn (lagu sawiro dashed oo leh cinwaankooda); isku-xirayaasha iyo dhibcahooda waddada, dhamaadka fallaadaha (`endArrow`, `startArrow`) iyo `dashed=1`; calaamadaha HTML waxay noqdaan qoraal caadi ah, `<UserObject label>` iyo `<object label>` way shaqeeyaan |

Wax kasta oo kale oo xariiq kasta ku jira (qaabab, qoraallo, goobaha wareegga) waa la dhaafaa, amarka safka ayaa sheegaya inta xariiq ee la dhaafay. Jaantus wuxuu leeyahay ugu badnaan 400 bloog iyo 1200 isku-xiro.

## Draw.io XML wuxuu hayaa meelahiisa

Luqadaha kale waxay sheegaan wax la isku xirayo, sidaas darteed CadCraft ayaa u habeeyaa. Draw.io XML horey ayuu u sheegaa meel kasta, sidaas darteed CadCraft waa hayaa: bloog kasta wuxuu joogaa meesha faylku dhigay, ballaacaysan ama yarayn ka dib font 12 pixel oo loo beddelo dhererka qoraalka aad gelisay (sanduuq 120 x 60 pixel waa 60 x 30 halbeeg jaantus marka dhererka qoraalku yahay 6). Geeska sare ee bidix ee jaantuska wuxuu tagaa geeska aad gujisay. Isku-xirayaashu waxay ka socdaan geesha hal bloog ilaa geesha kan xiga, iyagoo mara dhibcahooda; isku-xiro leh `orthogonalEdgeStyle` oo aan dhibco lahayn wuxuu helaa hal xagal qumman.

Kaydinta caadiga ah ee Draw.io waa la kala saaray (compressed). Sanduuqa iyo safka amarka ayaa u furaan; qalab caawiye ah daaqad aan xariiq kala saarid lahayn ayaa sheegaysa, `File › Export as › XML` oo leh *Compressed* aan la calaamayn wuxuu bixiyaa XML caadi ah. Sawirada, isku-xirayaasha dhamaadkoodu furan yahay iyo bogagga labaad waa la dhaafaa oo waa la tiriyaa.

## Qoraalka oo leh moodel kumbuyuutarkaaga

Moodel maxalli ah (Ollama, LM Studio, llama.cpp, Jan) wuxuu qori karaa XML ama qoraalka Mermaid laga soo qaatay waxa ku jira PDF ama SVG, natiijadana waxay gelaysaa sanduuqii isla hal, ama si toos ah ayay jaantuska u gashaa marka moodelku ku xirmo caawiye, `diagram_from_text` wuxuu qaataa `format` `drawio`. Moodeelo yaryar khaladaad badan ayay ku sameeyaan XML marka loo eego Mermaid ama liiska from-to, sidaas darteed isku day koowaad oo Mermaid ah ayaa jaban; wixii akhristuhu isticmaali karin waa la dhaafaa oo la tiriyaa, ma la malaynayo. Eeg Ku xidh AI-gaaga si aad u aragto sharraxa moodelada.

## Sida loo habeeyo

Bloogyada waxay galaan lakabyo raacaya isku-xirayaasha (isku-xiro soo noqda waa la sawiraa, oo dib u kor ayuu u kacaa), waxaa loo habeeyey si looga hortago isgoysyada, isku-xiro xagal qumman oo ka baxa hoosta bloog oo gaadha sare bloogga xiga; `LR` iyo `RL` lakabyada ka dhigaan tiirar. Dhererka qoraalka aad gelisay ayaa dejinaya cabbirka wax kasta.

## Kooxaha hoose iyo jaantusyada taxanaha

- `subgraph name [Title]` oo Mermaid ah ... `end` wuxuu sawiraa sanduuq dashed ah oo cinwaankiisu ku wareegsan yahay bloogyadiisa; kooxaha hoose waxay ku jiri karaan kuwa kale. Habeeyuhu ma ilaaliyo bloogyada kale ka baxsan sanduuqa, sidaas darteed bloog-kuulan ku guuri gacmaha.
- `sequenceDiagram` oo Mermaid ah, ama qoraal PlantUML oo leh xariiqyo `participant` iyo fariimo `->`, waxaa loo sawiraa sida bloogyo sare ka socda, xariiq dashed ah oo hoos u dhacda mid walba, iyo safka fariin kasta. `-->` iyo `-->>` waa dashed, `->>` iyo `-)` waxay leeyihiin madax fallaad, `autonumber` wuxuu lambarayaa fariimaha, fariin uu qofku isaga ku diro wuu wareegayaa. Qoraallada iyo qaabaabka `loop` / `alt` waa la dhaafaa.

## Calaamadaha jaantusyada hal-xariiq iyo dhuumaha

Bloog wuxuu noqon karaa calaamad la sawiray, magaciisa hoosteeda, halkii sanduuq. Magaca calaamadda qoraalka ku qor:

| Qoraal | Sida |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ama xariiq `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ama `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Liis from-to | tiirarka `from_symbol` iyo `to_symbol` |

Magacyadu waa qaababka P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` iyo maktabadda P&ID ee intiisa kale) iyo jaantuska Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` iyo kuwa kale). Magac ay labada jaantus wada leeyihiin wuxuu u gudbaa jaantuska P&ID; si aad doorato, ku qor `pid:` ama `el:` hore. Magac aan CadCraft garanayn waa la dhaafaa oo la tiriyaa. Calaamadaha waxaa loo sawiraa khadad, goobo iyo qaansooyin fudud oo ku jira lakabka `Diagram`, oo loo cabbiray dhererka qoraalka; ma aha bloogyada add-on-ka leh tags, sidaas darteed amarrada P&ID ama Electrical isticmaal naqshad shaqo.

Caawiyeyaasha AI waxay sameyn karaan isla taas iyagoo isticmaalaya qalabka `diagram_from_text` daaqadda.
