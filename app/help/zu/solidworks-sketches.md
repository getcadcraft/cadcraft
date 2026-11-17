---
title: Hambisa amasikethi kuya nakusuka kwezinye izimodeli zezingxenye
summary: Bhala imacro eyakha kabusha umdwebo wakho njengesikethi esinemibandela esisodwa kumodeli yengxenye, bese uvula isikethi esikhishwe kwesinye.
keywords: isikethi, macro, swb, vba, export, imodeli yengxenye, okuguquguqukayo komhlaba wonke, izibalo, ubudlelwano, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
I-SolidWorks ayitholakali lapho i-CadCraft yakhiwa, ngakho zombili izindlela azikaze zihlolwe ku-SolidWorks. Okubhalwa yi-CadCraft kuhlolwa ngesakhiwo kuphela. Hlola umphumela ngaphambi kokuthembela kuwo.
:::

## Thumela umdwebo njengesikethi

1. Vimbela futhi ulinganise umdwebo (bheka [Vimbela umdwebo](topic:constraints)).
2. Eqenjini le-{{ui:Parametric}}, vula {{ui:More}} bese ukhetha {{ui:Macro for SolidWorks (.swb)}}, noma uthayipha {{cmd:SWBOUT}}.

   Ifayela eligama lomdwebo, eliphela nge-`.swb`, liyalandwa.
3. Ku-SolidWorks, khetha **Tools > Macro > Run** bese ukhetha lelo fayela.

Imacro yenza ingxenye entsha kusuka kwethempuleti yakho yengxenye ezenzakalelayo, ivule isikethi ku-Front Plane bese idweba imigqa, izindilinga, imijikelo, amaphoyinti nama-polyline kuwo, kanye ne:

- imibandela yakho njengobudlelwano besikethi,
- imibandela yakho yobukhulu njengezilinganiso ezinamagama afanayo (`d1@Sketch1`),
- amapharamitha akho njengokuguquguquka komhlaba wonke,
- yonke i-expression njengesibalo.

Ingxenye isebenzisa iyunithi yobude yomdwebo. Umbhalo, amabhulokhi, ukufiphaza, izilinganiso namashidi akuyona ingxenye yesikethi; umlando uyakutshela okushiywe. Ama-expression angenalo ifomu lesibalo lapho (`if`, `min`, `max`, `round`, `%` nezinye ezimbalwa) abhalwa njengenani lawo lamanje, futhi umlando uyakutshela ukuthi yiziphi. Noma yini imacro engayakha ibhalwa kufayela lelogi eliseduze nemacro, bese umyalezo ufingqa ekugcineni.

## Vula isikethi kusuka engxenyeni

1. Ku-SolidWorks, sebenzisa imacro yokuthumela ye-CadCraft kungxenye (yilanda ku-app ye-PartCraft: File > Export > Export macro to bring parts back). Ibhala ifayela `.json` ngefomethi `cadcraft-sw-export` eduze nengxenye.
2. Ku-CadCraft, khetha {{ui:Open}} bese ukhetha lelo fayela `.json`.
3. Uma ingxenye inamasikethi amaningi, khetha elilodwa.

Isikethi siba umdwebo, ngamamilimitha: imigqa, amajika, izindilinga namaphoyinti, ubudlelwano bayo njengemibandela, izilinganiso zayo njengemibandela yobukhulu egcinwe ngamagama ayo njengoba ayenjalo (`D1`, `D2` …), okuguquguquka komhlaba wonke njengamapharamitha, nezibalo ezisezilinganisweni zayo njengama-expression ayo. Umlando ubhala okungadlulisiwe, njengobudlelwano be-CadCraft obungenawo. Indawo esikethi esihlezi kuyo engxenyeni ayigcinwa: sidwetshwa sisicaba, njengoba sibonakala endizeni yaso.
