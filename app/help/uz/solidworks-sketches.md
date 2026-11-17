---
title: Eskizlarni boshqa detal modellashtiruvchilarga va ulardan oʻtkazish
summary: Chizmani detal modellashtiruvchida bogʻlangan bitta eskizga qayta quruvchi makros yozing va undan eksport qilingan eskizni oching.
keywords: eskiz, makros, swb, vba, eksport, detal modellashtiruvchi, global oʻzgaruvchilar, tenglamalar, munosabatlar, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks CadCraft qurilgan muhitda mavjud emas, shuning uchun ikkala yoʻnalish ham hali SolidWorks da sinovdan oʻtmagan. CadCraft yozgan narsa faqat tuzilishi boʻyicha tekshiriladi. Unga tayanishdan oldin natijani tekshiring.
:::

## Chizmani eskiz sifatida yuborish

1. Chizmani bogʻlang va oʻlchang (qarang: [Chizmani bogʻlash](topic:constraints)).
2. {{ui:Parametrik}} guruhida {{ui:Koʻproq}} ni oching va {{ui:SolidWorks uchun makros (.swb)}} ni tanlang, yoki {{cmd:SWBOUT}} ni yozing.

   Chizma nomi bilan, `.swb` bilan tugaydigan fayl yuklab olinadi.
3. SolidWorks da **Tools > Macro > Run** ni tanlang va shu faylni koʻrsating.

Makros standart detal shablonidan yangi detal yaratadi, Front Plane da eskiz ochadi va modelning chiziqlari, aylanalari, yoylari, nuqtalari va polichiziqlarini unda chizadi, bunda:

- bogʻlanishlaringiz eskiz munosabatlari sifatida,
- oʻlchov bogʻlanishlaringiz bir xil nomli oʻlchamlar sifatida (`d1@Sketch1`),
- oʻz parametrlaringiz global oʻzgaruvchilar sifatida,
- har bir ifoda tenglama sifatida.

Detal chizmaning uzunlik birligidan foydalanadi. Matn, bloklar, shtrixlash, oʻlchamlar va varaqlar eskizga kirmaydi; tarix nima qoldirilganini koʻrsatadi. Tenglama shakliga ega boʻlmagan ifodalar (`if`, `min`, `max`, `round`, `%` va bir nechta boshqalar) joriy qiymati sifatida yoziladi, tarix buni aytadi. Makros yarata olmagan narsa makros yonidagi log faylga yoziladi va oxirida xabar qisqacha bayon qiladi.

## Detaldan eskiz ochish

1. SolidWorks da detal ustida CadCraft eksport makrosini ishga tushiring (uni PartCraft ilovasida yuklab oling: File > Export > Export macro to bring parts back). U detal yonida `cadcraft-sw-export` formatidagi `.json` faylni yozadi.
2. CadCraft da {{ui:Ochish}} ni tanlang va shu `.json` faylni koʻrsating.
3. Detalda bir nechta eskiz boʻlsa, bittasini tanlang.

Eskiz millimetrlarda chizmaga aylanadi: uning chiziqlari, yoylari, aylanalari va nuqtalari; munosabatlari bogʻlanish sifatida; oʻlchamlari oʻz nomlari bilan (`D1`, `D2` …) oʻlchov bogʻlanishlari sifatida; global oʻzgaruvchilari parametr sifatida; oʻlchamlardagi tenglamalar esa ifoda sifatida. Tarix koʻchirilmagan narsalarni, masalan CadCraft da yoʻq munosabatlarni koʻrsatadi. Eskizning detal ichidagi oʻrni saqlanmaydi: u tekis holda, oʻz tekisligida koʻringanidek chiziladi.
