---
title: Teclado y ratón
summary: Cada tecla, acción del ratón y tecla de la línea de comandos de la aplicación de dibujo CadCraft, tal como las gestiona el código.
keywords: teclado, atajos, teclas, ratón, rueda, desplazar, zoom, clic derecho, botón central, f3, f7, f8, ctrl, tecla de comando, teclas rápidas, copiar, cortar, pegar, duplicar, portapapeles, seleccionar todo
from: a2608a29
---

Los atajos se muestran para su equipo. En un Mac, cada atajo {{key:Mod}} de abajo usa la tecla Comando, y la tecla Control también funciona. Cómo se escriben las teclas, y cómo usar las teclas F en un Mac, está en [Teclas, ratones y trackpads](common:keys).

## Escribir comandos

| Tecla | Qué hace |
|---|---|
| Cualquier letra, cifra o símbolo | Va a la línea de comandos, esté donde esté el puntero, salvo que un cuadro de un panel tenga el cursor |
| {{key:Enter}} | Envía lo escrito. Con la indicación vacía: repite el último comando, termina un comando, finaliza una selección, o acepta el valor predeterminado de `<…>` |
| {{key:Space}} | Igual que {{key:Enter}}, salvo cuando CadCraft pide texto (texto, nombres de bloque, texto de acotación), donde escribe un espacio |
| {{key:Esc}} | Cancela el comando. Sin ningún comando en curso: cancela un movimiento de pinzamiento o un recuadro de selección, y después borra la selección |
| {{key:Tab}} | Acepta el comando sugerido que aparece a la derecha de la línea de comandos. Sin nada escrito y con el puntero sobre objetos superpuestos: resalta el siguiente (haga clic para elegirlo) |
| {{key:Up}} {{key:Down}} | Recorre las líneas que escribió antes (las últimas 100) |

## Dibujo y edición

| Tecla | Qué hace |
|---|---|
| {{key:Mod+Z}} | Deshace el último comando |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |
| {{key:Mod+A}} | Selecciona todos los objetos que puede editar en la pestaña abierta ({{cmd:SELECTALL}}). Si ha escrito algo en la línea de comandos, selecciona ese texto |
| {{key:Delete}} | Borra los objetos seleccionados ({{cmd:ERASE}}), salvo que haya escrito algo en la línea de comandos |
| {{key:Backspace}} | Borra los objetos seleccionados cuando la línea de comandos no tiene el cursor; en la línea de comandos borra lo que escribió |
| {{key:Esc}} | Sin comando en curso: borra la selección ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Guarda una copia en el formato del dibujo (DWG o DXF) |
| {{key:Mod+Shift+S}} | Guardar como: elija DWG o DXF, y después guarde una copia |
| {{key:Mod+O}} | Abre un DWG o DXF |
| {{key:Mod+P}} | Traza a PDF |

Deshacer, rehacer, seleccionar todo y trazar no hacen nada mientras hay un comando en curso: pulse antes {{key:Esc}}.

## Copiar, cortar y pegar

| Tecla | Qué hace |
|---|---|
| {{key:Mod+C}} | Copia la selección al portapapeles ({{cmd:COPYCLIP}}). Si no hay nada seleccionado: CadCraft pide objetos |
| {{key:Mod+X}} | Cortar: copia la selección y después la borra ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Pegar: la copia sigue al cursor; haga clic, o escriba un punto, para colocarla ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Pegar en su sitio: en las coordenadas desde las que se copió ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicar: una copia de la selección se mueve con el puntero; haga clic para colocarla, {{key:Esc}} no deja nada ({{cmd:DUPLICATE}}) |

Las mismas acciones están en el grupo {{ui:Edición}} de la barra de herramientas ({{ui:Copiar}}, {{ui:Pegar}}) y en su menú {{ui:Más}}. Mientras corre otro comando, termínelo o pulse antes {{key:Esc}}; pulsar {{key:Mod+V}} o {{key:Mod+D}} de nuevo mientras una copia sigue al cursor empieza de nuevo. Cuando ha escrito algo en la línea de comandos, o un comando pide texto, estas teclas copian, cortan y pegan ese texto. Vea [Copiar, pegar y duplicar](topic:copy-paste).

## Conmutadores

| Tecla | Conmutador | Botón de la barra de estado |
|---|---|---|
| {{key:F3}} | Referencias a objetos activadas o desactivadas | {{ui:Referencia}} |
| {{key:F7}} | Rejilla activada o desactivada | {{ui:Rejilla}} |
| {{key:F8}} | Orto activado o desactivado | {{ui:Orto}} |
| {{key:F10}} | Rastreo polar activado o desactivado | {{ui:Polar}} |
| {{key:F11}} | Rastreo de referencias a objetos activado o desactivado | {{ui:Rastreo}} |
| {{key:F12}} | Entrada dinámica activada o desactivada | {{ui:Dyn}} |

:::mac
En un Mac, F3, F7 y F8 suelen ser teclas de Control de Misión y de medios. Mantenga pulsada **fn** con ellas, o active las teclas de función estándar en Ajustes del Sistema, como se describe en [Teclas, ratones y trackpads](common:keys). Los botones de la barra de estado siempre funcionan.
:::

