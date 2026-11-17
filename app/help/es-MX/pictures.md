---
title: Imágenes en un dibujo
summary: Coloque una imagen PNG o JPEG, recórtela a un rectángulo o a un polígono, muestre las imágenes que usa un DWG e imprímalas nítidas.
keywords: pastearea, parea, copiar área, área copiada, markupcraft, tamaño real, tamaño natural, superposición, ole, ole2frame, objeto incrustado, pegar imagen, pegar captura, ctrl+v, imagen del portapapeles, captura de pantalla, imagen, imageattach, iat, imageclip, recorte, png, jpeg, jpg, logotipo, foto, raster, imagedef, xref, trazar, pdf, resolución
from: 4025ac97
---

## Qué va a crear

Un logotipo de la empresa colocado en un cajetín, recortado a la parte que quiere, y un PDF en el que se imprime con su propia resolución.

## Colocar una imagen

1. Escriba {{cmd:IMAGEATTACH}} (o `IAT`) y pulse {{key:Enter}}. Elija un archivo PNG o JPEG.
2. `Specify the lower-left corner`: haga clic, o escriba un punto.
3. `Specify its width`: el ancho en unidades de dibujo. {{key:Enter}} conserva el ancho ofrecido: una unidad por píxel, o el ancho que dio a este archivo la última vez (el aviso lo indica).
4. `Specify its rotation angle`: pulse {{key:Enter}} para no girarla.

La imagen es un solo objeto: selecciónela por su marco, y muévala, cópiela, gírela, escálela o bórrela como cualquier bloque.

:::note
El archivo de la imagen se queda con el dibujo mientras está abierto. Un DWG guardado indica el nombre del archivo, como lo hacen otros programas; no guarda los píxeles. Mantenga la imagen junto al dibujo.
:::

## Pegar una captura de pantalla o una imagen copiada

1. Copie la imagen (una captura de pantalla con {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=su herramienta de captura de pantalla}}, o Copiar imagen en otro programa o en un navegador).
2. Apunte donde debe ir en el dibujo y pulse {{key:Mod+V}}.

La esquina inferior izquierda de la imagen cae en el puntero (o en el centro de la vista), con un ancho del 40 % de lo que ve; muévala, escálela y recórtela como cualquier imagen. Su nombre es el del dibujo con `-picture-1.png` (luego `-2`, …), y el historial lo indica. {{ui:Edición}} › {{ui:Más}} › {{ui:Pegar una imagen}} hace lo mismo desde el menú (el navegador puede preguntar antes).

Un DWG guarda solo el nombre del archivo de una imagen, así que al guardar el dibujo también se guarda la imagen como su propio archivo. Mantenga los dos en la misma carpeta: el dibujo muestra la imagen desde allí. En el navegador eso es una segunda descarga, y el historial lo indica. Si en el portapapeles solo hay objetos de CadCraft, {{key:Mod+V}} pega esos, como antes.

## Pegar un área copiada en MarkupCraft

{{ui:Copiar área}} en MarkupCraft copia parte de una hoja como una imagen que conoce su tamaño. CadCraft la pega con ese tamaño.

1. En MarkupCraft, copie el área (un rectángulo, un círculo o una forma libre; {{ui:Copiar como superposición}} si quiere ver su dibujo a través de ella).
2. En CadCraft, pulse {{key:Mod+V}}, o escriba {{cmd:PASTEAREA}} (o `PAREA`), o elija {{ui:Edición}} › {{ui:Más}} › {{ui:Pegar un área copiada}}.
3. `Specify the lower-left corner of the copied area`: haga clic, o escriba un punto. Un marco del tamaño del área sigue al puntero.

Así de grande queda:

- **La hoja tenía una escala de dibujo:** a su tamaño real, en las unidades del dibujo (un detalle 1:50 de una escalera de 2 m mide 2 m de largo en un dibujo en metros, y 78.74 in en un dibujo en pulgadas). No se pregunta nada más.
- **La hoja no tenía escala:** CadCraft indica su tamaño en papel y pide una escala: escriba `100` para una hoja 1:100, pulse {{key:Enter}} para el tamaño de papel, o escriba `P`, haga clic en dos puntos de la imagen pegada y escriba qué tan separados están en realidad (como lo hace {{cmd:SCANSCALE}}). La esquina inferior izquierda se queda donde la puso.

