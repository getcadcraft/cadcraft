---
title: Komut seçeneklerine kendi harflerinizi verin
summary: Bir komutun seçeneklerine, seçtiğiniz harflerle, herhangi bir dilde, düzenleyebileceğiniz, içe ve dışa aktarabileceğiniz tek bir metin dosyasından yanıt verin.
keywords: seçenek harfleri, optionkeys, optkeys, seçenek anahtar sözcüğü, anahtar sözcük, yeniden eşleme, eşleme, özelleştir, özel harfler, kutupsal, dizi, P, PO, dil, seçenekleri çevir, kısa biçim, içe aktar, dışa aktar, belirsiz
from: 7c8328c6
---

## Neler öğreneceksiniz

Bir komutun seçeneklerine yanıt veren, yazdığınız harfleri nasıl değiştireceğiniz. Örneğin {{cmd:ARRAY}} `[Dikdörtgen/Kutupsal]` sorar ve Kutupsal için `PO` kabul eder; `P` ya da başka herhangi bir harfi de aynısını yapacak şekilde verebilirsiniz, isterseniz kendi dilinizde.

## Seçenekler nasıl yanıtlanır

Bir komut köşeli parantez içinde seçenekler gösterdiğinde, yazılacak harfler büyük harflerdir: `Kutupsal` `PO`'dur, `Çıkış` `X`'tir.

Daha az harf de yazabilirsiniz. Yazdığınız, gösterilen seçeneklerden yalnızca birine uyuyorsa CadCraft onu alır: `[Dikdörtgen/Kutupsal]` ile tek bir `P` Kutupsal'dır. İki seçeneğe uyuyorsa komut satırı onları adlandırır ve yeniden sorar:

```
C could be COUnt, COLumns. Type more letters.
```

Sayılar asla tahmin edilmez: yazdığınız bir uzaklık ya da sayım her zaman sayı olarak okunur.

## Kendi harflerinizi ekleyin

Her komut kendi yerleşik harflerini korur. Kendi harflerinizi bunların üstüne eklersiniz, böylece listeniz yalnızca değiştirdiklerinizi tutar.

1. {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Seçenek harfleri}}'ni açın ve {{ui:Düzenle…}}'ye tıklayın. Ya da {{cmd:OPTIONKEYS}} yazıp {{key:Enter}} tuşuna basın.
2. {{ui:Komut}} altında komutu seçin, örneğin `ARRAY`. Liste seçenek isteyen her komutu içerir ve en son kullandığınız komutta başlar.
3. {{ui:Seçenek}} altında seçeneği seçin. Her biri, parantez içinde yerleşik harflerini gösterir, örneğin `Kutupsal (PO)`.
4. {{ui:Sizin harfleriniz}} alanına istediğiniz harfleri yazın, örneğin `P`, ve {{ui:Ekle}}'ye tıklayın.
5. Seçenek artık {{ui:Sizin harfleriniz}} altında, yerleşik harfleri ve sizinkiyle birlikte görünür. {{ui:Kaydet}}'e tıklayın.

`ARRAY`'i başlatın, bir nesne seçin ve {{key:Enter}}'a basın. İstem seçeneğin yanında sizin harflerinizi gösterir, `Kutupsal (P)`, ve `P` onu yanıtlar.

Birini kaldırmak için, satırının sonundaki x'e tıklayın ve sonra {{ui:Kaydet}}. Seçenek yalnızca yerleşik harflerine geri döner.

## Kullanamayacağınız harfler

Düzenleyici, komut satırının zaten okuduğu bir şeyi gizleyecek harfleri reddeder ve nedenini söyler:

- aynı komutun başka bir seçeneğinin yerleşik harfleri (`ARRAY`'de Kutupsal için `R`, çünkü `R` Dikdörtgen'dir);
- üç ya da daha fazla harfli bir nesne yakalama sözcüğü, örneğin `END`, `MID` ya da `CEN`, ve `ALL` ve `LAST` sözcükleri;
- aynı harfler, bir komutun iki farklı seçeneği için.

Bir satır kırmızıyla listelendiğinde {{ui:Kaydet}} kapalıdır: satırı düzeltin ya da kaldırın, ve geri gelir. Bir istemin yerleşik harfleri her zaman sizinkinden önce gelir, bu yüzden listeniz hiçbir yerleşik yanıtı durduramaz. `L` ya da `C` gibi bir komutun adı olan harfler sorun değildir: bir seçenek isteminde komut satırı bir komut başlatmıyor, bir yanıt okuyor.

Bir komut için listelenen seçenekler, istemleri paylaşan komutlardan gelir; bu yüzden bazen bir komut yalnızca bazı durumlarda sorduğu bir seçeneği de listeler.

