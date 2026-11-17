---
title: Ölçü ölçülərini, onluq işarələrini və miqyası təyin edin
summary: Yeni ölçülər üçün mətn hündürlüyünü, ox ölçüsünü, onluq işarələri və ümumi miqyası seçin, mövcud ölçüləri dəyişin və CadCraft-da ölçü üslublarının necə işlədiyini öyrənin.
keywords: ölçü üslubu, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, ümumi miqyas, onluq işarələr, ox ölçüsü, şərh miqyası, dimtextunit, mətndəki vahidlər, mm, cm, m, km, millimetr, metr, dimlfac, dimpost
from: 8ec82a07
---

## Nə öyrənəcəksiniz

Ölçü mətni və oxları nə qədər böyükdür, 1:50 və ya 1:100 miqyasında çap olunan çertyoj üçün necə təyin etmək və artıq yaratdığınız ölçüləri necə dəyişmək.

## Ölçü ölçüləri necə işləyir

Hər ölçünün öz ölçü dəsti var: mətn hündürlüyü, ox ölçüsü, onluq işarələr, mətnin ətrafındakı boşluq, uzatma xətlərinin ölçü xəttindən nə qədər kənara çıxdığı və obyektdən nə qədər başladığı. Standart dəyərlər ümumi ISO üslubuna yaxındır:

| Parametr | Standart | Komanda |
|---|---|---|
| Mətn hündürlüyü | 2.5 | {{cmd:DIMTXT}} |
| Ox ölçüsü | 2.5 | {{cmd:DIMASZ}} |
| Onluq işarələr | 2 (sondakı sıfırlar atılır) | {{cmd:DIMDEC}} |
| Mətnin ətrafındakı boşluq | 0.625 | {{cmd:DIMGAP}} |
| Ölçü xəttindən kənara uzatma | 1.25 | {{cmd:DIMEXE}} |
| Obyektdən məsafə | 0.625 | {{cmd:DIMEXO}} |
| Ümumi miqyas | 1 | {{cmd:DIMSCALE}} |

Hər ölçü **ümumi miqyasa** vurulur. Ölçüləri kağızda istədiyiniz kimi təyin edin (2.5 mm mətn), ümumi miqyası çap miqyasına təyin edin (1:50 üçün 50). Onda mətn 2.5 × 50 = 125 çertyoj vahidi hündürlükdə olur və 2.5 mm çap olunur.

:::note
Adlı ölçü üslubları DIMSTYLE ilə idarə olunur: aşağıdakı bölməyə baxın. Hər ölçü həmçinin yaradıldığı parametrləri saxlayır, ona görə {{ui:Xassələr}}-də tək bir ölçünü yenə də ayrıca dəyişə bilərsiniz.
:::

## Yeni ölçülər üçün ölçüləri təyin edin

Aşağıdakı hər iki üsul yalnız bundan sonra yaratdığınız ölçüləri dəyişir.

### Cari parametrlər panelində

1. Heç nə seçilməməsi üçün {{key:Esc}} basın. {{ui:Model}} sekmesində sağ panel {{ui:Cari parametrlər}} yazır.
2. Panelin aşağısına, {{ui:Yeni ölçülər}} bölməsinə sürüşdürün, qat, rəng, vahidlər və {{ui:Qat 0}} sətirlərindən keçərək (kiçik ekranda o, aşağı kənarın altından başlayır). {{ui:Ümumi miqyas}} sahəsinə klikləyin, `50` yazın və {{key:Enter}} basın.
3. Başqa dəyərlər istəyirsinizsə, {{ui:Mətn hündürlüyü}}, {{ui:Ox ölçüsü}} və {{ui:Onluq işarələr}} eyni qayda ilə təyin edin.

Status sətri hər birini təsdiq edir, məsələn "Yeni ölçülər üçün ümumi miqyas: 50".

### Komanda sətrində

1. `DIMSCALE` yazın və {{key:Enter}} basın.
2. `Enter new value for DIMSCALE <1>` sorğusunda `50` yazın və {{key:Enter}} basın.

Tarixçə təsdiq edir: "DIMSCALE = 50. Yeni ölçülər onu istifadə edir; mövcudları dəyişmək üçün onları seçin." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} və {{cmd:DIMEXO}} eyni qaydada işləyir. Cari dəyəri saxlamaq üçün sorğuda {{key:Enter}} basın.

### Ölçülərdə fut və düym

