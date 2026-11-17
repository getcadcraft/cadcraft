---
title: Sənədlər: götürmə, baxışlar və buraxılış
summary: Layihə qovluğundakı çertyojları nəzarət altında saxlayın: fayl başqası tərəfindən dəyişdirilməsin deyə onu götürün, yeni baxış kimi qaytarın, nəzərdən keçirməyə göndərin və təsdiq edənin adı ilə buraxın; tarixçə, nəyin nəyi istifadə etdiyi, materialların siyahısı və baxışı göstərən başlıq blokları.
keywords: layihə parametrləri, təsdiq edənlər, adminlər, baxış hərfləri, ASME, yalnız oxumaq üçün, baxışları müqayisə et, nüsxəni aç, partcraft, bimcraft, documents, DOCUMENTS, DOCS, depo, sənəd idarəetməsi, pdm, götür, qaytar, checkout, checkin, kilid, baxış, rev, baxış hərfi, buraxılış, buraxılmış, təsdiq et, təsdiq, nəzərdən keçirmə, köhnəlmiş, harada istifadə olunur, bom, materialların siyahısı, başlıq bloku, baxış bloku, layihə qovluğu
from: ee938722
---

## Nə yaradacaqsınız

Layihə qovluğu, burada hər çertyojun baxışı (A.1, A.2 … sonra A, B …) və vəziyyəti (İşdə olan, Nəzərdən keçirilir, Buraxılıb, Köhnəlmiş) olur, hər dəfə yalnız bir nəfər faylı dəyişə bilir və hər götürmə, qaytarma, təsdiq və pozulmuş götürmənin kim tərəfindən və nə vaxt edildiyi yazılır.

Hər şey qovluğun özündə, çertyojlarınızın yanında gizli `.ccvault` qovluğunda saxlanılır. Paylaşılan disk və ya sinxronizasiya olunan qovluq bütün komanda üçün işləyir. Server yoxdur və heç nə yüklənmir.

## Sənədlər panelini açın

Yazın `DOCUMENTS` (və ya `DOCS`) və {{key:Enter}} basın. Panel çertyojun yanında açılır.

Seçin {{ui:Layihə qovluğunu seçin}} və layihənin çertyojlarını saxlayan qovluğu seçin. Layihə qovluqları CadCraft Studio-da və qovluq aça bilən brauzerlərdə (Chrome, Edge) işləyir. Digər brauzerlərdə panel bunu bildirir.

İlk dəfə adınızı yazın (hər etdiyiniz işə bu ad yazılır) və bu kompüterin adını. Daxil olmusunuzsa, adınız artıq yazılıb.

## Depo başladın

Hələ depo olmayan qovluq {{ui:Bu qovluqda depo başlat}} təklif edir. Layihənin adını yazın. Sonra {{ui:Depoda olmayan fayllar}} açın və nəzarət altına almaq istədiyiniz hər faylın yanında {{ui:Əlavə et (A)}} seçin. Əlavə etdiyiniz fayl **A.1** baxışından, İşdə olan vəziyyətində başlayır.

## Çertyojı dəyişdirin

1. Çertyojun yanında {{ui:Aç}} seçin. Fayl CadCraft-da açılır. Əgər fayl sizin üçün götürülməyibsə, yalnız baxın, dəyişdirməyin: {{ui:Saxla}} onun üzərinə yazmaqdan imtina edir və səbəbini deyir (öz nüsxənizi saxlamaq üçün {{ui:Fərqli saxla}} istifadə edin).
2. {{ui:Götür}} seçin. İndi heç kim onu götürə bilməz; panel kimdə olduğunu, hansı kompüterdə və nə vaxtdan etibarən olduğunu göstərir.
3. Çəkin.
4. {{ui:Qovluğa qaytar}} seçin və nəyin dəyişdiyini yazın. Açıq çertyoj öz formatında layihə qovluğuna saxlanılır və növbəti baxış olur (A.1, sonra A.2). Dəyişiklik olmadan qaytarsanız, baxış dəyişmir.

{{ui:Götürməni ləğv et}} faylı yeni baxış olmadan qaytarır.

## Nəzərdən keçirmə və buraxılış

- {{ui:Nəzərdən keçirməyə göndər}}: nəzərdən keçirilən müddətdə fayl yalnız oxunandır.
- {{ui:Təsdiq et}}: təsdiq edənin adını yazın. A.3 **A** olur, Buraxılıb. Buraxılmış fayllar yalnız oxunandır.
- {{ui:Geri göndər}}: səbəblə birlikdə İşdə olan vəziyyətinə qaytarılır.
- Buraxılmış fayl üzərində {{ui:Yeni baxış}} növbəti hərf üçün götürür: ilk qaytarma **B.1** olur. Ondan əvvəl {{ui:Götürməni ləğv et}} basılsa, fayl A-da qalır.
- {{ui:Köhnəlmiş et}} buraxılmış faylı istifadədən çıxarır.

Layihə kimin təsdiq edə biləcəyinin siyahısını saxlaya bilər və təsdiq edənin faylı qaytaran şəxs olmamasını tələb edə bilər (aşağıda Layihə parametrləri bölməsinə baxın).

