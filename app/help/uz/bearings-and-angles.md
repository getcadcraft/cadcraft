---
title: Burchaklar va yoʻnalishlarni daraja, daqiqa, soniyada kiritish va koʻrsatish
summary: Yoʻnalishni geodezik azimut sifatida kiriting, masalan N45°23'30"E, yoki burchak soʻralgan joyda daraja-daqiqa-soniya shaklida; AUNITS bilan esa chizma burchaklarni qanday koʻrsatishini tanlang.
keywords: azimut, geodezik azimut, kvadrant azimuti, N45E, daraja daqiqa soniya, DMS, burchak, yoʻnalish, uchastka, uchastkalar, joylashtirish, traverse, AUNITS, ANGUNITS, burchak formati, qutb, toʻgʻri masofa, DIST
from: af805567
---

Burchak yoki yoʻnalish soʻraladigan har qanday joyda siz **kvadrant azimutini** yoki **daraja, daqiqa va soniyadagi** burchakni, oddiy daraja sonidan tashqari, yozishingiz mumkin.

## Azimutlar

Azimut shimol yoki janubni, 90° gacha boʻlgan burchakni, soʻng sharq yoki gʻarbni nomlaydi:

| Siz yozasiz | Yoʻnalish |
|---|---|
| `N45°23'30"E` yoki `N45d23'30"E` | shimoldan sharq tomon 45°23'30" |
| `S10-30-00W` yoki `S 10 30 W` | janubdan gʻarb tomon 10°30' (qismlar orasida chiziqcha yoki boʻshliq) |
| `N45.5E` | shimoldan sharq tomon 45.5° |
| `N`, `E`, `S`, `W` | toʻgʻri shimol, sharq, janub, gʻarb |

Harflar istalgan registrda boʻlishi mumkin. Ispancha interfeysda `O` ham gʻarbni bildiradi (oeste). `d` va `°` bir xil maʼnoda; `'` daqiqa, `"` soniya.

20 m uzunlikdagi uchastka chizigʻini N45°23'E yoʻnalishida chizish uchun {{cmd:LINE}} ni boshlang va birinchi nuqtani kiriting, soʻng `@20<N45d23'E` yozing. Bu {{cmd:ROTATE}} ning burchak soʻrovida va burchak soʻraydigan har bir boshqa soʻrovda, hamda {{ui:Dynamic input}} ning burchak katakchasida ham ishlaydi.

## Daraja, daqiqa, soniya

`45°23'30"`, `45d23'30"`, `45d30'` yoki `45d` — X oʻqidan soat strelkasiga qarshi yoʻnalishdagi burchak. `°` yoki `d` shart: `45-23-30` arifmetika sifatida oʻqiladi (45 − 23 − 30). Daqiqa va soniya 60 dan kichik boʻlishi kerak. Oddiy son, arifmetika bilan (`360/7`), ham ishlaydi.

## Burchaklar qanday koʻrsatiladi

{{cmd:AUNITS}} ni yozing (yoki {{ui:Properties}} › {{ui:Current settings}} ichida {{ui:Angle format}} ni tanlang) va tanlang:

- **Oʻnli daraja** (standart): `44.6083°`.
- **Daraja-daqiqa-soniya**: `44°36'30"`.
- **Geodezik azimutlar**: `N45°23'30"E`.

Aniqlik {{cmd:AUNITS}} uchun kiritganingizga bogʻliq: 0 daraja koʻrsatadi, 2 daqiqa, 4 soniya, 5 dan 8 gacha esa soniyaning kasr qismlarini qoʻshadi. Format {{cmd:DIST}} da, holat panelida, dinamik kiritishda va kuzatuv maslahatlarida, hamda {{ui:Properties}} dagi burchak katakchalarida koʻrinadi (tahrir qilinadigan katakcha yuqoridagi shakllarning istalgan birini qabul qiladi). Bu bitta bekor qilish qadami va DWG hamda DXF fayllarida saqlanadi (`$AUNITS`, `$AUPREC`); LISP uni `AUNITS` va `AUPREC` sifatida oʻqiydi va yozadi.
