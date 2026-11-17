---
title: Əmrlər sənədi
summary: CadCraft çertyoj tətbiqindəki hər əmr, onun ləqəbləri, verdiyi suallar, seçimləri və standart dəyərləri.
keywords: əmrlər, ləqəblər, əmr siyahısı, sahə, perimetr, measuregeom, xətt, pline, çevrə, qövs, trim, offset, dimlinear, blok, insert, vərəq, çap, miqyas, kömək, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Əmrin adını və ya ləqəbini yazın və {{key:Enter}} və ya {{key:Space}} basın. Böyük-kiçik hərf fərq etmir, əvvəldə `_`, `-`, `.` və ya `'` işarələri nəzərə alınmır. Əmr sətirinin tarixçəsində hər əmrin qısa siyahısını çap etmək üçün `HELP` (və ya `?`) yazın; bu sənədi açmaq üçün {{key:F1}} basın.

Əmr sətrindəki sualları oxumaq üçün: seçimlər kvadrat mötərizədədir, və birini onun böyük hərfləri ilə seçirsiniz (`D` Diametr üçün). Standart dəyər bucaq mötərizəsindədir; onu qəbul etmək üçün {{key:Enter}} basın. Nöqtə tələb olunan yerdə kliklə və ya [Koordinat və məsafə daxiletməsi](topic:coordinate-entry) bölməsindəki formatlardan hər hansı birini yazmaqla daxil edə bilərsiniz. Məsafə tələb olunan yerdə ədəd yaza və ya iki nöqtəyə klikləyə bilərsiniz.

Nöqtə və ya obyekt tələb olunan yerdə, standart dəyəri olmayan halda {{key:Enter}} basılsa, əmr bitir. {{key:Esc}} əmri ləğv edir. Əmrin etdiyi hər şey bir geri qaytarma addımıdır.

## Çək

### LINE

Ləqəblər: `L`. Düz parçalar, hər biri öz obyekti.

- `Birinci nöqtəni göstərin` (Enter: verdiyiniz son nöqtədən başla)
- `Növbəti nöqtəni göstərin [Geri qaytar (U)]`, təkrarlanır. İki parçadan sonra: `[Geri qaytar (U)/Bağla (C)]`.
- `U` son parçanı geri qaytarır, `C` birinci nöqtəyə bağlayır və bitirir. Enter bitirir.

### PLINE

Ləqəblər: `PL`. Xətt və qövs parçalarından bir polixətt.

- `Başlanğıc nöqtəni göstərin`
- `Növbəti nöqtəni göstərin [Qövs (A)/Bağla (C)/Geri qaytar (U)]` (iki parça olduqdan sonra Bağla)
- `A` qövslərə keçir: `Qövsün son nöqtəsini göstərin [Xətt (L)/Bağla (C)/Geri qaytar (U)]`. Hər qövs əvvəlki parçaya toxunan davam edir. `L` yenidən xəttə qayıdır, `CL` qövslə bağlayır.
- Enter bitirir; polixətt açıq qalır.

### CIRCLE

Ləqəblər: `C`.

- `Çevrənin mərkəz nöqtəsini göstərin [3P/2P/Ttr (tan tan radius)]`
- `Çevrənin radiusunu göstərin [Diametr (D)] <son radius>`; `D` `Çevrənin diametrini göstərin` soruşur.
- `2P`: diametrin iki ucu. `3P`: çevrə üzərində üç nöqtə.
- `T` (həmçinin `TTR` əmri və {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Circle: Tan, Tan, Radius}}): `Birinci toxunan üçün obyekt üzərində nöqtəni göstərin`, sonra ikinci, sonra radius (Enter: son radius). Çevrə hər iki obyektə toxunur (xətlər, qövslər, çevrələr, polixətt parçaları, blokların içində də); toxunanlar arasında seçdiyiniz nöqtələrə ən yaxın olan. Heç biri uyğun gəlməyəndə "Circle does not exist" yazılır.
- `TTT` (və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Circle: Tan, Tan, Tan}}): üç obyekt; üçünə də toxunan çevrə, seçdiyiniz nöqtələrə ən yaxın (üç xətt daxili və ya xarici çevrə verir, harada seçməyinizdən asılı olaraq).

### ARC

Ləqəblər: `A`.

- `Qövsün başlanğıc nöqtəsini göstərin [Mərkəz (C)]`, `Qövsün ikinci nöqtəsini göstərin`, `Qövsün son nöqtəsini göstərin`: üç nöqtədən keçən qövs.
- `C`: `Qövsün mərkəz nöqtəsini göstərin`, `Qövsün başlanğıc nöqtəsini göstərin`, `Qövsün son nöqtəsini göstərin`. Qövs başlanğıcdan sona saat əqrəbinin əksinə gedir.

### RECTANG

Ləqəblər: `REC`, `RECTANGLE`. Bağlı polixətt.

- `Birinci künc nöqtəsini göstərin`, `Digər künc nöqtəsini göstərin`. İkinci künc üçün `@en,hündürlük` yazın.

### POLYGON

Ləqəblər: `POL`. Düzgün çoxbucaqlı, bağlı polixətt kimi.

- `Tərəflərin sayını daxil edin <4>` (3-dən 1024-ə)
- `Çoxbucaqlının mərkəzini göstərin`
- `Seçimi daxil edin [Çevrəyə daxil (I)/Çevrəyə xarici (C)] <I>`
- `Çevrənin radiusunu göstərin`: klikləyin və ya nöqtə yazın; onun məsafəsi ölçünü, istiqaməti isə çoxbucaqlının fırlanmasını təyin edir.

### ELLIPSE

Ləqəblər: `EL`.

- `Ellipsin ox uc nöqtəsini göstərin [Mərkəz (C)]`, `Ox üzrə digər uc nöqtəsini göstərin`, `Digər oxa qədər məsafəni göstərin`
- `C`: `Ellipsin mərkəzini göstərin`, `Ox uc nöqtəsini göstərin`, sonra digər oxa qədər məsafə.
- `I` (`Isocircle`, yalnız {{cmd:ISODRAFT}} açıq olduqda): mərkəz, sonra radius və ya `Diametr`: cari izometrik müstəvidə çevrənin göründüyü ellips.

### HATCH

Ləqəblər: `H`, `BH`, `BHATCH`; və ya alətlər panelində {{ui:Ştrixlama}}. Əvvəl cari naxışı, miqyası və bucağı çap edir.

- `Daxili nöqtəni göstərin [Obyektləri seç (S)/Naxış (P)/Miqyas (SC)/Bucaq (A)]`, təkrarlanır (sahə olduqda `Geri qaytar (U)`): hər klik ətrafındakı bağlı sahəni əlavə edir, içindəki bağlı formalar ada kimi. Enter hamısından bir ştrixləmə yaradır.
- `S`: `Bağlı obyektləri seçin` (bağlı polixətlər, çevrələr, bağlı ellipslər).
- `P`: `Naxış adını daxil edin, SOLID və ya siyahı üçün ? <cari>`. `SC`: `Naxış miqyasını göstərin`. `A`: `Naxış bucağını göstərin`.
- `G` (Qradiyent): doldurma naxış yerinə qradiyent olur. Sualları üçün {{cmd:GRADIENT}}-ə baxın.

Bax: [Ştrixləmə və doldurulmuş sahələr](topic:hatch).

### GRADIENT

Ləqəblər: `GD`. Sahəni bir və ya iki rəngin qradiyenti ilə doldurur. Əvvəl qradiyent haqqında soruşur, sonra {{cmd:HATCH}} kimi davam edir (`Daxili nöqtəni göstərin`, bağlı obyektlər üçün `S`, bitirmək üçün {{key:Enter}}).

- `Qradiyent seçimini daxil edin [Növ (T)/Bir rəng (O)/İki rəng (TW)/Bucaq (A)/Mərkəzləşdirmək (C)/Çıxış (X)] <X>`, hər dəfə cari qradiyenti çap edərək təkrarlanır.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, və ya onlardan biri tərs (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). İlk hərflər kifayətdir.
- `O`: bir rəng, sonra onun 0-dan 1-ə qədər tonu (0 qaraya çalır, 0.5 rəngin özüdür, 1 ağa çalır). `TW`: birinci və ikinci rəng. Rəng 1-dən 255-ə qədər ədəd, `255,128,0` kimi üç ədəd, və ya `#rrggbb` ola bilər.
- `A`: qradiyentin getdiyi bucaq. `C`: mərkəzləşdirmə Bəli və ya Xeyr (Xeyr qradiyentin ortasını bir tərəfə çəkir).
- Tanınmayan rəngi və ya növü, və 0-1 hüdudundan kənar tonu rədd edir.

{{cmd:HATCHEDIT}} `G` və Xassələr (Qradiyent) sonradan qradiyenti dəyişir, və ya istənilən ştrixləməni qradiyentə çevirir. Qradiyent ekranda çəkilir və çap olunur. DWG 2004 və sonrakı versiyalar onu real qradiyent ştrixləməsi kimi saxlayır; DXF 2000 və DWG 2000 onu CadCraft üçün saxlayır, digər proqramlar isə birinci rəngdə bərk doldurma görür.

### HATCHGENERATEBOUNDARY

Ləqəblər: `HGB`. Sərhədini itirmiş ştrixləmədən sərhəd polixəttlərini yenidən yaradır. `Ştrixləmələri seçin` (və ya əvvəlcədən seçin), sonra `Hər ştrixləməni yeni sərhədinə bağlayın ki, ştrixləmə onu izləsin? [Bəli/Xeyr] <Bəli>`.

- Ştrixləmənin hər konturu ştrixləmənin qatında bağlı polixətt olur; yeni polixəttlər seçilmiş qalır. Əyri kənar ştrixləmənin saxladığı qısa düz parçalar kimi qayıdır.
- Bəli ilə ştrixləmə yeni sərhədini izləyir, {{cmd:HATCH}} ilə yaradılmış kimi. Bir geri qaytarma addımı.
- Heç bir ştrixləmə seçilməyəndə bunu bildirir.

### POINT

Ləqəblər: `PO`; və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Nöqtə}}. Nöqtə obyektləri, hər klik üçün bir, Enter-ə qədər.

- `Nöqtəni göstərin`

### XLINE

Ləqəblər: `XL`; və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Konstruksiya xətti}}. Hər iki tərəfə sonsuz quruluş xətləri. Bax: [Quruluş xətləri və şüalar](topic:construction-lines).

- `Nöqtəni göstərin [Üfüqi (Hor)/Şaquli (Ver)/Bucaq (Ang)/Bisect/Ofset (O)]`, sonra hər xətt üçün `Keçən nöqtəni göstərin`, Enter-ə qədər.
- `A`: `Quruluş xəttinin bucağını daxil edin [İstinad] <0>`; `R` əvvəl `Xətt obyektini seçin` soruşur.
- `B`: `Bucağın təpə nöqtəsini göstərin`, `Bucağın başlanğıc nöqtəsini göstərin`, sonra hər xətt üçün `Bucağın son nöqtəsini göstərin`.
- `O`: `Ofset məsafəsini daxil edin [Keçən] <Keçən>`, sonra hər xətt üçün `Ofset edəcək xətt obyektini seçin` və `Ofset tərəfini göstərin` (və ya `Keçən nöqtəni göstərin`).

### RAY

Ləqəblər yoxdur; və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Şüa}}. `Başlanğıc nöqtəni göstərin`, sonra hər şüa üçün `Keçən nöqtəni göstərin`, Enter-ə qədər.

### TEXT

Ləqəblər: `DT`, `DTEXT`; və ya alətlər panelində {{ui:Mətn}}. Tək sətirli mətn; hər sətir öz obyektidir.

- `Mətnin başlanğıc nöqtəsini göstərin [Düzləşdirmə (J)]`
- `J`: `Seçimi daxil edin [Sol/Mərkəz/Sağ/Orta/TL/MC] <L>`, sonra `Mətnin yerləşmə nöqtəsini göstərin`
- `Hündürlüyü göstərin <cari mətn hündürlüyü>`
- `Mətnin fırlanma bucağını göstərin <0>`
- `Mətni daxil edin`, təkrarlanır: hər Enter aşağıdakı növbəti sətri başladır. Boş sətirdə Enter bitirir. {{key:Space}} burada boşluq yazır.

### DIVIDE

Ləqəblər: `DIV`. {{cmd:DIVIDE}} xətt, qövs, çevrə, polixətt, spline və ya ellipsin üzərinə bərabər hissələrə bölən işarələr qoyur. Obyekti seçin, sonra hissələrin sayını verin (2-dən 32767-yə). Açıq obyekt hissələrdən bir işarə az alır; bağlı obyekt başlanğıcda da işarə alır. Obyektin özü kəsilmir. İşarələr nöqtələrdir; `Block` onun əvəzinə bu çertyojun blokunu soruşur və blokun obyektə uyğun dönüb-dönmədiyini. Spline və ellipslər üzərindəki uzunluqlar qısa vətərlərlə ölçülür. Mətn, ştrixləmə və uzunluğu olmayan obyektləri rədd edir.

### MEASURE

Ləqəblər: `ME`. {{cmd:MEASURE}} xətt, qövs, çevrə, polixətt, spline və ya ellipsin boyunca hər verilən uzunluqda bir işarə qoyur, seçdiyiniz yaxın ucdan saymağa başlayaraq (bağlı obyekt: başlanğıcdan). Uzunluğu yazaraq və ya iki nöqtə ilə verin. Açıq obyektin uzaq ucuna işarə qoyulmur. `Block` hər işarədə nöqtə əvəzinə blok yerləşdirir. 0 uzunluğunu, obyektdən uzun olanı və 32767-dən çox işarə verəcək uzunluğu rədd edir.

### BOUNDARY

Ləqəblər: `BO`, `BPOLY`. {{cmd:BOUNDARY}} seçdiyiniz nöqtəni əhatə edən sahənin ətrafında bağlı polixətt yaradır; sahəni ekranda sərhədləyən xətlər, qövslər, çevrələr, polixəttlər və əyrilərdən. Qövs və ya çevrə üzərində olan parçalar qövs parçaları kimi qayıdır; ellips və spline parçaları qısa düz parçalar kimi qayıdır. `Adalar` aktiv olduqda (başlanğıc quruluş) içindəki hər bağlı sahə də öz polixəttini alır. Nöqtələr seçməyə davam edin; Enter bitirir. Sahəni sərhədləyən obyektlər olduğu kimi qalır. Nöqtəni əhatə edən bağlı sahə olmadıqda bunu bildirir.

### BLEND

{{cmd:BLEND}} iki açıq əyrinin uclarını birləşdirən spline çəkir. Birləşdirmək üçün hər əyrini uca yaxın seçin. `CONtinuity` `Tangent` (spline hər iki əyri boyunca gedir və gəlir) və ya `Smooth` (uclarda onların əyilmə istiqamətini də izləyir) seçir; seçim sessiya üçün saxlanılır. İki əyri dəyişmir. Bağlı obyektləri və artıq birləşən uclara malik olanı rədd edir.

### REGION

Ləqəblər: `REG`. {{cmd:REGION}} bağlı obyektləri regionlara çevirir: birləşdirilə, kəsilə və ölçülə bilən düz sahələr. Bağlı çevrələri, bağlı polixəttləri, bağlı ellipsləri və ya bağlı spline-ları, və ya uc-uca bağlanan xətt, qövs və açıq polixəttləri seçin; hər kontur bir region olur və onu yaratdığı obyektləri əvəz edir. Qövslər qövs olaraq qalır; ellips və spline-lar qısa düz parçalar olur. Bağlı olmayan və heç bir kontur yaratmayan şey olduğu kimi qalır və bunların sayı bildirilir. Çertyojda region adsız qrup kimi saxlanılan bir və ya bir neçə bağlı polixətt olur, buna görə klik bütün regionu seçir və surət öz regionudur; faylı açan digər proqramlar bağlı polixətt görür.

Çertyojda regionlar olduqda, 2D sekmədə {{cmd:UNION}}, {{cmd:SUBTRACT}} və {{cmd:INTERSECT}} regionlarla işləyir: `UNION` seçilmiş regionları birə birləşdirir (bir-birindən ayrı olanlar bir neçə konturlu bir region olur), `SUBTRACT` əvvəl hansılardan çıxılacağını, sonra hansıların çıxarılacağını soruşur (deşik regionun hissəsi olaraq qalır), `INTERSECT` onların hamısının ortaq sahəsini saxlayır. Hər biri nəticənin sahəsini bildirir və bir geri qaytarma addımıdır. Heç nə qalmayanda və ya ortaq heç nə olmayanda rədd edir. 3D sekmədə və regionları olmayan çertyojda eyni əmrlər əvvəlki kimi cisimlərlə işləyir.

## Dəyişdir

### MTEXT

Ləqəblər: `MT`, `T`; və ya alətlər panelində {{ui:Abzas}}. Verilmiş enə sarınan abzas mətni, yerində yazılır.

- `Birinci küncü göstərin`
- `Əks künc göstərin [Hündürlük (H)/Düzləşdirmə (J)/Sətir aralığı (L)/Fırlanma (R)/En (W)]`: iki künc arasındakı en mətnin sarınacağı yerdir. `H` `Hündürlüyü göstərin` soruşur, `J` `Düzləşdirməni daxil edin [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Sətir aralığı əmsalını daxil edin (0.25-dən 4-ə)`, `R` `Fırlanma bucağını göstərin`, `W` `Enini daxil edin (sarımaq üçün 0)` və ikinci küncü keçir.
- Sonra çertyojda qutu açılır: yazın, yeni abzas üçün {{key:Enter}}, bitirmək üçün {{key:Mod+Enter}} və ya kənara klik, ləğv etmək üçün {{key:Esc}}. Onun paneli hündürlüyü, sətir aralığını, enini və düzləşdirməni təyin edir. Bax: [Mətn və etiketlər əlavə edin](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Ləqəblər: `ED`, `DDEDIT`; və ya mətnə iki dəfə klik. `Redaktə ediləcək mətni seçin`, Enter-ə qədər təkrarlanır: hər biri eyni qutuda açılır. Seçilmiş və ya iki dəfə klik edilmiş mətnlə başlayanda onu redaktə edir və bitir.

### ERASE

Ləqəblər: `E`, `DELETE`; və ya obyektlər seçilmiş halda {{key:Delete}} basın.

- `Obyektləri seçin` (obyektlər artıq seçilibsə ötürülür)

### MOVE

Ləqəblər: `M`.

- `Obyektləri seçin`
- `Baza nöqtəsini göstərin [Yerdəyişmə (D)]`, `İkinci nöqtəni göstərin`
- `D`: `Yerdəyişməni göstərin`, `dx,dy` kimi yazılır.

### COPY

Ləqəblər: `CO`, `CP`. Verdiyiniz nöqtələr qədər surət yaradır.

`İkinci nöqtə` sualında `Massiv` yazsanız, bir sətir bir dəfəyə yaranır: elementlərin sayını verin (əsl obyekt bir sayılır), sonra birinci surətin yerini; qalanları eyni məsafə ilə gedir. `Uyğunlaşdır (F)` həmin nöqtəni sonuncu surətin yeri edir, qalanları aralarında bərabər yayılır.

- `Obyektləri seçin`
- `Baza nöqtəsini göstərin [Yerdəyişmə (D)]`
- `İkinci nöqtəni göstərin [Geri qaytar (U)]`, Enter-ə qədər təkrarlanır. `U` son surəti geri qaytarır.

### ROTATE

Ləqəblər: `RO`.

- `Obyektləri seçin`, `Baza nöqtəsini göstərin`
- `Fırlanma bucağını göstərin <son bucaq>`: dərəcə, saat əqrəbinin əksinə müsbət; və ya ona doğru fırlatmaq üçün nöqtəyə klik edin.

### SCALE

Ləqəblər: `SC`.

- `Obyektləri seçin`, `Baza nöqtəsini göstərin`
- `Miqyas əmsalını göstərin`: `0.5` və ya `2` kimi əmsal yazın. Kliklənmiş nöqtənin baza nöqtəsindən məsafəsi əmsal olur.

### MIRROR

Ləqəblər: `MI`.

- `Obyektləri seçin`
- `Güzgü xəttinin birinci nöqtəsini göstərin`, `Güzgü xəttinin ikinci nöqtəsini göstərin`
- `Mənbə obyektləri silinsin? [Bəli/Xeyr] <X>`

### ALIGN

Ləqəblər: `AL`; və ya {{ui:Dəyişdirmə}} › {{ui:Daha çox}} › {{ui:Align}}.

- `Obyektləri seçin`
- `Birinci mənbə nöqtəsini göstərin`, `Birinci təyinat nöqtəsini göstərin`
- `İkinci mənbə nöqtəsini göstərin (davam etmək üçün Enter)`, `İkinci təyinat nöqtəsini göstərin`
- `Üçüncü mənbə nöqtəsini göstərin (davam etmək üçün Enter)`, `Üçüncü təyinat nöqtəsini göstərin`
- İki cüt ilə: `Obyektlər düzləşmə nöqtələrinə görə miqyaslansın? [Bəli/Xeyr] <X>`

Bax: [Obyektləri düzləşdirin](topic:modify-objects#align-objects).

### ALIGNTO

- `Obyektləri seçin` (və ya seçim), `Düzləşdir [Sol/Mərkəz/Sağ/Yuxarı/Orta/Aşağı] <Sol>`, `Hara [Seçim/Birinci/Son/Nöqtə] <Seçim>`; `P` nöqtə soruşur. Seçim qalır.

### DISTRIBUTE

- `Obyektləri seçin` (ən azı üç), `Bölüşdür [Üfüqi/Şaquli] <Üfüqi>`, `Bərabər yay [Mərkəzlər/Boşluqlar] <Boşluqlar>`. Kənardakı iki qalır; seçim qalır.

### ALIGNPANEL

Ləqəblər: `ALP`; və ya {{ui:Dəyişdirmə}} › {{ui:Daha çox}} › {{ui:Uyğunlaşdır və bölüşdür}}. Kliklərlə ALIGNTO və DISTRIBUTE-i işə salan paneli açır.

### LASER

Ləqəblər: `LASERCUT`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Lazer…}}. Çertyojun üzərində Lazer panelini açır: hər qatın nə etdiyi (kəs, cızma, qravüra, doldurma, şəkil), baxış, saxlanılacaq GRBL G-kodu, və Web Serial ilə çərçivələmə və göndərmə. Bax: [Çertyoju lazerə göndərin](topic:laser-cutting).

