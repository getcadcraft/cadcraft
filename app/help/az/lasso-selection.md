---
title: Lasso ilə seçmə
summary: Obyektləri seçmək üçün onların ətrafına sərbəst kontur çəkin basıb sürüşdürərək; pəncərə, kəsişmə və ya hasar kimi seçilirlər. Sürüşdürərkən Space ilə keçin.
keywords: lasso, lassomode, sürüşdürmə, sərbəst, seçmə, seçim, pəncərə, kəsişmə, hasar, space, çoxbucaqlı, toxunma, qələm, düzbucaqlı
from: 9ec6154d
---

## Nə öyrənəcəksiniz

Obyektləri onların ətrafını çəkməklə necə seçmək və lazım olanda düzbucaqlını necə geri qaytarmaq.

## Lasso çəkin

1. Bir-birinə yaxın bir neçə xətt və çevrə çəkin.
2. Heç bir əmr işləmədikdə boş bir yerdə siçan düyməsini basın və əvvəlcə **sağa** hərəkət edərək onlardan bəzilərinin ətrafında sürüşdürün.
3. Düyməni buraxın.

Yalnız konturun tam daxilində olan obyektlər seçilir. Sürüşdürərkən kontur bərk xətlə çəkilir: bu pəncərə lassosudur.

## Pəncərə, kəsişmə və hasar

Hansı obyektlərin seçiləcəyi sürüşdürmənin ilk hərəkətindən və {{key:Space}} düyməsindən asılıdır:

| Sürüşdürürsünüz | Lasso | Seçir |
|---|---|---|
| Əvvəlcə sağa | Pəncərə (bərk kontur) | Yalnız **tam daxildə** olan obyektlər |
| Əvvəlcə sola | Kəsişmə (kəsik-kəsik, yaşıl) | Daxildə olan **və** konturun toxunduğu obyektlər |
| Sürüşdürərkən {{key:Space}} basın | Pəncərə, sonra kəsişmə, sonra hasar | Hasar (qapalı olmayan kəsik-kəsik yol): yalnız yolun kəsdiyi obyektlər |

1. Boş bir yerdə basın və əvvəlcə **sola** hərəkət edərək bəzi obyektlərin ətrafında sürüşdürün. Konturun toxunduğu hər şey də seçilir.
2. {{key:Esc}} basın.
3. Yenidən basıb sürüşdürün; düyməni hələ basılı saxlayarkən {{key:Space}} bir dəfə basın. Kontur kəsişməyə çevrilir; hasar üçün {{key:Space}} yenidən basın.

{{key:Shift}} düyməsini buraxarkən isə obyektlər seçimdən çıxarılır (Parametrlərdə "Obyektlərə klik: Əlavə edir" seçimi ilə).

## Əmr daxilində

Lasso CadCraft-ın `Select objects` soruşduğu hər yerdə işləyir: onu çəkin, sonra bitirmək üçün {{key:Enter}} basın. {{cmd:STRETCH}} kəsişmə lassosunu öz pəncərəsi kimi qəbul edir, belə ki, çertyojun L formalı hissəsini bir dəfəyə uzada bilərsiniz.

{{cmd:TRIM}} və {{cmd:EXTEND}} sürüşdürməni fərqli istifadə edir: orada yol kəsdiyi hər parçanı kəsir (və ya uzadır). Baxın: [Kəsmək və uzatmaq](topic:trim-and-extend).

## Düzbucaqlı

Boş yerdə klik, hərəkət və ikinci klik həmişə düzbucaqlı pəncərəni (soldan sağa) və ya kəsişməni (sağdan sola) çəkir.

Sürüşdürmənin yenidən düzbucaqlı çəkməsi üçün {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Sürüşdürərək seçmə}} bölməsini açın və {{ui:Düzbucaqlı}} seçin, ya da {{cmd:LASSOMODE}} yazın, sonra `0`. Lasso üçün {{cmd:LASSOMODE}} yazın, sonra `1`. Seçim bu brauzerdə saxlanılır.

:::touch
Barmaqla və ya qələmlə eyni şəkildə sürüşdürün. Sadə toxunuş hələ də bir obyekt seçir.
:::

## Ümumi səhvlər

- **Heç nə seçilmədi.** Lasso pəncərə idi və heç nə tam daxildə deyildi. Sürüşdürməyə sola başlayın və ya sürüşdürərkən {{key:Space}} basın.
- **Sürüşdürmə tutacağı hərəkət etdirdi.** Seçilmiş obyektin tutacağına basmaq tutacağı hərəkət etdirir. Lassonu boş bir yerdən başlayın.
- **Space əmri bitirdi.** {{key:Space}} lassonu yalnız düymə basılı olduqda dəyişir; əks halda bu Enter-dir.
