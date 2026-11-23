---
title: 2D devorlar uchun devor shakllari, kesishlar, siljishlar va qulflar
summary: Devorlarni toʻrtburchak, koʻpburchak va yoy sifatida chizing, ularni boʻling va qayta birlashtiring, oʻlcham boʻyicha siljiting, bitta devorni boshqasiga yoki setka chizigʻiga qulflang. BimCraft dagi devor asboblari bilan bir xil.
keywords: devor, devorlar asboblari, devor tugmalari, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, birlashtirish uslubi, qiyshiq, tekis, toʻgʻri kesish, qulf, tutqich, uchini sudrash, burish, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, birlashtirish, birlashtirishni taqiqlash, qulf, setka chizigʻi, boʻlish, boʻshliq, siljitish, joylashuv chizigʻi
from: 49044181
---

Bu asboblar `WALL` dan yaratilgan 2D devorlar ustida ishlaydi (qarang: “2D da aqlli devorlar, eshiklar va derazalarni chizish”). Ular BimCraft dagi devor asboblari bilan bir xil qoidalardan foydalanadi, shuning uchun devor ikkala dasturda bir xil ishlaydi.

## Asboblar qayerda

- Asboblar panelida {{ui:Devorlar}} guruhida {{ui:Devor}}, {{ui:Toʻrtburchak}}, {{ui:Boʻlish}} va {{ui:Parallel koʻchirish}} bor. Uning {{ui:Koʻproq}} menyusida boshqa barcha devor asboblari, har birining belgisi bilan.
- Lenta menyu uslublarida {{ui:Devorlar}} yorligʻida {{ui:Devorlarni chizish}}, {{ui:Kesish}}, {{ui:Belgilash va oʻzgartirish}}, {{ui:Ushlab turish}} va {{ui:Birlashtirish}} panellari bor.
- Maketda asboblar qatorlari va asboblar qutisi xuddi shu {{ui:Devorlar}} guruhini koʻrsatadi.
- Quyida nomlangan istalgan buyruqni ham yozishingiz mumkin.

## Birikmalar saqlanadi

Devor uchi boshqa devorga tushganda, CadCraft bu birikmani ikkala devor bilan birga saqlaydi. Uchlar qayerda turgani boʻyicha birikmalarni qayta hisoblamaydi. Shuning uchun:

- Siz koʻchirgan devorga ulangan devorlar unga ergashadi va ulangan qoladi. Ularning uchlari oʻz chiziqlari boʻylab suriladi, shuning uchun hech narsa burilmaydi.
- Devorning bir uchini tutqichi bilan sudrasangiz, u yerda ulangan devor ham oʻz yoʻnalishini saqlaydi. Uning uchi oʻz chizigʻi boʻylab siljib, sudralayotgan devorga yetadi, shuning uchun sudralayotgan uch har doim kursor ostida emas, shu chiziqqa tushadi. Oldindan koʻrish qayerga tushishini koʻrsatadi. Sudralayotgan devorga urilib turgan devor oʻz chizigʻi boʻylab ergashadi. Uchni devor boʻylab toʻgʻri sudrasangiz, uning uzunligi oʻzgaradi va u yerda ulangan devor u bilan birga harakatlanadi.
- `ROTATE` ulangan devorda ham xuddi shunday ishlaydi: qoʻshni devorlarning uchlari oʻz chiziqlari boʻylab burilgan devorga suriladi.
- Burchakni koʻchirish uchun u yerda uchrashgan ikki devorni tanlang va burchakdagi tutqichni sudrang. Ikkala devor ham burchakda qoladi va ikkalasi ham buriladi. Undan narigi devorlar oʻz holatida qoladi.
- Birikmalarni ataylab uzish uchun tutqichning yangi joyini bosganingizda {{key:Alt}} ni bosib turing: devor qoʻyilgan joyga boradi va hech narsa ergashmaydi.
- Sudrash ulangan devorni oʻz uzoq uchi orqali burib yuborsa, u rad etiladi va hech narsa oʻzgarmaydi.
- {{ui:Birlashtirishni taqiqlash}} ({{cmd:WALL}} da `D`) bilan chizgan yoki Xossalarda ({{ui:Boshida birlashtirishga ruxsat bermaslik}}, {{ui:Oxirida birlashtirishga ruxsat bermaslik}}) oʻchirgan devor oʻsha uchda erkin qoladi, boshqa devorga tegsa ham, ruxsat berilmaguncha.
- `WALLDISJOIN` ({{ui:Birlashtirishni taqiqlash}}, {{ui:Devorlar}} guruhida) xuddi shunday, bosish bilan: uchiga yaqin devorni bosing, shu uchda birlashtirishni taqiqlash uchun; yana bossangiz, ruxsat beriladi.
- Eski chizmada hali saqlangan birikmalar yoʻq. Siz qilgan birinchi oʻzgartirish ularni bir marta topadi — oʻzgartirishdan oldingi devorlarning holatidan — va saqlaydi. `WALLJOINS` buni darhol bajaradi.
- DWG va DXF fayllarda birikmalar har bir devor ichida saqlanadi. CadCraft ularni saqlanganidek qayta oʻqiydi. Kengaytirilgan maʼlumotlarsiz dastur devorlarni oddiy blok sifatida koʻrsatadi va birikmalarni tashlab yuboradi; boshqa dasturda koʻchirilgan devorlarning birikmasi esa ikkala devordan birini keyingi oʻzgartirganda tashlab yuboriladi.

