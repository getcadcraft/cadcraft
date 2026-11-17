---
title: Archivos: qué se abre, qué se guarda
summary: Los formatos que CadCraft abre, guarda y exporta, qué se conserva o se convierte, y adónde van los archivos.
keywords: xclip, clip, límite de xclip, incorporar recortado, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversión, descargar, saveas, dxfout, guardar como, formato de dwg, format, qsave, xref, xattach, dibujo vinculado, referencia externa, incorporar, recargar, desvincular
from: b8c5778d
---

## De un vistazo

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto o binario, cualquier versión) | Sí | Sí, como DXF R12, DXF 2000 o DXF 2000 (binario) | Un DXF binario se abre igual que uno de texto y se guarda de nuevo como binario. |
| DWG | Sí | Sí, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Lo lee y escribe la propia biblioteca DWG de CadCraft (archivos de AutoCAD R13 a 2018). Su DWG nunca se modifica. Los archivos dañados, o las versiones que el lector no maneja, se rechazan con un mensaje. |
| PDF | Trae una página como base o como objetos ([Bases PDF](topic:pdf-underlay)) | Sí, al trazar | PDF vectorial de una hoja, o del modelo a una escala. |

Cada dibujo que abra (o inicie con {{ui:Nuevo}}) obtiene su propia pestaña sobre el área de dibujo; un dibujo nuevo que nadie ha tocado todavía se usa en lugar de añadir una pestaña. Haga clic en una pestaña para cambiar a ella, en su {{ui:×}} para cerrarla (CadCraft pregunta primero si hay cambios sin guardar), o acomode los dibujos abiertos lado a lado: consulte [Dividir la pantalla](topic:split-screen).

## Abrir un dibujo

- Pulse {{key:Mod+O}}, haga clic en {{ui:Abrir}}, o escriba `OPEN`, y luego elija el archivo.
- O arrastre un archivo `.dwg` o `.dxf` hasta el área de dibujo.

El archivo se lee dentro de su navegador. No se sube a ningún lado. El historial informa cuántos objetos y capas entraron y cuánto tardó, y la sección {{ui:Dibujo}} del panel izquierdo muestra el formato, por ejemplo "DWG 2018 (AC1032)".

El lector de DWG forma parte de CadCraft y se descarga con el primer DWG que abra después de cargar la página (unos cientos de KB), así que no hay una descarga aparte que esperar. Lee el archivo en segundo plano, de modo que la página sigue respondiendo mientras se abre un DWG grande.

Un DXF se lee en partes de unos 4 MB, nunca como un solo bloque de texto, así que un DXF de más de 512 MB también se abre. Lo que limita es la memoria de su computadora: mientras se abre un DXF, espere que use aproximadamente de 16 a 20 veces el tamaño del archivo (un DXF de 100 MB con unos 690 000 objetos usó cerca de 1.5 GB en nuestra prueba).

### Qué entra

