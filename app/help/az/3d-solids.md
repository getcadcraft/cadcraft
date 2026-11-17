---
title: 3D-də modelləşdirmə
summary: Çertyojı 3D sekmədə görün və ondan sadə 3D cisimlər düzəldin: ekstruziya (meyillə və ya yol boyunca), fırlatma, üzləri itələyib çəkmə, qutular, silindrlər və kamalar; onları birləşdirin, çıxın və kəsişdirin, sonra köçürün, kopyalayın, fırladın və silin; onların düz 2D görünüşlərini vərəqə yerləşdirin.
keywords: 3d, üç ölçülü, cisim, cisimlər, 3dsolid, region, gövdə, acis, sat, sab, başqa proqramların cisimləri, 3D çertyojun açılması, ekstruziya, extrude, ext, fırlatma, revolve, rev, sürüt, sweep, meyl, yol, presspull, bas çək, itələ çək, box, qutu, cylinder, cyl, silindr, kama, wedge, 3dorbit, orbit, görünüş, vscurrent, vizual üslub, kölgəli, gizli xətt, karkas, x-ray, xray, iso, perspektiv, paralel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, görünüş kubu, birləşmə, union, uni, çıxma, subtract, su, kəsişmə, intersect, in, boolean, bul, birləşdir, cisimləri birləşdir, viewbase, flatshot, düz görünüş, 2D görünüş, çertyoj görünüşü, ön görünüş, üst görünüş, yan görünüş, gizli xətlər
from: 13060e71
---

## Nə düzəldəcəksiniz

1000 × 600 otaq planı 400 hündürlüyündə bloka ekstruziya edilir, bir üz yuxarı çəkilir və yanında bir silindr yerləşdirilir — sonra model çertyojla birlikdə saxlanılır və 3D baxıcı və ya printer üçün ixrac edilir.

{{ui:3D}} sekmesi çertyojun altında {{ui:Model}} yanında yerləşir. Model sahəsindəki çertyoju öz qat rənglərində yerdə göstərir (söndürülmüş və ya dondurulmuş qatlar gizli qalır) və yaratdığınız cisimləri. 3D görünüş ilk dəfə açılanda yüklənir; sonrakı dəfələr dərhal keçid edir.

## Şəklin ekstruziyası

1. {{ui:Model}} sekmesində `REC` yazın və {{key:Enter}} basın. `0,0` yazın, {{key:Enter}} basın, `@1000,600` yazın, {{key:Enter}} basın.
2. {{ui:3D}} sekmesini klik edin. Alətlər panelində çertyoj qruplarının yerinə {{ui:3D}} qrupu görünür.
3. {{ui:Ekstruziya}} düyməsini klik edin (və ya {{cmd:EXTRUDE}}, `EXT` yazın). Düzbucaqlının içinə klik edin, sonra {{key:Enter}} basın.
4. `400` yazın və {{key:Enter}} basın. Tarixçə "1 cisim ekstruziya edildi, hündürlük 400" yazır və onun həcmini göstərir.

Bağlı polixətlər (qövslər daxil olmaqla), düzbucaqlılar, çoxbucaqlılar, çevrələr və ellipslər ekstruziya olunur; xətlər və açıq polixətlər olunmur, və tarixçə səbəbini yazır. Hündürlüyü yazmaq əvəzinə klik də edə bilərsiniz: kontur kursoru yuxarı və aşağı izləyir. Mənfi hündürlük aşağı gedir. Hündürlük çağırışında `D` yazsanız, ekstruziyadan sonra 2D şəkillər silinir (yenidən `D` yazsanız qalırlar).

Hündürlük çağırışında `T` (Meyl bucağı) dərəcə ilə bucaq istəyir: yanlar həmin bucaq qədər meyl edir, yuxarı kiçilir (mənfi bucaq onu böyüdür); şəkil üçün həddindən artıq dik bucaq rədd edilir. `P` (Yol) şəkilləri onun əvəzinə yol boyunca süründürür (aşağıya bax).

## Fırlatma və sürüt

