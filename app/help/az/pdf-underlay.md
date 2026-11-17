---
title: PDF altlıqları və PDF idxalı
summary: Çertyojunuzun altına PDF səhifəsi qoyun ki, onu izləyib çap edəsiniz, və ya səhifənin xətlərini və mətnini çertyoj obyektlərinə çevirin.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, altlıq, izləmə, pdf idxal et, skan, mərtəbə planı, solğunlaşdırma, kəsmə, qat, tutma, pdf aç
from: aa301d0f
---

## PDF səhifəsini gətirməyin iki yolu

- **Əlavə et** ({{cmd:PDFATTACH}}) PDF-i çertyojunuzun altında şəkil kimi saxlayır. Onu izləyirsiniz, xətlərinə tutulursunuz, solğunlaşdırırsınız, kəsirsiniz, və o, vərəqlə birlikdə çap olunur. Çertyojda yalnız faylın adı qalır.
- **İdxal et** ({{cmd:PDFIMPORT}}) səhifənin xətlərini, əyrilərini, doldurmalarını və mətnini PDF-in adına görə adlanmış qatlarda adi çertyoj obyektlərinə çevirir. Onlar sizindir, redaktə edə bilərsiniz, və bundan sonra PDF lazım deyil.

{{ui:Aç}} ilə PDF açanda hansını istədiyiniz soruşulur.

## Səhifəni əlavə edin

1. `PDFATTACH` (və ya `PDFATT`) yazın və PDF seçin. Bir neçə səhifəsi varsa, səhifə nömrəsini yazın.
2. Daxiletmə nöqtəsini klikləyin (səhifənin aşağı-sol küncü).
3. Səhifənin həqiqi ölçüsü üçün {{key:Enter}} basın, və ya miqyas yazın: hər PDF nöqtəsi üçün çertyoj vahidləri (nöqtə 1/72 in-dir, buna görə millimetrlik çertyojda 0.3528 in).
4. Dönmə olmasın üçün {{key:Enter}} basın, və ya bucaq yazın.

Səhifə blok istinadı kimi bir obyektdir: köçürün, fırladın, miqyaslandırın, surətini çıxarın, silin və qata qoyun. Onun qatını söndürsəniz, yox olur. Yaxınlaşdırsanız, səhifə yenidən kəskin çəkilir.

## İzləyin

{{ui:Tutma}} aktiv olduqda kursor PDF-in öz xətlərinə tutulur: son nöqtələr, orta nöqtələr və kəsişmələr (və {{ui:Ən yaxın}} o tutma aktivdirsə). Səhifədə hərflər kimi çəkilmiş mətnə tutulma yoxdur.

## Tənzimləyin

- `PDFADJUST`: **Solğunlaşdırma** (0-dan 80 faizə), **Kontrast** (0-dan 100-ə), **Monoxrom**, və **Gizlət/göstər** — silmədən gizlətmək üçün.
- `PDFCLIP`: səhifənin yalnız düzbucaqlı və ya çoxbucaqlı hissəsini göstərin; **Sil** kəsməni silir.
- `PDFLAYERS`: PDF-in öz qatları ola bilər. Komanda onları sadalayır; həmin altlıq üçün qatı açmaq və ya bağlamaq üçün nömrə yazın. Faylda söndürülmüş qatlar söndürülmüş başlayır.

## Çap edin və saxlayın

PLOT səhifəni xətləri, doldurmaları və mətni kimi çap edir (buna görə kəskin qalır və axtarıla bilir). PDF-in içindəki şəkillər ekranda göstərilir, lakin hələlik çap olunmur.

DWG və ya DXF 2000 altlığı bir keçid kimi saxlayır: faylın adı, səhifə, yeri, miqyası, dönməsi, kəsməsi, solğunluğu və kontrastı. PDF özü çertyojda yoxdur. Çertyojı yenidən açın, `PDF` yazın və faylı yenidən seçin; bunu edənə qədər səhifələr çərçivə kimi göstərilir və yalnız sonra həqiqi ölçüsünü alır. Köhnə DXF (R12) altlıq saxlamır: yalnız çərçivəni və adı saxlayır. Saxlanılmış kəsmənin və miqyasın digər proqramlarda necə oxunduğu hələ yoxlanılmayıb.

## Səhifəni idxal edin

1. `PDFIMPORT` (və ya `PDFIM`) yazın və PDF və səhifəni seçin.
2. Səhifənin aşağı-sol küncünün gedəcəyi yeri klikləyin.
3. Həqiqi ölçü üçün {{key:Enter}} basın, miqyas yazın, və ya **İki nöqtə** seçin: səhifə həqiqi ölçüdə çəkilir, sonra məsafəsini bildiyiniz iki nöqtəni klikləyirsiniz və həqiqi məsafəni yazırsınız; hər şey buna uyğun miqyaslanır.

Xətlər xətt və polixətt olur, dairələr və qövslər tanınır, doldurulmuş fiqurlar bərk ştrixlamaya çevrilir, və mətn `-TEXT` ilə bitən qatda mətn olur. Bu bir geri qaytarma addımıdır. PDF-dəki şəkillər idxal olunmur: onların yerinə səhifəni əlavə edin. Skan (yalnız şəkildən ibarət səhifə) idxal ediləcək xətlərə malik deyil.

PDF-lər etibarsız fayllar kimi oxunur: heç bir skript işə düşmür, həddindən böyük səhifə kəsilir və bu bildirilir.
