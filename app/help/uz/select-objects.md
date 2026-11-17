---
title: Obyektlarni tanlash
summary: Obyektlarni birma-bir, oyna yoki kesishma bilan, buyruqdan oldin yoki buyruq davomida tanlang va tanlovdan obyektlarni olib tashlang.
keywords: tanlash, tanlov, oyna, kesishma, noun-verb, verb-noun, hammasi, oxirgi, oldingi, toʻsiq, olib tashlash, qoʻshish, tab, aylanib chiqish, ustma-ust, qselect, tezkor tanlash, filtr, oʻxshashini tanlash, selectsimilar, shift, tanlovni bekor qilish, ctrl+a, pickfirst
from: 676508c7
---

## Nimalarni oʻrganasiz

Buyruq ishlaydigan obyektlarni qanday tanlash. CadCraft da ikki usul bor, va ikkalasi ham yaxshi:

- **Avval tanlang, soʻng buyruq** (noun-verb). Obyektlarni tanlang, soʻng `M` (Move) ni kiriting. Buyruq tanlovingizni oladi va darhol keyingi savoliga oʻtadi.
- **Avval buyruq, soʻng tanlang** (verb-noun). `M` ni kiriting; buyruq `Obyektlarni tanlang:` deb soʻraydi; tanlang va {{key:Enter}} ni bosing.

## Bittadan obyekt tanlash

1. Hech qanday buyruq ishlamayotganda chiziqni bosing. U ajratib koʻrsatiladi va uning tutqichlari (kichik kvadratlar) paydo boʻladi. Oʻng panel uning xususiyatlarini koʻrsatadi.
2. Boshqa obyektni bosing. U tanlovga qoʻshiladi.
3. {{key:Shift}} ni ushlab, tanlangan obyektni bosing. U tanlovdan chiqariladi.
4. {{key:Esc}} ni bosing. Hech narsa tanlanmaydi.

## Oyna va kesishma

Boʻsh joyni bir marta bosing, harakatlaning va yana bosing: toʻrtburchak. Bosib torting, qoʻl erkin lasso chizadi, xuddi shu ikki tur bilan (qarang: [Lasso tanlash](topic:lasso-selection); Sozlamalar sudrashni toʻrtburchak chizishga oʻzgartirishi mumkin). Qaysi obyektlarni olishingiz yoʻnalishga bogʻliq:

| Siz harakatlantirasiz | Quti turi | Tanlaydi |
|---|---|---|
| Chapdan oʻngga | [Oyna (W)] | Faqat qutining **toʻliq ichidagi** obyektlar |
| Oʻngdan chapga | [Kesishma (C)] | Qutining ichidagi obyektlar **va** u tegadigan obyektlar |

1. Bir-biriga kesishadigan bir nechta chiziq va aylana chizing.
2. Baʼzi obyektlarning chap tomonidagi boʻsh joyni bosing, oʻngga harakatlaning va yana bosing. Faqat toʻliq ichidagi obyektlar tanlanadi.
3. {{key:Esc}} ni bosing.
4. Oʻng tomondagi boʻsh joyni bosing, chapga baʼzi obyektlar boʻylab harakatlaning va yana bosing. Quti tegadigan hamma narsa tanlanadi.
5. {{key:Shift}} ni ushlab, tanlangan baʼzi obyektlar ustida quti yoki lasso torting. Ular tanlovdan chiqadi.

## Tanlang, soʻng buyruqni bajaring

1. Ikki aylanani tanlang.
2. `M` ni kiriting va {{key:Enter}} ni bosing.

Tarix `2 ta topildi` deydi va soʻrov toʻgʻridan-toʻgʻri `Asosiy nuqtani koʻrsating` ga oʻtadi. Koʻchirishni tugating (qarang: [Koʻchirish, nusxalash, aylantirish, masshtablash va aks ettirish](topic:modify-objects)).

Buyruq tugaganda tanlov tozalanadi, shuning uchun keyingi buyruq yangidan boshlanadi.

Bu usulda tanlovni qabul qiladigan buyruqlar: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} va {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} va {{cmd:CHAMFER}} har doim obyektlarni bittadan tanlashni soʻraydi; {{cmd:TRIM}} va {{cmd:EXTEND}} bosish yoki boʻlaklar orqali sudrab oʻtadigan yoʻlni qabul qiladi (qarang: [Kesish va uzaytirish](topic:trim-and-extend)).

## Buyruqni ishga tushiring, soʻng tanlang

