---
title: Çertyojun hansı vahidlərdə olduğunu yoxlayın
summary: Açılmış çertyojun millimetrdə, düymdə və ya başqa vahiddə olduğunu görün, ölçməklə yoxlayın və eyni DXF üçün başqa proqramın niyə fərqli vahid göstərə biləcəyini öyrənin.
keywords: vahidlər, hansı vahidlər, hansı vahid, vahidləri yoxla, millimetr, mm, düym, metrik, imperial, DXF vahidləri, STEP-dən DXF-ə, səhv vahidlər, düym və ya mm, INSUNITS, MEASUREMENT, çertyoj vahidləri, PartCraft DXF
from: c0ee75bb
---

## Nə edəcəksiniz

Açılmış çertyojda bir vahidin nəyi bildirdiyini öyrənin və oxuduğunuz ədədlərin gözlədiyiniz ölçüdə olduğuna əmin olun.

## Addımlar

1. Çertyoju açın, sonra heç nə seçilməməsi üçün {{key:Esc}} düymesini basın, {{ui:Model}} sekmesində.
2. Sağ paneldə, {{ui:Cari parametrlər}} altında {{ui:Vahidlər}} sahəsini oxuyun. Burada bir çertyoj vahidinin nəyi bildirdiyi göstərilir: {{ui:Millimetr}}, {{ui:Düym}}, {{ui:Fut}} və s. PartCraft-dan saxlanılmış DXF-də {{ui:Millimetr}} yazılır.
3. Ölçüsünü bildiyiniz bir şeyi ölçməklə yoxlayın. {{cmd:DIST}} yazın və bir kənarın və ya deşiyin iki ucunu seçin. Ölçüsünü bildiyiniz hissə 25 mm-dirsə və `25` göstərirsə, çertyoj millimetrdədir; əgər təxminən `0.98` göstərirsə, düymdədir.

{{ui:Vahidsiz}} o deməkdir ki, fayl vahidi bildirmir. CadCraft bu halda onu kağızın vahidi kimi qəbul edir (ISO kağızında millimetr, ABŞ kağızında düym), və ədədlər yalnız onları yazan proqramın dəqiqliyi qədər düzgün olur.

## Vahidlər səhvdirsə

{{ui:Vahidlər}} sahəsini dəyişmək **heç nəyin ölçüsünü dəyişmir**: ədədlər eyni qalır, yalnız onların nəyi bildirdiyi dəyişir. Ona görə də yalnız çertyojun həqiqətən nə olduğunu göstərmək üçün təyin edin. Əgər ədədlər millimetrdirsə və {{ui:Vahidlər}} {{ui:Düym}} göstərirsə, {{ui:Millimetr}} seçin. Həndəsəni başqa vahidlərdə istəyirsinizsə, onu {{cmd:SCALE}} ilə miqyaslayın (düymdən millimetrə 25.4, əksinə 1/25.4) və sonra {{ui:Vahidlər}} sahəsini təyin edin.

Uzunluqların necə yazılması (onluq, fut və düym, kəsrlər) ayrıca parametrdir, {{ui:Uzunluq formatı}}: bax [Vahidlər, kağız ölçüləri və miqyaslar](topic:units-papers-scales).

## Niyə başqa proqram düym deyə bilər

DXF öz vahidlərini başlığında bildirir. Ən köhnə DXF növü, R12, vahid dəyişəni ümumiyyətlə yox idi, buna görə də R12-ni ciddi oxuyan proqram oradakı yazını nəzərə almır və öz standart dəyərinə, çox vaxt düymə qayıdır. Fayldakı həndəsə hər halda eynidir: fərq yalnız etiketdədir. PartCraft DXF fayllarını R12 kimi yazır və millimetri iki yolla bildirir (`$INSUNITS` 4 və `$MEASUREMENT` 1), ki, daha çox proqram onları düzgün oxusun. Əgər proqram hələ də düym deyirsə, faylı açanda onun vahidlərini millimetrə təyin edin.

Faylı açmaq əvəzinə çertyoja gətirmək (bax [İdxal zamanı vahidlər](topic:units-on-import)) onun vahidlərini çevirir.
