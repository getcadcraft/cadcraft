---
title: Çertyojun qatlarla təşkili
summary: Divarlar, qapılar və qeydlər üçün qatlar yaradın, rənglər təyin edin, bir qatı cari edin və qatları söndürün, dondurun, kilidləyin və ya çapdan kənarda saxlayın.
keywords: qat, qatlar, la, cari qat, dondur, əri, kilid, söndür, yandır, çap, çap etmə, rəng, qat xassələri, layiso, layuniso, təcrid, layoff, layfrz, laymcur, layon, laythw, adını dəyiş, laymrg, birləşdir, laydel, qatı sil
from: ba9f0617
---

## Nə yaradacaqsınız

Üç qat: Divarlar, Qapılar və Qeydlər, hər birinin öz rəngi ilə, hər birində çəkilmiş obyektlər və qatlar arasında köçürülmüş obyektlər.

## Qatlar paneli

Qatlar sol paneldə {{ui:Qatlar}} altında yerləşir. Hər sətir soldan sağa göstərir:

- nöqtə: **cari** qat üçün dolu, yeni obyektlərin getdiyi yer;
- rəng nümunəsi;
- qatın adı;
- dörd düymə: yandır/söndür (göz), dondur (qar dənəsi), kilid (qıfıl) və çap (printer).

Hər çertyojda `0` adlı qat var. `LA` yazıb {{key:Enter}} basmaq paneli açır.

## Qat yaradın

1. Siyahının üstündə {{ui:Yeni qat}} klikləyin. Ad qutusu açılır.
2. `Divarlar` yazın və {{key:Enter}} basın (və ya {{ui:Əlavə et (A)}} klikləyin).

Status sətri "Divarlar qatı əlavə edildi və cari edildi." deyir. Yeni qat 7 rəngini alır (açıq mövzuda qara, tünd mövzuda ağ).

3. Yenidən {{ui:Yeni qat}} klikləyin, `Qapılar` yazın və {{key:Enter}} basın.
4. Yenidən {{ui:Yeni qat}} klikləyin, `Qeydlər` yazın və {{key:Enter}} basın.

Qeydlər indi cari qatdır.

## Hər qata rəng verin

1. Divarlar sətirindəki rəng nümunəsini klikləyin. Sistem rəng seçicisi açılır.
2. Rəng seçin və təsdiqləyin.

Nümunə və Divarlar üzərində {{ui:Qata görə}} rəngli hər şey dəyişir.

:::note
Standart 255 CAD rənginin birinə uyğun seçilmiş rəng həmin nömrə kimi saxlanılır. Hər digər rəng CadCraft-da dəqiq saxlanılır, lakin DWG və ya DXF faylında ən yaxın standart rəng kimi yazılır.
:::

## Qata çəkin

1. Siyahıda **Divarlar** adını klikləyin. Nöqtəsi dolur və status sətri "Cari qat: Divarlar" deyir.
2. Düzbucaqlı çəkin (`REC`). O, Divarlar üzərinə düşür.
3. **Qapılar**-ı klikləyin və qövs çəkin (`A`). O, Qapılar üzərinə düşür.

Cari qatı sağdakı {{ui:Cari parametrlər}}-də də seçə bilərsiniz (heç nə seçilməyəndə), {{ui:Qat}} altında.

## Obyektləri başqa qata köçürün

1. Obyektləri seçin.
2. Sağ paneldə {{ui:Qat}}-da yeni qatı seçin.

Onlar həmin qata keçir və rəngləri {{ui:Qata görə}} olduqda onun rəngini alır.

## Söndür, dondur, kilidlə və çap et

| Düymə | Nə edir |
|---|---|
| Yandır/söndür (göz) | Qatın obyektlərini gizlədir. Onlar görünə, seçilə və ya tutula bilməz. |
| Dondur (qar dənəsi) | CadCraft-da söndürmə ilə eyni təsir. Digər proqramlar onları fərqli işlətdiyi üçün ayrı saxlanılır və parametr saxlanılır. |
| Kilid (qıfıl) | Obyektlər görünür və onlara tutula bilərsiniz, lakin seçilə və ya dəyişdirilə bilməz. Üzərindən izlədiyiniz fon üçün yaxşıdır. |
| Çap (printer) | Basıldıqda qat ekranda göstərilir, lakin çaplardan və PDF-lərdən **kənarda qalır**. Konstruksiya xətləri və özünüz üçün qeydlər üçün istifadə edin. |

Düymənin üzərinə gələrək nə edəcəyini görün ("Söndür", "Dondur", "Kilid", "Bu qatı çap etmə").

Cari qatı söndürə bilməzsiniz: status sətri "Bu cari qatdır. Əvvəlcə başqa qatı cari edin." deyir. Qatın adına klikləyərək onu cari etmək onu həm də yandırır və əridir.

Paneldə və ya komanda ilə hər qat dəyişikliyi bir geri alma addımıdır: {{key:Mod+Z}} onu geri qoyur.

## Obyektləri seçərək qatlarla işləyin

Qatın adını bilmək lazım deyil: onun üzərindəki obyekti seçin. Komandanı yazın və ya {{ui:Qatlar}} panelinin yuxarısında {{ui:Alətlər}} açın.

