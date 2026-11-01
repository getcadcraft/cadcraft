---
title: CadCraft'a başlarken
summary: CadCraft çizim uygulamasının ne yaptığı, nerede çalıştığı ve boş bir ekrandan kaydedilmiş bir dosyaya ilk çiziminiz.
keywords: başla, ilk çizim, yeni, aç, kaydet, farklı kaydet, başlangıç, eğitim, giriş, hızlı başlangıç
from: 1a56c575
---

CadCraft bir 2B çizim uygulamasıdır. Çizgileri, yayları, çoklu çizgileri, metni, ölçülendirmeleri ve blokları çizer ve düzenler, künyeler ve görünüm pencereleriyle sayfalar hazırlar ve bunların PDF çıktısını alırsınız. DWG ve DXF çizimlerini açar ve DWG veya DXF olarak kaydeder.

Web tarayıcınızda çalışır. Kurulacak bir şey yoktur: site size adresi verir ve uygulamanın tamamı sayfaya yüklenir. Çizimleriniz kendi bilgisayarınızdan açılır ve oraya kaydedilir. **Hiçbir şey yüklenmez.**

Daha önce çizim yaptıysanız bu sayfadan sonra [Diğer çizim yazılımlarından geliyorsanız](topic:coming-from) konusunu okuyun. Alışkanlıkların çoğu geçerlidir; geçmeyen birkaçı orada listelenir.

## Yönlendirilmeyi mi tercih edersiniz?

`TOUR` yazın (veya başlangıç kartında {{ui:Turu yap}} düğmesine ya da {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Turu yeniden yap}} seçeneğine tıklayın). Çizimin üstündeki bir kutuda altı kısa adım: bir çizgi ve bir daire çizin, taşıyın, kırpın, bir şeyi silin ve ölçülendirin. Her adım siz yapınca biter ve bir adımı ya da turun tamamını atlayabilirsiniz. Kendiliğinden yalnızca ilk seferde başlar. [Kopya kâğıdı](topic:cheat-sheet) en çok kullanacağınız 40 komutu, [komut haritası](topic:command-map) ise var olan her komutu içerir.

## Neye ihtiyacınız var

- Mac, Windows veya Linux bilgisayarda güncel bir Chrome, Edge, Firefox veya Safari. Bkz. [Tarayıcılar ve platformlar](common:browsers).
- Tekerlekli bir fare en rahatıdır. Bir izleme dörtgeni de çalışır; bkz. [Fare, izleme dörtgeni ve dokunma](topic:mouse-trackpad-touch).
- Bir klavye. CadCraft, çoğu çizim programı gibi yazılan komutlarla yönetilir.

## Fikir tek paragrafta

Bir komut yazarsınız (veya düğmesine tıklarsınız) ve alttaki komut satırı size soruları tek tek sorar: "İlk noktayı belirtin", "Sonraki noktayı belirtin". Her soruyu çizimde tıklayarak ya da bir değer yazıp {{key:Enter}} tuşuna basarak yanıtlarsınız. {{key:Esc}} tuşuna basmak iptal eder. Etkileşim modelinin tamamı budur; geri kalan her şey ayrıntıdır.

## İlk çiziminiz

Çizgilerden 4000 x 3000'lik bir dikdörtgen çizecek, ortasına bir daire koyacak ve dosyayı kaydedeceksiniz.

1. CadCraft'ı açın. Alttaki komut satırı `Komut:` gösterir ve çizim alanı kısa bir "Çizime başla" kartı gösterir.
2. `L` yazıp {{key:Enter}} tuşuna basın. Önce komut satırına tıklamanıza gerek yoktur: herhangi bir yerde yazmak oraya gider.
3. İstem `İlk noktayı belirtin:` olur. `0,0` yazıp {{key:Enter}} tuşuna basın.
4. `@4000,0` yazıp {{key:Enter}} tuşuna basın. Sağa doğru giden bir çizgi görünür. `@`, "son noktadan" demektir.
5. `@0,3000` yazıp {{key:Enter}} tuşuna basın.
6. `@-4000,0` yazıp {{key:Enter}} tuşuna basın.
7. `C` yazıp {{key:Enter}} tuşuna basın. `C` Kapat seçeneğidir: son çizgi ilk noktaya geri döner ve komut biter.
8. Araç çubuğunun Görünüm grubunda {{ui:Sınırlar}} düğmesine tıklayın. Dikdörtgen ekranı doldurur.

