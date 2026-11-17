---
title: Klavye ve fare
summary: CadCraft çizim uygulamasındaki her tuş, fare işlemi ve komut satırı tuşu; kodun onları ele aldığı biçimiyle.
keywords: klavye, kısayollar, tuşlar, fare, tekerlek, kaydırma, yakınlaştırma, sağ tıklama, orta düğme, f3, f7, f8, ctrl, komut tuşu, tuş kısayolları, kopyala, kes, yapıştır, çoğalt, pano, tümünü seç
from: a2608a29
---

Kısayollar bilgisayarınız için gösterilir. Bir Mac'te, aşağıdaki her {{key:Mod}} kısayolu Command tuşunu kullanır; Control tuşu da çalışır. Tuşların nasıl yazıldığı ve Mac'te F tuşlarının nasıl kullanılacağı [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys) konusundadır.

## Komut yazma

| Tuş | Ne yapar |
|---|---|
| Her harf, rakam ya da sembol | İmleç nerede olursa olsun komut satırına gider; bir panel kutusu imleci tutmuyorsa |
| {{key:Enter}} | Yazdığınızı gönderir. Boş bir istemde: son komutu tekrarlar, bir komutu bitirir, bir seçimi tamamlar ya da `<…>` içindeki varsayılanı kabul eder |
| {{key:Space}} | {{key:Enter}} ile aynıdır; ancak CadCraft metin istediğinde (metin, blok adları, ölçülendirme metni) boşluk yazar |
| {{key:Esc}} | Komutu iptal eder. Hiçbir komut çalışmıyorsa: bir tutamaç taşımasını ya da bir seçim kutusunu iptal eder, sonra seçimi temizler |
| {{key:Tab}} | Komut satırının sağında gösterilen önerilen komutu kabul eder. Hiçbir şey yazılmamışken ve imleç üst üste binen nesnelerin üzerindeyken: oradaki sonrakini vurgular (seçmek için tıklayın) |
| {{key:Up}} {{key:Down}} | Daha önce yazdığınız satırlarda (son 100) gezinir |

## Çizim ve düzenleme

| Tuş | Ne yapar |
|---|---|
| {{key:Mod+Z}} | Son komutu geri alır |
| {{key:Mod+Y}} ya da {{key:Mod+Shift+Z}} | Yinele |
| {{key:Mod+A}} | Açık sekmede düzenleyebileceğiniz her nesneyi seçer ({{cmd:SELECTALL}}). Komut satırına bir şey yazdıysanız, onun yerine o metni seçer |
| {{key:Delete}} | Seçili nesneleri siler ({{cmd:ERASE}}), komut satırına bir şey yazmadığınız sürece |
| {{key:Backspace}} | Komut satırı imleci tutmadığında seçili nesneleri siler; komut satırında ise yazdığınızı siler |
| {{key:Esc}} | Hiçbir komut çalışmıyorsa: seçimi temizler ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Çizimin biçiminde (DWG ya da DXF) bir kopya kaydeder |
| {{key:Mod+Shift+S}} | Farklı kaydet: DWG ya da DXF seçin, sonra bir kopya kaydedin |
| {{key:Mod+O}} | Bir DWG ya da DXF açar |
| {{key:Mod+P}} | PDF'e çıktı alır |

Bir komut çalışırken geri al, yinele, tümünü seç ve çıktı alma hiçbir şey yapmaz: önce {{key:Esc}}'a basın.

## Kopyala, kes ve yapıştır

| Tuş | Ne yapar |
|---|---|
| {{key:Mod+C}} | Seçimi panoya kopyalar ({{cmd:COPYCLIP}}). Hiçbir şey seçili değilse: CadCraft nesne ister |
| {{key:Mod+X}} | Kes: seçimi kopyalar, sonra siler ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Yapıştır: kopya imleci izler; yerleştirmek için tıklayın ya da bir nokta yazın ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Olduğu yere yapıştır: kopyalandığı koordinatlarda ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Çoğalt: seçimin bir kopyası imleçle birlikte hareket eder; yerleştirmek için tıklayın, {{key:Esc}} hiçbir şey bırakmaz ({{cmd:DUPLICATE}}) |

