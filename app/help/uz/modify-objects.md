---
title: Koʻchirish, nusxalash, burish, masshtablash, aks ettirish, choʻzish va massiv
summary: Asosiy oʻzgartirish buyruqlari, asosiy nuqtalar, kiritilgan masofalar va ortga qaytarish yordamida xonadagi mebelni joylashtiring.
keywords: koʻchirish, nusxalash, burish, masshtablash, aks ettirish, choʻzish, massiv, birlashtirish, matchprop, xususiyatlarni moslashtirish, moʻyqalam, arrayrect, arraypolar, qutb massivi, oʻchirish, ajratish, ortga qaytarish, qayta bajarish, asosiy nuqta, siljish, oʻzgartirish, tekislash, teng taqsimlash, bir chiziqqa joylashtirish, teng oraliq
from: 8eaeee6c
---

## Nima yasaysiz

Bitta stul bilan stol: stul stol atrofida nusxalanadi, buriladi, aks ettiriladi va oʻlchami oʻzgartiriladi. Jarayonda {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} va {{cmd:UNDO}} buyruqlaridan foydalanasiz.

## Qismlarni chizing

1. `REC` kiriting va {{key:Enter}} bosing, `0,0` kiriting va {{key:Enter}} bosing, soʻng `@1800,900` kiriting va {{key:Enter}} bosing. Bu stol.
2. `REC` kiriting va {{key:Enter}} bosing, `300,-700` kiriting va {{key:Enter}} bosing, soʻng `@450,450` kiriting va {{key:Enter}} bosing. Bu stol ostidagi stul.
3. {{ui:Hammasini koʻrsatish}} ni bosing.

## Siljitish: asosiy nuqta, soʻng ikkinchi nuqta

Har bir koʻchirish, nusxalash, burish va masshtablash **asosiy nuqta**dan boshlanadi: bu birga olib yuriladigan yoki atrofida buriladigan nuqta.

1. Stulni tanlash uchun uni bosing.
2. `M` kiriting va {{key:Enter}} bosing. Tarixda `1 found` deb yoziladi.
3. `Specify base point` soʻrovida stulning yuqori chap burchagiga ilashing (Oxirgi nuqta) va bosing.
4. `Specify second point` soʻrovida `@0,200` kiriting va {{key:Enter}} bosing.

Stul 200 ga yuqoriga, stolga yaqinroq siljiydi.

:::tip
`Specify base point` soʻrovida siljish oʻrniga masofa berish uchun `D` kiriting: CadCraft soʻng `Specify displacement` soʻraydi, siz gorizontal va vertikal qancha surilishini kiritasiz, masalan `0,200` (`@` kerak emas).
:::

## Nusxalash, istalgancha

1. Stulni bosing.
2. `CO` kiriting va {{key:Enter}} bosing.
3. Stulning pastki chap burchagiga ilashing va asosiy nuqta sifatida bosing.
4. `@600,0` kiriting va {{key:Enter}} bosing. Nusxa oʻngga 600 ga qoʻyiladi.
5. `@600,0` yana kiriting va {{key:Enter}} bosing. Ikkinchi nusxa asl nusxadan oʻngga 1200 da paydo boʻladi.
6. Buyruqni tugatish uchun {{key:Enter}} bosing.

{{cmd:COPY}} siz {{key:Enter}} bosguncha davom etadi. Har bir nusxa asosiy nuqta bilan siz bergan nuqta orasidagi masofa boʻyicha joylashadi. `@` nuqta oxirgi kiritilgan nuqtadan hisoblanadi; birinchi nusxadan keyin bu oʻsha nusxaning nuqtasi boʻladi, shuning uchun `@600,0` ikki marta 600 va 1200 da nusxa beradi. Buyruqdan chiqmasdan oxirgi nusxani qaytarib olish uchun `U` kiriting va {{key:Enter}} bosing.

Stol ostida qatorda uchta stul koʻrinishi kerak.

:::tip
{{cmd:COPY}} bitta chizma ichida, asosiy nuqta bilan joylashtirilgan nusxalar uchun. Obyektlarni boshqa chizmaga yoki yorliqqa koʻchirish yoki keyinroq joylashtirish uchun buferdan foydalaning: {{key:Mod+C}}, soʻng {{key:Mod+V}}. {{key:Mod+D}} kursor bilan birga harakatlanadigan bitta nusxa yaratadi. Qarang: [Nusxalash, joylashtirish va takrorlash](topic:copy-paste).
:::

## Qatorni boshqa tomonga aks ettirish

1. Uchta stul ustidan (oʻngdan chapga) kesishma oynasini torting, stolga tegmasdan.
2. `MI` kiriting va {{key:Enter}} bosing.
3. `Specify first point of mirror line` soʻrovida stol chap tomonining oʻrta nuqtasiga ilashing (Oʻrta nuqta) va bosing.
4. `Specify second point of mirror line` soʻrovida stol oʻng tomonining oʻrta nuqtasiga ilashing (Oʻrta nuqta) va bosing.
5. `Erase source objects? [Yes/No] <N>` soʻrovida ularni saqlab qolish uchun {{key:Enter}} bosing.

