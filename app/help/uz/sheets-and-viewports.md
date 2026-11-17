---
title: Sarlavha bloki va koʻrinish oynalari bilan varaq tuzish
summary: Chegara va sarlavha bloki bilan varaq (layout) yarating, koʻrinish oynasi masshtabini oʻrnating, tafsilot uchun ikkinchi koʻrinish oynasi qoʻshing va sarlavha blokini toʻldiring.
keywords: layout, varaq, sheet, paper space, qogʻoz fazosi, viewport, mview, vpview, title block, sarlavha bloki, scale, masshtab, paper size, qogʻoz oʻlchami, border, chegara, vports, plot scale, chop etish masshtabi, mspace, pspace, model space, model fazosi, enter viewport, koʻrinish oynasiga kirish, double-click viewport
from: 45a45de8
---

## Nima yasaysiz

A3 varaq sarlavha bloki bilan, butun plan bitta koʻrinish oynasida 1:100 da, va ikkinchi koʻrinish oynasi burchakni 1:20 da koʻrsatadi.

## Model va varaqlar

Binoni {{ui:Model}} yorligʻida toʻliq oʻlchamda chizasiz: 6 m devor millimetrda 6000 birlik. **Varaq** (layout) — millimetr yoki dyuymda oʻlchanadigan qogʻoz boʻlagi. **Koʻrinish oynasi** varaqda kesilgan, modelni masshtabda koʻrsatadigan oyna.

## Boshlashdan oldin

1. {{ui:Model}} yorligʻida plan oching yoki chizing.
2. {{key:Esc}} tugmasini bosing, hech narsa tanlanmasin.
3. {{ui:Joriy sozlamalar}} da {{ui:Birliklar}} ni chizgan birligingizga, masalan {{ui:Millimetr}} ga oʻrnating.

Birliklar muhim: 1:100 koʻrinish masshtabi qogʻozdagi bir millimetr haqiqiy 100 millimetrni koʻrsatishini bildiradi, shuning uchun CadCraft chizma birligi nimaga teng ekanini bilishi kerak. {{ui:Birliksiz}} qoldirilgan chizma qogʻozning birligida deb olinadi (ISO qogʻozda millimetr, AQSh qogʻozida dyuym).

## Varaq yarating

1. Chizma ostidagi yorliqlarning oʻng tomonidagi {{ui:+}} tugmasini bosing, yoki `LAYOUT` yozing va {{key:Enter}} tugmasini bosing, yoki {{ui:Yangi varaq}} tugmasini bosing.

`Layout1` yorligʻi ochiladi. Siz quyuq stoldagi varaqni koʻrasiz: chegara, pastki oʻng burchakda sarlavha bloki va koʻrsatilgan barcha modelni eng katta standart masshtabda koʻrsatuvchi bitta koʻrinish oynasi. Tarixda qogʻoz nomi koʻrsatiladi: metrik va birliksiz chizmalar uchun ISO A3, dyuym yoki futdagi chizmalar uchun Tabloid (ANSI B).

2. Varaqni ekranga sigʻdirish uchun {{ui:Hammasini koʻrsatish}} tugmasini bosing.

## Qogʻozni tanlang

1. Hech narsa tanlanmasligi uchun {{key:Esc}} tugmasini bosing. Oʻng panel sarlavhasi "Varaq: Layout1" deb yozadi.
2. {{ui:Nom}} ga `A-101 Plan` yozing va {{key:Enter}} tugmasini bosing. Yorliq nomi oʻzgaradi.
3. {{ui:Qogʻoz}} da oʻlchamni tanlang.
4. {{ui:Yoʻnalish}} da {{ui:Gorizontal}} yoki {{ui:Vertikal}} ni tanlang.

:::warning
Qogʻozni oʻzgartirish varaqdagi narsalarni koʻchirmaydi va oʻlchamini oʻzgartirmaydi. Oʻzgartirgandan keyin chegara, sarlavha bloki va koʻrinish oynasi hali ham sigʻishini tekshiring, va ularni tutgichlar bilan koʻchiring yoki oʻlchamini oʻzgartiring. Millimetr va dyuym qogʻozlari orasida almashtirish raqamlarni saqlaydi, shuning uchun hamma narsa oʻlchamini oʻzgartiradi: holat satri buni ogohlantiradi.
:::

## Koʻrinish oynasi masshtabini oʻrnating

1. Koʻrinish oynasining ramkasini (chetini) bosing. Panel sarlavhasi "Koʻrinish" deb yozadi.
2. {{ui:Masshtab}} da `1:100` ni tanlang.

