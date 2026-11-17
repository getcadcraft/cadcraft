---
title: Klaviatura və siçan
summary: CadCraft çertyoj proqramında hər düymə, siçan əməliyyatı və əmr sətrinin düyməsi, kodun onları qəbul etdiyi kimi.
keywords: klaviatura, qısayollar, düymələr, siçan, çarx, sürüşdür, miqyas, sağ klik, orta düymə, f3, f7, f8, ctrl, əmr düyməsi, qısa yollar, kopyala, kəs, yapışdır, dublikat, mübadilə buferi, hamısını seç
from: a2608a29
---

Qısayollar kompüteriniz üçün göstərilir. Mac-də hər {{key:Mod}} qısayolu Command düyməsindən istifadə edir, Control düyməsi də işləyir. Düymələrin necə yazıldığı və Mac-də F-düymələrindən necə istifadə olunduğu [Düymələr, siçanlar və trekpedlər](common:keys) bölməsindədir.

## Əmrləri yazmaq

| Düymə | Nə edir |
|---|---|
| İstənilən hərf, rəqəm və ya simvol | Siçan harada olursa olsun, panelin qutusunda kursor olmadıqca əmr sətrinə gedir |
| {{key:Enter}} | Yazılanı göndərir. Boş sorğuda: son əmri təkrarlayır, əmri bitirir, seçimi tamamlayır, ya da `<…>` içindəki defoltu qəbul edir |
| {{key:Space}} | {{key:Enter}} ilə eynidir, yalnız CadCraft mətn (mətn, blok adları, ölçü mətni) soruşanda — orada boşluq yazır |
| {{key:Esc}} | Əmri ləğv edir. Əmr işləmədikdə: tutacağın köçürülməsini və ya seçim qutusunu ləğv edir, sonra seçimi təmizləyir |
| {{key:Tab}} | Əmr sətrinin sağında göstərilən təklif olunmuş əmri qəbul edir. Heç nə yazılmayıb və siçan üst-üstə düşən obyektlərin üzərindədirsə: oradakı növbəti obyekti işıqlandırır (seçmək üçün klikləyin) |
| {{key:Up}} {{key:Down}} | Əvvəl yazdığınız sətirlər arasında keçir (son 100) |

## Çəkmə və redaktə

| Düymə | Nə edir |
|---|---|
| {{key:Mod+Z}} | Son əmri geri qaytarır |
| {{key:Mod+Y}} və ya {{key:Mod+Shift+Z}} | Təkrarlayır |
| {{key:Mod+A}} | Açıq sekmədə redaktə edə biləcəyiniz hər obyekti seçir ({{cmd:SELECTALL}}). Əmr sətrinə nə isə yazmısınızsa, onu seçir |
| {{key:Delete}} | Seçilmiş obyektləri silir ({{cmd:ERASE}}), əmr sətrinə nəsə yazmamısınızsa |
| {{key:Backspace}} | Əmr sətrinin kursoru yoxdursa, seçilmiş obyektləri silir; əmr sətrində yazdıqlarınızı silir |
| {{key:Esc}} | Əmr işləmədikdə: seçimi təmizləyir ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Çertyojun formatında (DWG və ya DXF) nüsxə saxlayır |
| {{key:Mod+Shift+S}} | Fərqli saxla: DWG və ya DXF seçin, sonra nüsxə saxlayın |
| {{key:Mod+O}} | DWG və ya DXF açır |
| {{key:Mod+P}} | PDF-ə çap edir |

Geri qaytarma, təkrarlama, hamısını seçmə və çap əmr işləyərkən heç nə etmir: əvvəlcə {{key:Esc}} basın.

## Kopyalama, kəsmə və yapışdırma

| Düymə | Nə edir |
|---|---|
| {{key:Mod+C}} | Seçilmişi mübadilə buferinə kopyalayır ({{cmd:COPYCLIP}}). Heç nə seçilməyibsə: CadCraft obyektlər soruşur |
| {{key:Mod+X}} | Kəsmə: seçilmişi kopyalayır, sonra silir ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Yapışdırma: kopya kursoru izləyir; yerləşdirmək üçün klikləyin və ya nöqtə yazın ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Yerində yapışdırma: kopyalandığı koordinatlarda ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dublikat: seçilmişin kopyası kursorla hərəkət edir; yerləşdirmək üçün klikləyin, {{key:Esc}} heç nə qoymur ({{cmd:DUPLICATE}}) |

