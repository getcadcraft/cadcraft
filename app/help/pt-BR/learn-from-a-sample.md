---
title: Aprenda com um desenho de exemplo
summary: Abra a casa de exemplo ou o as built de exemplo do CadCraft e percorra as folhas, a legenda, as cotas e as camadas.
keywords: exemplo, exemplos, desenho de exemplo, aprender, tutorial, passo a passo, legenda, folhas, as built, conjunto arquitetônico, abrir um exemplo
from: aa1f960a
---

## O que você vai aprender

Como um conjunto pronto é montado: espaço modelo, folhas com viewports em escala, uma legenda com atributos, cotas em pés e polegadas e em milímetros, camadas. Os exemplos são do próprio CadCraft e livres para qualquer uso (CC0).

## Abrir um exemplo

1. No painel da esquerda, em {{ui:Desenho}}, clique em {{ui:Abrir um exemplo}} (ou digite {{cmd:SAMPLES}}; nos estilos com faixa de opções ele fica no menu {{ui:Arquivo}}).
2. Clique em {{ui:Abrir}} ao lado de {{ui:Casa de exemplo}}. Ela abre em uma guia própria, então o seu trabalho continua aberto.

## Percorrer o modelo

1. Clique em {{ui:Extensão}} (ou digite `ZOOM` e depois `E`): a planta, a elevação frontal, um corte e um detalhe de parede.
2. Em {{ui:Camadas}}, clique no olho ao lado de `A-ANNO-DIMS` para ocultar as cotas e clique de novo para mostrá-las.
3. Clique em uma porta: Propriedades mostra uma referência de bloco de `DOOR-32`. Portas e janelas são blocos, colocados girados e espelhados.

## As folhas

1. Clique em {{ui:A-101 FLOOR PLAN}} sob o desenho: uma folha ARCH D com um viewport em 1/4" = 1'-0".
2. Clique duas vezes dentro do viewport para trabalhar no modelo através dele; clique duas vezes fora para voltar.
3. {{ui:A-501 DETAILS}} mostra o detalhe de parede em 1 1/2" = 1'-0": o mesmo modelo, outra escala.

## A legenda

1. Em qualquer folha, clique duas vezes na legenda: {{ui:Editar atributos}} lista PROJECT, TITLE, SCALE, DATE, DRAWN e SHEET.
2. Troque DRAWN pelas suas iniciais e clique em {{ui:OK}}.
3. Para alterar a própria legenda em todas as folhas, selecione-a e escolha {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}}. Veja [Atributos](topic:attributes).

## O as built

Abra o {{ui:As built de exemplo}} da mesma forma. Os pontos cinza em `SCAN-SLICE` são uma fatia de uma varredura; as paredes em `AB-WALL` foram traçadas sobre eles. A parede leste está 35 mm fora de esquadro: as cotas mostram isso duas vezes, em milímetros (`AB-DIMS-MM`) e em pés e polegadas (`AB-DIMS-FTIN`, os mesmos comprimentos por meio de uma escala de medição). As nuvens vermelhas em `REV-1` marcam o que o levantamento encontrou.

## Em seguida

- [Alterar o tamanho do texto da cota](topic:change-dimension-text-size)
- [Plotar em PDF](topic:plot-pdf): plote {{ui:A-101 FLOOR PLAN}}.
