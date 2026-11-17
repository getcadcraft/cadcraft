---
title: Koordinat və məsafə daxiletməsi
summary: CadCraft komanda sətrində nöqtə, məsafə, bucaq və ya ədəd yazmağın bütün üsulları, nümunələrlə.
keywords: dinamik daxiletmə, dyn, f12, tab, koordinatlar, mütləq, nisbi, polyar, @, birbaşa məsafə, bucaq, dərəcə, son nöqtə, lastpoint, nöqtələrin yazılması, daxiletmə, arifmetika, hesablama, kalkulyator, cal, toplama, kəsr, ifadə
from: 7de9252d
---

## Nöqtələr

Nöqtə istənildikdə bunlardan birini yazın və {{key:Enter}} düyməsinə basın:

| Yazırsınız | Mənası | Nümunə |
|---|---|---|
| `x,y` | Mütləq: başlanğıc nöqtə 0,0-dan ölçülür | `2500,1200` |
| `#x,y` | Yenə mütləq (vərdiş üçün qəbul edilir) | `#2500,1200` |
| `@dx,dy` | Nisbi: son nöqtədən sağa və yuxarı | `@600,0` |
| `@d<a` | Nisbi polyar: son nöqtədən məsafə və bucaq | `@1500<45` |
| `d<a` | Mütləq polyar: başlanğıc nöqtədən məsafə və bucaq | `3000<90` |
| tək ədəd | Birbaşa məsafə: baza nöqtəsindən kursor xaçına doğru həmin məsafədə | `1200` |
| `*x,y`, `@*dx,dy` | Dünya koordinatları, UCS təyin olunduqda | `*0,0` |

{{cmd:UCS}} ilə UCS təyin olunduqda `x,y`, `@dx,dy` və `d<a`-dakı bucaq UCS oxları boyunca ölçülür. Bax: [Baxışı döndərmək və öz koordinatlarınızdan istifadə](topic:ucs-and-turned-view).

Və ya çertyojda klikləyin; obyekt tutmaları və {{ui:Ortho}} kliklərə tətbiq olunur.

Qaydalar:

- Vergül X-i Y-dən ayırır. Onluq kəsrlərdə nöqtə işlədilir: `1250.75,300`.
- Mənfi qiymətlər sola və aşağıya gedir: `@-600,0`.
- Boşluq yazmayın: {{key:Space}} sətri təsdiqləyir, {{key:Enter}} kimi.
- Ədədlər eksponent ola bilər: `1e3` 1000-dir.
- Vahid yazılmır, fut və düym yazılışı da yoxdur. Sadə ədədləri çertyojun vahidlərində yazın.

## Son nöqtə

`@` istənilən komandada, istənilən nöqtə sorğusunda **verdiyiniz son nöqtədən** hesablanır: klik, tutma və ya yazılmış nöqtə. Komandalar arasında yadda qalır, ona görə yeni xətti əvvəlki xəttin sonundan `@0,500` məsafədə başlada bilərsiniz. Heç bir nöqtə verməmişdən əvvəl `@` 0,0-dan hesablayır.

Bunun vacib olduğu yerlər:

- {{cmd:COPY}} komandasında ilk surətdən sonra son nöqtə həmin surətin nöqtəsidir. `@600,0` iki dəfə yazılsa, surətlər orijinaldan 600 və 1200 məsafədə yerləşir.
- Ölçü yerləşdirdikdən sonra son nöqtə ölçü xəttinin yerləşdirildiyi yerdir, ölçünün ucu deyil.

Şübhə olduqda mütləq nöqtədən, tutmadan və ya birbaşa məsafədən istifadə edin.

## Birbaşa məsafə ilə daxiletmə

Tək ədəd komandanın **baza nöqtəsindən** (elastik xəttin başladığı nöqtə) kursor xaçına doğru məsafədir:

1. Kursor xaçını istədiyiniz istiqamətə hərəkət etdirin.
2. Məsafəni yazın və {{key:Enter}} basın.