Şimdi bir dikdörtgen oluşturan dört çizgi görmelisiniz ve komut satırının üstündeki geçmiş yazdıklarınızı listeler.

9. Daire komutunu başlatmak için `C` yazıp {{key:Enter}} tuşuna basın.
10. Merkez için `2000,1500` yazıp {{key:Enter}} tuşuna basın.
11. Yarıçap için `500` yazıp {{key:Enter}} tuşuna basın.

Dikdörtgenin ortasında bir daire görünür.

12. {{key:Mod+S}} tuşlarına basın veya Dosya grubunda {{ui:Kaydet}} düğmesine tıklayın.

Tarayıcı `Drawing1.dwg` dosyasını her zamanki indirilenler klasörünüze indirir ve geçmiş bir kopyayı DWG olarak kaydettiğini söyler. Bu dosya CadCraft'ta ve diğer çoğu CAD programında yeniden açılır. (Bu tarayıcıda daha önce {{ui:Farklı kaydet}} içinde DXF seçtiyseniz yeni bir çizim bunun yerine `Drawing1.dxf` olarak kaydedilir.)

:::tip
Son komutu yinelemek için boş bir komut satırında {{key:Enter}} tuşuna basın. Tercih ederseniz {{key:Enter}} yerine {{key:Space}} tuşuna basın: metin dışında aynı şeyi yapar.
:::

## Var olan bir çizimi açın

1. {{key:Mod+O}} tuşlarına basın veya {{ui:Aç}} düğmesine tıklayın.
2. Dosya seçicide bir `.dwg` veya `.dxf` dosyası seçin.

Bir DWG veya DXF dosyasını {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticinizden}} sürükleyip çizim alanına da bırakabilirsiniz. Dosya sayfada okunur; bilgisayarınızdan hiçbir zaman çıkmaz.

Nelerin korunduğu ve nelerin dönüştürüldüğü için bkz. [Dosyalar: neler açılır, neler kaydedilir](topic:files).

## Kaydetme: ne beklemeli

Bir tarayıcıda kaydetme masaüstü programından farklı çalışır:

- {{ui:Kaydet}} her zaman **yeni bir kopya indirir**. Açtığınız dosyanın üzerine yazmaz. İndirilenler klasörünüzde aynı adlı bir dosya varsa tarayıcı genellikle `Drawing1 (1).dwg` gibi bir sayı ekler.
- {{ui:Kaydet}} çizimin biçimini kullanır: bir DWG açtıysanız DWG, bir DXF açtıysanız DXF. Seçmek için {{key:Mod+Shift+S}} tuşlarına basın veya {{ui:Farklı kaydet}} düğmesine tıklayın, sonra {{ui:DWG}} (ve sürümünü), {{ui:DXF R12}} veya {{ui:DXF 2000}} seçin. Bkz. [Kaydetme](topic:files#saving).
- Açtığınız dosya hiçbir zaman değiştirilmez.
- Başka bir dosya açmak veya {{ui:Yeni}} onu çizimin üstünde kendi sekmesine koyar; yani açık olan hiçbir şey kapanmaz. Bir çizimin sekmesini kapatırsanız veya sayfadan kaydedilmemiş değişikliklerle ayrılırsanız CadCraft önce sorar: {{ui:Önce bir kopya kaydet}}, vazgeç veya {{ui:İptal}}. Tarayıcı sekmesini kapatmak bunun yerine tarayıcının kendi "Siteden ayrılsın mı?" sorusunu gösterir.

Bulutta kaydetme henüz mevcut değil. Dosyalarınızın nereye gittiği ve neden özel kaldıkları [Dosyalarınız ve gizlilik](common:your-files) konusunda açıklanır.

## Sonraki adım

Çizimin yanında bu yardımı istediğiniz an açmak için {{key:F1}} tuşuna basın veya üstteki çubukta {{ui:Yardım}} düğmesine tıklayın. Bağlantı olmadan çalışır.

- [CadCraft ekranı](topic:workspace) her çubuğu ve paneli adlandırır.
- [Koordinatlarla çizim](topic:draw-with-coordinates) en iyi ilk adım adım anlatımdır.
- [Klavye ve fare](topic:keyboard) her tuşu listeler.
- Her komutun listesi için komut satırına `HELP` yazın veya [Komut başvurusu](topic:commands) konusunu okuyun.
