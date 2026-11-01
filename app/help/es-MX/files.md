---
title: Archivos: qué se abre y qué se guarda
summary: Los formatos que CadCraft abre, guarda y exporta, qué se conserva o se convierte, y adónde van los archivos.
keywords: xclip, clip, contorno de xclip, incorporar recortado, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversión, descarga, guardar como, dxfout, versión de dwg, formato, qsave, xref, xattach, dibujo vinculado, referencia externa, incorporar, recargar, desvincular
from: 6d68b34e
---

## De un vistazo

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto, cualquier versión) | Sí | Sí, como DXF R12 o DXF 2000 | El DXF binario se rechaza: guárdelo antes como DXF de texto. |
| DWG | Sí | Sí, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Lo lee y lo escribe la biblioteca de DWG propia de CadCraft (archivos de AutoCAD R13 a 2018). Su DWG nunca se modifica. Los archivos dañados, o de versiones que el lector no maneja, se rechazan con un mensaje. |
| PDF | Trae una página: como fondo o como objetos ([Fondos PDF](topic:pdf-underlay)) | Sí, al trazar | PDF vectorial de una hoja, o del modelo a una escala. |

Cada dibujo que abre (o inicia con {{ui:Nuevo}}) recibe su propia pestaña sobre el área de dibujo; en lugar de agregar una pestaña se usa un dibujo nuevo que nadie ha tocado todavía. Haga clic en una pestaña para cambiar, en su {{ui:×}} para cerrarla (CadCraft pregunta antes si hay cambios sin guardar), o acomode los dibujos abiertos lado a lado: vea [Dividir la pantalla](topic:split-screen).

## Abrir un dibujo

- Pulse {{key:Mod+O}}, haga clic en {{ui:Abrir}} o escriba `OPEN`, y elija el archivo.
- O arrastre un archivo `.dwg` o `.dxf` al área de dibujo.

El archivo se lee dentro de su navegador. No se sube a ninguna parte. El historial informa cuántos objetos y capas entraron y cuánto tardó, y la sección {{ui:Dibujo}} del panel izquierdo muestra el formato, por ejemplo "DWG 2018 (AC1032)".

El lector de DWG es parte de CadCraft y se trae con el primer DWG que abre después de cargar la página (unos cientos de KB), así que no hay una descarga aparte que esperar. Lee el archivo en segundo plano, de modo que la página sigue respondiendo mientras se abre un DWG grande.

### Qué entra

