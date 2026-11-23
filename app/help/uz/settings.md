---
title: CadCraft sozlamalari
summary: Chizish ilovasiga tegishli sozlamalar: kursor oʻlchami, nusxa qayerdan kursorga osilishi, bosish tanlovga qanday taʼsir qilishi, asboblar paneli necha qator ishlatishi, buyruq satri qayerda va qanchalik baland turishi, ixcham yuqori soha va burchak koʻrsatkichi.
keywords: buyruq satri, suzuvchi buyruq satri, biriktirish, bir qator, f2, buyruqlar tarixi, commandline, cmdline, toparea, yuqori soha, ixcham, cursorsize, toʻliq ekran kursori, chetdan chetgacha, asboblar paneli qatorlari, asboblar paneli koʻrinishi, ctrl f1, sozlamalar, afzalliklar, parametrlar, burchak koʻrsatkichi, koordinata koʻrsatkichi, kursor, xoch, tanlash quti, joylashtirish nuqtasi, asosiy nuqta, obyektlarni bosish, tanlash, pickadd, shift, tiklash
from: ae1a81db
---

{{key:Mod+,}} tugmasi yoki ilova panelidagi tishli belgi bilan {{ui:Sozlamalar}} ni oching. Birinchi yorliq, {{ui:CadCraft}}, shu ilovaga tegishli sozlamalarni oʻz ichiga oladi; {{ui:Umumiy}} oilaning barcha ilovalari uchun umumiy sozlamalarni oʻz ichiga oladi (mavzu, panel matni oʻlchami va kengliklari, asboblar panelining koʻrinishi va tartibi). CadCraft sozlamalari faqat ilovaning ichida mavjud: ularni shu yerda oʻzgartirasiz va bu brauzer ularni eslab qoladi. {{ui:CadCraft sozlamalarini tiklash}} ularning hammasini boshlangʻich holatiga qaytaradi.

## Kursor

**Kichik**, **Oʻrta** (boshlangʻich), **Katta** yoki **Toʻliq ekran**: chizmadagi xoch va tanlash kvadratining oʻlchami. Katta tanlash kvadrati obyektlarni biroz uzoqroqdan ham tanlaydi, bu sensorli ekranda yoki juda nozik chizmada yordam beradi.

**Toʻliq ekran** xochning ikki chizigʻini chizma boʻylab chetdan chetgacha choʻzadi, hech qanday buyruq ishlamayotganda ham, shunda butun koʻrinish boʻylab ikki narsa tekis tekislanganini koʻzingiz bilan tekshirishingiz mumkin. Koʻrinish boʻlingan boʻlsa, chiziqlar siz ishlayotgan oynada qoladi. AutoCAD dagi {{cmd:CURSORSIZE}} 100 bilan bir xil: toʻliq ekran uchun {{cmd:CURSORSIZE}} va 100 ni yozing; kichikroq son eng yaqin oʻlchamni tanlaydi (5 dan kichik Kichik, 5 dan 9 gacha Oʻrta, 10 dan 99 gacha Katta).

## Joylashtirish nuqtasi

{{key:Mod+V}} ({{cmd:PASTECLIP}}) dan keyin nusxa kursorga qaysi nuqtadan osilishi, siz bosmaguningizcha:

- **Chap pastki burchak** (boshlangʻich): nusxalangan obyektlar chegarasining chap pastki burchagi, AutoCAD dagidek.
- **Markaz**: ularning chegarasining oʻrtasi. Belgini koʻz bilan joylashtirish uchun qulay.

{{cmd:COPYBASE}} bilan qilingan nusxa har doim siz tanlagan asosiy nuqtadan osiladi. {{ui:Joyida qoʻyish}} ({{key:Mod+Shift+V}}) bu sozlamani eʼtiborga olmaydi: u asl koordinatalarni saqlaydi. Qarang: [Nusxalash, qoʻyish va nusxa olish](topic:copy-paste).

## Obyektlarni bosish

