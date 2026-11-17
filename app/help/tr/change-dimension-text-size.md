---
title: Ölçülendirme metin boyutunu değiştirin
summary: Ölçülendirme metnini büyütün ya da küçültün; hem yeni ölçülendirmeler hem de çizimde zaten olanlar için.
keywords: ölçülendirme metin boyutu, metin yüksekliği, dimtxt, dimscale, ölçülendirme metni çok küçük, ölçülendirme metni çok büyük, ölçülendirme metnini büyütme, açıklama ölçeği
from: 30e40633
---

## Bundan sonra yapacağınız ölçülendirmeler için

1. Hiçbir şeyin seçili olmaması için {{key:Esc}}'a basın: sağ panel {{ui:Geçerli ayarlar}} yazar.
2. Paneli {{ui:Yeni ölçülendirmeler}} kısmına kadar aşağı kaydırın. {{ui:Metin yüksekliği}} alanına kağıtta istediğiniz yüksekliği yazın (örneğin 2,5 mm için `2.5`, ya da `3/32"`) ve {{key:Enter}}'a basın.
3. {{ui:Genel ölçek}} değerini çizim ölçeğine ayarlayın (1:50 için `50`, 1/4" = 1'-0" için `48`): her ölçü bununla çarpılır.

Komut satırında {{cmd:DIMTXT}} yüksekliği, {{cmd:DIMSCALE}} genel ölçeği ayarlar.

## Çizimde zaten olan ölçülendirmeler için

1. Ölçülendirmeleri seçin (biri ya da birkaçı: Özellikler'in üstündeki listeden {{ui:Ölçülendirme}} seçin).
2. Yeni {{ui:Metin yüksekliği}} değerini ({{ui:Metin}} bölümünde) ya da yeni bir {{ui:Genel ölçek}} değerini ({{ui:Sığdırma}} bölümünde, daha aşağıda) yazın ve {{key:Enter}}'a basın.

Ölçülendirmeler hemen, tek bir geri alma adımında yeniden çizilir. Başka bir programın dosyasından gelen bir ölçülendirme, değiştirdiğiniz anda CadCraft'ın stiliyle yeniden çizilir.

:::tip
Ekranda doğru ama çıktı sayfasında küçük kalan metin genellikle genel ölçeğin 1 olduğu anlamına gelir: onu sayfanın ölçeğine ayarlayın.
:::

Her ayar için bkz. [Ölçülendirme boyutlarını, ondalıkları ve ölçeği ayarlayın](topic:dimension-settings).
