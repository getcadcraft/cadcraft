---
title: Blok atributlari
summary: Blok havolasi olib yuradigan qiymatlarni koʻring va oʻzgartiring, masalan element raqami yoki ishlab chiqaruvchi, va nusxa saqlaganingizda ularni saqlab qoling.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, sarlavha bloki, joyida tahrirlash, atribut muharriri, attdef, atributni aniqlash, bedit, blok muharriri, bclose, atribut, atributlar, attrib, teg, element raqami, qiymat, koʻrinmas, doimiy, blok, xossalar, roʻyxat, jihoz tegi
from: 34d307c7
---

## Atributlar nima

Atribut blok havolasi bilan birga yuradigan nomlangan qiymat: jihoz tegining element raqami, xona tegining nomi, eshikning yongʻinga chidamliligi. Blokning taʼrifi qanday atributlari borligini aytadi (har birida **teg**, **soʻrov**, **standart** va matn uchun oʻrni, oʻlchami va burchagi bor). Har bir blok havolasi oʻz qiymatlarini olib yuradi.

Ba'zi atributlar **koʻrinmas**: ular maʼlumot saqlaydi, masalan ishlab chiqaruvchi yoki model raqami, lekin hech qachon chizilmaydi. Ba'zilari **doimiy**: har bir havola uchun bir xil, blok tomonidan belgilangan.

## Atributlar qayerdan keladi

- Ochgan DWG va DXF fayllaridagi bloklar atributlarini oʻz havola qiymatlari bilan saqlaydi.
- {{cmd:INSERT}} va {{ui:File}} variantidan kiritilgan bloklar oʻzinikini saqlaydi. [Fayldan yoki kutubxonadan kiritish](topic:insert-from-file-and-library) ga qarang.
- Kutubxona elementlari atributli bloklar sifatida keladi: koʻrinadigan element raqami va elementning koʻrinmas maʼlumotlari.
- Oʻzingiz yaratgan bloklar: avval {{cmd:ATTDEF}} bilan atributlarni aniqlang (quyida), soʻng blokni yasashda ularni boshqa obyektlar bilan birga tanlang.

## Oʻz bloklaringiz uchun atributlarni aniqlash

1. Blokning chiziqlarini chizing, masalan xona tegini.
2. {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}} ni tanlang, yoki `ATT` yozing va {{key:Enter}} bosing.
3. Tarixda rejimlar koʻrsatiladi (`Invisible=No Constant=No Preset=No`). Birini almashtirish uchun `I`, `C` yoki `P` yozing, toʻgʻri boʻlganda {{key:Enter}} bosing. Koʻrinmas qiymatlar saqlanadi, lekin chizilmaydi; doimiy qiymat har bir havolada bir xil; oldindan belgilangan qiymat blokni kiritganda soʻralmaydi.
4. Tegni yozing (masalan `ROOM_NO`: bosh harflar, boʻshliqsiz), soʻrovni (`Xona raqami`) va standart qiymatni (`101`).
5. Qiymat qayerga borishini bosing, balandlik va aylanishni bering. Teg chizmada koʻrinadi.
6. {{cmd:BLOCK}} bilan blokni yarating, chiziqlarni va atribut taʼriflarini birga tanlab. Oʻrnini egallagan havola standart qiymatlarni oladi; har bir yangi {{cmd:INSERT}} ularni soʻraydi.

Tanlangan atribut taʼrifi {{ui:Properties}} da {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} va rejimlarni koʻrsatadi.

## Blokni oʻzgartirish: blok muharriri

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) blokni alohida ochadi: uning nomini yozing (yoki avval havolani tanlang). Yuqoridagi panel qaysi blokni tahrirlayotganingizni koʻrsatadi. Obyektlarni odatdagi buyruqlar bilan chizing, oʻchiring va oʻzgartiring, atribut taʼriflarini qoʻshing yoki oʻzgartiring. Soʻng {{ui:Save block}} ni bosing (yoki {{cmd:BCLOSE}} va `S`): har bir havola oʻzgarishni koʻradi va bitta {{key:Mod+Z}} hammasini bekor qiladi. {{ui:Discard changes}} (`BCLOSE`, `D`) blokni avvalgi holatida qoldiradi.

Atribut taʼriflarini qoʻshsangiz, oʻchirsangiz yoki oʻzgartirsangiz, saqlash barcha havolalarni ham moslashtiradi: siz kiritgan qiymatlar saqlanadi, yangi atribut standart qiymat oladi, oʻchirilgani yoʻqoladi va har bir atribut taʼrif qoʻygan joyiga qaytadi. Tarixda necha havola yangilangani aytiladi.

## Sarlavha blokini oʻz joyida tahrirlash (REFEDIT)

Varaqdagi sarlavha bloki koʻpincha blok ichida joylashgan. Uning chiziqlarini yoki matnlarini varaqni tark etmasdan oʻzgartirish uchun:

1. Sarlavha blokini tanlang, soʻng {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} ni tanlang (yoki {{cmd:REFEDIT}} yozing).
2. Uning mazmuni oʻz joyida oddiy obyektlarga aylanadi; qolgan hammasi xiralashadi va oʻzgartirib boʻlmaydi.
3. Oʻzgartiring, oʻchiring yoki chizing: yangi obyektlar blokning bir qismiga aylanadi.
4. Yuqoridagi panelda {{ui:Save the block}} ni bosing (yoki {{cmd:REFCLOSE}} va `S`). Har bir havola oʻzgarishni koʻradi va bitta {{key:Mod+Z}} butun tahrirni bekor qiladi. {{ui:Discard}} blokni avvalgi holatida qoldiradi.

