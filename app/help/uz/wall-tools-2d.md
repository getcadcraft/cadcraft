---
title: 2D devorlar uchun shakllar, kesish, siljitish va qulflar
summary: Devorlarni toʻgʻri toʻrtburchak, koʻpburchak va yoy sifatida chizing, ularni boʻling va qayta biriktiring, oʻlcham boʻyicha siljiting, bitta devorni boshqasiga yoki setka chizigʻiga qulflang. BimCraft devorlaridagi bilan bir xil asboblar.
keywords: devor, devorlar asboblar paneli, devor tugmalari, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, birlashtirish uslubi, qiyshiq, tekis, toʻgʻri kesish, qulf, tutqich, uchini sudrash, burish, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, birlashtirish, birlashtirishni taqiqlash, qulflash, setka chizigʻi, boʻlish, boshliq, siljitish, joylashuv chizigʻi
from: f41e7433
---

Bu asboblar `WALL` dan chizilgan 2D devorlar bilan ishlaydi (qarang: "2D da aqlli devorlar, eshiklar va derazalar chizish"). Ular BimCraft dagi devor asboblari bilan bir xil qoidalardan foydalanadi, shuning uchun devor ikkala dasturda ham bir xil ishlaydi.

## Asboblar qayerda

- Asboblar panelida {{ui:Devorlar}} guruhida {{ui:Devor}}, {{ui:Toʻrtburchak}}, {{ui:Boʻlish}} va {{ui:Parallel koʻchirish}} bor. Uning {{ui:Koʻproq}} menyusida boshqa barcha devor asboblari ularning belgilari bilan bor.
- Lentali menyu uslublarida {{ui:Devorlar}} yorligʻida {{ui:Devorlarni chizish}}, {{ui:Kesish}}, {{ui:Belgilash va oʻzgartirish}}, {{ui:Ushlab turish}} va {{ui:Birlashtirish}} panellari bor.
- Varaqda asboblar qatorlari va asboblar qutisi bir xil {{ui:Devorlar}} guruhini koʻrsatadi.
- Quyida nomi koʻrsatilgan istalgan buyruqni ham yozishingiz mumkin.

## Birlashmalar saqlanadi

Devor uchi boshqa devorga tushganda, CadCraft bu birlashmani ikkala devor bilan birga saqlaydi. U endi uchlari joylashgan joydan birlashmalarni qayta hisoblamaydi. Shuning uchun:

- Siz siljitgan devorga ulangan devorlar unga ergashadi va biriktirilgan holda qoladi. Ularning uchlari oʻz chiziqlari boʻylab suriladi, shuning uchun hech narsa burilmaydi.
- Devorning bir uchini tutqichidan sudrasangiz, u yerda ulangan devor ham oʻz yoʻnalishini saqlaydi. Uning uchi oʻz chizigʻi boʻylab suriladi va sudrayotgan devorga yetib boradi, shuning uchun sudrayotgan uch doim kursor ostida emas, balki shu chiziqda tushadi. Oldindan koʻrinish qayerga tushishini koʻrsatadi. Sudrayotgan devorga tiraladigan devor oʻz chizigʻi boʻylab ergashadi. Uchini devor boʻylab toʻgʻri sudrasangiz, uning uzunligi oʻzgaradi va u yerda ulangan devor u bilan birga siljiydi.
- `ROTATE` ulangan devorda ham shunday ishlaydi: qoʻshni devorlarning uchlari oʻz chiziqlari boʻylab burilgan devorgacha suriladi.
- Burchakni siljitish uchun, u yerda uchrashadigan ikkala devorni tanlang va burchakdagi tutqichni sudrang. Ikkala devor ham burchakda qoladi va ikkalasi ham buriladi. Undan keyingi devorlar oʻz holatida qoladi.
- Birlashmalarni ataylab uzish uchun tutqichning yangi joyini bosayotganda {{key:Alt}} ni ushlab turing: devor siz qoʻygan joyga boradi va hech narsa unga ergashmaydi.
- Agar sudrash ulangan devorni oʻz uzoq uchi orqali qaytarib yuborsa, bu rad etiladi va hech narsa oʻzgarmaydi.
- {{ui:Birlashtirishni taqiqlash}} (`WALL` da `D`) bilan chizilgan yoki Xossalarda oʻchirilgan ({{ui:Boshida birlashtirishga ruxsat bermaslik}}, {{ui:Oxirida birlashtirishga ruxsat bermaslik}}) devor oʻsha uchida erkin qoladi, hatto boshqa devorga tegib tursa ham, toki siz uni qayta ruxsat bermaguningizcha.
- `WALLDISJOIN` ({{ui:Devorlar}} guruhidagi {{ui:Birlashtirishni taqiqlash}}) xuddi shunday, lekin bir bosish bilan: devorning bir uchiga yaqin joyini bosing, shu uchida birlashmalarni taqiqlash uchun, va yana bosing, ruxsat berish uchun.
- Eski chizmada hali saqlangan birlashmalar yoʻq. Siz qilgan birinchi oʻzgarish ularni bir marta topadi, oʻzgarishdan oldingi devorlar holatidan kelib chiqib, va saqlaydi. `WALLJOINS` buni darhol bajaradi.
- DWG va DXF fayllarda birlashmalar har bir devor ichida saqlanadi. CadCraft ularni saqlangandek qayta oʻqiydi. Kengaytirilgan maʼlumotlarni saqlamaydigan dastur devorlarni oddiy bloklar sifatida koʻrsatadi va birlashmalarni tashlab yuboradi; boshqa dasturda siljitilgan devorlarning birlashmasi siz ikkala devordan birortasini keyingi marta oʻzgartirganingizda tashlab yuboriladi.

