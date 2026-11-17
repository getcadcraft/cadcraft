---
title: Kopyalama, yapıştırma ve çoğaltma
summary: Nesneleri CadCraft'ın panosuna kopyalayın, tıkladığınız yere ya da olduğu yere yapıştırın, işaretçiyle çoğaltın ve işi başka bir çizimden ya da sekmeden getirin.
keywords: kopyala, kes, yapıştır, yerinde yapıştır, çoğalt, pano, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, çizimler arası, başka sekme, temel nokta
from: 4b9f29d3
---

## Neler öğreneceksiniz

Nesneleri panoya nasıl kopyalayacağınızı, tıkladığınız yere ya da kendi koordinatlarına nasıl yapıştıracağınızı, işaretçiyle nasıl çoğaltacağınızı, nasıl keseceğinizi ve başka bir çizime nasıl taşıyacağınızı. Bunların hepsi araç çubuğunun {{ui:Düzenle}} grubunda da vardır: {{ui:Kopyala}}, {{ui:Yapıştır}} ve {{ui:Daha fazla}} menüsü.

## Tıkladığınız yere kopyalayın ve yapıştırın

1. Nesneleri seçin: tıklayın ya da bir pencere sürükleyin.
2. {{key:Mod+C}} tuşuna basın ya da {{ui:Düzenle}} grubunda {{ui:Kopyala}} öğesine tıklayın. Komut satırı kaç nesnenin kopyalandığını söyler. Seçili kalırlar.
3. {{key:Mod+V}} tuşuna basın ya da {{ui:Yapıştır}} öğesine tıklayın. Kopya imlecin üstünde belirir; kopyalanan nesnelerin sol alt köşesinden sarkar.
4. Bu köşenin nereye gideceği yere tıklayın ya da `2000,500` gibi bir nokta yazıp {{key:Enter}} tuşuna basın. Nesne yakalamaları ve Ortogonal her zamanki gibi çalışır.

Yapıştırılan nesneler seçilidir; bu yüzden hemen taşıyabilir ya da değiştirebilirsiniz. Tek bir {{key:Mod+Z}} tüm yapıştırmayı geri alır.

:::tip
Kopyanın bir duvarın köşesi gibi seçtiğiniz bir noktadan sarkmasını mı istiyorsunuz? `COPYBASE` yazın, temel noktaya tıklayın, nesneleri seçin ve {{key:Enter}} tuşuna basın. Yapıştırdığınızda o nokta tıkladığınız yere yerleşir. Her kopyayı sol alt köşesi yerine merkezinden sarkıtmak için, [CadCraft ayarları](topic:settings) içinde {{ui:Yapıştırma noktası}} değerini değiştirin.
:::

## Olduğu yere yapıştırın

{{key:Mod+Shift+V}} tuşuna basın ya da {{ui:Daha fazla}} menüsünden {{ui:Yerinde yapıştır}} seçin. Kopya, kopyalandığı tam koordinatlara, tıklamadan konur. Nesneleri başka bir çizime aynı yerde taşımak ya da bir sayfadan başka bir sayfaya taşımak için kullanın.

## Çoğaltın ve taşıyın

1. Nesneleri seçin.
2. {{key:Mod+D}} tuşuna basın ya da {{ui:Daha fazla}} menüsünden {{ui:Çoğalt ve taşı}} seçin.
3. Bir kopya orijinalin üstüne oturur ve işaretçiyle birlikte hareket eder. Gideceği yere tıklayın. `@0,-600` gibi bir yer değiştirme ya da imlece doğru bir mesafe de yazabilirsiniz.

Tıklamadan önce {{key:Esc}} tuşuna basarsanız hiçbir şey bırakılmaz. Çoğaltma tek bir geri alma adımıdır ve panoya dokunmaz.

## Kes

{{key:Mod+X}} tuşuna basın ya da {{ui:Daha fazla}} menüsünden {{ui:Kes}} seçin. Nesneler panoya gider ve tek bir geri alma adımında çizimden silinir. Onları {{key:Mod+V}} ya da {{key:Mod+Shift+V}} ile geri yapıştırın.

## Çizimler ve sekmeler arası

Pano, başka bir çizim açtığınızda kopyasını tutar ve bu tarayıcıdaki her CadCraft sekmesiyle paylaşılır. Bir sekmede kopyalayın, sonra başka bir sekmede {{key:Mod+V}} tuşuna basın.

- Nesnelerin kullandığı bloklar onlarla birlikte gelir. Yapıştırdığınız çizimde aynı adlı bir blok zaten varsa, AutoCAD'deki gibi kendi tanımı kullanılır.
- Nesnelerin kullandığı katmanlar, sahip oldukları renk ve ayarlarla eklenir.
- İki çizim farklı birimler kullandığında kopya yeniden ölçeklenmez: CadCraft bunu söyler ve sonrasında {{cmd:SCALE}} kullanabilirsiniz.
- Görünüm pencereleri sayfalarında kalır; kopyaya alınmazlar.

:::note
Pano CadCraft'a özeldir. CadCraft nesnelerini başka bir programa yapıştıramazsınız, ya da başka bir programdan CadCraft'a yapıştıramazsınız: bunun yerine DWG ya da DXF olarak kaydedin. Çok büyük bir kopya sekmeler arasında paylaşılamayacak kadar büyük olabilir; komut satırı o zaman yalnızca bu sekmenin yapıştırabileceğini söyler.
:::

## Sık yapılan hatalar

- **{{key:Mod+V}} komut satırına metin yapıştırdı.** Orada bir şey yazmıştınız; tuşlar o metin üzerinde çalıştı. Temizlemek için {{key:Esc}} tuşuna basın, sonra {{key:Mod+V}} tuşuna yeniden basın.
- **Hiçbir şey olmadı ve durum çubuğu geçerli komutu bitirmenizi söylüyor.** Başka bir komut çalışıyor. Önce {{key:Esc}} tuşuna basın.
- **Yapıştırma çok uzağa düştü.** Kopyaladığınız nesnenin sol alt köşesinden sarkar; bu, yanlışlıkla seçtiğiniz uzak bir nesne olabilir. {{ui:Yerinde yapıştır}} kullanın ya da `COPYBASE` ile kopyalayın.
- **"Hiçbir şey yapıştırılmadı" ve bir neden.** Başka bir sekmenin panoda bıraktığı şey okunamadı (bozulmuş ya da elle değiştirilmiş). Nesneleri yeniden kopyalayın.

Tuşların tam listesi için [Klavye ve fare](topic:keyboard), her istem için [Komut başvurusu](topic:commands#clipboard) bölümüne bakın.
