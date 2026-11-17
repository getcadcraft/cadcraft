---
title: Bloklar yaratmaq və daxil etmək
summary: Çəkilmiş qapını bloka çevirin, onu başqa yerlərdə, miqyas və bucaqlarda yenidən yerləşdirin və istifadə olunmayan blokları təmizləyin.
keywords: blok, bmake, insert, ddinsert, simvol, purge, explode, redefine, baza nöqtəsi, istinad, count, bcount, cədvəl, csv, atributlar, məlumat çıxarışı
from: 125a129d
---

## Nə yaradacaqsınız

Qapı simvolu `DOOR-900` adlı bloka çevrilir, sonra üç dəfə yerləşdirilir: olduğu kimi, 90 dərəcə döndərilmiş və güzgü əksi ilə.

Blok adlandırılmış obyektlər qrupudur. Onu bir dəfə çəkirsiniz; onu istifadə etdiyiniz hər yer eyni tərifə istinad edən **blok istinadı** olur. Sol paneldəki {{ui:Bloklar}} bölməsi çertyojdakı blokları və hər birinin neçə dəfə istifadə olunduğunu sadalayır.

## Qapını çəkin

1. `L` yazın və {{key:Enter}} basın.
2. `0,0` yazın və {{key:Enter}} basın.
3. `@0,900` yazın və {{key:Enter}} basın, sonra yenə {{key:Enter}} basın. Bu qapı kanadıdır.
4. `A` yazın və {{key:Enter}} basın.
5. `C` yazın və {{key:Enter}} basın, əvvəlcə mərkəzi vermək üçün.
6. Mərkəz üçün `0,0` yazın və {{key:Enter}} basın.
7. Başlanğıc nöqtəsi üçün `900,0` yazın və {{key:Enter}} basın.
8. Son nöqtə üçün `0,900` yazın və {{key:Enter}} basın. Bu, açılma qövsüdür.
9. {{ui:Hüdudlar}} üzərinə klikləyin.

Qövslər başlanğıc nöqtədən son nöqtəyə saat əqrəbinin əksinə çəkilir.

## Bloku yaradın

1. `B` yazın və {{key:Enter}} basın, ya da Bloklar qrupunda {{ui:Yarat}} üzərinə klikləyin.
2. `Blokun adını daxil edin` sorğusunda `DOOR-900` yazın və {{key:Enter}} basın.
3. `Daxil etmə baza nöqtəsini göstərin` sorğusunda `0,0` yazın və {{key:Enter}} basın. Bu menteşədir: blok yerləşdiriləndə düşən nöqtə.
4. `Obyektləri seçin` sorğusunda kanadı və qövsü əhatə edəcək pəncərəni sürüşdürərək çəkin.
5. {{key:Enter}} basın.

Tarixçə yazır: `"DOOR-900" bloku 2 obyektdən yaradıldı və onlar bir istinadla əvəz olundu.` {{ui:Bloklar}} panelində DOOR-900 yanında `1×` yazılır: bir istinad. Qapıya klikləyin: indi o, bir obyekt kimi, "Blok istinadı" kimi seçilir.

:::tip
Obyektləri əvvəlcədən seçib sonra `B` yaza bilərsiniz. CadCraft hələ də ad və baza nöqtəsini soruşur, sonra seçiminizi istifadə edir.
:::

## Bloku daxil edin

1. `I` yazın və {{key:Enter}} basın, ya da {{ui:Bloklar}} panelində DOOR-900 yanında {{ui:Daxil et}} üzərinə klikləyin.
2. `Blokun adını və ya [Fayl (F)/Kitabxana (L)] <DOOR-900>` sorğusunda {{key:Enter}} basın. (Panelin {{ui:Daxil et}} düyməsi adı sizin üçün əlavə edir.)
3. Qapı xaçı izləyir. Menteşənin olmalı olduğu yerə klikləyin.

İkinci qapı görünür.

## Daxil edin: fırladılmış və ya miqyaslanmış

1. `I` yazın və {{key:Enter}} basın, sonra adı qəbul etmək üçün yenə {{key:Enter}} basın.
2. `Daxil etmə nöqtəsini göstərin [Miqyas (S)/Fırlat (R)]` sorğusunda `R` yazın və {{key:Enter}} basın.
3. `90` yazın və {{key:Enter}} basın. Önizləmə fırlanır.
4. Yerləşdirmək üçün klikləyin.

Miqyas əmsalını təyin etmək üçün əvəzinə `S` yazın; o, hər iki istiqamətə tətbiq olunur. Miqyas və fırlanma növbəti daxiletmə üçün yadda qalır. Qapını güzgü əksi etmək üçün onu daxil edin və istinad üzərində {{cmd:MIRROR}} istifadə edin.

