---
title: Tubulação: válvulas e símbolos P&ID
summary: Coloque válvulas, filtros, flanges e uniões em trechos de tubo, e posicione um conjunto de símbolos no estilo P&ID por conta própria.
keywords: válvula, gaveta, globo, esfera, retenção, borboleta, macho, válvula de controle, filtro, flange, união, p&id, esquemático, símbolo, bomba, válvula de alívio, instrumento, balão
from: d3ad5259
---

## Válvulas nos trechos

Digite {{cmd:VALVE}} e clique em um trecho de tubo; a válvula vai onde você clicar, dimensionada para o trecho (em um trecho de linha dupla, grande o bastante para aparecer além do tubo). {{ui:Tipo}} escolhe gaveta, globo, esfera, retenção, borboleta, macho ou válvula de controle, um filtro em Y, uma junta com flange ou uma união. {{ui:Remover}} retira a mais próxima. A linha do trecho é interrompida sob cada válvula, e cada válvula é contada na tabela por tipo e tamanho.

## Símbolos avulsos

{{cmd:PIDSYM}} posiciona símbolos esquemáticos para um diagrama de processo e instrumentação ou um diagrama de prumadas: as válvulas acima, uma válvula de três vias, uma válvula de alívio, uma redução, um tampão, uma bomba centrífuga, balões de instrumento (montados em campo, ou montados em painel com a linha passando por dentro) com sua tag — letras sobre o número, como em `PI 101` — e uma seta de fluxo. {{ui:Ângulo}} gira os próximos símbolos. O tamanho deles é definido em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Tubulação}}.

As formas seguem as convenções comuns desses diagramas (ANSI/ISA-5.1 para balões de instrumento, ISO 10628-2 para válvulas e equipamentos); os desenhos são próprios do CadCraft.
