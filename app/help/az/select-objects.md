---
title: Obyektləri seçmək
summary: Obyektləri bir-bir, pəncərə və ya kəsişmə ilə, komandadan əvvəl və ya komanda zamanı seçin və obyektləri seçimdən çıxarın.
keywords: seç, seçim, pəncərə, kəsişmə, isim-fel, klikləmə, hamısı, son, əvvəlki, çəpər, çıxarma, əlavə etmə, tab, dövrə, üst-üstə, qseselect, sürətli seçmə, filtr, oxşarları seç, selectsimilar, shift, seçimi ləğv et, ctrl+a, pickfirst
from: 676508c7
---

## Öyrənəcəksiniz

Komandanın hansı obyektlər üzərində işləyəcəyini necə seçməli. CadCraft-da iki yol var və hər ikisi yaxşıdır:

- **Əvvəlcə seçin, sonra komanda** (isim-fel). Obyektləri seçin, sonra Köçürmək üçün `M` yazın. Komanda seçiminizi götürür və dərhal növbəti sualına keçir.
- **Əvvəlcə komanda, sonra seçim** (fel-isim). `M` yazın; komanda `Obyektləri seçin:` soruşur; seçin, sonra {{key:Enter}} basın.

## Obyektləri bir-bir seçin

1. Heç bir komanda işləmirkən xətti klikləyin. O, vurğulanır və tutacaqları (kiçik kvadratlar) görünür. Sağ panel onun xassələrini göstərir.
2. Başqa obyektə klikləyin. O, seçimə əlavə olunur.
3. {{key:Shift}} basıb seçilmiş obyekti klikləyin. O, seçimdən çıxarılır.
4. {{key:Esc}} basın. Heç nə seçilməyib.

## Pəncərə və kəsişmə

Boş yerdə bir dəfə klikləyin, hərəkət edin və yenidən klikləyin: düzbucaqlı alınır. Basıb sürükləmək isə sərbəst lasso çəkir, eyni iki növ ilə (bax: [Lasso ilə seçmə](topic:lasso-selection); Parametrlər sürüşdürməni düzbucaqlı etməyə imkan verir). Hansı obyektlərin seçiləcəyi istiqamətdən asılıdır:

| Hərəkət istiqaməti | Qutu | Seçir |
|---|---|---|
| Soldan sağa | Pəncərə | Yalnız qutunun **tamamilə içində** olan obyektləri |
| Sağdan sola | Kəsişmə | Qutunun içindəki **və** ona toxunan obyektləri |

1. Bir neçə üst-üstə düşən xətt və dairə çəkin.
2. Bəzi obyektlərin solunda boş yerdə klikləyin, sağa hərəkət edin və yenidən klikləyin. Yalnız tamamilə içindəki obyektlər seçilir.
3. {{key:Esc}} basın.
4. Sağdakı boş yerdə klikləyin, bəzi obyektlərin üzərindən sola hərəkət edin və yenidən klikləyin. Qutunun toxunduğu hər şey seçilir.
5. {{key:Shift}} basıb seçilmiş bəzi obyektlərin üzərində qutu və ya lasso çəkin. Onlar seçimdən çıxır.

## Əvvəlcə seçin, sonra komandanı işlədin

1. İki dairə seçin.
2. `M` yazın və {{key:Enter}} basın.

Tarixçədə `2 tapıldı` yazılır, sorğu isə dərhal `Baza nöqtəsini göstərin` olur. Köçürməni bitirin (bax: [Köçürmək, kopyalamaq, fırlatmaq, miqyaslamaq və güzgü əksi](topic:modify-objects)).

Komanda bitdikdə seçim təmizlənir, buna görə növbəti komanda təmiz başlayır.

Bu üsulla seçim qəbul edən komandalar: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} və {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} və {{cmd:CHAMFER}} həmişə obyektləri bir-bir seçməyinizi istəyir; {{cmd:TRIM}} və {{cmd:EXTEND}} isə klikləmə və ya parçalar boyunca sürüklədiyiniz yolu qəbul edir (bax: [Kəsmək və uzatmaq](topic:trim-and-extend)).

## Komandanı işlədin, sonra seçin

