---
title: Bloklarni yaratish va qoʻshish
summary: Chizilgan eshikni blokka aylantiring, uni boshqa joylarga, masshtab va burchaklarda qayta joylashtiring hamda ishlatilmagan bloklarni tozalang.
keywords: blok, bmake, insert, ddinsert, belgi, symbol, purge, explode, redefine, asosiy nuqta, base point, reference, count, bcount, jadval, schedule, csv, atributlar, maʼlumotlarni ajratib olish
from: 125a129d
---

## Nima yasaysiz

`DOOR-900` nomli blokka aylantirilgan eshik belgisi, keyin uch marta joylashtiriladi: chizilgani kabi, 90 gradusga burilgan va aks ettirilgan holda.

Blok — nomlangan obyektlar guruhi. Uni bir marta chizasiz; uni ishlatadigan har bir joy bitta taʼrifga ishora qiluvchi **blok havolasi** boʻladi. Chap paneldagi {{ui:Bloklar}} boʻlimida chizmadagi bloklar va ularning necha marta ishlatilgani koʻrsatiladi.

## Eshikni chizing

1. `L` yozing va {{key:Enter}} tugmasini bosing.
2. `0,0` yozing va {{key:Enter}} tugmasini bosing.
3. `@0,900` yozing va {{key:Enter}} tugmasini bosing, soʻng yana {{key:Enter}} tugmasini bosing. Bu eshik qanoti.
4. `A` yozing va {{key:Enter}} tugmasini bosing.
5. Avval markazni berish uchun `C` yozing va {{key:Enter}} tugmasini bosing.
6. Markaz uchun `0,0` yozing va {{key:Enter}} tugmasini bosing.
7. Boshlanish nuqtasi uchun `900,0` yozing va {{key:Enter}} tugmasini bosing.
8. Tugash nuqtasi uchun `0,900` yozing va {{key:Enter}} tugmasini bosing. Bu ochilish yoyi.
9. {{ui:Hammasini koʻrsatish}} tugmasini bosing.

Yoylar boshlanish nuqtasidan tugash nuqtasigacha soat strelkasi yoʻnalishiga teskari chiziladi.

## Blokni yarating

1. `B` yozing va {{key:Enter}} tugmasini bosing, yoki Bloklar guruhidagi {{ui:Yaratish}} tugmasini bosing.
2. `Enter block name` soʻrovida `DOOR-900` yozing va {{key:Enter}} tugmasini bosing.
3. `Specify insertion base point` soʻrovida `0,0` yozing va {{key:Enter}} tugmasini bosing. Bu menteşa: blok joylashtiriladigan nuqta.
4. `Select objects` soʻrovida eshik qanoti va yoyni oynacha chizib oʻrab tanlang.
5. {{key:Enter}} tugmasini bosing.

Tarixda `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` chiqadi. {{ui:Bloklar}} paneli DOOR-900 yonida `1×` bilan koʻrsatadi: bitta havola. Eshikni bossangiz, u endi bitta obyekt sifatida, "Blok havolasi" deb tanlanadi.

:::tip
Avval obyektlarni tanlab, keyin `B` yozishingiz mumkin. CadCraft baribir nom va asosiy nuqtani soʻraydi, soʻng tanlovingizdan foydalanadi.
:::

## Blokni qoʻshing

1. `I` yozing va {{key:Enter}} tugmasini bosing, yoki {{ui:Bloklar}} panelida DOOR-900 yonidagi {{ui:Qoʻshish}} tugmasini bosing.
2. `Enter block name or [File/Library] <DOOR-900>` soʻrovida {{key:Enter}} tugmasini bosing. (Paneldagi {{ui:Qoʻshish}} tugmasi nomni oʻzi kiritadi.)
3. Eshik koʻrsatkichni kuzatib boradi. Menteşa joylashishi kerak boʻlgan joyni bosing.

Ikkinchi eshik paydo boʻladi.

## Burilgan yoki masshtablangan holda qoʻshing

1. `I` yozing va {{key:Enter}} tugmasini bosing, soʻng nomni qabul qilish uchun {{key:Enter}} tugmasini bosing.
2. `Specify insertion point [Scale/Rotate]` soʻrovida `R` yozing va {{key:Enter}} tugmasini bosing.
3. `90` yozing va {{key:Enter}} tugmasini bosing. Koʻrinish buriladi.
4. Joylashtirish uchun bosing.

Masshtab omilini oʻrnatish uchun `S` yozing; u ikki yoʻnalishga ham qoʻllanadi. Masshtab va aylantirish keyingi qoʻshish uchun eslab qolinadi. Eshikni aks ettirish uchun uni qoʻshing, soʻng havolaga {{cmd:MIRROR}} buyrugʻini qoʻllang.

## Joylashtirilgan blokni oʻzgartiring

Blok havolasini tanlang. Oʻng panelda uning {{ui:X}}, {{ui:Y}}, {{ui:X masshtabi}}, {{ui:Y masshtabi}} va {{ui:Aylantirish}} qiymatlarini oʻzgartirishingiz mumkin. Manfiy {{ui:X masshtabi}} uni teskari agʻdaradi.

