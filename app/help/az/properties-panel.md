---
title: Xassələr paneli
summary: Seçilmiş obyektlərin hər şeyinə baxın və dəyişin, bir çoxunu birdən: Z ilə koordinatlar, ölçülər, mətn, ölçü parametrləri, şəffaflıq və daha çox. Sahələr ifadələri və vahidləri olan uzunluqları qəbul edir.
keywords: cəmlər, ümumi uzunluq, ümumi sahə, cəm, seçim uzunluğu, xassələr, xassələr palitrası, ctrl+1, pr, ch, mo, ddmodify, müxtəlif, sürətli seçim, pickadd, koordinatlar, z, hündürlük, qalınlıq, şəffaflıq, material, hiperkeçid, ifadə, quickcalc, təpə, ölçü üslubu, tolerantlıq, onluq işarələr
from: 10d6a829
---

## Nə öyrənəcəksiniz

Xassələr panelini necə açmaq, bir obyekti və ya çoxunu bir addımda dəyişmək, dəqiq koordinatları (Z ilə) yazmaq, hər rəqəm sahəsində ifadələr və vahidlərdən istifadə etmək, və hər obyekt növünün nə göstərdiyi.

## Açın

Panel sağda yerləşir. Onu ön plana gətirmək üçün:

- {{key:Mod+1}} basın, və ya {{cmd:PROPERTIES}} (və ya `PR`, `CH`, `MO`) yazın.
- Obyektə ikiklik klikləyin (mətn və çoxliderlər öz mətn redaktorunu açır).

Panel digər panellər kimi hərəkət edən bir paneldir: tutacağını sürükləyərək solda, sağda və ya aşağıda yerləşdirin, və ya çertyojun üzərinə atıb üzən edin (bax [Panelləri təşkil edin və ikinci monitordan istifadə edin](common:arrange-panels)).

### Qatlayın

Panelin yuxarı sağındakı sancaq düyməsi **avtomatik gizlətmə**ni açır: panel sağ kənarda zolağa qatlanır və çertyoj daha çox yer alır. Zolağa işarə edin (və ya {{key:Mod+1}} basın) və o, çertyojun üzərində açılır; uzaqlaşın və yenidən qatlanır. Sancağı yenidən klikləyin ki, açıq qalsın. {{cmd:PROPERTIESCLOSE}} də onu qatlayır.

## Bölmələr

Xassələr qatlana bilən bölmələrə qruplaşdırılıb: **Ümumi**, **Həndəsə**, **Mətn**, **Xətlər və oxlar**, **Yerləşmə**, **Əsas vahidlər**, **Əlavə vahidlər**, **Tolerantlıqlar**, **Naxış**, **Digər**, və bloklar üçün **Atributlar** və **Kitabxana elementi**. Bölmənin adını klikləyərək qatlayın və ya açın; CadCraft hansını qatladığınızı xatırlayır.

Adlarla dəyərlər arasındakı nazik xətti sürükləyin ki, adlar enli və ya dar olsun. Onu ikiklik klikləyin ki, geri qayıtsın. Klaviatura ilə onu fokuslayın və ox düymələrini istifadə edin.

## Dəyər dəyişin

1. Bir xətt klikləyin. Başlıq "Xətt" yazır.
2. {{ui:Uzunluq}}-a klikləyin. Redaktə zamanı sahə yuvarlaqlaşdırılmış dəyər yox, tam dəyəri göstərir.
3. `2500` yazın və {{key:Enter}} basın. Xətt indi 2500 uzunluqdadır, başlanğıc nöqtəsini və bucağını saxlayaraq.

{{key:Enter}} və ya başqa yerə klikləmək dəyəri tətbiq edir; {{key:Esc}} köhnə dəyəri geri qoyur. Hər dəyişiklik bir geri qaytarma addımıdır.

### İfadələr və vahidlər

Hər rəqəm sahəsi sadə rəqəmdən çoxunu qəbul edir:

| Yazırsınız | Alırsınız |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (düym, fut və düymlə çertyojda) |
| `900mm`, `3.5m`, `2ft` | Çertyojun vahidlərinə çevrilir |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (bucaq sahələri) |
| `0.5r`, `100g` | Radian və qrad, dərəcə kimi |

Vahidi olan uzunluq çertyojun vahidlərinin olmasını tələb edir: əvvəlcə {{ui:Yeni obyektlər}} altında {{ui:Vahidlər}}-i təyin edin (heç nə seçilməyib). Səhv daxiletmə panelin altında qeyd ilə rədd olunur və heç nə dəyişmir; heç vaxt 0 kimi saxlanılmır. Funksiyalar: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; bucaqlar dərəcə ilədir.

## Bir çox obyekti eyni vaxtda dəyişin

1. Bir neçə obyekt seçin, məsələn 8 xətt və 4 ölçü.
2. Başlıq "12 obyekt" deyir, və yuxarıdakı siyahı **Hamısı (12)**, **Xətt (8)** və **Ölçü (4)** təklif edir.
3. **Hamısı** hər obyektin nəyə malik olduğunu göstərir (qat, rəng, xətt tipi…). Ölçü parametrlərini görmək üçün **Ölçü (4)** seçin.
4. Dəyər dəyişin, məsələn {{ui:Onluq işarələr}}-i `1`.

