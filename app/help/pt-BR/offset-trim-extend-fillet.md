---
title: Deslocar, aparar, estender, concordar e chanfrar paredes
summary: Transforme linhas simples em paredes duplas com Deslocar, limpe os cantos com Concordância, e corte e alongue linhas com Aparar e Estender.
keywords: offset, trim, extend, fillet, chamfer, deslocar, aparar, estender, concordância, chanfro, bisel, quebrar, breakatpoint, alongar, paredes, canto, cortar, paralelo, raio, limpeza
from: c6c5cbd0
---

## O que você vai criar

Uma pequena sala com paredes de 200 de espessura: a face interna é desenhada, a face externa é deslocada, os cantos são limpos, e uma passagem é cortada em uma das paredes.

## Desenhe a face interna

1. Digite `L` e pressione {{key:Enter}}.
2. Digite `0,0` e pressione {{key:Enter}}.
3. Digite `@5000,0` e pressione {{key:Enter}}.
4. Digite `@0,4000` e pressione {{key:Enter}}.
5. Digite `@-5000,0` e pressione {{key:Enter}}.
6. Digite `C` e pressione {{key:Enter}}.
7. Clique em {{ui:Extensão}}.

Você tem quatro linhas separadas. (Uma polilinha fechada seria deslocada de uma vez; linhas separadas mostram como a Concordância limpa os cantos.)

## Desloque a face externa

1. Digite `O` e pressione {{key:Enter}}. O prompt diz `Especifique a distância de deslocamento [Através (T)] <Através>:`.
2. Digite `200` e pressione {{key:Enter}}.
3. Em `Selecione o objeto a deslocar`, clique na linha de baixo.
4. Em `Especifique o ponto do lado a deslocar`, clique em qualquer lugar abaixo dela. Uma linha paralela aparece 200 abaixo.
5. Clique na linha da direita, depois clique à direita dela.
6. Clique na linha de cima, depois clique acima dela.
7. Clique na linha da esquerda, depois clique à esquerda dela.
8. Pressione {{key:Enter}} para encerrar o comando.

Você deve ver quatro linhas externas, cada uma do mesmo comprimento da sua linha interna, então os cantos externos ainda não se encontram.

:::tip
Pressione {{key:Enter}} no prompt de distância para usar a última distância de novo. Digite `T` para Através: então cada cópia passa pelo ponto que você clicar, na distância que for.
:::

{{cmd:OFFSET}} funciona com linhas, arcos, círculos e polilinhas. Deslocar uma polilinha fechada desloca o contorno inteiro, incluindo os cantos.

## Limpe os cantos externos com Concordância

{{cmd:FILLET}} une duas linhas em um canto: apara ou estende as duas para que se encontrem. Com raio 0 o canto fica quadrado.

1. Digite `F` e pressione {{key:Enter}}. O prompt diz `Selecione a primeira linha [Raio]:`.
2. Se a última concordância que você fez usou um raio, digite `R`, pressione {{key:Enter}}, digite `0` e pressione {{key:Enter}}.
3. Clique na linha externa de baixo perto da sua extremidade direita.
4. Em `Selecione a segunda linha`, clique na linha externa da direita perto da sua extremidade inferior.

As duas linhas agora se encontram em um canto vivo, e o comando termina.

5. Pressione {{key:Enter}} para repetir {{cmd:FILLET}}, e faça o próximo canto.
6. Repita até que os quatro cantos externos se encontrem.

Clique em cada linha na parte que você quer **manter**. Com raio acima de 0, a Concordância adiciona um arco entre as linhas.

:::tip
Digite `M` no primeiro prompt para fazer os quatro cantos de uma vez, ou desenhe a face externa como uma polilinha fechada e digite `P`: todos os cantos são feitos de uma vez. Mantenha {{key:Shift}} ao clicar na segunda linha para ter um canto vivo sem mudar o raio.
:::

## Chanfre um canto com Chanfro

{{cmd:CHAMFER}} corta um canto com uma linha reta.

1. Digite `CHA` e pressione {{key:Enter}}.
2. Digite `D` e pressione {{key:Enter}}. Digite `300` e pressione {{key:Enter}} para a primeira distância, depois pressione {{key:Enter}} para usar 300 também na segunda.
3. Clique na linha interna de cima perto da sua extremidade esquerda, depois na linha interna da esquerda perto da sua extremidade superior.

O canto é cortado 300 ao longo de cada linha e uma linha de chanfro os une. Digite `A` em vez de `D` para dar um comprimento na primeira linha e um ângulo.

## Corte uma passagem com Aparar

Primeiro desenhe os dois batentes sobre a parede de baixo, depois apare as linhas da parede entre eles.

