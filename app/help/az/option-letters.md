---
title: Komanda seçimlərinə öz hərflərinizi verin
summary: Komandanın seçimlərinə cavab olaraq seçdiyiniz hərflərlə, istənilən dildə, redaktə edə, idxal edə və ixrac edə biləcəyiniz bir mətn faylından cavab verin.
keywords: seçim hərfləri, optionkeys, optkeys, seçim açar sözü, açar söz, yenidən xəritələmə, xəritə, fərdi hərflər, polyar, massiv, P, PO, dil, seçimləri tərcümə et, qısa forma, idxal, ixrac, qeyri-müəyyən
from: 7c8328c6
---

## Nə öyrənəcəksiniz

Komandanın seçimlərinə cavab verən hərfləri necə dəyişmək. Məsələn, {{cmd:ARRAY}} `[Düzbucaqlı/POlyar]` soruşur və Polyar üçün `PO` qəbul edir; siz `P` və ya başqa hərfləri, istəsəniz öz dilinizdə, eyni işə yararsınız.

## Seçimlər necə cavablandırılır

Komanda kvadrat mötərizədə seçimlər göstərəndə yazılacaq hərflər böyük hərflərdir: `POlyar` üçün `PO`, `Çıxış (X)` üçün isə `X`.

Daha az hərf də yaza bilərsiniz. Göstərilən seçimlərdən yalnız birinə uyğun gələn hərf qəbul olunur: `[Düzbucaqlı/POlyar]` ilə tək `P` Polyar deməkdir. İki seçimə uyğun gələrsə, komanda sətri onları göstərir və yenidən soruşur:

```
C ola bilər: COUnt, COLumns. Daha çox hərf yazın.
```

Rəqəmlər heç vaxt təxmin olunmur: yazılan məsafə və ya say həmişə rəqəm kimi oxunur.

## Öz hərflərinizi əlavə edin

Hər komandanın öz daxili hərfləri qalır. Siz onların üstünə öz hərflərinizi əlavə edirsiniz, beləliklə siyahınızda yalnız dəyişdirdikləriniz olur.

1. {{ui:Parametrlər}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Seçim hərfləri}} seçin və {{ui:Redaktə et…}} klikləyin. Və ya {{cmd:OPTIONKEYS}} yazıb {{key:Enter}} basın.
2. {{ui:Əmr}} altında komandanı seçin, məsələn `ARRAY`. Siyahıda seçim soruşan hər komanda var və o, son istifadə etdiyiniz komandadan başlayır.
3. {{ui:Seçim}} altında seçimi seçin. Hər biri öz daxili hərflərini mötərizədə göstərir, məsələn `POlyar (PO)`.
4. {{ui:Sizin hərfləriniz}} sahəsinə istədiyiniz hərfləri yazın, məsələn `P`, və {{ui:Əlavə et (A)}} klikləyin.
5. Seçim indi {{ui:Sizin hərfləriniz}} altında daxili hərfləri ilə və sizinlə görünür. {{ui:Saxla}} klikləyin.

{{cmd:ARRAY}} başladın, obyekt seçin və {{key:Enter}} basın. Sorğu seçimdən sonra sizin hərfinizi göstərir, `POlyar (P)`, və `P` ona cavab verir.

Silmək üçün sətirin sonundakı x-i klikləyin və sonra {{ui:Saxla}}. Seçim yalnız daxili hərflərinə qayıdır.

## Qəbul olunmayan hərflər

Redaktor komanda sətrinin artıq oxuduğu bir şeyi gizlədəcək hərfləri qəbul etmir və səbəbini deyir:

- eyni komandanın başqa seçiminin daxili hərfləri (`ARRAY`-da `R` Polyar üçün, burada `R` Düzbucaqlıdır);
- üç və daha çox hərfli obyekt tutma sözü, məsələn `END`, `MID` və ya `CEN`, və `ALL` və `LAST` sözləri;
- bir komandanın iki fərqli seçimi üçün eyni hərflər.

Siyahıda qırmızı rənglə nəsə göstərilən zaman {{ui:Saxla}} söndürülüb: sətri düzəldin və ya silin, o geri açılacaq. Sorğunun daxili hərfləri həmişə sizinkindən üstündür, belə ki, siyahınız heç vaxt daxili cavabı dayandırmaz. Komanda adına bərabər hərflər, məsələn `L` və ya `C`, qəbul olunur: seçim sorğusunda komanda sətri əmr başlatmır, cavab oxuyur.

Komandanın seçimləri eyni sorğuları paylaşan komandalardan gəlir, buna görə bəzən komanda yalnız bəzi hallarda soruşduğu seçimi də sadalayır.