## Burchakning birlashtirish uslubi

Ikki devor uchma-uch uchrashadigan burchak, boshqa uslubni tanlamasangiz, qiyshiq sifatida chiziladi.

- `WALLJOINSTYLE` ({{ui:Devorlar}} guruhidagi {{ui:Birlashtirish uslubi}}): burchakni bosing. Har bir bosish keyingi uslubga oʻtadi: {{ui:Qiyshiq}}, {{ui:Tekis}}, {{ui:Toʻgʻri kesish}}, soʻng yana {{ui:Qiyshiq}}. Oxirgi bosgan burchakda qaysi devor oʻtib ketishini almashtirish uchun `T` ni yozing. Tugatish uchun {{key:Enter}} ni bosing. Buyruqning bir ishlashi bitta ortga qaytarish qadami.
- {{ui:Tekis}}: bir devor ikkinchisining uzoq yuzigacha oʻtadi, boshqasi esa uning yon tomoniga tirkalib toʻxtaydi. {{ui:Toʻgʻri kesish}}: xuddi shunday, lekin oʻtib ketadigan devor oʻz oʻziga nisbatan toʻgʻri tugaydi. Toʻgʻri burchakda ikkalasi bir xil koʻrinadi.
- Devor Xossalarida: {{ui:Boshidagi birlashtirish uslubi}}, {{ui:Oxiridagi birlashtirish uslubi}}, va {{ui:Boshida oʻtadi}}, {{ui:Oxirida oʻtadi}}.
- Uslub ikkala devor bilan birga saqlanadi va DWG va DXF fayllarda saqlanib yuradi. Devor nusxasi uslubsiz boshlanadi.
- T birlashmasida tanlash uchun uslub yoʻq: tomoni tegib turgan devor oʻtib ketadi. Uchta yoki undan koʻp devor uchrashadigan burchak qiyshiq boʻlib qoladi. Shunday qiladi juda oʻtkir burchak (taxminan 30 gradusdan kichik) va bir chiziqdagi ikki devor ham.

## Devor shakllarini chizish

Har biri bitta ortga qaytarish qadamida burchaklari birlashgan devorlarni chizadi. `WALL` da `O` joylashuv siljishini belgilaydi (devor bosgan nuqtalaringizdan qancha chapga boradi), `D` esa keyin chizadigan devorlar uchun birlashtirishni oʻchiradi.

- `WALLRECT` (`WR`): ikki qarama-qarshi burchak, xuddi `RECTANG` kabi.
- `WALLROT`: birinchi tomon, soʻng ikkinchi tomon qanchaga chiqishi, istalgan burchakdagi toʻgʻri toʻrtburchak uchun.
- `WALLPOLY` (`WP`): tomonlar soni (3 dan 64 gacha), markaz, ichki chizilgan uchun `I` yoki tashqi chizilgan uchun `C`, soʻng radius, xuddi `POLYGON` kabi.
- `WALLARC` (`WARC`): markaz, boshlanish, tugash. `D` yoyni teskari tomonga buradi.
- `WALLTAN`: devor uchi yaqinini bosing, soʻng yoyning uchini, u oʻsha devor boʻylab chiqadi.
- `WALLPICK`: chiziq yoki polichiziqni bosing va unga ulangan chiziqlarni ham olish kerakligini ayting.
- `WALLTRACE`: yopiq chiziqlar va devorlar hududi ichini bosing, eng kichik hudud atrofiga devorlar qoʻyish uchun.

