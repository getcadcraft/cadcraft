---
title: Configuración de CadCraft
summary: Configuración de la app de dibujo: tamaño del cursor, dónde cuelga una copia pegada, qué hace un clic con la selección, cuántas filas usa la barra de herramientas, dónde está la línea de comandos y su altura, área superior compacta e indicador de esquina.
keywords: línea de comandos, línea de comandos flotante, flotar, acoplar, una línea, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacta, cursorsize, cursor pantalla completa, borde a borde, filas de barra de herramientas, visualización barra, ctrl f1, configuración, preferencias, opciones, indicador de esquina, cubo de vista, icono de eje, icono UCS, cursor, cruz, caja de selección, punto de pegado, punto base, clic en objetos, selección, pickadd, shift, restablecer
from: ae1a81db
---

Abrí {{ui:Configuración}} con el engranaje de la barra de app o {{key:Mod+,}}. Primera pestaña, {{ui:CadCraft}}, contiene configuración de esta app; {{ui:General}} contiene la de la familia (tema, tamaño de texto de paneles y anchos, aspecto y orden de la barra). Configuración CadCraft-pe solo app-pe existe: aquí cambiá, navegador oguarda. {{ui:Restablecer configuración de CadCraft}} opavave inicio-pe oikuaa.

## Cursor

**Pequeño**, **Mediano** (inicio), **Grande** o **Pantalla completa**: cruz tamaño ha caja de selección plano-pe. Caja de selección grande objeto lejos ojejuhu; pantalla táctil térã muy fino dibujo-pe ayuda.

**Pantalla completa** cruz dos línea borde a borde plano-pe, comando ojecorrer ha no; opavave alineado ojeikuaa. Pantalla dividida-pe, línea ojeporu ventana trabajo-pe. {{cmd:CURSORSIZE}} 100 AutoCAD-icha: {{cmd:CURSORSIZE}} 100 pantalla completa; número michĩve tamaño más cercano (5 menos Pequeño, 5 a 9 Mediano, 10 a 99 Grande).

## Punto de pegado

Copia pegada dónde cuelga cursor-pe {{key:Mod+V}} ({{cmd:PASTECLIP}}) rire, eclic peve:

- **Esquina inferior izquierda** (inicio): objetos copiados alcance esquina inferior izquierda, AutoCAD-icha.
- **Centro**: alcance mitad. Símbolo ojeikuaa ojojoguáva.

