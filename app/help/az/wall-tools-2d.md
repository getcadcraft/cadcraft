---
title: 2D divarlar üçün divar formaları, kəsiklər, ofsetlər və kilidlər
summary: Divarları düzbucaqlı, çoxbucaqlı və qövs kimi çəkin, bölün və yenidən birləşdirin, bir ölçüyə görə köçürün və bir divarı başqasına və ya şəbəkə xəttinə kilidləyin. BimCraft-dakı divar alətləri ilə eynidir.
keywords: divar, divar alətləri, divar düymələri, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, birləşmə üslubu, gönyə, düz, kvadrat et, qapaq, tutacaq, ucu sürüklə, fırlat, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, birləşmə, birləşməni qadağan et, kilid, şəbəkə xətti, bölmə, boşluq, ofset, yer xətti
from: 49044181
---

Bu alətlər `WALL`-dan yaranan 2D divarlarla işləyir (bax "2D divarları, qapıları və pəncərələri çək"). Onlar BimCraft-dakı divar alətləri ilə eyni qaydalardan istifadə edir, buna görə divar hər iki proqramda eyni davranır.

## Alətlər harada yerləşir

- Alət panelində {{ui:Divarlar}} qrupunda {{ui:Divar}}, {{ui:Düzbucaqlı}}, {{ui:Böl}} və {{ui:Ofset}} var. Onun {{ui:Daha çox}} menyusunda hər digər divar aləti öz ikonu ilə var.
- Lent menyu üslublarında {{ui:Divarlar}} sekmesində {{ui:Divarları çək}}, {{ui:Kəsik}}, {{ui:Təyin et və dəyiş}}, {{ui:Tut}} və {{ui:Birləşdir}} panelləri var.
- Vərəqdə alət sətirləri və alət qutusu eyni {{ui:Divarlar}} qrupunu göstərir.
- Aşağıda adı çəkilən istənilən komandanı da yaza bilərsiniz.

## Birləşmələr saxlanılır

Divar ucu başqa divarın üzərinə düşəndə CadCraft bu birləşməni hər iki divarla birlikdə saxlayır. Uclarının harada olduğuna görə birləşmələri yenidən hesablamır. Buna görə:

- Hərəkət etdirdiyiniz divara birləşmiş divarlar onunla gedir və birləşmiş qalır. Onların uclaru öz xətləri boyunca sürüşür, buna görə heç nə fırlanmır.
- Divarın bir ucunu tutacağı ilə sürüklədikdə, orada birləşmiş divar da öz istiqamətini saxlayır. Onun ucu öz xətti boyunca sürüşür ki, sürüklənən divara çatsın, buna görə sürüklənən uc həmin xəttə düşür, həmişə kursorun altında olmur. Önizləmə harada olacağını göstərir. Sürüklənən divara dirənən divar öz xətti boyunca izləyir. Ucu birbaşa divar boyunca sürükləsəniz, onun uzunluğu dəyişir və orada birləşmiş divar onunla birlikdə hərəkət edir.
- {{cmd:ROTATE}} birləşmiş divar üzərində eyni şəkildə işləyir: qonşu divarların uclarını fırlanmış divara öz xətləri boyunca sürüşdürür.
- Küncü hərəkət etdirmək üçün orada görüşən hər iki divarı seçin və künc tutacağını sürükləyin. Hər iki divar künclə qalır və hər ikisi fırlanır. Daha uzaqdakı divarlar olduğu kimi qalır.
- Birləşmələri qəsdən qırmaq üçün tutacağın yeni yerinə klik edərkən {{key:Alt}} saxlayın: divar yerləşdirdiyiniz yerə gedir və heç nə onu izləmir.
- Birləşmiş divarı öz uzaq ucu vasitəsilə fırladan sürükləmə rədd olunur və heç nə dəyişmir.
- {{ui:Birləşməni qadağan et}} (WALL-da `D`) ilə çəkdiyiniz divar və ya Xassələrdə söndürdüyünüz ({{ui:Başlanğıcda birləşməni qadağan et}}, {{ui:Sonda birləşməni qadağan et}}) divar həmin ucda sərbəst qalır, başqa divara toxunsa belə, yenidən icazə verənədək.
- `WALLDISJOIN` ({{ui:Birləşməni qadağan et}}, {{ui:Divarlar}} qrupunda) eyni işi klikllə edir: divarı ucuna yaxın klikləyin ki, o ucda birləşmələr qadağan olsun, yenidən klikləyin ki, icazə verilsin.
- Köhnə çertyojda hələ saxlanılmış birləşmə yoxdur. Etdiyiniz ilk dəyişiklik onları əvvəlki vəziyyətdən bir dəfə tapır və saxlayır. `WALLJOINS` bunu dərhal edir.
- DWG və DXF faylları birləşmələri hər divarın içində daşıyır. CadCraft onları saxlanıldığı kimi oxuyur. Genişlənmiş məlumat saxlamayan proqram divarları sadə blok kimi göstərir və birləşmələri atır; başqa proqramda hərəkət etdirilmiş divarın birləşməsi, siz hər hansı divarı dəyişdirdikdə atılır.

