---
title: Belgeler: teslim alma, revizyonlar ve yayın
summary: Bir proje klasöründeki çizimleri denetim altında tutun: bir dosyayı başkasının değiştirmemesi için teslim alın, yeni bir revizyon olarak geri teslim edin, inceleme için gönderin ve bir onaylayanın adıyla yayımlayın; geçmiş, neyin neyi kullandığı, bir malzeme listesi ve revizyonu gösteren künyeler.
keywords: proje ayarları, onaylayanlar, yöneticiler, revizyon harfleri, ASME, salt okunur, revizyonları karşılaştır, kopyayı aç, partcraft, bimcraft, documents, DOCUMENTS, DOCS, kasa, belge yönetimi, pdm, teslim al, geri teslim et, check out, check in, checkout, checkin, kilitle, revizyon, rev, revizyon harfi, yayın, yayımlandı, onayla, onay, incele, eskimiş, nerede kullanılıyor, bom, malzeme listesi, künye, revizyon bloğu, proje klasörü
from: ee938722
---

## Ne üreteceksiniz

Her çizimin bir revizyonu (A.1, A.2 … sonra A, B …) ve bir durumu (Çalışma sürüyor, İncelemede, Yayımlandı, Eskimiş) olan bir proje klasörü; bir dosyayı aynı anda yalnızca bir kişinin değiştirebildiği ve her teslim alma, geri teslim etme, onay ve bozulan teslim almanın kimin ne zaman yaptığıyla birlikte kaydedildiği bir klasör.

Her şey proje klasörünün içinde, çizimlerinizin yanındaki gizli `.ccvault` klasöründe tutulur. Paylaşılan bir sürücüdeki ya da eşitlenen bir klasör tüm ekip için çalışır. Sunucu yoktur ve hiçbir şey yüklenmez.

## Belgeler'i aç

`DOCUMENTS` (ya da `DOCS`) yazın ve {{key:Enter}} tuşuna basın. Panel çizimin yanında açılır.

{{ui:Proje klasörünü seçin}} düğmesine basın ve projenin çizimlerini içeren klasörü seçin. Proje klasörleri CadCraft Studio'da ve klasör açabilen tarayıcılarda (Chrome, Edge) çalışır. Diğer tarayıcılarda panel bunu bildirir.

İlk kullanımda adınızı (yaptığınız her işe eklenir) ve bu bilgisayarın adını yazın. Oturum açtıysanız adınız zaten oradadır.

## Kasa başlatma

Henüz kasası olmayan bir klasörde {{ui:Bu klasörde bir kasa başlat}} seçeneği görünür. Projenin adını yazın. Ardından {{ui:Kasada olmayan dosyalar}} bölümünü açın ve denetim altına almak istediğiniz her dosyanın yanındaki {{ui:Ekle}} düğmesini seçin. Eklediğiniz dosya **A.1** revizyonu ve Çalışma sürüyor durumuyla başlar.

## Bir çizimi değiştirin

1. Bir çizimin yanındaki {{ui:Aç}} düğmesini seçin. Çizim CadCraft'ta açılır. Size teslim edilmemişse yalnızca bakın, değiştirmeyin: {{ui:Kaydet}} onun üzerine yazmayı reddeder ve nedenini söyler (kendi kopyanızı tutmak için {{ui:Farklı kaydet}} kullanın).
2. {{ui:Teslim al}} seçin. Artık kimse onu teslim alamaz; panel, dosyayı kimin, hangi bilgisayarda ve ne zamandan beri tuttuğunu gösterir.
3. Çizin.
4. {{ui:Geri teslim et}} seçin ve neyin değiştiğini yazın. Açık olan çizim kendi biçiminde proje klasörüne kaydedilir ve bir sonraki revizyon olur (A.1, sonra A.2). Hiçbir değişiklik yapmadan geri teslim ederseniz revizyon aynı kalır.

{{ui:Teslim almayı geri al}} dosyayı yeni bir revizyon olmadan geri verir.

## İnceleme ve yayımlama

- {{ui:İncelemeye gönder}}: dosya incelenirken salt okunur olur.
- {{ui:Onayla}}: onaylayanın adını yazın. A.3, **A** olur ve Yayımlandı durumuna geçer. Yayımlanan dosyalar salt okunurdur.
- {{ui:Geri gönder}}: nedeniyle birlikte Çalışma sürüyor durumuna döner.
- Yayımlanmış bir dosyada {{ui:Yeni revizyon}} seçilirse bir sonraki harf için teslim alınır: ilk geri teslimi **B.1** olur. Bundan önce {{ui:Teslim almayı geri al}} seçilirse dosya A'da kalır.
- {{ui:Eskimiş yap}} yayımlanmış bir dosyayı emekliye ayırır.

Bir proje, kimin onaylayabileceğinin listesini tutabilir ve onaylayanın dosyayı geri teslim eden kişi olmamasını zorunlu kılabilir (aşağıdaki Proje ayarları bölümüne bakın).

