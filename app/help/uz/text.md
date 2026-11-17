---
title: Matn va yorliqlar qoʻshish
summary: Xona yorliqlarini bir qatorli matn bilan joylashtiring, qator oʻraydigan izohlarni joyida yozilgan abzats matni bilan yozing va keyin matnni tahrirlang.
keywords: matn, dtext, mtext, mleader, multileader, yetakchi, revcloud, revizion bulut, bulut, topish, almashtirish, topish va almashtirish, abzats, oʻrash, qator oraligʻi, yorliq, izoh, izohlash, balandlik, hizalash, textmask, fon niqobi, niqob, wipeout, aylantirish, matnni tahrirlash, ddedit, textedit, shrift
from: 4b76be99
---

## Nima yasaysiz

Ikkita xona yorligʻi, ularning xonalarida markazlashtirilgan, kengligiga qarab oʻraladigan izoh va keyin yorliqlardan birini tuzatish.

## Matn balandligi va chizma masshtabi

Matn balandligi chizma birliklarida beriladi. 1:50 masshtabda chop etiladigan millimetrli chizmada qogʻozda 2.5 mm balandlikdagi matn modelda 2.5 × 50 = 125 birlik balandlikda boʻlishi kerak. Varaq yorligʻida esa qogʻoz birliklarida chizasiz, shuning uchun u yerda 2.5 qogʻozda 2.5 mm degani.

## Markazlashtirilgan yorliq joylashtirish

1. `DT` ni yozing va {{key:Enter}} ni bosing (yoki asboblar panelidagi {{ui:Matn}} tugmasini bosing). Soʻrov: `Matnning boshlanish nuqtasini koʻrsating [Hizalash (J)]:`.
2. `J` ni yozing va {{key:Enter}} ni bosing.
3. `Variantni kiriting [Chap/Markaz/Oʻng/Oʻrta/TL/MC] <L>:` soʻrovida `MC` ni yozing va {{key:Enter}} ni bosing.
4. `Matnning qoʻyish nuqtasini koʻrsating` soʻrovida xonaning oʻrtasini bosing.
5. `Balandlikni koʻrsating` soʻrovida `250` ni yozing va {{key:Enter}} ni bosing.
6. `Matnning aylanish burchagini koʻrsating <0>` soʻrovida {{key:Enter}} ni bosing.
7. `Matnni kiriting` soʻrovida `OSHXONA` ni yozing va {{key:Enter}} ni bosing.

Yorliq bosgan nuqtangizda markazlashtirilgan holda paydo boʻladi.

8. Buyruqni tugatish uchun boʻsh `Matnni kiriting` soʻrovida {{key:Enter}} ni bosing.

## Qator oʻraydigan izoh yozish

Abzats matni ({{cmd:MTEXT}}) kengligiga qarab oʻraladi va toʻgʻridan-toʻgʻri chizmaga yoziladi.

1. `T` ni yozing va {{key:Enter}} ni bosing yoki asboblar panelidagi {{ui:Abzats}} tugmasini bosing.
2. `Birinchi burchakni koʻrsating` soʻrovida izohning chap yuqori burchagi boʻladigan joyni bosing.
3. Avval balandlikni oʻzgartirish uchun `H` ni yozing, {{key:Enter}} ni bosing, `250` ni yozing va {{key:Enter}} ni bosing.
4. `Qarama-qarshi burchakni koʻrsating [Balandlik (H)/Hizalash (J)/Qator oraligʻi (L)/Aylantirish (R)/Kenglik (W)]` soʻrovida birinchi burchakning oʻng tomonini bosing. Oʻtadigan masofa matn oʻraladigan kenglik boʻladi; qanchalik pastga bosganingiz uni cheklamaydi.
5. Chizma ustida kursor turgan oyna ochiladi. `BARCHA OʻLCHAMLAR, AGAR BOSHQACHA KOʻRSATILMAGAN BOʻLSA, MILLIMETRLARDA` ni yozing. Soʻzlar yozganingizda kenglik boʻyicha oʻraladi.
6. Yangi abzats boshlash uchun {{key:Enter}} ni bosing va `SAYTDA TEKSHIRING` ni yozing.
7. {{key:Mod+Enter}} ni bosing, {{ui:OK}} ni bosing yoki qutidan tashqarida istalgan joyni bosing. Izoh bitta obyekt boʻladi.

Qutining ustidagi panel yozish paytida {{ui:Balandlik}}, {{ui:Qator oraligʻi}} (1 odatiy, 1.5 esa yana yarmi qoʻshilgan), {{ui:Kenglik}} (0 = oʻrashsiz) va {{ui:Hizalash}} ni oʻzgartiradi. {{key:Esc}} yoki {{ui:Bekor qilish}} hech narsa qoʻshmasdan uni yopadi.

