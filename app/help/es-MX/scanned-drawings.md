---
title: Dibujos escaneados y el calco
summary: Inserte una hoja escaneada, escálela y enderécela, límpiela, borre partes de ella, ajuste las referencias a sus líneas y calque sus líneas y arcos.
keywords: escaneo, dibujo escaneado, ráster, tiff, jpeg, png, escala, alinear, enderezar, eliminar motas, umbral, blanco y negro, recortar, borrar, calco, vectorizar, referencia, arcos, sombreado, dibujos en papel, dibujos antiguos, scanattach, scantrace
from: 36227e5b
---

## Del papel a objetos de dibujo

Un dibujo escaneado es una imagen. CadCraft conserva la imagen que usted le dio y nunca la cambia: cada paso de limpieza crea una imagen nueva, con un paso de deshacer cada uno, y {{cmd:SCANINFO}} muestra el archivo original y los pasos realizados desde entonces. Nada se envía a ningún lugar y ningún modelo entrenado adivina nada: la limpieza y el calco son procesamiento de imágenes común, y se ejecutan en su equipo.

1. **Insértela.** {{cmd:SCANATTACH}} lee un PNG, un JPEG, un TIFF (una página, o todas las páginas de un archivo de varias páginas) o una página PDF que sea una imagen. Pide la página, la esquina inferior izquierda y el ancho. Para una página PDF también pide cuántos píxeles por pulgada usar para dibujar la página.
2. **Escálela.** {{cmd:SCANSCALE}}: designe dos puntos en el escaneo y luego escriba la distancia real entre ellos. La hoja se escala respecto al primer punto.
3. **Alinéela.** {{cmd:SCANALIGN}}: designe dos puntos en el escaneo y los dos lugares a los que pertenecen; la hoja se mueve y gira para ajustarse, y también se escala, a menos que responda No.
4. **Enderécela.** {{cmd:SCANDESKEW}} mide el ángulo en que están las líneas largas de la hoja y lo muestra, junto con qué tan seguro está. Acéptelo, o escriba el suyo, y la hoja se gira. Una hoja con pocas líneas largas recibe una advertencia: verifique el ángulo antes de aceptarlo.
5. **Límpiela.** {{cmd:SCANCLEAN}} convierte la hoja a blanco y negro (Automático primero iguala el papel; Adaptativo sigue más de cerca los cambios del papel; Nivel es un solo número para toda la hoja) y elimina las motas hasta el tamaño que defina.
6. **Recorte y borre.** {{cmd:SCANCROP}} conserva una ventana. {{cmd:SCANERASE}} borra un rectángulo, un polígono o un lazo (presione y arrastre): sellos, notas, un cerco de café.

La imagen limpia es lo que contiene un DWG guardado (una IMAGE y su IMAGEDEF, con el archivo de la imagen junto al dibujo, como con cualquier imagen).

## Ajustar referencias a las líneas del escaneo

Con {{cmd:RASTERSNAP}} activado (lo predeterminado), las referencias a objetos también encuentran las líneas de un escaneo en blanco y negro: los extremos de las líneas, sus puntos medios, las esquinas y los cruces, mostrados con las marcas habituales de referencia. La parte de la hoja bajo el puntero se calca mientras se mueve; acerque lo suficiente para que un píxel ocupe unos pocos píxeles de pantalla. Una línea más larga que la parte que se calca se sigue hasta sus extremos.

## El calco

{{cmd:SCANTRACE}} convierte las líneas de la hoja en líneas y arcos en una capa nueva (SCAN-TRACE), como un solo paso de deshacer, con el escaneo todavía debajo. Usted define:

- **Tolerancia:** qué tanto puede separarse una línea o arco calcado de las líneas del escaneo, en unidades de dibujo (el informe también da píxeles). Una tolerancia estrecha sigue cada irregularidad; una holgada produce menos piezas, más rectas.
- **Ventana:** una esquina de la hoja, o toda la hoja.
- **Arcos:** desactivado genera solo líneas.
- **Sobrantes:** lo que el calco dejó sin tocar se dibuja como recuadros en una capa que puede desactivar, o no se dibuja.

El calco encuentra el centro de cada trazo, lo sigue, ajusta líneas rectas y arcos circulares, une tramos que se cortaron donde cruzaba otra línea, hace exactamente horizontales y verticales las líneas casi horizontales y casi verticales, y cierra las esquinas. **El texto y el sombreado se quedan como ráster:** las piezas del tamaño de letras se apartan, y los grupos de líneas paralelas cortas se toman por sombreado y también se apartan.

Al terminar informa cuántas líneas y arcos generó, la tolerancia y cuántas piezas dejó como ráster. **Eso es lo que dieron los píxeles, con esa tolerancia, y no es una afirmación de que el resultado sea correcto.** Compárelo con la hoja: un calco puede omitir una línea tenue, unir dos líneas muy próximas o dibujar una línea donde solo hay una mancha. Limpie primero el escaneo (enderezado, en blanco y negro, sin motas) y el resultado será mucho mejor.

## Lo que no lee

Los archivos TIFF guardados en mosaicos, BigTIFF, TIFF con compresión JPEG o deflate, la codificación de fax Grupo 3 y los colores guardados en planos separados se rechazan con un mensaje; vuelva a guardarlos como franjas con compresión LZW, PackBits, Grupo 4 o sin compresión. También se rechazan los PNG entrelazados. Se rechazan los archivos de más de 128 MB o de más de 100 millones de píxeles, y una ventana de calco puede contener como máximo 64 millones de píxeles.
