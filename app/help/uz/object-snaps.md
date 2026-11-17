---
title: Obyektlardagi nuqtalarga ilashish
summary: Sichqoncha bilan aniq uchlarni, oʻrtalarni, markazlarni va kesishmalarni tanlash uchun obyekt ilashishlari, Ortho va setkadan foydalaning.
keywords: osnap, object snap, endpoint, midpoint, center, intersection, perpendicular, quadrant, nearest, node, insertion, ortho, grid, f3, f8, f7, polar tracking, polar, polarang, object snap tracking, otrack, tracking, f10, f11
from: 3cf17f94
---

## Nima yasaysiz

Ikki diagonalli toʻgʻri toʻrtburchak, diagonallar kesishgan joyda markazlashgan aylana va bir tomonining oʻrtasidan aylanagacha chiziq. Har bir nuqta sichqoncha bilan tanlanadi va har bir nuqta aniq.

## Ilashish qanday ishlaydi

Biror buyruq nuqta soʻrayotganda, CadCraft krestikdan taxminan 10 piksel ichida ilashish nuqtalarini izlaydi. Topsa, belgi va yorliq chiqadi ("Uchi", "Kesishma"), va bosganda nuqta koʻrsatkich turgan joyda emas, aynan oʻsha nuqtaga **aniq** tushadi.

Ilashishlar holat satridagi {{ui:Ilashish}} bosilgan boʻlsa yoqilgan boʻladi. {{key:F3}} ularni yoqadi va oʻchiradi.

Ishlatishingiz mumkin boʻlgan ilashishlar:

| Ilashish | Qayerga tushadi |
|---|---|
| Endpoint (Uchi) | Chiziqlar, yoylar va polichiziq segmentlarining uchlari |
| Midpoint (Oʻrtasi) | Chiziqlar, yoylar va polichiziq segmentlarining oʻrtasi |
| Center (Markaz) | Aylana va yoylarning markazi, hamda polichiziq yoy segmentlarining markazi |
| Quadrant (Kvadrant) | Aylana va yoylarning 0, 90, 180 va 270 gradusli nuqtalari |
| Intersection (Kesishma) | Ikki obyekt kesishgan joy |
| Perpendicular (Perpendikulyar) | Oxirgi nuqtaga perpendikulyar obyektdagi nuqta (asosiy nuqta kerak) |
| Tangent (Urinma) | Aylana yoki yoydagi nuqta, oxirgi nuqtadan chiziq unga faqat tegib turgan joyda. Hali oxirgi nuqta yoʻq boʻlsa (chiziqning birinchi nuqtasi), belgi "deferred" deydi: urinish nuqtasi keyingi nuqta ma'lum boʻlgach hisoblanadi, shuning uchun Tangentdan Tangentgacha chiziq ikkala aylanaga ham tegadi |
| Nearest (Eng yaqin) | Istalgan obyektdagi eng yaqin nuqta |
| Node (Tugun) | Nuqta obyektlari |
| Insertion (Qoʻyish) | Matn va blok havolalarining qoʻyish nuqtasi |

Hammasi standart holda yoqilgan, faqat Tangent va Nearest dan tashqari. Nearest koʻpincha boshqa narsani xohlaganingizda ustun keladi; kerak boʻlganda Tangentni yoqing.

## Ilashishlarni tanlang

1. Holat satridagi {{ui:Ilashish}} yonidagi kichik strelkani bosing. {{ui:Obyekt ilashishlari}} roʻyxati ochiladi.
2. Ilashishlarni belgilang yoki belgisini olib tashlang. Oʻzgarishlar darhol qoʻllanadi.
3. Roʻyxatni yopish uchun strelkani yana bosing.

CadCraft tanlovingizni, {{ui:Setka}}, {{ui:Ortho}} va {{ui:Ilashish}} sozlamalarini shu brauzerda eslab qoladi.

## Qadamlar

