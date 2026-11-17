---
title: Blok öznitelikleri
summary: Bir blok başvurusunun taşıdığı değerleri, örneğin bir öğe numarasını ya da bir üreticiyi görün ve değiştirin; bir kopya kaydettiğinizde bunları koruyun.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, künye, yerinde düzenle, öznitelik düzenleyici, attdef, öznitelik tanımla, bedit, blok düzenleyici, bclose, öznitelik, öznitelikler, attrib, etiket, öğe numarası, değer, görünmez, sabit, blok, özellikler, liste, ekipman etiketi
from: 34d307c7
---

## Öznitelikler nedir

Bir öznitelik, bir blok başvurusuyla birlikte giden adlandırılmış bir değerdir: bir ekipman etiketinin öğe numarası, bir oda etiketinin adı, bir kapının yangın dayanımı gibi. Bloğun tanımı hangi özniteliklere sahip olduğunu söyler (her birinin bir **etiketi**, bir **istemi**, bir **varsayılanı** ve metninin yeri, boyutu ve açısı vardır). Bloğa yapılan her başvuru kendi değerlerini taşır.

Bazı öznitelikler **görünmezdir**: bir üretici ya da model numarası gibi veri tutarlar ama asla çizilmezler. Bazıları **sabittir**: her başvuruda aynıdırlar, blok tarafından sabitlenirler.

## Öznitelikler nereden gelir

- Açtığınız DWG ve DXF dosyalarındaki bloklar, her başvurunun değerleriyle birlikte özniteliklerini korur.
- {{cmd:INSERT}} ve {{ui:Dosya}} seçeneğiyle getirdiğiniz bloklar öznitelikleri korur. Bkz. [Dosyadan ya da kütüphaneden ekleme](topic:insert-from-file-and-library).
- Kütüphane öğeleri öznitelikli bloklar olarak gelir: görünür bir öğe numarası ve öğenin verileri, görünmez olarak.

- Kendi bloklarınızı yapıyorsanız: önce {{cmd:ATTDEF}} ile öznitelikleri tanımlayın (aşağıya bakın), sonra bloğu oluştururken bunları diğer nesnelerle birlikte seçin.

## Kendi bloklarınız için öznitelikler tanımlayın

1. Bloğun çizgilerini çizin, örneğin bir oda etiketi.
2. {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelik tanımla}} seçin ya da `ATT` yazıp {{key:Enter}}'a basın.
3. Geçmiş modları gösterir (`Invisible=No Constant=No Preset=No`). Birini değiştirmek için `I`, `C` ya da `P` yazın; doğru olduklarında {{key:Enter}}'a basın. Görünmez değerler saklanır ama çizilmez; sabit olan her başvuruda aynı değere sahiptir; ön ayarlı olan, bloğu eklediğinizde sorulmaz.
4. Etiketi (örneğin `ROOM_NO`: büyük harf, boşluk yok), istemi (`Oda numarası`) ve bir varsayılan değeri (`101`) yazın.
5. Değerin gideceği yere tıklayın ve yüksekliği ile döndürmeyi verin. Etiket çizimde görünür.
6. {{cmd:BLOCK}} ile bloğu oluşturun; çizgileri ve öznitelik tanımlarını birlikte seçin. Yerine geçen başvuru varsayılan değerleri alır; her yeni {{cmd:INSERT}} bunları sorar.

Seçili bir öznitelik tanımı {{ui:Etiket}}, {{ui:İstem}}, {{ui:Varsayılan}} ve modlarını {{ui:Özellikler}} içinde gösterir.

## Bir bloğu değiştirin: blok düzenleyici

{{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bloğu düzenle}} ({{cmd:BEDIT}}, `BE`) bir bloğu tek başına açar: adını yazın (ya da önce bir başvuru seçin). Üstteki bir çubuk hangi bloğu düzenlediğinizi söyler. Nesnelerini çizin, silin ve değiştirin; öznitelik tanımlarını ekleyin ya da değiştirin. Sonra {{ui:Bloğu kaydet}} düğmesine tıklayın (ya da {{cmd:BCLOSE}} yazıp `S`): her başvuru değişikliği gösterir ve tek bir {{key:Mod+Z}} hepsini geri alır. {{ui:Değişiklikleri at}} ({{cmd:BCLOSE}}, `D`) bloğu eski haline bırakır.

Öznitelik tanımlarını eklediğinizde, kaldırdığınızda ya da değiştirdiğinizde, kaydetme her başvuruyu da hizalar: yazdığınız değerler korunur, yeni bir öznitelik varsayılanını alır, kaldırılan bir öznitelik gider ve her öznitelik tanımın koyduğu yere geri döner. Geçmiş kaç başvurunun güncellendiğini söyler.

## Bir künyeyi olduğu yerde düzenleyin (REFEDIT)

Bir sayfadaki künye çoğu zaman bir blok içinde durur. Çizgilerini ya da metinlerini sayfadan ayrılmadan değiştirmek için:

1. Künyeyi seçin, sonra {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Yerinde düzenle}} seçin (ya da {{cmd:REFEDIT}} yazın).
2. İçeriği olduğu yerde sıradan nesnelere dönüşür; geri kalan her şey soluklaşır ve değiştirilemez.
3. Değiştirin, silin ya da çizin: yeni nesneler bloğun parçası olur.
4. Üstteki çubukta {{ui:Bloğu kaydet}} düğmesine tıklayın (ya da {{cmd:REFCLOSE}} yazıp `S`). Her başvuru değişikliği gösterir ve tek bir {{key:Mod+Z}} tüm düzenlemeyi geri alır. {{ui:Vazgeç}} bloğu eski haline bırakır.

