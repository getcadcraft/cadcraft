---
title: Semak titik as-built
summary: Baca titik yang diukur oleh kru ukur dan bandingkannya dengan titik dan blok lukisan: dalam atau luar toleransi, tidak diukur, lebihan. Ditandakan dalam lukisan dan ditulis sebagai laporan CSV.
keywords: as built, as-built, asbuilt, ukur, stesen jumlah, penandaan tapak, fail titik, csv, txt, pnezd, penzd, xyz, toleransi, sisihan, semak, bandingkan, exportpoints, titik susun atur
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) ialah separuh lagi bagi {{cmd:EXPORTPOINTS}}: anda mengeksport titik lukisan untuk lapangan, kru menanda titik itu dan mengukur apa yang dibina, dan ASBUILT membandingkan fail mereka dengan lukisan.

1. Taip {{cmd:ASBUILT}} dan pilih titik dan blok yang sama yang anda eksport (Enter mengambil setiap POINT, seperti EXPORTPOINTS).
2. **Padankan titik as-built mengikut** **Nombor** (kru mengekalkan nombor titik anda: beri nombor pertama yang anda eksport daripadanya) atau **Terdekat** (mereka menomborkan bacaan mereka sendiri: setiap titik reka mengambil yang paling dekat).
3. Beri unit dan koordinat fail seperti yang anda eksport (Lukisan, Meter atau Kaki; World atau UCS), dan **toleransi** dalam unit lukisan.
4. Pilih fail CSV atau TXT kru. CadCraft membacanya seperti CivilCraft: koma, tab, koma bertitik atau ruang, baris pengepala yang menamakan lajurnya, atau PNEZD mengikut bilangan lajur.

Baris arahan menyatakan berapa banyak titik yang dipadankan, berapa dalam toleransi, berapa di luar, yang tidak diukur dan yang lebihan, serta jarak terbesar. **Tandakan dalam lukisan?** Ya meletakkannya pada lapisan **AS-BUILT** sebagai satu langkah buat asal: satu titik bagi setiap bacaan, nombor dan jaraknya di sebelah, dan garisan merah dari titik reka ke setiap bacaan yang berada di luar toleransi. Laporan CSV dimuat turun dengan setiap titik: koordinat reka dan as-built, beza timur, utara dan ketinggian, serta keputusannya.

Lihat juga [Titik untuk program BIM](topic:points-for-bim).
