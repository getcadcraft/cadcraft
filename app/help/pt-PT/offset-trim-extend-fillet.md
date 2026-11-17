---
title: Offset, aparar, prolongar, concordância e chanfre em paredes
summary: Transforme linhas simples em paredes duplas com Offset, limpe os cantos com Concordância, e corte e prolongue linhas com Aparar e Prolongar.
keywords: offset, aparar, prolongar, concordância, chanfre, bisel, quebrar, breakatpoint, alongar, paredes, canto, cortar, paralela, raio, limpeza
from: c6c5cbd0
---

## O que vai criar

Um pequeno compartimento com paredes de 200 de espessura: a face interior é desenhada, a face exterior é criada com offset, os cantos são limpos e um vão de porta é aberto numa parede.

## Desenhar a face interior

1. Escreva `L` e prima {{key:Enter}}.
2. Escreva `0,0` e prima {{key:Enter}}.
3. Escreva `@5000,0` e prima {{key:Enter}}.
4. Escreva `@0,4000` e prima {{key:Enter}}.
5. Escreva `@-5000,0` e prima {{key:Enter}}.
6. Escreva `C` e prima {{key:Enter}}.
7. Clique em {{ui:Extensão}}.

Tem quatro linhas separadas. (Uma polilinha fechada receberia offset de uma só vez; linhas separadas mostram como a Concordância limpa os cantos.)

## Criar offset da face exterior

1. Escreva `O` e prima {{key:Enter}}. O pedido diz `Especifique a distância de offset [Através (T)] <Através (T)>:`.
2. Escreva `200` e prima {{key:Enter}}.
3. Em `Selecione o objeto a deslocar`, clique na linha inferior.
4. Em `Especifique o ponto no lado a deslocar`, clique em qualquer sítio por baixo dela. Aparece uma linha paralela 200 abaixo.
5. Clique na linha da direita e depois clique à sua direita.
6. Clique na linha superior e depois clique acima dela.
7. Clique na linha da esquerda e depois clique à sua esquerda.
8. Prima {{key:Enter}} para terminar o comando.

Deverá ver quatro linhas exteriores, cada uma do mesmo comprimento da sua linha interior, por isso os cantos exteriores ainda não se encontram.

:::tip
Prima {{key:Enter}} no pedido de distância para usar outra vez a última distância. Escreva `T` para Através: cada cópia passa pelo ponto em que clicar, à distância que for.
:::

{{cmd:OFFSET}} funciona em linhas, arcos, círculos e polilinhas. Criar offset de uma polilinha fechada desloca o contorno inteiro, cantos incluídos.

## Limpar os cantos exteriores com a Concordância

{{cmd:FILLET}} une duas linhas num canto: apara ou prolonga ambas para se encontrarem. Com um raio de 0, o canto fica quadrado.

1. Escreva `F` e prima {{key:Enter}}. O pedido diz `Selecione a primeira linha [Raio]:`.
2. Se a última concordância que fez usou um raio, escreva `R`, prima {{key:Enter}}, escreva `0` e prima {{key:Enter}}.
3. Clique na linha exterior inferior, perto da sua extremidade direita.
4. Em `Selecione a segunda linha`, clique na linha exterior da direita, perto da sua extremidade inferior.

As duas linhas encontram-se agora num canto vivo, e o comando termina.

5. Prima {{key:Enter}} para repetir {{cmd:FILLET}}, e faça o canto seguinte.
6. Repita até os quatro cantos exteriores se encontrarem.

Clique em cada linha na parte que quer **manter**. Com um raio acima de 0, a Concordância acrescenta um arco entre as linhas.

:::tip
Escreva `M` no primeiro pedido para fazer os quatro cantos de uma vez, ou desenhe a face exterior como uma polilinha fechada e escreva `P`: todos os cantos são feitos ao mesmo tempo. Mantenha {{key:Shift}} premida ao clicar na segunda linha para um canto vivo sem alterar o raio.
:::

## Chanfrar um canto

{{cmd:CHAMFER}} corta um canto com uma linha reta.

1. Escreva `CHA` e prima {{key:Enter}}.
2. Escreva `D` e prima {{key:Enter}}. Escreva `300` e prima {{key:Enter}} para a primeira distância, depois prima {{key:Enter}} para usar 300 também na segunda.
3. Clique na linha superior interior, perto da sua extremidade esquerda, depois na linha esquerda interior, perto da sua extremidade superior.

O canto é cortado 300 ao longo de cada linha e uma linha de chanfre une-as. Escreva `A` em vez de `D` para dar um comprimento à primeira linha e um ângulo.

## Cortar um vão de porta com Aparar

Primeiro desenhe as duas ombreiras através da parede inferior, depois apare as linhas da parede entre elas.

