---
title: Mover croquis hacia y desde otros modeladores de piezas
summary: Escriba una macro que reconstruya su dibujo como un croquis con restricciones en un modelador de piezas, y abra un croquis exportado desde uno.
keywords: croquis, macro, swb, vba, exportar, modelador de piezas, variables globales, ecuaciones, relaciones, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks no está disponible donde se compila CadCraft, así que todavía no se ha probado ninguna de las dos direcciones en SolidWorks. Lo que escribe CadCraft solo se verifica en cuanto a su estructura. Revise el resultado antes de depender de él.
:::

## Enviar un dibujo como croquis

1. Restrinja y acote el dibujo (vea [Restringir un dibujo](topic:constraints)).
2. En el grupo {{ui:Paramétrico}}, abra {{ui:Más}} y elija {{ui:Macro para SolidWorks (.swb)}}, o escriba {{cmd:SWBOUT}}.

   Se descarga un archivo con el nombre del dibujo, terminado en `.swb`.
3. En SolidWorks, elija **Herramientas > Macro > Ejecutar** y seleccione ese archivo.

La macro crea una pieza nueva a partir de su plantilla de pieza predeterminada, abre un croquis en el plano alzado y dibuja en él las líneas, círculos, arcos, puntos y polilíneas del modelo, con:

- sus restricciones como relaciones de croquis,
- sus restricciones dimensionales como cotas con los mismos nombres (`d1@Sketch1`),
- sus propios parámetros como variables globales,
- cada expresión como una ecuación.

La pieza usa la unidad de longitud del dibujo. El texto, los bloques, los sombreados, las cotas y las hojas no forman parte del croquis; el historial enumera lo que se omitió. Las expresiones sin forma de ecuación (`if`, `min`, `max`, `round`, `%` y algunas otras) se escriben con su valor actual, y el historial indica cuáles son. Todo lo que la macro no puede crear se escribe en un archivo de registro junto a la macro, y al final aparece un mensaje que resume el resultado.

## Abrir un croquis desde una pieza

1. En SolidWorks, ejecute sobre la pieza la macro de exportación de CadCraft (descárguela en la aplicación PartCraft: Archivo > Exportar > Exportar macro para devolver piezas). Escribe un archivo `.json` en el formato `cadcraft-sw-export` junto a la pieza.
2. En CadCraft, elija {{ui:Abrir}} y seleccione ese archivo `.json`.
3. Cuando la pieza tiene varios croquis, elija uno.

El croquis se convierte en el dibujo, en milímetros: sus líneas, arcos, círculos y puntos; sus relaciones como restricciones; sus cotas como restricciones dimensionales, con los nombres originales (`D1`, `D2` …); sus variables globales como parámetros; y las ecuaciones de sus cotas como sus expresiones. El historial enumera lo que no se trasladó, como las relaciones que CadCraft no tiene. La posición del croquis dentro de la pieza no se conserva: se dibuja plano, tal como se ve en su plano.
