---
title: Import qilishdagi birliklar: fayl oʻz birliklarini bildiradi yoki avval soʻraladi
summary: Chizmaga keltirgan faylingiz oʻz birliklarini bildirsa, CadCraft ularni aylantiradi va bu haqda xabar beradi. Bildirmasa, CadCraft biror narsani joylashtirishdan oldin soʻraydi va bu fayl uchun javobingizni eslab qoladi.
keywords: birliklar, import, insert, xref, attach, XATTACH, INSERT, OBJ, DWG, DXF, nuqtalar buluti, kutubxona elementi, millimetrlar, metrlar, dyuymlar, futlar, masshtab, notoʻgʻri oʻlcham, juda katta, juda kichik, 1000 marta, soʻrash, eslab qolingan, INSUNITS
from: 558f1293
---

## Nima qilasiz

Faylni chizmaga keltiring va u toʻgʻri oʻlchamda kelishiga ishonch hosil qiling.

## Qadamlar

1. Faylni odatdagidek keltiring: `INSERT` › Fayl, `XATTACH`, `POINTCLOUDATTACH` yoki Kutubxona panelidagi {{ui:Fayllar}}.
2. Agar fayl oʻz birliklarini bildirsa, hech narsa soʻralmaydi. Buyruq satri fayl qaysi birliklarni bildirishini va ular chizmanikidan farq qilsa, qoʻllanilgan masshtabni aytadi.
3. Agar bildirmasa, dialog faylning **birliklarini** soʻraydi. Fayldagi bir birlik nimaligini tanlang va {{ui:Ushbu birliklardan foydalanish}} ni bosing. Javobingizgacha hech narsa joylashtirilmaydi.
4. {{ui:Bekor qilish}} (yoki {{key:Esc}}) hech narsa keltirmaydi.

## Qaysi fayllar oʻz birliklarini bildiradi

- **DWG va DXF**: chizmaning kiritish birliklari (`$INSUNITS`). Ularsiz fayl haqida soʻraladi.
- **Nuqtalar buluti**: koordinatalar tizimi bilan LAS va LAZ, E57, PTX va PLY oʻz birliklarini bildiradi. Boshqalar haqida soʻraladi.
- **OBJ**: hech qachon birliklarni bildirmaydi. Sizdan soʻraladi.
- **glTF va GLB**: metrlarda, formatning oʻz qoidasiga koʻra.
- **Rasmlar**: oʻz oʻlchami yoʻq. `IMAGEATTACH` kenglikni soʻraydi va shu faylga oldin bergan kengligingizni taklif qiladi.
- **Skanerlar**: zichligini (dyuymdagi nuqtalar) bildiradigan skaner chizmaning birliklarida haqiqiy oʻlchamida keladi; `SCANATTACH` baribir kenglikni soʻraydi.
- **Nuqtalar buluti qoʻshimchasi**: birligini bildirmagan faylli bulutni qurganingizda soʻraydi va bulut raqamlarini oʻzi olib yuradigan birlikda belgilaydi.

## Yaxshi bilish kerak

- DWG yoki DXF ni oʻz chizmasi sifatida ochish hech narsani soʻramaydi: buyruq satri fayl qaysi birliklarni bildirishini yoki hech qaysisini bildirmasligini aytadi. {{ui:Xossalar}} chizmaning birliklarini belgilaydi.
- Agar bu chizmaning ham birliklari boʻlmasa, fayl aylantirilmaydi: u raqam-raqam joylashtiriladi va buyruq satri buni aytadi.
- Javob shu kompyuterda bu fayl uchun, har bir CadCraft ilovasida eslab qolinadi. Keyingi safar kelganda sizdan soʻralmaydi va buyruq satri eslab qolingan birliklar ishlatilganini aytadi.
- Yana soʻralish uchun: buyruqlar paneli ({{key:Mod+K}}) › **Import qilingan fayllarning birliklari haqida yana soʻrash**.
