---
title: Susun lantai dalam satu lukisan
summary: Lukis tingkat pertama di atas tingkat bawah pada koordinat yang sama dan matikan setiap lantai, tanpa Xref.
keywords: lantai, lantai, FLOORS, FLR, FLOOR, FLOORLAYERS, tingkat, aras, susun, lapisan reka bentuk, ruang model, underlay, xref
from: 7440fc87
---

Lantai membolehkan anda menyusun pelan dalam satu ruang model. Setiap lantai mempunyai objeknya sendiri, dan lapisan terus berfungsi merentasi kesemuanya. Dinding pada `P-Walls` boleh berada di mana-mana lantai.

## Mula

Taip `FLOORS` (`FLR`), atau pilih {{ui:Lantai…}} dalam menu {{ui:Lagi}} kumpulan {{ui:Pandangan}}, kemudian pilih {{ui:Mula dengan lantai}}. Apa yang anda telah lukis setakat ini diletakkan pada tingkat bawah.

## Melukis pada lantai

Pilih lantai dengan butang bulat dalam panel. Objek baharu diletakkan padanya.

Lantai lain yang ditunjukkan dipudarkan di bawahnya. Anda boleh snap kepadanya, supaya lantai pertama sejajar dengan tingkat bawah, tetapi anda tidak boleh mengubahnya sehingga anda menjadikannya lantai aktif. Ikon mata mematikan lantai. Dinding hanya bercantum dengan dinding pada lantai mereka sendiri.

Untuk memulakan lantai dari lantai di bawahnya, pilih apa yang anda mahu, pilih lantai dalam panel dan tekan {{ui:Salin ke sana}}.

## Letakkan lantai pada helaian

Pilih viewport pada helaian dan pilih lantainya di bawah {{ui:Lantai ditunjuk}} dalam Sifat. Viewport yang tiada lantai dipilih menunjukkan semua lantai yang dihidupkan.

## Hantar fail kepada orang lain

Program CAD lain tidak mengenali lantai, jadi mereka menunjukkan setiap lantai bersama. Sebelum menghantar fail, pilih {{ui:Tukar lantai kepada lapisan}} dalam panel, atau taip `FLOORLAYERS`. Setiap objek dialihkan ke lapisan yang dinamakan mengikut lantainya, seperti `Ground floor-P-Walls`, supaya mereka masih boleh mematikan setiap lantai. Buat asal mengembalikannya. CadCraft mengekalkan lantai dalam fail DWG atau DXF yang disimpannya.
