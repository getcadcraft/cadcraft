---
title: Modelo en 3D
summary: Ehecha el plano en 3D en la pestaña 3D ha ejapo sólidos sencillos: extruir (con conicidad o a lo largo de una trayectoria), revolucionar, empujar y jalar caras, cajas, cilindros y cuñas; unir, restar e intersecar; mover, copiar, rotar y borrar; ha ubicar vistas planas 2D en una hoja.
keywords: 3d, tres d, sólido, sólidos, 3dsolid, región, cuerpo, acis, sat, sab, sólidos de otros programas, abrir plano 3D, extruir, ext, revolucionar, rev, barrer, conicidad, trayectoria, presionar jalar, presspull, empujar jalar, caja, cilindro, cyl, cuña, we, 3dorbit, órbita, vista, vscurrent, estilo visual, sombreado, línea oculta, alambre, rayos X, xray, iso, perspectiva, paralela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo de vista, unión, uni, restar, su, intersecar, in, booleano, combinar, unir sólidos, viewbase, flatshot, vista plana, vista 2D, vista del plano, vista frontal, vista superior, vista lateral, líneas ocultas
from: 13060e71
---

## Lo que vas a hacer

Peteĩ área de ambiente de 1000 × 600 extruida en un bloque de 400 de altura, peteĩ cara levantada ha peteĩ cilindro al lado. Upe rire, el modelo se guarda junto con el plano y se exporta para un visor 3D o una impresora.

La pestaña {{ui:3D}} está al lado de {{ui:Modelo}}, debajo del plano. Muestra el plano del espacio de modelo acostado en el suelo, con sus colores de capa (las capas apagadas o congeladas quedan ocultas), y los sólidos que hacés. La primera vez que se abre, la vista 3D se carga; después cambia enseguida.

## Extruir una forma

