---
title: İmleç çizim üzerinde atlıyor veya gecikiyor
summary: Çapraz imleç fareyi yumuşak biçimde izlemediğinde, daha eski veya yavaş bir bilgisayarda yapılacaklar.
keywords: imleç atlaması, imleç gecikmesi, yavaş çapraz imleç, sarsıntılı imleç, eski bilgisayar, eski ekran kartı, tümleşik grafik, donanım hızlandırma, daha akıcı imleç, yavaş dizüstü
from: 39dc9057
---

CadCraft tarayıcıda çalışır (CadCraft Studio da bir tarayıcı görünümüdür); bu nedenle içindeki hiçbir şey belirli bir ekran kartına göre yapılmamıştır. Çapraz imleç uygulama tarafından çizilir; bu da uygulamanın bir kareyi çizebildiği hız kadar hızlı hareket edebileceği anlamına gelir.

## CadCraft'ın ek özellikleri azaltmasına izin verin

1. {{ui:Ayarlar}} (sağ üstteki dişli) simgesini açın ve {{ui:CadCraft}} sekmesinde kalın.
2. {{ui:Yavaş bilgisayarlarda daha akıcı imleç}} seçeneğini seçin.
3. {{ui:Açık}} seçeneğini seçin.

Bu açıkken çizilen çapraz imleç ve seçim kutusu yerine bilgisayarınızın kendi imleci kullanılır (tam ekran çapraz imleci de dahil) ve imlecin altındaki nesne, imleç hareket ederken değil, durduğunda vurgulanır. Nesne yakalama, izleme ve lastik bant eskisi gibi çalışır.

{{ui:Otomatik}}, CadCraft'ın başlangıç ayarıdır: imleci hareket ettirirken karelerin ne kadar sürdüğünü izler ve birkaç saniye boyunca yavaş kalırlarsa bunu kendiliğinden açar. Bunu yaptığında bir kez bildirir. {{ui:Kapalı}} ise hızdan bağımsız olarak çizilen çapraz imleci korur.

## Hâlâ yavaşsa

- Tarayıcınızda donanım hızlandırmanın açık olduğunu kontrol edin: yeni bir sekmede `chrome://gpu` (veya `edge://gpu`) adresini açın. İlk satırlarda "Software only" veya "Disabled" yazıyorsa, tarayıcı ekran kartını kullanmadan çiziyor demektir. Ekran kartı sürücüsünü güncellemek bunu çoğu zaman düzeltir.
- Diğer ağır sekmeleri ve programları kapatın ve daha küçük bir tarayıcı penceresi deneyin.
- {{ui:Yardım}} menüsünden, {{ui:Sorun bildir}} seçeneğiyle bize bildirin: tarayıcı mı yoksa CadCraft Studio mu kullandığınızı, sürümünü ve gpu sayfasında ne yazdığını belirtin.
