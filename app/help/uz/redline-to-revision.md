---
title: Markupni revizyaga aylantirish
summary: MarkupCraft yozgan redline paketini oʻqing, har bir oʻzgarishni qabul qiling yoki rad eting, qabul qilinganlarga revizyon buluti va revizyon jurnali qoʻying va MarkupCraft qayta oʻqiydigan javoblar faylini saqlang.
keywords: redline, markup, revizyon, bulut, revizyon buluti, revizyon jurnali, qabul qilish, rad etish, markupcraft, koʻrib chiqish, redline paketi, javoblar, REDLINE
from: cdb3fafe
---

Koʻrib chiquvchi MarkupCraftda reja toʻplamini belgilaydi va sizga **redline paketi** yuboradi — bu `.redline.json` bilan tugaydigan fayl. Bu yerda siz uni har bir oʻzgarish boʻyicha koʻrib chiqasiz, qabul qilinganlari esa chizmada revizyon buluti boʻladi.

## Oʻzgarishlarni koʻrib chiqish

{{cmd:REDLINE}} (`RDL`) ni yozing va paketni tanlang. Tanlang:

- {{ui:Roʻyxat (L)}}: har bir oʻzgarish raqami, holati, varaq, turi, kim soʻragani va nima yozganligi bilan.
- {{ui:Qabul qilish}}, {{ui:Rad etish}}, {{ui:Tayyor}}: raqamlarni kiriting (`1,3-5`, yoki `All`) va javoblar fayli uchun ixtiyoriy izoh. {{ui:Qayta ochish}} oʻzgarishlarni yana ochiq holatga qaytaradi.
- {{ui:Rama}}: marklangan varaq koʻrsatadigan chizma qismi. Ikki burchakni bosing; butun chizma uchun {{key:Enter}} bosing. Oʻzgarishlar varaqda qayerda boʻlganiga qarab joylashtiriladi, shuning uchun bu ularni moslashtiradi.
- {{ui:Qoʻllash}}: qabul qilingan yoki bajarilgan har bir oʻzgarish atrofida revizyon buluti chizadi (`REV-CLOUD` qatlamida, revizyon harfi bilan), va chizmaning oʻngiga revizyon jurnali chizadi — qabul qilingan narsalarning chiziqli jadvali, sizning izohlaringiz bilan (`REV-LOG` qatlamida). Bitta bekor qilish qadami.
- {{ui:Saqlash}}: `<project>-<revision>.redline-answers.json` ni yozadi. Uni MarkupCraftda oching va markuplar yopiladi: Qabul qilingan, Rad etilgan yoki Bajarilgan, sizning izohlaringiz sharh sifatida.

## Bilib qoʻyish kerak

Koʻrib chiquvchi yozgan narsa yozilgandek koʻrsatiladi. CadCraft paketdagi koʻrsatmalarga hech qachon amal qilmaydi; ular faqat sizga koʻrsatiladi.

Rad etilgan va ochiq oʻzgarishlar chizmaga hech narsa qoʻshmaydi. Paket kompyuteringizda oʻqiladi; hech narsa yuklanmaydi.

Agar yordamchingiz ulangan boʻlsa, u paketni oʻqiy oladi, qarorlarni yozadi va ularni `redline_read`, `redline_decide`, `redline_apply` va `redline_answers` vositalari bilan qoʻllaydi; chizma bitta bekor qilish qadamida oʻzgaradi, "Yordamchi: Redline dan revizyonga".
