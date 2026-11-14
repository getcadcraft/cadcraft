---
title: CadCraft ekranı
summary: Çizim uygulamasındaki her çubuğun, panelin ve sekmenin ekrandaki adıyla gezintisi.
keywords: ekran, arayüz, araç çubuğu, şerit, paneller, komut satırı, durum çubuğu, sekmeler, düzen sekmeleri, özellikler, katmanlar paneli, tur
from: b5a33388
---

Ekranın yedi bölümü vardır. Yukarıdan aşağıya: uygulama çubuğu, araç çubuğu, her iki yanında bir panel olan çizim alanı, çizimin altındaki sekmeler, komut satırı ve durum çubuğu.

## Uygulama çubuğu

En üstteki ince çubuk çizime değil, siteye aittir. CadCraft işaretini, uygulama adını, hangi sürümü çalıştırdığınızı, uygulamanın sayfasına bir bağlantıyı, bir {{ui:Yardım}} düğmesini (veya {{key:F1}}), bir {{ui:Çevrimdışı için kaydet}} düğmesini, bir {{ui:Tam ekran}} düğmesini ve iki tema düğmesini, {{ui:Kâğıt}} ve {{ui:Model}}, gösterir.

{{ui:Ayarlar}} düğmesi (dişli) CadCraft'ın kendi ayarlarını ve her uygulamanın paylaştıklarını içerir: bkz. [CadCraft ayarları](topic:settings).

{{ui:Çevrimdışı için kaydet}}, CadCraft'ın bir kopyasını, DWG okuyucusu dahil, bu tarayıcıda tutar; böylece bağlantı olmadan açılır. Etiketi durumu gösterir: "Kaydediliyor N / M", "Çevrimdışı hazır", "Kaydedilemedi" veya "Çevrimdışı kullanılamıyor". Bkz. [Çevrimdışı çalışma](common:offline).

:::note
Uygulama çubuğundaki {{ui:Kâğıt}} ve {{ui:Model}} düğmeleri yalnızca ekranın renklerini değiştirir: {{ui:Kâğıt}} açık, {{ui:Model}} koyu bir temadır. Çizimin altındaki ve çizim ile sayfaları arasında geçiş yapan {{ui:Model}} sekmesiyle ilgileri yoktur.
:::

{{ui:Tam ekran}} düğmesi veya {{key:Ctrl+Shift+F}} (her bilgisayarda Control tuşu, Mac dahil) üç ekran modu arasında geçiş yapar: normal, tam ekran ve çubukları gizli tam ekran. Çubuklar gizliyken, geri getirmek için işaretçiyi ekranın üst kenarına götürün.

## Araç çubuğu

Uygulama çubuğunun altında araç çubuğu bulunur. Her düğme, sanki yazmışsınız gibi bir komut çalıştırır; bu yüzden komut satırı her iki yolla da aynı soruları sorar. Komut takma adını görmek için bir düğmenin üzerine gelin. Gruplar:

| Grup | Düğmeler |
|---|---|
| Dosya | {{ui:Yeni}}, {{ui:Aç}}, {{ui:Kaydet}}, {{ui:Farklı kaydet}}, {{ui:Çıktı al}} |
| Çizim | {{ui:Çizgi}}, {{ui:Çoklu çizgi}}, {{ui:Daire}}, {{ui:Yay}}, {{ui:Dikdörtgen}}, {{ui:Çokgen}}, {{ui:Elips}}, {{ui:Metin}}, {{ui:Paragraf}}, {{ui:Taralama}} ve {{ui:Daha fazla}}: {{ui:Nokta}}, {{ui:Yapı çizgisi}} ve {{ui:Işın}} (bkz. [Yapı çizgileri ve ışınlar](topic:construction-lines)) |
| Değiştirme | {{ui:Taşı}}, {{ui:Kopyala}}, {{ui:Döndür}}, {{ui:Ölçekle}}, {{ui:Aynala}}, {{ui:Gerdir}}, {{ui:Ofset}}, {{ui:Kırp}}, {{ui:Uzat}}, {{ui:Köşe yuvarlat}}, {{ui:Pah}}, {{ui:Patlat}}, {{ui:Sil}} ve {{ui:Daha fazla}}: {{ui:Dizi}}, {{ui:Birleştir}}, {{ui:Özellikleri eşleştir}}, {{ui:Kır}} ve {{ui:Uzunluğu değiştir}} |
| Açıklama | {{ui:Doğrusal}}, {{ui:Hizalı}}, {{ui:Açı}}, {{ui:Yarıçap}}, {{ui:Çap}} (ölçülendirmeler), {{ui:Belirtme çizgisi}} (çoklu belirtme çizgisi) ve {{ui:Daha fazla}}: {{ui:Ölçülendirmeyi sürdür}}, {{ui:Taban ölçülendirmesi}} ve {{ui:Revizyon bulutu}} |
| Parametrik | {{ui:Otomatik}}, {{ui:Kısıtla}}, {{ui:Ölçülendirme}}, {{ui:Parametreler}} ve her kısıtlamayla {{ui:Daha fazla}} (bkz. [Bir çizimi kısıtlama](topic:constraints)) |
| Bloklar | {{ui:Oluştur}}, {{ui:Ekle}}, {{ui:Kütüphane}} ve {{ui:Daha fazla}}: {{ui:Bloğu düzenle}} ve {{ui:Öznitelik tanımla}} |
| Sayfalar | {{ui:Yeni sayfa}}, {{ui:Görünüm penceresi}} |
| Düzenle | {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}} (panoya), {{ui:Yapıştır}} ve {{ui:Daha fazla}}: {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Yerinde yapıştır}}, {{ui:Çoğalt ve taşı}}, {{ui:Sil}}, {{ui:Tümünü seç}}, {{ui:Seçimi kaldır}}, {{ui:Hızlı seçim}}, {{ui:Benzerlerini seç}} ve {{ui:Bul ve değiştir}} içeren bir menü, her biri tuşuyla |
| Görünüm | {{ui:Sınırlar}}, {{ui:Pencere}}, {{ui:Önceki}} ve {{ui:Daha fazla}}: {{ui:Mesafe ölç}}, {{ui:Alan}}, {{ui:Ölç (yarıçap, açı …)}} ve bölünmüş ekran: {{ui:Yan yana böl}}, {{ui:Üst üste böl}}, {{ui:Dört bölme}}, {{ui:Tek bölme}} (bkz. [Ekranı bölme](topic:split-screen)) ve {{ui:Görünümü 90° sola döndür}}, {{ui:Görünümü 90° sağa döndür}}, {{ui:Dünyaya dön}} (bkz. [Görünümü döndürme](topic:ucs-and-turned-view)) |

{{ui:Değiştirme}} grubundaki {{ui:Kopyala}} {{cmd:COPY}} komutudur (temel nokta, sonra her kopyanın gideceği yer); {{ui:Düzenle}} grubundaki {{ui:Kopyala}} nesneleri {{ui:Yapıştır}} için panoya koyar. Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste). Çalışan komutun düğmesi komut bitene kadar vurgulu kalır. Araç ipuçları Windows kısayollarını adlandırır ("Ctrl+O"); Mac'te {{key:Mod+O}} da çalışır.

Kısa bir pencerede (örneğin ekranı yüzde 125 veya daha fazla ölçeklenmiş bir dizüstü bilgisayar) araç çubuğu hiçbir zaman çizimin yerini almaz: çizimin yüksekliği çok az kalacaksa düğmeler simgelerinin altındaki sözcükleri ve grup adlarını bırakır (adı için bir düğmenin üzerine gelin) ve bu hâlâ yetmezse araç çubuğu yana kayan tek bir satıra dönüşür. Daha yüksek bir pencere sözcükleri geri getirir.

## Sol panel

Soldaki panelin üç bölümü vardır.