Yeni ölçülər çertyojun uzunluq formatını istifadə edir: onu {{ui:Cari parametrlər}} daxilində {{ui:Uzunluq formatı}} və ya {{cmd:UNITS}} ilə təyin edin (bax: [Fut və düym](topic:units-papers-scales#feet-and-inches-and-fractions)), növbəti ölçü isə `12'-6 1/2"` göstərir. {{cmd:DIMLUNIT}} yalnız ölçülərin formatını təyin edir (2 onluq, 3 mühəndis, 4 memarlıq, 5 kəsr). Artıq yaratdığınız ölçü üçün onu seçin və {{ui:Xassələr}} daxilində {{ui:Format}} seçin; kəsr formatında onun {{ui:Kəsr}} qutusu ikinin qüvvətini alır (4 = 1/16).

## Ölçülər mm, cm, m və ya km ilə

Ölçü çertyoj vahidlərində ölçür. Həmin uzunluğu əvəzinə millimetr, santimetr, metr və ya kilometrlə yaza bilər, vahid ədəddən sonra gəlir: 1250 mm-lik divar `1250 mm`, `125 cm`, `1.25 m` və ya `0.00125 km` kimi oxunur.

1. Əvvəlcə {{ui:Cari parametrlər}} daxilində çertyojun {{ui:Vahidlər}} seçin (bax: [Vahidlər, kağız ölçüləri və miqyaslar](topic:units-papers-scales#drawing-units)), ki, CadCraft bir çertyoj vahidinin nə olduğunu bilsin. Vahidsiz çertyoj millimetr kimi oxunur və {{cmd:DIMTEXTUNIT}} bunu bildirir.
2. Yeni ölçülər üçün: heç nə seçilməməsi üçün {{key:Esc}} basın və {{ui:Yeni ölçülər}} altında {{ui:Mətndəki vahidlər}} seçin: {{ui:Çertyoj vahidləri}}, `mm`, `cm`, `m` və ya `km`.
3. Artıq yaratdığınız ölçülər üçün: onları seçin və {{ui:Xassələr}} › {{ui:Əsas vahidlər}} daxilində {{ui:Mətndəki vahidlər}} seçin.

Və ya {{cmd:DIMTEXTUNIT}} (`DTU`) yazın və `D`, `MM`, `CM`, `M` və ya `KM` ilə cavab verin: ölçülər seçilibsə onları dəyişir (bir geri qaytarma addımı), heç nə seçilməyibsə yeni ölçüləri təyin edir.

{{ui:Onluq işarələr}} ({{cmd:DIMDEC}}) yenə də neçə onluq işarənin göstəriləcəyini təyin edir: metrlə və 3 onluq işarə ilə 1234 mm `1.234 m` kimi oxunur. Mətn onluq ədəd kimi yazılır. Vərəqdə ölçülər vərəqin kağız vahidində (millimetr və ya düym) ölçülür.

Saxlanmış DWG və ya DXF seçimi ölçünün ölçmə miqyası (DIMLFAC) və şəkilçi (DIMPOST, ` m`) kimi saxlayır, ona görə başqa proqramlar eyni mətni göstərir. Sonra çertyojun {{ui:Vahidlər}}-ini dəyişsəniz, mm, cm, m və ya km ilə yazılmış ölçülər yenidən uyğunlaşdırılır, ona görə düzgün uzunluğu deməyə davam edirlər. {{ui:Əl ilə təyin edilir (miqyas və ya şəkilçi)}} o deməkdir ki, ölçünün {{ui:Ölçmə miqyası}} və ya şəkilçisi başqa üsulla təyin olunub; onları əvəz etmək üçün vahid seçin.

## Artıq yaratdığınız ölçüləri dəyişin

1. Bir ölçüyə klikləyin. Sağ panelin başlığı {{ui:Ölçü}} yazır.
2. Parametrlər bölmələrə bölünür; sonrakılara çatmaq üçün panelin aşağısına sürüşdürün:
   - {{ui:Ümumi}}: {{ui:Ölçü üslubu}}
   - {{ui:Həndəsə}}: {{ui:Növ}} və {{ui:Ölçü}} (yalnız oxunur)
   - {{ui:Mətn}}: {{ui:Mətni əvəz et}} və {{ui:Mətn hündürlüyü}}
   - {{ui:Xətlər və oxlar}}: {{ui:Ox ölçüsü}}
   - {{ui:Yerləşmə}}: {{ui:Ümumi miqyas}}
   - {{ui:Əsas vahidlər}}: {{ui:Onluq işarələr}}
3. Yeni qiymət yazın və {{key:Enter}} basın.

Ölçü dərhal yenidən çəkilir. Bucaq ölçüləri üçün {{ui:Onluq işarələr (°)}} bucağın onluq işarələrini təyin edir.

:::note
Bir neçə ölçü seçildikdə panel onların ortaq sətirlərini göstərir və aralarında fərqli olan dəyər {{ui:Müxtəlifdir}} oxunur. Yazdığınız dəyər seçilmiş hər ölçünü bir addımda dəyişir, ona görə bir {{key:Mod+Z}} hamısını geri qaytarır.
:::

## Açılmış çertyojlardan olan ölçülər

Açılmış DWG və ya DXF-dən olan ölçü digər proqramın çəkdiyi kimi dəqiq göstərilir. Onun paneli yazır: "Onu yaradan proqramın çəkdiyi kimi göstərilir. Dəyişdirin və CadCraft onu öz üslubunda yenidən çəkir." Hər hansı dəyəri dəyişdirən, tutacağı hərəkət etdirən və ya ölçünü köçürən kimi CadCraft onu öz ox başları və şrifti ilə yenidən çəkir, fayldan oxuduğu ölçülərdən istifadə edərək.

Bəzi ölçülər yalnız çəkildiyi kimi oxuna bilir, redaktə oluna bilən ölçü kimi yox; onda panel "Çəkilmə mənbəyi" və blok adını göstərir, "Bu fayl haqqında" qutusu isə onları sayır.

## Ümumi səhvlər

- **DIMSCALE-i dəyişmək ekranda heç nəyi dəyişmədi.** Parametr yeni ölçülər üçündür. Mövcud olanları seçin və paneldə {{ui:Ümumi miqyas}} dəyişdirin.
- **Onluq işarələr təyin olunandan az rəqəm göstərir.** Sondakı sıfırlar atılır: 2 onluq işarə `1250` və `1250.5` göstərir, `1250.00` yox.
- **Mətn görünüş pəncərəsində kağızda düzgün hündürlükdədir, lakin model çapında səhvdir.** Ümumi miqyas çap etdiyiniz miqyasla uyğun olmalıdır. Kağıza sığdırmaqla çap qeyri-standart miqyas verir; çap dialoqunda standart miqyas seçin.
- **Mətndə mm və ya m kimi vahidlər.** {{ui:Mətndəki vahidlər}} seçin (bax: [Ölçülər mm, cm, m və ya km ilə](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Ədəddən sonra başqa söz üçün onu əvəzetmədə yazın: `<> TYP.`.

## Adlı ölçü üslubları

{{ui:Ölçü üslubu meneceri}}ni açmaq üçün `DIMSTYLE` (`D`) yazın. O, çertyojun üslublarını, hər birini neçə ölçünün istifadə etdiyini və hansının cari olduğunu sadalayır. **Standard** həmişə var.

- {{ui:Cari təyin et}}: yeni ölçülər həmin üslubun parametrlərini istifadə edir və onun adını daşıyır.
- {{ui:Yeni…}}: seçdiyiniz birinin surəti kimi başlayan yeni üslub.
- {{ui:Dəyişdir…}}: {{ui:Xassələr}} ölçü bölməsindəki eyni sahələr (xətlər və oxlar, mətn, yerləşmə, vahidlər, alternativ vahidlər, tolerantlıqlar). {{ui:OK}} basın və üslub **dəyişir və ondan istifadə edən hər ölçü onunla birlikdə dəyişir**, parametr-parametr. Yalnız bir ölçüdə dəyişdirdiyiniz parametr üslub həmin parametri dəyişmədikcə olduğu kimi qalır.
- {{ui:Adını dəyiş…}} və {{ui:Sil}}: **Standard** adı dəyişdirilə və ya silinə bilməz, cari üslub və ya ölçülərin istifadə etdiyi üslub da belə.
- {{ui:Müqayisə et…}}: iki üslub arasında nə fərqləndiyi.
- {{ui:Seçilənlərə tətbiq et}}: əvvəlcə ölçüləri seçin; onlar üslubun parametrlərini və adını alır.

`-DIMSTYLE` komanda sətrində eyni işi görür: `Restore`, `Save` (cari parametrlər, o cümlədən {{cmd:DIMTXT}} və digərləri ilə yazdıqlarınız, bir ad altında), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Üslublar DWG və ya DXF-də (onun ölçü üslubu cədvəlində) saxlanılır və açdığınız fayllardan oxunur. *Cari* üslub saxlanılmır: çertyoj **Standard** cari ilə açılır. Başqa üslub cari olduqda Standard öz parametrlərini saxlayır.

## Ölçü mətnini və uzatma xətlərini dəyişin

{{cmd:DIMEDIT}} (`DED`) seçdiyiniz ölçülər üzərində işləyir: **Home** mətni üslubun qoyduğu yerə qaytarır, **New** başqa mətn yazır (`<>` ölçü dəyərini bildirir), **Rotate** mətni fırladır, **Oblique** xətti və paralel ölçülərin uzatma xətlərini yazdığınız bucağa əyir ({{key:Enter}} basın, heç nə üçün). {{cmd:DIMTEDIT}} mətni ölçü xəttinin **Left**, **Right** və ya **Center** tərəfinə köçürür, ya da onu fırladır (**Angle**), ya da **Home**-a göndərir. Mətn həmişə ölçü xəttinin üstündə yerləşir: onu sərbəst yerə sürükləmək olmur.
