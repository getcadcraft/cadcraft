---
title: Mba'e pyahu 0.7 (ymaguare)
summary: PDF subyacente ha PDF importación, escaneo ha trazado automático, spline real SPLINE, SPLINEDIT ha PEDIT ndive, dimstyle administrador, formato oñemboguerova texto, WBLOCK ha escala propia, sólido 3D ambue programa-kuéragui, escaneo registro, Laser panel, USD exportación, Historial ha imprimir CadCraft Studio-pe, guiado primer plano, toolbar ojoaplo ambue tape-pe térã heta fila-pe, ha asistente de IA heta mba'e.
keywords: novedades 0.7, versión anterior, notas de lanzamiento, registro de cambios, cambios, 0.7, versión, nuevas funciones, pdf, pdfattach, pdfimport, subyacente, escaneo, scanattach, scantrace, trazado, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formato, wblock, scalelistedit, lista de escalas, acis, sólidos 3D, registerscans, registrar escaneos, icp, e57, las, láser, grbl, g-code, usd, usdout, historial, versiones, comparar, imprimir, impresora, png, svg, estilo de trazado, tipo de línea, recorrido, hoja de referencia, mapa de comandos, posición de la barra de herramientas, filas de la barra de herramientas, toolbardock, regen, regenall, trackpad, deslizar, página de códigos, cirílico, coreano, chino, japonés, eléctrico, rcd, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de soporte, asistentes, mcp, unidades, portugués
from: d9a8ea79
---

Ko'ẽrõ CadCraft 0.7-pe ojejuhu, 0.6 ndive ojoavy. Heta ojerurévo Discord-pe. Lista ojoaplo área rupi, ohechakuaáva primero.

## Pyahu

### PDF ha escaneo plano

