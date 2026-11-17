---
title: Fayllar: nə açılır, nə saxlanılır
summary: CadCraft-ın açdığı, saxladığı və ixrac etdiyi formatlar, nəyin saxlanıldığı və ya çevrildiyi və fayllar haradadır.
keywords: xclip, clip, xclip sərhədi, bind clipped, dwg, dxf, pdf, r12, aç, saxla, ixrac, idxal, formatlar, çevrilmə, yükləmə, saveas, dxfout, fərqli saxla, dwg saxla, format, qsave, xref, xattach, bağlı çertyoj, xarici istinad, bağla, yenidən yüklə, ayır
from: b8c5778d
---

## Qısa baxış

| Format | Aç | Saxla | Qeydlər |
|---|---|---|---|
| DXF (mətn və ya ikili, istənilən versiya) | Bəli | Bəli, DXF R12, DXF 2000 və ya DXF 2000 (ikili) kimi | İkili DXF mətn kimi açılır və ikili olaraq geri saxlanılır. |
| DWG | Bəli | Bəli, DWG kimi (AutoCAD 2000, 2004, 2007, 2010, 2013 və ya 2018) | CadCraft-ın öz DWG kitabxanası ilə oxunur və yazılır (AutoCAD R13-dən 2018-ə qədər fayllar). DWG faylınız heç vaxt dəyişdirilmir. Zədələnmiş fayllar və oxucunun idarə etmədiyi versiyalar mesajla rədd edilir. |
| PDF | Səhifə gətirir: altlıq kimi və ya obyekt kimi ([PDF altlıqları](topic:pdf-underlay)) | Bəli, çap etməklə | Vərəqin və ya modelin miqyasda vektor PDF-i. |

Açdığınız (və ya {{ui:Yeni}} ilə başlatdığınız) hər çertyoj çertyoj sahəsi üzərində öz nişanını alır; hələ toxunulmamış yeni çertyoj əvəzinə yeni nişan əlavə edilmir. Nişana klikləyib keçin, {{ui:×}} ilə bağlayın (saxlanılmamış dəyişikliklər varsa CadCraft əvvəlcə soruşur) və ya açıq çertyojları yan-yana düzün: bax [Ekranı bölün](topic:split-screen).

## Çertyojun açılması

- {{key:Mod+O}} basın, {{ui:Aç}} üzərinə klikləyin və ya `OPEN` yazın, sonra faylı seçin.
- Ya da `.dwg` və ya `.dxf` faylını çertyoj sahəsinə sürükləyin.

Fayl brauzerinizin içində oxunur. Heç yerə yüklənmir. Tarixçə neçə obyekt və qatın gəldiyini və nə qədər vaxt çəkdiyini yazır; sol panelin {{ui:Çertyoj}} bölməsi formatı göstərir, məsələn "DWG 2018 (AC1032)".

DWG oxucusu CadCraft-ın bir hissəsidir və səhifə yükləndikdən sonra açdığınız ilk DWG ilə gətirilir (bir neçə yüz KB), ona görə ayrıca yükləmə gözləmək lazım deyil. Böyük DWG açılarkən səhifə cavab verməyə davam edir, çünki fayl fonda oxunur.

DXF 4 MB-lıq hissələrlə oxunur, heç vaxt bütöv bir mətn kimi deyil, beləliklə 512 MB-dan böyük DXF də açılır. Məhdudlaşdıran kompüterinizin yaddaşıdır: DXF açılarkən faylın ölçüsünün təxminən 16-dan 20 qatına qədər istifadə olunacağını gözləyin (testimizdə təxminən 690 000 obyektli 100 MB DXF təxminən 1,5 GB istifadə etdi).

### Nə gəlir

