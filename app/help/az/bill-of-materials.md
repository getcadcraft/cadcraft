---
title: Zonalara görə material siyahıları
summary: Çertyojun sahələrini zona kimi qeyd edin və hər biri üçün içindəki blokları sayan cədvəl yerləşdirin. Cədvəllər işinizlə birlikdə çertyoju izləyir, və hər birində hansı sütunların göstəriləcəyini seçirsiniz.
keywords: material siyahısı, BOM, hissələr siyahısı, cədvəl, zona, sahə, say, miqdar, atribut, sütunlar, element nömrəsi, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** çertyojun adlandırılmış sahəsidir. **Material siyahısı cədvəli** bir zonanın içində və ya bütöv çertyojda olanları sadalayır: hər blok öz miqdarı və atribut dəyərləri ilə. Çertyojda istədiyiniz qədər zona və cədvəl ola bilər, və bir zonada müxtəlif sütunlarla bir neçə cədvəl ola bilər.

Alətlər Bloklar sekmesində {{ui:Material siyahısı}} altında, Bloklar qrupunun {{ui:Daha çox}} menyusunda yerləşir və yazıla bilər.

## Zona yaradın

{{cmd:BOMZONE}} yazın və ya:

- düzbucaqlı üçün iki qarşılıqlı künc klik edin,
- {{ui:Çoxbucaqlı}} seçin, hər küncü klik edin və bağlamaq üçün Enter basın, və ya
- {{ui:Obyekt}} seçin və bağlı polixətt, çevrə, ellips və ya bağlı spline seçin. Onun konturu kopyalanır; obyekt olduğu kimi qalır.

Sonra zonanın adını yazın. Zona sol yuxarı künc üzərində adı ilə birlikdə nöqtəli kontur kimi çəkilir, `BOM-ZONES` qatında, bu qat isə çap olunmur. Zonaları kağızda istəyirsinizsə, həmin qat üçün çapı yandırın.

Zona adi bağlı polixəttdir: köçürün, uzadın və ya tutacaqlarını sürükləyin, adı onunla gedir. Adı dəyişmək üçün adın mətnini redaktə edin, və ya {{cmd:BOMZONE}} və {{ui:Adını dəyişdir}} istifadə edin. {{ui:Zonalar}} hər zonanı və onun neçə cədvəli olduğunu siyahıya salır.

## Cədvəl yerləşdirin

{{cmd:BOMTABLE}} (və ya {{cmd:BOM}}) yazın, zonanın konturunu və ya adını seçin, mətnin hündürlüyünü verin və cədvəlin sol yuxarı künci gedəcək yeri klik edin. Zonanı seçmək əvəzinə Enter basın, və ya bütöv çertyojun cədvəli üçün {{ui:Bütöv}} seçin.

Yeni cədvəl element nömrəsini, miqdarı, blok adını və blokların daşıdığı hər atribut üçün sütunu göstərir (ilk altısı; qalanları seçilməmiş təklif olunur). Eyni adlı və eyni atribut dəyərli bloklar bir sətir paylaşır.

## Nəyin daxil sayıldığı

- Blok **daxiletmə nöqtəsi** olan zonada sayılır.
- Xətt, qövs, çevrə, polixətt, ellips, spline və ya ştrixləmə zonanın onun ölçülərinin mərkəzi olan (extents) zonasında **tam** sayılır (xətt üçün ortası). Onun uzunluğu zonanın kənarında kəsilmir.
- Kənarda tam yerləşən nöqtə daxil sayılır.
- Zonalar üst-üstə düşə bilər. Hər zona öz üçün sayılır, buna görə üst-üstə düşən obyekt hər iki cədvəldə olur.

## Cədvəllər çertyojı izləyir

Blok əlavə etdikdə, köçürdükdə, kopyaladıqda və ya sildikdə, atributu redaktə etdikdə, zonanı formalaşdırdıqda və ya köçürdükdə, hər cədvəl eyni addımda yenidən çəkilir. Geri qaytarma həm redaktənizi, həm də cədvəl dəyişikliyini birlikdə geri qaytarır.

Cədvəlin izləməsini dayandırmaq üçün onun parametrlərində {{ui:Donmuş}} işarələyin. Donmuş cədvəl yalnız onun parametrlərini redaktə etdikdə və ya {{cmd:BOMUPDATE}} yazdıqda dəyişir; bu, indi hər cədvəli yeniləyir.

## Sütunları seçin

Cədvəli seçin və {{cmd:BOMEDIT}} yazın. Dialoqda:

- **Sütunlar**: göstərmək istədiklərinizi işarələyin (element, miqdar, ad, qat, uzunluq, sahə, qeydlər və hər atribut), istənilən biri üçün öz başlığınızı yazın və onları yuxarı və aşağı köçürün.
- {{ui:Sətirləri qruplaşdır}}: blok adı və atribut dəyərləri, yalnız blok adı, qat və ya bir atribut. Birləşmiş sətirdə bloklar arasında fərqli olan dəyər "müxtəlifdir" yazır.
- {{ui:Çeşidlə}} hər hansı sütunla, artan və ya azalan.
- {{ui:Başlıq}}, {{ui:Başlığı göstər}} və {{ui:Cəmi sətri}}.
- {{ui:Xətləri qat üzrə say}} hər qat üçün bir sətir əlavə edir: obyektlərin sayı, onların ümumi uzunluğu və qapalı şəkillər üçün ümumi sahəsi, çertyoj vahidlərində.
- **Qeydlər**: Qeydlər sütununu işarələyin, sonra dialoqun altında cədvəldəki istənilən sətir üçün qeyd yazın.

Hər cədvəl öz seçimlərini saxlayır.

## Element nömrələri

Sətir cədvəldə olduğu müddətdə öz element nömrəsini saxlayır. Yeni sətir növbəti boş nömrəni alır və verilmiş nömrə bir daha istifadə olunmur, buna görə nömrəyə istinad edən nişanlar və qeydlər düzgün qalır. {{ui:Elementləri yenidən nömrələ}} onları göstərilən sıra ilə 1-dən başlayaraq nömrələyir.

Sətir qruplaşdırdığı ilə tanınır: qruplaşdırma üsulunu dəyişsəniz və ya qruplaşdırmada istifadə olunan atribut dəyərini dəyişsəniz, sətir yeni sayılır.

## İxrac və digər proqramlar

{{cmd:BOMEXPORT}} və ya dialoqdakı {{ui:CSV ixrac et}} cədvəli elektron cədvəl üçün .csv faylı kimi saxlayır.

DWG və ya DXF faylında cədvəl adi xətt və mətn blokudur, buna görə digər proqramlar onu çəkildiyi kimi göstərir və çap edir. Orada cədvəl obyekti deyil və digər proqramlarda yenilənmir. Onun zonaya bağlantısı faylda CadCraft-ın oxuduğu əlavə məlumat kimi saxlanılır, buna görə çertyojı CadCraft-da yenidən açanda cədvəl yenidən canlı olur. Vərəqi olmayan çertyojun R12 DXF-i zona qatının "çap olunmur" parametrini saxlamır.

Cədvəli parçalamaq onu sərbəst xətt və mətnə çevirir və bağlantını bitirir.
