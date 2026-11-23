---
title: Dinamik bloklar
summary: CadCraft DWG-də dinamik bloklarla nə edir: öz real adlarını saxlayır, saxlandıqları vəziyyəti göstərir, görünürlük vəziyyətlərini dəyişir, digər dəyərlərini göstərir və saxlananda dinamik qalır.
keywords: dinamik blok, dinamik bloklar, görünürlük, görünürlük vəziyyəti, çevirmə, uzatma, axtarış, parametrlər, fərdi, blok xassələri, *u blokları, dinamik
from: dea2ee7c
---

## Nə işləyir

Dinamik blokları olan DWG bu qədər işləyən halda açılır:

- **Öz real adları.** Dinamik blok {{ui:Bloklar}} panelində öz adı ilə ("Receptacle", "Sink") sadalanır, `*U` adsız blok kimi yox.
- **Saxlandıqları vəziyyət.** Hər istinad digər proqramın göstərdiyi dəqiq vəziyyəti göstərir: təyin olunduğu görünürlük vəziyyətini, saxlandığı kimi uzanmış və ya çevrilmiş.
- **Görünürlük vəziyyətini dəyişmək.** Bir istinad seçin (və ya eyni bloktan bir neçəsini), {{ui:Xassələr}}-i açın və {{ui:Fərdi}} bölməsində {{ui:Görünürlük}} siyahısından başqa vəziyyət seçin. İstinad həmin vəziyyəti dərhal göstərir, atributları da: vəziyyətin gizlətdikləri yox olur, göstərdikləri öz dəyərləri ilə görünür. İstinad hər dəyəri saxlayır, buna görə heç nə boş qalmır; {{ui:Xassələr}} gizli olanları "gizlidir" kimi işarələyir. {{key:Mod+Z}} köhnə vəziyyəti bir addımda geri qaytarır.
- **Tutacaqlar.** Seçilmiş dinamik blok parametrlərinin olduğu yerdə öz tutacaqlarını göstərir: görünürlük vəziyyəti üçün kiçik üçbucaq (vəziyyətlər siyahısı üçün klikləyin), məsafənin uclarında oxlar, çevirmə üçün ikiqat ox. Hazırda yalnız görünürlük tutacağı işləyir; qalanları bunu status sətrində deyir.
- **Digər dəyərlər, yalnız oxumaq üçün.** {{ui:Görünürlük}} siyahısının altında {{ui:Fərdi}} bloku məsafələri, düzləşdirmə bucaqlarını, çevirmə vəziyyətlərini və nöqtələri çertyojun saxladığı kimi də göstərir.
- **Görünürlük vəziyyətlərini redaktə etmək.** Bloku {{cmd:BEDIT}} ilə açın: redaktor bir vəziyyəti göstərir, çertyojun üstündəki zolaqda adı yazılıb (orada başqasını seçin). {{cmd:BVSTATE}} yazın ki, dəyişəsiniz, əlavə edəsiniz (hamısını gizlətmək, hamısını göstərmək və ya göstərilənləri saxlamaq), adını dəyişəsiniz və ya siləsiniz; {{cmd:BVHIDE}} seçilmiş obyektləri cari göstərilən vəziyyətdə gizlədir; {{cmd:BVSHOW}} gizli olanları solğun göstərir ki, geri gətirmək üçün kliklədiyinizi seçə biləsiniz. Bloku saxlayın: adı dəyişdirilmiş vəziyyətə təyin olunmuş istinadlar onu yeni adı ilə saxlayır, silinmiş vəziyyətə təyin olunanlar birinci vəziyyəti göstərir.
- **Dinamik qalır.** DWG olaraq çertyojun daxil olduğu versiyada saxlananda bloklar seçdiyiniz vəziyyətlə dinamik qalır: digər proqram onları eyni dinamik bloklar kimi açır. Redaktə etdiyiniz görünürlük vəziyyətləri də saxlanılır: yeni adları, əlavə etdiyiniz vəziyyətlər və hər birinin göstərdikləri.

## Yalnız oxunan və ya hələ olmayanlar

