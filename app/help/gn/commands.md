---
title: Referencia de comandos
summary: Opa comando CadCraft dibujo aplicación pe, nombres cortos, ojeporandu pregunta, opciones ha valores defecto.
keywords: comandos, alias, lista de comandos, área, perímetro, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Emoñe'ẽ peteĩ comando nombre térã alias ha emboty {{key:Enter}} térã {{key:Space}}. Letra mayúscula térã minúscula ndohasaʼỹi; `_`, `-`, `.` térã `'` oñeñongatu ndojapói. Emoñe'ẽ `HELP` (térã `?`) línea de comandos historial pe lista pyahu opavave comando omoĩ haguã; {{key:F1}} ojehecha ko ayuda.

Mba'éichapa oñemoñandu indicaciones: opciones ohai corchete [] pe, ha peteĩ elegí emoñe'ẽ letra mayúscula (`D` Diámetro haguã). Valor defecto ángulo ⟨⟩ pe; {{key:Enter}} oñemoĩ jey. Punto oñeporandúva jave, clic térã emoñe'ẽ opa formato [Entrada de coordenadas y distancia](topic:coordinate-entry). Distancia oñeporandúva jave, número emoñe'ẽ térã mokõi punto clic.

{{key:Enter}} punto térã objeto oñeporandúva jave ha valor defecto ndaipóri, comando ombohasa. {{key:Esc}} ombohasa. Mba'e ojapóva peteĩ paso deshacer.

## Dibujar

### LINE

Alias: `L`. Segmentos rectos, peteĩ-peteĩ objeto.

- `Seleccione el primer punto` (Enter: desde el último punto dado)
- `Seleccione el siguiente punto [Deshacer [U]]`, jey jey. Mokõi segmento rire: `[Deshacer [U]/Cerrar]`.
- `U` emombyta último segmento, `C` cierra al primer punto ha ombohasa. Enter ombohasa.

### PLINE

Alias: `PL`. Peteĩ polilínea segmentos rectos ha arcos.

- `Seleccione el punto de inicio`
- `Seleccione el siguiente punto [Arco/Cerrar/Deshacer [U]]` (Cerrar mokõi segmento rire)
- `A` arco pe ojeikuaa: `Seleccione el punto final del arco [Línea/Cerrar [C]/Deshacer [U]]`. Peteĩ arco ojehe tangente segmento anterior. `L` línea pe jey, `CL` arco ndive cierra.
- Enter ombohasa; polilínea abierta oñemoĩ.

### CIRCLE

Alias: `C`.

- `Seleccione el punto central del círculo [3P/2P/Ttr (tan tan radio)]`
- `Seleccione el radio del círculo [Diámetro] ⟨último radio⟩`; `D` pregunta `Seleccione el diámetro del círculo`.
- `2P`: mokõi punta diámetro. `3P`: mbohapy punto círculo pe.
- `T` (ko'ẽrõ `TTR`, térã {{ui:Dibujar}} › {{ui:Más}} › {{ui:Círculo: Tan, Tan, Radio}}): `Seleccione el punto en el objeto para la primera tangente del círculo`, upéi segundo, upéi radio (Enter: último). Círculo mokõi objeto tangente (líneas, arcos, círculos, segmentos polilínea, bloque adentro avei); umi ojeheja, clic rehe ojoaporã mejor. Ndojuhúi ojoaporã: "El círculo no existe".
- `TTT` (térã {{ui:Dibujar}} › {{ui:Más}} › {{ui:Círculo: Tan, Tan, Tan}}): mbohapy objeto; círculo opavave tangente, clic ojoaporã (mbohapy línea ha círculo adentro térã afuera, clic lugar pe).

### ARC

Alias: `A`.

- `Seleccione el punto de inicio del arco [Centro]`, `Seleccione el segundo punto del arco`, `Seleccione el punto final del arco`: mbohapy punto gui arco.
- `C`: `Seleccione el punto central del arco`, `Seleccione el punto de inicio del arco`, `Seleccione el punto final del arco`. Arco ohendu antihorario gui inicio hasta final.

### RECTANG

Alias: `REC`, `RECTANGLE`. Polilínea cerrada.

- `Seleccione la primera esquina`, `Seleccione la otra esquina`. Escribí `@ancho,altura` segunda esquina haguã.

### POLYGON

Alias: `POL`. Polígono regular polilínea cerrada haguéicha.

- `Ingrese el número de lados ⟨4⟩` (3 a 1024)
- `Seleccione el centro del polígono`
- `Ingrese una opción [Inscrito en círculo/Circunscrito a círculo] ⟨I⟩`
- `Seleccione el radio del círculo`: clic térã punto escribí; distancia tamaño, dirección polígono girar.

### ELLIPSE

Alias: `EL`.

- `Seleccione el extremo del eje de la elipse [Centro]`, `Seleccione el otro extremo del eje`, `Seleccione la distancia al otro eje`
- `C`: `Seleccione el centro de la elipse`, `Seleccione el extremo del eje`, upéi distancia otro eje.
- `I` (`Isocírculo`, {{cmd:ISODRAFT}} ojapóva jave ojeikuaa): centro, upéi radio térã `Diámetro`: círculo isométrico plano pe.

### HATCH

Alias: `H`, `BH`, `BHATCH`; térã {{ui:Sombreado}} botón herramienta pe. Mba'e patrón, escala ha ángulo corriente ohechauka ko'ẽrõ.

- `Seleccione el punto interior [Seleccionar objetos/Patrón/Escala/Ángulo]`, jey jey (`Deshacer [U]` área peteĩ rire): clic cada ojeaga área ryepýpe, cerrada formas islas. Enter peteĩ sombreado opavave.
- `S`: `Seleccione objetos cerrados` (polilíneas cerradas, círculos, elipses cerradas).
- `P`: `Ingrese un nombre de patrón, SOLID, o ? para la lista ⟨actual⟩`. `SC`: `Especifique la escala del patrón`. `A`: `Especifique el ángulo del patrón`.
- `G` (Degradado): relleno degradado patrón rehegua. Ehecha {{cmd:GRADIENT}} pregunta haguã.

Ehecha [Sombreado y relleno de áreas](topic:hatch).

### GRADIENT

Alias: `GD`. Área degradado peteĩ térã mokõi color ndive. Degradado pregunta primero, upéi {{cmd:HATCH}} haguéicha oñemoñe'ẽ (`Seleccione el punto interior`, `S` objetos cerrados, {{key:Enter}} ombohasa).

- `Ingrese una opción de degradado [Tipo/Un color/Dos colores/Ángulo/Centrado/Salir] ⟨S⟩`, jey jey; degradado ko'ẽrõ ohechauka cada vez.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, térã umi invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Letra ryguasu suficiente.
- `O`: peteĩ color, upéi tono 0 gui 1 peve (0 negro, 0.5 color, 1 blanco). `TW`: primer ha segundo color. Color: número 1 gui 255, mbohapy número `255,128,0`, térã `#rrggbb`.
- `A`: degradado ángulo. `C`: centrado Sí térã No (No medio lado pe).
- Tipo térã color ndojuhúi, térã tono 0 gui 1 peve ndaha'éi, ndojapói.

{{cmd:HATCHEDIT}} `G` ha Propiedades (Degradado) upéi degradado omboguejy térã sombreado degradado ojapo. Degradado pantalla ha plotter pe ohecha. DWG 2004 ha ko'ẽrõ degradado sombreado real; DXF 2000 ha DWG 2000 CadCraft haguã oñemantene, ambue programa sólido relleno ohechauka primer color.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Sombreado ojepe contorno jey ojapo. `Seleccione sombreados` (térã antes selecciona), upéi `¿Vincular cada sombreado a su nuevo contorno, para que el sombreado lo siga? [Sí/No] ⟨Sí⟩`.

- Sombreado bucle cada peteĩ polilínea cerrada capa de sombreado pe; polilíneas nueva seleccionadas quedan. Borde curvo ojeheja segmentos rectos cortos sombreado haguéicha.
- Sí jave sombreado nuevo contorno ojeheja, {{cmd:HATCH}} ojapo haguéicha. Peteĩ paso deshacer.
- Sombreado ndaiporiete jave, ohechauka.

### POINT

Alias: `PO`; térã {{ui:Dibujar}} › {{ui:Más}} › {{ui:Punto}}. Objetos punto, clic peteĩ peteĩ, Enter peve.

- `Seleccione un punto`

### XLINE

Alias: `XL`; térã {{ui:Dibujar}} › {{ui:Más}} › {{ui:Línea de construcción}}. Líneas construcción, sin fin ambos sentido. Ehecha [Líneas de construcción y semirrectas](topic:construction-lines).

- `Seleccione un punto [Hor/Ver/Ang/Bisec/Desfase]`, upéi `Seleccione punto por donde pasa` cada línea, Enter peve.
- `A`: `Ingrese el ángulo de la línea de construcción [Referencia] ⟨0⟩`; `R` primero `Seleccione un objeto línea`.
- `B`: `Seleccione el vértice del ángulo`, `Seleccione el punto inicial del ángulo`, upéi `Seleccione el punto final del ángulo` cada línea.
- `O`: `Especifique la distancia de desfase [Por punto] ⟨Por punto⟩`, upéi `Seleccione un objeto línea` ha `Seleccione el lado del desfase` (térã `Seleccione punto por donde pasa`) cada línea.

### RAY

Ndaipóri alias; térã {{ui:Dibujar}} › {{ui:Más}} › {{ui:Semirrecta}}. `Seleccione el punto inicial`, upéi `Seleccione punto por donde pasa` cada semirrecta, Enter peve.

### TEXT

Alias: `DT`, `DTEXT`; térã {{ui:Texto}} botón herramienta pe. Texto peteĩ línea; cada línea peteĩ objeto.

- `Seleccione el punto inicial del texto [Justificar]`
- `J`: `Ingrese una opción [Izquierda/Centro/Derecha/Medio/TL/MC] ⟨L⟩`, upéi `Seleccione el punto de inserción del texto`
- `Seleccione la altura ⟨altura de texto actual⟩`
- `Seleccione el ángulo de rotación del texto ⟨0⟩`
- `Ingrese el texto`, jey jey: cada Enter línea pyahu ojevy. Enter línea vacía ombohasa. {{key:Space}} espacio ojapo.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} marca ojapo línea, arco, círculo, polilínea, spline térã elipse parte iguales. Objeto elegí, upéi parte cantidad (2 gui 32767). Objeto abierto marca peteĩ menos parte gui; cerrado marca inicio avei. Objeto ndojehepyrái. Marcas puntos; `Bloque` ojeporandu bloque plano gui ha objeto ojeheja térã ndaha'éi. Spline ha elipse longitud cuerda corta rehe. Texto, sombreado ha longitud ndaiporiva objeto ndojuhúi.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} marca cada longitud dada línea, arco, círculo, polilínea, spline térã elipse rehe, clic rehe extremo más cercano gui. Longitud escribí térã mokõi punto gui. Objeto abierto final marca ndaiporiva. `Bloque` marca punto ndive bloque. Longitud 0 térã objeto mboyve, térã 32767 marca mboyve ndojapói.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} clic punto área cerrada ryepýpe polilínea cerrada ojapo, líneas, arcos, círculos, polilíneas ha curvas ohechaukáva. Partes arco ha círculo arco segmentos haguéicha; elipse ha spline segmentos rectos cortos. `Islas` ojapo (inicio) cada área adentro polilínea. Clic oñemoĩ; Enter ombohasa. Límite objetos oñemoñare. Área cerrada ndojuhúi jave ohechauka.

### BLEND

{{cmd:BLEND}} mokõi curva abierta extremos ryepýpe spline ojapo. Extremo cerca clic ojoaporã. `CONtinuity` elegí `Tangente` (spline ohe ha ojuhu ambas curva direcciones) térã `Suave` (curva ohecha avei extremo ojehecha). Elección sesión pe ojeikuaa. Curvas ndojeporuvéi. Cerrado objeto ha extremos ojoaporã ndojapói.

### REGION

Alias: `REG`. {{cmd:REGION}} objetos cerrados regiones planas pe ojapo: unir, cortar ha medir. Círculo, polilínea cerrada, elipse cerrada térã spline cerrada, térã línea, arco ha polilínea abierta extremo a extremo bucle ojoaporã; cada bucle peteĩ región ojapo ha objetos oñemboguejy. Arcos arco ojeikuaa; elipse ha spline segmentos rectos cortos. Cerrado ndaha'éi ndojapói, cuantos quedan ohechauka. Plano pe región peteĩ térã mokõi polilínea cerrada agrupación nombre ndaipóri pe; clic región entero selecciona, copia peteĩ región ojapo; ambue programa polilínea cerrada ohecha.

Regiones plano pe ojapo jave, {{cmd:UNION}}, {{cmd:SUBTRACT}} ha {{cmd:INTERSECT}} 2D pestaña pe regiones ojapo: `UNION` regiones seleccionada peteĩ ojapo (separadas peteĩ región mokõi contorno ndive), `SUBTRACT` regiones restar ojeporandu upéi ha restaurar, `INTERSECT` mokõi áreas común mantene. Opavave área resultado ohechauka, peteĩ paso deshacer. Ndaipóri nada quedaha térã ndaipóri común jave ndojapói. 3D pestaña pe ha plano regiones ndaipóri jave sólidos pe igual ojapo.

## Modificar

### MTEXT

Alias: `MT`, `T`; térã {{ui:Párrafo}} botón herramienta pe. Texto párrafo ancho pe ojeheja, lugar pe escribí.

- `Seleccione la primera esquina`
- `Seleccione la esquina opuesta [Altura/Justificar/Interlineado/Rotación/Ancho]`: esquina ojoaporã ancho texto pe ojeheja. `H` `Seleccione la altura`, `J` `Ingrese justificación [TL/TC/TR/ML/MC/MR/BL/BC/BR] ⟨TL⟩`, `L` `Ingrese factor de interlineado (0.25 a 4)`, `R` `Seleccione el ángulo de rotación`, `W` `Seleccione el ancho (0 sin ajuste)` ha mokõi esquina ndojapói.
- Upéi cuadro plano pe ohecha: escribí, {{key:Enter}} párrafo pyahu, {{key:Mod+Enter}} térã clic afuera ombohasa, {{key:Esc}} ombohasa. Barra altura, interlineado, ancho ha justificación fija. Ehecha [Agregar texto y etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; térã doble clic texto. `Seleccione un texto para editar`, jey jey Enter peve: cada uno cuadro mismo pe. Texto seleccionado térã doble clic jave, peteĩ edita ha ombohasa.

### ERASE

Alias: `E`, `DELETE`; térã {{key:Delete}} objetos seleccionado jave.

- `Seleccione objetos` (objeto seleccionado jave ndojeporandúi)

### MOVE

Alias: `M`.

- `Seleccione objetos`
- `Seleccione el punto base [Desplazamiento]`, `Seleccione el segundo punto`
- `D`: `Ingrese el desplazamiento`, `dx,dy` pe escribí.

### COPY

Alias: `CO`, `CP`. Copias cuántas punto ome'ẽ rire.

`Matriz` segundo punto indicación pe fila peteĩ ojapo: cantidad objeto ome'ẽ (original peteĩ jave), upéi primera copia lugar; ambue espaciado igual gui. `Ajustar` punto últimas copia lugar ojapo, ambue medio ojekuaa.

- `Seleccione objetos`
- `Seleccione el punto base [Desplazamiento]`
- `Seleccione el segundo punto [Deshacer [U]]`, jey jey Enter peve. `U` última copia emombyta.

### ROTATE

Alias: `RO`.

- `Seleccione objetos`, `Seleccione el punto base`
- `Seleccione el ángulo de rotación ⟨último ángulo⟩`: grados, antihorario positivo; térã punto clic oho rehe girar.

### SCALE

Alias: `SC`.

- `Seleccione objetos`, `Seleccione el punto base`
- `Seleccione el factor de escala`: `0.5` térã `2` peteĩ factor escribí. Punto clic base punto gui distancia factor.

### MIRROR

Alias: `MI`.

- `Seleccione objetos`
- `Seleccione el primer punto de la línea de espejo`, `Seleccione el segundo punto de la línea de espejo`
- `¿Borrar objetos origen? [Sí/No] ⟨N⟩`

### ALIGN

Alias: `AL`; térã {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear}}.

