---
title: Sayfa takımları
summary: Birçok çizimdeki sayfaları tek bir numaralı listede toplayın, künyelerini takımdan doldurun, hepsini tek bir PDF olarak yayımlayın ve takımı bir zip olarak arşivleyin.
keywords: sayfa takımı, sayfa takımı yöneticisi, ssm, sheetset, ccsheets, dst, sayfa listesi, sayfa dizini, künye, alanlar, yayımla, yeniden numaralandır, arşivle, etransmit, iletim belgesi, alt kümeler, kapak sayfası, çizim listesi
from: 2c855720
---

## Öğrenecekleriniz

Birkaç çizim dosyasından sayfaları (düzenleri) bir **sayfa takımı** içinde nasıl toplayacağınızı, numaralandırıp adlandıracağınızı, künyelerinin sizin için doldurulmasını, tüm takımı tek bir PDF olarak yayımlamayı ve her şeyi göndermek için tek bir zip'e paketlemeyi öğreneceksiniz.

Sayfa takımı kendi küçük dosyasında yaşar, `<ad>.ccsheets`, çizimlerin bulunduğu klasörde. Takım dosyası sayfaları o klasöre göre yollarla listeler; böylece tüm klasörü taşıyabilir ya da kopyalayabilirsiniz.

:::note
Bir klasörü okumak ve yazmak için Chrome ya da Edge gerekir (sayfanın seçtiğiniz bir klasörde çalışmasına izin verebilirler) ya da masaüstü uygulaması. Diğer tarayıcılar takımı salt okunur açar: ona bakabilir ve yayımlayabilirsiniz, takım dosyası ise kaydetmek yerine indirilir.
:::

## Takım başlatın

1. Sol paneldeki {{ui:Sayfa takımı}} bölümünü bulun ve {{ui:Takım}} menüsünü açın. {{cmd:SHEETSET}} (ya da `SSM`) yazmak da sizi oraya getirir.
2. {{ui:Yeni takım…}} seçin. Takıma bir ad verin ve isterseniz proje adını ve numarasını girin.
3. Çizimleri tutan klasörü seçin. Takım dosyası oraya kaydedilir.

Takımı daha sonra açmak için {{ui:Takımı aç…}} seçin ve aynı klasörü seçin. Klasörde birden fazla takım varsa CadCraft hangisi olduğunu sorar.

## Sayfa ekleyin

1. {{ui:Bir çizimden sayfa ekle…}} seçin ve klasördeki çizimlerden birini seçin.
2. CadCraft o çizimi arka planda okur (ekranda açılmaz) ve sayfalarını listeler. İstediklerinizi işaretleyin ve {{ui:Tamam}}'a tıklayın.
3. Bir sayfayı seçin ve numara ile başlık vermek için {{key:F2}}'ye basın (ya da {{ui:Yeniden adlandır ve numaralandır…}}), örneğin `A-101` ve `Kat planı`.

{{ui:Şablondan yeni sayfa…}} başka bir çizimin sayfasından (künyesi ve görünüm pencereleri) yeni bir çizim oluşturur, yeni sayfanın adını alır ve ekler. Takım, şablon olarak kullandığınız çizimi hatırlar.

## Takımı düzenleyin

