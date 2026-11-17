---
title: Başqa çertyoj proqramlarından keçid
summary: Tanış əmrlərin, düymələrin və vərdişlərin CadCraft-a necə uyğunlaşdığı və təcrübəli çertyojçuları çaşdıran fərqlər.
keywords: keçid, fərqlər, köçürmə, vərdişlər, ləqəblər, dinamik giriş, pickfirst, pickadd, qsave, saveas, fərqli saxla, mtext, ctb, qütb izləmə, xref, klaviatura qısayolları, tanış, copyclip, pasteclip, pasteorig, copybase, buferi
from: b58688e7
---

Əgər AutoCAD və ya eyni modelə əsaslanan proqram istifadə etmisinizsə, bildiyinizin çoxu burada da işləyir: əmr sətri, `L`, `C`, `TR` və `O` kimi ləqəblər, təkrar üçün Enter və ya Space, pəncərə və çarpaz seçim, F3-də obyekt tutma, F8-də Ortoqonal, layout-lu model fəzası və viewport-lar. Bu səhifə birbaşa uyğun gələnləri, sonra isə insanları çaşdıran fərqləri sadalayır. İlk hissəni gözdən keçirsəniz belə, ikinci hissəni oxuyun.

## Birbaşa uyğun gələnlər

| Vərdiş | CadCraft-da |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Eyni əmrlər, eyni ləqəblər |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Eynidir |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Eyni ölçü əmrləri |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` əmr sətrində yazılır | Eynidir, yeni ölçülər üçün |
| Blok yaratmaq üçün `B`, daxil etmək üçün `I`, təmizləmək üçün `PU` | Eynidir (purge yalnız istifadə olunmayan blokları silir) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` və sonra `E` və ya `W` | Eynidir |
| Skriptdən və ya vərdişdən `_LINE` və ya `-LAYER` yazmaq | Əvvəldəki `_`, `-`, `.` və ya `'` nəzərə alınmır |
| Boş sorğuda Enter və ya Space son əmri təkrarlayır | Eynidir |
| Esc əmri ləğv edir; Esc yenidən seçimi silir | Eynidir |
| `@dx,dy`, `@d<a`, yazılmış bucaqlar şərqdən saat əleyhinə | Eynidir |
| Soldan sağa pəncərə, sağdan sola çarpaz, klik-klik; lasso üçün basın və sürükləyin, Space pəncərə / çarpaz / hasar arasında dəyişir (LASSOMODE) | Eynidir |
| Əvvəl seçin, sonra əmr (isim-fel) | Eynidir; tamamlanmış əmr seçimi təmizləyir |
| Obyekt seçimində `ALL` və `L` | Eynidir |
| Shift+klik seçimdən çıxarır | Eynidir. Parametrlər klikin seçimi əvəz etməsinə imkan verə bilər, PICKADD 0 kimi: bax [CadCraft parametrləri](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Eyni əmrlər və düymələr; yapışdırma surəti PASTECLIP kimi sol-aşağı küncü ilə yerləşdirir |
| F3 obyekt tutma, F7 şəbəkə, F8 Ortoqonal | Eyni düymələr |
| Təkərə iki dəfə klik etmək bütün çertyoju göstərir | Eynidir |
| Güzgü mətni oxunaqlı qalır | Eynidir (MIRRTEXT 0 kimi) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Eynidir; Mac-də Command da işləyir |

Bütün əmrləri və ləqəbləri [Əmr arayışı](topic:commands) sadalayır.

:::tip
AutoCAD-in lentini sevirsinizsə, {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Menyular, düymələr və siçan}} bölməsində {{ui:Klassik çertyoj}} menyu üslubunu seçin: eyni əmr sətri üzərində Ev, Əlavə et, Annotasiya, Parametrik, Görünüş, İdarəetmə və Çıxış sekmələri, orta düymə ilə sürüşdürmə, sağ klik isə Enter. Bax [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).
:::

