---
title: Mover, copiar, girar, escalar, espelhar, esticar e matriz
summary: Organize móveis em um ambiente com os comandos básicos de modificação, usando pontos base, distâncias digitadas e desfazer.
keywords: mover, copiar, girar, escalar, espelhar, esticar, matriz, unir, matchprop, correspondência de propriedades, pincel, arrayrect, arraypolar, matriz polar, apagar, explodir, desfazer, refazer, ponto base, deslocamento, modificar, alinhar, distribuir, alinhar em linha, espaçar igualmente
from: 8eaeee6c
---

## O que você vai criar

Uma mesa com uma cadeira, copiada ao redor da mesa, girada, espelhada e redimensionada. Ao longo do caminho você usa {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} e {{cmd:UNDO}}.

## Desenhe as peças

1. Digite `REC` e pressione {{key:Enter}}, digite `0,0` e pressione {{key:Enter}}, depois digite `@1800,900` e pressione {{key:Enter}}. Esta é a mesa.
2. Digite `REC` e pressione {{key:Enter}}, digite `300,-700` e pressione {{key:Enter}}, depois digite `@450,450` e pressione {{key:Enter}}. Esta é uma cadeira, abaixo da mesa.
3. Clique em {{ui:Extensão}}.

## Mover: ponto base e depois segundo ponto

Cada mover, copiar, girar e escalar começa de um **ponto base**: o ponto que é levado junto, ou em torno do qual se gira.

1. Clique na cadeira para selecioná-la.
2. Digite `M` e pressione {{key:Enter}}. O histórico diz `1 encontrado`.
3. Em `Especifique o ponto base`, prenda no canto superior esquerdo da cadeira (Extremidade) e clique.
4. Em `Especifique o segundo ponto`, digite `@0,200` e pressione {{key:Enter}}.

A cadeira sobe 200, mais perto da mesa.

:::tip
Digite `D` em `Especifique o ponto base` para informar um deslocamento: o CadCraft então pergunta `Especifique o deslocamento`, e você digita quanto para os lados e para cima, como `0,200` (sem necessidade de `@`).
:::

## Copiar, quantas vezes quiser

1. Clique na cadeira.
2. Digite `CO` e pressione {{key:Enter}}.
3. Prenda no canto inferior esquerdo da cadeira e clique como ponto base.
4. Digite `@600,0` e pressione {{key:Enter}}. Uma cópia aparece 600 para a direita.
5. Digite `@600,0` de novo e pressione {{key:Enter}}. Uma segunda cópia aparece 1200 para a direita do original.
6. Pressione {{key:Enter}} para encerrar o comando.

{{cmd:COPY}} continua até você pressionar {{key:Enter}}. Cada cópia é posicionada pela distância do ponto base até o ponto que você informa. Um ponto com `@` conta a partir do último ponto digitado, que, depois da primeira cópia, é o ponto dessa cópia; por isso `@600,0` duas vezes gera cópias em 600 e 1200. Digite `U` e pressione {{key:Enter}} para desfazer a última cópia sem sair do comando.

Você deve ver três cadeiras em fila abaixo da mesa.

:::tip
{{cmd:COPY}} serve para cópias dentro de um mesmo desenho, posicionadas por um ponto base. Para levar objetos a outro desenho ou guia, ou para colá-los depois, use a área de transferência: {{key:Mod+C}}, depois {{key:Mod+V}}. {{key:Mod+D}} faz uma cópia que acompanha o ponteiro. Veja [Copiar, colar e duplicar](topic:copy-paste).
:::

## Espelhar a fileira para o outro lado

1. Arraste um cruzamento (da direita para a esquerda) sobre as três cadeiras, sem tocar na mesa.
2. Digite `MI` e pressione {{key:Enter}}.
3. Em `Especifique o primeiro ponto da linha de espelho`, prenda no Ponto médio do lado esquerdo da mesa e clique.
4. Em `Especifique o segundo ponto da linha de espelho`, prenda no Ponto médio do lado direito da mesa e clique.
5. Em `Apagar objetos de origem? [Sim (Y)/Não] <N>`, pressione {{key:Enter}} para mantê-los.