### STRETCH

Ləqəblər: `S`; və ya {{ui:Uzat}}. `Uzadılacaq obyektləri seçin`: hərəkət üçün uclar üzərində kəsişən pəncərələri sürükləyin (və ya `C` yazın). `Baza nöqtəsini göstərin [Yerdəyişmə (D)]`, `İkinci nöqtəni göstərin`. Pəncərələrin içindəki nöqtələr hərəkət edir: xəttin uclarını, polixətt təpələrini (qövs parçaları hündürlüyünü saxlayır), ölçü nöqtələrini; çevrələr, ellipslər, mətn, nöqtələr və bloklar mərkəzləri və ya yerləşmə nöqtələri içində olduqda tamamilə hərəkət edir. Əmrdən əvvəl edilmiş seçim onu yaradan kəsişən pəncərələri (və lassoları) saxlayır, buna görə eyni şəkildə uzanır. Pəncərə olmadan obyektlər tamamilə hərəkət edir.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Ləqəblər: `AR`; və ya {{ui:Massiv}}. `Obyektləri seçin`, sonra `Massiv növünü daxil edin [Düzbucaqlı/Polyar] <Düzbucaqlı>` (yalnız ARRAY).

- Düzbucaqlı 4 sütun × 3 sətirlə başlayır, obyektlərin ölçüsünün 1.5 qatı aralıqla, öncədən baxışla. `Seçimi daxil edin [Say (COU)/Aralıq (S)/Sütunlar (COL)/Sətirlər (R)/Çıxış (X)] <X>`: `COU` sütun və sətir sayını, `S` sütunlar və sətirlər arası məsafəni soruşur (mənfi sola və ya aşağıya gedir), `COL` və `R` hər istiqamət üçün ayrıca.
- Polyar `Massivin mərkəz nöqtəsini göstərin` soruşur, hər tərəfdən 6 elementlə başlayır, fırlanmış. `Seçimi daxil edin [Elementlər (I)/Doldurma bucağı (F)/Elementləri fırlat (ROT)/Çıxış (X)] <X>`: `I` elementlər, `F` doldurulacaq bucaq (+ saat əqrəbinin əksinə, − saat əqrəbi istiqamətində), `ROT` Bəli və ya Xeyr.
- {{key:Enter}} (Çıxış) surətləri adi obyektlər kimi yaradır. Bir geri qaytarma addımı.
- `AS` (Assosiativ) adi surətlər və sonra {{cmd:ARRAYEDIT}} ilə, və ya Xassələrdə və tutacaqlarla dəyişdirilə bilən massiv arasında keçir. Seçim yadda qalır ({{cmd:ARRAYASSOCIATIVITY}}); başlanğıcda adi surətlərdir.

### ARRAYPATH

Əyri boyunca surətlər. `Obyektləri seçin`, sonra `Yol əyrisini seçin`: xətt, qövs, çevrə, ellips, polixətt və ya spline (massivə salınan obyektlərdən biri olmamalıdır). Yol obyektlərə daha yaxın ucundan başlayır, və birinci element obyektlərin olduğu yerdədir.

- `Seçimi daxil edin [Üsul (M)/Elementlər (I)/Aralıq (SP)/Düzləşdirmə (AL)/Assosiativ (AS)/Çıxış (X)] <X>`, öncədən baxışla. `M`: `Bölmə` elementləri bütün yol boyunca bərabər yayır, `Ölçmə` hər dəfə məsafədə bir qoyur. `I`: elementlərin sayı (Ölçmə ilə 0 sığan qədər deməkdir; yolun sonundan böyük say sığana qədər məhdudlaşdırılır). `SP`: yol boyunca elementlər arası məsafə (Ölçməyə keçirir). `AL`: Bəli hər elementi yolu izləmək üçün döndərir, Xeyr şaquli saxlayır.
- `AS` {{cmd:ARRAY}}-dəki kimi. Açıq olduqda, massiv yolun forma surətini özü saxlayır: sonra yol əyrisini redaktə etmək elementləri hərəkət etdirmir.
- Yol əyri olmayanı və bir elementi rədd edir.

### ARRAYEDIT

Assosiativ (AS) ilə yaradılmış massivi dəyişir. `Massivi seçin` (və ya əvvəlcə seçin). Massivin indiki vəziyyətini çap edir, sonra Enter-ə qədər soruşur:

- Düzbucaqlı: `COL` sütunlar və onların aralığı, `R` sətirlər və onların aralığı, `A` sütunların getdiyi bucaq.
- Polyar: `I` elementlər, `F` doldurma bucağı, `ROT` elementləri fırlat Bəli və ya Xeyr.
- Yol: `M` Bölmə və ya Ölçmə, `I` elementlər, `SP` aralıq, `AL` yolla düzləşdirmə.
- `S` (Mənbə) massivin təkrarladığı obyektləri blok redaktoru kimi ayrıca açır. Orada çəkin və redaktə edin; {{cmd:ARRAYCLOSE}} saxlayır və ya ləğv edir, və hər element izləyir.
- `REP` (Əvəz): `Əvəz obyektlərini seçin`, `Əvəz obyektlərinin baza nöqtəsini göstərin`, sonra əvəz ediləcək elementlərə klik edin, {{key:Enter}}. Həmin elementlər əvəzi göstərir; əvəz obyektləri çertyojdan çıxır və massivdə yaşayır. `RES` (Sıfırla) mənbə obyektlərini hər elementdə yenidən göstərir.
- Hər dəyişiklik bir geri qaytarma addımıdır. Adi surətləri, adi blok istinadını və kilidli qatdakı massivi rədd edir.

Eyni rəqəmlər Xassələrdə Massiv altındadır, massivin tutacaqları var: baza nöqtəsi onu hərəkət etdirir, ikinci elementdəki tutacaq aralığı təyin edir, sonuncu elementdən sonrakı tutacaq sayı təyin edir (polyar: ikinci element neçə element olduğunu, son element doldurma bucağını təyin edir). {{cmd:EXPLODE}} massivi yenidən adi surətlərə çevirir.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} mənbəyini bitirir: `Massivin mənbə obyektlərindəki dəyişiklikləri saxlayırsınız? [Saxla/Ləğv et] <Saxla>`. Açıq massivin mənbə obyekti olmadıqda bunu bildirir. {{cmd:BCLOSE}} eyni işi görür.

### ARRAYASSOCIATIVITY

