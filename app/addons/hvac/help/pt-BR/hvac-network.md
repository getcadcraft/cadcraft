---
title: Climatização: pressão em toda a rede de dutos
summary: DUCTNET segue os dutos desenhados a partir do ventilador e encontra a perda de pressão até cada extremidade livre, o caminho crítico, o damper que cada outra extremidade precisa e a pressão do ventilador.
keywords: rede, pressão, caminho crítico, pressão do ventilador, damper, balanceamento, perda em conexões, DUCTNET, DNET, pressão estática, sistema
from: b6f568fe
---

{{cmd:DUCTSIZE}} dimensiona um trecho. {{cmd:DUCTNET}} (`DNET`) analisa todo o sistema desenhado.

1. Dê a cada seção a sua vazão ({{ui:Vazão}} do duto, em cfm ou L/s). A extremidade livre de um trecho assume a vazão da seção nessa extremidade.
2. Digite {{cmd:DUCTNET}} e clique na extremidade do trecho onde o ventilador ou a unidade de tratamento de ar se conecta. Extremidades que tocam outro trecho são unidas; as ramificações são encontradas onde um trecho termina sobre outro.
3. Ele imprime cada extremidade livre com a sua vazão e a pressão perdida no caminho desde o ventilador, o **caminho crítico** (a extremidade que mais perde), o **damper** que cada outra extremidade precisa para balancear e a **pressão do ventilador**: o caminho crítico mais a pressão das serpentinas e dos filtros que você digita com a opção {{ui:Equipamento}} (a partir dos dados dos fabricantes).

O atrito vem da mesma fórmula de Colebrook do dimensionamento. As conexões (curvas, a mudança onde o tamanho muda e derivações) usam uma lista curta de coeficientes padrão arredondados: eles são rotulados como padrões, não são um banco de dados de conexões, e o efeito chaminé é ignorado. Confira o resultado com seu engenheiro antes de confiar nele.

Seções pequenas demais para a sua vazão, rápidas demais ou achatadas demais são listadas por trecho. Laços são ignorados (o cálculo segue uma árvore) e isso é informado. {{ui:Método}} alterna a verificação de tamanho entre atrito constante e um limite de velocidade. {{ui:Exportar}} › Pressão da rede de dutos grava cada seção em CSV.
