---
title: Klaviatura va sichqoncha
summary: CadCraft chizish ilovasidagi har bir klavisha, sichqoncha amali va buyruq satri klavishasi, kod ularni qanday boshqarishi bilan.
keywords: klaviatura, yorliqlar, klavishalar, sichqoncha, gʻildirak, surish, kattalashtirish, oʻng tugma, oʻrta tugma, f3, f7, f8, ctrl, buyruq klavishasi, tezkor tugmalar, nusxalash, kesish, qoʻyish, dublikat, xotira buferi, hammasini tanlash
from: a2608a29
---

Yorliqlar kompyuteringiz uchun koʻrsatiladi. Mac'da har bir {{key:Mod}} yorligʻi Command klavishasidan foydalanadi, Control klavishasi ham ishlaydi. Klavishalar qanday yozilishi va Mac'da F-klavishalardan qanday foydalanish haqida [Klavishalar, sichqonchalar va trekpadlar](common:keys) da yozilgan.

## Buyruqlarni yozish

| Klavisha | Nima qiladi |
|---|---|
| Har qanday harf, raqam yoki belgi | Buyruq satriga boradi, kursor qayerda boʻlishidan qat'i nazar, agar panelning biror qutisida kursor boʻlmasa |
| {{key:Enter}} | Yozganingizni yuboradi. Boʻsh buyruq satrida: oxirgi buyruqni takrorlaydi, buyruqni tugatadi, tanlashni yakunlaydi yoki `<…>` ichidagi standartni qabul qiladi |
| {{key:Space}} | {{key:Enter}} bilan bir xil, faqat CadCraft matn soʻrayotganda (matn, blok nomlari, oʻlcham matni), u yerda boʻshliq yozadi |
| {{key:Esc}} | Buyruqni bekor qiladi. Buyruq bajarilmayotganda: gripni koʻchirishni yoki tanlash qutisini bekor qiladi, soʻngra tanlovni tozalaydi |
| {{key:Tab}} | Buyruq satrining oʻng tomonida koʻrsatilgan taklif qilingan buyruqni qabul qiladi. Hech narsa yozilmagan va kursor ustma-ust tushgan obyektlar ustida boʻlsa: oʻsha yerdagi keyingi obyektni ajratib koʻrsatadi (tanlash uchun bosing) |
| {{key:Up}} {{key:Down}} | Oldin yozgan satrlaringiz boʻylab yuradi (oxirgi 100 ta) |

## Chizish va tahrirlash

| Klavisha | Nima qiladi |
|---|---|
| {{key:Mod+Z}} | Oxirgi buyruqni bekor qiladi |
| {{key:Mod+Y}} yoki {{key:Mod+Shift+Z}} | Qayta bajaradi |
| {{key:Mod+A}} | Ochiq yorliqdagi tahrirlanadigan barcha obyektlarni tanlaydi ({{cmd:SELECTALL}}). Buyruq satriga biror narsa yozgan boʻlsangiz, u matnni tanlaydi |
| {{key:Delete}} | Tanlangan obyektlarni oʻchiradi ({{cmd:ERASE}}), agar buyruq satriga biror narsa yozmagan boʻlsangiz |
| {{key:Backspace}} | Buyruq satrida kursor boʻlmasa, tanlangan obyektlarni oʻchiradi; buyruq satrida esa yozganingizni oʻchiradi |
| {{key:Esc}} | Buyruq bajarilmayotganda: tanlovni tozalaydi ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Chizma formatida (DWG yoki DXF) nusxa saqlaydi |
| {{key:Mod+Shift+S}} | Boshqacha saqlash: DWG yoki DXF ni tanlang, soʻngra nusxa saqlang |
| {{key:Mod+O}} | DWG yoki DXF ochadi |
| {{key:Mod+P}} | PDF ga chop etadi |

Buyruq bajarilayotganda bekor qilish, qayta bajarish, hammasini tanlash va chop etish ishlamaydi: avval {{key:Esc}} tugmasini bosing.

## Nusxalash, kesish va qoʻyish

| Klavisha | Nima qiladi |
|---|---|
| {{key:Mod+C}} | Tanlovni xotira buferiga nusxalaydi ({{cmd:COPYCLIP}}). Hech narsa tanlanmagan boʻlsa: CadCraft obyektlarni soʻraydi |
| {{key:Mod+X}} | Kesish: tanlovni nusxalaydi, soʻngra oʻchiradi ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Qoʻyish: nusxa kursorga ergashadi; joylashtirish uchun bosing yoki nuqta yozing ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Joyida qoʻyish: nusxalangan koordinatalarda ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dublikat: tanlovning nusxasi koʻrsatkich bilan harakatlanadi; joylashtirish uchun bosing, {{key:Esc}} hech narsa qoldirmaydi ({{cmd:DUPLICATE}}) |

