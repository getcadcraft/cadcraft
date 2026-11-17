---
title: Katları tek çizimde üst üste yerleştirin
summary: Birinci katı aynı koordinatlarla zemin katın üzerine çizin ve her katı, Xref kullanmadan kapatın.
keywords: kat, katlar, FLOORS, FLR, FLOOR, FLOORLAYERS, bina katı, seviye, üst üste, tasarım katmanı, model uzayı, altlık, xref
from: 7440fc87
---

Katlar, planları tek bir model uzayında üst üste koymanızı sağlar. Her katın kendi nesneleri vardır ve katmanlar hepsi boyunca çalışmaya devam eder. `P-Walls` üzerindeki bir duvar herhangi bir katta olabilir.

## Başlatın

`FLOORS` (`FLR`) yazın ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsünde {{ui:Katlar…}} öğesini seçin, sonra {{ui:Katlarla başlayın}} seçin. Şimdiye kadar çizdikleriniz zemin kata gider.

## Bir katta çizin

Paneldeki yuvarlak düğmeyle katı seçin. Yeni nesneler ona eklenir.

Açık olan diğer katlar, onun altında soluk görünür. Onlara yakalanabilirsiniz; böylece birinci kat zemin katla hizalanır, ancak onları etkin kat yapana kadar değiştiremezsiniz. Göz simgesi, bir katı kapatır. Duvarlar yalnızca kendi katlarındaki duvarlarla birleşir.

Bir katı altındakinden başlatmak için istediklerinizi seçin, paneldeki katı seçin ve {{ui:Oraya kopyala}} düğmesine basın.

## Katları sayfalara koyun

Bir sayfada bir görünüm penceresi seçin ve Özellikler içinde {{ui:Gösterilen kat}} altından onun katını seçin. Hiçbir kat seçilmemiş bir görünüm penceresi, açık olan tüm katları gösterir.

## Dosyayı başka birine gönderin

Diğer CAD programları katları bilmez, bu yüzden her katı birlikte gösterirler. Bir dosyayı göndermeden önce panelde {{ui:Katları katmanlara çevir}} seçin ya da `FLOORLAYERS` yazın. Her nesne, katının adını taşıyan bir katmana taşınır; örneğin `Zemin kat-P-Walls`; böylece her katı yine kapatabilirsiniz. Geri al bunu geri alır. CadCraft, kaydettiği DWG ya da DXF dosyasında katları korur.
