---
title: Bir dosyadan ya da kitaplıktan ekleyin
summary: Başka bir DWG ya da DXF'ten bir blok ya da tüm bir çizim getirin; öğeleri Kitaplık'tan, bir dosyadan ya da başka bir kitaplıktan, katkı payları ve güncellemeleriyle yerleştirin.
keywords: ekle, dosya, kitaplık, librarycraft, öğe, ekipman, başka bir çizimden blok, wblock, tasarım merkezi, katkı payları, atıf, lisans, güncelleme, besleme, item.json
from: f6e4e452
---

## Başka bir çizimden bir blok ekleyin

1. `I` yazıp {{key:Enter}} tuşuna basın ya da Bloklar grubunda {{ui:Ekle}} düğmesine tıklayın.
2. Pencerenin altındaki komut satırı `Blok adını ya da [Dosya/Kitaplık] girin` ister. Orada `F` yazıp {{key:Enter}} tuşuna basın.
3. Bu bilgisayardaki DWG ya da DXF'i seçin. Dosya burada okunur; açılmaz ve hiçbir şey yüklenmez.
4. {{ui:Şuradan ekle}} iletişim kutusunda listeden bir blok seçin ({{ui:Blokları süz}} alanına yazarak bulun), ya da {{ui:Tüm çizim}}'i olduğu gibi bırakın. {{ui:Ekle}}'ye tıklayın.
5. Blokun gideceği yere tıklayın ve istediği öznitelikleri doldurun.

{{ui:Bloklar}} panelinden de başlayabilirsiniz: {{ui:Blokları süz}} kutusuna `F` yazıp {{key:Enter}} tuşuna basın ya da hiçbir blokla eşleşmeyen bir şey yazıp {{ui:Dosyadan…}} düğmesine tıklayın. `L` ve {{ui:Kitaplık…}} aynı biçimde kitaplığı açar. 0.10.1 sürümünden önce {{ui:Blokları süz}} kutusuna yazılan bir harf yalnızca bu çizimin bloklarında arardı ve "Filtreye uyan blok yok." yanıtını verirdi.

Kendi bloklarınızdan oluşan bir çizimi elinizin altında tutmak için, {{ui:Bloklar}} panelinde {{ui:Kitaplıklar}} altındaki {{ui:Çizim ekle}}'ye tıklayın ve DWG ya da DXF'i seçin. Blokları resimleriyle listelenir; birine tıklayarak yerleştirin.

Tüm çizim, dosyanın adını taşıyan tek bir blok olarak gelir. Seçtiğiniz blokun içindeki bloklar da gelir. Kullandıkları katmanlar bu çizime eklenir.

Öteki çizim farklı birimlerdeyse (örneğin inç ve milimetre), CadCraft başvuruyu ona uyacak şekilde ölçekler ve bunu tarihçede söyler.

### Bir ad zaten kullanılıyorsa

Bu çizimde aynı adla zaten bir blok varsa, CadCraft sorar:

- {{ui:Var olanı tut}} bu çizimdeki o adlı bloğu kullanır.
- {{ui:Yeniden adlandır}} yeni olanı `Ad (2)` olarak getirir.

Tüm ekleme tek bir adımdır: {{key:Mod+Z}} başvuruyu ve kopyalanan tanımları yeniden kaldırır.

## Kitaplığı açın

{{ui:Bloklar}} panelindeki {{ui:Kitaplık…}}'ye, ya da Bloklar grubundaki {{ui:Kitaplık}}'ya tıklayın ya da `LIB` yazın. `INSERT` isteminde `L` de onu açar.

Kitaplığın dört kaynağı vardır, sekmeler olarak:

- {{ui:Kitaplık}}: CadCraft kitaplığı. Ada, üreticiye ya da modele göre arayın ve kategoriye göre süzün.
- {{ui:Dosyalar…}}: herhangi bir kitaplıktan bir öğe dosyası (`item.json`), ya da öğeler yapmak için bir çizim, bir e-tablo ya da 3B bir model: her blok bir öğe olan bir DWG ya da DXF, ad ve boyut sütunları olan bir CSV, ya da bir glTF ya da OBJ modeli. Hiçbir şey yüklenmez.
- {{ui:Standart}}: çelik profiller (kesit, görünüş ya da 3B eleman olarak) ve cıvata, somun ve rulman gibi standart parçalar, yayımlanmış tablolardan burada yapılmış. Bkz. [Çelik profilleri ve standart parçaları yerleştirin](topic:steel-and-standard-parts).
- {{ui:Diğer beslemeler}}: Kitaplık ile aynı biçimde yanıt veren öteki kitaplıklar. Adreslerini bir kez ekleyin; bu tarayıcı onu hatırlar.

Her kart bir önizleme, adı, üreticisi ve modeli, lisansı ve sürümünü gösterir. Geri çekilmiş bir öğe, nedeniyle birlikte {{ui:Geri çekildi}} olarak işaretlenir; birini yerleştirmeden önce CadCraft sorar.

## Bir öğe yerleştirin

1. Bir kartta {{ui:Yerleştir}}'e tıklayın.
2. Öğenin gideceği yere tıklayın. Döndürmek için önce `R`, ölçeklemek için `S` yazın.
3. `Öğe numarasını girin (CC-ITEM)` isteminde, bir sonraki boş numara için {{key:Enter}} tuşuna basın ya da kendi numaranızı yazın.