1. Hech narsa tanlanmaganiga ishonch hosil qiling ({{key:Esc}}).
2. `E` ni kiriting va {{key:Enter}} ni bosing. Soʻrov `Obyektlarni tanlang:` deydi.
3. Obyektlarni bosing yoki oynalar va kesishmalarni torting. Tarix har bir tanlovni sanaydi (`1 ta topildi`, `3 ta topildi`).
4. {{key:Enter}} ni bosing, {{key:Space}} ni bosing yoki oʻng tugmani bosib tanlashni tugating.

Obyektlar oʻchiriladi va tarix nechtaligini aytadi.

`Obyektlarni tanlang:` soʻroviga quyidagilarni kiritishingiz mumkin:

- `ALL`, soʻng {{key:Enter}}: ochiq yorliqdagi tahrirlash mumkin boʻlgan har bir obyekt.
- `L` (yoki `LAST`), soʻng {{key:Enter}}: eng oxirgi chizilgan obyekt.
- `P` [Oldingi (P)]: oxirgi buyruq ishlagan obyektlar, agar ular hali boʻlsa.
- `F` [Toʻsiq (F)]: chiziq boʻylab nuqtalarni bosing yoki kiriting; chiziq kesib oʻtgan har bir obyekt qoʻshiladi. Toʻsiqni tugatish uchun {{key:Enter}} ni bosing; `U` uning oxirgi nuqtasini qaytarib oladi.
- `W` [Oyna (W)] yoki `C` [Kesishma (C)]: ikki burchak, qaysi tomonga torttingiz shunga qarab.
- `R` [Olib tashlash (R)]: bundan keyin bosishlar, oynalar va toʻsiqlar obyektlarni **chiqaradi**. Soʻrov `Obyektlarni olib tashlang:` deydi. `A` [Qoʻshish (A)] qaytadan qoʻshishga oʻtkazadi.
- `?`: tarixdagi bu variantlar roʻyxati.

Bu variantlar soʻrovda koʻrsatilmaydi, AutoCAD dagi kabi.

## Bir-birining ustida turgan bir nechta obyektdan birini tanlash

Obyektlar ustma-ust yoki tegib turgan joyda bosish eng yaqinini oladi. Boshqasini olish uchun:

1. Koʻrsatkichni shu joyda harakatsiz ushlab turing.
2. {{key:Tab}} ni bosing. Shu yerdagi keyingi obyekt ajratib koʻrsatiladi va holat satri uning nimaligini aytadi (`3 tadan 2-si: Walls qatlamidagi chiziq`).
3. Kerakli obyekt ajratib koʻrsatilgunicha {{key:Tab}} ni yana bosing, soʻng koʻrsatkichni harakatlantirmasdan bosing.

Koʻrsatkichni siljitish qaytadan boshlaydi. Bu buyruq ishlamayotganda, `Obyektlarni tanlang:` soʻrovida va buyruq bitta obyekt tanlashni soʻragan joyda ishlaydi.

## Qoida boʻyicha tanlash: Tezkor tanlash

{{cmd:QSELECT}} (`QS`, yoki {{ui:Edit}} › {{ui:More}} › {{ui:Quick select}}) qoidaga mos keladigan har bir obyektni tanlaydi, masalan radiusi 50 dan kichik har bir aylana yoki DOOR-900 deb nomlangan har bir blok havolasi.

1. {{ui:Quick select}} ni oching.
2. {{ui:Object type}} ni tanlang (roʻyxat har bir turni sanaydi), soʻng {{ui:Property}}: {{ui:Layer}}, {{ui:Color}}, va baʼzi turlar uchun {{ui:Length}}, {{ui:Radius}}, {{ui:Area}}, {{ui:Text height}}, {{ui:Text contents}}, {{ui:Block name}} yoki {{ui:Hatch pattern}}.
3. {{ui:Operator}} va {{ui:Value}} ni tanlang. `*` joker belgilar bilan mos keladi (`DOOR-*`); {{ui:Select all}} shu turdagi har bir obyektni oladi. Pastdagi son tanlaganingizda nechta mos kelishini koʻrsatadi.
4. {{ui:How to apply}}: mosliklarni qoʻshish yoki qolgan hamma narsani. {{ui:Apply to}} — {{ui:Current selection}} tanlaganingizni toraytiradi; {{ui:Append to current selection}} unga qoʻshadi.
5. {{ui:Select}} ni bosing. Soʻng kerakli buyruqni ishga tushiring: u tanlovdan foydalanadi.

## Oʻxshashini tanlash

