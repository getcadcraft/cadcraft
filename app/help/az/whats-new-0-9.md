---
title: 0.9-da yeniliklər (əvvəlki)
summary: Sərhədini izləyən ştrixlamalar, qat qrupları, üst-üstə mərtəbələr, qapı və pəncərəli 2D ağıllı divarlar, mətn üslubları və formatlı mətn redaktoru, üzən komanda sətri, şəbəkəyə tutma, dörd dairə ilə qövs, və Sənədlər paneli.
keywords: 0.9-da yeniliklər, əvvəlki buraxılış, yeniliklər, 0.9, buraxılış qeydləri, dəyişikliklər jurnalı, ştrixlama, əlaqəli ştrixlama, hatchedit, pat faylı, naxış faylı, qat qrupları, laygroup, mərtəbələr, üst-üstə mərtəbələr, floorlayers, ağıllı divarlar, divar, qapı, pəncərə, divar alətləri, mətn üslubu, üslub, mtext redaktoru, abzas mətni, formatlama, üzən komanda sətri, komanda sətri, yuxarı sahə, yığcam, şəbəkəyə tutma, grid snap, f9, qövs, sənədlər paneli, sənədləri yoxla, uk polad ölçüləri, draw.io, tay mətni, dxf r12, yeniliklər, nə yeni var, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, avtotamamlama, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, sensorsuz çəkiliş, ekran oxuyucusu, limits, bearings, aunits, shx, diagram, ole, tarixçə, müqayisə, sözlərlə, xassələr, fut və düym, stretch, dillər, giriş qurğuları, problemlər, canlı, köməkçilər
from: 3451e64c
---

Bu, CadCraft 0.8-lə müqayisədə 0.9-da nə dəyişdiyini göstərir. CadCraft CadCraft Studio 0.9-un və onun səkkiz tətbiqinin 2D və 3D çertyoj tətbiqidir. 0.9 plan çəkilişini tamamlayır, mətn üslubları və real mətn redaktoru əlavə edir və ekranda daha çox yer verir.

## Yeni

### Plan çəkilişi

- **Sərhədini izləyən ştrixlamalar.** {{cmd:HATCH}} onu əhatə edənlərə bağlanır. Sərhədi köçürün, fırladın və ya miqyaslayın, ştrixlama və onun naxışı izləyir; onu yenidən formalaşdırsanız, ştrixlama yenidən hesablanır. {{cmd:HATCHEDIT}} (`HE`) ştrixlamanı sonradan dəyişir və bağlantını yaradır və ya bitirir. Bax [Ştrixlama və doldurma sahələri](topic:hatch).
- **Ştrixlama naxış faylları.** {{cmd:HATCH}} sualında `Daxili nöqtəni göstərin` mərhələsində `F` (Naxış faylı) yazın və `.pat` faylı seçin. Yalnız adi formatda yazılmış fayllar sınaqdan keçirilib.
- **Qat qrupları.** {{ui:Qatlar}} panelində {{ui:Alətlər}}-də: {{ui:Yeni qrup}}, {{ui:Hazır qrupları əlavə et}}, {{ui:Ada görə qruplaşdır}} və {{ui:Qat tapın}}; və ya {{cmd:LAYGROUP}} (`LG`) yazın. Bax [Çertyojun qatlarla təşkili](topic:layers#group-layers).
- **Üst-üstə mərtəbələr.** {{cmd:FLOORS}} (`FLR`), və ya {{ui:Baxış}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Mərtəbələr…}}. Vərəqdəki görünüş pəncərəsi Xassələrdə {{ui:Göstərilən mərtəbə}} altında bir mərtəbə göstərə bilər. {{cmd:FLOORLAYERS}} başqasına göndəriləcək fayl üçün mərtəbələri qatlara çevirir. Bax [Bir çertyojda mərtəbələri yığın](topic:floors).
- **2D ağıllı divarlar, qapılar və pəncərələr.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) və {{cmd:DELOPENING}}. Künclər, T birləşmələri və kəsişmələr sizin üçün hesablanır. Divarlar birləşmələrinin qeydini saxlayır, Xassələrdə isə başlanğıcda / sonda birləşməni qadağan et, Yer xətti və redaktə oluna bilən Uzunluq var. Bax [2D divarları, qapıları və pəncərələri çəkin](topic:walls-2d).
- **Plan divarları üçün divar aləti.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} və qalanlarını yazın. Hələ alət düymələri yoxdur. Bax [2D divarları üçün divar formaları, kəsiklər, ofsetlər və kilidlər](topic:wall-tools-2d).

