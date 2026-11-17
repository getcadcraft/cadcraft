---
title: Splines e polilíneas: SPLINE, SPLINEDIT, PEDIT
summary: Debuxe unha curva suave por puntos ou a partir dun polígono de control, edite o seu axuste e os puntos de control, e edite polilíneas (unir, pechar, ancho, axustar, spline, eliminar curvatura) ou converta un spline nunha polilínea.
keywords: spline, splinedit, spl, spe, pedit, pe, puntos de axuste, puntos de control, pesos, nurbs, edición de polilínea, unir, curva de axuste, eliminar curvatura, converter en polilínea, precisión, tanxente, curva, tolerancia de axuste
from: d31f72d8
---

## Que vai crear

Unha curva por cinco puntos, logo a mesma curva editada de tres xeitos, e unha polilínea construída con tres liñas.

## Debuxar un spline por puntos

1. Escriba `SPL` e prema {{key:Enter}}.
2. Prema ou escriba os puntos polos que debe pasar a curva: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Prema {{key:Enter}} despois do último.
3. {{ui:Tanxente inicial}}: prema un punto cara ao que debe saír a curva, ou prema {{key:Enter}} para que a decida. Faga o mesmo para a tanxente final.

A curva pasa por todos os puntos. Escriba `C` en vez de {{key:Enter}} para pechala (a curva volve ao primeiro punto). {{key:U}} (`Desfacer`) retira o último punto mentres debuxa.

### Debuxar unha a partir dun polígono de control

Escriba `M` no primeiro aviso, despois Vértices de control (C) e un grao de 1 a 5 (3 é o habitual). Agora os puntos que escolla son as esquinas dun polígono que atrae a curva cara a eles; a curva comeza no primeiro e remata no último. Unha pechada dá a volta, sen esquina na unión.

### Converter unha polilínea en spline

No primeiro aviso escriba `O` (Obxecto) e seleccione polilíneas ou liñas. Convértense en splines polos seus vértices; os orixinais desaparecen.

## Editar un spline

Seleccióneo e escriba `SPE` (ou escriba `SPE` e prema sobre el). As agarraderas mostran os puntos de axuste (ou os puntos de control dun spline que non os ten): arrastre unha para dar nova forma á curva. No aviso:

- **Datos de axuste** (un spline debuxado por puntos): Engadir (`A`) engade un punto de axuste (prema onde), Eliminar (`D`) elimina un (prema preto del), Mover (`M`) move un (prema preto del e logo no seu novo lugar), Tanxentes (`T`) define as tanxentes dos extremos, e Purgar (`P`) elimina os puntos de axuste, de modo que o spline se edita desde entón polos seus puntos de control.
- **Editar vértice**: Engadir (`A`) engade un punto de control sen cambiar a curva, Mover (`M`) move un, e Peso (`W`) dálle un **peso** (por riba de 1 atrae a curva máis cara a el; por baixo de 1 déixaa afastarse).
- **Abrir** ou **Pechar**, e **Inverter** (a curva vai no sentido contrario).
- **Converter en polilínea** (`P`): o spline convértese nunha polilínea; a precisión é cantos segmentos recibe cada tramo (10 é o habitual).
- **Desfacer** (`U`) retira o último cambio; **Saír** (`X`) remata.

{{ui:Propiedades}} mostra o grao dun spline, cantos puntos de axuste e de control ten, a súa lonxitude, e permite abrilo ou pechalo.

## Editar unha polilínea

Seleccione unha polilínea e escriba `PE`. Unha liña, un arco ou un spline que escolla ofrécese primeiro como polilínea na que converterse (un spline pide a precisión).

- **Pechar** / **Abrir** une ou separa os extremos.
- **Unir** engade liñas, arcos e polilíneas cuxos extremos coinciden co extremo da polilínea. `Fuzz distance` é a distancia máxima entre extremos para que aínda se unan (0 significa que deben coincidir).
- **Ancho** dálle a toda a polilínea un só ancho (0 o elimina).
- **Axustar** substitúe a polilínea por unha curva suave que pasa polos seus vértices; **Spline** substitúeaa por un B-spline cúbico que os segue (comeza e remata no primeiro e no último vértice e permanece preto dos demais). Ambos se converten nunha polilínea de segmentos curtos, e as esquinas orixinais consérvanse, así que **Eliminar curvatura** as devolve.
- **Tipo de liña xerado** indica se unha liña de trazos continúa por toda a polilínea ou volve comezar en cada vértice.
- **Inverter** cambia a orde dos seus vértices. **Múltiple** (`M` no primeiro aviso) edita varias polilíneas coas mesmas opcións.

Editar os vértices dunha polilínea en {{ui:Propiedades}} ou con agarraderas segue igual: PEDIT non ten editor de vértices.

## Nos ficheiros

DWG e DXF 2000 gardan un spline como spline: grao, puntos de control, nós, pesos, puntos de axuste e tanxentes. Un spline que abre e non modifica gárdase exactamente como estaba. DXF R12 non ten splines: gárdase como unha polilínea que segue a curva, e o historial indica cantos segmentos.

Desprazar, recortar, estender, redondear, partir e unir non funcionan con splines. Use {{cmd:EXPLODE}} sobre un spline, ou {{cmd:PEDIT}} sobre el, para obter unha polilínea que eses comandos admiten.

## Erros frecuentes

- **A curva pasa de largo entre puntos próximos.** Unha curva por puntos dobra onde dobran os puntos. Use menos puntos, ou un polígono de control.
- **«Iso non é un spline.»** SPLINEDIT só admite splines; {{cmd:PEDIT}} edita polilíneas.
- **Un spline pechado de axuste ten unha forma lixeiramente distinta noutro programa.** CadCraft pécheo cunha unión suave no primeiro punto; outro programa pode pechalo cunha curva periódica. Un spline pechado de puntos de control é igual en ambos.
