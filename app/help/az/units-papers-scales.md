---
title: Vahidlər, kağız ölçüləri və miqyaslar
summary: CadCraft-da çertyoj vahidlərinin nə demək olduğu, vərəqlər və çaplar üçün kağız ölçüləri, bütün standart miqyaslar və mətn və ölçü ölçülərinin çap miqyası ilə necə əlaqəli olduğu.
keywords: vahidlər, millimetr, düym, fut, fut və düym, memarlıq, mühəndislik, kəsr, kəsrlər, lunits, uzunluq formatı, dəqiqlik, metr, kağız ölçüsü, a3, a1, arch d, ansi, tabloid, letter, miqyas, 1:100, 1/4 düym, memarlıq miqyası, mühəndislik miqyası, insunits
from: 8346236a
---

## Çertyoj vahidləri

Tam ölçüdə, çertyoj vahidlərində çəkirsiniz. Bir vahidin nəyi bildirməsi çertyojun **Vahidlər** parametridir:

1. {{ui:Model}} nişanında {{key:Esc}} basın ki heç nə seçilməsin.
2. {{ui:Cari parametrlər}} bölməsində {{ui:Vahidlər}} seçin: {{ui:Vahidsiz}}, {{ui:Millimetr}}, {{ui:Santimetr}}, {{ui:Metr}}, {{ui:Düym}} və ya {{ui:Fut}}.

Ölçülər uzunluqlarını çertyoj vahidindən asılı olmayaraq millimetr, santimetr, metr və ya kilometrlə yaza bilər: bax [Ölçülər mm, cm, m və ya km-də](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Vahidləri dəyişmək heç nəyin ölçüsünü dəyişmir. O, vərəqlərdə və çaplarda miqyasların necə oxunduğunu və hansı miqyasların təklif olunduğunu dəyişir. DWG və ya DXF-dən açılmış çertyoj faylda saxlanılmış vahidləri saxlayır; sol panelin {{ui:Çertyoj}} bölməsi onları göstərir.

{{ui:Vahidsiz}} çertyoj kağızın vahidində qəbul olunur: ISO kağızda millimetr, ABŞ kağızında düym.

## Fut və düym, və kəsrlər

Uzunluqlar necə **yazılır və daxil edilir** ayrıca parametrdir: uzunluq formatı. Heç bir həndəsəni dəyişmir, yalnız rəqəmlərin necə göründüyünü və nəyi yaza biləcəyinizi dəyişir.

1. {{ui:Model}} nişanında {{key:Esc}} basın ki heç nə seçilməsin.
2. {{ui:Cari parametrlər}} bölməsində {{ui:Uzunluq formatı}} seçin: {{ui:Onluq}} (`150.5`), {{ui:Memarlıq}} (`12'-6 1/2"`), {{ui:Mühəndislik}} (`12'-6.5"`), {{ui:Kəsr}} (`150 1/2`) və ya {{ui:Elmi}} (`1.505E+02`).
3. {{ui:Dəqiqlik}} seçin: onluq yerlər, ya da ən kiçik kəsr (1/16 memarlıq üçün adi seçimdir).

Ya da {{cmd:UNITS}} (`UN`) yazın və iki sualına cavab verin.

{{ui:Memarlıq}} və ya {{ui:Mühəndislik}} ilə bir çertyoj vahidi AutoCAD-də olduğu kimi bir düymdür: {{ui:Vahidlər}} dəyərini də {{ui:Düym}} təyin edin. Sonra uzunluq soruşulan hər yerdə və {{ui:Xassələr}} qutularında fut və düymlə uzunluq yaza bilərsiniz:

| Yazırsınız | Deməkdir |
|---|---|
| `12'6"` və ya `12'-6"` | 12 fut 6 düym (150) |
| `12'6-1/2"` | 12 fut 6½ düym. Kəsrdən əvvəl defis istifadə edin: {{key:Space}} komanda sətrində {{key:Enter}}-dir. |
| `12'` | 12 fut |
| `6"` və ya `6` | 6 düym: çılpaq ədəd düymdür |
| `1/2`, `6-1/2` | kəsrlər istənilən formatda işləyir |

Nöqtələr eyni uzunluqları qəbul edir: `@12'6",0` və ya `@10'<90`. Bucaqlar dərəcədə qalır.

Format tarixçədə ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: sahələr kvadrat düym və kvadrat futla), {{ui:Xassələr}}də, status sətrindəki koordinatlarda və **yeni ölçülərdə** görünür. Vərəqlər kağız vahidlərini (millimetr və ya düym) onluq kimi saxlayır.

:::note
Uzunluq formatı DWG və DXF fayllarında saxlanılır və hər ölçü öz formatını saxlayır: saxlanılmış çertyoj açıldıqda olduğu kimi açılır.
:::

## Kağız ölçüləri

Vərəqlər və model çapları bu ölçüləri istifadə edir, hər iki istiqamətdə:

| Kağız | Ölçü | Vərəqdə vahid |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetr |
| ISO A3 | 420 × 297 mm | millimetr |
| ISO A2 | 594 × 420 mm | millimetr |
| ISO A1 | 841 × 594 mm | millimetr |
| ISO A0 | 1189 × 841 mm | millimetr |
| Letter | 11 × 8.5 in | düym |
| Legal | 14 × 8.5 in | düym |
| Tabloid / ANSI B | 17 × 11 in | düym |
| ANSI C | 22 × 17 in | düym |
| ANSI D | 34 × 22 in | düym |
| ARCH C | 24 × 18 in | düym |
| ARCH D | 36 × 24 in | düym |
| ARCH E | 48 × 36 in | düym |

Yeni vərəqlər metrik və vahidsiz çertyojlar üçün ISO A3-də, düym və ya futlu çertyojlar üçün Tabloid-də başlayır. Model çapları eyni qaydada ISO A4 və ya Letter-də başlayır, sonra sonuncu seçiminizi yadda saxlayır. Açılmış fayllardan olan vərəqlər öz ölçüsünü saxlayır, bu siyahıda olmadığı halda "Xüsusi" kimi göstərilir.

## Miqyaslar

`1:n` miqyası bir vahid kağızda modeldə n eyni vahidi göstərir, buna görə 1:100 bir metr binanı kağızda 10 millimetr göstərir. CadCraft bunu çertyoj vahidlərindən və kağızın vahidindən hesablayır.

**Metrik miqyaslar**, hər çertyoj üçün təklif olunur: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Memarlıq miqyasları**, vahidlər düym və ya fut olduqda təklif olunur: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mühəndislik miqyasları**, vahidlər düym və ya fut olduqda təklif olunur: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Öz miqyaslarınız.** `SCALELISTEDIT` (və ya `SCALELIST`) yazın ki, öz miqyasınızı əlavə edəsiniz, məsələn 1:75 və ya sahə miqyası 2 kağız : 300 çertyoj. `Add` ad soruşur, sonra kağız vahidləri və çertyoj vahidləri (`1:75` kimi ad öz rəqəmlərini təklif edir; onları götürmək üçün {{key:Enter}} basın). `Edit`, `Delete`, `List` və `Reset` eyni siyahıda işləyir; `Reset` standart siyahıya qayıdır. Sizin miqyaslarınız Xassələrdə görünüş miqyası siyahısında və {{ui:PDF-ə çap et}} dialoqunda standartlardan sonra görünür, həmin miqyasda görünüş pəncərəsi adı ilə oxunur, və çertyojun miqyas siyahısı kimi DWG və DXF 2000-də saxlanılır. Başqa proqramdan açılan çertyoj öz siyahısını gətirir; standart birinə uyğun gələn miqyaslar iki dəfə göstərilmir.

Görünüş pəncərəsi {{ui:Bütün modeli göstər}} və ya {{ui:Modeldə pəncərə seçin…}} ilə yönəldiləndə CadCraft sığan ən böyük standart miqyası seçir. {{ui:Bütün modeli sığdır}} əvəzinə dəqiq miqyas təyin edir, adi nisbət kimi oxunur.

## Kağızda və modeldə ölçülər

Mətn və ölçü ölçüləri çəkdiyiniz fəzanın vahidlərindədir.

| Kağızda istədiyiniz | Vərəqdə çəkilmiş | 1:50 miqyasında modeldə (mm çertyoj) | 1/4" = 1'-0" miqyasında modeldə (düym çertyoj) |
|---|---|---|---|
| 2,5 mm mətn | 2.5 | 125 | — |
| 3/32" mətn | 0.09375 | — | 4.5 |

Ölçülər üçün ölçüləri kağız ölçüsü kimi saxlayın və ümumi miqyası ({{cmd:DIMSCALE}}) çap miqyasına təyin edin: 1:50 üçün 50, 1/4" = 1'-0" üçün 48. Bax: [Ölçü ölçülərini təyin edin](topic:dimension-settings).

## Miqyasa görə annotasiya

Modeli tam ölçüdə çəkin və CadCraft yuxarıdakı hesabı sizin üçün aparsın.

1. Kağızda öz ölçüsünü saxlamalı olan mətn və ya ölçüləri seçin. Xassələrdə {{ui:Anotativ}} işarələyin. {{ui:Kağızda ölçü}} sonra məsələn `2.5 mm at 1:50` yazır.
2. {{cmd:ANNOSCALE}} yazın və çertyojun çap ediləcəyi miqyası yazın, məsələn `1:100`.