`ARRAYASSOCIATIVITY üçün yeni dəyər daxil edin (1 = massivlər redaktə oluna bilir, 0 = adi surətlər)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR və {{cmd:ARRAYPATH}}-in başladığını təyin edir; onların `AS` seçimi eyni ayarı dəyişir. Bu brauzerdə yadda saxlanılır.

### OFFSET

Ləqəblər: `O`. Xətlər, qövslər, çevrələr və polixəttlər.

Polixətt məsafədə xaricə gedib künc yerində düz parçaları ayrıldıqda, boşluğun necə bağlanacağını {{cmd:OFFSETGAPTYPE}} təyin edir.

- `Ofset məsafəsini göstərin [Keçən] <son məsafə, və ya Keçən>`
- `Ofset ediləcək obyekti seçin`, sonra `Ofset ediləcək tərəfdə nöqtəni göstərin` (və ya Keçən ilə `Keçən nöqtəni göstərin`), Enter-ə qədər təkrarlanır.

### OFFSETGAPTYPE

- `Ofset künc boşluqları: 0 uzat, 1 yumrulaşdır, 2 pazla`: {{cmd:OFFSET}} polixəttin xarici künclərindəki boşluqları necə bağlayır. `0` parçaları görüşənə qədər uzadır (başlanğıc quruluş), `1` köhnə künc ətrafında qövslə birləşdirir, `2` düz kəsiklə. Daxili künclər və qövs parçaları təsirlənmir. Bu sessiya üçün saxlanılır.

### EXTRIM

{{cmd:EXTRIM}} kənarın bir tərəfində hər şeyi kəsir. Kəsici kənarı seçin (xətt, qövs, çevrə, polixətt, ellips, spline və ya quruluş xətti), sonra təmizlənəcək tərəfdə nöqtə seçin: həmin kənarı kəsən hər xətt, qövs, çevrə, polixətt və quruluş xətti həmin tərəfdəki hissəsini itirir, kənardan başlayaraq. Tərəfi seçərkən gedəcək hissələr göstəricini izləyir. Bağlı kənar üçün tərəflər daxili və xarici olur. Yalnız kənara toxunan obyektlər, və kənarı kəsən mətn, ştrixləmə, spline və ellipslər olduğu kimi qalır. Bir geri qaytarma addımı.

### TRIMEXTENDMODE

- `TRIMEXTENDMODE üçün yeni dəyər daxil edin (1 Sürətli, 0 Standart)`: {{cmd:TRIM}} və {{cmd:EXTEND}} necə başlayır. `1` Sürətli: hər obyekt kəsici kənar və ya sərhəddir. `0` Standart: əvvəl kənarları soruşur. LISP-də `(setvar "TRIMEXTENDMODE" 0)` da.

### TRIM

Ləqəblər: `TR`. Əvvəl `Cari parametrlər: Sürətli rejim (TRIMEXTENDMODE 1), kənarlar: Uzatma yoxdur, sürükləmək yol çəkir` çap edir. Sürətli rejimdə hər görünən obyekt kəsici kənardır, və heç nə ona çatmayan obyekt silinir; Standart rejimdə əvvəl `Kəsici kənarları seçin (Enter = hər obyekt)` soruşur və yalnız onlarda kəsir.

- `Kəsiləcək obyekti seçin və ya uzatmaq üçün shift ilə seçin [Kəsici kənarlar (T)/Hasar (F)/Pəncərə (C)/Rejim (O)/Kənar (E)/Silmə (R)/Geri qaytar (U)]`, təkrarlanır: çıxarılacaq parçaya klik edin (göstərici üzərində dayananda boz və kəsikli görünür), bir neçə parça üzərindən yol çəkin (hamısı bir addımda gedir), və ya arada hasar üçün iki boş yerə klik edin. {{key:Shift}} əvəzinə uzadır. `T` kəsici kənarları seçir (Standart rejim), `F` hasar nöqtələrini soruşur, `C` iki pəncərə künci (qismən içəridə olan parçalar gedir), `O` `Trim rejimi seçimini daxil edin [Sürətli/Standart]` soruşur, `E` `Örtülü kənar uzantı rejimini daxil edin [Uzat/Uzatma yoxdur]` (EDGEMODE), `R` seçdiyiniz obyektləri silir, `U` son seçimi və ya sürüşdürməni geri qaytarır. Enter bitirir. Bax: [Kəsmək və uzatmaq](topic:trim-and-extend).

- Ştrixləmənin üzərinə klik ştrixləməni kəsir: kəsici kənarlar ştrixlənmiş sahəni bölür, və klik etdiyiniz parça çıxarılır (əvvəlki yerdə çəkilmiş kontur qalmır). Ştrixləmə öz naxışını və ya qradiyentini saxlayır; sərhədinə bağlı olan ştrixləmə sonradan bağlı olmur, çünki artıq onu doldurmur. Orada heç bir kəsici kənar ştrixləməni bölmədikdə, klik ştrixləmədən kənarda olduqda və heç nə qalmayacaqda bunu bildirir (bunun əvəzinə {{cmd:ERASE}} istifadə edin). Sürüklənən yol və ya hasar ştrixləmələri kəsmir.

### EXTEND

Ləqəblər: `EX`. TRIM-in əksinə olan eyni: `Uzadılacaq obyekti seçin və ya kəsmək üçün shift ilə seçin [Sərhəd kənarları (B)/Hasar (F)/Pəncərə (C)/Rejim (O)/Kənar (E)/Geri qaytar (U)]`. Klik ona ən yaxın ucu növbəti sərhədə qədər uzadır; sürüklənən yol və ya hasar kəsdiyi hər obyekti uzadır; {{key:Shift}} kəsir. `B` sərhəd kənarlarını seçir (Standart rejim). Rejim və Kənar TRIM ilə ortaqdır.

### LINKVIEWS

Ləqəblər: `SYNCVIEWS`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Pəncərələrin görünüşlərini bağla}}, və ya çertyoj sekmələrindəki bağlantı işarəsi. `Pəncərələrin görünüşlərini bağla [ON/OFF]` (Enter digər vəziyyəti seçir): açıq olduqda, aktiv pəncərədə sürüşdürmə və ya yaxınlaşdırma eyni növ məkanı göstərən hər pəncərəni hərəkət etdirir. Bax: [Ekranı bölün](topic:split-screen).

### OPENIN3D

Ləqəblər yoxdur; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Open in ModelCraft}}, 3D modelləşdirmə tətbiqi təhvil verilmiş çertyojları qəbul etdikdə. Onu orada yeni sekmədə DWG kimi açır (heç nə yüklənmir). Brauzer sekmə açmağa icazə vermirsə, bunu bildirir.

### LASSOMODE

`LASSOMODE üçün yeni dəyər daxil edin (1 = lasso, 0 = düzbucaqlı)`: boş yerdə basıb sürüklədikdə nə çəkilməsi. Parametrlər › CadCraft › Seçmək üçün sürükləmə ilə eynidir. Bax: [Lasso ilə seçmə](topic:lasso-selection).

### FILLET

Ləqəblər: `F`. Xətlər, qövslər, çevrələr və polixəttlər. Əvvəl `Cari parametrlər: Rejim = TRIM, Radius = 0` çap edir.

- `Birinci obyekti seçin [Geri qaytar (U)/Polixətt (P)/Radius (R)/Kəs (T)/Çoxlu (M)]`
  - `R` `Yumrulaşdırma radiusunu göstərin <son>` soruşur. `T` `Trim rejimi seçimini daxil edin [Kəs/Kəsmə yoxdur]` soruşur: Kəsmə yoxdur ilə obyektlər olduğu kimi qalır və yalnız qövs əlavə olunur.
  - `M` Enter-ə qədər daha çox künc üçün əmri davam etdirir; `U` əmrdən çıxmadan son künci geri qaytarır.
  - `P` `2D polixətti seçin [Radius (R)]` soruşur və iki düz parçanın görüşdüyü hər künci yumrulaşdırır. Artıq olan yumrulaşdırmalar yeni radius ilə əvəz olunur; radius 0 onları çıxarır. Parçaları radius üçün çox qısa olan künclər olduğu kimi qalır və sayılır.
- `İkinci obyekti seçin və ya künci tətbiq etmək üçün shift ilə seçin [Radius (R)]`. Radiusdan asılı olmayaraq kəskin künc üçün klik edərkən {{key:Shift}} basın.

Saxlamaq istədiyiniz hissədə hər obyektə klik edin. Görüşməyən iki xətt uzadılır. Paralel iki xəttə, birinci xəttin klikə ən yaxın ucunda, boşluq boyunca yarım çevrə çəkilir. Çevrə heç vaxt kəsilmir. Bir polixəttin bir-birinə bitişik iki parçası polixəttin içində qövs alır; polixətt və başqa obyekt, kəsik polixəttin birinci və ya son parçasına düşəndə işləyir.

### CHAMFER

Ləqəblər: `CHA`. Xətlər və polixəttlərin düz parçaları. Əvvəl cari məsafələri (və ya uzunluq və bucağı) çap edir.

- `Birinci xətti seçin [Geri qaytar (U)/Polixətt (P)/Məsafə (D)/Bucaq (A)/Kəs (T)/Üsul (E)/Çoxlu (M)]`
  - `D` `Birinci pazlama məsafəsini daxil edin <son>` və `İkinci pazlama məsafəsini daxil edin <birinci>` soruşur: birinci seçdiyiniz birinci xəttdən, ikinci digərindən kəsilir.
  - `A` `Birinci xətt üzrə pazlama uzunluğunu göstərin` və `Birinci xəttdən pazlama bucağını göstərin` soruşur.
  - `E` (Üsul) növbəti pazlamanın ikisindən hansını istifadə edəcəyini seçir. `T`, `M`, `U` və `P` {{cmd:FILLET}}-dəki kimi işləyir.
- `İkinci xətti seçin və ya künci tətbiq etmək üçün shift ilə seçin [Məsafə (D)/Bucaq (A)/Üsul (E)]`. {{key:Shift}}+klik kəskin künc yaradır.

Xəttdən uzun məsafə rədd edilir (`Distance is too large.`).

### BREAK və BREAKATPOINT

Ləqəblər: `BR`. `Obyekt seçin` (klik etdiyiniz yer birinci nöqtədir), `İkinci kəsik nöqtəsini göstərin [Birinci nöqtə (F)]`; `F` `Birinci kəsik nöqtəsini göstərin` və `İkinci kəsik nöqtəsini göstərin` soruşur. Aradakı hissə gedir; çevrədə birinci nöqtədən saat əqrəbinin əksinə. BREAKATPOINT `Kəsik nöqtəsini göstərin` soruşur və obyekti orada iki hissəyə bölür (çevrə deyil).

### LENGTHEN

Ləqəblər: `LEN`. `Ölçüləcək obyekti seçin [Dəyişmə (DE)/Faiz (P)/Cəm (T)/Dinamik (DY)]`: kliklə `Cari uzunluq` (və qövsün daxili bucağı) çap olunur və yenidən soruşulur. `DE` `Dəyişmə uzunluğunu daxil edin (mənfi qısaldır) [Bucaq]`, `P` `Faiz uzunluğunu daxil edin`, `T` `Cəm uzunluğunu göstərin [Bucaq]`, `DY` sürükləyir. Sonra `Dəyişdiriləcək obyekti seçin [Geri qaytar (U)]`, təkrarlanır: kliklə ən yaxın uc hərəkət edir. Xətlər, qövslər və açıq polixəttlər.

### JOIN

Ləqəblər: `J`. `Birləşdiriləcək obyektləri seçin`. Uc-uca gələn xətlər, qövslər və açıq polixəttlər polixətt olur (zəncir bağlanırsa bağlı); bir xətt üzərindəki xətlər bir xətt olur; bir çevrənin qövsləri bir qövs və ya çevrə olur. Tarixçə neçə obyektin birləşdiyini və neçəsinin birləşmədiyini bildirir.

### MATCHPROP

Ləqəblər: `MA`, `PAINTER`. `Mənbə obyektini seçin`, sonra `Təyinat obyektlərini seçin [Parametrlər (S)]` və {{key:Enter}}. Qatı və rəngi kopyalayır, eyni növ obyektlər arasında isə mətn hündürlüyü və enini, ölçü ölçülərini və ya ştrixləmə naxışını. `S` `Xassəni açın və ya bağlayın [Rəng/Qat (LA)/Mətn/Ölçü/Ştrixləmə]` soruşur, Enter-ə qədər təkrarlanır; seçim sessiya üçün yadda qalır.

### EXPLODE

Ləqəblər: `X`. Polixəttlər xətlərə və qövslərə çevrilir, blok istinadları öz obyektlərinə, ölçülər xətlərə, ox uclarına və mətnə. Redaktə oluna bilən massiv ({{cmd:ARRAYEDIT}}) öz obyektlərinin adi surətlərinə çevrilir.

- `Obyektləri seçin`

### GROUP

Ləqəblər: `G`. {{cmd:GROUP}} seçilmiş obyektlərə onların paylaşdığı ad verir. Obyektləri seçin, sonra ad yazın (boşluq yoxdur; `?` qrupları siyahılayır; Enter adsız qrup yaradır) və adlandırılmış qrup üçün əlavə olaraq təsvir. Bundan sonra onlardan birinə klik, və ya onlardan birini tutan pəncərə hamısını seçir, buna görə birlikdə köçürülür, surətləni və silinir; hər obyekt yenə öz obyektidir. Obyekt bir neçə qrupda ola bilər. Bütün qrupun surəti yeni adsız qrupdur; tək üzvün surəti qrupa qoşulur. Qruplar yaradıldığı məkana aiddir (model və ya vərəq). Onlar DWG və ya DXF kimi saxlanılanda və CadCraft-da yenidən açılanda qalır; DXF 2000 faylları onları digər proqramlar üçün də qrup obyekti kimi saxlayır, və başqa proqramda yaradılmış qruplar DXF və ya DWG açılanda oxunur.

### UNGROUP

{{cmd:UNGROUP}} qrupları ayırır: qrupların obyektlərini seçin (hər qrup ayrılır), və ya `Name` yazıb qrupun adını daxil edin. Obyektlər çertyojda qalır. Bir geri qaytarma addımı qrupları geri gətirir.

### GROUPEDIT

{{cmd:GROUPEDIT}} bir qrupu dəyişir. Onun obyektlərindən birini seçin, və ya `Name` və adını yazın; artıq seçilmiş qrup olduğu kimi qəbul olunur. Sonra: `Add` obyektlər (bir-bir seçilir, qrup-qrup deyil), `Remove` obyektlər, `REName` qrupu adlandır, `Description` təsvirini dəyiş, və ya `Selectable` təyin et (obyektə klik bütün qrupu seçirmi). `eXit` və ya Enter bitirir. Heç bir obyekti qalmayan qrup yox olur.

### PICKSTYLE

- `Qrup seçimi: 0 klik bir obyekti seçir, 1 bütün qrupu`: `1` (başlanğıc quruluş) ilə qruplaşdırılmış obyektə klik və ya pəncərə bütün qrupu seçir; `0` ilə tək obyektlər, buna görə bir üzvü redaktə edə bilərsiniz. Bu sessiya üçün saxlanılır.

## Bufer

CadCraft-ın öz buferi: eyni çertyojda, çertyojlar arasında və bu brauzerdə CadCraft sekmələri arasında işləyir. Bax: [Kopyalamaq, yapışdırmaq və surətini çıxarmaq](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, və ya {{ui:Redaktə}} qrupunda {{ui:Kopyala}}. Obyektləri, istifadə etdikləri bloklar və qatlarla birlikdə buferə kopyalayır. Obyektlər seçilmiş qalır.

- `Kopyalanacaq obyektləri seçin` (obyektlər artıq seçilibsə ötürülür)

### CUTCLIP

{{key:Mod+X}}, və ya {{ui:Daha çox}} menyusunda {{ui:Kəs}}. Obyektləri buferə kopyalayır, sonra silir (bir geri qaytarma addımı).

- `Kəsiləcək obyektləri seçin` (obyektlər artıq seçilibsə ötürülür)

### COPYBASE

Obyektləri seçdiyiniz baza nöqtəsi ilə buferə kopyalayır; yapışdırmaq həmin nöqtəni yerləşdirir.

- `Baza nöqtəsini göstərin`
- `Kopyalanacaq obyektləri seçin`

### PASTECLIP

{{key:Mod+V}}, və ya {{ui:Redaktə}} qrupunda {{ui:Yapışdır}}. Surət kursoru izləyir, onun ölçü sərhədlərinin aşağı-sol küncündən asılı olaraq (və ya mərkəzindən, və ya `COPYBASE` nöqtəsindən; bax [CadCraft parametrləri](topic:settings)).

- `Daxil etmə nöqtəsini göstərin`

Yapışdırılan obyektlər seçilmiş qalır. Çertyojda eyni adlı blok artıq varsa, bu çertyojun təyinini saxlayır.

MarkupCraft-da kopyalanmış sahə CadCraft-ın kopyaladığından yenidirsə (və 6 saatdan azdırsa), {{key:Mod+V}} və `PASTECLIP` həmin sahəni yapışdırır: bax `PASTEAREA`.

### PASTEAREA

Ləqəblər: `PAREA`. {{ui:Daha çox}} menyusunda {{ui:Kopyalanmış sahəni yapışdır}}. MarkupCraft-da {{ui:Sahəni kopyala}} ilə kopyalanmış sahəni real ölçüdə, şəkil kimi yapışdırır. Bax: [Çertyojda şəkillər](topic:pictures).

- `Kopyalanmış sahənin aşağı-sol küncünü göstərin`
- `Kağız ölçüsünü bu qədər miqyasla (1:100 vərəq üçün 100; Nöqtələr: onun üzərində iki nöqtə və onların real məsafəsi) [Nöqtələr] <1>` (yalnız vərəqdə çertyoj miqyası yoxdursa): ədəd, kağız ölçüsü üçün {{key:Enter}}, və ya `P`, sonra `Yapışdırılmış sahədə birinci nöqtəni göstərin`, `Yapışdırılmış sahədə ikinci nöqtəni göstərin` və onların real məsafəsi.

### PASTEORIG

{{key:Mod+Shift+V}}, və ya {{ui:Daha çox}} menyusunda {{ui:Yerində yapışdır}}. Obyektlərin kopyalandığı koordinatlarda yapışdırır. Heç nə soruşmur.

### DUPLICATE

Ləqəblər: `DUP`. {{key:Mod+D}}, və ya {{ui:Daha çox}} menyusunda {{ui:Dublikat et və köçür}}. Obyektlərin surəti göstərici ilə olduğu yerdən hərəkət edir; {{key:Esc}} heç nə qoymur. Buferdən istifadə etmir.

- `Dublikat ediləcək obyektləri seçin` (obyektlər artıq seçilibsə ötürülür)
- `Surətin hara getdiyini göstərin (Esc heç nə qoymur)`: klikləyin, nöqtə yazın, `@dx,dy` (göstəricinin olduğu yerdən), və ya kursora doğru məsafə.

### SELECT

`Obyektləri seçin` soruşur (aşağıdakı bütün seçimlərlə) və seçdiyinizi növbəti əmr üçün və ya sonra `P` üçün seçilmiş saxlayır.

### QSELECT

Ləqəblər: `QS`. Brauzerdə, {{ui:Sürətli seçim}} dialoqu (bax [Obyektləri seçin](topic:select-objects#select-by-a-rule-quick-select)). Onsuz əmr sətri `Obyekt növünü daxil edin`, `Xassəni daxil edin`, `Operatoru daxil edin [=/<>/>/</*/Hamısını seç] <=>` və `Dəyəri daxil edin` soruşur. Uyğun gələnlər seçim olur.

### SELECTSIMILAR

Ləqəblər: `SIM`. `Obyektləri seçin [Parametrlər (SE)]` (və ya cari seçim): eyni növdə, eyni qatda və rəngdə olan (və blok adı, ştrixləmə naxışı ilə) hər obyekti seçir. `SE` `Xassəni açın və ya bağlayın [Qat (LA)/Rəng (CO)/Ad (NA)/Naxış (PA)/Hündürlük (HE)]` soruşur, Enter-ə qədər təkrarlanır.

### FIND

Ləqəblər yoxdur; və ya {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Tap və əvəz et}}. Brauzerdə {{ui:Tap və əvəz et}} dialoqu (bax [Mətn və etiketlər əlavə edin](topic:text#find-and-replace-words)). Onsuz: `Tapılacaq mətni daxil edin`, sonra `Əvəz edən mətni daxil edin (Enter: tapılanı seç)`. Mətndə, atribut dəyərlərində və ölçü mətnində açıq sekmədə və ya seçimdə axtarır.

### SELECTALL və DESELECT

`SELECTALL` (ləqəb `AI_SELALL`, {{key:Mod+A}}) açıq sekmədə redaktə edə biləcəyiniz hər obyekti seçir. `DESELECT` (ləqəblər `AI_DESELECT`, `SELECTNONE`; və ya {{key:Esc}}) seçimi təmizləyir.

## Ölçülər

### DIMLINEAR

Ləqəblər: `DLI`, `DIMLIN`. Üfüqi və ya şaquli məsafə.

- `Birinci uzantı xəttinin başlanğıcını göstərin [Obyekti seç (S)]` (Enter və ya `S`: `Ölçüləcək obyekti seçin`, sonra xəttə, qövsə, çevrəyə və ya polixətt parçasına klik)
- `İkinci uzantı xəttinin başlanğıcını göstərin`
- `Ölçü xəttinin yerini göstərin [Mətn/Üfüqi/Şaquli/Fırlanmış]`. `T` mətn soruşur (`<>` ölçülmüş dəyərdir), `H` və `V` istiqaməti sabitləyir, `R` `Ölçü xəttinin bucağını göstərin <0>` soruşur.

### DIMALIGNED

Ləqəblər: `DAL`, `DIMALI`. İki nöqtə arasında həqiqi məsafə.

- Başlanğıclar {{cmd:DIMLINEAR}}-dəki kimi, sonra `Ölçü xəttinin yerini göstərin [Mətn]`.

### DIMANGULAR

Ləqəblər: `DAN`, `DIMANG`.

- `Qövs, çevrə və ya xətt seçin, və ya təpə üçün Enter`
- Qövs: onun bucağı. Çevrə: `İkinci bucaq ucunu göstərin`. Xətt: `İkinci xətti seçin`. Enter: `Bucağın təpəsini göstərin`, `Birinci bucaq ucunu göstərin`, `İkinci bucaq ucunu göstərin`.
- `Ölçü xəttinin yerini göstərin [Mətn]`: ölçmək üçün bucağın içinə klik edin.

### DIMRADIUS və DIMDIAMETER

Ləqəblər: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Qövs və ya çevrə seçin`, sonra `Ölçü xəttinin yerini göstərin [Mətn]`.

### DIMCONTINUE

Ləqəblər: `DCO`, `DIMCONT`. Son xətti və ya düz ölçüdən davam edir (və ya `Xətti və ya düz ölçü seçin` soruşur).

- `İkinci uzantı xəttinin başlanğıcını göstərin [Geri qaytar (U)]`, Enter-ə qədər təkrarlanır.

### DIMBASELINE

Ləqəblər: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} kimi, amma hər ölçü birinci başlanğıcdan başlayır və daha uzaqda yığılır.

### DIMORDINATE

Ləqəblər: `DOR`, `DIMORD`. `Xüsusiyyətin yerini göstərin`, sonra `İstinad xəttinin ucunu göstərin [Xdatum/Ydatum/Mətn]`. Xüsusiyyətin UCS başlanğıcından X və ya Y boyunca nə qədər uzaqda olduğunu istinad xəttində yazır: əsasən yuxarı və ya aşağı gedən xətt X, yan gedən Y oxunur; `Xdatum` və `Ydatum` hansının olacağını sabitləyir. Əvvəlcə {{cmd:UCS}} ilə başlanğıcı təyin edin (olmasa, çertyojun 0,0 nöqtəsi). Tutacaqlar xüsusiyyəti, başlanğıcı və istinad xəttinin ucunu hərəkət etdirir, dəyər izləyir. DWG və DXF-də real ordinat ölçüsü kimi saxlanılır. Istinad xəttinin ucunun xüsusiyyətin özü üzərində olmasını rədd edir.

### DIMARC

Ləqəblər: `DAR`. `Qövsü və ya polixətt qövs parçasını seçin`, sonra `Qövs uzunluğu ölçüsünün yerini göstərin [Mətn]`. Qövs boyunca ölçür (vətər üzrə deyil) və qövs işarəsini dəyərdən əvvəl yazır. Tam çevrəni, xətti və ya düz polixətt parçasını rədd edir. DWG-də qövs uzunluğu ölçüsü kimi saxlanılır; DXF-də mətn kimi uzunluqla bucaq ölçüsü kimi saxlanılır, və CadCraft onu yenidən qövs uzunluğu ölçüsü kimi açır.

### DIMJOGGED

Ləqəblər: `DJO`, `JOG`. `Qövs və ya çevrə seçin`, `Mərkəz yerinin dəyişdirilməsini göstərin`, `Əyilmə yerini göstərin`. Mərkəzi uzaq və ya vərəqdən kənarda olan əyri üçün radius ölçüsü: ölçü xətti mərkəz əvəzinə verdiyiniz nöqtədən başlayır, içində əyilmə ilə, və yenə də real radiusu yazır. DWG-də əyilmiş radius ölçüsü kimi saxlanılır; DXF-də radius ölçüsü kimi saxlanılır və CadCraft onu yenidən əyilmiş açır.

### DIMJOGLINE

Ləqəblər: `DJL`. `Əyilmə əlavə etmək üçün ölçü seçin [Sil]`, sonra `Əyilmə yerini göstərin (və ya Enter basın)`. Xətti və ya düz ölçünün xəttinə əyilmə simvolu qoyur, məsafənin miqyasda çəkilmədiyini göstərmək üçün; dəyər dəyişmir. `Sil` onu götürür. Digər ölçü növlərini rədd edir.

### QDIM

Ləqəblər yoxdur. `Ölçüləcək həndəsəni seçin`, sonra `Ölçü xəttinin mövqeyini göstərin [Davamlı/Pilləli/Baza/Ordinat/Radius/Diametr/datumPoint]`. Bir addımda bir neçə obyekti ölçür: xətlərin və polixətt parçalarının uclarından, çevrə və qövslərin mərkəzlərindən, nöqtələrdən və blok istinadlarından. Obyektlərin üstündə və ya altında olan mövqe ölçür, yanında olan mövqe yuxarı ölçür. `Davamlı` nöqtələri zəncirləyir, `Baza` hamısını birincidən ölçür, `Pilləli` cütləri ortadan çıxarır, `Ordinat` hər nöqtəyə onun datumdan məsafəsini verir (`datumPoint` yenisini seçir), `Radius` və `Diametr` seçilmiş hər çevrə və qövsü ölçür. Rejim yadda qalır. Yaratdığı hər şey bir geri qaytarma addımıdır. İki nöqtədən az olduqda və ya Radius və Diametr üçün qövs və ya çevrə olmadıqda bunu bildirir.

### DIMBREAK

Ləqəblər: `DBREAK`. `Kəsik əlavə etmək və ya çıxarmaq üçün ölçüləri seçin`, sonra `Digər obyektlər kəsişən yerdə kəsin [Avtomatik/Əl ilə/Sil] <Avtomatik>`. `Avtomatik` ölçü və uzantı xətlərində digər obyektin kəsişdiyi hər yerdə boşluq buraxır və həmin obyektlər və ya ölçü hərəkət etdikdə onları yenidən hesablayır. `Əl ilə` (bir ölçü) iki nöqtə soruşur və aralarında boşluq buraxır. `Sil` bütün boşluqları götürür. Boşluq ölçü mətninin hündürlüyünün 1.5 qatıdır.

### DIMSPACE

Ləqəblər yoxdur. `Baza ölçüsünü seçin`, `Aralanacaq ölçüləri seçin`, `Aralıq dəyərini və ya Avtomatik daxil edin <Avtomatik>`. Paralel xətti və düz ölçülərin (və ya eyni təpədən bucaqlı ölçülərin) ölçü xətlərini eyni məsafədə düzləşdirir, baza ölçüdən sayılaraq, hər biri olduğu tərəfdə. `0` onları baza ilə düzləşdirir; `Avtomatik` baza ölçünün mətn hündürlüyünün iki qatıdır. Bazaya paralel olmayan ölçülər olduğu kimi qalır.

### DIMINSPECT

Ləqəblər yoxdur. `Ölçüləri seçin`, `Yoxlama çərçivəsinin forması [Dairəvi/Bucaqlı/Yoxdur/sil] <Dairəvi>`, `Etiketi daxil edin`, `Yoxlama tezliyini daxil edin <100%>`. Dəyərin ətrafında çərçivə çəkir, əvvəlində etiket və sonunda yoxlama tezliyi ilə. `sil` çərçivəni götürür. Tolerantlıq mətni dəyərlə qalır.

### DIMOVERRIDE

Ləqəblər: `DOV`, `DIMOVER`. `Üstündən keçiləcək ölçü dəyişəninin adını daxil edin və ya Təmizlə`, `Yeni dəyəri daxil edin …`, Enter-ə qədər təkrarlanır, sonra `Ölçüləri seçin`. Bu parametrləri yalnız seçilmiş ölçülərdə dəyişir; ölçü üslubu dəyişmir. Ədəd və ya açar olan dəyişənləri qəbul edir (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Təmizlə` seçilmiş ölçüləri onların üslubuna qaytarır. Belə dəyişən olmayan adı və qəbul edə bilmədiyi dəyəri rədd edir.

### DIMREASSOCIATE

Ləqəblər: `DRE`, `DIMREASSOC`. `Ölçüləri seçin`, sonra hər biri üçün onun uzantı xətlərinin başlanğıcları (`Obyektdə birinci uzantı xəttinin başlanğıcını göstərin`: xəttin ucuna və ya ortasına, polixətt küncünə, mərkəzə tutma; Enter həmin nöqtəni sərbəst saxlayır), və ya radius, diametr, əyilmiş radius və ya qövs uzunluğu ölçüsü üçün `Qövs və ya çevrə seçin`. Ölçü sonra həmin obyektlərə bağlanır: onlar hərəkət etdikdə və ya ölçüsü dəyişdikdə, eyni geri qaytarma addımında izləyir və yenidən ölçür. Bağlı nöqtəni əllə köçürmək və ya obyekti silmək bağlılığı bitirir. Bağlılıq DWG və DXF 2000-də CadCraft-ın öz məlumatı kimi saxlanılır; digər proqramlar adi ölçü görür.

### DIMDISASSOCIATE

Ləqəblər: `DDA`, `DIMDISASSOC`. `Ölçüləri seçin`. Onları bağlı olduqları obyektlərdən azad edir; heç nə hərəkət etmir.

### CENTERMARK

Ləqəblər: `CM`, `DIMCENTER`, `DCE`. `Mərkəz işarəsi əlavə etmək üçün çevrə və ya qövs seçin`, Enter-ə qədər təkrarlanır. Mərkəzdə xaç və əyrinin kənarına qədər dörd mərkəz xətti çəkir (xətt tipi CENTER), cari qatda adi xətlər kimi; cari ölçü parametrlərinin ox ölçüsündən və ümumi miqyasından ölçülür, UCS ilə fırlanır. Çevrə hərəkət etsə, onlar izləmir.

### CENTERLINE

Ləqəblər: `CL`. `Birinci xətti seçin`, `İkinci xətti seçin`. İki xətt arasında (birləşdikdə bisektrisa boyunca) onların ortasında, bir az uzun, CENTER xətt tipində bir xətt çəkir. Adi xəttdir: iki xətti izləmir.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ləqəblər yoxdur. Hər biri `… üçün yeni dəyəri daxil edin <cari>` soruşur və həmin ölçünü **yeni** ölçülər üçün təyin edir: ümumi miqyas, mətn hündürlüyü, ox ölçüsü, onluq rəqəmlər (8-ə qədər), mətnin ətrafında boşluq, ölçü xəttindən kənara uzantı, başlanğıcdan ofset. Bax: [Ölçü ölçülərini təyin edin](topic:dimension-settings).

### DIMLUNIT

Ölçü parametri: yalnız yeni ölçülərin formatı (1 elmi, 2 onluq, 3 mühəndis, 4 memarlıq, 5 kəsr).

### DIMSTYLE və -DIMSTYLE

Ləqəblər: `DST`, `DDIM`, `D`. Ölçü üslubları meneceri: {{ui:Cari təyin et}}, {{ui:Yeni…}}, {{ui:Dəyişdir…}}, {{ui:Adını dəyiş…}}, {{ui:Sil}}, {{ui:Müqayisə et…}}, {{ui:Seçilənlərə tətbiq et}}. Əmr sətrində `-DIMSTYLE`: `Ölçü üslubu [Bərpa et/Saxla/Sil/Tətbiq et/Müqayisə et/Adını dəyiş/Siyahı]`. Bax: [Ölçü ölçülərini təyin edin](topic:dimension-settings#named-dimension-styles).

### DIMEDIT və DIMTEDIT

`DIMEDIT` (`DED`): `Ölçü redaktəsi [Ev/Yeni/Fırlat/Maillə] <Ev>`, sonra ölçülər (və ya artıq seçilmişlər). Yeni mətn soruşur (`<>` = ölçülmüş dəyər); Fırlat bucaq soruşur (0 mətni geri qoyur); Maillə uzantı xətlərinin X oxundan bucağını soruşur (Enter = yox; yalnız xətti və düz ölçülər). `DIMTEDIT` (`DIMTED`): `Ölçü mətni [Sol/Sağ/Mərkəz/Ev/Bucaq] <Mərkəz>`. Bax: [Ölçü ölçülərini təyin edin](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Ləqəblər: `DTU`. `Yeni ölçülərin mətnində vahidlər [Çertyoj vahidləri/mm/cm/m/km]`, və ya ölçülər seçilmişkən `Seçilmiş ölçülərin mətnində vahidlər`. Ölçülmüş uzunluğu həmin vahidlə, vahid də sonra yazılır (DIMLFAC və DIMPOST şəkilçisi); `D` çertyoj vahidlərinə qayıdır. Bax: [Ölçüləri mm, cm, m və ya km ilə](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Ləqəblər: `RC`. `Qövs uzunluğu: … Növ: …` çap edir, sonra `Birinci nöqtəni göstərin [Qövs uzunluğu/Obyekt/Düzbucaqlı/Çoxbucaqlı/Sərbəst]`. Düzbucaqlı `Əks künc nöqtəsini göstərin` soruşur; Çoxbucaqlı `Növbəti nöqtəni göstərin (Enter buludu bağlayır) [Geri qaytar (U)]`; Sərbəst klik və ya {{key:Enter}}-ə qədər göstəricini izləyir; `O` `Obyekti seçin` və `Əks istiqamət? [Bəli/Xeyr] <X>` soruşur və obyekti buluda çevirir. `A` `Hər qövsün uzunluğunu göstərin` soruşur. `R`, `P` və `F` növbəti bulud üçün növü seçir. Nəticə qövslərdən bağlı polixəttdir.

### MLEADER

Ləqəblər: `MLD`; və ya {{ui:İstinad}}. `Istinad oxunun yerini göstərin [Ox ölçüsü/Yerləşmə məsafəsi/Blok]`, `İstinad yerləşmə yerini göstərin`, sonra yerində qutuda mətn (və ya onsuz `Mətni daxil edin (boş sətir bitirir)`). `Blok` əvvəl blok adı soruşur və çoxistinad mətn əvəzinə həmin bloku göstərir. Daha çox istinad xətti: {{cmd:MLEADEREDIT}}. DWG-də real çoxistinad kimi saxlanılır; DXF çəkdiyi xətləri, oxu və mətni saxlayır.

### MLEADEREDIT

Ləqəblər: `MLE`. `Çoxistinadı seçin`, sonra `İstinad oxunun yerini göstərin [İstinad xətlərini sil/Blok məzmunu/Mətn məzmunu]`: hər nöqtə yeni oxdan eyni yerləşmə nöqtəsinə istinad xətti əlavə edir, Enter-ə qədər. `İstinad xətlərini sil` sonra klik etdiyiniz istinad xəttini götürür (çoxistinad ən azı birini saxlayır). `Blok məzmunu` blok adı soruşur və mətn əvəzinə həmin bloku göstərir (onun atributları soruşulur); `Mətn məzmunu` mətni geri qoyur. Hər istinad xəttinin öz tutacağı var. DWG-də bütün istinad xətlərini və bloku bir çoxistinadda saxlayır.

### MLEADERALIGN

Ləqəblər: `MLA`. `Çoxistinadları seçin`, sonra `Düzləşdiriləcək çoxistinadı seçin [Bölüşdür/Aralıq/Cari aralığı istifadə et]` və `İstiqaməti göstərin`. Digər çoxistinadların yerləşmə nöqtələrini (və onların mətnini və ya blokunu) seçilmiş birinin yerləşmə nöqtəsindən həmin istiqamətdə keçən xəttin üzərinə köçürür; ox nöqtələri öz yerində qalır. `Aralıq` onlara bərabər məsafə də verir; `Bölüşdür` iki nöqtə soruşur və onları aralarında bərabər yayır. Ən azı iki çoxistinad lazımdır.

### MLEADERCOLLECT

Ləqəblər: `MLC`. `Çoxistinadları seçin`, sonra `Toplanmış çoxistinadın yerini göstərin [Şaquli/Üfüqi]` (Enter birincinin yerini saxlayır). Bir neçəsindən bir çoxistinad yaradır: blok məzmunu hamısını yan-yana və ya bir-birinin altında tutan yeni blokda; mətn məzmunu hər biri üçün bir sətirlə bir qeyd olur. Birinci çoxistinad öz istinad xətlərini saxlayır; digərləri silinir. Mətn və blok məzmununun qarışığını rədd edir.

### TABLE

Ləqəblər: `TB`; və ya {{ui:Şərh}} › {{ui:Daha çox}} › {{ui:Table}}. Cədvəl yaradır: hərəkət, surət, fırlanma, miqyas və çap etdiyiniz bir obyekt, xanaları məlumat kimi saxlanılır.

- `Məlumat sətirlərinin sayı və ya [Yapışdır (P)/Fayl (F)/Üslub (S)] <3>`, sonra `Sütunların sayı <3>`, `Mətn hündürlüyü` və `Cədvəlin sol yuxarı küncü`. Cədvəlin başlıq sətri (bir birləşdirilmiş xana) və məlumat sətirlərinin üstündə sütun başlığı sətri olur.
- `P`: buferdəki elektron cədvəl xanalarından cədvəl (xanalar arasında tab olan mətn). Buferdə belə xanalarla {{key:Ctrl+V}} basmaq eyni işi görür, CadCraft-ın öz surəti yenidən olmadığı halda (və ya CadCraft fərq edə bilmirsə: onda öz surətini yapışdırır və bunu bildirir). `F`: `.csv` və ya tab ilə ayrılmış fayldan cədvəl. Birinci sətir sütun başlığına çevrilir; sütun enləri mətnə uyğunlaşır.
- `S`: bu cədvəl üçün cədvəl üslubunu seçin (bax {{cmd:TABLESTYLE}}).
- Sətir və ya sütun sayı tam ədəd deyilsə, və cədvəlin tutduğundan çox xana varsa (2000 sətir, 200 sütun, 40000 xana) rədd edir.
- {{cmd:EXPLODE}} cədvəli xətlərə və mətnə çevirir. DWG kimi saxlanılanda cədvəl digər proqramların redaktə edə biləcəyi real cədvəl obyektidir; DXF kimi saxlanılanda onu çəkən blok olur və CadCraft onu yenidən cədvəl kimi açır.

### TABLEDIT

Ləqəblər: `TABLEEDIT`, `TABEDIT`; və ya xanaya iki dəfə klik. Cədvəli redaktə edir.

- `Yazmaq üçün xana seçin (bitirmək üçün Enter) və ya [Sətir (R)/Sütun (C)/Ölçü (S)/Birləşdir (M)/Ayır (U)/Düzləşdir (A)/Hündürlük (H)/Növ (K)/Təmizlə (CL)]`. Xanaya klik edin, və ya cədvəl seçilmişkən onun adını yazın (`B3`: B sütunu, 3 sətir; başlıq sətri 1-dir). Brauzerdə xananın üzərində qutu açılır: {{key:Enter}} mətni saxlayır, {{key:Tab}} növbəti xanaya keçir, {{key:Alt+Enter}} yeni sətir başladır, {{key:Esc}} xananı əvvəlki kimi qoyur.
- `=` ilə başlayan mətn düsturdur: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, mötərizələr və `sqrt` və `round` kimi funksiyalarla. Xana dəyəri göstərir; öz xanasını adlandıran, cədvəldən kənar xananı və ya ədəd olmayan xananı göstərən düstur `####` göstərir və əmr sətri səbəbini bildirir.
- `R` / `C`: sətir və ya sütunları seçilmiş xanada `Daxil et` və ya `Sil` (neçə, və yuxarı və ya aşağı, sol və ya sağ). Düsturlar adlandırdığı xanaları izləyir.
- `S`: sütunun eni və sətirin hündürlüyü. Sətir mətni tələb etdiyindən aşağı heç vaxt olmur. Seçilmiş cədvəldə hər sütunun və sətirin kənarında da tutacaq var.
- `M`: bir seçilmiş xanadan başqasına birləşdirmə; `U`: birləşməni ayırmaq. `A`: düzləşmə (`TL` yuxarı sol … `MC` orta mərkəz … `BR` aşağı sağ). `H`: bu xananın öz mətn hündürlüyü (0 = üslubun). `K`: sətri başlıq, sütun başlığı və ya məlumat sətri etmək. `CL`: xananı boşaldır.
- Kilidli qatdakı cədvəli, bütün sətir və ya sütunları silməyi və başqa birləşmiş xananı iki yerə kəsəcək birləşdirməni rədd edir.

### TABLESTYLE

Ləqəblər: `TS`. Cədvəl üslublarını hər birini neçə cədvəlin istifadə etdiyi ilə siyahılayır, sonra `Cədvəl üslubu: [Yeni/Təyin et/Redaktə et/Sil/Tətbiq et]`.

- Üslub başlıq, ad və məlumat sətirləri üçün mətn hündürlüyünü, düzləşməni, xana kənarını və hansı sərhədlərin çəkildiyini (xarici, sətirlər arası, sütunlar arası) saxlayır.
- `N` cari üslubdan yeni üslub yaradır və onu cari edir; `S` cari üslubu təyin edir (yeni cədvəllər onu alır); `E` birini redaktə edir: ondan istifadə edən cədvəllər yenidən çəkilir; `A` seçilmiş cədvəllərə cari üslubu verir; `D` birini silir (Standart və ya cari olmayan; ondan istifadə edən cədvəllər öz görünüşünü saxlayır).
- Üslublar çertyojla birlikdə saxlanılır (DWG və DXF).

### TABLEEXPORT

Cədvəlin göstərdiyini CSV faylı kimi saxlayır (düstur öz dəyəri ilə). `Cədvəli seçin`, və ya əvvəlcə bir cədvəl seçin. `=`, `+`, `-` və ya `@` ilə başlayan mətn xanalarının qarşısına `'` qoyulur ki, elektron cədvəl onları işə salmasın.

### TABLEPASTE

Ləqəblər: `PASTETABLE`. Buferdəki elektron cədvəl xanalarından cədvəl yaradır, sonra onun sol yuxarı küncünü soruşur. {{cmd:TABLE}} › `Yapışdır` ilə eynidir.

### DATALINK

Ləqəblər: `DL`. `Məlumat əlaqəsi: [Yeni/Siyahı/Sil] <Yeni>`. `N` CSV faylı soruşur, onun cədvəlini yerləşdirir və faylın adını yadda saxlayır; `L` əlaqələri faylı, ölçüsü, nə vaxt oxunduğu və neçə cədvəlin istifadə etdiyi ilə siyahılayır; `R` əlaqəni silir (onun cədvəlləri adi cədvəl kimi qalır).

### DATALINKUPDATE

Ləqəblər: `DLU`. Məlumat əlaqəsinin faylını yenidən oxuyur və ona bağlı cədvəlləri yenidən doldurur (sətir və sütunlar uyğunlaşdırılmaq üçün əlavə olunur və ya silinir). Brauzer faylı özü aça bilmir, buna görə faylı yenidən seçməyinizi soruşur. Bir neçə əlaqə olduqda hansının olduğunu soruşur.

### FIELD

Çertyoja sahə qoyur: özü hesablanan mətn. `Sahə: [Tarix/Fayl adı/Vərəq/Xassə/Obyekt/Düstur/Kod] <Tarix>`:

- `D`: indi, və ya saxlanılmış, yaradılmış və ya çap olunmuş tarix, və format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: fayl adı, uzantı ilə və ya uzantısız. `S`: vərəqin nömrəsi, adı və ya neçə vərəq olduğu. `P`: adı ilə çertyoj xassəsi (bax {{cmd:DWGPROPS}}). `O`: obyekti seçin, sonra nə oxunacağı (sahə, uzunluq, perimetr, radius, diametr, qat, ad, x, y, mətn, fırlanma, rəng) və onluq rəqəmləri. `E`: düstur. `C`: kodları olduğu kimi yazılmış mətn, məsələn `Vərəq %<sheetnumber>% / %<sheetcount>%`.
- Sonra `Sahəni qoymaq üçün mətn, cədvəl xanası və ya atributlu blok seçin (Enter: yeni mətn)`: seçilmiş mətnə sahə mövcud mətnin sonuna əlavə olunur; cədvəl xanası eyni şəkildə; blok istinadı hansı atributun olacağını soruşur; {{key:Enter}} yeni mətn üçün hündürlük və nöqtə soruşur.
- Ekranda sahənin fonu açıq boz olur; çap və PDF-də heç vaxt olmur. Sahənin mətninin üzərinə əllə yazmaq sahəni bitirir. Hesablana bilməyən sahə `####` göstərir.
- Obyektin sahəsi obyekti CadCraft-ın obyektlərdə saxladığı açarla tapır (Parametrlər › CadCraft › Birləşdirməyə uyğun fayllar); açarlar söndürülübsə, rədd edir.

### UPDATEFIELD

Ləqəblər: `UPDATEFIELDS`. `Yenilənəcək sahələri olan obyektləri seçin (Enter: hər sahə) və ya [Parametrlər]`. `S` sahələrin özlərinin nə vaxt yenilənəcəyini təyin edir: `O` açıq, `S` saxla, `P` çap, `R` yenidən qur hərflərini yazın (başlanğıc üçün dördü), və ya `NONE`.

### DWGPROPS

Ləqəblər: `DRAWINGPROPS`. Çertyojun xassələrini siyahılayır, sonra `Dəyiş: [Başlıq/Mövzu/Müəllif/Şirkət/Açar sözlər/Şərhlər/Xüsusi/Sil/Çıxış]`. İlk altısı {{ui:Çertyoj təfərrüatları}} panelinin göstərdikləridir; `U` öz adınızı və dəyərinizi əlavə edir, `R` birini silir. Sahələr onları oxuyur (`%<prop:title>%`, `%<prop:Client>%`) və dərhal izləyir. Daxili adlardan biri olan və ya `%`, `<`, `>`, dırnaq və ya əks slash olan xüsusi adı rədd edir.

## Parametrik

Bax: [Çertyoju məhdudlaşdırın](topic:constraints) və [Parametrlər və tənlikləri istifadə edin](topic:parameters). Məhdudiyyətlər {{ui:Model}} sekmədə işləyir.

### GEOMCONSTRAINT və GC əmrləri

Ləqəb `GCON`: `Məhdudiyyət növünü daxil edin [Üfüqi/Şaquli/Perpendikulyar/Paralel (AR)/Toxunan/Üst-üstə (CO)/Ortomərkəzli (CON)/Xətti (COL)/Simmetrik/Bərabər/Sabit] <Üfüqi>`, sonra həmin əmrin sualları.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Obyekt seçin [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Birinci obyekti seçin`, `İkinci obyekti seçin` (ikinci hərəkət edir).
- {{cmd:GCCOINCIDENT}}: `Birinci nöqtəni seçin [Obyekt/Avtomatik məhdudiyyət] <Obyekt>`, `İkinci nöqtəni seçin [Obyekt] <Obyekt>`.
- {{cmd:GCFIX}}: `Nöqtə seçin [Obyekt] <Obyekt>`.
- {{cmd:GCSYMMETRIC}}: `Birinci obyekti seçin [2Points] <2Points>`, `İkinci obyekti seçin`, `Simmetriya xəttini seçin`.

### DIMCONSTRAINT və DC əmrləri

Ləqəb `DCON`: `Çevriləcək assosiativ ölçünü seçin [Xətti (LI)/Üfüqi/Şaquli/Düz (AL)/Bucaqlı (AN)/Radial/Diametr/Çevir (Convert)] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Birinci məhdudiyyət nöqtəsini göstərin [Obyekt] <Obyekt>`, `İkinci məhdudiyyət nöqtəsini göstərin`, `Ölçü xəttinin yerini göstərin`, `Ölçü mətni <d1=40>` (ədəd, ifadə və ya `ad=ifadə`).
- {{cmd:DCALIGNED}}: yuxarıdakı kimi, `[Obyekt/Nöqtə və xətt/2Lines]` ilə.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Qövs və ya çevrə seçin`. {{cmd:DCANGULAR}}: `Birinci xətti və ya qövsü seçin`, `İkinci xətti seçin`.
- {{cmd:DCCONVERT}}: `Çevriləcək ölçüləri seçin`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Obyektləri seçin [Parametrlər]`. `S` məsafə və bucaq tolerantlığını soruşur.
- {{cmd:DELCONSTRAINT}} (ləqəb `DELCON`): `Obyektləri seçin`; onların məhdudiyyətləri gedir.
- {{cmd:CONSTRAINTBAR}} (ləqəb `CBAR`): `Obyektləri seçin [Hamısını göstər/Hamısını gizlət]`, sonra `[Göstər/Gizlət]`.
- {{cmd:DCDISPLAY}}: `Seçimi daxil edin [Göstər/Gizlət]`.

### PARAMETERS və -PARAMETERS

{{cmd:PARAMETERS}} (ləqəblər `PAR`, `PARAM`) {{ui:Parametrlər}} panelini açır. `-PARAMETERS`: `Seçimi daxil edin [Yeni/Redaktə/Adını dəyiş/Sil/?] <?>`.

### SWBOUT

Ləqəb `SWMACRO`. SolidWorks-də modeli bir məhdudiyyətli eskiz kimi yenidən quran makro (.swb) yükləyir. Bax: [Eskizləri başqa detal modelləşdiricilərinə və onlardan köçürün](topic:solidworks-sketches).

## Bloklar

### ANNOSCALE

Ləqəblər: `CANNOSCALE`. Çertyojun annotasiya miqyasını və neçə annotativ obyekt saxladığını bildirir, sonra `Yeni annotasiya miqyası`: `1:50`, `1:100`, `2:1`, təkbaşına ədəd (`50` 1:50 deməkdir) və ya çertyojun öz miqyaslarından birinin adını yazın. Hər annotativ mətn və ölçü yeni miqyasda eyni ölçüdə çap olunsun deyə yenidən ölçülür, bir geri qaytarma addımında; annotativ olmayan obyektlər olduğu kimi qalır, və yeni miqyası olmayan miqyas siyahısı saxlayan obyekt də ({{cmd:OBJECTSCALE}}). Bax: [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Ləqəblər: `OBJSCALE`. `Annotativ obyektləri seçin`, sonra `Seçilmiş obyektlərin annotasiya miqyasları [Əlavə et/Sil/Cari miqyas/Siyahı/Çıxış] <Əlavə et>`. Annotativ mətn və ya ölçü annotasiya miqyaslarının siyahısını saxlayır. `Əlavə et` və `Sil` miqyas soruşur (`1:50`, `2:1`, təkbaşına ədəd və ya çertyojun öz miqyası adı); `Cari miqyas` çertyojun annotasiya miqyasını əlavə edir; `Siyahı` hər obyektin miqyaslarını çap edir. Miqyası obyektin siyahısında olan görünüş pəncərəsi obyekti həmin miqyasda kağız hündürlüyünü çap edən ölçüdə göstərir, ekranda və çapda. Son miqyası silmək olmaz. Annotativ olmayan obyektlər kənarda qalır: əvvəlcə Xassələrdə Annotativ-i açın. Siyahılar DWG və DXF-də CadCraft-ın öz məlumatı kimi saxlanılır. Bax: [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Ləqəblər: `ANNOALL`. `Annotativ obyektləri bütün miqyaslarda göstərin [ON/OFF]`. Açıq (çertyoj başlayanda belədir): annotativ obyekt, siyahısında olmayan miqyaslı görünüş pəncərəsində və ya modeldə də öz ölçüsündə göstərilir. Söndürülmüş: orada göstərilmir və modeldə seçilə bilmir. Keçid bir geri qaytarma addımıdır; faylda saxlanılmır.

### SCALELISTEDIT

Ləqəblər: `SCALELIST`. `Miqyas siyahısı [Əlavə et/Redaktə et/Sil/Siyahı/Sıfırla]` Enter-ə qədər. Əlavə et: `Miqyas adı`, `Kağız vahidləri`, `Çertyoj vahidləri`. Redaktə və Sil miqyasın adını soruşur. Çertyojun öz miqyasları görünüş və çap miqyası siyahılarına qoşulur və çertyojla birlikdə saxlanılır. Bax: [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT və PEDIT

`SPLINE` (`SPL`): `Spline-ın birinci nöqtəsi [Üsul/Obyekt] (Uyğunlaşdırma nöqtələri)`. Uyğunlaşdırma: əyrinin keçdiyi nöqtələr; `Bağla`, `Geri qaytar`, sonra `Başlanğıc toxunanı` və `Son toxunan` (nöqtə və ya {{key:Enter}}). Üsul › İdarəetmə təpələri dərəcə (1-dən 5-ə) soruşur və idarəetmə çoxbucaqlısından çəkir. Obyekt polixəttləri təpələri ilə keçən spline-lara çevirir. `SPLINEDIT` (`SPE`): `[Uyğunlaşdırma məlumatları/Təpəni redaktə et/Polixəttə çevir/Açıq və ya Bağlı/Tərs/Geri qaytar/Çıxış]`; Uyğunlaşdırma məlumatları `[Əlavə et/Sil/Köçür/Təmizlə/Toxunanlar/Çıxış]`; Təpəni redaktə et `[İdarəetmə nöqtəsi əlavə et/Köçür/Çəki/Çıxış]`. `PEDIT` (`PE`): `[Bağla/Aç/Birləşdir/En/Uyğunlaşdır/Spline/Düzləşdir/Xətt tipi yaradılması/Tərs/Geri qaytar/Çıxış]`, bir neçə obyekt üçün `M`; xətlər, qövslər və spline-lar əvvəlcə polixətt kimi təklif olunur. Bax: [Spline-lar və polixəttlər](topic:splines).

### BLOCK

Ləqəblər: `B`, `BMAKE`.

- `Blok adını daxil edin`. Varsa: `"…" bloku artıq var. Yenidən təyin edilsin? [Bəli/Xeyr] <X>`.
- `Daxil etmə baza nöqtəsini göstərin`
- `Obyektləri seçin`. Onlar yeni blokun bir istinadı ilə əvəz olunur.

### WBLOCK

Ləqəblər: `W`, `-WBLOCK`. Bloku, bir neçə obyekti və ya bütün çertyojı yeni DWG və ya DXF faylı kimi yazır. `WBLOCK mənbəyi [Blok/Bütün çertyoj/Obyektlər] <Obyektlər>`:

- **Obyektlər**: `Daxil etmə baza nöqtəsini göstərin` (yeni çertyojun başlanğıcı olur), `Obyektləri seçin`, sonra `Fayl formatı [DWG/DXF/R12 DXF]` və `Yeni çertyoj üçün fayl adı`, sonra `Obyektlərlə nə edilsin [Saxla/Blokka çevir/Sil]`. Çevir onları faylın adına bir blokun bir istinadı ilə əvəz edir; Sil onları silir.
- **Blok**: `Yazılacaq blok`. Bloku öz obyektləri, baza nöqtəsi başlanğıc olmaqla, iç-içə blokları daxil olmaqla.
- **Bütün çertyoj**: model məkanındakı hər obyekt. Vərəqlər yazılmır; surəti vərəqləri ilə saxlamaq üçün {{cmd:SAVEAS}} istifadə edin.

Yeni fayl yalnız onun obyektlərinin istifadə etdiyi qatları, xətt tiplərini, mətn və ölçü üslublarını, bloklarını və çertyojun vahidlərini saxlayır. DWG-nin versiyası {{cmd:SAVEAS}}-in sonuncu istifadə etdiyidir. Brauzerdə fayl yüklənir; Studio-da saxlama dialoqu açılır.

### ATTDEF

Ləqəblər: `ATT`, `DDATTDEF`, `-ATTDEF`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atributu təyin et}}. Rejimləri çap edir, sonra `Dəyişmək üçün seçimi daxil edin (bitəndə Enter) [Görünməz/Sabit/Əvvəlcədən]`, `Atribut etiket adını daxil edin`, `Atribut sorğusunu daxil edin`, `Standart atribut dəyərini daxil edin` (sabit olduqda `Atribut dəyərini daxil edin`), `Mətnin başlanğıc nöqtəsini göstərin`, `Mətn hündürlüyünü göstərin`, `Mətnin fırlanma bucağını göstərin`. {{cmd:BLOCK}} atribut təriflərini blokun içinə götürür.

### EATTEDIT və ATTEDIT

`EATTEDIT` (`DDATTE`, və ya atributlu istinada iki dəfə klik; {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atributları redaktə et}}): `Atributlu blok istinadını seçin`, sonra {{ui:Atributları redaktə et}} dialoqu. `ATTEDIT` (`ATE`, `-ATTEDIT`): eyni istinad, sonra hər atribut üçün `<sorğu> (<TAG>) <dəyər>`; {{key:Enter}} dəyəri saxlayır. Bax: [Atributlar](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Hansı blokun istinadlarının atributları yenilənsin [Ad/Seçim/Hamısı] <Seçim>`. Dəyərlər saxlanılır; yeni atributlar standart dəyərini alır, silinənlər gedir, yerləşmələr sıfırlanır.

### BATTMAN

{{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atribut meneceri}}. Dialoq: blok, atributlar (etiket, sorğu, standart, rejimlər, sıra), {{ui:İstinadları yenilə (dəyərlər saxlanılır)}}, {{ui:Tətbiq et}}.

### REFEDIT və REFCLOSE

{{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Yerində redaktə}}. `REFEDIT`: `Yerində redaktə ediləcək blok istinadını seçin` (və ya seçim). `REFCLOSE`: `"…" üzərindəki dəyişiklikləri saxlayırsınız? [Saxla/Ləğv et] <Saxla>`; paneldəki {{ui:Bloku saxla}} və {{ui:Ləğv et}} eyni işi görür. Bütün redaktə bir geri qaytarma addımıdır. Bax: [Atributlar](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT və BCLOSE

`BE`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Bloku redaktə et}}. `Redaktə ediləcək blokun adını daxil edin <seçilmiş istinadın bloku>` blok redaktorunu açır. `BCLOSE` `"…" bloku redaktorunu bağlayırsınız [Saxla/Ləğv et] <Saxla>` soruşur; paneldəki {{ui:Bloku saxla}} və {{ui:Dəyişiklikləri ləğv et}} eyni işi görür. Redaktorda edilən hər şey bir geri qaytarma addımıdır.

### VIEWBASE

Ləqəblər: `FLATSHOT`. 3D sekmədə cisimlərin düz 2D görünüşü: `Görünüş [Ön/Üst/Sağ/Sol/Arxa/Alt/İzometrik]`, `Gizli xətlər [Göstər/Gizlət]`, miqyas (`1:20`, `2:1`; {{key:Enter}} vərəqə uyğun olanı seçir), sonra görünüşün mərkəzi. Bir blok istinadı; görünən kənarlar VIEW-VISIBLE qatında, gizli olanlar VIEW-HIDDEN qatında kəsikli. Bax: [Vərəqdə düz görünüşlər](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Ləqəblər: `-PUBLISH`; və ya {{ui:Bütün vərəqlər bir PDF-də}} {{ui:PDF-ə çap et}} dialoqunda. `Çap ediləcək vərəqlər [Hamısı/Bəzi]`: {{key:Enter}} hər vərəqi çap edir, `S` vergüllə ayrılmış adlar soruşur. Bir PDF, hər vərəq üçün səhifə və əlfəcin. Bax: [Hər vərəq bir PDF-də](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Ləqəblər: `SSM`, `SHEETSETMANAGER`. Sol paneldə {{ui:Vərəq dəsti}} bölməsinə gətirir: bir neçə çertyojdan vərəqlər, nömrələnmiş və adlandırılmış, başlıq ştampları dəstdən doldurulmuş, bir PDF kimi çap olunmuş. Bax: [Vərəq dəstləri](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG və ya DXF seçin, sonra onun yerləşmə nöqtəsi. {{cmd:XREF}} (`XR`, `-XREF`): `Bağlı çertyojlar [?/Bağla/Yenidən yüklə/Birləşdir/Ayır] (Enter: ?)`; birdən çox əlaqə olduqda, onun istinadlarından birini seçin və ya `N` yazıb adını. Bax: [Bağlı çertyojlar](topic:files#linked-drawings-external-references).

### COUNT

Ləqəblər: `BCOUNT`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları say}}. `Sayılacaq blok istinadını seçin, və ya [Hamısı/Çıxart] (Enter: Hamısı)`: birini seçmək onun bloku bu məkanda hər istinadını seçir və sayır; {{key:Enter}} və ya `A` hamısını siyahılayır; `E` sonra `C` (saylar) və ya `A` (atributlar) CSV yükləyir. Bax: [Blokları sayın və cədvəli ixrac edin](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Ləqəblər: `I`, `DDINSERT`.

- `Blok adını daxil edin və ya [Fayl (F)/Kitabxana (L)] <son blok>` (böyük-kiçik hərf fərq etmir). `F` DWG və ya DXF faylı soruşur, sonra bütün çertyoj və ya onun blokları birini; artıq istifadə olunan ad {{ui:Mövcudu saxla}} və ya {{ui:Adını dəyişdir}} soruşur. `L` kitabxana panelini açır.
- `Daxil etmə nöqtəsini göstərin [Miqyas (S)/Fırlat (R)]`. `S` `Miqyas əmsalını göstərin`, `R` `Fırlanma bucağını göstərin` soruşur; hər ikisi yadda qalır.
- Blok artıq başqa yerdə təkrarlanan obyektlərin yanında dayandıqda, neçə yerin təklif olunduğunu bildirən sətir çıxır və sorğu `suGgested` əlavə edir: `G` onları göstərir; birinə yaxın klik edin ki, blok orada olsun, `A` hamısı üçün, {{key:Enter}} geri qayıtmaq üçün. Onlar qonşularının fırlanmasını və standart atribut dəyərlərini alır. Açıq məkanda 20000-dən çox obyektli çertyojlar axtarılmır.
- Sonra blokun soruşduğu hər atribut üçün `Enter <sorğu> (<TAG>) <standart>`. Bax: [Blok atributları](topic:attributes).

### LIBRARY

Ləqəblər: `LIB`. Kitabxana panelini açır: elementləri yerləşdir, yenilənmələri yoxla, kitabxana kreditləri. Heç bir sual yoxdur. Bax: [Fayldan və ya kitabxanadan daxil edin](topic:insert-from-file-and-library).

### STEELMEMBER

Ləqəblər: `SMEMBER`; və ya kitabxananın {{ui:Standart}} sekmesində {{ui:3D element}}. `Kəsik ölçüsü <W12x26>` (sekmənin siyahıladığı kimi), sonra `Başlanğıc nöqtəsi [Sütun]` və `Son nöqtə`: iki nöqtə arasında, yerdə duran, 3D sekmədə cisim element. `C` sütunun baza nöqtəsini və hündürlüyünü soruşur. Bir geri qaytarma addımı. Bax: [Polad kəsikləri və standart detalları yerləşdirin](topic:steel-and-standard-parts).

### PARTSLIST

Ləqəblər: `PLIST`. `Hissələr siyahısının sol yuxarı küncü`, sonra `Mətn hündürlüyü <2.5>`: kitabxanadan yerləşdirilmiş hər standart detal və polad kəsiyin cədvəlini çəkir (element nömrələri, miqdar, detal, standart, ölçü, uzunluq, material, kütlə). Bir geri qaytarma addımı. Bax: [Polad kəsikləri və standart detalları yerləşdirin](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Ləqəblər: `PU`. Heç bir yerdə istifadə olunmayan blok təriflərini silir. Heç bir sual yoxdur.

### DELBLOCKS

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları sil}}. `Silinəcək bloku seçin [Ad/Çıxış]`: blok istinadı seçin, və ya filtrlə bloklar siyahısı üçün `N` (bir neçəsini seçin), və ya bitirmək üçün `X` / {{key:Enter}}. Hər istinad gedir — modeldə, hər vərəqdə və digər blokların içində — sonra tərif, və əmr sətri nəyin silindiyini və nəyin silinə bilmədiyini bildirir. Adsız bloklar və bağlı çertyojlar təklif olunmur. Növbəti blok üçün sorğu geri qayıdır; bütün əmr bir geri qaytarma addımıdır.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} kopyaladığınızı ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) bir blok kimi yapışdırır: daxil etmə nöqtəsini seçin və orada yeni bloka bir istinad seçilmiş halda gedir. Blokun öz adı olur (`A$C` və bir nömrə); {{cmd:RENAME}} ona sizin adınızı verir. Bir geri qaytarma addımı istinadı və bloku silir.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} əvəz ediləcək bloku və onun yerinə qoyulacaq bloku soruşur (`?` blokları siyahılayır), sonra modeldə, hər vərəqdə və digər blokların içində hər istinadı dəyişir. Hər istinad öz yerini, miqyasını, fırlanmasını, qatını və hər iki blokda olan atributların dəyərlərini saxlayır; yalnız yeni blokda olan atributlar standart dəyərləri ilə başlayır, və hansı dəyərlərin silindiyini bildirir. Köhnə blokdan artıq heç nə istifadə etmədikdə onu silməyi təklif edir. Bağlı çertyojları və blokun özünün içinə düşəcək əvəzi rədd edir. Bir geri qaytarma addımı.

### MINSERT

{{cmd:MINSERT}} bloku sətir və sütunlarla yerləşdirir: blok adı, daxil etmə nöqtəsi, miqyas, fırlanma, sətir və sütun sayı və aralarındakı məsafələr. Bütün dəst fırlanma ilə dönür. Hər biri öz istinadıdır (ən çox 10000), buna görə onlardan istənilən biri sonra köçürülə və ya silinə bilər.

### BLOCKSPALETTE

Ləqəblər: `BLOCKSPAL`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Bloklar paneli}}. Kursor filtrində olan {{ui:Bloklar}} panelini göstərir. Hər blokun kiçik şəkli var; ən son yerləşdirilənlər birinci gəlir. Filtrin yanındakı iki düymə şəkillərin siyahısı və şəbəkəsi arasında keçir. Şəkilə klikləyin (və ya {{ui:Daxil et}}) bloku {{cmd:INSERT}} ilə yerləşdirmək üçün, və ya çertyoja sürükləyib düşdüyünüz yerdə yerləşdirin.

{{ui:Kitabxanalar}}, siyahının altında: {{ui:Çertyoj əlavə et}} öz DWG və ya DXF faylınızı qəbul edir və onun blokları şəkilləri ilə siyahılanır, bütün çertyoj da bir blok kimi. Birini yerləşdirmək onun tərifini (və iç-içə blokları, və onların qatlarını) {{cmd:INSERT}}-in `Fayl` seçimi kimi bu çertyoja kopyalayır; burada artıq eyni tərifli blok varsa, sorğusuz istifadə olunur, eyni adlı, lakin fərqli blok {{ui:Mövcudu saxla}} və ya {{ui:Adını dəyişdir}} soruşur. Brauzerdə fayl səhifə bağlanana qədər qalır. CadCraft Studio-da {{ui:Qovluq əlavə et}} qovluqdakı çertyojları siyahılayır, hər biri klik etdiyiniz zaman açılır, və fayllar və qovluqlar yadda saxlanılır. Kiçik x kitabxananı siyahıdan çıxarır; fayla toxunulmur. Paylaşılan {{ui:Kitabxana}} başqa şeydir: bax [Fayldan və ya kitabxanadan daxil edin](topic:insert-from-file-and-library).

### BCONVERT

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Təkrarları bloklara çevir}}. Təkrarlanan həndəsəni tapır və hər surəti bir blokun istinadına çevirir.

- `Təkrarlanan obyektləri seçin və ya [Blok]`: bir surətin obyektləri. `B` əvəzinə mövcud bloku adlandırır, onun obyektlərinin sərbəst surətlərini tapmaq üçün.
- `Surət belə ola bilər: güzgülənmiş = Xeyr, miqyaslanmış = Xeyr; qat, rəng, xətt tipi və xətt qalınlığı = Uyğun … [Güzgülənmiş/Miqyaslanmış/Xassələr]`: `M`, `S` və `P` surət sayılanı dəyişir; {{key:Enter}} axtarır. Parametrlər yadda qalır.
- `Yeni blokun adı <Block1>`, sonra `Blokun baza nöqtəsini göstərin` ({{key:Enter}} seçimin aşağı-sol küncünü götürür).
- Neçə obyekt dəstinin eyni həndəsəyə malik olduğunu bildirir, əvəz edəcəyi hər şeyi vurğulayır və `Bəli/Xeyr` soruşur.

Surət eyni obyektlərin hər bucaqla köçürülüb fırlanmış halıdır (və aktiv olduqda, bir əmsalla güzgülənmiş və ya miqyaslanmış): hər obyektin qarşılığı olmalıdır, seçimin ölçüsünün milyonda birinə qədər dəqiq. Hər istinad öz fırlanmasını və miqyasını alır (güzgülənmiş olan mənfi Y miqyası), və obyektlərinin paylaşdığı qat. Kilidli qatlardakı obyektlərə toxunulmur və sayılır. Açıq məkanı (model və ya açıq vərəq) axtarır. Çox böyük axtarış iş limitində dayanır və bunu bildirir. Bir geri qaytarma addımı.

### BSEARCH

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları tap}}. `Blokları … görə tapın [Ad/Atribut/Həndəsə] <Ad>`:

- `N`: blok adının bir hissəsi, və ya `*` və `?` ilə şablon. Burada və bütün çertyojda istinadları ilə hər bloku siyahılayır.
- `A`: atribut dəyəri, və ya `TAG=dəyər`. İstinadlarının onu saxladığı blokları siyahılayır, tapılan dəyərlərlə. Sabit atributlar sayılır.
- `G`: obyektləri və ya bir blok istinadını seçin, və forması ən azı 85% oxşar olan bloklar ən yaxşıdan başlayaraq siyahılanır. Ölçü, fırlanma və güzgüləmə nəzərə alınmır. Ölçü konturlar boyunca səpələnmiş nöqtələr arasındakı məsafələri müqayisə edir, buna görə oxşarları tapır; dəqiq surətləri tapmaq üçün {{cmd:BCONVERT}} istifadə edin.

Açıq məkanda tapılan istinadlar növbəti əmr üçün seçilir.

### BREPLACE

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları əvəz et}}. `Əvəz et [Seçilmiş/Hamısı]`: `S` seçdiyiniz blok istinadlarını adlandırdığınız blokla əvəz edir; `A` bir blok və onun əvəzini soruşur və hər istinadı {{cmd:BLOCKREPLACE}}-in etdiyi kimi dəyişir (eyni kod). İstinad öz yerini, miqyasını, fırlanmasını, qatını və hər iki blokda olan atributların dəyərlərini saxlayır; yeni blokda yeri olmayan dəyərlər silinir və adlandırılır. `?` blokları siyahılayır. Bir geri qaytarma addımı.

### DATAEXTRACTION

Ləqəblər: `EATTEXT`, `DX`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Məlumatların çıxarılması}}. Blokları, onların atributlarını və obyekt xassələrini cədvəl və ya CSV faylı kimi siyahılayır.

- Seçimlə işləyir, və ya `Obyektləri seçin (Enter: bu məkanda hər şey)` soruşur.
- Seçimdə hər ikisi olduqda `Siyahı: [Bloklar/Obyektlər/Hamısı]`. Adsız bloklar, cədvəllər və materiallar siyahısı heç vaxt siyahılanmır.
- Seçə biləcəyiniz sütunları çap edir (ad, növ, qat, X, Y, fırlanma, miqyas, uzunluq, sahə, rəng, xətt tipi, məkan və hər atribut etiketi üçün biri), sonra `Sütunlar, ad və ya nömrə ilə, vergüllə ayrılmış`. {{key:Enter}} ulduzlu olanları götürür: bloklar üçün ad və hər atribut; obyektlər üçün növ, qat və uzunluq.
- `Eyni sətirləri say ilə birlikdə yerləşdirin? [Bəli/Xeyr] <Bəli>`, sonra `Siyahını harada yerləşdirin: [Cədvəl/Csv] <Cədvəl>`. Cədvəl adi cədvəldir ({{cmd:TABLEDIT}} onu redaktə edir) və canlı deyil: çertyoj dəyişdikdə əmri yenidən işə salın.
- Siyahıda olmayan sütunu rədd edir. Cədvəl 1999 məlumat sətiri saxlayır; CSV faylı hamısını qəbul edir.

### COUNTTABLE

Seçimin (və ya açıq məkanın) blok istinadlarını sayır və saylari cədvələ (`Block`, `Count`) və ya CSV faylına yerləşdirir. Çertyojun özü ilə izlənən say üçün {{cmd:BOMTABLE}}-ə baxın.

## Vərəqlər və çap

### LAYOUT

Ləqəblər: `LO`, `NEWLAYOUT`; və ya çertyojun altındakı {{ui:+}} düyməsi. ISO A3 üzərində (və ya düym və ya fut vahidli çertyojlar üçün Tabloid) sərhədi, başlıq ştampı və bir görünüş pəncərəsi olan yeni vərəq. Heç bir sual yoxdur.

### MVIEW

Ləqəblər: `MV`. Yalnız vərəqdə ({{cmd:VPORTS}} vərəqdə eyni işi görür).

- `Görünüş pəncərəsinin küncünü göstərin [Çoxbucaqlı/Obyekt]`, `Əks künc göstərin`. Görünüş pəncərəsi bütün modeli standart miqyasda göstərir.
- `P` (Çoxbucaqlı): konturun künclərinə klik edin (`Geri qaytar (U)`, `Bağla (C)`), hazır olduqda {{key:Enter}}. Üç künc az olduqda rədd edir.
- `O` (Obyekt): `Görünüş pəncərəsinin konturu üçün bağlı obyekti seçin`: vərəqdə bağlı polixətt, çevrə və ya ellips. Görünüş pəncərəsi onun formasını alır (əyrilər qısa düz parçalar kimi); obyekt olduğu kimi qalır. Bağlı olmayan obyekti rədd edir.

### VPCLIP

Vərəqdə artıq olan görünüş pəncərəsini kəsir. `Kəsiləcək görünüş pəncərəsini seçin` (və ya əvvəlcə seçin), sonra `Kəsiləcək obyekti seçin [Çoxbucaqlı/Sil]`:

- Bağlı polixətt, çevrə və ya ellipsə klik edin, və ya çoxbucaqlının künclərinə klik etmək üçün {{key:Enter}} (və ya `P`).
- `D` (Sil, kəsilmiş görünüş pəncərəsi olduqda təklif olunur) onu yenidən düzbucaqlı edir: əvvəl olduğu konturun ətrafındakı qutu.
- Görünüş pəncərəsinin göstərdiyi kağızda yerini dəyişmir, miqyası qalır. Model yalnız kontur daxilində çəkilir və çap olunur, və sərhəd onu izləyir. Bir geri qaytarma addımı.
- Kəsilmiş görünüş pəncərəsinin konturunun hər küncündə, mərkəzində və qutunun dörd küncündə tutacağı var (qutunun küncünü sürükləmək konturu da uzadır). Xassələrdə Kontur: Düzbucaqlı, və ya sayı ilə Kəsilmiş göstərilir.
- DWG və DXF 2000 faylları konturu CadCraft üçün saxlayır. Digər proqramlar görünüş pəncərəsini ətrafındakı düzbucaqlı kimi açır; DXF R12 yalnız düzbucaqlını saxlayır.
- Model sekmesində görünüş pəncərələrinin vərəqlərdə olduğunu bildirir.

### VPORTS

Ləqəblər: `VIEWPORTS`. {{cmd:SPLIT}} vərəqdən də eynidir, və {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Yan-yana bölün}}, {{ui:Üst-alt bölün}}, {{ui:Dörd pəncərə}}, {{ui:Bir pəncərə}} onu işə salır. Modeldə: `Pəncərələrin sayını daxil edin [Tək (SI)/2/3/4] <3>`; `2` `[Üfüqi/Şaquli] <Şaquli>` soruşur (Şaquli = yan-yana), `3` `[Sol/Sağ] <Sağ>` soruşur (böyük pəncərənin harada olacağı). Hər pəncərə öz görünüşünü və məkanını saxlayır; klik pəncərəni aktiv edir. Vərəqdə bu {{cmd:MVIEW}}-dur. Bax: [Ekranı bölün](topic:split-screen).

### VPVIEW

Ləqəblər yoxdur. Yalnız vərəqdə.

- `Görünüş pəncərəsini seçin` (seçilibsə ötürülür), sonra modeldə: `Göstəriləcək pəncərənin birinci küncünü göstərin`, `Əks künc göstərin`.

### UCS

Ləqəblər yoxdur. Öz koordinat sisteminiz; redaktə deyil. `UCS başlanğıcını göstərin [Adlı/Obyekt/Əvvəlki/Dünya/Z/3nöqtə] <Dünya>`: nöqtə yeni başlanğıcdır, sonra `X oxu üzərində nöqtəni göstərin (Enter bucağı saxlayır)`. `Z`: `Z oxu ətrafında fırlanma bucağını göstərin <90>`. `3`: başlanğıc, müsbət X oxu üzərində nöqtə, və müsbət-Y tərəfində nöqtə. `OB`: `UCS-i düzləşdirmək üçün obyekti seçin`. `NA`: `[Bərpa et/Saxla/Sil/?]` və ad. Görünüş yeni X oxunu səviyyəli edəcək şəkildə dönür. Bax: [Görünüşü fırladın və öz koordinatlarınızdan istifadə edin](topic:ucs-and-turned-view).

### PLAN

Ləqəblər yoxdur. `Seçimi daxil edin [Cari ucs/Ucs/Dünya] <Cari ucs>`: aktiv pəncərənin görünüşünü elə fırladır ki, UCS-in X oxu (və ya dünyanın) səviyyəli olsun. Çertyojda heç nə hərəkət etmir.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ləqəblər yoxdur; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Görünüşü 90° sola fırladın}}, {{ui:Görünüşü 90° sağa fırladın}}, {{ui:Dünyaya qayıt}}. `UCS Z -90`, `UCS Z 90` və `UCS W` ilə eynidir, görünüş izləyir.

### VPLAYER

Ləqəblər yoxdur. Vərəqdə, və ya görünüş pəncərəsinin içində. `Seçimi daxil edin [?/Dondur/Ərit/Sıfırla/Vpvisdflt]`: `F`, `T`, `R` qat adları soruşur (vergül, `*` və `?` joker işarələri), sonra `[Hamısı/Seçilmiş/Cari] <Cari>` görünüş pəncərələri; Sıfırla hər qatı `yeni görünüş pəncərələrində dondurulmuş` standarta qaytarır; `V` həmin standartı təyin edir (`[Dondurulmuş/Açılmış]`), bunu {{cmd:MVIEW}} istifadə edir. `?` cari görünüş pəncərəsində dondurulmuş qatları siyahılayır. Qatlar panelinin görünüş pəncərəsi sütunu bir pəncərə üçün eyni işi görür. Bax: [Qatı bir görünüş pəncərəsində dondurun](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Ləqəblər: `MS`; və ya görünüş pəncərəsinin içinə iki dəfə klik. Yalnız vərəqdə. Görünüş pəncərəsi vasitəsilə modeldə işləyin: seçilmiş, vərəqdə yeganə olan və ya `Üzərində işləmək üçün görünüş pəncərəsinin içinə klik edin`. İçində sürüşdürmə və yaxınlaşdırma görünüş pəncərəsinin görünüşünü dəyişir (displeyi kilidli olan onu saxlayır və vərəq hərəkət edir); yeni görünüş bir geri qaytarma addımı kimi yazılır. Bax: [Modeli görünüş pəncərəsi vasitəsilə işləyin](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Ləqəblər: `PS`; və ya görünüş pəncərəsinin xaricinə iki dəfə klik, və ya çertyojun altındakı sekmə. Vərəqə qayıdır.

### PLOT

Ləqəblər: `PRINT`, `PUBLISH`, `EXPORTPDF`; və ya {{key:Mod+P}}. {{ui:PDF-ə çap et}} dialoqunu açır. Bax: [PDF-ə çap et](topic:plot-pdf).

### PLOTSTYLES

Ləqəblər: `STYLESMANAGER`, `PSTABLES`; və ya {{ui:PDF-ə çap et}} dialoqunda {{ui:Cədvəlləri redaktə et…}}. {{ui:Çap üslubu cədvəlləri}} açır: hər rəngin necə çap olunacağı (rəng, boz, mürəkkəb, xətt qalınlığı), çertyojla birlikdə saxlanılır. Bax: [Çap üslubu cədvəlləri](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} obyektləri vərəq və model arasında görünüş pəncərəsi vasitəsilə köçürür; digər tərəfdən eyni görünsün deyə miqyaslanır və fırlanır. Vərəqdə obyektləri seçin və onlar modelə gedir (vərəqdə bir neçə pəncərə varsa, birini seçin). Modeldə görünüş pəncərəsi vasitəsilə işləyərkən ({{cmd:MSPACE}}), seçilmiş obyektlər vərəqə gəlir. Neçə dəfə böyük və ya kiçik olduqlarını bildirir. Görünüş pəncərələri öz vərəqində qalır. Bir geri qaytarma addımı.

### ISODRAFT

{{cmd:ISODRAFT}} izometrik çəkməni `ON` və ya `OFF` edir, və ya birbaşa `Sol`, `Üst` və ya `Sağ` müstəviyə keçir. Açıq olduqda: Ortho ({{key:F8}}) xətləri müstəvinin iki oxu boyunca saxlayır (sol: 90° və 150°; üst: 30° və 150°; sağ: 30° və 90°), polyar izləmə ({{key:F10}}) eyni oxları izləyir, şəbəkəyə tutma ({{key:F9}}) izometrik şəbəkəni istifadə edir, və şəbəkə ({{key:F7}}) 30°, 90° və 150°-də xətlərlə çəkilir. {{cmd:ELLIPSE}} `Isocircle` əlavə edir: mərkəz və radius (və ya `Diametr`) verin, və cari müstəvidə çevrənin göründüyü ellipsi çəkir. Çertyoj düz qalır: bunlar pictorial görünüş çəkmək üçün köməklərdir, 3D model deyil. Ayar bu sessiya üçündür və faylda saxlanılmır.

### ISOPLANE

{{cmd:ISOPLANE}} izometrik çəkmənin işlədiyi müstəvini seçir: `Sol`, `Üst` və ya `Sağ`. Enter növbəti müstəviyə keçir. İzometrik çəkmə açıq olduqda {{key:F5}} əmrin ortasında eyni işi görür; söndürülmüş olduqda {{key:F5}} brauzerə qalır.

## Yoxlama

### CAL

Hesablamanın dəyərini çap edir, uzunluq yazıla bilən hər yerdə oxunduğu kimi.

- `İfadə`: yazın, məsələn `12'6"+3/4"` və ya `(24'-0")/3`, və {{key:Enter}} basın. CadCraft `= 12'-6 3/4"   (150.75 çertyoj vahidi)` çap edir. Bax: [Yazılmış dəyərdə hesablama](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Ləqəblər: `DI`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Məsafəni ölç}}.

- `Birinci nöqtəni göstərin`, `İkinci nöqtəni göstərin`. Məsafəni, bucağı, Delta X və Delta Y çap edir.

### AREA

Ləqəblər: `AA`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Sahə}}. Sahəni və perimetri çap edir.

- `Birinci künc nöqtəsini göstərin [Obyekt/Sahə əlavə et/Sahəni çıxar] <Obyekt>`
  - Künclərə klik edin və ya yazın; `Növbəti nöqtəni göstərin (Enter bağlayır) [Geri qaytar (U)]` soruşduqda konturu bağlamaq üçün {{key:Enter}} basın. `U` son künci geri qaytarır.
  - {{key:Enter}} və ya `O`, sonra `Obyekti seçin`: çevrə (çevrə uzunluğunu çap edir), ellips, polixətt (açıq olan sahə üçün düz xətlə bağlanır və uzunluğu çap olunur) və ya ştrixləmə (deşiklər çıxılır).
  - `A` (Sahə əlavə et) və `S` (Sahəni çıxar) işləyən cəmi saxlayır: sorğu `(ƏLAVƏ rejimi)` və ya `(ÇIXARMA rejimi)` ilə başlayır, hər sahə əlavə olunur və ya çıxılır, və hər birindən sonra `Ümumi sahə = …` çap olunur. Bu rejimlərdə `O` Enter-ə qədər obyekt seçir, və birinci sorğuda Enter əmri bitirir.

### MEASUREGEOM

Ləqəblər: `MEA`. `Seçimi daxil edin [Məsafə (D)/Radius (R)/Bucaq (A)/Sahə (AR)] <Məsafə>`; hər ölçmədən sonra yenidən soruşur, `eXit` standartdır.

`Sürətli` göstəricinin ətrafında onu hərəkət etdirdikcə ölçür: cari UCS oxları üzrə sağ, yuxarı, sol və aşağıda ən yaxın obyektə məsafə, getdikcə çəkilir və iki qonşu düz olub görüşdükdə bucaq. Klik dörd məsafəni, aydın eni və hündürlüyü və bucaqları tarixçəyə yazır; Enter seçimlərə qayıdır. Ekranda olanı oxuyur.

- `D`: iki nöqtə, {{cmd:DIST}} kimi.
- `R`: `Qövs və ya çevrə seçin`; radiusu və diametri çap edir.
- `A`: qövs (onun daxili bucağı), xətt və sonra ikinci xətt (onlar arasındakı bucaq, uzaq uclarına doğru), və ya {{key:Enter}} və üç nöqtə (təpə, sonra iki uc).
- `AR`: {{cmd:AREA}} kimi, bir sahə.

### ID

Ləqəblər yoxdur. `Nöqtəni göstərin`; X və Y-ni çap edir.

### LIST

Ləqəblər: `LI`, `LS`. `Obyektləri seçin`; hər obyektin növünü, qatını və əsas ölçülərini çap edir.

### MASSPROP

{{cmd:MASSPROP}} seçdiyiniz regionların və bağlı obyektlərin kəsik xassələrini birlikdə verir: sahə, perimetr, sərhəd qutusu, mərkəz, baxılan nöqtədən keçən X və Y oxları ətrafında ətalət momentləri, ətalət hasili, ətalət radiusları, eyni momentlər mərkəz ətrafında və əsas momentlər və onların oxlarının istiqamətləri. Regionda deşiklər deşik kimi sayılır. Rəqəmlər çertyoj vahidlərindədir və xətt və qövslərdən ibarət konturlar üçün dəqiqdir; ellips və spline-lar qısa düz parçalar kimi ölçülür, və bunu bildirir. Hesabatdan sonra onu mətn faylına yazmağı soruşur. Bağlı olmayan obyektlər kənarda qalır, və bunların sayını bildirir.

## Görünüş, fayl və digər

### ZOOM

Ləqəblər: `Z`.

- `Pəncərənin küncünü göstərin, miqyas əmsalını daxil edin (nX) [Ekstent/Hamısı/Pəncərə/Əvvəlki/Miqyas/Mərkəz]`. Pəncərə üçün iki künc seçin. `E`, `A` və ya Enter: bütün çertyoj.
- `P` (Əvvəlki, və ya alətlər panelində {{ui:Əvvəlki}}) əvvəlki görünüşə qayıdır, hər sekmədə 10-a qədər görünüş; təkər addımlarının sırası və ya bir sürüşdürmə bir görünüş sayılır.
- `2`, `2x` və ya `0.5x` kimi ədəd (və ya `S` və sonra ədəd) ekranın ortası ətrafında həmin əmsalla yaxınlaşdırır və ya uzaqlaşdırır.
- `C`: `Mərkəz nöqtəsini göstərin` və `Hündürlüyü və ya böyütməni daxil edin (nX)` soruşur.

### PDFATTACH, PDFIMPORT və PDF əmrləri

Ləqəblər: `PDFATT` {{cmd:PDFATTACH}} üçün, `PDFIM` {{cmd:PDFIMPORT}} üçün. {{cmd:PDFATTACH}} PDF səhifəsini çertyojun altına qoyur (fayl, səhifə, daxil etmə nöqtəsi, miqyas, fırlanma); {{cmd:PDFIMPORT}} səhifənin xətlərini, əyrilərini, doldurmalarını və mətnini PDF adına görə adlandırılmış qatlarda çertyoj obyektlərinə çevirir, real ölçüdə, yazılmış miqyasda, və ya iki nöqtə və real məsafədən miqyaslanmış. {{cmd:PDFCLIP}} alt-qatı kəsir, {{cmd:PDFADJUST}} solğunluq, kontrast, monoxrom təyin edir və ya onu söndürür, {{cmd:PDFLAYERS}} PDF-in öz qatlarını dəyişdirir, və {{cmd:PDF}} CadCraft-a çertyojun alt-qatlarının istifadə etdiyi faylları yenidən verir. Bax: [PDF alt-qatları](topic:pdf-underlay).

### AUTOCOMPLETE

Ləqəblər: `AUTOC`. Çertyojun avtomatik tamamlanması: heç bir əmr işləmədikdə, boz kölgə çertyojun öz nümunələrinin növbətinin nə olacağını bildirdiyini göstərir. {{cmd:AUTOCOMPLETE}} onu `On` və ya `Off` edir (və ya Parametrlər › CadCraft), və ya indi nə təklif edəcəyini `Show` göstərir. **Tab** kölgəni bir geri qaytarma addımı kimi çəkir, **Esc** çertyoj dəyişənə qədər onu rədd edir. Ən yeni obyektlərdə üç şey tapır: iki və ya daha çox dəfə çəkilmiş bir şeyin bərabər addımla növbəti surəti (dirək, sütun, pilləkənin pillə və addımı), polixətt pilləkənin növbəti addımları, və otağın və ya divar zəncirinin çatışmayan tərəfi. {{cmd:LINE}} və ya {{cmd:PLINE}} ortasında kölgə **növbəti nöqtədir**: pilləkənin növbəti addımı (pillə, addım, pillə…), düzbucaqlının dördüncü küncü, onu bağlayan nöqtə və ya daha bir bərabər addım. Kursoru ona yaxınlaşdırın və **Tab** basın, sanki orada klik etmisiniz; davam edin və ya Enter basın. Qaydalarla bu kompüterdə, modelsiz hesablanır.

### AUTOSHEET

Ləqəblər: `ASH`. Özü tərtib olunan vərəqlər. {{cmd:AUTOSHEET}} çertyojun hissələrini (adlandırılmış görünüşləriniz, modelin ayrı hissələri, və ya bütün model) götürür, kağız ölçüsünü seçir (və ya verdiyinizi), hər hissəyə standart miqyas verir (hamısına bir miqyas, və ya hər birinin ala biləcəyi ən böyük) və görünüşləri yeni vərəqlərdə sətirlərlə, hər birinin altında başlıq ştampı və tutum (ad və miqyas) ilə yerləşdirir. Bir vərəqə sığmayan hissə öz vərəqini alır. Bir geri qaytarma addımı. Qaydalarla bu kompüterdə, modelsiz hesablanır.

### PHOTOSKETCH

Ləqəblər: `PSK`. Fotodan çertyojа eskiz. Kağızda əl eskizinin fotosunu (JPEG, PNG və ya TIFF) seçin. {{cmd:PHOTOSKETCH}} vərəqin dörd küncünü tapır, perspektivi düzləşdirir, adını verdiyiniz kağız ölçüsünü (`Paper`, və ya ən yaxın standart) və eskizin `Scale`-ini (1 : n) götürür, sonra qələm xətlərini xətlərə, qövslərə və çevrələrə izləyir, hər qələm rəngi (qara, qırmızı, mavi, yaşıl) üçün bir qat. Kağızın kənarını tapa bilmirsə, bütün fotonu vərəq kimi götürür və bunu bildirir. Yazılar çıxarılır. Bir geri qaytarma addımı. Bu kompüterdə klassik şəkil emalı ilə, modelsiz, heç yerə göndərilmədən edilir. Həmçinin skan edilmiş çertyoj əmrlərinə baxın.

### AUTODIM

Ləqəblər: `ADIM`. Qaydalarla avtomatik ölçü. {{cmd:AUTODIM}} seçilmiş obyektləri (və ya bütün çertyoju) onların səviyyə və şaquli kənarlarından ölçür: seçdiyiniz tərəflər boyunca ölçülər zənciri (`Sides`), onun xaricində bir ümumi ölçü, hər açılışın eni (xətti divar xətləri arasında boşluq), hər deşik ölçüsü üçün diametr, və `Grid` ilə şəbəkə xətləri arasında məsafə. Artıq olan ölçü yenidən yaradılmır. Bir geri qaytarma addımı. Qaydalarla bu kompüterdə, modelsiz hesablanır.

### GRIDMOVE

Ləqəblər: `GM`. Şəbəkə xəttini köçürmək dəsti də aparır. {{cmd:GRIDMOVE}} şəbəkə xəttini (adında şəbəkə və ya ox olan qatda xətt) və ona asılı olanları köçürür: xəttə ucu olan divarlar onu izləmək üçün uzanır, xətt boyunca olan divarlar tamamilə köçür, sütunlar (xətt üzərindəki blok istinadları və çevrələr), onun dairəsi və etiketi köçür, nöqtələri xətt üzərində olan ölçülər yeni aralığı ölçür. İki nöqtə verin (yalnız xəttin kəsdiyi hissə sayılır) və ya `Distance`. Bir geri qaytarma addımı hamısını geri qaytarır. Bu kompüterdə qaydalarla edilir.

### DETAILS

Ləqəblər: `DET`. Sizi tapan detallar. {{cmd:DETAILS}} firmanızın öz detallarını saxlayır: `Add` bu çertyojun blokunu siyahıya qoyur, `List` və `Remove` onu idarə edir, `Find` seçilmiş (və ya son çəkdiyiniz) şey üçün onları qatlarındakı sözlər, blok adları, ştrixləmə naxışları və qeydlərlə, hər detalın adı və qeydlərinə qarşı sıralayır, belə ki, pəncərə başlığı sizin sill örtüyünü tapır. Yerləşdirmək üçün nömrə və nöqtə seçin. `Hint` açıq olduqda (həmçinin Parametrlər › CadCraft), detalla uyğun gələn bir şeyi seçmək status panelində bir sətir çıxarır. Siyahı bu brauzerdə, bu kompüterdə saxlanılır, və axtarılan məhz bu siyahıdır. `Share` onu Sənədlər qovluğunuza da qoyur (`.cadcraft/firm-details.json`, hər blokun çertyoju ilə): `Pull` komandanızda olub sizdə olmayanı əlavə edir, `Push` sizdə olub onlarda olmayanı əlavə edir, `Both` hər ikisini edir, və heç bir tərəfdən heç nə silinmir. Əvvəlcə Sənədlər qovluğunu açın ({{cmd:DOCUMENTS}}); həmin qovluq Komanda Bulud Planı qovluğu olduqda, bütün komanda bir siyahını paylaşır. Kitabxana panelində detal elementində **Firmamın detallarına əlavə et** düyməsi var, o da onu eyni siyahıya qoyur. Bu kompüterdə, sözlərlə hesablanır, modelsiz.

### SKETCHFIX

Ləqəblər: `SKF`. Qələm eskizləri dəqiq həndəsəyə çevrilir. Bir sərbəst vuruşu bir dəfəyə basıb sürükləyin (qələm, siçan və ya barmaq), sonra Enter. Hər vuruş xətt, çevrə, qövs, düzbucaqlı və ya polixətt kimi oxunur: demək olar səviyyə və şaquli xətlər dəqiq səviyyə və şaquli edilir, bağlı yumru vuruş çevrəyə, düz bucaqlı dörd künclü bağlı vuruş düzbucaqlıya çevrilir, və vuruşların uclarını bir-birinə və çertyojda artıq olan uclara çəkilir. Bir geri qaytarma addımı. Qaydalarla bu kompüterdə, modelsiz hesablanır.

### SCANATTACH və skan edilmiş çertyoj əmrləri

Ləqəblər: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} ləqəbi yoxdur. Hər biri şəkil üzərində işləyir, hər biri bir geri qaytarma addımı. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (bir və ya bütün səhifələr) və ya şəkil olan PDF səhifəsi daxil edir. {{cmd:SCANSCALE}} vərəqi seçilmiş iki nöqtədən və real məsafədən miqyaslayır. {{cmd:SCANALIGN}} onu iki nöqtəyə köçürür və fırladır (`Vərəqi sığdırmaq üçün miqyaslayın` Bəli/Xeyr). {{cmd:SCANDESKEW}} vərəqin uzun xətlərinin bucağını göstərir və `Accept` və ya `Value` verdikdən sonra vərəqi fırladır. {{cmd:SCANCLEAN}} onu ağ-qara edir (`Threshold` Auto/Adaptive/Level, `Specks`) və `Run`. {{cmd:SCANCROP}} pəncərəni saxlayır. {{cmd:SCANERASE}} `Rectangle`, `Polygon` və ya `Lasso` silir. {{cmd:SCANTRACE}} xətləri və qövsləri yeni qata izləyir (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) və nə tapdığını və rastr olaraq nə saxladığını bildirir. {{cmd:SCANINFO}} orijinal faylı və addımları siyahılayır. {{cmd:RASTERSNAP}} skan edilmiş vərəqlərin xətlərinə tutmanı Açıq və ya Bağlı edir. Bax: skan edilmiş çertyojlar və izləmə mövzusu.

### REGEN və REGENALL

Ləqəblər: `RE` {{cmd:REGEN}} üçün, `REA` {{cmd:REGENALL}} üçün. Ekranda çertyojdan çəkilənləri yenidən qurur: {{cmd:REGEN}} baxdığınız sekməni (vərəqdə, onun görünüş pəncərələrinin göstərdiyi modeli də), {{cmd:REGENALL}} hər sekməni, hər bölünmüş ekran pəncərəsini və hər açıq çertyoju. Skript və ya çox böyük dəyişiklikdən sonra şəkil köhnəlmiş görünəndə, və ya bir köməkçi çertyoju redaktə edəndə istifadə edin; çertyojun özünə toxunulmur, buna görə geri qaytarılacaq heç nə yoxdur.

### NAMEDVIEW

Ləqəblər: `NV`, `VIEWS`. `Seçimi daxil edin [?/Bərpa et/Saxla/Pəncərə/Sil] <Bərpa et>`, sonra görünüşün adı. `S` ekrandakı görünüşü saxlayır, `W` seçdiyiniz pəncərəni, `R` saxlanılmış görünüşü göstərir, `D` birini silir, `?` bu sekmənin görünüşlərini siyahılayır. Mövcud adın altında saxlamaq onu əvəz edir; hər dəyişiklik bir geri qaytarma addımıdır. Görünüşlər saxlandığı sekmə ilə aiddir. DWG və DXF faylları onları saxlayır (VIEW cədvəli); vərəqin görünüşləri birinci vərəqə qayıdır, çünki fayl hansının olduğunu demir.

### UNDO və REDO

Ləqəblər: `U` {{cmd:UNDO}} üçün; {{cmd:REDO}}-nun ləqəbi yoxdur. Həmçinin {{key:Mod+Z}} və {{key:Mod+Y}}.

### LAYER

Ləqəblər: `LA`. {{ui:Qatlar}} panelinə keçir.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Yeni obyektlər üçün xətt tipini daxil edin` — `ByLayer` (qata görə), `ByBlock` (bloka görə) və ya ad (`?` onları siyahılayır: Continuous, çertyojun öz tipləri, və DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE onların `2` (yarı) və `X2` (iki qat) ölçüləri ilə). {{cmd:LWEIGHT}} (`LW`): yeni obyektlərin xətt qalınlığı mm ilə, və ya `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): çertyojun xətt tipi miqyası (geri qaytarılır). {{cmd:LWDISPLAY}} (`LWT`): `Xətt qalınlıqlarını göstərin [ON/OFF]` — status panelindəki {{ui:LWT}} düyməsi ilə eynidir. Bax: [Xətt qalınlığı və xətt tipləri](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Adı dəyişiləcək obyekt növünü daxil edin [LAyer/Block]`, `Köhnə adı daxil edin`, sonra yeni ad; obyektlər və ya istinadlar izləyir. {{cmd:LAYMRG}}: `Birləşdiriləcək qatdakı obyekti seçin və ya [Ad]` Enter-ə qədər, sonra `Hədəf qatdakı obyekti seçin və ya [Ad]` və `Y`. {{cmd:LAYDEL}}: `Silinəcək qatdakı obyekti seçin və ya [Ad]`, sonra `Y`: qat və onun üzərindəki hər obyekt gedir (0 qatı, DEFPOINTS və ya cari qat deyil). Hər əmr bir geri qaytarma addımıdır. Bax: [Qatlarla çertyoju təşkil edin](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Qatlar obyektləri seçməklə; həmçinin {{ui:Qatlar}} panelinin {{ui:Alətlər}} menyusunda. {{cmd:LAYISO}}: `Təcrid ediləcək qat(lar)dakı obyektləri seçin`, sonra {{key:Enter}}: qalan bütün qatlar söndürülür. {{cmd:LAYUNISO}} onları yenidən yandırır. {{cmd:LAYOFF}} və {{cmd:LAYFRZ}}: `Söndürüləcək (və ya donduruluncaq) qatdakı obyekti seçin`, təkrar-təkrar; `U` son birini geri qaytarır, {{key:Enter}} bitirir. {{cmd:LAYMCUR}}: `Qatı cari olacaq obyekti seçin`. {{cmd:LAYON}} bütün qatları yandırır, {{cmd:LAYTHW}} bütün qatları əridir. Hər əmr bir geri qaytarma addımıdır. Bax: [Qatlarla çertyoju təşkil edin](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} boş çertyoj başladır, {{cmd:OPEN}} DWG və ya DXF açır, hər biri çertyojun üzərində öz sekmesində (dəyişdirilməmiş yeni çertyoj yeni sekmə əvəzinə istifadə olunur). Dəyişikliyi saxlanılmamış sekməni bağladıqda əvvəlcə soruşur. Bax: [Ekranı bölün](topic:split-screen).

{{cmd:SAVE}} (ləqəb `QSAVE`, həmçinin {{key:Mod+S}}) çertyojun formatında surət yükləyir: DWG-dən açılıbsa DWG, DXF-dən açılıbsa DXF. Yeni çertyoj bu brauzerdə Saxla kimi seçilmiş son formatı istifadə edir, yoxsa DWG.

{{cmd:SAVEAS}} (həmçinin {{key:Mod+Shift+S}}) {{ui:Surətini belə saxla}} dialoqunu açır: {{ui:DWG}} seçin (və onun {{ui:Versiya}}sını), {{ui:DXF R12}} və ya {{ui:DXF 2000}}, sonra {{ui:Saxla}}. Seçim bu çertyoj və bu brauzerdə yeni çertyojlar üçün qalır.

{{cmd:DXFOUT}} həmişə DXF R12 surəti yükləyir, {{cmd:SAVE}}-in istifadə etdiyi formatı dəyişmədən.

Bax: [Fayllar: nə açılır, nə saxlanılır](topic:files#saving).

### TOUR

Ləqəblər: `TUTORIAL`. Altı addımlı ilk çertyoj turunu yenidən başladır. Bax: [Başlanğıc](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Ləqəblər: `TBDOCK`. `Alətlər paneli mövqeyi [Yuxarı/Aşağı/Sol/Sağ]`. Bax: [Parametrlər](topic:settings#toolbar-position).

### COMMANDLINE

Ləqəblər: `CMDLINE`. `Əmr sətri [Aşağıda yerləşdirilmiş/Üzən/Bir sətir/Göstərilən tarixçə sətirləri/Əmr tarixçəsi (F2)]`: əmr sətrini yerləşdirir və ya üzdürür, bir sətirə çevirir, göstəriləcək tarixçə sətirlərinin sayını (0-dan 12-yə) soruşur, və ya tarixçəni açır. Bax: [Parametrlər](topic:settings#command-line).

### TOPAREA

`Yuxarı sahə [Standart/Yığcam]`: çertyojun üstündəki panellər əvvəlki kimi və ya yığcam. Bax: [Parametrlər](topic:settings#top-area).

### POLARANG

`Polyar bucaq addımını dərəcə ilə daxil edin <90>`: {{ui:Polyar}} izləmə xətlərinin düzləşdiyi addım (0-dan çox, 180-ə qədər). Bu brauzerdə yadda saxlanılır.

### UNITS

Ləqəblər: `UN`. Uzunluqların necə yazıldığı və daxil edildiyi.

- `Uzunluq formatını daxil edin [Elmi/Onluq/Mühəndis/Memarlıq/Kəsr] <cari>`
- Memarlıq və Kəsr: `Göstəriləcək ən kiçik kəsrin məxrəcini daxil edin (1, 2, 4, 8, 16, 32, 64, 128 və ya 256)`. Digərləri: `Onluq rəqəmlərin sayını daxil edin (0-dan 8-ə)`.

Yeni ölçülər buna tabe olur. Bir geri qaytarma addımı. {{ui:Cari parametrlər}}-dəki {{ui:Uzunluq formatı}} və {{ui:Dəqiqlik}} ilə eynidir; bax: [Fut və düym](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Ləqəblər: `GDS`. IC layihəsinə baxın (GDSII axın faylı): laboratoriya sınağı, yalnız baxmaq və ölçmək üçün.

- Fayl seçicisi `.gds` faylı qəbul edir; bir neçə üst hüceyrə olduqda `Çəkiləcək üst hüceyrəni daxil edin`.
- Hər qat və məlumat növü çertyoj qatına çevrilir (`GDS 1`, `GDS 2/5`), istinadlar və massivlər düz, faylın istifadəçi vahidində (adətən mikrometr) yerləşdirilir. Bir geri qaytarma addımı. Heç nə simulyasiya olunmur və yoxlanılmır, və fayl geri yazılmır.

### DIAGRAM

Ləqəblər: `TEXTDIAGRAM`, `T2D`. Mətndən diaqram.

- Qutu mətni qəbul edir (və ya əmr sətrində `;` ilə ayrılmış bir sətir): Mermaid axın diaqramı, PlantUML komponent diaqramı, D2 və ya bir-dən-birə siyahı.
- `Diaqramın sol yuxarı küncünü göstərin`, sonra `Mətn hündürlüyünü göstərin`.

Bloklar və bağlayıcılar `Diaqram` qatında adi obyektlərdir, bitəndə seçilir. Bir geri qaytarma addımı. Bax: [Mətndən diaqram çəkin](topic:text-to-diagram).

### OLELIST

Ləqəblər: `OLES`. DWG-nin daşıdığı, CadCraft-ın özü yerləşdirə bilmədiyi OLE obyektləri.

- Hər birini siyahılayır: nömrə, növ, ölçü, şəkil saxlayıb-saxlamaması.
- `Seçimi daxil edin [Yerləşdir/Çıxış] <Çıxış>`: Yerləşdir nömrəni, sol aşağı küncü və eni soruşur, və şəkillə çərçivə çəkir. Bir geri qaytarma addımı; saxlanılmış obyekt dəyişmir. Bax: [Şəkillər](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Ləqəblər: `SHX`. Sizin öz SHX şriftləriniz.

- `SHX şrift seçimini daxil edin [Qovluq/Fayllar/Siyahı/Sil/Tərs/Təmizlə] <Siyahı>`

{{ui:Qovluq}} qovluqdakı hər `.shx` faylını oxuyur (CadCraft Studio; hər başlanğıcda yenidən), {{ui:Fayllar}} seçilmiş faylları qəbul edir (brauzer), {{ui:Tərs}} bir şriftin hərflərini sondan başlayaraq düzür. Yüklənmiş şriftin adını verən mətn üslubları onda çəkilir. Bax: [Öz SHX şriftlərinizlə mətn çəkin](topic:shx-fonts).

### LIMITS

Çertyojun nə qədər böyük olması nəzərdə tutulur.

- `Sol aşağı küncü göstərin və ya [ON/OFF] <cari>`: nöqtə, `ON` və ya `OFF`.
- `Sağ yuxarı küncü göstərin <cari>`.

Şəbəkə həddləri doldurur, {{cmd:ZOOM}} Hamısı onları göstərir, və onlar ON olduqda kənar nöqtə rədd edilir (`**Outside limits`). Bir geri qaytarma addımı; DWG və DXF-də saxlanılır. Bax: [Çertyoj həddlərini təyin edin](topic:drawing-limits).

### AUNITS

Ləqəblər: `ANGUNITS`. Bucaqların necə göstərilməsi və daxil edilməsi.

- `Bucaq formatını daxil edin [Onluq dərəcə/Dərəcə-dəqiqə-saniyə/Surveyor istiqamətləri] <cari>`
- `Onluq rəqəmlərin sayını daxil edin (0-dan 8-ə)`, və ya digər ikisi üçün `Dəqiqliyi daxil edin` (0 dərəcə, 2 dəqiqə, 4 saniyə, saniyənin 5-dən 8-ə onluq rəqəmi).

Bir geri qaytarma addımı; DWG və DXF-də saxlanılır. {{ui:Cari parametrlər}}-dəki {{ui:Bucaq formatı}} ilə eynidir. Bax: [İstiqamətləri və bucaqları daxil edin və göstərin](topic:bearings-and-angles).

### APPLOAD

Ləqəblər: `AP`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Tətbiqi yüklə…}}. {{ui:Tətbiqləri yüklə}} dialoqu: `.lsp` rutinlərini və `.dcl` dialoq fayllarını yükləyin, yükünü götürün, tarixçədən yenidən yükləyin və Başlanğıc Dəsti. Rutinin `(defun c:NAME …)` əmrləri sonra hər digər əmr kimi işləyir. Bax: [Tətbiqləri yükləyin](topic:load-applications) və [LISP rutinlərini işə salın](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Ləqəbləri redaktə et…}}) öz ləqəb faylınızı açır (`ALIAS, *COMMAND` sətirləri); {{ui:Saxla}} onu tətbiq edir. {{cmd:REINIT}} onu yenidən tətbiq edir. Bax: [Əmr ləqəblərini redaktə edin](topic:command-aliases).

### LISPEDIT

Ləqəblər: `VLIDE`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:LISP redaktoru}}. LISP redaktorunu açır: çertyojun yanında açıq qalan pəncərə.

- Mətn: sətir nömrələri, kursorun yanındakı mötərizənin cütü işarələnir (heç biri yoxdursa qırmızı), {{key:Enter}} yeni sətri açıq mötərizənin altında girintiləyir, {{key:Tab}} iki boşluq yazır, {{key:Esc}} mətndən çıxır.
- {{ui:Çertyoja yüklə}} ({{key:Ctrl+Shift+Enter}}): faylla {{cmd:APPLOAD}} etdiyi kimi hər formanı oxuyur və onun `c:` əmrlərini yaradır. Fayl {{cmd:APPLOAD}}-ın siyahısında görünür.
- {{ui:Seçimi işə sal}} ({{key:Ctrl+Enter}}): seçilmiş formaları, və ya kursorun olduğu formanı qiymətləndirir.
- {{ui:Dayandır}}: işləyən rutini bitirir.
- {{ui:Konsol}}: rutinin çap etdiyi və hər xətanın sətiri; xətaya klik edin ora getmək üçün. Mətn bir dəfəyə bir üst-səviyyə forma kimi işləyir, buna görə sətir formanın, və ya onun içində xətanın adlandırdığı funksiyanı çağıran sətirdir.
- {{ui:Yeni}}, {{ui:Aç}}, {{ui:Saxla}} ({{key:Ctrl+S}}): `.lsp` faylı. Mətn bu brauzerdə də saxlanılır, buna görə pəncərəni bağlamaq itirmir.
- Mətnin yanında: rutinin təyin etdiyi funksiyalar, bu LISP-də hələ olmayan çağırdığı funksiyalar, onda təyin olunmayan və daxili olmayan çağırdığı funksiyalar, və qurulmuş və qurulmamış olanların tam siyahıları.

Mötərizəsi heç vaxt bağlanmayan, və ya sətri heç vaxt bitməyən mətn işə salınmır: sətir adlandırılır. Addım-addım debugger, breakpoint və izləmə pəncərəsi yoxdur. Bax: [LISP rutinlərini işə salın](topic:run-lisp).

### HELP

Ləqəblər: `?`. Hər əmri, onun ləqəblərini və bir sətirlik təsvirini əmr sətri tarixçəsində çap edir. Bu sənədi açmır: onun üçün {{key:F1}} basın və ya {{ui:Kömək}} klik edin.

## Obyektləri seçmə sorğusu

Hər `Obyektləri seçin` sorğusunda: obyektlərə klik edin, pəncərələri (soldan sağa) və kəsişmələri (sağdan sola) iki klik ilə çəkin, və ya lasso basın və sürükləyin ({{key:Space}} sürükləyərkən: pəncərə, kəsişmə, hasar), çıxarmaq üçün {{key:Shift}}+klik, və bitirmək üçün {{key:Enter}} basın. Həmçinin `ALL` (hər şey), `L` (son obyekt), `P` (Əvvəlki: son əmrin istifadə etdiyi), `F` (Hasar: nöqtələr xətti kəsdiyi obyektlər; `U` nöqtəni geri qaytarır), `W` (Pəncərə), `C` (Kəsişmə), `R` (Silmə rejimi: seçimlər obyektləri çıxarır; sorğu `Obyektləri silin` deyir) və `A` (Yenidən əlavə et) yaza bilərsiniz. `?` onları siyahılayır. Onlar sorğuda göstərilmir. {{key:Tab}} üst-üstə düşən obyektlər üzərində növbətini vurğulayır; seçmək üçün klik edin. Bax: [Obyektləri seçin](topic:select-objects).

### ACCESS

Ləqəblər: `AX`. Görməsiz çəkmək. {{cmd:ACCESS}} Access-i (`On`, `Off`) açır və ya bağlayır və tutma səslərini (`Sound`) və səsli əmrləri (`Voice`) dəyişir; əvvəl vəziyyəti bildirir. Access açıq olduqda, hər əmr və nəticə ekran oxuyucunuz vasitəsilə səslənir və çertyoj sahəsində klaviatura kursoru olur. "Görməsiz çəkmək" mövzusunda düymələr var.

### DESCRIBE

Ləqəblər: `DESC`. Çertyojda nə olduğunu bildirir: neçə obyekt, hansı növ, nə ölçüdə, neçə qat, nə seçilib. Yalnız oxuyur; heç nəyi dəyişmir.

### WHEREAMI

Ləqəblər: `WHERE`. Kursorun harada olduğunu çertyojun vahidlərində bildirir.

### NEARBY

Kursora yaxın nə olduğunu bildirir, ən yaxından başlayaraq, hər birinin məsafəsi və tərəfi ilə.

### SAYSEL

Seçilmiş olanı bildirir, hər obyekt üçün bir cümlə (xəttin uzunluğu, uclar və bucaq; çevrənin radiusu və mərkəzi; mətn yazıldığı kimi).

### VOICE

Səsli əmrləri açır və ya bağlayır. Bu kompüterdə tanınır; brauzer bunu edə bilmədikdə, siz Parametrlərdə brauzerin onlayn xidmətini seçmədikcə səs söndürülü qalır.

### TOUCHCROSSHAIR

Ləqəblər: `TCX`. Barmaqla çəkmək üçün ofsetli xaç, beləliklə barmaq seçdiyiniz nöqtəni örtmür. Açıq olduqda, çertyojdakı bir barmaq seçmir: barmağın üstündə və bir tərəfində olan xaçı hərəkət etdirir. Obyekt tutmaları və izləmə xaçı izləyir. Barmağı qaldırmaq heç nə seçmir və xaçı olduğu yerdə qoyur. Seçmək üçün çertyojun küncündəki {{ui:Klik}} düyməsini basın, və ya ikinci barmaqla çertyojun istənilən yerinə toxunun. Digər barmağı hərəkət etdirərkən {{ui:Klik}}-i basılı saxlayın ki, sürükləyin (seçim pəncərəsi, lasso, tutacaq). Barmaq sakit basılı saxlanıldıqda və ya {{ui:Enter}} düyməsi Enter-dir. İki barmaq əvvəlki kimi sürüşdürür və yaxınlaşdırır. Aşağı kənar və uzaq tərəf kənarına yaxın xaç barmağa yaxınlaşır, buna görə çertyojun hər hissəsinə çatmaq olur. Qələm və siçan həmişə birbaşa seçir.

{{cmd:TOUCHCROSSHAIR}} vəziyyəti bildirir və `ON`, `OFF`, `Auto` (yalnız barmaq tək göstərici olduqda aktiv; siçanlı kompüterdə söndür), `Distance` (xaçın barmaqdan nə qədər uzaqda olması, 24-dən 240 piksələ) və ya `Side` (`Left`: yuxarıya və sola, sağ əl üçün; `Right` sol əl üçün; düymələr başqa künə keçir) soruşur. Eyni seçimlər Parametrlər › CadCraft-dadır, və toxunma ekranı olan cihazda status panelində {{ui:Ofset xaç}} keçidi var. Seçimlər bu brauzerdə saxlanılır.

### WHOHAS

Çertyojun kimin tərəfindən açıq olduğunu bildirir. CadCraft Studio kompüterdə DWG və ya DXF açdıqda, onun yanına kiçik kilid faylı yazır (`Plan.dwg.cclock`: kim, nə vaxtdan, hansı versiya), çertyoj açıq olduqda hər dəqiqə yeniləyir və bağlananda onu silir. Başqasının açıq saxladığı çertyojun açılması kimin və nə vaxtdan olduğunu deyir və {{ui:Yalnız oxumaq üçün aç}} ({{ui:Saxla}} sonra yeni ad soruşur), {{ui:Yenə də aç}} (digər şəxsə növbəti yenilənmədə deyilir) və ya {{ui:Ləğv et}} təklif edir. Başqasının açıq saxladığı fayla yazarkən əvvəlcə soruşur. Beş dəqiqə yenilənməyən kilid köhnəlmiş sayılır: digər surət saxlanılmadan bağlanıb və ya kompüter yuxudadır.

{{cmd:WHOHAS}} `Current` (açıq çertyoj), `File` (birini seçin), `FOlder` (qovluq seçin: orada açıq olan hər çertyoj siyahılanır), `Path` (tam yol yazın) və ya `Name` (başqalarının gördüyü ad; hesabınızla daxil olduqda hesabınızın adı) soruşur. Studio yalnız seçdiyiniz qovluqlara çatır: heç seçilmədən açılmış qovluqdan olan çertyoj üçün bir dəfə onu açıq kimi qeyd edə bilmədiyini bildirir; `FOlder` qovluğu seçir, və kilidlər ondan sonra orada işləyir. Kilid insanlar üçün qeyddir, maneə deyil: başqa proqram faylı hələ də yaza bilər. Brauzerdə qovluqlar yoxdur, və əmr bunu bildirir.

### OVERKILL

Təkrarlanan obyektləri silir və üst-üstə düşən xətləri və qövsləri təmizləyir, ikiqat xətlərlə gələn çertyojlar üçün. `Təmizlənəcək obyektləri seçin`, {{key:Enter}}, sonra göstərilən parametrlərlə təmizləmək üçün yenə {{key:Enter}}, və ya birini əvvəl dəyişin:

- `Tolerance`: iki koordinatın eyni sayılması üçün nə qədər yaxın olmalı (başlanğıc 0.000001; 0 dəqiq eyni deməkdir).
- `Ignore`: digər cəhətdən eyni olan iki obyekt arasında fərqlənə bilən xassələr. Adını yazaraq dəyişin: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, və ya `None` / `All`. Bitəndə {{key:Enter}}.
- `Overlap`: açıq və ya bağlı. Açıq olduqda, bir düz xətt üzərində üst-üstə düşən xətlər bir xətt olur (başqa xətt içində olan xətt sadəcə silinir), və bir çevrə üzərində üst-üstə düşən qövslər bir qövs olur; tam dövrə edən qövslər çevrə olur, və çevrə üzərindəki qövs silinir.
- `Ends`: açıq və ya bağlı. Açıq olduqda, bir düz xətt üzərində xətlər və bir çevrə üzərində qövslər yalnız uc-uca toxunursa bir parça olur.

Hər növ obyekt təkrara görə yoxlanılır: iki obyekt, həndəsəsi tolerantlıq daxilində eyni olduqda və qatı, rəngi, xətt tipi, xətt tipi miqyası, xətt qalınlığı, qalınlığı, şəffaflığı və hündürlüyü uyğun olduqda təkrar sayılır (siz nəzərə almadıqlarından başqa). Xətlər və açıq polixəttlər əks istiqamətdə çəkilsə də uyğun gəlir. Çəkmə sırasında birinci obyekt qalır və öz xassələrini saxlayır. Əmr neçə obyekti yoxladığını və neçəsini sildiyini bildirir: təkrarlar, birləşdirilmiş üst-üstə düşən parçalar, uc-uca birləşdirilmiş parçalar. Bir {{cmd:UNDO}} hamısını geri qaytarır. Parametrlər pəncərəni bağlayana qədər qalır.

Ona toxunmur: kilidli qatlardakı obyektləri və gizli obyektləri. Hündürlüyü (Z) olan xətləri birləşdirmir (onların dəqiq təkrarları yenə gedir), və polixəttin içindəki parçalara (onlar incəldilmir), polixətt parçasının üzərindəki xəttə, və əks istiqamətdə çəkilmiş bağlı polixəttə toxunmur.

### DRAWORDER

Hansı obyektlərin ön planda çəkildiyini dəyişir. `Yenidən sıralanacaq obyektləri seçin`, {{key:Enter}}, sonra `Obyektlərdən yuxarıda`, `Obyektlərdən aşağıda`, `Ön` və ya `Arxa` ({{key:Enter}} = `Arxa`). `Obyektlərdən yuxarıda` və `Obyektlərdən aşağıda` istinad obyektləri soruşur: seçim onların ən önündəkinin dərhal önünə, və ya ən arxasındakının dərhal arxasına gedir. Seçilmiş obyektlər öz aralarında öz sıralarını saxlayır. Bir geri qaytarma addımı. Sıra DWG və DXF-də çertyojla birlikdə saxlanılır, burada obyektlərin yazıldığı sıradır.

Ekranda CadCraft əvvəl doldurulmuş sahələri (bərk ştrixləmə, geniş polixəttlər, maskalar), sonra xətləri, sonra mətni çəkir, buna görə mətn həmişə doldurmanın üstündə oxunur; çəkmə sırası doldurulmuş obyektlər və şəkillər arasında görünür. Digər proqramlar faylı açdıqda hər obyekti saxlanılmış sırada çəkir.

### TEXTTOFRONT

Açıq məkanda mətni, ölçüləri və istinad xətlərini hər şeyin önünə gətirir: `Mətn`, `Ölçülər`, `İstinad xətləri` və ya `Hamısı` ({{key:Enter}} = `Hamısı`). Bir geri qaytarma addımı. Onların olmadığını və ya artıq önədə olduqlarını bildirir.

### HATCHTOBACK

Açıq məkandakı hər ştrixləməni hər şeyin arxasına göndərir, belə ki, doldurmalar saxlanılmış faylda xətləri və mətni örtməsin. Sorğu yoxdur. Bir geri qaytarma addımı.

### ISOLATEOBJECTS

Ləqəblər: `ISOLATE`. Yalnız seçilmiş obyektləri göstərir: açıq məkandakı qalan hər şey {{cmd:UNISOLATEOBJECTS}}-ə qədər görünməz olur. {{cmd:LAYISO}}-dan fərqli olaraq, qatlarından asılı olmayaraq seçdiyiniz obyektlərlə işləyir və heç bir qatı dəyişmir. Gizli obyektlər çəkilmir, seçilmir, tutulmur, yaxınlaşdırılmır və çap olunmur, və `ALL` qəbul edən əmrlər onları keçir. Obyektlər təcrid olunduqda çəkdiyiniz şey adi kimi göstərilir.

Bu yalnız sessiya üçündür: çertyojla birlikdə heç nə saxlanılmır, geri qaytarma addımı deyil, və çertyoju yenidən açdıqda hər şey göstərilir. Obyektlər gizli olduqda, status panelində onların sayı ilə bir düymə görünür; onları yenidən göstərmək üçün klik edin.

### HIDEOBJECTS

Seçilmiş obyektləri {{cmd:UNISOLATEOBJECTS}}-ə qədər gizlədir. {{cmd:ISOLATEOBJECTS}} ilə eyni qaydalar: yalnız sessiya üçün, saxlanılmır, geri qaytarma addımı deyil.

### UNISOLATEOBJECTS

Ləqəblər: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} və ya {{cmd:HIDEOBJECTS}} ilə gizlədilmiş hər obyekti yenidən göstərir və neçə obyektin geri gəldiyini bildirir.

### LAYLOCKFADE

Kilidli qatlardakı obyektlərin necə göründüyünü və klikin onlara çatıb-çatmadığını təyin edir. Cari vəziyyəti bildirir, sonra qəbul edir:

- 0-dan 90-a qədər ədəd: faiz ilə solğunluq miqdarı (başlanğıc 50). 0 solğunluğu söndürür.
- `ON` və ya `OFF`: solğunluğu aç və ya bağla, miqdarı saxlayaraq.
- `Pick`, sonra `Yes` və ya `No`: heç bir əmr işləmədikdə klik kilidli qatlardakı obyektləri seçə bilirmi? `No` (standart): onlar heç seçilə bilməz. `Yes`: klik və ya pəncərə onları seçir ki, {{ui:Xassələr}} onları göstərə bilsin; yenə də dəyişdirilə bilməzlər, və əmrin öz `Obyektləri seçin` sorğusu onları heç vaxt qəbul etmir.

Obyekt tutmaları hər halda kilidli qatlardakı obyektləri tapır. Çaplar heç vaxt solğunlaşmır. Hər iki parametr sizindir, çertyojun deyil, və {{ui:Parametrlər}} altında {{ui:Kilidli qatlar}} da var.

### BURST

Blok istinadlarını partlatır və atributlarının dediyini saxlayır. `Partlatılacaq blok istinadlarını seçin`, {{key:Enter}}: hər istinad blokun obyektləri ilə əvəz olunur, və hər görünən atributun dəyəri həmin atributun öz qatında adi mətnə çevrilir (qat 0-dakı atribut istinadın qatına düşür, bloku qat 0 obyektləri kimi). Görünməz atributlar silinir. Blokun içindəki blok blok istinadı olaraq qalır. Bir geri qaytarma addımı; neçə istinadın partladıldığını və neçə atribut dəyərinin mətnə çevrildiyini bildirir.

Bağlı çertyoju adı ilə rədd edir (əvvəlcə onu birləşdirin, və ya {{cmd:NCOPY}} ilə ondan kopyalayın), və seçilmiş digər obyektləri olduğu kimi qoyur. Blok istinadları üçün {{cmd:EXPLODE}} eyni obyektləri verir; {{cmd:BURST}} yalnız blok istinadlarını götürür və atribut mətnini sayır.

### TXT2MTXT

Ləqəblər: `T2M`. Tək sətirli mətnləri bir abzas mətninə birləşdirir. `Birləşdiriləcək tək sətirli mətni seçin`, {{key:Enter}}, sonra `Abzas` (sətirlər birləşir və ən geniş sətrin enində sarınır) və ya `Sətirlər` (hər mətn öz sətri olaraq qalır); {{key:Enter}} sonuncu istifadə olunanı götürür. Sətirlər yuxarıdan aşağıya, sonra soldan sağa, yuxarı mətnin istiqaməti boyunca sıralanır. Abzas yuxarı mətnin yuxarı-sol küncündən asılır və onun hündürlüyünü, fırlanmasını, üslubunu, qatını və rəngini alır. Bir geri qaytarma addımı.

Artıq abzas mətni olan mətn, boş mətn və seçimdəki digər obyektlər olduğu kimi qalır, və əmr neçəsinin olduğunu bildirir.

### NCOPY

Obyektləri partlatmadan blok istinadından və ya bağlı çertyojdan çertyoja kopyalayır. `Blok istinadının və ya bağlı çertyojun içində obyekt seçin`: seçdiyiniz yerə ən yaxın obyekt göründüyü yerdə kopyalanır, neçə blok dərinliyində olmasından asılı olmayaraq; daha çox seçin, sonra {{key:Enter}}. Sonra `Surətləri köçürmək üçün baza nöqtəsi`: {{key:Enter}} onları yerində qoyur, və ya baza nöqtəsi və ikinci nöqtə verin. Bütün əmr bir geri qaytarma addımıdır.

Surət göründüyü qatı alır: blokun içində qat 0-dakı obyekt onu yerləşdirən istinadın qatına düşür, və ByBlock rəng həmin istinadın rənginə çevrilir. Bağlı çertyojdan `Plan|Walls` qatı `Plan$0$Walls` olur (əlaqənin verdiyi ad), bağlı qatın rəngi, xətt tipi və xətt qalınlığı ilə. Atributun dəyəri mətn kimi kopyalanır. Kilidli qatlardakı blok istinadları seçilə bilməz.

### FLATTEN

Seçilmiş obyektlərin hündürlüyünü (Z) və qalınlığını 0 edir. `Düzləşdiriləcək obyektləri seçin`, {{key:Enter}}. Seçimin istifadə etdiyi blok təriflərindəki obyektləri də düzləşdirir (və həmin blokların içindəki blokları), buna görə həmin blokların hər istinadı dəyişir; bağlı çertyojlar olduğu kimi qalır. Bir geri qaytarma addımı; neçə obyektin dəyişdiyini bildirir, və heç birinin hündürlüyü və ya qalınlığı olmadıqda bunu deyir.

CadCraft 2D çertyojda üçüncü ölçüdən nəyi saxlayır: çevrələr, qövslər, ellipslər, nöqtələr, mətn, blok istinadları, ştrixləmələr, istinad xətləri və polixəttlərdə hündürlük (onların yüksəlişi), xəttin hər ucunda hündürlük, və xətlər, çevrələr, qövslər, polixəttlər, nöqtələr və mətndə qalınlıq, faylda olduğu kimi. {{cmd:FLATTEN}} məhz bunları sıfırlayır. 3D sekmədəki 3D modelə, 3D üzlərə və ya cisimlərə toxunmur, və əyilmiş müstəvidə çəkilmiş obyekt fayl açıldıqda artıq çertyoj müstəvisinə gətirilmişdi.

### BREAKLINE

Qırılma simvolu ilə xətt çəkir, qısaldılmış görünüş üçün. Cari ölçüsünü və uzantısını bildirir, sonra `Qırılma xəttinin birinci nöqtəsi` (və ya əvvəl dəyişmək üçün `Size` / `Extension`), `İkinci nöqtə`, və `Qırılma simvolunun yeri`: xətt boyunca klik edin, və ya orta üçün {{key:Enter}}. Nəticə cari qatda bir polixəttdir: hər nöqtədən uzantı qədər keçən xətt, ölçüsü qədər hündür və yarısı qədər uzun Z-şəkilli vuruşla.

`Size` və `Extension` parametrləriniz kimi yadda qalır (ölçü ölçü mətninin hündürlüyünün iki qatı, miqyasla vurulmuş; uzantı ölçünün yarısıdır). {{key:Enter}} əmri təkrarlayır.

### AUDIT

Açıq çertyojda zədələri yoxlayır və düzəldir. {{cmd:AUDIT}} modeldəki, vərəqlərdəki, blokların içindəki hər obyekti və qat cədvəlini yoxlayır, və tapdıqlarını növünə görə siyahılayır:

- sonsuz olmayan və ya qeyri-adi böyük ədədlər;
- ölçüsü olmayan obyektlər: uzunluğu olmayan xətt, radiusu olmayan çevrə, bir nöqtəsi olan polixətt, hərfi və ya hündürlüyü olmayan mətn, sıfır miqyaslı blok istinadı;
- çertyojda olmayan qatda obyektlər; olmayan bloka istinadlar; çertyojda olmayan mətn və ölçü üslubu adları və xətt tipi adları;
- özü və ya digər bloklar vasitəsilə özünü ehtiva edən bloklar;
- eyni identifikator, açar və ya fayl dəstəyi paylaşan obyektlər;
- ölçülənmək üçün nöqtələri olmayan ölçülər, və konturu bağlı olmayan ştrixləmələr.

Sonra `Düzəldim? [Bəli/Xeyr]` soruşur. `Xeyr` heç nəyi dəyişmir. `Bəli` hər şeyi bir geri qaytarma addımında düzəldir: çəkilə bilməyənlər silinir (pis ədədlər, ölçüsü olmayanlar, olmayan blok, zədələnmiş ölçü, istifadə olunmayan ştrixləmə konturu, bloklar dövrəsini bağlayan istinad); olmayan qat yaradılır; tanınmayan üslub və xətt tipi adları standartlara qaytarılır; paylaşılan açar dəyişdirilir. Neçə obyektin silindiyini və neçəsinin düzəldildiyini çap edir. Eyni tapıntılar Problemlər panelində görünür, hər biri öz {{ui:Repair}} ilə.

Heç nəyi rədd etmir, lakin yalnız CadCraft-ın özünün çəkdiyini yoxlayır: digər proqramlar üçün saxlanılan məlumat (3D cisimlər, OLE obyektləri) açılmır.

### RECOVER

Zədələnmiş DXF və ya DWG-ni açır. {{cmd:RECOVER}} faylı soruşur, faylı rədd etmək əvəzinə oxuna bilənləri oxuyur, keçdiyi və ya fərz etdiyi şeyləri siyahılayır, sonra {{cmd:AUDIT}} kimi `Bəli` ilə çertyojı yoxlayır və düzəldir.

- DXF: kod və dəyər cütünün bir hissəsi olmayan sətirlər cütlər yenidən düzülənə qədər keçilir; sonu olmayan bölmə bağlanır; kəsilmiş fayl kəsilənə qədər oxunur; kəsilmiş ikili DXF son tam dəyərinə qədər oxunur. Bölmə, blok və ya obyekt hələ də oxuna bilmədikdə, o çıxarılır və adlandırılır, oxuma onun ardınca davam edir.
- DWG: yoxlamalardan keçməyən və ya deşifr oluna bilməyən obyektlər çıxarılır, və itmiş obyekt siyahısı obyekt məlumatı gəzilərək yenidən qurulur.

Diskdəki fayl dəyişmir. Bərpa olunmuş çertyoj saxlanılmamış açılır: onu yeni adla saxlayın. Heç nə oxunmayan fayl səbəbi ilə rədd edilir.

### LEGACYTEXT

Köhnə 8-bit Vyetnam şriftləri ilə yazılmış mətni Unicode-a çevirir. Qısa adlar `TEXTTOUNICODE` və `VNTEXT`.

Köhnə Vyetnam çertyojlarında mətn yalnız şriftin Vyetnam dilinə çevirdiyi Qərb simvolları kimi saxlanılır: ABC şriftlərində TCVN3 mətn (`.VnTime`, `.VnArial`, və adı `H` ilə bitən böyük hərfli şriftlər), və VNI şriftlərində VNI mətn (`VNI-Times`). CadCraft belə mətni çertyoj açılan kimi, mətn üslubunun, obyektin və ya abzas mətni içindəki parçanın şrifti ilə oxuyur; fayl hələ də köhnə simvolları saxlayır.

{{cmd:LEGACYTEXT}} hər kodlaşdırmada neçə mətn tapdığını bildirir və `Unicode-a çevrilsin … ?` soruşur. `Bəli` hər birini yenidən yazır (model, vərəqlər, bloklar, atribut dəyərləri və təriflər) və mətn üslublarına Unicode şrift verir (Times New Roman, Arial və ya Courier New köhnə şriftin növünə görə), bir geri qaytarma addımında. Abzas mətni içindəki format saxlanılır.

Məlum şrifti istifadə etməyən mətn olmadıqda (şrift adını itirmiş üslub), `Seçilmiş mətnləri bu kimi oxuyun [Tcvn3/Vni/None]` soruşur: kodlaşdırmanı seçin və mətnləri seçin. Artıq Unicode olan mətnə toxunulmur. Ölçü mətnini əvəz edənlər və çoxistinad mətni çevrilmir.
