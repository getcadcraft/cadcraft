---
title: Chizma qaysi birliklarda ekanligini tekshirish
summary: Ochilgan chizma millimetrda, dyuymda yoki boshqa birlikda ekanligini aniqlang, oʻlchash orqali tekshiring va nega boshqa dastur bir xil DXF uchun boshqa birliklarni koʻrsatishi mumkinligini bilib oling.
keywords: birliklar, qaysi birliklar, qaysi birlik, birliklarni tekshirish, millimetr, mm, dyuym, metrik, imperial, DXF birliklari, STEP dan DXF ga, notoʻgʻri birliklar, dyuym yoki mm, INSUNITS, MEASUREMENT, chizma birliklari, PartCraft DXF
from: c0ee75bb
---

## Nima qilasiz

Ochilgan chizmadagi bir birlik nimani anglatishini aniqlang va oʻqigan raqamlaringiz kutgan oʻlchamda ekanligiga ishonch hosil qiling.

## Qadamlar

1. Chizmani oching, soʻng hech narsa tanlanmasligi uchun {{key:Esc}} tugmasini bosing, {{ui:Model}} yorligʻida.
2. Oʻng panelda, {{ui:Joriy sozlamalar}} ostida {{ui:Birliklar}} ni oʻqing. U chizmadagi bir birlik nimani anglatishini koʻrsatadi: {{ui:Millimetr}}, {{ui:Dyuym}}, {{ui:Fut}} va hokazo. PartCraft dan saqlangan DXF {{ui:Millimetr}} deb koʻrsatadi.
3. Oʻlchami maʼlum boʻlgan narsani oʻlchab tekshiring. {{cmd:DIST}} ni yozing va chekka yoki teshikning ikki uchini tanlang. Agar maʼlum detal 25 mm boʻlib `25` chiqsa, chizma millimetrda; agar taxminan `0.98` chiqsa, u dyuymda.

{{ui:Birliksiz}} faylda birlik koʻrsatilmaganini bildiradi. Bunday holda CadCraft uni qogʻoz birligi deb hisoblaydi (ISO qogʻozda millimetr, AQSh qogʻozida dyuym), va raqamlar faqat ularni yozgan dasturning aniqligiga teng boʻladi.

## Birliklar notoʻgʻri boʻlsa

{{ui:Birliklar}} ni oʻzgartirish **hech narsani oʻlchamini oʻzgartirmaydi**: raqamlar oʻzgarmaydi, faqat ularning maʼnosi oʻzgaradi. Shuning uchun uni faqat chizma aslida nima ekanligini koʻrsatish uchun oʻrnating. Agar raqamlar millimetrda boʻlsa-yu, {{ui:Birliklar}} {{ui:Dyuym}} desa, {{ui:Millimetr}} ni tanlang. Geometriyani boshqa birliklarda kerak qilsangiz, uni {{cmd:SCALE}} bilan masshtablang (dyuymdan millimetrga 25.4, teskarisiga 1/25.4) va soʻng {{ui:Birliklar}} ni oʻrnating.

Uzunliklar qanday yozilishi (oʻnlik, fut va dyuym, kasr) alohida sozlama: {{ui:Uzunlik formati}}. Qarang: [Birliklar, qogʻoz oʻlchamlari va masshtablar](topic:units-papers-scales).

## Nega boshqa dastur dyuym deydi

DXF oʻz birliklarini sarlavhasida bayon qiladi. Eng eski DXF turi, R12, birlik oʻzgaruvchisiga ega emas edi, shuning uchun uni qat'iy oʻqiydigan dastur undagi yozuvni inobatga olmay, odatda dyuym boʻlgan oʻz standart qiymatiga qaytadi. Fayldagi geometriya har holda bir xil: faqat yorliq farq qiladi. PartCraft DXF fayllarini R12 sifatida yozadi va millimetrni ikki usulda koʻrsatadi (`$INSUNITS` 4 va `$MEASUREMENT` 1), shunda koʻproq dasturlar ularni toʻgʻri oʻqiydi. Agar dastur hali ham dyuym desa, faylni ochganda uning birliklarini millimetrga oʻrnating.

Faylni ochish emas, balki chizmaga olib kirish (ochmasdan) uning birliklarini aylantiradi: [Import paytidagi birliklar](topic:units-on-import) ga qarang.
