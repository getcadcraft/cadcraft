---
title: CadCraft ayarları
summary: Çizim uygulamasına ait ayarlar: imleç boyutu, yapıştırılan kopyanın imlecten nereden asılacağı, bir tıklamanın seçime ne yaptığı, araç çubuğunun kaç satır kullanacağı, komut satırının nerede durduğu ve ne kadar yüksek olduğu, sıkı bir üst alan ve köşe göstergesi.
keywords: komut satırı, yüzen komut satırı, yüzdür, yerleştir, tek satır, f2, komut geçmişi, commandline, cmdline, toparea, üst alan, kompakt, cursorsize, tam ekran imleci, uçtan uca, araç çubuğu satırları, araç çubuğu görünümü, ctrl f1, ayarlar, tercihler, seçenekler, köşe göstergesi, eksen simgesi, ucs simgesi, imleç, artı imleci, seçim kutusu, yapıştırma noktası, temel nokta, nesneye tıklama, seçim, pickadd, shift, sıfırla
from: ae1a81db
---

Ayarları, uygulama çubuğundaki dişli simgesi ya da {{key:Mod+,}} ile açın. İlk sekme, {{ui:CadCraft}}, bu uygulamaya ait ayarları tutar; {{ui:Genel}} ise aile içindeki her uygulamanın paylaştığı ayarları tutar (tema, panel yazı boyutu ve genişlikleri, araç çubuğunun görünümü ve sırası). CadCraft'ın ayarları yalnızca bu uygulamada vardır: onları burada değiştirirsiniz ve bu tarayıcı onları hatırlar. {{ui:CadCraft ayarlarını sıfırla}} her birini başlangıç değerine döndürür.

## İmleç

**Küçük**, **Orta** (başlangıç), **Büyük** ya da **Tam ekran**: çizimdeki artı imlecinin ve seçim kutusunun boyutu. Daha büyük bir seçim kutusu nesneleri biraz daha uzaktan da seçer; dokunmatik ekranda ya da çok ince bir çizimde yardımcı olur.

**Tam ekran**, artı imlecinin iki çizgisini çizimin uçtan uca kenarına kadar uzatır; bir komut çalışmıyorken de, böylece iki şeyin tüm görünüm boyunca hizalandığını gözle kontrol edebilirsiniz. Görünüm bölündüğünde çizgiler üzerinde çalıştığınız bölmede kalır. AutoCAD'deki {{cmd:CURSORSIZE}} 100 ile aynıdır: tam ekran için {{cmd:CURSORSIZE}} yazıp 100; daha küçük bir sayı en yakın boyutu seçer (5'in altı Küçük, 5 ile 9 Orta, 10 ile 99 Büyük).

## Yapıştırma noktası

{{key:Mod+V}} ({{cmd:PASTECLIP}}) sonrası kopyalanmış bir parçanın imlecin neresinden asılacağı, siz tıklayana kadar:

- **Sol alt köşe** (başlangıç): kopyalanan nesnelerin kapsamının sol alt köşesi, AutoCAD'deki gibi.
- **Merkez**: kapsamlarının ortası. Bir simgeyi göz kararı yerleştirmek için kullanışlıdır.

`COPYBASE` ile yapılan bir kopya her zaman seçtiğiniz temel noktadan asılır. {{ui:Olduğu yere yapıştır}} ({{key:Mod+Shift+V}}) bu ayarı yok sayar: özgün koordinatları korur. Bkz. [Kopyalayın, yapıştırın ve çoğaltın](topic:copy-paste).

## Nesnelere tıklama

Hiçbir komut çalışmıyorken çizimde bir tıklamanın seçime ne yaptığı:

- **Seçime ekler** (başlangıç): her tıklama ya da pencere nesne ekler; {{key:Shift}}+tıklama ya da bir {{key:Shift}}+pencere onları çıkarır.
- **Seçimi değiştirir**: bir tıklama ya da pencere yalnızca neyi seçerse onu seçer. {{key:Shift}}+tıklama bir nesne ekler ya da zaten seçili olanı çıkarır; bir {{key:Shift}}+pencere ekler.

Bir komutun içindeki `Nesneleri seçin:` isteminde, tıklamalar her zaman ekler ({{key:Shift}} çıkarır), bu ayar ne derse desin. Bkz. [Nesneleri seçin](topic:select-objects).

## Boş bir yere tıklama

Hiçbir komut çalışmıyorken, bir nesnenin olmadığı yere tıklamanın ne yaptığı. Her iki durumda da bir seçim penceresi başlatır (ikinci bir tıklama onu bitirir).

- **Seçimi temizler** (başlangıç): seçili olan bırakılır. Korumak için tıklarken {{key:Shift}} basılı tutun.
- **Seçimi korur**: seçim kalır, öteki çizim programlarındaki gibi; pencere ona ekler. Seçimi temizlemek için {{key:Esc}}'e basın.

