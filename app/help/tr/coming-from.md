---
title: Başka çizim yazılımlarından geliyorsanız
summary: Tanıdık komutların, tuşların ve alışkanlıkların CadCraft'a nasıl karşılık geldiğini ve deneyimli çizimcileri şaşırtan farklılıkları öğrenin.
keywords: geçiş, farklar, taşıma, alışkanlıklar, takma adlar, dinamik giriş, pickfirst, pickadd, qsave, saveas, farklı kaydet, mtext, ctb, kutupsal izleme, xref, klavye kısayolları, tanıdık, copyclip, pasteclip, pasteorig, copybase, pano
from: b58688e7
---

AutoCAD'i ya da aynı modele dayanan bir programı kullandıysanız, bildiğinizin çoğu burada da çalışır: komut satırı, `L`, `C`, `TR` ve `O` gibi takma adlar, yinelemek için Enter ya da Space, pencere ve kesişen pencere ile seçim, F3'te nesne yakalama, F8'de Ortogonal, yerleşimler ve görünüm pencereleriyle model uzayı. Bu sayfa doğrudan karşılık gelenleri ve ardından insanları şaşırtan farklılıkları listeler. İlk bölümü göz atsanız bile ikinci bölümü okuyun.

## Doğrudan karşılık gelenler

| Alışkanlık | CadCraft'ta |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Aynı komutlar, aynı takma adlar |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Aynı |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Aynı ölçülendirme komutları |
| Komut satırına yazılan `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` | Aynı; yeni ölçülendirmeler için |
| `B` ile blok oluşturma, `I` ile ekleme, `PU` ile temizleme | Aynı (temizleme yalnızca kullanılmayan blokları kaldırır) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` ardından `E` ya da `W` | Aynı |
| Bir betikten ya da alışkanlıktan `_LINE` ya da `-LAYER` yazmak | Baştaki `_`, `-`, `.` ya da `'` yok sayılır |
| Boş bir istemde Enter ya da Space, son komutu yineler | Aynı |
| Esc iptal eder; Esc tekrar seçimi temizler | Aynı |
| `@dx,dy`, `@d<a`, doğudan saat yönünün tersine yazılan açılar | Aynı |
| Soldan sağa pencere, sağdan sola kesişen pencere, tıkla-tıkla; kement için basılı tutup sürükleyin, Space pencere / kesişen pencere / çit arasında geçiş yapar (LASSOMODE) | Aynı |
| Önce seçin, sonra komut (isim-fiil) | Aynı; tamamlanan bir komut seçimi temizler |
| Nesne seç isteminde `ALL` ve `L` | Aynı |
| Shift+tıklama seçimden çıkarır | Aynı. Ayarlar, PICKADD 0'da olduğu gibi bir tıklamanın bunun yerine seçimi değiştirmesini sağlayabilir: bkz. [CadCraft ayarları](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Aynı komutlar ve tuşlar; yapıştırma, kopyayı PASTECLIP'te olduğu gibi sol alt köşesiyle yerleştirir |
| F3 nesne yakalama, F7 ızgara, F8 Ortogonal | Aynı tuşlar |
| Tekerleğe çift tıklayarak sınırlara yakınlaştırın | Aynı |
| Aynalanmış metin okunabilir kalır | Aynı (MIRRTEXT 0'da olduğu gibi) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Aynı; Mac'te Command da çalışır |

[Komut başvurusu](topic:commands) her komutu ve takma adını listeler.

:::tip
AutoCAD'in şeridini seviyorsanız, {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Menüler, tuşlar ve fare}} bölümünde {{ui:Klasik çizim}} menü stilini seçin: aynı komut satırının üzerinde Giriş, Ekle, Açıklama, Parametrik, Görünüm, Yönet ve Çıktı sekmeleri; orta düğme kaydırır, sağ tıklama ise Enter'dır. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).
:::

