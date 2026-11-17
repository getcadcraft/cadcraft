---
title: Gunakan CadCraft dengan pembantu AI
summary: Benarkan pembantu AI atau skrip anda sendiri bekerja dengan CadCraft: apa yang boleh dilakukannya, cara menyambung mana-mana klien MCP, dan cara anda kekal mengawal (kebenaran, buat asal, log aktiviti, Putus sambungan).
keywords: ai, pembantu, ejen, mcp, model context protocol, skrip, automasi, baris arahan, cli, json, token, kebenaran, putus sambungan, aktiviti, folder, laluan, svg, batch
from: 06ba4ef6
---

## Apa yang akan anda pelajari

Cara membenarkan pembantu AI (atau skrip yang anda tulis) melihat lukisan, menjalankan arahan CadCraft, plot dan simpan, serta memutuskan apa yang dibenarkan untuk disentuhnya.

CadCraft **tiada AI sendiri** dan tidak menghantar apa-apa ke mana-mana. Anda membawa pembantu: mana-mana program yang bercakap Model Context Protocol (MCP). CadCraft hanya memberinya alat, dan anda memilih yang mana.

Terdapat dua cara untuk masuk:

- **Lukisan yang anda buka.** Pembantu bekerja dalam tetingkap ini, di sebelah anda, melalui CadCraft Studio pada komputer anda. Inilah tujuan {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}}.
- **Lukisan pada komputer anda, tanpa membuka aplikasi.** Pelayan MCP CadCraft dan baris arahan `cadcraft` membaca dan menulis fail DWG dan DXF dalam folder yang anda namakan. Lihat "Bekerja pada fail tanpa membuka CadCraft" di bawah.

## Hidupkannya

1. Buka {{ui:Settings}} (gear pada bar aplikasi, atau {{key:Mod+,}}) dan pergi ke tab {{ui:CadCraft}}.
2. Di bawah {{ui:Assistants}}, tanda **Benarkan pembantu AI dan skrip menggunakan CadCraft**. Ia dimatikan sehingga anda berbuat demikian.
3. Pilih apa yang boleh dilakukannya. **Read** ditanda pada permulaan; tanda yang lain hanya apabila anda memerlukannya.

| Kebenaran | Apa yang boleh dilakukan pembantu |
|---|---|
| Read | Melihat lukisan: menerangkan, menyenaraikan dan mencari objek, melihat pilihan, menerangkan pandangan dan mengambil gambarnya, menyemak dengan peraturan lapisan dan lukisan |
| Edit | Menjalankan arahan pada lukisan dan menukar pilihan. Setiap tindakan ialah satu langkah yang boleh anda buat asal |
| Save | Menyimpan lukisan (pada desktop, ke fail asalnya; dalam pelayar, sebagai muat turun) |
| Export | Plot ke PDF dan membuat fail lain |

## Benarkan ia menggunakan fail dalam folder yang anda pilih

Dalam CadCraft Studio, pembantu boleh membuka, menyimpan dan plot fail mengikut nama dan bukannya menggunakan dialog fail, tetapi hanya di dalam folder yang anda tambah di bawah {{ui:Assistants}} › {{ui:Folders it may use}}:

1. Pilih {{ui:Add a folder…}} dan pilih folder dalam dialog Studio sendiri.
2. Pembantu kini boleh menyenaraikan fail di sana (`files_list`), membuka lukisan (`drawing_open`), menyimpannya di sana dalam versi DWG atau sebagai DXF, plot ke fail PDF atau SVG, memuatkan fail LISP, dan memberi arahan fail yang diminta (`INSERT` `F`, `XATTACH`, fail titik) atau memberitahu di mana fail arahan pergi (CSV `COUNT`, `PUBLISH`).
3. {{ui:Remove}} mengambil balik folder serta-merta. Laluan di tempat lain ditolak, dan fail yang sudah ada hanya diganti apabila pembantu memintanya atau apabila dia sendiri yang menulis fail itu.

Membuka masih memerlukan **Read**; menulis lukisan memerlukan **Save**; mana-mana fail lain memerlukan **Export**.

Alat di luar kebenaran yang anda tandakan tidak ditawarkan kepada pembantu langsung, dan jika ia tetap memintanya, CadCraft menolak dan mencatatnya dalam log aktiviti. Mematikan suis menamatkan setiap sambungan serta-merta. {{ui:Reset CadCraft settings}} turut mematikannya.

## Sambungkan pembantu anda

Pembantu bersambung melalui **CadCraft Studio** pada komputer anda: ia menjalankan pelayan kecil yang hanya boleh dicapai oleh komputer ini (alamat `127.0.0.1`), dilindungi oleh token yang Studio buat setiap kali ia dimulakan. Buka Studio, pilih {{ui:Connect an assistant}}, dan salin alamat dan token.

- Dalam pembantu anda, tambah pelayan MCP jenis HTTP dengan alamat (ia kelihatan seperti `http://127.0.0.1:47615/mcp`) dan pengepala `Authorization: Bearer <token>`. Studio menunjukkan tetapan untuk ditampal.

{{ui:New token}} dalam Studio menjadikan setiap pembantu yang bersambung menyambung semula dengan token baharu. Jangan sekali-kali kongsi token: sesiapa yang memilikinya boleh menggunakan aplikasi yang anda hidupkan, selagi Studio berjalan.