## Proje ayarları

Panelde {{ui:Proje ayarları}} bölümünü açın:

- **Onaylayanlar**: satır başına bir ad. Varsa yalnızca onlar bir yayını onaylayabilir.
- **Onaylayan, yazardan farklı biri olmalıdır**: "dört göz" kuralı.
- **Yöneticiler**: satır başına bir ad. Varsa yalnızca onlar başkasının teslim almasını bozabilir ya da bu ayarları değiştirebilir.
- **Atlanacak revizyon harfleri**: {{ui:ASME Y14.35 sırasını kullan}} I, O, Q, S, X ve Z harflerini atlar ya da kendi harflerinizi yazabilirsiniz. Verilmiş harfler kalır; seçim sonraki revizyonlara uygulanır.
- **Bir teslim alma eskimiş sayılır**: gün sayısı (varsayılan 14).

{{ui:Ayarları kaydet}} seçin. Değişiklik, kimin yaptığıyla birlikte günlüğe yazılır.

## Bir dosyayı birisi teslim almış bırakmış

{{ui:Teslim almayı boz}}, başkasının teslim aldığı bir dosyayı serbest bırakır (kişi uzaktaysa ya da bilgisayarı bozulduysa). Bir neden yazmanız gerekir: bu, kimin teslim almasının bozulduğuyla birlikte günlüğe yazılır. Projenin yöneticileri varsa bunu yalnızca onlar yapabilir. 14 günden eski bir teslim alma uzun süredir bekliyor olarak işaretlenir.

## Geçmiş, revizyonlar, kullandıkları, kullanıldığı yerler

Bir dosyanın adını seçerek şunları görün:

- {{ui:Geçmiş}}: her olay, en yenisi başta, kimin, hangi bilgisayarda ve ne zaman yaptığıyla birlikte.
- {{ui:Revizyonlar}}: tutulan her revizyon. Her revizyonun bir kopyası kasada tutulur (aynı içerik bir kez saklanır). {{ui:Kopyayı aç}} o revizyonu, kasadaki dosyanın üzerine yazamayan düz bir kopya olarak açar. {{ui:Şununla karşılaştır}} o revizyon ile ondan önceki (ya da sizin seçtiğiniz başka bir) arasında eklenen, silinen ve değişen şeyleri listeler ve bunları çizimde renklendirir.
- {{ui:Kullandıkları}}: bağlandığı çizimler (xref), bir IFC modelinin işaret ettiği belgeler, bir PartCraft montajının parçaları.
- {{ui:Kullanıldığı yerler}}: bunu kullanan kasadaki her dosya.

{{ui:Malzeme listesi (CSV)}}, bir dosyanın kullandığı her şeyin listesini, seviye seviye, miktarlar, revizyonlar ve durumlarla birlikte bir e-tablo için kaydeder.

## Sayfadaki revizyon bloğu

Düzeni olan açık bir çizimde {{ui:Revizyon bloğu}} seçin. Görüntülediğiniz sayfanın sağ üst köşesine yayımlanmış revizyonların bir tablosu çizilir (revizyon, tarih, kim, onaylayan, açıklama). Bir yayını onayladığınızda tablo güncellenir.

## Künyedeki revizyon

Künyenizin özniteliklerine bu etiketlerden birini verin ve açık çizimde {{ui:Künyeleri doldur}} seçin:

| Etiket | Doldurulan değer |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizyon (B, ya da üzerinde çalışılırken B.2) |
| `VAULT.STATE` | durum (Yayımlandı …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | en son revizyonun tarihi |
| `VAULT.APPROVER`, `APPROVED_BY` | en son yayımı kimin onayladığı |

## PartCraft ve BimCraft

PartCraft ve BimCraft, kendi dosyaları için aynı Belgeler panelini kullanır: PartCraft'ta parçalar ve montajlar, BimCraft'ta IFC modelleri. Geri teslim etmek, açık olan modeli proje klasörüne kaydeder; bir montaj, hangi parçaları kullandığını ve bir malzeme listesini gösterir.

## Bilmeniz gerekenler

- Aynı paylaşılan klasörde iki kişi aynı dosyayı birlikte teslim alamaz: teslim alma, sistemin iki kez oluşturmayı reddettiği bir dosyadır. Tarayıcıda ve bu özellikten daha eski bir kabuğa sahip Studio'da ise klasörün izin verdiği ölçüde katıdır: aynı anda yapılan iki teslim alma ikisi de başarılı olabilir. Panel hangisinin geçerli olduğunu söyler.
- `.ccvault` klasörünü elle düzenlemeyin ya da silmeyin. İçindeki günlük kayıttır; gerekirse kasa, listesini ondan yeniden oluşturur.
- Dosyayı teslim almadan klasörde değiştirmek {{ui:Klasörde teslim almadan değiştirildi}} olarak gösterilir.
