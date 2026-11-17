---
title: Ojeporu CadCraft asistente de IA rupi
summary: Omoĩ nde asistente de IA térã script omba'apo CadCraft-pe: mba'épa ikatu ojapo, mba'éichapa oñeconecta cualquier cliente MCP, ha mba'éichapa nde reñangareko (permisos, deshacer, registro de actividad, Desconectar).
keywords: IA, asistente, agente, mcp, protocolo de contexto del modelo, script, automatización, línea de comandos, cli, json, token, permisos, desconectar, actividad, carpetas, rutas, svg, lote
from: 06ba4ef6
---

## Mba'e ndeaprendeha

Mba'éichapa omoĩ asistente de IA (térã script nde ojapova'ekue) ohecha pe plano, ojapo comando CadCraft-pe, ojehecha ha oguardá, ha mba'épa ikatu ojeporu ha mba'épa ndaikatúi.

CadCraft ndoguereko **IA propia** ha ndomondoi mba'eve. Nde ome'ẽ asistente: mba'e programa oiko Model Context Protocol (MCP) ndive. CadCraft ome'ẽ herramienta añónte, ha nde ejeskoge mba'épa.

Oĩ mokõi tape:

- **Pe plano ejehepyhýva.** Asistente omba'apo ko ventana-pe, nde ndive, CadCraft Studio rupi nde computadora-pe. Kóva ha'e {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} hag̃ua.
- **Plano nde computadora-pe, app ndojeporúi.** CadCraft MCP server ha `cadcraft` línea de comandos ohecha ha oguardá archivo DWG ha DXF nde ejeporáva carpeta-pe. Ehecha "Archivo ojapo CadCraft ndojeporuivéva" ryepy.

## Ojapo ojeporu

1. Ejepyso {{ui:Settings}} (engranaje app barra-pe, térã {{key:Mod+,}}) ha ejeho {{ui:CadCraft}} pestaña-pe.
2. {{ui:Assistants}} rupi, ejeskoge **Omoĩ asistente de IA ha script ojeporu CadCraft**. Ndaipóri peve ojeporu nde ejapo peve.
3. Ejeskoge mba'épa ikatu ojapo. **Read** oĩ ojeskogeva'ekue ñepyrũme; ejeskoge ambue rire, ndojerure peve.

| Permiso | Mba'épa asistente ikatu ojapo |
|---|---|
| Read | Ehecha pe plano: ehai, ehecha ha ejuhu objeto-kuéra, ehecha selección, ehai pe vista ha ojapo fotografía, ehecha capa ha regla de dibujo rupi |
| Edit | Ojapo comando pe plano-pe ha ojambue selección. Peteĩteĩ jeporu peteĩ paso, nde ikatu deshacer |
| Save | Oguardá pe plano (desktop-pe, ijeporúpe; navegador-pe, descarga rupi) |
| Export | Plotear PDF-pe ha ojapo ambue archivo |

## Omoĩ archivo carpeta-kuéra ndejeporáva rupi

CadCraft Studio-pe asistente ikatu oabrí, oguardá ha plotear archivo nombre rupi, ndojeporúi archivo ventana. Ha'e ojapo ko'ã mba'e añónte, ha'e carpeta nde ejapova'ekue {{ui:Assistants}} › {{ui:Carpetas que puede usar}} rupi:

1. Ejeskoge {{ui:Agregar una carpeta…}} ha ejeskoge carpeta Studio-pe ijeporúva.
2. Asistente ikatu ehecha archivo ko carpeta-pe (`files_list`), oabrí peteĩ plano (`drawing_open`), oguardá upe DWG versión-pe térã DXF-pe, oplotea PDF térã SVG archivo-pe, omboguapy LISP archivo, ha ome'ẽ comando archivo oipotáva (`INSERT` `F`, `XATTACH`, punto archivo) térã ohecha mba'eichapa comando archivo oguardáta (`COUNT` CSV, `PUBLISH`).
3. {{ui:Quitar [R]}} oheja carpeta ojeguapyvéva. Ambue tape rupi ndoguerohoryi, ha archivo oĩvakue oñeñandu ha'e asistente ojerurevégui térã ha'e ojapova'ekue.

Oabrí oikotevẽ **Read**; plano oguardá oikotevẽ **Save**; ambue archivo oikotevẽ **Export**.

Herramienta-kuéra nde permiso ndejeskogevaʼekue rupi ndoĩ asistente-pe, ha asistente oipotáramo, CadCraft omboykeha ha oheja activity log-pe. Switch apagáramo, opa conexión oñemboty peteĩ jey. {{ui:Restablecer la configuración de CadCraft}} avei apaga.

## Ejoaju nde asistente

Asistente oconecta **CadCraft Studio** rupi nde computadora-pe: ojapo peteĩ server michĩ ko computadora rupive ojehu (dirección `127.0.0.1`), ha token ndive ojapytyva Studio ojapo peteĩteĩ jey ojepuru. Ejepyso Studio, ejeskoge {{ui:Conectar un asistente}} ha emboguapy dirección ha token.

- Nde asistente-pe, emoĩ MCP server HTTP tipo dirección ndive (oĩ kuaa `http://127.0.0.1:47615/mcp`) ha header `Authorization: Bearer <token>`. Studio ohechauka configuración emoĩtava.

{{ui:Token nuevo}} Studio-pe ojapo opa asistente oconecta token pyahu ndive. Ani emoñe'ẽ token: oimeraẽ ikatu ojeporu app nde ojapova'ekue, Studio oñemoĩmi peve.

