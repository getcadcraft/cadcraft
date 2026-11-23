---
title: Fayldan yoki kutubxonadan qoʻshish
summary: Blok yoki butun chizmani boshqa DWG yoki DXF dan olib kiring, va elementlarni Kutubxonadan, fayldan yoki boshqa kutubxonadan, mualliflik va yangilanishlari bilan joylashtiring.
keywords: qoʻshish, fayl, kutubxona, librarycraft, element, jihoz, boshqa chizmadan blok, wblock, dizayn markazi, mualliflik, attribution, litsenziya, yangilash, oqim, item.json
from: f6e4e452
---

## Boshqa chizmadan blok qoʻshish

1. `I` yozing va {{key:Enter}} ni bosing yoki {{ui:Qoʻshish}} ni Bloklar guruhida bosing.
2. Oynaning pastidagi buyruq satri `Enter block name or [File/Library]` soʻraydi. Bu yerda `F` yozing va {{key:Enter}} ni bosing.
3. Bu kompyuterdagi DWG yoki DXF ni tanlang. U bu yerda oʻqiladi; ochilmaydi va hech narsa yuklanmaydi.
4. {{ui:Fayldan qoʻshish}} dialogida roʻyxatdan blokni tanlang ({{ui:Bloklarni filtrlash}} ga yozib topishingiz mumkin), yoki {{ui:Butun chizma}} ni qoldiring. {{ui:Qoʻshish}} ni bosing.
5. Joyini bosing va soʻralgan atributlarni toʻldiring.

Shuningdek, {{ui:Bloklar}} panelidan ham boshlashingiz mumkin: uning {{ui:Bloklarni filtrlash}} katagiga `F` yozib {{key:Enter}} ni bosing, yoki hech bir blok mos kelmaydigan narsani yozib {{ui:Fayldan…}} ni bosing. `L` va {{ui:Kutubxona…}} xuddi shunday kutubxonani ochadi. 0.10.1 versiyasigacha {{ui:Bloklarni filtrlash}} ga yozilgan harf faqat shu chizmaning bloklarini qidirar edi va “Filtrga mos blok yoʻq.” deb javob berardi.

Oʻz bloklaringizning chizmasini qoʻlda tutish uchun {{ui:Bloklar}} panelidagi {{ui:Kutubxonalar}} ostida {{ui:Chizma qoʻshish}} ni bosing va DWG yoki DXF ni tanlang. Uning bloklari rasmlari bilan roʻyxatga olinadi; joylashtirish uchun bosing.

Butun chizma bitta blok boʻlib keladi va fayl nomi bilan ataladi. Tanlagan blok ichidagi bloklar ham keladi. Ular ishlatadigan qatlamlar bu chizmaga qoʻshiladi.

Boshqa chizma boshqa birliklarda boʻlsa (masalan, dyuym va millimetr), CadCraft havolani shunga moslab masshtablaydi va buni tarixda aytadi.

### Nom allaqachon ishlatilsa

Agar bu chizmada shu nomli blok boʻlsa, CadCraft soraydi:

- {{ui:Mavjudini saqlash}} shu nomdagi bu chizma blokini ishlatadi.
- {{ui:Qayta nomlash}} yangisini `Name (2)` nomi bilan olib kiradi.

Butun qoʻshish bitta qadam: {{key:Mod+Z}} havolani va nusxalangan taʼriflarni yana olib tashlaydi.

## Kutubxonani ochish

{{ui:Bloklar}} panelidagi {{ui:Kutubxona…}} ni, yoki Bloklar guruhidagi {{ui:Kutubxona}} ni bosing, yoki `LIB` yozing. `INSERT` soʻrovida `L` ham uni ochadi.

Kutubxonada toʻrtta manba bor, yorliqlar sifatida:

- {{ui:Kutubxona}}: CadCraft kutubxonasi. Nom, ishlab chiqaruvchi yoki model boʻyicha qidiring va kategoriya boʻyicha filtrlang.
- {{ui:Fayllar…}}: istalgan kutubxonadagi element fayli (`item.json`), yoki elementlar yasash uchun chizma, elektron jadval yoki 3D model: DWG yoki DXF (har bir blok element boʻladi), nom va oʻlcham ustunli CSV, yoki glTF yoki OBJ model. Hech narsa yuklanmaydi.
- {{ui:Standart}}: poʻlat profillar (kesim, yuqoridan koʻrinish yoki 3D element sifatida) va boltlar, gaykalar va podshipniklar kabi standart detallar, nashr etilgan jadvallardan yaratilgan. Qarang: [Poʻlat profillar va standart detallarni joylashtirish](topic:steel-and-standard-parts).
- {{ui:Boshqa oqimlar}}: {{ui:Kutubxona}} kabi javob beradigan boshqa kutubxonalar. Ularning manzilini bir marta qoʻshing; bu brauzer uni eslab qoladi.

Har bir kartochkada rasm, nom, ishlab chiqaruvchi va model, litsenziya va versiya koʻrinadi. Qaytarib olingan element {{ui:Qaytarib olingan}} belgisi va sababi bilan koʻrsatiladi; CadCraft uni joylashtirishdan oldin soraydi.

## Elementni joylashtirish

1. Kartochkadagi {{ui:Joylashtirish}} ni bosing.
2. Element qayerga borishini bosing. Avval uni burish uchun `R`, yoki masshtablash uchun `S` yozing.
3. `Enter Item number (CC-ITEM)` da bo‘sh keyingi raqam uchun {{key:Enter}} ni bosing, yoki oʻz raqamingizni yozing.

Element `LIB_<name>_v<version>` nomli blok boʻladi va bu chizmaning birliklarida chiziladi. Chizmada birliklar boʻlmasa, element millimetrda joylashadi va tarixda shu aytiladi; avval oʻng panelda {{ui:Birliklar}} ni belgilang.

Uning maʼlumotlari koʻrinmas atributlar sifatida birga keladi: element identifikatori va versiyasi, litsenziya va mualliflik, ishlab chiqaruvchi, model, kategoriya va oʻlchamlar. Qarang: [Blok atributlari](topic:attributes).

## Elementlar sizning tilingizda

Element oʻz nomi va tavsifini boshqa tillarda ham olib yurishi mumkin. Agar CadCraft sozlangan tilda (Sozlamalar › Umumiy › Til) bular boʻlsa, kartochka va joylashtirilgan blokning element nomi ulardan foydalanadi. Blokning oʻzi elementning oʻz nomidan yasalgan nomni saqlaydi, shuning uchun qaysi tilda joylashtirilganidan qat’i nazar, chizmada har bir element uchun bitta blok boʻladi.

## Yangilanishlarni tekshirish

1. Kutubxonani oching.
2. {{ui:Yangilanishlarni tekshirish}} ni bosing.

Chizmadagi har bir kutubxona elementi element raqamlari bilan roʻyxatga olinadi va u yangilangan, yangi versiyasi bor (va nima oʻzgarganini), yoki qaytarib olingan ekanligi koʻrsatiladi. Qatorda {{ui:Yangilash}} ni yoki {{ui:Hammasini yangilash}} ni bosing. Har bir havola yangi versiya blokiga oʻtadi va element raqami, miqdori, joyi, burchagi va qatlamini saqlaydi. {{key:Mod+Z}} yangilanishni bekor qiladi.

## Ishlatganingiz uchun mualliflikni bering

{{ui:Kutubxona mualliflari}} ni bosing. Har bir element oʻzining mualliflik qatori va litsenziyasi bilan roʻyxatlanadi.

