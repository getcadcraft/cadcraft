---
title: Modelar en 3D
summary: Vea el dibujo en 3D en la pestaña 3D y cree sólidos sencillos a partir de él: extruir (con conicidad o a lo largo de un camino), hacer una revolución, presionar y tirar de caras, cajas, cilindros y cuñas, unir, restar e intersecar sólidos; después desplácelos, cópielos, gírelos y bórrelos, y coloque vistas planas 2D de ellos en una hoja.
keywords: 3d, tres d, sólido, sólidos, 3dsolid, región, cuerpo, acis, sat, sab, sólidos de otros programas, abrir dibujo 3D, extruir, ext, revolución, rev, barrido, conicidad, camino, presspull, presionar tirar, empujar tirar, caja, cilindro, cyl, cuña, 3dorbit, órbita, vista, vscurrent, estilo visual, sombreado, línea oculta, alambre, rayos x, xray, iso, perspectiva, paralela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo de vistas, unión, uni, restar, su, intersecar, in, booleano, combinar, unir sólidos, viewbase, flatshot, vista plana, vista 2D, vista de dibujo, vista frontal, vista superior, vista lateral, líneas ocultas
from: 13060e71
---

## Qué va a crear

Un contorno de habitación de 1000 × 600 extruido en un bloque de 400 de altura, una cara levantada y un cilindro junto a él; después se guarda el modelo con el dibujo y se exporta para un visor 3D o una impresora.

La pestaña {{ui:3D}} está junto a la pestaña {{ui:Modelo}}, bajo el dibujo. Muestra el dibujo del espacio modelo tendido sobre el suelo, con los colores de sus capas (las capas desactivadas o inutilizadas permanecen ocultas), y los sólidos que cree. La primera vez que se abre, carga la vista 3D; después cambia de inmediato.

## Extruir una forma

