---
title: Çizimi katmanlarla düzenleme
summary: Duvarlar, kapılar ve notlar için katmanlar oluşturun, renk verin, bir katmanı geçerli yapın ve katmanları kapatın, dondurun, kilitleyin ya da çıktılarından çıkarın.
keywords: katman, katmanlar, la, geçerli katman, dondur, çöz, kilitle, kilidi aç, açık, kapalı, çıktı, çıktı alma, renk, katman özellikleri, layiso, layuniso, izole et, layoff, layfrz, laymcur, layon, laythw, yeniden adlandır, laymrg, birleştir, laydel, katmanı sil
from: cd033591
---

## Ne yapacaksınız

Üç katman, Duvarlar, Kapılar ve Notlar; her birinin kendi rengi, üzerinde çizilmiş nesneler ve katmanlar arasında taşınmış nesneler.

## Katmanlar paneli

Katmanlar, soldaki panelde {{ui:Katmanlar}} altında bulunur. Her satır soldan sağa şunları gösterir:

- bir nokta: **geçerli** katman için dolu, yeni nesnelerin gideceği katman;
- bir renk örneği;
- katman adı;
- dört düğme: açma/kapama (göz), dondurma (kar tanesi), kilitleme (asma kilit) ve çıktı (yazıcı).

Her çizimin `0` adında bir katmanı vardır. `LA` yazıp {{key:Enter}} tuşuna basmak sizi panele götürür.

## Katman oluşturun

1. Listenin üstündeki {{ui:Yeni katman}} düğmesine tıklayın. Bir ad kutusu açılır.
2. `Duvarlar` yazın ve {{key:Enter}} tuşuna basın (ya da {{ui:Ekle}} düğmesine tıklayın).

Durum çubuğu şunu gösterir: "Katman Duvarlar eklendi ve geçerli yapıldı." Yeni katman renk 7 alır (açık temada siyah, koyu temada beyaz).

3. {{ui:Yeni katman}} düğmesine yeniden tıklayın, `Kapılar` yazın ve {{key:Enter}} tuşuna basın.
4. {{ui:Yeni katman}} düğmesine yeniden tıklayın, `Notlar` yazın ve {{key:Enter}} tuşuna basın.

Notlar artık geçerli katmandır.

## Her katmana renk verin

1. Duvarlar satırındaki renk örneğine tıklayın. Sisteminizin renk seçicisi açılır.
2. Bir renk seçin ve onaylayın.

Renk örneği ve Duvarlar üzerindeki, rengi {{ui:Katmana göre}} olan her şey değişir.

:::note
255 standart CAD renginden birine uyan bir renk, o sayı olarak saklanır. Diğer her renk CadCraft içinde olduğu gibi tutulur, ancak bir DWG ya da DXF dosyasına en yakın standart renk olarak kaydedilir.
:::

## Bir katman üzerinde çizin

1. Listede **Duvarlar** adına tıklayın. Noktası dolar ve durum çubuğu "Geçerli katman: Duvarlar" yazar.
2. Bir dikdörtgen çizin (`REC`). Duvarlar'a gider.
3. **Kapılar**'a tıklayın ve bir yay çizin (`A`). Kapılar'a gider.

Ayrıca, sağdaki {{ui:Geçerli ayarlar}} bölümünde ({{ui:Katman}} altında), hiçbir şey seçili değilken geçerli katmanı seçebilirsiniz.

## Nesneleri başka bir katmana taşıyın

1. Nesneleri seçin.
2. Sağ panelde, {{ui:Katman}} alanından yeni katmanı seçin.

Nesneler o katmana taşınır ve rengi {{ui:Katmana göre}} ise o katmanın rengini alır.

## Kapatma, dondurma, kilitleme ve çıktı

| Düğme | Ne yapar |
|---|---|
| Açma/kapama (göz) | Katmanın nesnelerini gizler. Görülemez, seçilemez ve nesne yakalama ile yakalanamazlar. |
| Dondurma (kar tanesi) | CadCraft'ta kapatmayla aynı etkiyi yapar. Diğer programlar bunları farklı ele aldığı için ayrı tutulur ve ayar kaydedilir. |
| Kilitleme (asma kilit) | Nesneler görünür kalır ve onlara yakalanabilirsiniz, ancak seçilemez ya da değiştirilemezler. Üzerinden çizim yapacağınız bir arka plan için idealdir. |
| Çıktı (yazıcı) | Basılıyken katman ekranda gösterilir ama **çıktılardan ve PDF'lerden çıkarılır**. Yapı çizgileri ve kendinize notlar için kullanın. |

Ne yapacağını görmek için bir düğmenin üzerine gelin ("Kapat", "Dondur", "Kilitle", "Bu katmanın çıktısını alma").

Geçerli katmanı kapatamazsınız: durum çubuğu "Bu geçerli katman. Önce başka bir katmanı geçerli yapın." der. Bir katmanın adına tıklayıp onu geçerli yapmak, onu ayrıca açar ve çözer.

Panelde ya da bir komutla yapılan her katman değişikliği tek bir geri alma adımıdır: {{key:Mod+Z}} onu geri getirir.

## Nesne seçerek katmanlarla çalışın

Bir katmanın adını bilmeniz gerekmez: üzerindeki bir nesneyi seçin. Komutu yazın ya da {{ui:Katmanlar}} panelinin üstündeki {{ui:Araçlar}} menüsünü açın.

