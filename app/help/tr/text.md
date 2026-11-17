---
title: Metin ve etiket ekleme
summary: Tek satırlı metinle oda etiketleri yerleştirin, yerinde yazılan paragraf metniyle genişliğine göre kırılan notlar yazın ve metni sonradan düzenleyin.
keywords: metin, dtext, mtext, mleader, multileader, leader, revcloud, revizyon bulutu, bulut, bul, değiştir, bul ve değiştir, paragraf, kırma, satır aralığı, etiket, not, açıklama, yükseklik, hizala, textmask, arka plan maskesi, maske, wipeout, döndürme, metni düzenle, ddedit, textedit, yazı tipi
from: 4b76be99
---

## Ne yapacaksınız

Odalarının ortasında iki oda etiketi, genişliğine göre kırılan bir not, ardından etiketlerden birinde bir düzeltme.

## Metin yüksekliği ve çizim ölçeği

Metin yüksekliği çizim birimleriyle verilir. 1:50 ölçekte çıktı alınacak milimetrik bir çizimde, kâğıtta 2.5 mm yüksekliğindeki metin modelde 2.5 × 50 = 125 birim yükseklikte olmalıdır. Sayfa sekmesinde kâğıt birimleriyle çizersiniz; dolayısıyla orada 2.5, kâğıtta 2.5 mm demektir.

## Ortalanmış bir etiket yerleştirin

1. `DT` yazıp {{key:Enter}} tuşuna basın (veya araç çubuğunda {{ui:Metin}} düğmesine tıklayın). İstem şöyle okunur: `Metnin başlangıç noktasını belirtin [Hizala (J)]:`
2. `J` yazıp {{key:Enter}} tuşuna basın.
3. `Bir seçenek girin [Sol (L)/Merkez (C)/Sağ (R)/Orta (M)/TL/MC] <L>:` isteminde `MC` yazıp {{key:Enter}} tuşuna basın.
4. `Metnin ekleme noktasını belirtin` isteminde bir odanın ortasına tıklayın.
5. `Yüksekliği belirtin` isteminde `250` yazıp {{key:Enter}} tuşuna basın.
6. `Metnin döndürme açısını belirtin <0>` isteminde {{key:Enter}} tuşuna basın.
7. `Metni girin` isteminde `MUTFAK` yazıp {{key:Enter}} tuşuna basın.

Etiket görünür, tıkladığınız noktada ortalanmış olarak.

8. Komutu bitirmek için boş `Metni girin` isteminde {{key:Enter}} tuşuna basın.

## Kırılan bir not yazın

Paragraf metni ({{cmd:MTEXT}}) bir genişliğe göre kırılır ve doğrudan çizime yazılır.

1. `T` yazıp {{key:Enter}} tuşuna basın veya araç çubuğunda {{ui:Paragraf}} düğmesine tıklayın.
2. `İlk köşeyi belirtin` isteminde notun sol üst köşesinin olacağı yere tıklayın.
3. Önce yüksekliği değiştirmek için Yükseklik (`H`) yazıp {{key:Enter}} tuşuna basın, `250` yazıp {{key:Enter}} tuşuna basın.
4. `Karşı köşeyi belirtin [Yükseklik (H)/Hizala (J)/Satır aralığı (L)/Döndürme (R)/Genişlik (W)]` isteminde ilk köşenin sağına tıklayın. Karşıdaki mesafe metnin kırılacağı genişliktir; aşağı doğru ne kadar tıklarsanız tıklayın bu sınırlanmaz.
5. Çizimin üzerinde imleci içinde bulunan bir kutu açılır. `AKSİ BELİRTİLMEDİKÇE TÜM ÖLÇÜLER MİLİMETREDİR` yazın. Yazdıkça sözcükler genişliğe göre kırılır.
6. Yeni bir paragraf başlatmak için {{key:Enter}} tuşuna basın ve `SAHADA KONTROL EDİN` yazın.
7. {{key:Mod+Enter}} tuşuna basın, {{ui:Tamam}} düğmesine tıklayın veya kutunun dışında bir yere tıklayın. Not tek bir nesnedir.

Kutunun üstündeki çubuk, yazarken {{ui:Yükseklik}}, {{ui:Satır aralığı}} (1 normaldir, 1.5 ise normalin bir buçuk katıdır), {{ui:Genişlik}} (0 = kırma yok) ve {{ui:Hizala}} değerlerini değiştirir. {{key:Esc}} veya {{ui:İptal}} kutuyu hiçbir şey eklemeden kapatır.

