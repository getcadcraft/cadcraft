---
title: Görmeden çizim
summary: Erişimi açın, CadCraft her komutu ve sonucu ekran okuyucunuz aracılığıyla seslendirir, çizimi ve imlecin yakınındakileri anlatır, imleci klavyeyle taşımanıza izin verir, her yakalama ve tutamaç için bir ses çalar ve tarayıcınızın bunu bilgisayarınızda yapabildiği yerlerde komutları sesle alır.
keywords: erişilebilirlik, ekran okuyucu, görme engelli, az görme, NVDA, VoiceOver, JAWS, Orca, klavye imleci, sesli komutlar, konuşma, sesler, yakalama sesleri, çizimi anlat, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Erişim** ekrana bakmadan çizim yapmanızı sağlar. Siz açana kadar kapalıdır; böylece kimse yanlışlıkla etkinleştirmez.

## Açın

**Ayarlar**'ı açın (dişli simgesi ya da Ctrl+,), **Görmeden çizim** öğesini bulun ve **Açık**'ı seçin. Ya da komut satırına `ACCESS` yazıp yanıt olarak `Açık` girin. Bu bilgisayarda hatırlanır.

Erişim açıkken:

- **Komut satırının söylediği her şey** ekran okuyucunuz aracılığıyla seslendirilir: yazdığınız, sorulan istem, yanıt ve her hata. CadCraft kendi nazik ve acil canlı bölgelerini kullanır; canlı bölgeleri okuyan bir ekran okuyucu için bir ayar gerekmez. Hatalar ve iptaller sözü keser; diğer her şey sırasını bekler.
- **Çizim alanına ulaşılabilir.** "Çizim" duyana kadar Tab tuşuna basın ya da komut satırından Shift+Tab'a basın. Tuşları CadCraft'a geçiren bir bölgedir.

## Çizimdeki tuşlar

| Tuş | Ne yapar |
|---|---|
| Ok tuşları | Klavye imlecini taşır. Bir adım, ekranda gösterilenin yaklaşık yüzde biri kadardır ve 1, 2 ya da 5'e yuvarlanır. Shift ile on kat, Ctrl ile onda bir uzaklığa gider. |
| Enter | İmlecin altındaki noktayı, tıklamayla aynı şekilde seçer. |
| Space | Komut satırında Enter'a basmak gibi: LINE'ı bitirir, varsayılanı alır. |
| Tab, Shift+Tab | İmlecin yakınındaki bir sonraki ya da önceki yakalama noktasına, en yakından başlayarak atlar. |
| G | Seçili nesnelerin tutamaçlarında adım adım ilerler. |
| D | Çizimi anlatır: kaç nesne, hangi türden, ne kadar büyük, neyin seçili olduğu. |
| W | İmlecin nerede olduğunu ve son noktadan ne kadar uzakta olduğunu söyler. |
| N | İmlecin yakınındaki şeyleri, en yakından başlayarak, mesafe ve yanıyla söyler. |
| S | Seçili nesneleri anlatır. |
| R | Son söyleneni yeniden söyler. |
| V | Sesi açar ya da kapatır. |
| / | Komut satırına gider. |
| ? | Bu tuşları listeler. |

Tuşlarla hareket ederken nereye vardığınızı söyler. Bir komut bir nokta beklerken, son noktaya ne kadar uzakta ve hangi yönde olduğunuzu da söyler; örneğin "son noktadan 2400, sağa doğru, 0 derecede".

## Komutlar

- {{cmd:ACCESS}} erişimi, yakalama seslerini ve sesi açar ya da kapatır ve durumu söyler.
- {{cmd:DESCRIBE}} çizimde neler olduğunu söyler.
- {{cmd:WHEREAMI}} imlecin nerede olduğunu söyler.
- {{cmd:NEARBY}} imlece yakın olanları söyler.
- {{cmd:SAYSEL}} neyin seçili olduğunu söyler, nesne başına bir cümle.
- {{cmd:VOICE}} sesli komutları açar ya da kapatır.

Bu beş komut çizimi okur ve bir yanıt yazdırır; hiçbir şeyi değiştirmez.

## Yakalama ve tutamaç sesleri

Ayarlar'da **Yakalama ve tutamaç sesleri**'ni açın. Her yakalama türünün kendi perdesi ve sesi vardır; böylece bir uç noktayı, orta noktayı, merkezi, kesişimi ve diğerlerini ayırt edebilirsiniz; bir tutamacın ise çift tıkı vardır. Ses, imleci ekranın üzerinde izlemek için sola ya da sağa kayar. Sesler bilgisayarınızda üretilir; hiçbir şey indirilmez.

## Sesli komutlar

Ayarlar'da **Sesle komutlar**'ı açın. Bir komut adı söyleyin ("line", "circle", "move"), sonra sayıları okur gibi söyleyin: "nokta üç yüz virgül dört yüz", "mesafe bin iki yüz", "açı kırk beş". "Enter", "iptal", "geri al" ve "yinele" dediklerini yapar. Duyulan, geri seslendirilir; komut olmayan bir ifade bildirilir, tahmin edilmez.

**Konuşmanın nerede tanındığı.** CadCraft'ın kendi konuşma hizmeti yoktur ve hiçbir sesi bir yere göndermez. Tarayıcınızdan konuşmayı bu bilgisayarda tanımasını ister. Tarayıcınız yapabiliyorsa seçenek **Bu bilgisayarda** olur ve hiçbir ses bilgisayardan çıkmaz. Yapamıyorsa, tarayıcının yapımcısının konuşma hizmetine ses göndermesine izin veren **Tarayıcının çevrimiçi hizmeti** seçeneğini seçmediğiniz sürece ses kapalı kalır. Ayarlar, karar vermeden önce hangisinin geçerli olduğunu söyler.

## Henüz yapılmayanlar

- Yalnızca CadCraft'ta erişim vardır. Diğer yedi uygulama aynı tuşlar ve seslerle izleyecek.
- Çizimdeki metin (bir not, bir blok adı) yazıldığı gibi okunur; asla bir talimat olarak alınmaz.
- Sentetik denetimler ve tarayıcı testleriyle denendi; NVDA, VoiceOver ve görme engelli ya da az gören bir test uzmanıyla yapılan elle denetimler henüz yapılmadı. Denerseniz neyin eksik olduğunu bize bildirin.
