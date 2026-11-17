---
title: Devorlarni surish, kesish, uzaytirish, yumaloqlash va faska qilish
summary: Bitta chiziqlardan qoʻsh devor yasash uchun Surish ni, burchaklarni tozalash uchun Yumaloqlash ni, chiziqlarni kesish va uzaytirish uchun Kesish va Uzaytirish ni ishlating.
keywords: surish, kesish, uzaytirish, yumaloqlash, faska, qiyalatish, uzish, breakatpoint, uzunlikni oshirish, devorlar, burchak, kesish, uzunlik, parallel, radius, tozalash
from: c6c5cbd0
---

## Nima yasaysiz

Qalinligi 200 boʻlgan devorli kichik xona: ichki yuz chiziladi, tashqi yuz suriladi, burchaklar tozalanadi va bir devorda eshik kesiladi.

## Ichki yuzni chizing

1. `L` kiriting va {{key:Enter}} bosing.
2. `0,0` kiriting va {{key:Enter}} bosing.
3. `@5000,0` kiriting va {{key:Enter}} bosing.
4. `@0,4000` kiriting va {{key:Enter}} bosing.
5. `@-5000,0` kiriting va {{key:Enter}} bosing.
6. `C` kiriting va {{key:Enter}} bosing.
7. {{ui:Hammasini koʻrsatish}} ni bosing.

Sizda toʻrtta alohida chiziq bor. (Yopiq polichiziq bir martada suriladi; alohida chiziqlar esa Yumaloqlash burchaklarni qanday tozalashini koʻrsatadi.)

## Tashqi yuzni suring

1. `O` kiriting va {{key:Enter}} bosing. Soʻrov `Specify offset distance [Through] <Through>:` deb yozadi.
2. `200` kiriting va {{key:Enter}} bosing.
3. `Select object to offset` soʻrovida pastki chiziqni bosing.
4. `Specify point on side to offset` soʻrovida uning pastida istalgan joyni bosing. Parallel chiziq 200 pastda paydo boʻladi.
5. Oʻng chiziqni bosing, soʻng uning oʻngiga bosing.
6. Yuqori chiziqni bosing, soʻng uning yuqorisiga bosing.
7. Chap chiziqni bosing, soʻng uning chapiga bosing.
8. Buyruqni tugatish uchun {{key:Enter}} bosing.

Har biri ichki chiziq uzunligidagi toʻrtta tashqi chiziq koʻrinishi kerak, shuning uchun tashqi burchaklar tutashmaydi.

:::tip
Masofa soʻrovida oxirgi masofani yana ishlatish uchun {{key:Enter}} bosing. Through uchun `T` kiriting: shunda har bir nusxa siz bosgan nuqtadan oʻtadi, qanday masofada boʻlishidan qatʼi nazar.
:::

{{cmd:OFFSET}} chiziqlar, yoylar, aylanalar va polichiziqlar bilan ishlaydi. Yopiq polichiziqni surish butun konturni, burchaklari bilan birga suradi.

## Tashqi burchaklarni Yumaloqlash bilan tozalang

{{cmd:FILLET}} burchakda ikki chiziqni birlashtiradi: ular uchrashishi uchun ularni kesadi yoki uzaytiradi. Radius 0 boʻlsa, burchak toʻgʻri boʻladi.

1. `F` kiriting va {{key:Enter}} bosing. Soʻrov `Select first line [Radius]:` deb yozadi.
2. Agar oxirgi yumaloqlashda radius ishlatilgan boʻlsa, `R` kiriting, {{key:Enter}} bosing, `0` kiriting va {{key:Enter}} bosing.
3. Pastki tashqi chiziqni oʻng uchiga yaqin bosing.
4. `Select second line` soʻrovida pastki uchiga yaqin tashqi oʻng chiziqni bosing.

Ikki chiziq endi oʻtkir burchakda tutashadi va buyruq tugaydi.

