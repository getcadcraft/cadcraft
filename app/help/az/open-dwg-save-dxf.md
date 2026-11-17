---
title: DWG açın, redaktə edin və surətini saxlayın
summary: Kiminsə sizə göndərdiyi çertyoju açın, nə gəldiyini yoxlayın, dəyişiklik edin və surəti DWG və ya DXF kimi geri göndərin.
keywords: dwg, dxf, aç, idxal, ixrac, saxla, r12, gediş-dönüş, məsləhətçi, xref, çertyojun yoxlanması, saveas, fərqli saxla, dwg saxlama, format
from: 49de4bf6
---

## Nə edəcəksiniz

Məsləhətçidən gələn DWG-ni açın, CadCraft-ın nəyi göstərə bildiyini və göstərə bilmədiyini yoxlayın, qeyd əlavə edin, vərəqi PDF-ə çap edin və surəti DWG və ya DXF kimi geri göndərmək üçün saxlayın.

## Faylı açın

1. {{key:Mod+O}} basın, və ya {{ui:Aç}} düyməsinə klikləyin.
2. `.dwg` faylını seçin.

Çertyoj oxunarkən status sətri "Oxunur …" göstərir. Bitəndə çertyoj ekranı doldurur, tarixçə isə məsələn "plan.dwg açıldı: 18,240 obyekt, 64 qat" yazır, yanında isə nə qədər vaxt getdiyi göstərilir.

:::offline
Oflayn-sınız. Əgər {{ui:Oflayn üçün saxla}} düyməsi "Oflayn hazırdır" yazırsa, DWG faylları normal açılır. Yoxsa və bu sekmədə hələ heç bir DWG açılmayıbsa, açmaq alınmaya bilər, çünki CadCraft-ın DWG oxuyucusu ilk DWG ilə yüklənir: DXF açın, və ya növbəti dəfə onlayn olanda CadCraft-ı oflayn istifadə üçün saxlayın. Bax: [Oflayn işləmək](common:offline).
:::

## Nə gəldiyini yoxlayın

1. Çertyojun altındakı sol paneldə {{ui:Çertyoj}} bölməsinə baxın: format və versiya, vahidlər, obyektlərin və qatların sayı və vərəqlər.
2. Altında varsa "Bu fayl haqqında" qutusunu oxuyun.

Qutuda sadalanır:

- **Hələ göstərilmir:** CadCraft-ın hələ çəkə bilmədiyi obyektlər, növünə və sayına görə. Onlar buraxılır, təxmin edilmir.
- **Layoutlar (vərəqlər) gəldi:** onları çertyojun altındakı sekmələrlə açın.
- **Dəqiq ölçülər yalnız göründüyü kimi oxuna bildi.**

3. Hər vərəqi görmək üçün çertyojun altındakı sekmələrə klikləyin.
4. {{ui:Cari parametrlər}}-də (heç nə seçilməyib, {{ui:Model}} sekməsi) {{ui:Vahidlər}}-i yoxlayın. Əgər {{ui:Vahidsiz}} yazırsa, amma çertyojun millimetrlərdə olduğunu bilirsinizsə, onu təyin edin ki, vərəq və çap miqyasları düzgün oxunsun.

:::tip
Çertyojun bir hissəsini gözləyib görmürsünüzsə, {{ui:Qatlar}} panelinə baxın: qat faylda söndürülmüş və ya donmuş ola bilər. Adına klikləyin ki, cari olsun; bu onu açır.
:::

## Dəyişikliyinizi edin

1. Qeydləriniz üçün qat yaradın: {{ui:Yeni qat}} düyməsinə klikləyin, `NOTES` yazın və {{key:Enter}} basın.
2. `DT` yazın və {{key:Enter}} basın.
3. Qeydin olacağı yerə klikləyin.
4. Çertyoja uyğun mətn hündürlüyü yazın (bax: [Mətn və etiketlər əlavə edin](topic:text)) və {{key:Enter}} basın.
5. Fırlanmanı 0 saxlamaq üçün {{key:Enter}} basın.
6. Qeydinizi yazın və {{key:Enter}} basın.
7. Bitirmək üçün yenidən {{key:Enter}} basın.

İdxal olunmuş ölçülərə edilən dəyişikliklər normaldır: birini dəyişən kimi CadCraft onu öz üslubunda yenidən çəkir.

## Nəzərdən keçirmək üçün vərəqi çap edin

1. Vərəqin sekməsinə klikləyin.
2. {{key:Mod+P}} basın.
3. {{ui:PDF-i yüklə}} düyməsinə klikləyin.

Bax: [PDF-ə çap et](topic:plot-pdf).

## Surət saxlayın

1. {{key:Mod+S}} basın, və ya {{ui:Saxla}} düyməsinə klikləyin.

DWG açdınız, ona görə brauzer `<name>.dwg` faylını yükləyir, DWG-nin gəldiyi versiyada. Tarixçə, məsələn, "Plan.dwg kimi surət saxlanıldı (DWG (AutoCAD 2018))." yazır və altındakı sətirlərdə dəyişən hər şeyi sadalayır.

