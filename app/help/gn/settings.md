---
title: Configuración CadCraft
summary: Configuración ojeporúva dibujo aplicación-pe: cursor tamaño, mba'éichapa ojehasa copia cursor-gui, clic mbaʼépa ojapo selección-pe, cuántas fila barra herramienta-pe, mboyve línea de comandos oĩ ha mboyve, arriba compacto, ha esquina indicador.
keywords: línea de comandos, línea de comandos flotante, flotar, acoplar, una línea, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacto, cursorsize, cruz de pantalla completa, cursor pantalla completa, borde a borde, filas barra herramienta, visualización barra herramienta, ctrl f1, configuración, preferencias, opciones, indicador esquina, cubo de vista, icono de eje, icono ucs, cursor, cruz, caja de selección, punto de pegado, punto base, clic en objetos, selección, pickadd, shift, restablecer
from: 0896eb42
---

Ejepe'a {{ui:Configuración}} engranaje app barra-pe térã {{key:Mod+,}}. Peteĩ pestaña, {{ui:CadCraft}}, ko'ã configuración aplicación-pe ojeguerekóva; {{ui:General}} ko'ã aplicación familia opa oñemboguahẽva (tema, panel texto tamaño ha ancho, barra herramienta apariencia ha orden). Configuración CadCraft-pe rehecha aplicación-pe: ejapo ko'ẽrõ, ha tembiporu ko'ã navegador-pe oñongatu. {{ui:Restablecer configuración CadCraft}} opa peteĩ-peteĩ inicio-pe omoĩ.

## Cursor

**Pequeño**, **Mediano** (inicio), **Grande** térã **Pantalla completa**: cruz tamaño ha caja de selección dibujo-pe. Caja de selección tuichave ojepe'a objetos mbykyve ndojuhúkuri, táctil pantalla térã dibujo mbaʼe ndojejuhúva ojepytyvõ.

**Pantalla completa** cruz mokõi línea borde a borde dibujo-pe ojeporu, mando ndojejapóvape avei, ha hechauka ojoguáva opa vista. Vista iñapytépe ojehasa, línea panel iñapytépe oikóta. AutoCAD {{cmd:CURSORSIZE}} 100 ojapo: eskribi {{cmd:CURSORSIZE}} ha 100 pantalla completa-pe; mbykyve número ojeporu tamaño ojekuaáva (5 pe mbykyve Pequeño, 5 ha 9 Mediano, 10 ha 99 Grande).

## Punto de pegado

Mbovy copia pegado oñemboguapy cursor-gui {{key:Mod+V}} ({{cmd:PASTECLIP}}) ojepe'a peve:

- **Izquierda inferior esquina** (inicio): objetos copiados extensión izquierda inferior esquina, AutoCAD-pe ojekuaáva.
- **Centro**: extensión mboyve. Ojepe'a símbolo ojeplaza jave ohecha porã.

`COPYBASE` ojapo copia opa oñemoĩ punto base ojepe'a. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) ko'ã configuración ndojehecháiva: coordenadas original ohechauka. Ecuchá [Copiar, pegar y duplicar](topic:copy-paste).

## Clic objetos

Mba'épa clic drawing-pe selección-pe ojapo mando ndojejapóvape:

- **Selección-pe agrega** (inicio): peteĩ clic térã ventana objeto ojepe'a; {{key:Shift}}+clic, térã {{key:Shift}}+ventana ohaʼa.
- **Reemplaza la selección**: clic térã ventana ojepe'a ojepe'a ojeporavo. {{key:Shift}}+clic objeto agrega, térã ojepe'a ojuhúva ohaʼa; {{key:Shift}}+ventana agrega.

`Select objects:` prompt-pe mando iñapytépe clic oipe'a ojepe'a (y {{key:Shift}} oipe'a), configuración ndojehecháiva. Ecuchá [Ejepe'a objetos](topic:select-objects).

## Clic lugar ndaipóri

Mba'épa clic objeto ndaipóri lugar-pe mando ndojejapóvape. Mba'e: ventana ojepe'a oñepyrũ (mokõi clic oñemboty).

