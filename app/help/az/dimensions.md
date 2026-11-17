---
title: Planı ölçün
summary: Xətti, paralel, bucaq, radius və diametr ölçüləri əlavə edin, ölçünü davam etdirin və baza ölçüsü ilə zəncirləyin, mətni əvəz edin.
keywords: ölçü, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, zəncir, sətir, şərh, ölçü aləti, harada, tap, alətlər paneli, ölçmək, mm, cm, m, km, vahidlər
from: 9ee65123
---

## Nə yaradacaqsınız

Ölçülü otaq: ümumi en və hündürlük, bir divar boyunca ölçülər zənciri, bucaq altında divar, əyri künc və bucaq.

Başlamazdan əvvəl, çertyojunuz böyükdürsə, oxuyun: [Ölçü ölçülərini təyin edin](topic:dimension-settings). Standart olaraq ölçü mətni 2.5 çertyoj vahidi hündürlükdədir ki, bu da millimetrlə ölçülən çertyojda çox kiçikdir. Aşağıdakı addımlar üçün əvvəlcə `DIMSCALE` yazın, {{key:Enter}} basın, `50` yazın və {{key:Enter}} basın.

## Ölçü alətləri harada yerləşir

CadCraft menyu üslubunda (CadCraft-ın başladığı), ölçü alətləri çertyojun üstündəki alətlər panelində, {{ui:Şərh}} qrupundadır: {{ui:Xətti}}, {{ui:Paralel}}, {{ui:Bucaq}}, {{ui:Radius}} və {{ui:Diametr}}. Qrupun {{ui:Daha çox}} menyusunda {{ui:Ölçünü davam etdir}} və {{ui:Baza ölçüsü}} var. Düymənin nə etdiyini görmək üçün göstərici ilə üzərinə gəlin.

- {{ui:Klassik çertyoj}} və ya {{ui:Lent}} menyu üslubunda {{ui:Şərh}} sekmesini açın: alətlər onun {{ui:Ölçülər}} panelindədir. {{ui:Klassik çertyoj}} həmçinin {{ui:Əsas}} sekmesində, {{ui:Şərhlər}} altında {{ui:Xətti}} var. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).
- Və ya çertyojun altındakı komanda sətrində komandanı yazın və {{key:Enter}} basın: `DLI` (xətti), `DAL` (paralel), `DAN` (bucaq), `DRA` (radius), `DDI` (diametr), `DCO` (davam), `DBA` (baza).
- Dar ekranda alətlər paneli bir sətirdir: {{ui:Şərh}}-ə çatmaq üçün onu yana sürüşdürün.