## Seçmek için sürükleme

Boş bir yerde basılı tutup sürüklemenin ne çizdiği:

- **Kement** (başlangıç): serbest el bir hat. Önce sağa doğru hareket ederse tamamen içinde kalanları, önce sola doğru hareket ederse dokunduklarını seçer; sürüklerken {{key:Space}} pencere, kesişen ve çit arasında geçiş yapar.
- **Dikdörtgen**: kutu; bir tıklama ve ikinci bir tıklamayla çizildiği gibi.

{{cmd:LASSOMODE}} `1` ya da `0` aynısını ayarlar. Bkz. [Kement seçimi](topic:lasso-selection).

## Kırpma ve uzatmada sürükleme

{{cmd:TRIM}} ve {{cmd:EXTEND}} içinde, boş bir yerde basıp sürüklemenin ne yaptığı:

- **Bir yol** (başlangıç): serbest el bir yol; geçtiği her parça kırpılır (ya da uzatılır).
- **Bir pencere**: bir kutu; dokunduğu her parça kırpılır, `C` seçeneğinin yaptığı gibi.

Bkz. [Kırp ve uzat](topic:trim-and-extend).

## Araç çubuğu konumu

{{ui:CadCraft}} › {{ui:Araç çubuğu konumu}}: **Üst** (başlangıç, her zamanki gibi), **Alt**, **Sol** ya da **Sağ**. Sol ya da sağda araç grupları, pencereden uzun olduğunda kayan bir sütun halinde dizilir ve düğmeler satır başına iki ya da üç tane olarak sarılır. Seçim ayarlarınızla birlikte kaydedilir ve {{cmd:TOOLBARDOCK}} (`TBDOCK`) onu komut satırından ayarlar. {{ui:Genel}} › {{ui:Düzeni sıfırla}} araç çubuğunu yeniden üste koyar.

Menü stillerinin çubukları araç çubuğunun içinde durur ve onunla birlikte hareket eder; ama {{ui:Şerit}} stili üstte ya da altta uzanacak şekilde yapılmıştır: bir yanda dar, kayan bir sütun alır. Bir telefonda araç çubuğu telefon düzeninin koyduğu yerde kalır.

## Araç çubuğu satırları

Çizimin üstünde araçların kaç satır kullandığı; CadCraft araç çubuğunda ve {{ui:Klasik çizim}} ve {{ui:Şerit}} stillerinde:

- **Pencereye sığdır** (başlangıç): araçlar pencerenin genişliğine göre sarılır.
- **2 satır**: en fazla iki satır. Bu genişlikte araçlar iki satır ya da daha az sarıyorsa sadece sarılırlar; değilse yanlara kayan iki satır olurlar.
- **1 satır**: yanlara kayan tek bir satır, bu da çizime en fazla yer bırakır.

{{key:Shift+Ctrl+F1}} üçü arasında geçer ve {{cmd:TOOLBARROWS}} birini ayarlar. Düğmelerin ne göstereceği (simgeler ve metin, yalnızca simgeler ya da yalnızca metin), {{ui:Genel}} › {{ui:Araç çubuğu}} ayarıdır; {{key:Ctrl+F1}} onun arasında geçer ve {{cmd:TOOLBAR}} onu ayarlar.

## Komut satırı

Komut satırı, her zamanki gibi çizimin altında sabit kalabilir ya da üstünde yüzebilir ve tek satır kadar ince olabilir.

- **Yüzdürün.** Sol ucundaki tutamacı çizime sürükleyin ya da komut satırının sağ ucundaki üç noktadan açılan {{ui:Komut satırı seçenekleri}} menüsünde {{ui:Çizimin üstünde yüzsün}}'ü seçin. Yeniden taşımak için tutamacı sürükleyin; yeri pencere boyutu değiştiğinde korunur. Sağ kenarını sürükleyerek genişletin ya da daraltın. Durum çubuğuna bırakın ya da {{ui:Alta yerleştir}}'i seçin, yeniden yerleşsin.
- **İnceltin ya da yükseltin.** Üst kenarını sürükleyin: her adım tarihçenin bir satırıdır. Sıfıra kadar indirildiğinde **tek satırlık komut satırı** olur: yalnızca istem ve yazdıklarınız, ve yeni bir ileti bir an için üstünde görünür. Üst kenara çift tıklamak tek satır ile önceki yüksekliğiniz arasında geçer.
- **Tarihçe.** {{key:F2}} ya da komut satırındaki saat düğmesi ({{ui:Komut geçmişi (F2)}}), tüm tarihçeyi satırın üstünde açar (yüzen satır pencerenin üst kısmına yakınsa altında). Yazmaya devam ettiğinizde komut satırı yazılır; {{key:PageUp}} ve {{key:PageDown}} tarihçeyi kaydırır ve {{key:Esc}}, {{key:F2}} ya da başka bir yere tıklamak onu kapatır. F2'deki kendi tuşunuz bunun yerine geçer.
- **Klavyeden.** Tutamaç bir düğmedir: odaklıyken ok tuşları yüzen bir komut satırını hareket ettirir ({{key:Shift}} ile daha büyük adımlarla); {{key:Up}} alttaki bir komut satırını yüzdürür ve alt kenarda {{key:Down}} onu yerleştirir. Üst kenar bir ayırıcıdır: {{key:Up}} ve {{key:Down}} bir satır ekler ya da çıkarır, {{key:Home}} tek satır yapar, {{key:End}} en uzun hale getirir. Ekran okuyucular tek satırlık komut satırında da her iletiyi duyar.

