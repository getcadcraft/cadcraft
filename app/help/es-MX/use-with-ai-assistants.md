---
title: Usar CadCraft con un asistente de IA
summary: Deje que su propio asistente de IA o script trabaje con CadCraft: qué puede hacer, cómo conectar cualquier cliente MCP y cómo mantiene el control (permisos, deshacer, registro de actividad, Desconectar).
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, línea de comandos, cli, json, token, permisos, desconectar, actividad, carpetas, rutas, svg, lote
from: 06ba4ef6
---

## Qué aprenderá

Cómo dejar que un asistente de IA (o un script que usted escribió) vea un dibujo, ejecute los comandos de CadCraft, trace y guarde, y cómo decidir lo que tiene permitido tocar.

CadCraft **no tiene IA propia** y no envía nada a ningún lugar. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). CadCraft solo le da herramientas, y usted elige cuáles.

Hay dos formas de entrar:

- **El dibujo que tiene abierto.** El asistente trabaja en esta ventana, junto a usted, a través de CadCraft Studio en su computadora. Para esto sirve {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Asistentes}}.
- **Dibujos en su computadora, sin abrir la aplicación.** El servidor MCP de CadCraft y la línea de comandos `cadcraft` leen y escriben archivos DWG y DXF en las carpetas que usted indique. Vea «Trabajar con archivos sin abrir CadCraft» más abajo.

## Activarlo