- **Alt kümeler** sayfaları gruplar, örneğin Mimari › Planlar: nereye gideceğini seçin ve {{ui:Yeni alt küme…}} seçin.
- **Sıra**: bir sayfayı listede başka bir yere sürükleyin ya da bir alt kümeye bırakarak oraya taşıyın. Klavyeyle, seçin ve {{key:Alt+Up}} ya da {{key:Alt+Down}}'a basın.
- **Bir sayfayı açın**: çift tıklayın (ya da {{key:Enter}}'a basın). Çizimi kendi sekmesinde, o sayfada açılır.
- **Kaldırın**: seçin ve {{key:Delete}}'e basın. Çizimin kendisi değişmez.
- **Geri alın**: {{ui:Takım değişikliğini geri al}} ve {{ui:Takım değişikliğini yinele}} takımda değiştirdiklerinizde adım adım gezinir.
- **Yeniden numaralandırın**: {{ui:Sayfaları yeniden numaralandır…}} her sayfayı, ya da bir alt kümenin sayfalarını, listedeki sıraya göre numaralandırır: bir önek, bir başlangıç ve bir adım (`A-` ve `101` A-101, A-102 … verir).

Her değişiklik takım dosyasına hemen kaydedilir.

## Sayfaları alanlarından numaralandırın

Sayfaları elle numaralandırmak yerine, bir kuralın her numarayı sayfanın alanlarından oluşturmasına izin verin; böylece başka bir kata ya da disipline taşınan bir sayfa yeni numarasını kendiliğinden alır.

1. Her sayfaya alanlarını verin: seçin, {{ui:Yeniden adlandır…}}'a tıklayın ve {{ui:Bu sayfanın alanları}} içine her satıra bir tane yazın, örneğin `DISCIPLINE = A` ve `LEVEL = 1`. Bütün takımın paylaştığı bir alan (diyelim `DISCIPLINE = A`) bunun yerine takımın {{ui:Özellikler…}} kısmına konabilir.
2. Panelin menüsünü açın ve {{ui:Numaralandırma kuralı…}}'na tıklayın.
3. Kuralı yazın, örneğin `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` diğer alanları aynı olan sayfalar arasında sayar; böylece kat 1 A-101, A-102 alır ve kat 2 A-201 ile yeniden başlar. `{SEQ:2}` iki basamakla yazar; `{SUBSET}` bir sayfanın içinde olduğu alt kümenin adıdır.
4. Bir alan değiştiğinde ne olacağını seçin: {{ui:Sayfaları yeniden numaralandır}} her değişiklikten sonra numaraları kuralı izleyecek şekilde tutar; öteki seçenek onları yalnızca şimdi bir kez numaralandırır.

Kural takım dosyasına kaydedilir. Kendi kendine yeniden numaralandırırken, bir sayfanın numarasını değil, alanlarını değiştirin.

## Künyeleri takımdan doldurun

Bir künye metni, öznitelikleri bir alanın adıyla etiketlendiğinde takımdan alır:

| Etiket | Gösterdiği |
|---|---|
| `SHEETNUMBER` (ya da `SHEET_NO`, `DWG_NO`) | Sayfanın numarası |
| `SHEETTITLE` (ya da `TITLE`, `SHEET_TITLE`) | Sayfanın başlığı |
| `SHEETDESC` | Sayfanın açıklaması |
| `PROJECTNAME` (ya da `PROJECT`) | Proje adı |
| `PROJECTNUMBER` (ya da `PROJECT_NO`, `JOB_NO`) | Proje numarası |
| `SHEETSETNAME` | Takımın adı |
| `SHEETINDEX`, `SHEETCOUNT` | "12 içinden 3" ve 12 |
| Kendi alanlarınız, örneğin `CLIENT` | {{ui:Künye alanlarını ayarla…}} içine yazdığınız değer |

{{ui:Künye alanlarını ayarla…}} proje adını ve numarasını ile kendi alanlarınızı tutar; her satırda `AD = değer` biçiminde.

{{ui:Çizimleri güncelle}} takımdaki her çizimin künyelerine numaraları, başlıkları ve alanları yazar ve her sayfanın düzen sekmesini takımın dediği gibi yeniden adlandırır (varsayılan olarak numara ve başlık, örneğin `A-101 Kat planı`; {{ui:Künye alanlarını ayarla…}} › {{ui:Düzen sekmesi adları}} bunu değiştirir). Her çizim olduğu yerde, kendi biçim ve sürümünde kaydedilir. Sayfaları yeniden numaralandırdıktan ya da adlandırdıktan sonra yeniden çalıştırın; sekmeler ve künyeler izler.

## Kapak sayfasında bir sayfa listesi

Listede kapak sayfasını seçin ve {{ui:Sayfa listesini bu sayfaya koy}} seçin. Her sayfanın tablosu (numara ve başlık, alt kümesinin altında) sayfanın sol üst köşesine yerleşir. {{ui:Çizimleri güncelle}} ve {{ui:PDF olarak yayımla}} bunu güncel tutar. Tek bir bloktur, `CC_SHEETLIST`: herhangi bir blok başvurusu gibi taşıyın.

## Takımı yayımlayın

{{ui:PDF olarak yayımla}} takımın sırasında, her sayfa için bir sayfa ve her sayfa için bir yer imi ("A-101 — Kat planı") içeren tek bir PDF üretir; her sayfa kendi kâğıt boyutundadır. Bir alt küme seçiliyken CadCraft yalnızca o alt kümeyi yayımlamak isteyip istemediğinizi sorar. PDF'deki künyeler, çizimleri güncellemeden önce bile takımdan doldurulur; yayımlama çizimleri değiştirmez. PDF indirilir.

{{ui:DWG olarak yayımla…}} her sayfayı kendi DWG'si olarak yazar (DWG 2018): model ve o tek sayfa, künyesi takımdan doldurulmuş, numarası ve başlığıyla adlandırılmış (`A-101 Level 1 floor plan.dwg`). {{ui:DWG}} seçin ya da yanlarına takımın PDF'i için {{ui:DWG + PDF}} seçin. Bir `publish.json` her dosyayı boyutu ve SHA-256 ile listeler. Takımın klasörü yazılabilirse (CadCraft Studio ya da tarayıcıda seçtiğiniz bir klasör) dosyalar `<takım adı> - yayımlanmış` adlı bir klasöre gider; aksi halde tek bir zip olarak indirilir. Görünüm penceresi [sınıf geçersiz kılmaları](topic:viewport-overrides) her DWG ile birlikte gelir.

## Takımı arşivleyin

{{ui:Zip olarak arşivle}} takım dosyasını, kullandığı her çizimi ve bu çizimlerin bağlandığı şeyleri (bağlı çizimler, onların da bağlı oldukları ve resimler) klasörlerini koruyarak paketler ve her dosyayı listeleyen bir `Transmittal.txt` ekler. Takımın klasöründe olmayan bir bağlantı orada eksik olarak listelenir. Bağlantılar çizimden yollarına göre, sonra klasörün herhangi bir yerinde dosya adlarına göre bulunur.

## Takım dosyası

`.ccsheets` dosyası herhangi bir metin düzenleyicide okuyabileceğiniz bir JSON'dur:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Yollar takımın klasörüne göre, klasörler arası `/` ile yazılır. CadCraft onu açarken denetler: mutlak bir yol, dosyası ya da yerleşimi olmayan bir sayfa ya da düz olmayan bir metin dışarıda bırakılır ve geçmiş bunu söyler.

## Sorun giderme

| Gördükleriniz | Nedeni | Ne yapmalısınız |
|---|---|---|
| "Bu klasör burada salt okunur" | Tarayıcı bu klasöre yazamaz | Chrome ya da Edge'i ya da masaüstü uygulamasını kullanın; bu arada {{ui:Takım dosyasını indir}} değişikliklerinizi korur |
| Bir sayfa PDF'den eksik: "has no layout named …" | Sayfanın düzeni çizimde yeniden adlandırılmış ya da silinmiş | Çizimi açın ve sekmelerini denetleyin; sayfayı kaldırıp yeniden ekleyin |
| Bir künye boş kalır | Öznitelikleri başka etiketlere sahip | Öznitelik etiketlerini yukarıdaki alan adlarına göre yeniden adlandırın (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Bir çizimin iki sayfası aynı sekme adını alırdı | Birine başka bir numara ya da başlık verin |
