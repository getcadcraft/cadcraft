---
title: Obyektlərdəki nöqtələrə tutmaq
summary: Obyekt tutmalarını, Ortoqonalı və şəbəkəni istifadə edərək siçanla dəqiq son nöqtələri, orta nöqtələri, mərkəzləri və kəsişmələri seçin.
keywords: osnap, obyekt tutması, son nöqtə, orta nöqtə, mərkəz, kəsişmə, perpendikulyar, kvadrant, ən yaxın, düyün, daxil etmə, ortoqonal, şəbəkə, f3, f8, f7, polyar izləmə, polyar, polarang, obyekt tutması izləməsi, otrack, izləmə, f10, f11
from: 3cf17f94
---

## Nə yaradacaqsınız

İki diaqonalı düzbucaqlı, diaqonalların kəsişdiyi yerdə mərkəzləşdirilmiş çevrə və kvadratın bir tərəfinin ortasından çevrəyə xətt. Hər nöqtə siçanla seçilir və hər nöqtə dəqiqdir.

## Tutma necə işləyir

Komanda nöqtə istədiyi zaman CadCraft xaçdan təxminən 10 piksel məsafədə tutma nöqtələri axtarır. Tapanda işarə və etiket görünür ("Son nöqtə", "Kəsişmə"), və klik **dəqiq** həmin nöqtəyə düşür, xaçın olduğu yerə yox.

Tutmalar status sətrində {{ui:Tutma}} basılı olanda aktivdir. {{key:F3}} onları açır və bağlayır.

İstifadə edə biləcəyiniz tutmalar bunlardır:

| Tutma | Üzərinə düşür |
|---|---|
| Son nöqtə | Xətlərin, qövslərin və polixətt seqmentlərinin uclarına |
| Orta nöqtə | Xətlərin, qövslərin və polixətt seqmentlərinin ortasına |
| Mərkəz | Çevrələrin və qövslərin mərkəzinə, polixətt qövs seqmentlərinə də |
| Kvadrant | Çevrələrin və qövslərin 0, 90, 180 və 270 dərəcə nöqtələrinə |
| Kəsişmə | İki obyektin kəsişdiyi yerə |
| Perpendikulyar | Son nöqtəyə perpendikulyar obyektdəki nöqtəyə (baza nöqtəsi lazımdır) |
| Toxunan | Çevrə və ya qövsdə, son nöqtədən gələn xəttin toxunduğu nöqtəyə. Hələ son nöqtə olmadıqda (xəttin birinci nöqtəsi) işarə "gözləyir" deyir: toxunma nöqtəsi növbəti nöqtə məlum olduqda hesablanır, buna görə Toxunandan Toxunana xətt hər iki çevrəyə toxunur |
| Ən yaxın | İstənilən obyektdə ən yaxın nöqtəyə |
| Düyün | Nöqtə obyektlərinə |
| Daxil etmə | Mətnin və blok istinadlarının daxil etmə nöqtəsinə |

Hamısı defolt olaraq aktivdir, Toxunan və Ən yaxın istisna olmaqla. Ən yaxın başqa bir şey istədiyiniz zaman qalib gəlməyə meyllidir; ehtiyacınız olduqda Toxunanı açın.

## Tutmaları seçin

1. Status sətrində {{ui:Tutma}} yanındakı kiçik oxa klikləyin. {{ui:Obyekt tutmaları}} siyahısı açılır.
2. Tutmaları qeyd edin və ya ləğv edin. Dəyişikliklər dərhal tətbiq olunur.
3. Siyahını bağlamaq üçün oxa yenidən klikləyin.

CadCraft seçiminizi, həmçinin {{ui:Şəbəkə}}, {{ui:Ortoqonal}} və {{ui:Tutma}} parametrlərini bu brauzerdə yadda saxlayır.

## Addımlar

1. `REC` yazın və {{key:Enter}} basın.
2. `0,0` yazın və {{key:Enter}} basın.
3. `@4000,3000` yazın və {{key:Enter}} basın. Düzbucaqlı görünür.
4. {{ui:Hüdudlar}} üzərinə klikləyin.
5. `L` yazın və {{key:Enter}} basın.
6. Xaçı aşağı-sol künca aparın. İşarə "Son nöqtə" göstərir. Klikləyin.
7. Yuxarı-sağ künca aparın, "Son nöqtə" görünənə qədər. Klikləyin.
8. Xətti bitirmək üçün {{key:Enter}} basın.
9. {{cmd:LINE}} əmrini təkrarlamaq üçün yenidən {{key:Enter}} basın və aşağı-sağ küncdən yuxarı-sol künca digər diaqonalı eyni qaydada çəkin.
10. Çevrəni başlatmaq üçün `C` yazın və {{key:Enter}} basın.
11. Xaçı diaqonalların kəsişdiyi yerə aparın. İşarə "Kəsişmə" göstərir. Klikləyin.
12. `800` yazın və {{key:Enter}} basın.

Kəsişmənin dəqiq mərkəzində çevrə görməlisiniz.

13. `L` yazın və {{key:Enter}} basın.
14. Düzbucaqlının sol tərəfinin ortasına gedin, "Orta nöqtə" görünənə qədər. Klikləyin.
15. Xaçı çevrənin üzərinə, onun sol tərəfinə aparın. İşarə "Perpendikulyar" və ya "Kvadrant" göstərir; burada hər ikisi eyni nöqtədir. Klikləyin.
16. {{key:Enter}} basın.

Yeni xətt sol tərəfin ortasından başlayır və dəqiq çevrədə dayanır.

## Bir klik üçün tutmanı keçin

{{key:Shift}} basılı saxlayın klik edərkən. Həmin klik üçün obyekt tutmaları nəzərə alınmır və nöqtə xaçın olduğu yerə düşür (və ya Ortoqonal aktivdirsə onun istiqamətində).