- **{{ui:Katmanlar}}.** Çizimdeki her katman, geçerli olanın yanında dolu bir noktayla. O katmanı geçerli yapmak için bir ada tıklayın. Her satırın bir renk örneği (renk seçmek için tıklayın) ve dört düğmesi vardır: açık/kapalı (göz), dondur (kar tanesi), kilitle (asma kilit) ve çıktı (yazıcı). {{ui:Yeni katman}} bir tane eklemek için bir kutu açar. Bkz. [Bir çizimi katmanlarla düzenleme](topic:layers).
- **{{ui:Bloklar}}.** Çizimde tanımlı bloklar, her birinin kaç kez kullanıldığı ve her biri için bir {{ui:Ekle}} düğmesi. Bkz. [Blok yapma ve ekleme](topic:blocks).
- **{{ui:Çizim}}.** Açık dosya hakkında bilgiler: ad (kaydedilmemiş düzenleme varsa "(değiştirildi)" ile), biçim, boyut, birimler, nesne, katman, blok ve sayfa sayıları. Bir dosya açtıktan sonra bir "Bu dosya hakkında" kutusu CadCraft'ın gösteremediği veya dönüştürmek zorunda kaldığı her şeyi listeler.

## Çizim alanı

Ekranın ortası çizimdir. İşaretçi bir artı imlecidir. CadCraft bir nokta istediğinde küçük bir işaret ve bir etiket ("Uç nokta", "Orta nokta") bir nesne yakalamanın nereye düşeceğini gösterir. Nesne istediğinde artı imlecinin bir seçme kutusu vardır ve altındaki nesneler yanar.

Çizim boşken bir "Çizime başla" kartı birkaç ilk komutu gösterir. Bir komut çalıştırır veya bir dosya açar açmaz kaybolur. Açmak için bir DWG veya DXF dosyasını bu alanın herhangi bir yerine bırakabilirsiniz.

## Çizimin altındaki sekmeler

Çizimin altında sekmeler bulunur: önce {{ui:Model}}, sonra {{ui:3B}}, sonra sayfa (düzen) başına bir sekme, sonra bir {{ui:+}} düğmesi.

