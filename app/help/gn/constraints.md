---
title: Restringir un plano
summary: Mantené las líneas horizontales, los extremos juntos y los tamaños fijos con restricciones geométricas y dimensionales, y dejá que el plano siga el cambio cuando modifiques un tamaño.
keywords: restricción, restricciones, paramétrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, grados de libertad, totalmente restringido
from: f8f21fa4
---

## Mba'e ojapóta

Peteĩ placa cuyo ancho ojeporavo peteĩ sapy'ápe: sus lados oguapy escuadra, peteĩ esquina oñeñongatu, ha su altura oiko ancho mitãre.

Restricciones oaplica líneas, polilíneas, círculos, arcos ha puntos pe pestaña {{ui:Modelo}}. Peteĩ-peteĩ restricción ojagregáva ha'e peteĩ paso de deshacer.

## Ojapo ha restringí ko contorno

1. Escribí `REC` ha apretá {{key:Enter}}. Escribí `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Escribí `AUTOCONSTRAIN` ha apretá {{key:Enter}}. Escribí `ALL`, {{key:Enter}}, ha upéi otro {{key:Enter}}.

   Historial ojehechauka "4 restricciones aplicadas". Lados rapykére ojehechauka **H** ha **V** cajas: ko'ãva ha'e las barras de restricción.
3. Escribí `GCFIX` ha apretá {{key:Enter}}. Hacé clic peteĩ esquina inferior izquierda oke. Caja ⊕ ojehechauka: ko esquina oikoite upérõ.

`AUTOCONSTRAIN` oagrega restricciones coincidentes donde los extremos casi se encuentran, y horizontal térã vertical donde líneas casi están a nivel térã a plomo. Escribí `S` iindicación-pe ojecambia mboyve oiko casi (0,05 unidades del plano ha 1° ojepyrũ).

## Ojagrega tamaños

1. Escribí `DCHORIZONTAL` ha apretá {{key:Enter}}.
2. Hacé clic esquina inferior izquierda-pe, ha upéi esquina inferior derecha-pe.
3. Hacé clic rectángulo rapykére cota línea-pe.
4. Indicación ojehechauka `Texto de cota <d1=100>`. Escribí `ancho=120` ha apretá {{key:Enter}}.

   Rectángulo oiko 120 de ancho, ha etiqueta ojehechauka `ancho=120`.
5. Escribí `DCVERTICAL` ha apretá {{key:Enter}}, escribí `O` ha apretá {{key:Enter}}, ha upéi hacé clic lado derecho-pe.
6. Hacé clic lado derecho-gui, escribí `ancho/2` ha apretá {{key:Enter}}.

   Oiko 60 de altura. Etiqueta ojehechauka `fx: d1=ancho/2`: peteĩ expresión ojeguapy.

Historial ojehechauka contorno oiko totalmente restringido. Tamaño ojecambia hag̃ua, cambiá `ancho` (ver [Usar parámetros y ecuaciones](topic:parameters)), térã doble clic `ancho=120` etiqueta-pe, escribí peteĩ valor pyahu ha elegí {{ui:Aplicar}}.

## Mover objetos restringidos

Mover, rotar, escalar, grips ha panel {{ui:Propiedades}} oguardáva restricciones: lo que ojeporta oñeñongatu, ha lo ambue oguata upéi. Restricciones ndaikatúi oguata jave, edición ndojapói ha historial ojehechauka mbaʼérepa, por ejemplo "No hecho: las restricciones mantienen ese objeto donde está". Objeto ojeborra jave, ipa restricciones avei oho.

## Espejo ha recortar objetos restringidos

- {{cmd:MIRROR}} ojekopia restricciones objetos espejo rupi copias-pe. Lados (mboyve tangente tocá, ha mboyve lado distancia ojemedi) ojejuhu jey espejo copia-pe, ha copiadas cotas ojeguereko nombre propio, paste ojoʼéicha. Con `Erase source objects` `Y`, restricciones oñeñongatu objetos espejo-pe. Historial ojehechauka cuántas ojeguata.
- {{cmd:TRIM}} oñongatu línea térã arco restricciones lo que oiko: extremo-pe restricción oho pedazo-pe oiko upe extremo; dirección regla ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Paralela}}, {{ui:Perpendicular}}) oiko cada pedazo-pe, ha cota ambue dos extremos externos oñemedi jey. Restricciones oikotaha pedazo-pe térã longitud ojemudáva corte rupi ({{ui:Igual}}, arco barrido) oho. Recortado círculo oñongatu iñorõ ha radio restricciones. Recortado polilíneas ojepoi ipa restricciones.

## Restricciones

| Comando | Oñongatu |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | línea térã segmento nivel térã plomo (`2P`: dos puntos nivel térã plomo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dos líneas paralelas, a escuadra térã peteĩ línea-pe |
| {{cmd:GCCOINCIDENT}} | dos puntos juntos; `O`: peteĩ punto línea, círculo térã arco-pe |
| {{cmd:GCTANGENT}} | línea ha círculo térã arco, térã dos, tocándose |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dos círculos térã arcos peteĩ centro-pe; dos longitudes térã dos radios iguales |
| {{cmd:GCSYMMETRIC}} | dos puntos, líneas térã círculos espejo línea rupive |
| {{cmd:GCFIX}} | peteĩ punto (hacé clic cerca) térã objeto entero (`O`) oiko hendaitépe |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | distancia |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radio, diámetro, ángulo dos línea ryepýpe térã arco ángulo |

{{cmd:GEOMCONSTRAINT}} ha {{cmd:DIMCONSTRAINT}} oporandu mboyve; {{ui:Restringir}} ha {{ui:Cota}} grupo {{ui:Paramétrico}} rupi oñemoñe'ẽ, ha {{ui:Más}} hína cada peteĩ. Hacé clic cerca extremo-pe, medio térã centro-pe ojeporta upe punto; polilínea-pe hacé clic segmento ojeporta. Primer objeto oiko, ha segundo oguata ojejuhu hag̃ua.

Restricción ojoʼyiva ambue restricciónpe térã ndoguerekoiha ambue restricciones rupi, mensaje rupive ojekañy ha ndaikatúi mbaʼeve ojeguata.

## Ojehecha, ojeselecciona ha ojepe'a

- Hacé clic restricción barra-pe (térã cuadrado, térã cota etiqueta) restricción ojeselecciona hag̃ua; historial oñe'ẽ hína. Apretá {{key:Delete}} ojepe'a hag̃ua.
- {{cmd:DELCONSTRAINT}} ojepe'a opa restricciones objetos selecciona-gui.
- {{cmd:CONSTRAINTBAR}}: `S` ojehechauka opa barras, `H` ojemboka; objetos primero selecciona ojehechauka térã ojemboka hag̃ua. {{ui:Más}} oguereko {{ui:Mostrar barras de restricción}} ha {{ui:Ocultar barras de restricción}}.
- {{cmd:DCDISPLAY}} ojehechauka térã ojemboka dimensionales restricciones. Ndojeimprimirői nunca.
- {{cmd:DCCONVERT}} cotas líneas, círculos ha arcos rupi oñongatu dimensionales restricciones-pe.

:::note
AutoCAD-pe paramétrico plano ojeikuaa jave, comando nombres ha indicaciones ndojoavýi. Restricciones ha parámetros ojeñongatu DWG ha DXF archivo-pe, ambue programas ndojeikuaái hag̃ua; ver [Archivos](topic:files#constraints-in-files).
:::
