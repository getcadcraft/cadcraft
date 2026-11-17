---
title: Tarix: versiyalar və nə dəyişdi
summary: Çertyojun versiyalarına baxın (Studio-nun saxladığı nüsxələr və buludunkular), birini açın və ya bərpa edin, iki versiyanı müqayisə edin və dəyişikliklər rənglə göstərilsin.
keywords: tarix, versiyalar, versiya tarixçəsi, bərpa, əvvəlki versiya, saxlamanı geri qaytar, müqayisə, çertyojları müqayisə et, dwgcompare, dəyişikliklər, əlavə edilib, silinib, dəyişdirilib, anlıq görüntü, ehtiyat nüsxə, bulud versiyaları
from: 141d37b3
---

## Nə yaradacaqsınız

Çertyojun əvvəlki versiyasına baxış və indikindən nə fərqləndiyinin siyahısı: nə əlavə edildi, nə silindi və nə dəyişdi, çertyojda rənglə işarələnmiş.

## Tarixçəni açın

`HISTORY` (və ya `HIST`) yazın və {{key:Enter}} basın, ya da {{ui:Görünüş}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Tarix…}} seçin. Panel çertyojun yanında açılır və siz işləyərkən açıq qalır, beləliklə üzərindəki rənglərlə çertyojda sürüşdürə və miqyaslaya bilərsiniz.

Tarix CadCraft Studio-da işləyir. Brauzerdə panel bunu sadəcə bildirir.

## Versiyalar haradan gəlir

- **Bu kompüterdə.** Studio-da çertyoju fayldan hər açdıqda və hər saxladıqda Studio faylın nüsxəsini bu kompüterdəki öz yaddaşında saxlayır. İlk nüsxə {{ui:Açıldığı kimi}} adlanır: faylın ilk üzərinə yazmanızdan əvvəlki hali. Studio hər çertyojun ən yeni 25 nüsxəsini saxlayır və bütün nüsxələrin cəmi 400 MB-ı keçəndə ən köhnələr birinci gedir. Heç nəyi dəyişməyən saxlama heç nə saxlamır. Heç nə yüklənmir.
- **Buludda.** Studio-da çertyoju buludlu fayllarınızdan açdıqda panel həmçinin {{ui:Buludda}} siyahısını göstərir: buludun saxladığı hər versiya, nömrəsi, onu saxlayan şəxs və qeydi ilə. Panel yalnız oxuyur. CadCraft öz saxlamalarını hələ buluda göndərmir, buna görə bunlar digər cihazlardan və veb-dən saxlanmış versiyalardır. Giriş müddətinin bitdiyini bildirirsə, Studio-da yenidən daxil olun.

Hələ saxlanmamış çertyojun nüsxəsi yoxdur: əvvəlcə onu saxlayın.

## Versiyanı açın və ya bərpa edin

- {{ui:Aç}} həmin versiyanı öz sekmə­sində açır. Sizin çertyojunuza toxunulmur.
- {{ui:Bərpa et}} bu çertyojun yerinə həmin versiyanı qoyur. Əvvəlcə soruşur. Bundan əvvəl Studio çertyojun indiki halının nüsxəsini Tarixdə saxlayır (işarəsi {{ui:Bərpadan əvvəl}}), və siz saxlayana qədər fayla heç nə yazılmır. Bərpanı {{key:Mod+Z}} ilə geri qaytarmaq olmur; həmin nüsxədən istifadə edin.

## Müqayisə

1. Versiyada {{ui:Müqayisə et}} düyməsinə klikləyin. O, {{ui:Çertyojun indiki hali}} ilə müqayisə olunur; başqa versiya ilə müqayisə etmək üçün əvvəlcə onu {{ui:Bununla müqayisə et}} seçimində seçin.
2. Siyahının altındakı nəticəni oxuyun: neçə obyekt əlavə olunub, silinib və dəyişib, və onların siyahısı. Siyahıdakı elementə klikləyin ki, görünüş ona keçsin.
3. Çertyojda:
   - **yaşıl** obyektlər əlavə olunub,
   - **qırmızı** obyektlər silinib (yalnız köhnə versiyadadırlar),
   - **narıncı** obyektlər dəyişib: yeni forma dolu, köhnə forma kəsikli.
4. {{ui:Çertyojda göstər}} rəngləri açır və bağlayır; {{ui:Rəngləri təmizlə}} nəticəni götürür. Paneli bağlamaq da rəngləri təmizləyir.

Siyahı dəyişmiş obyektdə nəyin dəyişdiyini göstərir: mətnini, yerini, formasını, qatını, rəngini, xətt tipini və ya xətt qalınlığını. Hər vərəq ayrıca müqayisə olunur; rənglər açıq vərəqdə göstərilir.

:::note
Çertyojda obyektlərin daimi nömrəsi yoxdur, ona görə CadCraft obyektləri nə olduqlarına görə uyğunlaşdırır: hər iki tərəfdə eyni obyekt dəyişməyib; eyni tipli və qatlı, öz ölçüsü qədər köhnə obyektin yaxınlığında olan obyekt eyni obyektdir, dəyişib; qalanı əlavə edilib və ya silinib. Yerindən uzağa köçürülmüş obyekt bir yerdə silinmiş, digərində əlavə edilmiş kimi görünür. Blok istinadı öz blokunun məzmununu sayır.
:::

## Ümumi səhvlər

- **"Hələ nüsxə yoxdur."** Studio, diskdə faylı olan çertyojun hər açılışında və saxlanmasında nüsxə saxlayır. Brauzer sekmesindən açılmış və ya heç saxlanmamış çertyojda nüsxə yoxdur.
- **Bulud siyahısı yoxdur.** O, Studio-da buluddan açılmış çertyoj üçün görünür; diskdən açılmış fayl bulud çertyojı deyil.
- **Hər şey dəyişmiş görünür.** İki versiyanı müxtəlif proqramlar fərqli yollarla yazıb (anonim blokların adları, yuvarlaqlaşdırma). CadCraft ilə saxlanmış versiyaları müqayisə edin.
