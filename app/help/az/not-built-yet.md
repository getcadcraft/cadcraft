---
title: Hələ hazırlanmayıb
summary: Bu CadCraft qaralama tətbiqinin cari versiyasının hələ nə etmədiyi və bu gün onun əvəzinə nə etmək lazım olduğu.
keywords: çatışmayan, məhdudiyyətlər, ctb, stb, çap üslubu, xassələr, ucs, annotativ, dinamik blok, spline, yol xəritəsi, dəstəklənmir, dwg saxlama, ştrixlama, uzatma, massiv, birləşdirmə, matchprop, qırma, uzatma, xətt tipi, xətt qalınlığı, xref, bulud, 3d, bərk cisimlər, boolean, multileader, wipeout
from: 87e56521
---

CadCraft hələ inkişaf mərhələsindədir. Bu səhifədə cari versiyanın nəyi etmədiyi sadalanır ki, onu axtarmayasınız. Hər bənddə bu gün onun əvəzinə nə etmək lazım olduğu göstərilir.

## Fayllar və saxlama

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| AutoCAD-in özündə yoxlanmış CadCraft DWG-si | Saxlanılan hər versiya üç başqa proqramın DWG oxuyucusu və CadCraft tərəfindən geri oxunur. Bax: [DWG nəyi saxlayır və nəyi dəyişir](topic:files#what-a-dwg-keeps-and-changes). |
| DXF 2000-dən yeni DXF saxlamaq | DXF 2000 kimi saxlayın, və ya AutoCAD 2018-ə qədər DWG kimi. |
| Brauzerdə açılmış faylın üzərinə yazmaq | Hər saxlama yeni nüsxə yükləyir; istəsəniz köhnə faylı özünüz əvəz edin. CadCraft Studio-da {{key:Mod+S}} açdığınız fayla geri yazır. |
| Kompüterlər arasında bulud saxlama və sinxronizasiya | CadCraft saxlamalarını hələlik buluda göndərmir: DWG və DXF fayllarınızı öz qovluqlarınızda saxlayın. CadCraft Studio-da [Tarixçə](topic:history) başqa yerdən saxlanmış çertyojun bulud versiyalarını və bu kompüterdə öz saxlamalarınızın nüsxələrini sadalayır. |
| Overlay-lər və əlaqəli çertyojun yerində redaktəsi | Çertyoju əlaqə kimi əlavə edin və digər çertyoj dəyişdikdən sonra yenidən yükləyin. Əlaqə DWG kimi saxlananda əlaqə olaraq qalır, və {{cmd:XCLIP}} onu kəsir. |
| DXF-də şəkillər; onların altını gizlədən wipeout-lar | DXF şəkli fayl adı ilə çərçivə kimi saxlayır; DWG onu şəkil kimi saxlayır — bax: [Çertyojdakı şəkillər](topic:pictures). Wipeout çərçivəsi kimi görünür. |
| Əyri istinad xətti olan multileader-lərin redaktəsi, məzmunun hər iki tərəfində istinad xətləri olan və ya qeyri-bərabər dönən və ya miqyaslanan blokla multileader-lər | Onlar digər proqramın çəkdiyi kimi çəkilir və birlikdə hərəkət edir. Bir qovşağa düz istinad xətləri olan və məzmun kimi mətn və ya blok olan multileader-lər redaktə oluna bilən kimi gəlir ({{cmd:MLEADEREDIT}}). |
| Digər proqramların cədvəllərində: blok saxlayan xana, xana daxilində mətn formatlaşdırması, DXF cədvəlinin xanalarının ayrıca sərhədləri və rəngləri, sütunlara bölünmüş cədvəl | Cədvəl redaktə oluna bilən cədvəl kimi açılır ({{cmd:TABLEDIT}}) və siz redaktə edənə qədər digər proqramın çəkdiyi kimi göstərilir; sonra CadCraft onu xanalarından yenidən çəkir: sadə mətn, `=G3*H3` və `=Sum(I3:I9)` kimi düsturlar, düzləmə və mətn hündürlükləri. Blok xanası sonra boş olur. Dəyişdirilməmiş DWG cədvəli gəldiyi xana məlumatı ilə geri saxlanılır. |
| Saxlanmış DXF-də real cədvəl obyekti | DWG cədvəli digər proqramların redaktə edə biləcəyi cədvəl kimi saxlayır. DXF onu çəkən blok kimi və CadCraft-ın öz qeydi ilə saxlayır: CadCraft onu yenidən cədvəl kimi açır; digər proqramlar blok görür. Güzgü əksi olan və ya qeyri-bərabər miqyaslı cədvəl DWG-də də belə saxlanır. |
| Digər proqramlarla kopyalama və yapışdırma | CadCraft buferi eyni brauzerdəki CadCraft çertyojları və sekmələri arasında işləyir, digər proqramlarla yox. DWG və ya DXF kimi saxlayıb orada açın. Bax: [Kopyala, yapışdır və ikiqat yarat](topic:copy-paste). |

## Çertyoj və redaktə

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| CadCraft-da olmayan ştrixlama naxışları və digər proqramların boyadığı kimi dəqiq gradient doldurmalar | Açılmış, CadCraft-da olmayan naxışlı ştrixlamalar bir tonla göstərilir. Gradient doldurma ({{cmd:GRADIENT}}) növü üzrə CadCraft-ın öz üsulu ilə boyanır: növünə görə digər proqramlara oxşar, nöqtə-nöqtə eyni deyil. DWG 2004 və sonrakı versiyalar onu real gradient ştrixlama kimi saxlayır; DXF 2000 və ya DWG 2000 faylında onu yalnız CadCraft geri oxuyur, digər proqramlar bərk doldurma görür. Naxışlar `.pat` faylından yüklənir, ştrixlama sərhədinə bağlana bilər və ona görə hərəkət edir: bax [Ştrixlama və doldurulmuş sahələr](topic:hatch). |
| Fiqur və ya mətn olan xətt tipləri, saxlanmış DXF R12-də xətt qalınlıqları | Xətt tipindəki fiqur və mətn xətlərin aralıqlarından çıxarılır; xətt qalınlıqlarını saxlamaq üçün DWG kimi saxlayın. |
| Saxlanmış DXF-də naxışlı ştrixlamalar | R12-də ştrixlama yoxdur: onlar kontur kimi saxlanılır. Naxışı saxlamaq üçün DWG kimi saxlayın. |
| Digər proqramların yaratdığı və ya redaktə edə biləcəyi massivlər; yol və polyar massivlərdə sıralar və səviyyələr; yol əyrisini izləyən massiv | ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; {{cmd:ARRAYEDIT}} ilə dəyişdirilir) ilə yaradılmış massiv CadCraft-ın öz rəqəmləri ilə blok istinadı kimi saxlanılır: digər proqramlar onu göstərir, köçürür, çap edir və partlatır, lakin sayını dəyişə bilmir; digər proqramda yaradılmış massiv burada sadə blok istinadı kimi açılır. Yol massivi öz yolunun surətini saxlayır: sonradan əyrini redaktə etmək elementləri köçürmür. |
| Digər proqramlara və ondan gələn kəsilmiş vərəq viewport-ları | {{cmd:VPCLIP}} ilə kəsilmiş və ya {{cmd:MVIEW}} Polygonal ya da Object ilə yaradılmış viewport CadCraft-ın öz konturu ilə saxlanılır: digər proqramlar onu ətrafındakı düzbucaqlı kimi açır, digər proqramda kəsilmiş viewport burada öz düzbucaqlısı kimi açılır. DXF R12 yalnız düzbucaqlını saxlayır. |
| {{cmd:STRETCH}} kəsişən poliqonla | Bir və ya bir neçə kəsişən pəncərədən istifadə edin. |
| {{cmd:PEDIT}} Edit vertex (komanda sətrində hər dəfə bir təpə) | Tutacaqlar və Xassələrdəki təpə brauzeri (hər təpə, onun enləri və əyilməsi). PEDIT-in qalan hissəsi hazırdır: bax [Spline-lar və polixətlər](topic:splines). |
| Ellipslər və spline-lar üzərində {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} və {{cmd:JOIN}} | Bu komandaların qəbul etdiyi polixətt almaq üçün spline-ı {{cmd:EXPLODE}} edin (və ya {{cmd:PEDIT}} edin). |
| Polixəttin qövs seqmenti ilə növbəti seqment arasında yuvarlaqlaşdırma (fillet) və faska; fillet-in xətti polixəttə birləşdirməsi | Polixətti {{cmd:EXPLODE}} edin, sonra parçalara fillet tətbiq edin. Fillet qövsü ayrıca obyekt kimi əlavə olunur. |
| Trim və extend: Layihə seçimi (3D) və polixəttin qövs ucunu uzatmaq | Trim-i çertyoj müstəvisində edin; qövs ucu üçün polixətti partlatın və ya qövsü yenidən çəkin. |
| OLE obyektləri: onları əlavə etmək, işlətmək və ya redaktə etmək; DWG-də faylın yerləşdirdiyi obyektləri göstərmək; metafayl şəkilləri | Bax: [Şəkillər](topic:pictures#objects-from-other-programs-ole). DXF obyektləri öz bitmap-ı və ya etiketli çərçivə kimi göstərilir; DWG obyektləri saxlanılır, yerində çəkilmir (OLELIST onları sadalayır və şəkil nüsxəsini istədiyiniz yerə qoyur). |
| Abzas mətnində formatlaşdırma kodlarını (qalın, yığma kəsrlər, sözə görə rənglər) yazmaq; Helvetica tipli fontdan başqa fontlar; sütunlar | Faylda gələn formatlaşdırma saxlanılır, çəkilir və saxlanılır (bax: Mətn); yeni abzas mətni bir hündürlük və rəngdədir. |
| Abzas mətninin fırlanması zamanı redaktə | Redaktor səviyyə ilə açılır; mətn öz fırlanmasını saxlayır. |
| DXF-də multileader obyekt kimi saxlanılan multileader-lər | DWG onları multileader kimi saxlayır, hər istinad xətti və məzmun kimi blok ilə; DXF onların çəkdiyi şeyi saxlayır (xətlər, ox başları və mətn və ya blok). |
| Cədvəllərdə ({{cmd:TABLE}}): xana daxilində sətir sarınan mətn, hissələrə bölünən cədvəllər, dialoqda cədvəl üslubunun öz mətn üslubu və sətir növünə görə rənglər, `.xlsx` cədvəl faylına məlumat bağlantısı və ya faylı özü oxuyan bağlantı | Xanada mətn yalnız sizin qırdığınız yerdə qırılır ({{key:Alt+Enter}}); sütunu genişləndirin. {{cmd:DATALINK}} `.csv` faylını oxuyur, {{cmd:DATALINKUPDATE}} faylı yenidən seçməyinizi istəyir. {{cmd:DATAEXTRACTION}} və {{cmd:COUNTTABLE}} çertyoju özbaşına izləməyən cədvəl yaradır: onları yenidən işlədin (canlı sayım: {{cmd:BOMTABLE}}). |
| Saxlanmış faylda ayrıca saxlanılan atribut təsvirləri (blokdan kənarda), çoxsətirli atributlar | Saxlamadan əvvəl atribut təsvirlərini blokun içinə qoyun: təkbaşına olduqda teq göstərən mətn kimi saxlanılır. |
| Qat vəziyyətləri (hansı qatların açıq olduğunu saxlamaq və bərpa etmək) | {{cmd:LAYISO}} / {{cmd:LAYUNISO}} istifadə edin, və ya qatları əl ilə açıb-bağlayın. |
| Pəncərə poliqonu və kəsişən poliqonla seçim, və saxlanmış seçim filtrləri | Hasar (`F`), Pəncərə, Kəsişmə, Çıxar (`R`), şərt üçün {{cmd:QSELECT}}. |

## Xassələr paneli

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| Uyğunlaşdırma (Fit) seçimlərini çəkmək, və xətti və düzləşdirilmiş olanlardan başqa ölçülərdə ölçü mətninin üfüqi mövqeyi və xəttin altında mətn | Onlar obyektdə saxlanılır, Xassələrdə göstərilir və yadda saxlanılır; CadCraft mətni öz qaydası ilə yerləşdirir. |
| Digər proqramların gördüyü materiallar | Saxlanmış fayl CadCraft üçün material adını saxlayır; digər proqramlar qatın materialını göstərir. |
| DWG 2000 və DXF fayllarında şəffaflıq | Digər proqramlar həmin obyektləri bərk göstərir; CadCraft şəffaflığı saxlayır. Hamı üçün DWG 2004 və ya sonrakı kimi saxlayın. |
| Digər proqramda yaradılmış ştrixlama əlaqəsi | CadCraft öz əlaqəsini DWG və DXF 2000 fayllarında saxlayır; digər proqramlarda yaradılmış əlaqələr oxunmur. `HATCHEDIT` və Link istifadə edin: bax [Ştrixlama və doldurulmuş sahələr](topic:hatch). |
| Xassələrdə UCS-də koordinatlar | Xassələr dünya koordinatlarını göstərir; status çubuğu və {{cmd:ID}} UCS koordinatlarını göstərir. Bax: [Görünüşü fırladın və öz koordinatlarınızdan istifadə edin](topic:ucs-and-turned-view). |
| Annotativ obyektin hər miqyasında ayrıca mövqe; digər proqramların saxladığı miqyas üzrə qeydləri oxumaq | Annotativ mətn və ya ölçü miqyasların siyahısını saxlayır ({{cmd:OBJECTSCALE}}) və hər viewport onu öz miqyasına uyğun ölçüdə, eyni yerdə göstərir. Siyahı CadCraft-ın öz məlumatı kimi saxlanılır: digər proqram obyekti yalnız ölçüləndiyi bir miqyasda görür, digər proqramda yaradılmış siyahı isə oxunmur. Bax: [Vahidlər, vərəqlər və miqyaslar](topic:units-papers-scales#annotate-by-scale). |
| Dinamik blokun məsafələrini, bucaqlarını və çevirmələrini dəyişmək; DWG-nin başqa versiyasında və ya DXF kimi saxlananda dinamik qalan dinamik bloklar | Görünürlük vəziyyətini Xassələr › Fərdi bölməsində dəyişin; onun digər dəyərləri orada yalnız oxunan göstərilir. DWG kimi çertyojun gəldiyi versiyada saxlananda dinamik qalır. Bax: [Dinamik bloklar](topic:dynamic-blocks). |
| Spline fit tolerantlığı, spline dərəcəsi 6 və yuxarı, 3D spline-lar | Fit və nəzarət nöqtələri, dərəcə 1-dən 5-ə və çəkilər hazırdır: bax [Spline-lar və polixətlər](topic:splines). Spline-ın hündürlüyü (Z) saxlanılmır. |

## Dəqiqlik köməkçiləri

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| Komandalar arası nöqtələrdən izləmə və izləmə parametrləri dialoqu (nisbi polyar bucaqlar, əlavə bucaqlar) | {{cmd:POLARANG}} addımı təyin edir; növbəti komandada nöqtələri yenidən götürün. |
| Şəbəkəyə tutma | Koordinatları yazın; şəbəkə yalnız vizual bələdçidir. |
| Sahənin küncləri seçilərkən Arc və Length seçimləri, və MEASUREGEOM Volume | Konturu {{cmd:PLINE}} ilə çəkin (qövslər daxil), sonra {{cmd:AREA}} `O`. |
| Tutacaqlar üçün dinamik giriş və onun seçim siyahısı (aşağı ox) | Komanda sətrində seçimlər göstərilir. |
| Dərəcə-dəqiqə-saniyə ilə, qrad ilə və ya geodeziya azimutları ilə bucaqlar | Onluq dərəcə yazın: 30°30' üçün `30.5`. |
| Baxış meneceri dialoqu; vərəqin adlandırılmış baxışları ki, həmin vərəqdə geri qayıdır | {{cmd:NAMEDVIEW}} baxışları sadalayır və bərpa edir. Saxlanmış fayl onları saxlayır, lakin vərəq baxışları birinci vərəqdə geri qayıdır. |

## Vərəqlər, ölçülər və çap

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| Viewport miqyası, qat və ya blok kimi adlandırılmış obyekt, hiperlink, vərəq nömrəsi və adından kənar vərəq dəsti sahələri; digər proqramların yeniləyəcəyi sahə obyektləri kimi yazılan sahələr | {{cmd:FIELD}} tarix, fayl adı, vərəq nömrəsi, adı və sayı, çertyojun xassələri ({{cmd:DWGPROPS}}), obyektin sahəsi, uzunluğu və digər xassələri və düsturları verir; mətndə, atributlarda və cədvəl xanalarında. Digər proqram CadCraft sahəsini son oxuduğu mətn kimi göstərir; CadCraft digər proqramın tarix, fayl adı, xassə, vərəq və ifadə sahələrini oxuyur, digər növləri mətn kimi saxlayır. Viewport-un miqyası əl ilə yazılır. |
| Hazırda hansı ölçü üslubunun cari olduğunu saxlamaq; ölçü mətninin sərbəst yerə sürüklənməsi | Çertyoj Standard cari olaraq açılır. Mətn ölçü xəttinin üzərində durur (DIMTEDIT Left / Right / Center). Bax: [Ölçü ölçülərini təyin edin](topic:dimension-settings). |
| Hesablaya bilmədiyi açılmış fayllardan redaktə oluna bilən iki sətirli bucaq ölçüləri | Faylda çəkildiyi kimi göstərilir. Koordinat, qövs uzunluğu və sınıq radius ölçüləri redaktə oluna bilən ölçü kimi açılır. |
| CTB oxuyucusunun digər proqramın faylı ilə yoxlanması (dərc olunmuş təsvirdən qurulub), adlandırılmış çap üslubları (STB), dither, qələm nömrələri, CTB-dən boz tonlar və çap üslubunda uyğunlaşan xətt tipi | {{ui:Çap üslubu cədvəlləri}} cədvəlini yaradın (rəng, boz, mürəkkəb, xətt qalınlığı, xətt tipi, xətt ucu və birləşməsi və rənginə görə doldurma üslubu): bax [Çap üslubu cədvəlləri](topic:plot-pdf#plot-style-tables). |
| Səhifə quruluşları | Kağız, miqyas və çap üslubunu {{ui:PDF-ə çap et}} dialoqunda seçin; vərəq öz çap üslubunu saxlayır. |
| Hindi və mürəkkəb şəkilləndirmə tələb edən digər yazılar PDF-lərdə, və nadir ideoqramlar (Avropa yazıları, Kiril, Yunan, İvrit, Ərəb, Fars, Urdu, Tay, Çin, Yapon və Koreya çapı) | "?" kimi çap olunur. |
| Eyni çap olunmuş PDF-də ərəb yazısı ilə Çin, Yapon və ya Koreya mətni | Çap bir fontu daşıyır: iki yazıdan biri "?" kimi çap olunur. |
| Mətndə aydın istiqamət işarələri (yerləşdirmələr, üstünlüklər, izolyatorlar) | Onlar nəzərə alınmır: hər sətir yalnız öz hərflərinə görə sıralanır. |
| Əlavə edilmiş PDF səhifəsindəki şəkillər, çapda | Səhifənin xətləri, doldurmaları və mətni çap olunur. Yalnız şəkil olan səhifə {{cmd:SCANATTACH}} ilə gəlir və şəkillər çap olunur. Bax: [PDF altlıqları](topic:pdf-underlay#plot-and-save). |
| CadCraft Studio-dan lazerə iş göndərmək (Studio-da Web Serial yoxdur) | G-kodunu saxlayın və lazerinizin öz proqramı ilə göndərin, və ya Chrome və ya Edge-dən göndərin. Bax: [Çertyoju lazerə göndərin](topic:laser-cutting#send-from-the-browser). |

## Məhdudiyyətlər və parametrlər

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| Vərəqlərdə, bloklarda, ellipslərdə, spline-larda və ya mətndə məhdudiyyətlər | {{ui:Model}} sekməsində məhdudiyyət qoyun: xətlər, polixətlər, çevrələr, qövslər və nöqtələr üzərində. |
| Hamar (G2) və polixəttin qövs əyilməsinə birbaşa məhdudiyyət | Toxunan və bərabər; qövs seqmenti iki ucunu izləyir. |
| İstinad (sürülən) ölçü məhdudiyyətləri və {{cmd:DCANGULAR}}-da `3Point` | Sadə ölçü (DIMLINEAR …) dəyəri göstərir, amma idarə etmir. |
| Kağızda sabit ölçülü ölçü məhdudiyyətləri və onların çapı | Onlar yalnız ekranda göstərilir; çap üçün sadə ölçülər əlavə edin. |
| EXPLODE, BREAK, JOIN və yeni obyektlər yaradan digər komandalarla keçən məhdudiyyətlər, və kəsilmiş polixətlərdə | Onları yenidən məhdudlaşdırın (AUTOCONSTRAIN kömək edir). {{cmd:MIRROR}} və {{cmd:TRIM}} xətlərin, qövslərin və çevrələrin məhdudiyyətlərini saxlayır. |
| CadCraft-da dizayn cədvəlləri (konfiqurasiyalar) | Parametrləri paneldə dəyişin. |
| SolidWorks ilə tam gediş-dönüş sınağı | Ona güvənməzdən əvvəl makronun qurduğu eskizi yoxlayın. |

## 3D

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| Yuvarlaqlaşdırma, faska, qabıqlar və lofts; yuxarı qalxan yollarla süpürmə (3D yollar) | Qövslərlə konturları ekstrüziya edin, üzləri itələyib çəkin, fırladın və düz yollar üzrə süpürün. |
| Yuxarıdan başqa istiqamətdə ekstrüziya | Şəkli yerdə çəkin və yuxarı və ya aşağı ekstrüziya edin (istəsəniz daralma ilə və ya yol boyu); sonra cismi fırladın. |
| 2D obyektlərin hündürlüyü və qalınlığı | Çertyoj 3D sekmədə yerdə (hündürlük 0) qalır. |
| Digər proqramlardan cisimlər, bölgələr və gövdələrin redaktəsi; blokların içində göstərilməsi; onların üzləri süpürülmüş, lofts və ya digər sərbəst səthlərdə; polyface və poliqon mesh-lər | Model sahəsindəki bərk cisimlər 3D sekmədə olduğu kimi göstərilir və DWG-də dəyişdirilmədən geri saxlanılır; çəkilməyən şeylər 3D sekmə açılanda sadalanır. Mesh-ləri model sahəsində 3D üzlər kimi tələb edin. Bax: [Digər proqramlardan bərk cisimlər](topic:3d-solids#solids-from-other-programs). |
| Bərk cisimlərin kopyalanması və yapışdırılması | 3D sekmədə {{cmd:COPY}} istifadə edin. Bufer yalnız 2D obyektləri saxlayır. |
| Kəsimlər, bərk cisimlərdəki sonrakı dəyişikliklərə uyğunlaşan görünüşlər və çap olunmuş vərəqlərdə kölgəli bərk cisimlər | {{cmd:VIEWBASE}} düz görünüşlər yerləşdirir (anlıq görüntü); bərk cisimləri dəyişdirdikdən sonra yenidən işlədin. |
| Materiallar, teksturalar və işıqlandırma parametrləri | Vizual üsullar: kölgəli, kənarlar, gizli xətt, məftil, X-ray. |
| Xəritə qatlarının çapı, vərəqlərin viewport-larında və 3D sekmədə; faylla saxlanılan şəkillər; çertyojun yerinin digər proqramlar üçün DWG 2000–2007 və DXF R12-də yazılması | Xəritə qatları ekranda model sahəsinin altında göstərilir; sistem və qat siyahısı çertyojla birlikdə saxlanılır: bax [Çertyojun altındakı xəritə qatları](topic:map-layers) |
| 6 milyon nöqtədən çox və ya 512 MB-dan böyük E57 skanları, skaner istehsalçılarının öz faylları (RCP, RCS, FLS, LGS, TZF, ZFS), çertyojla saxlanılan və ya çap olunan nöqtə buludu, 3D sekmədə buluda tutma, Model sekməsində şaquli (kəsik) dilimlər | Böyük və ya istehsalçıların öz skanlarını LAS və ya LAZ kimi ixrac edin ([Nöqtə buludu formatları](topic:point-cloud-formats)); çertyoju hər açdığınızda buludu yenidən əlavə edin; Model sekməsində plan dilimindən tikinti xətlərini izləyin: bax [Nöqtə buludu üzərində tikinti xətlərini izləmək](topic:point-clouds) |
| Skanları birləşdirmə: hədəfləri (kürələr, şahmat taxtaları) skanda özü tapmaq, bütün skanları birlikdə həll etmək (paket tənzimləməsi, bundle adjustment), miqyas, modelə qarşı birləşdirmə | Uyğun nöqtələri seçin və ya hədəf koordinatlarını yazın, sonra ICP ilə hər dəfə bir skanı təkmilləşdirin: bax [Bir neçə skanı birə birləşdirin](topic:register-scans) |

## Rutinlər və fərdiləşdirmə

| Hələ hazırlanmayıb | Bunun əvəzinə, hazırda |
|---|---|
| Kompilyasiya olunmuş və ya qorunmuş LISP (.fas, .vlx), yerli proqramlar (.arx, .crx, .dbx) və VBA (.dvb) | Rutinin .lsp mənbəyini {{cmd:APPLOAD}} ilə yükləyin. |
| LISP-in `grread`, reaktorlar (`vlr-…`), əyri funksiyaları (`vlax-curve-…`), lüğətlər və genişləndirilmiş məlumat, Express Tools-un `acet-…` | Dilin qalan hissəsi işləyir: bax [LISP rutinlərini işlədin](topic:run-lisp). Rutin çatışmayan funksiyaya çatanda komanda sətri onun adını göstərir. |
| Rutinin dialoqunda şəkillər və slaydlar | Boş çərçivə kimi göstərilir; dialoqun qalan hissəsi işləyir. |
| CraftScript (.craft), CadCraft-da Lua və Python | PartCraft-ın Script iş sahəsində işlədin. |
| Lent menyu üslublarında qat, rəng və xətt tipi siyahıları | {{ui:Qatlar}} paneli və {{ui:Xassələr}} istifadə edin. |
| Startup Suite və kompüterinizdə saxlanılan və ya sinxronlaşan ləqəblər | Onlar bu brauzerdə saxlanılır; masaüstü tətbiq və bulud xidməti onları sizin üçün saxlayacaq. Studio-da `acad.lsp` və `acaddoc.lsp` seçdiyiniz dəstək qovluğundan oxunur (Tətbiqləri yüklə). |

## Kömək

Kömək bu quruluşu təsvir edir. Bir şey əlavə olunanda, o, bu səhifədən çıxıb təlimatlara keçir.
