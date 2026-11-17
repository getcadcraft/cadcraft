---
title: Dosyadan veya kütüphaneden ekleme
summary: Başka bir DWG ya da DXF'ten bir blok ya da tüm bir çizim getirin; Kütüphane'den, bir dosyadan ya da başka bir kütüphaneden öğeler yerleştirin, katkı paylarıyla ve güncellemeleriyle birlikte.
keywords: ekle, dosya, kütüphane, librarycraft, öğe, ekipman, başka bir çizimden blok, wblock, tasarım merkezi, katkı payı, atıf, lisans, güncelleme, besleme, item.json
from: 316188d2
---

## Başka bir çizimden blok ekleme

1. `I` yazıp {{key:Enter}}'a basın ya da Bloklar grubunda {{ui:Ekle}}'ye tıklayın.
2. `Blok adını girin ya da [Dosya (F)/Kütüphane (L)]` isteminde `F` yazıp {{key:Enter}}'a basın.
3. Bu bilgisayardaki DWG ya da DXF'i seçin. Dosya burada okunur; açılmaz ve hiçbir şey yüklenmez.
4. {{ui:Şuradan ekle}} iletişim kutusunda listeden bir blok seçin ({{ui:Blokları süz}} alanına yazarak arayın) ya da {{ui:Tüm çizim}} seçeneğini bırakın. {{ui:Ekle}}'ye tıklayın.
5. Gideceği yere tıklayın ve istediği öznitelikleri doldurun.

Tüm çizim, dosyanın adından adlandırılmış tek bir blok olarak gelir. Seçtiğiniz bloğun içindeki bloklar da gelir. Bunların kullandığı katmanlar bu çizime eklenir.

Diğer çizim farklı birimlerdeyse (örneğin inç ve milimetre), CadCraft başvuruyu buna uyacak şekilde ölçekler ve bunu geçmişte söyler.

### Ad zaten kullanılıyorsa

Bu çizimde aynı adda bir blok varsa CadCraft sorar:

- {{ui:Mevcudu koru}} bu çizimdeki o ada sahip bloğu kullanır.
- {{ui:Yeniden adlandır}} yenisini `Ad (2)` olarak ekler.

Eklemenin tamamı tek bir adımdır: {{key:Mod+Z}} başvuruyu ve kopyalanan tanımları yeniden kaldırır.

## Kütüphaneyi açın

{{ui:Bloklar}} panelindeki {{ui:Kütüphane…}} düğmesine ya da Bloklar grubundaki {{ui:Kütüphane}} düğmesine tıklayın ya da `LIB` yazın. `INSERT` isteminde `L` de onu açar.

Kütüphanenin dört kaynağı vardır; sekme olarak:

- {{ui:Kütüphane}}: CadCraft kütüphanesi. Ada, üreticiye ya da modele göre arayın ve kategoriye göre süzün.
- {{ui:Dosyalar…}}: herhangi bir kütüphaneden bir öğe dosyası (`item.json`) ya da öğe yapmak için bir çizim, elektronik tablo ya da 3B model: bir DWG ya da DXF (her blok bir öğe olur), ad ve boyut sütunları olan bir CSV ya da bir glTF ya da OBJ modeli. Hiçbir şey yüklenmez.
- {{ui:Standart}}: yayımlanmış tablolardan burada yapılmış çelik profiller (kesit, görünüş ya da 3B eleman olarak) ve cıvata, somun ve rulman gibi standart parçalar. Bkz. [Çelik profilleri ve standart parçaları yerleştirme](topic:steel-and-standard-parts).
- {{ui:Diğer beslemeler}}: Kütüphane gibi yanıt veren başka kütüphaneler. Adreslerini bir kez ekleyin; bu tarayıcı onu hatırlar.

Her kart bir önizleme, adı, üreticisi ve modeli, lisansı ve sürümü gösterir. Geri çekilmiş bir öğe, nedeniyle birlikte {{ui:Geri çekildi}} olarak işaretlenir; CadCraft birini yerleştirmeden önce sorar.

## Öğe yerleştirin

1. Bir kartta {{ui:Yerleştir}}'e tıklayın.
2. Öğenin gideceği yere tıklayın. Önce döndürmek için `R`, ölçeklendirmek için `S` yazın.
3. `Öğe numarasını girin (CC-ITEM)` isteminde bir sonraki boş numara için {{key:Enter}}'a basın ya da kendi numaranızı yazın.

