---
title: Bloques dinámicos
summary: O que fai CadCraft cos bloques dinámicos dun DWG: conservan os seus nomes reais, mostran o estado no que se gardaron, cambian o estado de visibilidade, mostran os seus outros valores e seguen sendo dinámicos ao gardar.
keywords: bloque dinámico, bloques dinámicos, visibilidade, estado de visibilidade, voltear, estirar, busca, parámetros, personalizado, propiedades do bloque, bloques *u, dinámico
from: dea2ee7c
---

## Que funciona

Un DWG feito con bloques dinámicos ábrese e funcionan ata aquí:

- **Os seus nomes reais.** Un bloque dinámico aparece listado no panel {{ui:Bloques}} co seu propio nome («Receptacle», «Sink»), non como un bloque `*U` sen nome.
- **O estado no que se gardaron.** Cada referencia mostra exactamente o que mostrou o outro programa: o estado de visibilidade ao que estaba fixada, estirada ou volteada tal como se gardou.
- **Cambiar o estado de visibilidade.** Seleccione unha referencia (ou varias do mesmo bloque), abra {{ui:Propiedades}}, e na sección {{ui:Personalizado}} escolla outro estado da lista {{ui:Visibilidade}}. A referencia mostra ese estado de inmediato, e os seus atributos tamén: os que o estado oculta desaparecen, os que mostra aparecen cos seus valores. Unha referencia conserva todos os valores, así que non volve nada baleiro; {{ui:Propiedades}} lista os ocultos marcados «oculto». {{key:Mod+Z}} devolve o estado anterior nun paso.
- **Agarres.** Un bloque dinámico seleccionado mostra os seus propios agarres onde están os seus parámetros: un pequeno triángulo para o estado de visibilidade (prémao para a lista de estados), frechas nos extremos dunha distancia, unha dobre frecha para un volteo. Hoxe só actúa o agarre de visibilidade; os demais dino na barra de estado.
- **Os outros valores, só de lectura.** Baixo a lista de visibilidade, {{ui:Personalizado}} mostra tamén as distancias, os ángulos de aliñación, os estados de volteo e os puntos do bloque tal como os garda o debuxo.
- **Editar os estados de visibilidade.** Abra o bloque con {{cmd:BEDIT}}: o editor mostra un estado, co nome na barra enriba do debuxo (escolla outro alí). Escriba {{cmd:BVSTATE}} para cambiar, engadir (ocultándoo todo, mostrándoo todo ou conservando o que se ve), renomear ou eliminar un estado; {{cmd:BVHIDE}} oculta os obxectos seleccionados no estado que se ve; {{cmd:BVSHOW}} mostra os ocultos esvaecidos para que faga clic nos que quere recuperar. Garde o bloque: as referencias fixadas a un estado renomeado conservano baixo o novo nome, e as fixadas a un estado eliminado mostran o primeiro estado.
- **Seguen dinámicos.** Gardados como DWG na versión en que chegou o debuxo, os bloques seguen dinámicos, co estado que escolleu: o outro programa ábreos como os mesmos bloques dinámicos. Os estados de visibilidade que editou gárdanse tamén: os seus novos nomes, os estados que engadiu e o que mostra cada un.

## O que é só de lectura, ou aínda non está

| Non disponible aínda | En cambio, hoxe |
|---|---|
| Cambiar distancias, ángulos ou volteos (accións de estirar, mover, voltear) | Móstranse só de lectura en {{ui:Personalizado}}; edite no programa que fixo o bloque. |
| Busca, XY, xiro e parámetros polares | Aínda non se len: a referencia móstrase como se gardou. |
| Arrastrar os agarres de distancia, volteo e punto | Mostran onde están os parámetros; o agarre de visibilidade e a lista {{ui:Visibilidade}} en Propiedades cambian os estados. |
| Facer bloques dinámicos do tipo do outro programa (estirar, voltear, busca) | Os bloques que fai en CadCraft son bloques simples; {{cmd:BPARAMETER}} dino. Os seus propios parámetros e varios parámetros de visibilidade están no xestor de Parámetros (vexa «Os seus propios parámetros e estados de visibilidade» máis abaixo). |
| Engadir ou borrar obxectos dun bloque con estados de visibilidade no editor de bloques | O bloque gárdase entón como bloque simple (o editor indícao ao pechar). |
| Mantelos dinámicos noutra versión de DWG ou en DXF | Gárdanse como bloques simples que mostran o estado que escolleu, e o gardado indícao. |

:::note
Mover ou cambiar obxectos en {{cmd:BEDIT}} mantén dinámico un bloque con estados de visibilidade. Un bloque sen estados, ou aquel ao que se lle engadiron ou borraron obxectos no editor, convértese nun bloque simple.
:::

## Os seus propios parámetros e estados de visibilidade

Un bloque que fai en CadCraft pode levar os seus propios parámetros e **varios** parámetros de visibilidade, cada un cos seus estados. Escriba {{cmd:BPARAMS}} (ou `BPM`) para abrir o **Xestor de parámetros** do bloque que está editando en {{cmd:BEDIT}}, do bloque da referencia seleccionada, ou do bloque que nomee.

- **Parámetros**: un nome, un tipo (número, lonxitude, ángulo, cantidade, sí/non) e un valor ou unha fórmula sobre outros parámetros (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Resultado}} mostra o resultado. Unha fórmula que non funciona, ou un valor que non encaixa no seu tipo (unha cantidade de 1,5), é rexeitada e o xestor indica o motivo; nada máis cambia.
- **Parámetros de visibilidade**: {{ui:Engadir parámetro de visibilidade}} crea un con un primeiro estado. Cada estado pode renomearse, retirarse (o último queda) ou recibir un número «mostra cando». Unha fórmula escolle o estado a partir dos parámetros (o estado cuxo número coincide, se non, o estado nese lugar da lista); sen fórmula, cada referencia escolle o seu.
- **Colocar obxectos nun estado**: no editor de bloques seleccione os obxectos, escriba {{cmd:BPARAMS}} e prema {{ui:Colocar aquí os obxectos seleccionados}} no estado. Os obxectos que ningún parámetro de visibilidade lista móstranse sempre.
- **Esta referencia**: iniciado sobre unha referencia seleccionada, o xestor mostra tamén os valores e estados propios desa referencia.

Fóra do editor de bloques cada cambio é un paso de desfacer. No editor de bloques os cambios son do editor: {{ui:Gardar bloque}} consérvaos. `-BPARAMS` pregunta o mesmo na liña de comandos.

**No ficheiro.** DWG e DXF conservan os parámetros, que obxectos están en cada estado e os valores propios de cada referencia, nos rexistros propios de CadCraft; ao abrir de novo o ficheiro en CadCraft, todo volve. Outro programa ve cada referencia como o bloque con todos os seus obxectos, xa que un DWG garda como máximo un parámetro de visibilidade por bloque do seu propio tipo. Unha referencia que outro programa moveu, ou un bloque cuxos obxectos cambiou, volve sen as partes que xa non casan (non se adiviña nada).
