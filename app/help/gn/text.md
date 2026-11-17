---
title: Agregar texto y etiquetas
summary: Colocar etiquetas de ambiente con texto de una línea, escribir notas con ajuste de línea con texto de párrafo escrito en el lugar, y editar el texto después.
keywords: texto, dtext, mtext, mleader, multileader, leader, revcloud, nube de revisión, nube, buscar, reemplazar, buscar y reemplazar, párrafo, ajuste, interlineado, etiqueta, nota, anotación, altura, justificar, textmask, máscara de fondo, máscara, wipeout, rotación, editar texto, ddedit, textedit, fuente
from: 4b76be99
---

## Lo que va a crear

Dos etiquetas de ambiente, centradas en sus ambientes, una nota que se ajusta a su ancho, y luego una corrección en una de las etiquetas.

## Altura del texto y escala del plano

La altura del texto está en unidades de dibujo. En un plano en milímetros que se trazará a 1:50, un texto de 2.5 mm de alto en papel debe medir 2.5 × 50 = 125 unidades de alto en el modelo. En una pestaña de hoja, usted dibuja en unidades de papel, así que 2.5 allí son 2.5 mm en papel.

## Colocar una etiqueta centrada

1. Escriba `DT` y presione {{key:Enter}} (o haga clic en {{ui:Texto}} en la barra de herramientas). La línea de comando dice `Especifique el punto inicial del texto [Justificar]:`.
2. Escriba `J` y presione {{key:Enter}}.
3. En `Ingrese una opción [Izquierda [L]/Centro/Derecha [R]/Medio/TL/MC] <L>:`, escriba `MC` y presione {{key:Enter}}.
4. En `Especifique el punto de inserción del texto`, haga clic en el centro de un ambiente.
5. En `Especifique la altura`, escriba `250` y presione {{key:Enter}}.
6. En `Especifique el ángulo de rotación del texto <0>`, presione {{key:Enter}}.
7. En `Ingrese el texto`, escriba `COCINA` y presione {{key:Enter}}.

La etiqueta aparece, centrada en el punto donde hizo clic.

8. Presione {{key:Enter}} en el aviso `Ingrese el texto` vacío para terminar el comando.

## Escribir una nota que se ajusta

El texto de párrafo ({{cmd:MTEXT}}) se ajusta a un ancho y se escribe directamente en el plano.

1. Escriba `T` y presione {{key:Enter}}, o haga clic en {{ui:Párrafo}} en la barra de herramientas.
2. En `Especifique la primera esquina`, haga clic donde va la esquina superior izquierda de la nota.
3. Para cambiar primero la altura, escriba `H`, presione {{key:Enter}}, escriba `250` y presione {{key:Enter}}.
4. En `Especifique la esquina opuesta [Altura [H]/Justificar [J]/Interlineado [L]/Rotación [R]/Ancho [W]]`, haga clic a la derecha de la primera esquina. La distancia de lado a lado es el ancho al que se ajusta el texto; qué tan abajo haga clic no lo limita.
5. Se abre un cuadro sobre el plano con el cursor adentro. Escriba `TODAS LAS COTAS ESTÁN EN MILÍMETROS SALVO INDICACIÓN CONTRARIA`. Las palabras se ajustan al ancho mientras escribe.
6. Presione {{key:Enter}} para iniciar un nuevo párrafo y escriba `VERIFICAR EN OBRA`.
7. Presione {{key:Mod+Enter}}, haga clic en {{ui:Aceptar}}, o haga clic en cualquier parte fuera del cuadro. La nota queda como un solo objeto.

La barra encima del cuadro cambia {{ui:Altura}}, {{ui:Interlineado}} (1 es normal, 1.5 es una vez y media más), {{ui:Ancho}} (0 = sin ajuste) y {{ui:Justificar}} mientras escribe. {{key:Esc}} o {{ui:Cancelar}} cierran el cuadro sin agregar nada.

Las opciones en la segunda esquina: `H` altura, `J` justificación (`TL` arriba izquierda … `BR` abajo derecha: la esquina o el centro del cuadro que se queda fijo), `L` interlineado, `R` rotación, `W` un ancho escrito en lugar de la segunda esquina.

:::note
Mientras el cuadro está abierto, {{key:Space}} escribe un espacio y {{key:Enter}} inicia un nuevo párrafo. Un DWG guardado mantiene el texto de párrafo como MTEXT; un DXF R12 no tiene texto de párrafo, así que cada línea se guarda como su propio texto.
:::

### Varias líneas sueltas en cambio

{{cmd:TEXT}} (`DT`) pide una línea a la vez: cada {{key:Enter}} inicia la línea siguiente, 1.667 veces la altura del texto más abajo, y cada línea es su propio objeto. Presione {{key:Enter}} en una línea vacía para terminar.

## Opciones de justificación

| Opción | El punto donde hace clic es |
|---|---|
| Izquierda (predeterminado) | El extremo izquierdo de la línea base |
| Centro | El medio de la línea base |
| Derecha | El extremo derecho de la línea base |
| Medio, MC | El medio del texto, tanto a lo ancho como arriba y abajo |
| TL | La esquina superior izquierda |