Você deve ver três cadeiras abaixo da mesa e três cadeiras espelhadas acima dela. O texto em uma seleção espelhada continua legível: ele é posicionado espelhado, mas não é escrito de trás para frente.

## Girar uma cadeira

1. Clique na cadeira mais à direita, abaixo da mesa.
2. Digite `RO` e pressione {{key:Enter}}.
3. Prenda no canto inferior direito da cadeira e clique como ponto base.
4. Digite `90` e pressione {{key:Enter}}.

A cadeira gira 90 graus no sentido anti-horário em torno do ponto base. Um ângulo negativo gira no sentido horário. Em vez de digitar, você pode clicar em um segundo ponto: o ângulo é medido do ponto base até esse ponto.

## Escalar a mesa

1. Selecione a mesa.
2. Digite `SC` e pressione {{key:Enter}}.
3. Prenda no canto inferior esquerdo da mesa e clique como ponto base.
4. Digite `1.2` e pressione {{key:Enter}}.

A mesa fica 20% maior, crescendo a partir do ponto base. Um fator abaixo de 1 a deixa menor.

:::note
Se você clicar em um ponto em vez de digitar o fator de escala, o fator é a distância do ponto base até esse ponto. Clicar a uma unidade de desenho de distância dá fator 1. Digitar o número normalmente é o que você quer.
:::

## Desfazer e refazer

- {{key:Mod+Z}}, o botão {{ui:Desfazer}}, ou `U` e depois {{key:Enter}} desfaz o último comando. Um comando inteiro é um passo: desfazer um {{cmd:COPY}} que fez cinco cópias remove as cinco.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, o botão {{ui:Refazer}}, ou `REDO` o traz de volta.
- O histórico diz o que foi desfeito ("COPY desfeito").

O CadCraft mantém os últimos 500 passos. Configurações de camadas (ligada, congelada, bloqueada, cor) são configurações, não edições, e não são desfeitas.

## Esticar um cômodo mais largo

{{cmd:STRETCH}} (`S`, ou {{ui:Esticar}}) move apenas o que está dentro de uma janela de cruzamento: cantos e extremidades de linhas dentro dela se movem, e o resto fica parado, então o cômodo fica mais largo em vez de inteiro se mover.

1. Digite `S` e pressione {{key:Enter}}.
2. Arraste uma janela da direita para a esquerda sobre a parede da direita, de modo que cubra os cantos da parede e as extremidades de tudo que a encontra.
3. Pressione {{key:Enter}}.
4. Clique em um ponto base, depois digite `@600,0` e pressione {{key:Enter}}.

O retângulo fica 600 mais largo; linhas que terminavam na parede continuam terminando nela. Um arco com uma extremidade dentro mantém a altura, círculos e textos se movem quando o centro ou o ponto de inserção está dentro, e uma cota mede o novo comprimento. Objetos escolhidos um a um, sem janela, simplesmente se movem.

Você também pode selecionar primeiro: arraste a janela de cruzamento (ou um laço de cruzamento) sobre a parede sem nenhum comando em execução, depois digite `S`. STRETCH usa essa seleção e estica o que as janelas contêm, exatamente como se você as tivesse arrastado no próprio prompt do comando.

## Matriz: linhas e colunas, ou em torno de um centro

{{cmd:ARRAY}} (`AR`, ou {{ui:Matriz}}) copia a seleção em grade ou em círculo.

1. Selecione uma cadeira, digite `AR` e pressione {{key:Enter}}. Pressione {{key:Enter}} para Retangular.
2. Aparece uma prévia de 4 colunas e 3 linhas. Digite `COU`, pressione {{key:Enter}}, depois `5` para colunas e `2` para linhas.
3. Digite `S`, pressione {{key:Enter}}, depois `600` entre colunas e `-900` entre linhas (negativo desce).
4. Pressione {{key:Enter}} para criar as cópias.

