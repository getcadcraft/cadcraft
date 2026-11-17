---
title: Escribir y mostrar rumbos y ángulos en grados, minutos y segundos
summary: Escribí una dirección como rumbo de agrimensor, por ejemplo N45°23'30"E, o como grados-minutos-segundos en cualquier lugar donde se pida un ángulo, y elegí cómo muestra el plano los ángulos con AUNITS.
keywords: rumbo, rumbos, agrimensor, rumbo de cuadrante, N45E, grados minutos segundos, DMS, ángulo, dirección, lote, lotes, replantear, poligonal, AUNITS, ANGUNITS, formato de ángulo, polar, distancia directa, DIST
from: af805567
---

En cualquier lugar donde CadCraft pida un **ángulo o una dirección**, podés escribir un **rumbo de cuadrante** o un ángulo en **grados, minutos y segundos**, además de un número común de grados.

## Rumbos

Un rumbo indica norte o sur, un ángulo de hasta 90°, y después este u oeste:

| Escribís | Dirección |
|---|---|
| `N45°23'30"E` o `N45d23'30"E` | 45°23'30" desde el norte hacia el este |
| `S10-30-00W` o `S 10 30 W` | 10°30' desde el sur hacia el oeste (guiones o espacios entre las partes) |
| `N45.5E` | 45,5° desde el norte hacia el este |
| `N`, `E`, `S`, `W` | directamente norte, este, sur, oeste |

Las letras pueden estar en mayúscula o minúscula. En español, `O` también significa oeste. `d` y `°` significan lo mismo; `'` son minutos y `"` son segundos.

Para replantear una línea de lote de 20 m de largo a N45°23'E, iniciá {{cmd:LINE}} y escribí el primer punto, después `@20<N45d23'E`. Lo mismo funciona en el aviso de ángulo de {{cmd:ROTATE}}, en cada otro aviso que pida un ángulo, y en el cuadro de ángulo de {{ui:Entrada dinámica}}.

## Grados, minutos, segundos

`45°23'30"`, `45d23'30"`, `45d30'` o `45d` es un ángulo desde el eje X, en sentido antihorario. El `°` o la `d` son necesarios: `45-23-30` se lee como una cuenta aritmética (45 − 23 − 30). Los minutos y los segundos deben ser menores que 60. Un número común, con operaciones (`360/7`), sigue funcionando.

## Cómo se muestran los ángulos

Escribí {{cmd:AUNITS}} (o elegí {{ui:Formato de ángulo}} en {{ui:Propiedades}} › {{ui:Configuración actual}}) y elegí:

- **Grados decimales** (el predeterminado): `44.6083°`.
- **Grados-minutos-segundos**: `44°36'30"`.
- **Rumbos de agrimensor**: `N45°23'30"E`.

La precisión sigue a lo que escribís para {{cmd:AUNITS}}: 0 muestra grados, 2 minutos, 4 segundos, y 5 a 8 agregan decimales de segundo. El formato se muestra en {{cmd:DIST}}, en la barra de estado, en la entrada dinámica y en las indicaciones de seguimiento, y en los cuadros de ángulo de {{ui:Propiedades}} (un cuadro que editás acepta cualquiera de las formas de arriba). Es un solo paso de deshacer y se guarda en archivos DWG y DXF (`$AUNITS`, `$AUPREC`); LISP lo lee y escribe como `AUNITS` y `AUPREC`.