1. Escreva `L` e prima {{key:Enter}}.
2. Escreva `1000,200` e prima {{key:Enter}}.
3. Escreva `@0,-600` e prima {{key:Enter}}, depois prima {{key:Enter}} outra vez.
4. Prima {{key:Enter}} para repetir {{cmd:LINE}}.
5. Escreva `1900,200` e prima {{key:Enter}}.
6. Escreva `@0,-600` e prima {{key:Enter}}, depois prima {{key:Enter}} outra vez.

Tem agora duas linhas curtas a atravessar a parede inferior, a 900 de distância.

7. Escreva `TR` e prima {{key:Enter}}. O histórico diz `Definições atuais: modo Rápido, extremidades: sem prolongar`.
8. Clique na linha inferior interior entre as duas ombreiras. Essa parte desaparece. (Pouse primeiro o ponteiro nela: a parte que vai sair fica cinzenta e tracejada.)
9. Clique na linha inferior exterior entre as duas ombreiras. Essa parte também desaparece.
10. Clique na parte de cada ombreira que sai acima da parede, e na parte abaixo dela.
11. Prima {{key:Enter}} para terminar o comando.

Deverá ver uma abertura de 900 na parede inferior, com as ombreiras a fechar as extremidades da parede.

No modo Rápido (o predefinido), o Aparar não pede primeiro as arestas de corte: cada objeto visível é uma aresta de corte. Escolha a peça que quer retirar, ou arraste um caminho por várias peças para as aparar todas de uma vez. Escreva `U` e prima {{key:Enter}} para repor a última escolha ou arrastamento sem sair do comando. Vedação, cruzamento, arestas escolhidas e {{key:Shift}} para prolongar estão em [Aparar e prolongar](topic:trim-and-extend).

## Prolongar uma linha até encontrar outra

{{cmd:EXTEND}} alonga uma extremidade de linha, arco ou polilinha até encontrar o objeto seguinte nessa direção.

1. Escreva `L` e prima {{key:Enter}}.
2. Escreva `1000,2000` e prima {{key:Enter}}.
3. Escreva `@2000,0` e prima {{key:Enter}}, depois prima {{key:Enter}} outra vez. A linha para 2000 antes da parede da direita.
4. Escreva `EX` e prima {{key:Enter}}.
5. Clique na nova linha, perto da sua extremidade direita.
6. Prima {{key:Enter}} para terminar o comando.

A linha passa agora até à face interior da parede da direita. Cada objeto visível é um limite; escolha perto da extremidade que deve crescer. Dentro de {{cmd:TRIM}}, {{key:Shift}}+clique faz o mesmo.

## Quebrar e alongar

{{cmd:BREAK}} (`BR`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Quebrar}}) abre um intervalo sem aresta de corte: clique no objeto onde o intervalo começa (esse clique é o primeiro ponto), depois clique onde termina. Num círculo, fica a parte que vai, no sentido contrário ao dos ponteiros do relógio, do primeiro ponto ao segundo. `F` no segundo pedido permite dar outra vez o primeiro ponto, e {{cmd:BREAKATPOINT}} divide um objeto em dois num só ponto, sem intervalo.

{{cmd:LENGTHEN}} (`LEN`) altera um comprimento numa extremidade:

1. Escreva `LEN` e prima {{key:Enter}}. Clique numa linha para ver o seu comprimento atual; o pedido pergunta de novo.
2. Escolha o modo: `DE` (Delta: uma quantidade a acrescentar, negativa para retirar; `A` para o ângulo de um arco), `P` (Percentagem: 50 divide ao meio), `T` (Total: o comprimento que deve ter) ou `DY` (Dinâmico: arraste a extremidade).
3. Clique em cada objeto perto da extremidade que deve mover. `U` repõe o último; {{key:Enter}} termina.

Podem ser alongadas linhas, arcos e polilinhas abertas (o seu segmento final).

## Erros comuns

- **Uma linha inteira desapareceu.** Nada a cruzava, por isso o modo Rápido a apagou. Escreva `U` para a repor; verifique se a linha de corte realmente a cruza (faça zoom) e se não está numa camada desligada.
- **"Sem limite nessa direção."** O Prolongar não encontrou nada onde embater. Escolha mais perto da extremidade que deve crescer.
- **"Raio demasiado grande."** O arco passaria além da extremidade de uma das linhas. Use um raio menor.
- **"Só o primeiro ou o último segmento de uma polilinha aberta pode ser aparado."** Escolha dois segmentos da polilinha um ao lado do outro, ou escreva `P` para arredondar todos os cantos dela.
- **O offset foi para o lado errado.** O lado é onde clica depois de escolher o objeto. Anule com {{key:Mod+Z}} e clique do outro lado.
- **"Não é possível criar offset tão longe."** O offset faria o arco, o círculo ou a polilinha virar do avesso. Use uma distância menor.
