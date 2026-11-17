---
title: Kalemle eskiz çizin ve kesin geometri elde edin
summary: Kalem, fare veya parmakla serbest çizim yapın; her çizgi, kalemi kaldırdığınızda temiz bir çizgiye, daireye, yaya, dikdörtgene veya çoklu çizgiye dönüşür; çizilmiş olanlara yakalanır ve boyutu üzerine yazmaya hazır gelir.
keywords: eskiz, kalem, dijital kalem, serbest çizim, parmak, temizleme, kesin, yakalama, SKETCHLIVE, SKETCHFIX, boyut, üzerine yazma
from: cd87eb75
---

{{cmd:SKETCHLIVE}} komutunu başlatın (veya **Çiz › Daha fazla › Kalemle eskiz** seçeneğini seçin) ve basılı tutup sürükleyerek bir çizgi çizin. Kalemi kaldırdığınızda CadCraft ne kastettiğinizi anlar ve çizime yerleştirir:

| Çizginiz | Elde ettiğiniz |
|---|---|
| Neredeyse düz | Bir çizgi. Neredeyse yatay veya düşey olan çizgi tam yatay veya düşey yapılır. |
| Kapalı ve yuvarlak | Bir daire |
| Yuvarlak bir şeklin parçası | Bir yay |
| Dört dik açılı köşesi olan kapalı şekil | Bir dikdörtgen |
| Diğer her durum | Köşeleri kare olan bir çoklu çizgi |

Çizginin uçları, zaten çizilmiş olan en yakın uca çekilir; böylece eskizlenen bir duvar yanındaki duvara birleşir.

## Boyutu üzerine yazın

Her çizgiden sonra komut satırı boyutunu varsayılan olarak gösterir (bir çizginin **uzunluğu**, bir dairenin veya yayın **yarıçapı**, bir dikdörtgenin **genişliği**). Korumak için {{key:Enter}} tuşuna basın veya yerine geçmesi için `12'6"` gibi bir sayı ya da uzunluk yazın. Bir çizgi ilk ucunu, bir daire merkezini, bir dikdörtgen ilk köşesini korur.

Bitirmek için boş istemde {{key:Enter}} tuşuna basın veya son çizgiyi geri almak için `U` yazın. Tüm oturum tek bir geri alma adımıdır.

## Birden çok çizgiyi aynı anda temizleme

{{cmd:SKETCHFIX}} çizgileri toplar ve {{key:Enter}} tuşuna bastığınızda hepsini kesin hâle getirir; bu, hızlıca çizilmiş kaba bir yerleşim için uygundur.

:::note
Her şey bilgisayarınızda kurallara göre hesaplanır; bir model kullanılmaz ve hiçbir şey bir yere gönderilmez.
:::
