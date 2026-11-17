---
title: Lukis rajah daripada teks
summary: Tampal carta alir Mermaid, rajah komponen PlantUML, D2, senarai dari-ke atau XML draw.io, dan CadCraft menyusun blok serta penyambung yang boleh disunting seperti objek lain.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, model tempatan, rajah, carta alir, mermaid, plantuml, d2, dari ke, senarai dari-ke, rajah blok, penyambung, teks ke rajah, DIAGRAM, TEXTDIAGRAM, rajah sistem, rajah pendawaian, paip, csv
from: b26af54b
---

Taip {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Kotak akan dibuka: tampal teks, pilih {{ui:Lukis}}, klik sudut kiri atas rajah dan masukkan ketinggian teks. CadCraft membaca teks, menyusun blok dalam lapisan dengan penyambung bersudut tegak, dan melukisnya pada lapisan bernama `Diagram`. Objek baharu dipilih, jadi anda boleh terus memindahkannya. Ia ialah objek biasa: tukar teks blok dengan {{cmd:TEXTEDIT}}, regangkan penyambung dengan gripnya, padam blok, atau tambah garisan anda sendiri. Satu {{cmd:UNDO}} akan membuang keseluruhan rajah.

Di baris arahan, tanpa kotak, teks boleh ditulis dalam satu baris dengan `;` antara pernyataan: `flowchart LR; A[Pump] --> B[Tank]`.

## Apa yang dibaca

| Teks | Apa yang dibaca |
|---|---|
| **Mermaid** `flowchart` atau `graph` dengan `TD`, `TB`, `BT`, `LR` atau `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (keputusan, dilukis sebagai berlian), teks dalam petikan, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, label sebagai `-->|text|` atau `-- text -->`, rantai `A --> B --> C`, kumpulan `A & B --> C`, `<br/>` untuk baris baharu, ulasan `%%` |
| **PlantUML** antara `@startuml` dan `@enduml` (komponen dan penempatan) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` dan lain-lain dengan nama `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, rantai, `a: Label`, `direction: right`, nama dalam petikan, ulasan `#` |
| **Senarai dari-ke** (jadual yang ditampal sebagai teks atau CSV) | lajur `from`, `to` dan secara pilihan `label` dan `type` (`dashed` melukis penyambung putus-putus), dalam sebarang susunan, dipisahkan dengan koma, koma bertitik atau tab; tanpa baris pengepala, tiga lajur pertama ialah from, to, label |

| **XML draw.io** (teks fail `.drawio`, `<mxfile>` atau `<mxGraphModel>`) | kotak, kotak bulat, elips, keputusan rombus dan teks biasa; kotak bekas dan lorong (dilukis putus-putus dengan tajuknya); penyambung dengan titik lencongnya, hujung anak panah (`endArrow`, `startArrow`) dan `dashed=1`; label HTML menjadi teks biasa, `<UserObject label>` dan `<object label>` berfungsi |

Apa-apa lain pada baris (gaya, nota, bingkai gelung) dilangkau, dan baris arahan memberitahu berapa baris yang dilangkau. Rajah boleh mempunyai paling banyak 400 blok dan 1200 penyambung.

## XML draw.io mengekalkan kedudukannya

Bahasa lain menyatakan apa yang bersambung dengan apa, jadi CadCraft menyusunnya. XML draw.io sudah menyatakan di mana setiap perkara berada, jadi CadCraft mengekalkannya: setiap blok berada di tempat fail meletakkannya, diskalakan supaya fon 12 piksel menjadi ketinggian teks yang anda berikan (kotak 120 x 60 piksel ialah 60 x 30 unit lukisan pada ketinggian 6), dan sudut kiri atas rajah diletakkan di sudut yang anda klik. Penyambung berjalan dari tepi satu blok ke tepi blok seterusnya, melalui titik lencongnya; penyambung dengan `orthogonalEdgeStyle` dan tanpa titik lencong mendapat satu lengkokan bersudut tegak.

Simpanan lalai draw.io dimampatkan. Kotak dan baris arahan membukanya untuk anda; alat pembantu dalam tetingkap tanpa aliran mampatan akan memberitahu anda, dan `Fail › Eksport sebagai › XML` dengan *Dimampatkan* tidak ditanda memberikan XML biasa. Imej, penyambung dengan hujung longgar dan halaman kedua dilangkau dan dikira.

## Menulis dengan model pada komputer anda

Model tempatan (Ollama, LM Studio, llama.cpp, Jan) boleh menulis XML atau teks Mermaid daripada kandungan PDF atau SVG, dan hasilnya dimasukkan melalui kotak yang sama, atau terus ke dalam lukisan apabila model disambungkan sebagai pembantu: `diagram_from_text` mengambil `format` `drawio`. Model kecil membuat lebih banyak kesilapan dalam XML berbanding Mermaid atau senarai dari-ke, jadi percubaan pertama dengan Mermaid lebih murah; apa yang tidak dapat dibaca oleh pembaca akan dilangkau dan dikira, bukan diteka. Lihat Sambungkan AI anda untuk resipi model.

## Cara ia disusun

Blok diletakkan dalam lapisan mengikut penyambung (penyambung yang berulang ke belakang dilukis naik semula), disusun untuk mengurangkan persilangan, dengan penyambung bersudut tegak yang keluar dari bahagian bawah blok dan masuk ke bahagian atas blok seterusnya; `LR` dan `RL` menukar lapisan kepada lajur. Ketinggian teks yang anda berikan menentukan saiz semua perkara.

## Subgraf dan rajah urutan

- Mermaid `subgraph name [Title]` … `end` melukis kotak putus-putus dengan tajuknya di sekeliling bloknya; subgraf boleh bersarang. Susunan tidak menyimpan blok lain di luar kotak, jadi alihkan blok yang tersasar dengan gripnya.
- Mermaid `sequenceDiagram`, atau teks PlantUML dengan baris `participant` dan mesej `->`, dilukis sebagai blok merentasi bahagian atas, garis hayat putus-putus di bawah setiap satu, dan satu baris untuk setiap mesej. `-->` dan `-->>` ialah putus-putus, `->>` dan `-)` mempunyai kepala anak panah, `autonumber` menomborkan mesej, dan mesej kepada diri sendiri berulang. Nota dan bingkai `loop` / `alt` dilangkau.

## Simbol untuk rajah satu baris dan saluran paip

Blok boleh menjadi simbol yang dilukis, dengan namanya di bawahnya, dan bukannya kotak. Namakan simbol dalam teks:

| Teks | Cara |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` atau baris `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` atau `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Senarai dari-ke | lajur `from_symbol` dan `to_symbol` |

Nama ialah simbol P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` dan selebihnya perpustakaan P&ID) dan set Elektrik (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` dan seterusnya). Nama yang dikongsi dua set pergi ke set P&ID; tulis `pid:` atau `el:` di hadapannya untuk memilih. Nama yang CadCraft tidak kenali dilangkau dan dikira. Simbol dilukis sebagai garisan, bulatan dan lengkok biasa pada lapisan `Diagram`, diskalakan mengikut ketinggian teks; ia bukan blok add-on dengan tag, jadi gunakan arahan P&ID atau Elektrik untuk lukisan kerja.

Pembantu AI boleh melakukan perkara yang sama melalui alat `diagram_from_text` dalam tetingkap.