## Editar texto

1. Haga doble clic en un objeto de texto. Se abre en el mismo cuadro que el texto de párrafo nuevo, con el cursor al final.
2. Cambie las palabras.
3. Presione {{key:Mod+Enter}} o haga clic fuera del cuadro. El texto en el plano cambia; {{key:Esc}} lo deja como estaba.

{{cmd:TEXTEDIT}} (`ED`) hace lo mismo: elija un texto tras otro, y presione {{key:Enter}} al terminar.

Seleccione un texto para cambiarlo en el panel derecho: {{ui:Texto}}, {{ui:Altura}}, {{ui:Ancho de ajuste}} (0 = sin ajuste), {{ui:Interlineado}}, {{ui:Rotación}}, la posición X e Y y {{ui:Justificar}}. La lista de {{ui:Justificar}} también ofrece Abajo izquierda, que a veces usa el texto de otros programas.

## Formato dentro del texto de párrafo de otros programas

El texto de párrafo en un DWG o DXF puede llevar códigos adentro: colores por palabra, negrita y cursiva, subrayado, sobrelínea y tachado, fracciones apiladas como 1/2, y una altura distinta para una palabra. CadCraft conserva esos códigos, los dibuja (en pantalla y en un PDF trazado) y los guarda de nuevo sin cambios.

Al editar un texto así (doble clic, {{cmd:TEXTEDIT}}, el campo Texto del panel derecho, o {{cmd:FIND}} con Reemplazar), usted edita sus palabras simples. Una palabra que escribe entra en el fragmento junto a ella y toma su color y estilo; los demás códigos quedan donde están. Si vuelve a escribir los números de una fracción apilada, esa fracción pasa a ser texto simple. Fijar todo el texto desde el campo Texto conserva los códigos solo donde puede saber qué palabras quedaron.

Los nombres de fuente (`\F`) se conservan y se guardan, pero todo se dibuja con la única fuente tipo Helvetica. Todavía no hay barra de herramientas para escribir códigos.

## Señalar algo: multiguías

{{ui:Guía}} en el grupo {{ui:Anotar}} ({{cmd:MLEADER}}, `MLD`) dibuja una flecha, una línea de guía, un tramo corto y una nota, como un solo objeto.

1. Haga clic en {{ui:Guía}}. En `Especifique la ubicación de la punta de la flecha de guía`, haga clic en aquello de lo que trata la nota.
2. En `Especifique la ubicación del tramo de guía`, haga clic donde va la nota. El tramo se orienta hacia el lado donde hizo clic.
3. Escriba la nota en el cuadro que se abre, y presione {{key:Mod+Enter}}.

`A` y `L` en la primera pregunta fijan el tamaño de la flecha y la longitud del tramo; la altura del texto viene de {{ui:Altura del texto}} para las cotas nuevas, multiplicada por {{ui:Escala general}}. Haga doble clic en una multiguía para cambiar sus palabras. Los pinzamientos mueven la punta de la flecha y el tramo; la nota sigue al tramo. En {{ui:Propiedades}}: {{ui:Texto}}, {{ui:Altura}}, {{ui:Ancho de ajuste}}, {{ui:Tamaño de flecha}} y {{ui:Distancia de tramo}}.

:::note
Las multiguías se guardan como multiguías reales en DWG. DXF no tiene multiguías en R12 ni en 2000, así que allí se guardan como las líneas, la flecha y el texto que dibujan.
:::

## Marcar cambios con una nube de revisión

{{ui:Anotar}} › {{ui:Más}} › {{ui:Nube de revisión}} ({{cmd:REVCLOUD}}, `RC`) dibuja una nube de arcos alrededor de lo que cambió. El historial muestra la longitud del arco y el tipo que usará.

- **Rectangular** (la primera vez): haga clic en dos esquinas.
- `P` **Poligonal**: haga clic en las esquinas; {{key:Enter}} cierra la nube.
- `F` **A mano alzada [F]**: haga clic donde empieza y mueva el puntero alrededor del área sin hacer clic; se agrega un arco cada longitud de arco. Haga clic o presione {{key:Enter}} para cerrarla.
- `O` **Objeto**: elija una polilínea cerrada, un círculo o una elipse (o una línea, un arco o una polilínea abierta); se convierte en la nube. `¿Invertir dirección?` `Y` vuelve los arcos hacia adentro.
- `A` **Longitud de arco [A]**: la longitud de cada arco. Elija una que convenga a la escala de trazado.

La nube es una polilínea cerrada de arcos, así que se guarda en todos los formatos.

## Buscar y reemplazar palabras

{{ui:Editar}} › {{ui:Más}} › {{ui:Buscar y reemplazar}} ({{cmd:FIND}}) busca en el texto, los valores de los atributos de bloque y el texto de las cotas en la pestaña abierta (o solo en los objetos seleccionados).

