---
title: CadCraft ilə başlanğıc
summary: CadCraft çertyoj tətbiqinin nə etdiyi, harada işlədiyi və ilk çertyojunuz boş ekrandan saxlanılmış fayla qədər.
keywords: başlanğıc, ilk çertyoj, yeni, aç, saxla, fərqli saxla, başla, dərslik, giriş, sürətli başlanğıc
from: 1a56c575
---

CadCraft 2D çertyoj tətbiqidir. Xətlər, qövslər, polixətlər, mətn, ölçülər və bloklar çəkir və redaktə edirsiniz, ştamplı və görünüş pəncərəli vərəqlər qurub PDF-ə çap edirsiniz. DWG və DXF çertyojları açır və onları DWG və ya DXF kimi saxlayır.

Brauzerinizdə işləyir. Quraşdırmaq lazım deyil: sayt ünvanı verir, bütün tətbiq səhifəyə yüklənir. Çertyojlarınız öz kompüterinizdən açılır və ona geri saxlanılır. **Heç nə yüklənmir.**

Əgər əvvəl çertyoj çəkmisinizsə, bundan sonra [Başqa çertyoj proqramından gələnlər](topic:coming-from) oxuyun. Əksər vərdişlər qalır, qalmayanlar orada sadalanıb.

## Rəhbərlik istəyirsiniz?

`TOUR` yazın (və ya başlanğıc kartında {{ui:Turu başladın}} düyməsinə, ya da {{ui:Parametrlər}} › {{ui:CadCraft}} › {{ui:Turu yenidən başladın}} seçiminə klikləyin). Çertyojun üstündə qutuda altı qısa addım: bir xətt və çevrə çəkin, onu köçürün, kəsin, bir şeyi silin və ölçü verin. Hər addım siz onu yerinə yetirdikdə bitir, addımı və ya bütün turu ötürə bilərsiniz. Yalnız ilk dəfə avtomatik başlayır. [Qısa məlumat vərəqi](topic:cheat-sheet) ən çox istifadə edəcəyiniz 40 əmri, [Əmr istinadı](topic:commands) isə bütün əmrləri göstərir.

## Nə lazımdır

- Son versiya Chrome, Edge, Firefox və ya Safari, Mac, Windows və ya Linux kompüterdə. Bax: [Brauzerlər və platformalar](common:browsers).
- Təkər olan siçan ən rahatdır. Trackpad də işləyir; bax: [Siçan, trackpad və toxunma](topic:mouse-trackpad-touch).
- Klaviatura. CadCraft əksər çertyoj proqramları kimi yazılmış əmrlərlə idarə olunur.

## Ideya bir abzasda

Əmr yazırsınız (və ya onun düyməsinə klikləyirsiniz), aşağıdakı əmr sətri sizə bir-bir suallar verir: "Birinci nöqtəni göstərin", "Növbəti nöqtəni göstərin". Hər suala çertyojda klikləməklə və ya dəyər yazmaqla cavab verirsiniz, sonra {{key:Enter}} basırsınız. {{key:Esc}} ləğv edir. Bu, bütün qarşılıqlı əlaqə modelidir; qalan hər şey təfərrüatdır.

## İlk çertyojunuz

4000 x 3000 düzbucaqlı xətlərdən çəkəcək, ortasına çevrə qoyacaq və faylı saxlayacaqsınız.

1. CadCraft-ı açın. Aşağıdakı əmr sətri `Əmr:` göstərir və çertyoj sahəsində qısa "Çəkişə başla" kartı görünür.
2. `L` yazın və {{key:Enter}} basın. Əmr sətrinə əvvəlcə klikləmək lazım deyil: istənilən yerdə yazdığınız oraya gedir.
3. Sorğu `Birinci nöqtəni göstərin:` olur. `0,0` yazın və {{key:Enter}} basın.
4. `@4000,0` yazın və {{key:Enter}} basın. Sağa gedən xətt görünür. `@` "son nöqtədən" deməkdir.
5. `@0,3000` yazın və {{key:Enter}} basın.
6. `@-4000,0` yazın və {{key:Enter}} basın.
7. `C` yazın və {{key:Enter}} basın. `C` Bağla seçimidir: son xətt birinci nöqtəyə qayıdır və əmr bitir.
8. Alət panelinin Görünüş qrupunda {{ui:Hüdudlar}} düyməsinə klikləyin. Düzbucaqlı ekranı doldurur.

