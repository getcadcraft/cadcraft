---
title: 2D divarlar üçün divar formaları, kəsiklər, ofsetlər və kilidlər
summary: Divarları düzbucaqlı, çoxbucaqlı və qövs formasında çəkin, bölün və yenidən birləşdirin, ölçü ilə yerini dəyişin və bir divarı başqa divara və ya şəbəkə xəttinə kilidləyin. BimCraft-ın divarları ilə eyni alətlər.
keywords: divar, divar alətləri, divar düymələri, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, birləşmə üslubu, gönyə, düz, kvadrat et, asma kilid, tutacaq, ucu sürüklə, fırlat, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, birləşdir, birləşməni qadağan et, kilid, şəbəkə xətti, bölmə, boşluq, ofset, yerləşmə xətti
from: f41e7433
---

Bu alətlər `WALL` ilə yaradılan 2D divarlarda işləyir (bax: "2D-də ağıllı divarlar, qapılar və pəncərələr çəkin"). Onlar BimCraft-dakı divar alətləri ilə eyni qaydalardan istifadə edir, beləliklə divar hər ikisində eyni davranır.

## Alətlər haradadır

- Alət panelində {{ui:Divarlar}} qrupunda {{ui:Divar}}, {{ui:Düzbucaqlı}}, {{ui:Böl}} və {{ui:Ofset}} var. Onun {{ui:Daha çox}} menyusunda qalan bütün divar alətləri var, hər biri öz işarəsi ilə.
- Lent menyu üslublarında {{ui:Divarlar}} bölməsində {{ui:Divarları çək}}, {{ui:Kəs}}, {{ui:Təyin et və dəyiş}}, {{ui:Tut}} və {{ui:Birləşdir}} panelləri var.
- Tərtibatda alət sıraları və alət qutusu eyni {{ui:Divarlar}} qrupunu göstərir.
- Həmçinin aşağıda adı çəkilən istənilən əmri yaza bilərsiniz.

## Birləşmələr saxlanılır

Divar ucu başqa divara düşəndə CadCraft həmin birləşməni hər iki divarla birlikdə saxlayır. Artıq ucların təsadüfən olduğu yerdən birləşmələri yenidən hesablamır. Belə ki:

- Hərəkət etdirdiyiniz divara birləşmiş divarlar onu izləyir və birləşmə qalır. Onların ucları öz xətləri boyunca sürüşür, beləliklə heç nə dönmür.
- Divarın bir ucunu tutacağı ilə sürüklədikdə, orada birləşmiş divar da öz istiqamətini saxlayır. Onun ucu sürüklənən divarla görüşmək üçün öz xətti boyunca sürüşür, beləliklə sürüklənən uc həmişə kursorun altında yox, həmin xəttə düşür. Önizləmə harada olduğunu göstərir. Sürüklənən divara düz dirənən divar öz xətti boyunca izləyir. Ucu divar boyunca düz sürüklədikdə onun uzunluğu dəyişir və orada birləşmiş divar onunla birlikdə hərəkət edir.
- Birləşmiş divarda `ROTATE` eyni qaydada işləyir: qonşularının ucları öz xətləri boyunca fırlanmış divara sürüşür.
- Künc hərəkət etdirmək üçün orada görüşən hər iki divarı seçin və künc üzərindəki tutacağı sürükləyin. Hər iki divar künc üzərində qalır və hər ikisi dönür. Daha uzaqda olan divarlar olduğu kimi qalır.
- Tutacağın yeni yerini klikləyəndə birləşmələri qəsdən qırmaq üçün {{key:Alt}} basılı saxlayın: divar harada qoysanız oraya gedir və heç nə izləmir.
- Sürükləmə birləşmiş divarı öz uzaq ucundan geri keçirəcəksə, rədd edilir və heç nə dəyişmir.
- {{ui:Birləşmələri qadağan et}} ilə (`WALL`-da `D`) çəkdiyiniz, ya da Xassələrdə söndürdüyünüz ({{ui:Başlanğıcda birləşməni qadağan et}}, {{ui:Sonda birləşməni qadağan et}}) divar həmin ucda azad qalır, başqa divara toxunsa belə, yenidən icazə verənə qədər.
- `WALLDISJOIN` ({{ui:Birləşməni qadağan et}}, {{ui:Divarlar}} qrupunda) eyni işi bir kliklə görür: divarın bir ucuna yaxın klikləyin ki, həmin ucda birləşmələri qadağan edin, və yenidən klikləyin ki, icazə verin.
- Köhnə çertyojda hələ saxlanılmış birləşmələr yoxdur. Etdiyiniz ilk dəyişiklik onları bir dəfəyə, dəyişiklikdən əvvəl divarların necə durduğuna görə tapır və saxlayır. `WALLJOINS` bunu dərhal edir.
- DWG və DXF faylları birləşmələri hər divarın içində saxlayır. CadCraft onları saxlandığı kimi geri oxuyur. Genişləndirilmiş məlumat saxlamayan proqram divarları sadə bloklar kimi göstərir və birləşmələri atır; başqa proqramda divarları hərəkət etdirilmiş birləşmə isə divarlardan birini növbəti dəfə dəyişdiyinizdə atılır.