## Yerləşdirilmiş bloku dəyişin

Blok istinadını seçin. Sağ paneldə onun {{ui:X}}, {{ui:Y}}, {{ui:Miqyas X}}, {{ui:Miqyas Y}} və {{ui:Fırlanma}} dəyərlərini dəyişə bilərsiniz. Mənfi {{ui:Miqyas X}} onu çevirir.

## Bloku yenidən təyin edin

Bütün qapıları birdən dəyişmək üçün eyni adla blok yaradın:

1. Qapının yeni versiyasını çəkin.
2. `B` yazın və {{key:Enter}} basın, sonra `DOOR-900` yazın.
3. `"DOOR-900" bloku artıq var. Yenidən təyin edilsin?` sorğusunda `Y` yazın və {{key:Enter}} basın.
4. Əvvəlki kimi baza nöqtəsini verin və yeni obyektləri seçin.

DOOR-900-a bütün istinadlar indi yeni versiyanı göstərir.

Və ya blokun özünü redaktə edin: {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Bloku redaktə et}} ({{cmd:BEDIT}}) onu təkbaşına açır, {{ui:Bloku saxla}} isə onu geri qaytarır. Bax: [Blok atributları](topic:attributes#change-a-block-the-block-editor).

## Blokları sayın və cədvəl ixrac edin

{{cmd:COUNT}} yazın (ya da {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları say}}), sonra:

- bir qapıya klikləyin: bu fəzada hər qapı seçilir, tarixçə burada və bütün çertyojda neçə olduğunu yazır;
- və ya {{key:Enter}} basın: tarixçə hər bloku sayı ilə, ən çoxu birinci olmaqla sadalayır;
- və ya `E` yazın, sonra saylar üçün CSV üçün `C` (modeldə, vərəqlərdə, ümumi) və ya hər istinad üçün bir sətir — qatı, yerini, fırlanmasını və bütün atribut dəyərlərini göstərən `A`. Bu, elektron cədvəldə aça biləcəyiniz cədvəldir.

Adsız bloklar (ölçülər, cədvəllər) və digər blokların içindəki istinadlar sayılmır. Düstur kimi başlayan xanalar (`=`, `+`, `-`, `@`) elektron cədvəldə mətn kimi görünsün deyə əvvəlinə `'` alır.

## Partlat və təmizlə

- {{cmd:EXPLODE}} (`X`) seçilmiş blok istinadını ayrı obyektlərə çevirir. Tərif qalır.
- {{cmd:PURGE}} (`PU`) heç nə istifadə etməyən blok təriflərini silir. Tarixçə neçə ədəd sildiyini yazır.

## Blok adları

Ad 255 simvola qədər ola bilər və boşluq ehtiva edə bilər, lakin ulduz işarəsi ilə başlaya bilməz və `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` və ya geri dırnaq işarəsi ehtiva edə bilməz. DXF R12 kimi saxlayanda adlar böyük hərflə yazılır, hərflər, rəqəmlər, `$`, `_` və `-`-dən fərqli simvollar `_` olur və adlar 31 simvola qədər kəsilir; tarixçə neçə dəyişdiyini yazır. `DOOR-900` kimi böyük hərflərlə, rəqəmlərlə və defislərlə qısa adlar dəyişmədən qalır. Saxlanmış DWG adları yazdığınız kimi, böyük və kiçik hərflərlə saxlanılır; yalnız DWG-nin icazə vermədiyi simvollar dəyişir (`|` `$0$` olur, digərləri `_` olur).

## Bloku və ya obyektləri öz fayllarına yazın

`W` ({{cmd:WBLOCK}}) yazın və **Obyektlər**, **Blok** və ya **Bütün çertyoj** seçin. Nəticə yalnız istifadə etdiyi qatları, üslubları və blokları ehtiva edən yeni DWG və ya DXF olur, baza nöqtəniz başlanğıc kimi. Obyektlər üçün onları saxlaya, bloka çevirə və ya bu çertyojdan silə bilərsiniz.

## Ümumi səhvlər

- **Blok nişanlayıcı xaçdan uzağa düşdü.** Baza nöqtəsi obyektlərin üzərində deyildi. Bloku baza nöqtəsi künc və ya menteşədə olmaqla yenidən yaradın.
- **"No objects selected; nothing made."** Heç bir obyekt seçilməyib; heç nə yaradılmadı. Seçim etməmişdən əvvəl {{key:Enter}} basmısınız.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Bu çertyojda hələ blok yoxdur. Başqa çertyojdan blok gətirmək üçün `F` yazın, kitabxana üçün `L`. Bax: [Fayldan və ya kitabxanadan daxil etmə](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Seçimdən görünüş pəncərəsi çərçivələrini çıxarın.
