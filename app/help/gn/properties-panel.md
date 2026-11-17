---
title: Propiedades panel
summary: Ohechauka ha ojapo mba'e opavave eiporavo objeto-kuéra, heta ojeikóramo peteĩ jey: koordenada Z ndive, tamaño, texto, cota configuración, transparencia ha ambue. Campo-kuéra expresión ha unidades ndive ojeporu.
keywords: totals, total length, total area, sum, selection length, properties, properties palette, ctrl+1, pr, ch, mo, ddmodify, varies, quick select, pickadd, coordinates, z, elevation, thickness, transparency, material, hyperlink, expression, quickcalc, vertex, dimension style, tolerance, decimals
from: 10d6a829
---

## Mba'e ekuaáta

Mba'éichapa oho Propiedades panel, peteĩ objeto térã cien peteĩ paso-pe oñemuda, koordenada Z ndive exacta ojeporu, expresión ha unidades campo número-pe, ha mba'e objeto ohechauka.

## Ojepyta

Panel oĩ derecha-pe. Oñemoĩ mboyve:

- Eprese {{key:Mod+1}}, térã eskribi {{cmd:PROPERTIES}} (térã `PR`, `CH`, `MO`).
- Hapo doble clic objeto-pe (texto ha multileader oñepyrũ texto editor).

Panel ambue panel-kuéra ramo ojemovéva: mbytepe ojeipe'a, izquierda, derecha térã abajo ojeikejoha, térã dibujo rehe ojeipe'a flotante (eha [Arrange the panels and use a second monitor](common:arrange-panels)).

### Ojepe'a

Panel derecha arriba pin botón oipe'a **auto-hide**: panel ojepe'a derecha borde tira-pe ha dibujo tenda ojeporu. Tira-pe punterogui oñepyrũ dibujo rehe (térã {{key:Mod+1}}); mboyvegui ojepe'a. Pin-gui mokõi jey hapo clic opa jeýpe. {{cmd:PROPERTIESCLOSE}} avei ojepe'a.

## Sección-kuéra

Propiedades oĩ sección-kuéra: **General**, **Geometry**, **Text**, **Lines and arrows**, **Fit**, **Primary units**, **Alternate units**, **Tolerances**, **Pattern**, **Misc**, ha bloque-pe **Attributes** ha **Library item**. Sección réra hapo clic oñepe'a térã oñepyrũ; CadCraft omanduʼa mboyve ojepe'a.

Línea mbyte nombre ha valor-kuéra mboyve ojepe'a ojeheja nombre ancho ojeikeporãva. Doble clic oguerekoha jey. Teclado-pe, ndive flecha-kuéra ojeporu.

## Valor ojemuda

1. Hapo clic línea-pe. Encabezado "Line" omombe'u.
2. Hapo clic {{ui:Length}}-pe. Editando, campo valor completo ohechauka, ndaha'éi redondeado.
3. Eskribi `2500` ha eprese {{key:Enter}}. Línea ojapo 2500 mbyte, punto ha ángulo omanteníva.

{{key:Enter}} térã ambue lugar clic oipe'a valor; {{key:Esc}} valor kuehe ojeguerekoha. Cada cambio peteĩ paso deshacer.

### Expresión ha unidades

Campo número opavave ojeporu más mba'e número añoite:

| Eskribi | Ojeguerekóva |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (pulgada, dibujo pie ha pulgada-pe) |
| `900mm`, `3.5m`, `2ft` | Dibujo unidades-pe ojeconverti |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (ángulo campo-pe) |
| `0.5r`, `100g` | Radián ha grado, grados-pe |

Unidad oguerekóva longitud dibujo unidades oguerekovaʼerã: {{ui:Units}} {{ui:New objects}}-pe (ningún eiporavo) omoĩ mboyve. Entrada iporã ndaha'éi: panel rembe'ýpe nota ohechauka ha ndojemudái; ndojekuaai 0-pe. Funciones: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; ángulo grado-pe.

## Hetaiterei objeto peteĩ jey ojemuda