## Küncün birləşmə üslubu

Iki divarın uc-uca görüşdüyü küncü, başqa üslub seçməsəniz, gönyə kimi çəkilir.

- `WALLJOINSTYLE` ({{ui:Birləşmə üslubu}}, {{ui:Divarlar}} qrupunda): küncü klikləyin. Hər klik növbəti üsluba keçir: {{ui:Gönyə}}, {{ui:Düz}}, {{ui:Kvadrat et}}, sonra yenidən {{ui:Gönyə}}. Küncdə sonuncu klik etdiyiniz divarın hansının keçdiyini dəyişmək üçün `T` yazın. Bitirmək üçün {{key:Enter}} basın. Komandanın bir işləməsi bir geri alma addımıdır.
- {{ui:Düz}}: bir divar digərinin uzaq üzünə qədər keçir, digəri isə onun yanına dayanır. {{ui:Kvadrat et}}: eynidir, lakin keçən divar özünə görə düz bitir. Düz bucaqda ikisi eyni görünür.
- Divarın Xassələrində: {{ui:Başlanğıcda birləşmə üslubu}}, {{ui:Sonda birləşmə üslubu}}, və {{ui:Başlanğıcda keçir}}, {{ui:Sonda keçir}}.
- Üslub hər iki divarla saxlanılır və DWG və DXF fayllarında gedir. Divarın surəti üslubsuz başlayır.
- T birləşməsinin seçəcəyi üslub yoxdur: yan tərəfi qarşılanan divar keçir. Üç və daha çox divarın görüşdüyü künc gönyə olaraq qalır. Çox iti künc (təxminən 30 dərəcədən az) və bir xətt üzərində olan iki divar da belədir.

## Divar formaları çəkin

Hər biri bir geri alma addımında divarları yaradır, künclər birləşdirilmiş. `WALL`-da `O` yerləşmə ofsetini təyin edir (divar klikləriniz solunda nə qədər uzaqda olur), `D` növbəti çəkdiyiniz divarlar üçün birləşməni söndürür.

- `WALLRECT` (`WR`): iki əks künc, `RECTANG` kimi.
- `WALLROT`: birinci tərəf, sonra digər tərəfin nə qədər uzaqda olduğu, istənilən bucaqda düzbucaqlı üçün.
- `WALLPOLY` (`WP`): tərəflərin sayı (3-dən 64-ə), mərkəz, `I` daxilə yazılmış və ya `C` xaricdən yazılmış üçün, sonra radius, `POLYGON` kimi: klik edin və ya yazın (yazılmış radius göstəriciyə doğru gedir, və ya göstərici hələ mərkəzdə olduqda X boyunca).
- `WALLARC` (`WARC`): mərkəz, başlanğıc, son. `D` qövsü əks istiqamətə çevirir.
- `WALLTAN`: divarın ucuna yaxın klikləyin, sonra qövsün ucu, o, divar boyunca çıxır.
- `WALLPICK`: xətt və ya polixətt klikləyin və ona birləşmiş xətləri də götürüb-götürməməyi deyin.
- `WALLTRACE`: ən kiçik bağlı xətt və divar sahəsinin içində klikləyin ki, onun ətrafında divarlar qoyulsun.

Plan divarları düz olduğu üçün qövs hər biri 15 dərəcə olan qısa düz divarlarla çəkilir. Onlar hər künc kimi birləşir.

## Divarları kəsin

- `WALLSPLIT` (`WS`): divarı, sonra nöqtəni klikləyin. `C` digər divarın keçdiyi yerdə kəsir, `G` hissələr arasında boşluq buraxır, `F` kəsilmiş uclarını birləşdirilmək əvəzinə sərbəst edir. Birinci hissə divarın çertyojdakı yerini saxlayır və qapılar və pəncərələr öz hissəsi ilə gedir. Qapı və ya pəncərədən keçən kəsik rədd olunur.
- `WALLSPLITGAP` ({{ui:Boşluqla böl}}): eyni bölmə, lakin əvvəl boşluq soruşur.
- `WALLDELSEG`: divarı, sonra silinəcək parçanın iki ucunu klikləyin.
- `WALLREJOIN`: bir divarın iki hissəsini klikləyin ki, yenidən bir olsun.

