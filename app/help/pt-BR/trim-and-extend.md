---
title: Aparar e estender
summary: Corte linhas de volta onde outras as cruzam e alongue-as até encontrar outras, uma peça de cada vez ou muitas de uma vez, arrastando um caminho sobre elas.
keywords: trimextendmode, janela de arrasto, aparar, estender, tr, ex, aparar rápido, arrastar, à mão livre, caminho, cerca, cruzamento, shift, arestas de corte, arestas de limite, edgemode, modo, padrão, rápido, apagar, pré-visualização, paredes, limpeza
from: 25fbc5bd
---

## O que você vai aprender

Como {{cmd:TRIM}} e {{cmd:EXTEND}} funcionam, e as formas rápidas de usá-los: arraste sobre muitas peças de uma vez, segure {{key:Shift}} para alternar entre aparar e estender, e veja o que será removido antes de clicar.

## Aparar uma peça

1. Desenhe uma linha horizontal longa e duas linhas curtas que a cruzem.
2. Digite `TR` e pressione {{key:Enter}}. O histórico diz `Current settings: Quick mode, edges: No extend`.
3. Posicione o ponteiro sobre a linha longa entre as duas curtas. Essa peça fica cinza e tracejada: é o que será removido.
4. Clique. A peça desaparece.
5. Pressione {{key:Enter}} para encerrar o comando.

No modo Rápido (o padrão), todo objeto visível é uma aresta de corte, então você nunca precisa escolher as arestas antes. Clique na peça que quer remover. Um objeto que nada cruza é apagado inteiro, e o histórico informa isso.

## Aparar muitas peças em um arrasto

1. Desenhe uma linha horizontal longa e dez linhas verticais curtas que a cruzem.
2. Digite `TR` e pressione {{key:Enter}}.
3. Pressione o botão do mouse acima da linha longa, à esquerda da primeira linha vertical, e arraste sobre as dez acima da linha longa.

Enquanto arrasta, o caminho aparece como uma linha tracejada, e cada peça que ele cruzou fica cinza. Solte: as dez peças de cima são aparadas em uma só etapa. Digite `U` e pressione {{key:Enter}} para restaurá-las todas de uma vez.

:::tip
Você também pode clicar em dois pontos vazios: a linha entre eles funciona como um caminho arrastado. Digite `F` (Cerca) para clicar em uma sequência de pontos em vez disso, depois pressione {{key:Enter}}.
:::

:::touch
Arraste um dedo do mesmo jeito. Um toque em uma peça a apara.
:::

## Estender em vez disso, com Shift

1. Desenhe uma linha vertical e cinco linhas horizontais curtas à sua esquerda, que param antes dela.
2. Digite `TR` e pressione {{key:Enter}}.
3. Segure {{key:Shift}}. Posicione o ponteiro sobre uma linha curta: a parte que ela cresceria aparece cinza e tracejada.
4. Continue segurando {{key:Shift}} e arraste para baixo sobre as cinco linhas curtas.

Agora as cinco vão até a linha vertical. {{key:Shift}} funciona ao contrário em {{cmd:EXTEND}} (`EX`): um clique estende, e um {{key:Shift}}+clique apara. Estender alonga a extremidade mais próxima de onde você clica ou onde o caminho cruza.

## Aparar dentro de uma janela

1. Digite `TR` e pressione {{key:Enter}}.
2. Digite `C` e pressione {{key:Enter}}.
3. Clique em dois cantos em volta das peças a remover.

Toda peça que está pelo menos parcialmente dentro da janela é aparada.

Para ter uma janela só arrastando, sem digitar `C`: {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Arrastar para aparar e estender}} › {{ui:Uma janela}}. Assim, pressionar um ponto vazio e arrastar desenha uma caixa, e toda peça que ela toca é aparada (ou estendida, em {{cmd:EXTEND}}, ou com {{key:Shift}}). {{ui:Um caminho}} (o início) traz de volta o caminho à mão livre. A linha de configurações no início de TRIM diz qual deles está ativo.

## Escolher as arestas de corte (modo Padrão)

Às vezes só uma linha deve cortar, como a face de uma parede com muitas outras linhas cruzando-a.

1. Digite `TR` e pressione {{key:Enter}}.
2. Digite `O` (modo) e pressione {{key:Enter}}, depois digite `S` (Padrão) e pressione {{key:Enter}}.
3. Em `Select cutting edges`, clique nas linhas de aresta (ou arraste uma janela) e depois pressione {{key:Enter}}. Pressionar {{key:Enter}} com nada selecionado faz de todo objeto uma aresta.
4. Clique ou arraste sobre as peças a remover.

Só as arestas escolhidas cortam, e um objeto que nenhuma aresta cruza fica intacto. O modo fica até você fechar a página; digite `O` e depois `Q` para voltar ao Rápido. {{cmd:TRIMEXTENDMODE}} o define antes de você começar, como a variável de mesmo nome faz em outros lugares: `0` Padrão, `1` Rápido. `T` (arestas de corte) escolhe novas arestas a qualquer momento; em {{cmd:EXTEND}} é `B` (arestas de limite).

## Arestas que chegariam

1. Digite `TR` e pressione {{key:Enter}}.
2. Digite `E` (Aresta) e pressione {{key:Enter}}, depois `E` (Estender) e pressione {{key:Enter}}.

Agora uma linha ou arco de corte que para antes conta como se continuasse: uma linha curta corta onde cruzaria se fosse mais longa. Digite `E`, depois `N` (Não estender) para voltar. É o mesmo que EDGEMODE 1 e 0.

## Apagar sem sair

Digite `R` (Apagar) e pressione {{key:Enter}}, escolha os objetos a apagar e pressione {{key:Enter}}. O TRIM continua.

## Erros comuns

- **Uma linha inteira desapareceu.** No modo Rápido, um objeto que nada cruza é apagado. Digite `U` para restaurá-lo, ou mude para o modo Padrão (`O`, `S`).
- **"Nothing to trim there: no chosen edge crosses that object."** Nada a aparar aqui: nenhuma aresta escolhida cruza esse objeto. O modo Padrão só corta nas arestas que você escolheu. Digite `T` para escolhê-las de novo.
- **"No boundary in that direction."** Nenhum limite nessa direção. Estender não encontrou nada à frente. Clique mais perto da extremidade que deve crescer, ou ative `E` (Aresta, Estender) para limites que param antes.
- **O arrasto desenhou um laço.** Um arrasto só apara enquanto TRIM ou EXTEND estiver pedindo um objeto. Sem comando em execução, um arrasto seleciona (veja [Seleção por laço](topic:lasso-selection)).
- **Só linhas, arcos, círculos e polilinhas podem ser aparados.** Explodir um bloco antes para aparar as suas linhas.