1. Eiporavo hetaiterei objeto, ehemplo 8 línea ha 4 cota.
2. Encabezado "12 objects" omombe'u, ha lista tuichaite **All (12)**, **Line (8)** ha **Dimension (4)** ohechauka.
3. **All** ohechauka opavave objeto mba'e ha'e (capa, color, tipo de línea…). **Dimension (4)** eiporavo cota configuración ohecha.
4. Ojemuda valor, ehemplo {{ui:Decimals}} `1`-pe.

Cota irundy ojemudáta, peteĩ paso deshacer. Campo **Varía** omombe'u objeto ndojeporavóiva; valor eskribi opavave ojemudáta. Capa ojeheja objeto ndojemudái, ha nota omombe'u mboyve.

## Eiporavo objeto totales

Hetaiterei objeto ojeiporavo rire, {{ui:Totals}} sección panel-pe omombe'u:

- **Objects**: mba'éichapa heta peteĩ tipo, ehemplo "8 lines, 2 polylines, 1 circle".
- **Total length**: línea, arco ha polilínea suma (spline avei oike), ha mboyve objeto.
- **Total area**: cerrado oikóva suma: círculo, elipse entera, cerrado polilínea ha hatch (hatch agujero ndojejepe'a).

Dibujo longitud formato-pe ojeguerekóta (pie ha pulgada ojeporúramo; superficie upérõ pulgada cuadrada ha pie cuadrado-pe). Barra estado mesmo longitud ha superficie ohechauka objeto ojeiporavo ramo; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} ojepe'a. Peteĩ objeto-pe, {{ui:Geometry}} ohechauka propio longitud ha superficie, ojeporúva ántes.

## Koordenada

Punto opavave ohechauka **X**, **Y** ha **Z**: línea punta ha punta, centro, inserción punto, texto posición, polilínea vértice ko'ẽrõ. Línea avei ohechauka **Delta X**, **Delta Y** ha **Delta Z** (ndojemudáiva). Polilínea ha hatch oguereko **Elevación** (Z peteĩ objeto-pe).

Crosshair botón punto réra ojuhu jajemo'ã ohejáva dibujo-pe: hapo clic, upéi hapo clic posición pyahu (snap oiporavo). Valor ha'e mundo koordenada.

## General

