---
title: Linhas de construção e semirretas
summary: Desenhe linhas sem fim (XLINE) ou que partem de um ponto em um sentido (RAY) para alinhar objetos, e apare-as até virarem linhas comuns.
keywords: xline, ray, linha de construção, linhas de construção, linha infinita, linha-guia, linha de referência, bissetriz, linha de deslocamento, linhas de layout, xl
from: b6c398bc
---

## O que você vai aprender

Como desenhar linhas de construção para alinhar objetos enquanto você desenha: por dois pontos, na horizontal ou na vertical, em um ângulo, no meio do caminho entre duas direções, ou a uma distância definida de uma linha. E como aparar essas linhas até virarem linhas comuns, quando tiverem cumprido sua função.

## Dois tipos

- Uma **linha de construção** ({{cmd:XLINE}}) se estende sem fim nos dois sentidos.
- Uma **semirreta** ({{cmd:RAY}}) começa em um ponto e se estende sem fim em um só sentido.

As duas são desenhadas por toda a área de desenho, qualquer que seja o zoom, em tela dividida e em viewports de uma folha. {{ui:Extensão}} as deixa de fora, então o zoom para o desenho ainda enquadra o que você desenhou.

## Desenhe linhas de construção

1. Clique em {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Linha de construção}}, ou digite `XL` e pressione {{key:Enter}}.
2. Clique em um ponto. Cada clique seguinte adiciona uma linha de construção que passa pelo primeiro ponto e pelo que você clicou.
3. Pressione {{key:Enter}} para terminar.

Em vez do primeiro ponto, você pode digitar uma opção:

| Opção | O que faz |
|---|---|
| `H` (Horizontal) | Linhas na horizontal, uma por cada ponto que você clicar. |
| `V` (Vertical) | Linhas na vertical, uma por cada ponto. |
| `A` (Ângulo) | Linhas em um ângulo que você digita (em graus, no sentido anti-horário a partir do eixo X), por cada ponto. `R` (Referência) mede o ângulo a partir de uma linha que você escolhe. |
| `B` (Bissetriz) | Clique no canto e depois em um ponto ao longo de um lado: cada ponto que você clicar ao longo do outro lado adiciona a linha no meio entre os dois. |
| `O` (Deslocar) | Digite uma distância, escolha uma linha e clique do lado: uma linha de construção a essa distância, paralela a ela. `T` (Através) a coloca passando por um ponto que você clicar. A distância é lembrada para a próxima vez. |

## Desenhe semirretas

1. Clique em {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Semirreta}}, ou digite `RAY` e pressione {{key:Enter}}.
2. Clique onde as semirretas começam.
3. Clique em um ponto por onde cada semirreta deve passar. Pressione {{key:Enter}} para terminar.

## Encaixe nelas e apare-as

Linhas de construção e semirretas aceitam os snaps Mais próximo, Perpendicular e Interseção. Elas não têm extremidades nem meio, então Extremidade e Ponto médio não encontram nada nelas.

Elas cortam e são cortadas como outras linhas em {{cmd:TRIM}} e {{cmd:BREAK}}:

- Apare uma extremidade de uma linha de construção e ela vira uma semirreta começando no corte.
- Apare a parte distante de uma semirreta e ela vira uma linha comum.
- Quebre uma linha de construção em um ponto e você obtém duas semirretas.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} e {{cmd:STRETCH}} funcionam com elas também. Uma seleção por janela nunca as pega, porque nenhuma janela comporta uma linha sem fim inteira; uma janela de cruzamento ou um clique, sim.

:::note
Um DWG (todas as versões) e um DXF 2000 as mantêm como linhas de construção. O DXF R12 não tem esse tipo, então lá elas viram linhas atravessando o desenho, e o salvamento informa isso. Uma plotagem ou um PDF as desenha apenas na área que imprime.
:::
