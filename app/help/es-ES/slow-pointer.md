---
title: El puntero salta o se retrasa sobre el dibujo
summary: Qué hacer cuando la cruz no sigue al ratón con fluidez, en un ordenador antiguo o lento.
keywords: cursor que salta, retraso del puntero, cruz lenta, cursor a saltos, ordenador antiguo, tarjeta gráfica antigua, gráficos integrados, aceleración por hardware, puntero más suave, portátil lento
from: 39dc9057
---

CadCraft funciona en el navegador (CadCraft Studio también es una vista de navegador), así que nada en él está diseñado para una tarjeta gráfica u otra. La cruz la dibuja la aplicación, lo que significa que solo puede moverse tan rápido como la aplicación puede dibujar un fotograma.

## Deje que CadCraft reduzca los extras

1. Abra {{ui:Parámetros}} (el engranaje de la esquina superior derecha) y permanezca en la pestaña {{ui:CadCraft}}.
2. Elija {{ui:Puntero más suave en ordenadores lentos}}.
3. Seleccione {{ui:Activada}}.

Con esta opción activada, se usa el puntero de cruz propio de su ordenador en lugar de la cruz y el cuadro de selección dibujados (también la cruz de pantalla completa), y el objeto bajo el puntero se resalta cuando el puntero está quieto en lugar de mientras se mueve. Los ajustes a objetos, el seguimiento y la goma elástica funcionan igual que antes.

{{ui:Automática}} es el modo con el que arranca CadCraft: observa cuánto tardan los fotogramas mientras mueve el puntero y activa esta opción por sí sola cuando se mantienen lentos durante unos segundos. Se lo indica una vez al hacerlo. {{ui:Desactivadas}} mantiene la cruz dibujada sea cual sea la velocidad.

## Si sigue lento

- Compruebe que la aceleración por hardware está activada en su navegador: abra `chrome://gpu` (o `edge://gpu`) en una pestaña nueva. Si las primeras líneas dicen "Software only" o "Disabled", el navegador dibuja sin la tarjeta gráfica. Actualizar el controlador gráfico suele solucionarlo.
- Cierre otras pestañas y programas pesados, y pruebe con una ventana del navegador más pequeña.
- Infórmenos a través de {{ui:Ayuda}}, {{ui:Informar de un problema}}: indique si usa el navegador o CadCraft Studio, su versión y lo que muestra la página gpu.
