---
title: Sənədlər və baxışlar (depo)
summary: Real bir iş üzrə addım-addım bələdçi: layihə qovluğunu nəzarət altına alın, çertyojı götürün, dəyişin, şərhlə qaytarın, nəzərdən keçirməyə göndərin, təsdiq edin və buraxın, tarixçəyə və istifadə yerinə baxın, ikinci şəxsin faylı tutarkən nə gördüyünü və bulud qovluqları ilə necə işlədiyini öyrənin.
keywords: depo, sənədlər, bələdçi, dərslik, götür, qaytar, baxış, buraxılış, təsdiq, kilid, tarixçə, istifadə yeri, bulud qovluğu, layihə qovluğu, sənəd idarəetməsi, pdm, iki nəfər, paylaşılan qovluq
from: 3829528d
---

## Nə edəcəksiniz

Siz Ana-sınız, həmkarınız Ben ilə **Riverside Clinic** üzərində işləyirsiniz. Layihənin çertyojları ikiniz də çatdığınız bir qovluqda saxlanılır (paylaşılan disk, sinxronlaşdırılmış qovluq və ya bulud qovluğu). Sonda bir fayl ilk surətindən buraxılmış **A** baxışına qədər gedəcək, yenidən **B.1** kimi dəyişəcək, kimin nə etdiyini görəcəksiniz və faylı tutanda Ben-in nə gördüyünü görəcəksiniz.

Hər şey fayllarınızın yanında gizli `.ccvault` qovluğunda saxlanılır: server yoxdur, heç nə yüklənmir (bulud qovluğu istisnadır, son addıma baxın). Hər düymə və qayda haqqında bir yerdə məlumat üçün tətbiqinizdə olan *Sənədlər: götürmə, baxışlar və buraxılış* mövzusuna baxın.

## 1. Layihə qovluğunu qurun

1. **Görünüş** sekmesinin **Daha çox** menyusunda {{ui:Sənədlər…}} seçin, ya da `DOCUMENTS` (və ya `DOCS`) yazın və {{key:Enter}} basın.
2. {{ui:Layihə qovluğunu seçin}} düyməsini basın və layihənin çertyojlarını saxlayan qovluğu seçin. (Layihə qovluqları Studio-da və qovluq aça bilən brauzerlərdə, məsələn Chrome və Edge-də işləyir. Digər brauzerlərdə panel bunu bildirir.)
3. **Siz:** yanında {{ui:Dəyiş}} düyməsini basın və adınızı yazın, `Ana` (soruşursa, həm də bu kompüterin adını). Panel indi *Siz: Ana on* və kompüterinizi göstərir. Adınız etdiyiniz hər şeyə yazılır.
4. {{ui:Bu qovluqda depo başlat}} düyməsini basın və layihənin adını yazın, `Riverside clinic`. Panel *Riverside clinic üçün depo başladıldı.* yazır.

## 2. Faylı nəzarət altına alın

1. **Depoda olmayan fayllar** bölməsini açın və `plans/A-101.dxf` yanında {{ui:Əlavə et (A)}} seçin.
2. O, **Depodakı fayllar** altında **A.1** baxışında, vəziyyəti **İş davam edir** ilə görünür. A.1 onun ilk surətidir; depo hər baxışın bir surətini saxlayır.

## 3. Götürün, dəyişin, qaytarın

1. `plans/A-101.dxf` yanında {{ui:Aç}} seçin. Çertyoj CadCraft-da açılır və panel bağlanır ki, onu görəsiniz. Panel hələ də bir komanda uzaqdadır: `DOCUMENTS`.
2. Paneli yenidən açın və {{ui:Götür}} seçin. Sətir indi **Sizə götürülüb** yazır. `.ccvault/locks` daxilində kilid faylı yaradılıb; siz qaytarana qədər heç kim bu faylı götürə bilməz.
3. Nəsə çəkin: xətt əlavə edin, divarı köçürün. Çertyoj sizə götürülməyibsə, heç nə depo faylının üzərinə saxlana bilməz; Fərqli saxla həmişə öz surətiniz üçün işləyir.
4. Paneli açın, {{ui:Qovluğa qaytar}} seçin və nəyin dəyişdiyini yazın (`Moved the door`). Panel *A.2 kimi qaytarıldı* yazır. Layihə qovluğundakı fayl indi açıq olan çertyojdur və kilid yoxdur. Dəyişiklik olmadan qaytarmaq baxışı saxlayır.

Fikriniz dəyişsə, {{ui:Götürməni ləğv et}} faylı yeni baxış olmadan geri qaytarır.

## 4. Nəzərdən keçirin və buraxın

1. {{ui:Nəzərdən keçirməyə göndər}} seçin. Vəziyyət **Nəzərdən keçirilir** olur və fayl yalnız oxunandır.
2. Təsdiq etməzdən əvvəl {{ui:Layihə parametrləri}} seçin, kimin təsdiq edə biləcəyini sadalayın (hər sətirdə bir ad), məsələn `Ben` və `Carla`, və təsdiq edənin müəllifdən başqa biri olmalı qaydasını işarələyin. {{ui:Parametrləri saxla}} seçin. İndi depo özü başqasını rədd edir.
3. Ben (və ya Carla) {{ui:Təsdiq et}} seçir və təsdiq edənin adını yazır. Vəziyyət **Buraxılıb** olur, baxış **A** olur, *təsdiq etdi* və adla. Buraxılmış fayl yalnız oxunandır. {{ui:Geri göndər}} səbəblə onu İş davam edir vəziyyətinə qaytarardı.

