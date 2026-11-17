---
title: Parametrlar va tenglamalardan foydalanish
summary: Oʻlchamlarga nom bering, ularni width / 2 kabi ifodalar bilan boshqaring va boshqariladigan oʻlchamga son kiritib, uni boshqaradigan narsani oʻzgartiring.
keywords: parametrlar, par, parametrlar menejeri, tenglamalar, ifodalar, oʻzgaruvchilar, ikki tomonlama, loyiha niyati, foydalanuvchi parametri, fx
from: 650b9844
---

## Har bir oʻlcham uchun bitta jadval

{{ui:Parametrlar}} paneli ({{ui:Parametrik}} guruhidagi {{ui:Parametrlar}} tugmasi yoki {{cmd:PARAMETERS}} buyrugʻini kiriting) har bir oʻlchovli cheklovni (`d1`, `rad1`, `dia1`, `ang1` yoki siz bergan nom) va oʻz parametrlaringizni birga roʻyxatlaydi. Har qanday nom har qanday ifodada ishlatilishi mumkin.

Har bir qatorda:

- **Nomi**: qayta nomlash uchun yangisini kiriting; uni ishlatadigan har bir ifoda unga ergashadi.
- **Ifoda**: son (`40`) yoki ifoda (`width / 2 + gap`). Unga yozing va {{key:Enter}} bosing: chizma unga ergashadi.
- **Qiymat**: u nimaga teng boʻlganini hisoblaydi. Ifoda boshqaradigan qatorda bu yerga ham son kiritishingiz mumkin: CadCraft uning orqasidagi parametrni hisoblaydi. `d1 = width / 2` boʻlsa, d1 ning qiymatiga `30` kiritsangiz, `width` 60 ga oʻrnatiladi.

Ikki parametr qiymatni boshqarsa (`width / 2 + gap`), qaysi birini oʻzgartirishni dialog soʻraydi. Har bir oʻzgarish bitta ortga qaytarish qadami ({{key:Mod+Z}}).

## Oʻzingizniki qoʻshing

1. {{ui:Parametrlar}} panelini oching.
2. Nom (`gap`) va qiymat (`10`) kiriting, soʻng {{ui:Qoʻshish}} ni tanlang.
3. Foydalaning: d1 ning ifodasiga `width / 2 + gap` kiriting va {{key:Enter}} bosing.

Nomlar harf yoki `_` bilan boshlanadi va harflar, raqamlar va `_` dan iborat boʻladi. Funksiya nomlari, `pi` va birlik nomlari nom boʻla olmaydi.

## Ifodalar

| Yozing | Maʼnosi |
|---|---|
| `+ - * / ^ %` | qoʻshish, ayirish, koʻpaytirish, boʻlish, daraja, qoldiq |
| `( )` | guruhlash |
| `sin cos tan asin acos atan atan2` | gradusdagi trigonometriya |
| `sqrt pow exp ln log abs sign` | ildizlar, darajalar, logarifmlar |
| `ceil floor int round min max` | yaxlitlash va chegaralar |
| `if(a > b, x, y)` | tanlov |
| `pi` | 3.14159… |

Sonlarda birlik boʻlishi mumkin: `25mm`, `1in`, `2'`, `90deg`. Birlikli uzunliklar millimetrga aylantiriladi, shuning uchun birliklardan faqat millimetrda oʻlchangan chizmalarda foydalaning; boshqa holatda oddiy sonlarni yozing.

## Buyruq qatorida

`-PARAMETERS` panelsiz xuddi shu ishni bajaradi: `N` yangi, `E` tahrirlash (oʻlchovli cheklov ham), `R` qayta nomlash, `D` oʻchirish, `?` roʻyxat.

## Rad etiladigan narsalar

- Oʻzini toʻgʻridan-toʻgʻri yoki boshqalar orqali ishlatadigan ifoda: "width, d1 bir-birini ishlatadi."
- Oʻlcham qabul qila olmaydigan qiymat: manfiy uzunlik, 180° dan katta burchak.
- Chizma boshqa cheklovlari bilan qabul qila olmaydigan qiymat: hech narsa oʻzgarmaydi, xabar yoʻldagi cheklovlarni nomlaydi.
- Boshqa narsa ishlatayotgan parametrni oʻchirish: panel avval uning qiymatini ularga yozishni taklif qiladi. Oʻlchovli cheklovning nomi cheklovni oʻchirish bilan oʻchiriladi.
