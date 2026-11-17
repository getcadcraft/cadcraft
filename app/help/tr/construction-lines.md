---
title: Yapı çizgileri ve ışınlar
summary: Hizalama için sonsuza kadar uzanan (XLINE) ya da bir noktadan tek yöne (RAY) giden çizgiler çizin ve işleri bittiğinde bunları sıradan çizgilere kırpın.
keywords: xline, ray, yapı çizgisi, yapı çizgileri, sonsuz çizgi, kılavuz çizgi, referans çizgisi, ikiye bölme, ofset çizgi, düzen çizgileri, xl, ışın
from: b6c398bc
---

## Neler öğreneceksiniz

Çizim yaparken her şeyi hizalamak için yapı çizgilerini nasıl çizeceğinizi: iki noktadan, yatay ya da dikey, belirli bir açıyla, iki yön arasında tam orta noktadan ya da bir çizgiden belirli bir uzaklıkta. Ayrıca işlerini bitirdiklerinde bunları nasıl sıradan çizgilere kırpacağınızı.

## İki tür

- Bir **yapı çizgisi** ({{cmd:XLINE}}) iki yönde de uç vermeden uzanır.
- Bir **ışın** ({{cmd:RAY}}) bir noktadan başlar ve tek yönde uç vermeden uzanır.

Her ikisi de yakınlaştırma düzeyinden bağımsız olarak çizim alanının tamamında çizilir; bölünmüş ekranda ve bir sayfadaki görünüm pencerelerinde de. {{ui:Sınırlar}} bunları hariç tutar; bu yüzden çizime yakınlaştırmak, çizdiklerinizi yine sığdırır.

## Yapı çizgisi çizme

1. {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Yapı çizgisi}} seçeneğine tıklayın ya da `XL` yazıp {{key:Enter}} tuşuna basın.
2. Bir nokta tıklayın. Bundan sonraki her tıklama, ilk nokta ile tıkladığınız nokta üzerinden geçen bir yapı çizgisi ekler.
3. Bitirmek için {{key:Enter}} tuşuna basın.

İlk nokta yerine bir seçenek de yazabilirsiniz:

| Seçenek | Ne yapar |
|---|---|
| `H` (Yatay) | Tıkladığınız her nokta için bir yatay çizgi. |
| `V` (Dikey) | Her nokta üzerinden dikey çizgiler. |
| `A` (Açı) | Yazdığınız açıda (derece; X ekseninden saat yönünün tersine), her nokta üzerinden çizgiler. `R` (Referans) açıyı seçtiğiniz bir çizgiden ölçer. |
| `B` (İkiye böl) | Köşeye, sonra bir kenar üzerinde bir noktaya tıklayın: diğer kenar üzerinde tıkladığınız her nokta, ikisinin tam ortasından bir çizgi ekler. |
| `O` (Ofset) | Bir uzaklık yazın, bir çizgi seçin, sonra tarafa tıklayın: ondan o kadar uzakta, paralel bir yapı çizgisi. `T` (Üzerinden) bunun yerine tıkladığınız bir noktadan geçirir. Uzaklık bir sonraki kullanımda hatırlanır. |

## Işın çizme

1. {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Işın}} seçeneğine tıklayın ya da `RAY` yazıp {{key:Enter}} tuşuna basın.
2. Işınların başladığı yere tıklayın.
3. Her ışının geçeceği bir nokta tıklayın. Bitirmek için {{key:Enter}} tuşuna basın.

## Onlara yakalayın ve kırpın

Yapı çizgileri ve ışınlar En yakın, Dik ve Kesişim yakalamalarını kullanır. Uçları ve orta noktaları olmadığı için Uç nokta ve Orta nokta onları bulamaz.

Diğer çizgiler gibi {{cmd:TRIM}} ve {{cmd:BREAK}} ile kesilir ve kesebilirler:

- Bir yapı çizgisinin bir ucunu kırparsanız, kesimden başlayan bir ışına dönüşür.
- Bir ışının uzak kısmını kırparsanız sıradan bir çizgi olur.
- Bir yapı çizgisini {{cmd:BREAK}} ile tek bir noktada kırarsanız iki ışın elde edersiniz.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} ve {{cmd:STRETCH}} bunlarda da çalışır. Pencere seçimi bunları hiçbir zaman almaz, çünkü hiçbir pencere sonsuz bir çizginin tamamını içine alamaz; kesişen pencere ya da bir tıklama seçer.

:::note
Her sürümdeki bir DWG ile DXF 2000 bunları yapı çizgisi olarak tutar. DXF R12'de bunlar yoktur; bu yüzden orada çizimin tamamını kaplayan çizgilere dönüşürler ve kayıt bunu söyler. Çıktı ya da PDF, bunları yalnızca yazdırdığı alanda çizer.
:::
