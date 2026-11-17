---
title: Shtrixlash va toʻldirish sohalari
summary: Sohaning ichini bosish yoki yopiq shakllarni tanlash orqali qattiq rang yoki standart naqsh bilan toʻldiring, naqshning masshtabi va burchagini sozlang hamda shtrixlashni keyinchalik oʻzgartiring.
keywords: shtrixlash, bhatch, toʻldirish, qattiq toʻldirish, naqsh, ANSI31, ANSI37, gʻisht, tuproq, setka, kesim chiziqlari, poshe, orol, chegara, masshtab, burchak
from: 14399174
---

## Nima yasaysiz

ANSI31 naqshi bilan toʻldirilgan devor kesimi, unda boʻsh qoldirilgan ustun va ustunda qattiq toʻldirish.

## Sohaning ichini bosib shtrixlash

1. Toʻgʻri toʻrtburchak chizing (`REC`, `0,0`, `@2000,1200`) va uning ichida aylana chizing (`C`, `1000,600`, `300`). {{ui:Hammasini koʻrsatish}} tugmasini bosing.
2. {{ui:Chizish}} guruhidagi {{ui:Shtrixlash}} tugmasini bosing yoki `H` yozib {{key:Enter}} tugmasini bosing. Buyruqlar tarixida joriy naqsh koʻrsatiladi, masalan `Current hatch: ANSI31, scale 1, angle 0°`.
3. `P` yozing va {{key:Enter}} tugmasini bosing, soʻngra `ANSI31` yozing va {{key:Enter}} tugmasini bosing.
4. `SC` yozing va {{key:Enter}} tugmasini bosing, soʻngra `20` yozing va {{key:Enter}} tugmasini bosing. Naqsh oʻlchamlari qogʻozda beriladi, shuning uchun 1:20 masshtabda chop etiladigan chizma 20 masshtabni talab qiladi.
5. `Pick internal point` da toʻrtburchak ichida, lekin aylanadan tashqarida bosing. Shtrixlash oldindan koʻrinishda paydo boʻladi.
6. {{key:Enter}} tugmasini bosing. Toʻrtburchak shtrixlanadi; ichidagi aylana boʻsh qoladi, chunki u orol hisoblanadi.

Bir nechta sohani bitta shtrixlashga birlashtirish uchun {{key:Enter}} bosishdan oldin ularning ichini bir necha marta bosing. `U` oxirgi sohani bekor qiladi.

## Qattiq toʻldirish

1. `H` yozib {{key:Enter}} tugmasini bosing.
2. `P` yozing, {{key:Enter}} tugmasini bosing, `SOLID` yozing va {{key:Enter}} tugmasini bosing.
3. Aylana ichini bosing, soʻngra {{key:Enter}} tugmasini bosing.

## Tanlagan yopiq shakllarni shtrixlash

Ichini bosish oʻrniga `Pick internal point` da `S` (Obyektlarni tanlash) yozing va yopiq polichiziqlar, aylanalar yoki yopiq ellipslarni tanlang, soʻngra {{key:Enter}} tugmasini bosing. Bir-birining ichidagi shakllar navbatma-navbat boʻsh qoladi (tashqi shakl shtrixlanadi, undan keyingisi boʻsh qoladi va hokazo).

## Naqshlar

Roʻyxat uchun naqsh soʻrovida `?` yozing. Standart naqshlar: ANSI31 dan ANSI38 gacha, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH va SOLID. Chizma dyuymda boʻlsa (yoki uzunlik formati futlar va dyuymlar boʻlsa), naqshlarning dyuymli oʻlchamlari ishlatiladi, AutoCADʼdagidek; aks holda millimetrli oʻlchamlar.

{{ui:Burchak}} (`A`) butun naqshni buradi: 90° dagi ANSI31 boshqa tomonga qiyshayadi.

**Naqsh fayllari.** `Pick internal point` da `F` (Naqsh fayli) yozing va `.pat` faylini tanlang. Undagi naqshlar roʻyxatga qoʻshiladi; bir nechtasi boʻlsa, qaysi birini ishlatishni soʻraydi. CadCraft oʻqiy olmaydigan naqshli fayl buni aytadi, va oʻtkazib yuborilgan har bir naqsh sanaladi. `.pat` faylidagi oʻlchamlarning oʻz birligi yoʻq, shuning uchun ular chizma birliklarida oʻqiladi. Faqat odatdagi `.pat` formatida yozilgan fayllar sinab koʻrilgan; boshqa dastur yaratgan birorta ham fayl sinalmagan.

## Shtrixlashni oʻzgartirish

