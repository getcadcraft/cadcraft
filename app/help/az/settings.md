---
title: CadCraft parametrləri
summary: Çertyoj tətbiqinə aid parametrlər: kursorun ölçüsü, kopyalanmış obyektin kursordan hansı nöqtədə asılması, kliklərin seçimə təsiri, alət sətirlərinin sayı, komanda sətrinin yeri və hündürlüyü, yığcam yuxarı sahə və künc göstəricisi.
keywords: komanda sətri, üzən komanda sətri, üzdürmək, yerləşdirmək, bir sətir, f2, komanda tarixçəsi, commandline, cmdline, toparea, yuxarı sahə, yığcam, cursorsize, tam ekran xaç, tam ekran kursor, kənardan kənara, alət sətirləri, alət paneli göstərişi, ctrl f1, parametrlər, seçimlər, künc göstəricisi, görünüş kubu, ox işarəsi, ucs işarəsi, kursor, xaç, seçmə qutusu, yapışdırma nöqtəsi, baza nöqtəsi, obyektlərə klikləmə, seçim, pickadd, shift, sıfırla
from: 0896eb42
---

{{ui:Parametrlər}} açmaq üçün tətbiq panelindəki çarxa və ya {{key:Mod+,}} basın. Birinci sekmə, {{ui:CadCraft}}, bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} isə bu ailədən olan bütün tətbiqlərin paylaşdığı parametrləri saxlayır (mövzu, panel mətninin ölçüsü və enləri, alət panelinin görünüşü və sırası). CadCraft-ın parametrləri yalnız bu tətbiqdə mövcuddur: onları burada dəyişirsiniz və bu brauzer onları yadda saxlayır. {{ui:CadCraft parametrlərini sıfırla}} hər birini başlanğıc vəziyyətinə qaytarır.

## Kursor

**Kiçik**, **Orta** (başlanğıc), **Böyük** və ya **Tam ekran**: çertyojdakı xaçın və seçmə qutusunun ölçüsü. Daha böyük seçmə qutusu obyektləri bir az daha uzaqdan da seçir, bu sensorlu ekranda və ya çox incə çertyojda kömək edir.

**Tam ekran** xaçın iki xəttini çertyojun kənarından kənara çəkir, komanda işləmədikdə də, beləliklə bir şeylərin bütün görünüş boyunca düz olduğunu gözlə yoxlaya bilərsiniz. Görünüş bölündükdə xətlər yalnız işlədiyiniz pəncərədə qalır. Bu, AutoCAD-in {{cmd:CURSORSIZE}} 100 ilə eynidir: tam ekran üçün {{cmd:CURSORSIZE}} yazın və 100 daxil edin; kiçik rəqəm ən yaxın ölçünü seçir (5-dən aşağı Kiçik, 5-9 Orta, 10-99 Böyük).

## Yapışdırma nöqtəsi

{{key:Mod+V}} ({{cmd:PASTECLIP}}) ilə kopyalanmış obyektin kursordan hansı nöqtədə asıldığı, siz klikləyənə qədər:

- **Sol-aşağı künc** (başlanğıc): kopyalanmış obyektlərin sərhədlərinin sol-aşağı küncü, AutoCAD-də olduğu kimi.
- **Mərkəz**: onların sərhədlərinin ortası. Simvolu gözlə yerləşdirmək üçün əlverişlidir.

`COPYBASE` ilə edilən kopya həmişə seçdiyiniz baza nöqtəsindən asılır. {{ui:Yerində yapışdır}} ({{key:Mod+Shift+V}}) bu parametrə məhəl qoymur: orijinal koordinatları saxlayır. Bax: [Kopyalamaq, yapışdırmaq və təkrarlamaq](topic:copy-paste).

## Obyektlərə klikləmə

Heç bir komanda işləmədikdə çertyojda klik seçimlə nə edir:

- **Seçimə əlavə edir** (başlanğıc): hər klik və ya pəncərə obyektlər əlavə edir; {{key:Shift}}+klik, və ya {{key:Shift}}+pəncərə, onları çıxarır.
- **Seçimi əvəz edir**: klik və ya pəncərə yalnız onun seçdiyini seçir. {{key:Shift}}+klik obyekt əlavə edir, və ya artıq seçilmiş birini çıxarır; {{key:Shift}}+pəncərə əlavə edir.

Komanda daxilində `Obyektləri seçin:` sorğusunda kliklər həmişə əlavə edir ({{key:Shift}} çıxarır), bu parametr nə deyirsə də. Bax: [Obyektləri seçmək](topic:select-objects).

## Boş yerə klikləmə

Heç bir komanda işləmədikdə obyekt olmayan yerdə klik nə edir. Hər halda seçim pəncərəsi başlayır (ikinci klik onu bitirir).

- **Seçimi təmizləyir** (başlanğıc): seçilmiş olan buraxılır. Saxlamaq üçün klik edərkən {{key:Shift}} basın.
- **Seçimi saxlayır**: seçim qalır, digər CAD proqramlarında olduğu kimi; pəncərə ona əlavə edir. Seçimi təmizləmək üçün {{key:Esc}} basın.

