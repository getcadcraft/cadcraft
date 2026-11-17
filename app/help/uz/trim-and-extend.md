---
title: Kesish va choʻzish
summary: Chiziqlarni boshqalar kesishgan joyda qisqartiring va boshqalarga yetguncha choʻzing, bitta-bitta yoki bir nechtasini yoʻl sudrab bir vaqtda.
keywords: trimextendmode, oyna sudrash, kesish, choʻzish, tr, ex, tez kesish, sudrash, erkin, yoʻl, toʻsiq, kesishish, shift, kesuvchi chegaralar, chegara chiziqlari, edgemode, rejim, standart, tez, oʻchirish, oldindan koʻrish, devorlar, tozalash
from: 25fbc5bd
---

## Nimani oʻrganasiz

{{cmd:TRIM}} va {{cmd:EXTEND}} qanday ishlashi va ulardan tez foydalanish usullari: koʻp boʻlaklar orqali bir vaqtda sudrash, kesish va choʻzish oʻrtasida almashtirish uchun {{key:Shift}} ni ushlab turish, bosishdan oldin nima oʻchishini koʻrish.

## Bitta boʻlakni kesish

1. Uzun gorizontal chiziq va uni kesib oʻtadigan ikkita qisqa chiziq chizing.
2. `TR` ni yozing va {{key:Enter}} ni bosing. Tarix `Joriy sozlamalar: Tez rejim, chegaralar: Choʻzilmasin` deydi.
3. Koʻrsatkichni ikkita qisqa chiziq orasidagi uzun chiziq ustiga qoʻying. Bu boʻlak kulrang va punktir boʻladi: u oʻchadigan narsa shu.
4. Bosing. Boʻlak yoʻqoladi.
5. Buyruqni tugatish uchun {{key:Enter}} ni bosing.

Tez rejimda (standart) har bir koʻrinib turgan obyekt kesuvchi chegara boʻladi, shuning uchun avval chegaralarni tanlamaysiz. Yoʻq qilmoqchi boʻlgan boʻlagingizni bosing. Hech narsa kesib oʻtmaydigan obyekt butunlay oʻchiriladi va tarix buni aytadi.

## Bir sudrashda koʻp boʻlaklarni kesish

1. Uzun gorizontal chiziq va uni kesib oʻtadigan oʻnta qisqa vertikal chiziq chizing.
2. `TR` ni yozing va {{key:Enter}} ni bosing.
3. Sichqoncha tugmasini uzun chiziqning ustida, birinchi vertikal chiziqning chap tomonida bosing va uzun chiziqdan yuqorida barcha oʻnta chiziq boʻylab sudrang.

Sudrayotganingizda yoʻl punktir chiziq sifatida koʻrinadi va u kesib oʻtgan har bir boʻlak kulrang boʻladi. Qoʻyib yuboring: yuqoridagi oʻnta boʻlakning hammasi bir qadamda kesiladi. Ularning hammasini bir vaqtda qaytarish uchun `U` ni yozing va {{key:Enter}} ni bosing.

:::tip
Ikkita boʻsh joyni ham bosishingiz mumkin: ular orasidagi chiziq sudrab oʻtilgan yoʻl kabi ishlaydi. Oʻrniga nuqtalar ketma-ketligini bosish uchun `F` (Toʻsiq) ni yozing, keyin {{key:Enter}} ni bosing.
:::

:::touch
Xuddi shunday barmoqni sudrang. Boʻlakka bir marta tegish uni kesadi.
:::

## Oʻrniga choʻzish, Shift bilan

1. Vertikal chiziq va uning chap tomonida undan oldin toʻxtaydigan beshta qisqa gorizontal chiziq chizing.
2. `TR` ni yozing va {{key:Enter}} ni bosing.
3. {{key:Shift}} ni ushlab turing. Koʻrsatkichni qisqa chiziq ustiga qoʻying: u qancha oʻsadigan boʻlsa, oʻsha qism kulrang va punktir koʻrinadi.
4. Hali ham {{key:Shift}} ni ushlab turib, beshta qisqa chiziq boʻylab pastga sudrang.

Endi beshtasi vertikal chiziqqa yetadi. {{cmd:EXTEND}} (`EX`) da {{key:Shift}} teskari ishlaydi: bosish choʻzadi, {{key:Shift}}+bosish esa kesadi. Choʻzish bosgan joyingizga yoki yoʻl kesib oʻtgan joyga eng yaqin uchni uzaytiradi.

## Oyna ichida kesish

