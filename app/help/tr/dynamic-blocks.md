---
title: Dinamik bloklar
summary: CadCraft'ın bir DWG'deki dinamik bloklarla ne yaptığı: gerçek adlarını korurlar, kaydedildikleri durumu gösterirler, görünürlük durumlarını değiştirirler, diğer değerlerini gösterirler ve kaydedildiklerinde dinamik kalırlar.
keywords: dinamik blok, dinamik bloklar, görünürlük, görünürlük durumu, çevir, uzat, arama, parametreler, özel, blok özellikleri, *u blokları, dinamik
from: 26b6aa80
---

## Neler çalışır

Dinamik bloklarla yapılmış bir DWG, bunlar şu noktaya kadar çalışır durumda açılır:

- **Gerçek adları.** Bir dinamik blok, {{ui:Bloklar}} panelinde kendi adıyla ("Receptacle", "Sink") listelenir; adsız bir `*U` bloğu olarak değil.
- **Kaydedildikleri durum.** Her başvuru, diğer programın gösterdiği tam olarak neyse onu gösterir: ayarlandığı görünürlük durumu, kaydedildiği gibi uzatılmış ya da çevrilmiş olarak.
- **Görünürlük durumunu değiştirme.** Bir başvuru seçin (ya da aynı bloktan birkaçını), {{ui:Özellikler}}'i açın ve {{ui:Özel}} bölümünde {{ui:Görünürlük}} listesinden başka bir durum seçin. Başvuru o durumu hemen gösterir; öznitelikleri de: durumun gizlediği olanlar kaybolur, gösterdiği olanlar değerleriyle görünür. Bir başvuru her değeri tutar, bu yüzden hiçbiri boş dönmez; {{ui:Özellikler}} gizlileri "gizli" olarak işaretli listeler. {{key:Mod+Z}} eski durumu tek adımda geri getirir.
- **Tutamaçlar.** Seçili bir dinamik blok, parametrelerinin olduğu yerde kendi tutamaçlarını gösterir: görünürlük durumu için küçük bir üçgen (listesi için tıklayın), bir mesafenin uçlarında oklar, bir çevirme için çift ok. Bugün yalnızca görünürlük tutamacı çalışır; diğerleri bunu durum çubuğunda söyler.
- **Diğer değerler, salt okunur.** {{ui:Özel}} bölümünde, görünürlük listesinin altında, bloğun mesafelerini, hizalama açılarını, çevirme durumlarını ve noktalarını çizimin tuttuğu gibi de gösterir.
- **Görünürlük durumlarını düzenleme.** Bloğu {{cmd:BEDIT}} ile açın: düzenleyici tek bir durumu gösterir; çizimin üstündeki çubukta adı yazar (orada başka birini seçin). {{cmd:BVSTATE}} yazarak değiştirin, ekleyin (her şeyi gizleyerek, her şeyi göstererek ya da görünen şeyleri koruyarak), yeniden adlandırın ya da bir durumu silin. {{cmd:BVHIDE}} seçili nesneleri görünen durumda gizler; {{cmd:BVSHOW}} gizli olanları soluk göstererek, geri getirmek istediklerinize tıklayabilmeniz için gösterir. Bloğu kaydedin: yeniden adlandırılmış bir duruma ayarlanan başvurular onu yeni adıyla tutar; silinmiş bir duruma ayarlananlar ilk durumu gösterir.
- **Dinamik kalır.** Çizimin geldiği sürümde DWG olarak kaydedildiğinde bloklar, seçtiğiniz durumla birlikte dinamik kalır: diğer program onları aynı dinamik bloklar olarak açar. Düzenlediğiniz görünürlük durumları da kaydedilir: yeni adları, eklediğiniz durumlar ve her birinin gösterdikleri.

## Salt okunur olan ya da henüz olmayan

| Henüz yok | Bunun yerine, bugün |
|---|---|
| Mesafelerin, açıların ya da çevirmelerin değiştirilmesi (uzatma, taşıma, çevirme işlemleri) | {{ui:Özel}} içinde salt okunur gösterilirler; bloğu oluşturan programda düzenleyin. |
| Arama, XY, döndürme ve kutupsal parametreler | Henüz okunmuyor: başvuru kaydedildiği gibi görünür. |
| Mesafe, çevirme ve nokta tutamaçlarını sürükleme | Parametrelerinin olduğu yerde gösterilirler; görünürlük tutamacı ve Özellikler'deki {{ui:Görünürlük}} listesi durumları değiştirir. |
| Dinamik blok oluşturma (parametre ya da görünürlük durumu ekleme, bunlara sahip olmayan bir bloğa) | CadCraft'ta oluşturduğunuz bloklar düz bloklardır; {{cmd:BPARAMETER}} bunu söyler. |
| Blok düzenleyicide görünürlük durumlarına sahip bir bloğun nesnelerini ekleme ya da silme | Blok o zaman düz bir blok olarak kaydedilir (düzenleyici kapanırken bunu söyler). |
| Başka bir DWG sürümünde ya da DXF'te dinamik tutma | Seçtiğiniz durumu gösteren düz bloklar olarak kaydedilirler ve kaydetme bunu söyler. |

:::note
{{cmd:BEDIT}} içinde nesneleri taşımak ya da değiştirmek, görünürlük durumlarına sahip bir bloğu dinamik tutar. Durumu olmayan bir blok ya da düzenleyicide nesneleri eklenmiş ya da silinmiş bir blok düz bir blok olur.
:::