Bogʻlangan chizma, dinamik blok yoki boshqacha, yon tomonga va yuqoriga masshtablangan havola oʻz joyida tahrirlanmaydi: uning oʻrniga {{cmd:BEDIT}} dan foydalaning (yoki bogʻlangan chizmani oching).

:::note
Chizmani saqlashdan oldin blok muharririda saqlang yoki tashlab yuboring: muharrir ochiq paytda saqlangan fayl blokni oʻzgarishdan oldingi holatda saqlaydi.
:::

## Blokni joylashtirganda qiymatlarni toʻldirish

1. `I` yozing va {{key:Enter}} bosing, blok nomini yozing va {{key:Enter}} bosing.
2. Qayerga borishini bosing.
3. CadCraft har bir qiymatni soʻraydi, masalan `Element raqamini kiriting (ITEM) <>`. Qiymatni yozing va {{key:Enter}} bosing, yoki burchakli qavslardagi standart qiymatni saqlash uchun {{key:Enter}} bosing.

Blok oldindan belgilangan deb koʻrsatgan qiymatlar va doimiy qiymatlar soʻralmaydi. Ular standart qiymatini oladi.

## Qiymatlarni koʻrish va oʻzgartirish

1. Blok havolasini bosing.
2. Oʻng panelda {{ui:Attributes}} ostida har bir tegning oʻz qiymati bor. Koʻrinmaslari `yashirin` deb yoziladi.
3. Qiymatni bosing, yangisini yozing va {{key:Enter}} bosing.

Chizma yangi qiymatni darhol koʻrsatadi. Har bir oʻzgarish bitta qadam: {{key:Mod+Z}} uni bekor qiladi.

**Atribut muharriri.** Atributli havolani ikki marta bosing (yoki {{cmd:EATTEDIT}}): {{ui:Edit attributes}} dialogi har bir tegni soʻrovi va qiymati bilan koʻrsatadi. Yangi qiymatlar yozing; qatorni bosib shu atributning {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} va {{ui:Invisible}} qiymatlarini faqat shu havola uchun oʻzgartiring. {{ui:Apply}} dialogni ochiq qoldiradi; {{ui:OK}} qoʻllaydi va yopadi. Har bir {{ui:Apply}} yoki {{ui:OK}} bitta bekor qilish qadami.

**Buyruq qatorida** {{cmd:ATTEDIT}} har bir qiymatni navbatma-navbat soʻraydi: yangisini yozing, yoki oʻzgarishsiz qoldirish uchun {{key:Enter}} bosing.

## Atribut taʼriflarini oʻzgartirish (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) blokning atributlarini roʻyxatlaydi: tegni, soʻrovni yoki standartni oʻzgartiring, {{ui:Invisible}}, {{ui:Constant}} yoki {{ui:Preset}} ni belgilang va ularni yuqoriga yoki pastga suring (qiymatlar soʻraladigan tartib). {{ui:Update the references (values kept)}} belgilangan boʻlsa, {{ui:Apply}} har bir havolani ham moslashtiradi; nomi oʻzgartirilgan teg oʻz qiymatlarini saqlaydi. Har bir {{ui:Apply}} bitta bekor qilish qadami.

{{cmd:ATTSYNC}} havolalarni qoʻlda blok taʼriflariga moslashtiradi: `S` havolani tanlaydi, `N` blok nomini beradi, `A` har bir blokni bajaradi. Qiymatlar saqlanadi.

Kutubxona elementining oʻz maydonlari (uning ID, versiyasi, litsenziyasi va manbasi) koʻrsatiladi, lekin tahrirlanmaydi, shunda yangilanishni tekshirish ishlashda davom etadi. Uning element raqami va miqdori esa sizniki: ularni oʻzgartirishingiz mumkin.

## Ularni roʻyxatlash

Havolalarni tanlang va `LI` yozing ({{cmd:LIST}} uchun). Tarixda har bir atribut `TEG = qiymat` shaklida koʻrsatiladi, tegishli joyda `(koʻrinmas)` yoki `(doimiy)` bilan.

## Koʻchirish, burish va portlatish

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} va {{cmd:MIRROR}} qiymatlarni saqlaydi; matn blok bilan birga koʻchadi va oʻqilishicha qoladi.
- {{cmd:EXPLODE}} koʻrinadigan atributlarni qiymatlari bilan oddiy matnga aylantiradi. Koʻrinmaslari tashlab yuboriladi.

## Saqlash

Saqlangan DWG ham, saqlangan DXF ham har bir atributni saqlaydi: har bir blokning taʼriflarini (koʻrinmas, doimiy va oldindan belgilanganlarini ham) va har bir havolaning qiymatlarini. Boshqa CAD dasturlari ularni oddiy blok atributlari sifatida oʻqiydi.

DXF R12 da 255 belgidan uzun qiymat 255 gacha qisqartiriladi va tarixda shu aytiladi.

## Keng uchraydigan xatolar

- **Qiymat chizmada koʻrinmaydi.** U koʻrinmas yoki boʻsh. Koʻrinmas qiymatlar oʻng panelda hamon koʻrinadi.
- **Men yozgan qiymat buyruq qatoriga tushib qoldi.** Avval oʻng paneldagi qiymat katakchasini bosing.
