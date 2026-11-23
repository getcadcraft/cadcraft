---
title: Dinamik bloklar
summary: CadCraft DWG dagi dinamik bloklar bilan nima qiladi: ular oʻz haqiqiy nomlarini saqlaydi, saqlangan holatini koʻrsatadi, koʻrinish holatlarini almashtiradi, boshqa qiymatlarini koʻrsatadi va saqlanganda dinamik boʻlib qoladi.
keywords: dinamik blok, dinamik bloklar, koʻrinish, koʻrinish holati, ogʻdirish, choʻzish, qidirish, parametrlar, maxsus, blok xossalari, *U bloklar, dinamik
from: dea2ee7c
---

## Nima ishlaydi

Dinamik bloklar bilan yaratilgan DWG ochilganda, ular quyidagicha ishlaydi:

- **Haqiqiy nomlari.** Dinamik blok {{ui:Bloklar}} panelida oʻz nomi bilan chiqadi (“Receptacle”, “Sink”), nomsiz `*U` blok sifatida emas.
- **Saqlangan holati.** Har bir havola boshqa dastur koʻrsatgan aniq holatni koʻrsatadi: u oʻrnatilgan koʻrinish holati, saqlangandagidek choʻzilgan yoki ogʻdirilgan.
- **Koʻrinish holatini almashtirish.** Bitta havolani (yoki bir xil blokdan bir nechtasini) tanlang, {{ui:Xossalar}} ni oching va {{ui:Maxsus}} boʻlimida {{ui:Koʻrinish}} roʻyxatidan boshqa holatni tanlang. Havola shu holatni darhol koʻrsatadi, atributlari ham: holat yashiradiganlari yoʻqoladi, koʻrsatadiganlari qiymatlari bilan paydo boʻladi. Havola hech bir qiymatni yoʻqotmaydi, shuning uchun hech narsa boʻsh qolmaydi; {{ui:Xossalar}} yashirilganlarni “yashirin” deb belgilaydi. {{key:Mod+Z}} eski holatni bir qadamda tiklaydi.
- **Tutqichlar.** Tanlangan dinamik blok oʻz parametrlari joylashgan joyda oʻz tutqichlarini koʻrsatadi: koʻrinish holati uchun kichik uchburchak (roʻyxatni koʻrish uchun bosing), masofa uchlarida strelkalar, ogʻdirish uchun ikki tomonli strelka. Hozir faqat koʻrinish tutqichi ishlaydi; qolganlari holat satrida buni aytadi.
- **Boshqa qiymatlar, faqat oʻqish uchun.** {{ui:Koʻrinish}} roʻyxati ostida {{ui:Maxsus}} blokning masofalari, tekislash burchaklari, ogʻdirish holatlari va nuqtalarini chizma qanday saqlagan boʻlsa, shunday koʻrsatadi.
- **Koʻrinish holatlarini tahrirlash.** Blokni {{cmd:BEDIT}} bilan oching: muharrir bir holatni koʻrsatadi, uning nomi chizma ustidagi satrda yoziladi (u yerdan boshqasini tanlash mumkin). {{cmd:BVSTATE}} buyrugʻi bilan holatga oʻtish, qoʻshish (hammasini yashirib, hammasini koʻrsatib yoki koʻrinib turganini saqlab), nomini oʻzgartirish yoki oʻchirish mumkin; {{cmd:BVHIDE}} tanlangan obyektlarni joriy koʻrinish holatida yashiradi; {{cmd:BVSHOW}} yashirilganlarni xira koʻrsatadi, shunda qaytarish uchun ularni bosishingiz mumkin. Blokni saqlang: nomi oʻzgartirilgan holatga oʻrnatilgan havolalar uni yangi nomi bilan saqlaydi, oʻchirilgan holatga oʻrnatilganlar birinchi holatni koʻrsatadi.
- **Dinamik holda saqlanadi.** DWG kelgan versiyasida saqlansa, bloklar tanlagan holati bilan dinamik boʻlib qoladi: boshqa dastur ularni oʻsha dinamik bloklar sifatida ochadi. Siz tahrirlagan koʻrinish holatlari ham saqlanadi: ularning yangi nomlari, qoʻshgan holatlaringiz va har biri nimani koʻrsatishi.

## Faqat oʻqish uchun yoki hali yoʻq