Bir yoki bir nechta obyektni tanlang va {{cmd:SELECTSIMILAR}} (`SIM`) ni kiriting, yoki {{ui:Edit}} › {{ui:More}} › {{ui:Select similar}} ni tanlang. Bir xil turdagi, bir xil qatlamdagi va bir xil rangdagi har bir obyekt tanlanadi; blok havolalari bir xil blokni, shtrixlashlar esa bir xil namunani ham talab qiladi. Qaysi shartlar mos kelishi kerakligini tanlash uchun uning `Obyektlarni tanlang` soʻrovida `SE` ni kiriting.

## Hozir tanlang, keyin ishlating

`SELECT` ni kiriting va {{key:Enter}} ni bosing, yuqoridagi usullardan biri bilan obyektlarni tanlang va {{key:Enter}} ni bosing. Ular keyingi buyruq uchun tanlangan holda qoladi, va `P` ularni keyingi `Obyektlarni tanlang:` soʻrovida qayta tanlaydi.

## Hammasini tanlash

Hech qanday buyruq ishlamayotganda {{key:Mod+A}} ni bosing yoki asboblar panelining {{ui:Edit}} › {{ui:More}} menyusida {{ui:Select all}} ni tanlang, ochiq yorliqdagi tahrirlash mumkin boʻlgan har bir obyektni tanlash uchun. Agar buyruq satriga nimadir yozgan boʻlsangiz, {{key:Mod+A}} oʻrniga shu matnni tanlaydi: avval uni tozalash uchun {{key:Esc}} ni bosing. `Obyektlarni tanlang:` soʻrovida `ALL` ni kiriting. Shu menyudagi {{ui:Select none}} yoki {{key:Esc}} tanlovni tozalaydi.

:::tip
Har bir bosish tanlovni almashtirishini xohlasangiz ({{key:Shift}} esa qoʻshsin), [CadCraft sozlamalari](topic:settings) da {{ui:Clicking objects}} ni {{ui:Replaces the selection}} ga oʻrnating.
:::

## Tanlab boʻlmaydigan narsalar

- **Oʻchiq**, **muzlatilgan** yoki **qulflangan** qatlamdagi obyektlar. Qulflangan obyektlar koʻrinib turadi va ularga ilashish mumkin, lekin ularni tanlash yoki oʻzgartirib boʻlmaydi.
- Varaq yorligʻida, koʻrinish oynasi ichidagi model. Varaqning oʻz obyektlarini tanlaysiz (sarlavha bloki, izohlar, koʻrinish oynasi ramkalari). Modelni tahrirlash uchun {{ui:Model}} yorligʻiga oʻting.

## Tez oʻchirish

Obyektlarni tanlang, soʻng {{key:Delete}} ni bosing (yoki buyruq satrida kursor boʻlmasa, {{key:Backspace}}). Mac klaviaturasida delete deb belgilangan tugma chizmani bosganingizdan keyin ishlaydi; buyruq satrida kursor boʻlsa, fn va delete ni birga bosing. Bu tanlovda {{cmd:ERASE}} ni ishga tushiradi. Hech narsa boʻlmasa, buyruq satriga nimadir yozgan boʻlasiz: {{key:Esc}} ni bosing yoki buyruq oʻrniga `E` ni kiriting va {{key:Enter}} ni bosing.

## Keng tarqalgan xatolar

- **Oyna juda kam narsa oldi.** Chapdan oʻngga torttingiz, bu faqat toʻliq ichidagilarni oladi. Kesishma uchun oʻngdan chapga torting.
- **Boʻsh joyni bosish quti boshladi.** Boʻsh joyni bir marta bosish oynani boshlaydi; ikkinchi bosish uni tugatadi. Tashlash uchun {{key:Esc}} yoki oʻng tugmani bosing.
- **Boʻsh joyni bosish tanlovni boʻshatdi.** Shunday, agar {{key:Shift}} ni ushlamasangiz. Bunday bosishda tanlovni saqlash va faqat {{key:Esc}} bilan tozalash uchun, [CadCraft sozlamalari](topic:settings#clicking-an-empty-spot) da {{ui:Clicking an empty spot}} ni {{ui:Keeps the selection}} ga oʻrnating.
- **Buyruq siz xohlamagan obyektlardan foydalandi.** Buyruqni boshlaganingizda biror narsa hali tanlangan edi. Buyruqdan oldin {{key:Esc}} ni bosing, hech narsa tanlanmagan holda boshlash uchun.
- **Buyruqdan keyin hech narsa tanlanmagan.** Bu ataylab: tugagan buyruq tanlovni tozalaydi.
