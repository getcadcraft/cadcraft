---
title: DWG ni oching, tahrirlang va nusxasini saqlang
summary: Kimdir yuborgan chizmani oching, kelganini tekshiring, oʻzgartirish kiriting va nusxasini DWG yoki DXF sifatida qaytaring.
keywords: dwg, dxf, ochish, import, eksport, saqlash, r12, toʻliq aylanish, maslahatchi, xref, chizmani tekshirish, boshqacha saqlash, dwg saqlash, format
from: 49de4bf6
---

## Nima qilasiz

Maslahatchidan kelgan DWG ni oching, CadCraft nimani koʻrsata oldi va nimani koʻrsata olmadi, tekshiring, izoh qoʻshing, varaqni PDF ga chop eting va DWG yoki DXF sifatida qaytarish uchun nusxa saqlang.

## Faylni oching

1. {{key:Mod+O}} ni bosing yoki {{ui:Ochish}} ni bosing.
2. `.dwg` faylni tanlang.

Holat satri chizma oʻqilayotganda "Oʻqilmoqda …" deb yozadi. Tugagach, chizma ekranni toʻldiradi va tarix masalan "plan.dwg ochildi: 18,240 ta obyekt, 64 ta qatlamda" deydi, qancha vaqt ketganligi bilan.

:::offline
Siz oflaynsiz. Agar {{ui:Oflayn uchun saqlash}} tugmasi "Oflayn tayyor" deb yozsa, DWG fayllar odatdagidek ochiladi. Aks holda, va bu yorliqda hali DWG ochilmagan boʻlsa, DWG ochish muvaffaqiyatsiz boʻlishi mumkin, chunki CadCraft ning DWG oʻquvchisi birinchi DWG bilan yuklanadi: DXF oching yoki keyingi safar onlayn boʻlganda CadCraft ni oflayn foydalanish uchun saqlang. Qarang: [Oflayn ishlash](common:offline).
:::

## Kelganini tekshiring

1. Chap panelning {{ui:Chizma}} boʻlimiga qarang: format va versiya, birliklar, obyektlar va qatlamlar soni, hamda varaqlar.
2. Bor boʻlsa, uning ostidagi "Bu fayl haqida" qutisini oʻqing.

Qutida roʻyxat:

- **Hali koʻrsatilmaydi:** CadCraft hali chizolmaydigan obyektlar, turi va soni boʻyicha. Ular taxmin qilinmasdan chiqarib tashlanadi.
- **Varaqlar (Layout) kelgan:** ularni chizma ostidagi yorliqlar bilan oching.
- **Faqat chizilgandek oʻqilishi mumkin boʻlgan oʻlchamlar.**

3. Har bir varaqni koʻrish uchun chizma ostidagi yorliqlar boʻylab bosing.
4. {{ui:Joriy sozlamalar}} dagi {{ui:Birliklar}} ni tekshiring (hech narsa tanlanmagan, {{ui:Model}} yorligʻi). Agar {{ui:Birliksiz}} deyilsa-yu, chizma millimetrda ekanini bilsangiz, uni sozlang, shunda varaq va chop etish masshtablari toʻgʻri oʻqiladi.

:::tip
Chizmaning bir qismini kutgan boʻlsangiz va koʻrmasangiz, {{ui:Qatlamlar}} panelini tekshiring: qatlam faylda oʻchiq yoki muzlatilgan boʻlishi mumkin. Uning nomini bosing — u joriy boʻladi va yoqiladi.
:::

## Oʻzgarishingizni kiriting

1. Izohlaringiz uchun qatlam yarating: {{ui:Yangi qatlam}} ni bosing, `NOTES` kiriting va {{key:Enter}} bosing.
2. `DT` kiriting va {{key:Enter}} bosing.
3. Izoh joylashadigan joyni bosing.
4. Chizmaga mos matn balandligini kiriting (qarang: [Matn va yorliqlar qoʻshish](topic:text)) va {{key:Enter}} bosing.
5. Burilishni 0 da qoldirish uchun {{key:Enter}} bosing.
6. Izohingizni kiriting va {{key:Enter}} bosing.
7. Tugatish uchun yana {{key:Enter}} bosing.