Bağlı bir çizim, dinamik bir blok ya da X ve Y'de farklı ölçeklenmiş bir başvuru yerinde düzenlenemez: {{cmd:BEDIT}} kullanın (ya da bağlı çizimi açın).

:::note
Çizimi kaydetmeden önce blok düzenleyicide kaydedin ya da vazgeçin: düzenleyici açıkken kaydedilen bir dosya bloğu önceki haliyle tutar.
:::

## Bir bloğu yerleştirirken değerleri doldurun

1. `I` yazın ve {{key:Enter}}'a basın, blok adını yazın ve {{key:Enter}}'a basın.
2. Nereye gideceğine tıklayın.
3. CadCraft her değeri sorar, örneğin `Öğe numarasını girin (ITEM) <>`. Değeri yazın ve {{key:Enter}}'a basın ya da açılı parantezlerde gösterilen varsayılanı tutmak için {{key:Enter}}'a basın.

Blok ön ayarlı ya da sabit olarak işaretlediği değerler sorulmaz; varsayılanlarını alırlar.

## Değerleri görün ve değiştirin

1. Bir blok başvurusuna tıklayın.
2. Sağ panelde {{ui:Öznitelikler}} altında her etiketin bir değeri vardır. Görünmez olanlar `gizli` yazar.
3. Bir değere tıklayın, yenisini yazın ve {{key:Enter}}'a basın.

Çizim yeni değeri hemen gösterir. Her değişiklik bir adımdır: {{key:Mod+Z}} onu geri alır.

**Öznitelik düzenleyici.** Öznitelikli bir başvuruya çift tıklayın (ya da {{cmd:EATTEDIT}}): {{ui:Öznitelikleri düzenle}} iletişim kutusu her etiketi, istemi ve değeriyle listeler. Yeni değerler yazın; yalnızca bu başvuru için bir özniteliğin {{ui:Yükseklik}}, {{ui:Döndürme}}, {{ui:Genişlik çarpanı}}, {{ui:Hizala}}, {{ui:Katman}}, {{ui:Renk}} ve {{ui:Görünmez}} değerini değiştirmek için bir satıra tıklayın. {{ui:Uygula}} iletişim kutusunu açık tutar; {{ui:Tamam}} uygular ve kapatır. Her {{ui:Uygula}} ya da {{ui:Tamam}} bir geri alma adımıdır.

**Komut satırında**, {{cmd:ATTEDIT}} her değeri sırayla sorar: yenisini yazın ya da tutmak için {{key:Enter}}'a basın.

## Öznitelik tanımlarını değiştirin (BATTMAN, ATTSYNC)

{{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelik yöneticisi}} ({{cmd:BATTMAN}}) bir bloğun özniteliklerini listeler: bir etiketi, istemi ya da varsayılanı değiştirin, {{ui:Görünmez}}, {{ui:Sabit}} ya da {{ui:Ön ayarlı}} kutularını işaretleyin ve bunları yukarı ya da aşağı taşıyın (değerlerin sorulduğu sıra). {{ui:Referansları güncelle (değerler korunur)}} işaretliyken {{ui:Uygula}} her başvuruyu da hizalar; yeniden adlandırılan bir etiket değerlerini korur. Her {{ui:Uygula}} bir geri alma adımıdır.

{{cmd:ATTSYNC}} başvuruları blok tanımlarıyla elle hizalar: `S` bir başvuru seçer, `N` bir blok adlandırır, `A` her bloğu işler. Değerler korunur.

Bir kütüphane öğesinin kendi alanlarının değerleri (kimliği, sürümü, lisansı ve atfı) gösterilir ama düzenlenemez; böylece güncellemeleri denetleme çalışmaya devam eder. Öğe numarası ve miktarı sizindir; bunları değiştirebilirsiniz.

## Listeleyin

Başvuruları seçin ve `LI` yazın ({{cmd:LIST}} için). Geçmiş her özniteliği `ETİKET = değer` olarak gösterir; geçerli olduğunda `(görünmez)` ya da `(sabit)` ekler.

## Taşıma, döndürme ve patlatma

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} ve {{cmd:MIRROR}} değerleri korur; metin blokla birlikte taşınır ve okunabilir kalır.
- {{cmd:EXPLODE}} görünür öznitelikleri değerleriyle birlikte düz metne dönüştürür. Görünmezler atılır.

## Kaydetme

Kaydedilmiş bir DWG ve kaydedilmiş bir DXF her özniteliği korur: her bloğun tanımları (görünmez, sabit ve ön ayarlı olanlar dahil) ve her başvurunun değerleri. Diğer CAD programları bunları olağan blok öznitelikleri olarak okur.

DXF R12'de 255 karakterden uzun bir değer 255'e kesilir ve geçmiş bunu söyler.

## Sık yapılan hatalar

- **Bir değer çizimde görünmüyor.** Görünmezdir ya da boştur. Görünmez değerler yine de sağ panelde gösterilir.
- **Yazdığım değer komut satırına gitti.** Önce sağ paneldeki değer kutusuna tıklayın.
