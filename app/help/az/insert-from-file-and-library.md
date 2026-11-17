---
title: Fayldan və ya kitabxanadan daxil etmə
summary: Başqa DWG və ya DXF-dən blok və ya bütöv çertyoj gətirin, Kitabxanadan, fayldan və ya başqa kitabxanadan elementlər yerləşdirin, müəllif məlumatları və yeniləmələrlə birlikdə.
keywords: daxil et, fayl, kitabxana, librarycraft, element, avadanlıq, başqa çertyojdan blok, wblock, dizayn mərkəzi, müəllif məlumatları, lisenziya, yeniləmə, lent, item.json
from: 316188d2
---

## Başqa çertyojdan blok daxil edin

1. `I` yazın və {{key:Enter}} basın, ya da {{ui:Bloklar}} qrupunda {{ui:Daxil et}} düyməsinə klikləyin.
2. `Enter block name or [File/Library]` mətnində `F` yazın və {{key:Enter}} basın.
3. Bu kompüterdəki DWG və ya DXF-i seçin. O oxunur, açılmır və heç nə yüklənmir.
4. Bu mənbədən daxil et dialoqunda siyahıdan blok seçin (tapmaq üçün {{ui:Blokları süzgəcdən keçirin}} sahəsinə yazın), ya da Bütün çertyoj seçimini saxlayın. {{ui:Daxil et}} klikləyin.
5. Yerləşdirmək üçün klikləyin və istədiyi atributları doldurun.

Bütün çertyoj adını faylın adından götürən bir blok kimi daxil olur. Seçdiyiniz blokun içindəki bloklar da gəlir. Onların istifadə etdiyi qatlar bu çertyoja əlavə olunur.

Əgər digər çertyoj fərqli vahidlərdədirsə (məsələn, düym və millimetr), CadCraft istinadı uyğunlaşdırır və bunu tarixdə deyir.

### Ad artıq istifadə olunubsa

Bu çertyojda eyni adlı blok varsa, CadCraft soruşur:

- {{ui:Mövcudu saxla}} bu çertyojun həmin adlı blokundan istifadə edir.
- {{ui:Adını dəyişdir}} yeni olanı `Name (2)` adı ilə gətirir.

Bütün daxiletmə bir addımdır: {{key:Mod+Z}} istinadı və kopyalanmış təyinləri yenidən silir.

## Kitabxananı açın

{{ui:Bloklar}} panelindəki {{ui:Kitabxana…}} düyməsinə, ya da Bloklar qrupundakı {{ui:Kitabxana}} düyməsinə klikləyin, ya da `LIB` yazın. `INSERT` sorğusunda `L` də onu açır.

Kitabxanada dörd mənbə var, sekmələr kimi:

- {{ui:Kitabxana}}: CadCraft kitabxanası. Ada, istehsalçıya və modelə görə axtarın, kateqoriyaya görə süzgəcdən keçirin.
- {{ui:Fayllar…}}: istənilən kitabxanadan element faylı (`item.json`), ya da elementlər hazırlamaq üçün çertyoj, cədvəl və ya 3D model: hər blokun element olduğu DWG və ya DXF, ad və ölçü sütunlu CSV, ya da glTF və ya OBJ model. Heç nə yüklənmir.
- {{ui:Standart}}: nəşr olunmuş cədvəllərdən burada hazırlanmış polad profilləri (kəsik, fasad və ya 3D element kimi) və bolt, qayka və yastıq kimi standart detallar. Bax: [Polad profillərini və standart detalları yerləşdirin](topic:steel-and-standard-parts).
- {{ui:Digər lentlər}}: {{ui:Kitabxana}} kimi cavab verən digər kitabxanalar. Ünvanını bir dəfə əlavə edin; bu brauzer onu yadda saxlayır.

Hər kart önizləmə, ad, istehsalçı və model, lisenziya və versiya göstərir. Geri çəkilmiş element səbəbi ilə birlikdə {{ui:Geri çəkilib}} işarəsi ilə göstərilir; onu yerləşdirməzdən əvvəl CadCraft soruşur.

## Element yerləşdirin

1. Kartda {{ui:Yerləşdir}} klikləyin.
2. Yerə klikləyin. Onu çevirmək üçün əvvəlcə `R`, miqyaslamaq üçün `S` yazın.
3. `Enter Item number (CC-ITEM)` sorğusunda növbəti boş nömrə üçün {{key:Enter}} basın, ya da öz nömrənizi yazın.

