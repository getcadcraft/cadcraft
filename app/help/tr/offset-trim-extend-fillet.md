---
title: Duvarları ofset al, kırp, uzat, köşe yuvarlat ve pah kır
summary: Tek çizgileri Ofset ile çift duvarlara çevirin, Köşe yuvarlatma ile köşeleri temizleyin ve Kırp ile Uzat ile çizgileri kesin ve uzatın.
keywords: ofset, kırp, uzat, köşe yuvarlat, pah kır, eğim, kır, kırma, uzunluğu değiştir, duvarlar, köşe, kes, uzunluk, paralel, yarıçap, temizleme
from: c6c5cbd0
---

## Ne yapacaksınız

200 kalınlığında duvarları olan küçük bir oda: iç yüz çizilir, dış yüz ofset alınır, köşeler temizlenir ve bir duvardan bir kapı açıklığı kesilir.

## İç yüzü çizin

1. `L` yazın ve {{key:Enter}}'a basın.
2. `0,0` yazın ve {{key:Enter}}'a basın.
3. `@5000,0` yazın ve {{key:Enter}}'a basın.
4. `@0,4000` yazın ve {{key:Enter}}'a basın.
5. `@-5000,0` yazın ve {{key:Enter}}'a basın.
6. `C` yazın ve {{key:Enter}}'a basın.
7. {{ui:Extents}} düğmesine tıklayın.

Dört ayrı çizginiz var. (Kapalı bir çoklu çizgi tek seferde ofset alınabilir; ayrı çizgiler ise Köşe yuvarlatmanın köşeleri nasıl temizlediğini gösterir.)

## Dış yüzü ofset alın

1. `O` yazın ve {{key:Enter}}'a basın. İstem şunu yazar: `Ofset mesafesini belirtin [Üzerinden geçen (T)] <Üzerinden geçen>:`
2. `200` yazın ve {{key:Enter}}'a basın.
3. `Ofset uygulanacak nesneyi seçin` isteminde alt çizgiye tıklayın.
4. `Ofset yönündeki noktayı belirtin` isteminde altında bir yere tıklayın. 200 aşağıda paralel bir çizgi belirir.
5. Sağ çizgiye tıklayın, ardından sağında bir yere tıklayın.
6. Üst çizgiye tıklayın, ardından üstünde bir yere tıklayın.
7. Sol çizgiye tıklayın, ardından solunda bir yere tıklayın.
8. Komutu bitirmek için {{key:Enter}}'a basın.

Her biri iç çizgisiyle aynı uzunlukta dört dış çizgi görmelisiniz; dış köşeler birleşmez.

:::tip
Mesafe isteminde son mesafeyi yeniden kullanmak için {{key:Enter}}'a basın. `T` (Üzerinden geçen) yazarsanız, her kopya tıkladığınız noktadan geçer, ne kadar uzaklıkta olursa olsun.
:::

{{cmd:OFFSET}} çizgiler, yaylar, daireler ve çoklu çizgiler üzerinde çalışır. Kapalı bir çoklu çizgiyi ofset almak, köşeleri de dahil olmak üzere tüm dış hattı ofset alır.

## Köşeleri Köşe yuvarlatma ile temizleyin

{{cmd:FILLET}} bir köşede iki çizgiyi birleştirir: ikisi de birleşsin diye kırpar ya da uzatır. Yarıçap 0 ise köşe keskin olur.

1. `F` yazın ve {{key:Enter}}'a basın. İstem şunu yazar: `İlk çizgiyi seçin [Yarıçap (R)]:`
2. Son köşe yuvarlatmada bir yarıçap kullandıysanız, `R` yazın, {{key:Enter}}'a basın, `0` yazın ve {{key:Enter}}'a basın.
3. Dış alt çizgiye, sağ ucuna yakın bir yerde tıklayın.
4. `İkinci çizgiyi seçin` isteminde, dış sağ çizgiye, alt ucuna yakın bir yerde tıklayın.

İki çizgi artık keskin bir köşede buluşur ve komut biter.

5. Bir sonraki köşe için {{cmd:FILLET}} komutunu tekrarlamak üzere {{key:Enter}}'a basın.
6. Dört dış köşenin hepsi birleşene kadar tekrarlayın.

Her çizgiye, **tutmak** istediğiniz kısmında tıklayın. Yarıçap 0'dan büyükse, Köşe yuvarlatma bunun yerine çizgiler arasına bir yay ekler.

:::tip
Birinci istemde tüm dört köşeyi tek seferde yapmak için `M` yazın ya da dış yüzü kapalı bir çoklu çizgi olarak çizin ve `P` yazın: her köşe aynı anda yapılır. Yarıçapı değiştirmeden keskin bir köşe için ikinci çizgiye tıklarken {{key:Shift}} tuşunu basılı tutun.
:::

## Bir köşeyi Pah kır ile pahlayın

{{cmd:CHAMFER}} bir köşeyi düz bir çizgiyle keser.

1. `CHA` yazın ve {{key:Enter}}'a basın.
2. `D` yazın ve {{key:Enter}}'a basın. İlk mesafe için `300` yazın ve {{key:Enter}}'a basın, ardından ikinci mesafe için de 300 kullanmak üzere {{key:Enter}}'a basın.
3. İç üst çizgiye, sol ucuna yakın bir yerde tıklayın, ardından iç sol çizgiye, üst ucuna yakın bir yerde tıklayın.

Köşe her çizgi üzerinde 300 geri kesilir ve bir pah çizgisi ikisini birleştirir. İlk çizgide bir uzunluk ve bir açı vermek için `D` yerine `A` yazın.

## Kırp ile bir kapı açıklığı kesin

Önce alt duvarın üzerine iki kapı kanadı çizin, sonra aralarındaki duvar çizgilerini kırpın.

