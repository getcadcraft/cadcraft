---
title: Live TeamWork ile tek bir çizim üzerinde birlikte çalışın
summary: CadCraft Studio'dan bir Live TeamWork oturumundayken CadCraft'ta neler değişir: diğer kişilerin imleçleri ve seçimleri, birinin düzenlediği nesneler, ev sahibinin kilitleri, kendi geri almanız ve bir tarayıcıdan aynı ağda katılma.
keywords: canlı, live teamwork, studio canlı, birlikte, işbirliği, birlikte düzenleme, oturum, canlı paylaş, katıl, imleç, tutulan, düzenleme, kilit, livelock, liveunlock, livehold, katman tut, alan tut, asma kilit, geri al, ev sahibi, asistan, aynı dosya, çok kişi, yavaş, sınır, kim değiştirdi, son düzenlemeler, düzenleme günlüğü
from: 0497d2a3
---

## Neleri öğreneceksiniz

Birkaç kişi aynı çizim üzerinde aynı anda çalışırken ne gördüğünüz ve düzenlemelerinize ne olduğu. CadCraft Studio, Live TeamWork oturumunu başlatır ve oturuma katılır (Canlı paylaş, Katıl); bu sayfa çizimin kendisi hakkındadır.

## Herkes aynı anda çizer

Her zamanki gibi çizin ve düzenleyin. Kendi düzenlemeleriniz, diğerleri onları almadan önce bile hemen görünür; onların düzenlemeleri de yaptıktan kısa bir süre sonra ekranınızda belirir. Her komut çalışır: çizim, değiştirme, katmanlar, bloklar, sayfalar, ölçülendirmeler, kısıtlamalar.

İki kişi aynı nesneyi değiştirebilir. Farklı şeyleri değiştirdiğinizde, örneğin bir çizginin rengini ve bir uç noktasını, iki değişiklik de korunur. Aynı şeyi değiştirdiğinizde, sonraki değişiklik geçerli olur.

Yalnızca size ait kalanlar: geçerli katman, yeni nesnelerin rengi ve metin yüksekliği, ölçülendirme ayarlarınız, göründüğünüz görünüm, bölünmüş ekran ve UCS. Çizim ortaktır; ona nasıl baktığınız değildir.

## Çiziminizdeki diğer kişiler

- **İmleçler:** her kişinin işaretçisi, adı ve kendi rengiyle, çalıştırdığı komutla birlikte gösterilir. Ekranınızdakilere yakın çalışan kişilerin imleçlerini görürsünüz.
- **Seçimler:** birinin seçtiği şey, onun rengiyle çizilir.
- **Düzenleniyor:** birinin seçtiği bir nesnede "Ana düzenliyor" gibi bir etiket bulunur. Yine de rengini değiştirebilir ya da taşıyabilirsiniz; ancak onlar bırakana kadar silemez, patlatamaz ya da yeniden yazamazsınız. Nesneyi seçtiğinizde kimde olduğunu size söyler.
- **En son kim değiştirdi:** bu oturumda başkasının değiştirdiği tek bir nesneyi seçin; komut satırı kimin olduğunu ve değişikliğin ne olduğunu söyler ("Son değişikliği Ben yaptı: CIRCLE."). Studio'nun Canlı panelinde {{ui:Son düzenlemeler}} altında her son düzenleme listelenir. Bunların hiçbiri çizimde kaydedilmez: oturum sürdükçe geçerlidir.

## Orada çalışırken bir katmanı ya da alanı tutun

Birkaç kişinin olduğu büyük bir çizimde, şimdilik hangi kısmın sizin olduğunu belirtin:

1. `LIVEHOLD` yazın ve {{key:Enter}} tuşuna basın.
2. `L` seçin ve bir katman adı yazın (Enter geçerli katmanı korur), ya da `A` seçip bir alanın iki köşesini belirleyin.
3. O katmandaki ya da o alandaki nesnelere yönelik diğer kişilerin düzenlemeleri geri alınır ve onlara orada çalıştığınız söylenir. Alanınızı kesikli bir çerçeve olarak görürsünüz; diğerleri onu sizin renginizde ve adınızla görür; tuttuğunuz katmanlar, çizimlerinin sol üstünde listelenir.
4. `LIVEHOLD` ve ardından `R`, tuttuğunuz her şeyi bırakır. Oturumdan çıkmak da bunu bırakır.

Oturumdaki herkes tutabilir; ev sahibi de dahil. Ev sahibinin kilitleri ayrıca geçerli kalır. Bir tutma, dosyada hiçbir zaman kaydedilmez.

## Bir düzenleme geri alındığında

Ev sahibinin çizim kopyası her düzenlemeyi denetler. Birkaçı içeri alınamaz; CadCraft bunları ekranınızda geri alır ve komut satırında nedenini söyler, örneğin:

