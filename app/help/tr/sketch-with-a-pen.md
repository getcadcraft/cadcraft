---
title: Kalemle eskiz çizin ve kesin geometri elde edin
summary: Kalem, fare ya da parmakla serbest el çizin; her vuruş kalemi kaldırdığınızda temiz bir doğru, daire, yay, dikdörtgen ya da çoklu çizgi olur, zaten çizilmiş olanlara yakalanır ve üzerine yazabileceğiniz bir boyutla gelir.
keywords: eskiz, kalem, kalem ucu, serbest el, parmak, temizle, kesin, yakalama, sketchlive, sketchfix, boyut, üzerine yaz, basınç, çizgi kalınlığı, Apple Pencil, penpressure
from: bfb4027b
---

{{cmd:SKETCHLIVE}}'ı başlatın (ya da **Çiz › Daha fazla › Kalemle eskiz çiz**'i seçin) ve basarak sürükleyerek bir vuruş çizin. Kalemi kaldırdığınızda CadCraft ne demek istediğinizi okur ve çizime koyar:

| Vuruşunuz | Ne elde edersiniz |
|---|---|
| Neredeyse düz | Bir doğru. Neredeyse yatay ya da düşey bir doğru tam yatay ya da düşey yapılır. |
| Kapalı ve yuvarlak | Bir daire |
| Yuvarlak bir şeklin parçası | Bir yay |
| Dört dik açılı köşesi olan kapalı | Bir dikdörtgen |
| Başka her şey | Kenarları dik bir çoklu çizgi |

Bir vuruşun uçları, çizilmiş olanın en yakın ucuna çekilir; böylece eskize çizilmiş bir duvar, yanındaki duvara birleşir.

## Boyutun üzerine yazın

Her vuruştan sonra komut satırı, vuruşunun boyutunu (bir doğrunun **uzunluğu**, bir dairenin ya da yayın **yarıçapı**, bir dikdörtgenin **genişliği**) varsayılan olarak gösterir. Tutmak için {{key:Enter}}'a basın ya da bunu değiştirmek için bir sayı ya da `12'6"` gibi bir uzunluk yazın. Bir doğru ilk ucunu, bir daire merkezini, bir dikdörtgen ilk köşesini korur.

Boş bir istemde {{key:Enter}}'a basarak bitirin ya da son vuruşu geri almak için `U` yazın. Bütün oturum tek bir geri al adımıdır.

## Birkaç vuruşu birden temizlemek

{{cmd:SKETCHFIX}}, vuruşları toplar ve {{key:Enter}}'a bastığınızda hepsini kesin yapar; hızlıca çizilmiş kaba bir yerleşim için uygundur.

:::note
Her şey bu bilgisayarda kurallarla hesaplanır; bir model yoktur ve hiçbir şey hiçbir yere gönderilmez.
:::

## Basınç çizgi kalınlığını belirler

Kalemin uygulamalar için açık olduğu yerde (Ayarlar › Genel › Giriş aygıtları › Kalem), kalemle çizilen bir vuruş, kalemin verdiği her noktayı ve basıncını taşır. Hafif bir vuruş ince, sert bir vuruş kalın bir nesne yapar: vuruşun ortalama basıncı 0,18, 0,25, 0,35 ya da 0,50 mm seçer ve komut satırı hangisi olduğunu söyler. Fare ya da parmakla çizilen vuruşlar, eskisi gibi geçerli çizgi kalınlığını alır. {{cmd:PENPRESSURE}} bunu kapatır (ya da yeniden açar); seçim bu tarayıcıda tutulur.
