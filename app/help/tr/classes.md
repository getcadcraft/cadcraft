---
title: Çizimi sınıflarla düzenleyin
summary: Sınıflar nesneleri katmanların üzerinden ikinci bir yolla sıralar (Lighting-Fixtures-Spot): bunları gösterin ve gizleyin, renk, çizgi tipi, çizgi kalınlığı, dolgu ve metin stili verin; nesneler bunları "sınıfa göre" alabilir ve yeni nesnelerin gireceği sınıfı belirleyin.
keywords: sınıf, sınıflar, CLASSES, CLS, CLASS, sınıfa göre, ByClass, etkin sınıf, oluştururken kullan, Yok, tasarım katmanı, katman ölçeği, kot, Vectorworks
from: 672de9cb
---

Katmanlar bir nesnenin çizimde *nerede* durduğunu; sınıflar ise *ne* olduğunu belirtir. `Level 1` katmanındaki bir duvar `Walls-Exterior` sınıfında olabilir; `Ceiling` katmanındaki bir spot ışık ise `Lighting-Fixtures-Spot` sınıfında olabilir. Katmanlar arasında hiçbir şeyi taşımadan, tüm katmanlardaki bütün ışıkları aynı anda gizleyebilir ya da bütün dış duvarları daha kalın çizgiyle çıktı alabilirsiniz.

Her nesne **Yok** sınıfıyla başlar. Kendi sınıfı olmayan bir çizim, tam olarak daha önceki gibi çalışır.

## Sınıflar panelini açın

`CLASSES` (ya da `CLS`) yazın ve {{key:Enter}} tuşuna basın; ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsünden {{ui:Sınıflar…}} seçeneğini seçin. Panel çizimin üzerinde açılır ve siz çizim yaparken açık kalır.

- **Sınıf ekleyin:** adını en üstteki kutuya yazın ve {{key:Enter}} tuşuna basın. `-` bir düzey oluşturur: `Lighting-Fixtures-Spot`, `Lighting-Fixtures` altında yer alır; o da `Lighting` altında yer alır; eksik düzeyler sizin için eklenir.
- **Göster ya da gizle:** sınıfın yanındaki göz simgesi. Bir sınıfı gizlemek, altındaki bütün sınıfları da ekranda ve kâğıtta gizler.
- **Etkin sınıf:** yuvarlak düğme. Çizdiğiniz yeni nesneler etkin sınıfa girer.
- **Bir sınıf seçin:** adına tıklayın. Listenin altındaki düğmeler ve ayarlar bundan sonra o sınıf üzerinde çalışır.

Her satırın sonundaki sayı, o sınıftaki nesne sayısıdır (modelde, sayfalarda ve blok tanımlarının içinde).

## Nesneleri bir sınıfa koyun

Nesneleri seçin, panelden bir sınıf seçin ve {{ui:Sınıf ata}} seçeneğini belirleyin. Nesnelerin rengini, çizgi tipini, çizgi kalınlığını, dolgusunu ve metin stilini sınıftan almasını sağlamak için önce {{ui:Sınıfa göre}} kutusunu işaretleyin. Ayrıca şunları da yapabilirsiniz:

- nesneler seçiliyken `CLASS` yazın ve bir sınıf adı girin (yeni bir ad, sınıfı oluşturur);
- hiçbir şey seçili değilken `CLASS` yazarak etkin sınıfı ayarlayın; `?` sınıfları sayılarıyla birlikte listeler;
- Özellikler panelinin {{ui:Sınıf}} bölümünü kullanın: sınıf ve renk, çizgi tipi ile çizgi kalınlığı için bir {{ui:… sınıfa göre}} anahtarı (taramalar için dolgu, metin için metin stili);
- `QSELECT` ile sınıfa göre seçin: {{ui:Sınıf}} özelliğini seçin.

{{ui:Nesnelerini seç}} seçilen sınıftaki her nesneyi açık sayfada (ya da modelde) seçer.

## Bir nesne nasıl çizilir: nesne, sınıf, katman

Bir nesnenin rengi, çizgi tipi, çizgi kalınlığı, dolgusu ve metin stili, katmanda olduğu gibi **sınıfa göre** olabilir. CadCraft şu sırayla bakar:

1. Nesnenin kendi değeri; bu değer sınıfa göre değilse.
2. Nesne bunu sınıfa göre alıyorsa ve sınıfın bir değeri varsa, sınıfın değeri.
3. Katmanın değeri.

Rengi (ya da çizgi tipi …) {{ui:Ayarlanmadı}} olan bir sınıf, nesneyi katmanına bırakır. Bir sınıf seçin ve düğmelerin altında bunun {{ui:Renk}}, {{ui:Çizgi tipi}}, {{ui:Çizgi kalınlığı}}, {{ui:Dolgu (taramalar)}} ve {{ui:Metin stili}} değerlerini ayarlayın. Bu sınıfta çizilen yeni nesnelerin hepsini sınıfa göre almasını sağlamak için {{ui:Oluştururken kullan}} kutusunu işaretleyin.

Panelde yapılan her değişiklik tek bir {{ui:Geri al}} adımıdır.

## Yeniden adlandırma ve silme

{{ui:Yeniden adlandır}} adı olduğu yerde düzenler: korumak için {{key:Enter}}, çıkmak için {{key:Esc}} tuşuna basın. Altındaki sınıflar da onu izler (`Lighting` `Light` olduğunda `Lighting-Spot`, `Light-Spot` olur); nesneleri ve görünüm penceresi geçersiz kılmaları da aynı şekilde izler.

{{ui:Sil}} sınıfı ve altındaki her sınıfı kaldırır. Bunların nesneleri **Yok** sınıfına taşınır. Tek bir {{ui:Geri al}} hepsini geri getirir. **Yok** yeniden adlandırılamaz ya da silinemez.

## Tasarım katmanları

{{ui:Tasarım katmanları}} altında her katman bir ölçek (`1:50`) ve bir kot taşıyabilir. Tasarım katmanı sıradan bir katmandır: model uzayı ve sayfalar daha önceki gibi çalışır; ölçek ve kot, bunları kullanacak araçlar için çizimle birlikte saklanır.

## DWG ve DXF dosyalarında

Sınıflar, CadCraft'ın kaydettiği her DWG sürümünde ve DXF'te (R12 ve 2000) saklanır. Her nesnenin sınıfı kendi genişletilmiş verisidir (`CADCRAFT_CLASS` uygulaması); böylece AutoCAD ve diğer programlar bunu nesneyle birlikte tutar. Sınıf listesi, renkler ve görünürlük, `CADCRAFT_CLASSES` adlı tek bir kullanılmayan blokta saklanır; başka bir program bu bloğu temizlerse, CadCraft yine de her nesnenin sınıfını bulur ve sınıflar varsayılan ayarlarla geri gelir.

Diğer programlar sınıfları bilmez: her nesneyi kendi değerleri ya da katmanının değerleriyle çizerler.

Ayrıca bkz. [Görünüm penceresi sınıf geçersiz kılmaları](topic:viewport-overrides) ve [Çizimi katmanlarla düzenleyin](topic:layers).
