---
title: Çertyojda şəkillər
summary: PNG və ya JPEG şəkli yerləşdirin, onu düzbucaqlıya və ya çoxbucaqlıya kəsin, DWG-nin istifadə etdiyi şəkilləri göstərin və onları kəskin çap edin.
keywords: pastearea, parea, kopyalanmış sahə, copy area, markupcraft, həqiqi ölçü, real size, overlay, ole, ole2frame, daxil edilmiş obyekt, şəkil yapışdır, ctrl+v, buferdəki şəkil, ekran görüntüsü, screenshot, şəkil, image, imageattach, iat, imageclip, clip, png, jpeg, jpg, loqo, foto, raster, imagedef, xref, plot, pdf, ayırdetmə
from: 4025ac97
---

## Nə yaradacaqsınız

Başlıq blokuna yerləşdirilmiş şirkət loqosu, istədiyiniz hissəyə kəsilmiş, və PDF-də öz ayırdetməsində çap olunan.

## Şəkil yerləşdirin

1. {{cmd:IMAGEATTACH}} (və ya `IAT`) yazın və {{key:Enter}} basın. PNG və ya JPEG faylını seçin.
2. `Aşağı-sol küncü göstərin`: klikləyin, ya da nöqtə yazın.
3. `Enini göstərin`: çertyoj vahidlərində en. {{key:Enter}} təklif olunan eni saxlayır: pikselə bir vahid, ya da bu fayl üçün əvvəl verdiyiniz en (sorğu hansının olduğunu deyir).
4. `Fırlanma bucağını göstərin`: heç biri üçün {{key:Enter}} basın.

Şəkil bir obyektdir: onu çərçivəsindən seçin və blok kimi köçürün, fırladın, miqyaslayın, kəsin və ya silin.

:::note
Şəkil faylı çertyoj açıq olduqda onunla qalır. Saxlanmış DWG faylın adını yazır, digər proqramlar kimi; piksellərini saxlamır. Şəkli çertyojun yanında saxlayın.
:::

## Ekran görüntüsünü və ya kopyalanmış şəkli yapışdırın

1. Şəkli kopyalayın (ekran görüntüsü {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=ekran görüntüsü alətiniz}}, ya da başqa proqramda və ya brauzerdə şəkli kopyalayın).
2. Çertyojda getməli olduğu yeri göstərin və {{key:Mod+V}} basın.

Şəklin aşağı-sol küncü göstəricidə (ya da görünüşün ortasında) düşür, gördüyünüzün 40 %-i eni ilə; onu hər digər şəkil kimi köçürün, miqyaslayın və kəsin. Onun adı çertyojun adı ilə `-picture-1.png` (sonra `-2`, …) olur və tarixçə bunu deyir. {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Şəkil yapışdır}} menyudan eyni işi görür (brauzer əvvəl soruşa bilər).

DWG yalnız şəkil faylının adını saxlayır, buna görə çertyojun saxlanması şəkli öz faylı kimi də saxlayır. İkisini eyni qovluqda saxlayın: çertyoj şəkli oradan göstərir. Brauzerdə bu ikinci yükləmədir və tarixçə bunu deyir. Buferdə yalnız CadCraft obyektləri olduqda {{key:Mod+V}} onları əvvəlki kimi yapışdırır.

## MarkupCraft-da kopyalanmış sahəni yapışdırın

MarkupCraft-da {{ui:Sahəni kopyala}} vərəqin bir hissəsini öz ölçüsünü bilən şəkil kimi kopyalayır. CadCraft onu həmin ölçüdə yapışdırır.

1. MarkupCraft-da sahəni kopyalayın (düzbucaqlı, çevrə və ya sərbəst forma; {{ui:Örtük kimi kopyala}} kopyalayarkən çertyojunuzu onun vasitəsilə görmək istəyirsinizsə).
2. CadCraft-da {{key:Mod+V}} basın, ya da {{cmd:PASTEAREA}} (və ya `PAREA`) yazın, ya da {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Kopyalanmış sahəni yapışdır}} seçin.
3. `Kopyalanmış sahənin aşağı-sol küncünü göstərin`: klikləyin, ya da nöqtə yazın. Sahənin ölçüsündə çərçivə göstəricini izləyir.

Necə böyük düşür:

- **Vərəqin çertyoj miqyası var idi:** çertyojun vahidlərində real ölçüsündə (2 m-lik pilləkənin 1:50 detalı metrlik çertyojda 2 m uzunluqdadır, düymlük çertyojda 78.74). Daha nə soruşulmur.
- **Vərəqin miqyası yox idi:** CadCraft kağızdakı ölçüsünü deyir və miqyas soruşur: 1:100 vərəqi üçün `100` yazın, kağız ölçüsü üçün {{key:Enter}} basın, ya da `P` yazın, yapışdırılmış şəkildə iki nöqtəyə klikləyin və onların həqiqətdə nə qədər aralı olduğunu yazın (eyni {{cmd:SCANSCALE}} kimi). Aşağı-sol künc yerləşdirdiyiniz yerdə qalır.

