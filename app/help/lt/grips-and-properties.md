---
title: Redagavimas valdikliais ir Ypatybės
summary: Tempkite, perkelkite ir keiskite objektų dydį pagal jų valdiklius, o Ypatybių skydelyje įveskite tikslius ilgius, spindulius, kampus ir koordinates.
keywords: valdikliai, ypatybės, tempti, ilgis, spindulys, koordinatės, redaguoti, greitosios ypatybės, ypatybių paletė, keisti, sluoksnis, spalva, color
from: f22541ba
---

## Ką sužinosite

Du greitus būdus pakeisti objektą be komandos: vilkti jo **valdiklius** arba įvesti naujas reikšmes **Ypatybės** skydelyje dešinėje.

## Valdikliai

Pažymėję objektus (iki 200 vienu metu), kai nevykdoma jokia komanda, ant jų atsiranda maži kvadratėliai. Tai valdikliai:

| Objektas | Valdikliai |
|---|---|
| Linija | Abu galai ir vidurys (perkelia visą liniją) |
| Apskritimas | Centras (perkelia jį) ir keturi taškai ant apskritimo (keičia spindulį) |
| Lankas | Centras ir abu galai (keičia pradžios ir pabaigos vietą) |
| Polilinija | Kiekviena viršūnė |
| Tekstas, taškas, bloko nuoroda | Įterpimo taškas |
| Elipsė | Centras |
| Matmuo | Apibrėžiantys taškai ir matmens linijos padėtis |
| Vaizdo langas | Centras (perkelia) ir keturi kampai (keičia dydį) |

### Perkelti valdiklį

1. Nubrėžkite liniją ir spustelėkite ją. Atsiranda trys valdikliai.
2. Spustelėkite valdiklį viename gale. Būsenos juostoje rašoma: „Spustelėkite, kur turi būti šis valdiklis (Esc – atšaukti). Veikia prilipimas ir Ortogonalus.“
3. Judinkite kryžminį žymeklį. Seka peržiūra.
4. Spustelėkite naują vietą arba prisilipkite prie taško kitame objekte ir spustelėkite.

Galas pasislenka, o likusi linijos dalis lieka vietoje. Taip pat galite paspausti valdiklį ir vilkti, o paleisti ten, kur jis turi būti.

:::note
Valdiklio koordinatės įvesti negalima. Tiksliai padėčiai prisilipkite prie taško arba įveskite reikšmę Ypatybėse.
:::

Valdiklio perkėlimą atšaukite paspausdami {{key:Esc}} arba spustelėdami dešiniuoju pelės mygtuku.

## Ypatybės

Dešinysis skydelis rodo pažymėto objekto ypatybes.

1. Spustelėkite liniją. Skydelio antraštėje rašoma „Linija“.
2. Spustelėkite {{ui:Ilgis}}, įveskite `2500` ir paspauskite {{key:Enter}}.

Linija dabar tiksliai 2500 ilgio ir išlaiko savo pradžios tašką bei kampą. {{key:Enter}} arba spustelėjimas kitur pritaiko reikšmę; {{key:Esc}} grąžina senąją reikšmę. Kiekvienas pakeitimas yra vienas atšaukiamas žingsnis, taip pat kai keičiama daug objektų vienu metu.

Laukeliuose galima rašyti išraiškas (`=2*45`) ir ilgius su vienetais (`3'6"`, `900mm`), kiekvienas taškas turi X, Y ir Z, o keli objektai gali būti keičiami kartu. Visa tai aprašyta [Ypatybių skydelyje](topic:properties-panel).

## Dažnos klaidos

- **Valdikliai nerodomi.** Vykdoma komanda (paspauskite {{key:Esc}}), arba pažymėta daugiau nei 200 objektų, arba objektas yra užrakintame sluoksnyje.
- **Valdiklis nukeliavo ne ten.** Prilipimas jį pagavo. Spustelėdami laikykite {{key:Shift}}, kad ignoruotumėte prilipimus.
- **Įvedus į Ypatybes nieko nevyko.** Paspauskite {{key:Enter}} arba spustelėkite kitur, kad pritaikytumėte reikšmę. Atmesta įvestis (nulinis ar neigiamas ilgis ar spindulys, tekstas, kuris nėra reikšmė) paraudonuoja laukelį ir paaiškina priežastį.
- **Įvestos raidės pateko į Ypatybių laukelį.** Kol laukelyje yra žymeklis, klavišai rašomi ten. Paspauskite {{key:Enter}} arba {{key:Esc}}, tada įveskite komandą.
