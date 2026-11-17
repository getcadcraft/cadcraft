---
title: Modelar en 3D
summary: Vea el dibujo en 3D en la pestaña 3D y cree sólidos sencillos a partir de él: extruir (con conicidad o a lo largo de una trayectoria), revolucionar, empujar y tirar de caras, cajas, cilindros y cuñas, unir, restar e intersecar sólidos, luego mover, copiar, girar y borrar, y colocar vistas planas 2D de ellos en una hoja.
keywords: 3d, tres d, sólido, sólidos, 3dsolid, región, cuerpo, acis, sat, sab, sólidos de otros programas, abrir dibujo 3D, extrude, ext, revolve, rev, sweep, conicidad, trayectoria, presspull, presionar tirar, empujar tirar, box, cylinder, cyl, wedge, 3dorbit, orbitar, vista, vscurrent, estilo visual, sombreado, línea oculta, alambre, rayos x, xray, iso, perspectiva, paralela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo de vistas, union, uni, subtract, su, intersect, in, booleana, combinar, unir sólidos, viewbase, flatshot, vista plana, vista 2D, vista de dibujo, vista de alzado, vista en planta, vista lateral, líneas ocultas
from: 13060e71
---

## Qué va a crear

Una huella de habitación de 1000 × 600 extruida hasta formar un bloque de 400 de altura, una cara elevada y un cilindro al lado; después guardará el modelo con el dibujo y lo exportará a un visor 3D o a una impresora.

La pestaña {{ui:3D}} está junto a {{ui:Modelo}}, debajo del dibujo. Muestra el dibujo del espacio modelo tendido sobre el suelo, con los colores de sus capas (las capas desactivadas o inutilizadas permanecen ocultas), y los sólidos que cree. La primera vez que se abre, la vista 3D se carga; después cambia al instante.

## Extruir una forma

