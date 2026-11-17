---
title: Ştrixləmə və sahələrin doldurulması
summary: Sahəni ona klikləməklə və ya qapalı formaları seçməklə bərk rəng və ya standart naxışla doldurun, naxışın miqyasını və bucağını təyin edin və sonradan ştrixləməni dəyişdirin.
keywords: ştrixləmə, bhatch, doldurma, bərk doldurma, naxış, ansi31, ansi37, kərpic, torpaq, tor, kəsik xətləri, poşe, ada, sərhəd, miqyas, bucaq
from: 14399174
---

## Nə yaradacaqsınız

ANSI31 naxışı ilə doldurulmuş divar kəsiyi, içərisində boş qalmış sütun və sütunda bərk doldurma.

## Sahənin içinə klikləməklə ştrixləmə

1. Düzbucaqlı (`REC`, `0,0`, `@2000,1200`) və onun içərisində çevrə (`C`, `1000,600`, `300`) çəkin. {{ui:Extents}} düyməsinə klikləyin.
2. {{ui:Draw}} qrupunda {{ui:Hatch}} düyməsinə klikləyin və ya `H` yazıb {{key:Enter}} basın. Tarixçədə hansı naxışın cari olduğu göstərilir, məsələn `Cari ştrixlama: ANSI31, miqyas 1, bucaq 0°`.
3. `P` yazıb {{key:Enter}} basın, `ANSI31` yazıb {{key:Enter}} basın.
4. `SC` yazıb {{key:Enter}} basın, `20` yazıb {{key:Enter}} basın. Naxış ölçüləri kağız üzərindədir, buna görə 1:20 miqyasda çap olunan çertyoj üçün miqyas 20 tələb edir.
5. `Daxili nöqtəni göstərin` mərhələsində düzbucaqlının içinə, çevrənin xaricinə klikləyin. Ştrixləmə önizləmə kimi görünür.
6. {{key:Enter}} basın. Düzbucaqlı ştrixlanır; içəridəki çevrə boş qalır, çünki o ada hesab olunur.

Bir ştrixləmə etmək üçün {{key:Enter}} basmazdan əvvəl bir neçə sahənin içinə klikləyin. `U` son sahəni geri götürür.

## Bərk doldurma

1. `H` yazıb {{key:Enter}} basın.
2. `P` yazıb {{key:Enter}} basın, `SOLID` yazıb {{key:Enter}} basın.
3. Çevrənin içinə klikləyin, sonra {{key:Enter}} basın.

## Seçdiyiniz qapalı formaları ştrixləmək

İçəri klikləmək əvəzinə `Daxili nöqtəni göstərin` mərhələsində `S` (Obyektləri seçin) yazın və qapalı polixətləri, çevrələri və ya qapalı ellipsləri seçin, sonra {{key:Enter}} basın. Digər formaların içində olan formalar da növbə ilə boş qalır (xarici biri ştrixlanır, növbəti içəridəki boş qalır və s.).

## Naxışlar

Siyahı üçün naxış sualında `?` yazın. Standart naxışlar bunlardır: ANSI31-dən ANSI38-ə qədər, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH və SOLID. Düymlə ölçülmüş çertyojda (və ya uzunluq formatı fut və düym olduqda) naxışların düym ölçüləri istifadə olunur, AutoCAD-da olduğu kimi; əks halda millimetr ölçüləri.

{{ui:Angle}} (`A`) bütün naxışı döndərir: 90°-də ANSI31 əks istiqamətə meyllənir.

**Naxış faylları.** `Daxili nöqtəni göstərin` mərhələsində `Naxış faylı (F)` yazın və `.pat` faylını seçin. Həmin fayldakı naxışlar siyahıya əlavə olunur; birdən çox olduqda hansının istifadə olunacağı soruşulur. CadCraft-ın oxuya bilmədiyi naxışı olan fayl bu barədə məlumat verir, ötürülmüş naxışlar isə sayılır. `.pat` faylındakı ölçülərin öz vahidi yoxdur, buna görə çertyojun vahidləri ilə oxunur. Yalnız adi `.pat` formatında yazılmış fayllar sınaqdan keçirilib; başqa proqram tərəfindən yaradılmış heç bir fayl sınanmayıb.

## Ştrixləməni dəyişdirmək

Onu seçin (xətlərindən birinə klikləyin). {{ui:Properties}} panelində: {{ui:Pattern}}, {{ui:Pattern scale}} və {{ui:Pattern angle}}. Açılmış çertyojlardakı ştrixləmələr standart naxışlardan biri olduqda naxışını göstərir; digərləri rənginin açıq tonu kimi görünür.

