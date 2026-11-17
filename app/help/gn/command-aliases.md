---
title: Editar alias de comandos
summary: Guardá tus propios alias de comandos en un archivo de texto con el formato conocido, importá y exportá un archivo .pgp, y volvelo a cargar con REINIT.
keywords: alias, aliases, aliasedit, pgp, atajo, nombre corto, reinit, teclado, personalizar, editar alias
from: 6ab6fa0e
---

## Lo que va a aprender

Cómo agregar nombres cortos propios para comandos, por ejemplo `LL` para {{cmd:LINE}}, todo en un solo archivo de texto.

## Agregar un alias

1. Abrí {{ui:Vista}} › {{ui:Más}} › {{ui:Editar alias…}}, o escribí {{cmd:ALIASEDIT}} y apretá {{key:Enter}}.
2. Agregá una línea con el alias, una coma y el comando después de una estrella:

```
LL,     *LINE
```

3. Hacé clic en {{ui:Guardar}}. La línea de comandos dice cuántos de tus alias están en uso.
4. Escribí `LL` y apretá {{key:Enter}}: LINE se inicia.

Tus alias van encima de los propios de CadCraft. Una línea tuya gana sobre un alias integrado con el mismo nombre; si quitás tu línea, vuelve el integrado.

## Líneas que CadCraft rechaza

El editor lista cada problema con su número de línea mientras escribís:

- el comando no existe;
- el alias es en sí el nombre de un comando (`LINE, *CIRCLE` ocultaría LINE);
- la línea no es `ALIAS, *COMANDO`;
- el mismo alias está en dos líneas (gana la posterior).

Las líneas que inician un programa en tu computadora, como `NOTEPAD, START, 1, *File to edit: ,`, se omiten con un aviso: una aplicación en el navegador no puede iniciar programas.

## Traer tus alias de otro programa

1. En el editor de alias, hacé clic en {{ui:Importar .pgp…}} y elegí el archivo. También podés arrastrar un archivo `.pgp` sobre el plano.
2. Revisá los problemas listados (los comandos que CadCraft no tiene se rechazan, lo demás funciona).
3. Hacé clic en {{ui:Guardar}}.

{{ui:Exportar .pgp}} guarda los alias de CadCraft y los tuyos como un solo archivo en el mismo formato.

## Volver a cargar el archivo

Escribí {{cmd:REINIT}} y apretá {{key:Enter}} para aplicar de nuevo tu archivo de alias. Se guarda en este navegador; la aplicación de escritorio lo guardará en su propia carpeta, y el servicio en la nube lo sincronizará.

## Atajos de teclado para cualquier comando

Un alias se escribe; un atajo es una tecla. Para darle a un comando una tecla propia:

1. Hacé clic en {{ui:Vista}} › {{ui:Más}} › {{ui:Atajos de teclado…}}, o escribí `KEYS` y apretá {{key:Enter}}.
2. Hacé clic en el cuadro {{ui:Tecla}} y apretá las teclas, por ejemplo {{key:Alt+Shift+C}}.
3. En {{ui:Ejecuta}}, escribí el comando, y si querés, lo que se escribe después: `CIRCLE`, o `ZOOM E`.
4. Hacé clic en {{ui:Agregar}}.

Una tecla necesita {{key:Mod}} o {{key:Alt}} con una letra o un número, o una tecla de función libre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Las teclas que ya usan CadCraft, la aplicación o el navegador, y las que tiene un botón Mis herramientas (ver [Botones propios](topic:my-tools)), se rechazan, y el cuadro dice por qué. Los atajos se guardan en este navegador (o en la aplicación de escritorio); {{ui:Quitar}} elimina uno.
