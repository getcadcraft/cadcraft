---
title: Tukar penanda kepada semakan
summary: Baca pakej redline yang ditulis MarkupCraft, terima atau tolak setiap perubahan, letakkan awan semakan dan log semakan pada yang diterima, dan simpan fail jawapan yang dibaca semula oleh MarkupCraft.
keywords: redline, markup, semakan, awan, awan semakan, log semakan, terima, tolak, markupcraft, semak, pakej redline, jawapan, REDLINE
from: cdb3fafe
---

Seorang penyemak menanda set pelan dalam MarkupCraft dan menghantar anda **pakej redline**, fail yang berakhir dengan `.redline.json`. Di sini anda melalui setiap perubahan satu demi satu, dan yang diterima menjadi awan semakan pada lukisan.

## Semak perubahan

Taip {{cmd:REDLINE}} (`RDL`) dan pilih pakej itu. Pilih:

- {{ui:Senarai}}: setiap perubahan dengan nombornya, keadaan, helaian, jenis, siapa yang meminta dan apa yang mereka tulis.
- {{ui:Terima}}, {{ui:Tolak}}, {{ui:Selesai}}: taip nombor (`1,3-5`, atau `All`) dan nota pilihan untuk fail jawapan. {{ui:Buka semula}} mengembalikan perubahan kepada terbuka.
- {{ui:Rangka}}: bahagian lukisan yang dipaparkan oleh helaian yang ditanda. Klik dua bucu; tekan {{key:Enter}} untuk keseluruhan lukisan. Perubahan diletakkan mengikut tempat ia berada pada helaian, jadi inilah yang menjajarkannya.
- {{ui:Guna}}: melukis awan semakan (lapisan `REV-CLOUD`, dengan huruf semakan) mengelilingi setiap perubahan yang diterima atau selesai, dan log semakan, jadual bergaris bagi apa yang diterima dengan nota anda (lapisan `REV-LOG`), di sebelah kanan lukisan. Satu langkah buat asal.
- {{ui:Simpan}}: menulis `<project>-<revision>.redline-answers.json`. Buka dalam MarkupCraft dan penanda akan ditutup: Diterima, Ditolak atau Selesai, dengan nota anda sebagai komen.

## Apa yang perlu diketahui

Apa yang ditulis penyemak dipaparkan seperti yang ditulis. CadCraft tidak pernah mengikut arahan yang ditemui dalam pakej; ia hanya menunjukkannya kepada anda.

Perubahan yang ditolak dan terbuka tidak menambah apa-apa pada lukisan. Pakej dibaca pada komputer anda; tiada apa-apa dimuat naik.

Jika pembantu anda disambungkan, ia boleh membaca pakej, merekod keputusan dan menggunakannya dengan alat `redline_read`, `redline_decide`, `redline_apply` dan `redline_answers`; lukisan berubah dalam satu langkah buat asal, "Pembantu: Redline kepada semakan".
