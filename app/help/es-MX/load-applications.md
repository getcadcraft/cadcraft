---
title: Cargar aplicaciones (APPLOAD)
summary: Cargue rutinas LISP y sus archivos de diálogo, descárguelas, vuelva a cargarlas desde el historial y guarde las que usa en el conjunto de inicio.
keywords: appload, ap, cargar aplicación, lisp, lsp, dcl, rutina, conjunto de inicio, descargar, historial, soltar, cargar, personalizar, administrar
from: 89e0ee95
---

## Qué aprenderá

Cómo cargar una rutina LISP (un archivo `.lsp`) para que sus comandos funcionen en CadCraft, cómo descargarla y cómo hacer que se cargue cada vez que CadCraft inicia.

## Cargar una rutina

1. Abra {{ui:Vista}} › {{ui:Más}} › {{ui:Cargar aplicación…}}, o escriba {{cmd:APPLOAD}} (o `AP`) y presione {{key:Enter}}.
2. Haga clic en {{ui:Cargar un archivo…}} y elija uno o más archivos `.lsp`. Una rutina que abre un diálogo normalmente viene con un archivo `.dcl`: elíjalo también.
3. El diálogo indica qué creó cada archivo, por ejemplo "Cargado delblocks.lsp: 1 comando, DELBLOCKS."
4. Haga clic en {{ui:Cerrar}}, escriba el comando de la rutina y presione {{key:Enter}}.

También puede soltar archivos `.lsp` y `.dcl` sobre el dibujo, o sobre el diálogo Cargar aplicaciones: se cargan de inmediato.

El archivo se lee aquí, en su navegador. No se sube nada.

:::tip
Presione {{key:Enter}} en una línea de comandos vacía para volver a ejecutar el comando de la rutina, igual que con cualquier otro comando. Sus alias de comandos también pueden llegar a él: vea "Editar alias de comandos".
:::

## Descargar una rutina

En {{ui:Cargar aplicaciones}}, bajo {{ui:Aplicaciones cargadas}}, haga clic en {{ui:Descargar}} junto al archivo. Los comandos que creó desaparecen hasta que lo vuelva a cargar.

## Cargar una rutina cada vez que CadCraft inicia

1. Cargue la rutina.
2. Bajo {{ui:Aplicaciones cargadas}}, haga clic en {{ui:Agregar al conjunto de inicio}} junto a ella.

De ahora en adelante se carga sola cada vez que CadCraft inicie en este navegador. Para detenerlo, haga clic en {{ui:Quitar}} junto a ella, bajo {{ui:Conjunto de inicio}}.

El conjunto de inicio guarda una copia de cada archivo en el almacenamiento de este navegador. Si cambia la rutina, cargue el archivo nuevo y vuelva a agregarlo.

## Cargar acad.lsp y acaddoc.lsp desde una carpeta de soporte (Studio)

En CadCraft Studio, {{ui:Carpeta de soporte}} en el diálogo {{ui:Cargar aplicaciones}} toma una carpeta de su computadora. Haga clic en {{ui:Elegir carpeta…}}. Al iniciar, CadCraft lee `acad.lsp` y luego `acaddoc.lsp` de esa carpeta (sin importar las mayúsculas de los nombres), los carga, y después carga el conjunto de inicio. `acaddoc.lsp` se vuelve a leer cada vez que se abre una pestaña de dibujo nueva. No se lee nada más de la carpeta, y un archivo de más de 2 MB se omite con un mensaje.

Si un archivo define una función llamada `S::STARTUP`, se ejecuta una vez después de cargar los archivos (también después del conjunto de inicio). {{ui:Cargar ahora}} hace lo mismo bajo petición; {{ui:Quitar}} olvida la carpeta.

En el navegador una página no puede guardar una carpeta, así que no hay carpeta de soporte: use el conjunto de inicio de arriba. Los archivos `.fas` y `.vlx` compilados, y los programas nativos, siguen rechazados.

## Volver a cargar un archivo desde el historial

{{ui:Historial}} lista los archivos que cargó en este navegador, del más reciente al más antiguo. Haga clic en {{ui:Cargar}} junto a uno para volver a cargarlo, sin buscarlo en su computadora.

## Archivos que CadCraft no puede cargar

| Archivo | Qué es | Qué hacer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilado o protegido | cargue el código fuente `.lsp` en su lugar |
| `.arx`, `.crx`, `.dbx` | programas nativos de Windows | no hay forma de ejecutarlos en CadCraft |
| `.dvb` | un proyecto VBA | no hay forma de ejecutarlo en CadCraft |
| `.craft`, `.lua`, `.py` | scripts de CraftScript | ábralos en el espacio de trabajo Script de PartCraft |

El diálogo Cargar aplicaciones indica cuál de estos es un archivo al elegirlo.

## Detener una rutina

Presione {{key:Esc}}. En una de las solicitudes de la rutina, Esc la cancela de la forma que la rutina espera (se ejecuta su propia limpieza). Si está ocupada y no pide nada, Esc la detiene por completo y lo indica; sus rutinas cargadas siguen cargadas.

:::note
Todo lo que una rutina cambia en el dibujo es un solo paso: un {{key:Mod+Z}} lo deshace todo.
:::
