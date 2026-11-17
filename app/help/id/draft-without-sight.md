---
title: Gambar tanpa melihat
summary: Nyalakan Akses dan CadCraft membacakan setiap perintah dan hasilnya lewat pembaca layar Anda, menjelaskan gambar dan apa yang ada di dekat kursor, memungkinkan Anda memindahkan kursor dengan keyboard, memainkan suara untuk setiap snap dan grip, serta menerima perintah lewat suara jika peramban Anda dapat melakukannya di komputer Anda.
keywords: aksesibilitas, pembaca layar, tunanetra, penglihatan rendah, NVDA, VoiceOver, JAWS, Orca, kursor keyboard, perintah suara, ucapan, suara, suara snap, jelaskan gambar, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Akses** memungkinkan Anda menggambar tanpa melihat layar. Akses mati sampai Anda menyalakannya, sehingga tidak ada yang mendapatkannya secara tidak sengaja.

## Nyalakan

Buka **Pengaturan** (ikon roda gigi, atau Ctrl+,), cari **Gambar tanpa melihat** lalu pilih **Nyala**. Atau ketik `ACCESS` di baris perintah dan jawab `On`. Pengaturan ini diingat di komputer ini.

Dengan Akses menyala:

- **Semua yang ditampilkan baris perintah dibacakan** lewat pembaca layar Anda: apa yang Anda ketik, perintah yang diminta, jawabannya, dan setiap kesalahan. CadCraft memakai area langsung (live region) sopan dan mendesaknya sendiri, sehingga pembaca layar yang membaca area langsung tidak perlu pengaturan apa pun. Kesalahan dan pembatalan langsung disampaikan; hal lain menunggu gilirannya.
- **Area gambar dapat dijangkau.** Tekan Tab sampai Anda mendengar "Gambar", atau tekan Shift+Tab dari baris perintah. Ini adalah area yang meneruskan tombol ke CadCraft.

## Tombol pada gambar

| Tombol | Fungsinya |
|---|---|
| Tombol panah | Memindahkan kursor keyboard. Satu langkah sekitar seperseratus dari yang ditampilkan layar, dibulatkan ke 1, 2, atau 5. Shift bergerak sepuluh kali lebih jauh, Ctrl sepersepuluh. |
| Enter | Memilih titik di bawah kursor, persis seperti klik. |
| Spasi | Menekan Enter di baris perintah: menyelesaikan LINE, mengambil nilai bawaan. |
| Tab, Shift+Tab | Melompat ke titik snap berikutnya atau sebelumnya di dekat kursor, yang terdekat lebih dulu. |
| G | Berpindah melalui grip objek yang dipilih. |
| D | Jelaskan gambar: berapa objek, jenis apa, seberapa besar, dan apa yang dipilih. |
| W | Sebutkan di mana kursor berada dan seberapa jauh dari titik terakhir. |
| N | Sebutkan apa yang ada di dekat kursor, yang terdekat lebih dulu, dengan jarak dan sisinya. |
| S | Jelaskan objek yang dipilih. |
| R | Ulangi hal terakhir yang disebutkan. |
| V | Suara menyala atau mati. |
| / | Pergi ke baris perintah. |
| ? | Daftar tombol ini. |

Saat Anda bergerak dengan tombol, dibacakan di mana Anda mendarat. Ketika sebuah perintah menunggu titik, juga dibacakan seberapa jauh dan ke arah mana Anda dari titik terakhir, misalnya "2400 dari titik terakhir, ke kanan, pada 0 derajat".

## Perintah

- {{cmd:ACCESS}} menyalakan atau mematikan Akses, suara snap, dan suara, lalu menyebutkan statusnya.
- {{cmd:DESCRIBE}} menyebutkan isi gambar.
- {{cmd:WHEREAMI}} menyebutkan di mana kursor berada.
- {{cmd:NEARBY}} menyebutkan apa yang ada dekat kursor.
- {{cmd:SAYSEL}} menyebutkan apa yang dipilih, satu kalimat per objek.
- {{cmd:VOICE}} menyalakan atau mematikan perintah lisan.

Kelima perintah pertama ini membaca gambar dan menampilkan jawaban; tidak mengubah apa pun.

## Suara untuk snap dan grip

Nyalakan **Bunyi snap dan grip** di Pengaturan. Setiap jenis snap memiliki nada dan bunyinya sendiri, sehingga Anda dapat membedakan titik ujung dari titik tengah, pusat, perpotongan, dan lainnya; grip memiliki bunyi ketukan ganda. Suara bergeser ke kiri atau kanan mengikuti kursor di seluruh layar. Suara dibuat di komputer Anda; tidak ada yang diunduh.

## Perintah dengan suara

Nyalakan **Perintah dengan suara** di Pengaturan. Ucapkan nama perintah ("line", "circle", "move"), lalu ucapkan angka seperti Anda membacanya: "titik tiga ratus koma empat ratus", "jarak dua belas ratus", "sudut empat puluh lima". "Enter", "batal", "urungkan" dan "ulangi" melakukan apa yang disebutkannya. Apa yang terdengar dibacakan kembali, dan frasa yang bukan perintah dilaporkan, tidak ditebak.

**Di mana ucapan dikenali.** CadCraft tidak memiliki layanan ucapan sendiri dan tidak mengirim audio ke mana pun. CadCraft meminta peramban Anda untuk mengenali ucapan di komputer ini. Jika peramban Anda bisa, pilihannya adalah **Di komputer ini** dan tidak ada audio yang keluar darinya. Jika tidak bisa, suara tetap mati kecuali Anda memilih **Layanan daring peramban**, yang memungkinkan peramban mengirim audio ke layanan ucapan pembuatnya. Pengaturan memberi tahu mana yang berlaku sebelum Anda memutuskan.

## Yang belum dilakukan

- Hanya CadCraft yang memiliki Akses. Tujuh aplikasi lain akan menyusul, dengan tombol dan suara yang sama.
- Teks dalam gambar (catatan, nama blok) dibacakan sebagaimana tertulis; teks itu tidak pernah diambil sebagai instruksi.
- Fitur ini sudah diuji dengan pemeriksaan sintetis dan pengujian peramban; pemeriksaan manual dengan NVDA, VoiceOver, serta penguji tunanetra atau penglihatan rendah masih akan dilakukan. Jika Anda mencobanya, beri tahu kami apa yang kurang.
