---
title: Versiya 0.9-da yenilik
summary: Sərhədini izləyən ştrixləmələr, qat qrupları, qat-qat mərtəbələr, qapı və pəncərələri olan 2D ağıllı divarlar, mətn üslubları və formatlaşdırılmış mətn redaktoru, üzən əmr sətri, şəbəkəyə tutma, qövs üçün on üsul və Sənədlər paneli.
keywords: yeniliklər, 0.9, buraxılış qeydləri, dəyişikliklər, changelog, ştrixləmə, assosiativ ştrixləmə, hatchedit, pat faylı, naxış faylı, qat qrupları, laygroup, mərtəbələr, qat-qat mərtəbələr, floorlayers, ağıllı divarlar, divar, qapı, pəncərə, divar alətləri, mətn üslubu, üslub, mtext redaktoru, abzas mətni, formatlaşdırma, üzən əmr sətri, əmr sətri, yuxarı sahə, ixcam, şəbəkəyə tutma, grid snap, f9, qövs, sənədlər paneli, yoxlamaya götürmə, Böyük Britaniya polad ölçüləri, draw.io, tay mətni, dxf r12, what's new, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, avtotamamlama, xəyal, tab, sketchfix, photosketch, autosheet, detallar, gridmove, autodim, teqlər, redline, birləşdirmə, git, fossil, giriş, görmədən çəkiliş, ekran oxuyucu, limitlər, istiqamətlər, aunits, shx, diaqram, ole, tarix, müqayisə, sözlə, xassələr, fut və düym, uzatma, dillər, giriş cihazları, problemlər, dəyişən, köməkçilər
from: 8b6dea0b
---

Bu, CadCraft 0.8.1-lə müqayisədə 0.9-da nə dəyişdiyidir. CadCraft CadCraft Studio 0.9-un və onun səkkiz tətbiqinin 2D və 3D çəkiliş tətbiqidir. 0.9 plan çəkilişini tamamlayır, mətn üslublarını və real mətn redaktorunu əlavə edir və ekranda daha çox yer verir.

## Yeni

### Plan çəkilişi

- **Sərhədini izləyən ştrixləmələr.** {{cmd:HATCH}} onu məhdudlaşdıran şeyə bağlanır. Sərhədi köçürün, fırladın və ya miqyaslayın — ştrixləmə və onun naxışı izləyir; formasını dəyişin — ştrixləmə yenidən hesablanır. {{cmd:HATCHEDIT}} (`HE`) sonradan ştrixləməni dəyişir və bağlantını yaradır və ya bitirir. Bax: [Ştrixləmə və doldurulmuş sahələr](topic:hatch).
- **Ştrixləmə naxış faylları.** {{cmd:HATCH}} sualında `Daxili nöqtəni göstərin` mərhələsində `F` yazın (naxış faylı) və `.pat` faylını seçin. Yalnız adi formatda yazılmış fayllar sınanıb.
- **Qat qrupları.** {{ui:Qatlar}} panelində {{ui:Alətlər}} içində: {{ui:Yeni qrup}}, {{ui:Hazır qrupları əlavə et}}, {{ui:Ada görə qruplaşdır}} və {{ui:Qat tapın}}; ya da {{cmd:LAYGROUP}} (`LG`) yazın. Bax: [Qatlarla çertyoju təşkil edin](topic:layers#group-layers).
- **Qat-qat mərtəbələr.** {{cmd:FLOORS}} (`FLR`), ya da {{ui:Görünüş}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Mərtəbələr…}}. Vərəqdəki görünüş pəncərəsi Xassələrdə {{ui:Göstərilən mərtəbə}} altında bir mərtəbəni göstərə bilər. {{cmd:FLOORLAYERS}} mərtəbələri başqasına gedən fayl üçün qatlara çevirir. Bax: [Bir çertyojda mərtəbələri yığın](topic:floors).
- **2D ağıllı divarlar, qapılar və pəncərələr.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) və {{cmd:DELOPENING}}. Künclər, T birləşmələri və kəsişmələr sizin üçün hesablanır. Divarlar birləşmələrinin qeydini saxlayır, Xassələrdə isə Başlanğıcda birləşməni qadağan et / Sonda birləşməni qadağan et, Yerləşmə xətti və redaktə oluna bilən Uzunluq var. Bax: [2D-də ağıllı divarlar, qapılar və pəncərələr çəkin](topic:walls-2d).
- **Plan divarlarında divar aləti.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} və qalanlarını yazın. Onların hələ alət paneli düymələri yoxdur. Bax: [2D divarlar üçün divar formaları, kəsiklər, ofsetlər və kilidlər](topic:wall-tools-2d).

