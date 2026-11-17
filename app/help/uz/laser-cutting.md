---
title: Lazerga chizmani yuborish
summary: Lazer panelini oching, har bir qatlam nima qilishini tanlang (kesish, chizib oʻtish, gravirovka, toʻldirish, rasm), bosh harakatlarini oldindan koʻring, GRBL lazer-rejimi G-code ni saqlang yoki ishni ramkalaganingizdan keyin brauzerdan yuboring.
keywords: lazer, lazer kesgich, lazer gravirovkachi, GRBL, G-code, gcode, gravirovka, toʻldirish, dizering, rasm gravirovkasi, chizib oʻtish, kesish, Web Serial, ishni ramkalash, quvvat, tezlik, oʻtishlar, LASER, LASERCUT, CNC
from: 72b56db0
---

Lazer panel chizmaning qatlamlarini GRBL ishlaydigan lazer uchun dasturga aylantiradi (koʻpchilik hobbi va kichik sex diod va CO2 kontrollerlari). `LASER` (yoki `LASERCUT`) yozing va {{key:Enter}} tugmasini bosing, yoki {{ui:Koʻrinish}} guruhining {{ui:Koʻproq}} menyusidan {{ui:Lazer…}} ni tanlang. Ribbon uslublarida u {{ui:Fayl}} menyusida va {{ui:Chop etish}} yonida. Panel chizma ustida ochiladi va siz chizayotganingizda ochiq qoladi: koʻrinish har bir oʻzgarishni kuzatadi.

:::warning
Har bir sozlamani avval chiqindida sinab koʻring, lazeringizga mos koʻz himoya vositasini taqing, qopqoq boʻlsa yopiq saqlang va ishlayotgan lazerni hech qachon nazoratsiz qoldirmang. Qatlam bilan boshlanadigan raqamlar joy egallovchi qiymatlar, hech qanday material uchun tavsiya emas.
:::

## Nima yuboriladi

Panel varaqlarni emas, modelni oʻqiydi, faqat yoqilgan va muzlatilmagan (thawed) qatlamlardagi narsalarni:

- Chiziqlar, yoylar, aylanalar, polichiziqlar (yoy segmentlari yoy boʻlib qoladi), ellipslar va splaynlar. Boshlangan joyida tugaydigan shakl yopiq hisoblanadi.
- Bloklar ajratiladi: blok ichidagi 0 qatlamdagi obyekt blok havolasining qatlami bilan boradi.
- Shtrixlash chegarasi yuboriladi, shuning uchun **Toʻldirish** qatlamidagi shtrixlangan logotip toʻldiriladi.
- Rasm (`IMAGEATTACH`) **Rasmni gravirovka qilish** qatlamiga qoʻyilgan boʻlsa gravirovka qilinadi, agar u tekis (aylantirilmagan yoki qiya emas) boʻlsa va uning fayli CadCraft da ochiq boʻlsa.
- Matn, oʻlchamlar, yoʻnaltiruvchi chiziqlar, nuqtalar va yordamchi chiziqlar yuborilmaydi; panel nechta chiqarib tashlanganini aytadi. Matnni kuydirish uchun harflarni shakl sifatida chizing yoki shtrixlang.

Oʻlchamlar chizmaning birliklaridan (`UNITS`) millimetrda yuboriladi: dyuymli chizma 25.4 ga koʻpaytiriladi. Birliklari oʻrnatilmagan chizma bir birlikni bir millimetr sifatida yuboriladi. Chizmaning bir qismini yuborish uchun {{ui:Faqat tanlangan obyektlar}} ni belgilang.

## Har bir qatlam nima qilishini tanlang

