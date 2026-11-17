---
title: Dibujar muros, puertas y ventanas inteligentes en 2D
summary: Dibuje muros como una polilínea, únalos limpiamente e inserte puertas y ventanas que se mueven con el muro. Todo en 2D, sin modelo 3D.
keywords: muro, muros, WALL, WA, puerta, DOOR, DR, ventana, WINDOW, WN, DELOPENING, muro inteligente, plano de planta, giro, bisagra, hueco
from: 45845d49
---

Los muros aquí son objetos de delineación 2D. No crean ningún modelo 3D, así que un plano pesa lo mismo que un dibujo de líneas. Para un modelo de edificio, use BimCraft.

## Dibujar muros

Escriba `WALL` (`WA`), o elija {{ui:Muro}} en el menú {{ui:Más}} del grupo {{ui:Dibujo}}, y luego haga clic en puntos como lo haría con una polilínea. Pulse {{key:Enter}} para terminar, o escriba `C` para cerrar el recinto.

- `T` establece el grosor.
- `J` indica a qué siguen sus clics: el centro del muro, o su cara izquierda o derecha.
- `F` establece el relleno: ninguno, sólido o trama.

Las esquinas se unen a inglete por sí solas. Un muro que termina dentro del grosor de otro se une en una T limpia, y los muros que se cruzan se abren entre sí. Las uniones se guardan con los muros. Para rectángulos, polígonos, arcos, divisiones, bloqueos y el resto, vea «Formas de muro, cortes, desfases y bloqueos para muros 2D».

## Añadir puertas y ventanas

Escriba `DOOR` (`DR`) o `WINDOW` (`WN`) y haga clic en un muro. Una puerta abre hacia el lado del muro en el que hace clic. `W` establece el ancho, `Y` el tipo y `H` el lado de la bisagra. Siga haciendo clic para colocar más, y pulse {{key:Enter}} para terminar. Las puertas pueden ser sencillas, dobles, correderas o un vano abierto. Las ventanas pueden ser fijas, abatibles o correderas.

## Cambiarlas

Seleccione un muro para ver sus pinzamientos:

- Los pinzamientos de los extremos estiran el muro. Los muros unidos a él le siguen.
- El pinzamiento central mueve el muro.
- Un pinzamiento en una abertura la desliza a lo largo del muro.
- Las flechas invierten la bisagra y el sentido de apertura de una puerta.

{{ui:Propiedades}} muestra el grosor, el relleno y cada abertura: tipo, ancho, posición, bisagra, sentido de apertura, si se muestra abierta o cerrada, y Quitar. `DELOPENING` quita la abertura más cercana al punto donde hace clic.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` y `ERASE` funcionan como de costumbre. Las puertas y ventanas van con su muro, los muros unidos conservan sus uniones, y un {{ui:Deshacer}} lo devuelve todo.

## En otros programas

Cada muro se guarda como un bloque normal, así que otros programas CAD lo muestran correctamente y pueden moverlo, pero no pueden editarlo como muro. `EXPLODE` convierte un muro en líneas y arcos simples, y deja de ser un muro.
