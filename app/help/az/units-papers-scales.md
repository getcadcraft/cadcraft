---
title: Vahidlər, kağız ölçüləri və miqyaslar
summary: CadCraft-da çertyoj vahidlərinin nə demək olduğu, vərəqlər və çaplar üçün kağız ölçüləri, bütün standart miqyaslar və mətn və ölçü ölçülərinin çap miqyası ilə necə əlaqəli olduğu.
keywords: vahidlər, millimetr, düym, fut, fut və düym, memarlıq, mühəndislik, kəsr, kəsrlər, lunits, uzunluq formatı, dəqiqlik, metr, kağız ölçüsü, a3, a1, arch d, ansi, tabloid, letter, miqyas, 1:100, 1/4 düym, memarlıq miqyası, mühəndislik miqyası, insunits
from: 7dc9b62e
---

## Çertyoj vahidləri

Obyektləri tam ölçüdə, çertyoj vahidlərində çəkirsiniz. Bir vahidin nəyi bildirdiyi çertyojun **Vahidlər** parametrindədir:

1. {{ui:Model}} sekmesində heç nə seçilməyənə qədər {{key:Esc}} basın.
2. {{ui:Cari parametrlər}}-də {{ui:Vahidlər}} seçin: {{ui:Vahidsiz}}, {{ui:Millimetr}}, {{ui:Santimetr}}, {{ui:Metr}}, {{ui:Düym}} və ya {{ui:Fut}}.

Ölçülər, çertyojun vahidindən asılı olmayaraq, uzunluqlarını millimetr, santimetr, metr və ya kilometr ilə yaza bilər: bax [Ölçüləri mm, sm, m və ya km-də](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Vahidləri dəyişmək heç nəyi böyütmür. Vərəqlərdə və çaplarda miqyasların necə oxunduğunu və hansı miqyasların təklif olunduğunu dəyişir. DWG və ya DXF-dən açılmış çertyoj faylda saxlanılmış vahidləri saxlayır; sol panelin {{ui:Çertyoj}} bölməsi onları göstərir.

{{ui:Vahidsiz}} çertyoj kağızın vahidində qəbul olunur: ISO kağızlarda millimetr, ABŞ kağızlarında düym.

## Fut və düym, və kəsrlər

Uzunluqların **necə yazılıb daxil edildiyi** ayrı parametrdir: uzunluq formatı. Həndəsəni dəyişmir, yalnız ədədlərin necə göründüyünü və nəyi yaza biləcəyinizi dəyişir.

1. {{ui:Model}} sekmesində heç nə seçilməyənə qədər {{key:Esc}} basın.
2. {{ui:Cari parametrlər}}-də {{ui:Uzunluq formatı}} seçin: {{ui:Onluq}} (`150.5`), {{ui:Memarlıq}} (`12'-6 1/2"`), {{ui:Mühəndislik}} (`12'-6.5"`), {{ui:Kəsr}} (`150 1/2`) və ya {{ui:Elmi}} (`1.505E+02`).
3. {{ui:Dəqiqlik}} seçin: onluq rəqəmlər, ya da ən kiçik kəsr (memarlıq üçün adətən 1/16).

Və ya {{cmd:UNITS}} (`UN`) yazın və onun iki sualını cavablandırın.

{{ui:Memarlıq}} və ya {{ui:Mühəndislik}} ilə, AutoCAD-də olduğu kimi, bir çertyoj vahidi bir düymdür: {{ui:Vahidlər}}-i də {{ui:Düym}} təyin edin. Sonra uzunluq soruşulan hər yerdə və {{ui:Xassələr}} qutularında fut və düymlə yaza bilərsiniz:

| Yazırsınız | Bildirir |
|---|---|
| `12'6"` və ya `12'-6"` | 12 fut 6 düym (150) |
| `12'6-1/2"` | 12 fut 6½ düym. Kəsrdən əvvəl tire qoyun: {{key:Space}} komanda sətrində {{key:Enter}}-dir. |
| `12'` | 12 fut |
| `6"` və ya `6` | 6 düym: sadə ədəd düymdür |
| `1/2`, `6-1/2` | kəsrlər istənilən formatda işləyir |

Nöqtələr eyni uzunluqları qəbul edir: `@12'6",0` və ya `@10'<90`. Bucaqlar dərəcə ilə qalır.

Format tarixçədə ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: sahələr kvadrat düym və kvadrat futla), {{ui:Xassələr}}-də, status sətrindəki koordinatlarda və **yeni ölçülərdə** görünür. Vərəqlər öz kağız vahidlərini (millimetr və ya düym) onluq kimi saxlayır.

:::note
Uzunluq formatı DWG və DXF fayllarında saxlanılır və hər ölçü öz formatını saxlayır: saxlanılmış çertyoj açıldıqda, buraxdığınız kimi açılır.
:::

## Kağız ölçüləri

Vərəqlər və model çapları bu ölçüləri istifadə edir, hər iki istiqamətdə:

| Kağız | Ölçü | Vərəqdəki vahid |
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

Yeni vərəqlər metrik və vahidsiz çertyojlar üçün ISO A3-dən, düym və ya futla çertyojlar üçün Tabloiddan başlayır. Model çapları eyni qaydada ISO A4 və ya Letter-dən başlayır, sonra sonuncu seçiminizi yadda saxlayır. Açılmış fayllardan olan vərəqlər öz ölçüsünü saxlayır, bu siyahıda olmadıqda "Fərdi" kimi göstərilir.

## Miqyaslar

`1:n` miqyası vərəqdə bir vahidin modeldə eyni vahidin n-i qədər olduğunu bildirir, belə ki, 1:100 bir metr binanı kağızda 10 millimetr göstərir. CadCraft bunu çertyoj vahidlərindən və kağızın vahidindən hesablayır.

**Metrik miqyaslar**, hər çertyoj üçün təklif olunur: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Memarlıq miqyasları**, vahidlər düym və ya fut olduqda təklif olunur: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mühəndislik miqyasları**, vahidlər düym və ya fut olduqda təklif olunur: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Öz miqyaslarınız.** 1:75 kimi öz miqyasınızı və ya 2 kağız : 300 çertyoj sayt miqyasını əlavə etmək üçün `SCALELISTEDIT` (və ya `SCALELIST`) yazın. `Əlavə et` ad soruşur, sonra kağız vahidləri və çertyoj vahidləri (1:75 kimi ad öz ədədlərini təklif edir; götürmək üçün {{key:Enter}} basın). `Redaktə et`, `Sil`, `Siyahı` və `Sıfırla` eyni siyahı üzərində işləyir; `Sıfırla` standart siyahıya qaytarır. Sizin miqyaslarınız standartlardan sonra, Xassələrin görünüş pəncərəsi miqyas siyahısında və {{ui:PDF-ə çap et}} dialoqunda görünür; həmin miqyasda görünüş pəncərəsi öz adı ilə oxunur və onlar DWG və DXF 2000-də çertyojun miqyas siyahısı kimi saxlanılır. Başqa proqramdan açılan çertyoj öz siyahısını gətirir; standartlardan birinə uyğun gələn miqyaslar iki dəfə göstərilmir.

{{ui:Bütün modeli göstər}} və ya {{ui:Modeldə pəncərə seçin…}} ilə görünüş pəncərəsi yönləndirildikdə CadCraft sığan ən böyük standart miqyası seçir. {{ui:Bütün modeli sığdır}} əvəzinə dəqiq miqyas təyin edir, bu da sadə nisbət kimi oxunur.

## Kağızda və modeldə ölçülər

Mətn və ölçü ölçüləri çəkdiyiniz məkanın vahidlərindədir.

| Kağızda istədiyiniz | Vərəqdə çəkilmiş | Modeldə 1:50 ilə çəkilmiş (mm çertyoj) | Modeldə 1/4" = 1'-0" ilə çəkilmiş (düym çertyoj) |
|---|---|---|---|
| 2,5 mm mətn | 2.5 | 125 | — |
| 3/32" mətn | 0.09375 | — | 4.5 |

Ölçülər üçün ölçüləri kağız ölçüsü kimi saxlayın və ümumi miqyası ({{cmd:DIMSCALE}}) çap miqyasına təyin edin: 1:50 üçün 50, 1/4" = 1'-0" üçün 48. Bax [Ölçü ölçülərini təyin edin](topic:dimension-settings).

## Miqyasa görə şərh

Modeli tam ölçüdə çəkin və yuxarıdakı hesabları CadCraft-a görə aparmasına icazə verin.

1. Kağızda ölçülərini saxlamalı olan mətni və ya ölçüləri seçin. Xassələrdə {{ui:Anotativ}} qutusunu işarələyin. {{ui:Kağızda ölçü}} sonra məsələn `2.5 mm at 1:50` oxuyur.
2. {{cmd:ANNOSCALE}} yazın və çertyojun çap ediləcəyi miqyası, məsələn `1:100`.

Hər anotativ mətn və ölçü yeni miqyasda eyni ölçüdə çap olunacaq şəkildə dəyişdirilir: 2,5 mm mətn 1:50-də millimetr çertyojda 125 hündürlükdə, 1:100-də 250 hündürlükdə olur. Paraqrafın eni onunla birlikdə dəyişir; ölçünün mətni, oxları və boşluqları birlikdə dəyişir (onun ümumi miqyası). Bu bir geri alma addımıdır və anotativ olmayan obyektlər heç vaxt dəyişdirilmir.

Parametr DWG və DXF-də saxlanılır: digər proqramlar anotativ bayrağı oxuyur, CadCraft isə hər obyektin üçün ölçülənmiş miqyası da saxlayır.