## Her komut için tek bir seçim

{{ui:Komut}} altında {{ui:Her komut}}'u seçin. Seçenekler o zaman, herhangi bir komutun sahip olduğu her seçenek olur, örneğin Çıkış ya da Geri al. Orada eklediğiniz harfler, bir komut bunu sunduğunda o seçeneği yanıtlar. Bir komut için eklenen harfler bunların üstünde geçerlidir.

## Kendi dilinizdeki harfler

Harfler herhangi bir alfabeden olabilir; böylece klavyenizi değiştirmeden seçeneklere yanıt verebilirsiniz: {{ui:Her komut}} altında Kapat için `Z` (kendi alfabenizden bir harf) ya da `ARRAY`'de Kutupsal için bir harf ekleyin.

CadCraft yalnızca İngilizce harflerle gelir. Kendi listeniz, sizin, ofisinizin ya da dilinizi paylaşan insanların geri kalanı nasıl ayarladığınızdır ve {{ui:Dışa aktar}} paylaşabileceğiniz bir dosya yapar.

## Metin olarak düzenleyin

Düzenleyicideki {{ui:Metin olarak düzenle}}, aynı listeyi, her seçenek için bir satır olarak metin olarak gösterir; {{ui:Dışa aktar}}'ın kaydettiği de budur:

```
ARRAY.PO,  P
*.X,       Q
```

Her satır komut, bir nokta, seçeneğin yerleşik harfleri, bir virgül ve sizin harfleriniz olarak yazılır. Komutun yerine bir yıldız her komut anlamına gelir. `;` ile başlayan bir satır bir nottur.

## Değişmeyenler

- Yerleşik harfler sizinkilerin yanında çalışmaya devam eder.
- Rutinler ve araç çubuğu düğmeleri yerleşik harfleri kullanmaya devam eder, bu yüzden yüklediğiniz hiçbir şey bozulmaz. Sizin harfleriniz yolunuza girdiğinde yerleşik harfleri kendiniz yazmak için, önüne bir alt çizgi koyun: `_PO`.
- Bir komutun kısa adı başka bir şeydir: bkz. [Komut takma adlarını düzenleyin](topic:command-aliases).

## Reddedilen satırlar

Metin olarak düzenlerken ya da bir dosya içe aktarırken, düzenleyici her sorunu satır numarasıyla listeler:

- komut yoktur (bir komutun takma adı sorun değildir: `AR.PO`, `ARRAY.PO` olarak okunur);
- satır `KOMUT.SEÇENEK, HARFLER` biçiminde değildir;
- harflerde boşluk ya da işaret vardır (yalnızca harf ve rakam, en çok 16);
- aynı harfler, bir komutun iki farklı seçeneğini yanıtlar.

## İçe ve dışa aktarma

{{ui:Dışa aktar}} harflerinizi bir metin dosyası olarak kaydeder; saklamak ya da birine vermek için. {{ui:İçe aktar…}} böyle bir dosyayı okur. İkisi de düzenleyicidedir ve {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Seçenek harfleri}} içindedir.

Ayarlarda {{ui:İçe aktar…}}, dosyanızı seçtiğiniz dosyayla değiştirir. Çakışan ya da kullanılamayan bir satırı olan bir dosya alınmaz; satırları görmek için düzenleyiciyi açıp orada içe aktarın. Düzenleyicide yalnızca kutuyu doldurur: siz {{ui:Kaydet}}'e tıklayana kadar hiçbir şey değişmez.

## Yeniden yükleyin ya da kaldırın

Dosyanızı yeniden uygulamak için {{cmd:REINIT}} yazıp {{key:Enter}}'a basın. Bir harfi kaldırmak için, satırını silin ve {{ui:Kaydet}}'e tıklayın.

## Harfleriniz hesabınızı izler

getcadcraft.com'a oturum açtığınızda harfleriniz hesabınızda tutulur. Aynı hesapla başka bir tarayıcıda ya da başka bir bilgisayarda CadCraft'ı açtığınızda kendiliğinden gelirler; komut satırı `Hesabınızdan seçenek harfleri` der. İki yerde değiştirdiyseniz, en yeni kopya geçerli olur ve onun yerini aldığı bir kez saklanır.

{{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Seçenek harfleri}} durumlarını söyler. Oturumunuz kapalıyken ya da çevrimdışıyken, harfler bu tarayıcıda kalır ve oturum açıkken bunları bir sonraki kez kaydettiğinizde hesabınıza gider.

İlgili: [Komut takma adlarını düzenleyin](topic:command-aliases) · [CadCraft ayarları](topic:settings) · [Komutlar](topic:commands)
