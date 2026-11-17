---
title: Linhas de construção e semirretas
summary: "Desenhe linhas que se prolongam sem fim (XLINE) ou a partir de um ponto para um lado (RAY) para alinhar objetos, e apare-as até se tornarem linhas normais."
keywords: xline, ray, linha de construção, linhas de construção, linha infinita, linha-guia, linha de referência, bissetriz, linha de offset, linhas de layout, xl
from: b6c398bc
---

## O que vai aprender

Como desenhar linhas de construção para alinhar objetos enquanto desenha: por dois pontos, na horizontal ou na vertical, num ângulo, a meio caminho entre duas direções, ou a uma distância definida de uma linha. E como aparar essas linhas até se tornarem linhas normais, quando já cumpriram a sua função.

## Dois tipos

- Uma **linha de construção** ({{cmd:XLINE}}) prolonga-se sem fim para os dois lados.
- Uma **semirreta** ({{cmd:RAY}}) começa num ponto e prolonga-se sem fim para um lado.

Ambas são desenhadas por toda a área de desenho, seja qual for o zoom, no ecrã dividido e nas viewports de uma folha. A {{ui:Extensão}} as deixa de fora, para que o zoom ao desenho continue a ajustar-se ao que desenhou.

## Desenhar linhas de construção

1. Clique em {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Linha de construção}}, ou escreva `XL` e prima {{key:Enter}}.
2. Clique num ponto. Cada clique a seguir acrescenta uma linha de construção que passa pelo primeiro ponto e pelo que clicar.
3. Prima {{key:Enter}} para terminar.

Em vez do primeiro ponto, pode escrever uma opção:

| Opção | O que faz |
|---|---|
| `H` (Hor) | Linhas na horizontal, uma por cada ponto que clicar. |
| `V` (Ver) | Linhas na vertical, uma por cada ponto. |
| `A` (Ang) | Linhas com o ângulo que escrever (em graus, no sentido contrário ao dos ponteiros do relógio a partir do eixo X), por cada ponto. `R` (Referência) mede o ângulo a partir de uma linha que escolher. |
| `B` (Bissetriz) | Clique no canto e, a seguir, num ponto ao longo de um lado: cada ponto que clicar ao longo do outro lado acrescenta a linha a meio caminho entre os dois. |
| `O` (Offset) | Escreva uma distância, escolha uma linha e clique do lado: uma linha de construção a essa distância, paralela a ela. `T` (Através) coloca-a por um ponto que clicar em vez disso. A distância fica memorizada para a próxima vez. |

## Desenhar semirretas

1. Clique em {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Semirreta}}, ou escreva `RAY` e prima {{key:Enter}}.
2. Clique onde as semirretas começam.
3. Clique num ponto por onde cada semirreta deve passar. Prima {{key:Enter}} para terminar.

## Encaixar nelas e aparar

Linhas de construção e semirretas aceitam os snaps Mais próximo, Perpendicular e Interseção. Não têm extremos nem meio, por isso Extremidade e Ponto médio não encontram nada nelas.

Cortam e são cortadas como outras linhas em {{cmd:TRIM}} e {{cmd:BREAK}}:

- Aparar um extremo de uma linha de construção transforma-a numa semirreta que começa no corte.
- Aparar a parte distante de uma semirreta transforma-a numa linha normal.
- Partir uma linha de construção num ponto dá duas semirretas.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} e {{cmd:STRETCH}} funcionam também com elas. Uma seleção por janela nunca as escolhe, porque nenhuma janela consegue conter uma linha sem fim; uma janela de cruzamento ou um clique, sim.

:::note
Um DWG (todas as versões) e um DXF 2000 mantêm-nas como linhas de construção. O DXF R12 não tem essa função, por isso aí passam a ser linhas que atravessam o desenho, e a gravação avisa disso. Uma impressão ou um PDF desenha-as apenas na área que imprime.
:::
