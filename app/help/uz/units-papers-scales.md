---
title: Birliklar, qogʻoz oʻlchamlari va masshtablar
summary: CadCraft da chizma birliklari nimani bildirishi, varaqlar va chop etish uchun qogʻoz oʻlchamlari, barcha standart masshtablar va matn hamda oʻlcham oʻlchamlari chop etish masshtabiga qanday bogʻliqligi.
keywords: birliklar, millimetr, dyuym, fut, fut va dyuym, arxitektura, muhandislik, kasr, kasrlar, lunits, uzunlik formati, aniqlik, metr, qogʻoz oʻlchami, a3, a1, arch d, ansi, tabloid, letter, masshtab, 1:100, 1/4 dyuym, arxitektura masshtabi, muhandislik masshtabi, insunits
from: 7dc9b62e
---

## Chizma birliklari

Siz toʻliq oʻlchamda, chizma birliklarida chizasiz. Bitta birlik nimani bildirishi chizmaning **Birliklar** sozlamasida:

1. {{ui:Model}} yorligʻida hech narsa tanlanmaganda {{key:Esc}} ni bosing.
2. {{ui:Joriy sozlamalar}} da {{ui:Birliklar}} ni tanlang: {{ui:Birliksiz}}, {{ui:Millimetr}}, {{ui:Santimetr}}, {{ui:Metr}}, {{ui:Dyuym}} yoki {{ui:Fut}}.

Oʻlchamlar uzunliklarini chizma birligidan qat’i nazar millimetr, santimetr, metr yoki kilometrda yozishi mumkin: [Oʻlchamlar mm, sm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km) boʻlimiga qarang.

Birliklarni oʻzgartirish hech narsani oʻlchamga keltirmaydi. U varaqlarda va chop etishda masshtablar qanday oʻqilishi va qaysi masshtablar taklif qilinishini oʻzgartiradi. DWG yoki DXF dan ochilgan chizma faylda saqlangan birliklarni saqlaydi; chap panelning {{ui:Chizma}} boʻlimi ularni koʻrsatadi.

{{ui:Birliksiz}} chizma qogʻoz birligida deb hisoblanadi: ISO qogʻozda millimetr, AQSh qogʻozida dyuym.

## Fut va dyuym, hamda kasrlar

Uzunliklar qanday **yozilishi va kiritilishi** alohida sozlama, uzunlik formati. U geometriyani oʻzgartirmaydi, faqat raqamlar qanday koʻrinishini va nimani kiritish mumkinligini oʻzgartiradi.

1. {{ui:Model}} yorligʻida hech narsa tanlanmaganda {{key:Esc}} ni bosing.
2. {{ui:Joriy sozlamalar}} da {{ui:Uzunlik formati}} ni tanlang: {{ui:Onlik}} (`150.5`), {{ui:Arxitektura}} (`12'-6 1/2"`), {{ui:Muhandislik}} (`12'-6.5"`), {{ui:Kasr}} (`150 1/2`) yoki {{ui:Ilmiy}} (`1.505E+02`).
3. {{ui:Aniqlik}} ni tanlang: oʻnlik kasr xonalari yoki eng kichik kasr (arxitektura uchun odatiy tanlov 1/16).

Yoki {{cmd:UNITS}} (`UN`) ni yozing va uning ikki savoliga javob bering.

{{ui:Arxitektura}} yoki {{ui:Muhandislik}} bilan bitta chizma birligi AutoCAD dagi kabi bir dyuym boʻladi: {{ui:Birliklar}} ni ham {{ui:Dyuym}} ga oʻrnating. Shunda uzunlik soʻraladigan har qanday joyda va {{ui:Xossalar}} katakchalarida fut va dyuymda kiritishingiz mumkin:

| Siz yozasiz | Bildiradi |
|---|---|
| `12'6"` yoki `12'-6"` | 12 fut 6 dyuym (150) |
| `12'6-1/2"` | 12 fut 6½ dyuym. Kasr oldida defis ishlating: {{key:Space}} buyruq satrida {{key:Enter}} hisoblanadi. |
| `12'` | 12 fut |
| `6"` yoki `6` | 6 dyuym: oddiy son dyuym hisoblanadi |
| `1/2`, `6-1/2` | kasrlar har qanday formatda ishlaydi |