Para um anel de cadeiras em torno de uma mesa, escolha `PO` (Polar), clique no centro da mesa e defina `I` (itens), `F` (ângulo de preenchimento: 360 para dar a volta toda, 180 para meia volta) e `ROT` (se as cópias giram para ficar voltadas ao centro). {{cmd:ARRAYRECT}} e {{cmd:ARRAYPOLAR}} pulam a pergunta.

## Unir peças em uma polilinha

{{cmd:JOIN}} (`J`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Unir}}): selecione linhas, arcos e polilinhas abertas cujas extremidades se encontram, e pressione {{key:Enter}}. Elas viram uma polilinha, fechada quando dão a volta completa, que você pode então deslocar de uma só vez. Linhas que estão na mesma reta viram uma linha só, mesmo com lacunas entre elas; arcos de um mesmo círculo viram um arco, ou o círculo.

## Correspondência de propriedades

{{cmd:MATCHPROP}} (`MA`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Correspondência de propriedades}}): clique no objeto cujo aspecto você quer, depois selecione os objetos a alterar e pressione {{key:Enter}}. Eles adotam a camada e a cor dele; um texto assume a altura dele, uma cota assume os tamanhos, uma hachura assume o padrão. Digite `S` (Configurações) na segunda pergunta para desligar qualquer um desses.

## Alinhar objetos

**Por pontos.** {{cmd:ALIGN}} (`AL`, ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar}}): selecione os objetos e pressione {{key:Enter}}, depois clique em um ponto neles (a origem) e no lugar para onde ele deve ir (o destino).

- Um par os move. Pressione {{key:Enter}} em `Especifique o segundo ponto de origem` para parar aí.
- Dois pares também os giram, de modo que a linha entre os dois pontos de origem fique sobre a linha entre os dois pontos de destino. O CadCraft então pergunta `Escalar objetos com base nos pontos de alinhamento?`: `Y` os torna proporcionalmente maiores ou menores também.
- Um terceiro par os espelha quando seus dois pontos estão em lados opostos dessa linha.

**Bordas e espaçamento.** {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar e distribuir}} (ou `ALIGNPANEL`) abre um pequeno painel sobre o desenho. Selecione objetos, depois:

- escolha com o que alinhar em {{ui:Alinhar a}} (toda a seleção, o primeiro ou o último objeto escolhido, ou um ponto que você clicar) e clique em {{ui:Esquerda}}, {{ui:Centro}}, {{ui:Direita}}, {{ui:Superior}}, {{ui:No meio}} ou {{ui:Inferior}};
- ou escolha {{ui:Vãos iguais}} ou {{ui:Centros iguais}} e clique em {{ui:Na horizontal}} ou {{ui:De cima para baixo}}: os dois objetos externos permanecem, e os demais são espaçados igualmente entre eles (no mínimo três objetos).

Cada clique é um passo de desfazer, e a seleção permanece, então você pode tentar outra opção. Cada objeto conta pela sua caixa delimitadora, no UCS quando um está definido. Na linha de comando, o mesmo é feito por {{cmd:ALIGNTO}} e {{cmd:DISTRIBUTE}}.

## Apagar e explodir

- {{cmd:ERASE}} (`E`, ou {{key:Delete}}) remove os objetos selecionados.
- {{cmd:EXPLODE}} (`X`) divide uma polilinha em linhas e arcos, uma referência de bloco em seus objetos, e uma cota em linhas, setas e texto. Cotas explodidas não medem mais a si mesmas.

## Erros comuns

- **Digitar uma distância sem `@` no segundo ponto.** `600,0` é o ponto absoluto 600,0, não "600 para a direita". Use `@600,0`, ou apenas `600` com o cursor apontando para o lado certo.
- **A rotação foi para o lado errado.** Ângulos positivos giram no sentido anti-horário.
- **Desfazer removeu mais do que o esperado.** Um desfazer retira o último comando inteiro, incluindo todas as cópias que ele fez.
- **O comando não pediu para selecionar objetos.** Os objetos já estavam selecionados, então ele os usou. Pressione {{key:Esc}} primeiro para começar sem nada selecionado.
