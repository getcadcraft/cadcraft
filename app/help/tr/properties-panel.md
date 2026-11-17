---
title: Özellikler paneli
summary: Seçili nesnelerin her şeyini, birçoğunu bir kerede görün ve değiştirin: Z ile koordinatlar, boyutlar, metin, ölçülendirme ayarları, saydamlık ve daha fazlası. Alanlar birimli ifadeler ve uzunluklar kabul eder.
keywords: toplamlar, toplam uzunluk, toplam alan, toplam, seçim uzunluğu, özellikler, özellikler paleti, ctrl+1, pr, ch, mo, ddmodify, değişken, hızlı seçim, pickadd, koordinatlar, z, kot, kalınlık, saydamlık, malzeme, köprü, ifade, quickcalc, köşe, ölçülendirme stili, tolerans, ondalık
from: 10d6a829
---

## Ne öğreneceksiniz

Özellikler panelini nasıl açacağınızı, bir ya da yüz nesneyi bir adımda nasıl değiştireceğinizi, Z dahil tam koordinatları nasıl yazacağınızı, her sayı alanında ifade ve birim nasıl kullanacağınızı ve her nesne türünün ne gösterdiğini.

## Açın

Panel sağda durur. Onu öne getirmek için:

- {{key:Mod+1}}'e basın ya da {{cmd:PROPERTIES}} (ya da `PR`, `CH`, `MO`) yazın.
- Bir nesneye çift tıklayın (metin ve çoklu belirtme çizgileri metin düzenleyicilerini açar).

Panel diğerleri gibi taşınabilir bir paneldir: tutamacını sürükleyerek sola, sağa ya da alta yerleştirin, ya da çizimin üzerine bırakarak yüzdürün (bkz. [Panelleri düzenleyin ve ikinci bir monitör kullanın](common:arrange-panels)).

### Katlayın

Panelin sağ üstündeki iğne düğmesi **otomatik gizleme**yi açar: panel sağ kenarda bir şeride katlanır ve çizim daha fazla yer kazanır. Şeridin üzerine gelin (ya da {{key:Mod+1}}'e basın); panel çizimin üzerinde açılır, uzaklaştığınızda yeniden katlanır. Açık tutmak için iğneye yeniden tıklayın. {{cmd:PROPERTIESCLOSE}} de onu katlar.

## Bölümler

Özellikler, katlanabilir bölümlerde gruplanır: **Genel**, **Geometri**, **Metin**, **Çizgiler ve oklar**, **Sığdırma**, **Birincil birimler**, **Alternatif birimler**, **Toleranslar**, **Desen**, **Çeşitli** ve bloklar için **Öznitelikler** ve **Kütüphane öğesi**. Bir bölümün adına tıklayarak katlayın ya da açın; CadCraft hangilerini katladığınızı hatırlar.

Adlarla değerler arasındaki ince çizgiyi sürükleyerek adları daha geniş ya da dar yapın. Eski haline getirmek için çift tıklayın. Klavyeyle, ona odaklanın ve ok tuşlarını kullanın.

## Bir değeri değiştirin

1. Bir satıra tıklayın. Başlık "Çizgi" yazar.
2. {{ui:Uzunluk}}'a tıklayın. Düzenlerken alan yuvarlanmış değer yerine tam değeri gösterir.
3. `2500` yazın ve {{key:Enter}}'a basın. Çizgi artık 2500 uzunluğundadır; başlangıç noktasını ve açısını korur.

{{key:Enter}} ya da başka bir yere tıklamak değeri uygular; {{key:Esc}} eski değeri geri koyar. Her değişiklik tek bir geri alma adımıdır.

### İfadeler ve birimler

Her sayı alanı düz bir sayıdan fazlasını kabul eder:

| Yazdığınız | Aldığınız |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inç; ft ve in kullanan bir çizimde) |
| `900mm`, `3.5m`, `2ft` | Çizimin birimlerine çevrilir |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (açı alanlarında) |
| `0.5r`, `100g` | Radyan ve grad, derece olarak |

Birimli bir uzunluk, çizimin birimlerinin olmasını gerektirir: önce {{ui:Yeni nesneler}} altında (hiçbir şey seçili değilken) {{ui:Birimler}}'i ayarlayın. Hatalı bir giriş, panelin altındaki bir notla reddedilir ve hiçbir şey değişmez; asla 0 olarak kaydedilmez. İşlevler: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; açılar derece cinsinden.

## Birçok nesneyi bir kerede değiştirin

1. Birkaç nesne seçin, örneğin 8 çizgi ve 4 ölçülendirme.
2. Başlık "12 nesne" der ve en üstteki bir liste **Tümü (12)**, **Çizgi (8)** ve **Ölçülendirme (4)** sunar.
3. **Tümü** her nesnenin ne olduğunu gösterir (katman, renk, çizgi tipi…). Ölçülendirme ayarlarını görmek için **Ölçülendirme (4)**'ü seçin.
4. Bir değer değiştirin, örneğin {{ui:Ondalık basamak}}'ı `1` yapın.

