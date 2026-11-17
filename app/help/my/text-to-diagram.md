---
title: စာသားမှ ဒိုင်ယာဂရမ် ဆွဲခြင်း
summary: Mermaid flowchart၊ PlantUML component diagram၊ D2၊ from-to စာရင်း သို့မဟုတ် draw.io XML ကို ကူးထည့်ပါ၊ CadCraft က အခြားအရာများကဲ့သို့ တည်းဖြတ်နိုင်သော block နှင့် connector များကို အပြင်အဆင်ချပေးမည်။
keywords: draw.io, drawio, diagrams.net, mxfile, xml, ဒေသခံ မော်ဒယ်, ဒိုင်ယာဂရမ်, flowchart, mermaid, plantuml, d2, from to, from-to စာရင်း, block ဒိုင်ယာဂရမ်, connector များ, စာသားမှ ဒိုင်ယာဂရမ်, DIAGRAM, TEXTDIAGRAM, စနစ် ဒိုင်ယာဂရမ်, ဝါယာကြိုး ဒိုင်ယာဂရမ်, piping, csv
from: b26af54b
---

{{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`) ကို ရိုက်ပါ။ အကွက်တစ်ခု ပွင့်လာမည်: စာသားကို ကူးထည့်ပါ၊ {{ui:Draw}} ကို ရွေးပါ၊ ဒိုင်ယာဂရမ်၏ ဘယ်ဘက်အပေါ်ထောင့်ကို နှိပ်ပြီး စာသားအမြင့်ကို ပေးပါ။ CadCraft က စာသားကို ဖတ်ပြီး block များကို layer များအလိုက် right-angle connector များဖြင့် အပြင်အဆင်ချကာ `Diagram` ဟုခေါ်သော layer ပေါ်တွင် ဆွဲပေးမည်။ အသစ်ဖန်တီးထားသော အရာများကို ရွေးထားမည်ဖြစ်သဖြင့် ချက်ချင်း ရွှေ့နိုင်သည်။ ၎င်းတို့မှာ ရိုးရိုး object များ ဖြစ်သည်: block ၏ စာသားကို {{cmd:TEXTEDIT}} ဖြင့် ပြောင်းပါ၊ connector ကို ၎င်း၏ grip များဖြင့် ဆွဲဆန့်ပါ၊ block ကို ဖျက်ပါ၊ ကိုယ်ပိုင် မျဉ်းများ ထပ်ထည့်ပါ။ {{cmd:UNDO}} တစ်ကြိမ်ဖြင့် ဒိုင်ယာဂရမ် တစ်ခုလုံးကို ဖယ်ရှားနိုင်သည်။

Command line တွင် အကွက်မသုံးဘဲ စာသားကို `;` ဖြင့် ခြားထားသော ကြောင်းတစ်ကြောင်းတည်း အဖြစ် ရေးနိုင်သည်: `flowchart LR; A[Pump] --> B[Tank]`။

## ဖတ်နိုင်သော အရာများ

| စာသား | ဖတ်ယူသည်များ |
|---|---|
| **Mermaid** `flowchart` သို့မဟုတ် `graph` ကို `TD`, `TB`, `BT`, `LR` သို့မဟုတ် `RL` ဖြင့် | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (ဆုံးဖြတ်ချက်၊ diamond အဖြစ် ဆွဲသည်), ကိုးကားထားသော စာသား, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, `-->\|text\|` သို့မဟုတ် `-- text -->` ပုံစံ label, `A --> B --> C` ကဲ့သို့ chain များ, `A & B --> C` ကဲ့သို့ group များ, စာကြောင်းအသစ်အတွက် `<br/>`, `%%` comment များ |
| **PlantUML** `@startuml` နှင့် `@enduml` အကြား (component နှင့် deployment) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` နှင့် အခြားများ `as` နာမည်များဖြင့်, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, chain များ, `a: Label`, `direction: right`, quote ပါသော နာမည်များ, `#` comment များ |
| **from-to စာရင်း** (စားပွဲကို စာသား သို့မဟုတ် CSV အဖြစ် ကူးထည့်ခြင်း) | ကော်လံများ `from`, `to` နှင့် ရွေးချယ်နိုင်သော `label` နှင့် `type` (`dashed` ဆိုလျှင် dashed connector ဆွဲသည်), မည်သည့်အစီအစဉ်ဖြစ်စေ၊ ကော်မာ၊ semicolon သို့မဟုတ် tab ဖြင့် ခြားထား; header မရှိလျှင် ပထမ ကော်လံ သုံးခုကို from, to, label ဟု ယူသည် |
| **draw.io XML** (`.drawio` ဖိုင်၏ စာသား၊ `<mxfile>` သို့မဟုတ် `<mxGraphModel>`) | box များ၊ အစွန်းကွေးသော box များ၊ ellipse များ၊ rhombus ဆုံးဖြတ်ချက်များနှင့် ရိုးရိုး စာသား; container နှင့် swimlane box များ (ခေါင်းစဉ်ဖြင့် dashed ဆွဲသည်); waypoint များနှင့်အတူ connector များ၊ arrow အဆုံးများ (`endArrow`, `startArrow`) နှင့် `dashed=1`; HTML label များ ရိုးရိုး စာသား ဖြစ်လာသည်၊ `<UserObject label>` နှင့် `<object label>` အလုပ်လုပ်သည် |

အခြားမည်သည့် စာကြောင်း (style၊ မှတ်ချက်၊ loop frame) ကိုမဆို ကျော်သွားပြီး command line က ကျော်ခဲ့သော စာကြောင်းအရေအတွက်ကို ပြသည်။ ဒိုင်ယာဂရမ်တစ်ခုတွင် block အများဆုံး 400 နှင့် connector အများဆုံး 1200 ရှိနိုင်သည်။

## Draw.io XML က နေရာများကို ထိန်းသည်

အခြားဘာသာစကားများက ဘာနှင့် ဘာချိတ်ဆက်သည်ကို ပြောသဖြင့် CadCraft က အပြင်အဆင်ချပေးသည်။ Draw.io XML တွင် အရာတိုင်း ဘယ်မှာရှိသည် ရှိပြီးသား ဖြစ်သဖြင့် CadCraft က ထိုနေရာကို ထိန်းသည်: block တိုင်း ဖိုင်က ထားသော နေရာတွင် ရှိနေပြီး၊ 12-pixel font ကို သင်ပေးသော စာသားအမြင့်သို့ အတိုင်းအတာချသည် (120 x 60 pixel box သည် အမြင့် 6 တွင် 60 x 30 drawing unit ဖြစ်သည်)၊ ဒိုင်ယာဂရမ်၏ ဘယ်ဘက်အပေါ်ထောင့်သည် သင်နှိပ်သော ထောင့်သို့ သွားသည်။ Connector များသည် block တစ်ခု၏ အစွန်းမှ နောက် block ၏ အစွန်းသို့ waypoint များမှတစ်ဆင့် သွားသည်; `orthogonalEdgeStyle` ပါပြီး waypoint မပါသော connector သည် right-angle ကွေးတစ်ခု ရသည်။

Draw.io ၏ ပုံမှန် သိမ်းဆည်းမှုသည် ချုံ့ထားသည်။ Box နှင့် command line က ၎င်းကို သင့်အတွက် ဖွင့်ပေးသည်; compression stream မရှိသော window ရှိ assistant tool က ထိုအကြောင်း ပြောမည်။ `File › Export as › XML` ကို *Compressed* ဖြုတ်ထားပြီး သုံးလျှင် plain XML ရသည်။ ပုံများ၊ loose end ရှိ connector များနှင့် ဒုတိယစာမျက်နှာများကို ကျော်ပြီး ရေတွက်သည်။

## ကွန်ပျူတာပေါ်ရှိ model ဖြင့် ရေးခြင်း

ဒေသခံ မော်ဒယ် (Ollama၊ LM Studio၊ llama.cpp၊ Jan) က PDF သို့မဟုတ် SVG ၏ အကြောင်းအရာမှ XML သို့မဟုတ် Mermaid စာသားကို ရေးနိုင်ပြီး ရလဒ်ကို တူညီသော အကွက်မှတစ်ဆင့် သို့မဟုတ် model ကို assistant အဖြစ် ချိတ်ဆက်ထားလျှင် ဒိုင်ယာဂရမ်ထဲသို့ တိုက်ရိုက် ထည့်နိုင်သည်: `diagram_from_text` က `format` `drawio` ကို ယူသည်။ Model ငယ်များသည် Mermaid သို့မဟုတ် from-to စာရင်းထက် XML တွင် အမှား ပိုများသဖြင့် Mermaid ဖြင့် ပထမဆုံး စမ်းကြည့်ခြင်း ပိုသက်သာသည်; ဖတ်၍ မရသော အရာကို ခန့်မှန်းမဟုတ်ဘဲ ကျော်ပြီး ရေတွက်သည်။ Model ချိတ်ဆက်ပုံ အတွက် သင့် AI ချိတ်ဆက်ခြင်း ကို ကြည့်ပါ။

## အပြင်အဆင် ချခြင်း

Block များသည် connector များကို လိုက်၍ layer များတွင် ထားသည် (ပြန်ဝင်သော connector ကို အပေါ်သို့ ပြန်ဆွဲသည်)၊ ဖြတ်ကျော်မှုများ လျော့ရန် စီထားပြီး၊ block ၏ အောက်ခြေမှ ထွက်ပြီး နောက် block ၏ အပေါ်သို့ ဝင်သော right-angle connector များဖြင့်; `LR` နှင့် `RL` က layer များကို ကော်လံများ ပြောင်းသည်။ သင်ပေးသော စာသားအမြင့်က အရာအားလုံး၏ အရွယ်ကို သတ်မှတ်သည်။

## Subgraph နှင့် sequence ဒိုင်ယာဂရမ်များ

- Mermaid `subgraph name [Title]` … `end` က block များပတ်လည် ခေါင်းစဉ်ပါသော dashed box ဆွဲသည်; subgraph များ ထပ်ဝင်နိုင်သည်။ Layout က အခြား block များကို box အပြင်တွင် ထိန်းထားခြင်း မရှိသဖြင့် လွတ်နေသော block ကို ၎င်း၏ grip ဖြင့် ရွှေ့ပါ။
- Mermaid `sequenceDiagram`၊ သို့မဟုတ် `participant` စာကြောင်းများနှင့် `->` message များပါသော PlantUML စာသားကို ထိပ်တွင် block များအဖြစ် ဆွဲပြီး၊ block တစ်ခုစီအောက်တွင် dashed lifeline နှင့် message တစ်ခုစီအတွက် row တစ်ခု ရှိသည်။ `-->` နှင့် `-->>` သည် dashed ဖြစ်သည်၊ `->>` နှင့် `-)` တွင် arrow head ရှိသည်၊ `autonumber` က message များကို နံပါတ်တပ်သည်၊ ကိုယ့်ကိုယ်ကို message ပို့သည်ဆိုလျှင် loop ဖြစ်သည်။ Note နှင့် `loop` / `alt` frame များကို ကျော်သည်။

## တစ်ကြောင်းတည်း နှင့် ပိုက်လိုင်း ဒိုင်ယာဂရမ်များအတွက် သင်္ကေတများ

Block တစ်ခုသည် box အစား ဆွဲထားသော သင်္ကေတ ဖြစ်နိုင်ပြီး ၎င်း၏ အမည်သည် အောက်တွင် ရှိသည်။ စာသားထဲတွင် သင်္ကေတ အမည်ကို ဖော်ပြပါ:

| စာသား | နည်းလမ်း |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` သို့မဟုတ် `class P1 pump-cf` စာကြောင်း |
| D2 | `P1.shape: pump-cf` သို့မဟုတ် `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| from-to စာရင်း | ကော်လံများ `from_symbol` နှင့် `to_symbol` |

အမည်များသည် P&ID သင်္ကေတများ (`pump-cf`၊ `tank`၊ `gate`၊ `ball`၊ `exch-shell`၊ `inst-field` နှင့် P&ID စာကြည့်တိုက်၏ ကျန်အရာများ) နှင့် Electrical အစုံ (`contact.no`၊ `breaker`၊ `motor.3ph`၊ `transformer`၊ `lamp` စသည်) ဖြစ်သည်။ အစုံနှစ်ခုတွင် ရှိသော အမည်သည် P&ID အစုံသို့ သွားသည်; ရွေးချယ်ရန် ရှေ့တွင် `pid:` သို့မဟုတ် `el:` ရေးပါ။ CadCraft မသိသော အမည်ကို ကျော်ပြီး ရေတွက်သည်။ သင်္ကေတများကို `Diagram` layer ပေါ်တွင် ရိုးရိုး မျဉ်း၊ စက်ဝိုင်းနှင့် arc များအဖြစ် စာသားအမြင့်အလိုက် အတိုင်းအတာချ ဆွဲသည်; ၎င်းတို့သည် add-on များ၏ tag ပါသော block များ မဟုတ်ပါ၊ ထို့ကြောင့် အလုပ်ဆွဲရန် P&ID သို့မဟုတ် Electrical command များကို သုံးပါ။

AI assistant များသည် window ရှိ `diagram_from_text` tool ဖြင့် အလားတူ လုပ်နိုင်သည်။