Stol ostida uchta stul va stol ustida uchta aks ettirilgan stul koʻrinishi kerak. Aks ettirilgan tanlovdagi matn oʻqilishicha qoladi: u aks ettirilib joylashadi, lekin teskari yozilmaydi.

## Stulni burish

1. Stol ostidagi eng oʻngdagi stulni bosing.
2. `RO` kiriting va {{key:Enter}} bosing.
3. Stulning pastki oʻng burchagiga ilashing va asosiy nuqta sifatida bosing.
4. `90` kiriting va {{key:Enter}} bosing.

Stul asosiy nuqta atrofida soat strelkasiga qarshi 90 gradusga buriladi. Manfiy burchak soat strelkasi boʻyicha buradi. Kiritish oʻrniga ikkinchi nuqtani ham bosishingiz mumkin: burchak asosiy nuqtadan oʻsha nuqtagacha oʻlchanadi.

## Stolni masshtablash

1. Stolni tanlang.
2. `SC` kiriting va {{key:Enter}} bosing.
3. Stolning pastki chap burchagiga ilashing va asosiy nuqta sifatida bosing.
4. `1.2` kiriting va {{key:Enter}} bosing.

Stol 20% kattalashadi, asosiy nuqtadan uzoqlashib. 1 dan kichik koeffitsient uni kichraytiradi.

:::note
Masshtab koeffitsientini kiritish oʻrniga nuqta bossangiz, koeffitsient asosiy nuqtadan oʻsha nuqtagacha boʻlgan masofa boʻladi. Asosiy nuqtadan bir chizma birligi uzoqlikdagi nuqta koeffitsient 1 beradi. Odatda sonni kiritish qulayroq.
:::

## Ortga qaytarish va qayta bajarish

- {{key:Mod+Z}}, {{ui:Ortga qaytarish}} tugmasi yoki `U` soʻng {{key:Enter}} oxirgi buyruqni ortga qaytaradi. Butun buyruq bitta qadam: besh nusxa yaratgan {{cmd:COPY}} ni ortga qaytarsangiz, besh nusxaning hammasi oʻchadi.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, {{ui:Qayta bajarish}} tugmasi yoki `REDO` uni qaytaradi.
- Tarixda nima bekor qilinganligi koʻrsatiladi ("COPY bekor qilindi").

CadCraft oxirgi 500 qadamni saqlaydi. Qatlam sozlamalari (yoqish, muzlatish, qulflash, rang) sozlamalar hisoblanadi, tahrirlar emas, shuning uchun ortga qaytarilmaydi.

## Xonani kengaytirish

{{cmd:STRETCH}} (`S` yoki {{ui:Choʻzish}}) faqat kesishma oynasi ichidagi narsalarni koʻchiradi: ichidagi burchaklar va chiziq uchlari harakatlanadi, qolgan narsalar joyida qoladi, shuning uchun xona koʻchmasdan kengayadi.

1. `S` kiriting va {{key:Enter}} bosing.
2. Oʻng devor ustidan (oʻngdan chapga) oyna torting, devorning burchaklarini va unga tegib turgan narsalarning uchlarini qamrab olsin.
3. {{key:Enter}} bosing.
4. Asosiy nuqtani bosing, soʻng `@600,0` kiriting va {{key:Enter}} bosing.

Toʻrtburchak 600 ga kengayadi; devorga tugagan chiziqlar hamon devorga tugaydi. Bir uchi oynada boʻlgan yoy oʻz balandligini saqlaydi, markazi yoki joylashuv nuqtasi ichida boʻlgan aylana va matn harakatlanadi, oʻlcham esa yangi uzunligini oʻlchaydi. Oyna boʻlmasdan bittalab tanlangan obyektlar shunchaki koʻchadi.

Oldindan ham tanlashingiz mumkin: hech qanday buyruq ishlamayotganda devor ustidan kesishma oynasini (yoki kesishma arqonini) torting, soʻng `S` kiriting. STRETCH bu tanlovni oladi va oʻz soʻroviga javob bergandek, oynalari ushlab turgan narsalarni choʻzadi.

## Massiv: qator va ustunlar yoki markaz atrofida

{{cmd:ARRAY}} (`AR` yoki {{ui:Massiv}}) tanlovni setka yoki aylana shaklida nusxalaydi.

1. Stulni tanlang, `AR` kiriting va {{key:Enter}} bosing. Standart variant (Rectangular) uchun yana {{key:Enter}} bosing.
2. 4 ustun va 3 qatorli oldindan koʻrinish paydo boʻladi. `COU` kiriting, {{key:Enter}} bosing, soʻng ustunlar uchun `5`, qatorlar uchun `2` kiriting.
3. `S` kiriting, {{key:Enter}} bosing, soʻng ustunlar orasi uchun `600`, qatorlar orasi uchun `-900` kiriting (manfiy pastga qarab).
4. Nusxalarni yaratish uchun {{key:Enter}} bosing.