- sizden hemen önce biri nesneyi ya da ihtiyaç duyduğu katmanı ya da bloğu sildi;
- biri o nesneyi düzenliyor ya da onun katmanını ya da bulunduğu alanı tutuyor;
- ev sahibi onu kilitledi;
- yerleştirdiğiniz blok temizlendi ya da sildiğiniz bir katmanda hâlâ nesneler var.

## Geri al yalnızca kendi işinizi geri alır

{{key:Mod+Z}} ve {{ui:Geri al}}, kendi son komutunuzu, tamamını geri alır ve herkesin diğer işine dokunmaz. O zamandan beri biri aynı şeyi değiştirdiyse, hiçbir şey geri alınmaz ve komut satırı kimin değiştirdiğini söyler. {{key:Mod+Y}} yineler.

## Kilitler (ev sahibi)

Ev sahibi, nesneleri ya da bütün bir katmanı kilit açılana kadar kimsenin, ev sahibi dahil, değiştiremeyeceği şekilde koruyabilir:

1. Nesneleri seçin, sonra `LIVELOCK` yazın ve {{key:Enter}} tuşuna basın. Ya da hiçbir şey seçili değilken `LIVELOCK` yazın ve bir katmanı adıyla kilitlemek için `L` seçin: o katmana sonradan eklenen nesneler de kilitlenir.
2. Kilitli nesneler herkesin ekranında kesikli çizilir ve "Ev sahibi tarafından kilitlendi" etiketi taşır.
3. `LIVEUNLOCK` onların kilidini aynı şekilde açar.

Kilitler oturuma aittir: oturum bittiğinde sona ererler ve dosyada hiçbir zaman kaydedilmezler.

## Aynı dosyayla katılın

Ev sahibinin açtığı dosyanın aynısını açtıysanız (paylaşılan bir klasörden ya da aynı kopyadan), Studio'daki kendi CadCraft pencerenizden katılın: {{ui:Hareketli}} panelini açın ve ev sahibinin kodu ile {{ui:Buradan katıl}} seçeneğini kullanın. Yalnızca ev sahibinin açtığı andan beri yapılan değişiklikler iletilir; bu yüzden büyük bir çizim hemen hazır olur. Dosyanız farklıysa, ev sahibinin çizimi ekranınızdaki yerini alır (sizin dosyanız olduğu gibi kalır). Bu yalnızca çizimi açtığınızdan beri değiştirmediğiniz sürece çalışır.

## Canlı oturumdaki asistanlar

CadCraft pencerenize bağlı bir asistan (yapay zekâ asistanlarıyla çalışma yardımına bakın) oturuma kendi katılımcısı olarak katılır; herkese "Asistan (<adınız> aracılığıyla)" olarak gösterilir. Ev sahibi, bir kişide olduğu gibi onu içeri alır; ev sahibinin kendi asistanı hemen katılır. Değişikliklerinin kendi geri almaları vardır: {{key:Mod+Z}} sizin işinizi geri alır, asistanın geri almaysa yalnızca kendi işini geri alır. Bağlantısını kestiğinizde ya da ayrıldığınızda oturumdan çıkar ve yalnızca siz düzenleyebildiğiniz sürece oturumda çalışabilir.

## Bir tarayıcıdan katılın

Studio'su olmayan bir takım arkadaşı, aynı ağdaki bir telefon, tablet ya da bilgisayarla ev sahibinin kodunun altındaki resmi tarayabilir. CadCraft tarayıcıda açılır, komut satırında adınızı sorar ve ev sahibi sizi içeri aldığında ev sahibinin çiziminle dolar. Bir davet bağlantısı, birinin başka bir ağdan katılmasını sağlar: ev sahibinin uygulama için bir Team Cloud Plan koltuğu olması gerekir, diğer herkes ücretsiz katılır ve bağlantı yalnızca ev sahibinin oturumu açıkken çalışır.

## Bir çizimde çok kişi

Her düzenleme oturumdaki herkese gider; bu yüzden kişi sayısı arttıkça her değişikliğin herkese ulaşması daha uzun sürer ve daha yavaş dizüstü bilgisayarlar ile bağlantılar önce geride kalır. Bir oturumun olağan boyutu 20 kişidir; ev sahibi bir oturum için daha fazlasına izin verebilir (canlı birlikte çalışma yardımına bakın). Çizim çok kişiyle yavaş geliyorsa, daha az kişi, aynı anda düzenleyen daha az kişi ya da daha iyi bir bağlantı yardımcı olur.

## Oturum sona erdiğinde

Çizimi yalnızca ev sahibi kaydeder. Ev sahibi oturumu sonlandırdığında, diğer herkes kaydedilmemiş bir kopya tutar: saklamak istiyorsanız kaydedin.

:::note
Geri alınan bir şey, çizimi yeniden açana kadar kendi ekranınızda çevresindeki nesnelerin üstüne çizilir. Üst üste binen taralamalar ve dolu nesneler ev sahibinin kopyasından farklı görünebilir; çizimin kendisi aynıdır.
:::