- Líneas, arcos, círculos, polilíneas (con segmentos de arco), elipses, puntos, texto y texto de líneas múltiples, sólidos, sombreados (los patrones estándar dibujados como sus líneas, los demás como un tono plano), referencias a bloque con sus atributos (valores que puede editar; vea [Atributos de bloque](topic:attributes)), cotas y presentaciones con sus ventanas gráficas.
- Las splines entran como splines (grado, puntos de control, nudos, pesos, puntos de ajuste); vea [Splines y polilíneas](topic:splines).
- Las directrices múltiples con una línea de directriz y texto entran como directrices múltiples de CadCraft que puede editar (vea {{cmd:MLEADER}}). Las demás (con un bloque, varias líneas de directriz o líneas curvas) se dibujan como las dibujó el otro programa y se mueven como una sola; el historial dice cuántas.
- Las imágenes se muestran como un marco con el nombre de archivo de la imagen hasta que le da a CadCraft el archivo con {{cmd:IMAGE}}: vea [Imágenes en un dibujo](topic:pictures#show-the-pictures-a-dwg-uses). Los wipeouts se muestran como su marco, y lo que está debajo sigue visible.
- Las tablas de un DWG entran como las dibujó el otro programa.
- Las caras 3D del espacio modelo entran en la pestaña {{ui:3D}}, no como objetos 2D; igual las que están dentro de bloques, una vez por cada referencia a bloque en el modelo. En un bloque y en una hoja también se dibujan planas, como contornos. Vea [Modelar en 3D](topic:3d-solids).
- Las capas conservan su color y sus parámetros de activada, inutilizada, bloqueada y trazado. DEFPOINTS nunca se traza.
- Las cotas se vuelven cotas reales y editables de CadCraft donde se pueden leer sus puntos. Primero se muestran exactamente como las dibujó el otro programa; en cuanto cambia una, CadCraft la vuelve a dibujar con su propio estilo.
- Cada presentación se vuelve una pestaña de hoja. En el otro programa cada presentación tiene una primera ventana gráfica oculta que es la hoja misma; CadCraft omite esa.

### Qué todavía no entra

Todo lo que CadCraft no puede dibujar se cuenta, no se adivina. El cuadro "Acerca de este archivo" del panel izquierdo lo lista como "Todavía no se muestran:" seguido de cada tipo de objeto y cuántos hay. Casos típicos son las tablas en un DXF, las mallas y los sólidos 3D dentro de bloques. Los sólidos 3D, regiones y cuerpos del espacio modelo se muestran en la pestaña 3D (vea [Modelar en 3D](topic:3d-solids#solids-from-other-programs)). Las ventanas gráficas giradas en el archivo se muestran giradas, como allá, y conservan su giro al guardar; igual el SCP actual, los SCP con nombre y una vista girada.

El texto se dibuja en una sola fuente de estilo Helvetica. Una etiqueta que cabe en una línea en la fuente más angosta del programa original puede ajustarse en dos líneas en CadCraft.

## Guardar

Hay tres maneras de guardar. Cada una descarga una copia.

- **Guardar**: pulse {{key:Mod+S}}, haga clic en {{ui:Guardar}} o escriba `SAVE` (también `QSAVE`). Guarda en el formato del dibujo: DWG si abrió un DWG, DXF si abrió un DXF. Un DWG conserva la versión con la que entró (un archivo 2018 se guarda como 2018). Un dibujo nuevo usa el formato y la versión de DWG que eligió por última vez en Guardar como en este navegador; si nunca eligió uno, DWG en formato AutoCAD 2000.
- **Guardar como**: pulse {{key:Mod+Shift+S}}, haga clic en {{ui:Guardar como}} o escriba `SAVEAS`. El cuadro {{ui:Guardar una copia como}} ofrece {{ui:DWG}}, con una lista {{ui:Versión}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} y {{ui:DXF 2000}}, cada uno con el nombre de archivo que dará, y con el formato y la versión actuales del dibujo ya elegidos. Haga clic en {{ui:Guardar}} para descargar, o en {{ui:Cancelar}} (o {{key:Esc}}) para no guardar nada; el historial dice entonces "No se guardó." Lo que elija se conserva: {{key:Mod+S}} lo usa en este dibujo de ahí en adelante, y los dibujos nuevos de este navegador empiezan con ello.
- **DXFOUT**: escriba `DXFOUT`. Siempre descarga una copia DXF R12, y el siguiente {{key:Mod+S}} sigue guardando en el formato propio del dibujo.

El navegador descarga `<nombre del dibujo>.dwg` o `<nombre del dibujo>.dxf`. Cada guardado es una **descarga nueva**; el archivo que abrió nunca se sobrescribe ni se modifica. El historial lo confirma, por ejemplo "Se guardó una copia como Plan.dwg (DWG (AutoCAD 2018)). Su Plan.dxf original no se modificó." Para un DXF dice "(DXF R12, se abre en cualquier programa de CAD)". Las líneas siguientes listan todo lo que cambió en el camino.

Cuando CadCraft se ejecuta en la aplicación de escritorio, guardar funciona como en otros programas de escritorio: {{key:Mod+S}} escribe el dibujo de vuelta en el archivo que abrió, en su propio formato y versión, y el historial dice dónde se guardó. {{ui:Guardar como}} y las exportaciones muestran el cuadro de guardado del sistema, y un archivo `.dwg`, `.dxf` o `.ccsheets` al que haga doble clic se abre en CadCraft.

Para un PDF, trace en su lugar (vea más abajo).

## Qué conserva y qué cambia un DWG

CadCraft escribe el DWG por sí mismo, dentro de su navegador, con la misma biblioteca de DWG con la que lee. Elija la versión en Guardar como: el formato AutoCAD 2000 (versión de archivo AC1015) se abre en más programas, incluso antiguos; los formatos más nuevos (2004, AC1018, hasta 2018, AC1032) conservan además los colores verdaderos. No se sube nada, y guardar un DWG funciona sin conexión.

Cada versión se comprueba leyendo de vuelta los archivos guardados con los lectores de DWG de otros tres programas y con el propio CadCraft. Un DWG de CadCraft todavía no se ha abierto en AutoCAD mismo.

### Qué conserva un DWG

- Líneas, arcos, círculos, elipses, puntos y polilíneas con sus segmentos de arco.
- Texto de una línea con su alineación y factor de ancho.
- Texto de líneas múltiples y ajustado, como texto de líneas múltiples. El otro programa lo vuelve a ajustar con el mismo ancho.
- Colores de objeto: porCapa, porBloque, los 255 colores estándar y colores verdaderos en el formato 2004 y posteriores.
- Capas con su color, tipo de línea, grosor de línea y sus parámetros de activada, inutilizada, bloqueada y trazado; los tipos de línea, grosores y escalas de tipo de línea propios de los objetos, los patrones de tipo de línea y la escala de tipo de línea del dibujo.
- Las unidades del dibujo y el formato de longitud (decimal, pies y pulgadas, fracciones…).
- Bloques con su punto base y definiciones de atributo, incluidos los invisibles, constantes y preestablecidos.
- Referencias a bloque con su escala, giro y valores de atributo.
- Rellenos sólidos y sombreados con patrón, con su patrón, escala y ángulo (las líneas propias del patrón, de modo que otros programas dibujan las mismas líneas que CadCraft).
- Cotas, como cotas reales: otros programas las vuelven a medir cuando se estiran. Cada una conserva sus propios parámetros (altura de texto, tamaño de flecha, decimales, formato de longitud) y su texto, y lleva la copia dibujada que tiene toda cota de DWG.
- Hojas (presentaciones): cada hoja con su tamaño de papel y unidades, lo dibujado en ella y sus ventanas gráficas con su vista y escala.
- Vistas guardadas.
- Directrices múltiples, como directrices múltiples.
- Nombres de capa y de bloque tal como los escribió, en mayúsculas y minúsculas. (DXF R12 los escribe en mayúsculas.)

### Qué cambia un DWG

Cada uno de estos casos se lista en el historial después de guardar, cuando se aplica a su dibujo.

| En CadCraft | En el DWG guardado |
|---|---|
| Colores verdaderos (elegidos con el selector de color), en el formato 2000 | El color estándar más cercano: el formato 2000 solo tiene los 255. Guarde como 2004 o posterior para conservarlos |
| Vistas guardadas de una hoja | Vistas del espacio papel: un DWG no dice de qué hoja, así que cuando CadCraft vuelve a abrir el archivo pertenecen a la primera hoja |
| Texto de líneas múltiples con factor de ancho | Ancho de letra normal: en un DWG el factor de ancho solo se aplica al texto de una línea |
| Nombres de capa o de bloque con caracteres que DWG no permite | Cambiados: un nombre de un dibujo vinculado como `Base\|Walls` se vuelve `Base$0$Walls` (la manera en que lo nombra incorporar un dibujo vinculado), y los demás caracteres se vuelven `_` |

### Por qué R12, y qué se convierte

Al guardar como DXF, CadCraft escribe DXF R12, la versión que puede abrir todo programa de CAD. Es más antigua que algunas funciones, así que unas cuantas cosas se escriben de forma más simple:

| En CadCraft | En el archivo R12 guardado |
|---|---|
| Texto de líneas múltiples | Un objeto de texto por línea |
| Elipses | Polilíneas que siguen la elipse |
| Sombreados (de archivos abiertos) | Solo sus contornos |
| Colores verdaderos (elegidos con el selector de color) | El color estándar más cercano |
| Grosores de línea y escalas de tipo de línea propias de los objetos | Se omiten: R12 no tiene ninguno (los tipos de línea se conservan) |
| Nombres de capa y de bloque | Se escriben en mayúsculas; los espacios y otros caracteres se vuelven `_`, y los nombres se cortan a 31 caracteres ("Title block" se vuelve `TITLE_BLOCK`) |
| Capas configuradas para no trazarse | Otros programas las trazarán (CadCraft recuerda el parámetro cuando el dibujo tiene una hoja) |
| Cotas | Cotas reales con su propio bloque dibujado, de modo que otros programas las muestran como usted las ve |
| Directrices múltiples | Las líneas, la punta de flecha y el texto que dibujan |
| Vistas guardadas | Se conservan, con nombres en mayúsculas; las vistas de una hoja vuelven en la primera hoja |
| Varias hojas | La primera hoja es el espacio papel que muestra todo programa; las demás se conservan como bloques llamados `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft vuelve a convertir en hojas al abrir el archivo |

El historial lista cada uno de estos casos que se aplicó a su dibujo.

:::tip
Para seguir trabajando en un dibujo durante varios días, guarde como DXF y abra ese DXF la próxima vez. Todo lo que CadCraft puede dibujar sobrevive al viaje de ida y vuelta, incluidas las cotas, los bloques y todas las hojas.
:::

## Dibujos vinculados (referencias externas)

{{cmd:XATTACH}} (`XA`, o {{ui:Bloques}} › {{ui:Más}} › {{ui:Vincular un dibujo (xref)}}) vincula otro DWG o DXF: elija el archivo y luego haga clic donde va ({{key:Enter}} lo pone en 0,0). Entra como un bloque con el nombre del archivo, a la escala correcta cuando los dos dibujos tienen unidades distintas. Sus capas y bloques conservan sus nombres con el nombre del vínculo por delante — `Plan|Walls`, `Plan|Door` — para que nunca se mezclen con los suyos: active y desactive las capas vinculadas, inutilícelas o bloquéelas como las suyas. Un vínculo es de solo lectura: cambie el otro dibujo y vuelva a cargarlo. Lo que establezca en las capas de un vínculo (color, tipo de línea, grosor de línea, activada/desactivada, inutilizada, bloqueada, trazado) se conserva cuando lo recarga, cuando guarda el dibujo como DWG mientras el vínculo sigue siendo un vínculo, y cuando otro dibujo vincula este.

{{cmd:XREF}} (`XR`): `?` lista los vínculos (cargados o no, qué archivo, cuántas referencias); `A` vincula; `R` recarga uno desde su archivo (elija el archivo otra vez: el navegador no puede llegar por sí solo a sus carpetas); `B` incorpora uno (se vuelve bloques y capas comunes llamados `Plan$0$Walls`); `D` desvincula uno (sus referencias y capas se van). Cada uno es un paso de deshacer.

{{cmd:XCLIP}} (`XC`) recorta referencias a bloque y vínculos: designe los objetos, `N` para un contorno nuevo, luego `R` y dos esquinas o `P` y los puntos de un polígono ({{key:Enter}} lo cierra); `D` quita el recorte. Solo se muestra y se traza lo que queda dentro, y el recorte se mueve con la referencia. DWG y DXF 2000 conservan los recortes; DXF R12 guarda la referencia completa y lo dice. Cuando incorpora un vínculo que tiene referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` incorpora todo, `C` conserva solo la parte recortada de cada referencia (las líneas y arcos se cortan en el contorno; los textos y bloques anidados se quedan cuando su punto de inserción está dentro).

Un dibujo que abra puede vincular archivos que CadCraft no puede ver: dice cuántos no están cargados. Use {{cmd:XREF}}, `R` y elija cada archivo para verlos.

Al guardar, un vínculo cargado se **incorpora** al archivo (otros programas ven bloques y capas comunes llamados `Plan$0$…`), y el historial lo dice. Un vínculo que no está cargado sigue siendo un vínculo a su archivo, en DWG y DXF.

## Abrir en 3D

{{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) abre el dibujo en la aplicación de modelado 3D en una pestaña nueva, como DWG, sin subirlo. Los cambios hechos allá se quedan allá; guárdelos allá. El elemento de menú solo aparece donde esa aplicación puede recibir un dibujo.

## Trazar un PDF

Pulse {{key:Mod+P}}, haga clic en {{ui:Trazar}} o escriba `PLOT`. El PDF se hace dentro del navegador y se descarga, o se abre en una pestaña nueva para imprimirlo. Vea [Trazar a PDF](topic:plot-pdf).

## Adónde van los archivos

Cada guardado y cada trazado es una descarga, así que los archivos llegan adonde su navegador pone las descargas: normalmente la carpeta Descargas. Para elegir una carpeta cada vez, cambie la configuración de descargas de su navegador; [Navegadores y computadoras](common:browsers) muestra dónde.

Nada de lo que abre o guarda se nos envía. Vea [Adónde van sus archivos](common:your-files).

## Archivos de proyecto PLN y PLA

CadCraft abre dibujos DWG y DXF, no los archivos propios de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Al abrir uno, le dice qué es. En Archicad, guarde como DWG las vistas o presentaciones que necesite y ábralas aquí, o exporte el modelo como IFC y ábralo en BimCraft. Donde BimCraft puede recibir el archivo, CadCraft ofrece {{ui:Abrir en BimCraft}}.

## Si la página se cierra antes de guardar

CadCraft conserva una copia de cada dibujo que cambia, solo en este navegador, un momento después de que deja de editar. Si la pestaña se cierra, el navegador se detiene o la computadora se reinicia antes de que guarde, CadCraft pregunta **¿Recuperar su trabajo?** la próxima vez que inicia: {{ui:Recuperar}} abre el dibujo de nuevo, sin guardar, en su propia pestaña. Al guardar el dibujo se elimina su copia. Vea [Recuperar su trabajo](common:recover).

## Con y sin conexión

Abrir, dibujar, guardar (DWG y DXF) y trazar ocurren en su computadora, así que funcionan sin conexión una vez que CadCraft se ha cargado.

Para usar CadCraft sin ninguna conexión, haga clic en {{ui:Guardar para usar sin conexión}} en la barra de arriba mientras está en línea. La etiqueta cuenta hacia arriba ("Guardando 40 de 212") y termina en "Lista sin conexión". La copia guardada incluye el lector de DWG, unos 5 MB en total, así que **los archivos DWG también se abren sin conexión** una vez guardada. Haga clic en el botón de nuevo para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. "No se pudo guardar" significa que algunos archivos no se descargaron: revise la conexión y haga clic para intentar de nuevo. "Sin conexión no disponible" significa que esta ventana del navegador no puede conservar una copia (ventanas privadas y algunas computadoras administradas).

Sin una copia guardada, el lector de DWG se trae la primera vez que abre un DWG después de cargar la página, así que abrir un DWG sin conexión puede fallar; los archivos DXF nunca lo necesitan. No recargue la página sin conexión a menos que CadCraft esté guardado.

Vea [Trabajar sin conexión](common:offline) para los detalles.

:::offline
Ahora no tiene conexión. Los dibujos se guardan como DWG o DXF y se trazan con normalidad, y los archivos DXF se abren. Los archivos DWG se abren si CadCraft muestra "Lista sin conexión", o si el lector de DWG ya se cargó en esta pestaña.
:::

## Restricciones en los archivos

Las restricciones y parámetros (vea [Restringir un dibujo](topic:constraints)) se guardan tanto en DWG como en DXF. Cada objeto restringido lleva una pequeña nota de CadCraft (datos extendidos), y un bloque sin usar llamado `CADCRAFT_PARAMETRIC` contiene las restricciones y la tabla de parámetros. Otros programas abren el dibujo con normalidad e ignoran ambos; pueden eliminar el bloque sin usar al depurar. Las notas se refieren a los objetos por su propia clave, no por los identificadores del archivo, así que un programa que renumera identificadores no las rompe. Cuando otro programa ha eliminado o cambiado un objeto restringido, CadCraft descarta las restricciones sobre él al abrir el archivo y dice cuántas. Un archivo sin ellas se abre sin restricciones.

También se abre un croquis exportado desde un modelador de piezas (`.json`): vea [Llevar croquis a otros modeladores de piezas y traerlos de ellos](topic:solidworks-sketches).

## Todavía no disponible

- Directrices múltiples como objetos de directriz múltiple en un DXF guardado (R12 no tiene ninguno: se guardan como lo que dibujan).
- Imágenes en un DXF guardado (se guardan como sus marcos; DWG las conserva como imágenes), y wipeouts que ocultan lo que está debajo.
- Guardar una versión de DXF más nueva que 2000.
- Guardar en la nube y sincronizar entre computadoras.

Vea [Lo que aún no está hecho](topic:not-built-yet) para la lista completa.