Bütün dörd ölçü bir geri qaytarma addımında dəyişir. **Müxtəlif** yazan sahə obyektlərin fərqli olduğunu bildirir; dəyər yazmaq hamısına təyin edir. Kilidli qatdakı obyektlər olduğu kimi qalır, və qeyd neçəsinin olduğunu deyir.

## Seçimin cəmləri

Bir neçə obyekt seçildikdə yuxarıdakı {{ui:Cəmlər}} bölməsi deyir:

- **Obyektlər**: hər növdən neçə, məsələn "8 xətt, 2 polixətt, 1 dairə".
- **Ümumi uzunluq**: xətlər, qövslər və polixətlər toplanır (splaynlər də sayılır), və neçə obyekt olduğu.
- **Ümumi sahə**: bağlı olanlar toplanır: dairələr, tam ellipslər, bağlı polixətlər və ştrixlamalar (ştrixlamanın deşikləri çıxılır).

Onlar çertyojun uzunluq formatındadır (istifadə edirsə fut və düym; sahələr onda kvadrat düym və kvadrat fut).

Status sətri obyekt seçilən zaman eyni uzunluğu və sahəni göstərir; {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Seçimin uzunluğu və sahəsi}} › {{ui:Gizlidir}} bunu söndürür. Bir obyekt üçün {{ui:Həndəsə}} onun öz uzunluğunu və sahəsini əvvəlki kimi göstərir.

## Koordinatlar

Hər nöqtə **X**, **Y** və **Z** göstərir: xəttin başlanğıcı və sonu, mərkəzlər, daxiletmə nöqtələri, mətn yerləri, cari polixətt təpəsi. Xətlər həmçinin **Delta X**, **Delta Y** və **Delta Z** göstərir (yalnız oxumaq üçün). Polixəttlərin və ştrixlamaların **Hündürlük**ü var (bütün obyekt üçün bir Z).

Nöqtənin adının yanındakı nişangah düyməsi onu çertyojda seçməyə imkan verir: klikləyin, sonra yeni yeri klikləyin (tutmalar işləyir). Dəyərlər dünya koordinatlarıdır.

## Ümumi

