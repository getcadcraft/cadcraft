---
title: Cargar aplicaciones (APPLOAD)
summary: Cargá rutinas LISP y sus archivos de diálogo, descargalas, volvé a cargarlas desde el historial y guardá las que usás en el Paquete de inicio.
keywords: appload, ap, cargar aplicación, lisp, lsp, dcl, rutina, paquete de inicio, descargar, historial, soltar, cargar, personalizar, administrar
from: 89e0ee95
---

## Lo que vas a aprender

Cómo cargar una rutina LISP (un archivo `.lsp`) para que sus comandos funcionen en CadCraft, cómo descargarla, y cómo hacer que se cargue cada vez que arranca CadCraft.

## Cargar una rutina

1. Abrí {{ui:View}} › {{ui:More}} › {{ui:Load application…}}, o escribí {{cmd:APPLOAD}} (o `AP`) y presioná {{key:Enter}}.
2. Hacé click en {{ui:Load a file…}} y elegí uno o más archivos `.lsp`. Una rutina que abre un diálogo suele venir con un archivo `.dcl`: elegilo también.
3. El diálogo dice qué creó cada archivo, por ejemplo "Se cargó delblocks.lsp: 1 comando, DELBLOCKS."
4. Hacé click en {{ui:Close}}, escribí el comando de la rutina y presioná {{key:Enter}}.

También podés soltar archivos `.lsp` y `.dcl` sobre el plano, o sobre el diálogo Cargar aplicaciones: se cargan de inmediato.

El archivo se lee acá, en tu navegador. No se sube nada.

:::tip
Presioná {{key:Enter}} en una línea de comandos vacía para ejecutar otra vez el comando de la rutina, igual que cualquier otro comando. Tus alias de comando también pueden llegar a él: ver "Editar alias de comandos".
:::

## Descargar una rutina

En {{ui:Load applications}}, bajo {{ui:Loaded applications}}, hacé click en {{ui:Unload}} al lado del archivo. Los comandos que creó desaparecen hasta que la vuelvas a cargar.

## Cargar una rutina cada vez que arranca CadCraft

1. Cargá la rutina.
2. Bajo {{ui:Loaded applications}}, hacé click en {{ui:Add to Startup Suite}} al lado.

Desde ahora se carga sola cada vez que CadCraft arranca en este navegador. Para dejar de hacerlo, hacé click en {{ui:Remove}} al lado, bajo {{ui:Startup Suite}}.

El Paquete de inicio guarda una copia de cada archivo en el almacenamiento de este navegador. Si cambiás la rutina, cargá el archivo nuevo y agregalo otra vez.

## Cargar acad.lsp y acaddoc.lsp desde una carpeta de soporte (Studio)

En CadCraft Studio, {{ui:Support folder}} en el diálogo {{ui:Load applications}} toma una carpeta de tu computadora. Hacé click en {{ui:Choose folder…}}. Cuando CadCraft arranca, lee `acad.lsp` y después `acaddoc.lsp` de esa carpeta (sin importar cómo estén escritos los nombres), los carga, y luego carga el Paquete de inicio. `acaddoc.lsp` se vuelve a leer cada vez que se abre una pestaña de plano nueva. No se lee nada más de la carpeta, y un archivo de más de 2 MB se omite con un aviso.

Si un archivo define una función llamada `S::STARTUP`, se ejecuta una vez después de cargar los archivos (también después del Paquete de inicio). {{ui:Load now}} hace lo mismo a pedido; {{ui:Clear}} olvida la carpeta.

En el navegador una página no puede guardar una carpeta, así que no hay carpeta de soporte: usá el Paquete de inicio de arriba. Los archivos `.fas` y `.vlx` compilados y los programas nativos siguen rechazados.

## Cargar otra vez un archivo desde el historial

{{ui:History}} lista los archivos que cargaste en este navegador, del más nuevo al más viejo. Hacé click en {{ui:Load}} al lado de uno para cargarlo de nuevo, sin buscarlo en tu computadora.

## Archivos que CadCraft no puede cargar

| Archivo | Qué es | Qué hacer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilado o protegido | cargá el código fuente `.lsp` |
| `.arx`, `.crx`, `.dbx` | programas nativos de Windows | no hay forma de ejecutarlos en CadCraft |
| `.dvb` | un proyecto VBA | no hay forma de ejecutarlos en CadCraft |
| `.craft`, `.lua`, `.py` | scripts de CraftScript | abrilos en el espacio de Script de PartCraft |

El diálogo Cargar aplicaciones indica cuál de estos es un archivo cuando lo elegís.

## Detener una rutina

Presioná {{key:Esc}}. En una de las preguntas de la rutina, Esc la cancela de la forma que la rutina espera (se ejecuta su propia limpieza). Si está ocupada y no está preguntando nada, Esc la detiene de inmediato y lo informa; tus rutinas cargadas siguen cargadas.

:::note
Todo lo que una rutina cambia en el plano es un solo paso: un {{key:Mod+Z}} lo deshace todo.
:::