5. Keyingi burchakni qilish uchun {{key:Enter}} bosing, {{cmd:FILLET}} takrorlanadi.
6. Toʻrt tashqi burchakning hammasi tutashguncha takrorlang.

Har bir chiziqni **saqlamoqchi** boʻlgan qismida bosing. Radius 0 dan katta boʻlsa, Yumaloqlash chiziqlar orasiga yoy qoʻshadi.

:::tip
Birinchi soʻrovda `M` kiriting — toʻrt burchakning hammasi bir martada bajariladi; yoki tashqi yuzni bitta yopiq polichiziq sifatida chizing va `P` kiriting: har bir burchak bir vaqtda bajariladi. Ikkinchi chiziqni bosayotganda radiusni oʻzgartirmasdan oʻtkir burchak uchun {{key:Shift}} tugmasini ushlab turing.
:::

## Faska bilan burchakni qirqing

{{cmd:CHAMFER}} burchakni toʻgʻri chiziq bilan kesadi.

1. `CHA` kiriting va {{key:Enter}} bosing.
2. `D` kiriting va {{key:Enter}} bosing. Birinchi masofa uchun `300` kiriting va {{key:Enter}} bosing, soʻng ikkinchisi uchun ham 300 ni ishlatish uchun yana {{key:Enter}} bosing.
3. Ichki yuqori chiziqni chap uchiga yaqin bosing, soʻng ichki chap chiziqni yuqori uchiga yaqin bosing.

Burchak har bir chiziq boʻylab 300 ga kesiladi va ularni faska chizigʻi bogʻlaydi. Birinchi chiziqda uzunlik va burchak berish uchun `D` oʻrniga `A` kiriting.

## Kesish bilan eshik oching

Avval pastki devor ustida ikkita eshik yonbogʻini chizing, soʻng ular orasidagi devor chiziqlarini kesing.

1. `L` kiriting va {{key:Enter}} bosing.
2. `1000,200` kiriting va {{key:Enter}} bosing.
3. `@0,-600` kiriting va {{key:Enter}} bosing, soʻng yana {{key:Enter}} bosing.
4. {{cmd:LINE}} ni takrorlash uchun {{key:Enter}} bosing.
5. `1900,200` kiriting va {{key:Enter}} bosing.
6. `@0,-600` kiriting va {{key:Enter}} bosing, soʻng yana {{key:Enter}} bosing.

Endi pastki devorni 900 masofada kesib oʻtuvchi ikkita qisqa chiziq bor.

7. `TR` kiriting va {{key:Enter}} bosing. Tarix `Current settings: Quick mode, edges: No extend` deydi.
8. Ikki yonbogʻ orasidagi ichki pastki chiziqni bosing. Qism yoʻqoladi. (Avval kursorni unga qoʻying: oʻchiriladigan qism kulrang va punktir boʻladi.)
9. Ikki yonbogʻ orasidagi tashqi pastki chiziqni bosing. Bu qism ham yoʻqoladi.
10. Har bir yonbogʻning devor ustidan chiqib turgan qismini va pastdagi qismini bosing.
11. Buyruqni tugatish uchun {{key:Enter}} bosing.

Pastki devorda 900 li teshik koʻrinishi kerak, devor uchlari yonbogʻlar bilan yopilgan.

Tezkor rejimda (standart) Kesish avval kesuvchi chegaralarni tanlashni soʻramaydi: har bir koʻrinadigan obyekt kesuvchi chegara hisoblanadi. Yoʻq qilinadigan qismni tanlang yoki bir nechta qismni bir martada kesish uchun yoʻl torting. Buyruqdan chiqmasdan oxirgi tanlovni yoki sudrashni qaytarish uchun `U` kiriting va {{key:Enter}} bosing. Oyna, kesishma, tanlangan chegaralar va {{key:Shift}} bilan uzaytirish [Kesish va uzaytirish](topic:trim-and-extend) da.

## Chiziqni boshqasiga yetguncha uzaytiring

