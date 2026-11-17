---
title: El panel Propiedades
summary: Vea y cambie todo sobre los objetos seleccionados, muchos a la vez: coordenadas con Z, tamaños, texto, ajustes de cota, transparencia y más. Los campos aceptan expresiones y longitudes con unidades.
keywords: totales, longitud total, área total, suma, longitud de la selección, propiedades, paleta de propiedades, ctrl+1, pr, ch, mo, ddmodify, varía, selección rápida, pickadd, coordenadas, z, elevación, espesor, transparencia, material, hipervínculo, expresión, quickcalc, vértice, estilo de cota, tolerancia, decimales
from: 10d6a829
---

## Lo que va a aprender

Cómo abrir el panel Propiedades, cambiar un objeto o cien en un solo paso, escribir coordenadas exactas (con Z), usar expresiones y unidades en cualquier campo numérico, y lo que muestra cada tipo de objeto.

## Abrirlo

El panel está a la derecha. Para traerlo al frente:

- Pulse {{key:Mod+1}}, o escriba {{cmd:PROPERTIES}} (o `PR`, `CH`, `MO`).
- Haga doble clic en un objeto (el texto y las directrices múltiples abren su editor de texto).

El panel es un panel móvil como los demás: arrastre su pinzamiento para acoplarlo a la izquierda, a la derecha o abajo, o suéltelo sobre el dibujo para flotarlo (vea [Acomodar los paneles y usar un segundo monitor](common:arrange-panels)).

### Plegarlo

El botón de fijar en la parte superior derecha del panel activa el **ocultado automático**: el panel se pliega a una franja en el borde derecho, y el dibujo gana espacio. Apunte a la franja (o pulse {{key:Mod+1}}) y se abre sobre el dibujo; al alejarse, se pliega otra vez. Haga clic en el botón de fijar de nuevo para dejarlo abierto. {{cmd:PROPERTIESCLOSE}} también lo pliega.

## Secciones

Las propiedades están agrupadas en secciones que puede plegar: **General**, **Geometría**, **Texto**, **Líneas y flechas**, **Ajuste**, **Unidades principales**, **Unidades alternas**, **Tolerancias**, **Patrón**, **Varios**, y para bloques **Atributos** y **Elemento de biblioteca**. Haga clic en el nombre de una sección para plegarla o abrirla; CadCraft recuerda cuáles plegó.

Arrastre la línea delgada entre los nombres y los valores para hacer los nombres más anchos o más angostos. Haga doble clic en ella para restaurarla. Con el teclado, enfóquela y use las teclas de flecha.

## Cambiar un valor

1. Haga clic en una línea. El encabezado dice "Línea".
2. Haga clic en {{ui:Longitud}}. Mientras edita, el campo muestra el valor completo, no el redondeado.
3. Escriba `2500` y pulse {{key:Enter}}. La línea ahora mide 2500 de longitud, conservando su punto inicial y su ángulo.

{{key:Enter}} o hacer clic en otro lugar aplica el valor; {{key:Esc}} devuelve el valor anterior. Cada cambio es un solo paso de deshacer.

### Expresiones y unidades

Cada campo numérico acepta más que un número simple:

| Lo que escribe | Lo que obtiene |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (pulgadas, en un dibujo en pies y pulgadas) |
| `900mm`, `3.5m`, `2ft` | Convertido a las unidades del dibujo |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (campos de ángulo) |
| `0.5r`, `100g` | Radianes y grados centesimales, como grados |

Un valor con unidad requiere que el dibujo tenga unidades: configure primero {{ui:Unidades}} en {{ui:Objetos nuevos}} (sin nada seleccionado). Una entrada incorrecta se rechaza con una nota bajo el panel y nada cambia; nunca se guarda como 0. Funciones: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; ángulos en grados.

## Cambiar muchos objetos a la vez

1. Seleccione varios objetos, por ejemplo 8 líneas y 4 cotas.
2. El encabezado dice "12 objetos", y una lista arriba ofrece **Todos (12)**, **Línea (8)** y **Cota (4)**.
3. **Todos** muestra lo que tiene cada objeto (capa, color, tipo de línea…). Elija **Cota (4)** para ver los ajustes de cota.
4. Cambie un valor, por ejemplo {{ui:Decimales}} a `1`.

