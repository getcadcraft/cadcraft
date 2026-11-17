---
title: Chizmani cheklash
summary: Geometrik va oʻlcham cheklovlari bilan chiziqlarni gorizontal, uchlarini birga va oʻlchamlarini oʻzgarmas saqlang; oʻlchamni oʻzgartirganda chizma unga ergashadi.
keywords: cheklov, cheklovlar, parametrik, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, erkinlik darajalari, toʻliq cheklangan
from: f8f21fa4
---

## Nima yasaysiz

Kengligini bir joyda oʻzgartiriladigan plastina: yon tomonlari toʻgʻri burchakli qoladi, bir burchagi oʻz joyida turadi, balandligi esa kengligining yarmiga teng boʻladi.

Cheklovlar {{ui:Model}} yorligʻidagi chiziqlar, polichiziqlar, aylanalar, yoylar va nuqtalarga ishlaydi. Qoʻshgan har bir cheklov alohida {{ui:Ortga qaytarish}} qadami boʻladi.

## Konturni chizish va cheklash

1. `REC` kiriting va {{key:Enter}} ni bosing. `0,0` kiriting, {{key:Enter}} ni bosing, `100,50` kiriting, {{key:Enter}} ni bosing.
2. `AUTOCONSTRAIN` kiriting va {{key:Enter}} ni bosing. `ALL` kiriting, {{key:Enter}} ni bosing, soʻngra yana {{key:Enter}} ni bosing.

   Tarixda "4 ta cheklov qoʻllandi." yozuvi chiqadi. Yon tomonlar yonida **H** va **V** belgili kichik qutilar paydo boʻladi: bular cheklov panjaralari.
3. `GCFIX` kiriting va {{key:Enter}} ni bosing. Pastki chap burchak yaqiniga bosing. ⊕ belgili katakcha paydo boʻladi: bu burchak oʻz joyida qoladi.

`AUTOCONSTRAIN` uchlari deyarli tutashgan joylarda ustma-ust tushish cheklovlarini, chiziqlar deyarli tekis yoki tik boʻlgan joylarda gorizontal yoki vertikal cheklovlarni qoʻshadi. Uning soʻrovida `S` kiriting, shunda qanchalik yaqin boʻlishi kerakligini oʻzgartirasiz (boshida 0,05 chizma birligi va 1°).

## Oʻlchamlarni qoʻshish

1. `DCHORIZONTAL` kiriting va {{key:Enter}} ni bosing.
2. Pastki chap burchak yaqiniga, soʻngra pastki oʻng burchak yaqiniga bosing.
3. Oʻlcham chizigʻi uchun toʻrtburchak ostiga bosing.
4. Soʻrov `Dimension text <d1=100>` koʻrsatadi. `width=120` kiriting va {{key:Enter}} ni bosing.

   Toʻrtburchak endi 120 kenglikda, yorliq `width=120` deb oʻqiladi.
5. `DCVERTICAL` kiriting va {{key:Enter}} ni bosing, `O` kiriting va {{key:Enter}} ni bosing, soʻngra oʻng tomonga bosing.
6. Uning oʻng tomoniga bosing, `width/2` kiriting va {{key:Enter}} ni bosing.

   Balandligi 60 boʻladi. Yorliq `fx: d1=width/2` deb oʻqiladi: ifoda uni boshqaradi.

Tarixda endi kontur toʻliq cheklangan deb yoziladi. Oʻlchamini oʻzgartirish uchun `width` ni oʻzgartiring (qarang: [Parametrlar va tenglamalardan foydalanish](topic:parameters)) yoki `width=120` yorligʻini ikki marta bosing, yangi qiymat kiriting va {{ui:Qoʻllash}} ni tanlang.

## Cheklangan obyektlarni koʻchirish

Koʻchirish, aylantirish, masshtablash, tutqichlar va Xossalar paneli ham cheklovlarni saqlaydi: siz koʻchirgan narsa ushlab turiladi, qolganlari unga ergashadi. Cheklovlar ergasha olmasa, tahrir bajarilmaydi va tarixda sabab yoziladi, masalan "Bajarilmadi: cheklovlar bu obyektni shu joyda ushlab turadi." Obyektni oʻchirsangiz, uning cheklovlari ham oʻchadi.

## Cheklangan obyektlarni aks ettirish va kesish

