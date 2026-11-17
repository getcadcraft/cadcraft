---
title: Koordinata va masofani kiritish
summary: CadCraft buyruq satriga nuqta, masofa, burchak yoki sonni kiritishning barcha usullari, misollar bilan.
keywords: dinamik kiritish, dyn, f12, tab, koordinatalar, mutlaq, nisbiy, qutb, @, toʻgʻri masofa, burchak, gradus, oxirgi nuqta, lastpoint, nuqta kiritish, kiritish, arifmetika, hisoblash, kalkulyator, cal, qoʻshish, kasr, ifoda
from: 7de9252d
---

## Nuqtalar

Nuqta soʻralganda, quyidagilardan birini kiriting va {{key:Enter}} ni bosing:

| Kiritasiz | Maʼnosi | Misol |
|---|---|---|
| `x,y` | Mutlaq: koordinata boshi 0,0 dan oʻlchanadi | `2500,1200` |
| `#x,y` | Ham mutlaq (odat uchun qabul qilinadi) | `#2500,1200` |
| `@dx,dy` | Nisbiy: oxirgi nuqtadan oʻngga va yuqoriga | `@600,0` |
| `@d<a` | Nisbiy qutb: oxirgi nuqtadan masofa va burchak | `@1500<45` |
| `d<a` | Mutlaq qutb: koordinata boshidan masofa va burchak | `3000<90` |
| bitta son | Toʻgʻri masofa: bazaviy nuqtadan krestcha tomon shuncha uzoqda | `1200` |
| `*x,y`, `@*dx,dy` | Jahon koordinatalari, UCS oʻrnatilganda | `*0,0` |

Bazaviy nuqta — rezina chiziq boshlanadigan nuqta.

UCS oʻrnatilgan boʻlsa ({{cmd:UCS}}), `x,y`, `@dx,dy` va `d<a` dagi burchak UCS oʻqlari boʻylab oʻlchanadi. Qarang: [Chizma koʻrinishini aylantirish va oʻz koordinatalaringizdan foydalanish](topic:ucs-and-turned-view).

Yoki chizmada bosing; obyekt ilashishlari va {{ui:Ortho}} bosishlarga ham taalluqli.

Qoidalar:

- Vergul X ni Y dan ajratadi. Oʻnli kasrlar nuqta bilan yoziladi: `1250.75,300`.
- Manfiy qiymatlar chapga va pastga boradi: `@-600,0`.
- Boʻsh joy kiritmang: {{key:Space}} qator yuboradi, xuddi {{key:Enter}} kabi.
- Sonlar darajali koʻrsatkichli boʻlishi mumkin: `1e3` 1000 ga teng.
- Birliklar yozilmaydi va fut-dyuym belgisi ham yoʻq. Oddiy sonlarni chizma birliklarida kiriting.

## Oxirgi nuqta

`@` **istalgan buyruqda har qanday nuqta soʻrovida bergan oxirgi nuqtadan** hisoblanadi: bosish, ilashish yoki yozilgan nuqta. Buyruqlar orasida eslab qolinadi, shuning uchun yangi chiziqni tugagan joyidan `@0,500` masofada boshlashingiz mumkin. Hech qanday nuqta berilmagan boʻlsa, `@` 0,0 dan hisoblanadi.

Bu muhim boʻladigan ayrim joylar:

- {{cmd:COPY}} da birinchi nusxadan keyin oxirgi nuqta oʻsha nusxaning nuqtasi boʻladi. `@600,0` ikki marta yozilsa, nusxalar asldan 600 va 1200 masofada joylashadi.
- Oʻlcham joylashtirilgandan keyin oxirgi nuqta oʻlcham chizigʻi joylashgan joy boʻladi, oʻlchamning oxiri emas.

Shubha boʻlsa, mutlaq nuqta, ilashish yoki toʻgʻri masofadan foydalaning.

## Toʻgʻri masofani kiritish

Yalang son — bazaviy nuqtadan krestcha tomon masofa:

