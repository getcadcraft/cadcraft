---
title: Blok oluşturma ve ekleme
summary: Çizilmiş bir kapıyı blok yapın, onu başka konumlarda, ölçeklerde ve açılarda yeniden yerleştirin ve kullanılmayan blokları temizleyin.
keywords: blok, bmake, ekle, ddinsert, sembol, purge, explode, yeniden tanımla, temel nokta, başvuru, say, bcount, liste, csv, öznitelikler, veri çıkarma
from: 125a129d
---

## Ne oluşturacaksınız

Bir kapı sembolünü `DOOR-900` adlı bir bloğa dönüştürüp üç kez yerleştireceksiniz: çizildiği gibi, 90 derece döndürülmüş ve aynalanmış olarak.

Blok, adlandırılmış bir nesne grubudur. Onu bir kez çizersiniz; kullanıldığı her yer tek tanıma işaret eden bir **blok başvurusu** olur. Sol paneldeki {{ui:Bloklar}} bölümü çizimdeki blokları ve her birinin kaç kez kullanıldığını listeler.

## Kapıyı çizin

1. `L` yazıp {{key:Enter}} tuşuna basın.
2. `0,0` yazıp {{key:Enter}} tuşuna basın.
3. `@0,900` yazıp {{key:Enter}} tuşuna basın, ardından bir kez daha {{key:Enter}} tuşuna basın. Bu kapı kanadıdır.
4. `A` yazıp {{key:Enter}} tuşuna basın.
5. Önce merkezi vermek için `C` yazıp {{key:Enter}} tuşuna basın.
6. Merkez için `0,0` yazıp {{key:Enter}} tuşuna basın.
7. Başlangıç noktası için `900,0` yazıp {{key:Enter}} tuşuna basın.
8. Bitiş noktası için `0,900` yazıp {{key:Enter}} tuşuna basın. Bu, kapının açılma yayıdır.
9. {{ui:Sınırlar}} düğmesine tıklayın.

Yaylar, saat yönünün tersine, başlangıç noktasından bitiş noktasına doğru çizilir.

## Bloğu oluşturun

1. `B` yazıp {{key:Enter}} tuşuna basın ya da Bloklar grubundaki {{ui:Oluştur}} düğmesine tıklayın.
2. `Blok adını girin` isteminde `DOOR-900` yazıp {{key:Enter}} tuşuna basın.
3. `Ekleme temel noktasını belirtin` isteminde `0,0` yazıp {{key:Enter}} tuşuna basın. Bu menteşedir: blok yerleştirildiğinde tıkladığınız yere gelen noktadır.
4. `Nesneleri seçin` isteminde yaprağın ve yayın etrafına bir pencere sürükleyin.
5. {{key:Enter}} tuşuna basın.

Geçmiş şunu yazar: `"DOOR-900" bloğu 2 nesneden oluşturuldu ve bunlar tek bir başvuruyla değiştirildi.` {{ui:Bloklar}} panelinde DOOR-900'ün yanında `1×` görünür: bir başvuru vardır. Kapıya tıklayın: artık tek bir nesne olarak, "Blok başvurusu" olarak seçilir.

:::tip
Önce nesneleri seçip sonra `B` yazabilirsiniz. CadCraft yine adı ve temel noktayı sorar, sonra seçiminizi kullanır.
:::

## Bloğu ekleyin

1. `I` yazıp {{key:Enter}} tuşuna basın ya da {{ui:Bloklar}} panelinde DOOR-900 yanındaki {{ui:Ekle}} düğmesine tıklayın.
2. `Blok adını girin veya [Dosya (F)/Kütüphane (L)] <DOOR-900>` isteminde {{key:Enter}} tuşuna basın. (Paneldeki {{ui:Ekle}} düğmesi adı sizin için doldurur.)
3. Kapı çapraz imleci izler. Menteşenin gitmesini istediğiniz yere tıklayın.

İkinci bir kapı belirir.

## Döndürülmüş ya da ölçeklenmiş ekleme

1. `I` yazıp {{key:Enter}} tuşuna basın, ardından adı kabul etmek için {{key:Enter}} tuşuna basın.
2. `Ekleme noktasını belirtin [Ölçek (S)/Döndür (R)]` isteminde `R` yazıp {{key:Enter}} tuşuna basın.
3. `90` yazıp {{key:Enter}} tuşuna basın. Önizleme döner.
4. Yerleştirmek için tıklayın.

Bunun yerine bir ölçek faktörü ayarlamak için `S` yazın; ölçek her iki yönde de uygulanır. Ölçek ve döndürme bir sonraki ekleme için hatırlanır. Kapıyı aynalamak için onu ekleyin ve başvuru üzerinde {{cmd:MIRROR}} komutunu kullanın.

## Yerleştirilmiş bir bloğu değiştirin