Öğe, `LIB_<ad>_v<sürüm>` adlı bir blok olur ve bu çizimin birimlerinde çizilir. Çizimin birimi yoksa öğe milimetre olarak yerleşir ve geçmiş bunu söyler; önce sağdaki panelde {{ui:Birimler}} ayarını yapın.

Verileri görünmez öznitelikler olarak birlikte taşınır: öğenin kimliği ve sürümü, lisansı ve atfı, üreticisi, modeli, kategorisi ve boyutları. Bkz. [Blok öznitelikleri](topic:attributes).

## Öğeleriniz kendi dilinizde

Bir öğe adını ve açıklamasını başka dillerde de taşıyabilir. CadCraft'in ayarlandığı dilde varsa (Ayarlar › Genel › Dil), kart ve yerleştirilen bloğun öğe adı bunları kullanır. Blok kendi öğe adından türetilmiş bir ad taşır; böylece hangi dil yerleştirmiş olursa olsun bir çizimde öğe başına bir blok bulunur.

## Güncellemeleri denetleyin

1. Kütüphaneyi açın.
2. {{ui:Güncellemeleri kontrol et}}'e tıklayın.

Çizimdeki her kütüphane öğesi, öğe numaralarıyla ve güncel olup olmadığıyla listelenir; ya da daha yeni bir sürümü vardır (ve neyin değiştiğiyle), ya da geri çekilmiştir. Bir satırdaki {{ui:Güncelle}} düğmesine ya da {{ui:Tümünü güncelle}} düğmesine tıklayın. Her başvuru yeni sürümün bloğuna taşınır ve öğe numarasını, miktarını, yerini, açısını ve katmanını korur. {{key:Mod+Z}} bir güncellemeyi geri alır.

## Kullandığınız kaynakları belirtin

{{ui:Kütüphane katkı payları}}'na tıklayın. Her öğe, atıf satırı ve lisansıyla listelenir.

- {{ui:Atıfı kopyala}} bir öğenin satırını kopyalar; {{ui:Tümünü kopyala}} her satırı kopyalar.
- {{ui:CSV indir}} listeyi öğe numaraları, üreticileri, modelleri, lisansları ve atıflarıyla kaydeder. Her elektronik tabloda açılır.

CC BY gibi lisanslar, eseri kullandığınız yerde yazarı belirtmenizi ister. Satırları çizime, şartnameye ya da proje notlarına koyun.

## Semboller ve varlıklar

Kütüphanenin üç tür öğesi vardır: Semboller (2B çizim gösterimleri), Türler (bir öğenin neyden yapıldığı) ve Varlıklar (fiziksel nesneler). {{ui:Kütüphane}} sekmesinde {{ui:Öğe türü}} listesi Sembolleri ve varlıkları birlikte, yalnızca Sembolleri ya da yalnızca Varlıkları gösterir. Türler, bir BimCraft projesinin yapıldığı öğelerdir; bu yüzden CadCraft onları listelemez.

## Kütüphaneye oturum açın

{{ui:Kütüphaneye oturum aç}}'a tıklayın. Site üzerinde küçük bir pencere açılır; orada oturum açtığınızda CadCraft ekibinizin öğelerini gösterebilir ve yerleştirdiklerinizi kaydedebilir, böylece kullandığınız bir öğe değiştiğinde haberdar olursunuz. Oturum bu tarayıcı sekmesinde geçerlidir. İstediğiniz zaman hesabınızın güvenlik sayfasından iptal edin.

## Sık yapılan hatalar

- **"IFC türlerinden öğe yapma BimCraft'ta yapılır."** IFC ve aile dosyaları BimCraft uygulamasında okunur. Öğeyi orada ya da Kütüphane'de yapın, sonra onun `item.json` dosyasını buraya kullanın.
- **"Kütüphaneye ulaşılamadı."** Çevrimdışısınız ya da kütüphane kapalı. Çizimdeki öğeler etkilenmez.
- **Bir öğe çok büyük ya da çok küçük.** Çizimin birimleri yanlış ya da ayarlanmamış. Geri alın, {{ui:Birimler}} ayarını yapın ve öğeyi yeniden yerleştirin.
