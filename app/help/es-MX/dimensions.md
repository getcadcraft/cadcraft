---
title: Acote un plano
summary: Añada cotas lineales, alineadas, angulares, de radio y de diámetro, encadénelas con Cota continua y Cota de línea base, y modifique el texto.
keywords: cota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, cadena, serie, anotar, herramienta de cota, dónde, encontrar, barra de herramientas, medir, mm, cm, m, km, unidades
from: 9ee65123
---

## Lo que hará

Un cuarto acotado: ancho y alto totales, una serie de cotas a lo largo de un muro, un muro inclinado, una esquina curva y un ángulo.

Antes de empezar, lea [Defina tamaños, decimales y escala de cotas](topic:dimension-settings) si su dibujo es grande: el texto de cota mide 2.5 unidades de dibujo de alto por defecto, lo cual es diminuto en un dibujo medido en milímetros. Para los pasos siguientes, escriba `DIMSCALE`, pulse {{key:Enter}}, escriba `50` y pulse {{key:Enter}} primero.

## Dónde están las herramientas de cota

Con el estilo de menú de CadCraft (el que CadCraft usa al iniciar), las herramientas de cota están en la barra de herramientas sobre el dibujo, en el grupo {{ui:Anotar}}: {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Ángulo}}, {{ui:Radio}} y {{ui:Diámetro}}. El menú {{ui:Más}} del grupo tiene {{ui:Cota continua}} y {{ui:Cota de línea base}}. Mantenga el puntero sobre un botón para ver qué hace.

- Con el estilo de menú {{ui:Dibujo clásico}} o {{ui:Cinta}}, abra la pestaña {{ui:Anotar}}: las herramientas están en su panel {{ui:Cotas}}. {{ui:Dibujo clásico}} también tiene {{ui:Lineal}} en la pestaña {{ui:Inicio}}, debajo de {{ui:Anotación}}. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).
- O escriba el comando en la línea de comandos debajo del dibujo y pulse {{key:Enter}}: `DLI` (lineal), `DAL` (alineada), `DAN` (angular), `DRA` (radio), `DDI` (diámetro), `DCO` (continua), `DBA` (línea base).
- En una pantalla estrecha la barra de herramientas es una sola fila: deslícela hacia un lado para llegar a {{ui:Anotar}}.

Para mostrar las longitudes en milímetros, centímetros, metros o kilómetros, vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Dibuje algo para acotar