| Sahə | Nədir |
|---|---|
| {{ui:Qat}}, {{ui:Rəng}}, {{ui:Xətt tipi}}, {{ui:Xətt tipinin miqyası}}, {{ui:Xətt qalınlığı}} | Qatlar panelində olduğu kimi; {{ui:Qata görə}} qatı izləyir |
| {{ui:Şəffaflıq}} | Qata görə, bloka görə, və ya 0-dan 90%-ə |
| {{ui:Qalınlıq}} | Xətlər, dairələr, qövslər, polixətlər, nöqtələr və mətnin Z-də nə qədər uzandığı |
| {{ui:Material}} | Qata görə, bloka görə, Qlobal və ya çertyojun gətirdiyi ad |
| {{ui:Çap üslubu}} | Yalnız oxumaq üçün: çertyojlar rəngə görə çap olunur, vərəqin [çap üslubu cədvəli](topic:plot-pdf#plot-style-tables) vasitəsilə |
| {{ui:Hiperkeçid}} | Obyektlə saxlanılan veb ünvanı |

## Hər növ nə göstərir

| Seçilmiş | Dəyişə bilərsiniz |
|---|---|
| Xətt | Başlanğıc və son X, Y, Z; uzunluq; bucaq |
| Dairə | Mərkəz; radius; diametr; çevrə; sahə (hər biri radiusu təyin edir) |
| Qövs | Mərkəz; radius; başlanğıc və son bucaq; ümumi bucaq; vətər (qövs uzunluğunu və sahəni göstərir) |
| Ellips | Mərkəz; böyük və kiçik radius; radius nisbəti; böyük ox bucağı; başlanğıc və son bucaq |
| Polixətt | Təpə brauzeri (aşağıda); qlobal en; hündürlük; bağlı; bağlı olduqda sahə (mərkəzi ətrafında miqyaslayır) |
| Mətn | Məzmun; üslub; düzləşdirmə; hündürlük; fırlanma; en əmsalı; əyilmə bucağı; müəyyən olunmuş en; sətir aralığı; annotativ; yer |
| Blok istinadı | Daxiletmə nöqtəsi; fırlanma; miqyas X, Y, Z və vahid miqyas; atribut dəyərləri |
| Ştrixlama | Naxış; miqyas; bucaq; başlanğıc; assosiativ; ada aşkarlanması; fon rəngi; hündürlük |
| Ölçü | Aşağıya bax |
| Çoxlider | Mətn; hündürlük; en; mətn tərəfi; ox ucu ölçüsü; yerləşmə məsafəsi; ox ucu nöqtəsi |
| Görünüş pəncərəsi | Miqyas; vərəqdə mərkəz və ölçü; modeldə görünüş mərkəzi; açıq; görünüş kilidli |

### Polixətt təpələri

{{ui:Cari təpə}} göstərir hansı təpəyə aşağıdakı sahələr aiddir. Ox düymələrini istifadə edin, və ya nömrə yazın ki, başqa təpəyə keçin; hədd yoxdur. Hər təpənin X, Y, başlanğıc və son seqment eni və başlanğıcdan başlayan seqmentin bulcu var (0 = düz).

## Ölçülər

Ölçü öz **Ölçü üslubunu**, nəyi ölçdüyünü, nöqtələrini və hər parametrini göstərir:

- **Xətlər və oxlar:** hər uç üçün ox ucu, ox ölçüsü, tik ölçüsü, ölçü və uzatma xətlərinin rəngləri və xətt qalınlıqları, hər iki yarısını və ya hər uzatma xəttini gizlətmə, uzatma xəttinin ofseti və uzadılması.
- **Mətn:** üstünlük (boş buraxın ölçülən dəyər üçün; `<>` öz mətninizin içində onu əvəz edir), üslub, rəng, hündürlük, ofset, şaquli və üfüqi yer, həmişə üfüqi, fırlanma, fon doldurması.
- **Yerləşmə:** ümumi miqyas, baza xətti aralığı, yer azaldıqda nə hərəkət edir, mətnin hərəkəti.
- **Əsas vahidlər:** format, onluq işarələr, yuvarlaqlaşdırma, prefiks, suffiks, ölçmə miqyası, onluq ayırıcı, əvvəl və sonda sıfırları gizlətmə; bucaqlar üçün bucaq formatı və onluq işarələr.
- **Əlavə vahidlər:** açıq və ya bağlı, format, onluq işarələr, vuruq (25.4 düymləri millimetrə çevirir), yuvarlaqlaşdırma, prefiks və suffiks.
- **Tolerantlıqlar:** yox, simmetrik, kənarlaşma, hədlər və ya əsas, yuxarı və aşağı dəyərlərlə, onluq işarələr, hündürlük və yer.

Açılmış ölçüdə bunlardan hər hansı birini dəyişmək digər proqramın onun üçün etdiyi çəkilişi atır, və CadCraft onu yenidən çəkir.

:::note
Üfüqi mətn yeri (birinci və ya ikinci uzatma xəttinin yanında) və xəttin altındakı mətn xətti və paraleli ölçülərdə çəkilir; digər ölçülərdə onlar saxlanılır və yazılır, lakin hələ çəkilmir. Yerləşmə seçimləri saxlanılır və yazılır, lakin hələ çəkilmir: CadCraft mətni öz qaydası ilə yerləşdirir (xəttin üstündə, sığmadıqda kənarda).
:::

## Heç nə seçilməyib

Heç nə seçilmədikdə panel göstərir:

- **Yeni obyektlər:** yeni obyektlərin aldığı qat, rəng, xətt tipi, xətt qalınlığı və mətn hündürlüyü; çertyojun vahidləri və uzunluq formatı; cari qatın xətt tipi və xətt qalınlığı; yeni ölçülər üçün ölçülər. Vərəqdə əvvəlcə vərəqin adı, kağızı və istiqaməti gəlir.
- **Görünüş:** ekranda olanın mərkəzi, hündürlüyü və eni. Görünüşü oraya köçürmək üçün dəyər yazın.
- **Digər:** UCS nişanının açıq və ya bağlı olması, UCS (həmişə Dünya: CadCraft hələ istifadəçi koordinat sistemlərinə malik deyil) və annotasiya miqyası.

## Yuxarıdakı düymələr

| Düymə | Edir |
|---|---|
| Süzgəc | {{cmd:QSELECT}}: növə və xassəyə görə seçin |
| Göstərici | {{cmd:SELECT}}: komanda sətrində obyektləri seçin |
| Artı və ya 1 | Klikin seçimə əlavə edib-etməməsi (artı) və ya əvəz etməsi (1); Parametrlər, {{ui:CadCraft}} ilə eyni parametr |
| Sancaq | Avtomatik gizlətmə, yuxarıda |

## Tez-tez edilən səhvlər

- **Sahəyə yazmaq heç nə etmədi.** Tətbiq etmək üçün {{key:Enter}} basın və ya başqa yerə klikləyin. Qırmızı sahə və qeyd daxiletmənin rədd olunduğunu bildirir.
- **Vahidli uzunluq rədd olunur.** Çertyojun vahidləri yoxdur. Heç nə seçilmədən {{ui:Vahidlər}}-i təyin edin.
- **Yalnız Qat və Rəng görünür.** Bir neçə növ obyekt seçilib və **Hamısı** seçilib. Yuxarıdakı siyahıdan bir növ seçin.
- **Bəzi obyektlər dəyişmədi.** Onlar kilidli qatdadır. Qatlar panelində qatın kilidini açın.
- **Yazılmış hərflər sahəyə düşdü.** Sahənin kursoru olduqda klaviatura orada yazır. {{key:Enter}} və ya {{key:Esc}} basın, sonra komandanı yazın.
