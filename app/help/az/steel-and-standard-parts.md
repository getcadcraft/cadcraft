---
title: Polad kəsiklərini və standart detalları yerləşdirin
summary: Polad kəsiklərini, fasadları və 3D elementləri dərc olunmuş kəsik cədvəllərindən çəkin, boltları, qaykaları, şaybaları, pinləri, podşipnikləri, açarları və dişliləri standartlarından yerləşdirin və onları detallar siyahısında sadalayın.
keywords: polad, kəsik, profil, forma, W forma, geniş flanşlı, I-profil, kanal, bucaq, hss, boru, pipe, ipe, hea, heb, upn, tir, sütun, element, fasad, aisc, en 10365, bolt, vint, qayka, şayba, pin, dowel, podşipnik, açar, açar yuvası, dişli, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standart detallar, detallar siyahısı, material siyahısı, bom, steelmember, partslist
from: 547c1048
---

Kitabxananın **{{ui:Standart}}** sekmesində iki növ şey var, burada dərc olunmuş cədvəllərdən yaradılır (heç nə yüklənmir):

- **Polad kəsikləri**: 1,335 ölçü. W, S, C, L, HSS və Pipe AISC Shapes Database v16.0-dan; IPE, HEA, HEB və UPN EN 10365:2017-dən. DetailCraft eyni cədvəldən istifadə edir.
- **Standart detallar**: altıbucaqlı başlı vintlər (ISO 4017), altıbucaqlı boltlar (ISO 4014), altıbucaqlı qaykalar (ISO 4032), sadə şaybalar (ISO 7089), düym altıbucaqlı boltlar və qaykalar (ASME B18.2.1 və B18.2.2), paralel pinlər (ISO 2338), dərin yivli kürə podşipniklər (ISO 15), paralel açarlar (DIN 6885-1) və düz dişli çarxlar (modullar ISO 54-dən).

Buradakı hər şey CC0 altında paylaşılır: istənilən məqsədlə istifadə edin, istinad tələb olunmur.

## Polad kəsiyi yerləşdirin

1. Kitabxananı açın ({{ui:Kitabxana}} Bloklar qrupunda, və ya `LIB` yazın) və {{ui:Standart}} sekmesini klikləyin.
2. Birinci siyahıdan ailəni seçin, məsələn {{ui:W profilləri}}. Ölçüləri daraltmaq üçün axtarış qutusuna yazın: `W12` bütün W12-ləri göstərir.
3. {{ui:Bu kimi yerləşdir}} bölməsində seçin:
   - {{ui:Kəsik}}: en kəsik, mərkəzi yerləşdirmə nöqtəsindədir.
   - {{ui:Yüksəklik (kote)}}: elementi yandan görünən, {{ui:Uzunluq (mm)}} nə deyirsə qədər, sol ucunun ortasından.
   - {{ui:3D element}}: 3D sekmədə bərk cisim (aşağıda).
4. Ölçünün kartında {{ui:Yerləşdir}} klikləyin, sonra harada olmalı olduğunu klikləyin, kitabxana elementi üçün olduğu kimi.

Kəsik və ya fasad blok olur. Atributları ölçünü, mənbə cədvəlini, (fasad üçün) uzunluğu və doldura biləcəyiniz materialı saxlayır.

:::note
S profilləri, kanallar və UPN orta qalınlıqda paralel flanşlarla, bucaqlar isə kvadrat künclərlə çəkilir: real flanşlar meyllidir və künclər yumrudur. W, IPE, HEA və HEB kök filetlərinə, HSS isə künc radiuslarına malikdir.
:::

## 3D element yaradın

{{ui:3D element}} seçin və {{ui:Yerləşdir}} klikləyin, və ya əmr sətrində {{cmd:STEELMEMBER}} (`SMEMBER`) yazın:

1. `Kəsik ölçüsü` sorğusunda {{key:Enter}} basın — göstərilən ölçü qəbul olunsun — və ya birini yazın, məsələn `HSS6x6x1/4` və ya `IPE300`.
2. Başlanğıc nöqtəsini, sonra son nöqtəni klikləyin. Element onlar arasında gedir, yerdə oturur.
3. Sütun üçün `C` yazın, baza nöqtəsini klikləyin və hündürlüyünü yazın.

Element 3D sekmədə qapalı bərk cisimdir. Orada digər bərk cisim kimi köçürün və ya kopyalayın. {{key:Mod+Z}} onu yenidən götürür.

## Standart detal yerləşdirin

1. {{ui:Standart}} sekmesində ailəni seçin, məsələn {{ui:Altıbucaqlı başlı vintlər}}.
2. Vint, bolt, pin və ya açar üçün {{ui:Uzunluq (mm)}} yazın (düym ailələri üçün düymlə). Dişli üçün {{ui:Dişlər}}, {{ui:Üz eni (mm)}} və {{ui:Deşik (mm)}} yazın. Göstərilən adi dəyəri saxlamaq üçün qutunu boş qoyun.
3. Ölçüdə {{ui:Yerləşdir}} klikləyin və harada olacağını klikləyin.

Vintlər, boltlar və pinlər yandan çəkilir, başın dayaq üzü yerləşdirmə nöqtəsindədir; qaykalar, şaybalar, podşipniklər və dişlilər üz-üzə; açarlar yuxarıdan. Yivlər adi üsulla çəkilir: kök incə xətt, yivin sonu qalın xətt. Dişlilər diş-diş deyil, uc dairəsi, bölgü dairəsi və kök dairəsi kimi çəkilir.

Hər detalın bloku növünü, standartını, ölçüsünü, uzunluğunu və materialını atribut kimi saxlayır, və çəkisini nominal polad forma əsasında. Materialı **{{ui:Xassələr}}** panelində dəyişin.

Eyni detallar kitabxanada elementlər kimi də var, və PartCraft onları parametrik detallar kimi açır ({{ui:Standart detal}} onun Fayl qrupundadır).

## Detallar siyahısı yaradın

- Kitabxanada {{ui:Detallar siyahısı}} klikləyin: çertyojdakı hər standart detal və polad kəsiyi növ, standart, ölçü, uzunluq və material üzrə qruplaşdırılmış, miqdar və element nömrələri ilə. {{ui:CSV yüklə}} onu cədvəl proqramı üçün saxlayır.
- Çəkmək üçün {{cmd:PARTSLIST}} (`PLIST`) yazın, cədvəlin yuxarı sol küncünü klikləyin və adi mətn hündürlüyü üçün {{key:Enter}} basın və ya birini yazın.

Siyahı blokların atributlarından oxunur, buna görə çertyoj DWG və ya DXF kimi saxlanıb yenidən açıldıqdan sonra da düzgündür.

## Ümumi səhvlər

- **"… adlı polad kəsik yoxdur"**: ölçünü {{ui:Standart}} sekmesinin siyahıladığı kimi yazın: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element 3D sekmədədir, plana deyil.** {{cmd:STEELMEMBER}} bərk cisim yaradır; onu görmək üçün 3D sekmesini açın. Poladı planda göstərmək üçün {{ui:Kəsik}} və ya {{ui:Yüksəklik (kote)}} da yerləşdirin.
- **Uzunluq diapazondan kənardır.** Bolt başından uzun olmalıdır, açar enindən uzun olmalıdır. Kartların altındakı xətt rədd edilən dəyəri göstərir.