Nuqtalar xuddi shu uzunliklarni qabul qiladi: `@12'6",0` yoki `@10'<90`. Burchaklar gradusda qoladi.

Format tarixda koʻrinadi ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: maydonlar kvadrat dyuym va kvadrat futda), {{ui:Xossalar}} da, holat satridagi koordinatalarda va **yangi oʻlchamlarda**. Varaqlar oʻz qogʻoz birliklarini (millimetr yoki dyuym) oʻnlik kasrlar sifatida saqlaydi.

:::note
Uzunlik formati DWG va DXF fayllarida saqlanadi va har bir oʻlcham oʻz formatini saqlaydi: saqlangan chizma qanday qoldirgan boʻlsangiz, shunday qayta ochiladi.
:::

## Qogʻoz oʻlchamlari

Varaqlar va model chop etishlari bu oʻlchamlarni ishlatadi, ikkala yoʻnalishda:

| Qogʻoz | Oʻlcham | Varaqdagi birlik |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetr |
| ISO A3 | 420 × 297 mm | millimetr |
| ISO A2 | 594 × 420 mm | millimetr |
| ISO A1 | 841 × 594 mm | millimetr |
| ISO A0 | 1189 × 841 mm | millimetr |
| Letter | 11 × 8.5 dyuym | dyuym |
| Legal | 14 × 8.5 dyuym | dyuym |
| Tabloid / ANSI B | 17 × 11 dyuym | dyuym |
| ANSI C | 22 × 17 dyuym | dyuym |
| ANSI D | 34 × 22 dyuym | dyuym |
| ARCH C | 24 × 18 dyuym | dyuym |
| ARCH D | 36 × 24 dyuym | dyuym |
| ARCH E | 48 × 36 dyuym | dyuym |

Yangi varaqlar metrik va birliksiz chizmalar uchun ISO A3 da, dyuym yoki futdagi chizmalar uchun Tabloid da boshlanadi. Model chop etishlari shunga oʻxshash ISO A4 yoki Letter da boshlanadi, soʻng oxirgi tanlovingizni eslab qoladi. Ochilgan fayllardagi varaqlar oʻz oʻlchamini saqlaydi; bu roʻyxatda boʻlmasa, “Maxsus” deb koʻrsatiladi.

## Masshtablar

`1:n` masshtab qogʻozdagi bir birlik modeldagi oʻsha birlikning n tasini bildiradi, shuning uchun 1:100 binoning 1 metrini qogʻozda 10 millimetr qilib koʻrsatadi. CadCraft buni chizma birliklari va qogʻoz birligidan hisoblaydi.

**Metrik masshtablar**, har qanday chizma uchun: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arxitektura masshtablari**, birliklar dyuym yoki fut boʻlganda: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Muhandislik masshtablari**, birliklar dyuym yoki fut boʻlganda: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Oʻz masshtablaringiz.** `SCALELISTEDIT` (yoki `SCALELIST`) ni yozib oʻz masshtabingizni qoʻshing, masalan 1:75 yoki 2 qogʻoz : 300 chizma boʻlgan joy masshtabi. `Add` nom soraydi, soʻng qogʻoz birliklari va chizma birliklari (`1:75` kabi nom oʻzining raqamlarini taklif qiladi; ularni olish uchun {{key:Enter}} ni bosing). `Edit`, `Delete`, `List` va `Reset` bir xil roʻyxatda ishlaydi; `Reset` standart roʻyxatga qaytaradi. Oʻz masshtablaringiz standartlardan keyin, {{ui:Xossalar}} dagi koʻrinish oynasi masshtablari roʻyxatida va {{ui:PDF ga chop etish}} dialogida chiqadi; bu masshtabdagi koʻrinish oynasi uning nomi bilan oʻqiladi va ular DWG va DXF 2000 da chizmaning masshtablar roʻyxati sifatida saqlanadi. Boshqa dasturdan ochilgan chizma oʻz roʻyxatini olib keladi; standart bilan mos kelgan masshtablar ikki marta koʻrsatilmaydi.