Ölçüsüz çertyoj millimetr qəbul edir, PDF altlığı kimi. Örtük kağızı şəffaf saxlayır və kopyalananda nə qədər solğun idisə, o qədər solğun başlayır; çevrə və ya sərbəst formadan kənar hissə də şəffafdır. Yapışdırılmış sahə digər hər şəkil kimidir: köçürün, fırladın, miqyaslayın, kəsin və ya silin, bütün yapışdırma bir geri alma addımıdır. DWG kimi saxlanılanda o, solğunluğu və şəffaflığı olan IMAGE-dir.

{{key:Mod+V}} sahəni yapışdırır, buferdəki şəkil sahənindirsə, ya da sahə CadCraft-da kopyaladığınız hər şeydən sonra kopyalanıbsa (və son 6 saat ərzində). Əks halda əvvəlki kimi yapışdırır. {{cmd:PASTEAREA}} son kopyalanmış sahəni istənilən vaxt yapışdırır.

## DWG-nin istifadə etdiyi şəkilləri göstərin

DWG yalnız şəkillərinin yerini saxlayır, buna görə CadCraft hər birini faylının adı ilə çərçivə kimi göstərir.

1. {{cmd:IMAGE}} (və ya `IM`) yazın. Komanda sətri hər şəkil faylını və göstərilib-göstərilmədiyini sadalayır.
2. Faylları seçin (bir neçəsini birdən). Çertyojun adını ehtiva edən faylın adı da sayılır, çünki ixraclar çox vaxt layihə prefiksi əlavə edir.

## Şəkli kəsin

1. {{cmd:IMAGECLIP}} (və ya `ICL`) yazın və şəkli seçin.
2. `R` seçin və iki künc klikləyin, ya da `P` seçin və çoxbucaqlının nöqtələrinə klikləyin, sonra {{key:Enter}} basın. `D` kəsməni silir.

## Şəkilləri çap edin

Şəkillər PDF-ə şəkil kimi, öz ayırdetməsində və xətlərin altında düşür. {{ui:Çap et}} dialoqunda {{ui:Şəkillər}} onları 600, 300 və ya 150 dpi ilə məhdudlaşdıra bilər ki, fayl kiçik olsun. JPEG olduğu kimi düşür.

## Harada saxlanılır

| Format | Şəkillər |
|---|---|
| DWG (hər versiya) | Şəkil kimi (IMAGE), kəsməsi ilə |
| DXF | Faylın adı ilə çərçivə kimi; saxlama bunu deyir |

## Digər proqramlardan obyektlər (OLE)

Çertyojda digər proqramın yaratdığı obyektlər ola bilər, məsələn boya proqramından şəkil və ya cədvəl diapazonu (OLE obyektləri). CadCraft onları işə salmır və ya redaktə etmir, və yeni olanları yerləşdirə bilmir. Nə edir:

- **DXF-də** OLE obyekti çərçivə kimi açılır. Əgər obyekt özünün şəklini saxlayıbsa və həmin şəkil bitmapdırsa, şəkil çərçivənin içində çəkilir; əks halda çərçivədə obyektin növü ilə etiket olur, məsələn "Microsoft Excel Worksheet (OLE)". Çərçivəni blok kimi köçürə, kopyalaya və silə bilərsiniz. DXF 2000-ə {{cmd:SAVEAS}} onu məlumatı dəyişmədən yenidən OLE obyekti kimi yazır.
- **DWG-də** obyektlər saxlanılır və DWG kimi saxlayanda bayt-bayt geri yazılır, lakin **göstərilmir**: DWG obyektin yerini öz məlumatı içində saxlayır, CadCraft hələ onu oxumur. Tarixçə neçəsinin saxlandığını deyir. {{cmd:OLELIST}} yazın ki, nə olduqlarını görəsiniz (növ, ölçü, hər birinin şəkil saxlayıb-saxlamadığı) və şəklin nüsxəsini seçdiyiniz yerə qoyun: **Yerləşdir** nömrəni, aşağı-sol küncü və eni soruşur və içində şəkil olan çərçivə çəkir. Bu nüsxə köçürülə və ya silinə bilən çərçivədir; obyektin özü çertyojda qalır və saxlayanda hələ də geri yazılır.
- DXF-dən gələn obyekt DWG-də yalnız çərçivə və etiket kimi saxlanılır; tarixçə bunu deyir. Obyektin özünü saxlamaq üçün DXF 2000 kimi saxlayın.
- Metafayl olan şəkillər (bir çox proqramın saxladığı) çəkilmir: əvəzində çərçivə və etiket göstərilir.

## Ümumi səhvlər

| Nə görürsünüz | Səbəb | Düzəliş |
|---|---|---|
| Fayl adı olan çərçivə | CadCraft faylı yoxdur | {{cmd:IMAGE}}, sonra faylı seçin |
| "That is not a picture" | Seçilmiş obyekt şəkil deyil | Şəklin çərçivəsini seçin |
