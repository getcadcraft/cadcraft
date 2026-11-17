---
title: Çizimi lazere gönderme
summary: Lazer panelini açın; her katmanın ne yapacağını seçin (kes, çizik at, gravürle, doldur, resim), kafanın hareketlerini önizleyin ve GRBL lazer modu G-kodunu kaydedin ya da işi tarayıcıdan gönderin.
keywords: lazer, lazer kesici, lazer gravürcüsü, GRBL, G-kod, gcode, gravür, doldur, dither, resim gravürü, çizik at, kes, Web Serial, işi çerçevele, güç, hız, geçiş, LASER, LASERCUT, CNC
from: 72b56db0
---

{{ui:Lazer}} paneli, GRBL çalıştıran bir lazer (çoğu hobi ve küçük atölye diyot ve CO2 denetleyicisi) için bir çizimin katmanlarını bir programa dönüştürür. `LASER` (ya da `LASERCUT`) yazıp {{key:Enter}}'a basın ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsünden {{ui:Lazer…}} seçin. Şerit stillerinde {{ui:Dosya}} menüsünde ve {{ui:Çıktı al}} düğmesinin yanındadır. Panel çizimin üzerinde açılır ve siz çizerken açık kalır: önizleme her değişikliği izler.

:::warning
Her ayarı önce hurdada deneyin, lazerinize uyan koruyucu gözlük takın, varsa kapağı kapalı tutun ve çalışan bir lazeri asla yalnız bırakmayın. Bir katmanın başlangıç değerleri yer tutucudur, herhangi bir malzeme için öneri değildir.
:::

## Ne gönderilir

Panel modeli okur (sayfaları değil), açık ve donmamış katmanlardaki:

- Çizgiler, yaylar, daireler, çoklu çizgiler (yay parçaları yay olarak kalır), elipsler ve splineler. Başladığı noktada biten bir şekil kapalı sayılır.
- Bloklar parçalara ayrılır: blok içindeki 0 katmanındaki bir nesne, blok başvurusunun katmanıyla gider.
- Bir taralama sınırını gönderir; bu yüzden bir **Doldur** katmanındaki taranmış bir logo doldurulur.
- Bir resim (`IMAGEATTACH`), **Resmi gravürle** olarak ayarlanmış bir katmanda gravürlenir; resim kare yerleştirilmişse (döndürülmemiş ya da eğik değilse) ve dosyası CadCraft'te açıksa.
- Metin, ölçülendirme, belirtme çizgileri, noktalar ve yapı çizgileri gönderilmez; panel kaç tanesini dışarıda bıraktığını söyler. Metni yakmak için harfleri şekil olarak çizin ya da taratın.

Boyutlar, çizimin birimlerinden (`UNITS`) milimetre olarak gider: inç birimli bir çizim 25.4 ile çarpılır. Birimi ayarlanmamış bir çizimde bir birim, bir milimetre olarak gönderilir. Çizimin yalnızca bir parçasını göndermek için {{ui:Yalnızca seçili nesneler}} kutusunu işaretleyin.

## Her katmanın ne yapacağını seçin

Üzerinde bir şey bulunan her katman bir satırdır. {{ui:Yaptığı}} onu **Kes**, **Çizik at**, **Çizgileri gravürle**, **Şekilleri doldur**, **Resmi gravürle** ya da **Gönderme** olarak ayarlar; bir {{ui:Güç %}}, bir {{ui:Hız mm/dk}} ve bir {{ui:Geçiş}} sayısıyla birlikte. Her değişiklik tek bir geri alma adımıdır ve çizime kaydedilir: DWG (CadCraft'in kaydettiği her sürüm) ve DXF ayarları korur, bu yüzden çizim bir sonraki açılışta onlarla açılır. Diğer programlar dosyayı eskisi gibi açar; orada CADCRAFT_LASER adlı, kullanılmayan tek bir blok görürler (orada temizlemek ayarları kaldırır).

- **Doldur** kapalı şekillerin içini, {{ui:Satır aralığı}} aralıklı çizgilerle, bir {{ui:Açı}}de, iki yönde ya da tek yönde yakar; lazer açıldığında kafa hızda olsun diye bir taşma payıyla. Çapraz taralama 90°de ikinci bir geçiş ekler. Deliği olan bir şekil, delikte açık kalır.
- **Resmi gravürle** bir resmi noktalara çevirir (Floyd–Steinberg, Atkinson, sıralı ya da bir eşikte düz siyah-beyaz) ya da *Gri tonlar* seçeneğiyle değişken güce.
- Sıra: önce resimler ve dolgular, sonra çizgi gravürü, sonra çizikler, sonra kesimler; böylece kesilen bir parça gravürlenirken hareket etmez. Tek bir katman içinde yollar **içten dışa** (bir levhadan önce, içindeki delik) ve en yakına göre ilerler.

## Önizleyin, sonra kaydedin

Önizleme, kafanın ne yaptığını çizer: yanan çizgiler renkli, hızlı hareketler gri, yanan her şeyin etrafında yeşil bir kutu. Altında boyut, yanma uzunluğu ve bir süre tahmini bulunur (ivmelenme olmadan; gerçek bir makine daha uzun sürer). {{ui:G-kodunu kaydet…}} GRBL lazer modu G-kodunu yazar: `$32=1`, S değerli `M4` (ya da `M3`), `G0` ve `G1` hareketleri ve sonunda `M5`. Çizimin orijinini seçmediğiniz sürece X0 Y0 işin sol alt köşesidir: makinenizin iş sıfırını orada ayarlayın.

## Tarayıcıdan gönderin

Chrome ve Edge'de {{ui:Bağlan…}} lazerin USB bağlantı noktasını seçmenizi ister. Bir düğmeye basana kadar hiçbir şey bağlanmaz ya da gönderilmez. Önce {{ui:İşi çerçevele}} düğmesine basın: kafa, işin kutusunu lazer **kapalıyken** (ya da bir işaretçi için ayarladığınız düşük güçte) dolaşır; böylece nereyi yakacağını görürsünüz. Ancak o zaman {{ui:İşi gönder}} açılır ve bir şeyi değiştirirseniz yeniden kapanır. {{ui:Duraklat}} kafayı tutar, {{ui:Durdur}} de tutar, denetleyiciyi sıfırlar (lazer kapanır) ve `M5` gönderir. Web Serial olmayan yerlerde (Firefox, Safari ve henüz Web Serial'i olmayan CadCraft Studio) panel yalnızca kaydetmeyi sunar: G-kodunu kaydedin ve lazerinizin kendi programıyla gönderin.

## Henüz yapılmadı

Henüz yapılmadı: diğer denetleyicilerin biçimleri (Ruida, Marlin lazerler, üretici dosyaları), sekmeler ve giriş/çıkış çizgileri, kerf ofseti, malzeme kütüphaneleri, döner ve Z eksenleri, kamera hizalaması, metin olarak ana hatlar.
