---
title: Mba'e pyahu 0.8 ha 0.8.1-pe
summary: Peteĩ fantasma ojejoka plano, pluma bosquejo ha bosquejo foto geometría-pe, hojas ojaʼo iñambue, detalles ojehechaukáva ojedibuja jave, GRIDMOVE ha AUTODIM, etiquetas, archivo ojeguahẽ fusionar haguã, redlines revisión-pe, dibujo sin vista, límites de plano, rumbos, fuentes SHX, diagrama texto-gui, ha 0.8.1 arreglo-kuéra.
keywords: mba'e pyahu, qué hay de nuevo, notas de versión, cambios, 0.8, 0.8.1, versión, nuevas funciones, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusionar, git, fossil, acceso, dibujo sin vista, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historia, comparar, en palabras, propiedades, pie y pulgada, estirar, idiomas, dispositivos de entrada, problemas, en vivo, asistentes
from: 9dd82db5
---

Ko'ã mba'e ojeñembyatyse CadCraft 0.8 ha 0.8.1-pe, 0.7 ndive ojehecháva. 0.8 (1 de noviembre de 2026) ojapo ayudas de dibujo ne plano ndive, ne computadora reglas-pe ha modelo'ỹ, ha 0.8.1 (2 de noviembre de 2026) ojejoka ojeinformáva mbaʼasy.

## Pyahu

### Dibujo ojehesa ne pensamiento

- **Fantasma ohechauka mba'e oúva.** Comando ndojapóiramo, gris guion fantasma ohechauka ne plano patrón ojeʼẽva oúva: próximo poste mismo distancia-pe, escalera ñoʼõgui, muro faltante peteĩ habitación-pe. {{key:Tab}} apretá ojapo peteĩ deshacer paso-pe, térã {{key:Esc}} ombotyre. Objeto pyahu-kuéra añoite ohecha, upévare plano tuichavéva ndohasyi. Apagá {{ui:Configuración}} › {{ui:CadCraft}} térã {{cmd:AUTOCOMPLETE}} `Off`.
- **Línea ojapo jave próximo punto.** {{cmd:LINE}} térã {{cmd:PLINE}} ojapo mbytépe, fantasma próximo punto: escalera próximo paso, rectángulo cuarto esquina, térã punto ojejoka. Cursor ndive oúpe ha {{key:Tab}} apretá, eclic ndaha'éi ha ojeporu.
- **Pluma bosquejo oñemoĩ geometría precisa-pe.** {{cmd:SKETCHFIX}}: pluma, mouse térã dedo ndive trazo ojapo, peteĩteĩ oñemboguejy línea, círculo, arco, rectángulo térã polilínea-pe, ojedibujáva rehe ojeʼẽ. Ehecha [Bosquejar con pluma y obtener geometría precisa](topic:sketch-with-a-pen).
- **Bosquejo foto plano-pe.** {{cmd:PHOTOSKETCH}} (`PSK`) foto-pe papel ojehechaukuaa, perspectiva ojeʼõ, ne papel tamaño ha escala ojeʼẽ, pluma línea capa-pe peteĩ pluma color-pe ojeikuaa. Letra ndojeikói.
- **Cotas reglas ndive.** {{cmd:AUTODIM}} (`ADIM`) ojapo cadena cotas ejeporavo lado-kuéra, tamaño general, abertura ancho, agujero diámetro ha, `Grid` ndive, cuadrícula distancia. Ndojapói mba'e ojeikóva.
- **Línea cuadrícula ojemoĩ ha conjunto ojeʼẽ.** {{cmd:GRIDMOVE}} (`GM`): muro cuadrícula línea-pe finalizado oñemboguejy ndive, muro ojeʼẽva, columnas, burbuja ha etiqueta ojemoĩ, cota ojepyrũ medidas pyahu distancia. Peteĩ deshacer paso.

### Hojas, detalles ha etiquetas

