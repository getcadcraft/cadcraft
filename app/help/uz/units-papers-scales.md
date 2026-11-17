---
title: Birliklar, qogʻoz oʻlchamlari va masshtablar
summary: CadCraft da chizma birliklari nimani anglatishi, varaqlar va chop etishlar uchun qogʻoz oʻlchamlari, barcha standart masshtablar va matn hamda oʻlchamlar qanday chop etish masshtabiga bogʻlanishi.
keywords: units, birliklar, millimeters, millimetr, inches, dyuym, feet, fut, feet and inches, fut va dyuym, architectural, arxitektura, engineering, muhandislik, fractional, kasr, fractions, kasrlar, lunits, length format, uzunlik formati, precision, aniqlik, meters, metr, paper size, qogʻoz oʻlchami, a3, a1, arch d, ansi, tabloid, letter, scale, masshtab, 1:100, 1/4 inch, architectural scale, arxitektura masshtabi, engineering scale, muhandislik masshtabi, insunits
from: 8346236a
---

## Chizma birliklari

Siz toʻliq oʻlchamda chizasiz, chizma birliklarida. Bitta birlik nimani anglatishi chizmaning **Birliklar** sozlamasi bilan belgilanadi:

1. {{key:Esc}} tugmasini bosing, hech narsa tanlanmasin, {{ui:Model}} yorligʻida.
2. {{ui:Joriy sozlamalar}} da {{ui:Birliklar}} ni tanlang: {{ui:Birliksiz}}, {{ui:Millimetr}}, {{ui:Santimetr}}, {{ui:Metr}}, {{ui:Dyuym}} yoki {{ui:Fut}}.

Oʻlchamlar uzunliklarini chizma birligidan qatʼi nazar millimetr, santimetr, metr yoki kilometrda yozishi mumkin: qarang [Oʻlchamlar mm, cm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Birliklarni oʻzgartirish hech narsaning oʻlchamini oʻzgartirmaydi. U varaqlar va chop etishlarda masshtablar qanday oʻqilishini va qaysi masshtablar taklif qilinishini oʻzgartiradi. DWG yoki DXF dan ochilgan chizma fayldagi birliklarini saqlaydi; chap panelning {{ui:Chizma}} boʻlimi ularni koʻrsatadi.

{{ui:Birliksiz}} chizma qogʻozning birligida deb olinadi: ISO qogʻozda millimetr, AQSh qogʻozida dyuym.

## Fut va dyuym hamda kasrlar

Uzunliklar qanday **yozilishi va kiritilishi** alohida sozlama — uzunlik formati. U geometriyani oʻzgartirmaydi, faqat raqamlar qanday koʻrinishini va nimani kiritish mumkinligini oʻzgartiradi.

1. {{key:Esc}} tugmasini bosing, hech narsa tanlanmasin, {{ui:Model}} yorligʻida.
2. {{ui:Joriy sozlamalar}} da {{ui:Uzunlik formati}} ni tanlang: {{ui:Onlik}} (`150.5`), {{ui:Arxitektura}} (`12'-6 1/2"`), {{ui:Muhandislik}} (`12'-6.5"`), {{ui:Kasr}} (`150 1/2`) yoki {{ui:Ilmiy}} (`1.505E+02`).
3. {{ui:Aniqlik}} ni tanlang: oʻnlik kasr xonalari yoki eng kichik kasr (arxitektura uchun odatda 1/16).

Yoki {{cmd:UNITS}} (`UN`) yozing va uning ikki savoliga javob bering.

{{ui:Arxitektura}} yoki {{ui:Muhandislik}} bilan bitta chizma birligi AutoCAD dagi kabi bitta dyuym boʻladi: {{ui:Birliklar}} ni ham {{ui:Dyuym}} ga oʻrnating. Shunda uzunlik soʻraladigan har qanday joyda va {{ui:Xossalar}} oynalarida fut va dyumda yozishingiz mumkin:

| Yozasiz | Bildiradi |
|---|---|
| `12'6"` yoki `12'-6"` | 12 fut 6 dyuym (150) |
| `12'6-1/2"` | 12 fut 6½ dyuym. Kasrdan oldin chiziqcha qoʻying: {{key:Space}} buyruq qatorida {{key:Enter}} boʻladi. |
| `12'` | 12 fut |
| `6"` yoki `6` | 6 dyuym: oddiy raqam dyuym hisoblanadi |
| `1/2`, `6-1/2` | kasrlar istalgan formatda ishlaydi |

Nuqtalar ham shunday uzunliklarni qabul qiladi: `@12'6",0` yoki `@10'<90`. Burchaklar gradusda qoladi.

Format tarixda ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}} — maydonlar kvadrat dyuym va kvadrat fut sifatida), {{ui:Xossalar}} da, holat satridagi koordinatalarda va **yangi oʻlchamlarda** koʻrinadi. Varaqlar qogʻoz birliklarini (millimetr yoki dyuym) onlik sifatida saqlaydi.

