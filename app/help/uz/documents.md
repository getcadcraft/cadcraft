---
title: Hujjatlar: olish, qayta koʻrib chiqishlar va chiqarish
summary: Loyiha jildidagi chizmalarni nazorat qiling: faylni boshqa hech kim oʻzgartira olmasligi uchun oling, yangi qayta koʻrib chiqish sifatida qaytarib joylang, koʻrib chiqishga yuboring va tasdiqlovchining ismi bilan chiqaring; tarix, nima nimani ishlatishi, materiallar roʻyxati va qayta koʻrib chiqishni koʻrsatadigan shtamplar.
keywords: loyiha sozlamalari, tasdiqlovchilar, administratorlar, qayta koʻrib chiqish harflari, ASME, faqat oʻqish, qayta koʻrib chiqishlarni solishtirish, nusxani ochish, partcraft, bimcraft, documents, DOCUMENTS, DOCS, ombor, hujjatlar boshqaruvi, pdm, olish, qaytarib joylash, checkout, checkin, qulflash, qayta koʻrib chiqish, rev, qayta koʻrib chiqish harfi, chiqarish, chiqarilgan, tasdiqlash, tasdiq, koʻrib chiqish, eskirgan, qayerda ishlatilgan, bom, materiallar roʻyxati, shtamp, revizya bloki, loyiha jildi
from: ee938722
---

## Nima yasaysiz

Loyiha jildi, unda har bir chizmaning qayta koʻrib chiqilishi (A.1, A.2 … keyin A, B …) va holati (Ishlanmoqda, Koʻrib chiqishda, Chiqarilgan, Eskirgan) boʻladi; faylni bir vaqtda faqat bitta kishi oʻzgartira oladi; har bir olish, qaytarib joylash, tasdiqlash va buzilgan olish kim tomonidan va qachon bajarilgani bilan yozib qoʻyiladi.

Hammasi loyiha jildining oʻzida saqlanadi, chizmalaringiz yonidagi yashirin `.ccvault` jildida. Umumiy disk yoki sinxronlanadigan jild butun jamoa uchun ishlaydi. Server yoʻq va hech narsa yuklanmaydi.

## Hujjatlarni ochish

`DOCUMENTS` (yoki `DOCS`) yozing va {{key:Enter}} tugmasini bosing. Panel chizma yonida ochiladi.

{{ui:Choose the project folder}} tugmasini tanlang va loyiha chizmalarini saqlaydigan jildni tanlang. Loyiha jildlari CadCraft Studioʼda va jildni ocha oladigan brauzerlarda (Chrome, Edge) ishlaydi. Boshqa brauzerlarda panelda shu haqda xabar chiqadi.

Birinchi marta ismingizni kiriting (u qilgan hamma ishlaringizga yoziladi) va bu kompyuterning nomini. Hisobingizga kirgan boʻlsangiz, ismingiz allaqachon kiritilgan boʻladi.

## Ombor boshlash

Hali ombor boʻlmagan jild {{ui:Start a vault in this folder}} tugmasini koʻrsatadi. Loyiha nomini kiriting. Soʻng Ombor tashqarisidagi fayllar boʻlimini oching va nazoratga olinadigan har bir fayl yonidagi {{ui:Add}} tugmasini tanlang. Qoʻshilgan fayl **A.1** qayta koʻrib chiqishda, Ishlanmoqda holatida boshlanadi.

## Chizmani oʻzgartirish

1. Chizma yonidagi {{ui:Open}} tugmasini tanlang. U CadCraft’da ochiladi. Agar u sizga olinmagan boʻlsa, faqat koʻring, oʻzgartirmang: {{ui:Save}} uni ustiga yozishni rad etadi va sababini aytadi (oʻzingizniki boʻlgan nusxani saqlash uchun {{ui:Save as}} dan foydalaning).
2. {{ui:Check out}} tugmasini tanlang. Endi boshqa hech kim uni ola olmaydi; panel kimda ekanini, qaysi kompyuterda va qachondan beri ekanini koʻrsatadi.
3. Chizing.
4. {{ui:Check in}} tugmasini tanlang va nima oʻzgarganini yozing. Ochiq chizmangiz loyiha jildiga oʻz formatida saqlanadi va keyingi qayta koʻrib chiqishga aylanadi (A.1, keyin A.2). Hech narsa oʻzgarmasa, qayta koʻrib chiqish oʻzgarmaydi.

{{ui:Undo check-out}} faylni yangi qayta koʻrib chiqishsiz qaytaradi.

## Koʻrib chiqish va chiqarish

- {{ui:Send for review}}: koʻrib chiqish davomida fayl faqat oʻqish uchun boʻladi.
- {{ui:Approve}}: tasdiqlovchining ismini kiriting. A.3 **A** boʻladi, Chiqarilgan holatida. Chiqarilgan fayllar faqat oʻqish uchun boʻladi.
- {{ui:Send back}}: sabab bilan birga Ishlanmoqda holatiga qaytaradi.
- Chiqarilgan faylda {{ui:New revision}} keyingi harf uchun uni olib qoʻyadi: uning birinchi qaytarib joylashi **B.1** boʻladi. Undan oldin {{ui:Undo check-out}} uni A da qoldiradi.
- {{ui:Make obsolete}} chiqarilgan faylni eskirgan deb belgilaydi.

Loyiha tasdiqlovchilar roʻyxatini saqlashi mumkin va tasdiqlovchi faylni qaytarib joylagan shaxs boʻlmasligini talab qilishi mumkin (quyida Loyiha sozlamalari boʻlimiga qarang).

