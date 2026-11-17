---
title: Restringir un dibujo
summary: Mantenga las líneas horizontales, los extremos juntos y las medidas fijas con restricciones geométricas y de cota, y deje que el dibujo siga el cambio cuando modifique una medida.
keywords: restricción, restricciones, paramétrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, grados de libertad, totalmente restringido
from: f8f21fa4
---

## Lo que va a crear

Una placa cuyo ancho cambia en un solo lugar: sus lados siguen en escuadra, una esquina permanece fija y su altura es siempre la mitad de su ancho.

Las restricciones funcionan con líneas, polilíneas, círculos, arcos y puntos en la pestaña {{ui:Modelo}}. Cada restricción que añada equivale a un paso para deshacer.

## Dibuje y restrinja el contorno

1. Escriba `REC` y pulse {{key:Enter}}. Escriba `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Escriba `AUTOCONSTRAIN` y pulse {{key:Enter}}. Escriba `ALL`, {{key:Enter}}, y luego pulse {{key:Enter}} otra vez.

   El historial indica «4 restricciones aplicadas». Aparecen cuadros pequeños con **H** y **V** junto a los lados: son las barras de restricciones.
3. Escriba `GCFIX` y pulse {{key:Enter}}. Haga clic cerca de la esquina inferior izquierda. Aparece un cuadro con ⊕: esa esquina permanece donde está.

`AUTOCONSTRAIN` añade restricciones de coincidencia donde los extremos casi se tocan, y restricciones horizontales o verticales donde las líneas están casi niveladas o a plomo. Escriba `S` en el mensaje para cambiar qué tan cerca deben estar (al inicio, 0.05 unidades de dibujo y 1°).

## Añada las medidas

1. Escriba `DCHORIZONTAL` y pulse {{key:Enter}}.
2. Haga clic cerca de la esquina inferior izquierda y luego cerca de la esquina inferior derecha.
3. Haga clic debajo del rectángulo para la línea de cota.
4. La indicación muestra `Dimension text <d1=100>`. Escriba `width=120` y pulse {{key:Enter}}.

   El rectángulo ahora mide 120 de ancho, y la etiqueta dice `width=120`.
5. Escriba `DCVERTICAL` y pulse {{key:Enter}}, escriba `O` y pulse {{key:Enter}}, luego haga clic en el lado derecho.
6. Haga clic a la derecha, escriba `width/2` y pulse {{key:Enter}}.

   Mide 60 de alto. La etiqueta dice `fx: d1=width/2`: una expresión la controla.

El historial indica ahora que el contorno está totalmente restringido. Para cambiar su tamaño, cambie `width` (vea [Usar parámetros y ecuaciones](topic:parameters)), o haga doble clic en la etiqueta `width=120`, escriba un valor nuevo y elija {{ui:Aplicar}}.

## Mover objetos restringidos

Desplazar, girar, escalar, los pinzamientos y el panel Propiedades conservan las restricciones: lo que mueve queda sujeto, y lo demás sigue. Cuando las restricciones no pueden seguir, la modificación no se realiza y el historial indica el motivo, por ejemplo «No realizado: las restricciones mantienen ese objeto donde está». Borrar un objeto elimina sus restricciones con él.

## Simetría y recorte de objetos restringidos

- {{cmd:MIRROR}} copia las restricciones entre los objetos que refleja hacia las copias. Los lados (hacia dónde toca una tangente, a qué lado se mide una distancia) se recalculan para la copia reflejada, y las cotas copiadas reciben nombres propios, como ocurre al pegar. Con `Erase source objects` `Y`, las restricciones quedan en los objetos reflejados. El historial indica cuántas se trasladaron.
- {{cmd:TRIM}} conserva las restricciones de una línea o de un arco en lo que queda: una restricción sobre un extremo pasa a la parte que todavía tiene ese extremo, una regla de dirección ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Paralela}}, {{ui:Perpendicular}}) se mantiene en todas las partes, y una cota entre los dos extremos exteriores sigue midiéndolos. Las restricciones que sujetaban la parte cortada, o una longitud que el corte cambió ({{ui:Igual}}, el barrido de un arco), se eliminan. Un círculo recortado conserva sus restricciones de centro y radio. Las polilíneas recortadas pierden las suyas.

## Las restricciones

| Comando | Conserva |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | una línea o segmento nivelado o a plomo (`2P`: dos puntos nivelados o a plomo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dos líneas paralelas, en escuadra o sobre una misma recta |
| {{cmd:GCCOINCIDENT}} | dos puntos juntos; `O`: un punto sobre una línea, círculo o arco |
| {{cmd:GCTANGENT}} | una línea y un círculo o arco, o dos de ellos, tocándose |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dos círculos o arcos con un mismo centro; dos longitudes o dos radios iguales |
| {{cmd:GCSYMMETRIC}} | dos puntos, líneas o círculos reflejados respecto a una línea |
| {{cmd:GCFIX}} | un punto (haga clic cerca de él) o un objeto completo (`O`) donde está |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | una distancia |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | un radio, un diámetro, un ángulo entre dos líneas o el ángulo de un arco |

{{cmd:GEOMCONSTRAINT}} y {{cmd:DIMCONSTRAINT}} preguntan cuál usar; {{ui:Restringir}} y {{ui:Cota}} del grupo {{ui:Paramétrico}} los ejecutan, y {{ui:Más}} muestra cada uno. Dónde hace clic determina la parte: un clic cerca de un extremo, del punto medio o de un centro toma ese punto; un clic en una polilínea toma el segmento bajo él. El primer objeto permanece y el segundo se desplaza para encontrarlo.

Una restricción que entra en conflicto con otras, o que no añade nada porque las demás ya la implican, se rechaza con un mensaje y nada se mueve.

## Ver, seleccionar y eliminar

- Haga clic en un cuadro de una barra de restricciones (o en un cuadrado de coincidencia, o en una etiqueta de cota) para seleccionar esa restricción; el historial la nombra. Pulse {{key:Delete}} para eliminarla.
- {{cmd:DELCONSTRAINT}} elimina todas las restricciones de los objetos que seleccione.
- {{cmd:CONSTRAINTBAR}}: `S` muestra todas las barras, `H` las oculta; seleccione primero los objetos para mostrar u ocultar las suyas. {{ui:Más}} tiene {{ui:Mostrar barras de restricciones}} y {{ui:Ocultar barras de restricciones}}.
- {{cmd:DCDISPLAY}} muestra u oculta las restricciones dimensionales. Nunca se trazan.
- {{cmd:DCCONVERT}} convierte las cotas dibujadas sobre líneas, círculos y arcos en restricciones dimensionales.

:::note
Si ha usado el dibujo paramétrico de AutoCAD, los nombres de los comandos y las indicaciones son los mismos. Las restricciones y los parámetros se guardan en archivos DWG y DXF de una forma que otros programas ignoran; vea [Archivos](topic:files#constraints-in-files).
:::