## Tez-tez edilən səhvlər

- **"Bu nöqtə ətrafında qapalı sərhəd yoxdur."** Konturda boşluq var və ya onun bir hissəsi ekranın xaricindədir: CadCraft yalnız ekranda olanlara baxır. Boşluğu bağlayın (künclərə yaxınlaşaraq) və ya uzaqlaşın.
- **"Bu miqyasda naxış çəkmək üçün çox sıxdır."** Xətlər çertyojun göstərə biləcəyindən daha yaxın olardı. Daha böyük miqyas istifadə edin: çap miqyasını sınayın (1:20 üçün 20).
- Naxış çox böyük və ya çox kiçik görünür. Miqyas naxış vahidinə düşən çertyoj vahidi ilə verilir; yuxarıdakı 4-cü addıma baxın.
- **Konturu köçürmək ştrixləməni köçürmür.** Ştrixləmə öz sərhədinə bağlı deyil. Hər ikisini köçürün və ya yenidən ştrixləyin.

## Sərhədi ilə birlikdə qalan ştrixləmə

`HATCH` ilə yaratdığınız ştrixləmə onu məhdudlaşdıran sərhədi yadda saxlayır. Sərhədi köçürdükdə, döndərdikdə və ya miqyaslandırdıqda ştrixləmə və onun naxışı onunla birlikdə hərəkət edir. Sərhədi yenidən formalaşdırmaq üçün tutacağı sürükləyin; ştrixləmə yenidən hesablanır. Ştrixləməni təkbaşına köçürdükdə sərhədi də onunla gəlir, çertyoj proqramında doldurulmuş forma kimi.

Sərhəd artıq bağlanmadıqda və ya ştrixləməni əl ilə yenidən formalaşdırdıqda əlaqə bitir və komanda sətri bunu bildirir. Ştrixləmənin özü qalır. Ştrixləyərkən müstəqil ştrixləmələr yaratmaq üçün `AS` yazın. Ştrixləməni sərhədi ilə birlikdə kopyaladıqda, surətin öz əlaqəsi olur.

`HATCHEDIT` (`HE`) ştrixləmənin naxışını, miqyasını, bucağını və başlanğıc nöqtəsini dəyişir, onu sərhədə bağlayır və ya əlaqəni bitirir. Əlaqə DWG və DXF 2000 fayllarında saxlanılır. DXF R12 faylında ştrixləmə obyekti yoxdur və başqa proqramlarda yaradılmış əlaqələr oxunmur: bunlar üçün `HATCHEDIT` və Link istifadə edin.

Sərhədi artıq olmayan ştrixləmə (sərhəd silinib və ya fayl onsuz gəlib) onu bərpa edə bilər: `HATCHGENERATEBOUNDARY` (`HGB`) ştrixləmənin hər halqasının ətrafına qapalı polixətt çəkir və "Bəli" cavabı versəniz, ştrixləməni onlara bağlayır.

## Qradiyent doldurma

`GRADIENT` (`GD`) sahəni naxış əvəzinə qradiyentlə doldurur: `HATCH` ilə eyni seçimlər edilir, əvvəlcə növü soruşulur (xətti, silindrik, sferik, yarımsferik, əyri və bunların hər biri tərs), bir rəng tonu ilə və ya iki rəng, bucaq və mərkəzləşdirilmiş olub-olmaması. `HATCH`-da `G` seçimi eyni işi görür. `HATCHEDIT` `G` və ya Qradiyent altında {{ui:Properties}} qradiyenti dəyişir və ya istənilən ştrixləməni qradiyentə çevirir.

Qradiyent ekranda və çaplarda görünür. DWG 2004 və ya daha yeni formatda saxlasanız, digər proqramlar həqiqi qradiyent ştrixləmə alır. DXF 2000 və DWG 2000-də qradiyent yoxdur: orada CadCraft onu yalnız öz üçün saxlayır, digər proqramlar isə birinci rəngdə bərk doldurma görür.

## Ştrixləməni kəsmək

`TRIM` ştrixləməni digər obyekt kimi kəsir. İstədiyiniz kəsmə kənarının tərəfindəki ştrixləməyə klikləyin: kənarlar ştrixlənmiş sahəni bölür və həmin hissə silinir. Sürətli rejimdə hər obyekt kəsmə kənarıdır; çox olduqda əvvəlcə kənarları seçin (`T` seçimi). Kəsilmiş ştrixləmə artıq sərhədinə bağlı deyil, çünki onu artıq doldurmur.
