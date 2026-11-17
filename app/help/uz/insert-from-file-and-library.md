---
title: Fayl yoki kutubxonadan qoʻshish
summary: Boshqa DWG yoki DXF dan blok yoki butun chizmani olib kiring, hamda Kutubxona, fayl yoki boshqa kutubxonadan elementlarni mualliflik va yangilanishlari bilan joylashtiring.
keywords: qoʻshish, fayl, kutubxona, librarycraft, element, uskuna, boshqa chizmadan blok, wblock, dizayn markazi, mualliflar, mualliflik, litsenziya, yangilash, oqim, item.json
from: 316188d2
---

## Boshqa chizmadan blok qoʻshish

1. `I` yozing va {{key:Enter}} tugmasini bosing, yoki Bloklar guruhidagi {{ui:Qoʻshish}} tugmasini bosing.
2. `Enter block name or [File/Library]` da `F` yozing va {{key:Enter}} tugmasini bosing.
3. Bu kompyuterdagi DWG yoki DXF ni tanlang. U shu yerda oʻqiladi; ochilmaydi va hech narsa yuklanmaydi.
4. {{ui:Qayerdan qoʻshish}} dialogida roʻyxatdan blokni tanlang ({{ui:Bloklarni filtrlash}} ichiga yozib topishingiz mumkin), yoki {{ui:Butun chizma}} ni qoldiring. {{ui:Qoʻshish}} tugmasini bosing.
5. Joyini bosing va soʻragan atributlarini toʻldiring.

Butun chizma bitta blok sifatida kiradi, nomi fayl nomi boʻladi. Siz tanlagan blok ichidagi bloklar ham keladi. Ular ishlatgan qatlamlar ushbu chizmaga qoʻshiladi.

Agar boshqa chizma boshqa birliklarda boʻlsa (masalan, dyuym va millimetr), CadCraft havolani shunga moslab masshtablaydi va buni buyruqlar tarixida aytadi.

### Nom allaqachon ishlatilgan boʻlsa

Agar bu chizmada shu nomli blok bor boʻlsa, CadCraft soraydi:

- {{ui:Mavjudini saqlash}} shu nomli, bu chizmadagi blokdan foydalanadi.
- {{ui:Qayta nomlash}} yangisini `Name (2)` nomi bilan kiritadi.

Butun qoʻshish bitta qadam: {{key:Mod+Z}} havolani va nusxalangan taʼriflarni yana olib tashlaydi.

## Kutubxonani ochish

{{ui:Bloklar}} panelidagi {{ui:Kutubxona…}} ni yoki Bloklar guruhidagi {{ui:Kutubxona}} ni bosing, yoki `LIB` yozing. `INSERT` soʻrovida `L` ham uni ochadi.

Kutubxonada toʻrtta manba bor, yorliqlar sifatida:

- {{ui:Kutubxona}}: CadCraft kutubxonasi. Nomi, ishlab chiqaruvchisi yoki modeli boʻyicha qidiring va kategoriya boʻyicha filtrlang.
- {{ui:Fayllar…}}: istalgan kutubxonadan element fayli (`item.json`), yoki elementlar yasash uchun chizma, elektron jadval yoki 3D model: DWG yoki DXF (har bir blok element boʻladi), nomi va oʻlcham ustunlari bor CSV, yoki glTF yoki OBJ model. Hech narsa yuklanmaydi.
- {{ui:Standart}}: poʻlat profillar (kesim, fasad yoki 3D element sifatida) va bolt, gayka hamda podshipnik kabi standart detallar, nashr etilgan jadvallardan bu yerda yasalgan. Qarang: [Poʻlat profillar va standart detallarni joylashtirish](topic:steel-and-standard-parts).
- {{ui:Boshqa oqimlar}}: Kutubxona kabi javob beradigan boshqa kutubxonalar. Ularning manzilini bir marta qoʻshing; brauzer uni eslab qoladi.

Har bir kartochkada oldindan koʻrinish, nomi, ishlab chiqaruvchisi va modeli, litsenziya hamda versiya koʻrsatiladi. Olib tashlangan element {{ui:Olib tashlangan}} belgisi va sababi bilan koʻrinadi; uni joylashtirishdan oldin CadCraft soraydi.

## Elementni joylashtirish

1. Kartochkada {{ui:Joylashtirish}} tugmasini bosing.
2. Element borishi kerak boʻlgan joyni bosing. Avval `R` yozsangiz uni aylantirasiz, `S` yozsangiz masshtablaysiz.
3. `Enter Item number (CC-ITEM)` da {{key:Enter}} tugmasini bosing (keyingi boʻsh raqam uchun) yoki oʻzingiz raqam yozing.

