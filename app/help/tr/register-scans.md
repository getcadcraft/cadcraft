---
title: Birden çok taramayı çakıştırın
summary: Farklı konumlardan alınmış taramaları, seçilen nokta çiftleri ya da yazılan hedeflerle tek bir çerçevede yerleştirin, ICP ile iyileştirin, çakıştırmayı proje olarak kaydedin ve çakıştırılmış bulutu LAS ya da E57 olarak dışa aktarın. Komut REGISTERSCANS.
keywords: çakıştır, çakıştırma, taramalar, nokta bulutu, icp, yinelemeli en yakın nokta, hedefler, nokta çiftleri, katı dönüşüm, hizala, birleştir, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Ne yapacaksınız

Aynı yerin birkaç taraması (her biri kendi tarayıcı konumundan alınmış) kendi koordinatlarında başlar. Bunları çakıştırın: her taramaya tek bir yerleştirme verin ki hepsi tek bir çerçevede yer alsın, sonra bunu proje olarak kaydedin ve çakıştırılmış bulutu tek bir LAS ya da E57 dosyası olarak yazın.

## Taramaları yerleştirin

1. İletişim kutusunu açın (`REGISTERSCANS` (ya da `REGSCAN`) yazın). {{ui:Tarama ekle…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS ya da XYZ dosyalarını alır; ya da dosyaları iletişim kutusuna sürükleyip bırakın. Farklı birimler kullanan taramalar bir notla reddedilir: önce birini dönüştürün.
2. {{ui:Taşınacak tarama}} ve {{ui:Karşısına yerleştir}} seçin. Resim, çerçevedeki her taramayı şu anki haliyle, her biri farklı bir renkte gösterir: {{ui:Plan}}, {{ui:Ön}} ya da {{ui:Yan}}; kaydırmak için sürükleyin, yakınlaştırmak için tekerleği kullanın.
3. **Nokta çiftleriyle.** {{ui:Bir çift seçin}} tıklayın, sonra taşınacak taramada bir nokta, ardından aynı yeri başka bir taramada tıklayın (bir köşe, bir hedef, bir kolonun ayağı). Bunu en az üç kez yapın; noktalar aynı doğru üzerinde olmasın ve birbirinden uzakta olsun. {{ui:Çiftlerle yerleştir}} tıklayın: tarama en küçük kareler uyumuyla yerleştirilir ve **Kalan** her çiftin hâlâ ne kadar ıskaladığını gösterir. Büyük sayı veren bir çift kötü bir seçimdir: çarpı ile kaldırın ve yeniden yerleştirin.
4. **Hedeflerle.** Bir noktanın gerçek koordinatları biliniyorsa (ölçülmüş hedefler), {{ui:Seçin, sonra hedefi yazın}} tıklayın, taramadaki noktayı tıklayın ve satırda hedefin X, Y ve Z değerlerini yazın. Çiftler ve yazılan hedefler birlikte kullanılabilir.

## ICP ile iyileştirin

Çiftler kaba bir yerleştirme verir. {{ui:İncelt}} taramayı, yüzeyleri öteki taramanın yüzeylerine oturana kadar taşır: önce **nokta-noktaya**, sonra **nokta-düzleme**. Tablo her adımı hatası ve eşleşen nokta sayısıyla listeler; üstündeki çizgi hatanın düştüğünü gösterir. {{ui:Durdur}} çalışmayı, devam eden adımdan sonra durdurur ve ulaştığı sonucu tutar. {{ui:Geri al}} tüm çalışmayı (ya da son yerleştirmeyi) geri alır; {{ui:Sıfırla}} taramayı dosya koordinatlarına geri koyar.

Dizüstü bilgisayarda hızlı kalması için ICP, noktaların bir kısmını seyrekleştirilmiş olarak çalışır ({{ui:Kullanılan noktalar}}, 5,000 ile 60,000 arası) ve {{ui:En büyük eşleşme uzaklığı}} değerinden daha uzak eşleşmeleri yok sayar (varsayılan olarak taramanın boyutunun %5'i, yerleştikçe küçülür). Önce kaba bir yerleştirme gerekir: neredeyse örtüşmeyen taramalar eşleştirilemediğini bildirir. Yalnızca düz ya da yalnızca doğrusal yüzeyler kendi boyunca konumu sabitleyemez; bu durumda nokta çifti ekleyin.

## Kaydedin ve dışa aktarın

- {{ui:Projeyi kaydet}} küçük bir `.ccscans.json` dosyası yazar: her taramanın adı, boyutu ve ilk 64 KB'ının parmak izi, dönüşümüyle birlikte. Hiç nokta içermez. {{ui:Proje aç…}} tarama dosyalarını bu referanslarla bulur (dosyaların önce eklenmiş olması gerekir) ve her dönüşümü geri yerleştirir.
- {{ui:LAS dışa aktar}} ve {{ui:E57 dışa aktar}} her taramayı çakıştırılmış yerinde içeren tek bir dosya yazar. Orijinal dosyalardaki noktalar hiçbir zaman yeniden yazılmaz; dönüşüm çıkış sırasında uygulanır. {{ui:Dosyalardaki her noktayı oku}} açıkken her dosya her nokta için yeniden okunur (tarama başına 20 milyona kadar); kapalıyken yalnızca görüntüleyicide gösterilen noktalar yazılır.
- {{ui:Çakıştırılmış bulutu göster}} (CadCraft) LAS dosyasını yazar ve çizimin altına kendi koordinatlarında ekler; diğer her bulut gibi.

:::note
Hiçbir şey yüklenmez. Çakıştırma dosyaların kendi birimlerinde çalışır ve milimetreyi korur: LAS, sığan bir ölçekle yazılır (0.1 mm'ye kadar), E57 ise double değerlerle. Bir koordinat sistemi, LAS'a yalnızca her tarama aynı EPSG kodunu belirttiğinde taşınır. E57 yazıcısı bizim kendi yazıcımızdır; dosyaları bu okuyucuyla ve libE57Format ile geri okuyarak denetlenir.
:::
