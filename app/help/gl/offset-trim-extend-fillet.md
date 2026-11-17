---
title: Desfasar, recortar, estender, empalmar e chaflanar muros
summary: Converta liñas simples en muros dobres con Desfasar, limpe as esquinas con Empalme, e corte e alongue liñas con Recortar e Estender.
keywords: desfasar, recortar, estender, empalme, chaflán, bisel, partir, partir en punto, alongar, muros, esquina, cortar, alongar, paralelo, radio, limpar
from: c6c5cbd0
---

## O que vai facer

Unha pequena habitación con muros de 200 de grosor: debúxase a cara interior, desfásase a cara exterior, límpanse as esquinas e córtase unha porta nun dos muros.

## Debuxar a cara interior

1. Escriba `L` e prema {{key:Enter}}.
2. Escriba `0,0` e prema {{key:Enter}}.
3. Escriba `@5000,0` e prema {{key:Enter}}.
4. Escriba `@0,4000` e prema {{key:Enter}}.
5. Escriba `@-5000,0` e prema {{key:Enter}}.
6. Escriba `C` e prema {{key:Enter}}.
7. Faga clic en {{ui:Extensións}}.

Ten catro liñas separadas. (Unha polilínea pechada desfásase dunha vez; as liñas separadas mostran como Empalme limpa as esquinas.)

## Desfasar a cara exterior

1. Escriba `O` e prema {{key:Enter}}. O aviso di `Seleccione a distancia de desfase [A través (T)] <A través (T)>:`.
2. Escriba `200` e prema {{key:Enter}}.
3. En `Seleccione o obxecto a desfasar`, faga clic na liña inferior.
4. En `Seleccione o punto do lado no que desfasar`, faga clic en calquera lugar por debaixo. Aparece unha liña paralela 200 por debaixo.
5. Faga clic na liña dereita e logo faga clic á súa dereita.
6. Faga clic na liña superior e logo faga clic por enriba.
7. Faga clic na liña esquerda e logo faga clic á súa esquerda.
8. Prema {{key:Enter}} para rematar o comando.

Deberían ver catro liñas exteriores, cada unha da mesma lonxitude que a súa liña interior, así que as esquinas exteriores non se xuntan.

:::tip
Prema {{key:Enter}} no aviso de distancia para usar de novo a última distancia. Escriba `T` para A través: entón cada copia pasa polo punto no que faga clic, a calquera distancia que sexa.
:::

{{cmd:OFFSET}} traballa con liñas, arcos, círculos e polilíneas. Desfasar unha polilínea pechada desfasa todo o contorno, incluídas as esquinas.

## Limpar as esquinas exteriores con Empalme

{{cmd:FILLET}} une dúas liñas nunha esquina: recorta ou estende ambas para que se xunten. Cun radio de 0 a esquina é cadrada.

1. Escriba `F` e prema {{key:Enter}}. O aviso di `Seleccione a primeira liña [Radio]:`.
2. Se o último empalme que fixo usou un radio, escriba `R`, prema {{key:Enter}}, escriba `0` e prema {{key:Enter}}.
3. Faga clic na liña inferior exterior preto do seu extremo dereito.
4. En `Seleccione a segunda liña`, faga clic na liña dereita exterior preto do seu extremo inferior.

As dúas liñas xúntanse agora nunha esquina aguda, e o comando remata.

5. Prema {{key:Enter}} para repetir {{cmd:FILLET}}, e faga a seguinte esquina.
6. Repita ata que as catro esquinas exteriores se xunten.

Faga clic en cada liña na parte que quere **conservar**. Cun radio superior a 0, Empalme engade un arco entre as liñas.

:::tip
Escriba `M` no primeiro aviso para facer as catro esquinas dunha vez, ou debuxe a cara exterior como unha polilínea pechada e escriba `P`: todas as esquinas se fan á vez. Manteña premida {{key:Shift}} ao facer clic na segunda liña para unha esquina aguda sen cambiar o radio.
:::

## Biselar unha esquina con Chaflán

{{cmd:CHAMFER}} corta unha esquina cunha liña recta.

1. Escriba `CHA` e prema {{key:Enter}}.
2. Escriba `D` e prema {{key:Enter}}. Escriba `300` e prema {{key:Enter}} para a primeira distancia, e logo prema {{key:Enter}} para usar 300 tamén na segunda.
3. Faga clic na liña superior interior preto do seu extremo esquerdo, e logo na liña esquerda interior preto do seu extremo superior.

A esquina recórtase 300 ao longo de cada liña e unha liña de bisel as une. Escriba `A` no lugar de `D` para dar unha lonxitude na primeira liña e un ángulo.

## Cortar unha porta con Recortar

Primeiro debuxe as dúas xambas atravesando o muro inferior, e logo recorte as liñas do muro entre elas.

