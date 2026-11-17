---
title: Rejani oʻlchash
summary: Chiziqli, moslashtirilgan, burchakli, radius va diametr oʻlchamlarini qoʻshing, Oʻlchamni davom ettirish va Asosiy chiziqdan oʻlcham bilan zanjirlang va matnni almashtiring.
keywords: oʻlcham, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, zanjir, qator, izohlash, oʻlcham asbobi, oʻlchash, qayerda, topish, asboblar paneli, mm, cm, m, km, birliklar
from: 9ee65123
---

## Nima yasaysiz

Oʻlchamli xona: umumiy eni va balandligi, bir devor boʻylab oʻlchamlar qatori, qiyshaygan devor, egri burchak va burchak.

Boshlashdan oldin, agar chizmangiz katta boʻlsa, [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings) ni oʻqing: oʻlcham matni standart boʻyicha 2.5 chizma birligi balandlikda, bu millimetrdagi chizmada juda kichik. Quyidagi qadamlar uchun avval `DIMSCALE` kiriting, {{key:Enter}} ni bosing, `50` kiriting va {{key:Enter}} ni bosing.

## Oʻlchov asboblari qayerda

CadCraft menyu uslubida (CadCraft ishga tushadigan uslub), oʻlchov asboblari chizma ustidagi asboblar panelida, {{ui:Izohlash}} guruhida: {{ui:Chiziqli}}, {{ui:Moslashtirilgan}}, {{ui:Burchak}}, {{ui:Radius}} va {{ui:Diametr}}. Guruhning {{ui:Koʻproq}} menyusida {{ui:Oʻlchamni davom ettirish}} va {{ui:Asosiy chiziqdan oʻlcham}} bor. Tugma ustiga kursorni olib boring, u nima qilishini koʻrasiz.

- {{ui:Klassik chizmachilik}} yoki {{ui:Lenta}} menyu uslubida {{ui:Izohlash}} yorligʻini oching: asboblar uning {{ui:Oʻlchamlar}} panelida. {{ui:Klassik chizmachilik}} da {{ui:Chiziqli}} ham {{ui:Bosh sahifa}} yorligʻida, {{ui:Izohlar}} ostida bor. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).
- Yoki chizma ostidagi buyruq satriga buyruqni yozing va {{key:Enter}} ni bosing: `DLI` (chiziqli), `DAL` (moslashgan), `DAN` (burchakli), `DRA` (radius), `DDI` (diametr), `DCO` (davom), `DBA` (asosiy chiziq).
- Tor ekranda asboblar paneli bir qator boʻladi: {{ui:Izohlash}} ga yetish uchun uni yon tomonga suring.

