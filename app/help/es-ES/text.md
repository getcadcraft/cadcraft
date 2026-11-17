---
title: Añadir texto y etiquetas
summary: Coloque etiquetas de habitación con texto de una línea, escriba notas ajustadas con texto de párrafo escrito en su sitio y edite el texto después.
keywords: texto, dtext, mtext, mleader, multileader, directriz, leader, revcloud, nube de revisión, nube, buscar, reemplazar, buscar y reemplazar, párrafo, ajustar, interlineado, etiqueta, nota, anotación, altura, justificar, textmask, máscara de fondo, máscara, wipeout, rotación, editar texto, ddedit, textedit, fuente
from: 4b76be99
---

## Qué va a crear

Dos etiquetas de habitación, centradas en sus habitaciones, una nota que se ajusta a su anchura y después una corrección en una de las etiquetas.

## Altura del texto y escala del dibujo

La altura del texto se expresa en unidades de dibujo. En un dibujo en milímetros que se trazará a 1:50, un texto de 2.5 mm de altura en el papel debe tener 2.5 × 50 = 125 unidades de altura en el modelo. En una pestaña de hoja, donde dibuja en unidades de papel, 2.5 equivale a 2.5 mm en el papel.

## Colocar una etiqueta centrada

1. Escriba `DT` y pulse {{key:Enter}} (o haga clic en {{ui:Texto}} de la barra de herramientas). La solicitud dice `Specify start point of text [Justify]:`.
2. Escriba `J` y pulse {{key:Enter}}.
3. En `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, escriba `MC` y pulse {{key:Enter}}.
4. En `Specify insertion point of text`, haga clic en el centro de una habitación.
5. En `Specify height`, escriba `250` y pulse {{key:Enter}}.
6. En `Specify rotation angle of text <0>`, pulse {{key:Enter}}.
7. En `Enter text`, escriba `KITCHEN` y pulse {{key:Enter}}.

La etiqueta aparece centrada en el punto en el que hizo clic.

8. Pulse {{key:Enter}} en la solicitud `Enter text` vacía para terminar el comando.

## Escribir una nota que se ajusta

El texto de párrafo ({{cmd:MTEXT}}) se ajusta a una anchura y se escribe directamente en el dibujo.

1. Escriba `T` y pulse {{key:Enter}}, o haga clic en {{ui:Párrafo}} de la barra de herramientas.
2. En `Specify first corner`, haga clic donde debe ir la esquina superior izquierda de la nota.
3. Para cambiar antes la altura, escriba `H`, pulse {{key:Enter}}, escriba `250` y pulse {{key:Enter}}.
4. En `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, haga clic a la derecha de la primera esquina. La distancia horizontal es la anchura a la que se ajusta el texto; la distancia vertical no lo limita.
5. Se abre un cuadro sobre el dibujo con el cursor dentro. Escriba `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Las palabras se ajustan a la anchura mientras escribe.
6. Pulse {{key:Enter}} para empezar un párrafo nuevo y escriba `CHECK ON SITE`.
7. Pulse {{key:Mod+Enter}}, haga clic en {{ui:Aceptar}} o haga clic en cualquier lugar fuera del cuadro. La nota es un solo objeto.

La barra situada encima del cuadro cambia {{ui:Altura}}, {{ui:Interlineado}} (1 es normal, 1.5 equivale a la mitad más), {{ui:Anchura}} (0 = sin ajuste) y {{ui:Justificar}} mientras escribe. {{key:Esc}} o {{ui:Cancelar}} cierran el cuadro sin añadir nada.

Las opciones de la segunda esquina son: `H` altura, `J` justificación (`TL` arriba a la izquierda … `BR` abajo a la derecha: la esquina o el centro del cuadro que permanece fijo), `L` interlineado, `R` rotación y `W` una anchura escrita en lugar de la segunda esquina.

:::note
Mientras el cuadro está abierto, {{key:Space}} escribe un espacio y {{key:Enter}} empieza un párrafo nuevo. Un DWG guardado conserva el texto de párrafo como MTEXT; un DXF R12 no tiene texto de párrafo, así que cada línea se guarda como texto independiente.
:::

### Varias líneas sueltas en su lugar

{{cmd:TEXT}} (`DT`) pide una línea cada vez: cada {{key:Enter}} empieza la línea siguiente, 1.667 veces la altura del texto más abajo, y cada línea es un objeto independiente. Pulse {{key:Enter}} en una línea vacía para terminar.

## Opciones de justificación

| Opción | El punto en el que hace clic es |
|---|---|
| Izquierda (predeterminada) | El extremo izquierdo de la línea base |
| Center | El centro de la línea base |
| Right | El extremo derecho de la línea base |
| Medio, MC | El centro del texto, tanto horizontal como verticalmente |
| TL | La esquina superior izquierda |

## Editar texto

1. Haga doble clic en un objeto de texto. Se abre en el mismo cuadro que el texto de párrafo nuevo, con el cursor al final.
2. Cambie las palabras.
3. Pulse {{key:Mod+Enter}} o haga clic fuera del cuadro. El texto del dibujo cambia; {{key:Esc}} lo deja como estaba.

{{cmd:TEXTEDIT}} (`ED`) hace lo mismo: seleccione un texto tras otro y pulse {{key:Enter}} al terminar.

Para cambiar un texto seleccionado, use el panel derecho: {{ui:Texto}}, {{ui:Altura}}, {{ui:Anchura de ajuste}} (0 = sin ajuste), {{ui:Interlineado}}, {{ui:Rotación}}, la posición X e Y y {{ui:Justificar}}. La lista {{ui:Justificar}} también ofrece Inferior izquierda, que a veces usa el texto de otros programas.

## Formato dentro del texto de párrafo de otros programas

El texto de párrafo de un DWG o DXF puede contener códigos: colores por palabra, negrita y cursiva, subrayado, sobrelínea y tachado, fracciones apiladas como 1/2, y una altura distinta para una palabra. CadCraft conserva esos códigos, los dibuja (en pantalla y en un PDF trazado) y los guarda sin cambios.

Al editar un texto de este tipo (doble clic, {{cmd:TEXTEDIT}}, el campo Texto del panel derecho o {{cmd:FIND}} con Reemplazar), se editan sus palabras sin formato. Una palabra que escribe pasa al tramo contiguo y toma su color y su estilo; los demás códigos siguen en su sitio. Si vuelve a escribir los números de una fracción apilada, esa fracción pasa a ser texto normal. Al establecer todo el texto desde el campo Texto, los códigos se conservan solo donde puede saberse qué palabras no han cambiado.

Los nombres de fuente (`\F`) se conservan y se guardan, pero todo se dibuja con una misma fuente de estilo Helvetica. Todavía no hay barra de herramientas para escribir códigos.

## Señalar algo: multidirectrices

{{ui:Directriz}} en el grupo {{ui:Anotar}} ({{cmd:MLEADER}}, `MLD`) dibuja una flecha, una línea de directriz, un tramo corto de conexión y una nota, como un solo objeto.

1. Haga clic en {{ui:Directriz}}. En `Specify leader arrowhead location`, haga clic en aquello a lo que se refiere la nota.
2. En `Specify leader landing location`, haga clic donde debe ir la nota. El tramo de conexión se orienta hacia el lado en el que hizo clic.
3. Escriba la nota en el cuadro que se abre y pulse {{key:Mod+Enter}}.

`A` y `L` en la primera pregunta definen el tamaño de la flecha y la longitud del tramo de conexión; la altura del texto procede de {{ui:Altura de texto}} para las nuevas cotas, multiplicada por {{ui:Escala global}}. Haga doble clic en una multidirectriz para cambiar sus palabras. Los pinzamientos mueven la flecha y el tramo de conexión; la nota sigue al tramo. En {{ui:Propiedades}}: {{ui:Texto}}, {{ui:Altura}}, {{ui:Anchura de ajuste}}, {{ui:Tamaño de flecha}} y {{ui:Distancia de conexión}}.

:::note
Las multidirectrices se guardan como multidirectrices reales en DWG. DXF no tiene multidirectrices en R12 ni en 2000, así que en esos formatos se guardan como las líneas, la flecha y el texto que dibujan.
:::

## Marcar cambios con una nube de revisión

{{ui:Anotar}} › {{ui:Más}} › {{ui:Nube de revisión}} ({{cmd:REVCLOUD}}, `RC`) dibuja una nube de arcos alrededor de lo que ha cambiado. El historial muestra la longitud del arco y el tipo que se usará.

- **Rectangular** (la primera vez): haga clic en dos esquinas.
- `P` **Poligonal**: haga clic en las esquinas; {{key:Enter}} cierra la nube.
- `F` **A mano alzada**: haga clic donde empieza y mueva el puntero alrededor de la zona sin hacer clic; se añade un arco por cada longitud de arco. Haga clic o pulse {{key:Enter}} para cerrarla.
- `O` **Objeto**: seleccione una polilínea cerrada, un círculo o una elipse (o una línea, un arco o una polilínea abierta); se convierte en la nube. `Reverse direction?` `Y` hace que los arcos queden hacia dentro.
- `A` **Longitud de arco**: la longitud de cada arco. Elija una que se ajuste a la escala de trazado.

La nube es una polilínea cerrada de arcos, así que se guarda en todos los formatos.

## Buscar y reemplazar palabras

{{ui:Edición}} › {{ui:Más}} › {{ui:Buscar y reemplazar}} ({{cmd:FIND}}) busca en el texto, en los valores de los atributos de bloque y en el texto de las cotas de la pestaña abierta (o solo en los objetos seleccionados).

1. Escriba las palabras en {{ui:Buscar}}. La lista muestra cada lugar en el que aparecen y el total.
2. Elija {{ui:Coincidir mayúsculas y minúsculas}}, {{ui:Solo palabras completas}} o {{ui:Usar comodines (* y ?)}} si los necesita, y desmarque lo que no deba buscar.
3. Haga clic en {{ui:Seleccionar encontrados}} para seleccionar esos objetos, o escriba las palabras nuevas en {{ui:Reemplazar por}} (la lista muestra en qué se convierte cada una) y haga clic en {{ui:Reemplazar todo}}. Un {{key:Mod+Z}} deshace todos los reemplazos.

El valor medido de una cota no es texto, así que nunca se reemplaza: en `<> TYP.`, solo puede cambiar `TYP.`.

## Ocultar las líneas detrás de una etiqueta

1. Seleccione los textos, escriba {{cmd:TEXTMASK}} y pulse {{key:Enter}}.
2. `B` pinta el fondo del dibujo detrás de ellos; `C` pide un número de color. `O` quita la máscara.
3. `Border offset factor`: {{key:Enter}} mantiene 1.5, es decir, media altura de texto alrededor del texto.

La máscara cubre las líneas que hay bajo el texto, en pantalla y al trazar. DWG 2004 o posterior y DXF 2000 la conservan; el formato DWG 2000 y DXF R12 no pueden, y al guardar se indica.

## Fuente

Todo el texto se dibuja con una fuente de estilo Helvetica, en pantalla y en los PDF. El texto de los dibujos abiertos conserva sus palabras, altura y posición, pero no su fuente original (el nombre de una fuente dentro del texto de párrafo se conserva en el archivo, véase más arriba).

En los PDF trazados, el texto en cualquier escritura europea, cirílica o griega se imprime tal cual (el PDF incluye las letras que necesita, y el texto se puede seleccionar y buscar). El texto en chino, japonés y coreano también se imprime tal cual (el trazado descarga una fuente más grande la primera vez que hace falta). El texto en árabe, persa, urdu y hebreo también se imprime tal cual (véase la sección siguiente). Los caracteres de los que ninguna fuente tiene letra se imprimen como "?", y el historial indica cuántos hay.

## Texto de derecha a izquierda: árabe, persa, urdu, hebreo

Escriba el texto como en cualquier otro lugar: {{cmd:TEXT}} y {{cmd:MTEXT}} dibujan cada línea en orden de lectura. Una línea cuya primera letra es árabe o hebrea se lee de derecha a izquierda; los números y las palabras latinas dentro de ella conservan su propio orden de izquierda a derecha, y las letras de escritura árabe se unen. Una línea que empieza con una letra latina sigue de izquierda a derecha, con las palabras de derecha a izquierda colocadas dentro de ella. Cada párrafo de un texto de varias líneas tiene su propia dirección, y un párrafo ajustado la conserva en cada línea.

El texto se guarda tal como lo escribió, así que los archivos DWG y DXF lo intercambian con otros programas sin cambios. El punto de inserción y la justificación ({{ui:Izquierda}}, {{ui:Centro}}, {{ui:Derecha}}) significan lo mismo que para cualquier texto: una nota de derecha a izquierda que deba colgar de su extremo derecho necesita {{ui:Derecha}}.

En pantalla, las letras proceden de las fuentes de su sistema. En un PDF trazado, el hebreo usa la misma fuente incrustada que el texto latino; el texto en escritura árabe hace que el trazado descargue una fuente más (menos de 1 MB, una sola vez), y entonces todo el PDF se imprime con esa fuente. Esa fuente no tiene forma propia para tres caracteres urdu (heh goal, yeh barree y el punto completo urdu): se imprimen con la forma de la letra árabe más cercana. Un dibujo que tiene a la vez texto en escritura árabe y en chino, japonés o coreano imprime uno de los dos como "?", porque un trazado lleva una sola fuente. El texto de una fuente SHX cargada se ordena y se une cuando la fuente tiene las letras en sus posiciones Unicode; para las fuentes antiguas cuyas letras ya están formadas, use {{ui:Invertir (R)}} en {{cmd:SHXFONTS}}, como antes.

## Errores habituales

- **El texto es demasiado pequeño para verse.** La altura se expresa en unidades de dibujo. En un dibujo grande, use una altura grande (véase más arriba) o haga zoom.
- **El comando terminó tras una línea.** Pulsó {{key:Enter}} en una línea vacía de {{cmd:TEXT}}. Vuelva a iniciarlo, o use texto de párrafo (`T`), donde {{key:Enter}} empieza un párrafo nuevo.
- **`T` abrió un cuadro en lugar de pedir una línea.** Como en AutoCAD, `T` es texto de párrafo ({{cmd:MTEXT}}); el texto de una sola línea es `DT`.
- **El texto se ajusta en otro punto que en AutoCAD.** CadCraft ajusta con las anchuras de Helvetica; otra fuente puede hacer que una palabra quepa un poco más o menos en una línea.
- **Texto en una copia reflejada.** Se coloca reflejado, pero sigue leyéndose de izquierda a derecha.
