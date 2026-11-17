---
title: Nusxalash, qoʻyish va nusxa yaratish
summary: Obyektlarni CadCraft buferiga nusxalang, ularni bosgan joyga yoki oʻz joyiga qoʻying, koʻrsatkich bilan nusxa yarating va ishni boshqa chizma yoki yorliqdan olib keling.
keywords: nusxalash, kesish, qoʻyish, joyida qoʻyish, nusxa yaratish, bufer, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, chizmalar orasida, boshqa yorliq, bazaviy nuqta
from: 4b9f29d3
---

## Nima oʻrganasiz

Obyektlarni buferga qanday nusxalash, ularni bosgan joyga qoʻyish, oʻz koordinatalarida qoʻyish, koʻrsatkich bilan nusxa yaratish, kesish va boshqa chizmaga olib oʻtish. Hammasi asboblar panelidagi {{ui:Edit}} guruhida ham bor: {{ui:Copy}}, {{ui:Paste}} va {{ui:More}} menyusi.

## Nusxalash va bosgan joyga qoʻyish

1. Obyektlarni tanlang: ularni bosing yoki oyna torting.
2. {{key:Mod+C}} ni bosing yoki {{ui:Edit}} guruhidagi {{ui:Copy}} ni bosing. Buyruq satri nechta obyekt nusxalanganini aytadi. Ular tanlangan holda qoladi.
3. {{key:Mod+V}} ni bosing yoki {{ui:Paste}} ni bosing. Nusxa kursorda paydo boʻladi, nusxalangan obyektlarning pastki chap burchagidan osilib turadi.
4. Shu burchak qayerga borishini bosing yoki `2000,500` kabi nuqta kiriting va {{key:Enter}} ni bosing. Obyekt ilashishlari va Ortho odatdagidek ishlaydi.

Qoʻyilgan obyektlar tanlangan boʻladi, shuning uchun ularni darhol koʻchirishingiz yoki oʻzgartirishingiz mumkin. Bitta {{key:Mod+Z}} butun qoʻyishni olib tashlaydi.

:::tip
Nusxa devor burchagi kabi tanlagan nuqtangizdan osilishini xohlaysizmi? `COPYBASE` kiriting, bazaviy nuqtani bosing, obyektlarni tanlang va {{key:Enter}} ni bosing. Shundan keyin qoʻyish bu nuqtani bosgan joyingizga joylashtiradi. Har bir nusxa pastki chap burchak oʻrniga markazidan osilishi uchun [CadCraft sozlamalari](topic:settings) da {{ui:Qoʻyish nuqtasi}} ni oʻzgartiring.
:::

## Joyida qoʻyish

{{key:Mod+Shift+V}} ni bosing yoki {{ui:More}} menyusidan {{ui:Joyida qoʻyish}} ni tanlang. Nusxa nusxalangan aniq koordinatalarga, bosishsiz qoʻyiladi. Obyektlarni boshqa chizmaga yoki bir varaqdan boshqasiga oʻsha joyda olib oʻtish uchun ishlating.

## Nusxa yaratish va koʻchirish

1. Obyektlarni tanlang.
2. {{key:Mod+D}} ni bosing yoki {{ui:More}} menyusidan {{ui:Nusxalash va koʻchirish}} ni tanlang.
3. Asl nusxa ustida nusxa turadi va koʻrsatkich bilan birga harakatlanadi. Qayerga borishini bosing. Siljishni ham yozishingiz mumkin, masalan `@0,-600`, yoki krestcha tomon masofa.

Bosishdan oldin {{key:Esc}} bosilsa, hech narsa qolmaydi. Nusxa bitta Ortga qaytarish qadami boʻladi va buferga tegmaydi.

## Kesish

{{key:Mod+X}} ni bosing yoki {{ui:More}} menyusidagi {{ui:Cut}} ni tanlang. Obyektlar buferga tushadi va chizmadan oʻchiriladi, bitta Ortga qaytarish qadamida. Ularni {{key:Mod+V}} yoki {{key:Mod+Shift+V}} bilan qaytaring.

## Chizmalar va yorliqlar orasida

Bufer boshqa chizmani ochganingizda ham nusxani saqlaydi va u brauzerdagi barcha CadCraft yorliqlari orasida umumiy. Bir yorliqda nusxalang, soʻngra boshqasida {{key:Mod+V}} ni bosing.

- Obyektlar ishlatgan bloklar ular bilan birga keladi. Agar qoʻyiladigan chizmada bir xil nomli blok boʻlsa, uning oʻz taʼrifi ishlatiladi, AutoCAD dagidek.
- Obyektlar ishlatgan qatlamlar qoʻshiladi, ularning rangi va sozlamalari bilan.
- Ikki chizma turli birliklardan foydalansa, nusxa qayta masshtablanmaydi: CadCraft buni aytadi, keyin {{cmd:SCALE}} dan foydalanishingiz mumkin.
- Koʻrinish oynalari oʻz varaqida qoladi; nusxaga kirmaydi.

:::note
Bufer CadCraft ning oʻz buferi. CadCraft obyektlarini boshqa dasturga qoʻyib boʻlmaydi va boshqa dasturdan CadCraft ga qoʻyib boʻlmaydi: DWG yoki DXF sifatida saqlang. Juda katta nusxa yorliqlar orasida ulashish uchun katta boʻlishi mumkin; buyruq satri shunda faqat shu yorliq uni qoʻyishi mumkinligini aytadi.
:::

## Keng tarqalgan xatolar

- **{{key:Mod+V}} buyruq satriga matn qoʻydi.** Siz u yerga nimadir yozgan edingiz, shuning uchun tugmalar matn ustida ishladi. Tozalash uchun {{key:Esc}} ni bosing, soʻngra {{key:Mod+V}} ni qayta bosing.
- **Hech narsa boʻlmadi va holat satri joriy buyruqni tugatishni aytadi.** Boshqa buyruq ishlayapti. Avval {{key:Esc}} ni bosing.
- **Qoʻyish uzoqqa tushdi.** U nusxalagan narsaning pastki chap burchagidan osilgan, bu tasodifan tanlagan uzoqdagi obyekt boʻlishi mumkin. {{ui:Joyida qoʻyish}} dan foydalaning yoki `COPYBASE` bilan nusxalang.
- **"Hech narsa qoʻyilmadi" va sababi.** Boshqa yorliq buferga qoldirgan narsani oʻqib boʻlmadi (u buzilgan yoki qoʻlda oʻzgartirilgan). Obyektlarni qayta nusxalang.

Tugmalarning toʻliq roʻyxatini [Klaviatura va sichqoncha](topic:keyboard) boʻlimida, har bir soʻrovni esa [Buyruqlar maʼlumotnomasi](topic:commands#clipboard) da koʻring.
