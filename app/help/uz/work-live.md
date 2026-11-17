---
title: Live TeamWork bilan bitta chizmada birgalikda ishlash
summary: CadCraft Studio dagi Live TeamWork seansida nima oʻzgaradi: boshqa odamlarning kursorlari va tanlovlari, kimdir tahrirlayotgan obyektlar, xostning qulflari, sizning ortga qaytarishingiz va bir xil tarmoqdagi brauzerdan qoʻshilish.
keywords: live, live teamwork, studio live, birga, hamkorlik, birgalikda tahrirlash, seans, jonli ulashish, qoʻshilish, kursor, ushlab turilgan, tahrirlanmoqda, qulf, livelock, liveunlock, livehold, qatlamni ushlab turish, hudud ushlab turish, ortga qaytarish, xost, yordamchi, bir xil fayl, koʻp odam, sekin, cheklov, kim oʻzgartirdi, soʻnggi tahrirlar, tahrirlar jurnali
from: 0497d2a3
---

## Nimalarni oʻrganasiz

Bir vaqtning oʻzida bir nechta odam bitta chizma ustida ishlaganda nimani koʻrasiz va tahrirlaringizga nima boʻlishi. CadCraft Studio Live TeamWork seansini boshlaydi va unga qoʻshiladi (Jonli ulashish, Qoʻshilish); bu sahifa chizmaning oʻzi haqida.

## Hamma bir vaqtda chizadi

Odatdagidek chizing va tahrirlang. Sizning tahrirlaringiz boshqalar hali koʻrmasdan oldin ham darhol koʻrinadi, boshqalarning tahrirlari esa ular qilganidan bir lahza keyin ekraningizda paydo boʻladi. Har bir buyruq ishlaydi: chizish, tahrirlash, qatlamlar, bloklar, varaqlar, oʻlchamlar, cheklovlar.

Bir xil obyektni ikki kishi oʻzgartirishi mumkin. Turli narsalarni oʻzgartirsangiz, masalan bitta chiziqning rangi va uchi, ikkala oʻzgarish ham saqlanadi. Bir xil narsani oʻzgartirsangiz, keyingi oʻzgarish gʻolib boʻladi.

Faqat sizniki boʻlib qoladigan narsalar: joriy qatlam, yangi obyektlar uchun rang va matn balandligi, oʻlcham sozlamalaringiz, koʻrinishingiz, ekranni boʻlish va UCS. Chizma umumiy; uni qanday koʻrishingiz esa umumiy emas.

## Chizmangizdagi boshqa odamlar

- **Kursorlar:** har bir odamning koʻrsatkichi uning ismi va oʻz rangi bilan, hamda u bajarayotgan buyruq bilan koʻrinadi. Ekraningizdagi narsalarga yaqin ishlayotganlarning kursorlarini koʻrasiz.
- **Tanlovlar:** kimdir tanlagan narsa uning rangi bilan konturlanadi.
- **Tahrirlanmoqda:** kimdir tanlagan obyekt "Ana tahrirlamoqda" kabi yorliqqa ega. Uning rangini oʻzgartirishingiz yoki siljitishingiz mumkin, lekin ular qoʻyib yubormaguncha uni oʻchira, portlata yoki qayta yoza olmaysiz. Uni tanlash sizga kimda ekanini aytadi.
- **Oxirgi kim oʻzgartirgan:** shu seansda boshqa biri oʻzgartirgan bitta obyektni tanlasangiz, buyruq satri kim va qanday oʻzgartirganini aytadi ("Ben buni oxirgi marta oʻzgartirgan: CIRCLE."). Studio ning Live paneli barcha soʻnggi tahrirlarni {{ui:Soʻnggi tahrirlar}} ostida roʻyxatlaydi. Bularning hech biri chizmada saqlanmaydi: seans davom etguncha turadi.

## Ishlayotganda qatlam yoki hududni ushlab turish

Koʻp odam ishtirok etgan katta chizmada, hozircha qaysi qism sizniki ekanini ayting:

1. `LIVEHOLD` ni yozing va {{key:Enter}} ni bosing.
2. `L` ni tanlang va qatlam nomini yozing ({{key:Enter}} joriy qatlamni saqlaydi), yoki `A` ni tanlang va hududning ikki burchagini bosing.
3. Boshqalarning shu qatlamdagi yoki shu hududdagi obyektlarga tahrirlari qaytariladi va ularga siz shu yerda ishlayotganingiz aytiladi. Siz oʻz hududingizni shtrixli ramka sifatida koʻrasiz; boshqalar uni sizning rangingiz va ismingiz bilan koʻradi, ushlab turgan qatlamlaringiz esa ularning chizmasining yuqori chap qismida roʻyxatlanadi.
4. `LIVEHOLD`, soʻng `R` barcha ushlab turganlaringizni boʻshatadi. Seansdan chiqish ham hammasini boʻshatadi.

Seansdagi istalgan kishi ushlab turishi mumkin, xost ham; xostning qulflari ustiga qoʻshimcha qoʻllanadi. Ushlab turish hech qachon faylda saqlanmaydi.

## Tahrir qaytarilganda

Xostning chizma nusxasi har bir tahrirni tekshiradi. Bir nechtasi kirmaydi, va CadCraft ularni ekraningizdan qaytaradi va buyruq satrida sababini aytadi, masalan:

- siz undan oldin kimdir obyektni, yoki unga kerak boʻlgan qatlam yoki blokni oʻchirgan;
- kimdir oʻsha obyektni tahrirlayapti, yoki uning qatlamini yoki u turgan hududni ushlab turibdi;
- xost uni qulflagan;
- siz joylashtirgan blok tozalangan, yoki oʻchirgan qatlamingizda hali obyektlar bor.

## Ortga qaytarish faqat sizning ishingizni qaytaradi

{{key:Mod+Z}} va {{ui:Ortga qaytarish}} sizning oxirgi buyrugʻingizni, butunligicha, qaytaradi va boshqalarning ishiga tegmaydi. Shundan keyin kimdir xuddi shu narsani oʻzgartirgan boʻlsa, hech narsa qaytarilmaydi va buyruq satri kim oʻzgartirganini aytadi. {{key:Mod+Y}} qayta bajaradi.

## Qulflar (xost)

Xost obyektlarni yoki butun qatlamni hech kim oʻzgartira olmasligi uchun himoyalashi mumkin, xost ham, ular ochilguncha:

1. Obyektlarni tanlang, soʻng `LIVELOCK` ni yozing va {{key:Enter}} ni bosing. Yoki hech narsa tanlanmagan holda `LIVELOCK` ni yozing va qatlamni nomi bilan qulflash uchun `L` ni tanlang: keyinroq shu qatlamga qoʻshilgan obyektlar ham qulflanadi.
2. Qulflangan obyektlar hamma ekranida "Xost tomonidan qulflangan" yorligʻi bilan shtrixlanadi.
3. `LIVEUNLOCK` ularni xuddi shunday ochadi.

Qulflar seansga tegishli: u tugaganda ular ham tugaydi va hech qachon faylda saqlanmaydi.

## Bir xil fayl bilan qoʻshilish

Agar siz xost ochgan aynan oʻsha faylni ochgan boʻlsangiz (umumiy jilddan yoki bir xil nusxadan), Studio dagi oʻz CadCraft oynangizdan qoʻshiling: {{ui:Live}} panelini oching va xostning kodi bilan {{ui:Bu yerga qoʻshilish}} dan foydalaning. Faqat xost uni ochganidan keyin qilingan oʻzgarishlar uzatiladi, shuning uchun katta chizma darhol tayyor boʻladi. Agar sizning faylingiz boshqa boʻlsa, xostning chizmasi uni ekraningizda almashtiradi (sizning faylingiz oʻz holicha qoladi). Bu faqat chizmangiz uni ochganingizdan beri oʻzgarmagan boʻlsagina ishlaydi.

## Seansdagi yordamchilar

CadCraft oynangizga ulangan yordamchi (qarang: AI yordamchilar bilan ishlash yordami) seansga oʻz ishtirokchisi sifatida qoʻshiladi va hammaga "Yordamchi (<sizning ismingiz> orqali)" deb koʻrinadi. Xost uni xuddi odamdagidek qoʻshadi; xostning oʻz yordamchisi darhol qoʻshiladi. Uning oʻzgarishlarining oʻz ortga qaytarishi bor: sizning {{key:Mod+Z}} ishingizni qaytaradi, yordamchining ortga qaytarishi esa faqat oʻzinikini. U siz uni uzganingizda yoki chiqqaningizda seansdan chiqadi va faqat siz tahrirlay olganingizda seansda ishlay oladi.

## Brauzerdan qoʻshilish

Studio siz boʻlmagan jamoadoshingiz xostning kodi ostidagi rasmni bir xil tarmoqdagi telefon, planshet yoki kompyuter bilan skanerlashi mumkin. CadCraft brauzerda ochiladi, buyruq satrida ismingizni soʻraydi va xost sizni qoʻshgach, xostning chizmasi bilan toʻladi. Taklif havolasi boshqa tarmoqdan qoʻshilish imkonini beradi: xostga ilova uchun Team Cloud Plan oʻrni kerak, boshqalar bepul qoʻshiladi va havola faqat xostning seansi ochiq boʻlganda ishlaydi.

## Bitta chizmada koʻp odam

Har bir tahrir seansdagi hammaga yuboriladi, shuning uchun odam qancha koʻp boʻlsa, har bir oʻzgarish ularning har biriga yetib borishi shuncha uzoq davom etadi va sekinroq noutbuklar va ulanishlar birinchi boʻlib orqada qoladi. Seansning odatiy hajmi 20 kishi; xost bitta seans uchun koʻproq ruxsat berishi mumkin (qarang: birgalikda jonli ishlash yordami). Agar koʻp odam bilan chizma sekin tuyulsa, kamroq odam, bir vaqtda tahrirlovchilar kamroq boʻlishi yoki yaxshiroq ulanish yordam beradi.

## Seans tugaganda

Chizmani faqat xost saqlaydi. Xost seansni tugatganda, boshqalarning hammasida saqlanmagan nusxa qoladi: uni saqlab qolmoqchi boʻlsangiz, saqlang.

:::note
Qaytarilgan narsa ekraningizda atrofdagi obyektlar ustida chiziladi, toki chizmani qayta ochmaguningizcha. Bir-biriga kesishgan shtrixlar va toʻldirilgan obyektlar xostning nusxasidagidan boshqacha koʻrinishi mumkin; chizmaning oʻzi bir xil.
:::
