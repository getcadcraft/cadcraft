---
title: Comprobar os puntos as-built
summary: Lea os puntos que medeu unha brigada de topografía e compárea cos puntos e bloques do debuxo: dentro ou fóra dunha tolerancia, sen medir, extra; márquea no debuxo e gárdaa como informe CSV.
keywords: as built, as-built, asbuilt, levantamento, estación total, replanteo, replantear, ficheiro de puntos, csv, txt, pnezd, penzd, xyz, tolerancia, desviación, comprobar, comparar, exportpoints, puntos de replanteo
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) é a outra metade de {{cmd:EXPORTPOINTS}}: exporta os puntos do debuxo para o campo, a brigada os replanta e mide o que se construíu, e ASBUILT compara o seu ficheiro co debuxo.

1. Escriba {{cmd:ASBUILT}} e seleccione os mesmos puntos e bloques que exportou (Enter toma todos os POINT, como fai EXPORTPOINTS).
2. **Emparellar os puntos as-built por** **Número** (a brigada conservou os seus números de punto: indique o primeiro número que exportou) ou **Máis próximo** (eles numeraron as súas propias tomas: cada punto de deseño toma a máis próxima).
3. Indique as unidades e as coordenadas do ficheiro tal como as exportou (Debuxo, Metros ou Pés; Mundo ou UCS), e a **tolerancia** en unidades do debuxo.
4. Escolla o ficheiro CSV ou TXT da brigada. CadCraft lee o ficheiro igual que o fai CivilCraft: comas, tabulacións, punto e coma ou espazos, unha fila de cabeceira que nomee as súas columnas, ou PNEZD polo número de columnas.

A liña de comandos indica cantos puntos se emparellaron, cantos están dentro da tolerancia, fóra dela, sen medir e extra, e a maior distancia. **¿Marcalos no debuxo?** Sí pón os na capa **AS-BUILT** como un só paso de desfacer: un punto en cada toma, o seu número e a distancia xunto a el, e unha liña vermella desde o punto de deseño ata cada toma fóra da tolerancia. Descárgase un informe CSV con todos os puntos: as coordenadas de deseño e as as-built, as diferenzas en leste, norte e altura, e o resultado.

Ver tamén [Puntos para programas BIM](topic:points-for-bim).