[Komut haritası](topic:command-map), CadCraft'ta bulunan her komutu kısa adlarıyla listeler; [hızlı başvuru](topic:cheat-sheet) ise en çok kullanacağınız 40 komutu içerir (tek sayfalık bir PDF olarak da).

## İnsanları şaşırtan farklılıklar

### Yazılan noktalar mutlaktır

Dinamik giriş açıkken, diğer program ikinci nokta için yazılan `100,0`'ı göreli sayar. **CadCraft'ın komut satırı böyle yapmaz:** orada `x,y` her zaman başlangıç noktasından ölçülür. {{ui:Dinamik}} ({{key:F12}}) açıkken bunun yerine alanlarını kullanın: mesafe, {{key:Tab}}, açı. "Son noktanın 100 sağı" için `@100,0` kullanın ya da imleci doğru yöne getirip yalnızca `100` yazın.

### Shift yakalamaları atlar; Ortogonal'i açmaz

Tıklarken Shift tuşunu basılı tutmak, o tıklama için nesne yakalamalarını yok sayar. Ortogonal'i geçici olarak değiştirmez. F8 tuşunu ya da {{ui:Ortogonal}} düğmesini kullanın.

### Sağ tıklama her zaman Enter'dır

Sağ tıklama menüsü yoktur. Çizimde sağ tıklama Enter'dır: bir komutu bitirir, bir seçimi tamamlar ya da son komutu yineler. Bir tutamaç taşıma ya da seçim kutusu sırasında bunun yerine iptal eder. Kaydırmak için sağ düğmeyle sürükleyin.

### Space ile kaydırma yoktur

Space, Enter'dır; bu yüzden Space'i basılı tutup sürüklemek kaydırmaz. Orta ya da sağ düğmeyle kaydırın ya da tekerlekle uzaklaşıp başka bir yerde yeniden yakınlaştırın.

### Kırp ve Uzat

Kırp ve Uzat, Hızlı kipte başlar: görünen her nesne bir kesme kenarı ya da sınırdır; imlecin altındaki parça neyin gideceğini gösterir, sürüklenen bir yol geçtiği her parçayı kırpar ve hiçbir şeyin geçmediği bir nesne silinir. {{key:Shift}} kırpma ile uzatma arasında geçiş yapar. `O` Standart kipe geçer (önce kenarları seçin), `F` ve `C` çit ve kesişen pencere, `E` EDGEMODE, `R` siler. `P` (Proje) seçeneği yoktur: CadCraft, çizimin düzleminde kırpar.

### Köşe yuvarlatma ve pah kırma

{{cmd:FILLET}} ve {{cmd:CHAMFER}}, bildiğiniz seçenekleri alır: Geri al (U), Çoklu çizgi (P), Yarıçap (R) (ya da Mesafe (D), Açı (A) ve yöntem (E)), Kırp (T) ve Birden çok (M); keskin bir köşe için {{key:Shift}}+tıklama. Bir çoklu çizgi ile bir çizgi arasındaki yuvarlatma, yayı çoklu çizgiye birleştirmek yerine kendi nesnesi olarak ekler; bir yay parçasının yanındaki çoklu çizgi köşeleri olduğu gibi bırakılır.

### Paragraf metni ve tek satırlı metin

