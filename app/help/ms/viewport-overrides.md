---
title: Penggantian kelas viewport
summary: Pada helaian, sembunyikan kelas atau berikan warna, ketebalan garisan atau isian lain dalam satu viewport sahaja; model dan viewport lain kekal seperti sedia ada.
keywords: viewport, penggantian kelas, penggantian viewport, sembunyi kelas dalam viewport, helaian, layout, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

Helaian sering menunjukkan model yang sama lebih daripada sekali: pelan dengan perabot dan pelan tanpanya, atau pelan pencahayaan di mana hanya lampu berwarna. Penggantian kelas viewport menukar cara satu [kelas](topic:classes) ditunjukkan **dalam viewport itu sahaja**.

1. Buka helaian dan pilih satu viewport.
2. Buka panel Kelas (`CLASSES`) dan pilih kelas.
3. Di bawah Viewport ini, tanda {{ui:Hide in this viewport}}, atau tetapkan {{ui:Color here}}, {{ui:Lineweight here}} atau {{ui:Fill here}}.

Senarai di bawah menunjukkan setiap kelas yang diubah oleh viewport ini. {{ui:Clear this viewport's overrides}} membuangkan semuanya. Setiap perubahan ialah satu langkah buat asal.

## Apa yang diubah oleh penggantian

- **Sembunyi** menyembunyikan kelas dan setiap kelas di bawahnya dalam viewport ini.
- **Warna, ketebalan garisan dan isian** menukar objek kelas yang nilainya tidak ditetapkan pada objek itu sendiri, iaitu objek yang mengambilnya mengikut kelas atau lapisan. Objek yang mempunyai warnanya sendiri mengekalkannya, seperti penggantian lapisan viewport.

Penggantian ditunjukkan di skrin dan dalam plot serta PDF, termasuk set helaian yang diterbitkan ke PDF. Ia berfungsi bersama lapisan yang dibekukan dan penggantian lapisan bagi viewport.

Penggantian disimpan bersama lukisan dalam DWG dan DXF (dengan senarai kelas, dalam blok `CADCRAFT_CLASSES`) dan kembali pada viewport yang sama apabila fail dibuka dalam CadCraft.
