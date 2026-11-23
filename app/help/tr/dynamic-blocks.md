---
title: Dinamik bloklar
summary: CadCraft bir DWG'deki dinamik bloklarla ne yapar: gerçek adlarını korurlar, kaydedildikleri durumu gösterirler, görünürlük durumlarını değiştirirler, diğer değerlerini gösterirler ve kaydedildiklerinde dinamik kalırlar.
keywords: dinamik blok, dinamik bloklar, görünürlük, görünürlük durumu, çevirme, gerdirme, arama, parametreler, özel, blok özellikleri, *u blokları, dinamik
from: dea2ee7c
---

## Neler çalışır

Dinamik bloklarla kaydedilmiş bir DWG şu noktaya kadar çalışır halde açılır:

- **Gerçek adları.** Bir dinamik blok, {{ui:Bloklar}} panelinde kendi adıyla ("Receptacle", "Sink") listelenir; adsız bir `*U` bloğu olarak değil.
- **Kaydedildikleri durum.** Her başvuru, öteki programın gösterdiği tam durumu gösterir: ayarlandığı görünürlük durumu, kaydedildiği gibi gerilmiş ya da çevrilmiş.
- **Görünürlük durumunu değiştirme.** Bir başvuru seçin (ya da aynı bloktan birkaçını), {{ui:Özellikler}}'i açın ve {{ui:Özel}} bölümünde {{ui:Görünürlük}} listesinden başka bir durum seçin. Başvuru o durumu hemen gösterir, öznitelikleriyle birlikte: durumun gizlediği olanlar kaybolur, gösterdiği olanlar değerleriyle birlikte görünür. Bir başvuru her değeri korur, bu yüzden hiçbir şey boş gelmez; {{ui:Özellikler}} gizlenenleri "gizli" işaretiyle listeler. {{key:Mod+Z}} eski durumu tek adımda geri koyar.
- **Tutamaçlar.** Seçili bir dinamik blok, parametrelerinin olduğu yerde kendi tutamaçlarını gösterir: görünürlük durumu için küçük bir üçgen (listeyi görmek için tıklayın), bir mesafenin uçlarında oklar, bir çevirme için çift ok. Bugün yalnızca görünürlük tutamacı işe yarar; diğerleri bunu durum çubuğunda söyler.
- **Diğer değerler, salt okunur.** {{ui:Özel}} bölümünde görünürlük listesinin altında, bloğun mesafeleri, hizalama açıları, çevirme durumları ve noktaları da çizimin tuttuğu gibi gösterilir.
- **Görünürlük durumlarını düzenleme.** Bloğu {{cmd:BEDIT}} ile açın: düzenleyici bir durum gösterir, çizimin üstündeki çubukta adıyla (orada başka birini seçin). {{cmd:BVSTATE}} yazarak geçiş yapın, bir durum ekleyin (her şeyi gizleyerek, her şeyi göstererek ya da görünen şeyi koruyarak), yeniden adlandırın ya da silin; {{cmd:BVHIDE}} seçili nesneleri, görünen durumda gizler; {{cmd:BVSHOW}} gizlenmiş olanları soluk olarak gösterir, böylece geri getirmek istediklerinize tıklayabilirsiniz. Bloğu kaydedin: yeniden adlandırılmış bir duruma ayarlanmış başvurular onu yeni adıyla tutar; silinmiş bir duruma ayarlananlar ilk durumu gösterir.
- **Dinamik olarak kalır.** DWG olarak, çizimin geldiği sürümde kaydedildiğinde, bloklar seçtiğiniz durumla dinamik kalır: öteki program onları aynı dinamik bloklar olarak açar. Düzenlediğiniz görünürlük durumları da kaydedilir: yeni adları, eklediğiniz durumlar ve her birinin neyi gösterdiği.

## Salt okunur olan ya da henüz olmayanlar

