---
title: Gunakan CadCraft dengan asisten AI
summary: Biarkan asisten AI atau skrip Anda sendiri bekerja dengan CadCraft: apa yang boleh dilakukannya, cara menghubungkan klien MCP apa pun, dan cara Anda tetap memegang kendali (izin, urungkan, log aktivitas, Putuskan).
keywords: ai, asisten, agen, mcp, model context protocol, skrip, otomasi, baris perintah, cli, json, token, izin, putuskan, aktivitas, folder, jalur, svg, batch
from: 06ba4ef6
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (atau skrip yang Anda tulis) melihat gambar, menjalankan perintah CadCraft, mencetak dan menyimpan, serta memutuskan apa saja yang boleh disentuhnya.

CadCraft **tidak memiliki AI sendiri** dan tidak mengirim apa pun ke mana pun. Anda membawa asistennya: program apa pun yang menggunakan Model Context Protocol (MCP). CadCraft hanya memberinya alat, dan Anda yang memilih alat mana saja.

Ada dua cara untuk masuk:

- **Gambar yang sedang Anda buka.** Asisten bekerja di jendela ini, di samping Anda, melalui CadCraft Studio di komputer Anda. Untuk inilah {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Asisten}} digunakan.
- **Berkas di komputer Anda, tanpa membuka aplikasi.** Server MCP CadCraft dan baris perintah `cadcraft` membaca dan menulis berkas DWG dan DXF di folder yang Anda sebutkan. Lihat "Bekerja dengan berkas tanpa membuka CadCraft" di bawah.

## Menyalakannya

1. Buka {{ui:Pengaturan}} (roda gigi di bilah aplikasi, atau {{key:Mod+,}}) dan buka tab {{ui:CadCraft}}.
2. Di bawah {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan CadCraft**. Fitur ini mati sampai Anda mengaktifkannya.
3. Pilih apa yang boleh dilakukannya. **Baca** sudah tercentang sejak awal; centang yang lain hanya bila Anda membutuhkannya.

| Izin | Yang dapat dilakukan asisten |
|---|---|
| Baca | Melihat gambar: mendeskripsikannya, mendaftar dan mencari objek, melihat pilihan, mendeskripsikan tampilan dan mengambil gambarnya, memeriksanya terhadap aturan layer dan penggambaran |
| Sunting | Menjalankan perintah pada gambar dan mengubah pilihan. Setiap tindakan adalah satu langkah yang dapat Anda urungkan |
| Simpan | Menyimpan gambar (di desktop, ke berkasnya; di browser, sebagai unduhan) |
| Ekspor | Mencetak ke PDF dan membuat berkas lain |

## Biarkan asisten memakai berkas di folder yang Anda pilih

Di CadCraft Studio, asisten dapat membuka, menyimpan, dan mencetak berkas dengan menyebut namanya, alih-alih memakai dialog berkas, tetapi hanya di dalam folder yang Anda tambahkan di bawah {{ui:Asisten}} › {{ui:Folder yang boleh dipakai}}:

1. Pilih {{ui:Tambahkan folder…}} dan pilih folder di dialog milik Studio.
2. Asisten sekarang dapat mendaftar berkas di sana (`files_list`), membuka gambar (`drawing_open`), menyimpannya di sana dalam versi DWG atau sebagai DXF, mencetak ke berkas PDF atau SVG, memuat berkas LISP, dan memberi perintah berkas yang diminta (`INSERT` `F`, `XATTACH`, berkas titik), atau menyatakan ke mana berkas perintah harus pergi (CSV `COUNT`, `PUBLISH`).
3. {{ui:Buang}} langsung menarik kembali folder. Jalur di luar folder itu ditolak, dan berkas yang sudah ada hanya diganti bila asisten memintanya atau bila ia sendiri yang menulis berkas itu.

Membuka tetap memerlukan **Baca**; menulis gambar memerlukan **Simpan**; berkas lain memerlukan **Ekspor**.

Alat di luar izin yang Anda centang tidak ditawarkan kepada asisten sama sekali, dan bila ia tetap memintanya, CadCraft menolak dan mencatatnya di log aktivitas. Mematikan sakelar mengakhiri setiap koneksi sekaligus. {{ui:Atur ulang pengaturan CadCraft}} juga mematikannya.

## Hubungkan asisten Anda

Asisten terhubung melalui **CadCraft Studio** di komputer Anda: Studio menjalankan server kecil yang hanya dapat dijangkau komputer ini (alamat `127.0.0.1`), dan server itu dilindungi token yang dibuat Studio setiap kali dimulai. Buka Studio, pilih {{ui:Hubungkan asisten}}, lalu salin alamat dan tokennya.

- Di asisten Anda, tambahkan server MCP bertipe HTTP dengan alamatnya (bentuknya seperti `http://127.0.0.1:47615/mcp`) dan header `Authorization: Bearer <token>`. Studio menampilkan pengaturan yang perlu ditempelkan.

{{ui:Token baru}} di Studio membuat setiap asisten yang terhubung tersambung ulang dengan token baru. Jangan pernah membagikan token: siapa pun yang memilikinya dapat menggunakan aplikasi yang Anda nyalakan, selama Studio berjalan.

:::note
Tab browser tidak dapat membuka koneksi untuk asisten: di aplikasi browser, sakelar ini tidak berpengaruh sampai Anda memakai CadCraft Studio di komputer Anda.
:::

## Anda tetap memegang kendali

- **Setiap tindakan adalah satu langkah urungkan**, diberi label dengan nama asisten untuk tindakan itu, misalnya "Asisten: LINE". Tekan {{key:Mod+Z}} untuk menarik kembali tindakan terakhir asisten secara utuh.
- **Anda melihat apa yang dilakukannya.** Perintahnya muncul di riwayat perintah dengan **[Asisten]** di depannya, dan gambar digambar ulang saat ia bekerja.
- **Ia menunggu Anda.** Selama Anda berada di tengah perintah, asisten hanya dapat membaca tetapi tidak dapat mengubah gambar; ia diberi tahu untuk mencoba lagi saat Anda selesai.
- **Anda tahu saat ada yang terhubung.** Sebuah tombol di bilah aplikasi menyebut nama asisten selama asisten itu terhubung. Klik tombol itu untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan** koneksinya.
- **Aktivitas.** {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Asisten}} › {{ui:Aktivitas}} mendaftar setiap panggilan: kapan, alat apa, selesai atau ditolak, dan langkah urungkan yang dibuatnya. {{ui:Simpan log}} menyimpan salinannya.

