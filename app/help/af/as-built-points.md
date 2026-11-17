---
title: Kontroleer soos-gebou-punte
summary: Lees die punte wat 'n opmeterspan gemeet het en vergelyk hulle met die tekening se punte en blokke: binne of buite 'n toleransie, nie gemeet nie, ekstra — gemerk in die tekening en as 'n CSV-verslag geskryf.
keywords: soos gebou, soos-gebou, asbuilt, opmeting, totaalstasie, uitsetting, uitsteek, puntlêer, csv, txt, pnezd, penzd, xyz, toleransie, afwyking, kontrole, vergelyk, exportpoints, uitlegpunte
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) is die ander helfte van {{cmd:EXPORTPOINTS}}: jy voer die tekening se punte vir die veld uit, die span stel dit uit en meet wat gebou is, en ASBUILT vergelyk hul lêer met die tekening.

1. Tik {{cmd:ASBUILT}} en kies dieselfde punte en blokke wat jy uitgevoer het (Enter neem elke POINT, soos EXPORTPOINTS doen).
2. Paar die soos-gebou-punte volgens **Nommer** (die span het jou puntnommers behou: gee die eerste nommer waarvandaan jy uitgevoer het) of **Naaste** (hulle het hul eie metings genommer: elke ontwerppunt neem die naaste een).
3. Gee die lêer se eenhede en koördinate soos jy hulle uitgevoer het (Tekening, Meter of Voet; Wêreld of UCS), en die **toleransie** in tekeningeenhede.
4. Kies die span se CSV- of TXT-lêer. CadCraft lees dit soos CivilCraft: kommas, tabs, kommapunte of spasies, 'n kopreël wat sy kolomme noem, of PNEZD volgens kolomgetal.

Die opdragreël sê hoeveel punte gepaar is, hoeveel binne die toleransie is, buite, nie gemeet nie en ekstra, en die grootste afstand. **Merk hulle in die tekening?** Ja sit hulle op laag **AS-BUILT** as een ontdoen-stap: 'n punt by elke meting, sy nommer en afstand langsaan, en 'n rooi lyn van die ontwerppunt na elke meting buite die toleransie. 'n CSV-verslag word afgelaai met elke punt: ontwerp- en soos-gebou-koördinate, die verskille oos, noord en in hoogte, en die uitslag.

Sien ook [Punte vir BIM-programme](topic:points-for-bim).
