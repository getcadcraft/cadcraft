---
title: Escribir e amosar rumbos e ángulos en graos, minutos e segundos
summary: Escriba unha dirección como rumbo topográfico, como N45°23'30"E, ou como graos-minutos-segundos onde se pida un ángulo, e escolla como amosa o debuxo os ángulos con AUNITS.
keywords: rumbo, rumbos, topógrafo, rumbo por cuadrante, N45E, graos minutos segundos, DMS, ángulo, dirección, parcela, parcelas, replantear, poligonal, AUNITS, ANGUNITS, formato do ángulo, polar, distancia directa, DIST
from: af805567
---

En calquera lugar onde CadCraft pida un **ángulo ou unha dirección**, pode escribir un **rumbo por cuadrante** ou un ángulo en **graos, minutos e segundos**, así como un número simple de graos.

## Rumbos

Un rumbo indica norte ou sur, un ángulo de ata 90°, e despois leste ou oeste:

| Escriba | Dirección |
|---|---|
| `N45°23'30"E` ou `N45d23'30"E` | 45°23'30" desde o norte cara ao leste |
| `S10-30-00W` ou `S 10 30 W` | 10°30' desde o sur cara ao oeste (guións ou espazos entre as partes) |
| `N45.5E` | 45.5° desde o norte cara ao leste |
| `N`, `E`, `S`, `W` | directamente norte, leste, sur, oeste |

As letras poden estar en maiúsculas ou minúsculas. Tamén se pode usar `O` para oeste, como en español. `d` e `°` significan o mesmo; `'` son minutos e `"` son segundos.

Para replantear unha liña de parcela de 20 m de longo a N45°23'E, comece {{cmd:LINE}} e escriba o primeiro punto, despois `@20<N45d23'E`. O mesmo funciona na indicación de ángulo de {{cmd:ROTATE}} e en calquera outra indicación que pida un ángulo, e na caixa de ángulo de {{ui:Entrada dinámica}}.

## Graos, minutos, segundos

`45°23'30"`, `45d23'30"`, `45d30'` ou `45d` é un ángulo desde o eixe X, en sentido antihorario. Fai falta `°` ou `d`: `45-23-30` lese como unha operación aritmética (45 − 23 − 30). Os minutos e os segundos deben ser menores que 60. Un número simple, con operacións aritméticas (`360/7`), segue funcionando.

## Como se amosan os ángulos

Escriba {{cmd:AUNITS}} (ou escolla {{ui:Formato do ángulo}} en {{ui:Propiedades}} › {{ui:Configuración actual}}) e escolla:

- **Graos decimais** (o predeterminado): `44.6083°`.
- **Graos-minutos-segundos**: `44°36'30"`.
- **Rumbos topográficos**: `N45°23'30"E`.

A precisión segue o que escriba para {{cmd:AUNITS}}: 0 amosa graos, 2 minutos, 4 segundos, e de 5 a 8 engaden decimais de segundo. O formato aparece en {{cmd:DIST}}, na barra de estado, na entrada dinámica e nas indicacións de seguimento, e nas caixas de ángulo de {{ui:Propiedades}} (unha caixa que edite admite calquera das formas anteriores). É un paso de desfacer e gárdase nos ficheiros DWG e DXF (`$AUNITS`, `$AUPREC`); LISP lee e escribe como `AUNITS` e `AUPREC`.
