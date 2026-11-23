---
title: Komanda xəritəsi: nə yazmaq lazımdır
summary: CadCraft-ın malik olduğu hər komanda qısa adları ilə, A-dan Z-yə, proqramın özündən yaradılmış, və digər çertyoj proqramlarından fərqli olan adətlər.
keywords: komanda xəritəsi, komandalar, ləqəblər, qısa adlar, haradan gəlirsiniz, komanda siyahısı, nə yazmaq lazımdır, sil, kəs, ekvivalent, fərqlər
from: 9426856f
---

CadCraft digər çertyoj proqramlarından tanınan komanda adlarını və qısa adları qəbul edir: xətt üçün `L`, kəsmək üçün `TR`, silmək üçün `E` yazın. Buna görə əksər komandalar üçün öyrənmək lazım olan heç bir tərcümə cədvəli yoxdur: tanıdığınız ad burada da addır. Aşağıdakı siyahı CadCraft-ın malik olduğu bütün komandalardır, proqramın özündən yaradılıb. {{key:Enter}} sonuncunu təkrarlayır; komanda sətrində `HELP` eyni siyahını çap edir.

Fərqli olan və ya qurulmamış olanlar:

- **Save** brauzerdə surət yükləyir ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio-da faylı yazır. Bax [Digər çertyoj proqramlarından gələnlər](topic:coming-from).
- **PLOT** naxış cədvəli ilə PDF yaradır (həmçinin PNG və SVG); səhifə quraşdırma meneceri yoxdur.
- **DIMSTYLE** və **PEDIT** qurulub; **PEDIT**-də Təpə-redaktə seçimi yoxdur (tutacaqlar bunu edir).
- **TABLE** qurulmayıb; {{cmd:XREF}}, {{cmd:SPLINE}} və {{cmd:WBLOCK}} qurulub.
- Rutinin öz komandaları (AutoLISP `C:NAME`) {{cmd:APPLOAD}} ilə yüklədikdən sonra görünür; burada siyahılanmır.

## Bütün komandalar (402)

