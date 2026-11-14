---
title: Nümunə çertyojdan öyrənin
summary: CadCraft-ın nümunə evini və ya nümunə as-built-ini açın və vərəqlərini, ştampını, ölçülərini və qatlarını gəzin.
keywords: nümunə, nümunələr, nümunə çertyoj, öyrən, dərslik, təlimat, ştamp, vərəqlər, as-built, memarlıq dəsti, nümunə aç
from: aa1f960a
---

## Nə öyrənəcəksiniz

Tamamlanmış dəst necə qurulur: model fəzası, miqyaslı görünüş pəncərələri olan vərəqlər, atributlu ştamp, fut və düymlərdə və millimetrlərdə ölçülər, qatlar. Nümunələr CadCraft-ın öz nümunələridir və istənilən məqsədlə pulsuz istifadə oluna bilər (CC0).

## Nümunə açın

1. Sol paneldə {{ui:Çertyoj}} altında {{ui:Nümunə aç}} düyməsinə klikləyin (və ya {{cmd:SAMPLES}} yazın; lent üslublarında o {{ui:Fayl}} menyusundadır).
2. {{ui:Nümunə ev}} yanındakı {{ui:Aç}} düyməsinə klikləyin. Öz sekmesində açılır, beləliklə işiniz açıq qalır.

## Modelə baxın

1. {{ui:Hüdudlar}} düyməsinə klikləyin (və ya `ZOOM` yazın, sonra `E`): plan, ön fasad, kəsik və divar detalı.
2. {{ui:Qatlar}} siyahısında `A-ANNO-DIMS` yanındakı göz işarəsinə klikləyin ki, ölçüləri gizlədəsiniz, yenə klikləyin ki, göstərəsiniz.
3. Qapıya klikləyin: {{ui:Xassələr}} `DOOR-32` blok istinadını göstərir. Qapılar və pəncərələr bloklardır, fırlanmış və əks etdirilmiş şəkildə yerləşdirilib.

## Vərəqlər

1. Çertyojun altında {{ui:A-101 FLOOR PLAN}} klikləyin: bir görünüş pəncərəsi olan ARCH D vərəqi, miqyası 1/4" = 1'-0".
2. Görünüş pəncərəsinin içinə iki dəfə klikləyin ki, onun vasitəsilə modellə işləyəsiniz; kənarına iki dəfə klikləyin ki, geri qayıdasınız.
3. {{ui:A-501 DETAILS}} divar detalını 1 1/2" = 1'-0" miqyasında göstərir: eyni model, başqa miqyas.

## Ştamp

1. İstənilən vərəqdə ştampa iki dəfə klikləyin: {{ui:Atributları redaktə et}} PROJECT, TITLE, SCALE, DATE, DRAWN və SHEET sadalayır.
2. DRAWN-u öz baş hərflərinizlə dəyişin və {{ui:OK}} düyməsinə klikləyin.
3. Ştampın özünü hər vərəqdə dəyişmək üçün onu seçin və {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Yerində redaktə}} seçin. Bax: [Atributlar](topic:attributes).

## As-built

{{ui:Nümunə as-built}} eyni qaydada açın. `SCAN-SLICE` üzərindəki boz nöqtələr skan kəsiyidir; `AB-WALL` üzərindəki divarlar onların üzərindən izlənib. Şərq divarı 35 mm bucaqdan çıxıb: ölçülər bunu iki dəfə deyir — millimetrlə (`AB-DIMS-MM`) və futla və düymlə (`AB-DIMS-FTIN`, eyni uzunluqlar ölçü miqyası vasitəsilə). `REV-1` üzərindəki qırmızı düzəliş buludları planalmanın tapdıqlarını göstərir.

## Növbəti

- [Ölçü mətninin ölçüsünü dəyişin](topic:change-dimension-text-size)
- [PDF-ə çap et](topic:plot-pdf): {{ui:A-101 FLOOR PLAN}} çap edin.
