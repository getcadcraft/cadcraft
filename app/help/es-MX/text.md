---
title: Añadir texto y etiquetas
summary: Coloque etiquetas de espacios con texto de una línea, escriba notas con ajuste de línea usando texto de párrafo escrito directamente en el dibujo y edite el texto después.
keywords: text, dtext, mtext, mleader, multileader, leader, revcloud, nube de revisión, cloud, buscar, reemplazar, buscar y reemplazar, párrafo, ajuste, interlineado, etiqueta, nota, anotación, altura, justificar, textmask, máscara de fondo, máscara, wipeout, rotación, editar texto, ddedit, textedit, fuente
from: 4b76be99
---

## Lo que creará

Dos etiquetas de espacios, centradas en sus espacios; una nota que se ajusta a su anchura y, después, una corrección en una de las etiquetas.

## Altura del texto y escala del dibujo

La altura del texto se indica en unidades de dibujo. En un dibujo en milímetros que se trazará a 1:50, un texto de 2.5 mm de altura en el papel debe tener 2.5 × 50 = 125 unidades de altura en el modelo. En una pestaña de hoja, que se dibuja en unidades de papel, 2.5 allí equivale a 2.5 mm en el papel.

## Colocar una etiqueta centrada

1. Escriba `DT` y pulse {{key:Enter}} (o pulse {{ui:Text}} en la barra de herramientas). La solicitud dice `Precise el punto inicial del texto [Justificar]:`.
2. Escriba `J` y pulse {{key:Enter}}.
3. En `Indique una opción [Izquierda (L)/Centro (C)/Derecha (R)/Medio/TL/MC] <L>:`, escriba `MC` y pulse {{key:Enter}}.
4. En `Precise el punto de inserción del texto`, pulse en el centro de un espacio.
5. En `Indique la altura`, escriba `250` y pulse {{key:Enter}}.
6. En `Indique el ángulo de rotación del texto <0>`, pulse {{key:Enter}}.
7. En `Introduzca el texto`, escriba `KITCHEN` y pulse {{key:Enter}}.

La etiqueta aparece centrada en el punto en el que pulsó.

8. Pulse {{key:Enter}} en la solicitud `Introduzca el texto` vacía para terminar el comando.

## Escribir una nota con ajuste de línea

El texto de párrafo ({{cmd:MTEXT}}) se ajusta a una anchura y se escribe directamente en el dibujo.

