---
title: Çertyojları siniflərlə təşkil edin
summary: Siniflər obyektləri qatlardan kənar ikinci üsulla çeşidləyir (Lighting-Fixtures-Spot): onları göstərin və gizlədin, rəng, xətt tipi, xətt qalınlığı, doldurma və mətn üslubu verin ki, obyektlər bunları "sinfə görə" götürə bilsin, və yeni obyektlərin hansı sinifdə olacağını təyin edin.
keywords: sinif, siniflər, CLASSES, CLS, CLASS, sinfə görə, ByClass, cari sinif, yaradarkən istifadə et, Heç biri, dizayn qatı, qat miqyası, yüksəklik, Vectorworks
from: 672de9cb
---

Qatlar obyektin çertyojda *harada* olduğunu bildirir; siniflər isə *nə* olduğunu. `Level 1` qatındakı divar `Walls-Exterior` sinifində ola bilər, `Ceiling` qatındakı projektor isə `Lighting-Fixtures-Spot` sinifində. Hər işığı bütün qatlarda eyni anda gizlədə bilərsiniz, və ya bütün xarici divarları qalınlaşdırıb çap edə bilərsiniz, heç nəyi qatlar arasında köçürmədən.

Hər obyekt **Heç biri** sinifindən başlayır. Öz siniflərı olmayan çertyoj əvvəlki kimi işləyir.

## Siniflər panelini açın

`CLASSES` (və ya `CLS`) yazın və {{key:Enter}} basın, və ya {{ui:Görünüş}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Siniflər…}} seçin. Panel çertyojun üzərində açılır və siz çəkərkən açıq qalır.

- **Sinif əlavə edin:** adını yuxarıdakı qutuya yazın və {{key:Enter}} basın. `-` səviyyə yaradır: `Lighting-Fixtures-Spot` `Lighting-Fixtures` altında, o da `Lighting` altındadır; çatışmayan səviyyələr sizin üçün əlavə olunur.
- **Göstərmək və gizlətmək:** sinifin yanındakı göz. Sinfi gizlətmək onun altındakı bütün sinifləri ekranda və kağızda gizlədir.
- **Cari sinif:** dairəvi düymə. Çəkdiyiniz yeni obyektlər cari sinifə düşür.
- **Sinif seçin:** onun adına klik edin. Siyahının altındakı düymələr və parametrlər ona görə işləyir.

Hər sətirin sonundakı rəqəm həmin sinifdəki obyektlərin sayıdır (modeldə, vərəqlərdə və blok təriflərinin içində).

## Obyektləri sinifə yerləşdirin

Obyektləri seçin, paneldə sinif seçin və {{ui:Sinfi təyin et}} düyməsini basın. Əvvəlcə {{ui:Sinfə görə}} qutusunu işarələyin ki, onlar rəngini, xətt tipini, xətt qalınlığını, doldurmasını və mətn üslubunu sinifdən götürsün. Həmçinin:

- obyektlər seçili ikən `CLASS` yazın və sinif adı daxil edin (yeni ad sinif yaradır);
- heç nə seçili olmadan `CLASS` yazın ki, cari sinifi təyin edəsiniz; `?` siyahını sayları ilə göstərir;
- Xüsusiyyətlər panelində {{ui:Sinif (C)}} bölməsindən istifadə edin: sinif, və rəng, xətt tipi və xətt qalınlığı üçün {{ui:… sinfə görə}} keçidi (ştrixləmələr üçün doldurma, mətn üçün mətn üslubu);
- `QSELECT` ilə sinfə görə seçin: {{ui:Sinif (C)}} xüsusiyyətini seçin.

{{ui:Onun obyektlərini seç}} açıq vərəqdə (və ya modeldə) seçilmiş sinifin hər obyektini seçir.

## Obyekt necə çəkilir: obyekt, sinif, qat

Obyektin rəngi, xətt tipi, xətt qalınlığı, doldurması və mətn üslubu qatlarda olduğu kimi **sinfə görə** ola bilər. CadCraft bu ardıcıllıqla baxır:

1. Obyektin öz dəyəri, əgər bu dəyər sinfə görə deyilsə.
2. Sinfin dəyəri, obyekt onu sinfə görə götürürsə və sinifdə varsa.
3. Qatın dəyəri.

Rəngi (və ya xətt tipi …) {{ui:Təyin edilməyib}} olan sinif obyekti qatına ötürür. Sinif seçin və düymələrin altında onun {{ui:Rəng}}, {{ui:Xətt tipi}}, {{ui:Xətt qalınlığı}}, {{ui:Doldurma (ştrixlamalar)}} və {{ui:Mətn üslubu}} dəyərlərini təyin edin. {{ui:Yaradarkən istifadə et}} qutusunu işarələsəniz, həmin sinifdə çəkilən yeni obyektlər hamısını sinfə görə götürür.

Paneldəki hər dəyişiklik bir {{ui:Geri qaytar}} addımıdır.

## Adını dəyişmək və silmək

{{ui:Adını dəyişdir}} adı yerində redaktə edir: saxlamaq üçün {{key:Enter}}, tərk etmək üçün {{key:Esc}} basın. Onun altındakı siniflər izləyir (`Lighting` `Light` olduqda `Lighting-Spot` `Light-Spot` olur), və onların obyektləri və viewport üzrə override-lar da belədir.

{{ui:Sil}} sinfi və onun altındakı bütün sinifləri silir. Onların obyektləri **Heç biri**-yə keçir. Bir {{ui:Geri qaytar}} hamısını geri qaytarır. **Heç biri** adını dəyişmək və ya silmək olmur.

## Dizayn qatları

{{ui:Dizayn qatları}} altında hər qat miqyas (`1:50`) və yüksəklik daşıya bilər. Dizayn qatı adi qatdır: model fəzası və vərəqlər əvvəlki kimi işləyir, miqyas və yüksəklik isə onları istifadə edəcək alətlər üçün çertyojla birlikdə saxlanılır.

## DWG və DXF fayllarında

Siniflər CadCraft-ın saxladığı hər DWG versiyasında və DXF-də (R12 və 2000) saxlanılır. Hər obyektin sinfi onun öz genişləndirilmiş məlumatıdır (tətbiq `CADCRAFT_CLASS`), ona görə də AutoCAD və digər proqramlar onu obyektlə birlikdə saxlayır. Sinif siyahısı, rənglər və görünürlük `CADCRAFT_CLASSES` adlı bir istifadə olunmayan blokda saxlanılır; başqa proqram həmin bloku təmizləsə, CadCraft yenə hər obyektin sinfini tapır və siniflər standart parametrlərlə qayıdır.

Digər proqramlar siniflərdən xəbərsizdir: hər obyekti öz və ya qatının dəyərləri ilə çəkirlər.

Bax həmçinin [Viewport sinif override-ları](topic:viewport-overrides) və [Çertyojları qatlarla təşkil edin](topic:layers).