:::note
Navegador pestaña ndojapói conexión asistente-pe: navegador app-kuéra-pe switch ndaiporúi mba'eve peve CadCraft Studio nde computadora-pe ndejeporúi.
:::

## Nde reñangareko

- **Peteĩteĩ mba'e ojapo peteĩ paso deshacer ndive**, asistente réra rupi ojehechaukáva, ohechakuaáramo "Assistant: LINE". Ejepyta {{key:Mod+Z}} ejapyrũ asistente ojapova'ekue opa rehe.
- **Ehecha mba'épa ojapo.** Iko'ẽ comando historial-pe oñeñandúva **[Assistant]** rembe'ýpe, ha plano oñemboheta asistente omba'apóramo.
- **Oñeha'ã nde rehe.** Nde ejapo rupi comando mbytépe, asistente ikatu ehecha ha'e ndajambueigui plano; ojepe'áramo emboguapy jey jepe'a.
- **Ehecha oconectáramo.** Peteĩ botón app barra-pe ohechauka asistente oconecta. Ejepyta ehechakuaa mba'épa ikatu ojapo, térã **Desconectar**.
- **Actividad.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Actividad}} ohechauka opa llamada: mboyve, mba'e herramienta, ojapo térã ndojapói, ha deshacer paso ojapova'ekue. {{ui:Guardar el registro}} oguardá peteĩ copia.

## Mba'épa asistente ikatu oipotá

| Herramienta | Permiso | Mba'épa ojapo |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Read | Plano sutĩ, unidades, capa, bloque, hoja; mba'épa pantalla-pe |
| `files_list`, `drawing_open` | Read | Studio: nde carpeta-kuéra archivo; peteĩ oabrí ko ventana-pe |
| `objects_list`, `object_get`, `selection_get` | Read | Objeto-kuéra geometría, longitud ha superficie ndive (térã tuichakue, tipo ha capa rupi); selección |
| `drawing_check` | Read | Regla-kuéra: capa ojeporúvape, capa 0 ndaipóri, color ByLayer, texto altura |
| `view_screenshot` | Read | Plano fotografía oñehechaukáva |
| `command_run` | Edit | Escribe línea de comandos-pe: `LINE 0,0 @100,0 @0,50 ` ohechakuaa nde escribíramo (espacio omopa'u peteĩ respuesta), térã lista peteĩteĩ respuesta ndive. Ikatu oheja comando abierto ha tesäi próxima llamada-pe |
| `script_run` | Edit | Script (`.scr`) térã LISP archivo, {{ui:APPLOAD}} oipuru ramo |
| `block_insert` | Edit | Omoĩ bloque atributo valor ndive peteĩ paso |
| `selection_set`, `undo` | Edit | Oiporavo objeto próxima comando-pe; ideshacer ijapovakuéra |
| `drawing_save` | Save | CadCraft ijeporu {{ui:Save}}, térã {{ui:Save as}} nde carpeta-pe |
| `drawing_plot` | Export | PDF térã SVG hoja térã modelo-pe, escala ndive térã ajuste (PDF subyacentes ko'ã rupi ndoplotéi) |

Asistente comando omba'apo mboyve, CadCraft oporandu comando línea-pe diálogo-pe ndaha'éi (ejemplo: oinsertá plano entero térã peteĩ bloque), asistente ikatu omoambue. Biblioteca ha Buscar nde rehe oĩ; asistente oñe'ẽ ndehe ehechakuaasevaʼerã.

## Omboguapy archivo nde ndajapóiva CadCraft

CadCraft MCP server (`cadcraft-mcp`) ha línea de comandos (`cadcraft`) ojapo CadCraft ijeporu drawing-kuéra Node.js-pe, ndaipóri ventana. Oikotevẽ Node.js 20 térã pyahu.

- **MCP server** omba'apo nde carpeta-kuéra-pe anive, ha nde permiso rupi: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. `--root` ndaipóri, ndaikatúi oabrí archivo; `--allow` ndaipóri, Read añónte. Ikatu avei oleer IFC modelo, takeoff ha PDF set-pe markup-kuéra.
- **Línea de comandos** nde script-kuérape: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Heta archivo peteĩ jey: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Añete `--json` programa oleer hag̃ua.

:::note
`npx @getcadcraft/mcp` ohecha paquete ndojejuhúi, paquete ndoñemoĩ jepi. getcadcraft.com-pe novedad omombe'úta.
:::

## Umi mba'e ndojapói

- **Asistente ndohechái CadCraft herramienta-kuéra:** ehecha switch ko ventana-pe ojapo jepi, ha ventana Studio-pe oĩ.
- **"needs the edit permission":** ejeskoge **Edit** {{ui:Assistants}} rupi, ha upéi emboguapy.
- **"outside the folders assistants may use":** emoĩ upe carpeta {{ui:Assistants}} › {{ui:Carpetas que puede usar}} rupi, térã eporandu asistente ojeporu archivo carpeta ejapova'ekue-pe.
- **"401" térã "token" error:** token ojemudáva (Studio oñemboguapy, térã {{ui:Token nuevo}}). Emoĩ token pyahu asistente configuración-pe.
- **Ijapo ndaiporãi:** {{key:Mod+Z}} epyta. Peteĩ jey oheja peteĩ paso asistente ojapova'ekue.

## Ehecha avei

- [Receta asistente de IA-kuérape](common:assistants-recipes): ejemplo oñemoĩva, peteĩteĩ rehe herramienta ojeporúva.
