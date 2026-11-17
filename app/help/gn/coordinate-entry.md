---
title: Entrada de coordenadas y distancias
summary: Todas las formas de escribir un punto, una distancia, un ángulo o un número en la línea de comandos de CadCraft, con ejemplos.
keywords: entrada dinámica, dyn, f12, tab, coordenadas, absolutas, relativas, polar, @, distancia directa, ángulo, grados, último punto, lastpoint, escribir puntos, entrada, aritmética, cálculo, calculadora, cal, más, fracción, expresión
from: 7de9252d
---

## Puntos

Cuando el aviso pida un punto, escriba una de estas opciones y presione {{key:Enter}}:

| Usted escribe | Significado | Ejemplo |
|---|---|---|
| `x,y` | Absoluta: medida desde el origen 0,0 | `2500,1200` |
| `#x,y` | También absoluta (aceptada por costumbre) | `#2500,1200` |
| `@dx,dy` | Relativa: a la derecha y arriba desde el último punto | `@600,0` |
| `@d<a` | Polar relativa: distancia y ángulo desde el último punto | `@1500<45` |
| `d<a` | Polar absoluta: distancia y ángulo desde el origen | `3000<90` |
| un solo número | Distancia directa: a esa distancia del punto base, hacia la cruz | `1200` |
| `*x,y`, `@*dx,dy` | Coordenadas del mundo mientras hay un UCS definido | `*0,0` |

Con un UCS definido ({{cmd:UCS}}), `x,y`, `@dx,dy` y el ángulo en `d<a` se miden a lo largo de los ejes del UCS. Vea [Gire la vista y use sus propias coordenadas](topic:ucs-and-turned-view).

También puede hacer clic en el plano; las referencias a objetos y {{ui:Ortogonal}} se aplican a los clics.

Reglas:

- Una coma separa la X de la Y. Los decimales usan punto: `1250.75,300`.
- Los valores negativos van a la izquierda y hacia abajo: `@-600,0`.
- No escriba espacios: {{key:Space}} envía la línea, igual que {{key:Enter}}.
- Los números pueden usar exponentes: `1e3` es 1000.
- No se escriben unidades ni notación de pies y pulgadas. Escriba números simples en las unidades del plano.

## El último punto

`@` cuenta desde el **último punto que dio en cualquier aviso de punto**, en cualquier comando: un clic, una referencia o un punto escrito. Se recuerda entre comandos, así que puede iniciar una nueva línea a `@0,500` de donde terminó la anterior. Antes de dar cualquier punto, `@` cuenta desde 0,0.

Algunos casos donde esto importa:

- En {{cmd:COPY}}, después de la primera copia, el último punto es el punto de esa copia. `@600,0` dos veces coloca copias a 600 y 1200 del original.
- Después de colocar una cota, el último punto es donde colocó la línea de cota, no el extremo de la cota.

En caso de duda, use un punto absoluto, una referencia o una distancia directa.

## Entrada de distancia directa

Un número solo es una distancia desde el **punto base** (el punto desde donde empieza la línea elástica) hacia la cruz:

1. Mueva la cruz en la dirección que desee.
2. Escriba la distancia y presione {{key:Enter}}.

Con {{ui:Ortogonal}} activado, la dirección se ajusta a horizontal o vertical, lo que hace de esta la forma más rápida de dibujar muros cuadrados. Si no hay punto base, o si la cruz está exactamente sobre él, el número se rechaza con el aviso "Se requiere un punto o una palabra clave de opción."

## Ángulos

- En grados, como número simple: `30`, `-45`, `112.5`.
- Se miden en sentido antihorario desde la dirección X positiva (hacia la derecha): 0 es la derecha, 90 es arriba, 180 es la izquierda, 270 o -90 es abajo.
- Cuando se pide un ángulo (rotación, ángulo de texto), también puede hacer clic: el ángulo se mide desde el punto base hasta el clic. Si todavía no existe un punto base, el primer clic lo define y el aviso pide un segundo punto.

## Distancias

Cuando se pide una distancia (radio, desfase, altura de texto, factor de escala):

