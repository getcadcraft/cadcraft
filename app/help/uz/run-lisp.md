---
title: LISP rutinalarini ishga tushirish
summary: CadCraft LISP nimalarni ishga tushiradi (funksiyalar, soʻrovlar, buyruqlar, obyektlar, muloqot oynalari, vla obyektlari), LISP ni buyruq satriga qanday kiritish va hali nimalari yoʻqligi.
keywords: lisp, rutina, lsp, dcl, dialog, buyruq, defun, entget, ssget, vla, vlax, vl, getpoint, xato, moslik, nima ishlaydi
from: 571bc077
---

## Nimalarni oʻrganasiz

Boshqa CAD dasturi uchun yozilgan LISP rutinasini yuklaganda nimani kutish kerak: qaysi qismlari CadCraft da ishlaydi va hali nimalari yoʻq.

CadCraft oʻz LISP ga ega. U ochiq AutoLISP maʼlumotnomasidan yozilgan, boshqa birovning dasturidan emas, shuning uchun AutoCAD uchun yozilgan koʻpchilik rutinalar oʻzgarishsiz ishlaydi. Qayerda biror narsa yetishmasa, buyruq satri funksiyani nomlaydi, shunda CadCraft dagi kamchilikni rutinadagi xatodan ajrata olasiz.

## LISP ni buyruq satrida kiriting

`(` bilan boshlanadigan ifodani kiriting va {{key:Enter}} ni bosing: `(+ 1 2)` `3` ni chiqaradi. `!name` oʻzgaruvchining qiymatini chiqaradi. Hali yopilmagan ifoda keyingi satrni kutadi.

Soʻrovda ifoda javob boʻladi: "Radiusni koʻrsating" soʻroviga `(* 2 12.5)` ni kiriting, natija 25.

## Nima ishlaydi

- **Til:** `defun` (`/` dan keyin mahalliy oʻzgaruvchilar bilan), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` va `*error*` (mahalliy `*error*` ishlaydi). Nomlar bosh va kichik harflarga sezgir emas; butun va haqiqiy sonlar farq qiladi, kutganingizdek (`(/ 7 2)` 3 ga teng).
- **Oʻrnatilgan funksiyalar:** matematika, roʻyxatlar (`car`, `cdr` va ularning oilasi, `assoc`, `nth`, `member`, `subst`, `append`…), satrlar (`strcat`, `substr`, `strcase`, `wcmatch`…), konvertatsiyalar (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometriya (`polar`, `distance`, `angle`, `inters`) va fayllar (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Buyruqlar:** `(defun c:NAME …)` buyruq yaratadi. `(command …)` va `(command-s …)` CadCraft ning oʻz buyruqlarini boshqaradi, sizning javobingiz uchun `pause` bilan.
- **Soʻrovlar:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `initget` kalit soʻzlari bilan `getkword`, `entsel`, `nentsel` va `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, filtr roʻyxatlari va `-4` tekshiruvlari bilan).
- **Obyektlar roʻyxat sifatida:** `entget`, `entmod`, `entmake` (bloklar bilan ham), `entdel`, `entlast`, `entnext` (blok havolasining atributlari undan keyin ATTRIB sifatida, soʻng SEQEND bilan keladi, shuning uchun atribut rutinalari ishlaydi), `handent`, tanlov toʻplamlari, `tblsearch` va `tblnext`, `layoutlist`, `regapp`, CadCraft da mavjud sozlamalar uchun `getvar` va `setvar`.
- **Muloqot oynalari:** `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog` bilan `.dcl` fayllar. Tugmalar, tahrirlash maydonlari, roʻyxat maydonlari, ochiladigan roʻyxatlar, almashtirgichlar, radio tugmalar, qatorlar, ustunlar va qutilar hammasi koʻrsatiladi. Muloqot oynasini vaqtinchalik faylga yozadigan rutina ham ishlaydi.
- **Obyektlar:** `vl-load-com` (u hech narsa qilmaydi; hech narsani yuklash shart emas), `vl-` roʻyxat va satr funksiyalari, `vl-catch-all-apply`, `vla-get-…` / `vla-put-…` xususiyatlari, `vla-…` usullari va Bloklar, Qatlamlar va Maketlar toʻplamlari boʻylab `vlax-for`: model fazosi va blok taʼriflari, variantlar va xavfsiz massivlar bilan.

## Sinovdan oʻtgan rutinalar

CadCraft ning sinovlari bu tekshiruvlar uchun yozilgan rutinalar toʻplamini ishga tushiradi (tanlov filtrlari, soʻrovlar, buyruqlar, obyektlar, xato ishlovchilari) va odamlar nomi bilan soʻragan bitta mashhur rutina: Lee Mac ning DelBlocks, uning muloqot oynasi orqali nomi bilan va blokni tanlab. CadCraft ning oʻz {{cmd:DELBLOCKS}} buyrugʻi ham bor, shuning uchun bunga rutina kerak emas.

## Hali qurilmagan

- `grread` (sichqonchani oʻzingiz kuzatish), reaktorlar (`vlr-…`), egri chiziq funksiyalari (`vlax-curve-…`), lugʻatlar va kengaytirilgan maʼlumotlar (`dictsearch`, `entget` va `entmake` dagi xdata) hamda Express Tools ning `acet-…` funksiyalari.
- Muloqot oynalaridagi rasmlar va slaydlar boʻsh kadr sifatida koʻrsatiladi.
- Boshqa dasturni ishga tushirish, Windows reyestri va siz yuklagan fayllardan tashqari fayllar: rutina oʻz vaqtinchalik fayllarini yozishi va oʻqishi mumkin, ular sahifani yopguncha saqlanadi.

Rutina bulardan biriga yetganda buyruq satrida "funksiya taʼrifi topilmadi" va nom koʻrsatiladi, hamda CadCraft da bu hali yoʻqligi aytiladi.

## Qochish kerak boʻlgan xatolar

- **CadCraft buyrugʻi bilan bir xil nomdagi buyruq.** CadCraft ning oʻz buyrugʻi qoladi. Rutina buyrugʻini buyruq satrida `(c:NAME)` sifatida ishga tushiring.
- **Ishonmagan LISP ni ishga tushirish.** Rutina chizmadagi hamma narsani oʻzgartira oladi, lekin undan tashqaridagi hech narsani oʻzgartira olmaydi: u sizning fayllaringizga, boshqa saytlarga yoki boshqa ilovalarga yeta olmaydi.
