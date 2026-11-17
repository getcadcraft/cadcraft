---
title: Problemlərin həlli
summary: CadCraft-ın göstərdiyi mesajlar və qarşılaşa biləcəyiniz problemlər, hər biri səbəbi və həlli ilə birlikdə.
keywords: problem, xəta, işləmir, mesaj, aça bilmir, naməlum əmr, heç nə olmur, ilişib, düymələr işləmir, boş, çatışmır, düzəliş
from: 8299b222
---

## Faylların açılması

| Mesaj və ya əlamət | Səbəb | Həll |
|---|---|---|
| "CadCraft DWG və DXF çertyojlarını açır. "…" isə bunlardan deyil." | Fayl `.dwg` və ya `.dxf` deyil. | Çertyoj faylının özünü açın. PDF gətirilə bilər (Aç əmri soruşur: idxal et və ya əlavə et, bax [PDF altlıqları](topic:pdf-underlay)); şəkillər `IMAGEATTACH` ilə daxil edilir. |
| "Bu ikili DXF obyektin ortasında qurtarır: fayl qısaldılıb və ya zədələnib." | İkili DXF sonuna çatmadan dayanır. | Oxuna bilən hissəni açmaq üçün RECOVER yazın, ya da faylı yenidən istəyin. |
| "Bu fayl oxuna bilən DXF deyil (sətir … üzrə səhv qrup kodu)." | DXF zədələnib və ya əslində DXF deyil. | Faylı yenidən istəyin, ya da DWG istəyin. |
| "Bu çertyoj oxuna bilmədi. Zədələnmiş ola bilər, ya da CadCraft-ın hələ idarə etmədiyi versiyada (…) saxlanılıb." | DWG oxuyucusu onu oxuya bilmədi. | Köhnə versiyada saxlanılmış DWG və ya DXF istəyin. |
| "Bu çertyoj AutoCAD R11 / R12 (DWG AC1009) versiyasındadır, CadCraft oxuduğundan köhnədir …" | Release 12 və daha əvvəlki DWG faylları CadCraft-ın oxumadığı formatdan istifadə edir. | Onu yaradan proqramda DXF (istənilən versiya) və ya daha yeni DWG kimi saxlayın və onu açın. CadCraft-ın öz Fərqli saxla əmri həmin köhnə format istəyən proqramlar üçün DXF R12 təklif edir. |
| İlk DWG-də "… açıla bilmədi" və ardınca şəbəkə mesajı | DWG oxuyucusunu yükləmək olmadı: siz oflaynsınız və CadCraft oflayn istifadə üçün saxlanılmayıb, ya da bağlantı kəsildi. | Onlayn olun və yenidən cəhd edin, ya da DXF açın. {{ui:Save for offline}} düyməsini klikləyin və "Oflayn hazırdır" yazısını gözləyin ki, növbəti dəfə DWG faylları oflaynda açılsın. Bax [Oflayn işləmək](common:offline). |
| Oflayn düyməsi "Saxlamaq alınmadı" yazır | Bəzi fayllar yüklənmədi. | Bağlantını yoxlayın və yenidən cəhd etmək üçün düyməni klikləyin. |
| Oflayn düyməsi "Oflayn mümkün deyil" yazır | Məxfi pəncərələr və bəzi idarə olunan kompüterlər oflayn surət saxlaya bilmir. | Adi pəncərə istifadə edin, ya da onlayn qalın. |
| Bağlantı olmadan CadCraft açılmır | Bu brauzerdə oflayn istifadə üçün saxlanılmayıb, ya da brauzer onu təmizləyib. | Növbəti dəfə onlayn olduqda {{ui:Save for offline}} düyməsini klikləyin və "Oflayn hazırdır" yazısını gözləyin. |
| Çertyoj açılır, lakin bəzi hissələr çatışmır | CadCraft-ın hələ çəkə bilmədiyi obyektlər, ya da faylda söndürülmüş və ya dondurulmuş qatlar. | Sol paneldə "Bu fayl haqqında" bölməsini oxuyun. {{ui:Layers}} panelini yoxlayın. |
| Mətn iki sətirə sarınır | CadCraft mətni Helvetica tipli şriftlə çəkir, bu bəzi CAD şriftlərindən enlidir. | Xassələrdə mətni qısaldın, ya da əlavə sətirlə razılaşın. |
| Dairə ellips kimi görünür, ya da güzgülənmiş mətn düz oxunur | Obyekt əyilmiş müstəvidə çəkilib, ya da aşağıdan görünüb, faylı yaradan proqramda. CadCraft onu yuxarıdan görünən kimi göstərir, həmin proqramın plan görünüşü kimi; mətn oxunaqlı saxlanılır. | Düzəltmək üçün heç nə yoxdur. Onu digər proqramın üsulu ilə görmək üçün çertyojun yastılaşdırılmasını və ya obyektlərin yuxarıdan çəkilməsini istəyin. |
| Blok, dairə və ya ölçü faylı yaradan proqramdakından başqa yerdə yerləşir | CadCraft-ın səhv oxuduğu çertyoj halı. | Discord-da bizə yazın, mümkünsə faylı da əlavə edin. |

