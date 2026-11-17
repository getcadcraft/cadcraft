---
title: Versiya 0.7-də yenilik (əvvəlki)
summary: PDF altlıqları və PDF idxalı, avtomatik izləmə ilə skanlanmış çertyojlar, SPLINE, SPLINEDIT və PEDIT ilə həqiqi splaynlar, ölçü üslubu meneceri, öz formatını saxlayan mətn, WBLOCK və öz miqyaslarınız, digər proqramlardan 3D solidlər, skanların qeydiyyatı, Laser paneli, USD ixracı, CadCraft Studio-da Tarix və çap, rəhbərli ilk çertyoj, alət panelinin istənilən tərəfdə və ya az sətirdə olması və AI köməkçiləri üçün daha çox.
keywords: versiya 0.7 yenilikləri, əvvəlki buraxılış, buraxılış qeydləri, dəyişikliklər, changelog, 0.7, versiya, yeni xüsusiyyətlər, pdf, pdfattach, pdfimport, altlıq, skan, scanattach, scantrace, izləmə, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatlaşdırma, wblock, scalelistedit, miqyas siyahısı, acis, 3D solidlər, registerscans, skanların qeydiyyatı, icp, e57, las, laser, grbl, g-code, usd, usdout, tarix, versiyalar, müqayisə, çap, printer, png, svg, çap üslubu, xətt tipi, xülasə vərəqi, əmr xəritəsi, alət panelinin yeri, alət sıraları, toolbardock, regen, regenall, trekpad, sürüşdürmə, kod səhifəsi, kiril, koreys, çin, yapon, elektrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, dəstək qovluğu, köməkçilər, mcp, vahidlər, portuqal dili
from: d07ca034
---

Bu, CadCraft 0.6-ya nisbətən 0.7-də nə dəyişdiyidir. Bunun çoxu Discord-da istənilmişdi. Siyahı sahələrə görə qruplaşdırılıb, ən vacibi birinci.

## Yeni

### PDF-lər və skanlanmış çertyojlar