1. Escriba `T` y pulse {{key:Enter}}, o pulse {{ui:Paragraph}} en la barra de herramientas.
2. En `Precise la primera esquina`, pulse donde debe ir la esquina superior izquierda de la nota.
3. Para cambiar primero la altura, escriba `H`, pulse {{key:Enter}}, escriba `250` y pulse {{key:Enter}}.
4. En `Precise la esquina opuesta [Altura/Justificar/Interlineado/Rotación/Anchura]`, pulse a la derecha de la primera esquina. La distancia a lo ancho es la anchura en la que se ajusta el texto; hasta dónde baje no lo limita.
5. Se abre un cuadro sobre el dibujo con el cursor dentro. Escriba `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Las palabras se ajustan a la anchura mientras escribe.
6. Pulse {{key:Enter}} para empezar un nuevo párrafo y escriba `CHECK ON SITE`.
7. Pulse {{key:Mod+Enter}}, pulse {{ui:OK}} o pulse en cualquier punto fuera del cuadro. La nota es un solo objeto.

La barra situada encima del cuadro cambia {{ui:Height}}, {{ui:Line spacing}} (1 es normal; 1.5 es la mitad más), {{ui:Width}} (0 = sin ajuste) y {{ui:Justify}} mientras escribe. {{key:Esc}} o {{ui:Cancel}} cierran el cuadro sin añadir nada.

Las opciones en la segunda esquina son: `H` altura, `J` justificación (`TL` superior izquierda … `BR` inferior derecha: la esquina o el centro del cuadro que se mantiene fijo), `L` interlineado, `R` rotación y `W` una anchura escrita en lugar de la segunda esquina.

:::note
Mientras el cuadro está abierto, {{key:Space}} escribe un espacio y {{key:Enter}} inicia un nuevo párrafo. Un DWG guardado conserva el texto de párrafo como MTEXT; un DXF R12 no tiene texto de párrafo, así que cada línea se guarda como texto independiente.
:::

### Varias líneas sencillas en su lugar

{{cmd:TEXT}} (`DT`) pide una línea a la vez: cada {{key:Enter}} inicia la línea siguiente, 1.667 veces la altura del texto más abajo, y cada línea es un objeto independiente. Pulse {{key:Enter}} en una línea vacía para terminar.

## Opciones de justificación

| Opción | El punto en el que pulsa es |
|---|---|
| Izquierda (predeterminada) | El extremo izquierdo de la línea base |
| Centro | El centro de la línea base |
| Derecha | El extremo derecho de la línea base |
| Medio, MC | El centro del texto, tanto a lo ancho como arriba y abajo |
| TL | La esquina superior izquierda |

## Editar texto

1. Haga doble clic en un objeto de texto. Se abre en el mismo cuadro que el texto de párrafo nuevo, con el cursor al final.
2. Cambie las palabras.
3. Pulse {{key:Mod+Enter}} o pulse fuera del cuadro. El texto del dibujo cambia; {{key:Esc}} lo deja como estaba.

{{cmd:TEXTEDIT}} (`ED`) hace lo mismo: designe un texto tras otro y pulse {{key:Enter}} al terminar.

Para cambiar un texto desde el panel derecho, selecciónelo: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = sin ajuste), {{ui:Line spacing}}, {{ui:Rotation}}, la posición X e Y y {{ui:Justify}}. La lista de {{ui:Justify}} también ofrece Inferior izquierda, que a veces usa el texto de otros programas.

## Formato dentro del texto de párrafo de otros programas

El texto de párrafo de un DWG o DXF puede llevar códigos dentro: colores por palabra, negrita y cursiva, subrayado, sobrelínea y tachado, fracciones apiladas como 1/2 y una altura distinta para una palabra. CadCraft conserva esos códigos, los dibuja (en pantalla y en un PDF trazado) y los vuelve a guardar sin cambios.

Cuando edita un texto así (doble clic, {{cmd:TEXTEDIT}}, el campo Texto del panel derecho o {{cmd:FIND}} con Reemplazar), edita sus palabras sin formato. Una palabra que escriba entra en el fragmento junto a ella y toma su color y estilo; los demás códigos se quedan donde estaban. Si vuelve a escribir los números de una fracción apilada, esa fracción pasa a ser texto sin formato. Si asigna el texto completo desde el campo Texto, los códigos se conservan solo donde puede saber qué palabras no cambiaron.

Los nombres de fuente (`\F`) se conservan y se guardan, pero todo se dibuja con una sola fuente de estilo Helvetica. Todavía no hay barra de herramientas para escribir códigos.

## Señalar algo: directrices múltiples

{{ui:Leader}} en el grupo {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) dibuja una punta de flecha, una línea de directriz, una conexión corta y una nota, como un solo objeto.

1. Pulse {{ui:Leader}}. En `Precise la ubicación de la punta de flecha de la directriz`, pulse en lo que trata la nota.
2. En `Precise la ubicación de la conexión de la directriz`, pulse donde irá la nota. La conexión se orienta hacia el lado en el que pulsó.
3. Escriba la nota en el cuadro que se abre y pulse {{key:Mod+Enter}}.

`A` y `L` en la primera pregunta indican el tamaño de la punta de flecha y la longitud de la conexión; la altura del texto proviene de {{ui:Text height}} para cotas nuevas, multiplicada por {{ui:Overall scale}}. Haga doble clic en una directriz múltiple para cambiar sus palabras. Los pinzamientos mueven la punta de flecha y la conexión; la nota sigue a la conexión. En {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} y {{ui:Landing distance}}.

:::note
Las directrices múltiples se guardan como directrices múltiples reales en DWG. DXF no tiene directrices múltiples en R12 ni en 2000, así que en esos formatos se guardan como las líneas, la punta de flecha y el texto que dibujan.
:::

## Marcar cambios con una nube de revisión

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) dibuja una nube de arcos alrededor de lo que cambió. El historial muestra la longitud del arco y el tipo que usará.

- **Rectangular** (la primera vez): pulse dos esquinas.
- `P` **Poligonal**: pulse las esquinas; {{key:Enter}} cierra la nube.
- `F` **A mano alzada**: pulse donde empieza y mueva el puntero alrededor del área sin pulsar; se añade un arco cada longitud de arco. Pulse o pulse {{key:Enter}} para cerrarla.
- `O` **Objeto**: designe una polilínea cerrada, un círculo o una elipse (o una línea, un arco o una polilínea abierta); se convertirá en la nube. `¿Invertir dirección?` `Y` vuelve los arcos hacia dentro.
- `A` **Longitud de arco**: la longitud de cada arco. Elija una que convenga a la escala de trazado.

La nube es una polilínea cerrada de arcos, así que se guarda en cualquier formato.

## Buscar y reemplazar palabras

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) busca en el texto, en los valores de los atributos de bloque y en el texto de cotas de la pestaña abierta (o solo en los objetos seleccionados).

1. Escriba las palabras en {{ui:Find}}. La lista muestra cada lugar en el que aparecen y el conteo.
2. Elija {{ui:Match case}}, {{ui:Whole words only}} o {{ui:Use wildcards (* and ?)}} si los necesita, y desmarque lo que no debe buscar.
3. Pulse {{ui:Select found}} para seleccionar esos objetos, o escriba las palabras nuevas en {{ui:Replace with}} (la lista muestra en qué se convierte cada una) y pulse {{ui:Replace all}}. Un {{key:Mod+Z}} deshace todos los reemplazos.

El valor medido de una cota no es texto, así que nunca se reemplaza: en `<> TYP.`, solo puede cambiar `TYP.`.

## Ocultar las líneas detrás de una etiqueta

1. Seleccione los textos, escriba {{cmd:TEXTMASK}} y pulse {{key:Enter}}.
2. `B` pinta el fondo del dibujo detrás de ellos; `C` pide un número de color. `O` quita la máscara.
3. `Factor de desfase del borde`: {{key:Enter}} mantiene 1.5, la mitad de la altura del texto alrededor del texto.

La máscara cubre las líneas situadas bajo el texto, en pantalla y al trazar. DWG 2004 o posterior y DXF 2000 la conservan; el formato DWG 2000 y DXF R12 no pueden, y al guardar se indica.

## Fuente

Todo el texto se dibuja con una fuente de estilo Helvetica, en pantalla y en PDF. El texto de dibujos abiertos conserva sus palabras, altura y posición, pero no su fuente original (el nombre de una fuente dentro del texto de párrafo se conserva en el archivo; vea arriba).

En los PDF trazados, el texto de cualquier escritura europea, cirílica o griega se imprime tal cual (el PDF incluye las letras que necesita y puede seguir seleccionando y buscando el texto). El texto en chino, japonés y coreano también se imprime tal cual (el trazado descarga una fuente más grande la primera vez que se necesita). El texto en árabe, persa, urdu y hebreo también se imprime tal cual (vea la siguiente sección). Los caracteres de los que ninguna fuente tiene letra se imprimen como «?», y el historial indica cuántos hubo.

## Texto de derecha a izquierda: árabe, persa, urdu, hebreo

Escriba el texto como lo haría en cualquier otro lugar: {{cmd:TEXT}} y {{cmd:MTEXT}} dibujan cada línea en orden de lectura. Una línea cuya primera letra es árabe o hebrea se lee de derecha a izquierda; los números y las palabras latinas dentro de ella conservan su propio orden de izquierda a derecha, y las letras de escritura árabe se unen. Una línea que empieza con una letra latina sigue de izquierda a derecha, con las palabras de derecha a izquierda en su lugar dentro de ella. Cada párrafo de un texto de varias líneas tiene su propia dirección, y un párrafo ajustado la mantiene en cada línea.

El texto se guarda tal como lo escribió, así que los archivos DWG y DXF lo intercambian con otros programas sin cambios. El punto de inserción y la justificación ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) significan el mismo lado que para cualquier texto: una nota de derecha a izquierda que debe colgar de su extremo derecho necesita {{ui:Right}}.

En pantalla, las letras provienen de las fuentes de su sistema. En un PDF trazado, el hebreo usa la misma fuente incrustada que el texto latino; el texto en escritura árabe hace que el trazado descargue una fuente más (menos de 1 MB, una sola vez), y luego todo el PDF se imprime con esa fuente. Esa fuente no tiene forma propia para tres caracteres urdu (heh goal, yeh barree y el punto completo urdu): se imprimen con la forma de la letra árabe más cercana. Un dibujo que tiene texto en escritura árabe y en chino, japonés o coreano imprime uno de los dos como «?», porque un trazado lleva una sola fuente. El texto en una fuente SHX cargada se ordena y une cuando la fuente tiene las letras en sus posiciones Unicode; para fuentes antiguas cuyas letras ya están formadas, use {{ui:Reverse}} en {{cmd:SHXFONTS}} como antes.

## Errores comunes

- **El texto es demasiado pequeño para verlo.** La altura se indica en unidades de dibujo. En un dibujo grande, use una altura grande (vea arriba) o acerque la vista.
- **El comando terminó después de una línea.** Pulsó {{key:Enter}} en una línea vacía en {{cmd:TEXT}}. Vuelva a iniciarlo, o use el texto de párrafo (`T`), donde {{key:Enter}} inicia un nuevo párrafo.
- **`T` abrió un cuadro en lugar de pedir una línea.** Como en AutoCAD, `T` es texto de párrafo ({{cmd:MTEXT}}); el texto de una línea es `DT`.
- **El texto se ajusta en un lugar distinto que en AutoCAD.** CadCraft ajusta con las anchuras de Helvetica; otra fuente puede hacer que una palabra quepa más o menos en una línea.
- **Texto en una copia reflejada.** Se coloca reflejado, pero sigue siendo legible de izquierda a derecha.
