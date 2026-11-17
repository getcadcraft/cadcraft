---
title: Metinden diyagram çizin
summary: Bir Mermaid akış şeması, bir PlantUML bileşen diyagramı, D2, bir from-to listesi veya draw.io XML'i yapıştırın; CadCraft, diğer nesneler gibi düzenleyebileceğiniz blokları ve bağlantıları yerleştirir.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, yerel model, diyagram, akış şeması, mermaid, plantuml, d2, from to, from-to listesi, blok diyagramı, bağlantılar, metinden diyagram, DIAGRAM, TEXTDIAGRAM, sistem diyagramı, kablolama şeması, boru tesisatı, csv
from: b26af54b
---

Yazın {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Bir kutu açılır: metni yapıştırın, {{ui:Çiz}} seçeneğini seçin, diyagramın sol üst köşesine tıklayın ve metin yüksekliğini girin. CadCraft metni okur, blokları sağ açılı bağlantılarla katmanlar halinde yerleştirir ve `Diagram` adlı bir katmanda çizer. Yeni nesneler seçili olduğu için hemen taşıyabilirsiniz. Bunlar sıradan nesnelerdir: bir bloğun metnini {{cmd:TEXTEDIT}} ile değiştirin, bir bağlantıyı tutamaçlarıyla gerdirin, bir bloğu silin, kendi çizgilerinizi ekleyin. {{cmd:UNDO}} tek seferde tüm diyagramı geri alır.

Komut satırında, kutu olmadan, metin `;` ile ayrılmış tek bir satır olabilir: `flowchart LR; A[Pump] --> B[Tank]`.

## Ne okunur

| Metin | Okunan |
|---|---|
| **Mermaid** `TD`, `TB`, `BT`, `LR` veya `RL` ile `flowchart` ya da `graph` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (elmas olarak çizilen bir karar), tırnaklı metin, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, `-->|text|` veya `-- text -->` biçiminde etiket, `A --> B --> C` zincirleri, `A & B --> C` grupları, yeni satır için `<br/>`, `%%` yorumları |
| **PlantUML** `@startuml` ile `@enduml` arasında (bileşen ve dağıtım) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` ve `as` adlarıyla diğerleri, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, zincirler, `a: Label`, `direction: right`, tırnaklı adlar, `#` yorumları |
| **Bir from-to listesi** (metin olarak yapıştırılmış bir tablo veya CSV) | `from`, `to` sütunları ve isteğe bağlı olarak `label` ile `type` (`dashed` kesikli bir bağlantı çizer); sıra fark etmez, virgül, noktalı virgül veya sekmeyle ayrılır; başlık satırı yoksa ilk üç sütun from, to ve label olarak okunur

| **draw.io XML** (bir `.drawio` dosyasının metni, `<mxfile>` veya `<mxGraphModel>`) | kutular, yuvarlatılmış kutular, elipsler, elmas kararlar ve düz metin; kapsayıcı ve kulvar kutuları (kesikli çizilir, başlıklarıyla birlikte); ara noktalarıyla bağlantılar, ok uçları (`endArrow`, `startArrow`) ve `dashed=1`; HTML etiketleri düz metin olur, `<UserObject label>` ve `<object label>` çalışır |

Satırdaki diğer her şey (stiller, notlar, döngü çerçeveleri) atlanır ve komut satırı kaç satırın atlandığını bildirir. Bir diyagramda en fazla 400 blok ve 1200 bağlantı olabilir.

## Draw.io XML konumlarını korur

Diğer biçimler neyin neye bağlandığını söyler; bu yüzden CadCraft onları yerleştirir. Draw.io XML ise her şeyin nerede olduğunu zaten belirtir; bu nedenle CadCraft konumları korur: her blok dosyanın koyduğu yerde durur ve 12 piksellik bir yazı tipi, girdiğiniz metin yüksekliğine ölçeklenir (120 x 60 piksellik bir kutu, yükseklik 6'da 60 x 30 çizim birimidir). Diyagramın sol üst köşesi tıkladığınız köşeye gider. Bağlantılar bir bloğun kenarından sonrakinin kenarına, ara noktalarından geçerek çalışır; `orthogonalEdgeStyle` olan ve ara noktası olmayan bir bağlantı bir sağ açılı dönüş alır.

Draw.io'nun varsayılan kaydı sıkıştırılmıştır. Kutu ve komut satırı bunu sizin için açar; sıkıştırma akışı olmayan bir pencerdeki bir asistan aracı bunu söyler; *Compressed* seçeneği işaretlenmemiş `File › Export as › XML` ise düz XML verir. Resimler, ucu serbest bağlantılar ve ikinci sayfalar atlanır ve sayılır.

## Bilgisayarınızdaki bir modelle yazmak

Yerel bir model (Ollama, LM Studio, llama.cpp, Jan) bir PDF'in veya SVG'nin içeriğinden XML'i ya da Mermaid metnini yazabilir; sonuç aynı kutudan girer veya model bir asistan olarak bağlıysa doğrudan çizime aktarılır: `diagram_from_text`, `format` olarak `drawio` alır. Küçük modeller XML'de Mermaid'e veya from-to listesine göre daha fazla hata yapar; bu nedenle önce Mermaid ile denemek daha ucuzdur; okunamayan şey tahmin edilmez, atlanır ve sayılır. Model tarifleri için Yapay zekânızı bağlama konusuna bakın.

## Yerleşim nasıl yapılır

Bloklar bağlantıları izleyerek katmanlara yerleşir (geri dönen bir bağlantı yukarı doğru çizilir); kesişmeleri azaltacak şekilde sıralanır. Bağlantılar bir bloğun alt kenarından çıkar, sonrakinin üst kenarına sağ açıyla girer; `LR` ve `RL` katmanları sütunlara çevirir. Girdiğiniz metin yüksekliği her şeyin boyutunu belirler.

## Alt grafikler ve sıra diyagramları

- Bir Mermaid `subgraph name [Title]` … `end` bloklarının etrafına başlığıyla kesikli bir kutu çizer; alt grafikler iç içe geçebilir. Yerleşim, başka blokları bir kutunun dışında tutmaz; bu yüzden dışarı kaçmış bir bloğu tutamaçlarıyla taşıyın.
- Bir Mermaid `sequenceDiagram` veya `participant` satırları ve `->` iletileri içeren PlantUML metni, üstte yan yana bloklar olarak çizilir; her birinin altında kesikli bir yaşam çizgisi ve her ileti için bir satır vardır. `-->` ve `-->>` kesiklidir; `->>` ve `-)` ok ucu taşır; `autonumber` iletileri numaralandırır; kendine giden bir ileti döngü oluşturur. Notlar ve `loop` / `alt` çerçeveleri atlanır.

## Tek çizgili ve boru tesisatı diyagramları için semboller

Bir blok, kutu yerine adı altında yazan çizilmiş bir sembol olabilir. Sembolü metinde adlandırın:

| Metin | Nasıl |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` veya `class P1 pump-cf` satırı |
| D2 | `P1.shape: pump-cf` veya `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Bir from-to listesi | sütunlar `from_symbol` ve `to_symbol` |

Adlar P&ID şekilleridir (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` ve P&ID kütüphanesinin geri kalanı) ve Elektrik takımıdır (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` vb.). İki takımın ortak kullandığı bir ad P&ID takımına gider; seçmek için önüne `pid:` veya `el:` yazın. CadCraft'ın tanımadığı bir ad atlanır ve sayılır. Semboller `Diagram` katmanında düz çizgiler, daireler ve yaylar olarak, metin yüksekliğine göre ölçeklenerek çizilir; bunlar eklentilerin etiketli blokları değildir, bu yüzden çalışma çizimi için P&ID veya Elektrik komutlarını kullanın.

Yapay zekâ asistanları aynısını penceredeki `diagram_from_text` aracıyla yapabilir.
