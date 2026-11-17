---
title: Siçan, trekpad və toxunma
summary: CadCraft-da təkərli siçanla, Mac və ya PC trekpadı ilə, ya da toxunma ekranı ilə miqyasın necə dəyişdiriləcəyi, sürüşdürüləcəyi, sağ klik ediləcəyi və seçiləcəyi, və brauzerlər arasında nələrin fərqləndiyi.
keywords: trekpad, sensorlu panel, magic mouse, toxunma, planşet, ipad, sürüşdür, miqyas, sıxma, sağ klik, iki barmaq, orta düymə, brauzer, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft təkərli siçan üçün nəzərdə tutulub. Hər şey trekpadla da işləyir, bir neçə öyrənilməli vərdişlə. Toxunma ekranları seçmək üçün işləyir, məhdudiyyətlərlə.

## Təkərli siçan

- **Miqyas:** təkəri fırladın. Çertyoj çarpaz xəttə nəzərən miqyaslanır, ona görə nəyi görmək istədiyinizə işarə edin.
- **Sürüşdür:** təkəri basıb saxlayın və sürükləyin, ya da sağ düyməni basaraq sürükləyin.
- **Hər şeyə miqyas:** təkərə ikiqat klikləyin, ya da {{ui:Extents}} düyməsinə klikləyin.
- **Əvvəlki görünüşə qayıt:** Görünüş qrupunda {{ui:Previous}} düyməsinə klikləyin, ya da `Z`, {{key:Enter}}, `P`, {{key:Enter}} yazın. Təkər addımlarının bir silsiləsi bir görünüş hesab olunur, belə ki bir {{ui:Previous}} hamısını geri qaytarır. Qayıtdığınız görünüşləri {{cmd:NAMEDVIEW}} (`NV`) ilə saxlayın.
- **Enter:** sağ klik edin.

## Trekpad

:::mac
- **Sürüşdür:** trekpad üzərində iki barmağınızı istənilən istiqamətdə hərəkət etdirin: çertyoj barmaqlarınızı izləyir. İki barmaq klikləmə basılı saxlanılarkən də sürükləyə bilərsiniz (sağ düymə sürüklənməsi).
- **Miqyas:** iki barmaqla sıxın. Miqyaslama çarpaz xətti izləyir.
- **Sağ klik (Enter):** iki barmaqla klikləyin. Heç nə olmasa, **System Settings** (Sistem parametrləri), sonra **Trackpad** bölməsində "Secondary click" seçimini açın. Control-klik CadCraft-da sağ klik yerinə adi klik kimi sayıla bilər, ona görə iki barmaq klikdən istifadə edin.
- **Bir sahəyə miqyas:** Görünüş qrupunda {{ui:Window}} düyməsinə klikləyin və iki künc seçin.
:::

:::windows linux
- **Sürüşdür:** sensorlu paneldə iki barmağınızı istənilən istiqamətdə hərəkət etdirin: çertyoj barmaqlarınızı izləyir. Sağ düymə basılı saxlanılarkən də sürükləyə bilərsiniz.
- **Miqyas:** iki barmaqla sıxın. Miqyaslama çarpaz xətti izləyir.
- **Sağ klik (Enter):** iki barmaqla klikləyin, ya da sensorlu panelin parametrlərindən asılı olaraq onun aşağı-sağ küncünə klikləyin.
- **Bir sahəyə miqyas:** Görünüş qrupunda {{ui:Window}} düyməsinə klikləyin və iki künc seçin.
:::

{{key:Space}} basılı saxlayıb sürükləmək CadCraft-da sürüşdürmür: {{key:Space}} Enter-dir.

