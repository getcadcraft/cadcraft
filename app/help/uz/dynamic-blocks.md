---
title: Dinamik bloklar
summary: CadCraft DWG dagi dinamik bloklar bilan nima qiladi: ular oʻz haqiqiy nomini saqlaydi, saqlangan holatini koʻrsatadi, koʻrinish holatlarini almashtiradi, boshqa qiymatlarini koʻrsatadi va saqlanganda dinamik boʻlib qoladi.
keywords: dinamik blok, dinamik bloklar, koʻrinish, koʻrinish holati, aylantirish, choʻzish, qidiruv, parametrlar, maxsus, blok xossalari, *u bloklar, dinamik
from: 26b6aa80
---

## Nima ishlaydi

Dinamik bloklari bor DWG ochilganda ular shu darajagacha ishlaydi:

- **Haqiqiy nomlari.** Dinamik blok {{ui:Blocks}} panelida oʻz nomi bilan ("Receptacle", "Sink") koʻrsatiladi, nomsiz `*U` blok sifatida emas.
- **Saqlangan holati.** Har bir havola boshqa programma koʻrsatgan narsani aynan koʻrsatadi: qanday koʻrinish holatiga qoʻyilgan boʻlsa, saqlangandek choʻzilgan yoki aylantirilgan.
- **Koʻrinish holatini almashtirish.** Bitta havolani tanlang (yoki bir xil blokdan bir nechtasini), {{ui:Properties}} ni oching va {{ui:Custom}} boʻlimida {{ui:Visibility}} roʻyxatidan boshqa holatni tanlang. Havola shu holatni darhol koʻrsatadi, atributlari ham: holat yashiradiganlari yoʻqoladi, u koʻrsatadiganlari qiymatlari bilan paydo boʻladi. Havola hech bir qiymatni yoʻqotmaydi, shuning uchun hech narsa boʻsh qolmaydi; {{ui:Properties}} yashirilganlarini "yashirilgan" deb belgilab koʻrsatadi. {{key:Mod+Z}} eski holatni bir qadamda qaytaradi.
- **Ushlagichlar.** Tanlangan dinamik blok oʻz parametrlari turgan joyda oʻz ushlagichlarini koʻrsatadi: koʻrinish holati uchun kichik uchburchak (roʻyxat uchun bosing), masofa uchlarida strelkalar, aylantirish uchun ikki tomonlama strelka. Hozir faqat koʻrinish ushlagichi ishlaydi; boshqalari buni holat satrida aytadi.
- **Boshqa qiymatlar, faqat oʻqish uchun.** Koʻrinish roʻyxati ostida {{ui:Custom}} blokning masofalari, tekislash burchaklari, aylantirish holatlari va nuqtalarini chizma saqlagancha koʻrsatadi.
- **Koʻrinish holatlarini tahrirlash.** Blokni {{cmd:BEDIT}} bilan oching: muharrir bitta holatni koʻrsatadi, uning nomi chizma ustidagi satrda turadi (u yerda boshqasini tanlang). {{cmd:BVSTATE}} yozing: almashtirish, qoʻshish (hammasini yashirish, hammasini koʻrsatish yoki koʻrinayotganini saqlash), nomini oʻzgartirish yoki oʻchirish uchun. {{cmd:BVHIDE}} tanlangan obyektlarni koʻrinayotgan holatda yashiradi; {{cmd:BVSHOW}} yashirilganlarni xiralashtirib koʻrsatadi, shunda ularni qaytarish uchun bosishingiz mumkin. Blokni saqlang: qayta nomlangan holatga oʻrnatilgan havolalar uni yangi nomi bilan saqlaydi, oʻchirilgan holatga oʻrnatilganlar birinchi holatni koʻrsatadi.
- **Dinamik boʻlib qoladi.** Chizma kelgan versiyada DWG sifatida saqlanganda bloklar tanlagan holati bilan dinamik boʻlib qoladi: boshqa programma ularni xuddi shu dinamik bloklar sifatida ochadi. Siz tahrirlagan koʻrinish holatlari ham saqlanadi: ularning yangi nomlari, qoʻshgan holatlaringiz va har birining nimani koʻrsatishi.

## Faqat oʻqish mumkin yoki hali yoʻq

| Hali yoʻq | Hozir oʻrniga |
|---|---|
| Masofalar, burchaklar yoki aylantirishlarni oʻzgartirish (choʻzish, siljitish, aylantirish amallari) | Ular {{ui:Custom}} da faqat oʻqish uchun koʻrsatiladi; blokni yaratgan programmada tahrirlang. |
| Qidiruv, XY, aylantirish va qutb parametrlari | Hali oʻqilmagan: havola saqlangandek koʻrsatiladi. |
| Masofa, aylantirish va nuqta ushlagichlarini sudrash | Ular parametrlar qayerda ekanini koʻrsatadi; koʻrinish ushlagichi va Xossalardagi {{ui:Visibility}} roʻyxati holatlarni almashtiradi. |
| Dinamik bloklar yaratish (parametr qoʻshish yoki hech holatga ega boʻlmagan blokka koʻrinish holatlari qoʻshish) | CadCraft’da yaratgan bloklaringiz oddiy bloklar; {{cmd:BPARAMETER}} buni aytadi. |
| Koʻrinish holatlari bor blok obyektlarini blok muharririda qoʻshish yoki oʻchirish | Blok keyin oddiy blok sifatida saqlanadi (muharrir yopilganda buni aytadi). |
| Ularni boshqa DWG versiyasida yoki DXF da dinamik saqlash | Ular tanlagan holatini koʻrsatuvchi oddiy bloklar sifatida saqlanadi va saqlash buni aytadi. |

:::note
{{cmd:BEDIT}} da obyektlarni siljitish yoki oʻzgartirish koʻrinish holatlari bor blokni dinamik qoldiradi. Holatlari boʻlmagan blok yoki muharrirda obyektlari qoʻshilgan yoki oʻchirilgan blok oddiy blokka aylanadi.
:::
