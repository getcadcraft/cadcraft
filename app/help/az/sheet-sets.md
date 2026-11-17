---
title: Vərəq dəstləri
summary: Bir çox çertyojdan vərəqləri bir nömrələnmiş siyahıda toplayın, ştamplarını dəstdən doldurun, hamısını bir PDF kimi nəşr edin və dəsti zip arxivi kimi saxlayın.
keywords: vərəq dəsti, vərəq dəsti meneceri, ssm, sheetset, ccsheets, dst, vərəq siyahısı, vərəq indeksi, ştamp, sahələr, nəşr, yenidən nömrələmə, arxiv, etransmit, transmittal, alt dəstlər, örtük vərəqi, çertyoj siyahısı
from: 2c855720
---

## Öyrənəcəksiniz

Bir neçə çertyoj faylından vərəqləri (tərtibatları) **vərəq dəstinə** necə toplamağı, onları nömrələməyi və adlandırmağı, ştamplarını sizin üçün doldurmağı, bütün dəsti bir PDF kimi nəşr etməyi və hər şeyi göndərmək üçün bir zip-də birləşdirməyi.

Vərəq dəsti öz kiçik faylında yaşayır, `<ad>.ccsheets`, çertyojları saxlayan qovluqda. Dəst faylı vərəqləri qovluqdan nisbi yollarla sadalayır, buna görə bütün qovluğu köçürə və ya kopyalaya bilərsiniz.

:::note
Qovluğu oxumaq və yazmaq üçün Chrome və ya Edge lazımdır (onlar səhifəyə seçdiyiniz qovluqda işləməyə icazə verə bilir), və ya masaüstü tətbiqi. Digər brauzerlər dəsti yalnız oxumaq üçün açır: ona baxa və onu nəşr edə bilərsiniz, dəst faylı isə yadda saxlanmaq əvəzinə yüklənir.
:::

## Dəst yaradın

1. Sol paneldə {{ui:Vərəq dəsti}} bölməsini tapın və onun {{ui:Dəst}} menyusunu açın. {{cmd:SHEETSET}} (və ya `SSM`) yazmaq da sizi oraya aparır.
2. {{ui:Yeni dəst…}} seçin. Dəsti adlandırın və istəsəniz layihənin adını və nömrəsini yazın.
3. Çertyojları saxlayan qovluğu seçin. Dəst faylı orada saxlanılır.

Dəsti sonra açmaq üçün {{ui:Dəst aç…}} seçin və eyni qovluğu seçin. Qovluqda bir neçə dəst varsa, CadCraft hansının açılacağını soruşur.

## Vərəqlər əlavə edin

1. {{ui:Çertyojdan vərəqlər əlavə et…}} seçin və qovluqdakı çertyojlardan birini seçin.
2. CadCraft həmin çertyojun vərəqlərini fonda oxuyur (ekranda açılmır) və siyahıya salır. İstədiklərinizi işarələyin və {{ui:OK}} klikləyin.
3. Vərəqi seçin və ona nömrə və ad vermək üçün {{key:F2}} basın (və ya {{ui:Adını dəyiş və nömrələ…}}), məsələn `A-101` və `Mərtəbə planı`.

{{ui:Şablondan yeni vərəq…}} başqa çertyojun vərəqindən (onun ştampı və görünüş pəncərələri) yeni çertyoj yaradır, yeni vərəqin adı ilə adlandırılır və onu əlavə edir. Dəst şablon kimi istifadə etdiyiniz çertyojı yadda saxlayır.

## Dəsti təşkil edin

- **Alt dəstlər** vərəqləri qruplaşdırır, məsələn Memarlıq › Planlar: onun gedəcəyi yeri seçin və {{ui:Yeni alt dəst…}} seçin.
- **Sıra**: vərəqi siyahıda başqa yerə və ya alt dəstin üzərinə sürükləyin. Klaviaturadan, vərəqi seçin və {{key:Alt+Up}} və ya {{key:Alt+Down}} basın.
- **Vərəqi açın**: ona iki dəfə klikləyin (və ya {{key:Enter}} basın). Onun çertyoju öz sekmesində, həmin vərəqdə açılır.
- **Çıxarın**: vərəqi seçin və {{key:Delete}} basın. Çertyojun özü dəyişmir.
- **Geri alın**: {{ui:Dəst dəyişikliyini geri qaytar}} və {{ui:Dəst dəyişikliyini təkrarla}} dəstdə dəyişdirdiklərinizi addım-addım keçir.
- **Yenidən nömrələyin**: {{ui:Vərəqləri yenidən nömrələ…}} hər vərəqi, və ya bir alt dəstin vərəqlərini, siyahı sırası ilə nömrələyir: prefiks, başlanğıc və addım (`A-` və `101` A-101, A-102 … verir).

