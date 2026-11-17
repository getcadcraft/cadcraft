---
title: Koʻrinishni buryash va oʻz koordinatalaringiz (UCS)
summary: Koʻrinishni 90° yoki istalgan burchakka buring, chizmadagi hech narsani siljitmasdan, va foydalanuvchi koordinata tizimini (UCS) belgilang. Shunda nuqtalar, ortho, qutb kuzatuvi, setka va yangi matn binoning oʻz oʻqlariga ergashadi.
keywords: ucs, foydalanuvchi koordinata tizimi, reja, koʻrinishni burish, koʻrinishni aylantirish, koʻrinishning buralishi, ucs z, ucs 3point, ucs object, ucs world, nomlangan ucs, ucsfollow, turnleft, turnright, turnworld, qiyshiq bino, aylantirilgan setka
from: 6f152c65
---

## Nimani oʻrganasiz

Chizmani burilgan holda qanday koʻrish kerakligi, shunda burchak ostida chizilgan bino ekranda toʻgʻri koʻrinadi, va nuqtalarni uning oʻz oʻqlari boʻylab qanday kiritish mumkinligi. Bu qilinayotganda chizmadagi hech narsa siljimaydi: obyektlar oʻz koordinatalarini saqlaydi, burish tahrir emas va chizma oʻzgargan deb belgilanmaydi.

## Koʻrinishni chorakka buring

1. {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Koʻrinishni 90° chapga buring}} yoki {{ui:Koʻrinishni 90° oʻngga buring}} ni bosing.

Chizma ekranda chizma maydonining oʻrtasi atrofida buriladi. Burishni davom ettirish uchun yana bosing.

2. Uni yana tekislash uchun {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Dunyoga qaytish}} ni bosing.

Ularning orqasidagi buyruqlar {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} va {{cmd:TURNWORLD}}. Ulardan biriga tugma berish uchun taxalluslaringizga {{cmd:ALIASEDIT}} bilan `TL=TURNLEFT` kabi qator qoʻshing.

## Burchakli bino bilan tekislash

1. `UCS` ni yozing va {{key:Enter}} ni bosing, keyin `OB` va {{key:Enter}} ni bosing.
2. Boshlanish nuqtasi boʻlishi kerak boʻlgan uchga yaqin devor chizigʻini bosing.

Endi UCS shu uchdan boshlanadi, uning X oʻqi devor boʻylab boʻladi va koʻrinish devor ekranda tekis boʻladigan qilib buriladi. Pastki chap burchakdagi oʻq belgisi UCS oʻqlari qayerga qaratilganini koʻrsatadi.

3. Odatdagidek chizing. UCS oʻrnatilgan holda:
   - `x,y` va `@dx,dy` UCS oʻqlari boʻylab oʻlchanadi; `d<a` burchakni UCS X oʻqidan oʻlchaydi.
   - {{ui:Ortho}}, qutb kuzatuvi va setka UCS oʻqlariga ergashadi, xuddi shunday koʻrsatkich xochi ham.
   - Yangi matn va yangi abzatslar UCS X oʻqi boʻylab yoziladi; {{cmd:DIMLINEAR}} ning gorizontal va vertikali ham unga ergashadi.
   - Holat satridagi koordinatalar va {{cmd:ID}} dan olingan koordinatalar UCS koordinatalari boʻladi.
4. UCS oʻrnatilgan holda dunyo nuqtasini kiritish uchun oldiga `*` qoʻying: `*0,0` yoki `@*100,0`.
5. `UCS` ni yozing, {{key:Enter}} ni bosing, keyin dunyoga qaytish uchun yana {{key:Enter}} ni bosing.

## UCS ni belgilashning boshqa usullari

`UCS` soʻrovida:

| Yozasiz | Nima qiladi |
|---|---|
| nuqta | Yangi boshlanish nuqtasi; keyin yangi X oʻqidagi nuqtani bosing yoki burchakni saqlash uchun {{key:Enter}} ni bosing |
| `Z` | UCS ni boshlanish nuqtasi atrofida siz kiritgan burchakka buradi (gradus, soat strelkasiga qarshi) yoki tanlang |
| `3` (3nuqta) | Boshlanish nuqtasi, musbat X oʻqi boʻylab nuqta va musbat Y tomonidagi nuqta |
| `OB` (Obyekt) | Chiziq, yoy, aylana, polichiziq segmenti, matn, blok havolasi, nuqta yoki yordamchi chiziqdan |
| `P` (Oldingi) | Bundan oldingi UCS (oxirgi oʻntasi chizma ochiq turguncha saqlanadi) |
| `W` (Dunyo) | Dunyoga qaytish |
| `NA` (Nomlangan) | `S` joriy UCS ni nom bilan saqlaydi, `R` birini tiklaydi, `D` birini oʻchiradi, `?` ularni roʻyxatlaydi |

Har bir oʻzgarish koʻrinishni shunday buradiki, yangi UCS X oʻqi tekis boʻladi. {{cmd:PLAN}} UCS ni oʻzgartirmasdan koʻrinishni buradi: joriy UCS uchun {{key:Enter}}, saqlangan biri uchun `U`, dunyo uchun `W`.

## Yaxshi bilish kerak

- Boʻlingan ekranning har bir oynasi oʻz burilishini saqlaydi. UCS chizmaga tegishli.
- Varaqlar qogʻoz koordinatalarida ishlaydi; UCS ni {{ui:Model}} varagida yoki koʻrinish oynasi ichida oʻrnating.
- Burilgan koʻrinishda sudrab chizilgan tanlov oynalari ekranda ichida nima borligini tanlaydi.
- LISP programmalari `getpoint` orqali UCS dagi nuqtalarni oladi, `UCSORG`, `UCSXDIR`, `UCSYDIR` va `VIEWTWIST` ni oʻqiy oladi, `trans` esa dunyo, UCS va displey oʻrtasida almashtiradi.

:::note
Saqlangan fayl keyingi versiyada UCS va koʻrinishning burilishini saqlaydi; shu vaqtgacha ular chizma ochiq turguncha amal qiladi.
:::