İndi ekranda dörd xətdən ibarət düzbucaqlı görməlisiniz və yazdıqlarınızı əmr sətrinin üstündəki tarixçə sadalayır.

9. `C` yazın və {{key:Enter}} basın ki, çevrə əmrini başladasınız.
10. Mərkəz üçün `2000,1500` yazın və {{key:Enter}} basın.
11. Radius üçün `500` yazın və {{key:Enter}} basın.

Çertyojun ortasında çevrə görünür.

12. {{key:Mod+S}} basın və ya Fayl qrupunda {{ui:Saxla}} düyməsinə klikləyin.

Brauzer `Drawing1.dwg` faylını adi yükləmələr qovluğunuza yükləyir və tarixçə DWG kimi surət saxladığını bildirir. Bu fayl CadCraft-da və əksər digər CAD proqramlarında yenidən açılır. (Əgər əvvəl bu brauzerdə {{ui:Fərqli saxla}}-da DXF seçmisinizsə, yeni çertyoj bunun əvəzinə `Drawing1.dxf` kimi saxlanır.)

:::tip
Boş əmr sətrində {{key:Enter}} basın ki, son əmri təkrarlayasınız. Əgər istəyirsinizsə, Enter əvəzinə {{key:Space}} basın: mətndən kənarda eyni işi görür.
:::

## Mövcud çertyoju açın

1. {{key:Mod+O}} basın və ya {{ui:Aç}} düyməsinə klikləyin.
2. Fayl seçicidə `.dwg` və ya `.dxf` faylı seçin.

Həmçinin DWG və ya DXF faylını {{pick:mac=Finder|windows=File Explorer|linux=your file manager}} pəncərəsindən çertyoj sahəsinə sürükləyib buraxa bilərsiniz. Fayl səhifənin daxilində oxunur; kompüterinizi heç vaxt tərk etmir.

Hansı saxlanılır və hansı çevrilir üçün bax: [Fayllar: nə açılır, nə saxlanılır](topic:files).

## Saxlama: nə gözləmək

Brauzerdə saxlamaq masaüstü proqramdan fərqli işləyir:

- {{ui:Saxla}} həmişə **yeni surət yükləyir**. Açdığınız faylı üzərinə yazmır. Yükləmələr qovluğunuzda eyni adlı fayl varsa, brauzer adətən `Drawing1 (1).dwg` kimi bir nömrə əlavə edir.
- {{ui:Saxla}} çertyojun formatından istifadə edir: açdığınız DWG-dirsə DWG, DXF-dirsə DXF. Seçmək üçün {{key:Mod+Shift+S}} basın və ya {{ui:Fərqli saxla}} düyməsinə klikləyin, sonra {{ui:DWG}} (və onun versiyası), {{ui:DXF R12}} və ya {{ui:DXF 2000}} seçin. Bax: [Saxlama](topic:files#saving).
- Açdığınız fayl heç vaxt dəyişdirilmir.
- Başqa fayl açmaq və ya {{ui:Yeni}} yeni çertyojunu çertyojun üstündə öz sekmesində açır, buna görə açıq heç nə bağlanmır. Çertyojun sekmesini bağlasanız və ya saxlanılmamış dəyişikliklərlə səhifədən çıxsanız, CadCraft əvvəlcə soruşur: {{ui:Əvvəlcə surətini saxla}}, atmaq və ya {{ui:Ləğv et}}. Brauzer sekmesini bağladıqda isə brauzerin öz "Saytdan çıxılsın?" sualı görünür.

Bulud saxlama hələ mövcud deyil. Fayllarınızın harada saxlandığı və niyə məxfi qaldığı [Fayllarınız və məxfilik](common:your-files) bölməsində izah olunub.

## Növbəti hara getmək

{{key:F1}} basın və ya yuxarıdakı paneldə {{ui:Kömək}} düyməsinə klikləyin ki, bu kömək istənilən vaxt çertyojun yanında açılsın. Bağlantı olmadan da işləyir.

- [CadCraft ekranı](topic:workspace) hər paneli və hər sahəni adlandırır.
- [Koordinatlarla çəkiş](topic:draw-with-coordinates) ən yaxşı ilk təlimatdır.
- [Klaviatura və siçan](topic:keyboard) hər düyməni sadalayır.
- `HELP` yazın ki, hər əmrin siyahısını görəsiniz, və ya [Əmr istinadı](topic:commands) oxuyun.