{{ui:Ortho}} aktiv olduqda istiqamət düz sağa-sola və ya düz yuxarı-aşağıya tutulur. Bu, divarları düzbucaqlı çəkmək üçün ən sürətli üsuldur. Baza nöqtəsi yoxdursa və ya kursor məhz onun üzərindədirsə, ədəd rədd edilir: "Nöqtə və ya seçim açar sözü tələb olunur."

## Bucaqlar

- Dərəcə ilə, sadə ədəd kimi: `30`, `-45`, `112.5`.
- Müsbət X istiqamətindən (sağa baxan) saat əqrəbinin əksinə ölçülür: 0 sağdır, 90 yuxarıdır, 180 soldur, 270 və ya -90 aşağıdır.
- Bucaq istənildikdə (fırlanma, mətn bucağı) klik də edə bilərsiniz: bucaq baza nöqtəsindən kliklədiyiniz yerə ölçülür. Baza nöqtəsi hələ yoxdursa, ilk klik onu təyin edir və sorğu ikinci nöqtə istəyir.

## Məsafələr

Məsafə istənildikdə (radius, ofset, mətn hündürlüyü, miqyas əmsalı):

- müsbət ədəd yazın (fut və düymlü çertyojda `12'6"` və ya `6-1/2` də olar: bax [Fut və düym](topic:units-papers-scales#feet-and-inches-and-fractions)), və ya
- nöqtəyə klik edin: komandanın baza nöqtəsindən həmin nöqtəyə məsafə ölçülür, və ya
- baza nöqtəsi yoxdursa, iki nöqtəyə klik edin: sorğu `İkinci nöqtəni göstərin` olur.

"Müsbət ədəd və ya iki nöqtə tələb olunur." o deməkdir ki, qiymət ədəd deyildi və ya mənfi idi.

## Yazılmış qiymətdə hesablama

Uzunluq, koordinat, bucaq və ya ədədin yazıldığı hər yerdə (komanda sətri, dinamik daxiletmə, Xüsusiyyətlər qutuları və dialoqlar) qiyməti əvvəlcədən hesablamaq əvəzinə `+`, `-`, `*`, `/` və mötərizələrlə hesablama yaza bilərsiniz:

| Yazırsınız | Nəticə |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (fut və düymlü çertyojda) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, çertyojun vahidlərində (vahidlər təyin olunubsa) |
| `@4+7/16,0` | son nöqtənin 4.4375 sağında nöqtə |
| `360/7` | 51.43 dərəcə bucaq |

- Uzunluğa yazılmış tire onun hissəsi olaraq qalır: `4-7/16` 4 7/16-dır, `24'-6"` isə 24 fut 6 düymdür. Fut işarəsindən sonra çıxmaq üçün əvvəlcə uzunluğu bitirin, `24'-0"-6"`, və ya hesablamanı mötərizəyə alın, tirenin ətrafında boşluqla, `(24' - 6")`. Mötərizə içində boşluq boşluq kimi qalır; mötərizədən kənarda isə boşluq {{key:Enter}} basır.
- Uzunluğa əlavə olunan sadə ədəd çertyojun vahidləri ilə ölçülür; ona vurulan və ya bölünən ədəd uzunluğu miqyaslayır. İki uzunluq vurulanda sahə alınır, ona görə `2'*3'` rədd edilir.
- `abs`, `round`, `ceil` və `floor` də işləyir: `round(10/3)`.
- Oxunmayan hesablama səhvin harada olduğunu göstərməklə rədd edilir, məsələn: "Hesablama vaxtından əvvəl bitir (simvol 3): qiymət çatışmır." Heç bir şey heç vaxt 0 kimi oxunmur. {{cmd:CAL}} hesablamanın qiymətini çap edir.

## Dinamik daxiletmə

{{ui:Dyn}} ({{key:F12}}, status panelində) komanda nöqtə istədiyi zaman qiymətləri kursor xaçının yanında göstərir.

- Hələ baza nöqtəsi yoxdursa (xəttin ilk nöqtəsi), iki sahə **X** və **Y**-dir.
- Bundan sonra isə son nöqtədən **məsafə** və **bucaq**dır.

Yazmaq yenə komanda sətrinə gedir; kursor xaçının yanındakı sahə onu göstərir, elastik xətt isə onu izləyir.

1. Qiymət yazın: o, seçilmiş sahəyə düşür.
2. {{key:Tab}} basın (və ya X-dən sonra vergül). Qiymət kilidlənir (qalın göstərilir) və növbəti sahə seçilir. Kilidlənmiş məsafə, siz siçanla istiqaməti göstərərkən elastik xətti həmin uzunluqda saxlayır.
3. İkinci qiyməti yazın və ya sadəcə göstərin, sonra {{key:Enter}} basın. `50`, {{key:Tab}}, `90`, {{key:Enter}} son nöqtədən yuxarıya düz 50 çəkir.

{{key:Tab}} olmadan bir qiymətdən sonra {{key:Enter}} basmaq birbaşa məsafə daxiletməsi kimi işləyir. Fut və düym sahələrdə də işləyir (`12'6"`). Məsafə və bucaq sorğuları (dairənin radiusu, fırlanma) da qiymətini kursor xaçının yanında göstərir.

## Seçimlər və standart qiymətlər

- Seçimlər kvadrat mötərizədə görünür. Seçimin böyük hərflərini yazın (`D` — `[Diameter]` üçün, `CL` — `CLose` üçün) və {{key:Enter}} basın. Sözün daha uzun başlanğıcları da işləyir (`DIA`).
- Standart qiymət bucaqlı mötərizədə görünür, məsələn `<500>`. Onu istifadə etmək üçün {{key:Enter}} basın və ya sağ klik edin.

## Digər klaviatura tərtibatları və rəqəm klaviaturası

Komanda adları, qısa adlar və seçim hərfləri Latın hərfləridir. Yunan, kiril (rus, ukrayna, belarus, serb, makedon, bolqar), ivrit, ərəb, fars, tay və ya koreys tərtibatı aktiv olduqda tərtibatı dəyişmək lazım deyil: yazdığınız söz olduğu kimi komanda, qısa ad və ya seçim deyilsə, CadCraft onu basdığınız düymələrə görə oxuyur. Latın klaviaturasında `L` düyməsi yenə `LINE` komandasını başladır, `C` düyməsi isə tərtibatın həmin düymədə hansı hərfi yazmasından asılı olmayaraq `Close` seçimini cavablandırır. Komanda sətrinin üstündəki uyğun komandaların siyahısı da eyni qaydaya uyğundur. Mətn sorğusu olan yerdə yazdığınız mətn ({{cmd:TEXT}} məzmunu, ad) heç vaxt dəyişmir.

Rəqəm klaviaturasının ondalıq düyməsi vergül verən tərtibatlarda həmin düymə komanda sətrində və ədəd qutularında nöqtə yazır, beləliklə `12.5` rəqəm klaviaturasından yazıla bilər. Əsas klaviaturanın vergül düyməsi isə `x,y`-ni yenə ayırır.

Hər ikisi {{ui:Settings}} bölməsində söndürülə bilər: {{ui:Commands on a non-Latin keyboard layout}} və {{ui:Keypad decimal key}}.

## Koordinat göstəricisi

Status paneli, tutmalardan və {{ui:Ortho}}-dan sonra kursor xaçının X və Y koordinatlarını göstərir (UCS təyin olunubsa, UCS-də). Komandanın baza nöqtəsi olduqda, əlavə olaraq həmin nöqtədən məsafəni və bucağı `Δ` ilə göstərir, məsələn `Δ 1500 < 30°`: bunlar `@1500<30` kimi yazacağınız ədədlərdir.

{{cmd:ID}} nöqtənin koordinatlarını çap etmək, {{cmd:DIST}} isə iki nöqtə arasında ölçmək üçündür.
