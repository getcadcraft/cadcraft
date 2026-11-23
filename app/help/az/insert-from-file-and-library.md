---
title: Fayldan və ya kitabxanadan daxil edin
summary: Başqa DWG və ya DXF-dən blok və ya bütöv çertyoj gətirin, Kitabxanadan, fayldan və ya başqa kitabxanadan elementlər yerləşdirin, onların kreditləri və yeniləmələri ilə birlikdə.
keywords: daxil et, fayl, kitabxana, librarycraft, element, avadanlıq, başqa çertyojdan blok, wblock, dizayn mərkəzi, kreditlər, müəllifliyi, lisenziya, yeniləmə, lent, item.json
from: f6e4e452
---

## Başqa çertyojdan blok daxil edin

1. `I` yazın və {{key:Enter}} basın, ya da Bloklar qrupunda {{ui:Daxil et}} klikləyin.
2. Pəncərənin altındakı komanda sətri `Blokun adını və ya [Fayl/Kitabxana] daxil edin` soruşur. Orada `F` yazın və {{key:Enter}} basın.
3. Bu kompüterdə DWG və ya DXF seçin. O oxunur, açılmır və heç nə yüklənmir.
4. {{ui:Fayldan daxil et}} dialoqunda siyahıdan blok seçin ({{ui:Blokları süzgəcdən keçirin}} sahəsinə yazaraq tapın), və ya {{ui:Bütün çertyoj}}-u saxlayın. {{ui:Daxil et}} klikləyin.
5. Yerini klikləyin və soruşulan atributları doldurun.

{{ui:Bloklar}} panelindən də başlaya bilərsiniz: onun {{ui:Blokları süzgəcdən keçirin}} qutusuna `F` yazıb {{key:Enter}} basın, və ya heç bir blokun uyğun gəlmədiyi nəsə yazıb {{ui:Fayldan…}} klikləyin. `L` və {{ui:Kitabxana…}} kitabxananı eyni şəkildə açır. 0.10.1 versiyasından əvvəl {{ui:Blokları süzgəcdən keçirin}} qutusuna yazılan hərf yalnız bu çertyojun bloklarında axtarırdı və "Süzgəcə uyğun blok yoxdur." deyirdi.

Öz blokların çertyojunu əlinizdə saxlamaq üçün {{ui:Bloklar}} panelində {{ui:Kitabxanalar}} altında {{ui:Çertyoj əlavə et}} klikləyin və DWG və ya DXF seçin. Blokları şəkilləri ilə sadalanır; birini yerləşdirmək üçün klikləyin.

Bütöv çertyoj bir blok kimi, faylın adı ilə daxil olur. Seçdiyiniz blokun içindəki bloklar da gəlir. Onların istifadə etdiyi qatlar bu çertyojа əlavə olunur.

Digər çertyoj başqa vahidlərdədirsə (məsələn düym və millimetr), CadCraft istinadı uyğunlaşdırmaq üçün miqyaslayır və bunu tarixçədə deyir.

### Ad artıq istifadə olunubsa

Bu çertyojda eyni adlı blok varsa, CadCraft soruşur:

- {{ui:Mövcudu saxla}} bu çertyojdakı həmin adlı bloku istifadə edir.
- {{ui:Adını dəyişdir}} yeni bloku `Ad (2)` adı ilə gətirir.

Bütün daxiletmə bir addımdır: {{key:Mod+Z}} istinadı və kopyalanmış tərifləri yenidən silir.

## Kitabxananı açın

{{ui:Bloklar}} panelində {{ui:Kitabxana…}} klikləyin, və ya Bloklar qrupunda {{ui:Kitabxana}} klikləyin, və ya `LIB` yazın. `INSERT` sorğusunda `L` də onu açır.

Kitabxananın dörd mənbəyi var, sekmələr kimi:

- {{ui:Kitabxana}}: CadCraft kitabxanası. Ada, istehsalçıya və ya modelə görə axtarın və kateqoriyaya görə süzün.
- {{ui:Fayllar…}}: istənilən kitabxanadan element faylı (`item.json`), ya da elementlər yaratmaq üçün çertyoj, cədvəl və ya 3D model: DWG və ya DXF (hər blok bir element olur), ad və ölçü sütunları olan CSV, ya da glTF və ya OBJ model. Heç nə yüklənmir.
- {{ui:Standart}}: nəşr olunmuş cədvəllərdən burada yaradılmış polad kəsikləri (kəsik, fasad və ya 3D element kimi) və bolt, qayka və yastıq kimi standart hissələr. Bax [Polad kəsikləri və standart hissələri yerləşdirin](topic:steel-and-standard-parts).
- {{ui:Digər lentlər}}: Kitabxana kimi eyni cavab verən digər kitabxanalar. Ünvanlarını bir dəfə əlavə edin; bu brauzer onu yadda saxlayır.

Hər kart önizləmə, ad, istehsalçı və model, lisenziya və versiyanı göstərir. Geri çəkilmiş element səbəbi ilə {{ui:Geri çəkilib}} kimi işarələnir; CadCraft birini yerləşdirməzdən əvvəl soruşur.

## Element yerləşdirin

1. Kartda {{ui:Yerləşdir}} klikləyin.
2. Elementin yerini klikləyin. Onu fırlatmaq üçün əvvəlcə `R`, miqyaslamaq üçün `S` yazın.
3. `Element nömrəsini daxil edin (CC-ITEM)` sorğusunda növbəti boş nömrə üçün {{key:Enter}} basın, və ya öz nömrənizi yazın.

