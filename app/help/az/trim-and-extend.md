---
title: Kəsmək və uzatmaq
summary: Xətləri onları kəsən digərlərinə qədər kəsin və digərlərinə çatmaq üçün uzadın, bir-bir və ya yola sürükləyərək bir çox parçanı birdən.
keywords: trimextendmode, pəncərə ilə sürükləmə, kəsmək, uzatmaq, tr, ex, sürətli kəsmə, sürükləmə, sərbəst əl, yol, çəpər, kəsişmə, shift, kəsən kənarlar, sərhəd kənarları, edgemode, rejim, standart, sürətli, silmək, önizləmə, divarlar, təmizləmə
from: 25fbc5bd
---

## Nəyi öyrənəcəksiniz

{{cmd:TRIM}} və {{cmd:EXTEND}} necə işləyir və sürətli yollar: bir çox parçanın içindən birdən sürükləyin, {{key:Shift}} saxlayaraq kəsmə və uzatma arasında keçin və klikləməzdən əvvəl nəyin gedəcəyini görün.

## Bir parçanı kəsin

1. Uzun üfüqi xətt və onun üzərində kəsişən iki qısa xətt çəkin.
2. Yazın `TR` və {{key:Enter}} basın. Tarixçə deyir: `Cari parametrlər: Sürətli rejim, kənarlar: uzatma yoxdur`.
3. Pointeri iki qısa xətt arasındakı uzun xətt üzərində saxlayın. Həmin parça boz və punktir olur: gedəcək budur.
4. Klikləyin. Parça yox olur.
5. Komandanı bitirmək üçün {{key:Enter}} basın.

Sürətli rejimdə (standart) görünən hər obyekt kəsən kənardır, ona görə əvvəlcə kənarları seçmək lazım deyil. Silmək istədiyiniz parçaya klikləyin. Heç nə ilə kəsişməyən obyekt tam silinir və tarixçə bunu deyir.

## Bir sürüşdürmədə çox parçanı kəsin

1. Uzun üfüqi xətt və onu kəsən on qısa şaquli xətt çəkin.
2. Yazın `TR` və {{key:Enter}} basın.
3. Uzun xəttin üstündə, ilk şaquli xəttin solunda siçan düyməsini basın və uzun xəttin üstündən bütün on xəttin üzərinə sürükləyin.

Sürükləyərkən yol punktir xətt kimi görünür və keçdiyi hər parça boz olur. Buraxın: yuxarıdakı on parça bir addımda kəsilir. Hamısını birdən geri qaytarmaq üçün `U` yazın və {{key:Enter}} basın.

:::tip
Boş iki yeri də klikləyə bilərsiniz: aralarındakı xətt sürüklənmiş yol kimi işləyir. Bunun əvəzinə bir sıra nöqtəni klikləmək üçün `F` (Çəpər) yazın, sonra {{key:Enter}} basın.
:::

:::touch
Barmağınızı eyni yolla sürüşdürün. Parçaya toxunmaq onu kəsir.
:::

## Əvəzinə uzadın, Shift ilə

1. Şaquli xətt və onun soluna dayanan beş qısa üfüqi xətt çəkin.
2. Yazın `TR` və {{key:Enter}} basın.
3. {{key:Shift}} saxlayın. Qısa xəttin üzərində pointer saxlayın: onun uzanacağı hissə boz və punktir görünür.
4. Hələ də {{key:Shift}} saxlayaraq beş qısa xətti keçərək aşağı sürükləyin.

İndi beşi də şaquli xəttə qədər uzanır. {{key:Shift}} {{cmd:EXTEND}} (`EX`) -də tərsinə işləyir: klik uzadır, {{key:Shift}}+klik kəsir. Uzatma klikləndiyiniz və ya yolun kəsişdiyi yerə ən yaxın ucu uzadır.

## Pəncərə daxilində kəsin

1. Yazın `TR` və {{key:Enter}} basın.
2. Yazın `C` və {{key:Enter}} basın.
3. Silinəcək parçaların ətrafında iki künc klikləyin.

