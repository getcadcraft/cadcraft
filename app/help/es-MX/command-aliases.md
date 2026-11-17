---
title: Editar alias de comandos
summary: Mantenga sus propios alias de comandos en un archivo de texto con el formato habitual, importe y exporte un archivo .pgp, y vuélvalo a cargar con REINIT.
keywords: alias, alias de comandos, aliasedit, pgp, atajo, nombre corto, reinit, teclado, personalizar, editar alias
from: 6ab6fa0e
---

## Lo que aprenderá

Cómo añadir sus propios nombres cortos para comandos, por ejemplo `LL` para {{cmd:LINE}}, todo en un solo archivo de texto.

## Añadir un alias

1. Abra {{ui:Vista}} › {{ui:Más}} › {{ui:Editar alias…}}, o escriba {{cmd:ALIASEDIT}} y pulse {{key:Enter}}.
2. Añada una línea con el alias, una coma y el comando después de un asterisco:

```
LL,     *LINE
```

3. Haga clic en {{ui:Guardar}}. La línea de comandos indica cuántos de sus alias están en uso.
4. Escriba `LL` y pulse {{key:Enter}}: LINE empieza.

Sus alias se colocan encima de los propios de CadCraft. Una línea suya gana a un alias integrado con el mismo nombre; si elimina su línea, vuelve el integrado.

## Líneas que CadCraft rechaza

El editor enumera cada problema con su número de línea mientras escribe:

- el comando no existe;
- el alias es en sí el nombre de un comando (`LINE, *CIRCLE` ocultaría LINE);
- la línea no tiene la forma `ALIAS, *COMANDO`;
- el mismo alias está en dos líneas (gana la última).

Las líneas que inician un programa en su equipo, como `NOTEPAD, START, 1, *File to edit: ,`, se omiten con una nota: una aplicación en el navegador no puede iniciar programas.

## Traer sus alias de otro programa

1. En el editor de alias, haga clic en {{ui:Importar .pgp…}} y elija el archivo. También puede soltar un archivo `.pgp` sobre el dibujo.
2. Revise los problemas enumerados (los comandos que CadCraft no tiene se rechazan, lo demás funciona).
3. Haga clic en {{ui:Guardar}}.

{{ui:Exportar .pgp}} guarda los alias de CadCraft y los suyos como un solo archivo en el mismo formato.

## Volver a cargar el archivo

Escriba {{cmd:REINIT}} y pulse {{key:Enter}} para aplicar de nuevo su archivo de alias. Se guarda en este navegador; la aplicación de escritorio lo guardará en su propia carpeta, y el servicio en la nube lo sincronizará.

## Atajos de teclado para cualquier comando

Un alias se escribe; un atajo es una tecla. Para dar a un comando una tecla propia:

1. Haga clic en {{ui:Vista}} › {{ui:Más}} › {{ui:Atajos de teclado…}}, o escriba `KEYS` y pulse {{key:Enter}}.
2. Haga clic en el cuadro {{ui:Tecla}} y pulse las teclas, por ejemplo {{key:Alt+Shift+C}}.
3. En {{ui:Ejecuta}}, escriba el comando y, si lo desea, lo que va a escribir después: `CIRCLE`, o `ZOOM E`.
4. Haga clic en {{ui:Añadir}}.

Una tecla necesita {{key:Mod}} o {{key:Alt}} con una letra o un dígito, o una tecla de función libre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Las teclas que ya usan CadCraft, la aplicación o el navegador, y las que tiene un botón Mis herramientas (vea [Botones propios](topic:my-tools)), se rechazan, y el cuadro indica por qué. Los atajos se guardan en este navegador (o en la aplicación de escritorio); {{ui:Quitar}} elimina uno.