| Campo | Ha'e mba'e |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Capa paneldeguáicha; {{ui:By layer}} capa ojeheja |
| {{ui:Transparency}} | Capa rehe, bloque rehe térã 0 gui 90% |
| {{ui:Thickness}} | Línea, círculo, arco, polilínea, punto ha texto Z-pe mboyve ojeguejy |
| {{ui:Material}} | Capa rehe, bloque rehe, Global térã archivo réra |
| {{ui:Plot style}} | Ndojemudái: dibujo color rehe trazado, hoja [plot style tabla](topic:plot-pdf#plot-style-tables) ndive |
| {{ui:Hyperlink}} | Web dirección objeto ndive |

## Mba'e tipo ohechauka

| Eiporavo | Ojemudáva |
|---|---|
| Línea | Punta ha punta X, Y, Z; longitud; ángulo |
| Círculo | Centro; radio; diámetro; circunferencia; superficie (cada peteĩ radio ojemoĩ) |
| Arco | Centro; radio; punta ángulo; ángulo total; cuerda (arco longitud ha superficie ohechauka) |
| Elipse | Centro; radio mayor ha menor; radio relación; eje mayor ángulo; punta ángulo |
| Polilínea | Vértice ojehecha (abajo); ancho global; elevación; cerrado; cerrado superficie (centro rehe ojeescala) |
| Texto | Contenido; estilo; justificar; altura; giro; ancho factor; ángulo oblicuo; ancho definido; línea espacio; anotativo; posición |
| Bloque referencia | Inserción punto; giro; escala X, Y, Z ha uniforme; atributo valor |
| Hatch | Patrón; escala; ángulo; origen; asociativo; isla detección; color fondo; elevación |
| Cota | Abajo ohechauka |
| Multileader | Texto; altura; ancho; texto lado; flecha tamaño; aterrizaje distancia; flecha punto |
| Viewport | Escala; centro ha tamaño hoja-pe; modelo vista centro; encendido; pantalla traba |

### Polilínea vértice

{{ui:Current vertex}} ohechauka mba'e vértice campo-kuéra oñeha. Flecha botón oiporavo, térã número eskribi, ambue vértice-pe mboyve; límite nomeʼẽi. Cada vértice oguereko X, Y, punta ha punta segmento ancho, ha segmento bulge oñepyrũva (0 = recto).

## Cota

Cota ohechauka **Dimension style**, mba'e medí, punto-kuéra ha opavave configuración:

- **Lines and arrows:** flecha cada punta, flecha tamaño, tick tamaño, cota ha extensión línea colores ha grosores, mokõi mitã térã extensión línea ohecha, extensión línea mboyve ha extensión.
- **Text:** anulación (vacío dejá medido valor; `<>` ndive nde texto-pe), estilo, color, altura, mboyve, vertical ha horizontal posición, siempre horizontal, giro, fondo relleno.
- **Fit:** escala general, línea espacio, mba'e mudá espacio ndaha'éiramo, texto movimiento.
- **Primary units:** formato, decimal, redondeo, prefijo, sufijo, medida escala, decimal separador, cero inicio ha fin ndojehechauka; ángulo-pe ángulo formato ha decimal.
- **Alternate units:** encendido térã apagado, formato, decimal, multiplicador (25.4 pulgada milímetro-pe ojeconverti), redondeo, prefijo ha sufijo.
- **Tolerances:** ndaipóri, simétrica, desviación, límite térã básica, valor superior ha inferior, decimal, altura ha posición.

Ojemudáramo cota ojepyta, ambue programa ojapo dibujo ndojepyta, ha CadCraft ojapo jey.

:::note
Horizontal texto posición (primera o segunda extensión línea lado) ha línea mboyve texto ojejapo lineal ha alineado cota-pe; ambue cota-pe oguardáva ha ndojejapói. Fit elección oguardáva ha ndojejapói: CadCraft texto ojehechápe regla propia ndive (línea arriba, ndahasáramo afuera).
:::

## Ndaipóri eiporavo

Ningún eiporavo ndaipóri, panel ohechauka:

- **New objects:** capa, color, tipo de línea, grosor ha texto altura objeto pyahu ojeguerekóva; dibujo unidades ha longitud formato; capa actual tipo de línea ha grosor; cota pyahu tamaño. Hoja-pe, hoja réra, papel ha orientación primero.
- **View:** pantalla-pe ehechaúva centro, altura ha ancho. Eskribi valor vista oguata hag'uáicha.
- **Misc:** UCS ícono encendido térã apagado, UCS (siempre World: CadCraft ndoguerekói UCS usuario ko'ẽrõ) ha anotación escala.

## Botones arriba

| Botón | Ojapo |
|---|---|
| Embudo | {{cmd:QSELECT}}: tipo ha propiedad rehe eiporavo |
| Puntero | {{cmd:SELECT}}: comando línea-pe objeto eiporavo |
| Más térã 1 | Clic eiporavo oñembohéva (más) térã ojejapóva (1); Settings, {{ui:CadCraft}} ndive peteĩ ojoguáva |
| Pin | Auto-hide, arriba |

## Ñemboguejy ojeikóva

- **Campo-pe eskribi ndojapói.** Eprese {{key:Enter}} térã clic ambue lugar ojapo. Campo pytã ha nota: entrada ndojeporavói.
- **Unidad oguerekóva longitud ndojeporavóiva.** Dibujo ndoguerekói unidades. Eiporavo {{ui:Units}} ningún ndojeporavóiramo.
- **Ndojeporavói ojemuda tipo.** Hetaiterei objeto tipo eiporavo ha **All** oiporavo. Tipo peteĩ lista tuichaite ojeporavo.
- **Objeto ndojemuda.** Capa traba-pe oĩ. Capa ojeporavo layers panel-pe.
- **Eskribi letra campo-pe ojeike.** Campo-pe cursor oĩ ramo, tecla ojeike upe-pe. Eprese {{key:Enter}} térã {{key:Esc}}, upéi eskribi comando.