### Mətn

- **Mətn üslubları.** {{cmd:STYLE}} (`ST`), və ya Çəkmə alət panelində {{ui:Mətn üslubu}}: şrift, hündürlük, en əmsalı və əyrilik ilə adlandırılmış üslublar. Bax [Mətn üslublarla mətnin şrifti və ölçüsünü təyin edin](topic:text-styles).
- **Formatlı abzas mətn redaktoru.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} və ya mətnə ikiklik şrift, ölçü, qalın, kursiv, altdan xətt, üstdən xətt, rəng, düzləşdirmə və dərəcə, artı-mənfi və diametr işarələri ilə bir qutu açır, həmçinin {{ui:OK}} və {{ui:Ləğv et}}. Bax [Abzas mətnini formatlayın](topic:format-paragraph-text).
- **draw.io XML-dən diaqram.** {{cmd:DIAGRAM}} (`T2D`) yapışdırılmış draw.io XML-i də oxuyur. Bax [Mətndən diaqram çəkin](topic:text-to-diagram).
- **PDF çapında Tay mətni.** Əvvəl sual işarələri kimi çap olunurdu.

### Daha çox yer və çəkiliş köməkçiləri

- **Üzən, nazik komanda sətri və yığcam yuxarı sahə.** Komanda sətrinin tutacağını sürükləyərək üzdürün, az sətir üçün onun yuxarı kənarını sürükləyin, {{key:F2}} tarixçəni açır. {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Komanda sətri}} və yuxarı sahə seçimləri eyni parametrlərə malikdir. Bax [Parametrlər](topic:settings#command-line).
- **Obyekt tutma menyusu.** Status sətrində {{ui:Tutma}} üzərində sağ klik edin, və ya {{cmd:OSNAP}} yazın.
- **Şəbəkəyə tutma.** Status sətrindəki {{ui:Şəbəkəyə tutma}} düyməsi, ya da {{key:F9}}: seçilmiş nöqtələr heç bir obyekt tutması nöqtəni almadıqda ən yaxın şəbəkə nöqtəsinə gedir.
- **Qövs on yolla, və Davam.** Çəkmə alət panelində {{ui:Qövs}} və ya {{cmd:ARC}}: 3 nöqtə, Başlanğıc/Mərkəz/Son ailəsi, Mərkəz/Başlanğıc/Son ailəsi, və Davam (başlanğıc nöqtədə {{key:Enter}} basın) son xətt, qövs və ya polixəttdən.
- **Sənədlər paneli.** {{cmd:DOCUMENTS}} (`DOCS`) və ya {{ui:Baxış}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Sənədlər…}}: layihə qovluğunda hər çertyoj üçün revizyon, vəziyyət və götür-qaytar. Mərkəzləşmiş dialoq kimi açılır. Bax [Sənədlər](topic:documents).

### Fayllar

- **Birləşmiş Krallıq polad ölçüləri.** Standart paneldə 976 kəsik, çertyojlarda olduğu kimi yazılır (məsələn `305x165x40 UB`).
- **Cənubi Afrika paketləri** (çertyoj təcrübəsi və tikinti qaydaları) Tikinti qaydaları əlavəsinin paketləri kimi. Rəqəmlər yoxlanılmayıb.
- **CadCraft üçün əlavələr,** tələb olunduqda əlavə olunur və standartda söndürülüb: daxili işıqlandırma dizaynı, çip dizaynı (HDL-dən planlaşdırmaya), router ilə oyma, dövrə simulyasiyası, makaralı zəncir dişli çarxları və Tikinti qaydaları ölkə paketləri.

## Düzəldilib

