---
title: CadCraft bilan boshlash
summary: CadCraft chizma ilovasi nima qiladi, qayerda ishlaydi va birinchi chizmangiz boʻsh ekrandan saqlangan faylgacha.
keywords: boshlash, birinchi chizma, yangi, ochish, saqlash, boshqacha saqlash, qoʻllanma, kirish, tez boshlash
from: 1a56c575
---

CadCraft 2D chizma ilovasi. Siz chiziqlar, yoylar, polichiziqlar, matn, oʻlchamlar va bloklarni chizasiz va tahrirlaysiz, sarlavha bloklari va koʻrinish oynalari bilan varaqlar tuzasiz va ularni PDF ga chop etasiz. U DWG va DXF chizmalarini ochadi va ularni DWG yoki DXF sifatida saqlaydi.

U veb-brauzeringizda ishlaydi. Oʻrnatish shart emas: sayt manzilni beradi va butun ilova sahifaga yuklanadi. Chizmalaringiz oʻz kompyuteringizdan ochiladi va unga qaytadan saqlanadi. **Hech narsa yuklanmaydi.**

Agar avval chizma chizgan boʻlsangiz, bu sahifadan keyin [Boshqa chizma dasturidan oʻtish](topic:coming-from) ni oʻqing. Odatlarning aksariyati saqlanib qoladi, saqlanmaydiganlari esa oʻsha yerda sanab oʻtilgan.

## Yoʻriqnoma bilan ishlashni xohlaysizmi?

`TOUR` ni yozing (yoki boshlash kartasidagi {{ui:Turni boshlash}} ni bosing, yoki {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Turni qayta boshlash}}). Chizma ustidagi quti ichida olti qisqa qadam: chiziq va aylana chizish, uni koʻchirish, qirqish, nimanidir oʻchirish va oʻlchamini qoʻyish. Har bir qadam siz uni bajarganingizda tugaydi; qadamni yoki butun yoʻriqnomani oʻtkazib yuborishingiz mumkin. U faqat birinchi marta oʻzi boshlanadi. [Shpargalka](topic:cheat-sheet) siz eng koʻp ishlatadigan 40 ta buyruqni, [buyruqlar xaritasi](topic:command-map) esa mavjud barcha buyruqlarni beradi.

## Kerak boʻladigan narsalar

- Yangi Chrome, Edge, Firefox yoki Safari — Mac, Windows yoki Linux kompyuterda. Qarang: [Brauzerlar va platformalar](common:browsers).
- Gʻildiragi bor sichqoncha eng qulay. Sensorli panel ham ishlaydi; qarang: [Sichqoncha, sensorli panel va teginish](topic:mouse-trackpad-touch).
- Klaviatura. CadCraft, koʻpchilik chizma dasturlari kabi, yozilgan buyruqlar bilan boshqariladi.

## Gʻoya bir abzatsda

Buyruqni yozasiz (yoki uning tugmasini bosasiz), pastdagi buyruqlar qatori esa savollarni birma-bir beradi: `Birinchi nuqtani koʻrsating:`, soʻng `Keyingi nuqtani koʻrsating:`. Har bir savolga chizmani bosib yoki qiymat yozib, soʻng {{key:Enter}} ni bosib javob berasiz. {{key:Esc}} ni bosish bekor qiladi. Oʻzaro taʼsirning butun modeli shu; qolgan hammasi tafsilot.

## Birinchi chizmangiz

Siz chiziqlardan 4000 × 3000 toʻrtburchak chizasiz, oʻrtasiga aylana qoʻyasiz va faylni saqlaysiz.

1. CadCraftni oching. Pastdagi buyruqlar qatorida `Buyruq:` koʻrinadi, chizma maydonida esa qisqa "Chizmani boshlash" kartasi koʻrinadi.
2. `L` ni yozing va {{key:Enter}} ni bosing. Buyruq qatorini avval bosish shart emas: istalgan joyda yozsangiz, u shu yerga boradi.
3. Savol oʻzgaradi: `Birinchi nuqtani koʻrsating:`. `0,0` ni yozing va {{key:Enter}} ni bosing.
4. `@4000,0` ni yozing va {{key:Enter}} ni bosing. Oʻngga yoʻnalgan chiziq paydo boʻladi. `@` "oxirgi nuqtadan" degani.
5. `@0,3000` ni yozing va {{key:Enter}} ni bosing.
6. `@-4000,0` ni yozing va {{key:Enter}} ni bosing.
7. `C` ni yozing va {{key:Enter}} ni bosing. `C` — Yopish varianti: oxirgi chiziq birinchi nuqtaga qaytadi va buyruq tugaydi.
8. Asboblar panelining Koʻrinish guruhidagi {{ui:Hammasini koʻrsatish}} tugmasini bosing. Toʻrtburchak ekranni toʻldiradi.

