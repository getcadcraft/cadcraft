---
title: Oʻz SHX shriftlaringizda matn chizish
summary: CadCraft ga SHX shriftlar papkasini bering (yoki fayllarni tanlang); ularni nomlagan matn uslublari ekranda, chop etishda va PDF da oʻsha shriftlarda chiziladi, uslubning balandligi, kenglik koeffitsienti va qiyaligi bilan.
keywords: shx, shriftlar, shrift, shakl shrifti, katta shrift, bigfont, unifont, eski, fors, arab, matn uslubi, yoʻq shrift, shrift almashtirildi, SHXFONTS, papka, teskari, vizual tartib, simplex, isocp
from: 14b0a4ab
---

Chizmalar boshqa dasturlardan **SHX shriftlar** ni matn uslublarida koʻrsatadi, DWG esa ularni oʻzida saqlamaydi. Shrift boʻlmasa, CadCraft matnni oʻz shriftida chizadi. Bu oddiy lotin matnlari uchun yaxshi, lekin oddiy belgi kodlarini boshqa harf shakllariga moslaydigan eski shriftlar uchun emas, masalan eski fors izohlari.

Shriftlarni bering, va CadCraft ularda chizadi.

## Shriftlaringizni yuklang

{{cmd:SHXFONTS}} (`SHX`) ni kiriting va tanlang:

- {{ui:[Jild (F)]}} (CadCraft Studio): papka tanlang. Undagi har bir `.shx` fayl hozir oʻqiladi va CadCraft har ishga tushganda yana.
- {{ui:Fayllar}} (brauzer): bir yoki bir nechta `.shx` faylni tanlang. Ular shu brauzerda saqlanadi va hech qachon yuklanmaydi.
- {{ui:Roʻyxat (L)}}: yuklangan shriftlar, va ochiq chizma nomlagan, lekin siz yuklamagan shriftlar.
- {{ui:Olib tashlash}} va {{ui:Tozalash}}: bitta shriftni yoki hammasini unutish.

CadCraft uchinchi tomon shriftlarini oʻz ichiga qoʻshmaydi, shuning uchun ularni hech qachon taqdim etmaydi: ular sizdan keladi. Chizma faqat shriftlarining nomini saqlaydi va ularning nusxasini saqlamaydi.

## Nima sodir boʻladi

Matn uslubining shrift nomi yuklangan shrift bilan uning nomi boʻyicha moslashadi: katta-kichik harf, papka va `.shx` eʼtiborga olinmaydi (`SIMPLEX.SHX` `simplex` ni topadi). Bunday uslubdagi matn chiziqlar sifatida chiziladi: ekranda, chop etishda va PDF da, matnning oʻz joyida, balandligida, aylanishida, kenglik koeffitsientida va qiyalik burchagida. Uning kengligi shriftning oʻzidan, shuning uchun {{ui:Markaz}} va {{ui:Oʻng}} tekislash, oʻrash va tanlash siz koʻrgan narsaga mos keladi. Yuklanmagan shriftli uslub oʻrnatilgan shaklini saqlaydi, va yuklanmagan shriftlarni nomlagan chizmani ochganda buyruq satri buni aytadi.

Standart uslub ham hisobga olinadi: oʻz shriftini nomlagan Standart uslubli chizma uni saqlab qoladi.

## Shriftlar allaqachon vizual tartibda

Koʻp eski fors va arab SHX shriftlari harflarni ekran uchun shakllantirib, chapdan oʻngga chizadi, shuning uchun mantiqiy tartibda yozilgan matn orqaga chiqadi. {{cmd:SHXFONTS}} ni kiriting, {{ui:Teskari (R)}} ni tanlang va shriftni nomlang: uning matni oxirgi harfi birinchi boʻlib joylashtiriladi. Uni bekor qilish uchun yana ishga tushiring. Bu almashtirgich shriftga tegishli, shu brauzerda saqlanadi va chizmada saqlanmaydi.

## Hali qamrab olinmagan narsalar

- Formatlash kodlari bilan matn (MTEXT da ranglar, stacklar) oʻrnatilgan shaklda qoladi.
- Katta shriftlar (ikki baytli turdagi) shriftda yoʻq kodlar oʻrniga toʻldiradi, lekin CadCraft allaqachon Unicodega aylantirgan Sharqiy Osiyo kod sahifasidagi matn shriftning ikki baytli kodlariga qaytarilmaydi.
- Shrift oʻquvchisi formatning chop etilgan taʼrifiga amal qiladi va CadCraft uchun yaratilgan shriftlarda sinovdan oʻtgan. Sizning shriftingizdan biri notoʻgʻri chizilsa, bizga shrift va chizmani yuboring.
