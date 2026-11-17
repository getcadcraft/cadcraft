---
title: Set helaian
summary: Kumpulkan helaian daripada banyak lukisan bersama dalam satu senarai bernombor, isi blok tajuk mereka daripada set, terbitkan sebagai satu PDF dan arkibkan set sebagai zip.
keywords: set helaian, pengurus set helaian, ssm, sheetset, ccsheets, dst, senarai helaian, indeks helaian, blok tajuk, medan, terbit, nombor semula, arkib, etransmit, transmittal, subset, helaian penutup, senarai lukisan
from: 2c855720
---

## Apa yang akan anda pelajari

Cara mengumpulkan helaian (layout) daripada beberapa fail lukisan ke dalam **set helaian**, memberi nombor dan tajuk kepadanya, membiarkan blok tajuknya diisi untuk anda, menerbitkan keseluruhan set sebagai satu PDF, dan memampatkan semuanya ke dalam satu zip untuk dihantar.

Set helaian tinggal dalam fail kecil sendiri, `<name>.ccsheets`, dalam folder yang memegang lukisan. Fail set menyenaraikan helaian dengan laluan dari folder itu, supaya anda boleh mengalihkan atau menyalin keseluruhan folder.

:::note
Membuka folder untuk membaca dan menulis memerlukan Chrome atau Edge (ia boleh membenarkan halaman bekerja dalam folder yang anda pilih), atau aplikasi desktop. Pelayar lain membuka set secara baca sahaja: anda boleh melihat dan menerbitkannya, dan fail set dimuat turun dan bukannya disimpan.
:::

## Mulakan set

1. Cari bahagian {{ui:Set helaian}} dalam panel kiri, dan buka menu {{ui:Set}}. Menaip {{cmd:SHEETSET}} (atau `SSM`) juga membawa anda ke sana.
2. Pilih {{ui:Set baharu…}}. Berikan set itu satu nama, dan jika anda mahu, nama dan nombor projek.
3. Pilih folder yang memegang lukisan. Fail set disimpan di situ.

Untuk membuka set kemudian, pilih {{ui:Buka set…}} dan pilih folder yang sama. Jika folder memegang lebih daripada satu set, CadCraft bertanya yang mana.

## Tambah helaian

1. Pilih {{ui:Tambah helaian daripada lukisan…}} dan pilih salah satu lukisan dalam folder.
2. CadCraft membaca lukisan itu di latar belakang (ia tidak dibuka pada skrin) dan menyenaraikan helaiannya. Tandakan yang anda mahu dan klik {{ui:OK}}.
3. Pilih helaian dan tekan {{key:F2}} (atau {{ui:Namakan semula dan nombor semula…}}) untuk memberinya nombor dan tajuk, seperti `A-101` dan `Pelan lantai`.

{{ui:Helaian baharu daripada templat…}} membuat lukisan baharu daripada helaian lukisan lain (blok tajuk dan viewportnya), dinamakan mengikut helaian baharu, dan menambahkannya. Set mengingati lukisan yang anda gunakan sebagai templatnya.

## Susun set

- **Subset** mengumpulkan helaian, seperti Seni bina › Pelan: pilih tempat ia pergi dan pilih {{ui:Subset baharu…}}.
- **Susunan**: seret helaian ke tempat lain dalam senarai, atau ke atas subset untuk mengalihkannya ke sana. Dengan papan kekunci, pilih helaian dan tekan {{key:Alt+Up}} atau {{key:Alt+Down}}.
- **Buka helaian**: klik dua kali (atau tekan {{key:Enter}}). Lukisannya dibuka dalam tabnya sendiri, pada helaian itu.
- **Alih keluar**: pilih dan tekan {{key:Delete}}. Lukisan itu sendiri tidak berubah.
- **Buat asal**: {{ui:Buat asal perubahan set}} dan {{ui:Buat semula perubahan set}} bergerak melalui apa yang anda tukar dalam set.
- **Nombor semula**: {{ui:Nombor semula helaian…}} memberi nombor kepada setiap helaian, atau kepada satu subset, mengikut susunan senarai: awalan, permulaan dan langkah (`A-` dan `101` memberi A-101, A-102 …).

Setiap perubahan disimpan dalam fail set serta-merta.

## Beri nombor helaian daripada medannya

Daripada memberi nombor helaian secara manual, biarkan satu peraturan membina setiap nombor daripada medan helaian, supaya helaian yang dipindahkan ke tingkat atau disiplin lain mendapat nombor baharunya sendiri.

1. Beri setiap helaian medannya: pilih, klik {{ui:Namakan semula…}} dan, dalam {{ui:Medan helaian ini}}, tulis satu setiap baris, contohnya `DISCIPLINE = A` dan `LEVEL = 1`. Medan yang dikongsi oleh seluruh set (contohnya `DISCIPLINE = A`) boleh dimasukkan dalam {{ui:Sifat…}} set sebagai ganti.
2. Buka menu panel dan klik {{ui:Peraturan penomboran…}}.
3. Tulis peraturan, contohnya `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` mengira naik dalam kalangan helaian yang medan lainnya sama, jadi tingkat 1 mendapat A-101, A-102 dan tingkat 2 bermula semula pada A-201. `{SEQ:2}` menulisnya dengan dua digit; `{SUBSET}` ialah nama subset tempat helaian berada.
4. Pilih apa yang berlaku apabila medan berubah: {{ui:Nombor semula helaian}} memastikan nombor mengikut peraturan selepas setiap perubahan; pilihan lain memberi nombor sekali sahaja, sekarang.

Peraturan disimpan dalam fail set. Semasa ia menomborkan semula sendiri, tukar medan helaian dan bukannya nombornya.

