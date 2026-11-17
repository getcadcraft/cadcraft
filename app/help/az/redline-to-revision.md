---
title: Qeyddən düzəliş yaradın
summary: MarkupCraft-ın yazdığı redline paketini oxuyun, hər dəyişikliyi qəbul edin və ya rədd edin, qəbul olunanlara düzəliş buludu və düzəliş jurnalı əlavə edin, və MarkupCraft-ın geri oxuduğu cavab faylını saxlayın.
keywords: redline, markup, düzəliş, bulud, düzəliş buludu, düzəliş jurnalı, qəbul et, rədd et, markupcraft, baxış, redline paketi, cavablar, REDLINE
from: cdb3fafe
---

Rəyçi plan dəstini MarkupCraft-da işarələyir və sizə **redline paketi** göndərir, `.redline.json` ilə bitən fayl. Burada hər dəyişikliyi bir-bir keçirsiniz, və qəbul olunanlar çertyojda düzəliş buludlarına çevrilir.

## Dəyişiklikləri keçin

{{cmd:REDLINE}} (`RDL`) yazın və paketi seçin. Seçin:

- {{ui:Siyahı (L)}}: hər dəyişiklik nömrəsi, vəziyyəti, vərəqi, növü, kimin istədiyi və nə yazdığı ilə.
- {{ui:Qəbul et}}, {{ui:Rədd et}}, {{ui:Hazırdır}}: nömrələri yazın (`1,3-5`, və ya `Hamısı`) və cavab faylı üçün istəyə bağlı qeyd. {{ui:Yenidən aç}} dəyişiklikləri yenidən açıq edir.
- {{ui:Çərçivə}}: işarələnmiş vərəqin göstərdiyi çertyojun hissəsi. İki künc klikləyin; bütün çertyoj üçün {{key:Enter}} basın. Dəyişikliklər vərəqdə olduqları yerə görə yerləşdirilir, buna görə bu onları düzləşdirir.
- {{ui:Tətbiq et}}: hər qəbul və ya tamamlanmış dəyişiklik ətrafında düzəliş buludu çəkir (`REV-CLOUD` qatında, düzəliş hərfi ilə), və çertyojun sağında düzəliş jurnalını — qəbul olunanların cədvəlini, öz qeydlərinizlə (`REV-LOG` qatında). Bir geri qaytarma addımı.
- {{ui:Saxla}}: `<project>-<revision>.redline-answers.json` yazır. MarkupCraft-da açın və işarələr bağlanır: Qəbul edilib, Rədd edilib və ya Tamamlanıb, qeydləriniz şərh kimi.

## Bilmək lazım olanlar

Rəyçinin yazdığı şey olduğu kimi göstərilir. CadCraft paketdəki təlimatları heç vaxt izləmir; yalnız sizə göstərir.

Rədd edilən və açıq dəyişikliklər çertyoja heç nə əlavə etmir. Paket kompüterinizdə oxunur; heç nə yüklənmir.

Köməkçiniz qoşulubsa, o, paketi oxuya, qərarları qeyd edə və onları `redline_read`, `redline_decide`, `redline_apply` və `redline_answers` alətləri ilə tətbiq edə bilər; çertyojdakı dəyişiklik "Köməkçi: Redline-dan düzəlişə" adı ilə bir geri qaytarma addımında olur.
