---
title: Aprender com um desenho de exemplo
summary: Abra a casa de exemplo ou o as-built de exemplo do CadCraft e percorra as suas folhas, legenda, cotas e camadas.
keywords: exemplo, exemplos, desenho de exemplo, aprender, tutorial, passo a passo, legenda, folhas, as-built, conjunto de arquitetura, abrir um exemplo
from: aa1f960a
---

## O que vai aprender

Como se constrói um conjunto acabado: espaço modelo, folhas com viewports a uma escala, uma legenda com atributos, cotas em pés e polegadas e em milímetros, camadas. Os exemplos são do próprio CadCraft e de utilização livre para qualquer fim (CC0).

## Abrir um exemplo

1. No painel da esquerda, em {{ui:Desenho}}, clique em {{ui:Abrir um exemplo}} (ou escreva {{cmd:SAMPLES}}; nos estilos com friso está no menu {{ui:Ficheiro}}).
2. Clique em {{ui:Abrir}} junto a {{ui:Moradia de exemplo}}. Abre-se num separador próprio, pelo que o seu trabalho continua aberto.

## Percorrer o modelo

1. Clique em {{ui:Extensão}} (ou escreva `ZOOM` e depois `E`): a planta do piso, o alçado principal, um corte e um pormenor de parede.
2. Em {{ui:Camadas}}, clique no olho junto a `A-ANNO-DIMS` para ocultar as cotas, e outra vez para as mostrar.
3. Clique numa porta: as Propriedades mostram uma referência de bloco de `DOOR-32`. As portas e janelas são blocos, colocados rodados e espelhados.

## As folhas

1. Clique em {{ui:A-101 FLOOR PLAN}} por baixo do desenho: uma folha ARCH D com um viewport a 1/4" = 1'-0".
2. Faça duplo clique dentro do viewport para trabalhar no modelo através dele; faça duplo clique fora para voltar.
3. {{ui:A-501 DETAILS}} mostra o pormenor de parede a 1 1/2" = 1'-0": o mesmo modelo, outra escala.

## A legenda

1. Em qualquer folha, faça duplo clique na legenda: {{ui:Editar atributos}} lista PROJECT, TITLE, SCALE, DATE, DRAWN e SHEET.
2. Mude DRAWN para as suas iniciais e clique em {{ui:OK}}.
3. Para alterar a própria legenda em todas as folhas, selecione-a e escolha {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}}. Consulte [Atributos](topic:attributes).

## O as-built

Abra o {{ui:Levantamento as-built de exemplo}} da mesma forma. Os pontos cinzentos em `SCAN-SLICE` são uma fatia de uma digitalização; as paredes em `AB-WALL` foram decalcadas sobre eles. A parede nascente está 35 mm fora de esquadria: as cotas dizem-no duas vezes, em milímetros (`AB-DIMS-MM`) e em pés e polegadas (`AB-DIMS-FTIN`, os mesmos comprimentos através de uma escala de medição). As nuvens vermelhas em `REV-1` assinalam o que o levantamento encontrou.

## A seguir

- [Alterar o tamanho do texto das cotas](topic:change-dimension-text-size)
- [Imprimir para PDF](topic:plot-pdf): imprima {{ui:A-101 FLOOR PLAN}}.