### Mətn

- **Mətn üslubları.** {{cmd:STYLE}} (`ST`), ya da {{ui:Çəkmə}} alət panelində {{ui:Mətn üslubu}}: şrift, hündürlük, en əmsalı və maillik ilə adlı üslublar. Bax: [Mətn üslubları ilə mətnin şriftini və ölçüsünü təyin edin](topic:text-styles).
- **Formatlaşdırılmış abzas mətni redaktoru.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} və ya mətnə iki dəfə klikləmək şrift, ölçü, qalın, kursiv, altdan xətt, üstdən xətt, rəng, düzləşdirmə və dərəcə, artı-mənfi və diametr işarələri ilə qutu açır, həmçinin {{ui:OK}} və {{ui:Ləğv et}}. Bax: [Abzas mətnini formatlaşdırın](topic:format-paragraph-text).
- **draw.io XML-dən diaqram.** {{cmd:DIAGRAM}} (`T2D`) yapışdırılmış draw.io XML-i də oxuyur. Bax: [Mətndən diaqram çəkin](topic:text-to-diagram).
- **PDF çapında tay mətni.** Əvvəllər sual işarələri kimi çap olunurdu.

### Daha çox yer və çəkiliş köməkçiləri

- **Üzən, daha nazik əmr sətri və ixcam yuxarı sahə.** Onu üzdürmək üçün əmr sətrinin tutacağını sürükləyin, az sətir üçün onun yuxarı kənarını sürükləyin, {{key:F2}} tarixçəni açır. {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Komanda sətri}} və yuxarı sahə seçimləri eyni parametrlərə malikdir. Bax: [Parametrlər](topic:settings#command-line).
- **Obyekt tutma menyusu.** Status panelində {{ui:Tutma}} üzərində sağ klikləyin, ya da {{cmd:OSNAP}} yazın.
- **Şəbəkəyə tutma.** Status panelindəki {{ui:Şəbəkəyə tutma}} düyməsi və ya {{key:F9}}: seçilmiş nöqtələr obyekt tutması nöqtəni götürmədikdə ən yaxın şəbəkə nöqtəsinə gedir.
- **Qövs on üsulla, və Davam et.** {{ui:Çəkmə}} alət panelində {{ui:Qövs}} və ya {{cmd:ARC}}: 3 nöqtə, Başlanğıc/Mərkəz/Son ailəsi və Mərkəz/Başlanğıc/Son ailəsi, və Davam et (başlanğıc nöqtədə {{key:Enter}} basın) son xətt, qövs və ya polixətdən.
- **Sənədlər paneli.** {{cmd:DOCUMENTS}} (`DOCS`) və ya {{ui:Görünüş}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Sənədlər…}}: layihə qovluğundakı hər çertyoj üçün reviziya, vəziyyət və yoxlamaya götürmə. Mərkəzləşdirilmiş dialoq kimi açılır. Bax: [Sənədlər](topic:documents).

### Fayllar

- **Böyük Britaniya polad ölçüləri.** Standart panelində 976 kəsik, çertyojlardakı kimi yazılır (məsələn `305x165x40 UB`).
- **Cənubi Afrika paketləri** (çəkiliş təcrübəsi və tikinti qaydaları) Tikinti qaydaları əlavəsinin paketləri kimi. Rəqəmlər yoxlanılmayıb.
- **CadCraft üçün əlavələr,** tələb olunduqda əlavə olunur və defolt olaraq söndürülüb: daxili işıqlandırma dizaynı, çip dizaynı (HDL-dən tərtibata), router oyma, dövrə simulyasiyası, rolik zəncirli dişli çarxlar və Tikinti qaydaları ölkə paketləri.

## Düzəldildi