- {{ui:Mualliflikni nusxalash}} bitta elementning qatorini nusxalaydi; {{ui:Hammasini nusxalash}} har bir qatorni nusxalaydi.
- {{ui:CSV yuklab olish}} element raqamlari, ishlab chiqaruvchilari, modellari, litsenziyalari va mualliflik qatorlari bilan roʻyxatni saqlaydi. U istalgan elektron jadvalda ochiladi.

CC BY kabi litsenziyalar ishni ishlatgan joyingizda muallifni koʻrsatishni talab qiladi. Qatorlarni chizmaga, spetsifikatsiyaga yoki loyiha izohlariga qoʻying.

## Belgilar va aktivlar

Kutubxonada uch turdagi element bor: Belgilar (chizish odatlari, 2D), Turlar (element nimadan yasalgani) va Aktivlar (fizik obyektlar). {{ui:Kutubxona}} yorligʻida {{ui:Element turi}} roʻyxati Belgilar va aktivlarni birga, faqat Belgilarni yoki faqat Aktivlarni koʻrsatadi. Turlar BimCraft loyihasi qurilgan narsalar boʻlgani uchun CadCraft ularni roʻyxatlamaydi.

## Kutubxonaga kirish

{{ui:Kutubxonaga kirish}} ni bosing. Sayt ustida kichik oyna ochiladi; saytda kirganingizdan keyin CadCraft jamoangizning elementlarini koʻrsata oladi va siz joylashtirgan narsalarni roʻyxatga oladi, shuning uchun ishlatgan elementingiz oʻzgarsa, siz xabar olasiz. Kirish bu brauzer yorligʻi uchun amal qiladi. Uni istalgan vaqtda hisobingizning xavfsizlik sahifasidan bekor qilishingiz mumkin.

## Oʻz obyektlaringizni Mening obyektlarim da saqlang

{{ui:Mening obyektlarim}} — Kutubxonadagi shaxsiy roʻyxat, uni faqat siz koʻrasiz. U ommaviy kutubxonada emas, qidiruvda emas va jamoangizga koʻrsatilmaydi, va hisobingiz bilan kirgan har bir kompyuterda sizga ergashadi.

1. Kutubxona panelida {{ui:Fayllar…}} ni bosing va faylni oʻqing.
2. Yana kerak boʻlgan elementda {{ui:Mening obyektlarimga saqlash}} ni bosing.
3. Keyinroq {{ui:Mening obyektlarim}} ni bosing va {{ui:Joylashtirish}} ni bosing. Bu kutubxona elementi kabi joylashadi va {{ui:Yangilanishlarni tekshirish}} unga ham taalluqli.
4. {{ui:Mening obyektlarimdan olib tashlash}} uni roʻyxatdan chiqaradi. Chizmalarga allaqachon joylashtirilgan nusxalar qoladi.

Kutubxonaga kirgan boʻlishingiz kerak. Faylni oʻqish hech narsa yuklamaydi; elementni saqlash esa faqat shu bitta elementni hisobingizga yuboradi.

:::note
Mening obyektlarim sinovda va hisobingiz uchun hali ochilmagan boʻlishi mumkin. Agar u “Mening obyektlarim hali bu hisob uchun ochilmagan” desa, siz baribir {{ui:Fayllar…}} orqali oʻz fayllaringizdan elementlarni joylashtira olasiz.
:::

## Keng tarqalgan xatolar

- **“IFC turlaridan elementlar yasash BimCraft da.”** IFC va oila fayllari BimCraft ilovasida oʻqiladi. Elementni u yerda yoki Kutubxonada yarating, soʻng bu yerda uning `item.json` faylidan foydalaning.
- **“Kutubxonaga ulanib boʻlmadi.”** Siz oflaynsiz yoki kutubxona ishlamayapti. Chizmadagi elementlarga taʼsir qilmaydi.
- **Element juda katta yoki juda kichik.** Chizmaning birliklari notoʻgʻri yoki belgilanmagan. Bekor qiling, {{ui:Birliklar}} ni belgilang va uni qayta joylashtiring.
