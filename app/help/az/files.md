---
title: Fayllar: nə açılır, nə saxlanılır
summary: CadCraft-ın açdığı, saxladığı və ixrac etdiyi formatlar, nəyin saxlanıldığı və ya çevrildiyi, fayllarınızın harada olduğu.
keywords: xclip, klip, xclip sərhədi, klipi bağla, dwg, dxf, pdf, r12, aç, saxla, ixrac, idxal, formatlar, çevrilmə, yükləmə, saveas, dxfout, fərqli saxla, dwg saxlama, format, qsave, xref, xattach, bağlı çertyoj, xarici istinad, bərkit, yenidən yüklə, ayır
from: 6d68b34e
---

## Qısa baxış

| Format | Aç | Saxla | Qeydlər |
|---|---|---|---|
| DXF (mətn, istənilən versiya) | Bəli | Bəli, DXF R12 və ya DXF 2000 kimi | İkili (binary) DXF qəbul edilmir: əvvəlcə onu mətn DXF kimi saxlayın. |
| DWG | Bəli | Bəli, DWG kimi (AutoCAD 2000, 2004, 2007, 2010, 2013 və ya 2018) | CadCraft-ın öz DWG kitabxanası ilə oxunur və yazılır (AutoCAD R13-dən 2018-ə qədər fayllar). DWG-niz heç vaxt dəyişdirilmir. Zədələnmiş fayllar və oxucunun işləmədiyi versiyalar mesajla rədd edilir. |
| PDF | Səhifəni gətirir: altlıq (underlay) kimi və ya obyektlər kimi ([PDF altlıqları](topic:pdf-underlay)) | Bəli, çap etməklə | Vərəqin vektor PDF-i və ya modelin miqyasda vektor PDF-i. |

Açdığınız (və ya {{ui:Yeni}} ilə başlatdığınız) hər çertyoj çertyoj sahəsinin üstündə öz sekməsini alır; hələ heç bir dəyişiklik edilməmiş yeni çertyoj üçün əlavə sekmə açılmır. Keçmək üçün sekmənin üzərinə klikləyin, bağlamaq üçün {{ui:×}} düyməsinə basın (saxlanılmamış dəyişikliklər varsa CadCraft əvvəlcə soruşur) və ya açıq çertyojları yan-yana düzmək üçün: [Ekranı bölün](topic:split-screen).

## Çertyojun açılması

- {{key:Mod+O}} basın, {{ui:Aç}} düyməsinə klikləyin və ya `OPEN` yazın, sonra faylı seçin.
- Və ya `.dwg` və ya `.dxf` faylını çertyoj sahəsinə sürükləyin.

Fayl brauzerinizin daxilində oxunur. Heç yerə yüklənmir. Tarixçə neçə obyekt və qatın gəldiyini və nə qədər vaxt çəkdiyini bildirir; sol paneldəki {{ui:Çertyoj}} bölməsi formatı göstərir, məsələn "DWG 2018 (AC1032)".

DWG oxucusu CadCraft-ın bir hissəsidir və səhifə yükləndikdən sonra açdığınız ilk DWG ilə birlikdə gətirilir (bir neçə yüz KB), ona görə ayrıca yükləmə gözləmək lazım deyil. Faylı fonda oxuyur, ona görə böyük DWG açılarkən səhifə cavab verməyə davam edir.

### Nə gəlir