## Burchakning birikish uslubi

Ikki devor uchma-uch uchrashgan burchak, boshqa uslubni tanlamasangiz, qiyshiq sifatida chiziladi.

- `WALLJOINSTYLE` ({{ui:Birlashtirish uslubi}}, {{ui:Devorlar}} guruhida): burchakni bosing. Har bir bosish keyingi uslubga oʻtadi: {{ui:Qiyshiq}}, {{ui:Tekis}}, {{ui:Toʻgʻri kesish}}, soʻng yana {{ui:Qiyshiq}}. `T` yozsangiz, oxirgi bosgan burchakda ikki devordan qaysi biri oʻtishini almashtiradi. Tugatish uchun {{key:Enter}} ni bosing. Buyruqning bir marta bajarilishi bitta ortga qaytarish qadami.
- {{ui:Tekis}}: bir devor boshqasining uzoq yuziga qadar oʻtadi, boshqasi esa uning yon tomoniga tiralib toʻxtaydi. {{ui:Toʻgʻri kesish}}: xuddi shunday, lekin oʻtadigan devor oʻzi bilan burchak hosil qilib tugaydi. Toʻgʻri burchakda ikkalasi bir xil koʻrinadi.
- Devor Xossalarida: {{ui:Boshidagi birlashtirish uslubi}}, {{ui:Oxiridagi birlashtirish uslubi}}, va {{ui:Boshida oʻtadi}}, {{ui:Oxirida oʻtadi}}.
- Uslub ikkala devor bilan saqlanadi va DWG va DXF fayllarida koʻchadi. Devorning nusxasi uslubsiz boshlanadi.
- T birikmasida tanlanadigan uslub yoʻq: qaysi devorning tomoni tegsa, oʻsha oʻtadi. Uchdan ortiq devor uchrashgan burchak qiyshiq boʻlib qoladi. Juda oʻtkir burchak (taxminan 30 gradusdan kichik) va bir chiziqdagi ikki devor ham shunday.

## Devor shakllarini chizish

Har biri devorlarni bitta ortga qaytarish qadamida yaratadi, burchaklari ulangan holda. `WALL` da `O` joylashuv siljishini belgilaydi (devor bosgan nuqtalaringizdan qanchalik chapga boradi), `D` esa keyingi chizadigan devorlaringiz uchun birikishni oʻchiradi.

- `WALLRECT` (`WR`): ikki qarama-qarshi burchak, xuddi `RECTANG` kabi.
- `WALLROT`: birinchi tomon, soʻng ikkinchi tomon qancha uzoqqa boradi; istalgan burchakdagi toʻrtburchak uchun.
- `WALLPOLY` (`WP`): tomonlar soni (3 dan 64 gacha), markaz, `I` ichki chizilgan uchun yoki `C` tashqi chizilgan uchun, soʻng radius, xuddi `POLYGON` kabi: bosing yoki yozing (yozilgan radius kursor tomon, yoki kursor hali markazda boʻlsa X boʻylab ketadi).
- `WALLARC` (`WARC`): markaz, boshlanish, oxir. `D` yoyni teskari tomonga buradi.
- `WALLTAN`: devor uchiga yaqin bosing, soʻng yoyning oxiri; yoy oʻsha devor boʻylab chiqadi.
- `WALLPICK`: chiziq yoki polichiziqni bosing va unga ulangan chiziqlarni ham olishni aytasiz.
- `WALLTRACE`: yopiq chiziq va devorlar sohasi ichiga bosing, eng kichigi atrofida devorlar qoʻyish uchun.

Reja devorlari toʻgʻri boʻlgani uchun yoy 15 gradusli qisqa toʻgʻri devorlar sifatida chiziladi. Ular xuddi har qanday burchakdagidek birlashadi.

## Devorlarni kesish

- `WALLSPLIT` (`WS`): devorni bosing, soʻng nuqtani. `C` boshqa devor kesib oʻtgan joyda kesadi, `G` qismlar orasida boʻshliq qoldiradi, `F` kesilgan uchlarni birlashtirmasdan erkin qiladi. Birinchi qism devorning chizmadagi oʻrnini saqlaydi, eshik va deraza oʻz qismi bilan birga boradi. Eshik yoki deraza orqali kesish rad etiladi.
- `WALLSPLITGAP` ({{ui:Boʻshliq bilan boʻlish}}): xuddi shu boʻlish, lekin avval boʻshliqni soʻraydi.
- `WALLDELSEG`: devorni bosing, soʻng oʻchiriladigan boʻlakning ikki uchini.
- `WALLREJOIN`: bir devorning ikki qismini bosing, ularni yana bitta qilish uchun.