Ikkinchi burchakdagi variantlar: `H` balandlik, `J` hizalash (`TL` chap yuqori … `BR` oʻng quyi: qoʻzgalmay turadigan burchak yoki qutining oʻrtasi), `L` qator oraligʻi, `R` aylantirish, `W` ikkinchi burchak oʻrniga yoziladigan kenglik.

:::note
Quti ochiq boʻlganda {{key:Space}} boʻshliq yozadi, {{key:Enter}} esa yangi abzats boshlaydi. Saqlangan DWG abzats matnini MTEXT sifatida saqlaydi; DXF R12 da abzats matni yoʻq, shuning uchun har bir satr oʻz matni sifatida saqlanadi.
:::

### Oʻrniga bir nechta bir qatorli matn

{{cmd:TEXT}} (`DT`) har safar bitta satr soʻraydi: har bir {{key:Enter}} keyingi satrni boshlaydi, matn balandligining 1.667 barobar pastida, va har bir satr oʻz obyekti boʻladi. Tugatish uchun boʻsh satrda {{key:Enter}} ni bosing.

## Hizalash variantlari

| Variant | Bosgan nuqtangiz |
|---|---|
| Chap (odatiy) | Asosiy chiziqning chap uchi |
| Markaz | Asosiy chiziqning oʻrtasi |
| Oʻng | Asosiy chiziqning oʻng uchi |
| Oʻrta, MC | Matnning oʻrtasi, ham yonma-yon, ham yuqoriga-pastga |
| TL | Chap yuqori burchak |

## Matnni tahrirlash

1. Matn obyektini ikki marta bosing. U abzats matni bilan bir xil qutida ochiladi, kursor oxirida boʻladi.
2. Soʻzlarni oʻzgartiring.
3. {{key:Mod+Enter}} ni bosing yoki qutidan tashqarida bosing. Chizmadagi matn oʻzgaradi; {{key:Esc}} uni oʻzgarishsiz qoldiradi.

{{cmd:TEXTEDIT}} (`ED`) xuddi shuni bajaradi: matnlarni birin-ketin tanlang va tugagach {{key:Enter}} ni bosing.

Oʻng panelda oʻzgartirish uchun matnni tanlang: {{ui:Matn}}, {{ui:Balandlik}}, {{ui:Oʻrash kengligi}} (0 = oʻrashsiz), {{ui:Qator oraligʻi}}, {{ui:Aylantirish}}, X va Y joylashuvi va {{ui:Hizalash}}. {{ui:Hizalash}} roʻyxatida boshqa dasturlardan kelgan matnlar baʼzan ishlatadigan Pastki chap ham bor.

## Boshqa dasturlardan kelgan abzats matni ichidagi formatlash

DWG yoki DXF dagi abzats matni ichida kodlar boʻlishi mumkin: har bir soʻz uchun ranglar, qalin va kursiv, tagiga chizilgan, ustiga chizilgan va oʻchirilgan matn, 1/2 kabi ustma-ust kasrlar va soʻz uchun boshqa balandlik. CadCraft bu kodlarni saqlaydi, ularni chizadi (ekranda va chop etilgan PDF da) va oʻzgarishsiz qaytarib saqlaydi.

Bunday matnni tahrirlasangiz (ikki marta bosish, {{cmd:TEXTEDIT}}, oʻng panelning {{ui:Matn}} maydoni yoki {{cmd:FIND}} da almashtirish bilan), siz uning oddiy soʻzlarini tahrirlaysiz. Yozgan soʻzingiz yonidagi boʻlakka tushadi va uning rangi va uslubini oladi; boshqa kodlar oʻz joyida qoladi. Ustma-ust kasrning raqamlarini qayta yozsangiz, bu kasr oddiy matnga aylanadi. Butun matnni {{ui:Matn}} maydonidan oʻrnatish kodlarni faqat qaysi soʻzlar qolganini bilish mumkin boʻlgan joylarda saqlaydi.

Shrift nomlari (`\F`) saqlanadi va yoziladi, lekin hammasi bitta Helvetica uslubidagi shriftda chiziladi. Kodlarni yozish uchun hali asboblar paneli yoʻq.

## Biror narsaga koʻrsatish: koʻp yetakchili yozuvlar

{{ui:Izohlash}} guruhidagi {{ui:Yetakchi}} ({{cmd:MLEADER}}, `MLD`) bitta obyekt sifatida oʻq, yetakchi chiziq, qisqa tushish va izohni chizadi.

