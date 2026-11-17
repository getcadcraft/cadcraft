---
title: 2D'de akıllı duvarlar, kapılar ve pencereler çizin
summary: Duvarları bir çoklu çizgi gibi çizin, temiz biçimde birleştirin ve duvarla birlikte hareket eden kapı ve pencereler yerleştirin. Hepsi 2D, 3B model yok.
keywords: duvar, duvarlar, WALL, WA, kapı, DOOR, DR, pencere, WINDOW, WN, DELOPENING, akıllı duvar, kat planı, açılma, menteşe, açıklık
from: 45845d49
---

Buradaki duvarlar 2D çizim nesneleridir. 3B model oluşturmazlar; bu nedenle bir plan, çizgi çizimi kadar hafif kalır. Bir yapı modeli için BimCraft'ı kullanın.

## Duvar çizin

`WALL` (`WA`) yazın ya da {{ui:Çiz}} grubunun {{ui:Daha fazla}} menüsünden {{ui:Duvar}} seçin, sonra bir çoklu çizgi için yapacağınız gibi noktalara tıklayın. Bitirmek için {{key:Enter}} tuşuna basın ya da odayı kapatmak için `C` yazın.

- `T` kalınlığı belirler.
- `J`, tıklamalarınızın neyi izleyeceğini belirler: duvarın merkezi ya da sol ya da sağ yüzü.
- `F` dolguyu belirler: yok, düz ya da taralama.

Köşeler kendiliğinden pah olur. Başka bir duvarın kalınlığı içinde biten bir duvar, onunla temiz bir T birleşimi oluşturur; birbirini kesen duvarlar ise birbirlerine açılır. Birleşimler duvarlarla birlikte kaydedilir. Dikdörtgenler, çokgenler, yaylar, bölme, kilitler ve diğerleri için bkz. "2D duvarlar için duvar şekilleri, kesimler, ofsetler ve kilitler".

## Kapı ve pencere ekleyin

`DOOR` (`DR`) ya da `WINDOW` (`WN`) yazın ve bir duvara tıklayın. Kapı, tıkladığınız duvarın tarafına doğru açılır. `W` genişliği, `Y` türü ve `H` menteşe tarafını belirler. Daha fazlasını yerleştirmek için tıklamaya devam edin ve bitirmek için {{key:Enter}} tuşuna basın. Kapılar tek kanatlı, çift kanatlı, sürgülü ya da açık geçit olabilir. Pencereler sabit, açılır kanatlı ya da sürgülü olabilir.

## Bunları değiştirin

Tutamaçlarını görmek için bir duvar seçin:

- Uç tutamaçları duvarı uzatır. Ona birleşik duvarlar onu izler.
- Orta tutamaç duvarı taşır.
- Bir açıklıktaki tutamaç, onu duvar boyunca kaydırır.
- Oklar, kapının menteşesini ve açılma yönünü çevirir.

Özellikler, kalınlığı, dolguyu ve her açıklığı gösterir: tür, genişlik, konum, menteşe, açılma, açık ya da kapalı gösterim ve Kaldır. `DELOPENING`, tıkladığınız yere en yakın açıklığı kaldırır.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` ve `ERASE` her zamanki gibi çalışır. Kapılar ve pencereler duvarlarıyla birlikte gider, birleşik duvarlar birleşimlerini korur ve tek bir Geri al hepsini geri alır.

## Diğer programlarda

Her duvar sıradan bir blok olarak kaydedilir; bu yüzden diğer CAD programları onu doğru gösterir ve taşıyabilir, ama onu duvar olarak düzenleyemez. `EXPLODE` bir duvarı düz çizgilere ve yaylara dönüştürür ve artık duvar olmaz.
