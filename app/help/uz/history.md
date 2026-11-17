---
title: Tarix: versiyalar va nima oʻzgarganligi
summary: Chizmaning versiyalarini koʻring (Studio saqlash paytida saqlaydigan nusxalar va bulutdagilar), birini oching yoki tiklang va ikkitasini solishtiring: oʻzgarishlar rang bilan koʻrsatiladi.
keywords: tarix, versiyalar, versiyalar tarixi, tiklash, oldingi versiya, saqlashni bekor qilish, solishtirish, chizmalarni solishtirish, dwgcompare, oʻzgarishlar, qoʻshilgan, oʻchirilgan, oʻzgartirilgan, surat, zaxira, bulut versiyalari
from: 141d37b3
---

## Nima yasaysiz

Chizmaning oldingi versiyasiga qarash va hozirgi chizmadan farqlar roʻyxati: nima qoʻshilgan, nima oʻchirilgan va nima oʻzgargan, rang bilan chizmada belgilangan.

## Tarixni ochish

`HISTORY` (yoki `HIST`) yozing va {{key:Enter}} tugmasini bosing, yoki {{ui:Koʻrinish}} guruhining {{ui:Koʻproq}} menyusidan {{ui:Tarix…}} ni tanlang. Panel chizma yonida ochiladi va siz ishlayotganingizda ochiq qoladi, shuning uchun chizmani ranglari bilan surishingiz va kattalashtirishingiz mumkin.

Tarix faqat CadCraft Studio da ishlaydi. Brauzerda panel buni shunchaki aytadi.

## Versiyalar qayerdan keladi

- **Bu kompyuterda.** Studio'da fayldan chizmani ochganingizda va har safar saqlaganingizda, Studio bu faylning nusxasini shu kompyuterdagi oʻz xotirasida saqlaydi. Birinchi nusxa {{ui:Ochilgandek}}: birinchi saqlashingizdan oldingi fayl. Studio har bir chizmaning eng yangi 25 ta nusxasini saqlaydi; barcha nusxalar birga 400 MB dan oshsa, eng eskilari birinchi oʻchadi. Hech narsa oʻzgartirmagan saqlash hech narsa saqlamaydi. Hech narsa yuklanmaydi.
- **Bulutda.** Studio'da bulutdagi fayllaringizdan chizmani ochganingizda, panelda {{ui:Bulutda}} ham chiqadi: bulut saqlagan har bir versiya, uning raqami, kim saqlagani va izohi bilan. Panel ularni faqat oʻqiydi. CadCraft hali oʻz saqlashlarini bulutga yubormaydi, shuning uchun bu yerda boshqa qurilmalardan va veb-dan saqlangan versiyalar koʻrinadi. Agar kirish muddati tugagani haqida xabar chiqsa, Studio'da qayta kiring.

Hali saqlanmagan chizmada nusxalar yoʻq: avval uni saqlang.

## Versiyani ochish yoki tiklash

- {{ui:Ochish}} oʻsha versiyani alohida yorliqda ochadi. Chizmangizga tegilmaydi.
- {{ui:Tiklash}} bu chizmani oʻsha versiya bilan almashtiradi. Avval soʻraydi. Studio buning oldidan hozirgi chizma nusxasini Tarixda saqlaydi (u {{ui:Tiklashdan oldin}} deb belgilanadi), va fayl faqat siz saqlaganingizdan keyin yoziladi. Tiklashni {{key:Mod+Z}} bilan bekor qilib boʻlmaydi; oʻsha nusxadan foydalaning.

## Solishtirish

1. Versiyada {{ui:Solishtirish}} tugmasini bosing. U {{ui:Chizma hozirgi holatida}} bilan solishtiriladi; boshqa versiya bilan solishtirish uchun avval oʻsha versiyani {{ui:Solishtirish uchun}} da tanlang.
2. Roʻyxat ostidagi natijani oʻqing: nechta obyekt qoʻshilgan, oʻchirilgan va oʻzgargan, hamda ularning roʻyxati. Roʻyxatdagi elementni bosing — koʻrinish oʻsha joyga oʻtadi.
3. Chizmada:
   - **yashil** obyektlar qoʻshilgan,
   - **qizil** obyektlar oʻchirilgan (ular faqat eski versiyada bor),
   - **toʻq sariq** obyektlar oʻzgargan: yangi shakl yaxlit, eski shakl punktir.
4. {{ui:Chizmada koʻrsatish}} ranglarni yoqadi va oʻchiradi; {{ui:Ranglarni tozalash}} natijani olib tashlaydi. Panelni yopish ham ularni tozalaydi.

Roʻyxat oʻzgargan obyektda nima oʻzgarganini koʻrsatadi: matni, koʻchganmi, shakli, qatlami, rangi, chiziq turi yoki chiziq qalinligi. Har bir varaq alohida solishtiriladi; ranglar ochiq varaqda koʻrinadi.

:::note
Chizmada har bir obyektning doimiy raqami yoʻq, shuning uchun CadCraft obyektlarni nima ekanligiga qarab moslaydi: ikki tomonda bir xil obyekt oʻzgarmagan hisoblanadi; bir xil turdagi va qatlamdagi obyekt eski obyektning oʻz oʻlchami doirasida yotsa, oʻsha obyekt, faqat oʻzgargan hisoblanadi; qolgan hammasi qoʻshilgan yoki oʻchirilgan. Oʻz joyidan uzoqqa koʻchirilgan obyekt bir joyda oʻchirilgan, ikkinchi joyda qoʻshilgan koʻrinadi. Blok havolasi bloki mazmunini hisoblaydi.
:::

## Odatiy xatolar

- **"Hali nusxalar yoʻq."** Studio har bir kompyuterdagi faylga ega chizmani ochganda va saqlaganda nusxa saqlaydi. Brauzer yorligʻidan ochilgan yoki hech qachon saqlanmagan chizmada nusxa yoʻq.
- **Bulut roʻyxati yoʻq.** U Studio'da buluddan ochilgan chizma uchun paydo boʻladi; diskdan ochilgan fayl bulut chizmasi emas.
- **Hamma narsa oʻzgargan koʻrinadi.** Ikki versiya turli dasturlar tomonidan saqlangan boʻlsa, bir xil chizmani turlicha yozadi (anonim bloklar nomlari, yaxlitlash). CadCraft tomonidan saqlangan versiyalarni solishtiring.
