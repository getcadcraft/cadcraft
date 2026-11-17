---
title: Skanerlangan chizmalar va vektorlashtirish
summary: Skanerlangan varaqni kiriting, masshtablang va tekislang, tozalang, qismlarini oʻchiring, uning chiziqlariga ilashing va uni chiziq va yoylarga vektorlashtiring.
keywords: skan, skanerlangan chizma, raster, tiff, jpeg, png, masshtab, tekislash, deskew, despeckle, threshold, qora-oq, kesish, oʻchirish, trace, vektorlashtirish, ilashish, yoylar, shtrixlash, qogʻoz chizmalar, eski chizmalar, scanattach, scantrace
from: 36227e5b
---

## Qogʻoz varaqdan chizma obyektlarigacha

Skanerlangan chizma bu rasm. CadCraft siz bergan rasmni saqlaydi va hech qachon oʻzgartirmaydi: har bir tozalash bosqichi yangi rasm yaratadi, har biri bitta bekor qilish bosqichi, va {{cmd:SCANINFO}} asl faylni hamda olingan bosqichlarni koʻrsatadi. Hech narsa yuborilmaydi va oʻqitilgan model yordamida hech narsa taxmin qilinmaydi: tozalash va vektorlashtirish oddiy tasvirga ishlov berish boʻlib, kompyuteringizda bajariladi.

1. **Joylashtiring.** {{cmd:SCANATTACH}} PNG, JPEG, TIFF (bitta sahifa yoki koʻp sahifali faylning barcha sahifalari) yoki rasm boʻlgan PDF sahifasini oʻqiydi. U sahifani, pastki chap burchakni va kenglikni soʻraydi. PDF sahifasi uchun u sahifani dyuymiga nechta piksel bilan chizish kerakligini ham soʻraydi.
2. **Masshtablang.** {{cmd:SCANSCALE}}: skanerda ikki nuqtani tanlang, soʻng ular orasidagi haqiqiy masofani kiriting. Varaq birinchi nuqta atrofida masshtablanadi.
3. **Tekislang.** {{cmd:SCANALIGN}}: skanerda ikki nuqta va ular tegishli boʻlgan ikki joyni tanlang; varaq moslashish uchun siljiydi va buriladi, va "Yoʻq" deb javob bermasangiz, masshtablanadi ham.
4. **Toʻgʻrilang.** {{cmd:SCANDESKEW}} varaqning uzun chiziqlari joylashgan burchakni oʻlchaydi va uni ishonch darajasi bilan koʻrsatadi. Qabul qiling yoki oʻz burchagingizni kiriting, varaq buriladi. Uzun chiziqlari kam varaqda ogohlantirish chiqadi: qabul qilishdan oldin burchakni tekshiring.
5. **Tozalang.** {{cmd:SCANCLEAN}} varaqni qora-oq qiladi (Auto avval qogʻozni tekislaydi; Adaptive qogʻoz oʻzgarishlariga yaqinroq ergashadi; Level butun varaq uchun bitta son) va siz belgilagan oʻlchamgacha dogʻchalarni olib tashlaydi.
6. **Kesing va oʻchiring.** {{cmd:SCANCROP}} bitta oynani saqlaydi. {{cmd:SCANERASE}} toʻrtburchak, koʻpburchak yoki lasso (bosing va torting) ni oʻchiradi: muhrlar, izohlar, qahva halqasi.

Tozalangan rasm saqlangan DWG da saqlanadi (IMAGE va IMAGEDEF, rasm fayli chizma yonida, har qanday rasm kabi).

## Skaner chiziqlariga ilashish

{{cmd:RASTERSNAP}} yoqilgan boʻlsa (standart), obyekt ilashishlari ham qora-oq skanerning chiziqlarini topadi: chiziq uchlari, oʻrtalari, burchaklari va kesishmalar, odatdagi belgilar bilan. Koʻrsatkich ostidagi varaq qismi siz harakatlanganingizda izlanadi; piksel bir necha ekran pikseli boʻladigan darajada yaqinlashtiring. Izlanayotgan qismdan uzunroq chiziq oxirigacha kuzatiladi.

## Vektorlashtirish

{{cmd:SCANTRACE}} varaqning chiziqlarini yangi qatlamda (SCAN-TRACE) chiziq va yoylarga aylantiradi, bitta bekor qilish bosqichi sifatida, skaner ularning ostida qoladi. Siz quyidagilarni belgilaysiz:

- **Tolerantlik:** izlangan chiziq yoki yoy skanerdagi chiziqlardan qanchalik uzoqda turishi mumkin, chizma birliklarida (hisobotda pikselda ham beriladi). Qattiq tolerantlik har bir egrilikni kuzatadi; yumshoq tolerantlik kamroq, toʻgʻriroq boʻlaklar beradi.
- **Oyna:** varaqning bir burchagi yoki butun varaq.
- **Yoylar:** oʻchiq boʻlsa, faqat chiziqlar.
- **Qoldiqlar:** izlash tegmagan narsalar oʻchirib qoʻyish mumkin boʻlgan qatlamda qutilar shaklida chiziladi, yoki umuman chizilmaydi.

Izlash har bir chiziqning markazini topadi, uni kuzatadi, unga toʻgʻri chiziqlar va aylana yoylarni moslaydi, boshqa chiziq kesishgan joyda uzilgan qismlarni birlashtiradi, deyarli gorizontal va deyarli vertikal chiziqlarni aniq gorizontal va vertikal qiladi hamda burchaklarni yopadi. **Matn va shtrixlash rasterda qoladi:** harf oʻlchamidagi qismlar chetga suriladi, va qisqa parallel chiziqlar toʻplami shtrixlash deb olinib, chetga suriladi.

Tugagach u nechta chiziq va yoy yaratganini, tolerantlikni va nechta qismni raster sifatida qoldirganini aytadi. **Bu piksellar berganini, shu tolerantlikda, va natija toʻgʻri ekanligi daʼvosi emas.** Uni varaq bilan solishtiring: izlash xira chiziqni oʻtkazib yuborishi, bir-biriga juda yaqin ikki chiziqni birlashtirishi yoki faqat dogʻ boʻlgan joyda chiziq chizishi mumkin. Avval skanerni tozalang (toʻgʻrilangan, qora-oq, dogʻchalar yoʻq), natija ancha yaxshi boʻladi.

## Nimani oʻqimaydi

Plitkalarda saqlangan TIFF fayllar, BigTIFF, JPEG yoki deflate siqilgan TIFF, Group 3 faks kodlash va alohida tekisliklarda saqlangan ranglar rad etiladi (xabar bilan): ularni LZW, PackBits, Group 4 yoki siqilmagan holda, strip shaklida qayta saqlang. Interlaced PNG fayllar ham rad etiladi. 128 MB dan katta yoki 100 million pikseldan katta fayllar rad etiladi, va vektorlashtirish oynasi koʻpi bilan 64 million piksel saqlay oladi.
