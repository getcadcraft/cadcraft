---
title: Yenilikler: 0.8 ve 0.8.1
summary: Çiziminizi tamamlayan bir hayalet, kalem eskizlerinin ve eskiz fotoğraflarının geometriye dönüşmesi, kendini yerleştiren sayfalar, çizerken önerilen ayrıntılar, GRIDMOVE ve AUTODIM, etiketler, birleştirmeye uygun dosyalar, işaretlemelerin revizyona dönüşmesi, görmeden çizim, çizim sınırları, yön açıları, SHX yazı tipleri, metinden diyagramlar ve 0.8.1'deki düzeltmeler.
keywords: yenilikler, ne yeni, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, otomatik tamamlama, hayalet, Tab, sketchfix, photosketch, autosheet, ayrıntılar, gridmove, autodim, etiketler, redline, merge, git, fossil, erişim, görmeden çizim, ekran okuyucu, sınırlar, yön açıları, aunits, shx, diyagram, ole, geçmiş, karşılaştır, sözlerle, özellikler, fit ve inç, gerdir, diller, giriş aygıtları, sorunlar, canlı, asistanlar
from: 9dd82db5
---

Bu, CadCraft 0.7 ile karşılaştırıldığında 0.8 ve 0.8.1 sürümlerinde değişenlerdir. 0.8 (1 Kasım 2026), kendi çiziminizden çalışan, bilgisayarınızdaki kurallarla ve model kullanmadan çalışan çizim yardımcıları ekler; 0.8.1 (2 Kasım 2026) ise bildirilen hataları düzeltir.

## Yeni

### Düşüncenizi tamamlayan çizim

- **Bir hayalet, sonra gelenleri gösterir.** Hiçbir komut çalışmazken gri kesikli bir hayalet, çizimin kendi kalıplarının neyin sırada olduğunu gösterdiğini gösterir: aynı aralıktaki bir sonraki dikme, merdivenin bir sonraki basamağı, bir odanın eksik duvarı. Bunu tek bir geri alma adımı olarak çizmek için {{key:Tab}}, kapatmak için {{key:Esc}} tuşuna basın. Yalnızca en yeni nesnelere bakar, bu yüzden büyük bir çizimde de akıcı kalır. Bunu {{ui:Ayarlar}} › {{ui:CadCraft}} bölümünden kapatın ya da {{cmd:AUTOCOMPLETE}} `Off` yazın.
- **Bir çizgi çizerken sonraki nokta.** {{cmd:LINE}} veya {{cmd:PLINE}} komutunun ortasında hayalet, sonraki noktadır: bir merdivenin sonraki basamağı, dikdörtgenin dördüncü köşesi ya da onu kapatan nokta. İmleci yakınına getirin ve sanki oraya tıklamışsınız gibi {{key:Tab}} tuşuna basın.
- **Kalem eskizleri hassas geometriye dönüşür.** {{cmd:SKETCHFIX}}: kalem, fare veya parmakla kaba çizgiler çizin; her biri temiz bir çizgiye, daireye, yaya, dikdörtgene veya çoklu çizgiye dönüşür ve zaten çizilmiş olanlara yakalanır. Bkz. [Kalemle eskiz çizin ve hassas geometri elde edin](topic:sketch-with-a-pen).
- **Bir eskizin fotoğrafı çizime dönüşür.** {{cmd:PHOTOSKETCH}} (`PSK`) bir fotoğraftaki kâğıdı bulur, perspektifi düzeltir, verdiğiniz kâğıt boyutunu ve ölçeği uygular ve kalem çizgilerini her kalem rengi için bir katmana izler. Yazılar izlenmez.
- **Kurallarla ölçülendirme.** {{cmd:AUTODIM}} (`ADIM`), seçtiğiniz kenarlar boyunca ölçülendirme zincirleri, genel bir boyut, açıklık genişlikleri, delik çapları ve `Grid` ile ızgara aralığı oluşturur. Zaten var olan bir ölçülendirmeyi asla tekrarlamaz.
- **Bir ızgara çizgisini taşıyın, küme izler.** {{cmd:GRIDMOVE}} (`GM`): ızgara çizgisinde biten duvarlar onunla birlikte uzar, onun boyunca uzanan duvarlar, kolonlar, balonu ve etiketi taşınır ve üzerindeki ölçülendirmeler yeni aralığı ölçer. Tek bir geri alma adımı.

### Sayfalar, ayrıntılar ve etiketler