1. Escriba `L` e prema {{key:Enter}}.
2. Escriba `1000,200` e prema {{key:Enter}}.
3. Escriba `@0,-600` e prema {{key:Enter}}, e logo prema {{key:Enter}} de novo.
4. Prema {{key:Enter}} para repetir {{cmd:LINE}}.
5. Escriba `1900,200` e prema {{key:Enter}}.
6. Escriba `@0,-600` e prema {{key:Enter}}, e logo prema {{key:Enter}} de novo.

Agora ten dúas liñas curtas que cruzan o muro inferior a 900 de distancia.

7. Escriba `TR` e prema {{key:Enter}}. O historial di `Configuración actual: Modo rápido, bordos: sen estender`.
8. Faga clic na liña inferior interior entre as dúas xambas. Esa peza desaparece. (Posicione antes o punteiro sobre ela: a peza que vai desaparecer vólvese gris e de trazos.)
9. Faga clic na liña inferior exterior entre as dúas xambas. Esa peza tamén desaparece.
10. Faga clic na parte de cada xamba que sobresae por riba do muro, e logo na parte que queda por debaixo.
11. Prema {{key:Enter}} para rematar o comando.

Deberían ver unha abertura de 900 no muro inferior, coas xambas pechando os extremos do muro.

No modo rápido (o predeterminado), Recortar non pide escoller antes os bordos de corte: cada obxecto visible é un bordo de corte. Escolla a peza que quere eliminar, ou arrastre un camiño por varias pezas para recortalas todas de una vez. Escriba `U` e prema {{key:Enter}} para devolver a última selección ou o último arrastre sen saír do comando. Valado, cruzamento, bordos escollidos e {{key:Shift}} para estender están en [Recortar e estender](topic:trim-and-extend).

## Estender unha liña ata encontrar outra

{{cmd:EXTEND}} alonga unha liña, un arco ou un extremo de polilínea ata que encontre o seguinte obxecto nesa dirección.

1. Escriba `L` e prema {{key:Enter}}.
2. Escriba `1000,2000` e prema {{key:Enter}}.
3. Escriba `@2000,0` e prema {{key:Enter}}, e logo prema {{key:Enter}} de novo. A liña para 2000 antes do muro dereito.
4. Escriba `EX` e prema {{key:Enter}}.
5. Faga clic na nova liña preto do seu extremo dereito.
6. Prema {{key:Enter}} para rematar o comando.

A liña vai agora ata a cara interior do muro dereito. Cada obxecto visible é un límite; escolla preto do extremo que debe crecer. Dentro de {{cmd:TRIM}}, {{key:Shift}}+clic fai o mesmo.

## Partir e alongar

{{cmd:BREAK}} (`BR`, ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Partir}}) corta un oco sen bordo de corte: faga clic no obxecto onde comeza o oco (ese clic é o primeiro punto), e logo faga clic onde remata. Nun círculo, vai a parte en sentido contrario ao das agullas do reloxo desde o primeiro punto ata o segundo. `F` na segunda pregunta permite dar de novo o primeiro punto, e {{cmd:BREAKATPOINT}} divide un obxecto en dous nun punto, sen oco.

{{cmd:LENGTHEN}} (`LEN`) cambia unha lonxitude nun extremo:

1. Escriba `LEN` e prema {{key:Enter}}. Faga clic nunha liña para ver a súa lonxitude actual; o aviso pregunta de novo.
2. Escolla como: `DE` (Delta: unha cantidade para engadir, negativa para quitar; `A` para o ángulo dun arco), `P` (Porcentaxe: 50 divide á metade), `T` (Total: a lonxitude que debe ter) ou `DY` (Dinámico: arrastre o extremo).
3. Faga clic en cada obxecto preto do extremo que debe moverse. `U` retira o último; {{key:Enter}} remata.

Poden alongarse liñas, arcos e polilíneas abertas (o seu segmento final).

## Erros frecuentes

- **Desapareceu unha liña enteira.** Nada a cruzaba, así que o modo rápido a borrou. Escriba `U` para devolvela; comprobe que a liña de corte realmente a cruza (achegue o zoom) e que non está nunha capa desactivada.
- **«Sen límite nesa dirección».** Estender non atopou nada contra o que chocar. Escolla máis preto do extremo que debe crecer.
- **«O radio é demasiado grande».** O arco pasaría do extremo dunha das liñas. Use un radio menor.
- **«Só se pode recortar o primeiro ou o último segmento dunha polilínea aberta».** Seleccione dous segmentos da polilínea xuntos, ou escriba `P` para redondear cada esquina dela.
- **O desfase foi ao lado equivocado.** O lado é onde fai clic despois de escoller o obxecto. Desfaga con {{key:Mod+Z}} e faga clic no outro lado.
- **«Non se pode desfasar tan lonxe».** O desfase faría virar o arco, o círculo ou a polilínea do revés. Use unha distancia menor.
