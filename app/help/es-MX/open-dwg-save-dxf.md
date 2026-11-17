---
title: Abrir un DWG, editarlo y guardar una copia
summary: Abra un dibujo que le enviaron, revise lo que llegó, haga un cambio y devuelva una copia como DWG o DXF.
keywords: dwg, dxf, abrir, importar, exportar, guardar, r12, ida y vuelta, consultor, xref, revisar dibujo, saveas, guardar como, guardar dwg, formato
from: 49de4bf6
---

## Lo que hará

Abra un DWG de un consultor, revise lo que CadCraft pudo y no pudo mostrar, agregue una nota, trace una hoja a PDF y guarde una copia para devolverla, como DWG o DXF.

## Abrir el archivo

1. Pulse {{key:Mod+O}}, o haga clic en {{ui:Abrir}}.
2. Elija el archivo `.dwg`.

La línea de estado muestra "Leyendo …" mientras se lee el dibujo. Cuando termina, el dibujo llena la pantalla, y el historial dice, por ejemplo, "Abierto plan.dwg: 18,240 objetos en 64 capas", con el tiempo que tardó.

:::offline
Está sin conexión. Si el botón {{ui:Guardar para usar sin conexión}} dice "Listo sin conexión", los archivos DWG se abren normalmente. Si no, y todavía no se ha abierto ningún DWG en esta pestaña, abrir un DWG puede fallar porque el lector de DWG de CadCraft se descarga con el primer DWG: abra un DXF en su lugar, o guarde CadCraft para uso sin conexión la próxima vez que esté en línea. Consulte [Trabajar sin conexión](common:offline).
:::

## Revise lo que llegó

1. Mire la sección {{ui:Dibujo}} del panel izquierdo: formato y versión, unidades, número de objetos y capas, y hojas.
2. Lea el cuadro "Acerca de este archivo" debajo, si existe.

El cuadro enumera:

- **Aún no se muestra:** objetos que CadCraft todavía no puede dibujar, por tipo y cantidad. Se omiten, no se adivinan.
- **Llegaron las hojas (presentaciones):** ábralas con las pestañas bajo el dibujo.
- **Cotas que solo se pudieron leer tal como se dibujaron.**

3. Haga clic en las pestañas bajo el dibujo para ver cada hoja.
4. Revise {{ui:Unidades}} en {{ui:Parámetros actuales}} (nada seleccionado, pestaña {{ui:Modelo}}). Si dice {{ui:Sin unidades}} pero sabe que el dibujo está en milímetros, configúrelas, para que las escalas de hojas y trazados se lean bien.

:::tip
Si esperaba una parte del dibujo y no la ve, revise el panel {{ui:Capas}}: la capa puede estar desactivada o inutilizada en el archivo. Haga clic en su nombre para hacerla actual; eso la activa.
:::

## Haga su cambio

1. Cree una capa para sus notas: haga clic en {{ui:Capa nueva}}, escriba `NOTES` y pulse {{key:Enter}}.
2. Escriba `DT` y pulse {{key:Enter}}.
3. Haga clic donde va la nota.
4. Escriba una altura de texto adecuada para el dibujo (consulte [Agregar texto y etiquetas](topic:text)) y pulse {{key:Enter}}.
5. Pulse {{key:Enter}} para conservar la rotación en 0.
6. Escriba su nota y pulse {{key:Enter}}.
7. Pulse {{key:Enter}} otra vez para terminar.

Las ediciones a cotas importadas están bien: en cuanto cambie una, CadCraft la vuelve a dibujar con su propio estilo.

## Trace una hoja para revisión

1. Haga clic en la pestaña de la hoja.
2. Pulse {{key:Mod+P}}.
3. Haga clic en {{ui:Descargar PDF}}.

Consulte [Trazar a PDF](topic:plot-pdf).

## Guarde una copia

1. Pulse {{key:Mod+S}}, o haga clic en {{ui:Guardar}}.

Abrió un DWG, así que el navegador descarga `<name>.dwg`, en la versión en que llegó el DWG. El historial dice, por ejemplo, "Copia guardada como Plan.dwg (DWG (AutoCAD 2018))." y enumera, en las líneas debajo, lo que cambió en el camino.