Aynı işlemler araç çubuğunun {{ui:Düzenle}} grubunda ({{ui:Kopyala}}, {{ui:Yapıştır}}) ve {{ui:Daha fazla}} menüsünde de bulunur. Başka bir komut çalışırken onu bitirin ya da önce {{key:Esc}}'a basın; bir kopya imleci izlerken {{key:Mod+V}} ya da {{key:Mod+D}}'ye yeniden basmak baştan başlatır. Komut satırına bir şey yazdığınızda ya da bir komut metin istediğinde, bu tuşlar onun yerine o metni kopyalar, keser ve yapıştırır. Bkz. [Kopyala, yapıştır ve çoğalt](topic:copy-paste).

## Geçişler

| Tuş | Geçiş | Durum çubuğu düğmesi |
|---|---|---|
| {{key:F3}} | Nesne yakalamayı açar ya da kapatır | {{ui:Yakala}} |
| {{key:F7}} | Izgarayı açar ya da kapatır | {{ui:Izgara}} |
| {{key:F8}} | Ortogonali açar ya da kapatır | {{ui:Ortogonal}} |
| {{key:F10}} | Kutupsal izlemeyi açar ya da kapatır | {{ui:Kutupsal}} |
| {{key:F11}} | Nesne yakalama izlemeyi açar ya da kapatır | {{ui:İzle}} |
| {{key:F12}} | Dinamik girişi açar ya da kapatır | {{ui:Dinamik}} |

:::mac
Bir Mac'te F3, F7 ve F8 genellikle Mission Control ve medya tuşlarıdır. Bunlarla birlikte **fn** tuşunu basılı tutun ya da Sistem Ayarları'nda standart işlev tuşlarını açın; bunlar [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys) konusunda anlatılır. Durum çubuğu düğmeleri her zaman çalışır.
:::

:::firefox
Firefox'ta F7 de imleç gezinmesini açmanızı isteyebilir. **Hayır**'ı seçin; sürekli sorarsa {{ui:Izgara}} düğmesini kullanın.
:::

## Yardım

| Tuş | Ne yapar |
|---|---|
| {{key:F1}} | Bu yardımı çizimin yanında açar ya da kapatır. Bir komut çalışırken de çalışır ve komut satırına hiçbir zaman ulaşmaz. |
| {{key:Esc}} | İmleç yardım panelindeyken: aramayı temizler ya da paneli kapatır |

Üst çubuktaki {{ui:Yardım}} düğmesi {{key:F1}} ile aynı işi yapar. Yardımın arama kutusuna yazarken hiçbir şey komut satırına gitmez. Tuşları CadCraft'e geri vermek için çizime tıklayın; panel yanında açık kalır.

:::mac
Mac klavyesinde **fn** tuşunu basılı tutup F1'e basın ya da {{ui:Yardım}}'a tıklayın.
:::

## Ekran

| Tuş | Ne yapar |
|---|---|
| {{key:Ctrl+Shift+F}} | Normal, tam ekran ve çubukları gizli tam ekran arasında döner. Her bilgisayarda, Mac dahil, Control tuşunu kullanır. |
| {{key:Left}} {{key:Right}} | Çizimin altındaki bir sekme odaklıyken: önceki ya da sonraki sekme |

Tam ekranda tarayıcı ilk {{key:Esc}} ile tam ekrandan çıkabilir. Bir komutu iptal etmek için {{key:Esc}}'a yeniden basın.

## Diyaloglar

