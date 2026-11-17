---
title: Nokta bulutu biçimleri: neyi ekler, neyi dışa aktarırsınız
summary: Hangi lazer tarama dosyalarının çizimin altına eklendiği, hangilerinin bir tarayıcı üreticisinin kendi biçimi olduğu ve taramanın buraya eklenmesi için tarayıcının yazılımından neyi dışa aktarmanız gerektiği.
keywords: nokta bulutu, pointcloudattach, pcattach, lazer tarama, tarama, biçimler, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, dışa aktar, açılamıyor, okunmuyor
from: 20a5f4ee
---

## Burada ne eklenir

Bunları {{cmd:POINTCLOUDATTACH}}, {{ui:Aç}} ile ya da sayfaya bırakarak ekleyin (bkz. nokta bulutu üzerinden as-built çizgileri izleme konusu):

| Biçim | Uzantı | Okunan |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: noktalar, renkler, yoğunluk, LiDAR sınıfları, koordinat sistemi ve birimleri. LAZ en fazla 1 GB. |
| E57 | `.e57` | Dosyadaki her tarama, kendi pozuyla yerleştirilmiş; renkler ya da dosyada renk yoksa yoğunluk; metre. Dosyadaki resimler dışarıda bırakılır (bildirilir). Şimdilik en fazla 6 milyon nokta ve 512 MB: daha büyük taramaları LAS ya da LAZ olarak dışa aktarın. |
| PLY | `.ply` | Metin ve ikili (her iki bayt sırası): köşelerin x y z'si, renkler ve yoğunluk. Yüzler dışarıda bırakılır (bildirilir). |
| PCD | `.pcd` | Metin ve ikili: x y z, paketlenmiş ya da ayrı renkler, yoğunluk. Sıkıştırılmış PCD dosyaları henüz okunmaz: ikili ya da metin olarak kaydedin. |
| PTX | `.ptx` | Bir ya da daha fazla tarama, her biri kendi dönüşümüyle yerleştirilmiş; tarayıcının ölçmediği noktalar dışarıda bırakılır. Metre. |
| PTS, XYZ | `.pts`, `.xyz` | Metin: x y z; sütunlar varsa yoğunluk ve renklerle. |

## Yalnızca tarayıcının yazılımının okuduğu dosyalar

Bazı tarama dosyaları bir tarayıcı üreticisinin kendi biçimidir; yayımlanmış bir açıklaması ve açık bir okuyucusu yoktur. CadCraft bunları okuyamaz: birini eklemek, ne olduğunu ve komut satırında ne yapılacağını yazar. Taramayı üreticinin yazılımından E57 ya da LAS (ya da PTX, PTS) olarak dışa aktarın, sonra dışa aktarılan dosyayı ekleyin.

| Dosya | Uzantı | Buradan dışa aktarın |
|---|---|---|
| ReCap projesi | `.rcp` | ReCap: projeyi açın ve dışa aktarın. Proje yalnızca taramalarını gösterir; yalnızca `.rcp` dosyasını kopyalamak nokta vermez. |
| ReCap taraması | `.rcs` | ReCap: taramanın ait olduğu projeyi açın ve dışa aktarın. |
| FARO taraması | `.fls` | FARO SCENE. |
| Leica taraması | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble taraması | `.tzf` | Trimble RealWorks ya da Trimble Business Center. |
| Z+F taraması | `.zfs` | Z+F LaserControl. |

:::tip
Dışa aktarma bir biçim sorduğunda, LAS ya da LAZ CadCraft'ın kullandığı her şeyi (renkler, yoğunluk, sınıflar, koordinat sistemi ve birimleri) en küçük dosyada tutar.
:::

## Bu dosyalar neden okunmaz

Bu biçimler yayımlanmamıştır ve bunları okumanın tek yolu her üreticinin kendi yazılım kütüphanesidir, kendi koşullarıyla. CadCraft yalnızca bilgisayarınızdaki kendi kodunuzla okuyabildiği biçimleri okur; bu yüzden bir tarama, eklenmek için asla bir yere gönderilmek zorunda kalmaz.
