---
title: Shtrixlash va toʻldirish sohalari
summary: Sohani ichiga bosib yoki yopiq shakllarni tanlab, qattiq rang yoki standart naqsh bilan toʻldiring, naqshning masshtabi va burchagini belgilang hamda shtrixlashni keyin oʻzgartiring.
keywords: shtrixlash, bhatch, toʻldirish, qattiq toʻldirish, naqsh, ansi31, ansi37, gʻisht, tuproq, setka, kesim chiziqlari, poshe, orol, chegara, masshtab, burchak
from: e7feb344
---

## Nima yasaysiz

ANSI31 naqshi bilan toʻldirilgan devor kesimi, ichida boʻsh qoldirilgan ustun va ustunga qattiq toʻldirish.

## Sohaning ichiga bosib shtrixlash

1. Toʻrtburchak (`REC`, `0,0`, `@2000,1200`) va uning ichiga aylana (`C`, `1000,600`, `300`) chizing. {{ui:Hammasini koʻrsatish}} ni bosing.
2. {{ui:Shtrixlash}} tugmasini {{ui:Chizish}} guruhida bosing yoki `H` yozib {{key:Enter}} ni bosing. Tarixda joriy naqsh koʻrsatiladi, masalan `Current hatch: ANSI31, scale 1, angle 0°`.
3. `P` yozing va {{key:Enter}} ni bosing, `ANSI31` yozing va {{key:Enter}} ni bosing.
4. `SC` yozing va {{key:Enter}} ni bosing, `20` yozing va {{key:Enter}} ni bosing. Naqsh oʻlchamlari qogʻozda, shuning uchun 1:20 da chop etiladigan chizmaga masshtab 20 kerak.
5. `Ichki nuqtani koʻrsating` da toʻrtburchak ichiga, aylananing tashqarisiga bosing. Shtrixlash oldindan koʻrinish sifatida chiqadi.
6. {{key:Enter}} ni bosing. Toʻrtburchak shtrixlanadi; ichidagi aylana boʻsh qoladi, chunki u orol.

Bir nechta sohaning ichiga {{key:Enter}} bosishdan oldin bosing, ularni bitta shtrixlash qilish uchun. `U` oxirgi sohani bekor qiladi.

## Qattiq toʻldirish

1. `H` yozing va {{key:Enter}} ni bosing.
2. `P` yozing, {{key:Enter}} ni bosing, `SOLID` yozing va {{key:Enter}} ni bosing.
3. Aylana ichiga bosing, soʻng {{key:Enter}} ni bosing.

## Tanlagan yopiq shakllarni shtrixlash

Ichiga bosish oʻrniga `Ichki nuqtani koʻrsating` da `S` (Obyektlarni tanlash) yozing va yopiq polichiziqlar, aylanalar yoki yopiq ellipslarni tanlang, soʻng {{key:Enter}} ni bosing. Boshqalarning ichidagi shakllar navbat bilan boʻsh qoladi (tashqarisi shtrixlanadi, keyingisi boʻsh, va hokazo).

## Naqshlar

Roʻyxat uchun naqsh soʻrovida `?` yozing. Standart naqshlar: ANSI31 dan ANSI38 gacha, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH va SOLID. Dyuymdagi chizmada (yoki uzunlik formati fut va dyuym boʻlsa), AutoCAD dagi kabi naqshlarning dyuymli oʻlchamlari ishlatiladi; aks holda millimetrlisi.

{{ui:Burchak}} (`A`) butun naqshni buradi: 90° dagi ANSI31 teskari tomonga ogʻadi.

**Naqsh fayllari.** `Ichki nuqtani koʻrsating` da `F` (Naqsh fayli) ni yozing va `.pat` faylni tanlang. Undagi naqshlar roʻyxatga qoʻshiladi; bir nechta boʻlsa, qaysi birini ishlatishni soraydi. CadCraft oʻqiy oladigan naqshi yoʻq fayl buni aytadi, va oʻtkazib yuborilgan har qanday naqsh sanab chiqiladi. `.pat` faylidagi oʻlchamlarning oʻz birligi yoʻq, shuning uchun ular chizmaning birliklarida oʻqiladi. Faqat odatdagi `.pat` formatida yozilgan fayllar sinab koʻrilgan; boshqa dastur yaratgan fayllar sinab koʻrilmagan.

## Shtrixlashni oʻzgartirish

Uni tanlang (uning chiziqlaridan birini bosing). {{ui:Xossalar}} da: {{ui:Naqsh}}, {{ui:Namuna masshtabi}} va {{ui:Namuna burchagi}}. Ochilgan chizmalardagi shtrixlashlar standart naqshlardan biri boʻlsa, oʻz naqshini koʻrsatadi; boshqalari oʻz rangining yengil tusida koʻrinadi.

## Keng tarqalgan xatolar