| Komanda | Qısa adlar | Nə edir |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | 3D görünüşü sol düymə ilə orbit edin |
| `ACCESS` | `AX` | Sensorsuz çəkilişi yandırın və ya söndürün: nəticələr ekran oxuyucunuz vasitəsilə səslənir, çertyojda klaviatura kursoru, tutma səsləri və səsli komandalar. |
| `ALIASEDIT` | | Komanda ləqəblərini bir mətn faylında redaktə edin (tanış L, *LINE formatı) |
| `ALIGN` | `AL` | Mənbə nöqtələrini təyinat nöqtələrinə düşəcək şəkildə obyektləri köçürün və fırladın (bir, iki və ya üç cüt), istəsəniz onları miqyaslayın |
| `ALIGNPANEL` | `ALP` | Uyğunlaşdır və bölüşdür panelini açın |
| `ALIGNTO` | | Seçilmiş obyektlərin sol, mərkəz, sağ, yuxarı, orta və ya aşağı kənarlarını seçim üzrə, birinci və ya son seçilmiş obyekt üzrə və ya nöqtəyə görə düzləşdirin |
| `ANNOALLVISIBLE` | `ANNOALL` | Anotativ obyektləri hər miqyasda göstərin, ya da yalnız görünüş pəncərəsinin (və ya çertyojun) miqyası onların siyahısında olduqda |
| `ANNOSCALE` | `CANNOSCALE` | Çertyojun şərh miqyasını təyin edin: anotativ mətn və ölçülər eyni ölçüdə çap olunacaq şəkildə dəyişdirilir |
| `APPLOAD` | `AP` | Tətbiqləri yükləyin: LISP rutinləri (.lsp) və onların dialoq faylları (.dcl); Başlanğıc Dəsti (AP) |
| `ARC` | `A` | Qövs: 3 nöqtə, Başlanğıc/Mərkəz/Son, Başlanğıc/Mərkəz/Bucaq, Başlanğıc/Mərkəz/Uzunluq, Başlanğıc/Son/Bucaq, Başlanğıc/Son/İstiqamət, Başlanğıc/Son/Radius, Mərkəz/Başlanğıc/Son, Mərkəz/Başlanğıc/Bucaq, Mərkəz/Başlanğıc/Uzunluq, Davam |
| `AREA` | `AA` | Nöqtələrlə və ya obyektin sahəsi və perimetri; Əlavə et və Çıx işlək cəmi saxlayır (AA) |
| `ARRAY` | `AR` | Sətir və sütunlarda surətlər, ya da bir mərkəz ətrafında (AR) |
| `ARRAYASSOCIATIVITY` | | ARRAY komandalarının redaktə oluna bilən massivlər (1) yoxsa sadə surətlər (0) yaradıb-yaratmadığını təyin edir |
| `ARRAYCLOSE` | | Massivin mənbə obyektlərinin redaktəsini bitirir |
| `ARRAYEDIT` | | Assosiativ seçimlə yaradılmış massivi dəyişir: saylar, aralıq, mənbə obyektləri, bir element |
| `ARRAYPATH` | | Xətt, qövs, polixətt və ya digər əyri boyunca obyektlərin surətləri |
| `ARRAYPOLAR` | | Mərkəz nöqtəsi ətrafında surətlər |
| `ARRAYRECT` | | Sətir və sütunlarda surətlər |
| `ASBUILT` | `ASB` | ASBUILT ekipajın ölçdüyü as-built nöqtələrini oxuyur (CSV / TXT, EXPORTPOINTS yazdığı kimi) və çertyojun nöqtələri ilə müqayisə edir: tolerantlığın içində və ya xaricində, ölçülməyib, artıq. Onları AS-BUILT qatında işarələyir və CSV hesabatını yükləyir. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Atributu (blokun dəyər istədiyi etiketi) təyin edin və bloka qoyun (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Blok istinadının atribut dəyərlərini komanda sətrində bir-birinin ardınca redaktə edin (Enter dəyəri saxlayır) |
| `ATTSYNC` | | Blokun istinadlarını atribut təyinləri ilə uyğunlaşdırın: yeniləri standart dəyərləri ilə əlavə olunur, silinənlər çıxarılır, mövqe və mətn sıfırlanır; dəyərlər saxlanılır |
| `AUDIT` | | Açıq çertyojda zədələri yoxlayır: sonlu olmayan ədədlər, ölçüsü olmayan obyektlər, itmiş qatlar, bloklar, üslublar və xətt tipləri, özünü ehtiva edən bloklar, paylaşılan identifikatorlar, pozulmuş ölçülər və ştrixlamalar. Tapdıqlarını növə görə sadalayır və düzəltməzdən əvvəl soruşur; düzəliş bir geri alma addımıdır. |
| `AUNITS` | `ANGUNITS` | Bucaqların necə göstərilib yazıldığı: onluq dərəcə, dərəcə-dəqiqə-saniyə və ya N45°23'30"E kimi istiqamətlər (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Çertyojda avtotamamlamanı yandırın və ya söndürün, və ya çertyojun naxışlarının indi nə təklif etdiyini sadalayın. |
| `AUTOCONSTRAIN` | | Həndəsə artıq yaxın olduqda üst-üstə düşmə, üfüqi və şaquli məhdudiyyətlər əlavə edin |
| `AUTODIM` | `ADIM` | Qaydalarla ölçüləndirin: ümumi ölçü, tərəflər boyunca zəncirlər, açıqlıqlar, dəlik diametrləri və şəbəkə aralığı, artıq ölçülmüş olanı təkrarlamadan. |
| `AUTOSHEET` | `ASH` | Vərəqləri özü yerləşdirir: kağız və standart miqyasları seçir və hər görünüşü başlıq ştampı və adı ilə yerləşdirir. |
| `BATTMAN` | | Blok atributları meneceri: blokun atributlarının sırası, etiketləri, sorğuları, standart dəyərləri və rejimləri, sonra istinadları yenilənir |
| `BCLOSE` | | Blok redaktorunu bağlayın: bloku saxlayın və ya dəyişiklikləri ləğv edin |
| `BCONVERT` | | BCONVERT təkrarlanan həndəsəni tapır və blok istinadlarına çevirir. Təkrarlanan obyektləri seçin: həmin açıq fəzada eyni həndəsə olan, köçürülmüş və istənilən bucaqla fırladılmış hər digər obyekt dəsti tapılır, və Güzgü və ya Miqyaslı seçimi yandırılıbsa, güzgü şəkilləri və başqa ölçüdə surətlər də. Yeni bloka ad və baza nöqtə verin; seçim və hər surət ona istinad olur, hər biri öz fırlanma və miqyası ilə. Və ya Blok seçin və mövcud blokun adını verin ki, onun obyektlərinin dağınıq surətləri tapılsın. Surət eyni qat, rəng, xətt tipi və xətt qalınlığına malik olmalıdır, Xassələr Göz ardı et olmadıqda. Kilidli qatlardakı obyektlərə toxunulmur. Bir geri alma addımı. |
| `BEDIT` | `BE` | Blok redaktoru: blokun obyektlərini və atributlarını redaktə edin; BCLOSE saxlayır (BE) |
| `BLEND` | | BLEND: iki açıq əyrinin uclarında splayn, birləşmək üçün uclara yaxın seçilir. CONtinuity: Tangent hər iki istiqaməti izləyir, Smooth həm də necə əyildiklərini izləyir. |
| `BLOCK` | `B`, `BMAKE` | Obyektlərdən blok yaradın (bir istinad olurlar) |
| `BLOCKREPLACE` | | BLOCKREPLACE: bir blokun hər istinadı başqa blokun istinadına çevrilir, eyni yerdə, eyni miqyas və fırlanma ilə. Hər iki blokun malik olduğu atributların dəyərləri saxlanılır. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE Bloklar panelini kursor filtrdə olmaqla göstərir. Panel hər bloku şəkli ilə göstərir (ən son yerləşdirilənlər birinci), siyahı və ya şəbəkə şəklində; şəklə klik edin və ya çertyoja sürükləyin ki, blok INSERT ilə yerləşdirilsin. Kitabxanalar altında öz DWG və ya DXF faylınızı əlavə edin: onun blokları şəkillərlə sadalanır və siz birini yerləşdirəndə bu çertyoja surət olunur. CadCraft Studio-da çertyojların qovluğu da əlavə oluna bilər, fayllar və qovluqlar yadda qalır. |
| `BOMEDIT` | `BOMCOLUMNS` | Material siyahısı cədvəlinin sütunları, qruplaşdırma, sıralama, başlıq, cəmlər və qeydlər |
| `BOMEXPORT` | | Material siyahısı cədvəlini .csv faylı kimi saxlayın |
| `BOMTABLE` | `BOM` | Bir zonanın və ya bütün çertyojun canlı material siyahısı cədvəli |
| `BOMUPDATE` | | İndi bütün material siyahısı cədvəllərini yeniləyin, dondurulmuşları da |
| `BOMZONE` | `BZONE` | Material siyahısı üçün çertyojun adlandırılmış sahəsi: iki künc, çoxbucaqlı və ya qapalı obyektin konturu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): qapalı sahənin içində nöqtə seçin və ətrafında bağlı polixətt alın. Qövslər qövs olaraq qalır. Adalar onun içindəki sahələri də konturlayır. |
| `BOX` | | Qutu: iki künc və hündürlük (3D) |
| `BPARAMETER` | `BPARAM` | Hələ qurulmayıb: blokda parametr (məsələn Görünürlük) əlavə etmək. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blok parametrləri: düsturlu adlandırılmış parametrlər və bir blokda bir neçə görünürlük parametri. Blok redaktorunda işləyir (seçilmiş obyektləri vəziyyətə təyin edin) və seçilmiş istinadda (onun öz dəyərləri və vəziyyətləri). |
| `BREAK` | `BR` | Xətti, qövsü, çevrəni və ya polixətti iki nöqtə arasında kəsin (BR) |
| `BREAKATPOINT` | | Xətti, qövsü və ya polixətti bir nöqtədə ikiyə bölün |
| `BREAKLINE` | | Sınma simvolu ilə xətt çəkin; onun ölçüsü və uclardan kənar uzantısı yadda qalır. |
| `BREPLACE` | | BREPLACE bir bloku başqası ilə əvəz edir. Seçilmiş: blok istinadlarını seçin və yerinə istifadə ediləcək blok adını verin. Hamısı: bir blok və onun əvəzini adlandırın, hər məkandakı və digər blokların içindəki hər istinad dəyişir. İstinad öz yerini, miqyasını, fırlanmasını və qatını, və hər iki blokun malik olduğu atributların dəyərlərini saxlayır; yeni blokun yeri olmayan dəyərlər atılır və adlandırılır. |
| `BSEARCH` | | BSEARCH blokları tapır. Ad: blok adının bir hissəsi, ya da * və ? ilə şablon. Atribut: istinadın atributlarında saxlanılan dəyər (ya da TAG=dəyər). Həndəsə: obyektləri və ya bir blok istinadını seçin, forması ən azı 85% oxşar olan bloklar ən yaxşısı birinci olmaqla sadalanır; ölçü, fırlanma və güzgüləmə sayılmır. Açıq fəzada tapılan istinadlar seçilir və növbəti komanda üçün hazırdır. |
| `BURST` | | Blok istinadlarını partlayın və atributlarının dediklərini saxlayın: hər dəyər atributun qatında mətnə çevrilir. |
| `BVHIDE` | `BVH` | Blok redaktorunda: cari görünürlük vəziyyətində obyektləri gizlədin. |
| `BVSHOW` | `BVSH` | Blok redaktorunda: cari görünürlük vəziyyətinin gizlətdiyi obyektləri göstərin (seçmək üçün solğun görünür). |
| `BVSTATE` | `BVS` | Blok redaktorunda, görünürlük vəziyyətləri olan blokda: vəziyyətə keçin, və ya birini əlavə edin, adını dəyişin və ya silin. |
| `CAL` | | Uzunluq və ya ədəd hesablayın: + − * / və mötərizələr, harada yazsanız |
| `CENTERLINE` | `CL` | İki xətt arasında mərkəz xətti: onların arasında yarıda, ya da görüşdükdə bissektrisa boyunca (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Mərkəz nişanı: çevrənin və ya qövsün mərkəzində xaç, onun ardınca mərkəz xətləri (CM) |
| `CHAMFER` | `CHA` | İki xətt arasında küncü pazlayın (D iki məsafə, A uzunluq və bucaq, P polixəttin hər küncü) |
| `CHSPACE` | | CHSPACE: obyektləri vərəq ilə model arasında görünüş pəncərəsi vasitəsilə köçürün. Onlar miqyaslanır və fırladılır ki, digər tərəfdən də eyni görünsünlər. Vərəqdə modelə gedirlər; görünüş pəncərəsi ilə işlədikdə (MSPACE) vərəqə gəlirlər. |
| `CIRCLE` | `C` | Mərkəz və radius, diametr, 2 və ya 3 nöqtə |
| `CLASS` | | Seçilmiş obyektləri sinfə qoyun, ya da heç nə seçilməyəndə aktiv sinfi təyin edin (? onları sadalayır) |
| `CLASSES` | `CLS` | Siniflər paneli: siniflər qatlar üzrə obyektləri sıralayır; onları göstərin, gizlədin və üslublaşdırın və hər görünüş pəncərəsində ayrıca təyin edin (CLS) |
| `COMMANDLINE` | `CMDLINE` | Komanda sətrini yerləşdirin və ya üzdürün, bir sətir edin, tarixçə sətirlərini təyin edin və ya tarixçəni açın (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ölçü üslublarını, mətn üslublarını, qatları, vərəqləri və ya vahidləri müqayisə edin: bu çertyojda iki, və ya bu çertyojla başqa açıq çertyoj, və bir dəyəri bir-birinə köçürün. |
| `CONSTRAINTBAR` | `CBAR` | Məhdudiyyət zolaqlarını göstərin və ya gizlədin (Hamısını göstər / Hamısını gizlə, və ya obyektə görə) |
| `COPY` | `CO`, `CP` | Obyektləri, klik etdiyiniz qədər surətləndirin |
| `COPYBASE` | | Seçdiyiniz baza nöqtəsi ilə obyektləri buferə köçürün |
| `COPYCLIP` | | Obyektləri buferə köçürün (Ctrl+C); PASTECLIP yerləşdirir |
| `COUNT` | `BCOUNT` | Blok istinadlarını sayın: birini seçin və onun blokunun hər istinadını seçib sayın |
| `COUNTTABLE` | | Blok saylarının cədvəlini yerləşdirin |
| `CREDITS` | | Kitabxana kreditlərini çertyojda cədvəl kimi qoyur. Cədvəli çertyojdakı elementlərdən yeniləmək üçün yenidən işə salın. |
| `CURSORSIZE` | | Xaçın ölçüsü: 100 onu çertyojda kənardan kənara işlədir (Parametrlər › Kursor › Tam ekran) |
| `CUTCLIP` | | Obyektləri buferə kəsin (Ctrl+X): kopyalayın, sonra silin |
| `CYLINDER` | `CYL` | Silindr: mərkəz, radius və hündürlük (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blokları, onların atributlarını və obyekt xassələrini çertyojda cədvəl və ya CSV faylı kimi sadalayın |
| `DATALINK` | `DL` | CSV faylından fayl yadda qalan cədvəl, ona görə yenidən oxuna bilər |
| `DATALINKUPDATE` | `DLU` | Məlumat əlaqəsinin faylını yenidən oxuyun və onun cədvəllərini doldurun |
| `DCALIGNED` | `DCALI` | Ölçü məhdudiyyəti: nöqtələr, nöqtə və xətt və ya iki xətt arasında həqiqi məsafə |
| `DCANGULAR` | `DCANG` | Ölçü məhdudiyyəti: iki xətt və ya qövsün bucağı |
| `DCCONVERT` | | Məhdudlaşdırıla bilən həndəsədə çəkilmiş ölçüləri ölçü məhdudiyyətlərinə çevirin |
| `DCDIAMETER` | `DCDIA` | Ölçü məhdudiyyəti: çevrənin və ya qövsün diametri |
| `DCDISPLAY` | | Çertyojda ölçü məhdudiyyətlərini göstərin və ya gizlədin |
| `DCHORIZONTAL` | `DCHOR` | Ölçü məhdudiyyəti: üfüqi məsafə |
| `DCLINEAR` | `DCLIN` | Ölçü məhdudiyyəti: üfüqi və ya şaquli məsafə, yerləşdirdiyiniz yerdən |
| `DCRADIUS` | `DCRAD` | Ölçü məhdudiyyəti: çevrənin və ya qövsün radiusu |
| `DCVERTICAL` | `DCVER` | Ölçü məhdudiyyəti: şaquli məsafə |
| `DELBLOCKS` | | Blokları silin: hər istinad (iç-içə olanlar da, hər vərəqdə) və tərifləri |
| `DELCONSTRAINT` | `DELCON` | Seçdiyiniz obyektlərdən hər məhdudiyyəti (həndəsi və ölçü) çıxarın |
| `DELOPENING` | | Divardan qapı və ya pəncərəni çıxarın. |
| `DESCRIBE` | `DESC` | Çertyojda nə olduğunu deyin: neçə obyekt, hansı növ, nə qədər böyük, nə seçilib. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Seçimi təmizləyin (Esc) |
| `DETAILS` | `DET` | Firmanızın öz detalları, çəkdiyiniz şeylərə görə tapılır: tap, blok əlavə et, siyahı, sil, təklifləri yandır və ya söndür. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Mətndən diaqram çəkin: Mermaid axın diaqramı, PlantUML komponent diaqramı, D2, from-to siyahısı və ya draw.io XML, redaktə edə biləcəyiniz blok və konnektorlar kimi |
| `DIMALIGNED` | `DAL`, `DIMALI` | İki nöqtə arasında həqiqi məsafə |
| `DIMANGULAR` | `DAN`, `DIMANG` | İki xətt, qövsün və ya üç nöqtə ilə bucaq |
| `DIMARC` | `DAR` | Qövs uzunluğu ölçüsü: qövs boyunca məsafə, qövs simvolu ilə (DAR) |
| `DIMASZ` | | Ölçü parametri: ox ölçüsü |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Bir baza xəttdən yığılmış ölçülər |
| `DIMBREAK` | `DBREAK` | Ölçü və uzantı xətlərini başqa obyektlərlə kəsişdikləri yerdə kəsin (Avtomatik), iki nöqtə arasında (Əllə), və ya kəsikləri silin |
| `DIMCONSTRAINT` | `DCON` | Ölçü məhdudiyyətləri: xətti, düzxətli, bucaqlı, radius, diametr, çevir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Ölçülərin zənciri, hər biri əvvəlkinin sonundan |
| `DIMDEC` | | Ölçü parametri: onluq rəqəm |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Qövsün və ya çevrənin diametri |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Ölçüləri bağlı olduqları obyektlərdən azad edin (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ölçü mətnini dəyişin (Əsas, Yeni mətn, Fırlat) və ya uzantı xətlərini əyin (Maili) |
| `DIMEXE` | | Ölçü parametri: ölçü xəttindən kənara uzantı |
| `DIMEXO` | | Ölçü parametri: başlanğıcdan ofset |
| `DIMGAP` | | Ölçü parametri: mətn ətrafında boşluq |
| `DIMINSPECT` | | Yoxlama ölçüsü: dəyər ətrafında çərçivə, etiket və hissənin neçə dəfə yoxlanıldığı |
| `DIMJOGGED` | `DJO`, `JOG` | Qırıq radius ölçüsü: mərkəz uzaq olduqda yaxın nöqtədən çəkilən radius (DJO) |
| `DIMJOGLINE` | `DJL` | Xətti və ya düzxətli ölçü xəttinə sınma simvolu əlavə edin, məsafənin miqyasa uyğun çəkilmədiyini göstərmək üçün (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Üfüqi və ya şaquli məsafə (istənilən bucaq üçün R) |
| `DIMLUNIT` | | Ölçü parametri: uzunluq formatı (1 elmi, 2 onluq, 3 mühəndislik, 4 memarlıq, 5 kəsr) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinat ölçüsü: nöqtənin UCS başlanğıcından X və ya Y məsafəsi, qulaqla (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Seçilmiş ölçülərdə ölçü dəyişənlərini üstələyin, üslubunu dəyişmədən; Təmizlə ölçünü üslubuna qaytarır (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Qövsün və ya çevrənin radiusu |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Ölçünün nöqtələrini obyektlərə bağlayın ki, onlar hərəkət etdikdə izləsin və yenidən ölçsün (DRE) |
| `DIMSCALE` | | Ölçü parametri: ümumi miqyas (ölçülər × bu) |
| `DIMSPACE` | | Paralel xətti ölçülər arasında bərabər aralıq, baza ölçüdən hesablanır (0 xətləri düzləşdirir, Avtomatik mətn hündürlüyünün iki qatıdır) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Adlandırılmış ölçü üslublarını yaradın, dəyişdirin, cari təyin edin, silin, tətbiq edin və müqayisə edin (dialoq; komanda sətrində -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Ölçü mətnini ölçü xəttinin soluna, sağına və ya mərkəzinə köçürün və ya çevirin |
| `DIMTEXTUNIT` | `DTU` | Ölçü mətni mm, sm, m və ya km-də, ya da çertyojun öz vahidlərində: seçilmiş ölçülər, yoxsa yeni (DTU) |
| `DIMTXT` | | Ölçü parametri: mətn hündürlüyü |
| `DIST` | `DI` | İki nöqtə arasında məsafə və bucaq |
| `DISTRIBUTE` | | Seçilmiş obyektləri bərabər yayın, yan-yana və ya yuxarı-aşağı: mərkəzlər arasında bərabər addımlar və ya bərabər boşluqlar; kənardakı iki qalır |
| `DIVIDE` | `DIV` | DIVIDE (DIV): xətti, qövsü, çevrəni, polixətti, splaynı və ya ellipsi bərabər hissələrə bölən işarələr. Nöqtələr, və ya Blok ilə hər işarədə blok. |
| `DOCUMENTS` | `DOCS` | Sənədlər panelini açın: layihə qovluğu üçün çertyojları götürün-qaytarın, revizyonlar, buraxılış vəziyyətləri və təsdiq |
| `DOOR` | `DR` | Divara qapı qoyun. Klik etdiyiniz tərəf, qapının açılacağı tərəfdir. |
| `DRAWORDER` | | Çəkilmə sırasını dəyişin: obyektləri ön plana gətirin, arxaya göndərin, ya da başqa obyektlərin üstünə və altına qoyun. |
| `DUPLICATE` | `DUP` | Göstəricinin arxasınca hərəkət edən surət: qoymaq üçün klikləyin (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Çertyojun xassələri: başlıq, müəllif və s., həmçinin öz ad və dəyər cütləriniz |
| `DXFOUT` | | Çertyojun DXF R12 surətini yükləyin (Saxla öz formatını saxlayır) |
| `EATTEDIT` | `DDATTE` | Blok istinadının atributlarını redaktə edin: dəyərlər, mətn və xassələr, hər dəfə bir atribut |
| `ELLIPSE` | `EL` | Ox nöqtələri və digər yarım ox |
| `ERASE` | `E`, `DELETE` | Obyektləri silin |
| `EXPLODE` | `X` | Polixətləri, blokları və ölçüləri hissələrinə ayırın |
| `EXPORT` | `EXP` | Əlavə proqramın yazdığı fayl növündə çertyojun surətini saxlayın |
| `EXPORT3D` | `3DEXPORT` | 3D modeli ixrac edin: GLB, OBJ və ya STL |
| `EXPORTPOINTS` | `EXPPTS` | Nöqtələri, və bir atributu təsvir kimi olan blokların daxiletmə nöqtələrini CSV və ya TXT fayla yazın (PNEZD, PENZD və ya XYZ) BIM və survey proqramları üçün |
| `EXTEND` | `EX` | Obyektləri başqalarına çatana qədər uzadın: uca yaxın klik edin, bir neçəsi üzərində sürükləyin, ya da Shift+klik ilə kəsin |
| `EXTRIM` | | EXTRIM: bir kəsici kənar seçin, sonra bir tərəf. Kənarı kəsən hər şey həmin tərəfdə kəsilir. Gedəcək parçalar göstəricini hərəkət etdirdikcə görünür. |
| `EXTRUDE` | `EXT` | Qapalı 2D obyektləri bərk cisimlərə çıxarın (3D) |
| `FIELD` | | Mətnə, cədvəl xanasına və ya atributa sahə qoyun: tarix, fayl adı, vərəq nömrəsi, çertyoj xassəsi, obyektin sahəsi və ya uzunluğu, ya da düstur |
| `FILLET` | `F` | İki obyekt arasındakı küncü yuvarlaqlaşdırın və ya kvadratlaşdırın (R radius, P polixəttin hər küncü, M bir neçə) |
| `FIND` | | Mətndə, atribut dəyərlərində və ölçü mətnində sözləri tapın və əvəz edin |
| `FLATTEN` | | Seçilmiş obyektlərin hündürlüyünü (Z) və qalınlığını 0 edin, istifadə etdikləri bloklarda da |
| `FLOOR` | | Çəkmək üçün mərtəbəni seçin, birini əlavə edin, ya da seçilmişi birinə köçürün və ya surət çıxarın. |
| `FLOORLAYERS` | | Mərtəbələri adları Floor-Layer olan qatlara çevirin, mərtəbəsiz birinə gedən fayl üçün. |
| `FLOORS` | `FLR` | Mərtəbələr panelini açın: bir model fəzada mərtəbələri yığın. |
| `GCCOINCIDENT` | | Məhdudiyyət: iki nöqtə üst-üstə düşür, ya da nöqtə obyektdə qalır |
| `GCCOLLINEAR` | | Məhdudiyyət: iki xətt eyni xətt üzərində qalır |
| `GCCONCENTRIC` | | Məhdudiyyət: iki çevrə və ya qövs eyni mərkəzi paylaşır |
| `GCEQUAL` | | Məhdudiyyət: iki xətt eyni uzunluqda, ya da iki çevrə/qövs eyni radiusda qalır |
| `GCFIX` | | Məhdudiyyət: nöqtə və ya bütün obyekt yerində qalır |
| `GCHORIZONTAL` | | Məhdudiyyət: xətt (və ya iki nöqtə) üfüqi qalır |
| `GCPARALLEL` | | Məhdudiyyət: iki xətt paralel qalır |
| `GCPERPENDICULAR` | | Məhdudiyyət: iki xətt düz bucaq altında qalır |
| `GCSYMMETRIC` | | Məhdudiyyət: iki nöqtə, xətt və ya çevrə bir xətt boyunca bir-birinin güzgü əksi olur |
| `GCTANGENT` | | Məhdudiyyət: xətt və çevrə və ya qövs (və ya ikisi) toxunan qalır |
| `GCVERTICAL` | | Məhdudiyyət: xətt (və ya iki nöqtə) şaquli qalır |
| `GDSIN` | `GDS` | IC layout-u baxın (GDSII axın faylı): hər qat və məlumat növü çertyoj qatı kimi, düz, istifadəçi vahidlərində; yalnız baxış və ölçmə üçün (laboratoriya sınağı) |
| `GEOMCONSTRAINT` | `GCON` | Həndəsi məhdudiyyətlər: üfüqi, şaquli, paralel, toxunan, üst-üstə… |
| `GLBOUT` | | 3D modeli GLB (glTF) kimi ixrac edin |
| `GRADIENT` | `GD` | Sahəni bir və ya iki rəngin qradiyenti ilə doldurur |
| `GRID` | | Şəbəkəni təyin edin: xətlər arasında məsafə, hər N-ci xətt əsas xətt kimi, ON və ya OFF, və ya Auto (miqyası yenidən izləmək üçün) |
| `GRIDMOVE` | `GM` | Şəbəkə xəttini hərəkət etdirin və ondan asılı olanı aparın: divarlar uzanır, sütunlar, baloncuklar və etiketlər hərəkət edir, ölçülər izləyir. |
| `GROUP` | `G` | GROUP (G): seçilmiş obyektlərə onların paylaşdığı ad verin. Onlardan birinə klik etmək hamısını seçir. Adda Enter adsız qrup yaradır. |
| `GROUPEDIT` | | GROUPEDIT: qrupu dəyişin. Obyektlərindən birini seçin və ya adını verin, sonra obyekt əlavə edin və ya çıxarın, adını dəyişin, təsvirini dəyişin və ya klikin bütöv seçib-seçmədiyini deyin. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Sahəni bərk doldurma və ya naxışla doldurun: içinə klik edin və ya qapalı obyektləri seçin (H) |
| `HATCHEDIT` | `HE` | Ştrixlamanı dəyişin: naxış, miqyas, bucaq, başlanğıc və sərhədə bağlantısı. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ştrixlamadan sərhəd polixəttlərini yenidən yaradır, ona bağlı və ya bağlı olmadan |
| `HATCHTOBACK` | | Hər ştrixlamanı hər şeyin arxasına göndərin. |
| `HELP` | `?` | Bu siyahı |
| `HIDEOBJECTS` | | Seçilmiş obyektləri UNISOLATEOBJECTS-ə qədər gizlədin. Çertyojla saxlanmır. |
| `HISTORY` | `HIST` | HISTORY (HIST): bu çertyojun versiyaları — Studio saxlayanda bu kompüterdə saxlanılan surətlər və buludun versiyaları — açmaq, bərpa etmək və dəyişənləri rənglə göstərərək müqayisə etmək üçün. |
| `ID` | | Nöqtənin koordinatları |
| `IMAGE` | `IM` | CadCraft-a çertyojun istifadə etdiyi şəkil fayllarını verin (DWG yalnız onların yerini saxlayır) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Faylından şəkil (PNG və ya JPEG) yerləşdirin. |
| `IMAGECLIP` | `ICL` | Şəkli düzbucaqlıya və ya çoxbucaqlıya kəsin, ya da kəsiyini çıxarın. |
| `IMPORT` | `IMP` | Əlavə proqramın oxuduğu növdə faylı bu çertyoja idxal edin |
| `INSERT` | `I`, `DDINSERT` | Blok yerləşdirin (S miqyas, R fırlat); F DWG/DXF faylından, L kitabxanadan |
| `INTERSECT` | `IN` | Bərk cisimlərin ortaq olanlarını saxlayın (3D), ya da 2D regionların paylaşdığı sahəni |
| `ISODRAFT` | | ISODRAFT: izometrik çəkilişi yandırın və ya söndürün, və ya birbaşa Sol, Yuxarı və ya Sağ müstəvidə. Açıq olduqda Ortoqonal və polyar izləmə müstəvinin iki oxunu izləyir, şəbəkə izometrik çəkilir və ELLIPSE-də Isocircle olur. |
| `ISOLATEOBJECTS` | `ISOLATE` | Yalnız seçilmiş obyektləri göstərin; bu məkandakı hər şey UNISOLATEOBJECTS-ə qədər gizlidir. Çertyojla saxlanmır. |
| `ISOPLANE` | | ISOPLANE: izometrik çəkiliş müstəvisini seçin: Sol, Yuxarı və ya Sağ. Enter növbəti müstəviyə keçir, F5 kimi izometrik çəkiliş açıq olduqda. |
| `JOIN` | `J` | Uc-uca gələn xətləri, qövsləri və polixətləri bir polixətdə birləşdirin; eyni xətt üzərində olanları bir xətt (J) |
| `LASER` | `LASERCUT` | Lazer panelini açın: qatları lazer kəsici və ya qravüra cihazına göndərin (GRBL G-kodu) |
| `LASSOMODE` | | Boş yerdə basıb sürüklədikdə lasso (1) və ya düzbucaqlı (0) çəkilir |
| `LAYDEL` | | Qatı və onun üzərindəki hər obyekti silin (modeldə, vərəqlərdə və bloklarda) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Qat meneceri: bütün qatlar bir cədvəldə |
| `LAYERPANEL` | | Qatlar panelini göstərin |
| `LAYFRZ` | | Seçdiyiniz hər obyektin qatını dondurun |
| `LAYGROUP` | `LG` | Qatları Qatlar panelində qovluqlara qruplaşdırın. |
| `LAYISO` | | Seçilmiş obyektlərin qatlarını təcrid edin (hər digər qat söndürülür) |
| `LAYLOCKFADE` | | Kilidli qatdakı obyektlərin nə dərəcədə solğunlaşdığını və klikin onları seçib-seçmədiyini təyin edin. |
| `LAYMCUR` | | Seçdiyiniz obyektin qatını cari edin |
| `LAYMRG` | | Qatları birləşdirin: obyektləri hədəf qata köçür, birləşən qatlar silinir |
| `LAYOFF` | | Seçdiyiniz hər obyektin qatını söndürün |
| `LAYON` | | Bütün qatları yandırın |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Ştamp və görünüş pəncərəsi ilə yeni vərəq |
| `LAYTHW` | | Bütün qatları əridin |
| `LAYUNISO` | | LAYISO söndürdüyü qatları geri yandırın |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Köhnə Vyetnam şriftləri (TCVN3 / ABC şriftləri, məsələn .VnTime, və VNI şriftləri, məsələn VNI-Times) ilə yazılmış mətni Unicode-a çevirir. Belə mətn artıq oxunduğu kimi göstərilir; bu, onu həmişəlik yenidən yazır, say və bir geri alma addımı ilə. |
| `LENGTHEN` | `LEN` | Xətləri, qövsləri və polixətləri uzadın və ya qısaldın: miqdarla, faizlə, cəmə qədər, və ya sürükləməklə (LEN) |
| `LIBRARY` | `LIB` | Kitabxana paneli: elementləri yerləşdirin, yeniləmə yoxlayın, kreditlər |
| `LIMITS` | | Çertyojun sərhədlərini təyin edin: ON, OFF, və ya aşağı-sol və yuxarı-sağ künclər. LIMITS ON olduqda, onların xaricində olan nöqtələr rədd olunur |
| `LINE` | `L` | Düz parçalar, hər biri öz obyekti |
| `LINETYPE` | `LT`, `CELTYPE` | Yeni obyektlərin aldığı xətt tipi (qata görə, bloka görə, ya da adlandırılmış) |
| `LINKVIEWS` | `SYNCVIEWS` | Hər paneli birlikdə sürüşdürün və yaxınlaşdırın (bölünmüş ekran), iki çertyojun və ya revizyonun müqayisəsi üçün |
| `LISPEDIT` | `VLIDE` | LISPEDIT (və ya VLIDE) LISP redaktorunu açır: rutini yazmaq, yükləmək və sınamaq üçün pəncərə. Çertyoja yüklə hər formanı oxuyur, APPLOAD ilə faylı yükləyən kimi, və onun komandalarını yaradır. Seçimi işlət seçilmiş formaları, ya da kursorun içində olduğu formanı işlədir. Konsol rutinin nə çap etdiyini və hər xətası sətri ilə göstərir. Mətnin yanındakı uyğun mötərizə yazdıqca işarələnir və Enter yeni sətri girintiləyir. Yeni, Aç və Saxla .lsp faylı üzərində işləyir. Mətnin yanındakı siyahılar rutinin təyin etdiyi funksiyaları, bu LISP-də hələ olmayan çağırdığı funksiyaları və malik olduğu bütün funksiyaları göstərir. Pəncərə çertyoju bloklamır, buna görə rutin nöqtələr istəyə bilər; Stop və ya Esc işləyən rutini bitirir. |
| `LIST` | `LI`, `LS` | Tarixçədə obyektləri təsvir edin |
| `LTSCALE` | `LTS` | Çertyojun xətt tipi miqyası (hər kəsik və boşluq ona vurulur) |
| `LWDISPLAY` | `LWT` | Ekranda xətt qalınlığını göstərin və ya gizlədin (status sətrindəki LWT düyməsi) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Yeni obyektlərin aldığı xətt qalınlığı (qata görə, bloka görə, standart və ya mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model fəzasının altında xəritə qatları: çertyojun koordinat sistemi, kafellər, WMS, WMTS, ArcGIS, şəkillər |
| `MASSPROP` | | MASSPROP: regionların və qapalı obyektlərin kəsik xassələri: sahə, perimetr, mərkəz, momentlər və ətalət məhsulu, ətalət radiusları və əsas oxlar. Xətlər və qövslər üçün dəqiqdir. Hesabatı mətn faylına yaza bilər. |
| `MATCHPROP` | `MA`, `PAINTER` | Xassələri uyğunlaşdırın: bir obyektin qatını, rəngini və daha çoxunu digərlərinə kopyalayın (MA) |
| `MEASURE` | `ME` | MEASURE (ME): xətt, qövs, çevrə, polixətt, splayn və ya ellips üzərində verilmiş hər uzunluqda bir işarə, sizin seçdiyiniz uca yaxın tərəfdən. Nöqtələr, və ya Blok ilə hər işarədə blok. |
| `MEASUREGEOM` | `MEA` | Məsafə, radius, bucaq və ya sahəni ölçün (MEA) |
| `MINSERT` | | MINSERT: bloku bir dəfəyə sətir və sütunlarda yerləşdirin. Hər biri öz istinadıdır, buna görə istənilənini köçürə və ya silə bilərsiniz. |
| `MIRROR` | `MI` | Obyektləri xətt boyunca güzgü əksinə çevirin |
| `MLEADER` | `MLD`, `MLEAD` | Çoxqulaq: ox, qulaq və qeyd, bir obyekt kimi (MLD) |
| `MLEADERALIGN` | `MLA` | Çoxqulaqları onlardan biri ilə bir istiqamətdə düzləşdirin, bərabər aralıqla, ya da iki nöqtə arasında paylayın (MLA) |
| `MLEADERCOLLECT` | `MLC` | Bir neçə çoxqulağı birinə yığın: blokları sətir və ya sütunda, ya da qeydləri birinin altında biri (MLC) |
| `MLEADEREDIT` | `MLE` | Çoxqulağa qulaq xətləri əlavə edin və ya çıxarın; məzmununu mətn və blok arasında dəyişin (MLE) |
| `MLINE` | | Paralel xətləri bir yerdə çəkin, künclərdə birləşdirilmiş. |
| `MOVE` | `M` | Obyektləri baza nöqtəsi və ikinci nöqtə ilə köçürün |
| `MSPACE` | `MS` | Modeli açıq vərəqin görünüş pəncərəsi vasitəsilə işləyin (və ya görünüş pəncərəsinin içində iki dəfə klik). |
| `MTEXT` | `MT`, `T` | Abzas mətni: enini sürükləyin, sonra yerində yazın; Enter yeni abzas başladır (T) |
| `MVIEW` | `MV` | Vərəqdə modelə görünüş pəncərəsi |
| `NAMEDVIEW` | `NV`, `VIEWS` | Adlandırılmış görünüşlər: ekrandakı görünüşü (və ya pəncərəni) ad altında saxlayın və ona qayıdın (NV) |
| `NCOPY` | | Obyektləri blok istinadından və ya əlaqəli çertyojdan çertyoja, partlatmadan kopyalayın. |
| `NEARBY` | | Kursora yaxın olanı, ən yaxından başlayaraq, məsafə və tərəfi ilə deyin. |
| `NEW` | | Yeni çertyoj başladın |
| `OBJECTSCALE` | `OBJSCALE` | Anotativ mətn və ölçülərin şərh miqyasları: miqyas əlavə edin, birini silin, cari miqyası əlavə edin və ya siyahıya baxın (hər görünüş pəncərəsi onları öz miqyası üçün ölçüdə göstərir) |
| `OBJOUT` | | 3D modeli OBJ kimi ixrac edin |
| `OFFICESTANDARD` | `OFFSTD` | Ofis standartı: kağızdakı mətn hündürlükləri, qatlar, ştamp sahələri və şablonlar bir yazıda. Qüvvədə olanı və haradan gəldiyini göstərir; .json yazısını bu çertyoja İdxal edin, çertyojda olmayan ofis qatlarını əlavə edin, ştamp sahələrini sadalayın. |
| `OFFSET` | `O` | Məsafədə paralel surətlər |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: OFFSET polixəttin xarici küncündə boşluqları necə bağlayır. 0 seqmentləri uzadır, 1 qövs əlavə edir, 2 düz kəsik əlavə edir. Bu sessiya üçün saxlanılır. |
| `OLELIST` | `OLES` | Çertyojun daşıdığı OLE obyektlərini sadalayın və birinin şəklinin surətini seçdiyiniz yerə qoyun |
| `OPEN` | | Bu kompüterdən DWG və ya DXF açın |
| `OPENIN3D` | | Bu çertyojı 3D modelləşdirmə tətbiqində, yeni sekmədə açın (heç nə yüklənmir) |
| `OPTIONKEYS` | `OPTKEYS` | Komanda seçimlərinə öz hərflərinizi verin (ARRAY.PO, P), bir mətn faylında |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Obyekt tutma menyusunu açın: hansı tutmaların açıq olduğunu seçin. Həmçinin status sətrində Tutma üzərində sağ klik. |
| `OVERKILL` | | Təkrarlanan obyektləri silin və üst-üstə düşən və ya uc-uca gələn xətləri və qövsləri tolerantlıq daxilində birləşdirin. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrlər paneli: istifadəçi parametrləri və ölçü məhdudiyyətləri bir cədvəldə |
| `PARTSLIST` | `PLIST` | Kitabxanadan yerləşdirilmiş hər standart hissə və polad kəsiyi üçün hissə siyahısı cədvəli |
| `PASTEAREA` | `PAREA` | MarkupCraft-da kopyalanmış sahəni (Sahəni kopyala) düzgün ölçüdə şəkil kimi yapışdırın. |
| `PASTEBLOCK` | | PASTEBLOCK: kopyaladığınızı bir blok kimi yapışdırın. Bloka öz adı verilir; RENAME ona sizinkini verir. |
| `PASTECLIP` | | Buferi yapışdırın: kursoru izləyir, yerini klikləyin (Ctrl+V) |
| `PASTEORIG` | | Buferi obyektlərin kopyalandığı koordinatlarda yapışdırın (Ctrl+Shift+V) |
| `PDF` | | CadCraft-a çertyojun altlıqlarının istifadə etdiyi PDF faylları verin |
| `PDFADJUST` | | PDF altlığını solğunlaşdırın, kontrastı və ya monoxrom dəyişin və ya söndürün |
| `PDFATTACH` | `PDFATT` | PDF səhifəsini altlıq kimi əlavə edin (PDFATTACH) |
| `PDFCLIP` | | PDF altlığını düzbucaqlıya və ya çoxbucaqlıya kəsin |
| `PDFIMPORT` | `PDFIM` | PDF səhifəsinin xətlərini, doldurmalarını və mətnini çertyoj obyektlərinə çevirin (PDFIMPORT) |
| `PDFLAYERS` | | PDF altlığının öz qatlarını yandırın və ya söndürün |
| `PEDIT` | `PE` | Polixətti redaktə edin: bağla, aç, birləşdir, en, əyri uyğunlaşdır, splayn əyrisi, düzləşdir, xətt tipi yaratma, tərs; xətt, qövs və splaynlar əvvəlcə polixətt kimi təklif olunur |
| `PENPRESSURE` | | Qələm vuruşunun təzyiqi SKETCHFIX və SKETCHLIVE-un yaratdığı xətt qalınlığını təyin edib-etmədiyi (standart olaraq açıq). Bu brauzerdə saxlanılır. |
| `PHOTOSKETCH` | `PSK` | Kağızda əl eskizinin fotosunu miqyasda xətt və qövslərə çevirir, perspektivi düzləşdirir və hər qələm rəngi üçün öz qatı verir. |
| `PICKSTYLE` | | PICKSTYLE: qrupun bir obyektini seçəndə bütün qrupun seçilib-seçilməməsi (1, başlanğıc quruluşu) və ya yalnız o obyekt (0). Bu sessiya üçün saxlanılır. |
| `PLAN` | | Fırladın ki, UCS X oxu (cari ucs, saxlanmış Ucs və ya Dünya) ekranda üfüqi olsun. Çertyojda heç nə hərəkət etmir. |
| `PLINE` | `PL` | Xətt və qövs parçalarından polixətt |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF-ə çap: vərəq və ya model miqyasda |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Çap üslubu cədvəlləri: hər rəngin necə çap olunacağını təyin edin (rəng, qara, boz, mürəkkəb, xətt qalınlığı); çertyojla saxlanılır (STYLESMANAGER) |
| `POINT` | `PO` | Nöqtə obyektləri |
| `POINTCLOUD` | `PC` | Əlavə olunmuş nöqtə buludu: kəsik, hündürlük, qalınlıq, rəng, ölçü, görünən, yaxınlaşdırma, ayırma |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Çertyojun altına nöqtə buludunu əlavə edin (LAS, LAZ, XYZ, PTS) |
| `POLARANG` | | Polyar izləmə addımı dərəcə ilə (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Düzgün çoxbucaqlı |
| `PRESSPULL` | | Bərk cismin üzünü itələyin və ya çəkin (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Xassələr panelini açın (həmçinin Ctrl+1, və ya obyektə ikiklik) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Xassələr panelini pəncərənin kənarına qatlayın |
| `PSPACE` | `PS` | İşlədiyiniz görünüş pəncərəsindən çıxıb vərəqə qayıdın (və ya kənarında iki dəfə klik) |
| `PUBLISH` | `-PUBLISH` | Bir neçə və ya bütün vərəqləri bir PDF-ə çap edin (hər vərəq üçün səhifə və əlfəcin) |
| `PURGE` | `PU` | Heç nə istifadə etməyən blok tərifləri silin |
| `QDIM` | | Sürətli ölçü: bir neçə obyekti bir dəfəyə ölçün (davamlı, baza, pilləli, ordinat, radius və ya diametr) |
| `QPMODE` | `QP` | Kursorda Sürətli xassələr açıq və ya bağlı |
| `QSELECT` | `QS` | Sürətli seçmə: qat, rəng, ölçü və ya adı uyğun olan bir növ obyektin hamısı (QS) |
| `RASTERSNAP` | | Skan olunmuş vərəqlərin xətlərinə tutmanı açın və ya bağlayın. |
| `RAY` | | Şüa: nöqtədən konstruksiya xətti, bir istiqamətdə sonsuz. |
| `RECOVER` | | Zədələnmiş DXF və ya DWG-ni açır: oxuna bilməyəni rədd etmək əvəzinə atlayır, nəyin atlandığını deyir, sonra AUDIT kimi yoxlayıb düzəldir. |
| `RECTANG` | `REC`, `RECTANGLE` | İki künc və ya bağlı polixətt |
| `REDLINE` | `RDL` | Markapdan revizyona: MarkupCraft qırmızı xətt paketini oxuyur, hər dəyişikliyi qəbul və ya rədd edin, qəbul olunanlara revizyon jurnalı ilə bulud çəkin və cavab faylını saxlayın (RDL) |
| `REDO` | | Geri alınanı təkrarlayın |
| `REFCLOSE` | | Blokun yerində redaktəsini bitirin: saxlayın və ya dəyişiklikləri ləğv edin |
| `REFEDIT` | | Blokun istinadının olduğu yerdə bloku redaktə edin, qalan çertyoj solğunlaşdırılmış; REFCLOSE saxlayır |
| `REGEN` | `RE` | Bu sekmədə göstərilənləri çertyojdan yenidən qurun |
| `REGENALL` | `REA` | Hər sekmədə, panelda və açıq çertyojda göstərilənləri yenidən qurun |
| `REGION` | `REG` | REGION (REG): qapalı obyektlərdən və ya ucu-uca qapalı döngə təşkil edən xətt, qövs və polixəttlərdən düz sahələr (regionlar) yaradın. UNION, SUBTRACT və INTERSECT regionları birləşdirir, MASSPROP onların kəsik xassələrini verir. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Bir neçə skanı qeyd edin: seçilmiş nöqtə cütləri və ya hədəflərlə bir çərçivəyə qoyun, ICP ilə dəqiqləşdirin, bir LAS və ya E57 kimi ixrac edin |
| `REINIT` | | Ləqəb faylınızı yenidən yükləyin |
| `RENAME` | `-RENAME`, `REN` | Qatı və ya bloku adlandırın (hər obyekt və ya istinad izləyir) |
| `REVCLOUD` | `RC` | Revizyon buludu: düzbucaqlı, çoxbucaqlı, sərbəst əl yolu və ya obyekt ətrafında (RC) |
| `REVOLVE` | `REV` | Qapalı 2D obyektləri bir ox ətrafında bərk cisimlərə çevirin (3D) |
| `ROTATE` | `RO` | Obyektləri baza nöqtəsi ətrafında fırladın |
| `SAMPLES` | `SAMPLE` | CadCraft-ın nümunə çertyojlarından birini açın (memarlıq dəsti, as-built), öyrənmək üçün |
| `SAVE` | `QSAVE` | Çertyojun öz formatında (DWG və ya DXF) surətini yükləyin |
| `SAVEAS` | | Çertyojun DWG və ya DXF surətini yükləyin: hansını seçin |
| `SAYSEL` | | Seçilənin nə olduğunu deyin, hər obyekt üçün bir cümlə. |
| `SCALE` | `SC` | Obyektləri baza nöqtəsi ətrafında miqyaslayın |
| `SCALELISTEDIT` | `SCALELIST` | Çertyojun öz miqyaslarını əlavə edin, redaktə edin və silin; görünüş pəncərəsi və çap miqyası siyahılarında görünür və faylda saxlanılır (SCALELIST) |
| `SCANALIGN` | `SCL` | Skan olunmuş vərəqi iki nöqtəyə düzləşdirin: köçürün, fırladın və istəsəniz miqyaslayın. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Skan çertyojunu əlavə edin: PNG, JPEG və ya TIFF (bir səhifə və ya çoxsəhifəli faylın hamısı) və ya şəkil olan PDF səhifəsi. |
| `SCANCLEAN` | `SCC` | Skan olunmuş vərəqi qara-ağ edin və ləkələri silin. |
| `SCANCROP` | `SCR` | Skan olunmuş vərəqi pəncərəyə kəsin. |
| `SCANDESKEW` | `SCD` | Skan olunmuş vərəqin uzun xətlərinin bucağını tapın və bucağı qəbul etdikdən sonra vərəqi düzgün fırladın. |
| `SCANERASE` | `SCE` | Skan olunmuş vərəqin sahəsini silin: düzbucaqlı, çoxbucaqlı və ya lasso. |
| `SCANINFO` | `SCI` | Skan olunmuş vərəqin orijinal faylını və ondan sonra atılmış addımları göstərin. |
| `SCANSCALE` | `SCS` | Skan olunmuş vərəqi miqyaslayın: üzərində iki nöqtə seçin və aralarındakı həqiqi məsafəni yazın. |
| `SCANTRACE` | `SCT` | Skan olunmuş vərəqi yeni qatda xətt və qövslərə izləyin, təyin etdiyiniz tolerantlığa görə. Mətn və ştrixləmə rastr olaraq qalır. |
| `SELECT` | | İndi obyektləri seçin (növbəti komandada və ya sonra P, Əvvəlki üçün) |
| `SELECTALL` | `AI_SELALL` | Bu sekmədə redaktə edə biləcəyiniz hər obyekti seçin (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seçdiyiniz kimi olan hər obyekti seçin: eyni növ, qat və rəng (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Vərəq Dəsti panelini göstərir: bir çox çertyojdan vərəqlər, nömrəli, bir PDF kimi çap olunur. |
| `SHORTCUTS` | `KEYS` | İstənilən komandaya öz düyməniz verin (Ctrl və ya Alt ilə hərf, ya da sərbəst funksiya düyməsi), bu brauzerdə və ya masaüstü tətbiqdə saxlanılır. |
| `SHXFONTS` | `SHX` | Qovluqdan və ya fayllardan öz SHX şriftlərinizi verin; onları adlandıran mətn üslubları həmin şriftlərlə çəkilir (siyahı, sil, tərs) |
| `SKETCHFIX` | `SKF` | Sərbəst vuruşlar çəkin; hər biri təmiz xətt, çevrə, qövs, düzbucaqlı və ya polixətt olur, düzləşdirilir və digərlərinə birləşdirilir. |
| `SKETCHLIVE` | `SKL` | Qələmlə eskiz çəkin: hər vuruş qələm qaldırıldıqda dəqiq xətt, çevrə, qövs və ya düzbucaqlı olur, çertyoja tutulur və ölçüsü üzərinə yazıla bilər. |
| `SPLINE` | `SPL` | Nöqtələrdən keçən splayn çəkin (və ya nəzarət çoxbucaqlısı ilə), və ya polixətti ona çevirin |
| `SPLINEDIT` | `SPE` | Splaynı redaktə edin: uyğunlaşdırma nöqtələri, nəzarət nöqtələri və çəkilər, açın və ya bağlayın, tərs edin və ya polixətt çevirin |
| `SPLIT` | | Çertyoj sahəsini pəncərələrə bölün (model üzərində VPORTS kimi; vərəqdən də) |
| `STEELMEMBER` | `SMEMBER` | Standart kəsikdən 3D polad element: iki nöqtə (tir) və ya baza nöqtəsi və hündürlük (Sütun) |
| `STLOUT` | | 3D modeli STL kimi ixrac edin (millimetr) |
| `STRETCH` | `S` | Uzatma: uclar üzərində kəsişən pəncərəni sürükləyin, içərisindəki hərəkət edir, qalanı yerində qalır (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Mətn üslubları: yeni mətnin şrifti, hündürlüyü, eni və əyriliyi (dialoq; komanda sətrində -STYLE) |
| `SUBTRACT` | `SU` | Bərk cisimləri digərlərindən çıxarın (3D), ya da 2D regionları regionlardan |
| `SWBOUT` | `SWMACRO` | SolidWorks üçün modeli bir qısıtlanmış eskizə yenidən quran makro (.swb) yükləyin |
| `SWEEP` | | Qapalı 2D obyektləri yol boyunca (xətt, polixətt, qövs, çevrə) bərk cisimlərə süpürün (3D) |
| `TABLE` | `TB` | Cədvəl yaradın: sətir və sütunlar, ya da buferdə və ya CSV faylında olan cədvəl xanalarından |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Cədvəli redaktə edin: xanaya yazın, sətir və sütun əlavə edin və silin, ölçülər, birləşdirilmiş xanalar, düzləşdirmə |
| `TABLEEXPORT` | | Cədvəlin göstərdiyini CSV faylı kimi saxlayın |
| `TABLEPASTE` | `PASTETABLE` | Buferdəki cədvəl xanalarından cədvəl yaradın |
| `TABLESTYLE` | `TS` | Cədvəl üslubları: başlıq, sətir və məlumat sətirləri üçün mətn hündürlükləri, düzləşdirmə, kənar və sərhədlər |
| `TAGS` | | Blok istinadlarında etiketlər: etiket təyin edin (növ, icazəli dəyərlər, tətbiq olunduğu bloklar), seçilmiş istinadlara qoyun və CSV kimi saxlana bilən cədvəl kimi siyahılayın |
| `TEXT` | `DT`, `DTEXT` | Tək sətirli mətn; Enter növbəti sətri başladır |
| `TEXTEDIT` | `ED`, `DDEDIT` | Mətni yerində redaktə edin: mətni seçin (və ya ikiklik) (ED) |
| `TEXTMASK` | `TMASK` | Mətnin arxasına fon maskası qoyun (çertyojun fonu və ya rəng) və ya çıxarın. |
| `TEXTTOFRONT` | | Bütün mətn, ölçü və qulaqları hər şeyin önünə gətirin. |
| `TOOLBAR` | | Alət düymələrinin nə göstərdiyini seçin: ikonlar və mətn, yalnız ikonlar, ya da yalnız mətn (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Alət panelini pəncərənin yuxarı, aşağı, sol və ya sağında yerləşdirin |
| `TOOLBARROWS` | | Alət panelinin neçə sətir istifadə etdiyini seçin: pəncərəyə sığdırmaq, 2, ya da 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Çertyojun üstündəki zolaqları standart və ya yığcam edin |
| `TOUCHCROSSHAIR` | `TCX` | Barmaqla çəkiliş üçün ofsetli xaç: bir barmaq, barmağın üstündə və yanında duran xaçı hərəkət etdirir ki, barmaq seçim nöqtəsini örtməsin. Barmağı qaldırmaq heç nə seçmir; Klik düyməsi və ya ikinci barmaqla vurmaq xaçda seçir, Klik düyməsini tutub hərəkət etdirmək isə sürükləyir. Uzun basmaq və ya Enter düyməsi Enter-dir. İki barmaq sürüşdürür və yaxınlaşdırır. Seçimlər: ON, OFF, Auto (yalnız barmaq yeganə göstərici olduqda açıq), Distance, Side. |
| `TOUR` | `TUTORIAL` | Altı addımlı ilk çertyoj turunu yenidən başladın |
| `TRIM` | `TR` | Obyektləri digərlərinin kəsişdiyi yerə qədər kəsin: parçaya klik edin, bir neçəsi üzərində sürükləyin, ya da Shift+klik ilə uzadın |
| `TRIMEXTENDMODE` | | TRIM və EXTEND necə başlayır: 1 Sürətli (hər obyekt kəsici kənar və ya sərhəddir), 0 Standart (əvvəlcə kənarları seçin) |
| `TTR` | | Verdiyiniz radiusla iki obyektə toxunan çevrə (CIRCLE T ilə eyni). |
| `TURNLEFT` | | Görünüşü 90° sola fırladın (saat əqrabının əksinə): UCS Z -90, görünüş izləyir. Çertyojda heç nə hərəkət etmir. |
| `TURNRIGHT` | | Görünüşü 90° sağa fırladın (saat əqrabı istiqamətində): UCS Z 90, görünüş izləyir. Çertyojda heç nə hərəkət etmir. |
| `TURNWORLD` | | Dünyaya qayıdın: UCS Dünya, görünüş yenidən üfüqidir. |
| `TXT2MTXT` | `T2M` | Tək sətirli mətnləri bir abzas mətninə birləşdirin, yuxarıdan aşağı. |
| `UCS` | | Öz koordinat sisteminiz: başlanğıc və X oxu (başlanğıc, Z bucağı, 3point, OBject, Previous, World, NAmed). Yazdığınız nöqtələr, ortoqonal, polyar izləmə, şəbəkə və yeni mətn ona tabe olur; görünüş onun X oxunu üfüqi edir. Çertyojda heç nə hərəkət etmir. |
| `UNDO` | `U` | Son komandanı geri alın |
| `UNGROUP` | | UNGROUP: qrupları ayırın. Qrupların obyektlərini seçin və ya ad verin. Obyektlər çertyojda qalır. |
| `UNION` | `UNI` | Bərk cisimləri birləşdirin (3D), ya da 2D regionları bir regionda |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS və ya HIDEOBJECTS ilə gizlədilmiş hər obyekti yenidən göstərin. |
| `UNITS` | `UN`, `DDUNITS` | Uzunluqların necə göstərilib yazıldığı: onluq, fut və düym, kəsrlər (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Sahələri yenidən hesablayın və onların özlərinin nə vaxt yenilənəcəyini seçin |
| `USDOUT` | | 3D modeli USD kimi ixrac edin (.usda mətn, .usdc ikili və ya .usdz paketi) |
| `VIEW` | `-VIEW`, `V` | Standart 3D görünüşlər, perspektiv və ya paralel (3D) |
| `VIEWBASE` | `FLATSHOT` | Bərk cisimlərin düz 2D görünüşünü (ön, yuxarı, yan və ya izometrik, gizli xətlər nöqtəli) vərəqdə və ya modeldə yerləşdirin |
| `VIEWLABEL` | `VL` | Vərəqdə görünüş başlığı: görünüş pəncərəsinin görünüş adını göstərir və onunla dəyişir. |
| `VOICE` | | Səsli komandaları yandırın və ya söndürün. Bu kompüterdə tanınır. |
| `VPCLIP` | | Vərəq görünüş pəncərəsini bağlı obyektə və ya çəkilmiş çoxbucaqlıya kəsir; Sil onu yenidən düzbucaqlı edir |
| `VPLAYER` | | Qatları yalnız bəzi görünüş pəncərələrində dondurun və ya açın (Dondur, Aç, Sıfırla) və yeni pəncərələrin başlanğıcda hansı qatları dondurulmuş açacağını seçin (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Çertyoj sahəsini hər biri öz görünüşü ilə pəncərələrə bölün (vərəqdə: MVIEW kimi görünüş pəncərəsi) |
| `VPVIEW` | | Görünüş pəncərəsinin göstərdiyini təyin edin: model üzərində pəncərə seçin |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D görünüşün vizual üslubu: kölgəli, kənarlı, gizli xətt, məftil çərçivə, rentgen |
| `WALL` | `WA` | 2D divarları polixətt kimi çəkin. Birləşirlər və qapı və pəncərə daşıyırlar. |
| `WALLARC` | `WARC` | Divar qövsü çəkin. Plan divarları düzdür, buna görə qövs hər biri 15 dərəcə olan qısa düz divarlar kimi çəkilir. |
| `WALLDELSEG` | | İki nöqtə arasında divarın bir parçasını silin. Qalanı bir və ya iki divar kimi qalır. |
| `WALLDIM` | | Ölçü üçün yeni dəyər yazın: uzaq ucdakı divar özünə görə düz köçür, birinci ucdakı divar saxlanılır və ona birləşmiş divarlar izləyir. |
| `WALLDISJOIN` | | Bir ucuna yaxın divarı seçin ki, o uc üçün birləşmələr qadağan olsun: uc düz çəkilir və heç nə ona tabe olmur. Yenidən seçin ki, icazə olsun. |
| `WALLGRID` | | Divarı şəbəkə xəttinə kilidləyin: boyunca, ya da bir ucu onun üzərində. Xətti GRIDMOVE ilə hərəkət etdirin, divar izləyir. |
| `WALLHOLD` | | Düzləşdirin və kilidləyin: divar başqa divara qarşı yerini saxlayır (öz xəttində və ya olduğu məsafədə). Biri hərəkət edərsə, digəri izləyir. |
| `WALLHOLDDIM` | | İki paralel divar arasındakı məsafəni kilidləyin. Biri hərəkət edərsə, digəri məsafəni qorumaq üçün izləyir. |
| `WALLHOLDS` | | Divarlardakı kilidləri sadalayın. |
| `WALLJOINS` | | Köhnə çertyojun hər divarına id verin və onlar arasındakı birləşmələri saxlayın. Bu, etdiyiniz ilk dəyişiklikdə də olur. |
| `WALLJOINSTYLE` | | Iki divarın uc-uca görüşdüyü küncü klikləyin və necə çəkildiyini dəyişin: gönyə, düz, kvadrat et. T hansı divarın keçdiyini dəyişir. |
| `WALLOFFSET` | `WO` | Divarı məsafədə özünə görə düz köçürün (ona birləşmiş divarlar izləyir), və ya həmin məsafədə surət yaradın. |
| `WALLPICK` | | Çertyojda xətt və ya polixətt üzərində divarlar yaradın; Bəli desəniz, ona birləşmiş xətlər də. |
| `WALLPOLY` | `WP` | 3 ilə 64 tərəfli düzgün çoxbucaqlı ətrafında divarlar çəkin, POLYGON kimi. |
| `WALLRECT` | `WR` | İki əks künc və ya dörd birləşmiş divar çəkin, RECTANG kimi. |
| `WALLREJOIN` | | Divarın iki hissəsini yenidən bir divar edin. Birincisi çertyojdakı yerini saxlayır. |
| `WALLROT` | | Dörd birləşmiş divarı istənilən bucaqda fırladılmış düzbucaqlı kimi çəkin: birinci tərəf, sonra digər tərəf nə qədər uzaqdadır. |
| `WALLSPLIT` | `WS` | Divarı bir nöqtədə və ya başqa divarın keçdiyi yerdə ikiyə bölün. Hissələr boşluq və ya sərbəst uc istəməsəniz birləşmiş qalır. Qapı və pəncərələr öz hissəsi ilə gedir. |
| `WALLSPLITGAP` | | Divarı boşluq qoyaraq bölün: boşluğu yazın, divarı seçin, sonra nöqtəni. Hissələr sərbəst uclarını saxlayır və yenidən birləşdirilə bilər. |
| `WALLSTRETCH` | | Pəncərə ilə uzadın: içindəki divar uclarını hərəkət etdirir, tamamilə içərdəki divarlar bütöv hərəkət edir, yan tərəfə dirənən divarlar onlarla birlikdə sürüşür. |
| `WALLTAN` | | Divarı onu boyunca tərk edən qövslə davam etdirin (qısa düz divarlar kimi çəkilir). |
| `WALLTRACE` | | Klik etdiyiniz nöqtə ətrafında ən kiçik bağlı xətt və divar sahəsinin ətrafında divarlar yaradın. |
| `WALLUNHOLD` | | Divardan kilidləri çıxarın (və ona bağlı digər divarların kilidlərini). |
| `WBLOCK` | `W`, `-WBLOCK` | Blok, bir neçə obyekt və ya bütün çertyojı yeni DWG və ya DXF fayla yazın (W) |
| `WEDGE` | `WE` | Kələ: iki künc və hündürlük; birinci küncdən aşağı meyl edir (3D) |
| `WHEREAMI` | `WHERE` | Kursorun harada olduğunu deyin. |
| `WHOHAS` | | Çertyojun kimin açıq olduğunu deyir. CadCraft Studio hər açıq çertyojun yanında kiçik kilid faylı saxlayır (Plan.dwg.cclock: kim, nə vaxtdan, hansı versiya) və bağlananda silir. Seçimlər: Cari (açıq çertyoj), Fayl (birini seçin), Qovluq (açıq olan hər çertyoj), Yol (tam yol yazın), Ad (digərlərinin gördüyü ad). Beş dəqiqə yenilənməyən kilid köhnə sayılır. Brauzerdə mövcud deyil. |
| `WINDOW` | `WN` | Divara pəncərə qoyun. |
| `XATTACH` | `XA` | Başqa DWG və ya DXF-i bu çertyoja bağlayın, yalnız oxunan (XREF onları siyahılayır və yenidən yükləyir) |
| `XCLIP` | `XC` | Blok istinadlarını və bağlı çertyojları düzbucaqlıya və ya çoxbucaqlıya kəsin, ya da kəsiyi çıxarın. |
| `XLINE` | `XL` | Konstruksiya xətti, hər iki tərəfdən sonsuz: iki nöqtədən, üfüqi, şaquli, bucaqla, bucaqı ikiyə bölən və ya xətdən ofsetlə. |
| `XREF` | `XR`, `-XREF` | Bağlı çertyojlar (xarici istinadlar): siyahı, əlavə et, yenidən yüklə, birləşdir, ayır |
| `ZOOM` | `Z` | Hüdudlar, ya da pəncərə |
