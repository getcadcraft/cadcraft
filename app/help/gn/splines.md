---
title: Splines ha polilíneas: SPLINE, SPLINEDIT, PEDIT
summary: Ejapo curva ojehasáva puntos rupi térã control polígono-gui, eñembo'e hag̃ua ajuste ha control puntos, ha eñembo'e polilíneas (unir, cerrar, ancho, ajuste, spline, decurve) térã spline ombojoapy polilínea-pe.
keywords: spline, splinedit, spl, spe, pedit, pe, puntos de ajuste, puntos de control, pesos, nurbs, edición polilínea, unir, curva de ajuste, decurve, convertir a polilínea, precisión, tangente, curva, tolerancia de ajuste
from: d31f72d8
---

## Mba'e ejapóta

Curva peteĩ punto rupi, upe rire mba'éichapa oñembo'e ko curva mbohapy jeh, ha polilínea mbohapy líneas rupi ojapóva.

## Ojapo spline puntos rupi

1. Emoĩ `SPL` ha eprese {{key:Enter}}.
2. Eiporavo térã emoñe'ẽ punto kuéra curva oñemoĩmbáva: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Eprese {{key:Enter}} último rire.
3. {{ui:Tangente inicial}}: eiporavo punto curva oñeha'ãva, térã eprese {{key:Enter}} ha ohechaukáta. Upe ramo tangente final-pe avei.

Curva opavave punto oikóva. Emoĩ `C` {{key:Enter}} rehe ha cerrar hag̃ua (curva oguerohóta primer punto-pe). {{key:U}} (`Undo`) ojeheja último punto dibujo jave.

### Ojapo control polígono rupi

Emoĩ `M` primer prompt-pe, upe rire `C` (Control vértices) ha grado 1 ha 5 peve (3 ha ojeporúvape). Ko jave eiporavo puntos oĩ polígono esquinas-pe, ha curva oikuaa chupekuéra; curva oñepyrũ primer punto-pe ha oñemoĩ último punto-pe. Cerrado peteĩ ojapóva oñemboguejy, esquina ndaiporiva'ekue ojoapy-pe.

### Polilínea ombojoapy spline-pe

Primer prompt-pe emoĩ `O` (Object) ha eiporavo polilíneas térã líneas. Oñemoĩ spline ombojoapyva vértices-pe; orígenes oñeheja.

## Spline ojeporu

Eiporavo ha emoĩ `SPE` (térã emoĩ `SPE` ha eiporavo). Grips ohechauka puntos de ajuste (térã control puntos spline-pe ndaiporiva'ekue ajuste): emboguejýta peteĩ hag̃ua curva ojeporu hag̃ua. Prompt-pe:

- **Datos de ajuste** (puntos rupi dibujado spline): `A` omoĩ punto de ajuste (eiporavo mba'épe), `D` ojeheja peteĩ (eiporavo chupe), `M` ombojoapy peteĩ (eiporavo chupe, upe rire emoĩ pyahu tenda-pe), `T` omoĩ tangentes finales, `P` oheja puntos de ajuste opavave, upéicha spline ojeporu control puntos rupi upe rire.
- **Editar vértice**: `A` omoĩ control punto curva ndojapomo'ãi, `M` ombojoapy peteĩ, `W` omoĩ peteĩ **peso** (1 rupi ojapóva curva ojehasa chupe, 1 apytépe ojapóva oñemboguejy).
- **Abrir** térã **Cerrar**, ha **Reverse** (curva ambue tape-pe oñemoĩ).
- **convert to Polyline** (`P`): spline ojapo polilínea; precisión peteĩ spanpe mboyve segmento (10 ojeporúvape).
- **Undo** ojeheja último cambio; **eXit** ohenda.

{{ui:Propiedades}} ohechauka spline grado, ajuste ha control puntos mboyve, longitud, ha ikatu abrir térã cerrar.

## Polilínea ojeporu

Eiporavo polilínea ha emoĩ `PE`. Línea, arco térã spline eiporavo oñeikuaa polilínea ojapóva (spline-pe precisión oñeha'ã).

- **Cerrar** / **Abrir** oñemboguejy térã oñembojoapy puntas.
- **Unir** oñemoĩ líneas, arcos ha polilíneas oñemboguejýva polilínea punta-pe. `Fuzz distance` ha'e mboyve puntas ikatu oñemboguejy ha oñemboguejy (0 ha'e ndoguerekói distancia).
- **Ancho** omoĩ polilínea opavave peteĩ ancho (0 omboguejy).
- **Ajuste** ombojoapy polilínea curva ajustada-pe, vértices rupi; **Spline** cúbica B-spline rupi, ojehai chupekuéra (oñepyrũ ha oñemoĩ primer ha último vértice-pe). Ambue ojapo polilínea segmentos hasýva-pe, esquina originales oñeguerekóva, upévare **Decurve** oñemoĩ jey.
- **Ltype gen** ohechauka línea punteada ojeporu mboyve térã oñepyrũ jey vértice-pe.
- **Reverse** ombojoapy vértices orden. **Multiple** (`M` primer prompt-pe) ojeporu polilíneas mboapy opción ha.

Polilínea vértices {{ui:Propiedades}} térã grips rupi ojeikeha ndaipóri editor vértice PEDIT-pe.

## Archivo-kuéra-pe

DWG ha DXF 2000 oguereko spline spline-ramo: grado, control puntos, nudos, pesos, ajuste puntos ha tangentes. Spline ndojapomo'ãi oñemoĩ ojeporúva oikóramo.

Offset, trim, extend, fillet, break ha join ndojapo spline-pe. {{cmd:EXPLODE}} spline, térã {{cmd:PEDIT}} chupe, polilínea jeporu hag̃ua.

## Mba'e ojapóva ndaporãiva

- **Curva ojehasa puntos hendáichente.** Curva puntos rupi oñemboguejy puntos oñemboguejýva. Ojeporu puntos vyrõ, térã control polígono.
- **"Ndaha'éi spline."** SPLINEDIT spline-kuérape ojeporu; {{cmd:PEDIT}} polilínea-kuérape.
- **Cerrado fit spline ambue programa-pe ohechauka ambue forma.** CadCraft oñembojoaju primer punto-pe peteĩ join; ambue programa ikatu periódico curva-rupi. Cerrado control-punto spline opa jave ojehecha upéicha.
