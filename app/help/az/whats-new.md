---
title: 0.8 və 0.8.1-də yeniliklər
summary: Çertyojunuzu tamamlayan kölgə, qələmlə skeçlər və skeç fotoşəkillər həndəsəyə çevrilir, özü tərtib olunan vərəqlər, çəkərkən təklif olunan detallar, GRIDMOVE və AUTODIM, etiketlər, birləşdirməyə uyğun fayllar, markupların düzəlişlərə çevrilməsi, görməyən şəxslər üçün çəkiliş, çertyoj hüdudları, bearinglər, SHX şriftləri, mətndən diaqramlar və 0.8.1-də düzəlişlər.
keywords: yeniliklər, nə yeni, buraxılış qeydləri, dəyişikliklər, jurnal, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, avtotamamlama, kölgə, tab, sketchfix, photosketch, autosheet, detallar, gridmove, autodim, etiketlər, redline, birləşdirmə, git, fossil, giriş, görməyən çəkiliş, hüdudlar, bearinglər, aunits, shx, diaqram, ole, tarixçə, müqayisə, sözlərlə, xassələr, fut və düym, uzatma, dillər, giriş cihazları, problemlər, canlı, əlavələr
from: 9dd82db5
---

Bu, CadCraft 0.8 və 0.8.1-də 0.7-yə nisbətən nəyin dəyişdiyidir. 0.8 (1 noyabr 2026) çertyojunuzdan işləyən çəkiliş köməkçiləri əlavə edir; onlar kompüterinizdə qaydalarla işləyir və modelsiz işləyir. 0.8.1 (2 noyabr 2026) bu versiyadan sonra bildirilmiş səhvləri düzəldir.

## Yeni

### Düşündüyünüzü tamamlayan çertyoj

- **Növbəti nə gəldiyini kölgə göstərir.** Heç bir əmr işləməyəndə boz xətli kölgə göstərir ki, çertyojunuzun öz naxışları növbəti nə deyir: eyni məsafədə növbəti dayaq, pilləkənin növbəti pilləsi, otağın çatışmayan divarı. Onu bir geri qaytarma addımı kimi çəkmək üçün {{key:Tab}} basın, ya da rədd etmək üçün {{key:Esc}}. Yalnız ən yeni obyektlərə baxır, buna görə böyük çertyojda da hamar qalır. Onu {{ui:Parametrlər}} › {{ui:CadCraft}}-da və ya {{cmd:AUTOCOMPLETE}} `Bağlı (O)` ilə söndürün.
- **Xətt çəkərkən növbəti nöqtə.** {{cmd:LINE}} və ya {{cmd:PLINE}} ortasında kölgə növbəti nöqtədir: pilləkənin növbəti pilləsi, düzbucaqlının dördüncü küncü və ya onu bağlayan nöqtə. Kursoru ona yaxınlaşdırın və {{key:Tab}} basın, sanki oraya klikləmisiniz.
- **Qələm skeçləri dəqiq həndəsəyə çevrilir.** {{cmd:SKETCHFIX}}: qələm, siçan və ya barmaqla qaba zolaqlar çəkin və hər biri təmiz xəttə, çevrəyə, qövsə, düzbucaqlıya və ya polixəttə çevrilir, artıq çəkilmiş şeyə tutularaq. Bax: [Qələmlə skeç çəkin və dəqiq həndəsə alın](topic:sketch-with-a-pen).
- **Skeçin fotoşəkli çertyoja çevrilir.** {{cmd:PHOTOSKETCH}} (`PSK`) fotoşəkildə kağızı tapır, perspektivi düzləşdirir, verdiyiniz kağız ölçüsünü və miqyası tətbiq edir və hər qələm rəngi üçün bir qata qələm xətlərini izləyir. Yazılar izlənmir.
- **Ölçülər qaydalarla verilir.** {{cmd:AUTODIM}} (`ADIM`) seçdiyiniz tərəflər boyunca ölçü zəncirləri, ümumi ölçü, açılış enləri, dəlik diametrləri və `Grid` ilə şəbəkə aralığı yaradır. Artıq olan ölçünü heç vaxt təkrarlamır.
- **Şəbəkə xəttini hərəkət etdirin, dəst onu izləyir.** {{cmd:GRIDMOVE}} (`GM`): şəbəkə xəttində bitən divarlar onunla uzanır, onun boyunca olanlar, sütunlar, onun balonu və etiketi hərəkət edir, onun üzərindəki ölçülər yeni aralığı ölçür. Bir geri qaytarma addımı.

### Vərəqlər, detallar və etiketlər