Element `LIB_<name>_v<version>` nomli blok boʻladi va chizmaning birliklarida chiziladi. Agar chizmada birliklar boʻlmasa, element millimetrda kiradi va buyruqlar tarixida shunday deyiladi; avval oʻng paneldagi {{ui:Birliklar}} ni oʻrnating.

Uning maʼlumotlari koʻrinmas atributlar sifatida birga keladi: elementning identifikatori va versiyasi, litsenziya va mualliflik, ishlab chiqaruvchisi, modeli, kategoriyasi va oʻlchamlari. Qarang: [Blok atributlari](topic:attributes).

## Elementlar sizning tilingizda

Element oʻz nomi va tavsifini boshqa tillarda ham saqlashi mumkin. CadCraft sozlangan tilda (Sozlamalar › Umumiy › Til) boʻlsa, kartochka va joylashtirilgan blokning element nomi shu tildan foydalanadi. Blokning oʻzi elementning oʻz nomidan yasalgan nomni saqlaydi, shuning uchun qaysi tilda joylashtirilganidan qatʼi nazar chizmada har bir element uchun bitta blok boʻladi.

## Yangilanishlarni tekshirish

1. Kutubxonani oching.
2. {{ui:Yangilanishlarni tekshirish}} tugmasini bosing.

Chizmadagi har bir kutubxona elementi element raqamlari bilan roʻyxatda chiqadi va u yangilangan, yangi versiyasi bor (va nima oʻzgarganini), yoki olib tashlangan ekanligi koʻrsatiladi. Qatorda {{ui:Yangilash}} yoki {{ui:Hammasini yangilash}} tugmasini bosing. Har bir havola yangi versiya blokiga oʻtadi va element raqami, miqdori, joyi, burchagi va qatlamini saqlaydi. {{key:Mod+Z}} yangilanishni bekor qiladi.

## Ishlatganingizni keltiring

{{ui:Kutubxona mualliflari}} tugmasini bosing. Har bir element oʻz mualliflik qatori va litsenziyasi bilan roʻyxatlanadi.

- {{ui:Mualliflikni nusxalash}} bitta elementning qatorini nusxalaydi; {{ui:Hammasini nusxalash}} har bir qatorni nusxalaydi.
- {{ui:CSV yuklab olish}} roʻyxatni element raqamlari, ishlab chiqaruvchilari, modellari, litsenziyalari va mualliflik qatorlari bilan saqlaydi. Uni istalgan elektron jadvalda ochish mumkin.

CC BY kabi litsenziyalar ishni ishlatgan joyingizda muallifni koʻrsatishni talab qiladi. Qatorlarni chizmaga, texnik tavsifga yoki loyiha izohlariga qoʻying.

## Belgilar va aktivlar

Kutubxonada uch turdagi element bor: Belgilar (chizma kelishuvlari, 2D), Turlar (element nimadan yasalganini bildiradi) va Aktivlar (fizik obyektlar). {{ui:Kutubxona}} yorligʻida {{ui:Element turi}} roʻyxati Belgilar va aktivlarni birga, faqat Belgilarni yoki faqat Aktivlarni koʻrsatadi. Turlar BimCraft loyihasi qurilgan narsalardir, shuning uchun CadCraft ularni roʻyxatlamaydi.

## Kutubxonaga kirish

{{ui:Kutubxonaga kirish}} tugmasini bosing. Sayt ustida kichik oyna ochiladi; u yerda kirganingizdan keyin CadCraft jamoangiz elementlarini koʻrsatishi va siz joylashtirgan narsalarni qayd etishi mumkin, shuning uchun ishlatgan elementingiz oʻzgarsa, xabar olasiz. Kirish shu brauzer yorligʻi uchun amal qiladi. Uni istalgan vaqtda hisobingizning xavfsizlik sahifasidan bekor qilishingiz mumkin.

## Odatiy xatolar

- **"IFC turlaridan elementlar yasash BimCraftda."** IFC va oila fayllari BimCraft ilovasida oʻqiladi. Elementni oʻsha yerda yoki Kutubxonada yasang, keyin uning `item.json` faylini bu yerda ishlating.
- **"Kutubxonaga ulanib boʻlmadi."** Siz oflaynsiz yoki kutubxona ishlamayapti. Chizmadagi elementlarga taʼsir qilmaydi.
- **Element juda katta yoki juda kichik.** Chizmaning birliklari notoʻgʻri yoki oʻrnatilmagan. Bekor qiling, {{ui:Birliklar}} ni oʻrnating va qayta joylashtiring.
