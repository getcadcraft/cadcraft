---
title: CadCraft ni AI yordamchi bilan ishlatish
summary: Oʻzingizning AI yordamchingiz yoki skriptingiz CadCraft bilan ishlashi mumkin: u nimalarni qila oladi, istalgan MCP mijozini qanday ulash mumkin va siz qanday nazoratda qolasiz (ruxsatlar, ortga qaytarish, faollik jurnali, Uzish).
keywords: ai, yordamchi, agent, mcp, model context protocol, skript, avtomatlashtirish, buyruq satri, cli, json, token, ruxsatlar, uzish, faollik, jildlar, yoʻllar, svg, paketli
from: 06ba4ef6
---

## Nimalarni oʻrganasiz

AI yordamchi (yoki siz yozgan skript) chizmani qanday koʻrishi, CadCraft buyruqlarini qanday bajarishi, chop etish va saqlashi hamda qaysi narsalarga tegishi mumkinligini qanday hal qilishingiz mumkinligini oʻrganasiz.

CadCraft oʻzining **AI'siga ega emas** va hech narsani hech qayerga yubormaydi. Yordamchini siz taʼminlaysiz: Model Context Protocol (MCP) tilida gaplashadigan istalgan dastur. CadCraft unga faqat asboblar beradi, qaysilarini tanlashni esa siz hal qilasiz.

Bunga ikki yoʻl bilan kirish mumkin:

- **Siz ochgan chizma.** Yordamchi shu oynada, yoningizda, kompyuteringizdagi CadCraft Studio orqali ishlaydi. Bu {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Yordamchilar}} uchun.
- **Ilovani ochmasdan kompyuteringizdagi chizmalar.** CadCraft MCP serveri va `cadcraft` buyruq satri siz koʻrsatgan jildlardagi DWG va DXF fayllarini oʻqiydi va yozadi. Quyidagi "Ilovani ochmasdan fayllar bilan ishlash" boʻlimiga qarang.

## Yoqish

1. {{ui:Sozlamalar}} ni oching (ilova panelidagi tishli belgi yoki {{key:Mod+,}}) va {{ui:CadCraft}} yorligʻiga oʻting.
2. {{ui:Yordamchilar}} ostida **AI yordamchilar va skriptlarga CadCraft dan foydalanishga ruxsat berish** katakchasini belgilang. U siz belgilamaguningizcha oʻchiq turadi.
3. U nima qila olishini tanlang. **Oʻqish** dastlab belgilangan; qolganlarini faqat kerak boʻlganda belgilang.

| Ruxsat | Yordamchi nima qila oladi |
|---|---|
| Oʻqish | Chizmani koʻrish: uni tavsiflash, obyektlarni roʻyxatlash va topish, tanlovni koʻrish, koʻrinishni tavsiflash va uning rasmini olish, qatlam va chizmachilik qoidalari boʻyicha tekshirish |
| Tahrirlash | Chizmada buyruqlarni bajarish va tanlovni oʻzgartirish. Har bir amal sizning bitta qadamingiz boʻlib, uni ortga qaytarish mumkin |
| Saqlash | Chizmani saqlash (ish stolida uning fayli ichiga; brauzerda yuklab olish sifatida) |
| Eksport | PDF ga chop etish va boshqa fayllar yaratish |

## Siz tanlagan jildlardagi fayllarga ruxsat berish

CadCraft Studio da yordamchi fayllarni fayl oynalari orqali emas, balki nomi boʻyicha ochishi, saqlashi va chop etishi mumkin, lekin faqat {{ui:Yordamchilar}} › {{ui:Foydalanishi mumkin boʻlgan jildlar}} ostida qoʻshgan jildlaringiz ichida:

1. {{ui:Jild qoʻshish…}} ni tanlang va Studio ning oʻz oynasida jildni koʻrsating.
2. Endi yordamchi u yerdagi fayllarni roʻyxatlashi (`files_list`), chizmani ochishi (`drawing_open`), uni DWG versiyasida yoki DXF sifatida saqlashi, PDF yoki SVG fayliga chop etishi, LISP faylini yuklashi va buyruq soʻragan faylni berishi (`INSERT` `F`, `XATTACH`, nuqtalar fayli) yoki buyruqning faylini qayerga yozishini koʻrsatishi mumkin (`COUNT` ning CSV si, `PUBLISH`).
3. {{ui:Olib tashlash}} jildni darhol qaytarib oladi. Boshqa joylardagi yoʻllar rad etiladi, mavjud fayl esa faqat yordamchi shuni soʻragan yoki faylni oʻzi yozgan boʻlsagina almashtiriladi.