- Ştrixlamanı köçürmək, fırlatmaq və ya miqyaslamaq naxışını arxada qoyurdu.
- {{cmd:GRIDMOVE}} yalnız şəbəkə xəttində başlayan bütün plan divarını daşıyırdı. Divar indi uclarına görə qiymətləndirilir.
- Limits söndürülmüş olsa da şəbəkə yalnız çertyojun sərhədləri daxilində görünürdü.
- Yan paneldəki blok siyahısı sürüşür və yalnız blok adı olmayan ad həmin adla başlayan blokları sadalayır ("Bunu nəzərdə tutmusunuz?").
- DXF R12 faylları, AutoCAD "Cədvəl üçün naməlum qrup 1001" deyib rədd edirdi, indi orada açılır.
- Çox böyük fayllar (təxminən 70.000 obyekt və yuxarı) "Maximum call stack size exceeded" ilə açılmırdı.
- Yüksək baxım versiyası olan AutoCAD 2018 və sonrakı DWG faylları "bad BITLONG code 11" ilə açılmırdı.
- Abzas mətn qutusunda seçilmiş hissə üçün yazılan yeni ölçü seçimi saxlayır.

## Hər tətbiqdə

Məsləhəti olan hər idarəetmə üçün Bootstrap məsləhətləri, bağlana bilən başlanğıc məsləhəti, sığmadıqda sürüşən sekme zolaqları və açıq çertyojun izlədiyi brauzer sekmesi başlığı (`<çertyoj> - CadCraft | CadCraft`). {{ui:Parametrlər}} › {{ui:Tərtibat}} indi iki sətirli seçimlərin açılan siyahısıdır. {{ui:Parametrlər}}-də dil siyahısı 0.8-dən uzundur. Canlı birgə redaktə, Kitabxana kolleksiyaları və çəki və temperatur vahidləri Studio qeydlərində təsvir olunub.

## Açıq məhdudiyyətlər

- Abzas mətnində siyahı gülləsi və ya nömrəsi, tabulyasiya xətkeşi və düzləşdirmə yoxdur. Çap olunmuş PDF-lər mətni Helvetica ilə yazır.
- Plan divarları düzdür, buna görə qövs qısa divarlar kimi çəkilir. Divar aləti üzrə icma əl yoxlaması gözləyir.
- Qat qrupları AutoCAD-in öz formatında yazılmır, buna görə AutoCAD onları düz siyahı kimi göstərir. Digər proqramlar {{cmd:FLOORLAYERS}} işlətmədikcə bütün mərtəbələri birlikdə göstərir.
- Sənədlər paneli real paylaşımda iki nəfər tərəfindən sınanmayıb. Router ilə oyma heç bir real maşında işləməyib. İşıqlandırma hesablaması başqa proqramla deyil, foton izi ilə yoxlanılıb. Mühəndislik əlavələri mühəndisin baxışını əvəz etmir, yoxlama vasitəsidir.
- İngilis dilindən başqa dillər maşın layihəsidir və bəzi yeni sözlər yalnız ingiliscədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, CadCraft 0.8 və 0.8.1-də 0.7-yə nəzərən nə dəyişdiyini göstərir. 0.8 (1 noyabr 2026) öz çertyojunuzdan işləyən çəkiliş köməkçiləri əlavə edir, qaydalarla kompüterinizdə və model olmadan, 0.8.1 (2 noyabr 2026) isə ondan sonra bildirilmiş səhvləri düzəldir.

### Yeni

**Çertyoj sizin fikrinizi tamamlayır**