{{cmd:EXTEND}} chiziq, yoy yoki polichiziq uchini shu yoʻnalishdagi keyingi obyektga yetguncha uzaytiradi.

1. `L` kiriting va {{key:Enter}} bosing.
2. `1000,2000` kiriting va {{key:Enter}} bosing.
3. `@2000,0` kiriting va {{key:Enter}} bosing, soʻng yana {{key:Enter}} bosing. Chiziq oʻng devordan 2000 qisqa toʻxtaydi.
4. `EX` kiriting va {{key:Enter}} bosing.
5. Yangi chiziqni oʻng uchiga yaqin bosing.
6. Buyruqni tugatish uchun {{key:Enter}} bosing.

Chiziq endi oʻng devorning ichki yuziga boradi. Har bir koʻrinadigan obyekt chegara; oʻsishi kerak boʻlgan uchga yaqin bosing. {{cmd:TRIM}} ichida {{key:Shift}}+bosish xuddi shuni qiladi.

## Uzish va uzunlikni oshirish

{{cmd:BREAK}} (`BR` yoki {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Uzish}}) kesuvchi chegarasiz boʻshliq kesadi: boʻshliq boshlanadigan joyda obyektni bosing (bu bosish birinchi nuqta), soʻng tugaydigan joyni bosing. Aylanada birinchi nuqtadan ikkinchisigacha, soat strelkasiga qarshi boʻlgan qism olib tashlanadi. Ikkinchi savolda `F` birinchi nuqtani qaytadan berish imkonini beradi, va {{cmd:BREAKATPOINT}} obyektni bir nuqtada boʻshliqsiz ikkiga boʻladi.

{{cmd:LENGTHEN}} (`LEN`) bir uchida uzunlikni oʻzgartiradi:

1. `LEN` kiriting va {{key:Enter}} bosing. Hozirgi uzunligini koʻrish uchun chiziqni bosing; soʻrov yana soʻraydi.
2. Usulni tanlang: `DE` (Delta: qoʻshiladigan miqdor, olib tashlash uchun manfiy; yoy uchun `A` — yoy burchagi), `P` (Percent: 50 uni ikkiga boʻladi), `T` (Total: kerakli uzunlik) yoki `DY` (Dynamic: uchni sudrash).
3. Harakatlanishi kerak boʻlgan uchga yaqin har bir obyektni bosing. `U` oxirgi obyektni qaytaradi; {{key:Enter}} tugatadi.

Chiziqlar, yoylar va ochiq polichiziqlar (oxirgi segmenti) uzaytirilishi mumkin.

## Odatiy xatolar

- **Butun chiziq yoʻqoldi.** Unga hech narsa kesishmagan edi, shuning uchun Tezkor rejim uni oʻchirdi. `U` kiriting, qaytarish uchun; kesuvchi chiziq unga haqiqatan kesishganini tekshiring (kattalashtiring) va u oʻchiq qatlamda emasligini tekshiring.
- **"Bu yoʻnalishda chegara yoʻq."** Uzaytirish urilishga hech narsa topmadi. Oʻsishi kerak boʻlgan uchga yaqinroq bosing.
- **"Radius juda katta."** Yoy chiziqlardan birining uchidan oʻtib ketadi. Kichikroq radius ishlating.
- **"Ochiq polichiziqning faqat birinchi yoki oxirgi segmenti qisqartirilishi mumkin."** Polichiziqning bir-biriga yaqin ikki segmentini tanlang yoki uning har bir burchagini yumaloqlash uchun `P` kiriting.
- **Surish notoʻgʻri tomonga ketdi.** Tomon — obyektni tanlagandan keyin bosgan joyingiz. {{key:Mod+Z}} bilan qaytaring va boshqa tomonda bosing.
- **"Bu masofaga surib boʻlmaydi."** Surish yoy, aylana yoki polichiziqni ichki-tashqarisini almashtirib yuboradi. Kichikroq masofa ishlating.
