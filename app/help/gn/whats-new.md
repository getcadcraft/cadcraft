---
title: Mba'e pyahu 0.9
summary: Hatch oñemboheta rehe, capa grupo, piso apilados, 2D muro inteligentes puerta ha ventana ndive, texto estilo ha formato texto editor, comando línea flotante, cuadrícula ajuste, arco diez tape-pe, ha Documentos panel.
keywords: novedades, 0.9, notas de lanzamiento, registro de cambios, hatch, hatch asociativo, hatchedit, archivo pat, archivo patrón, grupos de capas, laygroup, pisos, pisos apilados, floorlayers, muros inteligentes, muro, puerta, ventana, herramientas de muro, estilo de texto, estilo, editor mtext, párrafo texto, formato, comando línea flotante, línea de comandos, área superior, compacto, ajustar a cuadrícula, grid snap, f9, arco, panel de documentos, registrar salida, medidas de acero UK, draw.io, texto tailandés, dxf r12, novedades, qué hay de nuevo, notas de lanzamiento, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, marcado, combinar, git, fossil, acceso, dibujar sin ver, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pies y pulgadas, estirar, idiomas, dispositivos de entrada, problemas, vivo, asistentes
from: 8b6dea0b
---

Ko'ã mba'e pyahu CadCraft 0.9-pe, 0.8.1-gui ojoavy. CadCraft ha'e 2D ha 3D dibujo app CadCraft Studio 0.9-pe ha ijeporu ocho app-kuéra-pe. 0.9 plan dibujo tapykue, texto estilo ha texto editor real ombohasa, ha pantalla-pe heta tenda ojapo.

## Pyahu

### Plan dibujo

- **Hatch oñemboheta rehe.** {{cmd:HATCH}} oñemoĩ hatch ho'ã ndive. Límite ojeguata, ojerechapy térã ojapo escala ojapo, hatch ha patrón ojeguata; ojapo ojerechapy ha hatch ojapo jey. {{cmd:HATCHEDIT}} (`HE`) hatch ojapo rire ojambue, ha enlace ojapo térã ojapo oñemboty. Ehecha [Hatch ha relleno área](topic:hatch).
- **Hatch patrón archivo.** {{cmd:HATCH}} oporandu `Pick internal point`-pe, `F` (Patrón archivo) escribí ha `.pat` archivo eskoge. Archivo formato usual-pe ojerure añónte.
- **Capa grupo.** {{ui:Herramientas}} {{ui:Capas}} panel-pe: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} ha {{ui:Find a layer}}; térã {{cmd:LAYGROUP}} (`LG`) escribí. Ehecha [Capa-kuéra ndive plano ojapo](topic:layers#group-layers).
- **Piso apilados.** {{cmd:FLOORS}} (`FLR`), térã {{ui:Pisos…}} {{ui:View}} grupo-pe {{ui:Más}} menú-pe. Hoja-pe ventana {{ui:Piso mostrado}} Propiedades-pe peteĩ piso ohechauka ikatu. {{cmd:FLOORLAYERS}} piso capa ojapo, ambue tenda archivo ome'ẽ hag̃ua. Ehecha [Piso apilados peteĩ plano-pe](topic:floors).
- **2D muro inteligentes, puerta ha ventana.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ha {{cmd:DELOPENING}}. Esquina, T unión ha cruce automático ojapo. Muro-kuéra unión registro oguardá, ha Propiedades-pe {{ui:No permitir unión al inicio}} / {{ui:No permitir unión al final}}, {{ui:Línea de ubicación}} ha editable {{ui:Longitud}} oĩ. Ehecha [2D muro, puerta ha ventana ojapo](topic:walls-2d).
- **Muro herramienta plan muro-pe.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ha ambue escribí. Ndaiporiri botón barra-pe. Ehecha [2D muro formas, cortes, desfases ha bloqueos](topic:wall-tools-2d).

### Texto

- **Texto estilo.** {{cmd:STYLE}} (`ST`), térã {{ui:Estilo de texto}} {{ui:Dibujar}} barra-pe: estilo nombre-pe, fuente, altura, ancho factor ha inclinación. Ehecha [Texto estilo ojeporu fuente ha tamaño](topic:text-styles).
- **Párrafo texto formato editor.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} térã texto ári doble clic oabrí: fuente, tamaño, negrita, cursiva, subrayado, tachado, color, alineación ha grado, más y menos ha diámetro signo ndive, {{ui:Aceptar}} ha {{ui:Cancelar}}. Ehecha [Párrafo texto formato](topic:format-paragraph-text).
- **draw.io XML diagrama.** {{cmd:DIAGRAM}} (`T2D`) pegado draw.io XML avei ojerure. Ehecha [Diagrama texto-gui](topic:text-to-diagram).
- **Tailandés texto PDF plot-pe.** Ántes pregunta signo-icha ojehechaukáva.