Pəncərənin ən azı qismən içərisində olan hər parça kəsilir.

Yalnız sürükləməklə pəncərə almaq üçün, `C` yazmadan: {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Kəsmək və uzatmaq üçün sürüşdürmə}} › {{ui:Pəncərə}}. Sonra boş yerdə basıb sürüklədikdə qutu çəkilir və ona toxunan hər parça kəsilir (və ya {{cmd:EXTEND}}-də və ya {{key:Shift}} ilə uzadılır). {{ui:Yol}} (başlanğıc) sərbəst əl yolunu geri qaytarır. TRIM-in başındakı parametr sətri hansının aktiv olduğunu deyir.

## Kəsən kənarları seçin (Standart rejim)

Bəzən yalnız bir xətt kəsməlidir, məsələn bir çox xəttin kəsdiyi divar üzü.

1. Yazın `TR` və {{key:Enter}} basın.
2. Yazın `O` (Rejim) və {{key:Enter}} basın, sonra `S` (Standart) yazın və {{key:Enter}} basın.
3. `Kəsən kənarları seçin` sorğusunda kənar xətlərə klikləyin (və ya pəncərə sürükləyin), sonra {{key:Enter}} basın. Heç nə seçilmədən {{key:Enter}} basılsa hər obyekt kənar olur.
4. Silinəcək parçalara klikləyin və ya sürükləyin.

Yalnız seçilmiş kənarlar kəsir və heç bir kənarla kəsişməyən obyekt toxunulmaz qalır. Rejim səhifəni bağlayana qədər saxlanılır; geri qayıtmaq üçün `O` yazın, sonra `Q` (Sürətli). {{cmd:TRIMEXTENDMODE}} onu başlamazdan əvvəl təyin edir, adlı dəyişən kimi: `0` Standart, `1` Sürətli. `T` (Kəsən kənarlar) istənilən vaxt yeni kənarlar seçir; {{cmd:EXTEND}}-də bu `B` (Sərhəd kənarları) dır.

## Çata biləcək kənarlar

1. Yazın `TR` və {{key:Enter}} basın.
2. Yazın `E` (Kənar) və {{key:Enter}} basın, sonra `E` (Uzatma) və {{key:Enter}} basın.

İndi qısa qalan kəsən xətt və ya qövs, uzun olsaydı nə qədər gedəcəksə, o qədər sayılır: qısa xətt uzun olsaydı kəsəcəyi yerdə kəsir. Geri qayıtmaq üçün `E` yazın, sonra `N` (Uzatma yoxdur). Bu EDGEMODE 1 və 0 ilə eynidir.

## Pəncərəsiz silin

`R` (Silmək) yazın və {{key:Enter}} basın, silinəcək obyektləri seçin və {{key:Enter}} basın. TRIM davam edir.

## Tez-tez edilən səhvlər

- **Bütün xətt yoxa çıxdı.** Sürətli rejimdə heç nə ilə kəsişməyən obyekt silinir. Geri qaytarmaq üçün `U` yazın və ya Standart rejimə keçin (`O`, `S`).
- **"Orada kəsiləcək heç nə yoxdur: seçilmiş kənar həmin obyekti kəsmir."** Standart rejim yalnız seçdiyiniz kənarlarda kəsir. Yenidən seçmək üçün `T` yazın.
- **"Həmin istiqamətdə sərhəd yoxdur."** Uzatma qarşıda heç nə tapmadı. Böyüməli olan uca yaxın klikləyin, ya da qısa qalan sərhədlər üçün `E` (Kənar, Uzatma) açın.
- **Sürükləmə lasso çəkdi.** Sürükləmə yalnız TRIM və ya EXTEND obyekt soruşduqda kəsir. Heç bir komanda işləmədikdə sürükləmə seçir (bax [Lasso ilə seçim](topic:lasso-selection)).
- **Yalnız xətlər, qövslər, dairələr və polixətlər kəsilə bilər.** Kəsməzdən əvvəl bloku partlatın.