Uzunluqları millimetr, santimetr, metr və ya kilometrlə göstərmək üçün bax: [Ölçülər mm, cm, m və ya km ilə](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Ölçmək üçün nəsə çəkin

1. `PL` yazın və {{key:Enter}} basın.
2. `0,0` yazın və {{key:Enter}} basın.
3. `@6000,0` yazın və {{key:Enter}} basın.
4. `@1500<60` yazın və {{key:Enter}} basın.
5. `@0,2700` yazın və {{key:Enter}} basın.
6. `@-6750,0` yazın və {{key:Enter}} basın.
7. `C` yazın və {{key:Enter}} basın. Kontur bağlanır.
8. Çevrə başlatmaq üçün `C` yazın və {{key:Enter}} basın.
9. Mərkəz üçün divarlardan uzaqda, otağın içində klikləyin.
10. `600` yazın və {{key:Enter}} basın. Bu sütundur.
11. {{ui:Hüdudlar}} klikləyin.

## Xətti: üfüqi və ya şaquli

1. `DLI` yazın və {{key:Enter}} basın.
2. `Specify first extension line origin` sorğusunda sol-aşağı künca tutun (Son nöqtə) və klikləyin.
3. `Specify second extension line origin` sorğusunda sağ-aşağı künca tutun və klikləyin.
4. Xaç nişanını otağın altına aparın. Ölçü ardınca gəlir, üfüqi.
5. Ölçü xəttini yerləşdirmək üçün klikləyin.

Tarixçədə `Dimension text = 6000` yazılır.

Xətti yerləşdirdiyiniz yer istiqaməti müəyyən edir: altda və ya üstdə üfüqi ölçü verir, solda və ya sağda şaquli. Onu məcbur etmək üçün yerləşdirməzdən əvvəl `H` (üfüqi), `V` (şaquli) və ya `R` (fırladılmış, sonra bucaq) yazın.

:::tip
Birinci sorğuda nöqtə seçmək əvəzinə {{key:Enter}} basın, sonra xəttə, qövsə, çevrəyə və ya polixətt parçasına klikləyin. CadCraft hər iki ucu sizin üçün götürür.
:::

## Davam etdir: ölçülər zənciri

{{cmd:DIMCONTINUE}} ({{ui:Şərh}} › {{ui:Daha çox}} › {{ui:Ölçünü davam etdir}} və ya `DCO`) yaratdığınız son xətti və ya paralel ölçüdən davam edir, hər yeni ölçü əvvəlkinin bitdiyi yerdən başlayır.

1. `DLI` yazın və {{key:Enter}} basın.
2. Birinci başlanğıc üçün `0,0` yazın və {{key:Enter}} basın.
3. İkinci başlanğıc üçün `2000,0` yazın və {{key:Enter}} basın.
4. Yerləşdirmək üçün otağın altında klikləyin.
5. `DCO` yazın və {{key:Enter}} basın.
6. `4500,0` yazın və {{key:Enter}} basın. İkinci ölçü birincidən davam edir, eyni xətt üzərində.
7. Sağ-aşağı künca tutun və klikləyin. Üçüncü ölçü zənciri tamamlayır.
8. Komandanı bitirmək üçün {{key:Enter}} basın.

:::note
Burada nöqtələr qəsdən mütləq koordinatlar kimi yazılır. `@` nöqtəsi verdiyiniz son nöqtədən sayılır və son nöqtə əvvəlki ölçü xəttini yerləşdirdiyiniz yerdir, ölçünün ucu deyil. Ölçülər zəncirində mütləq nöqtələr, tutmalar və ya Ortoqonal aktiv olduqda təkcə məsafə daha təhlükəsizdir.
:::

Komandadan çıxmadan zəncirdəki son ölçünü geri götürmək üçün `U` yazın və {{key:Enter}} basın.

## Baza: bir xəttdən yığılmış ölçülər

{{cmd:DIMBASELINE}} ({{ui:Şərh}} › {{ui:Daha çox}} › {{ui:Baza ölçüsü}} və ya `DBA`) hər yeni ölçünü son ölçünün birinci başlanğıcından ölçür və hər birini bir addım daha kənara yığır.

1. `DLI` yazın və {{key:Enter}} basın.
2. Sol-aşağı künca tutun və klikləyin.
3. Sol-yuxarı künca tutun və klikləyin.
4. Xaç nişanını otağın soluna aparın və klikləyin. Şaquli ölçü görünür.
5. `DBA` yazın və {{key:Enter}} basın.
6. 60 dərəcəlik divarın yuxarı ucuna tutun (Son nöqtə) və klikləyin. İkinci şaquli ölçü görünür, birincidən bir addım daha kənarda.
7. Bitirmək üçün {{key:Enter}} basın.

## Paralel: meylli xəttin həqiqi uzunluğu

1. `DAL` yazın və {{key:Enter}} basın.
2. Obyekt seçmək üçün {{key:Enter}} basın.
3. 60 dərəcəlik divara klikləyin.
4. Kənara doğru hərəkət etdirin və yerləşdirmək üçün klikləyin.

Mətn 1500 yazır: divar boyunca ölçülmüş həqiqi uzunluq.

## Radius və diametr

1. `DRA` yazın və {{key:Enter}} basın.
2. Sütun çevrəsinə klikləyin.
3. Xaç nişanını hərəkət etdirin. Göstərici mərkəzdən xaç nişanına doğru yönəlir.
4. Mətni yerləşdirmək üçün klikləyin.

Mətn `R600` yazır. {{cmd:DIMDIAMETER}} (`DDI`) eyni işi ⌀ işarəsi və diametrlə görür.

## Bucaq

Buradakı divarlar bir polixəttdir, ona görə küncü onun təpəsi ilə ölçün. (İki ayrı xətt arasında isə xətlərə klikləyə bilərsiniz.)

1. `DAN` yazın və {{key:Enter}} basın.
2. `Select arc, circle or line, or Enter for a vertex` sorğusunda {{key:Enter}} basın.
3. `Specify angle vertex` sorğusunda sağ-aşağı künca tutun və klikləyin.
4. `Specify first angle endpoint` sorğusunda sol-aşağı künca tutun və klikləyin.
5. `Specify second angle endpoint` sorğusunda 60 dərəcəlik divarın yuxarı ucuna tutun və klikləyin.
6. Xaç nişanını otağın içində, künc yaxınlığında hərəkət etdirin və klikləyin.

Mətn `120°` yazır: küncün daxili bucağı. Küncün başqa tərəfində yerləşdirilsə, ölçü onun yerinə həmin tərəfdəki bucağı ölçür. Birinci sorğuda onun əhatə etdiyi bucağı ölçmək üçün qövsə klikləyin, ya da aralarındakı bucağı ölçmək üçün iki xəttə klikləyin.

## Mətni dəyişin

Öz mətninizi yazmaq üçün ölçünü yerləşdirməzdən əvvəl `T` yazın və {{key:Enter}} basın, sonra mətni yazın. Mətndə `<>` ölçülən dəyəri bildirir: `<> TYP.` `6000 TYP.` verir. Ölçülən dəyəri saxlamaq üçün boş sətirdə {{key:Enter}} basın.

Mövcud ölçünü dəyişmək üçün:

1. Ona klikləyin.
2. Sağ paneldə {{ui:Mətn}} sahəsinə yazın. Ölçülən dəyər üçün onu boş buraxın.
3. {{key:Enter}} basın.

## Ölçülər həndəsəni izləyir

Ölçü öz nöqtələrini yadda saxlayır. Onun tutacaqlarından birini sürükləyin, ya da ölçdüyü obyektlərlə birlikdə köçürün, fırladın və ya miqyaslayın, o yenidən ölçür. Ölçünü köçürmədən həndəsəni uzatsanız, ölçü ardınca gəlmir: öz nöqtələrini saxlayır.

## Ümumi səhvlər

- **Mətn və oxlar ya mikroskopik, ya da çox böyükdür.** Ümumi miqyası təyin edin: bax: [Ölçü ölçülərini təyin edin](topic:dimension-settings).
- **"Ölçmək istədiyiniz bucağın içərisindən nöqtə seçin."** Bucaq ölçüsü üçün klikləditiniz nöqtə bucağın qollarından birindədir. Onu bucağın içinə köçürün.
- **Davam səhv ölçüdən başladı.** O, həmişə bu sessiyada yaradılmış son xətti və ya paralel ölçüdən davam edir. Əvvəlcə davam ediləcək ölçünü yaradın (və ya yenidən yaradın).
- **Ölçü şaquli çıxdı.** Onu yanda yerləşdirmisiniz. Yerləşdirməzdən əvvəl `H` yazın.
- **Fut və düym.** Əvvəlcə çertyojun uzunluq formatını {{ui:Memarlıq}} təyin edin, ya da ölçünün {{ui:Xassələr}} daxilində {{ui:Format}}-ını: bax: [Ölçülərdə fut və düym](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Rəqəmlər istədiyiniz vahiddə deyil.** {{ui:Mətndəki vahidlər}} seçin: bax: [Ölçülər mm, cm, m və ya km ilə](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
