---
title: Lukis tanpa penglihatan
summary: Hidupkan Akses dan CadCraft menyebut setiap arahan dan hasil melalui pembaca skrin anda, menerangkan lukisan dan apa yang berdekatan dengan kursor, membolehkan anda menggerakkan kursor dengan papan kekunci, memainkan bunyi untuk setiap snap dan grip, dan menerima arahan melalui suara di mana pelayar anda boleh berbuat demikian pada komputer anda.
keywords: kebolehcapaian, pembaca skrin, buta, penglihatan rendah, NVDA, VoiceOver, JAWS, Orca, kursor papan kekunci, arahan suara, pertuturan, bunyi, bunyi snap, huraikan lukisan, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Akses** membolehkan anda melukis tanpa melihat skrin. Ia dimatikan sehingga anda menghidupkannya, supaya tiada sesiapa mendapatnya secara tidak sengaja.

## Hidupkannya

Buka **Tetapan** (gear, atau Ctrl+,), cari **Lukisan tanpa penglihatan** dan pilih **Hidup**. Atau taip `ACCESS` pada baris arahan dan jawab `On`. Ia diingati pada komputer ini.

Dengan Akses hidup:

- **Semua yang dipaparkan pada baris arahan disebut** melalui pembaca skrin anda: apa yang anda taip, gesaan yang diminta, jawapan, dan setiap ralat. CadCraft menggunakan kawasan langsung sopan dan mendesak sendiri, jadi pembaca skrin yang membaca kawasan langsung tidak memerlukan persediaan apa-apa. Ralat dan pembatalan memotong; yang lain menunggu giliran.
- **Kawasan lukisan boleh dicapai.** Tekan Tab sehingga anda mendengar "Lukisan", atau tekan Shift+Tab dari baris arahan. Ia ialah kawasan yang menghantar kekunci kepada CadCraft.

## Kekunci pada lukisan

| Kekunci | Fungsinya |
|---|---|
| Kekunci anak panah | Menggerakkan kursor papan kekunci. Satu langkah kira-kira sepersseratus daripada apa yang ditunjukkan skrin, dibundarkan kepada 1, 2 atau 5. Shift bergerak sepuluh kali ganda, Ctrl sepersepuluh. |
| Enter | Memilih titik di bawah kursor, sama seperti klik. |
| Space | Menekan Enter pada baris arahan: tamatkan LINE, terima nilai lalai. |
| Tab, Shift+Tab | Melompat ke titik snap seterusnya atau sebelumnya berhampiran kursor, yang terdekat dahulu. |
| G | Melangkah melalui grip objek yang dipilih. |
| D | Huraikan lukisan: berapa objek, jenis apa, berapa besar, apa yang dipilih. |
| W | Sebut di mana kursor berada dan berapa jauh ia dari titik terakhir. |
| N | Sebut apa yang berdekatan dengan kursor, yang terdekat dahulu, dengan jarak dan sisinya. |
| S | Huraikan objek yang dipilih. |
| R | Sebut perkara terakhir sekali lagi. |
| V | Suara hidup atau mati. |
| / | Pergi ke baris arahan. |
| ? | Senaraikan kekunci ini. |

Menggerakkan dengan kekunci menyebut di mana anda mendarat. Apabila sesuatu arahan menunggu titik, ia juga menyebut berapa jauh dan ke arah mana anda dari titik terakhir, contohnya "2400 dari titik terakhir, ke kanan, pada 0 darjah".

## Arahan

- {{cmd:ACCESS}} menghidupkan atau mematikan Akses, bunyi snap dan suara, dan menyebut keadaannya.
- {{cmd:DESCRIBE}} menyebut apa yang ada dalam lukisan.
- {{cmd:WHEREAMI}} menyebut di mana kursor berada.
- {{cmd:NEARBY}} menyebut apa yang terletak dekat dengan kursor.
- {{cmd:SAYSEL}} menyebut apa yang dipilih, satu ayat setiap objek.
- {{cmd:VOICE}} menghidupkan atau mematikan arahan lisan.

Lima ini membaca lukisan dan mencetak jawapan; ia tidak mengubah apa-apa.

## Bunyi untuk snap dan grip

Hidupkan **Bunyi snap dan grip** dalam Tetapan. Setiap jenis snap mempunyai nada dan bunyinya sendiri, supaya anda boleh membezakan titik hujung daripada titik tengah, pusat, persilangan dan yang lain, dan grip mempunyai bunyi tik berganda. Bunyi beralih ke kiri atau kanan untuk mengikuti kursor merentasi skrin. Bunyi dihasilkan pada komputer anda; tiada apa-apa dimuat turun.

## Arahan melalui suara

Hidupkan **Arahan melalui suara** dalam Tetapan. Sebut nama arahan ("line", "circle", "move"), kemudian sebut nombor seperti anda membacanya: "titik tiga ratus koma empat ratus", "jarak dua belas ratus", "sudut empat puluh lima". "Enter", "cancel", "undo" dan "redo" melakukan apa yang disebutnya. Apa yang didengari disebut semula, dan frasa yang bukan arahan dilaporkan, tidak diteka.

**Di mana pertuturan dikenal pasti.** CadCraft tidak mempunyai perkhidmatan pertuturan sendiri dan tidak menghantar audio ke mana-mana. Ia meminta pelayar anda mengenal pasti pertuturan pada komputer ini. Jika pelayar anda boleh, pilihannya ialah **Pada komputer ini** dan tiada audio meninggalkannya. Jika tidak boleh, suara kekal mati melainkan anda memilih **Perkhidmatan dalam talian pelayar**, yang membenarkan pelayar menghantar audio kepada perkhidmatan pertuturan pembuatnya. Tetapan memberitahu yang mana berlaku sebelum anda memutuskan.

## Apa yang belum dilakukannya

- Hanya CadCraft mempunyai Akses. Tujuh aplikasi lain akan menyusul, dengan kekunci dan bunyi yang sama.
- Teks dalam lukisan (nota, nama blok) dibaca seperti yang ditulis; ia tidak pernah diambil sebagai arahan.
- Ia telah diuji dengan semakan sintetik dan ujian pelayar; semakan tangan dengan NVDA, VoiceOver dan penguji buta atau penglihatan rendah masih akan datang. Jika anda mencubanya, beritahu kami apa yang tiada.
