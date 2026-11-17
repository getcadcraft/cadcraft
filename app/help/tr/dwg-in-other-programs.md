---
title: CadCraft DWG dosyasını başka programlarda açın
summary: CadCraft'ın kaydettiği bir DWG'nin hangi programlarda açıldığı, neyin denetlendiği ve bir program şikâyet ettiğinde ne yapılacağı.
keywords: dwg, başka programlarda aç, uyumluluk, açılıyor mu, denetim, trueview, diğer cad programları, dxf, denetle, dwg olarak farklı kaydet
from: 0f8c15c4
---

## CadCraft ne yazar

{{ui:Kaydet}} gerçek bir DWG yazar; çizimin geldiği sürümde ya da {{ui:Farklı kaydet}} içinde seçtiğiniz sürümde: AutoCAD 2000, 2004, 2007, 2010, 2013 ya da 2018. Arkanızda hiçbir şey dönüştürülmez: geçmiş, yolda değişen her şeyi listeler (örneğin 2000 DWG'de gerçek renk, en yakın standart renk olarak yazılır).

## Nerede açıldığı

CadCraft'ın yazdığı her DWG, her sürümde, CadCraft olmayan üç program tarafından açılır: ODA File Converter (dosyayı denetler ama içindeki hiçbir şeyi onarmaz), LibreDWG ve libdxfrw. Okumaları CadCraft'ınkiyle karşılaştırılır: nesneler, katmanlar, bloklar ve öznitelikler, ölçülendirmeler, taralamalar, sayfalar ve görünüm pencereleri.

CadCraft'ın DWG dosyalarının AutoCAD'de ve ücretsiz DWG TrueView'da açılması Windows'ta, nesne türü türü denetleniyor (AUDIT, katmanlar, sayfalar, ölçülendirmeler, taralamalar, öznitelikler, dinamik bloklar, kırpılmış başvurular, resimler). Sonuçlar hazır olunca burada listelenecek.

## Bir program şikâyet ederse

1. DXF olarak yeniden kaydedin ({{ui:Farklı kaydet}} › {{ui:DXF 2000}}) ve onu açın: çoğu program DXF okur.
2. DWG'yi eski bir sürümde kaydedin (2013 ya da 2010).
3. Bize Discord'da hangi program ve sürümle ne dediğini bildirin; dosya en çok yardımcı olur.
