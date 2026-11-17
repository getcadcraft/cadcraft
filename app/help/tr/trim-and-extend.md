---
title: Kırpma ve uzatma
summary: Çizgileri, onları kesen diğer çizgilerin olduğu yerde geri kesin ve diğerlerine ulaşacak şekilde uzatın; tek tek ya da içinden geçen bir yolu sürükleyerek birçok parçayı birden.
keywords: trimextendmode, pencere sürükleme, kırp, uzat, tr, ex, hızlı kırpma, sürükle, serbest çizim, yol, çit, kesişen, shift, kesici kenarlar, sınır kenarları, edgemode, mod, standart, hızlı, sil, önizleme, duvarlar, temizleme
from: 25fbc5bd
---

## Neler öğreneceksiniz

{{cmd:TRIM}} ve {{cmd:EXTEND}} komutlarının nasıl çalıştığını ve bunları kullanmanın hızlı yollarını: birçok parçanın içinden tek seferde sürükleyin, kırpma ile uzatma arasında geçiş için {{key:Shift}} tuşunu basılı tutun ve tıklamadan önce neyin gideceğini görün.

## Tek bir parçayı kırpın

1. Uzun bir yatay çizgi ve onun üzerinden geçen iki kısa çizgi çizin.
2. `TR` yazıp {{key:Enter}} tuşuna basın. Geçmiş şunu söyler: `Geçerli ayarlar: Hızlı mod, kenarlar: Uzatma yok`
3. İmleci iki kısa çizginin arasındaki uzun çizgi üzerinde durdurun. O parça griye döner ve kesikli olur: gidecek olan odur.
4. Tıklayın. Parça kaybolur.
5. Komutu bitirmek için {{key:Enter}} tuşuna basın.

Hızlı modda (varsayılan) görünen her nesne bir kesici kenardır; bu yüzden önce kenarları hiç seçmezsiniz. Gitmesini istediğiniz parçaya tıklayın. Hiçbir şeyin kesmediği bir nesne bütünüyle silinir ve geçmiş bunu söyler.

## Birçok parçayı tek sürüklemede kırpın

1. Uzun bir yatay çizgi ve onun üzerinden geçen on kısa dikey çizgi çizin.
2. `TR` yazıp {{key:Enter}} tuşuna basın.
3. Fare düğmesine uzun çizginin üstünde, ilk dikey çizginin solunda basın ve uzun çizginin üstünden on çizginin hepsini geçecek şekilde sürükleyin.

Sürüklerken yol kesikli bir çizgi olarak görünür ve geçtiği her parça griye döner. Bırakın: on üst parçanın hepsi tek adımda kırpılır. Hepsini bir anda geri koymak için `U` yazıp {{key:Enter}} tuşuna basın.

:::tip
İki boş noktaya da tıklayabilirsiniz: aralarındaki çizgi, sürüklenen bir yol gibi çalışır. Bunun yerine bir dizi noktaya tıklamak için Çit (`F`) yazın, sonra {{key:Enter}} tuşuna basın.
:::

:::touch
Parmağınızla aynı şekilde sürükleyin. Bir parçaya dokunmak onu kırpar.
:::

## Bunun yerine uzatın: Shift ile

1. Bir dikey çizgi ve solunda, ondan önce biten beş kısa yatay çizgi çizin.
2. `TR` yazıp {{key:Enter}} tuşuna basın.
3. {{key:Shift}} tuşunu basılı tutun. İmleci kısa bir çizgi üzerinde durdurun: uzayacağı kısım griyle ve kesikli olarak gösterilir.
4. {{key:Shift}} tuşunu hâlâ basılı tutarak beş kısa çizginin içinden aşağı sürükleyin.

Beşi de artık dikey çizgiye kadar uzanır. {{key:Shift}} {{cmd:EXTEND}} (`EX`) komutunda tersini yapar: tıklama uzatır, {{key:Shift}}+tıklama kırpar. Uzatma, tıkladığınız yere ya da yolun kestiği yere en yakın ucu uzatır.

## Bir pencerenin içinde kırpın

