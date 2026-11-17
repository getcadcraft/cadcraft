---
title: Penunjuk melompat atau tertinggal di atas gambar
summary: Yang harus dilakukan saat garis bidik tidak mengikuti mouse dengan halus, pada komputer yang lebih tua atau lebih lambat.
keywords: kursor melompat, penunjuk tertinggal, garis bidik lambat, kursor patah-patah, komputer tua, kartu grafis lama, grafis terintegrasi, akselerasi perangkat keras, penunjuk lebih halus, laptop lambat
from: 39dc9057
---

CadCraft berjalan di peramban (CadCraft Studio juga berupa tampilan peramban), sehingga tidak ada yang dibuat untuk satu kartu grafis atau kartu lainnya. Garis bidik digambar oleh aplikasi, artinya ia hanya dapat bergerak secepat aplikasi dapat menggambar satu bingkai.

## Biarkan CadCraft mengurangi tambahannya

1. Buka {{ui:Pengaturan}} (ikon roda gigi di kanan atas) dan tetap di tab {{ui:CadCraft}}.
2. Pilih {{ui:Penunjuk lebih halus di komputer lambat}}.
3. Pilih {{ui:Nyala}}.

Jika aktif, penunjuk bidik bawaan komputer Anda digunakan sebagai pengganti garis bidik dan kotak pilih yang digambar (termasuk garis bidik layar penuh), dan objek di bawah penunjuk menyala saat penunjuk diam, bukan saat bergerak. Snap objek, pelacakan, dan garis karet bekerja seperti biasa.

{{ui:Otomatis}} adalah cara CadCraft memulai: ia memantau berapa lama bingkai diambil saat Anda menggerakkan penunjuk, dan menyalakan ini sendiri saat bingkai tetap lambat selama beberapa detik. Ia memberi tahu Anda sekali saat itu terjadi. {{ui:Mati}} mempertahankan garis bidik yang digambar apa pun kecepatannya.

## Jika masih lambat

- Periksa apakah akselerasi perangkat keras aktif di peramban Anda: buka `chrome://gpu` (atau `edge://gpu`) di tab baru. Jika baris pertama menyatakan "Software only" atau "Disabled", peramban menggambar tanpa kartu grafis. Memperbarui driver grafis sering memperbaikinya.
- Tutup tab dan program berat lainnya, lalu coba jendela peramban yang lebih kecil.
- Beri tahu kami melalui {{ui:Bantuan}}, {{ui:Laporkan masalah}}: sebutkan apakah Anda memakai peramban atau CadCraft Studio, versinya, dan apa yang tertera di halaman gpu.
