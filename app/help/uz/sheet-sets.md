---
title: Varaqlar toʻplamlari
summary: Koʻp chizmalardan varaqlarni bitta raqamlangan roʻyxatga yigʻing, sarlavha bloklarini toʻplamdan toʻldiring, ularni bitta PDF sifatida nashr qiling va toʻplamni zip arxivga joylang.
keywords: varaqlar toʻplami, varaqlar toʻplami menejeri, ssm, sheetset, ccsheets, dst, varaqlar roʻyxati, varaqlar indeksi, sarlavha bloki, maydonlar, nashr, qayta raqamlash, arxiv, etransmit, transmittal, kichik toʻplamlar, muqova varagi, chizmalar roʻyxati
from: 2c855720
---

## Nimalarni oʻrganasiz

Bir nechta chizma fayllaridan varaqlarni (maketlarni) **varaqlar toʻplamiga** qanday yigʻish, ularni raqamlash va nomlash, sarlavha bloklarini sizning yordamingizsiz toʻldirish, butun toʻplamni bitta PDF sifatida nashr qilish va hammasini yuborish uchun bitta zipga joylash.

Varaqlar toʻplami chizmalar joylashgan papkadagi `<name>.ccsheets` nomli kichik faylda turadi. Toʻplam fayli varaqlarni papka yoʻllari bilan sanab chiqadi, shuning uchun butun papkani koʻchirish yoki nusxalash mumkin.

:::note
Papkani oʻqish va yozish uchun Chrome yoki Edge (ular sahifaga siz tanlagan papkada ishlashga ruxsat bera oladi) yoki desktop ilova kerak. Boshqa brauzerlar toʻplamni faqat oʻqish rejimida ochadi: uni koʻrishingiz va nashr qilishingiz mumkin, toʻplam fayli esa saqlanish oʻrniga yuklab olinadi.
:::

## Toʻplamni boshlash

1. Chap paneldagi {{ui:Varaqlar toʻplami}} boʻlimini toping va uning {{ui:Toʻplam}} menyusini oching. {{cmd:SHEETSET}} (yoki `SSM`) ni kiritish ham sizni shu yerga olib boradi.
2. {{ui:Yangi toʻplam…}} ni tanlang. Toʻplamga nom bering, va xohlasangiz loyiha nomi va raqamini ham.
3. Chizmalarni saqlaydigan papkani tanlang. Toʻplam fayli shu yerga saqlanadi.

Toʻplamni keyinroq ochish uchun {{ui:Toʻplamni ochish…}} ni tanlang va xuddi shu papkani tanlang. Agar papkada bittadan koʻp toʻplam boʻlsa, CadCraft qaysi birini soʻraydi.

## Varaqlar qoʻshish

1. {{ui:Chizmadan varaqlar qoʻshish…}} ni tanlang va papkadagi chizmalardan birini tanlang.
2. CadCraft oʻsha chizmani fonda oʻqiydi (ekranda ochilmaydi) va uning varaqlarini sanab chiqadi. Kerakligini belgilang va {{ui:OK}} ni bosing.
3. Varaqni tanlang va raqam hamda sarlavha berish uchun {{key:F2}} ni bosing (yoki {{ui:Nomini oʻzgartirish va raqamlash…}}), masalan `A-101` va `Qavat rejasi`.

{{ui:Shablondan yangi varaq…}} boshqa chizmaning varagidan (uning sarlavha bloki va koʻrinish oynalari bilan) yangi chizma yaratadi, yangi varaq nomi bilan nomlaydi va qoʻshadi. Toʻplam shablon sifatida ishlatilgan chizmani eslab qoladi.

## Toʻplamni tartibga solish

- **Kichik toʻplamlar** varaqlarni guruhlaydi, masalan Arxitektura › Rejalar: joyini tanlang va {{ui:Yangi kichik toʻplam…}} ni tanlang.
- **Tartib**: varaqni roʻyxatning boshqa joyiga sudrang, yoki kichik toʻplamga sudrab oʻsha yerga koʻching. Klaviatura bilan: uni tanlang va {{key:Alt+Up}} yoki {{key:Alt+Down}} ni bosing.
- **Varaqni ochish**: ustiga ikki marta bosing (yoki {{key:Enter}}). Uning chizmasi oʻz yorligʻida, oʻsha varaqda ochiladi.
- **Olib tashlash**: uni tanlang va {{key:Delete}} ni bosing. Chizmaning oʻzi oʻzgarmaydi.
- **Bekor qilish**: {{ui:Toʻplam oʻzgarishini bekor qilish}} va {{ui:Toʻplam oʻzgarishini qayta bajarish}} toʻplamda oʻzgartirgan narsalaringiz boʻylab yuradi.
- **Qayta raqamlash**: {{ui:Varaqlarni qayta raqamlash…}} har bir varaqni, yoki bitta kichik toʻplamning varaqlarini roʻyxat tartibida raqamlaydi: prefiks, boshlanish va qadam (`A-` va `101` A-101, A-102 … ni beradi).

