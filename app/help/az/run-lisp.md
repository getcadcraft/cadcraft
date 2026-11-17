---
title: LISP rutinlərini işə salmaq
summary: CadCraft-ın LISP-də nəyi işə sala bildiyi (funksiyalar, sorğular, komandalar, obyektlər, dialoqlar, vla obyektləri), komanda sətrində LISP necə yazılır və hələ nəyin olmadığı.
keywords: lisp, rutin, lsp, dcl, dialoq, komanda, defun, entget, ssget, vla, vlax, vl, getpoint, xəta, uyğunluq, nə işləyir
from: 571bc077
---

## Öyrənəcəksiniz

Başqa CAD proqramı üçün yazılmış LISP rutinini yüklədikdə nə gözləmək lazım olduğunu: hansı hissələr CadCraft-da işləyir və hansılar hələ yoxdur.

CadCraft-ın öz LISP-i var. O, ictimai AutoLISP məlumat kitabçasından yazılıb, başqasının proqramından deyil, ona görə AutoCAD üçün yazılmış rutinlərin əksəriyyəti dəyişiklik olmadan işləyir. Çatışmayan yerdə komanda sətri funksiyanın adını göstərir, beləliklə CadCraft-dakı əksikliyi rutindəki səhvdən ayıra bilərsiniz.

## Komanda sətrində LISP yazın

`(` ilə başlayan ifadə yazın və {{key:Enter}} basın: `(+ 1 2)` `3` çap edir. `!ad` dəyişənin qiymətini çap edir. Hələ bağlanmayan ifadə növbəti sətiri gözləyir.

Sorğuda ifadə cavab olaraq işləyir: "Radius göstərin" sorğusunda `(* 2 12.5)` yazın, nəticə 25 olar.

## Nə işləyir

- **Dil:** `defun` (lokal dəyişənlər `/` sonrasında), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` və `*error*` (lokal `*error*` də işləyir). Adlar böyük-kiçik hərfə həssas deyil; tam və həqiqi ədədlər gözlədiyiniz kimi fərqlidir (`(/ 7 2)` nəticəsi 3-dür).
- **Daxili funksiyalar:** riyaziyyat, siyahılar (`car`, `cdr` və ailəsi, `assoc`, `nth`, `member`, `subst`, `append`…), sətirlər (`strcat`, `substr`, `strcase`, `wcmatch`…), çevirmələr (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), həndəsə (`polar`, `distance`, `angle`, `inters`) və fayllar (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Komandalar:** `(defun c:NAME …)` komanda yaradır. `(command …)` və `(command-s …)` CadCraft-ın öz komandalarını idarə edir; cavabınız üçün `pause` istifadə olunur.
- **Sorğular:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `initget` açar sözləri ilə `getkword`, `entsel`, `nentsel` və `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, filtr siyahıları və `-4` yoxlamaları ilə).
- **Obyektlər siyahı kimi:** `entget`, `entmod`, `entmake` (bloklar da daxil), `entdel`, `entlast`, `entnext` (blok referansının atributları ondan sonra ATTRIB kimi gəlir, sonra SEQEND, buna görə atribut rutinləri işləyir), `handent`, seçim dəstləri, `tblsearch` və `tblnext`, `layoutlist`, `regapp`, CadCraft-ın parametrləri üçün `getvar` və `setvar`.
- **Dialoqlar:** `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog` ilə `.dcl` faylları. Düymələr, redaktə qutuları, siyahı qutuları, açılan siyahılar, keçidlər, radio düymələr, sətirlər, sütunlar və qutular görünür. Dialoqunu müvəqqəti fayla yazan rutin də işləyir.
- **Obyektlər:** `vl-load-com` (heç nə etmir; yüklənməli heç nə yoxdur), `vl-` siyahı və sətir funksiyaları, `vl-catch-all-apply`, `vla-get-…` / `vla-put-…` xassələri, `vla-…` metodları və Blocks, Layers və Layouts kolleksiyaları üzərində `vlax-for`, model fəzası və blok təriflərləri, variantlar və təhlükəsiz massivlərlə.

## Sınaqdan keçirilmiş rutinlər

CadCraft-ın testləri bu yoxlamalar üçün yazılmış bir neçə rutini işə salır (seçim filtrləri, sorğular, komandalar, obyektlər, xəta işləyiciləri) və insanların adı ilə istədiyi məşhur bir rutini: Lee Mac-ın DelBlocks-unu, dialoqu vasitəsilə adı ilə və blok seçməklə. CadCraft-ın öz {{cmd:DELBLOCKS}} komandası da var, ona görə bunun üçün rutinə ehtiyac yoxdur.

## Hələ hazır deyil

- `grread` (siçanı özünüz izləmək), reaktorlar (`vlr-…`), əyri funksiyaları (`vlax-curve-…`), lüğətlər və genişləndirilmiş məlumat (`dictsearch`, `entget` və `entmake`-də xdata) və Express Tools-un `acet-…` funksiyaları.
- Dialoqlardakı şəkillər və slaydlar boş çərçivə kimi görünür.
- Başqa proqramı işə salmaq, Windows reyestri və yüklədiklərinizdən kənar fayllar: rutin öz müvəqqəti fayllarını yaza və oxuya bilər, bunlar səhifəni bağlayana qədər qalır.

Rutin bunlardan birinə çatdıqda komanda sətrində "no function definition" və adı görünür, və CadCraft-ın onu hələ dəstəkləmədiyi bildirilir.

## Qaçılmalı səhvlər

- **CadCraft-ın komandası ilə eyni adlı komanda.** CadCraft-ın öz komandası qalır. Rutinin komandasını komanda sətrində `(c:NAME)` kimi işə salın.
- **Etibar etmədiyiniz LISP-i işə salmaq.** Rutin çertyojdakı hər şeyi dəyişə bilər, lakin ondan kənarda heç nəyi: sizin fayllarınıza, digər saytlara və ya tətbiqlərə çata bilmir, lakin siz onu çalışdırmazdan əvvəl etibarlı olduğundan əmin olun.