### Heta espacio ha dibujo ayuda

- **Línea de comandos flotante ha fina, área superior michĩ.** Línea de comandos agarre ojerure flotante ojapo, borde superior ojerure líneas heta'ỹ, {{key:F2}} historial oabrí. {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Línea de comandos}} ha área superior ojeporu. Ehecha [Configuración](topic:settings#command-line).
- **Objeto snap menú.** Status barra {{ui:Ajustar}} mouse derecha ojerure, térã {{cmd:OSNAP}} escribí.
- **Cuadrícula ajuste.** Status barra {{ui:Ajuste a cuadrícula}} botón, térã {{key:F9}}: punto eskogévo cuadrícula punto-pe ojerévo, objeto snap oheka'ỹ rire.
- **Arco diez tape-pe, y Continuar.** {{ui:Arco}} {{ui:Dibujar}} barra-pe térã {{cmd:ARC}}: 3 punto, Inicio/Centro/Final familia ha Centro/Inicio/Final familia, ha Continuar (inicio punto-pe {{key:Enter}}) última línea, arco térã polilínea-gui.
- **Documentos panel.** {{cmd:DOCUMENTS}} (`DOCS`) térã {{ui:Documentos…}} {{ui:View}} grupo {{ui:Más}} menú-pe: proyecto carpeta-pe opa plano revisión, estado ha check-out. Diálogo centrado oabrí. Ehecha [Documentos](topic:documents).

### Archivo

- **UK acero medida.** 976 sección Standard panel-pe, planos-pe típico escrito (ejemplo `305x165x40 UB`).
- **Sudáfrica paquete** (dibujo práctica ha construcción reglamento) Reglamento de construcción complemento paquete-pe. Número ndoverificáiva.
- **CadCraft complemento,** ojerure oñemoĩ, pre'ỹ apagado: interior iluminación diseño, chip diseño (HDL-gui diseño), router tallado, circuito simulación, rodillo cadena catarina, ha Reglamento de construcción país paquete.

## Ojapo porã

- Hatch ojeguata ha ojerechapy patrón mboyve oñemoĩ.
- {{cmd:GRIDMOVE}} plan muro cuadrícula línea oñemboguapy ha'ekuéra. Muro extremo rupi ojerecha.
- Cuadrícula límite ndaipóri rire límite ojeporu ha'eño.
- Lateral panel bloque lista oñemboguapy, ha nombre bloque ndaipóri bloque ojapo "¿Quisiste decir?" oñemboty.
- DXF R12 archivo AutoCAD-pe "Unknown group 1001 for table" ojapo ndaikatúi: ko'ẽrõ oabrí.
- Heta archivo (70 000 entidad ha ymaguare) "Maximum call stack size exceeded" oabrí ndaikatúi.
- DWG archivo AutoCAD 2018 ha pyahu ojapo versión ha'eño "bad BITLONG code 11" oabrí ndaikatúi.
- Párrafo texto cuadro-pe, peteĩ parte eskogévo pyahu tamaño ojapo selección oiko.

## Opa app-pe

Tooltip Bootstrap ojapo opa control-pe, ha'e ojerécava, ha ñepyrũ consejo oheja ikatu, pestaña tira ojapo ojeguata ha navegador pestaña título plano abierto rupi (`<drawing> - CadCraft | CadCraft`). {{ui:Configuración}} › {{ui:Layout}} desplegable dos línea-pe. {{ui:Configuración}}-pe ñe'ẽ lista 0.8-gui ymeve. Live co-edición, Library colecciones ha peso ha temperatura unidades Studio nota-pe.