- {{cmd:MIRROR}} aks ettirilgan obyektlar orasidagi cheklovlarni nusxalariga koʻchiradi. Urinmaning qaysi tomonga tegishi va masofa qaysi tomondan oʻlchanishi aks ettirilgan nusxa uchun qayta hisoblanadi; nusxalangan oʻlchamlar ham joylashtirishdagidek oʻz nomlarini oladi. `Erase source objects` `Y` boʻlsa, cheklovlar aks ettirilgan obyektlarda qoladi. Tarixda nechta cheklov koʻchganligi yoziladi.
- {{cmd:TRIM}} chiziq yoki yoyning cheklovlarini qolgan qismida saqlaydi: uchiga tegishli cheklov oʻsha uchi hali bor boʻlgan boʻlakka oʻtadi; yoʻnalish haqidagi qoida ({{ui:Gorizontal}}, {{ui:Vertikal}}, {{ui:Parallel}}, {{ui:Perpendikulyar}}) har bir boʻlakda saqlanadi; ikki tashqi uch orasidagi oʻlcham ularni oʻlchashda davom etadi. Kesib tashlangan qismni ushlab turgan cheklovlar yoki kesish oʻzgartirgan uzunlik ({{ui:Teng}}, yoyning burchagi) yoʻqoladi. Kesilgan aylana markaz va radius cheklovlarini saqlaydi. Kesilgan polichiziqlar oʻz cheklovlarini yoʻqotadi.

## Cheklovlar

| Buyruq | Saqlaydi |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | chiziq yoki kesmani gorizontal yoki vertikal holatda (`2P`: ikki nuqtani gorizontal yoki vertikal) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | ikki chiziqni parallel, perpendikulyar yoki bir chiziqda |
| {{cmd:GCCOINCIDENT}} | ikki nuqtani birlashtirish; `O`: nuqta chiziq, aylana yoki yoy ustida |
| {{cmd:GCTANGENT}} | chiziq va aylana yoki yoy, yoki ularning ikkitasi bir-biriga tegib turadi |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | ikki aylana yoki yoy bitta markazda; ikki uzunlik yoki ikki radius teng |
| {{cmd:GCSYMMETRIC}} | chiziq orqali aks ettirilgan ikki nuqta, chiziq yoki aylana |
| {{cmd:GCFIX}} | nuqta (yaqiniga bosing) yoki butun obyekt (`O`) oʻz joyida |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | masofa |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radius, diametr, ikki chiziq orasidagi burchak yoki yoy burchagi |

{{cmd:GEOMCONSTRAINT}} va {{cmd:DIMCONSTRAINT}} qaysi birini soʻrashini aytadi; {{ui:Parametrik}} guruhidagi {{ui:Cheklash}} va {{ui:Oʻlcham}} ularni ishga tushiradi, {{ui:Koʻproq}} esa har birini koʻrsatadi. Qayerga bosganingiz qismni tanlaydi: uchiga, oʻrtasiga yoki markaziga yaqin bosish shu nuqtani oladi; polichiziqqa bosish ostidagi kesmani oladi. Birinchi obyekt oʻz joyida qoladi, ikkinchisi unga yetib borish uchun koʻchadi.

Boshqalar bilan ziddiyatli yoki boshqalar allaqachon koʻzda tutgani uchun hech narsa qoʻshmaydigan cheklov xabar bilan rad etiladi va hech narsa koʻchmaydi.

## Koʻrish, tanlash va oʻchirish

- Cheklov panjarasidagi katakchani (yoki ustma-ust tushish kvadratini, yoki oʻlcham yorligʻini) bosing: shu cheklov tanlanadi va tarixda uning nomi yoziladi. Oʻchirish uchun {{key:Delete}} ni bosing.
- {{cmd:DELCONSTRAINT}} tanlagan obyektlardagi barcha cheklovlarni oʻchiradi.
- {{cmd:CONSTRAINTBAR}}: `S` barcha panjaralarni koʻrsatadi, `H` ularni yashiradi; avval obyektlarni tanlang, shunda faqat ularniki koʻrsatiladi yoki yashiriladi. {{ui:Koʻproq}} ichida {{ui:Cheklov panjaralarini koʻrsatish}} va {{ui:Cheklov panjaralarini yashirish}} bor.
- {{cmd:DCDISPLAY}} oʻlchamli cheklovlarni koʻrsatadi yoki yashiradi. Ular hech qachon chop etilmaydi.
- {{cmd:DCCONVERT}} chiziq, aylana va yoylarda chizilgan oʻlchamlarni oʻlchamli cheklovlarga aylantiradi.

:::note
Agar AutoCAD ning parametrik chizmasidan foydalangan boʻlsangiz, buyruq nomlari va soʻrovlar bir xil. Cheklovlar va parametrlar DWG va DXF fayllariga boshqa dasturlar eʼtibor bermaydigan shaklda saqlanadi; qarang: [Fayllar](topic:files#constraints-in-files).
:::