Koʻrinish oynasi ichidagi model 1:100 da qayta chiziladi, oldingi joyida markazlashgan holda. Roʻyxat 10:1 dan 1:10000 gacha metrik masshtablarni taklif qiladi; dyuym yoki futdagi chizmalar arxitektura masshtablarini (1/4" = 1'-0" va shunga oʻxshash) va muhandislik masshtablarini (1" = 20' va shunga oʻxshash) ham oladi. {{ui:Butun modelni sigʻdirish}} hamma narsaga sigʻadigan aniq, standart boʻlmagan masshtab oʻrnatadi.

3. Agar plan endi markazda boʻlmasa, oʻng panelda {{ui:Koʻrinish markazi (model)}} ostidagi {{ui:X}} va {{ui:Y}} ni oʻzgartiring: ular koʻrinish oynasi oʻrtasida koʻrsatilgan model nuqtasi.

## Koʻrinish oynasida modelning bir qismini koʻrsating

1. Koʻrinish oynasi tanlangan holda, oʻng panelda {{ui:Modelda oyna tanlang…}} ni bosing (yoki `VPVIEW` yozing va {{key:Enter}} tugmasini bosing).
2. CadCraft {{ui:Model}} yorligʻiga oʻtadi. Koʻrsatiladigan hududning bir burchagini bosing.
3. Qarama-qarshi burchakni bosing.

Siz varaqqa qaytasiz va koʻrinish oynasi bu hududni sigʻadigan eng katta standart masshtabda koʻrsatadi; tarix qaysi masshtab ekanini aytadi. {{ui:Butun modelni koʻrsatish}} butun planni standart masshtabda qaytaradi.

## Tafsilot uchun ikkinchi koʻrinish oynasi qoʻshing

1. Varaqda joy boʻshating: birinchi koʻrinish oynasini tanlang va burchak tutgichini tortib kichiklashtiring.
2. `MV` yozing va {{key:Enter}} tugmasini bosing, yoki Varaqlar guruhidagi {{ui:Koʻrinish}} tugmasini bosing.
3. Varaqda yangi koʻrinish oynasining bir burchagini bosing.
4. Qarama-qarshi burchakni bosing.

Yangi koʻrinish oynasi butun modelni koʻrsatadi. Tarix uning masshtabini aytadi.

5. Yangi koʻrinish oynasi ramkasini bosing.
6. {{ui:Modelda oyna tanlang…}} ni bosing va plan burchagi atrofida kichik hududni tanlang.
7. {{ui:Masshtab}} da `1:20` ni tanlang.

Koʻrinish oynasi ramkalari `Viewports` qatlamida, u chop etilmasligi belgilangan, shuning uchun ramkalar ekranda koʻrinadi, lekin PDF da emas.

## Sarlavha blokini toʻldiring

Sarlavha bloki `Title block` qatlamidagi oddiy chiziqlar va matndan tuzilgan. U chizma nomi, birinchi koʻrinish oynasining masshtabi, bugungi sana va varaq raqamidan boshlanadi.

1. Katta sarlavha matnini ikki marta bosing. Ustida tahrirlash qutisi ochiladi.
2. Varaq sarlavhasini yozing.
3. {{ui:OK}} tugmasini bosing yoki {{key:Mod+Enter}} ni bosing.

Boshqa maydonlar uchun ham xuddi shunday qiling. Boʻsh "DRAWN BY" katagiga yozish uchun {{cmd:TEXT}} dan foydalaning. SCALE matni koʻrinish oynasi masshtabi oʻzgarganda oʻzi yangilanmaydi: uni qoʻlda tahrirlang.

## Varaqda chizing

Varaq yorligʻida chizgan narsangiz qogʻozda, qogʻoz birliklarida: 3.5 balandlikdagi matn ISO varagʻida 3.5 mm baland. Izohlar, shimol strelkalari va varaq chegaralari shu yerga tegishli.

Plan oʻzini oʻzgartirish uchun {{ui:Model}} yorligʻiga oʻting yoki koʻrinish oynasi orqali ishlang (keyingi boʻlim); har bir koʻrinish oynasi oʻzgarishni koʻrsatadi.

## Koʻrinish oynasi orqali modelda ishlash

1. Koʻrinish oynasi ichida, ramkasidan tashqarida ikki marta bosing. Yoki `MS` yozing va {{key:Enter}} tugmasini bosing: varaqda bitta koʻrinish oynasi boʻlsa u toʻgʻri kiradi; bir nechta boʻlsa, kerakligini ichida bosing.

Ramka qalinroq chiziladi, tarix ichkarida ekanligingizni aytadi va varaq yorligʻi tanlangan holda qoladi. Endi chizgan yoki oʻzgartirgan hamma narsa modelga tegishli, model birliklarida, {{ui:Model}} yorligʻidagi kabi: 1:100 da koʻrinish oynasi ichida chizilgan chiziq haqiqiy millimetrlarda. Bu koʻrinish oynasida muzlatilgan qatlamlarni bu yerda tanlab boʻlmaydi.

2. Koʻrinish oynasini kattalashtirish va surish uchun gʻildirakni aylantiring yoki oʻrta tugma bilan torting. Varaq oʻz joyida qoladi.
3. Ramkadan tashqarida ikki marta bosing yoki `PS` yozing va {{key:Enter}} tugmasini bosing.

Siz varaqqa qaytasiz. Koʻrinish oynasi qoldirgan koʻrinishingizni saqlaydi; {{key:Mod+Z}} eski koʻrinishni bir qadamda qaytaradi. Chizma ostidagi istalgan yorliqni bosish ham koʻrinish oynasidan chiqaradi.

:::note
Displeyi qulflangan koʻrinish oynasi ({{ui:Xossalar}} dagi {{ui:Koʻrinish qulflangan}}) koʻrinishini saqlaydi: uning ichida surish va kattalashtirish butun varaqni siljitadi. Oʻchirilgan koʻrinish oynasiga kirib boʻlmaydi.
:::

## Koʻrinish nomi bilan belgilash

Koʻrinish oynasi ostidagi koʻrinish sarlavhasi koʻrinish oynasining koʻrinish nomini koʻrsatishi va uni kuzatishi mumkin:

1. Koʻrinishga nom bering: koʻrinish oynasi ramkasini tanlang va {{ui:Xossalar}} dagi {{ui:Koʻrinish nomi}} ni toʻldiring — yoki {{ui:Model}} yorligʻida {{cmd:NAMEDVIEW}} bilan koʻrinishni saqlang va koʻrinish oynasi tanlangan holda `VPVIEW`, `V` va koʻrinish nomini yozing: koʻrinish oynasi shu koʻrinishni koʻrsatadi va uning nomini oladi.
2. `VIEWLABEL` (`VL`) yozing va {{key:Enter}} tugmasini bosing, soʻng yorliq qayerga borishini bosing ({{key:Enter}} uni koʻrinish oynasining pastki chap burchagi ostiga qoʻyadi).

Koʻrinish nomi oʻzgarganda, yorliq ham shu bilan oʻzgaradi, xuddi shu bekor qilish qadamida.

## Bitta koʻrinish oynasida qatlamni muzlating

Bitta koʻrinish oynasida qatlamni yashirish, boshqalarida emas (masalan, tafsilotdagi mebel):

1. Koʻrinish oynasi ramkasini tanlang yoki uning ichida ishlang (ikki marta bosing).

{{ui:Qatlamlar}} panelida har bir qatorda yana bitta tugma paydo boʻladi va roʻyxat ustida bu haqda qator yoziladi.

2. Qatlam qatorida shu tugmani bosing.

Qatlam faqat shu koʻrinish oynasidan yoʻqoladi. Qayta koʻrsatish uchun yana bosing; {{key:Mod+Z}} ikkisini ham bekor qiladi. Bir nechta qatlam yoki koʻrinish oynasi uchun bir vaqtda `VPLAYER` yozing: `F` (muzlatish) yoki `T` (eritish), qatlam nomlari (`A-*` A- bilan boshlanadigan barcha qatlamlarni oladi), soʻng `C` (joriy), `A` (hammasi) yoki `S` (tanlash). `VPLAYER` `V` (Vpvisdflt) yangi koʻrinish oynalari boshida muzlatilgan boʻladigan qatlamlarni tanlaydi.

## Koʻproq varaqlar

Har bir {{ui:+}} keyingi varaq raqami bilan boshqa varaq (`Layout2`, `Layout3` …) qoʻshadi. Ochiq varaqni oʻchirish uchun {{key:Esc}} tugmasini bosing va oʻng panelda {{ui:Bu varaqni oʻchirish}} ni bosing. U soʻramasdan oʻchiradi; {{key:Mod+Z}} uni qaytaradi.

Varaqni {{ui:Bu varaqni chop etish}} yoki {{key:Mod+P}} bilan chop eting; qarang [PDF ga chop etish](topic:plot-pdf).

## Keng tarqalgan xatolar

- **Koʻrinish oynasi hech narsani koʻrsatmaydi.** Model boʻsh, yoki koʻrinish boshqa joyga qaratilgan. Ramkani tanlang va {{ui:Butun modelni koʻrsatish}} ni bosing.
- **Masshtablar roʻyxatida futlar va dyuymlar masshtablari yoʻq.** {{ui:Model}} yorligʻida {{ui:Birliklar}} ni {{ui:Dyuym}} yoki {{ui:Fut}} ga oʻrnating.
- **1:100 oʻn marta katta yoki kichik koʻrinadi.** Chizma birliklari notoʻgʻri. {{ui:Birliklar}} ni bir birlik haqiqatda nimaga teng ekaniga oʻrnating.
- **Koʻrinish oynasi ichidagi planni bosish hech narsani tanlamaydi.** Varaqda siz varaqning oʻz obyektlarini tanlaysiz. Avval koʻrinish oynasi ichida ikki marta bosing, shunda plan ustida u orqali ishlaysiz.
- **Koʻrinish oynasidan tashqari bosishlar hech narsa qilmaydi.** Siz koʻrinish oynasi ichidasiz: tashqarida ikki marta bosing yoki `PS` yozing, varaqda yana ishlash uchun.
- **"Koʻrinish oynalari varaqqa joylashtiriladi. Avval varaq yorligʻini oching (yoki LAYOUT bilan yarating)."** {{cmd:MVIEW}} faqat varaq yorligʻida ishlaydi.