1. Heç bir şeyin seçilmədiyinə əmin olun ({{key:Esc}}).
2. `E` yazın və {{key:Enter}} basın. Sorğu `Obyektləri seçin:` olur.
3. Klikləyin və ya pəncərə və kəsişmələri sürükləyin. Tarixçə hər seçimi sayır (`1 tapıldı`, `3 tapıldı`).
4. Seçməni bitirmək üçün {{key:Enter}}, {{key:Space}} basın və ya sağ klikləyin.

Obyektlər silinir və tarixçə neçə obyektin silindiyini yazır.

`Obyektləri seçin:` sorğusunda həmçinin bunları yaza bilərsiniz:

- `ALL`, sonra {{key:Enter}}: açıq sekmədə redaktə edə biləcəyiniz hər obyekt.
- `L` (və ya `LAST`), sonra {{key:Enter}}: ən son çəkilmiş obyekt.
- `P` (Əvvəlki): son komandanın üzərində işlədiyi obyektlər, hələ yerindədirsə.
- `F` (Çəpər): xətt boyunca nöqtələrə klikləyin və ya yazın; xəttin kəsdiyi hər obyekt əlavə olunur. Çəpəri bitirmək üçün {{key:Enter}} basın; `U` onun son nöqtəsini geri alır.
- `W` (Pəncərə) və ya `C` (Kəsişmə): iki künc, sürüklədiyiniz istiqamətdən asılı olmayaraq.
- `R` (Çıxar): bundan sonra klikləmələr, pəncərələr və çəpərlər obyektləri **çıxarır**. Sorğu `Obyektləri çıxarın:` olur. `A` (Əlavə et) geri qaytarır.
- `?`: bu seçimlərin siyahısı tarixçədə.

Bu seçimlər sorğuda göstərilmir, AutoCAD-də olduğu kimi.

## Üst-üstə düşən obyektlərdən birini seçin

Obyektlər üst-üstə düşdükdə və ya toxunduqda klik ən yaxın olanı alır. Başqasını almaq üçün:

1. Göstəricini həmin yerdə sakit saxlayın.
2. {{key:Tab}} basın. Oradakı növbəti obyekt vurğulanır və status paneli hansı olduğunu bildirir ("2 / 3: Walls qatında Xətt").
3. İstədiyiniz vurğulanana qədər {{key:Tab}} basın, sonra tərpətmədən klikləyin.

Göstəricini hərəkət etdirmək yenidən başlayır. Bu, heç bir komanda işləmədikdə, `Obyektləri seçin:` sorğusunda və komandanın bir obyekt seçməyinizi istədiyi hər yerdə işləyir.

## Qayda ilə seçin: Sürətli seçmə

{{cmd:QSELECT}} (`QS`, və ya {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Sürətli seçmə}}) qaydaya uyğun gələn hər obyekti seçir, məsələn radiusu 50-dən kiçik hər dairə və ya adı DOOR-900 olan hər blok referansı.

1. {{ui:Sürətli seçmə}} açın.
2. {{ui:Obyekt növü}} seçin (siyahı hər növün sayını göstərir), sonra {{ui:Xassə}}: {{ui:Qat}}, {{ui:Rəng}} və bəzi növlər üçün {{ui:Uzunluq}}, {{ui:Radius}}, {{ui:Sahə}}, {{ui:Mətn hündürlüyü}}, {{ui:Mətnin məzmunu}}, {{ui:Blok adı}} və ya {{ui:Ştrixlama naxışı}}.
3. {{ui:Operator}} və {{ui:Dəyər}} seçin. `*` joker simvollarla uyğunlaşır (`DOOR-*`); {{ui:Hamısını seç}} həmin növün hər obyektini götürür. Aşağıdakı say seçim etdikcə neçənin uyğun gəldiyini göstərir.
4. {{ui:Necə tətbiq edilsin}}: uyğun gələnləri daxil etmək və ya qalan hər şeyi. {{ui:Tətbiq et}} {{ui:Hazırkı seçim}} seçilmiş olanı daraldır; {{ui:Hazırkı seçimə əlavə et}} ona əlavə edir.
5. {{ui:Seç}} klikləyin. Sonra istədiyiniz komandanı işə salın: o, seçimi istifadə edir.

## Oxşarları seçin

