---
title: Abrir DWG, emoambue ha guarda copia
summary: Abrir plano oúva nderehe, rechequea mbaʼépa oike, emoambue peteĩ mbaʼe ha emoʼẽ jey copia DWG térã DXF-pe.
keywords: dwg, dxf, abrir, importar, exportar, guardar, r12, ida y vuelta, consultor, xref, chequear plano, guardar como, dwg guardar, formato
from: 49de4bf6
---

## Mbaʼépa reikotevẽ

Abrir DWG consultor-gui, rechequea mbaʼépa CadCraft ikatu ha ndaikatúi ohechauka, emoĩ peteĩ nota, emoʼẽ hoja PDF-pe ha guarda copia emoʼẽ jey, DWG térã DXF-pe.

## Abrir archivo

1. Eʼẽ {{key:Mod+O}}, térã ejepe {{ui:Abrir}}.
2. Eiporavo `.dwg` archivo.

Estado línea omombe‘u "Reading …" plano oñelee jave. Oñemboʼe jave plano opa pantalla-pe, ha historial omombe‘u, por ejemplo, "Opened plan.dwg: 18,240 objects on 64 layers", ha mbohapy mboyve.

:::offline
Nde ndaipóri conexión. {{ui:Guardar para usar sin conexión}} botón "Offline ready" omombe‘u jave, DWG archivo-kuéra oikóta porã; ndaikói, ha ndaipóri DWG pe pestaña-pe, DWG abrir ndoikóiha: DXF abrí térã conexión-pe CadCraft offline guarda upe jey. Ehecha [Offline ojapo](common:offline).
:::

## Rechequea mbaʼépa oike

1. Eʼũ plano panel-pe izquierda: formato ha versión, unidades, objeto-kuéra cuenta ha capa-kuéra, ha hoja-kuéra.
2. Eʼũ "About this file" cuadro upe rupi, oĩpa.

Cuadro omombe‘u:

- **Not shown yet:** CadCraft ndaikatúi ojapo objeto-kuéra, kind ha cuenta-íchaite. Ojehejáva, ndojeporaviháiva.
- **Layouts (sheets) came in:** abrí chupe pestaña-kuéra plano rupi.
- **Dimensions that could only be read as drawn.**

2. Eʼẽ pestaña-kuéra plano rupi hoja peteĩ-peteĩ ehechakuaa.
3. Rechequea {{ui:Unidades}} {{ui:Configuración actual}} pe (nada oñeʼẽ‘ỹ, {{ui:Modelo}} pestaña). Omombe‘u {{ui:Sin unidades}} ha ereikuaa plano milímetro-pe, emoĩ chupe, hoja ha trazado escala porã ohechauka hag̃ua.

:::tip
Ndereʼẽi peteĩ parte plano nde rehecháramo, rechequea {{ui:Capas}} panel-pe: capa oñemboryre térã oñemoĩ congelado archivo-pe. Eʼẽ hérã, emboguejy ha eʼẽ: upéva ohejaukáta.
:::

## Emoĩ nde cambio

1. Emoĩ capa nde notakuéra: eʼẽ {{ui:Nueva capa}}, tipea `NOTES` ha eʼẽ {{key:Enter}}.
2. Tipea `DT` ha eʼẽ {{key:Enter}}.
3. Eʼẽ hendápe nota oĩta.
4. Tipea texto altura plano-pe porã (ehecha [Texto ha etiqueta-kuéra emoĩ](topic:text)) ha eʼẽ {{key:Enter}}.
5. Eʼẽ {{key:Enter}} rotación 0 oguarda hag̃ua.
6. Tipea nde nota ha eʼẽ {{key:Enter}}.
7. Eʼẽ {{key:Enter}} jey ojepe hag̃ua.

Cota importada oñemoambue ndojejavái: peteĩ oñemoambue jave, CadCraft omoĩ jey ijeʼẽ estilo-pe.

## Hoja emoʼẽ rechequeara hag̃ua

1. Eʼẽ hoja pestaña.
2. Eʼẽ {{key:Mod+P}}.
3. Ejepe {{ui:Descargar PDF}}.

Ehecha [Trazar a PDF](topic:plot-pdf).

## Copia guarda

1. Eʼẽ {{key:Mod+S}}, térã ejepe {{ui:Guardar}}.

Nde DWG abrí rire, nevegador oñemboguejy `<name>.dwg`, DWG oúva versión-pe. Historial omombe‘u, por ejemplo, "Saved a copy as Plan.dwg (DWG (AutoCAD 2018))." ha línea-kuéra oĩ upe rupi mbaʼe oñemoambue jave.

