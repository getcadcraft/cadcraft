---
title: Archivo: mba'éichapa oñeabre, mba'éichapa oñeguarda
summary: Formato CadCraft ojeabre, ojeguarda ha ojeexporta, mba'e oñeguardava térã ojecambia, ha moõ guýpe oho archivo-kuéra.
keywords: xclip, clip, límite xclip, bind clipped, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversión, descarga, guardar como, dwg guardar, formato, qsave, xref, xattach, plano vinculado, referencia externa, bind, recargar, desvincular
from: 6d68b34e
---

## Vista general

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto, cualquier versión) | Heẽ | Heẽ, como DXF R12 térã DXF 2000 | DXF binario ndojeporúi: emboguejy primero como DXF de texto. |
| DWG | Heẽ | Heẽ, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 térã 2018) | Ojeleéva ha ojeguarda CadCraft-pe DWG biblioteca rupive (AutoCAD R13 peve 2018 archivo-kuéra). Ne DWG ndojecambiái. Archivo ojehaʼãva térã versión ndojeleiva'ỹva, ojejoka mensaje rupi. |
| PDF | Ojegueru peteĩ página: underlay térã objeto rupi ([PDF underlays](topic:pdf-underlay)) | Heẽ, trazando | PDF vectorial peteĩ hoja térã modelo escala-pe. |

Peteĩ plano ejeabréva (térã ejepyrũ {{ui:Nueva}} rupive) oguereko iñangareko tab área plano ári; plano ndojeporuvaʼekue ndoikóiva ojeheja tab ojeporumba'eháica. Ejepyta tab ojeguejy haguã, {{ui:×}} ejepe ojejoka haguã (CadCraft ojerekuaáta ndaha'éi oñeguardavaʼekue mba'e), térã ojehasa plano opavave peteĩ ári: ehecha [Dividir la pantalla](topic:split-screen).

## Abrir un plano

- Ejapo {{key:Mod+O}}, eclic {{ui:Abrir}}, térã emoñe'ẽ `OPEN`, ha upéi eiporavo archivo.
- Térã emboguapy `.dwg` térã `.dxf` archivo área plano-pe.

Archivo ojeleéta ne navegador-pe. Ndojeguejýi ningo-pe. Historia oñemboguata mboʼépa objeto ha capa ojeike, ha mboyve tiempo, ha {{ui:Plano}} sección panel izquierda-gui ohechauka formato, por ejemplo "DWG 2018 (AC1032)".

DWG ojeleéva ojekopýi CadCraft-pe ha oñeikeha pe primer DWG ojeabréva página ojeguahẽ rire, upévare ndaikatúi oñeikekuaa archivo juvamíva ndaha'éi. Ojeleéva segundo plánope, upévare página ojapyhy ojeikóvo DWG tuichave.

### Mba'épa ojeike

