---
title: El panel Propiedades
summary: Vea y cambie todo sobre los objetos seleccionados, muchos a la vez: coordenadas con Z, tamaños, texto, ajustes de cota, transparencia y más. Los campos admiten expresiones y longitudes con unidades.
keywords: totales, longitud total, área total, suma, longitud de la selección, propiedades, paleta de propiedades, ctrl+1, pr, ch, mo, ddmodify, varios, selección rápida, pickadd, coordenadas, z, elevación, espesor, transparencia, material, hipervínculo, expresión, quickcalc, vértice, estilo de cota, tolerancia, decimales
from: 10d6a829
---

## Qué va a aprender

Cómo abrir el panel Propiedades, cómo cambiar un objeto o cien en un solo paso, cómo escribir coordenadas exactas (con Z), cómo usar expresiones y unidades en cualquier campo numérico, y qué muestra cada tipo de objeto.

## Abrirlo

El panel está a la derecha. Para traerlo al frente:

- Pulse {{key:Mod+1}}, o escriba {{cmd:PROPERTIES}} (o `PR`, `CH`, `MO`).
- Haga doble clic en un objeto (los textos y las multidirectrices abren su editor de texto).

El panel es un panel móvil como los demás: arrastre su agarradera para anclarlo a la izquierda, a la derecha o abajo, o suéltelo sobre el dibujo para dejarlo flotante (véase [Organizar los paneles y usar un segundo monitor](common:arrange-panels)).

### Plegarlo

El botón de chincheta en la esquina superior derecha del panel activa el **ocultado automático**: el panel se pliega a una franja en el borde derecho y el dibujo gana espacio. Señale la franja (o pulse {{key:Mod+1}}) y el panel se abre sobre el dibujo; al alejarse, se pliega de nuevo. Haga clic en la chincheta otra vez para mantenerlo abierto. {{cmd:PROPERTIESCLOSE}} también lo pliega.

## Secciones

Las propiedades están agrupadas en secciones que puede plegar: **General**, **Geometría**, **Texto**, **Líneas y flechas**, **Ajuste**, **Unidades principales**, **Unidades alternativas**, **Tolerancias**, **Trama**, **Varios**, y, para bloques, **Atributos** y **Elemento de biblioteca**. Haga clic en el nombre de una sección para plegarla o abrirla; CadCraft recuerda cuáles plegó.

Arrastre la línea fina entre los nombres y los valores para hacer los nombres más anchos o más estrechos. Haga doble clic en ella para restablecerla. Con el teclado, sitúe el foco en ella y use las flechas.

## Cambiar un valor

1. Haga clic en una línea. El encabezado dice "Línea".
2. Haga clic en {{ui:Length}}. Mientras edita, el campo muestra el valor completo, no el redondeado.
3. Escriba `2500` y pulse {{key:Enter}}. La línea mide ahora 2500, conservando su punto inicial y su ángulo.

{{key:Enter}} o hacer clic en otro sitio aplica el valor; {{key:Esc}} devuelve el valor anterior. Cada cambio es un paso de deshacer.

### Expresiones y unidades

Cada campo numérico admite más que un número simple:

| Escribe | Obtiene |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (pulgadas, en un dibujo en pies y pulgadas) |
| `900mm`, `3.5m`, `2ft` | Convertido a las unidades del dibujo |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (campos de ángulo) |
| `0.5r`, `100g` | Radianes y grados centesimales, como grados |

Una longitud con unidad necesita que el dibujo tenga unidades: fije primero {{ui:Units}} en {{ui:New objects}} (sin nada seleccionado). Una entrada incorrecta se rechaza con una nota bajo el panel, y nada cambia; nunca se guarda como 0. Funciones: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; los ángulos en grados.

## Cambiar varios objetos a la vez

1. Seleccione varios objetos, por ejemplo 8 líneas y 4 cotas.
2. El encabezado dice "12 objetos", y una lista en la parte superior ofrece **Todos (12)**, **Línea (8)** y **Cota (4)**.
3. **Todos** muestra lo que tiene cada objeto (capa, color, tipo de línea…). Elija **Cota (4)** para ver los ajustes de cota.
4. Cambie un valor, por ejemplo {{ui:Decimals}} a `1`.