## Əmr sətri

| Mesaj və ya əlamət | Səbəb | Həll |
|---|---|---|
| "Naməlum əmr "…". Siyahı üçün HELP yazın." | Belə adda əmr və ya qısa yol yoxdur. | `HELP` yazın, ya da [Əmr siyahısına](topic:commands) baxın. Bəzi tanış əmrlər [hələ hazır deyil](topic:not-built-yet). |
| Yazarkən əmr sətirinin yanında "Belə əmr yoxdur" | Yazdığınız hələ heç nə ilə üst-üstə düşmür. | Yazmağa davam edin və ya yazılışı yoxlayın. |
| "Nöqtə və ya seçim açar sözü tələb olunur." | Yazdığınız nöqtə və ya seçim deyil. | Formatı yoxlayın: `x,y`, `@dx,dy`, `@d<a`, ya da tək bir rəqəm. Bax [Koordinat və məsafə daxiletməsi](topic:coordinate-entry). |
| "Müsbət rəqəm və ya iki nöqtə tələb olunur." | Məsafə mənfi idi və ya rəqəm deyildi. | Müsbət rəqəm yazın, ya da iki nöqtəyə klikləyin. |
| "Dərəcədə bucaq və ya iki nöqtə tələb olunur." | Bucaq rəqəm deyildi. | Dərəcəni sadə rəqəm kimi yazın. |
| "Rəqəm tələb olunur." | Rəqəm gözlənilirdi. | Yalnız rəqəmlər yazın. |
| "Seçim açar sözü yanlışdır." | Hərflər heç bir seçimə uyğun deyil. | Kvadrat mötərizədə göstərilən böyük hərfləri yazın. |
| `*Cancel*` | {{key:Esc}} basdınız, ya da nöqtə tələb olunan yerdə {{key:Enter}} basdınız. | Əmri yenidən başladın. |
| Yazdıqlarınız əmr sətrinə çatmır | Panel və ya dialoqdakı qutuda kursor var. | {{key:Enter}} və ya {{key:Esc}} basın, ya da çertyoja klikləyin. |
| Əmr sizin seçmədiyiniz obyektlərlə işləyir | Əmri başlatmazdan əvvəl onlar seçilmişdi. | Əmrdən əvvəl {{key:Esc}} basın. |
| Xətt gözlənilməz yerə getdi | `x,y` mütləqdir. | Nisbi nöqtələr üçün `@dx,dy` istifadə edin. |
| "Əvvəlcə cari əmri bitirin və ya ləğv edin (Esc)." | Əmr işləyərkən {{key:Mod+S}} basdınız. | {{key:Esc}} basın, sonra saxlayın. |
| "DWG (AutoCAD 2000) kimi saxlamaq olmadı: … Əvvəlcə Fərqli saxla, sonra DXF cəhd edin." | Çertyojun nə isə DWG kimi yazıla bilmədi. | {{key:Mod+Shift+S}} basın, {{ui:DXF R12}} seçin və {{ui:Save}} düyməsini klikləyin. |
| "Saxlanılmadı." | {{ui:Save a copy as}} dialoqunu {{ui:Cancel}} və ya {{key:Esc}} ilə bağladınız. | {{key:Mod+Shift+S}} basın və yenidən {{ui:Save}} düyməsini klikləyin. |

## Redaktə