İkinci köşedeki seçenekler: Yükseklik (`H`), Hizala (`J`) (`TL` sol üst … `BR` sağ alt: yerinde kalan kutu köşesi veya ortası), Satır aralığı (`L`), Döndürme (`R`), ve Genişlik (`W`): ikinci köşe yerine yazılan bir genişlik.

:::note
Kutu açıkken {{key:Space}} bir boşluk yazar ve {{key:Enter}} yeni bir paragraf başlatır. Kaydedilen bir DWG, paragraf metnini MTEXT olarak tutar; DXF R12'de paragraf metni yoktur, bu yüzden her satır kendi metni olarak kaydedilir.
:::

### Bunun yerine birkaç tek satır

{{cmd:TEXT}} (`DT`) her seferinde bir satır ister: her {{key:Enter}} bir sonraki satırı başlatır; satır, metin yüksekliğinin 1.667 katı kadar aşağıya konur ve her satır kendi nesnesidir. Bitirmek için boş bir satırda {{key:Enter}} tuşuna basın.

## Hizalama seçenekleri

| Seçenek | Tıkladığınız nokta |
|---|---|
| Sol (varsayılan) | Taban çizgisinin sol ucu |
| Merkez | Taban çizgisinin ortası |
| Sağ | Taban çizgisinin sağ ucu |
| Orta, MC | Metnin ortası, hem yatay hem dikey olarak |
| TL | Sol üst köşe |

## Metni düzenleyin

1. Bir metin nesnesine çift tıklayın. Paragraf metniyle aynı kutuda açılır ve imleç sonda olur.
2. Sözcükleri değiştirin.
3. {{key:Mod+Enter}} tuşuna basın veya kutunun dışına tıklayın. Çizimdeki metin değişir; {{key:Esc}} ise onu olduğu gibi bırakır.

{{cmd:TEXTEDIT}} (`ED`) aynısını yapar: birbirinden sonra metinleri seçin ve bitince {{key:Enter}} tuşuna basın.

Bunun yerine, değiştirmek için bir metin seçin ve sağ panelde değiştirin: {{ui:Metin}}, {{ui:Yükseklik}}, {{ui:Kırma genişliği}} (0 = kırma yok), {{ui:Satır aralığı}}, {{ui:Döndürme}}, X ve Y konumu ile {{ui:Hizala}}. {{ui:Hizala}} listesi ayrıca, bazen diğer programlardan gelen metinlerin kullandığı Sol alt seçeneğini de sunar.

## Diğer programlardan gelen paragraf metnindeki biçimlendirme

Bir DWG veya DXF'teki paragraf metni içinde kodlar taşıyabilir: sözcük başına renkler, kalın ve italik, altı çizili, üstü çizili ve üstü çizgili, 1/2 gibi üst üste yığılmış kesirler ve bir sözcük için farklı bir yükseklik. CadCraft bu kodları korur, çizer (ekranda ve çıktı alınan bir PDF'te) ve değişmeden geri kaydeder.

Böyle bir metni düzenlediğinizde (çift tıklama, {{cmd:TEXTEDIT}}, sağ panelin Metin alanı veya Değiştir ile {{cmd:FIND}}), düz sözcüklerini düzenlersiniz. Yazdığınız bir sözcük yanındaki parçaya girer ve onun rengini ve stilini alır; diğer kodlar yerlerinde kalır. Üst üste yığılmış bir kesrin sayılarını yeniden yazarsanız, o kesir düz metin olur. Tüm metni Metin alanından ayarlamak, yalnızca hangi sözcüklerin kaldığını anlayabildiği yerde kodları korur.

Yazı tipi adları (`\F`) korunur ve kaydedilir, ancak her şey tek Helvetica tarzı yazı tipiyle çizilir. Kodları yazmak için bir araç çubuğu henüz yapılmadı.

## Bir şeye işaret edin: çoklu belirtme çizgileri

{{ui:Açıklama}} grubundaki {{ui:Belirtme çizgisi}} ({{cmd:MLEADER}}, `MLD`) bir ok, bir belirtme çizgisi, kısa bir bağlantı ve bir notu tek bir nesne olarak çizer.

1. {{ui:Belirtme çizgisi}} düğmesine tıklayın. `Belirtme çizgisi ok ucu konumunu belirtin` isteminde notun ilgili olduğu yere tıklayın.
2. `Belirtme çizgisi bağlantı konumunu belirtin` isteminde notun gideceği yere tıklayın. Bağlantı, tıkladığınız tarafa doğru döner.
3. Açılan kutuya notu yazın ve {{key:Mod+Enter}} tuşuna basın.