Las cuatro cotas cambian, en un solo paso de deshacer. Un campo que dice **Varía** significa que los objetos difieren; escribir un valor lo fija en todos. Los objetos en capas bloqueadas se dejan como están, y la nota indica cuántos son.

## Totales de una selección

Con varios objetos seleccionados, la sección {{ui:Totales}} en la parte superior indica:

- **Objetos**: cuántos de cada tipo, por ejemplo "8 líneas, 2 polilíneas, 1 círculo".
- **Longitud total**: la suma de líneas, arcos y polilíneas (las splines también cuentan), y cuántos objetos son.
- **Área total**: la suma de los cerrados: círculos, elipses completas, polilíneas cerradas y sombreados (los huecos de un sombreado se restan).

Están en el formato de longitud del dibujo (pies y pulgadas cuando los usa; las áreas, entonces, en pulgadas cuadradas y pies cuadrados).
La barra de estado muestra la misma longitud y área siempre que hay objetos seleccionados; {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Longitud y área de la selección}} › {{ui:Ocultas}} lo desactiva. Para un solo objeto, {{ui:Geometría}} muestra su propia longitud y área, como antes.

## Coordenadas

Cada punto muestra **X**, **Y** y **Z**: inicio y fin de una línea, centros, puntos de inserción, posiciones de texto, el vértice actual de una polilínea. Las líneas también muestran **Delta X**, **Delta Y** y **Delta Z** (solo lectura). Las polilíneas y los sombreados tienen una **Elevación** (una Z para todo el objeto).

El botón de cruz junto al nombre de un punto le permite elegirlo en el dibujo: haga clic en él, y luego en la nueva posición (las referencias funcionan). Los valores son coordenadas del mundo.

## General