1. Krestchani kerakli yoʻnalishga suring.
2. Masofani kiriting va {{key:Enter}} ni bosing.

{{ui:Ortho}} yoqilgan boʻlsa, yoʻnalish toʻgʻri gorizontal yoki vertikalga tushadi: bu toʻgʻri devorlarni chizishning eng tez usuli. Agar bazaviy nuqta boʻlmasa yoki krestcha aynan unda boʻlsa, son "Nuqta yoki parametr kalit soʻzi talab qilinadi." xabari bilan rad etiladi.

## Burchaklar

- Gradusda, oddiy son sifatida: `30`, `-45`, `112.5`.
- Musbat X yoʻnalishidan (oʻngga qarab) soat strelkasiga teskari oʻlchanadi: 0 oʻngda, 90 yuqorida, 180 chapda, 270 yoki -90 pastda.
- Burchak soʻralganda (aylantirish, matn burchagi) bosishingiz ham mumkin: burchak bazaviy nuqtadan bosgan nuqtangizgacha oʻlchanadi. Bazaviy nuqta hali boʻlmasa, birinchi bosish uni belgilaydi va soʻrov ikkinchi nuqtani soʻraydi.

## Masofalar

Masofa soʻralganda (radius, siljitish, matn balandligi, masshtab koeffitsienti):