## Honest limits

- Párrafo texto-pe viñeta ni numerado lista, tab regla ni justificar ndoĩ. Plot PDF texto Helvetica-pe.
- Plan muro línea ha arco rehe muro michĩ-pe. Comunidad mano revisión muro herramienta pendiente.
- Capa grupo AutoCAD formato-pe ndoguardái, AutoCAD ohechauka lista plana. Ambue programa-pe piso opa piso ohechauka, {{cmd:FLOORLAYERS}} ndojapói peve.
- Documentos panel dos persona ojerure real compartido-pe ndojapói. Router tallado máquina verdadero-pe ndojapói. Iluminación estimación fotón rastreo-pe ojehecha, ambue programa-pe'ỹ. Ingeniería complemento revisión ayuda, ingeniero revisión ndaha'éi.
- Inglés ndaha'éi ñe'ẽ machine borrador, ha pyahu palabra peteĩ inglés añónte.

## Ymaguare: 0.8 ha 0.8.1

Ko'ã mba'e pyahu CadCraft 0.8 ha 0.8.1-pe, 0.7-gui ojoavy. 0.8 (1 noviembre 2026) plano-gui ayuda ojapo, reglas ha modelo'ỹ computadora-pe, 0.8.1 (2 noviembre 2026) ojapo error ojerécava arandu.

### Pyahu

**Dibujo oñemboheta ha ojeguerojera**

- **Fantasma ohechauka mboyve oúva.** Mandu'a ndojapóiramo, gris guión fantasma ohechauka plano patrón mboyve oúva: mboyve tabique ha'e ijetu'úva, escalera paso, ha habitación falta muro. Tab {{key:Tab}} peteĩ paso deshacer-pe ojapo, {{key:Esc}} ohejá. Ndojehechaukái mboyve ojapo arandu; heta plano-pe porã ojeguata. Configuración › CadCraft-pe térã {{cmd:AUTOCOMPLETE}} `Off` rupi apagá.
- **Línea dibujo ha punto mboyve.** {{cmd:LINE}} térã {{cmd:PLINE}} ha'ekuéra mboyve, fantasma ha'e mboyve punto: escalera paso, rectángulo cuarto esquina, térã cerrá punto. Cursor oñemboty, {{key:Tab}} ojapo, eheja jepe.
- **Lápiz boceto ojapo precisa geometría.** {{cmd:SKETCHFIX}}: lápiz, ratón térã dedo oporomoĩ, peteĩteĩ línea, círculo, arco, rectángulo térã polilínea limpio ojapo, ya ojapova'ekue ndive snapeado. Ehecha [Lápiz ha boceto precisión](topic:sketch-with-a-pen).
- **Boceto foto plano ojapo.** {{cmd:PHOTOSKETCH}} (`PSK`) foto-pe papel oheka, perspectiva oñemboguapy, eheja papel tamaño ha escala, pluma línea peteĩ pluma color capa-pe oñemboty. Letra ndojehecháva.
- **Dimensión reglas rupi.** {{cmd:AUTODIM}} (`ADIM`) dimensión cadena eskoge lado-pe ojapo, tamaño total, abertura ancho, agujero diámetro, ha `Grid`-pe cuadrícula espacio. Dimensión ojapova'ekue ndojapói jey.
- **Cuadrícula línea ojoaplo.** {{cmd:GRIDMOVE}} (`GM`): cuadrícula línea-pe ojerécava muro estirado, línea rupi muro, columna, burbuja ha etiqueta ojeguata, cuadrícula rupi dimensión espacio medida. Peteĩ paso deshacer.

**Hoja, detalle ha etiqueta**

