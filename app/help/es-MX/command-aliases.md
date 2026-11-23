---
title: Editar alias de comandos
summary: Guarde sus propios alias de comandos en un solo archivo de texto con el formato conocido, importe y exporte un archivo .pgp y vuelva a cargarlo con REINIT.
keywords: alias, aliases, aliasedit, pgp, atajo, nombre corto, reinit, teclado, personalizar, editar alias
from: 2282d36f
---

## Lo que aprenderá

Cómo agregar sus propios nombres cortos para comandos, por ejemplo `LL` para {{cmd:LINE}}, todo en un solo archivo de texto.

## Agregar un alias

1. Abra {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}, o escriba {{cmd:ALIASEDIT}} y pulse {{key:Enter}}.
2. Agregue una línea con el alias, una coma y el comando después de un asterisco:

```
LL,     *LINE
```

3. Haga clic en {{ui:Save}}. La línea de comandos indica cuántos de sus alias están en uso.
4. Escriba `LL` y pulse {{key:Enter}}: se inicia LINE.

Sus alias se colocan encima de los de CadCraft. Una línea suya gana frente a un alias integrado con el mismo nombre; si quita su línea, vuelve el integrado.

## Líneas que CadCraft rechaza

El editor indica cada problema con su número de línea mientras escribe:

- el comando no existe;
- el alias es el nombre de otro comando (`LINE, *CIRCLE` ocultaría LINE);
- la línea no tiene el formato `ALIAS, *COMANDO`;
- el mismo alias está en dos líneas (gana la última).

Las líneas que inician un programa en su equipo, como `NOTEPAD, START, 1, *File to edit: ,`, se omiten con un aviso: una aplicación en el navegador no puede iniciar programas.

## Traer sus alias desde otro programa

1. En el editor de alias, haga clic en {{ui:Import .pgp…}} y elija el archivo. También puede arrastrar un archivo `.pgp` sobre el dibujo.
2. Revise los problemas listados (los comandos que CadCraft no tiene se rechazan; el resto funciona).
3. Haga clic en {{ui:Save}}.

{{ui:Export .pgp}} guarda los alias de CadCraft y los suyos como un solo archivo con el mismo formato.

## Volver a cargar el archivo

Escriba {{cmd:REINIT}} y pulse {{key:Enter}} para aplicar de nuevo su archivo de alias. Se conserva en este navegador; la aplicación de escritorio lo guardará en su propia carpeta, y el servicio en la nube lo sincronizará.

## Letras para las opciones de un comando

Un alias nombra un comando. Para cambiar las letras que responden a las opciones de un comando (`P` para Polar en {{cmd:ARRAY}}), vea [Asignar a las opciones de comando sus propias letras](topic:option-letters).

## Atajos de teclado para cualquier comando

Un alias se escribe; un atajo es una tecla. Para asignar una tecla propia a un comando:

1. Haga clic en {{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}, o escriba `KEYS` y pulse {{key:Enter}}.
2. Haga clic en el cuadro {{ui:Key}} y pulse las teclas, por ejemplo {{key:Alt+Shift+C}}.
3. En {{ui:Runs}}, escriba el comando y, si lo desea, lo que debe escribirse después: `CIRCLE`, o `ZOOM E`.
4. Haga clic en {{ui:Add}}.

Una tecla necesita {{key:Mod}} o {{key:Alt}} con una letra o un dígito, o una tecla de función libre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Las teclas que ya usan CadCraft, la aplicación o el navegador, y las que tiene un botón de herramientas propias (vea [Botones propios](topic:my-tools)), se rechazan, y el cuadro indica por qué. Los atajos se guardan en este navegador (o en la aplicación de escritorio); {{ui:Remove}} quita uno.
