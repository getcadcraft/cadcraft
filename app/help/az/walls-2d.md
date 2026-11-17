---
title: 2D-də ağıllı divarlar, qapılar və pəncərələr çəkin
summary: Divarları polixətt kimi çəkin, təmiz birləşdirin və divarla birlikdə hərəkət edən qapı və pəncərələr əlavə edin. Hamısı 2D-dir, 3D model yoxdur.
keywords: divar, divarlar, WALL, WA, qapı, DOOR, DR, pəncərə, WINDOW, WN, DELOPENING, ağıllı divar, mərtəbə planı, açılma, menteşə, açılış
from: 45845d49
---

Burada divarlar 2D çəkiliş obyektləridir. Onlar 3D model yaratmır, beləliklə plan xətt çertyoju kimi yüngül qalır. Bina modeli üçün BimCraft-dan istifadə edin.

## Divarları çəkin

`WALL` (`WA`) yazın, ya da {{ui:Çəkmə}} qrupunun {{ui:Daha çox}} menyusundan {{ui:Divar}} seçin, sonra polixətt üçün olduğu kimi nöqtələri klikləyin. Bitirmək üçün {{key:Enter}} basın, ya da otağı bağlamaq üçün `C` yazın.

- `T` qalınlığı təyin edir.
- `J` klikləriniz nəyi izləyəcəyini bildirir: divarın mərkəzini, ya sol, ya sağ üzünü.
- `F` doldurmanı təyin edir: yox, bərk və ya ştrixləmə.

Künclər özü-özünə gönyə olur. Başqa divarın qalınlığı daxilində bitən divar onu təmiz T ilə birləşdirir, bir-birini kəsən divarlar isə bir-birinə açılır. Birləşmələr divarlarla birlikdə saxlanılır. Düzbucaqlılar, çoxbucaqlılar, qövslər, bölmə, kilidlər və qalanları üçün bax: "2D divarlar üçün divar formaları, kəsiklər, ofsetlər və kilidlər".

## Qapılar və pəncərələr əlavə edin

`DOOR` (`DR`) və ya `WINDOW` (`WN`) yazın və divarda klikləyin. Qapı klikləndiyiniz divar tərəfinə açılır. `W` eni təyin edir, `Y` tipi, `H` menteşə tərəfini. Daha çox yerləşdirmək üçün klikləməyə davam edin və bitirmək üçün {{key:Enter}} basın. Qapılar tək, cüt, sürüşən və ya açıq giriş ola bilər. Pəncərələr sabit, qanadlı və ya sürüşən ola bilər.

## Onları dəyişdirin

Tutacaqlarını görmək üçün divarı seçin:

- Uc tutacaqları divarı uzadır. Ona birləşmiş divarlar izləyir.
- Orta tutacaq divarı hərəkət etdirir.
- Açılışdakı tutacaq onu divar boyunca sürüşdürür.
- Oxlar qapının menteşəsini və açılmasını çevirir.

Xassələrdə qalınlıq, doldurma və hər açılış göstərilir: tip, en, mövqe, menteşə, açılma, açıq və ya bağlı göstərilməsi və {{ui:Çıxar (R)}}. `DELOPENING` klikləmə yerinizə ən yaxın açılışı çıxarır.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` və `ERASE` adi kimi işləyir. Qapılar və pəncərələr öz divarı ilə gedir, birləşmiş divarlar birləşmələrini saxlayır və bir {{ui:Geri qaytar}} hamısını geri alır.

## Digər proqramlarda

Hər divar adi blok kimi saxlanılır, buna görə digər CAD proqramları onu düzgün göstərir və hərəkət etdirə bilir, lakin onu divar kimi redaktə edə bilmirlər. `EXPLODE` divarı sadə xətlərə və qövslərə çevirir və o, divar olmağı dayandırır.