Dört ölçülendirmenin hepsi tek bir geri alma adımında değişir. **Değişken** yazan bir alan, nesnelerin farklı olduğu anlamına gelir; bir değer yazmak hepsine uygular. Kilitli katmanlardaki nesneler olduğu gibi bırakılır ve not kaç tanesi olduğunu söyler.

## Seçimin toplamları

Birden çok nesne seçili olduğunda, panelin üstündeki {{ui:Toplamlar}} bölümü şunu söyler:

- **Nesneler**: her türden kaç tane, örneğin "8 çizgi, 2 çoklu çizgi, 1 daire".
- **Toplam uzunluk**: çizgiler, yaylar ve çoklu çizgiler toplanır (eğriler de sayılır) ve kaç nesne olduğu.
- **Toplam alan**: kapalı olanlar toplanır: daireler, tam elipsler, kapalı çoklu çizgiler ve taralamalar (bir taralamanın delikleri çıkarılır).

Bunlar çizimin uzunluk biçiminde gösterilir (ft ve in kullanıyorsa ft ve in; alanlar o zaman kare inç ve kare ft olarak). Durum çubuğu, nesne seçili olduğunda aynı uzunluğu ve alanı gösterir; {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Seçimin uzunluğu ve alanı}} › {{ui:Gizli}} bunu kapatır. Tek bir nesne için {{ui:Geometri}} kendi uzunluğunu ve alanını eskisi gibi gösterir.

## Koordinatlar

Her nokta **X**, **Y** ve **Z** gösterir: bir çizginin başlangıcı ve bitişi, merkezler, ekleme noktaları, metin konumları, geçerli çoklu çizgi köşesi. Çizgiler ayrıca **Delta X**, **Delta Y** ve **Delta Z** gösterir (salt okunur). Çoklu çizgilerin ve taralamaların bir **Kot**u vardır (tüm nesne için tek bir Z).

Bir noktanın adının yanındaki nişan düğmesi, onu çizimde seçmenizi sağlar: tıklayın, sonra yeni konumu tıklayın (yakalamalar çalışır). Değerler dünya koordinatlarıdır.

## Genel

