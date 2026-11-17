---
title: Poʻlat kesimlar va standart detallarni joylashtirish
summary: Nashr etilgan jadvallardan poʻlat kesimlar, kota va 3D elementlarni chizing, standartlaridan boltlar, gaykalar, shaybalar, pinlar, podshipniklar, shponkalar va tishli gʻildiraklarni joylashtiring va ularni detallar roʻyxatida sanab chiqing.
keywords: poʻlat, kesim, profil, shakl, w profil, keng flanets, i-nur, shvelyer, burchak, hss, quvur, pipe, ipe, hea, heb, upn, nur, ustun, element, kota, aisc, en 10365, bolt, vint, gayka, shayba, pin, shponka, podshipnik, shponka ariqchasi, tishli gʻildirak, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standart detallar, detallar roʻyxati, materiallar roʻyxati, bom, steelmember, partslist
from: 547c1048
---

Kutubxonaning {{ui:Standart}} yorligʻida ikki xil narsa bor. Ularning hammasi bu yerda nashr etilgan jadvallardan yaratiladi (hech narsa yuklab olinmaydi):

- **Poʻlat kesimlar**: 1,335 ta oʻlcham. W, S, C, L, HSS va Pipe — AISC Shapes Database v16.0 dan; IPE, HEA, HEB va UPN — EN 10365:2017 dan. DetailCraft ham shu jadvalni ishlatadi.
- **Standart detallar**: oltiburchakli kallakli vintlar (ISO 4017), oltiburchakli boltlar (ISO 4014), oltiburchakli gaykalar (ISO 4032), oddiy shaybalar (ISO 7089), dyuymli oltiburchakli boltlar va gaykalar (ASME B18.2.1 va B18.2.2), parallel pinlar (ISO 2338), chuqur ariqchali sharikli podshipniklar (ISO 15), parallel shponkalar (DIN 6885-1) va toʻgʻri tishli gʻildiraklar (modullar ISO 54 dan).

Bularning hammasi CC0 ostida ulashiladi: istalgan maqsadda foydalaning, muallif koʻrsatish shart emas.

## Poʻlat kesim joylashtirish

1. Kutubxonani oching ({{ui:Kutubxona}} Bloklar guruhida, yoki `LIB` ni yozing) va {{ui:Standart}} yorligʻini bosing.
2. Birinchi roʻyxatda oilani tanlang, masalan {{ui:W profillari}}. Oʻlchamlarni toraytirish uchun qidiruv maydoniga yozing: `W12` barcha W12 larni koʻrsatadi.
3. {{ui:Shunday joylashtirish}} da tanlang:
   - {{ui:Kesim}}: koʻndalang kesim, markazi qoʻyish nuqtasida.
   - {{ui:Kota}}: elementning yonidan koʻrinishi, {{ui:Uzunlik (mm)}} da koʻrsatilgan uzunlikda, chap uchining oʻrtasidan.
   - {{ui:3D element}}: pastdagi 3D yorligʻida qattiq jism.
4. Oʻlcham kartasida {{ui:Joylashtirish}} ni bosing, soʻng joyini bosing, kutubxonadagi har qanday element kabi.

Kesim yoki kota blokka aylanadi. Uning atributlari oʻlchamni, u olingan jadvalni, uzunlikni (kota uchun) va toʻldirishingiz mumkin boʻlgan materialni olib yuradi.

:::note
S profillar, shvelyerlar va UPN oʻrtacha qalinlikdagi parallel flanetslar bilan, burchaklar esa toʻgʻri burchakli uchlar bilan chiziladi: haqiqiy flanetslar qiya, burchaklar esa yumaloq. W, IPE, HEA va HEB ning ildiz yumaloqlashtirishlari bor, HSS da esa burchak radiuslari.
:::

## 3D element yasash

{{ui:3D element}} ni tanlang va {{ui:Joylashtirish}} ni bosing, yoki buyruq satrida {{cmd:STEELMEMBER}} (`SMEMBER`) ni yozing:

1. `Section size` da koʻrsatilgan oʻlcham uchun {{key:Enter}} ni bosing, yoki bitta oʻlchamni yozing, masalan `HSS6x6x1/4` yoki `IPE300`.
2. Boshlangʻich nuqtani, soʻng oxirgi nuqtani bosing. Element ular orasida, yer ustida turgan holda joylashadi.
3. Ustun uchun `C` ni yozing, uning asosiy nuqtasini bosing va balandligini yozing.

Element 3D yorligʻida yopiq qattiq jism boʻladi. Uni u yerda boshqa har qanday qattiq jism kabi koʻchiring yoki nusxalang. {{key:Mod+Z}} uni yana olib tashlaydi.

## Standart detal joylashtirish

1. {{ui:Standart}} yorligʻida oilani tanlang, masalan {{ui:Oltiburchakli kallakli vintlar}}.
2. Vint, bolt, pin yoki shponka uchun uning {{ui:Uzunlik (mm)}} ni yozing (dyuymli oilalar uchun dyuymda). Tishli gʻildirak uchun {{ui:Tishlar}}, {{ui:Yuz kengligi (mm)}} va {{ui:Teshik (mm)}} ni yozing. Koʻrsatilgan odatiy qiymat uchun katakni boʻsh qoldiring.
3. Oʻlchamdagi {{ui:Joylashtirish}} ni bosing va joyini bosing.

Vintlar, boltlar va pinlar yondan chiziladi, kallakning tayanch yuzi qoʻyish nuqtasida; gaykalar, shaybalar, podshipniklar va tishli gʻildiraklar yuzi bilan; shponkalar yuqoridan. Rezbalar odatdagicha chiziladi: ildiz ingichka chiziq, rezba uchi qalin chiziq bilan. Tishli gʻildiraklar tishma-tish emas, balki uchi, boʻlinish va ildiz aylanalari sifatida chiziladi.

Har bir detal bloki oʻz turi, standarti, oʻlchami, uzunligi va materialini atribut sifatida, shuningdek nominal shakldan poʻlatdagi vaznini olib yuradi. Materialni {{ui:Xossalar}} panelida oʻzgartiring.

Xuddi shu detallar kutubxonada ham element sifatida bor, va PartCraft ularni parametrik detal sifatida ochadi ({{ui:Standart detal}} uning Fayl guruhida).

## Detallar roʻyxatini yasash

- Kutubxonada {{ui:Detallar roʻyxati}} ni bosing: chizmadagi har bir standart detal va poʻlat kesim turi, standarti, oʻlchami, uzunligi va materiali boʻyicha guruhlangan, miqdori va element raqamlari bilan. {{ui:CSV yuklab olish}} uni elektron jadval uchun saqlaydi.
- Uni chizish uchun {{cmd:PARTSLIST}} (`PLIST`) ni yozing, jadvalning chap yuqori burchagini bosing va odatdagi matn balandligi uchun {{key:Enter}} ni bosing yoki bittasini yozing.

Roʻyxat bloklar atributlaridan oʻqiladi, shuning uchun chizma DWG yoki DXF sifatida saqlanib, qayta ochilgandan keyin ham toʻgʻri boʻladi.

## Odatiy xatolar

- **"Bunday nomli poʻlat kesim yoʻq …"**: oʻlchamni {{ui:Standart}} yorligʻidagi roʻyxat shaklida yozing: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element 3D yorligʻida, rejada emas.** {{cmd:STEELMEMBER}} qattiq jism yaratadi; uni koʻrish uchun 3D yorligʻini oching. Poʻlatni rejada koʻrsatish uchun {{ui:Kesim}} yoki {{ui:Kota}} ni ham joylashtiring.
- **Uzunlik diapazondan tashqarida.** Bolt uzunligi kallagidan katta boʻlishi kerak, shponka esa kengligidan uzun. Kartalar ostidagi chiziq qaysi qiymat rad etilganini aytadi.
