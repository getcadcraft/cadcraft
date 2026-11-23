---
title: Komanda referansı
summary: CadCraft çertyoj tətbiqinin hər komandası, qısa adları, verdiyi suallar, seçimləri və standart dəyərləri ilə.
keywords: komandalar, ləqəblər, komanda siyahısı, sahə, perimetr, measuregeom, xətt, pline, çevrə, qövs, trim, offset, dimlinear, blok, insert, vərəq, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Komanda adını və ya ləqəbini yazın və {{key:Enter}} və ya {{key:Space}} basın. Böyük-kiçik hərf fərq etmir, əvvəldəki `_`, `-`, `.` və ya `'` nəzərə alınmır. Komanda sətrinin tarixçəsində hər komandanın qısa siyahısını çap etmək üçün `HELP` (və ya `?`) yazın; bu kömək səhifəsini açmaq üçün {{key:F1}} basın.

Sualları necə oxumalı: seçimlər kvadrat mötərizədədir və birini onun böyük hərflərini yazaraq seçirsiniz (`D` Diametr üçün). Standart dəyər bucaq mötərizəsindədir; qəbul etmək üçün {{key:Enter}} basın. Nöqtə istənilən yerdə klik edə və ya [Koordinat və məsafə daxil etmə](topic:coordinate-entry) bölməsindəki formatların hər hansı birində yaza bilərsiniz. Məsafə istənilən yerdə ədəd yaza və ya iki nöqtəyə klik edə bilərsiniz.

Nöqtə və ya obyekt tələb olunan yerdə {{key:Enter}} basmaq, standart dəyər olmadıqda, komandanı bitirir. {{key:Esc}} onu ləğv edir. Komandanın etdiyi hər şey bir geri alma addımıdır.

## Çək

### LINE

Ləqəb: `L`. Düz parçalar, hər biri öz obyekti.

- `Birinci nöqtəni göstərin` (Enter: son verdiyiniz nöqtədən başla)
- `Növbəti nöqtəni göstərin [Geri qaytar]`, təkrarlanır. İki parçadan sonra: `[Geri qaytar/Bağla (C)]`.
- `U` son parçanı geri götürür, `C` ilk nöqtəyə bağlayır və bitirir. Enter bitirir.

### PLINE

Ləqəb: `PL`. Xətt və qövs parçalarından bir polixətt.

- `Başlanğıc nöqtəni göstərin`
- `Növbəti nöqtəni göstərin [Qövs/Bağla (C)/Geri qaytar]` (iki parça olduqda Bağla)
- `A` qövslərə keçir: `Qövsün son nöqtəsini göstərin [Xətt/Bağla (CL)/Geri qaytar]`. Hər qövs əvvəlki parçaya toxunan olaraq davam edir. `L` xətlərə qayıdır, `CL` qövslə bağlayır.
- Enter bitirir; polixətt açıq qalır.

### CIRCLE

Ləqəb: `C`.

- `Dairənin mərkəz nöqtəsini göstərin [3P/2P/Ttr (tan tan radius)]`
- `Dairənin radiusunu göstərin [Diametr] <son radius>`; `D` `Dairənin diametrini göstərin` soruşur.
- `2P`: diametrin iki ucu. `3P`: çevrə üzərində üç nöqtə.
- `T` (həmçinin `TTR` komandası və {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Çevrə: Tan, Tan, Radius}}): `Birinci toxunan üçün obyekt üzərində nöqtəni göstərin`, sonra ikinci, sonra radius (Enter: son radius). Çevrə hər iki obyektə toxunur (xətlər, qövslər, çevrələr, polixətt parçaları, blokların içindəkilər də); toxunanların arasında seçdiyiniz nöqtələrə ən yaxın olanı. Heç biri uyğun gəlməsə "Çevrə mövcud deyil" deyir.
- `TTT` (və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Çevrə: Tan, Tan, Tan}}): üç obyekt; üçünə toxunan çevrə, seçdiyiniz nöqtələrə ən yaxın olan (üç xətt daxili və ya xarici çevrə verir, klik etdiyinizdən asılı olaraq).

### ARC

Ləqəb: `A`.

- `Qövsün başlanğıc nöqtəsini göstərin [Mərkəz]`, `Qövsün ikinci nöqtəsini göstərin`, `Qövsün son nöqtəsini göstərin`: üç nöqtədən keçən qövs.
- `C`: `Qövsün mərkəz nöqtəsini göstərin`, `Qövsün başlanğıc nöqtəsini göstərin`, `Qövsün son nöqtəsini göstərin`. Qövs başlanğıcdan sona saat əqrabının əksinə gedir.

### RECTANG

Ləqəb: `REC`, `RECTANGLE`. Bağlı polixətt.

- `Birinci künc nöqtəsini göstərin`, `Digər künc nöqtəsini göstərin`. İkinci künc üçün `@en,hündürlük` yazın.

### POLYGON

Ləqəb: `POL`. Bağlı polixətt kimi düzgün çoxbucaqlı.

- `Tərəflərin sayını daxil edin <4>` (3-dən 1024-ə)
- `Çoxbucaqlının mərkəzini göstərin`
- `Seçim daxil edin [Dairəyə daxil yazılmış/Dairənin ətrafında yazılmış] <I>`
- `Dairənin radiusunu göstərin`: klik edin və ya nöqtə yazın; onun məsafəsi ölçünü, istiqaməti isə çoxbucaqlını fırladır.

### ELLIPSE

Ləqəb: `EL`.

- `Ellipsin ox nöqtəsini göstərin [Mərkəz]`, `Ox üzərində digər nöqtəni göstərin`, `Digər oxa məsafəni göstərin`
- `C`: `Ellipsin mərkəzini göstərin`, `Ox nöqtəsini göstərin`, sonra digər oxa məsafə.
- `I` (`İzodairə`, yalnız {{cmd:ISODRAFT}} açıq olduqda): mərkəz, sonra radius və ya `Diametr`: cari izometrik müstəvidə dairənin göründüyü ellips.

### HATCH

Ləqəb: `H`, `BH`, `BHATCH`; və ya alət panelində {{ui:Ştrixlama}}. Əvvəlcə cari naxışı, miqyası və bucağı çap edir.

- `Daxili nöqtəni göstərin [Obyektləri seç/Naxış/Miqyas (S)/Bucaq (A)]`, təkrarlanır (`Geri qaytar` sahə olduqdan sonra): hər klik ətrafındakı qapalı sahəni əlavə edir, içindəki qapalı fiqurlar adalar kimi. Enter bütün onları bir ştrixlamaya çevirir.
- `S`: `Qapalı obyektləri seçin` (qapalı polixətlər, dairələr, qapalı ellipslər).
- `P`: `Naxış adını, SOLID-i və ya siyahı üçün ? daxil edin <cari>`. `SC`: `Naxış miqyasını göstərin`. `A`: `Naxış bucağını göstərin`.
- `G` (Qradiyent): doldurma naxış əvəzinə qradiyentdir. Onun sualları üçün {{cmd:GRADIENT}}-a baxın.

Bax [Ştrixlama və doldurma sahələri](topic:hatch).

### GRADIENT

Ləqəb: `GD`. Sahəni bir və ya iki rəngin qradiyenti ilə doldurur. Əvvəlcə qradiyent soruşur, sonra {{cmd:HATCH}} kimi davam edir (`Daxili nöqtəni göstərin`, qapalı obyektlər üçün `S`, bitirmək üçün {{key:Enter}}).

- `Qradiyent seçimini daxil edin [Növ/Bir rəng/İki rəng/Bucaq/Mərkəzləşmiş/Çıxış] <Ç>`, təkrarlanır; hər dəfə qradiyenti indiki vəziyyətdə çap edir.
- `N` (Növ): `XƏTTİ`, `SİLİNDR`, `SFERİK`, `YARIMSFERİK`, `ƏYRİ`, və ya bunlardan birinin tərsi (`TERS SİLİNDR`, `TERS SFERİK`, `TERS YARIMSFERİK`, `TERS ƏYRİ`). İlk hərflər kifayətdir.
- `B` (Bir rəng): bir rəng, sonra onun tonu 0-dan 1-ə (0 onu qaraya qaraldır, 0,5 rəngin özüdür, 1 onu ağa açır). `İK` (İki rəng): birinci və ikinci rəng. Rəng 1-dən 255-ə qədər ədəd, `255,128,0` kimi üç ədəd və ya `#rrggbb`dir.
- `A`: qradiyentin işlədiyi bucaq. `C`: mərkəzləşmə Bəli və ya Xeyr (Xeyr qradiyentin ortasını bir tərəfə köçürür).
- Tanımadığı rəng və ya növü, 0-dan 1-ə xaricdə olan tonu rədd edir.

{{cmd:HATCHEDIT}} `G` və Xassələr (Qradiyent) qradiyenti sonra dəyişir və ya istənilən ştrixlamanı ona çevirir. Qradiyent ekranda çəkilir və çap olunur. DWG 2004 və sonrakı versiyalar onu həqiqi qradiyent ştrixlaması kimi saxlayır; DXF 2000 və DWG 2000 onu CadCraft üçün saxlayır və digər proqramlar birinci rəngdə bərk doldurma görür.

### HATCHGENERATEBOUNDARY

Ləqəb: `HGB`. Sərhədi itirmiş ştrixlamadan sərhəd xəttlərini yenidən yaradır. `Ştrixlamaları seçin` (və ya əvvəlcə seçin), sonra `Hər ştrixlamanı yeni sərhədinə bağlayın ki, ştrixlama onu izləsin? [Bəli/Xeyr] <Bəli>`.

- Ştrixlamanın hər döngəsi ştrixlamanın qatında bağlı polixətt olur; yeni polixətlər seçilmiş qalır. Əyri kənar ştrixlamanın saxladığı qısa düz parçalar kimi qayıdır.
- Bəli ilə ştrixlama yeni sərhədini izləyir, {{cmd:HATCH}} ilə yaradılmış ştrixlama kimi. Bir geri alma addımı.
- Heç bir ştrixlama seçilmədikdə bunu deyir.

### POINT

Ləqəb: `PO`; və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Nöqtə}}. Hər klikdə bir nöqtə obyekti, Enter-ə qədər.

- `Nöqtəni göstərin`

### XLINE

Ləqəb: `XL`; və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Konstruksiya xətti}}. Hər iki tərəfdən sonsuz konstruksiya xətləri. Bax [Konstruksiya xətləri və şüalar](topic:construction-lines).

- `Nöqtəni göstərin [Üf/Şaq/Buc/Biss/Ofset]`, sonra hər xətt üçün `Keçən nöqtəni göstərin`, Enter-ə qədər.
- `A`: `Konstruksiya xəttinin bucağını daxil edin [İstinad] <0>`; `R` əvvəlcə `Xətt obyektini seçin` soruşur.
- `B`: `Bucağın təpə nöqtəsini göstərin`, `Bucağın başlanğıc nöqtəsini göstərin`, sonra hər xətt üçün `Bucağın son nöqtəsini göstərin`.
- `O`: `Ofset məsafəsini daxil edin [Keçən] <Keçən>`, sonra hər xətt üçün `Xətt obyektini seçin` və `Ofset tərəfini göstərin` (və ya `Keçən nöqtəni göstərin`).

### RAY

Ləqəb yoxdur; və ya {{ui:Çəkmə}} › {{ui:Daha çox}} › {{ui:Şüa}}. `Başlanğıc nöqtəni göstərin`, sonra hər şüa üçün `Keçən nöqtəni göstərin`, Enter-ə qədər.

### TEXT

Ləqəb: `DT`, `DTEXT`; və ya alət panelində {{ui:Mətn}}. Tək sətirli mətn; hər sətir öz obyektidir.

- `Mətnin başlanğıc nöqtəsini göstərin [Düzləşdir]`
- `D`: `Seçim daxil edin [Sol/Mərkəz/Sağ/Orta/TL/MC] <S>`, sonra `Mətnin əlavə nöqtəsini göstərin`
- `Mətnin hündürlüyünü göstərin <cari mətn hündürlüyü>`
- `Mətnin fırlanma bucağını göstərin <0>`
- `Mətni daxil edin`, təkrarlanır: hər Enter aşağıda növbəti sətri başladır. Boş sətirdə Enter bitirir. {{key:Space}} burada boşluq yazır.

### DIVIDE

Ləqəb: `DIV`. {{cmd:DIVIDE}} xətt, qövs, çevrə, polixətt, splayn və ya ellipsin üzərinə onu bərabər hissələrə bölən işarələr qoyur. Obyekti seçin, sonra hissələrin sayını verin (2-dən 32767-yə). Açıq obyekt hissələrdən bir az az işarə alır; bağlı obyekt başlanğıcında da işarə alır. Obyektin özü kəsilmir. İşarələr nöqtələrdir; `Blok` bunun əvəzinə bu çertyojun bloku istəyir və onun obyektə uyğun dönüb-dönmədiyini soruşur. Splayn və ellipslər boyunca uzunluqlar qısa vətərlər üzrə ölçülür. Mətn, ştrixlamalar və uzunluğu olmayan digər obyektləri rədd edir.

### MEASURE

Ləqəb: `ME`. {{cmd:MEASURE}} xətt, qövs, çevrə, polixətt, splayn və ya ellips üzərində verilmiş hər uzunluqda işarə qoyur, sizin seçdiyiniz uca ən yaxın tərəfdən sayaraq (bağlı obyektdə: başlanğıcından). Uzunluğu yazaraq və ya iki nöqtə ilə verin. Açıq obyektin uzaq ucu işarə almır. `Blok` hər işarədə nöqtə əvəzinə blok yerləşdirir. 0 uzunluğu, obyektdən uzun uzunluğu və 32767-dən çox işarə yaradacaq uzunluğu rədd edir.

### BOUNDARY

Ləqəb: `BO`, `BPOLY`. {{cmd:BOUNDARY}} seçdiyiniz nöqtəni əhatə edən sahənin ətrafında bağlı polixətt yaradır; ekranda onu məhdudlaşdıran xətlər, qövslər, çevrələr, polixətlər və əyrilərdən. Qövs və ya çevrənin üzərində olan parçalar qövs parçaları kimi qayıdır; ellips və splaynların parçaları qısa düz parçalar kimi qayıdır. `Adalar` (başlanğıcda açıq) onun içindəki hər bağlı sahəyə də öz polixəttini verir. Nöqtələri seçməyə davam edin; Enter bitirir. Sahəni məhdudlaşdıran obyektlər olduğu kimi qalır. Nöqtəni əhatə edən bağlı sahə olmadıqda bunu deyir.

### BLEND

{{cmd:BLEND}} iki açıq əyrinin uclarında splayn çəkir. Birləşmək üçün hər əyrini uca yaxın seçin. `CONtinuity` `Tangent` (splayn hər iki əyri boyunca çıxır və gəlir) və ya `Smooth` (uclarda onların əyilməsini də izləyir) seçir; seçim sessiya üçün saxlanılır. İki əyri dəyişmir. Bağlı obyektləri və artıq görüşən iki ucu rədd edir.

### REGION

Ləqəb: `REG`. {{cmd:REGION}} bağlı obyektləri regionlara çevirir: birləşdirə, kəsə və ölçə biləcəyiniz düz sahələr. Çevrələri, bağlı polixətləri, bağlı ellipsləri və ya bağlı splaynları, və ya uc-uca döngə bağlayan xətləri, qövsləri və açıq polixətləri seçin; hər döngə bir region olur və onu yaradan obyektləri əvəz edir. Qövslər qövs olaraq qalır; ellips və splaynlar qısa düz parçalara çevrilir. Bağlı olmayan və heç bir döngə bağlamayan şey olduğu kimi qalır və neçə olduğunu deyir. Çertyojda region bir və ya bir neçə bağlı polixətt olur və adsız qrup kimi bir yerdə saxlanılır; buna görə klik bütün regionu seçir və surət ayrı bir region olur; digər proqramlar faylı açdıqda bağlı polixətləri görür.

Çertyojda regionlar olduqda 2D sekmesindəki {{cmd:UNION}}, {{cmd:SUBTRACT}} və {{cmd:INTERSECT}} regionlarla işləyir: `UNION` seçilmiş regionları birinə birləşdirir (bir-birindən ayrı olanlar bir neçə konturlu bir region olur), `SUBTRACT` əvvəlcə çıxılacaq regionları, sonra götürüləcək regionları soruşur (deşik regionun hissəsi olaraq qalır), `INTERSECT` onların hamısının paylaşdığı sahəni saxlayır. Hər biri nəticənin sahəsini deyir və bir geri alma addımıdır. Heç nə qalmadıqda və ya ortaq heç nə olmadıqda rədd edir. 3D sekmesində və regionsuz çertyojda eyni komandalar əvvəlki kimi bərk cisimlərlə işləyir.

## Dəyişdir

### TEXTEDIT

Ləqəb: `MT`, `T`; və ya alət panelində {{ui:Abzas}}. Eninə bağlanan abzas mətni, yerində yazılır.

- `Birinci küncü göstərin`
- `Əks küncü göstərin [Hündürlük/Düzləşdirmə/Sətir aralığı/Fırlanma/En]`: iki künc arasındakı en mətnin sarıldığı yerdir. `H` `Hündürlüyü göstərin` soruşur, `J` `Düzləşdirməni daxil edin [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Sətir aralığı əmsalını daxil edin (0.25-dən 4-ə)`, `R` `Fırlanma bucağını göstərin`, `W` `Eni daxil edin (sarımaq üçün 0)` və ikinci küncü keçir.
- Sonra çertyojda qutu açılır: yazın, yeni abzas üçün {{key:Enter}}, bitirmək üçün {{key:Mod+Enter}} və ya qutunun xaricində klik, ləğv etmək üçün {{key:Esc}}. Onun paneli hündürlüyü, sətir aralığını, eni və düzləşdirməni təyin edir. Bax [Mətn və etiketlər əlavə edin](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Ləqəb: `ED`, `DDEDIT`; və ya mətnə ikiklik. `Redaktə ediləcək mətni seçin`, Enter-ə qədər təkrarlanır: hər biri eyni qutuda açılır. Seçilmiş və ya ikiklik edilmiş mətndən başladıqda yalnız onu redaktə edir və bitir.

### ERASE

Ləqəb: `E`, `DELETE`; və ya obyektlər seçilmiş ikən {{key:Delete}} basın.

- `Obyektləri seçin` (obyektlər artıq seçilibsə keçilir)

### MOVE

Ləqəb: `M`.

- `Obyektləri seçin`
- `Baza nöqtəsini göstərin [Yerdəyişmə]`, `İkinci nöqtəni göstərin`
- `D`: `Yerdəyişməni göstərin`, `dx,dy` kimi yazılır.

### COPY

Ləqəb: `CO`, `CP`. Verdiyiniz nöqtələr qədər surət.

`Massiv` ikinci nöqtə sorğusunda bir sətiri bir dəfəyə yaradır: elementlərin sayını verin (əsl obyekt bir sayılır), sonra ilk surətin gedəcəyi nöqtəni. Qalanları eyni aralıqla gedir. `Uyğunlaşdır` həmin nöqtəni son surətin yeri edir, aralarında digərləri bərabər paylanır.

- `Obyektləri seçin`
- `Baza nöqtəsini göstərin [Yerdəyişmə]`
- `İkinci nöqtəni göstərin [Geri qaytar]`, Enter-ə qədər təkrarlanır. `U` son surəti geri götürür.

### ROTATE

Ləqəb: `RO`.

- `Obyektləri seçin`, `Baza nöqtəsini göstərin`
- `Fırlanma bucağını göstərin <son bucaq>`: dərəcə, saat əqrabının əksinə müsbət; və ya ona doğru fırlatmaq üçün nöqtəyə klik edin.

### SCALE

Ləqəb: `SC`.

- `Obyektləri seçin`, `Baza nöqtəsini göstərin`
- `Miqyas əmsalını göstərin`: `0.5` və ya `2` kimi əmsal yazın. Klik edilmiş nöqtə baza nöqtəsindən məsafəsini əmsal kimi verir.

### MIRROR

Ləqəb: `MI`.

- `Obyektləri seçin`
- `Güzgü xəttinin birinci nöqtəsini göstərin`, `Güzgü xəttinin ikinci nöqtəsini göstərin`
- `Mənbə obyektləri silinsin? [Bəli/Xeyr] <X>`

### ALIGN

Ləqəb: `AL`; və ya {{ui:Dəyişdirmə}} › {{ui:Daha çox}} › {{ui:Uyğunlaşdır}}.

- `Obyektləri seçin`
- `Birinci mənbə nöqtəsini göstərin`, `Birinci təyinat nöqtəsini göstərin`
- `İkinci mənbə nöqtəsini göstərin (davam etmək üçün Enter)`, `İkinci təyinat nöqtəsini göstərin`
- `Üçüncü mənbə nöqtəsini göstərin (davam etmək üçün Enter)`, `Üçüncü təyinat nöqtəsini göstərin`
- İki cütdə: `Düzləşdirmə nöqtələrinə görə obyektləri miqyaslayın? [Bəli/Xeyr] <X>`

Bax [Obyektləri uyğunlaşdırın](topic:modify-objects#align-objects).

### ALIGNTO

- `Obyektləri seçin` (və ya seçim), `Uyğunlaşdır [Sol/Mərkəz/Sağ/Yuxarı/Orta/Aşağı] <Sol>`, `Hədəf [Seçim/Birinci/Son/Nöqtə] <Seçim>`; `P` nöqtə soruşur. Seçim qalır.

### DISTRIBUTE

- `Obyektləri seçin` (ən azı üç), `Paylaşdır [Üfüqi/Şaquli] <Üfüqi>`, `Bərabər bölün [Mərkəzlər/Boşluqlar] <Boşluqlar>`. Kənardakı iki qalır; seçim qalır.

### ALIGNPANEL

Ləqəb: `ALP`; və ya {{ui:Dəyişdirmə}} › {{ui:Daha çox}} › {{ui:Uyğunlaşdır və bölüşdür}}. Klik ilə ALIGNTO və DISTRIBUTE-i işlədən paneli açır.

### LASER

Ləqəb: `LASERCUT`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Lazer…}}. Çertyojun üzərində Lazer panelini açır: hər qatın nə etdiyini (kəsmə, cızma, qravüra, doldurma, şəkil), önizləməni, saxlanılacaq GRBL G-kodunu, və Web Serial ilə çərçivələmə və göndərməni. Bax [Çertyoju lazerə göndərin](topic:laser-cutting).