2. Faylı göndərməzdən əvvəl həmin sətirləri oxuyun. [DWG nəyi saxlayır və nəyi dəyişir](topic:files#what-a-dwg-keeps-and-changes) hər birini izah edir.

Orijinal DWG-niz heç vaxt dəyişmir. Hər saxlama yeni yükləmədir.

## DWG və ya DXF kimi saxlayın

Formatı özünüz seçmək üçün:

1. {{key:Mod+Shift+S}} basın, və ya {{ui:Fərqli saxla}} düyməsinə klikləyin.

{{ui:Surəti belə saxla}} dialoqu dörd seçimlə açılır, hər biri verəcəyi fayl adı ilə: {{ui:DWG}}, onun {{ui:Versiya}} siyahısı ilə, {{ui:DXF R12}}, {{ui:DXF 2000}} və {{ui:DXF 2000 (binary)}}. Çertyojun cari formatı və versiyası artıq seçilib.

2. İstədiyiniz formata klikləyin. DWG üçün digər ofisin istifadə etdiyi versiyanı və ya köhnəsini seçin: AutoCAD 2018, 2013, 2010, 2007, 2004 və ya 2000.
3. {{ui:Saxla}} düyməsinə klikləyin.

Surət yüklənir. Bundan sonra {{key:Mod+S}} bu çertyojı həmin formatda saxlayır, və bu brauzerdə yeni çertyojlar da onunla başlayır. {{ui:Ləğv et}} və ya {{key:Esc}} heç nə saxlamır, tarixçə isə "Saxlanılmadı." yazır.

Hansını seçmək:

- **DWG** ən çox şeyi saxlayır: viewport-ları ilə vərəqlər, real ölçülər, ştrixlama naxışları, qat və blok adları yazdığınız kimi, və çoxsətirli mətn çoxsətirli mətn kimi. AutoCAD 2000 versiyası ən çox proqramda açılır; 2004 və sonrakılar real rəngləri də saxlayır.
- **DXF 2000** mətn faylıdır və DWG-nin saxladığı demək olar hər şeyi saxlayır: hər vərəq viewport-ları ilə layout kimi, real ölçülər, ştrixlama naxışları, real rənglər, xətt qalınlıqları, xətt tipləri və adlar yazdığınız kimi. AutoCAD 2000 və sonrakı versiyalarda və əksər CAD proqramlarında açılır. Multileader-lər onların çəkdiyi xətlərə, ox başlarına və mətnə çevrilir. DXF 2000 və ya sonrakı versiyada açılan DXF DXF 2000 kimi saxlanılır.
- **DXF 2000 (binary)** DXF 2000 ilə eyni məzmunu formatın binary formasında saxlayır: hər ədədi dəqiq saxlayan daha kiçik fayl. Digər proqramların binary DXF faylları mətn kimi açılır, və binary DXF-dən açılan çertyoj binary kimi geri saxlanılır.
- **DXF R12** demək olar hər CAD proqramında açılır. İlk vərəqi viewport-ları ilə, CadCraft-ın digər vərəqlərini isə saxlayır. Çoxsətirli mətn və ştrixlama kimi yeni şeyləri sadələşdirir.

## Digər ofis nə görəcək

DWG-də:

- Xətlər, qövslər, çevrələr, ellipslər, polixətlər, mətn, çoxsətirli mətn, atributları ilə bloklar, bərk doldurmalar, ştrixlama naxışları və qatlar gördüyünüz kimi.
- Real ölçülər: digər proqram onları uzadanda yenidən ölçür.
- Hər vərəq, kağızı və viewport-ları ilə.
- Multileader-lər multileader kimi. AutoCAD 2000 versiyasında real rənglər ən yaxın standart rəngə çevrilir.

DXF R12-də:

- Xətlər, qövslər, çevrələr, polixətlər, mətn, blok istinadları və ölçülər gördüyünüz kimi. Ölçülər real ölçü olaraq qalır.
- Qat adları böyük hərflərlə, boşluqlar `_` ilə əvəz olunmuş.
- İlk vərəq çertyojun kağız sahəsi kimi, viewport-ları ilə. Sonrakı vərəqlər `CCLAYOUT_1` və s. adlı bloklar kimi gəlir; onlara hər vərəq layout kimi lazımdırsa, hər vərəqin PDF-ni də çap edin.
- Çoxsətirli mətn ayrı sətirlər kimi, ellipslər polixətt kimi, ştrixlamalar isə konturlar kimi.

Hər iki halda, DWG açanda "Hələ göstərilmir" olan hər şey surətdə **yoxdur**, tarixçədə saxlandığı yazılmadıqca: DWG-nin OLE obyektləri və model sahəsindəki 3D cisimləri DWG kimi saxlanarkən geri yazılır. Onlara deyin, və PDF də göndərin.

## Ümumi səhvlər

- **"CadCraft DWG və DXF çertyojlarını açır."** Faylın uzantısı başqadır. `.dwg` və ya `.dxf` olduğunu yoxlayın.
- **"Bu çertyoj oxuna bilmədi."** DWG zədələnib və ya oxuyucunun idarə etmədiyi versiyadadır. DXF və ya köhnə versiyada saxlanmış DWG istəyin.
- **"Bu binary DXF bir obyektin ortasında bitir."** Fayl kəsilib və ya zədələnib. Oxuna biləni açmaq üçün RECOVER yazın, və ya faylı yenidən istəyin.
- **Saxlanılmış fayl `name (1).dwg` və ya `name (1).dxf` adlanır.** Qovluqda eyni adlı fayl artıq olanda brauzer belə edir.
- **Köhnə proqramları var və DWG-ni aça bilmir.** {{ui:Versiya}} {{ui:AutoCAD 2000}} ilə DWG kimi saxlayın, və ya {{ui:DXF R12}} kimi: demək olar hər CAD proqramı onu açır.
- **Çertyojun hissələri itib.** Əlaqəli çertyojlar (xref-lər) siz onların fayllarını seçənə qədər yüklənmir ({{cmd:XREF}}, `R`), şəkillər isə fayl adları ilə çərçivə kimi göstərilir.
