---
title: Çertyoju qatlarla təşkil edin
summary: Divarlar, qapılar və qeydlər üçün qatlar yaradın, rənglər təyin edin, bir qatı cari edin və qatları söndürün, dondurun, kilidləyin və ya çapdan kənar saxlayın.
keywords: qat, qatlar, la, cari qat, dondur, əritmə, kilid, söndür, yandır, çap, çap etmə, rəng, qat xassələri, layiso, layuniso, izolyasiya, layoff, layfrz, laymcur, layon, laythw, adını dəyiş, laymrg, birləşdir, laydel, qatı sil
from: cd033591
---

## Nə yaradacaqsınız

Üç qat, Divarlar, Qapılar və Qeydlər, hər birinin öz rəngi olaraq, hər birində obyektlər çəkilmiş və onlar qatlar arasında köçürülmüş.

## Qatlar paneli

Qatlar sol paneldə, {{ui:Qatlar}} altında yerləşir. Hər sətir soldan sağa göstərir:

- nöqtə: **cari** qat üçün doldurulmuş, yeni obyektlər orada yerləşir;
- rəng nümunəsi;
- qatın adı;
- dörd düymə: aç/söndür (göz), dondur (qar dənəsi), kilid (qıfıl) və çap (printer).

Hər çertyojda `0` adlı qat var. `LA` yazıb {{key:Enter}} basmaq sizi panelə aparır.

## Qatlar yaradın

1. Siyahının üstündə {{ui:Yeni qat}} düyməsinə klik edin. Ad qutusu açılır.
2. `Divarlar` yazın və {{key:Enter}} basın (və ya {{ui:Əlavə et (A)}} düyməsinə klik edin).

Status zolağı deyir: "Divarlar qatı əlavə edildi və cari edildi." Yeni qat 7 saylı rəng alır (açıq temada qara, tünd temada ağ).

3. {{ui:Yeni qat}} düyməsinə yenidən klik edin, `Qapılar` yazın və {{key:Enter}} basın.
4. {{ui:Yeni qat}} düyməsinə yenidən klik edin, `Qeydlər` yazın və {{key:Enter}} basın.

İndi Qeydlər cari qatdır.

## Hər qata rəng verin

1. Divarlar sətrindəki rəng nümunəsinə klik edin. Sistemin rəng seçicisi açılır.
2. Rəng seçin və təsdiqləyin.

Nümunə və Divarlarda {{ui:Qata görə}} rəngli hər şey dəyişir.

:::note
Seçdiyiniz rəng 255 standart CAD rənginin biri ilə üst-üstə düşərsə, o, həmin nömrə ilə saxlanılır. Hər hansı digər rəng CadCraft-da dəqiq saxlanılır, lakin DWG və ya DXF faylında ən yaxın standart rəng kimi yazılır.
:::

## Qatda çəkin

1. Siyahıda **Divarlar** adına klik edin. Nöqtəsi dolur və status zolağı deyir: "Cari qat: Divarlar".
2. Düzbucaqlı çəkin (`REC`). O, Divarlarda olacaq.
3. **Qapılar**a klik edin və qövs çəkin (`A`). O, Qapılarda olacaq.

Cari qatı sağdakı {{ui:Cari parametrlər}} bölməsində, {{ui:Qat}} altında da seçə bilərsiniz (heç nə seçilmədikdə).

## Obyektləri başqa qata köçürün

1. Obyektləri seçin.
2. Sağ paneldə {{ui:Qat}} bölməsində yeni qatı seçin.

Onlar həmin qata keçir və rəngləri {{ui:Qata görə}} olarsa, onun rəngini alırlar.

## Söndür, dondur, kilidlə və çap

| Düymə | Nə edir |
|---|---|
| Aç/söndür (göz) | Qatın obyektlərini gizlədir. Onlar görünmür, seçilə bilmir və tutulmur. |
| Dondur (qar dənəsi) | CadCraft-da söndürmə ilə eyni təsir. Digər proqramlar fərqli davrandığı üçün ayrı saxlanılır və parametr yadda qalır. |
| Kilid (qıfıl) | Obyektlər görünməyə davam edir və onlara tutula bilərsiniz, lakin seçilə və ya dəyişdirilə bilməz. İzlədiyiniz fon üçün yaxşıdır. |
| Çap (printer) | Basıldıqda qat ekranda göstərilir, lakin çaplardan və PDF-lərdən **kənarda qalır**. Konstruksiya xətləri və öz xatırlatmalarınız üçün istifadə edin. |

Düyməni üzərinə gətirərək nə etdiyini görün ("Söndür", "Dondur", "Kilidlə", "Bu qatı çap etmə").

Cari qatı söndürə bilməzsiniz: status zolağı deyir: "Bu cari qatdır. Əvvəlcə başqa qatı cari edin." Qatın adına klik edib onu cari etmək onu həm də yandırır və əridir.

Panel və ya əmrlə edilən hər qat dəyişikliyi bir geri qaytarma addımıdır: {{key:Mod+Z}} onu geri qaytarır.

## Obyektləri seçməklə qatlarla işləyin

Qatın adını bilmək lazım deyil: onun üzərindəki obyekti seçin. Əmri yazın və ya {{ui:Qatlar}} panelinin yuxarısında {{ui:Alətlər}} açın.