1. `L` yazın ve {{key:Enter}}'a basın.
2. `1000,200` yazın ve {{key:Enter}}'a basın.
3. `@0,-600` yazın ve {{key:Enter}}'a basın, ardından bir kez daha {{key:Enter}}'a basın.
4. {{cmd:LINE}} komutunu tekrarlamak için {{key:Enter}}'a basın.
5. `1900,200` yazın ve {{key:Enter}}'a basın.
6. `@0,-600` yazın ve {{key:Enter}}'a basın, ardından bir kez daha {{key:Enter}}'a basın.

Şimdi alt duvarı 900 aralıkla kesen iki kısa çizginiz var.

7. `TR` yazın ve {{key:Enter}}'a basın. Geçmiş şunu yazar: `Geçerli ayarlar: Hızlı mod, kenarlar: Uzatma yok`.
8. İki kanat arasındaki iç alt çizgiye tıklayın. O parça kaybolur. (Önce imleci üzerine getirin: gidecek parça griye döner ve kesikli olur.)
9. İki kanat arasındaki dış alt çizgiye tıklayın. O parça da kaybolur.
10. Her kanadın duvarın üstüne taşan kısmına ve altındaki kısmına tıklayın.
11. Komutu bitirmek için {{key:Enter}}'a basın.

İki kanadın duvar uçlarını kapattığı, alt duvarda 900 açıklık görmelisiniz.

Hızlı mod'da (varsayılan) Kırp, önce kesici kenarları seçmenizi istemez: görünen her nesne bir kesici kenardır. Gitmesini istediğiniz parçayı seçin ya da birkaç parçanın üzerinden bir yol sürükleyerek hepsini bir kerede kırpın. Son seçimi ya da sürüklemeyi komuttan çıkmadan geri koymak için `U` yazın ve {{key:Enter}}'a basın. Pencere, kesişen, seçilmiş kenarlar ve uzatmak için {{key:Shift}} [Kırp ve uzat](topic:trim-and-extend) bölümünde anlatılmıştır.

## Bir çizgiyi diğerine uzatın

{{cmd:EXTEND}}, bir çizginin, yayın ya da çoklu çizginin ucunu o yöndeki bir sonraki nesneye ulaşana kadar uzatır.

1. `L` yazın ve {{key:Enter}}'a basın.
2. `1000,2000` yazın ve {{key:Enter}}'a basın.
3. `@2000,0` yazın ve {{key:Enter}}'a basın, ardından bir kez daha {{key:Enter}}'a basın. Çizgi sağ duvardan 2000 kısa durur.
4. `EX` yazın ve {{key:Enter}}'a basın.
5. Yeni çizgiye, sağ ucuna yakın bir yerde tıklayın.
6. Komutu bitirmek için {{key:Enter}}'a basın.

Çizgi artık sağ duvarın iç yüzüne kadar uzanır. Görünen her nesne bir sınırdır; büyümesi gereken uca yakın seçin. {{cmd:TRIM}} içinde {{key:Shift}} ile tıklamak aynı işi yapar.

## Kır ve uzunluğu değiştir

{{cmd:BREAK}} (`BR` ya da {{ui:Modify}} › {{ui:More}} › {{ui:Break}}), kesici bir kenar olmadan bir boşluk açar: boşluğun başladığı yerde nesneye tıklayın (bu tıklama ilk noktadır), ardından bittiği yere tıklayın. Bir dairede, ilk noktadan ikinci noktaya saat yönünün tersine olan kısım gider. İkinci istemde `F` yazmak ilk noktayı yeniden vermenizi sağlar ve {{cmd:BREAKATPOINT}} bir nesneyi bir noktada boşluk bırakmadan ikiye böler.

{{cmd:LENGTHEN}} (`LEN`) bir uçtaki uzunluğu değiştirir:

1. `LEN` yazın ve {{key:Enter}}'a basın. Mevcut uzunluğunu görmek için bir çizgiye tıklayın; istem yeniden sorar.
2. Nasıl olacağını seçin: `DE` (Delta: eklenecek bir miktar, çıkarmak için negatif; yay için `A` açısı), `P` (Yüzde: 50 yarıya indirir), `T` (Toplam: olması gereken uzunluk) ya da `DY` (Dinamik: ucu sürükleyin).
3. Hareket etmesi gereken uca yakın her nesneye tıklayın. `U` son nesneyi geri alır; {{key:Enter}} biter.

Çizgiler, yaylar ve açık çoklu çizgiler (son parçaları) uzatılabilir.

## Sık yapılan hatalar

- **Bütün bir çizgi kayboldu.** Hiçbir şey onu kesmedi, bu yüzden Hızlı mod onu sildi. Geri koymak için `U` yazın; kesici çizginin gerçekten onu kestiğini (yakınlaştırarak) ve kapalı bir katmanda olmadığını kontrol edin.
- **"Bu yönde sınır yok."** Uzat, çarpacak bir şey bulamadı. Büyümesi gereken uca daha yakın seçin.
- **"Yarıçap çok büyük."** Yay çizgilerden birinin ucunun ötesine geçerdi. Daha küçük bir yarıçap kullanın.
- **"Açık bir çoklu çizginin yalnızca ilk ya da son parçası kırpılabilir."** Çoklu çizginin birbirine komşu iki parçasını seçin ya da her köşesini yuvarlamak için `P` yazın.
- **Ofset yanlış tarafa gitti.** Taraf, nesneyi seçtikten sonra tıkladığınız yerdir. {{key:Mod+Z}} ile geri alın ve diğer tarafa tıklayın.
- **"Bu kadar uzağa ofset alınamaz."** Ofset yayı, daireyi ya da çoklu çizgiyi içten dışa çevirirdi. Daha küçük bir mesafe kullanın.