- `Seleccione objetos`
- `Seleccione el primer punto fuente`, `Seleccione el primer punto destino`
- `Seleccione el segundo punto fuente (Enter para continuar)`, `Seleccione el segundo punto destino`
- `Seleccione el tercer punto fuente (Enter para continuar)`, `Seleccione el tercer punto destino`
- Mokõi par jave: `¿Escalar objetos según puntos de alineación? [Sí/No] ⟨N⟩`

Ehecha [Alinear objetos](topic:modify-objects#align-objects).

### ALIGNTO

- `Seleccione objetos` (térã selección), `Alinear [Izquierda/Centro/Derecha/Superior/Medio/Inferior] ⟨Izquierda⟩`, `A [Selección/Primero/Último/Punto] ⟨Selección⟩`; `P` punto pregunta. Selección queda.

### DISTRIBUTE

- `Seleccione objetos` (mbohapy como mínimo), `Distribuir [Horizontalmente/Verticalmente] ⟨Horizontalmente⟩`, `Espaciar uniformemente [Centros/Espacios] ⟨Espacios⟩`. Mokõi externo quedan; selección quedan.

### ALIGNPANEL

Alias: `ALP`; térã {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear y distribuir}}. Panel ohechauka ALIGNTO ha DISTRIBUTE clic ndive.

### LASER

Alias: `LASERCUT`; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Láser…}}. Panel Láser plano ryepýpe ohechauka: capa mba'e (cortar, marcar, grabar, rellenar, imagen), vista previa, G-code GRBL archivo guardar, Web Serial gui marco ha enviar. Ehecha [Enviar plano a láser](topic:laser-cutting).

### STRETCH

Alias: `S`; térã {{ui:Estirar}}. `Seleccione objetos para estirar`: ventana cruce arrastra extremos rupi mover (térã `C`). `Seleccione el punto base [Desplazamiento]`, `Seleccione el segundo punto`. Ventana adentro puntos mover: línea extremos, polilínea vértices (arco segmento altura mantiene), punto cota; círculo, elipse, texto, punto ha bloque entero mover si centro térã punto inserción adentro. Antes selección cruce ventana (ha lazos) mantene, mismo modo estira. Ventana ndaipóri jave objetos entero mover.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; térã {{ui:Matriz}}. `Seleccione objetos`, upéi `Ingrese el tipo de matriz [Rectangular/POlar] ⟨Rectangular⟩` (ARRAY solamente).

- Rectangular 4 columna × 3 fila gui, espacio objetos tamaño 1.5 veces, vista previa. `Ingrese una opción [COUnt/Espaciado/COLumnas/Filas/eXit] ⟨X⟩`: `COU` columna ha fila pregunta, `S` columnas ha filas distancia (negativo izquierda térã abajo), `COL` ha `R` peteĩ dirección peteĩ.
- Polar `Seleccione el centro de la matriz` pregunta, 6 ítem opavave ojapo, girado. `Ingrese una opción [Ítems/Ángulo de relleno/ROTar ítems/eXit] ⟨X⟩`: `I` ítem, `F` relleno ángulo (+ antihorario, − horario), `ROT` Sí térã No.
- {{key:Enter}} (eXit) copias simple objetos ojapo. Peteĩ paso deshacer.
- `AS` (Asociativo) copias simple ha matriz editable ndive mudar: peteĩ objeto gui {{cmd:ARRAYEDIT}} rupi, grips térã Propiedades. Elección recuerda ({{cmd:ARRAYASSOCIATIVITY}}); copias simple gui oñepyrũ.

### ARRAYPATH

