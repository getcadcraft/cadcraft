---
title: Lasso bilan tanlash
summary: Obyektlar atrofida erkin kontur chizib, ularni oyna, kesishish yoki toʻsiq sifatida tanlang; sudrash vaqtida Space bilan almashtiring.
keywords: lasso, lassomode, sudrash, erkin, tanlash, tanlov, oyna, kesishish, toʻsiq, space, koʻpburchak, sensorli, qalam, toʻrtburchak
from: 9ec6154d
---

## Nima oʻrganasiz

Obyektlar atrofida chizib qanday tanlashni va kerak boʻlganda toʻrtburchakni qanday qaytarishni.

## Lasso chizish

1. Bir-biriga yaqin bir nechta chiziq va aylana chizing.
2. Hech qanday buyruq ishlamayotganda, boʻsh joyga sichqoncha tugmasini bosing va ularning bir qismi atrofida sudrang, avval **oʻngga** harakat qilib.
3. Qoʻyib yuboring.

Faqat kontur ichida butunlay joylashgan obyektlar tanlanadi. Sudrash vaqtida kontur yaxlit chiziladi: bu oyna lassosi.

## Oyna, kesishish va toʻsiq

Qaysi obyektlar olinishi sudrashning birinchi harakatiga va {{key:Space}} tugmasiga bogʻliq:

| Siz sudrang | Lasso | Tanlaydi |
|---|---|---|
| Avval oʻngga | Oyna (yaxlit kontur) | Faqat **toʻliq ichida** joylashgan obyektlar |
| Avval chapga | Kesishish (punktir, yashil) | Ichidagi obyektlar **va** kontur tegib oʻtgan obyektlar |
| Sudrash vaqtida {{key:Space}} bosing | Oyna, keyin kesishish, keyin toʻsiq | Toʻsiq (yopilmagan punktir yoʻl): faqat yoʻl kesib oʻtgan obyektlar |

1. Boʻsh joyga bosing va avval **chapga** harakat qilib, bir nechta obyekt atrofida sudrang. Kontur tegib oʻtgan hamma obyekt ham tanlanadi.
2. {{key:Esc}} bosing.
3. Yana bosing va sudrang; tugmani bosib turgan holda {{key:Space}} ni bir marta bosing. Kontur kesishishga aylanadi; toʻsiq uchun yana {{key:Space}} bosing.

Qoʻyib yuborish vaqtida {{key:Shift}} tugmasi, buning oʻrniga, obyektlarni tanlovdan chiqaradi (Sozlamalarda "Obyektlarni bosish: Qoʻshadi" boʻlganda).

## Buyruq ichida

Lasso CadCraft `Select objects` soʻraydigan har qanday joyda ishlaydi: uni chizing, keyin tugatish uchun {{key:Enter}} bosing. {{cmd:STRETCH}} kesishish lassosini oyna sifatida qabul qiladi, shunda chizmaning L shaklidagi qismini bir harakatda choʻzish mumkin.

{{cmd:TRIM}} va {{cmd:EXTEND}} sudrashni boshqacha ishlatadi: u yerda yoʻl kesib oʻtgan har bir boʻlakni kesadi (yoki choʻzadi). Qarang: [Kesish va choʻzish](topic:trim-and-extend).

## Toʻrtburchak

Boʻsh joyga bosish, sichqonchani siljitish va ikkinchi bosish har doim toʻrtburchak oynani (chapdan oʻngga) yoki kesishishni (oʻngdan chapga) chizadi.

Sudrash yana toʻrtburchakni chizishi uchun {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Tanlash uchun sudrash}} ni oching va {{ui:Toʻrtburchak}} ni tanlang, yoki {{cmd:LASSOMODE}} buyrugʻini yozing, soʻng `0`. Lasso uchun {{cmd:LASSOMODE}} buyrugʻini yozing, soʻng `1`. Tanlov shu brauzerda saqlanadi.

:::touch
Barmoq yoki qalam bilan ham xuddi shunday sudrang. Bir marta teginish hamon bitta obyektni tanlaydi.
:::

## Keng tarqalgan xatolar

- **Hech narsa tanlanmadi.** Lasso oyna boʻlgan edi va ichida toʻliq joylashgan hech narsa yoʻq edi. Sudrashni chapdan boshlang yoki sudrash vaqtida {{key:Space}} bosing.
- **Sudrash tutqichni siljitdi.** Tanlangan obyektning tutqichini bosish tutqichni siljitadi. Lassoni boʻsh joydan boshlang.
- **Space buyruqni tugatdi.** {{key:Space}} faqat tugma bosilib turganda lassoni almashtiradi; aks holda u Enter boʻladi.