Buyruq ishlamayotganda chizmada bosish tanlovga nima qiladi:

- **Tanlovga qoʻshadi** (boshlangʻich): har bir bosish yoki oyna obyektlar qoʻshadi; {{key:Shift}}+bosish, yoki {{key:Shift}}+oyna ularni olib tashlaydi.
- **Tanlovni almashtiradi**: bosish yoki oyna faqat nima tanlasa shuni tanlaydi. {{key:Shift}}+bosish obyekt qoʻshadi yoki allaqachon tanlangan birini olib tashlaydi; {{key:Shift}}+oyna qoʻshadi.

Buyruq ichidagi `Select objects:` soʻrovida bosishlar doim qoʻshadi ({{key:Shift}} oʻchiradi), bu sozlama nima desa ham. Qarang: [Obyektlarni tanlash](topic:select-objects).

## Boʻsh joyni bosish

Buyruq ishlamayotganda obyekt boʻlmagan joyni bosish nima qiladi. Ikkala holatda ham tanlash oynasi boshlanadi (ikkinchi bosish uni tugatadi).

- **Tanlovni tozalaydi** (boshlangʻich): tanlangan narsa boʻshatiladi. Saqlash uchun {{key:Shift}} ni bosib turing.
- **Tanlovni saqlaydi**: tanlov qoladi, boshqa chizma dasturlaridagi kabi; oyna unga qoʻshiladi. Tanlovni tozalash uchun {{key:Esc}} ni bosing.

## Tanlash uchun sudrash

Boʻsh joyda bosib sudrash nima chizadi:

- **Arqon** (boshlangʻich): erkin kontur. Avval oʻngga harakatlansangiz, ichida toʻliq joylashganlarni tanlaydi; avval chapga harakatlansangiz, ularga tegib turganlarni tanlaydi. Sudrash paytida {{key:Space}} oyna, kesishuv va toʻsiq oʻrtasida almashtiradi.
- **Toʻrtburchak**: quti, bosish va ikkinchi bosish uni chizgandek.

{{cmd:LASSOMODE}} `1` yoki `0` xuddi shuni belgilaydi. Qarang: [Arqon bilan tanlash](topic:lasso-selection).

## Kesish va uzaytirish uchun sudrash

{{cmd:TRIM}} va {{cmd:EXTEND}} da boʻsh joyda bosib sudrash nima qiladi:

- **Yoʻl** (boshlangʻich): erkin yoʻl; u kesib oʻtgan har bir boʻlak kesiladi (yoki uzaytiriladi).
- **Oyna**: quti; unga tegib turgan har bir boʻlak kesiladi, `C` varianti kabi.

Qarang: [Kesish va uzaytirish](topic:trim-and-extend).

## Asboblar paneli joylashuvi

{{ui:CadCraft}} › {{ui:Asboblar paneli joylashuvi}}: **Yuqorida** (boshlangʻich, doim shunday boʻlgan), **Pastda**, **Chapda** yoki **Oʻngda**. Chap yoki oʻngda asboblar guruhlari ustunga joylashadi va balandligi oynadan katta boʻlsa, aylanadi; tugmalar ikki-uchtadan qatorga oʻraladi. Tanlov sozlamalaringiz bilan saqlanadi va {{cmd:TOOLBARDOCK}} (`TBDOCK`) uni buyruq satridan oʻrnatadi. {{ui:Umumiy}} › {{ui:Joylashuvni tiklash}} asboblar panelini yana yuqoriga qaytaradi.

Menyu uslublarining panellari asboblar paneli ichida joylashadi va u bilan birga harakatlanadi, lekin {{ui:Lenta}} uslubi yuqori yoki pastki tomonda yurishga moʻljallangan: yon tomonda u torroq ustunga aylanadi va aylanadi. Telefonda asboblar paneli telefon tartibi qoʻygan joyda qoladi.

## Asboblar paneli qatorlari