Ochish uchun **Oʻqish**, chizmani yozish uchun **Saqlash**, boshqa har qanday fayl uchun **Eksport** kerak.

Belgilamagan ruxsatlaringizdagi asboblar yordamchiga umuman taklif qilinmaydi; agar u baribir soʻrasa, CadCraft uni rad etadi va faollik jurnaliga yozadi. Kalitni oʻchirish barcha ulanishlarni bir vaqtda tugatadi. {{ui:CadCraft sozlamalarini tiklash}} ham uni oʻchiradi.

## Yordamchingizni ulash

Yordamchilar kompyuteringizdagi **CadCraft Studio** orqali ulanadi: u faqat shu kompyuterga yetib boradigan kichik server ishga tushiradi (manzil `127.0.0.1`), va Studio har safar ishga tushganda yaratadigan token bilan himoyalangan. Studio ni oching, {{ui:Yordamchini ulash}} ni tanlang va manzil hamda tokenni nusxalang.

- Yordamchingizda HTTP turidagi MCP serverini manzil bilan (u `http://127.0.0.1:47615/mcp` kabi koʻrinadi) va `Authorization: Bearer <token>` sarlavhasi bilan qoʻshing. Studio joylashtirish uchun kerakli sozlamalarni koʻrsatadi.

Studio dagi {{ui:Yangi token}} barcha ulangan yordamchilarni yangi token bilan qayta ulaydi. Tokenni hech qachon ulashmang: unga ega boʻlgan har kim Studio ishlab turgan davrda yoqilgan ilovalardan foydalanishi mumkin.

:::note
Brauzer varaqasi yordamchi uchun ulanish ocha olmaydi: brauzer ilovalarida kalit kompyuteringizdagi CadCraft Studio dan foydalanmaguningizcha taʼsir qilmaydi.
:::

## Nazorat sizda qoladi

- **Har bir amal bitta ortga qaytarish qadami**, yordamchi nomi bilan belgilangan, masalan "Yordamchi: LINE". Yordamchining oxirgi amalini butunligicha qaytarish uchun {{key:Mod+Z}} ni bosing.
- **Nima qilayotganini koʻrasiz.** Uning buyruqlari buyruqlar tarixida **[Yordamchi]** belgisi bilan chiqadi va u ishlaganda chizma qayta chiziladi.
- **U siz kutadi.** Siz buyruq oʻrtasida boʻlganingizda yordamchi faqat oʻqiy oladi, chizmani oʻzgartira olmaydi; siz tugatgach, qayta urinish haqida xabar oladi.
- **Ulanganini bilasiz.** Ilova panelidagi tugma ulangan paytda yordamchi nomini koʻrsatadi. Uning nima qila olishini koʻrish yoki uni **Uzish** uchun bosing.
- **Faollik.** {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Yordamchilar}} › {{ui:Faollik}} har bir chaqiruvni roʻyxatlaydi: qachon, qaysi asbob, bajarildimi yoki rad etildimi va u qilgan ortga qaytarish qadami. {{ui:Jurnalni saqlash}} uning nusxasini saqlab qoladi.

## Yordamchi nimani soʻrashi mumkin