`T`, `MT` ve `MTEXT`, bulunduğu yerde yazılan, genişlik, satır aralığı ve hizalama ile birlikte paragraf metnidir; `DT` ve `DTEXT` ise bildiğiniz gibi tek satırlık metindir. Metin stili ya da sütun yoktur ve henüz metin içi biçimlendirme (kalın, üst üste yazılmış kesirler) yazamazsınız; bir dosyadan gelen biçimlendirme korunur, çizilir ve kaydedilir (bkz. [Metin ve etiket ekleme](topic:text#formatting-inside-paragraph-text-from-other-programs)). Her şey Helvetica tarzı bir yazı tipiyle çizilir.

### Kaydet, "bir kopya indir" anlamına gelir

{{key:Mod+S}}, `SAVE` ve `QSAVE`, çizimin biçiminde bir kopya indirir: açtığınız bir DWG, DWG olarak kaydedilir; bir DXF ise DXF olarak. Tarayıcıda hiçbir şey yerinde üzerine yazılmaz ve açılan dosyalar hiçbir zaman değiştirilmez. CadCraft Studio'da {{key:Mod+S}}, açtığınız dosyaya geri yazar.

`SAVEAS` ({{key:Mod+Shift+S}}) bir dosya tarayıcısı değil, küçük bir iletişim kutusudur: {{ui:DWG}} (sürümüyle birlikte, AutoCAD 2000'den 2018'e), {{ui:DXF R12}} ya da {{ui:DXF 2000}} seçin ve {{ui:Kaydet}} tıklayın. İndirmenin nereye gideceğine tarayıcı karar verir. `DXFOUT` her zaman DXF R12 indirir.

Açtığınız bir DWG, geldiği sürümde kaydedilir; yeni bir çizim ise başka bir biçim seçmediğiniz sürece AutoCAD 2000 biçiminde kaydedilir. Sayfalar, ölçülendirmeler ve taralama desenleri korunur. Bkz. [Dosyalar: neyi açar, neyi kaydeder](topic:files#saving).

### Katmanlar: daha basit

- Her katman değişikliği (açık, dondur, kilitle, renk, çıktı, çizgi tipi, çizgi kalınlığı, geçerli katman) tek bir geri al adımıdır.
- CadCraft'ta kapalı ve dondurmanın etkisi aynıdır.
- Bir çizimin bir görünüm penceresinde dondurduğu katmanlar orada donmuş kalır: ekranda, çıktılarda ve DWG ya da DXF olarak kaydettiğinizde.
- Bir katmanı kendi rengi, çizgi tipi, çizgi kalınlığı ya da saydamlığıyla gösteren bir görünüm penceresi, bunu ekranda, çıktılarda ve kaydedilmiş bir DWG'de yapmaya devam eder (DXF katmanın kendi ayarlarını korur; kayıt bunu bildirir). Bunları görünüm penceresi başına değiştirme özelliği henüz yapılmadı.
- Katman özellikleri yöneticisi ve katman durumları yoktur; {{cmd:RENAME}}, {{cmd:LAYMRG}} ve {{cmd:LAYDEL}} katmanları yeniden adlandırır, birleştirir ve siler. Çizgi tipleri ve çizgi kalınlıkları sağ panelde ayarlanır (bkz. [Çizgi kalınlıkları ve çizgi tipleri](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} ve {{cmd:LAYMCUR}} seçerek çalışır.
- DXF R12'ye kaydetmek katman adlarını büyük harfle yazar. Bir DWG ise bunları yazdığınız gibi tutar.

### Ölçülendirme stilleri

`DIMSTYLE`, adlandırılmış stiller için bir yönetici açar (yeni, değiştir, geçerli yap, karşılaştır, uygula). `DIMSCALE` ve diğer ayarlar yine de yeni ölçülendirmelerin kullandıklarını değiştirir; her ölçülendirme kendi boyutlarını korur ve bunları Özellikler panelinde de değiştirebilirsiniz. Geçerli stil dosyada kaydedilmez. Ölçülendirmeler, çizimin uzunluk biçimini (ondalık ya da {{cmd:UNITS}} ile fit ve inç) ya da kendi {{ui:Biçim}} ayarını izler. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings).

### Çıktı almak daha basit

Çıktı stili tabloları, CTB dosyalarında olduğu gibi renge göre çalışır: Tek renk (Monochrome), Renkli (Colour) ve Gri tonlama (Grayscale) yerleşiktir, kendinizinkini oluşturabilirsiniz ve her sayfa kendi tablosunu tutar. CTB dosyalarını okuma, yayımlanmış açıklamaya göre oluşturulmuştur ve yalnızca bizim oluşturduğumuz dosyalarda denenmiştir; adlandırılmış çıktı stili tabloları (STB) ve sayfa yapıları henüz yapılmadı. Çizgiler kendi çizgi kalınlıklarıyla, diğerleri tek bir kalem genişliğiyle basılır. Sayfalar kendi kâğıdında 1:1 çıktı alınır; model seçilen bir ölçekte ya da sığdırılarak çıktı alınır. Bkz. [PDF'e çıktı al](topic:plot-pdf).

### Bir görünüm penceresinin içinde çalışmak

Bildiğiniz gibi: modeli bir görünüm penceresi üzerinden düzenlemek için görünüm penceresinin içine çift tıklayın (ya da {{cmd:MSPACE}} yazın); sayfaya dönmek için dışına çift tıklayın (ya da {{cmd:PSPACE}}). İçeride kaydırma ve yakınlaştırma, görünüm penceresinin gösterdiğini değiştirir; görüntüsü kilitliyse bunun yerine sayfayı hareket ettirirler. Çizimin altındaki bir sekmeye tıklamak da görünüm penceresinden çıkarır. Bkz. [Bir görünüm penceresi üzerinden modelde çalışın](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### İzleme ve dinamik giriş var, ızgara yakalama henüz yok

Izgara yalnızca bakmak içindir; noktalar ona yakalanmaz (F9 yakalama kipi yoktur). Kutupsal izleme ({{key:F10}}, adım {{cmd:POLARANG}} ile ayarlanır) ve nesne yakalama izleme ({{key:F11}}: bir yakalama noktasında durarak onu alın) bildiğiniz gibi çalışır; bkz. [Nesnelere yakalama](topic:object-snaps#polar-tracking). Dinamik giriş ({{key:F12}}), imleçle birlikte mesafeyi ve açıyı (ya da X ve Y'yi) gösterir; bkz. [Koordinat ve mesafe girişi](topic:coordinate-entry#dynamic-input).

### Fit ve inç

{{ui:Uzunluk biçimi}} olarak {{ui:Mimari}} ya da {{ui:Mühendislik}} seçin ({{cmd:UNITS}} yazarak da olur) ve uzunlukları bildiğiniz gibi yazın: `12'6"`, `12'6-1/2"`. Kesirden önce boşluk değil, kısa çizgi kullanın: {{key:Space}} tuşu {{key:Enter}} gibidir. {{ui:Birimler}} ayarını da {{ui:İnç}} yapın; böylece sayfalar ve çıktılar mimari ölçekleri sunar. Biçim, kaydedilmiş DWG ve DXF dosyalarında korunur. Bkz. [Fit ve inç](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopyalama ve yapıştırma CadCraft'ın içinde kalır

{{key:Mod+C}}, {{key:Mod+X}} ve {{key:Mod+V}}, nesneleri bir çizim içinde, çizimler arasında ve aynı tarayıcıdaki CadCraft sekmeleri arasında kopyalar, keser ve yapıştırır. Pano CadCraft'a özgüdür: CadCraft nesnelerini başka bir programa ya da başka bir programın nesnelerini CadCraft'a yapıştıramazsınız. Farklı birimlerdeki bir çizimden yapıştırma yeniden ölçeklenmez: sonradan {{cmd:SCALE}} kullanın. {{key:Mod+D}}, imleçle birlikte hareket eden bir çoğaltmadır; CadCraft'a özgü bir eklemedir. Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

### Kullanamayacağınız tarayıcı tuşları

Bir web sayfası, tarayıcıdan {{key:Mod+N}}, {{key:Mod+W}} ya da {{key:Mod+T}} tuşlarını alamaz: bunlar pencere ve sekmeleri açar ve kapatır. {{ui:Yeni}} düğmesini kullanın ya da `NEW` yazın. Bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys).

## Henüz burada olmayan ve isteyebileceğiniz komutlar

{{cmd:TABLE}} henüz yapılmadı. Yazdığınızda "Bilinmeyen komut" çıkar. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} ve {{cmd:XREF}} yapılmıştır.) [Henüz yapılmadı](topic:not-built-yet) bölümü, bugün bunun yerine ne yapılacağını listeler.
