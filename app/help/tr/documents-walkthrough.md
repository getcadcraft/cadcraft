---
title: Belgeler ve revizyonlar (kasa)
summary: Gerçek bir iş üzerinden adım adım bir yürüyüş: bir proje klasörünü denetim altına almak, bir çizimi teslim almak, değiştirmek, bir notla geri teslim etmek, incelemeye göndermek, onaylamak ve yayınlamak, geçmişi ve neyin kullanıldığını görmek, siz dosyayı tutarken ikinci bir kişinin neyi gördüğünü ve bulut klasörleriyle nasıl çalıştığını öğrenmek.
keywords: kasa, belgeler, yürüyüş, eğitim, teslim al, geri teslim et, revizyon, yayınla, onayla, kilit, geçmiş, bulut klasörü, proje klasörü, belge yönetimi, pdm, iki kişi, paylaşılan klasör
from: 3829528d
---

## Ne yapacaksınız

Siz Ana'sınız; Riverside Clinic üzerinde meslektaşınız Ben ile çalışıyorsunuz. Projenin çizimleri, ikinizin de eriştiği tek bir klasörde durur (paylaşılan bir sürücü, eşitlenen bir klasör ya da bir bulut klasörü). Sonunda bir dosya ilk kopyasından yayınlanmış revizyon **A**'ya, sonra **B.1** olarak yeniden değiştirilmiş olacak; kimin ne yaptığını görmüş ve dosyayı siz tutarken Ben'in ne gördüğünü öğrenmiş olacaksınız.

Her şey, dosyalarınızın yanındaki gizli `.ccvault` klasöründe tutulur: sunucu yok, bir şey yüklenmez (bulut klasörü bir istisnadır, son adıma bakın). Her düğme ve kural için tek bir yerde, uygulamanızda bulunan *Belgeler: teslim alma, revizyonlar ve yayınlama* konusuna bakın.

## 1. Proje klasörünü ayarlayın

1. {{ui:Belgeler…}} öğesini **Görünüm** sekmesinin **Daha fazla** menüsünden seçin ya da `DOCUMENTS` (ya da `DOCS`) yazıp {{key:Enter}} tuşuna basın.
2. {{ui:Proje klasörünü seçin}} öğesini seçin ve projenin çizimlerini barındıran klasörü seçin. (Proje klasörleri Studio'da ve bir klasörü açabilen tarayıcılarda, örneğin Chrome ve Edge'de çalışır. Diğer tarayıcılarda panel bunu söyler.)
3. **Siz:** yanındaki {{ui:Değiştir}} öğesini seçin ve adınızı yazın, `Ana` (sorarsa bu bilgisayarın adını da). Panel artık *Siz: Ana, bilgisayarınızda* yazar. Adınız yaptığınız her şeye eklenir.
4. {{ui:Bu klasörde bir kasa başlat}} öğesini seçin ve projenin adını yazın, `Riverside clinic`. Panel *Riverside clinic için kasa başlatıldı.* yazar.

## 2. Bir dosyayı denetim altına alın

1. **Kasada olmayan dosyalar** bölümünü açın ve `plans/A-101.dxf` yanındaki {{ui:Ekle}} öğesini seçin.
2. Dosya **Kasadaki dosyalar** altında, **A.1** revizyonunda, **Devam eden çalışma** durumunda görünür. A.1 onun ilk kopyasıdır; kasa her revizyonun bir kopyasını tutar.

## 3. Teslim alın, değiştirin, geri teslim edin

1. `plans/A-101.dxf` yanındaki {{ui:Aç}} öğesini seçin. Çizim CadCraft'ta açılır ve panel, görebilmeniz için kapanır. Panel hâlâ bir komut uzaktadır: `DOCUMENTS`.
2. Paneli yeniden açın ve {{ui:Teslim al}} öğesini seçin. Satır artık **Size teslim edildi** yazar. `.ccvault/locks` içinde bir kilit dosyası oluşturuldu; siz geri teslim edene kadar kimse bu dosyayı teslim alamaz.
3. Bir şey çizin: bir çizgi ekleyin, bir duvarı taşıyın. Çizim size teslim edilmedikçe, hiçbir şey kasanın dosyasının üzerine kaydedilemez; {{ui:Farklı kaydet}} her zaman kendi kopyanız için çalışır.
4. Paneli açın, {{ui:Geri teslim et}} öğesini seçin ve neyin değiştiğini yazın (`Moved the door`). Panel *A.2 olarak geri teslim edildi.* yazar. Proje klasöründeki dosya artık açtığınız çizimdir ve kilit kalkar. Hiçbir değişiklik olmadan geri teslim ederseniz revizyon aynı kalır.

Vazgeçerseniz, {{ui:Teslim almayı geri al}} dosyayı yeni bir revizyon olmadan geri verir.

## 4. İnceleme ve yayınlama

1. {{ui:İncelemeye gönder}} öğesini seçin. Durum **İnceleme bekliyor** olur ve dosya salt okunur olur.
2. Onaylamadan önce {{ui:Proje ayarları}} öğesini seçin ve onay verebilecek kişileri listeleyin (her satıra bir ad), örneğin `Ben` ve `Carla`; ayrıca onaylayanın yazardan farklı biri olması gerektiği kuralını işaretleyin. {{ui:Ayarları kaydet}} öğesini seçin. Artık kasa, listede olmayan herkesi reddeder.
3. Ben (ya da Carla) {{ui:Onayla}} öğesini seçer ve onaylayanın adını yazar. Durum **Yayınlandı** olur ve revizyon **A** olur; *onaylayan* ve adı ile birlikte. Yayınlanmış dosya salt okunurdur. {{ui:Geri gönder}} onu, bir nedenle birlikte, Devam eden çalışma durumuna geri döndürürdü.

