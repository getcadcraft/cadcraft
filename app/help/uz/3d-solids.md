---
title: 3D da model
summary: Chizmani 3D tabda koʻring va undan oddiy jismlar yarating: ekstruziya qiling (konuslik bilan yoki yoʻl boʻylab), aylantiring, yuzlarni itaring va tortib chiqaring, quti, silindr va ponalar yarating; ularni birlashtiring, ayirib tashlang va kesishtiring, keyin koʻchiring, nusxalang, aylantiring va oʻchiring, hamda ularning tekis 2D koʻrinishlarini varaqqa joylashtiring.
keywords: 3d, uch oʻlchamli, jism, jismlar, 3dsolid, region, body, acis, sat, sab, boshqa dasturlardagi jismlar, 3D chizmani ochish, ekstruziya, ext, aylantirish, rev, sweep, konuslik, yoʻl, presspull, itarish tortish, quti, silindr, cyl, pona, 3dorbit, orbit, koʻrinish, vscurrent, vizual uslub, soyalangan, yashirin chiziq, karkas, rentgen, xray, iso, perspektiva, parallel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, koʻrinish kubi, union, uni, subtract, su, intersect, in, boolean, birlashtirish, jismlarni birlashtirish, viewbase, flatshot, tekis koʻrinish, 2d koʻrinish, chizma koʻrinishi, old koʻrinish, yuqori koʻrinish, yon koʻrinish, yashirin chiziqlar
from: 13060e71
---

## Nima yasaysiz

1000 × 600 xona asosini 400 balandlikdagi blokka ekstruziya qilamiz, bir yuzni koʻtaramiz va yonida silindr yasaymiz — soʻng model chizma bilan birga saqlanadi va 3D koʻruvchi yoki printer uchun eksport qilinadi.

{{ui:3D}} yorligʻi {{ui:Model}} yorligʻining yonida, chizma ostida joylashgan. U model fazosidagi chizmani yer ustida, qatlam ranglarida, shuningdek siz yaratgan jismlarni koʻrsatadi (oʻchiq yoki muzlatilgan qatlamlar yashirin qoladi). Birinchi marta ochilganda 3D koʻrinish yuklanadi; keyin u darhol almashadi.

## Shaklni ekstruziya qilish

