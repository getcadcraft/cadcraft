---
title: Unit semasa mengimport: fail menyatakan unitnya, atau anda ditanya dahulu
summary: Apabila fail yang anda bawa masuk ke dalam lukisan menyatakan unitnya, CadCraft menukarkannya dan memberitahu anda. Apabila tidak, CadCraft bertanya sebelum meletakkan apa-apa dan mengingati jawapan anda untuk fail itu.
keywords: unit, import, selit, xref, lampirkan, XATTACH, INSERT, OBJ, DWG, DXF, awan titik, item pustaka, milimeter, meter, inci, kaki, skala, saiz salah, terlalu besar, terlalu kecil, 1000 kali, tanya, diingati, INSUNITS
from: 558f1293
---

## Apa yang akan anda lakukan

Bawa fail ke dalam lukisan dan pastikan ia masuk pada saiz yang betul.

## Langkah

1. Bawa fail masuk seperti biasa: `INSERT` › Fail, `XATTACH`, `POINTCLOUDATTACH`, atau {{ui:Files}} dalam panel Pustaka.
2. Jika fail menyatakan unitnya, tiada apa ditanya. Baris arahan memberitahu unit yang dinyatakan fail, dan skala yang digunakan apabila ia berbeza daripada lukisan.
3. Jika tidak, dialog bertanya **Unit bagi** fail itu. Pilih apa yang diwakili oleh satu unit dalam fail dan klik {{ui:Use these units}}. Tiada apa diletakkan sebelum anda menjawab.
4. {{ui:Cancel}} (atau {{key:Esc}}) tidak membawa apa-apa masuk.

## Fail mana yang menyatakan unitnya

- **DWG dan DXF**: unit sisipan lukisan (`$INSUNITS`). Fail tanpa itu akan ditanya.
- **Awan titik**: LAS dan LAZ dengan sistem koordinat, E57, PTX dan PLY menyatakan unit mereka. Yang lain akan ditanya.
- **OBJ**: tidak pernah menyatakan unit. Anda ditanya.
- **glTF dan GLB**: meter, mengikut peraturan format itu sendiri.
- **Gambar**: tiada saiz sendiri. `IMAGEATTACH` meminta lebar, dan menawarkan lebar yang anda beri untuk fail itu sebelum ini.
- **Imbasan**: imbasan yang menyatakan ketumpatannya (titik per inci) masuk pada saiz sebenarnya dalam unit lukisan; `SCANATTACH` masih meminta lebar.
- **Add-on Awan titik**: bertanya apabila anda membina awan yang fail tidak menyatakan unit, dan melabelkan nombor awan dalam unit yang dibawanya.

## Perkara yang perlu diketahui

- Membuka DWG atau DXF sebagai lukisannya sendiri tidak bertanya apa-apa: baris arahan memberitahu unit yang dinyatakan fail, atau bahawa ia tidak menyatakan apa-apa. {{ui:Properties}} menetapkan unit lukisan.
- Apabila lukisan ini juga tiada unit, fail tidak dapat ditukar: ia diletakkan nombor demi nombor dan baris arahan memberitahu begitu.
- Jawapan diingati untuk fail itu pada komputer ini, dalam setiap app CadCraft. Kali seterusnya ia dibawa masuk anda tidak ditanya, dan baris arahan memberitahu unit yang diingati digunakan.
- Untuk ditanya semula: palet arahan ({{key:Mod+K}}) › **Tanya semula untuk unit fail yang diimport**.