- Línea, arco, círculo, polilínea (arco segmento-kuéra ndive), elipse, punto, texto ha texto ojeheja, sólido, sombreado (patrón estándar ojehechaukáva líneamby, ambue peteĩ tono plano), bloque referencia atributo-kuéra ndive (ojehechaukáva hesakã ojeporuvaʼekue; ehecha [Atributos de bloque](topic:attributes)), cotas, ha layouts viewport-kuéra ndive.
- Splines ojeike spline-mby (grado, puntos de control, nudos, pesos, puntos de ajuste); ehecha [Splines y polilíneas](topic:splines).
- Multileaders peteĩ línea guía ha texto ndive ojeike CadCraft multileader-mby oñemoambue hag̃ua (ehecha {{cmd:MLEADER}}). Ambue (bloque, línea guía mokõi térã línea curva ndive) ojehechaukáva ojapóva ambue mbohapy programa-pe ha oñemboguejy peteĩnte; historia ohechauka mboyve.
- Imágenes ohechauka marco peteĩ archivo nombre ndive peve {{cmd:IMAGE}} rupive emoĩ CadCraft-pe archivo: ehecha [Imágenes en un plano](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts ohechauka iñangarekópe, ha oĩva hesakã ohechaukaséta.
- Tablas DWG-pe ojeike ambue mbohapy programa ojapóva rupi.
- 3D caras model space-pe ojeike pestaña {{ui:3D}}-pe, ndaha'éi 2D objeto-kuéra-icha; ha upéicha bloque-pe ha referencia bloque-pe peteĩ vez. Bloque-pe ha hoja-pe ojechaukakuaa plano, contorno-icha. Ehecha [Modelo en 3D](topic:3d-solids).
- Capas oguereko color, activo, congelado, bloqueado ha configuración de trazado. DEFPOINTS ndotrazái nunca.
- Cotas ojeguerekóva punto ojeleíva ojapo cota CadCraft real ha editable. Hepyme ojehechaukáma ambue programa ojapo rupi; peteĩ ojecambia rire, CadCraft ohasa ijeʼẽ estilo-pe.
- Peteĩ layout ojapo peteĩ tab hoja. Ambue programa-pe peteĩ layout oguereko primer viewport oñemboyke; ha ichupe hoja iñambue, CadCraft ndoikéi upe.

### Mba'épa ndojeike ko'ẽrõ

Mba'e CadCraft ndojapóiva ojekuaa ha ndojeikuaái. "Archivo ko'ápe" ñemoñe'ẽ panel izquierda-gui ohechauka "Todavía no se muestra:" ha upéi mba'e mboyve. Tavakuairã: DXF-pe tablas, mallas, ha 3D sólido bloque-kuéra-pe. 3D sólido, región ha cuerpo modelo espacio-pe ohechauka pestaña 3D-pe (ehecha [Modelo en 3D](topic:3d-solids#solids-from-other-programs)). Viewport archivo-pe torcido ohechauka torcido, ha oikuaaukáta guardar-pe; upéicha UCS actual, UCS nombradas ha vista girada.

Texto ojeporu peteĩ fuente tipo Helvetica. Etiqueta peteĩ línea-pe fuente estrecha original programa-pe ikatu ojehasa mokõi líneaguépe CadCraft-pe.

## Guardar

Oĩ mbohapy tape oñeguarda haguã. Opavave ojeguarda peteĩ copia.

- **Guardar**: ejapo {{key:Mod+S}}, eclic {{ui:Guardar}}, térã emoñe'ẽ `SAVE` (térã `QSAVE`). Ojeguarda plano formato-pe: DWG ojeabre DWG-gui, DXF ojeabre DXF-gui. DWG oikuaauka versión oikóva (2018 archivo 2018-pe oñeguarda). Plano pyahu oipuru formato ha DWG versión emboguejy ha ojeporuvaʼekue Guardar como-pe ko navegador-pe; ndaikuaái rupi, DWG AutoCAD 2000 formato-pe.
- **Guardar como**: ejapo {{key:Mod+Shift+S}}, eclic {{ui:Guardar como}}, térã emoñe'ẽ `SAVEAS`. {{ui:Guardar una copia como}} diálogo ohechauka {{ui:DWG}}, {{ui:Versión}} lista (AutoCAD 2018, 2013, 2010, 2007, 2004 térã 2000), {{ui:DXF R12}} ha {{ui:DXF 2000}}, peteĩteĩ pe archivo nombre ndive ojeguardáta, ha plano formato ha versión actual ojeporaporã. Eclic {{ui:Guardar}} ojeguarda haguã, térã {{ui:Cancelar}} (térã {{key:Esc}}) ndojeguardaiha; historia upérõ ohechauka "No guardado." Mba'e ejeporu ojekeha: {{key:Mod+S}} upéicha ojeporu ko plano-pe upe rire, ha navegador-pe plano pyahu-kuéra ojepyrũ upénte.
- **DXFOUT**: emoñe'ẽ `DXFOUT`. Oñeguarda DXF R12 copia ojeguahẽvo, ha upe ojeguejýva {{key:Mod+S}} ojeguarda plano formato-pe.

Navegador oguahẽ `<plano nombre>.dwg` térã `<plano nombre>.dxf`. Opavave guardar ha **descarga pyahu**; archivo ojeabrevaʼekue ndojejoaporái ni ojecambiái. Historia ohechauka, ejemplo: "Copia guardada como Plan.dwg (DWG (AutoCAD 2018)). Tu Plan.dxf original ndojecambiáiva." DXF-pe ohechauka "(DXF R12, ojepyta opavave CAD programa-pe)". Ha upe ári línea ohechauka mba'e ojecambiáva hape.

CadCraft escritorio aplicación-pe ojapórõ, guardar ohaiha ambue escritorio programa-icha: {{key:Mod+S}} oguarda plano ejeabréva archivo-pe, bien formato ha versión-pe, ha historia ohechauka moõ guýpe oñeguardaháicha. {{ui:Guardar como}} ha exportaciones ohechauka sistema diálogo, ha `.dwg`, `.dxf` térã `.ccsheets` archivo mboguetéva dos vez ojepyrũ CadCraft-pe.

PDF-pe, trazar (ehecha upe ári).

## Mba'épa DWG oguarda ha ojecambia

CadCraft ojapo DWG navegador-pe, ha upe DWG biblioteca-gui ojeleéva rupi. Ejeporu versión Guardar como-pe: AutoCAD 2000 formato (archivo versión AC1015) ojeabrevaʼekue heta programa-pe, tuichavéva. Pyahu formato-kuéra (2004, AC1018, 2018 peve, AC1032) ojekuaáta color verdadero rehe. Mba'eve ndojeguahẽi; DWG guardar ndoikóiva offline.

Opavave versión ojehechaukava'ekue mbohapy ambue programa DWG leedor-pe ha CadCraft-pe ojeleéva ojeguardavaʼekue archivo. CadCraft DWG ndojeabréi aún AutoCAD-pe.

### Mba'épa DWG oguarda

- Línea, arco, círculo, elipse, punto, ha polilínea arco segmento-kuéra ndive.
- Peteĩ línea texto alineación ha ancho factor ndive.
- Mokõi línea ha ojehesa texto, texto multilínea-icha. Ambue programa ojehesa tuichave upe ancho ndive.
- Color objeto-kuéra: capa rupi, bloque rupi, 255 color estándar, ha color verdadero 2004 formato ha pyahúva.
- Capas color, tipo de línea, grosor ha activo, congelado, bloqueado ha trazado configuración; objeto-kuéra tipo de línea, grosor ha escala propia, tipo de línea patrón-kuéra ha plano escala tipo de línea.
- Plano unidades ha longitud formato (decimal, pie ha pulgada, fracciones…).
- Bloque punto base ndive ha atributo definición-kuéra, invisible, constante ha preestablecido ndive.
- Bloque referencia escala, rotación ha atributo valor ndive.
- Relleno sólido ha patrón sombreado, patrón, escala ha ángulo ndive (patrón mismo línea, ambue programa oñemboguejýpe).
- Cotas, cota real ramo: ambue programa oñeme'ẽ ojeporúvo. Peteĩteĩ oguereko ijeʼẽ configuración (texto altura, flecha tamaño, decimales, longitud formato) ha iñe'ẽ, ha opavave DWG cota dibujo copia.
- Hojas (layouts): peteĩteĩ hoja papel tamaño ha unidades ndive, ojeporu mba'e ojedibuja hi'ãva, ha viewports view ha escala ndive.
- Vista nombre-kuéra.
- Multileaders, multileader-icha.
- Capa ha bloque nombre tiempo ojeikuaaukáva, mayúscula ha minúscula. (DXF R12 oguarda mayúscula-pe.)

### Mba'épa DWG ojecambia

Peteĩteĩ ko'ã ojejoka historia guardar rire, ojeporúva ndive.

| En CadCraft | En DWG ojeguardaháicha |
|---|---|
| Color verdadero (color picker rupive ojeporaveva), 2000 formato-pe | Color estándar iñambue: 2000 formato-pe 255 añoite. Guardar como 2004 térã pyahúva ojekuaáta |
| Hoja vista nombre-kuéra | Papel espacio vista: DWG ndoikuaaiva mba'e hoja, upévare CadCraft ojeabrérõ, primer hoja-pe oĩ |
| Multilínea texto ancho factor ndive | Ancho letra normal: DWG-pe ancho factor ojeporu peteĩ línea texto-pe añoite |
| Capa térã bloque nombre ndaikatúi DWG-pe | Ojecambia: link de plano ojeporaveva ndive `Base\|Walls` oguahẽ `Base$0$Walls`, ha ambue signo `_` |

### Mba'éichapa R12, ha mba'e ojecambia

DXF-pe guardar rire, CadCraft ojapo DXF R12, opavave CAD programa ojeabrevéva. Ha'e ojeguejyva pyahu mba'e-kuéra, upévare mba'e heta ojapo ijeʼẽ yvyapýpe:

| En CadCraft | En DXF R12 ojeguardaháicha |
|---|---|
| Multilínea texto | Peteĩ texto objeto línea peteĩ-pe |
| Elipses | Polilíneas elipse-icha |
| Sombreados (ojeabre archivo-gui) | Ijeʼẽ contorno añoite |
| Color verdadero (color picker rupive) | Color estándar iñambue |
| Grosor ha objeto escala propia | Oñeñeʼẽ: R12-pe ndoikói (tipos de línea oñeguardava) |
| Capa ha bloque nombre | Mayúscula-pe ojeguarda; espacio ha ambue signo `_` ojapo, ha nombre 31 signo peve (“Title block” oguahẽ `TITLE_BLOCK`) |
| Capas oñeguardáva ndotrazái | Ambue programa ojetrazáta (CadCraft ohechauka ojesarekóva plano tiene hoja) |
| Cotas | Cota real bloque ijeʼẽ ndive, ambue programa ohechauka ahecha haguã |
| Multileaders | Línea, flecha ha texto oñemboguejýva |
| Vista nombre-kuéra | Oñeguarda, nombre mayúscula-pe; hoja vista primer hojápe ojevolve |
| Hoja pluralidad | Primer hoja opavave programa ohechauka papel espacio; ambue oñeguarda bloque `CCLAYOUT_1`, `CCLAYOUT_2` … ojevolve hoja CadCraft ojeabrérõ |

Historia ohechauka ko'ã opavave ojejoka tembiapo.

:::tip
Plano ojeporuvaʼekue ára mboyve, DXF-pe guardar ha upe DXF ejeabré ohechaukapa. Opavave CadCraft ojeikeva ikatu ojeguardaháicha, cotas, bloques ha hoja opavave.
:::

## Links de planos (referencias externas)

{{cmd:XATTACH}} (`XA`, térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Vincular un plano (xref)}}) oñemoĩ ambue DWG térã DXF: eiporavo archivo, ha upéi eclic moõ guýpe ohóta ({{key:Enter}} ohupi 0,0-pe). Ojeike peteĩ bloque archivo nombre ndive, escala tuichave planos unidades iñambuépe. Capa ha bloque nombre oguereko link nombre mboyve, `Plan|Walls`, `Plan|Door`, upévare ndojehérei ndéve: ejepyta térã ejejoka capa ha bloque ndéve. Link ndojecambiaiha: ambue plano ojecambia rire, recargá. Mba'e ejeporuva link capa-pe (color, tipo de línea, grosor, activo/inactivo, congelado, bloqueado, trazado) oñeguarda recargar-pe, DWG guardar-pe link oĩ rire, ha ambue plano ohechauka upe.

