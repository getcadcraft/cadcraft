---
title: Alterar o tamanho do texto de cota
summary: Deixe o texto das cotas maior ou menor, para as novas cotas e para as que já estão no desenho.
keywords: tamanho do texto de cota, altura do texto, dimtxt, dimscale, texto de cota muito pequeno, texto de cota muito grande, texto de cota maior, escala de anotação
from: 30e40633
---

## Para as cotas que você criar a seguir

1. Pressione {{key:Esc}} para que nada esteja selecionado: o painel direito mostra {{ui:Configurações atuais}}.
2. Role o painel até {{ui:Novas cotas}}. Digite a altura que você quer no papel em {{ui:Altura do texto}} (por exemplo `2.5` para 2,5 mm, ou `3/32"`) e pressione {{key:Enter}}.
3. Defina {{ui:Escala geral}} para a escala de plotagem (`50` para 1:50, `48` para 1/4" = 1'-0"): cada tamanho é multiplicado por ela.

Na linha de comando, {{cmd:DIMTXT}} define a altura e {{cmd:DIMSCALE}} a escala geral.

## Para as cotas que já estão no desenho

1. Selecione as cotas (uma, ou várias: escolha {{ui:Cota}} na lista no topo de Propriedades).
2. Digite a nova {{ui:Altura do texto}} (na seção {{ui:Texto}}), ou uma nova {{ui:Escala geral}} (na seção {{ui:Ajuste}}, mais abaixo), e pressione {{key:Enter}}.

Elas são redesenhadas de imediato, em um único passo de desfazer. Uma cota de um arquivo de outro programa é redesenhada no estilo do CadCraft assim que você a altera.

:::tip
Um texto que está correto na tela, mas minúsculo na folha plotada, geralmente significa que a escala geral está em 1: defina-a para a escala da folha.
:::

Veja [Definir tamanhos, casas decimais e escala de cotas](topic:dimension-settings) para todas as configurações.