- **Hoja ijeguerekuaa.** {{cmd:AUTOSHEET}} nombre-gui vista térã modelo piezas ojapo, papel tamaño ha escala estándar eskoge, vista hoja-pe título bloque ha nombre-escala ndive ojapo. Opa editable. Ehecha [Hoja ojapo che'ẽ](topic:lay-out-sheets-for-me).
- **Empresa detalle, dibujo rehe ofrecido.** {{cmd:DETAILS}} (`DET`) nde propio detalle bloque-kuéra ñongatu. Ejeskoge ojehecha capa nombre, bloque nombre ha nota palabra rupi, estado barra-pe oherekuaa; eheja ha omoĩ. {{cmd:DETAILS}} › Compartir nde lista Documentos carpeta-pe ha equipo ojapo ohechauka. Configuración oferta apagá.
- **Bloque etiqueta.** {{cmd:TAGS}} etiqueta defini (clase, valor, bloque aplicación), bloque referencia eskoge-pe omoĩ, CSV oguardá ikatu lista-pe ohechauka. Definición DWG-pe oguardá. Ehecha [Etiquetas](topic:tags).
- **Dibujo límite.** {{cmd:LIMITS}} plano rectángulo omoĩ: cuadrícula ojapo, zoom Todo ohechauka. Límite contorno ohechauka, DWG ha DXF-pe oguardá, papel límite ndive. Ehecha [Dibujo límite omoĩ](topic:drawing-limits).

**Ambue persona ha programa ndive**

- **Marcado revisión-pe ojapo.** {{cmd:REDLINE}} MarkupCraft-pe oguardáva oleer, opa cambio ohechauka. Peteĩteĩ aceptá térã rechazá nota ndive; aceptado ojapo revisión nube ha revisión registro peteĩ paso deshacer-pe, ha respuesta archivo oguardá MarkupCraft-pe marcado cierra. Ehecha [Marcado revisión-pe](topic:redline-to-revision).
- **Git ha Fossil combinar archivo.** Settings › CadCraft-pe {{ui:Archivos aptos para fusionar}} ojapo: peteĩteĩ objeto clave ndojerreméi (archivo ~10 % heta). `cadcraft merge base ours theirs` DWG térã DXF objeto objeto ndive combina, ha peteĩ objeto ojambuevaʼekue ha'e ojehechauka. Ehecha [Dos persona ojapo combina](topic:merge-drawings).
- **Mba'e ojambuévo palabra-pe.** Historial-pe Comparar lista simple ome'ẽ: mba'e oñemboheta, lugar tamaño, mba'e oñemoĩ, oheja ha ojambue, ha texto ojambueva'ekue. Ehecha [Palabra-pe ojambue ohechakuaa](topic:changes-in-words).
- **Rumbo ha ángulo.** Rumbo topógrafo rupi escribí, N45°23'30"E-icha, térã grado, minuto ha segundo, ángulo ojerure oimeraẽva-pe; AUNITS ángulo ohechauka omoĩ. Ehecha [Rumbo ha ángulo escribí ha ohechauka](topic:bearings-and-angles).
- **SHX fuente nde propia.** SHX fuente carpeta-pe omoĩ, texto estilo fuente nombre ojapo pantalla ha ploteo-pe. Ehecha [Texto SHX fuente nde propia-pe](topic:shx-fonts).
- **Diagrama texto-gui.** {{cmd:DIAGRAM}} Mermaid flujo, PlantUML componente, D2 térã desde-hasta lista oleer ha bloque ha conector ojapo, ojambue ikatu. Ehecha [Diagrama texto-gui](topic:text-to-diagram).
- **DWG OLE objeto-kuéra.** {{cmd:OLELIST}} DWG-pe OLE objeto lista CadCraft ndoikuaái oñemoĩ, ha imagen copia eheja'ỹ oñemoĩ. Ehecha [Imagen](topic:pictures#objects-from-other-programs-ole).
- **Nde cálculo plano-pe.** Cálculo hoja ha diseño razón DWG-pe clase tabla ndive oguardá.

**Dibujar sin ver**

- {{ui:Dibujar sin ver}} {{ui:Configuración}}-pe ejeskoge (térã {{cmd:ACCESS}} escribí ha `On` ome'ẽ). CadCraft opa mandu'a ha resultado lector de pantalla rupi ombo'e, plano ha kurso ári oñemboty, teclado rupi kurso ojeguata ha punto eskoge, ha peteĩteĩ snap ha agarre sonido omoĩ. Navegador reconoce voz computadora-pe, mandu'a ñe'ẽ rupi ikatu. Ehecha [Dibujar sin ver](topic:draft-without-sight).

**Opa app-pe**

- **Idiomas.** 54 ñe'ẽ; diez pyahu (lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Inglés ndaha'éi ñe'ẽ machine borrador, nativo revisa peve.
- **Entrada aparato.** Trackpad, lápiz, 3D ratón, juego control ha MIDI control.
- **Barra herramienta filas ha propiedad grilla.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} Wrap, 2 fila térã 1 fila ome'ẽ ambue app-kuéra-pe. CadCraft ijeporu {{ui:Configuración}} › {{ui:CadCraft}}-pe (ehecha [Filas de la barra de herramientas](topic:settings#toolbar-rows)). Propiedad grilla ambue tres app-pe, CadCraft-pe ndaipóri.
- **Problemas, Live ha complementos.** Problemas panel opa app-pe aviso, Live ohechauka mboyve oĩ CadCraft Studio-pe (ehecha [Ojoguápe peteĩ plano Live TeamWork-pe](topic:work-live)), ha complemento lista.
- **Nde IA oconecta.** CadCraft Studio-gui opa ocho app-pe peteĩ conexión, app-pe solo lectura, sugerencia térã edición nivel ha asistente ojapo oporandu ojapo log-pe. CadCraft IA propia ndoguerekói, ha app-kuéra-pe Preguntar ojeporu nde oconecta IA.

### 0.8.1-pe ojapo porã

- **Propiedades 150 ohechauka 12'-6" lugar-pe** pies y pulgadas plano-pe. App ojapo campo texto ojeporu jey.
- **DWG archivo clases sección tipo ivaíva** (GitHub cadcraft#5) pyahu oabrí.
- **Cursor cruz emergente rehe ndohechái.**
- **Studio ha paquete edición ñe'ẽ ojemudapaite.** Ántes inglés añónte. Opa plataforma-pe ndojerérami: ñe'ẽ ndojemudái ramo, ha'e ñandéve.
- **Tableta vertical** canvas-pe grid altura ome'ẽ, sheets modo 760 px térã menos oñepyrũ.
- **STRETCH ventana cruzada, ha LIMITS,** Studio 0.8.0-pe ohecha'ỹ ha 0.8 web build-pe porã; ha reporte Studio 0.8.1 ndive oguerekói.

### Ndojejapóiva ko versión-pe

- **0.8 ha 0.8.1 código firmado ndaiporãi.** Windows {{ui:Más información}} ejepyta, upéi {{ui:Ejecutar igualmente}}; Mac-pe CadCraft Studio mouse derecha, {{ui:Abrir}}. Tienda build espera, iPad ha iPhone build 0.8.1-pe ndojerérami.
- **Lápiz boceto ha boceto foto** ficticio foto ha ratón-pe ojapo; lápiz verdadero, táctil pantalla térã papel boceto ndaipóri.
- **Dibujar sin ver** automático prueba-pe; lector de pantalla térã ciego probador ndaipóri.
- **Detalle compartir** dos persona revisión ndaipóri, Team Cloud Plan carpeta Documentos carpeta-pe ndojapói.
- **Combinar** CadCraft DWG ha DXF-pe ojapo; ambue app archivo ndojapói.
- **Deshacer entre ventana:** CadCraft paso peteĩteĩ informa, Studio app opa-pe Deshacer peteĩ ndaipóri; app peteĩteĩ ijapo deshace.
- **DWG OLE objeto** oguardá, ndojehechaukái ilugar-pe.
- **CTB archivo** ambue programa-gui leer ojapo, archivo ejemplo-pe ndojerérami.
- **Connect your AI:** Studio-pe clic-pe oconecta, navegador IA-pe hosted conector, Studio-pe propio API clave ha MCP paquete publicado ndaipóri ho'ã ko versión-pe.

Ymaguare versión rehe, ehecha [Mba'e pyahu 0.7](topic:whats-new-0-7).