Hər əmri və qısa adını [Əmr xəritəsi](topic:command-map) sadalayır, ən çox istifadə edəcəyiniz 40 əmri isə [cheat sheet](topic:cheat-sheet) göstərir (həmçinin bir səhifəlik PDF kimi).

## Insanları çaşdıran fərqlər

### Yazılmış nöqtələr mütləqdir

Dinamik giriş açıq olduqda, başqa proqram ikinci nöqtə üçün yazılmış `100,0`-ı nisbi qəbul edir. **CadCraft-ın əmr sətri isə bunu etmir**: orada `x,y` həmişə başlanğıcdan ölçülür. {{ui:Dyn}} ({{key:F12}}) açıq olduqda onun sahələrindən istifadə edin: məsafə, {{key:Tab}}, bucaq. "Son nöqtədən 100 sağda" üçün `@100,0` yazın, və ya krestiyi düzgün tərəfə aparıb yalnız `100` yazın.

### Shift tutmanı ötürür; Ortoqonal vermir

Klik zamanı Shift basılı saxlansa, həmin klik üçün obyekt tutma nəzərə alınmır. Ortoqonalı müvəqqəti dəyişmir. F8 və ya {{ui:Ortoqonal}} düyməsindən istifadə edin.

### Sağ klik həmişə Enter-dir

Sağ klik menyusu yoxdur. Çertyojda sağ klik Enter-dir: əmri bitirir, seçimi tamamlayır və ya son əmri təkrarlayır. Tutma və ya seçim qutusu zamanı isə ləğv edir. Sürüşdürmək üçün sağ düyməni basıb sürüşdürün.

### Boşluq çubuğu ilə sürüşdürmə yoxdur

Space Enter-dir, ona görə də Space-i basıb sürükləmək sürüşdürmür. Orta və ya sağ düymə ilə sürüşdürün, ya da təkərlə uzaqlaşıb başqa yerdə yenidən yaxınlaşın.

### Kəsmək və uzatmaq

Kəsmək və uzatmaq Sürətli rejimdə başlayır: görünən hər obyekt kəsici kənar və ya sərhəddir, göstəricinin altındakı parça nəyin silinəcəyini göstərir, sürüşdürülən yol keçdiyi hər parçanı kəsir və heç nəyin keçmədiyi obyekt silinir. {{key:Shift}} kəsmə ilə uzatma arasında keçir. `O` Standart rejimə keçirir (əvvəl kənarları seçin), `F` və `C` hasar və çarpazdır, `E` EDGEMODE-dur, `R` silir. `P` (Layihə) seçimi yoxdur: CadCraft çertyojun müstəvisində kəsir.

### Fillet və chamfer

{{cmd:FILLET}} və {{cmd:CHAMFER}} tanış seçimləri qəbul edir: Undo, Polyline, Radius (və ya Distance, Angle və mEthod), Trim və Multiple, və kəskin künc üçün {{key:Shift}}+klik. Polilini və xətt arasındakı fillet qövsü polilinin içinə birləşdirmək əvəzinə ayrıca obyekt kimi əlavə edir, və qövs seqmentinin yanındakı polilini künclər olduğu kimi qalır.

### Abzas mətni və tək sətirli mətn