1. `REC` yozing va {{key:Enter}} tugmasini bosing.
2. `0,0` yozing va {{key:Enter}} tugmasini bosing.
3. `@4000,3000` yozing va {{key:Enter}} tugmasini bosing. Toʻrtburchak paydo boʻladi.
4. {{ui:Hammasini koʻrsatish}} tugmasini bosing.
5. `L` yozing va {{key:Enter}} tugmasini bosing.
6. Krestikni pastki chap burchakka olib boring. Belgi "Uchi" koʻrsatadi. Bosing.
7. "Uchi" koʻringuncha yuqori oʻng burchakka boring. Bosing.
8. Chiziqni tugatish uchun {{key:Enter}} tugmasini bosing.
9. {{cmd:LINE}} ni takrorlash uchun yana {{key:Enter}} tugmasini bosing va pastki oʻng burchakdan yuqori chap burchakkacha ikkinchi diagonalni xuddi shunday chizing.
10. Aylana boshlash uchun `C` yozing va {{key:Enter}} tugmasini bosing.
11. Diagonallar kesishgan joyga krestikni olib boring. Belgi "Kesishma" deb koʻrsatadi. Bosing.
12. `800` yozing va {{key:Enter}} tugmasini bosing.

Siz kesishma ustiga aniq markazlashgan aylanani koʻrasiz.

13. `L` yozing va {{key:Enter}} tugmasini bosing.
14. Toʻrtburchakning chap tomonining oʻrtasiga "Oʻrtasi" koʻringuncha boring. Bosing.
15. Krestikni aylanaga, uning chap tomoniga olib boring. Belgi "Perpendikulyar" yoki "Kvadrant" koʻrsatadi; bu yerda ikkalasi bir xil nuqta. Bosing.
16. {{key:Enter}} tugmasini bosing.

Yangi chiziq chap tomonning oʻrtasidan boshlanadi va aniq aylanada toʻxtaydi.

## Bir bosish uchun ilashishni oʻtkazib yuborish

{{key:Shift}} tugmasini bosib turing va bosing. Oʻsha bosish uchun obyekt ilashishlari eʼtiborga olinmaydi, nuqta aynan krestik turgan joyga tushadi (yoki Ortho yoqilgan boʻlsa, Ortho yoʻnalishi boʻyicha).

## Ortho

{{ui:Ortho}} ({{key:F8}}) keyingi nuqtani asosiy nuqtadan toʻgʻri gorizontal yoki vertikal yoʻnaltiradi. U bosishlarga va toʻgʻridan-toʻgʻri masofa kiritishga (soʻrovda yozilgan yalang raqamga) qoʻllanadi. Obyekt ilashishlari Orthodan ustun: agar ilashish belgisi koʻrinsa, bosish ilashishga boradi.

## Qutb kuzatuvi

{{ui:Polyar}} ({{key:F10}}) — Orthoning koʻproq burchaklardagi shakli. Buyruqda asosiy nuqta boʻlganda (chiziqning oxirgi nuqtasi, koʻchirishning asosiy nuqtasi), koʻrsatkich qutb qadamining karralisidagi nurga yaqinlashganda tekislanadi: nuqtali chiziq koʻrinadi va krestik yonidagi yorliq `Polar: 1200 < 30°` deb yozadi. Nuqtadan foydalanish uchun bosing yoki masofa kiriting: `1200` nurda aniq 1200 ga boradi.

Qadam oʻzgartirilmaguncha 90° boʻladi: {{cmd:POLARANG}} yozing, {{key:Enter}} tugmasini bosing va `30` yozing (yoki 45, 22.5, 15 …). Polyar va Ortho bir-birini chiqaradi: birini yoqsangiz, ikkinchisi oʻchadi.

## Obyekt ilashishlari kuzatuvi

{{ui:Kuzatish}} ({{key:F11}}) koʻrsatkichni siz ustida toʻxtagan ilashish nuqtalari bilan tekislaydi, shuning uchun bitta burchak bilan bir sathda, boshqasining ustida nuqtani yordamchi chiziqlarsiz tanlashingiz mumkin.

