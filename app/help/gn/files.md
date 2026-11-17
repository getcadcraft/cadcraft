---
title: Archivos: qué se abre, qué se guarda
summary: Los formatos que CadCraft abre, guarda y exporta, qué se mantiene o se convierte, y adónde van los archivos.
keywords: xclip, clip, límite de xclip, recortar, mantener recorte, dwg, dxf, pdf, r12, abrir, guardar, exportar, importar, formatos, conversión, descarga, saveas, dxfout, guardar como, guardar dwg, formato, qsave, xref, xattach, plano vinculado, referencia externa, bind, recargar, desvincular
from: b8c5778d
---

## De un vistazo

| Formato | Abrir | Guardar | Notas |
|---|---|---|---|
| DXF (texto o binario, cualquier versión) | Heẽ | Heẽ, como DXF R12, DXF 2000 o DXF 2000 (binario) | Un DXF binario se abre igual que uno de texto y se guarda de nuevo como binario. |
| DWG | Heẽ | Heẽ, como DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Lo lee y escribe la propia biblioteca DWG de CadCraft (archivos AutoCAD R13 a 2018). Tu DWG nunca se cambia. Los archivos dañados, o las versiones que el lector no maneja, se rechazan con un aviso. |
| PDF | Trae una página: como base o como objetos ([Bases PDF](topic:pdf-underlay)) | Heẽ, por trazado | PDF vectorial de una hoja, o del modelo a una escala. |

Cada plano que abrís (o que empezás con {{ui:New}}) tiene su propia pestaña sobre el área de dibujo; un plano nuevo que nadie tocó todavía se usa en lugar de agregar una pestaña. Hacé clic en una pestaña para cambiar, en su {{ui:×}} para cerrarla (CadCraft pregunta antes si hay cambios sin guardar), o acomodá los planos abiertos lado a lado: ver [Dividir la pantalla](topic:split-screen).

## Abrir un plano

- Presioná {{key:Mod+O}}, hacé clic en {{ui:Open}}, o escribí `OPEN`, y elegí el archivo.
- O arrastrá un archivo `.dwg` o `.dxf` sobre el área de dibujo.

El archivo se lee dentro de tu navegador. No se sube a ningún lado. El historial informa cuántos objetos y capas entraron y cuánto tardó, y la sección {{ui:Drawing}} del panel izquierdo muestra el formato, por ejemplo "DWG 2018 (AC1032)".

El lector DWG es parte de CadCraft y se descarga con el primer DWG que abrís después de cargar la página (unos cientos de KB), así que no hay una descarga aparte que esperar. Lee el archivo en segundo plano, de modo que la página sigue respondiendo mientras se abre un DWG grande.

Un DXF se lee en partes de unos 4 MB, nunca como un bloque de texto, así que un DXF de más de 512 MB también se abre. Lo que limita es la memoria de tu computadora: mientras se abre un DXF, espera que use alrededor de 16 a 20 veces el tamaño del archivo (un DXF de 100 MB con unos 690.000 objetos usó cerca de 1,5 GB en nuestra prueba).

### Lo que entra