Siçan təkəri hələ də addım-addım miqyaslayır. Təkər kimi tam addımlarla sürüşdürmə göndərən trekpad isə sürüşdürmək əvəzinə iki barmaqla sürüşdürmə ilə miqyaslayır: miqyası kiçildin, istədiyiniz sahəyə işarə edin və yenidən böyüdün. 3D vərəqi öz trekpad hərəkətlərini saxlayır (bax: [3D-də modelə baxış](topic:3d-solids#look-around)).

## Toxunma ekranları və planşetlər

CadCraft barmağı siçan klikləməsi kimi oxuyur:

- Toxunma nöqtə və ya obyekt seçir, ya da seçim edir.
- Boş yerdə barmağı sürüklədikdə lasso çəkilir (sağa əvvəl sürüşdürsəniz pəncərə, sola əvvəl sürüşdürsəniz çarpaz; bax: [Lasso ilə seçim](topic:lasso-selection)).
- {{cmd:TRIM}} və {{cmd:EXTEND}} əmrlərində barmağı hissələrin üzərindən sürüklədikdə onların hamısı kəsilir və ya uzadılır.
- Seçilmiş obyektin tutacağını sürüklədikdə tutacaq hərəkət edir (tutacaqlar və seçmə qutusu barmaq üçün daha böyükdür).
- İki barmaqla **sıxın**: onların arasındakı nöqtəyə nəzərən miqyaslamaq üçün; iki barmağı birlikdə hərəkət etdirin: **sürüşdürmək** üçün. İkinci barmaq birincinin başladığını ləğv edir, belə ki sıxma heç vaxt iz qoymur.
- **Uzun basma** (təxminən yarım saniyə sakit saxlamaq) sağ klikdir: {{key:Enter}}. Əmri bitirir, seçimi tamamlayır, ya da son əmri təkrarlayır.

Əmr sətirinin altında **düymə sırası** görünür: {{ui:Esc}}, Geri qaytar, Təkrarla, planşet klaviaturasının gizlətdiyi simvollar (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, klaviatura düyməsi və böyük {{ui:Enter}}. Əmr və ya rəqəm yazmaq üçün klaviatura düyməsinə (və ya əmr sətirinə) toxunun.

Üzərinə gətirmə (hover) yoxdur, ona görə tutma işarələri yalnız barmağınızın olduğu yerdə görünür.

:::touch
Toxunma ekranından istifadə edirsiniz. Tez baxışdan artıq bir şey üçün qoşulmuş klaviatura və siçan ya trekpad CadCraft-ı istifadə etməyi daha asan edir.
:::

## Brauzerlər

CadCraft Chrome, Edge, Firefox və Safari-də, Mac, Windows və Linux-da eyni işləyir. Fərqlər kiçikdir:

| Mövzu | Bilməli olduqlarınız |
|---|---|
| DWG açmaq | Böyük çertyojlar hər brauzerdə oxunmaq üçün bir neçə saniyə çəkir; bu zaman status xətti "Oxunur …" göstərir |
| Yükləmələr | Hər brauzer yükləmələrin harada saxlanacağına və əvvəlcə soruşub-soruşmayacağına qərar verir; bax [Brauzerlər və kompüterlər](common:browsers) |
| {{ui:Open to print}} | PDF yeni vərəqdə açılır. Brauzer pəncərələri bloklasa, CadCraft PDF-i yükləyir |
| F7 | Firefox kursor ilə gəzintini təklif edə bilər; Xeyr seçin |
| Saxlanılmamış dəyişikliklərlə çıxmaq | Hər brauzer öz "Saytdan çıxılsın?" sualını göstərir, CadCraft onu dəyişə bilməz |

:::safari
Safari-də {{ui:Open to print}} ilə açılan PDF vərəqdə göstərilə bilər, amma çap olunmaya bilər: **Fayl**, sonra **Çap et** istifadə edin.
:::

:::firefox
Firefox hər yükləmə ilə nə edəcəyinizi soruşa bilər. Faylı saxlamağı seçin, ya da Firefox parametrlərində Yükləmələr altında bunu bir dəfə dəyişin.
:::