Har bir oʻzgartirish darhol toʻplam faylida saqlanadi.

## Varaq maydonlaridan raqamlash

Har bir raqamni qoʻlda berish oʻrniga, raqamni varaq maydonlaridan qoidaga koʻra yasashga ruxsat bering, shunda boshqa qavatga yoki boʻlimga koʻchgan varaq yangi raqamni oʻzi oladi.

1. Har bir varaqqa uning maydonlarini bering: uni tanlang, {{ui:Nomini oʻzgartirish…}} ni bosing va {{ui:Bu varaqning maydonlari}} ichida har qatorga bittadan yozing, masalan `DISCIPLINE = A` va `LEVEL = 1`. Butun toʻplam uchun umumiy maydon (masalan `DISCIPLINE = A`) buning oʻrniga toʻplamning {{ui:Xususiyatlar…}} ga yozilishi mumkin.
2. Panel menyusini oching va {{ui:Raqamlash qoidasi…}} ni bosing.
3. Qoidani yozing, masalan `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` boshqa maydonlari bir xil oʻqiladigan varaqlar orasida sanaydi, shuning uchun 1-qavat A-101, A-102 oladi va 2-qavat yana A-201 dan boshlanadi. `{SEQ:2}` uni ikki xonali qilib yozadi; `{SUBSET}` varaq qaysi kichik toʻplamda ekanining nomi.
4. Maydon oʻzgarganda nima boʻlishini tanlang: {{ui:Varaqlarni qayta raqamlash}} har bir oʻzgarishdan keyin raqamlarni qoida boʻyicha saqlaydi; boshqa tanlov ularni hozir bir marta raqamlaydi.

Qoida toʻplam faylida saqlanadi. U oʻzi qayta raqamlayotganda, raqamini emas, varaqning maydonlarini oʻzgartiring.

## Sarlavha bloklarini toʻplamdan toʻldirish

Sarlavha bloki matnini toʻplamdan oladi, agar uning atributlari maydon nomi bilan belgilangan boʻlsa:

| Teg | Nimani koʻrsatadi |
|---|---|
| `SHEETNUMBER` (yoki `SHEET_NO`, `DWG_NO`) | Varaq raqami |
| `SHEETTITLE` (yoki `TITLE`, `SHEET_TITLE`) | Varaq sarlavhasi |
| `SHEETDESC` | Varaq tavsifi |
| `PROJECTNAME` (yoki `PROJECT`) | Loyiha nomi |
| `PROJECTNUMBER` (yoki `PROJECT_NO`, `JOB_NO`) | Loyiha raqami |
| `SHEETSETNAME` | Toʻplam nomi |
| `SHEETINDEX`, `SHEETCOUNT` | "12 tadan 3-si", va 12 |
| Oʻzingiz, masalan `CLIENT` | {{ui:Maydonlarni belgilash…}} da siz yozgan narsa |

{{ui:Maydonlarni belgilash…}} loyiha nomi va raqamini hamda oʻzingizning maydonlaringizni saqlaydi, har biri `NAME = value` shaklida bir qatorda.

{{ui:Chizmalarni yangilash}} varaqlar raqamlarini, sarlavhalarini va maydonlarini toʻplamdagi har bir chizmaning sarlavha bloklariga yozadi va har bir varaq yorligʻini toʻplam aytganidek qayta nomlaydi (standart boʻyicha raqam va sarlavha, masalan `A-101 Qavat rejasi`; {{ui:Maydonlarni belgilash…}} › {{ui:Maket yorligʻi nomlari}} buni oʻzgartiradi). Har bir chizma oʻz joyida saqlanadi, oʻz formati va versiyasida. Varaqlarni qayta raqamlaganingizdan yoki nomini oʻzgartirganingizdan keyin uni yana ishga tushiring, va yorliqlar hamda sarlavha bloklari moslashadi.