- musbat son kiriting (fut-dyuymli chizmada `12'6"` yoki `6-1/2` ham: qarang [Fut va dyuym](topic:units-papers-scales#feet-and-inches-and-fractions)), yoki
- nuqta bosing: buyruqning bazaviy nuqtasidan unga masofa, yoki
- bazaviy nuqta boʻlmasa, ikki nuqta bosing: soʻrov `Specify second point` ga oʻzgaradi.

"Musbat son yoki ikki nuqta talab qilinadi." xabari qiymat son emasligini yoki manfiy ekanligini bildiradi.

## Yozilgan qiymatda arifmetika

Uzunlik, koordinata, burchak yoki son yozilgan joyda (buyruq satri, dinamik kiritish, Xossalar maydonlari va dialoglar) hisob-kitobni `+`, `-`, `*`, `/` va qavslar bilan yozishingiz mumkin, uni oldindan hisoblamasdan:

| Yozasiz | Natija |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (fut-dyuymli chizmada) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, chizma birliklarida (birliklari oʻrnatilgan boʻlsa) |
| `@4+7/16,0` | oxirgisidan 4.4375 oʻngdagi nuqta |
| `360/7` | 51.43 gradusli burchak |

- Uzunlikka yozilgan tire uning bir qismi boʻlib qoladi: `4-7/16` bu 4 7/16, `24'-6"` esa 24 fut 6 dyuym. Fut belgisidan keyin ayirish uchun avval uzunlikni tugating: `24'-0"-6"`, yoki hisob-kitobni qavsga oling va tire atrofida boʻshliq qoldiring: `(24' - 6")` (qavs ichida boʻshliq boʻshliq hisoblanadi; boshqa joyda u {{key:Enter}} ni yuboradi).
- Uzunlikka qoʻshilgan oddiy son chizma birliklarida hisoblanadi; uni koʻpaytirish yoki boʻlish uzunlikni masshtablaydi. Ikki uzunlik koʻpaytirilsa maydon hosil boʻladi, shuning uchun `2'*3'` rad etiladi.
- `abs`, `round`, `ceil` va `floor` ham ishlaydi: `round(10/3)`.
- Oʻqib boʻlmaydigan hisob-kitob xato joyi koʻrsatilgan holda rad etiladi, masalan "Hisob-kitob juda erta tugadi (3-belgi): qiymat yetishmayapti." Hech narsa hech qachon 0 deb oʻqilmaydi. {{cmd:CAL}} hisob-kitobning qiymatini chop etadi.

## Dinamik kiritish

{{ui:Dinam}} ({{key:F12}}, holat satrida) buyruq nuqta soʻraganda qiymatlarni krestcha yonida koʻrsatadi.

- Hali bazaviy nuqta yoʻq boʻlsa (chiziqning birinchi nuqtasi), ikki maydon **X** va **Y** boʻladi.
- Undan keyin ular oxirgi nuqtadan **masofa** va **burchak** boʻladi.

Kiritish baribir buyruq satriga boradi; krestcha yonidagi maydon uni koʻrsatadi, rezina chiziq esa uni kuzatib boradi.

1. Qiymat kiriting: u ajratilgan maydonga tushadi.
2. {{key:Tab}} ni bosing (yoki X dan keyin vergul). Qiymat qulflanadi (qalin koʻrinadi) va keyingi maydon ajratiladi. Qulflangan masofa sichqoncha bilan yoʻnalishni tanlayotganda rezina chiziqni shuncha uzunlikda ushlab turadi.
3. Ikkinchi qiymatni kiriting yoki shunchaki yoʻnalish tanlang va {{key:Enter}} ni bosing. `50`, {{key:Tab}}, `90`, {{key:Enter}} oxirgi nuqtadan tik yuqoriga 50 chizadi.

{{key:Tab}} siz bitta qiymatdan keyin {{key:Enter}} bosish toʻgʻri masofa kiritish kabi ishlaydi. Maydonlarda fut va dyuym ham ishlaydi (`12'6"`). Masofa va burchak soʻrovlari (aylana radiusi, aylantirish) ham qiymatini krestcha yonida koʻrsatadi.

## Parametrlar va standart qiymatlar

- Parametrlar kvadrat qavsda koʻrsatiladi. Parametrning bosh harflarini kiriting (masalan, `D` — `D` (Diametr) uchun; `CL` — soʻzning boshlanishi `[Yopish (C)]` uchun) va {{key:Enter}} ni bosing. Soʻzning uzunroq boshlanishi ham ishlaydi (`DIA`).
- Standart qiymat burchak qavslarda, masalan `<500>`. Uni ishlatish uchun {{key:Enter}} ni bosing yoki oʻng tugmani bosing.

## Boshqa klaviatura tartibi va Keypad

Buyruq nomlari, qisqa nomlar va parametr harflari lotin harflarida. Yunon, kirill, ibroniy, arab, fors, tay yoki koreys tartibi faol boʻlganda tartibni almashtirish shart emas: terilgan soʻz buyruq, qisqa nom yoki parametr boʻlmasa, CadCraft uni bosilgan tugmalar boʻyicha oʻqiydi. Lotin klaviaturasidagi `L` tugmasi hali ham `LINE` ni boshlaydi, `C` tugmasi esa tartib qanday harf koʻrsatishidan qat'i nazar, yopish parametriga javob beradi. Buyruq satri ustidagi mos buyruqlar roʻyxati ham shu qoidaga amal qiladi. Buyruq matn soʻragan joyda terilgan matn (TEXT ning mazmuni, nom) hech qachon oʻzgartirilmaydi.

{{ui:Keypad decimal key}} vergul beradigan tartiblarda bu tugma buyruq satrida va son maydonlarida nuqta yozadi, shuning uchun `12.5` raqamli klaviaturada yozilishi mumkin. Asosiy klaviaturadagi vergul tugmasi esa hali ham `x,y` ni ajratadi.

Ikkalasini ham {{ui:Sozlamalar}} da oʻchirish mumkin: {{ui:Commands on a non-Latin keyboard layout}} va {{ui:Keypad decimal key}}.

## Koordinatalar koʻrsatkichi

Holat satri krestchaning X va Y ni koʻrsatadi (UCS oʻrnatilgan boʻlsa, u tizimda), ilashishlar va Ortho dan keyin. Buyruq bazaviy nuqtaga ega boʻlganda u `Δ` ni ham qoʻshadi: oʻsha nuqtadan masofa va burchak, masalan `Δ 1500 < 30°` — buni `@1500<30` deb yozgan boʻlardingiz.

Nuqtaning koordinatalarini chiqarish uchun {{cmd:ID}}, ikki nuqta orasini oʻlchash uchun {{cmd:DIST}} dan foydalaning.
