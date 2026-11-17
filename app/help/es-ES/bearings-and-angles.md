---
title: Escribir y mostrar rumbos y ángulos en grados, minutos y segundos
summary: Escriba una dirección como rumbo topográfico, por ejemplo N45°23'30"E, o como grados, minutos y segundos en cualquier lugar donde se pida un ángulo, y elija cómo muestra el dibujo los ángulos con AUNITS.
keywords: rumbo, rumbos, topógrafo, rumbo de cuadrante, N45E, grados minutos segundos, GMS, DMS, ángulo, dirección, parcela, parcelas, replantear, poligonal, formato de ángulo, polar, distancia directa, DIST
from: af805567
---

Siempre que CadCraft pida un **ángulo o una dirección**, puede escribir un **rumbo de cuadrante** o un ángulo en **grados, minutos y segundos**, además de un número simple de grados.

## Rumbos

Un rumbo indica norte o sur, un ángulo de hasta 90°, y después este u oeste:

| Lo que escribe | Dirección |
|---|---|
| `N45°23'30"E` o `N45d23'30"E` | 45°23'30" desde el norte hacia el este |
| `S10-30-00W` o `S 10 30 W` | 10°30' desde el sur hacia el oeste (guiones o espacios entre las partes) |
| `N45.5E` | 45.5° desde el norte hacia el este |
| `N`, `E`, `S`, `W` | directamente norte, este, sur, oeste |

Las letras pueden escribirse en mayúsculas o en minúsculas. En español, `O` también significa oeste. `d` y `°` significan lo mismo; `'` son minutos y `"` son segundos.

Para trazar una línea de parcela de 20 m a N45°23'E, inicie {{cmd:LINE}} y escriba el primer punto, y después `@20<N45d23'E`. Lo mismo funciona en la solicitud de ángulo de {{cmd:ROTATE}}, en cualquier otra solicitud que pida un ángulo, y en el cuadro de ángulo de {{ui:Entrada dinámica}}.

## Grados, minutos, segundos

`45°23'30"`, `45d23'30"`, `45d30'` o `45d` es un ángulo desde el eje X, en sentido antihorario. Hacen falta el `°` o la `d`: `45-23-30` se lee como aritmética (45 − 23 − 30). Los minutos y los segundos deben ser menores de 60. Un número simple, con aritmética (`360/7`), sigue funcionando.

## Cómo se muestran los ángulos

Escriba {{cmd:AUNITS}} (o elija {{ui:Formato de ángulo}} en {{ui:Propiedades}} › {{ui:Parámetros actuales}}) y elija:

- **Grados decimales** (el valor por defecto): `44.6083°`.
- **Grados, minutos y segundos**: `44°36'30"`.
- **Rumbos topográficos**: `N45°23'30"E`.

La precisión sigue lo que escribe para {{cmd:AUNITS}}: 0 muestra grados, 2 minutos, 4 segundos, y de 5 a 8 añaden decimales de segundo. El formato se muestra en {{cmd:DIST}}, en la barra de estado, en la entrada dinámica y en los avisos de seguimiento, y en los cuadros de ángulo de {{ui:Propiedades}} (un cuadro que edite acepta cualquiera de las formas anteriores). Es un solo paso de deshacer y se guarda en archivos DWG y DXF (`$AUNITS`, `$AUPREC`); LISP lo lee y lo escribe como `AUNITS` y `AUPREC`.