## Sürüşdürməklə seçmə

Boş yerdə basıb sürüklədikdə nə çəkilir:

- **Lasso** (başlanğıc): sərbəst kontur. Əvvəl sağa hərəkət etsəniz tamamilə içində olanları, əvvəl sola hərəkət etsəniz toxunduqlarını seçir; sürüklədikcə {{key:Space}} pəncərə, kəsişmə və çəpər arasında keçirir.
- **Düzbucaqlı**: qutu, klik və ikinci klik onu çəkdiyi kimi.

{{cmd:LASSOMODE}} `1` və ya `0` eyni şeyi təyin edir. Bax: [Lasso ilə seçmə](topic:lasso-selection).

## Sürüşdürməklə kəsmək və uzatmaq

Boş yerdə basıb sürüklədikdə {{cmd:TRIM}} və {{cmd:EXTEND}} nə edir:

- **Yol** (başlanğıc): sərbəst yol; onun kəsdiyi hər parça kəsilir (və ya uzadılır).
- **Pəncərə**: qutu; ona toxunan hər parça kəsilir, `C` seçimi ilə olduğu kimi.

Bax: [Kəsmək və uzatmaq](topic:trim-and-extend).

## Alətlər panelinin yeri

{{ui:CadCraft}} › {{ui:Alətlər panelinin yeri}}: **Yuxarı** (başlanğıc, həmişə belə olub), **Aşağı**, **Sol** və ya **Sağ**. Sol və ya sağda alət qrupları pəncərədən hündür olduqda sürüşən bir sütunda yığılır və düymələr hər sətirdə iki və ya üç ədəd yerləşir. Seçim parametrlərlə birlikdə yadda saxlanılır, {{cmd:TOOLBARDOCK}} (`TBDOCK`) isə onu komanda sətrindən təyin edir. {{ui:Ümumi}} › {{ui:Tərtibatı sıfırla}} alət panelini yenidən yuxarıya qaytarır.

Menyu üslublarının panelləri alət panelinin içində yerləşir və onunla birlikdə hərəkət edir, lakin {{ui:Lent}} üslubu yuxarı və ya aşağı boyunca işləmək üçün hazırlanıb: yanda o, sürüşən dar bir sütun alır. Telefonda alət paneli telefon tərtibatının yerləşdirdiyi yerdə qalır.

## Alət sətirləri

Alətlərin çertyojun üstündə neçə sətir istifadə etməsi, CadCraft alət panelində və {{ui:Klassik çertyoj}} və {{ui:Lent}} üslublarında:

- **Pəncərəyə uyğunlaşdır** (başlanğıc): alətlər pəncərənin enində sarılır.
- **2 sətir**: ən çox iki sətir. Bu enlə alətlər iki sətirə və ya azına sığırsa, sadəcə sarılır; əks halda yan tərəfə sürüşən iki sətirdə düzülür.
- **1 sətir**: yan tərəfə sürüşən bir sətir, bu çertyoja ən çox yer verir.

{{key:Shift+Ctrl+F1}} üçü arasında keçir, {{cmd:TOOLBARROWS}} isə birini təyin edir. Düymələrin nə göstərdiyi (ikonlar və mətn, yalnız ikonlar və ya yalnız mətn) {{ui:Ümumi}} › {{ui:Alətlər paneli}} parametridir; {{key:Ctrl+F1}} onun arasında keçir, {{cmd:TOOLBAR}} isə onu təyin edir.

## Komanda sətri

Komanda sətri çertyojun altında yerləşdirilmiş qala bilər, əvvəlki kimi, və ya çertyojun üstündə üzə bilər, və bir sətir qədər nazik ola bilər.

- **Üzdürün.** Onu çertyoja doğru sol ucundakı tutacaqdan sürükləyin, və ya onun {{ui:Komanda sətri seçimləri}} menyusunda ({{ui:Çertyojun üzərində üzdür}}, sağ ucundakı üç nöqtə) seçin. Yerini dəyişmək üçün tutacağı yenidən sürükləyin; pəncərə ölçüsü dəyişdikdə yeri saxlanılır. Sağ kənarından sürükləyərək onu enli və ya dar edin. Yenidən yerləşdirmək üçün status panelinə buraxın, və ya {{ui:Aşağıda yerləşdir}} seçin.
- **Nazikləşdirin və ya hündürləşdirin.** Yuxarı kənarını sürükləyin: hər addım bir tarixçə sətridir. Sıfıra qədər endirildikdə o, **bir sətirli komanda sətri** olur: yalnız sorğu və yazdığınız, yeni mesaj bir müddət onun üzərində göstərilir. Yuxarı kənarda iki dəfə klikləmək bir sətir və əvvəlki hündürlük arasında keçir.
- **Tarixçə.** {{key:F2}} və ya komanda sətrindəki saat düyməsi ({{ui:Komanda tarixçəsi (F2)}}) bütün tarixçəni xəttin üstündə açır (üzən xətt pəncərənin yuxarısına yaxın olduqda isə altında). Yazmaq hələ də komanda sətrinə gedir; {{key:PageUp}} və {{key:PageDown}} tarixçəni sürüşdürür, {{key:Esc}}, {{key:F2}} və ya başqa yerdə klik onu bağlayır. F2-də sizin öz qısayolunuz bunu üstələyir.
- **Klaviaturadan.** Tutacaq düymədir: fokusda olduqda ox düymələri üzən komanda sətrini hərəkət etdirir ({{key:Shift}} ilə daha böyük addımlarla); {{key:Up}} yerləşdirilmiş xətti üzdürür, aşağı kənarda {{key:Down}} isə onu yerləşdirir. Yuxarı kənar ayırıcıdır: {{key:Up}} və {{key:Down}} sətir əlavə edir və ya çıxarır, {{key:Home}} bir sətir edir, {{key:End}} ən hündür. Ekran oxuyucuları hər mesajı eşidir, bir sətirli komanda sətrində də.