İlk soruda `A` ve `L`, ok ucu boyutunu ve bağlantı uzunluğunu ayarlar; metin yüksekliği, yeni ölçülendirmeler için {{ui:Metin yüksekliği}} değerinin {{ui:Genel ölçek}} ile çarpımından gelir. Sözcüklerini değiştirmek için bir çoklu belirtme çizgisine çift tıklayın. Tutamaçlar ok ucunu ve bağlantıyı taşır; not bağlantıyı izler. {{ui:Özellikler}} içinde: {{ui:Metin}}, {{ui:Yükseklik}}, {{ui:Kırma genişliği}}, {{ui:Ok ucu boyutu}} ve {{ui:Bağlantı mesafesi}}.

:::note
Çoklu belirtme çizgileri DWG'de gerçek çoklu belirtme çizgileri olarak kaydedilir. DXF R12 ve 2000'de çoklu belirtme çizgisi yoktur; bu yüzden orada çizdikleri çizgiler, ok ucu ve metin olarak kaydedilirler.
:::

## Değişiklikleri bir revizyon bulutuyla işaretleyin

{{ui:Açıklama}} › {{ui:Daha fazla}} › {{ui:Revizyon bulutu}} ({{cmd:REVCLOUD}}, `RC`) değişen şeyin etrafına bir yay bulutu çizer. Geçmiş, yay uzunluğunu ve kullanacağı türü gösterir.

- **Dikdörtgen** (ilk seferde): iki köşeye tıklayın.
- **Çokgen (P)**: köşelere tıklayın, {{key:Enter}} bulutu kapatır.
- **Serbest çizim (F)**: başladığı yere tıklayın ve tıklamadan imleci alanın etrafında hareket ettirin; her yay uzunluğunda bir yay eklenir. Kapatmak için tıklayın veya {{key:Enter}} tuşuna basın.
- **Nesne (O)**: kapalı bir çoklu çizgi, daire veya elips (ya da bir çizgi, yay veya açık çoklu çizgi) seçin; o, bulut olur. `Yönü ters çevirilsin mi?` istemine `Y` yanıt verirseniz yaylar içe doğru döner.
- **Yay uzunluğu (A)**: her yayın uzunluğu. Çıktı ölçeğine uygun birini seçin.

Bulut, yaylardan oluşan kapalı bir çoklu çizgidir; bu yüzden her biçimde kaydedilir.

## Sözcükleri bulun ve değiştirin

{{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Bul ve değiştir}} ({{cmd:FIND}}) açık sekmedeki metinlerde, blok özniteliklerinin değerlerinde ve ölçülendirme metinlerinde arar (ya da yalnızca seçili nesnelerde).

1. {{ui:Bul}} alanına sözcükleri yazın. Liste, her yerini ve sayısını gösterir.
2. Gerekirse {{ui:Büyük/küçük harfe duyarlı}}, {{ui:Yalnızca tam sözcükler}} veya {{ui:Joker karakter kullan (* ve ?)}} seçeneğini seçin ve aranmaması gerekenlerin işaretini kaldırın.
3. Bu nesneleri seçmek için {{ui:Bulunanları seç}} düğmesine tıklayın ya da {{ui:Şununla değiştir}} alanına yeni sözcükleri yazın (liste her birinin neye dönüşeceğini gösterir) ve {{ui:Tümünü değiştir}} düğmesine tıklayın. Tek bir {{key:Mod+Z}} tüm değiştirmeleri geri alır.

Bir ölçülendirmenin ölçülen değeri metin değildir, bu yüzden hiçbir zaman değiştirilmez: `<> TYP.` içinde yalnızca `TYP.` değiştirilebilir.

## Bir etiketin arkasındaki çizgileri gizleyin

1. Metinleri seçin, {{cmd:TEXTMASK}} yazın ve {{key:Enter}} tuşuna basın.
2. `B` (Arka plan), çizimin arka planını arkalarına boyar; `C` (Renk) bir renk numarası ister. `O` (Kaldır) maskeyi kaldırır.
3. `Kenar ofset faktörü`: {{key:Enter}} 1.5'i korur; metnin etrafında yarım metin yüksekliği kadardır.

Maske, metnin altındaki çizgileri ekranda ve çıktı alırken kapatır. DWG 2004 veya sonrası ve DXF 2000 maskeyi korur; DWG 2000 biçimi ve DXF R12 koruyamaz ve kaydetme bunu bildirir.