Xuddi shu amallar asboblar panelidagi {{ui:Tahrirlash}} guruhida ({{ui:Nusxalash}}, {{ui:Qoʻyish}}) va uning {{ui:Koʻproq}} menyusida ham bor. Boshqa buyruq bajarilayotganda uni tugating yoki avval {{key:Esc}} tugmasini bosing; nusxa kursorga ergashayotganda {{key:Mod+V}} yoki {{key:Mod+D}} ni yana bosish qaytadan boshlaydi. Buyruq satriga biror narsa yozgan boʻlsangiz yoki buyruq matn soʻrayotgan boʻlsa, bu klavishalar oʻsha matnni nusxalaydi, kesadi va qoʻyadi. Qarang: [Nusxalash, qoʻyish va dublikat](topic:copy-paste).

## Almashtirgichlar

| Klavisha | Almashtirgich | Holat satri tugmasi |
|---|---|---|
| {{key:F3}} | Obyekt ilashishlari yoqilgan yoki oʻchiq | {{ui:Ilashish}} |
| {{key:F7}} | Setka yoqilgan yoki oʻchiq | {{ui:Setka}} |
| {{key:F8}} | Ortho yoqilgan yoki oʻchiq | {{ui:Ortho}} |
| {{key:F10}} | Polyar kuzatuv yoqilgan yoki oʻchiq | {{ui:Polyar}} |
| {{key:F11}} | Obyekt ilashish kuzatuvi yoqilgan yoki oʻchiq | {{ui:Kuzatish}} |
| {{key:F12}} | Dinamik kiritish yoqilgan yoki oʻchiq | {{ui:Dinam}} |

:::mac
Mac'da F3, F7 va F8 odatda Mission Control va media klavishalari boʻladi. Ular bilan birga **fn** ni ushlab turing yoki Tizim sozlamalarida standart F-klavishalarni yoqing, [Klavishalar, sichqonchalar va trekpadlar](common:keys) da tasvirlanganidek. Holat satri tugmalari doim ishlaydi.
:::

:::firefox
Firefox'da F7 matn kursori bilan koʻrish (caret browsing) ni yoqishni ham soʻrashi mumkin. **Yoʻq** ni tanlang, agar takrorlasa, {{ui:Setka}} tugmasidan foydalaning.
:::

## Yordam

| Klavisha | Nima qiladi |
|---|---|
| {{key:F1}} | Bu yordamni chizma yonida ochadi yoki yopadi. Buyruq bajarilayotganda ham ishlaydi va hech qachon buyruq satriga bormaydi. |
| {{key:Esc}} | Kursor yordam panelida boʻlganda: qidiruvni tozalaydi yoki panelni yopadi |

Yuqoridagi panelda joylashgan {{ui:Yordam}} tugmasi {{key:F1}} bilan bir xil ishni bajaradi. Yordam qidiruv qutisiga yozayotganda hech narsa buyruq satriga bormaydi. Klaviaturani CadCraftga qaytarish uchun chizmani bosing; panel uning yonida ochiq qoladi.

:::mac
Mac klaviaturasida **fn** ni ushlab turing va F1 ni bosing, yoki {{ui:Yordam}} tugmasini bosing.
:::

## Ekran

| Klavisha | Nima qiladi |
|---|---|
| {{key:Ctrl+Shift+F}} | Oddiy, toʻliq ekran va panellari yashirilgan toʻliq ekran rejimlari orasida almashadi. Bu har qanday kompyuterda Control klavishasidan foydalanadi, Mac ham kiradi. |
| {{key:Left}} {{key:Right}} | Chizma ostidagi yorliq fokusda boʻlganda: oldingi yoki keyingi yorliq |

Toʻliq ekranda brauzer birinchi {{key:Esc}} ni toʻliq ekrandan chiqish uchun ishlatishi mumkin. Buyruqni bekor qilish uchun yana {{key:Esc}} tugmasini bosing.

## Dialoglar

| Klavisha | Nima qiladi |
|---|---|
| {{key:Esc}} | Dialogni yopadi ({{ui:PDF ga chop etish}}, yoki "Saqlanmagan oʻzgarishlar" kabi savol, bu yerda u {{ui:Bekor qilish}} ni bildiradi) |
| {{key:Tab}} | Dialogning sozlamalari va tugmalari orasida oʻtadi |