{{cmd:XREF}} (`XR`): `?` ohechauka link-kuéra (ojeikeva térã ndaha'éi, mba'e archivo, mboyve referencia); `A` oñemoĩ; `R` ojevolve peteĩ archivo-gui (ejeiporavo archivo ojeguahẽ: navegador ndoikuaái eremiko carpeta); `B` ojapo bloque ha capa `Plan$0$Walls` nombre-pe; `D` oñemboguejy peteĩ (referencia ha capa oho). Peteĩteĩ oñeguejy mba'e rehe.

{{cmd:XCLIP}} (`XC`) ojecorta bloque referencia ha links: ejeporavo, `N` peteĩ límite pyahu rehe, upéi `R` mokõi esquina ndive térã `P` polígono punto-kuéra ndive ({{key:Enter}} ojapo polígono); `D` oñeguejy recorte. Upe ojehechaukáva ojetrazáta, ha recorte referencia ndive ojevolve. DWG ha DXF 2000 recorte oñeguarda; DXF R12 referencia opavave oñeguarda ha ojehecha.

Ejeabréva plano ikatu oñemoĩ link CadCraft ndojehechaiva: ohechauka mboyve ndojekargavaʼekue. Ehecha {{cmd:XREF}}, `R`, ha eiporavo peteĩteĩ archivo.

