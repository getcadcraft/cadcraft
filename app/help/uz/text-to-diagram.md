---
title: Matndan diagramma chizish
summary: Mermaid oqim diagrammasi, PlantUML komponent diagrammasi, D2, `from`, `to` ustunli roʻyxat yoki draw.io XML ni joylashtiring. CadCraft bloklar va bogʻlovchilarni joylashtiradi, ularni boshqa obyektlar kabi tahrirlash mumkin.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, mahalliy model, diagramma, oqim diagrammasi, mermaid, plantuml, d2, from to, from-to roʻyxati, blok diagrammasi, bogʻlovchilar, matndan diagramma, DIAGRAM, TEXTDIAGRAM, tizim diagrammasi, simli sxema, quvur oʻtkazgichlar, csv
from: b26af54b
---

{{cmd:DIAGRAM}} buyrugʻini yozing (`TEXTDIAGRAM`, `T2D`). Oyna ochiladi: matnni joylashtiring, {{ui:Chizish}} ni tanlang, diagrammaning chap yuqori burchagini bosing va matn balandligini kiriting. CadCraft matnni oʻqiydi, bloklarni qatlamlarga joylashtiradi, burchakli bogʻlovchilar bilan bogʻlaydi va ularni `Diagram` deb nomlangan qatlamga chizadi. Yangi obyektlar tanlangan boʻladi, shuning uchun ularni darhol siljitishingiz mumkin. Ular oddiy obyektlar: blok matnini {{cmd:TEXTEDIT}} bilan oʻzgartiring, bogʻlovchini ushlagichlari bilan choʻzing, blokni oʻchiring yoki oʻz chiziqlaringizni qoʻshing. Bitta {{cmd:UNDO}} butun diagrammani olib tashlaydi.

Buyruq satrida, oynasiz, matn `;` belgisi bilan ajratilgan bitta qator boʻlishi mumkin: `flowchart LR; A[Pump] --> B[Tank]`.

## Nimani oʻqiydi

| Matn | Oʻqiladigan narsa |
|---|---|
| **Mermaid** `flowchart` yoki `graph`, `TD`, `TB`, `BT`, `LR` yoki `RL` bilan | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (qaror, romb shaklida chiziladi), qoʻshtirnoqli matn, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, `-->|text|` yoki `-- text -->` koʻrinishidagi yorliq, zanjirlar `A --> B --> C`, guruhlar `A & B --> C`, yangi satr uchun `<br/>`, `%%` izohlar |
| **PlantUML** `@startuml` va `@enduml` orasida (komponent va joylashtirish) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` va boshqalar `as` nomlari bilan, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, zanjirlar, `a: Label`, `direction: right`, qoʻshtirnoqli nomlar, `#` izohlar |
| **From-to roʻyxati** (matn yoki CSV koʻrinishidagi jadval) | ustunlar `from`, `to` va ixtiyoriy `label` va `type` (`dashed` punktir bogʻlovchi chizadi), istalgan tartibda, vergul, nuqtali vergul yoki tab bilan ajratilgan; sarlavhasiz boʻlsa, birinchi uchta ustun from, to va label hisoblanadi |

| **draw.io XML** (`.drawio` faylining matni, `<mxfile>` yoki `<mxGraphModel>`) | qutilar, yumaloq qutilar, ellipslar, romb shaklidagi qarorlar va oddiy matn; konteyner va suzish yoʻlagi qutilari (sarlavhasi bilan punktir chizilgan); nuqtalari bilan bogʻlovchilar, uchlari (`endArrow`, `startArrow`) va `dashed=1`; HTML yorliqlar oddiy matnga aylanadi, `<UserObject label>` va `<object label>` ishlaydi |

Qatordagi boshqa narsalar (uslublar, izohlar, sikl ramkalari) oʻtkazib yuboriladi va buyruq satri nechta qator oʻtkazib yuborilganini aytadi. Diagrammada eng koʻp 400 blok va 1200 bogʻlovchi boʻlishi mumkin.

## Draw.io XML oʻz joylashuvini saqlaydi

Boshqa tillar nima nimaga ulanganini aytadi, shuning uchun CadCraft ularni joylashtiradi. Draw.io XML esa hamma narsa qayerdaligini allaqachon aytadi, shuning uchun CadCraft uni saqlaydi: har bir blok fayl qoʻygan joyida turadi, siz kiritgan matn balandligiga moslangan holda (120 x 60 pikselli quti balandligi 6 boʻlganda 60 x 30 chizma birligi boʻladi), diagrammaning chap yuqori burchagi esa siz bosgan burchakka tushadi. Bogʻlovchilar bir blokning chetidan keyingisining chetiga nuqtalari orqali oʻtadi; `orthogonalEdgeStyle` va nuqtalari boʻlmagan bogʻlovchi bitta burchakli egilish oladi.