Təsdiq edənin adı paneldə yazılan addır; kimin təsdiq etdiyinin qeydidir, şəxsiyyətin sübutu deyil.

## 5. Yeni baxış

1. Buraxılmış faylda {{ui:Yeni baxış}} seçin. Onu növbəti hərf üçün götürürsünüz.
2. Dəyişdirin, sonra {{ui:Qovluğa qaytar}}. Baxış **B.1**, İş davam edir olur. Eyni qayda ilə buraxın, o, **B** olur. İlk qaytarmadan əvvəl {{ui:Götürməni ləğv et}} onu **A**-da saxlayır.

Baxış hərfləri A, B … Z, AA, AB ardıcıllığı ilə gedir. Standartınız bəzi hərfləri buraxırsa, layihə parametri *ASME Y14.35 ardıcıllığından istifadə et* növbəti baxışlar üçün I, O, Q, S, X və Z-ni buraxır.

## 6. Nə baş verdiyinə baxın

Təfərrüatları açmaq üçün faylın adını seçin:

- **{{ui:Tarixçə}}**: hər hadisə, ən yenisi birinci, kim, hansı kompüterdə və nə vaxt: Ana tərəfindən *A.2 kimi qaytarıldı*, Ben tərəfindən *Buraxıldı* və s.
- **{{ui:Baxışlar}}**: baxış cədvəli. {{ui:Nüsxəni aç}} baxışı depo faylının üzərinə yaza bilməyən sadə surət kimi açır; {{ui:Bununla müqayisə et}} onu əvvəlki və ya başqa baxışla müqayisədə nəyin əlavə olunduğunu, silindiyini və dəyişdiyini sadalayır.
- **{{ui:İstifadə edir}}**: onun əlaqələndirdiyi çertyojlar (xref-lər).
- **{{ui:Kim istifadə edir}}**: bu çertyoja əlaqələnən depodakı hər digər çertyoju sadalayır: baza planı dəyişdirin və hansı vərəqləri yoxlamalı olduğunuzu bilirsiniz.

## Vərəqdə baxış

Çertyoj açıqkən (və içində layout varsa) {{ui:Revizİya bloku}} seçin: buraxılmış baxışların cədvəli vərəqin yuxarı sağ küncündə çəkilir. {{ui:Başlıq bloklarını doldur}} seçin ki, `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` və ya `APPROVED_BY` etiketli başlıq atributlarını faylın baxışı, vəziyyəti, tarixi və təsdiq edəni ilə doldursun. Növbəti buraxılışı təsdiq etdikdə, baxış bloku yenilənir.

## 7. Faylı siz tutduqda Ben nə görür

İndi faylı yenidən götürün və Ben-dən öz kompüterində eyni layihə qovluğunu açmasını və paneli açmasını xahiş edin. Faylın sətrində o, **Ana tərəfindən götürülüb** (sizin kompüter) **vaxtdan bəri** görəcək və {{ui:Götür}} düyməsi olmayacaq. Yenə də cəhd etsə depo rədd edir: kilid sistemin iki dəfə yaratmayacağı bir fayldır, ona görə iki nəfər eyni anda belə, qovluq Studio-da diskdə olduqda faylı tuta bilməz. (Brauzerdə qovluq yalnız ən yaxşı səyə icazə verir, panel bunu **Qovluq** altında bildirir.)

Ana uzaqdadırsa və Ben fayla ehtiyac duyursa, {{ui:Götürməni poz}} onu azad edir. O, səbəb yazmalıdır; bu, kimin götürməsi olduğu ilə birlikdə jurnala düşür. Layihədə adminlər siyahıda olduqda yalnız onlar edə bilər. Köhnəlmə həddindən (standart 14 gün) qabaq olan götürmə *çoxdan* kimi işarələnir. Pozulduqdan sonra Ana-nın gecikmiş qaytarması rədd edilir, beləliklə ikiniz bir-birinizin üzərinə yaza bilməzsiniz.

## 8. Bulud qovluqları

Bulud qovluğu komandanızın bulud yaddaşında saxlanılan layihə qovluğudur, ona görə komandaya paylaşılan disk lazım deyil. Studio-da, CadCraft hesabınıza daxil olmuş halda, panel {{ui:Layihə qovluğunu seçin}} yanında {{ui:Bulud qovluğunu açın}} göstərir. Onu seçin və qovluğu seçin, *iş sahəsi / qovluq* kimi sadalanır. Əvvəlcə iş sahəsinin sahibi qovluğu yaradır və komandanın bulud yaddaşı aktiv olmalıdır. Yuxarıdakıların hamısı eyni işləyir; kilidi server yaradır, bu da insanlar arasında ciddidir. Daxil olmamısınızsa, panel daxil olmağı deyir. Adi brauzer sekmesində bulud düyməsi təklif olunmur; Studio istifadə edin.

## Sınayın

Yuxarıdakı səkkiz addımı real faylın surəti ilə yerinə yetirin. İki nəfərlik addımlar üçün başqa bir adam və ya iki adla iki pəncərə lazımdır. Real paylaşılan qovluqla sınasanız, İcma sınaq səhifəsi məhz bunu soruşan yoxlamanı sadalayır və nəticələri qəbul edir.