Eyni əməliyyatlar alətlər panelinin {{ui:Redaktə}} qrupunda ({{ui:Kopyala}}, {{ui:Yapışdır}}) və {{ui:Daha çox}} menyusundadır. Başqa əmr işləyəndə əvvəlcə onu bitirin və ya {{key:Esc}} basın; kopya kursoru izləyərkən yenidən {{key:Mod+V}} və ya {{key:Mod+D}} basmaq yenidən başlayır. Əmr sətrinə nəsə yazdıqda və ya əmr mətn soruşduqda bu düymələr həmin mətni kopyalayır, kəsir və yapışdırır. Bax: [Kopyalama, yapışdırma və dublikat](topic:copy-paste).

## Keçidlər

| Düymə | Keçid | Status sətrinin düyməsi |
|---|---|---|
| {{key:F3}} | Obyekt tutmaları açıq və ya söndürülü | {{ui:Tutma}} |
| {{key:F7}} | Şəbəkə açıq və ya söndürülü | {{ui:Şəbəkə}} |
| {{key:F8}} | Ortoqonal açıq və ya söndürülü | {{ui:Ortoqonal}} |
| {{key:F10}} | Polyar izləmə açıq və ya söndürülü | {{ui:Polyar}} |
| {{key:F11}} | Obyekt tutma izləməsi açıq və ya söndürülü | {{ui:İzlə}} |
| {{key:F12}} | Dinamik giriş açıq və ya söndürülü | {{ui:Dinamik}} |

:::mac
Mac-də F3, F7 və F8 adətən Mission Control və media düymələridir. Onlarla birlikdə **fn** saxlayın, ya da Sistem Parametrlərində standart funksiya düymələrini yandırın, [Düymələr, siçanlar və trekpedlər](common:keys) bölməsində olduğu kimi. Status sətrinin düymələri həmişə işləyir.
:::

:::firefox
Firefox-da F7 mətn kursorunun yoxlanmasını (caret browsing) da təklif edə bilər. **Xeyr** seçin, əgər sorğu təkrarlanırsa, {{ui:Şəbəkə}} düyməsindən istifadə edin.
:::

## Yardım

| Düymə | Nə edir |
|---|---|
| {{key:F1}} | Bu yardımı çertyojun yanında açır və ya bağlayır. Əmr işləyərkən də işləyir və heç vaxt əmr sətrinə çatmır. |
| {{key:Esc}} | Kursor yardım panelində olduqda: axtarışı təmizləyir və ya paneli bağlayır |

Yuxarıdakı panelin {{ui:Kömək}} düyməsi {{key:F1}} ilə eyni işi görür. Yardımın axtarış qutusuna yazarkən heç nə əmr sətrinə getmir. Düymələri yenidən CadCraft-a vermək üçün çertyojda klikləyin; panel yanında açıq qalır.

:::mac
Mac klaviaturasında **fn** saxlayın və F1 basın, ya da {{ui:Kömək}} klikləyin.
:::

## Ekran

| Düymə | Nə edir |
|---|---|
| {{key:Ctrl+Shift+F}} | Normal, tam ekran və panelləri gizlədilmiş tam ekran arasında dəyişir. Bu hər kompüterdə, Mac daxil olmaqla, Control düyməsindən istifadə edir. |
| {{key:Left}} {{key:Right}} | Çertyojun altındakı sekme fokuslanıbsa: əvvəlki və ya növbəti sekme |

Tam ekranda brauzer ilk {{key:Esc}} ilə tam ekrandan çıxa bilər. Əmri ləğv etmək üçün yenidən {{key:Esc}} basın.

## Dialoqlar

| Düymə | Nə edir |
|---|---|
| {{key:Esc}} | Dialoqu bağlayır ({{ui:PDF-ə çap et}}, ya da "Yadda saxlanmamış dəyişikliklər" kimi sual; burada {{ui:Ləğv et}} mənasını verir) |
| {{key:Tab}} | Dialoqun parametrləri və düymələri arasında keçir |

