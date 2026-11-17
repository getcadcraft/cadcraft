---
title: Bir DWG açın, düzenleyin ve bir kopyasını kaydedin
summary: Birinin size gönderdiği bir çizimi açın, neler geldiğini kontrol edin, bir değişiklik yapın ve bir kopyasını DWG ya da DXF olarak geri gönderin.
keywords: dwg, dxf, aç, içe aktar, dışa aktar, kaydet, r12, gidiş-dönüş, danışman, xref, çizimi kontrol et, farklı kaydet, dwg kaydet, biçim
from: 49de4bf6
---

## Ne yapacaksınız

Bir danışmandan gelen bir DWG'yi açacak, CadCraft'ın neyi gösterip neyi gösteremediğini kontrol edecek, bir not ekleyecek, bir sayfayı PDF'e çıktı alacak ve DWG ya da DXF olarak geri göndermek için bir kopya kaydedeceksiniz.

## Dosyayı açın

1. {{key:Mod+O}} tuşlarına basın ya da {{ui:Open}} düğmesine tıklayın.
2. `.dwg` dosyasını seçin.

Çizim okunurken durum satırı "Okunuyor …" yazar. Bittiğinde çizim ekranı doldurur ve geçmiş, örneğin "plan.dwg açıldı: 64 katmanda 18,240 nesne" ve ne kadar sürdüğünü yazar.

:::offline
Çevrimdışısınız. {{ui:Save for offline}} düğmesi "Çevrimdışı hazır" yazıyorsa DWG dosyaları normal açılır. Değilse ve bu sekmede henüz hiçbir DWG açılmadıysa, CadCraft'ın DWG okuyucusu ilk DWG ile getirildiği için DWG açmak başarısız olabilir: bunun yerine bir DXF açın ya da bir sonraki çevrimiçi olduğunuzda CadCraft'ı çevrimdışı kullanım için kaydedin. Bkz. [Çevrimdışı çalışma](common:offline).
:::

## Neler geldiğini kontrol edin

1. Sol panelin {{ui:Drawing}} bölümüne bakın: biçim ve sürüm, birimler, nesne ve katman sayısı ve sayfalar.
2. Altında bir "Bu dosya hakkında" kutusu varsa onu okuyun.

Kutu şunları listeler:

- **Henüz gösterilmiyor:** CadCraft'ın henüz çizemediği nesneler, türüne ve sayısına göre. Tahmin edilmezler, dışarıda bırakılırlar.
- **Düzenler (sayfalar) geldi:** çizimin altındaki sekmelerle açın.
- **Yalnızca çizildiği gibi okunabilen ölçülendirmeler.**

2. Her sayfayı görmek için çizimin altındaki sekmelerde gezinin.
3. {{ui:Current settings}} içinde {{ui:Units}} değerini kontrol edin (hiçbir şey seçili değilken, {{ui:Model}} sekmesinde). {{ui:Unitless}} yazıyor ama çizimin milimetre olduğunu biliyorsanız, ayarlayın; böylece sayfa ve çıktı ölçekleri doğru okunur.

:::tip
Çizimin bir kısmını bekliyorsanız ama göremiyorsanız, {{ui:Layers}} panelini kontrol edin: katman dosyada kapalı ya da donmuş olabilir. Adına tıklayın; geçerli yapar ve bu onu açar.
:::

## Değişikliğinizi yapın

1. Notlarınız için bir katman yapın: {{ui:New layer}} düğmesine tıklayın, `NOTLAR` yazın ve {{key:Enter}}'a basın.
2. `DT` yazın ve {{key:Enter}}'a basın.
3. Notun gideceği yere tıklayın.
4. Çizime uygun bir metin yüksekliği yazın (bkz. [Metin ve etiket ekleyin](topic:text)) ve {{key:Enter}}'a basın.
5. Dönüşü 0'da tutmak için {{key:Enter}}'a basın.
6. Notunuzu yazın ve {{key:Enter}}'a basın.
7. Bitirmek için yeniden {{key:Enter}}'a basın.

İçe aktarılmış ölçülendirmelerde düzenleme yapmak sorun değildir: birini değiştirdiğiniz anda CadCraft onu kendi stiliyle yeniden çizer.

## İnceleme için bir sayfayı çıktı alın

1. Sayfanın sekmesine tıklayın.
2. {{key:Mod+P}} tuşlarına basın.
3. {{ui:Download PDF}} düğmesine tıklayın.