1. `TR` ni yozing va {{key:Enter}} ni bosing.
2. `C` ni yozing va {{key:Enter}} ni bosing.
3. Oʻchiriladigan boʻlaklar atrofida ikki burchakni bosing.

Oynaning ichida kamida qisman joylashgan har bir boʻlak kesiladi.

`C` ni yozmasdan, faqat sudrab oyna olish uchun: {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Kesish va cho'zishda sudrash}} › {{ui:Oyna}}. Shunda boʻsh joyda bosib sudrasangiz quti chiziladi va u tegadigan har bir boʻlak kesiladi (yoki {{cmd:EXTEND}} da yoki {{key:Shift}} bilan choʻziladi). {{ui:Yoʻl}} (boshlanishi) erkin yoʻlni qaytaradi. {{cmd:TRIM}} boshidagi sozlamalar satri qaysi biri yoqilganini koʻrsatadi.

## Kesuvchi chegaralarni tanlash (Standart rejim)

Ba'zan faqat bitta chiziq kesishi kerak, masalan, ustidan koʻp boshqa chiziqlar oʻtadigan devor yuzi.

1. `TR` ni yozing va {{key:Enter}} ni bosing.
2. `O` (Rejim) ni yozing va {{key:Enter}} ni bosing, keyin `S` (Standart) ni yozing va {{key:Enter}} ni bosing.
3. `Kesuvchi chegaralarni tanlang` soʻrovida chegara chiziqlarni bosing (yoki oyna sudrang), keyin {{key:Enter}} ni bosing. Hech narsa tanlanmagan holda {{key:Enter}} bosilsa, har bir obyekt chegara boʻladi.
4. Oʻchiriladigan boʻlaklarni bosing yoki ular orqali sudrang.

Faqat tanlangan chegaralar kesadi, va hech bir chegara kesib oʻtmaydigan obyektga tegilmaydi. Rejim sahifani yopguncha saqlanadi; tez rejimga qaytish uchun `O` ni, keyin `Q` ni yozing. {{cmd:TRIMEXTENDMODE}} boshlashdan oldin uni belgilaydi, boshqa joylarda shu nomli oʻzgaruvchi kabi: `0` Standart, `1` Tez. `T` (Kesuvchi chegaralar) istalgan vaqtda yangi chegaralarni tanlaydi; {{cmd:EXTEND}} da bu `B` (Chegara chiziqlari).

## Yetadigan chegaralar

1. `TR` ni yozing va {{key:Enter}} ni bosing.
2. `E` (Chegara) ni yozing va {{key:Enter}} ni bosing, keyin `E` (Choʻzish) ni yozing va {{key:Enter}} ni bosing.

Endi qisqa toʻxtaydigan kesuvchi chiziq yoki yoy davom etgandek hisoblanadi: qisqa chiziq, agar uzun boʻlganida kesib oʻtadigan joyda kesadi. Qaytish uchun `E` ni, keyin `N` (Choʻzilmasin) ni yozing. Bu {{cmd:EDGEMODE}} 1 va 0 bilan bir xil.

## Chiqmasdan oʻchirish

`R` (Oʻchirish) ni yozing va {{key:Enter}} ni bosing, oʻchiriladigan obyektlarni tanlang va {{key:Enter}} ni bosing. {{cmd:TRIM}} davom etadi.

## Keng tarqalgan xatolar

- **Butun chiziq yoʻqoldi.** Tez rejimda hech narsa kesmaydigan obyekt oʻchiriladi. Uni qaytarish uchun `U` ni yozing yoki Standart rejimga oʻting (`O`, `S`).
- **"Bu yerda kesish uchun hech narsa yoʻq: tanlangan chegara bu obyektni kesib oʻtmaydi."** Standart rejim faqat tanlagan chegaralarida kesadi. Ularni qayta tanlash uchun `T` ni yozing.
- **"Bu yoʻnalishda chegara yoʻq."** Choʻzish oldinda hech narsa topmadi. Oʻsishi kerak boʻlgan uchga yaqinroq bosing yoki qisqa toʻxtaydigan chegaralar uchun `E` (Chegara, Choʻzish) ni yoqing.
- **Sudrash arqon chizdi.** Sudrash faqat TRIM yoki EXTEND obyekt soʻrayotganda kesadi. Hech bir buyruq ishlamayotganda sudrash tanlaydi (qarang: [Arqon bilan tanlash](topic:lasso-selection)).
- **Faqat chiziqlar, yoylar, aylanalar va polichiziqlarni kesish mumkin.** Chiziqlarini kesish uchun avval blokni parchalang.