Uni tanlang (uning chiziqlaridan birini bosing). {{ui:Xossalar}} da: {{ui:Naqsh}}, {{ui:Namuna masshtabi}} va {{ui:Namuna burchagi}}. Ochilgan chizmalardagi shtrixlashlar, agar standart naqshlardan biri boʻlsa, oʻz naqshini koʻrsatadi; boshqalari oʻz rangining ochroq tonida koʻrinadi.

## Odatiy xatolar

- **"Bu nuqta atrofida yopiq chegara yoʻq."** Konturda uzilish bor yoki uning bir qismi ekrandan tashqarida: CadCraft faqat ekrandagini koʻradi. Uzilishni yoping (burchaklarga yaqinlashtirib) yoki kichraytiring.
- **"Naqsh bu masshtabda chizish uchun juda zich."** Chiziqlar chizma koʻrsata oladiganidan yaqinroq. Kattaroq masshtab ishlating: chop etish masshtabini sinab koʻring (1:20 uchun 20).
- **Naqsh juda katta yoki juda kichik koʻrinadi.** Masshtab naqsh birligiga chizma birligida beriladi; yuqoridagi 4-qadamga qarang.
- **Konturni koʻchirish shtrixlashni koʻchirmaydi.** Shtrixlash oʻz chegarasiga bogʻlanmagan. Ikkalasini ham koʻchiring yoki qaytadan shtrixlang.

## Chegaraga bogʻlangan shtrixlash

`HATCH` bilan yaratilgan shtrixlash oʻzini chegaralayotgan narsani eslab qoladi. Chegarani koʻchiring, buring yoki masshtablang — shtrixlash va uning naqshi ham birga oʻzgaradi. Chegara shaklini oʻzgartirish uchun gripni suring — shtrixlash qayta hisoblanadi. Shtrixlashni oʻzini koʻchirsangiz, uning chegarasi ham birga koʻchadi, xuddi chizma dasturidagi toʻldirilgan shakl kabi.

Havola uziladi va buyruq satri buni aytadi, agar chegara endi yopilmasa yoki shtrixlashni qoʻlda qayta shakllantirsangiz. Shtrixlashning oʻzi qoladi. Mustaqil shtrixlash yaratish uchun shtrixlash paytida `AS` yozing. Chegarasi bilan birga nusxalangan shtrixlash oʻz havolasiga ega boʻladi.

`HATCHEDIT` (`HE`) shtrixlashning naqshi, masshtabi, burchagi va boshlanish nuqtasini oʻzgartiradi hamda uni chegaraga bogʻlaydi yoki bogʻlanishni uzadi. Havola DWG va DXF 2000 fayllarida saqlanadi. DXF R12 faylida shtrixlash obyekti yoʻq, boshqa dasturlarda yaratilgan havolalar esa oʻqilmaydi: ular uchun `HATCHEDIT` va Bogʻlash (L) dan foydalaning.

Chegarasi endi boʻlmagan shtrixlash (chegara oʻchirilgan yoki fayl chegarasiz kelgan) uni qaytarishi mumkin: `HATCHGENERATEBOUNDARY` (`HGB`) shtrixlashning har bir halqasi atrofida yopiq polichiziq chizadi va agar Ha desangiz, shtrixlashni ularga bogʻlaydi.

## Gradient toʻldirish

`GRADIENT` (`GD`) sohani naqsh oʻrniga gradient bilan toʻldiradi: `HATCH` bilan bir xil tanlovlar, soʻngra u turini soʻraydi (chiziqli, silindrik, sferik, yarim sferik, egri va ularning har biri teskarisi), bitta rang va tus yoki ikki rang, burchak va markazlashtirilgan yoki yoʻq. `HATCH` ichida `G` varianti xuddi shunday ishlaydi. `HATCHEDIT` `G` yoki {{ui:Xossalar}} ichidagi {{ui:Gradient}} ostida gradientni oʻzgartiradi yoki istalgan shtrixlashni gradientga aylantiradi.

Gradient ekranda va chop etishda koʻrinadi. DWG 2004 yoki undan yangi formatda saqlasangiz, boshqa dasturlar haqiqiy gradient shtrixlashni koʻradi. DXF 2000 va DWG 2000 da gradient yoʻq: u yerda CadCraft uni oʻzida saqlaydi, boshqa dasturlar esa birinchi rangdagi qattiq toʻldirishni koʻradi.

## Shtrixlashni kesish

`TRIM` shtrixlashni boshqa obyekt kabi kesadi. Olib tashlamoqchi boʻlgan tomonida shtrixlashni bosing: kesuvchi qirralar shtrixlangan sohani boʻladi va oʻsha boʻlak oʻchiriladi. Tez rejimda har bir obyekt kesuvchi qirra boʻladi; koʻp boʻlsa, avval qirralarni tanlang (`T` varianti). Kesilgan shtrixlash endi chegarasiga bogʻlanmagan, chunki u chegarani boʻlib toʻldirmaydi.
