---
title: CadCraft sozlamalari
summary: Chizma ilovasiga tegishli sozlamalar: kursor oʻlchami, joylashtirilgan nusxa kursordan qayerda osilishi, bosish tanlovga nima qilishi, asboblar paneli necha qator ishlatishi, buyruq satri qayerda va qanchalik baland turishi, ixcham yuqori soha va burchak koʻrsatkichi.
keywords: buyruq satri, suzuvchi buyruq satri, suzish, biriktirish, bir qator, f2, buyruqlar tarixi, commandline, cmdline, toparea, yuqori soha, ixcham, cursorsize, toʻliq ekran krestchasi, toʻliq ekran kursori, chetdan-chetgacha, asboblar paneli qatorlari, asboblar paneli koʻrinishi, ctrl f1, sozlamalar, afzalliklar, parametrlar, burchak koʻrsatkichi, koʻrinish kubi, oʻq belgisi, kursor, krestcha, tanlash qutisi, joylashtirish nuqtasi, bazaviy nuqta, obyektlarni bosish, tanlash, pickadd, shift, tiklash
from: 0896eb42
---

{{ui:Sozlamalar}} ni ilova panelidagi tishli belgi orqali yoki {{key:Mod+,}} bilan oching. Birinchi yorliq, {{ui:CadCraft}}, shu ilovaga tegishli sozlamalarni saqlaydi; {{ui:Umumiy}} oilaning barcha ilovalari birgalikda ishlatadigan sozlamalarni saqlaydi (mavzu, panel matni oʻlchami va kengliklari, asboblar panelining koʻrinishi va tartibi). CadCraft sozlamalari faqat shu ilovada mavjud: ularni bu yerda oʻzgartirasiz va bu brauzer ularni eslab qoladi. {{ui:CadCraft sozlamalarini tiklash}} ularning hammasini boshlangʻich holatga qaytaradi.

## Kursor

**Kichik**, **Oʻrtacha** (boshlangʻich), **Katta** yoki **Toʻliq ekran**: chizmadagi krestcha va tanlash qutisining oʻlchami. Kattaroq tanlash qutisi obyektlarni biroz uzoqroqdan ham tanlaydi, bu sensorli ekranda yoki juda nozik chizmada yordam beradi.

**Toʻliq ekran** krestchaning ikki chizigʻini chizma boʻylab chetdan-chetgacha yuritadi, buyruq ishlamayotganda ham, shunda bir nechta narsa butun koʻrinish boʻylab tekislanganini koʻz bilan tekshirishingiz mumkin. Koʻrinish ikkiga boʻlinganda chiziqlar siz ishlayotgan oynada qoladi. AutoCAD dagi {{cmd:CURSORSIZE}} 100 ga oʻxshash: toʻliq ekran uchun {{cmd:CURSORSIZE}} ni va 100 ni kiriting; kichikroq son eng yaqin oʻlchamni tanlaydi (5 dan kichik — Kichik, 5 dan 9 gacha — Oʻrtacha, 10 dan 99 gacha — Katta).

## Joylashtirish nuqtasi

{{key:Mod+V}} ({{cmd:PASTECLIP}}) dan keyin joylashtirilgan nusxa kursordan qayerda osilishi, siz bosmaguningizcha:

- **Quyi chap burchak** (boshlangʻich): nusxalangan obyektlar chegaralarining quyi chap burchagi, AutoCAD dagi kabi.
- **Markaz**: ularning chegaralari oʻrtasi. Belgini koʻz bilan joylashtirish uchun qulay.

`COPYBASE` bilan qilingan nusxa har doim siz tanlagan bazaviy nuqtadan osiladi. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) bu sozlamani eʼtiborsiz qoldiradi: u asl koordinatalarni saqlaydi. Qarang: [Nusxalash, qoʻyish va dublikat qilish](topic:copy-paste).

## Obyektlarni bosish

Buyruq ishlamayotganda chizmadagi bosish tanlovga nima qilishi:

- **Tanlovga qoʻshadi** (boshlangʻich): har bir bosish yoki oyna obyektlarni qoʻshadi; {{key:Shift}}+bosish yoki {{key:Shift}}+oyna ularni chiqaradi.
- **Tanlovni almashtiradi**: bosish yoki oyna faqat oʻzi tanlaganini tanlaydi. {{key:Shift}}+bosish obyekt qoʻshadi yoki allaqachon tanlangan obyektni chiqaradi; {{key:Shift}}+oyna qoʻshadi.

Buyruq ichidagi `Obyektlarni tanlang:` soʻrovida bosishlar har doim qoʻshadi ({{key:Shift}} esa olib tashlaydi), bu sozlama nima deyishidan qatʼi nazar. Qarang: [Obyektlarni tanlash](topic:select-objects).

## Boʻsh joyni bosish

Obyekt boʻlmagan joyni bosish, buyruq ishlamayotganda nima qiladi. Ikkala holatda ham u tanlash oynasini boshlaydi (ikkinchi bosish uni tugatadi).