| Tuş | Ne yapar |
|---|---|
| {{key:Esc}} | Diyaloğu kapatır ({{ui:PDF'e çıktı al}} ya da "Kaydedilmemiş değişiklikler" gibi bir soru; burada {{ui:İptal}} anlamına gelir) |
| {{key:Tab}} | Diyaloğun ayarları ile düğmeleri arasında geçer |

Bir diyalog açıkken çizimin tuşları kapalıdır.

## Panel alanları

Sağ ya da sol paneldeki bir kutuda:

| Tuş | Ne yapar |
|---|---|
| {{key:Enter}} | Değeri uygular ve kutudan çıkar |
| {{key:Esc}} | Eski değeri geri koyar ve kutudan çıkar |
| {{key:Tab}} | Uygular ve sonraki kutuya geçer |

Bir kutuda imleç varken harfler komut satırına değil oraya yazılır.

## Fare

| Eylem | Ne yapar |
|---|---|
| Tıklama | Bir komut nokta istediğinde nokta seçer; nesne istediğinde nesne seçer; aksi halde bir nesne ya da bir tutamaç seçer |
| Shift+tıklama | Seçili bir nesneyi seçimden çıkarır ([Ayarlar](topic:settings) içinde {{ui:Nesnelere tıklama}} {{ui:Seçimi değiştirir}} olarak ayarlıysa: ekler). Bir nokta seçerken: o tıklama için nesne yakalamalarını yok sayar |
| Boş alanda tıklayın, sonra yeniden tıklayın | Bir seçim kutusu: soldan sağa bir pencere, sağdan sola bir kesişen pencere |
| Boş alanda sürükleyin | Bir kement: önce sağa sürüklerseniz pencere, önce sola sürüklerseniz kesişen; sürüklerken {{key:Space}} pencere, kesişen ve çit arasında döner; {{key:Esc}} bırakır (LASSOMODE 0 ya da Ayarlar, onu yeniden dikdörtgen yapar) |
| TRIM ya da EXTEND'de parçalar üzerinden sürükleyin | Yolun kestiği (ya da uzattığı) her parçayı kırpar (ya da uzatır); diğeri için {{key:Shift}} tuşunu basılı tutun |
| Bir tutamacı sürükleyin | Tutamacı taşır (ya da tutamaca tıklayın, sonra gideceği yere tıklayın) |
| Metni çift tıklayın | Onu seçer ve imleci sağ paneldeki {{ui:Metin}} kutusuna koyar |
| Sağ tıklama | Enter. Bir tutamaç taşıma ya da seçim kutusu sırasında: onu iptal eder |
| Sağ düğmeyle sürükleyin | Kaydırır |
| Tekerlek | İmleç çevresinde yakınlaştırır ve uzaklaştırır |
| Tekerleği (orta düğme) sürükleyin | Kaydırır |
| Tekerleğe çift tıklayın | Tüm çizime yakınlaştırır (sınırlar) |
| Bir DWG ya da DXF'i çizime bırakın | Açar |

Dokunmatik yüzeyde ya da dokunmatik ekranda bkz. [Fare, dokunmatik yüzey ve dokunma](topic:mouse-trackpad-touch).

## Tarayıcının sakladığı tuşlar

{{key:Mod+N}}, {{key:Mod+W}} ve {{key:Mod+T}} her zaman tarayıcıya aittir. CadCraft bunları kullanmaz: yeni bir çizim için {{ui:Yeni}} düğmesini ya da `NEW` yazmayı kullanın. CadCraft'in panosu kendine aittir: {{key:Mod+C}} ve {{key:Mod+V}} nesneleri CadCraft çizimleri ve sekmeleri arasında kopyalar, diğer programlarla arasında değil.

:::mac
{{key:Mod+Y}} yinelemek yerine tarayıcınızın geçmişini açarsa, {{key:Mod+Shift+Z}} ya da {{ui:Yinele}} düğmesini kullanın.
:::

## MOVE nerede

MOVE, {{key:M}} tuşundaki komuttur: nesneleri seçin, sonra bir temel nokta ve ikinci bir nokta ya da yazılmış bir mesafe. `ALIGN` ve `DISTRIBUTE` de vardır. BimCraft aynı adları yapı elemanlarında aynı işler için kullanır; ancak onun {{key:M}} tuşu Ölçmedir ve Taşı komutu {{key:Shift+M}}'dir.
