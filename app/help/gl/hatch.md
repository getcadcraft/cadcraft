---
title: Trama e áreas de recheo
summary: Recheae unha área cunha cor sólida ou un patrón estándar facendo clic dentro dela ou escollendo formas pechadas, estableza a escala e o ángulo do patrón e cambie unha trama despois.
keywords: trama, bhatch, recheo, recheo sólido, patrón, ansi31, ansi37, ladrillo, terra, rede, liñas de sección, poché, illa, contorno, escala, ángulo
from: e7feb344
---

## Que vai facer

Unha sección de muro recheada co patrón ANSI31, un piar dentro dela deixado baleiro e un recheo sólido no piar.

## Trama facendo clic dentro dunha área

1. Debuxe un rectángulo (`REC`, `0,0`, `@2000,1200`) e un círculo dentro dele (`C`, `1000,600`, `300`). Prema {{ui:Extensións}}.
2. Prema {{ui:Trama}} no grupo {{ui:Debuxar}}, ou escriba `H` e prema {{key:Enter}}. O historial indica cal é o patrón actual, por exemplo `Current hatch: ANSI31, scale 1, angle 0°`.
3. Escriba `P` e prema {{key:Enter}}, escriba `ANSI31` e prema {{key:Enter}}.
4. Escriba `SC` e prema {{key:Enter}}, escriba `20` e prema {{key:Enter}}. Os tamaños dos patróns están no papel, así que un debuxo trazado a 1:20 quere escala 20.
5. En `Pick internal point`, faga clic dentro do rectángulo, fóra do círculo. A trama mostrase como vista previa.
6. Prema {{key:Enter}}. O rectángulo queda tramado; o círculo interior queda baleiro, porque é unha illa.

Faga clic dentro de varias áreas antes de premer {{key:Enter}} para facer unha soa trama. `U` retira a última área.

## Un recheo sólido

1. Escriba `H` e prema {{key:Enter}}.
2. Escriba `P`, prema {{key:Enter}}, escriba `SOLID` e prema {{key:Enter}}.
3. Faga clic dentro do círculo e despois prema {{key:Enter}}.

## Tramar formas pechadas que escolla

En lugar de facer clic dentro, escriba `S` (Select objects) en `Pick internal point` e escolla polilíneas pechadas, círculos ou elipses pechadas, e despois prema {{key:Enter}}. As formas dentro doutras quedan baleiras por quendas (a exterior tramada, a seguinte baleira, e así sucesivamente).

## Patróns

Escriba `?` na pregunta do patrón para ver a lista. Os estándar son ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS e EARTH, e SOLID. Nun debuxo en polgadas (ou con pés e polgadas como formato de lonxitude) úsanse os tamaños en polgadas dos patróns, como en AutoCAD; se non, os métricos en milímetros.

{{ui:Ángulo}} (`A`) xira todo o patrón: ANSI31 a 90° inclínase na outra dirección.

**Ficheiros de patróns.** Escriba `F` (Pattern file) en `Pick internal point` e escolla un ficheiro `.pat`. Os patróns que contén únense á lista; se hai máis dun, pregúntase cal usar. Un ficheiro sen ningún patrón que CadCraft poida ler indícao, e conta os patróns que omitiu. Os tamaños dun ficheiro `.pat` non teñen unidade propia, así que lense nas unidades do debuxo. Só se probaron ficheiros escritos no formato `.pat` habitual; ningún feito por outro programa.

## Cambiar unha trama

Selecciónea (faga clic nunha das súas liñas). En {{ui:Propiedades}}: {{ui:Patrón}}, {{ui:Escala do patrón}} e {{ui:Ángulo do patrón}}. As tramas de debuxos abertos mostran o seu patrón cando é un dos estándar; as demais móstranse cun ton claro da súa cor.

## Erros comúns

- **«No closed boundary round that point.»** Hai un oco no contorno, ou parte del está fóra da pantalla: CadCraft só mira o que está na pantalla. Peche o oco (amplíe as esquinas), ou aleje o zoom.
- **«The pattern is too dense to draw at this scale.»** As liñas quedarían máis xuntas do que o debuxo pode mostrar. Use unha escala maior: probe a escala de trazado (20 para 1:20).
- **O patrón parece enorme ou minúsculo.** A escala está en unidades do debuxo por unidade do patrón; vexa o paso 4 de arriba.
- **A trama deixou de seguir o seu contorno.** Unha trama feita con {{cmd:HATCH}} queda ligada aos obxectos desde os que se fixo: mova, xire ou escale o contorno e a trama vai con el; cambie a súa forma cun agarre e a trama recalcúlase. A ligazón remata cando o contorno deixa de pecharse, cando reforma a propia trama a man, ou cando a recorta, e a liña de comandos indícao. Non se perde nada: tramar de novo a área para ligala outra vez.

## Unha trama que queda co seu contorno

Unha trama feita con `HATCH` recorda o que a limita. Mova, xire ou escale o contorno e a trama e o seu patrón van con el. Arrastre un agarre para cambiar a forma do contorno e a trama recalcúlase. Mova a trama por si soa e o seu contorno tamén vén, como unha forma recheada nun programa de debuxo.

A ligazón remata, e a liña de comandos así o indica, se o contorno deixa de pecharse ou se reforma a trama a man. A trama en si queda. Escriba `AS` mentres tramas para facer tramas independentes. Copie unha trama co seu contorno e a copia terá a súa propia ligazón.

`HATCHEDIT` (`HE`) cambia o patrón, a escala, o ángulo e a orixe dunha trama, e a liga a un contorno ou remata a ligazón. A ligazón gárdase en ficheiros DWG e DXF 2000. Un ficheiro DXF R12 non ten obxecto de trama, e as ligazóns feitas noutros programas non se len: use para elas `HATCHEDIT` e Ligar.

Unha trama que xa non ten contorno (o contorno borrouse, ou o ficheiro chegou sen el) pode recuperalo: `HATCHGENERATEBOUNDARY` (`HGB`) debuxa unha polilínea pechada en cada bucle da trama e, se responde Si, liga a trama a elas.

## Un recheo de degradado

`GRADIENT` (`GD`) recheá unha área cun degradado en lugar dun patrón: as mesmas seleccións que `HATCH`, despois de preguntar o tipo (lineal, cilíndrico, esférico, hemisférico, curvo, e cada un deles invertido), unha cor con tono ou dúas cores, o ángulo, e se vai centrado ou non. En `HATCH` a opción `G` fai o mesmo. `HATCHEDIT` `G`, ou {{ui:Propiedades}} baixo Degradado, cambia un degradado ou converte calquera trama nun.

Un degradado móstrase na pantalla e nos trazados. Garde como DWG 2004 ou posterior e os outros programas reciben unha trama de degradado real. DXF 2000 e DWG 2000 non teñen degradado: aí CadCraft consérvao para si e os outros programas ven un recheo sólido na primeira cor.

## Recortar unha trama

`TRIM` recorta unha trama como calquera outro obxecto. Faga clic na trama do lado do bordo de corte que quere eliminar: os bordos parten a área tramada e ese anaco retírase. No modo rápido cada obxecto é un bordo de corte; escolla primeiro os bordos (opción `T`) cando hai moitos. Unha trama recortada xa non está ligada ao seu contorno, porque xa non o recheña.
