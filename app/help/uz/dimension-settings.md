---
title: Oʻlcham oʻlchamlari, oʻnlik kasrlar va masshtabini belgilash
summary: Yangi oʻlchamlar uchun matn balandligi, oʻq oʻlchami, oʻnlik kasrlar va umumiy masshtabni tanlang, mavjud oʻlchamlarni oʻzgartiring va CadCraft da oʻlcham uslublari qanday ishlashini tushuning.
keywords: oʻlcham uslubi, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, umumiy masshtab, oʻnlik kasrlar, oʻq oʻlchami, izoh masshtabi, dimtextunit, matndagi birliklar, mm, cm, m, km, millimetr, metr, dimlfac, dimpost
from: 8ec82a07
---

## Nima oʻrganasiz

Oʻlcham matni va oʻqlari qanchalik katta boʻlishini, ularni 1:50 yoki 1:100 masshtabda chop etiladigan chizma uchun qanday oʻrnatishni va allaqachon chizilgan oʻlchamlarni qanday oʻzgartirishni.

## Oʻlcham oʻlchamlari qanday ishlaydi

Har bir oʻlcham oʻz oʻlchamlari toʻplamiga ega: matn balandligi, oʻq oʻlchami, oʻnlik kasrlar, matn atrofidagi boʻshliq, yordamchi chiziqlarning oʻlcham chizigʻidan oʻtib ketish masofasi va ularning obyektdan boshlanish masofasi. Standart qiymatlar umumiy ISO uslubiga yaqin:

| Sozlama | Standart | Buyruq |
|---|---|---|
| Matn balandligi | 2.5 | {{cmd:DIMTXT}} |
| Oʻq oʻlchami | 2.5 | {{cmd:DIMASZ}} |
| Oʻnlik kasrlar | 2 (oxirgi nollar tashlanadi) | {{cmd:DIMDEC}} |
| Matn atrofidagi boʻshliq | 0.625 | {{cmd:DIMGAP}} |
| Oʻlcham chizigʻidan oʻtish | 1.25 | {{cmd:DIMEXE}} |
| Obyektdan siljish | 0.625 | {{cmd:DIMEXO}} |
| Umumiy masshtab | 1 | {{cmd:DIMSCALE}} |

Har bir oʻlcham **umumiy masshtab** ga koʻpaytiriladi. Oʻlchamlarni qogʻozda xohlaganingizdek belgilang (2.5 mm matn) va umumiy masshtabni chop etish masshtabiga oʻrnating (1:50 uchun 50). Matn shunda 2.5 × 50 = 125 chizma birligi balandlikda boʻladi, u 2.5 mm da chop etiladi.

:::note
Nomlangan oʻlcham uslublari {{cmd:DIMSTYLE}} bilan boshqariladi: quyidagi boʻlimga qarang. Har bir oʻlcham ham yaratilgandagi sozlamalarini saqlaydi, shuning uchun siz bitta oʻlchamni {{ui:Xossalar}} da alohida oʻzgartirishingiz mumkin.
:::

## Yangi oʻlchamlar uchun oʻlchamlarni belgilash

Quyidagi ikki usul faqat keyin yaratadigan oʻlchamlarni oʻzgartiradi.

### Joriy sozlamalar panelida

1. {{key:Esc}} ni bosing, shunda hech narsa tanlanmagan boʻladi. {{ui:Model}} yorligʻida oʻng panel {{ui:Joriy sozlamalar}} deb yozilgan boʻladi.
2. Panelni {{ui:Yangi oʻlchamlar}} ga qadar pastga aylantiring, qatlam, rang, birliklar va {{ui:Qatlam 0}} qatorlaridan oʻtib (kichik ekranda u pastki chekadan pastda boshlanadi). {{ui:Umumiy masshtab}} ni bosing, `50` kiriting va {{key:Enter}} ni bosing.
3. Boshqa qiymatlar kerak boʻlsa, {{ui:Matn balandligi}}, {{ui:Oʻq oʻlchami}} va {{ui:Oʻnlik kasrlar}} ni xuddi shunday oʻrnating.

