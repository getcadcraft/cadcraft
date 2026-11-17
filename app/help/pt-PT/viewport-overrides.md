---
title: Substituições de classes na viewport
summary: Numa folha, ocultar uma classe ou dar-lhe outra cor, espessura de linha ou preenchimento numa só viewport; o modelo e as outras viewports mantêm-se como estão.
keywords: viewport, substituição de classe, substituição de viewport, ocultar classe na viewport, folha, layout, VPLAYER, imprimir, Vectorworks
from: c1a2b51f
---

Uma folha mostra muitas vezes o mesmo modelo mais do que uma vez: uma planta com o mobiliário e uma planta sem ele, ou um plano de iluminação em que só as luminárias estão coloridas. Uma substituição de classe numa viewport altera o modo como uma [classe](topic:classes) é mostrada **apenas nessa viewport**.

1. Abra a folha e selecione uma viewport.
2. Abra o painel Classes (`CLASSES`) e escolha a classe.
3. Em {{ui:Esta viewport}}, marque {{ui:Ocultar nesta viewport}}, ou defina {{ui:Cor aqui}}, {{ui:Espessura de linha aqui}} ou {{ui:Preenchimento aqui}}.

A lista abaixo mostra cada classe que esta viewport altera. {{ui:Limpar as substituições desta viewport}} retira todas. Cada alteração é um passo de anulação.

## O que uma substituição altera

- **Ocultar** oculta a classe e todas as classes que lhe estão subordinadas nesta viewport.
- **Cor, espessura de linha e preenchimento** alteram os objetos da classe cujo valor não está definido no próprio objeto, isto é, objetos que o recebem pela classe ou pela camada. Um objeto com cor própria mantém-na, tal como acontece com uma substituição de camada da viewport.

As substituições aparecem no ecrã e nas impressões e nos PDF, incluindo um conjunto de folhas publicado em PDF. Funcionam em conjunto com as camadas congeladas da viewport e com as suas substituições de camadas.

As substituições são guardadas com o desenho em DWG e DXF (com a lista de classes, no bloco `CADCRAFT_CLASSES`) e voltam a aplicar-se à mesma viewport quando o ficheiro é aberto no CadCraft.
