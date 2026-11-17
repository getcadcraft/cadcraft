---
title: Trama e recheo de áreas
summary: Recheba unha área cunha cor sólida ou cun patrón estándar facendo clic dentro dela ou seleccionando formas pechadas, defina a escala e o ángulo do patrón e cambie unha trama despois.
keywords: trama, bhatch, recheo, recheo sólido, patrón, ansi31, ansi37, ladrillo, terra, rede, liñas de sección, poché, illa, contorno, escala, ángulo
from: 14399174
---

## Que vai crear

Unha sección de muro recheada co patrón ANSI31, un piar deixado baleiro e un recheo sólido no piar.

## Trama facendo clic dentro dunha área

1. Debuxe un rectángulo (`REC`, `0,0`, `@2000,1200`) e un círculo dentro del (`C`, `1000,600`, `300`). Faga clic en {{ui:Extensións}}.
2. Faga clic en {{ui:Trama}} no grupo {{ui:Debuxar}}, ou escriba `H` e prema {{key:Enter}}. O historial indica o patrón actual, por exemplo `Trama actual: ANSI31, escala 1, ángulo 0°`.
3. Escriba `P` e prema {{key:Enter}}, escriba `ANSI31` e prema {{key:Enter}}.
4. Escriba `SC` e prema {{key:Enter}}, escriba `20` e prema {{key:Enter}}. Os tamaños do patrón son no papel, así que un debuxo impreso a 1:20 necesita escala 20.
5. En `Seleccione un punto interior`, faga clic dentro do rectángulo, fóra do círculo. A trama móstrase como vista previa.
6. Prema {{key:Enter}}. O rectángulo queda cuberto pola trama; o círculo interior queda baleiro, porque é unha illa.

Faga clic dentro de varias áreas antes de premer {{key:Enter}} para convertelas nunha soa trama. `U` retira a última área.

## Un recheo sólido

1. Escriba `H` e prema {{key:Enter}}.
2. Escriba `P`, prema {{key:Enter}}, escriba `SOLID` e prema {{key:Enter}}.
3. Faga clic dentro do círculo e despois prema {{key:Enter}}.

## Trama de formas pechadas que seleccione

En lugar de facer clic dentro, escriba `S` (Seleccionar obxectos) en `Seleccione un punto interior` e seleccione polilíneas pechadas, círculos ou elipses pechadas, despois prema {{key:Enter}}. As formas que están dentro doutras quedan baleiras por quendas (a exterior con trama, a seguinte baleira, e así sucesivamente).

## Patróns

Escriba `?` na pregunta do patrón para ver a lista. Os estándar son ANSI31 ata ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS e EARTH, e SOLID. En un debuxo en polgadas (ou con pés e polgadas como formato de lonxitude) úsanse os tamaños en polgadas dos patróns, como en AutoCAD; noutro caso, os tamaños en milímetros.

{{ui:Ángulo}} (`A`) xira todo o patrón: ANSI31 a 90° inclina na outra dirección.

**Ficheiros de patrón.** Escriba `F` (Ficheiro de patrón) en `Seleccione un punto interior` e escolla un ficheiro `.pat`. Os patróns que conteña únense á lista; se hai máis dun, pregúntaselle cal usar. Un ficheiro sen patróns que CadCraft poida ler indícao, e conta calquera patrón que se saltase. Os tamaños dun ficheiro `.pat` non teñen unidade propia, así que se len nas unidades do debuxo. Só se probaron ficheiros escritos no formato `.pat` habitual; ningún feito por outro programa.

## Cambiar unha trama

Selecciónea (faga clic nunha das súas liñas). En {{ui:Propiedades}}: {{ui:Patrón}}, {{ui:Escala do patrón}} e {{ui:Ángulo do patrón}}. As tramas dos debuxos abertos mostran o seu patrón cando é un dos estándar; as demais móstranse cun ton claro da súa cor.

## Erros habituais

- **"Non hai un contorno pechado arredor dese punto."** Hai un burato no contorno, ou parte del está fóra da pantalla: CadCraft só mira o que está na pantalla. Peche o burato (achegue o zoom ás esquinas) ou afaste o zoom.
- **"O patrón é demasiado denso para debuxalo a esta escala."** As liñas quedarían máis xuntas do que o debuxo pode mostrar. Use unha escala maior: probe a escala de impresión (20 para 1:20).
- **O patrón parece enorme ou minúsculo.** A escala indica unidades do debuxo por unidade do patrón; vexa o paso 4 de arriba.
- **Mover o contorno non move a trama.** Unha trama non está unida ao seu contorno. Mova os dous, ou faga a trama de novo.

## Unha trama que segue ao seu contorno

Unha trama que fai con `HATCH` recorda que contorno a delimita. Se move, xira ou escala o contorno, a trama e o seu patrón seguen o movemento. Arrastre un agarre para remodelar o contorno e a trama calcúlase de novo. Se move a trama por si soa, o seu contorno vai con ela, como unha forma recheada nun programa de debuxo.

A ligazón remata, e a liña de comandos así o indica, se o contorno deixa de pecharse ou se remodela a trama á man. A trama mantense. Escriba `AS` mentres fai tramas para crear tramas independentes. Se copia unha trama co seu contorno, a copia ten a súa propia ligazón.

`HATCHEDIT` (`HE`) cambia o patrón, a escala, o ángulo e a orixe dunha trama, e ligaa a un contorno ou remata a ligazón. A ligazón gárdase nos ficheiros DWG e DXF 2000. Un ficheiro DXF R12 non ten obxecto de trama, e as ligazóns feitas noutros programas non se len: use `HATCHEDIT` e Ligar para esas.

Unha trama que xa non ten contorno (o contorno foi borrado, ou o ficheiro chegou sen el) pode recuperalo: `HATCHGENERATEBOUNDARY` (`HGB`) debuxa unha polilínea pechada arredor de cada bucle da trama e, se responde Sí, liga a trama a elas.

## Un recheo de degradado

`GRADIENT` (`GD`) recheba unha área cun degradado en lugar dun patrón: as mesmas seleccións que `HATCH`, despois de preguntar o tipo (lineal, cilíndrico, esférico, hemisférico, curvo, e cada un deles invertido), unha cor cun tono ou dúas cores, o ángulo, e se é centrado ou non. En `HATCH` a opción `G` fai o mesmo. `HATCHEDIT` `G`, ou {{ui:Propiedades}} baixo Degradado, cambia un degradado ou converte calquera trama nun.

Un degradado móstrase na pantalla e nas impresións. Se garda como DWG 2004 ou posterior, os outros programas reciben unha trama de degradado real. DXF 2000 e DWG 2000 non teñen degradado: aí CadCraft o conserva só para si e os outros programas ven un recheo sólido na primeira cor.

## Recortar unha trama

`TRIM` corta unha trama como calquera outro obxecto. Faga clic na trama no lado da arista de corte que quere eliminar: as arestas dividen a área con trama e esa parte retírase. No modo rápido, cada obxecto é unha arista de corte; escolla as arestas primeiro (opción `T`) cando haxa moitas. Unha trama recortada xa non está ligada ao seu contorno, porque xa non o recheba.
