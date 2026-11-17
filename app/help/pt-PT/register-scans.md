---
title: Registar várias digitalizações numa só
summary: Colocar digitalizações tiradas de posições diferentes num mesmo referencial, por pares de pontos escolhidos ou alvos escritos, afiná-las com ICP, guardar o registo como projeto e exportar a nuvem registada como LAS ou E57. O comando é REGISTERSCANS.
keywords: registar, registo, digitalizações, nuvem de pontos, icp, ponto mais próximo iterativo, alvos, pares de pontos, transformação rígida, alinhar, unir, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## O que vai fazer

Várias digitalizações de um mesmo local (cada uma a partir da sua própria posição do scanner) começam nas suas próprias coordenadas. Registe-as: dê a cada digitalização uma colocação para que fiquem todas num mesmo referencial, guarde isso como projeto e escreva a nuvem registada num único ficheiro LAS ou E57.

## Colocar as digitalizações

1. Abra a janela (escreva `REGISTERSCANS` (ou `REGSCAN`)). {{ui:Adicionar digitalizações…}} aceita ficheiros LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ, ou largue-os na janela. As digitalizações com unidades diferentes são recusadas com um aviso: converta primeiro uma delas.
2. Escolha {{ui:Digitalização a mover}} e {{ui:Colocar contra}}. A imagem mostra cada digitalização no referencial tal como está agora, cada uma com uma cor: {{ui:Planta}}, {{ui:Frontal}} ou {{ui:Lado}}; arraste para deslocar a vista e use a roda para fazer zoom.
3. **Por pares de pontos.** Clique em {{ui:Escolher um par}}, depois num ponto da digitalização a mover e depois no mesmo sítio noutra digitalização (um canto, um alvo, o pé de um pilar). Faça-o pelo menos três vezes, com pontos que não estejam em linha reta e que fiquem afastados entre si. Clique em {{ui:Colocar por pares}}: a digitalização é colocada por um ajuste dos mínimos quadrados, e **Restante** mostra quanto falha ainda cada par. Um par com um número grande é uma escolha má: remova-o com a cruz e volte a colocar.
4. **Por alvos.** Se as coordenadas reais de um ponto forem conhecidas (alvos topografados), clique em {{ui:Escolher e depois escrever o alvo}}, clique no ponto na sua digitalização e escreva o X, Y e Z do alvo na linha. Pares e alvos escritos podem misturar-se livremente.

## Afinar com ICP

Os pares dão uma colocação aproximada. {{ui:Afinar}} desloca a digitalização até que as suas superfícies assentem nas da outra: primeiro **ponto a ponto** e depois **ponto a plano**. A tabela lista cada passo com o seu erro e quantos pontos foram emparelhados; a linha acima dela mostra o erro a descer. {{ui:Parar}} termina a execução após o passo em curso e mantém o que já foi atingido. {{ui:Anular}} desfaz a execução inteira (ou a última colocação); {{ui:Repor}} devolve a digitalização às coordenadas do seu ficheiro.

Para que seja rápido num portátil, o ICP trabalha sobre uma parte reduzida dos pontos ({{ui:Pontos usados}}, de 5,000 a 60,000) e ignora as correspondências mais afastadas do que {{ui:Maior distância de correspondência}} (por predefinição, 5% do tamanho da digitalização, diminuindo à medida que converge). Precisa primeiro de uma colocação aproximada: digitalizações que mal se sobrepõem indicam que não podem ser correspondidas. Superfícies apenas planas ou apenas retas não conseguem fixar uma posição ao longo de si próprias; acrescente pares nesse caso.

## Guardar e exportar

- {{ui:Guardar projeto}} escreve um pequeno ficheiro `.ccscans.json`: o nome, o tamanho de cada digitalização e uma impressão digital dos seus primeiros 64 KB, com a sua transformação. Não contém pontos. {{ui:Abrir projeto…}} encontra os ficheiros de digitalização através dessas referências (os ficheiros têm de ser adicionados primeiro) e repõe todas as transformações.
- {{ui:Exportar LAS}} e {{ui:Exportar E57}} escrevem um só ficheiro com todas as digitalizações no seu lugar registado. Os pontos nunca são reescritos nos originais; a transformação é aplicada à saída. Com {{ui:Ler todos os pontos dos ficheiros}} ativo, cada ficheiro é lido de novo para cada ponto (até 20 milhões por digitalização); desativado, só são escritos os pontos mostrados no visualizador.
- {{ui:Mostrar nuvem registada}} (CadCraft) escreve o LAS e anexa-o sob o desenho nas suas próprias coordenadas, como qualquer nuvem.

:::note
Nada é enviado. O registo funciona nas unidades próprias dos ficheiros e mantém os milímetros: um LAS é escrito com uma escala que se ajuste (até 0.1 mm), um E57 com valores double. Um sistema de coordenadas só é transportado para o LAS quando todas as digitalizações indicam o mesmo código EPSG. O escritor E57 é nosso; é verificado relendo os seus ficheiros com este leitor e com o libE57Format.
:::