Dialoq açıq olduqda çertyojun düymələri söndürülür.

## Panel sahələri

Sağ və ya sol paneldəki qutuda:

| Düymə | Nə edir |
|---|---|
| {{key:Enter}} | Dəyəri tətbiq edir və qutudan çıxır |
| {{key:Esc}} | Köhnə dəyəri qaytarır və qutudan çıxır |
| {{key:Tab}} | Tətbiq edir və növbəti qutuya keçir |

Qutuda kursor olduqda hərflər ora yazılır, əmr sətrinə yox.

## Siçan

| Əməliyyat | Nə edir |
|---|---|
| Klik | Əmr nöqtə soruşanda nöqtə seçir; obyekt soruşanda obyekt seçir; əks halda obyekti və ya tutacağı seçir |
| Shift+klik | Seçilmiş obyekti seçimdən çıxarır ({{ui:Obyektlər üzərində klik}} [Parametrlər](topic:settings) bölməsində {{ui:Seçimi əvəz edir}} olaraq təyin olunubsa: əlavə edir). Nöqtə seçərkən: həmin klik üçün obyekt tutmalarını nəzərə almır |
| Boş yerə klik, sonra yenidən klik | Seçim qutusu: soldan sağa pəncərədir, sağdan sola kəsişmədir |
| Boş yerdə sürükləmə | Lasso: əvvəl sağa hərəkət pəncərədir, əvvəl sola kəsişmədir; sürüklərkən {{key:Space}} pəncərə, kəsişmə və hasar arasında dəyişir; {{key:Esc}} onu buraxır (LASSOMODE 0 və ya Parametrlər onu yenidən düzbucaqlı edir) |
| TRIM və ya EXTEND-də parçaların üzərindən sürükləmə | Yolun keçdiyi hər parçanı kəsir (və ya uzadır); digərini üçün {{key:Shift}} saxlayın |
| Tutacağı sürükləmə | Tutacağı hərəkət etdirir (və ya tutacağa klikləyin, sonra yerinə klikləyin) |
| Mətni iki dəfə klikləmə | Onu seçir və kursoru sağ paneldəki {{ui:Mətn}} qutusuna qoyur |
| Sağ klik | {{key:Enter}}. Tutacağın köçürülməsi və ya seçim qutusu zamanı: onu ləğv edir |
| Sağ düymə ilə sürükləmə | Sürüşdürür |
| Çarx | Çarxla kursor ətrafında yaxınlaşdırır və uzaqlaşdırır |
| Çarxla sürükləmə (orta düymə) | Sürüşdürür |
| Çarxı iki dəfə klikləmə | Bütün çertyoja yaxınlaşdırır (sərhədlər) |
| DWG və ya DXF-i çertyojun üzərinə atmaq | Onu açır |

Trekpad və ya toxunma ekranında bax: [Siçan, trekpad və toxunma](topic:mouse-trackpad-touch).

## Brauzerin saxladığı düymələr

{{key:Mod+N}}, {{key:Mod+W}} və {{key:Mod+T}} həmişə brauzerə məxsusdur. CadCraft onları istifadə etmir: yeni çertyoj üçün {{ui:Yeni}} düyməsindən və ya `NEW` yazın. CadCraft-ın mübadilə buferi öz buferidir: {{key:Mod+C}} və {{key:Mod+V}} obyektləri CadCraft çertyojları və sekmələri arasında kopyalayır, digər proqramlarla yox.

:::mac
Əgər {{key:Mod+Y}} təkrarlamaq əvəzinə brauzerinizin tarixçəsini açırsa, {{key:Mod+Shift+Z}} və ya {{ui:Təkrarla}} düyməsindən istifadə edin.
:::

## Move harada yerləşir

Köçür əmri `MOVE`-dur (düymə {{key:M}}): obyektləri seçin, sonra baza nöqtəsini və ikinci nöqtəni və ya yazılmış məsafəni. `ALIGN` və `DISTRIBUTE` də var. BimCraft eyni işlər üçün eyni adlardan istifadə edir, lakin onun {{key:M}} düyməsi Ölçmədir (Measure): onun Köçür əmri {{key:Shift+M}} düyməsindədir.
