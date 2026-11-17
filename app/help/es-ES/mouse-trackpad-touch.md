---
title: Ratón, panel táctil y pantalla táctil
summary: Cómo hacer zoom, desplazar, hacer clic derecho y seleccionar en CadCraft con un ratón con rueda, un panel táctil de Mac o PC, o una pantalla táctil, y qué cambia según el navegador.
keywords: panel táctil, touchpad, magic mouse, táctil, tableta, ipad, desplazar, zoom, pellizcar, clic derecho, dos dedos, botón central, navegador, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft está diseñado para un ratón con rueda. Todo funciona también con un panel táctil, con algunos hábitos que aprender. Las pantallas táctiles sirven para seleccionar, con limitaciones.

## Ratón con rueda

- **Zoom:** gire la rueda. El dibujo se amplía alrededor de la cruceta, así que apunte a lo que quiere ver.
- **Desplazar:** mantenga pulsada la rueda y arrastre, o arrastre con el botón derecho.
- **Zoom a todo:** haga doble clic en la rueda, o haga clic en {{ui:Extensión}}.
- **Volver a la vista anterior:** haga clic en {{ui:Previa}} en el grupo Vista, o escriba `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Una serie de pasos de rueda cuenta como una sola vista, así que una {{ui:Previa}} la deshace. Guarde las vistas a las que vuelve con {{cmd:NAMEDVIEW}} (`NV`).
- **Intro:** haga clic con el botón derecho.

## Panel táctil

:::mac
- **Desplazar:** mueva dos dedos sobre el panel táctil, en cualquier dirección: el dibujo sigue sus dedos. También puede arrastrar manteniendo pulsado un clic con dos dedos (un arrastre con el botón derecho).
- **Zoom:** pellizque con dos dedos. El zoom sigue a la cruceta.
- **Clic derecho (Intro):** haga clic con dos dedos. Si no hace nada, active "Clic secundario" en **Ajustes del Sistema**, después en **Trackpad**. Control+clic puede contar como un clic normal en CadCraft en lugar de un clic derecho, así que use el clic con dos dedos.
- **Zoom a una zona:** haga clic en {{ui:Ventana}} en el grupo Vista y haga clic en dos esquinas.
:::

:::windows linux
- **Desplazar:** mueva dos dedos sobre el panel táctil, en cualquier dirección: el dibujo sigue sus dedos. También puede arrastrar con el botón derecho mantenido pulsado.
- **Zoom:** pellizque con dos dedos. El zoom sigue a la cruceta.
- **Clic derecho (Intro):** haga clic con dos dedos, o haga clic en la esquina inferior derecha del panel táctil, según los ajustes de su panel.
- **Zoom a una zona:** haga clic en {{ui:Ventana}} en el grupo Vista y haga clic en dos esquinas.
:::

Mantener pulsada {{key:Space}} y arrastrar **no** desplaza en CadCraft: {{key:Space}} es Intro.

Una rueda de ratón sigue haciendo zoom, paso a paso. Un panel táctil que envía su desplazamiento en pasos completos, como una rueda, hace zoom con un desplazamiento de dos dedos en lugar de desplazar el dibujo: aleje el zoom, apunte a la zona que quiere y vuelva a acercarlo. La pestaña 3D mantiene sus propios movimientos con el panel táctil (vea [Modelar en 3D](topic:3d-solids#look-around)).

## Pantallas táctiles y tabletas

CadCraft interpreta un dedo como un clic de ratón:

- Un toque selecciona un punto o un objeto, o elige.
- Arrastrar un dedo sobre un espacio vacío dibuja un lazo: si arrastra primero hacia la derecha, es una ventana; si arrastra primero hacia la izquierda, una ventana de cruce (vea [Selección con lazo](topic:lasso-selection)).
- En {{cmd:TRIM}} y {{cmd:EXTEND}}, arrastrar un dedo sobre las piezas las recorta o las alarga todas.
- Arrastrar un agarre de un objeto seleccionado mueve el agarre (los agarres y la caja de selección son más grandes para un dedo).
- **Pellizque** con dos dedos para hacer zoom alrededor del punto entre ellos; mueva dos dedos juntos para **desplazar**. Un segundo dedo cancela lo que el primero había iniciado, así que un pellizco nunca deja una marca.
- Una **pulsación larga** (mantenga quieto el dedo unos medio segundo) equivale a un clic derecho: {{key:Enter}}. Termina un comando, completa una selección o repite el último comando.

Debajo de la línea de comandos aparece una **fila de teclas**: {{ui:Esc}}, {{ui:Deshacer}}, {{ui:Rehacer}}, los caracteres que un teclado de tableta oculta (`@` `,` `<` `'` `"` `-`), {{ui:Referencia}}, {{ui:Orto}}, un botón de teclado y un {{ui:Intro}} grande. Toque el botón del teclado (o la línea de comandos) para escribir un comando o un número.

No hay previsualización al pasar el dedo: los marcadores de referencia solo aparecen donde está su dedo.

:::touch
Está usando una pantalla táctil. Para algo más que una consulta rápida, un teclado conectado y un ratón o panel táctil hacen que CadCraft sea mucho más fácil de usar.
:::

## Navegadores

CadCraft funciona igual en Chrome, Edge, Firefox y Safari, en Mac, Windows y Linux. Las diferencias son pequeñas:

| Tema | Qué debe saber |
|---|---|
| Abrir un DWG | Los dibujos grandes tardan unos segundos en leerse en cualquier navegador; mientras tanto, la línea de estado muestra "Leyendo …" |
| Descargas | Cada navegador decide dónde van las descargas y si pregunta antes; vea [Navegadores y ordenadores](common:browsers) |
| Abrir para imprimir | Abre el PDF en una pestaña nueva. Si el navegador bloquea las ventanas emergentes, CadCraft descarga el PDF en su lugar |
| F7 | Firefox puede ofrecer navegación con cursor; elija No |
| Salir con cambios sin guardar | Cada navegador muestra su propia pregunta "¿Salir del sitio?", que CadCraft no puede cambiar |

:::safari
En Safari, un PDF abierto con {{ui:Abrir para imprimir}} puede mostrarse en la pestaña sin imprimirse: use **Archivo** y después **Imprimir**.
:::

:::firefox
Firefox puede preguntarle qué hacer con cada descarga. Elija guardar el archivo, o cambie esto una vez en la configuración de Firefox, en Descargas.
:::
