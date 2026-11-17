---
title: Entrada de coordenadas y distancias
summary: Todas las formas de escribir un punto, una distancia, un ángulo o un número en la línea de comandos de CadCraft, con ejemplos.
keywords: entrada dinámica, dyn, f12, tab, coordenadas, absoluta, relativa, polar, @, distancia directa, ángulo, grados, último punto, lastpoint, escribir puntos, entrada, aritmética, cálculo, calculadora, cal, más, fracción, expresión
from: 7de9252d
---

## Puntos

Cuando la solicitud pida un punto, escriba una de estas opciones y pulse {{key:Enter}}:

| Escriba | Significado | Ejemplo |
|---|---|---|
| `x,y` | Absoluta: medida desde el origen 0,0 | `2500,1200` |
| `#x,y` | También absoluta (se acepta por costumbre) | `#2500,1200` |
| `@dx,dy` | Relativa: hacia la derecha y hacia arriba desde el último punto | `@600,0` |
| `@d<a` | Polar relativa: distancia y ángulo desde el último punto | `@1500<45` |
| `d<a` | Polar absoluta: distancia y ángulo desde el origen | `3000<90` |
| un número solo | Distancia directa: a esa distancia del punto base, hacia el cursor en cruz | `1200` |
| `*x,y`, `@*dx,dy` | Coordenadas universales mientras hay un UCS definido | `*0,0` |

Con un UCS definido ({{cmd:UCS}}), `x,y`, `@dx,dy` y el ángulo en `d<a` se miden a lo largo de los ejes del UCS. Vea [Gire la vista y use sus propias coordenadas](topic:ucs-and-turned-view).

O haga clic en el dibujo; las referencias a objetos y Orto se aplican a los clics.

Reglas:

- Una coma separa X de Y. Los decimales usan punto: `1250.75,300`.
- Los valores negativos van a la izquierda y hacia abajo: `@-600,0`.
- No escriba espacios: {{key:Space}} envía la línea, igual que {{key:Enter}}.
- Los números pueden usar exponentes: `1e3` es 1000.
- No se escriben unidades ni notación de pies y pulgadas. Escriba números simples en las unidades del dibujo.

## El último punto

`@` cuenta desde el **último punto que indicó en cualquier solicitud de punto**, en cualquier comando: un clic, una referencia a objetos o un punto escrito. Se recuerda entre comandos, así que puede iniciar una nueva línea a `@0,500` de donde terminó la anterior. Antes de indicar algún punto, `@` cuenta desde 0,0.

Algunos casos en los que esto importa:

- En {{cmd:COPY}}, después de la primera copia el último punto es el de esa copia. Escribir `@600,0` dos veces coloca copias a 600 y 1200 del original.
- Después de colocar una cota, el último punto es donde colocó la línea de cota, no el extremo de la cota.

En caso de duda, use un punto absoluto, una referencia a objetos o una distancia directa.

## Entrada de distancia directa

Un número solo es una distancia desde el **punto base** del comando (el punto desde el que parte la línea elástica) hacia el cursor en cruz:

1. Mueva el cursor en cruz en la dirección que desee.
2. Escriba la distancia y pulse {{key:Enter}}.

Con {{ui:Orto}} activado, la dirección se ajusta a horizontal o vertical, lo que hace de este el método más rápido para dibujar muros cuadrados. Si no hay punto base, o si el cursor en cruz está exactamente sobre él, el número se rechaza con «Se requiere un punto o una palabra clave de opción.»

## Ángulos

- En grados, como número simple: `30`, `-45`, `112.5`.
- Se miden en sentido antihorario desde la dirección positiva de X (hacia la derecha): 0 es derecha, 90 arriba, 180 izquierda, 270 o -90 abajo.
- Cuando se pide un ángulo (giro, ángulo de texto), también puede hacer clic: el ángulo se mide desde el punto base hasta el clic. Si todavía no existe un punto base, el primer clic lo define y la solicitud pide un segundo punto.

## Distancias

Cuando se pide una distancia (radio, desfase, altura de texto, factor de escala):

