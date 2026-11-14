---
title: Archivos: qué se abre, qué se guarda
summary: Los formatos que CadCraft abre, guarda y exporta, qué se conserva o se convierte, y adónde van los archivos.
keywords: xclip, recorte, límite de recorte, fijar recorte, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversión, descargar, guardar como, dxfout, dwg guardar, formato, qsave, xref, xattach, dibujo vinculado, referencia externa, fijar, recargar, desvincular
from: 6d68b34e
---

## De un vistazo

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto, cualquier versión) | Sí | Sí, como DXF R12 o DXF 2000 | El DXF binario se rechaza: guárdelo antes como DXF de texto. |
| DWG | Sí | Sí, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Lo leen y escriben la propia biblioteca DWG de CadCraft (archivos de AutoCAD R13 a 2018). Su DWG nunca se modifica. Los archivos dañados, o las versiones que el lector no admite, se rechazan con un mensaje. |
| PDF | Trae una página: como fondo o como objetos ([Fondos PDF](topic:pdf-underlay)) | Sí, trazando | PDF vectorial de una hoja, o del modelo a una escala. |

Cada dibujo que abre (o que empieza con {{ui:Nuevo}}) tiene su propia pestaña sobre el área de dibujo; se reutiliza un dibujo nuevo que nadie ha tocado en lugar de añadir una pestaña. Haga clic en una pestaña para cambiar, en su {{ui:×}} para cerrarla (CadCraft pregunta antes si hay cambios sin guardar), o coloque los dibujos abiertos uno junto a otro: consulte [Dividir la pantalla](topic:split-screen).

## Abrir un dibujo

- Pulse {{key:Mod+O}}, haga clic en {{ui:Abrir}} o escriba `OPEN`, y elija el archivo.
- O arrastre un archivo `.dwg` o `.dxf` al área de dibujo.

El archivo se lee dentro de su navegador. No se sube a ninguna parte. El historial indica cuántos objetos y capas han entrado y cuánto ha tardado, y la sección {{ui:Dibujo}} del panel izquierdo muestra el formato, por ejemplo "DWG 2018 (AC1032)".

El lector de DWG forma parte de CadCraft y se obtiene con el primer DWG que abre después de cargar la página (unos cientos de KB), así que no hay una descarga aparte que esperar. Lee el archivo en segundo plano, de modo que la página sigue respondiendo mientras se abre un DWG grande.

### Lo que entra