## Muqova varagidagi varaqlar roʻyxati

Muqova varagini roʻyxatda tanlang va {{ui:Varaqlar roʻyxatini shu varaqqa qoʻyish}} ni tanlang. Har bir varaqning jadvali (raqam va sarlavha, kichik toʻplami ostida) varaqning yuqori chap burchagiga qoʻyiladi. {{ui:Chizmalarni yangilash}} va {{ui:PDF ga nashr qilish}} uni yangi saqlaydi. U bitta blok: `CC_SHEETLIST`; uni boshqa blok havolasi kabi koʻchiring.

## Toʻplamni nashr qilish

{{ui:PDF ga nashr qilish}} bitta PDF yaratadi: har bir varaq uchun bitta sahifa, toʻplam tartibida, har bir varaqning oʻz qogʻoz oʻlchamida, va har bir varaq uchun xatchoʻp bilan ("A-101 — Qavat rejasi"). Kichik toʻplam tanlanganda, CadCraft faqat shu kichik toʻplamni nashr qilishni soʻraydi. PDF dagi sarlavha bloklari chizmalarni yangilamasdan oldin ham toʻplamdan toʻldiriladi; nashr chizmalarni oʻzgartirmaydi. PDF yuklab olinadi.

{{ui:DWG ga nashr qilish…}} har bir varaqni oʻz DWG fayli sifatida yozadi (DWG 2018): model va oʻsha bitta varaq, sarlavha bloki toʻplamdan toʻldirilgan, raqami va sarlavhasi bilan nomlangan (`A-101 Level 1 floor plan.dwg`). {{ui:DWG}} ni yoki yonidagi toʻplam PDF uchun {{ui:DWG + PDF}} ni tanlang. `publish.json` har bir faylni hajmi va SHA-256 bilan sanab chiqadi. Toʻplam papkasiga yozish mumkin boʻlganda (CadCraft Studio yoki brauzerda tanlangan papka) fayllar `<set name> - published` nomli papkaga tushadi; aks holda ular bitta zip sifatida yuklab olinadi. Koʻrinish oynasi [sinf almashtirishlari](topic:viewport-overrides) har bir DWG bilan birga oʻtadi.

## Toʻplamni arxivlash

{{ui:Zip arxiv sifatida arxivlash}} toʻplam faylini, u ishlatadigan har bir chizmani va ular bogʻlangan narsalarni (bogʻlangan chizmalar, ularning bogʻlangan chizmalari va rasmlar) papkalarini saqlab zipga joylaydi, hamda har bir faylni sanab chiqadigan `Transmittal.txt` ni qoʻshadi. Toʻplam papkasida boʻlmagan havola u yerda yoʻqolgan deb koʻrsatiladi. Havolalar chizmadan yoʻli boʻyicha, soʻng papka ichidagi istalgan joyda fayl nomi boʻyicha topiladi.

## Toʻplam fayli

`.ccsheets` fayli har qanday matn muharririda oʻqiladigan JSON:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Yoʻllar toʻplam papkasiga nisbatan, papkalar orasida `/` bilan. CadCraft uni ochganda tekshiradi: mutlaq yoʻl, faylsiz yoki yorliqsiz varaq, yoki oddiy boʻlmagan matn chiqarib tashlanadi va tarix buni aytadi.

## Muammolarni bartaraf etish

| Nimani koʻrasiz | Sababi | Nima qilish kerak |
|---|---|---|
| "Bu papka bu yerda faqat oʻqish uchun" | Brauzer papkaga yoza olmaydi | Chrome yoki Edge, yoki desktop ilovadan foydalaning; shu orada {{ui:Toʻplam faylini yuklab olish}} oʻzgarishlaringizni saqlaydi |
| Varaq PDF dan tushib qoldi: "has no layout named …" | Varaqning yorligʻi chizmada nomi oʻzgartirilgan yoki oʻchirilgan | Chizmani oching va yorliqlarini tekshiring; varaqni olib tashlang va qayta qoʻshing |
| Sarlavha bloki boʻsh qoladi | Uning atributlari boshqa teglarga ega | Atribut teglarini yuqoridagi maydon nomlariga qayta nomlang (BEDIT) |
| "already has a layout named … so that tab was not renamed" | Bitta chizmaning ikki varagi bir xil yorliq nomini oladi | Ulardan biriga boshqa raqam yoki sarlavha bering |