- {{cmd:REVOLVE}} (`REV`, və ya {{ui:Daha çox}} › {{ui:Ox ətrafında fırlat}}): bağlı şəkilləri seçin, {{key:Enter}} basın, sonra oxun iki ucunu klik edin (və ya 0,0 nöqtəsindən keçən çertyoj oxu üçün `X` və ya `Y` yazın), sonra bucaq yazın və ya tam dövrə üçün {{key:Enter}} basın. Şəkil ox ətrafında fırlanır və yerdən qalxır: xəttin yanında vazonun yarım konturunu çəkin, sonra həmin xətt ətrafında fırladın. Şəkil oxa toxuna bilər, lakin onu keçə bilməz. Tam dövrə 48 addımdır.
- {{cmd:SWEEP}} (və ya {{ui:Daha çox}} › {{ui:Yol boyunca sürüt}}, və ya EXTRUDE-un hündürlük çağırışında `P`): bağlı şəkilləri (profil) seçin, {{key:Enter}} basın, sonra yolu klik edin: xətt, polixətt, qövs, çevrə və ya ellips. Profil yol boyunca dikləşir, ortası yolun üzərində olur və onunla gedir; künclər kəsilir, bağlı yol isə halqa yaradır. Otağın konturu boyunca sürüdülən kiçik düzbucaqlı plintus olur; polixətt boyunca sürüdülən çevrə isə boru olur.

## Üzü itələyib çəkmək

1. {{ui:Bas/çək}} düyməsini klik edin (və ya {{cmd:PRESSPULL}} yazın).
2. Blokun yuxarı üzünü klik edin.
3. `100` yazın və {{key:Enter}} basın, və ya kursoru hərəkət etdirib klik edin. Blok 500 hündürlükdə olur.

## Qutular, silindrlər və kamalar

- {{cmd:BOX}}: iki künci klik edin və ya yazın, sonra hündürlük.
- {{cmd:CYLINDER}} (`CYL`): mərkəz, radius, sonra hündürlük. Silindrlər və ekstruziya olunmuş çevrələr 48 tərəfli olur və hamar kölgələnir.
- {{cmd:WEDGE}} (`WE`): iki künc və hündürlük. Birinci künc tam hündürlükdədir, digər künc isə sıfıra qədər meyl edir.

3D sekmesində klik kursorun altındakı üz və ya qıraqda düşür, əks halda yerdə; belə ki qutu başqa cismin üzərində dura bilər.

## Cisimləri köçürmək, kopyalamaq, fırlatmaq və silmək

3D sekmesində klik cismi seçir; pəncərə üçün soldan sağa, kəsişən seçim üçün sağdan sola sürükləyin. Sonra:

- {{cmd:MOVE}}: baza nöqtəsini və obyektin gedəcəyi yeri klik edin, və ya X, Y və Z üzrə məsafə üçün `<100,0,0>` (və ya `@100,0`) yazın.
- {{cmd:COPY}}: eyni, lakin əsli saxlanılır.
- {{cmd:ROTATE}}: bucaq yazın (seçimin mərkəzi ətrafında, Z ətrafında fırlanır), və ya mərkəzi, başlanğıc nöqtəni və bucağı klik edin.
- {{cmd:ERASE}} və ya {{key:Delete}}.

## Cisimləri birləşdirmək, çıxmaq və kəsişdirmək

3D alətlər panelində {{ui:Daha çox}} açın, və ya əmri yazın:

- {{cmd:UNION}} (`UNI`): cisimləri seçin, {{key:Enter}} basın: onlar bir cismə çevrilir.
- {{cmd:SUBTRACT}} (`SU`): saxlanılacaq cisimləri seçin və {{key:Enter}} basın, sonra çıxarılacaqları seçin və {{key:Enter}} basın. Blokdan keçən deşik üçün: silindri onun içindən çəkin, sonra silindri çıxın.
- {{cmd:INTERSECT}} (`IN`): cisimləri seçin, {{key:Enter}} basın: yalnız hamısında ortaq olan hissə qalır.

