---
title: Thayipha bese ubonisa izingqondo nezingeli ngamadigri, imizuzu, imizuzwana
summary: Thayipha isiqondiso njengengqondo yomhloli efana ne-N45°23'30"E noma njengamadigri-imizuzu-imizuzwana noma yiluphi uhlobo lapho kubuzwa i-engeli, bese ukhetha ukuthi umdwebo ubonisa kanjani izingeli nge-AUNITS.
keywords: ingqondo, izingqondo, umhloli, ingqondo yesigaba, degrees minutes seconds, DMS, engeli, isiqondiso, isiza, ukubeka umugqa, traverse, AUNITS, ANGUNITS, ifomethi ye-engeli, polar, ibanga eliqondile, DIST
from: af805567
---

Noma kuphi lapho i-CadCraft ibuza **i-engeli noma isiqondiso**, ungathayipha **ingqondo yesigaba** noma i-engeli ngamadigri, imizuzu nemizuzwana, kanye nenombolo evamile yamadigri.

## Izingqondo

Ingqondo ibiza inyakatho noma eningizimu, i-engeli engafiki ku-90°, bese empumalanga noma entshonalanga:

| Uthayipha | Isiqondiso |
|---|---|
| `N45°23'30"E` noma `N45d23'30"E` | 45°23'30" kusukela enyakatho iye empumalanga |
| `S10-30-00W` noma `S 10 30 W` | 10°30' kusukela eningizimu iye entshonalanga (izidashi noma izikhala phakathi kwezingxenye) |
| `N45.5E` | 45.5° kusukela enyakatho iye empumalanga |
| `N`, `E`, `S`, `W` | ngqo enyakatho, empumalanga, eningizimu, entshonalanga |

Izinhlamvu zingaba noma yiluphi uhlobo lwamacala. Esipanishini, `O` nayo isho entshonalanga. `d` no `°` kusho okufanayo; `'` ngumzuzu, kanti `"` ngumzuzwana.

Ukuze ubeke umugqa wesiza ongu-20 m ubude ku-N45°23'E, qala {{cmd:LINE}} uthayipha iphoyinti lokuqala, bese uthayipha `@20<N45d23'E`. Lokhu kusebenza nakuma-{{cmd:ROTATE}} angle prompt nakuyo yonke enye imibuzo ecela i-engeli, nakubhokisi le-engeli le-{{ui:Ukufaka okuguquguqukayo}}.

## Amadigri, imizuzu, imizuzwana

`45°23'30"`, `45d23'30"`, `45d30'` noma `45d` iyi-engeli kusukela ku-eksi ye-X, ngokuphambene nokuzungeza kwewashi. Uphawu `°` noma `d`ludingeka: `45-23-30` ifundwa njengokubala (45 − 23 − 30). Imizuzu nemizuzwana kufanele ibe ngaphansi kwe-60. Inombolo evamile, nokubalwa (`360/7`), nakho kuyasebenza.

## Indlela izingeli ezibonakala ngayo

Thayipha {{cmd:AUNITS}} (noma khetha {{ui:Ifomethi ye-engeli}} ku-{{ui:Izakhiwo}} › {{ui:Izilungiselelo zamanje}}) bese ukhetha:

- **Amadigri ahlukaniswe ngamadesimali** (okuzenzakalelayo): `44.6083°`.
- **Amadigri, imizuzu, imizuzwana**: `44°36'30"`.
- **Izingqondo zomhloli**: `N45°23'30"E`.

Ukunemba kulandela lokho othayipha ku-{{cmd:AUNITS}}: 0 ibonisa amadigri, 2 imizuzu, 4 imizuzwana, kanti 5 kuya ku-8 zengeza amadesimali emizuzwana. Ifomethi ibonakala ku-{{cmd:DIST}}, ebhalweni lesimo, ku-dynamic input nasemaqondisweni okulandelela, nakubhokisi zezingeli ze-{{ui:Izakhiwo}} (ibhokisi oliguqulayo lamukela noma iyiphi yalezi zindlela ngenhla). Iyinyathelo elilodwa lokuhlehlisa futhi igcinwa emafayeleni e-DWG ne-DXF (`$AUNITS`, `$AUPREC`); i-LISP iyayifunda futhi iyibhale njenge-`AUNITS` ne-`AUPREC`.
