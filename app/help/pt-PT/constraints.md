---
title: Restringir um desenho
summary: "Mantenha linhas na horizontal, extremos juntos e medidas fixas com restrições geométricas e dimensionais, e deixe o desenho acompanhar quando alterar uma medida."
keywords: restrição, restrições, paramétrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, graus de liberdade, totalmente restringido
from: f8f21fa4
---

## O que vai criar

Uma chapa cuja largura altera num só sítio: os lados mantêm-se em esquadria, um canto fica no sítio e a altura é sempre metade da largura.

As restrições funcionam em linhas, polilinhas, círculos, arcos e pontos no separador {{ui:Modelo}}. Cada restrição que acrescentar fica como um passo de anulação.

## Desenhar e restringir o contorno

1. Escreva `REC` e prima {{key:Enter}}. Escreva `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Escreva `AUTOCONSTRAIN` e prima {{key:Enter}}. Escreva `ALL`, {{key:Enter}} e, a seguir, {{key:Enter}} outra vez.

   O histórico diz "4 restrições aplicadas". Aparecem pequenas caixas com **H** e **V** junto aos lados: são as barras de restrição.
3. Escreva `GCFIX` e prima {{key:Enter}}. Clique perto do canto inferior esquerdo. Aparece uma caixa com ⊕: esse canto mantém-se onde está.

`AUTOCONSTRAIN` acrescenta restrições de coincidência onde os extremos quase se tocam, e restrições horizontais ou verticais onde as linhas estão quase na horizontal ou na vertical. Escreva `S` no pedido para alterar a proximidade (0.05 unidades de desenho e 1° para começar).

## Acrescentar as medidas

1. Escreva `DCHORIZONTAL` e prima {{key:Enter}}.
2. Clique perto do canto inferior esquerdo e, a seguir, perto do canto inferior direito.
3. Clique por baixo do retângulo para a linha de cota.
4. O pedido mostra `Dimension text <d1=100>`. Escreva `width=120` e prima {{key:Enter}}.

   O retângulo tem agora 120 de largura, e a etiqueta diz `width=120`.
5. Escreva `DCVERTICAL` e prima {{key:Enter}}, escreva `O` e prima {{key:Enter}}, e depois clique no lado direito.
6. Clique à direita dele, escreva `width/2` e prima {{key:Enter}}.

   Fica com 60 de altura. A etiqueta diz `fx: d1=width/2`: uma expressão comanda-a.

O histórico indica agora que o contorno está totalmente restringido. Para alterar o tamanho, altere `width` (veja [Utilizar parâmetros e equações](topic:parameters)), ou faça duplo clique na etiqueta `width=120`, escreva um valor novo e escolha {{ui:Aplicar}}.

## Mover objetos restringidos

Mover, rodar, escalar, os pontos de controlo e o painel Propriedades mantêm todas as restrições: o que moveu fica preso, e o resto acompanha. Quando as restrições não conseguem acompanhar, a edição não é feita e o histórico diz porquê, por exemplo "Não feito: as restrições mantêm esse objeto onde está". Apagar um objeto elimina também as respetivas restrições.

## Espelhar e aparar objetos restringidos

- {{cmd:MIRROR}} copia as restrições entre os objetos que espelha para as cópias. Os lados (o lado em que uma tangente toca, o lado para onde se mede uma distância) são calculados de novo para a cópia espelhada, e as cotas copiadas recebem nomes próprios, como acontece numa colagem. Com `Erase source objects` `Y`, as restrições ficam nos objetos espelhados. O histórico indica quantas vieram junto.
- {{cmd:TRIM}} mantém as restrições de uma linha ou de um arco no que sobra: uma restrição num extremo passa para o pedaço que ainda tem esse extremo; uma regra de direção ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Paralela}}, {{ui:Perpendicular}}) mantém-se em todos os pedaços; e uma cota entre os dois extremos exteriores continua a medi-los. Caem as restrições que prendiam a parte cortada, ou um comprimento que o corte alterou ({{ui:Igual}}, o ângulo de varrimento de um arco). Um círculo aparado mantém as restrições do centro e do raio. As polilinhas aparadas perdem as suas.

## As restrições

| Comando | Mantém |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | uma linha ou segmento na horizontal ou na vertical (`2P`: dois pontos na horizontal ou na vertical) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | duas linhas paralelas, perpendiculares ou alinhadas sobre a mesma reta |
| {{cmd:GCCOINCIDENT}} | dois pontos juntos; `O`: um ponto sobre uma linha, círculo ou arco |
| {{cmd:GCTANGENT}} | uma linha e um círculo ou arco, ou dois deles, em contacto |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dois círculos ou arcos com o mesmo centro; dois comprimentos ou dois raios iguais |
| {{cmd:GCSYMMETRIC}} | dois pontos, linhas ou círculos espelhados em relação a uma linha |
| {{cmd:GCFIX}} | um ponto (clique perto dele) ou um objeto inteiro (`O`) onde está |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | uma distância |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | um raio, um diâmetro, um ângulo entre duas linhas ou o ângulo de um arco |

{{cmd:GEOMCONSTRAINT}} e {{cmd:DIMCONSTRAINT}} perguntam qual; {{ui:Restringir}} e {{ui:Cota}} no grupo {{ui:Paramétrico}} executam-nos, e {{ui:Mais}} lista cada um. Onde clica escolhe a parte: um clique perto de um extremo, do meio ou de um centro escolhe esse ponto; um clique numa polilinha escolhe o segmento que está por baixo. O primeiro objeto fica no lugar e o segundo move-se até o encontrar.

Uma restrição que entra em conflito com outras, ou que não acrescenta nada porque as outras já a implicam, é recusada com uma mensagem, e nada se move.

## Ver, selecionar e remover

- Clique numa caixa de uma barra de restrição (ou num quadrado de coincidência, ou numa etiqueta de cota) para selecionar essa restrição; o histórico indica-a. Prima {{key:Delete}} para a remover.
- {{cmd:DELCONSTRAINT}} remove todas as restrições dos objetos que selecionar.
- {{cmd:CONSTRAINTBAR}}: `S` mostra todas as barras, `H` oculta-as; selecione primeiro os objetos para mostrar ou ocultar as barras deles. {{ui:Mais}} tem {{ui:Mostrar barras de restrição}} e {{ui:Ocultar barras de restrição}}.
- {{cmd:DCDISPLAY}} mostra ou oculta as restrições dimensionais. Nunca são impressas.
- {{cmd:DCCONVERT}} transforma as cotas desenhadas em linhas, círculos e arcos em restrições dimensionais.

:::note
Se já utilizou o desenho paramétrico do AutoCAD, os nomes dos comandos e os pedidos são os mesmos. As restrições e os parâmetros são guardados em ficheiros DWG e DXF de uma forma que outros programas ignoram; veja [Ficheiros](topic:files#constraints-in-files).
:::