Bir blok başvurusu seçin. Sağ panelde {{ui:X}}, {{ui:Y}}, {{ui:X ölçeği}}, {{ui:Y ölçeği}} ve {{ui:Döndürme}} değerlerini değiştirebilirsiniz. Negatif bir {{ui:X ölçeği}} değeri onu ters çevirir.

## Bloğu yeniden tanımlayın

Her kapıyı aynı anda değiştirmek için aynı adla bir blok oluşturun:

1. Kapının yeni sürümünü çizin.
2. `B` yazıp {{key:Enter}} tuşuna basın ve `DOOR-900` yazın.
3. `Blok "DOOR-900" zaten var. Yeniden tanımlansın mı?` isteminde `Y` yazıp {{key:Enter}} tuşuna basın.
4. Ekleme noktasını verin ve yeni nesneleri daha önce olduğu gibi seçin.

DOOR-900'e yapılan her başvuru artık yeni sürümü gösterir.

Ya da bloğun kendisini düzenleyin: {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bloğu düzenle}} ({{cmd:BEDIT}}) onu tek başına açar ve {{ui:Bloğu kaydet}} onu geri koyar. Bkz. [Blok öznitelikleri](topic:attributes#change-a-block-the-block-editor).

## Blokları sayın ve bir liste dışa aktarın

{{cmd:COUNT}} yazın (ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları say}}), sonra:

- bir kapıya tıklayın: bu alandaki her kapı seçilir ve geçmiş, burada ve tüm çizimde kaç tane olduğunu söyler;
- ya da {{key:Enter}} tuşuna basın: geçmiş her bloğu sayısıyla, en çoktan başlayarak listeler;
- ya da `E` yazın, ardından sayıların bir CSV'si için `C` (modelde, sayfalarda, toplam) ya da her başvuru için bir satır — katmanı, konumu, döndürmesi ve her öznitelik değeriyle — içeren bir liste için `A` yazın: elektronik tabloda açabileceğiniz bir liste.

Adsız bloklar (ölçülendirmeler, tablolar) ve diğer blokların içindeki başvurular sayılmaz. Formül gibi başlayan hücrelere (`=`, `+`, `-`, `@`) başında `'` eklenir; böylece elektronik tablo onları metin olarak gösterir.

## Patlatma ve temizleme

- {{cmd:EXPLODE}} (`X`) seçilen bir blok başvurusunu yeniden ayrı nesnelere çevirir. Tanım kalır.
- {{cmd:PURGE}} (`PU`) artık hiçbir şey kullanmayan blok tanımlarını kaldırır. Geçmiş kaç tane kaldırdığını söyler.

## Blok adları

Bir ad en fazla 255 karakter olabilir ve boşluk içerebilir, ancak yıldızla başlayamaz ve `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ya da ters tırnak içeremez. DXF R12 olarak kaydettiğinizde adlar büyük harfle yazılır; harf, rakam, `$`, `_` ve `-` dışındaki karakterler `_` olur ve adlar 31 karaktere kesilir. Geçmiş kaç adın değiştiğini söyler. `DOOR-900` gibi kısa, büyük harfli, rakamlı ve tireli adlar değişmeden kalır. Kaydedilen bir DWG adları yazdığınız gibi, büyük ve küçük harfle korur; yalnızca DWG'nin izin vermediği karakterler değişir (`|` karakteri `$0$` olur, diğerleri `_` olur).

## Bir bloğu ya da nesneleri kendi dosyasına yazın

`W` ({{cmd:WBLOCK}}) yazın ve **Nesneler**, **Blok** ya da **Tüm çizim** seçeneğini belirleyin. Sonuç, yalnızca kullandığı katmanları, stilleri ve blokları içeren yeni bir DWG ya da DXF olur; temel noktanız orijin olur. Nesneler için onları tutabilir, bir blok yapabilir ya da bu çizimden silebilirsiniz.

## Sık yapılan hatalar

- **Blok imlecten çok uzağa düştü.** Temel nokta nesnelerin üzerinde değildi. Bloğu, temel noktası bir köşede ya da menteşede olacak şekilde yeniden oluşturun.
- **"Hiçbir nesne seçilmedi; hiçbir şey oluşturulmadı."** Hiçbir şey seçmeden {{key:Enter}} tuşuna bastınız.
- **"Bu çizimde henüz blok yok: F dosyadan bir blok ekler, L kütüphaneden (ya da BLOCK ile bir blok oluşturun)."** Başka bir çizimden blok getirmek için `F`, kütüphane için `L` yazın. Bkz. [Dosyadan veya kütüphaneden ekleme](topic:insert-from-file-and-library).
- **"Bir görünüm penceresi bir bloğun içine konamaz."** Görünüm penceresi çerçevelerini seçimin dışında bırakın.