## Ortoqonal

{{ui:Ortoqonal}} ({{key:F8}}) növbəti nöqtəni baza nöqtəsindən düz sağa-sola və ya düz yuxarı-aşağı saxlayır. O, kliklərə və birbaşa məsafə daxiletməsinə (komanda sorğusunda yazılmış çılpaq ədəd) tətbiq olunur. Obyekt tutmaları Ortoqonaldan üstündür: tutma işarəsi görünürsə, klik tutmaya gedir.

## Polyar izləmə

{{ui:Polyar}} ({{key:F10}}) çox bucaqda Ortoqonaldır. Komandanın baza nöqtəsi olduqda (xəttin son nöqtəsi, köçürmənin baza nöqtəsi), göstərici polyar addımın bir qatı bucaqda ondan şüaya yaxınlaşanda sıralanır: nöqtəli xətt görünür və xaçın yanında etiket `Polyar: 1200 < 30°` yazır. Həmin nöqtəni istifadə etmək üçün klikləyin, ya da məsafə yazın: `1200` şüa üzrə dəqiq 1200 gedir.

Addım dəyişənə qədər 90°-dir: {{cmd:POLARANG}} yazın, {{key:Enter}} basın və `30` yazın (və ya 45, 22.5, 15 …). Polyar və Ortoqonal bir-birini istisna edir: birini açmaq digərini bağlayır.

## Obyekt tutması izləməsi

{{ui:İzlə}} ({{key:F11}}) göstəricini üzərində dayandığınız tutma nöqtələri ilə sıralayır, beləliklə bir künc ilə səviyyədə, digərinin üstündə nöqtəni köməkçi xətlər çəkmədən seçə bilərsiniz.

1. {{ui:Tutma}} və {{ui:İzlə}} açın, və nöqtə soruşan komandanı başladın (`L`).
2. Göstəricini tutma nöqtəsinin, məsələn künc üzərində, klikləmədən yarım saniyə saxlayın. Kiçik xaç onu işarələyir: qəbul edilib. Yenidən üzərində saxlasanız, o buraxılır.
3. Göstəricini ondan düz üfüqi və ya şaquli uzaqlaşdırın. Nöqtəli xətt göstəricini izləyir və etiket `İzlə: 600 < 90°` yazır. Klikləyin, ya da məsafə yazın.
4. İkinci nöqtəni qəbul edin və birindən şaquli ilə digərindən üfüqinin kəsişdiyi yerə gedin: göstərici həmin kəsişməyə tutulur (`İzlə: iki xəttin kəsişdiyi yer`).

{{ui:Polyar}} da açıq olduqda qəbul edilmiş nöqtələr hər polyar bucaqda izlənir. Komanda bitənə qədər yeddi nöqtəyə qədər saxlanılır. {{key:Shift}} tutmalar kimi bir klik üçün izləməni söndürür.

## Şəbəkə

{{ui:Şəbəkə}} ({{key:F7}}) çertyojun arxasında xətlərdən ibarət şəbəkə göstərir, hər beşinci xətt qalın olur; miqyas dəyişəndə aralıq dəyişir. {{ui:Şəbəkəyə tutma}} ({{key:F9}}) açılana qədər yalnız bələdçidir: sonra kliklər ən yaxın şəbəkə nöqtəsinə düşür, obyekt tutması nöqtəni əvvəl almadıqda.

## Kompüterinizdə funksiya düymələri

{{key:F9}} Şəbəkəyə tutma, {{key:F10}} Polyar və {{key:F11}} İzləmədir.

:::mac
Mac-da F3, F7, F8 və F9 adətən Mission Control və mediya idarə edir. Düyməni **fn** ilə basın, ya da standart funksiya düymələrini aktiv edin, [Klaviatura, siçan və trackpadlər](common:keys) bölməsində təsvir olunduğu kimi. Status sətrinin düymələri həmişə işləyir.
:::

:::firefox
Firefox-da F7 həm də caret browsing açarıdır. Firefox caret browsing-i açmağı soruşsa, **Xeyr** seçin. Sual geri qayıdırsa {{ui:Şəbəkə}} düyməsini istifadə edin.
:::

:::touch
Sensor ekranda hover olmur, buna görə tutma işarəsi yalnız barmağınızın toxunduğu yerdə görünür. Kiçik hədəflər üçün yaxından yaxınlaşdırın, ya da koordinatları yazın.
:::

## Ümumi səhvlər

- **Klik səhv nöqtəyə getdi.** Klikləməzdən əvvəl işarə etiketinə baxın: hər ikisi yaxın olduqda Son nöqtə Orta nöqtədən üstündür. Yaxınlaşdırın, ya da lazım olmayan tutmaları qeyd etməyin.
- **Heç bir işarə görünmür.** {{ui:Tutma}} bağlıdır, ya da istədiyiniz tutma qeyd edilməyib, ya da obyekt bağlı və ya dondurulmuş qatdadır.
- **Tutmalar məşğul çertyojda səhv şeyi tutur.** Yaxınlaşdırın. Tutma məsafəsi ekran piksellərində ölçülür, buna görə yaxınlaşdırmaq çertyoj üzərində onu kiçildir.
- **Shift-in düz xətt verməsini gözləmək.** CadCraft-da Shift bir klik üçün tutmaları söndürür. Düz xətlər üçün {{ui:Ortoqonal}} istifadə edin.
- **Nöqtələrin şəbəkə nöqtələrinə düşməsini gözləmək.** {{ui:Şəbəkəyə tutma}} ({{key:F9}}) açın, ya da dəyirmi rəqəmlər üçün koordinatları yazın.