1. Digite `L` e pressione {{key:Enter}}.
2. Digite `1000,200` e pressione {{key:Enter}}.
3. Digite `@0,-600` e pressione {{key:Enter}}, depois pressione {{key:Enter}} de novo.
4. Pressione {{key:Enter}} para repetir {{cmd:LINE}}.
5. Digite `1900,200` e pressione {{key:Enter}}.
6. Digite `@0,-600` e pressione {{key:Enter}}, depois pressione {{key:Enter}} de novo.

Agora você tem duas linhas curtas cruzando a parede de baixo, a 900 de distância.

7. Digite `TR` e pressione {{key:Enter}}. O histórico diz `Configurações atuais: modo Rápido, arestas: sem estender`.
8. Clique na linha interna de baixo entre os dois batentes. Esse pedaço desaparece. (Deixe o ponteiro sobre ele antes: o pedaço que vai embora fica cinza e tracejado.)
9. Clique na linha externa de baixo entre os dois batentes. Esse pedaço também desaparece.
10. Clique na parte de cada batente que sobra acima da parede, e na parte abaixo dela.
11. Pressione {{key:Enter}} para encerrar o comando.

Você deve ver uma abertura de 900 na parede de baixo, com os batentes fechando as extremidades da parede.

No modo Rápido (o padrão), Aparar não pede que você escolha antes as arestas de corte: todo objeto visível é uma aresta de corte. Escolha o pedaço que quer eliminar, ou arraste um caminho sobre vários pedaços para aparar todos de uma vez. Digite `U` e pressione {{key:Enter}} para desfazer o último clique ou arraste sem sair do comando. Cerca, cruzamento, arestas escolhidas e {{key:Shift}} para estender estão em [Aparar e estender](topic:trim-and-extend).

## Estenda uma linha até encontrar outra

{{cmd:EXTEND}} alonga uma linha, arco ou extremidade de polilinha até encontrar o próximo objeto nessa direção.

1. Digite `L` e pressione {{key:Enter}}.
2. Digite `1000,2000` e pressione {{key:Enter}}.
3. Digite `@2000,0` e pressione {{key:Enter}}, depois pressione {{key:Enter}} de novo. A linha para 2000 antes da parede da direita.
4. Digite `EX` e pressione {{key:Enter}}.
5. Clique na linha nova perto da sua extremidade direita.
6. Pressione {{key:Enter}} para encerrar o comando.

A linha agora vai até a face interna da parede da direita. Todo objeto visível é um limite; escolha perto da extremidade que deve crescer. Dentro de {{cmd:TRIM}}, {{key:Shift}}+clique faz o mesmo.

## Quebrar e alongar

{{cmd:BREAK}} (`BR`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Quebrar}}) corta uma lacuna sem aresta de corte: clique no objeto onde a lacuna começa (esse clique é o primeiro ponto), depois clique onde ela termina. Em um círculo, vai a parte no sentido anti-horário do primeiro ponto ao segundo. `F` na segunda pergunta permite informar o primeiro ponto de novo, e {{cmd:BREAKATPOINT}} divide um objeto em dois em um ponto, sem lacuna.

{{cmd:LENGTHEN}} (`LEN`) altera um comprimento em uma extremidade:

1. Digite `LEN` e pressione {{key:Enter}}. Clique em uma linha para ver o comprimento atual; o prompt pergunta de novo.
2. Escolha como: `DE` (Delta: uma quantidade a somar, negativa para tirar; `A` para o ângulo de um arco), `P` (Percentual: 50 reduz à metade), `T` (Total: o comprimento que deve ter) ou `DY` (Dinâmico: arraste a extremidade).
3. Clique em cada objeto perto da extremidade que deve mudar. `U` desfaz o último; {{key:Enter}} encerra.

Linhas, arcos e polilinhas abertas (o segmento final delas) podem ser alongados.

## Erros comuns

- **Uma linha inteira desapareceu.** Nada cruzava com ela, então o modo Rápido a apagou. Digite `U` para recolocá-la; confira se a linha de corte realmente cruza com ela (dê zoom) e se não está numa camada desligada.
- **"Nenhum limite nessa direção."** Estender não encontrou nada para atingir. Escolha mais perto da extremidade que deve crescer.
- **"Raio muito grande."** O arco passaria além da extremidade de uma das linhas. Use um raio menor.
- **"Só o primeiro ou o último segmento de uma polilinha aberta pode ser cortado."** Escolha dois segmentos da polilinha um ao lado do outro, ou digite `P` para arredondar todos os cantos dela.
- **O deslocamento foi para o lado errado.** O lado é onde você clica depois de escolher o objeto. Desfaça com {{key:Mod+Z}} e clique do outro lado.
- **"Não é possível deslocar tão longe."** O deslocamento viraria o arco, círculo ou polilinha do avesso. Use uma distância menor.