Oñeguardáramo, link ojekargava **bloque ojejoka** archivo-pe (ambue programa ohecha bloque ha capa `Plan$0$…` nombre-pe), ha historia ohechauka. Link ndojekargavaʼekue ojeguarda archivo-pe link-icha, DWG ha DXF-pe.

## Ojehechauka 3D-pe

{{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) oipe'a plano 3D modelado app-pe pestaña pyahúpe, DWG-icha, ndojeguahẽi. Upépe ojecambiáva oikoty; upépe oguardá. Menú ítem ohechauka tenonde upe app oikuaaukuaáva plano.

## Trazar PDF

Ejapo {{key:Mod+P}}, eclic {{ui:Trazar}}, térã emoñe'ẽ `PLOT`. PDF navegador-pe oñemoĩ ha ojeguahẽ, térã pestaña pyahúpe ojehechaukáva imprimi haguã. Ehecha [Trazar a PDF](topic:plot-pdf).

## Moõ guýpe oho archivo-kuéra

Opavave guardar ha trazar ha descarga; archivo oho navegador ojeguahẽvaʼekue lugar-pe, ojeporúvaicha Downloads carpeta. Peteĩteĩ vez carpeta ojeiporavo haguã, navegador descarga configuración ojecambia; [Navegadores y computadoras](common:browsers) ohechauka moõ.

Ndaipóri ojeabrevaʼekue térã ojeguardaháicha ojeʼe ore-pe. Ehecha [Dónde van tus archivos](common:your-files).

## Archivos de proyecto PLN y PLA

CadCraft ojeabre DWG ha DXF planos, ndaha'éi Archicad archivo-kuéra (`.pln`, `.pla`, `.tpl`, `.bpn`). Peteĩ ojeabréramo, ohechauka mba'e. Archicad-pe, guarda ejeporavo hoja térã vista DWG-pe ha upéi ejeabre CadCraft-pe, térã modelo IFC-pe exporta ha BimCraft-pe ejeabre. BimCraft ojeikuaaukáva archivo, CadCraft ohechauka {{ui:Abrir en BimCraft}}.

## Si la página se cierra antes de guardar

CadCraft ojeguarda peteĩteĩ plano ojecambiáva copia, ko navegador-pe añoite, peteĩ momento rire ndejeporúi. Pestaña ojejoka, navegador ojejoka térã computadora ojepyrũ guarda mboyve, CadCraft ojeporandu **¿Recuperar tu trabajo?** ojepyrũmbaite: {{ui:Recuperar}} ojeabre plano, ndojeguardái, pestaña pyahúpe. Plano guarda rire, copia ojeguejy. Ehecha [Recuperar tu trabajo](common:recover).

## En línea y sin conexión

Ojeabre, dibujo, guardar (DWG ha DXF) ha trazar oñeme'ẽ nde computadora-pe, upévare ndaipórirõ conexión CadCraft ojepyrũ rire.

Conexión'ỹ CadCraft ojeporuvaʼekue, ejepyta {{ui:Guardar para usar sin conexión}} pe barra pyahúpe, conectado mboyve. Etiqueta ohechauka tiempo ("Guardando 40 de 212") ha oñemboty "Listo sin conexión". Oñeguardava copia DWG leedor oguereko, mbohapy 5 MB; upévare **DWG archivo ojeabre sin conexión** oñeguarda rire. Ejepyta mokõi vez {{ui:Guardar otra vez (obtener la versión más nueva)}} térã {{ui:Quitar la copia sin conexión}} haguã. "No se pudo guardar" ohechauka archivo-kuéra ndojeguahẽi: ehecha conexión ha eclic eme'ẽ jey. "Sin conexión no disponible" ohechauka ko navegador ndojeguardaiha (ventana privada térã computadora oiporuvaʼekue).

Oñeguardaʼỹre, DWG leedor ojeguahẽ DWG ojeabréramo página ojepyrũ rire, upévare sin conexión ndojeabréi DWG; DXF archivo ndoipotái. Ndejepyta jey página sin conexión, CadCraft oñeguarda ndeve.

Ehecha [Trabajar sin conexión](common:offline) ambue detalle-pe.

:::offline
Ko'ẽrõ ndaipórirõ conexión. Planos DWG térã DXF-pe oguarda ha trazar normalmente, DXF archivo ojeabre. DWG archivo ojeabre CadCraft ohechauka "Listo sin conexión" térã DWG leedor ojekargava pestaña-pe.
:::

## Restricciones en archivos

Restricciones ha parámetros (ehecha [Restringir un plano](topic:constraints)) DWG ha DXF-pe ojeguarda. Peteĩteĩ restringido objeto oguereko peteĩ nota CadCraft (datos extendidos), ha bloque `CADCRAFT_PARAMETRIC` ndojeporuvaʼekue oguereko restricciones ha parámetro tabla. Ambue programa archivo ojeabre normalmente ha ko'ã ndoikuaái; purga ojepuru rire ikatu oñeity bloque. Notas ojeikuaa objeto ijeʼẽ clave-gui, ndaha'éi archivo handle-gui, upévare programa handle ojecambia ndojehasa. Ambue programa objeto restringido ojeity térã ojecambia rire, CadCraft archivo ojeabre rire restricción ojejoka ha mboyve ohechauka. Restricción ndoguerekoʼỹre archivo ojeabre restricciónʼỹi.

Sketch ojeguahẽva parte modelador-gui (`.json`) ojeabre: ehecha [Mover sketches a y desde otros modeladores de piezas](topic:solidworks-sketches).

## Todavía no disponible

- Multileaders multileader objeto-icha DXF guardado-pe (R12-pe ndoguerekoi: ojeguarda ojedibujáva mba'e-icha).
- Imágenes DXF guardado-pe (marco-icha oguarda; DWG-pe imagen-icha oñeguarda), ha wipeouts ojehe'ỹva mba'e iñangarekópe.
- DXF 2000 hetaveguasúva versión guardar.
- Nube guardar ha computadora apopy ojeikóva.

Ehecha [Todavía no construido](topic:not-built-yet) opavave mba'e-kuéra.