1. En la pestaña {{ui:Modelo}}, escribí `REC` y presioná {{key:Enter}}. Escribí `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Hacé clic en la pestaña {{ui:3D}}. La barra de herramientas muestra el grupo {{ui:3D}} en lugar de los grupos del plano.
3. Hacé clic en {{ui:Extruir}} (o escribí {{cmd:EXTRUDE}}, `EXT`). Hacé clic dentro del rectángulo y presioná {{key:Enter}}.
4. Escribí `400` y presioná {{key:Enter}}. El historial dice "Extruded 1 solid, 400 high" con su volumen.

Las polilíneas cerradas (con arcos incluidos), los rectángulos, los polígonos, los círculos y las elipses se extruyen; las líneas y las polilíneas abiertas no, y el historial dice por qué. También podés seleccionar primero las formas en la pestaña {{ui:Modelo}} y escribir `EXTRUDE` allí. En vez de escribir la altura, podés hacer clic: el contorno sigue al cursor hacia arriba y abajo. Una altura negativa baja. Escribí `D` en el aviso de altura para borrar las formas 2D después de extruir (`D` otra vez las conserva).

En el aviso de altura, `T` (ángulo de conicidad [T]) pide un ángulo en grados: los lados se inclinan hacia adentro, así la parte de arriba queda más chica (un ángulo negativo la hace más grande); si el ángulo es demasiado empinado para la forma, se rechaza. `P` (trayectoria [P]) barre las formas a lo largo de una trayectoria en vez de extruirlas (ver abajo).

## Revolucionar y barrer

- {{cmd:REVOLVE}} (`REV`, o {{ui:Más}} › {{ui:Revolucionar alrededor de un eje}}): seleccioná formas cerradas, presioná {{key:Enter}}, después hacé clic en los dos extremos del eje (o escribí `X` o `Y` para el eje del plano que pasa por 0,0), y escribí un ángulo o presioná {{key:Enter}} para dar la vuelta completa. La forma gira alrededor del eje y se levanta desde el suelo: dibujá la mitad del contorno de un florero al lado de una línea y revolucionalo alrededor de esa línea. La forma puede tocar el eje, pero no cruzarlo. Una vuelta completa tiene 48 pasos.
- {{cmd:SWEEP}} (o {{ui:Más}} › {{ui:Barrer a lo largo de una trayectoria}}, o `P` en el aviso de altura de EXTRUDE): seleccioná formas cerradas (el perfil), presioná {{key:Enter}}, después hacé clic en la trayectoria: una línea, polilínea, arco, círculo o elipse. El perfil se levanta a través de la trayectoria, con su centro sobre ella, y la recorre; las esquinas se unen a inglete, y una trayectoria cerrada hace un anillo. Un rectángulo chico barrido a lo largo del contorno de un ambiente hace un zócalo; un círculo a lo largo de una polilínea hace un caño.

## Empujar y jalar una cara

1. Hacé clic en {{ui:Presionar/jalar}} (o escribí {{cmd:PRESSPULL}}).
2. Hacé clic en la cara de arriba del bloque.
3. Escribí `100` y presioná {{key:Enter}}, o mové el cursor y hacé clic. El bloque queda de 500 de altura.

## Cajas, cilindros y cuñas

- {{cmd:BOX}}: hacé clic o escribí dos esquinas, después una altura.
- {{cmd:CYLINDER}} (`CYL`): el centro, el radio, después una altura. Los cilindros y los círculos extruidos tienen 48 lados, con sombreado suave.
- {{cmd:WEDGE}} (`WE`): dos esquinas y una altura. Tiene altura completa en la primera esquina y baja hasta cero en la otra.

En la pestaña 3D, un clic cae sobre la cara o arista bajo el cursor; si no hay ninguna, cae sobre el suelo, así que una caja puede apoyarse sobre otro sólido.

## Mover, copiar, rotar y borrar sólidos

En la pestaña 3D, un clic selecciona un sólido; arrastrá de izquierda a derecha para una ventana, o de derecha a izquierda para un cruce. Después:

- {{cmd:MOVE}}: hacé clic en un punto base y en el lugar adonde va, o escribí `<100,0,0>` (o `@100,0`) para una distancia a lo largo de X, Y y Z.
- {{cmd:COPY}}: lo mismo, pero dejando el original.
- {{cmd:ROTATE}}: escribí un ángulo (gira alrededor del centro de la selección, sobre Z), o hacé clic en el centro, en un punto inicial y después indicá el ángulo.
- {{cmd:ERASE}} o {{key:Delete}}.

## Unir, restar e intersecar sólidos

Abrí {{ui:Más}} en la barra de herramientas 3D, o escribí el comando:

- {{cmd:UNION}} (`UNI`): seleccioná los sólidos y presioná {{key:Enter}}: pasan a ser un solo sólido.
- {{cmd:SUBTRACT}} (`SU`): seleccioná los sólidos que querés conservar y presioná {{key:Enter}}, después los que querés quitar y presioná {{key:Enter}}. Un agujero pasante en un bloque: dibujá un cilindro que lo atraviese, después restá el cilindro.
- {{cmd:INTERSECT}} (`IN`): seleccioná los sólidos y presioná {{key:Enter}}: solo queda lo que todos tienen en común.

El historial dice el volumen del resultado. Cada operación es un paso de deshacer. La primera que hacés carga el motor booleano 3D (unos 0,5 MB; incluido en {{ui:Guardar para usar sin conexión}}). Solo se pueden combinar sólidos cerrados: un sólido con aristas abiertas (de caras 3D sueltas de otro programa) se rechaza y se dice el motivo. El resultado es un solo sólido; las caras curvas siguen hechas de pequeñas caras planas, igual que el cilindro.

Hacé doble clic en un sólido para editar sus caras y aristas por separado; {{key:Esc}} lo cierra de nuevo. Cada cambio 3D es un paso de deshacer en el mismo historial que el plano: {{key:Mod+Z}} deshace lo último que hiciste en cualquiera de las dos pestañas.

## Vistas planas en una hoja

1. Abrí una pestaña de hoja (o quedate en {{ui:Modelo}}), después escribí {{cmd:VIEWBASE}} (o `FLATSHOT`).
2. Elegí la vista: {{key:Enter}} para la frontal, o `T` (superior), `R` (derecha), `L` (izquierda), `BA` (atrás), `BO` (abajo), `I` (isométrica).
3. {{key:Enter}} muestra las líneas ocultas, de trazos; `H` las deja afuera.
4. {{key:Enter}} toma la escala que sugiere CadCraft: en una hoja, la escala estándar más grande (por ejemplo 1:20) con la que la vista entra en menos de la mitad del papel. O escribí una: `1:50`, `2:1`.
5. Hacé clic, o escribí, donde va el centro de la vista.

La vista es una sola referencia de bloque, `VIEW-FRONT-1` y así sucesivamente: las aristas visibles van en la capa VIEW-VISIBLE (0,5 mm), las ocultas en VIEW-HIDDEN (de trazos, 0,25 mm). Movela, cotala e imprimila como cualquier otro dibujo. Es una imagen de los sólidos tal como estaban cuando la hiciste: después de cambiarlos, borrá la vista y volvé a ejecutar {{cmd:VIEWBASE}}. Para más vistas, ejecutalo una vez por cada vista.

## Mirar alrededor

Arrastrá con la rueda para orbitar, {{key:Shift}} + arrastre con la rueda, o el botón derecho, para desplazar, y girá la rueda para hacer zoom en el cursor. En un trackpad, dos dedos orbitan y un pellizco hace zoom. Un clic derecho sin arrastrar equivale a {{key:Enter}}, igual que en las otras pestañas. `3DORBIT` permite que el botón izquierdo oriente la vista hasta que presiones {{key:Enter}} o {{key:Esc}}.

- {{ui:Vistas}} (o {{cmd:VIEW}}): Isométrica, Superior, Inferior, Frontal, Atrás, Izquierda, Derecha, Perspectiva o Paralela, y Zoom a todo.
- {{ui:Estilo}} (o {{cmd:VSCURRENT}}, `VS`): Sombreado, Sombreado con aristas, Línea oculta, Alambre o Rayos X.

Los puntos que señalás se ajustan a los sólidos (esquinas, aristas, caras) y al dibujo 2D del suelo: los extremos y puntos medios de sus líneas y arcos, y los puntos a lo largo de ellos. Las líneas 2D nunca se seleccionan en la pestaña 3D. Cuando un comando pide objetos 2D (EXTRUDE, REVOLVE, SWEEP), un clic elige uno, un arrastre de izquierda a derecha toma lo que queda por completo dentro de la ventana, y un arrastre de derecha a izquierda toma lo que cruza, igual que en la pestaña {{ui:Modelo}}.

Un cubo de vista está en la esquina superior derecha de la pestaña 3D: hacé clic en una cara, arista o esquina para mirar desde allí, arrastralo para orbitar, y el botón de casa vuelve a la vista isométrica. Eso es {{ui:Automática}}, el inicio de {{ui:Indicador de esquina}} en la [Configuración de CadCraft](topic:settings). Si está en {{ui:Cubo de vista}}, la pestaña {{ui:Modelo}} también muestra un cubo, mirando desde arriba; al hacer clic en cualquier otro lado se abre la pestaña 3D mirando desde allí. Si está en {{ui:Ícono de ejes}}, ambas pestañas muestran el marcador de ejes.

## Sólidos de otros programas

Un plano de otro programa puede tener sólidos 3D, regiones y cuerpos (3DSOLID, REGION, BODY: el otro programa guarda su forma como datos ACIS). CadCraft muestra los que están en el espacio de modelo en la pestaña 3D, con el color de su capa y con sus propias aristas, la primera vez que abrís la pestaña; la línea de comandos dice después cuántos se dibujaron.

- Se muestran tal como son: no podés seleccionarlos, moverlos ni cambiarlos. Las capas apagadas o congeladas los ocultan.
- Al guardar como DWG, cada uno se vuelve a escribir sin cambios, en cualquier versión de DWG, para que el otro programa los reciba de nuevo. Los archivos DXF no los conservan: CadCraft los escribe solo en DWG, y lo avisa cuando guardás como DXF.
- Se dibujan: caras planas, y caras de cilindros, conos, esferas, toros y superficies spline simples, con aristas rectas, redondas y spline. Una cara de cualquier otro tipo de superficie, o una que CadCraft no pueda trazar, no se adivina: se deja afuera y se lista, por ejemplo "Not drawn yet (3D solids): 2 faces on spline-surface (sweepsur), a surface not drawn yet."
- Los sólidos dentro de bloques todavía no se muestran; "Acerca de este archivo" los cuenta.

Las caras curvas se dibujan como pequeñas piezas planas, separadas unos 7,5°, así que un sólido curvo se ve un poco facetado de cerca.

## Guardar y exportar

Guardar conserva el modelo 3D, en DWG y en DXF. Cada cara entra como cara 3D en la capa `CC-3D`, para que otros programas muestren los sólidos, y CadCraft guarda en el archivo su propia copia exacta, que lee de nuevo al reabrir el plano, con la vista 3D tal como estaba (cámara, proyección y estilo visual). Las caras 3D hechas por otros programas entran en la pestaña 3D como caras sueltas, agrupadas como un solo grupo. Una cara 3D dentro de un bloque entra una vez por cada referencia a ese bloque en el modelo, ubicada y girada como lo está la referencia; dentro del propio bloque, y en una hoja, una cara 3D se dibuja plana, como su contorno.

{{ui:Exportar}} en el grupo 3D descarga solo los sólidos: GLB para visores y la web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) o STL para impresión 3D, en milímetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pregunta cuál.

:::note
El modelo 3D tiene tamaño real. Un plano sin unidades se cuenta como milímetros, así que `1000` es un metro. Si después cambiás las unidades del plano (Propiedades, sin nada seleccionado), los sólidos se escalan con ellas para seguir sobre el plano, y el historial lo dice. Un {{key:Mod+Z}} deshace juntos el cambio de unidades y el escalado.
:::
