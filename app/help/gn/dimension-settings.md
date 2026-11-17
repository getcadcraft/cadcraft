---
title: Configurar tamaños de cota, decimales y escala
summary: Elegí altura de texto, tamaño de flecha, decimales y escala general para cotas nuevas, cambiá las ya hechas, ha entendé mba'éicha funciona estilo de cota CadCraft-pe.
keywords: estilo de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala general, decimales, tamaño de flecha, escala de anotación, dimtextunit, unidades en el texto, mm, cm, m, km, milímetros, metros, dimlfac, dimpost
from: 8ec82a07
---

## Mba'e ekuaáta

Cota texto ha flecha mboyve tuichaiterei, mba'éicha ojeconfigura plano 1:50 térã 1:100 ojeimprimíva, ha cota ya ojapo ojecambia.

## Mba'éicha cota tamaño ojeguata

Cota peteĩ-peteĩ oguereko ipropio tamaño: texto altura, flecha tamaño, decimales, texto ratapykue espacio, extensión línea cota línea-gui mboyve oho ha objeto-gui mboyve oñepyrũ. Predeterminado ISO estilo-pe ojepytyvõ:

| Configuración | Predeterminado | Comando |
|---|---|---|
| Altura de texto | 2.5 | {{cmd:DIMTXT}} |
| Tamaño de flecha | 2.5 | {{cmd:DIMASZ}} |
| Decimales | 2 (ceros del final ojeʼa) | {{cmd:DIMDEC}} |
| Espacio alrededor del texto | 0.625 | {{cmd:DIMGAP}} |
| Extensión más allá de la línea de cota | 1.25 | {{cmd:DIMEXE}} |
| Desplazamiento desde el objeto | 0.625 | {{cmd:DIMEXO}} |
| Escala general | 1 | {{cmd:DIMSCALE}} |

Opa tamaño ojemultiplica **escala general** rupi. Tamaño papel-pe oikoháicha ojeconfigura (2.5 mm texto), ha escala general plot escala-pe (50, 1:50-pe). Texto upéi 2.5 × 50 = 125 unidades del plano altura, ha 2.5 mm-pe ojeimprimi.

:::note
Estilo de cota nombrado {{cmd:DIMSTYLE}} rupi ojeporta: ver seccion ambue. Cota peteĩ-peteĩ ipropio configuración guardá, upévare cota peteĩ **Propiedades** rupi ojecambia ikatu.
:::

## Tamaño cotas pyahu-pe ojeconfigura

Ambue vía ko'ãva cotas pyahu-pe ojeguata ojeprovoca ha'e.

### Configuración actual panel-pe

1. {{key:Esc}} apretá, ndaipóri ojeselecciona. {{ui:Modelo}} pestaña-pe pane derecho {{ui:Configuración actual}} ojehechauka.
2. Pane rehe {{ui:Cotas nuevas}}-pe aguerohory, capa, color, unidades ha {{ui:Capa 0}} fila ryepýpe (tuichaiterei pantalla-pe kuatiaty ndojehechaiva). {{ui:Escala general}}-pe hacé clic, `50` escribí ha {{key:Enter}} apretá.
3. {{ui:Altura de texto}}, {{ui:Tamaño de flecha}} ha {{ui:Decimales}} avei ojeconfigura ikatu.

Estado barra mbovy valor ojehechauka, por ejemplo "Escala general para cotas nuevas: 50".

### Línea de comandos-pe

1. `DIMSCALE` escribí ha {{key:Enter}} apretá.
2. `Enter new value for DIMSCALE <1>` indicación-pe `50` escribí ha {{key:Enter}} apretá.

Historial ojehechauka "DIMSCALE = 50. Cotas nuevas ojeporta; cota ojeselecciona hag̃ua ojecambia." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} ha {{cmd:DIMEXO}} avei upéicha ojeporta. Indicación-pe {{key:Enter}} apretá, valor actual oiko.

### Pies ha pulgadas cotas-pe

