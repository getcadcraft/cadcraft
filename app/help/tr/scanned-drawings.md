---
title: Taranmış çizimler ve izleme
summary: Taranmış bir sayfayı içe aktarın, ölçekleyin ve doğrultun, temizleyin, bölümlerini silin, çizgilerine yakalayın ve çizgi ve yaylara izleyin.
keywords: tarama, taranmış çizim, raster, tiff, jpeg, png, ölçek, hizala, doğrultma, lekelerden arındırma, eşik, siyah beyaz, kırp, sil, izle, vektörleştir, yakala, yaylar, taralama, kâğıt çizimler, eski çizimler, scanattach, scantrace
from: 36227e5b
---

## Kâğıt sayfadan çizim nesnelerine

Taranmış bir çizim bir resimdir. CadCraft verdiğiniz resmi tutar ve hiçbir zaman değiştirmez: her temizleme adımı yeni bir resim oluşturur, her biri bir geri alma adımıdır ve {{cmd:SCANINFO}} özgün dosyayı ve o zamandan beri atılan adımları listeler. Hiçbir şey bir yere gönderilmez ve hiçbir şey eğitilmiş bir model ile tahmin edilmez: temizleme ve izleme sıradan görüntü işlemedir ve bilgisayarınızda çalışır.

1. **Ekleyin.** {{cmd:SCANATTACH}} bir PNG, bir JPEG, bir TIFF (tek sayfa ya da çok sayfalı bir dosyanın tüm sayfaları) ya da bir resim olan bir PDF sayfasını okur. Sayfayı, sol alt köşeyi ve genişliği sorar. Bir PDF sayfası için ayrıca sayfanın inç başına kaç piksel ile çizileceğini sorar.
2. **Ölçekleyin.** {{cmd:SCANSCALE}}: taramada iki nokta seçin, sonra aralarındaki gerçek mesafeyi yazın. Sayfa ilk nokta etrafında ölçeklenir.
3. **Hizalayın.** {{cmd:SCANALIGN}}: taramada iki nokta ve bu noktaların ait olduğu iki yer seçin; sayfa sığacak şekilde taşınır ve döner; "Hayır" diye yanıtlamadığınız sürece ölçeklenir de.
4. **Doğrultun.** {{cmd:SCANDESKEW}} sayfanın uzun çizgilerinin yattığı açıyı ölçer ve bunu, ne kadar emin olduğuyla birlikte gösterir. Kabul edin ya da kendi açınızı yazın; sayfa döndürülür. Az uzun çizgisi olan bir sayfa uyarı alır: kabul etmeden önce açıyı denetleyin.
5. **Temizleyin.** {{cmd:SCANCLEAN}} sayfayı siyah beyaza çevirir (Auto önce kâğıdı düzeltir; Adaptive kâğıdın değişikliklerini daha yakından izler; Level tüm sayfa için tek bir sayıdır) ve belirlediğiniz boyuta kadar lekeleri kaldırır.
6. **Kırpın ve silin.** {{cmd:SCANCROP}} bir pencereyi tutar. {{cmd:SCANERASE}} bir dikdörtgeni, bir çokgeni ya da bir kementi (basın ve sürükleyin) siler: damgalar, notlar, bir kahve halkası.

Temizlenmiş resim, kaydedilmiş bir DWG'nin tuttuğu şeydir (bir IMAGE ve IMAGEDEF, resmin dosyası çizimin yanında; herhangi bir resimde olduğu gibi).

## Taramanın çizgilerine yakalama

{{cmd:RASTERSNAP}} açıkken (varsayılan), nesne yakalamaları siyah beyaz bir taramanın çizgilerini de bulur: çizgilerin uçları, orta noktaları, köşeler ve kesişimler, her zamanki yakalama işaretleriyle gösterilir. İmlecin altındaki sayfa parçası siz hareket ettirdikçe izlenir; bir pikselin birkaç ekran pikseli olacak kadar yakınlaştırın. İzlenen parçadan uzun bir çizgi uçlarına kadar takip edilir.

## İzleme

{{cmd:SCANTRACE}} sayfanın çizgilerini, taramanın hâlâ altında durmasıyla birlikte yeni bir katmanda (SCAN-TRACE) çizgi ve yaylara dönüştürür; tek bir geri alma adımı olarak. Şunları ayarlarsınız:

- **Tolerans:** izlenen bir çizgi ya da yayın taramadaki çizgilerden ne kadar uzakta olabileceği, çizim birimlerinde (rapor pikselleri de verir). Sıkı bir tolerans her dalgalanmayı izler; gevşek bir tolerans daha az ve daha düz parçalar üretir.
- **Pencere:** sayfanın bir köşesi ya da tüm sayfa.
- **Yaylar:** kapalıysa yalnızca çizgi üretir.
- **Artıklar:** izlemenin dokunmadığı şeyler, kapatabileceğiniz bir katmanda kutular olarak çizilir ya da hiç çizilmez.

İzleme, her vuruşun merkezini bulur, onu takip eder, düz çizgileri ve dairesel yayları bunlara uydurur, başka bir çizginin kestiği yerde bölünmüş koşuları birleştirir, neredeyse yatay ve neredeyse düşey çizgileri tam yatay ve düşey yapar ve köşeleri kapatır. **Yazı ve taralama raster olarak kalır:** yazı boyutundaki parçalar kenara ayrılır, kısa paralel çizgi demetleri taralama sayılır ve kenara ayrılır.

Bittiğinde kaç çizgi ve yay oluşturduğunu, toleransı ve kaç parçayı raster olarak bıraktığını söyler. **Bu, piksellerin, o tolerans ile verdiği sonuçtur; sonucun doğru olduğu iddiası değildir.** Sayfayla karşılaştırın: bir izleme soluk bir çizgiyi kaçırabilir, birbirine çok yakın iki çizgiyi birleştirebilir ya da yalnızca bir lekenin olduğu yere çizgi çizebilir. Taramayı önce temizleyin (doğrultulmuş, siyah beyaz, lekeleri giderilmiş); sonuç çok daha iyi olur.

## Okunamayanlar

Parçalar hâlinde (tiled) saklanan TIFF dosyaları, BigTIFF, JPEG ya da deflate sıkıştırmalı TIFF, Group 3 faks kodlaması ve ayrı düzlemlerde tutulan renkler bir iletiyle reddedilir; bunları LZW, PackBits, Group 4 ya da sıkıştırmasız şerit olarak yeniden kaydedin. Aralıklı (interlaced) PNG dosyaları da reddedilir. 128 MB ya da 100 milyon pikselden büyük dosyalar reddedilir ve bir izleme penceresi en fazla 64 milyon piksel tutabilir.
