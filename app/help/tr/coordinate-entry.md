---
title: Koordinat ve mesafe girişi
summary: CadCraft komut satırında bir noktayı, mesafeyi, açıyı ya da sayıyı yazmanın bütün yolları, örneklerle.
keywords: dinamik giriş, dyn, f12, tab, koordinatlar, mutlak, göreli, kutupsal, @, doğrudan mesafe, açı, derece, son nokta, lastpoint, nokta yazma, giriş, aritmetik, hesaplama, hesap makinesi, cal, artı, kesir, ifade
from: 7de9252d
---

## Noktalar

İstem bir nokta istediğinde bunlardan birini yazın ve {{key:Enter}} tuşuna basın:

| Yazarsınız | Anlamı | Örnek |
|---|---|---|
| `x,y` | Mutlak: 0,0 başlangıç noktasından ölçülür | `2500,1200` |
| `#x,y` | Yine mutlak (alışkanlık için kabul edilir) | `#2500,1200` |
| `@dx,dy` | Göreli: son noktadan sağa ve yukarı | `@600,0` |
| `@d<a` | Göreli kutupsal: son noktadan uzaklık ve açı | `@1500<45` |
| `d<a` | Mutlak kutupsal: başlangıç noktasından uzaklık ve açı | `3000<90` |
| tek bir sayı | Doğrudan mesafe: temel noktadan, artı imlecine doğru o kadar uzakta | `1200` |
| `*x,y`, `@*dx,dy` | Bir UCS ayarlıyken dünya koordinatları | `*0,0` |

Bir UCS ayarlıyken ({{cmd:UCS}}), `x,y`, `@dx,dy` ve `d<a` içindeki açı UCS eksenleri boyunca ölçülür. Bkz. [Görünümü döndürme ve kendi koordinatlarınızı kullanma](topic:ucs-and-turned-view).

Ya da çizimde tıklayın; nesne yakalamaları ve Ortogonal tıklamalara uygulanır.

Kurallar:

- Bir virgül X'i Y'den ayırır. Ondalık sayılarda nokta kullanılır: `1250.75,300`.
- Negatif değerler sola ve aşağıya gider: `@-600,0`.
- Boşluk yazmayın: {{key:Space}} satırı gönderir, tıpkı {{key:Enter}} gibi.
- Sayılar üs da kullanabilir: `1e3`, 1000'dir.
- Birim yazılmaz; fit ve inç gösterimi de yoktur. Düz sayıları çizim birimleriyle yazın.

## Son nokta

`@`, **herhangi bir komutta, herhangi bir nokta isteminde verdiğiniz son noktadan** sayar: bir tıklama, bir yakalama ya da yazılan bir nokta. Komutlar arasında hatırlanır; böylece bitmiş bir çizgiden `@0,500` uzakta yeni bir çizgi başlatabilirsiniz. Henüz hiçbir nokta vermediyseniz `@` 0,0'dan sayar.

Bunun önemli olduğu bazı yerler:

- {{cmd:COPY}} komutunda, ilk kopyadan sonra son nokta o kopyanın noktasıdır. İki kez `@600,0` yazmak, kopyaları orijinalden 600 ve 1200 uzağa yerleştirir.
- Bir ölçülendirme yerleştirdikten sonra son nokta, ölçülendirmenin ucu değil, ölçü çizgisini yerleştirdiğiniz yerdir.

Şüphede kaldığınızda mutlak bir nokta, bir yakalama ya da doğrudan bir mesafe kullanın.

## Doğrudan mesafe girişi

Çıplak bir sayı, komutun **temel noktasından** (lastik bandın başladığı nokta) artı imlecine doğru bir mesafedir:

1. İmleci istediğiniz yönde hareket ettirin.
2. Mesafeyi yazıp {{key:Enter}} tuşuna basın.

{{ui:Ortogonal}} açıkken yön tam yatay ya da tam dikeye zorlanır; bu da dik duvarları çizmenin en hızlı yolunu yapar. Temel nokta yoksa ya da artı imleci tam üstündeyse sayı "Nokta ya da seçenek anahtar sözcüğü gerekli." iletisiyle reddedilir.

## Açılar

- Derece cinsinden, düz bir sayı olarak: `30`, `-45`, `112.5`.
- X'in pozitif yönünden (sağı gösteren) saat yönünün tersine ölçülür: 0 sağ, 90 yukarı, 180 sol, 270 ya da -90 aşağı.
- Bir açı istendiğinde (döndürme, metin açısı) tıklayabilirsiniz: açı, temel noktadan tıklamaya kadar ölçülür. Henüz bir temel nokta yoksa ilk tıklama onu belirler ve istem ikinci bir nokta ister.

## Mesafeler

Bir mesafe istendiğinde (yarıçap, ofset, metin yüksekliği, ölçek faktörü):