1. Abra {{ui:Parámetros}} (el engranaje de la barra de la aplicación, o {{key:Mod+,}}) y vaya a la pestaña {{ui:CadCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen CadCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer. **Leer** viene marcado al inicio; marque los demás solo cuando los necesite.

| Permiso | Lo que puede hacer el asistente |
|---|---|
| Leer | Mirar el dibujo: describirlo, listar y buscar objetos, ver la selección, describir la vista y tomar una imagen de ella, revisarlo según las reglas de capas y de dibujo |
| Editar | Ejecutar comandos en el dibujo y cambiar la selección. Cada acción es un paso que puede deshacer |
| Guardar | Guardar el dibujo (en el escritorio, en su archivo; en un navegador, como descarga) |
| Exportar | Trazar a PDF y crear otros archivos |

## Permitir que use archivos en carpetas que usted elija

En CadCraft Studio un asistente puede abrir, guardar y trazar archivos por su nombre, en lugar de usar los cuadros de diálogo de archivos, pero solo dentro de las carpetas que agregue en {{ui:Asistentes}} › {{ui:Carpetas que puede usar}}:

1. Elija {{ui:Agregar una carpeta…}} y seleccione la carpeta en el cuadro de diálogo propio de Studio.
2. Ahora el asistente puede listar los archivos de esa carpeta (`files_list`), abrir un dibujo (`drawing_open`), guardarlo allí en una versión de DWG o como DXF, trazar a un archivo PDF o SVG, cargar un archivo LISP y entregar a un comando el archivo que pide (`INSERT` `F`, `XATTACH`, un archivo de puntos) o indicar dónde va el archivo de un comando (el CSV de `COUNT`, `PUBLISH`).
3. {{ui:Quitar}} retira una carpeta de inmediato. Las rutas fuera de ellas se rechazan, y un archivo que ya existe se reemplaza solo cuando el asistente lo pide o lo escribió él mismo.

Abrir sigue requiriendo **Leer**; escribir un dibujo requiere **Guardar**; cualquier otro archivo requiere **Exportar**.

Las herramientas fuera de los permisos que marcó no se ofrecen al asistente; si aun así las pide, CadCraft lo rechaza y lo anota en el registro de actividad. Desactivar el interruptor termina de inmediato todas las conexiones. {{ui:Restablecer la configuración de CadCraft}} también lo desactiva.

## Conecte su asistente

Los asistentes se conectan a través de **CadCraft Studio** en su computadora: ejecuta un pequeño servidor que solo puede alcanzar esta computadora (dirección `127.0.0.1`), protegido por un token que Studio crea cada vez que se inicia. Abra Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token.

- En su asistente, agregue un servidor MCP de tipo HTTP con la dirección (tiene la forma `http://127.0.0.1:47615/mcp`) y el encabezado `Authorization: Bearer <token>`. Studio muestra la configuración para pegar.

{{ui:Nuevo token}} en Studio hace que cada asistente conectado se vuelva a conectar con el nuevo token. Nunca comparta el token: cualquiera que lo tenga puede usar las aplicaciones que activó, mientras Studio esté en ejecución.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones de navegador el interruptor no tiene efecto hasta que use CadCraft Studio en su computadora.
:::

## Usted mantiene el control

- **Cada acción es un solo paso de deshacer**, identificado con el nombre que le da el asistente, por ejemplo «Assistant: LINE». Pulse {{key:Mod+Z}} para deshacer en conjunto la última acción del asistente.
- **Usted ve lo que hace.** Sus comandos aparecen en el historial de comandos con **[Assistant]** al frente, y el dibujo se actualiza mientras trabaja.
- **Espera a que usted termine.** Mientras usted está en medio de un comando, el asistente puede leer pero no cambiar el dibujo; se le indica que lo intente de nuevo cuando usted termine.
- **Sabe cuándo hay uno conectado.** Un botón en la barra de la aplicación muestra el nombre del asistente mientras está conectado. Haga clic en él para ver lo que puede hacer o para **Desconectar** el asistente.
- **Actividad.** {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} lista cada llamada: cuándo, qué herramienta, si se realizó o se rechazó, y el paso de deshacer que generó. {{ui:Guardar el registro}} guarda una copia.

## Lo que puede pedir un asistente

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Leer | El nombre del dibujo, las unidades, las capas, los bloques, las hojas; lo que está en pantalla |
| `files_list`, `drawing_open` | Leer | Studio: los archivos de sus carpetas; abre uno en esta ventana |
| `objects_list`, `object_get`, `selection_get` | Leer | Objetos con su geometría, longitud y área (o solo cuántos, por tipo y capa); la selección |
| `drawing_check` | Leer | Reglas como capas permitidas, nada en la capa 0, colores porCapa, alturas de texto |
| `view_screenshot` | Leer | Una imagen del dibujo tal como se muestra |
| `command_run` | Editar | Escribe en la línea de comandos: `LINE 0,0 @100,0 @0,50 ` se lee como lo escribiría usted (un espacio termina una respuesta), o una lista con una respuesta cada una. Puede dejar un comando abierto y seguir en su siguiente llamada |
| `script_run` | Editar | Un script (`.scr`) o un archivo LISP, como lo carga {{ui:APPLOAD}} |
| `block_insert` | Editar | Coloca un bloque con sus valores de atributo en un solo paso |
| `selection_set`, `undo` | Editar | Selecciona objetos para el siguiente comando; deshace sus propios pasos |
| `drawing_save` | Guardar | El {{ui:Guardar}} propio de CadCraft, o {{ui:Guardar como}} en una de sus carpetas |
| `drawing_plot` | Exportar | Un PDF o SVG de una hoja o del modelo, a una escala o ajustado (por ahora los subyacentes PDF no se imprimen así) |

Mientras un asistente ejecuta un comando, CadCraft hace sus preguntas en la línea de comandos en lugar de en un cuadro de diálogo (por ejemplo, si insertar un dibujo completo o un solo bloque), para que el asistente pueda responderlas. La biblioteca y {{ui:Buscar}} aún requieren que usted intervenga; se le indica al asistente que le pregunte a usted.

## Trabajar con archivos sin abrir CadCraft

El servidor MCP de CadCraft (`cadcraft-mcp`) y la línea de comandos (`cadcraft`) ejecutan el propio código de dibujo de CadCraft en Node.js, sin ventana. Necesitan Node.js 20 o una versión más reciente.

- **El servidor MCP** funciona solo dentro de las carpetas que usted indique, y solo con los permisos que le dé: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sin `--root` no puede abrir ningún archivo; sin `--allow` solo puede leer. También puede leer modelos IFC, cuantificaciones y las marcas de los juegos de PDF.
- **La línea de comandos** es para sus propios scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Varios archivos a la vez: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Agregue `--json` para obtener una salida que un programa pueda leer.

:::note
Si `npx @getcadcraft/mcp` indica que no se encuentra el paquete, todavía no se ha publicado. Las noticias en getcadcraft.com indicarán cuándo.
:::

## Si algo no funciona

- **El asistente no ve herramientas de CadCraft:** verifique que el interruptor esté activado en esta ventana y que la ventana esté abierta en Studio.
- **«needs the edit permission»:** marque **Editar** en {{ui:Asistentes}} y después vuelva a pedirlo.
- **«outside the folders assistants may use»:** agregue esa carpeta en {{ui:Asistentes}} › {{ui:Carpetas que puede usar}}, o pida al asistente que use un archivo de una carpeta que ya agregó.
- **Errores «401» o «token»:** el token cambió (Studio se reinició, o se usó {{ui:Nuevo token}}). Copie el nuevo en la configuración del asistente.
- **El cambio del asistente fue incorrecto:** pulse {{key:Mod+Z}}. Cada pulsación deshace una acción completa del asistente.

## Vea también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
