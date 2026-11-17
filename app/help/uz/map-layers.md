---
title: Chizma ostidagi xarita qatlamlari
summary: Koʻcha xaritalari, aerofotosuratlar yoki dunyo fayli bilan rasmni model fazosi ostida koʻrsating, chizma koordinatalar tizimi boʻyicha joylashtirilgan holda.
keywords: xarita, xarita qatlamlari, maplayers, ml, geomap, asosiy xarita, aerofoto, sunʼiy yoʻldosh, plitkalar, xyz, wms, wmts, xarita xizmati, dunyo fayli, koordinatalar tizimi, epsg, shtat tekisligi, utm, georeferens, joy rejasi, geolokatsiya, geografik joy, geomaʼlumotlar, saqlangan, dwg, dxf
from: f103045f
---

## Nima yaratasiz

Ustiga aerofoto yoki koʻcha xaritasi qoʻyilgan joy rejasi, har biri oʻz joyida.

## CadCraft ga chizma qayerdaligini ayting

1. Chizma birliklarini {{ui:Xossalar}} › {{ui:Birliklar}} da belgilang (masalan, futlar yoki metrlar).
2. {{cmd:MAPLAYERS}} (yoki `ML`) yozing va {{key:Enter}} bosing.
3. {{ui:Chizma qayerda}} ostida {{ui:Tizimni toping}} maydoniga nom yoki EPSG kodini yozing (masalan, `2277` yoki `Texas Central`) va {{ui:Tizim}} ichidan uni tanlang.
4. Agar chizma oʻsha tizimning oʻz koordinatalarida chizilgan boʻlsa, joylashtirishni 0 da qoldiring. Aks holda bitta chizma nuqtasini ({{ui:Chizma X}}, {{ui:Chizma Y}}) bering: bu nuqta xarita toʻrida qayerda ({{ui:Sharq (E)}}, {{ui:Shimol (N)}}) va chizma sharqdan qanchaga burilgan ({{ui:Burilish (°)}}).
5. {{ui:Bu tizimdan foydalanish}} ni bosing.

## Qatlam qoʻshish

1. Dialog yuqorisidagi {{ui:Internetdan xarita qatlamlari}} ni yoqing. Shu vaqtgacha hech bir serverdan hech narsa soʻralmaydi; u yoqilganda, qoʻshgan serverlar ekrandagi hududni va internet manzilingizni koʻradi, hech qachon chizmangizni.
2. {{ui:Qatlam qoʻshish}} da, u qayerdan kelishini tanlang:
   - **Plitkalar (XYZ)**: `{z}`, `{x}` va `{y}` bilan plitka manzili, nom va uning provayderi talab qiladigan kredit.
   - **WMS**, **WMTS** yoki **ArcGIS**: xizmat manzili, soʻng {{ui:Qatlamlarni olish}} ni bosing va bittasini tanlang.
   - **Rasm**: PNG yoki JPEG va uning dunyo fayli (va mavjud boʻlsa, uning `.prj` fayli).
3. Qatlam chizma ostida koʻrinadi. Uning kredit matni chizmaning pastki oʻng qismida koʻrinadi.

Roʻyxatdagi har bir qatlamni yashirish, shaffofligini oshirish yoki kamaytirish, yuqoriga yoki pastga siljitish yoki olib tashlash mumkin.

Tizim yoki qatlamlardagi har bir oʻzgarish {{cmd:UNDO}} ning bitta qadamidir.

## Chizma bilan saqlanadi

Koordinatalar tizimi va qatlamlar roʻyxati chizmani DWG yoki DXF sifatida saqlaganingizda saqlanadi va uni istalgan kompyuterda qayta ochganingizda qaytadi. Fayllardan olingan rasmlar saqlanmaydi: ochgandan keyin ularni qayta qoʻshing. {{ui:Internetdan xarita qatlamlari}} tugmasi chizmada saqlanmaydi: u shu brauzerga tegishli, shuning uchun birov yuborgan chizma, siz uni oʻzingiz yoqmaguncha hech bir serverdan hech narsa soʻramaydi.

Boshqa dasturlar nimani koʻradi:

| Saqlangan shakl | Chizmaning joylashuvi | Xarita qatlamlari |
|---|---|---|
| DWG 2010, 2013 yoki 2018, DXF 2000 | Dasturlar geografik joylashuvni oʻqiydigan standart usulda yoziladi: tizimning EPSG kodi, bitta chizma nuqtasi va u xarita toʻrida qayerda, birliklar va shimol. | Faqat CadCraft |
| DWG 2000, 2004 yoki 2007, DXF R12 | Faqat CadCraft (saqlaganda CadCraft buni aytadi) | Faqat CadCraft |

- **Tekshirilgan:** ODA File Converter joylashuvni xatosiz oʻqiydi, DXF kutubxonasi (ezdxf) esa EPSG kodini va joylashtirishni aniq oʻqiydi.
- **Hali tekshirilmagan:** boshqa chizma dasturlari tizimni uning EPSG kodidan tanib olishi. Oʻz tizimlari roʻyxatini boshqa nomlar bilan saqlaydigan dastur chizmani joylashuvsiz koʻrsatishi mumkin.
- Boshqa dasturlar blok roʻyxatida `CADCRAFT_GEO` nomli blokni koʻrsatadi. Bu tizim va qatlamlarning CadCraft ning oʻz nusxasi; u hech qachon chizmaga joylashtirilmaydi. Uni oʻsha yerda qoldiring.

## Boshqa dasturlardan chizmalar

Boshqa dasturdan olingan chizmada geografik joylashuv boʻlsa, CadCraft uni oʻqiydi:

- Agar u EPSG kodini nomlasa, {{ui:Chizma qayerda}} oʻsha tizimni koʻrsatadi va xarita qatlamlari uning boʻyicha joylashtiriladi.
- Agar CadCraft tizimni bilmasa (boshqa dasturning oʻz nomi, mahalliy toʻr yoki masshtab koeffitsiyenti), joylashuv ishlatilmaydi, lekin saqlab qolinadi va oʻsha holatda qaytariladi, shunda boshqa dastur uni hamon topadi. Uni almashtirish uchun {{ui:Chizma qayerda}} ichidan tizim tanlang.

:::note
Xarita qatlamlari faqat ekranda chiziladi: ular chop etilmaydi. Faqat shartlari ruxsat beradigan xizmatlardan foydalaning va ularning krediti koʻrinib turishini taʼminlang.
:::