- **Selección ojehaʼa** (inicio): ojepe'a ojehaʼa. {{key:Shift}} ejepe'a ojepe'a ejeguerekoháicha.
- **Selección oñongatu**: ojepe'a oñongatu, ambue programa-pe ojapo; ventana agrega. {{key:Esc}} ejepe'a selección omboty.

## Arrastrar ejepe'a

Lugar ndaipóri ejepe'a ha arrastra mba'épa oñemoĩ:

- **Lazo** (inicio): lazo libre. Derecha-pe ejeasegura primero ojehasa totalmente iñapytépe; izquierda-pe ojehupyty ojeporavo; {{key:Space}} arrastrando ventana, cruce ha cerca oñemboguapy.
- **Rectángulo**: caja, clic ha ambue clic ojapo.

{{cmd:LASSOMODE}} `1` térã `0` oñemoĩ mbaʼe. Ecuchá [Lazo ejepe'a](topic:lasso-selection).

## Arrastrar recortar ha extender

Lugar ndaipóri ejepe'a ha arrastra {{cmd:TRIM}} ha {{cmd:EXTEND}}-pe:

- **Ruta** (inicio): lazo libre; opa pieza ojeguebyrýva recortado (térã extendido).
- **Ventana**: caja; opa pieza ojedotáva recortado, `C` opción ojapo.

Ecuchá [Recortar ha extender](topic:trim-and-extend).

## Barra herramienta lugar

{{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: **Arriba** (inicio), **Abajo**, **Izquierda** térã **Derecha**. Izquierda térã derecha-pe herramienta grupo columna-pe oñemoĩ ha ojeguerekõ ventana tuichaiterei jave, botón dos térã mbohapy línea-pe. Elección configuración-pe oñongatu, {{cmd:TOOLBARDOCK}} (`TBDOCK`) mando línea-gui omoĩ. {{ui:General}} › {{ui:Restablecer el diseño}} barra arriba-pe omoĩ.

Menú estilo barra toolbar iñapytépe oĩ ha ndive ojeheka, {{ui:Cinta}} estilo oñemoĩ arriba térã abajo-pe: lado-pe columna michĩ ojeguerekõ. Teléfono-pe barra teléfono diseño oĩ hendaguépe.

## Barra herramienta fila

Mboyve línea herramienta ojeporu drawing-gui, CadCraft barra-pe ha {{ui:Dibujo clásico}} ha {{ui:Cinta}} estilo-pe:

- **Ajustar ojehasa** (inicio): herramienta ventana ancho-pe ojesarái.
- **2 filas**: 2 línea peve. Ojesarái dos línea térã menos ojuhu jave, ojesarái; ndaipóri jave, ojeguerekõ dos fila tuichaitereíva.
- **1 fila**: peteĩ línea ojeguerekõ, dibujo ojeguerekóva tuichave.

{{key:Shift+Ctrl+F1}} oñemoĩ mbohapy, {{cmd:TOOLBARROWS}} mando omoĩ. Botón ohechauka (icono ha texto, icono nomás, térã texto nomás) {{ui:General}} › {{ui:Barra de herramientas}} configuración; {{key:Ctrl+F1}} oñemoĩ, {{cmd:TOOLBAR}} mando omoĩ.

## Línea de comandos

Línea de comandos oñemoĩ dibujo mboyve, térã flota dibujo-pe, ha peteĩ línea michĩ ikatu.

- **Oflota.** Eja'o izquierda pe grip dibujo-pe, térã {{ui:Flotar sobre el dibujo}} {{ui:Opciones de la línea de comandos}} menú-pe (mbohapy pun derecha pe). Eja'o grip jey oñemoveve; ojehecha ventana jave. Derecha borde eja'o ancho térã mbyky. Estado barra-pe ejeasegura, térã {{ui:Acoplar abajo}}, oñemboguapy.
- **Mbyky térã alto.** Superior borde eja'o: peteĩ paso peteĩ historia línea. Cero línea peve **una línea de comandos**: prompt ha eskribi, mensaje ojehechauka. Superior borde doble clic: peteĩ línea ha altura ojeguerekova.
- **Historia.** {{key:F2}}, térã reloj botón línea de comandos ({{ui:Historial de comandos (F2)}}), historia línea rupi ohechauka (ojeguerekópe ventana alto ojeguerekoháicha). Eskribi línea de comandos-pe oñemboguapy; {{key:PageUp}} ha {{key:PageDown}} historia ojehasa; {{key:Esc}}, {{key:F2}} térã clic ojeasegura omboty.
- **Teclado.** Grip botón ha: flechas ojesarái (Shift ndive, tuichave). {{key:Up}} oflota, {{key:Down}} abajo borde acoplar. Superior borde {{key:Up}} ha {{key:Down}} línea agregar ha omboguejy; {{key:Home}} peteĩ línea; {{key:End}} tuichave. Lector pantalla opa mensaje oendu.

{{ui:CadCraft}} › {{ui:Línea de comandos}} oguereko ko'ã elección: {{ui:Acoplada abajo}} térã {{ui:Flotante}}, {{ui:Líneas de historial mostradas}} (0 peve 12) ha {{ui:Altura estándar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) mando línea-gui omoĩ. Lugar ha altura CadCraft-pe navegador-pe oñongatu; {{ui:General}} › {{ui:Restablecer el diseño}} línea de comandos altura estándar-pe omoĩ. Teléfono-pe línea de comandos abajo ojeguerekõ peteĩ historia línea; historia botón oñemboguapy.

Ventana michĩ ha diseño ojehechaukáicha ojeguerekõ, {{ui:Sí}} oñemoĩ línea de comandos peteĩ línea-pe, dibujo mbyky ojeguerekóramo herramienta barra rire.

## Arriba área

{{ui:CadCraft}} › {{ui:Área superior}}: **Estándar** (inicio) térã **Compacto**. Compacto oñemoĩ barra mbyky opa menú-pe: grupo nombre ha icono texto ndoguerekói (tooltip ha lector pantalla oguereko), botón tuichave. Ojeporu [Barra herramienta fila](topic:settings#toolbar-rows) ndive: Compacto ha **1 fila** dibujo tuichave ojeguerekóva. {{cmd:TOPAREA}} oñemoĩ.

## Esquina indicador

Mba'épa oĩ dibujo esquina-pe:

- **Automático** (inicio): {{ui:Modelo}} pestaña eje icono ha {{ui:3D}} pestaña vista cubo.
- **Icono eje**: X ha Y marca {{ui:Modelo}} pestaña izquierda inferior, 3D pestaña X, Y ha Z marca.
- **Cubo de vista**: cubo derecha superior dos pestaña-pe. {{ui:Modelo}} pestaña-pe ohechauka dibujo arriba-gui, ha clic otra cara, borde térã esquina oñemboguapy {{ui:3D}} pestaña oñeñeʼẽ upe lugar-gui. 3D pestaña-pe vista-pe oñemboguapy: clic lado-gui mirar, arrastrar orbit, ha casa iso vista-pe omoĩ. Ecuchá [Modelo 3D](topic:3d-solids).
- **Ninguno**: esquina-pe ndaipóri.

Hojas ndoguerekói ninguno.

## Selección largo ha área

- **Barra de estado-pe** (inicio): objetos ejepe'a jave, barra de estado opa largo ha cerrado área total ohechauka. Ecuchá [Totales de una selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: barra de estado ndohechauka. Propiedades ohechauka heta objeto-pe avei.

## Cuadrícula, Ortogonal ha ajustes

Diálogo-pe ndaipóri: {{ui:Cuadrícula}}, {{ui:Ortogonal}} ha {{ui:Ajustar}} botón barra de estado-pe (térã {{key:F7}}, {{key:F8}}, {{key:F3}}) ha ajuste objetos lista ojeguerekóva ojehasa mboyve oñongatu. Ecuchá [Ajustar puntos de objetos](topic:object-snaps).