2. Emaña ko línea-kuéra archivo emoʼẽ mboyve. [Mbaʼépa DWG oguarda ha oñemoambue](topic:files#what-a-dwg-keeps-and-changes) omombe‘u peteĩ-peteĩ.

Nde DWG orígen ndoñemoambuéi. Guardado peteĩ-peteĩ ojejapo pyahu.

## Guarda DWG térã DXF-pe

Formato ejeporu hag̃ua:

1. Eʼẽ {{key:Mod+Shift+S}}, térã ejepe {{ui:Guardar como}}.

{{ui:Guardar una copia como}} cuadro oñemboʼe mbohapy opción-nguéra, peteĩ-peteĩ archivo nombre-ndive: {{ui:DWG}}, {{ui:Versión}} lista-ndive, {{ui:DXF R12}}, {{ui:DXF 2000}} ha {{ui:DXF 2000 (binary)}}. Plano formato ha versión ojeiporu jau oĩ.

2. Ejepe formato emoʼẽva. DWG-pe, eiporavo versión oúva ambue ófisiope, térã mboyvegua: AutoCAD 2018, 2013, 2010, 2007, 2004 térã 2000.
3. Ejepe {{ui:Guardar}}.

Copia oñemboguejy. Upe rire {{key:Mod+S}} ko plano guarda ko formato-pe, ha plano pyahu-kuéra avei, ko nevegador-pe. {{ui:Cancelar}} térã {{key:Esc}} ndoguardái, ha historial omombe‘u "Not saved."

Mbaʼépa eiporavo:

- **DWG** oguarda hetaʼeve: hoja viewport-ndive, cota real, sombreado patrón, capa ha bloque nombre nde ojeporúva, ha texto multilínea multilínea-pe. AutoCAD 2000 versión oipeʼa programa mboyve; 2004 ha upe rire oguarda color real avei.
- **DXF 2000** texto archivo, DWG oguardava hetaʼeve oguarda: hoja layout-pe viewport-ndive, cota real, sombreado patrón, color real, grosor de línea, tipo de línea ha nombre nde ojeporúva. AutoCAD 2000 ha upe rire oikóta ha programa CAD mboyve. Multiguía oñemoambue línea, punta flecha ha texto oñemboheʼáva. DXF 2000 térã upe rire ojeporúva DXF 2000-pe oguarda.
- **DXF 2000 (binary)** DXF 2000 ojapo-pe tenonde binario formato-pe: archivo mboyve oguarda ha número opa porã. Ambue programa-kuéra binario DXF text-íchaite oikóta, ha binario-gui abierto plano binario-pe oguarda.
- **DXF R12** programa CAD opa-pe oikóta. Primera hoja viewport-ndive oguarda, ha CadCraft ambue hoja-kuéra. Pyahu mbaʼe-kuéra simplifica: texto multilínea ha sombreado.

## Ambue oficina ohecháta

DWG-pe:

- Línea, arco, círculo, elipse, polilínea, texto, texto multilínea, bloque atributo-ndive, relleno sólido, sombreado patrón ha capa ndejehecháicha.
- Cota real: ambue programa oñemedi jey oñemboʼe jave.
- Opa hoja, papel ha viewport-ndive.
- Multiguía multiguía-íchaite. AutoCAD 2000 versión-pe color real oñemoambue color estándar mboyveguápe.

DXF R12-pe:

- Línea, arco, círculo, polilínea, texto, bloque referencia ha cota ndejehecháicha. Cota real oñeñangareko.
- Capa nombre mayúscula-pe, espacio `_`-pe.
- Primera hoja plano espacio-papel-pe viewport-ndive. Ambue hoja-kuéra `CCLAYOUT_1` nombre-ndive bloque-pe oúva; opa hoja layout ohecha jave, hoja-kuéra PDF avei emoʼẽ.
- Texto multilínea línea separada-pe, elipse polilínea-pe, sombreado contorno-pe.

Opa mbaʼe, "Not shown yet" DWG abrí jave omombe‘úva **ndaha** copia-pe, historial omombe‘u oñeñangareko ndaha ramo: DWG OLE objeto-kuéra ha modelo espacio 3D sólido-kuéra DWG guarda jave oguarda jey. Omombe‘u ambue-pe, ha PDF avei emoʼẽ.

## Mbaʼe ndaporãiva

- **"CadCraft opens DWG and DXF drawings."** Archivo ambue extensión oguereko. Rechequea `.dwg` térã `.dxf` ha.
- **"This drawing could not be read."** DWG ojejapo térã versión ndojeporúi reader-pe. Emoʼẽ DXF térã DWG versión mboyveguápe guardado.
- **"This binary DXF ends in the middle of an object."** Archivo ojejapo térã ojepo. Tipea RECOVER omoĩ oikóvape ojeporaviháramo, térã emoʼẽ archivo jey.
- **Guardado archivo `name (1).dwg` térã `name (1).dxf`.** Nevegador omoĩ upéicha ojeporúva archivo mismo nombre carpeta-pe oĩ jave.
- **Programa mboyve ndaikatúi DWG abrí.** Save as DWG AutoCAD 2000 **Versión**-pe, térã {{ui:DXF R12}}: programa CAD opa-pe oikóta.
- **Plano parte-kuéra ndoúi.** Linked drawing (xref) ndojejuhúi archivo-kuéra eiporavóva peve ({{cmd:XREF}}, `R`), ha imagen marco-kuéra archivo nombre-ndive ohechauka.