- **Növbəti nə gəldiyini kölgə göstərir.** Heç bir komanda işləmədikdə boz kəsilmiş kölgə çertyojunuzun öz naxışlarının nə təklif etdiyini göstərir: eyni addımla növbəti dayaq, pillənin növbəti addımı, otağın çatışmayan divarı. Onu bir geri alma addımı kimi çəkmək üçün {{key:Tab}} basın, ya da onu rədd etmək üçün {{key:Esc}}. Yalnız ən yeni obyektlərə baxır, buna görə böyük çertyojda da hamar qalır. Onu {{ui:Parametrlər}} › {{ui:CadCraft}}-da və ya {{cmd:AUTOCOMPLETE}} `Off` ilə söndürün.
- **Xətt və ya polixətt çəkərkən növbəti nöqtə.** {{cmd:LINE}} və ya {{cmd:PLINE}} ortasında kölgə növbəti nöqtədir: pilləkənin növbəti addımı, düzbucaqlının dördüncü küncü, və ya onu bağlayan nöqtə. Kursoru ona yaxınlaşdırın və {{key:Tab}} basın, sanki oraya klik etmisiniz.
- **Qələm eskizləri dəqiq həndəsəyə çevrilir.** {{cmd:SKETCHFIX}}: qələm, siçan və ya barmaqla kobud vuruşlar çəkin və hər biri təmiz xətt, çevrə, qövs, düzbucaqlı və ya polixətt olur, çertyojda artıq olanlara tutulur. Bax [Qələmlə eskiz çəkin və dəqiq həndəsə alın](topic:sketch-with-a-pen).
- **Eskizin fotosu çertyoja çevrilir.** {{cmd:PHOTOSKETCH}} (`PSK`) fotoda kağızı tapır, perspektivi düzləşdirir, verdiyiniz kağız ölçüsünü və miqyası tətbiq edir və hər qələm rəngi üçün bir qat üzərində qələm xətlərini izləyir. Yazılar izlənmir.
- **Qaydalarla ölçülənmə.** {{cmd:AUTODIM}} (`ADIM`) seçdiyiniz tərəflər boyunca ölçü zəncirləri, ümumi ölçü, açıqlıqların enləri, dəlik diametrləri və `Grid` ilə şəbəkə aralığı yaradır. Artıq olan ölçünü heç vaxt təkrarlamır.
- **Şəbəkə xəttini hərəkət etdirin, dəst izləyir.** {{cmd:GRIDMOVE}} (`GM`): şəbəkə xəttində bitən divarlar onunla uzanır, boyunca olan divarlar, sütunlar, onun baloncuğu və etiketi hərəkət edir, şəbəkə xəttində olan ölçülər yeni aralığı ölçür. Bir geri alma addımı.

**Vərəqlər, detallar və etiketlər**

- **Özünü tərtib edən vərəqlər.** {{cmd:AUTOSHEET}} adlandırılmış görünüşlərinizi (və ya modelin ayrı hissələrini) götürür, kağız ölçüsünü və standart miqyası seçir və görünüşləri başlıq ştampı və ad-miqyas başlığı ilə yeni vərəqlərdə yerləşdirir. Hər şey redaktə oluna bilən qalır. Bax [Vərəqləri mənim üçün tərtib edin](topic:lay-out-sheets-for-me).
- **Firmanızın detalları, çəkərkən təklif olunur.** {{cmd:DETAILS}} (`DET`) öz detal bloklarınızı saxlayır. Seçdiyiniz şey qatlarındakı, blok adlarındakı və qeydlərindəki sözlərlə detala uyğun gəldikdə, status sətri bunu deyir; onu seçin və yerləşdirin. {{cmd:DETAILS}} › Paylaş siyahınızı Sənədlər qovluğunuza qoyur və komandanızın əlavə etdiklərini gətirir. Parametrlər təklifləri söndürür.
- **Bloklarda etiketlər.** {{cmd:TAGS}} etiket təyin edir (növü, icazəli dəyərləri, tətbiq olunduğu bloklar), seçdiyiniz blok istinadlarına qoyur və CSV kimi saxlana bilən cədvəl kimi siyahılayır. Təriflər DWG-də saxlanılır. Bax [Etiketlər](topic:tags).
- **Çertyoj sərhədləri.** {{cmd:LIMITS}} çertyoj üçün düzbucaqlı təyin edir: şəbəkə onu doldurur və zoom Hamısı onu göstərir. Sərhədlər kontur kimi görünür və DWG və DXF-də, kağız sərhədləri ilə birlikdə saxlanılır. Bax [Çertyojun sərhədlərini təyin edin](topic:drawing-limits).

**Digər insanlarla və digər proqramlarla işləmək**

