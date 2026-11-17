---
title: Substituições de classe em viewport
summary: Em uma folha, oculte uma classe ou dê a ela outra cor, espessura de linha ou preenchimento em uma só viewport; o modelo e as outras viewports continuam como estão.
keywords: viewport, substituição de classe, substituição de viewport, ocultar classe na viewport, folha, layout, VPLAYER, plotagem, Vectorworks
from: c1a2b51f
---

Uma folha costuma mostrar o mesmo modelo mais de uma vez: uma planta com os móveis e uma planta sem eles, ou uma planta de iluminação em que só as luminárias estão coloridas. Uma substituição de classe em viewport muda como uma [classe](topic:classes) aparece **somente nessa viewport**.

1. Abra a folha e selecione uma viewport.
2. Abra o painel de classes (`CLASSES`) e escolha a classe.
3. Em {{ui:Esta viewport}}, marque {{ui:Ocultar neste viewport}}, ou defina {{ui:Cor aqui}}, {{ui:Espessura de linha aqui}} ou {{ui:Preenchimento aqui}}.

A lista abaixo mostra cada classe que esta viewport altera. {{ui:Limpar as substituições deste viewport}} remove todas. Cada mudança é uma etapa de desfazer.

## O que a substituição altera

- **Ocultar** oculta a classe e todas as classes abaixo dela nesta viewport.
- **Cor, espessura de linha e preenchimento** alteram os objetos da classe cujo valor não está definido no próprio objeto, ou seja, objetos que o recebem pela classe ou pela camada. Um objeto com cor própria mantém a cor, como acontece com uma substituição de camada da viewport.

As substituições aparecem na tela e nas plotagens e PDFs, inclusive em um conjunto de folhas publicado em PDF. Elas funcionam em conjunto com as camadas congeladas e as substituições de camada da viewport.

As substituições são salvas com o desenho em DWG e DXF (com a lista de classes, no bloco `CADCRAFT_CLASSES`) e voltam na mesma viewport quando o arquivo é aberto no CadCraft.
