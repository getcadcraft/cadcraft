---
title: Teclado y mouse
summary: Cada tecla, acción de mouse y tecla de línea de comando de la aplicación de dibujo CadCraft, tal como las maneja el código.
keywords: teclado, atajos, teclas, mouse, rueda, desplazar, zoom, clic derecho, botón central, f3, f7, f8, ctrl, tecla de comando, teclas rápidas, copiar, cortar, pegar, duplicar, portapapeles, seleccionar todo
from: a2608a29
---

Atajos se muestran para su computadora. En Mac, cada atajo {{key:Mod}} de abajo usa la tecla Command, y la tecla Control también funciona. Cómo se escriben las teclas, y cómo usar las teclas F en Mac, está en [Teclas, mouse y trackpads](common:keys).

## Escribir comandos

| Tecla | Qué hace |
|---|---|
| Cualquier letra, número o símbolo | Va a la línea de comando, donde esté el puntero, salvo que una caja de un panel tenga el cursor |
| {{key:Enter}} | Envía lo escrito. En un aviso vacío: repite el último comando, termina un comando, termina una selección, o acepta el valor predeterminado en `<…>` |
| {{key:Space}} | Igual que {{key:Enter}}, salvo cuando CadCraft pide texto (texto, nombres de bloque, texto de cota), donde escribe un espacio |
| {{key:Esc}} | Cancela el comando. Sin comando en curso: cancela un movimiento de agarre o un cuadro de selección, luego borra la selección |
| {{key:Tab}} | Acepta el comando sugerido que aparece a la derecha de la línea de comando. Sin nada escrito y con el puntero sobre objetos superpuestos: resalta el siguiente allí (clic para elegirlo) |
| {{key:Up}} {{key:Down}} | Recorre las líneas escritas antes (las últimas 100) |

## Dibujar y editar

| Tecla | Qué hace |
|---|---|
| {{key:Mod+Z}} | Deshace el último comando |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |
| {{key:Mod+A}} | Selecciona todos los objetos editables de la pestaña abierta ({{cmd:SELECTALL}}). Si escribió algo en la línea de comando, selecciona ese texto |
| {{key:Delete}} | Borra los objetos seleccionados ({{cmd:ERASE}}), salvo que haya escrito algo en la línea de comando |
| {{key:Backspace}} | Borra los objetos seleccionados cuando la línea de comando no tiene el cursor; en la línea de comando borra lo escrito |
| {{key:Esc}} | Sin comando en curso: borra la selección ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Guarda una copia en el formato del plano (DWG o DXF) |
| {{key:Mod+Shift+S}} | Guardar como: elija DWG o DXF, luego guarde una copia |
| {{key:Mod+O}} | Abre un DWG o DXF |
| {{key:Mod+P}} | Traza a PDF |

Deshacer, rehacer, seleccionar todo y trazar no hacen nada mientras un comando está en curso: primero presione {{key:Esc}}.

## Copiar, cortar y pegar

| Tecla | Qué hace |
|---|---|
| {{key:Mod+C}} | Copia la selección al portapapeles ({{cmd:COPYCLIP}}). Sin nada seleccionado: CadCraft pide objetos |
| {{key:Mod+X}} | Cortar: copia la selección y luego la borra ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Pegar: la copia sigue al cursor; haga clic, o escriba un punto, para colocarla ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar: en las coordenadas desde donde se copió ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicar: una copia de la selección se mueve con el puntero; haga clic para colocarla, {{key:Esc}} no deja nada ({{cmd:DUPLICATE}}) |

Las mismas acciones están en el grupo {{ui:Editar}} de la barra de herramientas ({{ui:Copiar}}, {{ui:Pegar}}) y en su menú {{ui:Más}}. Mientras otro comando está en curso, termínelo o presione {{key:Esc}} primero; presionar {{key:Mod+V}} o {{key:Mod+D}} otra vez mientras una copia sigue al cursor empieza de nuevo. Cuando escribió algo en la línea de comando, o un comando pide texto, estas teclas copian, cortan y pegan ese texto. Vea [Copiar, pegar y duplicar](topic:copy-paste).

## Interruptores

| Tecla | Interruptor | Botón de la barra de estado |
|---|---|---|
| {{key:F3}} | Ajuste a objetos activado o desactivado | {{ui:Ajustar}} |
| {{key:F7}} | Cuadrícula activada o desactivada | {{ui:Cuadrícula}} |
| {{key:F8}} | Ortogonal activado o desactivado | {{ui:Ortogonal}} |
| {{key:F10}} | Rastreo polar activado o desactivado | {{ui:Polar}} |
| {{key:F11}} | Rastreo de ajuste a objetos activado o desactivado | {{ui:Rastreo}} |
| {{key:F12}} | Entrada dinámica activada o desactivada | {{ui:Dyn}} |

:::mac
En Mac, F3, F7 y F8 suelen ser Mission Control y teclas multimedia. Mantenga **fn** junto con ellas, o active las teclas de función estándar en Configuración del sistema, como se describe en [Teclas, mouse y trackpads](common:keys). Los botones de la barra de estado siempre funcionan.
:::