### STRETCH

Ləqəb: `S`; və ya {{ui:Uzat}}. `Uzatmaq üçün obyektləri seçin`: uclar üzərində kəsişən pəncərələri sürükləyin (və ya `C` yazın). `Baza nöqtəsini göstərin [Yerdəyişmə]`, `İkinci nöqtəni göstərin`. Pəncərələrin içindəki nöqtələr hərəkət edir: xətt uçları, polixətt təpələri (qövs parçaları hündürlüyünü saxlayır), ölçü nöqtələri; çevrələr, ellipslər, mətn, nöqtələr və bloklar mərkəzləri və ya yerləşdirmə nöqtələri içərdə olduqda bütöv hərəkət edir. Komandadan əvvəl edilmiş seçim onu yaradan kəsişən pəncərələri (və lassoları) saxlayır, beləliklə eyni şəkildə uzanırlar. Pəncərə olmadan obyektlər bütöv hərəkət edir.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Ləqəb: `AR`; və ya {{ui:Massiv}}. `Obyektləri seçin`, sonra `Massiv növünü daxil edin [Düzbucaqlı/POlyar] <Düzbucaqlı>` (yalnız ARRAY).

- Düzbucaqlı 4 sütun × 3 sətirlə başlayır, obyektlərin ölçüsünün 1,5 qatı aralıqla, önizləmə kimi göstərilir. `Seçim daxil edin [SAy/Aralıq/SÜtunlar/Sətirlər/Çıxış (X)] <X>`: `SAY` sütunları və sətirləri soruşur, `A` sütunlar arasındakı və sətirlər arasındakı məsafələr (mənfi sola və ya aşağıya gedir), `SÜ` və `S` hər biri bir istiqamət.
- Polyar `Massivin mərkəz nöqtəsini göstərin` soruşur, ətrafa 6 element ilə başlayır, fırladılmış. `Seçim daxil edin [Elementlər/Doldurma bucağı/Elementləri fırladın/Çıxış (X)] <X>`: `E` elementlər, `D` doldurulacaq bucaq (+ saat əqrabının əksinə, − saat əqrabı istiqamətində), `FIR` Bəli və ya Xeyr.
- {{key:Enter}} (Çıxış) surətləri adi obyektlər kimi yaradır. Bir geri alma addımı.
- `AS` (Assosiativ) adi surətlər ilə sonra {{cmd:ARRAYEDIT}} ilə dəyişə biləcəyiniz, tutacaqları ilə və ya Xassələrdə redaktə oluna bilən bir massiv obyekti arasında keçir. Seçim yadda qalır ({{cmd:ARRAYASSOCIATIVITY}}); adi surətlərdən başlayır.

### ARRAYPATH

Əyri boyunca surətlər. `Obyektləri seçin`, sonra `Yol əyrisini seçin`: xətt, qövs, çevrə, ellips, polixətt və ya splayn (massivləşdirilən obyektlərdən biri olmayan). Yol obyektlərə yaxın ucundan başlayır və birinci element obyektlərin olduğu yerdədir.

- `Seçim daxil edin [Üsul/Elementlər/Aralıq/Düzləşdir/Assosiativ/Çıxış (X)] <X>`, önizləmə ilə. `Ü`: `Bərabər` elementləri bütün yol boyunca bərabər yayır, `Ölçü` yolu boyunca hər məsafədə bir qoyur. `E`: elementlərin sayı (Ölçü ilə 0 yolun sığdığı qədər deməkdir; yolun sonunu keçən say yola sığana qədər saxlanılır). `AR`: elementlər arasında yol üzrə məsafə (Ölçü rejiminə keçirir). `DÜ`: Bəli elementləri yol boyunca fırladır, Xeyr onları şaquli saxlayır.
- `AS` {{cmd:ARRAY}}-dəki kimi. Açıq olduqda massiv yolun formasının öz surətini saxlayır: sonradan yol əyrisini redaktə etmək elementləri hərəkət etdirmir.
- Yolu əyri olmayan və bir elementi rədd edir.

### ARRAYEDIT

Assosiativ ilə yaradılmış massivi dəyişir. `Massivi seçin` (və ya əvvəlcə seçin). O, massivin indiki vəziyyətini çap edir, sonra {{key:Enter}}-ə qədər soruşur:

- Düzbucaqlı: `SÜ` sütunlar və onların aralığı, `S` sətirlər və onların aralığı, `A` sütunların getdiyi bucaq.
- Polyar: `E` elementlər, `D` doldurma bucağı, `FIR` elementləri fırladın Bəli və ya Xeyr.
- Yol: `Ü` Bərabər və ya Ölçü, `E` elementlər, `AR` aralıq, `DÜ` yolla düzləşdirmə.
- `M` (Mənbə) massivin təkrarladığı obyektləri öz başına açır, blok redaktoru kimi. Orada çəkin və dəyişin; {{cmd:ARRAYCLOSE}} saxlayır və ya ləğv edir, hər element izləyir.
- `ƏVƏZ` (Əvəz etmə): `Əvəzedici obyektləri seçin`, `Əvəzedici obyektlərin baza nöqtəsini göstərin`, sonra əvəz ediləcək elementlərə klik edin, {{key:Enter}}. Həmin elementlər əvəzediciləri göstərir; əvəzedici obyektlər çertyojdan çıxır və massivin içində yaşayır. `SIFIR` (Sıfırlama) bütün elementlərdə əsl mənbə obyektlərini yenidən göstərir.
- Hər dəyişiklik bir geri alma addımıdır. Adi surətləri, adi blok istinadını və kilidli qatdakı massivi rədd edir.

Eyni rəqəmlər Xassələrdə Massiv altındadır; massivin tutacaqları var: baza nöqtəsi onu hərəkət etdirir, ikinci elementdəki tutacaq aralığı təyin edir, sonuncudan keçən tutacaq sayı təyin edir (polyar: ikinci element neçə element olduğunu, son element doldurma bucağını təyin edir). {{cmd:EXPLODE}} massivi yenidən adi surətlərə çevirir.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} mənbəyini bitirir: `Massivin mənbə obyektlərindəki dəyişiklikləri saxlayırsınız? [Saxla/Ləğv et] <Saxla>`. Açıq massivin mənbə obyektləri olmadıqda bunu deyir. {{cmd:BCLOSE}} eyni işi görür.

### ARRAYASSOCIATIVITY