Bkz. [PDF'e çıktı alma](topic:plot-pdf).

## Bir kopya kaydedin

1. {{key:Mod+S}} tuşlarına basın ya da {{ui:Save}} düğmesine tıklayın.

Bir DWG açtığınız için tarayıcı `<ad>.dwg` dosyasını indirir; DWG'nin geldiği sürümde. Geçmiş, örneğin "Plan.dwg kopya olarak kaydedildi (DWG (AutoCAD 2018))." yazar ve altındaki satırlarda yolda değişen her şeyi listeler.

2. Dosyayı göndermeden önce bu satırları okuyun. [Bir DWG neyi korur ve neyi değiştirir](topic:files#what-a-dwg-keeps-and-changes) her birini açıklar.

Orijinal DWG'niz hiçbir zaman değişmez. Her kaydetme yeni bir indirmedir.

## DWG ya da DXF olarak farklı kaydedin

Biçimi kendiniz seçmek için:

1. {{key:Mod+Shift+S}} tuşlarına basın ya da {{ui:Save as}} düğmesine tıklayın.

{{ui:Save a copy as}} iletişim kutusu dört seçenekle açılır; her biri vereceği dosya adıyla birlikte gelir: {{ui:DWG}}, ardındaki {{ui:Version}} listesiyle, {{ui:DXF R12}}, {{ui:DXF 2000}} ve {{ui:DXF 2000 (binary)}}. Çizimin mevcut biçimi ve sürümü zaten seçilidir.

2. İstediğiniz biçime tıklayın. DWG için, diğer ofisin kullandığı sürümü ya da daha eski bir sürümü seçin: AutoCAD 2018, 2013, 2010, 2007, 2004 ya da 2000.
3. {{ui:Save}} düğmesine tıklayın.

Kopya indirilir. Bundan sonra {{key:Mod+S}} bu çizimi o biçimde kaydeder ve yeni çizimler de bu tarayıcıda onunla başlar. {{ui:Cancel}} ya da {{key:Esc}} hiçbir şey kaydetmez ve geçmiş "Kaydedilmedi." yazar.

Hangisini seçeceğiniz:

- **DWG** en çok şeyi korur: görünüm pencereleriyle birlikte sayfalar, gerçek ölçülendirmeler, taralama desenleri, katman ve blok adları yazdığınız gibi ve çok satırlı metin çok satırlı metin olarak. AutoCAD 2000 sürümü en çok programda açılır; 2004 ve sonrası gerçek renkleri de korur.
- **DXF 2000** neredeyse bir DWG'nin tuttuğu her şeyi tutan bir metin dosyasıdır: her sayfa görünüm pencereleriyle birlikte bir düzen olarak, gerçek ölçülendirmeler, taralama desenleri, gerçek renkler, çizgi kalınlıkları, çizgi tipleri ve adlar yazdığınız gibi. AutoCAD 2000 ve sonrasında ve çoğu CAD programında açılır. Çoklu belirtme çizgileri, çizdikleri çizgilere, ok uçlarına ve metne dönüşür. Sürüm 2000 ya da sonrasında açılmış bir DXF, DXF 2000 olarak kaydedilir.
- **DXF 2000 (binary)** içerik olarak DXF 2000 ile aynıdır, ama biçimin ikili (binary) hâlindedir: her sayıyı tam olarak tutan daha küçük bir dosya. Başka programlardan gelen ikili DXF dosyaları metin olanlar gibi açılır ve ikili bir DXF'ten açılmış bir çizim ikili olarak geri kaydedilir.
- **DXF R12** neredeyse her CAD programında açılır. İlk sayfayı görünüm pencereleriyle birlikte, CadCraft'ın diğer sayfalarını da korur. Çok satırlı metin ve taralamalar gibi daha yeni şeyleri sadeleştirir.

## Diğer ofis neyi görecek

Bir DWG'de:

- Çizgiler, yaylar, daireler, elipsler, çoklu çizgiler, metin, çok satırlı metin, öznitelikleriyle bloklar, katı dolgular, taralama desenleri ve katmanlar gördüğünüz gibi.
- Gerçek ölçülendirmeler: gerildiklerinde diğer program onları yeniden ölçer.
- Her sayfa, kağıdı ve görünüm pencereleriyle birlikte.
- Çoklu belirtme çizgileri çoklu belirtme çizgisi olarak. AutoCAD 2000 sürümünde gerçek renkler en yakın standart renge dönüşür.

Bir DXF R12'de:

- Çizgiler, yaylar, daireler, çoklu çizgiler, metin, blok başvuruları ve ölçülendirmeler gördüğünüz gibi. Ölçülendirmeler gerçek ölçülendirme olarak kalır.
- Katman adları büyük harflerle, boşluklar `_` ile değiştirilmiş.
- İlk sayfa, görünüm pencereleriyle birlikte çizimin kâğıt uzayı olarak. Diğer sayfalar `CCLAYOUT_1` gibi adlandırılmış bloklar olarak gelir; her sayfayı bir düzen olarak istiyorlarsa, her sayfanın PDF çıktısını da onlara gönderin.
- Çok satırlı metin ayrı satırlar olarak, elipsler çoklu çizgi olarak, taralamalar dış hatlar olarak.

Her iki durumda da, DWG'yi açtığınızda "Henüz gösterilmiyor" olarak listelenen her şey kopyada **yoktur**, geçmiş bunun korunduğunu söylemedikçe: bir DWG'nin OLE nesneleri ve model uzayındaki 3B katıları, DWG olarak kaydettiğinizde geri yazılır. Onlara söyleyin ve bir PDF de gönderin.

## Sık yapılan hatalar

- **"CadCraft DWG ve DXF çizimlerini açar."** Dosyanın uzantısı farklıdır. `.dwg` ya da `.dxf` olduğundan emin olun.
- **"Bu çizim okunamadı."** DWG bozuk ya da okuyucunun işleyemediği bir sürümde. Bir DXF ya da DWG'nin daha eski bir sürümde kaydedilmiş hâlini isteyin.
- **"Bu ikili DXF bir nesnenin ortasında bitiyor."** Dosya kısa kesilmiş ya da bozulmuş. Okunabilenleri açmak için RECOVER yazın ya da dosyayı yeniden isteyin.
- **Kaydedilen dosyanın adı `ad (1).dwg` ya da `ad (1).dxf`.** Tarayıcı, klasörde aynı adlı bir dosya zaten varsa bunu yapar.
- **Bir DWG'yi açamayan eski bir programları var.** DWG'yi {{ui:Version}} {{ui:AutoCAD 2000}} ile ya da {{ui:DXF R12}} olarak kaydedin: neredeyse her CAD programı onu açar.
- **Çizimin bazı parçaları eksik.** Bağlı çizimler (xref'ler), siz dosyalarını seçene kadar yüklenmez ({{cmd:XREF}}, `R`) ve resimler dosya adlarıyla birlikte çerçeveler olarak görünür.