- **PDF página plano ári omoĩ.** {{cmd:PDFATTACH}} (`PDFATT`) omoĩ página tamaño verdadero térã peteĩ escala ejeporúva. Línea-kuéra ojoaplo, omyatỹ, monocromo ojapo ({{cmd:PDFADJUST}}), ojapo recorte ({{cmd:PDFCLIP}}) ha PDF capa-kuéra ojambue ({{cmd:PDFLAYERS}}). Línea, relleno ha texto ojapo ploteo-pe, ha DWG térã DXF 2000 ojapo mbohapy archivo enlace rupi. {{ui:Abrir}} rupi PDF oabrí oporandu oiko térã oimporta. Ehecha [PDF subyacente ha PDF importación](topic:pdf-underlay).
- **PDF página plano objeto-kuéra-pe ojapo.** {{cmd:PDFIMPORT}} (`PDFIM`) ojapo línea, polilínea, círculo, arco, sólido sombreado ha texto PDF-pe ojerécava capa-kuéra-pe, tamaño verdadero, escala ojeporúva térã dos punto ha distancia real rupi, peteĩ paso deshacer-pe. Ehecha [Importar página](topic:pdf-underlay#import-a-page).
- **Escaneo plano.** {{cmd:SCANATTACH}} oguahẽ PNG, JPEG térã TIFF (peteĩ página térã opa) térã PDF página imagen. Upéi {{cmd:SCANSCALE}} rupi escala, {{cmd:SCANALIGN}} rupi alinea, {{cmd:SCANDESKEW}} rupi cuadra ijeguata línea-kuéra rupive, {{cmd:SCANCLEAN}} rupi blanco ha negro ojapo ha mancha oheja, recorta ha parte oheja. Peteĩteĩ paso peteĩ deshacer ha archivo originál oguardá. Ehecha [Escaneo plano ha trazado](topic:scanned-drawings).
- **Escaneo línea ha arco-pe trazado.** {{cmd:SCANTRACE}} escaneo línea-kuéra línea ha arco-pe ojapo capa pyahu SCAN-TRACE-pe, eskoge tolerancia rupi, texto ha sombreado oiko upéicha. Informe ohechauka mba'épa ojapo ha mba'épa ndojapói, ha ndaha'éi garantía ojapo porã: hecháto planilla rehe. {{cmd:RASTERSNAP}} omoĩ objeto snap escaneo punta, esquina ha cruce-kuéra. Mba'e ndojeguerúi, modelo entrenado ndojeporúi. Ehecha [Trazado](topic:scanned-drawings#the-trace).

### Dibujo ha edición

- **Spline real.** {{cmd:SPLINE}} (`SPL`) ojapo curva punto-kuéra rupi térã control punto-kuéra rupi (grado 1 ha 5), tangente extremo ndive; {{cmd:SPLINEDIT}} (`SPE`) ojambue, omoĩ, oheja ajuste térã control punto, peso omoĩ, abre, cierra, oñemboheta térã polilínea-pe ojapo. DWG ha DXF archivo-pe spline ojehu spline-icha, DWG ha DXF 2000 spline-icha oguardá. Ehecha [Spline ha polilínea](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) polilínea cierra ha abre, línea ha arco omoĩ, peteĩ ancho omoĩ, curva vértice rupi ajusta térã spline ijeguata rupi, ha Decurve rupi oheja, oñemboheta, ha heta jey ojambue. Ehecha [Polilínea ojambue](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) bloque, objeto-kuéra térã plano entero DWG térã DXF pyahu-pe oguardá, ha'e capa, estilo ha bloque ojeporúva añónte. Ehecha [Bloque térã objeto archivo propio-pe oguardá](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ha REGENALL.** {{cmd:REGEN}} (`RE`) ejepyso pestaña plano-gui oñemboheta, {{cmd:REGENALL}} (`REA`) opa pestaña, panel ha plano abierto. Ehecha [REGEN ha REGENALL](topic:commands#regen-and-regenall).

### Texto ha dimensión

- **Texto oñemyasãi formato.** Párrafo texto ambue programa-gui color palabra por palabra, negrita, cursiva, subrayado, fracción apilada ha altura oñeguerekóva: pantalla ha PDF-pe ojehechaukáva, palabra oñemoambue jepe oñemoĩ, ha oguardá. Ehecha [Párrafo texto formato ambue programa-gui](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Dimensión estilo administrador.** {{cmd:DIMSTYLE}} (`D`) estilo nombre-pe ojapo, ojambue, ojekuaáva ha ojapo; estilo ojambuévo opa dimensión oñemboguapy. {{cmd:DIMEDIT}} (`DED`) texto omoĩ jey, texto pyahu ojapo, ojapo ndaipóri térã extensión línea ojeʼẽ; {{cmd:DIMTEDIT}} texto izquierda, derecha térã medio omboguapy. Ehecha [Estilo de dimensión nombrado](topic:dimension-settings#named-dimension-styles).
- **Nde escala propia.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) escala 1:75 ojapo ventana ha ploteo escala lista-pe; plano-pe oguardá (DWG ha DXF 2000), ambue programa plano lista ndive oguahẽ. Ehecha [Escalas](topic:units-papers-scales#scales).
- **Ambue alfabeto texto.** DXF archivo cirílico, coreano, chino, japonés ha vietnamita código página-pe oguardáva oabrí texto ndive, ha chino, japonés ha coreano texto PDF-pe oñemboty (plot ojerura font ipuku'ỹvéva peteĩ jey). Ehecha [Fuente](topic:text#font).

### Ploteo ha imprimir

- **Heta plot estilo tabla-pe.** Peteĩteĩ color tabla-pe tipo de línea, línea punta ha unión, ha relleno estilo sólido relleno línea sombreado-icha imprimi hag̃ua omoĩ ikatu; tabla ijeporúva grosor lista ha tipo de línea escala. Ehecha [Plot estilo tablas](topic:plot-pdf#plot-style-tables).
- **Imprimir, PNG ha SVG archivo.** Plot diálogo-pe oĩ {{ui:Imprimir…}}, {{ui:Descargar PNG}} (300 dpi) ha {{ui:Descargar SVG}}. CadCraft Studio-pe computadora impresora-kuéra, papel ha copia cantidad ohechauka. Ehecha [Imprimir](topic:plot-pdf#print) ha [Imagen ha SVG archivo](topic:plot-pdf#picture-and-svg-files).

### 3D ha nube de puntos

- **3D sólido ambue programa-gui.** Sólido, región ha cuerpo plano modelo espacio-pe 3D pestaña-pe ohecha, solo lectura, ha DWG-pe oguardáramo ndojambuéi. Superficie CadCraft ndojapói-pe ohechauka, ndojapói adivinanza. Ehecha [Sólido ambue programa-gui](topic:3d-solids#solids-from-other-programs).
- **Heta escaneo registro.** {{cmd:REGISTERSCANS}} (`REGSCAN`) escaneo ambue punto-gui peteĩ marco-pe omoĩ, punto pareja térã coordenada rupi, ICP ndive ojoaplo, registro proyecto archivo michĩ-pe oguardá, ha registrado nube LAS térã E57 archivo peteĩ-pe oguardá. Ehecha [Escaneo heta peteĩ-pe registro](topic:register-scans).
- **USD exportación.** {{cmd:USDOUT}}, térã {{cmd:EXPORT3D}} › {{ui:USD}}, 3D pestaña sólido `.usda`, `.usdc` térã `.usdz` oguardá. Ehecha [3D modelo USD-pe exportar](topic:usd).
- **3D pestaña-pe cálculo.** 3D pestaña herramienta distancia oikotevẽva, cálculo ojapo ikatu, comando línea-icha. Ehecha [Aritmética valor ojeporúvape](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Ojapo mba'e

- **Láser-pe plano ejeho.** {{cmd:LASER}}, térã {{ui:View}} › {{ui:More}} › {{ui:Laser…}}, plano ári panel oabrí: capa peteĩteĩ corta, marca, grabado línea, relleno forma, grabado imagen térã ndojehejái, potencia, velocidad ha pasada ndive. Vista nde ojapo rehe oñemboty, {{ui:Guardar G-code…}} GRBL laser modo G-code oguardá, ha Chrome térã Edge-pe panel marco ojapo ha USB rupi omboguapy ikatu. Configuración plano-pe oguardá (DWG ha DXF). Ehecha [Láser-pe plano ejeho](topic:laser-cutting).
- **Eléctrico complemento-pe ojapo instalación símbolo.** Dato, teléfono ha TV salida, llave ha hora llave, termostato, salida de emergencia, detector, llamada punto ha sirena, ventilador, calentador de agua, cocina, EV carga punto, energía medidor ha subtablero, ha RCD ha RCBO símbolo. Circuito RCD ndive oĩ ikatu, panel tabla RCD columna, ha check 30 mA térã menos RCD ndaipóri enchufe circuito-kuéra nombra. Ha'e planificación recordatorio, código revisión ndaha'éi.
- **P&ID complemento.** P&ID proceso diagrama ojapo: conexión punto symbol-kuéra, proceso ha señal línea, etiqueta, línea número, línea, equipo, instrumento ha válvula lista (CSV térã planilla) ha check. CadCraft ndive oñemoĩ ha {{ui:Configuración}} › {{ui:General}} › {{ui:Complementos}}-pe oñemboty peve ojapo'ỹ. Ha'e dibujo ayuda, ingeniería aprobación'ỹ, ha ijeʼẽ ko ára inglés-pe añónte.

### Primer plano ha pantalla

- **Guiado primer plano.** {{cmd:TOUR}} (térã {{ui:Hacer el recorrido}} inicio tarjeta-pe) seis paso-pe plano verdadero-pe ejeho: línea, círculo, movimiento, recorte, borrado ha dimensión. Primera jey CadCraft oñemboguapy ndaipóri mba'e ndive, ha'e rupi oñepyrũ. Ehecha [¿Preferís guía?](topic:getting-started#prefer-to-be-guided).
- **Hoja de referencia ha mapa de comandos.** [Hoja de referencia](topic:cheat-sheet) ha'e 40 comando peteĩ página-pe, PDF-pe avei imprimi hag̃ua, ha [mapa de comandos](topic:command-map) comando sutĩ A-gui Z-peve.
- **Barra de herramientas opa tape-pe.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: arriba (ojeporúicha), abajo, izquierda térã derecha, térã `TOOLBARDOCK` escribí. Ehecha [Posición de la barra de herramientas](topic:settings#toolbar-position).
- **Barra de herramientas filas.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Filas de la barra de herramientas}}: ojoaplo ojeguerojera, 2 fila térã 1 fila, CadCraft barra ha Drafting classic ha Ribbon estilo-pe. {{key:Shift+Ctrl+F1}} ojehu opa, {{key:Ctrl+F1}} botón ohechaukáva, ha {{cmd:TOOLBARROWS}} ha {{cmd:TOOLBAR}} omoĩ. Inicio sugerencia-pe cierre botón oĩ. GJoe2 ndive pull request-pe ojapo. Ehecha [Filas de la barra de herramientas](topic:settings#toolbar-rows).

### CadCraft Studio-pe

- **Historial.** {{cmd:HISTORY}} (`HIST`), térã {{ui:View}} › {{ui:More}} › {{ui:Historial…}}: Studio plano abrí ha oguardá copia, plano nube versión (nube-gui oabrí). Peteĩ oabrí, oguardar térã dos comparar, pyahu, oheja ha ojambue color-pe. Ehecha [Historial](topic:history).
- **acad.lsp ha acaddoc.lsp.** {{cmd:APPLOAD}}-pe soporte carpeta eskoge: ko'ã mokõi archivo CadCraft oñepyrũ rire oñemboguapy (acaddoc.lsp plano pestaña pyahu-pe jey), ha `S::STARTUP` upéi oho. Ehecha [Aplicación oñemboguapy](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plot diálogo ventana propia-pe.** Título barra botón plot diálogo ventana propia-pe ojapo, computadora pantalla ambue-pe ojapo ikatu. Ehecha [Diálogo mover](common:arrange-panels#move-a-dialog).

### Asistente de IA-kuérape

- **Archivo nombre rupi, carpeta eskogeva.** CadCraft Studio-pe asistente ikatu oabrí, oguardá ha plotear archivo nombre rupi, ha comando oipotáva archivo ome'ẽ (INSERT archivo rupi, COUNT exportación, SAVEAS, PLOT), ha'e carpeta {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Carpetas que puede usar}}-pe emoĩva añónte. Ehecha [Omboguapy archivo carpeta eskogeva rupi](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Heta llamada ndive.** Asistente peteĩ jey comando línea ohechaukáva ikatu, comando oñemboty mbytépe ojeheja, objeto-kuéra tipo ha capa rupi tuichakue, ha bloque atributo valor ndive peteĩ paso omoĩ.
- **Ventana ndaipóri.** `cadcraft` línea de comandos SVG plot ojapo, heta archivo ojapo, ojapo, plot, ojehecha ha ohechauka peteĩ jey. MCP paquete ndoñemoĩ jepi. Ehecha [Archivo ojapo CadCraft ndojeporuivéva](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Ojambue

- **Nde mbohapy ojapo mboyve ojeguata.** Mbohapy dedo trackpad-pe ojeguata: plano 2D ojeguata; pellizca ha ratón rueda zoom. Ehecha [Ratón, trackpad ha tacto](topic:mouse-trackpad-touch).
- **OLE objeto-kuéra oiko.** DXF ojapo objeto imagen térã nombre marco ohechakuaa ha DXF 2000 oguardá. DWG oiko ha DWG oguardáramo oñemboty, ha'e ohechauka ndaipóri. Ymaguare oñemboheta. Ehecha [Ambue programa-gui objeto (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Pyahu plano unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} eskoge ko'ã mba'e, ha plano pyahu unidad eskogevaʼekue-pe ojehu.

## Ojapo porã

- **Trabajo ojoaplo ojeguerekóva.** Ko'ã mba'e ndojaporu ha'e: {{ui:Dialog}} ojeguata ojapo porã.
- **Ojapo porã ha panel ojapo.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidad de diseño}} › {{ui:Compacta}} pantalla-pe heta ohechauka (táctil ha teléfono botón grande oguereko). Peteĩteĩ panel título barra michĩ: ojeguata ha ojapo panel ojehe, ojapo ha ojapo ojerechava pestaña-pe, ojapo ojapo ha peteĩ ojapo ojeheja. Ehecha [Panel omoĩ](common:arrange-panels#make-the-layout-denser).
- **Diálogo ojeguata.** Título barra ojeguata pantalla ndive; ha'e ojerévo ohecha. Título barra jey ojapo, centro-pe omoĩ. Ehecha [Diálogo mover](common:arrange-panels#move-a-dialog).
- **Asistente de IA-kuérape recetas.** Ikatu peteĩ mba'e heta, peteĩteĩ herramienta ha permiso ndive ojapova'ekue; test-kuéra ojapo. Ehecha [Asistente de IA-kuérape recetas](common:assistants-recipes).
- **Ñe'ẽ.** **Portugués (Portugal)** {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}-pe pyahu. Ha **Portugués (Brasil)**, **Español (México)** ha **Bahasa Indonesia** opa palabra ojeporúva, revisión'ỹ borrador. Ayuda temas inglés-pe.
- **CadCraft Studio** ndejuhúi actualización ojapo'ỹ mba'e rehe (archivo ndaipóri sistema-pe, red'ỹ, firma ivaíva) "Hecho" ndaha'éi, ha Qué hay de nuevo tarjeta ndejoguáva ndaguahẽi peve release pyahu.

## Ndojejapóiva ko versión-pe

- **0.7 código firmado ndaiporãi.** Firma ha Microsoft Store paquete 0.8-pe oñemboty, certificado validación ndojehu. Getcadcraft.com/download-pe SHA-256 cada archivo rehe ehecha. Windows-pe, SmartScreen instalador oñembotyva, {{ui:Más información}} ejepyta, upéi {{ui:Ejecutar igualmente}}. Mac-pe, primera jey CadCraft Studio-pe mouse derecha ejepyta ha {{ui:Abrir}} ejeskoge. CadCraft Studio app tienda-pe ndaiporiri, iPad ha iPhone build ndaiporiri.
- Ángulo ha pendiente lista {{ui:Unidades}}-pe oguardá, ha ndaiporiri caja ndojeporúi.
- DWG OLE objeto-kuéra oguardá ha ndaohechaukái, ha OLE-pe metafile imagen ndojapói.
- Plot estilo tabla (CTB archivo) ambue programa-gui oléi, archivo ejemplo-pe ojerévo.
- `\M+` código-pe ohecha Asia texto oléi, ambue programa archivo-pe ndoheka'íi.
- PDF subyacente: página-pe imagen pantalla-pe ohechauka, plot-pe ndojapói, asistente plot-pe subyacente ndojapói, ambue programa-pe recorte ha escala ndoheka'íi.
- Historial: CadCraft nube-pe ndoguardái; nube versión ambue aparato ha web-gui oguardavaʼekue. Historial CadCraft Studio añónte.
- Studio acad.lsp soporte carpeta reinicio rire oiko oiko'ẽ ndaheka'íi; oporandu oúramo, APPLOAD-pe carpeta pyahu eskoge.
- Láser panel láser verdadero-pe ndojapói: opa configuración scrap-pe ehecha. CadCraft Studio-pe Web Serial ndoguerekói, Studio-pe panel G-code añónte oguardá.
- Escaneo registro simulado escaneo-kuéra-pe ojapo, escáner verdadero set-pe ndojapói.
- Dos dedo ojeguata simulado trackpad evento-kuéra-pe ojapo, trackpad verdadero-pe ndojapói.
- {{cmd:PEDIT}} Editar vértice opción ndoguerekói (agarre térã Propiedades ejeporu). Desfase, recorte, extensión, redondeo, romper ha unir spline-kuéra ndojapói; spline altura (Z) ndoñangarekói.
- Párrafo texto pyahu formato código ndojapói, SVG plot formato texto peteĩ color.
- WBLOCK Entire drawing modelo añónte oguardá, hoja'ỹ. Dimensión estilo actual archivo-pe ndoguardái: plano Standard actual oabrí.
- Ribbon menú estilo-pe capa, color ni tipo de línea lista ndaiporiri: {{ui:Capas}} panel ha {{ui:Propiedades}} ejeporu.
- Nube de puntos plano-pe ndoguardái ni ndoplotéi, E57 archivo 6 millón punto ha 512 MB peve oabrí.
- CadCraft DWG archivo AutoCAD-pe ndaha'éi ojehecha.

Ambue mba'e oĩ [Ndojejapóiva kóre](topic:not-built-yet).
