---
title: Çizim sınırlarını ayarlayın
summary: LIMITS, çizim için bir dikdörtgen belirler: ızgara onu doldurur, ZOOM Tümü onu gösterir ve sınırlar açıkken dışındaki noktalar reddedilir. DWG ve DXF dosyalarında kaydedilirler.
keywords: sınırlar, çizim sınırları, LIMITS, LIMMIN, LIMMAX, LIMCHECK, ızgara, sınırların dışında, sayfa boyutu, çizim alanı, zoom all, tümüne yakınlaştır, sınır
from: 9e97b30d
---

**Çizim sınırları**, çizimin ne kadar büyük olması amaçlandığını söyleyen bir dikdörtgendir: çizim yapmayı planladığınız alan, örneğin 420 × 297'lik bir sayfa. Yeni bir çizimde hiçbiri yoktur; bu nedenle ızgara ve çizim alanı, daha önce olduğu gibi sınırsızdır.

## Ayarlayın

{{cmd:LIMITS}} yazın ve yanıtlayın:

- `Sol alt köşeyi belirtin ya da [ON/OFF] <0,0>`: bir nokta, ya da mevcut olanı korumak için {{key:Enter}}.
- `Sağ üst köşeyi belirtin <420,297>`: bir nokta, ya da mevcut olanı korumak için {{key:Enter}}. İlkinin üstünde ve sağında olmalıdır.

Ya da dikdörtgeni değiştirmeden denetimi açıp kapatmak için ilk soruda `ON` ya da `OFF` yazın. Köşeleri ayarlamak tek bir geri alma adımıdır; her ON ve OFF de öyledir.

## Ne yaparlar

- **Izgara sınırları doldurur** ve kenarında durur. Alanın bir resmidir; görmek için {{ui:Izgara}}'yı açın.
- **ZOOM Tümü** ({{cmd:ZOOM}}, sonra {{ui:Tümü}}) sınırları ve çizimi birlikte gösterir; {{ui:Sınırlar}} yalnızca çizimi göstermeye devam eder.
- **Sınırlar AÇIK iken**, yazdığınız ya da tıkladığınız, dışındaki bir nokta `**Sınırların dışında` mesajıyla reddedilir ve istem kalır. Bu, nesne oluşturan komutları kapsar: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, ölçülendirme komutları ve birkaç tane daha. Yalnızca taşıyan, seçen ya da ölçen komutlar sınırlı değildir; yapıştırma, tutamaç sürükleme ya da bir LISP rutininin oluşturduğu bir nesne de öyledir: sınırlar bir duvar değil, çizim için bir kılavuzdur. Sınırlar KAPALI iken hiçbir şey reddedilmez.
- Zaten dışarıda olan nesneler, bulundukları yerde kalır.

## Dosyalarda ve LISP'te

DWG ve DXF dosyalarında `$LIMMIN`, `$LIMMAX` ve `$LIMCHECK` olarak kaydedilirler. Yalnızca o programın varsayılan sınırlarına sahip (0,0 ile 12,9 ya da 420,297, denetim kapalı) başka bir programın dosyası hiçbiri olmadan açılır; böylece ızgarası küçük bir dikdörtgene sıkıştırılmaz. Kendi sınırları olan ya da denetimi açık olan bir dosya bunları korur. LISP'te `(getvar "LIMMIN")`, `LIMMAX` ve `LIMCHECK` bunları okur, `setvar` ise yazar; tek bir geri alma adımı olarak.

Sınırlar modele aittir. Bir sayfa (düzen) kendi kâğıt boyutuna sahiptir.
