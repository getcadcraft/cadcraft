---
title: Sombreado y áreas de relleno
summary: Rellená un área con color sólido o patrón estándar haciendo clic dentro o eligiendo formas cerradas, ajustá la escala y el ángulo del patrón y cambiá un sombreado después.
keywords: sombreado, bhatch, relleno, relleno sólido, patrón, ansi31, ansi37, ladrillo, tierra, red, líneas de corte, poché, isla, contorno, escala, ángulo
from: e7feb344
---

## Mba'épa rejapóta

Peteĩ corte de muro rellenado patrón ANSI31 ndive, peteĩ columna ijypy, ha relleno sólido columna-pe.

## Sombreado clic área rehe

1. Dibujá rectángulo (`REC`, `0,0`, `@2000,1200`) ha círculo rectángulo-pe (`C`, `1000,600`, `300`). Ejecutá {{ui:Extensiones}}.
2. Ejecutá {{ui:Sombreado}} grupo {{ui:Dibujar}}-pe, térã ehai `H` ha omoĩ {{key:Enter}}. Historia oinforma patrón actual, ehemplo `Current hatch: ANSI31, scale 1, angle 0°`.
3. Ehai `P` ha omoĩ {{key:Enter}}, ehai `ANSI31` ha omoĩ {{key:Enter}}.
4. Ehai `SC` ha omoĩ {{key:Enter}}, ehai `20` ha omoĩ {{key:Enter}}. Patrón tamaño papel-pe, upévare plano 1:20-pe trazado escala 20 oñeikuaa.
5. `Seleccione punto interno`-pe, eclic rectángulo-pe, círculo ndive ndaipórire. Sombreado previa ohechauka.
6. Omoĩ {{key:Enter}}. Rectángulo sombreado; círculo ijypy oĩ, isla ha'e.

Clic peteĩ áreas ojehai mbohapy antes {{key:Enter}}, peteĩ sombreado ojapo. `U` oguejy última área.

## Relleno sólido

1. Ehai `H` ha omoĩ {{key:Enter}}.
2. Ehai `P`, omoĩ {{key:Enter}}, ehai `SOLID` ha omoĩ {{key:Enter}}.
3. Eclic círculo-pe, ha omoĩ {{key:Enter}}.

## Formas cerradas eiporavo sombreado

Clic-pe ndaipóriramo, ehai `S` (Seleccionar objetos) `Seleccione punto interno`-pe ha eiporavo polilíneas cerradas, círculos térã elipses cerradas, ha omoĩ {{key:Enter}}. Formas ambue rehe oĩvape ijypy oguereko ojeikuaa (externa sombreada, siguiente ijypy, ha upéicha).

## Patrones

Ehai `?` patrón pregunta-pe lista rehechaukáva. Estándar oĩ ANSI31 peve ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH, ha SOLID. Pulgada-pe dibujo térã pie ha pulgada longitud formato-pe, patrones pulgada tamaño ojeporu, AutoCAD-icha; ambue mm.

{{ui:Ángulo}} (`A`) patrón entero ojapo: ANSI31 90° ambue dirección.

**Archivos de patrón.** `Seleccione punto interno`-pe ehai `F` (Archivo de patrón) ha eiporavo `.pat` archivo. Patrón-kuéra lista-pe oike; mbohapy-pe ojeikuaa ojeporúva. CadCraft ojeikuaa ndaikatúiva patrón oinforma ha skip ojeikuaa. `.pat` tamaño unidad propia ndoguerekói: plano unidad-pe leída. Usual `.pat` formato-pe archivo solamente probado; ambue programa-pe ndaipóri.

## Sombreado ojambia

Eiporavo (línea-pe eclic). Propiedades-pe: {{ui:Patrón}}, {{ui:Escala del patrón}}, {{ui:Ángulo del patrón}}. Plano abierto-kuéra sombreado estándar ohechauka; ambue color tono claro.

## Common mistakes

- **"No hay contorno cerrado alrededor de ese punto."** Contorno-pe ijyva, térã parte pantalla ndaipóri: CadCraft oikuaa pantalla-pe oñemoĩva. Cerrá ijyva (aumentá esquina-pe), térã disminuí.
- **"El patrón es demasiado denso para dibujar a esta escala."** Líneas ojoguáva ndojeikuaaiva. Escala mbovymi ejeporá: ehai trazado escala (20 1:20-pe).
- **Patrón hu'ã térã michĩ.** Escala plano unidad patrón unidad-pe; eheka paso 4.
- **Sombreado ndosiguiva contorno.** `HATCH`-pe ojapo sombreado oguereko objetos ojapojeyva: mueve, gira térã escalá contorno, sombreado oguejy; grip-pe ojambia, sombreado ojevolve. Enlace oñepe'a contorno ndoikóiramo, sombreado mano-pe ojambiáramo, térã ojerecortáramo, comando línea-pe oinforma. Ndaipóri ojejoguáva: área jey sombreá ojevolve enlace.

## Sombreado contorno ndive oñeguarda

Sombreado `HATCH`-pe ojapo oguarda mba'e ojeguardáva. Contorno mové, gira térã escalá: sombreado patrón ndive oguejy. Grip contorno ojambia: sombreado ojevolve. Sombreado solo mové: contorno avei oguejy, dibujo programa forma llena-icha.

Enlace oñepe'a, comando línea-pe oinforma, contorno ndoikóiramo térã sombreado mano-pe ojambiáramo. Sombreado oĩ. `AS` sombreado ehai ojapo sombreado peteĩ. Sombreado copia contorno ndive, kopia enlace propio.

`HATCHEDIT` (`HE`) patrón, escala, ángulo, origen ojambia, ha enlace contorno-ndive oñemoĩ térã oñepe'a. Enlace DWG ha DXF 2000-pe oguarda. DXF R12 ndoguerekói sombreado objeto, ambue programa enlace ndojeikuaái: `HATCHEDIT` ha Enlace ojeporu.

Contorno oñepe'a (borrado, térã archivo sin contorno) `HATCHGENERATEBOUNDARY` (`HGB`) ojapo peteĩ polilínea cerrada loop-pe sombreado rehe, ha Sí ehai enlace.

## Relleno degradado

`GRADIENT` (`GD`) rellena área degradado-ndive patrón-pe ndaha'éi: mismo elección `HATCH`-icha, tipo ehai (lineal, cilíndrico, esférico, hemisférico, curvo, ha invertidos), color peteĩ tono térã mokõi colores, ángulo, centrado térã no. `HATCH`-pe `G` opción mismo. `HATCHEDIT` `G`, térã {{ui:Propiedades}} Degradado-pe, degradado ojambia térã sombreado degradado-pe ojapo.

Degradado pantalla plot-pe ohechauka. DWG 2004 térã posterior guarda ambue programa-pe degradado real. DXF 2000 ha DWG 2000-pe degradado ndoguerekói: CadCraft guarda; ambue programa relleno sólido primer color-pe oíhaha.

## Sombreado ojerecorta

`TRIM` sombreado ojerecorta ambue objeto icha. Sombreado clic, borde corte rehe: bordes sombreado área ojepartí, ha pieza oñemboyke. Modo Quick-pe opavave objeto corte borde; ojeporu opción `T` muchos borde-pe ojeporúva. Sombreado recortado ndojeenlazái contorno-ndive, ndojerellena más.