- Ştrixləməni köçürmək, fırlatmaq və ya miqyaslamaq naxışını geridə qoyurdu.
- {{cmd:GRIDMOVE}} yalnız şəbəkə xəttində başlayan bütöv plan divarını aparırdı. İndi divar uclarına görə qiymətləndirilir.
- Limitlər söndürülü olsa belə, şəbəkə yalnız çertyojun limitləri daxilində göstərilirdi.
- Yan paneldəki blok siyahısı sürüşür və blok olmayan ad onunla başlayan blokları siyahıya salır ("Bunu nəzərdə tutmusunuz?").
- AutoCAD-in rədd etdiyi DXF R12 faylları ("Unknown group 1001 for table") indi orada açılır.
- Çox böyük fayllar (təxminən 70 000 obyekt və daha çox) "Maximum call stack size exceeded" xətası ilə açılmırdı.
- AutoCAD 2018 və sonrakı yüksək texniki versiyalı DWG faylları "bad BITLONG code 11" xətası ilə açılmırdı.
- Abzas mətni qutusunda seçilmiş hissə üçün yazılmış yeni ölçü seçimi saxlayır.

## Hər tətbiqdə

Hər işarəsi olan idarəetmədə Bootstrap ipucları, bağlana bilən başlanğıc ipucu, sığmadıqda sürüşən səhifə zolaqları və açıq çertyoju izləyən brauzer səhifəsinin başlığı (`<drawing> - CadCraft | CadCraft`). {{ui:Parametrlər}} › {{ui:Tərtibat}} indi iki sətirli seçimlərin açılan siyahısıdır. Dil siyahısı {{ui:Parametrlər}} bölməsində 0.8-dəkindən uzundur. Dəyişən birgə redaktə, Kitabxana kolleksiyaları və çəki və temperatur vahidləri Studio qeydlərində təsvir olunub.

## Dürüst məhdudiyyətlər

- Abzas mətnində markerli və nömrəli siyahılar, tabulyasiya xətkeşi və ya iki tərəfli düzləşdirmə yoxdur. Çap olunmuş PDF-lər mətni Helvetica ilə yazır.
- Plan divarları düzdür, buna görə qövs qısa divarlarla çəkilir. Divar alətinin icma tərəfindən əl ilə yoxlanılması gözləyir.
- Qat qrupları AutoCAD-in öz formatında yazılmır, buna görə AutoCAD düz siyahı göstərir. Digər proqramlar, {{cmd:FLOORLAYERS}} işlətməsəniz, bütün mərtəbələri birlikdə göstərir.
- Sənədlər paneli real paylaşımda iki nəfər tərəfindən sınanmayıb. Router oyma heç bir real maşında işləməyib. İşıqlandırma qiymətləndirməsi foton izi ilə yoxlanıb, başqa proqramla yox. Mühəndislik əlavələri yoxlama vasitələridir, mühəndis nəzərdən keçirməsinin əvəzi deyil.
- İngilis dilindən başqa dillər maşın qaralamalarıdır, bəzi yeni sözlər yalnız ingilis dilindədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, CadCraft 0.7-lə müqayisədə 0.8 və 0.8.1-də nə dəyişdiyidir. 0.8 (1 noyabr 2026) öz çertyojunuzdan işləyən, kompüterinizdəki qaydalarla və modelsiz çəkiliş köməkçiləri əlavə edir; 0.8.1 (2 noyabr 2026) ondan sonra bildirilən səhvləri düzəldir.

### Yeni

**Çertyoj fikrinizi tamamlayır**

