---
title: Bir işaretlemeyi revizyona dönüştürün
summary: MarkupCraft'ın yazdığı kırmızı kalem paketini okuyun, her değişikliği kabul edin ya da reddedin, kabul edilenlere bir revizyon bulutu ve bir revizyon günlüğü ekleyin ve MarkupCraft'ın geri okuduğu yanıt dosyasını kaydedin.
keywords: kırmızı kalem, redline, işaretleme, markup, revizyon, revision, bulut, revizyon bulutu, revizyon günlüğü, kabul et, reddet, markupcraft, gözden geçirme, kırmızı kalem paketi, yanıtlar, REDLINE
from: cdb3fafe
---

MarkupCraft'ta bir gözden geçiren bir plan setini işaretler ve size bir **kırmızı kalem paketi** gönderir: `.redline.json` ile biten bir dosya. Burada her değişikliği tek tek gözden geçirirsiniz ve kabul edilenler çizimde revizyon bulutlarına dönüşür.

## Değişiklikleri gözden geçirin

{{cmd:REDLINE}} (`RDL`) yazın ve paketi seçin. Seçin:

- {{ui:Listele}}: her değişiklik, numarası, durumu, sayfası, türü, kimin istediği ve ne yazdığıyla.
- {{ui:Kabul et}}, {{ui:Reddet}}, {{ui:Bitti}}: numaraları yazın (`1,3-5`, ya da `Tümü`) ve yanıt dosyası için isteğe bağlı bir not. {{ui:Yeniden aç}}, değişiklikleri açık durumuna geri koyar.
- {{ui:Çerçeve}}: işaretlenmiş sayfanın gösterdiği çizim parçası. İki köşe tıklayın; tüm çizim için {{key:Enter}}'a basın. Değişiklikler sayfadaki yerlerine göre yerleştirilir, bu yüzden hizalamayı bu sağlar.
- {{ui:Uygula}}: kabul edilen ya da bitirilen her değişikliğin etrafına bir revizyon bulutu çizer (katman `REV-CLOUD`, revizyon harfiyle) ve çizimin sağına bir revizyon günlüğü çizer: kabul edilenlerin ve notlarınızın çizgili bir tablosu (katman `REV-LOG`). Tek bir geri alma adımıdır.
- {{ui:Kaydet}}: `<project>-<revision>.redline-answers.json` yazar. MarkupCraft'ta açın, işaretlemeler kapanır: Kabul edildi, Reddedildi ya da Tamamlandı; notlarınız yorum olarak eklenir.

## Bilmeniz gerekenler

Gözden geçirenin yazdığı, yazıldığı gibi gösterilir. CadCraft bir paketteki talimatları asla izlemez; yalnızca size gösterir.

Reddedilen ve açık değişiklikler çizime hiçbir şey eklemez. Paket bilgisayarınızda okunur; hiçbir şey yüklenmez.

Asistanınız bağlıysa, bir paketi okuyabilir, kararları kaydedebilir ve bunları `redline_read`, `redline_decide`, `redline_apply` ve `redline_answers` araçlarıyla uygulayabilir; çizim tek bir geri alma adımında değişir: "Asistan: Kırmızı kalemden revizyona".