## Layihə parametrləri

Paneldə {{ui:Layihə parametrləri}} açın:

- **Təsdiq edənlər**: hər sətirdə bir ad. Onlar varsa, buraxılışı yalnız onlar təsdiq edə bilər.
- **Təsdiq edən müəllifdən başqa biri olmalıdır**: "dörd göz" qaydası.
- **Adminlər**: hər sətirdə bir ad. Onlar varsa, başqasının götürməsini yalnız onlar poza və ya bu parametrləri yalnız onlar dəyişə bilər.
- **Buraxılacaq baxış hərfləri**: {{ui:ASME Y14.35 ardıcıllığını istifadə et}} I, O, Q, S, X və Z-ni ötürür, ya da öz hərflərinizi yazın. Artıq verilmiş hərflər qalır; seçim növbəti baxışlara aiddir.
- **Götürmə bundan sonra köhnə sayılır**: gün sayı (defolt 14).

{{ui:Parametrləri saxla}} seçin. Dəyişiklik kimin etdiyi ilə birlikdə jurnala yazılır.

## Kimsə faylı götürülmüş saxlayıb

{{ui:Götürməni poz}} başqasının götürdüyü faylı azad edir (onlar uzaqdadır və ya kompüterləri xarab olub). Səbəb yazmalısınız: səbəb onun kimin götürməsi olduğu ilə birlikdə jurnala yazılır. Layihədə adminlər varsa, bunu yalnız onlar edə bilər. 14 gündən köhnə götürmə uzun müddət qalmış kimi işarələnir.

## Tarixçə, baxışlar, istifadə və istifadə edən

Faylın adını seçin:

- {{ui:Tarixçə}}: hər hadisə, ən yenisi əvvəldə, kim, hansı kompüter və nə vaxt ilə.
- {{ui:Baxışlar}}: saxlanılan hər baxış. Hər baxışın nüsxəsi depoda saxlanılır (eyni məzmun bir dəfə saxlanılır). {{ui:Nüsxəni aç}} həmin baxışı depodakı faylın üzərinə yaza bilməyən sadə nüsxə kimi açır. {{ui:Bununla müqayisə et}} o baxış ilə ondan əvvəlki (və ya seçdiyiniz başqa baxış) arasında nə əlavə olunduğunu, silindiyini və dəyişdiyini sadalayır və bunu çertyojda rənglə göstərir.
- {{ui:İstifadə edir}}: bağlandığı çertyojlar (xref-lər), IFC modelinin göstərdiyi sənədlər, PartCraft yığımının hissələri.
- {{ui:Kim istifadə edir}}: bu faylı istifadə edən depodakı hər fayl.

{{ui:Materialların siyahısı (CSV)}} faylın istifadə etdiyi hər şeyin siyahısını səviyyə-səviyyə, miqdarları, baxışları və vəziyyətləri ilə elektron cədvəl üçün saxlayır.

## Vərəqdə baxış bloku

Layoutu olan çertyoj açıq olduqda {{ui:Revizİya bloku}} seçin. Buraxılmış baxışların cədvəli (baxış, tarix, kim, təsdiq edən, təsvir) baxdığınız vərəqin yuxarı sağ küncündə çəkilir. Buraxılışı təsdiq etdikdə cədvəl yenilənir.

## Başlıq blokunda baxış

Başlıq blokunuzun atributlarına bu teqlərdən birini verin və açıq çertyojda {{ui:Başlıq bloklarını doldur}} seçin:

| Teq | Doldurulan |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | baxış (B, və ya üzərində işlənən zaman B.2) |
| `VAULT.STATE` | vəziyyət (Buraxılıb …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | son baxışın tarixi |
| `VAULT.APPROVER`, `APPROVED_BY` | son buraxılışı kim təsdiq edib |

## PartCraft və BimCraft

PartCraft və BimCraft öz faylları üçün eyni Sənədlər panelinə malikdir: PartCraft-da hissələr və yığımlar, BimCraft-da IFC modelləri. Qaytarma açıq modeli layihə qovluğuna saxlayır, yığım isə hansı hissələri istifadə etdiyini və materialların siyahısını göstərir.

## Bilmək yaxşıdır

- Eyni paylaşılan qovluqda iki nəfər faylı eyni anda götürə bilməz: götürmə sistemin ikinci dəfə yaratmağa icazə vermədiyi fayldır. Brauzerdə və bu funksiyadan köhnə olan Studio qabığında bu, qovluğun icazə verdiyi qədər ciddidir: eyni saniyənin içində iki götürmə hər ikisi uğurlu ola bilər. Panel hansının tətbiq olunduğunu deyir.
- `.ccvault` qovluğunu əl ilə redaktə etməyin və silməyin. İçindəki jurnal qeyddir; depo lazım gələrsə öz siyahısını ondan yenidən qurur.
- Qovluqda götürmədən faylın dəyişdirilməsi {{ui:Qovluqda götürmədən dəyişdirilib}} kimi göstərilir.
