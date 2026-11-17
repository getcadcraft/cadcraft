---
title: Bir nechta skanerni bittaga registratsiya qilish
summary: Turli joylardan olingan skanerlarni tanlangan nuqta juftliklari yoki kiritilgan nishonlar bilan bitta koordinatalar tizimiga joylashtiring, ularni ICP bilan aniqlang, registratsiyani loyiha sifatida saqlang va registratsiyalangan nuqta buluti LAS yoki E57 sifatida eksport qiling. Buyruq: REGISTERSCANS.
keywords: registratsiya, roʻyxatga olish, skanerlar, nuqta buluti, icp, ketma-ket eng yaqin nuqta, nishonlar, nuqta juftliklari, qattiq almashtirish, tekislash, birlashtirish, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Nima qilasiz

Bir joyning bir nechta skanerlari (har biri oʻz skaner joyidan olingan) oʻz koordinatalarida boshlanadi. Ularni registratsiya qiling: har bir skanerga bitta joylashuv bering, shunda ularning hammasi bitta koordinatalar tizimida turadi, soʻng buni loyiha sifatida saqlang va registratsiyalangan nuqta buluti bitta LAS yoki E57 faylga yozing.

## Skanerlarni joylashtiring

1. Muloqot oynasini oching (`REGISTERSCANS` (yoki `REGSCAN`) ni kiriting). {{ui:Skanerlar qoʻshish…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS yoki XYZ fayllarni qabul qiladi, yoki ularni muloqot oynasiga tashlang. Turli birliklardan foydalangan skanerlar izoh bilan rad etiladi: avval bittasini konvertatsiya qiling.
2. {{ui:Siljitiladigan skaner}} va {{ui:Solishtirib joylashtirish}} ni tanlang. Rasmda har bir skaner hozirgi holatida kadrda koʻrsatiladi, har biri oʻz rangida: {{ui:Reja}}, {{ui:Old}} yoki {{ui:Yon}}; surish uchun torting, kattalashtirish uchun gʻildiraktan foydalaning.
3. **Nuqta juftliklari boʻyicha.** {{ui:Juftni tanlash}} ni bosing, soʻng siljitiladigan skanerdagi nuqtani, keyin boshqa skanerda shu joyni (burchak, nishon, ustun poydevori) bosing. Buni kamida uch marta bajaring, nuqtalar bir chiziqda boʻlmasin va bir-biridan uzoqda boʻlsin. {{ui:Juftlar boʻyicha joylashtirish}} ni bosing: skaner eng kichik kvadratlar usuli bilan joylashtiriladi va **Qoldiq** har bir juftlik hali qancha xato qilishini koʻrsatadi. Katta raqamli juftlik notoʻgʻri tanlangan: uni xoch bilan olib tashlang va qayta joylashtiring.
4. **Nishonlar boʻyicha.** Agar nuqtaning haqiqiy koordinatalari maʼlum boʻlsa (oʻlchangan nishonlar), {{ui:Tanlang, soʻng maqsadni kiriting}} ni bosing, skanerdagi nuqtani bosing va nishonning X, Y va Z qiymatlarini qatorga kiriting. Juftliklar va kiritilgan nishonlarni erkin aralashtirish mumkin.

## ICP bilan aniqlash

Juftliklar taxminiy joylashuv beradi. {{ui:Aniqlash}} skanerni, uning sirtlari boshqa skanerning sirtlari ustiga tushguncha, siljitadi: avval **nuqtadan nuqtagacha**, soʻng **nuqtadan tekislikkacha**. Jadvalda har bir bosqich xatosi va nechta nuqta mos kelgani koʻrsatilgan; uning ustidagi chiziq xatoning kamayishini koʻrsatadi. {{ui:Toʻxtatish}} joriy bosqichdan keyin yurishni tugatadi va erishilgan natijani saqlab qoladi. {{ui:Ortga qaytarish}} butun yurishni (yoki oxirgi joylashtirishni) bekor qiladi; {{ui:Tiklash}} skanerni uning fayl koordinatalariga qaytaradi.

Noutbukda tez ishlashi uchun ICP nuqtalarning bir qismi bilan ishlaydi ({{ui:Ishlatiladigan nuqtalar}}, 5,000 dan 60,000 gacha) va {{ui:Eng katta mos kelish masofasi}} dan uzoqroq mosliklarni eʼtiborsiz qoldiradi (standart boʻyicha skaner oʻlchamining 5%, barqarorlashgan sari kichrayadi). Avval taxminiy joylashuv kerak: deyarli ustma-ust tushmaydigan skanerlar moslashtirib boʻlmasligini xabar qiladi. Faqat tekis yoki faqat toʻgʻri chiziqli sirtlar oʻz boʻylab joylashuvni aniqlay olmaydi; bunday holda juftliklar qoʻshing.

## Saqlash va eksport

- {{ui:Loyihani saqlash}} kichik `.ccscans.json` faylni yozadi: har bir skanerning nomi, hajmi va birinchi 64 KB ining barmoq izi, oʻz oʻzgartirish (transform) qiymati bilan. Unda nuqtalar yoʻq. {{ui:Loyihani ochish…}} skaner fayllarini shu havolalar boʻyicha topadi (fayllar avval qoʻshilgan boʻlishi kerak) va har bir oʻzgartirishni tiklaydi.
- {{ui:LAS eksport}} va {{ui:E57 eksport}} har bir skanerni registratsiyalangan joyida bitta faylga yozadi. Asl fayllardagi nuqtalar hech qachon qayta yozilmaydi; oʻzgartirish chiqishda qoʻllanadi. {{ui:Fayllardan barcha nuqtalarni oʻqish}} yoqilgan boʻlsa, har bir fayl har bir nuqta uchun qayta oʻqiladi (skaneriga 20 million gacha); oʻchiq boʻlsa, faqat koʻrish oynasida koʻrsatilgan nuqtalar yoziladi.
- {{ui:Roʻyxatga olingan bulutni koʻrsatish}} (CadCraft) LAS ni yozadi va uni chizma ostiga oʻz koordinatalarida, har qanday bulut kabi biriktiradi.

:::note
Hech narsa yuklanmaydi. Registratsiya fayllarning oʻz birliklarida ishlaydi va millimetrlarni saqlaydi: LAS masshtabi (0.1 mm gacha) mos ravishda yoziladi, E57 esa double qiymatlari bilan. Koordinatalar tizimi LAS ga faqat har bir skaner bir xil EPSG kodini koʻrsatganda oʻtkaziladi. E57 yozuvchisi bizniki; uni bu oʻquvchi va libE57Format bilan qayta oʻqib tekshiriladi.
:::
