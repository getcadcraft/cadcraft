---
title: Ştrixlama və doldurma sahələri
summary: Sahənin içinə klik etməklə və ya qapalı fiqurları seçməklə bərk rəng və ya standart naxışla doldurun, naxışın miqyasını və bucağını təyin edin və sonradan ştrixlamanı dəyişin.
keywords: ştrixlama, bhatch, doldurma, bərk doldurma, naxış, ansi31, ansi37, kərpic, torpaq, tor, kəsik xətləri, poşe, ada, sərhəd, miqyas, bucaq
from: e7feb344
---

## Nə yaradacaqsınız

ANSI31 naxışı ilə doldurulmuş divar kəsiyi, içərisində boş saxlanılmış sütun və sütunda bərk doldurma.

## Sahənin içinə klik etməklə ştrixləyin

1. Düzbucaqlı çəkin (`REC`, `0,0`, `@2000,1200`) və onun içində dairə (`C`, `1000,600`, `300`). {{ui:Hüdudlar}} klikləyin.
2. {{ui:Çəkmə}} qrupunda {{ui:Ştrixlama}} klikləyin və ya `H` yazıb {{key:Enter}} basın. Tarixçə cari naxışı deyir, məsələn `Cari ştrixlama: ANSI31, miqyas 1, bucaq 0°`.
3. `P` yazın və {{key:Enter}} basın, `ANSI31` yazın və {{key:Enter}} basın.
4. `SC` yazın və {{key:Enter}} basın, `20` yazın və {{key:Enter}} basın. Naxış ölçüləri kağız üzərindədir, buna görə 1:20 miqyasında çap olunan çertyoj miqyas 20 tələb edir.
5. `Daxili nöqtəni göstərin` mərhələsində düzbucaqlının içində, dairənin xaricində klikləyin. Ştrixlama önizləmə kimi göstərilir.
6. {{key:Enter}} basın. Düzbucaqlı ştrixlanır; içindəki dairə boş qalır, çünki o ada hesab olunur.

{{key:Enter}} basmazdan əvvəl bir neçə sahənin içində klikləyin ki, bir ştrixlama olsun. `U` son sahəni geri götürür.

## Bərk doldurma

1. `H` yazın və {{key:Enter}} basın.
2. `P` yazın, {{key:Enter}} basın, `SOLID` yazın və {{key:Enter}} basın.
3. Dairənin içində klikləyin, sonra {{key:Enter}} basın.

## Seçdiyiniz qapalı fiqurları ştrixləyin

Daxili klikləmək əvəzinə `Daxili nöqtəni göstərin` mərhələsində `S` (Obyektləri seçin) yazın, qapalı polixətləri, dairələri və ya qapalı ellipsləri seçin və sonra {{key:Enter}} basın. Digərlərinin içindəki fiqurlar növbə ilə boş qalır (xaricisi ştrixlanır, növbəti içəridəki boş qalır və s.).

## Naxışlar

Siyahı üçün naxış sualında `?` yazın. Standart naxışlar ANSI31-dən ANSI38-ə qədər, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS və EARTH, və SOLID-dir. Düymlə ölçülü çertyojda (və ya uzunluq formatı fut və düym olduqda) naxışların düym ölçüləri AutoCAD-də olduğu kimi istifadə olunur; əks halda millimetr ölçüləri.

{{ui:Bucaq}} (`A`) bütün naxışı fırladır: 90° bucaqda ANSI31 digər istiqamətə meyl edir.

**Naxış faylları.** `Daxili nöqtəni göstərin` mərhələsində `F` (Naxış faylı) yazın və `.pat` faylı seçin. Onun naxışları siyahıya əlavə olunur; bir neçə olduqda hansının istifadə olunacağı soruşulur. CadCraft-ın oxuya bilmədiyi naxış olmayan fayl bunu deyir və ötürülən naxışlar sayılır. `.pat` faylındakı ölçülərin öz vahidi yoxdur, buna görə çertyojun vahidlərində oxunurlar. Yalnız adi `.pat` formatında yazılmış fayllar sınaqdan keçirilib; başqa proqram tərəfindən yaradılan heç biri yox.

## Ştrixlamanı dəyişin

Onu seçin (xətlərindən birini klikləyin). {{ui:Xassələr}}-də: {{ui:Naxış}}, {{ui:Naxış miqyası}} və {{ui:Naxış bucağı}}. Açılmış çertyojlardan olan ştrixlamalar standart naxışlardan biri olduqda onu göstərir; başqaları rənginin açıq tonu kimi görünür.

## Ümumi səhvlər