## Yazı tipi

Tüm metin, ekranda ve PDF'lerde Helvetica tarzı bir yazı tipiyle çizilir. Açılan çizimlerdeki metin sözcüklerini, yüksekliğini ve konumunu korur, ancak özgün yazı tipini korumaz (paragraf metni içindeki bir yazı tipinin adı dosyada tutulur, yukarıya bakın).

Çıktı alınan PDF'lerde, herhangi bir Avrupa alfabesindeki, Kiril veya Yunan metin olduğu gibi basılır (PDF gerekli harfleri taşır ve metni yine de seçip arayabilirsiniz). Çince, Japonca ve Korece metin de olduğu gibi basılır (çıktı, ilk gerektiğinde daha büyük bir yazı tipini indirir). Arapça, Farsça, Urduca ve İbranice metin de olduğu gibi basılır (sonraki bölüme bakın). Hiçbir yazı tipinde harfi olmayan karakterler "?" olarak basılır ve geçmiş kaçının olduğunu söyler.

## Soldan sağa olmayan metin: Arapça, Farsça, Urduca, İbranice

Metni başka yerlerde olduğu gibi yazın: {{cmd:TEXT}} ve {{cmd:MTEXT}} her satırı okuma sırasıyla çizer. İlk harfi Arapça veya İbranice olan bir satır sağdan sola okunur; içindeki sayılar ve Latin sözcükler kendi soldan sağa sıralarını korur ve Arap alfabesi harfleri birbirine bağlanır. Bir Latin harfiyle başlayan satır soldan sağa kalır, içindeki sağdan sola sözcükler yerlerinde durur. Çok satırlı bir metnin her paragrafı kendi yönüne sahiptir ve kırılan bir paragraf bunu her satırda korur.

Metin yazdığınız gibi saklanır; bu yüzden DWG ve DXF dosyaları onu diğer programlarla değişmeden alışverişe sokar. Ekleme noktası ve hizalama ({{ui:Sol}}, {{ui:Merkez}}, {{ui:Sağ}}) diğer metinlerle aynı tarafı ifade eder: sağdan sola bir notun sağ ucundan asılması gerekiyorsa {{ui:Sağ}} gerekir.

Ekranda harfler sisteminizin yazı tiplerinden gelir. Çıktı alınan bir PDF'te İbranice, Latin metinle aynı gömülü yazı tipini kullanır; Arap alfabesi metni çıktı alınırken bir yazı tipi daha indirir (1 MB'ın altında, yalnızca bir kez) ve tüm PDF o yazı tipiyle basılır. Bu yazı tipinin üç Urduca karakter için (heh goal, yeh barree ve Urduca nokta) kendi şekli yoktur: en yakın Arapça harfin şekliyle basılırlar. Hem Arap alfabesi hem de Çince, Japonca veya Korece metin içeren bir çizim, ikisinden birini "?" olarak basar, çünkü bir çıktı tek yazı tipi taşır. Yüklenen bir SHX yazı tipindeki metin, yazı tipi harfleri Unicode yerlerinde tutuyorsa sıralanır ve birleştirilir; harfleri zaten şekillendirilmiş eski yazı tipleri için {{cmd:SHXFONTS}} içinde daha önce olduğu gibi {{ui:Ters çevir}} kullanın.

## Sık yapılan hatalar

- **Metin görünmeyecek kadar küçük.** Yükseklik çizim birimleriyle verilir. Büyük bir çizimde büyük bir yükseklik kullanın (yukarıya bakın) veya yakınlaştırın.
- **Komut bir satırdan sonra bitti.** {{cmd:TEXT}} içinde boş bir satırda {{key:Enter}} tuşuna bastınız. Yeniden başlatın veya {{key:Enter}} tuşunun yeni bir paragraf başlattığı paragraf metnini (`T`) kullanın.
- **`T` tek satır istemek yerine bir kutu açtı.** AutoCAD'de olduğu gibi `T` paragraf metnidir ({{cmd:MTEXT}}); tek satırlı metin `DT`'dir.
- **Metin AutoCAD'de farklı bir yerde kırılıyor.** CadCraft Helvetica genişlikleriyle kırar; başka bir yazı tipi bir sözcüğü satıra biraz daha fazla ya da az sığdırabilir.
- **Aynalanmış bir kopyadaki metin.** Aynalanmış olarak yerleştirilir ama soldan sağa okunabilir kalır.
