---
title: PDF-ə çap et
summary: Vərəqin tam ölçüdə PDF-ini, yaxud modelin miqyasda və ya kağıza sığdırılmış PDF-ini hazırlayın, brauzerdən və ya Studio-dan çap edin, ya da PNG və ya SVG kimi saxlayın.
keywords: çap, printer, nüsxə, png, svg, şəkil, pdf, nəşr, exportpdf, kağız, miqyas, monoxrom, boz tonlar, qara və ağ, xəttin qalınlığı, qələm, səhifə quraşdırması, çap pəncərəsi, çap üslubu, çap üslubu cədvəli, ctb, rənglə bağlı, rastrlama, plotstyles, stylesmanager
from: a4752f83
---

## Nə hazırlayacaqsınız

Vərəqin tam ölçüdə PDF-i, sonra modelin 1:100 miqyasda sürətli PDF-i və bir çap nüsxəsi.

PDF brauzerinizin daxilində hazırlanır; heç nə yüklənmir. Bu vektor PDF-dir: xətlər istənilən miqyasda kəskin qalır və mətndə axtarış etmək olar.

## Vərəqi çap et

1. Çertyojun altındakı vərəq nişanına klikləyin.
2. {{key:Mod+P}} düymələrini basın, {{ui:Çap et}} düyməsinə klikləyin və ya `PLOT` yazıb {{key:Enter}} düyməsini basın.

{{ui:PDF-ə çap et}} dialoq pəncərəsi açılır. Burada hansı vərəqin və hansı kağızda çap olunduğu göstərilir: "tam ölçüdə … ekranda gördüyünüz kimi". Sağdakı önbaxışda vərəq göstərilir.