1. `TR` yazıp {{key:Enter}} tuşuna basın.
2. `C` yazıp {{key:Enter}} tuşuna basın.
3. Kaldırılacak parçaların etrafında iki köşeye tıklayın.

Pencerenin içinde en az kısmen yer alan her parça kırpılır.

`C` yazmadan yalnızca sürükleyerek bir pencere elde etmek için: {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Kırpma ve uzatmada sürükleme}} › {{ui:Bir pencere}}. Ardından boş bir yere basıp sürüklemek bir kutu çizer ve ona dokunan her parça kırpılır (ya da {{cmd:EXTEND}} içinde ya da {{key:Shift}} ile uzatılır). {{ui:Bir yol}} (başlangıç) serbest çizim yolunu geri getirir. TRIM'in başındaki ayarlar satırı hangisinin açık olduğunu söyler.

## Kesici kenarları seçin (Standart mod)

Bazen yalnızca bir çizgi kesmelidir; örneğin üzerinden birçok başka çizginin geçtiği bir duvar yüzü gibi.

1. `TR` yazıp {{key:Enter}} tuşuna basın.
2. Mod (`O`) yazıp {{key:Enter}} tuşuna basın, sonra Standart (`S`) yazıp {{key:Enter}} tuşuna basın.
3. `Kesici kenarları seçin` isteminde kenar çizgilerine tıklayın (ya da bir pencere sürükleyin), sonra {{key:Enter}} tuşuna basın. Hiçbir şey seçili değilken {{key:Enter}} tuşuna basmak her nesneyi bir kenar yapar.
4. Kaldırılacak parçalara tıklayın veya onların içinden sürükleyin.

Yalnızca seçilen kenarlar keser; hiçbir kenarın geçmediği bir nesneye dokunulmaz. Mod, sayfayı kapatana kadar korunur; hızlıya dönmek için `O`, sonra Hızlı (`Q`) yazın. {{cmd:TRIMEXTENDMODE}}, o adlı değişkenin başka yerlerde yaptığı gibi, başlamadan önce modu ayarlar: `0` Standart, `1` Hızlı. Kesici kenarlar (`T`) istediğiniz zaman yeni kenarlar seçer; {{cmd:EXTEND}} içinde bu `B` (Sınır kenarları) olur.

## Ulaşacak kenarlar

1. `TR` yazıp {{key:Enter}} tuşuna basın.
2. Kenar (`E`) yazıp {{key:Enter}} tuşuna basın, sonra Uzat (`E`) yazıp {{key:Enter}} tuşuna basın.

Artık kısa biten bir kesici çizgi ya da yay, devam ediyormuş gibi sayılır: kısa bir çizgi, daha uzun olsaydı keseceği yerde keser. Geri dönmek için `E` ve sonra Uzatma yok (`N`) yazın. Bu, EDGEMODE 1 ve 0 ile aynıdır.

## Çıkmadan silin

Sil (`R`) yazıp {{key:Enter}} tuşuna basın, silinecek nesneleri seçin ve {{key:Enter}} tuşuna basın. TRIM devam eder.

## Sık yapılan hatalar

- **Bütün bir çizgi kayboldu.** Hızlı modda hiçbir şeyin kesmediği bir nesne silinir. Geri koymak için `U` yazın veya Standart moda geçin (`O`, `S`).
- **"Orada kırpılacak bir şey yok: seçilen hiçbir kenar o nesneyi kesmiyor."** Standart mod yalnızca seçtiğiniz kenarlarda keser. Yeniden seçmek için `T` yazın.
- **"Bu yönde sınır yok."** Uzatma ileride bir şey bulamadı. Uzaması gereken uca daha yakın tıklayın veya kısa biten sınırlar için Kenar, Uzat (`E`) seçeneğini açın.
- **Sürükleme bunun yerine bir kement çizdi.** Sürükleme yalnızca TRIM veya EXTEND bir nesne istediğinde kırpar. Hiçbir komut çalışmıyorken sürükleme seçer (bkz. [Kement seçimi](topic:lasso-selection)).
- **Yalnızca çizgiler, yaylar, daireler ve çoklu çizgiler kırpılabilir.** Çizgilerini kırpmak için önce bloğu patlatın.
