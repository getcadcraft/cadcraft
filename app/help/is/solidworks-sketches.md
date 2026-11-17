---
title: Færa skissur til og frá öðrum hlutalíkanaforritum
summary: Skrifaðu fjölva sem endurbyggir teikninguna þína sem eina skorðaða skissu í hlutalíkanaforriti, og opnaðu skissu sem flutt var út úr slíku forriti.
keywords: skissa, fjölvi, swb, vba, útflutningur, hlutalíkanaforrit, hnattbreytur, jöfnur, tengsl, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks er ekki tiltækt þar sem CadCraft er byggt, þannig að ekki hefur enn verið prófað í SolidWorks í hvorugri átt. Það sem CadCraft skrifar er aðeins athugað með tilliti til byggingar. Athugaðu niðurstöðuna áður en þú treystir henni.
:::

## Senda teikningu sem skissu

1. Skorðaðu og málsettu teikninguna (sjá [Skorða teikningu](topic:constraints)).
2. Í hópnum {{ui:Breytur}} opnaðu {{ui:Meira}} og veldu {{ui:Fjölvi fyrir SolidWorks (.swb)}}, eða skrifaðu {{cmd:SWBOUT}}.

   Skrá sem heitir eftir teikningunni og endar á `.swb` er sótt.
3. Í SolidWorks, veldu **Tools > Macro > Run** og veldu þá skrá.

Fjölvinn býr til nýjan hluta úr sjálfgefna hlutasniðmátinu þínu, opnar skissu á Front Plane og teiknar línur, hringi, boga, punkta og fjöllínur líkansins í henni, með:

- skorðunum þínum sem skissutengsl,
- víddarskorðunum þínum sem mál með sömu nöfnum (`d1@Sketch1`),
- eigin breytum þínum sem hnattbreytur,
- hverri segð sem jöfnu.

Hlutinn notar lengdareiningu teikningarinnar. Texti, blokkir, skyggingar, málsetningar og blöð eru ekki hluti af skissunni; ferillinn listar hvað var skilið eftir. Segðir sem eiga sér enga jöfnumynd þar (`if`, `min`, `max`, `round`, `%` og fáeinar aðrar) eru skrifaðar sem núverandi gildi þeirra, og ferillinn segir til um það. Allt sem fjölvinn getur ekki búið til er skrifað í annálsskrá við hlið fjölvans, og skilaboð taka saman í lokin.

## Opna skissu úr hluta

1. Í SolidWorks, keyrðu CadCraft útflutningsfjölvann (sæktu hann í PartCraft forritinu: File > Export > Export macro to bring parts back) á hlutanum. Hann skrifar `.json` skrá á sniðinu `cadcraft-sw-export` við hlið hlutans.
2. Í CadCraft, veldu {{ui:Opna}} og veldu þá `.json` skrá.
3. Þegar hlutinn hefur nokkrar skissur, veldu eina.

Skissan verður að teikningunni, í millimetrum: línur hennar, bogar, hringir og punktar, tengsl hennar sem skorður, víddir hennar sem víddarskorður með sömu nöfnum og áður (`D1`, `D2` …), hnattbreytur hennar sem breytur og jöfnurnar á víddum hennar sem segðir þeirra. Ferillinn listar það sem ekki var flutt yfir, eins og tengsl sem CadCraft hefur ekki. Staðsetning skissunnar í hlutanum er ekki vistuð: hún er teiknuð flöt, eins og sést á fleti hennar.