- pozitif bir sayı yazın (fit ve inç çizimde `12'6"` ya da `6-1/2` de olur: bkz. [Fit ve inç](topic:units-papers-scales#feet-and-inches-and-fractions)), ya da
- bir nokta tıklayın: komutun temel noktasından o noktaya olan mesafe, ya da
- temel nokta yoksa iki nokta tıklayın: istem `Specify second point` olarak değişir.

"Pozitif bir sayı ya da iki nokta gerekli." iletisi, değerin bir sayı olmadığı ya da negatif olduğu anlamına gelir.

## Yazılan değerde aritmetik

Bir uzunluk, koordinat, açı ya da sayı yazılan her yerde (komut satırı, dinamik giriş, Özellikler kutuları ve iletişim kutuları) `+`, `-`, `*`, `/` ve parantez kullanarak önceden hesaplamadan bir hesap yazabilirsiniz:

| Yazdığınız | Verir |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (fit ve inç çizimde) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, çizimin birimlerinde (birimleri ayarlandığında) |
| `@4+7/16,0` | son noktanın 4.4375 sağında bir nokta |
| `360/7` | 51.43 derecelik bir açı |

- Bir uzunluğa yazılan tire o uzunluğun parçasıdır: `4-7/16`, 4 7/16'dır ve `24'-6"`, 24 fit 6 inçtir. Fit işaretinden sonra çıkarma yapmak için önce uzunluğu bitirin, `24'-0"-6"`, ya da hesabı tirenin etrafında boşluklarla parantez içine alın, `(24' - 6")`. (Parantez içinde boşluk bir boşluktur; dışarıda ise {{key:Enter}} tuşuna basar.)
- Bir uzunluğa eklenen düz bir sayı çizim birimindedir; bir uzunluğu bununla çarpmak ya da bölmek, uzunluğu ölçeklendirir. İki uzunluğun çarpımı bir alan yapar, bu yüzden `2'*3'` reddedilir.
- `abs`, `round`, `ceil` ve `floor` da çalışır: `round(10/3)`.
- Okunamayan bir hesap, nerede yanlış gittiğini söyleyen bir iletiyle reddedilir; örneğin "Hesap çok erken bitiyor (karakter 3): bir değer eksik." Hiçbir şey asla 0 sayılmaz. {{cmd:CAL}} bir hesabın değerini yazdırır.

## Dinamik giriş

{{ui:Dinamik}} ({{key:F12}}, durum çubuğunda), bir komut bir nokta istediğinde artı imlecinin yanına değerleri koyar.

- Henüz temel nokta yoksa (bir çizginin ilk noktası), iki alan **X** ve **Y**'dir.
- Bundan sonra bunlar son noktadan **mesafe** ve **açı**dır.

Yazmaya yine komut satırında devam edilir; artı imlecinin yanındaki alan bunu gösterir ve lastik bant onu izler.

1. Bir değer yazın: vurgulanan alana gider.
2. {{key:Tab}} tuşuna basın (ya da X'ten sonra bir virgül). Değer kilitlenir (kalın gösterilir) ve sonraki alan vurgulanır. Kilitli bir mesafe, siz fareyle nişan alırken lastik bandı o uzunlukta tutar.
3. İkinci değeri yazın ya da sadece nişan alın ve {{key:Enter}} tuşuna basın. `50`, {{key:Tab}}, `90`, {{key:Enter}} son noktadan tam yukarı 50 çizer.

{{key:Tab}} olmadan tek bir değerden sonra {{key:Enter}} tuşuna basmak, doğrudan mesafe girişi gibi çalışır. Alanlarda fit ve inç de çalışır (`12'6"`). Mesafe ve açı istemleri (bir dairenin yarıçapı, bir döndürme) da değerlerini artı imlecinin yanında gösterir.

## Seçenekler ve varsayılanlar

- Seçenekler köşeli parantez içinde görünür. Bir seçeneğin harflerini yazın (`D` ile `[Çap (D)]`, `CL` ile `[Kapat]`) ve {{key:Enter}} tuşuna basın. Daha uzun sözcük başlangıçları da çalışır (`ÇAP` gibi).
- Varsayılan, `<500>` gibi açı ayraçları içinde görünür. Kullanmak için {{key:Enter}} tuşuna basın ya da sağ tıklayın.

## Klavye düzenleri ve tuş takımı

Komut adları, kısa adlar ve seçenek harfleri Latin harflerdir. Yunan, Kiril (Rusça, Ukraynaca, Belarusça, Sırpça, Makedonca, Bulgarca), İbranice, Arapça, Farsça, Tayca ya da Korece bir düzen etkinken düzen değiştirmeniz gerekmez: yazdığınız sözcük, olduğu gibi bir komut, kısa ad ya da seçenek değilse CadCraft onu bastığınız tuşlara göre okur. Latin klavyede `L` harfi taşıyan tuş, düzen o tuşa hangi harfi koyarsa koysun hâlâ `LINE` komutunu başlatır; `C` tuşu da hâlâ kapatma seçeneğine cevap verir. Yukarıdaki eşleşen komutların listesi aynı kuralı izler. Bir komutun metin istediği yerlere yazdığınız metin ({{cmd:TEXT}} içeriği, bir ad) asla değiştirilmez.

Tuş takımının ondalık tuşu virgül veren düzenlerde, o tuş komut satırına ve sayı kutularına bir nokta yazar; böylece `12.5` tuş takımından yazılabilir. Ana klavyedeki virgül tuşu hâlâ `x,y`'yi ayırır.

Her ikisi de {{ui:Ayarlar}} içinde kapatılabilir: {{ui:Commands on a non-Latin keyboard layout}} ve {{ui:Keypad decimal key}}.

## Koordinat göstergesi

Durum çubuğu, yakalamalar ve Ortogonal uygulandıktan sonra artı imlecinin X ve Y değerlerini gösterir (bir UCS ayarlıysa UCS'te). Bir komutun bir temel noktası olduğunda, o noktadan uzaklık ve açıyla birlikte `Δ` ekler, örneğin `Δ 1500 < 30°`: bu, `@1500<30` olarak yazacağınız sayılardır.

Bir noktanın koordinatlarını yazdırmak için {{cmd:ID}}, iki nokta arasını ölçmek için {{cmd:DIST}} kullanın.