Chizma ustidagi asboblar nechta qator ishlatadi. Bu CadCraft asboblar panelida va {{ui:Klassik chizmachilik}} hamda {{ui:Lenta}} uslublarida:

- **Oynaga moslab oʻrash** (boshlangʻich): asboblar oynaning kengligiga qarab oʻraladi.
- **2 qator**: eng koʻpi ikki qator. Bu kenglikda asboblar ikki qatorga yoki undan kamga oʻralsa, ular shunchaki oʻraladi; aks holda ikki qatorda yonga aylanadigan qatorlarda turadi.
- **1 qator**: bitta qator, yonga aylanadi, bu chizmaga eng koʻp joy qoldiradi.

{{key:Shift+Ctrl+F1}} uchtasi orasida almashtiradi, {{cmd:TOOLBARROWS}} esa birini belgilaydi. Tugmalar nimani koʻrsatishi (belgilar va matn, faqat belgilar yoki faqat matn) {{ui:Umumiy}} › {{ui:Asboblar paneli}} sozlamasi; {{key:Ctrl+F1}} uni almashtiradi, {{cmd:TOOLBAR}} esa belgilaydi.

## Buyruq satri

Buyruq satri chizma ostida biriktirilgan holda qolishi mumkin, eskidek, yoki chizma ustida suzishi mumkin, va bitta qatorgacha ingichka boʻlishi mumkin.

- **Suzdiring.** Uning chap uchidagi tutqichni chizmaga sudrang yoki buyruq satrining oʻng uchidagi uch nuqtali menyudan {{ui:Chizma ustida suzish}} ni tanlang. Tutqichni yana sudrab harakatlantiring; oyna oʻzgarganda joyi saqlanadi. Uning oʻng chetini sudrab kengligini oʻzgartiring. Holat satriga tashlang yoki {{ui:Pastga biriktirish}} ni tanlang, qayta biriktirish uchun.
- **Yupqaroq yoki balandroq qiling.** Yuqori chetini sudrang: har bir qadam bitta tarix qatori. Nolgacha pastga tushirilsa, u **bitta qatorli buyruq satri** boʻladi: faqat soʻrov va siz yozgan narsa, va yangi xabar bir lahzaga uning ustida koʻrinadi. Yuqori chetda ikki marta bosish bir qator va sizdagi balandlik orasida almashtiradi.
- **Tarix.** {{key:F2}}, yoki buyruq satridagi soat tugmasi ({{ui:Buyruqlar tarixi (F2)}}), butun tarixni satr ustida ochadi (agar satr oynaning yuqori qismiga yaqin suzsa, pastda). Yozish hali ham buyruq satriga boradi; {{key:PageUp}} va {{key:PageDown}} tarixni aylantiradi va {{key:Esc}}, {{key:F2}} yoki boshqa joyni bosish uni yopadi. F2 da sizning yorligʻingiz bu tizimdan ustun turadi.
- **Klaviaturadan.** Tutqich tugma: u fokusda boʻlganda strelka tugmalari suzuvchi buyruq satrini harakatlantiradi ({{key:Shift}} bilan kattaroq qadamlarda); {{key:Up}} biriktirilganini suzdiradi va pastki chetda {{key:Down}} uni biriktiradi. Yuqori chet ajratgich: {{key:Up}} va {{key:Down}} qator qoʻshadi yoki olib tashlaydi, {{key:Home}} uni bir qatorga, {{key:End}} eng balandiga keltiradi. Ekran oʻquvchilari bitta qatorli buyruq satrida ham har bir xabarni eshitadi.