1. En la pestaña {{ui:Modelo}}, escriba `REC` y pulse {{key:Enter}}. Escriba `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Haga clic en la pestaña {{ui:3D}}. La barra de herramientas muestra el grupo {{ui:3D}} en lugar de los grupos de dibujo.
3. Haga clic en {{ui:Extruir}} (o escriba {{cmd:EXTRUDE}}, `EXT`). Haga clic dentro del rectángulo y pulse {{key:Enter}}.
4. Escriba `400` y pulse {{key:Enter}}. El historial indica "Extruido 1 sólido, altura 400" con su volumen.

Se extruyen las polilíneas cerradas (incluidos los arcos), los rectángulos, los polígonos, los círculos y las elipses. Las líneas y las polilíneas abiertas no se extruyen, y el historial indica el motivo. También puede seleccionar primero las formas en la pestaña {{ui:Modelo}} y escribir `EXTRUDE` allí. En lugar de escribir la altura, puede indicarla con un clic: el contorno sigue al cursor hacia arriba y hacia abajo. Una altura negativa baja. Escriba `D` en la solicitud de altura para borrar las formas 2D después de extruir (`D` de nuevo las conserva).

En la solicitud de altura, `T` (ángulo de conicidad) pide un ángulo en grados: los lados se inclinan ese valor, de modo que la parte superior es más pequeña (un ángulo negativo la hace mayor). Un ángulo demasiado pronunciado para la forma se rechaza. `P` (trayectoria) barre las formas a lo largo de una trayectoria en lugar de extruirlas (véase más abajo).

## Revolucionar y barrer

- {{cmd:REVOLVE}} (`REV`, o {{ui:Más}} › {{ui:Revolución alrededor de un eje}}): seleccione formas cerradas, pulse {{key:Enter}} y después haga clic en los dos extremos del eje (o escriba `X` o `Y` para el eje del dibujo que pasa por 0,0). A continuación escriba un ángulo, o pulse {{key:Enter}} para una vuelta completa. La forma gira alrededor del eje y se levanta sobre el suelo: dibuje la mitad del contorno de un jarrón junto a una línea y revolucione la forma alrededor de esa línea. La forma puede tocar el eje, pero no cruzarlo. Una vuelta completa tiene 48 pasos.
- {{cmd:SWEEP}} (o {{ui:Más}} › {{ui:Barrido a lo largo de un camino}}, o `P` en la solicitud de altura de EXTRUDE): seleccione formas cerradas (el perfil), pulse {{key:Enter}} y después haga clic en la trayectoria: una línea, polilínea, arco, círculo o elipse. El perfil se levanta atravesando la trayectoria, con su centro sobre ella, y avanza a lo largo de ella. Las esquinas se unen a inglete, y una trayectoria cerrada crea un anillo. Un rectángulo pequeño barrido a lo largo del contorno de una habitación crea un rodapié; un círculo a lo largo de una polilínea crea una tubería.

## Empujar y tirar de una cara

1. Haga clic en {{ui:Presionar/tirar}} (o escriba {{cmd:PRESSPULL}}).
2. Haga clic en la cara superior del bloque.
3. Escriba `100` y pulse {{key:Enter}}, o mueva el cursor y haga clic. El bloque mide 500 de altura.

## Cajas, cilindros y cuñas

- {{cmd:BOX}}: haga clic o escriba dos esquinas, y después una altura.
- {{cmd:CYLINDER}} (`CYL`): el centro, el radio y después una altura. Los cilindros y los círculos extruidos tienen 48 lados, con sombreado suave.
- {{cmd:WEDGE}} (`WE`): dos esquinas y una altura. Tiene la altura completa en la primera esquina y desciende hasta cero en la otra.

En la pestaña 3D, un clic cae sobre la cara o arista bajo el cursor; si no hay ninguna, cae sobre el suelo. Así, una caja puede apoyarse en otro sólido.

## Mover, copiar, girar y borrar sólidos

En la pestaña 3D, un clic selecciona un sólido. Arrastre de izquierda a derecha para una ventana, y de derecha a izquierda para un cruce. Después:

- {{cmd:MOVE}}: haga clic en un punto base y en el punto de destino, o escriba `<100,0,0>` (o `@100,0`) para una distancia a lo largo de X, Y y Z.
- {{cmd:COPY}}: lo mismo, dejando el original.
- {{cmd:ROTATE}}: escriba un ángulo (gira alrededor del centro de la selección, en torno a Z), o haga clic en el centro, en un punto inicial y después indique el ángulo.
- {{cmd:ERASE}} o {{key:Delete}}.

## Unir, restar e intersecar sólidos

Abra {{ui:Más}} en la barra de herramientas 3D, o escriba el comando:

- {{cmd:UNION}} (`UNI`): seleccione los sólidos y pulse {{key:Enter}}: se convierten en un solo sólido.
- {{cmd:SUBTRACT}} (`SU`): seleccione los sólidos que desea conservar y pulse {{key:Enter}}; después, los que desea quitar y pulse {{key:Enter}} de nuevo. Para un agujero pasante en un bloque: dibuje un cilindro que lo atraviese y después reste el cilindro.
- {{cmd:INTERSECT}} (`IN`): seleccione los sólidos y pulse {{key:Enter}}: solo queda lo que tienen en común.

El historial indica el volumen del resultado. Cada operación es un paso de deshacer. La primera que ejecute carga el motor booleano 3D (unos 0,5 MB; incluido en {{ui:Guardar para uso sin conexión}}). Solo se pueden combinar sólidos cerrados: un sólido con aristas abiertas (procedente de caras 3D sueltas de otro programa) se rechaza, y el historial indica el motivo. El resultado es un solo sólido; las caras curvas siguen formadas por facetas planas, como ocurría con el cilindro.

Haga doble clic en un sólido para editar sus caras y aristas por separado; {{key:Esc}} lo cierra. Cada cambio 3D es un paso de deshacer en el mismo historial que el dibujo: {{key:Mod+Z}} deshace lo último que hizo en cualquiera de las dos pestañas.

## Vistas planas en una hoja

1. Abra una pestaña de hoja (o permanezca en {{ui:Modelo}}) y escriba {{cmd:VIEWBASE}} (o `FLATSHOT`).
2. Elija la vista: {{key:Enter}} para el alzado, o `T` (planta), `R` (derecha), `L` (izquierda), `BA` (posterior), `BO` (inferior), `I` (isométrica).
3. {{key:Enter}} muestra las líneas ocultas, discontinuas; `H` las omite.
4. {{key:Enter}} adopta la escala que sugiere CadCraft: en una hoja, la mayor escala normalizada (por ejemplo 1:20) con la que la vista cabe en menos de la mitad del papel. O escriba una: `1:50`, `2:1`.
5. Haga clic, o escriba, dónde va el centro de la vista.

La vista es una referencia de bloque, `VIEW-FRONT-1` y así sucesivamente: las aristas visibles están en la capa VIEW-VISIBLE (0,5 mm), y las ocultas en VIEW-HIDDEN (discontinuas, 0,25 mm). Muévala, acótela y trácela como cualquier otro dibujo. Es una imagen de los sólidos en el momento en que la creó: después de cambiarlos, borre la vista y vuelva a ejecutar {{cmd:VIEWBASE}}. Para más vistas, ejecútelo una vez por cada vista.

## Mirar alrededor

Arrastre con la rueda para orbitar, {{key:Shift}} + arrastre con la rueda o con el botón derecho para desplazar, y gire la rueda para acercar en el cursor. En un panel táctil, dos dedos orbitan y un pellizco hace zoom. Un clic derecho sin arrastrar equivale a {{key:Enter}}, como en las demás pestañas. 3DORBIT permite orbitar con el botón izquierdo hasta que pulse {{key:Enter}} o {{key:Esc}}.

- {{ui:Vistas}} (o {{cmd:VIEW}}): Isométrica, Planta, Inferior, Alzado, Posterior, Izquierda, Derecha, Perspectiva o Paralela, y Zoom a todo.
- {{ui:Estilo}} (o {{cmd:VSCURRENT}}, `VS`): Sombreado, Sombreado con aristas, Línea oculta, Alambre o Rayos X.

Los puntos en los que hace clic se ajustan a los sólidos (esquinas, aristas, caras) y al dibujo 2D del suelo: los extremos y los puntos medios de sus líneas y arcos, y los puntos a lo largo de ellos. Las líneas 2D nunca se seleccionan en la pestaña 3D. Cuando un comando pide objetos 2D (EXTRUDE, REVOLVE, SWEEP), un clic elige uno, un arrastre de izquierda a derecha toma lo que queda completamente dentro de la ventana, y un arrastre de derecha a izquierda toma lo que cruza, como en la pestaña {{ui:Modelo}}.

Un cubo de vistas se sitúa en la esquina superior derecha de la pestaña 3D: haga clic en una cara, arista o esquina para mirar desde allí, arrástrelo para orbitar, y el botón de casa vuelve a la vista isométrica. Eso es {{ui:Automática}}, la primera opción de {{ui:Indicador de esquina}} en [Ajustes de CadCraft](topic:settings). Con {{ui:Cubo de vistas}} seleccionado, la pestaña {{ui:Modelo}} también muestra un cubo, mirando desde arriba; al hacer clic en cualquier otra cara se abre la pestaña 3D mirando desde allí. Con {{ui:Icono de ejes}}, ambas pestañas muestran el marcador de ejes.

## Sólidos de otros programas

Un dibujo de otro programa puede contener sólidos 3D, regiones y cuerpos (3DSOLID, REGION, BODY: el otro programa guarda su forma como datos ACIS). CadCraft muestra los que están en el espacio modelo en la pestaña 3D, con el color de su capa y con sus propias aristas, la primera vez que abre la pestaña; la línea de comandos indica después cuántos se dibujaron.

- Se muestran tal como son: no se pueden seleccionar, mover ni cambiar. Las capas desactivadas o inutilizadas los ocultan.
- Al guardar como DWG, cada uno se escribe de nuevo sin cambios, en cualquier versión de DWG, para que el otro programa los recupere. Los archivos DXF no los conservan: CadCraft los escribe solo en DWG, y lo indica al guardar como DXF.
- Se dibujan: caras planas y caras de cilindros, conos, esferas, toros y superficies spline sencillas, con aristas rectas, redondeadas y spline. Una cara sobre cualquier otro tipo de superficie, o una que CadCraft no puede disponer, no se adivina: se omite y se enumera, por ejemplo "No dibujado todavía (sólidos 3D): 2 caras en superficie spline (sweepsur), una superficie aún no dibujada."
- Los sólidos dentro de bloques todavía no se muestran; "Acerca de este archivo" los cuenta.

Las caras curvas se dibujan como pequeñas piezas planas, separadas unos 7,5°, así que un sólido curvo se ve algo facetado de cerca.

## Guardar y exportar

Guardar conserva el modelo 3D, en DWG y en DXF. Cada cara se escribe como cara 3D en la capa `CC-3D`, para que otros programas muestren los sólidos, y CadCraft guarda en el archivo su propia copia exacta, que lee al volver a abrir el dibujo, con la vista 3D tal como estaba (cámara, proyección y estilo visual). Las caras 3D creadas por otros programas llegan a la pestaña 3D como caras sueltas, agrupadas en un solo grupo. Una cara 3D dentro de un bloque llega una vez por cada referencia a ese bloque en el modelo, colocada y girada como la referencia; dentro del propio bloque, y en una hoja, una cara 3D se dibuja plana, como su contorno.

{{ui:Exportar}} en el grupo 3D descarga solo los sólidos: GLB para visores y la web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) o STL para impresión 3D, en milímetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pregunta cuál.

:::note
El modelo 3D está a tamaño real. Un dibujo sin unidades se considera en milímetros, así que `1000` equivale a un metro. Si cambia después las unidades del dibujo (Propiedades, sin nada seleccionado), los sólidos se escalan con ellas para seguir sobre el dibujo, y el historial lo indica. Un solo {{key:Mod+Z}} deshace a la vez el cambio de unidades y el escalado.
:::