:::note
Uzunlik formati DWG va DXF fayllarida saqlanadi, va har bir oʻlchamning oʻz formati bor: saqlangan chizma qanday qoldirilgan boʻlsa, shunday qayta ochiladi.
:::

## Qogʻoz oʻlchamlari

Varaqlar va model chop etishlari bu oʻlchamlarni ikkala yoʻnalishda ishlatadi:

| Qogʻoz | Oʻlchami | Varaqdagi birlik |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetr |
| ISO A3 | 420 × 297 mm | millimetr |
| ISO A2 | 594 × 420 mm | millimetr |
| ISO A1 | 841 × 594 mm | millimetr |
| ISO A0 | 1189 × 841 mm | millimetr |
| Letter | 11 × 8.5 in | dyuym |
| Legal | 14 × 8.5 in | dyuym |
| Tabloid / ANSI B | 17 × 11 in | dyuym |
| ANSI C | 22 × 17 in | dyuym |
| ANSI D | 34 × 22 in | dyuym |
| ARCH C | 24 × 18 in | dyuym |
| ARCH D | 36 × 24 in | dyuym |
| ARCH E | 48 × 36 in | dyuym |

Yangi varaqlar metrik va birliksiz chizmalar uchun ISO A3 da, dyuym yoki futdagi chizmalar uchun Tabloid da boshlanadi. Model chop etishlari ham xuddi shunday ISO A4 yoki Letter da boshlanadi, soʻng oxirgi tanlovingizni eslab qoladi. Ochilgan fayllardagi varaqlar oʻz oʻlchamlarini saqlaydi; bu roʻyxatda boʻlmasa "Maxsus" deb koʻrsatiladi.

## Masshtablar

`1:n` masshtab qogʻozdagi bir birlik modelda n xuddi shu birlikni koʻrsatishini bildiradi, shuning uchun 1:100 binoning 1 m ini qogʻozda 10 mm koʻrsatadi. CadCraft buni chizma birliklari va qogʻoz birligidan hisoblaydi.

**Metrik masshtablar**, har qanday chizma uchun taklif qilinadi: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arxitektura masshtablari**, birliklar dyuym yoki fut boʻlganda taklif qilinadi: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Muhandislik masshtablari**, birliklar dyuym yoki fut boʻlganda taklif qilinadi: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Oʻz masshtablaringiz.** `SCALELISTEDIT` (yoki `SCALELIST`) yozing va oʻz masshtabingizni qoʻshing, masalan 1:75 yoki uchastka masshtabi 2 qogʻoz : 300 chizma. `Add` nom soʻraydi, soʻng qogʻoz birliklari va chizma birliklari (`1:75` kabi nom oʻz raqamlarini taklif qiladi; ularni olish uchun {{key:Enter}} tugmasini bosing). `Edit`, `Delete`, `List` va `Reset` bir xil roʻyxatda ishlaydi; `Reset` standart roʻyxatga qaytaradi. Sizning masshtablaringiz standartlardan keyin, Xossalardagi koʻrinish oynasi masshtablari roʻyxatida va {{ui:PDF ga chop etish}} dialogida koʻrinadi; shu masshtabdagi koʻrinish oynasi oʻz nomi bilan oʻqiladi, va ular chizmada (DWG va DXF 2000) chizmaning masshtablar roʻyxati sifatida saqlanadi. Boshqa dasturdan ochilgan chizma oʻz roʻyxatini olib keladi; standart bilan mos keladigan masshtablar ikki marta koʻrsatilmaydi.

