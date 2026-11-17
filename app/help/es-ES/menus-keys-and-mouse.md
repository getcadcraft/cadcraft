---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que encaje con su forma de trabajar, asigne a cualquier comando su propia tecla o una tecla que escriba un comando, mueva comandos entre pestañas de la cinta y defina qué hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, cinta, barra de herramientas, línea de comandos, atajos de teclado, teclas rápidas, teclas, personalizar, reasignar, atajos, teclas de texto, ratón, rueda, invertir, sentido del zoom, botón central, botón derecho, desplazar, exportar, importar, cambiar, familiar, dibujo clásico
from: 8bbf4f88
---

Los comandos de CadCraft son los mismos sea cual sea la forma de llegar a ellos, y la línea de comandos siempre está disponible con sus alias (`L`, `C`, `TR` …). Un **estilo de menú** solo decide dónde están los botones en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elíjalo en {{ui:Parámetros}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:CadCraft}} | La barra propia de CadCraft: Archivo, Dibujo, Modificar, Anotar, Paramétrico, Bloques, Hojas, Editar y Vista, cada uno con un menú {{ui:Más}}. El punto de partida. |
| {{ui:Dibujo clásico}} | Una cinta dispuesta como la de los programas clásicos de dibujo 2D: un menú {{ui:Archivo}} y botones rápidos, y luego las pestañas {{ui:Inicio}} (Dibujo, Modificar, Anotación, Capas, Bloque, Propiedades, Utilidades, Portapapeles), {{ui:Insertar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Vista}}, {{ui:Administrar}}, {{ui:Salida}} y {{ui:3D}}. Escriba los comandos como siempre. El botón central desplaza; un clic derecho es {{key:Enter}}, y arrastrar con el botón derecho no hace nada. |
| {{ui:Cinta}} | Una cinta de pestañas de tareas sencillas: {{ui:Dibujo}}, {{ui:Modificar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Bloques}}, {{ui:Hojas}}, {{ui:Vista}}, {{ui:3D}} y {{ui:Herramientas}}, con un menú {{ui:Archivo}} y botones rápidos a la derecha. Los botones central y derecho desplazan, como en el estilo propio de CadCraft. |

Todos los estilos mantienen las teclas de CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, y {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para las ayudas de dibujo. Las letras nunca son teclas: CadCraft las escribe en la línea de comandos.

Las cintas también contienen las herramientas del panel Capas y las ayudas de dibujo de la barra de estado. La pestaña {{ui:3D}} se llena una vez abierta la pestaña 3D bajo el dibujo; una herramienta 3D elegida en la pestaña Modelo abre antes la pestaña 3D, y una herramienta 2D elegida en la pestaña 3D vuelve antes a la pestaña Modelo.

:::tip
Una tecla que pertenece a la distribución propia de CadCraft, pero que su estilo asignó a otro comando, no hace nada, y la barra de estado indica adónde fue su comando ("En Mis teclas, Orto es Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas conservan siempre su significado. Mientras se ejecuta un comando, o mientras se escriben letras en la línea de comandos, las teclas pertenecen a la línea de comandos.
:::

## Hágalo a su medida

1. Elija el estilo más cercano a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Use {{ui:Añadir una tecla}} y pulse la tecla. Haga clic en una tecla para quitarla.
3. Con una cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y otro panel, al menú {{ui:Archivo}}, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda y los botones que desplazan el dibujo.
5. Dé un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su copia propia ("Mi Dibujo clásico"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y debe corregirse antes de poder guardar.

## Teclas que escriben un comando

{{cmd:SHORTCUTS}} (Vista › Más › {{ui:Atajos de teclado…}}) asigna a una tecla una línea de comando completa, como {{key:Ctrl+Alt+L}} para `LINE` o {{key:F9}} para `ZOOM E`. Estas teclas pertenecen al estilo en uso: la primera vez que se abre esta versión, las teclas que creó en una versión anterior pasan una sola vez a su estilo propio "Mis teclas de CadCraft", y funcionan como antes. Exportar el estilo las incluye.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el de inicio) o {{ui:Girar hacia arriba aleja}}, y a qué velocidad. Un pellizco en el panel táctil siempre hace zoom en el sentido en que se mueven sus dedos.
- **Desplazar el dibujo con**: el botón central, el botón derecho, o ambos. Un clic derecho sin arrastrar es siempre {{key:Enter}}. El botón izquierdo siempre elige y dibuja en CadCraft, así que marcarlo no cambia nada aquí.
- **Arrastrar en las vistas 3D**: la pestaña 3D mantiene sus propios botones en todos los estilos (el izquierdo orbita; el central y el derecho desplazan).

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, de otro equipo o de un colega. Un archivo importado solo puede apuntar a los comandos propios de CadCraft: lo demás se deja fuera y se cuenta en la barra de estado. {{ui:Borrar este estilo}} quita uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}} bajo las tarjetas de estilo hace que cada aplicación se abra con su estilo equivalente (su propia barra, una cinta o Dibujo clásico), con los cambios que hizo en cada una. CadCraft no tiene un estilo de barra de menús: cuando se elige para todas las aplicaciones la barra de menús de otra aplicación, CadCraft conserva su propia barra.
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Parámetros de CadCraft](topic:settings) · [Procedente de otro software de dibujo](topic:coming-from) · [Alias de comandos](topic:command-aliases)