Import qilingan oʻlchamlarni tahrirlash mumkin: birortasini oʻzgartirsangiz, CadCraft uni oʻz uslubida qayta chizadi.

## Tekshirish uchun varaqni chop eting

1. Varaq yorligʻini bosing.
2. {{key:Mod+P}} ni bosing.
3. {{ui:PDF ni yuklab olish}} ni bosing.

Qarang: [PDF ga chop etish](topic:plot-pdf).

## Nusxani saqlang

1. {{key:Mod+S}} ni bosing yoki {{ui:Saqlash}} ni bosing.

Siz DWG ochdingiz, shuning uchun brauzer `<name>.dwg` ni yuklab oladi, DWG kelgan versiyada. Tarix masalan "Nusxa Plan.dwg sifatida saqlandi (DWG (AutoCAD 2018))." deydi va ostidagi qatorlarda yoʻlda oʻzgargan narsalarni roʻyxatlaydi.

2. Faylni yuborishdan oldin bu qatorlarni oʻqing. [DWG nimani saqlaydi va nimani oʻzgartiradi](topic:files#what-a-dwg-keeps-and-changes) har birini tushuntiradi.

Asl DWG hech qachon oʻzgartirilmaydi. Har bir saqlash yangi yuklab olish.

## DWG yoki DXF sifatida saqlang

Formatni oʻzingiz tanlash uchun:

1. {{key:Mod+Shift+S}} ni bosing yoki {{ui:Boshqacha saqlash}} ni bosing.

{{ui:Nusxani quyidagi nom bilan saqlash}} oynasi toʻrtta tanlov bilan ochiladi, har biri berilishi kerak boʻlgan fayl nomi bilan: {{ui:DWG}} — uning {{ui:Versiya}} roʻyxati bilan, {{ui:DXF R12}}, {{ui:DXF 2000}} va {{ui:DXF 2000 (binary)}}. Chizmaning joriy formati va versiyasi allaqachon tanlangan.

2. Kerakli formatni bosing. DWG uchun boshqa idora ishlatadigan versiyani yoki eskiroqini tanlang: AutoCAD 2018, 2013, 2010, 2007, 2004 yoki 2000.
3. {{ui:Saqlash}} ni bosing.

Nusxa yuklab olinadi. Shundan keyin {{key:Mod+S}} bu chizmani shu formatda saqlaydi, va yangi chizmalar ham shu bilan boshlanadi, shu brauzerda. {{ui:Bekor qilish}} yoki {{key:Esc}} hech narsani saqlamaydi, va tarix "Saqlanmadi." deydi.

Qaysi birini tanlash:

- **DWG** eng koʻp narsani saqlaydi: varaqlar ularning koʻrinish oynalari bilan, haqiqiy oʻlchamlar, shtrixlash namunalari, qatlam va blok nomlari siz yozgandek, va koʻp qatorli matn koʻp qatorli matn sifatida. AutoCAD 2000 versiyasi eng koʻp dasturlarda ochiladi; 2004 va undan keyingilari haqiqiy ranglarni ham saqlaydi.
- **DXF 2000** matnli fayl boʻlib, DWG saqlaydigan deyarli hamma narsani saqlaydi: har bir varaq koʻrinish oynalari bilan layout sifatida, haqiqiy oʻlchamlar, shtrixlash namunalari, haqiqiy ranglar, chiziq qalinliklari, chiziq turlari va nomlar siz yozgandek. U AutoCAD 2000 va undan keyingilarda hamda koʻpchilik CAD dasturlarida ochiladi. Koʻp yetakchilar chiziqlarga, strelkalarga va ular chizgan matnga aylanadi. Versiya 2000 yoki undan keyin ochilgan DXF DXF 2000 sifatida saqlanadi.
- **DXF 2000 (binary)** DXF 2000 bilan bir xil mazmunni formatning ikkilik shaklida saqlaydi: kichikroq fayl, va har bir sonni aniq saqlaydi. Boshqa dasturlardan kelgan ikkilik DXF fayllar matnlilar kabi ochiladi, va ikkilik DXF dan ochilgan chizma ikkilik boʻlib qaytariladi.
- **DXF R12** deyarli har qanday CAD dasturida ochiladi. Birinchi varaqni koʻrinish oynalari bilan saqlaydi, CadCraft ning boshqa varaqlarini ham. U yangiroq narsalarni soddalashtiradi, masalan koʻp qatorli matn va shtrixlashlarni.

## Ularda nima koʻrinadi

DWG da:

- Chiziqlar, yoylar, aylanalar, ellipslar, polichiziqlar, matn, koʻp qatorli matn, atributli bloklar, qattiq toʻldirishlar, shtrixlash namunalari va qatlamlar siz koʻrganingizdek.
- Haqiqiy oʻlchamlar: cho'zilganda boshqa dastur ularni qayta oʻlchaydi.
- Har bir varaq, qogʻozi va koʻrinish oynalari bilan.
- Koʻp yetakchilar koʻp yetakchi sifatida. AutoCAD 2000 versiyasida haqiqiy ranglar eng yaqin standart rangga aylanadi.

DXF R12 da:

- Chiziqlar, yoylar, aylanalar, polichiziqlar, matn, blok havolalari va oʻlchamlar siz koʻrganingizdek. Oʻlchamlar haqiqiy oʻlchamlar boʻlib qoladi.
- Qatlam nomlari bosh harflar bilan, boʻshliqlar `_` ga aylantirilgan holda.
- Birinchi varaq chizmaning qogʻoz fazosi sifatida, koʻrinish oynalari bilan. Keyingi varaqlar `CCLAYOUT_1` va hokazo nomli bloklar sifatida keladi; agar ularga har bir varaq layout boʻlishi kerak boʻlsa, har bir varaqning PDF ini ham ularga yuboring.
- Koʻp qatorli matn alohida qatorlar sifatida, ellipslar polichiziq sifatida, shtrixlashlar konturlar sifatida.

Ikkala holatda ham DWG ochilganda "Hali koʻrsatilmaydi" deb roʻyxatlangan narsalar nusxada **yoʻq**, agar tarix saqlangan deb aytmasa: DWG ning OLE obyektlari va model fazosidagi 3D qattiq jismlar DWG sifatida saqlanganda qaytariladi. Ularga ayting va PDF ham yuboring.

## Odatiy xatolar

- **"CadCraft DWG va DXF chizmalarni ochadi."** Faylning kengaytmasi boshqa. `.dwg` yoki `.dxf` ekanligini tekshiring.
- **"Bu chizmani oʻqib boʻlmadi."** DWG buzilgan yoki oʻquvchi qoʻllamaydigan versiyada. DXF yoki eskiroq versiyada saqlangan DWG soʻrang.
- **"Bu ikkilik DXF obyekt oʻrtasida tugaydi."** Fayl qisqa yoki buzilgan. Oʻqilishi mumkin boʻlgan narsalarni ochish uchun RECOVER ni kiriting yoki faylni qaytadan soʻrang.
- **Saqlangan fayl `name (1).dwg` yoki `name (1).dxf` deb nomlangan.** Brauzer shunday qiladi, agar papkada bir xil nomli fayl allaqachon boʻlsa.
- **Ularda eski dastur bor, u DWG ni ocholmaydi.** DWG ni {{ui:Versiya}} {{ui:AutoCAD 2000}} bilan saqlang, yoki {{ui:DXF R12}} sifatida: deyarli har qanday CAD dasturi uni ochadi.
- **Chizmaning ayrim qismlari yoʻq.** Bogʻlangan chizmalar (xref) siz ularning fayllarini tanlamaguningizcha yuklanmaydi ({{cmd:XREF}}, `R`), va rasmlar fayl nomlari bilan ramka sifatida koʻrinadi.