{{ui:Butun modelni koʻrsatish}} yoki {{ui:Modelda oyna tanlang…}} bilan koʻrinish yoʻnaltirilganda, CadCraft sigʻadigan eng katta standart masshtabni tanlaydi. {{ui:Butun modelni sigʻdirish}} oʻrniga aniq masshtab oʻrnatadi, u oddiy nisbat sifatida koʻrinadi.

## Qogʻozdagi va modeldagi oʻlchamlar

Matn va oʻlcham oʻlchamlari siz chizayotgan fazo birliklarida.

| Qogʻozda kerak | Varaqda chizilgan | 1:50 da modelda chizilgan (mm chizma) | 1/4" = 1'-0" da modelda chizilgan (dyuym chizma) |
|---|---|---|---|
| 2.5 mm matn | 2.5 | 125 | — |
| 3/32" matn | 0.09375 | — | 4.5 |

Oʻlchamlar uchun ularni qogʻoz oʻlchami sifatida saqlang va umumiy masshtabni ({{cmd:DIMSCALE}}) chop etish masshtabiga qoʻying: 1:50 uchun 50, 1/4" = 1'-0" uchun 48. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings).

## Masshtab boʻyicha izohlash

Modelni toʻliq oʻlchamda chizing va yuqoridagi hisoblarni CadCraft ga bajartiring.

1. Qogʻozda oʻz oʻlchamini saqlashi kerak boʻlgan matn yoki oʻlchamlarni tanlang. {{ui:Xossalar}} da {{ui:Annotativ}} ni belgilang. {{ui:Qogʻozdagi oʻlchami}} keyin masalan `2.5 mm at 1:50` deb yozadi.
2. {{cmd:ANNOSCALE}} ni yozing va chizma chop etiladigan masshtabni, masalan `1:100` ni kiriting.

Har bir annotativ matn va oʻlcham qayta oʻlchanadi, shunda yangi masshtabda bir xil oʻlchamda chop etiladi: 2.5 mm matn millimetrli chizmada 1:50 da 125 balandlikda, 1:100 da 250 balandlikda boʻladi. Paragrafning kengligi u bilan birga oʻzgaradi; oʻlchamning matni, strelkalari va boʻshliqlari birga oʻzgaradi (uning umumiy masshtabi). Bu bitta ortga qaytarish qadami, va annotativ boʻlmagan obyektlar hech qachon oʻzgarmaydi.

Bu sozlama DWG va DXF da saqlanadi: boshqa dasturlar annotativ belgini oʻqiydi, CadCraft esa har bir obyekt oʻlchangan masshtabni ham saqlaydi.

Ofisingiz qogʻozdagi balandlikni Standart Siyosatlar qoʻshimchasida belgilasa (Sozlamalar › Global › Standart siyosatlar › Qogʻozdagi annotatsiya oʻlchamlari), {{cmd:ANNOSCALE}} yangi matn boshlanadigan balandlikni ham shu masshtabdagi izohlar uchun ofis balandligiga oʻrnatadi. Qarang: [Standart siyosatlar](topic:default-policies).

### Bitta obyekt bir nechta masshtabda

Varaq koʻpincha bir rejani 1:100 da, uning bir qismini 1:50 da koʻrsatadi. Izohlar va oʻlchamlarga ikkala masshtabni bering, va har bir koʻrinish oynasi ularni qogʻoz oʻlchamida koʻrsatadi:

1. Annotativ matn va oʻlchamlarni tanlang va `OBJECTSCALE` ni yozing.
2. `Add` ni tanlang va masshtabni yozing, masalan `1:50`. (`Current scale` chizmaning annotatsiya masshtabini qoʻshadi; `List` har bir obyekt nimani saqlashini koʻrsatadi; `Delete` birini olib tashlaydi.)

