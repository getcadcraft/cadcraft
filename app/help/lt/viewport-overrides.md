---
title: Rodymo srities klasių perrašymai
summary: Lape paslėpkite klasę arba jai nustatykite kitą spalvą, linijos storį ar užpildą tik vienoje rodymo srityje; modelis ir kitos rodymo sritys lieka tokie patys.
keywords: rodymo sritis, klasės perrašymas, rodymo srities perrašymas, paslėpti klasę rodymo srityje, lapas, išdėstymas, VPLAYER, spausdinimas, Vectorworks
from: c1a2b51f
---

Lape dažnai rodomas tas pats modelis daugiau nei vieną kartą: planas su baldais ir planas be jų arba apšvietimo planas, kuriame spalva pažymėtos tik šviesos. Rodymo srities klasės perrašymas pakeičia, kaip viena [klasė](topic:classes) rodoma **tik toje rodymo srityje**.

1. Atverkite lapą ir pasirinkite vieną rodymo sritį.
2. Atverkite klasių skydelį (`CLASSES`) ir pasirinkite klasę.
3. Skiltyje {{ui:Ši rodymo sritis}} pažymėkite {{ui:Paslėpti šioje rodymo srityje}} arba nustatykite {{ui:Spalva čia}}, {{ui:Linijos storis čia}} ar {{ui:Užpildas čia}}.

Žemiau pateikiamas sąrašas visų klasių, kurias ši rodymo sritis keičia. {{ui:Išvalyti šios rodymo srities perrašymus}} nuima visus. Kiekvienas pakeitimas yra vienas anuliavimo žingsnis.

## Ką perrašymas keičia

- **Paslėpti** paslepia klasę ir visas jai pavaldžias klases šioje rodymo srityje.
- **Spalva, linijos storis ir užpildas** keičia tos klasės objektų, kurių reikšmė nenustatyta pačiame objekte, t. y. objektų, kurie ją perima pagal klasę ar sluoksnį. Objektas su savo spalva ją išlaiko, kaip ir su rodymo srities sluoksnio perrašymu.

Perrašymai matomi ekrane ir spausdiniuose bei PDF failuose, įskaitant lapų rinkinį, paskelbtą PDF formatu. Jie veikia kartu su rodymo srities užšaldytais sluoksniais ir sluoksnių perrašymais.

Perrašymai įrašomi kartu su brėžiniu DWG ir DXF formatais (su klasių sąrašu bloke `CADCRAFT_CLASSES`) ir grįžta į tą pačią rodymo sritį, kai failas atidaromas CadCraft programoje.
