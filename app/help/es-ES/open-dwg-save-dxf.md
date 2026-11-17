---
title: Abrir un DWG, editarlo y guardar una copia
summary: Abra un dibujo que le ha enviado alguien, revise lo que ha llegado, haga un cambio y devuelva una copia como DWG o DXF.
keywords: dwg, dxf, abrir, importar, exportar, guardar, r12, ida y vuelta, consultor, xref, revisar dibujo, saveas, guardar como, guardar dwg, formato
from: 49de4bf6
---

## Qué va a hacer

Abrir un DWG de un consultor, revisar lo que CadCraft pudo y no pudo mostrar, añadir una nota, trazar una hoja a PDF y guardar una copia para devolverla, como DWG o DXF.

## Abrir el archivo

1. Pulse {{key:Mod+O}}, o haga clic en {{ui:Abrir}}.
2. Elija el archivo `.dwg`.

La línea de estado muestra "Leyendo …" mientras se lee el dibujo. Cuando termina, el dibujo ocupa la pantalla y el historial indica, por ejemplo, "Abierto plan.dwg: 18,240 objetos en 64 capas", con el tiempo que tardó.

:::offline
Está sin conexión. Si el botón {{ui:Guardar para uso sin conexión}} dice "Listo sin conexión", los archivos DWG se abren con normalidad. Si no, y todavía no se ha abierto ningún DWG en esta pestaña, abrir un DWG puede fallar porque el lector DWG de CadCraft se descarga con el primer DWG: abra un DXF en su lugar, o guarde CadCraft para uso sin conexión la próxima vez que esté en línea. Consulte [Trabajar sin conexión](common:offline).
:::

## Revisar lo que ha llegado

1. Mire la sección {{ui:Dibujo}} del panel izquierdo: formato y versión, unidades, número de objetos y capas, y hojas.
2. Lea el cuadro "Acerca de este archivo" que aparece debajo, si lo hay.

El cuadro enumera:

- **No se muestra todavía:** objetos que CadCraft aún no puede dibujar, por tipo y número. Se omiten, no se adivinan.
- **Llegaron las presentaciones (hojas):** ábralas con las pestañas bajo el dibujo.
- **Cotas que solo se pudieron leer tal como están dibujadas.**

3. Haga clic en las pestañas bajo el dibujo para ver cada hoja.
4. Revise {{ui:Unidades}} en {{ui:Parámetros actuales}} (sin nada seleccionado, pestaña {{ui:Modelo}}). Si dice {{ui:Sin unidades}} pero sabe que el dibujo está en milímetros, ajústelo, para que las escalas de hoja y de trazado se lean bien.

:::tip
Si esperaba una parte del dibujo y no la ve, revise el panel {{ui:Capas}}: la capa puede estar desactivada o inmovilizada en el archivo. Haga clic en su nombre para hacerla actual; eso la activa.
:::

## Haga su cambio

1. Cree una capa para sus notas: haga clic en {{ui:Capa nueva}}, escriba `NOTES` y pulse {{key:Enter}}.
2. Escriba `DT` y pulse {{key:Enter}}.
3. Haga clic donde va la nota.
4. Escriba una altura de texto adecuada para el dibujo (consulte [Añadir texto y etiquetas](topic:text)) y pulse {{key:Enter}}.
5. Pulse {{key:Enter}} para mantener la rotación en 0.
6. Escriba su nota y pulse {{key:Enter}}.
7. Pulse {{key:Enter}} de nuevo para terminar.

Los cambios en cotas importadas están bien: en cuanto cambie una, CadCraft la redibuja con su propio estilo.

## Trazar una hoja para revisarla

1. Haga clic en la pestaña de la hoja.
2. Pulse {{key:Mod+P}}.
3. Haga clic en {{ui:Descargar PDF}}.

Consulte [Trazar a PDF](topic:plot-pdf).

## Guardar una copia

1. Pulse {{key:Mod+S}}, o haga clic en {{ui:Guardar}}.

Abrió un DWG, así que el navegador descarga `<name>.dwg`, en la versión en que llegó el DWG. El historial indica, por ejemplo, "Copia guardada como Plan.dwg (DWG (AutoCAD 2018))." y enumera, en las líneas debajo, lo que cambió por el camino.

