---
title: Desenhar paredes, portas e janelas inteligentes em 2D
summary: Desenhar paredes como uma polilinha, uni-las com limpeza e colocar portas e janelas que se movem com a parede. Tudo em 2D, sem modelo 3D.
keywords: parede, paredes, WALL, WA, porta, DOOR, DR, janela, WINDOW, WN, DELOPENING, parede inteligente, planta, vão, sentido de abertura, dobradiça
from: 45845d49
---

As paredes aqui são objetos de desenho 2D. Não criam nenhum modelo 3D, pelo que uma planta fica tão leve como um desenho de linhas. Para um modelo de edifício, use o BimCraft.

## Desenhar paredes

Escreva `WALL` (`WA`), ou escolha {{ui:Parede}} no menu {{ui:Mais}} do grupo {{ui:Desenhar}}, e clique em pontos como faria para uma polilinha. Prima {{key:Enter}} para terminar, ou escreva `C` para fechar o compartimento.

- `T` define a espessura.
- `J` indica a que seguem os seus cliques: o centro da parede, ou a sua face esquerda ou direita.
- `F` define o preenchimento: nenhum, sólido ou trama.

Os cantos fazem meia-esquadria automaticamente. Uma parede que termina dentro da espessura de outra parede une-se em T limpo, e as paredes que se cruzam abrem-se uma para a outra. As uniões são guardadas com as paredes. Para retângulos, polígonos, arcos, divisões, bloqueios e o resto, veja «Formas, cortes, offsets e bloqueios de paredes 2D».

## Adicionar portas e janelas

Escreva `DOOR` (`DR`) ou `WINDOW` (`WN`) e clique numa parede. Uma porta abre para o lado da parede em que clicar. `W` define a largura, `Y` o tipo e `H` o lado da dobradiça. Continue a clicar para colocar mais, e prima {{key:Enter}} para terminar. As portas podem ser simples, duplas, de correr ou uma passagem aberta. As janelas podem ser fixas, de batente ou de correr.

## Alterá-las

Selecione uma parede para ver os seus grips:

- Os grips das extremidades esticam a parede. As paredes unidas a ela seguem-na.
- O grip do meio move a parede.
- Um grip numa abertura faz-a deslizar ao longo da parede.
- As setas invertem a dobradiça e o sentido de abertura de uma porta.

As Propriedades mostram a espessura, o preenchimento e cada abertura: tipo, largura, posição, dobradiça, sentido de abertura, se está mostrada aberta ou fechada, e {{ui:Remover}}. `DELOPENING` retira a abertura mais próxima de onde clicar.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` e `ERASE` funcionam como habitualmente. As portas e janelas seguem a sua parede, as paredes unidas mantêm as suas uniões, e um {{ui:Anular}} desfaz tudo.

## Noutros programas

Cada parede é guardada como um bloco comum, pelo que outros programas de CAD a mostram corretamente e a podem mover, mas não a conseguem editar como parede. `EXPLODE` transforma uma parede em linhas e arcos simples, e deixa de ser uma parede.
