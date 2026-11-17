---
title: Griplar va Xossalar yordamida tahrirlash
summary: Obyektlarni griplari bilan choʻzing, koʻchiring va oʻlchamini oʻzgartiring, hamda Xossalar panelida aniq uzunliklar, radiuslar, burchaklar va koordinatalarni kiriting.
keywords: griplar, xossalar, choʻzish, uzunlik, radius, koordinatalar, tahrirlash, tezkor xossalar, xossalar palitrasi, oʻzgartirish, qatlam, rang
from: f22541ba
---

## Nimani oʻrganasiz

Buyruqsiz obyektni oʻzgartirishning ikki tezkor usuli: uning **griplarini** suring yoki oʻng tomondagi **Xossalar** panelida yangi qiymatlar kiriting.

## Griplar

Buyruq bajarilmayotganda obyektlarni (bir vaqtda 200 tagacha) tanlasangiz, ularda kichik kvadratchalar paydo boʻladi. Bular griplar:

| Obyekt | Griplar |
|---|---|
| Chiziq | Ikkala uchi va oʻrtasi (butun chiziqni koʻchiradi) |
| Aylana | Markazi (uni koʻchiradi) va aylanadagi toʻrtta nuqta (radiusini oʻzgartiradi) |
| Yoy | Markazi va ikkala uchi (boshlanish va tugash joyini oʻzgartiradi) |
| Polichiziq | Har bir uchi |
| Matn, nuqta, blok havolasi | Qoʻyish nuqtasi |
| Ellips | Markazi |
| Oʻlcham | Aniqlovchi nuqtalari va oʻlcham chizigʻining joylashuvi |
| Koʻrinish oynasi | Markazi (uni koʻchiradi) va toʻrtta burchagi (oʻlchamini oʻzgartiradi) |

### Gripni koʻchirish

1. Chiziq chizing va uni bosing. Uchta grip paydo boʻladi.
2. Bir uchidagi gripni bosing. Holat satrida "Bu grip qayerga borishini bosing ({{key:Esc}} bekor qiladi). Ilashishlar va Ortho qoʻllanadi." yoziladi.
3. Krestchani siljiting. Oldindan koʻrinish uni kuzatib boradi.
4. Yangi joyni bosing yoki boshqa obyektdagi nuqtaga ilashtirib bosing.

Uchi koʻchadi, chiziqning qolgan qismi joyida qoladi. Gripni bosib ushlab turishingiz, suring va kerakli joyda qoʻyib yuborishingiz ham mumkin.

:::note
Gripning koordinatasini yozib boʻlmaydi. Aniq joy uchun nuqtaga ilashtiring yoki qiymatni Xossalar panelida kiriting.
:::

Gripni koʻchirishni bekor qilish uchun {{key:Esc}} yoki sichqonchaning oʻng tugmasini bosing.

## Xossalar

Oʻng panelda tanlangan narsaning xossalari koʻrsatiladi.

1. Chiziqni bosing. Panel sarlavhasida "Chiziq" yoziladi.
2. {{ui:Uzunlik}} maydonini bosing, `2500` yozing va {{key:Enter}} tugmasini bosing.

Endi chiziq aniq 2500 uzunlikda, boshlanish nuqtasi va burchagi saqlanadi. {{key:Enter}} yoki boshqa joyni bosish qiymatni qoʻllaydi; {{key:Esc}} eski qiymatni qaytaradi. Har bir oʻzgarish bitta bekor qilish qadami boʻladi, hatto bir vaqtda koʻp obyekt oʻzgarsa ham.

Maydonlar ifodalarni (`=2*45`) va birliklari bilan uzunliklarni (`3'6"`, `900mm`) qabul qiladi, har bir nuqtada X, Y va Z bor, bir nechta obyektni birga oʻzgartirish mumkin. Bularning hammasi [Xossalar paneli](topic:properties-panel) boʻlimida bayon etilgan.

## Odatiy xatolar

- **Griplar paydo boʻlmaydi.** Buyruq bajarilmoqda ({{key:Esc}} bosing), yoki 200 tadan ortiq obyekt tanlangan, yoki obyekt qulflangan qatlamda.
- **Gripsiz joyga bordi.** Ilashish uni ilib olgan. Ilashishlarni eʼtiborsiz qoldirish uchun bosayotganda {{key:Shift}} tugmasini ushlab turing.
- **Xossalarda yozish hech narsa qilmadi.** {{key:Enter}} yoki boshqa joyni bosing. Rad etilgan kiritish (nol yoki manfiy uzunlik va radius, qiymat boʻlmagan matn) maydonni qizil qiladi va sababini koʻrsatadi.
- **Xossalar maydoniga yozilgan harflar.** Maydonda kursor boʻlganda klavishalar shu yerga yoziladi. {{key:Enter}} yoki {{key:Esc}} bosing, soʻngra buyruqni yozing.
