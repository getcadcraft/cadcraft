---
title: Editar con agarres e Propiedades
summary: Estire, mova e cambie o tamaño de obxectos polos seus agarres, e escriba lonxitudes, raios, ángulos e coordenadas exactos no panel Propiedades.
keywords: agarres, propiedades, estirar, lonxitude, raio, coordenadas, editar, propiedades rápidas, paleta de propiedades, cambiar, capa, cor, color
from: f22541ba
---

## O que aprenderá

Dúas formas rápidas de cambiar un obxecto sen un comando: arrastrar os seus **agarres**, ou escribir valores novos no panel **Propiedades** da dereita.

## Agarres

Cando selecciona obxectos (ata 200 de cada vez) sen ningún comando en execución, aparecen pequenos cadrados sobre eles. Estes son os agarres:

| Obxecto | Agarres |
|---|---|
| Liña | Os dous extremos, e o punto medio (move toda a liña) |
| Círculo | O centro (móveo) e catro puntos da circunferencia (cambian o raio) |
| Arco | O centro, e os dous extremos (cambian onde comeza e remata) |
| Polilínea | Cada vértice |
| Texto, punto, referencia de bloque | O punto de inserción |
| Elipse | O centro |
| Cota | Os seus puntos de definición e a posición da liña de cota |
| Xanela gráfica | O centro (móveo) e as catro esquinas (cambian o tamaño) |

### Mover un agarre

1. Debuxe unha liña e faga clic nela. Aparecen tres agarres.
2. Faga clic no agarre dun extremo. A barra de estado di: "Faga clic onde vai este agarre (Esc para cancelar). Aplícanse os enganches e o orto."
3. Mova a cruz. Unha vista previa séguea.
4. Faga clic na nova posición, ou enganche a un punto doutro obxecto e faga clic.

O extremo move e o resto da liña queda no seu sitio. Tamén pode premer un agarre e arrastralo, e soltalo onde debe ir.

:::note
Non pode escribir unha coordenada para un agarre. Para unha posición exacta, enganche a un punto, ou escriba o valor en Propiedades.
:::

Prema {{key:Esc}} ou faga clic co botón dereito para cancelar un movemento de agarre.

## Propiedades

O panel da dereita mostra as propiedades do que está seleccionado.

1. Faga clic nunha liña. O título do panel di "Liña".
2. Faga clic en {{ui:Lonxitude}}, escriba `2500` e prema {{key:Enter}}.

A liña mide agora exactamente 2500, conservando o seu punto de inicio e o seu ángulo. {{key:Enter}} ou un clic noutro lugar aplica un valor; {{key:Esc}} repón o valor anterior. Cada cambio é un paso de desfacer, tamén cando cambian moitos obxectos á vez.

Os campos admiten expresións (`=2*45`) e lonxitudes con unidades (`3'6"`, `900mm`), cada punto ten X, Y e Z, e varios obxectos pódense cambiar xuntos. Todo isto está en [O panel Propiedades](topic:properties-panel).

## Erros frecuentes

- **Non aparecen agarres.** Hai un comando en execución (prema {{key:Esc}}), ou hai máis de 200 obxectos seleccionados, ou o obxecto está nunha capa bloqueada.
- **O agarre foi a un lugar equivocado.** Un enganche o colleu. Manteña premida {{key:Shift}} mentres fai clic para ignorar os enganches.
- **Escribir en Propiedades non fixo nada.** Prema {{key:Enter}} ou faga clic noutro lugar para aplicar. Unha entrada non admitida (lonxitudes e raios cero ou negativos, texto que non é un valor) pon o campo en vermello e di o motivo.
- **As letras escritas foron a un campo de Propiedades.** Mentres un campo ten o cursor, as teclas escriben alí. Prema {{key:Enter}} ou {{key:Esc}}, e despois escriba o comando.
