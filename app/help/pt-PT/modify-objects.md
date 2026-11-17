---
title: Mover, copiar, rodar, escalar, espelhar, esticar e criar matriz
summary: Dispor mobiliário num compartimento com os comandos básicos de modificação, usando pontos base, distâncias escritas e anular.
keywords: mover, copiar, rodar, escalar, espelhar, esticar, matriz, unir, matchprop, igualar propriedades, pincel, arrayrect, arraypolar, matriz polar, apagar, explodir, anular, refazer, ponto base, deslocamento, modificar, alinhar, distribuir, alinhar em linha, distribuir uniformemente
from: 8eaeee6c
---

## O que vai criar

Uma mesa com uma cadeira, copiada em torno da mesa, rodada, espelhada e redimensionada. Pelo caminho usa {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} e {{cmd:UNDO}}.

## Desenhe as peças

1. Escreva `REC` e prima {{key:Enter}}, escreva `0,0` e prima {{key:Enter}}, depois escreva `@1800,900` e prima {{key:Enter}}. Esta é a mesa.
2. Escreva `REC` e prima {{key:Enter}}, escreva `300,-700` e prima {{key:Enter}}, depois escreva `@450,450` e prima {{key:Enter}}. Esta é uma cadeira, por baixo da mesa.
3. Clique em {{ui:Extensão}}.

## Mover: ponto base, depois segundo ponto

Todas as operações de mover, copiar, rodar e escalar começam num **ponto base**: o ponto que é arrastado, ou em torno do qual se roda.

1. Clique na cadeira para a selecionar.
2. Escreva `M` e prima {{key:Enter}}. O histórico diz `1 encontrado`.
3. Em `Especifique o ponto base`, use o snap Extremidade no canto superior esquerdo da cadeira e clique.
4. Em `Especifique o segundo ponto`, escreva `@0,200` e prima {{key:Enter}}.

A cadeira sobe 200, mais perto da mesa.

:::tip
Escreva `D` em `Especifique o ponto base` para indicar um deslocamento em vez disso: o CadCraft pede então `Especifique o deslocamento`, e escreve quanto para o lado e para cima, como `0,200` (não é preciso `@`).
:::

## Copiar, quantas vezes quiser

1. Clique na cadeira.
2. Escreva `CO` e prima {{key:Enter}}.
3. Use o snap no canto inferior esquerdo da cadeira e clique como ponto base.
4. Escreva `@600,0` e prima {{key:Enter}}. Aparece uma cópia 600 para a direita.
5. Escreva `@600,0` outra vez e prima {{key:Enter}}. Aparece uma segunda cópia 1200 para a direita do original.
6. Prima {{key:Enter}} para terminar o comando.

{{cmd:COPY}} continua até premir {{key:Enter}}. Cada cópia fica à distância entre o ponto base e o ponto que indicou. Um ponto com `@` conta a partir do último ponto introduzido, que depois da primeira cópia é o ponto dessa cópia; por isso `@600,0` duas vezes dá cópias a 600 e a 1200. Escreva `U` e prima {{key:Enter}} para retirar a última cópia sem sair do comando.

Deverá ver três cadeiras em fila por baixo da mesa.

:::tip
{{cmd:COPY}} serve para cópias dentro de um desenho, colocadas por um ponto base. Para levar objetos para outro desenho ou separador, ou para os colar mais tarde, use a área de transferência: {{key:Mod+C}}, depois {{key:Mod+V}}. {{key:Mod+D}} faz uma cópia que acompanha o ponteiro. Veja [Copiar, colar e duplicar](topic:copy-paste).
:::

## Espelhar a fila para o outro lado

1. Arraste um cruzamento (da direita para a esquerda) sobre as três cadeiras, sem tocar na mesa.
2. Escreva `MI` e prima {{key:Enter}}.
3. Em `Especifique o primeiro ponto da linha de espelho`, use o snap Ponto médio do lado esquerdo da mesa e clique.
4. Em `Especifique o segundo ponto da linha de espelho`, use o snap Ponto médio do lado direito da mesa e clique.
5. Em `Apagar objetos de origem? [Sim (Y)/Não (N)] <N>`, prima {{key:Enter}} para os manter.

