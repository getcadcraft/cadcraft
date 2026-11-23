---
title: CadCraft parametrləri
summary: Çertyoj tətbiqinə aid parametrlər: kursorun ölçüsü, yapışdırılmış surətin kursordan harada asıldığı, klikin seçimə nə etdiyi, alətlər panelinin neçə sətir istifadə etdiyi, komanda sətrinin harada və nə hündürlükdə olduğu, yığcam yuxarı sahə və künc göstəricisi.
keywords: komanda sətri, üzən komanda sətri, üzdür, yerləşdir, bir sətir, f2, komanda tarixçəsi, commandline, cmdline, toparea, yuxarı sahə, yığcam, cursorsize, tam ekran kursor, kənardan kənara, alət sıraları, alət göstərişi, ctrl f1, parametrlər, seçimlər, künc göstəricisi, görünüş kubu, ox nişanı, UCS nişanı, kursor, xaç, seçim qutusu, yapışdırma nöqtəsi, baza nöqtəsi, obyektlərə klik, seçim, pickadd, shift, sıfırla
from: ae1a81db
---

Parametrləri {{key:Mod+,}} ilə və ya tətbiq panelindəki çarxla açın. Birinci sekmə, {{ui:CadCraft}}, bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} bütün ailə tətbiqlərinin paylaşdığı parametrləri saxlayır (mövzu, panel mətn ölçüsü və enləri, alət panelinin görünüşü və sırası). CadCraft parametrləri yalnız tətbiqdə mövcuddur: onları burada dəyişirsiniz və bu brauzer yadda saxlayır. {{ui:CadCraft parametrlərini sıfırla}} hamısını başlanğıca qaytarır.

## Kursor

**Kiçik**, **Orta** (başlanğıc), **Böyük** və ya **Tam ekran**: çertyojdakı xaçın və seçim qutusunun ölçüsü. Daha böyük seçim qutusu obyektləri bir az uzaqdan da seçir, bu sensorlu ekranda və ya çox incə çertyojda kömək edir.

**Tam ekran** xaçın iki xəttini çertyoj boyunca kənardan kənara göstərir, hətta heç bir komanda işləmədikdə də, beləliklə gözlə bütün görünüş boyunca iki şeyin düzləşdiyini yoxlaya bilərsiniz. Görünüş bölünəndə xətlər işlədiyiniz pəncərədə qalır. AutoCAD-in {{cmd:CURSORSIZE}} 100 ilə eynidir: tam ekran üçün {{cmd:CURSORSIZE}} yazın və 100; kiçik ədəd ən yaxın ölçünü seçir (5-dən aşağı Kiçik, 5-dən 9-a qədər Orta, 10-dan 99-a qədər Böyük).

## Yapışdırma nöqtəsi

{{key:Mod+V}} ({{cmd:PASTECLIP}}) sonra yapışdırılmış surətin kursordan necə asıldığı, klik edənə qədər:

- **Sol aşağı künc** (başlanğıc): kopyalanmış obyektlərin ölçü sərhədlərinin sol aşağı küncü, AutoCAD-də olduğu kimi.
- **Mərkəz**: onların ölçü sərhədlərinin ortası. Simvolu gözlə yerləşdirmək üçün rahatdır.

`COPYBASE` ilə edilən surət həmişə seçdiyiniz baza nöqtəsindən asılır. {{ui:Yerində yapışdır}} ({{key:Mod+Shift+V}}) bu parametri nəzərə almır: orijinal koordinatları saxlayır. Bax [Kopyalama, yapışdırma və dublikat](topic:copy-paste).

## Obyektlərə klik

Heç bir komanda işləmədikdə çertyojda klik seçimə nə edir:

- **Seçimə əlavə edir** (başlanğıc): hər klik və ya pəncərə obyekt əlavə edir; {{key:Shift}}+klik və ya {{key:Shift}}+pəncərə onları çıxarır.
- **Seçimi əvəz edir**: klik və ya pəncərə yalnız seçdiyini seçir. {{key:Shift}}+klik obyekt əlavə edir, ya da artıq seçilmiş birini çıxarır; {{key:Shift}}+pəncərə əlavə edir.

Komandanın daxilində `Obyektləri seçin:` sorğusunda kliklər həmişə əlavə edir ({{key:Shift}} çıxarır), bu parametr nə deyirsə desin. Bax [Obyektləri seçin](topic:select-objects).

## Boş yerə klik

Heç bir komanda işləmədikdə obyekt olmayan yerə klik nə edir. Hər iki halda seçim pəncərəsi başlayır (ikinci klik onu bitirir).

- **Seçimi təmizləyir** (başlanğıc): seçilmiş hər şey buraxılır. Onu saxlamaq üçün klik edərkən {{key:Shift}} saxlayın.
- **Seçimi saxlayır**: seçim qalır, digər gön proqramlarda olduğu kimi; pəncərə ona əlavə olur. Seçimi təmizləmək üçün {{key:Esc}} basın.