- **Kendi kendine düzenlenen sayfalar.** {{cmd:AUTOSHEET}} adlandırılmış görünümlerinizi (ya da modelin ayrı parçalarını) alır, bir kâğıt boyutu ve standart bir ölçek seçer ve görünümleri, künyeli ve ad ile ölçek başlıklı yeni sayfalara yerleştirir. Her şey düzenlenebilir kalır. Bkz. [Sayfaları benim için düzenle](topic:lay-out-sheets-for-me).
- **Firmanızın ayrıntıları, çizerken önerilir.** {{cmd:DETAILS}} (`DET`) kendi ayrıntı bloklarınızı tutar. Seçtiğiniz şey, katmanlarındaki, blok adlarındaki ve notlarındaki sözcüklerle birinin eşleştiğinde durum çubuğu bunu bildirir; onu seçin ve yerleştirin. {{cmd:DETAILS}} › Paylaş, listenizi Belgeler klasörünüze koyar ve ekibinizin eklediklerini getirir. {{ui:Ayarlar}} önerileri kapatır.
- **Bloklardaki etiketler.** {{cmd:TAGS}} bir etiketi tanımlar (türü, alabileceği değerler, uygulanacağı bloklar), seçtiğiniz blok başvurularına atar ve bunları CSV olarak kaydedebileceğiniz bir liste olarak sıralar. Tanımlar DWG içinde tutulur. Bkz. [Etiketler](topic:tags).
- **Çizim sınırları.** {{cmd:LIMITS}} çizim için bir dikdörtgen belirler: ızgara onu doldurur ve Tümünü yakınlaştır onu gösterir. Sınırlar bir çerçeve olarak görünür ve kâğıt sınırlarıyla birlikte DWG ve DXF içinde kaydedilir. Bkz. [Çizim sınırlarını belirleyin](topic:drawing-limits).

### Diğer kişilerle ve diğer programlarla çalışma

