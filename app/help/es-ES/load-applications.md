---
title: Cargar aplicaciones (APPLOAD)
summary: Cargue rutinas LISP y sus archivos de diálogo, descárguelas, vuelva a cargarlas desde el historial y guarde las que usa en el Conjunto de inicio.
keywords: appload, ap, cargar aplicación, lisp, lsp, dcl, rutina, conjunto de inicio, descargar, historial, soltar, cargar, personalizar, administrar
from: 89e0ee95
---

## Lo que aprenderá

Cómo cargar una rutina LISP (un archivo `.lsp`) para que sus comandos funcionen en CadCraft, cómo descargarla y cómo hacer que se cargue cada vez que se inicia CadCraft.

## Cargar una rutina

1. Abra {{ui:Vista}} › {{ui:Más}} › {{ui:Cargar aplicación…}}, o escriba {{cmd:APPLOAD}} (o `AP`) y pulse {{key:Enter}}.
2. Haga clic en {{ui:Cargar un archivo…}} y elija uno o varios archivos `.lsp`. Una rutina que abre un cuadro de diálogo suele venir con un archivo `.dcl`: elíjalo también.
3. El cuadro de diálogo indica lo que creó cada archivo, por ejemplo "Cargado delblocks.lsp: 1 comando, DELBLOCKS."
4. Haga clic en {{ui:Cerrar}}, escriba el comando de la rutina y pulse {{key:Enter}}.

También puede soltar archivos `.lsp` y `.dcl` sobre el dibujo, o sobre el cuadro Cargar aplicaciones: se cargan al momento.

El archivo se lee aquí, en su navegador. No se sube nada.

:::tip
Pulse {{key:Enter}} en una línea de comandos vacía para volver a ejecutar el comando de la rutina, igual que con cualquier otro comando. Sus alias de comando también pueden llegar a él: véase "Editar alias de comandos".
:::

## Descargar una rutina

En {{ui:Cargar aplicaciones}}, bajo {{ui:Aplicaciones cargadas}}, haga clic en {{ui:Descargar}} junto al archivo. Los comandos que creó desaparecen hasta que vuelva a cargarla.

## Cargar una rutina cada vez que se inicia CadCraft

1. Cargue la rutina.
2. Bajo {{ui:Aplicaciones cargadas}}, haga clic en {{ui:Agregar al conjunto de inicio}} junto a ella.

A partir de ahora se carga sola cada vez que CadCraft se inicia en este navegador. Para dejar de hacerlo, haga clic en {{ui:Quitar}} junto a ella, bajo {{ui:Conjunto de inicio}}.

El Conjunto de inicio guarda una copia de cada archivo en el almacenamiento de este navegador. Si cambia la rutina, cargue el archivo nuevo y vuelva a agregarlo.

## Cargar acad.lsp y acaddoc.lsp desde una carpeta de soporte (Studio)

En CadCraft Studio, {{ui:Carpeta de soporte}} en el cuadro {{ui:Cargar aplicaciones}} toma una carpeta de su equipo. Haga clic en {{ui:Elegir carpeta…}}. Al iniciarse, CadCraft lee `acad.lsp` y después `acaddoc.lsp` de esa carpeta (sea cual sea la mayúscula de los nombres), los carga y luego carga el Conjunto de inicio. `acaddoc.lsp` se vuelve a leer cada vez que se abre una pestaña de dibujo nueva. No se lee nada más de la carpeta, y un archivo de más de 2 MB se omite con un aviso.

Si un archivo define una función llamada `S::STARTUP`, se ejecuta una vez tras cargar los archivos (también después del Conjunto de inicio). {{ui:Cargar ahora}} hace lo mismo bajo petición; {{ui:Borrar}} olvida la carpeta.

En el navegador una página no puede conservar una carpeta, así que no hay carpeta de soporte: use el Conjunto de inicio de arriba. Los archivos compilados `.fas` y `.vlx` y los programas nativos siguen sin admitirse.

## Volver a cargar un archivo desde el historial

{{ui:Historial}} enumera los archivos que cargó en este navegador, del más reciente al más antiguo. Haga clic en {{ui:Cargar}} junto a uno para volver a cargarlo, sin buscarlo en su equipo.

## Archivos que CadCraft no puede cargar

| Archivo | Qué es | Qué hacer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilado o protegido | cargue en su lugar el código fuente `.lsp` |
| `.arx`, `.crx`, `.dbx` | programas nativos de Windows | no hay forma de ejecutarlos en CadCraft |
| `.dvb` | un proyecto VBA | no hay forma de ejecutarlo en CadCraft |
| `.craft`, `.lua`, `.py` | scripts de CraftScript | ábralos en el área Script de PartCraft |

El cuadro Cargar aplicaciones indica cuál de estos es un archivo al elegirlo.

## Detener una rutina

Pulse {{key:Esc}}. En una de las preguntas de la rutina, Esc la cancela de la forma que la rutina espera (se ejecuta su propia limpieza). Si está ocupada y no pregunta nada, Esc la detiene de inmediato y lo indica; sus rutinas cargadas siguen cargadas.

:::note
Todo lo que una rutina cambia en el dibujo es un solo paso: un {{key:Mod+Z}} lo deshace todo.
:::