1. {{ui:Model}} yorligʻida `REC` yozing va {{key:Enter}} bosing. `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}} yozing.
2. {{ui:3D}} yorligʻini bosing. Asboblar panelida chizma guruhlari oʻrniga {{ui:3D}} guruhi chiqadi.
3. {{ui:Extrude}} ni bosing (yoki {{cmd:EXTRUDE}}, `EXT` yozing). Toʻrtburchak ichini bosing, soʻng {{key:Enter}} bosing.
4. `400` yozing va {{key:Enter}} bosing. Tarixda „1 ta jism ekstruziya qilindi, balandligi 400” va uning hajmi chiqadi.

Yopiq polichiziqlar (yoylar bilan birga), toʻrtburchaklar, koʻpburchaklar, aylanalar va ellipslar ekstruziya qilinadi; chiziqlar va ochiq polichiziqlar qilinmaydi, buning sababi tarixda koʻrsatiladi. Shuningdek, avval {{ui:Model}} yorligʻida shakllarni tanlab, soʻng oʻsha yerda {{cmd:EXTRUDE}} yozishingiz mumkin. Balandlikni yozish oʻrniga uni bosib ham berishingiz mumkin: kontur kursor bilan yuqoriga va pastga harakatlanadi. Manfiy balandlik pastga yoʻnaltiriladi. Ekstruziyadan keyin 2D shakllarni oʻchirish uchun balandlik soʻrovida `D` yozing (`D` yana bossangiz ular saqlanib qoladi).

Balandlik soʻrovida `T` [Konuslik burchagi (T)] gradusda burchak soʻraydi: yon tomonlari shu burchakka egiladi, shuning uchun yuqori qismi kichrayadi (manfiy burchak uni kattalashtiradi); shakl uchun juda tik burchak rad etiladi. `P` [Yoʻl boʻylab surish (P)] shakllarni oʻrniga yoʻl boʻylab suradi (quyida).

## Aylantirish va surish

- {{cmd:REVOLVE}} (`REV`, yoki {{ui:More}} › {{ui:Revolve about an axis}}): yopiq shakllarni tanlang, {{key:Enter}} bosing, soʻng oʻq uchlarining ikki nuqtasini bosing (yoki chizma oʻqi uchun `X` yoki `Y` yozing, bu 0,0 orqali oʻtadi), keyin burchakni yozing yoki toʻliq aylanish uchun {{key:Enter}} bosing. Shakl oʻq atrofida aylanadi va yer ustidan koʻtariladi: chiziq yonida vazaning yarim konturini chizing va uni shu chiziq atrofida aylantiring. Shakl oʻqqa tegishi mumkin, lekin uni kesib oʻtmasligi kerak. Toʻliq aylanish 48 ta qadamdan iborat.
- {{cmd:SWEEP}} (yoki {{ui:More}} › {{ui:Sweep along a path}}, yoki {{cmd:EXTRUDE}} balandlik soʻrovida `P`): yopiq shakllarni (profil) tanlang, {{key:Enter}} bosing, soʻng yoʻlni bosing: chiziq, polichiziq, yoy, aylana yoki ellips. Profil yoʻl boʻylab koʻndalang turadi, oʻrtasi yoʻlda boʻladi va unga boʻylab choʻziladi; burchaklar qiyshiq kesiladi, yopiq yoʻl halqa hosil qiladi. Xona konturi boʻylab kichik toʻrtburchakni surish plintus hosil qiladi; polichiziq boʻylab aylanani surish quvur hosil qiladi.

## Yuzni itarish va tortish

1. {{ui:Press/pull}} ni bosing (yoki {{cmd:PRESSPULL}} yozing).
2. Blokning yuqori yuzini bosing.
3. `100` yozing va {{key:Enter}} bosing, yoki kursorni siljitib bosing. Blok 500 balandlikda boʻladi.

## Quti, silindr va ponalar

- {{cmd:BOX}}: ikki burchakni bosing yoki yozing, soʻng balandlik.
- {{cmd:CYLINDER}} (`CYL`): markaz, radius, soʻng balandlik. Silindrlar va ekstruziya qilingan aylanalar 48 ta tomonga ega, silliq soyalangan.
- {{cmd:WEDGE}} (`WE`): ikki burchak va balandlik. Birinchi burchakda toʻliq balandlik boʻladi, boshqa burchakka tomon esa nolgacha pasayadi.

3D yorligʻida bosish kursor ostidagi yuz yoki qirraga tushadi, aks holda yerga tushadi, shuning uchun quti boshqa jism ustida turishi mumkin.

## Jismlarni koʻchirish, nusxalash, aylantirish va oʻchirish

3D yorligʻida bosish jismni tanlaydi; oyna uchun chapdan oʻngga, kesishuv uchun oʻngdan chapga suring. Soʻng:

- {{cmd:MOVE}}: asos nuqtasini va u borishi kerak boʻlgan joyni bosing, yoki X, Y va Z boʻylab masofa uchun `<100,0,0>` (yoki `@100,0`) yozing.
- {{cmd:COPY}}: xuddi shunday, asl nusxa joyida qoladi.
- {{cmd:ROTATE}}: burchakni yozing (u tanlovning oʻrtasi atrofida, Z boʻylab aylanadi), yoki markazni, boshlangʻich nuqtani va burchakni bosing.
- {{cmd:ERASE}} yoki {{key:Delete}}.

## Jismlarni birlashtirish, ayirish va kesishtirish

3D asboblar panelidagi {{ui:More}} ni oching yoki buyruqni yozing:

- {{cmd:UNION}} (`UNI`): jismlarni tanlang, {{key:Enter}} bosing: ular bitta jismga aylanadi.
- {{cmd:SUBTRACT}} (`SU`): saqlanadigan jismlarni tanlang va {{key:Enter}} bosing, soʻng olib tashlanadiganlarni tanlang va {{key:Enter}} bosing. Blok orqali teshik: uning ichidan silindr chizing, soʻng silindrni ayiring.
- {{cmd:INTERSECT}} (`IN`): jismlarni tanlang, {{key:Enter}} bosing: ularning hammasida umumiy boʻlgan qism qoladi.

Tarixda natijaning hajmi koʻrsatiladi. Har biri bitta bekor qilish qadami. Birinchi ishga tushirganingizda 3D boolean dvigateli yuklanadi (taxminan 0,5 MB; u {{ui:Save for offline}} ga kiradi). Faqat yopiq jismlarni birlashtirish mumkin: ochiq qirrali jism (boshqa dasturning erkin 3D yuzlaridan) sababi bilan rad etiladi. Natija bitta jism; egri yuzlar silindrdagi kabi yassi qirralardan iborat boʻlib qoladi.

Jismni ikki marta bosing, uning yuzlari va qirralarini alohida tahrirlash mumkin; {{key:Esc}} uni yopadi. Har bir 3D oʻzgarish chizma bilan bir tarixdagi bitta bekor qilish qadami: {{key:Mod+Z}} ikkala yorliqda ham oxirgi qilgan ishingizni bekor qiladi.

## Varaqdagi tekis koʻrinishlar

1. Varaq yorligʻini oching (yoki {{ui:Model}} da qoling), soʻng {{cmd:VIEWBASE}} (yoki `FLATSHOT`) yozing.
2. Koʻrinishni tanlang: old uchun {{key:Enter}}, yoki `T` (yuqori), `R` (oʻng), `L` (chap), `BA` (orqa), `BO` (past), `I` (izometrik).
3. {{key:Enter}} yashirin chiziqlarni punktir shaklda koʻrsatadi; `H` ularni chiqarib tashlaydi.
4. {{key:Enter}} CadCraft taklif qilgan masshtabni oladi: varaqda bu koʻrinish qogʻozning yarmidan kichik boʻlib sigʻadigan eng katta standart masshtab (masalan, 1:20). Yoki oʻzingiz yozing: `1:50`, `2:1`.
5. Koʻrinish markazi boradigan joyni bosing yoki yozing.

Koʻrinish bitta blok havolasi: `VIEW-FRONT-1` va hokazo. Koʻrinadigan qirralar VIEW-VISIBLE qatlamida (0,5 mm), yashirinlari VIEW-HIDDEN da (punktir, 0,25 mm). Uni koʻchiring, oʻlchamini qoʻying va xuddi boshqa chizma kabi chop eting. U yaratilgan paytdagi jismlarning tasviri: ularni oʻzgartirgandan keyin koʻrinishni oʻchiring va {{cmd:VIEWBASE}} ni qayta ishga tushiring. Yana koʻrinishlar uchun har biriga bir marta ishga tushiring.

## Atrofga qarash

Gʻildirakcha bilan sudrab aylantiring, {{key:Shift}} + gʻildirakcha sudrash yoki oʻng tugma bilan surish, gʻildirakchani aylantirib kursor ostida kattalashtiring. Sensorli panelda ikki barmoq aylantiradi, chimdish kattalashtiradi. Sudramasdan oʻng tugmani bosish boshqa yorliqlardagi kabi {{key:Enter}} hisoblanadi. `3DORBIT` chap tugma bilan {{key:Enter}} yoki {{key:Esc}} bosguncha aylantirishga imkon beradi.

- {{ui:Views}} (yoki {{cmd:VIEW}}): Izometrik, Yuqori, Pastki, Old, Orqa, Chap, Oʻng, Perspektiva yoki Parallel, hamda Hammasini koʻrsatish.
- {{ui:Style}} (yoki {{cmd:VSCURRENT}}, `VS`): Soyalangan, Qirralari bilan soyalangan, Yashirin chiziq, Karkas yoki Rentgen.

Siz bosgan nuqtalar jismlarga (burchaklar, qirralar, yuzlar) va yerdagi 2D chizmaga tutiladi: uning chiziq va yoylarining uchlari va oʻrtalari hamda ular boʻylab nuqtalarga. 2D chiziqlar 3D yorligʻida hech qachon tanlanmaydi. Buyruq 2D obyektlarni soʻraganda (EXTRUDE, REVOLVE, SWEEP), bosish bitta obyektni tanlaydi, chapdan oʻngga sudrash oyna ichida toʻliq joylashganlarni, oʻngdan chapga sudrash esa kesib oʻtganlarni oladi, {{ui:Model}} yorligʻidagi kabi.

3D yorligʻining yuqori oʻng burchagida koʻrinish kubi turadi: undan qarash uchun yuzi, qirrasi yoki burchagini bosing, aylantirish uchun uni sudrang; uy tugmasi izometrik koʻrinishga qaytaradi. Bu {{ui:Automatic}} boʻlib, [CadCraft sozlamalari](topic:settings) ichidagi {{ui:Corner indicator}} ning boshlanishi. {{ui:View cube}} ga oʻrnatilsa, {{ui:Model}} yorligʻida ham kub koʻrinadi va yuqoridan qaraydi; boshqa tomonni bosish 3D yorligʻini oʻsha tomondan ochadi. {{ui:Axis icon}} ga oʻrnatilsa, ikkala yorliq ham oʻq belgisini koʻrsatadi.

## Boshqa dasturlardan kelgan jismlar

Boshqa dasturning chizmasida 3D jismlar, regionlar va bodylar boʻlishi mumkin (3DSOLID, REGION, BODY: boshqa dastur ularning shaklini ACIS maʼlumoti sifatida saqlaydi). CadCraft model fazosidagilarni birinchi marta yorliqni ochganda 3D yorligʻida koʻrsatadi, ular oʻz qatlami rangida va oʻz qirralari bilan; buyruq qatorida keyin nechta chizilgani aytiladi.

- Ular qanday boʻlsa shunday koʻrinadi: tanlab, koʻchirib yoki oʻzgartirib boʻlmaydi. Oʻchiq yoki muzlatilgan qatlamlar ularni yashiradi.
- DWG sifatida saqlash har birini oʻzgarishsiz qaytadan yozadi, har qanday DWG versiyasida, shunda boshqa dastur ularni yana oladi. DXF fayllar ularni saqlamaydi: CadCraft ularni faqat DWG ga yozadi va DXF sifatida saqlashda buni aytadi.
- Chiziladi: yassi yuzlar, silindr, konus, sfera, tor va oddiy spline sirtlardagi yuzlar, toʻgʻri, dumaloq va spline qirralar bilan. Boshqa turdagi sirtdagi yuz yoki CadCraft joylashtira olmaydigan yuz taxmin qilinmaydi: u chiqarib tashlanadi va roʻyxatga kiradi, masalan: „Hali chizilmagan (3D jismlar): 2 ta yuz spline-surface (sweepsur) da, sirt hali chizilmagan.”
- Bloklar ichidagi jismlar hali koʻrsatilmaydi; „Bu fayl haqida” ularni sanaydi.

Egri yuzlar taxminan 7,5° oraliqda kichik tekis boʻlaklar sifatida chiziladi, shuning uchun egri jism yaqindan qaraganda biroz qirrador koʻrinadi.

## Saqlash va eksport

Saqlash 3D modelni DWG va DXF da saqlaydi. Har bir yuz `CC-3D` qatlamidagi 3D yuz sifatida yoziladi, shunda boshqa dasturlar jismlarni koʻrsatadi; CadCraft esa faylda oʻzining aniq nusxasini saqlaydi va chizmani qayta ochganda uni oʻqiydi, 3D koʻrinish oʻz holicha (kamera, proyeksiya va vizual uslub) bilan. Boshqa dasturlar yaratgan 3D yuzlar 3D yorligʻida erkin yuzlar sifatida, bitta guruh boʻlib keladi. Blok ichidagi 3D yuz modeldagi har bir havola uchun bir marta keladi, havola qanday joylashgan va aylantirilgan boʻlsa, shunday. Blokning oʻzida va varaqda 3D yuz oʻz konturi bilan yassi chiziladi.

{{ui:Export}} 3D guruhida faqat jismlarni yuklab oladi: koʻruvchilar va veb uchun GLB ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) yoki 3D chop etish uchun STL, millimetrda ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} qaysi biri kerakligini soʻraydi.

:::note
3D model haqiqiy oʻlchamda. Oʻlchov birligi boʻlmagan chizma millimetr hisoblanadi, shuning uchun `1000` bu bir metr. Agar keyinroq chizma birliklarini oʻzgartirsangiz (Xossalar, hech narsa tanlanmagan holda), jismlar ular bilan birga masshtablanadi va shu tarixda aytiladi. Bitta {{key:Mod+Z}} birliklarni oʻzgartirish va masshtablashni birga bekor qiladi.
:::
