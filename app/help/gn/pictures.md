---
title: Imágenes en un plano
summary: Colocá una imagen PNG o JPEG, recortala a un rectángulo o un polígono, mostrá las imágenes que usa un DWG, y trazalas nítidas.
keywords: pastearea, parea, área copiada, copied area, markupcraft, tamaño real, tamaño natural, superposición, ole, ole2frame, objeto incrustado, pegar imagen, pegar captura, ctrl+v, imagen del portapapeles, captura de pantalla, picture, imagen, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, trazar, pdf, resolución
from: 4025ac97
---

## Lo que vas a crear

El logo de una empresa colocado en un cajetín, recortado a la parte que querés, y un PDF en el que se imprime con su propia resolución.

## Colocar una imagen

1. Escribí {{cmd:IMAGEATTACH}} (o `IAT`) y presioná {{key:Enter}}. Elegí un archivo PNG o JPEG.
2. `Seleccione la esquina inferior izquierda`: hacé clic, o escribí un punto.
3. `Ingrese su ancho`: el ancho en unidades de dibujo. {{key:Enter}} mantiene el ancho ofrecido: una unidad por píxel, o el ancho que diste a este archivo la última vez (el aviso indica cuál).
4. `Ingrese el ángulo de rotación`: {{key:Enter}} para ninguno.

La imagen es un solo objeto: seleccionala por su marco, y movela, copiala, rotala, escalala o borrala como cualquier bloque.

:::note
El archivo de la imagen queda con el plano mientras esté abierto. Un DWG guardado nombra el archivo, como hacen otros programas; no contiene los píxeles. Guardá la imagen junto al plano.
:::

## Pegar una captura de pantalla o una imagen copiada

1. Copiá la imagen (una captura de pantalla con {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=tu herramienta de captura de pantalla}},
   o Copiar imagen en otro programa o en un navegador).
2. Apuntá al lugar donde debe ir en el plano y presioná {{key:Mod+V}}.

