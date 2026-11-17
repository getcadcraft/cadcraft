---
title: Usar CadCraft con un asistente de IA
summary: Deje que su propio asistente de IA o su script trabajen con CadCraft: qué puede hacer, cómo conectar cualquier cliente MCP y cómo sigue usted al mando (permisos, deshacer, registro de actividad, Desconectar).
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, línea de comandos, cli, json, token, permisos, desconectar, actividad, carpetas, rutas, svg, lote
from: 06ba4ef6
---

## Lo que aprenderá

Cómo dejar que un asistente de IA (o un script que haya escrito usted) vea un dibujo, ejecute los comandos de CadCraft, trace a PDF y guarde, y decida qué puede tocar.

CadCraft **no tiene IA propia** y no envía nada a ningún sitio. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). CadCraft solo le ofrece herramientas, y usted elige cuáles.

Hay dos formas de conectarlo:

- **El dibujo que tiene abierto.** El asistente trabaja en esta ventana, junto a usted, a través de CadCraft Studio en su equipo. Para esto sirve {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Asistentes}}.
- **Dibujos en su equipo, sin abrir la aplicación.** El servidor MCP de CadCraft y la `cadcraft` de línea de comandos leen y escriben archivos DWG y DXF en las carpetas que indique. Vea «Trabajar con archivos sin abrir CadCraft» más abajo.

## Activarlo

