---
title: Rexistrar varios escaneos nun só
summary: Colocar escaneos tomados desde posicións distintas nun mesmo marco, por pares de puntos escollidos ou destinos escritos, afinalos con ICP, gardar o rexistro como proxecto e exportar a nube rexistrada como LAS ou E57. O comando é REGISTERSCANS.
keywords: rexistro, rexistrar, escaneos, nube de puntos, icp, punto máis próximo iterativo, destinos, pares de puntos, transformación ríxida, aliñar, combinar, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## O que vai facer

Varios escaneos dun mesmo lugar (cada un desde a súa propia posición do escáner) comezan nas súas propias coordenadas. Rexístreos: dea a cada escaneo unha colocación para que todos se sitúen nun mesmo marco, e despois garde ese resultado como proxecto e escriba a nube rexistrada nun único ficheiro LAS ou E57.

## Colocar os escaneos

1. Abra o diálogo (escriba `REGISTERSCANS` (ou `REGSCAN`)). {{ui:Engadir escaneos…}} admite ficheiros LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou pode soltalos sobre o diálogo. Os escaneos con unidades distintas rexéitanse cunha nota: converta primeiro un deles.
2. Escolla {{ui:Escaneo a mover}} e {{ui:Colocar contra}}. A imaxe mostra todos os escaneos do marco tal como están agora, cada un dunha cor: {{ui:Planta}}, {{ui:Frontal}} ou {{ui:Alzado lateral}}; arrastre para desprazar e use a roda do rato para facer zoom.
3. **Por pares de puntos.** Prema {{ui:Escoller un par}}, despois un punto do escaneo que se vai mover e logo o mesmo lugar noutro escaneo (unha esquina, un destino, o pé dun piar). Faga isto polo menos tres veces, con puntos que non estean nunha mesma liña e separados entre si. Prema {{ui:Colocar por pares}}: o escaneo se coloca por un axuste de mínimos cadrados, e **Resto** indica canto falla aínda cada par. Un par cun número grande é unha mala escolla: elimíneo coa cruz e coloque de novo.
4. **Por destinos.** Se se coñecen as coordenadas reais dun punto (destinos topografados), prema {{ui:Escoller e despois escribir o destino}}, prema o punto no seu escaneo e escriba as coordenadas X, Y e Z do destino na fila. Os pares e os destinos escritos pódense combinar libremente.

## Afinar con ICP

Os pares dan unha colocación aproximada. {{ui:Afinar}} move o escaneo ata que as súas superficies coincidan coas do outro escaneo: primeiro **punto a punto** e despois **punto a plano**. A táboa recolle cada paso co seu erro e cantos puntos coincidiron; a liña de enriba debuxa a caída do erro. {{ui:Parar}} remata a execución despois do paso en curso e conserva o que se conseguiu. {{ui:Desfacer}} desfai toda a execución (ou a última colocación); {{ui:Restablecer (R)}} devolve o escaneo ás súas coordenadas do ficheiro.

Para que vaia rápido nun portátil, ICP traballa cunha parte reducida dos puntos ({{ui:Puntos usados}}, de 5.000 a 60.000) e ignora as coincidencias máis distantes que {{ui:Distancia máxima de coincidencia}} (por defecto, o 5 % do tamaño do escaneo, que se reduce ao asentarse). Primeiro necesita unha colocación aproximada: os escaneos que apenas se solapan informan de que non se poden facer coincidir. As superficies que só son planas ou só son rectas non poden fixar unha posición ao longo de si mesmas; nese caso, engada pares.

## Gardar e exportar

- {{ui:Gardar proxecto}} escribe un ficheiro pequeno `.ccscans.json`: o nome de cada escaneo, o seu tamaño e unha pegada dos seus primeiros 64 KB, con a súa transformación. Non contén puntos. {{ui:Abrir proxecto…}} localiza os ficheiros dos escaneos por esas referencias (os ficheiros deben engadirse antes) e restaura todas as transformacións.
- {{ui:Exportar LAS}} e {{ui:Exportar E57}} escriben un ficheiro con todos os escaneos no seu lugar rexistrado. Os puntos non se reescriben nos orixinais; a transformación aplícase ao exportar. Con {{ui:Ler todos os puntos dos ficheiros}} activado, cada ficheiro se volve ler para cada punto (ata 20 millóns por escaneo); desactivado, só se escriben os puntos que se mostran no visor.
- {{ui:Amosar a nube rexistrada}} (CadCraft) escribe o LAS e o engade debaixo do debuxo coas súas propias coordenadas, como calquera nube.

:::note
Non se envía nada. O rexistro traballa coas unidades propias dos ficheiros e mantén os milímetros: un LAS escríbese cunha escala axeitada (ata 0,1 mm); un E57, con dobres. Un sistema de coordenadas pasa ao LAS só cando todos os escaneos indican o mesmo código EPSG. O escritor de E57 é propio; compróbase lendo de novo os seus ficheiros con este lector e con libE57Format.
:::