:::firefox
F7 en Firefox también puede pedir activar la navegación con cursor. Elija **No**, y use el botón {{ui:Cuadrícula}} si sigue preguntando.
:::

## Ayuda

| Tecla | Qué hace |
|---|---|
| {{key:F1}} | Abre o cierra esta ayuda, junto al plano. Funciona aunque haya un comando en curso, y nunca llega a la línea de comando. |
| {{key:Esc}} | Con el cursor en el panel de ayuda: borra la búsqueda, o cierra el panel |

El botón {{ui:Ayuda}} de la barra superior hace lo mismo que {{key:F1}}. Mientras escribe en la caja de búsqueda de la ayuda, nada llega a la línea de comando. Haga clic en el plano para devolver las teclas a CadCraft; el panel queda abierto junto a él.

:::mac
En un teclado Mac, mantenga **fn** y presione F1, o haga clic en {{ui:Ayuda}}.
:::

## Pantalla

| Tecla | Qué hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Cambia entre normal, pantalla completa y pantalla completa con las barras ocultas. Usa la tecla Control en todas las computadoras, incluida Mac. |
| {{key:Left}} {{key:Right}} | Con una pestaña debajo del plano enfocada: la pestaña anterior o siguiente |

En pantalla completa, el navegador puede usar el primer {{key:Esc}} para salir de ella. Presione {{key:Esc}} otra vez para cancelar un comando.

## Diálogos

| Tecla | Qué hace |
|---|---|
| {{key:Esc}} | Cierra el diálogo ({{ui:Trazar a PDF}}, o una pregunta como "Cambios sin guardar", donde significa {{ui:Cancelar}}) |
| {{key:Tab}} | Se mueve entre las opciones y los botones del diálogo |

Mientras un diálogo está abierto, las teclas del plano están desactivadas.

## Campos del panel

En una caja del panel derecho o izquierdo:

| Tecla | Qué hace |
|---|---|
| {{key:Enter}} | Aplica el valor y sale de la caja |
| {{key:Esc}} | Devuelve el valor anterior y sale de la caja |
| {{key:Tab}} | Aplica y pasa a la siguiente caja |

Mientras una caja tiene el cursor, las letras se escriben allí, no en la línea de comando.

## Mouse

| Acción | Qué hace |
|---|---|
| Clic | Elige un punto cuando un comando lo pide; elige un objeto cuando pide objetos; de otro modo selecciona un objeto, o un agarre |
| Mayús+clic | Quita un objeto seleccionado de la selección (con {{ui:Al hacer clic en objetos}} en {{ui:Reemplaza la selección}} en [Configuración](topic:settings): lo agrega). Mientras elige un punto: ignora los ajustes a objetos para ese clic |
| Clic en espacio vacío, luego otro clic | Un cuadro de selección: de izquierda a derecha es una ventana, de derecha a izquierda un cruce |
| Arrastrar en espacio vacío | Lazo: moverse primero a la derecha es una ventana, primero a la izquierda un cruce; {{key:Space}} mientras arrastra cambia entre ventana, cruce y valla; {{key:Esc}} lo suelta (LASSOMODE 0, o Configuración, lo vuelve rectángulo otra vez) |
| Arrastrar por piezas en TRIM o EXTEND | Recorta (o extiende) cada pieza que cruza la trayectoria; mantenga {{key:Shift}} para la otra opción |
| Arrastrar un agarre | Mueve el agarre (o haga clic en el agarre, luego clic donde irá) |
| Doble clic en texto | Lo selecciona y pone el cursor en su caja {{ui:Texto}} del panel derecho |
| Clic derecho | Enter. Durante un movimiento de agarre o un cuadro de selección: lo cancela |
| Arrastrar con el botón derecho | Desplaza |
| Rueda | Acerca y aleja alrededor del crosshair |
| Arrastrar con la rueda (botón central) | Desplaza |
| Doble clic en la rueda | Hace zoom a todo el plano (extensiones) |
| Soltar un DWG o DXF en el plano | Lo abre |

En trackpad o pantalla táctil, vea [Mouse, trackpad y táctil](topic:mouse-trackpad-touch).

## Teclas que mantiene el navegador

{{key:Mod+N}}, {{key:Mod+W}} y {{key:Mod+T}} siempre son del navegador. CadCraft no las usa: use {{ui:Nueva}} o escriba `NEW` para un plano nuevo. El portapapeles de CadCraft es propio: {{key:Mod+C}} y {{key:Mod+V}} copian objetos entre planos y pestañas de CadCraft, no hacia ni desde otros programas.

:::mac
Si {{key:Mod+Y}} abre el historial del navegador en lugar de rehacer, use {{key:Mod+Shift+Z}} o el botón {{ui:Rehacer}}.
:::

## Dónde está Mover

Mover es el comando `MOVE` (tecla {{key:M}}): elija los objetos, luego un punto base y un segundo punto o una distancia escrita. `ALIGN` y `DISTRIBUTE` también existen. BimCraft usa los mismos nombres para las mismas tareas en elementos de edificio, pero su {{key:M}} es Medir: su Mover es {{key:Shift+M}}.