| Komut | Ne yapar |
|---|---|
| {{cmd:LAYISO}} | Nesneleri seçin, {{key:Enter}} tuşuna basın: yalnızca onların katmanları açık kalır, diğer tüm katmanlar kapatılır. Geçerli katman kapatılırsa, izole edilen katmanlardan biri geçerli olur. |
| {{cmd:LAYUNISO}} | Son {{cmd:LAYISO}} komutunun kapattığı katmanları yeniden açar ve değiştirdiği geçerli katmanı geri verir. |
| {{cmd:LAYOFF}} | Nesnelere birer birer tıklayın: her birinin katmanı kapatılır. Son işlemi geri almak için `U` yazın, bitirmek için {{key:Enter}} tuşuna basın. |
| {{cmd:LAYFRZ}} | Aynısı; her katmanı dondurur. |
| {{cmd:LAYMCUR}} | Bir nesneye tıklayın: katmanı geçerli olur (ve açılır ve çözülür). Zaten bir nesne seçiliyse o kullanılır. |
| {{cmd:LAYON}} | Her katmanı açar. |
| {{cmd:LAYTHW}} | Her katmanın dondurmasını çözer. |

Geçerli katman bu yolla hiçbir zaman kapatılmaz ya da dondurulmaz: geçmiş bunu söyler ve önce {{cmd:LAYMCUR}} ile başka bir katmanı geçerli yapabilirsiniz. Bir blok başvurusu seçmek, başvurunun kendi katmanını kullanır.

1. Bir duvar çizgisine tıklayın, sonra `LAYISO` yazıp {{key:Enter}} tuşuna basın. Yalnızca Duvarlar açık kalır.
2. Duvarlar üzerinde gereken çizim ya da değişikliği yapın.
3. `LAYUNISO` yazıp {{key:Enter}} tuşuna basın. Kapılar ve Notlar geri gelir.

## Katmanları yeniden adlandırın, birleştirin ve silin

- {{cmd:RENAME}}: `LA`, eski adı ve yeni adı yazın. Katmandaki her nesne onu izler. (`B` bir bloğu aynı şekilde, ona yapılan her başvuruyla birlikte yeniden adlandırır.)
- {{cmd:LAYMRG}}: birleştirilecek her katmanda bir nesneye tıklayın (ya da `N` ve bir ad yazın), {{key:Enter}} tuşuna basın, sonra hedef katmanı seçin ve `Y` ile yanıtlayın. Nesneler hedefe taşınır (modelde, sayfalarda ve bloklarda) ve birleştirilen katmanlar kaldırılır.
- {{cmd:LAYDEL}}: katmandaki bir nesneyi seçin (ya da `N` ve adını) ve `Y` ile yanıtlayın. Katman, **üzerindeki her nesneyle birlikte**, her yerden silinir. `0` katmanı, DEFPOINTS ve geçerli katman silinemez.

Her biri tek bir geri alma adımıdır. Üçü de {{ui:Katmanlar}} panelinin üstündeki {{ui:Araçlar}} içindedir.

1. Bir duvar çizgisine tıklayın, sonra `LAYISO` yazıp {{key:Enter}} tuşuna basın. Yalnızca Duvarlar açık kalır.
2. Duvarlar üzerinde gereken çizim ya da değişikliği yapın.
3. `LAYUNISO` yazıp {{key:Enter}} tuşuna basın. Kapılar ve Notlar geri gelir.

## Sık yapılan hatalar

- **Yeni çizgiler yanlış katmana gitti.** Çizmeden önce hangi noktanın dolu olduğunu kontrol edin. Yeni bir katman eklediğiniz anda geçerli olur.
- **Bir nesne seçilmiyor.** Katmanı kilitli, kapalı ya da dondurulmuş.
- **Katman başka bir programda hâlâ basılıyor.** DXF R12 "çıktı alma" bilgisini saklayamaz. CadCraft, çizimde bir sayfa varsa ayarı kendisi için tutar, ancak diğer programlar o katmanı çıktıya alır.
- **Katman adları kaydettikten sonra büyük harfli olur.** DXF R12 adları büyük harfle saklar; bu yüzden `Duvarlar`, `DUVARLAR` olarak geri gelir ve boşluklar `_` olur. Kaydedilmiş bir DWG, adları yazdığınız gibi tutar.
- **Bir katmanı yeniden adlandırma, birleştirme ya da silme.** {{cmd:RENAME}}, {{cmd:LAYMRG}} ya da {{cmd:LAYDEL}} kullanın ({{ui:Araçlar}} içinde de): aşağıya bakın.

## Katmanları grupla

Katmanları Mevcut, Önerilen ve Hizmetler gibi klasörlere koyarak listeyi kısa tutun. Her klasör katlanır; düğmeleri, katmanlarının tümünü birlikte açar ya da kapatır, dondurur ya da kilitler. Geçerli katman hiçbir zaman kapatılmaz.

Katmanlar panelinde {{ui:Araçlar}} içinden, küçük konut işleri için hazırlanmış bir küme için {{ui:Hazır grupları ekle}}, ön eki aynı olan katmanları gruplamak için {{ui:Ada göre grupla}} (`E-Duvarlar`, `E-Kapılar` gibi) ya da {{ui:Yeni grup}} seçin. Bir katmanı bir klasörün üzerine sürükleyin ya da geçerli katman için katmanların üstündeki listeyi kullanın. Listeyi daraltmak için {{ui:Katman bul}} alanına yazın. `LAYGROUP` (`LG`) komut satırında aynısını yapar.

Katmanların kendileri değişmez; bu yüzden diğer CAD programları onları düz bir liste olarak görür. CadCraft grupları dosyada tutar.