## Künc birləşmə üslubu

İki divarın uc-uca görüşdüyü künc, başqa üslub seçməsəniz, gönyə kimi çəkilir.

- `WALLJOINSTYLE` ({{ui:Divarlar}} qrupunda {{ui:Birləşmə üslubu}}): künc üzərində klikləyin. Hər klik növbəti üsula keçir: {{ui:Gönyə}}, {{ui:Düz}}, {{ui:Kvadrat et}}, sonra yenidən {{ui:Gönyə}}. Son klik etdiyiniz küncdə iki divardan hansının keçəcəyini dəyişmək üçün `T` yazın. Bitirmək üçün {{key:Enter}} basın. Əmrin bir işə salınması bir geri qaytarma addımıdır.
- {{ui:Düz}}: bir divar digərinin uzaq üzünə qədər keçir, digəri isə onun yan tərəfinə dirənərək dayanır. {{ui:Kvadrat et}}: eynidir, lakin keçən divar özünə perpendikulyar bitir. Düz bucaqda ikisi eyni görünür.
- Divarın Xassələrində: {{ui:Başlanğıcda birləşmə üslubu}}, {{ui:Sonda birləşmə üslubu}}, və {{ui:Başlanğıcda keçir}}, {{ui:Sonda keçir}}.
- Üslub hər iki divarla birlikdə saxlanılır və DWG və DXF fayllarında daşınır. Divarın surəti onsuz başlayır.
- T birləşməsinin seçiləcək üslubu yoxdur: yan tərəfinə toxunulan divar keçir. Üç və daha çox divarın görüşdüyü künc gönyə olaraq qalır. Çox iti künc (təxminən 30 dərəcədən az) və bir xətt üzərində olan iki divar da belədir.

## Divar formaları çəkin

Hər biri divarları bir geri qaytarma addımında, künclər birləşdirilmiş şəkildə yaradır. `WALL`-da `O` yerləşmə ofsetini təyin edir (divarın klikləriniz solundan nə qədər uzaqda getməsi) və `D` növbəti çəkdiyiniz divarlar üçün birləşməni söndürür.

- `WALLRECT` (`WR`): iki qarşılıqlı künc, `RECTANG` kimi.
- `WALLROT`: birinci tərəf, sonra digər tərəfin nə qədər uzanacağı; istənilən bucaqda düzbucaqlı üçün.
- `WALLPOLY` (`WP`): tərəflərin sayı (3-dən 64-ə), mərkəz, daxilə çəkilmiş üçün `I`, xaricə çəkilmiş üçün `C`, sonra radius, `POLYGON` kimi.
- `WALLARC` (`WARC`): mərkəz, başlanğıc, son. `D` qövsü əks istiqamətə çevirir.
- `WALLTAN`: divarın ucuna yaxın klikləyin, sonra qövsün sonunu, o divar boyunca çıxan.
- `WALLPICK`: xətt və ya polixətt üzərində klikləyin və ona birləşmiş xətləri də götürüb-götürməyəcəyinizi deyin.
- `WALLTRACE`: xətlərin və divarların bağlı sahəsinin içində klikləyin ki, ən kiçiyinin ətrafına divarlar qoyulsun.