- Líneas, arcos, círculos, polilíneas (con segmentos de arco), elipses, puntos, texto y texto de varias líneas, sólidos, sombreados (los patrones estándar dibujados como sus líneas, los demás como un tono plano), referencias de bloque con sus atributos (valores que podés editar; ver [Atributos de bloque](topic:attributes)), cotas, y diseños con sus vistas.
- Las splines entran como splines (grado, puntos de control, nudos, pesos, puntos de ajuste); ver [Splines y polilíneas](topic:splines).
- Las multiguías con una línea guía y texto entran como multiguías de CadCraft que podés editar (ver {{cmd:MLEADER}}). Las demás (con un bloque, varias líneas guía o líneas curvas) se dibujan como las dibujó el otro programa y se mueven como una sola pieza; el historial dice cuántas son.
- Las imágenes (pictures) se muestran como un marco con el nombre de archivo de la imagen hasta que le das a CadCraft el archivo con {{cmd:IMAGE}}: ver [Imágenes en un plano](topic:pictures#show-the-pictures-a-dwg-uses). Los wipeouts se muestran como su marco, y lo que hay debajo sigue visible.
- Las tablas en un DWG entran como las dibujó el otro programa.
- Las caras 3D en el espacio del modelo entran en la pestaña {{ui:3D}}, no como objetos 2D; lo mismo pasa con las que están dentro de bloques, una vez por referencia de bloque en el modelo. En un bloque y en una hoja también se dibujan planas, como contornos. Ver [Modelo en 3D](topic:3d-solids).
- Las capas conservan su color, encendido, congelado, bloqueado y sus configuraciones de trazado. DEFPOINTS nunca se traza.
- Las cotas se convierten en cotas reales y editables de CadCraft donde se pueden leer sus puntos. Primero se muestran exactamente como las dibujó el otro programa; en cuanto cambiás una, CadCraft la redibuja con su propio estilo.
- Cada diseño se convierte en una pestaña de hoja. En el otro programa, cada diseño tiene una primera vista oculta que es la propia hoja; CadCraft la deja afuera.

### Lo que todavía no entra

Todo lo que CadCraft no puede dibujar se cuenta, no se adivina. El cuadro "Acerca de este archivo" del panel izquierdo lo lista como "Todavía no se muestra:" seguido de cada tipo de objeto y cuántos hay. Casos típicos son las tablas en un DXF, las mallas y los sólidos 3D dentro de bloques. Los sólidos 3D, regiones y cuerpos en el espacio del modelo se muestran en la pestaña 3D (ver [Modelo en 3D](topic:3d-solids#solids-from-other-programs)). Las vistas torcidas en el archivo se muestran giradas, como allí, y conservan el giro al guardar; lo mismo pasa con el UCS actual, los UCS con nombre y una vista girada.

El texto se dibuja con una sola fuente estilo Helvetica. Una etiqueta que entra en una línea con la fuente más angosta del programa original puede pasar a dos líneas en CadCraft.

## Guardar

Hay tres formas de guardar. Cada una descarga una copia.

- **Guardar**: presioná {{key:Mod+S}}, hacé clic en {{ui:Save}}, o escribí `SAVE` (también `QSAVE`). Guarda en el formato del plano: DWG si abriste un DWG, DXF si abriste un DXF. Un DWG conserva la versión con la que llegó (un archivo 2018 se guarda como 2018). Un plano nuevo usa el formato y la versión DWG que elegiste por última vez en Guardar como en este navegador; si nunca elegiste una, DWG en formato AutoCAD 2000.
- **Guardar como**: presioná {{key:Mod+Shift+S}}, hacé clic en {{ui:Save as}}, o escribí `SAVEAS`. El cuadro {{ui:Save a copy as}} ofrece {{ui:DWG}}, con una lista {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} y {{ui:DXF 2000}}, cada uno con el nombre de archivo que va a dar, y con el formato y la versión actuales del plano ya elegidos. Hacé clic en {{ui:Save}} para descargar, o en {{ui:Cancel}} (o {{key:Esc}}) para no guardar nada; el historial entonces dice "No guardado." Lo que elegís queda: {{key:Mod+S}} lo usa para este plano desde ese momento, y los planos nuevos en este navegador empiezan con esa elección.
- **DXFOUT**: escribí `DXFOUT`. Siempre descarga una copia DXF R12, y el próximo {{key:Mod+S}} igual guarda en el formato propio del plano.

El navegador descarga `<nombre del plano>.dwg` o `<nombre del plano>.dxf`. Cada guardado es una **nueva descarga**; el archivo que abriste nunca se sobrescribe ni se cambia. El historial lo confirma, por ejemplo "Se guardó una copia como Plan.dwg (DWG (AutoCAD 2018)). Tu original Plan.dxf no cambió." Para un DXF dice "(DXF R12, se abre en cualquier programa CAD)". Las líneas debajo listan todo lo que cambió en el camino.

Cuando CadCraft corre en la aplicación de escritorio, guardar funciona como en otros programas de escritorio: {{key:Mod+S}} escribe el plano de vuelta en el archivo que abriste, en su propio formato y versión, y el historial dice dónde se guardó. {{ui:Save as}} y las exportaciones muestran el cuadro de guardado del sistema, y un archivo `.dwg`, `.dxf` o `.ccsheets` que hacés doble clic se abre en CadCraft.

Para un PDF, trazá en cambio (ver más abajo).

## Qué guarda y qué cambia un DWG

CadCraft escribe el DWG por sí mismo, dentro de tu navegador, con la misma biblioteca DWG con la que lo lee. Elegí la versión en Guardar como: el formato AutoCAD 2000 (versión de archivo AC1015) se abre en la mayoría de programas, incluso en los viejos; los formatos más nuevos (2004, AC1018, hasta 2018, AC1032) también conservan colores verdaderos. Nada se sube, y guardar un DWG funciona sin conexión.

Cada versión se verifica volviendo a leer los archivos guardados con los lectores DWG de otros tres programas y con el propio CadCraft. Un DWG de CadCraft todavía no se abrió en el propio AutoCAD.

### Lo que un DWG conserva

- Líneas, arcos, círculos, elipses, puntos y polilíneas con sus segmentos de arco.
- Texto de una línea con su alineación y factor de ancho.
- Texto de varias líneas y texto ajustado, como texto de varias líneas. El otro programa lo vuelve a ajustar desde el mismo ancho.
- Colores de objeto: por capa, por bloque, los 255 colores estándar, y colores verdaderos en el formato 2004 y posteriores.
- Capas con su color, tipo de línea, grosor de línea y sus configuraciones de encendido, congelado, bloqueado y trazado; los tipos de línea, grosores y escalas propios de los objetos, los patrones de tipo de línea y la escala de tipo de línea del plano.
- Las unidades del plano y el formato de longitud (decimal, pies y pulgadas, fracciones…).
- Bloques con su punto base y sus definiciones de atributos, incluidos los invisibles, constantes y predefinidos.
- Referencias de bloque con su escala, rotación y valores de atributos.
- Rellenos sólidos, y sombreados con patrón con su patrón, escala y ángulo (las líneas propias del patrón, para que otros programas dibujen las mismas líneas que CadCraft).
- Cotas, como cotas reales: otros programas las vuelven a medir cuando se estiran. Cada una conserva sus propias configuraciones (altura de texto, tamaño de flecha, decimales, formato de longitud) y su texto, y lleva la copia dibujada que tiene toda cota DWG.
- Hojas (diseños): cada hoja con su tamaño de papel y unidades, lo que se dibuja en ella, y sus vistas con su vista y escala.
- Vistas con nombre.
- Multiguías, como multiguías.
- Nombres de capa y de bloque como los escribiste, en mayúsculas y minúsculas. (DXF R12 los escribe en mayúsculas.)

### Lo que un DWG cambia

Cada uno de estos cambios aparece en el historial después de guardar, cuando corresponde a tu plano.

| En CadCraft | En el DWG guardado |
|---|---|
| Colores verdaderos (elegidos con el cuentagotas), en el formato 2000 | El color estándar más cercano: el formato 2000 solo tiene los 255. Guardá como 2004 o posterior para conservarlos |
| Vistas con nombre de una hoja | Vistas del espacio de papel: un DWG no dice a qué hoja pertenecen, así que cuando CadCraft vuelve a abrir el archivo pertenecen a la primera hoja |
| Texto de varias líneas con factor de ancho | Ancho de letra normal: en un DWG el factor de ancho solo se aplica al texto de una línea |
| Nombres de capa o de bloque con caracteres que DWG no permite | Cambiados: un nombre de un plano vinculado como `Base\|Muros` pasa a `Base$0$Muros` (la forma en que se nombra al enlazar un plano vinculado), y los demás caracteres pasan a `_` |

### Por qué R12, y qué se convierte

Cuando guardás como DXF, CadCraft escribe DXF R12, la versión que puede abrir cualquier programa CAD. Es más antigua que algunas funciones, así que algunas cosas se escriben de forma más simple:

| En CadCraft | En el archivo R12 guardado |
|---|---|
| Texto de varias líneas | Un objeto de texto por línea |
| Elipses | Polilíneas que siguen la elipse |
| Sombreados (de archivos abiertos) | Solo sus contornos |
| Colores verdaderos (elegidos con el cuentagotas) | El color estándar más cercano |
| Grosores de línea, y escalas de tipo de línea propias de los objetos | Se omiten: R12 no tiene ninguno (los tipos de línea se mantienen) |
| Nombres de capa y de bloque | Escritos en mayúsculas; los espacios y demás caracteres pasan a `_`, y los nombres se cortan a 31 caracteres ("Title block" pasa a `TITLE_BLOCK`) |
| Capas configuradas para no trazarse | Otros programas las trazarán (CadCraft recuerda la configuración cuando el plano tiene una hoja) |
| Cotas | Cotas reales con su propio bloque dibujado, para que otros programas las muestren como las ves |
| Multiguías | Las líneas, la punta de flecha y el texto que dibujan |
| Vistas con nombre | Se mantienen, con nombres en mayúsculas; las vistas de una hoja vuelven en la primera hoja |
| Varias hojas | La primera hoja es el espacio de papel que muestra cualquier programa; las demás se guardan como bloques llamados `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft convierte de nuevo en hojas al abrir el archivo |

El historial enumera cada una de estas que correspondió a tu plano.

:::tip
Para seguir trabajando en un plano durante varios días, guardá como DXF y abrí ese DXF la próxima vez. Todo lo que CadCraft puede dibujar sobrevive al ida y vuelta, incluidas las cotas, los bloques y todas las hojas.
:::

## Vínculos a planos (referencias externas)

{{cmd:XATTACH}} (`XA`, o {{ui:Blocks}} › {{ui:More}} › {{ui:Link a drawing (xref)}}) vincula otro DWG o DXF: elegís el archivo, y después hacés clic donde va ({{key:Enter}} lo pone en 0,0). Entra como un bloque con el nombre del archivo, a la escala correcta cuando los dos planos tienen unidades distintas. Sus capas y bloques conservan sus nombres con el nombre del vínculo delante: `Plan|Muros`, `Plan|Puerta`, así que nunca se mezclan con los tuyos: encendé y apagá las capas vinculadas, congelalas o bloquealas como las tuyas. Un vínculo es de solo lectura: si cambiás el otro plano, recargalo. Lo que configurás en las capas de un vínculo (color, tipo de línea, grosor, encendido/apagado, congelado, bloqueado, trazado) se mantiene al recargar, al guardar el plano como DWG mientras el vínculo sigue siendo un vínculo, y cuando otro plano vincula este.

{{cmd:XREF}} (`XR`): `?` lista los vínculos (cargados o no, qué archivo, cuántas referencias); `A` agrega; `R` recarga uno desde su archivo (elegí de nuevo el archivo: el navegador no puede acceder a tus carpetas por sí mismo); `B` enlaza uno (pasa a ser bloques y capas comunes con nombres como `Plan$0$Walls`); `D` desvincula uno (se van sus referencias y capas). Cada una es un paso de deshacer.

{{cmd:XCLIP}} (`XC`) recorta referencias de bloque y vínculos: seleccionalos, `N` para un nuevo límite, después `R` y dos esquinas o `P` y los puntos de un polígono ({{key:Enter}} lo cierra); `D` quita el recorte. Solo se muestra y se traza lo que queda dentro, y el recorte se mueve con la referencia. DWG y DXF 2000 conservan los recortes; DXF R12 guarda la referencia completa y lo indica. Cuando enlazás un vínculo que tiene referencias recortadas, {{cmd:XREF}} `B` pregunta: `A` enlaza todo, `C` conserva solo la parte recortada de cada referencia (las líneas y arcos se cortan en el límite; los textos y bloques anidados se mantienen cuando su punto de inserción está dentro).

Un plano que abrís puede vincular archivos que CadCraft no puede ver: indica cuántos no están cargados. Usá {{cmd:XREF}}, `R` y elegí cada archivo para verlos.

Cuando guardás, un vínculo cargado se **enlaza** dentro del archivo (otros programas ven bloques y capas comunes con nombres `Plan$0$…`), y el historial lo dice. Un vínculo que no está cargado sigue siendo un vínculo a su archivo, tanto en DWG como en DXF.

## Abrir en 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) abre el plano en la aplicación de modelado 3D en una pestaña nueva, como DWG, sin subirlo. Los cambios que hagas allí quedan allí; guardalos allí. El elemento del menú solo aparece donde esa aplicación puede recibir un plano entregado.

## Trazar un PDF

Presioná {{key:Mod+P}}, hacé clic en {{ui:Plot}}, o escribí `PLOT`. El PDF se crea dentro del navegador y se descarga, o se abre en una pestaña nueva para imprimir. Ver [Trazar a PDF](topic:plot-pdf).

## Dónde van los archivos

Cada guardado y cada trazado es una descarga, así que los archivos van a donde tu navegador ponga las descargas: normalmente la carpeta Descargas. Para elegir una carpeta cada vez, cambiá la configuración de descargas en tu navegador; [Navegadores y computadoras](common:browsers) muestra dónde.

Nada de lo que abrís o guardás se envía a nosotros. Ver [Dónde van tus archivos](common:your-files).

## Archivos de proyecto PLN y PLA

CadCraft abre planos DWG y DXF, no los archivos propios de Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Al abrir uno, te indica de qué se trata. En Archicad, guardá las vistas o diseños que necesitás como DWG y abrilos aquí, o exportá el modelo como IFC y abrilo en BimCraft. Cuando BimCraft puede recibir el archivo, CadCraft ofrece {{ui:Open in BimCraft}}.

## Si la página se cierra antes de guardar

CadCraft guarda una copia de cada plano que cambiás, solo en este navegador, un momento después de dejar de editar. Si la pestaña se cierra, el navegador se detiene o la computadora se reinicia antes de que guardes, CadCraft pregunta **¿Recuperar tu trabajo?** la próxima vez que arranca: {{ui:Recover}} vuelve a abrir el plano, sin guardar, en su propia pestaña. Guardar el plano elimina su copia. Ver [Recuperar tu trabajo](common:recover).

## En línea y sin conexión

Abrir, dibujar, guardar (DWG y DXF) y trazar se hacen todos en tu computadora, así que funcionan sin conexión una vez que CadCraft cargó.

Para usar CadCraft sin ninguna conexión, hacé clic en {{ui:Save for offline}} en la barra superior mientras estás en línea. La etiqueta va contando ("Guardando 40 de 212") y termina en "Listo sin conexión". La copia guardada incluye el lector DWG, unos 5 MB en total, así que **los archivos DWG también se abren sin conexión** una vez guardada. Hacé clic de nuevo en el botón para {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. "No se pudo guardar" significa que algunos archivos no se descargaron: revisá la conexión y hacé clic para intentar de nuevo. "Sin conexión no disponible" significa que esta ventana del navegador no puede guardar una copia (ventanas privadas y algunas computadoras administradas).

Sin una copia guardada, el lector DWG se descarga la primera vez que abrís un DWG después de cargar la página, así que abrir un DWG sin conexión puede fallar; los archivos DXF nunca lo necesitan. No recargues la página sin conexión a menos que CadCraft esté guardado.

Ver [Trabajar sin conexión](common:offline) para los detalles.

:::offline
Ahora no tenés conexión. Los planos se guardan como DWG o DXF y se trazan con normalidad, y los archivos DXF se abren. Los archivos DWG se abren si CadCraft muestra "Listo sin conexión", o si el lector DWG ya se cargó en esta pestaña.
:::

## Restricciones en los archivos

Las restricciones y los parámetros (ver [Restringir un plano](topic:constraints)) se guardan tanto en DWG como en DXF. Cada objeto restringido lleva una pequeña nota de CadCraft (datos extendidos), y un bloque sin uso llamado `CADCRAFT_PARAMETRIC` guarda las restricciones y la tabla de parámetros. Otros programas abren el plano normalmente e ignoran ambas cosas; pueden eliminar el bloque sin uso cuando purgan. Las notas se refieren a los objetos por su propia clave, no por los identificadores del archivo, así que un programa que renumera los identificadores no las rompe. Cuando otro programa eliminó o cambió un objeto restringido, CadCraft descarta las restricciones de ese objeto al abrir el archivo y dice cuántas. Un archivo sin ellas se abre sin restricciones.

Un boceto exportado desde un modelador de piezas (`.json`) también se abre: ver [Mover bocetos hacia y desde otros modeladores de piezas](topic:solidworks-sketches).

## Todavía no disponible

- Multiguías como objetos multiguía en un DXF guardado (R12 no tiene ninguno: se guardan como lo que dibujan).
- Imágenes en un DXF guardado (se guardan como sus marcos; DWG las conserva como imágenes), y wipeouts que ocultan lo que hay debajo.
- Guardar una versión DXF más nueva que 2000.
- Guardado en la nube y sincronización entre computadoras.

Ver [Todavía no hecho](topic:not-built-yet) para la lista completa.
