---
title: Görünüm penceresi sınıf geçersiz kılmaları
summary: Bir sayfada, bir sınıfı yalnızca bir görünüm penceresinde gizleyin ya da ona başka bir renk, çizgi kalınlığı ya da dolgu verin; model ve diğer görünüm pencereleri olduğu gibi kalır.
keywords: görünüm penceresi, sınıf geçersiz kılma, görünüm penceresi geçersiz kılma, sınıfı görünüm penceresinde gizle, sayfa, düzen, VPLAYER, çıktı, Vectorworks
from: c1a2b51f
---

Bir sayfa, aynı modeli çoğu zaman birden fazla gösterir: mobilyalı bir plan ile mobilyasız bir plan ya da yalnızca armatürlerin renkli olduğu bir aydınlatma planı gibi. Bir görünüm penceresi sınıf geçersiz kılması, bir [sınıf](topic:classes) öğesinin yalnızca **o görünüm penceresinde** nasıl gösterildiğini değiştirir.

1. Sayfayı açın ve bir görünüm penceresi seçin.
2. Sınıflar panelini (`CLASSES`) açın ve sınıfı seçin.
3. {{ui:Bu görünüm penceresi}} altında {{ui:Bu görünüm penceresinde gizle}} kutusunu işaretleyin ya da {{ui:Burada renk}}, {{ui:Burada çizgi kalınlığı}} veya {{ui:Burada dolgu}} değerini ayarlayın.

Aşağıdaki listede bu görünüm penceresinin değiştirdiği her sınıf gösterilir. {{ui:Bu görünüm penceresinin geçersiz kılmalarını temizle}} hepsini kaldırır. Her değişiklik tek bir geri alma adımıdır.

## Bir geçersiz kılma neyi değiştirir

- **Gizle**, bu görünüm penceresinde sınıfı ve altındaki her sınıfı gizler.
- **Renk, çizgi kalınlığı ve dolgu**, değeri nesnenin kendisinde ayarlanmamış olan sınıf nesnelerini değiştirir; yani değeri sınıftan ya da katmandan alan nesneleri. Kendi rengi olan bir nesne, görünüm penceresi katman geçersiz kılmasında olduğu gibi rengini korur.

Geçersiz kılmalar ekranda, çıktılarda ve PDF'lerde görünür; PDF'e yayımlanan bir sayfa takımı da buna dahildir. Görünüm penceresinin dondurulmuş katmanları ve katman geçersiz kılmalarıyla birlikte çalışırlar.

Geçersiz kılmalar, DWG ve DXF'te çizimle birlikte kaydedilir (sınıf listesiyle birlikte, `CADCRAFT_CLASSES` bloğunda) ve dosya CadCraft'ta açıldığında aynı görünüm penceresine geri döner.