2. Lea esas líneas antes de enviar el archivo. [Lo que un DWG conserva y cambia](topic:files#what-a-dwg-keeps-and-changes) explica cada una.

Su DWG original nunca se modifica. Cada guardado es una nueva descarga.

## Guardar como DWG o DXF

Para elegir el formato usted mismo:

1. Pulse {{key:Mod+Shift+S}}, o haga clic en {{ui:Guardar como}}.

Se abre el cuadro {{ui:Guardar una copia como}} con cuatro opciones, cada una con el nombre de archivo que tendrá: {{ui:DWG}}, con su lista {{ui:Versión}}, {{ui:DXF R12}}, {{ui:DXF 2000}} y {{ui:DXF 2000 (binary)}}. El formato y la versión actuales del dibujo ya están elegidos.

2. Haga clic en el formato que quiere. Para DWG, elija la versión que usa la otra oficina, o una anterior: AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000.
3. Haga clic en {{ui:Guardar}}.

La copia se descarga. A partir de ahora, {{key:Mod+S}} guarda este dibujo en ese formato, y los dibujos nuevos también empiezan con él, en este navegador. {{ui:Cancelar}} o {{key:Esc}} no guarda nada, y el historial dice "No guardado."

Cuál elegir:

- **DWG** conserva lo más: hojas con sus ventanas gráficas, cotas reales, patrones de sombreado, nombres de capas y de bloques tal como los escribió, y texto de líneas múltiples como texto de líneas múltiples. La versión AutoCAD 2000 se abre en más programas; 2004 y posteriores también conservan colores verdaderos.
- **DXF 2000** es un archivo de texto que conserva casi lo que conserva un DWG: cada hoja como presentación con sus ventanas gráficas, cotas reales, patrones de sombreado, colores verdaderos, grosores de línea, tipos de línea, y nombres tal como los escribió. Se abre en AutoCAD 2000 y posteriores y en la mayoría de los programas CAD. Las directrices múltiples se convierten en las líneas, puntas de flecha y texto que dibujan. Un DXF abierto en versión 2000 o posterior se guarda como DXF 2000.
- **DXF 2000 (binary)** tiene el mismo contenido que DXF 2000 en la forma binaria del formato: un archivo más pequeño que conserva cada número exactamente. Los archivos DXF binarios de otros programas se abren como los de texto, y un dibujo abierto desde un DXF binario se guarda de nuevo como binario.
- **DXF R12** se abre en casi cualquier programa CAD. Conserva la primera hoja con sus ventanas gráficas, y las otras hojas de CadCraft. Simplifica cosas más nuevas, como el texto de líneas múltiples y los sombreados.

## Lo que verá la otra oficina

En un DWG:

- Líneas, arcos, círculos, elipses, polilíneas, texto, texto de líneas múltiples, bloques con sus atributos, rellenos sólidos, patrones de sombreado y capas tal como los ve.
- Cotas reales: el otro programa las vuelve a medir cuando se estiran.
- Cada hoja, con su papel y sus ventanas gráficas.
- Directrices múltiples como directrices múltiples. En la versión AutoCAD 2000, los colores verdaderos pasan al color estándar más cercano.

En un DXF R12:

- Líneas, arcos, círculos, polilíneas, texto, referencias a bloques y cotas tal como los ve. Las cotas siguen siendo cotas reales.
- Nombres de capas en mayúsculas, con los espacios cambiados por `_`.
- La primera hoja como espacio papel del dibujo, con sus ventanas gráficas. Las demás hojas llegan como bloques llamados `CCLAYOUT_1` y así sucesivamente; si necesitan cada hoja como presentación, trace también un PDF de cada hoja para ellos.
- Texto de líneas múltiples como líneas separadas, elipses como polilíneas, sombreados como contornos.

De cualquier forma, lo que aparece como "Aún no se muestra" al abrir el DWG **no** está en la copia, salvo que el historial diga que se conservó: los objetos OLE de un DWG y sus sólidos 3D en el espacio modelo se escriben de nuevo al guardar como DWG. Avíseles, y envíe también un PDF.

## Errores comunes

- **"CadCraft abre dibujos DWG y DXF."** El archivo tiene otra extensión. Revise que sea `.dwg` o `.dxf`.
- **"No se pudo leer este dibujo."** El DWG está dañado o en una versión que el lector no maneja. Pida un DXF, o el DWG guardado en una versión anterior.
- **"Este DXF binario termina en medio de un objeto."** El archivo está cortado o dañado. Escriba RECOVER para abrir lo que se pueda leer, o pida el archivo de nuevo.
- **El archivo guardado se llama `name (1).dwg` o `name (1).dxf`.** El navegador lo hace así cuando ya hay un archivo con el mismo nombre en la carpeta.
- **Tienen un programa anterior que no puede abrir el DWG.** Guarde como DWG con {{ui:Versión}} {{ui:AutoCAD 2000}}, o como {{ui:DXF R12}}: casi cualquier programa CAD lo abre.
- **Faltan partes del dibujo.** Los dibujos vinculados (xref) no se cargan hasta que elija sus archivos ({{cmd:XREF}}, `R`), y las imágenes se muestran como marcos con sus nombres de archivo.