Endi toʻrtta chiziqdan iborat toʻrtburchak koʻrinishi kerak, va buyruqlar qatori ustidagi tarix siz yozganlarni sanab beradi.

9. `C` ni yozing va {{key:Enter}} ni bosing, aylana buyrugʻini boshlash uchun.
10. Markaz uchun `2000,1500` ni yozing va {{key:Enter}} ni bosing.
11. Radius uchun `500` ni yozing va {{key:Enter}} ni bosing.

Toʻrtburchak oʻrtasida aylana paydo boʻladi.

12. {{key:Mod+S}} ni bosing yoki Fayl guruhidagi {{ui:Saqlash}} ni bosing.

Brauzer `Drawing1.dwg` faylini odatdagi Yuklab olishlar papkangizga yuklaydi, va tarix uni DWG nusxasi sifatida saqlanganini aytadi. Bu fayl CadCraftda va boshqa koʻpgina CAD dasturlarida qayta ochiladi. (Agar bu brauzerda oldin {{ui:Boshqacha saqlash}} da DXF tanlagan boʻlsangiz, yangi chizma oʻrniga `Drawing1.dxf` sifatida saqlanadi.)

:::tip
Boʻsh buyruq qatorida {{key:Enter}} ni bosing — oxirgi buyruqni takrorlaydi. Agar xohlasangiz, {{key:Enter}} oʻrniga {{key:Space}} ni bosing: matndan tashqarida u xuddi shunday ishlaydi.
:::

## Mavjud chizmani ochish

1. {{key:Mod+O}} ni bosing yoki {{ui:Ochish}} ni bosing.
2. Fayl tanlash oynasida `.dwg` yoki `.dxf` faylni tanlang.

DWG yoki DXF faylni {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} dan sudrab chizma maydoniga tashlashingiz ham mumkin. Fayl sahifa ichida oʻqiladi; u hech qachon kompyuteringizdan chiqmaydi.

Saqlanadigan va aylantiriladigan narsalar haqida qarang: [Fayllar: nima ochiladi, nima saqlanadi](topic:files).

## Saqlash: nimani kutish kerak

Brauzerda saqlash ish stoli dasturidagidan boshqacha ishlaydi:

- {{ui:Saqlash}} har doim **yangi nusxani yuklab oladi**. U ochgan faylni ustiga yozmaydi. Yuklab olishlar papkasida xuddi shu nomli fayl boʻlsa, brauzer odatda raqam qoʻshadi, masalan `Drawing1 (1).dwg`.
- {{ui:Saqlash}} chizma formatidan foydalanadi: ochilgan DWG boʻlsa DWG, DXF boʻlsa DXF. Tanlash uchun {{key:Mod+Shift+S}} ni bosing yoki {{ui:Boshqacha saqlash}} ni bosing, soʻng {{ui:DWG}} (va uning versiyasi), {{ui:DXF R12}} yoki {{ui:DXF 2000}} ni tanlang. Qarang: [Saqlash](topic:files#saving).
- Ochgan fayl hech qachon oʻzgartirilmaydi.
- Boshqa faylni ochish yoki {{ui:Yangi}} chizmani oʻz yorligʻida, chizma ustida qoʻyadi, shuning uchun ochiq hech narsa yopilmaydi. Chizma yorligʻini yopsangiz yoki sahifadan saqlanmagan oʻzgarishlar bilan chiqsangiz, CadCraft avval soʻraydi: {{ui:Avval nusxasini saqlash}}, rad etish yoki {{ui:Bekor qilish}}. Brauzer yorligʻini yopganda esa, brauzerning oʻz "Saytdan chiqilsinmi?" savoli chiqadi.

Bulutga saqlash hali mavjud emas. Fayllaringiz qayerga borishi va nega ular shaxsiy qolishi [Fayllaringiz va maxfiylik](common:your-files) da tushuntirilgan.

## Keyingi qadam

Istalgan vaqtda bu yordamni chizma yonida ochish uchun {{key:F1}} ni bosing yoki yuqoridagi panelda {{ui:Yordam}} ni bosing. U ulanishsiz ishlaydi.

- [CadCraft ekrani](topic:workspace) har bir panel va paneni nomi bilan sanab beradi.
- [Koordinatalar bilan chizish](topic:draw-with-coordinates) eng yaxshi birinchi qoʻllanma.
- [Klaviatura va sichqoncha](topic:keyboard) har bir tugmani sanab beradi.
- Buyruqlar qatoriga `HELP` yozing — har bir buyruq roʻyxatini olish uchun, yoki [Buyruqlar boʻyicha qoʻllanma](topic:commands) ni oʻqing.
