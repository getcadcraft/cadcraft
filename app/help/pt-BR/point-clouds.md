---
title: Traçar linhas como construído sobre uma nuvem de pontos
summary: Anexe um escaneamento a laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) sob o desenho, faça um corte em planta através dele e desenhe paredes, portas e pilares com snap de objeto sobre os seus pontos.
keywords: nuvem de pontos, pointcloudattach, pcattach, pointcloud, pc, escaneamento a laser, escaneamento, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, como construído, as-built, levantamento, fatia, corte em planta, nó, snap, traçar, condições existentes
from: b0e0aae5
---

## O que você vai criar

Uma planta baixa como construído: as paredes de um edifício escaneado desenhadas como linhas e polilinhas exatamente sobre os pontos do escaneamento.

## Anexar a nuvem

1. Defina primeiro as unidades do desenho, se ele não tiver nenhuma (a caixa {{ui:Units}} em {{ui:Properties}}, ou {{cmd:UNITS}}): o CadCraft converte a nuvem das unidades dela para as do desenho.
2. Digite {{cmd:POINTCLOUDATTACH}} (ou `PCATTACH`) e pressione {{key:Enter}}. Escolha um arquivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz` (o tópico sobre formatos de nuvem de pontos explica o que cada um traz e o que exportar do próprio software do scanner). Você também pode abrir o arquivo com {{ui:Open}}, soltá-lo na página ou enviá-lo pelo {{ui:Trace in CadCraft}} do visualizador BIM.
3. `Canto inferior esquerdo da nuvem`: pressione {{key:Enter}} para manter as coordenadas do próprio arquivo (um escaneamento registrado no projeto se alinha ao desenho), ou clique onde deve ficar o canto inferior esquerdo.
4. A linha de comando informa quantos pontos aparecem. A vista amplia até a nuvem; ela fica sob as linhas do desenho, com todos os pontos vistos de cima.

## Cortar uma fatia em planta e traçar

1. Digite {{cmd:POINTCLOUD}} (ou `PC`) e depois `S` para {{ui:Slice}}. Só uma faixa fina, 1.2 m acima do ponto mais baixo da nuvem, aparece: paredes, vãos de portas e pilares se leem como uma planta baixa.
2. `H` define a altura do corte e `T` a espessura (em unidades do desenho). {{key:Enter}} encerra o comando.
3. Ative o snap de objeto ({{key:F3}}) com {{ui:Node}} entre os snaps. Desenhe com {{cmd:LINE}} ou {{cmd:PLINE}}: o cursor encaixa nos pontos da fatia, rotulado "Nuvem de pontos". Extremidades, pontos médios e centros do próprio desenho têm prioridade sobre a nuvem, então fechar uma polilinha cai no primeiro ponto dela.
4. Mude a altura do corte para traçar outro nível, e desligue a fatia (`S` de novo) para ver a nuvem inteira.

## Mais opções

Em {{cmd:POINTCLOUD}}: `C` colore os pontos pelas cores do arquivo, pela altura, pela intensidade, pela classe LiDAR ou por uma só cor; `SI` define o tamanho do ponto; `V` oculta ou mostra a nuvem; `Z` amplia até ela; `D` desanexa.

A guia 3D também mostra a nuvem, com o ponto mais baixo no chão e a mesma fatia.

:::note
A nuvem não faz parte do desenho: ela não é salva no DWG nem no DXF, e desfazer não a altera. Anexe-a de novo ao abrir o desenho depois. Os arquivos são lidos neste computador; nada é enviado. Escaneamentos muito grandes são reduzidos de forma uniforme para 2 milhões de pontos. Arquivos E57 abrem com até 6 milhões de pontos e 512 MB por enquanto: exporte escaneamentos maiores como LAS ou LAZ.
:::

## Plotar

{{cmd:PLOT}} imprime a nuvem com o desenho, sob as linhas: em uma plotagem de modelo ({{ui:Everything}} inclui a área da nuvem) e em cada viewport de layout, no PDF, no PNG, no SVG e no que for enviado a uma impressora. Ele imprime o que está na tela: a fatia, se ela estiver ligada, as cores que você escolheu, e fica oculta se você a ocultou. No papel, os pontos viram pequenos quadrados, prevalecendo o ponto mais alto de cada um, e uma plotagem mantém no máximo cerca de 400,000 deles (uma nuvem muito densa imprime com quadrados maiores). A nuvem só é plotada no desenho ao qual foi anexada; nunca é impressa no espaço papel em si, apenas por meio de uma viewport.

## Vários escaneamentos

Escaneamentos feitos de posições diferentes podem ser registrados em um único referencial, refinados com ICP e exportados como um único LAS ou E57: veja [Registrar vários escaneamentos em um](topic:register-scans).
