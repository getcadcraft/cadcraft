---
title: Çizimi katmanlarla düzenleyin
summary: Duvarlar, kapılar ve notlar için katmanlar oluşturun, renkler verin, bir katmanı geçerli yapın ve katmanları kapatın, dondurun, kilitleyin ya da basımdan çıkarın.
keywords: katman, katmanlar, la, geçerli katman, dondur, çöz, kilitle, kapat, aç, çıktı, çıktı alma, renk, katman özellikleri, layiso, layuniso, yalıt, layoff, layfrz, laymcur, layon, laythw, yeniden adlandır, laymrg, birleştir, laydel, katmanı sil
from: ba9f0617
---

## Ne yapacaksınız

Her biri kendi renginde üç katman, Duvarlar, Kapılar ve Notlar; her birinde nesneler çizilmiş ve katmanlar arasında taşınmış.

## Katmanlar paneli

Katmanlar, soldaki panelde {{ui:Katmanlar}} altında yaşar. Her satır soldan sağa şunları gösterir:

- bir nokta: **geçerli** katman için dolu, yeni nesnelerin gideceği yer;
- bir renk örneği;
- katman adı;
- dört düğme: aç/kapat (göz), dondur (kar tanesi), kilitle (kilit) ve çıktı (yazıcı).

Her çizimde `0` adında bir katman vardır. `LA` yazıp {{key:Enter}} tuşuna basmak panele gider.

## Katman oluşturun