Reja devorlari toʻgʻri boʻlgani uchun yoy har biri 15 gradusli qisqa toʻgʻri devorlar bilan chiziladi. Ular xuddi har qanday burchakdagidek birlashadi.

## Devorlarni kesish

- `WALLSPLIT` (`WS`): devorni bosing, soʻng nuqtani. `C` boshqa devor kesib oʻtgan joyda kesadi, `G` qismlar orasida boshliq qoldiradi, `F` esa kesilgan uchlarni biriktirmasdan erkin qiladi. Birinchi qism chizmadagi devor oʻrnini saqlaydi, eshik va derazalar esa oʻz qismi bilan birga boradi. Eshik yoki deraza orqali kesish rad etiladi.
- `WALLSPLITGAP` ({{ui:Boshliq bilan boʻlish}}): xuddi shu boʻlish, lekin avval boshliqni soʻraydi.
- `WALLDELSEG`: devorni bosing, soʻng oʻchiriladigan boʻlakning ikki uchini.
- `WALLREJOIN`: bir devorning ikki qismini bosing, ularni yana bitta qilish uchun.

## Devorlarni masofa boʻyicha siljitish

- `WALLDIM`: bir devordan ikkinchisigacha boradigan chiziqli yoki parallel oʻlchamni bosing, soʻng yangi qiymatni yozing. Uzoq uchdagi devor oʻz holatiga nisbatan toʻgʻri siljiydi, birinchi uchdagi devor turadi, unga ulangan devorlar esa ergashadi.
- `WALLOFFSET` (`WO`): devorni bosing, soʻng uni koʻchiriladigan tomonni bosing (`D` masofani yozadi, `C` esa oʻrniga nusxa yaratadi).
- `WALLSTRETCH`: devor uchlari atrofida oyna, soʻng bazaviy nuqta va ikkinchi nuqta.
- Xossalarda yozilgan {{ui:Uzunlik}} boshlanishni saqlaydi va uzoq uchda ulangan devorni u bilan birga olib boradi, yangi {{ui:Qalinlik}} esa siz tanlagan {{ui:Joylashuv chizigʻi}} (chap yuz, oʻng yuz yoki markaz) tomon oʻsadi.

## Devorlarni qulflash

Qulf fayldagi devor bilan birga qoladi. Agar siz qulflangan devorni siljitsangiz, boshqasi unga ergashadi. Agar bitta oʻzgarish ikkala devorni turlicha siljitsa, bu rad etiladi va hech narsa oʻzgarmaydi.

- `WALLHOLD`: devorni boshqa devorga qulflash. `A` uni avval boshqa devor chizigʻiga suradi, `K` esa uning hozirgi masofasini saqlaydi.
- `WALLHOLDDIM`: ikki parallel devor orasidagi masofani qulflash.
- `WALLGRID`: devorni setka chizigʻiga qulflash (setka qatlamidagi chiziq, uning belgisi bir uchida matnda). Chiziq boʻylab yoki bir uchi unda boʻlgan holda qulflanadi. Chiziq boʻylab qulflangan devor undan hozirgi masofasini saqlaydi. `GRIDMOVE` bilan setka chizigʻini siljitsangiz, devor birlashgan devorlari bilan butunligicha ergashadi. Setka chizigʻi boʻylab yotgan devor qulfsiz ham u bilan butunligicha siljiydi, faqat chiziqqa tegib turgan devor esa oʻsha uchi bilan choʻziladi.
- `WALLHOLDS` qulflarni roʻyxatlaydi. `WALLUNHOLD` devordagi qulflarni olib tashlaydi.
- Har bir qulf rejada kichik qulf belgisi bilan koʻrinadi: qulflangan devor oʻrtasi yonida yoki setka chizigʻiga qulflangan uch yonida. Qulfni olib tashlash uchun qulf belgisini bosing.

## Hali bu yerda yoʻq narsalar

Qulflar devorlarning markaziy chiziqlaridan foydalanadi. Bu yerdagi devorlarning qatlamlari yoʻq, shuning uchun birikmada qatlam ustuvorligi yoʻq va devorlar egilmaydi (yuqoridagi yoylarga qarang). Bu asboblarni hech kim katta chizmada sinab koʻrmagan va ular boshqa CAD dasturida tekshirilmagan.
