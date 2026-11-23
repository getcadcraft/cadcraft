---
title: 0.9'da neler yeni (önceki)
summary: Sınırını izleyen taralamalar, katman grupları, üst üste katlar, 2B akıllı duvarlar, kapılar ve pencereler, metin stilleri ve biçimlendirilmiş bir paragraf metni düzenleyicisi, yüzen bir komut satırı, ızgara yakalama, bir yayı on farklı biçimde çizme ve Belgeler paneli.
keywords: yenilikler 0.9, önceki sürüm, yenilikler, 0.9, sürüm notları, değişiklik günlüğü, taralama, ilişkisel taralama, hatchedit, pat dosyası, desen dosyası, katman grupları, laygroup, katlar, üst üste katlar, floorlayers, akıllı duvarlar, duvar, kapı, pencere, duvar araçları, metin stili, stil, mtext düzenleyici, paragraf metni, biçimlendirme, yüzen komut satırı, komut satırı, üst alan, kompakt, ızgara yakalama, grid snap, f9, yay, belgeler paneli, teslim alma, draw.io, dxf r12, yenilikler, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, otomatik tamamlama, hayalet, sketchfix, photosketch, autosheet, details, gridmove, autodim, etiketler, redline, birleştir, git, fossil, access, görmeden çizim, ekran okuyucu, limitler, yön açıları, aunits, shx, diyagram, ole, geçmiş, karşılaştır, sözcüklerle, özellikler, fit ve inç, gerdir, diller, giriş aygıtları, sorunlar, canlı, eklentiler
from: 3451e64c
---

Bu, CadCraft 0.8 ile karşılaştırıldığında CadCraft 0.9'da neyin değiştiğidir. CadCraft, CadCraft Studio 0.9'un 2B ve 3B çizim uygulamasıdır ve sekiz uygulamasından biridir. 0.9 plan çiziminin son halini verir, metin stilleri ve gerçek bir metin düzenleyicisi ekler ve ekranda daha fazla yer sağlar.

## Yeni

### Plan çizimi

- **Sınırını izleyen taralamalar.** {{cmd:HATCH}} kendisini sınırlayanlara bağlanır. Sınırı taşıyın, döndürün ya da ölçekleyin: taralama ve deseni onu izler; yeniden şekillendirirseniz taralama yeniden hesaplanır. {{cmd:HATCHEDIT}} (`HE`) sonradan bir taralamayı değiştirir ve bağı kurar ya da bitirir. Bkz. [Taralama ve dolgu alanları](topic:hatch).
- **Taralama desen dosyaları.** {{cmd:HATCH}} sorusu `İç noktayı belirtin` isteminde `F` (Desen dosyası) yazın ve bir `.pat` dosyası seçin. Yalnızca olağan biçimde yazılmış dosyalar denenmiştir.
- **Katman grupları.** {{ui:Katmanlar}} panelindeki {{ui:Araçlar}}'da: {{ui:Yeni grup}}, {{ui:Hazır grupları ekle}}, {{ui:Ada göre grupla}} ve {{ui:Katman bul}}; ya da {{cmd:LAYGROUP}} (`LG`) yazın. Bkz. [Çizimi katmanlarla düzenleyin](topic:layers#group-layers).
- **Üst üste katlar.** {{cmd:FLOORS}} (`FLR`), ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsündeki {{ui:Katlar…}}. Bir sayfadaki bir görünüm penceresi, Özellikler'de {{ui:Gösterilen kat}} altında tek bir katı gösterebilir. {{cmd:FLOORLAYERS}} katları başka birine gidecek bir dosya için katmanlara çevirir. Bkz. [Bir çizimde katları üst üste koyun](topic:floors).
- **2B akıllı duvarlar, kapılar ve pencereler.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ve {{cmd:DELOPENING}}. Köşeler, T birleşimleri ve kesişmeler sizin için hesaplanır. Duvarlar birleşimlerinin bir kaydını tutar ve Özellikler'de Başlangıçta birleşmeye izin verme / Sonda birleşmeye izin verme, bir Konum çizgisi ve düzenlenebilir bir Uzunluk gelir. Bkz. [2B duvarlar, kapılar ve pencereler çizin](topic:walls-2d).
- **Düzlem duvarlarda duvar aracı.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ve diğerlerini yazın. Henüz araç çubuğu düğmeleri yoktur. Bkz. [2B duvarlar için duvar biçimleri, kesimler, ofsetler ve kilitler](topic:wall-tools-2d).

### Metin

- **Metin stilleri.** {{cmd:STYLE}} (`ST`), ya da {{ui:Çiz}} araç çubuğundaki {{ui:Metin stili}}: bir yazı tipi, yükseklik, genişlik çarpanı ve eğimi olan adlandırılmış stiller. Bkz. [Metin stilleriyle yazı tipini ve boyutunu ayarlayın](topic:text-styles).
- **Biçimlendirilmiş bir paragraf metni düzenleyicisi.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ya da bir metne çift tıklamak; yazı tipi, boyut, kalın, italik, altı çizili, üstü çizili, renk, hizalama ve derece, artı-eksi ve çap işaretleriyle bir kutu açar, ayrıca {{ui:Tamam}} ve {{ui:İptal}}. Bkz. [Paragraf metnini biçimlendirin](topic:format-paragraph-text).
- **draw.io XML'den bir diyagram.** {{cmd:DIAGRAM}} (`T2D`) yapıştırılmış draw.io XML'ini de okur. Bkz. [Metinden bir diyagram çizin](topic:text-to-diagram).
- **PDF çıktısında Tayca metin.** Daha önce soru işaretleri olarak basılıyordu.

