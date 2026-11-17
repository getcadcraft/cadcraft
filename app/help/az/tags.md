---
title: Teqlər: cədvəllərə verilən atributlar
summary: Teqi təyin edin (növü, qəbul edəcəyi dəyərlər, tətbiq olunduğu bloklar), blok istinadlarına qoyun və istinadları CSV kimi saxlanıla bilən cədvəl kimi siyahılayın.
keywords: teq, teqlər, atribut, cədvəl, məlumat çıxarışı, xassə, yanğın dərəcəsi, seçim siyahısı, blok istinadı, TAGS, csv
from: 9b90bacc
---

**Teq** təyinatı olan blok atributudur: hansı növ dəyər saxladığı, hansı dəyərlərə icazə verildiyi və hansı bloklara tətbiq olunduğu. Dəyərlər adi blok atributlarıdır, buna görə hər digər proqram onları oxuyur və {{cmd:ATTEDIT}} onları göstərir. Yalnız təyinatlar yenidir və çertyojda saxlanılır.

## Təyin edin və qoyun

{{cmd:TAGS}} yazın və seçin:

- {{ui:Təyin et}}: ad (hərflər, rəqəmlər, boşluq, `_ . -`), növ (`text`, `number`, `integer`, `yesno`, `length`, `angle`), icazə verilən dəyərlər `;` ilə ayrılmış (hər hansı biri üçün boş buraxın) və tətbiq olunduğu blok adları (`DOOR*` DOOR ilə başlayan hər bloku tutur; boş olması hər blok deməkdir).
- {{ui:Dəst}}: blok istinadları seçilmiş halda `FireRating=60 min; Width=850` yazın. İcazə verilən siyahıda olmayan dəyər, ya da rəqəm teqi üçün rəqəm olmayan dəyər rədd edilir və bu bildirilir. Bir geri qaytarma addımı. Atributu olmayan blok onu gizli atribut kimi alır.
- {{ui:Cədvəl}}: teq tətbiq olunan blokun hər istinadı, istəyə görə teqə və ya blok adına görə qruplaşdırılmış, çap olunmuş və CSV kimi saxlanılmış.
- {{ui:Çıxar (R)}}: təyinatı unudur; dəyərlər istinadlarda qalır.

Teqi adlandırmaq onun dəyərlərini hər istinadda yenidən adlandırır. Teq adları böyük-kiçik hərflərə həssas deyil, atribut adları kimi.