## Loyiha sozlamalari

Paneldagi {{ui:Project settings}} ni oching:

- **Tasdiqlovchilar**: har qatorga bitta ism. Ular boʻlsa, faqat ular chiqarishni tasdiqlay oladi.
- **Tasdiqlovchi muallifdan boshqa shaxs boʻlishi kerak**: "toʻrt koʻz" qoidasi.
- **Administratorlar**: har qatorga bitta ism. Ular boʻlsa, faqat ular boshqa birovning olishini buzishi yoki bu sozlamalarni oʻzgartirishi mumkin.
- **Chiqarib tashlanadigan qayta koʻrib chiqish harflari**: {{ui:Use the ASME Y14.35 sequence}} I, O, Q, S, X va Z ni oʻtkazib yuboradi yoki oʻz harflaringizni kiriting. Berilgan harflar qoladi; tanlov keyingi qayta koʻrib chiqishlarga qoʻllanadi.
- **Olish eskirgan hisoblanadigan muddat**: kunlar soni (standart boʻyicha 14).

{{ui:Save settings}} tugmasini tanlang. Oʻzgarish kim tomonidan qilinganini koʻrsatib jurnalga yoziladi.

## Kimdir faylni olingan holda qoldirdi

{{ui:Break check-out}} boshqa birov olgan faylni boʻshatadi (u uzoqda boʻlsa yoki kompyuteri ishdan chiqqan boʻlsa). Sabab kiritishingiz shart: u kimning olishi ekani bilan jurnalga yoziladi. Loyihada administratorlar boʻlsa, buni faqat ular qila oladi. 14 kundan eski olish uzoq muddat deb belgilanadi.

## Tarix, qayta koʻrib chiqishlar, ishlatiladi, kim ishlatadi

Koʻrish uchun faylning nomini tanlang:

- {{ui:History}}: har bir voqea, eng yangisi birinchi, kim, qaysi kompyuterda va qachon.
- {{ui:Revisions}}: saqlangan har bir qayta koʻrib chiqish. Har bir qayta koʻrib chiqishning nusxasi omborda saqlanadi (bir xil mazmun bir marta saqlanadi). {{ui:Open copy}} shu qayta koʻrib chiqishni ombor faylini ustiga yoza olmaydigan oddiy nusxa sifatida ochadi. {{ui:Compare with}} shu qayta koʻrib chiqish va undan oldingi (yoki tanlagan boshqa) orasida qoʻshilgan, olib tashlangan va oʻzgargan narsalarni roʻyxatlaydi hamda ularni chizmada rang bilan koʻrsatadi.
- {{ui:Uses}}: u bogʻlangan chizmalar (xref), IFC model koʻrsatadigan hujjatlar, PartCraft yigʻmasining detallari.
- {{ui:Used by}}: ombordagi uni ishlatadigan har bir fayl.

{{ui:Bill of materials (CSV)}} faylning ishlatadigan hamma narsasi roʻyxatini daraja boʻyicha, miqdorlar, qayta koʻrib chiqishlar va holatlar bilan elektron jadval uchun saqlaydi.

## Varaqdagi revizya bloki

Varaq maketi bor ochiq chizmada {{ui:Revision block}} ni tanlang. Chiqarilgan qayta koʻrib chiqishlar jadvali (qayta koʻrib chiqish, sana, kim tomonidan, tasdiqlangan, tavsif) koʻrayotgan varaqning yuqori oʻng qismiga chiziladi. Chiqarishni tasdiqlaganingizda jadval yangilanadi.

## Shtampdagi qayta koʻrib chiqish

Shtamp atributlaringizga quyidagi teglardan birini bering va ochiq chizmada {{ui:Fill title blocks}} ni tanlang:

| Teg | Qiymat bilan toʻldiriladi |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | qayta koʻrib chiqish (B, yoki ustida ishlanayotganda B.2) |
| `VAULT.STATE` | holat (Chiqarilgan …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | oxirgi qayta koʻrib chiqish sanasi |
| `VAULT.APPROVER`, `APPROVED_BY` | oxirgi chiqarishni kim tasdiqlagani |

## PartCraft va BimCraft

PartCraft va BimCraft oʻz fayllari uchun xuddi shunday Hujjatlar paneliga ega: PartCraft’da detallar va yigʻmalar, BimCraft’da IFC modellari. Qaytarib joylash ochiq modelni loyiha jildiga saqlaydi, yigʻma esa qaysi detallardan foydalanilganini va materiallar roʻyxatini koʻrsatadi.

## Bilish foydali

- Umumiy jilddagi ikki kishi bir faylni ikkalasi birdan ola olmaydi: olish tizim ikki marta yaratishga yoʻl qoʻymaydigan fayl. Brauzerda va bu funksiyadan eski boʻlgan Studio qobigʻida bu jildga ruxsat beradigan darajada qatʼiy: bir soniya ichida ikki olish ikkalasi ham muvaffaqiyatli boʻlishi mumkin. Panel qaysi biri qoʻllanishini aytadi.
- `.ccvault` jildini qoʻlda tahrirlamang yoki oʻchirmang. Undagi jurnal yozuvdir; kerak boʻlsa, ombor roʻyxatini undan qayta tiklaydi.
- Jildda faylni olmasdan oʻzgartirish {{ui:Changed in the folder without a check-out}} sifatida koʻrsatiladi.
