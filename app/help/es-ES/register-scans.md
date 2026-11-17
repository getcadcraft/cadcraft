---
title: Registrar varios escaneos en uno
summary: Colocar escaneos tomados desde distintas posiciones en un mismo sistema de coordenadas, con pares de puntos designados o destinos escritos, refinarlos con ICP, guardar el registro como proyecto y exportar la nube registrada como LAS o E57. El comando es REGISTERSCANS.
keywords: registrar, registro, escaneos, nube de puntos, icp, punto más cercano iterativo, destinos, pares de puntos, transformación rígida, alinear, combinar, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Lo que hará

Varios escaneos de un mismo lugar (cada uno desde su propia posición del escáner) empiezan en sus propias coordenadas. Regístrelos: asigne a cada escaneo una única colocación para que todos estén en un mismo sistema de referencia, guarde el resultado como proyecto y escriba la nube registrada en un único archivo LAS o E57.

## Colocar los escaneos

1. Abra el cuadro de diálogo (escriba `REGISTERSCANS` (o `REGSCAN`)). {{ui:Añadir escaneos…}} acepta archivos LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, o bien suéltelos en el cuadro de diálogo. Los escaneos que usen unidades distintas se rechazan con una nota: convierta antes uno de ellos.
2. Elija {{ui:Escaneo que mover}} y {{ui:Colocar contra}}. La imagen muestra cada escaneo en el encuadre tal como está ahora, cada uno con un color: {{ui:Planta}}, {{ui:Frontal}} o {{ui:Lateral}}. Arrastre para desplazarse y use la rueda para hacer zoom.
3. **Por pares de puntos.** Haga clic en {{ui:Elegir un par}}, luego en un punto del escaneo que va a mover y después en el mismo lugar de otro escaneo (una esquina, una diana, el pie de un pilar). Hágalo al menos tres veces, con puntos que no estén alineados y que estén bien separados. Haga clic en {{ui:Colocar por pares}}: el escaneo se coloca mediante un ajuste por mínimos cuadrados y **Restante** muestra cuánto falla aún cada par. Un par con un número grande es una selección errónea: quítelo con la cruz y vuelva a colocar.
4. **Por destinos.** Si se conocen las coordenadas reales de un punto (dianas topografiadas), haga clic en {{ui:Elegir y escribir el destino}}, haga clic en el punto de su escaneo y escriba las coordenadas X, Y y Z del destino en la fila. Los pares y los destinos escritos se pueden combinar libremente.

## Refinar con ICP

Los pares dan una colocación aproximada. {{ui:Refinar}} mueve el escaneo hasta que sus superficies coinciden con las del otro: primero **punto a punto** y después **punto a plano**. La tabla enumera cada paso con su error y cuántos puntos coincidieron; la línea de encima dibuja cómo baja el error. {{ui:Detener}} termina la ejecución tras el paso en curso y conserva lo que haya alcanzado. {{ui:Deshacer}} deshace la ejecución completa (o la última colocación); {{ui:Restablecer}} devuelve el escaneo a sus coordenadas de archivo.

Para que vaya rápido en un portátil, ICP trabaja con una parte submuestreada de los puntos ({{ui:Puntos usados}}, de 5,000 a 60,000) e ignora las coincidencias más lejanas que {{ui:Mayor distancia de emparejamiento}} (por defecto, el 5 % del tamaño del escaneo, que se reduce a medida que converge). Necesita antes una colocación aproximada: los escaneos que apenas se solapan indican que no pueden emparejarse. Las superficies solo planas o solo rectas no fijan la posición a lo largo de sí mismas; en ese caso añada pares.

## Guardar y exportar

- {{ui:Guardar proyecto}} escribe un archivo `.ccscans.json` pequeño: el nombre y el tamaño de cada escaneo, una huella digital de sus primeros 64 KB, con su transformación. No contiene puntos. {{ui:Abrir proyecto…}} busca los archivos de escaneo por esas referencias (los archivos deben haberse añadido antes) y restaura cada transformación.
- {{ui:Exportar LAS}} y {{ui:Exportar E57}} escriben un único archivo con todos los escaneos en su posición registrada. Los puntos de los originales nunca se reescriben; la transformación se aplica al exportar. Con {{ui:Leer todos los puntos de los archivos}} activado, cada archivo se vuelve a leer para cada punto (hasta 20 millones por escaneo); desactivado, solo se escriben los puntos que se ven en el visor.
- {{ui:Mostrar la nube registrada}} (CadCraft) escribe el LAS y lo adjunta bajo el dibujo en sus propias coordenadas, como cualquier nube.

:::note
No se sube nada. El registro trabaja en las unidades propias de los archivos y conserva los milímetros: un LAS se escribe con una escala que se ajusta (hasta 0.1 mm), y un E57 con valores de doble precisión. Un sistema de coordenadas solo pasa al LAS cuando todos los escaneos indican el mismo código EPSG. El escritor de E57 es propio; se comprueba releyendo sus archivos con este lector y con libE57Format.
:::