{{ui:CadCraft}} › {{ui:Buyruq satri}} da xuddi shu tanlovlar bor: {{ui:Pastda mahkamlangan}} yoki {{ui:Suzuvchi}}, {{ui:Koʻrsatiladigan tarix satrlari}} (0 dan 12 gacha) va {{ui:Standart balandlik}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ularni buyruq satridan belgilaydi. Oʻrni va balandligi CadCraft uchun shu brauzerda qolgan joylashuv bilan saqlanadi, shuning uchun saqlangan ish muhiti ularni olib yuradi; {{ui:Umumiy}} › {{ui:Joylashuvni tiklash}} buyruq satrini standart balandligida yana pastga biriktiradi. Telefonda buyruq satri bitta tarix qatori bilan pastda qoladi; tarix tugmasi u yerda ham ishlaydi.

{{ui:CadCraft}} › {{ui:Variant harflari}} buyruq variantlari uchun tanlagan harflaringizni saqlaydi: {{ui:Tahrirlash…}} faylni ochadi, {{ui:Import…}} uni siz tanlagan fayl bilan almashtiradi va {{ui:Eksport}} uni saqlaydi. Qarang: [Buyruq variantlariga oʻz harflaringizni bering](topic:option-letters).

Oynaning balandligi kam boʻlib, joylashuv tekshiruvi ixchamroq joylashuvni taklif qilsa, uning {{ui:Ha}} tugmasi asboblar panellaridan keyin ham chizma qisqa boʻlsa, buyruq satrini bitta qatorga ham aylantiradi.

## Yuqori soha

{{ui:CadCraft}} › {{ui:Yuqori soha}}: **Standart** (boshlangʻich) yoki **Ixcham**. Ixcham barcha menyu uslublarida chizma ustidagi panellarni kichik qoldiradi: guruh nomlari va belgilar ostidagi soʻzlar yoʻqoladi (maslahatlar va ekran oʻquvchilari ularni hali ham biladi) va tugmalar zichroq boʻladi. U [Asboblar paneli qatorlari](topic:settings#toolbar-rows) bilan ishlaydi: Ixcham va **1 qator** chizmaga eng koʻp joy qoldiradi. {{cmd:TOPAREA}} uni belgilaydi.

## Burchak koʻrsatkichi

Chizmaning burchagida nima turishi:

- **Avtomatik** (boshlangʻich): {{ui:Model}} yorligʻida oʻq belgisi va {{ui:3D}} yorligʻida koʻrinish kubi.
- **Oʻq belgisi**: {{ui:Model}} yorligʻining pastki chap tomonida X va Y belgisi, {{ui:3D}} yorligʻida esa kichik X, Y va Z belgisi.
- **Koʻrinish kubi**: ikkala yorligʻning yuqori oʻng tomonida kub. {{ui:Model}} yorligʻida u chizmani tepadan koʻrsatadi va boshqa yuz, qirra yoki burchakni bosish {{ui:3D}} yorligʻini oʻsha tomondan qaragan holda ochadi. {{ui:3D}} yorligʻida u koʻrinish bilan birga aylanadi: yon tomondan qarash uchun bosing, aylantirish uchun sudrang va uy belgisi izometrik koʻrinishga qaytaradi. Qarang: [Modelni 3D da koʻrish](topic:3d-solids).
- **Yoʻq**: burchakda hech narsa yoʻq.

Varaqlarda ikkisi ham koʻrinmaydi.

## Tanlovning uzunligi va maydoni

- **Holat satrida** (boshlangʻich): obyektlar tanlanganda, holat satri ularning umumiy uzunligini va yopiqlarining umumiy maydonini koʻrsatadi. Qarang: [Tanlovning yigʻindisi](topic:properties-panel#totals-of-a-selection).
- **Yashirilgan**: holat satri ularni tashlab ketadi. Xossalar bir nechta obyekt uchun baribir koʻrsatadi.

## Setka, Ortho va ilashtirishlar

Bular dialogda emas: holat satridagi {{ui:Setka}}, {{ui:Ortho}} va {{ui:Ilashish}} tugmalari (yoki {{key:F7}}, {{key:F8}}, {{key:F3}}) va ularning yonidagi obyektga ilashtirish roʻyxati. Ulardan chiqqaningizda ular eslab qolinadi. Qarang: [Obyektlardagi nuqtalarga ilashish](topic:object-snaps).