Onaylayanın adı, panelde yazılan addır; kimlik kanıtı değil, kimin onayladığının bir kaydıdır.

## 5. Yeni bir revizyon

1. Yayınlanmış dosyada {{ui:Yeni revizyon}} öğesini seçin. Bunu bir sonraki harf için tutarsınız.
2. Değiştirin, sonra {{ui:Geri teslim et}}. Revizyon **B.1** olur, devam eden çalışma. Aynı şekilde yayınlayın, **B** olur. İlk geri teslimden önce {{ui:Teslim almayı geri al}} onu **A**'da bırakır.

Revizyon harfleri A, B … Z, AA, AB diye ilerler. Standardınız bazı harfleri atlıyorsa, proje ayarı *ASME Y14.35 sırasını kullan* sonraki revizyonlar için I, O, Q, S, X ve Z harflerini atlar.

## 6. Ne olduğunu görün

Dosyanın adını seçerek ayrıntılarını açın:

- **{{ui:Geçmiş}}**: her olay, en yenisi önde, kim, hangi bilgisayar ve ne zaman ile: Ana tarafından *A.2 olarak geri teslim edildi*, Ben tarafından *Yayınlandı* ve benzeri.
- **{{ui:Revizyonlar}}**: revizyon tablosu. {{ui:Kopyayı aç}} bir revizyonu, kasa dosyasının üzerine yazamayan düz bir kopya olarak açar; {{ui:Şununla karşılaştır}} bir önceki revizyona ya da başka bir revizyona göre neyin eklendiğini, kaldırıldığını ve değiştiğini listeler.
- **{{ui:Kullandıkları}}**: bağlandığı çizimler (xref'ler).
- **{{ui:Kullanıldığı yerler}}**: bu dosyaya bağlanan kasadaki her diğer çizimi listeler: bir temel planı değiştirirseniz hangi sayfaları kontrol etmeniz gerektiğini bilirsiniz.

## Sayfadaki revizyon

Çizim açıkken (ve içinde bir düzen varken), {{ui:Revizyon bloğu}} öğesini seçin: sayfanın sağ üst köşesine yayınlanmış revizyonların bir tablosu çizilir. {{ui:Künyeleri doldur}} öğesini seçerek `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ya da `APPROVED_BY` etiketli künye özniteliklerini doldurun: dosyanın revizyonu, durumu, tarihi ve onaylayanı ile dolar. Bir sonraki yayını onayladığınızda revizyon bloğu güncellenir.

## 7. Siz dosyayı tutarken Ben ne görür

Şimdi dosyayı yeniden teslim alın ve Ben'den aynı proje klasörünü kendi bilgisayarında açmasını ve paneli açmasını isteyin. Dosyanın satırında **Ana tarafından bilgisayarında, ... tarihinden beri teslim alındı** yazısını ve {{ui:Teslim al}} düğmesinin olmadığını görür. Yine de denerse kasa reddeder: kilit, sistemin iki kez oluşturmayacağı bir dosyadır; bu yüzden iki kişi, aynı saniyede bile olsa, klasör Studio'da diskte olduğunda dosyayı ikisi birden tutamaz. (Bir tarayıcıda klasör yalnızca en iyi çabayı sağlar ve panel bunu **Klasör** altında söyler.)

Ana uzaktaysa ve Ben dosyaya ihtiyaç duyarsa, {{ui:Teslim almayı boz}} onu serbest bırakır. Bir neden yazmalıdır; bu neden, kimin teslim aldığıyla birlikte günlüğe yazılır. Proje yöneticileri listeliyorsa yalnızca onlar yapabilir. Bayatlama sınırından (varsayılan 14 gün) eski bir teslim alma *uzun süredir* olarak işaretlenir. Bozulduktan sonra Ana'nın geç geri teslimi reddedilir; böylece ikiniz birbirinizin üzerine yazamazsınız.

## 8. Bulut klasörleri

Bulut klasörü, ekibinizin bulut depolamasında tutulan bir proje klasörüdür; böylece ekibin paylaşılan bir sürücüye ihtiyacı olmaz. CadCraft hesabınızla oturum açmış Studio'da, panel {{ui:Proje klasörünü seçin}} yanında {{ui:Bulut klasörü aç}} öğesini gösterir. Onu seçin ve klasörü seçin; çalışma alanı / klasör biçiminde listelenir. Bir çalışma alanı sahibi klasörü önce oluşturur ve ekibin bulut depolaması etkin olmalıdır. Yukarıdaki her şey aynı şekilde çalışır; kilidi sunucu oluşturur ve bu kilit kişiler arasında sıkıdır. Oturum açmadıysanız panel oturum açmanızı söyler. Normal bir tarayıcı sekmesinde bulut düğmesi sunulmaz; Studio'yu kullanın.

## Deneyin

Yukarıdaki sekiz adımı gerçek bir dosyanın kopyasıyla yapın. İki kişilik adımlar için başka bir kişiye ya da iki adlı iki pencereye ihtiyacınız var. Gerçek bir paylaşılan klasörle denerseniz, Topluluk testi sayfası tam bunu soran bir denetimi listeler ve sonuçları kabul eder.
