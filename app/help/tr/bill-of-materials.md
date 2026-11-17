---
title: Bölgeye göre malzeme listeleri
summary: Çizimin alanlarını bölge olarak işaretleyin ve her biri için içindeki blokları sayan bir tablo yerleştirin. Tablolar siz çalışırken çizimi izler ve her birinin hangi sütunları göstereceğini siz seçersiniz.
keywords: malzeme listesi, BOM, parça listesi, liste, bölge, alan, tablo, sayım, miktar, öznitelik, sütunlar, öğe numarası, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Bir **bölge**, çizimin adlandırılmış bir alanıdır. Bir **malzeme listesi tablosu**, bir bölgenin içinde ya da tüm çizimde ne olduğunu listeler: her blok miktarı ve öznitelik değerleriyle birlikte. Bir çizim istediğiniz kadar bölge ve tablo içerebilir; bir bölgenin farklı sütunlara sahip birden çok tablosu olabilir.

Araçlar Bloklar sekmesinde {{ui:Malzeme listesi}} altında, Bloklar grubunun {{ui:Daha fazla}} menüsünde bulunur ve yazılabilir.

## Bölge oluşturun

{{cmd:BOMZONE}} yazın ve şunlardan birini yapın:

- dikdörtgen için iki karşıt köşeye tıklayın,
- {{ui:Çokgen}} seçin, her köşeye tıklayın ve kapatmak için {{key:Enter}}'a basın, ya da
- {{ui:Nesne}} seçin ve kapalı bir çoklu çizgi, bir daire, bir elips ya da kapalı bir spline seçin. Dış hattı kopyalanır; nesne olduğu gibi kalır.

Sonra bölgenin adını yazın. Bölge, adı sol üst köşenin üstünde olacak şekilde kesikli bir dış hat olarak `BOM-ZONES` katmanında çizilir; bu katman çıktı alınmaz. Bu katman için çıktı açarsanız bölgeler kağıtta görünür.

Bir bölge olağan kapalı bir çoklu çizgidir: taşıyın, uzatın ya da tutamaçlarını sürükleyin; adı onu izler. Bölgeyi yeniden adlandırmak için adın metnini düzenleyin ya da {{cmd:BOMZONE}} ve {{ui:Yeniden adlandır}} seçeneğini kullanın. {{ui:Bölgeler}} her bölgeyi ve kaç tablosu olduğunu listeler.

## Tablo yerleştirin

{{cmd:BOMTABLE}} (ya da {{cmd:BOM}}) yazın, bölgenin dış hattını ya da adını seçin, metin yüksekliğini verin ve tablonun sol üst köşesinin gideceği yere tıklayın. Bir bölge seçmek yerine {{key:Enter}}'a basın ya da {{ui:Bütün}} seçin: çizimin tamamı için bir tablo olur.

Yeni bir tablo öğe numarasını, miktarı, blok adını ve blokların taşıdığı her öznitelik için bir sütunu gösterir (ilk altısı; diğerleri işaretlenmeden sunulur). Aynı ada ve aynı öznitelik değerlerine sahip bloklar bir satırı paylaşır.

## Neyin içeride sayıldığı

- Bir blok, **ekleme noktasını** tutan bölgede sayılır.
- Bir çizgi, yay, daire, çoklu çizgi, elips, spline ya da taralama, kapsamının **orta noktasını** tutan bölgede **bütün olarak** sayılır (bir çizgi için orta noktası). Uzunluğu bölgenin kenarında kesilmez.
- Kenar üzerinde tam duran bir nokta içeridedir.
- Bölgeler üst üste binebilir. Her bölge kendisi için sayar; yani örtüşmedeki bir nesne iki tabloda da yer alır.

## Tablolar çizimi izler

Bir bloğu ekleyip, taşıyıp, kopyalayıp ya da silip, bir özniteliği düzenleyip ya da bir bölgeyi yeniden şekillendirip taşıdığınızda her tablo aynı adımda yeniden çizilir. Geri al, düzenlemenizi ve tablo değişikliğini birlikte geri alır.

Bir tablonun izlemesini durdurmak için ayarlarındaki {{ui:Donmuş}} kutusunu işaretleyin. Donmuş bir tablo yalnızca ayarlarını düzenlediğinizde ya da {{cmd:BOMUPDATE}} yazdığınızda değişir; bu komut tüm tabloları şimdi günceller.

## Sütunları seçin

Bir tabloyu seçin ve {{cmd:BOMEDIT}} yazın. İletişim kutusunda:

- **Sütunlar**: göstermek istediklerinizi işaretleyin (öğe, miktar, ad, katman, uzunluk, alan, notlar ve her öznitelik), herhangi biri için kendi başlığınızı yazın ve yukarı ya da aşağı taşıyın.
- {{ui:Satırları şuna göre grupla}}: blok adı ve öznitelik değerleri, yalnızca blok adı, katman ya da tek bir öznitelik. Birleşik bir satırda bloklar arasında farklılık gösteren bir değer "değişken" yazar.
- {{ui:Şuna göre sırala}}: herhangi bir sütun, artan ya da azalan.
- {{ui:Başlık}}, {{ui:Başlığı göster}} ve {{ui:Toplam satırı}}.
- {{ui:Çizgileri katmana göre say}}: katman başına bir satır ekler; nesne sayısını, toplam uzunluklarını ve kapalı şekiller için toplam alanlarını çizim birimleriyle gösterir.
- **Notlar**: Notlar sütununu işaretleyin, sonra iletişim kutusunun altındaki tabloda herhangi bir satıra not yazın.

Her tablo kendi seçimlerini tutar.

## Öğe numaraları

Bir satır tabloda olduğu sürece öğe numarasını korur. Yeni bir satır bir sonraki boş numarayı alır ve verilmiş bir numara yeniden kullanılmaz; böylece bir numaraya atıfta bulunan balonlar ve notlar doğru kalır. {{ui:Öğeleri yeniden numaralandır}} gösterilen sırayla 1'den başlayarak numaralandırır.

Bir satır neyi gruplandırdığıyla bilinir: satırların nasıl gruplandığını ya da gruplamanın kullandığı bir öznitelik değerini değiştirirseniz satır yeni sayılır.

## Dışa aktarma ve diğer programlar

{{cmd:BOMEXPORT}} ya da iletişim kutusundaki {{ui:CSV olarak dışa aktar}}, bir tabloyu elektronik tablo için bir .csv dosyası olarak kaydeder.

Bir DWG ya da DXF dosyasında bir tablo, olağan bir çizgi ve metin bloğudur; diğer programlar onu çizildiği gibi gösterir ve çıktı alır. Orada bir tablo nesnesi değildir ve diğer programlarda güncellenmez. Bölgesine bağlantı, dosyada CadCraft'ın okuduğu genişletme verisi olarak tutulur; böylece çizimi CadCraft'ta yeniden açtığınızda tablo yeniden canlı olur. Sayfası olmayan bir çizimin R12 DXF'i, bölge katmanının "çıktı alınmaz" ayarını korumaz.

Bir tabloyu patlatmak onu serbest çizgi ve metne dönüştürür ve bağlantıyı sona erdirir.