1. Escriba `PL` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@6000,0` y pulse {{key:Enter}}.
4. Escriba `@1500<60` y pulse {{key:Enter}}.
5. Escriba `@0,2700` y pulse {{key:Enter}}.
6. Escriba `@-6750,0` y pulse {{key:Enter}}.
7. Escriba `C` y pulse {{key:Enter}}. El contorno se cierra.
8. Escriba `C` y pulse {{key:Enter}} para iniciar un círculo.
9. Haga clic dentro del cuarto, lejos de los muros, para el centro.
10. Escriba `600` y pulse {{key:Enter}}. Es una columna.
11. Haga clic en {{ui:Extensión}}.

## Lineal: horizontal o vertical

1. Escriba `DLI` y pulse {{key:Enter}}.
2. En `Specify first extension line origin`, use la referencia a objetos (Punto final) en la esquina inferior izquierda y haga clic.
3. En `Specify second extension line origin`, use la referencia a objetos en la esquina inferior derecha y haga clic.
4. Mueva la cruz debajo del cuarto. La cota la sigue, horizontal.
5. Haga clic para colocar la línea de cota.

El historial indica `Dimension text = 6000`.

Donde coloque la línea decide la dirección: debajo o arriba da una cota horizontal; a la izquierda o a la derecha, una vertical. Para forzarla, escriba `H` (horizontal), `V` (vertical) o `R` (girada, y luego un ángulo) antes de colocarla.

:::tip
Pulse {{key:Enter}} en la primera indicación en lugar de elegir un punto, y luego haga clic en una línea, arco, círculo o segmento de polilínea. CadCraft toma ambos extremos por usted.
:::

## Continua: una serie de cotas

{{cmd:DIMCONTINUE}} ({{ui:Anotar}} › {{ui:Más}} › {{ui:Cota continua}}, o `DCO`) continúa desde la última cota lineal o alineada que hizo, y cada nueva empieza donde terminó la anterior.

1. Escriba `DLI` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}} para el primer origen.
3. Escriba `2000,0` y pulse {{key:Enter}} para el segundo origen.
4. Haga clic debajo del cuarto para colocarla.
5. Escriba `DCO` y pulse {{key:Enter}}.
6. Escriba `4500,0` y pulse {{key:Enter}}. Una segunda cota sigue a la primera, en la misma línea.
7. Use la referencia a objetos en la esquina inferior derecha y haga clic. Una tercera completa la serie.
8. Pulse {{key:Enter}} para terminar el comando.

:::note
Aquí los puntos se escriben como coordenadas absolutas a propósito. Un punto con `@` cuenta desde el último punto que dio, y el último punto es donde colocó la línea de cota anterior, no el extremo de la cota. Los puntos absolutos, las referencias o una distancia directa con {{ui:Orto}} activado son más seguros en una serie de cotas.
:::

Escriba `U` y pulse {{key:Enter}} para deshacer la última cota de la serie sin salir del comando.

## Línea base: cotas apiladas desde una línea

{{cmd:DIMBASELINE}} ({{ui:Anotar}} › {{ui:Más}} › {{ui:Cota de línea base}}, o `DBA`) mide cada nueva cota desde el primer origen de la última, y apila cada una un paso más afuera.

1. Escriba `DLI` y pulse {{key:Enter}}.
2. Use la referencia a objetos en la esquina inferior izquierda y haga clic.
3. Use la referencia a objetos en la esquina superior izquierda y haga clic.
4. Mueva la cruz a la izquierda del cuarto y haga clic. Aparece una cota vertical.
5. Escriba `DBA` y pulse {{key:Enter}}.
6. Use la referencia a objetos (Punto final) en el extremo superior del muro de 60 grados y haga clic. Aparece una segunda cota vertical, un paso más afuera que la primera.
7. Pulse {{key:Enter}} para terminar.

## Alineada: longitud real de una línea inclinada

1. Escriba `DAL` y pulse {{key:Enter}}.
2. Pulse {{key:Enter}} para designar un objeto.
3. Haga clic en el muro de 60 grados.
4. Mueva hacia afuera y haga clic para colocarla.

El texto dice 1500: la longitud real, medida a lo largo del muro.

## Radio y diámetro

1. Escriba `DRA` y pulse {{key:Enter}}.
2. Haga clic en el círculo de la columna.
3. Mueva la cruz. La directriz apunta desde el centro hacia la cruz.
4. Haga clic para colocar el texto.

El texto dice `R600`. {{cmd:DIMDIAMETER}} (`DDI`) hace lo mismo con el signo ⌀ y el diámetro.

## Angular

Los muros aquí son una sola polilínea, así que mida la esquina por su vértice. (Entre dos líneas separadas, puede hacer clic en las líneas.)

1. Escriba `DAN` y pulse {{key:Enter}}.
2. En `Select arc, circle or line, or Enter for a vertex`, pulse {{key:Enter}}.
3. En `Specify angle vertex`, use la referencia a objetos en la esquina inferior derecha y haga clic.
4. En `Specify first angle endpoint`, use la referencia a objetos en la esquina inferior izquierda y haga clic.
5. En `Specify second angle endpoint`, use la referencia a objetos en el extremo superior del muro de 60 grados y haga clic.
6. Mueva la cruz dentro del cuarto, cerca de la esquina, y haga clic.

El texto dice `120°`, el ángulo interior de la esquina. Si la coloca del otro lado de la esquina, la cota mide el ángulo de ese lado. Haga clic en un arco en la primera indicación para acotar el ángulo que abarca, o haga clic en dos líneas para acotar el ángulo entre ellas.

## Cambie el texto

Para escribir su propio texto, escriba `T` y pulse {{key:Enter}} antes de colocar la cota, y luego escriba el texto. En su texto, `<>` representa el valor medido: `<> TYP.` da `6000 TYP.`. Pulse {{key:Enter}} en una línea vacía para conservar el valor medido.

Para cambiar una cota existente:

1. Haga clic en ella.
2. En el panel derecho, escriba en {{ui:Texto}}. Déjelo vacío para el valor medido.
3. Pulse {{key:Enter}}.

## Las cotas siguen la geometría

Una cota recuerda sus puntos. Arrastre uno de sus pinzamientos, o mueva, gire o escale la cota junto con los objetos que mide, y se vuelve a medir. Si estira la geometría sin mover la cota, la cota no la sigue: conserva sus propios puntos.

## Errores comunes

- **El texto y las flechas son microscópicos o enormes.** Defina la escala global: vea [Defina tamaños, decimales y escala de cotas](topic:dimension-settings).
- **"Indique un punto dentro del ángulo que desea medir."** El punto en el que hizo clic para una cota angular está sobre una de las patas. Muévalo dentro del ángulo.
- **La cota continua empezó desde la cota equivocada.** Siempre continúa desde la última cota lineal o alineada hecha en esta sesión. Haga (o rehaga) primero la que desea continuar.
- **La cota salió vertical.** La colocó al costado. Escriba `H` antes de colocarla.
- **Pies y pulgadas.** Defina primero el formato de longitud del dibujo como {{ui:Arquitectónicas}}, o el {{ui:Formato}} de una cota en {{ui:Propiedades}}: vea [Pies y pulgadas en las cotas](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Los números no están en la unidad que quiere.** Elija {{ui:Unidades en el texto}}: vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
