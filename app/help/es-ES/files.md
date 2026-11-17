---
title: Archivos: qué se abre y qué se guarda
summary: Los formatos que CadCraft abre, guarda y exporta, qué se conserva o se convierte, y dónde van los archivos.
keywords: xclip, clip, límite de xclip, integrar recortado, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversión, descargar, saveas, dxfout, guardar como, guardar DWG, formato, qsave, xref, xattach, dibujo vinculado, referencia externa, integrar, recargar, separar
from: b8c5778d
---

## Resumen

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto o binario, cualquier versión) | Sí | Sí, como DXF R12, DXF 2000 o DXF 2000 (binario) | Un DXF binario se abre igual que uno de texto y se guarda de nuevo como binario. |
| DWG | Sí | Sí, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Lo leen y escriben la biblioteca DWG propia de CadCraft (archivos de AutoCAD R13 a 2018). Su DWG nunca se modifica. Los archivos dañados, o las versiones que el lector no gestiona, se rechazan con un mensaje. |
| PDF | Trae una página como subyacente o como objetos ([Subyacentes PDF](topic:pdf-underlay)) | Sí, mediante trazado | PDF vectorial de una hoja, o del modelo a una escala. |

Cada dibujo que abra (o inicie con {{ui:Nueva}}) obtiene su propia pestaña sobre el área de dibujo; un dibujo nuevo que nadie ha tocado todavía se usa en lugar de añadir una pestaña. Haga clic en una pestaña para cambiar a ella, en su {{ui:×}} para cerrarla (CadCraft pregunta antes si hay cambios sin guardar), o disponga los dibujos abiertos uno al lado del otro: consulte [Dividir la pantalla](topic:split-screen).

## Abrir un dibujo

- Pulse {{key:Mod+O}}, haga clic en {{ui:Abrir}}, o escriba `OPEN`, y elija el archivo.
- O arrastre un archivo `.dwg` o `.dxf` al área de dibujo.

El archivo se lee dentro de su navegador. No se sube a ningún sitio. El historial indica cuántos objetos y capas han entrado y cuánto ha tardado, y la sección {{ui:Dibujo}} del panel izquierdo muestra el formato, por ejemplo "DWG 2018 (AC1032)".

El lector de DWG forma parte de CadCraft y se descarga con el primer DWG que abra después de cargar la página (unos pocos cientos de KB), así que no hay una descarga aparte que esperar. Lee el archivo en segundo plano, de modo que la página sigue respondiendo mientras se abre un DWG grande.

Un DXF se lee en fragmentos de unos 4 MB, nunca como un bloque de texto único, así que también se abre un DXF de más de 512 MB. Lo que limita es la memoria de su equipo: mientras se abre un DXF, cuente con que use unas 16 a 20 veces el tamaño del archivo (un DXF de 100 MB con unos 690 000 objetos usó unos 1.5 GB en nuestra prueba).

### Qué entra

