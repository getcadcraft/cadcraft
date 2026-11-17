---
title: Dibujar texto con sus propias fuentes SHX
summary: Dé a CadCraft una carpeta de fuentes SHX (o elija los archivos), y los estilos de texto que las nombran se dibujan con ellas, en pantalla y en un trazado o PDF, con la altura, el factor de anchura y la inclinación del estilo.
keywords: shx, fuentes, fuente, fuente de forma, fuente grande, bigfont, unifont, heredada, persa, farsi, árabe, estilo de texto, fuente que falta, fuente sustituida, SHXFONTS, carpeta, invertir, orden visual, simplex, isocp
from: 14b0a4ab
---

Los dibujos de otros programas suelen nombrar **fuentes SHX** en sus estilos de texto, y un DWG no las incluye. Sin la fuente, CadCraft dibuja ese texto con su propio tipo de letra, lo que sirve para el texto latino normal pero no para las fuentes antiguas que asignan códigos de carácter simples a otras formas de letra, como las anotaciones persas heredadas.

Dé a CadCraft las fuentes, y dibujará el texto con ellas.

## Cargar sus fuentes

Escriba {{cmd:SHXFONTS}} (`SHX`) y elija:

- {{ui:Carpeta}} (CadCraft Studio): elija una carpeta. Cada archivo `.shx` que contenga se lee ahora, y de nuevo cada vez que CadCraft se inicia.
- {{ui:Archivos}} (el navegador): elija uno o varios archivos `.shx`. Se guardan en este navegador y nunca se suben.
- {{ui:Lista}}: las fuentes cargadas, y las que el dibujo abierto nombra pero que usted no ha cargado.
- {{ui:Quitar}} y {{ui:Borrar}}: olvidar una fuente, o todas.

CadCraft no puede incluir fuentes de terceros, así que nunca trae ninguna: vienen de usted. Un dibujo solo nombra sus fuentes y no conserva ninguna copia.

## Qué ocurre

El nombre de fuente de un estilo de texto se asocia con una fuente cargada por su nombre, sin distinguir mayúsculas, carpeta ni `.shx` (`SIMPLEX.SHX` encuentra `simplex`). Un texto de ese estilo se dibuja como líneas, en pantalla, en un trazado y en un PDF, en su propio lugar, con su altura, rotación, factor de anchura y ángulo de inclinación. Su anchura es la propia de la fuente, de modo que las alineaciones {{ui:Centro}} y {{ui:Derecha}}, el ajuste de línea y la designación coinciden con lo que ve. Un estilo cuya fuente no está cargada conserva el tipo de letra integrado, y cuando abre un dibujo que nombra fuentes que usted no ha cargado, la línea de comandos lo indica.

El estilo Standard también cuenta: un dibujo cuyo estilo Standard nombra una fuente propia la conserva.

## Fuentes ya en orden visual

Muchas fuentes SHX antiguas persas y árabes contienen letras ya formadas para la pantalla y dibujadas de izquierda a derecha, así que un texto escrito en orden lógico sale al revés. Escriba {{cmd:SHXFONTS}}, elija {{ui:Invertir (R)}} y nombre la fuente: su texto se dispone entonces empezando por la última letra. Vuelva a ejecutarlo para deshacerlo. El interruptor pertenece a la fuente, se guarda en este navegador y no se guarda en el dibujo.

## Lo que aún no está cubierto

- El texto con códigos de formato en línea (colores, apilados en un MTEXT) se queda con el tipo de letra integrado.
- Las fuentes grandes (del tipo de doble byte) suplen los códigos que le faltan a la fuente principal, pero un texto de una codificación de Asia oriental que CadCraft ya haya convertido a Unicode no se vuelve a asignar a los códigos de doble byte de la fuente.
- El lector de fuentes sigue la descripción publicada del formato y se probó con fuentes hechas para CadCraft. Si alguna de las suyas dibuja mal, envíenos la fuente y el dibujo.