1. Listenin üstündeki {{ui:Yeni katman}}'a tıklayın. Bir ad kutusu açılır.
2. `Duvarlar` yazıp {{key:Enter}} tuşuna basın (ya da {{ui:Ekle}}'ye tıklayın).

Durum çubuğu "Duvarlar katmanı eklendi ve geçerli yapıldı." der. Yeni katman 7 numaralı rengi alır (açık temada siyah, koyu temada beyaz).

3. {{ui:Yeni katman}}'a yeniden tıklayın, `Kapılar` yazın ve {{key:Enter}} tuşuna basın.
4. {{ui:Yeni katman}}'a yeniden tıklayın, `Notlar` yazın ve {{key:Enter}} tuşuna basın.

Notlar artık geçerlidir.

## Her katmana bir renk verin

1. Duvarlar satırındaki renk örneğine tıklayın. Sisteminizin renk seçici penceresi açılır.
2. Bir renk seçin ve onaylayın.

Örnek ve Duvarlar üzerindeki, rengi {{ui:Katmana göre}} olan her şey değişir.

:::note
Seçtiğiniz renk 255 standart CAD renginden birine uyuyorsa, o sayı olarak saklanır. Diğer her renk CadCraft'ta tam olarak korunur, ama bir DWG ya da DXF dosyasında en yakın standart renk olarak kaydedilir.
:::

## Bir katmanda çizin

1. Listede **Duvarlar** adına tıklayın. Noktası dolar ve durum çubuğu "Geçerli katman: Duvarlar" der.
2. Bir dikdörtgen çizin (`REC`). Duvarlar üzerine gider.
3. **Kapılar**'a tıklayın ve bir yay (`A`) çizin. Kapılar üzerine gider.

Geçerli katmanı, sağdaki {{ui:Geçerli ayarlar}} içinde ({{ui:Katman}} altında, hiçbir şey seçili değilken) de seçebilirsiniz.

## Nesneleri başka bir katmana taşıyın

1. Nesneleri seçin.
2. Sağ panelde, {{ui:Katman}} altından yeni katmanı seçin.

Nesneler o katmana geçer ve rengi {{ui:Katmana göre}} ise onun rengini alır.

## Kapat, dondur, kilitle ve çıktı

| Düğme | Ne yapar |
|---|---|
| Aç/kapat (göz) | Katmanın nesnelerini gizler. Görülemezler, seçilemezler ve yakalanamazlar. |
| Dondur (kar tanesi) | CadCraft'ta kapatmakla aynı etkiyi yapar. Öteki programlar bunları farklı ele aldığı için ayrı tutulur ve ayar kaydedilir. |
| Kilitle (kilit) | Nesneler görünür kalır ve onlara yakalanabilirsiniz, ama seçilemez ya da değiştirilemezler. İzlediğiniz bir arka plan için iyidir. |
| Çıktı (yazıcı) | Basılınca katman ekranda gösterilir ama **çıktılarda ve PDF'lerde dışarıda bırakılır**. Yapı çizgileri ve kendiniz için notlar için kullanın. |

Bir düğmenin ne yapacağını görmek için üzerine gelin ("Kapat", "Dondur", "Kilitle", "Bu katmanı basma" gibi).

Geçerli katmanı kapatamazsınız: durum çubuğu "Bu geçerli katman. Önce başka bir katmanı geçerli yapın." der. Bir katman adına tıklayarak onu geçerli yapmak ayrıca onu açar ve çözer.

Katmanda ya da bir komutla yapılan her katman değişikliği tek bir geri al adımıdır: {{key:Mod+Z}} onu geri koyar.

## Katmanlarla nesneleri seçerek çalışın

Katmanın adını bilmenize gerek yok: üzerindeki bir nesneyi seçin. Komutu yazın ya da {{ui:Katmanlar}} panelinin üstündeki {{ui:Araçlar}}'ı açın.

| Komut | Ne yapar |
|---|---|
| {{cmd:LAYISO}} | Nesneleri seçin, {{key:Enter}}'a basın: yalnızca onların katmanları açık kalır, diğer her katman kapanır. Geçerli katman kapatılmışsa, yalıtılmış katmanlardan biri geçerli olur. |
| {{cmd:LAYUNISO}} | Son {{cmd:LAYISO}}'nun kapattığı katmanları yeniden açar ve onun değiştirdiği geçerli katmanı geri verir. |
| {{cmd:LAYOFF}} | Nesnelere birer birer tıklayın: her birinin katmanı kapanır. Son birini geri almak için `U`, bitirmek için {{key:Enter}}. |
| {{cmd:LAYFRZ}} | Aynısı, ama her katmanı dondurarak. |
| {{cmd:LAYMCUR}} | Bir nesneye tıklayın: katmanı geçerli olur (ve açılır ve çözülür). Bir nesne zaten seçiliyse o kullanılır. |
| {{cmd:LAYON}} | Her katmanı açar. |
| {{cmd:LAYTHW}} | Her katmanı çözer. |

Geçerli katman bu yollarla asla kapatılmaz ya da dondurulmaz: tarihçe bunu söyler ve önce {{cmd:LAYMCUR}} ile başka bir katmanı geçerli yapabilirsiniz. Bir blok başvurusunu seçmek, başvurunun kendi katmanını kullanır.

## Katmanları yeniden adlandırın, birleştirin ve silin

- {{cmd:RENAME}}: `LA`, eski ad ve yeni adı yazın. Katmandaki her nesne izler. (`B` bir bloğu aynı biçimde, her başvurusuyla birlikte yeniden adlandırır.)
- {{cmd:LAYMRG}}: birleştirmek istediğiniz her katmanda bir nesneye tıklayın (ya da `N` yazıp bir ad), {{key:Enter}}'a basın, sonra hedef katmanı seçin ve `E` yanıtını verin. Nesneler hedefe taşınır — modelde, sayfalarda ve bloklarda — ve birleşen katmanlar kalkar.
- {{cmd:LAYDEL}}: katmandaki bir nesneyi seçin (ya da `N` ve adı) ve `E` yanıtını verin. Katman, **üzerindeki her nesneyle birlikte**, her yerden gider. `0` katmanı, DEFPOINTS ve geçerli katman silinemez.

Her biri tek bir geri al adımıdır. Üçü de {{ui:Katmanlar}} panelinin üstündeki {{ui:Araçlar}}'dadır.

1. Bir duvar çizgisine tıklayın, sonra `LAYISO` yazıp {{key:Enter}} tuşuna basın. Yalnızca Duvarlar açık kalır.
2. Duvarlarda ihtiyacınız olanı çizin ya da değiştirin.
3. `LAYUNISO` yazıp {{key:Enter}} tuşuna basın. Kapılar ve Notlar geri gelir.

## Sık yapılan hatalar

- **Yeni çizgiler yanlış katmana gitti.** Çizmeden önce hangi noktanın dolu olduğuna bakın. Yeni bir katman eklendiği anda geçerli olur.
- **Bir nesne seçilmiyor.** Katmanı kilitli, kapalı ya da dondurulmuş.
- **Katman başka bir programda hâlâ basılıyor.** DXF R12 "basma" bilgisini saklayamaz. CadCraft, çizimde bir sayfa varsa bu ayarı kendisi için tutar, ama öteki programlar o katmanı basar.
- **Kaydettikten sonra katman adları büyük harf.** DXF R12 adları büyük harfle saklar, bu yüzden `Duvarlar` `DUVARLAR` olarak döner ve boşluklar `_` olur. Kaydedilmiş bir DWG adları yazdığınız gibi tutar.
- **Bir katmanı yeniden adlandırma, birleştirme ya da silme.** {{cmd:RENAME}}, {{cmd:LAYMRG}} ya da {{cmd:LAYDEL}} kullanın ({{ui:Araçlar}}'da da var): aşağıya bakın.

## Katmanları gruplayın

Listeyi kısa tutmak için katmanları Mevcut, Önerilen ve Hizmetler gibi klasörlere koyun. Her klasör katlanır ve anahtarları tüm katmanlarını birlikte açar ya da kapatır, dondurur ya da birlikte kilitler. Geçerli katman asla kapatılmaz.

Katmanlar panelinin {{ui:Araçlar}}'ında, küçük konut işleri için hazırlanmış bir küme için {{ui:Hazır grupları ekle}}'yi, bir önekle başlayan katmanları gruplamak için {{ui:Ada göre grupla}}'yı (`E-Duvarlar`, `E-Kapılar`) ya da {{ui:Yeni grup}}'u seçin. Bir katmanı bir klasöre sürükleyin ya da katman listesinin üstündeki geçerli katman için kullanın. Daraltmak için {{ui:Katman bul}} alanına yazın. `LAYGROUP` (`LG`) aynısını komut satırından yapar.

Bir grubu yeniden adlandırmak için adına çift tıklayın (ya da seçip {{key:F2}} tuşuna basın), yeni adı yazın ve {{key:Enter}}'a basın; {{key:Esc}} eskisini korur ve {{cmd:UNDO}} onu geri koyar. {{ui:Yeni grup}}, Katmanlar panelindeki {{ui:Araçlar}}'dadır.

Katmanların kendileri değişmez, bu yüzden öteki CAD programları onları sıradan düz bir liste olarak görür. CadCraft grupları dosyada tutar.