Tarixçə nəticənin həcmini göstərir. Hər biri bir geri qaytarma addımıdır. İlk işlətdiyiniz zaman 3D bul mühərriki yüklənir (təxminən 0,5 MB; {{ui:Oflayn üçün saxla}} daxilindədir). Yalnız bağlı cisimləri birləşdirmək olar: açıq qıraqları olan cisim (başqa proqramın sərbəst 3D üzlərindən) bu səbəblə rədd edilir. Nəticə bir cisimdir; əyri üzlər, silindr kimi, düz fasetlərdən ibarət qalır.

Cismin üzlərini və qıraqlarını ayrıca redaktə etmək üçün onu iki dəfə klik edin; {{key:Esc}} onu yenidən bağlayır. Hər 3D dəyişiklik çertyojla eyni tarixçədə bir geri qaytarma addımıdır: {{key:Mod+Z}} hər iki sekmədə son işinizi geri qaytarır.

## Vərəqdə düz görünüşlər

1. Vərəq sekmesini açın (və ya {{ui:Model}}-də qalın), sonra {{cmd:VIEWBASE}} (və ya `FLATSHOT`) yazın.
2. Görünüşü seçin: ön üçün {{key:Enter}}, və ya `T` (üst), `R` (sağ), `L` (sol), `BA` (arxa), `BO` (alt), `I` (izometrik).
3. {{key:Enter}} gizli xətləri nöqtəli göstərir; `H` onları buraxır.
4. {{key:Enter}} CadCraft-ın təklif etdiyi miqyası götürür: vərəqdə, görünüşün kağızın yarısından az yerə sığdığı ən böyük standart miqyas (məsələn 1:20). Və ya birini yazın: `1:50`, `2:1`.
5. Görünüşün mərkəzinin gedəcəyi yeri klik edin və ya yazın.

Görünüş bir blok istinadıdır, `VIEW-FRONT-1` və s.: görünən qıraqlar VIEW-VISIBLE qatındadır (0,5 mm), gizli qıraqlar isə VIEW-HIDDEN qatında (nöqtəli, 0,25 mm). Onu digər çertyoj kimi köçürün, ölçün və çap edin. Bu, yaradıldığı andakı cisimlərin şəklidir: onları dəyişdikdən sonra görünüşü silin və {{cmd:VIEWBASE}} əmrini yenidən işlədin. Daha çox görünüş üçün hər görünüş üçün bir dəfə işlədin.

## Ətrafa baxın

Çarxla sürükləyin ki orbit edəsiniz, {{key:Shift}} + çarx sürükləyin və ya sağ düymə ilə sürüşdürün, çarxı fırladın ki kursorun altında yaxınlaşdırın. Trackpad-də iki barmaq orbit edir, sıxmaq yaxınlaşdırır. Sürükləmədən sağ klik digər sekmələrdə olduğu kimi {{key:Enter}}-dir. 3DORBIT {{key:Enter}} və ya {{key:Esc}} basana qədər sol düyməyə orbit etməyə imkan verir.

- {{ui:Görünüşlər}} (və ya {{cmd:VIEW}}): İzometrik, Üst, Alt, Ön, Arxa, Sol, Sağ, Perspektiv və ya Paralel, və Hamısına yaxınlaşdır.
- {{ui:Üslub}} (və ya {{cmd:VSCURRENT}}, `VS`): Kölgəli, Qırağı olan kölgəli, Gizli xətt, Karkas və ya X-ray.

Klik etdiyiniz nöqtələr cisimlərə (künclər, qıraqlar, üzlər) və yerdəki 2D çertyoja tutulur: onun xətt və qövslərinin ucları və ortaları, və onların boyunca nöqtələr. 2D xətlər 3D sekmesində heç vaxt seçilmir. Əmr 2D obyektlər istədikdə (EXTRUDE, REVOLVE, SWEEP), klik bir obyekti seçir, soldan sağa sürükləmə pəncərədə tam olanı, sağdan sola sürükləmə isə keçdiyini götürür, {{ui:Model}} sekmesində olduğu kimi.