- escriba un número positivo (en un plano de pies y pulgadas también `12'6"` o `6-1/2`: vea [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), o
- haga clic en un punto: la distancia desde el punto base del comando hasta él, o
- haga clic en dos puntos cuando no hay punto base: el aviso cambia a `Seleccione el segundo punto`.

"Se requiere un número positivo o dos puntos." significa que el valor no era un número o que era negativo.

## Aritmética en un valor escrito

En cualquier lugar donde se escriba una longitud, una coordenada, un ángulo o un número (la línea de comandos, la entrada dinámica, los cuadros de Propiedades y los diálogos), puede escribir un cálculo con `+`, `-`, `*`, `/` y paréntesis, en lugar de resolverlo antes:

| Escriba | Resultado |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (en un plano de pies y pulgadas) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, en las unidades del plano (cuando estén definidas) |
| `@4+7/16,0` | un punto a 4.4375 a la derecha del último |
| `360/7` | un ángulo de 51.43 grados |

- Un guion escrito dentro de una longitud sigue siendo parte de ella: `4-7/16` es 4 7/16 y `24'-6"` es 24 pies 6 pulgadas. Para restar después de la marca de pies, termine primero la longitud, `24'-0"-6"`, o ponga el cálculo entre paréntesis con espacios alrededor del guion, `(24' - 6")` (dentro de paréntesis un espacio es un espacio; en otros lugares presiona {{key:Enter}}).
- Un número simple sumado a una longitud está en unidades del plano; multiplicar o dividir por uno escala la longitud. Dos longitudes multiplicadas dan una superficie, por lo que `2'*3'` se rechaza.
- `abs`, `round`, `ceil` y `floor` también funcionan: `round(10/3)`.
- Un cálculo que no se puede leer se rechaza indicando dónde está el error, por ejemplo "El cálculo termina demasiado pronto (carácter 3): falta un valor." Nunca se toma nada como 0. {{cmd:CAL}} muestra el valor de un cálculo.

## Entrada dinámica

{{ui:Dyn}} ({{key:F12}}, en la barra de estado) muestra los valores junto a la cruz mientras un comando pide un punto.

- Si todavía no hay punto base (el primer punto de una línea), los dos campos son **X** e **Y**.
- Después, son la **distancia** y el **ángulo** desde el último punto.

Lo que escribe sigue yendo a la línea de comandos; el campo junto a la cruz lo muestra, y la línea elástica lo sigue.

1. Escriba un valor: entra en el campo resaltado.
2. Presione {{key:Tab}} (o una coma después de X). El valor queda fijo (se muestra en negrita) y se resalta el siguiente campo. Una distancia fija mantiene la línea elástica de esa longitud mientras apunta con el mouse.
3. Escriba el segundo valor, o solo apunte, y presione {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} dibuja 50 hacia arriba desde el último punto.

Presionar {{key:Enter}} después de un solo valor, sin {{key:Tab}}, funciona como entrada de distancia directa. Los pies y pulgadas también funcionan en los campos (`12'6"`). Los avisos de distancia y ángulo (radio de un círculo, rotación) también muestran su valor junto a la cruz.

## Opciones y valores predeterminados

- Las opciones aparecen entre corchetes. Escriba las letras mayúsculas de una opción (`D` para `[Diameter]`, `CL` para `CLose`) y presione {{key:Enter}}. También funcionan inicios más largos de la palabra (`DIA`).
- Un valor predeterminado aparece entre paréntesis angulares, como `<500>`. Presione {{key:Enter}} o haga clic derecho para usarlo.

## Otras distribuciones de teclado y el teclado numérico

Los nombres de comandos, los nombres cortos y las letras de opciones son letras latinas. Con una distribución griega, cirílica (ruso, ucraniano, bielorruso, serbio, macedonio, búlgaro), hebrea, árabe, persa, tailandesa o coreana activa, no necesita cambiar de distribución: cuando la palabra escrita no es un comando, nombre corto u opción tal como está, CadCraft la lee según las teclas que presionó. La tecla marcada `L` en un teclado latino sigue iniciando `LINE`, y la tecla `C` sigue respondiendo `Close`, sea cual sea la letra que la distribución le asigne. La lista de comandos coincidentes sobre la línea de comandos sigue la misma regla. El texto que escribe donde un comando pide texto (el contenido de {{cmd:TEXT}}, un nombre) nunca se cambia.

En distribuciones cuya tecla decimal del teclado numérico da una coma, esa tecla escribe un punto en la línea de comandos y en los cuadros de número, así que `12.5` se puede escribir en el teclado numérico. La tecla coma del teclado principal sigue separando `x,y`.

Ambas funciones se pueden desactivar en {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} y {{ui:Keypad decimal key}}.


## La visualización de coordenadas

La barra de estado muestra la X y la Y de la cruz (en el UCS cuando hay uno definido), después de las referencias y de {{ui:Ortogonal}}. Mientras un comando tiene un punto base, agrega `Δ` con la distancia y el ángulo desde ese punto, por ejemplo `Δ 1500 < 30°`: los números que escribiría como `@1500<30`.

Use {{cmd:ID}} para mostrar las coordenadas de un punto y {{cmd:DIST}} para medir entre dos puntos.