| Henüz yok | Bunun yerine, bugün |
|---|---|
| Mesafeleri, açıları ya da çevirmeleri değiştirmek (gerdirme, taşıma, çevirme eylemleri) | {{ui:Özel}} içinde salt okunur gösterilir; bloğu yapan programda düzenleyin. |
| Arama, XY, döndürme ve kutupsal parametreler | Henüz okunmaz: başvuru kaydedildiği gibi görünür. |
| Mesafe, çevirme ve nokta tutamaçlarını sürüklemek | Parametrelerinin olduğu yerde görünürler; görünürlük tutamacı ve Özellikler'deki {{ui:Görünürlük}} listesi durumları değiştirir. |
| Öteki programın türünde dinamik bloklar yapmak (gerdirme, çevirme, arama) | CadCraft'ta yaptığınız bloklar düz bloklardır; {{cmd:BPARAMETER}} bunu söyler. Kendi parametreleriniz ve birkaç görünürlük parametresi Parametre yöneticisindedir (aşağıdaki "Kendi parametreleriniz ve görünürlük durumlarınız" bölümüne bakın). |
| Blok düzenleyicisinde görünürlük durumları olan bir bloğa nesne eklemek ya da silmek | Blok o zaman düz bir blok olarak kaydedilir (düzenleyici kapanırken bunu söyler). |
| Dinamik kalmalarını başka bir DWG sürümünde ya da DXF'te korumak | Seçtiğiniz durumu gösteren düz bloklar olarak kaydedilirler ve kayıt bunu söyler. |

:::note
{{cmd:BEDIT}} içinde bir bloğun nesnelerini taşımak ya da değiştirmek, görünürlük durumları olan bir bloğu dinamik tutar. Durumu olmayan bir blok ya da düzenleyicide nesneleri eklenmiş ya da silinmiş bir blok düz bir blok olur.
:::

## Kendi parametreleriniz ve görünürlük durumlarınız

CadCraft'ta yaptığınız bir blok, kendi parametrelerini ve **birkaç** görünürlük parametresini, her birinin kendi durumlarıyla taşıyabilir. {{cmd:BEDIT}} içinde düzenlediğiniz blok, seçili başvurunun bloğu ya da adını verdiğiniz blok için **Parametre yöneticisini** açmak üzere {{cmd:BPARAMS}} (ya da `BPM`) yazın.

- **Parametreler**: bir ad, bir tür (sayı, uzunluk, açı, sayım, evet/hayır) ve bir değer ya da başka parametreler üzerinde bir formül (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Hesaplanan}} sonucu gösterir. Çalışmayan bir formül ya da türüne uymayan bir değer (1,5 sayım) reddedilir ve yönetici nedenini söyler; başka hiçbir şey değişmez.
- **Görünürlük parametreleri**: {{ui:Görünürlük parametresi ekle}} ilk durumu olan bir tane yapar. Her durum yeniden adlandırılabilir, kaldırılabilir (sonuncusu kalır) ya da bir "şu durumda göster" numarası verilebilir. Bir formül durumu parametrelerden seçer (numarası eşleşen durum, yoksa listedeki o yerdeki durum); formül yoksa her başvuru kendi durumunu seçer.
- **Nesneleri bir duruma koymak**: blok düzenleyicisinde nesneleri seçin, {{cmd:BPARAMS}} yazın ve durumdaki {{ui:Seçili nesneleri buraya koy}} düğmesine tıklayın. Hiçbir görünürlük parametresinin listelemediği nesneler her zaman görünür.
- **Bu başvuru**: seçili bir başvurudan başlatıldığında yönetici, o başvurunun kendi değerlerini ve durumlarını da gösterir.

Blok düzenleyicisi dışında her değişiklik tek bir geri al adımıdır. Blok düzenleyicisinde değişiklikler düzenleyicinindir: {{ui:Bloğu kaydet}} bunları tutar. `-BPARAMS` aynı soruyu komut satırında sorar.

**Dosyada.** DWG ve DXF parametreleri, hangi nesnelerin hangi durumda olduğunu ve her başvurunun kendi değerlerini CadCraft'ın kendi kayıtlarında tutar; dosyayı CadCraft'ta yeniden açtığınızda her şey geri gelir. Öteki program her başvuruyu tüm nesneleriyle birlikte blok olarak görür, çünkü bir DWG kendi türünden her blok için en fazla bir görünürlük parametresi tutar. Öteki bir programın taşıdığı bir başvuru ya da nesneleri değiştirdiği bir blok, artık uymayan parçaları olmadan geri gelir (hiçbir şey tahmin edilmez).