`COPYBASE` ojapo copia siempre ehai punto base-pe cuelga. {{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) configuración ndoporúi: coordenadas original ojeguarda. Eheka [Copiar, pegar y duplicar](topic:copy-paste).

## Clic objetos-pe

Comando ndojepyrũ ramo plano-pe clic mba'e selección-pe:

- **Selección agregá** (inicio): peteĩteĩ clic térã ventana objeto agrega; {{key:Shift}}+clic, térã {{key:Shift}}+ventana, oguejy.
- **Selección reemplazá**: clic térã ventana solo ohai ojehai. {{key:Shift}}+clic objeto agrega, térã ojeselecciona-va oguejy; {{key:Shift}}+ventana agrega.

`Seleccione objetos:` comando-pe clic siempre agrega ({{key:Shift}} oguejy), configuración ojekuaaporãramo. Eheka [Seleccionar objetos](topic:select-objects).

## Espacio vacío clic

Objeto ndoguerekói lugar-pe clic, comando ndojepyrũ ramo. Ambas forma selección ventana oñepyrũ (segundo clic ojepe'a).

- **Selección ojeguejy** (inicio): ojehai ojeguejy. {{key:Shift}} clic-pe retene.
- **Selección mantené**: selección oĩ, ventana agrega. {{key:Esc}} selección oguejy.

## Arrastre selección-pe

Espacio vacío-pe presiona y arrastra ohai:

- **Lazo** (inicio): mano alzada contorno. Derecha-pe primero, ojehai completamente; izquierda-pe primero, tocado opavave ojehai. {{key:Space}} arrastrando ventana, cruce, cerca rehe ojambia.
- **Rectángulo**: caja, clic y segundo clic dibuja.

{{cmd:LASSOMODE}} `1` térã `0` mismo ojapo. Eheka [Selección lazo](topic:lasso-selection).

## Arrastre recortar y extender

{{cmd:TRIM}} ha {{cmd:EXTEND}}-pe espacio vacío-pe presiona ha arrastrá ohai:

- **Ruta** (inicio): mano alzada ruta; opavave pieza ojecruza ojerecorta (térã extendida).
- **Ventana**: caja; opavave pieza ojetoca ojerecorta, `C` opción icha.

Eheka [Recortar y extender](topic:trim-and-extend).

## Barra de herramientas posición

{{ui:CadCraft}} › {{ui:Posición de la barra de herramientas}}: **Arriba** (inicio), **Abajo**, **Izquierda** térã **Derecha**. Izquierda térã derecha-pe grupo-kuéra columna-pe ojeapila, ventana alto-pe ojeme'ẽ; botón dos térã mbohapy linea-pe. Elección configuración-pe oguarda, {{cmd:TOOLBARDOCK}} (`TBDOCK`) línea de comandos-pe ojapo. {{ui:General}} › {{ui:Restablecer el diseño}} barra arriba-pe omoĩ.

Menú estilo barra toolbar-pe ojemoveva, pero {{ui:Cinta}} estilo arriba térã abajo-pe oguereko: costado-pe estrecho columna ojeme'ẽ. Teléfono-pe barra teléfono diseño-pe.

## Barra de herramientas filas

Cuántas línea herramienta, arriba dibujo-pe: {{ui:Dibujo clásico}} ha {{ui:Cinta}} estilo-pe avei:

- **Ajustar ventana** (inicio): herramienta ventana ancho-pe ojeajusta.
- **2 filas**: máximo dos línea. Dos línea ajustan ndoide ancho ojehechaukáramo; ambue, dos fila ojemove costado-pe.
- **1 fila**: peteĩ línea ojemove costado-pe, plano más lugar.

{{key:Shift+Ctrl+F1}} mbohapy ojerreha, {{cmd:TOOLBARROWS}} ojapo. Botón ohechauka (ícono y texto, solo ícono, solo texto) {{ui:General}} › {{ui:Barra de herramientas}} ojeporu; {{key:Ctrl+F1}} ojerreha, {{cmd:TOOLBAR}} ojapo.

## Línea de comandos

Línea de comandos plano abajo-pe ojeporu, térã plano arriba-pe flota, ha peteĩ línea anchavo.

- **Flotá.** Eiporavo grip izquierda extremo-pe plano-pe, térã {{ui:Flotar sobre el dibujo}} {{ui:Opciones de la línea de comandos}} menú-pe (tres punto derecha extremo-pe). Grip nuevo mové; lugar ventana tamaño cambio-pe oguarda. Derecha borde ancho/estrecho. Barra estado-pe soltá, térã {{ui:Acoplar abajo}} acoplado.
- **Estrecho térã alto.** Borde superior arrastrá: peteĩ paso peteĩ línea historia. Cero línea peve **línea de comandos peteĩ línea**: solo prompt ha escrito; mensaje nuevo arriba ohechauka. Borde superior doble clic: entre peteĩ línea ha altura anterior.
- **Historia.** {{key:F2}}, térã reloj botón línea de comandos-pe ({{ui:Historial de comandos (F2)}}), historia opavave línea arriba ohechauka (flota abajo ventana alto-pe). Escritura línea de comandos-pe sigue; {{key:PageUp}} ha {{key:PageDown}} historia ojerreha; {{key:Esc}}, {{key:F2}} térã clic otro lugar-pe ojepe'a. F2 nde atajo ojeporu nde.
- **Teclado.** Grip botón: flechas flotante línea ojemove (Shift ndive, paso mayor); {{key:Up}} acoplado flota, {{key:Down}} inferior borde-pe acopla. Borde superior separador: {{key:Up}} ha {{key:Down}} línea agrega térã quita, {{key:Home}} peteĩ línea, {{key:End}} más alto. Lector de pantalla opavave mensaje oye, peteĩ línea-pe avei.

{{ui:CadCraft}} › {{ui:Línea de comandos}} mismo elección: {{ui:Acoplada abajo}} térã {{ui:Flotante}}, {{ui:Líneas de historial mostradas}} (0 a 12) ha {{ui:Altura estándar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) línea de comandos-pe ojapo. Lugar ha altura CadCraft-pe navegador-pe oguarda; {{ui:General}} › {{ui:Restablecer el diseño}} línea de comandos altura estándar-pe acopla. Teléfono-pe línea de comandos acoplado peteĩ línea historia-ndive; historia botón avei ojeporu.

{{ui:CadCraft}} › {{ui:Letras de opciones}} comando opción letra-kuéra ojeguarda: {{ui:Editar…}} archivo ojepyrũ, {{ui:Importar…}} ojambia, {{ui:Exportar}} ojeguarda. Eheka [Oñeme'ẽ opciones de comando letra propia](topic:option-letters).

Plano ojepe'a ha diseño ojeikuaa ajuste más estrecho ofrece, {{ui:Sí}} línea de comandos peteĩ línea ojapo, plano ojeikuaa.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Estándar** (inicio) térã **Compacta**. Compacta barra arriba-pe ojemboýke, ojeporu opavave menú estilo-pe: grupo nombre ha íconos palabra ojepe'a (tooltip ha lector de pantalla oikuaa) ha botón más apretado. Con [Filas de la barra de herramientas](topic:settings#toolbar-rows): Compacta ha **1 fila** plano más lugar. {{cmd:TOPAREA}} ojapo.

## Indicador de esquina

Plano esquina-pe ohechauka:

- **Automático** (inicio): {{ui:Modelo}} pestaña-pe eje ícono, {{ui:3D}} pestaña-pe cubo de vista.
- **Icono de eje**: X ha Y marcador {{ui:Modelo}} pestaña inferior izquierda, 3D pestaña-pe X, Y ha Z pequeño marcador.
- **Cubo de vista**: cubo derecha superior ambas pestaña-pe. {{ui:Modelo}}-pe planta vista; cara térã esquina clic {{ui:3D}} pestaña abre desde allí. 3D-pe vista-pe girá: clic lado-pe mirá, arrastrá orbitá, casa iso vista-pe.
- **Ninguno**: nada esquina-pe.

Hojas ninguno ohechauka.

## Longitud ha área selección

- **Estado barra-pe** (inicio): objetos selección-pe, estado barra total longitud ha cerrados área ohechauka. Eheka [Totales de una selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: estado barra ndohechaukái. Propiedades ojehechauka varios objetos-pe.

## Cuadrícula, ortogonal y ajustes

Ko'ã diálogo-pe ndoike: {{ui:Cuadrícula}}, {{ui:Ortogonal}} y {{ui:Ajustar}} botón estado barra-pe (térã {{key:F7}}, {{key:F8}}, {{key:F3}}) ha objeto ajuste lista ojeguarda. Eheka [Ajustar a puntos de objetos](topic:object-snaps).