Dialog ochiq boʻlganda chizmaning klavishalari oʻchiq boʻladi.

## Panel maydonlari

Oʻng yoki chap paneldagi qutida:

| Klavisha | Nima qiladi |
|---|---|
| {{key:Enter}} | Qiymatni qoʻllaydi va qutidan chiqadi |
| {{key:Esc}} | Eski qiymatni qaytaradi va qutidan chiqadi |
| {{key:Tab}} | Qoʻllaydi va keyingi qutiga oʻtadi |

Qutida kursor boʻlganda harflar shu yerga yoziladi, buyruq satriga emas.

## Sichqoncha

| Amal | Nima qiladi |
|---|---|
| Bosish | Buyruq nuqta soʻraganda nuqtani tanlaydi; obyektlar soʻraganda obyektni tanlaydi; aks holda obyekt yoki gripni tanlaydi |
| Shift+bosish | Tanlangan obyektni tanlovdan chiqaradi ([Sozlamalar](topic:settings) da {{ui:Obyektlarni bosish}} {{ui:Tanlovni almashtiradi}} qilib oʻrnatilgan boʻlsa: qoʻshadi). Nuqta tanlanayotganda: oʻsha bosish uchun obyekt ilashishlarini eʼtiborsiz qoldiradi |
| Boʻsh joyni bosib, keyin yana bosish | Tanlash qutisi: chapdan oʻngga oyna, oʻngdan chapga kesishuv |
| Boʻsh joyda sudrash | Lasso: avval oʻngga harakat qilsa oyna, chapga birinchi boʻlsa kesishuv; sudrash paytida {{key:Space}} oyna, kesishuv va toʻsiq orasida aylantiradi; {{key:Esc}} uni tashlaydi (LASSOMODE 0 yoki Sozlamalar uni yana toʻrtburchakka aylantiradi) |
| TRIM yoki EXTEND da qismlar orqali sudrash | Yoʻl kesib oʻtgan har bir qismni kesadi (yoki choʻzadi); boshqasi uchun {{key:Shift}} ni ushlab turing |
| Gripni sudrash | Gripni koʻchiradi (yoki gripni bosing, soʻngra qayerga borishini bosing) |
| Matnni ikki marta bosish | Uni tanlaydi va kursorni oʻng paneldagi {{ui:Matn}} qutisiga qoʻyadi |
| Oʻng tugma | Enter ga teng. Gripni koʻchirish yoki tanlash qutisi paytida: uni bekor qiladi |
| Oʻng tugma bilan sudrash | Koʻrinishni suradi |
| Gʻildirak | Krestcha atrofida yaqinlashtiradi va uzoqlashtiradi |
| Gʻildirak bilan sudrash (oʻrta tugma) | Koʻrinishni suradi |
| Gʻildirakni ikki marta bosish | Butun chizmaga kattalashtiradi ({{ui:Hammasini koʻrsatish}}) |
| DWG yoki DXF ni chizmaga tashlash | Uni ochadi |

Trekpad yoki sensorli ekranda [Sichqoncha, trekpad va teginish](topic:mouse-trackpad-touch) ga qarang.

## Brauzer saqlaydigan klavishalar

{{key:Mod+N}}, {{key:Mod+W}} va {{key:Mod+T}} doim brauzerga tegishli. CadCraft ularni ishlatmaydi: yangi chizma uchun {{ui:Yangi}} tugmasini ishlating yoki `NEW` yozing. CadCraft xotira buferi oʻz buferi: {{key:Mod+C}} va {{key:Mod+V}} obyektlarni CadCraft chizmalari va yorliqlari orasida nusxalaydi, boshqa dasturlar bilan emas.

:::mac
Agar {{key:Mod+Y}} qayta bajarish oʻrniga brauzer tarixini ochsa, {{key:Mod+Shift+Z}} yoki {{ui:Qayta bajarish}} tugmasidan foydalaning.
:::

## Koʻchirish buyrugi qayerda

Koʻchirish buyrugi `MOVE` (klavisha {{key:M}}): obyektlarni tanlang, soʻngra asosiy nuqtani va ikkinchi nuqtani yoki yozilgan masofani kiriting. `ALIGN` va `DISTRIBUTE` ham bor. BimCraft bino elementlarida xuddi shu nomlarni xuddi shu vazifalar uchun ishlatadi, lekin uning {{key:M}} klavishasi Oʻlchash boʻladi: uning koʻchirish buyrugi {{key:Shift+M}} da.