- **"Həmin nöqtənin ətrafında qapalı sərhəd yoxdur."** Konturda boşluq var, ya da onun bir hissəsi ekrandan kənardadır: CadCraft yalnız ekranda olanlara baxır. Boşluğu bağlayın (künclərə yaxınlaşın) və ya uzaqlaşın.
- **"Naxış bu miqyasda çəkmək üçün çox sıxdır."** Xətlər çertyojun göstərə biləcəyindən daha yaxın olardı. Daha böyük miqyas istifadə edin: çap miqyasını sınayın (1:20 üçün 20).
- **Naxış çox böyük və ya çox kiçik görünür.** Miqyas naxış vahidi başına çertyoj vahidlərindədir; yuxarıda 4-cü addıma baxın.
- **Ştrixlama konturunu izləməyi dayandırdı.** {{cmd:HATCH}} ilə yaradılan ştrixlama onu yaradan obyektlərlə qalır: konturu köçürün, fırladın və ya miqyaslayın, ştrixlama da onunla gedir; tutacaqla yenidən formalaşdırsanız, ştrixlama yenidən hesablanır. Kontur artıq bağlanmadıqda, ştrixlamanı əllə yenidən formalaşdırdıqda və ya kəsdikdə bağlantı bitir və komanda sətri bunu deyir. Heç nə itmir: sahəni yenidən ştrixləyin ki, yenidən bağlansın.

## Sərhədi ilə qalan ştrixlama

`HATCH` ilə yaratdığınız ştrixlama onu əhatə edənləri yadda saxlayır. Sərhədi köçürün, fırladın və ya miqyaslayın, ştrixlama və onun naxışı onunla gedir. Sərhədi formalaşdırmaq üçün tutacağı çəkin, ştrixlama yenidən hesablanır. Ştrixlamanı təkbaşına köçürsəniz, onun sərhədi də gəlir, proqram çertyojunda doldurulmuş fiqur kimi.

Sərhəd artıq bağlanmırsa və ya ştrixlamanı əllə formalaşdırırsınızsa, bağlantı bitir və komanda sətri bunu deyir. Ştrixlamanın özü qalır. Ştrixləyərkən `AS` yazın ki, müstəqil dayanan ştrixlamalar yaranır. Ştrixlamanı sərhədi ilə birlikdə kopyalayın və surətin öz bağlantısı olur.

`HATCHEDIT` (`HE`) ştrixlamanın naxışını, miqyasını, bucağını və başlanğıcını dəyişir və onu sərhədə bağlayır və ya bağlantını bitirir. Bağlantı DWG və DXF 2000 fayllarında saxlanılır. DXF R12 faylında ştrixlama obyekti yoxdur, başqa proqramların yaratdığı bağlantılar oxunmur: onlar üçün `HATCHEDIT` və {{ui:Bağla}} istifadə edin.

Sərhədi olmayan ştrixlama (sərhəd silinib və ya fayl onsuz gəlib) onu geri ala bilər: `HATCHGENERATEBOUNDARY` (`HGB`) ştrixlamanın hər döngəsi ətrafında bağlı polixətt çəkir və Bəli cavab versəniz, ştrixlamanı onlara bağlayır.

## Qradiyent doldurma

`GRADIENT` (`GD`) sahəni naxış əvəzinə qradiyentlə doldurur: `HATCH` ilə eyni seçimlər, sonra növü soruşur (xətti, silindrik, sferik, yarımsferik, əyri və bunların hər biri tərsinə), bir rəng tonu ilə və ya iki rəngi, bucağı və mərkəzləşib-mərkəzləşmədiyini. `HATCH`-də `G` seçimi eyni işi görür. `HATCHEDIT` `G`, və ya {{ui:Xassələr}}-də Qradiyent altında, qradiyenti dəyişir və ya istənilən ştrixlamanı ona çevirir.

Qradiyent ekranda və çapda göstərilir. DWG 2004 və sonrakı versiyada saxlasanız, digər proqramlar həqiqi qradiyent ştrixlaması alır. DXF 2000 və DWG 2000-də qradiyent yoxdur: orada CadCraft onu özü üçün saxlayır və digər proqramlar birinci rəngdə bərk doldurma görür.

## Ştrixlamanı kəsin

`TRIM` ştrixlamanı hər digər obyekt kimi kəsir. Istəmədiyiniz tərəfdə, kəsici kənarın tərəfində ştrixlamaya klikləyin: kənarlar ştrixlanmış sahəni bölür və o hissə silinir. Sürətli rejimdə hər obyekt kəsici kənardır; çox olduqda əvvəlcə kənarları seçin (`T` seçimi). Kəsilmiş ştrixlama artıq sərhədinə bağlı deyil, çünki onu artıq doldurmur.