Deverá ver três cadeiras por baixo da mesa e três espelhadas por cima dela. O texto numa seleção espelhada continua legível: fica colocado espelhado, mas não escrito ao contrário.

## Rodar uma cadeira

1. Clique na cadeira mais à direita, por baixo da mesa.
2. Escreva `RO` e prima {{key:Enter}}.
3. Use o snap no canto inferior direito da cadeira e clique como ponto base.
4. Escreva `90` e prima {{key:Enter}}.

A cadeira roda 90 graus no sentido contrário ao dos ponteiros do relógio, em torno do ponto base. Um ângulo negativo roda no sentido dos ponteiros do relógio. Em vez de escrever, pode clicar num segundo ponto: o ângulo é medido do ponto base até esse ponto.

## Escalar a mesa

1. Selecione a mesa.
2. Escreva `SC` e prima {{key:Enter}}.
3. Use o snap no canto inferior esquerdo da mesa e clique como ponto base.
4. Escreva `1.2` e prima {{key:Enter}}.

A mesa fica 20% maior, a crescer a partir do ponto base. Um fator abaixo de 1 torna-a mais pequena.

:::note
Se clicar num ponto em vez de escrever o fator de escala, o fator é a distância entre o ponto base e esse ponto. Clicar a uma unidade de desenho de distância dá um fator de 1. Escrever o número é normalmente o que quer.
:::

## Anular e refazer

- {{key:Mod+Z}}, o botão {{ui:Anular}} ou `U` e {{key:Enter}} anulam o último comando. Um comando inteiro é um único passo: anular um {{cmd:COPY}} que fez cinco cópias remove as cinco.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, o botão {{ui:Refazer}} ou `REDO` repõem-no.
- O histórico diz o que foi anulado ("Anulado COPY").

O CadCraft guarda os últimos 500 passos. As definições de camadas (ligada, congelada, bloqueada, cor) são definições, não edições, e não são anuladas.

## Esticar um compartimento para o tornar mais largo

{{cmd:STRETCH}} (`S`, ou {{ui:Esticar}}) move apenas o que está dentro de uma janela de cruzamento: os cantos e as extremidades de linhas que lá estão movem-se, e o resto fica onde está. Assim o compartimento fica mais largo em vez de se deslocar.

1. Escreva `S` e prima {{key:Enter}}.
2. Arraste uma janela da direita para a esquerda sobre a parede da direita, de modo a cobrir os cantos da parede e as extremidades de tudo o que lá chega.
3. Prima {{key:Enter}}.
4. Clique num ponto base, depois escreva `@600,0` e prima {{key:Enter}}.

O retângulo fica 600 mais largo; as linhas que terminavam na parede continuam a terminar nela. Um arco com uma extremidade dentro mantém a sua altura; círculos e textos movem-se quando o centro ou o ponto de inserção estão dentro, e uma cota mede o seu novo comprimento. Os objetos escolhidos um a um, sem janela, simplesmente movem-se.

Também pode selecionar primeiro: arraste a janela de cruzamento (ou um laço de cruzamento) sobre a parede sem nenhum comando a correr, e depois escreva `S`. O STRETCH usa essa seleção e estica o que essas janelas contêm, tal como se as tivesse arrastado no próprio pedido do comando.

## Matriz: linhas e colunas, ou em torno de um centro

{{cmd:ARRAY}} (`AR`, ou {{ui:Matriz}}) copia a seleção numa grelha ou num círculo.

1. Selecione uma cadeira e escreva `AR`, depois prima {{key:Enter}}. Prima {{key:Enter}} para Retangular.
2. Aparece uma pré-visualização de 4 colunas e 3 linhas. Escreva `COU`, prima {{key:Enter}}, depois `5` para colunas e `2` para linhas.
3. Escreva `S`, prima {{key:Enter}}, depois `600` entre colunas e `-900` entre linhas (negativo desce).
4. Prima {{key:Enter}} para criar as cópias.