- **Özü tərtib olunan vərəqlər.** {{cmd:AUTOSHEET}} adlandırılmış görünüşlərinizi (və ya modelin ayrı hissələrini) götürür, kağız ölçüsü və standart miqyas seçir və görünüşləri yeni vərəqlərə ştamp və ad-miqyas başlığı ilə qoyur. Hər şey redaktə oluna bilən qalır. Bax: [Vərəqləri mənim üçün tərtib edin](topic:lay-out-sheets-for-me).
- **Firmanızın detalları çəkərkən təklif olunur.** {{cmd:DETAILS}} (`DET`) öz detal bloklarınızı saxlayır. Seçdiyiniz şey qatlarındakı sözlərə, blok adlarına və qeydlərə görə birinə uyğun gələndə status paneli bunu deyir; onu seçin və yerləşdirin. {{cmd:DETAILS}} › Paylaş siyahınızı Sənədlər qovluğunuza qoyur və komandanızın əlavə etdiklərini gətirir. Parametrlər təklifləri söndürür.
- **Bloklarda etiketlər.** {{cmd:TAGS}} etiketi təyin edir (növü, qəbul edə biləcəyi dəyərlər, tətbiq olunduğu bloklar), seçdiyiniz blok istinadlarına qoyur və onları CSV kimi saxlaya biləcəyiniz cədvəl kimi sadalayır. Təriflər DWG-də saxlanılır. Bax: [Etiketlər](topic:tags).
- **Çertyojun hüdudları.** {{cmd:LIMITS}} çertyoj üçün düzbucaqlı təyin edir: şəbəkə onu doldurur və {{ui:Hamısını miqyasla}} onu göstərir. Hüdudlar kontur kimi göstərilir və kağız hüdudları ilə birlikdə DWG və DXF-də saxlanılır. Bax: [Çertyojun hüdudlarını təyin edin](topic:drawing-limits).

### Digər insanlar və digər proqramlarla işləmək

