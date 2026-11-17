---
title: Komanda xəritəsi: nə yazmaq
summary: CadCraft-ın bütün komandaları qısa adları ilə, A-dan Z-yə, proqramın özündən alınmış və digər çertyох proqramlarından fərqli olan vərdişlərlə.
keywords: komanda xəritəsi, komandalar, ləqəblər, qısa adlar, digər proqramlardan keçid, komanda siyahısı, nə yazmaq, silmək, kəsmək, ekvivalent, fərqlər
from: 3bdfd3e6
---

CadCraft digər çertyoj proqramlarından tanınan komanda adlarını və qısa adları qəbul edir: xətt üçün `L`, kəsmək üçün `TR`, silmək üçün `E` yazın. Ona görə də əksər komandalar üçün öyrənilməli cədvəl yoxdur: tanıdığınız ad burada da eynidir. Aşağıdakı siyahı proqramın özündən alınmış, CadCraft-ın malik olduğu bütün komandalardır. {{key:Enter}} son komandanı təkrarlayır; komanda sətrində `HELP` eyni siyahını çap edir.

Az sayda komanda var ki, eyni deyil və ya hələ qurulmayıb:

- **Saxla** brauzerdə nüsxəni yükləyir ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio-da isə faylı yazır. Bax: [Digər çertyoj proqramlarından keçid](topic:coming-from).
- **PLOT** PDF yaradır (həmçinin PNG və SVG), çap üslubu cədvəli ilə; səhifə quraşdırma meneceri yoxdur.
- **DIMSTYLE** və **PEDIT** qurulub; **PEDIT**-də Edit-vertex seçimi yoxdur (bunu tutacaqlar edir).
- **TABLE** qurulmayıb; {{cmd:XREF}}, {{cmd:SPLINE}} və {{cmd:WBLOCK}} qurulub.
- Rutinin öz komandaları (AutoLISP `C:NAME`) onu {{cmd:APPLOAD}} ilə yüklədikdən sonra görünür; burada siyahılanmır.

## Bütün komandalar (398)

