---
title: Periksa titik as-built
summary: Baca titik yang diukur tim survei dan bandingkan dengan titik dan blok gambar: dalam atau di luar toleransi, tidak diukur, dan lebih — ditandai di gambar dan ditulis sebagai laporan CSV.
keywords: as built, as-built, asbuilt, survei, total station, pematokan, setting out, stake out, file titik, csv, txt, pnezd, penzd, xyz, toleransi, deviasi, periksa, bandingkan, exportpoints, titik tata letak
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) adalah separuh lainnya dari {{cmd:EXPORTPOINTS}}: Anda mengekspor titik gambar untuk lapangan, regu menandainya dan mengukur apa yang telah dibangun, dan ASBUILT membandingkan file mereka dengan gambar.

1. Ketik {{cmd:ASBUILT}} dan pilih titik dan blok yang sama dengan yang Anda ekspor (Enter mengambil setiap POINT, seperti EXPORTPOINTS).
2. **Pasangkan titik as-built berdasarkan** **Nomor** (regu menyimpan nomor titik Anda: berikan nomor pertama yang Anda ekspor) atau **Terdekat** (mereka memberi nomor pada bidikan mereka sendiri: setiap titik desain mengambil yang paling dekat).
3. Berikan satuan dan koordinat file seperti saat Anda mengekspornya (Gambar, Meter, atau Kaki; World atau UCS), dan **toleransi** dalam satuan gambar.
4. Pilih file CSV atau TXT dari regu. CadCraft membacanya seperti CivilCraft membacanya: koma, tab, titik koma atau spasi, baris header yang menamai kolomnya, atau PNEZD berdasarkan jumlah kolom.

Baris perintah menyatakan berapa titik yang dipasangkan, berapa yang berada dalam toleransi, di luar toleransi, tidak diukur, dan lebih, serta jarak terbesar. **Tandai di gambar?** Ya menempatkannya pada layer **AS-BUILT** sebagai satu langkah urungkan: sebuah titik di setiap bidikan, nomor dan jaraknya di sebelahnya, dan garis merah dari titik desain ke setiap bidikan di luar toleransi. Laporan CSV diunduh dengan setiap titik: koordinat desain dan as-built, selisih timur, utara dan tinggi, serta hasilnya.

Lihat juga [Titik untuk program BIM](topic:points-for-bim).