- {{ui:Model}} çizimin kendisidir, tam boyutta, çizim birimlerinde.
- {{ui:3B}} zeminde yatan çizimi ve ondan yapılan katıları gösterir. Gösterilirken araç çubuğunda çizim gruplarının yerine bir {{ui:3B}} grubu bulunur. Bkz. [3B'de model](topic:3d-solids).
- Her sayfa sekmesi, bir künyesi ve modele açılan görünüm pencereleri olan bir kâğıt sayfasıdır. Orada çizdiğiniz şey kâğıt birimlerindedir (milimetre veya inç). Modelde görünüm penceresi üzerinden çalışmak için pencerenin içine çift tıklayın (bkz. [Modelde bir görünüm penceresi üzerinden çalışma](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Uzun bir sayfa adı sekmesinde kısaltılır; tamamı için sekmenin üzerine gelin. Çok sayfa olduğunda {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Sayfa sekmeleri}} › {{ui:Yalnızca sayfa numaraları}} sekmesinde yalnızca her sayfanın numarasını (A-101) gösterir.
- {{ui:+}} bir kenarlığı, bir künyesi ve bir görünüm penceresi olan yeni bir sayfa yapar. {{cmd:LAYOUT}} komutuyla aynıdır.
- Yeniden adlandırmak için bir sayfa sekmesine çift tıklayın. Bir sekmeye odaklanıldığında {{key:Left}} ve {{key:Right}} sekmeler arasında geçer.

Her sekme kendi yakınlaştırmasını ve kaydırmasını korur. Bkz. [Bir sayfa hazırlama](topic:sheets-and-viewports).

## Sağ panel: Özellikler

Sağdaki panel, seçili olana göre değişir.

- **Hiçbir şey seçili değil, {{ui:Model}} sekmesinde:** başlık {{ui:Geçerli ayarlar}} der. Burada yeni nesneler için {{ui:Katman}}, {{ui:Renk}} ve {{ui:Metin yüksekliği}} değerlerini, çizim {{ui:Birimler}}ini ve yeni ölçülendirmelerin boyutlarını ({{ui:Metin yüksekliği}}, {{ui:Ok boyutu}}, {{ui:Ondalık basamak}}, {{ui:Genel ölçek}}) ayarlarsınız.
- **Hiçbir şey seçili değil, bir sayfada:** başlık "Sayfa:" ve sayfa adını okur. Sayfayı yeniden adlandırabilir, {{ui:Kâğıt}} ve {{ui:Yönlendirme}} ayarını değiştirebilir, {{ui:Bu sayfanın çıktısını al}} veya {{ui:Bu sayfayı sil}} yapabilirsiniz. Yeni nesneler için ayarlar aşağıda devam eder.
- **Bir nesne seçili:** başlık olarak türü (Çizgi, Daire, Metin, Ölçülendirme, Görünüm penceresi …), sonra katmanı, rengi ve geometrisi. Değiştirmek için yeni bir değer yazıp {{key:Enter}} tuşuna basın.
- **Birkaç nesne seçili:** kaç tane olduğu ve ortak {{ui:Katman}} ile {{ui:Renk}} değerleri. İkisinden birini değiştirmek hepsini değiştirir. "Değişken" farklı oldukları anlamına gelir.

Bkz. [Tutamaçlar ve Özelliklerle düzenleme](topic:grips-and-properties).

Altında, {{ui:Parametreler}} seçtiğinizde veya {{cmd:PARAMETERS}} yazdığınızda {{ui:Parametreler}} paneli açılır: her parametre ve boyutsal kısıtlama tek bir tabloda. Bkz. [Parametre ve denklem kullanma](topic:parameters).

## Komut satırı

En altta komut satırı bulunur: yaptıklarınızın geçmişi ve altında istem.

- İstem etiketi hiçbir şey çalışmıyorken `Komut:` der. Bir komut çalışırken soruyu, seçeneklerini köşeli parantez içinde ve varsayılanı açılı parantez içinde gösterir, örneğin `Dairenin yarıçapını belirtin [Çap (D)] <500>:`.
- Bir komut adı yazarken sağdaki bir ipucu eşleşen komutları önerir. İlkini kabul etmek için {{key:Tab}} tuşuna basın. "Böyle bir komut yok" hiçbir şeyin eşleşmediği anlamına gelir.
- {{key:Up}} ve {{key:Down}} daha önce yazdığınız satırları geri getirir.
- Geçmiş son 400 satırı tutar. Komutlardan gelen iletiler, {{cmd:DIST}} ve {{cmd:LIST}} ölçümleri ile kaydetme ve çıktı raporları burada görünür.

## Durum çubuğu

En alttaki satır durum çubuğudur.

- Solda **koordinatlar**: artı imlecinin X ve Y değerleri. Bir komutun temel noktası olduğunda, ondan uzaklığı ve açıyı da gösterir, örneğin `Δ 1200 < 90°`.
- Ortada "Ortogonal açık" veya "Geçerli katman: Walls" gibi **iletiler**. Birkaç saniye sonra kaybolurlar.
- Sağda **{{ui:Izgara}}**, **{{ui:Ortogonal}}**, **{{ui:Kutupsal}}**, **{{ui:Yakalama}}**, **{{ui:İzle}}**, **{{ui:Dinamik}}** ve **{{ui:LWT}}**. Her biri bir anahtardır; basılı bir düğme açıktır. {{ui:LWT}} çizgi kalınlıklarını ekranda gösterir (bkz. [Çizgi kalınlıkları ve çizgi tipleri](topic:units-papers-scales#line-weights-and-linetypes)). {{ui:Yakalama}} yanındaki küçük ok, hangi yakalamaların etkin olduğunu işaretlediğiniz {{ui:Nesne yakalamalar}} penceresini açar. Bkz. [Nesneler üzerindeki noktalara yakalama](topic:object-snaps).

## PDF'e çıktı al iletişim kutusu

{{ui:Çıktı al}} (veya {{key:Mod+P}}) solda ayarlar ve sağda canlı önizleme olan {{ui:PDF'e çıktı al}} iletişim kutusunu açar. Bkz. [PDF'e çıktı alma](topic:plot-pdf).

## Yardım

{{key:F1}} veya {{ui:Yardım}} düğmesi bu yardımı bir yan panel olarak açar; çizim yanında kullanılabilir kalır. Bağlantı olmadan çalışır. {{key:F1}} tuşuna yeniden basmak veya panelin içinde {{key:Esc}} onu kapatır. Bkz. [Bu yardımı kullanma](common:help).
