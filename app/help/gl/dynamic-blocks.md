---
title: Bloques dinámicos
summary: Que fai CadCraft cos bloques dinámicos dun DWG: conservan os seus nomes verdadeiros, mostran o estado no que se gardaron, cambian o estado de visibilidade, mostran os seus outros valores e seguen sendo dinámicos ao gardar.
keywords: bloque dinámico, bloques dinámicos, visibilidade, estado de visibilidade, voltear, estirar, búsqueda, parámetros, personalizado, propiedades do bloque, *u blocks, dinámico
from: 26b6aa80
---

## Que funciona

Un DWG feito con bloques dinámicos ábrese con eles funcionando ata aquí:

- **Os seus nomes verdadeiros.** Un bloque dinámico aparece no panel {{ui:Bloques}} co seu propio nome («Receptacle», «Sink»), e non como un bloque `*U` sen nome.
- **O estado no que se gardaron.** Cada referencia mostra exactamente o que mostrou o outro programa: o estado de visibilidade no que estaba fixada, estirada ou volteada como se gardou.
- **Cambio do estado de visibilidade.** Seleccione unha referencia (ou varias do mesmo bloque), abra {{ui:Propiedades}}, e na sección {{ui:Personalizado}} escolla outro estado da lista {{ui:Visibilidade}}. A referencia mostra ese estado de inmediato, e tamén os seus atributos: os que o estado oculta desaparecen, os que mostra aparecen cos seus valores. Unha referencia conserva todos os valores, así que nada volve baleiro; {{ui:Propiedades}} enumera os ocultos marcados como «hidden». {{key:Mod+Z}} devolve o estado anterior nun paso.
- **Pinzas.** Un bloque dinámico seleccionado mostra as súas propias pinzas onde están os seus parámetros: un pequeno triángulo para o estado de visibilidade (prema para ver a lista de estados), frechas nos extremos dunha distancia, unha frecha dobre para un volteo. Hoxe só actúa a pinza de visibilidade; as outras indícano na barra de estado.
- **Os outros valores, só lectura.** Debaixo da lista de visibilidade, {{ui:Personalizado}} mostra tamén as distancias, os ángulos de aliñación, os estados de volteo e os puntos do bloque tal como os garda o debuxo.
- **Edición dos estados de visibilidade.** Abra o bloque con {{cmd:BEDIT}}: o editor mostra un estado, co nome na barra sobre o debuxo (escolla outro alí). Escriba {{cmd:BVSTATE}} para cambiar, engadir (ocultando todo, mostrando todo ou conservando o que se ve), renomear ou eliminar un estado; {{cmd:BVHIDE}} oculta os obxectos seleccionados no estado que se ve; {{cmd:BVSHOW}} mostra os ocultos esvaecidos para que faga clic nos que quere recuperar. Garde o bloque: as referencias fixadas nun estado renomeado consérvano co novo nome, e as fixadas nun estado eliminado mostran o primeiro estado.
- **Seguen dinámicos.** Gardados como DWG na versión na que chegou o debuxo, os bloques seguen sendo dinámicos, co estado que escolleu: o outro programa ábreos como os mesmos bloques dinámicos. Os estados de visibilidade que editou gárdanse tamén: os seus novos nomes, os estados que engadiu e o que mostra cada un.

## Que é só lectura ou aínda non está

| Aínda non está | Por agora, en vez disto |
|---|---|
| Cambiar distancias, ángulos ou volteos (accións de estirar, mover, voltear) | Móstranse como só lectura en {{ui:Personalizado}}; edítense no programa que fixo o bloque. |
| Parámetros de búsqueda, XY, rotación e polares | Aínda non se len: a referencia mostra como se gardou. |
| Arrastrar as pinzas de distancia, volteo e punto | Mostran onde están os parámetros; a pinza de visibilidade e a lista {{ui:Visibilidade}} en Propiedades cambian de estado. |
| Crear bloques dinámicos (engadir parámetros ou estados de visibilidade a un bloque que non os ten) | Os bloques que crea en CadCraft son bloques simples; {{cmd:BPARAMETER}} indícao. |
| Engadir ou eliminar obxectos dun bloque con estados de visibilidade no editor de bloques | O bloque gárdase entón como bloque simple (o editor indícao ao pechar). |
| Mantelos dinámicos noutra versión de DWG ou en DXF | Gárdanse como bloques simples que mostran o estado escollido, e o gardado indícao. |

:::note
Mover ou cambiar obxectos en {{cmd:BEDIT}} mantén dinámico un bloque con estados de visibilidade. Un bloque sen estados, ou no que se engadiron ou eliminaron obxectos no editor, convértese nun bloque simple.
:::