Görünüş kubu 3D sekmesinin yuxarı sağında yerləşir: hər hansı üzə, qıraqa və ya künca klik edib oradan baxın, sürükləyib orbit edin, ev düyməsi izometrik görünüşə qaytarır. Bu, {{ui:Avtomatik}} rejimidir və [CadCraft parametrləri](topic:settings) daxilində {{ui:Künc göstəricisi}}nin başlanğıcıdır. {{ui:Görünüş kubu}} təyin olunanda {{ui:Model}} sekmesi də yuxarıdan baxan kub göstərir; hər hansı digər tərəfə klik 3D sekmesini həmin tərəfdən açır. {{ui:Ox işarəsi}} təyin olunanda isə hər iki sekmə kubun yerinə ox işarəsini göstərir.

## Digər proqramlardan cisimlər

Başqa proqramın çertyoju 3D cisimlər, region və gövdələr saxlaya bilər (3DSOLID, REGION, BODY: digər proqram onların formasını ACIS məlumatı kimi saxlayır). CadCraft model sahəsindəkiləri 3D sekmesində göstərir, öz qatının rəngində və öz qıraqları ilə, sekməni ilk dəfə açdığınızda; sonra əmr sətri neçəsinin çəkildiyini bildirir.

- Olduğu kimi göstərilir: onları seçə, köçürə və ya dəyişə bilməzsiniz. Söndürülmüş və ya dondurulmuş qatlar onları gizlədir.
- DWG kimi saxlananda hər biri dəyişmədən geri yazılır, istənilən DWG versiyasında, beləliklə digər proqram onları yenidən alır. DXF faylları onları saxlamır: CadCraft onları yalnız DWG-yə yazır və DXF kimi saxlayanda bunu bildirir.
- Çəkilir: düz üzlər və silindr, konus, sfera, torus və sadə spline səthlərindəki üzlər, düz, dairəvi və spline qıraqları ilə. Başqa növ səthdəki və ya CadCraft-ın yerləşdirə bilmədiyi üz təxmin olunmur: kənarda qalır və siyahıya salınır, məsələn "Hələ çəkilməyib (3D cisimlər): spline-surface (sweepsur) üzərində 2 üz, bu səth hələ çəkilməyib."
- Bloklar içindəki cisimlər hələ göstərilmir; "Bu fayl haqqında" onları sayır.

Əyri üzlər təqribən 7,5° aralı kiçik düz parçalar kimi çəkilir, ona görə əyri cisim yaxından bir az fasetli görünür.

## Saxlamaq və ixrac etmək

3D model DWG və DXF-də saxlanılır. Hər üz `CC-3D` qatında 3D üz kimi yazılır, beləliklə digər proqramlar cisimləri göstərir; CadCraft isə faylda öz dəqiq nüsxəsini saxlayır, onu faylı yenidən açanda oxuyur və 3D görünüşü əvvəlki kimi (kamera, proyeksiya və vizual üslub) bərpa edir. Digər proqramların 3D üzləri 3D sekmesində sərbəst üzlər kimi gəlir, bir qrupda birlikdə. Blok içindəki 3D üz modeldəki hər blok istinadı üçün bir dəfə gəlir, istinad necə yerləşdirilib və necə çevrilibsə elə. Blokun özündə və vərəqdə 3D üz konturu kimi düz çəkilir.

3D qrupundakı {{ui:İxrac et}} yalnız cisimləri yükləyir: GLB baxıcılar və veb üçün ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) və ya 3D çap üçün STL millimetrlə ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} hansının olduğunu soruşur.

:::note
3D model real ölçüdədir. Vahidsiz çertyoj millimetr sayılır, buna görə `1000` bir metrdir. Əgər çertyojun vahidlərini sonra dəyişsəniz ({{ui:Xassələr}}, heç nə seçilməyəndə), cisimlər onlarla birlikdə miqyaslanır ki çertyojda qalsınlar, və tarixçə bunu bildirir. Bir {{key:Mod+Z}} vahidlərin dəyişməsini və miqyaslamanı birlikdə geri qaytarır.
:::