1. Escriba las palabras en {{ui:Buscar}}. La lista muestra cada lugar donde están, y la cantidad.
2. Elija {{ui:Respetar mayúsculas}}, {{ui:Solo palabras completas}} o {{ui:Usar comodines (* y ?)}} si los necesita, y desmarque lo que no debe buscar.
3. Haga clic en {{ui:Seleccionar lo hallado}} para seleccionar esos objetos, o escriba las palabras nuevas en {{ui:Reemplazar con}} (la lista muestra en qué se convierte cada una) y haga clic en {{ui:Reemplazar todo}}. Un {{key:Mod+Z}} deshace todos los reemplazos.

El valor medido de una cota no es texto, así que nunca se reemplaza: en `<> TYP.`, solo puede cambiarse `TYP.`.

## Ocultar las líneas detrás de una etiqueta

1. Seleccione los textos, escriba {{cmd:TEXTMASK}} y presione {{key:Enter}}.
2. `B` pinta el fondo del plano detrás de ellos; `C` pide un número de color. `O` quita la máscara.
3. `Border offset factor`: {{key:Enter}} mantiene 1.5, la mitad de una altura de texto alrededor del texto.

La máscara cubre las líneas debajo del texto, en pantalla y al trazar. DWG 2004 o posterior y DXF 2000 la conservan; el DWG 2000 y el DXF R12 no pueden, y al guardar se indica.

## Fuente

Todo el texto se dibuja con una fuente tipo Helvetica, en pantalla y en los PDF. El texto de los planos abiertos conserva sus palabras, altura y posición, pero no su fuente original (el nombre de una fuente dentro del texto de párrafo se conserva en el archivo, vea arriba).

En los PDF trazados, el texto en cualquier escritura europea, cirílica o griega se imprime tal como es (el PDF lleva las letras que necesita, y aún puede seleccionar y buscar el texto). El texto en chino, japonés y coreano también se imprime tal como es (el trazado obtiene una fuente más grande la primera vez que hace falta). El texto en árabe, persa, urdu y hebreo también se imprime tal como es (vea la sección siguiente). Los caracteres que ninguna fuente tiene como letra se imprimen como "?", y el historial indica cuántos hubo.

## Texto de derecha a izquierda: árabe, persa, urdu, hebreo

Escriba el texto como en cualquier otro lugar: {{cmd:TEXT}} y {{cmd:MTEXT}} dibujan cada línea en orden de lectura. Una línea cuya primera letra es árabe o hebrea se lee de derecha a izquierda; los números y las palabras latinas dentro de ella mantienen su propio orden de izquierda a derecha, y las letras de escritura árabe se unen. Una línea que empieza con una letra latina queda de izquierda a derecha, con las palabras de derecha a izquierda en su lugar dentro. Cada párrafo de un texto de varias líneas tiene su propia dirección, y un párrafo ajustado la mantiene en cada línea.

El texto se guarda tal como lo escribió, así que los archivos DWG y DXF lo intercambian con otros programas sin cambios. El punto de inserción y la justificación ({{ui:Izquierda}}, {{ui:Centro}}, {{ui:Derecha}}) significan el mismo lado que para cualquier texto: una nota de derecha a izquierda que debe colgar de su extremo derecho necesita {{ui:Derecha}}.

En pantalla, las letras vienen de las fuentes de su sistema. En un PDF trazado, el hebreo usa la misma fuente incrustada que el texto latino; el texto en escritura árabe hace que el trazado obtenga una fuente más (menos de 1 MB, una sola vez), y entonces todo el PDF se imprime con esa fuente. Esa fuente no tiene forma propia para tres caracteres urdu (heh goal, yeh barree y el punto completo urdu): se imprimen con la forma de la letra árabe más cercana. Un plano que tiene texto en escritura árabe y texto en chino, japonés o coreano imprime uno de los dos como "?", porque un trazado lleva una sola fuente. El texto en una fuente SHX cargada se ordena y une cuando la fuente tiene las letras en sus lugares Unicode; para las fuentes antiguas cuyas letras ya están formadas, use {{ui:Invertir [R]}} en {{cmd:SHXFONTS}} como antes.

## Errores comunes

- **El texto es demasiado pequeño para verlo.** La altura está en unidades de dibujo. En un plano grande, use una altura grande (vea arriba), o acerque la vista.
- **El comando terminó después de una línea.** Presionó {{key:Enter}} en una línea vacía en {{cmd:TEXT}}. Empiece de nuevo, o use texto de párrafo (`T`), donde {{key:Enter}} inicia un nuevo párrafo.
- **`T` abrió un cuadro en lugar de pedir una línea.** Como en AutoCAD, `T` es texto de párrafo ({{cmd:MTEXT}}); el texto de una línea es `DT`.
- **El texto se ajusta en otro lugar que en AutoCAD.** CadCraft ajusta con los anchos de Helvetica; otra fuente puede hacer que una palabra entre más o menos en una línea.
- **Texto en una copia espejada.** Se coloca espejado, pero se mantiene legible de izquierda a derecha.