| Alan | Nedir |
|---|---|
| {{ui:Katman}}, {{ui:Renk}}, {{ui:Çizgi tipi}}, {{ui:Çizgi tipi ölçeği}}, {{ui:Çizgi kalınlığı}} | Katmanlar panelindeki gibi; {{ui:Katmana göre}} katmanı izler |
| {{ui:Saydamlık}} | Katmana göre, bloğa göre ya da %0 ile %90 |
| {{ui:Kalınlık}} | Çizgilerin, dairelerin, yayların, çoklu çizgilerin, noktaların ve metnin Z'de ne kadar uzandığı |
| {{ui:Malzeme}} | Katmana göre, bloğa göre, Genel ya da bir çizimin getirdiği bir ad |
| {{ui:Çıktı stili}} | Salt okunur: çizimler sayfanın [çıktı stili tablosuna](topic:plot-pdf#plot-style-tables) göre, renklerine göre çıktı alınır |
| {{ui:Köprü}} | Nesneyle tutulan bir web adresi |

## Her türün gösterdikleri

| Seçilen | Değiştirebilecekleriniz |
|---|---|
| Çizgi | Başlangıç ve bitiş X, Y, Z; uzunluk; açı |
| Daire | Merkez; yarıçap; çap; çevre; alan (her biri yarıçapı ayarlar) |
| Yay | Merkez; yarıçap; başlangıç ve bitiş açısı; toplam açı; kiriş (yay uzunluğunu ve alanını gösterir) |
| Elips | Merkez; büyük ve küçük yarıçap; yarıçap oranı; büyük eksen açısı; başlangıç ve bitiş açısı |
| Çoklu çizgi | Köşe tarayıcısı (aşağıda); genel genişlik; kot; kapalı; kapalıysa alan (merkezi etrafında ölçekler) |
| Metin | İçerik; stil; hizalama; yükseklik; döndürme; genişlik faktörü; eğiklik açısı; tanımlı genişlik; satır aralığı; ek açıklamalı; konum |
| Blok başvurusu | Ekleme noktası; döndürme; X, Y, Z ölçeği ve tekdüze ölçek; öznitelik değerleri |
| Taralama | Desen; ölçek; açı; köken; ilişkili; ada algılama; arka plan rengi; kot |
| Ölçülendirme | Aşağıya bakın |
| Çoklu belirtme çizgisi | Metin; yükseklik; genişlik; metin yanı; ok ucu boyutu; iniş mesafesi; ok ucu noktası |
| Görünüm penceresi | Ölçek; kâğıtta merkez ve boyut; modelde görünüm merkezi; açık; görüntü kilitli |

### Çoklu çizgi köşeleri

{{ui:Geçerli köşe}}, altındaki alanların hangi köşeye ait olduğunu gösterir. Ok düğmelerini kullanın ya da bir numara yazın, başka bir köşeye geçin; köşe sayısında bir sınır yoktur. Her köşenin X, Y, başlangıç ve bitiş segmenti genişliği ve o noktada başlayan segmentin kabarması (bulge) vardır (0 = düz).

## Ölçülendirmeler

Bir ölçülendirme **Ölçülendirme stili**ni, neyi ölçtüğünü, noktalarını ve her ayarını gösterir:

- **Çizgiler ve oklar:** her uç için ok ucu, ok boyutu, işaret boyutu, ölçülendirme ve uzatma çizgilerinin renkleri ve çizgi kalınlıkları, iki yarıdan birini ya da iki uzatma çizgisinden birini gizleme, uzatma çizgisi ofseti ve uzatma.
- **Metin:** geçersiz kılma (ölçülen değer için boş bırakın; kendi metninizin içinde `<>` onu temsil eder), stil, renk, yükseklik, ofset, dikey ve yatay konum, her zaman yatay, döndürme, arka plan dolgusu.
- **Sığdırma:** genel ölçek, taban çizgisi aralığı, yer azaldığında ne taşınacağı, metin hareketi.
- **Birincil birimler:** biçim, ondalık basamak, yuvarlama, önek, sonek, ölçü ölçeği, ondalık ayırıcı, baştaki ve sondaki sıfırları gizleme; açılar için açı biçimi ve ondalık basamak.
- **Alternatif birimler:** açık ya da kapalı, biçim, ondalık basamak, çarpan (25.4 inçleri milimetreye çevirir), yuvarlama, önek ve sonek.
- **Toleranslar:** yok, simetrik, sapma, sınırlar ya da temel; üst ve alt değerler, ondalık basamak, yükseklik ve konum.

Açılmış bir ölçülendirmede bunlardan herhangi birini değiştirmek, diğer programın onun için yaptığı çizimi bırakır ve CadCraft onu yeniden çizer.

:::note
Yatay metin konumu (birinci ya da ikinci uzatma çizgisinin yanında) ve çizgi altındaki metin doğrusal ve hizalı ölçülendirmelerde çizilir; diğer ölçülendirmelerde saklanır ve kaydedilir ama henüz çizilmez. Sığdırma seçimleri saklanır ve kaydedilir ama henüz çizilmez: CadCraft metni kendi kuralıyla yerleştirir (çizginin üstünde, sığmıyorsa dışarıda).
:::

## Hiçbir şey seçili değilken

Hiçbir şey seçili değilken panel şunları gösterir:

- **Yeni nesneler:** yeni nesnelerin alacağı katman, renk, çizgi tipi, çizgi kalınlığı ve metin yüksekliği; çizimin birimleri ve uzunluk biçimi; geçerli katmanın çizgi tipi ve çizgi kalınlığı; yeni ölçülendirmeler için boyutlar. Bir sayfada önce sayfanın adı, kâğıdı ve yönlendirmesi gelir.
- **Görünüm:** ekranda olanın merkezi, yüksekliği ve genişliği. Görünümü oraya taşımak için bir değer yazın.
- **Çeşitli:** UCS simgesi açık ya da kapalı; UCS (her zaman Dünya: CadCraft'ta henüz kullanıcı koordinat sistemi yok) ve açıklama ölçeği.

## En üstteki düğmeler

| Düğme | Yaptığı |
|---|---|
| Huni | {{cmd:QSELECT}}: türe ve özelliğe göre seçer |
| İşaretçi | {{cmd:SELECT}}: komut satırında nesne seçer |
| Artı ya da 1 | Bir tıklamanın seçime ekleyip (artı) eklemeyeceği ya da değiştirip (1) değiştirmeyeceği; Ayarlar, {{ui:CadCraft}} ile aynı ayar |
| İğne | Yukarıdaki otomatik gizleme |

## Sık yapılan hatalar

- **Bir alana yazmak bir şey yapmadı.** {{key:Enter}}'a basın ya da başka bir yere tıklayın. Kırmızı bir alan ve bir not, girişin reddedildiğini gösterir.
- **Birimli bir uzunluk reddedildi.** Çizimin birimleri yok. Hiçbir şey seçili değilken {{ui:Birimler}}'i ayarlayın.
- **Yalnızca Katman ve Renk görünüyor.** Birkaç türde nesne seçili ve **Tümü** seçili. Üstteki listeden bir tür seçin.
- **Bazı nesneler değişmedi.** Kilitli bir katmanda. Katmanlar panelinde katmanın kilidini açın.
- **Yazdığınız harfler bir alana girdi.** Bir alan imleci tutuyorken tuşlar oraya yazar. {{key:Enter}} ya da {{key:Esc}}'e basın, sonra komutu yazın.