Draw.io ning standart saqlashi siqilgan. Quti va buyruq satri uni siz uchun ochadi; siqish oqimi boʻlmagan oynadagi yordamchi vosita buni aytadi, `Fayl › Eksport sifatida › XML` buyrugʻi *Siqilgan* belgisi olib tashlanganda oddiy XML beradi. Rasmlar, uchi erkin bogʻlovchilar va ikkinchi varaqlar oʻtkazib yuboriladi va sanaladi.

## Kompyuteringizdagi model bilan yozish

Mahalliy model (Ollama, LM Studio, llama.cpp, Jan) PDF yoki SVG mazmunidan XML yoki Mermaid matnini yozishi mumkin. Natija xuddi shu qutidan kiritiladi yoki model yordamchi sifatida ulanganda toʻgʻridan-toʻgʻri chizmaga tushadi: `diagram_from_text` `format` `drawio` ni qabul qiladi. Kichik modellar XML da Mermaid yoki from-to roʻyxatiga qaraganda koʻproq xato qiladi, shuning uchun Mermaid bilan birinchi urinish arzonroq. Oʻqib boʻlmaydigan narsa taxmin qilinmaydi, balki oʻtkazib yuboriladi va sanaladi. Model retseptlari uchun Sunʼiy intellektni ulash boʻlimiga qarang.

## Qanday joylashtiriladi

Bloklar bogʻlovchilarni kuzatib qatlamlarga joylashadi (orqaga qaytadigan bogʻlovchi yuqoriga qaytarib chiziladi), kesishuvlar kamroq boʻlishi uchun tartiblanadi. Burchakli bogʻlovchilar blokning pastki qismidan chiqib, keyingisining yuqorisiga kiradi. `LR` va `RL` qatlamlarni ustunlarga aylantiradi. Siz kiritgan matn balandligi hammasining oʻlchamini belgilaydi.

## Ichki diagrammalar va ketma-ketlik diagrammalari

- Mermaid `subgraph name [Title]` … `end` bloklari atrofida sarlavhasi bilan punktir quti chizadi; ichki diagrammalarni bir-biriga joylashtirish mumkin. Joylashtirish boshqa bloklarni qutidan tashqarida ushlab turmaydi, shuning uchun adashgan blokni ushlagichlari bilan siljiting.
- Mermaid `sequenceDiagram` yoki `participant` qatorlari va `->` xabarlari bilan PlantUML matni yuqorida bloklar sifatida chiziladi, har biri ostida punktir hayot chizigʻi va har bir xabar uchun bitta qator bor. `-->` va `-->>` punktir, `->>` va `-)` oʻq uchi bilan, `autonumber` xabarlarni raqamlaydi, oʻziga yuborilgan xabar esa sikl hosil qiladi. Izohlar va `loop` / `alt` ramkalari oʻtkazib yuboriladi.

## Bir chiziqli va quvur diagrammalari uchun belgilar

Blok quti oʻrniga nomi ostida chizilgan belgi boʻlishi mumkin. Belgini matnda nomlang:

| Matn | Usul |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` yoki `class P1 pump-cf` qatori |
| D2 | `P1.shape: pump-cf` yoki `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| From-to roʻyxati | ustunlar `from_symbol` va `to_symbol` |

Nomlar P&ID belgilari (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` va P&ID kutubxonasining qolgan belgilari) va Elektr toʻplami (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` va hokazo). Ikki toʻplamda bir xil nom boʻlsa, u P&ID toʻplamiga tegishli boʻladi; tanlash uchun oldiga `pid:` yoki `el:` yozing. CadCraft tanimaydigan nom oʻtkazib yuboriladi va sanaladi. Belgilar `Diagram` qatlamida oddiy chiziqlar, aylanalar va yoylar sifatida chiziladi, matn balandligiga moslab kattalashtiriladi. Ular teglari bilan qoʻshimcha bloklari emas, shuning uchun ishchi chizma uchun P&ID yoki Elektr buyruqlaridan foydalaning.

Sunʼiy intellekt yordamchilari xuddi shuni oynadagi `diagram_from_text` vositasi orqali bajarishi mumkin.
