---
title: Menús, teclas y mouse
summary: Elegí un estilo de menú que coincida con tu forma de trabajar, dale a cualquier comando tu propia tecla o una tecla que escriba un comando, mové comandos entre pestañas de la cinta, y configurá qué hacen la rueda y los botones del mouse.
keywords: estilo de menú, menús, cinta, barra de herramientas, línea de comandos, atajos de teclado, teclas rápidas, teclas, personalizar, reasignar, atajos, teclas de texto, mouse, rueda, invertir, dirección del zoom, botón central, botón derecho, desplazar, exportar, importar, cambio, familiar, dibujo clásico
from: 8bbf4f88
---

Los comandos de CadCraft son los mismos sea cual sea la forma de llegar a ellos, y la línea de comandos siempre está disponible con sus alias (`L`, `C`, `TR` …). Un **estilo de menú** solo decide dónde van los botones en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elegilo en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtenés |
|---|---|
| {{ui:CadCraft}} | La barra de herramientas propia de CadCraft: Archivo, Dibujar, Modificar, Anotar, Paramétrico, Bloques, Hojas, Editar y Vista, cada una con un menú {{ui:More}}. El punto de partida. |
| {{ui:Drafting classic}} | Una cinta organizada como la de los programas clásicos de dibujo 2D: un menú {{ui:File}} y botones rápidos, luego las pestañas {{ui:Home}} (Dibujar, Modificar, Anotación, Capas, Bloque, Propiedades, Utilidades, Portapapeles), {{ui:Insert}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:View}}, {{ui:Manage}}, {{ui:Output}} y {{ui:3D}}. Escribí los comandos como siempre. El botón central desplaza; un click derecho es {{key:Enter}}, y arrastrar con el botón derecho no hace nada. |
| {{ui:Ribbon}} | Una cinta de pestañas de tareas simples: {{ui:Draw}}, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, {{ui:Sheets}}, {{ui:View}}, {{ui:3D}} y {{ui:Tools}}, con un menú {{ui:File}} y botones rápidos a la derecha. Los botones central y derecho desplazan, como en el estilo propio de CadCraft. |

Todos los estilos mantienen las teclas de CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, y {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para las ayudas de dibujo. Las letras nunca son teclas: CadCraft las escribe en la línea de comandos.

Las cintas también tienen las herramientas del panel de Capas y las ayudas de dibujo de la barra de estado. La pestaña {{ui:3D}} se llena cuando se abre la pestaña 3D debajo del plano; una herramienta 3D elegida en la pestaña Modelo abre primero la pestaña 3D, y una herramienta 2D elegida en la pestaña 3D vuelve primero a la pestaña Modelo.

:::tip
Una tecla que pertenece a la distribución propia de CadCraft pero que tu estilo asignó a otro comando no hace nada, y la barra de estado indica adónde fue su comando ("En Mis teclas, Ortho es Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su significado. Mientras un comando se ejecuta, o mientras se escriben letras en la línea de comandos, las teclas pertenecen a la línea de comandos.
:::

## Hacerlo tuyo

1. Elegí el estilo más cercano a lo que querés, luego hacé click en {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, buscá un comando (la caja de búsqueda ayuda). {{ui:Add a key}} y presioná la tecla. Hacé click en una tecla para quitarla.
3. Con una cinta, {{ui:Where it sits}} mueve el comando a otra pestaña y panel, al menú {{ui:File}}, o a {{ui:Keys only}}.
4. En {{ui:Mouse}}, configurá la rueda y los botones que desplazan el plano.
5. Ponele un nombre y hacé click en {{ui:Save}}.

Guardar un estilo integrado crea tu propia copia ("Mi Dibujo clásico"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y hay que corregirla antes de guardar.

## Teclas que escriben un comando

{{cmd:SHORTCUTS}} (Vista › Más › {{ui:Keyboard shortcuts…}}) le da a una tecla una línea de comando completa, como {{key:Ctrl+Alt+L}} para `LINE` o {{key:F9}} para `ZOOM E`. Estas teclas pertenecen al estilo en uso: la primera vez que se abre esta versión, las teclas que hiciste en una versión anterior se pasan a tu propio estilo "Mis teclas de CadCraft", una sola vez, y siguen funcionando como antes. Exportar el estilo las incluye.

## Mouse

- **Rueda del mouse**: {{ui:Scroll up zooms in}} (el inicio) o {{ui:Scroll up zooms out}}, y qué tan rápido. Un pellizco en el touchpad siempre hace zoom en la dirección en que se mueven los dedos.
- **Desplazar el plano con**: el botón central, el botón derecho, o ambos. Un click derecho sin arrastrar es siempre {{key:Enter}}. El botón izquierdo siempre elige y dibuja en CadCraft, así que marcarlo no cambia nada acá.
- **Arrastrar en las vistas 3D**: la pestaña 3D mantiene sus propios botones en todos los estilos (izquierdo orbita, central y derecho desplazan).

## Llevarlo con vos

{{ui:Export}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Import…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a comandos propios de CadCraft: lo que no lo sea se deja afuera y se cuenta en la barra de estado. {{ui:Delete this style}} quita uno de los tuyos.

:::note
Estos ajustes quedan en este navegador. {{ui:Use this style in every app}} bajo las tarjetas de estilo hace que cada aplicación se abra en su estilo correspondiente (su propia barra de herramientas, una cinta o Dibujo clásico), con los cambios que hiciste en cada una. CadCraft no tiene un estilo de barra de menús: cuando se elige la barra de menús de otra aplicación para todas, CadCraft mantiene su propia barra de herramientas.
:::

Relacionado: [Teclado y mouse](topic:keyboard) · [Configuración de CadCraft](topic:settings) · [Venir desde otro software de dibujo](topic:coming-from) · [Alias de comandos](topic:command-aliases)