- **Hojas ojaʼo iñambue.** {{cmd:AUTOSHEET}} ejeporavo vista nombre-kuéra (térã modelo parte-kuéra), papel tamaño ha escala estándar ojeporúva, vistas hoja pyahu-pe ojemoĩ title block ha nombre-escala ndive. Opavave editable. Ehecha [Dejá que arme las hojas por mí](topic:lay-out-sheets-for-me).
- **Empresa detalles, dibujo jave ohechaukáva.** {{cmd:DETAILS}} (`DET`) ne detalle bloques ojeporu. Ejeporavo ojeporúva ne capa, bloque nombre ha nota palabra ndive, estado barra ojehechauka; eiporavo ha omoĩ. {{cmd:DETAILS}} › Compartir Documentos carpeta-pe ne lista ojeʼẽ ha ne equipo ojejoka ojeguahẽ. Configuración ohechaukakuaa ndohaʼe ndive.
- **Bloques etiquetas.** {{cmd:TAGS}} peteĩ etiqueta ojapo (mba'éichapa, valor, bloque ojeporúva), eiporavo bloque referencia-pe ojemoĩ, ha lista ojeʼẽ CSV-pe guardá ikatu. Definiciones DWG-pe ojeguarda. Ehecha [Etiquetas](topic:tags).
- **Límites del plano.** {{cmd:LIMITS}} peteĩ rectángulo plano haguã: cuadrícula ojeguerekóva, zoom Todo ohechauka. Límites esbozo-icha ohechauka ha DWG ha DXF-pe ojeguarda, papel límites ndive. Ehecha [Fijar los límites del plano](topic:drawing-limits).

### Ñambue ojekuaa ambue ndive ha ambue programa ndive

- **Marcado revisión-pe.** {{cmd:REDLINE}} MarkupCraft ojapo paquete ojeʼẽ, opavave cambio lista. Peteĩteĩ ojapo aceptar térã rechazar nota ndive; aceptadoʼỹ revisión nube ha revisión registro peteĩ deshacer paso-pe, ha ndeeʼẽ archivo respuesta ojeguarda MarkupCraft-pe marcado ojemboty haguã. Ehecha [Convertir un marcado en revisión](topic:redline-to-revision).
- **Git ha Fossil fusionar archivo-kuéra.** {{ui:Archivo apto para fusionar}} ojeikóva {{ui:Configuración}} › {{ui:CadCraft}}-pe, objeto peteĩteĩ clave ojeikuaáva (archivo 10 por ciento tuichavéva). `cadcraft merge base ours theirs` mokõi persona cambio DWG térã DXF objeto mboyve fusiona ha objeto ojecambia tuichave ojehechaukáva. Ehecha [Fusionar la edición de dos personas en un plano](topic:merge-drawings).
- **Mba'e ojecambia, palabra-pe.** Historia-pe, Comparar lista ojehechaukáva oúva: mba'épe ojecambia, tuichaiterei, mba'e ojeñemoĩ, ojeikuaáva, ojecambia ha texto ojecambiáva. Ehecha [Decir con palabras qué cambió](topic:changes-in-words).
- **Rumbo ha ángulo.** Rumbo topógrafo-gui emoñe'ẽ, N45°23'30"E, térã grado, minuto ha segundo, ángulo ojerekuaáva opavave-pe; AUNITS ohechauka ángulo ojeikuaáva. Ehecha [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).
- **Ne fuente SHX.** Eme'ẽ CadCraft SHX fuente carpeta ha texto estilo ojeporu, pantalla ha trazado-pe. Ehecha [Dibujar texto con tus fuentes SHX](topic:shx-fonts).
- **Texto-gui diagrama.** {{cmd:DIAGRAM}} Mermaid flujo, PlantUML componente diagrama, D2 térã desde-hasta lista ojeleéva ha bloque conector ojapo ojeditáva. Ehecha [Dibujar un diagrama desde texto](topic:text-to-diagram).
- **DWG OLE objeto.** {{cmd:OLELIST}} DWG OLE objeto-kuéra lista CadCraft ndoikuaái ojemoĩ, ha imagen copia ojemoĩ eje'ẽva-pe. Ehecha [Imágenes](topic:pictures#objects-from-other-programs-ole).
- **Cálculos plano ndive.** Cálculo hojas ha diseño razón DWG-pe clase tabla ndive ojeguarda.

### Dibujo sin vista

- Ejapo {{ui:Dibujar sin ver}} {{ui:Configuración}}-pe (térã emoñe'ẽ {{cmd:ACCESS}} ha ehai `On`). CadCraft opavave comando ha resultado ojeʼẽ lector de pantalla ndive, cursor ha mboyve ohechauka, teclado ndive cursor omoĩ ha punto eiporavo, peteĩteĩ snap ha grip ojesonorúva. Navegador ojekuaáva voz reconocer computadora-pe, comando ojeʼẽ ikatu. Ehecha [Dibujar sin ver](topic:draft-without-sight).

### Opavave aplicación-pe

- **Idiomas.** 54 idioma; diez pyahu (lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili, uzbeko). Inglés ndaha'éi idioma ojehechaukáva máquina borrador, peteĩ hablante nativo ojeleéva peve.
- **Dispositivos de entrada.** Trackpad, pluma, mouse 3D, control de juego ha MIDI.
- **Barra de herramientas filas ha propiedades cuadrícula.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} Envolver, 2 filas térã 1 fila ome'ẽ ambue aplicación-pe. CadCraft ne configuración {{ui:Configuración}} › {{ui:CadCraft}}-pe (ehecha [Filas de la barra de herramientas](topic:settings#toolbar-rows)). Propiedades cuadrícula ambue tres aplicación-pe, CadCraft-pe ndaipóri.
- **Problemas, En vivo ha complementos.** Problemas panel compartido, ojehechaukáva opavave aplicación-pe; En vivo ohechauka mboyve oĩ CadCraft Studio-pe (ehecha [Trabajar en un plano juntos](topic:work-live)); complemento lista.
- **Ne IA conecta.** CadCraft Studio-gui opavave ocho aplicación ndive peteĩ conexión, solo lectura, sugerir térã editar nivel aplicación-pe, ha asistente ojapóva mba'e ohechauka registro. CadCraft ndoguerekói IA ijeʼẽ, ha Preguntar opavave aplicación-pe nde conecta IA oipuru.

## Arreglado 0.8.1-pe

- **Propiedades 150 ohechauka 12'-6"-pe** pie ha pulgada plano-pe. Campo ojekuaa aplicación ijeʼẽ ndive ojeguahẽ.
- **DWG archivo clases sección ojeikuaa tipo ambue** (GitHub cadcraft#5) ojeabre porã.
- **Cruz cursor ndohechaiha ventana emergente ári.**
- **Studio ha paquete edición idioma ojecambia tiempo ojapórõ.** Ojeñemboguejy ántes ingles-pe añoite. Opavave plataforma-pe aún ndojekuaái: eñe'ẽ ndojecambiái idioma ojeikuaáramo.
- **Tablet vertical** lienzo-pe cuadrícula altura ome'ẽ, ha hojas modo 760 px térã ijyvaguépe ojepyrũ.
- **STRETCH mokõi ventana ndive, ha LIMITS**, Studio 0.8.0-pe ojehechaukakuaa, ha 0.8 web-pe ya porã; instalador ambue ndahaʼéi. Studio 0.8.1 ojeguahẽ.

## Ko versión-pe aún ndaipóri

- **0.8 ha 0.8.1 ndojeguarda código firmado.** Windows ojehechaukáta (eclic {{ui:Más información}}, upéi {{ui:Ejecutar de todos modos}}); Mac-pe, CadCraft Studio eclic derecha ha eiporavo {{ui:Abrir}}. Tienda build ndojeguahẽi ko'ẽrõ, iPad ha iPhone build 0.8.1-pe ndojejoka.
- **Pluma bosquejo ha bosquejo foto** ojeikuaa ojeporúva foto ojapóva ha mouse-pe añoite; pluma, pantalla táctil térã papel-pe mano bosquejo ndive aún ndojeporúi.
- **Dibujo sin vista** ojeporu automático probas ndive, lector de pantalla térã probador ciego ndive aún ndojeporúi.
- **Detalles compartidos** dos persona ha ojeikuaa ndojeporúi, ha Team Cloud Plan carpeta Documentos-pe ndojapói.
- **Fusionar** CadCraft DWG ha DXF archivo-kuéra ojeporu; ambue aplicación archivo ndojapói.
- **Deshacer ventana-pe:** CadCraft peteĩteĩ paso ojekuaáva ohechauka, Studio-pe ndoguerekói opavave aplicación peteĩ Deshacer; aplicación peteĩteĩ ijeʼẽ paso ojedeshace.
- **DWG OLE objeto** oñeguarda, ndojedibujáiva lugar-pe.
- **Trazado estilo tabla (CTB archivo)** ambue programa-gui ojeporu ojejapo, ndojeikuaáva ambue programa archivo-gui.
- **Conecta tu IA:** Studio-pe un clic conexión, navegador IA conector hospedado, ne API clave Studio-pe ha MCP paquete publicado ko versión-pe ndojeʼẽ.

Versión rire, ehecha [Qué hay de nuevo en 0.7](topic:whats-new-0-7).
