---
title: Subyacentes PDF e importación de PDF
summary: Coloque una página PDF bajo su dibujo para calcarla y trazarla, o convierta las líneas y el texto de la página en objetos de dibujo.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, subyacente, calcar, importar pdf, escaneado, planta, atenuación, recorte, capas, referencia, abrir pdf
from: aa301d0f
---

## Dos formas de incorporar una página PDF

- **Adjuntar** ({{cmd:PDFATTACH}}) mantiene el PDF como una imagen bajo su dibujo. Lo calca, referencia sus líneas, lo atenúa y lo recorta, y se traza con la hoja. El dibujo solo conserva el nombre del archivo.
- **Importar** ({{cmd:PDFIMPORT}}) convierte las líneas, curvas, rellenos y textos de la página en objetos de dibujo normales, en capas con el nombre del PDF. Son suyos para editarlos, y el PDF ya no es necesario después.

Al abrir un PDF con {{ui:Open}} se le pregunta cuál de las dos opciones quiere.

## Adjuntar una página

1. Escriba `PDFATTACH` (o `PDFATT`) y elija el PDF. Si tiene varias páginas, escriba el número de página.
2. Haga clic en el punto de inserción (la esquina inferior izquierda de la página).
3. Pulse {{key:Enter}} para el tamaño real de la página, o escriba la escala: unidades de dibujo por punto PDF (un punto mide 1/72 de pulgada, es decir, 0.3528 en un dibujo en milímetros).
4. Pulse {{key:Enter}} para no girar, o escriba un ángulo.

La página es un objeto, como una referencia de bloque: puede moverla, girarla, escalarla, copiarla, borrarla y ponerla en una capa. Si desactiva su capa, desaparece. Al acercar el zoom, la página se vuelve a dibujar con nitidez.

## Calcarla

Con {{ui:Snap}} activado, el cursor se ajusta a las propias líneas del PDF: puntos finales, puntos medios e intersecciones (y {{ui:Nearest}} cuando esa referencia está activa). El texto dibujado como letras en la página no se ajusta.

## Ajustarla

- `PDFADJUST`: **Atenuación** (de 0 a 80 por ciento), **Contraste** (de 0 a 100), **Monocromo**, y **Onoff** para ocultarla sin borrarla.
- `PDFCLIP`: muestra solo un rectángulo o un polígono de la página; **Borrar** elimina el recorte.
- `PDFLAYERS`: un PDF puede tener sus propias capas. El comando las enumera; escriba un número para activar o desactivar esa capa en este subyacente. Las capas que el archivo tiene desactivadas empiezan desactivadas.

## Trazar y guardar

PLOT imprime la página como sus líneas, rellenos y texto, así que sigue nítida y se puede buscar. Las imágenes dentro del PDF se muestran en pantalla, pero todavía no se imprimen.

Un DWG o un DXF 2000 guarda el subyacente como un vínculo: el nombre del archivo, la página, su posición, su escala, su giro, el recorte, la atenuación y el contraste. El propio PDF no está en el dibujo. Vuelva a abrir el dibujo, escriba `PDF` y elija el archivo de nuevo; mientras tanto, las páginas se muestran como marcos y toman su tamaño real cuando lo hace. El DXF antiguo (R12) no tiene subyacentes: conserva el marco y el nombre. Todavía no se ha comprobado cómo leen el recorte y la escala guardados otros programas.

## Importar una página

1. Escriba `PDFIMPORT` (o `PDFIM`) y elija el PDF y la página.
2. Haga clic donde debe ir la esquina inferior izquierda de la página.
3. Pulse {{key:Enter}} para el tamaño real, escriba una escala o elija **Dos puntos**: la página se dibuja a tamaño real; después haga clic en dos puntos separados por una distancia que conozca y escriba la distancia real. Todo se escala en consecuencia.

Las líneas se convierten en líneas y polilíneas, los círculos y los arcos se reconocen, y las formas rellenas se convierten en tramas sólidas. El texto pasa a ser texto en una capa que termina en `-TEXT`. Es un solo paso de deshacer. Las imágenes del PDF no se importan: en su lugar, adjunte la página. Un escaneado (una página que es solo una imagen) no tiene líneas que importar.

Los PDF se leen como archivos no fiables: no se ejecuta ningún script, y una página muy grande se recorta y se indica.