Ichida biror narsa boʻlgan har bir qatlam qator boʻladi. {{ui:Bajaradi}} ni **Kesish**, **Chizib oʻtish**, **Chiziqlarni gravirovka qilish**, **Shakllarni toʻldirish**, **Rasmni gravirovka qilish** yoki **Yuborilmaydi** ga oʻrnating, {{ui:Quvvat %}}, {{ui:Tezlik mm/min}} va {{ui:Oʻtishlar}} soni bilan. Har bir oʻzgarish bitta bekor qilish qadami va chizmada saqlanadi: DWG (CadCraft saqlagan har bir versiya) va DXF sozlamalarni saqlaydi, shuning uchun chizma keyingi safar ular bilan ochiladi. Boshqa dasturlar faylni avvalgidek ochadi; ular bitta ishlatilmagan CADCRAFT_LASER nomli blokni koʻradi (uni u yerda tozalash sozlamalarni oʻchiradi).

- **Toʻldirish** yopiq shakllarning ichini {{ui:Qator oraligʻi}} masofasida, {{ui:Burchak}} ostida, ikki yoʻnalishda yoki bittasida chiziqlar bilan kuydiradi, bosh tezlikka yetishi uchun overscan bilan. Kesishgan shtrixlash 90° da ikkinchi oʻtishni qoʻshadi. Teshikli shakl teshik joyida ochiq qoladi.
- **Rasmni gravirovka qilish** rasmni nuqtalarga aylantiradi (Floyd–Steinberg, Atkinson, tartibli yoki oddiy qora-oq chegara bilan), yoki *Kulrang darajalar* bilan oʻzgaruvchan quvvatga.
- Tartib: avval rasmlar va toʻldirishlar, soʻng chiziqlarni gravirovka qilish, soʻng chizib oʻtish, soʻng kesish, shunda kesib olingan qism gravirovka paytida siljimaydi. Bitta qatlam ichida yoʻllar **ichkidan** boshlanadi (teshik oʻz plastinasidan oldin), eng yaqini keyingi.

## Oldindan koʻring, keyin saqlang

Oldindan koʻrinish bosh nima qilishini chizadi: kuydiruvchi chiziqlar rangda, tez harakatlar kulrang, va kuyadigan hamma narsani oʻrab turgan yashil quti. Uning pastida oʻlcham, kuydirish uzunligi va vaqt bahosi koʻrsatiladi (tezlanishsiz; haqiqiy mashina koʻproq vaqt oladi). {{ui:G-code ni saqlash…}} GRBL lazer-rejimi G-code ni yozadi: `$32=1`, `M4` (yoki `M3`) S qiymatlari bilan, `G0` va `G1` harakatlar, oxirida `M5`. X0 Y0 ishning chap pastki burchagi boʻladi, agar chizmaning koordinata boshini tanlamasangiz: mashinangizning nol nuqtasini oʻsha yerga oʻrnating.

## Brauzerdan yuborish

Chrome va Edge da {{ui:Ulash…}} lazerning USB portini tanlashni soʻraydi. Siz tugmani bosmaguningizcha hech narsa ulanmaydi va yubormaydi. Avval {{ui:Ishni ramkalash}} tugmasini bosing: bosh lazer **oʻchiq** holda ishning qutisini chizadi (yoki koʻrsatkich uchun siz oʻrnatgan past quvvatda), shuning uchun qayerga kuydirishini koʻrasiz. Shundan keyingina {{ui:Ishni yuborish}} yoqiladi va agar biror narsani oʻzgartirsangiz, yana oʻchib qoladi. {{ui:Toʻxtatib turish}} boshni ushlab turadi, {{ui:Toʻxtatish}} ham ushlab turadi, kontrollerni qayta oʻrnatadi (lazer oʻchadi) va `M5` yuboradi. Web Serial boʻlmagan joyda (Firefox, Safari va Web Serial hali boʻlmagan CadCraft Studio) panel faqat saqlashni taklif qiladi: G-code ni saqlang va uni lazeringizning oʻz dasturi bilan yuboring.

## Hali qurilmagan

Hali qurilmagan: boshqa kontrollerlarning formatlari (Ruida, Marlin lazerlari, sotuvchi fayllari), yorliqlar (tabs) va kirish chiziqlari, kerf ofseti, material kutubxonalari, aylanuvchi va Z oʻqlari, kamera bilan tekislash, matnni kontur sifatida.
