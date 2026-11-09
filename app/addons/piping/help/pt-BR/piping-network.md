---
title: Tubulação: vazão e pressão em uma alimentação de água
summary: O PIPENET segue os tubos de alimentação desenhados a partir da fonte, soma as unidades de aparelho que você informa em cada extremidade livre e encontra a vazão, a velocidade e a pressão perdida até cada aparelho.
keywords: alimentação, água, unidades de aparelho, demanda, vazão, velocidade, perda de pressão, hazen-williams, PIPENET, PNET, altura estática, quente, fria
from: ece38a8e
---

Digite {{cmd:PIPENET}} (`PNET`) e clique na extremidade de um trecho por onde entra a alimentação.

Para cada extremidade livre, ele pergunta o que há ali: um tipo de aparelho (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) ou um número de unidades de aparelho (0 para nada). As respostas ficam guardadas para aquele ponto; {{ui:Redefinir}} as esquece. {{ui:Pressão}} informa a pressão da alimentação na fonte e a pressão de que um aparelho precisa, em kPa.

Ele mostra, para cada aparelho, as unidades de aparelho que ele transporta, a pressão perdida desde a fonte (atrito por Hazen–Williams, conexões e a subida ou descida do tubo: um tubo que desce ao longo do trajeto em que é desenhado ganha pressão quando é alimentado por sua extremidade baixa) e o que resta da pressão da alimentação. Os trechos pequenos demais para a vazão deles (rápidos) são listados.

**Demanda** usa uma curva padrão de unidades de aparelho para vazão, que é um exemplo identificado como tal. Digite a curva do código em vigor nas configurações do motor antes de confiar nas vazões. As perdas nas conexões são valores padrão arredondados. Malhas são ignoradas. Confira os resultados com seu engenheiro. {{ui:Exportar}} › Rede de alimentação grava cada trecho em CSV.
