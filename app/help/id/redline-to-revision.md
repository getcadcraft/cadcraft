---
title: Ubah markup menjadi revisi
summary: Baca paket redline yang ditulis MarkupCraft, terima atau tolak setiap perubahan, pasang awan revisi dan log revisi pada yang diterima, lalu simpan file jawaban yang dibaca kembali oleh MarkupCraft.
keywords: redline, markup, revisi, awan, awan revisi, log revisi, terima, tolak, markupcraft, tinjauan, paket redline, jawaban, REDLINE
from: cdb3fafe
---

Seorang peninjau menandai set denah di MarkupCraft dan mengirimkan Anda **paket redline**, file yang berakhiran `.redline.json`. Di sini Anda memeriksanya perubahan demi perubahan, dan yang diterima menjadi awan revisi di gambar.

## Periksa perubahan

Ketik {{cmd:REDLINE}} (`RDL`) dan pilih paketnya. Pilih:

- {{ui:List}}: setiap perubahan dengan nomornya, statusnya, lembarnya, jenisnya, siapa yang memintanya, dan apa yang mereka tulis.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: ketik nomornya (`1,3-5`, atau `All`) dan catatan opsional untuk file jawaban. {{ui:Reopen}} mengembalikan perubahan menjadi terbuka.
- {{ui:Frame}}: bagian gambar yang ditampilkan lembar yang ditandai. Klik dua sudut; tekan {{key:Enter}} untuk seluruh gambar. Perubahan ditempatkan sesuai posisinya di lembar, sehingga inilah yang menyejajarkannya.
- {{ui:Apply}}: menggambar awan revisi (layer `REV-CLOUD`, dengan huruf revisi) di sekeliling setiap perubahan yang diterima atau selesai, dan log revisi, tabel bergaris berisi apa yang diterima beserta catatan Anda (layer `REV-LOG`), di sebelah kanan gambar. Satu langkah urungkan.
- {{ui:Save}}: menulis `<project>-<revision>.redline-answers.json`. Bukalah di MarkupCraft dan markup-nya ditutup: Diterima, Ditolak, atau Selesai, dengan catatan Anda sebagai komentar.

## Yang perlu diketahui

Yang ditulis peninjau ditampilkan apa adanya. CadCraft tidak pernah mengikuti instruksi yang ditemukan dalam paket; ia hanya menampilkannya kepada Anda.

Perubahan yang ditolak dan yang masih terbuka tidak menambahkan apa pun ke gambar. Paket dibaca di komputer Anda; tidak ada yang diunggah.

Jika asisten Anda terhubung, ia dapat membaca paket, mencatat keputusan, dan menerapkannya dengan alat `redline_read`, `redline_decide`, `redline_apply`, dan `redline_answers`; perubahan gambar terjadi dalam satu langkah urungkan, "Asisten: Redline menjadi revisi".