- **Xəyal növbəti nəyin gəldiyini göstərir.** Heç bir əmr işləmədikdə, boz kəsikli xəyal çertyojunuzun öz naxışlarının növbəti nəyi dediyini göstərir: eyni aralıqla növbəti dirək, pilləkənin növbəti addımı, otağın çatışmayan divarı. Onu bir geri qaytarma addımı kimi çəkmək üçün {{key:Tab}} basın, ya da ləğv etmək üçün {{key:Esc}}. Yalnız ən yeni obyektlərə baxır, buna görə böyük çertyojda hamar qalır. {{ui:Parametrlər}} › {{ui:CadCraft}} bölməsində ya da {{cmd:AUTOCOMPLETE}} `Off` ilə söndürün.
- **Xətt çəkərkən növbəti nöqtə.** {{cmd:LINE}} və ya {{cmd:PLINE}} əmrinin ortasında xəyal növbəti nöqtədir: pilləkənin növbəti addımı, düzbucaqlının dördüncü künci və ya onu bağlayan nöqtə. Kursoru ona yaxınlaşdırın və {{key:Tab}} basın, sanki oraya klikləmisiniz.
- **Qələm eskizləri dəqiq həndəsəyə çevrilir.** {{cmd:SKETCHFIX}}: qələm, siçan və ya barmaqla kobud zərbələr çəkin, hər biri təmiz xəttə, dairəyə, qövsə, düzbucaqlıya və ya polixətə çevrilir və artıq çəkilmiş şeylərə tutulur. Bax: [Qələmlə eskiz çəkin və dəqiq həndəsə alın](topic:sketch-with-a-pen).
- **Eskizin fotosu çertyoja çevrilir.** {{cmd:PHOTOSKETCH}} (`PSK`) fotoda kağızı tapır, perspektivi düzləşdirir, verdiyiniz kağız ölçüsünü və miqyası tətbiq edir və hər qələm rəngi üçün qələm xətlərini qata izləyir. Yazılar izlənmir.
- **Qaydalarla ölçün.** {{cmd:AUTODIM}} (`ADIM`) seçdiyiniz tərəflər boyunca ölçü zəncirləri, ümumi ölçü, açılış enləri, deşik diametrləri və `Grid` ilə şəbəkə aralığı yaradır. Artıq olan ölçünü heç vaxt təkrarlamır.
- **Şəbəkə xəttini köçürün, dəst izləyir.** {{cmd:GRIDMOVE}} (`GM`): şəbəkə xəttində bitən divarlar onunla uzanır, onun boyunca olan divarlar, sütunlar, onun baloncuğu və etiketi köçür, və onun üzərindəki ölçülər yeni aralığı ölçür. Bir geri qaytarma addımı.

**Vərəqlər, detallar və etiketlər**

- **Özü tərtib olunan vərəqlər.** {{cmd:AUTOSHEET}} adlı görünüşlərinizi (ya da modelin ayrı-ayrı hissələrini) götürür, kağız ölçüsünü və standart miqyası seçir və görünüşləri yeni vərəqlərə başlıq bloku və ad-miqyas yazısı ilə yerləşdirir. Hər şey redaktə oluna bilər qalır. Bax: [Vərəqləri mənim üçün tərtib edin](topic:lay-out-sheets-for-me).
- **Firmanızın detalları, çəkdiyiniz kimi təklif olunur.** {{cmd:DETAILS}} (`DET`) öz detal bloklarınızı saxlayır. Seçdiyiniz şey onların qatlarındakı, blok adlarındakı və qeydlərindəki sözlərə görə biri ilə üst-üstə düşəndə status paneli bunu deyir; onu seçin və yerləşdirin. {{cmd:DETAILS}} › Paylaş siyahınızı Sənədlər qovluğunuza qoyur və komandanızın əlavə etdiklərini gətirir. {{ui:Parametrlər}} təklifləri söndürür.
- **Bloklarda etiketlər.** {{cmd:TAGS}} etiketi müəyyən edir (növü, ala biləcəyi dəyərlər, tətbiq olunduğu bloklar), seçdiyiniz blok istinadlarına təyin edir və onları CSV kimi saxlaya biləcəyiniz cədvəl kimi siyahıya salır. Təriflər DWG-də saxlanılır. Bax: [Etiketlər](topic:tags).
- **Çertyojun limitləri.** {{cmd:LIMITS}} çertyoj üçün düzbucaqlı təyin edir: şəbəkə onu doldurur və Hamısına miqyas onu göstərir. Limitlər kontur kimi göstərilir və kağız limitləri ilə birlikdə DWG və DXF-də saxlanılır. Bax: [Çertyojun limitlərini təyin edin](topic:drawing-limits).

**Başqa insanlarla və proqramlarla işləmək**

