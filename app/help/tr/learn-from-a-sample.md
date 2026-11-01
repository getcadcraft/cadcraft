---
title: Örnek bir çizimden öğrenin
summary: CadCraft'ın örnek evini veya örnek uygulanmış projesini açın ve sayfalarında, künyesinde, ölçülendirmelerinde ve katmanlarında gezinin.
keywords: örnek, örnekler, örnek çizim, öğren, eğitim, adım adım, künye, sayfalar, uygulanmış proje, mimari takım, bir örnek aç
from: aa1f960a
---

## Neyi öğreneceksiniz

Bitmiş bir takımın nasıl oluşturulduğunu: model uzayı, bir ölçekte görünüm pencereleri olan sayfalar, özniteliklerle bir künye, fit ve inç ile milimetre cinsinden ölçülendirmeler, katmanlar. Örnekler CadCraft'a aittir ve her amaçla kullanımı serbesttir (CC0).

## Bir örnek açın

1. Sol panelde {{ui:Çizim}} altında {{ui:Bir örnek aç}} düğmesine tıklayın (veya {{cmd:SAMPLES}} yazın; şerit stillerinde {{ui:Dosya}} menüsündedir).
2. {{ui:Örnek ev}} yanındaki {{ui:Aç}} düğmesine tıklayın. Kendi sekmesinde açılır, böylece çalışmanız açık kalır.

## Modelde gezinin

1. {{ui:Sınırlar}} düğmesine tıklayın (veya `ZOOM`, ardından `E` yazın): kat planı, ön görünüş, bir kesit ve bir duvar detayı.
2. {{ui:Katmanlar}} içinde ölçülendirmeleri gizlemek için `A-ANNO-DIMS` yanındaki göze, göstermek için yeniden tıklayın.
3. Bir kapıya tıklayın: Özellikler `DOOR-32` blok başvurusunu gösterir. Kapılar ve pencereler döndürülmüş ve aynalanmış olarak yerleştirilen bloklardır.

## Sayfalar

1. Çizimin altında {{ui:A-101 FLOOR PLAN}} sekmesine tıklayın: 1/4" = 1'-0" ölçeğinde tek görünüm pencereli bir ARCH D sayfası.
2. Modelde görünüm penceresi üzerinden çalışmak için pencerenin içine çift tıklayın; geri dönmek için dışına çift tıklayın.
3. {{ui:A-501 DETAILS}} duvar detayını 1 1/2" = 1'-0" ölçeğinde gösterir: aynı model, başka bir ölçek.

## Künye

1. Herhangi bir sayfada künyeye çift tıklayın: {{ui:Öznitelikleri düzenle}} PROJECT, TITLE, SCALE, DATE, DRAWN ve SHEET alanlarını listeler.
2. DRAWN değerini baş harflerinizle değiştirin ve {{ui:Tamam}} düğmesine tıklayın.
3. Künyenin kendisini her sayfada değiştirmek için seçin ve {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Yerinde düzenle}} seçin. Bkz. [Öznitelikler](topic:attributes).

## Uygulanmış proje

{{ui:Örnek uygulanmış proje}} örneğini aynı şekilde açın. `SCAN-SLICE` üzerindeki gri noktalar bir taramanın dilimidir; `AB-WALL` üzerindeki duvarlar bunların üzerinden izlenmiştir. Doğu duvarı 35 mm dikliğinden dışarıdadır: ölçülendirmeler bunu iki kez söyler, milimetre cinsinden (`AB-DIMS-MM`) ve fit ve inç cinsinden (`AB-DIMS-FTIN`, bir ölçüm ölçeği üzerinden aynı uzunluklar). `REV-1` üzerindeki kırmızı bulutlar, ölçümün bulduklarını işaretler.

## Sonraki adım

- [Ölçülendirme metni boyutunu değiştirme](topic:change-dimension-text-size)
- [PDF'e çıktı alma](topic:plot-pdf): {{ui:A-101 FLOOR PLAN}} çıktısını alın.