## Isi blok tajuk daripada set

Blok tajuk mendapat teksnya daripada set apabila atributnya dilabel dengan nama medan:

| Tag | Yang dipaparkan |
|---|---|
| `SHEETNUMBER` (atau `SHEET_NO`, `DWG_NO`) | Nombor helaian |
| `SHEETTITLE` (atau `TITLE`, `SHEET_TITLE`) | Tajuk helaian |
| `SHEETDESC` | Penerangan helaian |
| `PROJECTNAME` (atau `PROJECT`) | Nama projek |
| `PROJECTNUMBER` (atau `PROJECT_NO`, `JOB_NO`) | Nombor projek |
| `SHEETSETNAME` | Nama set |
| `SHEETINDEX`, `SHEETCOUNT` | "3 daripada 12", dan 12 |
| Anda sendiri, seperti `CLIENT` | Apa yang anda tulis untuknya dalam {{ui:Tetapkan medan…}} |

{{ui:Tetapkan medan…}} memegang nama dan nombor projek dan medan anda sendiri, satu setiap baris dalam bentuk `NAME = value`.

{{ui:Kemas kini lukisan}} menulis nombor, tajuk dan medan ke dalam blok tajuk setiap lukisan dalam set, dan menamakan semula tab layout setiap helaian mengikut set (secara lalai nombor dan tajuk, seperti `A-101 Pelan lantai`; {{ui:Tetapkan medan…}} › {{ui:Nama tab layout}} menukarnya). Setiap lukisan disimpan di tempatnya, dalam format dan versinya sendiri. Selepas anda menomborkan atau menamakan semula helaian, jalankan semula dan tab serta blok tajuk akan mengikutinya.

## Senarai helaian pada helaian penutup

Pilih helaian penutup dalam senarai dan pilih {{ui:Letakkan senarai helaian pada helaian ini}}. Jadual setiap helaian (nombor dan tajuk, di bawah subsetnya) diletakkan di sudut kiri atas helaian. {{ui:Kemas kini lukisan}} dan {{ui:Terbit ke PDF}} memastikannya sentiasa terkini. Ia ialah satu blok, `CC_SHEETLIST`: alihkannya seperti mana-mana rujukan blok.

## Terbitkan set

{{ui:Terbit ke PDF}} membuat satu PDF dengan satu halaman setiap helaian, mengikut susunan set, pada saiz kertas setiap helaian, dengan satu penanda buku untuk setiap helaian ("A-101 — Pelan lantai"). Apabila subset dipilih, CadCraft bertanya sama ada mahu menerbitkan subset itu sahaja. Blok tajuk dalam PDF diisi daripada set walaupun sebelum anda mengemas kini lukisan; lukisan itu sendiri tidak berubah apabila menerbitkan. PDF dimuat turun.

{{ui:Terbitkan ke DWG…}} menulis setiap helaian sebagai DWG tersendiri (DWG 2018): model dan helaian itu, dengan blok tajuknya diisi daripada set, dinamakan mengikut nombor dan tajuknya (`A-101 Level 1 floor plan.dwg`). Pilih {{ui:DWG}}, atau {{ui:DWG + PDF}} untuk PDF set di sebelahnya. `publish.json` menyenaraikan setiap fail dengan saiz dan SHA-256. Apabila folder set boleh ditulis (CadCraft Studio, atau folder yang anda pilih dalam pelayar), fail dimasukkan ke dalam folder `<set name> - published`; jika tidak, ia dimuat turun sebagai satu zip. [Tindihan kelas](topic:viewport-overrides) viewport dibawa bersama dalam setiap DWG.

## Arkibkan set

{{ui:Arkibkan sebagai zip}} memampatkan fail set, setiap lukisan yang digunakannya dan apa yang dipautkan oleh lukisan itu (lukisan terpaut, dan lukisan yang dipautkan oleh lukisan itu pula, serta gambar), dengan mengekalkan folder mereka, ditambah `Transmittal.txt` yang menyenaraikan setiap fail. Pautan yang tidak berada dalam folder set disenaraikan di situ sebagai hilang. Pautan dicari mengikut laluannya daripada lukisan, kemudian mengikut nama failnya di mana-mana dalam folder.

## Fail set

Fail `.ccsheets` ialah JSON yang boleh anda baca dalam mana-mana penyunting teks:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Laluan adalah relatif kepada folder set, dengan `/` antara folder. CadCraft menyemak fail apabila ia dibuka: laluan mutlak, helaian tanpa fail atau layout, atau teks yang bukan teks biasa akan ditinggalkan, dan sejarah memaklumkannya.

## Penyelesaian masalah

| Apa yang anda lihat | Sebabnya | Apa yang perlu dibuat |
|---|---|---|
| "This folder is read only here" | Pelayar tidak dapat menulis dalam folder | Gunakan Chrome atau Edge, atau aplikasi desktop; sementara itu {{ui:Muat turun fail set}} memastikan perubahan anda kekal |
| Helaian ditinggalkan daripada PDF: "tiada layout bernama …" | Layout helaian telah dinamakan semula atau dialih keluar dalam lukisannya | Buka lukisan dan semak tabnya; alih keluar helaian dan tambahkannya semula |
| Blok tajuk kekal kosong | Atributnya mempunyai tag lain | Namakan semula tag atribut kepada nama medan di atas (BEDIT) |
| "sudah mempunyai layout bernama … jadi tab itu tidak dinamakan semula" | Dua helaian bagi satu lukisan akan mendapat nama tab yang sama | Berikan salah satu daripadanya nombor atau tajuk lain |