### Daha fazla yer ve çizim yardımcıları

- **Yüzen, daha ince bir komut satırı ve kompakt bir üst alan.** Komut satırının tutamacını sürükleyerek yüzdürün, üst kenarını sürükleyerek daha az satır, {{key:F2}} tarihçeyi açar. {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Komut satırı}} ve üst alan seçenekleri aynı ayarlara sahiptir. Bkz. [Ayarlar](topic:settings#command-line).
- **Nesne yakalama menüsü.** Durum çubuğundaki {{ui:Yakala}}'ya sağ tıklayın ya da {{cmd:OSNAP}} yazın.
- **Izgaraya yakalama.** Durum çubuğundaki {{ui:Izgara yakalama}} düğmesi ya da {{key:F9}}: seçilen noktalar, hiçbir nesne yakalaması noktayı almadığında en yakın ızgara noktasına gider.
- **Bir yayı on farklı biçimde çizme ve Devam.** Araç çubuğundaki {{ui:Yay}} ya da {{cmd:ARC}}: 3 nokta, Başlangıç/Merkez/Son ailesi ve Merkez/Başlangıç/Son ailesi ve Devam (başlangıç noktasında {{key:Enter}}'a basın) son doğru, yay ya da çoklu çizgiden.
- **Belgeler paneli.** {{cmd:DOCUMENTS}} (`DOCS`) ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsündeki {{ui:Belgeler…}}: bir proje klasöründeki her çizim için revizyon, durum ve alma/geri verme. Ortalanmış bir iletişim kutusu olarak açılır. Bkz. [Belgeler](topic:documents).

### Dosyalar

- **İngiliz çelik ölçüleri.** Standart panelde 976 kesit, çizimlerde yazıldığı gibi yazılır (örneğin `305x165x40 UB`).
- **Güney Afrika paketleri** (çizim uygulaması ve yapı yönetmelikleri), Yapı yönetmelikleri eklentisinin paketleri olarak. Sayılar doğrulanmamıştır.
- **CadCraft için eklentiler,** talep üzerine eklenir ve varsayılan olarak kapalıdır: iç aydınlatma tasarımı, çip tasarımı (HDL'den yerleşime), yönlendirici oyma, devre simülasyonu, makaralı zincir dişli çarkları ve Yapı yönetmelikleri ülke paketleri.

## Düzeltildi

- Bir taralamayı taşımak, döndürmek ya da ölçeklemek desenini geride bırakıyordu.
- {{cmd:GRIDMOVE}} yalnızca ızgara çizgisinde başlayan bir plan duvarını taşıyordu. Artık bir duvar uçlarıyla değerlendirilir.
- Izgara, sınırlar kapalıyken bile yalnızca çizim sınırlarının içinde görünüyordu.
- Yan paneldeki blok listesi kayar ve bir adla hiçbir blok eşleşmediğinde, onunla başlayan blokları listeler ("Bunu mu demek istediniz?").
- Yaklaşık 2018 ve sonrasının AutoCAD'inden, yüksek bakım sürümü olan DXF R12 dosyaları "Tablo için bilinmeyen grup 1001" ile reddediliyordu; artık açılırlar.
- Çok büyük dosyalar (yaklaşık 70.000 öğe ve üstü) "Maximum call stack size exceeded" ile açılmıyordu.
- AutoCAD 2018 ve sonrasından, yüksek bir bakım sürümü olan DWG dosyaları "bad BITLONG code 11" ile açılmıyordu.
- Paragraf metni kutusunda, seçili bir parça için yazılan yeni boyut seçimi korur.

## Her uygulamada

Denetim ipuçları olan her kontrolde ipucu balonları, kapatabileceğiniz bir başlangıç ipucu, sığmadığında kayan sekme şeritleri ve bir sekmenin açık çizimi izleyen tarayıcı sekmesi başlığı (`<çizim> - CadCraft | CadCraft`). {{ui:Ayarlar}} › {{ui:Düzen}} artık iki satırlık seçeneklerden oluşan bir açılır listedir. {{ui:Ayarlar}}'daki dil listesi 0.8'den daha uzundur. Canlı birlikte düzenleme, Kitaplık koleksiyonları ve ağırlık ve sıcaklık birimleri Studio notlarında anlatılmıştır.

## Dürüst sınırlar

- Paragraf metninde madde ya da numaralı liste, sekme cetveli ya da iki yana yaslama yoktur. Çıktı alınmış PDF'ler metni Helvetica ile yazar.
- Plan duvarları düzdür, bu yüzden bir yay kısa duvarlar olarak çizilir. Duvar aracının topluluk el denetimi bekliyor.
- Katman grupları AutoCAD'in kendi biçiminde yazılmaz, bu yüzden AutoCAD düz bir liste gösterir. Öteki programlar, {{cmd:FLOORLAYERS}} çalıştırmazsanız tüm katları birlikte gösterir.
- Belgeler paneli gerçek bir paylaşımda iki kişi tarafından denenmedi. Yönlendirici oyma hiçbir gerçek makinede çalışmadı. Aydınlatma tahmini bir foton izine karşı denetlendi, başka bir programa karşı değil. Mühendislik eklentileri bir mühendisin incelemesinin yerine geçmez, denetim araçlarıdır.
- İngilizce dışındaki diller makine taslaklarıdır ve yeni sözcüklerin bazıları yalnızca İngilizce'dir.