La esquina inferior izquierda de la imagen cae en el puntero (o en el centro de la vista), con 40 % del ancho de lo que ves; movela,
escalala y recortala como cualquier imagen. Su nombre es el del plano con `-picture-1.png` (después `-2`, …), y el historial lo indica.
{{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} hace lo mismo desde el menú (el navegador puede preguntar antes).

Un DWG conserva solo el nombre del archivo de una imagen, así que al guardar el plano también se guarda la imagen como su propio archivo. Guardá los dos en la misma carpeta: el plano muestra la imagen desde allí. En el navegador eso es una segunda descarga, y el historial lo dice.
Si en el portapapeles hay solo objetos de CadCraft, {{key:Mod+V}} los pega, como antes.

## Pegar un área copiada en MarkupCraft

{{ui:Copy area}} en MarkupCraft copia una parte de una hoja como una imagen que sabe qué tamaño tiene. CadCraft la pega con ese tamaño.

1. En MarkupCraft, copiá el área (un rectángulo, un círculo o una forma libre; {{ui:Copy as overlay}} si querés ver tu plano a través de ella).
2. En CadCraft, presioná {{key:Mod+V}}, o escribí {{cmd:PASTEAREA}} (o `PAREA`), o elegí {{ui:Edit}} › {{ui:More}} › {{ui:Paste a copied area}}.
3. `Seleccione la esquina inferior izquierda del área copiada`: hacé clic, o escribí un punto. Un marco del tamaño del área sigue al puntero.

Qué tamaño tiene al caer:

- **La hoja tenía escala de plano:** a su tamaño real, en las unidades del plano (un detalle 1:50 de una escalera de 2 m mide 2 m en un plano en metros, 78.74 en un plano en pulgadas). No se pregunta nada más.
- **La hoja no tenía escala:** CadCraft indica su tamaño en papel y pide una escala: escribí `100` para una hoja 1:100, presioná {{key:Enter}} para el tamaño de papel, o escribí `P`, hacé clic en dos puntos de la imagen pegada e indicá qué distancia real hay entre ellos (como lo hace {{cmd:SCANSCALE}}). La esquina inferior izquierda se queda donde la pusiste.

Un plano sin unidades toma milímetros, igual que una base PDF. Una superposición mantiene su papel transparente y empieza tan desvanecida como estaba al copiarla; fuera de un círculo o de una forma libre también es transparente. El área pegada es una imagen como cualquier otra: movela, rotala, escalala, recortala o borrala, y todo el pegado es un solo paso de deshacer. Guardada como DWG es una IMAGE con su desvanecido y transparencia.

{{key:Mod+V}} pega el área cuando la imagen del portapapeles es la del área, o cuando el área se copió después de algo que copiaste en CadCraft (y en las últimas 6 horas). Si no, pega como antes. {{cmd:PASTEAREA}} pega la última área copiada en cualquier momento.

## Mostrar las imágenes que usa un DWG

Un DWG guarda solo dónde estaban sus imágenes, así que CadCraft muestra cada una como un marco con su nombre de archivo.

1. Escribí {{cmd:IMAGE}} (o `IM`). La línea de comandos lista cada archivo de imagen y si se muestra.
2. Elegí los archivos (varios a la vez). Un archivo cuyo nombre contiene el que nombra el plano también cuenta, porque las exportaciones suelen agregar un prefijo de proyecto.

## Recortar una imagen

1. Escribí {{cmd:IMAGECLIP}} (o `ICL`) y seleccioná la imagen.
2. Elegí `R` y hacé clic en dos esquinas, o `P` y hacé clic en los puntos de un polígono, y después {{key:Enter}}. `D` quita el recorte.

## Trazar imágenes

Las imágenes entran al PDF como imágenes, con su propia resolución y debajo de las líneas. En el cuadro {{ui:Plot}}, {{ui:Pictures}} puede limitarlas a 600, 300 o 150 ppp para que el archivo sea más chico. Un JPEG entra tal cual.

## Qué se guarda y dónde

| Formato | Imágenes |
|---|---|
| DWG (todas las versiones) | Como imágenes (IMAGE), con su recorte |
| DXF | Como sus marcos con el nombre de archivo; el guardado lo indica |

## Objetos de otros programas (OLE)

Un plano puede contener objetos hechos por otro programa, como una imagen de un programa de pintura o un rango de una hoja de cálculo (objetos OLE). CadCraft no los ejecuta ni los edita, y no puede insertar otros nuevos. Lo que hace:

- **En un DXF**, un objeto OLE se abre como un marco. Si el objeto guardó una imagen de sí mismo y esa imagen es un mapa de bits, la imagen se dibuja dentro del marco; si no, el marco lleva una etiqueta con el tipo del objeto, como "Hoja de cálculo de Microsoft Excel (OLE)". Podés mover, copiar y borrar el marco como un bloque. {{cmd:SAVEAS}} a DXF 2000 lo escribe otra vez como objeto OLE, con sus datos sin cambios.
- **En un DWG**, los objetos se conservan y se escriben de nuevo al guardar como DWG, byte por byte, pero **no se muestran**: un DWG guarda el lugar de un objeto dentro de sus propios datos, y CadCraft todavía no lo lee. El historial dice cuántos se conservaron. Escribí {{cmd:OLELIST}} para ver qué son (tipo, tamaño, si cada uno guardó una imagen) y para poner una copia de una imagen donde elijas: **Colocar** pide el número, la esquina inferior izquierda y el ancho, y dibuja un marco con la imagen adentro. Esa copia es un marco que podés mover o borrar; el objeto en sí queda en el plano y se sigue escribiendo al guardar.
- Un objeto que vino de un DXF se guarda en un DWG solo como su marco y etiqueta; el historial lo dice. Guardá como DXF 2000 para conservar el objeto en sí.
- Las imágenes que son metarchivos (lo que guardan muchos programas) no se dibujan: se muestran el marco y la etiqueta.

## Errores comunes

| Lo que ves | Por qué | Solución |
|---|---|---|
| Un marco con un nombre de archivo | CadCraft no tiene el archivo | {{cmd:IMAGE}}, y después elegí el archivo |
| "Eso no es una imagen" | El objeto elegido no es una imagen | Elegí el marco de la imagen |