2. Lea esas líneas antes de enviar el archivo. [Qué conserva y qué cambia un DWG](topic:files#what-a-dwg-keeps-and-changes) explica cada una.

Su DWG original nunca se modifica. Cada guardado es una descarga nueva.

## Guardar como DWG o DXF

Para elegir el formato usted mismo:

1. Pulse {{key:Mod+Shift+S}}, o haga clic en {{ui:Guardar como}}.

El cuadro {{ui:Guardar una copia como}} se abre con cuatro opciones, cada una con el nombre de archivo que dará: {{ui:DWG}}, con su lista {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} y {{ui:DXF 2000 (binary)}}. Ya están elegidos el formato y la versión actuales del dibujo.

2. Haga clic en el formato que quiere. Para DWG, elija la versión que usa el otro despacho, o una anterior: AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000.
3. Haga clic en {{ui:Guardar}}.

La copia se descarga. A partir de ahora, {{key:Mod+S}} guarda este dibujo en ese formato, y los dibujos nuevos empiezan también con él, en este navegador. {{ui:Cancelar}} o {{key:Esc}} no guarda nada, y el historial indica "No guardado."

Cuál elegir:

- **DWG** conserva lo más: hojas con sus viewports, cotas reales, patrones de trama, nombres de capas y bloques tal como los escribió, y el texto de varias líneas como texto de varias líneas. La versión AutoCAD 2000 se abre en más programas; 2004 y posteriores conservan además los colores reales.
- **DXF 2000** es un archivo de texto que conserva casi lo mismo que un DWG: cada hoja como presentación con sus viewports, cotas reales, patrones de trama, colores reales, grosores de línea, tipos de línea, y nombres tal como los escribió. Se abre en AutoCAD 2000 y posteriores y en la mayoría de programas CAD. Las multidirectrices se convierten en las líneas, flechas y texto que dibujan. Un DXF abierto en la versión 2000 o posterior se guarda como DXF 2000.
- **DXF 2000 (binary)** contiene el mismo contenido que DXF 2000 en la forma binaria del formato: un archivo más pequeño que conserva cada número exactamente. Los DXF binarios de otros programas se abren como los de texto, y un dibujo abierto desde un DXF binario se guarda de nuevo como binario.
- **DXF R12** se abre en casi cualquier programa CAD. Conserva la primera hoja con sus viewports, y las demás hojas de CadCraft. Simplifica lo más nuevo, como el texto de varias líneas y las tramas.

## Lo que verá el otro despacho

En un DWG:

- Líneas, arcos, círculos, elipses, polilíneas, texto, texto de varias líneas, bloques con sus atributos, rellenos sólidos, patrones de trama y capas tal como los ve.
- Cotas reales: el otro programa las vuelve a medir cuando se estiran.
- Todas las hojas, con su papel y sus viewports.
- Multidirectrices como multidirectrices. En la versión AutoCAD 2000, los colores reales pasan al color estándar más cercano.

En un DXF R12:

- Líneas, arcos, círculos, polilíneas, texto, referencias de bloque y cotas tal como las ve. Las cotas siguen siendo cotas reales.
- Nombres de capa en mayúsculas, con los espacios cambiados por `_`.
- La primera hoja como espacio papel del dibujo, con sus viewports. Las hojas siguientes llegan como bloques llamados `CCLAYOUT_1` y así sucesivamente; si necesitan cada hoja como presentación, envíeles también PDF de cada hoja.
- Texto de varias líneas como líneas separadas, elipses como polilíneas, tramas como contornos.

En cualquier caso, lo que aparezca como "No se muestra todavía" al abrir el DWG **no** está en la copia, salvo que el historial indique que se conservó: los objetos OLE de un DWG y sus sólidos 3D en el espacio modelo se escriben de nuevo al guardar como DWG. Avíseles, y envíe también un PDF.

## Errores frecuentes

- **"CadCraft abre dibujos DWG y DXF."** El archivo tiene otra extensión. Compruebe que es `.dwg` o `.dxf`.
- **"Este dibujo no se pudo leer."** El DWG está dañado o en una versión que el lector no admite. Pida un DXF, o el DWG guardado en una versión anterior.
- **"Este DXF binario termina en mitad de un objeto."** El archivo está cortado o dañado. Escriba RECOVER para abrir lo que se pueda leer, o pida de nuevo el archivo.
- **El archivo guardado se llama `nombre (1).dwg` o `nombre (1).dxf`.** El navegador lo hace así cuando ya hay en la carpeta un archivo con el mismo nombre.
- **Tienen un programa antiguo que no puede abrir el DWG.** Guarde como DWG con {{ui:Version}} {{ui:AutoCAD 2000}}, o como {{ui:DXF R12}}: casi cualquier programa CAD lo abre.
- **Faltan partes del dibujo.** Los dibujos vinculados (xrefs) no se cargan hasta que elija sus archivos ({{cmd:XREF}}, `R`), y las imágenes aparecen como marcos con sus nombres de archivo.