1. {{ui:Ilashish}} va {{ui:Kuzatish}} ni yoqing, nuqta soʻraydigan buyruqni boshlang (`L`).
2. Koʻrsatkichni ilashish nuqtasi ustida, masalan burchakda, yarim soniya bosmasdan ushlab turing. Kichik xoch uni belgilaydi: u olingan boʻladi. Uni tashlash uchun yana ustida turing.
3. Koʻrsatkichni shu nuqtadan toʻgʻri gorizontal yoki vertikal yoʻnalishda uzoqlashtiring. Nuqtali chiziq koʻrsatkichni kuzatadi va yorliq `Track: 600 < 90°` deb yozadi. Bosing yoki masofa yozing.
4. Ikkinchi nuqtani oling va bir nuqtadan vertikal, boshqasidan gorizontal chiziqlar kesishgan joyga boring: koʻrsatkich shu kesishmaga ilashadi (`Track: where two lines meet`).

Polyar ham yoqilgan boʻlsa, olingan nuqtalar har bir qutb burchagida kuzatiladi. Buyruq tugaguncha yettitagacha nuqta saqlanadi. {{key:Shift}} ilashishlar kabi bir bosish uchun kuzatuvni oʻchiradi.

## Setka

{{ui:Setka}} ({{key:F7}}) chizma ortida chiziqlar setkasini koʻrsatadi, har beshinchi chiziq qalinroq; masshtab oʻzgarganda oraliq ham oʻzgaradi. {{ui:Setkaga tutish}} ({{key:F9}}) yoqilmaguncha u faqat yoʻriqnoma: keyin bosishlar eng yaqin setka nuqtasiga tushadi, agar obyekt ilashishi nuqtani avval olmasa.

## Kompyuteringizdagi funksiya tugmalari

{{key:F9}} — Setkaga tutish, {{key:F10}} — Polyar, {{key:F11}} — Kuzatish.

:::mac
Mac da F3, F7, F8 va F9 odatda Mission Control va media boshqaruvini bajaradi. Tugmani **fn** bilan bosib turing yoki [Klavishlar, sichqonchalar va trackpadlar](common:keys) da tasvirlangan standart funksiya tugmalarini yoqing. Holat satridagi tugmalar doim ishlaydi.
:::

:::firefox
Firefox da F7 matn kursori rejimini ham ochadi. Firefox uni yoqishni soʻrasa, **Yoʻq** ni tanlang. Savol qaytib kelaversa, {{ui:Setka}} tugmasidan foydalaning.
:::

:::touch
Sensorli ekranda koʻrsatkich boʻlmaydi, shuning uchun ilashish belgisi faqat barmogʻingiz tegan joyda koʻrinadi. Kichik nishonlar uchun yaqinroq kattalashtiring yoki koordinatalarni yozing.
:::

## Keng tarqalgan xatolar

- **Bosish notoʻgʻri nuqtaga tushdi.** Bosishdan oldin belgi yorligʻiga qarang: ikkalasi yaqin boʻlsa, "Uchi" "Oʻrtasi" dan ustun keladi. Kattalashtiring yoki kerak boʻlmagan ilashishlarni belgisini olib tashlang.
- **Belgi chiqmaydi.** {{ui:Ilashish}} oʻchiq, yoki kerakli ilashish belgilanmagan, yoki obyekt oʻchirilgan yoki muzlatilgan qatlamda.
- **Ilashishlar zich chizmada notoʻgʻri narsani ilib oladi.** Kattalashtiring. Ilashish masofasi ekran piksellarida oʻlchanadi, shuning uchun kattalashtirish uni chizmada kichikroq qiladi.
- **Shift toʻgʻri chiziq beradi deb kutish.** CadCraft da Shift bir bosish uchun ilashishni oʻchiradi. Toʻgʻri chiziqlar uchun {{ui:Ortho}} dan foydalaning.
- **Nuqtalar setka nuqtalariga tushadi deb kutish.** {{ui:Setkaga tutish}} ({{key:F9}}) ni yoqing yoki yaxlit raqamlar uchun koordinatalarni yozing.