## Devorlarni masofa boʻyicha siljitish

- `WALLDIM` ({{ui:Oʻlcham boʻyicha tahrirlash}}): bir devordan boshqasigacha boradigan chiziqli yoki tekislangan oʻlchamni bosing, soʻng yangi qiymatni yozing. Uzoq uchdagi devor oʻzi bilan tik koʻchadi, birinchi uchdagi devor turadi va unga ulangan devorlar ergashadi. Oʻlchamning uzoq nuqtasi devori bilan birga harakatlanadi, shuning uchun oʻlcham yozgan qiymatingizni koʻrsatadi.
- `WALLOFFSET` (`WO`): devorni bosing, soʻng uni qaysi tomonga koʻchirish kerak (`D` masofani yozadi, `C` buning oʻrniga nusxa yaratadi).
- `WALLSTRETCH`: devor uchlari atrofida oyna, soʻng asosiy nuqta va ikkinchi nuqta.
- Xossalarda yozilgan {{ui:Uzunlik}} boshlanishni saqlaydi va uzoq uchdagi ulangan devorni u bilan birga oladi; yangi {{ui:Qalinlik}} siz tanlagan {{ui:Joylashuv chizigʻi}} (chap yuz, oʻng yuz yoki markaz) dan oʻsadi.

## Devor markaz chiziqlari orasida oʻlchash

Devorning markaz chizigʻi chizilmaydi, lekin obyektga ilashish uni topadi. Obyektga ilashish yoqilgan boʻlsa ({{key:F3}}), kursorni devor qalinligining oʻrtasiga olib boring: belgi `Wall center: endpoint` yoki `Wall center: midpoint` deb yozadi va belgi ustida turganda markaz chizigʻi punktir chiziq boʻlib koʻrinadi. Obyektga ilashish roʻyxatida {{ui:Perpendikulyar}} yoki {{ui:Eng yaqin}} yoqilgan boʻlsa, ular markaz chizigʻida ham ishlaydi.

1. `DIMLINEAR` (yoki `DIMALIGNED`) ni boshlang.
2. Belgi `Wall center: midpoint` yoki `Wall center: endpoint` koʻrsatgan joyda birinchi devorni bosing.
3. Ikkinchi devorni xuddi shunday bosing, soʻng oʻlcham chizigʻi qayerga borishini bosing.
4. Masofani oʻzgartirish uchun `WALLDIM` ni boshlang, oʻlchamni bosing va yangi qiymatni yozing. Ikkinchi devor harakatlanadi.

Markaz chizigʻiga ilashish nuqta soʻraydigan har bir buyruqda ishlaydi.

## Devorlarni qulflash

Qulf faylda devor bilan birga qoladi. Qulflangan devorlardan birini koʻchirsangiz, boshqasi ergashadi. Agar bitta oʻzgartirish ikkala devorni turlicha siljitsa, u rad etiladi va hech narsa oʻzgarmaydi.

- `WALLHOLD`: devorni boshqa devorga qulflash. `A` avval uni boshqa devor chizigʻiga koʻchiradi, `K` esa u hozir boʻlgan masofani saqlaydi.
- `WALLHOLDDIM`: ikki parallel devor orasidagi masofani qulflash.
- `WALLGRID`: devorni setka chizigʻiga qulflash (setka qatlamidagi chiziq, uning tegi bir uchida matnda), yo chiziq boʻylab, yoki bir uchi unda. Chiziq boʻylab qulflangan devor chiziqdan oʻzining hozirgi masofasini saqlaydi. Setka chizigʻini `GRIDMOVE` bilan koʻchiring va devor ulangan devorlari bilan butunlay ergashadi.
- `WALLHOLDS` qulflarni roʻyxatlaydi. `WALLUNHOLD` devordagi qulflarni olib tashlaydi.
- Har bir qulf planda kichik qulf belgisi bilan koʻrinadi: qulflangan devor oʻrtasi yonida, yoki setka chizigʻiga qulflangan uch yonida. Qulfni olib tashlash uchun qulf belgisini bosing.

## Hali nima yoʻq

Qulflar devorlarning markaz chiziqlaridan foydalanadi. Bu yerdagi devorlarda qatlamlar yoʻq, shuning uchun birikma nuqtasida qatlam ustuvorligi yoʻq, va devorlar egilmaydi (yuqoridagi yoylarga qarang). Bu asboblarni katta chizmada hech kim sinab koʻrmagan va boshqa CAD dasturida tekshirilmagan.
