---
title: Görmədən çertyoj çəkmək
summary: Girişi yandırın və CadCraft hər əmri və nəticəni ekran oxuyucunuz vasitəsilə səsləndirir, çertyojı və kursorun yaxınlığındakı şeyləri təsvir edir, kursoru klaviaturayla hərəkət etdirməyə imkan verir, hər tutma və tutacaq üçün səs çalır və brauzerinizin kompüterinizdə bacardığı yerdə səslə əmrləri qəbul edir.
keywords: əlçatanlıq, ekran oxuyucu, kor, zəif görmə, NVDA, VoiceOver, JAWS, Orca, klaviatura kursoru, səsli əmrlər, nitq, səslər, tutma səsləri, çertyojı təsvir et, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Giriş** görmədən çertyoj çəkməyə imkan verir. Siz yandırana qədər söndürülüdür, belə ki, heç kim təsadüfən əldə etməsin.

## Yandırın

**Parametrlər**i açın (dişli işarəsi və ya Ctrl+,), **Görmədən çertyoj çəkmək** seçimini tapın və **Açıq** seçin. Və ya komanda sətrinə `ACCESS` yazın və sorğuya `Açıq` cavabını verin. Bu, bu kompüterdə yadda saxlanılır.

Giriş açıq olduqda:

- **Komanda sətrinin dediyi hər şey səslənir** ekran oxuyucunuz vasitəsilə: yazdığınız, soruşulan sorğu, cavab və hər xəta. CadCraft öz nəzakətli və təcili canlı bölgələrindən istifadə edir, ona görə canlı bölgələri oxuyan ekran oxuyucusu heç bir quraşdırma tələb etmir. Xətalar və ləğvlər fasilə verir; qalanı növbəsini gözləyir.
- **Çertyoj sahəsinə çatmaq olur.** "Çertyoj" eşidənə qədər Tab basın, ya da komanda sətrindən Shift+Tab basın. Bu, klavişləri CadCraft-a ötürən bir bölgədir.

## Çertyojdakı klavişlər

| Klaviş | Nə edir |
|---|---|
| Ox klavişləri | Klaviatura kursorunu hərəkət etdirir. Addım ekranda göstərilənin təxminən yüzdə biridir, 1, 2 və ya 5-ə yuvarlaqlaşdırılır. Shift onu on dəfə, Ctrl isə onda bir dəfə çox hərəkət etdirir. |
| Enter | Kliklə olduğu kimi, kursorun altındakı nöqtəni seçir. |
| Space | Komanda sətrində Enter basmaq kimi: LINE-ı bitirir, defoltu qəbul edir. |
| Tab, Shift+Tab | Kursorun yaxınlığında növbəti və ya əvvəlki tutma nöqtəsinə keçir, ən yaxınından başlayaraq. |
| G | Seçilmiş obyektlərin tutacaqları arasında keçir. |
| D | Çertyojı təsvir edir: neçə obyekt, hansı növdən, nə qədər böyük, nə seçilib. |
| W | Kursorun harada olduğunu və son nöqtədən nə qədər uzaq olduğunu deyir. |
| N | Kursorun yaxınlığında nə olduğunu deyir, ən yaxınından başlayaraq, məsafə və tərəf ilə. |
| S | Seçilmiş obyektləri təsvir edir. |
| R | Son dediyi şeyi yenidən deyir. |
| V | Səsi yandırır və ya söndürür. |
| / | Komanda sətrinə keçir. |
| ? | Bu klavişləri sadalayır. |

Klavişlərlə hərəkət etdikdə harada yerləşdiyinizi deyir. Komanda nöqtə gözlədikdə, son nöqtədən nə qədər və hansı istiqamətdə olduğunuzu da deyir, məsələn "son nöqtədən 2400, sağa, 0 dərəcədə".

## Əmrlər

- {{cmd:ACCESS}} Girişi, tutma səslərini və səsi yandırır və ya söndürür və vəziyyəti deyir.
- {{cmd:DESCRIBE}} çertyojda nə olduğunu deyir.
- {{cmd:WHEREAMI}} kursorun harada olduğunu deyir.
- {{cmd:NEARBY}} kursorun yaxınlığında nə olduğunu deyir.
- {{cmd:SAYSEL}} nə seçildiyini deyir, hər obyekt üçün bir cümlə.
- {{cmd:VOICE}} səsli əmrləri yandırır və ya söndürür.

Bu beş əmr çertyojı oxuyur və cavabı çap edir; heç nəyi dəyişmir.

## Tutma və tutacaq səsləri

Parametrlərdə **Tutma və tutacaq səsləri**ni yandırın. Hər tutma növünün öz tonu və səsi var, belə ki, son nöqtəni orta nöqtədən, mərkəzdən, kəsişmədən və qalanlarından ayıra bilərsiniz; tutacağın isə ikiqat tıq səsi var. Səs kursorun ekran boyunca hərəkətinə uyğun olaraq sola və ya sağa keçir. Səslər kompüterinizdə yaradılır; heç nə yüklənmir.

## Səslə əmrlər

Parametrlərdə **Səsli əmrlər**i yandırın. Əmrin adını deyin ("line", "circle", "move") və sonra rəqəmləri oxuduğunuz kimi deyin: "point three hundred comma four hundred", "distance twelve hundred", "angle forty five". "Enter", "cancel", "undo" və "redo" dediklərini edir. Eşidilən şey geri deyilir və əmr olmayan ifadə təxmin edilmir, bildirilir.

**Nitqin harada tanındığı.** CadCraft-ın öz nitq xidməti yoxdur və heç bir səs göndərmir. Brauzerdən bu kompüterdə nitqi tanımağı xahiş edir. Brauzer bacarırsa, seçim **Bu kompüterdə** olur və heç bir səs ondan çıxmır. Bacarmırsa, səs **Brauzerin onlayn xidməti** seçilməyincə söndürülü qalır; bu, brauzerin səsi onun istehsalçısının nitq xidmətinə göndərməsinə imkan verir. Qərar verməzdən əvvəl Parametrlər hansının tətbiq olunduğunu deyir.

## Hələ nə etmir

- Giriş yalnız CadCraft-dadır. Digər yeddi tətbiq eyni klavişlər və səslərlə sonra gələcək.
- Çertyojdakı mətn (qeyd, blok adı) yazıldığı kimi oxunur; heç vaxt təlimat kimi qəbul olunmur.
- Sınaq yoxlamaları və brauzer testləri ilə yoxlanılıb; NVDA və VoiceOver ilə əl yoxlamaları və kor və ya zəif görən test edənlə yoxlamalar hələ qalır. Sınasanız, nəyin çatmadığını bizə deyin.
