---
title: Subyacentes PDF e importación de PDF
summary: Coloque una página PDF bajo su dibujo para calcarla y trazarla, o convierta las líneas y el texto de la página en objetos de dibujo.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, subyacente, calcar, importar pdf, escaneo, plano de planta, atenuar, recortar, capas, referencia, abrir pdf
from: aa301d0f
---

## Dos formas de incorporar una página PDF

- **Adjuntar** ({{cmd:PDFATTACH}}) mantiene el PDF como una imagen bajo su dibujo. Usted lo calca, ajusta la referencia a sus líneas, lo atenúa y lo recorta, y se traza junto con la hoja. El dibujo solo conserva el nombre del archivo.
- **Importar** ({{cmd:PDFIMPORT}}) convierte las líneas, curvas, rellenos y texto de la página en objetos de dibujo comunes, en capas con el nombre del PDF. Son suyos para editar, y después ya no se necesita el PDF.

Al abrir un PDF con {{ui:Abrir}} se le pregunta cuál de las dos opciones desea.

## Adjuntar una página

1. Escriba `PDFATTACH` (o `PDFATT`) y elija el PDF. Si tiene varias páginas, escriba el número de página.
2. Haga clic en el punto de inserción (la esquina inferior izquierda de la página).
3. Pulse {{key:Enter}} para el tamaño real de la página, o escriba la escala: unidades de dibujo por punto PDF (un punto mide 1/72 de pulgada, así que 0.3528 en un dibujo en milímetros).
4. Pulse {{key:Enter}} para no girar, o escriba un ángulo.

La página es un objeto como una referencia a bloque: se puede mover, girar, escalar, copiar, borrar y colocar en una capa. Apague su capa y desaparece. Acerque el zoom y la página se vuelve a dibujar con nitidez.

## Calcarla

Con {{ui:Referencia}} activada, el cursor se ajusta a las líneas propias del PDF: puntos finales, puntos medios e intersecciones (y {{ui:Más cercano}} cuando esa referencia está activa). El texto dibujado como letras en la página no se ajusta.

## Ajustarla

- `PDFADJUST`: **Atenuar** (0 a 80 por ciento), **Contraste** (0 a 100), **Monocromo**, y **Onoff** para ocultarlo sin borrarlo.
- `PDFCLIP`: muestra solo un rectángulo o un polígono de la página; **Borrar** quita el recorte.
- `PDFLAYERS`: un PDF puede tener sus propias capas. El comando las enumera; escriba un número para activar o desactivar esa capa en este subyacente. Las capas que el archivo tiene desactivadas empiezan desactivadas.

## Trazar y guardar

PLOT imprime la página como sus líneas, rellenos y texto (así se mantiene nítida y se puede buscar). Las imágenes dentro del PDF se muestran en pantalla, pero todavía no se imprimen.

Un DWG o DXF 2000 guarda el subyacente como un vínculo: el nombre del archivo, la página, dónde está, su escala, giro, recorte, atenuación y contraste. El PDF en sí no está en el dibujo. Vuelva a abrir el dibujo, escriba `PDF` y elija el archivo otra vez; mientras tanto, las páginas se muestran como marcos, y toman su tamaño real al hacerlo. El DXF anterior (R12) no tiene subyacentes: conserva el marco y el nombre. Todavía no se ha verificado cómo leen el recorte y la escala guardados otros programas.

## Importar una página

1. Escriba `PDFIMPORT` (o `PDFIM`) y elija el PDF y la página.
2. Haga clic donde debe ir la esquina inferior izquierda de la página.
3. Pulse {{key:Enter}} para el tamaño real, escriba una escala, o elija **Dos puntos**: la página se dibuja a tamaño real; luego haga clic en dos puntos de una distancia que conozca y escriba la distancia real; todo se escala para coincidir.

Las líneas se convierten en líneas y polilíneas, se reconocen círculos y arcos, y las formas rellenas se vuelven sombreados sólidos. El texto se convierte en texto en una capa que termina en `-TEXT`. Es un solo paso de deshacer. Las imágenes del PDF no se importan: adjunte la página en su lugar. Un escaneo (una página que es solo una imagen) no tiene líneas que importar.

Los PDF se leen como archivos no confiables: no se ejecuta ningún script, y una página muy grande se corta y se indica.