- Xətlər, qövslər, çevrələr, polixətlər (qövs seqmentləri ilə), ellipslər, nöqtələr, mətn və çoxsətirli mətn, solidlər, ştrixlamalar (standart naxışlar öz xətləri kimi, digərləri düz ton kimi), atributları ilə blok istinadları (redaktə edilə bilən dəyərlər; bax [Blok atributları](topic:attributes)), ölçülər və onların görünüş pəncərələri olan layout-lar.
- Splaynlar splayn kimi gəlir (dərəcə, nəzarət nöqtələri, düyünlər, çəkilər, uyğunlaşdırma nöqtələri); bax [Splaynlar və polixətlər](topic:splines).
- Bir qayıdış xətti və mətni olan çoxqayıdışlar (multileader) CadCraft çoxqayıdışları kimi gəlir ki, redaktə edə bilərsiniz (bax {{cmd:MLEADER}}). Digərləri (blokla, bir neçə qayıdış xətti və ya əyri xətlərlə) digər proqramın çəkdiyi kimi çəkilir və bir bütöv kimi hərəkət edir; tarixçə neçə olduğunu yazır.
- Şəkillər (görüntülər) CadCraft-a {{cmd:IMAGE}} ilə faylı verənə qədər şəkil faylının adı ilə çərçivə kimi göstərilir: bax [Çertyojda şəkillər](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout-lar çərçivə kimi göstərilir və onların altındakı görünməyə davam edir.
- DWG-də cədvəllər digər proqramın çəkdiyi kimi gəlir.
- Model fəzasındakı 3D üzlər {{ui:3D}} nişanında gəlir, 2D obyektlər kimi yox; blokların içindəkilər də belə, modeldəki hər blok istinadı üçün bir dəfə. Blokda və vərəqdə onlar da kontur kimi düz çəkilir. Bax: [Modeli 3D-də](topic:3d-solids).
- Qatlar öz rəngini, aç/bağlı, dondurulmuş, kilidli və çap parametrlərini saxlayır. DEFPOINTS heç vaxt çap olunmur.
- Ölçülər nöqtələri oxunan yerlərdə real, redaktə edilə bilən CadCraft ölçüləri olur. Əvvəlcə digər proqramın çəkdiyi kimi göstərilir; birini dəyişən kimi CadCraft onu öz üslubunda yenidən çəkir.
- Hər layout bir vərəq nişanına çevrilir. Digər proqramda hər layout-un gizli birinci görünüş pəncərəsi var ki, bu vərəqin özüdür; CadCraft onu çıxarır.

### Hələ gəlməyənlər

CadCraft-ın çəkə bilmədiyi hər şey sayılır, təxmin edilmir. Sol paneldəki "Bu fayl haqqında" qutusu onları "Hələ göstərilmir:" altında hər növ obyekt və sayı ilə sadalayır. Tipik hallar DXF-də cədvəllər, meshlər və blokların içindəki 3D solidlərdir. Model fəzasındakı 3D solidlər, regionlar və cisimlər 3D nişanında göstərilir (bax [Modeli 3D-də](topic:3d-solids#solids-from-other-programs)). Faylda fırlanmış görünüş pəncərələri olduğu kimi fırlanmış göstərilir və saxlayanda fırlanmasını saxlayır; cari UCS, adlandırılmış UCS-lər və fırlanmış görünüş də belədir.

Mətn bir Helvetica tipli şriftlə çəkilir. Orijinal proqramın daha dar şriftində bir sətirə sığan etiket CadCraft-da iki sətrə düşə bilər.

## Saxlamaq

Üç saxlama üsulu var. Hər biri bir nüsxə yükləyir.

- **Saxla**: {{key:Mod+S}} basın, {{ui:Saxla}} üzərinə klikləyin və ya `SAVE` yazın (həmçinin `QSAVE`). O, çertyojun formatında saxlayır: DWG açmısınızsa DWG, DXF açmısınızsa DXF. DWG gəldiyi versiyanı saxlayır (2018 faylı 2018 kimi saxlanılır). Yeni çertyoj bu brauzerdə {{ui:Fərqli saxla}} ilə sonuncu seçdiyiniz format və DWG versiyasını istifadə edir; heç seçməmisinizsə, AutoCAD 2000 formatında DWG.
- **Fərqli saxla**: {{key:Mod+Shift+S}} basın, {{ui:Fərqli saxla}} üzərinə klikləyin və ya `SAVEAS` yazın. {{ui:Surəti belə saxla}} dialoqu {{ui:DWG}} təklif edir, {{ui:Versiya}} siyahısı ilə (AutoCAD 2018, 2013, 2010, 2007, 2004 və ya 2000), {{ui:DXF R12}} və {{ui:DXF 2000}}, hər birində veriləcək fayl adı və çertyojun cari formatı və versiyası artıq seçilmiş halda. Yükləmək üçün {{ui:Saxla}} üzərinə klikləyin, ya da heç nə saxlamamaq üçün {{ui:Ləğv et}} (və ya {{key:Esc}}); tarixçə sonra "Saxlanılmadı." yazır. Seçdiyiniz qalır: {{key:Mod+S}} bu çertyoj üçün ondan istifadə edir və bu brauzerdə yeni çertyojlar onunla başlayır.
- **DXFOUT**: `DXFOUT` yazın. Həmişə DXF R12 nüsxəsini yükləyir, növbəti {{key:Mod+S}} isə çertyojun öz formatında saxlayır.

Brauzer `<çertyojun adı>.dwg` və ya `<çertyojun adı>.dxf` yükləyir. Hər saxlama **yeni yükləmədir**; açdığınız fayl heç vaxt üzərinə yazılmır və ya dəyişdirilmir. Tarixçə təsdiq edir, məsələn "Plan.dwg faylının surəti saxlanıldı (DWG (AutoCAD 2018)). Orijinal Plan.dxf dəyişdirilməyib." DXF üçün "(DXF R12, istənilən CAD proqramında açılır)" yazır. Altdakı sətirlər yolda dəyişən hər şeyi sadalayır.

CadCraft masaüstü tətbiqində işləyəndə saxlama digər masaüstü proqramlarındakı kimi işləyir: {{key:Mod+S}} çertyojunu açdığınız fayla öz formatı və versiyasında geri yazır, tarixçə harada saxlandığını göstərir. {{ui:Fərqli saxla}} və ixraclar sistemin saxlama dialoqunu göstərir, ikiklik etdiyiniz `.dwg`, `.dxf` və ya `.ccsheets` faylı CadCraft-da açılır.

PDF üçün əvəzinə çap edin (aşağıya bax).

## DWG nəyi saxlayır və nəyi dəyişir

CadCraft DWG-ni brauzerinizin içində özü yazır, oxuduğu eyni DWG kitabxanası ilə. {{ui:Fərqli saxla}}-da versiyanı seçin: AutoCAD 2000 formatı (fayl versiyası AC1015) ən çox proqramda açılır, köhnələr də daxil; yeni formatlar (2004, AC1018, 2018-ə qədər, AC1032) həqiqi rəngləri də saxlayır. Heç nə yüklənmir və DWG saxlamaq internetsiz də işləyir.

Hər versiya saxlanmış faylları üç digər proqramın DWG oxucusu və CadCraft-ın özü ilə geri oxunaraq yoxlanılır. CadCraft DWG-si hələ AutoCAD-də açılmayıb.

### DWG nəyi saxlayır

- Xətlər, qövslər, çevrələr, ellipslər, nöqtələr və qövs seqmentli polixətlər.
- Tək sətir mətn öz düzləşdirmə və en faktoru ilə.
- Çoxsətirli və sarıdılmış mətn, çoxsətirli mətn kimi. Digər proqram onu eyni en ilə yenidən sarıyır.
- Obyekt rəngləri: qata görə, blok görə, 255 standart rəng və 2004 formatında və sonrakılarda həqiqi rənglər.
- Qatlar öz rəngi, xətt tipi, xətt qalınlığı və aç, dondurulmuş, kilidli, çap parametrləri ilə; obyektlərin öz xətt tipləri, xətt qalınlıqları və xətt tipi miqyasları, xətt tipi naxışları və çertyojun xətt tipi miqyası.
- Çertyojun vahidləri və uzunluq formatı (onluq, fut və düym, kəsrlər…).
- Baza nöqtəsi ilə bloklar və atribut tərifləri, görünməz, sabit və əvvəlcədən təyin olunanlar da daxil.
- Blok istinadları miqyas, fırlanma və atribut dəyərləri ilə.
- Düz doldurmalar və naxışlı ştrixlamalar naxış, miqyas və bucaq ilə (naxışın öz xətləri, buna görə digər proqramlar CadCraft-ın çəkdiyi eyni xətləri çəkir).
- Ölçülər, real ölçülər kimi: digər proqramlar onları uzadılanda yenidən ölçür. Hər biri öz parametrlərini (mətn hündürlüyü, ox ölçüsü, onluqlar, uzunluq formatı) və mətnini saxlayır və hər DWG ölçüsünün malik olduğu çəkilmiş nüsxəni daşıyır.
- Vərəqlər (layout-lar): hər vərəq öz kağız ölçüsü və vahidləri ilə, üzərində çəkilənlər və öz görünüş pəncərələri, görünüşü və miqyası ilə.
- Adlandırılmış görünüşlər.
- Çoxqayıdışlar, çoxqayıdış kimi.
- Qat və blok adları yazdığınız kimi, böyük və kiçik hərflə. (DXF R12 onları böyük hərflə yazır.)

### DWG nəyi dəyişir

Bunların hər biri, tətbiq olunduqda, saxladıqdan sonra tarixçədə sadalanır.

| CadCraft-da | Saxlanılmış DWG-də |
|---|---|
| Həqiqi rənglər (rəng seçicisi ilə seçilmiş), 2000 formatında | Ən yaxın standart rəng: 2000 formatında yalnız 255 var. Onları saxlamaq üçün 2004 və ya sonrasını seçin |
| Vərəqin adlandırılmış görünüşləri | Kağız-fəza görünüşləri: DWG hansı vərəyə aid olduğunu demir, buna görə CadCraft faylı yenidən açanda birinci vərəyə aid olur |
| Sarıdılmış çoxsətirli mətn en faktoru ilə | Normal hərf eni: DWG-də en faktoru yalnız tək sətir mətnə tətbiq olunur |
| DWG-nin icazə vermədiyi simvolları olan qat və ya blok adları | Dəyişdirilib: bağlı çertyojdan olan `Base\|Walls` kimi ad `Base$0$Walls` olur (bağlı çertyojun bağlanmasının adlandırma üsulu), digər simvollar `_` olur |

### Niyə R12, və nə çevrilir

DXF kimi saxlayanda CadCraft DXF R12 yazır, hər CAD proqramının açdığı versiya. O, bəzi xüsusiyyətlərdən köhnədir, buna görə bəzi şeylər sadə formada yazılır:

| CadCraft-da | Saxlanılmış R12 faylında |
|---|---|
| Çoxsətirli mətn | Hər sətir üçün bir mətn obyekti |
| Ellipslər | Ellipsi izləyən polixətlər |
| Ştrixlamalar (açılmış fayllardan) | Yalnız konturları |
| Həqiqi rənglər (rəng seçicisi ilə) | Ən yaxın standart rəng |
| Xətt qalınlıqları və obyektlərin öz xətt tipi miqyasları | Buraxılır: R12-də heç biri yoxdur (xətt tipləri saxlanılır) |
| Qat və blok adları | Böyük hərflə yazılır; boşluqlar və digər simvollar `_` olur, adlar 31 simvola kəsilir ("Title block" `TITLE_BLOCK` olur) |
| Çap olunmamaq üçün təyin edilmiş qatlar | Digər proqramlar onları çap edəcək (CadCraft çertyojun vərəqi olduqda parametri yadda saxlayır) |
| Ölçülər | Öz çəkilmiş bloku olan real ölçülər, buna görə digər proqramlar onları gördüyünüz kimi göstərir |
| Çoxqayıdışlar | Çəkdikləri xətlər, ox ucu və mətn |
| Adlandırılmış görünüşlər | Saxlanılır, adlar böyük hərflərlə; vərəqin görünüşləri birinci vərəqə qayıdır |
| Bir neçə vərəq | Birinci vərəq hər proqramın göstərdiyi kağız fəzasıdır; digərləri `CCLAYOUT_1`, `CCLAYOUT_2` … adlı bloklar kimi saxlanılır ki, CadCraft faylı açanda onları yenidən vərəqlərə çevirir |

Tarixçə çertyojunuza tətbiq olunan bunların hər birini sadalayır.

:::tip
Bir neçə gün ərzində çertyoj üzərində işləmək üçün DXF kimi saxlayın və növbəti dəfə həmin DXF-i açın. CadCraft-ın çəkə biləcəyi hər şey, ölçülər, bloklar və bütün vərəqlər daxil olmaqla, gediş-gəliş zamanı qorunur.
:::

## Bağlı çertyojlar (xarici istinadlar)

{{cmd:XATTACH}} (`XA`, ya da {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Çertyoj bağla (xref)}}) başqa DWG və ya DXF bağlayır: faylı seçin, sonra yerinin üzərinə klikləyin ({{key:Enter}} onu 0,0-a qoyur). O, faylın adını daşıyan bir blok kimi gəlir, iki çertyojun vahidləri fərqli olduqda düzgün miqyasda. Onun qatları və blokları öz adlarını saxlayır, əvvəlinə bağlantının adı gəlir — `Plan|Walls`, `Plan|Door` — buna görə sizinkilərlə qarışmır: bağlı qatları öz qatlarınız kimi aç/bağla, dondur və ya kilidlə. Bağlantı yalnız oxunandır: digər çertyojda dəyişiklik edin və onu yenidən yükləyin. Bağlantının qatlarında təyin etdiyiniz (rəng, xətt tipi, xətt qalınlığı, aç/bağlı, dondurulmuş, kilidli, çap) çertyojun yenidən yüklənəndə, bağlantı hələ bağlantı olaraq qalarkən DWG kimi saxlayanda və başqa çertyoj bunu bağlayanda qorunur.

{{cmd:XREF}} (`XR`): `?` bağlantıları sadalayır (yüklənmiş və ya yüklənməmiş, hansı fayl, neçə istinad); `A` bağlayır; `R` birini faylından yenidən yükləyir (faylı yenidən seçin: brauzer qovluqlarınıza öz başına çata bilmir); `B` birini bağlayır (adi bloklara və qatlara çevrilir, `Plan$0$Walls` adı ilə); `D` birini ayırır (istinadları və qatları gedir). Hər biri bir geri alma addımıdır.

{{cmd:XCLIP}} (`XC`) blok istinadlarını və bağlantıları kəsir: onları seçin, `N` yeni sərhəd üçün, sonra `R` və iki künc və ya `P` və çoxbucaqlının nöqtələri ({{key:Enter}} onu bağlayır); `D` kəsməni silir. Yalnız içəridəki görünür və çap olunur, kəsmə istinadla birlikdə hərəkət edir. DWG və DXF 2000 kəsmələri saxlayır; DXF R12 istinadı bütöv saxlayır və bunu deyir. Kəsmələri olan bağlantını bağlayanda {{cmd:XREF}} `B` soruşur: `A` hamısını bağlayır, `C` hər istinadın yalnız kəsilmiş hissəsini saxlayır (xətlər və qövslər sərhəddə kəsilir; mətnlər və içdəki bloklar daxil etmə nöqtəsi içəridədirsə qalır).

Açdığınız çertyoj CadCraft-ın görə bilmədiyi faylları bağlaya bilər: neçə tanesinin yüklənmədiyini deyir. Onları görmək üçün {{cmd:XREF}}, `R` yazın və hər faylı seçin.

Saxlayanda yüklənmiş bağlantı faylın içinə **bağlanır** (digər proqramlar adi blokları və qatları `Plan$0$…` adı ilə görür) və tarixçə bunu deyir. Yüklənməmiş bağlantı DWG və DXF-də öz faylına bağlantı olaraq qalır.

## 3D-də açın

{{ui:View}} › {{ui:Daha çox}} › {{ui:ModelCraft-da aç}} ({{cmd:OPENIN3D}}) çertyoju yeni nişanda 3D modelləşdirmə tətbiqində DWG olaraq açır, yükləmədən. Orada edilən dəyişikliklər orada qalır; onları orada saxlayın. Menyu elementi yalnız həmin tətbiq təhvil verilmiş çertyoju qəbul edə bildiyi yerdə görünür.

## PDF çapı

{{key:Mod+P}} basın, {{ui:Çap et}} üzərinə klikləyin və ya `PLOT` yazın. PDF brauzerin içində hazırlanır və yüklənir, ya da çap üçün yeni nişanda açılır. Bax: [PDF-ə çap et](topic:plot-pdf).

## Fayllar haraya gedir

Hər saxlama və hər çap yükləmədir, buna görə fayllar brauzerinizin yükləmələri hara qoyursa oraya düşür: adətən Yükləmələr qovluğuna. Hər dəfə qovluq seçmək üçün brauzerinizdə yükləmə parametrini dəyişin; [Brauzerlər və kompüterlər](common:browsers) harada olduğunu göstərir.

Açdığınız və ya saxladığınız heç nə bizə göndərilmir. Bax: [Fayllarınız haraya gedir](common:your-files).

## PLN və PLA layihə faylları

CadCraft DWG və DXF çertyojlarını açır, Archicad-ın öz faylları (`.pln`, `.pla`, `.tpl`, `.bpn`) deyil. Birini açanda o nə olduğunu deyir. Archicad-da lazım olan görünüşləri və ya vərəqləri DWG kimi saxlayın və onları burada açın, ya da modeli IFC kimi ixrac edib BimCraft-da açın. BimCraft faylı təhvil ala bildikdə CadCraft {{ui:BimCraft-da aç}} təklif edir.

## Səhifə saxlamadan bağlanarsa

CadCraft dəyişdirdiyiniz hər çertyojun nüsxəsini yalnız bu brauzerdə saxlayır, redaktəni dayandırdıqdan bir az sonra. Sekme bağlanarsa, brauzer dayanarsa və ya kompüter saxlamamışdan yenidən başlayarsa, CadCraft növbəti başlayanda **İşinizi bərpa edək?** soruşur: {{ui:Bərpa et}} çertyojunu saxlanılmamış halda öz nişanında yenidən açır. Çertyojun saxlanması onun nüsxəsini silir. Bax: [İşinizi bərpa edin](common:recover).

## Onlayn və oflayn

Açmaq, çəkmək, saxlamaq (DWG və DXF) və çap etmək hamısı kompüterinizdə baş verir, buna görə CadCraft yükləndikdən sonra bağlantı olmadan işləyir.

CadCraft-ı heç bir bağlantı olmadan istifadə etmək üçün, onlayn olarkən yuxarıdakı paneldə {{ui:Oflayn üçün saxla}} üzərinə klikləyin. Etiket sayır ("Saxlanılır 40 / 212") və "Oflayn hazırdır" ilə bitir. Saxlanılmış nüsxəyə DWG oxucusu da daxildir, cəmi təxminən 5 MB, buna görə saxlandıqdan sonra **DWG faylları da oflayn açılır**. Düyməyə yenidən klikləyin: {{ui:Yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}} üçün. "Saxlamaq alınmadı" o deməkdir ki, bəzi fayllar yüklənmədi: bağlantını yoxlayın və yenidən cəhd etmək üçün klikləyin. "Oflayn mövcud deyil" bu brauzer pəncərəsinin nüsxə saxlaya bilmədiyini bildirir (məxfi pəncərələr və bəzi idarə olunan kompüterlər).

Saxlanılmış nüsxə olmadan DWG oxucusu səhifə yükləndikdən sonra ilk DWG-ni açanda gətirilir, buna görə DWG-ni oflayn açmaq uğursuz ola bilər; DXF fayllarına heç vaxt lazım deyil. CadCraft saxlanılmayıbsa, oflayn olarkən səhifəni yenidən yükləməyin.

Ətraflı üçün bax: [Oflayn işləmə](common:offline).

:::offline
İndi oflaynsınız. Çertyojlar DWG və ya DXF kimi saxlanılır və normal çap olunur, DXF faylları açılır. DWG faylları CadCraft "Oflayn hazırdır" yazırsa və ya DWG oxucusu bu nişanda artıq yüklənibsə açılır.
:::

## Fayllardakı məhdudiyyətlər

Məhdudiyyətlər və parametrlər (bax [Çertyoju məhdudlaşdırın](topic:constraints)) həm DWG, həm DXF-də saxlanılır. Hər məhdudlaşdırılmış obyekt kiçik bir CadCraft qeydi daşıyır (genişləndirilmiş məlumat), və `CADCRAFT_PARAMETRIC` adlı istifadə olunmamış blok məhdudiyyətləri və parametr cədvəlini saxlayır. Digər proqramlar çertyojları normal açır və ikisini də nəzərə almır; purge edəndə istifadə olunmamış bloku silə bilərlər. Qeydlər obyektlərə öz açarları ilə istinad edir, faylın handle-larına yox, buna görə handle-ları yenidən nömrələyən proqram onları pozmur. Başqa proqram məhdudlaşdırılmış obyekti silib və ya dəyişdirdikdə, CadCraft faylı açanda onun məhdudiyyətlərini atır və neçə olduğunu deyir. Onlarsız fayl məhdudiyyətsiz açılır.

Part modeler-dən ixrac olunan eskiz (`.json`) da açılır: bax [Eskizləri digər detal modelləşdiricilərlə köçürün](topic:solidworks-sketches).

## Hələ mövcud deyil

- Saxlanmış DXF-də obyekt kimi çoxqayıdışlar (R12-də yoxdur: onlar çəkdikləri kimi saxlanılır).
- Saxlanmış DXF-də şəkillər (çərçivə kimi saxlanılır; DWG onları şəkil kimi saxlayır) və altındakını gizlədən wipeout-lar.
- 2000-dən yeni DXF versiyasını saxlamaq.
- Kompüterlər arasında bulud saxlaması və sinxronizasiya.

Tam siyahı üçün bax: [Hələ hazır deyil](topic:not-built-yet).