| Hələ yoxdur | Əvəzində, hazırda |
|---|---|
| Məsafələri, bucaqları və ya çevirmələri dəyişmək (uzatma, köçürmə, çevirmə əməliyyatları) | {{ui:Fərdi}}-də yalnız oxunur; bloku yaradan proqramda redaktə edin. |
| Axtarış, XY, fırlanma və polyar parametrlər | Hələ oxunmur: istinad saxlandığı kimi göstərilir. |
| Məsafə, çevirmə və nöqtə tutacaqlarını sürükləmək | Harada olduqlarını göstərirlər; görünürlük tutacağı və {{ui:Xassələr}}-dəki {{ui:Görünürlük}} siyahısı vəziyyətləri dəyişir. |
| Digər proqramın növündə dinamik bloklar yaratmaq (uzatma, çevirmə, axtarış) | CadCraft-da yaratdığınız bloklar sadə bloklardır; {{cmd:BPARAMETER}} bunu deyir. Öz parametrləriniz və bir neçə görünürlük parametri Parametr meneceridədir (bax "Öz parametrləriniz və görünürlük vəziyyətləri" aşağıda). |
| Blok redaktorunda görünürlük vəziyyətləri olan blokun obyektlərini əlavə etmək və ya silmək | Blok sonra sadə blok kimi saxlanılır (redaktor bağlananda bunu deyir). |
| Digər DWG versiyasında və ya DXF-də dinamik saxlamaq | Seçdiyiniz vəziyyəti göstərən sadə bloklar kimi saxlanılır və saxlama bunu deyir. |

:::note
{{cmd:BEDIT}}-də obyektləri hərəkət etdirmək və ya dəyişmək görünürlük vəziyyətləri olan bloku dinamik saxlayır. Vəziyyəti olmayan blok və ya redaktorda obyektləri əlavə edilmiş və ya silinmiş blok sadə blok olur.
:::

## Öz parametrləriniz və görünürlük vəziyyətləri

CadCraft-da yaratdığınız blok öz parametrlərini və **bir neçə** görünürlük parametrini, hər birinin öz vəziyyətləri ilə, daşıya bilər. {{cmd:BEDIT}}-də redaktə etdiyiniz blok, seçilmiş istinadın bloku və ya adını verdiyiniz blok üçün **Parametr meneceri**-ni açmaq üçün {{cmd:BPARAMS}} (və ya `BPM`) yazın.

- **Parametrlər**: ad, növ (ədəd, uzunluq, bucaq, say, bəli/xeyr) və ya digər parametrlər üzərində düstur (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Alınan nəticə}} nəticəni göstərir. İşləməyən düstur və ya növünə uyğun gəlməyən dəyər (1,5 sayı) rədd olunur və menecer səbəbini deyir; başqa heç nə dəyişmir.
- **Görünürlük parametrləri**: {{ui:Görünürlük parametri əlavə et}} birinci vəziyyətlə bir parametr yaradır. Hər vəziyyət adını dəyişdirə, silə (sonuncu qalır) və ya "göstərildiyi zaman" nömrəsi verə bilər. Düstur vəziyyəti parametrlərdən seçir (nömrəsi uyğun olan vəziyyət, yoxsa siyahıdakı həmin yerdəki vəziyyət); düstur olmadan hər istinad öz vəziyyətini seçir.
- **Obyektləri vəziyyətə qoymaq**: blok redaktorunda obyektləri seçin, {{cmd:BPARAMS}} yazın və vəziyyətdə {{ui:Seçilmiş obyektləri buraya qoy}} klikləyin. Heç bir görünürlük parametrinin siyahıda olmadığı obyektlər həmişə göstərilir.
- **Bu istinad**: seçilmiş istinaddan başlayanda menecer həmin istinadın öz dəyərlərini və vəziyyətlərini də göstərir.

Blok redaktorundan kənarda hər dəyişiklik bir geri alma addımıdır. Blok redaktorunda dəyişikliklər redaktorun dəyişiklikləridir: {{ui:Bloku saxla}} onları saxlayır. `-BPARAMS` eyni işi komanda sətrində edir.

**Faylda.** DWG və DXF parametrləri, hansı obyektlərin hansı vəziyyətdə olduğunu və hər istinadın öz dəyərlərini CadCraft-ın öz qeydlərində saxlayır; faylı yenidən CadCraft-da açın və hər şey geri qayıdır. Digər proqram hər istinadı bütün obyektləri ilə blok kimi görür, çünki DWG öz növündən hər blok üçün ən çox bir görünürlük parametrini saxlayır. Digər proqramın köçürdüyü istinad və ya obyektləri dəyişdirdiyi blok, artıq uyğun gəlməyən hissələr olmadan qayıdır (heç nə təxmin edilmir).
