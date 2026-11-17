---
title: Pasar bocetos a otros modeladores de piezas y desde ellos
summary: Escriba una macro que reconstruya su dibujo como un boceto con restricciones en un modelador de piezas, y abra un boceto exportado desde uno.
keywords: boceto, macro, swb, vba, exportar, modelador de piezas, variables globales, ecuaciones, relaciones, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks no está disponible donde se compila CadCraft, así que ninguna de las dos direcciones se ha probado todavía en SolidWorks. Lo que escribe CadCraft solo se comprueba en cuanto a estructura. Compruebe el resultado antes de confiar en él.
:::

## Enviar un dibujo como boceto

1. Restrinja y acote el dibujo (véase [Restringir un dibujo](topic:constraints)).
2. En el grupo {{ui:Paramétrico}}, abra {{ui:Más}} y elija {{ui:Macro para SolidWorks (.swb)}}, o escriba {{cmd:SWBOUT}}.

   Se descarga un archivo con el nombre del dibujo y terminación `.swb`.
3. En SolidWorks, elija **Herramientas > Macro > Ejecutar** y seleccione ese archivo.

La macro crea una pieza nueva a partir de su plantilla de pieza predeterminada, abre un boceto en el Plano alzado y dibuja en él las líneas, círculos, arcos, puntos y polilíneas del modelo, con:

- sus restricciones como relaciones de boceto,
- sus restricciones dimensionales como cotas con los mismos nombres (`d1@Sketch1`),
- sus propios parámetros como variables globales,
- cada expresión como una ecuación.

La pieza usa la unidad de longitud del dibujo. El texto, los bloques, las tramas, las cotas y las hojas no forman parte del boceto; el historial indica lo que se ha dejado fuera. Las expresiones sin forma de ecuación (`if`, `min`, `max`, `round`, `%` y algunas más) se escriben con su valor actual, y el historial lo indica. Todo lo que la macro no puede crear se escribe en un archivo de registro junto a la macro, y un mensaje resume el resultado al final.

## Abrir un boceto desde una pieza

1. En SolidWorks, ejecute la macro de exportación de CadCraft (descárguela en la aplicación PartCraft: Archivo > Exportar > Exportar macro para traer piezas de vuelta) sobre la pieza. Escribe un archivo `.json` con formato `cadcraft-sw-export` junto a la pieza.
2. En CadCraft, elija {{ui:Abrir}} y seleccione ese archivo `.json`.
3. Si la pieza tiene varios bocetos, elija uno.

El boceto se convierte en el dibujo, en milímetros: sus líneas, arcos, círculos y puntos; sus relaciones como restricciones; sus cotas como restricciones dimensionales con los nombres originales (`D1`, `D2` …); sus variables globales como parámetros; y las ecuaciones de sus cotas como expresiones. El historial indica lo que no se ha trasladado, como las relaciones que CadCraft no tiene. No se conserva la posición del boceto en la pieza: se dibuja plano, tal como se ve en su plano.