Uzunliklarni mm, cm, m yoki km da koʻrsatish uchun qarang: [Oʻlchamlar mm, cm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Oʻlchash uchun biror narsa chizing

1. `PL` kiriting va {{key:Enter}} ni bosing.
2. `0,0` kiriting va {{key:Enter}} ni bosing.
3. `@6000,0` kiriting va {{key:Enter}} ni bosing.
4. `@1500<60` kiriting va {{key:Enter}} ni bosing.
5. `@0,2700` kiriting va {{key:Enter}} ni bosing.
6. `@-6750,0` kiriting va {{key:Enter}} ni bosing.
7. `C` kiriting va {{key:Enter}} ni bosing. Kontur yopiladi.
8. Aylana boshlash uchun `C` kiriting va {{key:Enter}} ni bosing.
9. Devorlardan uzoqda, xona ichida markaz uchun bosing.
10. `600` kiriting va {{key:Enter}} ni bosing. Bu ustun.
11. {{ui:Hammasini koʻrsatish}} ni bosing.

## Chiziqli: gorizontal yoki vertikal

1. `DLI` kiriting va {{key:Enter}} ni bosing.
2. `Specify first extension line origin` soʻrovida pastki chap burchakka ilashing (Uchi) va bosing.
3. `Specify second extension line origin` soʻrovida pastki oʻng burchakka ilashing va bosing.
4. Krestchani xonaning pastiga olib boring. Oʻlcham unga ergashadi, gorizontal.
5. Oʻlcham chizigʻini joylashtirish uchun bosing.

Tarixda `Dimension text = 6000` deb yoziladi.

Yoʻnalishni oʻlchamning qayerga qoʻyilishi belgilaydi: pastda yoki yuqorida boʻlsa gorizontal, chapda yoki oʻngda boʻlsa vertikal oʻlcham boʻladi. Majburlash uchun joylashtirishdan oldin `H` ([Gorizontal (H)]), `V` (Vertikal) yoki `R` ([Aylantirilgan (R)], soʻngra burchak) kiriting.

:::tip
Birinchi nuqtani bosish oʻrniga soʻrovda {{key:Enter}} ni bosing, soʻngra chiziq, yoy, aylana yoki polichiziq kesmasini bosing. CadCraft ikkala uchini oʻzi oladi.
:::

## Davom ettirish: oʻlchamlar qatori

{{cmd:DIMCONTINUE}} ({{ui:Izohlash}} › {{ui:Koʻproq}} › {{ui:Oʻlchamni davom ettirish}}, yoki `DCO`) oxirgi chiziqli yoki moslashgan oʻlchamdan davom etadi, har bir yangisi oldingisining tugagan joyidan boshlanadi.

1. `DLI` kiriting va {{key:Enter}} ni bosing.
2. Birinchi kelib chiqish uchun `0,0` kiriting va {{key:Enter}} ni bosing.
3. Ikkinchi kelib chiqish uchun `2000,0` kiriting va {{key:Enter}} ni bosing.
4. Oʻlchamni joylashtirish uchun xona pastiga bosing.
5. `DCO` kiriting va {{key:Enter}} ni bosing.
6. `4500,0` kiriting va {{key:Enter}} ni bosing. Ikkinchi oʻlcham birinchisidan davom etadi, xuddi shu chiziqda.
7. Pastki oʻng burchakka ilashing va bosing. Uchinchisi qatorni tugatadi.
8. Buyruqni tugatish uchun {{key:Enter}} ni bosing.

:::note
Bu yerda nuqtalar ataylab mutlaq koordinatalarda yozilgan. `@` nuqta siz bergan oxirgi nuqtadan hisoblanadi, oxirgi nuqta esa oldingi oʻlcham chizigʻini joylashtirgan joy, oʻlchamning oxiri emas. Oʻlchamlar qatorida mutlaq nuqtalar, ilashishlar yoki {{ui:Ortho}} yoqilganda yalang masofa xavfsizroq.
:::

Buyruqdan chiqmasdan qatordagi oxirgi oʻlchamni qaytarish uchun `U` kiriting va {{key:Enter}} ni bosing.

## Asosiy chiziq: bitta chiziqdan tizilgan oʻlchamlar

{{cmd:DIMBASELINE}} ({{ui:Izohlash}} › {{ui:Koʻproq}} › {{ui:Asosiy chiziqdan oʻlcham}}, yoki `DBA`) har bir yangi oʻlchamni oxirgisining birinchi kelib chiqish nuqtasidan oʻlchaydi va har birini bir qadam tashqariroq joylaydi.

1. `DLI` kiriting va {{key:Enter}} ni bosing.
2. Pastki chap burchakka ilashing va bosing.
3. Yuqori chap burchakka ilashing va bosing.
4. Krestchani xonaning chap tomoniga olib boring va bosing. Vertikal oʻlcham paydo boʻladi.
5. `DBA` kiriting va {{key:Enter}} ni bosing.
6. 60 gradusli devorning yuqori uchiga ilashing (Uchi) va bosing. Ikkinchi vertikal oʻlcham paydo boʻladi, birinchisidan bir qadam tashqariroq.
7. Tugatish uchun {{key:Enter}} ni bosing.

## Moslashgan: qiyshiq chiziqning haqiqiy uzunligi

1. `DAL` kiriting va {{key:Enter}} ni bosing.
2. Obyekt tanlash uchun {{key:Enter}} ni bosing.
3. 60 gradusli devorni bosing.
4. Tashqariga suring va joylashtirish uchun bosing.

Matn 1500 ni koʻrsatadi: devor boʻylab oʻlchangan haqiqiy uzunlik.

## Radius va diametr

1. `DRA` kiriting va {{key:Enter}} ni bosing.
2. Ustun aylanasini bosing.
3. Krestchani suring. Yoʻnaltiruvchi chiziq markazdan krestchaga qarab boradi.
4. Matnni joylashtirish uchun bosing.

Matn `R600` deb yozadi. {{cmd:DIMDIAMETER}} (`DDI`) xuddi shunday, lekin ⌀ belgisi va diametr bilan.

## Burchakli

Bu yerdagi devorlar bitta polichiziq, shuning uchun burchakni uning uchi boʻyicha oʻlchang. (Alohida ikki chiziq orasida chiziqlarning oʻzini bosishingiz mumkin.)

1. `DAN` kiriting va {{key:Enter}} ni bosing.
2. `Select arc, circle or line, or Enter for a vertex` soʻrovida {{key:Enter}} ni bosing.
3. `Specify angle vertex` soʻrovida pastki oʻng burchakka ilashing va bosing.
4. `Specify first angle endpoint` soʻrovida pastki chap burchakka ilashing va bosing.
5. `Specify second angle endpoint` soʻrovida 60 gradusli devorning yuqori uchiga ilashing va bosing.
6. Krestchani xona ichida, burchak yaqinida suring va bosing.

Matn `120°` deb yozadi, bu burchakning ichki qismi. Burchakning boshqa tomonida joylashtirilsa, oʻlcham oʻsha tomondagi burchakni oʻlchaydi. Birinchi soʻrovda yoyni bosing, u qamrab olgan burchakni oʻlchash uchun, yoki ikki chiziqni bosing, ular orasidagi burchakni oʻlchash uchun.

## Matnni oʻzgartirish

Oʻz matningizni yozish uchun oʻlchamni joylashtirishdan oldin `T` kiriting va {{key:Enter}} ni bosing, soʻngra matnni yozing. Matningizda `<>` oʻlchangan qiymatni bildiradi: `<> TYP.` `6000 TYP.` beradi. Oʻlchangan qiymatni saqlash uchun boʻsh qatorda {{key:Enter}} ni bosing.

Mavjud oʻlchamni oʻzgartirish uchun:

1. Uni bosing.
2. Oʻng panelda {{ui:Matn}} ga yozing. Oʻlchangan qiymat uchun boʻsh qoldiring.
3. {{key:Enter}} ni bosing.

## Oʻlchamlar geometriyaga ergashadi

Oʻlcham oʻz nuqtalarini eslab qoladi. Uning tutqichlaridan birini suring yoki uni oʻlchayotgan obyektlar bilan birga koʻchiring, aylantiring yoki masshtablang — u qayta oʻlchaydi. Agar oʻlchamni koʻchirmasdan geometriyani choʻzsangiz, oʻlcham ergashmaydi: oʻz nuqtalarini saqlaydi.

## Keng tarqalgan xatolar

- **Matn va oʻqlar juda mayda yoki juda katta.** Umumiy masshtabni oʻrnating: qarang [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings).
- **"Oʻlchamoqchi boʻlgan burchak ichida nuqta tanlang."** Burchakli oʻlcham uchun bosgan nuqtangiz burchak tomonlaridan birida turibdi. Uni burchak ichiga suring.
- **Davom ettirish notoʻgʻri oʻlchamdan boshlandi.** U doim shu seansda yaratilgan oxirgi chiziqli yoki moslashgan oʻlchamdan davom etadi. Avval davom ettirish kerak boʻlgan oʻlchamni yarating (yoki qayta yarating).
- **Oʻlcham vertikal chiqdi.** Uni yon tomonga joylashtirdingiz. Joylashtirishdan oldin `H` kiriting.
- **Fut va dyuymlar.** Avval chizmaning uzunlik formatini {{ui:Arxitektura}} ga oʻrnating yoki oʻlchamning {{ui:Format}} ini {{ui:Xossalar}} da oʻrnating: qarang [Oʻlchamlarda fut va dyuym](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Raqamlar kerakli birlikda emas.** {{ui:Matndagi birliklar}} ni tanlang: qarang [Oʻlchamlar mm, cm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