`ARRAYASSOCIATIVITY üçün yeni dəyəri daxil edin (1 = massivlər redaktə oluna bilir, 0 = adi surətlər)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR və {{cmd:ARRAYPATH}}-ın başlandığı seçimi təyin edir; onların `AS` seçimi eyni parametri dəyişir. Bu brauzerdə yadda qalır.

### OFFSET

Ləqəb: `O`. Xətlər, qövslər, çevrələr və polixətlər.

Polixətt xaricə doğru hərəkət edəndə və düz parçaları küncdə ayrılanda, {{cmd:OFFSETGAPTYPE}} boşluğun necə bağlandığını təyin edir.

- `Ofset məsafəsini daxil edin [Keçən] <son məsafə və ya Keçən>`
- `Ofset ediləcək obyekti seçin`, sonra `Ofset tərəfində nöqtəni göstərin` (və ya Keçən ilə `Keçən nöqtəni göstərin`), Enter-ə qədər təkrarlanır.

### OFFSETGAPTYPE

- `Ofset küncü boşluqları: 0 uzat, 1 yumru, 2 kəsik`: {{cmd:OFFSET}} polixəttin xarici küncündə boşluqları necə bağlayır. `0` parçaları görüşənə qədər uzadır (başlanğıc quruluş), `1` köhnə künc ətrafında qövslə birləşdirir, `2` düz kəsiklə. Düz küncləri və qövs parçalarını təsir etmir. Bu sessiya üçün saxlanılır.

### EXTRIM

{{cmd:EXTRIM}} kənarın bir tərəfindəki hər şeyi kəsir. Kəsici kənarı seçin (xətt, qövs, çevrə, polixətt, ellips, splayn və ya konstruksiya xətti), sonra təmizləniləcək tərəfdə bir nöqtə seçin: kənarı kəsən hər xətt, qövs, çevrə, polixətt və konstruksiya xətti həmin tərəfdəki hissəsini itirir, kənarda başlayaraq. Tərəfi seçərkən gedəcək parçalar göstəricini izləyir. Qapalı kənar üçün tərəflər daxili və xarici olur. Yalnız kənara toxunan obyektlər, və kənarı kəsən mətn, ştrixlamalar, splaynlar və ellipslər olduğu kimi qalır. Bir geri alma addımı.

### TRIMEXTENDMODE

- `TRIMEXTENDMODE üçün yeni dəyəri daxil edin (1 Sürətli, 0 Standart)`: {{cmd:TRIM}} və {{cmd:EXTEND}} necə başlayır. `1` Sürətli: hər obyekt kəsici kənar və ya sərhəddir. `0` Standart: əvvəlcə kənarları soruşurlar. Həmçinin LISP-də `(setvar "TRIMEXTENDMODE" 0)`.

### TRIM

Ləqəb: `TR`. Əvvəlcə `Cari parametrlər: Sürətli rejim (TRIMEXTENDMODE 1), kənarlar: Uzatma yoxdur, sürükləmək yol çəkir` çap edir. Sürətli rejimdə hər görünən obyekt kəsici kənardır və heç nə keçmədiyi obyekt silinir; Standart rejimdə əvvəlcə `Kəsici kənarları seçin (Enter = hər obyekt)` soruşur və yalnız onlarda kəsir.

- `Kəsiləcək və ya uzadılacaq obyekti seçin, ya da Shift ilə seçin [Kəsici kənarlar/Hasar/Kəsişmə/Rejim/Kənar/Sil (R)/Geri qaytar]`, təkrarlanır: çıxarılacaq parçaya klik edin (göstərici üzərində durduqca boz və nöqtəli görünür), bir neçə parça üzərində yol çəkin (hamısı bir addımda gedir), ya da aralarında hasar üçün iki boş yerə klik edin. {{key:Shift}} əvəzinə uzadır. `T` kəsici kənarları seçir (Standart rejim), `F` hasar nöqtələri soruşur, `C` iki pəncərə küncü (qismən içində olan parçalar gedir), `O` `Kəsmə rejimi seçimini daxil edin [Sürətli/Standart]` soruşur, `E` `Nəzərdə tutulan kənar uzatma rejimini daxil edin [Uzat/Uzatma yoxdur]` (EDGEMODE), `R` seçdiyiniz obyektləri silir, `U` son seçimi və ya sürüklənməni geri qaytarır. Enter bitirir. Bax [Kəsmək və uzatmaq](topic:trim-and-extend).

- Ştrixlamaya klik onu kəsir: kəsici kənarlar ştrixlanmış sahəni bölür və klik etdiyiniz parça götürülür (oradakı çəkilmiş kontur qalmır). Ştrixlama öz naxışını və ya qradiyentini saxlayır; sərhədinə bağlı olan ştrixlama sonra bağlı deyil, çünki onu artıq doldurmur. Kəsici kənar ştrixlamanı orada bölmədikdə, klik ştrixlamanın xaricində olduqda və heç nə qalmadıqda (bunun üçün {{cmd:ERASE}} istifadə edin) bunu deyir. Sürüklənən yol və ya hasar ştrixlamaları kəsmir.

### EXTEND

Ləqəb: `EX`. TRIM-in əksi: `Uzadılacaq və ya kəsiləcək obyekti seçin, ya da Shift ilə seçin [Sərhəd kənarları/Hasar/Kəsişmə/Rejim/Kənar/Geri qaytar]`. Klik ona ən yaxın ucu növbəti sərhədə qədər uzadır; sürüklənən yol və ya hasar kəsdiyi hər obyekti uzadır; {{key:Shift}} kəsir. `B` sərhəd kənarlarını seçir (Standart rejim). Rejim və Kənar TRIM ilə ortaqdır.

### LINKVIEWS

Ləqəb: `SYNCVIEWS`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Panellərin görünüşlərini bağla}}, və ya çertyoj sekmələrindəki bağlantı ikonu. `Panellərin görünüşlərini bağlayın [ON/OFF]` (Enter digər vəziyyəti seçir): açıq olduqda aktiv paneldə sürüşdürmə və ya yaxınlaşdırma eyni tipli məkanı göstərən hər paneli hərəkət etdirir. Bax [Ekranı bölün](topic:split-screen).

### OPENIN3D

Ləqəb yoxdur; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:ModelCraft-da aç}}, 3D modelləşdirmə tətbiqi təhvil verilmiş çertyojı qəbul etdikdə. Onu orada yeni sekmədə DWG kimi açır (heç nə yüklənmir). Brauzer sekmesini bloklasa, bunu deyir.

### LASSOMODE

`LASSOMODE üçün yeni dəyəri daxil edin (1 = lasso, 0 = düzbucaqlı)`: boş yerdə basıb sürüklədikdə nə çəkildiyi. Parametrlər › CadCraft › Seçmək üçün sürükləmək ilə eynidir. Bax [Lasso ilə seçmə](topic:lasso-selection).

### FILLET

Ləqəb: `F`. Xətlər, qövslər, çevrələr və polixətlər. Əvvəlcə `Cari parametrlər: Rejim = TRIM, Radius = 0` çap edir.

- `Birinci obyekti seçin [Geri qaytar/Polixətt/Radius/Kəs/Çox]`
  - `R` `Doldurma radiusunu göstərin <son>` soruşur. `T` `Kəsmə rejimi seçimini daxil edin [Kəs/Kəsmə yoxdur]` soruşur: Kəsmə yoxdur ilə obyektlər olduğu kimi qalır və yalnız qövs əlavə olunur.
  - `M` Enter-ə qədər daha çox künc üçün komandanı davam etdirir; `U` komandadan çıxmadan son künci geri götürür.
  - `P` `2D polixətt seçin [Radius]` soruşur və iki düz parçanın görüşdüyü hər küncü yuvarlaqlaşdırır. Artıq olan doldurmalar yeni radiusla əvəz olunur; radius 0 onları çıxarır. Tərəfləri radius üçün çox qısa olan küncləri qalır və sayılır.
- `İkinci obyekti seçin və ya küncü tətbiq etmək üçün Shift ilə seçin [Radius]`. Radiusdan asılı olmayaraq kəskin künc üçün klik edərkən {{key:Shift}} saxlayın.

Saxlamaq istədiyiniz hissədə hər obyektə klik edin. Görüşməyən iki xətt uzadılır. Iki paralel xətt arasındakı boşluğu yarım dairə ilə doldurur, birinci xəttin klikə ən yaxın ucunda. Çevrə heç vaxt kəsilmir. Eyni polixəttin iki bitişik parçası polixəttin içində qövs alır; polixətt və başqa obyekt, kəsik polixəttin birinci və ya son parçasında düşdükdə işləyir.

### CHAMFER

Ləqəb: `CHA`. Xətlər və polixəttlərin düz parçaları. Əvvəlcə cari məsafələri (və ya uzunluq və bucağı) çap edir.

- `Birinci xətti seçin [Geri qaytar/Polixətt/Məsafə/Bucaq/Kəs/Üsul (E)/Çox]`
  - `M` `Birinci pazlama məsafəsini daxil edin <son>` və `İkinci pazlama məsafəsini daxil edin <birinci>`: birinci, seçdiyiniz birinci xəttdən, ikincisi digərindən kəsilir.
  - `B` (Bucaq) `Birinci xətt üzərində pazlama uzunluğunu göstərin` və `Birinci xəttdən pazlama bucağını göstərin` soruşur.
  - `E` (Üsul) növbəti pazlamada iki üsuldan hansının istifadə olunacağını seçir. `T`, `M`, `U` və `P` {{cmd:FILLET}}-dəki kimi işləyir.
- `İkinci xətti seçin və ya küncü tətbiq etmək üçün Shift ilə seçin [Məsafə/Bucaq/Üsul]`. Kəskin künc üçün {{key:Shift}}+klik.

Xəttdən uzun məsafə rədd olunur (`Məsafə çox böyükdür.`).

### BREAK və BREAKATPOINT

Ləqəb: `BR`. `Obyekti seçin` (klik etdiyiniz yer birinci nöqtədir), `İkinci kəsik nöqtəsini göstərin [Birinci nöqtə]`; `F` `Birinci kəsik nöqtəsini göstərin` və `İkinci kəsik nöqtəsini göstərin` soruşur. Aralarındakı hissə gedir; çevrədə birinci nöqtədən saat əqrabının əksinə. BREAKATPOINT `Kəsik nöqtəsini göstərin` soruşur və obyekti orada ikiyə bölür (çevrə deyil).

### LENGTHEN

Ləqəb: `LEN`. `Ölçüləcək obyekti seçin [Dəyişmə (DE)/Faiz (P)/Cəm (T)/Dinamik (DY)]`: klik `Cari uzunluğu` (və qövsün daxili bucağını) çap edir və yenidən soruşur. `DE` `Dəyişmə uzunluğunu daxil edin (mənfi qısaldır) [Bucaq]` soruşur, `P` `Faiz uzunluğunu daxil edin`, `T` `Ümumi uzunluğu göstərin [Bucaq]`, `DY` sürükləyir. Sonra `Dəyişdiriləcək obyekti seçin [Geri qaytar]`, təkrarlanır: klikə ən yaxın uc hərəkət edir. Xətlər, qövslər və açıq polixətlər.

### JOIN

Ləqəb: `J`. `Birləşdiriləcək obyektləri seçin`. Uc-uca gələn xətlər, qövslər və açıq polixətlər polixətt olur (zəncir bağlandıqda bağlı); eyni xətt üzərindəki xətlər bir xətt olur; eyni çevrənin qövsləri bir qövs və ya çevrə olur. Tarixçə neçə obyektin birləşdiyini və neçəsinin birləşmədiyini deyir.

### MATCHPROP

Ləqəb: `MA`, `PAINTER`. `Mənbə obyektini seçin`, sonra `Təyinat obyektlərini seçin [Parametrlər]` və {{key:Enter}}. Qat və rəngi kopyalayır, eyni növ obyektlər arasında mətn hündürlüyü və enini, ölçü ölçülərini və ya ştrixlama naxışını. `S` `Xassəni yandırın və ya söndürün [Rəng/Qat/Mətn/Ölçü/Ştrixlama]` soruşur, {{key:Enter}}-ə qədər təkrarlanır; seçim sessiya üçün yadda qalır.

### EXPLODE

Ləqəb: `X`. Polixətlər xətlərə və qövslərə çevrilir, blok istinadları öz obyektlərinə, ölçülər xətlərə, ox uclarına və mətnə. Redaktə oluna bilən massiv ({{cmd:ARRAYEDIT}}) öz obyektlərinin adi surətlərinə çevrilir.

- `Obyektləri seçin`

### GROUP

Ləqəb: `G`. {{cmd:GROUP}} seçilmiş obyektlərə onların paylaşdığı ad verir. Obyektləri seçin, sonra ad yazın (boşluq yox; `?` qrupları sadalayır; Enter adsız qrup yaradır) və adlanmış qrup üçün istəyə görə təsvir. Bundan sonra onlardan birinə klik və ya bir obyekti tutan pəncərə hamısını seçir, beləliklə birlikdə hərəkət edir, surət çıxarılır və silinir; hər obyekt yenə öz obyektidir. Obyekt bir neçə qrupda ola bilər. Bütün qrupun surəti yeni adsız qrupdur; bir üzvün surəti tək başına qrupa qoşulur. Qruplar yaradıldıqları məkana (model və ya vərəq) aiddir. DWG və ya DXF kimi saxladıqda və CadCraft-da yenidən açdıqda saxlanılır; DXF 2000 faylları onları digər proqramlar üçün qrup obyektləri kimi də daşıyır, və başqa proqramda yaradılmış qruplar DXF və ya DWG açıldıqda oxunur.

### UNGROUP

Ləqəb yoxdur. {{cmd:UNGROUP}} qrupları ayırır: qrupların obyektlərini seçin (onların olduğu hər qrup ayrılır) və ya `Ad` yazıb qrupun adını. Obyektlər çertyojda qalır. Bir geri alma addımı qrupları geri qaytarır.

### GROUPEDIT

{{cmd:GROUPEDIT}} bir qrupu dəyişir. Onun obyektlərindən birini seçin, ya da `Ad` və onun adını yazın; artıq seçilmiş qrup olduğu kimi qəbul olunur. Sonra: `Əlavə et` (obyektlər birbirinin ardınca seçilir, qrup-qrup yox), `Çıxar`, qrupun adını dəyişmək (`REName`), `Təsvir` dəyişmək, ya da `Seçilə bilən` təyin etmək (obyektə klik bütün qrupu seçirmi). `eXit` və ya Enter bitirir. Heç bir obyekti qalmayan qrup yox olur.

### PICKSTYLE

- `Qrup seçimi: 0 klik bir obyekti seçir, 1 bütün qrupu`: `1` (başlanğıc) qruplanmış obyektə klik və ya pəncərə bütün qrupu seçir; `0` ilə tək obyektlər, beləliklə üzvlərdən birini redaktə edə bilərsiniz. Bu sessiya üçün saxlanılır.

## Buferi

CadCraft-ın öz buferi: çertyoj daxilində, çertyojlar arasında və bu brauzerdə CadCraft sekmələri arasında işləyir. Bax [Kopyalayın, yapışdırın və dublikat edin](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, və ya {{ui:Redaktə}} qrupunda {{ui:Kopyala}}. Obyektləri, istifadə etdikləri bloklar və qatlarla birlikdə buferə kopyalayır. Obyektlər seçilmiş qalır.

- `Kopyalanacaq obyektləri seçin` (obyektlər artıq seçilibsə keçilir)

### CUTCLIP

{{key:Mod+X}}, və ya {{ui:Daha çox}} menyusunda {{ui:Kəs}}. Obyektləri buferə kopyalayır, sonra silir (bir geri alma addımı).

- `Kəsiləcək obyektləri seçin` (obyektlər artıq seçilibsə keçilir)

### COPYBASE

Seçdiyiniz baza nöqtəsi ilə obyektləri buferə kopyalayır; yapışdırdıqda həmin nöqtə yerləşir.

- `Baza nöqtəsini göstərin`
- `Kopyalanacaq obyektləri seçin`

### PASTECLIP

{{key:Mod+V}}, və ya {{ui:Redaktə}} qrupunda {{ui:Yapışdır}}. Surət kursoru izləyir, öz genişləmələrinin sol aşağı küncündən asılı olaraq (və ya mərkəzindən, ya da `COPYBASE` nöqtəsindən; bax [CadCraft parametrləri](topic:settings)).

- `Daxiletmə nöqtəsini göstərin`

Yapışdırılmış obyektlər seçilmiş qalır. Çertyojda eyni adla artıq blok olduğu zaman, bu çertyojun təyinatı saxlanılır.

MarkupCraft-da kopyalanmış sahə CadCraft-ın kopyalandığından yenidirsə (və altı saatdan azdırsa), {{key:Mod+V}} və `PASTECLIP` onun əvəzinə həmin sahəni yapışdırır: bax `PASTEAREA`.

### PASTEAREA

Ləqəb: `PAREA`. {{ui:Daha çox}} menyusunda {{ui:Kopyalanmış sahəni yapışdır}}. MarkupCraft-da {{ui:Sahəni kopyala}} ilə kopyalanmış sahəni düzgün ölçüdə şəkil kimi yapışdırır. Bax [Çertyojda şəkillər](topic:pictures).

- `Kopyalanmış sahənin sol aşağı küncünü göstərin`
- `Kağız ölçüsünü bu qədər miqyasla vurun (1:100 vərəq üçün 100; Nöqtələr: üzərində iki nöqtə və onların həqiqi məsafəsi) [Nöqtələr] <1>` (yalnız vərəqdə çertyoj miqyası yoxdursa): ədəd, Enter kağız ölçüsü üçün, ya da `P`, sonra `Yapışdırılmış sahədə birinci nöqtəni göstərin`, `Yapışdırılmış sahədə ikinci nöqtəni göstərin` və onların həqiqi məsafəsi.

### PASTEORIG

{{key:Mod+Shift+V}}, və ya {{ui:Daha çox}} menyusunda {{ui:Yerində yapışdır}}. Obyektlərin kopyalandığı koordinatlarda yapışdırır. Heç nə soruşmur.

### DUPLICATE

Ləqəb: `DUP`. {{key:Mod+D}}, və ya {{ui:Daha çox}} menyusunda {{ui:Dublikat et və köçür}}. Obyektlərin surəti olduğu yerdən göstərici ilə hərəkət edir; {{key:Esc}} heç nə qoymur. Buferdən istifadə etmir.

- `Dublikat ediləcək obyektləri seçin` (obyektlər artıq seçilibsə keçilir)
- `Surətin hara gedəcəyini göstərin (Esc heç nə qoymur)`: klik, nöqtə yazın, `@dx,dy` (göstəricinin olduğu yerdən), ya da kursora doğru məsafə.

### SELECT

Aşağıdakı bütün seçimlərlə `Obyektləri seçin` soruşur və seçdiyiniz şeyi növbəti komanda üçün, ya da sonra `P` üçün seçilmiş saxlayır.

### QSELECT

Ləqəb: `QS`. Brauzerdə {{ui:Sürətli seçmə}} dialoqu (bax [Obyektləri seçin](topic:select-objects#select-by-a-rule-quick-select)). Onsuz komanda sətri `Obyekt növünü daxil edin`, `Xassəni daxil edin`, `Operatoru daxil edin [=/<>/>/</*/Hamısını seç] <=>` və `Dəyəri daxil edin` soruşur. Uyğunluqlar seçim olur.

### SELECTSIMILAR

Ləqəb: `SIM`. `Obyektləri seçin [Parametrlər]` (və ya cari seçim): eyni tipli, eyni qatda və rəngdə (və blok adı, ştrixlama naxışı ilə) olan hər obyekti seçir. `SE` `Xassəni yandırın və ya söndürün [Qat/Rəng/Ad/Naxış/Hündürlük]` soruşur, {{key:Enter}}-ə qədər təkrarlanır.

### FIND

Ləqəb yoxdur; və ya {{ui:Redaktə}} › {{ui:Daha çox}} › {{ui:Tap və əvəz et}}. Brauzerdə {{ui:Tap və əvəz et}} dialoqu (bax [Mətn və etiketlər əlavə edin](topic:text#find-and-replace-words)). Onsuz: `Tapılacaq mətni daxil edin`, sonra `Əvəz edən mətni daxil edin (Enter: tapılanı seç)`. Mətndə, atribut dəyərlərində və ölçü mətnində açıq sekmədə və ya seçimdə axtarır.

### SELECTALL və DESELECT

`SELECTALL` (ləqəb `AI_SELALL`, {{key:Mod+A}}) açıq sekmədə redaktə edə biləcəyiniz hər obyekti seçir. `DESELECT` (ləqəblər `AI_DESELECT`, `SELECTNONE`; və ya {{key:Esc}}) seçimi təmizləyir.

## Ölçülər

### DIMLINEAR

Ləqəb: `DLI`, `DIMLIN`. Üfüqi və ya şaquli məsafə.

- `Birinci uzantı xətti başlanğıcını göstərin [Obyekt seç]` (Enter və ya `S`: `Ölçüləcək obyekti seçin`, sonra xətt, qövs, çevrə və ya polixətt parçasına klik edin)
- `İkinci uzantı xətti başlanğıcını göstərin`
- `Ölçü xəttinin yerini göstərin [Mətn/Üfüqi/Şaquli/Fırlanmış]`. `M` mətn soruşur (`<>` ölçülmüş dəyərdir), `Ü` və `Ş` istiqaməti sabitləyir, `F` `Ölçü xəttinin bucağını göstərin <0>` soruşur.

### DIMALIGNED

Ləqəb: `DAL`, `DIMALI`. İki nöqtə arasında həqiqi məsafə.

- Başlanğıclar {{cmd:DIMLINEAR}}-dəki kimi, sonra `Ölçü xəttinin yerini göstərin [Mətn]`.

### DIMANGULAR

Ləqəb: `DAN`, `DIMANG`.

- `Qövs, çevrə və ya xətt seçin, ya da təpə üçün Enter`
- Qövs: onun bucağı. Çevrə: `İkinci bucaq ucunu göstərin`. Xətt: `İkinci xətti seçin`. Enter: `Bucağın təpəsini göstərin`, `Birinci bucaq ucunu göstərin`, `İkinci bucaq ucunu göstərin`.
- `Ölçü xəttinin yerini göstərin [Mətn]`: ölçmək üçün bucağın içinə klik edin.

### DIMRADIUS və DIMDIAMETER

Ləqəb: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Qövsü və ya çevrəni seçin`, sonra `Ölçü xəttinin yerini göstərin [Mətn]`.

### DIMCONTINUE

Ləqəb: `DCO`, `DIMCONT`. Son xətti və ya düzxətli ölçüdən davam edir (və ya `Xətti və ya düzxətli ölçü seçin` soruşur).

- `İkinci uzantı xətti başlanğıcını göstərin [Geri qaytar]`, Enter-ə qədər təkrarlanır.

### DIMBASELINE

Ləqəb: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} kimi, lakin hər ölçü birinci başlanğıcdan başlayır və daha uzağa yığılır.

### DIMORDINATE

Ləqəb: `DOR`, `DIMORD`. `Xüsusiyyət yerini göstərin`, sonra `Qulağın son nöqtəsini göstərin [Xdatum/Ydatum/Mətn]`. Xüsusiyyətin UCS başlanğıcından X və ya Y boyunca məsafəsini qulaqla yazır: əsasən yuxarı və ya aşağı gedən qulaq X oxunur, yan tərəfə gedən Y oxunur; `Xdatum` və `Ydatum` hansının olduğunu sabitləyir. Əvvəlcə başlanğıcı {{cmd:UCS}} ilə təyin edin (olmadıqda çertyojun 0,0 nöqtəsidir). Tutacaqlar xüsusiyyəti, başlanğıcı və qulağın sonunu hərəkət etdirir, dəyər izləyir. DWG və DXF-də həqiqi ordinat ölçüsü kimi saxlanılır. Qulağın sonunun xüsusiyyətin özü üzərində olmasını rədd edir.

### DIMARC

Ləqəb: `DAR`. `Qövsü və ya polixətt qövs parçasını seçin`, sonra `Qövs uzunluğu ölçüsünün yerini göstərin [Mətn]`. Qövs boyunca ölçür (vətər üzrə deyil) və dəyərdən əvvəl qövs simvolunu yazır. Tam çevrəni, xətti və ya düz polixətt parçasını rədd edir. DWG onu qövs uzunluğu ölçüsü kimi saxlayır; DXF onu mətn kimi uzunluqla bucaq ölçüsü kimi saxlayır və CadCraft onu yenidən qövs uzunluğu ölçüsü kimi açır.

### DIMJOGGED

Ləqəb: `DJO`, `JOG`. `Qövsü və ya çevrəni seçin`, `Mərkəz yerinin dəyişdirilməsini göstərin`, `Sınma yerini göstərin`. Mərkəzi uzaqda və ya vərəqdən kənarda olan əyri üçün radius ölçüsü: ölçü xətti mərkəz əvəzinə verdiyiniz nöqtədən başlayır, içində sınma ilə, və yenə həqiqi radiusu yazır. DWG onu sınmış radius ölçüsü kimi saxlayır; DXF radius ölçüsü kimi saxlayır və CadCraft onu yenidən sınmış açır.

### DIMJOGLINE

Ləqəb: `DJL`. `Sınma əlavə etmək üçün ölçünü seçin [Sil]`, sonra `Sınma yerini göstərin (və ya Enter basın)`. Xətti və ya düzxətli ölçünün xəttinə sınma simvolu qoyur ki, məsafənin miqyasa uyğun çəkilmədiyi göstərilsin; dəyər dəyişmir. `Sil` onu çıxarır. Digər növ ölçüləri rədd edir.

### QDIM

Heç bir ləqəbi yoxdur. `Ölçüləcək həndəsəni seçin`, sonra `Ölçü xəttinin mövqeyini göstərin [Davamlı/Pilləli/Baza/Ordinat/Radius/Diametr/datumNöqtə]`. Bir addımda bir neçə obyekti ölçür: xətt və polixətt parçalarının uclarından, çevrə və qövslərin mərkəzlərindən, nöqtələrdən və blok istinadlarından. Obyektlərin üstündə və ya altında olan mövqe arası ölçür, yanında olan isə yuxarı ölçür. `Davamlı` nöqtələri zəncirləyir, `Baza` hamısını birincidən ölçür, `Pilləli` ortadan cütləri iç-içə düzür, `Ordinat` hər nöqtəyə datumdan məsafəsini verir (`datumNöqtə` yeni datum seçir), `Radius` və `Diametr` seçilmiş hər çevrə və qövsü ölçür. Rejim yadda qalır. Yaratdığı hər şey bir geri alma addımıdır. İki nöqtədən az olduqda və ya Radius və Diametr üçün qövs və çevrə olmadıqda bunu deyir.

### DIMBREAK

Ləqəb: `DBREAK`. `Kəsik əlavə etmək və ya silmək üçün ölçüləri seçin`, sonra `Başqa obyektlər kəsişən yerdə kəsin [Avtomatik/Əllə/Sil] <Avtomatik>`. `Avtomatik` başqa obyektin ölçü və uzantı xətlərini kəsdiyi hər yerdə boşluq buraxır və həmin obyektlər və ya ölçü hərəkət etdikdə boşluqları yenidən hesablayır. `Əllə` (bir ölçü üçün) iki nöqtə soruşur və aralarında boşluq buraxır. `Sil` bütün boşluqları çıxarır. Boşluq ölçü mətninin hündürlüyünün 1,5 qatıdır.

### DIMSPACE

Heç bir ləqəbi yoxdur. `Baza ölçünü seçin`, `Aralanacaq ölçüləri seçin`, `Aralıq dəyərini və ya Avtomatik daxil edin <Avtomatik>`. Paralel xətti və düzxətli ölçülərin (və ya eyni təpədən bucaqlı ölçülərin) ölçü xətlərini köçürür ki, baza ölçüdən hesablanaraq bərabər məsafədə olsunlar, hər biri öz tərəfində. `0` onları baza ilə düzləşdirir; `Avtomatik` mətn hündürlüyünün iki qatıdır. Baza ilə paralel olmayan ölçülər olduğu kimi qalır.

### DIMINSPECT

Heç bir ləqəbi yoxdur. `Ölçüləri seçin`, `Yoxlama çərçivəsinin forması [Dairəvi/Bucaqlı/Heç biri/sil] <Dairəvi>`, `Etiketi daxil edin`, `Yoxlama dərəcəsini daxil edin <100%>`. Dəyər ətrafında çərçivə çəkir, qabağında etiket və sonunda yoxlama dərəcəsi ilə. `sil` çərçivəni çıxarır. Tolerantlıq mətni dəyərlə qalır.

### DIMOVERRIDE

Ləqəb: `DOV`, `DIMOVER`. `Üstələmək üçün ölçü dəyişəninin adını daxil edin və ya Təmizlə`, `Yeni dəyər daxil edin …`, Enter-ə qədər yenidən, sonra `Ölçüləri seçin`. Bu parametrləri yalnız seçilmiş ölçülərdə dəyişir; ölçü üslubu dəyişmir. Ədəd və ya açar olan dəyişənləri qəbul edir (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Təmizlə` seçilmiş ölçüləri üslublarına qaytarır. Belə dəyişən olmayan adı və qəbul edə bilmədiyi dəyəri rədd edir.

### DIMREASSOCIATE

Ləqəb: `DRE`, `DIMREASSOC`. `Ölçüləri seçin`, sonra hər biri üçün onun uzantı xətti başlanğıcları (`Obyektdəki birinci uzantı xətti başlanğıcını göstərin`: xəttin ucuna və ya ortasına, polixətt küncünə, mərkəzə tutun; Enter həmin nöqtəni sərbəst saxlayır), və ya radius, diametr, sınmış radius və ya qövs uzunluğu ölçüsü üçün `Qövsü və ya çevrəni seçin`. Ölçü sonra həmin obyektlərə bağlanır: onlar hərəkət edib ölçüsünü dəyişdikdə eyni geri alma addımında izləyir və yenidən ölçür. Bağlı nöqtəni əllə köçürmək və ya obyekti silmək bağlantını bitirir. Bağlantı DWG və DXF 2000-də CadCraft-ın öz məlumatları kimi saxlanılır; digər proqramlar adi ölçü görür.

### DIMDISASSOCIATE

Ləqəb: `DDA`, `DIMDISASSOC`. `Ölçüləri seçin`. Onları bağlı olduqları obyektlərdən azad edir; heç nə hərəkət etmir.

### CENTERMARK

Ləqəb: `CM`, `DIMCENTER`, `DCE`. `Mərkəz nişanı əlavə etmək üçün çevrə və ya qövs seçin`, Enter-ə qədər yenidən. Mərkəzdə xaç və əyrinin xaricinə qədər dörd mərkəz xətti çəkir (xətt tipi CENTER), cari qatda adi xətlər kimi; cari ölçü parametrlərinin ox ölçüsündən və ümumi miqyasından ölçülür, UCS ilə fırladılır. Çevrə hərəkət etsə, onları izləmir.

### CENTERLINE

Ləqəb: `CL`. `Birinci xətti seçin`, `İkinci xətti seçin`. İki xətt arasında onların yarısında xətt çəkir (görüşdükdə bissektrisa boyunca), onlardan bir az uzun, CENTER xətt tipində. Adi xəttdir: iki xətti izləmir.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Heç bir ləqəbi yoxdur. Hər biri `Yeni dəyəri daxil edin … <cari>` soruşur və **yeni** ölçülər üçün o ölçünü təyin edir: ümumi miqyas, mətn hündürlüyü, ox ölçüsü, onluq rəqəmlər (8-ə qədər), mətn ətrafında boşluq, ölçü xəttindən kənar uzantı, başlanğıcdan ofset. Bax [Ölçü ölçülərini təyin edin](topic:dimension-settings).

### DIMLUNIT

Ölçü parametri: yalnız yeni ölçülərin formatı (1 elmi, 2 onluq, 3 mühəndislik, 4 memarlıq, 5 kəsr).

### DIMSTYLE və -DIMSTYLE

Ləqəb: `DST`, `DDIM`, `D`. Ölçü üslubu meneceri: {{ui:Cari təyin et}}, {{ui:Yeni…}}, {{ui:Dəyişdir…}}, {{ui:Adını dəyiş…}}, {{ui:Sil}}, {{ui:Müqayisə et…}}, {{ui:Seçilənlərə tətbiq et}}. Komanda sətrində `-DIMSTYLE`: `Ölçü üslubu [Bərpa/Saxla/Sil/Tətbiq et/Müqayisə et/adını dəyiş (N)/Siyahı]`. Bax [Ölçü ölçülərini təyin edin](topic:dimension-settings#named-dimension-styles).

### DIMEDIT və DIMTEDIT

`DIMEDIT` (`DED`): `Ölçü redaktəsi [Əsas/Yeni/Fırlat/Maili] <Əsas>`, sonra ölçülər (və ya artıq seçilmiş olanlar). Yeni mətn soruşur (`<>` = ölçülmüş dəyər); Fırlat bucaq üçün (0 mətni geri qoyur); Maili uzantı xətlərinin X oxundan bucağı üçün (Enter = yoxdur; yalnız xətti və düzxətli ölçülər). `DIMTEDIT` (`DIMTED`): `Ölçü mətni [Sol/Sağ/Mərkəz/Əsas/Bucaq] <Mərkəz>`. Bax [Ölçü ölçülərini təyin edin](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Ləqəb: `DTU`. `Yeni ölçülərin mətnində vahidlər [Çertyoj vahidləri/mm/sm/m/km]`, və ya seçilmiş ölçülərlə `Seçilmiş ölçülərin mətnində vahidlər`. Ölçülmüş uzunluğu həmin vahiddə yazır, vahid sonra (DIMLFAC və DIMPOST şəkilçisi ilə); `D` çertyoj vahidlərinə qaytarır. Bax [Ölçülər mm, sm, m və ya km-də](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Ləqəb: `RC`. `Arc length: … Type: …` çap edir, sonra `Birinci nöqtəni göstərin [Qövs uzunluğu/Obyekt/Düzbucaqlı/Çoxbucaqlı/Sərbəst]`. Düzbucaqlı `Əks küncü göstərin` soruşur; Çoxbucaqlı `Növbəti nöqtəni göstərin (Enter buludu bağlayır) [Geri qaytar]`; Sərbəst klikə və ya {{key:Enter}}-ə qədər göstəricini izləyir; `O` `Obyekti seçin` və `Əks istiqamət? [Bəli/Xeyr] <X>` soruşur və obyekti buluda çevirir. `A` `Hər qövsün uzunluğunu göstərin` soruşur. `R`, `P` və `F` növbəti bulud üçün növü seçir. Nəticə qövslərdən bağlı polixəttdir.

### MLEADER

Ləqəb: `MLD`; və ya {{ui:İstinad}}. `Qulağın ox ucu yerini göstərin [Ox ölçüsü/Düşmə məsafəsi/Blok]`, `Qulağın düşmə yerini göstərin`, sonra mətn yerində qutuda (və ya onsuz, `Mətni daxil edin (boş sətir bitirir)`). `Blok` əvvəlcə blok adı soruşur və çoxqulaq mətn əvəzinə həmin bloku göstərir. Daha çox qulaq xətti üçün: {{cmd:MLEADEREDIT}}. DWG-də həqiqi çoxqulaq kimi saxlanılır; DXF çəkdiyi xətləri, ox ucunu və mətni saxlayır.

### MLEADEREDIT

Ləqəb: `MLE`. `Çoxqulağı seçin`, sonra `Qulağın ox ucu yerini göstərin [Qulaqları sil/Blok məzmunu/Mətn məzmunu]`: hər nöqta yeni ox ucundan eyni düşmə yerinə qulaq xətti əlavə edir, Enter-ə qədər. `Qulaqları sil` sonra klik etdiyiniz qulaq xəttini çıxarır (çoxqulaq ən azı birini saxlayır). `Blok məzmunu` blok adı soruşur və mətn əvəzinə həmin bloku göstərir (onun atributları soruşulur); `Mətn məzmunu` mətni geri qoyur. Hər qulaq xəttinin öz tutacağı var. DWG hər qulaq xəttini və bloku bir çoxqulaqda saxlayır.

### MLEADERALIGN

Ləqəb: `MLA`. `Çoxqulaqları seçin`, sonra `Düzləşdiriləcək çoxqulağı seçin [Paylaşdır/Aralıq/Cari aralığı istifadə et]` və `İstiqaməti göstərin`. Digər çoxqulaqların düşmə yerlərini (və onların mətnini və ya blokunu) seçilmiş birinin düşmə yerindən keçən xəttə həmin istiqamətdə köçürür; ox uclarında qalırlar. `Aralıq` onları bərabər məsafədə də qoyur; `Paylaşdır` iki nöqtə soruşur və onları aralarında bərabər yayır. Ən azı iki çoxqulaq lazımdır.

### MLEADERCOLLECT

Ləqəb: `MLC`. `Çoxqulaqları seçin`, sonra `Yığılmış çoxqulağın yerini göstərin [Şaquli/Üfüqi]` (Enter birincinin yerini saxlayır). Bir neçəsindən bir çoxqulaq yaradır: blok məzmunu hamısını yan-yana və ya birinin altında saxlayan yeni blokda; mətn məzmunu hər biri üçün bir sətirlə bir qeyd olur. Birinci çoxqulaq öz qulaq xətlərini saxlayır; digərləri silinir. Mətn və blok məzmununun qarışığını rədd edir.

### TABLE

Ləqəb: `TB`; və ya {{ui:Şərh}} › {{ui:Daha çox}} › {{ui:Cədvəl}}. Cədvəl yaradır: bir obyekt, onu köçürdüyünüz, surət çıxardığınız, fırlatdığınız, miqyaslandığınız və çap etdiyiniz kimi, xanaları məlumat kimi saxlanılır.

- `Məlumat sətirlərinin sayı və ya [Yapışdır/Fayl/Üslub] <3>`, sonra `Sütunların sayı <3>`, `Mətn hündürlüyü` və `Cədvəlin sol yuxarı küncü`. Cədvələ başlıq sətiri (bir birləşdirilmiş xana) və məlumat sətirlərinin üstündə başlıq sətiri əlavə olunur.
- `P`: buferdəki elektron cədvəl xanalarından cədvəl (xanalar arasında tabulyasiya ilə mətn). Buferdə belə xanalar olduqda {{key:Ctrl+V}} eyni işi görür, CadCraft-ın öz surəti yenisi olmadıqda (və ya CadCraft fərqləndirə bilmədikdə: sonra öz surətini yapışdırır və bunu deyir). `F`: `.csv` və ya tabulyasiya ilə ayrılmış fayldan cədvəl. Birinci sətir başlıq sətiri olur; sütunların enləri mətnə uyğunlaşır.
- `S`: bu cədvəl üçün cədvəl üslubunu seçin (bax {{cmd:TABLESTYLE}}).
- Tam olmayan sətir və ya sütun sayını və cədvəlin tutduğundan çox xananı rədd edir (2000 sətir, 200 sütun, 40000 xana).
- {{cmd:EXPLODE}} cədvəli xətlərə və mətnə çevirir. DWG kimi saxlanılan cədvəl digər proqramların redaktə edə biləcəyi həqiqi cədvəl obyektidir; DXF kimi saxlanılan onu çəkən blokdur və CadCraft onu yenidən cədvəl kimi açır.

### TABLEDIT

Ləqəb: `TABLEEDIT`, `TABEDIT`; və ya xanaya ikiklik. Cədvəli redaktə edir.

- `Yazmaq üçün xana seçin (bitirmək üçün Enter) və ya [Sətir/Sütun/Ölçü/Birləşdir/Ayır/Düzləşdir/Hündürlük/Növ/Təmizlə (CL)]`. Xanaya klik edin, ya da cədvəl seçilmişkən onun adını yazın (`B3`: B sütunu, 3 sətir; başlıq sətiri 1-ci sətirdir). Brauzerdə xananın üstündə qutu açılır: {{key:Enter}} mətni saxlayır, {{key:Tab}} növbəti xanaya keçir, {{key:Alt+Enter}} yeni sətir başladır, {{key:Esc}} xananı əvvəlki kimi qoyur.
- `=` ilə başlayan mətn düsturdur: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, mötərizələr və `sqrt` və `round` kimi funksiyalarla. Xana dəyəri göstərir; öz xanasını adlandıran, cədvəldən kənar xananı və ya ədədsiz xananı adlandıran düstur `####` göstərir və komanda sətri səbəbini deyir.
- `S`: sütunun eni və sətirin hündürlüyü. Sətir heç vaxt mətnin tələb etdiyindən aşağı olmur. Seçilmiş cədvəldə hər sütunun və sətirin kənarında tutacaq var.
- `M`: bir seçilmiş xanadan başqasına birləşdirin; `Ü`: ayırın. `A`: düzləşdirmə (`TL` sol yuxarı … `MC` orta mərkəz … `BR` sağ aşağı). `H`: bu xananın öz mətn hündürlüyü (0 = üslubun). `K`: sətri başlıq, başlıq sətiri və ya məlumat sətiri edin. `CL`: xananı təmizləyin.
- Kilidli qatdakı cədvəli, hər sətir və ya sütunu silməyi və cədvəlin kəsməsi olacaq birləşdirməni rədd edir.

### TABLESTYLE

Ləqəb: `TS`. Cədvəl üslublarını hər birini neçə cədvəlin istifadə etdiyi ilə sadalayır, sonra `Cədvəl üslubu: [Yeni/Təyin et/Redaktə et/Sil/Tətbiq et]`.

- Üslub başlıq, başlıq və məlumat sətirlərinin mətn hündürlüyünü və düzləşdirməsini, xana kənarlarını və hansı sərhədlərin çəkildiyini (xarici, sətirlər arasında, sütunlar arasında) saxlayır.
- `N` cari üslubdan yeni üslub yaradır və onu cari edir; `T` cari üslubu təyin edir (yeni cədvəllər onu alır); `R` birini redaktə edir: onu istifadə edən cədvəllər yenidən çəkilir; `A` seçilmiş cədvəllərə cari üslubu verir; `S` birini silir (Standart və cari olmayan, onu istifadə edən cədvəllər görünüşünü saxlayır).
- Üslublar çertyojla saxlanılır (DWG və DXF).

### TABLEEXPORT

Cədvəlin göstərdiyini CSV faylı kimi saxlayır (düstur öz dəyərini). `Cədvəl seçin` və ya əvvəlcə bir cədvəl seçin. `=`, `+`, `-` və ya `@` ilə başlayan mətn xanalarına əvvəlində `'` qoyulur ki, elektron cədvəl onları işlətməsin.

### TABLEPASTE

Ləqəb: `PASTETABLE`. Buferdəki elektron cədvəl xanalarından cədvəl yaradır, sonra sol yuxarı küncü soruşur. {{cmd:TABLE}} › `Yapışdır` ilə eynidir.

### DATALINK

Ləqəb: `DL`. `Məlumat əlaqəsi: [Yeni/Siyahı/Sil] <Yeni>`. `Y` CSV faylı soruşur, onun cədvəlini yerləşdirir və faylın adını yadda saxlayır; `S` əlaqələri faylı, ölçüsü, nə vaxt oxunduğu və neçə cədvəlin istifadə etdiyi ilə sadalayır; `S` (Sil) əlaqəni silir (cədvəlləri adi cədvəl kimi qalır).

### DATALINKUPDATE

Ləqəb: `DLU`. Məlumat əlaqəsinin faylını yenidən oxuyur və ona bağlı cədvəlləri yenidən doldurur (sətirlər və sütunlar faylla uyğunlaşmaq üçün əlavə olunur və ya silinir). Brauzer faylı özü aça bilmədiyi üçün faylı yenidən seçməyi xahiş edir. Bir neçə əlaqə olduqda hansının olduğunu soruşur.

### FIELD

Çertyoja sahə qoyur: özü hesablanan mətn. `Sahə: [Tarix/Fayl adı/Vərəq/Xassə/Obyekt/Düstur/Kod] <Tarix>`:

- `T`: indi və ya saxlanılmış, yaradılmış və ya çap edilmiş tarix, və format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: fayl adı, uzantı ilə və ya onsuz. `V`: vərəqin nömrəsi, başlığı və ya neçə vərəq olduğu. `X`: adla çertyoj xassəsi (bax {{cmd:DWGPROPS}}). `O`: obyekt seçin, sonra nə oxunacağı (sahə, uzunluq, perimetr, radius, diametr, qat, ad, x, y, mətn, fırlanma, rəng) və onluq rəqəmlər. `D`: düstur. `K`: mətn, kodlar olduğu kimi yazılmış, məsələn `Vərəq %<sheetnumber>% / %<sheetcount>%`.
- Sonra `Sahəni qoymaq üçün mətn, cədvəl xanası və ya atributlu blok seçin (Enter: yeni mətn)`: seçilmiş mətnə sahə mətnindən sonra əlavə olunur; cədvəl xanası da belə; blok istinadı hansı atributun olduğunu soruşur; {{key:Enter}} yeni mətn üçün hündürlük və nöqtə soruşur.
- Ekranda sahənin açıq boz fonu olur; çap və PDF-də heç vaxt olmur. Sahənin mətnini əllə üzərinə yazmaq sahəni bitirir. Hesablanmayan sahə `####` göstərir.
- Obyektin sahəsi obyekti CadCraft-ın obyektlərdə saxladığı açarla tapır (Parametrlər › CadCraft › Birləşdirməyə uyğun fayllar); açarlar söndürülmüşsə rədd edir.

### UPDATEFIELD

Ləqəb: `UPDATEFIELDS`. `Yenilənəcək sahələri olan obyektləri seçin (Enter: hər sahə) və ya [Parametrlər]`. `P` sahələrin özlüyündə nə vaxt yenilənəcəyini təyin edir: `A` açıq, `S` saxlama, `Ç` çap, `Y` yenidən qurma (başlanğıcda hamısı), və ya `HEÇ`.

### DWGPROPS

Ləqəb: `DRAWINGPROPS`. Çertyojun xassələrini sadalayır, sonra `Dəyişdir: [Başlıq/Mövzu/Müəllif/Şirkət/Açar sözlər/Şərhlər/Fərdi/Sil/Çıxış]`. İlk altısı {{ui:Çertyoj təfərrüatları}} panelində göstərilənlərdir; `F` öz adınızı və dəyərinizi əlavə edir, `S` birini silir. Sahələr onları oxuyur (`%<prop:title>%`, `%<prop:Client>%`) və dərhal izləyir. Daxili adlardan biri olan və ya `%`, `<`, `>`, dırnaq və ya tərs slaş ehtiva edən fərdi ad qəbul etmir.

## Parametrik

Bax [Çertyojun məhdudiyyətləri](topic:constraints) və [Parametrlər və tənlikləri istifadə edin](topic:parameters). Məhdudiyyətlər {{ui:Model}} sekmesində işləyir.

### GEOMCONSTRAINT və GC komandaları

Ləqəb `GCON`: `Məhdudiyyət növünü daxil edin [Üfüqi/Şaquli/Perpendikulyar/PArallel/Toxunan/Üst-üstə/CONsentrik/COLlinear/Simmetrik/Bərabər/Sabit] <Üfüqi>`, sonra həmin komandanın sorğuları.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Obyekti seçin [2Nöqtə] <2Nöqtə>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Birinci obyekti seçin`, `İkinci obyekti seçin` (ikinci hərəkət edir).
- {{cmd:GCCOINCIDENT}}: `Birinci nöqtəni seçin [Obyekt/Avtomatik məhdudlaşdır] <Obyekt>`, `İkinci nöqtəni seçin [Obyekt] <Obyekt>`.
- {{cmd:GCFIX}}: `Nöqtəni seçin [Obyekt] <Obyekt>`.
- {{cmd:GCSYMMETRIC}}: `Birinci obyekti seçin [2Nöqtə] <2Nöqtə>`, `İkinci obyekti seçin`, `Simmetriya xəttini seçin`.

### DIMCONSTRAINT və DC komandaları

Ləqəb `DCON`: `Çevriləcək assosiativ ölçünü seçin [Xətti/Üfüqi/Şaquli/Düzxətli/Bucaqlı/Radial/Diametr/Çevir] <Düzxətli>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Birinci məhdudiyyət nöqtəsini göstərin [Obyekt] <Obyekt>`, `İkinci məhdudiyyət nöqtəsini göstərin`, `Ölçü xəttinin yerini göstərin`, `Ölçü mətni <d1=40>` (ədəd, ifadə və ya `ad=ifadə`).
- {{cmd:DCALIGNED}}: yuxarıdakı kimi, `[Obyekt/Nöqtə və xətt/2Xətt]` ilə.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Qövsü və ya çevrəni seçin`. {{cmd:DCANGULAR}}: `Birinci xətti və ya qövsü seçin`, `İkinci xətti seçin`.
- {{cmd:DCCONVERT}}: `Çevriləcək ölçüləri seçin`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Obyektləri seçin [Parametrlər]`. `P` məsafə və bucaq tolerantlığını soruşur.
- {{cmd:DELCONSTRAINT}} (ləqəb `DELCON`): `Obyektləri seçin`; onların məhdudiyyətləri gedir.
- {{cmd:CONSTRAINTBAR}} (ləqəb `CBAR`): `Obyektləri seçin [Hamısını göstər/Hamısını gizlət]`, sonra `[Göstər/Gizlət]`.
- {{cmd:DCDISPLAY}}: `Seçim daxil edin [Göstər/Gizlət]`.

### PARAMETERS və -PARAMETERS

{{cmd:PARAMETERS}} (ləqəblər `PAR`, `PARAM`) {{ui:Parametrlər}} panelini açır. `-PARAMETERS`: `Seçim daxil edin [Yeni/Redaktə et/Adını dəyiş/Sil/?] <?>`.

### SWBOUT

Ləqəb `SWMACRO`. SolidWorks-də modeli bir qısıtlanmış eskiz kimi yenidən quran makro (.swb) yükləyir. Bax [Eskizləri digər hissə modelləşdiricilərinə və onlardan köçürün](topic:solidworks-sketches).

## Bloklar

### ANNOSCALE

Ləqəb: `CANNOSCALE`. Çertyojun şərh miqyasını və neçə anotativ obyekti olduğunu deyir, sonra `Yeni şərh miqyası`: `1:50`, `1:100`, `2:1`, çılpaq ədəd (`50` 1:50-dir) və ya çertyojun öz miqyaslarından birinin adını yazın. Hər anotativ mətn və ölçü yeni miqyasda eyni ölçüdə çap olunacaq şəkildə dəyişdirilir, bir geri alma addımında; anotativ olmayan obyektlər olduğu kimi qalır, yeni miqyası olmayan siyahısı olan obyekt də ({{cmd:OBJECTSCALE}}). Bax [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Ləqəb: `OBJSCALE`. `Anotativ obyektləri seçin`, sonra `Seçilmiş obyektlərin şərh miqyasları [Əlavə et/Sil/Cari miqyas/Siyahı/Çıxış (X)] <Əlavə et>`. Anotativ mətn və ölçü şərh miqyaslarının siyahısını saxlayır. `Əlavə et` və `Sil` miqyas soruşur (`1:50`, `2:1`, çılpaq ədəd və ya çertyojun öz miqyası adı); `Cari miqyas` çertyojun şərh miqyasını əlavə edir; `Siyahı` hər obyektin miqyaslarını çap edir. Obyektin siyahısında olan miqyası olan görünüş pəncərəsi obyekti həmin miqyasda kağız hündürlüyünü çap edəcək ölçüdə göstərir, ekranda və çaplarda. Son miqyas silinə bilməz. Anotativ olmayan obyektlər kənarda qalır: əvvəlcə Xassələrdə Anotativ-i yandırın. Siyahılar DWG və DXF-də CadCraft-ın öz məlumatları kimi saxlanılır. Bax [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Ləqəb: `ANNOALL`. `Anotativ obyektləri bütün miqyaslarda göstərin [ON/OFF]`. Açıq (çertyoj başladıqda belədir): anotativ obyekt siyahısında olmayan miqyasda görünüş pəncərəsində və ya modeldə də göstərilir, öz ölçüsündə. Söndürülmüşsə, orada göstərilmir və modeldə seçilə bilmir. Keçid bir geri alma addımıdır; faylda saxlanılmır.

### SCALELISTEDIT

Ləqəb: `SCALELIST`. `Miqyas siyahısı [Əlavə et/Redaktə et/Sil/Siyahı/Sıfırla]` Enter-ə qədər. Əlavə et: `Miqyas adı`, `Kağız vahidləri`, `Çertyoj vahidləri`. Redaktə et və Sil miqyasın adını soruşur. Çertyojun öz miqyasları görünüş pəncərəsi və çap miqyası siyahılarına əlavə olunur və çertyojla saxlanılır. Bax [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT və PEDIT

`SPLINE` (`SPL`): `Splaynın birinci nöqtəsi [Üsul/Obyekt] (Uyğunlaşdırma nöqtələri)`. Uyğunlaşdırma: əyrinin keçdiyi nöqtələr; `Bağla`, `Geri qaytar`, sonra `Başlanğıc toxunanı` və `Son toxunanı` (nöqtə və ya {{key:Enter}}). Üsul › Nəzarət təpələri dərəcə (1-dən 5-ə) soruşur və nəzarət çoxbucaqlısından çəkir. Obyekt polixəttləri təpələrindən keçən splaynlara çevirir. `SPLINEDIT` (`SPE`): `[Uyğunlaşdırma məlumatı/Təpəni redaktə et/polixətt kimi çevir/Aç və ya Bağla/Tərs/Geri qaytar/Çıxış (X)]`; Uyğunlaşdırma məlumatı `[Əlavə et/Sil/Hərəkət et/Təmizlə/Toxunanlar/Çıxış (X)]`; Təpəni redaktə et `[Nəzarət nöqtəsi əlavə et/Hərəkət et/Çəki/Çıxış (X)]`. `PEDIT` (`PE`): `[Bağla/Aç/Birləşdir/En/Uyğunlaşdır/Splayn/Düzləşdir/Xətt tipi yaratma/Tərs/Geri qaytar/Çıxış (X)]`, bir neçə obyekt üçün `M`; xətlər, qövslər və splaynlar əvvəlcə polixətt kimi təklif olunur. Bax [Splaynlar və polixətlər](topic:splines).

### BLOCK

Ləqəb: `B`, `BMAKE`.

- `Blok adını daxil edin`. Varsa: `"…" bloku artıq mövcuddur. Yenidən təyin edilsin? [Bəli/Xeyr] <X>`.
- `Daxiletmə baza nöqtəsini göstərin`
- `Obyektləri seçin`. Onlar yeni blokun bir istinadı ilə əvəz olunur.

### WBLOCK

Ləqəb: `W`, `-WBLOCK`. Blok, bir neçə obyekt və ya bütün çertyoju yeni DWG və ya DXF fayl kimi yazır. `WBLOCK mənbə [Blok/Bütün çertyoj/Obyektlər] <Obyektlər>`:

- **Obyektlər**: `Daxiletmə baza nöqtəsini göstərin` (yeni çertyojun başlanğıcı olur), `Obyektləri seçin`, sonra `Fayl formatı [DWG/DXF/R12 DXF]` və `Yeni çertyoj üçün fayl adı`, sonra `Obyektlərlə nə edilsin [Saxla/Bloka çevir/Sil]`. Çevir onları fayl adı ilə bir blokun bir istinadı ilə əvəz edir; Sil onları silir.
- **Blok**: `Yazılacaq blok`. Blokun öz obyektləri, baza nöqtəsi başlanğıc kimi, iç-içə bloklar daxil olmaqla.
- **Bütün çertyoj**: model fəzasındakı hər obyekt. Vərəqlər yazılmır; onları saxlayan surət üçün {{cmd:SAVEAS}} istifadə edin.

Yeni fayl yalnız obyektlərinin istifadə etdiyi qatları, xətt tiplərini, mətn və ölçü üslublarını, blokları və çertyojun vahidlərini saxlayır. DWG-nin versiyası {{cmd:SAVEAS}}-ın sonuncu istifadə etdiyidir. Brauzerdə fayl yüklənir; Studio-da saxlama dialoqu açılır.

### ATTDEF

Ləqəb: `ATT`, `DDATTDEF`, `-ATTDEF`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atributu təyin et}}. Rejimləri çap edir, sonra `Dəyişmək üçün seçim daxil edin (bitəndə Enter) [Görünməz/Sabit/Əvvəlcədən]`, `Atribut etiketinin adını daxil edin`, `Atribut sorğusunu daxil edin`, `Standart atribut dəyərini daxil edin` (sabit olduqda `Atribut dəyərini daxil edin`), `Mətnin başlanğıc nöqtəsini göstərin`, `Mətnin hündürlüyünü göstərin`, `Mətnin fırlanma bucağını göstərin`. {{cmd:BLOCK}} atribut təriflərini blokun içinə götürür.

### EATTEDIT və ATTEDIT

`EATTEDIT` (`DDATTE`, və ya atributlu istinada ikiklik; {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atributları redaktə et}}): `Atributlu blok istinadını seçin`, sonra {{ui:Atributları redaktə et}} dialoqu. `ATTEDIT` (`ATE`, `-ATTEDIT`): eyni istinad, sonra hər atribut üçün `<sorğu> (<ETİKET>) <dəyər>`; {{key:Enter}} dəyəri saxlayır. Bax [Atributlar](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Atributları hansı blokun istinadlarında yenilənsin [Ad/Seçim/Hamısı] <Seçim>`. Dəyərlər saxlanılır; yeni atributlar standart dəyərini alır, silinənlər gedir, yerləşmələr sıfırlanır.

### BATTMAN

{{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Atribut meneceri}}. Dialoq: blok, atributlar (etiket, sorğu, standart, rejimlər, sıra), {{ui:Istinadları yenilə (dəyərlər saxlanılır)}}, {{ui:Tətbiq et}}.

### REFEDIT və REFCLOSE

{{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Yerində redaktə}}. `REFEDIT`: `Yerində redaktə ediləcək blok istinadını seçin` (və ya seçim). `REFCLOSE`: `"…" üzərindəki dəyişiklikləri saxlayırsınız? [Saxla/Ləğv et] <Saxla>`; zolaqdakı {{ui:Bloku saxla}} və {{ui:Ləğv et}} eyni işi görür. Bütün redaktə bir geri alma addımıdır. Bax [Atributlar](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: qələm vuruşunun təzyiqinin {{cmd:SKETCHFIX}} və {{cmd:SKETCHLIVE}}-un yaratdığı xətt qalınlığını təyin edib-etmədiyi (başlanğıcda açıq). Bax [Qələmlə eskiz çəkin](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Ləqəb: `OFFSTD`. Bu çertyoj üçün hansı ofis standartının qüvvədə olduğunu və haradan gəldiyini deyir: çertyojun öz yazısı, komandanın paylaşdığı yazı, və ya Default Policies (mətn hündürlükləri `all.anno.*`); heç biri olmadıqda proqramın öz ölçüləri. `[İdxal/Qatlar/Ştamp/Təmizlə/Çıxış (X)]`: `İdxal` `cc-office-standard` .json (SuperCad və BimCraft-ın yazdığı yazı) faylını bu çertyoja oxuyur və DWG və DXF-də onunla birlikdə saxlanılır; `Qatlar` çertyojda olmayan ofis qatlarını bir geri alma addımında əlavə edir və heç vaxt birini silmir; `Ştamp` ofisin sahələrini çertyojun öz dəyərləri ilə sadalayır; `Təmizlə` çertyojun öz yazısını silir. Annotativ mətn və ölçü hündürlükləri qüvvədə olan standartı izləyir. Bax [Vahidlər, kağızlar və miqyaslar](topic:units-papers-scales).

### BPARAMS

Ləqəblər: `BPM`, `BLOCKPARAMS`. Blok redaktorundakı blok, seçilmiş istinadın bloku və ya adını verdiyiniz blok (`Blokun adı`) üçün Parametr meneceri açılır: düsturlu parametrlər, hər biri vəziyyətləri ilə bir neçə görünürlük parametri və seçilmiş istinadın öz dəyərləri və vəziyyətləri. Bax [Öz parametrləriniz və görünürlük vəziyyətləri](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` eyni işi komanda sətrində edir: `[Parametr/Görünürlük/Vəziyyət/Təyin et/İstinad/Bitdi]`.

### BEDIT və BCLOSE

`BE`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Bloku redaktə et}}. `Redaktə ediləcək blokun adını daxil edin <seçilmiş istinadın bloku>` blok redaktorunu açır. `BCLOSE` `"…" üzərində blok redaktorunu bağlayırsınız [Saxla/Ləğv et] <Saxla>` soruşur; zolaqdakı {{ui:Bloku saxla}} və {{ui:Dəyişiklikləri ləğv et}} eyni işi görür. Redaktorda edilən hər şey bir geri alma addımıdır.

### VIEWBASE

Ləqəb: `FLATSHOT`. 3D sekmesindəki bərk cisimlərin düz 2D görünüşü: `Görünüş [Ön/Üst/Sağ/Sol/Arxa/Alt/İzo]`, `Gizli xətlər [Göstər/Gizlət]`, miqyas (`1:20`, `2:1`; {{key:Enter}} vərəqə sığanı seçir), sonra görünüşün mərkəzi. Bir blok istinadı; görünən kənarlar VIEW-VISIBLE qatında, gizli olanlar VIEW-HIDDEN qatında nöqtəli. Bax [Vərəqdə düz görünüşlər](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Ləqəb: `-PUBLISH`; və ya {{ui:PDF-ə çap et}} dialoqunda {{ui:Bütün vərəqlər bir PDF-də}}. `Çap ediləcək vərəqlər [Hamısı/Bəziləri]`: {{key:Enter}} hər vərəqi çap edir, `S` vergüllə ayrılmış adlar soruşur. Bir PDF, hər vərəq üçün səhifə və əlfəcin. Bax [Bütün vərəqlər bir PDF-də](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Ləqəb: `SSM`, `SHEETSETMANAGER`. Sol paneldə {{ui:Vərəq dəsti}} bölməsinə aparır: bir çox çertyojdan vərəqlər, nömrəli və adlandırılmış, başlıq ştampları dəstdən doldurulmuş, bir PDF kimi çap olunmuş. Bax [Vərəq dəstləri](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG və ya DXF seçin, sonra onun daxiletmə nöqtəsi. {{cmd:XREF}} (`XR`, `-XREF`): `Bağlı çertyojlar [?/Əlavə et/Yenidən yüklə/Birləşdir/Ayır] (Enter: ?)`; birdən çox əlaqə olduqda, onlardan birinin istinadını seçin və ya `N` yazın və onun adını. Bax [Bağlı çertyojlar](topic:files#linked-drawings-external-references).

### COUNT

Ləqəb: `BCOUNT`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları say}}. `Sayılacaq blok istinadını seçin və ya [Hamısı/İxrac et] (Enter: Hamısı)`: seçim həmin blokun bu məkandakı hər istinadını seçib sayır; {{key:Enter}} və ya `H` hamısını sadalayır; `E`, sonra `S` (saylar) və ya `A` (atributlar) CSV yükləyir. Bax [Blokları sayın və cədvəli ixrac edin](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Ləqəb: `I`, `DDINSERT`.

- `Blokun adını və ya [Fayl/Kitabxana] daxil edin <son blok>` (böyük-kiçik hərf fərq etmir). `F` DWG və ya DXF soruşur, sonra bütöv çertyoj və ya onun bloklarından biri; artıq istifadə olunan ad {{ui:Mövcudu saxla}} və ya {{ui:Adını dəyişdir}} soruşur. `L` kitabxana panelini açır.
- `Daxiletmə nöqtəsini göstərin [Miqyas/Fırlat]`. `M` `Miqyas əmsalını göstərin`, `F` `Fırlanma bucağını göstərin` soruşur; hər ikisi yadda qalır.
- Blok artıq başqa yerlərdə təkrarlanan obyektlərin yanında olduqda, bir sətir neçə yerin təklif olunduğunu deyir və sorğuya `təklif (G)` əlavə olunur: `G` onları göstərir; ona yaxın klik edin ki, blok oraya qoyulsun, `H` hamısı üçün, {{key:Enter}} geri qayıtmaq üçün. Onlar qonşularının fırlanmasını və standart atribut dəyərlərini alır. Açıq fəzada 20000-dən çox obyekti olan çertyojlar axtarılmır.
- Sonra blokun soruşduğu hər atribut üçün `<sorğu> (<ETİKET>) <standart>` daxil edin. Bax [Blok atributları](topic:attributes).

### LIBRARY

Ləqəb: `LIB`. Kitabxana panelini açır: elementləri yerləşdirin, yeniləmələri yoxlayın, kitabxana kreditləri. Heç bir sual yoxdur. Bax [Fayldan və ya kitabxanadan daxil edin](topic:insert-from-file-and-library).

### STEELMEMBER

Ləqəb: `SMEMBER`; və ya kitabxananın {{ui:Standart}} sekmesində {{ui:3D element}}. `Kəsik ölçüsü <W12x26>` (sekmənin sadaladığı kimi), sonra `Başlanğıc nöqtəsi [Sütun]` və `Son nöqtə`: iki nöqtə arasında, yerə oturmuş 3D sekmesində bərk element. `C` sütunun baza nöqtəsini və onun hündürlüyünü soruşur. Bir geri alma addımı. Bax [Polad kəsikləri və standart hissələri yerləşdirin](topic:steel-and-standard-parts).

### PARTSLIST

Ləqəb: `PLIST`. `Hissə siyahısının sol yuxarı küncü`, sonra `Mətn hündürlüyü <2.5>`: kitabxanadan yerləşdirilmiş hər standart hissə və polad kəsiyinin cədvəlini çəkir (element nömrələri, miqdar, hissə, standart, ölçü, uzunluq, material, kütlə). Bir geri alma addımı. Bax [Polad kəsikləri və standart hissələri yerləşdirin](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Ləqəb: `PU`. Heç nə istifadə etməyən blok tərifləri silir. Heç bir sual yoxdur.

### DELBLOCKS

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları sil}}. `Silinəcək bloku seçin [Ad/Çıxış (X)]`: blok istinadını seçin, ya da filtrlə blokların siyahısı üçün `N` (bir neçəsini seçin), ya da bitirmək üçün `X` / {{key:Enter}}. Hər istinad gedir — modeldə, hər vərəqdə və digər blokların içində — sonra tərif, və komanda sətri nəyin silindiyini və nəyin silinə bilmədiyini deyir. Adsız bloklar və bağlı çertyojlar təklif olunmur. Sorğu növbəti blok üçün qayıdır; bütün komanda bir geri alma addımıdır.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} kopyaladığınızı ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) bir blok kimi yapışdırır: daxiletmə nöqtəsini seçin və oraya yeni blokun bir istinadı qoyulur, seçilmiş. Blokun öz adı olur (`A$C` və bir nömrə); {{cmd:RENAME}} ona sizinkini verir. Bir geri alma addımı istinadı və bloku silir.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} əvəz ediləcək bloku və yerinə qoyulacaq bloku soruşur (`?` blokları sadalayır), sonra modeldə, hər vərəqdə və digər blokların içindəki hər istinadı dəyişir. Hər istinad öz yerini, miqyasını, fırlanmasını, qatını və hər iki blokun malik olduğu atributların dəyərlərini saxlayır; yalnız yeni blokun atributları standart dəyərlərdən başlayır və hansı dəyərlərin atıldığını deyir. Köhnə blokdan heç nə istifadə etmədikdə onu silməyi təklif edir. Bağlı çertyojları və blokun özünün içinə düşəcək əvəzləməni rədd edir. Bir geri alma addımı.

### MINSERT

{{cmd:MINSERT}} bloku sətir və sütunlarda yerləşdirir: blok adı, daxiletmə nöqtəsi, miqyas, fırlanma, sətir və sütunların sayı və aralarındakı məsafələr. Bütün dəst fırlanma ilə dönür. Hər biri öz istinadıdır (ən çox 10000), buna görə sonra hər hansı birini köçürə və ya silə bilərsiniz.

### BLOCKSPALETTE

Ləqəb: `BLOCKSPAL`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Bloklar paneli}}. Filtrdə kursorla {{ui:Bloklar}} panelini göstərir. Hər blokun kiçik şəkli var; ən son yerləşdirilənlər birinci gəlir. Filtrin yanındakı iki düymə siyahı və şəkil şəbəkəsi arasında keçir. Şəkli klikləyin (və ya {{ui:Daxil et}}) bloku {{cmd:INSERT}} ilə yerləşdirmək üçün, ya da bloku çertyoja sürükləyin ki, buraxdığınız yerə qoyulsun.

{{ui:Kitabxanalar}} siyahısının altında: {{ui:Çertyoj əlavə et}} öz DWG və ya DXF faylınızı götürür və onun bloklarını şəkillərlə sadalayır, bütöv çertyojı bir blok kimi. Birini yerləşdirmək onun tərifini (və onun iç-içə blokları və qatlarını) {{cmd:INSERT}}-in `Fayl` seçimi kimi bu çertyoja kopyalayır; eyni tərifli blok artıq burada olarsa, sual soruşmadan istifadə olunur, eyni adlı, lakin fərqli blok {{ui:Mövcudu saxla}} və ya {{ui:Adını dəyişdir}} soruşur. Brauzerdə fayl səhifə bağlanana qədər qalır. CadCraft Studio-da {{ui:Qovluq əlavə et}} qovluqdakı çertyojları sadalayır, onlardan hər biri klik edəndə açılır; fayllar və qovluqlar yadda qalır. Kiçik x kitabxananı siyahıdan çıxarır; fayla toxunulmur. Paylaşılan {{ui:Kitabxana}} başqa şeydir: bax [Fayldan və ya kitabxanadan daxil edin](topic:insert-from-file-and-library).

### BCONVERT

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Təkrarları bloklara çevir}}. Təkrarlanan həndəsəni tapır və hər surəti bir blokun istinadına çevirir.

- `Təkrarlanan obyektləri seçin və ya [Blok]`: bir surətin obyektləri. `B` bunun əvəzinə mövcud bloku adlandırır, onun obyektlərinin dağınıq surətlərini tapmaq üçün.
- `Surət ola bilər: güzgülənmiş = Xeyr, ölçülənmiş = Xeyr; qat, rəng, xətt tipi və xətt qalınlığı = Uyğun … [Güzgülənmiş/Ölçülənmiş/Xassələr]`: `G`, `Ö` və `X` surət sayılanı dəyişir; {{key:Enter}} axtarır. Seçimlər yadda qalır.
- `Yeni blokun adı <Blok1>`, sonra `Blokun baza nöqtəsini göstərin` ({{key:Enter}} seçimin sol aşağı küncünü götürür).
- Eyni həndəsəli digər obyekt dəstlərinin sayını deyir, əvəz olunacaq hər şeyi vurğulayır və `Bəli/Xeyr` soruşur.

Surət eyni obyektlərin hər hansı bucaqla köçürülüb-fırladılmış halıdır (və güzgülənmiş və ya bir əmsalla miqyaslanmış olduqda o da); hər obyektin qarşılığı olmalıdır, seçimin ölçüsünün milyonda birinə qədər dəqiqliklə. Hər istinadın öz fırlanması və miqyası olur (güzgülənmiş olanın Y miqyası mənfi), və obyektlərin paylaşdığı qat. Kilidli qatlardakı obyektlərə toxunulmur və sayılır. Açıq fəzanı (model və ya açıq vərəq) axtarır. Çox böyük axtarış iş limitində dayanır və bunu deyir. Bir geri alma addımı.

### BSEARCH

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları tap}}. `Blokları ilə tapın [Ad/Atribut/Həndəsə] <Ad>`:

- `N`: blok adının bir hissəsi, ya da `*` və `?` ilə şablon. Hər bloku burada və bütün çertyojda onun istinadları ilə sadalayır.
- `A`: atribut dəyəri, ya da `TAG=dəyər`. İstinadlarında onu saxlayan blokları tapılmış dəyərlərlə sadalayır. Sabit atributlar sayılır.
- `H`: obyektləri və ya bir blok istinadını seçin, forması ən azı 85% oxşar olan bloklar ən yaxşısı birinci olmaqla sadalanır. Ölçü, fırlanma və güzgüləmə sayılmır. Ölçü ölçülərin üzərində yayılmış nöqtələr arasındakı məsafələri müqayisə edir, buna görə oxşarları tapır; dəqiq surətləri tapmaq üçün {{cmd:BCONVERT}} istifadə edin.

Açıq fəzada tapılan istinadlar seçilir, növbəti komanda üçün hazırdır.

### BREPLACE

Və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Blokları əvəz et}}. `Əvəz et [Seçilmiş/Hamısı]`: `S` seçdiyiniz blok istinadlarını adını verdiyiniz blokla əvəz edir; `H` blok və onun əvəzini soruşur və hər istinadı {{cmd:BLOCKREPLACE}}-in etdiyi kimi dəyişir (eyni kod). İstinad öz yerini, miqyasını, fırlanmasını, qatını və hər iki blokun malik olduğu atributların dəyərlərini saxlayır; yeni blokun yeri olmayan dəyərlər atılır və adlandırılır. `?` blokları sadalayır. Bir geri alma addımı.

### DATAEXTRACTION

Ləqəblər: `EATTEXT`, `DX`; və ya {{ui:Bloklar}} › {{ui:Daha çox}} › {{ui:Məlumatın çıxarılması}}. Blokları, onların atributlarını və obyekt xassələrini cədvəl və ya CSV faylı kimi sadalayır.

- Seçim üzərində işləyir, ya da `Obyektləri seçin (Enter: bu məkanda hər şey)` soruşur.
- Seçim həm blokları, həm də obyektləri saxladıqda `Siyahı: [Bloklar/Obyektlər/Hamısı]`. Adsız bloklar, cədvəllər və material siyahıları heç vaxt sadalanmır.
- Seçəcəyiniz sütunları çap edir (ad, növ, qat, X, Y, fırlanma, miqyas, uzunluq, sahə, rəng, xətt tipi, məkan və hər atribut etiketi üçün biri), sonra `Sütunlar, ad və ya nömrə ilə, vergüllə ayrılmış`. {{key:Enter}} ulduzlu olanları götürür: bloklar üçün ad və hər atribut; obyektlər üçün növ, qat və uzunluq.
- `Eyni sətirləri say ilə birlikdə yığın? [Bəli/Xeyr] <Bəli>`, sonra `Siyahını harada saxlayın: [Cədvəl/Csv] <Cədvəl>`. Cədvəl adi cədvəldir ({{cmd:TABLEDIT}} onu redaktə edir) və canlı deyil: çertyoj dəyişdikdən sonra əmri yenidən işlədin.
- Siyahıda olmayan sütunu rədd edir. Cədvəl 1999 məlumat sətrini tutur; CSV faylı hamısını saxlayır.

### COUNTTABLE

Seçimin (və ya açıq məkanın) blok istinadlarını sayır və sayları cədvələ (`Blok`, `Say`) və ya CSV fayla qoyur. Çertyojun dəyişməsini özü izləyən say üçün {{cmd:BOMTABLE}}-a baxın.

## Vərəqlər və çap

### LAYOUT

Ləqəb: `LO`, `NEWLAYOUT`; və ya vərəqin altındakı {{ui:+}} düyməsi. Sərhədi, başlıq ştampı və bir görünüş pəncərəsi olan yeni vərəq, ISO A3-də (və ya düym və ya futla çertyojlar üçün Tabloid-də). Heç bir sual yoxdur.

### MVIEW

Ləqəb: `MV`. Yalnız vərəqdə ({{cmd:VPORTS}} vərəqdə eyni işi görür).

- `Görünüş pəncərəsinin küncünü göstərin [Çoxbucaqlı/Obyekt]`, `Əks küncü göstərin`. Görünüş pəncərəsi modelin bütününü standart miqyasda göstərir.
- `P` (Çoxbucaqlı): konturun künclərinə klik edin (`Geri qaytar`, `Bağla`), bitirmək üçün {{key:Enter}}. Üçdən az künc rədd edilir.
- `O` (Obyekt): `Görünüş pəncərəsinin konturu üçün bağlı obyekti seçin`: vərəqdə bağlı polixətt, çevrə və ya ellips. Görünüş pəncərəsi onun formasını alır (əyrilər qısa düz parçalar kimi); obyekt olduğu kimi qalır. Bağlı olmayan obyekti rədd edir.

### VPCLIP

Vərəqdə artıq olan görünüş pəncərəsini kəsir. `Kəsiləcək görünüş pəncərəsini seçin` (və ya əvvəlcə seçin), sonra `Kəsilmə obyektini seçin [Çoxbucaqlı/Sil]`:

- Bağlı polixətt, çevrə və ya ellipsə klik edin, və ya {{key:Enter}} (və ya `P`) çoxbucaqlının künclərinə klik etmək üçün.
- `S` (Sil, kəsildikdə təklif olunur) onu yenidən düzbucaqlı edir: konturu olan qutu.
- Görünüş pəncərəsinin göstərdiyi kağızda hərəkət etmir və miqyası qalır. Model yalnız konturun içində çəkilir və çap olunur, sərhəd onu izləyir. Bir geri alma addımı.
- Kəsilmiş görünüş pəncərəsinin hər künc konturunda, mərkəzində və qutusunun dörd küncündə tutacaq var (qutunun küncünü sürükləmək konturu onunla birlikdə uzadır). Xassələr Kontur: Düzbucaqlı və ya Kəsilmiş, künclərin sayı ilə göstərir.
- DWG və DXF 2000 faylları konturu CadCraft üçün saxlayır. Digər proqramlar görünüş pəncərəsini onun ətrafındakı düzbucaqlı kimi açır; DXF R12 yalnız düzbucaqlını saxlayır.
- Model sekmesində görünüş pəncərələrinin vərəqdə olduğunu deyir.

### VPORTS

Ləqəb: `VIEWPORTS`. {{cmd:SPLIT}} vərəqdən də eynidir, və {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Yan-yana bölün}}, {{ui:Üst-alt bölün}}, {{ui:Dörd pəncərə}}, {{ui:Bir pəncərə}} onu işlədir. Modeldə: `Pəncərələrin sayını daxil edin [Tək/2/3/4] <3>`; `2` `[Üfüqi/Şaquli] <Şaquli>` soruşur (Şaquli = yan-yana), `3` `[Sol/Sağ] <Sağ>` soruşur (böyük pəncərənin harada olacağı). Hər pəncərə öz görünüşünü və məkanını saxlayır; klik pəncərəni aktiv edir. Vərəqdə bu {{cmd:MVIEW}}-dir. Bax [Ekranı bölün](topic:split-screen).

### VPVIEW

Heç bir ləqəbi yoxdur. Yalnız vərəqdə. `Görünüş pəncərəsini seçin` (seçilmiş olduqda keçilir), sonra modeldə: `Göstəriləcək pəncərənin birinci küncünü göstərin`, `Əks küncü göstərin`.

### UCS

Heç bir ləqəbi yoxdur. Öz koordinat sisteminiz; redaktə deyil. `UCS-in başlanğıcını göstərin [Adlandırılmış/Obyekt/Əvvəlki/Dünya/Z/3nöqtə] <Dünya>`: nöqtə yeni başlanğıcdır, sonra `X oxunda nöqtəni göstərin (Enter bucağı saxlayır)`. `Z`: `Z oxu ətrafında fırlanma bucağını göstərin <90>`. `3`: başlanğıc, müsbət X oxunda nöqtə, müsbət Y tərəfində nöqtə. `OB`: `UCS-i düzləşdirmək üçün obyekt seçin`. `AD`: `[Bərpa/Saxla/Sil/?]` və ad. Görünüş yeni X oxu üfüqi olacaq şəkildə dönür. Bax [Görünüşü fırladın və öz koordinatlarınızdan istifadə edin](topic:ucs-and-turned-view).

### PLAN

Heç bir ləqəbi yoxdur. `Seçim daxil edin [Cari ucs/Ucs/Dünya] <Cari ucs>`: aktiv panelin görünüşünü fırladır ki, UCS-in X oxu (və ya dünyanın) üfüqi olsun. Çertyojda heç nə hərəkət etmir.

### TURNLEFT, TURNRIGHT, TURNWORLD

Heç bir ləqəbi yoxdur; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Görünüşü 90° sola fırladın}}, {{ui:Görünüşü 90° sağa fırladın}}, {{ui:Dünyaya qayıt}}. `UCS Z -90`, `UCS Z 90` və `UCS W` ilə eynidir, görünüş izləyir.

### VPLAYER

Heç bir ləqəbi yoxdur. Vərəqdə, ya da görünüş pəncərəsinin içində. `Seçim daxil edin [?/Dondur/Aç/Sıfırla/Vpvisdflt]`: `D`, `A`, `S` qat adları soruşur (vergüllə, `*` və `?` şablonları), sonra `[Hamısı/Seçim/Cari] <Cari>` pəncərələr; Sıfırla hər qatı "yeni pəncərələrdə dondurulmuş" standartına qaytarır; `V` həmin standartı təyin edir (`[Dondurulmuş/Açıq]`), {{cmd:MVIEW}} istifadə edir. `?` cari pəncərədə dondurulmuş qatları sadalayır. Qatlar panelinin pəncərə sütunu bir pəncərə üçün eyni işi görür. Bax [Qatı bir pəncərədə dondurun](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Ləqəb: `MS`; və ya görünüş pəncərəsinə ikiklik. Yalnız vərəqdə. Modeli görünüş pəncərəsi vasitəsilə işləyin: seçilmiş olan, vərəqdə yeganə olan və ya `İşləmək üçün görünüş pəncərəsinin içinə klik edin`. İçəridə sürüşdürmə və yaxınlaşdırma görünüş pəncərəsinin görünüşünü dəyişir (ekranda kilidli olan onu saxlayır və vərəq hərəkət edir); yeni görünüş bir geri alma addımı kimi yazılır. Bax [Modeli görünüş pəncərəsi vasitəsilə işləyin](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Ləqəb: `PS`; və ya görünüş pəncərəsinin xaricinə ikiklik, ya da çertyojun altındakı sekmeyə klik. Vərəqə qayıdır.

### PLOT

Ləqəb: `PRINT`, `PUBLISH`, `EXPORTPDF`; və ya {{key:Mod+P}}. {{ui:PDF-ə çap et}} dialoqunu açır. Bax [PDF-ə çap et](topic:plot-pdf).

### PLOTSTYLES

Ləqəb: `STYLESMANAGER`, `PSTABLES`; və ya {{ui:PDF-ə çap et}} dialoqunda {{ui:Cədvəlləri redaktə et…}}. {{ui:Çap üslubu cədvəlləri}} açır: hər rəngin necə çap olunacağını (rəng, boz, mürəkkəb, xətt qalınlığı), çertyojla saxlanılır. Bax [Çap üslubu cədvəlləri](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} obyektləri vərəq ilə model arasında görünüş pəncərəsi vasitəsilə köçürür; onlar digər tərəfdən də eyni görünsün deyə miqyaslanır və fırladılır. Vərəqdə obyektləri seçin, onlar modelə gedir (vərəqdə bir neçə olduqda görünüş pəncərəsini seçin). Modeli görünüş pəncərəsi vasitəsilə işlədikdə ({{cmd:MSPACE}}), seçilmiş obyektlər vərəqə gəlir. Neçə dəfə böyük və ya kiçik olduqlarını deyir. Görünüş pəncərələri öz vərəqində qalır. Bir geri alma addımı.

### ISODRAFT

{{cmd:ISODRAFT}} izometrik çəkilişi `ON` və ya `OFF` edir, ya da birbaşa `Sol`, `Yuxarı` və ya `Sağ` müstəviyə keçir. Açıq olduqda: Ortoqonal ({{key:F8}}) xətləri müstəvinin iki oxu boyunca saxlayır (sol: 90° və 150°; yuxarı: 30° və 150°; sağ: 30° və 90°), polyar izləmə ({{key:F10}}) eyni oxları izləyir, şəbəkəyə tutma ({{key:F9}}) izometrik şəbəkəni istifadə edir, şəbəkə ({{key:F7}}) 30°, 90° və 150° xətləri ilə çəkilir. {{cmd:ELLIPSE}} `İzodairə` əlavə edir: mərkəz və radius (və ya `Diametr`) verin və cari müstəvidə dairənin göründüyü ellipsi çəkir. Çertyoj düz qalır: bunlar piktoral baxış çəkmək üçün köməkçilərdir, 3D model deyil. Parametr bu sessiya üçündür və faylda saxlanılmır.

### ISOPLANE

{{cmd:ISOPLANE}} izometrik çəkilişin işlədiyi müstəvini seçir: `Sol`, `Yuxarı` və ya `Sağ`. Enter növbəti müstəviyə keçir. İzometrik çəkiliş açıq olduqda {{key:F5}} komandanın ortasında eyni işi görür; söndürülmüş olduqda {{key:F5}} brauzerə qalır.

## Yoxlama

### CAL

Hesablamanın dəyərini çap edir, məsələn uzunluq yazılan hər yerdə oxunan kimi.

- `İfadə`: yazın, məsələn `12'6"+3/4"` və ya `(24'-0")/3`, və {{key:Enter}} basın. CadCraft `= 12'-6 3/4"   (150.75 çertyoj vahidi)` çap edir. Bax [Yazılmış dəyərdə hesablama](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Ləqəb: `DI`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Məsafəni ölç}}.

- `Birinci nöqtəni göstərin`, `İkinci nöqtəni göstərin`. Məsafəni, bucağı, ΔX və ΔY çap edir.

### AREA

Ləqəb: `AA`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Sahə}}. Sahəni və perimetri çap edir.

- `Birinci künc nöqtəsini göstərin [Obyekt/Sahə əlavə et/Sahə çıxart] <Obyekt>`
  - Künclərə klik edin və ya yazın; `Növbəti nöqtəni göstərin (Enter bağlayır) [Geri qaytar]` mərhələsində konturu bağlamaq üçün {{key:Enter}} basın. `U` son künci geri götürür.
  - {{key:Enter}} və ya `O`, sonra `Obyekti seçin`: çevrə (çevrəsini çap edir), ellips, polixətt (açıq olduqda sahə üçün düz xətt ilə bağlanır və uzunluğu çap edilir) və ya ştrixlama (deşiklər çıxılır).
  - `Ə` (Sahə əlavə et) və `S` (Sahə çıxart) işlək cəmi saxlayır: sorğu `(ƏLAVƏ rejimi)` və ya `(ÇIXARMA rejimi)` ilə başlayır, hər sahə əlavə olunur və ya çıxılır, və hər birindən sonra `Ümumi sahə = …` çap olunur. Bu rejimlərdə `O` {{key:Enter}}-ə qədər obyekt seçir, və birinci sorğuda {{key:Enter}} komandanı bitirir.

### MEASUREGEOM

Ləqəb: `MEA`. `Seçim daxil edin [Məsafə/Radius/Bucaq/Sahə] <Məsafə>`; hər ölçmədən sonra yenidən soruşur, standart `Çıxış (X)`.

`Sürətli` göstəricinin ətrafında ölçür, onu hərəkət etdirdikcə: sağda, yuxarıda, solda və aşağıda ən yaxın obyektə qədər məsafəni (cari UCS-in oxları boyunca), gedərkən çəkilir, və bu qonşulardan ikisi düz olub görüşdükdə bucağı. Klik dörd məsafəni, təmiz eni və hündürlüyü və bucaqları tarixçəyə yazır; Enter seçimlərə qayıdır. Ekranda olanı oxuyur.

- `D`: iki nöqtə, {{cmd:DIST}} kimi.
- `R`: `Qövsü və ya çevrəni seçin`; radiusu və diametri çap edir.
- `A`: qövs (daxili bucağı), xətt və sonra ikinci xətt (aralarındakı bucaq, uzaq uclara doğru), ya da {{key:Enter}} və üç nöqtə (təpə, sonra iki uc).
- `AR`: {{cmd:AREA}} kimi, bir sahə.

### ID

Heç bir ləqəbi yoxdur. `Nöqtəni göstərin`; onun X və Y-ni çap edir.

### LIST

Ləqəb: `LI`, `LS`. `Obyektləri seçin`; hər obyektin növünü, qatını və əsas ölçülərini çap edir.

### MASSPROP

{{cmd:MASSPROP}} seçdiyiniz regionların və qapalı obyektlərin kəsik xassələrini birlikdə verir: sahə, perimetr, sərhəd qutusu, mərkəz, X və Y oxlarına görə başlanğıcdan keçən ətalət momentləri, ətalət məhsulu, fırlanma radiusları, eyni momentlər mərkəz ətrafında və əsas momentlər və onların oxlarının istiqamətləri. Regionda deşiklər deşik kimi sayılır. Rəqəmlər çertyoj vahidlərindədir və xətt və qövslərdən ibarət konturlar üçün dəqiqdir; ellips və splaynlar qısa düz parçalar kimi ölçülür və bunu deyir. Hesabatdan sonra onu mətn faylına yazmağı soruşur. Bağlı olmayan obyektlər kənarda qalır və neçə olduğunu deyir.

## Görünüş, fayl və digər

### ZOOM

Ləqəb: `Z`.

- `Pəncərənin küncünü göstərin, miqyas əmsalını daxil edin (nX) [Hüdudlar/Hamısı/Pəncərə/Əvvəlki/Miqyas/Mərkəz]`. Pəncərə üçün iki küncə klik edin. `H`, `A` və ya Enter: bütün çertyoj.
- `Ə` (Əvvəlki, və ya alət panelində {{ui:Əvvəlki}}) əvvəlki görünüşə qayıdır, sekmə başına 10 görünüşə qədər; ardıcıl təkər addımları və ya bir sürüşdürmə bir görünüş sayılır.
- `2`, `2x` və ya `0.5x` kimi ədəd (və ya `M` və sonra ədəd) ekranın ortasının ətrafında o əmsalla yaxınlaşdırır və ya uzaqlaşdırır.
- `C` `Mərkəz nöqtəsini göstərin` və `Mətn hündürlüyünü və ya böyütməni daxil edin (nX)` soruşur.

### PDFATTACH, PDFIMPORT və PDF komandaları

Ləqəblər: `PDFATT` {{cmd:PDFATTACH}} üçün, `PDFIM` {{cmd:PDFIMPORT}} üçün. {{cmd:PDFATTACH}} PDF səhifəsini çertyojun altına qoyur (fayl, səhifə, daxiletmə nöqtəsi, miqyas, fırlanma); {{cmd:PDFIMPORT}} səhifənin xətlərini, əyrilərini, doldurmalarını və mətnini PDF-in adını daşıyan qatlarda çertyoj obyektlərinə çevirir, həqiqi ölçüdə, yazılmış miqyasda, ya da iki nöqtə və həqiqi məsafə ilə miqyaslanmış. {{cmd:PDFCLIP}} altlığı kəsir, {{cmd:PDFADJUST}} solğunluq, kontrast, monoxrom təyin edir və ya onu söndürür, {{cmd:PDFLAYERS}} PDF-in öz qatlarını dəyişir, {{cmd:PDF}} isə çertyojun altlıqlarının istifadə etdiyi faylları yenidən CadCraft-a verir. Bax [PDF altlıqları](topic:pdf-underlay).

### AUTOCOMPLETE

Ləqəb: `AUTOC`. Çertyoj avtotamamlaması: heç bir komanda işləmədikdə boz kölgə çertyojun öz naxışlarının nə təklif etdiyini göstərir. {{cmd:AUTOCOMPLETE}} onu `On` və ya `Off` edir (həmçinin Parametrlər › CadCraft) və ya indi nə təklif edəcəyini `Show` ilə göstərir. **Tab** kölgəni bir geri alma addımı kimi çəkir, **Esc** çertyoj dəyişənə qədər onu rədd edir. Ən yeni obyektlərdə üç şey tapır: bir dəfədən çox çəkilmiş bir şeyin bərabər addımla növbəti surəti (dayaqlar, sütunlar, pillənin qalxması və döşəməsi), polixətt pillənin növbəti addımları və otaq və ya divar zəncirinin çatışmayan tərəfi. {{cmd:LINE}} və ya {{cmd:PLINE}} ortasında kölgə **növbəti nöqtədir**: pillənin növbəti addımı (qalxma, döşəmə, qalxma…), düzbucaqlının dördüncü küncü, onu bağlayan nöqtə, ya da bir bərabər addım daha. Kursoru ona yaxınlaşdırın və **Tab** basın, sanki oraya klik etmisiniz; davam edin və ya Enter basın. Bu kompüterdə qaydalarla hesablanır, model olmadan.

### AUTOSHEET

Ləqəb: `ASH`. Özünü tərtib edən vərəqlər. {{cmd:AUTOSHEET}} çertyojun parçalarını (adlandırılmış görünüşləriniz, və ya modelin ayrı hissələri, ya da bütün model) götürür, kağız ölçüsünü (və ya verdiyinizi) seçir, hər parçaya standart miqyas verir (hamı üçün bir miqyas, ya da hər birinin ala biləcəyi ən böyük) və görünüşləri yeni vərəqlərdə sətirlərlə yerləşdirir, hər birinin altında başlıq ştampı və başlıq (ad və miqyas) ilə. Bir vərəqə sığmayan hissə öz vərəqini alır. Bir geri alma addımı. Bu kompüterdə qaydalarla hesablanır, model olmadan.

### PHOTOSKETCH

Ləqəb: `PSK`. Eskizin fotosunu çertyoja çevirir. Kağız vərəqində əl eskizinin fotosunu (JPEG, PNG və ya TIFF) seçin. {{cmd:PHOTOSKETCH}} vərəqin dörd küncünü tapır, perspektivi düzləşdirir, verdiyiniz kağız ölçüsünü (`Kağız`, və ya ən yaxın standart) və eskizin `Miqyas`ını (1 : n) qəbul edir, sonra qələm xətlərini xətlərə, qövslərə və çevrələrə izləyir, hər qələm rəngi (qara, qırmızı, mavi, yaşıl) üçün bir qat. Vərəqin kənarını tapa bilmədikdə, bütün fotonu vərəq kimi qəbul edir və bunu deyir. Yazılar kənarda qalır. Bir geri alma addımı. Bu kompüterdə klassik şəkil emalı ilə, model olmadan və heç nə heç yerə göndərilmədən edilir. Həmçinin skan olunmuş çertyoj komandalarına baxın.

### AUTODIM

Ləqəb: `ADIM`. Qaydalarla avtomatik ölçü. {{cmd:AUTODIM}} seçilmiş obyektləri (və ya bütün çertyojı) onların səviyyə və şaquli kənarlarından ölçür: seçdiyiniz tərəflər boyunca ölçü zənciri (`Tərəflər`), kənarında bir ümumi ölçü, hər açıqlığın eni (xətti divar xətləri arasında boşluq), hər dəlik ölçüsü üçün diametr və `Şəbəkə` ilə şəbəkə xətləri arasında aralıq. Artıq olan ölçü yenidən yaradılmır. Bir geri alma addımı. Bu kompüterdə qaydalarla hesablanır, model olmadan.

### GRIDMOVE

Ləqəb: `GM`. Şəbəkə xəttini hərəkət etdirmək onunla asılı olanı daşıyır. {{cmd:GRIDMOVE}} şəbəkə xəttini (adında şəbəkə və ya ox olan qatda olan xətt) və ondan asılı olanları hərəkət etdirir: xəttə ucu olan divarlar onu izləmək üçün uzanır, onun boyunca olan divarlar bütöv hərəkət edir, sütunlar (xətt üzərindəki blok istinadları və çevrələr), onun baloncuğu və etiketi hərəkət edir, və nöqtələri xətt üzərində olan ölçülər yeni aralığı ölçür. İki nöqtə verin (yalnız xəttin kəsdiyi hissə sayılır) və ya `Məsafə`. Bir geri alma addımı hamısını geri qaytarır. Bu kompüterdə qaydalarla edilir.

### DETAILS

Ləqəb: `DET`. Sizi tapan detallar. {{cmd:DETAILS}} firmanızın öz detallarını saxlayır: `Əlavə et` bu çertyojun blokunu siyahıya qoyur, `Siyahı` və `Sil` onu idarə edir, `Tap` seçilmiş (və ya sonuncu çəkdiyiniz) şey üçün onları qatlarındakı, blok adlarındakı, ştrixlama naxışlarındakı və qeydlərdəki sözlərə görə, hər detalın adı və qeydlərinə qarşı sıralayır, belə ki, pəncərə başlığı sizin sill örtüyünüzü tapır. Yer seçmək üçün nömrə və nöqtə seçin. `Göstəriş` açıq olduqda (həmçinin Parametrlər › CadCraft), detalın uyğun gəldiyi bir şeyi seçmək status sətrində bir sətir yazır. Siyahı bu brauzerdə, bu kompüterdə saxlanılır və axtarılan siyahı budur. `Paylaş` onu Sənədlər qovluğunuza da qoyur (`.cadcraft/firm-details.json`, hər blokun çertyoju ilə): `Çək` komandanızda olanı və sizdə olmayanı əlavə edir, `İt` sizdə olanı və onlarda olmayanı əlavə edir, `İkisi` hər ikisini edir və heç bir tərəfdən heç nə silinmir. Əvvəlcə Sənədlər qovluğunu açın ({{cmd:DOCUMENTS}}); həmin qovluq Team Cloud Plan qovluğu olduqda bütün komanda bir siyahı paylaşır. Kitabxana panelində detal elementində **Firmamın detallarına əlavə et** düyməsi onu eyni siyahıya qoyur. Bu kompüterdə sözlərlə hesablanır, model olmadan.

### SKETCHFIX

Ləqəb: `SKF`. Qələm eskizləri dəqiq həndəsəyə çevrilir. Hər dəfə bir sərbəst vuruşu basıb sürükləyin (qələm, siçan və ya barmaq), sonra Enter. Hər vuruş xətt, çevrə, qövs, düzbucaqlı və ya polixətt kimi oxunur: təqribən düz və şaquli xətlər dəqiq düz və şaquli edilir, bağlı yumru vuruş çevrəyə, düz bucaqlı dörd künclü bağlı vuruş düzbucaqlıya çevrilir, və vuruşların uclarını bir-birinə və çertyojda artıq olan uclara çəkir. Bir geri alma addımı. Bu kompüterdə qaydalarla hesablanır, model olmadan.

### SCANATTACH və skan olunmuş çertyoj komandaları

Ləqəblər: `SCA` {{cmd:SCANATTACH}} üçün, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}-ın ləqəbi yoxdur. Hamısı şəkil üzərində işləyir, hər biri bir geri alma addımı. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (bir səhifə və ya hamısı) və ya şəkil olan PDF səhifəsini əlavə edir. {{cmd:SCANSCALE}} vərəqi üzərində seçdiyiniz iki nöqtə və həqiqi məsafə ilə miqyaslayır. {{cmd:SCANALIGN}} onu iki nöqtəyə köçürür və fırladır (`Vərəqi sığdırmaq üçün miqyaslayın` Bəli/Xeyr). {{cmd:SCANDESKEW}} vərəqin uzun xətlərinin bucağını göstərir və `Qəbul et` və ya `Dəyər` verdikdə vərəqi fırladır. {{cmd:SCANCLEAN}} onu qara-ağ edir (`Hədd` Avtomatik/Uyğunlaşan/Səviyyə, `Ləkələr`) və `İcra et`. {{cmd:SCANCROP}} pəncərəni saxlayır. {{cmd:SCANERASE}} `Düzbucaqlı`, `Çoxbucaqlı` və ya `Lasso` silir. {{cmd:SCANTRACE}} xətləri və qövsləri yeni qata izləyir (`Tolerantlıq`, `Pəncərə`, `Qövslər`, `Qalıqlar`, `İcra et`) və tapdığını və rastr olaraq saxladığını deyir. {{cmd:SCANINFO}} orijinal faylı və addımları sadalayır. {{cmd:RASTERSNAP}} skan olunmuş vərəqlərin xətlərinə tutmanı Açıq və ya Bağlı edir. Bax skan olunmuş çertyojlar və izləmə mövzusuna.

### REGEN və REGENALL

Ləqəblər: `RE` {{cmd:REGEN}} üçün, `REA` {{cmd:REGENALL}} üçün. Çertyojdan ekranda çəkilmiş şeyləri yenidən qurur: {{cmd:REGEN}} baxdığınız sekmeni (vərəqdə, onun görünüş pəncərələrinin göstərdiyi modeli də), {{cmd:REGENALL}} hər sekmeni, hər bölünmüş ekran panelini və hər açıq çertyojı. Skript və ya çox böyük dəyişiklikdən sonra şəkil köhnəlibsə, ya da köməkçi çertyojı redaktə etdiyində istifadə edin; çertyojun özünə toxunulmur, buna görə geri alınacaq heç nə yoxdur.

### NAMEDVIEW

Ləqəblər: `NV`, `VIEWS`. `Seçim daxil edin [?/Bərpa/Saxla/Pəncərə/Sil] <Bərpa>`, sonra görünüşün adı. `S` ekrandakı görünüşü saxlayır, `P` seçdiyiniz pəncərəni, `B` saxlanılmış görünüşü göstərir, `S` (Sil) birini silir, `?` bu sekmenin görünüşlərini sadalayır. Mövcud adın altında saxlamaq onu əvəz edir; hər dəyişiklik bir geri alma addımıdır. Görünüşlər saxlandıqları sekmeyə aiddir. DWG və DXF faylları onları saxlayır (VIEW cədvəli); vərəqin görünüşləri ilk vərəqə qayıdır, çünki fayl hansının olduğunu demir.

### UNDO və REDO

Ləqəb: `U` {{cmd:UNDO}} üçün; {{cmd:REDO}}-nun ləqəbi yoxdur. Həmçinin {{key:Mod+Z}} və {{key:Mod+Y}}.

### LAYER

Ləqəb: `LA`. {{ui:Qatlar}} panelinə keçir.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Yeni obyektlər üçün xətt tipini daxil edin` — `ByLayer` (Qata görə), `ByBlock` (Bloka görə) və ya ad (`?` onları sadalayır: Continuous, çertyojun öz xətt tipləri, və DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, onların `2` (yarı) və `X2` (iki qat) ölçüləri ilə). {{cmd:LWEIGHT}} (`LW`): yeni obyektlər üçün xətt qalınlığı mm ilə, ya da `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): çertyojun xətt tipi miqyası (geri alına bilər). {{cmd:LWDISPLAY}} (`LWT`): `Xətt qalınlıqlarını göstərin [ON/OFF]` — status sətrindəki {{ui:LWT}} düyməsi ilə eynidir. Bax [Xətt qalınlıqları və xətt tipləri](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Adını dəyişmək üçün obyekt növünü daxil edin [Qat/Blok]`, `Köhnə adı daxil edin`, sonra yeni ad; obyektlər və ya istinadlar izləyir. {{cmd:LAYMRG}}: `Birləşdirmək üçün qatda obyekti seçin və ya [Ad]` Enter-ə qədər, sonra `Hədəf qatda obyekti seçin və ya [Ad]` və `Y`. {{cmd:LAYDEL}}: `Silmək üçün qatda obyekti seçin və ya [Ad]`, sonra `Y`: qat və onun üzərindəki hər obyekt gedir (0 qatı, DEFPOINTS və cari qat deyil). Hər biri üçün bir geri alma addımı. Bax [Çertyojun qatlarla təşkili](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Obyektləri seçərək qatlar; həmçinin {{ui:Qatlar}} panelinin {{ui:Alətlər}} menyusunda. {{cmd:LAYISO}}: `Təcrid ediləcək qat(lar)dakı obyektləri seçin`, sonra {{key:Enter}}: hər digər qat söndürülür. {{cmd:LAYUNISO}} onları geri yandırır. {{cmd:LAYOFF}} və {{cmd:LAYFRZ}}: `Söndürüləcək (və ya dondurulacaq) qatdakı obyekti seçin`, təkrar-təkrar; `U` son birini geri götürür, {{key:Enter}} bitirir. {{cmd:LAYMCUR}}: `Qatı cari olacaq obyekti seçin`. {{cmd:LAYON}} hər qatı yandırır, {{cmd:LAYTHW}} hər qatı əridir. Hər komanda bir geri alma addımıdır. Bax [Çertyojun qatlarla təşkili](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} boş çertyoj başladır və {{cmd:OPEN}} DWG və ya DXF açır, hər biri çertyoj üzərində öz sekmesində (dəyişdirilməmiş yeni çertyoj yeni sekme əvəzinə istifadə olunur). Saxlanılmamış dəyişikliyi olan sekməni bağladıqda əvvəl soruşur. Bax [Ekranı bölün](topic:split-screen).

{{cmd:SAVE}} (ləqəb `QSAVE`, həmçinin {{key:Mod+S}}) çertyojun formatında surəti yükləyir: DWG-dən açılıbsa DWG, DXF-dən açılıbsa DXF. Yeni çertyoj bu brauzerdə Saxla kimi sonuncu seçilən formatı istifadə edir, əks halda DWG.

{{cmd:SAVEAS}} (həmçinin {{key:Mod+Shift+S}}) {{ui:Surəti belə saxla}} dialoqunu açır: {{ui:DWG}} (və onun {{ui:Versiya}}sını), {{ui:DXF R12}} və ya {{ui:DXF 2000}} seçin, sonra {{ui:Saxla}}. Seçim bu çertyoj üçün və bu brauzerdə yeni çertyojlar üçün qalır.

{{cmd:DXFOUT}} həmişə DXF R12 surətini yükləyir, {{cmd:SAVE}}-in istifadə etdiyi formatı dəyişmədən.

Bax [Fayllar: nə açılır, nə saxlanılır](topic:files#saving).

### TOUR

Ləqəb: `TUTORIAL`. Altı addımlı ilk çertyoj turunu yenidən başladır. Bax [Başlanğıc](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Ləqəb: `TBDOCK`. `Alət paneli yeri [Yuxarı/Aşağı/Sol/Sağ]`. Bax [Parametrlər](topic:settings#toolbar-position).

### COMMANDLINE

Ləqəb: `CMDLINE`. `Komanda sətri [Aşağıda yerləşdirilib/Üzən/Bir sətir/Göstərilən tarixçə sətirləri/Komanda tarixçəsi (F2)]`: komanda sətrini yerləşdirir və ya üzdürür, bir sətir edir, neçə tarixçə sətirinin göstəriləcəyini soruşur (0-dan 12-yə) və ya tarixçəni açır. Bax [Parametrlər](topic:settings#command-line).

### TOPAREA

`Yuxarı sahə [Standart/Yığcam]`: çertyojun üstündəki zolaqlar əvvəlki kimi, ya da yığcam. Bax [Parametrlər](topic:settings#top-area).

### POLARANG

`Polyar bucaq addımını dərəcə ilə daxil edin <90>`: {{ui:Polyar}} izləmə xətlərinin düzləşdiyi addım (0-dan çox, 180-ə qədər). Bu brauzerdə saxlanılır.

### UNITS

Ləqəb: `UN`. Uzunluqların necə yazıldığı və daxil edildiyi.

- `Uzunluq formatını daxil edin [Elmi/Onluq/Mühəndislik/Memarlıq/Kəsr] <cari>`
- Memarlıq və Kəsr: `Göstəriləcək ən kiçik kəsrin məxrəcini daxil edin (1, 2, 4, 8, 16, 32, 64, 128 və ya 256)`. Digərləri: `Onluq rəqəmlərin sayını daxil edin (0-dan 8-ə)`.

Yeni ölçülər bunu izləyir. Bir geri alma addımı. Cari parametrlərdə {{ui:Uzunluq formatı}} və {{ui:Dəqiqlik}} ilə eynidir; bax [Fut və düym](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Ləqəb: `GDS`. IC layout-u baxın (GDSII axın faylı): laboratoriya sınağı, yalnız baxış və ölçmə üçün.

- Fayl seçicisi `.gds` faylını götürür; bir neçə yuxarı hüceyrə olduqda `Çəkiləcək yuxarı hüceyrəni daxil edin`.
- Hər qat və məlumat növü çertyoj qatına çevrilir (`GDS 1`, `GDS 2/5`), istinadlar və massivlər düz, faylın istifadəçi vahidində (adətən mikrometr) yerləşdirilir. Bir geri alma addımı. Heç nə simulyasiya olunmur və ya yoxlanılmır, fayl geri yazılmır.

### DIAGRAM

Ləqəblər: `TEXTDIAGRAM`, `T2D`. Mətndən diaqram.

- Qutu mətni qəbul edir (və ya komanda sətrində `;` ilə ayrılmış bir sətir): Mermaid axın diaqramı, PlantUML komponent diaqramı, D2 və ya from-to siyahısı.
- `Diaqramın sol yuxarı küncünü göstərin`, sonra `Mətn hündürlüyünü göstərin`.

Bloklar və konnektorlar `Diagram` qatında adi obyektlərdir, bitəndə seçilmiş qalır. Bir geri alma addımı. Bax [Mətndən diaqram çəkin](topic:text-to-diagram).

### OLELIST

Ləqəb: `OLES`. DWG-nin daşıdığı və CadCraft-ın özü yerləşdirə bilmədiyi OLE obyektləri.

- Hər birini sadalayır: nömrə, növ, ölçü, şəkil saxlayıb-saxlamadığı.
- `Seçim daxil edin [Yerləşdir/Çıxış (X)] <Çıxış>`: Yerləşdir nömrə, sol aşağı küncü və eni soruşur, şəkilli çərçivə çəkir. Bir geri alma addımı; saxlanılmış obyekt dəyişmir. Bax [Şəkillər](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Ləqəb: `SHX`. Öz SHX şriftləriniz.

- `SHX şrift seçimini daxil edin [Qovluq/Fayllar/Siyahı/Sil/Tərs/Təmizlə] <Siyahı>`

{{ui:Qovluq}} qovluqdakı hər `.shx` faylını oxuyur (CadCraft Studio; hər başlanğıcda yenidən), {{ui:Fayllar}} seçilmiş faylları götürür (brauzer), {{ui:Tərs}} bir şriftin hərflərini sondan əvvələ düzür. Yüklənmiş şrifti adlandıran mətn üslubları onunla çəkilir. Bax [Öz SHX şriftlərinizlə mətn çəkin](topic:shx-fonts).

### LIMITS

Çertyojun nə qədər böyük olmasının nəzərdə tutulduğu.

- `Aşağı-sol küncü göstərin və ya [ON/OFF] <cari>`: nöqtə, `ON` və ya `OFF`.
- `Yuxarı-sağ küncü göstərin <cari>`.

Şəbəkə sərhədləri doldurur, {{cmd:ZOOM}} Hamısı onları göstərir və ON olduqda onların xaricindəki nöqtə rədd olunur (`**Sərhədlərdən kənardır**`). Bir geri alma addımı; DWG və DXF-də saxlanılır. Bax [Çertyojun sərhədlərini təyin edin](topic:drawing-limits).

### AUNITS

Ləqəb: `ANGUNITS`. Bucaqların necə göstərilib yazıldığı.

- `Bucaq formatını daxil edin [Onluq dərəcə/Dərəcə-dəqiqə-saniyə/Geodezist istiqamətləri] <cari>`
- `Onluq rəqəmlərin sayını daxil edin (0-dan 8-ə)`, və ya digər ikisi üçün `Dəqiqliyi daxil edin` (0 dərəcə, 2 dəqiqə, 4 saniyə, saniyənin 5-dən 8-ə onluq hissəsi).

Bir geri alma addımı; DWG və DXF-də saxlanılır. Cari parametrlərdə {{ui:Bucaq formatı}} ilə eynidir. Bax [Bucaqları yazın və göstərin](topic:bearings-and-angles).

### APPLOAD

Ləqəb: `AP`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Tətbiqi yüklə…}}. {{ui:Tətbiqləri yüklə}} dialoqu: `.lsp` rutinlərini və `.dcl` dialoq fayllarını yükləmək, boşaltmaq, tarixçədən yenidən yükləmək və Başlanğıc Dəsti. Rutinin `(defun c:NAD …)` komandaları digər komandalar kimi işləyir. Bax [Tətbiqləri yükləyin](topic:load-applications) və [LISP rutinlərini işlədin](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Ləqəbləri redaktə et…}}) ləqəb faylınızı açır (`ALIAS, *COMMAND` sətirləri); {{ui:Saxla}} onu tətbiq edir. {{cmd:REINIT}} onu yenidən tətbiq edir. Bax [Komanda ləqəblərini redaktə et](topic:command-aliases).

### OPTIONKEYS

Ləqəblər: `OPTKEYS`; və ya {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Seçim hərfləri}} › {{ui:Redaktə et…}}. Seçim hərfləri faylınızı açır (`KOMANDA.SEÇİM, HƏRFLƏR` sətirləri, məsələn `ARRAY.PO, P`); {{ui:Saxla}} onu tətbiq edir və {{cmd:REINIT}} yenidən tətbiq edir. Bax [Komanda seçimlərinə öz hərflərinizi verin](topic:option-letters).

### LISPEDIT

Ləqəblər: `VLIDE`; və ya {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:LISP redaktoru}}. LISP redaktorunu açır: çertyojun yanında qalan pəncərə.

- Mətn: sətir nömrələri, kursorda mötərizənin cütü işarələnir (cütü yoxdursa qırmızı), {{key:Enter}} yeni sətri açıq mötərizənin altına girintiləyir, {{key:Tab}} iki boşluq yazır, {{key:Esc}} mətndən çıxır.
- {{ui:Çertyoja yüklə}} ({{key:Ctrl+Shift+Enter}}): faylla {{cmd:APPLOAD}}-un etdiyi kimi bütün formaları oxuyur və onun `c:` komandalarını yaradır. Fayl {{cmd:APPLOAD}} siyahısında görünür.
- {{ui:Seçimi işlət}} ({{key:Ctrl+Enter}}): seçilmiş formaları, ya da kursorun olduğu formanı qiymətləndirir.
- {{ui:Dayandır}}: işləyən rutini bitirir.
- {{ui:Konsol}}: rutinin çap etdiyi nə varsa və hər xəta sətri ilə; xətaya klik edib oraya gedin. Mətn hər səviyyədəki formanı birbaşa işlədir, buna görə sətir formanındır, ya da içində xətanın adını verən funksiyanı çağıran sətirdir.
- {{ui:Yeni}}, {{ui:Aç}}, {{ui:Saxla}} ({{key:Ctrl+S}}): `.lsp` faylı. Mətn bu brauzerdə də saxlanılır, buna görə pəncərəni bağlamaq onu itirmir.
- Mətnin yanında: rutinin təyin etdiyi funksiyalar, bu LISP-də olmayan və ya çağırdığı funksiyalar, nə onun içində müəyyən edilmiş, nə də daxili olan çağırdığı funksiyalar və qurulmuş və qurulmamış olanların tam siyahıları.

Sonu olmayan mötərizəsi və ya bitməyən sətri olan mətn işlədilmir: sətir adlandırılır. Addım-addım debugger, breakpoint və izləmə pəncərəsi yoxdur. Bax [LISP rutinlərini işlədin](topic:run-lisp).

### HELP

Ləqəb: `?`. Hər komandanı, onun ləqəblərini və bir sətirlik təsvirini komanda sətrinin tarixçəsində çap edir. Bu kömək səhifəsini açmır: onun üçün {{key:F1}} basın və ya {{ui:Kömək}} klikləyin.

## Obyektləri seçin sorğusu

Hər `Obyektləri seçin` sorğusunda: obyektlərə klik edin, pəncərələri soldan sağa, kəsişmə pəncərələrini sağdan sola iki klik ilə çəkin, ya da lasso basın və sürükləyin ({{key:Space}} sürüklədikdə: pəncərə, kəsişmə, hasar), çıxarmaq üçün {{key:Shift}}+klik, bitirmək üçün {{key:Enter}}. Həmçinin `ALL` (hər şey), `L` (son obyekt), `P` (Əvvəlki: son komandanın istifadə etdiyi), `F` (Hasar: nöqtələr xətti kəsdiyi obyektlər; `U` nöqtəni geri götürür), `W` (Pəncərə), `C` (Kəsişmə), `R` (Çıxarma rejimi: seçimlər obyektləri çıxarır; sorğu `Obyektləri çıxarın` oxuyur) və `A` (yenidən əlavə et) yaza bilərsiniz. `?` onları sadalayır. Sorğuda göstərilmirlər. Üst-üstə düşən obyektlər üzərində {{key:Tab}} növbəti birini vurğulayır; onu seçmək üçün klik edin. Bax [Obyektləri seçin](topic:select-objects).

### ACCESS

Ləqəb: `AX`. Sensorsuz çəkiliş. {{cmd:ACCESS}} Access-i `On` və ya `Off` edir və səs tutmasını (`Sound`) və səsli komandaları (`Voice`) dəyişir; əvvəlcə vəziyyəti deyir. Access açıq olduqda hər komanda və nəticə ekran oxuyucunuz vasitəsilə səslənir və çertyoj sahəsində klaviatura kursoru olur. "Sensorsuz çəkiliş" kömək mövzusunda düymələr var.

### DESCRIBE

Ləqəb: `DESC`. Çertyojda nə olduğunu deyin: neçə obyekt, hansı növ, nə qədər böyük, neçə qat, nə seçilib. Yalnız oxuyur; heç nəyi dəyişmir.

### WHEREAMI

Ləqəb: `WHERE`. Kursorun harada olduğunu çertyoj vahidlərində deyin.

### NEARBY

Kursora yaxın olanı, ən yaxından başlayaraq, hər birini məsafəsi və tərəfi ilə deyin.

### SAYSEL

Seçilənin nə olduğunu deyin, hər obyekt üçün bir cümlə (xəttin uzunluğu, uclar və bucaq; çevrənin radiusu və mərkəzi; mətn yazıldığı kimi).

### VOICE

Səsli komandaları yandırın və ya söndürün. Onlar bu kompüterdə tanınır; brauzer bunu edə bilmədikdə səs Parametrlərdə brauzerin onlayn xidmətini seçmədiyiniz müddətdə söndürülmüş qalır.

### TOUCHCROSSHAIR

Ləqəb: `TCX`. Barmaqla çəkiliş üçün ofsetli xaç ki, barmaq seçdiyiniz nöqtəni örtməsin. O açıq olduqda, çertyojda bir barmaq seçmir: barmağın üstündə və bir tərəfdə duran xaçı hərəkət etdirir. Obyekt tutmaları və izləmə xaçı izləyir. Barmağı qaldırmaq heç nə seçmir və xaçı yerində qoyur. Seçmək üçün çertyojun küncündəki {{ui:Klik}} düyməsini basın, ya da ikinci barmaqla çertyojda hər yerə toxunun. Digər barmaqla hərəkət edərkən {{ui:Klik}}-i tutub saxlayın (seçim pəncərəsi, lasso, tutacaq). Bir barmaq yerində basılı qaldıqda və ya {{ui:Enter}} düyməsi Enter-dir. İki barmaq əvvəlki kimi sürüşdürür və yaxınlaşdırır. Aşağı kənar və uzaq tərəf kənarına yaxın xaç barmağa yaxınlaşır, buna görə çertyojun hər hissəsinə çatmaq olar. Qələm və siçan həmişə birbaşa seçir.

{{cmd:TOUCHCROSSHAIR}} vəziyyəti deyir və `ON`, `OFF`, `Auto` (yalnız barmaq yeganə göstərici olduqda açıq, buna görə siçanlı kompüterdə söndürülüb), `Distance` (xaçın barmaqdan nə qədər uzaq olduğu, 24-dən 240 piksələ) və ya `Side` (`Left`: yuxarı və sola, sağ əl üçün; `Right` sol əl üçün; düymələr digər küncə keçir) soruşur. Eyni seçimlər Parametrlər › CadCraft-dadır, və toxunma ekranlı qurğuda status sətrində {{ui:Ofsetli nişangah}} açarı var. Seçimlər bu brauzerdə saxlanılır.

### WHOHAS

Çertyojun kimin açıq olduğunu deyir. CadCraft Studio kompüterdə hər açılmış DWG və ya DXF-in yanında kiçik kilid faylı yazır (`Plan.dwg.cclock`: kim, nə vaxtdan, hansı versiya), hər dəqiqə yenilənir və çertyoj bağlananda silinir. Başqasının açdığı çertyoju açmaq kimin və nə vaxtdan açdığını deyir və {{ui:Oxuma rejimində aç}} (saxlamaq yeni ad soruşur), {{ui:Yenə də aç}} (digər şəxsə növbəti yenilənmədə bildirilir) və ya {{ui:Ləğv et}} təklif edir. Başqasının açdığı faylın üzərinə saxlamaq əvvəl soruşur. Beş dəqiqə yenilənməyən kilid köhnə sayılır: digər surət saxlamadan bağlandı və ya kompüter yuxudadır.

{{cmd:WHOHAS}} `Cari` (açıq çertyoj), `Fayl` (birini seçin), `Qovluq` (qovluq seçin: onda açıq olan hər çertyoj sadalanır), `Yol` (tam yol yazın) və ya `Ad` (digərlərinin gördüyü ad; daxil olduqda hesabınızın adı) soruşur. Studio yalnız seçdiyiniz qovluqlara çata bilir: heç seçilməyən qovluqdan açılmış çertyoj üçün bunu bir dəfə deyir ki, onu açıq kimi qeyd edə bilmir; `Qovluq` qovluğu seçir və kilidlər ondan sonra orada işləyir. Kilid insanlar üçün qeyddir, maneə deyil: başqa proqram faylı yenə yaza bilər. Brauzerdə qovluqlar yoxdur, komanda bunu deyir.

### OVERKILL

Təkrarlanan obyektləri silir və üst-üstə düşən xətləri və qövsləri səliqəyə salır, ikiqat xətlərlə gələn çertyojlar üçün. `Təmizlənəcək obyektləri seçin`, {{key:Enter}}, sonra göstərilən parametrlərlə təmizləmək üçün yenidən {{key:Enter}}, və ya birini əvvəlcə dəyişin:

- `Tolerantlıq`: iki koordinatın eyni sayılması üçün nə qədər yaxın olmalı (başlanğıcda 0.000001; 0 dəqiq eyni deməkdir).
- `Ignore` (Göz ardı et): iki obyektin başqa cəhətdən eyni olduğu halda fərqlənə bilən xassələr. Adı yazaraq dəyişin: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, və ya `None` / `All`. Bitdikdə {{key:Enter}}.
- `Overlap`: açıq və ya bağlı. Açıq olduqda, bir düz xətt üzərindəki üst-üstə düşən xətlər bir xətt olur (başqasının içindəki xətt sadəcə silinir), və bir çevrə üzərindəki üst-üstə düşən qövslər bir qövs olur; tam dövrə tamamlayan qövslər çevrə olur və çevrə üzərindəki qövs silinir.
- `Ends`: açıq və ya bağlı. Açıq olduqda, bir düz xətt üzərində və bir çevrə üzərində olan xətlər və qövslər yalnız uc-uca toxunduqda bir parça olur.

Hər obyekt növü təkrar üçün yoxlanılır: iki obyekt, həndəsələri tolerantlıq daxilində eynidırsa və qatı, rəngi, xətt tipi, xətt tipi miqyası, xətt qalınlığı, qalınlıq, şəffaflıq və hündürlükləri uyğundursa (göz ardı etdiyiniz çıxmaqla) təkrardır. Xətlər və açıq polixətlər əks istiqamətdə çəkildikdə də uyğun gəlir. Komanda neçə obyekti yoxladığını və neçəsini sildiyini deyir: təkrarlar, birləşmiş üst-üstə düşən parçalar, uc-uca birləşdirilmiş parçalar. Bir {{cmd:UNDO}} hamısını geri alır. Parametrlər çertyoj pəncərəsini bağlayana qədər qalır.

Toxunulmur: kilidli qatdakı obyektlər və gizli obyektlər. Hündürlüklü (Z) xətləri birləşdirmir (dəqiq təkrarları yenə də gedir), və polixəttin içindəki parçalara (incəldilmir), polixətt parçası üzərindəki xəttə və əks istiqamətdə çəkilmiş bağlı polixəttə toxunmur.

### DRAWORDER

Hansı obyektlərin önə çəkildiyini dəyişir. `Yenidən sıralamaq üçün obyektləri seçin`, {{key:Enter}}, sonra `Obyektlərin üstündə`, `Obyektlərin altında`, `Ön` və ya `Arxa` ({{key:Enter}} = `Arxa`). `Obyektlərin üstündə` və `Obyektlərin altında` istinad obyektlərini soruşur: seçim onların ən önündə olanın tam qabağına, ya da ən arxadakının tam arxasına gedir. Seçilmiş obyektlər aralarında öz sıralarını saxlayır. Bir geri alma addımı. Sıra DWG və DXF-də çertyojla saxlanılır, burada obyektlərin yazıldığı sıradır.

Ekranda hər obyekt çertyojun sırası ilə çəkilir, faylı açan digər proqramların çəkdiyi kimi: bərk ştrixlama, geniş polixətt və ya mətn maskası arxasındakı xətləri və mətni örtür, və onun önündə olan onu örtür. Xətt mətnlə kəsişdikdə hər ikisi görünür. Şəkillər və əlavə olunmuş PDF səhifələri xəttin altında qalır. Ştrixlamaları və xətləri üst-üstə düşən və növbələşən 256 dəfədən çox olan çox böyük çertyojda ilk 256 öz sırasını saxlayır, qalanları doldurmaları xətlərin altında çəkir, beləliklə yenidən çəkmə sürətli qalır.

### TEXTTOFRONT

Açıq məkanda bütün mətni, ölçüləri və qulaqları hər şeyin önünə gətirir: `Mətn`, `Ölçülər`, `Qulaqlar` və ya `Hamısı` ({{key:Enter}} = `Hamısı`). Bir geri alma addımı. Heç biri olmadıqda və ya artıq önə çəkildikdə bunu deyir.

### HATCHTOBACK

Açıq məkanın hər ştrixlamasını hər şeyin arxasına göndərir, beləliklə doldurmalar saxlanılmış faylda xətləri və mətni örtmür. Heç bir sual yoxdur. Bir geri alma addımı.

### ISOLATEOBJECTS

Ləqəb: `ISOLATE`. Yalnız seçilmiş obyektləri göstərir: açıq məkandakı hər şey {{cmd:UNISOLATEOBJECTS}}-ə qədər görünməz olur. {{cmd:LAYISO}}-dan fərqli olaraq, qatlarından asılı olmayaraq seçdiyiniz obyektlərlə işləyir və heç bir qatı dəyişmir. Gizli obyektlər çəkilmir, seçilmir, tutulmur, yaxınlaşdırılmır və çap olunmur, `ALL` qəbul edən komandalar onları keçir. Obyektlər təcrid olunmuş ikən çəkdikləriniz də adi kimi göstərilir.

Bu yalnız sessiya üçündür: heç nə onunla bağlı çertyojla saxlanılmır, bu bir geri alma addımı deyil və çertyojun yenidən açılması hər şeyi göstərir. Obyektlər gizli olduqda status sətrində onların sayı ilə düymə göstərilir; onları yenidən göstərmək üçün ona klik edin.

### HIDEOBJECTS

Seçilmiş obyektləri {{cmd:UNISOLATEOBJECTS}}-ə qədər gizlədir. {{cmd:ISOLATEOBJECTS}} ilə eyni qaydalar: yalnız sessiya üçün, saxlanılmır, geri alma addımı deyil.

### UNISOLATEOBJECTS

Ləqəblər: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} və ya {{cmd:HIDEOBJECTS}} ilə gizlədilmiş hər obyekti yenidən göstərir və neçəsinin geri qayıtdığını deyir.

### LAYLOCKFADE

Kilidli qatlardakı obyektlərin necə göründüyünü və klikin onlara çatıb-çatmadığını təyin edir. Cari vəziyyəti deyir, sonra qəbul edir:

- 0-dan 90-a qədər ədəd: faizlə solğunluq miqdarı (başlanğıcda 50). 0 solğunluğu söndürür.
- `ON` və ya `OFF`: solğunluq açıq və ya söndürülmüş, miqdarı saxlayır.
- `Pick` (Seç), sonra `Yes` və ya `No`: komanda işləmədikdə klik kilidli qatlardakı obyektləri seçə bilərmi? `No` (başlanğıc): onlar heç seçilə bilməz. `Yes`: klik və ya pəncərə onları seçir ki, {{ui:Xassələr}} onları göstərə bilsin; onlar yenə dəyişdirilə bilməz və komandanın öz `Obyektləri seçin` sorğusu onları heç vaxt götürmür.

Obyekt tutmaları hər halda kilidli qatlardakı obyektləri tapır. Çaplar heç vaxt solğunlaşmır. Hər iki parametr sizindir, çertyojun deyil, və {{ui:Parametrlər}}-də {{ui:Kilidlənmiş qatlar}} altında da var.

### BURST

Blok istinadlarını partladır və atributlarının dediklərini saxlayır. `Partlatmaq üçün blok istinadlarını seçin`, {{key:Enter}}: hər istinad bloku obyektləri ilə əvəz olunur, və hər görünən atributun dəyəri həmin atributun öz qatında sadə mətn olur (qat 0-da olan atribut istinadın qatına düşür, bloku qat 0-dakı digər obyektlər kimi). Görünməz atributlar atılır. Blokun içindəki blok blok istinadı olaraq qalır. Bir geri alma addımı; neçə istinadı partladığını və neçə atribut dəyərinin mətnə çevrildiyini deyir.

Bağlı çertyojun adı ilə rədd edir (əvvəlcə onu bağlayın, ya da {{cmd:NCOPY}} ilə ondan kopyalayın), və seçilmiş digər obyektlərə toxunmur. Blok istinadları üçün {{cmd:EXPLODE}} eyni obyektləri verir; {{cmd:BURST}} yalnız blok istinadlarını götürür və atribut mətnini sayır.

### TXT2MTXT

Ləqəb: `T2M`. Tək sətirli mətnləri bir abzas mətninə birləşdirir. `Birləşdiriləcək tək sətirli mətni seçin`, {{key:Enter}}, sonra `Abzas` (sətirlər birləşir və ən geniş sətrin eninə görə sarınır) və ya `Sətirlər` (hər mətn öz sətri olaraq qalır); {{key:Enter}} sonuncu istifadə olunanı götürür. Sətirlər yuxarıdan aşağı, sonra soldan sağa, yuxarı mətnin istiqamətində sıralanır. Abzas yuxarı mətnin sol yuxarı küncündən asılıdır və onun hündürlüyünü, fırlanmasını, üslubunu, qatını və rəngini alır. Bir geri alma addımı.

Artıq abzas olan mətn, boş mətn və seçimdəki digər obyektlər olduğu kimi qalır və komanda neçə olduğunu deyir.

### NCOPY

Heç bir şeyi partlatmadan blok istinadından və ya əlaqəli çertyojdan obyektləri çertyoja kopyalayır. `Blok istinadının və ya əlaqəli çertyojun içindəki obyekti seçin`: seçimə ən yaxın obyekt göründüyü yerdə kopyalanır, nə qədər dərin blokda olsa da; daha çox seçin, sonra {{key:Enter}}. Növbəti `Surətləri köçürmək üçün baza nöqtəsi`: {{key:Enter}} onları yerində qoyur, ya da baza nöqtə və ikinci nöqtə verin. Bütün komanda bir geri alma addımıdır.

Surət göründüyü qatı alır: blokun içində qat 0-dakı obyekt olduğu istinadın qatına düşür, və ByBlock rəngi həmin istinadın rəngi olur. Əlaqəli çertyojdan `Plan|Walls` qatı `Plan$0$Walls` olur (əlaqənin verdiyi ad), əlaqəli qatın rəngi, xətt tipi və xətt qalınlığı ilə. Atributun dəyəri mətn kimi kopyalanır. Kilidli qatlardakı blok istinadları seçilə bilməz.

### FLATTEN

Seçilmiş obyektlərin hündürlüyünü (Z) və qalınlığını 0 edir. `Düzləşdiriləcək obyektləri seçin`, {{key:Enter}}. Seçimin istifadə etdiyi blok tariflərindəki obyektləri də düzləşdirir (və həmin blokların içindəkiləri), beləliklə o blokların hər istinadı dəyişir; əlaqəli çertyojlar olduğu kimi qalır. Bir geri alma addımı; neçə obyektin dəyişdiyini deyir və heç birinin hündürlüyü və ya qalınlığı olmadıqda bunu deyir.

CadCraft 2D çertyojda üçüncü ölçüdən nəyi saxlayır: dairələrdə, qövslərdə, ellipslərdə, nöqtələrdə, mətndə, blok istinadlarında, ştrixlamalarda, qulaqlarda və polixəttlərdə hündürlük (onların yüksəkliyi), xəttin hər ucunda hündürlük və xətlərdə, dairələrdə, qövslərdə, polixəttlərdə, nöqtələrdə və mətndə qalınlıq, faylda olduğu kimi. {{cmd:FLATTEN}} məhz bunları təmizləyir. Sekmədəki 3D modelə, 3D səthlərə və bərk cisimlərə toxunmur; faylı açarkən təyyarədə əyilmiş obyekt artıq çertyoj təyyarəsinə gətirilmişdir.

### BREAKLINE

Kəsilmiş görünüş üçün sınma simvolu ilə xətt çəkir. Cari ölçünü və uzantını deyir, sonra `Sınma xəttinin birinci nöqtəsi` (və ya əvvəlcə ölçünü dəyişmək üçün `Ölçü` / `Uzantı`), `İkinci nöqtə`, və `Sınma simvolunun yeri`: xətt boyunca klik edin, və ya orta üçün {{key:Enter}}. Nəticə cari qatda bir polixəttdir: xətt, hər nöqtədən uzantı qədər keçən, ölçü qədər hündür və yarısı qədər uzun Z formalı zolağı ilə.

`Ölçü` və `Uzantı` parametrləriniz kimi yadda qalır (ölçü ölçü mətninin hündürlüyünün ikiqatı miqyasa vurulmuş olaraq başlayır; uzantı ölçünün yarısıdır). {{key:Enter}} komandanı təkrarlayır.

### AUDIT

Açıq çertyojda zədələri yoxlayır və düzəldir. {{cmd:AUDIT}} modeldəki, vərəqlərdəki və bloklardakı hər obyekti, və qat cədvəlini yoxlayır və tapdıqlarını növə görə sadalayır:

- sonlu olmayan və ya qeyri-real böyük ədədlər;
- ölçüsü olmayan obyektlər: uzunluğu olmayan xətt, radiusu olmayan çevrə, bir nöqtəsi olan polixətt, hərfləri və ya hündürlüyü olmayan mətn, sıfır miqyaslı blok istinadı;
- çertyojda olmayan qatdakı obyektlər; çertyojda olmayan bloka istinadlar; mətn və ölçü üslubu adları və xətt tipi adları ki, çertyojda yoxdur;
- özlərini, birbaşa və ya digər bloklar vasitəsilə, ehtiva edən bloklar;
- eyni identifikatoru, açarı və ya fayl dəstəyini paylaşan obyektlər;
- ölçülənmək üçün nöqtələri olmayan ölçülər və sərhədi bağlı kontur olmayan ştrixlamalar.

Sonra `Düzəlişlər? [Bəli/Xeyr]` soruşur. `Xeyr` heç nəyi dəyişmir. `Bəli` hər şeyi bir geri alma addımında düzəldir: çəkilə bilməyən şeylər silinir (pis rəqəmlər, ölçü yoxdur, blok yoxdur, pozulmuş ölçü, istifadə oluna bilən sərhədi olmayan ştrixlama, dairə blokları bağlayan istinad); olmayan qat yaradılır; tanınmayan üslub və xətt tipi adları standartlara qaytarılır; paylaşılan açar dəyişdirilir. Neçə obyektin silindiyini və neçəsinin düzəldildiyini çap edir. Eyni tapıntılar Problemlər panelində də görünür, hər birinin öz {{ui:Təmir et}} düyməsi ilə.

Heç nəyi rədd etmir, lakin yalnız CadCraft-ın özünün çəkdiyi şeyləri yoxlayır: digər proqramlar üçün saxlanılmış məlumatlar (3D cisimlər, OLE obyektləri) açılmır.

### RECOVER

Zədələnmiş DXF və ya DWG-ni açır. {{cmd:RECOVER}} faylı soruşur, oxuna bilən hissəni rədd etmək əvəzinə oxuyur, atladığını və ya qəbul etdiyini sadalayır, sonra {{cmd:AUDIT}}-in `Bəli` ilə etdiyi kimi çertyojun yoxlanmasını və düzəldilməsini edir.

- DXF: kod və dəyər cütünün parçası olmayan sətirlər cütlər yenidən düzülənə qədər atlanır; sonu olmayan bölmə bağlanır; kəsilmiş fayl kəsildiyi yerə qədər oxunur; kəsilmiş ikili DXF son tam dəyərinə qədər oxunur. Bölmə, blok və ya obyekt hələ oxuna bilmədikdə, o, kənarda qalır və adı deyilir və oxuma ondan sonra davam edir.
- DWG: yoxlamalardan keçməyən və ya kodunu aça bilmədiyi obyektlər kənarda qalır və itmiş obyekt siyahısı obyekt məlumatlarında gəzərək yenidən qurulur.

Diskdəki fayl dəyişmir. Bərpa olunmuş çertyoj saxlanmamış açılır: onu yeni adla saxlayın. Heç nəyin oxuna bilmədiyi fayl səbəbi ilə rədd edilir.

### LEGACYTEXT

Köhnə 8 bitlik Vyetnam şriftləri ilə yazılmış mətni Unicode-a çevirir. Qısa adlar `TEXTTOUNICODE` və `VNTEXT`.

Köhnə Vyetnam çertyojları mətnini, yalnız şriftin Vyetnam kimi çevirdiyi Qərb simvolları kimi saxlayır: TCVN3 mətn ABC şriftlərində (`.VnTime`, `.VnArial`, və adları `H` ilə bitən böyük hərflə şriftlər) və VNI mətn VNI şriftlərində (`VNI-Times`). CadCraft belə mətni çertyoj açılan kimi oxuyur — mətn üslubunun, obyektin və ya abzas mətnindəki hissənin şriftinə görə — fayl hələ köhnə simvolları saxlasa da.

{{cmd:LEGACYTEXT}} hər kodlamada neçə mətn tapdığını deyir və `… Unicode-a çevrilsin?` soruşur. `Bəli` hər birini yenidən yazır (model, vərəqlər, bloklar, atribut dəyərləri və tərifləri) və mətn üslublarına Unicode şrift verir (Times New Roman, Arial və ya Courier New köhnə şriftin növünə görə), bir geri alma addımında. Abzas mətnindəki format saxlanılır.

Heç bir mətn tanınan şrifti istifadə etmədikdə (şrift adını itirmiş üslub), komanda `Seçilmiş mətnləri bu kimi oxuyun [Tcvn3/Vni/Heç biri]` soruşur: kodlamanı seçin və mətnləri seçin. Artıq Unicode olan mətn olduğu kimi qalır. Ölçü mətni üstələmələri və çoxqulaq mətni çevrilmir.