3. {{ui:Çap üslubu}} bölməsində qara xətlər üçün {{ui:Monoxrom (qara)}}, rəngləri saxlamaq üçün {{ui:Rəng (çəkildiyi kimi)}}, {{ui:Boz tonlar}} və ya öz cədvəlinizi seçin (bax: [Çap üslubu cədvəlləri](topic:plot-pdf#plot-style-tables)). Vərəq bu seçimi saxlayır: o çertyoj ilə birlikdə yadda qalır.
4. {{ui:Xəttin qalınlığı}} bölməsində 0,13 mm-dən 0,70 mm-ə qədər qələm enini seçin. Standart xətt qalınlığına malik xətlər bu enlə çap olunur; öz xətt qalınlığı olan xətlər (qat və ya obyekt üzrə, ya da cədvəldə rənginin qələmi ilə) həmin enlə çap olunur.
5. {{ui:PDF-i yüklə}} düyməsinə klikləyin.

Brauzer çertyojun və vərəqin adı ilə PDF yükləyir, məsələn `Drawing1-A-101 Plan.pdf`. Tarixçə faylın ölçüsünü baytlarla, kağız ölçüsünü isə millimetrlərlə göstərir.

Vərəq həmişə öz kağızında 1:1 miqyasda çap olunur. Kağızı dəyişmək üçün onu vərəqin özündə dəyişin (bax: [Vərəqin quraşdırılması](topic:sheets-and-viewports)). Çap olunmaması təyin edilmiş qatlar çıxarılır, görünüş pəncərəsinin çərçivələri də çap olunmur.

## Bütün vərəqlər bir PDF-də

İki və ya daha çox vərəq olduqda {{ui:PDF-ə çap et}} dialoq pəncərəsində {{ui:Bütün vərəqlər bir PDF-də}} seçimi olur; və ya {{cmd:PUBLISH}} yazın. {{key:Enter}} bütün vərəqləri seçir; `S` (Some) isə onların adlarını vergüllə ayrılmış şəkildə soruşur. Bir PDF yüklənir, hər vərəq üçün bir səhifə olur, vərəq nişanlarının sırası ilə, hər biri öz kağız ölçüsündə, və hər vərəq üçün adı ilə bir əlfəcin. Hər vərəq öz çap üslubu cədvəli ilə çap olunur; cədvəl seçilməyən vərəq dialoqda son seçdiyiniz cədvəli və son seçdiyiniz qələm enini istifadə edir.

## Modeli çap et

1. {{ui:Model}} nişanına klikləyin.
2. {{key:Mod+P}} düymələrini basın.

Dialoq modeli kağız vərəqinə çap edəcəyini bildirir və əlavə parametrləri göstərir:

3. {{ui:Sahə}} bölməsində nəyi çap edəcəyinizi seçin:
   - {{ui:Hamısı (hüdudlar)}}: bütün çertyoj.
   - {{ui:Ekranda olanlar}}: indi çertyojda gördüyünüz sahə.
   - {{ui:Pəncərə…}}: sonra {{ui:Seç}} düyməsinə klikləyin, çertyojda iki künc göstərin və dialoq geri qayıdır.
4. {{ui:Kağız}} bölməsində ölçü seçin: ISO A4-dən A0-a qədər, Letter, Legal, Tabloid və ANSI C və D, ya da ARCH C, D və E.
5. {{ui:İstiqamət}} bölməsində {{ui:Üfüqi}} və ya {{ui:Şaquli}} seçin.
6. {{ui:Miqyas}} bölməsində {{ui:Kağıza sığdır}} və ya `1:100` kimi miqyas seçin.

Parametrlərin altında bir sətir miqyası və sahənin kağızda nə qədər böyük çıxacağını göstərir. Əgər sahə kağızdan böyükdürsə, bu barədə xəbərdarlıq verilir: kənarlar kəsilir. Daha kiçik miqyas, daha böyük kağız və ya {{ui:Kağıza sığdır}} seçin.

7. {{ui:PDF-i yüklə}} düyməsinə klikləyin.

Model çapında kənarların ətrafında 5 mm boşluq qalır, çünki əksər printerlər kənara qədər çap edə bilmir. {{ui:Kağıza sığdır}} qeyri-standart miqyas verir (tarixçə və məlumat sətri "(sığdırılmış)" yazır); çertyoj ölçülərinin dəqiq olmalı olduğu halda standart miqyas seçin.

:::note
Miqyaslar real vahidlərlə oxunur. 1:100 düzgün olması üçün {{ui:Cari parametrlər}} bölməsində {{ui:Vahidlər}} seçimini çertyojun bir vahidinin nəyə bərabər olduğuna uyğun təyin edin. Vahidsiz çertyoj millimetrdə qəbul olunur.
:::

## Çap üslubu cədvəlləri

Çap üslubu cədvəli 255 standart çertyoj rənginin hər birinin necə çap olunacağını göstərir; digər CAD proqramlarında rənglə bağlı çap üslubu cədvəlinin (CTB) etdiyi kimi. Üç cədvəl daxili gəlir:

| Cədvəl | Çap olunur |
|---|---|
| {{ui:Rəng (çəkildiyi kimi)}} | Hər obyekt öz rəngində. |
| {{ui:Monoxrom (qara)}} | Bütün rənglər qara: çertyojlar üçün adi seçim. |
| {{ui:Boz tonlar}} | Hər rəng öz boz tonunda, beləliklə qara-ağ printerdə rənglər bir-birindən fərqlənir. |

Öz cədvəlinizi yaratmaq üçün, məsələn qırmızı xətləri qalın, qalanlarını isə incə və qara etmək üçün:

1. {{ui:PDF-ə çap et}} dialoq pəncərəsində {{ui:Cədvəlləri redaktə et…}} düyməsinə klikləyin (və ya {{cmd:PLOTSTYLES}} yazın).
2. {{ui:Yeni}} düyməsinə klikləyin və {{ui:Ad}} sahəsinə `office` kimi ad yazın. Daxili cədvəldən başlamaq üçün onu {{ui:Cədvəl}} bölməsində seçin və {{ui:Kopyala}} düyməsinə klikləyin.
3. Şəbəkədə bir rəngə klikləyin. {{key:Shift}}+klik rənglər diapazonunu seçir, {{key:Mod}}+klik bir rəng də əlavə edir, {{ui:Bütün rəngləri seçin}} isə hamısını seçir.
4. Seçilmiş rənglərin necə çap olunacağını təyin edin:
   - {{ui:Çap olunur}}: {{ui:Öz rəngi}}, {{ui:Qara}} və ya {{ui:Başqa rəng…}}.
   - {{ui:Boz tonu kimi}}: rəngi öz boz tonunda.
   - {{ui:Mürəkkəb (%)}}: 100 tam mürəkkəbdir, 50 isə ağa yarı yoldur (rastrlama), arxa plan xətləri üçün.
   - {{ui:Xətt qalınlığı}}: {{ui:Öz xətt qalınlığı}} obyektin və ya qatın xətt qalınlığını saxlayır; bir dəyər isə həmin rəngin bütün xətlərini həmin enlə çap edir.
   - {{ui:Xətt tipi}}: həmin rəngin bütün xətlərini başqa xətt tipi ilə çap edin (məsələn, bütün qırmızıları qırıq xətt kimi); {{ui:Obyektin xətt növündən istifadə et}} onları olduğu kimi saxlayır.
   - {{ui:Xəttin ucu}} və {{ui:Xətlərin birləşməsi}}: düz, kvadrat və ya dairəvi uclar, və mitr, skos və ya dairəvi künclər (heç nə təyin etmədikdə əvvəlki kimi dairəvi).
   - {{ui:Doldurma üslubu}}: həmin rəngin düz doldurması mürəkkəb əvəzinə ştrix xətləri kimi çap olunur (üfüqi və ya şaquli zolaqlar, maillər, çarpaz, romb və ya kvadrat nöqtələr), düz mürəkkəbin çox ağır olduğu printerlər və planlar üçün.
   Cədvəlin özündə daha iki parametr var: {{ui:Xətt qalınlıqları}} — cədvəlin tanıdığı enlər (çap olunan xətt ən yaxın enə çevrilir), və {{ui:Xətt tipinin miqyası}} — ISO olmayan bütün xətt tiplərinin qırıqlarına tətbiq olunan əmsal.
5. {{ui:Hazırdır}} düyməsinə klikləyin. Cədvəl çertyojda saxlanılır və vərəq (və ya model) indi onunla çap olunur. {{ui:Ləğv et}} dəyişiklikləri silir.

Öz qələmi olan rəngin küncündə nöqtə görünür, və xətt qalınlığı təyin edilmişsə aşağıda nöqtə olur. Həqiqi rəngə malik obyekt (255-dən biri olmayan) ən yaxın standart rəngin qələmini istifadə edir.

Çertyoj cədvəllərini saxlayır və hər vərəqin seçimini DWG (2000-dən 2018-ə) və ya DXF (R12 və ya 2000) kimi saxladıqda saxlayır, və yenidən açdıqda həmin cədvəllər və seçimlər geri gəlir. Digər proqramlar hər vərəqin səhifə quraşdırmasında adı (`office.ctb`) görür, cədvəlin özünü yox. Başqa proqramdan olan çertyojun səhifə quraşdırmasında `monochrome.ctb` kimi cədvəl adı göstərilirsə, o, həmin adlı daxili cədvəllə çap olunur; digər ad üçün dialoq çertyojda belə cədvəlin olmadığını bildirir və siz cədvəl seçənə və ya həmin adla yaradana qədər çertyojun rənglərini çap edir.

Cədvəli başqa çertyojda istifadə etmək üçün {{ui:Çap üslubu cədvəlləri}} bölməsində {{ui:İxrac et}} düyməsinə klikləyin (`office.plotstyle.json` faylını saxlayır), sonra digər çertyojda {{ui:İdxal et…}} düyməsini basın. {{ui:İdxal et…}} başqa proqramdan olan `.ctb` faylını da qəbul edir: o, formatın dərc olunmuş təsvirindən oxunur və **hələ həqiqi fayl ilə yoxlanılmayıb**. Hər rəngin rəngi, rastrlaması və xətt qalınlığı oxunur; boz tonlar, qələm nömrələri, xətt tipləri, xətlərin uc və birləşmələri və doldurma üslubları oxunmur, adlandırılmış cədvəl (`.stb`) isə qəbul edilmir. İlk çapı gözlədiyinizlə müqayisə edin və səhv olarsa, bizə faylı göndərin.

## Çap

**Brauzerdə** {{ui:Çap et…}} düyməsinə klikləyin. CadCraft PDF-i hazırlayır və onun üçün brauzerin öz çap dialoqunu açır. Miqyası saxlamaq üçün orada "Həqiqi ölçü" və ya 100% seçin ("Sığdır" yox). Brauzer səhifədən çap etməsə, PDF yeni nişanda açılır: oradan {{key:Mod+P}} ilə çap edin.

Həmçinin {{ui:Çap üçün aç}} düyməsinə klikləyə bilərsiniz: PDF yeni brauzer nişanında açılır və siz oradan çap edirsiniz.

:::safari
Safari PDF-i göstərə bilər və **Fayl**, sonra **Çap** seçməyinizi gözləyə bilər.
:::

Brauzeriniz yeni nişanı bloklayırsa, CadCraft PDF-i yükləyir və bunu tarixçədə bildirir. Növbəti dəfə nişanda açmaq üçün saytın pəncərələrinə icazə verin.

**CadCraft Studio-da** {{ui:PDF-ə çap et}} dialoq pəncərəsi kompüterin printerlərini siyahılayır. {{ui:Printer}}, {{ui:Printerdəki kağız}} və {{ui:Nüsxə}} sayını seçin, sonra {{ui:Çap et…}} düyməsinə klikləyin. {{ui:Çapla eyni}} printerin vərəqin ölçüsündə kağızını seçir (A3 vərəq üçün A3); printerdə belə kağız yoxdursa, öz kağızını istifadə edir və vərəqi ona sığdırır. Windows-da vərəq 300 dpi şəkil kimi göndərilir, çünki PDF proqramı olmadan Windows PDF çap edə bilmir; Linux və macOS-da isə PDF özü sistemin çap xidmətinə göndərilir. Heç nə kompüterdən çıxmır.

## Şəkil və SVG fayllar

{{ui:PNG yüklə}} çap olunmuş vərəqi 300 dpi şəkil kimi saxlayır (yalnız çox böyük vərəq brauzerin hazırlaya biləcəyindən böyük olduqda aşağı salınır; tarixçə bunu deyir). {{ui:SVG yüklə}} onu millimetrlərdə miqyaslana bilən çertyoj kimi saxlayır, çapın xətləri və mətni ilə. Hər ikisi PDF ilə eyni çapdan, eyni çap üslubu, xətt qalınlığı və sahə ilə hazırlanır. Çertyojdakı şəkillər yalnız PDF-də olur; neçə şəklin buraxıldığını tarixçə göstərir.

## Şəkillər

Şəkillər öz ayırdetmə qabiliyyətində, xətlərin altında çap olunur. Dialoqdakı {{ui:Şəkillər}} bölməsi onları daha kiçik fayl üçün 600, 300 və ya 150 dpi ilə məhdudlaşdırır. Xətlər, mətn və ştrixlamalar həmişə kəskin (vektor) qalır, şəffaflıq isə şəffaf qalır. Bax: [Çertyojdakı şəkillər](topic:pictures).

## Yadda saxlanan parametrlər

Dialoq bu brauzerdə son kağızınızı, istiqamətinizi, miqyasınızı və xətt qalınlığınızı yadda saxlayır. Çap üslubu cədvəli çertyojda hər vərəqlə birlikdə saxlanılır; heç nə seçilməyən vərəq son seçdiyiniz cədvəldən başlayır. Seçilmiş pəncərə səhifəni yenidən yükləyənə qədər saxlanılır; bundan sonra dialoq {{ui:Hamısı (hüdudlar)}} ilə açılır.

## Tez-tez rast gəlinən səhvlər

- **PDF boşdur və ya düymələr boz rəngdədir.** Çap ediləcək heç nə yoxdur (boş model), ya da {{ui:Pəncərə…}} seçilib, amma hələ pəncərə seçilməyib ("Çap etmək üçün pəncərəni seçin.").
- **PDF-də mətn yerinə "?" görünür.** Polyak, Çex, kiril, yunan və Avropanın digər yazılarındakı mətn öz formasında çap olunur: PDF bunun üçün lazım olan hərfləri daşıyır (Helvetica-nın enlərinə malik Liberation Sans şriftindən), və mətni yenə seçmək və axtarmaq olar. Çin, yapon və koreya mətni də öz formasında çap olunur: çertyojda belə mətn olduqda çap daha böyük şrift yükləyir (təxminən 10 MB, bir dəfə) və PDF yalnız istifadə olunan simvolları daşıyır, ona görə ilk dəfə internet bağlantısı lazımdır (əvvəllər saxlanmış oflayn nüsxədə yox). İvrit mətni Latın mətni ilə eyni daxili şriftdən çap olunur, ərəb, fars və urdu mətni isə plotu bir şrift daha yükləməyə məcbur edir (1 MB-dan az, bir dəfə); sağdan sola xətlər düzülür və hərfləri birləşdirilir (bax: [Mətn](topic:text)). Həmin şriftlərdən kənar nadir ideoqramlar və hind kimi mürəkkəb formalaşdırma tələb edən yazılar "?" kimi çap olunur, tarixçə isə onları sayır.
- **Bütün xətlərin qalınlığı eynidir.** Onların xətt qalınlığı standartdır: qatlara və ya obyektlərə sağ paneldə {{ui:Xəttin qalınlığı}} verin (bax: [Xəttin qalınlığı və xətt tipləri](topic:units-papers-scales#line-weights-and-linetypes)), və ya [çap üslubu cədvəlində](topic:plot-pdf#plot-style-tables) hər rəng üzrə xətt qalınlığı təyin edin.
- **Çap üslubunun yanında "(bu çertyojda yoxdur)".** Çertyoj başqa proqramdan gəlib və özündə olmayan cədvələ istinad edir. Cədvəllərdən birini seçin, ya da həmin adla yeni cədvəl yaradın.
- **Konstruksiya xətləri çap olundu.** Onların qatını çap olunmayan edin: {{ui:Qatlar}} panelində onun printer düyməsinə klikləyin.
- **Çap olunmuş vərəq səhv ölçüdədir.** Printer onu miqyaslayıb. Həqiqi ölçüdə çap edin.
- **{{key:Mod+P}} brauzerin çap dialoqunu açdı.** Kursor sağ paneldəki xanada idi, ya da başqa dialoq açıq idi. Xanadan çıxmaq üçün {{key:Enter}} və ya {{key:Esc}} basın, sonra yenidən cəhd edin, ya da {{ui:Çap et}} düyməsinə klikləyin.
- **{{key:Mod+P}} heç nə etmədi.** Əmr işləyir. Əvvəl {{key:Esc}} basın.
