---
title: LISP rutinlerini çalıştırın
summary: CadCraft'ın çalıştırdığı LISP'i (işlevler, istemler, komutlar, nesneler, iletişim kutuları, vla nesneleri), komut satırına LISP'in nasıl yazılacağını ve henüz neyin olmadığını açıklar.
keywords: lisp, rutin, lsp, dcl, iletişim kutusu, komut, defun, entget, ssget, vla, vlax, vl, getpoint, hata, uyumluluk, neler çalışır
from: 571bc077
---

## Öğrenecekleriniz

Başka bir CAD programı için yazılmış bir LISP rutinini yüklediğinizde ne bekleyeceğiniz: rutinin hangi bölümleri CadCraft'ta çalışır ve neyin henüz olmadığı.

CadCraft'ın kendi LISP'i var. Genel AutoLISP başvurusundan yazıldı, başka birinin programından değil; bu yüzden AutoCAD için yazılmış rutinlerin çoğu değişmeden çalışır. Eksik bir şey olduğunda komut satırı işlevin adını belirtir; böylece CadCraft'taki bir eksikliği rutindeki bir hatadan ayırt edebilirsiniz.

## Komut satırına LISP yazın

`(` ile başlayan bir ifade yazın ve {{key:Enter}}'a basın: `(+ 1 2)` `3` yazdırır. `!ad` bir değişkenin değerini yazdırır. Henüz kapanmayan bir ifade bir sonraki satırı bekler.

Bir istemde ifade o istemi yanıtlar: "Yarıçapı girin" istemine `(* 2 12.5)` yazın; sonuç 25 olur.

## Neler çalışır

- **Dil:** `defun` (yerel değişkenler `/`'den sonra), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` ve `*error*` (yerel bir `*error*` de çalışır). Adlar büyük/küçük harfe duyarlı değildir; tamsayılar ve gerçek sayılar farklıdır, beklediğiniz gibi (`(/ 7 2)` sonucu 3'tür).
- **Yerleşik işlevler:** matematik, listeler (`car`, `cdr` ve ailesi, `assoc`, `nth`, `member`, `subst`, `append`…), dizgiler (`strcat`, `substr`, `strcase`, `wcmatch`…), dönüşümler (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometri (`polar`, `distance`, `angle`, `inters`) ve dosyalar (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komutlar:** `(defun c:NAME …)` bir komut oluşturur. `(command …)` ve `(command-s …)` CadCraft'ın kendi komutlarını yönetir; yanıtınız için `pause` kullanılır.
- **İstemler:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `initget` anahtar sözcükleriyle `getkword`, `entsel`, `nentsel` ve `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`; filtre listeleri ve `-4` testleriyle).
- **Liste olarak nesneler:** `entget`, `entmod`, `entmake` (bloklar dahil), `entdel`, `entlast`, `entnext` (bir blok başvurusunun öznitelikleri ATTRIB olarak ardından gelir, sonra bir SEQEND gelir; böylece öznitelik rutinleri çalışır), `handent`, seçim kümeleri, `tblsearch` ve `tblnext`, `layoutlist`, `regapp`, CadCraft'ın sahip olduğu ayarlar için `getvar` ve `setvar`.
- **İletişim kutuları:** `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog` ve `done_dialog` ile `.dcl` dosyaları. Düğmeler, düzenleme kutuları, liste kutuları, açılır listeler, geçiş düğmeleri, seçenek düğmeleri, satırlar, sütunlar ve kutular görünür. İletişim kutusunu geçici bir dosyaya yazan bir rutin de çalışır.
- **Nesneler:** `vl-load-com` (hiçbir şey yapmaz; yüklenecek bir şey yoktur), `vl-` liste ve dizgi işlevleri, `vl-catch-all-apply` ve `vla-get-…` / `vla-put-…` özellikleri, `vla-…` yöntemleri ve Blocks, Layers ve Layouts koleksiyonları, model uzayı ve blok tanımları üzerinde `vlax-for`; varyantlar ve güvenli dizilerle.

## Sınanan rutinler

CadCraft'ın testleri, bu denetimler için yazılmış bir dizi rutini çalıştırır (seçim filtreleri, istemler, komutlar, nesneler, hata işleyicileri) ve insanların adıyla istediği bir popüler rutin: Lee Mac'in DelBlocks'u, iletişim kutusundan adıyla ve bir bloğu seçerek. CadCraft'ın kendi {{cmd:DELBLOCKS}} komutu da var; bunun için bir rutine ihtiyacınız yok.

## Henüz yapılmadı

- `grread` (fareyi kendiniz izleme), tepkiler (`vlr-…`), eğri işlevleri (`vlax-curve-…`), sözlükler ve genişletilmiş veriler (`dictsearch`, `entget` ve `entmake` içinde xdata) ile Express Tools'un `acet-…` işlevleri.
- İletişim kutularındaki resimler ve slaytlar boş çerçeve olarak görünür.
- Başka bir programı çalıştırma, Windows kayıt defteri ve yüklediklerinizin dışındaki dosyalar: bir rutin kendi geçici dosyalarını yazıp okuyabilir; bunlar sayfayı kapatana kadar kalır.

Bir rutin bunlardan birine ulaştığında komut satırı "işlev tanımı yok" ve adı gösterir ve CadCraft'ın bunu henüz olmadığını söyler.

## Kaçınılması gereken hatalar

- **CadCraft'ınkiyle aynı adı taşıyan bir komut.** CadCraft'ın kendi komutu kalır. Rutinin komutunu komut satırında `(c:NAME)` olarak çalıştırın.
- **Güvenmediğiniz LISP'i çalıştırmak.** Bir rutin çizimdeki her şeyi değiştirebilir, ama dışındaki hiçbir şeyi değiştiremez: dosyalarınıza, başka sitelere ya da başka uygulamalara erişemez.