## Divarları məsafəyə görə köçürün

- `WALLDIM` ({{ui:Ölçü ilə redaktə et}}): bir divardan digərinə gedən xətti və ya düzxətli ölçüyə klik edin, sonra yeni dəyəri yazın. Uzaq ucdakı divar özünə görə düz köçür, birinci ucdakı divar saxlanılır və ona birləşmiş divarlar izləyir. Ölçünün uzaq nöqtəsi öz divarı ilə birlikdə hərəkət edir, buna görə ölçü yazdığınız dəyəri göstərir.
- `WALLOFFSET` (`WO`): divarı klikləyin, sonra onu köçürəcəyiniz tərəfi (`D` məsafə yazır, `C` əvəzinə surət yaradır).
- `WALLSTRETCH`: divar uclarının ətrafında pəncərə, sonra baza nöqtəsi və ikinci nöqtə.
- Xassələrdə yazılmış {{ui:Uzunluq}} başlanğıcı saxlayır və uzaq ucda birləşmiş divarı onunla birlikdə aparır; yeni {{ui:Qalınlıq}} seçdiyiniz {{ui:Yer xətti}}-dən (sol üz, sağ üz və ya mərkəz) böyüyür.

## Mərkəz xətləri arasında ölçü

Divarın mərkəz xətti çəkilmir, lakin obyekt tutması onu tapır. Obyekt tutması açıq olduqda ({{key:F3}}), göstəricini divarın qalınlığının ortasına aparın: işarə `Divar mərkəzi: son nöqtə` və ya `Divar mərkəzi: orta nöqtə` oxuyur, və mərkəz xətti göstərici onun üzərində olduqda kəsilmiş xətt kimi görünür. Obyekt tutma siyahısında {{ui:Perpendikulyar}} və ya {{ui:Ən yaxın}} açıq olduqda, onlar mərkəz xəttində də işləyir.

1. `DIMLINEAR` (və ya `DIMALIGNED`) başladın.
2. İlk divarı işarə `Divar mərkəzi: orta nöqtə` və ya `Divar mərkəzi: son nöqtə` deyəndə klikləyin.
3. İkinci divarı eyni şəkildə klikləyin, sonra ölçü xəttinin gedəcəyi yeri klikləyin.
4. Məsafəni dəyişmək üçün `WALLDIM` başladın, ölçünü klikləyin və yeni dəyəri yazın. İkinci divar hərəkət edir.

Mərkəz xətti tutması nöqtə istəyən hər komandada işləyir.

## Divarları kilidləyin

Kilid faylda divarla qalır. Kilidli divarı hərəkət etdirsəniz, digəri izləyir. Bir dəyişiklik hər iki divarı fərqli hərəkət etdirirsə, rədd olunur və heç nə dəyişmir.

- `WALLHOLD`: divarı başqa divara kilidləyin. `A` əvvəlcə onu digər divarın xəttinə düzləşdirir, `K` olduğu məsafəni saxlayır.
- `WALLHOLDDIM`: iki paralel divar arasındakı məsafəni kilidləyin.
- `WALLGRID`: divarı şəbəkə xəttinə kilidləyin (mətn etiketi ucunda olan şəbəkə qatında xətt), boyunca və ya bir ucu onun üzərində. Xətt boyunca kilidlənmiş divar ondan olan məsafəsini saxlayır. Şəbəkə xəttini `GRIDMOVE` ilə hərəkət etdirin, divar birləşmiş divarları ilə birlikdə bütöv izləyir.
- `WALLHOLDS` kilidləri sadalayır. `WALLUNHOLD` divardan kilidləri çıxarır.
- Hər kilid planda kiçik qıfıl göstərir: kilidlənmiş divarın ortasının yanında, ya da şəbəkə xəttinə kilidlənmiş ucun yanında. Kilidi çıxarmaq üçün qıfılı klikləyin.

## Hələ olmayanlar

Kilidlər divarların mərkəz xətlərindən istifadə edir. Buradakı divarların qatları yoxdur, buna görə birləşmədə qat üstünlüyü yoxdur və divarlar əyilmir (yuxarıdakı qövslərə baxın). Bu alətləri heç kim böyük çertyojda sınamayıb və başqa CAD proqramında yoxlanılmayıb.