Element `LIB_<ad>_v<versiya>` adlı blok olur və bu çertyojun vahidlərində çəkilir. Çertyojun vahidi yoxdursa, element millimetrlə daxil olur və tarixçə bunu deyir; əvvəlcə sağ paneldə {{ui:Vahidlər}}-i təyin edin.

Onun məlumatları görünməz atributlar kimi gəlir: elementin id və versiyası, lisenziya və müəllifliyi, istehsalçı, model, kateqoriya və ölçüləri. Bax [Blok atributları](topic:attributes).

## Elementlər sizin dilinizdə

Element adını və təsvirini başqa dillərdə də daşıya bilər. CadCraft-ın qurulduğu dildə olduqda (Parametrlər › Ümumi › Dil), kart və yerləşdirilmiş blokun element adı onları istifadə edir. Blokun özü elementin öz adından yaranmış ad saxlayır, beləliklə hansı dildə yerləşdirilməsindən asılı olmayaraq çertyojda hər element üçün bir blok olur.

## Yeniləmələri yoxlayın

1. Kitabxananı açın.
2. {{ui:Yeniləmələri yoxla}} klikləyin.

Çertyojdakı hər kitabxana elementi öz element nömrələri ilə sadalanır və onun yenilənib-yenilənmədiyi, daha yeni versiyası olub-olmadığı (və nəyin dəyişdiyi) və ya geri çəkilib-çəkilmədiyi göstərilir. Sətirdə {{ui:Yenilə}} klikləyin, və ya {{ui:Hamısını yenilə}}. Hər istinad yeni versiyanın blokuna keçir və öz element nömrəsini, miqdarını, yerini, bucağını və qatını saxlayır. {{key:Mod+Z}} yeniləməni geri alır.

## İstifadə etdiyinizi kreditləşdirin

{{ui:Kitabxana kreditləri}} klikləyin. Hər element öz müəllifliyi sətri və lisenziyası ilə sadalanır.

- {{ui:Müəllifliyi kopyala}} bir elementin sətrini kopyalayır; {{ui:Hamısını kopyala}} hər sətri kopyalayır.
- {{ui:CSV yüklə}} element nömrələri, istehsalçıları, modelləri, lisenziyaları və müəllifliyi ilə siyahını saxlayır. Hər hansı cədvəl proqramında açılır.

CC BY kimi lisenziyalar işi istifadə etdiyiniz yerdə müəllifi kreditləşdirməyi tələb edir. Sətirləri çertyojda, spesifikasiyada və ya layihə qeydlərində qoyun.

## Simvollar və aktivlər

Kitabxanada üç növ element var: Simvollar (çertyoj konvensiyaları, 2D), Növlər (elementin nədən ibarət olduğu) və Aktivlər (fiziki obyektlər). {{ui:Kitabxana}} sekmesində {{ui:Element növü}} siyahısı Simvolları və aktivləri birlikdə, yalnız Simvolları və ya yalnız Aktivləri göstərir. Növlər BimCraft layihəsinin qurulduğu şeylərdir, buna görə CadCraft onları siyahılamır.

## Kitabxanaya daxil olun

{{ui:Kitabxanaya daxil olun}} klikləyin. Sayt üzərində kiçik pəncərə açılır; saytda daxil olduqdan sonra CadCraft komandanızın elementlərini göstərə və yerləşdirdiklərinizi qeydə ala bilər, beləliklə istifadə etdiyiniz element dəyişəndə bilirsiniz. Daxil olma bu brauzer sekmesi üçün qüvvədədir. İstənilən vaxt hesabınızın təhlükəsizlik səhifəsindən ləğv edə bilərsiniz.

## Obyektlərimi Mənim obyektlərimdə saxlayın

{{ui:Mənim obyektlərim}} kitabxanada yalnız sizin gördüyünüz şəxsi siyahıdır. Ictimai kitabxanada, axtarışda deyil və komandanıza göstərilmir; kitabxanaya daxil olduğunuz hər kompüterdə hesabınızı izləyir.

1. Kitabxana panelində {{ui:Fayllar…}} klikləyin və bir faylı oxuyun.
2. Yenidən istədiyiniz elementdə {{ui:Mənim obyektlərimdə saxla}} klikləyin.
3. Sonra {{ui:Mənim obyektlərim}} klikləyin və {{ui:Yerləşdir}} klikləyin. Hər kitabxana elementi kimi yerləşir, və {{ui:Yeniləmələri yoxla}} onu da əhatə edir.
4. {{ui:Mənim obyektlərimdən sil}} onu siyahıdan çıxarır. Çertyojlarda artıq yerləşdirilmiş surətlər qalır.

Kitabxanaya daxil olmalısınız. Faylı oxumaq heç nə yükləmir; elementi saxlamaq yalnız o bir elementi hesabınıza göndərir.

:::note
Mənim obyektlərim sınaqdadır və hesabınız üçün hələ açıq olmaya bilər. "Mənim obyektlərim bu hesab üçün hələ açılmayıb" deyirsə, öz fayllarınızdan {{ui:Fayllar…}} ilə elementləri yenə də yerləşdirə bilərsiniz.
:::

## Ümumi səhvlər

- **"IFC növlərindən elementlər yaratmaq BimCraft-dadır."** IFC və ailə faylları BimCraft tətbiqində oxunur. Elementi orada və ya Kitabxanada yaradın, sonra onun `item.json`-unu burada istifadə edin.
- **"Kitabxanaya çatmaq mümkün olmadı."** Oflayn olmusunuz, ya da kitabxana işləmir. Çertyojda artıq olan elementlərə təsir etmir.
- **Element çox böyük və ya çox kiçikdir.** Çertyojun vahidləri səhvdir və ya təyin olunmayıb. Geri alın, {{ui:Vahidlər}}-i təyin edin və yenidən yerləşdirin.
