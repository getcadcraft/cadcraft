---
title: Set lembar
summary: Kumpulkan lembar dari banyak gambar dalam satu daftar bernomor, isi kepala gambarnya dari set, terbitkan sebagai satu PDF, dan arsipkan set sebagai zip.
keywords: set lembar, sheet set, ssm, sheetset, ccsheets, dst, daftar lembar, indeks lembar, kepala gambar, kolom, terbitkan, beri nomor ulang, arsip, etransmit, transmittal, subset, lembar sampul, daftar gambar
from: 2c855720
---

## Yang akan Anda pelajari

Cara mengumpulkan lembar (layout) dari beberapa file gambar ke dalam **set lembar**, memberi nomor dan judulnya, meminta kepala gambarnya terisi untuk Anda, menerbitkan seluruh set sebagai satu PDF, dan mengemas semuanya dalam satu zip untuk dikirim.

Sebuah set lembar tinggal dalam file kecil tersendiri, `<name>.ccsheets`, di folder yang berisi gambar. File set mencantumkan lembar dengan path dari folder itu, sehingga Anda dapat memindahkan atau menyalin seluruh folder.

:::note
Membuka folder untuk membaca dan menulis memerlukan Chrome atau Edge (keduanya dapat mengizinkan halaman bekerja di folder yang Anda pilih), atau aplikasi desktop. Peramban lain membuka set hanya baca: Anda dapat melihat dan menerbitkannya, dan file set diunduh alih-alih disimpan.
:::

## Mulai set

1. Cari bagian {{ui:Set lembar}} di panel kiri, dan buka menu {{ui:Set}}-nya. Mengetik {{cmd:SHEETSET}} (atau `SSM`) juga membawa Anda ke sana.
2. Pilih {{ui:Set baru…}}. Beri nama set, dan jika Anda mau, nama dan nomor proyek.
3. Pilih folder yang berisi gambar. File set disimpan di sana.

Untuk membuka set nanti, pilih {{ui:Buka set…}} dan pilih folder yang sama. Jika folder berisi lebih dari satu set, CadCraft akan menanyakan yang mana.

## Tambah lembar

1. Pilih {{ui:Tambah lembar dari gambar…}} dan pilih salah satu gambar di folder.
2. CadCraft membaca gambar itu di latar belakang (tidak dibuka di layar) dan mencantumkan lembarnya. Centang yang Anda inginkan dan klik {{ui:OK}}.
3. Pilih lembar dan tekan {{key:F2}} (atau {{ui:Ganti nama dan nomor…}}) untuk memberinya nomor dan judul, seperti `A-101` dan `Denah lantai`.

{{ui:Lembar baru dari templat…}} membuat gambar baru dari lembar gambar lain (kepala gambar dan viewport-nya), dinamai sesuai lembar baru, dan menambahkannya. Set mengingat gambar yang Anda gunakan sebagai templatnya.

## Atur set

- **Subset** mengelompokkan lembar, seperti Arsitektural › Denah: pilih tempat tujuannya dan pilih {{ui:Subset baru…}}.
- **Urutan**: seret lembar ke tempat lain dalam daftar, atau ke subset untuk memindahkannya ke sana. Dengan keyboard, pilih lembar dan tekan {{key:Alt+Up}} atau {{key:Alt+Down}}.
- **Buka lembar**: klik ganda (atau tekan {{key:Enter}}). Gambarnya dibuka di tabnya sendiri, pada lembar tersebut.
- **Hapus**: pilih dan tekan {{key:Delete}}. Gambar itu sendiri tidak berubah.
- **Urungkan**: {{ui:Urungkan perubahan set}} dan {{ui:Ulangi perubahan set}} melangkah melalui apa yang Anda ubah dalam set.
- **Beri nomor ulang**: {{ui:Beri nomor ulang lembar…}} memberi nomor setiap lembar, atau satu subset, sesuai urutan daftar: awalan, awal dan langkah (`A-` dan `101` menghasilkan A-101, A-102 …).

Setiap perubahan langsung disimpan dalam file set.

## Beri nomor lembar dari kolomnya

Alih-alih memberi nomor lembar dengan tangan, biarkan sebuah aturan membangun setiap nomor dari kolom lembar, sehingga lembar yang pindah ke level atau disiplin lain mendapat nomor barunya sendiri.

1. Berikan setiap lembar kolomnya: pilih lembar, klik {{ui:Ganti nama…}} dan, di {{ui:Kolom lembar ini}}, tulis satu per baris, misalnya `DISCIPLINE = A` dan `LEVEL = 1`. Kolom yang dimiliki bersama oleh seluruh set (misalnya `DISCIPLINE = A`) dapat diletakkan di {{ui:Properti…}} set sebagai gantinya.
2. Buka menu panel dan klik {{ui:Aturan penomoran…}}.
3. Tulis aturannya, misalnya `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` menghitung naik di antara lembar yang kolom lainnya bernilai sama, sehingga level 1 mendapat A-101, A-102, dan level 2 mulai lagi dari A-201. `{SEQ:2}` menuliskannya dengan dua digit; `{SUBSET}` adalah nama subset tempat sebuah lembar berada.
4. Pilih apa yang terjadi saat sebuah kolom berubah: {{ui:Beri nomor ulang lembar}} menjaga nomor tetap mengikuti aturan setelah setiap perubahan; pilihan lainnya memberi nomor sekali, sekarang.