- **PDF səhifəsini çertyojun altına qoyun.** {{cmd:PDFATTACH}} (`PDFATT`) səhifəni həqiqi ölçüsündə və ya yazdığınız miqyasda yerləşdirir. Onun xətlərinə tutun, solğunlaşdırın, monoxromatik edin ({{cmd:PDFADJUST}}), kəsin ({{cmd:PDFCLIP}}) və PDF-in öz qatlarını dəyişin ({{cmd:PDFLAYERS}}). Xətlər, doldurmalar və mətn kimi çap olunur, DWG və ya DXF 2000 isə onu fayla keçid kimi saxlayır. PDF-i {{ui:Aç}} ilə açdıqda ondan əlavə etmək və ya idxal etmək soruşulur. Bax: [PDF altlıqları və PDF idxalı](topic:pdf-underlay).
- **PDF səhifəsini çertyoj obyektlərinə çevirin.** {{cmd:PDFIMPORT}} (`PDFIM`) xətlər, polixətlər, dairələr, qövslər, bərk ştrixləmələr və mətn yaradır, PDF-in adını daşıyan qatlarda, həqiqi ölçüdə, yazılmış miqyasda və ya iki nöqtə və həqiqi məsafədən miqyaslanmış şəkildə, bir geri qaytarma addımında. Bax: [Səhifəni idxal et](topic:pdf-underlay#import-a-page).
- **Skanlanmış çertyojlar.** {{cmd:SCANATTACH}} PNG, JPEG və ya TIFF (bir səhifə və ya hamısı) və ya şəkil olan PDF səhifəsini gətirir. Sonra onu iki nöqtədən miqyaslayın ({{cmd:SCANSCALE}}), düzləşdirin ({{cmd:SCANALIGN}}), öz uzun xətlərinə görə kvadratlaşdırın ({{cmd:SCANDESKEW}}), ağ-qara edin və ləkələri təmizləyin ({{cmd:SCANCLEAN}}), kəsin və hissələrini silin. Hər addım bir geri qaytarma addımıdır və orijinal fayl saxlanılır. Bax: [Skanlanmış çertyojlar və izləmə](topic:scanned-drawings).
- **Skanı xətlərə və qövslərə izləyin.** {{cmd:SCANTRACE}} skanın xətlərini yeni qatda, SCAN-TRACE, təyin etdiyiniz tolerantlıqla xətt və qövs kimi çəkir, mətn və ştrixləməni olduğu kimi qoyur. Hesabat nə yaratdığını və nəyi qoyduğunu göstərir, bu nəticənin düz olduğuna dair iddia deyil: onu vərəqlə yoxlayın. {{cmd:RASTERSNAP}} obyekt tutmalarının skanın uclarını, künclərini və kəsişmələrini tapmasına imkan verir. Heç nə hara göndərilmir və öyrədilmiş model istifadə olunmur. Bax: [İzləmə](topic:scanned-drawings#the-trace).

### Çəkmə və redaktə

- **Həqiqi splaynlər.** {{cmd:SPLINE}} (`SPL`) nöqtələr üzərindən və ya idarəetmə nöqtələrindən əyri çəkir (dərəcə 1-dən 5-ə), son tangenslərlə; {{cmd:SPLINEDIT}} (`SPE`) uyğunluq və ya idarəetmə nöqtələrini köçürür, əlavə edir və silir, çəkiləri təyin edir, açır, bağlayır, tərsinə çevirir və ya splaynı polixətt edir. DWG və DXF fayllarından olan splaynlar splayn kimi açılır, DWG və DXF 2000 isə onları splayn kimi saxlayır. Bax: [Splaynlər və polixətlər](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) polixətləri bağlayır və açır, onlara xətləri və qövsləri birləşdirir, bir en təyin edir, təpə nöqtələrindən keçən əyri və ya onlar boyunca splayn uyğunlaşdırır və Decurve ilə onu geri alır, tərsinə çevirir və bir neçəsini birdən redaktə edir. Bax: [Polixətti redaktə et](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) bloku, bəzi obyektləri və ya bütün çertyojı yalnız istifadə etdikləri qatları, üslubları və blokları saxlayan yeni DWG və ya DXF-ə yazır. Bax: [Bloku və ya obyektləri öz faylına yazın](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN və REGENALL.** {{cmd:REGEN}} (`RE`) çertyojdan cari səhifəni yenidən çəkir, {{cmd:REGENALL}} (`REA`) isə hər səhifəni, bölməni və açıq çertyojları. Bax: [REGEN və REGENALL](topic:commands#regen-and-regenall).

### Mətn və ölçülər

- **Mətn öz formatını saxlayır.** Digər proqramlardan abzas mətni hər söz üzrə rəngləri, qalın və kursiv, altdan xətt, yığılmış kəsrləri və hündürlükləri saxlayır: onlar ekranda və PDF-lərdə çəkilir, sözləri redaktə etdikdə qorunur və geri saxlanılır. Bax: [Digər proqramlardan abzas mətni daxilində formatlaşdırma](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Ölçü üslubu meneceri.** {{cmd:DIMSTYLE}} (`D`) adlı ölçü üslublarını yaradır, dəyişdirir, müqayisə edir və tətbiq edir; üslubu dəyişmək onu istifadə edən hər ölçünü dəyişir. {{cmd:DIMEDIT}} (`DED`) mətni yerinə qaytarır, yeni mətn yazır, mətni çevirir və ya uzatma xətlərini əyir; {{cmd:DIMTEDIT}} mətni sola, sağa və ya mərkəzə köçürür. Bax: [Adlandırılmış ölçü üslubları](topic:dimension-settings#named-dimension-styles).
- **Öz miqyaslarınız.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) görünüş pəncərəsi və çap miqyası siyahılarına 1:75 kimi miqyaslar əlavə edir; onlar çertyojda saxlanılır (DWG və DXF 2000), digər proqramdan olan çertyoj öz siyahısını gətirir. Bax: [Miqyaslar](topic:units-papers-scales#scales).
- **Digər əlifbalarda mətn.** Kiril, koreys, çin, yapon və ya vyetnam kod səhifələrində saxlanılmış DXF faylları indi mətni ilə açılır, çin, yapon və koreys mətni PDF-lərdə çap olunur (çap ilk dəfə lazım olanda daha böyük şrift yükləyir). Bax: [Şrift](topic:text#font).

### Çap

- **Çap üslubu cədvəllərində daha çox.** Hər rəng üçün cədvəl indi xətt tipini, xəttin ucunu və birləşmə yerini, həmçinin bərk doldurmaları ştrixləmə xətləri kimi çap edən doldurma üslubunu təyin edə bilir; cədvəlin öz xətt qalınlıqları siyahısı və xətt tipi miqyası var. Bax: [Çap üslubu cədvəlləri](topic:plot-pdf#plot-style-tables).
- **Çap, və PNG və SVG faylları.** Çap dialoqunda {{ui:Çap et…}}, {{ui:PNG yüklə}} (300 dpi) və {{ui:SVG yüklə}} var. CadCraft Studio-da kompüterin printerlərini, onların kağızını və nüsxələrin sayını göstərir. Bax: [Çap](topic:plot-pdf#print) və [Şəkil və SVG faylları](topic:plot-pdf#picture-and-svg-files).

### 3D və nöqtə buludları

- **Digər proqramlardan 3D solidlər.** Çertyojun model sahəsindəki solidlər, regionlar və cisimlər 3D bölməsində yalnız oxuma kimi göstərilir, DWG kimi saxlanılanda dəyişmədən geri yazılır. CadCraft hələ çəkmədiyi səthlərdəki üzlər təxmin edilmir, siyahıya alınır. Bax: [Digər proqramlardan solidlər](topic:3d-solids#solids-from-other-programs).
- **Bir neçə skanın qeydiyyatı.** {{cmd:REGISTERSCANS}} (`REGSCAN`) müxtəlif yerlərdən alınmış skanları bir çərçivəyə nöqtə cütləri ilə və ya yazılmış hədəf koordinatları ilə yerləşdirir, ICP ilə dəqiqləşdirir, qeydiyyatı kiçik layihə faylı kimi saxlayır və qeydiyyatdan keçmiş buludu bir LAS və ya E57 faylı kimi yazır. Bax: [Bir neçə skanı birə qeyd edin](topic:register-scans).
- **USD ixracı.** {{cmd:USDOUT}}, ya da {{cmd:EXPORT3D}} › {{ui:USD}}, 3D bölməsinin solidlərini `.usda`, `.usdc` və ya `.usdz` kimi yazır. Bax: [3D modeli USD kimi ixrac et](topic:usd).
- **3D bölməsində hesablamalar.** 3D bölməsinin alətləri məsafə istədikdə, əmr sətrində olduğu kimi, hesablama yaza bilərsiniz. Bax: [Yazılmış dəyərdə hesab-kitab](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Hazırlamaq

- **Çertyojun lazerə göndərilməsi.** {{cmd:LASER}}, ya da {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Lazer…}}, çertyojun üzərində panel açır: hər qat kəsir, cızır, xətləri oyur, doldurur, şəkli oyur və ya göndərilmir, güc, sürət və keçidlərlə birlikdə. Önizləmə redaktələrinizi izləyir, {{ui:G-kodu saxla…}} GRBL lazer rejimi G-kodunu yazır, Chrome və ya Edge-də panel işi çərçivəyə ala və USB ilə göndərə bilir. Parametrlər çertyojda saxlanılır (DWG və DXF). Bax: [Çertyoju lazerə göndərin](topic:laser-cutting).
- **Elektrik əlavəsində bina quraşdırma simvolları.** Data, telefon və TV rozetkaları, açar və vaxt açarları, termostat, çıxış işarəsi, detektorlar, zəng nöqtəsi və siqnal, ventilyator, su qızdırıcısı, plita, EV şarj nöqtəsi, enerji sayğacı və alt-panel, həmçinin RCD və RCBO simvolları. Dövrə RCD daşıya bilir, panel cədvəlində RCD sütunu var, yoxlamalar 30 mA və ya daha az RCD-siz rozetka dövrələrini adlandırır. Bu, planlaşdırma xatırlatmasıdır, norma yoxlaması deyil.
- **P&ID əlavəsi.** P&ID proses diaqramları çəkir: birləşmə nöqtələri olan simvollar, proses və siqnal xətləri, etiketlər, xətt nömrələri, xətt, avadanlıq, cihaz və klapan siyahıları (CSV və ya iş kitabı) və yoxlamalar. CadCraft ilə gəlir və {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Əlavələr}} bölməsində yandırana qədər söndürülüb. Bu çəkiliş köməyidir, mühəndislik təsdiqi deyil və onun sözləri hələlik yalnız ingilis dilindədir.

### Başlanğıc və ekran

- **Rəhbərli ilk çertyoj.** {{cmd:TOUR}} (ya da başlanğıc kartdakı {{ui:Turu başladın}}) sizi real çertyojda altı addımdan keçirir: xətt, dairə, köçürmə, kəsmə, silmə və ölçü. CadCraft içi boş açılanda ilk dəfə özü başlayır. Bax: [Rəhbərlik istəyirsiniz?](topic:getting-started#prefer-to-be-guided)
- **Xülasə vərəqi və əmr xəritəsi.** [Xülasə vərəqi](topic:cheat-sheet) gündəlik 40 əmri bir səhifədə verir, həmçinin çap üçün PDF kimi; [əmr xəritəsi](topic:command-map) isə əmrləri qısa adları ilə, A-dan Z-yə siyahılayır.
- **Alət paneli istənilən tərəfdə.** {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Alət panelinin yeri}}: yuxarıda (əvvəlki kimi), aşağıda, solda və ya sağda, ya da {{cmd:TOOLBARDOCK}} yazın. Bax: [Alət panelinin yeri](topic:settings#toolbar-position).
- **Alət sıraları.** {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Alət sıraları}}: sığdırmaq üçün sarma, 2 sıra və ya 1 sıra; CadCraft alət paneli və Çəkiliş (klassik) və Lent üslubları üçün. {{key:Shift+Ctrl+F1}} onlar arasında keçir, {{key:Ctrl+F1}} düymələrin göstərdiklərindən keçir və {{cmd:TOOLBARROWS}} və {{cmd:TOOLBAR}} onları təyin edir. Başlanğıc göstərişində bağlama düyməsi var. Bunu pull request kimi göndərən GJoe2-yə təşəkkür. Bax: [Alət sıraları](topic:settings#toolbar-rows).

### CadCraft Studio-da

- **Tarix.** {{cmd:HISTORY}} (`HIST`), ya da {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Tarix…}}: çertyojı açıb saxladıqda Studio-nun saxladığı surətlər və buluddan açdıqda çertyojun bulud versiyaları. Birini açın və ya bərpa edin, ya da ikisini müqayisə edin; əlavə olunan, silinən və dəyişən şeylər rənglə göstərilir. Bax: [Tarix](topic:history).
- **acad.lsp və acaddoc.lsp.** {{cmd:APPLOAD}}-da dəstək qovluğu seçin: bu iki fayl CadCraft başlayanda yüklənir (acaddoc.lsp hər yeni çertyoj səhifəsi üçün yenidən), `S::STARTUP` isə onlardan sonra işləyir. Bax: [Tətbiqləri yükləyin](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Çap dialoqu öz pəncərəsində.** Başlıq çubuğundakı düymə onu başqa monitora qoya biləcəyiniz pəncərəyə köçürür. Bax: [Dialoqu köçürün](common:arrange-panels#move-a-dialog).

### AI köməkçiləri üçün

- **Ad ilə fayllar, seçdiyiniz qovluqlarda.** CadCraft Studio-da köməkçi faylları ad ilə aça, saxlaya və çap edə bilər və əmrə istədiyi faylı verə bilər (fayldan INSERT, COUNT-un ixracı, SAVEAS, PLOT), lakin yalnız {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Köməkçilər}} › {{ui:İstifadə edə biləcəyi qovluqlar}} altında əlavə etdiyiniz qovluqların içində. Bax: [Ona seçdiyiniz qovluqlarda fayllardan istifadə etməyə icazə verin](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Az çağırış.** Köməkçi bütün əmr sətrini bir dəfəyə yaza bilər, çağırışları arasında əmri açıq saxlaya bilər, obyektləri siyahıya salmadan tipə və qata görə saya bilər və bloku atribut dəyərləri ilə bir addımda yerləşdirə bilər.
- **Pəncərəsiz.** `cadcraft` əmr sətri SVG çaplarını yazır və bir çox faylı eyni anda çevirir, çap edir, yoxlayır və ya təsvir edir. MCP paketi hələ dərc olunmayıb. Bax: [CadCraft-ı açmadan fayllarla işləmək](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Dəyişdi

- **Trekpad sürüşdürür.** Trekpadda iki barmağı hərəkət etdirin, 2D görünüş onları izləyir; sıxma və siçan təkəri miqyası dəyişir. Bax: [Siçan, trekpad və toxunma](topic:mouse-trackpad-touch).
- **OLE obyektləri saxlanılır.** DXF-in daxil edilmiş obyektləri öz şəkilləri və ya etiketli çərçivə kimi göstərilir və DXF 2000 ilə geri saxlanılır. DWG-nin obyektləri DWG kimi saxlanılanda saxlanılır və geri yazılır, lakin hələ göstərilmir. Əvvəl saxlananda itirilirdi. Bax: [Digər proqramlardan obyektlər (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Yeni çertyojun vahidləri** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} bölməsində ulduzla seçdiyiniz vahidi izləyir.

## Düzəldildi

- Boş açılan, ya da görünüş pəncərəsini itirən və yerində bütün modeli göstərən tərtibatlar indi öz həqiqi görünüş pəncərələri ilə açılır. Məzmununa bağlantısı olmayan tərtibat saxlanılır və açılış hesabatı bunu bildirir.
- Köhnə kod səhifələrində DXF faylları pozulmuş kiril və koreys mətni göstərirdi. İndi düzgün oxunur.
- Digər proqramlardan abzas mətni açılanda formatını itirirdi və sadə mətn kimi geri saxlanılırdı.

## Hər tətbiqdə

- **Vahidlər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} uzunluq, sahə, həcm, bucaq və meyil üçün ayrı-ayrılıqda siyahıya malikdir, vahidlərin təriflərinin verdiyi dəqiq ölçülərlə (ABŞ sorğu futu öz vahididir). İstifadə etmədiyiniz vahidləri söndürün, onlar vahid siyahılarından çıxır; birini ulduzla seçin, yeni iş onunla başlayır. Fayl həmişə öz vahidini saxlayır. CadCraft-da ulduz yalnız çertyojun daşıya biləcəyi vahid olduqda yeni çertyojun vahidlərini təyin edir; CadCraft-ın öz {{ui:Vahidlər}} qutusu hələ açarları izləmir. Çertyojun vahidi olduqdan sonra yazdığınız uzunluq istənilən vahidin işarəsini daşıya bilər. Bax: [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists).
- **Sıx tərtibat və yığışan panellər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Tərtibat sıxlığı}} › {{ui:İxcam}} ekrana daha çox sığdırır (toxunma ekranları və telefonlar böyük düymələrini saxlayır). Hər yan panelin nazik başlıq çubuğu var: onu sürükləyib paneli yerləşdirmək və ya üzdürmək, başqa panelin çubuğuna buraxıb bir çərçivəni səhifələr kimi paylaşmaq, kənara sürüşmək üçün bərkitmək, ya da gizlədib kənardan geri gətirmək olar. Bax: [Panelləri təşkil edin](common:arrange-panels#make-the-layout-denser).
- **Dialoqlar köçür.** Dialoqu başlıq çubuğundan tutub çertyojdan kənara sürükləyin; onu tərk etdiyiniz yerə qayıdır. Başlıq çubuğuna iki dəfə klikləyib onu yenidən mərkəzləşdirin. Bax: [Dialoqu köçürün](common:arrange-panels#move-a-dialog).
- **AI köməkçilər üçün reseptlər.** Öz köməkçiniz üçün on işlənmiş sorğu (çertyojun təmizlənməsi, dəstin çapı, çertyojların yoxlanılması, modelə suallar, həcmlərin hesablanmasının cəmlənməsi, detal variantının sınanması…), hər biri çağırdığı alətlər və lazım olan icazələrlə, hər biri testlərimizlə yenidən işə salınır. Tətbiqlərin içində AI yoxdur. Bax: [AI köməkçilər üçün reseptlər](common:assistants-recipes).
- **Dillər.** **Português (Portugal)** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Dil}} bölməsində yenidir. Həmin dil, **Português (Brasil)**, **Español (México)** və **Bahasa Indonesia** indi tətbiqlərin hər sözünə malikdir; bunlar hələ ana dili danışanın nəzərdən keçirmədiyi qaralamalardır. Yardım mövzuları ingilis dilindədir.
- **CadCraft Studio** yeniləmə yoxlanışının niyə uğursuz olduğunu bildirir (sisteminiz üçün hələ fayl yoxdur, şəbəkə yoxdur, pis imza), sadəcə "Hazırdır" demək əvəzinə, və bağladığınız Yeniliklər kartını daha yeni buraxılış olana qədər yenidən göstərməyi dayandırır.

## Bu versiyada hələ yoxdur

- **0.7 kod imzalı deyil.** İmzalama və Microsoft Store paketi sertifikat yoxlaması hələ gəlmədiyi üçün 0.8-ə keçdi. Hər faylın yanındakı SHA-256-nı getcadcraft.com/download-da yoxlayın. Windows-da SmartScreen quraşdırıcını dayandırırsa, {{ui:Ətraflı}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-da ilk dəfə CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. CadCraft Studio hələ tətbiq mağazasında yoxdur və iPad və ya iPhone versiyası hələ yoxdur.
- {{ui:Vahidlər}} bölməsindəki bucaq və meyil siyahıları saxlanılır, lakin hələ heç bir qutu onları oxumur.
- DWG-nin OLE obyektləri saxlanılır, lakin göstərilmir, OLE obyektlərinin içindəki metafayl şəkilləri isə çəkilmir.
- Digər proqramlardan çap üslubu cədvəllərinin (CTB faylları) oxunması nümunə fayl gözləyir.
- `\M+` kodları ilə yazılmış köhnə Asiya mətni oxunur, lakin hələ digər proqramın faylı ilə yoxlanılmayıb.
- PDF altlıqları: səhifənin içindəki şəkillər ekranda göstərilir, lakin çap olunmur; köməkçinin çapı altlıqları çıxarır, və digər proqramların saxlanılmış kəsik və miqyası necə oxuduğu onlarda yoxlanılmayıb.
- Tarix: CadCraft saxlamalarını hələ buluda göndərmir, buna görə bulud versiyaları digər cihazlardan və veb-dən saxlanılanlardır. Tarix yalnız CadCraft Studio-dadır.
- Studio yenidən başladıqdan sonra acad.lsp dəstək qovluğunu saxlayıb-saxlamadığı hələ yoxlanılmayıb; soruşsa, APPLOAD-da qovluğu yenidən seçin.
- Lazer paneli hələ real lazerdə sınanmayıb: hər parametri tullantı materialda yoxlayın. CadCraft Studio-da Web Serial yoxdur, buna görə Studio-da panel yalnız G-kodunu saxlayır.
- Skanların qeydiyyatı uydurma skanlarda sınanıb, hələ real skaner dəstində yox.
- İki barmaqla sürüşdürmə simulyasiya olunmuş trekpad hadisələri ilə sınanıb, hələ real trekpadda yox.
- {{cmd:PEDIT}}-də Təpə nöqtəsini redaktə et seçimi yoxdur (tutacaqlardan və ya Xassələrdən istifadə edin). Ofset, kəsmə, uzatma, fileto, qırma və birləşdirmə hələ splaynları qəbul etmir; splaynın hündürlüyü (Z) saxlanılmır.
- Yeni abzas mətninə hələ formatlaşdırma kodları verilə bilməz, SVG çaplarında formatlaşdırılmış mətn bir rəngdə göstərilir.
- WBLOCK-un Bütöv çertyoj seçimi yalnız modeli yazır, vərəqləri yox. Cari ölçü üslubu faylda saxlanılmır: çertyoj Standard cari ilə açılır.
- Lent menyu üslublarında hələ qat, rəng və xətt tipi siyahıları yoxdur: {{ui:Qatlar}} panelindən və {{ui:Xassələr}} bölməsindən istifadə edin.
- Nöqtə buludları hələ çertyojda saxlanılmır və çap olunmur, E57 faylları isə 6 milyon nöqtəyə və 512 MB-a qədər açılır.
- CadCraft-ın saxladığı DWG faylları hələ AutoCAD-in özündə yoxlanılmayıb.

Qalan hər şey [Hələ qurulmayanlar](topic:not-built-yet) bölməsindədir.