- **Bir işaretlemeyi revizyona dönüştürün.** {{cmd:REDLINE}}, MarkupCraft'ın yazdığı paketi okur ve her değişikliği listeler. Her birini bir notla kabul edin ya da reddedin; kabul edilenler tek bir geri alma adımında bir revizyon bulutu ve bir revizyon günlüğü alır ve MarkupCraft'taki işaretlemeleri kapatan yanıt dosyasını kaydedersiniz. Bkz. [Bir işaretlemeyi revizyona dönüştürün](topic:redline-to-revision).
- **git ve Fossil'in birleştirebildiği çizimler.** {{ui:Ayarlar}} › {{ui:CadCraft}} bölümünde {{ui:Birleştirmeye uygun dosyalar}} açıkken her nesne asla değişmeyen bir anahtar alır (dosyalar yaklaşık yüzde 10 büyür). `cadcraft merge base ours theirs` komutu, iki kişinin bir DWG veya DXF nesnesi üzerindeki düzenlemelerini nesne nesne birleştirir ve yalnızca iki kişinin aynı şeyi değiştirdiği yerleri bildirir. Bkz. [Bir çizim üzerindeki iki kişinin düzenlemelerini birleştirin](topic:merge-drawings).
- **Neyin değiştiğini sözlerle anlatın.** Geçmiş içinde Karşılaştır, düz bir liste verir: nerelerde şeylerin değiştiği, yerlerin ne kadar büyük olduğu, neyin eklendiği, kaldırıldığı ya da değiştirildiği ve düzenlenen metin. Bkz. [Neyin değiştiğini sözlerle anlatın](topic:changes-in-words).
- **Yön açıları ve açılar.** Açının istendiği her yerde, bir ölçümcünün yön açısı gibi N45°23'30"E ya da derece, dakika ve saniye olarak bir yön yazın; AUNITS açıların nasıl gösterileceğini belirler. Bkz. [Yön açılarını ve açıları yazın ve gösterin](topic:bearings-and-angles).
- **Kendi SHX yazı tipleriniz.** CadCraft'a bir SHX yazı tipi klasörü verin; bunları adlandıran metin stilleri ekranda ve çıktılarda bu yazı tiplerinde çizilir. Bkz. [Metni kendi SHX yazı tiplerinizle çizin](topic:shx-fonts).
- **Metinden bir diyagram.** {{cmd:DIAGRAM}}, bir Mermaid akış şemasını, bir PlantUML bileşen diyagramını, D2 ya da bir kaynaktan-hedefe listesini okur ve düzenleyebileceğiniz bloklar ve bağlayıcılar çizer. Bkz. [Metinden bir diyagram çizin](topic:text-to-diagram).
- **Bir DWG içindeki OLE nesneleri.** {{cmd:OLELIST}}, bir DWG'nin taşıdığı ve CadCraft'ın kendi başına yerleştiremediği OLE nesnelerini listeler ve bir resmin bir kopyasını istediğiniz yere yerleştirir. Bkz. [Resimler](topic:pictures#objects-from-other-programs-ole).
- **Hesaplarınız çizimle birlikte kalır.** Hesap sayfaları ve tasarım gerekçeleri, sınıf tablosuyla birlikte DWG içinde saklanır.

### Görmeden çizim

- {{ui:Görmeden çizim}} seçeneğini {{ui:Ayarlar}} içinde açın (ya da {{cmd:ACCESS}} yazıp `On` ile yanıtlayın). CadCraft her komutu ve sonucu ekran okuyucunuz aracılığıyla seslendirir, çizimi ve imlecin yakınındakileri anlatır, imleci taşımanıza ve noktaları klavyeyle seçmenize izin verir ve her yakalama ve tutamaç için bir ses çalar. Tarayıcınız bilgisayarınızdaki konuşmayı tanıyabiliyorsa komutlar sesle verilebilir. Bkz. [Görmeden çizin](topic:draft-without-sight).

### Her uygulamada

- **Diller.** 54 dil; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikanca, Filipince, Svahili, Özbekçe). İngilizce dışındaki diller, bir ana dil konuşucusu okuyana kadar makine taslağıdır.
- **Giriş aygıtları.** Dokunmatik yüzey, kalem, 3B fare, oyun denetleyicisi ve MIDI denetimleri.
- **Araç çubuğu satırları ve özellik tablosu.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} seçeneği diğer uygulamalarda Sarmala, 2 satır veya 1 satır sunar. CadCraft kendi ayarını {{ui:Ayarlar}} › {{ui:CadCraft}} içinde tutar (bkz. [Araç çubuğu satırları](topic:settings#toolbar-rows)). Ortak özellik tablosu CadCraft'ta değil, diğer üç uygulamadadır.
- **Sorunlar, Canlı ve eklentiler.** Her uygulamada uyaran ortak bir Sorunlar paneli, CadCraft Studio içinde kimin nerede olduğunu gösteren bir Canlı görünüm (bkz. [Bir çizim üzerinde birlikte çalışın](topic:work-live)) ve bir eklenti listesi.
- **Yapay zekânızı bağlayın.** CadCraft Studio'dan sekiz uygulamanın tümüne tek bir bağlantı; uygulama başına salt okunur, öneri ya da düzenleme düzeyi ve asistanın ne yaptığının sade bir günlüğü. CadCraft'ın kendi yapay zekâsı yoktur; her uygulamadaki Her uygulamada sor özelliği, sizin bağladığınız yapay zekâyı kullanır.

## 0.8.1'de düzeltilenler

- **Özellikler, fit ve inç çizimlerinde 150 yerine 12'-6" gösteriyordu.** Uygulamanın kendisinin okuduğu alanlar yeniden metnini korur.
- **Sınıflar bölümü yanlış türde okunan DWG dosyaları** (GitHub cadcraft#5) artık doğru açılır.
- **Artı imleç** artık açılır pencerelerin arkasında görünmez.
- **Studio ve paketlenmiş sürümler** çalışma anında dil değiştirebilir. Önceden yalnızca İngilizceydi. Her platformda henüz sınanmadı: dilin değişmediğini görürseniz bize bildirin.
- **Dikey konumdaki tabletler** boş ızgara yüksekliğini çizim alanına verir ve sayfalar kipi 760 px veya daha az olarak başlar.
- **Kesişen pencereyle STRETCH ve LIMITS,** Studio 0.8.0 üzerinde bildirildi ve 0.8 web sürümünde zaten doğruydu; bildirimi yapanın yükleyicisi daha eskiydi. Studio 0.8.1 bunları içerir.

## Bu sürümde henüz yer almayanlar

- **0.8 ve 0.8.1 kod imzalı değildir.** Windows uyarı gösterebilir ({{ui:Diğer bilgiler}} seçin, ardından {{ui:Yine de çalıştır}}); bir Mac'te CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. Mağaza sürümleri beklemede ve iPad ile iPhone sürümü 0.8.1 için yeniden derlenmedi.
- **Kalem eskizleri ve eskiz fotoğrafları** yalnızca uydurma fotoğraflarda ve bir fareyle denendi; henüz gerçek bir kalemle, dokunmatik ekranla ya da kâğıda el çizimiyle denenmedi.
- **Görmeden çizim** otomatik denetimlerle sınandı; henüz bir ekran okuyucuyla ya da görme engelli bir test kullanıcısıyla sınanmadı.
- **Ayrıntıları paylaşma** iki kişilik bir denetimden geçmedi ve Belgeler klasörü olarak bir Team Cloud Plan klasörü henüz yapılmadı.
- **Birleştirme** CadCraft'ın DWG ve DXF dosyaları için çalışır; diğer uygulamaların dosyaları için aynısı henüz yapılmadı.
- **Pencereler arası geri alma:** CadCraft tamamlanan her adımı bildirir, ancak Studio'nun tüm uygulamalar için tek bir Geri al işlevi henüz yok; her uygulama kendi adımlarını geri alır.
- **Bir DWG'nin OLE nesneleri** korunur ama yerinde çizilmez.
- **Diğer programlardan çıktı stili tablolarını (CTB dosyaları) okuma** yapıldı ama başka bir programın dosyasıyla denenmedi.
- **Yapay zekânızı bağlayın:** Studio içinde tek tıkla bağlantı, tarayıcı yapay zekası için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayımlanan MCP paketi bu sürümde vaat edilmiyor.

Önceki sürüm için bkz. [0.7'de yenilikler](topic:whats-new-0-7).
