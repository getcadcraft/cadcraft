---
title: Mətndən diaqram çək
summary: Mermaid axın diaqramı, PlantUML komponent diaqramı, D2, from-to siyahısı və ya draw.io XML yapışdırın, CadCraft redaktə edə biləcəyiniz blokları və birləşdiriciləri düzəldir.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, lokal model, diaqram, axın diaqramı, mermaid, plantuml, d2, from to, from-to siyahısı, blok diaqramı, birləşdiricilər, mətndən diaqrama, DIAGRAM, TEXTDIAGRAM, sistem diaqramı, elektrik sxemi, boru kəmərləri, csv
from: b26af54b
---

Yazın {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Açılan qutuya mətni yapışdırın, {{ui:Çəkmə}} seçin, diaqramın sol yuxarı küncünü klikləyin və mətnin hündürlüyünü daxil edin. CadCraft mətni oxuyur, blokları sağ bucaqlı birləşdiricilərlə qatlarda düzəldir və onları `Diagram` adlı qatda çəkir. Yeni obyektlər seçilmiş olur, ona görə onları dərhal köçürə bilərsiniz. Onlar adi obyektlərdir: bloku mətnini {{cmd:TEXTEDIT}} ilə dəyişin, birləşdiricini tutacaqları ilə uzadın, bloku silin, öz xətlərinizi əlavə edin. Bir {{cmd:UNDO}} bütün diaqramı geri götürür.

Qutu olmadan, komanda sətrində mətn `;` ilə ayrılmış bir sətir ola bilər: `flowchart LR; A[Pump] --> B[Tank]`.

## Nəyi oxuyur

| Mətn | Nə oxunur |
|---|---|
| **Mermaid** `flowchart` və ya `graph`, `TD`, `TB`, `BT`, `LR` və ya `RL` ilə | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (qərar, romb şəklində çəkilir), dırnaqlı mətn, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, `-->|text|` və ya `-- text -->` kimi etiket, zəncirlər `A --> B --> C`, qruplar `A & B --> C`, yeni sətir üçün `<br/>`, `%%` şərhləri |
| **PlantUML** `@startuml` və `@enduml` arasında (komponent və yerləşdirmə) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` və `as` adları ilə başqaları, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, zəncirlər, `a: Label`, `direction: right`, dırnaqlı adlar, `#` şərhləri |
| **From-to siyahısı** (mətn kimi və ya CSV kimi yapışdırılmış cədvəl) | `from`, `to` və istəyə görə `label` və `type` sütunları (`dashed` punktir birləşdirici çəkir), istənilən sırada, vergül, nöqtəli vergül və ya tab ilə ayrılmış; başlıq sətri olmadan ilk üç sütun from, to, label sayılır |

| **draw.io XML** (`.drawio` faylının mətni, `<mxfile>` və ya `<mxGraphModel>`) | qutular, yumru qutular, ellipslər, romb qərarlar və sadə mətn; konteyner və zolaq qutuları (başlıqları ilə punktir çəkilir); yol nöqtələri, ox ucları (`endArrow`, `startArrow`) və `dashed=1` ilə birləşdiricilər; HTML etiketləri sadə mətnə çevrilir, `<UserObject label>` və `<object label>` işləyir |

Sətirdə qalan hər şey (üslublar, qeydlər, dövr çərçivələri) ötürülür və komanda sətri neçə sətrin ötürüldüyünü deyir. Diaqramda ən çox 400 blok və 1200 birləşdirici ola bilər.

## Draw.io XML öz yerlərini saxlayır

Digər dillər yalnız nəyin nəyə bağlandığını deyir, ona görə CadCraft onları özü düzləndirir. Draw.io XML isə artıq hər şeyin harada olduğunu deyir, ona görə CadCraft onu saxlayır: hər blok faylın qoyduğu yerdə durur, 12 piksel şrift sizin daxil etdiyiniz mətn hündürlüyünə çevrilir (120 x 60 piksel qutu hündürlükdə 6 olanda 60 x 30 çertyoj vahididir) və diaqramın sol yuxarı küncü klikləyəcəyiniz künc olur. Birləşdiricilər bir blokun kənarından növbəti blokun kənarına, yol nöqtələrindən keçərək gedir; `orthogonalEdgeStyle` olan və yol nöqtəsi olmayan birləşdirici bir sağ bucaqlı dönmə alır.

Draw.io-nun standart saxlanması sıxılmışdır. Qutu və komanda sətri onu sizin üçün açır; sıxılma axını olmayan pəncərədəki köməkçi alət bunu deyir, `File › Export as › XML` seçimi *Compressed* işarəsi götürüləndə isə sadə XML verir. Şəkillər, bir ucu sərbəst olan birləşdiricilər və ikinci səhifələr ötürülür və sayılır.

## Yerli kompüterinizdəki modellə yazmaq

Yerli model (Ollama, LM Studio, llama.cpp, Jan) PDF-in və ya SVG-nin məzmunundan XML və ya Mermaid mətnini yaza bilər. Nəticə eyni qutudan daxil olur, ya da model köməkçi kimi qoşulanda birbaşa çertyoja düşür: `diagram_from_text` `format` üçün `drawio` qəbul edir. Kiçik modellər XML-də Mermaid və ya from-to siyahısındakından daha çox səhv edir, ona görə Mermaid ilə ilk cəhd daha ucuzdur. Oxucunun istifadə edə bilmədiyi hissə ötürülür və sayılır, təxmin edilmir. Model reseptləri üçün AI-nizi qoşun bölməsinə baxın.

## Düzləşdirmə

Bloklar birləşdiricilərin ardınca qatlarda yerləşir (geriyə dönən birləşdirici yuxarı doğru geri çəkilir), kəsişmələri azaltmaq üçün sıralanır. Sağ bucaqlı birləşdiricilər blokun altından çıxır və növbəti blokun yuxarısına girir; `LR` və `RL` qatları sütunlara çevirir. Daxil etdiyiniz mətn hündürlüyü hər şeyin ölçüsünü təyin edir.

## Alt qrafiklər və ardıcıllıq diaqramları

- Mermaid `subgraph name [Title]` … `end` blokların ətrafında başlığı olan punktir qutu çəkir; alt qrafiklər iç-içə ola bilər. Düzləşdirmə başqa blokları qutudan kənarda saxlamır, ona görə kənarda qalan bloku tutacaqları ilə köçürün.
- Mermaid `sequenceDiagram` və ya `participant` sətirləri və `->` mesajları olan PlantUML mətni yuxarıda bloklar kimi çəkilir, hər birinin altında punktir həyat xətti və hər mesaj üçün bir sətir olur. `-->` və `-->>` punktirdir, `->>` və `-)` ox başlığı var, `autonumber` mesajları nömrələyir, özünə göndərilən mesaj dövrə çəkir. Qeydlər və `loop` / `alt` çərçivələri ötürülür.

## Tək sətirli və boru kəməri diaqramları üçün simvollar

Blok qutu əvəzinə altında adı olan çəkilmiş simvol ola bilər. Simvolun adını mətndə göstərin:

| Mətn | Necə |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` və ya `class P1 pump-cf` sətri |
| D2 | `P1.shape: pump-cf` və ya `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| From-to siyahısı | `from_symbol` və `to_symbol` sütunları |

Adlar P&ID simvollarıdır (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` və P&ID kitabxanasının qalanı) və Elektrik dəsti (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` və s.). İki dəstin ortaq olduğu ad P&ID dəstinə gedir; seçmək üçün qarşısına `pid:` və ya `el:` yazın. CadCraft tanımadığı ad ötürülür və sayılır. Simvollar `Diagram` qatında sadə xətt, dairə və qövslər kimi çəkilir, mətn hündürlüyünə görə ölçülənir. Onlar əlavələrin teqli blokları deyil, ona görə iş çertyoju üçün P&ID və ya Elektrik komandalarından istifadə edin.

AI köməkçiləri eyni işi pəncərədəki `diagram_from_text` aləti ilə edə bilər.