| Komanda | Nə edir |
|---|---|
| {{cmd:LAYISO}} | Obyektləri seçin, {{key:Enter}} basın: yalnız onların qatları qalır, digər hər qat söndürülür. Cari qat söndürülübsə, təcrid olunmuş qatlardan biri cari olur. |
| {{cmd:LAYUNISO}} | Son {{cmd:LAYISO}}-nun söndürdüyü qatları geri yandırır və dəyişdirdiyi cari qatı geri verir. |
| {{cmd:LAYOFF}} | Obyektləri bir-birinin ardınca klikləyin: hər birinin qatı söndürülür. Son birini geri götürmək üçün `U`, bitirmək üçün {{key:Enter}}. |
| {{cmd:LAYFRZ}} | Eyni, qatları dondurmaqla. |
| {{cmd:LAYMCUR}} | Obyekti klikləyin: onun qatı cari olur (və yandırılır və əridilir). Bir obyekt artıq seçilibsə, o istifadə olunur. |
| {{cmd:LAYON}} | Bütün qatları yandırır. |
| {{cmd:LAYTHW}} | Bütün qatları əridir. |

Cari qat bu yolla heç vaxt söndürülmür və ya dondurulmur: tarixçə bunu deyir və əvvəlcə {{cmd:LAYMCUR}} ilə başqa qatı cari edə bilərsiniz. Blok istinadını seçmək istinadın öz qatını istifadə edir.

## Qatları adını dəyişin, birləşdirin və silin

- {{cmd:RENAME}}: `LA`, köhnə ad və yeni ad yazın. Qatdakı hər obyekt izləyir. (`B` bloku eyni şəkildə adlandırır, hər istinadı ilə birlikdə.)
- {{cmd:LAYMRG}}: birləşdirmək üçün hər qatda bir obyekti klikləyin (və ya `N` yazın və ad), {{key:Enter}} basın, sonra hədəf qatı seçin və `Y` cavab verin. Obyektlər hədəfə keçir — modeldə, vərəqlərdə və bloklarda — və birləşən qatlar silinir.
- {{cmd:LAYDEL}}: qatda bir obyekti seçin (və ya `N` və adı) və `Y` cavab verin. Qat **üzərindəki hər obyektlə birlikdə** getdi, hər yerdə. Qat 0, DEFPOINTS və cari qat silinə bilməz.

Hər biri bir geri alma addımıdır. Üçü də qatlar panelinin yuxarısındakı {{ui:Alətlər}}-dədir.

1. Divar xəttindən birini klikləyin, sonra `LAYISO` yazıb {{key:Enter}} basın. Yalnız Divarlar yanır.
2. Divarlarda lazım olan dəyişiklikləri edin.
3. `LAYUNISO` yazıb {{key:Enter}} basın. Qapılar və Qeydlər geri gəlir.

## Ümumi səhvlər

- **Yeni xətlər səhv qata düşdü.** Çəkməzdən əvvəl hansı nöqtənin dolu olduğunu yoxlayın. Yeni qat əlavə etdiyiniz kimi cari olur.
- **Obyekt seçilmir.** Onun qatı kilidlidir, söndürülüb və ya dondurulub.
- **Qat başqa proqramda hələ çap olunur.** DXF R12 "çap etmə"ni saxlaya bilmir. CadCraft vərəqi olduqda parametri özü üçün saxlayır, lakin başqa proqramlar həmin qatı çap edəcək.
- **Saxladıqdan sonra qat adları böyük hərflərlə.** DXF R12 adları böyük hərflə saxlayır, buna görə `Walls` `WALLS` olur və boşluqlar `_` olur. Saxlanılmış DWG adları yazdığınız kimi saxlayır.
- **Qatı adını dəyişdirmək, birləşdirmək və ya silmək.** {{cmd:RENAME}}, {{cmd:LAYMRG}} və ya {{cmd:LAYDEL}} istifadə edin (həmçinin {{ui:Alətlər}}-də): aşağıya baxın.

## Qatları qruplaşdırın

Siyahını qısa saxlamaq üçün qatları Mövcud, Təklif olunan və Xidmətlər kimi qovluqlara qoyun. Hər qovluq yığılır və onun düymələri bütün qatları birlikdə yandırır və ya söndürür, dondurur və ya kilidləyir. Cari qat heç vaxt söndürülmür.

Qatlar panelində {{ui:Alətlər}}-də kiçik yaşayış işləri üçün hazırlanmış dəsti üçün {{ui:Hazır qrupları əlavə et}}, adında ortaq prefiksi olan qatları qruplaşdırmaq üçün {{ui:Ada görə qruplaşdır}} (`E-Walls`, `E-Doors`), və ya {{ui:Yeni qrup}} seçin. Qatı qovluğa sürükləyin, ya da cari qat üçün siyahının üstündəki düymələrdən istifadə edin. Siyahını daraltmaq üçün {{ui:Qat tapın}} sahəsinə yazın. `LAYGROUP` (`LG`) eyni işi komanda sətrində görür.

Qrupun adını dəyişmək üçün adına ikiklik edin (və ya seçib {{key:F2}} basın), yeni adı yazın və {{key:Enter}} basın; {{key:Esc}} köhnəni saxlayır və {{cmd:UNDO}} onu geri qaytarır. {{ui:Yeni qrup}} Qatlar panelində {{ui:Alətlər}} altındadır.

Qatların özləri dəyişmir, buna görə digər CAD proqramları onları adi düz siyahı kimi görür. CadCraft qrupları faylda saxlayır.
