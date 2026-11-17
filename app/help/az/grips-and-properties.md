---
title: Tutacaqlar və Xassələr ilə redaktə
summary: Obyektləri tutacaqları ilə uzadın, köçürün və ölçüsünü dəyişin, Xassələr panelində dəqiq uzunluqları, radiusları, bucaqları və koordinatları yazın.
keywords: tutacaqlar, xassələr, uzatma, uzunluq, radius, koordinatlar, redaktə, sürətli xassələr, xassələr palitrası, dəyişdir, qat, rəng
from: f22541ba
---

## Nəyi öyrənəcəksiniz

Əmr olmadan obyekti dəyişməyin iki sürətli yolu: onun **tutacaqlarını** sürükləyin, ya da sağdakı **Xassələr** panelində yeni dəyərlər yazın.

## Tutacaqlar

Heç bir əmr işləmədikdə obyektləri (eyni anda 200-ə qədər) seçdikdə onların üzərində kiçik kvadratlar görünür. Bunlar tutacaqlardır:

| Obyekt | Tutacaqlar |
|---|---|
| Xətt | Hər iki uc və orta nöqtə (orta nöqtə bütün xətti köçürür) |
| Çevrə | Mərkəz (köçürür) və çevrə üzərində dörd nöqtə (radiusu dəyişir) |
| Qövs | Mərkəz və hər iki uc (başlanğıc və son nöqtəni dəyişir) |
| Polixətt | Hər təpə nöqtəsi |
| Mətn, nöqtə, blok istinadı | Daxil etmə nöqtəsi |
| Ellips | Mərkəz |
| Ölçü | Təyin edən nöqtələr və ölçü xəttinin mövqeyi |
| Görünüş pəncərəsi | Mərkəz (köçürür) və dörd künc (ölçüsünü dəyişir) |

### Tutacağı köçürün

1. Xətt çəkin və üzərinə klikləyin. Üç tutacaq görünür.
2. Bir ucdakı tutacağa klikləyin. Status sətrində yazılır: "Bu tutacağın gedəcəyi yerə klikləyin (ləğv etmək üçün Esc). Tutma və Ortoqonal tətbiq olunur."
3. Xaç nişanını hərəkət etdirin. Önizləmə onu izləyir.
4. Yeni mövqeyə klikləyin və ya başqa obyektin nöqtəsinə tutulub klikləyin.

Uc hərəkət edir, xəttin qalan hissəsi yerində qalır. Tutacağa basıb sürükləyə və istədiyiniz yerdə buraxa bilərsiniz.

:::note
Tutacaq üçün koordinat yaza bilməzsiniz. Dəqiq mövqe üçün nöqtəyə tutulun və ya dəyəri Xassələrdə yazın.
:::

Tutacağın köçürülməsini ləğv etmək üçün {{key:Esc}} basın və ya sağ klikləyin.

## Xassələr

Sağ panel seçilmiş obyektin xassələrini göstərir.

1. Xəttə klikləyin. Panelin başlığında "Xətt" yazılır.
2. {{ui:Uzunluq}} sahəsinə klikləyin, `2500` yazın və {{key:Enter}} basın.

Xətt indi tam 2500 uzunluğundadır, başlanğıc nöqtəsini və bucağını saxlayır. {{key:Enter}} və ya başqa yerə klik dəyəri tətbiq edir; {{key:Esc}} köhnə dəyəri qaytarır. Hər dəyişiklik bir geri qaytarma addımıdır, hətta çox obyekt eyni anda dəyişdikdə də.

Sahələr ifadələr qəbul edir (`=2*45`) və vahidlərlə uzunluqlar (`3'6"`, `900mm`), hər nöqtənin X, Y və Z-i var, bir neçə obyekt birlikdə dəyişdirilə bilər. Bütün bunlar [Xassələr paneli](topic:properties-panel) səhifəsindədir.

## Ümumi səhvlər

- **Tutacaqlar görünmür.** Əmr işləyir (Esc basın), ya da 200-dən çox obyekt seçilib, ya da obyekt kilidli qatdadır.
- **Tutacaq səhv yerə gedib.** Tutma onu tutub. Klik zamanı {{key:Shift}} saxlayın ki, tutmalar nəzərə alınmasın.
- **Xassələrdə yazmaq heç nə etmədi.** Tətbiq etmək üçün {{key:Enter}} basın və ya başqa yerə klikləyin. Qəbul edilməyən dəyər (sıfır və ya mənfi uzunluq və radius, dəyər olmayan mətn) sahəni qırmızı edir və səbəbini deyir.
- **Xassələr sahəsinə yazılan hərflər.** Sahədə kursor olanda düymələr orada yazılır. {{key:Enter}} və ya {{key:Esc}} basın, sonra əmri yazın.