| Campo | Qué es |
|---|---|
| {{ui:Capa}}, {{ui:Color}}, {{ui:Tipo de línea}}, {{ui:Escala de tipo de línea}}, {{ui:Grosor de línea}} | Como en el panel de capas; {{ui:PorCapa}} sigue a la capa |
| {{ui:Transparencia}} | Por capa, por bloque, o de 0 a 90 % |
| {{ui:Altura de objeto}} | Cuánto se extienden en Z las líneas, círculos, arcos, polilíneas, puntos y texto |
| {{ui:Material}} | Por capa, por bloque, Global o un nombre que trajo un dibujo |
| {{ui:Estilo de trazado}} | Solo lectura: los dibujos se trazan por color, mediante la [tabla de estilos de trazado](topic:plot-pdf#plot-style-tables) de la hoja |
| {{ui:Hipervínculo}} | Una dirección web guardada con el objeto |

## Qué muestra cada tipo

| Seleccionado | Puede cambiar |
|---|---|
| Línea | Coordenadas X, Y, Z de inicio y fin; longitud; ángulo |
| Círculo | Centro; radio; diámetro; circunferencia; área (cada uno fija el radio) |
| Arco | Centro; radio; ángulo inicial y final; ángulo total; cuerda (muestra la longitud del arco y el área) |
| Elipse | Centro; radio mayor y menor; relación de radios; ángulo del eje mayor; ángulo inicial y final |
| Polilínea | El examinador de vértices (abajo); ancho global; elevación; cerrada; área cuando está cerrada (escala respecto a su centro) |
| Texto | Contenido; estilo; justificación; altura; rotación; factor de ancho; ángulo de oblicuidad; ancho definido; espaciado de líneas; anotativo; posición |
| Referencia a bloque | Punto de inserción; rotación; escala X, Y, Z y escala uniforme; valores de atributos |
| Sombreado | Patrón; escala; ángulo; origen; asociativo; detección de islas; color de fondo; elevación |
| Cota | Vea abajo |
| Directriz múltiple | Texto; altura; ancho; lado del texto; tamaño de la punta de flecha; distancia de aterrizaje; punto de la punta de flecha |
| Ventana gráfica | Escala; centro y tamaño en la hoja; centro de vista en el modelo; activada; visualización bloqueada |

### Vértices de polilínea

{{ui:Vértice actual}} indica a qué vértice pertenecen los campos debajo. Use los botones de flecha, o escriba un número, para ir a otro vértice; no hay límite de cuántos. Cada vértice tiene X, Y, el ancho de segmento de inicio y de fin, y el abultamiento del segmento que empieza allí (0 = recto).

## Cotas

Una cota muestra su **Estilo de cota**, lo que mide, sus puntos y cada ajuste:

- **Líneas y flechas:** punta de flecha en cada extremo, tamaño de flecha, tamaño de marca, colores y grosores de las líneas de cota y de extensión, ocultar cualquiera de las mitades o cualquiera de las líneas de extensión, desfase y prolongación de la línea de extensión.
- **Texto:** sustitución (déjelo vacío para el valor medido; `<>` representa el valor dentro de su propio texto), estilo, color, altura, desfase, posición vertical y horizontal, siempre horizontal, rotación, relleno de fondo.
- **Ajuste:** escala general, espaciado de línea base, qué se mueve cuando falta espacio, movimiento del texto.
- **Unidades principales:** formato, decimales, redondeo, prefijo, sufijo, escala de medición, separador decimal, suprimir ceros iniciales y finales; para ángulos, el formato y los decimales del ángulo.
- **Unidades alternas:** activadas o no, formato, decimales, multiplicador (25.4 convierte pulgadas en milímetros), redondeo, prefijo y sufijo.
- **Tolerancias:** ninguna, simétrica, desviación, límites o básica, con valores superior e inferior, decimales, altura y posición.

Cambiar cualquiera de ellos en una cota abierta descarta el dibujo que hizo el otro programa, y CadCraft lo vuelve a dibujar.

:::note
La posición horizontal del texto (junto a la primera o segunda línea de extensión) y el texto debajo de la línea se dibujan en cotas lineales y alineadas; en otras cotas se conservan y se guardan, pero aún no se dibujan. Las opciones de Ajuste se conservan y se guardan, pero aún no se dibujan: CadCraft coloca el texto con su propia regla (encima de la línea, fuera cuando no cabe).
:::

## Nada seleccionado

Sin nada seleccionado, el panel muestra:

- **Objetos nuevos:** la capa, color, tipo de línea, grosor y altura de texto que reciben los objetos nuevos; las unidades del dibujo y el formato de longitud; el tipo de línea y el grosor de la capa actual; tamaños para cotas nuevas. En una hoja, el nombre, el papel y la orientación de la hoja aparecen primero.
- **Vista:** el centro, altura y ancho de lo que se ve en pantalla. Escriba un valor para mover la vista allí.
- **Varios:** el icono del SCP encendido o apagado, el SCP (siempre Mundo: CadCraft todavía no tiene sistemas de coordenadas de usuario) y la escala de anotación.

## Los botones de arriba

| Botón | Hace |
|---|---|
| Embudo | {{cmd:QSELECT}}: selecciona por tipo y propiedad |
| Puntero | {{cmd:SELECT}}: selecciona objetos en la línea de comandos |
| Más o 1 | Si un clic añade a la selección (más) o la reemplaza (1); el mismo ajuste que en {{ui:Parámetros}}, {{ui:CadCraft}} |
| Fijar | Ocultado automático, arriba |

## Errores comunes

- **Escribir en un campo no hizo nada.** Pulse {{key:Enter}} o haga clic en otro lugar para aplicarlo. Un campo rojo y una nota significan que la entrada fue rechazada.
- **Una longitud con unidad se rechaza.** El dibujo no tiene unidades. Configure {{ui:Unidades}} sin nada seleccionado.
- **Solo se ven Capa y Color.** Se seleccionaron varios tipos de objetos y está elegido **Todos**. Elija un tipo en la lista de arriba.
- **Algunos objetos no cambiaron.** Están en una capa bloqueada. Desbloquee la capa en el panel de capas.
- **Las letras escritas entraron en un campo.** Mientras un campo tiene el cursor, las teclas escriben ahí. Pulse {{key:Enter}} o {{key:Esc}}, y luego escriba el comando.
