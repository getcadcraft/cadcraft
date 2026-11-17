---
title: Registrar vários escaneamentos em um só
summary: Posicionar escaneamentos feitos de posições diferentes em um mesmo referencial, por pares de pontos marcados ou alvos digitados, refiná-los com ICP, salvar o registro como um projeto e exportar a nuvem registrada como LAS ou E57. O comando é REGISTERSCANS.
keywords: registrar, registro, escaneamentos, nuvem de pontos, icp, ponto mais próximo iterativo, alvos, pares de pontos, transformação rígida, alinhar, mesclar, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## O que você vai fazer

Vários escaneamentos de um mesmo lugar (cada um feito de uma posição própria do scanner) começam em suas próprias coordenadas. Registre-os: dê a cada escaneamento um posicionamento, para que todos fiquem em um mesmo referencial. Depois, salve isso como um projeto e grave a nuvem registrada em um único arquivo LAS ou E57.

## Posicionar os escaneamentos

1. Abra a caixa de diálogo (digite `REGISTERSCANS` (ou `REGSCAN`)). {{ui:Adicionar escaneamentos…}} aceita arquivos LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou então arraste os arquivos para a caixa de diálogo. Escaneamentos que usam unidades diferentes são recusados com uma nota: converta um deles antes.
2. Escolha {{ui:Escaneamento a mover}} e {{ui:Posicionar em relação a}}. A imagem mostra todos os escaneamentos no referencial, como estão agora, cada um em uma cor: {{ui:Planta}}, {{ui:Frontal}} ou {{ui:Lateral}}. Arraste para deslocar a imagem e use a roda do mouse para dar zoom.
3. **Por pares de pontos.** Clique em {{ui:Escolher um par}}, depois em um ponto do escaneamento a mover e, em seguida, no mesmo lugar em outro escaneamento (um canto, um alvo, o pé de um pilar). Faça isso pelo menos três vezes, com pontos que não estejam em uma mesma linha e bem espalhados. Clique em {{ui:Posicionar por pares}}: o escaneamento é posicionado por um ajuste de mínimos quadrados, e **Restante** mostra o quanto cada par ainda erra. Um par com número grande é uma marcação ruim: remova-o com o X e posicione de novo.
4. **Por alvos.** Se as coordenadas reais de um ponto são conhecidas (alvos topografados), clique em {{ui:Escolher e digitar o alvo}}, clique no ponto no seu escaneamento e digite X, Y e Z do alvo na linha. Pares e alvos digitados podem ser combinados livremente.

## Refinar com ICP

Os pares dão um posicionamento aproximado. {{ui:Refinar}} move o escaneamento até que as suas superfícies coincidam com as do outro: primeiro **ponto a ponto**, depois **ponto a plano**. A tabela lista cada etapa com o seu erro e quantos pontos foram correspondidos; a linha acima dela mostra o erro diminuindo. {{ui:Parar}} encerra a execução após a etapa em andamento e mantém o que foi alcançado. {{ui:Desfazer}} desfaz a execução inteira (ou o último posicionamento). {{ui:Redefinir}} devolve o escaneamento às coordenadas do arquivo.

Para deixar mais rápido em um notebook, o ICP trabalha com uma parcela reduzida dos pontos ({{ui:Pontos usados}}, de 5,000 a 60,000) e ignora correspondências mais distantes que {{ui:Maior distância de correspondência}} (por padrão, 5% do tamanho do escaneamento, diminuindo à medida que converge). Ele precisa de um posicionamento aproximado antes: escaneamentos que mal se sobrepõem informam que não podem ser correspondidos. Superfícies apenas planas ou apenas retas não conseguem corrigir a posição ao longo de si mesmas; nesse caso, adicione pares.

## Salvar e exportar

- {{ui:Salvar projeto}} grava um pequeno arquivo `.ccscans.json`: o nome de cada escaneamento, seu tamanho e uma impressão digital dos seus primeiros 64 KB, com a sua transformação. Ele não contém pontos. {{ui:Abrir projeto…}} localiza os arquivos de escaneamento por essas referências (os arquivos precisam ter sido adicionados antes) e restaura cada transformação.
- {{ui:Exportar LAS}} e {{ui:Exportar E57}} gravam um arquivo com todos os escaneamentos no seu lugar registrado. Os pontos nunca são reescritos nos originais; a transformação é aplicada na saída. Com {{ui:Ler todos os pontos dos arquivos}} ativado, cada arquivo é lido novamente para cada ponto (até 20 milhões por escaneamento). Desativado, somente os pontos mostrados no visualizador são gravados.
- {{ui:Mostrar nuvem registrada}} (CadCraft) grava o LAS e o anexa sob o desenho, nas suas próprias coordenadas, como qualquer nuvem.

:::note
Nada é enviado. O registro funciona nas próprias unidades dos arquivos e mantém os milímetros: um LAS é gravado com uma escala que se ajusta (até 0,1 mm), e um E57, com números de dupla precisão. Um sistema de coordenadas só é levado para o LAS quando todos os escaneamentos citam o mesmo código EPSG. O gravador E57 é nosso; ele é verificado relendo os seus arquivos com este leitor e com o libE57Format.
:::