## Blokni qayta aniqlang

Har bir eshikni bir vaqtda oʻzgartirish uchun bir xil nomli blok yarating:

1. Eshikning yangi versiyasini chizing.
2. `B` yozing va {{key:Enter}} tugmasini bosing, soʻng `DOOR-900` yozing.
3. `Block "DOOR-900" already exists. Redefine it?` soʻrovida `Y` yozing va {{key:Enter}} tugmasini bosing.
4. Asosiy nuqtani oldingidek bering va yangi obyektlarni tanlang.

DOOR-900 ga ishora qiluvchi har bir havola endi yangi versiyani koʻrsatadi.

Yoki blokning oʻzini tahrirlang: {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Blokni tahrirlash}} ({{cmd:BEDIT}}) uni alohida ochadi, {{ui:Blokni saqlash}} esa uni saqlaydi. Qarang: [Blok atributlari](topic:attributes#change-a-block-the-block-editor).

## Bloklarni sanash va jadval eksport qilish

{{cmd:COUNT}} buyrugʻini yozing (yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Bloklarni sanash}}), soʻng:

- bitta eshikni bosing: bu fazodagi har bir eshik tanlanadi, tarixda esa ularning bu yerda va butun chizmadagi soni koʻrsatiladi;
- yoki {{key:Enter}} tugmasini bosing: tarixda har bir blok va uning soni, eng koʻpidan boshlab, roʻyxatlanadi;
- yoki `E` yozing, soʻng `C` — sanoqlar boʻyicha CSV (modelda, varaqlarda, jami) yoki `A` — har bir havola uchun qatlami, joylashuvi, aylanishi va har bir atribut qiymati bilan bitta qator. Bu elektron jadvalda ochiladigan jadval.

Nomsiz bloklar (oʻlchamlar, jadvallar) va boshqa bloklar ichidagi havolalar sanalmaydi. Formulaga oʻxshab boshlanadigan kataklar (`=`, `+`, `-`, `@`) elektron jadvalda matn sifatida koʻrinishi uchun oldiga `'` qoʻyiladi.

## Portlatish va tozalash

- {{cmd:EXPLODE}} (`X`) tanlangan blok havolasini alohida obyektlarga aylantiradi. Taʼrif saqlanib qoladi.
- {{cmd:PURGE}} (`PU`) hech narsa ishlatmaydigan blok taʼriflarini oʻchiradi. Tarixda nechta oʻchirilgani koʻrsatiladi.

## Blok nomlari

Nom 255 belgigacha boʻlishi va boʻshliq saqlashi mumkin, lekin yulduzcha (`*`) bilan boshlanishi mumkin emas hamda `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` yoki teskari apostrofni oʻz ichiga ololmaydi. DXF R12 sifatida saqlaganingizda nomlar bosh harflar bilan yoziladi, harf, raqam, `$`, `_` va `-` dan boshqa belgilar `_` ga aylanadi va nomlar 31 belgigacha kesiladi; tarixda nechtasi oʻzgarganini koʻrsatadi. `DOOR-900` kabi bosh harflar, raqamlar va chiziqchadan iborat qisqa nomlar oʻzgarmaydi. Saqlangan DWG nomlarni yozganingizdek, katta va kichik harflar bilan saqlaydi; faqat DWG ruxsat bermaydigan belgilar oʻzgaradi (`|` `$0$` ga aylanadi, boshqalari `_` ga).

## Blok yoki obyektlarni alohida faylga yozish

`W` ({{cmd:WBLOCK}}) yozing va **Obyektlar**, **Blok** yoki **Butun chizma** ni tanlang. Natija faqat oʻzi ishlatadigan qatlamlar, uslublar va bloklarni saqlagan yangi DWG yoki DXF boʻladi, asosiy nuqtangiz uning koordinata boshi boʻladi. Obyektlar uchun ularni saqlab qolish, blokka aylantirish yoki shu chizmadan oʻchirish mumkin.

## Keng tarqalgan xatolar

- **Blok krestikdan uzoqqa tushdi.** Asosiy nuqta obyektlarda emas edi. Blokni asosiy nuqta burchak yoki menteşada boʻlgan holda qayta yarating.
- **"Tanlangan obyektlar yoʻq; hech narsa yaratilmadi."** Siz hech narsa tanlamasdan {{key:Enter}} tugmasini bosdingiz.
- **"Bu chizmada hali bloklar yoʻq: F — fayldan, L — kutubxonadan qoʻshadi (yoki BLOCK bilan yarating)."** Boshqa chizmadan blok keltirish uchun `F` yozing, kutubxonadan olish uchun `L` yozing. Qarang: [Fayldan yoki kutubxonadan qoʻshish](topic:insert-from-file-and-library).
- **"Koʻrinish oynasi blokka kirmaydi."** Tanlovdan koʻrinish oynasi ramkalarini chiqarib qoldiring.
