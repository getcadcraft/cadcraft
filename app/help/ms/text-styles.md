---
title: Tetapkan fon dan saiz teks dengan gaya teks
summary: Buat gaya teks bernama dengan fon, ketinggian, lebar dan kecondongan, tetapkan satu sebagai semasa untuk teks baharu, dan tukar gaya untuk menukar semua teks yang menggunakannya.
keywords: gaya teks, gaya, STYLE, ST, TEXTSTYLE, -STYLE, fon, ketinggian teks, faktor lebar, condong, kecondongan, tukar fon, gaya standard, guna gaya, DDSTYLE
from: bd5a4883
---

## Apa yang akan anda lakukan

Buat gaya teks bernama `Notes` dengan fon dan ketinggiannya sendiri, gunakannya untuk teks baharu, dan kemudian tukar gaya supaya setiap nota yang menggunakannya berubah sekaligus.

## Langkah

1. Taip {{cmd:STYLE}} (`ST`) dan tekan {{key:Enter}}, atau klik {{ui:Gaya teks}} pada bar alat {{ui:Lukis}}. Kotak dialog {{ui:Gaya teks}} menyenaraikan gaya dalam lukisan. Setiap lukisan mempunyai `Standard`.
2. Klik {{ui:Baharu…}}, taip `Notes` sebagai nama gaya baharu dan klik {{ui:OK}}. Baris status menyatakan "Gaya teks Notes dibuat dan ditetapkan sebagai semasa."
3. Dalam {{ui:Fon}}, pilih atau taip nama fon. Tetapkan {{ui:Tinggi (0 = tanya setiap kali)}} kepada nombor, seperti `2.5`, supaya setiap teks baharu mendapat ketinggian itu. Biarkan pada `0` untuk ditanya setiap kali.
4. Tetapkan {{ui:Faktor lebar}} dan {{ui:Sudut condong (°)}} jika anda mahu huruf yang lebih sempit, lebih lebar atau condong. Baris contoh menunjukkan hasilnya.
5. Klik {{ui:Tutup}}. Lukis teks dengan {{cmd:TEXT}} atau {{cmd:MTEXT}}: teks baharu mengambil gaya semasa.
6. Untuk menggunakan gaya yang sudah anda buat, buka kotak dialog semula, pilih gaya dalam senarai dan klik {{ui:Tetapkan semasa}}.
7. Untuk meletakkan gaya pada teks yang sudah dilukis, pilih teks, buka kotak dialog, pilih gaya dan klik {{ui:Guna pada teks dipilih}}.

## Tukar gaya kemudian

Tukar fon, ketinggian, lebar atau kecondongan gaya dalam kotak dialog dan setiap teks yang menggunakannya akan mengikut, dalam satu langkah buat asal ({{key:Mod+Z}}). Baris status menyatakan berapa banyak teks yang mengikut.

## Nota

- {{ui:Padam}} menolak `Standard`, dan gaya yang masih digunakan oleh teks: tukar teks itu kepada gaya lain dahulu.
- Gaya disimpan dalam jadual STYLE lukisan, jadi fail DXF dan DWG mengekalkannya.
- Pada baris arahan, `-STYLE` melakukan perkara yang sama dengan pilihan (Current, New, Font, Height, Width, Oblique, Delete, List).
- Fon yang tiada pada komputer yang membaca lukisan dipaparkan dengan rupa lain.
