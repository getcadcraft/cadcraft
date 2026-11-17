---
title: Oʻzingizning tugmalaringiz (Mening asboblarim)
summary: Oʻz makroslaringizni ishga tushiradigan asboblar paneli tugmalarini qoʻshing, ularga tezkor tugmalar bering, ularni fayl sifatida ulashing va CUIx sozlash faylidan tugmalarni olib keling.
keywords: mening asboblarim, maxsus tugmalar, asboblar paneli tugmalari, makros, makroslar, cui, cuix, sozlash, menyu, tezkor tugmalar, klaviatura yorliqlari, diesel, ^c^c, tugmalarni import qilish, tugmalarni eksport qilish
from: 36618802
---

## Nima oʻrganasiz

Asboblar paneliga oʻz tugmalaringizni qanday qoʻyish, har biri AutoCAD uslubida yozilgan makrosni qanday ishga tushirishi, tugmaga qanday tezkor tugma berish va CUIx fayldagi tugmalarni qanday olib kelishni.

## Tugma qoʻshish

1. {{ui:Sozlamalar}} ({{key:Mod+,}}) ni oching va {{ui:CadCraft}} yorligʻida qoling. {{ui:Mening asboblarim}} ga aylantiring.
2. {{ui:Tugma qoʻshish…}} tugmasini bosing.
3. Oynani toʻldiring:
   - {{ui:Guruh}}: tugma qaysi asboblar paneli guruhiga tushishi, masalan `Mening asboblarim`. Yangi nom yangi guruh yaratadi.
   - {{ui:Yorliq}}: tugmadagi soʻzlar.
   - {{ui:Makros}}: u nimani yozishi, masalan `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tezkor tugma}}: katakchani bosing va tugmalarni bosing, masalan {{key:Ctrl+Alt+B}}.
   - {{ui:Belgi}}: 64 KB dan oshmaydigan PNG yoki SVG rasm, yoki hech narsa (yulduzcha koʻrinadi).
4. {{ui:Saqlash}} tugmasini bosing.

Tugma asboblar panelining oxirida, oʻz guruhida paydo boʻladi. Uni ishga tushirish uchun bosing yoki tezkor tugmasini bosing. Roʻyxatdagi {{ui:Tahrirlash}} va {{ui:Oʻchirish}} uni oʻzgartiradi yoki olib tashlaydi.

## Makros yozish

Makros — buyruq qatorida yozadigan narsangiz, bir nechta belgi bilan:

| Belgi | Maʼnosi |
|---|---|
| `^C` | Ishlayotgan narsani bekor qiladi (`^C^C` odatiy boshlanish) |
| `;` yoki boʻshliq | {{key:Enter}} |
| `\` | Sizni kutadi: bosish yoki kiritilgan javob, soʻng makros davom etadi |
| buyruq oldidagi `_` yoki `.` | Qabul qilinadi va eʼtiborsiz qoldiriladi (xalqaro va oʻrnatilgan nomlar) |
| boshida `*` | Har safar tugaganda qayta ishlaydi, {{key:Esc}} bosguncha |
| `^O`, `^G` | Ortho, setkani yoqadi yoki oʻchiradi |
| `$M=` | Qolgani DIESEL. Faqat `$(if,…)`, `$(getvar,…)`, `$(=,…)` va `$(eq,…)` oʻqiladi; boshqasini ishlatgan tugma buni aytadi va hech narsa qilmaydi |

Misollar:

- `^C^C_line;0,0;@100,0;;` koordinatalar boshidan 100 uzunlikdagi chiziq chizadi.
- `^C^C_circle;\25;` markazni soʻraydi, soʻng u yerda radiusi 25 boʻlgan aylana chizadi.
- `^C^C_turnright` koʻrinishni 90° oʻngga buradi.

## Tezkor tugmalar

Tezkor tugmaga {{key:Mod}} (Ctrl, yoki Mac da Cmd) yoki {{key:Alt}} bilan harf yoki raqam kerak, yoki boʻsh funksiya tugmalaridan biri: {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Oʻz-oʻzidan harflar buyruq qatoriga boradi. CadCraft, ilova yoki brauzer allaqachon ishlatadigan tugmalar (masalan {{key:Ctrl+S}} yoki {{key:Ctrl+Z}}) va boshqa tugmada bor tugmalar rad etiladi, katakchada esa sabab yoziladi.

## Tugmalaringizni ulashing

- {{ui:Eksport…}} har bir guruh va tugmani (rasm va tezkor tugmalar bilan) `my-tools.json` sifatida saqlaydi.
- {{ui:Import…}} shunday fayldagi guruhlarni sizniki ortidan qoʻshadi. Siz ishlatgan guruh nomi "(2)" oladi; toʻqnashadigan tezkor tugma olib tashlanadi va panel buni aytadi.

## CUIx fayldan tugmalarni olib kelish

1. {{ui:CUIx import qilish…}} tugmasini bosing va `.cuix` faylni tanlang.

Uning asboblar paneli va lenta panellari guruhlarga aylanadi, har bir tugma makrosi va rasmi (PNG, yoki PNG ga aylantirilgan BMP) bilan. Uning tezkor tugmalari oʻz guruhida, har bir tugma oʻz kaliti bilan keladi; buyruq taxalluslari {{ui:Taxalluslar}} guruhida keladi. Panel nima kelganini roʻyxatlaydi.

:::note
Fayl faqat oʻqiladi. CadCraft da boʻlmagan buyruqlar nomi bilan roʻyxatlanadi, taxmin qilinmaydi: ularning tugmalari bosilganda buni aytadi. Yuqoridagi bir necha funksiyadan tashqari DIESEL, menyular, sichqoncha tugmalari va ish maydonlari oʻqilmaydi.
:::

## Yaxshi bilish kerak

- Tugmalar chizmalarda emas, shu brauzerda (yoki bu ish stoli ilovasida) saqlanadi.
- Tugma buyruq qatori orqali ishlaydi, shuning uchun u kiritgan narsadek ortga qaytariladi: ishlagan har bir buyruq uchun bitta {{key:Mod+Z}}.