- **Markupu düzəlişə çevirin.** {{cmd:REDLINE}} MarkupCraft-ın yazdığı paketi oxuyur və hər dəyişikliyi sadalayır. Hər birini qeydlə qəbul edin və ya rədd edin; qəbul edilənlər bir geri qaytarma addımında düzəliş buludu və düzəliş jurnalı alır, MarkupCraft-da markupları bağlayan cavablar faylını isə saxlayırsınız. Bax: [Markupu düzəlişə çevirin](topic:redline-to-revision).
- **Git və Fossil-in birləşdirə biləcəyi çertyojlar.** {{ui:Parametrlər}} › {{ui:CadCraft}}-da {{ui:Birləşdirməyə uyğun fayllar}} açıq olduqda hər obyekt heç vaxt dəyişməyən açar alır (fayllar təqribən 10 faiz böyük olur). `cadcraft merge base ours theirs` iki nəfərin bir DWG və ya DXF obyektində etdiyi redaktələri obyekt-obyekt birləşdirir və yalnız iki nəfərin eyni şeyi dəyişdiyi yeri bildirir. Bax: [İki nəfərin bir çertyojdakı redaktələrini birləşdirin](topic:merge-drawings).
- **Nə dəyişdiyi, sözlərlə.** Tarixçədə {{ui:Müqayisə}} sadə siyahı verir: nələrin dəyişdiyi, yerlərin nə qədər böyük olduğu, nələrin əlavə, silinmiş və ya dəyişdirildiyi və redaktə olunmuş mətn. Bax: [Nə dəyişdiyini sözlərlə deyin](topic:changes-in-words).
- **Bearinglər və bucaqlar.** İstiqaməti geodezist bearingi kimi yazın, məsələn N45°23'30"E, ya da dərəcə, dəqiqə və saniyə ilə, bucaq istənilən hər yerdə; AUNITS bucaqların necə göstərilməsini təyin edir. Bax: [Bearinglər və bucaqları yazın və göstərin](topic:bearings-and-angles).
- **Öz SHX şriftləriniz.** CadCraft-a SHX şriftləri qovluğu verin: onları adlandıran mətn üslubları ekranda və çaplarda həmin şriftlərlə çəkilir. Bax: [Öz SHX şriftlərinizlə mətn çəkin](topic:shx-fonts).
- **Mətndən diaqram.** {{cmd:DIAGRAM}} Mermaid axın diaqramını, PlantUML komponent diaqramını, D2-ni və ya hara-hara siyahısını oxuyur və redaktə edilə bilən bloklar və konnektorlar çəkir. Bax: [Mətndən diaqram çəkin](topic:text-to-diagram).
- **DWG-də OLE obyektləri.** {{cmd:OLELIST}} DWG-nin daşıdığı, CadCraft-ın özü yerləşdirə bilmədiyi OLE obyektlərini sadalayır və şəklin surətini dediyiniz yerə qoyur. Bax: [Şəkillər](topic:pictures#objects-from-other-programs-ole).
- **Hesablamalarınız çertyojla qalır.** Hesablama vərəqləri və dizayn səbəbləri sinif cədvəli ilə birlikdə DWG-də saxlanılır.

### Görməyən şəxslər üçün çəkiliş

- {{ui:Parametrlər}}-da {{ui:Görmədən çəkiliş}} açın (və ya {{cmd:ACCESS}} yazın və `Açıq (O)` cavabını verin). CadCraft hər əmri və nəticəni ekran oxuyucunuz vasitəsilə elan edir, çertyojı və kursorun yaxınında olanı təsvir edir, kursoru hərəkət etdirməyə və nöqtələri klaviaturada seçməyə imkan verir və hər tutma və tutacaq üçün səs çalır. Brauzeriniz kompüterinizdə nitqi tanıya bildikdə əmrlər ağızla deyilə bilər. Bax: [Görmədən çəkin](topic:draft-without-sight).

### Hər tətbiqdə

- **Dillər.** 54 dil; on yeni (litvaca, latviyaca, bosniyaca, marathi, telugu, albanca, afrikaanca, filipincə, suahili, özbəkcə). İngilis dilindən başqa dillər, ana dilində danışan biri oxuyana qədər maşın qaralamasıdır.
- **Giriş cihazları.** Trackpad, qələm, 3D siçan, oyun pultu və MIDI idarəetmələri.
- **Alət sıraları və xassə cədvəli.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət sıraları}} digər tətbiqlərdə Sarma, 2 sıra və ya 1 sıra təklif edir. CadCraft öz parametrini {{ui:Parametrlər}} › {{ui:CadCraft}}-da saxlayır (bax: [Alət sıraları](topic:settings#toolbar-rows)). Paylaşılan xassə cədvəli CadCraft-da yox, üç digər tətbiqdədir.
- **Problemlər, Canlı və əlavələr.** Hər tətbiqdə xəbərdarlıq edən paylaşılan Problemlər paneli, CadCraft Studio-da kimin harada olduğunu göstərən Canlı görünüş (bax: [Bir çertyoju birlikdə işləyin](topic:work-live)) və əlavələrin siyahısı.
- **AI-nizi qoşun.** CadCraft Studio-dan səkkiz tətbiqin hamısına bir qoşulma, hər tətbiq üçün yalnız oxumaq, təklif və ya redaktə səviyyəsi və köməkçinin etdiklərinin sadə sözlərlə jurnalı. CadCraft öz AI-sına malik deyil, və hər tətbiqdə Soruş sizin qoşduğunuz AI-dan istifadə edir.

## 0.8.1-də düzəldilib

- **Xassələr fut-düym çertyojlarında 12'-6" əvəzinə 150 göstərirdi.** Tətbiqin özünün oxuduğu sahələr yenidən öz mətnini saxlayır.
- **Sinif bölməsi səhv tipdə oxunan DWG faylları** (GitHub cadcraft#5) indi düzgün açılır.
- **Kursor artıq pəncərələrin arxasında görünmür.**
- **Studio və qablaşdırılmış nəşrlər iş vaxtında dil dəyişə bilir.** Əvvəl yalnız ingilis dilində idi. Hər platformada hələ sınaqdan keçməyib: dil dəyişmirsə bizə deyin.
- **Portret rejimində planşetlər** boş şəbəkə hündürlüyünü çəkiliş sahəsinə verir, vərəqlər rejimi isə 760 px və ya daha az olduqda başlayır.
- **Kəsişən pəncərə ilə STRETCH və LIMITS** Studio 0.8.0-da bildirilmişdi, amma 0.8 veb quruluşunda artıq düzgün idi; bildirən şəxsin quraşdırıcısı köhnə idi. Studio 0.8.1 onları daşıyır.

## Hələ bu versiyada deyil

- **0.8 və 0.8.1 kod imzası ilə imzalanmayıb.** Windows xəbərdarlıq edə bilər ({{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}); Mac-da CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. Mağaza quruluşları dayandırılıb, iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Qələm skeçləri və skeç fotoşəkilləri** yalnız uydurma fotoşəkillərdə və siçanla sınaqdan keçib, hələ real qələm, toxunuşlu ekran və ya kağızda əl skeçi ilə yox.
- **Görmədən çəkiliş** avtomatik yoxlamalarla sınaqdan keçib, hələ ekran oxuyucu və ya görməyən sınaqçı ilə yox.
- **Detalların paylaşılması** iki nəfərlik yoxlamadan keçməyib, Sənədlər qovluğu kimi Team Cloud Plan qovluğu isə qurulmayıb.
- **Birləşdirmə** CadCraft-ın DWG və DXF faylları üçün işləyir; digər tətbiqlərin faylları üçün eyni şey qurulmayıb.
- **Pəncərələr arası geri qaytarma:** CadCraft hər bitmiş addımı bildirir, lakin Studio-da hələ bütün tətbiqlər üçün tək Geri qaytar yoxdur; hər tətbiq öz addımlarını geri qaytarır.
- **DWG-nin OLE obyektləri** saxlanılır, lakin yerində çəkilmir.
- **Plot style cədvəllərinin (CTB faylları) oxunması** digər proqramlardan qurulub, lakin digər proqramın faylı ilə yoxlanılmayıb.
- **AI-nizi qoşun:** Studio-da bir klik qoşulma, brauzer AI-si üçün hostinq olunan konnektor, Studio-da öz API açarınız və dərc olunmuş MCP paketi bu buraxılışda vəd olunmur.

Əvvəlki versiya üçün bax: [0.7-də yeniliklər](topic:whats-new-0-7).
