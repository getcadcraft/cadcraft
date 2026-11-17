---
title: Acotar un plano
summary: Añada cotas lineales, alineadas, angulares, de radio y de diámetro, encadénelas con Continua y Línea de base, y sustituya el texto.
keywords: cota, cotas, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, cadena, serie, anotar, herramienta de cotas, medir, mm, cm, m, km, unidades, dónde, buscar, barra de herramientas
from: 9ee65123
---

## Lo que va a hacer

Una habitación acotada: anchura y altura totales, una serie de cotas a lo largo de un muro, un muro inclinado, una esquina curva y un ángulo.

Antes de empezar, lea [Definir tamaños de cota](topic:dimension-settings) si su dibujo es grande: el texto de cota mide 2.5 unidades de dibujo de alto por defecto, lo que es diminuto en un dibujo en milímetros. Para los pasos siguientes, escriba primero `DIMSCALE`, pulse {{key:Enter}}, escriba `50` y pulse {{key:Enter}}.

## Dónde están las herramientas de cota

Con el estilo de menú de CadCraft (el que CadCraft usa al inicio), las herramientas de cota están en la barra de herramientas sobre el dibujo, en el grupo {{ui:Anotar}}: {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Ángulo}}, {{ui:Radio}} y {{ui:Diámetro}}. El menú {{ui:Más}} del grupo tiene {{ui:Cota continua}} y {{ui:Cota de línea base}}. Sitúe el puntero sobre un botón para ver qué hace.

- Con el estilo de menú {{ui:Dibujo clásico}} o {{ui:Cinta}}, abra la pestaña {{ui:Anotar}}: las herramientas están en su panel {{ui:Cotas}}. {{ui:Dibujo clásico}} también tiene {{ui:Lineal}} en la pestaña {{ui:Inicio}}, bajo {{ui:Anotación}}. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).
- O escriba el comando en la línea de comandos bajo el dibujo y pulse {{key:Enter}}: `DLI` (lineal), `DAL` (alineada), `DAN` (angular), `DRA` (radio), `DDI` (diámetro), `DCO` (continua), `DBA` (línea de base).
- En una pantalla estrecha la barra de herramientas es una sola fila: deslícela hacia un lado para llegar a {{ui:Anotar}}.

Para mostrar las longitudes en milímetros, centímetros, metros o kilómetros, vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Dibuje algo que acotar