Holat satri har birini tasdiqlaydi, masalan "Yangi oʻlchamlar uchun umumiy masshtab: 50".

### Buyruq satrida

1. `DIMSCALE` kiriting va {{key:Enter}} ni bosing.
2. `Enter new value for DIMSCALE <1>` soʻrovida `50` kiriting va {{key:Enter}} ni bosing.

Tarix "DIMSCALE = 50. Yangi oʻlchamlar uni ishlatadi; mavjudlarini oʻzgartirish uchun ularni tanlang." deb tasdiqlaydi. {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} va {{cmd:DIMEXO}} xuddi shunday ishlaydi. Joriy qiymatni saqlash uchun soʻrovda {{key:Enter}} ni bosing.

### Fut va dyuymlar oʻlchamlarda

Yangi oʻlchamlar chizmaning uzunlik formatidan foydalanadi: uni {{ui:Joriy sozlamalar}} dagi {{ui:Uzunlik formati}} yoki {{cmd:UNITS}} bilan belgilang (qarang: [Fut va dyuym](topic:units-papers-scales#feet-and-inches-and-fractions)), keyingi oʻlcham esa `12'-6 1/2"` deb koʻrsatiladi. {{cmd:DIMLUNIT}} faqat oʻlchamlar formatini belgilaydi (2 oʻnlik kasr, 3 muhandislik, 4 arxitektura, 5 kasr). Allaqachon chizilgan oʻlcham uchun uni tanlang va {{ui:Xossalar}} da {{ui:Format}} ni tanlang; kasr formatida uning {{ui:Kasr}} katagi ikkining darajasini oladi (4 = 1/16).

## Oʻlchamlar mm, cm, m yoki km da

Oʻlcham chizma birliklarida oʻlchaydi. U uzunlikni buning oʻrniga millimetr, santimetr, metr yoki kilometrda yozishi mumkin, birlik esa son bilan birga yoziladi: 1250 mm li devor `1250 mm`, `125 cm`, `1.25 m` yoki `0.00125 km` deb yoziladi.

1. Avval chizmaning {{ui:Birliklar}} ni {{ui:Joriy sozlamalar}} da oʻrnating (qarang: [Birliklar, qogʻoz oʻlchamlari va masshtablar](topic:units-papers-scales#drawing-units)), shunda CadCraft bir chizma birligi nimaga tengligini biladi. Birliksiz chizma millimetr deb oʻqiladi, buni {{cmd:DIMTEXTUNIT}} aytadi.
2. Yangi oʻlchamlar uchun: {{key:Esc}} ni bosing, shunda hech narsa tanlanmagan boʻladi, soʻngra {{ui:Yangi oʻlchamlar}} ostida {{ui:Matndagi birliklar}} ni tanlang: {{ui:Chizma birliklari}}, `mm`, `cm`, `m` yoki `km`.
3. Allaqachon chizilgan oʻlchamlar uchun: ularni tanlang va {{ui:Xossalar}} › {{ui:Asosiy birliklar}} da {{ui:Matndagi birliklar}} ni tanlang.

Yoki {{cmd:DIMTEXTUNIT}} (`DTU`) ni yozing va `D`, `MM`, `CM`, `M` yoki `KM` deb javob bering: oʻlchamlar tanlangan boʻlsa, u ularni oʻzgartiradi (bitta Ortga qaytarish qadami); hech narsa tanlanmagan boʻlsa, yangi oʻlchamlarni belgilaydi.

{{ui:Oʻnlik kasrlar}} ({{cmd:DIMDEC}}) hali ham kasrdagi xonalar sonini belgilaydi: metr va 3 xona bilan 1234 mm `1.234 m` deb yoziladi. Matn oʻnli son sifatida yoziladi. Varaqda oʻlchamlar varaq qogʻozi birligida (millimetr yoki dyuym) oʻlchanadi.

Saqlangan DWG yoki DXF tanlovni oʻlchamning oʻlchov masshtabi (DIMLFAC) va qoʻshimcha belgi (DIMPOST, ` m`) sifatida saqlaydi, shuning uchun boshqa dasturlar bir xil matnni koʻrsatadi. Agar keyinchalik chizmaning {{ui:Birliklar}} ni oʻzgartirsangiz, mm, cm, m yoki km da yozilgan oʻlchamlar qayta moslashtiriladi, shuning uchun ular toʻgʻri uzunlikni yozishda davom etadi. {{ui:Qoʻlda belgilangan (masshtab yoki belgi)}} degani, oʻlchamning {{ui:Oʻlchov masshtabi}} yoki belgisi boshqacha usulda oʻrnatilgan; ularni almashtirish uchun birlikni tanlang.

## Allaqachon chizilgan oʻlchamlarni oʻzgartirish

1. Bitta oʻlchamni bosing. Oʻng panel sarlavhasi {{ui:Oʻlcham}} deb yoziladi.
2. Sozlamalar boʻlimlarga boʻlingan; keyingilariga yetish uchun panelni pastga aylantiring:
   - {{ui:Umumiy}}: {{ui:Oʻlcham uslubi}}
   - {{ui:Geometriya}}: {{ui:Turi}} va {{ui:Oʻlchov}} (faqat oʻqish uchun)
   - {{ui:Matn}}: {{ui:Matnni almashtirish}} va {{ui:Matn balandligi}}
   - {{ui:Chiziqlar va oʻqlar}}: {{ui:Oʻq oʻlchami}}
   - {{ui:Joylashtirish}}: {{ui:Umumiy masshtab}}
   - {{ui:Asosiy birliklar}}: {{ui:Oʻnlik kasrlar}}
3. Yangi qiymat kiriting va {{key:Enter}} ni bosing.

Oʻlcham darhol qayta chiziladi. Burchakli oʻlchamlar uchun {{ui:Oʻnlik kasrlar (°)}} burchakning kasr xonalarini belgilaydi.

:::note
Bir nechta oʻlcham tanlanganda panelda ular umumiy boʻlgan qatorlar koʻrsatiladi; ular orasida farq qiladigan qiymat {{ui:Turlicha}} deb yoziladi. Kiritgan qiymatingiz tanlangan barcha oʻlchamlarni bir qadamda oʻzgartiradi, shuning uchun bitta {{key:Mod+Z}} hammasini qaytaradi.
:::

## Ochilgan chizmalardan olingan oʻlchamlar

Ochilgan DWG yoki DXF dan olingan oʻlcham uni boshqa dastur chizgandek koʻrsatiladi. Uning paneli shunday deydi: "Uni yaratgan dastur chizgandek koʻrsatilgan. Oʻzgartirsangiz, CadCraft uni oʻz uslubida qayta chizadi." Biror qiymatni oʻzgartirsangiz, tutqichni surib yoki oʻlchamni siljitsangiz, CadCraft uni oʻz oʻq uchlari va shrifti bilan qayta chizadi, fayldan oʻqilgan oʻlchamlardan foydalanib.

Ayrim oʻlchamlarni faqat chizilgandek oʻqish mumkin, tahrirlanadigan oʻlcham sifatida emas; panelda "Chizilgan manba" va blok nomi koʻrsatiladi, "Bu fayl haqida" qutisi ularni sanaydi.

## Keng tarqalgan xatolar

- **{{cmd:DIMSCALE}} ni oʻzgartirdingiz, ekranda hech narsa oʻzgarmadi.** Sozlama yangi oʻlchamlar uchun. Mavjudlarini tanlang va panelda {{ui:Umumiy masshtab}} ni oʻzgartiring.
- **Oʻnlik kasrlar oʻrnatilganidan kam raqam koʻrsatadi.** Oxirgi nollar tashlanadi: 2 oʻnlik kasr `1250` va `1250.5` koʻrsatadi, `1250.00` emas.
- **Matn qogʻozda viewportda toʻgʻri balandlikda, lekin model chop etilganda notoʻgʻri.** Umumiy masshtab siz chop etadigan masshtabga mos kelishi kerak. Qogʻozga moslab chop etish gʻalati masshtab beradi; chop etish oynasida standart masshtabni tanlang.
- **Matnda mm yoki m kabi birliklar.** {{ui:Matndagi birliklar}} ni tanlang (qarang: [Oʻlchamlar mm, cm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Sondan keyingi boshqa soʻz uchun uni matnni almashtirishda yozing: `<> TYP.`.

## Nomlangan oʻlcham uslublari

`DIMSTYLE` (`D`) kiriting, {{ui:Oʻlcham uslublari boshqaruvchisi}} ochiladi. U chizmadagi uslublarni, har biridan nechta oʻlcham foydalanishini va qaysi biri joriyligini koʻrsatadi. **Standart** doim bor boʻladi.

- {{ui:Joriyni oʻrnatish}}: yangi oʻlchamlar shu uslubning sozlamalaridan foydalanadi va uning nomini oladi.
- {{ui:Yangi…}}: siz tanlagan uslubning nusxasi sifatida boshlanadigan yangi uslub.
- {{ui:Oʻzgartirish…}}: {{ui:Xossalar}} ning oʻlcham boʻlimidagi maydonlar bilan bir xil (chiziqlar va oʻqlar, matn, joylashtirish, birliklar, muqobil birliklar, toʻgʻrilash). {{ui:OK}} bosilsa uslub oʻzgaradi **va u ishlatadigan har bir oʻlcham ham oʻzgaradi**, har bir sozlama boʻyicha. Bitta oʻlchamda oʻzgartirgan sozlama, uslub oʻsha sozlamani oʻzgartirmasa, oʻz holicha qoladi.
- {{ui:Nomini oʻzgartirish…}} va {{ui:Oʻchirish}}: Standart nomini oʻzgartirib yoki oʻchirib boʻlmaydi, joriy uslub yoki oʻlchamlar ishlatayotgan uslub ham shunday.
- {{ui:Solishtirish…}}: ikki uslub orasidagi farqlar.
- {{ui:Tanlanganlarga qoʻllash}}: avval oʻlchamlarni tanlang; ular uslubning sozlamalari va nomini oladi.

`-DIMSTYLE` buyruq satrida ham xuddi shunday ishlaydi: `Restore`, `Save` (joriy sozlamalar, shu jumladan {{cmd:DIMTXT}} va boshqalar bilan yozganlaringiz, nom ostida), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Uslublar DWG yoki DXF da (uning oʻlcham uslublari jadvalida) saqlanadi va ochgan fayllaringizdan oʻqiladi. *Joriy* uslub saqlanmaydi: chizma doim Standart joriy holda ochiladi. Standart boshqa uslub joriy boʻlganda ham oʻz sozlamalarini saqlaydi.

## Oʻlcham matni va chiziqlarini oʻzgartirish

{{cmd:DIMEDIT}} (`DED`) tanlagan oʻlchamlar bilan ishlaydi: **Bosh joyi** matnni uslub qoʻygan joyiga qaytaradi, **Yangi** boshqa matn yozadi (`<>` oʻlchov qiymatini bildiradi), **Aylantirish** matnni aylantiradi, **Qiyalik** chiziqli va moslashgan oʻlchamlarning yordamchi chiziqlarini siz kiritgan burchakka ogʻdiradi (hech biri kerak boʻlmasa {{key:Enter}} ni bosing). {{cmd:DIMTEDIT}} matnni oʻlcham chizigʻining **Chap**, **Oʻng** yoki **Markaz** tomoniga oʻtkazadi, yoki uni aylantiradi (**Burchak**), yoki **Bosh joyi** ga qaytaradi. Matn doim oʻlcham chizigʻida turadi: uni erkin joyga sudrab boʻlmaydi.
