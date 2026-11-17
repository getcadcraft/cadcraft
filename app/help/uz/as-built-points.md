---
title: As-built nuqtalarni tekshirish
summary: Geodezik guruh oʻlchagan nuqtalarni oʻqing va ularni chizmaning nuqtalari va bloklari bilan solishtiring: ruxsat etilgan chetlanish ichida yoki tashqarida, oʻlchanmagan, ortiqcha — chizmada belgilanadi va CSV hisobot sifatida yoziladi.
keywords: as built, as-built, asbuilt, survey, total station, nuqtalarni joylash, nuqtalarni qoʻyish, nuqtalar fayli, csv, txt, pnezd, penzd, xyz, ruxsat etilgan chetlanish, chetlanish, tekshirish, solishtirish, exportpoints, joylash nuqtalari
from: f7c35208
---

{{cmd:ASBUILT}} (taxallus ASB) — {{cmd:EXPORTPOINTS}} ning ikkinchi qismi: chizmaning nuqtalarini dala uchun eksport qilasiz, guruh ularni joylaydi va qurilganini oʻlchaydi, ASBUILT esa ularning faylini chizma bilan solishtiradi.

1. {{cmd:ASBUILT}} yozing va xuddi {{cmd:EXPORTPOINTS}} eksport qilgan nuqtalar va bloklarni tanlang ({{key:Enter}} har bir POINT ni oladi, EXPORTPOINTS dagidek).
2. **As-built nuqtalarni juftlang** **Raqam** boʻyicha (guruh sizning nuqta raqamlaringizni saqlagan: eksport qilgan birinchi raqamni kiriting) yoki **Eng yaqin** boʻyicha (ular oʻz oʻlchovlarini oʻzi raqamlagan: har bir loyiha nuqtasi eng yaqinini oladi).
3. Fayl birliklari va koordinatalarini eksport qilgandek kiriting (Chizma, Metr yoki Fut; Dunyo yoki UCS), va **ruxsat etilgan chetlanish** ni chizma birliklarida kiriting.
4. Guruhning CSV yoki TXT faylini tanlang. CadCraft uni CivilCraft kabi oʻqiydi: vergul, tabulyatsiya, nuqtali vergul yoki boʻshliq, ustunlarni nomlovchi sarlavha qatori yoki ustunlar soni boʻyicha PNEZD.

Buyruq qatorida necha nuqta juftlangani, nechtasi ruxsat ichida, tashqarida, oʻlchanmagan va ortiqcha ekani hamda eng katta masofa aytiladi. **Chizmada belgilansinmi?** Ha desangiz, nuqtalar **AS-BUILT** qatlamiga bitta bekor qilish qadami sifatida qoʻyiladi: har bir oʻlchov nuqtasida nuqta, yonida uning raqami va masofasi, hamda loyiha nuqtasidan ruxsatdan tashqaridagi har bir oʻlchovgacha qizil chiziq. CSV hisobot har bir nuqta bilan yuklab olinadi: loyiha va as-built koordinatalari, sharq, shimol va balandlikdagi farqlar hamda natija.

Shuningdek qarang: [BIM dasturlari uchun nuqtalar](topic:points-for-bim).