- **“Bu nuqta atrofida yopiq chegara yoʻq.”** Konturda boʻshliq bor, yoki bir qismi ekrandan tashqarida: CadCraft faqat ekranda koʻringanini koʻradi. Boʻshliqni yoping (burchaklarga yaqinlashtirib) yoki uzoqlashtiring.
- **“Naqsh bu masshtabda chizish uchun juda zich.”** Chiziqlar chizma koʻrsata oladiganidan yaqinroq boʻladi. Kattaroq masshtab ishlating: chop etish masshtabini sinang (1:20 uchun 20).
- **Naqsh juda katta yoki juda kichik koʻrinadi.** Masshtab naqsh birligidagi chizma birliklari soni; yuqoridagi 4-qadamga qarang.
- **Shtrixlash konturga ergashmay qoldi.** {{cmd:HATCH}} bilan yaratilgan shtrixlash u yaratilgan obyektlarga bogʻlangan qoladi: konturni koʻchirsangiz, buring yoki masshtablang, shtrixlash ham ergashadi; tutqich bilan qayta shakllantirsangiz, shtrixlash qayta hisoblanadi. Bogʻlanish kontur yopilmay qolganda, shtrixlashning oʻzini qoʻlda qayta shakllantirganda yoki uni kesganda tugaydi, va buyruq satri buni aytadi. Hech narsa yoʻqolmaydi: qayta bogʻlash uchun sohani yana shtrixlang.

## Chegarasiga bogʻlangan shtrixlash

`HATCH` bilan yaratgan shtrixlashingiz uni chegaralagan narsani eslab qoladi. Chegarani koʻchirsangiz, burasiz yoki masshtablasangiz, shtrixlash va uning naqshi ham ergashadi. Chegarani shakllantirish uchun tutqichni sudrang: shtrixlash qayta hisoblanadi. Shtrixlashni oʻzini alohida koʻchirsangiz, uning chegarasi ham birga keladi, xuddi chizma dasturidagi toʻldirilgan shakl kabi.

Chegara boʻlmasa yoki siz shtrixlashni qoʻlda qayta shakllantirsangiz, bogʻlanish tugaydi va buyruq satri buni aytadi. Shtrixlashning oʻzi qoladi. Bogʻlanmagan shtrixlash uchun shtrixlash paytida `AS` yozing. Shtrixlashni chegarasi bilan nusxalasangiz, nusxa oʻz bogʻlanishiga ega boʻladi.

{{cmd:HATCHEDIT}} (`HE`) shtrixlashning naqshi, masshtabi, burchagi va koordinata boshini oʻzgartiradi, uni chegaraga bogʻlaydi yoki bogʻlanishni tugatadi. Bogʻlanish DWG va DXF 2000 fayllarda saqlanadi. DXF R12 faylida shtrixlash obyekti yoʻq va boshqa dasturlarda yaratilgan bogʻlanishlar oʻqilmaydi: ular uchun {{cmd:HATCHEDIT}} dan va Bogʻlash dan foydalaning.

Chegarasi boʻlmagan shtrixlash (chegara oʻchirilgan yoki fayl uni olib kelmagan) chegarani qaytarishi mumkin: {{cmd:HATCHGENERATEBOUNDARY}} (`HGB`) shtrixlashning har bir halqasi atrofida yopiq polichiziq chizadi va Ha desangiz, shtrixlashni ularga bogʻlaydi.

## Gradient toʻldirish

{{cmd:GRADIENT}} (`GD`) sohani naqsh oʻrniga gradient bilan toʻldiradi: {{cmd:HATCH}} dagi bilan bir xil tanlovlar, soʻng turni soʻraydi (chiziqli, silindrsimon, sferik, yarim sferik, egri va ularning teskarilari), bitta rang tusi bilan yoki ikki rang, burchak, markazlashgan yoki yoʻq. {{cmd:HATCH}} da `G` varianti xuddi shuni qiladi. {{cmd:HATCHEDIT}} `G` yoki {{ui:Xossalar}} ning Gradient boʻlimi gradientni oʻzgartiradi yoki istalgan shtrixlashni gradientga aylantiradi.

Gradient ekranda va chop etishda koʻrinadi. DWG 2004 yoki undan keyingi versiyada saqlansa, boshqa dasturlar haqiqiy gradient shtrixlashni oladi. DXF 2000 va DWG 2000 da gradient yoʻq: u yerda CadCraft uni oʻzi uchun saqlaydi, boshqa dasturlar birinchi rangdagi qattiq toʻldirishni koʻradi.

## Shtrixlashni kesish

{{cmd:TRIM}} shtrixlashni boshqa obyekt kabi kesadi. Kesuvchi chetning olib tashlanishini xohlagan tomonida shtrixlashni bosing: chetlar shtrixlangan sohani boʻladi va oʻsha boʻlak olib tashlanadi. Tez rejimda har bir obyekt kesuvchi chetdir; koʻp boʻlsa, avval chetlarni tanlang (`T` varianti). Kesilgan shtrixlash endi oʻz chegarasiga bogʻlanmaydi, chunki u endi uni toʻldirmaydi.