Öğe, `LIB_<ad>_v<sürüm>` adlı bir blok olur ve bu çizimin birimleriyle çizilir. Çizimin birimi yoksa öğe milimetre olarak girer ve tarihçe bunu söyler; önce sağ panelde {{ui:Birimler}} ayarlayın.

Verileri görünmez öznitelikler olarak birlikte gelir: öğenin kimliği ve sürümü, lisansı ve atıfı, üreticisi, modeli, kategorisi ve boyutları. Bkz. [Blok öznitelikleri](topic:attributes).

## Öğeler kendi dilinizde

Bir öğe adını ve açıklamasını başka dillerde de taşıyabilir. CadCraft'ın ayarlandığı dilde (Ayarlar › Genel › Dil) bunlar varsa, kart ve yerleştirilen bloğun öğe adı onları kullanır. Blok, öğenin kendi adından yapılmış bir ad taşımaya devam eder; böylece hangi dilde yerleştirilirse yerleştirilsin bir çizimde öğe başına bir blok olur.

## Güncellemeleri kontrol edin

1. Kitaplığı açın.
2. {{ui:Güncellemeleri kontrol et}}'e tıklayın.

Çizimdeki her kitaplık öğesi, öğe numaralarıyla ve güncel olup olmadığıyla listelenir; ya da daha yeni bir sürümü (ve neyin değiştiğini) olduğu gibi ya da geri çekilmiş. Bir satırda {{ui:Güncelle}}'ye ya da {{ui:Tümünü güncelle}}'ye tıklayın. Her başvuru yeni sürümün bloğuna taşınır ve öğe numarasını, miktarını, yerini, açısını ve katmanını korur. {{key:Mod+Z}} bir güncellemeyi geri alır.

## Kullandıklarınızı kaynak gösterin

{{ui:Kitaplık katkı payları}}'na tıklayın. Her öğe, atıf satırı ve lisansıyla birlikte listelenir.

- {{ui:Atıfı kopyala}} bir öğenin satırını kopyalar; {{ui:Tümünü kopyala}} her satırı kopyalar.
- {{ui:CSV indir}} listeyi öğe numaraları, üreticileri, modelleri, lisansları ve atıflarıyla kaydeder. Herhangi bir e-tablo programında açılır.

CC BY gibi lisanslar, eseri kullandığınız yerde yazarı belirtmenizi ister. Satırları çizime, şartnameye ya da proje notlarına koyun.

## Semboller ve varlıklar

Kitaplığın üç öğe türü vardır: Semboller (çizim kuralları, 2B), Türler (bir öğenin neyden yapıldığı) ve Varlıklar (fiziksel nesneler). {{ui:Kitaplık}} sekmesinde {{ui:Öğe türü}} listesi, Sembolleri ve varlıkları birlikte, yalnızca Sembolleri ya da yalnızca Varlıkları gösterir. Türler bir BimCraft projesinin yapıldığı şeylerdir, bu yüzden CadCraft onları listelemez.

## Kitaplığa oturum açın

{{ui:Kitaplığa oturum aç}}'a tıklayın. Sitede küçük bir pencere açılır; orada oturum açtığınızda CadCraft ekibinizin öğelerini gösterebilir ve yerleştirdiklerinizi kaydedebilir, böylece kullandığınız bir öğe değiştiğinde haberdar olursunuz. Oturum bu tarayıcı sekmesi için geçerlidir. Hesabınızın güvenlik sayfasından istediğiniz zaman iptal edebilirsiniz.

## Öğelerim

{{ui:Öğelerim}}, Kitaplık içinde yalnızca sizin görebildiğiniz özel bir listedir. Genel kitaplıkta, aramada ya da ekibinize gösterilmez ve oturum açtığınız her bilgisayara hesabınızla birlikte gider.

1. Kitaplık panelinde {{ui:Dosyalar…}}'e tıklayın ve bir dosyayı okuyun.
2. Yeniden istediğiniz öğede {{ui:Öğelerimde sakla}}'ya tıklayın.
3. Daha sonra {{ui:Öğelerim}}'e tıklayın ve {{ui:Yerleştir}}'e tıklayın. Herhangi bir kitaplık öğesi gibi yerleşir ve {{ui:Güncellemeleri kontrol et}} onu da kapsar.
4. {{ui:Öğelerimden kaldır}} onu listeden çıkarır. Çizimlere yerleştirilmiş kopyalar yerinde kalır.

Kitaplığa oturum açmış olmanız gerekir. Bir dosyayı okumak hiçbir şey yüklemez; bir öğeyi saklamak yalnızca o öğeyi hesabınıza gönderir.

:::note
Öğelerim denenmektedir ve henüz hesabınız için açık olmayabilir. "Öğelerim bu hesap için henüz açık değil" yazarsa, yine de {{ui:Dosyalar…}} ile kendi dosyalarınızdan öğe yerleştirebilirsiniz.
:::

## Sık yapılan hatalar

- **"IFC türlerinden öğe yapmak BimCraft'tadır."** IFC ve aile dosyaları BimCraft uygulamasında okunur. Öğeyi orada ya da Kitaplık'ta yapın, sonra onun `item.json` dosyasını burada kullanın.
- **"Kitaplığa ulaşılamadı."** Çevrimdışısınız ya da kitaplık çalışmıyor. Çizimde zaten olan öğeler etkilenmez.
- **Bir öğe çok büyük ya da çok küçük.** Çizimin birimleri yanlış ya da ayarlanmamış. Geri alın, {{ui:Birimler}}'i ayarlayın ve yeniden yerleştirin.