:::note
Tab pelayar tidak boleh membuka sambungan untuk pembantu: dalam aplikasi pelayar, suis tidak memberi kesan sehingga anda menggunakan CadCraft Studio pada komputer anda.
:::

## Anda kekal mengawal

- **Setiap tindakan ialah satu langkah buat asal**, dilabelkan dengan nama yang diberikan pembantu untuknya, contohnya "Assistant: LINE". Tekan {{key:Mod+Z}} untuk mengambil balik tindakan terakhir pembantu secara keseluruhan.
- **Anda melihat apa yang dilakukannya.** Arahannya muncul dalam sejarah arahan dengan **[Assistant]** di depannya, dan lukisan dilukis semula semasa ia bekerja.
- **Ia menunggu anda.** Semasa anda berada di tengah-tengah arahan, pembantu hanya boleh membaca tetapi tidak mengubah lukisan; ia diberitahu untuk mencuba semula apabila anda selesai.
- **Anda tahu apabila ada yang bersambung.** Butang pada bar aplikasi menamakan pembantu semasa ia bersambung. Klik untuk melihat apa yang dibenarkannya, atau untuk **Putus sambungan**.
- **Aktiviti.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} menyenaraikan setiap panggilan: bila, alat mana, selesai atau ditolak, dan langkah buat asal yang dibuatnya. {{ui:Save the log}} menyimpan salinan.

## Apa yang boleh diminta oleh pembantu

| Alat | Kebenaran | Apa yang dilakukannya |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Read | Nama lukisan, unit, lapisan, blok, helaian; apa yang ada di skrin |
| `files_list`, `drawing_open` | Read | Studio: fail dalam folder anda; buka satu dalam tetingkap ini |
| `objects_list`, `object_get`, `selection_get` | Read | Objek dengan geometri, panjang dan luas (atau hanya bilangan, mengikut jenis dan lapisan); pilihan |
| `drawing_check` | Read | Peraturan seperti lapisan yang dibenarkan, tiada apa pada lapisan 0, warna ByLayer, ketinggian teks |
| `view_screenshot` | Read | Gambar lukisan seperti yang ditunjukkan |
| `command_run` | Edit | Menaip pada baris arahan: `LINE 0,0 @100,0 @0,50 ` dibaca seperti yang anda taip (ruang menamatkan jawapan), atau senarai dengan satu jawapan setiap satu. Ia boleh membiarkan arahan terbuka dan meneruskannya dalam panggilan seterusnya |
| `script_run` | Edit | Skrip (`.scr`) atau fail LISP, seperti yang dimuatkan oleh {{ui:APPLOAD}} |
| `block_insert` | Edit | Meletakkan blok dengan nilai atributnya dalam satu langkah |
| `selection_set`, `undo` | Edit | Memilih objek untuk arahan seterusnya; membuat asal langkahnya sendiri |
| `drawing_save` | Save | {{ui:Save}} CadCraft sendiri, atau {{ui:Save as}} ke dalam salah satu folder anda |
| `drawing_plot` | Export | PDF atau SVG helaian atau model, pada skala atau dimuatkan (underlay PDF belum dicetak dengan cara ini) |

Semasa pembantu menjalankan arahan, CadCraft bertanya soalannya pada baris arahan dan bukannya dalam dialog (contohnya sama ada hendak memasukkan keseluruhan lukisan atau satu blok), supaya pembantu dapat menjawabnya. {{ui:Library}} dan Cari masih memerlukan anda; pembantu diberitahu supaya bertanya kepada anda.

## Bekerja pada fail tanpa membuka CadCraft

Pelayan MCP CadCraft (`cadcraft-mcp`) dan baris arahan (`cadcraft`) menjalankan kod lukisan CadCraft sendiri dalam Node.js, tanpa tetingkap. Ia memerlukan Node.js 20 atau lebih baharu.

- **Pelayan MCP** hanya berfungsi dalam folder yang anda namakan, dan hanya dengan kebenaran yang anda berikan: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Tanpa `--root` ia tidak boleh membuka sebarang fail; tanpa `--allow` ia hanya boleh membaca. Ia juga boleh membaca model IFC, pengukuran kuantiti (takeoff) dan penanda dalam set PDF.
- **Baris arahan** adalah untuk skrip anda sendiri: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Beberapa fail sekaligus: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Tambah `--json` untuk output yang boleh dibaca oleh program.

:::note
Jika `npx @getcadcraft/mcp` memberitahu pakej tidak dijumpai, ia belum diterbitkan. Berita di getcadcraft.com akan memberitahu apabila ia tersedia.
:::

## Jika sesuatu tidak berfungsi

- **Pembantu tidak nampak alat CadCraft:** semak bahawa suis dihidupkan dalam tetingkap ini, dan tetingkap itu dibuka dalam Studio.
- **"needs the edit permission":** tanda **Edit** di bawah {{ui:Assistants}}, kemudian minta lagi.
- **"outside the folders assistants may use":** tambah folder itu di bawah {{ui:Assistants}} › {{ui:Folders it may use}}, atau minta pembantu menggunakan fail dalam folder yang sudah anda tambah.
- **Ralat "401" atau "token":** token telah berubah (Studio dimulakan semula, atau {{ui:New token}}). Salin yang baharu ke dalam tetapan pembantu.
- **Perubahannya salah:** tekan {{key:Mod+Z}}. Satu tekanan mengambil balik satu tindakan penuh pembantu.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh yang dikerjakan, setiap satu dengan alat yang dipanggilnya.