Obyekt roʻyxatidagi masshtab bilan mos keladigan koʻrinish oynasi obyektni shu masshtab uchun qogʻoz balandligini chop etadigan oʻlchamda koʻrsatadi: 2.5 mm matn 1:100 koʻrinish oynasida 250 balandlikda, 1:50 da 125 balandlikda chiziladi, ekranda va chop etishda. Obyekt oʻz joyida qoladi; faqat oʻlchami farq qiladi. Roʻyxatda boʻlmagan masshtabdagi koʻrinish oynasida obyekt oʻz hozirgi oʻlchamida koʻrinadi, `ANNOALLVISIBLE` ni yozib `OFF` tanlamaguningizcha: shunda u oʻsha yerda chiqarib tashlanadi. {{cmd:ANNOSCALE}} yangi masshtabni roʻyxatga olgan obyektlarni qayta oʻlchaydi va boshqalarni oʻz holatida qoldiradi.

Roʻyxatlar DWG va DXF da CadCraft ning oʻz maʼlumoti sifatida saqlanadi. Boshqa dastur har bir obyektni annotativ deb koʻradi, u oʻlchangan bitta masshtabda. ANNOALLVISIBLE belgisi faylda saqlanmaydi.

## Chiziq qalinligi va chiziq turlari

Qatlam yoki obyektda **chiziq qalinligi** (0.05 dan 2.11 mm gacha) va **chiziq turi** (punktir, yashirin, markaz, fantom, nuqta…) boʻlishi mumkin. Ularni oʻng panelda belgilang: hech narsa tanlanmaganda, {{ui:Joriy sozlamalar}} ostidagi {{ui:Chiziq turi}} va {{ui:Chiziq qalinligi}} yangi obyektlar oladigan narsadir ({{ui:Qatlam boʻyicha}} ularning qatlamiga ergashish uchun); {{ui:Qatlam …}} ostidagi ikkitasi joriy qatlamning oʻz qiymatlari. Obyektlar tanlanganda xuddi shu ikki qator va {{ui:Chiziq turi masshtabi}} oʻsha obyektlarni oʻzgartiradi. Buyruqlar: {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) va {{cmd:LTSCALE}} (`LTS`).

Chiziq turlari ekranda va chop etishda koʻrinadi. Ularning uzilishlari chizma birliklarida: metrik chizma ISO oʻlchamlarini ishlatadi (DASHED: 12.7 mm uzilish), dyuymli chizma dyuym oʻlchamlarini (0.5"). Agar uzilishlar juda kichik yoki katta koʻrinsa, chizmaning {{ui:Chiziq turi masshtabi}} (LTSCALE) ni oʻzgartiring: har bir uzilish va boʻshliq unga koʻpaytiriladi; obyektning oʻz masshtabi uni yana koʻpaytiradi. Umuman koʻrinmaydigan juda mayda naqsh qattiq chiziq sifatida chiziladi.

Chiziq qalinliklari chop etishda mm da qogʻozda chiqadi, masshtabdan qat’i nazar. {{ui:Standart}} qalinlikdagi chiziqlar {{ui:PDF ga chop etish}} dialogida tanlangan qalam kengligini ishlatadi (0.13 dan 0.70 mm gacha; boshida 0.25 mm); qalinligi 0 boʻlgan chiziq eng ingichka boʻlib chop etiladi. Ekranda har bir chiziq holat satridagi {{ui:LWT}} tugmasini bossangiz (yoki {{cmd:LWDISPLAY}} ni yozsangiz) boshlanmaguncha bir piksel kengligida: keyin 0.25 mm dan katta chiziq qalinligi modelda kengroq chiziladi (0.5 mm = 2 piksel) va varaqda qogʻozdagi haqiqiy kengligida. Tanlov shu brauzerda saqlanadi.

## Ofis standarti

Ofis qogʻozdagi matn balandliklari, qatlamlar, shtamp maydonlari va shablonlarni bitta yozuvda — ofis standartida saqlashi mumkin. CadCraft uni shu tartibda oʻqiydi: chizmaning oʻz yozuvi ({{cmd:OFFICESTANDARD}} › `Import` bilan oʻrnatiladi, faylda saqlanadi), jamoangizning umumiy standarti, soʻng Standart Siyosatlaringiz. Annotativ matn va oʻlchamlar qogʻozdagi balandligini annotatsiya masshtabida undan oladi. Boʻsh standart hech narsani oʻzgartirmaydi. {{cmd:OFFICESTANDARD}} › `Layers` chizmada yetishmayotgan ofis qatlamlarini qoʻshadi.
