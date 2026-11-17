---
title: Tag: atribut yang menyuap jadual
summary: Takrifkan tag (jenisnya, nilai yang boleh diambil, blok yang dikenakannya), tetapkan pada rujukan blok, dan senaraikan rujukan sebagai jadual yang boleh disimpan sebagai CSV.
keywords: tag, tag, atribut, jadual, pengekstrakan data, sifat, penarafan api, senarai pilihan, rujukan blok, TAGS, csv
from: 9b90bacc
---

**Tag** ialah atribut blok dengan takrifan: jenis nilai yang dipegangnya, nilai yang dibenarkan, dan blok yang dikenakannya. Nilai ialah atribut blok biasa, jadi mana-mana program lain boleh membacanya dan {{cmd:ATTEDIT}} memaparkannya. Hanya takrifan yang baharu, dan ia disimpan dalam lukisan.

## Takrif dan tetapkan

Taip {{cmd:TAGS}} dan pilih:

- {{ui:Takrifkan}}: satu nama (huruf, digit, ruang, `_ . -`), satu jenis (`text`, `number`, `integer`, `yesno`, `length`, `angle`), nilai yang dibenarkan dipisahkan dengan `;` (biarkan kosong untuk mana-mana), dan nama blok yang dikenakannya (`DOOR*` sepadan dengan setiap blok yang bermula dengan DOOR; kosong bermaksud setiap blok).
- {{ui:Set}}: dengan rujukan blok dipilih, taip `FireRating=60 min; Width=850`. Nilai di luar senarai yang dibenarkan, atau bukan nombor untuk tag nombor, ditolak dan dinyatakan. Satu langkah buat asal. Blok yang tiada atribut itu mendapatkannya sebagai atribut tersembunyi.
- {{ui:Jadual}}: setiap rujukan kepada blok yang dikenakan tag, secara pilihan dikumpulkan mengikut tag atau nama blok, dicetak dan disimpan sebagai CSV.
- {{ui:Alih keluar (R)}}: melupakan takrifan; nilai kekal pada rujukan.

Menamakan semula tag menamakan semula nilainya pada setiap rujukan. Nama tag tidak sensitif huruf besar-kecil, seperti nama atribut.