1. Abra {{ui:Parámetros}} (el engranaje de la barra de aplicación, o {{key:Mod+,}}) y vaya a la pestaña {{ui:CadCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen CadCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer. **Lectura** viene marcada al principio; marque las demás solo cuando las necesite.

| Permiso | Lo que puede hacer el asistente |
|---|---|
| Lectura | Ver el dibujo: describirlo, listar y buscar objetos, ver la selección, describir la vista y tomar una imagen de ella, comprobarlo frente a las reglas de capas y de delineación |
| Edición | Ejecutar comandos en el dibujo y cambiar la selección. Cada acción es un paso que se puede deshacer |
| Guardar | Guardar el dibujo (en el escritorio, en su archivo; en el navegador, como descarga) |
| Exportar | Trazar a PDF y crear otros archivos |

## Dejar que use archivos en carpetas que usted elija

En CadCraft Studio un asistente puede abrir, guardar y trazar archivos por nombre en lugar de usar los cuadros de diálogo de archivos, pero solo dentro de las carpetas que añada en {{ui:Asistentes}} › {{ui:Carpetas que pueden usar}}:

1. Elija {{ui:Añadir una carpeta…}} y seleccione la carpeta en el propio cuadro de diálogo de Studio.
2. El asistente ya puede listar los archivos de esa carpeta (`files_list`), abrir un dibujo (`drawing_open`), guardarlo allí en una versión de DWG o como DXF, trazar a un archivo PDF o SVG, cargar un archivo LISP y dar a un comando el archivo que pide (`INSERT` `F`, `XATTACH`, un archivo de puntos), o indicar adónde va el archivo de un comando (el CSV de `COUNT`, `PUBLISH`).
3. {{ui:Quitar}} retira una carpeta de inmediato. Las rutas fuera de ellas se rechazan, y un archivo que ya existe solo se reemplaza cuando el asistente lo pide o cuando el propio asistente lo escribió.

Abrir sigue necesitando **Lectura**; guardar un dibujo necesita **Guardar**; cualquier otro archivo necesita **Exportar**.

Las herramientas fuera de los permisos que haya marcado no se ofrecen al asistente, y si lo pide de todos modos, CadCraft lo rechaza y lo anota en el registro de actividad. Desactivar el interruptor termina todas las conexiones de inmediato. {{ui:Restablecer la configuración de CadCraft}} también lo desactiva.

## Conectar su asistente

Los asistentes se conectan a través de **CadCraft Studio** en su equipo: este ejecuta un pequeño servidor al que solo este equipo puede acceder (dirección `127.0.0.1`), protegido por un token que Studio crea cada vez que se inicia. Abra Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token.

- En su asistente, añada un servidor MCP de tipo HTTP con la dirección (tiene este aspecto: `http://127.0.0.1:47615/mcp`) y la cabecera `Authorization: Bearer <token>`. Studio muestra los parámetros que debe pegar.

{{ui:Nuevo token}} en Studio hace que cada asistente conectado se reconecte con el nuevo token. No comparta nunca el token: quien lo tenga puede usar las aplicaciones que usted activó, mientras Studio esté en marcha.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones del navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su equipo.
:::

## Usted sigue al mando

- **Cada acción es un paso de deshacer**, con el nombre del asistente, por ejemplo «Asistente: LINE». Pulse {{key:Mod+Z}} para deshacer la última acción del asistente en su conjunto.
- **Ve lo que hace.** Sus comandos aparecen en el historial de comandos con **[Asistente]** delante, y el dibujo se redibuja mientras trabaja.
- **Espera a que usted termine.** Mientras está a mitad de un comando, el asistente solo puede leer, no cambiar el dibujo; se le indica que lo intente de nuevo cuando usted termine.
- **Sabe cuándo hay uno conectado.** Un botón de la barra de aplicación indica el asistente mientras está conectado. Haga clic para ver lo que puede hacer, o para **Desconectarlo**.
- **Actividad.** {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} enumera cada llamada: cuándo, qué herramienta, si se realizó o se rechazó, y el paso de deshacer que generó. {{ui:Guardar el registro}} guarda una copia.

## Qué puede pedir un asistente

| Herramienta | Permiso | Lo que hace |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lectura | El nombre del dibujo, unidades, capas, bloques y hojas; lo que hay en pantalla |
| `files_list`, `drawing_open` | Lectura | Studio: los archivos de sus carpetas; abre uno en esta ventana |
| `objects_list`, `object_get`, `selection_get` | Lectura | Objetos con su geometría, longitud y área (o solo cuántos, por tipo y capa); la selección |
| `drawing_check` | Lectura | Reglas como capas permitidas, nada en la capa 0, colores ByLayer, alturas de texto |
| `view_screenshot` | Lectura | Una imagen del dibujo tal como se muestra |
| `command_run` | Edición | Escribe en la línea de comandos: `LINE 0,0 @100,0 @0,50 ` se lee como lo escribiría usted (un espacio termina una respuesta), o una lista con una respuesta por cada una. Puede dejar un comando abierto y seguir en su siguiente llamada |
| `script_run` | Edición | Un script (`.scr`) o un archivo LISP, tal como lo carga {{ui:APPLOAD}} |
| `block_insert` | Edición | Coloca un bloque con sus valores de atributo en un solo paso |
| `selection_set`, `undo` | Edición | Selecciona objetos para el siguiente comando; deshace sus propios pasos |
| `drawing_save` | Guardar | El {{ui:Guardar}} propio de CadCraft, o {{ui:Guardar como}} en una de sus carpetas |
| `drawing_plot` | Exportar | Un PDF o SVG de una hoja o del modelo, a una escala o ajustado (los PDF de referencia todavía no se imprimen de este modo) |

Mientras un asistente ejecuta un comando, CadCraft le hace sus preguntas en la línea de comandos en lugar de en un cuadro de diálogo (por ejemplo, si insertar un dibujo completo o un solo bloque), para que el asistente pueda responderlas. La biblioteca y Buscar siguen necesitándole a usted; el asistente sabe que debe preguntarle.

## Trabajar con archivos sin abrir CadCraft

El servidor MCP de CadCraft (`cadcraft-mcp`) y la línea de comandos (`cadcraft`) ejecutan el propio código de dibujo de CadCraft en Node.js, sin ventana. Necesitan Node.js 20 o posterior.

- **El servidor MCP** funciona solo dentro de las carpetas que indique, y solo con los permisos que le dé: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sin `--root` no puede abrir ningún archivo; sin `--allow` solo puede leer. También puede leer modelos IFC, cubicaciones y las anotaciones de revisión de los conjuntos de PDF.
- **La línea de comandos** es para sus propios scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Varios archivos a la vez: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Añada `--json` para obtener una salida que un programa pueda leer.

:::note
Si `npx @getcadcraft/mcp` indica que no se encuentra el paquete, es que todavía no se ha publicado. Las noticias de getcadcraft.com lo indicarán cuando lo esté.
:::

## Si algo no funciona

- **El asistente no ve ninguna herramienta de CadCraft:** compruebe que el interruptor está activado en esta ventana, y que la ventana está abierta en Studio.
- **"needs the edit permission":** marque **Edición** en {{ui:Asistentes}} y vuelva a pedirlo.
- **"outside the folders assistants may use":** añada esa carpeta en {{ui:Asistentes}} › {{ui:Carpetas que pueden usar}}, o pida al asistente que use un archivo de una carpeta que ya haya añadido.
- **Errores "401" o "token":** el token ha cambiado (Studio se reinició, o {{ui:Nuevo token}}). Copie el nuevo en los parámetros del asistente.
- **Su cambio fue incorrecto:** pulse {{key:Mod+Z}}. Una pulsación deshace una acción completa del asistente.

## Véase también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