| Hali yoʻq | Oʻrniga, hozir |
|---|---|
| Masofalar, burchaklar yoki ogʻdirishlarni oʻzgartirish (choʻzish, koʻchirish, ogʻdirish amallari) | {{ui:Maxsus}} da faqat oʻqish uchun koʻrinadi; blokni yaratgan dasturda tahrirlang. |
| Qidirish, XY, aylanish va qutb parametrlari | Hali oʻqilmaydi: havola saqlanganidek koʻrinadi. |
| Masofa, ogʻdirish va nuqta tutqichlarini sudrash | Ular parametrlar joylashgan joyda koʻrinadi; koʻrinish tutqichi va Xossalardagi {{ui:Koʻrinish}} roʻyxati holatlarni almashtiradi. |
| Boshqa dastur turidagi dinamik bloklarni yaratish (choʻzish, ogʻdirish, qidirish) | CadCraft da yaratgan bloklaringiz oddiy bloklar; {{cmd:BPARAMETER}} buni aytadi. Oʻz parametrlaringiz va bir nechta koʻrinish parametrlari Parametrlar boshqaruvchisida (quyidagi “Oʻz parametrlaringiz va koʻrinish holatlari” boʻlimiga qarang). |
| Blok muharririda koʻrinish holatlari bor blokka obyektlar qoʻshish yoki oʻchirish | Blok keyin oddiy blok sifatida saqlanadi (muharrir yopilganda buni aytadi). |
| Dinamik holda boshqa DWG versiyasida yoki DXF da saqlash | Ular tanlagan holatini koʻrsatuvchi oddiy bloklar sifatida saqlanadi va saqlash buni aytadi. |

:::note
{{cmd:BEDIT}} da blokning obyektlarini koʻchirish yoki oʻzgartirish koʻrinish holatlari bor blokni dinamik qoldiradi. Holatsiz blok yoki muharrirda obyektlari qoʻshilgan yoki oʻchirilgan blok oddiy blokka aylanadi.
:::

## Oʻz parametrlaringiz va koʻrinish holatlari

CadCraft da yaratgan blok oʻz parametrlari va **bir nechta** koʻrinish parametrlarini olib yurishi mumkin; har birining oʻz holatlari bor. {{cmd:BPARAMS}} (yoki `BPM`) ni yozing, va {{cmd:BEDIT}} da tahrirlayotgan blok, tanlangan havolaning bloki yoki siz nomlagan blok uchun **Parametrlar boshqaruvchisi** ochiladi.

- **Parametrlar**: nom, tur (son, uzunlik, burchak, soni, ha/yoʻq) va qiymat yoki boshqa parametrlarga bogʻliq formula (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Natija}} hisob natijasini koʻrsatadi. Ishlamaydigan formula yoki turiga mos kelmaydigan qiymat (1,5 ta soni) rad etiladi va boshqaruvchi sababini aytadi; boshqa hech narsa oʻzgarmaydi.
- **Koʻrinish parametrlari**: {{ui:Koʻrinish parametrini qoʻshish}} birinchi holati bilan bitta yaratadi. Har bir holatni nomini oʻzgartirish, olib tashlash (oxirgisi qoladi) yoki “qachon koʻrsatiladi” raqamini berish mumkin. Formula holatni parametrlardan tanlaydi (raqami mos keladigan holat, aks holda roʻyxatdagi oʻsha oʻrindagi holat); formula boʻlmasa, har bir havola oʻz holatini tanlaydi.
- **Obyektlarni holatga joylashtirish**: blok muharririda obyektlarni tanlang, {{cmd:BPARAMS}} ni yozing va holatda {{ui:Tanlangan obyektlarni shu yerga qoʻyish}} tugmasini bosing. Hech bir koʻrinish parametri roʻyxatga kiritmagan obyektlar doim koʻrinadi.
- **Bu havola**: tanlangan havoladan boshlansa, boshqaruvchi shu havolaning oʻz qiymatlari va holatlarini ham koʻrsatadi.

Blok muharriridan tashqarida har bir oʻzgarish bitta ortga qaytarish qadami. Blok muharririda oʻzgarishlar muharrirniki: {{ui:Blokni saqlash}} ularni saqlaydi. `-BPARAMS` buyrugʻi buyruq satrida xuddi shuni soʻraydi.

**Faylda.** DWG va DXF parametrlarni, qaysi obyekt qaysi holatda ekanini va har bir havolaning oʻz qiymatlarini CadCraft ning oʻz yozuvlarida saqlaydi; faylni CadCraft da qayta ochsangiz, hammasi qaytadi. Boshqa dastur har bir havolani barcha obyektlari bilan bitta blok sifatida koʻradi, chunki DWG da har bir blok oʻz turi boʻyicha bittadan koʻp boʻlmagan koʻrinish parametriga ega boʻla oladi. Boshqa dastur koʻchirgan havola yoki oʻzgartirgan obyektlari boʻlgan blok endi mos kelmaydigan qismlarisiz qaytadi (hech narsa taxmin qilinmaydi).