Ofisiniz kağızdakı hündürlükləri Default Policies əlavəsində təyin edirsə (Parametrlər › Qlobal › Default Policies › Kağızda şərh ölçüləri), {{cmd:ANNOSCALE}} həmin miqyasda notlar üçün ofisin hündürlüyünü yeni mətnin başladığı hündürlüyə də təyin edir. Bax [Default Policies](topic:default-policies).

### Bir obyekt bir neçə miqyasda

Vərəqdə eyni plan 1:100-də, bir hissəsi isə 1:50-də çox vaxt göstərilir. Qeydlərə və ölçülərə hər iki miqyası verin və hər görünüş pəncərəsi onları kağız ölçüsündə göstərir:

1. Anotativ mətni və ölçüləri seçin və `OBJECTSCALE` yazın.
2. `Əlavə et` seçin və miqyası yazın, məsələn `1:50`. (`Cari miqyas` çertyojun şərh miqyasını əlavə edir; `Siyahı` hər obyektin saxladığı miqyasları göstərir; `Sil` birini çıxarır.)

Siyahısında obyektin miqyası olan görünüş pəncərəsi onu həmin miqyas üçün ölçüdə göstərir: 2,5 mm mətn 1:100 görünüş pəncərəsində 250 hündürlükdə, 1:50-də 125 hündürlükdə çəkilir, ekranda və çapda. Obyekt öz yerində qalır; yalnız ölçüsü fərqlidir. Siyahıda olmayan miqyasda görünüş pəncərəsində obyekt sahib olduğu ölçüdə göstərilir, siz `ANNOALLVISIBLE` yazıb `OFF` seçənə qədər: onda orada buraxılır. {{cmd:ANNOSCALE}} yeni miqyası siyahıya əlavə edən obyektləri dəyişdirir, digərlərini olduğu kimi qoyur.

Siyahılar DWG və DXF-də CadCraft-ın öz məlumatları kimi saxlanılır. Digər proqram hər obyekti anotativ, ölçülənmiş olduğu bir miqyasda görür. ANNOALLVISIBLE düyməsi faylda saxlanılmır.

## Xətt qalınlığı və xətt tipləri

Qatın və ya obyektin **xətt qalınlığı** (0,05-dən 2,11 mm-ə qədər) və **xətt tipi** (kəsilmiş, gizli, mərkəz, fantom, nöqtəli…) ola bilər. Onları sağ paneldə təyin edin: heç nə seçilməyəndə {{ui:Cari parametrlər}} altında {{ui:Xətt tipi}} və {{ui:Xətt qalınlığı}} yeni obyektlərin alacağı şeydir ({{ui:Qata görə}} onların qatını izləyir), {{ui:Cari qat …}} altındakı iki sətir isə cari qatın öz parametridir. Obyektlər seçiləndə eyni iki sətir və {{ui:Xətt tipinin miqyası}} həmin obyektləri dəyişir. Komandalar {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) və {{cmd:LTSCALE}} (`LTS`)-dir.

Xətt tipləri ekranda və çapda göstərilir. Onların kəsikləri çertyoj vahidlərindədir: metrik çertyoj ISO ölçülərini (DASHED: 12,7 mm kəsik), düym çertyoj isə düym ölçülərini (0.5") istifadə edir. Kəsiklər çox kiçik və ya çox böyük görünürsə, çertyojun {{ui:Xətt tipinin miqyası}} (LTSCALE) dəyişin: hər kəsik və boşluq onunla vurulur; obyektin öz miqyası onu yenidən vurur. Heç görünməyəcək qədər incə naxış düz xətt kimi çəkilir.

Xətt qalınlıqları çapda, kağızda mm ilə, miqyasdan asılı olmayaraq çap olunur. {{ui:Standart}} qalınlığı olan xətlər {{ui:PDF-ə çap et}} dialoqunda seçilmiş qələm enini istifadə edir (0,13-dən 0,70 mm-ə; başlanğıcda 0,25 mm); qalınlığı 0 olan xətt ən nazik xətt kimi çap olunur. Ekranda hər xətt, status sətrində {{ui:LWT}} düyməsinə basana qədər (və ya {{cmd:LWDISPLAY}} yazana qədər) bir piksel enindədir: sonra 0,25 mm-dən böyük xətt qalınlığı modeldə daha geniş çəkilir (0,5 mm = 2 piksel), vərəqdə isə kağızdakı həqiqi enində. Seçim bu brauzerdə saxlanılır.

## Ofis standartı

Ofis kağız mətn hündürlüklərini, qatları, ştamp sahələrini və şablonları bir yazıda — ofis standartında — saxlaya bilər. CadCraft onu bu ardıcıllıqla oxuyur: çertyojun öz yazısı ({{cmd:OFFICESTANDARD}} › `Import` ilə təyin olunur, faylda saxlanılır), komandanızın paylaşdığı standart, sonra Default Policies. Anotativ mətn və ölçülər şərh miqyasında kağız hündürlüklərini ondan alır. Boş standart heç nəyi dəyişmir. {{cmd:OFFICESTANDARD}} › `Layers` çertyojda olmayan ofis qatlarını əlavə edir.
