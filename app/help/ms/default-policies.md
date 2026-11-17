---
title: "Dasar lalai: tetapkan apa yang bermula dengan lukisan baharu"
summary: Nyatakan sekali unit, format panjang, kejituan, ketinggian teks dan kertas helaian yang bermula dengan lukisan baharu, untuk kerja metrik dan imperial, dan kongsi dasar merentasi pejabat sebagai fail kecil.
keywords: lalai, dasar lalai, dasar, dasar pejabat, standard pejabat, lalai pejabat, templat, lukisan baharu, unit, insunits, format panjang, seni bina, kejituan, luprec, ketinggian teks, kertas helaian, a1, kongsi, eksport, import, json
from: 7b80fd13
---

## Apa yang akan anda lakukan

Beritahu CadCraft apa yang perlu dimulakan oleh lukisan baharu, supaya tiada siapa dalam pejabat perlu menjalankan UNITS dan menukar perkara yang sama setiap kali. Ini ialah add-on: ia mati sehingga anda menghidupkannya, dan dasar yang tidak anda tetapkan membiarkan lalai CadCraft sendiri tidak berubah.

:::note
Ini ialah lalai untuk lukisan **baharu** dan helaian **baharu**. Lukisan yang sudah anda mulakan tidak berubah, dan begitu juga lukisan yang anda buka.
:::

## Langkah

1. Buka Tetapan, pergi ke {{ui:Add-ons}} dan hidupkan {{ui:Dasar lalai}}.
2. Dalam Tetapan, buka tab **CadCraft** dan pilih {{ui:Dasar lalai}} dalam senarai di sebelah kiri.
3. Tetapkan dasar yang anda mahu. Setiap satu bermula pada **milik CadCraft**. Dasar dengan kotak **Metrik** dan **Imperial** mengambil satu nilai untuk setiap jenis lukisan; isi hanya yang anda perlukan.
4. Tiada butang Simpan: setiap perubahan disimpan semasa anda membuatnya.
5. Mulakan lukisan baharu. Ia mempunyai unit, format panjang, kejituan dan ketinggian teks yang anda tetapkan, dan helaian baharu pertamanya berada pada kertas yang anda pilih.

## Dasar

- **Unit lukisan baharu**: tiada, milimeter, sentimeter, meter, inci atau kaki.
- **Format panjang** dan **Kejituan panjang**: apa yang ditetapkan oleh arahan UNITS, untuk lukisan baharu.
- **Ketinggian teks baharu**, dalam unit lukisan.
- **Kertas helaian baharu**: kertas yang digunakan oleh helaian baharu.
- **Saiz anotasi pada kertas** (Tetapan › Global › Dasar lalai): ketinggian pejabat dalam milimeter seperti yang dicetak. CadCraft menggunakan yang untuk nota dan label: {{cmd:ANNOSCALE}} menetapkan ketinggian teks baharu bermula pada ketinggian itu pada skala anotasi. Lihat [Unit, kertas dan skala](topic:units-papers-scales#annotate-by-scale).

Lukisan dalam inci atau kaki menggunakan nilai Imperial; mana-mana lukisan lain menggunakan nilai Metrik. Lukisan tanpa unit menggunakan sistem unit yang ditetapkan dalam Tetapan › Global › Dasar lalai, atau Metrik jika tiada yang ditetapkan.

## Kongsi merentasi pejabat

1. Dalam Tetapan, buka tab **Global** dan pilih {{ui:Dasar lalai}}.
2. Klik {{ui:Simpan ke fail}}. Anda mendapat fail kecil yang berakhir dengan `.ccdefaults.json`.
3. Di komputer lain, hidupkan add-on, buka tempat yang sama dan klik {{ui:Muat dari fail}}. Dasar dalam fail itu menggantikan dasar pada komputer itu.

Satu fail menyimpan dasar setiap app CadCraft, jadi fail yang sama berfungsi dalam BimCraft.

## Perkara yang perlu diketahui

- Tiada dasar untuk skala helaian: pandangan helaian baharu dimuatkan ke lukisan, dan anda menetapkan skalanya pada helaian.
- Tiada dasar untuk gaya dimensi: lukisan baharu tidak mempunyai gaya dimensi bernama. Tetapkan dimensi dengan DIMSTYLE, atau mulakan dari lukisan yang mempunyai gaya anda.
- Fail itu ialah JSON biasa dan terbuka. Dasar yang dinamakan oleh fail tetapi tidak diketahui oleh versi ini ditinggalkan dan dinamakan dalam mesej; yang lain tetap dimuatkan.
- Dasar disimpan dalam pelayar ini, bukan dalam lukisan. Matikan add-on dan semuanya kembali menjadi milik CadCraft.
</content>
