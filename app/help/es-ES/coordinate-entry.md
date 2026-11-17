---
title: Entrada de coordenadas y distancias
summary: Todas las formas de escribir un punto, una distancia, un ángulo o un número en la línea de comandos de CadCraft, con ejemplos.
keywords: entrada dinámica, dyn, f12, tab, coordenadas, absolutas, relativas, polares, @, distancia directa, ángulo, grados, último punto, lastpoint, escribir puntos, entrada, aritmética, cálculo, calculadora, cal, más, fracción, expresión
from: 7de9252d
---

## Puntos

Cuando la petición pida un punto, escriba una de estas opciones y pulse {{key:Enter}}:

| Escriba | Significado | Ejemplo |
|---|---|---|
| `x,y` | Absoluto: medido desde el origen 0,0 | `2500,1200` |
| `#x,y` | También absoluto (admitido por costumbre) | `#2500,1200` |
| `@dx,dy` | Relativo: a la derecha y hacia arriba desde el último punto | `@600,0` |
| `@d<a` | Polar relativo: distancia y ángulo desde el último punto | `@1500<45` |
| `d<a` | Polar absoluto: distancia y ángulo desde el origen | `3000<90` |
| un número | Distancia directa: a esa distancia del punto base, hacia la cruz | `1200` |
| `*x,y`, `@*dx,dy` | Coordenadas del mundo mientras hay un SCP definido | `*0,0` |

Con un SCP definido ({{cmd:UCS}}), `x,y`, `@dx,dy` y el ángulo de `d<a` se miden a lo largo de los ejes del SCP. Consulte [Gire la vista y use sus propias coordenadas](topic:ucs-and-turned-view).

También puede hacer clic en el dibujo; las referencias a objetos y {{ui:Orto}} se aplican a los clics.

Reglas:

- Una coma separa X de Y. Los decimales usan punto: `1250.75,300`.
- Los valores negativos van a la izquierda y hacia abajo: `@-600,0`.
- No escriba espacios: {{key:Space}} envía la línea, igual que {{key:Enter}}.
- Los números pueden usar exponentes: `1e3` equivale a 1000.
- No se escriben unidades ni notación de pies y pulgadas. Escriba números sencillos en las unidades del dibujo.

## El último punto

`@` cuenta desde el **último punto que indicó en cualquier petición de punto**, en cualquier comando: un clic, una referencia o un punto escrito. Se recuerda entre comandos, así que puede empezar una nueva línea a `@0,500` de donde terminó la anterior. Antes de indicar ningún punto, `@` cuenta desde 0,0.

Algunos casos en los que esto importa:

- En {{cmd:COPY}}, tras la primera copia el último punto es el de esa copia. `@600,0` dos veces coloca copias a 600 y 1200 del original.
- Tras colocar una cota, el último punto es donde colocó la línea de cota, no el final de la cota.

En caso de duda, use un punto absoluto, una referencia o una distancia directa.

## Entrada de distancia directa

Un número sin más es una distancia desde el **punto base** (el punto desde el que empieza la banda elástica) hacia la cruz:

1. Mueva la cruz en la dirección que desee.
2. Escriba la distancia y pulse {{key:Enter}}.

Con {{ui:Orto}} activado, la dirección se ajusta a horizontal o vertical, lo que hace que esta sea la forma más rápida de dibujar muros en ángulo recto. Si no hay punto base, o la cruz está exactamente sobre él, el número se rechaza con «Se requiere un punto o una palabra clave de opción».

## Ángulos

- En grados, como número sencillo: `30`, `-45`, `112.5`.
- Se miden en sentido antihorario desde la dirección X positiva (hacia la derecha): 0 es la derecha, 90 arriba, 180 la izquierda, 270 o -90 abajo.
- Cuando se pida un ángulo (rotación, ángulo de texto), también puede hacer clic: el ángulo se mide desde el punto base hasta el clic. Si todavía no existe punto base, el primer clic lo establece y la petición pide un segundo punto.

## Distancias

Cuando se pida una distancia (radio, desfase, altura de texto, factor de escala):

