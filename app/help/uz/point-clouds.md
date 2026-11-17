---
title: Nuqtaviy bulut ustida ijro etilgan chiziqlarni iz olish
summary: Lazer skanerlashni (LAS, LAZ, E57, PLY, PCD, PTX, PTS yoki XYZ) chizma ostiga biriktiring, unda reja kesimini oʻtkazing va uning nuqtalarida tutish yordamida devorlar, eshiklar va ustunlarni chizing.
keywords: nuqtaviy bulut, pointcloudattach, pcattach, pointcloud, pc, lazer skanerlash, skanerlash, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, ijro etilgan, ijro etilgan holat, geodezik oʻlchash, kesim, reja kesimi, tugun, tutish, iz olish, mavjud sharoit
from: b0e0aae5
---

## Nima yasaysiz

Skanerlangan binoning devorlarini chiziqlar va polichiziqlar koʻrinishida, skanerning nuqtalari ustida aniq joylashgan ijro etilgan qavat rejasi.

## Bulutni biriktirish

1. Agar chizmada birliklar boʻlmasa, avval ularni belgilang ({{ui:Properties}} ichidagi {{ui:Units}} katagi yoki {{cmd:UNITS}}): CadCraft bulutni oʻz birliklaridan chizma birliklariga aylantiradi.
2. {{cmd:POINTCLOUDATTACH}} (yoki `PCATTACH`) ni yozing va {{key:Enter}} ni bosing. `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` yoki `.xyz` faylni tanlang (nuqtaviy bulut formatlari haqidagi mavzuda har biri nimani olib kelishi va skaner dasturidan nimani eksport qilish kerakligi aytilgan). Faylni {{ui:Open}} orqali ham ochishingiz, sahifaga tashlashingiz yoki BIM koʻruvchidagi {{ui:CadCraft'da iz olish}} orqali yuborishingiz mumkin.
3. `Bulutning quyi chap burchagi`: faylning oʻz koordinatalarini saqlash uchun {{key:Enter}} ni bosing (loyihaga moslashtirilgan skanerlash chizma bilan bir qatorga tushadi), yoki bulutning quyi chap burchagi qoʻyiladigan joyni bosing.
4. Buyruq satrida qancha nuqta koʻrinishi koʻrsatiladi. Koʻrinish bulutga qarab kattalashadi; bulut chiziqlar ostida joylashadi va har bir nuqta yuqoridan koʻrinadi.

## Reja kesimini oʻtkazish va iz olish

1. {{cmd:POINTCLOUD}} (yoki `PC`) ni yozing, soʻngra {{ui:Kesim}} uchun `S` ni kiriting. Bulutning eng past nuqtasidan 1,2 m yuqorida faqat ingichka qatlam koʻrinadi: devorlar, eshik teshiklari va ustunlar qavat rejasiga oʻxshab koʻrinadi.
2. `H` kesim balandligini, `T` esa qalinligini (chizma birliklarida) belgilaydi. {{key:Enter}} buyruqni yakunlaydi.
3. {{key:F3}} bilan tutishni yoqing va tutishlar orasida {{ui:Tugun}} ni belgilang. {{cmd:LINE}} yoki {{cmd:PLINE}} bilan chizing: kursor kesim nuqtalariga tutiladi va ular "Point cloud" deb belgilanadi. Chizmaning oʻz uchlari, oʻrtalari va markazlari bulutdan ustun turadi, shuning uchun polichiziqni yopganda u birinchi nuqtasiga tushadi.
4. Boshqa qavatni kuzatish uchun kesim balandligini oʻzgartiring, soʻngra butun bulutni koʻrish uchun kesimni oʻchiring (yana `S`).

## Qoʻshimcha imkoniyatlar

{{cmd:POINTCLOUD}} buyrugʻida: Rang (`C`) nuqtalarni fayl ranglari, balandlik, intensivlik, LiDAR sinfi yoki bitta rang boʻyicha boʻyaydi; Nuqta oʻlchami (`SI`) nuqtalar oʻlchamini belgilaydi; Koʻrinish (`V`) bulutni yashiradi yoki koʻrsatadi; Kattalashtirish (`Z`) uning ustiga kattalashtiradi; Ajratish (`D`) uni ajratadi.

3D yorligʻi ham bulutni, uning eng past nuqtasi yerda boʻlgan holda, xuddi shu kesim bilan koʻrsatadi.

:::note
Bulut chizmaning bir qismi emas: u DWG yoki DXF ga saqlanmaydi, bekor qilish uni oʻzgartirmaydi. Chizmani keyinroq ochganingizda uni qayta biriktiring. Fayllar shu kompyuterda oʻqiladi; hech narsa yuklanmaydi. Juda katta skanerlashlar bir tekis ravishda 2 million nuqtagacha siyraklashtiriladi. E57 fayllari hozircha 6 million nuqtagacha va 512 MB gacha ochiladi: undan katta skanerlashlarni LAS yoki LAZ sifatida eksport qiling.
:::

## Chop etish

{{cmd:PLOT}} bulutni chizma bilan birga, chiziqlar ostida chop etadi: model chop etishida ({{ui:Hammasi}} bulut maydonini ham oʻz ichiga oladi) va har bir maket koʻrinish oynasida, PDF, PNG, SVG va printerga yuborilgan hujjatda. U ekranda koʻringanini chop etadi: kesim yoqilgan boʻlsa kesimni, siz tanlagan ranglarni va yashirilgan boʻlsa — yashirilganini. Qogʻozda nuqtalar kichik kvadratlarga aylanadi, har bir kvadratda eng baland nuqta gʻalaba qozonadi, chop etish esa ularning taxminan 400 000 tasini oʻz ichiga oladi (juda zich bulut katta kvadratlar bilan chop etiladi). Bulut faqat biriktirilgan chizmada chop etiladi; u hech qachon qogʻoz fazosining oʻzida chop etilmaydi, faqat koʻrinish oynasi orqali chop etiladi.

## Bir nechta skanerlash

Turli joylardan olingan skanerlashlarni bitta koordinatalar tizimiga birlashtirish, ICP bilan aniqlashtirish va bitta LAS yoki E57 sifatida eksport qilish mumkin: [Bir nechta skanerlashni bittaga birlashtirish](topic:register-scans) ga qarang.
