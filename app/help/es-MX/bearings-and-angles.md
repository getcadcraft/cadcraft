---
title: Escribir y mostrar rumbos y ángulos en grados, minutos y segundos
summary: Escriba una dirección como rumbo topográfico, por ejemplo N45°23'30"E, o en grados-minutos-segundos donde se pida un ángulo, y elija con AUNITS cómo muestra los ángulos el dibujo.
keywords: rumbo, rumbos, topógrafo, rumbo por cuadrante, N45E, grados minutos segundos, DMS, ángulo, dirección, lote, lotes, trazar, poligonal, AUNITS, ANGUNITS, formato de ángulo, polar, distancia directa, DIST
from: af805567
---

En cualquier lugar donde CadCraft pide un **ángulo o una dirección** puede escribir un **rumbo por cuadrante** o un ángulo en **grados, minutos y segundos**, además de un número simple de grados.

## Rumbos

Un rumbo nombra norte o sur, un ángulo de hasta 90° y luego este u oeste:

| Usted escribe | Dirección |
|---|---|
| `N45°23'30"E` o `N45d23'30"E` | 45°23'30" desde el norte hacia el este |
| `S10-30-00W` o `S 10 30 W` | 10°30' desde el sur hacia el oeste (guiones o espacios entre las partes) |
| `N45.5E` | 45.5° desde el norte hacia el este |
| `N`, `E`, `S`, `W` | norte, este, sur y oeste exactos |

Las letras pueden ir en mayúsculas o minúsculas. En español, `O` también significa oeste. `d` y `°` son lo mismo; `'` son minutos y `"` son segundos.

Para trazar un lindero de 20 m con rumbo N45°23'E, inicie {{cmd:LINE}} y escriba el primer punto; después `@20<N45d23'E`. Lo mismo vale en el aviso de ángulo de {{cmd:ROTATE}}, en cualquier otro aviso que pida un ángulo y en la casilla de ángulo de {{ui:Entrada dinámica}}.

## Grados, minutos, segundos

`45°23'30"`, `45d23'30"`, `45d30'` o `45d` es un ángulo desde el eje X, en sentido antihorario. Hace falta el `°` o la `d`: `45-23-30` se lee como aritmética (45 − 23 − 30). Los minutos y los segundos deben ser menores de 60. Un número simple, con aritmética (`360/7`), sigue funcionando.

## Cómo se muestran los ángulos

Escriba {{cmd:AUNITS}} (o elija {{ui:Formato de ángulo}} en {{ui:Propiedades}} › {{ui:Configuración actual}}) y escoja:

- **Grados decimales** (predeterminado): `44.6083°`.
- **Grados-minutos-segundos**: `44°36'30"`.
- **Rumbos topográficos**: `N45°23'30"E`.

La precisión sigue lo que escriba en {{cmd:AUNITS}}: 0 muestra grados, 2 minutos, 4 segundos y de 5 a 8 agregan decimales de segundo. El formato aparece en {{cmd:DIST}}, en la barra de estado, en la entrada dinámica y en las etiquetas de rastreo, y en las casillas de ángulo de {{ui:Propiedades}} (una casilla que edite acepta cualquiera de las formas anteriores). Es un solo paso de deshacer y se guarda en archivos DWG y DXF (`$AUNITS`, `$AUPREC`); LISP lo lee y lo escribe como `AUNITS` y `AUPREC`.