Hər annotativ mətn və ölçü yeni miqyasda eyni ölçüdə çap olunacaq şəkildə dəyişdirilir: 2.5 mm mətn metrik çertyojda 1:50-də 125 hündürlüyündə, 1:100-də 250 hündürlüyündə olur. Abzasın eni onunla birlikdə dəyişir; ölçünün mətni, oxları və boşluqları birlikdə dəyişir (onun ümumi miqyası). Bu bir geri alma addımıdır və annotativ olmayan obyektlər heç vaxt dəyişmir.

Parametr DWG və DXF-də saxlanılır: digər proqramlar annotativ bayrağını oxuyur, CadCraft isə hər obyektin üçün ölçüləndiyi miqyası da saxlayır.

Ofisiniz Default Policies əlavəsində kağızda ölçüləri təyin edirsə (Parametrlər › Qlobal › Default Policies › Kağızda annotasiya ölçüləri), {{cmd:ANNOSCALE}} həmin miqyasda yeni mətnin başladığı hündürlüyü də ofisin qeydləri üçün təyin edir. Bax: [Default Policies](topic:default-policies).

### Bir obyekt bir neçə miqyasda

Vərəq çox vaxt eyni planı 1:100-də və bir hissəsini 1:50-də göstərir. Qeydlərə və ölçülərə hər iki miqyası verin və hər görünüş pəncərəsi onları kağız ölçüsündə göstərir:

1. Annotativ mətn və ölçüləri seçin və `OBJECTSCALE` yazın.
2. `Add` seçin və miqyası yazın, məsələn `1:50`. (`Current scale` çertyojun annotasiya miqyasını əlavə edir; `List` hər obyektin nəyi saxladığını göstərir; `Delete` birini çıxarır.)

Miqyası obyektin siyahısında olan görünüş pəncərəsi onu həmin miqyasın ölçüsündə göstərir: 2.5 mm mətn 1:100 görünüş pəncərəsində 250 hündürlüyündə, 1:50-də 125 hündürlüyündə çəkilir, ekranda və çapda. Obyekt yerində qalır; yalnız ölçüsü fərqlənir. Siyahıda olmayan miqyasda görünüş pəncərəsində obyekt sahib olduğu ölçüdə göstərilir, `ANNOALLVISIBLE` yazıb `OFF` seçənə qədər: sonra orada buraxılır. {{cmd:ANNOSCALE}} yeni miqyası siyahıda olan obyektləri dəyişir və digərlərini olduğu kimi qoyur.

Siyahılar DWG və DXF-də CadCraft-ın öz məlumatı kimi saxlanılır. Başqa proqram hər obyekti annotativ olaraq görür, təyin olunduğu bir miqyasda. ANNOALLVISIBLE açarı faylda saxlanılmır.

## Xətt qalınlığı və xətt tipləri

Qat və ya obyekt **xətt qalınlığı** (0,05-dən 2,11 mm-ə qədər) və **xətt tipi** (kəsilmiş, gizli, mərkəz, fantom, nöqtəli…) ola bilər. Onları sağ paneldə təyin edin: heç nə seçilməmiş halda {{ui:Cari parametrlər}} altında {{ui:Xətt tipi}} və {{ui:Xətt qalınlığı}} yeni obyektlərin alacağı dəyərlərdir ({{ui:Qata görə}} onların qatını izləmək üçün), və {{ui:Qat …}} altındakı iki isə cari qatın öz dəyərləridir. Obyektlər seçildikdə eyni iki sətir və {{ui:Xətt tipinin miqyası}} həmin obyektləri dəyişir. Əmrlər {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) və {{cmd:LTSCALE}} (`LTS`) dır.

Xətt tipləri ekranda və çaplarda göstərilir. Onların zolaqları çertyoj vahidlərindədir: metrik çertyojda ISO ölçüləri (DASHED: 12,7 mm zolaq), düym çertyojda düym ölçüləri (0.5"). Zolaqlar çox kiçik və ya böyük görünürsə, çertyojun {{ui:Xətt tipinin miqyası}} (LTSCALE) dəyişin: hər zolaq və boşluq ona vurulur; obyektin öz miqyası onu yenidən vurur. Heç görünməyəcək qədər incə naxış düz xətt kimi çəkilir.

Xətt qalınlıqları çaplarda kağızda millimetrlə göstərilir, miqyasdan asılı olmayaraq. {{ui:Standart}} xətt qalınlığı olan xətlər {{ui:PDF-ə çap et}} dialoqunda seçilmiş qələm eni istifadə edir (0,13-dən 0,70 mm-ə; başlanğıcda 0,25 mm); xətt qalınlığı 0 olan ən incə xətt kimi çap olunur. Ekranda hər xətt status sətrində {{ui:LWT}} düyməsinə basana qədər (ya da {{cmd:LWDISPLAY}} yazana qədər) bir piksel enindədir: sonra 0,25 mm-dən böyük xətt qalınlığı modeldə daha enli çəkilir (0,5 mm = 2 piksel), vərəqdə isə kağızdakı həqiqi enində. Seçim bu brauzerdə yadda qalır.