- escriba un número positivo (en un dibujo en pies y pulgadas también `12'6"` o `6-1/2`: vea [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), o
- haga clic en un punto: la distancia desde el punto base del comando hasta él, o
- haga clic en dos puntos cuando no haya punto base: la solicitud cambia a `Precise el segundo punto`.

«Se requiere un número positivo o dos puntos.» significa que el valor no era un número, o que era negativo.

## Operaciones aritméticas en un valor escrito

En cualquier lugar donde se escriba una longitud, una coordenada, un ángulo o un número (la línea de comandos, la entrada dinámica, los cuadros de Propiedades y los cuadros de diálogo), puede escribir un cálculo con `+`, `-`, `*`, `/` y paréntesis en lugar de calcularlo antes:

| Escriba | Resultado |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (en un dibujo en pies y pulgadas) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, en las unidades del dibujo (cuando estén definidas) |
| `@4+7/16,0` | un punto a 4.4375 a la derecha del último |
| `360/7` | un ángulo de 51.43 grados |

- Un guion escrito dentro de una longitud sigue formando parte de ella: `4-7/16` es 4 7/16 y `24'-6"` es 24 pies 6 pulgadas. Para restar después de una marca de pies, termine primero la longitud, `24'-0"-6"`, o ponga el cálculo entre paréntesis con espacios alrededor del guion, `(24' - 6")` (dentro de paréntesis un espacio es un espacio; en otro lugar equivale a pulsar {{key:Enter}}).
- Un número simple sumado a una longitud se toma en unidades del dibujo; multiplicarlo o dividirlo por uno escala la longitud. Dos longitudes multiplicadas dan un área, por lo que `2'*3'` se rechaza.
- `abs`, `round`, `ceil` y `floor` también funcionan: `round(10/3)`.
- Un cálculo que no se puede leer se rechaza indicando dónde está el error, por ejemplo «El cálculo termina demasiado pronto (carácter 3): falta un valor.» Nunca se lee nada como 0. {{cmd:CAL}} muestra el valor de un cálculo.

## Entrada dinámica

{{ui:Dyn}} ({{key:F12}}, en la barra de estado) muestra los valores junto al cursor en cruz mientras un comando pide un punto.

- Si todavía no hay punto base (el primer punto de una línea), los dos campos son **X** e **Y**.
- Después, son la **distancia** y el **ángulo** desde el último punto.

Lo que escriba sigue yendo a la línea de comandos; el campo junto al cursor en cruz lo muestra, y la línea elástica lo sigue.

1. Escriba un valor: entra en el campo resaltado.
2. Pulse {{key:Tab}} (o una coma después de X). El valor se bloquea (se muestra en negrita) y se resalta el campo siguiente. Una distancia bloqueada mantiene la línea elástica de esa longitud mientras apunta con el ratón.
3. Escriba el segundo valor, o simplemente apunte, y pulse {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} dibuja 50 hacia arriba desde el último punto.

Pulsar {{key:Enter}} después de un solo valor, sin {{key:Tab}}, funciona como entrada de distancia directa. Los pies y pulgadas también funcionan en los campos (`12'6"`). Las solicitudes de distancia y ángulo (el radio de un círculo, un giro) también muestran su valor junto al cursor en cruz.

## Opciones y valores predeterminados

- Las opciones aparecen entre corchetes. Escriba las letras mayúsculas de una opción (`D` para `[Diameter]`, `CL` para `CLose`) y pulse {{key:Enter}}. También funcionan inicios más largos de la palabra (`DIA`).
- Un valor predeterminado aparece entre paréntesis angulares, como `<500>`. Pulse {{key:Enter}} o haga clic derecho para usarlo.

## Otras distribuciones de teclado y el teclado numérico

Los nombres de comandos, los nombres cortos y las letras de opción son letras latinas. Con una distribución griega, cirílica (rusa, ucraniana, bielorrusa, serbia, macedonia, búlgara), hebrea, árabe, persa, tailandesa o coreana activa, no necesita cambiar de distribución: cuando la palabra que escribió no es un comando, nombre corto ni opción tal como está, CadCraft la lee según las teclas que pulsó. La tecla marcada con `L` en un teclado latino sigue iniciando `LINE`, y la tecla `C` sigue respondiendo `Close`, sin importar qué letra ponga la distribución en ella. La lista de comandos coincidentes sobre la línea de comandos sigue la misma regla. El texto que escriba donde un comando pide texto (el contenido de {{cmd:TEXT}}, un nombre) nunca se modifica.

En distribuciones cuya tecla decimal del teclado numérico da una coma, esa tecla escribe un punto decimal en la línea de comandos y en los cuadros numéricos, así que `12.5` se puede escribir en el teclado numérico. La tecla de coma del teclado principal sigue separando `x,y`.

Ambas opciones se pueden desactivar en {{ui:Parámetros}}: {{ui:Commands on a non-Latin keyboard layout}} y {{ui:Keypad decimal key}}.

## La visualización de coordenadas

La barra de estado muestra las coordenadas X e Y del cursor en cruz (en el UCS cuando hay uno definido), después de las referencias a objetos y de Orto. Mientras un comando tiene un punto base, agrega `Δ` con la distancia y el ángulo desde ese punto, por ejemplo `Δ 1500 < 30°`: los números que escribiría como `@1500<30`.

Use {{cmd:ID}} para mostrar las coordenadas de un punto y {{cmd:DIST}} para medir entre dos puntos.
