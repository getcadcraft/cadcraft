---
title: Imigqa yokwakha nemisebe
summary: Dweba imigqa engapheli (XLINE) noma esuka ephoyinteni ngohlangothi olulodwa (RAY) ukuze uhlele izinto, bese uyisika ibe imigqa evamile.
keywords: xline, ray, umugqa wokwakha, imigqa yokwakha, umugqa ongapheli, umugqa wesiqondiso, umugqa wesethenjwa, bisect, umugqa we-offset, imigqa yokwakheka, xl
from: b6c398bc
---

## Okuzofunda

Ukudweba imigqa yokwakha ukuze uhlele izinto ngenkathi udweba: ngamaphoyinti amabili, ibhekile noma iqonde phezulu, ngengosi, phakathi kweziqondiso ezimbili, noma ngebanga elimisiwe emugqeni. Nokuthi uyisika kanjani ibe imigqa evamile lapho isiqedile umsebenzi wayo.

## Izinhlobo ezimbili

- **Umugqa wokwakha** ({{cmd:XLINE}}) uqhubeka ungapheli zombili izinhlangothi.
- **Umsebe** ({{cmd:RAY}}) uqala ephoyinteni futhi uqhubeka ungapheli ngohlangothi olulodwa.

Zombili zidweba kuyo yonke indawo yomdwebo, nganoma iyiphi i-zoom, ezikrinini ezihlukene nasezindaweni zokubuka ephepheni. {{ui:Konke}} ayizifaki, ngakho ukusondeza emdwebweni kulinganisa okudwetshiwe kuphela.

## Dweba imigqa yokwakha

1. Chofoza {{ui:Dweba}} › {{ui:Okuningi}} › {{ui:Umugqa wokwakha}}, noma thayipha `XL` bese ucindezela {{key:Enter}}.
2. Chofoza iphoyinti. Yonke into oyichofozayo ngemva kwalokho yengeza umugqa wokwakha ophoyinteni lokuqala nalelo ochofozayo.
3. Cindezela {{key:Enter}} ukuqeda.

Esikhundleni sephoyinti lokuqala ungathayipha inketho:

| Ukukhetha | Isenzo sayo |
|---|---|
| `H` (Hor) | Imigqa ebhekile, eyodwa kuwo wonke amaphoyinti ochofoza kuwo. |
| `V` (Ver) | Imigqa emile, ngaphakathi kwamaphoyinti ngamaphoyinti. |
| `A` (Ang) | Imigqa ngengosi othayipha (amadigri, ngokuphambene nowashi, kusukela ku-X axis), ngaphakathi kwamaphoyinti ngamaphoyinti. `R` (Reference) ikala ingosi kusukela emugqeni okhethile. |
| `B` (Bisect) | Chofoza ikhoni, bese uchofoza iphoyinti eluhlangothini oluthile: lowo nalowo phoyinti ochofoza ngaseceleni lolunye lwengeza umugqa phakathi kwezimbili. |
| `O` (Offset) | Thayipha ibanga, khetha umugqa, bese uchofoza uhlangothi: umugqa wokwakha okude kangako kuwo, uhambisana nawo. `T` (Through) iwufaka ephoyinteni ochofoza kulo esikhundleni salokho. Ibanga liyakhunjulwa ngesikhathi esilandelayo. |

## Dweba imisebe

1. Chofoza {{ui:Dweba}} › {{ui:Okuningi}} › {{ui:Umsebe}}, noma thayipha `RAY` bese ucindezela {{key:Enter}}.
2. Chofoza lapho imisebe iqala khona.
3. Chofoza iphoyinti ngalinye umsebe okufanele udlule kulo. Cindezela {{key:Enter}} ukuqeda.

## Bambelela kuzo bese uzisika

Imigqa yokwakha nemisebe ithatha ama-snap i-Nearest, i-Perpendicular ne-Intersection. Azinawo amakhawulo futhi azinasikhungo, ngakho i-Endpoint ne-Midpoint azikwazi ukuzithola kuzo.

Zisikwa futhi zisikwe njengamanye amamugqa ku-{{cmd:TRIM}} ne-{{cmd:BREAK}}:

- Susa ikhawulo elilodwa komugqa wokwakha, bese liba umsebe oqala ekusikeni.
- Susa ingxenye ekude komsebe, bese uba umugqa ojwayelekile.
- Hlukanisa umugqa wokwakha ephoyinteni elilodwa, bese uthola imisebe emibili.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} no-{{cmd:STRETCH}} nazo ziyasebenza. Ukukhetha ngewindi akukaze kuzikhethe, ngoba akukho windi elingabamba umugqa ongapheli; iwindi elidlulayo noma ukuchofoza kuyasebenza.

:::note
I-DWG (noma iyiphi inguqulo) ne-DXF 2000 zizigcina njengemigqa yokwakha. I-DXF R12 ayinayo, ngakho lapho zishintsha zibe imigqa edwetshwe kuyo yonke indawo yomdwebo, futhi ukulondoloza kuyasho lokho. Ukushicilela noma i-PDF kudweba kuphela kulokho okuphrintwayo.
:::