## Seçmək üçün sürükləmək

Boş yerdə basıb sürüklədikdə nə çəkilir:

- **Lasso** (başlanğıc): sərbəst kontur. Əvvəl sağa sürükləsəniz, tamamilə içində olanı seçir, əvvəl sola sürükləsəniz toxunduğunu seçir; sürüklərkən {{key:Space}} pəncərə, kəsişmə və hasar arasında keçir.
- **Düzbucaqlı**: qutu, klik və ikinci klik onu çəkdiyi kimi.

{{cmd:LASSOMODE}} `1` və ya `0` eyni şeyi təyin edir. Bax [Lasso ilə seçmə](topic:lasso-selection).

## Kəsmək və uzatmaq üçün sürükləmək

Boş yerdə basıb sürüklədikdə {{cmd:TRIM}} və {{cmd:EXTEND}}-də nə olur:

- **Yol** (başlanğıc): sərbəst yol; onun kəsdiyi hər parça kəsilir (və ya uzadılır).
- **Pəncərə**: qutu; ona toxunan hər parça kəsilir, `C` seçimi kimi.

Bax [Kəsmək və uzatmaq](topic:trim-and-extend).

## Alət panelinin yeri

{{ui:CadCraft}} › {{ui:Alətlər panelinin yeri}}: **Yuxarı** (başlanğıc, həmişə belə olub), **Aşağı**, **Sol** və ya **Sağ**. Solda və ya sağda alət qrupları pəncərə hündürlüyündən uzun olduqda sürüşən bir sütunda düzülür və düymələr sətirə iki-üç ədəd düşür. Seçim parametrlərinizlə saxlanılır, {{cmd:TOOLBARDOCK}} (`TBDOCK`) onu komanda sətrindən təyin edir. {{ui:Ümumi}} › {{ui:Tərtibatı sıfırla}} alət panelini yenidən yuxarıya qaytarır.

Menyu üslublarının zolaqları alət panelinin içində durur və onunla birlikdə hərəkət edir, lakin {{ui:Lent}} üslubu yuxarı və ya aşağı boyunca işləmək üçün düzəldilib: kənarda dar və sürüşən sütun alır. Telefonda alət paneli telefon tərtibatının yerləşdirdiyi yerdə qalır.

## Alət sıraları

Yuxarıda alətlərin neçə sətir istifadə etdiyi, CadCraft alət panelində və {{ui:Klassik çertyoj}} və {{ui:Lent}} üslublarında:

- **Pəncərəyə sığdır** (başlanğıc): alətlər pəncərənin enində bükülür.
- **2 sətir**: ən çox iki sətir. Bu enlə alətlər iki və ya daha az sətirə bükülürsə, sadəcə bükülür; əks halda yan-yana sürüşən iki sətirdə durur.
- **1 sətir**: yan-yana sürüşən bir sətir, bu da çertyojda ən çox yer buraxır.

{{key:Shift+Ctrl+F1}} üçü arasında keçir, {{cmd:TOOLBARROWS}} birini təyin edir. Düymələrin nə göstərdiyi (ikonlar və mətn, yalnız ikonlar və ya yalnız mətn) {{ui:Ümumi}} › {{ui:Alət paneli}} parametridir; {{key:Ctrl+F1}} onun arasında keçir, {{cmd:TOOLBAR}} birini təyin edir.

## Komanda sətri

Komanda sətri çertyojun altında, əvvəlki kimi, yerləşə bilər, ya da üzərində üzə bilər, və bir sətir qədər nazik ola bilər.

- **Üzdürün.** Sol ucundakı tutacağı çertyojun içinə sürükləyin, ya da {{ui:Komanda sətri seçimləri}} menyusunda (sağ ucundakı üç nöqtə) {{ui:Çertyojun üzərində üzdür}} seçin. Yenidən tutacağı sürükləyərək köçürün; pəncərənin ölçüsü dəyişəndə yeri saxlanılır. Sağ kənarını sürükləyərək enini dəyişin. Yenidən yerləşdirmək üçün onu status sətrinə buraxın, ya da {{ui:Aşağıda yerləşdir}} seçin.
- **Nazikləşdirin və ya hündürləşdirin.** Yuxarı kənarını sürükləyin: hər addım tarixçənin bir sətiridir. Sıfıra qədər bir sətirlik komanda sətri olur: yalnız sorğu və yazdığınız, yeni mesaj bir an onun üstündə görünür. Yuxarı kənarda ikiklik bir sətir ilə əvvəlki hündürlük arasında keçir.
- **Tarixçə.** {{key:F2}}, ya da komanda sətrindəki saat düyməsi ({{ui:Komanda tarixçəsi (F2)}}) bütün tarixçəni xəttin üstündə açır (xətt pəncərənin yuxarısına yaxın üzəndə altda). Yazmaq hələ də komanda sətrinə gedir; {{key:PageUp}} və {{key:PageDown}} tarixçəni sürüşdürür, {{key:Esc}}, {{key:F2}} və ya başqa yerə klik onu bağlayır. {{key:F2}}-də sizin öz düyməniz bunu üstələyir.
- **Klaviaturadan.** Tutacaq düymədir: fokusda olduqda ox düymələri üzən komanda sətrini hərəkət etdirir ({{key:Shift}} ilə daha böyük addımlarla); {{key:Up}} aşağıda yerləşən sətri üzdürür, aşağı kənarda {{key:Down}} onu yerləşdirir. Yuxarı kənar ayırıcıdır: {{key:Up}} və {{key:Down}} sətir əlavə edir və ya çıxarır, {{key:Home}} onu bir sətir edir, {{key:End}} ən hündürünü. Ekran oxuyucuları hər mesajı, bir sətirlik komanda sətrində də eşidir.