Stol atrofida stullar halqasi uchun `PO` (Polyar) ni tanlang, stol markazini bosing va `I` (elementlar), `F` (toʻldirish burchagi: butun aylana uchun 360, yarim uchun 180) hamda `ROT` (nusxalar markazga qarab burilishini) belgilang. {{cmd:ARRAYRECT}} va {{cmd:ARRAYPOLAR}} bu savollarni oʻtkazib yuboradi.

## Bir nechta qismni bitta polichiziqqa birlashtirish

{{cmd:JOIN}} (`J` yoki {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Birlashtirish}}): uchlari tutashadigan chiziqlar, yoylar va ochiq polichiziqlarni tanlang va {{key:Enter}} bosing. Ular bitta polichiziqqa aylanadi; agar butun aylanib chiqsa, yopiq boʻladi, soʻng uni bir martada surish mumkin. Bir chiziqda yotgan chiziqlar orasida boʻshliq boʻlsa ham bitta chiziq boʻladi; bitta aylananing yoylari bitta yoy yoki aylana boʻladi.

## Xususiyatlarni moslashtirish

{{cmd:MATCHPROP}} (`MA` yoki {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Xususiyatlarni moslashtirish}}): koʻrinishini xohlagan obyektni bosing, soʻng oʻzgartiriladigan obyektlarni tanlang va {{key:Enter}} bosing. Ular uning qatlamini va rangini oladi; matn oʻz balandligini, oʻlcham oʻz oʻlchamlarini, shtrixlash oʻz namunasini oladi. Ikkinchi savolda bularning istalganini oʻchirish uchun `S` (Sozlamalar) kiriting.

## Obyektlarni tekislash

**Nuqtalar boʻyicha.** {{cmd:ALIGN}} (`AL` yoki {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Tekislash}}): obyektlarni tanlang va {{key:Enter}} bosing, soʻng ular ustidagi nuqtani (manba) va u qoʻyilishi kerak boʻlgan joyni (manzil) bosing.

- Bitta juft ularni koʻchiradi. `Specify second source point` soʻrovida toʻxtash uchun {{key:Enter}} bosing.
- Ikki juft ularni ham buradi, shunda ikki manba nuqtasi orasidagi chiziq ikki manzil nuqtasi orasidagi chiziq boʻylab yotadi. Soʻng CadCraft `Scale objects based on alignment points?` deb soʻraydi: `Y` bersangiz, ular shuncha katta yoki kichik boʻladi.
- Uchinchi juft, agar ikki nuqtasi shu chiziqning qarama-qarshi tomonlarida boʻlsa, ularni aks ettiradi.

**Chekkalar va oraliq.** {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Tekislash va taqsimlash}} (yoki `ALIGNPANEL`) chizma ustida kichik panelni ochadi. Obyektlarni tanlang, soʻng:

- {{ui:Nisbatan tekislash}} boʻlimida nimaga tekislashni tanlang (butun tanlov, tanlagan birinchi yoki oxirgi obyekt yoki bosgan nuqta) va {{ui:Chap}}, {{ui:Markaz}}, {{ui:Oʻng}}, {{ui:Yuqori}}, {{ui:Oʻrta}} yoki {{ui:Past}} tugmasini bosing;
- yoki {{ui:Teng oraliqlar}} yoki {{ui:Teng markazlar}} ni tanlab, {{ui:Boʻylab}} yoki {{ui:Yuqoridan pastga}} tugmasini bosing: chetdagi ikki obyekt joyida qoladi, qolganlari ular orasida teng joylashadi (kamida uchta obyekt).

Har bir bosish bitta ortga qaytarish qadami, va tanlov qoladi, shuning uchun boshqasini sinab koʻrishingiz mumkin. Har bir obyekt oʻz chegaraviy toʻgʻri toʻrtburchagi boʻyicha hisoblanadi, oʻrnatilgan boʻlsa UCS da. Buyruq qatorida bu ish {{cmd:ALIGNTO}} va {{cmd:DISTRIBUTE}} orqali bajariladi.

## Oʻchirish va ajratish

- {{cmd:ERASE}} (`E` yoki {{key:Delete}}) tanlangan obyektlarni oʻchiradi.
- {{cmd:EXPLODE}} (`X`) polichiziqni chiziq va yoylarga, blok havolasini uning obyektlariga, oʻlchamni esa chiziq, strelka va matnga ajratadi. Ajratilgan oʻlchamlar endi oʻzi oʻlchamaydi.

## Odatiy xatolar

- **Ikkinchi nuqtada `@` siz masofa kiritish.** `600,0` mutlaq 600,0 nuqta, "oʻngga 600" emas. `@600,0` dan foydalaning yoki kursor toʻgʻri tomonga qaratilgan holda oddiy `600` kiriting.
- **Burish notoʻgʻri yoʻnalishda ketdi.** Musbat burchaklar soat strelkasiga qarshi buradi.
- **Ortga qaytarish kutilganidan koʻpini oʻchirdi.** Bitta ortga qaytarish oxirgi buyruqni, shu jumladan u yaratgan har bir nusxani ham qaytaradi.
- **Buyruq obyektlarni tanlashni soʻramadi.** Obyektlar allaqachon tanlangan edi, shuning uchun ulardan foydalandi. Hech narsa tanlanmagan holda boshlash uchun avval {{key:Esc}} bosing.