1. {{ui:Yetakchi}} ni bosing. `Yetakchi oʻq uchining joyini koʻrsating` soʻrovida izoh nima haqida ekanligini bosing.
2. `Yetakchi tushish joyini koʻrsating` soʻrovida izoh qayerga borishini bosing. Tushish siz bosgan tomonga buriladi.
3. Ochilgan qutiga izohni yozing va {{key:Mod+Enter}} ni bosing.

Birinchi savoldagi `A` va `L` oʻq uchi oʻlchamini va tushish uzunligini belgilaydi; matn balandligi yangi oʻlchamlar uchun {{ui:Matn balandligi}} dan olinadi, {{ui:Umumiy masshtab}} ga koʻpaytiriladi. Soʻzlarini oʻzgartirish uchun koʻp yetakchini ikki marta bosing. Ushlagichlar oʻq uchi va tushishni siljitadi; izoh tushishga ergashadi. {{ui:Xossalar}} da: {{ui:Matn}}, {{ui:Balandlik}}, {{ui:Oʻrash kengligi}}, {{ui:Oʻq uchi oʻlchami}} va {{ui:Tushish masofasi}}.

:::note
Koʻp yetakchilar DWG da haqiqiy koʻp yetakchi sifatida saqlanadi. DXF da R12 yoki 2000 da koʻp yetakchi yoʻq, shuning uchun u yerda ular chizadigan chiziqlar, oʻq uchi va matn sifatida saqlanadi.
:::

## Oʻzgarishlarni revizion bulut bilan belgilash

{{ui:Izohlash}} › {{ui:Koʻproq}} › {{ui:Revizion bulut}} ({{cmd:REVCLOUD}}, `RC`) oʻzgargan joy atrofida yoylardan bulut chizadi. Tarix yoy uzunligini va ishlatiladigan turni koʻrsatadi.

- **Toʻrtburchak** (birinchi marta): ikki burchakni bosing.
- `P` **Koʻpburchak**: burchaklarni bosing, {{key:Enter}} bulutni yopadi.
- `F` **Erkin**: boshlanadigan joyni bosing va koʻrsatkichni bosmasdan maydon atrofida harakatlantiring; har bir yoy uzunligida yangi yoy qoʻshiladi. Yopish uchun bosing yoki {{key:Enter}} ni bosing.
- `O` **Obyekt**: yopiq polichiziq, aylana yoki ellipsni tanlang (yoki chiziq, yoy yoki ochiq polichiziq); u bulutga aylanadi. `Yoʻnalishni teskari qilamizmi?` soʻrovida `Y` yoylarni ichkariga buradi.
- `A` **Yoy uzunligi**: har bir yoyning uzunligi. Chop etish masshtabiga mos keladiganini tanlang.

Bulut yoylardan iborat yopiq polichiziq, shuning uchun u har qanday shaklda saqlanadi.

## Soʻzlarni topish va almashtirish

{{ui:Tahrirlash}} › {{ui:Koʻproq}} › {{ui:Topish va almashtirish}} ({{cmd:FIND}}) ochiq varaqdagi matn, blok atributlarining qiymatlari va oʻlcham matnini qidiradi (yoki faqat tanlangan obyektlarda).

1. {{ui:Topish}} maydoniga soʻzlarni yozing. Roʻyxat har bir joyni va sonini koʻrsatadi.
2. Kerak boʻlsa {{ui:Katta-kichik harfni hisobga olish}}, {{ui:Faqat butun soʻzlar}} yoki {{ui:Joker belgilardan foydalaning (* va ?)}} ni tanlang va qidirilmasligi kerak boʻlgan narsalarning belgisini olib tashlang.
3. Shu obyektlarni tanlash uchun {{ui:Topilganlarni tanlash}} ni bosing, yoki {{ui:Almashtirish}} maydoniga yangi soʻzlarni yozing (roʻyxat har biri nimaga aylanishini koʻrsatadi) va {{ui:Hammasini almashtirish}} ni bosing. Bitta {{key:Mod+Z}} barcha almashtirishlarni bekor qiladi.

Oʻlchamning oʻlchangan qiymati matn emas, shuning uchun u hech qachon almashtirilmaydi: `<> TYP.` da faqat `TYP.` almashtirilishi mumkin.

## Yorliq orqasidagi chiziqlarni yashirish

1. Matnlarni tanlang, {{cmd:TEXTMASK}} ni yozing va {{key:Enter}} ni bosing.
2. `B` chizmaning fonini ularning orqasiga boʻyaydi; `C` rang raqamini soʻraydi. `O` niqobni olib tashlaydi.
3. `Chegara siljish koeffitsiyenti`: {{key:Enter}} 1.5 ni saqlaydi, bu matn atrofida matn balandligining yarmi.

