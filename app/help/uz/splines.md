---
title: Splaynlar va polichiziqlar: SPLINE, SPLINEDIT, PEDIT
summary: Nuqtalar orqali yoki boshqaruv koʻpburchagidan silliq egri chiziq chizing, uning moslashuv va boshqaruv nuqtalarini tahrirlang, polichiziqlarni (birlashtirish, yopish, kenglik, moslashtirish, splayn, dekurv) tahrirlang yoki splaynni polichiziqqa aylantiring.
keywords: splayn, splinedit, spl, spe, pedit, pe, moslashuv nuqtalari, boshqaruv nuqtalari, ogʻirliklar, nurbs, polichiziqni tahrirlash, birlashtirish, egri moslashuv, dekurv, polichiziqqa aylantirish, aniqlik, tangens, egri chiziq, moslashuv toleransi
from: d31f72d8
---

## Nima yasaysiz

Beshta nuqta orqali egri chiziq, soʻngra xuddi shu egri chiziqning uch xil usulda tahrirlanishi va uchta chiziqdan yasalgan polichiziq.

## Nuqtalar orqali splayn chizish

1. `SPL` ni yozing va {{key:Enter}} ni bosing.
2. Egri chiziq oʻtishi kerak boʻlgan nuqtalarni bosing yoki yozing: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Oxirgisidan keyin {{key:Enter}} ni bosing.
3. {{ui:Boshlanish tangensi}}: egri chiziq chiqishi kerak boʻlgan nuqtani bosing, yoki hal qilishi uchun {{key:Enter}} ni bosing. Oxirgi tangens uchun ham shunday qiling.

Egri chiziq har bir nuqtadan oʻtadi. Uni yopish uchun {{key:Enter}} oʻrniga `C` ni yozing (egri chiziq birinchi nuqtaga qaytadi). Chizish vaqtida {{key:U}} (`Undo`) oxirgi nuqtani olib tashlaydi.

### Boshqaruv koʻpburchagidan chizish

Birinchi soʻrovda `M` ni, soʻng Boshqaruv nuqtalari (`C`) ni va 1 dan 5 gacha darajani (odatda 3) yozing. Endi tanlagan nuqtalaringiz egri chiziqni oʻziga tortadigan koʻpburchakning burchaklari boʻladi; egri chiziq birinchisidan boshlanib, oxirgisida tugaydi. Yopiq egri chiziq aylanib oʻtadi va birikmada burchak boʻlmaydi.

### Polichiziqni splaynga aylantirish

Birinchi soʻrovda `O` (Obyekt) ni yozing va polichiziqlar yoki chiziqlarni tanlang. Ular uchlari orqali oʻtadigan splaynlarga aylanadi; asl nusxalar oʻchiriladi.

## Splaynni tahrirlash

Uni tanlang va `SPE` ni yozing (yoki `SPE` ni yozib, uni bosing). Tutqichlar moslashuv nuqtalarini koʻrsatadi (yoki moslashuv nuqtalari boʻlmasa, boshqaruv nuqtalarini): egri chiziq shaklini oʻzgartirish uchun birini sudrang. Soʻrovda:

- **Moslashuv maʼlumotlari** (nuqtalar orqali chizilgan splayn): [Qoʻshish (A)] moslashuv nuqtasini qoʻshadi (joyini bosing), [Oʻchirish (D)] yaqinidagisini oʻchiradi (yaqinini bosing), [Koʻchirish (M)] birini koʻchiradi (yaqinini bosing, soʻng yangi joyini bosing), [Tangens (T)] oxirgi tangenslarni belgilaydi, [Tozalash (P)] moslashuv nuqtalarini tozalaydi, shundan keyin splayn boshqaruv nuqtalari orqali tahrirlanadi.
- **Uchni tahrirlash**: [Qoʻshish (A)] egri chiziqni oʻzgartirmasdan boshqaruv nuqtasini qoʻshadi, [Koʻchirish (M)] birini koʻchiradi, [Ogʻirlik (W)] unga **ogʻirlik** beradi (1 dan katta boʻlsa egri chiziqni unga yaqinlashtiradi, 1 dan kichik boʻlsa uzoqlashtiradi).
- **Ochiq** yoki **Yopiq**, va **Teskari** (egri chiziq boshqa tomonga yuradi).
- **Polichiziqqa aylantirish** (`P`): splayn polichiziqqa aylanadi; aniqlik har bir oraliq necha segmentga boʻlinishini bildiradi (odatda 10).
- **Ortga qaytarish** oxirgi oʻzgarishni qaytaradi; **Chiqish (X)** tugatadi.