| Komanda | Qısa adlar | Nə edir |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Sol düymə ilə 3D görünüşü fırladır |
| `ACCESS` | `AX` | Görmədən çertyoj rejimini aç və ya bağla: nəticələr ekran oxuyucusu ilə səsləndirilir, çertyojda klaviatura kursoru, tutma səsləri və səsli komandalar. |
| `ALIASEDIT` |  | Komanda ləqəblərini bir mətn faylında redaktə et (tanış L, *LINE formatı) |
| `ALIGN` | `AL` | Obyektləri elə köçür və fırlat ki, mənbə nöqtələri təyinat nöqtələrinə düşsün (bir, iki və ya üç cüt), istəsəniz miqyasını da dəyiş |
| `ALIGNPANEL` | `ALP` | Düzləşdirmə və paylama panelini aç |
| `ALIGNTO` |  | Seçilmiş obyektlərin sol, mərkəz, sağ, yuxarı, orta və ya alt kənarlarını düzləşdir: seçimə, birinci və ya son seçilmiş obyektə və ya nöqtəyə görə |
| `ANNOALLVISIBLE` | `ANNOALL` | Anotativ obyektləri hər miqyasda göstər, ya da yalnız görünüş pəncərəsinin (və ya çertyojun) miqyası onların siyahısında olduqda |
| `ANNOSCALE` | `CANNOSCALE` | Çertyojun anotasiya miqyasını təyin et: anotativ mətn və ölçülər eyni ölçüdə çap olunsun deyə dəyişdirilir |
| `APPLOAD` | `AP` | Tətbiqləri yüklə: LISP rutinləri (.lsp) və onların dialoq faylları (.dcl); Başlanğıc Dəsti (AP) |
| `ARC` | `A` | Qövs: 3 nöqtə, Başlanğıc/Mərkəz/Son, Başlanğıc/Mərkəz/Bucaq, Başlanğıc/Mərkəz/Uzunluq, Başlanğıc/Son/Bucaq, Başlanğıc/Son/İstiqamət, Başlanğıc/Son/Radius, Mərkəz/Başlanğıc/Son, Mərkəz/Başlanğıc/Bucaq, Mərkəz/Başlanğıc/Uzunluq, Davam et |
| `AREA` | `AA` | Nöqtələrlə və ya obyektin sahəsi və perimetri; Əlavə et və Çıx cəmi saxlayır (AA) |
| `ARRAY` | `AR` | Sətir və sütunlarla nüsxələr, ya da mərkəz ətrafında (AR) |
| `ARRAYASSOCIATIVITY` |  | Təyin edir ki, ARRAY komandaları redaktə edilə bilən massivlər (1) yaratsın, yoxsa sadə nüsxələr (0) |
| `ARRAYCLOSE` |  | Massivin mənbə obyektlərinin redaktəsini bitirir |
| `ARRAYEDIT` |  | Associative seçimi ilə yaradılmış massivi dəyişir: saylar, intervallar, mənbə obyektləri, bir element |
| `ARRAYPATH` |  | Xətt, qövs, polixətt və ya digər əyri boyunca obyektlərin nüsxələri |
| `ARRAYPOLAR` |  | Mərkəz nöqtəsi ətrafında nüsxələr |
| `ARRAYRECT` |  | Sətir və sütunlarla nüsxələr |
| `ASBUILT` | `ASB` | ASBUILT ekipin ölçdüyü faktiki nöqtələri (CSV / TXT, EXPORTPOINTS yazdığı kimi) oxuyur və onları çertyojun nöqtələri ilə müqayisə edir: tolerantlıq daxilində və ya xaricində, ölçülməyib, artıq. Onları AS-BUILT qatında qeyd edir və CSV hesabatı yükləyir. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Atributu təyin et (blokun dəyər istədiyi etiket), blokun içinə qoymaq üçün (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Blok referansının atribut dəyərlərini komanda sətrində bir-birinin ardınca redaktə et (Enter dəyəri saxlayır) |
| `ATTSYNC` |  | Blokun referanslarını atribut təriflərinə uyğunlaşdır: yeniləri standart dəyərləri ilə əlavə olunur, silinənlər çıxarılır, mövqe və mətn sıfırlanır; dəyərlər saxlanılır |
| `AUDIT` |  | Açıq çertyojda zədəni yoxlayır: sonlu olmayan ədədlər, ölçüsü olmayan obyektlər, itmiş qatlar, bloklar, üslublar və xətt tipləri, özünü ehtiva edən bloklar, paylaşılan identifikatorlar, pozulmuş ölçülər və ştrixləmələr. Tapdıqlarını növünə görə siyahılayır və düzəltməzdən əvvəl soruşur; düzəliş bir geri qaytarma addımıdır. |
| `AUNITS` | `ANGUNITS` | Bucaqların necə göstərilməsi və yazılması: onluq dərəcə, dərəcə-dəqiqə-saniyə və ya N45°23'30"E kimi istiqamətlər (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Çertyojda avtomatik tamamlama açıq və ya bağlı, ya da çertyojun nümunələrinin indi nə təklif etdiyini siyahıla. |
| `AUTOCONSTRAIN` |  | Həndəsə artıq yaxın olduqda üst-üstə düşmə, üfüqi və şaquli məhdudiyyətlər əlavə et |
| `AUTODIM` | `ADIM` | Qaydalarla ölçü: ümumi ölçü, tərəflər boyunca zəncirlər, açılışlar, deşik diametrləri və tor intervalı, artıq ölçülənləri təkrarlamadan. |
| `AUTOSHEET` | `ASH` | Vərəqləri özü qurur: kağız və standart miqyasları seçir və hər görünüşü başlıq bloku ilə yerləşdirir. |
| `BATTMAN` |  | Blok atributu meneceri: blokun atributlarının sırası, etiketləri, sorğuları, standart dəyərləri və rejimləri, sonra referansları yenilənir |
| `BCLOSE` |  | Blok redaktorunu bağla: bloku saxla və ya dəyişiklikləri at |
| `BCONVERT` |  | BCONVERT təkrarlanan həndəsəni tapır və onu blok referanslarına çevirir. Təkrarlanan obyektləri seçin: açıq məkanda eyni həndəsəyə malik, yerdəyişən və istənilən bucaqla fırladılmış hər digər obyekt dəsti tapılır; Güzgülü və ya Miqyaslı aktiv olduqda güzgü şəkilləri və başqa ölçüdə nüsxələr də tapılır. Yeni bloka ad və baza nöqtəsi verin; seçim və hər nüsxə ona referans olur, hər biri öz fırlanma və miqyası ilə. Və ya Blok seçib mövcud blokun adını yazın ki, onun obyektlərinin sərbəst nüsxələri tapılsın. Nüsxə eyni qat, rəng, xətt tipi və xətt qalınlığına malik olmalıdır, Xüsusiyyətlər Nəzərə alma təyin olunmayıbsa. Kilidli qatlardakı obyektlərə toxunulmur. Bir geri qaytarma addımı. |
| `BEDIT` | `BE` | Blok redaktoru: blokun obyektlərini və atributlarını redaktə et; BCLOSE saxlayır (BE) |
| `BLEND` |  | BLEND: iki açıq əyrinin uclarını birləşdirmək üçün ucları yaxınlığında seçilən spline. CON (davamlılıq): Toxunan hər iki istiqaməti izləyir, Hamar isə həm də onların əyilməsini izləyir. |
| `BLOCK` | `B`, `BMAKE` | Obyektlərdən blok yarat (onlar bir referans olur) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bir blokun bütün referansları başqa blokun referansına çevrilir, eyni yerdə, eyni miqyas və fırlanma ilə. İki blokda olan atributların dəyərləri saxlanılır. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE Bloklar panelini kursor filtrdə olmaqla göstərir. Panel hər blokun şəklini göstərir (ən son yerləşdirilənlər birinci), siyahı və ya şəbəkə şəklində; şəkli klikləyin və ya çertyoja sürükləyin ki, blok INSERT ilə yerləşsin. Kitabxanalar altında öz DWG və ya DXF faylınızı əlavə edin: onun blokları şəkilləri ilə siyahılanır və birini yerləşdirəndə bu çertyoja kopyalanır. CadCraft Studio-da çertyoj qovluğu da əlavə oluna bilər; fayllar və qovluqlar yadda saxlanılır. |
| `BOMEDIT` | `BOMCOLUMNS` | Material siyahısı cədvəlinin sütunları, qruplaşdırılması, sıralanması, başlığı, cəmləri və qeydləri |
| `BOMEXPORT` |  | Material siyahısı cədvəlini .csv faylı kimi saxla |
| `BOMTABLE` | `BOM` | Bir zonanın və ya bütün çertyojun canlı material siyahısı cədvəli |
| `BOMUPDATE` |  | Bütün material siyahısı cədvəllərini indi yenilə, dondurulmuşlar da daxil |
| `BOMZONE` | `BZONE` | Material siyahısı üçün çertyojun adlandırılmış sahəsi: iki künc, çoxbucaqlı və ya bağlı obyektin konturu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): bağlı sahənin içində nöqtə göstərin və ətrafında bağlı polixətt alın. Qövslər qövs olaraq qalır. Adalar daxilindəki sahələri də konturlayır. |
| `BOX` |  | Qutu: iki künc və hündürlük (3D) |
| `BPARAMETER` | `BPARAM` | Hələ qurulmayıb: blokda parametr (məsələn Görünürlük) əlavə etmək. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blok parametrləri: düsturlu adlandırılmış parametrlər və bir blokda bir neçə görünürlük parametri. Blok redaktorunda işləyir (seçilmiş obyektləri bir vəziyyətə təyin edin) və seçilmiş referansda (öz dəyərləri və vəziyyətləri). |
| `BREAK` | `BR` | Xətti, qövsü, çevrəni və ya polixətti iki nöqtə arasında kəs (BR) |
| `BREAKATPOINT` |  | Xətti, qövsü və ya polixətti bir nöqtədə iki hissəyə böl |
| `BREAKLINE` |  | Qırılma simvolu olan xətt çək; onun ölçüsü və uclardan kənara uzanması yadda saxlanılır. |
| `BREPLACE` |  | BREPLACE bir bloku başqası ilə əvəz edir. Seçilmiş: blok referanslarını seçin və yerinə istifadə ediləcək bloku adlandırın. Hamısı: bir bloku və onun əvəzini adlandırın, bütün məkanlarda və digər blokların içində hər referans dəyişir. Referans öz yerini, miqyasını, fırlanmasını və qatını, həm də hər iki blokda olan atributların dəyərlərini saxlayır; yeni blokda yeri olmayan dəyərlər atılır və adı çəkilir. |
| `BSEARCH` |  | BSEARCH blokları tapır. Ad: blok adının bir hissəsi, ya da * və ? ilə şablon. Atribut: referans atributlarında olan dəyər (və ya TAG=dəyər). Həndəsə: obyektləri və ya bir blok referansını seçin; forması ən azı 85% oxşar olan bloklar ən yaxşısı birinci olmaqla siyahılanır; ölçü, fırlanma və güzgülənmə nəzərə alınmır. Açıq məkanda tapılan referanslar növbəti komanda üçün seçilir. |
| `BURST` |  | Blok referanslarını partlat və atributların dediklərini saxla: hər dəyər atributun qatında mətn olur. |
| `BVHIDE` | `BVH` | Blok redaktorunda: cari görünürlük vəziyyətində obyektləri gizlət. |
| `BVSHOW` | `BVSH` | Blok redaktorunda: cari görünürlük vəziyyətinin gizlətdiyi obyektləri göstər (seçmək üçün solğun göstərilir). |
| `BVSTATE` | `BVS` | Blok redaktorunda, görünürlük vəziyyətləri olan blokda: vəziyyətə keç, ya da birini əlavə et, adını dəyiş və ya sil. |
| `CAL` |  | Uzunluq və ya ədədi hesabla: + − * / və mötərizələr, istənilən yerdə yazdığınız kimi |
| `CENTERLINE` | `CL` | İki xətt arasında mərkəz xətti: onların ortasında, ya da kəsişdikdə bissektrisa boyunca (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Mərkəz işarəsi: çevrənin və ya qövsün mərkəzində xaç, ondan bir az kənara qədər mərkəz xətləri ilə (CM) |
| `CHAMFER` | `CHA` | İki xətt arasındakı künci kəs ([iki məsafə (D)], [uzunluq və bucaq (A)], [polixəttin hər küncü (P)]) |
| `CHSPACE` |  | CHSPACE: obyektləri görünüş pəncərəsi vasitəsilə vərəq ilə model arasında köçür. Onlar miqyaslanır və fırladılır ki, o biri tərəfdən eyni görünsün. Vərəqdə modelə gedir; görünüş pəncərəsi ilə (MSPACE) işləyəndə vərəqə gəlir. |
| `CIRCLE` | `C` | Mərkəz və radius, diametr, 2 və ya 3 nöqtə |
| `CLASS` |  | Seçilmiş obyektləri sinifə qoy, ya da heç nə seçilmədikdə aktiv sinfi təyin et (? onları siyahılayır) |
| `CLASSES` | `CLS` | Siniflər paneli: siniflər obyektləri qatlar arasında sıralayır; onları göstər, gizlət və üslublaşdır, hər görünüş pəncərəsində ləğv et (CLS) |
| `COMMANDLINE` | `CMDLINE` | Komanda sətrini yerləşdir və ya üzdür, bir sətir et, tarixçə sətirlərini təyin et və ya tarixçəni aç (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ölçü üslublarını, mətn üslublarını, qatları, vərəqləri və ya vahidləri müqayisə et: bu çertyojda ikisi və ya bu çertyojla başqa açıq olan arasında, dəyəri birindən digərinə kopyalaya bilərsiniz. |
| `CONSTRAINTBAR` | `CBAR` | Məhdudiyyət çubuqlarını göstər və ya gizlət (Showall / Hideall, ya da obyektə görə) |
| `COPY` | `CO`, `CP` | Obyektləri, klikləyən qədər kopyala |
| `COPYBASE` |  | Seçdiyiniz baza nöqtəsi ilə obyektləri buferə kopyala |
| `COPYCLIP` |  | Obyektləri buferə kopyala (Ctrl+C); PASTECLIP yerləşdirir |
| `COUNT` | `BCOUNT` | Blok referanslarını say: birini seçin, onun blokunun hər referansı seçilir və sayılır |
| `COUNTTABLE` |  | Blok saylarının cədvəlini yerləşdir |
| `CREDITS` |  | Kitabxana kreditlərini çertyojda cədvəl kimi qoyur. Cədvəli çertyojdakı elementlərdən indi yeniləmək üçün yenidən işə salın. |
| `CURSORSIZE` |  | Xaçın ölçüsü: 100 onu çertyojun bir kənarından digərinə qədər işlədir (Parametrlər › Kursor › Tam ekran) |
| `CUTCLIP` |  | Obyektləri buferə kəs (Ctrl+X): kopyala, sonra sil |
| `CYLINDER` | `CYL` | Silindr: mərkəz, radius və hündürlük (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blokları, onların atributlarını və obyekt xüsusiyyətlərini çertyojda cədvəl və ya CSV faylı kimi siyahıla |
| `DATALINK` | `DL` | CSV faylından cədvəl; faylı yadda saxlayır ki, yenidən oxuna bilsin |
| `DATALINKUPDATE` | `DLU` | Verilənlər əlaqəsinin faylını yenidən oxu və cədvəllərini doldur |
| `DCALIGNED` | `DCALI` | Ölçü məhdudiyyəti: nöqtələr, nöqtə və xətt, ya da iki xətt arasında həqiqi məsafə |
| `DCANGULAR` | `DCANG` | Ölçü məhdudiyyəti: iki xətt arasında və ya qövsün bucağı |
| `DCCONVERT` |  | Məhdudiyyət verilə bilən həndəsədə çəkilmiş ölçüləri ölçü məhdudiyyətlərinə çevir |
| `DCDIAMETER` | `DCDIA` | Ölçü məhdudiyyəti: çevrənin və ya qövsün diametri |
| `DCDISPLAY` |  | Çertyojda ölçü məhdudiyyətlərini göstər və ya gizlət |
| `DCHORIZONTAL` | `DCHOR` | Ölçü məhdudiyyəti: üfüqi məsafə |
| `DCLINEAR` | `DCLIN` | Ölçü məhdudiyyəti: üfüqi və ya şaquli məsafə, yerləşdirdiyiniz yerdən |
| `DCRADIUS` | `DCRAD` | Ölçü məhdudiyyəti: çevrənin və ya qövsün radiusu |
| `DCVERTICAL` | `DCVER` | Ölçü məhdudiyyəti: şaquli məsafə |
| `DELBLOCKS` |  | Blokları sil: hər referans (iç-içə olanlar da, hər vərəqdə) və təriflər |
| `DELCONSTRAINT` | `DELCON` | Seçdiyiniz obyektlərdən bütün məhdudiyyətləri (həndəsi və ölçü) sil |
| `DELOPENING` |  | Qapını və ya pəncərəni divardan çıxar. |
| `DESCRIBE` | `DESC` | Çertyojda nə olduğunu deyir: neçə obyekt, hansı növdən, nə qədər böyük, nə seçilib. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Seçimi təmizlə (Esc) |
| `DETAILS` | `DET` | Firmanızın öz detalları, çəkdiyiniz üçün tapılır: tap, blok əlavə et, siyahıla, sil, təkliflərə aç və ya bağla. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Mətndən diaqram çək: Mermaid axın sxemi, PlantUML komponent diaqramı, D2, from-to siyahısı və ya draw.io XML, redaktə oluna bilən bloklar və konnektorlar kimi |
| `DIMALIGNED` | `DAL`, `DIMALI` | İki nöqtə arasında həqiqi məsafə |
| `DIMANGULAR` | `DAN`, `DIMANG` | İki xətt arasında bucaq, qövsün bucağı, ya da üç nöqtə ilə |
| `DIMARC` | `DAR` | Qövs uzunluğu ölçüsü: qövs boyunca məsafə, qövs simvolu ilə (DAR) |
| `DIMASZ` |  | Ölçü ayarı: Ox ölçüsü |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Bir baza xətdən yığılmış ölçülər |
| `DIMBREAK` | `DBREAK` | Ölçü və uzanma xətlərini digər obyektləri kəsdikləri yerdə kəs (Avtomatik), iki nöqtə arasında (Əl ilə), ya da kəsikləri sil |
| `DIMCONSTRAINT` | `DCON` | Ölçü məhdudiyyətləri: xətti, düz, bucaqlı, radius, diametr, çevir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Ölçülər zənciri, hər biri əvvəlkinin sonundan |
| `DIMDEC` |  | Ölçü ayarı: Onluq rəqəmlər |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Qövsün və ya çevrənin diametri |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Ölçüləri bağlı olduqları obyektlərdən azad et (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ölçü mətnini dəyiş (Əsas, Yeni mətn, Fırlat) və ya uzanma xətlərini meylli et (Oblique) |
| `DIMEXE` |  | Ölçü ayarı: ölçü xəttindən kənara uzanma |
| `DIMEXO` |  | Ölçü ayarı: başlanğıcdan ofset |
| `DIMGAP` |  | Ölçü ayarı: mətnin ətrafında boşluq |
| `DIMINSPECT` |  | Yoxlama ölçüsü: dəyərin ətrafında çərçivə, etiket və hissənin nə qədər tez-tez yoxlanıldığı ilə |
| `DIMJOGGED` | `DJO`, `JOG` | Sınıq radius ölçüsü: mərkəz uzaq olduqda yaxın nöqtədən çəkilmiş radius (DJO) |
| `DIMJOGLINE` | `DJL` | Xətti və ya düz ölçü xəttinə sınıq işarəsi əlavə et, məsafənin miqyasda çəkilmədiyini göstərmək üçün (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Üfüqi və ya şaquli məsafə (istənilən bucaq üçün R) |
| `DIMLUNIT` |  | Ölçü ayarı: uzunluq formatı (1 elmi, 2 onluq, 3 mühəndis, 4 memarlıq, 5 kəsr) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinat ölçüsü: nöqtənin UCS başlanğıcından X və ya Y məsafəsi, aparıcı xətdə (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Seçilmiş ölçülərdə ölçü dəyişənlərini üslubu dəyişmədən üstələ; Təmizlə üslubu geri qaytarır (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Qövsün və ya çevrənin radiusu |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Ölçünün nöqtələrini obyektlərə bağla ki, onlar hərəkət etdikdə izləsin və yenidən ölçülsün (DRE) |
| `DIMSCALE` |  | Ölçü ayarı: ümumi miqyas (ölçülər × bu) |
| `DIMSPACE` |  | Paralel ölçülər arasında bərabər məsafə, baza ölçüdən ölçülür (0 onları düzləşdirir, Avtomatik mətn hündürlüyünün iki qatıdır) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Adlandırılmış ölçü üslublarını yarat, dəyiş, cari et, sil, tətbiq et və müqayisə et (dialoq; komanda sətrində -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Ölçü mətnini ölçü xəttinin soluna, sağına və ya mərkəzinə köçür, ya da çevir |
| `DIMTEXTUNIT` | `DTU` | Ölçü mətni mm, cm, m və ya km ilə, ya da çertyojun öz vahidləri ilə: seçilmiş ölçülər, yoxsa yenilər (DTU) |
| `DIMTXT` |  | Ölçü ayarı: Mətn hündürlüyü |
| `DIST` | `DI` | İki nöqtə arasında məsafə və bucaq |
| `DISTRIBUTE` |  | Seçilmiş obyektləri yan-yana və ya yuxarı-aşağı bərabər paylayın: mərkəzlər arasında bərabər addımlar, ya da bərabər boşluqlar; kənardakı iki yerində qalır |
| `DIVIDE` | `DIV` | DIVIDE (DIV): xətti, qövsü, çevrəni, polixətti, spline və ya ellipsi bərabər hissələrə bölən işarələr. Nöqtələr, ya da Blok ilə hər işarədə blok. |
| `DOCUMENTS` | `DOCS` | Sənədlər panelini aç: layihə qovluğu üçün çertyojları götür və qaytar, revizyonlar, buraxılış vəziyyətləri və təsdiq |
| `DOOR` | `DR` | Divara qapı qoy. Klikləyəcəyiniz tərəf, qapının açılacağı tərəfdir. |
| `DRAWORDER` |  | Çəkmə sırasını dəyiş: obyektləri ön plana gətir, arxaya göndər, ya da başqa obyektlərin üstünə və ya altına qoy. |
| `DUPLICATE` | `DUP` | Kursorla hərəkət edən nüsxə: qoymaq üçün klikləyin (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Çertyojun xüsusiyyətləri: başlıq, müəllif və qalanları, həmçinin öz ad və dəyər cütləriniz |
| `DXFOUT` |  | Çertyojı DXF R12 kimi yüklə (Saxla öz formatını saxlayır) |
| `EATTEDIT` | `DDATTE` | Blok referansının atributlarını redaktə et: dəyərlər, mətn və xüsusiyyətlər, hər dəfə bir atribut |
| `ELLIPSE` | `EL` | Ox uc nöqtələri və digər yarım ox |
| `ERASE` | `E`, `DELETE` | Obyektləri sil |
| `EXPLODE` | `X` | Polixəttləri, blokları və ölçüləri hissələrinə ayır |
| `EXPORT` | `EXP` | Əlavənin yazdığı fayl növündə çertyojun nüsxəsini saxla |
| `EXPORT3D` | `3DEXPORT` | 3D modeli ixrac et: GLB, OBJ və ya STL |
| `EXPORTPOINTS` | `EXPPTS` | Nöqtələri və bir atributu təsvir kimi olan blokların əlavə nöqtələrini CSV və ya TXT fayla yaz (PNEZD, PENZD və ya XYZ), BIM və ölçmə proqramları üçün |
| `EXTEND` | `EX` | Obyektləri digərlərinə çatmaq üçün uzat: ucuna yaxın klikləyin, bir neçəsindən keçin və ya kəsmək üçün Shift+klik |
| `EXTRIM` |  | EXTRIM: bir kəsici kənar seçin, sonra bir tərəf. Kənarı kəsən hər şey həmin tərəfdə kəsilir. Kursoru hərəkət etdirdikdə gedəcək parçalar görünür. |
| `EXTRUDE` | `EXT` | Bağlı 2D obyektləri bərk cisimlərə ekstrüziya et (3D) |
| `FIELD` |  | Mətnə, cədvəl xanasına və ya atributa sahə qoy: tarix, fayl adı, vərəq nömrəsi, çertyoj xüsusiyyəti, obyektin sahəsi və ya uzunluğu, ya da düstur |
| `FILLET` | `F` | Künc: iki obyekt arasındakı künci yuvarlaqlaşdır və ya kvadratlaşdır (R radius, P polixəttin hər küncü, M [bir neçə (M)]) |
| `FIND` |  | Mətndə, atribut dəyərlərində və ölçü mətnində sözləri tap və əvəz et |
| `FLATTEN` |  | Seçilmiş obyektlərin hündürlüyünü (Z) və qalınlığını 0 et, istifadə etdikləri bloklarda da. |
| `FLOOR` |  | Çəkmək üçün mərtəbə seç, bir tane əlavə et, ya da seçimi birinə köçür və ya kopyala. |
| `FLOORLAYERS` |  | Mərtəbələri Floor-Layer adlı qatlara çevir, mərtəbəsiz birinə gedən fayl üçün. |
| `FLOORS` | `FLR` | Mərtəbələr panelini aç: bir model məkanda mərtəbələri yığ. |
| `GCCOINCIDENT` |  | Məhdudiyyət: iki nöqtə üst-üstə düşür, ya da nöqtə obyektdə qalır |
| `GCCOLLINEAR` |  | Məhdudiyyət: iki xətt eyni xətt üzərində qalır |
| `GCCONCENTRIC` |  | Məhdudiyyət: iki çevrə və ya qövs eyni mərkəzi paylaşır |
| `GCEQUAL` |  | Məhdudiyyət: iki xətt eyni uzunluqda, ya da iki çevrə/qövs eyni radiusda qalır |
| `GCFIX` |  | Məhdudiyyət: nöqtə və ya bütün obyekt olduğu yerdə qalır |
| `GCHORIZONTAL` |  | Məhdudiyyət: xətt (ya da iki nöqtə) üfüqi qalır |
| `GCPARALLEL` |  | Məhdudiyyət: iki xətt paralel qalır |
| `GCPERPENDICULAR` |  | Məhdudiyyət: iki xətt düz bucaq altında qalır |
| `GCSYMMETRIC` |  | Məhdudiyyət: iki nöqtə, xətt və ya çevrə bir xətt boyunca bir-birinin güzgü şəkli olur |
| `GCTANGENT` |  | Məhdudiyyət: xətt və çevrə və ya qövs (ya da onlardan ikisi) toxunan qalır |
| `GCVERTICAL` |  | Məhdudiyyət: xətt (ya da iki nöqtə) şaquli qalır |
| `GDSIN` | `GDS` | IC layout-a baxın (GDSII axın faylı): hər qat və datatype çertyoj qatı kimi, düz, istifadəçi vahidləri ilə; yalnız baxmaq və ölçmək üçün (laboratoriya sınağı) |
| `GEOMCONSTRAINT` | `GCON` | Həndəsi məhdudiyyətlər: üfüqi, şaquli, paralel, toxunan, üst-üstə düşən… |
| `GLBOUT` |  | 3D modeli GLB (glTF) kimi ixrac et |
| `GRADIENT` | `GD` | Sahəni bir və ya iki rəngin qradiyenti ilə doldur |
| `GRIDMOVE` | `GM` | Tor xəttini köçür və ondan asılı olanı da apar: divarlar uzanır, sütunlar, baloncuqlar və etiketlər hərəkət edir, ölçülər izləyir. |
| `GROUP` | `G` | GROUP (G): seçilmiş obyektlərə ortaq ad ver. Onlardan birinə klik hamısını seçir. Adda Enter adsız qrup yaradır. |
| `GROUPEDIT` |  | GROUPEDIT: qrupu dəyiş. Obyektlərindən birini seçin və ya adını verin, sonra Obyekt əlavə et və ya sil, REName ilə adını dəyiş, təsvirini dəyiş və ya klikin qrupu bütöv seçib-seçməməsini təyin et. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Sahəni bərk dolğu və ya naxışla doldur: içinə klikləyin, ya da bağlı obyektləri seçin (H) |
| `HATCHEDIT` | `HE` | Ştrixlamanı dəyiş: naxış, miqyas, bucaq, başlanğıc və sərhədə bağlılığı. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ştrixləmədən sərhəd polixəttlərini yenidən yaradır, ona bağlı və ya bağlı olmadan |
| `HATCHTOBACK` |  | Hər ştrixlamanı qalan hər şeyin arxasına göndər. |
| `HELP` | `?` | Bu siyahı |
| `HIDEOBJECTS` |  | UNISOLATEOBJECTS-a qədər seçilmiş obyektləri gizlət. Çertyojla saxlanmır. |
| `HISTORY` | `HIST` | HISTORY (HIST): bu çertyojun versiyaları — Studio saxlayanda bu kompüterdə saxlanan nüsxələr və buludun versiyaları — açmaq, bərpa etmək və nə dəyişdiyini rənglə göstərərək müqayisə etmək üçün. |
| `ID` |  | Nöqtənin koordinatları |
| `IMAGE` | `IM` | CadCraft-a çertyojun istifadə etdiyi şəkil fayllarını ver (DWG yalnız onların yerini saxlayır). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Fayldan şəkil (PNG və ya JPEG) yerləşdir. |
| `IMAGECLIP` | `ICL` | Şəkli düzbucaqlıya və ya çoxbucaqlıya kəs, ya da kəsiyini sil. |
| `IMPORT` | `IMP` | Əlavənin oxuduğu növdə faylı bu çertyoja gətir |
| `INSERT` | `I`, `DDINSERT` | Blok yerləşdir (S miqyas, R fırlat); F DWG/DXF faylından, L kitabxanadan |
| `INTERSECT` | `IN` | Bərk cisimlərdə (3D) ümumi olanı saxla, ya da 2D regionların paylaşdığı sahəni |
| `ISODRAFT` |  | ISODRAFT: izometrik çəkilişi açmaq və ya bağlamaq, ya da birbaşa Sol, Üst və ya Sağ müstəvidə. Açıq olduqda Orto və polyar izləmə müstəvinin iki oxunu izləyir, tor izometrik çəkilir və ELLIPSE-də Izodairə var. |
| `ISOLATEOBJECTS` | `ISOLATE` | Yalnız seçilmiş obyektləri göstər; bu məkandakı hər şey UNISOLATEOBJECTS-a qədər gizlənir. Çertyojla saxlanmır. |
| `ISOPLANE` |  | ISOPLANE: üzərində çəkmək üçün izometrik müstəvini seç: Sol, Üst və ya Sağ. Enter növbətiyə keçir, izometrik çəkiliş açıq olduqda F5 kimi. |
| `JOIN` | `J` | Ucdan-uca görüşən xətləri, qövsləri və polixəttləri bir polixətt halında birləşdir; bir xətt üzərində olanları bir xətt halında (J) |
| `LASER` | `LASERCUT` | Lazer panelini aç: qatları lazer kəsicisinə və ya qravüra maşınına göndər (GRBL G-kod) |
| `LASSOMODE` |  | Basıb sürükləmə lasso (1) və ya düzbucaqlı (0) çəkir |
| `LAYDEL` |  | Qatı və onun üzərindəki hər obyekti sil (modeldə, vərəqlərdə və bloklarda) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Qat meneceri aç: bütün qatlar bir cədvəldə |
| `LAYERPANEL` |  | Qatlar panelini göstər |
| `LAYFRZ` |  | Seçdiyiniz hər obyektin qatını dondur |
| `LAYGROUP` | `LG` | Qatları Qatlar panelində qovluqlara qruplaşdır. |
| `LAYISO` |  | Seçilmiş obyektlərin qatlarını izolyasiya et (digər hər qat söndürülür) |
| `LAYLOCKFADE` |  | Kilidli qatlardakı obyektlərin nə qədər solğunlaşmasını və klikin onları seçib-seçməməsini təyin et. |
| `LAYMCUR` |  | Klikləyib seçdiyiniz obyektin qatını cari et |
| `LAYMRG` |  | Qatları birləşdir: obyektləri hədəf qata köçür, birləşdirilən qatlar isə silinir |
| `LAYOFF` |  | Seçdiyiniz hər obyektin qatını söndür |
| `LAYON` |  | Hər qatı yandır |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Başlıq bloku və görünüş pəncərəsi ilə yeni vərəq |
| `LAYTHW` |  | Hər qatı əritmək |
| `LAYUNISO` |  | LAYISO söndürdüyü qatları yenidən yandır |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Köhnə Vyetnam şriftləri ilə (TCVN3 / .VnTime kimi ABC şriftləri və VNI-Times kimi VNI şriftləri) yazılmış mətni Unicode-a çevirir. Belə mətn artıq oxunduğu kimi göstərilir; bu əməliyyat onu həmişəlik yenidən yazır, say və bir geri qaytarma addımı ilə. |
| `LENGTHEN` | `LEN` | Xətləri, qövsləri və polixəttləri uzat və ya qısalt: məbləğ, faiz, cəm ilə, ya da sürükləməklə (LEN) |
| `LIBRARY` | `LIB` | Kitabxana paneli: elementləri yerləşdir, yeniləmələri yoxla, kreditlər |
| `LIMITS` |  | Çertyojun limitlərini təyin et: ON, OFF, ya da sol-aşağı və sağ-yuxarı künclər. Limitlər ON olduqda onlardan kənar nöqtələr qəbul edilmir |
| `LINE` | `L` | Düz parçalar, hər biri öz obyekti |
| `LINETYPE` | `LT`, `CELTYPE` | Yeni obyektlərin alacağı xətt tipi (qata görə, bloka görə, ya da adlandırılmış) |
| `LINKVIEWS` | `SYNCVIEWS` | Hər paneli birlikdə sürüşdür və yaxınlaşdır (bölünmüş ekran), iki çertyoju və ya revizyonu müqayisə etmək üçün |
| `LISPEDIT` | `VLIDE` | LISPEDIT (və ya VLIDE) LISP redaktorunu açır: rutini yazmaq, yükləmək və sınamaq üçün pəncərə. Çertyoja yükləmək hər formanı oxuyur, APPLOAD ilə faylı yükləməyə bənzər, və onun komandalarını yaradır. Seçimi işlət bütün seçilmiş formaları və ya kursorun içində olduğu formanı qiymətləndirir. Konsol rutinin çap etdiyini və hər xətanı xətt nömrəsi ilə göstərir. Yazdıqca açan mötərizə işarələnir və Enter yeni sətri girintiləndirir. Yeni, Aç və Saxla .lsp faylında işləyir. Mətnin yanındakı siyahılar rutinin təyin etdiyi funksiyaları, hələ bu LISP-də olmayan çağırdığı funksiyaları və onun bütün funksiyalarını göstərir. Pəncərə çertyojı bloklamır, buna görə rutin nöqtə istəyə bilər; Dayandır və ya Esc işləyən rutini bitirir. |
| `LIST` | `LI`, `LS` | Tarixçədə obyektləri təsvir et |
| `LTSCALE` | `LTS` | Çertyojun xətt tipi miqyası (hər xətt və boşluq bununla vurulur) |
| `LWDISPLAY` | `LWT` | Ekranda xətt qalınlıqlarını göstər və ya gizlət (status sətrindəki LWT düyməsi) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Yeni obyektlərin alacağı xətt qalınlığı (qata görə, bloka görə, standart və ya mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model məkanın altında xəritə qatları: çertyojun koordinat sistemi, plitələr, WMS, WMTS, ArcGIS, şəkillər |
| `MASSPROP` |  | MASSPROP: regionların və bağlı obyektlərin kəsik xüsusiyyətləri: sahə, perimetr, sentroid, momentlər və inersiya hasili, gyration radiusları və əsas oxlar. Xətlər və qövslər üçün dəqiq. Hesabatı mətn faylına yaza bilər. |
| `MATCHPROP` | `MA`, `PAINTER` | Xüsusiyyətləri uyğunlaşdır: bir obyektin qatını, rəngini və daha çoxunu digərlərinə kopyala (MA) |
| `MEASURE` | `ME` | MEASURE (ME): xətt, qövs, çevrə, polixətt, spline və ya ellipsin boyunca verilmiş hər uzunluqda bir işarə, klikə ən yaxın ucdan. Nöqtələr, ya da Blok ilə hər işarədə blok. |
| `MEASUREGEOM` | `MEA` | Məsafəni, radiusu, bucağı və ya sahəni ölç (MEA) |
| `MINSERT` |  | MINSERT: blokları bir dəfəyə sətir və sütunlarda yerləşdir. Hər biri öz referansıdır, ona görə hər birini köçürə və ya silə bilərsiniz. |
| `MIRROR` | `MI` | Obyektləri bir xətt boyunca güzgüləşdir |
| `MLEADER` | `MLD`, `MLEAD` | Çoxlu aparıcı: ox, aparıcı xətt və qeyd, bir obyekt kimi (MLD) |
| `MLEADERALIGN` | `MLA` | Çoxlu aparıcı xətləri onlardan biri ilə bir istiqamətdə, bərabər intervalla, ya da iki nöqtə arasında paylanmış düzləşdir (MLA) |
| `MLEADERCOLLECT` | `MLC` | Bir neçə çoxlu aparıcını birinə yığ: blokları sətir və ya sütunda, ya da qeydlərini biri-birinin altında (MLC) |
| `MLEADEREDIT` | `MLE` | Çoxlu aparıcıya aparıcı xətlər əlavə et və ya sil; məzmununu mətn və blok arasında dəyiş (MLE) |
| `MLINE` |  | Paralel xətləri birlikdə çək, künclərdə birləşmiş. |
| `MOVE` | `M` | Obyektləri baza nöqtəsi və ikinci nöqtə ilə köçür |
| `MSPACE` | `MS` | Açıq vərəqin görünüş pəncərəsi vasitəsilə modeldə işlə (və ya görünüş pəncərəsinin içinə iki dəfə klikləyin). |
| `MTEXT` | `MT`, `T` | Abzas mətni: enini sürükləyin, sonra yerində yazın; Enter yeni abzas başladır (T) |
| `MVIEW` | `MV` | Vərəqdə modelə görünüş pəncərəsi |
| `NAMEDVIEW` | `NV`, `VIEWS` | Adlandırılmış görünüşlər: ekrandakı görünüşü (ya da pəncərəni) bir adla saxla və ona qayıt (NV) |
| `NCOPY` |  | Blok referansından və ya bağlı çertyojdan obyektləri partlatmadan çertyoja kopyala. |
| `NEARBY` |  | Kursora yaxın nə olduğunu deyir, ən yaxından başlayaraq, məsafə və tərəf ilə. |
| `NEW` |  | Yeni çertyoj başlat |
| `OBJECTSCALE` | `OBJSCALE` | Anotativ mətnin və ölçülərin anotasiya miqyasları: miqyas əlavə et, birini sil, cari miqyası əlavə et və ya siyahıla (hər görünüş pəncərəsi öz miqyası üçün ölçüdə göstərir) |
| `OBJOUT` |  | 3D modeli OBJ kimi ixrac et |
| `OFFSET` | `O` | Məsafədə paralel nüsxələr |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: OFFSET polixəttin xarici künclərindəki boşluqları necə bağlayır. 0 seqmentləri uzadır, 1 qövs əlavə edir, 2 düz kəsik əlavə edir. Bu sessiya üçün saxlanılır. |
| `OLELIST` | `OLES` | Çertyojun daşıdığı OLE obyektlərini siyahıla və birinin şəklinin nüsxəsini istədiyiniz yerə qoy |
| `OPEN` |  | Bu kompüterdən DWG və ya DXF aç |
| `OPENIN3D` |  | Bu çertyoju 3D modelləşdirmə tətbiqində, yeni tabda aç (heç nə yüklənmir) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Obyekt tutma menyusunu aç: hansı tutmaların açıq olduğunu seç. Həmçinin status sətrində Tutma üzərində sağ klik. |
| `OVERKILL` |  | Təkrarlanan obyektləri sil və üst-üstə düşən və ya ucdan-uca xətləri və qövsləri, tolerantlıq daxilində, birləşdir. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrlər paneli: istifadəçi parametrləri və ölçü məhdudiyyətləri bir cədvəldə |
| `PARTSLIST` | `PLIST` | Kitabxanadan yerləşdirilmiş hər standart detal və polad kəsiyinin hissə siyahısı cədvəli |
| `PASTEAREA` | `PAREA` | MarkupCraft-da kopyalanmış sahəni (Sahəni kopyala) həqiqi ölçüdə, şəkil kimi yapışdır. |
| `PASTEBLOCK` |  | PASTEBLOCK: kopyaladığınızı bir blok kimi yapışdır. Blok öz adını alır; RENAME ona sizin adınızı verir. |
| `PASTECLIP` |  | Buferi yapışdır: kursoru izləyir, gedəcəyi yerə klikləyin (Ctrl+V) |
| `PASTEORIG` |  | Buferi kopyalandığı koordinatlarda yapışdır (Ctrl+Shift+V) |
| `PDF` |  | CadCraft-a çertyojun altlıqlarının istifadə etdiyi PDF faylları verin |
| `PDFADJUST` |  | PDF altlığını solğunlaşdır, kontrastını dəyiş, monoxrom et və ya söndür |
| `PDFATTACH` | `PDFATT` | PDF səhifəsini altlıq kimi qoş (PDFATTACH) |
| `PDFCLIP` |  | PDF altlığını düzbucaqlıya və ya çoxbucaqlıya kəs |
| `PDFIMPORT` | `PDFIM` | PDF səhifəsinin xətlərini, dolğularını və mətnini çertyoj obyektlərinə çevir (PDFIMPORT) |
| `PDFLAYERS` |  | PDF altlığının qatlarını yandır və ya söndür |
| `PEDIT` | `PE` | Polixətti redaktə et: bağla, aç, birləşdir, en, əyri uyğunlaşdır, spline əyrisi, əyrini aç, xətt tipi yaratma, tərsinə çevir; xətlər, qövslər və spline-lar polixəttə çevrilə bilər |
| `PHOTOSKETCH` | `PSK` | Kağızda əl eskizinin fotosunu miqyasda xətlərə və qövslərə çevirir, perspektivi düzləşdirir və hər qələm rənginə öz qatını verir. |
| `PICKSTYLE` |  | PICKSTYLE: qrupun bir obyektini seçəndə bütün qrupun seçilib-seçilməməsi (1, başlanğıc parametr) və ya yalnız o obyekt (0). Bu sessiya üçün saxlanılır. |
| `PLAN` |  | Görünüşü elə fırlat ki, UCS X oxu (Cari ucs, yadda saxlanılmış Ucs və ya Dünya) ekranda səviyyəli olsun. Çertyojda heç nə hərəkət etmir. |
| `PLINE` | `PL` | Xətt və qövs seqmentlərindən polixətt |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF-ə çap: vərəq və ya model miqyasda |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Çap üslubu cədvəlləri: hər rəngin necə çap olunacağını təyin et (rəng, qara, boz, mürəkkəb, xətt qalınlığı); çertyojla saxlanılır (STYLESMANAGER) |
| `POINT` | `PO` | Nöqtə obyektləri |
| `POINTCLOUD` | `PC` | Qoşulmuş nöqtə buludu: kəsik, hündürlük, qalınlıq, rəng, ölçü, görünən, yaxınlaşdır, ayır |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Nöqtə buludunu (LAS, LAZ, XYZ, PTS) çertyojun altına qoş |
| `POLARANG` |  | Polyar izləmə addımı dərəcə ilə (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Müntəzəm çoxbucaqlı |
| `PRESSPULL` |  | Bərk cismin üzünü itələ və ya çək (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Xüsusiyyətlər panelini aç (həmçinin Ctrl+1, ya da obyektə iki dəfə klik) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Xüsusiyyətlər panelini pəncərənin kənarına qatla |
| `PSPACE` | `PS` | İşlədiyiniz görünüş pəncərəsindən çıx və vərəqə qayıt (ya da kənarına iki dəfə klik). |
| `PUBLISH` | `-PUBLISH` | Bir neçə və ya bütün vərəqləri bir PDF-ə çap et (hər vərəq üçün bir səhifə və bir xətt) |
| `PURGE` | `PU` | Heç bir yerdə istifadə olunmayan blok təriflərini sil |
| `QDIM` |  | Sürətli ölçü: bir neçə obyekti bir dəfəyə ölç (davamlı, baza, pilləli, ordinat, radius və ya diametr) |
| `QPMODE` | `QP` | Kursorla Sürətli Xüsusiyyətlər açıq və ya bağlı |
| `QSELECT` | `QS` | Sürətli seçim: qatı, rəngi, ölçüsü və ya adı uyğun olan növ obyektlərin hamısı (QS) |
| `RASTERSNAP` |  | Skan olunmuş vərəqlərin xətlərinə tutmanı açıb-bağla. |
| `RAY` |  | Şüa: nöqtədən konstruksiya xətti, bir istiqamətdə sonsuz. |
| `RECOVER` |  | Zədələnmiş DXF və ya DWG-ni açır: oxuna bilməyən hissələri ötür və neyin ötürüldüyünü deyir, sonra AUDIT kimi yoxlayıb düzəldir. |
| `RECTANG` | `REC`, `RECTANGLE` | İki künclə bağlı polixətt |
| `REDLINE` | `RDL` | Revizyona redline: MarkupCraft redline paketini oxu, hər dəyişikliyi qəbul et və ya rədd et, qəbul olunanları revizyon jurnalı ilə buludla və cavablar faylını saxla (RDL) |
| `REDO` |  | Geri alınanı təkrarla |
| `REFCLOSE` |  | Bloku yerində redaktə etməyi bitir: saxla və ya dəyişiklikləri at |
| `REFEDIT` |  | Bloku yerində redaktə et, onun referansının olduğu yerdə, qalan çertyoj solğunlaşdırılmış; REFCLOSE saxlayır |
| `REGEN` | `RE` | Bu tabda çertyojdan çəkilənləri yenidən qur |
| `REGENALL` | `REA` | Hər tabda, paneldə və açıq çertyojda çəkilənləri yenidən qur |
| `REGION` | `REG` | REGION (REG): bağlı obyektlərdən və ya ucdan-uca döngə bağlayan xətlərdən, qövslərdən və polixəttlərdən düz sahələr (regionlar) yarat. UNION, SUBTRACT və INTERSECT sonra regionları birləşdirir, MASSPROP isə onların kəsik xüsusiyyətlərini verir. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Bir neçə skanı qeyd et: seçilmiş nöqtə cütləri və ya hədəflərlə bir çərçivəyə yerləşdir, ICP ilə dəqiqləşdir, bir LAS və ya E57 kimi ixrac et |
| `REINIT` |  | Ləqəblər faylınızı yenidən yüklə |
| `RENAME` | `-RENAME`, `REN` | Qatı və ya bloku adlandır (hər obyekt və ya referans izləyir) |
| `REVCLOUD` | `RC` | Revizyon buludu: düzbucaqlını, çoxbucaqlını, sərbəst yolu və ya obyekti yuvarlaq et (RC) |
| `REVOLVE` | `REV` | Bağlı 2D obyektləri bir ox ətrafında bərk cisimlərə çevir (3D) |
| `ROTATE` | `RO` | Obyektləri baza nöqtəsi ətrafında fırlat |
| `SAMPLES` | `SAMPLE` | CadCraft-ın nümunə çertyojlarından birini aç (memarlıq dəsti, icra olunmuş) öyrənmək üçün |
| `SAVE` | `QSAVE` | Çertyojı öz formatında yüklə (DWG və ya DXF) |
| `SAVEAS` |  | Çertyojı DWG və ya DXF kimi yüklə: hansını seçin |
| `SAYSEL` |  | Seçilmiş olanı deyir, hər biri bir cümlə ilə. |
| `SCALE` | `SC` | Obyektləri baza nöqtəsi ətrafında miqyasla |
| `SCALELISTEDIT` | `SCALELIST` | Çertyojun öz miqyaslarını əlavə et, redaktə et və sil; onlar görünüş pəncərəsi və çap miqyası siyahılarında görünür və faylda saxlanılır (SCALELIST) |
| `SCANALIGN` | `SCL` | Skan olunmuş vərəqi iki nöqtəyə düzləşdir: köçür, fırlat və istəsəniz miqyasla. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Skan olunmuş çertyojı daxil et: PNG, JPEG və ya TIFF (çoxsəhifəli faylın bir və ya bütün səhifələri) və ya şəkil olan PDF səhifəsi. |
| `SCANCLEAN` | `SCC` | Skan olunmuş vərəqi qara-ağ et və ləkələri sil. |
| `SCANCROP` | `SCR` | Skan olunmuş vərəqi pəncərəyə kəs. |
| `SCANDESKEW` | `SCD` | Skan olunmuş vərəqin uzun xətlərinin bucağını tap və bucağı qəbul etdikdən sonra vərəqi düzbucaqlı et. |
| `SCANERASE` | `SCE` | Skan olunmuş vərəqin sahəsini sil: düzbucaqlı, çoxbucaqlı və ya lasso. |
| `SCANINFO` | `SCI` | Skan olunmuş vərəqin orijinal faylını və ondan bəri atılan addımları göstər. |
| `SCANSCALE` | `SCS` | Skan olunmuş vərəqi miqyasla: üzərində iki nöqtə seçin və aralarındakı həqiqi məsafəni yazın. |
| `SCANTRACE` | `SCT` | Skan olunmuş vərəqi yeni qatda xətlərə və qövslərə izlə, təyin etdiyiniz tolerantlıqla. Mətn və ştrixləmə rastr olaraq qalır. |
| `SELECT` |  | Obyektləri indi seç (P, Əvvəlki üçün, növbəti komandada) |
| `SELECTALL` | `AI_SELALL` | Bu tabda redaktə oluna bilən hər obyekti seç (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seçdiyiniz kimi olan hər obyekti seç: eyni növ, qat və rəng (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Vərəq Dəsti panelini göstərir: bir çox çertyojdan vərəqlər, nömrələnmiş, bir PDF kimi çap olunur. |
| `SHORTCUTS` | `KEYS` | İstənilən komandaya öz açarını ver (Ctrl və ya Alt ilə hərf, ya da boş funksiya düyməsi), bu brauzerdə və ya masaüstü tətbiqində saxlanılır. |
| `SHXFONTS` | `SHX` | CadCraft-a qovluqdan və ya fayllardan SHX şriftləri ver ki, onları adlandıran mətn üslubları onlarla çəkilsin (siyahıla, sil, tərsinə çevir) |
| `SKETCHFIX` | `SKF` | Sərbəst vuruşlar çək; hər biri təmiz xətt, çevrə, qövs, düzbucaqlı və ya polixətt olur, kvadratlaşdırılır və digərlərinə birləşdirilir. |
| `SKETCHLIVE` | `SKL` | Qələmlə eskiz çək: hər vuruş qələm qaldırıldıqda çertyojla tutularaq dəqiq xətt, çevrə, qövs və ya düzbucaqlıya çevrilir, ölçüsü üzərinə yazılmaq üçün. |
| `SPLINE` | `SPL` | Nöqtələrdən keçən spline çək (və ya nəzarət çoxbucaqlısı ilə), ya da polixətti ona çevir |
| `SPLINEDIT` | `SPE` | Spline redaktə et: uyğunlaşdırma nöqtələri, nəzarət nöqtələri və çəkiləri, açıq və ya bağlı, tərsinə çevir, ya da polixəttə çevir |
| `SPLIT` |  | Çertyoj sahəsini panellərə böl (modeldə VPORTS kimi; vərəqdən də) |
| `STEELMEMBER` | `SMEMBER` | Standart kəsikdən 3D-də polad üzv: iki nöqtə (tir) və ya baza nöqtəsi və hündürlük (Sütun) |
| `STLOUT` |  | 3D modeli STL kimi ixrac et (millimetrlə) |
| `STRETCH` | `S` | Uzatma: uclara çarpaz pəncərə sürükləyin; içəridəki hərəkət edir, qalan yerində qalır (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Mətn üslubları: yeni mətnin aldığı şrift, hündürlük, en və əyilmə (dialoq; komanda sətrində -STYLE) |
| `SUBTRACT` | `SU` | Bərk cisimləri digərlərindən çıxar (3D), ya da 2D regionları regionlardan |
| `SWBOUT` | `SWMACRO` | SolidWorks üçün makro yüklə (.swb), modeli bir məhdudiyyətli eskiz kimi yenidən quran |
| `SWEEP` |  | Bağlı 2D obyektləri bir yol boyunca (xətt, polixətt, qövs, çevrə) bərk cisimlərə sür (3D) |
| `TABLE` | `TB` | Cədvəl yarat: sətir və sütunlar, ya da buferdəki elektron cədvəl xanalarından və ya CSV faylından |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Cədvəli redaktə et: xanaya yaz, sətir və sütun əlavə et və sil, ölçülər, birləşdirilmiş xanalar, düzləşdirmə |
| `TABLEEXPORT` |  | Cədvəlin göstərdiyini CSV faylı kimi saxla |
| `TABLEPASTE` | `PASTETABLE` | Buferdəki elektron cədvəl xanalarından cədvəl yarat |
| `TABLESTYLE` | `TS` | Cədvəl üslubları: başlıq, başlıq sətri və məlumat sətirləri üçün mətn hündürlükləri, düzləşdirmə, kənar və sərhədlər |
| `TAGS` |  | Blok referanslarında etiketlər: etiket təyin et (növ, icazə verilən dəyərlər, aid olduğu bloklar), seçilmiş referanslarda qoy və CSV kimi saxlaya biləcəyiniz cədvəl kimi siyahıla |
| `TEXT` | `DT`, `DTEXT` | Tək sətirli mətn; Enter növbəti sətri başladır |
| `TEXTEDIT` | `ED`, `DDEDIT` | Mətni yerində redaktə et: mətn seç (ya da ona iki dəfə klik) (ED) |
| `TEXTMASK` | `TMASK` | Mətnlərin arxasına fon maskası qoy (çertyojun fonu və ya rəng) və ya onu götür. |
| `TEXTTOFRONT` |  | Bütün mətni, ölçüləri və aparıcıları hər şeyin qarşısına gətir. |
| `TOOLBAR` |  | Alət çubuğu düymələrinin nə göstərəcəyini seç: nişanlar və mətn, yalnız nişanlar, ya da yalnız mətn (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Alət çubuğunu pəncərənin yuxarısına, aşağısına, soluna və ya sağına yerləşdir |
| `TOOLBARROWS` |  | Alət çubuğunun neçə sətir istifadə etməsini seç: sığmaq üçün sarın, 2, ya da 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Çertyojun üstündəki zolaqları standart və ya yığcam et |
| `TOUCHCROSSHAIR` | `TCX` | Barmaqla çertyoj çəkmək üçün ofsetli xaç: bir barmaq onun yuxarısında və yanında duran xaçı hərəkət etdirir, beləliklə barmaq tutma nöqtəsini örtmür. Barmağı qaldırmaq heç nə tutmur; Klik düyməsi və ya ikinci barmaqla tap xaçda tutur, Klik düyməsini saxlayıb hərəkət etdirmək sürükləyir. Uzun basmaq və ya Enter düyməsi Enter-dir. İki barmaq sürüşdürür və yaxınlaşdırır. Seçimlər: ON, OFF, Auto (yalnız barmağın yeganə göstərici olduğu yerdə açıq), Məsafə, Tərəf. |
| `TOUR` | `TUTORIAL` | Altı addımlı ilk çertyoj turunu yenidən keç |
| `TRIM` | `TR` | Obyektləri digərlərinin kəsişdiyi yerə qədər kəs: bir parçaya klikləyin, bir neçəsindən keçin və ya uzatmaq üçün Shift+klik |
| `TRIMEXTENDMODE` |  | TRIM və EXTEND necə başlayır: 1 Sürətli (hər obyekt kəsici kənar və ya sərhəddir), 0 Standart (əvvəlcə kənarları seçin) |
| `TTR` |  | İki obyektə toxunan çevrə, verdiyiniz radiusla (CIRCLE T ilə eynidir) |
| `TURNLEFT` |  | Görünüşü 90° sola fırlat (saat əqrəbinin əksinə): UCS Z -90, və görünüş izləyir. Çertyojda heç nə hərəkət etmir. |
| `TURNRIGHT` |  | Görünüşü 90° sağa fırlat (saat əqrəbi istiqamətində): UCS Z 90, və görünüş izləyir. Çertyojda heç nə hərəkət etmir. |
| `TURNWORLD` |  | Dünyaya qayıt: UCS Dünya, görünüş yenidən səviyyəlidir. |
| `TXT2MTXT` | `T2M` | Tək sətirli mətnləri yuxarıdan aşağıya bir abzas mətninə birləşdir. |
| `UCS` |  | Öz koordinat sisteminiz: başlanğıc və X oxu (origin, Z angle, 3point, OBject, Previous, World, NAmed). Yazdığınız nöqtələr, orto, polyar izləmə, tor və yeni mətn onu izləyir; görünüş X oxu səviyyəli olacaq şəkildə fırlanır. Çertyojda heç nə hərəkət etmir. |
| `UNDO` | `U` | Son komandanı geri qaytar |
| `UNGROUP` |  | UNGROUP: qrupları ayır. Qrupların obyektlərini seçin və ya Ad verin. Obyektlər çertyojda qalır. |
| `UNION` | `UNI` | Bərk cisimləri birə birləşdir (3D), ya da 2D regionları bir regiona |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS ilə və ya HIDEOBJECTS ilə gizlədilən hər obyekti yenidən göstər. |
| `UNITS` | `UN`, `DDUNITS` | Uzunluqların necə göstərilməsi və yazılması: onluq, fut və düym, kəsrlər (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Sahələri yenidən hesabla və onların özlüyündən nə zaman yenilənəcəyini seç |
| `USDOUT` |  | 3D modeli USD kimi ixrac et (.usda mətn, .usdc ikili və ya .usdz paketi) |
| `VIEW` | `-VIEW`, `V` | Standart 3D görünüşləri, perspektiv və ya paralel (3D) |
| `VIEWBASE` | `FLATSHOT` | 3D bərk cisimlərin düz 2D görünüşünü yerləşdir (ön, üst, yan və ya izometrik, gizli xətlər kəsikli) vərəqdə və ya modeldə |
| `VIEWLABEL` | `VL` | Vərəqdə görünüş başlığı: görünüş pəncərəsinin görünüş adını göstərir və onunla dəyişir. |
| `VOICE` |  | Səsli komandaları aç və ya bağla. Bu kompüterdə tanınır. |
| `VPCLIP` |  | Vərəq görünüş pəncərəsini bağlı obyektə və ya çəkilmiş çoxbucaqlıya kəsir; Delete onu yenidən düzbucaqlı edir |
| `VPLAYER` |  | Qatları yalnız bəzi görünüş pəncərələrində dondur və ya ər (Freeze, Thaw, Reset), və yeni görünüş pəncərələrinin hansı qatları dondurulmuş başlayacağını seç (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Çertyoj sahəsini panellərə böl, hər birinin öz görünüşü ilə (vərəqdə: MVIEW kimi görünüş pəncərəsi) |
| `VPVIEW` |  | Görünüş pəncərəsinin nə göstərdiyini təyin et: modeldə pəncərə seçin |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D görünüşün vizual üslubu: kölgəli, kənarlar, gizli xətt, məftil, X-ray |
| `WALL` | `WA` | 2D divarları polixətt kimi çək. Birləşirlər və qapı və pəncərə daşıyırlar. |
| `WALLARC` | `WARC` | Divar qövsü çək. Plan divarları düz olduğundan qövs qısa düz divarlar kimi çəkilir (hər biri 15 dərəcə), birləşən. |
| `WALLDELSEG` |  | İki nöqtə arasında divarın bir parçasını sil. Qalan bir və ya iki divar olaraq qalır. |
| `WALLDIM` |  | Ölçü üçün yeni dəyər yazın: uzaq ucundakı divar özünə görə kvadrat hərəkət edir, birinci ucdakı divar qalır və ona birləşən divarlar izləyir. |
| `WALLDISJOIN` |  | Bir ucuna yaxın divarı seçin ki, o ucda birləşmələr qadağan olsun: uc kvadrat çəkilir və heç nə izləmir. Yenidən seçin ki, icazə verilsin. |
| `WALLGRID` |  | Divarı tor xəttinə kilidləyin: boyunca, ya da bir ucu onun üzərində. Xətti GRIDMOVE ilə köçürün və divar izləyəcək. |
| `WALLHOLD` |  | Düzləşdir və kilidlə: divar başqa divara qarşı yerini saxlayır (öz xətti üzərində, ya da olduğu məsafədə). Biri hərəkət edərsə digəri izləyir. |
| `WALLHOLDDIM` |  | İki paralel divar arasındakı məsafəni kilidlə. Biri hərəkət edərsə, digəri onu saxlamaq üçün izləyir. |
| `WALLHOLDS` |  | Divarlardakı kilidləri siyahıla. |
| `WALLJOINS` |  | Köhnə çertyojun hər divarına identifikator ver və aralarındakı birləşmələri saxla. Bu, etdiyiniz ilk dəyişiklikdə də baş verir. |
| `WALLJOINSTYLE` |  | Ucdan-uca görüşən iki divarın küncünü klikləyin, necə çəkildiyini dəyişmək üçün: mitre, butt, kvadrat kəs. T hansı divarın keçdiyini dəyişir. |
| `WALLOFFSET` | `WO` | Divarı məsafə ilə özünə görə kvadrat köçür (ona birləşən divarlar izləyir), ya da həmin məsafədə nüsxə çıxar. |
| `WALLPICK` |  | Çertyojda xətt və ya polixətt üzərində divarlar yarat, "Bəli" desəniz ona birləşən xətlərlə. |
| `WALLPOLY` | `WP` | 3-dən 64 tərəfə qədər müntəzəm çoxbucaqlının ətrafında divarlar çək, POLYGON kimi. |
| `WALLRECT` | `WR` | İki qarşı küncdən dörd birləşmiş divar çək, RECTANG kimi. |
| `WALLREJOIN` |  | Divarın iki hissəsini yenidən bir divar et. Birinci öz yerini çertyojda saxlayır. |
| `WALLROT` |  | Dörd birləşmiş divarı istənilən bucağa fırlanmış düzbucaqlı kimi çək: birinci tərəf, sonra nə qədər uzaqda. |
| `WALLSPLIT` | `WS` | Divarı bir nöqtədə və ya başqa divarın kəsdiyi yerdə iki hissəyə böl. Hissələr birləşmiş qalır, boşluq və ya sərbəst uc istəməsəniz. Qapılar və pəncərələr öz hissəsi ilə gedir. |
| `WALLSPLITGAP` |  | Boşluq buraxaraq divarı böl: boşluğu yazın, divarı, sonra nöqtəni seçin. Hissələr sərbəst uclarını saxlayır və yenidən birləşdirilə bilər. |
| `WALLSTRETCH` |  | Pəncərə ilə uzat: içərisindəki divar uclar hərəkət edir, tamamilə içərisindəki divarlar bütöv hərəkət edir, və yanlarına dirənən divarlar onlarla birlikdə sürüşür. |
| `WALLTAN` |  | Divardan boyunca çıxan qövslə divarı davam et (qısa düz divarlar kimi çəkilir). |
| `WALLTRACE` |  | Klikləyib seçdiyiniz nöqtənin ətrafında xətlərin və divarların ən kiçik bağlı sahəsi boyunca divarlar çək. |
| `WALLUNHOLD` |  | Divardan kilidləri götür (və digər divarların ona kilidlərini). |
| `WBLOCK` | `W`, `-WBLOCK` | Bloku, bir neçə obyekti və ya bütün çertyojı yeni DWG və ya DXF fayla yaz (W) |
| `WEDGE` | `WE` | Kama: iki künc və hündürlük; birinci küncdən uzaqlaşır (3D) |
| `WHEREAMI` | `WHERE` | Kursorun harada olduğunu deyir. |
| `WHOHAS` |  | Çertyojı kimin açdığını deyir. CadCraft Studio hər açıq çertyojun yanında kiçik kilid faylı saxlayır (Plan.dwg.cclock: kim, nə vaxtdan, hansı versiya) və bağlananda onu silir. Seçimlər: Current (açıq çertyoj), File (birini seçin), FOlder (hər çertyoj ki, hansısa yerdə açıqdır; bu, Studio-ya həmin qovluqda kilid faylları saxlamağa imkan verir), Path (birini yazın), Name (başqalarının gördüyü ad). Beş dəqiqə yenilənməyən kilid köhnə sayılır. Brauzerdə mövcud deyil. |
| `WINDOW` | `WN` | Divara pəncərə qoy. |
| `XATTACH` | `XA` | Başqa DWG və ya DXF-i bu çertyojla bağla, yalnız oxunan (XREF onları siyahılayır və yenidən yükləyir) |
| `XCLIP` | `XC` | Blok referanslarını və bağlı çertyojları düzbucaqlıya və ya çoxbucaqlıya kəs, ya da kəsiyi sil. |
| `XLINE` | `XL` | Konstruksiya xətti, hər iki tərəfdə sonsuz: iki nöqtədən, üfüqi, şaquli, bucaq altında, bucağı ikiyə bölən, ya da xətdən ofset. |
| `XREF` | `XR`, `-XREF` | Bağlı çertyojlar (xarici istinadlar): siyahıla, qoş, yenidən yüklə, bağla (bind), ayır |
| `ZOOM` | `Z` | Genişlik, ya da pəncərə |