## Bütün komandalar üçün bir seçim

{{ui:Əmr}} altında {{ui:Hər əmr}} seçin. Seçimlər onda hər komandanın malik olduğu bütün seçimlər olur, məsələn Çıxış və ya Geri qaytar. Orada əlavə etdiyiniz hərflər, komanda o seçimi təklif etdiyi hər yerdə cavab verir. Yalnız bir komanda üçün əlavə edilən hərflər bunlardan üstündür.

## Öz dilinizdə hərflər

Hərflər istənilən əlifbadan ola bilər, beləliklə klaviaturanızı dəyişmədən seçimlərə cavab verə bilərsiniz: {{ui:Hər əmr}} altında Bağla üçün `Ç`, ya da `ARRAY`-da Polyar üçün `Ş` əlavə edin.

CadCraft yalnız ingilis hərfləri ilə gəlir. Sizin siyahınız, sizin və dilinizi bölüşənlərin qalanını qurmasının yoludur, və {{ui:İxrac et}} ötürə biləcəyiniz fayl yaradır.

## Mətn kimi redaktə et

{{ui:Mətn kimi redaktə et}} redaktorda eyni siyahını hər seçim üçün bir sətir kimi göstərir; {{ui:İxrac et}} də bunu saxlayır:

```
ARRAY.PO,  P
*.X,       Q
```

Hər sətir komanda, nöqtə, seçimin daxili hərfləri, vergül və sizin hərfləriniz. Komanda əvəzinə ulduz hər komanda deməkdir. `;` ilə başlayan sətir qeyddir.

## Nə dəyişmir

- Daxili hərflər sizinkilərin yanında işləməyə davam edir.
- Rutinlər və alət düymələri daxili hərfləri istifadə etməyə davam edir, beləliklə yüklədiyiniz heç nə pozulmur. Daxili hərfləri özünüz yazmaq üçün, sizin hərfləriniz mane olduqda, qarşısına alt xətt qoyun: `_PO`.
- Komandanın qısa adı başqa şeydir: bax [Komanda ləqəblərini redaktə et](topic:command-aliases).

## Qəbul olunmayan sətirlər

Mətn kimi redaktə edəndə və ya fayl idxal edəndə redaktor hər problemi sətir nömrəsi ilə sadalayır:

- komanda mövcud deyil (komandanın qısa adı normaldır: `AR.PO` `ARRAY.PO` kimi oxunur);
- sətir `COMMAND.OPTION, LETTERS` formasında deyil;
- hərflərdə boşluq və ya işarə var (yalnız hərflər və rəqəmlər, ən çoxu 16);
- eyni hərflər bir komandanın iki fərqli seçimini cavablandırır.

## İdxal və ixrac

{{ui:İxrac et}} hərflərinizi mətn faylı kimi saxlayır, saxlamaq və ya kimsəyə vermək üçün. {{ui:İdxal et…}} belə faylı oxuyur. Hər ikisi redaktorda və {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Seçim hərfləri}} altındadır.

{{ui:Parametrlər}}-də {{ui:İdxal et…}} seçdiyiniz faylla sizin faylınızı əvəz edir. Toqquşan və ya istifadə oluna bilməyən sətri olan fayl qəbul edilmir; onu görmək üçün redaktoru açın və orada idxal edin. Redaktorda o yalnız qutunu doldurur: {{ui:Saxla}} klikləyənədək heç nə dəyişmir.

## Yenidən yükləmək və ya silmək

Faylınızı yenidən tətbiq etmək üçün {{cmd:REINIT}} yazın və {{key:Enter}} basın. Hərfi silmək üçün onun sətirini silin və {{ui:Saxla}} klikləyin.

## Hərfləriniz hesabınızı izləyir

getcadcraft.com-a daxil olduqda hərfləriniz hesabınızla saxlanılır. Eyni hesabla başqa brauzerdə və ya kompüterdə CadCraft-ı açsanız, onlar özü gəlir; komanda sətri `Option letters from your account` deyir. İki yerdə dəyişdirsəniz, ən yeni nüsxə qalib gəlir və əvəz olunan bir dəfə saxlanılır.

{{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Seçim hərfləri}} onların hansı vəziyyətdə olduğunu göstərir. Daxil olmadan və ya {{ui:Oflayn}} vəziyyətdə onlar bu brauzerdə qalır və daxil olaraq növbəti dəfə saxladığınızda hesabınıza gedir.

Əlaqəli: [Komanda ləqəbləri](topic:command-aliases) · [CadCraft parametrləri](topic:settings) · [Komandalar](topic:commands)
