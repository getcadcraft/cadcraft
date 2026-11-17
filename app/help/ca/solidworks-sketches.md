---
title: Moure croquis cap a altres modeladors de peces i des d'ells
summary: Escriure una macro que reconstrueix el vostre dibuix com un sol croquis restringit en un modelador de peces, i obrir un croquis exportat des d'un d'aquests.
keywords: croquis, macro, swb, vba, exportar, modelador de peces, variables globals, equacions, relacions, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks no està disponible on es construeix CadCraft, així que cap de les dues direccions no s'ha provat encara a SolidWorks. Allò que escriu CadCraft només es comprova quant a estructura. Comproveu el resultat abans de confiar-hi.
:::

## Enviar un dibuix com a croquis

1. Restringiu i acoteu el dibuix (vegeu [Restringir un dibuix](topic:constraints)).
2. Al grup {{ui:Paramètric}}, obriu {{ui:Més}} i trieu {{ui:Macro per a SolidWorks (.swb)}}, o escriviu {{cmd:SWBOUT}}.

   Es baixa un fitxer amb el nom del dibuix i acabat en `.swb`.
3. A SolidWorks, trieu **Tools > Macro > Run** i seleccioneu aquest fitxer.

La macro crea una peça nova a partir de la vostra plantilla de peça per defecte, obre un croquis al Front Plane i hi dibuixa les línies, cercles, arcs, punts i polilínies del model, amb:

- les vostres restriccions com a relacions de croquis,
- les vostres restriccions dimensionals com a cotes amb els mateixos noms (`d1@Sketch1`),
- els vostres paràmetres propis com a variables globals,
- cada expressió com a equació.

La peça usa la unitat de longitud del dibuix. El text, els blocs, les trames, les cotes i els fulls no formen part del croquis; l'historial enumera què s'ha deixat fora. Les expressions que no tenen forma d'equació (`if`, `min`, `max`, `round`, `%` i algunes més) s'escriuen com el seu valor actual, i l'historial ho indica. Tot el que la macro no pot fer s'escriu en un fitxer de registre al costat de la macro, i un missatge en fa el resum al final.

## Obrir un croquis d'una peça

1. A SolidWorks, executeu sobre la peça la macro d'exportació de CadCraft (baixeu-la des de l'aplicació PartCraft: File > Export > Export macro to bring parts back). Escriu un fitxer `.json` en el format `cadcraft-sw-export` al costat de la peça.
2. A CadCraft, trieu {{ui:Obre}} i seleccioneu aquest fitxer `.json`.
3. Quan la peça tingui diversos croquis, trieu-ne un.

El croquis esdevé el dibuix, en mil·límetres: les seves línies, arcs, cercles i punts, les seves relacions com a restriccions, les seves cotes com a restriccions dimensionals amb els noms originals (`D1`, `D2` …), les seves variables globals com a paràmetres, i les equacions de les seves cotes com a expressions. L'historial enumera allò que no s'ha traslladat, com ara les relacions que CadCraft no té. La posició del croquis dins la peça no es conserva: es dibuixa pla, tal com es veu sobre el seu plànol.