Plan divarları düz olur, buna görə qövs hər biri 15 dərəcəlik qısa düz divarlarla çəkilir. Onlar hər hansı künc kimi birləşir.

## Divarları kəsin

- `WALLSPLIT` (`WS`): divarı, sonra nöqtəni klikləyin. `C` digər divarın onu kəsdiyi yerdə kəsir, `G` hissələr arasında boşluq buraxır, `F` kəsilmiş ucları birləşdirmək əvəzinə azad edir. Birinci hissə divarın çertyojdakı yerini saxlayır, qapılar və pəncərələr isə öz hissəsi ilə gedir. Qapı və ya pəncərədən keçən kəsik rədd edilir.
- `WALLSPLITGAP` ({{ui:Boşluqla böl}}): eyni bölmə, lakin əvvəl boşluq soruşur.
- `WALLDELSEG`: divarı, sonra silinəcək parçanın iki ucunu klikləyin.
- `WALLREJOIN`: bir divarın iki hissəsini klikləyin ki, yenidən bir olsun.

## Divarları məsafə ilə köçürün

- `WALLDIM`: bir divardan digərinə gedən xətti və ya düzləşdirilmiş ölçünü klikləyin, sonra yeni dəyəri yazın. Uzaq ucdakı divar özünə perpendikulyar hərəkət edir, birinci ucdakı divar yerində qalır və ona birləşmiş divarlar izləyir.
- `WALLOFFSET` (`WO`): divarı klikləyin, sonra onun köçürüləcəyi tərəfi (`D` məsafə yazır, `C` əvəzində surət yaradır).
- `WALLSTRETCH`: divar uclarının ətrafında pəncərə, sonra baza nöqtəsi və ikinci nöqtə.
- Xassələrdə yazılmış {{ui:Uzunluq}} başlanğıcı saxlayır və uzaq ucda birləşmiş divarı onunla birlikdə aparır; yeni {{ui:Qalınlıq}} seçdiyiniz {{ui:Yerləşmə xətti}} (sol üz, sağ üz və ya mərkəz) xəttindən uzağa doğru böyüyür.

## Divarları kilidləyin

Kilid faylda divarla qalır. Kilidli divarlardan birini hərəkət etdirsəniz, digəri izləyir. Bir dəyişiklik hər iki divarı fərqli şəkildə hərəkət etdirirsə, rədd edilir və heç nə dəyişmir.

- `WALLHOLD`: divarı başqa divara kilidləyin. `A` əvvəl onu digər divarın xəttinə köçürür, `K` onun malik olduğu məsafəni saxlayır.
- `WALLHOLDDIM`: paralel iki divar arasındakı məsafəni kilidləyin.
- `WALLGRID`: divarı şəbəkə xəttinə kilidləyin (şəbəkə qatında, bir ucunda mətndə etiketi olan xətt), ya boyunca, ya da bir ucu onun üzərində. Xətt boyunca kilidlənmiş divar ondan malik olduğu məsafəni saxlayır. Şəbəkə xəttini `GRIDMOVE` ilə köçürün, divar birləşmiş divarları ilə birlikdə bütöv izləyir. Şəbəkə xətti boyunca uzanan divar kilid olmadan da onunla birlikdə bütöv hərəkət edir, yalnız xəttdə bitən divar isə həmin ucu ilə uzanır.
- `WALLHOLDS` kilidləri siyahıya salır. `WALLUNHOLD` divardan kilidləri götürür.
- Hər kilid planda kiçik asma kilidlə göstərilir: kilidli divarın ortasının yanında, ya da şəbəkə xəttinə kilidlənmiş ucun yanında. Həmin kilidi götürmək üçün asma kilidi klikləyin.

## Hələ burada olmayanlar

Kilidlər divarların mərkəz xətlərindən istifadə edir. Burada divarların qatı yoxdur, buna görə birləşmədə qat üstünlüyü yoxdur və divarlar əyilmir (yuxarıda qövslərə bax). Bu alətləri heç kim böyük çertyojda sınamayıb və onlar başqa CAD proqramında yoxlanılmayıb.
