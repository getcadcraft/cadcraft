---
title: As-built noktalarını denetleyin
summary: Bir ölçü ekibinin ölçtüğü noktaları okuyun ve bunları çizimin nokta ve bloklarıyla karşılaştırın: tolerans içinde ya da dışında, ölçülmemiş, fazla. Çizimde işaretlenir ve bir CSV raporu olarak yazılır.
keywords: as built, as-built, asbuilt, ölçü, toplam istasyon, aplikasyon, kazık çakma, nokta dosyası, csv, txt, pnezd, penzd, xyz, tolerans, sapma, denetim, karşılaştır, exportpoints, yerleşim noktaları
from: f7c35208
---

{{cmd:ASBUILT}} (takma adı ASB), {{cmd:EXPORTPOINTS}} komutunun diğer yarısıdır: çizimin noktalarını saha için dışa aktarırsınız, ekip bunları sahaya aplike eder ve inşa edileni ölçer; ASBUILT da onların dosyasını çizimle karşılaştırır.

1. {{cmd:ASBUILT}} yazın ve {{cmd:EXPORTPOINTS}} ile dışa aktardığınız aynı noktaları ve blokları seçin ({{key:Enter}} her POINT'i seçer, EXPORTPOINTS'te olduğu gibi).
2. **As-built noktalarını şuna göre eşleştirin**: **Numara** (ekip nokta numaralarınızı korudu: dışa aktardığınız ilk numarayı verin) ya da **En yakın** (kendi atışlarını numaralandırdılar: her tasarım noktası en yakın olanı alır).
3. Dosyanın birimlerini ve koordinatlarını dışa aktardığınız gibi verin (Çizim, Metre ya da Fit; Dünya ya da UCS) ve **toleransı** çizim birimleriyle yazın.
4. Ekibin CSV ya da TXT dosyasını seçin. CadCraft onu CivilCraft gibi okur: virgüller, sekmeler, noktalı virgüller ya da boşluklar, sütunlarını adlandıran bir başlık satırı ya da sütun sayısına göre PNEZD.

Komut satırı kaç noktanın eşleştirildiğini, kaçının tolerans içinde, dışında, ölçülmemiş ve fazla olduğunu ve en büyük mesafeyi söyler. **Çizimde işaretlensin mi?** Evet derseniz bunları **AS-BUILT** katmanına tek bir geri alma adımı olarak koyar: her atışta bir nokta, yanında numarası ve mesafesi; ayrıca tolerans dışındaki her atış için tasarım noktasından atışa kırmızı bir çizgi. Her noktayla birlikte bir CSV raporu indirilir: tasarım ve as-built koordinatları, doğu, kuzey ve yükseklikteki farklar ve sonuç.

Ayrıca bakın: [BIM programları için noktalar](topic:points-for-bim).
