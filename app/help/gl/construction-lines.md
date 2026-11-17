---
title: Liñas de construción e semirrectas
summary: Debuxe liñas que se prolongan sen fin (XLINE) ou desde un punto nunha dirección (RAY) para aliñar elementos, e recórteas para convertelas en liñas normais.
keywords: xline, ray, liña de construción, liñas de construción, liña infinita, liña guía, liña de referencia, bisectriz, liña de desfase, liñas de trazado, xl
from: b6c398bc
---

## O que vai aprender

Como debuxar liñas de construción para aliñar elementos mentres delinea: por dous puntos, na horizontal ou na vertical, nun ángulo, a medio camiño entre dúas direccións, ou a unha distancia fixa dunha liña. E como recortalas en liñas normais cando xa cumpriron a súa función.

## Dous tipos

- Unha **liña de construción** ({{cmd:XLINE}}) prolónganse sen fin en ambas direccións.
- Unha **semirrecta** ({{cmd:RAY}}) comeza nun punto e prolónganse sen fin nunha dirección.

Ambas se debuxan en toda a área do debuxo, sexa cal sexa o zoom, na pantalla dividida e nas xanelas gráficas dunha folla. {{ui:Extensións}} as deixa fóra, polo que o zoom ao debuxo segue axustando o que debuxou.

## Debuxar liñas de construción

1. Prema {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Liña de construción}}, ou escriba `XL` e prema {{key:Enter}}.
2. Prema un punto. Cada clic posterior engade unha liña de construción que pasa polo primeiro punto e polo que prema.
3. Prema {{key:Enter}} para rematar.

En lugar do primeiro punto pode escribir unha opción:

| Opción | Que fai |
|---|---|
| `H` (Hor) | Liñas horizontais, unha por cada punto que prema. |
| `V` (Ver) | Liñas verticais a través de cada punto. |
| `A` (Ang) | Liñas nun ángulo que escriba (en graos, en sentido antihorario desde o eixe X), por cada punto. `R` (Referencia) mide o ángulo desde unha liña que escolla. |
| `B` (Bisectriz) | Prema a esquina e logo un punto ao longo dun lado: cada punto que prema ao longo do outro lado engade a liña a medio camiño entre os dous. |
| [Desfase (O)] | Escriba unha distancia, escolla unha liña e logo prema o lado: unha liña de construción a esa distancia, paralela. [Atravesar (T)] pón a liña por un punto que prema no seu lugar. A distancia recórdase para a próxima vez. |

## Debuxar semirrectas

1. Prema {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Semirrecta}}, ou escriba `RAY` e prema {{key:Enter}}.
2. Prema onde comezan as semirrectas.
3. Prema un punto polo que pase cada semirrecta. Prema {{key:Enter}} para rematar.

## Encaixar e recortar

Liñas de construción e semirrectas usan os encaixes a Máis próximo, Perpendicular e Intersección. Non teñen extremos nin punto medio, polo que Punto final e Punto medio non atopan nada sobre elas.

Cortan e córtanse como outras liñas con {{cmd:TRIM}} e {{cmd:BREAK}}:

- Recorte un extremo dunha liña de construción e convértese nunha semirrecta que comeza no corte.
- Recorte a parte distante dunha semirrecta e convértese nunha liña normal.
- Partir unha liña de construción nun punto dá dúas semirrectas.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} e {{cmd:STRETCH}} tamén funcionan con elas. Unha selección por xanela nunca as colle, porque ningunha xanela pode conter unha liña sen fin; si o fai unha xanela de cruzamento ou un clic.

:::note
Un ficheiro DWG (todas as versións) e un DXF 2000 consérvanas como liñas de construción. DXF R12 non ten esta clase, polo que alí se converten en liñas que atravesan o debuxo, e o gardado indícao. Unha impresión ou un PDF só as debuxa na zona que se imprime.
:::