- **Tanlovni tozalaydi** (boshlangʻich): tanlangan narsa boʻshatiladi. Saqlab qolish uchun bosish vaqtida {{key:Shift}} ni ushlang.
- **Tanlovni saqlaydi**: tanlov qoladi, boshqa loyihalash dasturlaridagi kabi; oyna unga qoʻshiladi. Tanlovni tozalash uchun {{key:Esc}} ni bosing.

## Tanlash uchun sudrash

Boʻsh joyda bosib sudrash nimani chizadi:

- **Lasso** (boshlangʻich): erkin kontur. Avval oʻngga harakatlansangiz, ichida toʻliq joylashganlarni tanlaydi; chapga boʻlsa, tegib turganlarni tanlaydi. Sudrash vaqtida {{key:Space}} oyna, kesishma va toʻsiq oʻrtasida almashtiradi.
- **Toʻrtburchak**: quti, bosish va ikkinchi bosish uni chizganidek.

{{cmd:LASSOMODE}} `1` yoki `0` ham xuddi shuni oʻrnatadi. Qarang: [Lasso tanlash](topic:lasso-selection).

## Kesish va uzaytirish uchun sudrash

Boʻsh joyda bosib sudrash {{cmd:TRIM}} va {{cmd:EXTEND}} da nima qiladi:

- **Yoʻl** (boshlangʻich): erkin yoʻl; u kesib oʻtgan har bir boʻlak kesiladi (yoki uzaytiriladi).
- **Oyna**: quti; u tegib turgan har bir boʻlak kesiladi, `C` varianti kabi.

Qarang: [Kesish va uzaytirish](topic:trim-and-extend).

## Asboblar paneli joylashuvi

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Yuqori** (boshlangʻich, doim shunday boʻlgan), **Quyi**, **Chap** yoki **Oʻng**. Chap yoki oʻngda asboblar guruhlari ustun boʻlib joylashadi va oynadan baland boʻlsa aylanadi, tugmalar esa bir qatorga ikki yoki uchtadan oʻraladi. Tanlov sozlamalar bilan saqlanadi, va {{cmd:TOOLBARDOCK}} (`TBDOCK`) uni buyruq satridan oʻrnatadi. {{ui:Umumiy}} › {{ui:Reset the layout}} asboblar panelini yana yuqoriga qaytaradi.

Menyu uslublarining panellari asboblar paneli ichida joylashadi va u bilan birga harakatlanadi, lekin {{ui:Ribbon}} uslubi yuqori yoki quyi tomonda chiziladi: yon tomonda u aylanadigan tor ustunga aylanadi. Telefonda asboblar paneli telefon tartibi qoʻygan joyda qoladi.

## Asboblar paneli qatorlari

Asboblar yuqoridagi chizma ustida necha qator ishlatishi, CadCraft asboblar panelida va {{ui:Drafting classic}} hamda {{ui:Ribbon}} uslublarida:

- **Oynaga moslash** (boshlangʻich): asboblar oyna kengligiga qarab oʻraladi.
- **2 qator**: koʻpi bilan ikki qator. Bu kenglikda asboblar ikki qatordan kam boʻlib oʻralsa, oddiy oʻraladi; aks holda ikki qatorda gorizontal aylanadi.
- **1 qator**: gorizontal aylanadigan bitta qator, bu chizmaga eng koʻp joy qoldiradi.

{{key:Shift+Ctrl+F1}} uchtasi orasida oʻtadi, {{cmd:TOOLBARROWS}} esa birini oʻrnatadi. Tugmalar nimani koʻrsatishi (belgilar va matn, faqat belgilar yoki faqat matn) {{ui:Umumiy}} › {{ui:Toolbar}} sozlamasi; {{key:Ctrl+F1}} uning orasida oʻtadi va {{cmd:TOOLBAR}} uni oʻrnatadi.

## Buyruq satri

Buyruq satri chizma ostida biriktirilgan holda qolishi mumkin, avvalgidek, yoki uning ustida suzishi mumkin, va u bitta qatorgacha ingichka boʻlishi mumkin.

