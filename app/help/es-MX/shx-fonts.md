---
title: Dibujar texto con sus propias fuentes SHX
summary: Entregue a CadCraft una carpeta de fuentes SHX (o elija los archivos) y los estilos de texto que las nombran se dibujan con ellas, en pantalla y en un trazado o PDF, con la altura, el factor de ancho y la inclinación del estilo.
keywords: shx, fuentes, fuente, fuente de formas, fuente grande, bigfont, unifont, heredado, persa, farsi, árabe, estilo de texto, fuente faltante, fuente sustituida, SHXFONTS, carpeta, invertir, orden visual, simplex, isocp
from: 14b0a4ab
---

Los dibujos de otros programas suelen nombrar **fuentes SHX** en sus estilos de texto, y un DWG no las lleva. Sin la fuente, CadCraft dibuja ese texto con su propia tipografía, que sirve para texto latino común pero no para fuentes antiguas que asignan códigos de carácter simples a otras formas de letra, como la anotación persa heredada.

Entregue las fuentes a CadCraft y dibujará el texto con ellas.

## Cargar sus fuentes

Escriba {{cmd:SHXFONTS}} (`SHX`) y elija:

- {{ui:Carpeta}} (CadCraft Studio): elija una carpeta. Se lee cada archivo `.shx` que contenga, ahora y de nuevo cada vez que se inicia CadCraft.
- {{ui:Archivos}} (el navegador): elija uno o varios archivos `.shx`. Se guardan en este navegador y nunca se suben.
- {{ui:Lista}}: las fuentes cargadas y las que el dibujo abierto nombra pero usted no ha cargado.
- {{ui:Quitar}} y {{ui:Borrar}}: olvidan una fuente, o todas.

CadCraft no puede incluir fuentes de terceros, así que nunca trae ninguna: vienen de usted. Un dibujo solo nombra sus fuentes y no guarda copia de ellas.

## Qué ocurre

El nombre de fuente de un estilo de texto se busca entre las fuentes cargadas por su nombre, sin distinguir mayúsculas, carpeta ni `.shx` (`SIMPLEX.SHX` encuentra `simplex`). Un texto con ese estilo se dibuja como líneas, en pantalla, en un trazado y en un PDF, en el lugar, la altura, el giro, el factor de ancho y el ángulo de inclinación propios del texto. Su ancho es el de la fuente, así que la alineación al centro y a la derecha, el ajuste de líneas y la selección coinciden con lo que ve. Un estilo cuya fuente no está cargada conserva la tipografía integrada, y al abrir un dibujo que nombra fuentes que no ha cargado, la línea de comandos lo avisa.

El estilo Standard también cuenta: un dibujo cuyo estilo Standard nombra una fuente propia la conserva.

## Fuentes ya en orden visual

Muchas fuentes SHX persas y árabes antiguas traen las letras ya formadas para la pantalla y dibujadas de izquierda a derecha, así que un texto escrito en orden lógico sale al revés. Escriba {{cmd:SHXFONTS}}, elija {{ui:Invertir}} y nombre la fuente: su texto se dispone entonces desde la última letra. Ejecútelo de nuevo para deshacerlo. El ajuste pertenece a la fuente, se guarda en este navegador y no se guarda en el dibujo.

## Lo que aún no cubre

- El texto con códigos de formato en línea (colores, apilados en un MTEXT) se queda en la tipografía integrada.
- Las fuentes grandes (de doble byte) completan los códigos que le faltan a la fuente principal, pero un texto en una página de códigos de Asia oriental que CadCraft ya convirtió a Unicode no se vuelve a asignar a los códigos de doble byte de la fuente.
- El lector de fuentes sigue la descripción publicada del formato y se probó con fuentes hechas para CadCraft. Si una de las suyas se dibuja mal, envíenos la fuente y el dibujo.
