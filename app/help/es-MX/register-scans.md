---
title: Registrar varios escaneos en uno
summary: Coloque escaneos tomados desde distintas posiciones en un mismo marco mediante pares de puntos designados u objetivos escritos, refínelos con ICP, guarde el registro como proyecto y exporte la nube registrada como LAS o E57. El comando es REGISTERSCANS.
keywords: registrar, registro, escaneos, nube de puntos, icp, punto más cercano iterativo, objetivos, pares de puntos, transformación rígida, alinear, combinar, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Lo que hará

Varios escaneos de un mismo lugar (cada uno desde su propia posición del escáner) comienzan en sus propias coordenadas. Regístrelos: asigne a cada escaneo una colocación para que todos queden en un mismo marco; luego guarde eso como proyecto y escriba la nube registrada en un solo archivo LAS o E57.

## Colocar los escaneos

1. Abra el cuadro de diálogo (escriba `REGISTERSCANS` (o `REGSCAN`)). {{ui:Agregar escaneos…}} acepta archivos LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, o bien suéltelos sobre el cuadro de diálogo. Los escaneos que usan unidades distintas se rechazan con una nota: convierta primero uno de ellos.
2. Elija {{ui:Escaneo a mover}} y {{ui:Colocar contra}}. La imagen muestra todos los escaneos en el marco tal como están ahora, cada uno de un color: {{ui:Planta}}, {{ui:Frontal}} o {{ui:Lado}}; arrastre para encuadrar y use la rueda para hacer zoom.
3. **Por pares de puntos.** Pulse {{ui:Elegir un par}}, luego un punto en el escaneo que va a mover, y después el mismo lugar en otro escaneo (una esquina, un objetivo, el pie de una columna). Hágalo al menos tres veces, con puntos que no estén en una misma línea y separados entre sí. Pulse {{ui:Colocar por pares}}: el escaneo se coloca mediante un ajuste de mínimos cuadrados, y **Restante** muestra cuánto se aleja todavía cada par. Un par con un número grande es una selección errónea: elimínelo con la cruz y vuelva a colocar.
4. **Por objetivos.** Si se conocen las coordenadas reales de un punto (objetivos topografiados), pulse {{ui:Elegir y escribir objetivo}}, pulse el punto en su escaneo y escriba las X, Y y Z del objetivo en la fila. Los pares y los objetivos escritos pueden combinarse libremente.

## Afinar con ICP

Los pares dan una colocación aproximada. {{ui:Afinar}} mueve el escaneo hasta que sus superficies coincidan con las del otro escaneo: primero **punto a punto** y luego **punto a plano**. La tabla enumera cada paso con su error y cuántos puntos coincidieron; la línea de arriba muestra la caída del error. {{ui:Detener}} finaliza la ejecución después del paso en curso y conserva lo alcanzado. {{ui:Deshacer}} revierte la ejecución completa (o la última colocación); {{ui:Restablecer}} devuelve el escaneo a sus coordenadas del archivo.

Para que sea rápido en una laptop, ICP trabaja con una parte reducida de los puntos ({{ui:Puntos usados}}, de 5,000 a 60,000) y omite las coincidencias más lejanas que {{ui:Distancia máxima de pareo}} (por defecto, 5% del tamaño del escaneo, que disminuye a medida que se estabiliza). Primero necesita una colocación aproximada: los escaneos que apenas se traslapan informan que no se pueden emparejar. Las superficies que solo son planas o solo rectas no pueden fijar una posición a lo largo de sí mismas; en ese caso agregue pares.

## Guardar y exportar

- {{ui:Guardar proyecto}} escribe un archivo `.ccscans.json` pequeño: el nombre de cada escaneo, su tamaño y una huella de sus primeros 64 KB, junto con su transformación. No contiene puntos. {{ui:Abrir proyecto…}} localiza los archivos de escaneo por esas referencias (los archivos deben haberse agregado antes) y restituye cada transformación.
- {{ui:Exportar LAS}} y {{ui:Exportar E57}} escriben un solo archivo con todos los escaneos en su lugar registrado. Los puntos de los originales nunca se reescriben; la transformación se aplica al salir. Con {{ui:Leer cada punto de los archivos}} activado, cada archivo se vuelve a leer por cada punto (hasta 20 millones por escaneo); desactivado, solo se escriben los puntos que se muestran en el visor.
- {{ui:Mostrar la nube registrada}} (CadCraft) escribe el LAS y lo adjunta bajo el dibujo en sus propias coordenadas, como cualquier nube.

:::note
No se sube nada. El registro trabaja en las unidades propias de los archivos y conserva milímetros: un LAS se escribe con una escala adecuada (hasta 0.1 mm), y un E57 con valores de doble precisión. Un sistema de coordenadas se incluye en el LAS solo cuando todos los escaneos indican el mismo código EPSG. El escritor de E57 es propio; se verifica releyendo sus archivos con este lector y con libE57Format.
:::