- Líneas, arcos, círculos, polilíneas (con segmentos de arco), elipses, puntos, texto y texto de varias líneas, sólidos, tramas (los patrones estándar dibujados como sus líneas, los demás como un tono plano), referencias de bloque con sus atributos (valores que puede editar; consulte [Atributos de bloque](topic:attributes)), cotas y presentaciones con sus ventanas gráficas.
- Las splines entran como splines (grado, puntos de control, nudos, pesos, puntos de ajuste); consulte [Splines y polilíneas](topic:splines).
- Las multidirectrices con una línea directriz y texto entran como multidirectrices de CadCraft que puede editar (consulte {{cmd:MLEADER}}). Las demás (con un bloque, varias líneas directrices o líneas curvas) se dibujan como las dibujó el otro programa y se mueven como un conjunto; el historial indica cuántas son.
- Las imágenes se muestran como un marco con el nombre del archivo de la imagen hasta que indique a CadCraft el archivo con {{cmd:IMAGE}}: consulte [Imágenes en un dibujo](topic:pictures#show-the-pictures-a-dwg-uses). Los enmascarados se muestran como su marco, y lo que hay debajo sigue visible.
- Las tablas de un DWG entran como las dibujó el otro programa.
- Las caras 3D del espacio modelo entran en la pestaña {{ui:3D}}, no como objetos 2D; lo mismo ocurre con las que están dentro de bloques, una vez por cada referencia de bloque en el modelo. En un bloque y en una hoja también se dibujan planas, como contornos. Consulte [Modelo en 3D](topic:3d-solids).
- Las capas conservan su color y sus ajustes de activada, congelada, bloqueada y trazado. DEFPOINTS nunca se traza.
- Las cotas se convierten en cotas reales y editables de CadCraft cuando se pueden leer sus puntos. Primero se muestran exactamente como las dibujó el otro programa; en cuanto cambie una, CadCraft la redibuja con su propio estilo.
- Cada presentación se convierte en una pestaña de hoja. En el otro programa, cada presentación tiene una primera ventana gráfica oculta que es la propia hoja; CadCraft la omite.

### Qué aún no entra

Todo lo que CadCraft no puede dibujar se cuenta, no se adivina. El cuadro "Acerca de este archivo" del panel izquierdo lo enumera como "Aún no se muestra:" seguido de cada tipo de objeto y cuántos son. Los casos habituales son las tablas de un DXF, las mallas y los sólidos 3D dentro de bloques. Los sólidos 3D, regiones y cuerpos del espacio modelo se muestran en la pestaña 3D (consulte [Modelo en 3D](topic:3d-solids#solids-from-other-programs)). Las ventanas gráficas giradas en el archivo se muestran giradas, como allí, y conservan su giro al guardar; lo mismo ocurre con el SCP actual, los SCP con nombre y una vista girada.

El texto se dibuja con una sola fuente de estilo Helvetica. Una etiqueta que cabe en una línea con la fuente, más estrecha, del programa original puede ajustarse a dos líneas en CadCraft.

## Guardar

Hay tres maneras de guardar. Cada una descarga una copia.

- **Guardar**: pulse {{key:Mod+S}}, haga clic en {{ui:Guardar}}, o escriba `SAVE` (también `QSAVE`). Guarda en el formato del dibujo: DWG si abrió un DWG, DXF si abrió un DXF. Un DWG conserva la versión con la que llegó (un archivo de 2018 se guarda como 2018). Un dibujo nuevo usa el formato y la versión de DWG que eligió por última vez en Guardar como en este navegador; si nunca eligió ninguno, DWG en formato AutoCAD 2000.
- **Guardar como**: pulse {{key:Mod+Shift+S}}, haga clic en {{ui:Guardar como}}, o escriba `SAVEAS`. El cuadro {{ui:Guardar una copia como}} ofrece {{ui:DWG}}, con una lista {{ui:Versión}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} y {{ui:DXF 2000}}, cada uno con el nombre de archivo que le dará, y con el formato y la versión actuales del dibujo ya seleccionados. Haga clic en {{ui:Guardar}} para descargar, o en {{ui:Cancelar}} (o {{key:Esc}}) para no guardar nada; el historial indica entonces "No guardado." Lo que elija se queda: {{key:Mod+S}} lo usa para este dibujo a partir de ese momento, y los dibujos nuevos de este navegador empiezan con él.
- **DXFOUT**: escriba `DXFOUT`. Siempre descarga una copia DXF R12, y el siguiente {{key:Mod+S}} sigue guardando en el formato propio del dibujo.

El navegador descarga `<nombre del dibujo>.dwg` o `<nombre del dibujo>.dxf`. Cada guardado es una **nueva descarga**; el archivo que abrió nunca se sobrescribe ni se cambia. El historial lo confirma, por ejemplo "Copia guardada como Plan.dwg (DWG (AutoCAD 2018)). Su original Plan.dxf no ha cambiado." En un DXF dice "(DXF R12, se abre en cualquier programa CAD)". Las líneas bajo él enumeran todo lo que cambió por el camino.

Cuando CadCraft se ejecuta en la aplicación de escritorio, guardar funciona como en otros programas de escritorio: {{key:Mod+S}} escribe el dibujo de nuevo en el archivo que abrió, en su formato y versión propios, y el historial indica dónde se guardó. {{ui:Guardar como}} y las exportaciones muestran el cuadro de guardado del sistema, y un archivo `.dwg`, `.dxf` o `.ccsheets` al que haga doble clic se abre en CadCraft.

Para un PDF, trace en su lugar (véase más abajo).

## Qué guarda y qué cambia un DWG

CadCraft escribe el DWG por sí mismo, dentro de su navegador, con la misma biblioteca DWG con la que lo lee. Elija la versión en Guardar como: el formato AutoCAD 2000 (versión de archivo AC1015) se abre en más programas, incluidos los antiguos; los formatos más recientes (2004, AC1018, hasta 2018, AC1032) conservan además los colores reales. No se sube nada, y guardar un DWG funciona sin conexión.

Cada versión se comprueba volviendo a leer los archivos guardados con los lectores DWG de otros tres programas y con el propio CadCraft. Un DWG de CadCraft todavía no se ha abierto en el propio AutoCAD.

### Qué conserva un DWG

- Líneas, arcos, círculos, elipses, puntos y polilíneas con sus segmentos de arco.
- Texto de una línea con su alineación y factor de anchura.
- Texto de varias líneas y texto ajustado, como texto de varias líneas. El otro programa lo vuelve a ajustar desde la misma anchura.
- Colores de objeto: por capa, por bloque, los 255 colores estándar y colores reales en el formato 2004 y posteriores.
- Capas con su color, tipo de línea, grosor de línea y sus ajustes de activada, congelada, bloqueada y trazado; los tipos de línea, grosores y escalas de tipo de línea propios de los objetos, los patrones de tipo de línea y la escala de tipo de línea del dibujo.
- Las unidades del dibujo y el formato de longitud (decimal, pies y pulgadas, fracciones…).
- Bloques con su punto base y las definiciones de atributo, incluidos los invisibles, constantes y predefinidos.
- Referencias de bloque con su escala, rotación y valores de atributo.
- Rellenos sólidos y tramas con patrón, con su patrón, escala y ángulo (las líneas propias del patrón, de modo que otros programas dibujan las mismas líneas que CadCraft).
- Cotas, como cotas reales: otros programas las vuelven a medir cuando se estiran. Cada una conserva sus propios ajustes (altura de texto, tamaño de flecha, decimales, formato de longitud) y su texto, y lleva la copia dibujada que tiene cada cota de DWG.
- Hojas (presentaciones): cada hoja con su tamaño de papel y unidades, lo que se dibuja en ella, y sus ventanas gráficas con su vista y escala.
- Vistas con nombre.
- Multidirectrices, como multidirectrices.
- Nombres de capa y de bloque tal como los escribió, en mayúsculas y minúsculas. (DXF R12 los escribe en mayúsculas.)

### Qué cambia un DWG

Cada uno de estos cambios se enumera en el historial después de guardar, cuando afecta a su dibujo.

| En CadCraft | En el DWG guardado |
|---|---|
| Colores reales (elegidos con el selector de color), en el formato 2000 | El color estándar más cercano: el formato 2000 solo tiene los 255. Guarde como 2004 o posterior para conservarlos |
| Vistas con nombre de una hoja | Vistas de espacio papel: un DWG no indica a qué hoja pertenecen, así que al volver a abrir el archivo pertenecen a la primera hoja |
| Texto de varias líneas con factor de anchura | Anchura de letra normal: en un DWG el factor de anchura solo se aplica al texto de una línea |
| Nombres de capa o de bloque con caracteres que DWG no admite | Cambiados: un nombre de un dibujo vinculado como `Base\|Walls` pasa a `Base$0$Walls` (la forma en que integrar un dibujo vinculado le asigna el nombre), y los demás caracteres pasan a `_` |

### Por qué R12, y qué se convierte

Cuando guarda como DXF, CadCraft escribe DXF R12, la versión que puede abrir cualquier programa CAD. Es anterior a algunas funciones, así que algunas cosas se escriben de forma más simple:

| En CadCraft | En el archivo R12 guardado |
|---|---|
| Texto de varias líneas | Un objeto de texto por línea |
| Elipses | Polilíneas que siguen la elipse |
| Tramas (de archivos abiertos) | Solo sus contornos |
| Colores reales (elegidos con el selector de color) | El color estándar más cercano |
| Grosores de línea, y escalas de tipo de línea propias de los objetos | Omitidos: R12 no tiene ninguno (los tipos de línea se conservan) |
| Nombres de capa y de bloque | Se escriben en mayúsculas; los espacios y otros caracteres pasan a `_`, y los nombres se recortan a 31 caracteres ("Plano base" pasa a `PLANO_BASE`) |
| Capas configuradas para no trazarse | Otros programas las trazarán (CadCraft recuerda el ajuste cuando el dibujo tiene una hoja) |
| Cotas | Cotas reales con su propio bloque dibujado, para que otros programas las muestren como las ve |
| Multidirectrices | Las líneas, la punta de flecha y el texto que dibujan |
| Vistas con nombre | Se conservan, con nombres en mayúsculas; las vistas de una hoja vuelven en la primera hoja |
| Varias hojas | La primera hoja es el espacio papel que muestra todo programa; las demás se conservan como bloques con nombre `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft convierte de nuevo en hojas al abrir el archivo |

El historial enumera cada uno de estos cambios que se aplicó a su dibujo.

:::tip
Para seguir trabajando en un dibujo durante varios días, guárdelo como DXF y abra ese DXF la próxima vez. Todo lo que CadCraft puede dibujar sobrevive a la ida y vuelta, incluidas las cotas, los bloques y todas las hojas.
:::

## Referencias vinculadas (referencias externas)

{{cmd:XATTACH}} (`XA`, o {{ui:Bloques}} › {{ui:Más}} › {{ui:Vincular un dibujo (xref)}}) vincula otro DWG o DXF: elija el archivo y después haga clic donde debe ir ({{key:Enter}} lo coloca en 0,0). Entra como un bloque con el nombre del archivo, a la escala correcta cuando los dos dibujos tienen unidades distintas. Sus capas y bloques conservan sus nombres con el nombre del vínculo delante — `Plan|Walls`, `Plan|Door` —, de modo que nunca se mezclan con los suyos: active, desactive, congele o bloquee las capas vinculadas como las suyas. Un vínculo es de solo lectura: si cambia el otro dibujo, recárguelo. Lo que establezca en las capas de un vínculo (color, tipo de línea, grosor, activada o desactivada, congelada, bloqueada, trazado) se conserva al recargarlo, al guardar el dibujo como DWG mientras el vínculo siga siendo un vínculo, y cuando otro dibujo vincula este.

{{cmd:XREF}} (`XR`): `?` enumera los vínculos (cargados o no, qué archivo, cuántas referencias); `A` vincula; `R` recarga uno desde su archivo (vuelva a elegir el archivo: el navegador no puede acceder a sus carpetas por sí mismo); `B` integra uno (pasa a ser bloques y capas normales con nombres `Plan$0$Walls`); `D` separa uno (sus referencias y capas se eliminan). Cada uno es un paso de deshacer.

{{cmd:XCLIP}} (`XC`) recorta referencias de bloque y vínculos: selecciónelos, `N` para un nuevo límite, y después `R` y dos esquinas, o `P` y los puntos de un polígono ({{key:Enter}} lo cierra); `D` quita el recorte. Solo se muestra y se traza lo que queda dentro, y el recorte se mueve con la referencia. DWG y DXF 2000 conservan los recortes; DXF R12 guarda la referencia completa e indica que lo hace. Cuando integra un vínculo que tiene referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` integra todo, `C` conserva solo la parte recortada de cada referencia (las líneas y arcos se cortan en el límite; los textos y bloques anidados se mantienen cuando su punto de inserción está dentro).

Un dibujo que abra puede vincular archivos que CadCraft no puede ver: indica cuántos no están cargados. Use {{cmd:XREF}}, `R` y elija cada archivo para verlos.

Al guardar, un vínculo cargado se **integra** en el archivo (otros programas ven bloques y capas normales llamados `Plan$0$…`), y el historial lo indica. Un vínculo que no está cargado sigue siendo un vínculo a su archivo, tanto en DWG como en DXF.

## Abrir en 3D

{{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) abre el dibujo en la aplicación de modelado 3D, en una pestaña nueva, como DWG, sin subirlo. Los cambios que haga allí se quedan allí; guárdelos allí. El elemento de menú solo aparece donde esa aplicación puede recibir un dibujo entregado.

## Trazar un PDF

Pulse {{key:Mod+P}}, haga clic en {{ui:Trazar}}, o escriba `PLOT`. El PDF se genera dentro del navegador y se descarga, o se abre en una pestaña nueva para imprimir. Consulte [Trazar a PDF](topic:plot-pdf).

## Dónde van los archivos

Cada guardado y cada trazado es una descarga, así que los archivos van a donde su navegador ponga las descargas: normalmente la carpeta Descargas. Para elegir una carpeta cada vez, cambie el ajuste de descargas en su navegador; [Navegadores y equipos](common:browsers) indica dónde.

Nada de lo que abre o guarda se envía a nosotros. Consulte [Dónde van sus archivos](common:your-files).

## Archivos de proyecto PLN y PLA

CadCraft abre dibujos DWG y DXF, no los archivos propios de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Al abrir uno, se le indica de qué se trata. En Archicad, guarde las vistas o presentaciones que necesite como DWG y ábralas aquí, o exporte el modelo como IFC y ábralo en BimCraft. Cuando BimCraft puede recibir el archivo, CadCraft ofrece {{ui:Abrir en BimCraft}}.

## Si la página se cierra antes de guardar

CadCraft guarda una copia de cada dibujo que cambia, solo en este navegador, un momento después de dejar de editar. Si la pestaña se cierra, el navegador se detiene o el equipo se reinicia antes de guardar, CadCraft pregunta **¿Recuperar su trabajo?** la próxima vez que se inicie: {{ui:Recuperar}} vuelve a abrir el dibujo, sin guardar, en su propia pestaña. Guardar el dibujo elimina su copia. Consulte [Recuperar su trabajo](common:recover).

## En línea y sin conexión

Abrir, dibujar, guardar (DWG y DXF) y trazar, todo ocurre en su equipo, así que funcionan sin conexión una vez que CadCraft se ha cargado.

Para usar CadCraft sin ninguna conexión, haga clic en {{ui:Guardar para uso sin conexión}} en la barra superior mientras esté en línea. La etiqueta cuenta ("Guardando 40 de 212") y termina en "Listo sin conexión". La copia guardada incluye el lector DWG, unos 5 MB en total, así que **los archivos DWG también se abren sin conexión** una vez guardada. Haga clic de nuevo para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. "No se pudo guardar" significa que algunos archivos no se descargaron: compruebe la conexión y haga clic para volver a intentarlo. "Sin conexión no disponible" significa que esta ventana del navegador no puede mantener una copia (ventanas privadas y algunos equipos administrados).

Sin una copia guardada, el lector DWG se descarga la primera vez que abre un DWG después de cargar la página, así que abrir un DWG sin conexión puede fallar; los archivos DXF nunca lo necesitan. No recargue la página sin conexión a menos que CadCraft esté guardado.

Consulte [Trabajar sin conexión](common:offline) para más detalles.

:::offline
Ahora mismo no tiene conexión. Los dibujos se guardan como DWG o DXF y se trazan con normalidad, y los archivos DXF se abren. Los archivos DWG se abren si CadCraft muestra "Listo sin conexión", o si el lector DWG ya se cargó en esta pestaña.
:::

## Restricciones en archivos

Las restricciones y los parámetros (consulte [Restringir un dibujo](topic:constraints)) se guardan tanto en DWG como en DXF. Cada objeto restringido lleva una pequeña nota de CadCraft (datos extendidos), y un bloque sin usar llamado `CADCRAFT_PARAMETRIC` contiene las restricciones y la tabla de parámetros. Otros programas abren el dibujo con normalidad e ignoran ambos; pueden eliminar el bloque sin usar al purgar. Las notas se refieren a los objetos por su propia clave, no por los identificadores del archivo, de modo que un programa que renumera los identificadores no las rompe. Cuando otro programa ha eliminado o cambiado un objeto restringido, CadCraft descarta las restricciones de ese objeto al abrir el archivo y dice cuántas. Un archivo sin ellas se abre sin restricciones.

Un boceto exportado desde un modelador de piezas (`.json`) también se abre: consulte [Mover bocetos desde y hacia otros modeladores de piezas](topic:solidworks-sketches).

## Aún no disponible

- Multidirectrices como objetos de multidirectriz en un DXF guardado (R12 no tiene ninguno: se guardan como lo que dibujan).
- Imágenes en un DXF guardado (se guardan como sus marcos; DWG las conserva como imágenes), y enmascarados que ocultan lo que hay debajo.
- Guardar una versión de DXF posterior a 2000.
- Almacenamiento en la nube y sincronización entre equipos.

Consulte [Aún no disponible](topic:not-built-yet) para la lista completa.