Hər dəyişiklik dəst faylında dərhal saxlanılır.

## Vərəqləri sahələrinə görə nömrələyin

Vərəqləri əl ilə nömrələmək əvəzinə, bir qayda hər nömrəni vərəqin sahələrindən qursun, buna görə başqa mərtəbəyə və ya intizama keçən vərəq öz yeni nömrəsini özü alır.

1. Hər vərəqə sahələrini verin: onu seçin, {{ui:Adını dəyiş…}} klikləyin və {{ui:Bu vərəqin sahələri}} hissəsində hər sətirdə bir sahə yazın, məsələn `DISCIPLINE = A` və `LEVEL = 1`. Bütün dəstin paylaşdığı sahə (məsələn `DISCIPLINE = A`) dəstin {{ui:Xassələr…}} hissəsinə də yazıla bilər.
2. Panelin menyusunu açın və {{ui:Nömrələmə qaydası…}} klikləyin.
3. Qaydanı yazın, məsələn `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` digər sahələri eyni oxunan vərəqlər arasında sayır, buna görə 1-ci mərtəbə A-101, A-102 alır və 2-ci mərtəbə A-201-dən yenidən başlayır. `{SEQ:2}` iki rəqəmlə yazır; `{SUBSET}` vərəqin olduğu alt dəstin adıdır.
4. Sahə dəyişdikdə nə olacağını seçin: {{ui:Vərəqləri yenidən nömrələyin}} hər dəyişiklikdən sonra nömrələri qaydaya uyğun saxlayır; digər seçim onları bir dəfə, indi nömrələyir.

Qayda dəst faylında saxlanılır. Dəst özü yenidən nömrələdikdə, vərəqin nömrəsini deyil, sahələrini dəyişin.

## Ştampları dəstdən doldurun

Ştamp mətnini dəstdən o zaman alır ki, onun atributları sahənin adı ilə etiketlənmiş olsun:

| Etiket | Nə göstərir |
|---|---|
| `SHEETNUMBER` (və ya `SHEET_NO`, `DWG_NO`) | Vərəqin nömrəsi |
| `SHEETTITLE` (və ya `TITLE`, `SHEET_TITLE`) | Vərəqin adı |
| `SHEETDESC` | Vərəqin təsviri |
| `PROJECTNAME` (və ya `PROJECT`) | Layihənin adı |
| `PROJECTNUMBER` (və ya `PROJECT_NO`, `JOB_NO`) | Layihənin nömrəsi |
| `SHEETSETNAME` | Dəstin adı |
| `SHEETINDEX`, `SHEETCOUNT` | "3 / 12" və 12 |
| Öz sahəniz, məsələn `CLIENT` | {{ui:Dəst sahələri…}} hissəsində ona yazdığınız |

{{ui:Dəst sahələri…}} layihənin adını və nömrəsini və öz sahələrinizi saxlayır, hər sətirdə `AD = dəyər` formatında.

{{ui:Çertyojları yenilə}} dəstdəki hər çertyojun ştamplarına nömrələri, adları və sahələri yazır və hər vərəqin tərtibat sekmesini dəstin dediyi kimi yenidən adlandırır (standart olaraq nömrə və ad, məsələn `A-101 Mərtəbə planı`; {{ui:Dəst sahələri…}} › {{ui:Tərtibat sekmələrinin adları}} bunu dəyişir). Hər çertyoj öz yerində, öz formatında və versiyasında saxlanılır. Vərəqləri yenidən nömrələdikdən və ya adlandırdıqdan sonra onu yenidən işə salın və sekmələr və ştamplar izləyəcək.

## Örtük vərəqində vərəq siyahısı

