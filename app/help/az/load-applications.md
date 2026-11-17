---
title: Tətbiqləri yüklə (APPLOAD)
summary: LISP proqramlarını və dialoq fayllarını yükləyin, onları boşaldın, tarixçədən yenidən yükləyin və tez-tez istifadə etdiklərinizi Başlanğıc paketində saxlayın.
keywords: appload, ap, tətbiqi yüklə, lisp, lsp, dcl, proqram, başlanğıc paketi, boşalt, tarixçə, buraxın, yüklə, fərdiləşdir, idarə et
from: 89e0ee95
---

## Nə öyrənəcəksiniz

LISP proqramını (`.lsp` faylı) CadCraft-da əmrləri işləsin deyə necə yükləmək, onu necə boşaltmaq və CadCraft hər başladıqda yüklənməsini necə təmin etmək.

## Proqram yükləyin

1. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Tətbiqi yüklə…}} açın və ya {{cmd:APPLOAD}} (və ya `AP`) yazıb {{key:Enter}} basın.
2. {{ui:Fayl yüklə…}} düyməsinə klik edin və bir və ya bir neçə `.lsp` faylı seçin. Dialoq açan proqram adətən `.dcl` faylı ilə gəlir: onu da seçin.
3. Dialoq hər faylın nə yaratdığını deyir, məsələn "delblocks.lsp yükləndi: 1 əmr, DELBLOCKS."
4. {{ui:Bağla}} düyməsinə klik edin, proqramın əmrini yazın və {{key:Enter}} basın.

`.lsp` və `.dcl` fayllarını çertyojun üzərinə və ya Tətbiqləri yüklə dialoquna da buraxa bilərsiniz: onlar dərhal yüklənir.

Fayl burada, brauzerinizdə oxunur. Heç bir şey serverə göndərilmir.

:::tip
Boş komanda sətrində {{key:Enter}} basın ki, proqramın əmri yenidən işləsin, digər hər hansı əmr kimi. Komanda ləqəbləriniz də ona çata bilər: bax "Komanda ləqəblərini redaktə edin".
:::

## Proqramı boşaldın

{{ui:Tətbiqləri yüklə}} bölməsində, {{ui:Yüklənmiş tətbiqlər}} altında, fayl yanındakı {{ui:Boşalt}} düyməsinə klik edin. Yenidən yükləyənə qədər proqramın yaratdığı əmrlər yox olur.

## Proqramı hər CadCraft başlanğıcında yükləyin

1. Proqramı yükləyin.
2. {{ui:Yüklənmiş tətbiqlər}} altında, onun yanındakı {{ui:Başlanğıc paketinə əlavə et}} düyməsinə klik edin.

Bundan sonra CadCraft bu brauzerdə hər başladıqda o, özü yüklənəcək. Bunu dayandırmaq üçün {{ui:Başlanğıc paketi}} altında onun yanındakı {{ui:Çıxar (R)}} düyməsinə klik edin.

Başlanğıc paketi hər faylın bir nüsxəsini bu brauzerin yaddaşında saxlayır. Proqramı dəyişdirsəniz, yeni faylı yükləyin və yenidən əlavə edin.

## Qovluqdan acad.lsp və acaddoc.lsp yükləyin (Studio)

CadCraft Studio-da {{ui:Tətbiqləri yüklə}} dialoqundakı {{ui:Dəstək qovluğu}} kompüterinizdəki bir qovluğu götürür. {{ui:Qovluq seç…}} düyməsinə klik edin. CadCraft başladıqda həmin qovluqdan əvvəlcə `acad.lsp`, sonra `acaddoc.lsp` faylını oxuyur (adların hərf registri necə olursa olsun), onları yükləyir və sonra Başlanğıc paketini yükləyir. `acaddoc.lsp` hər yeni çertyoj nişanı açıldıqda yenidən oxunur. Qovluqdakı başqa heç nə oxunmur, 2 MB-dan böyük fayl isə mesajla ötürülür.

Əgər fayl `S::STARTUP` adlı funksiya təyin edirsə, o, fayllar yükləndikdən sonra (Başlanğıc paketindən sonra da) bir dəfə işləyir. {{ui:İndi yüklə}} bunu istək üzrə edir; {{ui:Təmizlə}} qovluğu yaddaşdan silir.

Brauzerdə səhifə qovluq saxlaya bilmir, ona görə dəstək qovluğu yoxdur: yuxarıdakı Başlanğıc paketindən istifadə edin. Kompilyasiya olunmuş `.fas` və `.vlx` fayllar və yerli proqramlar yenə də qəbul edilmir.

## Faylı tarixçədən yenidən yükləyin

{{ui:Tarixçə}} bu brauzerdə yüklədiyiniz faylları, ən yenisi əvvəldə olmaqla, sadalayır. Birini yenidən yükləmək üçün onun yanındakı {{ui:Yüklə}} düyməsinə klik edin; kompüterinizdə axtarmadan.

## CadCraft-ın yükləyə bilmədiyi fayllar

| Fayl | Nədir | Nə etmək lazımdır |
|---|---|---|
| `.fas`, `.vlx` | kompilyasiya olunmuş və ya qorunan LISP | onun `.lsp` mənbə faylını yükləyin |
| `.arx`, `.crx`, `.dbx` | yerli Windows proqramları | bunları CadCraft-da işlətməyin heç bir yolu yoxdur |
| `.dvb` | VBA layihəsi | bunları CadCraft-da işlətməyin heç bir yolu yoxdur |
| `.craft`, `.lua`, `.py` | CraftScript skriptləri | onları PartCraft-ın Skript iş sahəsində açın |

Tətbiqləri yüklə dialoqu faylı seçdiyiniz zaman onun bunlardan hansı olduğunu deyir.

## Proqramı dayandırın

{{key:Esc}} basın. Proqramın sorğularından birində Esc onu proqramın gözlədiyi kimi ləğv edir (onun öz təmizləmə işləri icra olunur). Əgər proqram məşğuldursa və heç nə soruşmursa, Esc onu dərhal dayandırır və bunu deyir; yüklənmiş proqramlarınız yüklü qalır.

:::note
Proqramın çertyojda dəyişdirdiyi hər şey bir addımdır: bir {{key:Mod+Z}} hamısını geri qaytarır.
:::