## Yang dapat diminta asisten

| Alat | Izin | Fungsinya |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Baca | Nama gambar, satuan, layer, blok, lembar; apa yang tampil di layar |
| `files_list`, `drawing_open` | Baca | Studio: berkas di folder Anda; membuka satu berkas di jendela ini |
| `objects_list`, `object_get`, `selection_get` | Baca | Objek beserta geometri, panjang, dan luasnya (atau hanya jumlahnya, menurut jenis dan layer); pilihan |
| `drawing_check` | Baca | Aturan seperti layer yang diizinkan, tidak ada yang di layer 0, warna ByLayer, tinggi teks |
| `view_screenshot` | Baca | Gambar dari gambar seperti yang tampil |
| `command_run` | Sunting | Mengetik di baris perintah: `LINE 0,0 @100,0 @0,50 ` dibaca seperti yang akan Anda ketik (spasi mengakhiri jawaban), atau daftar dengan satu jawaban masing-masing. Ia dapat membiarkan perintah terbuka dan melanjutkannya pada panggilan berikutnya |
| `script_run` | Sunting | Skrip (`.scr`) atau berkas LISP, seperti yang dimuat {{ui:APPLOAD}} |
| `block_insert` | Sunting | Menempatkan blok beserta nilai atributnya dalam satu langkah |
| `selection_set`, `undo` | Sunting | Memilih objek untuk perintah berikutnya; mengurungkan langkahnya sendiri |
| `drawing_save` | Simpan | {{ui:Simpan}} milik CadCraft, atau {{ui:Simpan sebagai}} ke salah satu folder Anda |
| `drawing_plot` | Ekspor | PDF atau SVG dari lembar atau dari model, pada skala atau disesuaikan (underlay PDF belum dicetak dengan cara ini) |

Saat asisten menjalankan perintah, CadCraft mengajukan pertanyaannya di baris perintah alih-alih di dialog (misalnya apakah akan menyisipkan seluruh gambar atau satu blok), sehingga asisten dapat menjawabnya. {{ui:Pustaka}} dan Temukan tetap memerlukan Anda; asisten diberi tahu untuk bertanya kepada Anda.

## Bekerja dengan berkas tanpa membuka CadCraft

Server MCP CadCraft (`cadcraft-mcp`) dan baris perintah (`cadcraft`) menjalankan kode gambar CadCraft sendiri di Node.js, tanpa jendela. Keduanya memerlukan Node.js 20 atau yang lebih baru.

- **Server MCP** hanya bekerja di dalam folder yang Anda sebutkan, dan hanya dengan izin yang Anda berikan: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Tanpa `--root`, ia tidak dapat membuka berkas apa pun; tanpa `--allow`, ia hanya dapat membaca. Ia juga dapat membaca model IFC, takeoff, dan markup dalam kumpulan PDF.
- **Baris perintah** untuk skrip Anda sendiri: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Beberapa berkas sekaligus: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Tambahkan `--json` untuk keluaran yang dapat dibaca program.

:::note
Jika `npx @getcadcraft/mcp` menyatakan paket tidak ditemukan, paket itu belum dipublikasikan. Berita di getcadcraft.com akan menyatakannya saat paket sudah tersedia.
:::

## Bila ada yang tidak berfungsi

- **Asisten tidak melihat alat CadCraft:** periksa bahwa sakelar sudah menyala di jendela ini, dan bahwa jendela itu terbuka di Studio.
- **"needs the edit permission":** pesan itu berarti asisten butuh izin sunting. Centang **Sunting** di bawah {{ui:Asisten}}, lalu minta lagi.
- **"outside the folders assistants may use":** tambahkan folder itu di bawah {{ui:Asisten}} › {{ui:Folder yang boleh dipakai}}, atau minta asisten menggunakan berkas di folder yang sudah Anda tambahkan.
- **Kesalahan "401" atau "token":** tokennya berubah (Studio dimulai ulang, atau {{ui:Token baru}}). Salin token yang baru ke pengaturan asisten.
- **Perubahannya keliru:** tekan {{key:Mod+Z}}. Satu kali tekan menarik kembali satu tindakan penuh asisten.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh kerja, masing-masing dengan alat yang dipanggilnya.
