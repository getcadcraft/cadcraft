---
title: Alterar o tamanho do texto das cotas
summary: Torne o texto das cotas maior ou menor, para as novas cotas e para as que já estão no desenho.
keywords: tamanho do texto de cota, altura do texto, dimtxt, dimscale, texto de cota demasiado pequeno, texto de cota demasiado grande, texto de cota maior, escala de anotação
from: 30e40633
---

## Para as cotas que vai criar a seguir

1. Prima {{key:Esc}} para que nada fique selecionado: o painel direito mostra {{ui:Definições atuais}}.
2. Desloque o painel até {{ui:Novas cotas}}. Escreva a altura que quer no papel em {{ui:Altura do texto}} (por exemplo `2.5` para 2,5 mm, ou `3/32"`) e prima {{key:Enter}}.
3. Defina {{ui:Escala global}} para a escala de impressão (`50` para 1:50, `48` para 1/4" = 1'-0"): cada tamanho é multiplicado por ela.

Na linha de comandos, {{cmd:DIMTXT}} define a altura e {{cmd:DIMSCALE}} a escala global.

## Para cotas que já existem no desenho

1. Selecione as cotas (uma, ou várias: escolha {{ui:Cota}} na lista no topo de Propriedades).
2. Escreva a nova {{ui:Altura do texto}} (na secção {{ui:Texto}}), ou uma nova {{ui:Escala global}} (na secção {{ui:Ajuste}}, mais abaixo), e prima {{key:Enter}}.

Redesenham-se de imediato, num só passo de anulação. Uma cota de um ficheiro de outro programa é redesenhada no estilo do CadCraft assim que a altera.

:::tip
Texto que está certo no ecrã mas minúsculo na folha impressa costuma significar que a escala global está em 1: defina-a para a escala da folha.
:::

Ver [Definir tamanhos, casas decimais e escala das cotas](topic:dimension-settings) para todas as definições.