1. Escriba `PL` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@6000,0` y pulse {{key:Enter}}.
4. Escriba `@1500<60` y pulse {{key:Enter}}.
5. Escriba `@0,2700` y pulse {{key:Enter}}.
6. Escriba `@-6750,0` y pulse {{key:Enter}}.
7. Escriba `C` y pulse {{key:Enter}}. El contorno se cierra.
8. Escriba `C` y pulse {{key:Enter}} para empezar un círculo.
9. Haga clic dentro de la habitación, lejos de los muros, para el centro.
10. Escriba `600` y pulse {{key:Enter}}. Es un pilar.
11. Haga clic en {{ui:Extensión}}.

## Lineal: horizontal o vertical

1. Escriba `DLI` y pulse {{key:Enter}}.
2. En `Especifique el origen de la primera línea de extensión`, con el ajuste a objetos Extremo, haga clic en la esquina inferior izquierda.
3. En `Especifique el origen de la segunda línea de extensión`, con el ajuste a Extremo, haga clic en la esquina inferior derecha.
4. Mueva la cruz debajo de la habitación. La cota la sigue, horizontal.
5. Haga clic para colocar la línea de cota.

El historial dice `Texto de cota = 6000`.

Donde coloque la línea decide la dirección: debajo o encima da una cota horizontal; a la izquierda o a la derecha, una vertical. Para forzarla, escriba `H` (horizontal), `V` (vertical) o `R` (girada, y después un ángulo) antes de colocarla.

:::tip
Pulse {{key:Enter}} en la primera indicación en lugar de elegir un punto, y después haga clic en una línea, arco, círculo o segmento de polilínea. CadCraft toma ambos extremos por usted.
:::

## Continua: una serie de cotas

{{cmd:DIMCONTINUE}} ({{ui:Anotar}} › {{ui:Más}} › {{ui:Cota continua}}, o `DCO`) continúa desde la última cota lineal o alineada que hizo, y cada nueva empieza donde terminó la anterior.

1. Escriba `DLI` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}} para el primer origen.
3. Escriba `2000,0` y pulse {{key:Enter}} para el segundo origen.
4. Haga clic debajo de la habitación para colocarla.
5. Escriba `DCO` y pulse {{key:Enter}}.
6. Escriba `4500,0` y pulse {{key:Enter}}. Una segunda cota sigue a la primera, en la misma línea.
7. Haga clic en la esquina inferior derecha, con el ajuste a Extremo. Una tercera completa la serie.
8. Pulse {{key:Enter}} para terminar el comando.

:::note
Aquí los puntos se escriben como coordenadas absolutas a propósito. Un punto con `@` cuenta desde el último punto que dio, y el último punto es donde colocó la línea de cota anterior, no el final de la cota. Los puntos absolutos, los ajustes o una distancia directa con {{ui:Orto}} activado son más seguros en una serie de cotas.
:::

Escriba `U` y pulse {{key:Enter}} para deshacer la última cota de la serie sin salir del comando.

## Línea de base: cotas apiladas desde una línea

{{cmd:DIMBASELINE}} ({{ui:Anotar}} › {{ui:Más}} › {{ui:Cota de línea base}}, o `DBA`) mide cada nueva cota desde el primer origen de la última, y apila cada una un paso más hacia fuera.

1. Escriba `DLI` y pulse {{key:Enter}}.
2. Con el ajuste a Extremo, haga clic en la esquina inferior izquierda.
3. Con el ajuste a Extremo, haga clic en la esquina superior izquierda.
4. Mueva la cruz a la izquierda de la habitación y haga clic. Aparece una cota vertical.
5. Escriba `DBA` y pulse {{key:Enter}}.
6. Con el ajuste a Extremo, haga clic en el extremo superior del muro de 60 grados. Aparece una segunda cota vertical, un paso más hacia fuera que la primera.
7. Pulse {{key:Enter}} para terminar.

## Alineada: longitud real de una línea inclinada

1. Escriba `DAL` y pulse {{key:Enter}}.
2. Pulse {{key:Enter}} para seleccionar un objeto.
3. Haga clic en el muro de 60 grados.
4. Aleje el puntero y haga clic para colocarla.

El texto dice 1500: la longitud real, medida a lo largo del muro.

## Radio y diámetro

1. Escriba `DRA` y pulse {{key:Enter}}.
2. Haga clic en el círculo del pilar.
3. Mueva la cruz. La directriz apunta desde el centro hacia la cruz.
4. Haga clic para colocar el texto.

El texto dice `R600`. {{cmd:DIMDIAMETER}} (`DDI`) hace lo mismo con el signo ⌀ y el diámetro.

## Angular

Los muros aquí son una sola polilínea, así que mida la esquina por su vértice. (Entre dos líneas separadas, puede hacer clic en las líneas en su lugar.)

1. Escriba `DAN` y pulse {{key:Enter}}.
2. En `Seleccione arco, círculo o línea, o pulse Intro para un vértice`, pulse {{key:Enter}}.
3. En `Especifique el vértice del ángulo`, con el ajuste a Extremo, haga clic en la esquina inferior derecha.
4. En `Especifique el primer extremo del ángulo`, con el ajuste a Extremo, haga clic en la esquina inferior izquierda.
5. En `Especifique el segundo extremo del ángulo`, con el ajuste a Extremo, haga clic en el extremo superior del muro de 60 grados.
6. Mueva la cruz dentro de la habitación, cerca de la esquina, y haga clic.

El texto dice `120°`, el ángulo interior de la esquina. Si la coloca al otro lado de la esquina, la cota mide el ángulo de ese lado. Haga clic en un arco en la primera indicación para acotar el ángulo que abarca, o haga clic en dos líneas para acotar el ángulo entre ellas.

## Cambiar el texto

Para escribir su propio texto, escriba `T` y pulse {{key:Enter}} antes de colocar la cota, y después escriba el texto. En su texto, `<>` representa el valor medido: `<> TYP.` da `6000 TYP.`. Pulse {{key:Enter}} en una línea vacía para mantener el valor medido.

Para cambiar una cota existente:

1. Haga clic en ella.
2. En el panel derecho, escriba en {{ui:Texto}}. Déjelo vacío para el valor medido.
3. Pulse {{key:Enter}}.

## Las cotas siguen a la geometría

Una cota recuerda sus puntos. Arrastre uno de sus pinzamientos, o mueva, gire o escale la cota junto con los objetos que mide, y se vuelve a medir. Si estira la geometría sin mover la cota, la cota no la sigue: conserva sus propios puntos.

## Errores comunes

- **El texto y las flechas son diminutos o enormes.** Defina la escala global: vea [Definir tamaños de cota](topic:dimension-settings).
- **"Elija un punto dentro del ángulo que quiere medir."** El punto que hizo clic para una cota angular está sobre uno de los lados. Muévalo dentro del ángulo.
- **La serie continúa desde la cota equivocada.** Siempre continúa desde la última cota lineal o alineada hecha en esta sesión. Haga primero (o rehaga) la que debe continuar.
- **La cota salió vertical.** La colocó a un lado. Escriba `H` antes de colocarla.
- **Pies y pulgadas.** Defina antes el formato de longitud del dibujo como {{ui:Arquitectónicas}}, o el {{ui:Formato}} de una cota en {{ui:Propiedades}}: vea [Pies y pulgadas en cotas](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Los números no están en la unidad que quiere.** Elija {{ui:Unidades en el texto}}: vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