- escriba un número positivo (en un dibujo en pies y pulgadas, también `12'6"` o `6-1/2`: consulte [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), o
- haga clic en un punto: la distancia desde el punto base del comando hasta él, o
- haga clic en dos puntos cuando no haya punto base: la petición cambia a `Specify second point`.

«Requires a positive number or two points.» significa que el valor no era un número o que era negativo.

## Aritmética en un valor escrito

Siempre que se escriba una longitud, una coordenada, un ángulo o un número (la línea de comandos, la entrada dinámica, los cuadros de Propiedades y los diálogos), puede escribir un cálculo con `+`, `-`, `*`, `/` y paréntesis en lugar de resolverlo antes:

| Escriba | Resultado |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (en un dibujo en pies y pulgadas) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, en las unidades del dibujo (cuando estén definidas) |
| `@4+7/16,0` | un punto a 4.4375 a la derecha del último |
| `360/7` | un ángulo de 51.43 grados |

- Un guion escrito dentro de una longitud sigue formando parte de ella: `4-7/16` es 4 7/16 y `24'-6"` es 24 pies y 6 pulgadas. Para restar tras la marca de pies, termine primero la longitud, `24'-0"-6"`, o ponga el cálculo entre paréntesis con espacios alrededor del guion, `(24' - 6")` (dentro de paréntesis, un espacio es un espacio; fuera de ellos equivale a pulsar {{key:Enter}}).
- Un número sin unidad sumado a una longitud se toma en unidades del dibujo; multiplicar o dividir por uno escala la longitud. Dos longitudes multiplicadas dan un área, así que `2'*3'` se rechaza.
- `abs`, `round`, `ceil` y `floor` también funcionan: `round(10/3)`.
- Un cálculo que no se puede leer se rechaza indicando dónde falló, por ejemplo: «El cálculo termina demasiado pronto (carácter 3): falta un valor.» Nunca se lee nada como 0. {{cmd:CAL}} muestra el valor de un cálculo.

## Entrada dinámica

{{ui:Dyn}} ({{key:F12}}, en la barra de estado) muestra los valores junto a la cruz mientras un comando pide un punto.

- Si todavía no hay punto base (el primer punto de una línea), los dos campos son **X** e **Y**.
- Después, son la **distancia** y el **ángulo** desde el último punto.

Lo que escriba sigue yendo a la línea de comandos; el campo junto a la cruz lo muestra y la banda elástica lo sigue.

1. Escriba un valor: entra en el campo resaltado.
2. Pulse {{key:Tab}} (o una coma tras X). El valor se bloquea (en negrita) y se resalta el campo siguiente. Una distancia bloqueada mantiene la banda elástica de esa longitud mientras apunta con el ratón.
3. Escriba el segundo valor, o simplemente apunte, y pulse {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} dibuja 50 hacia arriba desde el último punto.

Pulsar {{key:Enter}} tras un solo valor, sin {{key:Tab}}, funciona como distancia directa. Los pies y pulgadas también funcionan en los campos (`12'6"`). Las peticiones de distancia y ángulo (radio de un círculo, rotación) también muestran su valor junto a la cruz.

## Opciones y valores predeterminados

- Las opciones aparecen entre corchetes. Escriba las mayúsculas de una opción (`D` para `[Diameter]`, `CL` para `CLose`) y pulse {{key:Enter}}. También funcionan inicios de palabra más largos (`DIA`).
- Un valor predeterminado aparece entre paréntesis angulares, como `<500>`. Pulse {{key:Enter}} o haga clic con el botón derecho para usarlo.

## Otras distribuciones de teclado y teclado numérico

Los nombres de comandos, los nombres cortos y las letras de opción son letras latinas. Con una distribución griega, cirílica (rusa, ucraniana, bielorrusa, serbia, macedonia, búlgara), hebrea, árabe, persa, tailandesa o coreana activa, no necesita cambiar de distribución: cuando la palabra escrita no sea, tal cual, un comando, un nombre corto o una opción, CadCraft la interpreta según las teclas pulsadas. La tecla marcada con `L` en un teclado latino sigue iniciando `LINE`, y la tecla `C` sigue respondiendo `Close`, sea cual sea la letra que la distribución le asigne. La lista de comandos coincidentes sobre la línea de comandos sigue la misma regla. El texto que escriba cuando un comando pida texto (el contenido de {{cmd:TEXT}}, un nombre) nunca se modifica.

En distribuciones cuya tecla decimal del teclado numérico da una coma, esa tecla escribe un punto en la línea de comandos y en los cuadros numéricos, de modo que `12.5` se puede escribir desde el teclado numérico. La tecla coma del teclado principal sigue separando `x,y`.

Ambas opciones se pueden desactivar en {{ui:Parámetros}}: {{ui:Commands on a non-Latin keyboard layout}} y {{ui:Keypad decimal key}}.

## La visualización de coordenadas

La barra de estado muestra las X e Y de la cruz (en el SCP cuando hay uno definido), después de las referencias y de {{ui:Orto}}. Mientras un comando tiene punto base, añade `Δ` con la distancia y el ángulo desde ese punto, por ejemplo `Δ 1500 < 30°`: los mismos números que escribiría como `@1500<30`.

Utilice {{cmd:ID}} para mostrar las coordenadas de un punto y {{cmd:DIST}} para medir entre dos puntos.