Bir və ya bir neçə obyekt seçin və {{cmd:SELECTSIMILAR}} (`SIM`) yazın, və ya {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Oxşarları seç}} seçin. Eyni növdə, eyni qatda və eyni rəngdə olan hər obyekt seçilir; blok referansları üçün eyni blok da lazımdır, ştrixlamalar üçün isə eyni naxış. Hansının uyğun gəlməli olduğunu seçmək üçün onun `Obyektləri seçin` sorğusunda `SE` yazın.

## İndi seçin, sonra istifadə edin

`SELECT` yazın və {{key:Enter}} basın, yuxarıdakı üsullardan istənilənilə obyektləri seçin və {{key:Enter}} basın. Onlar növbəti komanda üçün seçilmiş qalır, və `P` sonrakı `Obyektləri seçin:` sorğusunda onları yenidən seçir.

## Hamısını seçin

Heç bir komanda işləmədikdə {{key:Mod+A}} basın və ya alətlər panelində {{ui:Redaktə}} › {{ui:Daha çox}} menyusunda {{ui:Hamısını seç}} seçin: açıq sekmədə redaktə edə biləcəyiniz hər obyekt seçilir. Komanda sətrində nəsə yazmısınızsa, {{key:Mod+A}} o mətni seçir: əvvəlcə {{key:Esc}} basaraq təmizləyin. `Obyektləri seçin:` sorğusunda `ALL` yazın. Həmin menyuda {{ui:Heç birini seçmə}}, və ya {{key:Esc}}, seçimi təmizləyir.

:::tip
Hər klikin seçimi əvəz etməsini istəyirsinizsə ({{key:Shift}} isə əlavə etsin), [CadCraft parametrləri](topic:settings) bölməsində {{ui:Obyektlər üzərində klik}} seçimini {{ui:Seçimi əvəz edir}} olaraq təyin edin.
:::

## Nə seçilə bilməz

- **söndürülmüş**, **dondurulmuş** və ya **kilidli** qatdakı obyektlər. Kilidli obyektlər görünməyə davam edir və onlara tuta bilərsiniz, lakin seçə və dəyişdirə bilməzsiniz.
- Vərəq sekmesində, görünüş pəncərəsi içində göstərilən model. Vərəqin öz obyektlərini seçirsiniz (ştamp, qeydlər, görünüş pəncərəsinin çərçivələri). Modeli redaktə etmək üçün {{ui:Model}} sekmesinə keçin.

## Tez silin

Heç bir komanda işləmədikdə obyektləri seçin, sonra {{key:Delete}} basın ({{key:Backspace}} isə komanda sətrində kursor olmadıqda). Mac klaviaturasında, çertyojda klikləyəndən sonra delete yazılmış düymə işləyir; komanda sətrində kursor olduqda fn və delete birlikdə basın. Bu, seçim üzərində {{cmd:ERASE}} işlədir. Heç nə baş vermirsə, komanda sətrinə nəsə yazmısınız: {{key:Esc}} basın və ya `E` yazın və {{key:Enter}} basın.

## Tez-tez edilən səhvlər

- **Pəncərə çox az götürdü.** Soldan sağa sürüklədiniz, bu yalnız tamamilə içindəkiləri götürür. Kəsişmə üçün sağdan sola sürükləyin.
- **Boş yerdə klik qutu başlatdı.** Boş yerdə bir klik pəncərə başladır; ikinci klik onu bitirir. Ləğv etmək üçün {{key:Esc}} basın və ya sağ klikləyin.
- **Boş yerdə klik seçimi buraxdı.** Bu belədir, {{key:Shift}} saxlamasanız. Belə klikdə seçimi saxlamaq və yalnız {{key:Esc}} ilə təmizləmək üçün, [CadCraft parametrləri](topic:settings#clicking-an-empty-spot) bölməsində {{ui:Boş yerə klikləmə}} seçimini {{ui:Seçimi saxlayır}} olaraq təyin edin.
- **Komanda istəmədiyiniz obyektləri işlətdi.** Onu başlatdığınız zaman nəsə hələ seçilmiş idi. Komandadan əvvəl {{key:Esc}} basın ki, heç nə seçilmədən başlasın.
- **Komandadan sonra heç nə seçilmir.** Bu qəsdəndir: bitmiş komanda seçimi təmizləyir.