| Əmr | Nə edir |
|---|---|
| {{cmd:LAYISO}} | Obyektləri seçin, {{key:Enter}} basın: yalnız onların qatları yanır, bütün digər qatlar söndürülür. Əgər cari qat söndürülübsə, izolyasiya olunmuş qatlardan biri cari olur. |
| {{cmd:LAYUNISO}} | Son {{cmd:LAYISO}} əmrinin söndürdüyü qatları yenidən yandırır və dəyişdirdiyi cari qatı geri qaytarır. |
| {{cmd:LAYOFF}} | Obyektləri bir-bir klik edin: hər birinin qatı söndürülür. Sonuncunu geri almaq üçün `U`, bitirmək üçün {{key:Enter}} yazın. |
| {{cmd:LAYFRZ}} | Eyni, amma hər qatı dondurur. |
| {{cmd:LAYMCUR}} | Obyektə klik edin: onun qatı cari olur (və yanır, əriyir). Artıq bir obyekt seçilibsə, o istifadə olunur. |
| {{cmd:LAYON}} | Bütün qatları yandırır. |
| {{cmd:LAYTHW}} | Bütün qatları əridir. |

Cari qat bu üsulla heç vaxt söndürülmür və ya dondurulmur: tarixçə bunu bildirir və əvvəlcə {{cmd:LAYMCUR}} ilə başqa qatı cari edə bilərsiniz. Blok istinadını seçmək onun öz qatından istifadə edir.

## Qatların adını dəyişin, birləşdirin və silin

- {{cmd:RENAME}}: `LA`, köhnə ad və yeni adı yazın. Qatdakı hər obyekt izləyir. (`B` blokun adını eyni şəkildə dəyişir, hər istinadı ilə birlikdə.)
- {{cmd:LAYMRG}}: birləşdirmək üçün hər qatda bir obyektə klik edin (və ya `N` və ad yazın), {{key:Enter}} basın, sonra hədəf qatı seçin və `Y` cavab verin. Obyektlər hədəfə keçir — modeldə, vərəqlərdə və bloklarda — və birləşdirilən qatlar silinir.
- {{cmd:LAYDEL}}: qatda bir obyekt seçin (və ya `N` və adı) və `Y` cavab verin. Qat **üzərindəki hər obyekt ilə birlikdə** gedir, hər yerdən. 0 qatı, DEFPOINTS və cari qat silinə bilməz.

Hər biri bir geri qaytarma addımıdır. Üçü də {{ui:Qatlar}} panelinin yuxarısındakı {{ui:Alətlər}} bölməsindədir.

1. Bir divar xəttinə klik edin, sonra `LAYISO` yazın və {{key:Enter}} basın. Yalnız Divarlar yanır.
2. Divarlarda lazım olanı çəkin və ya dəyişdirin.
3. `LAYUNISO` yazın və {{key:Enter}} basın. Qapılar və Qeydlər geri qayıdır.

## Ümumi səhvlər

- **Yeni xətlər səhv qata düşdü.** Çəkməzdən əvvəl hansı nöqtənin dolu olduğunu yoxlayın. Yeni qat əlavə edilən kimi cari olur.
- **Obyekt seçilmir.** Onun qatı kilidlənib, söndürülüb və ya donub.
- **Qat digər proqramda hələ də çap olunur.** DXF R12 "çap etmə" saxlaya bilmir. Çertyojda vərəq olduqda CadCraft parametri özü saxlayır, lakin digər proqramlar həmin qatı çap edəcək.
- **Saxladıqdan sonra qat adları böyük hərflərlə.** DXF R12 adları böyük hərflə saxlayır, belə ki, `Divarlar` `DİVARLAR` olaraq qayıdır və boşluqlar `_` olur. Saxlanılmış DWG adları yazdığınız kimi saxlayır.
- **Qatın adını dəyişmək, birləşdirmək və ya silmək.** {{cmd:RENAME}}, {{cmd:LAYMRG}} və ya {{cmd:LAYDEL}} istifadə edin (həmçinin {{ui:Alətlər}} bölməsində): aşağıya baxın.

## Qatları qruplaşdırın

Siyahını qısa saxlamaq üçün qatları qovluqlara qoyun, məsələn Mövcud, Təklif olunan və Xidmətlər. Hər qovluq açılıb-bağlanır və onun açarları bütün qatlarını birlikdə yandırır və ya söndürür, dondurur və ya kilidləyir. Cari qat heç vaxt söndürülmür.

Qatlar panelində {{ui:Alətlər}} altında kiçik yaşayış işləri üçün hazırlanmış dəst üçün {{ui:Hazır qrupları əlavə et}} seçin, ortaq prefiksi olan qatları qruplaşdırmaq üçün {{ui:Ada görə qruplaşdır}} (`E-Divarlar`, `E-Qapılar`) və ya {{ui:Yeni qrup}} seçin. Qatı qovluğa sürükləyin, ya da cari qat üçün qatların üstündəki siyahıdan istifadə edin. Siyahını daraltmaq üçün {{ui:Qat tapın}} bölməsinə yazın. `LAYGROUP` (`LG`) komanda sətrində eyni işi görür.

Qatların özləri dəyişmir, ona görə digər CAD proqramları onları adi düz siyahı kimi görür. CadCraft qrupları faylda saxlayır.