Curva rehe copias. `Seleccione objetos`, upéi `Seleccione la curva de trayectoria`: línea, arco, círculo, elipse, polilínea térã spline (matriz objetos ndaha'éi). Trayectoria objetos gui más cercano extremo gui oñepyrũ, primer ítem objetos ndive ha'e.

- `Ingrese una opción [Método/Ítems/Espaciado/Alinear/Asociativo/eXit] ⟨X⟩`, vista previa ndive. `M`: `Dividir` ítems trayectoria opavave uniforme, `Medir` cada distancia peteĩ. `I`: ítem cantidad (Medir ndive, 0 entran mboyve), `SP`: ítem distancia trayectoria pe (Medir cambia), `AL`: Sí ítem trayectoria ojehe, No ndiporãi pe.
- `AS` {{cmd:ARRAY}} haguéicha. Matriz trayectoria forma ipropio oñemantene: curva trayectoria editar, ítem ndojeheja.
- Trayectoria curva ndaha'éi ha ítem peteĩ ndojapói.

### ARRAYEDIT

Asociativo ojapóva matriz oñemboguejy. `Seleccione la matriz` (térã antes selecciona). Ojapo mba'e ohechauka, upéi Enter peve oporandu:

- Rectangular: `COL` columnas ha espaciado, `R` filas ha espaciado, `A` columnas ángulo.
- Polar: `I` ítem, `F` relleno ángulo, `ROT` ítem girar Sí térã No.
- Trayectoria: `M` Dividir térã Medir, `I` ítem, `SP` espaciado, `AL` trayectoria alinear.
- `S` (Fuente) objetos matriz repetida abre, bloque editor haguéicha. Dibujar ha editar; {{cmd:ARRAYCLOSE}} guardar térã descartar, opavave ítem ojehe.
- `REP` (REPlace): `Seleccione objetos de reemplazo`, `Seleccione el punto base de los objetos de reemplazo`, upéi ítem clic reemplazar, Enter. Ítem reemplazo ohechauka; objetos reemplazo plano pe ndaipóri, matriz rupi oĩ. `RES` (RESet) ítem objetos fuente opavave jey ohechauka.
- Cambio cada peteĩ paso deshacer. Copia simple, bloque referencia simple térã bloqueado capa matriz ndojapói.

Número mbohapy Propiedades Matriz pe ha grips: punto base mover, segundo ítem grip espaciado, último ítem grip cantidad (polar: segundo ítem cantidad, último ítem relleno ángulo). {{cmd:EXPLODE}} matriz copias simple ojapo.

### ARRAYCLOSE

Ombohasa {{cmd:ARRAYEDIT}} Fuente: `¿Guardar cambios en los objetos fuente de la matriz? [Guardar/Descartar] ⟨Guardar⟩`. Matriz fuente objetos abierto ndaipóri jave ohechauka. {{cmd:BCLOSE}} igual ojapo.

### ARRAYASSOCIATIVITY

`Ingrese nuevo valor para ARRAYASSOCIATIVITY (1 = matrices editables, 0 = copias simples)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ha {{cmd:ARRAYPATH}} oñepyrũ pe fija; `AS` opción igual cambia. Navegador pe recuerda.

### OFFSET

Alias: `O`. Líneas, arcos, círculos ha polilíneas.

Polilínea afuera movida ha segmentos rectos esquina pe separado, {{cmd:OFFSETGAPTYPE}} hueco cómo cerrar decide.

- `Seleccione distancia de desfase [Por punto] ⟨última distancia, térã Por punto⟩`
- `Seleccione el objeto para desfasar`, upéi `Seleccione el punto del lado para desfasar` (térã Por punto jave, `Seleccione punto por donde pasa`), Enter peve jey jey.

### OFFSETGAPTYPE

- `Huecos de esquina: 0 extender, 1 redondear, 2 biselar`: cómo {{cmd:OFFSET}} polilínea esquina externa hueco cerrar. `0` segmentos extienden hasta encontrarse (inicio), `1` arco esquina vieja, `2` corte recto. Esquina interna ha arco segmentos ndojeporãi. Sesión pe mantene.

### EXTRIM

{{cmd:EXTRIM}} borde lado peteĩ opavave recorta. Borde corte elegí (línea, arco, círculo, polilínea, elipse, spline térã línea construcción), upéi lado punto clic limpiar: borde cruza opavave línea, arco, círculo, polilínea ha línea construcción parte lado gui pérdida, borde gui oñepyrũ. Lado elegí mboyve pieza puntero rehe ojehecha. Borde cerrado lados adentro ha afuera. Borde toca solamente objetos, texto, sombreados, splines ha elipses cruza ndojerecorta. Peteĩ paso deshacer.

### TRIMEXTENDMODE

- `Ingrese nuevo valor para TRIMEXTENDMODE (1 Rápido, 0 Estándar)`: {{cmd:TRIM}} ha {{cmd:EXTEND}} cómo oñepyrũ. `1` Rápido: opa objeto corte térã límite. `0` Estándar: bordes primero oporandu. LISP pe `(setvar "TRIMEXTENDMODE" 0)` avei.

### TRIM

Alias: `TR`. Primero ohechauka `Configuración actual: modo Rápido (TRIMEXTENDMODE 1), bordes: Sin extender, arrastrar traza una trayectoria`. Rápido modo pe opavave objeto visible borde corte, objeto cruzaʼỹ borrado; Estándar modo pe `Seleccione bordes de corte (Enter = todos los objetos)` oporandu, corte ha borde ojeporandu ndive.

- `Seleccione objeto a recortar o shift-seleccione para extender [bordes Cortes/Vallado/Cruce/modo/Borde/Borrar/Deshacer [U]]`, jey jey: clic pieza borrar (gris punteado puntero ohupyty jave), trayectoria arrastrar varias pieza (opavave peteĩ paso), térã cerca dos vacío punto clic. {{key:Shift}} extender ojapo. `T` corte bordes (Estándar), `F` vallado puntos, `C` dos ventana esquina (parte adentro ojehe), `O` `Ingrese una opción de modo de recorte [Rápido/Estándar]`, `E` `Ingrese un modo de extensión de borde implícito [Extender/No extender]` (EDGEMODE), `R` objetos seleccionado borrar, `U` último pick térã arrastre deshacer. Enter ombohasa. Ehecha [Recortar y extender](topic:trim-and-extend).

- Sombreado clic cortar: bordes corte sombreado área divide, clic pieza saca (dibujo contorno no queda). Sombreado patrón térã degradado mantene; contorno vinculado sombreado ndaipórive. Corte ndaha'éi jave térã clic afuera jave ohechauka, nada quedahápe jave ({{cmd:ERASE}} oñeporandu). Trayectoria térã vallado sombreado ndojerecorta.

### EXTEND

Alias: `EX`. TRIM haguéicha ambue sentido: `Seleccione objeto a extender o shift-seleccione para recortar [Bordes límite/Vallado/Cruce/modo/Borde/Deshacer [U]]`. Clic extremo cerca límite próximo gui alarga; arrastre trayectoria térã vallado cruza opavave objeto alarga; {{key:Shift}} recorta. `B` límite bordes (Estándar modo). Modo Borde TRIM ndive compartido.

### LINKVIEWS

Alias: `SYNCVIEWS`; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Vincular las vistas de los paneles}}, térã pestaña enlace ícono. `Vincular vistas de los paneles [ON/OFF]` (Enter ótro estado): on jave, panel activo desplazar térã zoom mismo tipo espacio ojehecha opavave panel. Ehecha [Dividir la pantalla](topic:split-screen).

### OPENIN3D

Ndaipóri alias; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Open in ModelCraft}} 3D modelado app pe pestaña pyahu, DWG haguéicha (nada subido). Navegador blok jave ohechauka.

### LASSOMODE

`Ingrese nuevo valor para LASSOMODE (1 = lazo, 0 = rectángulo)`: vacío lugar pe presionar ha arrastrar mba'e dibujar. Configuración › CadCraft › Arrastrar para seleccionar ndive mismo. Ehecha [Selección con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Líneas, arcos, círculos ha polilíneas. Primero `Configuración actual: Modo = TRIM, Radio = 0` ohechauka.

- `Seleccione el primer objeto [Deshacer [U]/Polilínea/Radio/Recortar/Múltiple]`
  - `R` `Seleccione el radio de redondeo ⟨último⟩`. `T` `Ingrese opción de modo de recorte [Recortar/Sin recorte]`: Sin recorte objeto igual, arco solamente agrega.
  - `M` más esquina Enter peve comando sigue; `U` último esquina comando ndojehasái deshacer.
  - `P` `Seleccione polilínea 2D [Radio]` pregunta ha opavave esquina segmentos rectos ojoaporã redondea. Redondeo ojapóva radio pyahu oñemboguejy; radio 0 oñemboguejy. Lados muy cortos esquina ndaipóri, contado ohechauka.
- `Seleccione el segundo objeto o shift-seleccione para aplicar esquina [Radio]`. {{key:Shift}} clic jave esquina aguda, radio mboyve.

Clic cada objeto parte ndoguerohoryvéva. Línea ndojoaporãva extendida. Paralelo líneas brecha mitad círculo, primera línea extremo clic gui más cercano. Círculo nunca cortado. Polilínea segmentos ojoaporã arco polilínea adentro; polilínea ótro objeto cortar polilínea primer térã último segmento.

### CHAMFER

Alias: `CHA`. Líneas ha polilínea segmentos rectos. Primero distancias actuales (térã longitud ha ángulo) ohechauka.

- `Seleccione la primera línea [Deshacer [U]/Polilínea/Distancia/Ángulo/Recortar/Método/Múltiple]`
  - `D` `Seleccione la primera distancia de chaflán ⟨última⟩` ha `Seleccione la segunda distancia de chaflán ⟨la primera⟩`: primera primer línea gui, segunda otra gui.
  - `A` `Seleccione longitud de chaflán en la primera línea` ha `Seleccione ángulo de chaflán desde la primera línea`.
  - `E` (Método) próximo chaflán mokõi cuál. `T`, `M`, `U` ha `P` {{cmd:FILLET}} haguéicha.
- `Seleccione la segunda línea o shift-seleccione para aplicar esquina [Distancia/Ángulo/Método]`. {{key:Shift}}+clic esquina aguda.

Distancia línea gui mboyve ndojapói (`La distancia es demasiado grande.`).

### BREAK y BREAKATPOINT

Alias: `BR`. `Seleccione objeto` (clic punto primer punto), `Seleccione el segundo punto de corte [Primer punto]`; `F` `Seleccione el primer punto de corte` ha `Seleccione el segundo punto de corte`. Medio parte mboyve; círculo antihorario primer punto gui. BREAKATPOINT `Seleccione el punto de corte` pregunta, objeto punto pe mokõi ojapo (círculo ndaha'éi).

### LENGTHEN

Alias: `LEN`. `Seleccione un objeto para medir [DElta/Porcentaje/Total/DYnámico]`: clic `Longitud actual` (arco ángulo incluido avei) ohechauka ha jey oporandu. `DE` `Ingrese longitud delta (negativo acorta) [Ángulo]`, `P` `Ingrese longitud porcentual`, `T` `Seleccione longitud total [Ángulo]`, `DY` arrastrá. Upéi `Seleccione un objeto para cambiar [Deshacer [U]]`, jey jey: clic extremo más cercano mueve. Líneas, arcos ha polilíneas abiertas.

### JOIN

Alias: `J`. `Seleccione objetos para unir`. Líneas, arcos ha polilíneas abiertas punta a punta polilíneas ojapo (cerrada cadena cerrada). Línea recta peteĩ línea; arcos círculo peteĩ arco térã círculo. Historial objeto cuánto unido ha cuánto ndaunido ohechauka.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Seleccione objeto fuente`, upéi `Seleccione objetos destino [Configuración]` ha Enter. Capa ha color copia; mismo tipo objetos texto altura ha ancho, cota tamaño térã sombreado patrón. `S` `Active o desactive una propiedad [Color/Capa/Texto/Cota/Sombreado]`, Enter peve jey; elección sesión pe recuerda.

### EXPLODE

Alias: `X`. Polilíneas líneas ha arcos, bloque referencias objetos, cotas líneas, flechas ha texto. Matriz editable ({{cmd:ARRAYEDIT}}) copias simple objetos ojapo.

- `Seleccione objetos`

### GROUP

Alias: `G`. {{cmd:GROUP}} seleccionado objetos nombre compartido ome'ẽ. Objetos seleccionar, upéi nombre escribí (espacio ndaipóri; `?` grupos lista; Enter grupo sin nombre) ha grupo nombrado descripción opcional. Upéi peteĩ clic, térã ventana tomar peteĩ, todos selecciona; mover, copiar, borrar juntos; objeto propio objeto. Objeto varios grupo pe oĩ. Grupo entero copia nuevo grupo sin nombre; peteĩ miembro copia grupo ryepýpe. Grupos oñemoĩ espacio pe (modelo térã hoja). DWG térã DXF guardar ha CadCraft pe abrir jave oñemantene; DXF 2000 archivo ambue programa grupo objeto avei; ambue programa grupo DXF térã DWG abrir jave leído.

### UNGROUP

{{cmd:UNGROUP}} grupos separa: grupo objetos seleccionar (cada grupo separado) térã `Nombre` escribí ha grupo nombre. Objetos plano pe quedan. Peteĩ paso deshacer grupos ojevy.

### GROUPEDIT

{{cmd:GROUPEDIT}} peteĩ grupo oñemboguejy. Peteĩ objeto elegí, térã `Nombre` ha nombre; grupo ya seleccionado tal cual oñeporandu. Upéi: `Agregar` objetos (peteĩ peteĩ, grupo gui ndaha'éi), `Quitar` objetos, `REName` grupo, `Descripción` cambiar, térã `Seleccionable` (clic peteĩ objeto grupo entero selecciona). `eXit` térã Enter ombohasa. Objeto ndaipóri grupo oñemboguejy.

### PICKSTYLE

- `Selección de grupo: 0 clic peteĩ objeto, 1 grupo entero`: `1` (inicio) grupo objeto clic térã ventana grupo entero selecciona; `0` objeto peteĩ, grupo miembro peteĩ edita. Sesión pe mantene.

## Portapapeles

Portapapeles CadCraft propio: plano adentro, planos ryepýpe ha pestañas CadCraft navegador pe funciona. Ehecha [Copiar, pegar y duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, térã {{ui:Copiar}} {{ui:Editar}} grupo pe. Objetos portapapeles pe copia, bloques ha capas ndive. Objetos seleccionado quedan.

- `Seleccione objetos para copiar` (objetos seleccionado jave ndojeporandúi)

### CUTCLIP

{{key:Mod+X}}, térã {{ui:Cortar}} {{ui:Más}} menú pe. Objetos portapapeles copia, upéi borrar (peteĩ paso deshacer).

- `Seleccione objetos para cortar` (seleccionado jave ndojeporandúi)

### COPYBASE

Objetos portapapeles pe punto base elegí ndive copia; pegar punto oñemoĩ.

- `Seleccione el punto base`
- `Seleccione objetos para copiar`

### PASTECLIP

{{key:Mod+V}}, térã {{ui:Pegar}} {{ui:Editar}} grupo pe. Copia cursor rehe oho, extensión esquina inferior izquierda gui colgado (térã centro, térã {{cmd:COPYBASE}} punto; [Configuración CadCraft](topic:settings)).

- `Seleccione el punto de inserción`

Pegado objetos seleccionado. Bloque plano pe mismo nombre ya ojeikuaa definición plano propio ojeporu.

MarkupCraft pe copiado área CadCraft copia mboyve pyahu ha 6 hora mboyve jave, {{key:Mod+V}} ha `PASTECLIP` área pegar: ver `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Pegar un área copiada}} {{ui:Más}} menú pe. Pegar área MarkupCraft {{ui:Copiar área}} copiado imagen tamaño real pe. Ehecha [Imágenes en un plano](topic:pictures).

- `Seleccione la esquina inferior izquierda del área copiada`
- `Escala de su tamaño de papel por (100 para hoja 1:100; Puntos: mokõi punto ha distancia real) [Puntos] ⟨1⟩` (hoja escala ndaipóri jave ndaporandu): número, {{key:Enter}} papel tamaño, térã `P`, `Primer punto del área pegada`, `Segundo punto del área pegada` ha distancia real.

### PASTEORIG

{{key:Mod+Shift+V}}, térã {{ui:Pegar en el mismo lugar}} {{ui:Más}} menú pe. Objetos copiado coordenadas pe pegar. Ndaporandúi nada.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, térã {{ui:Duplicar y mover}} {{ui:Más}} menú pe. Objetos copia cursor ndive oho dónde ojehecha; {{key:Esc}} nada ndojapói. Portapapeles ndojeporuvéi.

- `Seleccione objetos para duplicar` (seleccionado jave ndojeporandúi)
- `Seleccione dónde va la copia (Esc no deja nada)`: clic, punto escribí, `@dx,dy` (puntero dónde gui), térã distancia cursor rehe.

### SELECT

`Seleccione objetos` oporandu (opción opavave) ha elegido seleccionado queda, próximo comando térã `P` rire.

### QSELECT

Alias: `QS`. Navegador pe, {{ui:Selección rápida}} diálogo (ehecha [Seleccionar objetos](topic:select-objects#select-by-a-rule-quick-select)). Ndaipóri jave línea comandos `Ingrese tipo de objeto`, `Ingrese propiedad`, `Ingrese operador [=/<>/>/</*/Seleccionar todo] ⟨=⟩` ha `Ingrese valor` oporandu. Coincidencia selección ojapo.

### SELECTSIMILAR

Alias: `SIM`. `Seleccione objetos [Configuración]` (térã selección actual): mismo tipo, capa ha color objeto opavave selecciona (bloque nombre ha sombreado patrón avei). `SE` `Active o desactive una propiedad [Capa/Color/Nombre/Patrón/Altura]`, Enter peve jey.

### FIND

Ndaipóri alias; térã {{ui:Editar}} › {{ui:Más}} › {{ui:Buscar y reemplazar}}. Navegador pe {{ui:Buscar y reemplazar}} diálogo (ehecha [Agregar texto y etiquetas](topic:text#find-and-replace-words)). Ndaipóri jave: `Ingrese texto para buscar`, upéi `Ingrese texto de reemplazo (Enter: seleccionar lo encontrado)`. Texto, valores atributos ha texto cota adentro busca, pestaña abierta térã selección pe.

### SELECTALL ha DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) pestaña abierta pe editable opavave objeto selecciona. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; térã {{key:Esc}}) selección borra.

## Cotas

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distancia horizontal térã vertical.

- `Seleccione el origen de la primera línea de extensión [Seleccionar objeto]` (Enter térã `S`: `Seleccione el objeto a acotar`, upéi línea, arco, círculo térã polilínea segmento clic)
- `Seleccione el origen de la segunda línea de extensión`
- `Seleccione la ubicación de la línea de cota [Texto/Horizontal/Vertical/Rotada]`. `T` texto pregunta (`<>` medida valor), `H` ha `V` dirección fija, `R` `Seleccione el ángulo de la línea de cota ⟨0⟩`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Mokõi punto ryepýpe distancia real.

- Origen {{cmd:DIMLINEAR}} haguéicha, upéi `Seleccione la ubicación de la línea de cota [Texto]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Seleccione arco, círculo o línea, o Enter para un vértice`
- Arco: ángulo. Círculo: `Seleccione el segundo extremo del ángulo`. Línea: `Seleccione la segunda línea`. Enter: `Seleccione el vértice del ángulo`, `Seleccione el primer extremo del ángulo`, `Seleccione el segundo extremo del ángulo`.
- `Seleccione la ubicación de la línea de cota [Texto]`: clic ángulo adentro medir haguã.

### DIMRADIUS y DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Seleccione arco o círculo`, upéi `Seleccione la ubicación de la línea de cota [Texto]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Último lineal térã alineado cota gui (térã `Seleccione cota lineal o alineada`) ojapo ndive.

- `Seleccione el origen de la segunda línea de extensión [Deshacer [U]]`, jey jey Enter peve.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} haguéicha, opavave cota primer origen gui, más afuera apilado.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Seleccione la ubicación del elemento`, upéi `Seleccione el extremo de la guía [Datum X/Datum Y/Texto]`. Elemento gui UCS origen distancia X térã Y guía pe escribe: guía abajo arriba mboyve X, lado mboyve Y; `Datum X` ha `Datum Y` fija. Origen {{cmd:UCS}} ndive ko'ẽrõ fija (ndaipóri jave plano 0,0). Grips elemento, origen ha guía extremo mover, valor oho. DWG ha DXF cota ordenada real haguéicha guardado. Guía extremo elemento pe ndojapói.

### DIMARC

Alias: `DAR`. `Seleccione arco o segmento de arco de polilínea`, upéi `Seleccione la ubicación de la cota de longitud de arco [Texto]`. Arco rehe medir (cuerda ndaha'éi), valor antes símbolo arco. Círculo entero, línea térã polilínea segmento recto ndojapói. DWG cota longitud de arco haguéicha; DXF angular cota texto longitud ndive; CadCraft arco longitud cota haguéicha ojeporu.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Seleccione arco o círculo`, `Seleccione la ubicación alternativa del centro`, `Seleccione la ubicación del quiebre`. Radio cota curva centro lejos o página afuera: línea cota emoĩ punto gui, quiebre ndive, radio real escribe. DWG radio quebrado cota haguéicha; DXF radio cota haguéicha, CadCraft quebrado haguéicha abre jey.

### DIMJOGLINE

Alias: `DJL`. `Seleccione cota para agregar quiebre [Quitar]`, upéi `Seleccione la ubicación del quiebre (o presione Enter)`. Lineal térã alineada cota línea quiebre símbolo, distancia escala pe ndaha'éi ohechauka; valor ndomudái. `Quitar` quita. Ótro tipo cota ndojapói.

### QDIM

Ndaipóri alias. `Seleccione geometría para acotar`, upéi `Seleccione la posición de la línea de cota [Continua/Escalonada/Línea base/Ordenada/Radio/Diámetro/datumPoint]`. Varios objeto peteĩ paso acotar: línea extremo, polilínea segmento, círculo ha arco centro, punto ha bloque referencia. Objeto arriba térã abajo posición medida ojoaporã; costado medida arriba. `Continua` puntos cadena, `Línea base` opavave primero gui, `Escalonada` medio gui par anidado, `Ordenada` punto datum gui distancia (`datumPoint` nuevo elegí), `Radio` ha `Diámetro` círculo ha arco opavave. Modo recuerda. Opavave peteĩ paso deshacer. Dos punto menos térã radio/diámetro círculo arco ndaipóri jave ohechauka.

### DIMBREAK

Alias: `DBREAK`. `Seleccione cotas para agregar o quitar cortes`, upéi `Cortar donde cruzan otros objetos [Auto/Manual/Quitar] ⟨Auto⟩`. `Auto` línea cota extensión línea brecha objeto cruza donde, objetos térã cota mover jave oñemboguejy. `Manual` (peteĩ cota) mokõi punto pregunta, ente brecha. `Quitar` opavave brecha quita. Brecha 1.5 veces texto altura.

### DIMSPACE

Ndaipóri alias. `Seleccione cota base`, `Seleccione cotas para espaciar`, `Ingrese valor de espaciado o Auto ⟨Auto⟩`. Paralelo lineal ha alineada cota línea (térã angular mismo vértice) mover, distancia igual base cota gui, cada uno lado. `0` base alinea; `Auto` base cota texto altura dupla. Base paralelo ndaha'éi cota ndojapói.

### DIMINSPECT

Ndaipóri alias. `Seleccione cotas`, `Forma del marco de inspección [Redondo/Angular/Ninguno/quitar] ⟨Redondo⟩`, `Ingrese etiqueta`, `Ingrese tasa de inspección ⟨100%⟩`. Valor alrededor marco, antes etiqueta ha después tasa inspección. `quitar` marco quita. Tolerancia texto valor ndive.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Ingrese nombre de variable de cota para reemplazar o Borrar`, `Ingrese nuevo valor para …`, Enter peve, upéi `Seleccione cotas`. Cota seleccionada ajustes oñemboguejy; cota estilo ndaha'éi. Número térã conmutador variable (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Borrar` seleccionado cota estilo jey. Variable ndaha'éi nombre térã valor ndojapói.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Seleccione cotas`, upéi cada uno extensión línea origen (`Seleccione el primer origen de la línea de extensión en un objeto`: extremo, línea medio, polilínea esquina, centro ajustar; Enter punto libre) térã radio, diámetro, quebrado radio ha arco longitud cota `Seleccione arco o círculo`. Cota objetos ndive atada: moviendo térã tamaño cambiando jave sigue, mismo paso deshacer medir de nuevo. Punto atado mano pe mover, objeto borrar, atadura oñemboguejy. Atadura DWG ha DXF 2000 CadCraft datos haguéicha guardado; ambue programa cota ordinaria ohechauka.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Seleccione cotas`. Atadura objetos ojeheja; nada mover.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Seleccione círculo o arco para agregar marca central`, Enter peve jey. Centro cruz ha curva más allá líneas centrales cuatro (tipo línea CENTER), capa actual línea sencilla; flecha tamaño ha escala global cota actual, UCS girado. Objeto mover jave ndoheja.

### CENTERLINE

Alias: `CL`. `Seleccione la primera línea`, `Seleccione la segunda línea`. Mokõi línea medio línea (ojoaporã bisectriz), ligeramente más larga, tipo línea CENTER. Línea sencilla: mokõi línea ndojeheja.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ndaipóri alias. Cada `Ingrese nuevo valor para … ⟨actual⟩` pregunta; **nuevo** cota tamaño fija: escala global, texto altura, flecha tamaño, decimales (8 peve), texto alrededor espacio, línea cota extensión, origen desfase. Ehecha [Fijar tamaños de cota](topic:dimension-settings).

### DIMLUNIT

Ajuste cota: formato nuevo cota solamente (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccional).

### DIMSTYLE y -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Estilo cota administrador: {{ui:Establecer actual}}, {{ui:Nuevo…}}, {{ui:Modificar…}}, {{ui:Renombrar…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar a lo seleccionado}}. Línea comandos `-DIMSTYLE`: `Estilo de cota [Restaurar/Guardar/Eliminar/Aplicar/Comparar/reNombrar/Listar]`. Ehecha [Fijar tamaños de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT y DIMTEDIT

`DIMEDIT` (`DED`): `Editar cota [Inicio/Nuevo/Girar/Oblicua] ⟨Inicio⟩`, upéi cotas (térã ya seleccionado). Nuevo texto pregunta (`<>` = medida); Girar ángulo (0 texto vuelve); Oblicua línea extensión ángulo X eje (Enter = ninguno; lineal ha alineada cota solamente). `DIMTEDIT` (`DIMTED`): `Texto de cota [Izquierda/Derecha/Centro/Inicio/Ángulo] ⟨Centro⟩`. Ehecha [Fijar tamaños de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Unidades en el texto de cotas nuevas [Unidades de plano/mm/cm/m/km]`, térã cota seleccionada jave `Unidades en el texto de las cotas seleccionadas`. Medida longitud unidad ojeheja unidad atrás (DIMLFAC ha DIMPOST sufijo); `D` unidades plano pe jey. Ehecha [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. `Longitud de arco: … Tipo: …` ohechauka, upéi `Seleccione primer punto [Longitud de arco/Objeto/Rectangular/Poligonal/A mano alzada]`. Rectangular `Seleccione la esquina opuesta`; Poligonal `Seleccione el siguiente punto (Enter cierra la nube) [Deshacer [U]]`; A mano alzada cursor sigue clic térã {{key:Enter}} peve; `O` `Seleccione objeto` ha `¿Invertir dirección? [Sí/No] ⟨N⟩` oporandu, objeto nube haguéicha ojapo. `A` `Ingrese la longitud de cada arco`. `R`, `P` ha `F` ojapóva nube tipo elegí. Resultado polilínea cerrada arcos.

### MLEADER

Alias: `MLD`; térã {{ui:Guía}}. `Seleccione la ubicación de la flecha de guía [Tamaño de flecha/Distancia de aterrizaje/Bloque]`, `Seleccione la ubicación de aterrizaje de guía`, upéi texto lugar cuadro pe (térã sin, `Ingrese texto (línea vacía ombohasa)`). `Bloque` bloque nombre pregunta ha multiguía texto en lugar bloque ohechauka. Más guía línea: {{cmd:MLEADEREDIT}}. DWG multiguía real guardado; DXF línea, flecha ha texto dibujado guardado.

### MLEADEREDIT

Alias: `MLE`. `Seleccione una multiguía`, upéi `Seleccione la ubicación de la flecha de guía [Quitar guías/Contenido de bloque/Contenido de texto]`: punto cada uno nuevo flecha desde mismo aterrizaje guía línea agrega, Enter peve. `Quitar guías` clic guía línea quita (multiguía mínimo peteĩ). `Contenido de bloque` bloque nombre pregunta ha texto lugar bloque (atributos pregunta); `Contenido de texto` texto vuelve. Cada guía línea grip propio. DWG guía línea opavave ha bloque peteĩ multiguía.

### MLEADERALIGN

Alias: `MLA`. `Seleccione multiguías`, upéi `Seleccione la multiguía para alinear [Distribuir/Espaciado/Usar espaciado actual]` ha `Seleccione dirección`. Otro multiguía aterrizaje (ha texto térã bloque) elegí aterrizaje línea dirección pe mueve; flecha dónde apunta mantene. `Espaciado` igual distancia ojapo; `Distribuir` mokõi punto pregunta ha ipype igual distribuye. Mokõi multiguía menos ndojapói.

### MLEADERCOLLECT

Alias: `MLC`. `Seleccione multiguías`, upéi `Seleccione la ubicación de la multiguía colectada [Vertical/Horizontal]` (Enter primer lugar mantene). Peteĩ multiguía varios gui: bloque contenido bloque nuevo ojapo ojehe fila térã columna ruete; texto contenido peteĩ nota linea cada uno ndive. Primer multiguía guía línea mantene; ambue quitado. Texto ha bloque mezcla ndojapói.

### TABLE

Alias: `TB`; térã {{ui:Anotar}} › {{ui:Más}} › {{ui:Tabla}}. Tabla ojapo: peteĩ objeto mover, copiar, girar, escalar, trazar como ambue, celdas datos haguéicha.

- `Ingrese número de filas de datos o [Pegar/Archivo/Estilo] ⟨3⟩`, upéi `Ingrese número de columnas ⟨3⟩`, `Altura de texto` ha `Esquina superior izquierda de la tabla`. Tabla peteĩ fila título (celda combinada) ha filas datos encima encabezado fila.
- `P`: planilla celdas portapapeles tabla (texto tab celdas entre). {{key:Ctrl+V}} celdas portapapeles ndive mismo, CadCraft copia pyahu ndaha'éi jave (térã CadCraft ndaiporiva ikuaa; upéi ohechauka). `F`: `.csv` térã tab archivo tabla. Primera fila encabezado; columna ancho texto ajuste.
- `S`: tabla estilo elegí (ver {{cmd:TABLESTYLE}}).
- Fila térã columna ndaha'éi número entero ndojapói, celdas máximo tabla (2.000 fila, 200 columna, 40.000 celda) ndojapói.
- {{cmd:EXPLODE}} tabla línea ha texto haguéicha. DWG tabla objeto real, ambue programa editable; DXF bloque dibujo haguéicha, CadCraft tabla haguéicha ojeabri jey.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; térã doble clic celda. Tabla editar.

- `Elija celda para escribir (Enter para terminar) o [Fila/Columna/Tamaño/Combinar/Separar/Alinear/Altura/Tipo/Borrar]`. Celda clic, térã tabla seleccionado nombre escribí (`B3`: columna B, fila 3; título fila 1). Navegador pe cuadro celda encima: {{key:Enter}} texto mantene, {{key:Tab}} próxima celda, {{key:Alt+Enter}} línea pyahu, {{key:Esc}} celda como estaba.
- `=` ndive texto fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, paréntesis ha `sqrt` `round` función. Celda valor ohechauka; celda mismo nombre, tabla afuera celda térã número ndaipóri fórmula `####` ohechauka ha línea comando por qué.
- `R` / `C`: `Insertar` térã `Borrar` fila térã columna clic celda (cuántos, arriba térã abajo, izquierda térã derecha). Fórmula celda oñemoĩ.
- `S`: columna ancho ha fila altura. Fila texto ndaipóri menos. Tabla seleccionada columna ha fila borde grip.
- `M`: celda punto gui otro punto combinar; `U`: separar. `A`: alineación (`TL` arriba izquierda … `MC` medio centro … `BR` abajo derecha). `H`: celda texto altura (0 = estilo). `K`: fila título, encabezado térã datos. `CL`: celda vacía.
- Tabla bloqueado capa, filas térã columnas opavave borrar, combinada celda dos parte partir ndojapói.

### TABLESTYLE

Alias: `TS`. Tabla estilos listar cuántas tabla oñeporu, upéi `Estilo de tabla: [Nuevo/Establecer/Editar/Borrar/Aplicar]`.

- Estilo título, encabezado ha datos fila texto altura, alineación, margen ha bordes (exterior, filas medio, columnas medio) guarda.
- `N` estilo actual gui hace ha actual; `S` actual fijar (tabla pyahu oñemboguejy); `E` editar: tabla ndive redibujado; `A` seleccionado tabla actual estilo; `D` borra (Standard ndaha'éi, actual ndaha'éi; tabla ojeporu aspecto mantene).
- Estilos DWG DXF ndive guardado.

### TABLEEXPORT

Tabla ohechauka CSV archivo guardar (fórmula valor haguéicha). `Seleccione una tabla`, térã antes seleccionado. Celda texto `=`, `+`, `-` térã `@` ndive comienza `'` ojerovia planilla ejecuta ndaha'éi.

### TABLEPASTE

Alias: `PASTETABLE`. Portapapeles planilla celdas gui tabla ojapo, upéi esquina superior izquierda pregunta. {{cmd:TABLE}} › `Pegar` haguéicha.

### DATALINK

Alias: `DL`. `Enlace de datos: [Nuevo/Listar/Quitar] ⟨Nuevo⟩`. `N` CSV archivo pregunta, tabla ojapo ha archivo nombre recuerda; `L` enlaces lista archivo, tamaño, cuándo leído ha cuántas tabla ojeporu; `R` enlace quita (tabla simple quedan).

### DATALINKUPDATE

Alias: `DLU`. Enlace archivo jey ojelee ha ligadas tablas jey lleno (fila columna agregado térã quitado). Navegador archivo solo ndaikatúi, archivo jey elegí oporandu. Varios enlace jave cuál oporandu.

### FIELD

Plano campo omoĩ: texto solo calcula. `Campo: [Fecha/Nombre de archivo/Hoja/Propiedad/Objeto/Expresión/Código] ⟨Fecha⟩`:

- `D`: ahora térã guardado, creado térã trazado fecha, formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: archivo nombre, extensión ndive térã ndaipóri. `S`: hoja número, título térã hoja cantidad. `P`: plano propiedad nombre gui ({{cmd:DWGPROPS}} ver). `O`: objeto elegí, upéi leer (área, longitud, perímetro, radio, diámetro, capa, nombre, x, y, texto, rotación, color) ha decimales. `E`: fórmula. `C`: texto código escrito haguéicha, `Hoja %<sheetnumber>% de %<sheetcount>%`.
- Upéi `Seleccione texto, celda tabla o bloque atributos poner (Enter: texto pyahu)`: texto elegí campo agregado; celda igual; bloque referencia atributo pregunta; {{key:Enter}} altura ha punto pregunta.
- Pantalla campo fondo gris claro; plot ha PDF nunca. Campo texto mano sobreescribir campo ombohasa. Campo calcular ndojapóva `####`.
- Objeto campo CadCraft objeto clave gui objeto encuentra (Configuración › CadCraft › Archivos amigables con combinación); clave apagada jave ndojapói.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Seleccione objetos cuyos campos actualizar (Enter: todos los campos) o [Configuración]`. `S` campos cuándo solos actualizan: `O` abrir, `S` guardar, `P` trazar, `R` regen (cuatro opción inicio), térã `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Plano propiedades lista, upéi `Cambiar: [Título/Asunto/Autor/Empresa/Palabras clave/Comentarios/Personalizado/Quitar/Salir]`. Primer seis Detalles del plano panel ohechauka; `U` propio nombre valor agregar, `R` peteĩ quita. Campos leen (`%<prop:title>%`, `%<prop:Client>%`) ha inmediato ojeheja. Nombre personalizado integrado térã `%`, `<`, `>`, comilla térã barra invertida ndojapói.

## Paramétrico

Ehecha [Restringir un plano](topic:constraints) ha [Usar parámetros y ecuaciones](topic:parameters). Restricciones {{ui:Modelo}} pestaña pe ojapo.

### GEOMCONSTRAINT y comandos GC

Alias `GCON`: `Ingrese tipo de restricción [Horizontal/Vertical/Perpendicular/Paralela/Tangente/Coincidente/Concéntrica/Colineal/Simétrica/Igual/Fijar] ⟨Horizontal⟩`, upéi comando indicaciones.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Seleccione un objeto [2Puntos] ⟨2Puntos⟩`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Seleccione el primer objeto`, `Seleccione el segundo objeto` (segundo mueve).
- {{cmd:GCCOINCIDENT}}: `Seleccione el primer punto [Objeto/Autoconstruir] ⟨Objeto⟩`, `Seleccione el segundo punto [Objeto] ⟨Objeto⟩`.
- {{cmd:GCFIX}}: `Seleccione punto [Objeto] ⟨Objeto⟩`.
- {{cmd:GCSYMMETRIC}}: `Seleccione el primer objeto [2Puntos] ⟨2Puntos⟩`, `Seleccione el segundo objeto`, `Seleccione la línea de simetría`.

### DIMCONSTRAINT y comandos DC

Alias `DCON`: `Seleccione cota asociativa para convertir [Lineal/Horizontal/Vertical/Alineada/Angular/Radial/Diámetro/Convertir] ⟨Alineada⟩`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Seleccione el primer punto de restricción [Objeto] ⟨Objeto⟩`, `Seleccione el segundo punto de restricción`, `Seleccione la ubicación de la línea de cota`, `Texto de cota ⟨d1=40⟩` (número, expresión, térã `nombre=expresión`).
- {{cmd:DCALIGNED}}: igual, `[Objeto/Punto y línea/2Líneas]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Seleccione arco o círculo`. {{cmd:DCANGULAR}}: `Seleccione la primera línea o arco`, `Seleccione la segunda línea`.
- {{cmd:DCCONVERT}}: `Seleccione cotas para convertir`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Seleccione objetos [Configuración]`. `S` distancia ha ángulo tolerancia pregunta.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Seleccione objetos`; restricciones quitado.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Seleccione objetos [Mostrar todo/Ocultar todo]`, upéi `[Mostrar/Ocultar]`.
- {{cmd:DCDISPLAY}}: `Ingrese una opción [Mostrar/Ocultar]`.

### PARAMETERS y -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) {{ui:Parámetros}} panel omombyta. `-PARAMETERS`: `Ingrese una opción [Nuevo/Editar/Renombrar/Eliminar/?] ⟨?⟩`.

### SWBOUT

Alias `SWMACRO`. Macro (.swb) descargar, SolidWorks pe modelo peteĩ boceto restringido haguéicha rehacer. Ehecha [Mover bocetos a y desde otros modeladores de piezas](topic:solidworks-sketches).

## Bloques

### ANNOSCALE

Alias: `CANNOSCALE`. Plano escala anotación ohechauka, anotativo objetos cuántos, upéi `Nueva escala de anotación`: `1:50`, `1:100`, `2:1`, número solo (`50` 1:50) térã plano propio escala nombre escribí. Anotativo texto ha cota opavave nueva escala imprime tamaño igual haguéicha omboguejy, peteĩ paso deshacer; anotativo ndaha'éi objeto mantene, lista escala nueva ndaipóri objeto ({{cmd:OBJECTSCALE}}) avei ndojeheja. Ehecha [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Seleccione objetos anotativos`, upéi `Escalas de anotación de objetos seleccionados [Agregar/Eliminar/Escala actual/Listar/eXit] ⟨Agregar⟩`. Anotativo texto ha cota anotación escalas lista guarda. `Agregar` ha `Eliminar` escala pregunta (`1:50`, `2:1`, número solo térã plano propio escala nombre); `Escala actual` plano anotación escala agrega; `Listar` objeto escala imprime. Viewport escala objeto lista ndive, objeto papel altura imprime tamaño pe ohechauka, pantalla ha trazado. Última escala ndojeliminá. Anotativo ndaha'éi objeto excluido: Propiedades pe Anotativo primero on. Listas DWG ha DXF CadCraft datos haguéicha guardado. Ehecha [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Mostrar objetos anotativos en todas las escalas [ON/OFF]`. On (plano inicio): anotativo objeto viewport térã modelo pe lista ndaha'éiva escala ha ojehechaukáva tamaño pe. Off: ohechauka ndaha'éi, modelo pe elegí ndojapói. Cambio peteĩ paso deshacer; archivo ndoguardái.

### SCALELISTEDIT

Alias: `SCALELIST`. `Lista de escalas [Agregar/Editar/Eliminar/Listar/Restablecer]` Enter peve. Agregar: `Nombre de escala`, `Unidades de papel`, `Unidades de plano`. Editar ha Eliminar escala nombre pregunta. Plano propio escala viewport ha trazado listas ndive, plano ndive guardado. Ehecha [Unidades, papeles y escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT y PEDIT

`SPLINE` (`SPL`): `Primer punto de la spline [Método/Objeto] (Puntos de ajuste)`. Ajuste: puntos curva pasa; `Cerrar`, `Deshacer`, upéi `Tangente inicial` ha `Tangente final` (punto térã {{key:Enter}}). Método › Vértices de control grado (1 gui 5) pregunta ha control polígono ndive dibujar. Objeto polilínea vértices ndive spline ojapo. `SPLINEDIT` (`SPE`): `[Datos de ajuste/Editar vértice/convertir a Polilínea/Abrir o Cerrar/Invertir/Deshacer/eXit]`; Datos de ajuste `[Agregar/Eliminar/Mover/Purgar/Tangentes/eXit]`; Editar vértice `[Agregar punto de control/Mover/Peso/eXit]`. `PEDIT` (`PE`): `[Cerrar/Abrir/Unir/Ancho/Ajustar/Spline/Enderezar/Generar tipo línea/Invertir/Deshacer/eXit]`, `M` varios objetos; líneas, arcos ha splines polilínea haguéicha ofrecidos primero. Ehecha [Splines y polilíneas](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Ingrese nombre del bloque`. Existe jave: `El bloque "…" ya existe. ¿Redefinir? [Sí/No] ⟨N⟩`.
- `Seleccione el punto base de inserción`
- `Seleccione objetos`. Peteĩ referencia nuevo bloque ojeguejy.

### WBLOCK

Alias: `W`, `-WBLOCK`. Bloque, objetos térã plano opavave DWG térã DXF archivo pyahu ojapo. `Fuente WBLOCK [Bloque/Plano completo/Objetos] ⟨Objetos⟩`:

- **Objetos**: `Seleccione el punto base de inserción` (nuevo plano origen), `Seleccione objetos`, upéi `Formato de archivo [DWG/DXF/R12 DXF]` ha `Nombre de archivo para el nuevo plano`, upéi `Qué hacer con los objetos [Conservar/Convertir en bloque/Eliminar]`. Convertir peteĩ referencia bloque nombre archivo ojeguejy; Eliminar borra.
- **Bloque**: `Bloque a escribir`. Bloque objetos ojehecha, base punto origen, bloques anidados avei.
- **Plano completo**: modelo espacio opavave objeto. Hojas ndojeguardái; hojas copia {{cmd:SAVEAS}} ojeporu.

Archivo nuevo capas, tipos línea, texto ha cota estilos ha bloques ojeporu objeto ndive ohechauka, plano unidades. DWG versión {{cmd:SAVEAS}} último ojeporu. Navegador pe archivo descarga; Studio pe guardar diálogo ohechauka.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Definir atributo}}. Modos ohechauka, upéi `Ingrese una opción para cambiar (Enter al terminar) [Invisible/Constante/Preajustado]`, `Ingrese nombre de etiqueta de atributo`, `Ingrese indicación de atributo`, `Ingrese valor por defecto del atributo` (`Ingrese valor de atributo` constante jave), `Seleccione punto inicial del texto`, `Seleccione altura del texto`, `Seleccione ángulo de rotación del texto`. {{cmd:BLOCK}} atributo definición bloque pe ojeĥe.

### EATTEDIT y ATTEDIT

`EATTEDIT` (`DDATTE`, térã atributos referencia doble clic; {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar atributos}}): `Seleccione una referencia de bloque con atributos`, upéi {{ui:Editar atributos}} diálogo. `ATTEDIT` (`ATE`, `-ATTEDIT`): referencia mismo, upéi `<indicación> (<ETIQUETA>) <valor>` cada atributo; {{key:Enter}} valor mantene. Ehecha [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Actualizar atributos de qué bloque referencias [Nombre/Seleccionar/Todos] ⟨Seleccionar⟩`. Valores mantenidos; atributo pyahu valor defecto, quitado ha okañy, ubicaciones reinician.

### BATTMAN

{{ui:Bloques}} › {{ui:Más}} › {{ui:Administrador de atributos}}. Diálogo: bloque, atributos (etiqueta, indicación, defecto, modos, orden), {{ui:Actualizar las referencias (valores conservados)}}, {{ui:Aplicar}}.

### REFEDIT y REFCLOSE

{{ui:Bloques}} › {{ui:Más}} › {{ui:Editar en su lugar}}. `REFEDIT`: `Seleccione la referencia de bloque para editar en su lugar` (térã selección). `REFCLOSE`: `Guardar cambios en "…" [Guardar/Descartar] ⟨Guardar⟩`; barra {{ui:Guardar el bloque}} ha {{ui:Descartar}} mismo. Edición entera peteĩ paso deshacer. Ehecha [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT y BCLOSE

`BE`; térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar bloque}}. `Ingrese nombre de bloque para editar ⟨bloque referencia elegida⟩` bloque editor abre. `BCLOSE` `Cerrar editor de bloque en "…" [Guardar/Descartar] ⟨Guardar⟩`; banner {{ui:Guardar bloque}} ha {{ui:Descartar cambios}} mismo. Editor opavave peteĩ paso deshacer.

### VIEWBASE

Alias: `FLATSHOT`. 3D pestaña pe sólidos 2D plano vista: `Vista [Frente/Arriba/Derecha/Izquierda/Atrás/Abajo/Iso]`, `Líneas ocultas [Mostrar/Ocultar]`, escala (`1:20`, `2:1`; {{key:Enter}} hoja ajustado elegido), upéi vista centro. Peteĩ referencia bloque, visibles bordes VIEW-VISIBLE, ocultas punteadas VIEW-HIDDEN. Ehecha [Vistas planas en una hoja](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; térã {{ui:Todas las hojas en un PDF}} {{ui:Trazar a PDF}} diálogo. `Hojas para trazar [Todas/Algunas]`: {{key:Enter}} opavave hoja trazar, `S` nombres coma ndive. Peteĩ PDF, hoja marcador ha página. Ehecha [Cada hoja en un PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Panel izquierdo {{ui:Conjunto de planos}} sección ohechauka: muchos planos hojas, numerada ha títulos, bloques título conjunto ndive llenado, peteĩ PDF publicado. Ehecha [Conjuntos de hojas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG térã DXF elegí, upéi insertar punto. {{cmd:XREF}} (`XR`, `-XREF`): `Planos vinculados [?/Adjuntar/Recargar/Enlazar/Desvincular] (Enter: ?)`; enlace más de uno jave referencia elegí térã `N` nombre escribí. Ehecha [Planos vinculados](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Contar bloques}}. `Seleccione una referencia de bloque para contar, o [Todos/Exportar] (Enter: Todos)`: clic elegido bloque referencia opavave seleccionar y contar espacio pe; {{key:Enter}} térã `A` opavave lista; `E` upéi `C` (conteo) térã `A` (atributos) CSV descargar. Ehecha [Contar bloques y exportar planilla](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Ingrese nombre de bloque o [Archivo/Biblioteca] ⟨último bloque⟩` (mayúscula ndaipóri importante). `F` DWG térã DXF pregunta, upéi plano completo térã bloque; nombre ojeporu `Mantener existentes` térã `Renombrar`. `L` biblioteca panel omombyta.
- `Seleccione punto de inserción [Escala/Girar]`. `S` `Seleccione factor de escala`, `R` `Seleccione ángulo de rotación`; ambos recuerda.
- Bloque objetos ojoaporã repetido sin bloque ojeporu, línea cuántos lugar sugerido ohechauka, indicación `suGgested` agrega: `G` ohechauka; clic peteĩ cerca bloque pe, `A` opavave, {{key:Enter}} volver. Vecinos rotación ha valor defecto atributo ojeporu. Espacio abierto más de 20.000 objeto ndojeheka.
- Upéi bloque atributos cada uno `Ingrese <indicación> (<ETIQUETA>) <defecto>`. Ehecha [Atributos de bloque](topic:attributes).

### LIBRARY

Alias: `LIB`. Biblioteca panel omombyta: elemento lugar, actualizaciones, biblioteca créditos. Pregunta nada. Ehecha [Insertar desde archivo o biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; térã {{ui:Elemento 3D}} biblioteca {{ui:Estándar}} pestaña pe. `Tamaño de sección ⟨W12x26⟩` (pestaña lista haguéicha), upéi `Punto inicial [Columna]` ha `Punto final`: 3D pestaña pe sólido elemento dos punto entre, suelo encima. `C` columna base punto ha altura pregunta. Peteĩ paso deshacer. Ehecha [Colocar secciones de acero y piezas estándar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Esquina superior izquierda de la lista de piezas`, upéi `Altura de texto ⟨2.5⟩`: biblioteca gui colocado opavave pieza estándar ha sección acero tabla dibuja (número ítem, cantidad, pieza, norma, tamaño, longitud, material, masa). Peteĩ paso deshacer. Ehecha [Colocar secciones de acero y piezas estándar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Bloque definiciones ndaipóri ojeporu borra. Pregunta nada.

### DELBLOCKS

Térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Eliminar bloques}}. `Seleccione bloque para eliminar [Nombre/eXit]`: bloque referencia elegí, `N` bloques lista filtro (varios elegí), térã `X` / {{key:Enter}} ombohasa. Opavave referencia — modelo, cada hoja ha bloques adentro — upéi definición, línea comandos eliminado ha ndojapóva ohechauka. Nombre ndaipóri bloque ha enlace plano ndojeporandúi. Próximo bloque pregunta; comando entero peteĩ paso deshacer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} copiado ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) peteĩ bloque haguéicha pegar: inserción punto elegí, peteĩ nuevo bloque referencia lugar pe, seleccionado. Bloque nombre propio (`A$C` ha número); {{cmd:RENAME}} nde nombre ome'ẽ. Peteĩ paso deshacer referencia ha bloque oñemboguejy.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} reemplazar bloque ha lugar pe ponéva bloque pregunta (`?` bloques lista), opavave referencia modelo, cada hoja ha bloques adentro cambia. Cada referencia lugar, escala, rotación, capa ha atributos ambos bloques valor mantene; nuevo bloque atributos peteĩ defecto ojepyso, valores descartados ohechauka. Viejo bloque ndojeporúi jave quitar ofrece. Vinculado plano ha bloque sí mismo adentro ndojapói. Peteĩ paso deshacer.

### MINSERT

{{cmd:MINSERT}} bloque filas ha columnas: bloque nombre, punto inserción, escala, rotación, filas ha columnas cantidad, ente distancia. Conjunto entero rotación gui girado. Cada uno peteĩ referencia (10.000 gui mboyve), upéi mover térã borrar ojeporandúi.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Panel de bloques}}. {{ui:Bloques}} panel cursor filtro pe ohechauka. Cada bloque imagen; pyahu colocado primero. Filtro costado botón lista térã cuadrícula imagen cambia. Imagen clic (térã {{ui:Insertar}}) bloque {{cmd:INSERT}} haguéicha; térã plano pe arrastrar soltar lugar.

{{ui:Bibliotecas}}, lista debajo: {{ui:Agregar un plano}} propio DWG térã DXF archivo elegí, bloques imagen ndive lista, plano entero peteĩ bloque. Peteĩ colocado definición (anidado bloques capas avei) plano pe copia, {{cmd:INSERT}} `Archivo` opción haguéicha; igual definición bloque ya ojeikuaa ojeporu pregunta ndive, nombre igual pero diferente `Mantener existentes` térã `Renombrar`. Navegador pe archivo página cierra mboyve oĩ. CadCraft Studio pe {{ui:Agregar una carpeta}} carpeta planos lista, clic abre, archivo carpeta recuerda. Pequeño x biblioteca lista quita; archivo ndoheja. Compartido {{ui:Biblioteca}} otro: ver [Insertar desde archivo o biblioteca](topic:insert-from-file-and-library).

### BCONVERT

Térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Convertir repeticiones en bloques}}. Repetido geometría buscar, cada copia peteĩ referencia bloque ojeguejy.

- `Seleccione objetos que se repiten, o [Bloque]`: peteĩ copia objetos. `B` bloque existente nombra, objetos suelto copias buscar.
- `Una copia puede ser: espejada = No, escalada = No; capa, color, tipo línea y grosor = Igual … [Espejado/Escalado/Propiedades]`: `M`, `S` ha `P` copia cuál contar opción; {{key:Enter}} busca. Configuración recuerda.
- `Nombre para el nuevo bloque ⟨Bloque1⟩`, upéi `Especifique el punto base del bloque` ({{key:Enter}} selección esquina inferior izquierda).
- Cuántos otro objeto conjunto geometría igual, reemplazar opavave resalta, `Sí/No` pregunta.

Copia misma objetos mover ha girar cualquier ángulo (ha espejo térã escala factor uno jave): cada objeto contraparte millonésima selección tamaño pe; referencia rotación ha escala (espejo negativo Y escala), objetos capa. Bloqueado capa objetos quedan ha cuentan. Espacio abierto (modelo térã hoja) busca. Muy grande búsqueda límite trabajo pe para ha ohechauka. Peteĩ paso deshacer.

### BSEARCH

Térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Buscar bloques}}. `Buscar bloques por [Nombre/Atributo/Geometría] ⟨Nombre⟩`:

- `N`: bloque nombre parte, térã `*` ha `?` patrón. Cada bloque referencia aquí ha plano opavave lista.
- `A`: atributo valor, térã `TAG=valor`. Referencias atributo valor ojeporu bloque, valores ohechauka. Constante atributo cuenta.
- `G`: objetos seleccionar, térã peteĩ bloque referencia, forma 85% parecido bloque mejor primero lista. Tamaño, rotación ha espejo ndaporandúi. Medida puntos contornos distancia comparar, parecidos ojuhu; exacto copia {{cmd:BCONVERT}}.

Espacio abierto referencias seleccionado, próximo comando pe.

### BREPLACE

Térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Reemplazar bloques}}. `Reemplazar [Seleccionados/Todos]`: `S` seleccionado bloque referencia nombre bloque ndive reemplaza; `A` bloque ha reemplazo pregunta opavave referencia cambia, {{cmd:BLOCKREPLACE}} haguéicha (mismo código). Referencia lugar, escala, rotación, capa ha ambos bloque atributos valor mantene; nuevo bloque lugar ndaha'éi valor descartado nombrado. `?` bloques lista. Peteĩ paso deshacer.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; térã {{ui:Bloques}} › {{ui:Más}} › {{ui:Extracción de datos}}. Bloques, atributos ha objeto propiedades tabla térã CSV archivo lista.

- Selección ojeporu, térã `Seleccione objetos (Enter: todo este espacio)`.
- `Lista: [Bloques/Objetos/Todos]` selección ambos jave. Bloque sin nombre, tabla ha lista materiales ndojapóiva.
- Columnas elegir lista ohechauka (nombre, tipo, capa, X, Y, rotación, escala, longitud, área, color, tipo línea, espacio, atributo etiqueta cada uno), upéi `Columnas, por nombre o número separadas por coma`. {{key:Enter}} estrellado elegido: bloques nombre ha opavave atributo; objetos tipo, capa ha longitud.
- `¿Juntar filas idénticas con cantidad? [Sí/No] ⟨Sí⟩`, upéi `Poner la lista en: [Tabla/Csv] ⟨Tabla⟩`. Tabla normal tabla ({{cmd:TABLEDIT}} editar) ha ndaiporiva en vivo: plano cambio jave comando jey ejecutar.
- Lista ndaporandúi columna ndojapói. Tabla 1.999 fila datos; CSV archivo opavave.

### COUNTTABLE

Selección (térã espacio abierto) bloque referencia conteo, tabla (`Bloque`, `Cantidad`) térã CSV archivo pe. Plano pe seguido conteo {{cmd:BOMTABLE}} ehecha.

## Hojas y trazado

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; térã plano debajo {{ui:+}} botón. Borde, bloque título ha peteĩ viewport ISO A3 (térã pulgadas pie plano jave Tabloid) pe hoja pyahu. Pregunta nada.

### MVIEW

Alias: `MV`. Hoja pe nomás ({{cmd:VPORTS}} hoja pe mismo).

- `Seleccione esquina del viewport [Poligonal/Objeto]`, `Seleccione la esquina opuesta`. Viewport modelo entero estándar escala pe ohechauka.
- `P` (Poligonal): contorno esquina clic (`Deshacer [U]`, `Cerrar`), {{key:Enter}} ombohasa. Tres esquina menos ndojapói.
- `O` (Objeto): `Seleccione un objeto cerrado para el contorno del viewport`: polilínea cerrada, círculo térã elipse hoja pe. Viewport forma tomar (curva segmento corto recto); objeto igual mantene. Cerrado ndaha'éi ndojapói.

### VPCLIP

Hoja pe ojapo viewport recortar. `Seleccione viewport para recortar` (térã antes selecciona), upéi `Seleccione el objeto para recortar [Poligonal/Eliminar]`:

- Clic polilínea cerrada, círculo térã elipse, térã {{key:Enter}} (térã `P`) polígono esquina clic.
- `D` (Eliminar, viewport recortado jave) rectángulo jey: contorno rodeo caja.
- Viewport mostrado papel pe ndojeheja, escala mantiene. Modelo dibujado trazado contorno adentro, borde contorno ndive. Peteĩ paso deshacer.
- Recortado viewport esquina contorno grip, centro ha caja cuatro esquina avei (caja esquina arrastre contorno estira). Propiedades Contorno: Rectángulo térã Recortado esquina cantidad ohechauka.
- DWG ha DXF 2000 CadCraft contorno guardado; ambue programa viewport rectángulo haguéicha; DXF R12 rectángulo solo.
- Modelo pestaña pe viewport hoja pe ohechauka.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} hoja avei igual; {{ui:Vista}} › {{ui:Más}} › {{ui:Dividir lado a lado}}, {{ui:Dividir apilado}}, {{ui:Cuatro paneles}}, {{ui:Un panel}} ojapo. Modelo pe: `Ingrese número de paneles [Simple/2/3/4] ⟨3⟩`; `2` `[Horizontal/Vertical] ⟨Vertical⟩` (Vertical = lado a lado), `3` `[Izquierda/Derecha] ⟨Derecha⟩` (grande panel dónde). Cada panel propio vista ha espacio; clic panel activo. Hoja pe {{cmd:MVIEW}}. Ehecha [Dividir la pantalla](topic:split-screen).

### VPVIEW

Ndaipóri alias. Hoja pe nomás.

- `Seleccione viewport` (seleccionado jave ndojeporandúi), upéi modelo pe: `Seleccione la primera esquina de la ventana a mostrar`, `Seleccione la esquina opuesta`.

### UCS

Ndaipóri alias. Nde propio coordenadas sistema; edición ndaha'éi. `Seleccione origen del UCS [Nombrado/Objeto/Anterior/Mundo/Z/3puntos] ⟨Mundo⟩`: punto nuevo origen, upéi `Seleccione punto en el eje X (Enter mantiene el ángulo)`. `Z`: `Seleccione ángulo de rotación alrededor del eje Z ⟨90⟩`. `3`: origen, punto eje X positivo, punto Y positivo lado. `OB`: `Seleccione objeto para alinear UCS`. `NA`: `[Restaurar/Guardar/Eliminar/?]` ha nombre. Vista girado nuevo X eje horizontal. Ehecha [Girar la vista y usar tus propias coordenadas](topic:ucs-and-turned-view).

### PLAN

Ndaipóri alias. `Ingrese una opción [UCS actual/Ucs/Mundo] ⟨UCS actual⟩`: panel activo vista girar UCS X eje (térã mundo) horizontal. Plano ndojehejái.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ndaipóri alias; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Girar vista 90° a la izquierda}}, {{ui:Girar la vista 90° a la derecha}}, {{ui:Volver al sistema mundial}}. `UCS Z -90`, `UCS Z 90` ha `UCS W` mismo, vista seguido.

### VPLAYER

Ndaipóri alias. Hoja térã viewport adentro. `Ingrese una opción [?/Congelar/Descongelar/Restablecer/Vpvisdflt]`: `F`, `T`, `R` capa nombre pregunta (coma, `*` ha `?` comodín), upéi `[Todos/Seleccionar/Actual] ⟨Actual⟩` viewport; Restablecer capa "congelada en viewports nuevos" defecto; `V` defecto fija (`[Congelado/Descongelado]`), {{cmd:MVIEW}} ojeporu. `?` viewport actual congelado capas ohechauka. Capas panel viewport columna peteĩ viewport haguéicha. Ehecha [Congelar una capa en un viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; térã viewport adentro doble clic. Hoja pe nomás. Viewport gui modelo trabajar: elegido, hoja peteĩ nomás, térã `Clic dentro del viewport para trabajar`. Adentro desplazar ha zoom viewport vista cambia (pantalla bloqueado mantene, hoja mover); vista nueva peteĩ paso deshacer. Ehecha [Trabajar en el modelo a través de un viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; térã viewport afuera doble clic, térã plano debajo pestaña clic. Hoja pe volver.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; térã {{key:Mod+P}}. {{ui:Trazar a PDF}} diálogo omombyta. Ehecha [Trazar a PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; térã {{ui:Editar tablas…}} {{ui:Trazar a PDF}} diálogo pe. {{ui:Tablas de estilo de trazado}} omombyta: color mba'éicha imprime (color, gris, tinta, grosor), plano ndive guardado. Ehecha [Tablas de estilo de trazado](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} hoja ha modelo ryepýpe viewport rupi objetos mover, escalado ha girado otro lado igual haguéicha. Hoja pe objetos seleccionado modelo ho (hoja mboyve viewport elegí). Modelo viewport rupi ({{cmd:MSPACE}}) trabajando, seleccionado objetos hoja ho. Cuánto grande térã pequeño ohechauka. Viewport hoja pe quedan. Peteĩ paso deshacer.

### ISODRAFT

{{cmd:ISODRAFT}} dibujo isométrico `ON` térã `OFF`, térã `Izquierda`, `Superior` térã `Derecha` plano pe. Ojapóva jave: Orto ({{key:F8}}) línea plano mokõi eje (izquierda: 90° ha 150°; superior: 30° ha 150°; derecha: 30° ha 90°), rastreo polar ({{key:F10}}) mismo ejes, ajuste cuadrícula ({{key:F9}}) cuadrícula isométrica, cuadrícula ({{key:F7}}) líneas 30°, 90° ha 150°. {{cmd:ELLIPSE}} `Isocírculo` agrega: centro ha radio (térã `Diámetro`) elipse círculo plano pe ohechauka. Plano plano sigue: ayuda vista pictórica, 3D modelo ndaha'éi. Sesión pe, archivo ndoguardái.

### ISOPLANE

{{cmd:ISOPLANE}} dibujo isométrico plano elegí: `Izquierda`, `Superior` térã `Derecha`. Enter próximo plano. Isométrico activo jave, {{key:F5}} comando medio igual; desactivo jave {{key:F5}} navegador pe.

## Consulta

### CAL

Cálculo valor ohechauka, longitud escribí cualquier lugar haguéicha lee.

- `Expresión`: escribí, ejemplo `12'6"+3/4"` térã `(24'-0")/3`, {{key:Enter}}. CadCraft ohechauka `= 12'-6 3/4"   (150.75 unidades de plano)`. Ehecha [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Medir distancia}}.

- `Seleccione primer punto`, `Seleccione segundo punto`. Distancia, ángulo, Delta X ha Delta Y ohechauka.

### AREA

Alias: `AA`; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Superficie}}. Área ha perímetro ohechauka.

- `Seleccione primera esquina [Objeto/Agregar área/Restar área] ⟨Objeto⟩`
  - Clic térã escribí esquina; `Seleccione siguiente punto (Enter cierra) [Deshacer [U]]` {{key:Enter}} contorno cierra. `U` última esquina emombyta.
  - {{key:Enter}} térã `O`, upéi `Seleccione objeto`: círculo (circunferencia ohechauka), elipse, polilínea (abierta área recto línea cierra, longitud ohechauka) térã sombreado (agujero quitado).
  - `A` (Agregar área) ha `S` (Restar área) total corriente: indicación `(modo SUMAR)` térã `(modo RESTAR)`, cada área suma térã resta, `Área total = …` cada una después. Modo pe `O` objeto elegí Enter peve, primera indicación Enter ombohasa.

### MEASUREGEOM

Alias: `MEA`. `Ingrese una opción [Distancia/Radio/Ángulo/Área] ⟨Distancia⟩`; medida rire pregunta jey, `eXit` defecto.

`Rápido` puntero rodeo medir cursor mover: distancia objeto más cerca derecha, arriba, izquierda ha abajo (UCS eje pe), mientras ohechauka, dos vecino recto encuentra ángulo. Clic cuatro distancia, claro ancho ha altura, ángulo historial pe; Enter opción volver. Pantalla lee.

- `D`: mokõi punto, {{cmd:DIST}} haguéicha.
- `R`: `Seleccione arco o círculo`; radio ha diámetro ohechauka.
- `A`: arco (ángulo incluido), línea ha segunda línea (ángulo ente, lejano extremo pe), térã {{key:Enter}} ha mbohapy punto (vértice, upéi dos extremo).
- `AR`: {{cmd:AREA}} haguéicha, peteĩ área.

### ID

Ndaipóri alias. `Seleccione punto`; X ha Y ohechauka.

### LIST

Alias: `LI`, `LS`. `Seleccione objetos`; cada objeto tipo, capa ha medida principal ohechauka.

### MASSPROP

{{cmd:MASSPROP}} seleccionado regiones ha objetos cerrados sección propiedades ohechauka, juntos: área, perímetro, caja delimitadora, centroide, momentos inercia X ha Y ejes origen, producto inercia, radios giro, mismo momentos centroide, ejes principales momentos ha dirección. Región agujero agujero ojeikuaa. Cifras plano unidades; líneas ha arcos contornos exacto; elipses ha splines segmento corto medir ha ohechauka. Informe rire archivo texto pe escribir pregunta. Cerrado ndaha'éi objetos excluido, cuántos ohechauka.

## Vista, archivo y otros

### ZOOM

Alias: `Z`.

- `Seleccione esquina de ventana, ingrese factor de escala (nX) [Extensiones/Todo/Ventana/Anterior/Escala/Centro]`. Mokõi esquina clic ventana. `E`, `A` térã Enter: plano entero.
- `P` (Anterior, térã barra {{ui:Anterior [P]}}) vista antes vuelve, pestaña 10 vista peve; rueda pasos térã desplazamiento peteĩ vista.
- `2`, `2x` térã `0.5x` número (térã `S` ha número) pantalla medio pe ampliar térã reducir factor.
- `C` `Ingrese punto central` ha `Ingrese altura o magnificación (nX)` pregunta.

### PDFATTACH, PDFIMPORT y comandos PDF

Alias: `PDFATT` {{cmd:PDFATTACH}}, `PDFIM` {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} PDF página plano subyacente (archivo, página, inserción punto, escala, rotación); {{cmd:PDFIMPORT}} página líneas, curvas, rellenos ha texto objeto plano pe, PDF nombre capas, tamaño real, escrito escala térã mokõi punto ha distancia real escala. {{cmd:PDFCLIP}} recorta subyacente, {{cmd:PDFADJUST}} desvanece, contraste, monocromo térã apaga, {{cmd:PDFLAYERS}} PDF capas cambia, {{cmd:PDF}} CadCraft plano subyacente archivos vuelve. Ehecha [Subyacentes PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Dibujo autocompletado: comando ndojapóva jave, gris fantasma plano patrones dice que sigue. {{cmd:AUTOCOMPLETE}} `On` térã `Off` (térã Configuración › CadCraft) térã `Show` ahora sugiere. **Tab** fantasma peteĩ paso deshacer, **Esc** plano cambia peve oculta. Tres cosa busca objeto nuevo: copia siguiente igual dos térã más veces paso par (muros, columnas, escalera contrahuella ha huella), polilínea escalera siguiente paso, habitación térã muro cadena faltante lado. {{cmd:LINE}} térã {{cmd:PLINE}} medio fantasma **punto siguiente**: escalera siguiente paso (contrahuella, huella, contrahuella…), rectángulo cuarto esquina, cerrar punto, térã peteĩ igual paso. Cursor cerca **Tab** oprime, clic haguéicha; sigue térã Enter. Computadora reglas, modelo ndaha'éi.

### AUTOSHEET

Alias: `ASH`. Hojas autodiseño. {{cmd:AUTOSHEET}} plano piezas (nombre vistas, modelo separadas piezas, térã modelo entero), papel tamaño elegí (térã dado), cada pieza estándar escala (peteĩ escala opavave térã cada máximo) ha vistas filas hoja pyahu leyenda ha bloque título nombre escala ndive. Hoja peteĩ ndojapo hoja aparte. Peteĩ paso deshacer. Computadora reglas, modelo ndaha'éi.

### PHOTOSKETCH

Alias: `PSK`. Foto boceto plano. Papel mano boceto foto (JPEG, PNG térã TIFF) elegí. {{cmd:PHOTOSKETCH}} papel cuatro esquina encuentra, perspectiva enderezada, papel tamaño (`Papel`, térã cercano estándar) ha boceto `Escala` (1 : n), upéi líneas, arcos ha círculos lápiz líneas trazado, color lápiz capa (negro, rojo, azul, verde). Papel borde ndojuhúi jave foto entero hoja haguéicha tomado ohechauka. Letras omitido. Peteĩ paso deshacer. Computadora clásico procesamiento imagen, modelo ndaha'éi, nada envia.

### AUTODIM

Alias: `ADIM`. Reglas autoacotar. {{cmd:AUTODIM}} seleccionado objetos (térã plano entero) nivel ha plomo borde gui cota: `Lados` elegí costado cadena cota, costado afuera tamaño total, abertura ancho (muro línea ndive brecha), orificio tamaño diámetro, `Cuadrícula` línea cuadrícula espacio. Cota ya ojapo nuevo ndojapói. Peteĩ paso deshacer. Computadora reglas, modelo ndaha'éi.

### GRIDMOVE

Alias: `GM`. Cuadrícula línea mover conjunto lleva. {{cmd:GRIDMOVE}} cuadrícula línea (capa nombre grid térã axis) mover ha colgado: línea extremo muros estira, línea mismo muros entero mover, columnas (línea bloque referencia térã círculo), burbuja ha etiqueta mover, puntos línea cota nuevo espaciado. Mokõi punto (cruzando línea parte) térã `Distancia`. Peteĩ paso deshacer opavave. Computadora reglas.

### DETAILS

Alias: `DET`. Detalles encuentra. {{cmd:DETAILS}} tu estudio propio detalle: `Agregar` plano bloque lista, `Listar` ha `Quitar` manejar, `Buscar` seleccionado (térã último dibujado) capa palabra, bloque nombre, sombreado patrón ha nota detalle nombre ndive clasifica, ventana cabeza pestillo detalle. Número ha punto elegí colocar. `Sugerencia` (Configuración › CadCraft avei) ON, detalle coincide algo seleccionado barra estado peteĩ línea. Lista navegador pe, computadora pe guardado, buscado. `Compartir` Documentos carpeta pe avei (`.cadcraft/firm-details.json`, cada bloque plano): `Traer` equipo tiene ndaguerekói agrega, `Enviar` tenéva equipo ndaguerekói agrega, `Ambos` ambos, nada ambos lado quita. Documentos carpeta primero abrir ({{cmd:DOCUMENTS}}); Team Cloud Plan carpeta jave equipo opavave lista compartido. Biblioteca panel detalle ítem **Agregar a mis detalles de la empresa** botón lista mismo ho. Computadora palabra ha ndaipórivaekue modelo.

### SKETCHFIX

Alias: `SKF`. Lápiz bosquejos precisos geometría. Peteĩ mano alzada trazo presionar arrastrar (lápiz, mouse térã dedo), upéi Enter. Cada trazo línea, círculo, arco, rectángulo térã polilínea haguéicha lee: casi horizontal ha vertical líneas exacto horizontal vertical, cerrado redondo trazo círculo, cerrado cuatro ángulo recto esquina rectángulo, trazo extremo juntar plano extremo ya. Peteĩ paso deshacer. Computadora reglas, modelo ndaha'éi.

### SCANATTACH y comandos hoja escaneada

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} alias ndaipóri. Imagen pe ojapo, cada peteĩ paso deshacer. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (peteĩ página térã opavave) térã PDF página imagen omoĩ. {{cmd:SCANSCALE}} mokõi punto elegí ha distancia real escala. {{cmd:SCANALIGN}} mokõi punto mover, girar (`Escalar la hoja para ajustar` Sí/No). {{cmd:SCANDESKEW}} hoja líneas largas ángulo ohechauka, `Aceptar` térã `Valor` jave hoja gira. {{cmd:SCANCLEAN}} blanco negro (`Umbral` Auto/Adaptativo/Nivel, `Manchas`) ha `Ejecutar`. {{cmd:SCANCROP}} ventana conserva. {{cmd:SCANERASE}} `Rectángulo`, `Polígono` térã `Lazo` borra. {{cmd:SCANTRACE}} líneas ha arcos capa pyahu trazar (`Tolerancia`, `Ventana`, `Arcos`, `Restos`, `Ejecutar`) ha ohechauka encontrado ha ráster quedado. {{cmd:SCANINFO}} archivo original ha pasos lista. {{cmd:RASTERSNAP}} hoja escaneada líneas ajuste ON térã OFF. Ehecha tema Dibujos escaneados y trazado.

### REGEN y REGENALL

Alias: `RE` {{cmd:REGEN}}, `REA` {{cmd:REGENALL}}. Plano gui pantalla dibujado reconstruir: {{cmd:REGEN}} ojeuhaꞏe pestaña (hoja pe, viewport modelo avei), {{cmd:REGENALL}} opavave pestaña, pantalla dividido panel ha plano abierto. Pantalla desactualizado ohechauka jave muy grande script cambio térã asistente cambió; plano ndojehejái, ndaipóri deshacer.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Ingrese una opción [?/Restaurar/Guardar/Ventana/Eliminar] ⟨Restaurar⟩`, upéi vista nombre. `S` pantalla vista guarda, `W` ventana elegí, `R` vista guardado muestra, `D` peteĩ borra, `?` pestaña vistas lista. Nombre existente guardado reemplaza; cada cambio peteĩ paso deshacer. Vistas guardado pestaña pertenecen. DWG ha DXF archivos guarda (VIEW tabla); hoja vistas primera hoja regresan, archivo ndaecí cuál.

### UNDO y REDO

Alias: `U` {{cmd:UNDO}}; {{cmd:REDO}} alias ndaipóri. {{key:Mod+Z}} ha {{key:Mod+Y}} avei.

### LAYER

Alias: `LA`. {{ui:Capas}} panel omombyta.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Ingrese tipo de línea para objetos nuevos` — `ByLayer`, `ByBlock` térã nombre (`?` lista: Continuous, plano propio, DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE `2` (mitad) ha `X2` (doble) tamaño). {{cmd:LWEIGHT}} (`LW`): objetos nuevos grosor mm, térã `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): plano tipo línea escala (deshacer posible). {{cmd:LWDISPLAY}} (`LWT`): `Mostrar grosores [ON/OFF]` — barra estado {{ui:LWT}} botón haguéicha. Ehecha [Grosores de línea y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Ingrese tipo de objeto para renombrar [Capa/Bloque]`, `Ingrese nombre anterior`, upéi nombre nuevo; objetos térã referencias seguido. {{cmd:LAYMRG}}: `Seleccione objeto en la capa a fusionar o [Nombre]` Enter peve, upéi `Seleccione objeto en la capa destino o [Nombre]` ha `Y`. {{cmd:LAYDEL}}: `Seleccione objeto en la capa a eliminar o [Nombre]`, upéi `Y`: capa ha opavave objeto (capa 0, DEFPOINTS térã actual ndaha'éi). Peteĩ paso deshacer cada. Ehecha [Organizar un plano con capas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Objeto elegí capa; {{ui:Capas}} panel {{ui:Herramientas}} menú avei. {{cmd:LAYISO}}: `Seleccione objetos en la(s) capa(s) a aislar`, Enter: otros capa apagado. {{cmd:LAYUNISO}} encender. {{cmd:LAYOFF}} ha {{cmd:LAYFRZ}}: `Seleccione un objeto en la capa a apagar` (térã congelar), jey jey; `U` último deshacer, {{key:Enter}} ombohasa. {{cmd:LAYMCUR}}: `Seleccione objeto cuya capa será actual`. {{cmd:LAYON}} opavave encender, {{cmd:LAYTHW}} opavave descongelar. Cada peteĩ paso deshacer. Ehecha [Organizar un plano con capas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} plano vacío; {{cmd:OPEN}} DWG térã DXF abrir, cada uno pestaña plano arriba (sin cambios plano nuevo pestaña ndoheja). Cambios sin guardar pestaña cerrar pregunta. Ehecha [Dividir la pantalla](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, {{key:Mod+S}} avei) plano formato copia descargar: DWG DWG gui abierto, DXF DXF gui. Plano nuevo guardar como último navegador elegido, térã DWG.

{{cmd:SAVEAS}} ({{key:Mod+Shift+S}} avei) {{ui:Guardar una copia como}} diálogo omombyta: {{ui:DWG}} ha {{ui:Versión}}, {{ui:DXF R12}} térã {{ui:DXF 2000}} elegí, upéi {{ui:Guardar}}. Elección plano ha navegador plano nuevo.

{{cmd:DXFOUT}} siempre DXF R12 copia descargar, {{cmd:SAVE}} formato cambiar ndaporandúi.

Ehecha [Archivos: qué abre, qué guarda](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Seis paso primer dibujo recorrido jey comienza. Ehecha [Comenzar](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Posición de la barra [Arriba/Abajo/Izquierda/Derecha]`. Ehecha [Configuración](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Línea de comandos [Acoplada abajo/Flotante/Una línea/Líneas de historial mostradas/Historial de comandos (F2)]`: acoplar térã flotar, una línea hacer, historial líneas cantidad (0 gui 12), térã historial abrir. Ehecha [Configuración](topic:settings#command-line).

### TOPAREA

`Área superior [Estándar/Compacta]`: plano arriba barras como antes térã compacta. Ehecha [Configuración](topic:settings#top-area).

### POLARANG

`Ingrese paso de ángulo polar en grados ⟨90⟩`: {{ui:Polar}} rastreo líneas paso (más 0, 180 peve). Navegador pe mantene.

### UNITS

Alias: `UN`. Longitudes escrito ha escribir.

- `Ingrese formato de longitud [Científico/Decimal/Ingeniería/Arquitectónico/Fraccional] ⟨actual⟩`
- Arquitectónico ha Fraccional: `Ingrese denominador de la fracción más pequeña a mostrar (1, 2, 4, 8, 16, 32, 64, 128 o 256)`. Ambue: `Ingrese número de decimales (0 a 8)`.

Cota nuevo siguen. Peteĩ paso deshacer. {{ui:Formato de longitud}} ha {{ui:Precisión}} {{ui:Configuración actual}} pe mismo; ver [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Circuito integrado layout (GDSII archivo) ohechauka: solo lab ver ha medir.

- Archivo elegir `.gds` archivo; varias celda superior jave `Ingrese la celda superior para dibujar`.
- Cada capa tipo dato dibujo capa (`GDS 1`, `GDS 2/5`), referencias ha arreglos plano, archivo unidad (micrómetros generalmente). Peteĩ paso deshacer. Simulación ndojapói, archivo ndoescribí.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Texto diagrama.

- Caja texto (térã `;` línea comando) Mermaid flujograma, PlantUML componente diagrama, D2 térã lista de-a: `Seleccione la esquina superior izquierda del diagrama`, upéi `Seleccione la altura del texto`.

Bloques conectores capa `Diagram` objeto, fin seleccionado. Peteĩ paso deshacer. Ehecha [Dibujar un diagrama desde texto](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. DWG OLE objetos CadCraft ndaikatúva ubicación.

- Cada uno lista: número, tipo, tamaño, imagen guardada térã ndaha'éi.
- `Ingrese una opción [Colocar/eXit] ⟨eXit⟩`: Colocar número, esquina inferior izquierda ha ancho pregunta, imagen marco dibuja. Peteĩ paso deshacer; objeto guardado ndomudái. Ehecha [Imágenes](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Propio SHX fuentes.

- `Ingrese una opción de fuente SHX [Carpeta/Archivos/Listar/Quitar/Invertir/Limpiar] ⟨Listar⟩`

{{ui:Carpeta}} carpeta cada `.shx` (CadCraft Studio; cada inicio), {{ui:Archivos}} archivo elegido (navegador), {{ui:Invertir}} fuente letra última primero. Cargado fuente nombre texto estilo ahí dibuja. Ehecha [Dibujar texto con tus fuentes SHX](topic:shx-fonts).

### LIMITS

Plano tamaño fijado.

- `Seleccione esquina inferior izquierda o [ON/OFF] ⟨actual⟩`: punto, `ON` térã `OFF`.
- `Seleccione esquina superior derecha ⟨actual⟩`.

Cuadrícula límite llena, {{cmd:ZOOM}} Todo límite muestra, límite ON jave punto afuera rechazado (`**Fuera de los límites`). Peteĩ paso deshacer; DWG ha DXF guardado. Ehecha [Fijar los límites del plano](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Ángulos ohechauka ha escribir.

- `Ingrese formato de ángulo [Grados decimales/Grados-minutos-segundos/Rumbos de agrimensor] ⟨actual⟩`
- `Ingrese número de decimales (0 a 8)`, térã otros dos `Ingrese precisión` (0 grados, 2 minutos, 4 segundos, 5 a 8 decimales segundo).

Peteĩ paso deshacer; DWG ha DXF guardado. {{ui:Formato de ángulo}} {{ui:Configuración actual}} pe mismo. Ehecha [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Cargar aplicación…}}. {{ui:Cargar aplicaciones}} diálogo: `.lsp` rutina ha `.dcl` diálogo cargar, descargar, historial de nuevo cargar, Startup Suite. Rutina `(defun c:NAME …)` comandos ótro comando igual funciona. Ehecha [Cargar aplicaciones](topic:load-applications) ha [Ejecutar rutinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (térã {{ui:Vista}} › {{ui:Más}} › {{ui:Editar alias…}}) alias archivo abre (`ALIAS, *COMMAND` línea); {{ui:Guardar}} aplica. {{cmd:REINIT}} de nuevo aplica. Ehecha [Editar alias de comandos](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; térã {{ui:Vista}} › {{ui:Más}} › {{ui:Editor LISP}}. LISP editor abre, plano costado ventana abierto.

- Texto: línea número, cursor paréntesis pareja marcado (no tiene rojo), {{key:Enter}} abierto paréntesis debajo línea sangra, {{key:Tab}} dos espacio, {{key:Esc}} texto sale.
- {{ui:Cargar en el plano}} ({{key:Ctrl+Shift+Enter}}): {{cmd:APPLOAD}} archivo haguéicha cada forma lee, `c:` comandos crea. Archivo {{cmd:APPLOAD}} lista muestra.
- {{ui:Ejecutar selección}} ({{key:Ctrl+Enter}}): seleccionado formas térã cursor forma evalúa.
- {{ui:Detener}}: rutina ejecutando termina.
- {{ui:Consola}}: rutina imprimió, cada error línea ndive; error clic allí va. Texto forma nivel superior una vez; línea forma ó función error nombra.
- {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}} ({{key:Ctrl+S}}): `.lsp` archivo. Texto navegador pe también guardado, ventana cierra jave ndoseguí.
- Texto costado: rutina define funciones, llamadas LISP todavía ndaipóri, llamadas ni definidas ni incorporadas, incorporado ha ndaincorporado listas completa.

Paréntesis cerrado ndoĩ térã cadena ndotermina jave ndojapói: línea nombrado. Paso a paso depurador, puntos de ruptura térã ventana vigilancia ndaipóri. Ehecha [Ejecutar rutinas LISP](topic:run-lisp).

### HELP

Alias: `?`. Opa comando, alias ha línea descripción historial pe imprime. Ayuda ndohechauka: {{key:F1}} térã {{ui:Ayuda}} clic.

## Indicación Seleccionar objetos

Cada `Seleccione objetos` indicación: objetos clic, ventanas (izquierda a derecha) ha cruces (derecha a izquierda) mokõi clic, térã lazo presionar arrastrar ({{key:Space}} arrastrando: ventana, cruce, cerca), {{key:Shift}}+clic quitar, {{key:Enter}} terminar. Escribir `ALL` (todo), `L` (último objeto), `P` (Anterior: último comando ojeporu), `F` (Cerca: puntos línea cruza objeto; `U` punto deshacer), `W` (Ventana), `C` (Cruce), `R` (Quitar modo: elección objetos quita; indicación `Quitar objetos`), `A` (Agregar otra vez). `?` lista. Indicación ndohechaukai. {{key:Tab}} objetos superpuesto próximo resalta; clic elegir. Ehecha [Seleccionar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Dibujo sin vista. {{cmd:ACCESS}} Acceso ON térã OFF (`On`, `Off`) ha ajuste sonido (`Sound`) ha comando voz (`Voice`); primer estado dice. Acceso ON jave, cada comando ha resultado lector pantalla rupi omombe'u ha dibujo área teclado cursor. Ayuda tema "Dibujo sin vista" teclas ohechauka.

### DESCRIBE

Alias: `DESC`. Plano contiene dice: objetos cuántos, tipo, tamaño, capas cuántos, seleccionado. Lee solamente; nada cambia.

### WHEREAMI

Alias: `WHERE`. Cursor dónde dice, plano unidades.

### NEARBY

Cursor cerca mba'e dice, cerca primero, distancia ha lado ndive.

### SAYSEL

Seleccionado dice, peteĩ oración objeto peteĩ (línea longitud, extremos ha ángulo; círculo radio ha centro; texto escrito haguéicha).

### VOICE

Hablado comandos ON térã OFF. Computadora pe reconoce; navegador ndaikatúi jave, Configuración pe navegador línea servicio elegí ndive voz ndoapága.

### TOUCHCROSSHAIR

Alias: `TCX`. Cruz desplazada dedo dibujo, dedo punto elegí ndojapói. ON jave, peteĩ dedo dibujo pe ndoelige: peteĩ cruz mueve arriba ha costado dedo gui. Objeto ajuste ha rastreo cruz sigue. Dedo levantando nada elige, cruz lugar oĩ. Elegir, esquina dibujo {{ui:Clic}} botón prensa, térã segundo dedo toque plano pe. {{ui:Clic}} botón mantene otro dedo mueve arrastra (selección ventana, lazo, grip). Dedo presionado quieto, térã {{ui:Enter}} botón, Enter. Dos dedo desplazar zoom igual. Abajo borde ha lejano costado borde cerca cruz dedo cierra, dibujo opavave ndaikatúi. Lápiz ha mouse directamente elige.

{{cmd:TOUCHCROSSHAIR}} estado dice pregunta `ON`, `OFF`, `Auto` (dedo solo puntero jave, mouse computadora pe ndojapói), `Distancia` (dedo gui cruz cuán lejos, 24 gui 240 píxel) térã `Lado` (`Izquierda`: arriba izquierda, mano derecha; `Derecha` mano izquierda; botón otro esquina oho). Configuración › CadCraft pe mismo elección, pantalla táctil dispositivo barra estado {{ui:Cruz desplazada}} llave. Elección navegador pe mantene.

### WHOHAS

Dice quién plano abierto. CadCraft Studio computadora pe DWG térã DXF abre, plano cerca pequeño lock archivo (`Plan.dwg.cclock`: quién, desde cuándo, versión) escribe, cada minuto refresca plano abierto mientras, cerrar jave quita. Otro persona abierto plano abre jave quién ha desde cuándo ohechauka ha {{ui:Abrir solo lectura}} (guardar nombre nuevo pregunta), {{ui:Abrir de todos modos}} (otra persona próximo refresco), {{ui:Cancelar}} ofrece. Otro abierto archivo guardar jave antes pregunta. Cinco minuto refresco ndojapóva lock vencido: otra copia cerrado guardar ndaha'éi térã computadora dormido.

{{cmd:WHOHAS}} pregunta `Actual` (plano abierto), `Archivo` (elegí), `Carpeta` (carpeta elegí: abierto en algún lado opavave plano lista), `Ruta` (ruta completa escribí) térã `Nombre` (ótro persona ve nombre; cuenta nombre firmado). Studio elegí carpeta solamente alcanza; no elegido carpeta plano abierto jave una vez dice ndaikatúi lock nota; `Carpeta` elegí, lock allí funciona después. Lock personas nota, barrera ndaha'éi; ótro programa archivo escribir puede. Navegador carpeta ndaipóri, comando dice.

### OVERKILL

Objetos duplicados borra, líneas ha arcos superpuesto ordena, doble líneas dibujo llega. `Seleccione objetos para limpiar`, {{key:Enter}}, upéi {{key:Enter}} otra vez configuración ndive limpiar, térã peteĩ cambiar primero:

- `Tolerancia`: dos coordenada igual cuenta cerca (0.000001 inicio; 0 exacto igual).
- `Ignorar`: dos objeto igual otra propiedad. Nombre escribí cambiar: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, térã `None` / `All`. {{key:Enter}} terminado.
- `Superposición`: on térã off. On jave, recta línea superpuesto peteĩ línea (línea adentro otra borra), círculo arco superpuesto peteĩ arco; círculo completo arco círculo, círculo arco adentro borra.
- `Extremos`: on térã off. On jave, recta línea ha círculo arco punta a punta tocando peteĩ pieza.

Opavave objeto tipo duplicado verificado: dos objeto duplicado jave geometría tolerancia igual ha capa, color, tipo línea, escala tipo línea, grosor, espesor, transparencia ha altura igual (ignorar menos). Línea ha polilínea abierta otro lado ojoaporã avei. Dibujo orden primer objeto queda, propio propiedad mantiene. Comando objetos revisado, borrado duplicados, superposición mezclado, punta a punta unido informa. Peteĩ {{cmd:UNDO}} todo deshace. Configuración ventana cerrar peve.

Ndojeporandúi: capas bloqueadas ha objeto oculto. Altura (Z) línea ndojapói (exacto duplicado irá), polilínea adentro segmento ndojapói (ndoadelgaza), polilínea segmento línea ha otra lado polilínea cerrada ndojapói.

### DRAWORDER

Objeto dibujo frente cambia. `Seleccione objetos para reordenar`, {{key:Enter}}, upéi `Encima de objetos`, `Debajo de objetos`, `Frente` térã `Atrás` ({{key:Enter}} = `Atrás`). `Encima` ha `Debajo` referencia objetos pregunta: selección frente delantero más de ellos, térã atrás trasero más de ellos. Seleccionado objetos entre ellos mismo orden mantiene. Peteĩ paso deshacer. Orden plano pe guardado DWG ha DXF, objetos escribe orden.

Pantalla CadCraft relleno área primero (sólido sombreado, polilínea ancho, máscara), upéi línea, upéi texto dibuja, texto siempre relleno encima; orden dibujo relleno objeto ha imagen ndive. Ótro programa archivo abre jave guardado orden dibuja.

### TEXTTOFRONT

Texto, cota ha guía opavave encima abierto espacio pe: `Texto`, `Cotas`, `Guías` térã `Todo` ({{key:Enter}} = `Todo`). Peteĩ paso deshacer. Ndaipóri térã ya frente oĩ jave ohechauka.

### HATCHTOBACK

Abierto espacio opavave sombreado otro atrás envía, relleno línea texto ndojerevai archivo guardado. Ndaporandúi indicación. Peteĩ paso deshacer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Seleccionado objetos solo ohechauka: otro espacio opavave {{cmd:UNISOLATEOBJECTS}} peve ndohechaukái. {{cmd:LAYISO}} haguéicha, elegido objetos capa ndaporandúi, capa ndojeguapy. Objeto oculto ndodibujá, ndoelegí, ndoajustá, ndoacercá ni ndotrazá, `ALL` comando ojapo jave ndoelegí. Isolated objeto ojapo jave dibujo mismo jeʼe.

Sesión pe nomás: plano guardado ndaipóri, deshacer ndaipóri, plano abrir jave opavave ohechauka. Oculto objeto jave barra estado número botón ohechauka; clic peteĩ jey ohechauka.

### HIDEOBJECTS

Selección objeto oculta {{cmd:UNISOLATEOBJECTS}} peve. {{cmd:ISOLATEOBJECTS}} reglas mismo: sesión nomás, guardado ndaipóri, deshacer ndaipóri.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} térã {{cmd:HIDEOBJECTS}} oculto objetos jey ohechauka, cuántos volvieron informa.

### LAYLOCKFADE

Bloqueado capa objeto mba'éicha ohechauka ha clic llega ndojapói. Estado actual dice, upéi toma:

- Número 0 gui 90: desvanecido porcentaje (50 inicio). 0 desvanecido apaga.
- `ON` térã `OFF`: desvanecido on térã off, cantidad mantene.
- `Elegir`, upéi `Sí` térã `No`: clic bloqueada capa objeto selecciona comando ejecutando ndaipóri jave? `No` (defecto): ndaelegible. `Sí`: clic térã ventana selecciona {{ui:Propiedades}} ohechauka; cambiable ndaha'éi, comando propio `Seleccione objetos` nunca agarra.

Objeto ajuste bloqueada capa encuentra ambos modo; trazado nunca desvanecido. Ambos configuración usuario, plano ndaha'éi, {{ui:Configuración}} pe {{ui:Capas bloqueadas}} avei.

### BURST

Referencia bloque explota, atributos dice mantiene: `Seleccione referencias de bloque para explotar`, {{key:Enter}}: cada referencia bloque objeto ojapo, cada visible atributo valor peteĩ texto atributo capa pe. Atributo capa 0 referencia capa lugar, bloque ambue objeto igual. Invisible atributo ojeporuvéi. Bloque dentro bloque referencia sigue. Peteĩ paso deshacer; referencia explotado atributo texto valor informa.

Vinculado plano nombre ndojeporúi (antes unir térã {{cmd:NCOPY}} copia). Seleccionado otro objeto ndojeporuvéi. Bloque referencia {{cmd:EXPLODE}} mismo objeto; {{cmd:BURST}} bloque referencia nomás atributo texto cuenta.

### TXT2MTXT

Alias: `T2M`. Peteĩ línea texto peteĩ párrafo texto unir. `Seleccione textos de una línea para unir`, {{key:Enter}}, upéi `Párrafo` (líneas juntas ancho ancho línea ajusta) térã `Líneas` (cada texto línea propia); {{key:Enter}} último usado. Línea arriba-abajo, izquierda derecha, texto superior dirección pe ordena. Párrafo superior texto esquina superior izquierda, altura, rotación, estilo, capa ha color. Peteĩ paso deshacer.

Párrafo texto ya, texto vacío ha ótro objeto seleccionado ndojapói, comando cuántos informa.

### NCOPY

Bloque referencia térã plano vinculado gui objeto copia plano pe, explotar ndaporandúi. `Elegí objeto dentro bloque referencia o plano vinculado`: elegido cerca objeto mostrado lugar copia, cuántos bloque profundidad; más elegí, {{key:Enter}}. Upéi `Punto base para mover las copias`: {{key:Enter}} lugar dejado, térã punto base ha segundo punto. Comando entero peteĩ paso deshacer.

Copia mostrado capa toma: objeto bloque adentro capa 0 referencia donde estaba capa, ByBlock color referencia color. Vinculado plano `Plan|Walls` capa `Plan$0$Walls` (enlace nombre) ndive, vinculado capa color, tipo línea ha grosor. Atributo valor texto copia. Bloqueado capa bloque referencia elegible ndaha'éi.

### FLATTEN

Altura (Z) ha grosor seleccionado objetos 0. `Seleccione objetos para aplanar`, {{key:Enter}}. Selección bloque definiciones adentro objetos ojeporu aplana (ha bloques dentro), cada referencia bloque cambia; vinculado plano ndaaplanái. Peteĩ paso deshacer; cuántos cambiado informa, altura térã grosor ndaipóri jave dice.

2D plano pe CadCraft tercer dimensión mantiene: círculo, arco, elipse, punto, texto, referencia bloque, sombreado, guía ha polilínea altura (elevación), línea extremo altura, línea, círculo, arco, polilínea, punto ha texto grosor, archivo tenía haguéicha. {{cmd:FLATTEN}} exacto eso borra. 3D pestaña modelo, 3D caras térã sólidos ndoafecta, inclinado plano objeto archivo abriendo jave dibujo plano pe ya traído.

### BREAKLINE

Línea símbolo ruptura ndive dibujo, vista corta corte haguéicha. Tamaño actual ha prolongación dice, upéi `Primer punto de la línea de ruptura` (térã `Tamaño` / `Extensión` antes cambiar), `Segundo punto`, `Dónde está el símbolo de ruptura`: línea clic, térã Enter medio. Resultado peteĩ polilínea capa actual: línea, cada punto prolongación pasa, Z forma trazo altura tamaño y mitad largo.

`Tamaño` ha `Extensión` configuración tuya recuerda (tamaño inicio texto altura dupla cota escala; extensión mitad tamaño). {{key:Enter}} comando de nuevo.

### AUDIT

Plano abierto daño revisa ha arregla. {{cmd:AUDIT}} modelo, hojas, bloques adentro cada objeto, capa tabla mira, encontrado tipo gui lista:

- número finito ndaha'éi térã exagerado grande;
- tamaño ndaipóri objeto: línea longitud 0, círculo radio 0, polilínea peteĩ lugar, texto letra ndaipóri térã altura, bloque referencia escala 0;
- objeto plano ndaipóri capa; bloque ndaipóri referencia; texto cota estilo nombre térã tipo línea nombre plano ndaipóri;
- bloques sí mismo adentro, directamente térã ótro bloque pe;
- id, clave térã archivo mango compartido objetos;
- cota ndaipóri punto medido, sombreado contorno cerrado ndaha'éi.

Upéi `¿Arreglarlos? [Sí/No]`. `No` nada cambia. `Sí` opavave arregla peteĩ paso deshacer: dibujable ndaha'éi quita (número malo, tamaño ndaipóri, bloque ndaipóri, cota roto, sombreado contorno ndaiporiva, círculo bloque cerrado referencia); capa ndaipóri hace; nombre estilo tipo línea desconocido defecto vuelve; compartido clave cambia. Quitado objeto cuántos, arreglado cuántos informa. Mismos hallazgos Problemas panel oñemoĩ, cada uno {{ui:Reparar}}.

Ninguna rechaza, CadCraft mismo dibuja cosa solamente revisa: otro programa datos (3D sólidos, OLE objetos) abierto ndaha'éi.

### RECOVER

Daño DXF térã DWG abre. {{cmd:RECOVER}} archivo pregunta, leer posible rechazar ndaporandúi, omitido térã supuesto cosa dice, upéi revisa ha arregla {{cmd:AUDIT}} `Sí` haguéicha.

- DXF: código valor par ndaha'éi línea omite hasta par alinea; sección fin ndaipóri cierra; archivo corto lectura hasta corte; binario DXF corto último valor entero hasta. Sección, bloque térã objeto leer ndojapóiva, omitido nombrado, lectura sigue.
- DWG: chequeo fracasa térã decodificar ndojapóiva objetos omitido, objeto lista perdido, objeto dato camina reconstruye.

Archivo disco ndoheja. Recuperado plano no guardado abre: nombre nuevo guardar. Nada peteĩ leer ndojapóva archivo, motivo ohechauka rechazado.

### LEGACYTEXT

Antiguo 8 bit vietnamita fuentes gui texto Unicode convierte. Cortos nombre `TEXTTOUNICODE` ha `VNTEXT`.

Antiguo vietnamita plano texto fuente hace Western caracteres: TCVN3 texto ABC fuentes (`.VnTime`, `.VnArial`, mayúscula nombre `H` terminado) ha VNI texto VNI fuentes (`VNI-Times`). CadCraft plano abierto texto leído ohechauka texto estilo, objeto ha párrafo ejecución fuente gui; archivo viejo caracteres mantiene.

{{cmd:LEGACYTEXT}} codificación texto cuántos encontrado dice, `¿Convertir … a Unicode?` pregunta. `Sí` cada uno (modelo, hojas, bloques, atributo valor ha definición) reescribe, texto estilo Unicode fuente (Times New Roman, Arial térã Courier New antigua fuente tipo gui), peteĩ paso deshacer. Párrafo texto adentro formato mantiene.

Conocido fuente texto ninguno (estilo fuente nombre perdido) jave `Leer textos seleccionados como [Tcvn3/Vni/Ninguno]` pregunta: codificación elegí ha texto seleccionar. Unicode texto ya dejado. Cota texto anulación ha multiguía texto ndoconvertido.