Siyahıda örtük vərəqini seçin və {{ui:Bu vərəqə vərəq siyahısını qoy}} seçin. Hər vərəqin cədvəli (nömrə və ad, alt dəstinin altında) vərəqin yuxarı-sol küncünə düşür. {{ui:Çertyojları yenilə}} və {{ui:PDF-ə nəşr et}} onu yenilənmiş saxlayır. Bu bir blokdur, `CC_SHEETLIST`: onu hər blok referansı kimi köçürün.

## Dəsti nəşr edin

{{ui:PDF-ə nəşr et}} bir PDF yaradır, hər vərəq üçün bir səhifə, dəstin sırası ilə, hər vərəqin öz kağız ölçüsündə, hər vərəq üçün bir xətt ilə ("A-101 — Mərtəbə planı"). Bir alt dəst seçildikdə CadCraft yalnız o alt dəsti nəşr edib-etməyəcəyini soruşur. PDF-dəki ştamplar çertyojları yenilməmişdən əvvəl də dəstdən doldurulur; çertyojların özü nəşrdə dəyişmir. PDF yüklənir.

{{ui:DWG-ə nəşr et…}} hər vərəqi öz DWG-si kimi yazır (DWG 2018): model və həmin bir vərəq, onun ştampı dəstdən doldurulmuş, nömrəsi və adı ilə adlandırılmış (`A-101 Mərtəbə 1 planı.dwg`). {{ui:DWG}} seçin, və ya yanında dəstin PDF-i üçün {{ui:DWG + PDF}}. `publish.json` hər faylı ölçüsü və SHA-256 ilə sadalayır. Dəstin qovluğuna yazmaq mümkün olduqda (CadCraft Studio və ya brauzerdə seçdiyiniz qovluq) fayllar `<dəst adı> - nəşr olunub` qovluğuna düşür; əks halda zip kimi yüklənir. Görünüş pəncərəsi [sinif üstələmələri](topic:viewport-overrides) hər DWG-yə birlikdə gedir.

## Dəsti arxivləşdirin

{{ui:Zip arxiv kimi arxivləşdir}} dəst faylını, onun istifadə etdiyi hər çertyojı və həmin çertyojların əlaqələndirdiklərini (əlaqəli çertyojlar və onların öz əlaqələri, və şəkillər) qovluqlarını saxlayaraq paketləyir, həmçinin hər faylı sadalayan `Transmittal.txt` əlavə edir. Dəst qovluğunda olmayan keçid orada itkin kimi sadalanır. Keçidlər çertyojdan olan yolu ilə, sonra isə qovluqda istənilən yerdəki fayl adı ilə tapılır.

## Dəst faylı

`.ccsheets` faylı istənilən mətn redaktorunda oxuya biləcəyiniz JSON-dur:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Yollar dəst qovluğuna nisbi olur, qovluqlar arasında `/` ilə. CadCraft onu açdıqda faylı yoxlayır: mütləq yol, faylı və ya tərtibatı olmayan vərəq, və ya sadə olmayan mətn kənarda qalır və tarixçə bunu bildirir.

## Problemlərin həlli

| Nə görürsünüz | Səbəb | Nə etmək lazımdır |
|---|---|---|
| "Bu qovluq burada yalnız oxunandır" | Brauzer həmin qovluğa yaza bilmir | Chrome və ya Edge, və ya masaüstü tətbiqindən istifadə edin; bu arada {{ui:Dəst faylını yüklə}} dəyişikliklərinizi saxlayır |
| PDF-də vərəq buraxılıb: "… adlı tərtibatı yoxdur" | Vərəqin tərtibatı çertyojda adı dəyişdirilib və ya silinib | Çertyojı açın və sekmelərini yoxlayın; vərəqi çıxarıb yenidən əlavə edin |
| Ştamp boş qalır | Onun atributları başqa etiketlərə malikdir | Atribut etiketlərini yuxarıdakı sahə adlarına dəyişin (BEDIT) |
| "… adlı tərtibatı artıq var, buna görə sekmə adı dəyişdirilmədi" | Bir çertyojun iki vərəqi eyni sekmə adını alardı | Onlardan birinə başqa nömrə və ya ad verin |
