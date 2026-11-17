---
title: Recortar e estender
summary: Recorte liñas ata onde outras as cruzan e alóngueas ata que toquen outras, unha peza de cada vez ou moitas á vez arrastrando un camiño por elas.
keywords: trimextendmode, arrastre por xanela, recortar, estender, tr, ex, recorte rápido, arrastrar, á man alzada, camiño, valado, cruzamento, shift, bordos de corte, bordos de límite, edgemode, modo, estándar, rápido, borrar, vista previa, muros, limpeza
from: 25fbc5bd
---

## Que vai aprender

Como funcionan {{cmd:TRIM}} e {{cmd:EXTEND}} e as formas rápidas de usalos: arrastre por moitas pezas á vez, manteña premido {{key:Shift}} para alternar entre recortar e estender, e vexa o que vai desaparecer antes de premer.

## Recortar unha peza

1. Debuxe unha liña horizontal longa e dúas liñas curtas que a crucen.
2. Escriba `TR` e prema {{key:Enter}}. O historial di `Current settings: Quick mode, edges: No extend`.
3. Ponla o punteiro sobre a liña longa entre as dúas curtas. Esa peza volve gris e de trazos: é o que vai desaparecer.
4. Prema. A peza desaparece.
5. Prema {{key:Enter}} para rematar o comando.

No modo rápido (o predeterminado) cada obxecto visible é un bordo de corte, así que nunca escolle antes os bordos. Prema a peza que quere eliminar. Un obxecto que nada cruza bórrase enteiro, e o historial dino.

## Recortar moitas pezas nun arrastre

1. Debuxe unha liña horizontal longa e dez liñas verticais curtas que a crucen.
2. Escriba `TR` e prema {{key:Enter}}.
3. Prema o botón do rato enriba da liña longa, á esquerda da primeira liña vertical, e arrastre por riba das dez.

Mentres arrastra, o camiño amósase como unha liña de trazos, e cada peza que cruzou volve gris. Solte: as dez pezas superiores recórtanse nun só paso. Escriba `U` e prema {{key:Enter}} para devolvelas todas á vez.

:::tip
Tamén pode premer dous puntos baleiros: a liña entre eles funciona como un camiño arrastrado. Escriba `F` (Valado) para premer unha serie de puntos, e despois prema {{key:Enter}}.
:::

:::touch
Arrastre un dedo do mesmo xeito. Un toque nunha peza recórtaa.
:::

## Estender no seu lugar, con Shift

1. Debuxe unha liña vertical e cinco liñas horizontais curtas á súa esquerda que paren antes dela.
2. Escriba `TR` e prema {{key:Enter}}.
3. Manteña premido {{key:Shift}}. Ponla o punteiro sobre unha liña curta: a parte que crecería amósase gris e de trazos.
4. Seguindo con {{key:Shift}} premido, arrastre cara abaixo polas cinco liñas curtas.

As cinco chegan agora á liña vertical. {{key:Shift}} funciona ao revés en {{cmd:EXTEND}} (`EX`): un clic estende, e un {{key:Shift}}+clic recorta. Estender alonga o extremo máis próximo onde pulse ou onde o camiño cruce.

## Recortar dentro dunha xanela

1. Escriba `TR` e prema {{key:Enter}}.
2. Escriba `C` e prema {{key:Enter}}.
3. Prema dúas esquinas arredor das pezas que quere quitar.

Recórtase cada peza que quede polo menos en parte dentro da xanela.

Para ter unha xanela só arrastrando, sen escribir `C`: {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} › {{ui:A window}}. Así, premer nun sitio baleiro e arrastrar debuxa unha caixa, e recórtase (ou estende, en {{cmd:EXTEND}}, ou con {{key:Shift}}) cada peza que toque. {{ui:A path}} (o inicio) devolve o camiño á man alzada. A liña de configuración ao comezo de TRIM indica cal está activa.

## Escoller os bordos de corte (modo estándar)

Ás veces só debe cortar unha liña, como a cara dun muro cruzada por moitas outras liñas.

1. Escriba `TR` e prema {{key:Enter}}.
2. Escriba `O` (modo) e prema {{key:Enter}}, despois escriba `S` (estándar) e prema {{key:Enter}}.
3. En `Select cutting edges`, prema as liñas de bordo (ou arrastre unha xanela), e despois prema {{key:Enter}}. Premer {{key:Enter}} sen nada seleccionado fai que todo obxecto sexa un bordo.
4. Prema ou arrastre polas pezas que quere eliminar.

Só cortan os bordos escollidos, e un obxecto que ningún bordo cruza déixase en paz. O modo mantense ata que peche a páxina; escriba `O` e despois `Q` para volver ao rápido. {{cmd:TRIMEXTENDMODE}} o fixa antes de empezar, como fai a variable do mesmo nome noutros lugares: `0` estándar, `1` rápido. `T` (bordos de corte) escolle bordos novos en calquera momento; en {{cmd:EXTEND}} é `B` (bordos de límite).

## Bordos que chegarían

1. Escriba `TR` e prema {{key:Enter}}.
2. Escriba `E` (bordo) e prema {{key:Enter}}, despois `E` (estender) e prema {{key:Enter}}.

Agora unha liña ou un arco de corte que para antes conta como se seguise: unha liña curta corta onde cruzaría se fose máis longa. Escriba `E`, despois `N` (sen extensión) para volver atrás. Isto é o mesmo que EDGEMODE 1 e 0.

## Borrar sen saír

Escriba `R` (borrar) e prema {{key:Enter}}, escolla os obxectos a borrar e prema {{key:Enter}}. TRIM segue.

## Erros habituais

- **Desapareceu unha liña enteira.** No modo rápido, un obxecto que nada cruza bórrase. Escriba `U` para devolvelo, ou cambie ao modo estándar (`O`, `S`).
- **"Nothing to trim there: no chosen edge crosses that object."** O modo estándar só corta nos bordos que escolleu. Escriba `T` para escollelos de novo.
- **"No boundary in that direction."** Estender non atopou nada adiante. Prema máis preto do extremo que debe crecer, ou active `E` (bordo, estender) para os límites que paran antes.
- **O arrastre debuxou un lazo no seu lugar.** Un arrastre só recorta mentres TRIM ou EXTEND piden un obxecto. Sen ningún comando en curso, un arrastre selecciona (ver [Selección por lazo](topic:lasso-selection)).
- **Só se poden recortar liñas, arcos, círculos e polilíneas.** Descompoña primeiro un bloque para recortar as súas liñas.
