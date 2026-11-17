---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que coincida con su forma de trabajar, asigne su propia tecla a cualquier comando o una tecla que escriba un comando, mueva comandos entre pestañas de la cinta y defina qué hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, cinta, barra de herramientas, línea de comandos, atajos de teclado, teclas rápidas, teclas, personalizar, reasignar, atajos, teclas de texto, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, encuadre, exportar, importar, cambiar, familiar, dibujo clásico
from: 8bbf4f88
---

Los comandos de CadCraft son los mismos sin importar por dónde se llamen, y la línea de comandos siempre está disponible con sus alias (`L`, `C`, `TR` …). Un **estilo de menú** solo decide dónde están los botones en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elíjalo en {{ui:Parámetros}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:CadCraft}} | La barra de herramientas propia de CadCraft: Archivo, Dibujo, Modificar, Anotar, Paramétrico, Bloques, Hojas, Editar y Vista, cada una con un menú {{ui:Más}}. El punto de partida. |
| {{ui:Dibujo clásico}} | Una cinta dispuesta como los programas clásicos de dibujo 2D disponen la suya: un menú {{ui:Archivo}} y botones rápidos, luego las pestañas {{ui:Inicio}} (Dibujo, Modificar, Anotación, Capas, Bloque, Propiedades, Utilidades, Portapapeles), {{ui:Insertar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Vista}}, {{ui:Administrar}}, {{ui:Salida}} y {{ui:3D}}. Escriba los comandos como siempre. El botón central encuadra; un clic derecho es {{key:Enter}}, y arrastrar con el botón derecho no hace nada. |
| {{ui:Cinta}} | Una cinta de pestañas de tarea sencillas: {{ui:Dibujo}}, {{ui:Modificar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Bloques}}, {{ui:Hojas}}, {{ui:Vista}}, {{ui:3D}} y {{ui:Herramientas}}, con un menú {{ui:Archivo}} y botones rápidos a la derecha. Los botones central y derecho encuadran, como en el estilo propio de CadCraft. |

Todos los estilos conservan las teclas de CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, y {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para las ayudas de dibujo. Las letras nunca son teclas: CadCraft las escribe en la línea de comandos.

Las cintas también contienen las herramientas del panel Capas y las ayudas de dibujo de la barra de estado. La pestaña {{ui:3D}} se llena una vez que se abrió la pestaña 3D bajo el dibujo; una herramienta 3D elegida en la pestaña Modelo abre primero la pestaña 3D, y una herramienta 2D elegida en la pestaña 3D vuelve primero a la pestaña Modelo.

:::tip
Una tecla que pertenece al diseño propio de CadCraft pero que su estilo asignó a otro comando no hace nada, y la barra de estado indica adónde fue a parar su comando ("En Mis teclas, Ortho es Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su significado. Mientras un comando se ejecuta, o mientras se escriben letras en la línea de comandos, las teclas pertenecen a la línea de comandos.
:::

## Hágalo suyo

1. Elija el estilo más cercano a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Agregar una tecla}} y presione la tecla. Haga clic en una tecla para quitarla.
3. Con una cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y panel, al menú {{ui:Archivo}}, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda y los botones que encuadran el dibujo.
5. Dele un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia ("Mi Dibujo clásico"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y debe corregirse antes de poder guardar.

## Teclas que escriben un comando

{{cmd:SHORTCUTS}} (Vista › Más › {{ui:Atajos de teclado…}}) asigna a una tecla una línea de comandos completa, como {{key:Ctrl+Alt+L}} para `LINE` o {{key:F9}} para `ZOOM E`. Estas teclas pertenecen al estilo en uso: la primera vez que esta versión se abre, las teclas que creó en una versión anterior pasan, una sola vez, a su estilo "Mis teclas de CadCraft", y funcionan como antes. Exportar el estilo las incluye.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el inicio) o {{ui:Girar hacia arriba aleja}}, y qué tan rápido. Un pellizco en el panel táctil siempre hace zoom en la dirección en que se mueven sus dedos.
- **Encuadrar el dibujo con**: el botón central, el derecho, o ambos. Un clic derecho sin arrastrar siempre es {{key:Enter}}. El botón izquierdo siempre elige y dibuja en CadCraft, así que marcarlo no cambia nada aquí.
- **Arrastrar en las vistas 3D**: la pestaña 3D mantiene sus propios botones en todos los estilos (el izquierdo orbita; el central y el derecho encuadran).

## Llévelo con usted

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de CadCraft: lo demás se omite y se cuenta en la barra de estado. {{ui:Eliminar este estilo}} quita uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las apps}} bajo las tarjetas de estilo hace que cada app se abra en su estilo correspondiente (su propia barra de herramientas, una cinta o Dibujo clásico), con los cambios que hizo en cada app. CadCraft no tiene un estilo de barra de menús: cuando se elige la barra de menús de otra app para todas las apps, CadCraft conserva su propia barra de herramientas.
:::

Relacionados: [Teclado y ratón](topic:keyboard) · [Parámetros de CadCraft](topic:settings) · [Desde otro software de dibujo](topic:coming-from) · [Alias de comandos](topic:command-aliases)