- **Markap-ı revizyona çevirin.** {{cmd:REDLINE}} MarkupCraft-ın yazdığı paketi oxuyur və hər dəyişikliyi sadalayır. Hər birini qəbul edin və ya rədd edin, qeydlə; qəbul olunanlar bir geri alma addımında revizyon buludu və revizyon jurnalı alır, və MarkupCraft-da markapları bağlayan cavab faylını saxlayırsınız. Bax [Markapı revizyona çevirin](topic:redline-to-revision).
- **Git və Fossil birləşdirə bilən çertyojlar.** {{ui:Parametrlər}} › {{ui:CadCraft}}-da {{ui:Birləşdirməyə uyğun fayllar}} açıq olduqda hər obyekt heç vaxt dəyişməyən açar alır (fayllar təxminən 10 faiz böyük olur). `cadcraft merge base ours theirs` iki nəfərin bir DWG və ya DXF obyektinə etdiyi redaktələri obyekt-obyekt birləşdirir və yalnız iki nəfərin eyni şeyi dəyişdiyi yerləri bildirir. Bax [Bir çertyojun iki nəfərin redaktələrini birləşdirin](topic:merge-drawings).
- **Sözlərlə nə dəyişdi.** Tarixçədə Müqayisə sadə siyahı verir: nə dəyişdi, yerlər nə qədər böyükdür, nə əlavə olundu, silindi və ya dəyişdirildi və redaktə olunan mətn. Bax [Dəyişikliyi sözlərlə deyin](topic:changes-in-words).
- **Bucaqlar və istiqamətlər.** Istiqaməti, N45°23'30"E kimi, geodezist bucağı ilə və ya dərəcə, dəqiqə və saniyə ilə yazın; bucaq soruşulan hər yerdə işləyir; AUNITS bucaqların necə göstərildiyini təyin edir. Bax [Bucaqları yazın və göstərin](topic:bearings-and-angles).
- **Öz SHX şriftləriniz.** CadCraft-a SHX şriftləri qovluğu verin və onları adlandıran mətn üslubları ekranda və çapda həmin şriftlərlə çəkilir. Bax [Öz SHX şriftlərinizlə mətn çəkin](topic:shx-fonts).
- **Mətndən diaqram.** {{cmd:DIAGRAM}} Mermaid axın diaqramını, PlantUML komponent diaqramını, D2 və ya from-to siyahısını oxuyur və redaktə edə biləcəyiniz blokları və konnektorları çəkir. Bax [Mətndən diaqram çəkin](topic:text-to-diagram).
- **DWG-də OLE obyektləri.** {{cmd:OLELIST}} DWG-nin daşıdığı və CadCraft-ın özü yerləşdirə bilmədiyi OLE obyektlərini sadalayır və şəklin surətini dediyiniz yerə qoyur. Bax [Şəkillər](topic:pictures#objects-from-other-programs-ole).
- **Hesablamalarınız çertyojla qalır.** Hesablama vərəqləri və dizayn səbəbləri sinif cədvəli ilə birlikdə DWG-də saxlanılır.

**Sensorsuz çəkiliş**

- {{ui:Parametrlər}}-də {{ui:Sensorsuz çəkiliş}} yandırın (və ya {{cmd:ACCESS}} yazın və `On` cavab verin). CadCraft hər komandanı və nəticəni ekran oxuyucunuz vasitəsilə səsləndirir, çertyojı və kursorun yanında olanı təsvir edir, kursoru hərəkət etdirməyə və nöqtələri klaviatura ilə seçməyə imkan verir və hər tutma və tutacaq üçün səs çalır. Brauzeriniz kompüterinizdə nitqi tanıya bildikdə, komandalar səslə verilə bilər. Bax [Sensorsuz çəkiliş](topic:draft-without-sight).

**Hər tətbiqdə**

- **Dillər.** 54 dil; on yenisi (Litva, Latviya, Bosniya, Marathi, Telugu, Albanca, Afrikaans, Filipin, Svahili, Özbək). İngilis dilindən başqa dillər ana dilində danışan oxuyana qədər maşın layihəsidir.
- **Giriş qurğuları.** Trackpad, qələm, 3D siçan, oyun pultu və MIDI idarəetmələri.
- **Alət sıraları və xassə cədvəli.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət sıraları}} digər tətbiqlərdə Sığdır, 2 sətir və ya 1 sətir təklif edir. CadCraft öz parametrini {{ui:Parametrlər}} › {{ui:CadCraft}}-da saxlayır (bax [Alət sıraları](topic:settings#toolbar-rows)). Paylaşılan xassə cədvəli üç başqa tətbiqdədir, CadCraft-da yoxdur.
- **Problemlər, Canlı və əlavələr.** Hər tətbiqdə xəbərdarlıq edən paylaşılan Problemlər paneli, CadCraft Studio-da kimin harada olduğunu göstərən Canlı görünüş (bax [Bir çertyoj üzərində birgə işləyin](topic:work-live)) və əlavə siyahısı.
- **AI-nizi qoşun.** CadCraft Studio-dan səkkiz tətbiqin hamısına bir qoşulma, hər tətbiq üçün yalnız oxumaq, təklif etmək və ya redaktə səviyyəsi və köməkçinin nə etdiyinin sadə dilli jurnalı. CadCraft-ın öz AI-si yoxdur və hər tətbiqdə Soruş sizin qoşduğunuz AI-dan istifadə edir.

### 0.8.1-də düzəldilib

- **Fut və düym çertyojunda Xassələr 150 göstərirdi, 12'-6" yox.** Tətbiqin özünün oxuduğu sahələr yenidən mətnlərini saxlayır.
- **DWG faylları, sinif bölməsi səhv növ kimi oxunurdu** (GitHub cadcraft#5) indi düzgün açılır.
- **Xaç artıq pəncərələrin arxasında görünmür.**
- **Studio və qablaşdırılmış nəşrlər dili iş zamanı dəyişə bilir.** Əvvəl yalnız ingilis dilində idi. Hər platformada hələ sınanmayıb: dil dəyişmirsə, bizə xəbər verin.
- **Portret rejimində planşetlər** boş şəbəkə hündürlüyünü kətana verir və vərəqlər rejimi 760 px və ya azdan başlayır.
- **Sənədlər və LIMITS ilə STRETCH kəsişən pəncərə ilə,** Studio 0.8.0-da bildirilmişdi və 0.8 veb quruluşunda artıq düzgün idi; bildirən şəxsin quraşdırıcısı köhnə idi. Studio 0.8.1 onları daşıyır.

### Bu versiyada hələ olmayanlar

- **0.8 və 0.8.1 kodla imzalanmayıb.** Windows xəbərdarlıq edə bilər (**Daha ətraflı məlumat**, sonra **Yenə də işə sal** seçin); Mac-da CadCraft Studio-ya sağ klik edin və **Aç** seçin. Mağaza quruluşları gözləmədədir, iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Qələm eskizləri və eskiz fotoları** yalnız uydurma fotolarda və siçanla sınanıb, hələ real qələm, toxunma ekranı və kağızda əl eskizi ilə deyil.
- **Sensorsuz çəkiliş** avtomatlaşdırılmış yoxlamalarla sınanıb, hələ ekran oxuyucusu və ya kor sınaqçı ilə deyil.
- **Detalların paylaşılması** iki nəfərlik yoxlamadan keçməyib və Team Cloud Plan qovluğu Sənədlər qovluğu kimi qurulmayıb.
- **Birləşdirmə** CadCraft-ın DWG və DXF faylları üçün işləyir; digər tətbiqlərin faylları üçün eyni qurulmayıb.
- **Pəncərələr arasında geri alma:** CadCraft hər tamamlanmış addımı bildirir, lakin Studio hələ bütün tətbiqlər üçün tək Geri alma yoxdur; hər tətbiq öz addımlarını geri alır.
- **DWG-nin OLE obyektləri** saxlanılır, lakin yerində çəkilmir.
- **Digər proqramlardan çap üslubu cədvəllərinin (CTB faylları) oxunması** qurulub, lakin başqa proqramın faylı ilə yoxlanmayıb.
- **Komandanızı qoşun:** Studio-da bir klik ilə qoşulma, brauzer AI üçün hostinq edilən qoşulma, Studio-da öz API açarınız və dərc olunmuş MCP paketi bu buraxılışda vəd olunmur.

Əvvəlki versiya üçün bax [0.7-də yeniliklər](topic:whats-new-0-7).
