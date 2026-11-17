---
title: Başlıq bloku və görünüş pəncərələri ilə vərəq qurun
summary: Sərhədi və başlıq bloku olan vərəq (layout) yaradın, görünüş pəncərəsinin miqyasını təyin edin, detal üçün ikinci görünüş pəncərəsi əlavə edin və başlıq blokunu doldurun.
keywords: layout, vərəq, kağız fəzası, viewport, mview, vpview, başlıq bloku, miqyas, kağız ölçüsü, sərhəd, vports, çap miqyası, mspace, pspace, model fəzası, görünüş pəncərəsinə daxil olun, görünüş pəncərəsinə iki dəfə klikləyin
from: 45a45de8
---

## Nə yaradacaqsınız

Başlıq bloku olan A3 vərəq, bütün plan 1:100-də bir görünüş pəncərəsində, və künci 1:20-də göstərən ikinci görünüş pəncərəsi.

## Model və vərəqlər

Binanı {{ui:Model}} nişanında tam ölçüdə çəkirsiniz: millimetrlə 6 m-lik divar 6000 vahid uzunluqdadır. **Vərəq** (layout) millimetr və ya düymlə ölçülən kağız parçasıdır. **Görünüş pəncərəsi** vərəqdə modeli miqyasla göstərən kəsilmiş pəncərədir.

## Başlamazdan əvvəl

1. Model nişanında plan açın və ya çəkin.
2. {{key:Esc}} basın ki heç nə seçilməsin.
3. {{ui:Cari parametrlər}} bölməsində {{ui:Vahidlər}} dəyərini çəkdiyiniz vahidə təyin edin, məsələn {{ui:Millimetr}}.

Vahidlər vacibdir: 1:100 kimi görünüş miqyası bildirir ki, kağızda bir millimetr həqiqi 100 millimetri göstərir, buna görə CadCraft bir çertyoj vahidinin nə olduğunu bilməlidir. {{ui:Vahidsiz}} kimi saxlanılmış çertyoj kağızın vahidində qəbul olunur (ISO kağızda millimetrlərdə, ABŞ kağızında düymlərdə).

## Vərəqi yaradın

1. Çertyojun altındakı nişanların sağındakı {{ui:+}} düyməsinə klikləyin, ya da `LAYOUT` yazın və {{key:Enter}} basın, ya da {{ui:Yeni vərəq}} üzərinə klikləyin.

`Layout1` adlı yeni nişan açılır. Daha tünd masada vərəq görməlisiniz: sərhəd, aşağı-sağ küncdə başlıq bloku və üstündə bütün modeli ən böyük standart miqyasda, sığan, göstərən bir görünüş pəncərəsi. Tarixçə kağızı adlandırır: metrik və vahidsiz çertyojlar üçün ISO A3, düym və ya fut çertyojlar üçün Tabloid (ANSI B).

2. Vərəqi ekrana sığdırmaq üçün {{ui:Hüdudlar}} üzərinə klikləyin.

## Kağızı seçin

1. {{key:Esc}} basın ki heç nə seçilməsin. Sağ panelin başlığı "Vərəq: Layout1" yazır.
2. {{ui:Ad}} sahəsində `A-101 Plan` yazın və {{key:Enter}} basın. Nişan adlanır.
3. {{ui:Kağız}} sahəsində ölçü seçin.
4. {{ui:İstiqamət}} sahəsində {{ui:Üfüqi}} və ya {{ui:Şaquli}} seçin.

:::warning
Kağızı dəyişmək vərəqdə artıq olanı köçürmür və ya ölçüsünü dəyişmir. Dəyişdikdən sonra sərhədin, başlıq blokunun və görünüş pəncərəsinin hələ yerləşdiyini yoxlayın və tutacaqlarla köçürün və ya ölçüsünü dəyişin. Millimetrlik və düymlük kağız arasında keçid rəqəmləri saxlayır, buna görə hər şey ölçüsünü dəyişir: status sətri sizi xəbərdar edir.
:::

## Görünüş pəncərəsinin miqyasını təyin edin

1. Görünüş pəncərəsinin çərçivəsinə (kənarına) klikləyin. Panel başlığı "Görünüş pəncərəsi" yazır.
2. {{ui:Miqyas}} sahəsində `1:100` seçin.

