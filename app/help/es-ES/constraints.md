---
title: Restringir un dibujo
summary: Mantenga las líneas horizontales, los extremos juntos y las medidas fijas con restricciones geométricas y dimensionales, y deje que el dibujo siga al cambiar una medida.
keywords: restricción, restricciones, paramétrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, grados de libertad, totalmente restringido
from: f8f21fa4
---

## Lo que va a crear

Una placa cuya anchura puede cambiar en un solo punto: sus lados permanecen en escuadra, una esquina se mantiene fija y su altura es siempre la mitad de su anchura.

Las restricciones actúan sobre líneas, polilíneas, círculos, arcos y puntos en la pestaña {{ui:Modelo}}. Cada restricción que añada cuenta como un paso de deshacer.

## Dibuje y restrinja el contorno

1. Escriba `REC` y pulse {{key:Enter}}. Escriba `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Escriba `AUTOCONSTRAIN` y pulse {{key:Enter}}. Escriba `ALL`, {{key:Enter}} y, después, {{key:Enter}} de nuevo.

   El historial dice "4 restricciones aplicadas". Aparecen unos pequeños recuadros con **H** y **V** junto a los lados: son las barras de restricciones.
3. Escriba `GCFIX` y pulse {{key:Enter}}. Haga clic cerca de la esquina inferior izquierda. Aparece un recuadro con ⊕: esa esquina permanece donde está.

`AUTOCONSTRAIN` añade restricciones de coincidencia donde los extremos casi se tocan, y restricciones horizontales o verticales donde las líneas están casi niveladas o a plomo. Escriba `S` cuando el comando lo pida para cambiar lo próximos que deben estar (inicialmente 0.05 unidades de dibujo y 1°).

## Añadir las medidas

1. Escriba `DCHORIZONTAL` y pulse {{key:Enter}}.
2. Haga clic cerca de la esquina inferior izquierda y, después, cerca de la esquina inferior derecha.
3. Haga clic debajo del rectángulo para la línea de cota.
4. La indicación muestra `Texto de cota <d1=100>`. Escriba `width=120` y pulse {{key:Enter}}.

   El rectángulo ya mide 120 de ancho y la etiqueta dice `width=120`.
5. Escriba `DCVERTICAL` y pulse {{key:Enter}}, escriba `O` y pulse {{key:Enter}}, y haga clic en el lado derecho.
6. Haga clic a la derecha de él, escriba `width/2` y pulse {{key:Enter}}.

   Mide 60 de alto. La etiqueta dice `fx: d1=width/2`: una expresión controla la medida.

El historial indica que el contorno está totalmente restringido. Para cambiar su tamaño, cambie `width` (vea [Usar parámetros y ecuaciones](topic:parameters)), o haga doble clic en la etiqueta `width=120`, escriba un valor nuevo y elija {{ui:Aplicar}}.

## Mover objetos restringidos

Mover, girar, escalar, los pinzamientos y el panel Propiedades mantienen las restricciones: lo que mueve queda sujeto y el resto sigue. Cuando las restricciones no pueden seguir, la edición no se realiza y el historial indica el motivo, por ejemplo "No realizado: las restricciones mantienen ese objeto donde está". Borrar un objeto elimina con él sus restricciones.

## Reflejar y recortar objetos restringidos

- {{cmd:MIRROR}} copia las restricciones entre los objetos que refleja sobre las copias. Los lados (hacia qué lado toca una tangente, a qué lado se mide una distancia) se calculan de nuevo para la copia reflejada, y las cotas copiadas reciben nombres propios, como ocurre al pegar. Con `Borrar objetos de origen` `Y`, las restricciones se quedan en los objetos reflejados. El historial indica cuántas se han conservado.
- {{cmd:TRIM}} mantiene las restricciones de una línea o de un arco en lo que queda: una restricción sobre un extremo pasa al trozo que aún conserva ese extremo, una regla de dirección ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Paralela}}, {{ui:Perpendicular}}) se mantiene en todos los trozos, y una cota entre los dos extremos exteriores sigue midiéndolos. Las restricciones que sujetaban la parte cortada, o una longitud que el corte cambió ({{ui:Igual}}, el ángulo barrido de un arco), se eliminan. Un círculo recortado conserva sus restricciones de centro y radio. Las polilíneas recortadas pierden las suyas.

## Las restricciones

| Comando | Mantiene |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | una línea o un segmento nivelado o a plomo (`2P`: dos puntos nivelados o a plomo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dos líneas paralelas, en escuadra o sobre una misma recta |
| {{cmd:GCCOINCIDENT}} | dos puntos juntos; `O`: un punto sobre una línea, círculo o arco |
| {{cmd:GCTANGENT}} | una línea y un círculo o arco, o dos de ellos, tocándose |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dos círculos o arcos con un mismo centro; dos longitudes o dos radios iguales |
| {{cmd:GCSYMMETRIC}} | dos puntos, líneas o círculos reflejados respecto a una línea |
| {{cmd:GCFIX}} | un punto (haga clic cerca de él) o un objeto completo (`O`) donde está |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | una distancia |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | un radio, un diámetro, un ángulo entre dos líneas o el ángulo de un arco |

{{cmd:GEOMCONSTRAINT}} y {{cmd:DIMCONSTRAINT}} preguntan cuál; {{ui:Restringir}} y {{ui:Cota}} del grupo {{ui:Paramétrico}} los ejecutan, y {{ui:Más}} muestra cada uno. Donde haga clic determina la parte: un clic cerca de un extremo, del punto medio o de un centro toma ese punto; un clic en una polilínea toma el segmento que hay debajo. El primer objeto se queda y el segundo se mueve para encontrarlo.

Una restricción que entra en conflicto con otras, o que no añade nada porque las otras ya la implican, se rechaza con un mensaje y no se mueve nada.

## Ver, seleccionar y quitar

- Haga clic en una casilla de una barra de restricciones (o en un cuadrado de coincidencia, o en una etiqueta de cota) para seleccionar esa restricción; el historial la nombra. Pulse {{key:Delete}} para quitarla.
- {{cmd:DELCONSTRAINT}} elimina todas las restricciones de los objetos que seleccione.
- {{cmd:CONSTRAINTBAR}}: `S` muestra todas las barras, `H` las oculta; seleccione antes los objetos para mostrar u ocultar las suyas. {{ui:Más}} tiene {{ui:Mostrar barras de restricciones}} y {{ui:Ocultar barras de restricciones}}.
- {{cmd:DCDISPLAY}} muestra u oculta las restricciones dimensionales. Nunca se trazan.
- {{cmd:DCCONVERT}} convierte las cotas dibujadas sobre líneas, círculos y arcos en restricciones dimensionales.

:::note
Si ha usado el dibujo paramétrico de AutoCAD, los nombres de comando y las indicaciones son los mismos. Las restricciones y los parámetros se guardan en archivos DWG y DXF de una forma que otros programas ignoran; vea [Archivos](topic:files#constraints-in-files).
:::