Koʻrinish oynasi {{ui:Butun modelni koʻrsatish}} yoki {{ui:Modelda oyna tanlang…}} bilan yoʻnaltirilganda, CadCraft sigʻadigan eng katta standart masshtabni tanlaydi. {{ui:Butun modelni sigʻdirish}} oʻrniga aniq masshtab oʻrnatadi, u oddiy nisbat sifatida koʻrinadi.

## Qogʻozdagi va modeldagi oʻlchamlar

Matn va oʻlchamlar oʻlchamlari siz chizadigan fazo birliklarida.

| Qogʻozda kerak | Varaqda chizilgan | Modelda 1:50 da chizilgan (mm chizma) | Modelda 1/4" = 1'-0" da chizilgan (dyuymli chizma) |
|---|---|---|---|
| 2.5 mm matn | 2.5 | 125 | — |
| 3/32" matn | 0.09375 | — | 4.5 |

Oʻlchamlar uchun oʻlchamlarni qogʻoz oʻlchamlari sifatida saqlang va umumiy masshtabni ({{cmd:DIMSCALE}}) chop etish masshtabiga oʻrnating: 1:50 uchun 50, 1/4" = 1'-0" uchun 48. Qarang: [Oʻlchamlar oʻlchamini oʻrnatish](topic:dimension-settings).

## Masshtab boʻyicha izohlash

Modelni toʻliq oʻlchamda chizing va yuqoridagi hisoblarni CadCraft sizning oʻrningizga bajarsin.

1. Qogʻozda oʻz oʻlchamini saqlashi kerak boʻlgan matn yoki oʻlchamlarni tanlang. {{ui:Xossalar}} da {{ui:Annotativ}} ni belgilang. {{ui:Qogʻozdagi oʻlchami}} keyin masalan `2.5 mm at 1:50` deb oʻqiydi.
2. {{cmd:ANNOSCALE}} yozing va chizma chop etiladigan masshtabni, masalan `1:100` ni yozing.

Har bir annotativ matn va oʻlcham qayta oʻlchanadi, shunda yangi masshtabda bir xil oʻlchamda chop etiladi: 2.5 mm matn millimetrli chizmada 1:50 da 125 balandlikda, 1:100 da 250 balandlikda boʻladi. Paragraf kengligi u bilan oʻzgaradi; oʻlchamning matni, strelkalari va boʻshliqlari birga oʻzgaradi (umumiy masshtabi). Bu bitta bekor qilish qadami, va annotativ boʻlmagan obyektlar hech qachon oʻzgarmaydi.

Sozlama DWG va DXF da saqlanadi: boshqa dasturlar annotativ belgini oʻqiydi, CadCraft esa har bir obyekt uchun moʻljallangan masshtabni ham saqlaydi.

Agar idoraniz qogʻoz balandliklarini Default Policies qoʻshimchasida belgilasa (Sozlamalar › Umumiy › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} yangi matn boshlanadigan balandlikni shu masshtabdagi eslatmalar uchun idora balandligiga ham oʻrnatadi. Qarang: [Default Policies](topic:default-policies).

### Bitta obyekt bir nechta masshtabda

Varaqda koʻpincha bir plan 1:100 da, uning bir qismi 1:50 da koʻrsatiladi. Izoh va oʻlchamlarga ikkala masshtabni bering, shunda har bir koʻrinish oynasi ularni qogʻoz oʻlchamida koʻrsatadi:

