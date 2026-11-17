---
title: Gambar diagram dari teks
summary: Tempel diagram alir Mermaid, diagram komponen PlantUML, D2, daftar dari-ke, atau XML draw.io, dan CadCraft menata blok serta konektor yang bisa Anda edit seperti objek lain.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, model lokal, diagram, diagram alir, mermaid, plantuml, d2, dari ke, daftar dari-ke, diagram blok, konektor, teks ke diagram, DIAGRAM, TEXTDIAGRAM, diagram sistem, diagram pengkabelan, perpipaan, csv
from: b26af54b
---

Ketik {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Sebuah kotak terbuka: tempel teksnya, pilih {{ui:Gambar}}, klik sudut kiri atas diagram, lalu masukkan tinggi teks. CadCraft membaca teks, menata blok dalam lapisan dengan konektor siku-siku, dan menggambarnya pada layer bernama `Diagram`. Objek baru langsung dipilih, sehingga Anda bisa memindahkannya segera. Itu objek biasa: ubah teks blok dengan {{cmd:TEXTEDIT}}, regangkan konektor lewat grip-nya, hapus blok, atau tambahkan garis Anda sendiri. Satu {{cmd:UNDO}} menghapus seluruh diagram.

Di baris perintah, tanpa kotak, teks bisa berupa satu baris dengan `;` di antara pernyataan: `flowchart LR; A[Pump] --> B[Tank]`.

## Yang dibaca

| Teks | Yang dibaca |
|---|---|
| **Mermaid** `flowchart` atau `graph` dengan `TD`, `TB`, `BT`, `LR` atau `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (keputusan, digambar sebagai belah ketupat), teks dalam tanda kutip, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, label sebagai `-->|text|` atau `-- text -->`, rantai `A --> B --> C`, kelompok `A & B --> C`, `<br/>` untuk baris baru, komentar `%%` |
| **PlantUML** di antara `@startuml` dan `@enduml` (komponen dan deployment) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` dan lainnya dengan nama `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, rantai, `a: Label`, `direction: right`, nama dalam tanda kutip, komentar `#` |
| **Daftar dari-ke** (tabel yang ditempel sebagai teks atau CSV) | kolom `from`, `to`, dan opsional `label` dan `type` (`dashed` menggambar konektor putus-putus), dalam urutan apa pun, dipisahkan koma, titik koma, atau tab; tanpa baris judul, tiga kolom pertama adalah from, to, label |

| **XML draw.io** (teks file `.drawio`, `<mxfile>` atau `<mxGraphModel>`) | kotak, kotak membulat, elips, keputusan berbentuk belah ketupat, dan teks biasa; kotak kontainer dan swimlane (digambar putus-putus dengan judulnya); konektor dengan titik beloknya, ujung panah (`endArrow`, `startArrow`) dan `dashed=1`; label HTML menjadi teks biasa, `<UserObject label>` dan `<object label>` berfungsi |

Yang lain di sebuah baris (gaya, catatan, bingkai loop) dilewati, dan baris perintah menyebutkan berapa baris yang dilewati. Diagram memiliki paling banyak 400 blok dan 1200 konektor.

## XML draw.io mempertahankan posisinya

Bahasa lain hanya menyatakan apa yang terhubung ke apa, sehingga CadCraft yang menatanya. XML draw.io sudah menyatakan di mana letak semuanya, jadi CadCraft mempertahankannya: setiap blok berada di tempat yang ditentukan file, diskalakan sehingga font 12 piksel menjadi tinggi teks yang Anda masukkan (kotak 120 kali 60 piksel menjadi 60 kali 30 satuan gambar pada tinggi 6), dan sudut kiri atas diagram berada di titik yang Anda klik. Konektor berjalan dari tepi satu blok ke tepi blok berikutnya, melalui titik belok mereka; konektor dengan `orthogonalEdgeStyle` dan tanpa titik belok mendapat satu belokan siku-siku.

Penyimpanan default draw.io terkompresi. Kotak dan baris perintah membukanya untuk Anda; alat asisten di jendela tanpa aliran kompresi akan menyebutkannya, dan `File › Export as › XML` dengan *Compressed* tidak dicentang memberi XML biasa. Gambar, konektor dengan ujung lepas, dan halaman kedua dilewati serta dihitung.

## Menulisnya dengan model di komputer Anda

Model lokal (Ollama, LM Studio, llama.cpp, Jan) dapat menulis XML atau teks Mermaid dari isi PDF atau SVG, dan hasilnya masuk lewat kotak yang sama, atau langsung ke gambar ketika model terhubung sebagai asisten: `diagram_from_text` menerima `format` `drawio`. Model kecil membuat lebih banyak kesalahan dalam XML daripada di Mermaid atau daftar dari-ke, jadi mencoba Mermaid dulu lebih murah; apa pun yang tidak bisa dibaca pembaca akan dilewati dan dihitung, tidak ditebak. Lihat Hubungkan AI Anda untuk resep model.

## Cara tata letaknya

Blok masuk ke dalam lapisan mengikuti konektor (konektor yang kembali memutar digambar kembali ke atas), diurutkan untuk mengurangi persilangan, dengan konektor siku-siku yang keluar dari bawah blok dan masuk dari atas blok berikutnya; `LR` dan `RL` mengubah lapisan menjadi kolom. Tinggi teks yang Anda masukkan menentukan ukuran semuanya.

## Subgraf dan diagram urutan

- Mermaid `subgraph name [Title]` … `end` menggambar kotak putus-putus dengan judulnya mengelilingi bloknya; subgraf bisa bersarang. Tata letak tidak menjaga blok lain agar tidak masuk ke dalam kotak, jadi pindahkan blok yang tersesat dengan grip-nya.
- Mermaid `sequenceDiagram`, atau teks PlantUML dengan baris `participant` dan pesan `->`, digambar sebagai blok di bagian atas, garis hidup putus-putus di bawah masing-masing, dan satu baris per pesan. `-->` dan `-->>` putus-putus, `->>` dan `-)` memiliki kepala panah, `autonumber` memberi nomor pada pesan, dan pesan ke diri sendiri membentuk lingkaran. Catatan dan bingkai `loop` / `alt` dilewati.

## Simbol untuk diagram satu garis dan perpipaan

Blok bisa berupa simbol yang digambar, dengan namanya di bawahnya, bukan kotak. Sebutkan simbol dalam teks:

| Teks | Caranya |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` atau baris `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` atau `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Daftar dari-ke | kolom `from_symbol` dan `to_symbol` |

Namanya adalah simbol P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` dan sisa pustaka P&ID) dan set Elektrikal (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` dan seterusnya). Nama yang dimiliki dua set masuk ke set P&ID; tulis `pid:` atau `el:` di depannya untuk memilih. Nama yang tidak dikenal CadCraft dilewati dan dihitung. Simbol digambar sebagai garis, lingkaran, dan busur biasa pada layer `Diagram`, diskalakan ke tinggi teks; itu bukan blok add-on dengan tag, jadi gunakan perintah P&ID atau Elektrikal untuk gambar kerja.

Asisten AI dapat melakukan hal yang sama lewat alat `diagram_from_text` di jendela.