- Xətlər, qövslər, çevrələr, polixətlər (qövs seqmentləri ilə), ellipslər, nöqtələr, mətn və çoxsətirli mətn, solidlər, ştrixlamalar (standart naxışlar xətləri kimi, digərləri vahid tonla), blok istinadları atributları ilə (redaktə oluna bilən dəyərlər; bax: [Blok atributları](topic:attributes)), ölçülər və vərəqlər (layout) öz görünüş pəncərələri ilə.
- Splaynlar splayn kimi gəlir (dərəcə, nəzarət nöqtələri, düyünlər, çəkilər, uyğunlaşdırma nöqtələri); bax: [Splaynlar və polixətlər](topic:splines).
- Bir istinad xətti və mətni olan multileaderlər CadCraft multileaderi kimi gəlir və redaktə oluna bilir (bax: {{cmd:MLEADER}}). Digərləri (blok, bir neçə istinad xətti və ya əyri xətlərlə) digər proqram necə çəkibsə elə çəkilir və bir bütöv kimi hərəkət edir; tarixçə neçə olduğunu bildirir.
- Şəkillər {{cmd:IMAGE}} ilə faylı verənə qədər şəklin fayl adı ilə çərçivə kimi görünür: bax: [Çertyojda şəkillər](topic:pictures#show-the-pictures-a-dwg-uses). Silmə sahələri (wipeout) öz çərçivəsi kimi görünür, altında olanlar isə görünməkdə qalır.
- DWG-də cədvəllər digər proqram necə çəkibsə elə gəlir.
- Model fəzasındakı 3D üzlər 2D obyekt kimi yox, {{ui:3D}} sekmesində gəlir; blokların içindəkilər də belədir, model içində hər blok istinadı üçün bir dəfə. Blokda və vərəqdə onlar konturlar kimi düz də çəkilir. Bax: [Modeli 3D-də](topic:3d-solids).
- Qatlar öz rəngini, aç/bağlı, dondurulmuş, kilidli və çap parametrlərini saxlayır. DEFPOINTS heç vaxt çap olunmur.
- Nöqtələri oxuna bildiyi yerdə ölçülər əsl, redaktə oluna bilən CadCraft ölçüləri olur. Əvvəlcə digər proqramın çəkdiyi kimi göstərilir; birini dəyişən kimi CadCraft onu öz üslubunda yenidən çəkir.
- Hər vərəq (layout) vərəq sekmesi olur. Digər proqramda hər layout-un gizli ilk görünüş pəncərəsi var ki, o vərəqin özüdür; CadCraft onu kənarda qoyur.

### Hələ gətirilməyənlər

CadCraft-ın çəkə bilmədiyi hər şey sayılır, təxmin edilmir. Sol paneldəki "Bu fayl haqqında" qutusu bunları "Hələ göstərilmir:" ardınca hər növ obyekt və sayı ilə sadalayır. Tipik hallar DXF-də cədvəllər, meshlər və blokların içindəki 3D solidlərdir. Model fəzasındakı 3D solidlər, regionlar və cisimlər 3D sekmesində göstərilir (bax: [Modeli 3D-də](topic:3d-solids#solids-from-other-programs)). Faylda burulmuş görünüş pəncərələri burulmuş kimi göstərilir və saxlanılanda burulmasını saxlayır; cari UCS, adlandırılmış UCS-lər və fırladılmış görünüş də belədir.

Mətn bir Helvetica tipli şriftlə çəkilir. Orijinal proqramın daha dar şriftində bir sətirə sığan yazı CadCraft-da iki sətrə bölünə bilər.

## Saxlama

Saxlamağın üç yolu var. Hər biri bir surəti yükləyir.

- **Saxla**: {{key:Mod+S}} basın, {{ui:Saxla}} düyməsinə klikləyin və ya `SAVE` yazın (həmçinin `QSAVE`). Çertyoju onun formatında saxlayır: açdığınız DWG-dirsə DWG, DXF-dirsə DXF. DWG öz gəldiyi versiyanı saxlayır (2018 faylı 2018 kimi saxlanılır). Yeni çertyoj bu brauzerdə {{ui:Fərqli saxla}} ilə son seçdiyiniz formatı və DWG versiyasını istifadə edir; heç nə seçməmisinizsə, AutoCAD 2000 formatında DWG.
- **Fərqli saxla**: {{key:Mod+Shift+S}} basın, {{ui:Fərqli saxla}} düyməsinə klikləyin və ya `SAVEAS` yazın. {{ui:Surəti belə saxla}} dialoqu {{ui:DWG}} təklif edir, {{ui:Versiya}} siyahısı (AutoCAD 2018, 2013, 2010, 2007, 2004 və ya 2000), {{ui:DXF R12}} və {{ui:DXF 2000}}, hər birinin yaradacağı fayl adı ilə, çertyojun cari formatı və versiyası artıq seçilmiş halda. Yükləmək üçün {{ui:Saxla}} düyməsinə, heç nə saxlamamaq üçün {{ui:Ləğv et}} (və ya {{key:Esc}}) düyməsinə klikləyin; tarixçə bu halda "Saxlanmadı." yazır. Seçdiyiniz qalır: {{key:Mod+S}} bu çertyoj üçün ondan sonra onu istifadə edir, bu brauzerdə yeni çertyojlar onunla başlayır.
- **DXFOUT**: `DXFOUT` yazın. Həmişə DXF R12 surəti yükləyir; növbəti {{key:Mod+S}} isə yenə çertyojun öz formatında saxlayır.

Brauzer `<çertyojun adı>.dwg` və ya `<çertyojun adı>.dxf` yükləyir. Hər saxlama **yeni yükləmədir**; açdığınız fayl heç vaxt üzərinə yazılmır və dəyişdirilmir. Tarixçə bunu təsdiqləyir, məsələn: "Plan.dwg kimi surət saxlanıldı (DWG (AutoCAD 2018)). Orijinal Plan.dxf dəyişməyib." DXF üçün "(DXF R12, istənilən CAD proqramında açılır)" yazır. Altındakı sətirlər yolda dəyişən hər şeyi sadalayır.

CadCraft masaüstü tətbiqində işlədikdə saxlama digər masaüstü proqramlar kimi işləyir: {{key:Mod+S}} çertyoju açdığınız fayla, öz formatında və versiyasında geri yazır, tarixçə harada saxlandığını bildirir. {{ui:Fərqli saxla}} və ixrac əməliyyatları sistemin saxlama dialoqunu göstərir; iki dəfə klikləyib açdığınız `.dwg`, `.dxf` və ya `.ccsheets` fayl CadCraft-da açılır.

PDF üçün isə çap edin (aşağıya bax).

## DWG nəyi saxlayır və nəyi dəyişir

CadCraft DWG-ni brauzerinizin daxilində, oxuduğu eyni DWG kitabxanası ilə özü yazır. Fərqli saxla-da versiyanı seçin: AutoCAD 2000 formatı (fayl versiyası AC1015) ən çox proqramda, hətta köhnələrdə də açılır; daha yeni formatlar (2004, AC1018, 2018-ə qədər, AC1032) həqiqi rəngləri də saxlayır. Heç nə yüklənmir və DWG saxlamaq oflayn işləyir.

Hər versiya saxlanılmış faylları üç digər proqramın DWG oxucusu və CadCraft-ın özü ilə geri oxumaqla yoxlanılır. CadCraft DWG-si hələ AutoCAD-in özündə açılmayıb.

### DWG nəyi saxlayır

- Xətlər, qövslər, çevrələr, ellipslər, nöqtələr və qövs seqmentləri ilə polixətlər.
- Hizalanması və en əmsalı ilə tək sətirli mətn.
- Çoxsətirli və sarılan mətn, çoxsətirli mətn kimi. Digər proqram onu eyni enlə yenidən sarır.
- Obyekt rəngləri: qata görə, bloka görə, 255 standart rəng və 2004 formatı və sonrakılarda həqiqi rənglər.
- Qatlar öz rəngi, xətt tipi, xətt qalınlığı və aç/bağlı, dondurulmuş, kilidli, çap parametrləri ilə; obyektlərin öz xətt tipləri, xətt qalınlıqları və xətt tipi miqyasları, xətt tipi naxışları və çertyojun xətt tipi miqyası.
- Çertyojun vahidləri və uzunluq formatı (onluq, fut və düym, kəsrlər…).
- Baza nöqtəsi və atribut tərifləri ilə bloklar, o cümlədən görünməz, sabit və əvvəlcədən təyin olunmuş olanlar.
- Blok istinadları miqyası, fırlanması və atribut dəyərləri ilə.
- Düz doldurmalar və naxışlı ştrixlamalar naxışı, miqyası və bucağı ilə (naxışın öz xətləri, belə ki digər proqramlar CadCraft-ın çəkdiyi eyni xətləri çəkir).
- Ölçülər əsl ölçülər kimi: digər proqramlar onları uzadanda yenidən ölçür. Hər biri öz parametrlərini (mətn hündürlüyü, ox ölçüsü, onluq işarələr, uzunluq formatı) və mətnini saxlayır, həmçinin hər DWG ölçüsünün daşıdığı çəkilmiş surəti daşıyır.
- Vərəqlər (layout-lar): hər vərəq öz kağız ölçüsü və vahidləri ilə, üzərində çəkilənlər və öz görünüş və miqyası ilə görünüş pəncərələri.
- Adlandırılmış görünüşlər.
- Multileaderlər, multileader kimi.
- Qat və blok adları yazdığınız kimi, böyük və kiçik hərflərlə. (DXF R12 onları böyük hərflərlə yazır.)

### DWG nəyi dəyişir

Hər biri, tətbiq olunduqda, saxladıqdan sonra tarixçədə sadalanır.

| CadCraft-da | Saxlanmış DWG-də |
|---|---|
| Həqiqi rənglər (rəng seçicisi ilə seçilmiş), 2000 formatında | Ən yaxın standart rəng: 2000 formatında yalnız 255 var. Həqiqi rəngləri saxlamaq üçün 2004 və ya sonrakı kimi saxlayın |
| Vərəqin adlandırılmış görünüşləri | Kağız fəzasında görünüşlər: DWG hansı vərəyə aid olduğunu demir, ona görə CadCraft faylı yenidən açanda onlar birinci vərəyə aid olur |
| Enə görə amilli çoxsətirli mətn | Normal hərf eni: DWG-də en əmsalı yalnız tək sətirli mətnə tətbiq olunur |
| DWG-nin icazə vermədiyi simvolları olan qat və ya blok adları | Dəyişdirilir: `Base\|Walls` kimi bağlı çertyojdan olan ad `Base$0$Walls` olur (bağlı çertyojun bərkidilməsi bu adı necə verirsə) və digər simvollar `_` olur |

### Niyə R12 və nə çevrilir

Çertyoju DXF kimi saxlayanda CadCraft DXF R12 yazır — hər CAD proqramının aça biləcəyi versiya. O, bəzi xüsusiyyətlərdən köhnədir, ona görə bəzi şeylər sadə formada yazılır:

| CadCraft-da | Saxlanmış R12 faylında |
|---|---|
| Çoxsətirli mətn | Hər sətir üçün ayrı mətn obyekti |
| Ellipslər | Ellipsi izləyən polixətlər |
| Ştrixlamalar (açılmış fayllardan) | Yalnız konturları |
| Həqiqi rənglər (rəng seçicisi ilə seçilmiş) | Ən yaxın standart rəng |
| Xətt qalınlıqları və obyektlərin öz xətt tipi miqyasları | Buraxılır: R12-də heç biri yoxdur (xətt tipləri saxlanılır) |
| Qat və blok adları | Böyük hərflərlə yazılır; boşluqlar və digər simvollar `_` olur, adlar 31 simvola qədər kəsilir ("Title block" `TITLE_BLOCK` olur) |
| Çapa qoyulmayan qatlar | Digər proqramlar onları çap edəcək (CadCraft çertyojun vərəqi olduqda parametri yadda saxlayır) |
| Ölçülər | Öz çəkilmiş bloku olan əsl ölçülər, belə ki digər proqramlar onları gördüyünüz kimi göstərir |
| Multileaderlər | Onların çəkdiyi xətlər, ox ucu və mətn |
| Adlandırılmış görünüşlər | Saxlanılır, adlar böyük hərflərlə; vərəqin görünüşləri birinci vərəqə qayıdır |
| Bir neçə vərəq | Birinci vərəq hər proqramın göstərdiyi kağız fəzasıdır; digərləri `CCLAYOUT_1`, `CCLAYOUT_2` … adlı bloklar kimi saxlanılır, CadCraft faylı açanda onları yenidən vərəqlərə çevirir |

Tarixçə çertyojunuza tətbiq olunan hər birini sadalayır.

:::tip
Bir çertyoj üzərində bir neçə gün işləmək üçün DXF kimi saxlayın və növbəti dəfə həmin DXF-i açın. CadCraft-ın çəkə bildiyi hər şey, o cümlədən ölçülər, bloklar və bütün vərəqlər, bu gediş-gəliş zamanı qorunur.
:::

## Xarici istinadlar (xarici referanslar)

{{cmd:XATTACH}} (`XA`, və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Çertyoj bağla (xref)}}) başqa DWG və ya DXF bağlayır: faylı seçin, sonra yerinin üzərinə klikləyin ({{key:Enter}} onu 0,0-a qoyur). Bu, faylın adını daşıyan bir blok kimi gəlir, iki çertyojun vahidləri fərqli olanda düzgün miqyasda. Onun qatları və blokları öz adlarını bağlantının adı önündə saxlayır — `Plan|Walls`, `Plan|Door` — belə ki sizinkilərlə heç vaxt qarışmır: bağlı qatları yandırıb-söndürün, dondurun və ya kilidləyin, öz qatlarınız kimi. Bağlantı yalnız oxunandır: digər çertyojda dəyişiklik edin və onu yenidən yükləyin. Bağlantının qatlarında təyin etdiyiniz (rəng, xətt tipi, xətt qalınlığı, aç/bağlı, dondurma, kilid, çap) onu yenidən yüklədikdə, bağlantı hələ bağlantı olaraq qalarkən çertyoju DWG kimi saxladıqda və başqa çertyoj bu çertyoju bağladıqda saxlanılır.

{{cmd:XREF}} (`XR`): `?` bağlantıları sadalayır (yüklənmiş və ya yüklənməmiş, hansı fayl, neçə istinad); `A` bağlayır; `R` birini öz faylından yenidən yükləyir (faylı yenidən seçin: brauzer qovluqlarınıza öz başına çata bilmir); `B` birini bərkidir (adi bloklara və qatlara çevrilir, adları `Plan$0$Walls` olur); `D` birini ayırır (onun istinadları və qatları gedir). Hər biri bir geri qaytarma addımıdır.

{{cmd:XCLIP}} (`XC`) blok istinadlarını və bağlantıları kəsir: onları seçin, yeni sərhəd üçün `N`, sonra `R` və iki künc və ya `P` və çoxbucaqlının nöqtələri ({{key:Enter}} onu bağlayır); `D` kəsməni silir. Yalnız sərhədin içində olan görünür və çap olunur, kəsmə istinadla birlikdə hərəkət edir. DWG və DXF 2000 kəsmələri saxlayır; DXF R12 istinadı bütöv saxlayır və bunu bildirir. Kəsilmiş istinadları olan bağlantını bərkidəndə {{cmd:XREF}} `B` soruşur: `A` hər şeyi bərkidir, `C` yalnız hər istinadın kəsilmiş hissəsini saxlayır (xətlər və qövslər sərhəddə kəsilir; mətnlər və daxili bloklar daxiletmə nöqtəsi içərdə olduqda qalır).

Açdığınız çertyoj CadCraft-ın görə bilmədiyi faylları bağlaya bilər: neçəsinin yüklənmədiyini bildirir. {{cmd:XREF}}, `R` və hər faylı seçin ki, onları görəsiniz.

Saxlayanda yüklənmiş bağlantı faylın içinə **bərkidilir** (digər proqramlar onu `Plan$0$…` adlı adi bloklar və qatlar kimi görür) və tarixçə bunu bildirir. Yüklənməmiş bağlantı öz faylına bağlantı olaraq qalır, DWG və DXF-də.

## 3D-də açın

{{ui:View}} › {{ui:Daha çox}} › {{ui:ModelCraft-da aç}} ({{cmd:OPENIN3D}}) çertyoju yeni sekmədə 3D modelləşdirmə tətbiqində DWG kimi açır, yükləmədən. Orada edilən dəyişikliklər orada qalır; onları orada saxlayın. Menyu elementi yalnız həmin tətbiq təhvil verilmiş çertyojları qəbul edə bildiyi yerdə görünür.

## PDF çap etmək

{{key:Mod+P}} basın, {{ui:Çap et}} düyməsinə klikləyin və ya `PLOT` yazın. PDF brauzerin daxilində hazırlanır və yüklənir, ya da çap üçün yeni sekmədə açılır. Bax: [PDF-ə çap et](topic:plot-pdf).

## Fayllar harada olur

Hər saxlama və hər çap yükləmədir, ona görə fayllar brauzerinizin yükləmələri hara qoyursa oraya düşür: adətən Yükləmələr qovluğuna. Hər dəfə qovluq seçmək üçün brauzerinizdə yükləmə parametrini dəyişin; [Brauzerlər və kompüterlər](common:browsers) harada olduğunu göstərir.

Açdığınız və ya saxladığınız heç nə bizə göndərilmir. Bax: [Fayllarınız haradadır](common:your-files).

## PLN və PLA layihə faylları

CadCraft DWG və DXF çertyojlarını açır, Archicad-in öz faylları (`.pln`, `.pla`, `.tpl`, `.bpn`) deyil. Birini açanda nə olduğunu bildirir. Archicad-də lazım olan görünüş və ya vərəqləri DWG kimi saxlayın və burada açın, ya da modeli IFC kimi ixrac edib BimCraft-da açın. BimCraft faylı təhvil ala bildikdə CadCraft {{ui:BimCraft-da aç}} təklif edir.

## Saxlamadan səhifə bağlananda

CadCraft redaktə etdiyiniz hər çertyojun bir nüsxəsini, redaktəni dayandırdıqdan bir az sonra, yalnız bu brauzerdə saxlayır. Sekme bağlansa, brauzer dayansa və ya kompüter yenidən başlasa, saxlamamışdan əvvəl, CadCraft növbəti başlayanda **İşinizi bərpa edək?** soruşur: {{ui:Bərpa et}} çertyoju saxlanılmamış halda öz sekmesində yenidən açır. Çertyojun saxlanması onun nüsxəsini silir. Bax: [İşinizi bərpa edin](common:recover).

## Onlayn və oflayn

Açma, çəkmə, saxlama (DWG və DXF) və çap hamısı kompüterinizdə baş verir, ona görə CadCraft yükləndikdən sonra bağlantı olmadan da işləyir.

CadCraft-ı heç bir bağlantı olmadan işlətmək üçün onlayn olarkən yuxarıdakı paneldə {{ui:Oflayn üçün saxla}} düyməsinə klikləyin. Etiket sayır ("Saxlanılır 40 / 212") və sonda "Oflayn hazırdır" yazır. Saxlanmış nüsxəyə DWG oxucusu da daxildir, cəmi təqribən 5 MB, ona görə saxlanıldıqdan sonra **DWG faylları da oflayn açılır**. Düyməyə yenidən klikləyin: {{ui:Yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}}. "Saxlanıla bilmədi" bəzi faylların yüklənmədiyi deməkdir: bağlantını yoxlayın və yenidən cəhd etmək üçün klikləyin. "Oflayn mövcud deyil" isə bu brauzer pəncərəsinin nüsxə saxlaya bilmədiyi deməkdir (şəxsi pəncərələr və bəzi idarə olunan kompüterlər).

Saxlanmış nüsxə olmadan DWG oxucusu səhifə yükləndikdən sonra ilk dəfə DWG açdığınızda gətirilir, ona görə DWG-ni oflayn açmaq uğursuz ola bilər; DXF fayllarına o heç vaxt lazım deyil. CadCraft saxlanmayıbsa, oflayn olarkən səhifəni yenidən yükləməyin.

Ətraflı məlumat üçün bax: [Oflayn işləmək](common:offline).

:::offline
Hal-hazırda oflaynsınız. Çertyojlar DWG və ya DXF kimi saxlanılır və normal çap olunur, DXF faylları açılır. DWG faylları, CadCraft "Oflayn hazırdır" göstərirsə və ya DWG oxucusu bu sekmədə artıq yüklənibsə, açılır.
:::

## Fayllarda məhdudiyyətlər

Məhdudiyyətlər və parametrlər (bax: [Çertyojun məhdudlaşdırılması](topic:constraints)) DWG və DXF-də saxlanılır. Hər məhdudlaşdırılmış obyekt kiçik CadCraft qeydini (genişləndirilmiş məlumat) daşıyır və istifadə olunmayan `CADCRAFT_PARAMETRIC` adlı blok məhdudiyyətləri və parametr cədvəlini saxlayır. Digər proqramlar çertyoju normal açır və ikisini nəzərə almır; təmizləyəndə istifadə olunmayan bloku silə bilərlər. Qeydlər obyektlərə öz açarları ilə istinad edir, faylın dəstəyi (handle) ilə yox, ona görə dəstəkləri yenidən nömrələyən proqram onları pozmur. Başqa proqram məhdudlaşdırılmış obyekti silib və ya dəyişdirdikdə CadCraft faylı açanda ona aid məhdudiyyətləri atır və neçə olduğunu bildirir. Bunları olmayan fayl məhdudiyyətsiz açılır.

Detal modelləşdiricisindən ixrac olunan eskiz (`.json`) da açılır: bax: [Eskizləri digər detal modelləşdiricilərinə və onlardan köçürmək](topic:solidworks-sketches).

## Hələ mövcud deyil

- Saxlanmış DXF-də multileaderlər multileader obyektləri kimi (R12-də onlar yoxdur: çəkdikləri kimi saxlanılır).
- Saxlanmış DXF-də şəkillər (çərçivə kimi saxlanılır; DWG onları şəkil kimi saxlayır) və altındakını gizlədən silmə sahələri (wipeout).
- DXF 2000-dən yeni DXF versiyasını saxlamaq.
- Buludda saxlama və kompüterlər arası sinxronizasiya.

Tam siyahı üçün bax: [Hələ qurulmayıb](topic:not-built-yet).