1. En la pestaña {{ui:Modelo}}, escriba `REC` y pulse {{key:Enter}}. Escriba `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Haga clic en la pestaña {{ui:3D}}. La barra de herramientas muestra el grupo {{ui:3D}} en lugar de los grupos de dibujo.
3. Haga clic en {{ui:Extruir}} (o escriba {{cmd:EXTRUDE}}, `EXT`). Haga clic dentro del rectángulo y pulse {{key:Enter}}.
4. Escriba `400` y pulse {{key:Enter}}. El historial dice "Se extruyó 1 sólido, 400 de altura" con su volumen.

Se extruyen las polilíneas cerradas (incluidos los arcos), los rectángulos, los polígonos, los círculos y las elipses; las líneas y las polilíneas abiertas no se extruyen, y el historial indica el motivo. También puede seleccionar primero las formas en la pestaña {{ui:Modelo}} y escribir `EXTRUDE` allí. En lugar de escribir la altura, puede indicarla con el cursor: el contorno sigue el cursor hacia arriba y hacia abajo. Una altura negativa baja. Escriba `D` en la solicitud de altura para borrar las formas 2D después de extruir (`D` de nuevo las conserva).

En la solicitud de altura, `T` (Conicidad) pide un ángulo en grados: los lados se inclinan hacia dentro en ese ángulo, de modo que la parte superior es más pequeña (un ángulo negativo la hace más grande); un ángulo demasiado pronunciado para la forma se rechaza. `P` (Camino) barre las formas a lo largo de un camino en lugar de extruirlas (vea abajo).

## Revolución y barrido

- {{cmd:REVOLVE}} (`REV`, o {{ui:Más}} › {{ui:Revolución alrededor de un eje}}): seleccione formas cerradas, pulse {{key:Enter}}, después haga clic en los dos extremos del eje (o escriba `X` o `Y` para el eje del dibujo que pasa por 0,0), luego escriba un ángulo o pulse {{key:Enter}} para dar la vuelta completa. La forma gira alrededor del eje y se levanta sobre el suelo: dibuje la mitad del contorno de un jarrón junto a una línea y revolúcionela alrededor de esa línea. La forma puede tocar el eje, pero no cruzarlo. Una vuelta completa tiene 48 pasos.
- {{cmd:SWEEP}} (o {{ui:Más}} › {{ui:Barrido a lo largo de un camino}}, o `P` en la solicitud de altura de EXTRUDE): seleccione formas cerradas (el perfil), pulse {{key:Enter}} y después haga clic en el camino: una línea, polilínea, arco, círculo o elipse. El perfil se levanta a lo largo del camino, con su parte media sobre él, y avanza por él; las esquinas se cortan a inglete, y un camino cerrado forma un anillo. Un rectángulo pequeño barrido a lo largo del contorno de una habitación forma un zócalo; un círculo a lo largo de una polilínea forma una tubería.

## Presionar y tirar de una cara

1. Haga clic en {{ui:Presionar/tirar}} (o escriba {{cmd:PRESSPULL}}).
2. Haga clic en la cara superior del bloque.
3. Escriba `100` y pulse {{key:Enter}}, o mueva el cursor y haga clic. El bloque queda con 500 de altura.

## Cajas, cilindros y cuñas

- {{cmd:BOX}}: haga clic o escriba dos esquinas, y después una altura.
- {{cmd:CYLINDER}} (`CYL`): el centro, el radio y después una altura. Los cilindros y los círculos extruidos tienen 48 lados, con sombreado suave.
- {{cmd:WEDGE}} (`WE`): dos esquinas y una altura. Tiene la altura completa en la primera esquina y se inclina hasta nada en la otra.

En la pestaña {{ui:3D}}, un clic cae sobre la cara o la arista bajo el cursor; si no hay ninguna, cae sobre el suelo, de modo que una caja puede apoyarse sobre otro sólido.

## Desplazar, copiar, girar y borrar sólidos

En la pestaña {{ui:3D}}, un clic selecciona un sólido; arrastre de izquierda a derecha para una ventana, o de derecha a izquierda para una captura. Después:

- {{cmd:MOVE}}: haga clic en un punto base y en el lugar al que va, o escriba `<100,0,0>` (o `@100,0`) para una distancia a lo largo de X, Y y Z.
- {{cmd:COPY}}: lo mismo, dejando el original.
- {{cmd:ROTATE}}: escriba un ángulo (gira alrededor del centro de la selección, alrededor de Z), o haga clic en el centro, en un punto inicial y escriba el ángulo.
- {{cmd:ERASE}} o {{key:Delete}}.

## Unir, restar e intersecar sólidos

Abra {{ui:Más}} en la barra de herramientas 3D, o escriba el comando:

- {{cmd:UNION}} (`UNI`): seleccione los sólidos y pulse {{key:Enter}}: se convierten en un solo sólido.
- {{cmd:SUBTRACT}} (`SU`): seleccione los sólidos que se conservan y pulse {{key:Enter}}, luego los que se quitan y pulse {{key:Enter}}. Un agujero pasante en un bloque: dibuje un cilindro que lo atraviese y después reste el cilindro.
- {{cmd:INTERSECT}} (`IN`): seleccione los sólidos y pulse {{key:Enter}}: solo queda lo que todos tienen en común.

El historial indica el volumen del resultado. Cada una es un paso de deshacer. La primera que ejecute carga el motor booleano 3D (unos 0.5 MB; incluido en {{ui:Guardar para usar sin conexión}}). Solo se pueden combinar sólidos cerrados: un sólido con aristas abiertas (de caras 3D sueltas de otro programa) se rechaza, y el historial indica el motivo. El resultado es un solo sólido; las caras curvas siguen formadas por facetas planas, como lo estaba el cilindro.

Haga doble clic en un sólido para editar sus caras y aristas por separado; {{key:Esc}} lo cierra de nuevo. Cada cambio 3D es un paso de deshacer en el mismo historial que el dibujo: {{key:Mod+Z}} deshace lo último que hizo en cualquiera de las dos pestañas.

## Vistas planas en una hoja

1. Abra una pestaña de hoja (o permanezca en {{ui:Modelo}}) y escriba {{cmd:VIEWBASE}} (o `FLATSHOT`).
2. Elija la vista: {{key:Enter}} para la frontal, o `T` (superior), `R` (derecha), `L` (izquierda), `BA` (posterior), `BO` (inferior), `I` (isométrica).
3. {{key:Enter}} muestra las líneas ocultas, discontinuas; `H` las omite.
4. {{key:Enter}} toma la escala que sugiere CadCraft: en una hoja, la mayor escala estándar (como 1:20) con la que la vista cabe en menos de la mitad del papel. O escriba una: `1:50`, `2:1`.
5. Haga clic, o escriba, dónde va el centro de la vista.

La vista es una referencia a bloque, `VIEW-FRONT-1` y así sucesivamente: las aristas visibles en la capa VIEW-VISIBLE (0.5 mm), las ocultas en VIEW-HIDDEN (discontinuas, 0.25 mm). Muévala, acótela y trácela como cualquier otro dibujo. Es una imagen de los sólidos tal como estaban cuando la creó: después de cambiarlos, borre la vista y vuelva a ejecutar {{cmd:VIEWBASE}}. Para más vistas, ejecútelo una vez por cada vista.

## Mirar alrededor

Arrastre con la rueda para orbitar, {{key:Shift}} + arrastre con la rueda o el botón derecho para encuadrar, y gire la rueda para hacer zoom en el cursor. En una almohadilla táctil, dos dedos orbitan y un pellizco hace zoom. Un clic derecho sin arrastrar equivale a {{key:Enter}}, como en las otras pestañas. `3DORBIT` permite que el botón izquierdo oriente la vista hasta que pulse {{key:Enter}} o {{key:Esc}}.

- {{ui:Vistas}} (o {{cmd:VIEW}}): Isométrica, Superior, Inferior, Frontal, Posterior, Izquierda, Derecha, Perspectiva o Paralela, y Zoom a todo.
- {{ui:Estilo}} (o {{cmd:VSCURRENT}}, `VS`): Sombreado, Sombreado con aristas, Línea oculta, Alambre o Rayos X.

Los puntos que señala se ajustan a los sólidos (esquinas, aristas, caras) y al dibujo 2D sobre el suelo: los extremos y los puntos medios de sus líneas y arcos, y los puntos a lo largo de ellos. Las líneas 2D nunca se seleccionan en la pestaña 3D. Cuando un comando pide objetos 2D (EXTRUDE, REVOLVE, SWEEP), un clic elige uno, un arrastre de izquierda a derecha toma lo que queda completamente dentro de la ventana, y uno de derecha a izquierda toma lo que cruza, igual que en la pestaña {{ui:Modelo}}.

Un cubo de vistas se encuentra en la esquina superior derecha de la pestaña 3D: haga clic en una cara, arista o esquina para mirar desde allí, arrástrelo para orbitar, y el botón de casa vuelve a la vista isométrica. Eso es {{ui:Automática}}, el inicio de {{ui:Indicador de esquina}} en [Configuración de CadCraft](topic:settings). Si se configura como {{ui:Cubo de vistas}}, la pestaña {{ui:Modelo}} también muestra un cubo, mirando desde arriba; al hacer clic en cualquier otro lado se abre la pestaña 3D mirando desde allí. Si se configura como {{ui:Icono de ejes}}, ambas pestañas muestran el marcador de ejes.

## Sólidos de otros programas

Un dibujo de otro programa puede contener sólidos 3D, regiones y cuerpos (3DSOLID, REGION, BODY: el otro programa guarda su forma como datos ACIS). CadCraft muestra los que están en el espacio modelo en la pestaña 3D, con el color de su capa y con sus propias aristas, la primera vez que se abre la pestaña; la línea de comandos indica entonces cuántos se dibujaron.

- Se muestran tal como son: no puede seleccionarlos, desplazarlos ni cambiarlos. Las capas desactivadas o inutilizadas los ocultan.
- Guardar como DWG escribe cada uno sin cambios, en cualquier versión de DWG, para que el otro programa los recupere. Los archivos DXF no los conservan: CadCraft los escribe solo en DWG, y lo indica al guardar como DXF.
- Se dibujan: caras planas, y caras en cilindros, conos, esferas, toros y superficies spline sencillas, con aristas rectas, redondeadas y spline. Una cara en cualquier otro tipo de superficie, o una que CadCraft no puede disponer, no se adivina: se omite y se enumera, por ejemplo "Todavía no dibujado (sólidos 3D): 2 caras en spline-surface (sweepsur), una superficie que aún no se dibuja."
- Los sólidos dentro de bloques todavía no se muestran; "Acerca de este archivo" los cuenta.

Las caras curvas se dibujan como pequeñas piezas planas, separadas unos 7.5°, así que un sólido curvo se ve un poco facetado de cerca.

## Guardar y exportar

Guardar conserva el modelo 3D, tanto en DWG como en DXF. Cada cara se guarda como cara 3D en la capa `CC-3D`, para que otros programas muestren los sólidos, y CadCraft conserva en el archivo su propia copia exacta, que lee de nuevo al volver a abrir el dibujo, con la vista 3D tal como estaba (cámara, proyección y estilo visual). Las caras 3D creadas por otros programas llegan a la pestaña 3D como caras sueltas, agrupadas en un solo grupo. Una cara 3D dentro de un bloque llega una vez por cada referencia a ese bloque en el modelo, colocada y girada como lo está la referencia; en el propio bloque, y en una hoja, una cara 3D se dibuja plana, como su contorno.

{{ui:Exportar}} en el grupo 3D descarga solo los sólidos: GLB para visores y la web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) o STL para impresión 3D, en milímetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pregunta cuál.

:::note
El modelo 3D tiene tamaño real. Un dibujo sin unidades se considera en milímetros, así que `1000` es un metro. Si cambia después las unidades del dibujo (Propiedades, sin nada seleccionado), los sólidos se escalan con ellas para que sigan en el dibujo, y el historial lo indica. Un {{key:Mod+Z}} deshace a la vez el cambio de unidades y el escalado.
:::
