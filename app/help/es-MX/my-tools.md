---
title: Botones propios (Mis herramientas)
summary: Añada botones de barra de herramientas que ejecuten sus propias macros, asígneles teclas de atajo, compártalos como archivo y traiga botones desde un archivo de personalización CUIx.
keywords: mis herramientas, botones personalizados, botones de barra de herramientas, macro, macros, cui, cuix, personalizar, menú, teclas de atajo, atajos de teclado, diesel, ^c^c, importar botones, exportar botones
from: 36618802
---

## Lo que aprenderá

Cómo poner botones propios en la barra de herramientas, cada uno ejecutando una macro escrita como la escribe AutoCAD, cómo asignar una tecla a un botón, y cómo traer los botones de un archivo CUIx.

## Añadir un botón

1. Abra {{ui:Parámetros}} ({{key:Mod+,}}) y permanezca en la pestaña {{ui:CadCraft}}. Desplácese hasta {{ui:Mis herramientas}}.
2. Haga clic en {{ui:Añadir un botón…}}.
3. Complete el cuadro:
   - {{ui:Grupo}}: el grupo de la barra de herramientas donde va, por ejemplo `Mis herramientas`. Un nombre nuevo crea un grupo nuevo.
   - {{ui:Etiqueta}}: las palabras del botón.
   - {{ui:Macro}}: lo que escribe, por ejemplo `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tecla de atajo}}: haga clic en el cuadro y pulse las teclas, por ejemplo {{key:Ctrl+Alt+B}}.
   - {{ui:Icono}}: una imagen PNG o SVG de máximo 64 KB, o ninguna (se muestra una estrella).
4. Haga clic en {{ui:Guardar}}.

El botón aparece al final de la barra de herramientas, en su grupo. Haga clic en él, o pulse su tecla, para ejecutarlo. {{ui:Edición}} y {{ui:Eliminar}} en la lista lo cambian o lo quitan.

## Escribir una macro

Una macro es lo que escribiría en la línea de comandos, con algunos signos:

| Signo | Significa |
|---|---|
| `^C` | Cancela lo que se esté ejecutando (`^C^C` es el inicio habitual) |
| `;` o un espacio | {{key:Enter}} |
| `\` | Espera a usted: un clic o una respuesta escrita; luego la macro continúa |
| `_` o `.` antes de un comando | Se acepta y se ignora (nombres internacionales e integrados) |
| `*` al inicio de todo | Se vuelve a ejecutar cada vez que termina, hasta que pulse {{key:Esc}} |
| `^O`, `^G` | Activa o desactiva Orto y la rejilla |
| `$M=` | El resto es DIESEL. Solo se leen `$(if,…)`, `$(getvar,…)`, `$(=,…)` y `$(eq,…)`; un botón que use cualquier otra cosa lo indica y no hace nada |

Ejemplos:

- `^C^C_line;0,0;@100,0;;` dibuja una línea de 100 de largo desde el origen.
- `^C^C_circle;\25;` le pide el centro, luego dibuja un círculo de radio 25 allí.
- `^C^C_turnright` gira la vista 90° a la derecha.

## Teclas de atajo

Una tecla necesita {{key:Mod}} (Ctrl, o Cmd en un Mac) o {{key:Alt}} con una letra o un dígito, o una de las teclas de función libres {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Las letras solas van a la línea de comandos. Las teclas que ya usan CadCraft, la aplicación o el navegador (como {{key:Ctrl+S}} o {{key:Ctrl+Z}}), y las que ya tiene otro botón, se rechazan, y el cuadro indica el motivo.

## Compartir sus botones

- {{ui:Exportar…}} guarda cada grupo y botón (con iconos y teclas) como `my-tools.json`.
- {{ui:Importar…}} añade después de los suyos los grupos de ese archivo. Un nombre de grupo que ya usa recibe "(2)"; una tecla que entraría en conflicto se omite, y el panel lo indica.

## Traer botones desde un archivo CUIx

1. Haga clic en {{ui:Importar CUIx…}} y elija el archivo `.cuix`.

Sus barras de herramientas y paneles de la cinta de opciones se convierten en grupos, cada botón con su macro y su imagen (PNG, o BMP convertido a PNG). Sus teclas de atajo llegan en un grupo propio, cada botón con su tecla; los alias de comandos que pueda traer llegan en un grupo {{ui:Alias}}. El panel muestra lo que se importó.

:::note
El archivo solo se lee. Los comandos que CadCraft no tiene se listan por nombre, sin adivinar: sus botones lo indican al hacer clic. DIESEL más allá de las pocas funciones anteriores, los menús, los botones del ratón y los espacios de trabajo no se leen.
:::

## Conviene saber

- Los botones se guardan en este navegador (o en esta aplicación de escritorio), no en los dibujos.
- Un botón se ejecuta a través de la línea de comandos, así que se deshace como cualquier cosa que escriba: un {{key:Mod+Z}} por cada comando que ejecutó.
