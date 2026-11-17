---
title: Sombreado y relleno de áreas
summary: Rellenar un área con color sólido o con un patrón estándar haciendo clic dentro o eligiendo formas cerradas, ajustar la escala y el ángulo del patrón, y cambiar un sombreado después.
keywords: sombreado, bhatch, relleno, relleno sólido, patrón, ansi31, ansi37, brick, earth, net, líneas de corte, poché, isla, contorno, escala, ángulo
from: 14399174
---

## Mba'e rejapóta

Corte de muro rehe ojehechaukáva patrón ANSI31, columna ndaipóri ojehechaukáva, ha columna mbytépe relleno sólido.

## Sombreado clic rupi área mbytépe

1. Dibujá rectángulo (`REC`, `0,0`, `@2000,1200`) ha círculo upe mbytépe (`C`, `1000,600`, `300`). Clic {{ui:Extents}}.
2. Clic {{ui:Hatch}} grupo {{ui:Draw}} rehe, térã tipea `H` ha apretá {{key:Enter}}. Historia ohechauka mávape patrón actual oĩ, ejemplo `Current hatch: ANSI31, scale 1, angle 0°`.
3. Tipea `P` ha apretá {{key:Enter}}, tipea `ANSI31` ha apretá {{key:Enter}}.
4. Tipea `SC` ha apretá {{key:Enter}}, tipea `20` ha apretá {{key:Enter}}. Patrón tamaño papel rehe ojehechaukáva, upévare plano 1:20 rehe imprimido ohechauka escala 20.
5. En `Pick internal point`, clic rectángulo mbytépe, círculo ndive. Sombreado ohechauka vista previa rehe.
6. Apretá {{key:Enter}}. Rectángulo ojesombrea; círculo mbytépe ndaipóri ojehechaukáva, porque isla.

Clic área hetave antes de apretar {{key:Enter}} ojapo peteĩ sombreado. `U` oguejy última área.

## Relleno sólido

1. Tipea `H` ha apretá {{key:Enter}}.
2. Tipea `P`, apretá {{key:Enter}}, tipea `SOLID` ha apretá {{key:Enter}}.
3. Clic círculo mbytépe, upéi apretá {{key:Enter}}.

## Sombreado forma cerrada ojeporavo

Clic mbytépe ndaipórirã, tipea `S` (Select objects) en `Pick internal point` ha ojeporavo forma cerrada: polilíneas, círculos térã elipses cerradas, upéi apretá {{key:Enter}}. Forma ojeporavo mbytépe ótra ojeikuaa ndaipóri (ruvichavéva sombreado, upe próxima ndaipóri, ha ambue).

## Patrones

Tipea `?` patrón pregunta rehe lista ohechaukáva. Estándar ha'e ANSI31 peve ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH, ha SOLID. Plano pulgada rehe térã pie ha pulgada formato rehe, patrones pulgada tamaño ojeporu, AutoCAD-pe ojehecháicha; ambue rehe milímetro.

{{ui:Angle}} (`A`) ojehechaukáva patrón entero: ANSI31 90° rehe ohendu ambue tape.

**Archivo patrón.** Tipea `F` (Pattern file) en `Pick internal point` ha ojeporavo archivo `.pat`. Umi patrón upépe ojoaprovecha lista-pe; hetave rire ojerekuaa mávape ojeporu. Archivo CadCraft ndaikuaái patrón rehe ohechauka, ha patrón ojeskipea ojecontáta. Tamaño `.pat` archivo-pe ndaiporiha unidad propia, upévare ojeleé plano unidades rehe. Ojehu'ã ko'ẽ `.pat` formato usual rehe; ndaipóri ojehu'ã mbohapyha programa-gui.

## Sombreado ojemoambue

Ojeporavo (clic umi línea rehe). {{ui:Properties}} rehe: {{ui:Pattern}}, {{ui:Pattern scale}} ha {{ui:Pattern angle}}. Plano ojepyta rire sombreado ohechauka patrón estándar oikuaáva rehe; ambue ohechauka tono claro color rehe.

## Mba'e ojeporiahu

- **"Ndaipóri contorno cerrado upe puntope."** Contorno rehe oĩ brecha, térã peteĩ parte off screen: CadCraft ohecha tenonderã pantalla-pe. Oñemboty brecha (zoom corner-pe), térã zoom out.
- **"Patrón hasy denso escala ko'ápe dibujarlo."** Línea ohasa jave plano ohechauka. Eiporu escala hetave: eityvyro plot escala (20 1:20-pe).
- Patrón ohechauka hetaiterei térã michĩ. Escala ha'e plano unidad patrón unidad mbytépe; ehechá paso 4 ko'ápe.
- **Contorno mbohovái ndojeporuvéi sombreado.** Sombreado ndojejoguái contorno-pe. Mbohovái ambue, térã sombreado jey.

## Sombreado ojejoguáva contorno-pe

Sombreado ojapo `HATCH` rehe ohechaukáva mávape ohechaukáva. Mbohovái, mborýi térã escala contorno, sombreado ha patrón ojeporrekáta. Mbohovái peteĩ grip ojeporavo contorno ojemoambue, sombreado ojeikuaa jey. Mbohovái sombreado añónte, contorno ojeikuaa avei.

Contorno ndojejoguáiha térã sombreado mano rupi ojemoambue jave, enlace ojeñemboty, ha línea de comandos ohechauka. Sombreado ojekuaa. Sombreado ojapo jave tipea `AS` ojapo sombreado ojekuaa ojeporavo. Sombreado ojekopia contorno-gui, kopia oguereko enlace propio.

`HATCHEDIT` (`HE`) ojemoambue sombreado patrón, escala, ángulo ha origen, ha enlazá contorno-pe térã ojemboty enlace. Enlace ojeguarda DWG ha DXF 2000 archivo-pe. DXF R12 archivo-pe sombreado objeto ndaipóri, ha ambue programa-gui enlace ndojeleéi: eiporu `HATCHEDIT` ha Link upe rehe.

Sombreado contorno ndaipóri jey (contorno ojehepyma, térã archivo ndoguerekói): `HATCHGENERATEBOUNDARY` (`HGB`) ojapo polilínea cerrada loop peteĩ peteĩ rehe, ha Yes ojerespondé jave, sombreado umi-pe ojenlaza.

## Relleno gradiente

`GRADIENT` (`GD`) ojeno área gradiente rehe patrón rehe ndaipórirã: umi mismos picks `HATCH`-gui, upéi tipo ojeporu (lineal, cilíndrico, esférico, hemisférico, curvo ha cada invertido), peteĩ color tono rehe térã mbohapy color, ángulo, ha centrado térã ná. `HATCH`-pe opción `G` ojapo peteĩ ramo. `HATCHEDIT` `G`, térã {{ui:Properties}} Gradient-pe, ojemoambue gradiente térã ojapo gradiente sombreado.

Gradiente ohechauka pantalla ha plots-pe. Guardá DWG 2004 térã pórtape, ambue programa-pe gradiente sombreado real ohupi. DXF 2000 ha DWG 2000 ndaipóri gradiente: upépe CadCraft oñongatu hembiapo-pe, ambue programa-pe relleno sólido primer color rehe ohechauka.

## Sombreado recortado

`TRIM` ojehecha sombreado ambue objeto ramo. Clic sombreado borde ruvicha querés oguejy: bordes ojejoaju área sombreado, ha pieza upe ojejoguy. Quick modo-pe objeto opaite ha'e borde de corte; eiporavo bordes primero (opción `T`) objeto hetave jave. Sombreado recortado ndojejoguái contorno-gui, porque ndojenohẽi mbovy.
