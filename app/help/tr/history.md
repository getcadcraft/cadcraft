---
title: Geçmiş: sürümler ve neyin değiştiği
summary: Bir çizimin sürümlerini görün (kaydettiğinizde Studio'nun tuttuğu kopyalar ve bulutunkiler), birini açın ya da geri yükleyin ve iki sürümü karşılaştırıp neyin değiştiğini renkle görün.
keywords: geçmiş, sürümler, sürüm geçmişi, geri yükle, önceki sürüm, kaydetmeyi geri al, karşılaştır, çizimleri karşılaştır, dwgcompare, değişiklikler, eklendi, kaldırıldı, değiştirildi, anlık görüntü, yedek, bulut sürümleri
from: 141d37b3
---

## Ne yapacaksınız

Bir çizimin eski bir sürümüne bakmak ve şu anki hâlinden farklı olanların listesini almak: neyin eklendiği, neyin kaldırıldığı ve neyin değiştiği, çizimde renkle işaretlenmiş olarak.

## Geçmişi açın

`HISTORY` (ya da `HIST`) yazıp {{key:Enter}}'a basın ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsünden {{ui:Geçmiş…}} seçin. Panel çizimin yanında açılır ve siz çalışırken açık kalır; böylece renkleriyle birlikte çizimi kaydırabilir ve yakınlaştırabilirsiniz.

Geçmiş CadCraft Studio'da çalışır. Bir tarayıcıda panel yalnızca bunu söyler.

## Sürümler nereden gelir

- **Bu bilgisayarda.** Studio'da bir çizimi bir dosyadan her açtığınızda ve her kaydettiğinizde, Studio dosyanın bir kopyasını bu bilgisayardaki kendi depolamasında tutar. İlk kopya {{ui:Açıldığı haliyle}} olarak adlandırılır: ilk kaydınızın üzerine yazmadan önceki dosya. Studio her çizimin en yeni 25 kopyasını tutar; tüm kopyalar birlikte 400 MB'ı aşınca en eskileri gider. Hiçbir şey değiştirmeyen bir kayıt hiçbir kopya tutmaz. Hiçbir şey yüklenmez.
- **Bulutta.** Studio'da bulut dosyalarınızdan bir çizim açtığınızda, panel ayrıca {{ui:Bulutta}} başlığında bulutun tuttuğu her sürümü, numarası, kaydeden kişi ve notuyla birlikte listeler. Panel bunları yalnızca okur. CadCraft kendi kayıtlarını henüz buluta göndermez; bu yüzden bunlar başka cihazlardan ve web'den kaydedilmiş sürümlerdir. Oturumun süresinin dolduğunu belirtirse Studio'da yeniden oturum açın.

Henüz kaydetmediğiniz bir çizimin kopyası yoktur: önce kaydedin.

## Bir sürümü açın ya da geri yükleyin

- {{ui:Aç}} o sürümü kendi sekmesinde açar. Çiziminize dokunulmaz.
- {{ui:Geri yükle}} bu çizimi o sürümle değiştirir. Önce sorar. Studio, bu işlemden önce çizimin şu anki hâlinin bir kopyasını Geçmiş'te ({{ui:Geri yüklemeden önce}} olarak işaretli) tutar ve siz kaydedene kadar dosyaya hiçbir şey yazılmaz. Geri yüklemeyi {{key:Mod+Z}} ile geri alamazsınız; bunun yerine o kopyayı kullanın.

## Karşılaştırma

1. Bir sürümde {{ui:Karşılaştır}}'a tıklayın. {{ui:Çizimin şu anki hali}} ile karşılaştırılır; onu başka bir sürümle karşılaştırmak için önce {{ui:Şununla karşılaştır}} içinden o sürümü seçin.
2. Listenin altındaki sonucu okuyun: kaç nesnenin eklendiği, kaldırıldığı ve değiştiği ile bunların listesi. Listede bir öğeye tıklayın; görünüm o öğeye geçer.
3. Çizimde:
   - **yeşil** nesneler eklendi,
   - **kırmızı** nesneler kaldırıldı (yalnızca eski sürümde vardırlar),
   - **turuncu** nesneler değişti: yeni şekil dolu, eski şekil kesikli çizgidir.
4. {{ui:Çizimde göster}} renkleri açar ve kapatır; {{ui:Renkleri temizle}} sonucu kaldırır. Paneli kapatmak da renkleri temizler.

Liste, değişen bir nesnede neyin değiştiğini söyler: metnini, taşındığını, şeklini, katmanını, rengini, çizgi tipini ya da çizgi kalınlığını. Her sayfa kendi başına karşılaştırılır; renkler açık olan sayfada görünür.

:::note
Bir çizimde nesnelerin kalıcı bir numarası yoktur, bu yüzden CadCraft nesneleri ne oldukları ile eşleştirir: iki tarafta aynı olan nesne değişmemiştir; aynı türde ve katmanda olup eski bir nesnenin kendi boyutu içinde bulunan nesne, değişmiş aynı nesnedir; geri kalanlar eklenmiş ya da kaldırılmıştır. Çok uzağa taşınan bir nesne bir yerde kaldırılmış, diğer yerde eklenmiş gibi görünür. Blok başvurusu, bloğunun içeriğini sayar.
:::

## Sık yapılan hatalar

- **"Henüz kopya yok."** Studio, diskte bir dosyası olan bir çizimin her açılışında ve kaydında bir kopya tutar. Bir tarayıcı sekmesinden açılmış ya da hiç kaydedilmemiş bir çizimin kopyası yoktur.
- **Bulut listesi yok.** Liste, Studio'da buluttan açılan bir çizim için görünür; diskten açılan bir dosya bulut çizimi değildir.
- **Her şey değişmiş görünüyor.** Farklı programlarca kaydedilen iki sürüm aynı çizimi farklı biçimlerde yazar (anonim blok adları, yuvarlama). CadCraft ile kaydedilmiş sürümleri karşılaştırın.