`T`, `MT` və `MTEXT` yerində yazılan abzas mətnidir, eni, sətir aralığı və düzləşdirmə ilə; `DT` və `DTEXT` tanış olduğunuz kimi tək sətirli mətndir. Mətn üslubları və sütunlar yoxdur, və mətnin daxilində formatlaşdırmanı (qalın, üst-üstə kəsrlər) hələ yazmaq olmur; faylda gələn format saxlanılır, çəkilir və yadda saxlanılır (bax [Mətn və etiketlər əlavə edin](topic:text#formatting-inside-paragraph-text-from-other-programs)). Hər şey Helvetica tipli şriftlə çəkilir.

### Saxlamaq "nüsxə yüklə" deməkdir

{{key:Mod+S}}, `SAVE` və `QSAVE` çertyojun formatında nüsxə yükləyir: açdığınız DWG DWG kimi, DXF isə DXF kimi saxlanılır. Brauzerdə heç nə yerində üzərinə yazılmır və açılmış fayllar heç vaxt dəyişmir. CadCraft Studio-da {{key:Mod+S}} açdığınız fayla geri yazır.

`SAVEAS` ({{key:Mod+Shift+S}}) fayl brauzeri deyil, kiçik dialoqdur: {{ui:DWG}} seçin (onun {{ui:Versiya}}-sı ilə, AutoCAD 2000-dən 2018-ə), {{ui:DXF R12}} və ya {{ui:DXF 2000}} seçin və {{ui:Saxla}} düyməsini basın. Yükləmənin yerini brauzer təyin edir. `DXFOUT` həmişə DXF R12 yükləyir.

Açdığınız DWG onunla gəldiyi versiyada saxlanılır; yeni çertyoj isə seçmədiyiniz halda AutoCAD 2000 formatında saxlanılır. Vərəqlər, ölçülər və ştrixləmə naxışları qorunur. Bax [Fayllar: nə açılır, nə saxlanılır](topic:files#saving).

### Qatlar: daha sadə

- Hər qat dəyişikliyi (aç, dondur, kilidlə, rəng, çap, xətt tipi, xətt qalınlığı, cari qat) bir geri qaytarma addımıdır.
- Söndürmək və dondurmaq CadCraft-da eyni təsirə malikdir.
- Çertyojun bir viewport-da dondurduğu qatlar orada dondurulmuş qalır: ekranda, çaplarda və DWG və ya DXF kimi saxlandıqda.
- Viewport qatı öz rəngi, xətt tipi, xətt qalınlığı və ya şəffaflığı ilə göstərirsə, bu ekranda, çaplarda və saxlanılmış DWG-də belə qalır (DXF qatın öz parametrlərini saxlayır; saxlama bunu bildirir). Viewport üzrə dəyişiklik hələ hazırlanmayıb.
- Qat xassələri meneceri və qat vəziyyətləri yoxdur; {{cmd:RENAME}}, {{cmd:LAYMRG}} və {{cmd:LAYDEL}} qatların adını dəyişir, birləşdirir və silir. Xətt tipləri və xətt qalınlıqları sağ paneldə təyin olunur (bax [Xətt qalınlığı və xətt tipləri](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} və {{cmd:LAYMCUR}} seçməklə işləyir.
- DXF R12-yə saxlayarkən qat adları böyük hərflə yazılır. DWG onları yazdığınız kimi saxlayır.

### Ölçü üslubları

`DIMSTYLE` adlı üslubların meneceri açır (yeni, dəyişdir, cari təyin et, müqayisə et, tətbiq et). `DIMSCALE` və digər parametrlər yeni ölçülərin istifadə etdiyi dəyərləri dəyişir, hər ölçü isə öz ölçülərini saxlayır, və bunları Xüsusiyyətlər panelində də dəyişə bilərsiniz. Cari üslub faylda saxlanılmır. Ölçülər çertyojun uzunluq formatına uyğun gəlir (onluq, və ya {{cmd:UNITS}} ilə fut və düym), ya da öz {{ui:Format}}-ına. Bax [Ölçü ölçülərini təyin edin](topic:dimension-settings).

### Çap daha sadədir

Çap üslubu cədvəlləri rənglə işləyir, CTB faylları kimi: Monoxrom, Rəngli və Boz qamma daxilidir, öz cədvəlinizi yarada bilərsiniz, və hər vərəq öz cədvəlini saxlayır. CTB faylları dərc olunmuş təsvirdən qurulub və yalnız bizim yaratdığımız fayllarda sınanıb; adlandırılmış çap üslubu cədvəlləri (STB) və səhifə quruluşları hələ qurulmayıb. Xətlər öz qalınlığında, digərləri bir qələm enində çap olunur. Vərəqlər öz kağızında 1:1 çap olunur; model seçilmiş miqyasda və ya sığdırılaraq çap olunur. Bax [PDF-ə çap et](topic:plot-pdf).

### Viewport daxilində iş

Tanış olduğunuz kimi: viewport-un içinə iki dəfə klik edin (və ya {{cmd:MSPACE}} yazın) ki, onun vasitəsilə modeldə işləyəsiniz, viewport-un xaricinə iki dəfə klik edin (və ya {{cmd:PSPACE}}) ki, vərəqə qayıdasınız. İçəridə sürüşdürmə və miqyas viewport-un göstərdiyini dəyişir, əgər onun göstərilməsi kilidlənməyibsə; kilidlənibsə vərəqi hərəkət etdirir. Çertyojun altındakı sekmə üzərinə klik də viewport-dan çıxarır. Bax [Viewport vasitəsilə modeldə işləyin](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### İzləmə və dinamik giriş var, şəbəkə tutma hələ yox

Şəbəkə yalnız baxmaq üçündür; nöqtələr ona tutulmur (F9 tutma rejimi yoxdur). Qütb izləməsi ({{key:F10}}, addım {{cmd:POLARANG}} ilə təyin olunur) və obyekt tutma izləməsi ({{key:F11}}: tutma nöqtəsində dayanın ki, onu əldə edin) tanış olduğunuz kimi işləyir; bax [Obyektlərə tutmaq](topic:object-snaps#polar-tracking). Dinamik giriş ({{key:F12}}) krestin yanında məsafəni və bucağı (və ya X və Y-ni) göstərir; bax [Koordinat və məsafə daxil etmək](topic:coordinate-entry#dynamic-input).

### Fut və düym

{{ui:Uzunluq formatı}} {{ui:Memarlıq}} və ya {{ui:Mühəndislik}} seçin (və ya {{cmd:UNITS}} yazın), və uzunluqları tanış olduğunuz kimi yazın: `12'6"`, `12'6-1/2"`. Kəsrdən əvvəl boşluq yox, tire istifadə edin: {{key:Space}} {{key:Enter}}-dir. {{ui:Vahidlər}} sahəsini də {{ui:Düym}} təyin edin ki, vərəqlər və çaplar memarlıq miqyasları təklif etsin. Format saxlanılmış DWG və DXF fayllarında qalır. Bax [Fut və düym](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopyalama və yapışdırma CadCraft daxilində qalır

{{key:Mod+C}}, {{key:Mod+X}} və {{key:Mod+V}} obyektləri bir çertyoj daxilində, çertyojlar arasında və eyni brauzerdəki CadCraft sekmələri arasında kopyalayır, kəsir və yapışdırır. Bufer CadCraft-ın öz bufferidir: CadCraft obyektlərini başqa proqrama, və ya başqa proqramın obyektlərini CadCraft-a yapışdıra bilməzsiniz. Başqa vahidlərdə olan çertyojdan yapışdırma yenidən miqyaslanmır: sonra {{cmd:SCALE}} istifadə edin. {{key:Mod+D}} göstəricinin yanında hərəkət edən dublikatdır, CadCraft əlavəsi. Bax [Kopyalama, yapışdırma və dublikat](topic:copy-paste).

### İstifadə edə bilməyəcəyiniz brauzer düymələri

Veb səhifə brauzerdən {{key:Mod+N}}, {{key:Mod+W}} və ya {{key:Mod+T}} ala bilmir: onlar pəncərələri və sekmələri açır və bağlayır. {{ui:Yeni}} düyməsindən və ya `NEW` yazmaqdan istifadə edin. Bax [Düymələr, siçanlar və touchpad-lər](common:keys).

## Hələ burada olmayan əmrlər

{{cmd:TABLE}} qurulmayıb. Onu yazanda "Unknown command" deyir. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} və {{cmd:XREF}} qurulub.) [Hələ qurulmayıb](topic:not-built-yet) bu gün nə etmək lazım olduğunu sadalayır.