| Asbob | Ruxsat | Nima qiladi |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Oʻqish | Chizma nomi, birliklari, qatlamlari, bloklari, varaqlari; ekranda nima borligi |
| `files_list`, `drawing_open` | Oʻqish | Studio: jildlaringizdagi fayllar; bittasini shu oynada ochish |
| `objects_list`, `object_get`, `selection_get` | Oʻqish | Geometriyasi, uzunligi va maydoni bilan obyektlar (yoki faqat turi va qatlami boʻyicha soni); tanlov |
| `drawing_check` | Oʻqish | Qoidalar, masalan ruxsat etilgan qatlamlar, 0-qatlamda hech narsa boʻlmasligi, ByLayer ranglar, matn balandliklari |
| `view_screenshot` | Oʻqish | Chizmaning koʻrinib turgan holatining rasmi |
| `command_run` | Tahrirlash | Buyruq satriga yozadi: `LINE 0,0 @100,0 @0,50 ` foydalanuvchi yozganidek oʻqiladi (boʻsh joy javobni tugatadi), yoki har biriga bitta javob bilan roʻyxat. Buyruqni ochiq qoldirib, keyingi chaqiruvda davom ettirishi mumkin |
| `script_run` | Tahrirlash | Skript (`.scr`) yoki LISP fayli, {{ui:APPLOAD}} yuklaganidek |
| `block_insert` | Tahrirlash | Blokni atribut qiymatlari bilan bir qadamda joylaydi |
| `selection_set`, `undo` | Tahrirlash | Keyingi buyruq uchun obyektlarni tanlaydi; oʻz qadamlarini ortga qaytaradi |
| `drawing_save` | Saqlash | CadCraft ning oʻz {{ui:Saqlash}} i yoki jildlaringizdan biriga {{ui:Boshqacha saqlash}} |
| `drawing_plot` | Eksport | Varaq yoki modelning PDF yoki SVG fayli, masshtab bilan yoki sigʻdirilgan holda (PDF tagliklari hozircha bu usulda chop etilmaydi) |

Yordamchi buyruq bajarayotganda CadCraft oʻz savollarini dialog oynasi oʻrniga buyruq satrida beradi (masalan, butun chizmani yoki bitta blokni kiritish kerakligini), shunda yordamchi ularga javob bera oladi. Kutubxona va Qidirish hali ham sizga muhtoj; yordamchiga sizdan soʻrash aytilgan.

## Ilovani ochmasdan fayllar bilan ishlash

CadCraft MCP serveri (`cadcraft-mcp`) va buyruq satri (`cadcraft`) CadCraft ning oʻz chizma kodini Node.js da oynasiz ishga tushiradi. Ularga Node.js 20 yoki undan yangi versiya kerak.

- **MCP serveri** faqat siz koʻrsatgan jildlar ichida va faqat bergan ruxsatlaringiz bilan ishlaydi: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. `--root` boʻlmasa, u hech qanday faylni ocha olmaydi; `--allow` boʻlmasa, faqat oʻqiy oladi. U IFC modellarini, hajmlarni hisoblashni hamda PDF toʻplamlaridagi belgilashlarni ham oʻqiy oladi.
- **Buyruq satri** oʻz skriptlaringiz uchun: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Bir vaqtda bir nechta fayl: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Dastur oʻqiy oladigan chiqish uchun `--json` qoʻshing.

:::note
Agar `npx @getcadcraft/mcp` paket topilmadi deb yozsa, u hali nashr qilinmagan. getcadcraft.com dagi yangiliklarda buning aytilishi kerak.
:::

## Muammo boʻlsa

- **Yordamchi CadCraft asboblarini koʻrmaydi:** shu oynada kalit yoqilganini va oyna Studio da ochiq ekanini tekshiring.
- **"tahrirlash ruxsati kerak":** {{ui:Yordamchilar}} ostida **Tahrirlash** ni belgilang, soʻng yana soʻrang.
- **"yordamchilar foydalanishi mumkin boʻlmagan jildlardan tashqarida":** bu jildni {{ui:Yordamchilar}} › {{ui:Foydalanishi mumkin boʻlgan jildlar}} ostida qoʻshing yoki yordamchidan allaqachon qoʻshilgan jilddagi faylni ishlatishni soʻrang.
- **"401" yoki "token" xatolari:** token oʻzgargan (Studio qayta ishga tushgan yoki {{ui:Yangi token}} bosilgan). Yangi tokenni yordamchi sozlamalariga nusxalang.
- **Uning oʻzgarishi notoʻgʻri boʻlsa:** {{key:Mod+Z}} ni bosing. Bir marta bosish yordamchining bitta butun amalini qaytaradi.

## Qarang

- [Yordamchilar uchun retseptlar](common:assistants-recipes): har biri chaqiradigan asboblar bilan ishlangan misollar.
