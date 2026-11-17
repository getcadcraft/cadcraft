---
title: Çelik profilleri ve standart parçaları yerleştirin
summary: Yayımlanmış tablolardan çelik profilleri, kesitleri ve 3B elemanları çizin; cıvataları, somunları, pulları, pimleri, rulmanları, kamaları ve dişlileri standartlarından yerleştirin ve bir parça listesinde listeleyin.
keywords: çelik, kesit, profil, W profili, geniş flanşlı, I profili, kanal, köşebent, hss, tüp, boru, ipe, hea, heb, upn, kiriş, kolon, eleman, aisc, en 10365, cıvata, vida, somun, pul, pim, dübel, rulman, kama, kama yuvası, dişli, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standart parçalar, parça listesi, malzeme listesi, bom, steelmember, partslist
from: 547c1048
---

Kütüphanenin {{ui:Standart}} sekmesinde, yayımlanmış tablolardan burada oluşturulan iki tür şey vardır (hiçbir şey indirilmez):

- **Çelik kesitler**: 1,335 boyut. W, S, C, L, HSS ve Boru, AISC Shapes Database v16.0'dan; IPE, HEA, HEB ve UPN, EN 10365:2017'den. DetailCraft aynı tabloyu kullanır.
- **Standart parçalar**: altıgen başlı vidalar (ISO 4017), altıgen cıvatalar (ISO 4014), altıgen somunlar (ISO 4032), düz pullar (ISO 7089), inç altıgen cıvatalar ve somunlar (ASME B18.2.1 ve B18.2.2), paralel pimler (ISO 2338), derin oluklu bilyalı rulmanlar (ISO 15), paralel kamalar (DIN 6885-1) ve düz dişliler (modüller ISO 54'ten).

Buradaki her şey CC0 altında paylaşılır: her amaçla kullanabilirsiniz, atıf gerekmez.

## Çelik kesit yerleştirin

1. Kütüphaneyi açın ({{ui:Kütüphane}}, Bloklar grubunda, veya `LIB` yazın) ve {{ui:Standart}} sekmesine tıklayın.
2. İlk listede ailesini seçin, örneğin {{ui:W profilleri}}. Boyutları daraltmak için arama kutusuna yazın: `W12` tüm W12'leri gösterir.
3. {{ui:Şu biçimde yerleştir}} bölümünde şunlardan birini seçin:
   - {{ui:Kesit}}: kesit, merkezi ekleme noktasında.
   - {{ui:Yükseklik (kot)}}: elemanın yandan görünümü, {{ui:Uzunluk (mm)}} neyse o uzunlukta, sol ucunun ortasından.
   - {{ui:3B eleman}}: 3B sekmesinde bir katı (aşağıda).
4. Boyut kartındaki {{ui:Yerleştir}} düğmesine tıklayın, ardından kütüphane öğeleri için olduğu gibi yerin üzerine tıklayın.

Bir kesit veya yükseklik bir blok olur. Öznitelikleri boyutu, geldiği tabloyu, uzunluğu (yükseklik için) ve doldurabileceğiniz bir malzemeyi taşır.

:::note
S profilleri, kanallar ve UPN ortalama kalınlıkta paralel flanşlarla, köşebentler ise kare köşelerle çizilir: gerçek flanşlar eğimlidir ve köşeler yuvarlatılmıştır. W, IPE, HEA ve HEB kök yuvarlatmalarına, HSS ise köşe yarıçaplarına sahiptir.
:::

## 3B eleman yapın

{{ui:3B eleman}} seçeneğini seçin ve {{ui:Yerleştir}} düğmesine tıklayın veya komut satırına {{cmd:STEELMEMBER}} (`SMEMBER`) yazın:

1. `Kesit boyutu` isteminde, gösterilen boyut için {{key:Enter}} tuşuna basın veya bir boyut yazın, örneğin `HSS6x6x1/4` veya `IPE300`.
2. Başlangıç noktasına, ardından bitiş noktasına tıklayın. Eleman bunların arasında uzanır ve zemine oturur.
3. Bir kolon için `C` yazın, taban noktasına tıklayın ve yüksekliğini yazın.

Eleman 3B sekmesinde kapalı bir katıdır. Diğer katılar gibi orada taşıyın veya kopyalayın. {{key:Mod+Z}} onu geri alır.

## Standart parça yerleştirin

1. {{ui:Standart}} sekmesinde ailesini seçin, örneğin {{ui:Altıgen başlı vidalar}}.
2. Bir vida, cıvata, pim veya kama için {{ui:Uzunluk (mm)}} değerini yazın (inç aileler için inç). Bir dişli için {{ui:Dişler}}, {{ui:Yüz genişliği (mm)}} ve {{ui:Delik (mm)}} değerlerini yazın. Bir kutuyu boş bırakırsanız içinde gösterilen olağan değer kullanılır.
3. Boyutta {{ui:Yerleştir}} düğmesine tıklayın ve yerin üzerine tıklayın.

Vidalar, cıvatalar ve pimler yandan çizilir; başın oturma yüzü ekleme noktasındadır. Somunlar, pullar, rulmanlar ve dişliler karşıdan çizilir; kamalar üstten. Dişler olağan biçimde çizilir: dibi ince bir çizgi, dişin ucu kalın bir çizgi olarak. Dişliler diş diş değil, tepe dairesi, taksim dairesi ve diş dibi dairesi olarak çizilir.

Her parçanın bloğu türünü, standardını, boyutunu, uzunluğunu ve malzemesini öznitelik olarak taşır; ağırlığını ise çelikten nominal şekline göre taşır. Malzemeyi {{ui:Özellikler}} panelinden değiştirin.

Aynı parçalar kütüphanede öğe olarak da bulunur ve PartCraft bunları parametrik parça olarak açar ({{ui:Standart parça}}, Dosya grubunda).

## Parça listesi yapın

- Kütüphanede {{ui:Parça listesi}} öğesine tıklayın: çizimdeki her standart parça ve çelik kesit, türe, standarda, boyuta, uzunluğa ve malzemeye göre gruplanmış; miktar ve öğe numaralarıyla. {{ui:CSV indir}} bunu bir elektronik tabloya kaydeder.
- Çizmek için {{cmd:PARTSLIST}} (`PLIST`) yazın, tablonun sol üst köşesine tıklayın ve olağan metin yüksekliği için {{key:Enter}} tuşuna basın veya bir yükseklik yazın.

Liste bloklardaki özniteliklerden okunur; bu yüzden çizim DWG veya DXF olarak kaydedilip yeniden açıldıktan sonra da doğru kalır.

## Yaygın hatalar

- **"… adında bir çelik kesit yok"**: {{ui:Standart}} sekmesinin listelediği gibi boyutu yazın: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Eleman 3B sekmesinde görünür, planda görünmez.** {{cmd:STEELMEMBER}} bir katı oluşturur; görmek için 3B sekmesini açın. Çeliği planda göstermek için bir {{ui:Kesit}} veya {{ui:Yükseklik (kot)}} da yerleştirin.
- **Uzunluk aralık dışında.** Bir cıvata başından uzun olmalıdır, bir kama genişliğinden uzun. Kartların altındaki satır reddedilen değeri belirtir.