{{ui:CadCraft}} › {{ui:Komanda sətri}}-də eyni seçimlər var: {{ui:Aşağıda yerləşdirilib}} və ya {{ui:Üzən}}, {{ui:Göstərilən tarixçə sətirləri}} (0-dan 12-yə) və {{ui:Standart hündürlük}}. {{cmd:COMMANDLINE}} (`CMDLINE`) onları komanda sətrindən təyin edir. Yer və hündürlük bu brauzerdə CadCraft üçün tərtibatın qalanı ilə saxlanılır, beləliklə yadda saxlanılmış iş mühiti onları daşıyır; {{ui:Ümumi}} › {{ui:Tərtibatı sıfırla}} komanda sətrini standart hündürlükdə yenidən yerləşdirir. Telefonda komanda sətri bir sətir tarixçə ilə yerləşmiş qalır; tarixçə düyməsi orada da işləyir.

{{ui:CadCraft}} › {{ui:Seçim hərfləri}} komanda seçimləri üçün seçdiyiniz hərfləri saxlayır: {{ui:Redaktə et…}} faylı açır, {{ui:İdxal et…}} onu seçdiyiniz faylla əvəz edir və {{ui:İxrac et}} saxlayır. Bax [Komanda seçimlərinə öz hərflərinizi verin](topic:option-letters).

Pəncərə qısa olduqda və tərtibat yoxlaması daha sıx tərtibat təklif etdikdə, onun {{ui:Bəli}} düyməsi də komanda sətrini bir sətirə çevirir, əgər alət panellərindən sonra çertyoj hələ də qısadırsa.

## Yuxarı sahə

{{ui:CadCraft}} › {{ui:Yuxarı sahə}}: **Standart** (başlanğıc) və ya **Yığcam**. Yığcam çertyojun üstündəki zolaqları hər menyu üslubunda kiçik saxlayır: qrup adları və ikonların altındakı sözlər gedir (alətlər məsləhətləri və ekran oxuyucuları yenə də onlara malikdir) və düymələr daha sıxdır. [Alət sıraları](topic:settings#toolbar-rows) ilə işləyir: Yığcam və **1 sətir** çertyojda ən çox yer buraxır. {{cmd:TOPAREA}} onu təyin edir.

## Künc göstəricisi

Çertyojun küncündə nə durur:

- **Avtomatik** (başlanğıc): {{ui:Model}} sekmesində ox nişanı və {{ui:3D}} sekmesində görünüş kubu.
- **Ox nişanı**: {{ui:Model}} sekmesinin sol aşağısında X və Y işarəsi, {{ui:3D}} sekmesində kiçik X, Y və Z işarəsi.
- **Görünüş kubu**: hər iki sekmenin sağ yuxarısında kub. {{ui:Model}} sekmesində çertyoju yuxarıdan göstərir və başqa üzə, kənara və ya künca klik etmək {{ui:3D}} sekmesini həmin tərəfdən baxan vəziyyətdə açır. {{ui:3D}} sekmesində görünüşlə birlikdə fırlanır: tərəfə baxmaq üçün klik edin, orbit üçün sürükləyin, ev işarəsi izometrik görünüşə qaytarır. Bax [3D modeldə](topic:3d-solids).
- **Heç biri**: küncdə heç nə yoxdur.

Vərəqlər heç birini göstərmir.

## Seçimin uzunluğu və sahəsi

- **Status sətrində** (başlanğıc): obyektlər seçilibsə, status sətri onların ümumi uzunluğunu və bağlı olanların ümumi sahəsini göstərir. Bax [Seçimin cəmi](topic:properties-panel#totals-of-a-selection).
- **Gizli**: status sətri onları buraxır. Xassələr bir neçə obyekt üçün yenə də göstərir.

## Şəbəkə, Ortoqonal və tutmalar

Bunlar dialoqda deyil: status sətrindəki {{ui:Şəbəkə}}, {{ui:Ortoqonal}} və {{ui:Tutma}} düymələri (və ya {{key:F7}}, {{key:F8}}, {{key:F3}}) və onların yanındakı obyekt tutmaları siyahısı, siz onları tərk edəndə yadda qalır. Bax [Obyektlər üzərindəki nöqtələrə tutma](topic:object-snaps).
