---
title: Traçar linhas as-built sobre uma nuvem de pontos
summary: Anexe uma digitalização a laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) por baixo do desenho, faça um corte em planta através dela e desenhe paredes, portas e pilares com snap a objetos nos seus pontos.
keywords: nuvem de pontos, pointcloudattach, pcattach, pointcloud, pc, digitalização a laser, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, levantamento, fatia, corte em planta, nó, snap, traçar, condições existentes
from: b0e0aae5
---

## O que vai criar

Uma planta de piso as-built: as paredes de um edifício digitalizado desenhadas como linhas e polilinhas exatamente sobre os pontos da digitalização.

## Anexar a nuvem

1. Defina primeiro as unidades do desenho, se ainda não tiverem sido definidas (a caixa Unidades em Propriedades, ou {{cmd:UNITS}}): o CadCraft converte a nuvem das unidades da nuvem para as do desenho.
2. Escreva {{cmd:POINTCLOUDATTACH}} (ou `PCATTACH`) e prima {{key:Enter}}. Escolha um ficheiro `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz` (o tópico sobre formatos de nuvens de pontos indica o que cada um traz e o que exportar do software próprio do scanner). Também pode abrir o ficheiro com Abrir, arrastá-lo para a página ou enviá-lo a partir de Traçar no CadCraft no visualizador BIM.
3. `Lower-left corner of the cloud`: prima {{key:Enter}} para manter as coordenadas próprias do ficheiro (uma digitalização registada no projeto alinha-se com o desenho), ou clique onde deve ficar o canto inferior esquerdo da nuvem.
4. A linha de comandos indica quantos pontos são mostrados. A vista faz zoom até à nuvem; esta fica por baixo das linhas, com todos os pontos vistos de cima.

## Cortar um corte em planta e traçar

1. Escreva {{cmd:POINTCLOUD}} (ou `PC`) e, depois, `S` para Fatia. Só uma faixa fina a 1.2 m acima do ponto mais baixo da nuvem fica visível: paredes, vãos de portas e pilares leem-se como uma planta de piso.
2. `H` define a altura do corte, `T` a espessura (em unidades do desenho). {{key:Enter}} termina o comando.
3. Ative o snap a objetos ({{key:F3}}) com Nó entre os snaps. Desenhe com {{cmd:LINE}} ou {{cmd:PLINE}}: o cursor faz snap aos pontos do corte, assinalados como "Nuvem de pontos". As extremidades, os pontos médios e os centros do próprio desenho têm prioridade sobre a nuvem, por isso fechar uma polilinha coincide com o seu primeiro ponto.
4. Mude a altura do corte para traçar outro piso e desligue a fatia (`S` novamente) para ver a nuvem inteira.

## Mais opções

Em {{cmd:POINTCLOUD}}: `C` colore os pontos pelas cores do ficheiro, pela altura, pela intensidade, pela classe LiDAR ou por uma só cor; `SI` define o tamanho do ponto; `V` oculta ou mostra a nuvem; `Z` faz zoom até ela; `D` desanexa-a.

O separador 3D também mostra a nuvem, com o ponto mais baixo no chão e o mesmo corte.

:::note
A nuvem não faz parte do desenho: não é guardada no DWG nem no DXF, e anular não a altera. Anexe-a de novo ao abrir o desenho mais tarde. Os ficheiros são lidos neste computador; nada é enviado. As digitalizações muito grandes são reduzidas de forma uniforme para 2 milhões de pontos. Por agora, os ficheiros E57 abrem até 6 milhões de pontos e 512 MB: exporte as digitalizações maiores como LAS ou LAZ.
:::

## Imprimir

{{cmd:PLOT}} imprime a nuvem com o desenho, por baixo das linhas: numa impressão do modelo (Tudo inclui a área da nuvem) e em cada viewport de layout, no PDF, no PNG, no SVG e no que enviar para uma impressora. Imprime o que está no ecrã: a fatia, se estiver ativa, as cores escolhidas, e fica oculta se a tiver ocultado. No papel, os pontos tornam-se pequenos quadrados, prevalecendo em cada um o ponto mais alto, e uma impressão mantém no máximo cerca de 400,000 deles (uma nuvem muito densa imprime com quadrados maiores). A nuvem só é impressa no desenho a que foi anexada; nunca é impressa no próprio espaço de papel, apenas através de um viewport.

## Várias digitalizações

As digitalizações feitas de posições diferentes podem ser registadas num único referencial, refinadas com ICP e exportadas como um único LAS ou E57: ver [Registar várias digitalizações num só](topic:register-scans).