1. Annotativ matn va oʻlchamlarni tanlang va `OBJECTSCALE` yozing.
2. `Add` ni tanlang va masshtabni yozing, masalan `1:50`. (`Current scale` chizmaning annotatsiya masshtabini qoʻshadi; `List` har bir obyekt nimani saqlashini koʻrsatadi; `Delete` bittasini olib tashlaydi.)

Roʻyxatida obyektning masshtabi bor koʻrinish oynasi uni shu masshtab uchun oʻlchamda koʻrsatadi: 2.5 mm matn 1:100 koʻrinish oynasida 250 balandlikda, 1:50 da 125 balandlikda, ekranda va chop etishda. Obyekt oʻz joyida qoladi; faqat oʻlchami farq qiladi. Roʻyxatida boʻlmagan masshtabdagi koʻrinish oynasida obyekt hozirgi oʻlchamida koʻrinadi, to `ANNOALLVISIBLE` yozib `OFF` tanlamaguningizcha: keyin u shu yerda chiqarib tashlanadi. {{cmd:ANNOSCALE}} yangi masshtabni roʻyxatiga kiritgan obyektlarni oʻlchamini oʻzgartiradi, boshqalarini oʻz holicha qoldiradi.

Roʻyxatlar DWG va DXF da CadCraft ning oʻz maʼlumoti sifatida saqlanadi. Boshqa dastur har bir obyektni bitta, oʻlchami moʻljallangan masshtabli annotativ sifatida koʻradi. ANNOALLVISIBLE kaliti faylda saqlanmaydi.

## Chiziq qalinligi va chiziq turlari

Qatlam yoki obyektda **chiziq qalinligi** (0.05 dan 2.11 mm gacha) va **chiziq turi** (shtrixli, yashirin, markaz, fantom, nuqtali…) boʻlishi mumkin. Ularni oʻng panelda oʻrnating: hech narsa tanlanmasa, {{ui:Joriy sozlamalar}} ostidagi {{ui:Chiziq turi}} va {{ui:Chiziq qalinligi}} yangi obyektlar oladigan narsadir ({{ui:Qatlam boʻyicha}} ular qatlamiga ergashish uchun), va Qatlam … ostidagilar joriy qatlamning oʻz qiymatlari. Obyektlar tanlanganda, xuddi shu ikki qator va {{ui:Chiziq turi masshtabi}} oʻsha obyektlarni oʻzgartiradi. Buyruqlar: {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) va {{cmd:LTSCALE}} (`LTS`).

Chiziq turlari ekranda va chop etishda koʻrinadi. Ularning shtrixlari chizma birliklarida: metrik chizma ISO oʻlchamlaridan foydalanadi (DASHED: 12.7 mm shtrix), dyuymli chizma dyuym oʻlchamlaridan (0.5"). Shtrixlar juda kichik yoki katta boʻlsa, chizmaning {{ui:Chiziq turi masshtabi}} (LTSCALE) ni oʻzgartiring: har bir shtrix va boʻshliq shu songa koʻpaytiriladi; obyektning oʻz masshtabi uni yana koʻpaytiradi. Juda mayda, koʻrinmaydigan naqsh butunlay qattiq chiziq sifatida chiziladi.

Chiziq qalinliklari chop etishda chiqadi, qogʻozda mm da, masshtabdan qatʼi nazar. {{ui:Standart}} chiziq qalinligi bilan chiziqlar {{ui:PDF ga chop etish}} dialogida tanlangan qalam kengligidan foydalanadi (0.13 dan 0.70 mm gacha; boshida 0.25 mm); chiziq qalinligi 0 boʻlsa, u eng ingichka chiziq sifatida chop etiladi. Ekranda har bir chiziq holat satridagi {{ui:LWT}} tugmasini bosmaguningizcha (yoki {{cmd:LWDISPLAY}} yozmaguningizcha) bitta piksel boʻladi: keyin 0.25 mm dan katta chiziq qalinligi modelda kengroq chiziladi (0.5 mm = 2 piksel), varaqda esa qogʻozdagi haqiqiy kengligida. Tanlov shu brauzerda saqlanadi.