Para um anel de cadeiras em torno de uma mesa, escolha `PO` (Polar) em vez disso, clique no centro da mesa e defina `I` (itens), `F` (ângulo de preenchimento: 360 para dar a volta toda, 180 para meia volta) e `ROT` (se as cópias rodam para ficar viradas para o centro). {{cmd:ARRAYRECT}} e {{cmd:ARRAYPOLAR}} dispensam a pergunta.

## Juntar peças numa só polilinha

{{cmd:JOIN}} (`J`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Unir}}): selecione linhas, arcos e polilinhas abertas cujas extremidades se tocam, e prima {{key:Enter}}. Tornam-se numa só polilinha, fechada se der a volta completa, que pode depois receber um offset de uma só vez. Linhas sobre uma mesma reta tornam-se uma só linha, mesmo com intervalos entre elas; arcos de um mesmo círculo tornam-se um só arco, ou o círculo.

## Igualar propriedades

{{cmd:MATCHPROP}} (`MA`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Igualar propriedades}}): clique no objeto cujo aspeto quer, depois selecione os objetos a alterar e prima {{key:Enter}}. Eles recebem a camada e a cor dele; um texto recebe a altura, uma cota recebe as suas dimensões, uma trama recebe o seu padrão. Escreva `S` (Definições) na segunda pergunta para desligar qualquer uma destas.

## Alinhar objetos

**Por pontos.** {{cmd:ALIGN}} (`AL`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar}}): selecione os objetos e prima {{key:Enter}}, depois clique num ponto neles (a origem) e no sítio para onde deve ir (o destino).

- Um par move-os. Prima {{key:Enter}} em `Especifique o segundo ponto de origem` para parar aí.
- Dois pares também os rodam, de modo que a linha entre os dois pontos de origem fique ao longo da linha entre os dois pontos de destino. O CadCraft pergunta então `Escalar objetos com base nos pontos de alinhamento? [Sim (Y)/Não (N)] <N>`: `Y` torna-os também maiores ou mais pequenos nessa proporção.
- Um terceiro par espelha-os quando os seus dois pontos estão em lados opostos dessa linha.

**Extremidades e espaçamento.** {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar e distribuir}} (ou `ALIGNPANEL`) abre um pequeno painel sobre o desenho. Selecione objetos e depois:

- escolha com o que alinhar em {{ui:Alinhar com}} (toda a seleção, o primeiro ou o último objeto escolhido, ou um ponto em que clicar) e clique em {{ui:Esquerda}}, {{ui:Centro}}, {{ui:Direita}}, {{ui:Superior}}, {{ui:No meio}} ou {{ui:Inferior}};
- ou escolha {{ui:Intervalos iguais}} ou {{ui:Centros iguais}} e clique em {{ui:Na horizontal}} ou {{ui:Na vertical}}: os dois objetos exteriores mantêm-se e os restantes ficam espaçados de forma uniforme entre eles (três objetos no mínimo).

Cada clique é um passo de anulação, e a seleção mantém-se, por isso pode experimentar outra opção. Cada objeto conta pela sua caixa delimitadora, no UCS quando um estiver definido. Na linha de comandos, o mesmo são {{cmd:ALIGNTO}} e {{cmd:DISTRIBUTE}}.

## Apagar e explodir

- {{cmd:ERASE}} (`E`, ou {{key:Delete}}) remove os objetos selecionados.
- {{cmd:EXPLODE}} (`X`) parte uma polilinha em linhas e arcos, uma referência de bloco nos seus objetos, e uma cota em linhas, setas e texto. As cotas explodidas deixam de se medir sozinhas.

## Erros comuns

- **Escrever uma distância sem `@` no segundo ponto.** `600,0` é o ponto absoluto 600,0, não "600 para a direita". Use `@600,0`, ou apenas `600` com a cruz apontada para o lado certo.
- **A rotação foi no sentido errado.** Os ângulos positivos rodam no sentido contrário ao dos ponteiros do relógio.
- **Anular retirou mais do que o esperado.** Uma anulação retira todo o último comando, incluindo todas as cópias que fez.
- **O comando não pediu para selecionar objetos.** Os objetos já estavam selecionados e o comando usou-os. Prima primeiro {{key:Esc}} para começar sem nada selecionado.