Cota pyahu ojeporta plano longitud formato: {{ui:Formato de longitud}} ojeconfigura {{ui:Configuración actual}}-pe térã {{cmd:UNITS}} rupi (ver [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), ha próxima cota `12'-6 1/2"` ojehechauka. {{cmd:DIMLUNIT}} cota formato-pe nomás ojeconfigura (2 decimal, 3 ingeniería, 4 arquitectónico, 5 fracción). Cota ojapo rire ojeselecciona ha {{ui:Propiedades}}-pe {{ui:Formato}} ojeporta; fracción formato-pe, {{ui:Fracción}} cuadro dos potencia (4 = 1/16).

## Cotas mm, cm, m térã km-pe

Cota plano unidades-pe ojemedi. Milímetro, centímetro, metro térã kilómetro-pe ojehechauka ikatu, número rire unidad: 1250 mm muro `1250 mm`, `125 cm`, `1.25 m` térã `0.00125 km` ojehechauka.

1. Plano {{ui:Unidades}} {{ui:Configuración actual}}-pe primero ojeconfigura (ver [Unidades, tamaños de papel y escalas](topic:units-papers-scales#drawing-units)), CadCraft plano unidad ojeikuaa hag̃ua. Unidad ndaguerekói plano milímetros-pe ojelee, ha {{cmd:DIMTEXTUNIT}} ojehechauka.
2. Cotas nuevas-pe: {{key:Esc}} apretá, {{ui:Cotas nuevas}} rembipota {{ui:Unidades en el texto}} elegí: {{ui:Unidades del plano}}, `mm`, `cm`, `m` térã `km`.
3. Cota ya ojapo-pe: ojeselecciona, {{ui:Propiedades}} › {{ui:Unidades principales}}-pe {{ui:Unidades en el texto}} elegí.

{{cmd:DIMTEXTUNIT}} (`DTU`) escribí ha `D`, `MM`, `CM`, `M` térã `KM` ojeresponde: cota ojeselecciona jave ojecambia (peteĩ paso de deshacer), ndoselecciona jave cotas nuevas-pe ojeconfigura.

{{ui:Decimales}} ({{cmd:DIMDEC}}) decimal lugar ojehechauka cuánto: metro ha 3 decimal, 1234 mm `1.234 m` ojehechauka. Texto número decimal-pe ojeescribi. Hoja-pe cota papel unidad-pe ojemedi (milímetro térã pulgada).

Ojeguardáva DWG térã DXF cota medida escala (DIMLFAC) ha sufijo (DIMPOST, ` m`) ojeguereko, ambue programa-pe texto mismo ojehechauka. Plano {{ui:Unidades}} ojecambia jave, mm, cm, m térã km-pe cota ojeajusta, longitud ojehechauka ojeguerekóta. {{ui:Ajustado a mano (escala o sufijo)}} oñe'ẽ cota {{ui:Escala de medida}} térã sufijo ambue rupive ojeconfigura; unidad ojeselecciona ojemoambue.

## Ya ojapo cota ojecambia

1. Cota peteĩ clic. Pane derecho título {{ui:Cota}} ojehechauka.
2. Configuración sección-pe; pane rehe ojepyta ojeguata:
   - {{ui:General}}: {{ui:Estilo de cota}}
   - {{ui:Geometría}}: {{ui:Tipo}} ha {{ui:Medición}} (ndojecambiái)
   - {{ui:Texto}}: {{ui:Texto forzado}} ha {{ui:Altura del texto}}
   - {{ui:Líneas y flechas}}: {{ui:Tamaño de flecha}}
   - {{ui:Ajuste}}: {{ui:Escala general}}
   - {{ui:Unidades principales}}: {{ui:Decimales}}
3. Valor pyahu escribí ha {{key:Enter}} apretá.

Cota enseguida ojedibuja. Ángulo cotas-pe, {{ui:Decimales (°)}} ángulo decimal ojeconfigura.

:::note
Cota peteĩ mboyve ojeselecciona jave, panel compartido fila ojehechauka, valor ojediferénte jave {{ui:Varía}} ojehechauka. Escribí valor opa ojeselecciona cota ojecambia peteĩ paso-pe, upévare peteĩ {{key:Mod+Z}} opa ojepe'a.
:::

## Cotas opened plano-gui

DWG térã DXF ojehai cota exactamente ojedibuja mboyve ambue programa ojedibujáva ojehechauka. Panel ojehechauka: "Ojehechauka programa ojapo ojedibuja. Ojecambia jave CadCraft ipropio estilo-pe ojedibuja jey." Valor ojecambia, grip ojeguata térã cota ojeguata jave, CadCraft ipropio flecha ha fuente-pe ojedibuja jey, archivo-gui ojelee tamaño-kuéra ojeporta.

Cota ojeporãva ndaipóri editable-pe, ojehechauka "Drawn from" ha bloque nombre, ha "Acerca de este archivo" cuadro ohechaukáva.

## Ojekaru mba'e

- **DIMSCALE ojecambia jave pantalla-pe ndojecambiái.** Configuración cota pyahu-pe. Cota ojeselecciona ha pane-pe {{ui:Escala general}} ojecambia.
- **Decimal menos ojehechauka.** Ceros del final ojepe'a: 2 decimal `1250` ha `1250.5` ojehechauka, `1250.00` ndaha'éi.
- **Texto papel-pe korrekto, modelo plot-pe ojehechauka.** Escala general imprime escala-pe mbohapy ha'e. Hoja Ajuste papel-pe escala raro; comúnmente ojeporta escala diálogo-pe elegí.
- **mm térã m texto-pe.** {{ui:Unidades en el texto}} elegí (ver [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Número rire ambue palabra, texto forzado-pe `<> TYP.` ojeescribi.

## Estilo de cota nombrado

`DIMSTYLE` (`D`) escribí {{ui:Administrador de estilos de cota}} ojeporta. Plano estilo-kuéra ojehechauka, cuántas cota ojeporta cada peteĩ, ha mboyve actual. **Standard** siempre oiko.

- {{ui:Establecer actual}}: cotas pyahu upe estilo configuración ojeporta ha nombre.
- {{ui:Nuevo…}}: estilo pyahu, elegí peteĩ-gui copia.
- {{ui:Modificar…}}: {{ui:Propiedades}} cota sección-pe ojeporta campos (líneas y flechas, texto, ajuste, unidades, unidades alternativas, tolerancias). {{ui:Aceptar}} apretá, estilo ojecambia **ha opa estilo ojeporta cota ojecambia**. Cota peteĩ solo ojecambia ndoikói ojecambiáva estilo rupi.
- {{ui:Renombrar…}} ha {{ui:Eliminar}}: Standard ndojecambiái ni ojeborra; actual estilo ni cota ojeporta estilo ndojeborra.
- {{ui:Comparar…}}: dos estilo apytépe ojediferénte.
- {{ui:Aplicar a lo seleccionado}}: cota ojeselecciona; estilo configuración ha nombre ojeporta.

`-DIMSTYLE` línea de comandos-pe mismo: `Restore`, `Save` (actual configuración, {{cmd:DIMTXT}} ha ambue escribi ojeporta, nombre rehe), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Estilo-kuéra DWG térã DXF-pe ojeguardá (cota estilo tabla) ha archivo ojeabri jave ojeleé. Actual estilo ndojeguardái: plano Standard actual-pe ojepyrũ. Standard ipropio configuración guardá ambue estilo actual oiko jave.

## Cota texto ha extensión línea ojecambia

{{cmd:DIMEDIT}} (`DED`) cota ojeselecciona ojeporta: **Inicio** texto ojeguata estilo rupi, **Nuevo** ambue texto escribí (`<>` medida ha'e), **Rotar** texto ojerotá, **Oblicuo** extensión línea lineal ha alineada ángulo escribi-pe (ningún-pe {{key:Enter}} apretá). {{cmd:DIMTEDIT}} texto **Izquierda**, **Derecha** térã **Centro** cota línea-pe ojeguata, térã ojerotá (**Ángulo**), térã **Inicio**-pe ojeguata. Texto cota línea-pe oiko; ndaikatúi ojeguata lugar libre-pe.