Görünüş pəncərəsində model 1:100-də yenidən çəkilir, olduğu yerin mərkəzində. Siyahı 10:1-dən 1:10000-ə qədər metrik miqyasları təklif edir; düym və ya futlu çertyojlar da memarlıq miqyaslarını (1/4" = 1'-0" və s.) və mühəndislik miqyaslarını (1" = 20' və s.) alır. {{ui:Bütün modeli sığdır}} hər şeyi sığdıran dəqiq, standart olmayan miqyas təyin edir.

3. Plan mərkəzdə deyilsə, sağ paneldə {{ui:Görünüşün mərkəzi (model)}} altında {{ui:X}} və {{ui:Y}} dəyərlərini dəyişin: görünüş pəncərəsinin ortasında göstərilən model nöqtəsidir.

## Görünüş pəncərəsində modelin bir hissəsini göstərin

1. Görünüş pəncərəsi seçilmiş halda, sağ paneldə {{ui:Modeldə pəncərə seçin…}} üzərinə klikləyin (ya da `VPVIEW` yazın və {{key:Enter}} basın).
2. CadCraft {{ui:Model}} nişanına keçir. Göstəriləcək sahənin bir küncünə klikləyin.
3. Əks küncə klikləyin.

Vərəqə qayıdırsınız, və görünüş pəncərəsi sahəni ən böyük standart miqyasda, sığan, göstərir; tarixçə hansı olduğunu deyir. {{ui:Bütün modeli göstər}} bütün planı standart miqyasda geri qaytarır.

## Detal üçün ikinci görünüş pəncərəsi əlavə edin

1. Vərəqdə yer açın: birinci görünüş pəncərəsini seçin və künc tutacağını sürükləyərək kiçildin.
2. `MV` yazın və {{key:Enter}} basın, ya da Vərəqlər qrupunda {{ui:Görünüş pəncərəsi}} üzərinə klikləyin.
3. Vərəqdə yeni görünüş pəncərəsinin bir küncünə klikləyin.
4. Əks küncə klikləyin.

Yeni görünüş pəncərəsi bütün modeli göstərir. Tarixçə onun miqyasını deyir.

5. Yeni görünüş pəncərəsinin çərçivəsinə klikləyin.
6. {{ui:Modeldə pəncərə seçin…}} üzərinə klikləyin və planın bir küncü ətrafında kiçik sahə seçin.
7. {{ui:Miqyas}} sahəsində `1:20` seçin.

Görünüş çərçivələri `Viewports` qatında olur, o qat çap olunmamaq üçün təyin edilib, buna görə çərçivələr ekranda görünür, PDF-də yox.

## Başlıq blokunu doldurun

Başlıq bloku `Title block` qatında adi xətlər və mətndən ibarətdir. Çertyojun adı, birinci görünüş pəncərəsinin miqyası, bu günün tarixi və vərəq nömrəsi ilə başlayır.

1. Böyük başlıq mətninə iki dəfə klikləyin. Üzərində redaktə qutusu açılır.
2. Vərəqin başlığını yazın.
3. {{ui:OK}} üzərinə klikləyin, ya da {{key:Mod+Enter}} basın.

Digər sahələr üçün eyni edin. Boş "DRAWN BY" xanasına yazmaq üçün {{cmd:TEXT}} istifadə edin. SCALE mətni görünüş pəncərəsinin miqyası dəyişəndə özü yenilənmir: onu əllə redaktə edin.

## Vərəqdə çəkin

Vərəq nişanında çəkdiyiniz hər şey kağızdadır, kağız vahidlərində: 3,5 hündürlüyündə mətn ISO vərəqdə 3,5 mm hündürdür. Qeydlər, şimal oxları və vərəq sərhədləri burada yerləşir.

Planın özünü dəyişmək üçün {{ui:Model}} nişanına keçin, ya da görünüş pəncərəsi vasitəsilə işləyin (növbəti bölmə); hər görünüş pəncərəsi dəyişikliyi göstərir.

## Görünüş pəncərəsi vasitəsilə modeldə işləyin

1. Görünüş pəncərəsinin içində, çərçivəsindən kənarda iki dəfə klikləyin. Ya da `MS` yazın və {{key:Enter}} basın: vərəqdə bir görünüş pəncərəsi varsa birbaşa içəri keçir; bir neçəsi varsa istədiyinizin içinə klikləyin.

Çərçivə qalın çəkilir, tarixçə içəridə olduğunuzu deyir və vərəq nişanı seçilmiş qalır. İndi çəkdiyiniz və ya dəyişdiyiniz hər şey modeldədir, model vahidlərində, {{ui:Model}} nişanındakı kimi: 1:100 görünüş pəncərəsinin içində çəkilmiş xətt həqiqi millimetrlərdədir. Bu görünüş pəncərəsində dondurulmuş qatlar burada seçilə bilməz.

2. Görünüş pəncərəsinin göstərdiyini zoom etmək və sürüşdürmək üçün təkər fırladın və ya orta düyməylə sürükləyin. Vərəq yerində qalır.
3. Çərçivədən kənarda iki dəfə klikləyin, ya da `PS` yazın və {{key:Enter}} basın.

Vərəqə qayıdırsınız. Görünüş pəncərəsi onu tərk etdiyiniz görünüşü saxlayır; {{key:Mod+Z}} köhnə görünüşü bir addımda geri qaytarır. Çertyojun altındakı istənilən nişana klikləmək də görünüş pəncərəsini tərk edir.

:::note
Göstərilməsi kilidli görünüş pəncərəsi (Xassələrdə {{ui:Göstərilmə kilidli}}) öz görünüşünü saxlayır: içində sürüşdürmə və zoom bütün vərəqi hərəkət etdirir. Söndürülmüş görünüş pəncərəsinə daxil olmaq olmur.
:::

## Görünüş pəncərəsinə ad verin

Görünüş pəncərəsinin altındakı görünüş başlığı görünüş pəncərəsinin görünüş adını göstərə və onunla ayaqlaşa bilər:

1. Görünüşə ad verin: görünüş pəncərəsinin çərçivəsini seçin və Xassələrdə {{ui:Görünüş adı}} sahəsini doldurun — ya da {{ui:Model}} nişanında görünüşü {{cmd:NAMEDVIEW}} ilə saxlayın və görünüş pəncərəsi seçilmiş halda `VPVIEW`, `V` və görünüşün adını yazın: görünüş pəncərəsi həmin görünüşü göstərir və onun adını alır.
2. `VIEWLABEL` (`VL`) yazın və {{key:Enter}} basın, sonra etiketin yerinə klikləyin ({{key:Enter}} onu görünüş pəncərəsinin aşağı-sol küncünün altına qoyur).

Görünüş adı dəyişəndə etiket də eyni geri alma addımında onunla birlikdə dəyişir.

## Qatı bir görünüş pəncərəsində dondurun

Bir qatı yalnız bir görünüş pəncərəsində gizlətmək (məsələn detalda mebel) üçün:

1. Görünüş pəncərəsinin çərçivəsini seçin, ya da onun içində işləyin (iki dəfə klikləyin).

{{ui:Qatlar}} paneli hər sətirdə bir düymə əlavə edir və siyahının üstündəki sətir bunu deyir.

2. Qatın sətrində həmin düyməyə klikləyin.

Qat yalnız həmin görünüş pəncərəsindən yox olur. Yenidən açmaq üçün yenidən klikləyin; {{key:Mod+Z}} hər ikisini geri alır. Bir neçə qat və ya görünüş pəncərəsi birdən üçün `VPLAYER` yazın, sonra `[Dondur (F)/Aç (T)]`, qat adları (`A-*` A- ilə başlayan bütün qatları alır), sonra `[Cari (C)/Hamısı (A)/Seç (S)]` seçin. `VPLAYER` `[Vpvisdflt (V)]` yeni görünüş pəncərələrinin başlanğıcda dondurulacağı qatları seçir.

## Daha çox vərəq

Hər {{ui:+}} növbəti vərəq sayı ilə əlavə edir (`Layout2`, `Layout3` …). Açıq vərəqi silmək üçün {{key:Esc}} basın və sağ paneldə {{ui:Bu vərəqi sil}} üzərinə klikləyin. Soruşmadan silinir; {{key:Mod+Z}} onu geri qaytarır.

Vərəqi {{ui:Bu vərəqi çap et}} və ya {{key:Mod+P}} ilə çap edin; bax: [PDF-ə çap et](topic:plot-pdf).

## Ümumi səhvlər

- **Görünüş pəncərəsi heç nə göstərmir.** Model boşdur, ya da görünüş başqa yerə yönəlib. Çərçivəni seçin və {{ui:Bütün modeli göstər}} üzərinə klikləyin.
- **Miqyas siyahısında yalnız nisbətlər var, fut-düym miqyasları yoxdur.** {{ui:Model}} nişanında {{ui:Vahidlər}} dəyərini {{ui:Düym}} və ya {{ui:Fut}} təyin edin.
- **1:100 on dəfə çox böyük və ya kiçik görünür.** Çertyojun vahidləri səhvdir. {{ui:Vahidlər}} dəyərini bir vahidin həqiqətdə nə olduğuna təyin edin.
- **Görünüş pəncərəsinin içində planı klikləmək heç nə seçmir.** Vərəqdə siz vərəqin öz obyektlərini seçirsiniz. Planı görünüş pəncərəsi vasitəsilə işləmək üçün əvvəlcə içində iki dəfə klikləyin.
- **Görünüş pəncərəsinin xaricinə klikləmək heç nə etmir.** Siz görünüş pəncərəsinin içindəsiniz: vərəqdə yenidən işləmək üçün xaricində iki dəfə klikləyin, ya da `PS` yazın.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** Görünüş pəncərələri vərəqdə yerləşir. Əvvəlcə vərəq nişanını açın (ya da LAYOUT ilə yaradın). {{cmd:MVIEW}} yalnız vərəq nişanında işləyir.