Aturan disimpan dalam file set. Saat ia memberi nomor ulang sendiri, ubah kolom lembar, bukan nomornya.

## Isi kepala gambar dari set

Kepala gambar mendapat teksnya dari set ketika atributnya diberi tag dengan nama sebuah kolom:

| Tag | Yang ditampilkan |
|---|---|
| `SHEETNUMBER` (atau `SHEET_NO`, `DWG_NO`) | Nomor lembar |
| `SHEETTITLE` (atau `TITLE`, `SHEET_TITLE`) | Judul lembar |
| `SHEETDESC` | Deskripsi lembar |
| `PROJECTNAME` (atau `PROJECT`) | Nama proyek |
| `PROJECTNUMBER` (atau `PROJECT_NO`, `JOB_NO`) | Nomor proyek |
| `SHEETSETNAME` | Nama set |
| `SHEETINDEX`, `SHEETCOUNT` | "3 dari 12", dan 12 |
| Milik Anda sendiri, seperti `CLIENT` | Yang Anda tulis untuknya di {{ui:Kolom set…}} |

{{ui:Kolom set…}} berisi nama dan nomor proyek serta kolom Anda sendiri, satu per baris sebagai `NAME = value`.

{{ui:Perbarui gambar}} menulis nomor, judul dan kolom ke dalam kepala gambar setiap gambar dalam set, dan mengganti nama tab layout setiap lembar sesuai set (secara default nomor dan judul, seperti `A-101 Denah lantai`; {{ui:Kolom set…}} › {{ui:Nama tab layout}} mengubahnya). Setiap gambar disimpan di tempatnya, dalam format dan versinya sendiri. Setelah Anda memberi nomor ulang atau mengganti nama lembar, jalankan lagi dan tab serta kepala gambar akan mengikuti.

## Daftar lembar di lembar sampul

Pilih lembar sampul dalam daftar dan pilih {{ui:Taruh daftar lembar di lembar ini}}. Sebuah tabel setiap lembar (nomor dan judul, di bawah subsetnya) diletakkan di sudut kiri atas lembar. {{ui:Perbarui gambar}} dan {{ui:Terbitkan ke PDF}} menjaganya tetap mutakhir. Ini adalah satu blok, `CC_SHEETLIST`: pindahkan seperti blok referensi lainnya.

## Terbitkan set

{{ui:Terbitkan ke PDF}} membuat satu PDF dengan satu halaman per lembar, sesuai urutan set, pada ukuran kertas masing-masing lembar, dengan satu bookmark per lembar ("A-101 — Denah lantai"). Dengan subset dipilih, CadCraft menanyakan apakah hanya menerbitkan subset itu. Kepala gambar di PDF diisi dari set bahkan sebelum Anda memperbarui gambar; gambar itu sendiri tidak berubah karena penerbitan. PDF diunduh.

{{ui:Terbitkan ke DWG…}} menulis setiap lembar sebagai DWG tersendiri (DWG 2018): model dan satu lembar itu, dengan kepala gambarnya diisi dari set, dinamai sesuai nomor dan judulnya (`A-101 Level 1 floor plan.dwg`). Pilih {{ui:DWG}}, atau {{ui:DWG + PDF}} untuk PDF set di sebelahnya. Sebuah `publish.json` mencantumkan setiap file beserta ukuran dan SHA-256-nya. Ketika folder set dapat ditulis (CadCraft Studio, atau folder yang Anda pilih di peramban), file-file itu masuk ke folder `<set name> - published`; jika tidak, mereka diunduh sebagai satu zip. [Penggantian kelas viewport](topic:viewport-overrides) ikut dibawa ke setiap DWG.

## Arsipkan set

{{ui:Arsipkan sebagai zip}} mengemas file set, setiap gambar yang dipakainya, dan apa yang ditautkan gambar-gambar itu (gambar tertaut, dan yang ditautkan di dalamnya, serta gambar), dengan mempertahankan folder mereka, plus `Transmittal.txt` yang mencantumkan setiap file. Tautan yang tidak berada di folder set dicantumkan di sana sebagai hilang. Tautan ditemukan melalui path-nya dari gambar, lalu melalui nama filenya di mana pun dalam folder.

## File set

File `.ccsheets` adalah JSON yang dapat Anda baca di editor teks mana pun:

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

Path bersifat relatif terhadap folder set, dengan `/` di antara folder. CadCraft memeriksa file saat membukanya: path absolut, lembar tanpa file atau layout, atau teks yang bukan teks biasa akan dibiarkan keluar, dan riwayat mencatatnya.

## Pemecahan masalah

| Yang Anda lihat | Penyebab | Yang harus dilakukan |
|---|---|---|
| "Folder ini hanya baca di sini" | Peramban tidak dapat menulis di folder itu | Gunakan Chrome atau Edge, atau aplikasi desktop; sementara itu {{ui:Unduh file set}} menjaga perubahan Anda |
| Sebuah lembar tidak masuk ke PDF: "tidak memiliki layout bernama …" | Layout lembar itu diganti namanya atau dihapus di gambarnya | Buka gambar dan periksa tabnya; hapus lembar itu dan tambahkan lagi |
| Sebuah kepala gambar tetap kosong | Atributnya memiliki tag lain | Ganti nama tag atribut menjadi nama kolom di atas (BEDIT) |
| "sudah memiliki layout bernama … sehingga tab itu tidak diganti namanya" | Dua lembar dari satu gambar akan mendapat nama tab yang sama | Beri salah satunya nomor atau judul lain |