- **Suzdiring.** Uning chap uchidagi tutqichni chizmaga torting, yoki uning {{ui:Command line options}} menyusidagi (oʻng uchidagi uch nuqta) {{ui:Float over the drawing}} ni tanlang. Tutqichni yana torting, joyini siljitish uchun; joyi oyna oʻlchami oʻzgarganda saqlanadi. Oʻng chetini torting, kengroq yoki torroq qilish uchun. Holat satriga tashlang yoki {{ui:Dock at the bottom}} ni tanlang, uni yana biriktirish uchun.
- **Torroq yoki balandroq qiling.** Yuqori chetini torting: har bir qadam tarixning bir qatori. Nolgacha tushsa, u **bir qatorli buyruq satri** boʻladi: faqat soʻrov va siz yozgan narsa, va yangi xabar bir lahzaga uning ustida koʻrinadi. Yuqori chetda ikki marta bosish bir qator va sizda boʻlgan balandlik orasida oʻtadi.
- **Tarix.** {{key:F2}} yoki buyruq satridagi soat tugmasi ({{ui:Command history (F2)}}) butun tarixni satrning ustida ochadi (agar satr oynaning yuqorisiga yaqin suzsa, pastda). Yozish hali ham buyruq satriga boradi; {{key:PageUp}} va {{key:PageDown}} tarixni aylantiradi, va {{key:Esc}}, {{key:F2}} yoki boshqa joyni bosish uni yopadi. F2 da sizning oʻz tugmangiz bu ustunlikka ega.
- **Klaviaturadan.** Tutqich tugma: u fokusda boʻlganda, strelka tugmalari suzuvchi buyruq satrini siljitadi ({{key:Shift}} bilan kattaroq qadamlarda); {{key:Up}} biriktirilganni suzdiradi va quyi chetda {{key:Down}} uni biriktiradi. Yuqori chet ajratgich: {{key:Up}} va {{key:Down}} qator qoʻshadi yoki olib tashlaydi, {{key:Home}} uni bir qator qiladi, {{key:End}} eng balandini. Ekran oʻqish dasturlari har bir xabarni eshitadi, bir qatorli buyruq satrida ham.

{{ui:CadCraft}} › {{ui:Command line}} xuddi shu tanlovlarga ega: {{ui:Docked at the bottom}} yoki {{ui:Floating}}, {{ui:History lines shown}} (0 dan 12 gacha) va {{ui:Standard height}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ularni buyruq satridan oʻrnatadi. Joy va balandlik CadCraft uchun bu brauzerda qolgan tartib bilan saqlanadi, shuning uchun saqlangan ish muhiti ularni olib yuradi; {{ui:Umumiy}} › {{ui:Reset the layout}} buyruq satrini standart balandlikda yana pastga biriktiradi. Telefonda buyruq satri bir qator tarix bilan pastda qoladi; tarix tugmasi u yerda ham ishlaydi.

Oyna past boʻlib, tartib tekshiruvi zichroq tartib taklif qilganda, uning {{ui:Ha}} tugmasi, asboblar panellaridan keyin chizma hali ham qisqa boʻlsa, buyruq satrini ham bir qatorga aylantiradi.

## Yuqori soha

{{ui:CadCraft}} › {{ui:Top area}}: **Standart** (boshlangʻich) yoki **Ixcham**. Ixcham chizma ustidagi panellarni har bir menyu uslubida kichik saqlaydi: guruh nomlari va belgilar ostidagi soʻzlar yoʻqoladi (tooltiplar va ekran oʻqish dasturlari ularni hali ham saqlaydi) va tugmalar zichroq boʻladi. U [Asboblar paneli qatorlari](topic:settings#toolbar-rows) bilan ishlaydi: Ixcham va **1 qator** chizmaga eng koʻp joy qoldiradi. {{cmd:TOPAREA}} uni oʻrnatadi.

## Burchak koʻrsatkichi

Chizma burchagida nima turadi:

- **Avtomatik** (boshlangʻich): {{ui:Model}} yorligʻida oʻq belgisi va {{ui:3D}} yorligʻida koʻrinish kubi.
- **Oʻq belgisi**: {{ui:Model}} yorligʻining pastki chap burchagidagi X va Y belgisi, va {{ui:3D}} yorligʻida kichik X, Y va Z belgisi.
- **Koʻrinish kubi**: ikkala yorliqning yuqori oʻng burchagidagi kub. {{ui:Model}} yorligʻida u chizmani tepadan koʻrsatadi, va boshqa yuzi, qirrasi yoki burchagini bosish {{ui:3D}} yorligʻini oʻsha tomondan qarab ochadi. 3D yorliqda u koʻrinish bilan aylanadi: yon tomonga qarash uchun bosing, aylantirish uchun torting, va uy belgisi izometrik koʻrinishga qaytaradi. Qarang: [3D modelda](topic:3d-solids).
- **Yoʻq**: burchakda hech narsa yoʻq.

Varaqlarda ikkalasi ham koʻrinmaydi.

## Tanlovning uzunligi va maydoni

- **Holat satrida** (boshlangʻich): obyektlar tanlanganda holat satri ularning umumiy uzunligini va yopiqlarining umumiy maydonini koʻrsatadi. Qarang: [Tanlovning jami](topic:properties-panel#totals-of-a-selection).
- **Yashirin**: holat satri ularni tashlab ketadi. Xususiyatlar bir nechta obyekt uchun baribir koʻrsatadi.

## Setka, Ortho va ilashishlar

Bular dialogda yoʻq: holat satridagi {{ui:Grid}}, {{ui:Ortho}} va {{ui:Snap}} tugmalari (yoki {{key:F7}}, {{key:F8}}, {{key:F3}}) va ularning yonidagi obyekt ilashishlari roʻyxati, siz ularni tark etganingizda eslab qolinadi. Qarang: [Obyekt nuqtalariga ilashish](topic:object-snaps).
