---
title: Desenhe paredes inteligentes, portas e janelas em 2D
summary: Desenhe paredes como uma polilinha, una-as com limpeza e insira portas e janelas que se movem com a parede. Tudo em 2D, sem modelo 3D.
keywords: parede, paredes, WALL, WA, porta, DOOR, DR, janela, WINDOW, WN, DELOPENING, parede inteligente, planta baixa, abertura, giro, dobradiça
from: 45845d49
---

As paredes aqui são objetos de desenho 2D. Elas não criam modelo 3D, então uma planta fica tão leve quanto um desenho de linhas. Para um modelo de edificação, use o BimCraft.

## Desenhe paredes

Digite `WALL` (`WA`), ou escolha {{ui:Parede}} no menu {{ui:Mais}} do grupo {{ui:Desenhar}}, e clique em pontos como faria para uma polilinha. Pressione {{key:Enter}} para terminar, ou digite `C` para fechar o cômodo.

- `T` define a espessura.
- `J` define o que seus cliques seguem: o centro da parede, ou a face esquerda ou direita dela.
- `F` define o preenchimento: nenhum, sólido ou hachura.

Os cantos recebem meia-esquadria automaticamente. Uma parede que termina dentro da espessura de outra se une a ela em um T limpo, e paredes que se cruzam se abrem uma para a outra. As uniões são salvas com as paredes. Para retângulos, polígonos, arcos, cortes, travamentos e o restante, veja "Formas, cortes, deslocamentos e travamentos de paredes em 2D".

## Adicione portas e janelas

Digite `DOOR` (`DR`) ou `WINDOW` (`WN`) e clique em uma parede. Uma porta abre para o lado da parede onde você clicar. `W` define a largura, `Y` o tipo e `H` o lado da dobradiça. Continue clicando para colocar mais, e pressione {{key:Enter}} para terminar. As portas podem ser simples, duplas, de correr ou uma passagem aberta. As janelas podem ser fixas, de abrir ou de correr.

## Altere-as

Selecione uma parede para ver os grips dela:

- Os grips das extremidades esticam a parede. As paredes unidas a ela seguem.
- O grip do meio move a parede.
- Um grip em uma abertura a desliza ao longo da parede.
- As setas invertem a dobradiça e o sentido de abertura de uma porta.

Propriedades mostra a espessura, o preenchimento e cada abertura: tipo, largura, posição, dobradiça, sentido de abertura, se aparece aberta ou fechada, e Remover. `DELOPENING` remove a abertura mais próxima de onde você clicar.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` e `ERASE` funcionam como de costume. Portas e janelas acompanham a parede, paredes unidas mantêm as uniões, e um {{ui:Desfazer}} desfaz tudo.

## Em outros programas

Cada parede é salva como um bloco comum, então outros programas de CAD a mostram corretamente e podem movê-la, mas não conseguem editá-la como parede. `EXPLODE` transforma uma parede em linhas e arcos simples, e ela deixa de ser uma parede.