{{ui:CadCraft}} › {{ui:Komanda sətri}} eyni seçimlər verir: {{ui:Aşağıda yerləşdirilib}} və ya {{ui:Üzən}}, {{ui:Göstərilən tarixçə sətirləri}} (0-dan 12-yə) və {{ui:Standart hündürlük}}. {{cmd:COMMANDLINE}} (`CMDLINE`) onları komanda sətrindən təyin edir. Yer və hündürlük bu brauzerdə CadCraft üçün qalan tərtibatla birlikdə saxlanılır, buna görə yadda saxlanılmış iş mühiti onları da daşıyır; {{ui:Ümumi}} › {{ui:Tərtibatı sıfırla}} komanda sətrini yenidən standart hündürlükdə aşağıya yerləşdirir. Telefonda komanda sətri bir sətir tarixçə ilə aşağıda qalır; tarixçə düyməsi orada da işləyir.

Pəncərə qısa olduqda və tərtibat yoxlaması daha sıx tərtibat təklif etdikdə, onun {{ui:Bəli}} düyməsi, çertyoj alət panelləri keçdikdən sonra da qısa qalırsa, komanda sətrini bir sətirə də çevirir.

## Yuxarı sahə

{{ui:CadCraft}} › {{ui:Yuxarı sahə}}: **Standart** (başlanğıc) və ya **Yığcam**. Yığcam hər menyu üslubunda çertyojun üstündəki panelləri kiçik saxlayır: qrup adları və ikonların altındakı sözlər gedir (alətlərin ipucuları və ekran oxuyucuları yenə onlara malikdir) və düymələr daha sıxdır. [Alət sətirləri](topic:settings#toolbar-rows) ilə işləyir: Yığcam və **1 sətir** çertyoja ən çox yer verir. {{cmd:TOPAREA}} onu təyin edir.

## Künc göstəricisi

Çertyojun küncündə nə olduğu:

- **Avtomatik** (başlanğıc): {{ui:Model}} sekmesində ox işarəsi və {{ui:3D}} sekmesində görünüş kubu.
- **Ox işarəsi**: {{ui:Model}} sekmesinin sol-aşağısında X və Y işarəsi, və {{ui:3D}} sekmesində kiçik X, Y və Z işarəsi.
- **Görünüş kubu**: hər iki sekmenin sağ-yuxarısında kub. {{ui:Model}} sekmesində çertyojun yuxarıdan göründüyünü göstərir, və başqa üzə, kənara və ya künca klikləmək {{ui:3D}} sekmesini həmin yerdən baxaraq açır. 3D sekmesində o, görünüşlə birlikdə fırlanır: bir tərəfə baxmaq üçün klikləyin, orbitə çıxmaq üçün sürükləyin, ev düyməsi isə izometrik görünüşə qaytarır. Bax: [3D-də model](topic:3d-solids).
- **Heç biri**: künc boşdur.

Vərəqlərdə heç biri göstərilmir.

## Seçimin uzunluğu və sahəsi

- **Status panelində** (başlanğıc): obyektlər seçildikdə status paneli onların ümumi uzunluğunu və bağlı olanların ümumi sahəsini göstərir. Bax: [Seçimin cəmi](topic:properties-panel#totals-of-a-selection).
- **Gizlədilib**: status paneli onları göstərmir. Xassələr isə bir neçə obyekt üçün yenə göstərir.

## Şəbəkə, Ortoqonal və tutmalar

Bunlar dialoqda yoxdur: status panelindəki {{ui:Şəbəkə}}, {{ui:Ortoqonal}} və {{ui:Tutma}} düymələri (və ya {{key:F7}}, {{key:F8}}, {{key:F3}}) və onların yanındakı obyekt tutmaları siz onları tərk etdikdə yadda qalır. Bax: [Obyektlərdəki nöqtələrə tutmaq](topic:object-snaps).