Un dibujo sin unidades toma milímetros, como lo hace una base PDF. Una superposición conserva su papel transparente y empieza tan desvanecida como estaba al copiarla; fuera de un círculo o una forma libre también es transparente. El área pegada es una imagen como cualquier otra: muévala, gírela, escálela, recórtela o bórrela, y todo el pegado es un solo paso de deshacer. Guardada como DWG, es una IMAGE con su desvanecido y transparencia.

{{key:Mod+V}} pega el área cuando la imagen del portapapeles es la del área, o cuando el área se copió después de lo que copió en CadCraft (y en las últimas 6 horas). De lo contrario, pega como antes. {{cmd:PASTEAREA}} pega la última área copiada en cualquier momento.

## Mostrar las imágenes que usa un DWG

Un DWG guarda solo dónde estaban sus imágenes, así que CadCraft muestra cada una como un marco con su nombre de archivo.

1. Escriba {{cmd:IMAGE}} (o `IM`). La línea de comandos enumera cada archivo de imagen y si se muestra.
2. Elija los archivos (varios a la vez). Un archivo cuyo nombre contiene el que indica el dibujo también cuenta, porque las exportaciones suelen agregar un prefijo de proyecto.

## Recortar una imagen

1. Escriba {{cmd:IMAGECLIP}} (o `ICL`) y seleccione la imagen.
2. Elija `R` y haga clic en dos esquinas, o `P` y haga clic en los puntos de un polígono, y luego pulse {{key:Enter}}. `D` quita el recorte.

## Trazar imágenes

Las imágenes entran en el PDF como imágenes, con su propia resolución y debajo de las líneas. En el cuadro {{ui:Trazar}}, {{ui:Imágenes}} puede limitarlas a 600, 300 o 150 dpi para que el archivo sea más pequeño. Un JPEG entra tal cual.

## Qué se guarda dónde

| Formato | Imágenes |
|---|---|
| DWG (todas las versiones) | Como imágenes (IMAGE), con su recorte |
| DXF | Como sus marcos con el nombre del archivo; el guardado lo indica |

## Objetos de otros programas (OLE)

Un dibujo puede contener objetos hechos por otro programa, como una imagen de un programa de pintura o un rango de una hoja de cálculo (objetos OLE). CadCraft no los ejecuta ni los edita, y no puede insertar nuevos. Lo que hace:

- **En un DXF**, un objeto OLE se abre como un marco. Si el objeto guardó una imagen de sí mismo y esa imagen es un mapa de bits, la imagen se dibuja dentro del marco; de lo contrario, el marco lleva una etiqueta con el tipo del objeto, como "Microsoft Excel Worksheet (OLE)". Puede mover, copiar y borrar el marco como un bloque. {{cmd:SAVEAS}} a DXF 2000 lo escribe de nuevo como objeto OLE, con sus datos sin cambios.
- **En un DWG**, los objetos se conservan y se escriben de vuelta al guardar como DWG, byte por byte, pero **no se muestran**: un DWG conserva el lugar de un objeto dentro de sus propios datos, y CadCraft todavía no lo lee. El historial indica cuántos se conservaron. Escriba {{cmd:OLELIST}} para ver qué son (tipo, tamaño, si cada uno guardó una imagen) y para poner una copia de una imagen donde usted elija: **Colocar** pide el número, la esquina inferior izquierda y el ancho, y dibuja un marco con la imagen dentro. Esa copia es un marco que puede mover o borrar; el objeto en sí se queda en el dibujo y se sigue escribiendo al guardar.
- Un objeto que vino de un DXF se guarda en un DWG solo como su marco y su etiqueta; el historial lo indica. Guarde como DXF 2000 para conservar el objeto en sí.
- Las imágenes que son metarchivos (las que guardan muchos programas) no se dibujan: se muestran en su lugar el marco y la etiqueta.

## Errores comunes

| Lo que ve | Por qué | Solución |
|---|---|---|
| Un marco con un nombre de archivo | CadCraft no tiene el archivo | {{cmd:IMAGE}}, y luego elija el archivo |
| "That is not a picture" | El objeto elegido no es una imagen | Elija el marco de la imagen |
