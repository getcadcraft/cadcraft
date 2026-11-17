---
title: Ratón, panel táctil y pantalla táctil
summary: Cómo hacer zoom, encuadrar, hacer clic derecho y designar en CadCraft con un ratón de rueda, un panel táctil de Mac o PC, o una pantalla táctil, y qué cambia entre navegadores.
keywords: panel táctil, touchpad, magic mouse, táctil, tableta, ipad, encuadre, zoom, pellizco, clic derecho, dos dedos, botón central, navegador, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft está diseñado para un ratón con rueda. Todo también funciona con un panel táctil, con algunos hábitos que aprender. Las pantallas táctiles sirven para designar, con límites.

## Ratón con rueda

- **Zoom:** gire la rueda. El dibujo hace zoom alrededor de la cruceta, así que apunte a lo que quiere ver.
- **Encuadre:** mantenga presionada la rueda y arrastre, o arrastre con el botón derecho.
- **Zoom a todo:** haga doble clic en la rueda, o haga clic en {{ui:Extensión}}.
- **Volver a la vista anterior:** haga clic en {{ui:Previo}} en el grupo Vista, o escriba `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Una serie de pasos de la rueda cuenta como una sola vista, así que un {{ui:Previo}} la deshace. Guarde las vistas a las que vuelve con {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** haga clic derecho.

## Panel táctil

:::mac
- **Encuadre:** mueva dos dedos sobre el panel táctil, en cualquier dirección: el dibujo sigue sus dedos. También puede arrastrar con un clic de dos dedos mantenido (un arrastre con el botón derecho).
- **Zoom:** pellizque con dos dedos. El zoom sigue a la cruceta.
- **Clic derecho (Enter):** haga clic con dos dedos. Active "Clic secundario" en **Ajustes del Sistema**, luego **Trackpad**, si no hace nada. El control-clic puede contar como un clic normal en CadCraft en vez de clic derecho, así que use el clic de dos dedos.
- **Zoom a un área:** haga clic en {{ui:Ventana}} en el grupo Vista y haga clic en dos esquinas.
:::

:::windows linux
- **Encuadre:** mueva dos dedos sobre el panel táctil, en cualquier dirección: el dibujo sigue sus dedos. También puede arrastrar con el botón derecho mantenido.
- **Zoom:** pellizque con dos dedos. El zoom sigue a la cruceta.
- **Clic derecho (Enter):** haga clic con dos dedos, o haga clic en la esquina inferior derecha del panel táctil, según la configuración de su panel.
- **Zoom a un área:** haga clic en {{ui:Ventana}} en el grupo Vista y haga clic en dos esquinas.
:::

Mantener {{key:Space}} y arrastrar **no** encuadra en CadCraft: {{key:Space}} es Enter.

Una rueda de ratón sigue haciendo zoom, un paso a la vez. Un panel táctil que envía su desplazamiento en pasos completos, como lo hace una rueda, hace zoom con desplazamiento de dos dedos en vez de encuadrar: aleje el zoom, apunte a la zona que quiere y acerque de nuevo. La pestaña 3D conserva sus propios movimientos de panel táctil (vea [Modelo en 3D](topic:3d-solids#look-around)).

## Pantallas táctiles y tabletas

CadCraft interpreta un dedo como un clic de ratón:

- Un toque designa un punto o un objeto, o selecciona.
- Arrastrar un dedo sobre un espacio vacío dibuja un lazo: si primero va hacia la derecha, una ventana; si primero va hacia la izquierda, una captura (vea [Selección con lazo](topic:lasso-selection)).
- En {{cmd:TRIM}} y {{cmd:EXTEND}}, arrastrar un dedo sobre las piezas las recorta o alarga todas.
- Arrastrar el pinzamiento de un objeto seleccionado mueve el pinzamiento (los pinzamientos y la caja de designación son más grandes para un dedo).
- **Pellizque** con dos dedos para hacer zoom alrededor del punto entre ellos; mueva dos dedos juntos para **encuadrar**. Un segundo dedo cancela lo que comenzó el primero, así que un pellizco nunca deja una marca.
- Una **pulsación prolongada** (mantenga quieto unos medio segundo) es un clic derecho: {{key:Enter}}. Termina un comando, completa una selección o repite el último comando.

Debajo de la línea de comandos aparece una **fila de teclas**: {{ui:Esc}}, {{ui:Deshacer}}, {{ui:Rehacer}}, los caracteres que oculta el teclado de una tableta (`@` `,` `<` `'` `"` `-`), {{ui:Referencia}}, {{ui:Orto}}, un botón de teclado y un {{ui:Enter}} grande. Toque el botón de teclado (o la línea de comandos) para escribir un comando o un número.

Sin puntero sobre la pantalla, los marcadores de referencia solo aparecen donde está su dedo.

:::touch
Está usando una pantalla táctil. Para algo más que una vista rápida, un teclado conectado y un ratón o panel táctil hacen que CadCraft sea mucho más fácil de usar.
:::

## Navegadores

CadCraft funciona igual en Chrome, Edge, Firefox y Safari, en Mac, Windows y Linux. Las diferencias son pequeñas:

| Tema | Qué debe saber |
|---|---|
| Abrir un DWG | Los dibujos grandes tardan unos segundos en leerse en cualquier navegador; mientras tanto, la barra de estado muestra "Leyendo …" |
| Descargas | Cada navegador decide dónde van las descargas y si pregunta antes; vea [Navegadores y computadoras](common:browsers) |
| Abrir para imprimir | Abre el PDF en una pestaña nueva. Si el navegador bloquea las ventanas emergentes, CadCraft descarga el PDF en su lugar |
| F7 | Firefox puede ofrecer navegación con cursor; elija No |
| Salir con cambios sin guardar | Cada navegador muestra su propia pregunta "¿Salir del sitio?", que CadCraft no puede cambiar |

:::safari
En Safari, un PDF abierto con {{ui:Abrir para imprimir}} puede mostrarse en la pestaña sin imprimirse: use **Archivo** y luego **Imprimir**.
:::

:::firefox
Firefox puede preguntar qué hacer con cada descarga. Elija guardar el archivo, o cambie esto una vez en la configuración de Firefox, en Descargas.
:::
