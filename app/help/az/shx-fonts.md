---
title: SHX şriftləri ilə öz mətnlərinizi çəkin
summary: CadCraft-a SHX şriftləri qovluğunu verin (və ya faylları seçin) və onları adlandıran mətn üslubları ekranda, çap və PDF-də həmin şriftlərlə çəkilir, üslubun hündürlüyü, en nisbəti və əyilməsi ilə.
keywords: shx, şriftlər, şrift, forma şrifti, böyük şrift, bigfont, unifont, köhnə, fars, farsca, ərəb, mətn üslubu, itkin şrift, əvəz edilmiş şrift, SHXFONTS, qovluq, tərs, vizual sıra, simplex, isocp
from: 14b0a4ab
---

Digər proqramlardan olan çertyojlar mətn üslublarında **SHX şriftlərini** adlandırır və DWG onları saxlamır. Şrift olmadan CadCraft həmin mətni öz şəklində çəkir; bu adi Latın mətni üçün yaxşıdır, lakin simvol kodlarını başqa hərflərin formasına xəritələyən köhnə şriftlər üçün, məsələn köhnə fars qeyd şrifti üçün yaxşı deyil.

CadCraft-a şriftləri verin, o da mətni onlarla çəkəcək.

## Şriftlərinizi yükləyin

{{cmd:SHXFONTS}} (`SHX`) yazın və seçin:

- {{ui:Qovluq}} (CadCraft Studio): qovluq seçin. Onun içindəki hər `.shx` faylı indi oxunur və CadCraft hər başladıqda yenidən.
- {{ui:Fayllar}} (brauzer): bir və ya bir neçə `.shx` faylı seçin. Onlar bu brauzerdə saxlanılır və heç vaxt yüklənmir.
- {{ui:Siyahı}}: yüklənmiş şriftlər və açıq çertyojun adlandırdığı, lakin sizin yükləmədiyiniz şriftlər.
- {{ui:Çıxar}} və {{ui:Təmizlə}}: bir şrifti və ya hamısını unutmaq.

CadCraft üçüncü tərəf şriftlərini özü ilə daşımır, heç vaxt göndərmir: onlar sizdən gəlir. Çertyoj yalnız şriftlərin adını göstərir və onların bir nüsxəsini saxlamır.

## Nə baş verir

Mətn üslubunun şrift adı yüklənmiş şriftə onun adına görə uyğunlaşdırılır, böyük-kiçik hərf, qovluq və `.shx` nəzərə alınmadan (`SIMPLEX.SHX` `simplex`-i tapır). Belə üslubda olan mətn ekranda, çap və PDF-də xətlər kimi çəkilir, mətnin öz yerində, hündürlüyü, fırlanması, en nisbəti və əyilmə bucağı ilə. Eni şriftin özündən gəlir, buna görə {{ui:Mərkəz}} və {{ui:Sağ}} düzləşdirmə, sətir sarma və seçmə gördüyünüzlə üst-üstə düşür. Şriftü yüklənməmiş üslub daxili üzü saxlayır və siz şriftlərinizi yükləmədən adlar olan çertyoju açdıqda komanda sətri bunu bildirir.

Standart üslub da hesab olunur: standart üslubu öz şriftini adlandıran çertyoj onu saxlayır.

## Artıq vizual sırada olan şriftlər

Bir çox köhnə fars və ərəb SHX şriftləri hərfləri ekran üçün artıq formalaşdırılmış və soldan sağa çəkilən halda saxlayır, buna görə məntiqi sırada yazılan mətn tərs çıxır. {{cmd:SHXFONTS}} yazın, {{ui:Tərs çevir}} seçin və şrifti adlandırın: onun mətni bu zaman son hərfdən başlayaraq düzülür. Yenidən işə salın, geri qaytarmaq üçün. Bu seçim şriftə aiddir, bu brauzerdə saxlanılır və çertyojda saxlanılmır.

## Hələ əhatə olunmayanlar

- Format kodları olan mətn (rənglər, MTEXT-də yığınlar) daxili üzdə qalır.
- Böyük şriftlər (ikiqat baytlı növ) əsas şriftdə olmayan kodlar üçün yerinə keçir, lakin CadCraft-ın artıq Unicode-a çevirdiyi Asiya kod səhifəsində olan mətn şriftin ikiqat baytlı kodlarına geri xəritələnmir.
- Şrift oxuyucusu formatın dərc olunmuş təsvirinə əməl edir və CadCraft üçün hazırlanmış şriftlərdə sınaqdan keçirilib. Sizin şriftlərinizdən biri səhv çəkilirsə, şrifti və çertyoju bizə göndərin.