{{ui:Xossalar}} splaynning darajasini, nechta moslashuv va boshqaruv nuqtasi borligini, uzunligini koʻrsatadi va uni ochish yoki yopish imkonini beradi.

## Polichiziqni tahrirlash

Polichiziqni tanlang va `PE` ni yozing. Tanlagan chiziq, yoy yoki splayn avval polichiziqqa aylantirish uchun taklif qilinadi (splayn aniqlikni soʻraydi).

- **Yopish** / **Ochish** uchlarini birlashtiradi yoki ajratadi.
- **Birlashtirish** uchlari polichiziq uchiga tutashadigan chiziq, yoy va polichiziqlarni qoʻshadi. `Fuzz distance` — uchlar bir-biridan qancha uzoqda boʻlib, hali ham birlashishi mumkinligi (0 — ular tegishi shart).
- **Kenglik** butun polichiziqqa bitta kenglik beradi (0 uni olib tashlaydi).
- **Moslashtirish** polichiziqni uning uchlari orqali oʻtadigan silliq egri chiziq bilan almashtiradi; **Splayn** — ularga ergashadigan kubik B-splayn bilan (birinchi va oxirgi uchidan boshlanadi va tugaydi, qolganlariga yaqin turadi). Ikkalasi ham qisqa segmentli polichiziqqa aylanadi va asl burchaklar saqlanadi, shuning uchun **Dekurv** ularni qaytaradi.
- **Ltype gen** punktir chiziq turi butun polichiziq boʻylab davom etishini yoki har bir uchida qaytadan boshlanishini bildiradi.
- **Teskari** uchlarining tartibini oʻzgartiradi. **Koʻp** (birinchi soʻrovda `M`) bir xil parametrlar bilan bir nechta polichiziqni tahrirlaydi.

Polichiziq uchlarini {{ui:Xossalar}} da yoki tutqichlar bilan tahrirlash oʻzgarmagan holda qoladi: PEDIT da uchlar muharriri yoʻq.

## Fayllarda

DWG va DXF 2000 splaynni splayn sifatida saqlaydi: daraja, boshqaruv nuqtalari, tugunlar, ogʻirliklar, moslashuv nuqtalari va tangenslar. Ochib, oʻzgartirmagan splayn aynan kelganidek qayta yoziladi. DXF R12 da splayn yoʻq: u egri chiziq boʻylab polichiziq sifatida saqlanadi va tarix nechta ekanini koʻrsatadi.

Ofset, kesish, choʻzish, fillet, uzish va birlashtirish splaynlarda ishlamaydi. Ularga mos keladigan polichiziq olish uchun splaynni {{cmd:EXPLODE}} qiling yoki {{cmd:PEDIT}} bilan ishlov bering.

## Odatiy xatolar

- **Egri chiziq yaqin nuqtalar orasida haddan oshadi.** Nuqtalar orqali chizilgan egri chiziq nuqtalar egilgan joyda egiladi. Kamroq nuqta yoki boshqaruv koʻpburchagidan foydalaning.
- **"Bu splayn emas."** SPLINEDIT faqat splaynlarni qabul qiladi; {{cmd:PEDIT}} polichiziqlarni tahrirlaydi.
- **Moslashuvli yopiq splayn boshqa dasturda biroz boshqacha shaklda.** CadCraft uni birinchi nuqtada bitta silliq birikma bilan yopadi; boshqa dastur esa uni davriy egri chiziq bilan yopishi mumkin. Boshqaruv nuqtali yopiq splayn ikkalasida bir xil.