| Mesaj və ya əlamət | Səbəb | Həll |
|---|---|---|
| Obyekt seçilmir | Onun qatı kilidlənib, söndürülüb və ya donub; ya da vərəqdəsiniz və o, görünüş pəncərəsindəki model hissəsidir. | Qatın kilidini açın, ya da {{ui:Model}} nişanına keçin. |
| "Orada heç nə tapılmadı." | Klikləmənin altında obyekt yoxdur. | Yaxınlaşdırın və xəttin özünə klikləyin. |
| "Orada heç bir obyekt kəsişmir." | {{cmd:TRIM}} seçdiyiniz parçanı kəsən bir obyekt tapmadı. | Kəsici xəttin həqiqətən onu kəsdiyini yoxlayın. |
| "Bu obyekti kəsmək olmur." | Kəsmə xətt, qövs, dairə və polixətt üzərində işləyir. | Əvvəlcə blokları partladın, ya da silib yenidən çəkin. |
| "Həmin istiqamətdə sərhəd yoxdur." | {{cmd:EXTEND}} qovuşacaq bir şey tapmadı. | Uzanmalı olan ucuna yaxın klikləyin. |
| "Bu obyekt üzrə ofset olmur." | Ofset xətt, qövs, dairə və polixətt üzərində işləyir. | Əvvəlcə onu partladın, ya da paralel xətt çəkin. |
| "Bu qədər uzağa ofset olmur." | Ofset forması içəri çevirərdi. | Daha kiçik məsafə istifadə edin. |
| "Radius çox böyükdür." və ya "Məsafə çox böyükdür." | Yuvarlaqlaşdırma və ya kəsmə xəttin ucundan kənara çıxardı. | `R` ilə daha kiçik radius, ya da `D` ilə daha kiçik məsafə təyin edin. |
| "Açıq polixəttin yalnız ilk və ya son seqmenti kəsilə bilər." | Künc polixəttin ortasına kəsilərdi. | Polixəttin yanaşı iki seqmentini seçin, ya da hər künc üçün `P` istifadə edin. |
| "İkinci, fərqli xətt seçin." | İkinci seçim eyni xətt idi, ya da xətt deyildi. | Başqa xətt seçin. |
| "Yalnız polixətt, blok istinadı və ölçülər partlayır." | Seçimdə partlaya biləcək heç nə yox idi. | Polixətt, blok istinadı və ya ölçü seçin. |
| "Bu cari qatdır. Əvvəlcə başqa qatı cari edin." | Cari qatı söndürməyə çalışdınız. | Başqa qatın adına klikləyin, sonra bu qatı söndürün. |
| "… adlı qat artıq var" | Qat adları unikal olmalıdır. | Başqa ad seçin. |
| "Geri qaytarılacaq heç nə yoxdur." | Geri qaytarılacaq şey qalmayıb, ya da çertyojı açdınız və ya başlatdınız (bu tarixçəni təmizləyir). | — |

## Ölçülər və bloklar

| Mesaj və ya əlamət | Səbəb | Həll |
|---|---|---|
| Ölçü mətni və oxları çox kiçik və ya çox böyükdür | Ölçülər çertyoj vahidləri ilə verilir; ümumi miqyas çertyoja uyğun deyil. | {{cmd:DIMSCALE}} ni çap miqyasına təyin edin; bax [Ölçü ölçülərinin təyini](topic:dimension-settings). |
| "Ölçmək istədiyiniz bucağın içində bir nöqtə seçin." | Bucaq ölçüsünün yeri qollardan birinin üzərindədir. | Bucağın içinə klikləyin. |
| "Bu xətlər paraleldir." | Paralel xətlər arasında bucaq yoxdur. | Kəsişən iki xətt seçin. |
| "Xətti və ya uyğunlaşdırılmış ölçü seçin." | {{cmd:DIMCONTINUE}} və ya {{cmd:DIMBASELINE}} başlamaq üçün birini tələb edir. | Xətti və ya uyğunlaşdırılmış ölçü seçin. |
| "Bu çertyojun hələ bloku yoxdur: F faylda bir blok daxil edir, L kitabxanadan …" | Çertyojun öz blokları yoxdur. | `F` və ya `L` yazın, ya da {{cmd:BLOCK}} ilə blok yaradın. |
| ""…" adlı blok yoxdur." | Ad səhvdir. | Mesaj mövcud blokların siyahısını göstərir. |
| "Blok adı * ilə başlaya bilməz və ya … istifadə edə bilməz" və ardınca simvolların siyahısı | Ad blokların istifadə edə bilmədiyi simvol daşıyır. | Hərflər, rəqəmlər, `-` və `_` istifadə edin. |
| "Blok özünü əhatə edə bilməz." | Seçimdə yaradılan blokun öz istinadı var. | Həmin istinadı çıxarın. |
| "Obyekt seçilmədi; heç nə yaradılmadı." | Seçimdən əvvəl {{key:Enter}} basdınız. | {{cmd:BLOCK}} əmrini yenidən işə salın və obyektləri seçin. |

## Vərəqlər və çap

