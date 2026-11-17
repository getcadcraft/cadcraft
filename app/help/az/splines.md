---
title: Splaynlər və polixəttlər: SPLINE, SPLINEDIT, PEDIT
summary: Nöqtələrdən və ya idarəetmə çoxbucaqlısından keçən hamar əyri çəkin, onun uyğunluq və idarəetmə nöqtələrini redaktə edin, polixəttləri redaktə edin (birləşdirmə, bağlama, en, uyğunlaşdırma, splayn, əyriliyi aradan qaldırma) və ya splaynı polixəttə çevirin.
keywords: splayn, splinedit, spl, spe, pedit, pe, uyğunluq nöqtələri, idarəetmə nöqtələri, çəkilər, nurbs, polixətt redaktəsi, birləşdirmə, uyğunluq əyrisi, əyriliyi aradan qaldırma, polixəttə çevirmə, dəqiqlik, toxunan, əyri, uyğunluq tolerantlığı
from: d31f72d8
---

## Nə hazırlayacaqsınız

Beş nöqtədən keçən əyri, sonra eyni əyrinin üç üsulla redaktəsi və üç xəttdən qurulmuş polixətt.

## Nöqtələrdən keçən splayn çəkin

1. `SPL` yazın və {{key:Enter}} basın.
2. Əyrinin keçməli olduğu nöqtələri klikləyin və ya yazın: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Sonuncudan sonra {{key:Enter}} basın.
3. {{ui:Başlanğıc toxunanı}}: əyrinin ayrılmalı olduğu nöqtəni klikləyin, ya da qərarı ona vermək üçün {{key:Enter}} basın. Son toxunan üçün də eyni edin.

Əyri hər nöqtədən keçir. Onu bağlamaq üçün {{key:Enter}} əvəzinə `C` yazın (əyri birinci nöqtəyə qayıdır). Çəkərkən {{key:U}} (`Geri qaytar`) son nöqtəni geri götürür.

### İdarəetmə çoxbucaqlısından çəkin

Birinci sorğuda `M` yazın, sonra `C` ([İdarəetmə təpələri (C)]) və 1-dən 5-ə qədər dərəcə (adətən 3). İndi seçdiyiniz nöqtələr əyrini onlara doğru çəkən çoxbucaqlının künclərinə çevrilir; əyri birincidə başlayır və sonuncuda bitir. Qapalı olan dövrə vurur və birləşmədə künc olmur.

### Polixətti splayna çevirin

Birinci sorğuda `O` (Obyekt) yazın və polixətləri və ya xətləri seçin. Onlar təpələrindən keçən splaynlara çevrilir; orijinallar silinir.

## Splayni redaktə edin

Onu seçin və `SPE` yazın (və ya `SPE` yazıb onu klikləyin). Tutacaqlar uyğunluq nöqtələrini göstərir (və ya heç birinə malik olmayan splaynın idarəetmə nöqtələrini): əyrini yenidən formalaşdırmaq üçün birini sürüşdürün. Sorğuda:

- **Uyğunluq məlumatları** (nöqtələrdən keçən splayn): [Əlavə et (A)] uyğunluq nöqtəsi əlavə edir (yerini klikləyin), [Sil (D)] birini silir (yanına klikləyin), [Köçür (M)] birini köçürür (yanına klikləyin, sonra yeni yerinə klikləyin), `T` son toxunanları təyin edir, [Təmizlə (P)] uyğunluq nöqtələrini təmizləyir, beləliklə splayn bundan sonra idarəetmə nöqtələri ilə redaktə olunur.
- **Təpəni redaktə et**: [Əlavə et (A)] əyrini dəyişmədən idarəetmə nöqtəsi əlavə edir, [Köçür (M)] birini köçürür, [Çəki (W)] birinə **çəki** verir (1-dən böyük olduqda əyrini ona yaxınlaşdırır, 1-dən kiçik olduqda buraxır).
- **Açıq** və ya **Qapalı**, və **Tərsinə çevir** (əyri digər istiqamətdə gedir).
- **Polixəttə çevir** (`P`): splayn polixəttə çevrilir; dəqiqlik hər aralığa neçə seqment düşdüyüdür (adətən 10).
- **Geri qaytar** son dəyişikliyi geri götürür; **[Çıxış (X)]** bitirir.

{{ui:Xassələr}} splaynın dərəcəsini, neçə uyğunluq və idarəetmə nöqtəsi olduğunu, uzunluğunu göstərir və onu açıb-bağlamağa imkan verir.

## Polixətti redaktə edin

Polixətti seçin və `PE` yazın. Seçdiyiniz xətt, qövs və ya splayn əvvəlcə çevriləcək polixətt kimi təklif olunur (splayn dəqiqlik soruşur).

- **Bağla** / **Aç** ucları birləşdirir və ya ayırır.
- **Birləşdir** polixəttin ucuna toxunan xətt, qövs və polixətləri əlavə edir. `Boşluq məsafəsi` ucların nə qədər aralı ola biləcəyini və hələ də birləşdiyini göstərir (0 onların tam üst-üstə düşməli olduğu deməkdir).
- **Eni** bütün polixətt üçün bir en verir (0 onu silir).
- **Uyğunlaşdır** polixətti təpələrindən keçən hamar əyriyə dəyişir; **Splayn** onları izləyən kubik B-splayn ilə (birinci və son təpədə başlayır və bitir, digərlərinə yaxın qalır) əvəz edir. Hər ikisi qısa seqmentli polixəttə çevrilir və orijinal künclər saxlanılır, beləliklə **Əyriliyi aradan qaldır** onları geri gətirir.
- **Xətt növünün yayılması** deyir ki, kəsikli xətt növü bütün polixətt boyu davam edir, yoxsa hər təpədə yenidən başlayır.
- **Tərsinə çevir** təpələrinin sırasını dəyişir. **[Çoxlu (M)]** (birinci sorğuda `M`) eyni seçimlərlə bir neçə polixətti redaktə edir.

Polixəttin təpələrini {{ui:Xassələr}}də və ya tutacaqlarla redaktə etmək olduğu kimi qalır: PEDIT təpə redaktoru yoxdur.

## Fayllarda

DWG və DXF 2000 splaynı splayn kimi saxlayır: dərəcə, idarəetmə nöqtələri, düyünlər, çəkilər, uyğunluq nöqtələri və toxunanlar. Açdığınız və dəyişmədiyiniz splayn elə olduğu kimi yenidən yazılır. DXF R12-də splayn yoxdur: o, əyri boyunca polixətt kimi saxlanılır və tarixçə neçə olduğunu göstərir.

Ofset, Kəs, Uzat, Filet, Qır və Birləşdir splaynlarda işləmir. Splaynı {{cmd:EXPLODE}} edin və ya {{cmd:PEDIT}} edin ki, bu əmrləri qəbul edən polixətt alın.

## Ümumi səhvlər

- **Əyri yaxın nöqtələr arasında həddən artıq əyilir.** Nöqtələrdən keçən əyri nöqtələrin əyildiyi yerdə bükülür. Daha az nöqtə və ya idarəetmə çoxbucaqlısı istifadə edin.
- **"Bu splayn deyil."** SPLINEDIT yalnız splaynları qəbul edir; {{cmd:PEDIT}} polixətləri redaktə edir.
- **Bağlı uyğunluq splaynı başqa proqramda bir qədər fərqli formada olur.** CadCraft onu birinci nöqtədə bir hamar birləşmə ilə bağlayır; digər proqram periodik əyri ilə bağlaya bilər. İdarəetmə nöqtəli bağlı splayn hər ikisində eynidir.