- **Qeydi revizyona çevirin.** {{cmd:REDLINE}} MarkupCraft-ın yazdığı paketi oxuyur və hər dəyişikliyi siyahıya salır. Hər birini qeydlə qəbul edin və ya rədd edin; qəbul olunanlar bir geri qaytarma addımında revizyon buludu və revizyon jurnalı alır, və MarkupCraft-da qeydləri bağlayan cavab faylını saxlayırsınız. Bax: [Qeydi revizyona çevirin](topic:redline-to-revision).
- **git və Fossil birləşdirə bilən çertyojlar.** {{ui:Birləşdirməyə uyğun fayllar}} {{ui:Parametrlər}} › {{ui:CadCraft}} bölməsində açıq olduqda hər obyekt heç vaxt dəyişməyən açar alır (fayllar təxminən 10 faiz böyük olur). Sonra `cadcraft merge base ours theirs` iki nəfərin bir DWG və ya DXF obyektinə etdiyi redaktələri obyekt-obyekt birləşdirir və yalnız iki nəfərin eyni şeyi dəyişdiyi yerləri bildirir. Bax: [Bir çertyojda iki nəfərin redaktələrini birləşdirin](topic:merge-drawings).
- **Nə dəyişdiyi sözlə.** Tarixçədə Müqayisə sadə siyahı verir: şeylərin harada dəyişdiyini, yerlərin nə qədər böyük olduğunu, nəyin əlavə olunduğunu, silindiyini və ya dəyişdirildiyini və redaktə olunmuş mətni. Bax: [Dəyişikliyi sözlərlə deyin](topic:changes-in-words).
- **İstiqamətlər və bucaqlar.** İstiqaməti geodeziya istiqaməti kimi yazın, məsələn N45°23'30"E, ya da dərəcə, dəqiqə və saniyə ilə, bucaq istənilən yerdə; AUNITS bucaqların necə göstərilməsini təyin edir. Bax: [İstiqamətləri və bucaqları yazın və göstərin](topic:bearings-and-angles).
- **Öz SHX şriftləriniz.** CadCraft-a SHX şriftləri qovluğu verin və onları adlandıran mətn üslubları ekranda və çaplarda həmin şriftlərlə çəkilir. Bax: [Öz SHX şriftlərinizlə mətn çəkin](topic:shx-fonts).
- **Mətndən diaqram.** {{cmd:DIAGRAM}} Mermaid axın diaqramını, PlantUML komponent diaqramını, D2-ni və ya haradan-hara siyahısını oxuyur və redaktə edə biləcəyiniz bloklar və birləşdiriciləri çəkir. Bax: [Mətndən diaqram çəkin](topic:text-to-diagram).
- **DWG-də OLE obyektləri.** {{cmd:OLELIST}} DWG-nin daşıdığı, CadCraft-ın özü yerləşdirə bilmədiyi OLE obyektlərini siyahıya salır və şəklin surətini dediyiniz yerə qoyur. Bax: [Şəkillər](topic:pictures#objects-from-other-programs-ole).
- **Hesablamalarınız çertyojla qalır.** Hesab vərəqləri və dizayn səbəbləri sinif cədvəli ilə birlikdə DWG-də saxlanılır.

**Görmədən çəkiliş**

- {{ui:Parametrlər}} bölməsində {{ui:Görmədən çəkiliş}} seçimini yandırın (ya da {{cmd:ACCESS}} yazın və `On` cavab verin). CadCraft hər əmri və nəticəni ekran oxuyucunuz vasitəsilə səsləndirir, çertyojı və kursorun yanındakıları təsvir edir, kursoru hərəkət etdirməyə və nöqtələri klaviaturadan seçməyə imkan verir və hər tutma və tutacaq üçün səs çalır. Brauzeriniz kompüterinizdə nitqi tanıya bildiyi yerdə əmrlər səslənə bilər. Bax: [Görmədən çəkin](topic:draft-without-sight).

**Hər tətbiqdə**

- **Dillər.** 54 dil; on yeni (Litva, Latış, Bosniya, Marathi, Telugu, Albaniya, Afrikaans, Filipin, Suahili, Özbək). İngilis dilindən başqa dillər ana dili danışan oxuyana qədər maşın qaralamalarıdır.
- **Giriş cihazları.** Trekpad, qələm, 3D siçan, oyun kontrolleri və MIDI kontrolları.
- **Alət sıraları və xassələr cədvəli.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət sıraları}} digər tətbiqlərdə Sarma, 2 sıra və ya 1 sıra təklif edir. CadCraft öz parametrini {{ui:Parametrlər}} › {{ui:CadCraft}} bölməsində saxlayır (bax: [Alət sıraları](topic:settings#toolbar-rows)). Paylaşılan xassələr cədvəli üç digər tətbiqdədir, CadCraft-da yox.
- **Problemlər, Dəyişən və əlavələr.** Hər tətbiqdə xəbərdarlıq edən paylaşılan Problemlər paneli, CadCraft Studio-da kimin harada olduğunu göstərən Dəyişən görünüşü (bax: [Bir çertyoj üzərində birlikdə işləmək](topic:work-live)) və əlavə siyahısı.
- **AI-nizi qoşun.** CadCraft Studio-dan səkkiz tətbiqin hamısına bir qoşulma, hər tətbiq üçün yalnız oxuma, təklif və ya redaktə səviyyəsi və köməkçinin nə etdiyinin sadə sözlərlə jurnalı ilə. CadCraft-ın öz AI-si yoxdur və hər tətbiqdə Soruş sizin qoşduğunuz AI-dən istifadə edir.

### 0.8.1-də düzəldildi

- **Xassələr fut-düym çertyojlarında 12'-6" əvəzinə 150 göstərirdi.** Tətbiqin özünün oxuduğu sahələr yenidən öz mətnini saxlayır.
- **Sinifləri səhv tipdə oxunan DWG faylları** (GitHub cadcraft#5) indi düzgün açılır.
- **Krossxar artıq pəncərələrin arxasında görünmür.**
- **Studio və qablaşdırılmış nəşrlər iş vaxtı dili dəyişə bilir.** Əvvəllər yalnız ingilis dilində idi. Hələ hər platformada sınanmayıb: dil dəyişmirsə bizə bildirin.
- **Portret rejimdə planşetlər** boş şəbəkə hündürlüyünü kətana verir, və vərəq rejimi 760 px və ya daha az ölçüdə başlayır.
- **Kəsişən pəncərə ilə STRETCH və LIMITS** Studio 0.8.0-da bildirilmişdi və 0.8 veb versiyasında artıq düzgün idi; bildirənin quraşdırıcısı köhnə idi. Studio 0.8.1 onları daşıyır.

### Bu versiyada hələ yoxdur

- **0.8 və 0.8.1 kod imzalı deyil.** Windows xəbərdarlıq verə bilər ({{ui:Ətraflı}} seçin, sonra {{ui:Yenə də işə sal}}); Mac-da CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. Mağaza buraxılışları dayandırılıb, iPad və iPhone versiyası 0.8.1 üçün yenidən qurulmayıb.
- **Qələm eskizləri və eskiz fotoları** yalnız uydurma fotolarda və siçanla sınanıb, hələ real qələmlə, toxunma ekranı və ya kağızda əl eskizi ilə yox.
- **Görmədən çəkiliş** avtomatik yoxlamalarla sınanıb, hələ ekran oxuyucu və ya görməyən sınaqçı ilə yox.
- **Detalların paylaşılması** iki nəfərlik yoxlamadan keçməyib, və Sənədlər qovluğu kimi Team Cloud Plan qovluğu qurulmayıb.
- **Birləşdirmə** CadCraft-ın DWG və DXF faylları üçün işləyir; digər tətbiqlərin faylları üçün eyni qurulmayıb.
- **Pəncərələr arası geri qaytarma:** CadCraft hər bitmiş addımı bildirir, lakin Studio-da hələ bütün tətbiqlər üçün tək Geri qaytarma yoxdur; hər tətbiq öz addımlarını geri qaytarır.
- **DWG-nin OLE obyektləri** saxlanılır, lakin yerində çəkilmir.
- **Digər proqramlardan çap üslubu cədvəllərinin (CTB faylları) oxunması** qurulub, lakin digər proqramın faylı ilə yoxlanılmayıb.
- **AI-nizi qoşun:** Studio-da bir kliklə qoşulma, brauzer AI üçün hostinqlənmiş konnektor, Studio daxilində öz API açarınız və dərc olunmuş MCP paketi bu buraxılışda vəd edilmir.

Bundan əvvəlki versiya üçün bax: [Versiya 0.7-də yenilik (əvvəlki)](topic:whats-new-0-7).