Las cuatro cotas cambian, en un solo paso de deshacer. Un campo que dice **Varios** significa que los objetos difieren; escribir un valor lo fija en todos ellos. Los objetos en capas bloqueadas se dejan como están, y la nota indica cuántos son.

## Totales de una selección

Con varios objetos seleccionados, la sección {{ui:Totals}} de la parte superior indica:

- **Objetos**: cuántos hay de cada clase, por ejemplo "8 líneas, 2 polilíneas, 1 círculo".
- **Longitud total**: la suma de las líneas, arcos y polilíneas (las splines también cuentan), y cuántos objetos son.
- **Área total**: la suma de los cerrados: círculos, elipses completas, polilíneas cerradas y tramas (los huecos de una trama se restan).

Se expresan en el formato de longitud del dibujo (pies y pulgadas cuando lo usa; las áreas, entonces, en pulgadas cuadradas y pies cuadrados).
La barra de estado muestra la misma longitud y área siempre que hay objetos seleccionados; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} lo desactiva. Para un solo objeto, {{ui:Geometry}} muestra su propia longitud y área, como antes.

## Coordenadas

Cada punto muestra **X**, **Y** y **Z**: inicio y fin de una línea, centros, puntos de inserción, posiciones de texto, el vértice actual de una polilínea. Las líneas también muestran **Delta X**, **Delta Y** y **Delta Z** (solo lectura). Las polilíneas y las tramas tienen una **Elevación** (una Z para todo el objeto).

El botón de mira junto al nombre de un punto le permite elegirlo en el dibujo: haga clic en él y luego en la nueva posición (las referencias funcionan). Los valores son coordenadas universales.

## General