Niqob matn ostidagi chiziqlarni ekranda va chop etganingizda yopadi. DWG 2004 yoki undan yangi va DXF 2000 uni saqlaydi; 2000 DWG formati va DXF R12 buni qila olmaydi, va saqlash bu haqda xabar beradi.

## Shrift

Barcha matn ekranda va PDF larda Helvetica uslubidagi shriftda chiziladi. Ochilgan chizmalardan kelgan matn soʻzlarini, balandligini va joylashuvini saqlaydi, lekin asl shriftini emas (abzats matni ichidagi shrift nomi faylda saqlanadi, yuqoriga qarang).

Chop etilgan PDF larda istalgan Yevropa yozuvi, kirill yoki yunon matni oʻzidek chop etiladi (PDF kerakli harflarni oʻzida saqlaydi va matnni hali ham tanlash va qidirish mumkin). Xitoy, yapon va koreys matni ham oʻzidek chop etiladi (chop etish birinchi marta kerak boʻlganda kattaroq shriftni yuklab oladi). Arab, fors, urdu va ibroniy matni ham oʻzidek chop etiladi (keyingi boʻlimga qarang). Hech bir shriftda harfi boʻlmagan belgilar "?" koʻrinishida chop etiladi va tarix qancha boʻlganini aytadi.

## Oʻngdan chapga matn: arab, fors, urdu, ibroniy

Matnni boshqa joydagidek yozing: {{cmd:TEXT}} va {{cmd:MTEXT}} har bir satrni oʻqish tartibida chizadi. Birinchi harfi arab yoki ibroniy boʻlgan satr oʻngdan chapga oʻqiladi; undagi raqamlar va lotin soʻzlari oʻzining chapdan oʻngga tartibini saqlaydi, arab yozuvidagi harflar esa bogʻlanadi. Lotin harfi bilan boshlanadigan satr chapdan oʻngga qoladi, oʻngdan chapga soʻzlar esa ichida oʻz joyida boʻladi. Koʻp satrli matnning har bir abzatsi oʻz yoʻnalishiga ega, oʻraladigan abzats esa har bir satrda uni saqlaydi.

Matn yozganingizdek saqlanadi, shuning uchun DWG va DXF fayllari uni boshqa dasturlar bilan oʻzgarishsiz almashadi. Qoʻyish nuqtasi va hizalash ({{ui:Chap}}, {{ui:Markaz}}, {{ui:Oʻng}}) istalgan matn bilan bir xil tomonni anglatadi: oʻng uchidan osilishi kerak boʻlgan oʻngdan chapga izoh {{ui:Oʻng}} ni talab qiladi.

Ekranda harflar tizim shriftlaridan olinadi. Chop etilgan PDF da ibroniy lotin matni bilan bir xil joylashtirilgan shriftdan foydalanadi; arab yozuvidagi matn chop etishga yana bir shrift yuklaydi (1 MB dan kam, bir marta), shundan keyin butun PDF shu shriftda chop etiladi. Bu shriftda uchta urdu belgisi uchun (heh goal, yeh barree va urdu toʻliq nuqtasi) oʻz shakli yoʻq: ular eng yaqin arab harfi shaklida chop etiladi. Arab yozuvi va xitoy, yapon yoki koreys matni bor chizmada ularning biri "?" koʻrinishida chop etiladi, chunki chop etish bitta shrift olib yuradi. Yuklangan SHX shriftidagi matn, agar shrift harflarni Unicode oʻrinlarida saqlasa, tartiblanadi va bogʻlanadi; allaqachon shakllantirilgan eski shriftlar uchun {{cmd:SHXFONTS}} da oldingidek {{ui:Teskari (R)}} ni ishlating.

## Keng tarqalgan xatolar

- **Matn koʻrinmayapti, juda kichik.** Balandlik chizma birliklarida. Katta chizmada katta balandlikdan foydalaning (yuqoriga qarang) yoki yaqinroq kattalashtiring.
- **Buyruq bir satrdan keyin tugadi.** {{cmd:TEXT}} da boʻsh satrda {{key:Enter}} ni bosdingiz. Uni qayta boshlang yoki abzats matnidan (`T`) foydalaning, bu yerda {{key:Enter}} yangi abzats boshlaydi.
- **`T` satr soʻramasdan qutini ochdi.** AutoCAD dagidek, `T` abzats matni ({{cmd:MTEXT}}); bir qatorli matn `DT`.
- **AutoCAD da matn boshqa joyda oʻraladi.** CadCraft Helvetica kengliklari bilan oʻraydi; boshqa shrift soʻzni satrga koʻproq yoki kamroq sigʻdirishi mumkin.
- **Aks ettirilgan nusxadagi matn.** U aks ettirilgan holda joylashtiriladi, lekin chapdan oʻngga oʻqilishi mumkin boʻlib qoladi.