| Mesaj və ya əlamət | Səbəb | Həll |
|---|---|---|
| "Görünüş pəncərələri tərtibat üzərində yerləşir. Əvvəlcə tərtibat nişanını açın (və ya LAYOUT ilə yaradın)." | {{ui:Model}} nişanında {{cmd:MVIEW}}. | Əvvəlcə vərəq nişanına klikləyin. |
| "Əvvəlcə görünüş pəncərəsi ilə tərtibatı açın." | {{ui:Model}} nişanında {{cmd:VPVIEW}}. | Vərəq nişanına klikləyin. |
| Görünüş pəncərəsinin miqyası on dəfə səhv görünür | Çertyoj vahidləri səhvdir. | {{ui:Current settings}} altında {{ui:Units}} təyin edin. |
| "Hələ çap ediləcək heç nə yoxdur." | Model boşdur. | Nəsə çəkin, ya da çertyoj açın. |
| "Çap ediləcək pəncərəni seçin." | {{ui:A window…}} seçilib, amma pəncərə seçilməyib. | {{ui:Pick}} düyməsini klikləyin və iki künc seçin. |
| "… kağızdan böyükdür: kənarlar kəsilir." | Sahə həmin miqyasda sığmır. | Daha kiçik miqyas, daha böyük kağız, ya da {{ui:Fit to paper}} seçin. |
| "Brauzer yeni sekmənin açılmasını blokladı, buna görə PDF yükləndi." | Sayt üçün pəncərələr bloklanıb. | Yüklənmiş PDF-i açın, ya da sayt üçün pəncərələrə icazə verin. |
| Simvollar "?" kimi çap olunur | PDF-in şriftlərində onlar üçün hərf yoxdur (nadir ideoqramlar, hind və digər mürəkkəb formalaşdırma tələb edən yazılar və s.), ya da daha böyük şrift yüklənə bilmədi (oflayn). Avropa yazıları, kiril, yunan, ivrit, ərəb, fars, urdu, tay, çin, yapon və koreya öz formasında çap olunur. | Ərəb yazılı, tay, çin, yapon və ya koreya üçün bağlantı ilə yenidən çap edin. Digər yazılar hələ hazır deyil. |
| Çertyojda konstruksiya xətləri görünür | Onların qatı çap olunur. | Qatın printer düyməsini klikləyin. |
| Bütün xətlər eyni qalınlıqdadır | Onların xətt qalınlığı {{ui:Default}}-dur, buna görə dialoqun qələm eni ilə çap olunurlar. | Qatlara və ya obyektlərə sağ paneldə {{ui:Lineweight}} verin, ya da dialoqda {{ui:Line weight}} seçin. Xətt qalınlığını ekranda görmək üçün status panelində {{ui:LWT}} düyməsinə basın. |

## Düymələr və ekran

| Əlamət | Səbəb | Həll |
|---|---|---|
| F3, F7 və ya F8 səsi dəyişir və ya Mission Control açılır | Mac funksiya düymələri. | **fn** düyməsini saxlayın, ya da status panelindəki düymələrdən istifadə edin. Bax [Düymələr, siçanlar və trackpadlər](common:keys). |
| F7 caret browsing soruşur | Firefox-un öz F7 istifadəsi. | Xeyr seçin; {{ui:Grid}} düyməsini istifadə edin. |
| {{key:Mod+N}} brauzer pəncərəsi açdı | Brauzer həmin düyməni özünə saxlayır. | {{ui:New}} düyməsini klikləyin və ya `NEW` yazın. |
| {{key:Mod+A}} əmr sətrinin mətnini seçdi | Əmr sətrində kursor var idi. | Əvvəlcə obyektə klikləyin, ya da `Obyektləri seçin` sorğusunda `ALL` yazın. |
| {{key:Delete}} silmir | Əmr sətrində kursor var. | `E` yazın və {{key:Enter}} basın. |
| Mac trackpad-də sağ klik heç nə etmir | Control-klik adi klik kimi sayıla bilər. | İki barmaqla klikləyin. |
| Trackpad-lə heç nə sürüşmür | Orta düymə yoxdur və Space sürüşdürmür. | İki barmaqla sürüşdürün: 2D görünüş sürüşür (sıxma və siçan təkəri yaxınlaşdırır). Ya da sağ klik saxlanılmış halda sürüyün. |
| İlk {{key:Esc}} tam ekrandan çıxardı | Brauzer tam ekrandan çıxmaq üçün Esc istifadə edir. | Əmri ləğv etmək üçün {{key:Esc}} basın. |
| {{key:F1}} Mac-də heç nə etmir | F1 parlaqlıq düymədir. | **fn** düyməsini saxlayın, ya da {{ui:Help}} düyməsini klikləyin. |
| Yazdıqlarınız kömək panelinin axtarış qutusuna düşür | Kömək panelində kursor var. | Çertyoja klikləyin. |
| Çertyoj boşaldı | Çox uzağa yaxınlaşdırmısınız. | {{ui:Extents}} düyməsini klikləyin, ya da təkərə iki dəfə klikləyin. |
| Sekmə bağlananda "Saytdan çıxılsın?" | Saxlanılmamış dəyişikliklər var. | Qalın, {{key:Mod+S}} ilə saxlayın, sonra bağlayın. |