| Campo | Qué es |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Como en el panel de capas; {{ui:By layer}} sigue a la capa |
| {{ui:Transparency}} | Por capa, por bloque, o de 0 a 90 % |
| {{ui:Thickness}} | Cuánto se extienden en Z las líneas, círculos, arcos, polilíneas, puntos y textos |
| {{ui:Material}} | Por capa, por bloque, Global o un nombre que trajo un dibujo |
| {{ui:Plot style}} | Solo lectura: los dibujos se trazan por color, mediante la [tabla de estilos de trazado](topic:plot-pdf#plot-style-tables) de la hoja |
| {{ui:Hyperlink}} | Una dirección web guardada con el objeto |

## Qué muestra cada tipo

| Seleccionado | Puede cambiar |
|---|---|
| Línea | X, Y, Z de inicio y fin; longitud; ángulo |
| Círculo | Centro; radio; diámetro; circunferencia; área (cada uno fija el radio) |
| Arco | Centro; radio; ángulo inicial y final; ángulo total; cuerda (muestra la longitud del arco y el área) |
| Elipse | Centro; radios mayor y menor; relación de radios; ángulo del eje mayor; ángulo inicial y final |
| Polilínea | El navegador de vértices (abajo); anchura global; elevación; cerrada; área si está cerrada (la escala respecto a su centro) |
| Texto | Contenido; estilo; justificación; altura; rotación; factor de anchura; ángulo de oblicuidad; anchura definida; espaciado entre líneas; anotativo; posición |
| Referencia a bloque | Punto de inserción; rotación; escala X, Y, Z y escala uniforme; valores de atributos |
| Trama | Patrón; escala; ángulo; origen; asociativa; detección de islas; color de fondo; elevación |
| Cota | Véase abajo |
| Multidirectriz | Texto; altura; anchura; lado del texto; tamaño de la punta de flecha; distancia de aterrizaje; punto de la flecha |
| {{ui:Viewport}} | Escala; centro y tamaño en la hoja; centro de vista en el modelo; activada; visualización bloqueada |

### Vértices de polilínea

{{ui:Current vertex}} indica a qué vértice pertenecen los campos de debajo. Use los botones de flecha, o escriba un número, para pasar a otro vértice; no hay límite de cuántos. Cada vértice tiene X, Y, anchura del segmento inicial y final, y el abultamiento del segmento que empieza allí (0 = recto).

## Cotas

Una cota muestra su **Estilo de cota**, lo que mide, sus puntos y todos sus ajustes:

- **Líneas y flechas:** punta de flecha para cada extremo, tamaño de flecha, tamaño de marca, colores y grosores de las líneas de cota y de extensión, ocultar cualquiera de las dos mitades o cualquiera de las líneas de extensión, desplazamiento y prolongación de las líneas de extensión.
- **Texto:** sustitución (déjelo vacío para el valor medido; `<>` representa ese valor dentro de su propio texto), estilo, color, altura, desplazamiento, posición vertical y horizontal, siempre horizontal, rotación, relleno de fondo.
- **Ajuste:** escala global, espaciado de línea base, qué se mueve cuando falta espacio, movimiento del texto.
- **Unidades principales:** formato, decimales, redondeo, prefijo, sufijo, escala de medición, separador decimal, suprimir ceros iniciales y finales; para ángulos, el formato de ángulo y sus decimales.
- **Unidades alternativas:** activadas o no, formato, decimales, multiplicador (25.4 convierte pulgadas en milímetros), redondeo, prefijo y sufijo.
- **Tolerancias:** ninguna, simétrica, desviación, límites o básica, con valores superior e inferior, decimales, altura y posición.

Cambiar cualquiera de ellos en una cota abierta descarta el dibujo que hizo de ella el otro programa, y CadCraft lo vuelve a dibujar.

:::note
La posición horizontal del texto (junto a la primera o la segunda línea de extensión) y el texto debajo de la línea se dibujan en cotas lineales y alineadas; en otras cotas se conservan y se guardan, pero todavía no se dibujan. Las opciones de Ajuste se conservan y se guardan, pero todavía no se dibujan: CadCraft coloca el texto según su propia regla (encima de la línea, fuera cuando no cabe).
:::

## Nada seleccionado

Sin nada seleccionado, el panel muestra:

- **Objetos nuevos:** la capa, el color, el tipo de línea, el grosor y la altura de texto que tendrán los objetos nuevos; las unidades del dibujo y el formato de longitud; el tipo de línea y el grosor de la capa actual; los tamaños de las nuevas cotas. En una hoja, el nombre de la hoja, el papel y la orientación van primero.
- **Vista:** el centro, la altura y la anchura de lo que está en pantalla. Escriba un valor para mover la vista allí.
- **Varios:** el icono del SCP activado o desactivado, el SCP (siempre Universal: CadCraft todavía no tiene sistemas de coordenadas de usuario) y la escala de anotación.

## Los botones de la parte superior

| Botón | Hace |
|---|---|
| Embudo | {{cmd:QSELECT}}: seleccionar por tipo y propiedad |
| Puntero | {{cmd:SELECT}}: seleccionar objetos en la línea de comandos |
| Más o 1 | Si un clic añade a la selección (más) o la reemplaza (1); el mismo ajuste que en {{ui:Settings}}, {{ui:CadCraft}} |
| Chincheta | Ocultado automático, arriba |

## Errores habituales

- **Escribir en un campo no hizo nada.** Pulse {{key:Enter}} o haga clic en otro sitio para aplicarlo. Un campo rojo y una nota significan que la entrada se rechazó.
- **Una longitud con unidad se rechaza.** El dibujo no tiene unidades. Fije {{ui:Units}} sin nada seleccionado.
- **Solo se ven Capa y Color.** Están seleccionados varios tipos de objetos y se ha elegido **Todos**. Elija un tipo en la lista de la parte superior.
- **Algunos objetos no cambiaron.** Están en una capa bloqueada. Desbloquee la capa en el panel de capas.
- **Las letras escritas fueron a un campo.** Mientras un campo tiene el cursor, las teclas escriben allí. Pulse {{key:Enter}} o {{key:Esc}}, y después escriba el comando.