:::firefox
F7 en Firefox también puede pedir activar la navegación con cursor. Elija **No**, y use el botón {{ui:Rejilla}} si sigue preguntando.
:::

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abre o cierra esta ayuda, junto al dibujo. Funciona incluso mientras corre un comando, y nunca llega a la línea de comandos. |
| {{key:Esc}} | Con el cursor en el panel de ayuda: borra la búsqueda o cierra el panel |

El botón {{ui:Ayuda}} de la barra superior hace lo mismo que {{key:F1}}. Mientras escribe en el cuadro de búsqueda de la ayuda, nada llega a la línea de comandos. Haga clic en el dibujo para devolver las teclas a CadCraft; el panel sigue abierto junto a él.

:::mac
En un teclado de Mac, mantenga pulsada **fn** y pulse F1, o haga clic en {{ui:Ayuda}}.
:::

## Pantalla

| Tecla | Qué hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Cambia entre normal, pantalla completa y pantalla completa con las barras ocultas. Usa la tecla Control en cualquier equipo, incluido el Mac. |
| {{key:Left}} {{key:Right}} | Con una pestaña bajo el dibujo enfocada: la pestaña anterior o la siguiente |

En pantalla completa, el navegador puede usar la primera {{key:Esc}} para salir de ella. Pulse {{key:Esc}} de nuevo para cancelar un comando.

## Cuadros de diálogo

| Tecla | Qué hace |
|---|---|
| {{key:Esc}} | Cierra el cuadro de diálogo ({{ui:Trazar a PDF}}, o una pregunta como "Cambios sin guardar", donde equivale a {{ui:Cancelar}}) |
| {{key:Tab}} | Se mueve entre los ajustes y los botones del cuadro de diálogo |

Mientras un cuadro de diálogo está abierto, las teclas del dibujo están desactivadas.

## Campos de paneles

En un cuadro del panel derecho o izquierdo:

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | Aplica el valor y sale del cuadro |
| {{key:Esc}} | Devuelve el valor anterior y sale del cuadro |
| {{key:Tab}} | Aplica el valor y pasa al siguiente cuadro |

Mientras un cuadro tiene el cursor, las letras se escriben en él, no en la línea de comandos.

## Ratón

| Acción | Qué hace |
|---|---|
| Clic | Elige un punto cuando un comando lo pide; elige un objeto cuando pide objetos; si no, selecciona un objeto o un pinzamiento |
| Shift+clic | Quita un objeto seleccionado de la selección (con {{ui:Clic en objetos}} en {{ui:Sustituye la selección}} en [Ajustes](topic:settings), lo añade). Mientras elige un punto: ignora las referencias a objetos en ese clic |
| Clic en espacio vacío, y después otro clic | Un recuadro de selección: de izquierda a derecha es una ventana, de derecha a izquierda un cruce |
| Arrastrar sobre espacio vacío | Un lazo: si se mueve primero a la derecha es ventana, si primero a la izquierda es cruce; {{key:Space}} mientras arrastra alterna ventana, cruce y valla; {{key:Esc}} lo suelta (LASSOMODE 0, o Ajustes, lo vuelve a ser rectángulo) |
| Arrastrar a través de piezas en TRIM o EXTEND | Recorta (o extiende) cada pieza que cruza la trayectoria; mantenga {{key:Shift}} para la otra opción |
| Arrastrar un pinzamiento | Mueve el pinzamiento (o haga clic en el pinzamiento, y después donde debe ir) |
| Doble clic en texto | Lo selecciona y pone el cursor en su cuadro {{ui:Texto}} del panel derecho |
| Clic derecho | Intro. Durante un movimiento de pinzamiento o un recuadro de selección: lo cancela |
| Arrastrar con el botón derecho | Desplaza la vista |
| Rueda | Acerca y aleja alrededor de la cruz de puntería |
| Arrastrar con la rueda (botón central) | Desplaza la vista |
| Doble clic en la rueda | Acerca hasta ver todo el dibujo (extensión) |
| Soltar un DWG o DXF sobre el dibujo | Lo abre |

En un trackpad o una pantalla táctil, vea [Ratón, trackpad y táctil](topic:mouse-trackpad-touch).

## Teclas que conserva el navegador

{{key:Mod+N}}, {{key:Mod+W}} y {{key:Mod+T}} siempre pertenecen al navegador. CadCraft no las usa: use {{ui:Nueva}} o escriba `NEW` para un dibujo nuevo. El portapapeles de CadCraft es propio: {{key:Mod+C}} y {{key:Mod+V}} copian objetos entre dibujos y pestañas de CadCraft, no hacia otros programas ni desde ellos.

:::mac
Si {{key:Mod+Y}} abre el historial del navegador en lugar de rehacer, use {{key:Mod+Shift+Z}} o el botón {{ui:Rehacer}}.
:::

## Dónde está Mover

Mover es el comando `MOVE` (tecla {{key:M}}): elija los objetos, y después un punto base y un segundo punto o una distancia escrita. `ALIGN` y `DISTRIBUTE` también están. BimCraft usa los mismos nombres para las mismas tareas sobre elementos de edificación, pero su {{key:M}} es Medir: su Mover es {{key:Shift+M}}.
