---
title: Penuding melompat atau ketinggalan di atas lukisan
summary: Apa yang perlu dilakukan apabila silang tidak mengikut tetikus dengan lancar, pada komputer yang lebih lama atau lebih perlahan.
keywords: kursor melompat, penuding ketinggalan, silang perlahan, kursor tersentak, komputer lama, kad grafik lama, grafik bersepadu, pecutan perkakasan, penuding lebih lancar, komputer riba perlahan
from: 39dc9057
---

CadCraft berjalan dalam pelayar (CadCraft Studio juga ialah paparan pelayar), jadi tiada apa di dalamnya dibina untuk satu kad grafik atau yang lain. Silang dilukis oleh aplikasi, yang bermakna ia hanya boleh bergerak selaju aplikasi boleh melukis satu bingkai.

## Biarkan CadCraft mengurangkan ciri tambahan

1. Buka {{ui:Tetapan}} (gear di bahagian kanan atas) dan kekal pada tab {{ui:CadCraft}}.
2. Pilih {{ui:Penuding lebih lancar pada komputer yang lebih perlahan}}.
3. Pilih {{ui:Hidup}}.

Dengan ciri ini dihidupkan, silang penuding komputer anda sendiri digunakan menggantikan silang dan kotak pilih yang dilukis (termasuk silang skrin penuh), dan objek di bawah penuding menyala apabila penuding berehat dan bukan semasa ia bergerak. Snap objek, penjejakan dan jalur getah berfungsi seperti biasa.

{{ui:Automatik}} ialah cara CadCraft bermula: ia memerhati berapa lama bingkai diambil semasa anda menggerakkan penuding, dan menghidupkan ciri ini dengan sendirinya apabila bingkai kekal perlahan selama beberapa saat. Ia memberitahu anda sekali apabila berbuat demikian. {{ui:Mati}} mengekalkan silang yang dilukis tanpa mengira kelajuan.

## Jika masih perlahan

- Semak sama ada pecutan perkakasan dihidupkan dalam pelayar anda: buka `chrome://gpu` (atau `edge://gpu`) dalam tab baharu. Jika baris pertama menyatakan "Software only" atau "Disabled", pelayar sedang melukis tanpa kad grafik. Mengemas kini pemacu grafik selalunya memulihkannya.
- Tutup tab dan program berat yang lain, dan cuba tetingkap pelayar yang lebih kecil.
- Beritahu kami melalui {{ui:Bantuan}}, {{ui:Laporkan masalah}}: nyatakan sama ada anda menggunakan pelayar atau CadCraft Studio, versinya, dan apa yang dipaparkan pada halaman gpu.