- Líneas, arcos, círculos, polilíneas (con tramos de arco), elipses, puntos, texto y texto de varias líneas, sólidos, tramas (los patrones estándar dibujados como sus líneas, los demás como un tono liso), referencias de bloque con sus atributos (valores que puede editar; consulte [Atributos de bloque](topic:attributes)), cotas, y presentaciones con sus ventanas gráficas.
- Las splines entran como splines (grado, puntos de control, nudos, pesos, puntos de ajuste); consulte [Splines y polilíneas](topic:splines).
- Las directrices múltiples con una línea de directriz y texto entran como directrices múltiples de CadCraft que puede editar (consulte {{cmd:MLEADER}}). Las demás (con un bloque, varias líneas de directriz o líneas curvas) se dibujan como las dibujó el otro programa y se mueven como un todo; el historial dice cuántas.
- Las imágenes se muestran como un marco con el nombre del archivo de la imagen hasta que le da el archivo a CadCraft con {{cmd:IMAGE}}: consulte [Imágenes en un dibujo](topic:pictures#show-the-pictures-a-dwg-uses). Los wipeouts se muestran como su marco, y lo que hay debajo sigue visible.
- Las tablas de un DWG entran como las dibujó el otro programa.
- Las caras 3D del espacio modelo entran en la pestaña {{ui:3D}}, no como objetos 2D; también las que hay dentro de bloques, una vez por cada referencia de bloque del modelo. En un bloque y en una hoja también se dibujan planas, como contornos. Consulte [Modelar en 3D](topic:3d-solids).
- Las capas conservan su color, y los ajustes de activada, congelada, bloqueada y trazado. DEFPOINTS nunca se traza.
- Las cotas pasan a ser cotas reales y editables de CadCraft cuando se pueden leer sus puntos. Primero se muestran exactamente como las dibujó el otro programa; en cuanto cambia una, CadCraft la vuelve a dibujar con su propio estilo.
- Cada presentación se convierte en una pestaña de hoja. En el otro programa, cada presentación tiene una primera ventana gráfica oculta que es la propia hoja; CadCraft la omite.

### Lo que todavía no entra

Todo lo que CadCraft no sabe dibujar se cuenta, no se adivina. El cuadro "Acerca de este archivo" del panel izquierdo lo enumera como "Not shown yet:" seguido de cada tipo de objeto y cuántos hay. Los casos típicos son las tablas de un DXF, las mallas y los sólidos 3D dentro de bloques. Los sólidos 3D, regiones y cuerpos del espacio modelo se muestran en la pestaña 3D (consulte [Modelar en 3D](topic:3d-solids#solids-from-other-programs)). Las ventanas gráficas giradas en el archivo se muestran giradas, como allí, y conservan su giro al guardar; lo mismo ocurre con el SCP actual, los SCP con nombre y una vista girada.

El texto se dibuja con una única fuente de estilo Helvetica. Una etiqueta que cabe en una línea con la fuente más estrecha del programa original puede ocupar dos líneas en CadCraft.

## Guardar

Hay tres formas de guardar. Cada una descarga una copia.

- **Guardar**: pulse {{key:Mod+S}}, haga clic en {{ui:Guardar}} o escriba `SAVE` (también `QSAVE`). Guarda en el formato del dibujo: DWG si abrió un DWG, DXF si abrió un DXF. Un DWG conserva la versión con la que entró (un archivo de 2018 se guarda como 2018). Un dibujo nuevo usa el formato y la versión de DWG que eligió por última vez en Guardar como en este navegador; si nunca eligió ninguno, DWG en formato AutoCAD 2000.
- **Guardar como**: pulse {{key:Mod+Shift+S}}, haga clic en {{ui:Guardar como}} o escriba `SAVEAS`. El cuadro {{ui:Guardar una copia como}} ofrece {{ui:DWG}}, con una lista de {{ui:Versión}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} y {{ui:DXF 2000}}, cada uno con el nombre de archivo que dará, y con el formato y la versión actuales del dibujo ya elegidos. Haga clic en {{ui:Guardar}} para descargar, o en {{ui:Cancelar}} (o pulse {{key:Esc}}) para no guardar nada; el historial dice entonces "Not saved." Lo que elija se mantiene: {{key:Mod+S}} lo usa a partir de entonces para este dibujo, y los dibujos nuevos de este navegador empiezan con ello.
- **DXFOUT**: escriba `DXFOUT`. Siempre descarga una copia en DXF R12, y el siguiente {{key:Mod+S}} sigue guardando en el formato propio del dibujo.

El navegador descarga `<nombre del dibujo>.dwg` o `<nombre del dibujo>.dxf`. Cada guardado es una **descarga nueva**; el archivo que abrió nunca se sobrescribe ni se modifica. El historial lo confirma, por ejemplo "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." Para un DXF dice "(DXF R12, opens in any CAD program)". Las líneas que van debajo enumeran todo lo que cambió por el camino.

Cuando CadCraft se ejecuta en la aplicación de escritorio, guardar funciona como en otros programas de escritorio: {{key:Mod+S}} escribe el dibujo de nuevo en el archivo que abrió, en su propio formato y versión, y el historial dice dónde se guardó. {{ui:Guardar como}} y las exportaciones muestran el cuadro de guardado del sistema, y un archivo `.dwg`, `.dxf` o `.ccsheets` en el que haga doble clic se abre en CadCraft.

Para un PDF, trace en su lugar (véase más abajo).

## Qué conserva y qué cambia un DWG

CadCraft escribe el DWG él mismo, dentro de su navegador, con la misma biblioteca DWG con la que lo lee. Elija la versión en Guardar como: el formato AutoCAD 2000 (versión de archivo AC1015) se abre en más programas, incluidos los antiguos; los formatos más nuevos (2004, AC1018, hasta 2018, AC1032) también conservan los colores reales. No se sube nada, y guardar un DWG funciona sin conexión.

Cada versión se comprueba leyendo de nuevo los archivos guardados con los lectores de DWG de otros tres programas y con el propio CadCraft. Un DWG de CadCraft todavía no se ha abierto en el propio AutoCAD.

### Lo que conserva un DWG

- Líneas, arcos, círculos, elipses, puntos y polilíneas con sus tramos de arco.
- Texto de una línea con su alineación y su factor de anchura.
- Texto de varias líneas y ajustado, como texto de varias líneas. El otro programa lo vuelve a ajustar a partir de la misma anchura.
- Colores de objeto: por capa, por bloque, los 255 colores estándar, y colores reales en el formato 2004 y posteriores.
- Capas con su color, tipo de línea, grosor de línea y sus ajustes de activada, congelada, bloqueada y trazado; los tipos de línea, grosores y escalas de tipo de línea propios de los objetos, los patrones de tipo de línea y la escala de tipo de línea del dibujo.
- Las unidades del dibujo y el formato de longitud (decimal, pies y pulgadas, fracciones…).
- Bloques con su punto base y las definiciones de atributo, incluidas las invisibles, constantes y predefinidas.
- Referencias de bloque con su escala, giro y valores de atributo.
- Rellenos sólidos y tramas con patrón, con su patrón, escala y ángulo (las líneas propias del patrón, de modo que otros programas dibujan las mismas líneas que CadCraft).
- Cotas, como cotas reales: otros programas las vuelven a medir cuando se estiran. Cada una conserva sus propios ajustes (altura de texto, tamaño de flecha, decimales, formato de longitud) y su texto, y lleva la copia dibujada que tiene toda cota de un DWG.
- Hojas (presentaciones): cada hoja con su tamaño de papel y unidades, lo que hay dibujado en ella y sus ventanas gráficas con su vista y escala.
- Vistas con nombre.
- Directrices múltiples, como directrices múltiples.
- Los nombres de capas y bloques tal como los escribió, en mayúsculas y minúsculas. (DXF R12 los escribe en mayúsculas.)

### Lo que cambia un DWG

Cada uno de estos cambios aparece en el historial después de guardar, cuando afecta a su dibujo.

| En CadCraft | En el DWG guardado |
|---|---|
| Colores reales (elegidos con el selector de color), en el formato 2000 | El color estándar más próximo: el formato 2000 solo tiene los 255. Guarde como 2004 o posterior para conservarlos |
| Vistas con nombre de una hoja | Vistas del espacio papel: un DWG no dice de qué hoja, así que cuando CadCraft vuelve a abrir el archivo pertenecen a la primera hoja |
| Texto de varias líneas con un factor de anchura | Anchura de letra normal: en un DWG el factor de anchura solo se aplica al texto de una línea |
| Nombres de capa o de bloque con caracteres que DWG no permite | Modificados: un nombre de un dibujo vinculado como `Base\|Walls` pasa a ser `Base$0$Walls` (como nombra los elementos fijar un dibujo vinculado), y los demás caracteres pasan a ser `_` |

### Por qué R12, y qué se convierte

Cuando guarda como DXF, CadCraft escribe DXF R12, la versión que puede abrir cualquier programa de CAD. Es anterior a algunas funciones, así que algunas cosas se escriben de forma más simple:

| En CadCraft | En el archivo R12 guardado |
|---|---|
| Texto de varias líneas | Un objeto de texto por línea |
| Elipses | Polilíneas que siguen la elipse |
| Tramas (de archivos abiertos) | Solo sus contornos |
| Colores reales (elegidos con el selector de color) | El color estándar más próximo |
| Grosores de línea, y escalas de tipo de línea propias de los objetos | Se omiten: R12 no tiene ninguno de los dos (los tipos de línea se conservan) |
| Nombres de capa y de bloque | Se escriben en mayúsculas; los espacios y otros caracteres pasan a ser `_`, y los nombres se cortan a 31 caracteres ("Title block" pasa a ser `TITLE_BLOCK`) |
| Capas definidas para no trazarse | Otros programas las trazarán (CadCraft recuerda el ajuste cuando el dibujo tiene una hoja) |
| Cotas | Cotas reales con su propio bloque dibujado, de modo que otros programas las muestran como usted las ve |
| Directrices múltiples | Las líneas, la punta de flecha y el texto que dibujan |
| Vistas con nombre | Se conservan, con los nombres en mayúsculas; las vistas de una hoja vuelven a la primera hoja |
| Varias hojas | La primera hoja es el espacio papel que muestra cualquier programa; las demás se conservan como bloques llamados `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft vuelve a convertir en hojas al abrir el archivo |

El historial enumera cada uno de estos casos que afectó a su dibujo.

:::tip
Para seguir trabajando en un dibujo durante varios días, guarde como DXF y abra ese DXF la próxima vez. Todo lo que CadCraft sabe dibujar sobrevive al viaje de ida y vuelta, incluidas las cotas, los bloques y todas las hojas.
:::

## Dibujos vinculados (referencias externas)

{{cmd:XATTACH}} (`XA`, o {{ui:Bloques}} › {{ui:Más}} › {{ui:Vincular un dibujo (xref)}}) vincula otro DWG o DXF: elija el archivo y después haga clic donde va ({{key:Enter}} lo coloca en 0,0). Entra como un único bloque con el nombre del archivo, a la escala correcta cuando los dos dibujos tienen unidades distintas. Sus capas y bloques conservan sus nombres con el nombre del vínculo por delante (`Plan|Walls`, `Plan|Door`), de modo que nunca se mezclan con los suyos: active y desactive las capas vinculadas, congélelas o bloquéelas como las suyas. Un vínculo es de solo lectura: cambie el otro dibujo y vuelva a cargarlo. Lo que establezca en las capas de un vínculo (color, tipo de línea, grosor de línea, activada/desactivada, congelada, bloqueada, trazado) se conserva al volver a cargarlo, al guardar el dibujo como DWG mientras el vínculo sigue siendo un vínculo, y cuando otro dibujo vincula este.

{{cmd:XREF}} (`XR`): `?` enumera los vínculos (cargados o no, qué archivo, cuántas referencias); `A` vincula; `R` recarga uno desde su archivo (elija otra vez el archivo: el navegador no puede acceder por sí solo a sus carpetas); `B` lo fija (pasa a ser bloques y capas normales llamados `Plan$0$Walls`); `D` desvincula uno (sus referencias y capas desaparecen). Cada acción es un paso de deshacer.

{{cmd:XCLIP}} (`XC`) recorta referencias de bloque y vínculos: selecciónelos, `N` para un límite nuevo, y después `R` y dos esquinas o `P` y los puntos de un polígono ({{key:Enter}} lo cierra); `D` quita el recorte. Solo lo que queda dentro se muestra y se traza, y el recorte se mueve con la referencia. DWG y DXF 2000 conservan los recortes; DXF R12 guarda la referencia entera y lo dice. Cuando fija un vínculo que tiene referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` fija todo, `C` conserva solo la parte recortada de cada referencia (las líneas y los arcos se cortan en el límite; los textos y los bloques anidados se quedan cuando su punto de inserción está dentro).

Un dibujo que abra puede vincular archivos que CadCraft no ve: indica cuántos no están cargados. Use {{cmd:XREF}}, `R` y elija cada archivo para verlos.

Al guardar, un vínculo cargado se **fija** en el archivo (otros programas ven bloques y capas normales llamados `Plan$0$…`), y el historial lo dice. Un vínculo que no está cargado sigue siendo un vínculo a su archivo, en DWG y en DXF.

## Abrir en 3D

{{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) abre el dibujo en la aplicación de modelado 3D en una pestaña nueva, como DWG, sin subirlo. Los cambios que haga allí se quedan allí; guárdelos allí. El elemento del menú solo se muestra donde esa aplicación puede recibir un dibujo traspasado.

## Trazar un PDF

Pulse {{key:Mod+P}}, haga clic en {{ui:Trazar}} o escriba `PLOT`. El PDF se genera dentro del navegador y se descarga, o se abre en una pestaña nueva para imprimirlo. Consulte [Trazar a PDF](topic:plot-pdf).

## Adónde van los archivos

Cada guardado y cada trazado es una descarga, así que los archivos van a donde su navegador deja las descargas: normalmente la carpeta Descargas. Para elegir una carpeta cada vez, cambie el ajuste de descargas de su navegador; [Navegadores y ordenadores](common:browsers) muestra dónde.

Nada de lo que abre o guarda se nos envía. Consulte [Adónde van sus archivos](common:your-files).

## Archivos de proyecto PLN y PLA

CadCraft abre dibujos DWG y DXF, no los archivos propios de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Al abrir uno, le dice qué es. En Archicad, guarde como DWG las vistas o presentaciones que necesite y ábralas aquí, o exporte el modelo como IFC y ábralo en BimCraft. Donde BimCraft puede recibir el archivo, CadCraft ofrece {{ui:Abrir en BimCraft}}.

## Si la página se cierra antes de guardar

CadCraft guarda una copia de cada dibujo que cambia, solo en este navegador, un momento después de que deje de editar. Si la pestaña se cierra, el navegador se detiene o el ordenador se reinicia antes de que guarde, CadCraft pregunta **¿Recuperar su trabajo?** la próxima vez que se inicie: {{ui:Recuperar}} vuelve a abrir el dibujo, sin guardar, en su propia pestaña. Al guardar el dibujo se elimina su copia. Consulte [Recuperar su trabajo](common:recover).

## Con y sin conexión

Abrir, dibujar, guardar (DWG y DXF) y trazar ocurren en su ordenador, así que funcionan sin conexión una vez que CadCraft se ha cargado.

Para usar CadCraft sin ninguna conexión, haga clic en {{ui:Guardar para uso sin conexión}} en la barra superior mientras está conectado. La etiqueta va contando ("Saving 40 of 212") y termina en "Offline ready". La copia guardada incluye el lector de DWG, unos 5 MB en total, así que **los archivos DWG también se abren sin conexión** una vez guardada. Haga clic en el botón otra vez para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. "Could not save" significa que algunos archivos no se descargaron: compruebe la conexión y haga clic para intentarlo de nuevo. "Offline not available" significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunos ordenadores gestionados).

Sin una copia guardada, el lector de DWG se obtiene la primera vez que abre un DWG después de cargar la página, así que abrir un DWG sin conexión puede fallar; los archivos DXF nunca lo necesitan. No recargue la página sin conexión a menos que CadCraft esté guardado.

Consulte [Trabajar sin conexión](common:offline) para los detalles.

:::offline
Ahora está sin conexión. Los dibujos se guardan como DWG o DXF y se trazan con normalidad, y los archivos DXF se abren. Los archivos DWG se abren si CadCraft muestra "Offline ready", o si el lector de DWG ya se cargó en esta pestaña.
:::

## Restricciones en los archivos

Las restricciones y los parámetros (consulte [Restringir un dibujo](topic:constraints)) se guardan tanto en DWG como en DXF. Cada objeto restringido lleva una pequeña nota de CadCraft (datos extendidos), y un bloque sin usar llamado `CADCRAFT_PARAMETRIC` contiene las restricciones y la tabla de parámetros. Otros programas abren el dibujo con normalidad e ignoran ambos; pueden eliminar el bloque sin usar al depurar. Las notas se refieren a los objetos por su propia clave, no por los identificadores del archivo, de modo que un programa que renumere los identificadores no las rompe. Cuando otro programa ha eliminado o cambiado un objeto restringido, CadCraft descarta las restricciones sobre él al abrir el archivo y dice cuántas. Un archivo sin ellas se abre sin restricciones.

También se abre un croquis exportado desde un modelador de piezas (`.json`): consulte [Mover croquis hacia y desde otros modeladores de piezas](topic:solidworks-sketches).

## Todavía no disponible

- Directrices múltiples como objetos de directriz múltiple en un DXF guardado (R12 no las tiene: se guardan como lo que dibujan).
- Imágenes en un DXF guardado (se guardan como sus marcos; DWG las conserva como imágenes), y wipeouts que ocultan lo que hay debajo.
- Guardar una versión de DXF más reciente que la 2000.
- Guardado en la nube y sincronización entre ordenadores.

Consulte [Todavía sin construir](topic:not-built-yet) para la lista completa.
