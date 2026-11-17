---
title: Çertyojun altında xəritə qatları
summary: Küçə xəritələrini, hava şəkillərini və ya dünya faylı olan şəkli model məkanının altında göstərin; çertyojun koordinat sistemi ilə yerləşdirilir.
keywords: xəritə, xəritə qatları, maplayers, ml, geomap, əsas xəritə, hava, peyk, tayllar, xyz, wms, wmts, xəritə xidməti, dünya faylı, koordinat sistemi, epsg, dövlət müstəvisi, utm, georeferens, situasiya planı, coğrafi yer, geoməlumat, saxlanılmış, dwg, dxf
from: f103045f
---

## Nə yaradacaqsınız

Hava şəklinin və ya küçə xəritəsinin üzərində çəkilmiş situasiya planı, hər biri öz yerində.

## CadCraft-a çertyojun harada olduğunu deyin

1. {{ui:Xassələr}} › {{ui:Vahidlər}} bölməsində çertyojun vahidlərini təyin edin (məsələn, fut və ya metr).
2. {{cmd:MAPLAYERS}} (və ya `ML`) yazın və {{key:Enter}} basın.
3. {{ui:Çertyojun yeri}} altında {{ui:Sistem tapın}} sahəsinə ad və ya EPSG kodu yazın (məsələn `2277` və ya `Texas Central`) və {{ui:Sistem}} bölməsində onu seçin.
4. Əgər çertyoj həmin sistemin öz koordinatlarında çəkilibsə, yerləşdirməni 0-da buraxın. Əks halda bir çertyoj nöqtəsi ({{ui:Çertyoj X}}, {{ui:Çertyoj Y}}) verin, bu nöqtənin xəritə şəbəkəsindəki yerini ({{ui:Şərq (E)}}, {{ui:Şimal (N)}}) və çertyojun şərqdən nə qədər döndərildiyini ({{ui:Dönmə (°)}}) göstərin.
5. {{ui:Bu sistemi istifadə et}} düyməsinə klik edin.

## Qat əlavə edin

1. Dialoqun yuxarısında {{ui:İnternetdən xəritə qatları}} açın. Bu açılana qədər heç bir serverdən heç nə istənilmir; açılanda əlavə etdiyiniz serverlər ekranda olan ərazini və internet ünvanınızı görür, heç vaxt çertyojunuzu.
2. {{ui:Qat əlavə et}} bölməsində onun haradan gəldiyini seçin:
   - **Tayllar (XYZ)**: `{z}`, `{x}` və `{y}` olan tay ünvanı, ad və provayderinin tələb etdiyi qeyd.
   - **WMS**, **WMTS** və ya **ArcGIS**: xidmətin ünvanı, sonra {{ui:Qatları al}} və birini seçin.
   - **Şəkil**: dünya faylı ilə (və varsa `.prj` faylı ilə) PNG və ya JPEG.
3. Qat çertyojun altında görünür. Onun qeydi çertyojun sağ aşağı küncündə göstərilir.

Siyahıdakı hər qatı gizlətmək, şəffaflığını artırmaq və ya azaltmaq, yuxarı və ya aşağı köçürmək və ya silmək olar.

Sistemdə və ya qatlarda hər dəyişiklik {{cmd:UNDO}} əmrinin bir addımıdır.

## Faylla birlikdə saxlanılır

Koordinat sistemi və qatların siyahısı çertyojunuzu DWG və ya DXF kimi saxlayanda faylda saxlanılır və istənilən kompüterdə yenidən açanda geri gəlir. Fayllardan olan şəkillər saxlanılmır: açdıqdan sonra onları yenidən əlavə edin. {{ui:İnternetdən xəritə qatları}} açarı çertyojda saxlanılmır: o bu brauzerə aiddir, belə ki, sizə göndərilən çertyoj siz özünüz açmadan heç bir serverdən heç nə istəmir.

Digər proqramların gördükləri:

| Belə saxlanılıb | Çertyojun yeri | Xəritə qatları |
|---|---|---|
| DWG 2010, 2013 və ya 2018, DXF 2000 | Proqramların coğrafi yer oxuduğu standart üsulla yazılır: sistemin EPSG kodu, bir çertyoj nöqtəsi və onun xəritə şəbəkəsindəki yeri, vahidlər və şimal. | Yalnız CadCraft |
| DWG 2000, 2004 və ya 2007, DXF R12 | Yalnız CadCraft (saxlayanda CadCraft bunu deyir) | Yalnız CadCraft |

- **Yoxlanılıb:** ODA File Converter yerini heç bir xətasız oxuyur və DXF kitabxanası (ezdxf) EPSG kodunu və yerləşdirməni dəqiq oxuyur.
- **Hələ yoxlanılmayıb:** digər çertyoj proqramlarının sistemi EPSG kodundan tanıyıb-tanımadığı. Sistemlərin öz siyahısını başqa adlarla saxlayan proqram çertyojunu heç bir yer olmadan göstərə bilər.
- Digər proqramlar blok siyahısında `CADCRAFT_GEO` adlı blok göstərir. Bu, sistemin və qatların CadCraft-ın öz nüsxəsidir; heç vaxt çertyojda yerləşdirilmir. Onu orada saxlayın.

## Başqa proqramların çertyojları

Başqa proqramın çertyoju coğrafi yerə malik olduqda CadCraft onu oxuyur:

- Əgər EPSG kodunu adlandırırsa, {{ui:Çertyojun yeri}} həmin sistemi göstərir və xəritə qatları onunla yerləşdirilir.
- Əgər CadCraft sistemi tanımırsa (başqa proqramın öz adı, yerli şəbəkə və ya miqyas əmsalı), yer istifadə edilmir, lakin o saxlanılır və olduğu kimi geri yazılır ki, digər proqram onu hələ də tapa bilsin. Onu əvəz etmək üçün {{ui:Çertyojun yeri}} bölməsində sistem seçin.

:::note
Xəritə qatları yalnız ekranda çəkilir, çap olunmur. Yalnız şərtləri icazə verən xəritə xidmətlərindən istifadə edin və onların qeydini görünən saxlayın.
:::
