---
title: Sinflar bilan chizmani tartiblash
summary: Sinflar obyektlarni qatlamlar boʻylab ikkinchi usulda tartiblaydi (Yoritish-Armatura-Nuqta): ularni koʻrsating va yashiring, rang, chiziq turi, qalinlik, toʻldirish va matn uslubini bering, obyektlar ularni "sinf boʻyicha" olishi mumkin va yangi obyektlar qaysi sinfga tushishini belgilang.
keywords: sinf, sinflar, SINFLAR, CLS, CLASS, sinf boʻyicha, ByClass, faol sinf, yaratishda qoʻllash, Yoʻq, loyiha qatlami, qatlam masshtabi, balandlik, Vectorworks
from: 672de9cb
---

Qatlamlar obyekt chizmada *qayerga* tegishli ekanini bildiradi; sinflar esa u *nima* ekanini bildiradi. `Qavat 1` qatlamidagi devor `Devorlar-Tashqi` sinfida boʻlishi mumkin, `Shift` qatlamidagi nuqtaviy chiroq esa `Yoritish-Armatura-Nuqta` sinfida. Siz barcha chiroqlarni barcha qatlamlarda bir vaqtning oʻzida yashirishingiz yoki tashqi devorlarni qalinroq chop etishingiz mumkin, hech narsani qatlamlar orasida koʻchirmasdan.

Har bir obyekt **Yoʻq** sinfidan boshlanadi. Oʻz sinflari boʻlmagan chizma avvalgidek ishlaydi.

## Sinflar panelini oching

`CLASSES` (yoki `CLS`) yozing va {{key:Enter}} ni bosing, yoki {{ui:Koʻrinish}} guruhining {{ui:Koʻproq}} menyusidan {{ui:Sinflar…}} ni tanlang. Panel chizma ustida ochiladi va siz chizayotganingizda ochiq qoladi.

- **Sinf qoʻshish:** uning nomini yuqoridagi maydonga yozing va {{key:Enter}} ni bosing. `-` daraja hosil qiladi: `Yoritish-Armatura-Nuqta` `Yoritish-Armatura` ostida, u esa `Yoritish` ostida turadi; yetishmayotgan darajalar siz uchun qoʻshiladi.
- **Koʻrsatish yoki yashirish:** sinf yonidagi koʻz. Sinfni yashirish undan pastdagi barcha sinflarni ekranda va qogʻozda yashiradi.
- **Faol sinf:** yumaloq tugma. Siz chizgan yangi obyektlar faol sinfga tushadi.
- **Sinfni tanlash:** uning nomini bosing. Roʻyxat ostidagi tugmalar va sozlamalar unga taalluqli ishlaydi.

Har bir qatordagi oxirgi raqam shu sinfdagi obyektlar sonini bildiradi (modelda, varaqlarda va blok taʼriflari ichida).

## Obyektlarni sinfga joylashtirish

Obyektlarni tanlang, panelda sinfni tanlang va {{ui:Sinfni belgilash}} ni bosing. Avval {{ui:Sinf boʻyicha}} ni belgilang, shunda ular rang, chiziq turi, qalinlik, toʻldirish va matn uslubini sinfdan oladi. Quyidagilarni ham qilishingiz mumkin:

- obyektlar tanlanganda `CLASS` yozing va sinf nomini kiriting (yangi nom sinf yaratadi);
- hech narsa tanlanmaganda `CLASS` yozing va faol sinfni belgilang; `?` sinflarni hisoblari bilan sanab beradi;
- Xossalar panelidagi {{ui:Sinf}} boʻlimidan foydalaning: sinf va rang, chiziq turi va qalinlik uchun {{ui:… sinf boʻyicha}} kalit (toʻldirish shtrixlar uchun, matn uslubi matn uchun);
- `QSELECT` bilan sinf boʻyicha tanlang: {{ui:Sinf}} xossasini tanlang.

{{ui:Obyektlarini tanlash}} ochiq varaqda (yoki modelda) tanlangan sinfning har bir obyektini tanlaydi.

## Obyekt qanday chizilishi: obyekt, sinf, qatlam

Obyektning rangi, chiziq turi, qalinligi, toʻldirishi va matn uslubi qatlam boʻyicha boʻlganidek, **sinf boʻyicha** boʻlishi mumkin. CadCraft quyidagi tartibda qaraydi:

1. Obyektning oʻz qiymati, agar bu qiymat sinf boʻyicha boʻlmasa.
2. Sinfning qiymati, agar obyekt uni sinf boʻyicha olsa va sinfda u boʻlsa.
3. Qatlamning qiymati.

Rangi (yoki chiziq turi …) {{ui:Oʻrnatilmagan}} boʻlgan sinf obyektni qatlamiga uzatadi. Sinfni tanlang va uning {{ui:Rang}}, {{ui:Chiziq turi}}, {{ui:Chiziq qalinligi}}, {{ui:Toʻldirish (shtrixlar)}} va {{ui:Matn uslubi}} ni tugmalar ostida belgilang. {{ui:Yaratishda qoʻllash}} ni belgilasangiz, shu sinfda chizilgan yangi obyektlar ularning hammasini sinf boʻyicha oladi.

Paneldagi har bir oʻzgarish bitta {{ui:Ortga qaytarish}} qadamidir.

## Nomini oʻzgartirish va oʻchirish

{{ui:Qayta nomlash}} nomni joyida tahrirlaydi: saqlash uchun {{key:Enter}}, chiqish uchun {{key:Esc}} ni bosing. Undagi sinflar ergashadi (`Yoritish` `Yorugʻlik` boʻlsa, `Yoritish-Nuqta` `Yorugʻlik-Nuqta` boʻladi), ularning obyektlari va koʻrinish bekor qilishlari ham shunday.

{{ui:Oʻchirish}} sinfni va undan pastdagi barcha sinflarni olib tashlaydi. Ularning obyektlari **Yoʻq** ga koʻchadi. Bitta {{ui:Ortga qaytarish}} hammasini qaytaradi. **Yoʻq** ni qayta nomlab yoki oʻchirib boʻlmaydi.

## Loyiha qatlamlari

{{ui:Loyiha qatlamlari}} ostida har bir qatlam masshtab (`1:50`) va balandlik olishi mumkin. Loyiha qatlami oddiy qatlam: model fazosi va varaqlar avvalgidek ishlaydi, masshtab va balandlik esa ulardan foydalanadigan vositalar uchun chizma bilan saqlanadi.

## DWG va DXF fayllarda

Sinflar CadCraft saqlaydigan har bir DWG versiyasida va DXF da (R12 va 2000) saqlanadi. Har bir obyektning sinfi uning oʻz kengaytirilgan maʼlumotidir (ilova `CADCRAFT_CLASS`), shuning uchun AutoCAD va boshqa dasturlar uni obyekt bilan birga saqlaydi. Sinflar roʻyxati, ranglari va koʻrinishi `CADCRAFT_CLASSES` nomli bitta ishlatilmagan blokda saqlanadi; agar boshqa dastur bu blokni tozalasa, CadCraft hali ham har bir obyektning sinfini topadi va sinflar standart sozlamalar bilan qaytadi.

Boshqa dasturlar sinflarni bilmaydi: ular har bir obyektni uning oʻz yoki qatlamining qiymatlari bilan chizadi.

Shuningdek qarang: [Koʻrinish viewportidagi sinf bekor qilishlari](topic:viewport-overrides) va [Chizmani qatlamlar bilan tartiblash](topic:layers).