- Líneas, arcos, círculos, polilíneas (con segmentos de arco), elipses, puntos, texto y texto de líneas múltiples, sólidos, sombreados (los patrones estándar se dibujan como sus líneas, los demás como un tono plano), referencias a bloques con sus atributos (valores que puede editar; consulte [Atributos de bloque](topic:attributes)), cotas, y hojas (presentaciones) con sus ventanas gráficas.
- Las splines entran como splines (grado, puntos de control, nudos, pesos, puntos de ajuste); consulte [Splines y polilíneas](topic:splines).
- Las directrices múltiples con una línea de directriz y texto entran como directrices múltiples de CadCraft que puede editar (consulte {{cmd:MLEADER}}). Las demás (con un bloque, varias líneas de directriz o líneas curvas) se dibujan como las dibujó el otro programa y se mueven como una unidad; el historial indica cuántas son.
- Las imágenes se muestran como un marco con el nombre del archivo de la imagen, hasta que le dé a CadCraft el archivo con {{cmd:IMAGE}}: consulte [Imágenes en un dibujo](topic:pictures#show-the-pictures-a-dwg-uses). Los enmascarados se muestran como su marco, y lo que está debajo sigue visible.
- Las tablas en un DWG entran como las dibujó el otro programa.
- Las caras 3D del espacio modelo entran en la pestaña {{ui:3D}}, no como objetos 2D; lo mismo ocurre con las que están dentro de bloques, una vez por referencia de bloque en el modelo. En un bloque y en una hoja también se dibujan planas, como contornos. Consulte [Modelo en 3D](topic:3d-solids).
- Las capas conservan su color y sus ajustes de encendido, inutilizado, bloqueo y trazado. DEFPOINTS nunca se traza.
- Las cotas se convierten en cotas reales y editables de CadCraft cuando se pueden leer sus puntos. Primero se muestran exactamente como las dibujó el otro programa; en cuanto cambie una, CadCraft la vuelve a dibujar con su propio estilo.
- Cada presentación se convierte en una pestaña de hoja. En el otro programa, cada presentación tiene una primera ventana gráfica oculta que es la propia hoja; CadCraft la omite.

### Lo que todavía no entra

Cualquier cosa que CadCraft no pueda dibujar se cuenta, no se adivina. El recuadro "About this file" del panel izquierdo lo indica como "Not shown yet:", seguido de cada tipo de objeto y cuántos son. Casos típicos: tablas en un DXF, mallas y sólidos 3D dentro de bloques. Los sólidos 3D, regiones y cuerpos en el espacio modelo se muestran en la pestaña 3D (consulte [Modelo en 3D](topic:3d-solids#solids-from-other-programs)). Las ventanas gráficas giradas en el archivo se muestran giradas, como allí, y conservan su giro al guardar; lo mismo ocurre con el UCS actual, los UCS con nombre y una vista girada.

El texto se dibuja con una sola fuente tipo Helvetica. Una etiqueta que cabe en una línea con la fuente más estrecha del programa original puede pasar a dos líneas en CadCraft.

## Guardar

Hay tres formas de guardar. Cada una descarga una copia.

- **Guardar**: pulse {{key:Mod+S}}, haga clic en {{ui:Guardar}}, o escriba `SAVE` (también `QSAVE`). Guarda en el formato del dibujo: DWG si abrió un DWG, DXF si abrió un DXF. Un DWG conserva la versión con la que llegó (un archivo 2018 se guarda como 2018). Un dibujo nuevo usa el formato y la versión de DWG que eligió por última vez en {{ui:Guardar como}} en este navegador; si nunca eligió una, DWG en formato AutoCAD 2000.
- **Guardar como**: pulse {{key:Mod+Shift+S}}, haga clic en {{ui:Guardar como}}, o escriba `SAVEAS`. El cuadro {{ui:Guardar una copia como}} ofrece {{ui:DWG}}, con una lista de {{ui:Versión}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} y {{ui:DXF 2000}}, cada uno con el nombre de archivo que le dará, y con el formato y la versión actuales del dibujo ya elegidos. Haga clic en {{ui:Guardar}} para descargar, o en {{ui:Cancel}} (o {{key:Esc}}) para no guardar nada; el historial entonces dice "Not saved." Su elección se mantiene: {{key:Mod+S}} la usa para este dibujo a partir de ese momento, y los dibujos nuevos en este navegador empiezan con ella.
- **DXFOUT**: escriba `DXFOUT`. Siempre descarga una copia DXF R12, y el siguiente {{key:Mod+S}} aún guarda en el formato propio del dibujo.

El navegador descarga `<drawing name>.dwg` o `<drawing name>.dxf`. Cada guardado es una **descarga nueva**; el archivo que abrió nunca se sobrescribe ni se cambia. El historial lo confirma, por ejemplo "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." Para un DXF dice "(DXF R12, opens in any CAD program)". Las líneas debajo enumeran todo lo que cambió en el camino.

Cuando CadCraft se ejecuta en la aplicación de escritorio, guardar funciona como en otros programas de escritorio: {{key:Mod+S}} escribe el dibujo de vuelta en el archivo que abrió, en su formato y versión propios, y el historial indica dónde se guardó. {{ui:Guardar como}} y las exportaciones muestran el cuadro de guardar del sistema, y un archivo `.dwg`, `.dxf` o `.ccsheets` que haga doble clic se abre en CadCraft.

Para un PDF, trace en su lugar (consulte abajo).

## Qué conserva y qué cambia un DWG

CadCraft escribe el DWG por sí mismo, dentro de su navegador, con la misma biblioteca DWG con la que lo lee. Elija la versión en {{ui:Guardar como}}: el formato AutoCAD 2000 (versión de archivo AC1015) se abre en más programas, incluso antiguos; los formatos más nuevos (2004, AC1018, hasta 2018, AC1032) también conservan colores verdaderos. Nada se sube, y guardar un DWG funciona sin conexión.

Cada versión se verifica leyendo los archivos guardados de vuelta con los lectores DWG de otros tres programas y con el propio CadCraft. Un DWG de CadCraft todavía no se ha abierto en el propio AutoCAD.

### Lo que conserva un DWG

- Líneas, arcos, círculos, elipses, puntos y polilíneas con sus segmentos de arco.
- Texto de una línea, con su alineación y su factor de ancho.
- Texto de líneas múltiples y texto ajustado, como texto de líneas múltiples. El otro programa lo vuelve a ajustar a partir del mismo ancho.
- Colores de objeto: por capa, por bloque, los 255 colores estándar, y colores verdaderos en el formato 2004 y posteriores.
- Capas con su color, tipo de línea, grosor de línea y sus ajustes de encendido, inutilizado, bloqueo y trazado; los tipos de línea, grosores y escalas de tipo de línea propios de los objetos, los patrones de tipo de línea y la escala de tipo de línea del dibujo.
- Las unidades del dibujo y el formato de longitud (decimal, pies y pulgadas, fracciones…).
- Bloques con su punto base y definiciones de atributo, incluidos los invisibles, constantes y preestablecidos.
- Referencias a bloques con su escala, rotación y valores de atributo.
- Rellenos sólidos, y sombreados con patrón, con su patrón, escala y ángulo (las propias líneas del patrón, de modo que otros programas dibujan las mismas líneas que CadCraft).
- Cotas, como cotas reales: otros programas las vuelven a medir cuando se estiran. Cada una conserva sus propios ajustes (altura de texto, tamaño de flecha, decimales, formato de longitud) y su texto, y lleva la copia dibujada que tiene toda cota DWG.
- Hojas (presentaciones): cada hoja con su tamaño de papel y sus unidades, lo que está dibujado en ella, y sus ventanas gráficas con su vista y escala.
- Vistas guardadas.
- Directrices múltiples, como directrices múltiples.
- Nombres de capas y bloques tal como los escribió, en mayúsculas y minúsculas. (DXF R12 los escribe en mayúsculas.)

### Lo que cambia un DWG

Cada uno de estos cambios se enumera en el historial después de guardar, cuando aplica a su dibujo.

| En CadCraft | En el DWG guardado |
|---|---|
| Colores verdaderos (elegidos con el selector de color), en el formato 2000 | El color estándar más cercano: el formato 2000 solo tiene los 255. Guarde como 2004 o posterior para conservarlos |
| Vistas guardadas de una hoja | Vistas de espacio papel: un DWG no indica a qué hoja pertenecen, así que al abrir el archivo de nuevo pertenecen a la primera hoja |
| Texto de líneas múltiples con factor de ancho | Ancho de letra normal: en un DWG el factor de ancho solo se aplica al texto de una línea |
| Nombres de capa o de bloque con caracteres que DWG no permite | Cambiados: un nombre de un dibujo vinculado como `Base\|Walls` se convierte en `Base$0$Walls` (como lo nombra la acción de incorporar un dibujo vinculado), y los demás caracteres se convierten en `_` |

### Por qué R12, y qué se convierte

Al guardar como DXF, CadCraft escribe DXF R12, la versión que puede abrir cualquier programa CAD. Es más antigua que algunas funciones, así que algunas cosas se escriben de forma más simple:

| En CadCraft | En el archivo R12 guardado |
|---|---|
| Texto de líneas múltiples | Un objeto de texto por línea |
| Elipses | Polilíneas que siguen la elipse |
| Sombreados (de archivos abiertos) | Solo sus contornos |
| Colores verdaderos (elegidos con el selector de color) | El color estándar más cercano |
| Grosores de línea, y escalas de tipo de línea propias de los objetos | Omitidos: R12 no los tiene (los tipos de línea sí se conservan) |
| Nombres de capa y de bloque | Escritos en mayúsculas; los espacios y otros caracteres se convierten en `_`, y los nombres se cortan a 31 caracteres ("Title block" se convierte en `TITLE_BLOCK`) |
| Capas configuradas para no trazarse | Otros programas sí las trazarán (CadCraft recuerda el ajuste cuando el dibujo tiene una hoja) |
| Cotas | Cotas reales con su propio bloque dibujado, para que otros programas las muestren como usted las ve |
| Directrices múltiples | Las líneas, la punta de flecha y el texto que dibujan |
| Vistas guardadas | Se conservan, con nombres en mayúsculas; las vistas de una hoja regresan a la primera hoja |
| Varias hojas | La primera hoja es el espacio papel que muestra cada programa; las demás se guardan como bloques llamados `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft vuelve a convertir en hojas al abrir el archivo |

El historial enumera cada uno de estos que se aplicó a su dibujo.

:::tip
Para seguir trabajando en un dibujo durante varios días, guárdelo como DXF y abra ese DXF la próxima vez. Todo lo que CadCraft puede dibujar sobrevive al ida y vuelta, incluidas las cotas, los bloques y todas las hojas.
:::

## Referencias externas (vínculos)

{{cmd:XATTACH}} (`XA`, o {{ui:Bloques}} › {{ui:Más}} › {{ui:Vincular un dibujo (xref)}}) vincula otro DWG o DXF: elija el archivo y luego haga clic donde va ({{key:Enter}} lo pone en 0,0). Entra como un bloque con el nombre del archivo, a la escala correcta cuando los dos dibujos tienen unidades distintas. Sus capas y bloques conservan sus nombres, con el nombre del vínculo al frente — `Plan|Walls`, `Plan|Door` — para que nunca se mezclen con los suyos: active, desactive, inutilice o bloquee las capas vinculadas como las propias. Un vínculo es de solo lectura: si cambia el otro dibujo, recárguelo. Lo que defina en las capas de un vínculo (color, tipo de línea, grosor, encendido, inutilizado, bloqueo, trazado) se conserva cuando lo recarga, cuando guarda el dibujo como DWG mientras el vínculo sigue siendo un vínculo, y cuando otro dibujo se vincula a este.

{{cmd:XREF}} (`XR`): `?` lista los vínculos (cargados o no, qué archivo, cuántas referencias); `A` vincula; `R` recarga uno desde su archivo (elija el archivo de nuevo: el navegador no puede acceder a sus carpetas por sí mismo); `B` incorpora uno (se convierte en bloques y capas normales llamados `Plan$0$Walls`); `D` desvincula uno (se van sus referencias y sus capas). Cada uno es un paso de deshacer.

{{cmd:XCLIP}} (`XC`) recorta referencias de bloque y vínculos: selecciónelos, `N` para un nuevo límite, luego `R` y dos esquinas, o `P` y los puntos de un polígono ({{key:Enter}} lo cierra); `D` quita el recorte. Solo lo que está dentro se muestra y se traza, y el recorte se mueve con la referencia. DWG y DXF 2000 conservan los recortes; DXF R12 guarda la referencia completa y lo indica. Cuando incorpora un vínculo que tiene referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` incorpora todo, `C` conserva solo la parte recortada de cada referencia (las líneas y arcos se cortan en el límite; los textos y los bloques anidados permanecen cuando su punto de inserción está dentro).

Un dibujo que abre puede tener vínculos a archivos que CadCraft no puede ver: indica cuántos no están cargados. Use {{cmd:XREF}}, `R` y elija cada archivo para verlos.

Al guardar, un vínculo cargado se incorpora al archivo (otros programas ven bloques y capas normales llamados `Plan$0$…`), y el historial lo indica. Un vínculo no cargado sigue siendo un vínculo a su archivo, tanto en DWG como en DXF.

## Abrir en 3D

{{ui:Vista}} › {{ui:Más}} › {{ui:Abrir en ModelCraft}} ({{cmd:OPENIN3D}}) abre el dibujo en la aplicación de modelado 3D, en una pestaña nueva, como DWG, sin subirlo. Los cambios hechos allí se quedan allí; guárdelos allí. El elemento del menú solo aparece donde esa aplicación puede recibir un dibujo entregado.

## Trazar un PDF

Pulse {{key:Mod+P}}, haga clic en {{ui:Trazar}}, o escriba `PLOT`. El PDF se genera dentro del navegador y se descarga, o se abre en una pestaña nueva para imprimir. Consulte [Trazar a PDF](topic:plot-pdf).

## Dónde van los archivos

Cada guardado y cada trazado es una descarga, así que los archivos llegan a donde su navegador ponga las descargas: normalmente la carpeta Descargas. Para elegir una carpeta cada vez, cambie la configuración de descargas en su navegador; [Navegadores y computadoras](common:browsers) muestra dónde está.

Nada de lo que abre o guarda se envía a nosotros. Consulte [Dónde van sus archivos](common:your-files).

## Archivos de proyecto PLN y PLA

CadCraft abre dibujos DWG y DXF, no los archivos propios de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Al abrir uno, CadCraft le indica de qué tipo es. En Archicad, guarde las vistas o presentaciones que necesite como DWG y ábralas aquí, o exporte el modelo como IFC y ábralo en BimCraft. Cuando BimCraft puede recibir el archivo, CadCraft ofrece {{ui:Abrir en BimCraft}}.

## Si la página se cierra antes de guardar

CadCraft guarda una copia de cada dibujo que cambia, solo en este navegador, un momento después de dejar de editar. Si la pestaña se cierra, el navegador se detiene o la computadora se reinicia antes de guardar, CadCraft pregunta **Recover your work?** la próxima vez que se inicie: {{ui:Recuperar}} vuelve a abrir el dibujo, sin guardar, en su propia pestaña. Guardar el dibujo elimina su copia. Consulte [Recuperar su trabajo](common:recover).

## En línea y sin conexión

Abrir, dibujar, guardar (DWG y DXF) y trazar ocurren en su computadora, así que funcionan sin conexión una vez que CadCraft se ha cargado.

Para usar CadCraft sin ninguna conexión, haga clic en {{ui:Save for offline}} en la barra superior mientras tiene conexión. La etiqueta cuenta ("Saving 40 of 212") y termina en "Offline ready". La copia guardada incluye el lector de DWG, unos 5 MB en total, así que **los archivos DWG también se abren sin conexión** una vez guardada. Haga clic de nuevo en el botón para {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. "Could not save" significa que algunos archivos no se descargaron: revise la conexión y haga clic para intentarlo de nuevo. "Offline not available" significa que esta ventana del navegador no puede guardar una copia (ventanas privadas y algunas computadoras administradas).

Sin una copia guardada, el lector de DWG se descarga la primera vez que abre un DWG después de cargar la página, así que abrir un DWG sin conexión puede fallar; los archivos DXF nunca lo necesitan. No recargue la página sin conexión a menos que CadCraft esté guardado.

Consulte [Trabajar sin conexión](common:offline) para los detalles.

:::offline
Ahora no tiene conexión. Los dibujos se guardan como DWG o DXF y se trazan normalmente, y los archivos DXF se abren. Los archivos DWG se abren si CadCraft muestra "Offline ready", o si el lector de DWG ya se cargó en esta pestaña.
:::

## Restricciones en archivos

Las restricciones y los parámetros (consulte [Restringir un dibujo](topic:constraints)) se guardan tanto en DWG como en DXF. Cada objeto restringido lleva una pequeña nota de CadCraft (datos extendidos), y un bloque sin uso llamado `CADCRAFT_PARAMETRIC` contiene las restricciones y la tabla de parámetros. Otros programas abren el dibujo normalmente e ignoran ambos; pueden eliminar el bloque sin uso cuando purgan. Las notas se refieren a los objetos por su propia clave, no por los identificadores del archivo, así que un programa que renumera los identificadores no las rompe. Cuando otro programa ha eliminado o cambiado un objeto restringido, CadCraft descarta las restricciones de ese objeto al abrir el archivo y le indica cuántas. Un archivo sin ellas se abre sin restricciones.

Un croquis exportado desde un modelador de piezas (`.json`) también se abre: consulte [Mover croquis hacia y desde otros modeladores de piezas](topic:solidworks-sketches).

## No disponible todavía

- Directrices múltiples como objetos de directriz múltiple en un DXF guardado (R12 no los tiene: se guardan como lo que dibujan).
- Imágenes en un DXF guardado (se guardan como sus marcos; DWG las conserva como imágenes), y enmascarados que ocultan lo que hay debajo.
- Guardar una versión de DXF más nueva que 2000.
- Guardado en la nube y sincronización entre computadoras.

Consulte [Aún no disponible](topic:not-built-yet) para la lista completa.
