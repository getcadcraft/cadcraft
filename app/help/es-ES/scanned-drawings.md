---
title: Dibujos escaneados y el trazado
summary: Insertar una hoja escaneada, escalarla y enderezarla, limpiarla, borrar partes de ella, ajustarse a sus líneas y trazarla en líneas y arcos.
keywords: escaneo, dibujo escaneado, ráster, tiff, jpeg, png, escala, alinear, enderezar, eliminar motas, umbral, blanco y negro, recortar, borrar, trazar, vectorizar, referencia, arcos, sombreado, dibujos en papel, dibujos antiguos, scanattach, scantrace
from: 36227e5b
---

## De una hoja de papel a objetos de dibujo

Un dibujo escaneado es una imagen. CadCraft conserva la imagen que usted le dio y nunca la modifica: cada paso de limpieza crea una imagen nueva, con un paso de deshacer cada uno, y {{cmd:SCANINFO}} enumera el archivo original y los pasos realizados desde entonces. No se envía nada a ningún sitio, y ningún modelo entrenado hace suposiciones: la limpieza y el trazado son procesamiento de imágenes convencional, y se ejecutan en su equipo.

1. **Insértela.** {{cmd:SCANATTACH}} lee un PNG, un JPEG, un TIFF (una página, o todas las páginas de un archivo de varias páginas) o una página PDF que sea una imagen. Pide la página, la esquina inferior izquierda y el ancho. Para una página PDF, pide también cuántos píxeles por pulgada usar para dibujar la página.
2. **Escálela.** {{cmd:SCANSCALE}}: designe dos puntos en el escaneo y escriba luego la distancia real entre ellos. La hoja se escala respecto al primer punto.
3. **Alinéela.** {{cmd:SCANALIGN}}: designe dos puntos del escaneo y los dos lugares a los que pertenecen; la hoja se desplaza y gira para ajustarse, y también se escala, salvo que responda No.
4. **Enderécela.** {{cmd:SCANDESKEW}} mide el ángulo en que están las líneas largas de la hoja y lo muestra, junto con su grado de fiabilidad. Acéptelo o escriba el suyo, y la hoja se girará. Una hoja con pocas líneas largas muestra una advertencia: compruebe el ángulo antes de aceptarlo.
5. **Límpiela.** {{cmd:SCANCLEAN}} convierte la hoja en blanco y negro (Auto corrige primero el papel; Adaptativo sigue más de cerca los cambios del papel; Nivel es un único número para toda la hoja) y elimina las motas hasta el tamaño que haya definido.
6. **Recorte y borre.** {{cmd:SCANCROP}} conserva una ventana. {{cmd:SCANERASE}} borra un rectángulo, un polígono o un lazo (pulse y arrastre): sellos, notas, un cerco de café.

La imagen limpia es lo que contiene un DWG guardado (una IMAGE y su IMAGEDEF, con el archivo de la imagen junto al dibujo, como en cualquier imagen).

## Ajustarse a las líneas del escaneo

Con {{cmd:RASTERSNAP}} activado (por defecto), las referencias a objetos también encuentran las líneas de un escaneo en blanco y negro: los extremos de las líneas, sus puntos medios, las esquinas y los cruces, mostrados con las marcas de referencia habituales. La parte de la hoja bajo el puntero se traza mientras se mueve; amplíe lo suficiente para que un píxel ocupe unos pocos píxeles de pantalla. Una línea más larga que la parte que se traza se sigue hasta sus extremos.

## El trazado

{{cmd:SCANTRACE}} convierte las líneas de la hoja en líneas y arcos en una capa nueva (SCAN-TRACE), como un único paso de deshacer, con el escaneo todavía debajo. Usted define:

- **Tolerancia:** cuánto puede alejarse una línea o arco trazado de las líneas del escaneo, en unidades de dibujo (el informe también da los píxeles). Una tolerancia estricta sigue cada irregularidad; una holgada produce menos tramos, más rectos.
- **Ventana:** una esquina de la hoja, o la hoja completa.
- **Arcos:** desactivado genera solo líneas.
- **Sobrantes:** lo que el trazado deja sin tocar se dibuja como cajas en una capa que puede desactivar, o no se dibuja.

El trazado encuentra el centro de cada trazo, lo sigue, ajusta líneas rectas y arcos circulares, une los tramos que se cortaron donde cruzaba otra línea, convierte en exactamente horizontales y verticales las líneas casi horizontales y casi verticales, y cierra las esquinas. **El texto y las tramas se quedan como ráster:** las piezas del tamaño de rótulos se dejan aparte, y los haces de líneas paralelas cortas se consideran tramas y también se dejan aparte.

Al terminar, indica cuántas líneas y arcos ha creado, la tolerancia y cuántas piezas ha dejado como ráster. **Eso es lo que dieron los píxeles, con esa tolerancia; no es una garantía de que el resultado sea correcto.** Compárelo con la hoja: un trazado puede omitir una línea tenue, unir dos líneas muy próximas o dibujar una línea donde solo hay una mancha. Limpie antes el escaneo (enderezado, en blanco y negro, sin motas) y el resultado mejorará mucho.

## Lo que no lee

Los archivos TIFF guardados en mosaicos, BigTIFF, TIFF con compresión JPEG o deflate, la codificación de fax Grupo 3 y los colores guardados en planos separados se rechazan con un mensaje; guárdelos de nuevo como tiras con compresión LZW, PackBits, Grupo 4 o sin compresión. También se rechazan los PNG entrelazados. Se rechazan los archivos de más de 128 MB o de 100 millones de píxeles, y una ventana de trazado admite como máximo 64 millones de píxeles.