{{ui:CadCraft}} › {{ui:Komut satırı}} aynı seçenekleri sunar: {{ui:Altta yerleştirilmiş}} ya da {{ui:Yüzen}}, {{ui:Gösterilen geçmiş satırları}} (0 ile 12) ve {{ui:Standart yükseklik}}. {{cmd:COMMANDLINE}} (`CMDLINE`) bunları komut satırından ayarlar. Yer ve yükseklik bu tarayıcıda CadCraft için diğer düzenle birlikte tutulur, böylece kaydedilmiş bir çalışma ortamı bunları taşır; {{ui:Genel}} › {{ui:Düzeni sıfırla}} komut satırını standart yüksekliğinde yeniden alta yerleştirir. Bir telefonda komut satırı tek satır tarihçeyle alta yerleştirilmiş kalır; tarihçe düğmesi orada da çalışır.

{{ui:CadCraft}} › {{ui:Seçenek harfleri}}, komut seçenekleri için seçtiğiniz harfleri tutar: {{ui:Düzenle…}} dosyayı açar, {{ui:İçe aktar…}} onu sizin seçtiğiniz bir dosyayla değiştirir ve {{ui:Dışa aktar}} kaydeder. Bkz. [Komut seçeneklerine kendi harflerinizi verin](topic:option-letters).

Pencere kısa olduğunda ve düzen denetimi daha sıkı bir düzen önerdiğinde, onun {{ui:Evet}} düğmesi, araç çubuklarından sonra çizim hâlâ kısaysa komut satırını da tek satıra çevirir.

## Üst alan

{{ui:CadCraft}} › {{ui:Üst alan}}: **Standart** (başlangıç) ya da **Kompakt**. Kompakt, her menü stilinde çizimin üstündeki çubukları küçük tutar: grup adları ve simgelerin altındaki sözcükler gider (ipuçları ve ekran okuyucular yine de bunlara sahiptir) ve düğmeler daha sıkı olur. [Araç çubuğu satırları](topic:settings#toolbar-rows) ile birlikte çalışır: Kompakt ve **1 satır** çizime en fazla yer bırakır. {{cmd:TOPAREA}} onu ayarlar.

## Köşe göstergesi

Çizimin köşesinde ne durduğu:

- **Otomatik** (başlangıç): {{ui:Model}} sekmesinde eksen simgesi ve {{ui:3B}} sekmesinde görünüm küpü.
- **Eksen simgesi**: {{ui:Model}} sekmesinin sol altında X ve Y işareti ve 3B sekmesinde küçük bir X, Y ve Z işareti.
- **Görünüm küpü**: her iki sekmenin sağ üstünde bir küp. {{ui:Model}} sekmesinde çizimi üstten gösterir ve başka bir yüze, kenara ya da köşeye tıklamak {{ui:3B}} sekmesini oradan bakacak şekilde açar. 3B sekmesinde görünümle birlikte döner: bir yandan bakmak için tıklayın, yörünge için sürükleyin ve ev simgesi izo görünüme döndürür. Bkz. [Modeli 3B'de](topic:3d-solids).
- **Hiçbiri**: köşede hiçbir şey yok.

Sayfalar ikisini de göstermez.

## Seçimin uzunluğu ve alanı

- **Durum çubuğunda** (başlangıç): nesneler seçiliyken durum çubuğu toplam uzunluklarını ve kapalı olanların toplam alanını gösterir. Bkz. [Bir seçimin toplamları](topic:properties-panel#totals-of-a-selection).
- **Gizli**: durum çubuğu bunları dışarıda bırakır. Özellikler, birden fazla nesne için yine de gösterir.

## Izgara, ortogonal ve yakalamalar

Bunlar iletişim kutusunda değildir: durum çubuğundaki {{ui:Izgara}}, {{ui:Ortogonal}} ve {{ui:Yakala}} düğmeleri (ya da {{key:F7}}, {{key:F8}}, {{key:F3}}) ve yanlarındaki nesne yakalamaları listesi, bıraktığınızda hatırlanır. Bkz. [Nesnelerdeki noktalara yakalanın](topic:object-snaps).