Element `LIB_<ad>_v<versiya>` adlı blok olur və bu çertyojun vahidləri ilə çəkilir. Çertyojun vahidləri yoxdursa, element millimetrdə daxil olur və tarixdə bu deyilir; əvvəlcə sağ paneldə {{ui:Vahidlər}} təyin edin.

Məlumatları görünməz atributlar kimi gedir: elementin id-si və versiyası, lisenziya və müəllif qeydi, istehsalçı, model, kateqoriya və ölçülər. Bax: [Blok atributları](topic:attributes).

## Elementlər sizin dilinizdə

Element öz adını və təsvirini başqa dillərdə də saxlaya bilər. CadCraft hansı dilə təyin olunubsa (Parametrlər › Ümumi › Dil), kart və yerləşdirilmiş blokun element adı onları istifadə edir. Blokun özü elementin öz adından yaranmış adı saxlayır, buna görə çertyojda hansı dildə yerləşdirilməsindən asılı olmayaraq hər element üçün bir blok olur.

## Yeniləmələri yoxlayın

1. Kitabxananı açın.
2. {{ui:Yeniləmələri yoxla}} klikləyin.

Çertyojdakı hər kitabxana elementi element nömrələri ilə göstərilir: ya yenidir, ya daha yeni versiyası var (və nə dəyişib), ya da geri çəkilib. Sətirdə {{ui:Yenilə}} klikləyin, ya da {{ui:Hamısını yenilə}}. Hər istinad yeni versiyanın blokuna keçir və element nömrəsini, miqdarını, yerini, bucağını və qatını saxlayır. {{key:Mod+Z}} yeniləməni geri qaytarır.

## Istifadə etdiyinizi qeyd edin

{{ui:Kitabxana kreditləri}} klikləyin. Hər element öz müəllif sətri və lisenziyası ilə siyahıdadır.

- {{ui:Müəllifliyi kopyala}} bir elementin sətrini kopyalayır; {{ui:Hamısını kopyala}} hər sətri kopyalayır.
- {{ui:CSV yüklə}} element nömrələri, istehsalçılar, modellər, lisenziyalar və müəllif sətirləri ilə siyahını saxlayır. Hər cədvəl proqramında açılır.

CC BY kimi lisenziyalar işi istifadə etdiyiniz yerdə müəllifi göstərməyi tələb edir. Sətirləri çertyojda, spesifikasiyada və ya layihə qeydlərində yazın.

## Simvollar və aktivlər

Kitabxanada üç element növü var: Simvollar (çertyoj konvensiyaları, 2D), Növlər (elementin nədən ibarət olduğu) və Aktivlər (fiziki obyektlər). {{ui:Kitabxana}} sekmesində {{ui:Element növü}} siyahısı Simvolları və aktivləri birlikdə, yalnız Simvolları və ya yalnız Aktivləri göstərir. Növlər BimCraft layihəsinin qurulduğu şeylərdir, buna görə CadCraft onları siyahıda göstərmir.

## Kitabxanaya daxil olun

{{ui:Kitabxanaya daxil olun}} klikləyin. Sayt üzərində kiçik pəncərə açılır; orada daxil olduqdan sonra CadCraft komandanızın elementlərini göstərə bilir və yerləşdirdiklərinizi qeyd edə bilir, beləliklə istifadə etdiyiniz element dəyişəndə xəbər alırsınız. Giriş bu brauzer sekmesi üçün qüvvədədir. İstədiyiniz vaxt hesabınızın təhlükəsizlik səhifəsindən ləğv edin.

## Ümumi səhvlər

- **"IFC tiplərindən elementlər hazırlamaq BimCraft-dadır."** IFC və ailə faylları BimCraft proqramında oxunur. Elementi orada və ya Kitabxanada hazırlayın, sonra onun `item.json` faylını burada istifadə edin.
- **"Kitabxanaya çatmaq mümkün olmadı."** Siz oflayn olursunuz, ya da kitabxana işləmir. Çertyojda artıq olan elementlərə təsir etmir.
- **Element çox böyük və ya çox kiçikdir.** Çertyojun vahidləri yanlış və ya təyin olunmayıb. Geri qaytarın, {{ui:Vahidlər}} təyin edin və elementi yenidən yerləşdirin.
